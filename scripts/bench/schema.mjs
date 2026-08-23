/**
 * BENCHMARK — structured output şeması, konu enum'u ve görev tanımı.
 *
 * ÜÇ TASARIM KARARI
 * -----------------
 * 1. KONU SERBEST METİN DEĞİL, ENUM.
 *    `api/_lib/prompt.js` içinde AI Koç'a "konu adı uydurma" diye üç
 *    paragraf yazılmış. Prompt'la yalvarmak yerine burada şemayla
 *    kısıtlıyoruz: model yalnızca `graph.js`'te GERÇEKTEN VAR OLAN bir konu
 *    adı üretebilir. Bu, uydurmayı imkânsız kılar, azaltmaz.
 *
 *    Bunun ölçüme etkisi: "topic accuracy" artık "modelin uydurma eğilimi"ni
 *    değil, "doğru konuyu seçebilme"sini ölçer. İkincisi ürün için asıl
 *    önemli olandır. Uydurma eğilimini ayrıca ölçmek istersek `--free-topic`
 *    bayrağıyla enum kaldırılabilir.
 *
 * 2. OPENAI STRICT MODU EN KISITLAYICI OLANDIR, ŞEMA ONA GÖRE YAZILIR.
 *    `strict: true` her nesnede `additionalProperties: false` ve TÜM
 *    alanların `required` içinde olmasını şart koşuyor. İsteğe bağlı alan
 *    yazamayız; bunun yerine `type: ['string','null']` kullanıyoruz.
 *    Gemini bu fazlalıkları adaptöründe ayıklıyor.
 *
 * 3. SUNUM ŞEMADA YOK.
 *    Ne adım başlığı, ne renk, ne animasyon, ne zamanlama. Model NE
 *    olduğunu söyler; nasıl gösterileceğine (ileride) DrKoç kodu karar
 *    verir. Faz 0'da zaten hiçbir şey gösterilmiyor, ama şemayı baştan
 *    doğru kurmak Faz 1'de yeniden üretim yapmamızı engeller.
 */

import { CURRICULUM_GRAPH } from '../../src/lib/curriculum/graph.js'

export const SCHEMA_VERSION = '1.0'

/* ==================================================================
   KONU ENUM'U — graph.js tek kaynak
   ================================================================== */

/**
 * Verilen sınav türü + ders çiftleri için resmî konu adlarını toplar.
 *
 * "Ders > Konu" biçiminde döner ki model hem dersi hem konuyu tek alanda
 * tutarlı seçsin. İki ayrı enum olsaydı model "AYT Matematik" dersiyle
 * "TYT Geometri" konusunu eşleştirebilirdi.
 */
export function buildTopicEnum(scope = [['TYT', 'Matematik'], ['TYT', 'Geometri'], ['AYT', 'Matematik'], ['AYT', 'Geometri']]) {
  const seen = new Set()
  const values = []

  for (const [examType, subject] of scope) {
    const topics = CURRICULUM_GRAPH[examType]?.[subject]
    if (!topics) {
      throw new Error(`graph.js içinde bulunamadı: ${examType} > ${subject}`)
    }
    for (const node of topics) {
      const label = `${subject} > ${node.name}`
      if (seen.has(label)) continue
      seen.add(label)
      values.push(label)
    }
  }

  // Model hiçbirine uymadığına karar verebilmeli. Bu seçeneği KALDIRMAK,
  // modeli yanlış bir konu seçmeye zorlar ve topic accuracy'yi sahte
  // biçimde ölçer.
  values.push('BELİRSİZ')

  return values
}

/* ==================================================================
   ŞEMA
   ================================================================== */

const str = (description) => ({ type: 'string', description })
const nullableStr = (description) => ({ type: ['string', 'null'], description })
const conf = (description) => ({ type: 'number', description })

