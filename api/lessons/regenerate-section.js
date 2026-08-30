import { authenticateTeacher } from '../_lib/auth.js'
import { config, missingConfig } from '../_lib/config.js'
import { userMessage } from '../_lib/errors.js'
import { quickCompletion } from '../_lib/openai.js'
import { auditLessonDepth, normalizeLessonDocument } from '../../src/lib/lesson/schema.js'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/**
 * BÖLÜM YENİDEN ÜRETİMİ
 * ==================================================================
 *
 * Yalnızca öğretmenin seçtiği TEK bölümü yeniler; dersin geri kalanına
 * dokunmaz (§42). Sonuç doğrudan kaydedilmez — öğretmenin editorüne taslak
 * olarak döner, kaydetme kararı insanındır.
 *
 * BURADAKİ ASIL DEĞİŞİKLİK: DERİNLİK
 * Bu uçtaki eski istem "en fazla 6 blok kullan" diyordu ve 1500 token
 * tavanı vardı. Model de doğal olarak kısa, madde madde, yüzeysel bölümler
 * üretiyordu — DrKoç'un en çok kaçındığı çıktı (§4, §54).
 *
 * Yeni istem üç şeyi zorunlu kılar:
 *   1) Anlatım paragraf hâlinde ve yeterli uzunlukta olacak.
 *   2) "Neden" katmanı ve öğretmen müdahalesi bulunacak.
 *   3) Sunum kararı verilmeyecek — model yalnızca ANLAM üretir (§14).
 *
 * Üstüne sunucu tarafında bir kontrol daha var: üretilen bölüm mevcut
 * bölümden belirgin biçimde ZAYIFSA reddedilir. Böylece "AI ile yenile"
 * düğmesi dersi yanlışlıkla fakirleştiremez.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: { code: 'invalid_request', message: userMessage('invalid_request') } })
  }
  if (missingConfig().length) {
    return res.status(503).json({ error: { code: 'not_configured', message: userMessage('not_configured') } })
  }

  const auth = await authenticateTeacher(req)
  if (!auth.ok) return res.status(auth.status).json({ error: { code: auth.code, message: userMessage(auth.code) } })

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body
  const lessonId = typeof body?.lessonId === 'string' && UUID.test(body.lessonId) ? body.lessonId : null
  const sectionId = typeof body?.sectionId === 'string' ? body.sectionId.slice(0, 160) : null
  const instruction = typeof body?.instruction === 'string' ? body.instruction.trim().slice(0, 1200) : ''
  if (!lessonId || !sectionId || !instruction) {
    return res.status(400).json({ error: { code: 'invalid_request', message: userMessage('invalid_request') } })
  }

  const { data: lesson, error } = await auth.supabase
    .from('structured_lessons')
    .select('id, title, subtitle, document, topic_id, library_topics(name, library_subjects(name, exam_type))')
    .eq('id', lessonId)
    .single()
  if (error || !lesson) return res.status(404).json({ error: { code: 'not_found', message: 'Ders notu bulunamadı.' } })

  const document = normalizeLessonDocument(lesson.document)
  const sectionIndex = document.sections.findIndex((item) => item.id === sectionId)
  if (sectionIndex < 0) return res.status(404).json({ error: { code: 'not_found', message: 'Bölüm bulunamadı.' } })

  const section = document.sections[sectionIndex]
  const topicName = lesson.library_topics?.name ?? ''
  const subjectName = lesson.library_topics?.library_subjects?.name ?? ''
  const examType = lesson.library_topics?.library_subjects?.exam_type ?? ''

  const run = await auth.supabase
    .from('lesson_generation_runs')
    .insert({
      lesson_id: lesson.id,
      initiated_by: auth.user.id,
      kind: 'section',
      status: 'started',
      provider: 'openai',
      model: config.lessonModel,
    })
    .select('id')
    .maybeSingle()

  try {
    const output = await quickCompletion({
      system: buildSystemPrompt(),
      user: buildUserPrompt({ lesson, section, sectionIndex, document, instruction, topicName, subjectName, examType }),
      maxTokens: config.lessonMaxOutputTokens,
      model: config.lessonModel,
      temperature: 0.5,
    })

    const generated = safeParse(stripFence(output))
    if (!generated?.title || !Array.isArray(generated.blocks)) throw new Error('invalid_model_json')

    // Şemadan geçir: tanınmayan alanlar düşer, tanınmayan tipler atılır.
    const candidate = normalizeLessonDocument({
      ...document,
      sections: document.sections.map((item, index) => (index === sectionIndex ? { ...generated, id: section.id } : item)),
    })
    const nextSection = candidate.sections[sectionIndex]
    if (!nextSection?.blocks.length) throw new Error('empty_generated_section')

    // Fakirleşme koruması: yeni bölüm eskisinin belirgin biçimde altındaysa
    // öğretmene "yenilendi" deyip içeriği zayıflatmayız.
    const before = sectionWords(document, sectionIndex)
    const after = sectionWords(candidate, sectionIndex)
    if (before > 120 && after < before * 0.6) throw new Error('regenerated_section_thinner')

    if (run.data?.id) {
      await auth.supabase
        .from('lesson_generation_runs')
        .update({ status: 'succeeded', completed_at: new Date().toISOString(), model: config.lessonModel })
        .eq('id', run.data.id)
    }

    return res.status(200).json({
      section: nextSection,
      audit: auditLessonDepth({ ...candidate, sections: [nextSection] }),
    })
  } catch (generationError) {
    const code = String(generationError?.message ?? 'generation_failed').slice(0, 120)
    if (run.data?.id) {
      await auth.supabase
        .from('lesson_generation_runs')
        .update({ status: 'failed', error_code: code, completed_at: new Date().toISOString() })
        .eq('id', run.data.id)
    }
    return res.status(502).json({
      error: {
        code: 'generation_failed',
        message:
          code === 'regenerated_section_thinner'
            ? 'Üretilen bölüm mevcut anlatımdan daha yüzeysel çıktı; mevcut içerik korundu. Komutu daha somut yazıp tekrar deneyin.'
            : 'Bu bölüm şu anda yenilenemedi. Mevcut içerik korunuyor; biraz sonra tekrar deneyin.',
      },
    })
  }
}

/* ==================================================================
   İSTEM
   ================================================================== */