export function buildSchema({ topicEnum = buildTopicEnum() } = {}) {
  return {
    type: 'object',
    additionalProperties: false,
    required: ['schema_version', 'reading', 'classification', 'solution', 'verification'],
    properties: {
      schema_version: { type: 'string', enum: [SCHEMA_VERSION] },

      /* ---------- A) OKUMA — çözümden bağımsız ---------- */
      reading: {
        type: 'object',
        additionalProperties: false,
        required: ['readable', 'confidence', 'question_text', 'choices', 'has_figure', 'figure_description'],
        properties: {
          readable: {
            type: 'boolean',
            description: 'Görüntü soruyu çözmeye yetecek kadar okunabilir mi.',
          },
          confidence: conf('Soruyu DOĞRU OKUDUĞUNA dair güvenin, 0-1.'),
          question_text: str(
            'Sorunun tam metni, gördüğün gibi. Matematiksel ifadeleri LaTeX ile yaz ($...$ içinde). Yorum ekleme, çözme.'
          ),
          choices: {
            type: 'array',
            description: 'Şıklar. Açık uçlu soruda boş dizi.',
            items: {
              type: 'object',
              additionalProperties: false,
              required: ['key', 'text'],
              properties: {
                key: str('A, B, C, D veya E'),
                text: str('Şıkkın içeriği, LaTeX ile.'),
              },
            },
          },
          has_figure: {
            type: 'boolean',
            description: 'Soruda şekil, grafik, tablo veya diyagram var mı.',
          },
          figure_description: nullableStr(
            'Şekil varsa: noktalar, doğrular, açılar, uzunluklar, etiketler ve aralarındaki ilişkiler. Şekil yoksa null. ÖNEMLİ: şekil ölçekli olmayabilir; piksellerden ölçü tahmin etme, yalnızca ETİKETLENMİŞ bilgiyi yaz.'
          ),
        },
      },

      /* ---------- B) SINIFLANDIRMA — enum kısıtlı ---------- */
      classification: {
        type: 'object',
        additionalProperties: false,
        required: ['exam_type', 'topic', 'topic_confidence', 'difficulty'],
        properties: {
          exam_type: { type: 'string', enum: ['TYT', 'AYT', 'BELİRSİZ'] },
          topic: {
            type: 'string',
            enum: topicEnum,
            description: 'Yalnızca listedeki değerlerden birini seç. Emin değilsen BELİRSİZ.',
          },
          topic_confidence: conf('Konu seçimine dair güvenin, 0-1.'),
          difficulty: {
            type: 'integer',
            description: 'Tahmini zorluk 1 (çok kolay) - 5 (çok zor).',
          },
        },
      },

      /* ---------- C) ÇÖZÜM — semantik, sunum değil ---------- */
      solution: {
        type: 'object',
        additionalProperties: false,
        required: ['steps', 'answer'],
        properties: {
          steps: {
            type: 'array',
            description: 'Çözüm adımları, sırayla. Her adım tek bir mantıksal hamle olsun.',
            items: {
              type: 'object',
              additionalProperties: false,
              required: ['id', 'claim', 'math'],
              properties: {
                id: { type: 'integer', description: '1den başlayan sıra numarası.' },
                claim: str('Bu adımda ne yaptığın, tek cümle Türkçe. Formül değil, gerekçe.'),
                math: nullableStr(
                  'Bu adımın matematiksel ifadesi, LaTeX (dolar işareti OLMADAN). Bu adımda matematik yoksa null.'
                ),
              },
            },
          },
          answer: {
            type: 'object',
            additionalProperties: false,
            required: ['value', 'choice', 'unit'],
            properties: {
              value: str('Sayısal veya cebirsel cevap, LaTeX. Örn: "8" veya "2\\\\sqrt{3}".'),
              choice: nullableStr('Doğru şıkkın harfi (A-E). Açık uçlu soruda null.'),
              unit: nullableStr('Birim varsa, örn "cm". Yoksa null.'),
            },
          },
        },
      },

      /* ---------- D) DOĞRULAMA — makine koşacak ---------- */
      verification: {
        type: 'object',
        additionalProperties: false,
        required: ['claims', 'self_confidence', 'ambiguity_notes'],
        properties: {
          claims: {
            type: 'array',
            description:
              'Cevabının DOĞRULUĞUNU bağımsız olarak kanıtlayan, makine tarafından kontrol edilebilir iddialar. Kontrol edilebilir bir iddia kuramıyorsan boş dizi bırak — uydurma iddia yazma.',
            items: {
              type: 'object',
              additionalProperties: false,
              required: ['type', 'expression', 'variables', 'expect', 'tolerance'],
              properties: {
                type: {
                  type: 'string',
                  enum: ['substitute', 'arithmetic', 'equation_check', 'numerical_check'],
                },
                expression: str(
                  'Değerlendirilecek ifade, düz matematik sözdizimi (LaTeX DEĞİL). Örn: "x^2 - 17*x + 72". equation_check için "lhs = rhs" biçiminde.'
                ),
                variables: {
                  type: 'array',
                  description: 'İfadedeki değişkenlerin değerleri.',
                  items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['name', 'value'],
                    properties: {
                      name: str('Değişken adı, örn "x".'),
                      value: { type: 'number', description: 'Sayısal değeri.' },
                    },
                  },
                },
                expect: { type: 'number', description: 'İfadenin eşit olması beklenen sayı.' },
                tolerance: {
                  type: 'number',
                  description: 'Kabul edilebilir sapma. Tam sayı beklentisinde 0 yaz.',
                },
              },
            },
          },
          self_confidence: conf(
            'Cevabının DOĞRU olduğuna dair güvenin, 0-1. Dürüst ol: emin değilsen düşük yaz. Yanlış ama yüksek güvenli cevap, düşük güvenli cevaptan çok daha zararlıdır.'
          ),
          ambiguity_notes: {
            type: 'array',
            description: 'Soruda belirsiz, okunamayan veya çelişkili bulduğun noktalar. Yoksa boş dizi.',
            items: { type: 'string' },
          },
        },
      },
    },
  }
}