function buildSystemPrompt() {
  return `Sen DrKoç için ders notu yazan deneyimli bir özel ders öğretmenisin. Türkiye müfredatını ve sınav sistemini (LGS/TYT/AYT) biliyorsun.

ÇIKTI: yalnızca geçerli JSON. Markdown, açıklama veya kod bloğu yazma.

ŞEMA
{"title":"bölüm başlığı","kind":"opening|build|deepen|practice|close","lead":"bölümün kısa girişi","blocks":[ ...bloklar... ]}

BLOK TİPLERİ ve alanları:
  {"type":"prose","body":"paragraf paragraf anlatım"}
  {"type":"concept","term":"kavram adı","body":"tanım ve açılımı"}
  {"type":"why","question":"Neden ...?","body":"cevap"}
  {"type":"mechanism","title":"...","body":"...","steps":[{"title":"...","body":"..."}]}
  {"type":"process","title":"...","intro":"...","steps":[{"title":"...","body":"..."}]}
  {"type":"teacher_note","tone":"note|warning|exam|connection","body":"kısa kenar notu"}
  {"type":"trap","title":"hatanın adı","wrong":"öğrencinin kurduğu yanlış mantık","right":"doğrusu","body":"ek açıklama"}
  {"type":"exam","title":"...","body":"...","patterns":["soru kalıbı", ...]}
  {"type":"connection","title":"...","body":"...","links":["konu", ...]}
  {"type":"memory","body":"tek cümlelik hafıza kancası"}
  {"type":"compare","title":"...","columns":["A","B"],"rows":[{"label":"ayrım ekseni","values":["...","..."]}],"insight":"asıl fark"}
  {"type":"table","title":"...","columns":[...],"rows":[[...],[...]],"caption":"..."}
  {"type":"formula","title":"...","latex":"LaTeX","variables":[{"sym":"F","desc":"..."}],"meaning":"..."}
  {"type":"example","title":"...","body":"..."}
  {"type":"worked_example","title":"...","prompt":"soru","steps":[{"title":"...","body":"..."}],"answer":"...","takeaway":"..."}
  {"type":"checkpoint","prompt":"öğrenciye sorulan","hint":"ipucu","answer":"cevap"}
  {"type":"quiz","purpose":"recall|concept|apply|error","question":"...","options":["A","B","C","D"],"answer_index":0,"explanation":"neden doğru VE çeldiriciler neden yanlış"}
  {"type":"summary","title":"...","points":["madde", ...]}
  {"type":"next_step","body":"...","topics":["konu"]}
  {"type":"audio_script","body":"öğretmenin sesli anlatımı"}

METİN İŞARETLEME (yalnızca bunlar): **kalın**  ==vurgu==  *eğik*  $LaTeX$  ve satır başında "- " ile madde.

MUTLAK KURALLAR

1. SUNUM KARARI VERME. Renk, kart, kutu, ikon, emoji, gradient ADI GEÇMESİN. Sen yalnızca anlamı üretirsin; görsel karar yazılıma aittir.

2. YÜZEYSEL YAZMA. Bu en önemli kural.
   - Bölüm toplam 350–800 kelime olmalı.
   - Her "prose" bloğu en az iki paragraf olmalı; tek cümlelik blok yazma.
   - Tanım verip geçme: tanımın ardından mutlaka mekanizmayı veya sebebini anlat.
   - "Şunu bilmelisin", "önemlidir", "dikkat etmelisin" gibi içi boş cümleler yasak. Neyin neden önemli olduğunu SÖYLE.

3. ÖĞRETMEN GİBİ YAZ, TANITIM METNİ GİBİ DEĞİL.
   Yasak: "Harika!", "Hadi keşfedelim!", "İnanılmaz bir yolculuk", "süper önemli", emoji.
   Doğru: "Buradaki ayrımı iyi kur.", "Öğrencilerin en sık yaptığı hata burada.", "Bu kısmı anlamadan devam etme."

4. HER BÖLÜMDE en az bir "why" veya "mechanism" bulunsun; öğrenci ezber değil sebep öğrensin.

5. UYDURMA. Kesin sınav sorusu iddiası, uydurma kaynak, uydurma istatistik yazma. Emin olmadığın sayısal değeri verme.

6. Görsel gerektiğini düşünüyorsan bunu "teacher_note" içinde öğretmene söyle; "figure" bloğu ÜRETME — şemalar yazılım tarafında çizilir ve sen hangilerinin var olduğunu bilmiyorsun.

7. Blok sayısı 4–10 arasında olsun. Ama blok sayısını tutturmak için içeriği bölme; her blok kendi başına anlamlı olsun.`
}

function buildUserPrompt({ lesson, section, sectionIndex, document, instruction, topicName, subjectName, examType }) {
  const outline = document.sections
    .map((item, index) => `${index + 1}. ${item.title}${index === sectionIndex ? '  ← YENİLENECEK BÖLÜM' : ''}`)
    .join('\n')

  return `DERS: ${lesson.title}
${lesson.subtitle ? `ÖĞRETMENİN VAADİ: ${lesson.subtitle}\n` : ''}DERS ADI: ${subjectName || '—'}
KONU: ${topicName || '—'}
SINAV: ${examType || '—'}

DERSİN BÖLÜM PLANI (bağlam için — diğer bölümleri TEKRARLAMA):
${outline}

YENİLENECEK BÖLÜMÜN ŞU ANKİ HÂLİ:
${JSON.stringify(section)}

ÖĞRETMENİN KOMUTU:
${instruction}

Yalnızca yukarıda işaretli bölümü yeniden yaz. Bölümün dersteki rolü (${section.kind}) korunsun. Diğer bölümlerin içeriğini tekrar etme. Yalnızca JSON döndür.`
}

/* ==================================================================
   Yardımcılar
   ================================================================== */

function sectionWords(document, index) {
  const section = document.sections[index]
  if (!section) return 0
  return JSON.stringify(section)
    .replace(/"[a-z_]+":/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function safeParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function stripFence(value) {
  return String(value ?? '')
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/, '')
}