/* ==================================================================
   GÖREV TANIMI — TÜM MODELLER İÇİN AYNI
   Kullanıcı talebi §7: "Benchmark görevini provider lehine değiştirme."
   Bu metin tek yerde durur ve adaptörler ona dokunamaz.
   ================================================================== */

export const SYSTEM_PROMPT = `Sen Türkiye'deki YKS (TYT/AYT) sınavına hazırlanan öğrenciler için çalışan bir matematik öğretmenisin.
Sana bir sınav sorusunun görüntüsü verilecek.

Görevin:
1. Soruyu dikkatlice oku ve tam metnini çıkar.
2. Sorunun ne istediğini belirle.
3. Görselde şekil, grafik veya tablo varsa içindeki bilgiyi kullan.
4. Soruyu adım adım çöz.
5. Doğru cevabı belirle.
6. Çözümünün doğruluğunu bağımsız olarak kanıtlayabilecek, makine tarafından kontrol edilebilir iddialar üret.
7. Emin olmadığın noktaları açıkça belirt.
8. Sonucu verilen JSON şemasına tam uygun döndür.

KURALLAR
- Şekil ölçekli olmayabilir. Piksellerden uzunluk veya açı TAHMİN ETME; yalnızca etiketlenmiş ya da metinde verilmiş bilgiyi kullan.
- Konu alanında yalnızca listede verilen değerlerden birini seç. Listede olmayan bir konu adı yazamazsın.
- Güven skorlarını dürüst ver. Emin olmadığın bir cevaba yüksek güven yazmak, bu değerlendirmedeki en ağır hatadır.
- Soruyu okuyamıyorsan readable alanını false yap ve çözmeye çalışma.
- Yalnızca JSON üret. Açıklama, giriş cümlesi veya kod bloğu işareti ekleme.`

export const USER_PROMPT = `Aşağıdaki sınav sorusunu çöz ve sonucu şemaya uygun JSON olarak döndür.`

/* ==================================================================
   ŞEMA UYUM DENETİMİ
   Model şemaya uysa bile içerik tutarsız olabilir (örn. 0 adımlı çözüm).
   Bunlar "model hatası" olarak ayrı raporlanır.
   ================================================================== */

export function validateShape(parsed) {
  const problems = []
  if (!parsed || typeof parsed !== 'object') return ['çıktı JSON nesnesi değil']

  const r = parsed.reading
  const c = parsed.classification
  const s = parsed.solution
  const v = parsed.verification

  if (!r || typeof r.readable !== 'boolean') problems.push('reading.readable eksik')
  if (!c || typeof c.topic !== 'string') problems.push('classification.topic eksik')
  if (!s || !Array.isArray(s.steps)) problems.push('solution.steps eksik')
  else if (r?.readable && s.steps.length === 0) problems.push('okunabilir soruda 0 çözüm adımı')
  if (!s?.answer || typeof s.answer.value !== 'string') problems.push('solution.answer.value eksik')
  if (!v || typeof v.self_confidence !== 'number') problems.push('verification.self_confidence eksik')

  for (const key of ['confidence']) {
    const n = r?.[key]
    if (typeof n === 'number' && (n < 0 || n > 1)) problems.push(`reading.${key} 0-1 aralığı dışında: ${n}`)
  }
  if (typeof v?.self_confidence === 'number' && (v.self_confidence < 0 || v.self_confidence > 1)) {
    problems.push(`verification.self_confidence 0-1 aralığı dışında: ${v.self_confidence}`)
  }

  return problems
}
