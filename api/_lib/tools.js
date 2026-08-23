/**
 * AI Koç — araç (tool / function calling) katmanı.
 *
 * GÜVENLİK MİMARİSİ — İKİ SINIF ARAÇ
 * -----------------------------------
 * 1. OKUMA araçları (`get_*`): sunucuda anında çalışır. Hepsi öğrencinin
 *    KENDİ JWT'siyle açılmış Supabase istemcisini kullanır ve ayrıca
 *    `.eq('student_id', studentId)` ile sınırlanır. Model bir öğrenci
 *    kimliği PARAMETRE OLARAK VEREMEZ — şemada böyle bir alan yoktur;
 *    kimlik daima jetondan gelir.
 *
 * 2. YAZMA araçları (`create_*`, `log_*`, `update_*`, `complete_*`):
 *    modelin çağrısı ASLA doğrudan veritabanına yazmaz. Araç "onay
 *    bekliyor" döner, kullanıcıya bir aksiyon kartı gösterilir ve yazma
 *    ancak kullanıcı butona bastığında `/api/ai-coach/action` üzerinden
 *    gerçekleşir. Böylece modelin halüsinasyonu veya kötü niyetli bir
 *    prompt enjeksiyonu tek başına veri değiştiremez.
 *
 * Silme, hesap işlemi, öğretmen verisi veya başka kullanıcıya dokunan
 * hiçbir araç TANIMLANMAMIŞTIR — yani model isteseydi bile çağıramaz.
 */

import { toKey } from '../../src/lib/insights.js'
import { splitSubjectTopic } from '../../src/lib/subjectSplit.js'
import { checkPrerequisites, orderPlanItems } from '../../src/lib/curriculum/readiness.js'

const DAY_MS = 24 * 60 * 60 * 1000

/** Uzun vadeli hafızaya yazılmasına izin verilen anahtarlar (beyaz liste). */
const MEMORY_KEYS = {
  hedef_sinav: { label: 'Hedef sınav', maxLen: 20 },
  // Sınav tarihi olmadan "kalan süreye göre öncelik" hesabı yapılamaz;
  // biçim doğrulaması `cleanDate` ile ayrıca zorlanır.
  sinav_tarihi: { label: 'Sınav tarihi', maxLen: 10, kind: 'date' },
  hazirlik_durumu: { label: 'Hazırlık durumu', maxLen: 120 },
  hedef_bolum: { label: 'Hedef bölüm/okul', maxLen: 120 },
  hedef_net: { label: 'Hedef net', maxLen: 40 },
  calisma_saati: { label: 'Tercih edilen çalışma saatleri', maxLen: 120 },
  gunluk_hedef_dakika: { label: 'Günlük çalışma hedefi (dk)', maxLen: 10 },
  zorlandigi_ders: { label: 'Zorlandığı ders', maxLen: 80 },
  notlar: { label: 'Kendi notu', maxLen: 300 },
}

const ACTIVITIES = ['soru_cozumu', 'konu_tekrari', 'yanlis_analizi', 'deneme']
const EXAM_TYPES = ['LGS', 'TYT', 'AYT', 'KPSS']

/* ==================================================================
   ŞEMA — OpenAI'a gönderilen araç tanımları
   ================================================================== */

export const TOOL_SCHEMAS = [
  {
    type: 'function',
    function: {
      name: 'get_study_sessions',
      description:
        'Öğrencinin günlük çalışma kayıtlarını (tarih, ders-konu, süre, doğru/yanlış/boş, not) detaylı getirir. Durum raporundaki özet yetmediğinde, örneğin belirli bir dersin son kayıtlarına bakman gerektiğinde kullan.',
      parameters: {
        type: 'object',
        properties: {
          days: {
            type: 'integer',
            description: 'Kaç gün geriye bakılacak (1-90).',
            minimum: 1,
            maximum: 90,
          },
          subject: {
            type: 'string',
            description:
              'İsteğe bağlı ders filtresi, örn. "Matematik". Boş bırakılırsa tüm dersler gelir.',
          },
        },
        required: ['days'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_subject_detail',
      description:
        'Tek bir dersin konu konu kırılımını getirir: her konuda kaç soru çözülmüş, isabet oranı ne, ne kadar süre ayrılmış. Bir dersin neresinde takıldığını anlamak için kullan.',
      parameters: {
        type: 'object',
        properties: {
          subject: { type: 'string', description: 'Ders adı, örn. "Matematik".' },
          days: {
            type: 'integer',
            description: 'Kaç gün geriye bakılacak (varsayılan 60).',
            minimum: 7,
            maximum: 90,
          },
        },
        required: ['subject'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_exam_detail',
      description:
        'Deneme sınavı sonuçlarını ders bazlı doğru/yanlış/boş/net kırılımıyla getirir. Deneme analizi istendiğinde kullan.',
      parameters: {
        type: 'object',
        properties: {
          exam_type: {
            type: 'string',
            enum: EXAM_TYPES,
            description: 'İsteğe bağlı sınav türü filtresi.',
          },
          limit: {
            type: 'integer',
            description: 'Kaç deneme getirilecek (1-10, varsayılan 5).',
            minimum: 1,
            maximum: 10,
          },
        },
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_homeworks',
      description:
        'Öğretmenin verdiği ödevleri getirir. Plan yaparken ödev yükünü hesaba katmak için kullan.',
      parameters: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            enum: ['bekleyen', 'tamamlanan', 'tumu'],
            description: 'Varsayılan "bekleyen".',
          },
        },
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_curriculum_topics',
      description:
        'Öğretmenin kütüphaneye girdiği resmî müfredat konularını getirir. Çalışma planı yaparken konu adlarını UYDURMAK yerine bu listeden seç.',
      parameters: {
        type: 'object',
        properties: {
          subject: {
            type: 'string',
            description: 'İsteğe bağlı ders adı filtresi, örn. "Matematik".',
          },
          exam_type: {
            type: 'string',
            enum: EXAM_TYPES,
            description: 'İsteğe bağlı sınav türü filtresi.',
          },
        },
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_learning_path',
      description:
        'Öğrencinin ŞU AN öğrenmeye hazır konularını öncelik sırasıyla, ön koşulu tamamlanmadığı için henüz erken olan konularla birlikte getirir. "Nereden başlamalıyım", "sıradaki konu ne", "bu derste ne yapmalıyım" gibi sorularda ve haftalık plan kurarken kullan. Eksik konu listesi DEĞİLDİR; sırası gelmiş konu listesidir.',
      parameters: {
        type: 'object',
        properties: {
          subject: {
            type: 'string',
            description: 'İsteğe bağlı ders filtresi, örn. "Biyoloji". Boşsa tüm dersler.',
          },
          limit: {
            type: 'integer',
            description: 'Kaç konu döneceği (1-15, varsayılan 8).',
            minimum: 1,
            maximum: 15,
          },
        },
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'check_topic_prerequisites',
      description:
        'Belirli bir konunun ŞU AN çalışılmaya uygun olup olmadığını söyler; uygun değilse önce hangi konuların gelmesi gerektiğini sıralı olarak verir. Öğrenci bir konu adı söylediğinde ("fotosentez çalışayım mı", "türeve başlıyorum") ve bir plana konu koymadan önce kullan.',
      parameters: {
        type: 'object',
        properties: {
          subject: { type: 'string', description: 'Ders adı, örn. "Biyoloji".' },
          topic: { type: 'string', description: 'Konu adı, örn. "Fotosentez".' },
        },
        required: ['subject', 'topic'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_study_plan',
      description:
        'Daha önce oluşturulmuş AI Koç çalışma planı maddelerini getirir. Yeni plan yapmadan önce mevcut planı kontrol etmek için kullan.',
      parameters: {
        type: 'object',
        properties: {
          from: { type: 'string', description: 'Başlangıç tarihi YYYY-AA-GG.' },
          to: { type: 'string', description: 'Bitiş tarihi YYYY-AA-GG.' },
        },
      },
    },
  },

  /* ---------------- YAZMA ARAÇLARI (onay gerektirir) ---------------- */

  {
    type: 'function',
    function: {
      name: 'create_study_plan',
      description:
        'Öğrenci için çalışma planı önerir. ÖNEMLİ: bu araç planı kaydetmez, kullanıcıya onay kartı gösterir. Konuları önce müfredat ön koşullarına göre seç; araç bozuk bir sırayı düzeltir ve neyi değiştirdiğini sana bildirir. Çağırdıktan sonra planı metin olarak DÜZELTİLMİŞ sırayla özetle ve "onaylarsan kaydedeceğim" de.',
      parameters: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'Planın kısa adı, örn. "Bugünün planı" veya "Hafta sonu programı".',
          },
          items: {
            type: 'array',
            description: 'Plan maddeleri (en fazla 12).',
            items: {
              type: 'object',
              properties: {
                subject: { type: 'string', description: 'Ders adı, örn. "Matematik".' },
                topic: { type: 'string', description: 'Konu adı, örn. "Türev".' },
                activity: {
                  type: 'string',
                  enum: ACTIVITIES,
                  description: 'Çalışmanın türü.',
                },
                planned_date: {
                  type: 'string',
                  description: 'Tarih YYYY-AA-GG biçiminde. Bugün veya sonrası olmalı.',
                },
                duration_minutes: {
                  type: 'integer',
                  description: 'Süre (5-240 dk).',
                  minimum: 5,
                  maximum: 240,
                },
                reason: {
                  type: 'string',
                  description:
                    'Bu maddenin NEDEN şimdi geldiği — tek cümle, öğrencinin verisine dayalı (örn. "isabet %48, ön koşulları tamam"). Onay kartında görünür.',
                },
              },
              required: ['subject', 'activity', 'planned_date', 'duration_minutes'],
            },
          },
        },
        required: ['items'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'log_study_session',
      description:
        'Öğrencinin yaptığı bir çalışmayı günlük kayıtlara işlemeyi önerir. Yalnızca öğrenci "şunu çalıştım, kaydet" gibi AÇIKÇA söylediğinde çağır. Sayıları öğrencinin verdiği gibi kullan, tahmin etme. Bu araç da kaydetmez, onay kartı gösterir.',
      parameters: {
        type: 'object',
        properties: {
          study_date: { type: 'string', description: 'Tarih YYYY-AA-GG. Varsayılan bugün.' },
          subject: { type: 'string', description: 'Ders adı.' },
          topic: { type: 'string', description: 'Konu adı.' },
          duration_minutes: { type: 'integer', minimum: 0, maximum: 720 },
          correct: { type: 'integer', minimum: 0, maximum: 2000 },
          incorrect: { type: 'integer', minimum: 0, maximum: 2000 },
          empty: { type: 'integer', minimum: 0, maximum: 2000 },
          notes: { type: 'string', description: 'Kısa not (isteğe bağlı).' },
        },
        required: ['subject', 'duration_minutes'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'update_student_memory',
      description:
        'Öğrencinin uzun vadeli tercihini kaydetmeyi önerir (hedef sınav, hedef bölüm, hedef net, çalışma saati tercihi gibi). Yalnızca öğrenci bunu açıkça söylediğinde çağır. Sağlık, aile, iletişim bilgisi gibi kişisel veriyi ASLA kaydetme. Onay kartı gösterir.',
      parameters: {
        type: 'object',
        properties: {
          entries: {
            type: 'array',
            description: 'Kaydedilecek tercihler (en fazla 5).',
            items: {
              type: 'object',
              properties: {
                key: {
                  type: 'string',
                  enum: Object.keys(MEMORY_KEYS),
                  description: 'Tercih anahtarı.',
                },
                value: { type: 'string', description: 'Öğrencinin belirttiği değer.' },
              },
              required: ['key', 'value'],
            },
          },
        },
        required: ['entries'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'complete_study_task',
      description:
        'Plandaki bir maddeyi tamamlandı olarak işaretlemeyi önerir. Madde kimliğini önce get_study_plan ile al. Onay kartı gösterir.',
      parameters: {
        type: 'object',
        properties: {
          task_id: { type: 'string', description: 'get_study_plan sonucundaki madde id değeri.' },
        },
        required: ['task_id'],
      },
    },
  },
]

/** Yazma araçlarının adları — bunlar hiçbir zaman otomatik çalıştırılmaz. */
export const WRITE_TOOLS = new Set([
  'create_study_plan',
  'log_study_session',
  'update_student_memory',
  'complete_study_task',
])

/* ==================================================================
   YARDIMCILAR — girdi doğrulama
   ================================================================== */

function clampInt(value, min, max, fallback) {
  const n = Math.floor(Number(value))
  if (!Number.isFinite(n)) return fallback
  return Math.min(max, Math.max(min, n))
}

function cleanText(value, maxLen) {
  if (typeof value !== 'string') return null
  const trimmed = value.trim().replace(/\s+/g, ' ')
  if (!trimmed) return null
  return trimmed.slice(0, maxLen)
}

/** 'YYYY-AA-GG' doğrular; geçersizse null döner. */
function cleanDate(value) {
  if (typeof value !== 'string') return null
  const match = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!match) return null
  const d = new Date(`${match[0]}T00:00:00`)
  if (Number.isNaN(d.getTime())) return null
  return match[0]
}

/**
 * Hafıza değerini beyaz listeye ve türüne göre doğrular.
 *
 * Teklif üretimi ile onay sonrası yazma AYNI kuraldan geçmeli; iki yerde
 * ayrı ayrı yazılsaydı biri gevşer ve doğrulama fiilen kalkardı.
 *
 * @returns {string|null} normalize edilmiş değer ya da geçersizse null
 */
function normalizeMemoryValue(key, rawValue) {
  const spec = MEMORY_KEYS[key]
  if (!spec) return null

  const value = cleanText(rawValue, spec.maxLen)
  if (!value) return null

  // Hedef sınav yalnızca uygulamanın tanıdığı türlerden biri olabilir.
  if (key === 'hedef_sinav') {
    const upper = value.toLocaleUpperCase('tr-TR')
    return EXAM_TYPES.includes(upper) ? upper : null
  }

  // Sınav tarihi geçmişte olamaz — geçmiş bir tarih "kalan süre" hesabını
  // sessizce bozar ve model aceleci öneriler üretir.
  if (spec.kind === 'date') {
    const date = cleanDate(value)
    if (!date || date < toKey(new Date())) return null
    return date
  }

  return value
}

/** `daily_logs.topic` alanı "Ders - Konu" biçiminde saklanır. */
function joinSubjectTopic(subject, topic) {
  const s = cleanText(subject, 60) ?? 'Genel'
  const t = cleanText(topic, 80)
  return t ? `${s} - ${t}` : s
}

/* ==================================================================
   OKUMA ARAÇLARI
   ================================================================== */

const READERS = {
  async get_study_sessions(supabase, studentId, args) {
    const days = clampInt(args.days, 1, 90, 7)
    const cutoff = toKey(new Date(Date.now() - (days - 1) * DAY_MS))
    const subjectFilter = cleanText(args.subject, 60)

    const { data, error } = await supabase
      .from('daily_logs')
      .select('study_date, topic, duration_minutes, correct, incorrect, empty, notes')
      .eq('student_id', studentId)
      .gte('study_date', cutoff)
      .order('study_date', { ascending: false })
      .limit(120)

    if (error) return { error: 'Çalışma kayıtları okunamadı.' }

    let rows = data ?? []
    if (subjectFilter) {
      const needle = subjectFilter.toLocaleLowerCase('tr-TR')
      rows = rows.filter((l) =>
        splitSubjectTopic(l.topic).subject.toLocaleLowerCase('tr-TR').includes(needle)
      )
    }

    return {
      range_days: days,
      subject_filter: subjectFilter,
      count: rows.length,
      sessions: rows.slice(0, 60).map((l) => {
        const { subject, topic } = splitSubjectTopic(l.topic)
        return {
          date: l.study_date,
          subject,
          topic,
          minutes: l.duration_minutes ?? 0,
          correct: l.correct ?? 0,
          incorrect: l.incorrect ?? 0,
          empty: l.empty ?? 0,
          note: l.notes ?? null,
        }
      }),
    }
  },

  async get_subject_detail(supabase, studentId, args) {
    const subject = cleanText(args.subject, 60)
    if (!subject) return { error: 'Ders adı belirtilmedi.' }

    const days = clampInt(args.days, 7, 90, 60)
    const cutoff = toKey(new Date(Date.now() - (days - 1) * DAY_MS))

    const { data, error } = await supabase
      .from('daily_logs')
      .select('study_date, topic, duration_minutes, correct, incorrect, empty')
      .eq('student_id', studentId)
      .gte('study_date', cutoff)

    if (error) return { error: 'Ders detayı okunamadı.' }

    const needle = subject.toLocaleLowerCase('tr-TR')
    const map = {}

    ;(data ?? []).forEach((l) => {
      const parsed = splitSubjectTopic(l.topic)
      if (!parsed.subject.toLocaleLowerCase('tr-TR').includes(needle)) return
      const key = parsed.topic
      if (!map[key]) {
        map[key] = { topic: key, minutes: 0, correct: 0, incorrect: 0, empty: 0, sessions: 0 }
      }
      map[key].minutes += l.duration_minutes || 0
      map[key].correct += l.correct || 0
      map[key].incorrect += l.incorrect || 0
      map[key].empty += l.empty || 0
      map[key].sessions += 1
    })

    const topics = Object.values(map)
      .map((t) => {
        const attempted = t.correct + t.incorrect
        return {
          ...t,
          attempted,
          accuracy: attempted > 0 ? Math.round((t.correct / attempted) * 100) : null,
        }
      })
      .sort((a, b) => b.attempted - a.attempted)

    if (!topics.length) {
      return {
        subject,
        range_days: days,
        found: false,
        note: `Son ${days} günde "${subject}" dersine ait kayıt yok.`,
      }
    }

    return { subject, range_days: days, found: true, topics }
  },

  async get_exam_detail(supabase, studentId, args) {
    const limit = clampInt(args.limit, 1, 10, 5)
    let query = supabase
      .from('mock_exams')
      .select(
        'exam_type, exam_name, exam_date, mock_exam_subjects(subject, correct, incorrect, empty, net)'
      )
      .eq('student_id', studentId)
      .order('exam_date', { ascending: false })
      .limit(limit)

    if (args.exam_type && EXAM_TYPES.includes(args.exam_type)) {
      query = query.eq('exam_type', args.exam_type)
    }

    const { data, error } = await query
    if (error) return { error: 'Deneme sonuçları okunamadı.' }

    const exams = (data ?? []).map((e) => ({
      type: e.exam_type,
      name: e.exam_name || null,
      date: e.exam_date,
      total_net:
        Math.round((e.mock_exam_subjects ?? []).reduce((s, x) => s + Number(x.net || 0), 0) * 100) /
        100,
      subjects: (e.mock_exam_subjects ?? [])
        .filter((s) => (s.correct || 0) + (s.incorrect || 0) + (s.empty || 0) > 0)
        .map((s) => ({
          subject: s.subject,
          correct: s.correct,
          incorrect: s.incorrect,
          empty: s.empty,
          net: Number(s.net || 0),
        })),
    }))

    if (!exams.length) return { count: 0, note: 'Kayıtlı deneme sonucu bulunamadı.' }
    return { count: exams.length, exams }
  },

  async get_homeworks(supabase, studentId, args) {
    const status = ['bekleyen', 'tamamlanan', 'tumu'].includes(args.status)
      ? args.status
      : 'bekleyen'

    let query = supabase
      .from('homeworks')
      .select('title, description, due_date, status, created_at')
      .eq('student_id', studentId)
      .order('due_date', { ascending: true, nullsFirst: false })
      .limit(30)

    if (status === 'bekleyen') query = query.neq('status', 'Tamamlandı')
    if (status === 'tamamlanan') query = query.eq('status', 'Tamamlandı')

    const { data, error } = await query
    if (error) return { error: 'Ödevler okunamadı.' }

    const today = toKey(new Date())
    const items = (data ?? []).map((h) => ({
      title: h.title,
      description: h.description ? String(h.description).slice(0, 200) : null,
      due_date: h.due_date,
      status: h.status,
      overdue: Boolean(h.due_date && h.due_date < today && h.status !== 'Tamamlandı'),
    }))

    if (!items.length) return { count: 0, note: `"${status}" durumunda ödev yok.` }
    return { count: items.length, homeworks: items }
  },

  async get_curriculum_topics(supabase, _studentId, args) {
    // Müfredat tüm giriş yapmış kullanıcılara açıktır (öğretmen tarafından
    // yönetilen ortak veri) — öğrenciye özel bir filtre gerekmez.
    let subjectQuery = supabase.from('library_subjects').select('id, name, exam_type').limit(60)

    if (args.exam_type && EXAM_TYPES.includes(args.exam_type)) {
      subjectQuery = subjectQuery.eq('exam_type', args.exam_type)
    }

    const { data: subjects, error: subjectError } = await subjectQuery
    if (subjectError) return { error: 'Müfredat okunamadı.' }

    let filtered = subjects ?? []
    const needle = cleanText(args.subject, 60)?.toLocaleLowerCase('tr-TR')
    if (needle) {
      filtered = filtered.filter((s) => s.name.toLocaleLowerCase('tr-TR').includes(needle))
    }

    if (!filtered.length) {
      return { count: 0, note: 'Bu filtreye uyan müfredat dersi bulunamadı.' }
    }

    const { data: topics, error: topicError } = await supabase
      .from('library_topics')
      .select('subject_id, name, order_index')
      .in(
        'subject_id',
        filtered.slice(0, 8).map((s) => s.id)
      )
      .order('order_index', { ascending: true })
      .limit(200)

    if (topicError) return { error: 'Müfredat konuları okunamadı.' }

    const byId = {}
    filtered.forEach((s) => {
      byId[s.id] = { subject: s.name, exam_type: s.exam_type, topics: [] }
    })
    ;(topics ?? []).forEach((t) => {
      if (byId[t.subject_id]) byId[t.subject_id].topics.push(t.name)
    })

    return { count: filtered.length, curriculum: Object.values(byId).filter((s) => s.topics.length) }
  },

  /**
   * Müfredat sırası. Veritabanına GİTMEZ — hesap zaten bağlam kurulurken
   * `facts.learning` içinde yapıldı; burada yalnızca süzülüp biçimlenir.
   * İkinci kez hesaplarsak model ile durum raporu farklı sıralar gösterebilir.
   */
  async get_learning_path(_supabase, _studentId, args, facts) {
    const learning = facts?.learning
    if (!learning?.totalTopics) {
      return { error: 'Müfredat sırası hesaplanamadı.' }
    }

    const limit = clampInt(args.limit, 1, 15, 8)
    const needle = cleanText(args.subject, 60)?.toLocaleLowerCase('tr-TR')
    const bySubject = (x) => !needle || x.subject.toLocaleLowerCase('tr-TR').includes(needle)

    const ready = learning.ready.filter(bySubject).slice(0, limit)
    const blocked = learning.blocked.filter(bySubject).slice(0, limit)

    if (!ready.length && !blocked.length) {
      return {
        count: 0,
        note: needle
          ? `"${args.subject}" dersi için müfredat grafiğinde konu bulunamadı. Konu adlarını get_curriculum_topics ile alıp ön koşulsuz ilerleyebilirsin.`
          : 'Müfredat grafiğinde bu öğrenci için sıralanacak konu kalmadı.',
      }
    }

    return {
      exam_types: learning.examTypes,
      days_left: learning.daysLeft,
      note: 'ready_now = ön koşulları tamam, şimdi çalışılabilir. too_early = eksik ama ön koşulu tamamlanmamış; bunları çalıştırma, ön koşulunu öner.',
      ready_now: ready.map((x) => ({
        subject: x.subject,
        topic: x.topic,
        readiness_level: x.level,
        readiness_label: x.levelLabel,
        exam_weight: x.weight,
        est_hours: x.hours,
        unlocks: x.unlocks,
        accuracy: x.accuracy,
        attempted: x.attempted,
        why_now: x.reason,
      })),
      too_early: blocked.map((x) => ({
        subject: x.subject,
        topic: x.topic,
        readiness_level: x.level,
        missing_prerequisites: x.missingPrereqs.map((m) => `${m.subject} – ${m.topic}`),
      })),
      subject_coverage: learning.subjects
        .filter(bySubject)
        .slice(0, 8)
        .map((s) => ({
          subject: s.subject,
          exam_type: s.examType,
          total_topics: s.total,
          known_topics: s.known,
          coverage_pct: s.coveragePct,
        })),
    }
  },

  async check_topic_prerequisites(_supabase, _studentId, args, facts) {
    const subject = cleanText(args.subject, 60)
    const topic = cleanText(args.topic, 80)
    if (!subject || !topic) return { error: 'Ders ve konu adı gerekli.' }

    const learning = facts?.learning
    if (!learning?.totalTopics) return { error: 'Müfredat sırası hesaplanamadı.' }

    return checkPrerequisites(learning, subject, topic)
  },

  async get_study_plan(supabase, studentId, args) {
    const from = cleanDate(args.from) ?? toKey(new Date(Date.now() - 7 * DAY_MS))
    const to = cleanDate(args.to) ?? toKey(new Date(Date.now() + 14 * DAY_MS))

    const { data, error } = await supabase
      .from('ai_study_tasks')
      .select('id, subject, topic, activity, planned_date, duration_minutes, status')
      .eq('student_id', studentId)
      .gte('planned_date', from)
      .lte('planned_date', to)
      .order('planned_date', { ascending: true })
      .limit(60)

    if (error) return { error: 'Çalışma planı okunamadı.' }
    const items = data ?? []
    if (!items.length) return { count: 0, note: 'Bu tarih aralığında planlanmış madde yok.' }
    return { count: items.length, from, to, tasks: items }
  },
}

/* ==================================================================
   YAZMA ARAÇLARI — teklif üretimi (yazma YOK)
   ================================================================== */

/**
 * Modelin yazma çağrısını, kullanıcıya gösterilecek doğrulanmış bir
 * "aksiyon teklifi"ne çevirir. Veritabanına DOKUNMAZ.
 * Geçersiz argümanlar burada elenir; model hatalı bir plan önerirse
 * araç sonucunda gerekçeyi görür ve düzeltebilir.
 */
function proposeAction(name, args, facts) {
  const today = toKey(new Date())

  if (name === 'create_study_plan') {
    const rawItems = Array.isArray(args.items) ? args.items.slice(0, 12) : []
    const items = []

    rawItems.forEach((item) => {
      const subject = cleanText(item.subject, 60)
      if (!subject) return
      const date = cleanDate(item.planned_date)
      if (!date || date < today) return // geçmişe plan yapılmaz
      items.push({
        subject,
        topic: cleanText(item.topic, 80),
        activity: ACTIVITIES.includes(item.activity) ? item.activity : 'soru_cozumu',
        planned_date: date,
        duration_minutes: clampInt(item.duration_minutes, 5, 240, 30),
        reason: cleanText(item.reason, 160),
      })
    })

    if (!items.length) {
      return {
        toolResult: {
          status: 'error',
          reason:
            'Geçerli plan maddesi üretilemedi. Her maddede ders adı ve bugün veya sonrasına ait YYYY-AA-GG biçiminde bir tarih olmalı.',
        },
      }
    }

    /* ---- Müfredat sırası denetimi ----
       Model konuları doğru seçse bile günlere yanlış dağıtabiliyor
       ("Pazartesi Bitki Biyolojisi, Salı Hücre"). Burada tarih iskeletine
       dokunmadan yalnızca SIRA düzeltilir ve ne değiştiği modele bildirilir
       ki özeti düzeltilmiş plana göre yazsın. */
    let ordered = items
    let swaps = []
    let warnings = []
    if (facts?.learning?.totalTopics) {
      const result = orderPlanItems(items, facts.learning)
      ordered = result.items
      swaps = result.swaps
      warnings = result.warnings
    }

    const totalMinutes = ordered.reduce((s, i) => s + i.duration_minutes, 0)

    return {
      toolResult: {
        status: 'awaiting_user_confirmation',
        note: 'Plan hazırlandı ve kullanıcıya onay kartı olarak gösterildi. Henüz KAYDEDİLMEDİ. Öğrenciye planı metinle özetle ve onaylamasını iste.',
        item_count: ordered.length,
        total_minutes: totalMinutes,
        /* Sıra düzeltildiyse modelin bunu bilmesi ŞART: aksi halde metinde
           eski sırayı anlatır, kartta yeni sıra görünür, öğrenci ikisinin
           çeliştiğini görür. */
        reordered: swaps.length > 0,
        reorder_note: swaps.length
          ? 'Ön koşul sırası bozuktu; maddeler yeniden dizildi. Planı ÖZETLERKEN aşağıdaki düzeltilmiş sırayı kullan.'
          : undefined,
        changes: swaps.length ? swaps : undefined,
        ordered_items: ordered.map((i) => ({
          date: i.planned_date,
          subject: i.subject,
          topic: i.topic,
          minutes: i.duration_minutes,
        })),
        prerequisite_warnings: warnings.length ? warnings : undefined,
        prerequisite_note: warnings.length
          ? 'Bu maddelerin ön koşulları hem öğrencide hem planda eksik. Ya ön koşulu plana ekle ya da öğrenciye riski bir cümleyle söyle.'
          : undefined,
      },
      action: {
        type: 'create_study_plan',
        title: cleanText(args.title, 60) ?? 'Çalışma planı',
        label: 'Planı Kaydet',
        summary: `${ordered.length} madde · toplam ${totalMinutes} dk`,
        payload: { items: ordered },
      },
    }
  }

  if (name === 'log_study_session') {
    const subject = cleanText(args.subject, 60)
    if (!subject) {
      return { toolResult: { status: 'error', reason: 'Ders adı gerekli.' } }
    }
    const date = cleanDate(args.study_date) ?? today
    if (date > today) {
      return {
        toolResult: { status: 'error', reason: 'Gelecek tarihe çalışma kaydı girilemez.' },
      }
    }

    const payload = {
      study_date: date,
      topic: joinSubjectTopic(subject, args.topic),
      duration_minutes: clampInt(args.duration_minutes, 0, 720, 0),
      correct: clampInt(args.correct, 0, 2000, 0),
      incorrect: clampInt(args.incorrect, 0, 2000, 0),
      empty: clampInt(args.empty, 0, 2000, 0),
      notes: cleanText(args.notes, 300),
    }

    return {
      toolResult: {
        status: 'awaiting_user_confirmation',
        note: 'Çalışma kaydı hazırlandı ama HENÜZ KAYDEDİLMEDİ; kullanıcı onay kartından onaylamalı.',
        preview: payload,
      },
      action: {
        type: 'log_study_session',
        title: 'Çalışma kaydı',
        label: 'Kaydı Ekle',
        summary: `${date} · ${payload.topic} · ${payload.duration_minutes} dk`,
        payload,
      },
    }
  }

  if (name === 'update_student_memory') {
    const rawEntries = Array.isArray(args.entries) ? args.entries.slice(0, 5) : []
    const entries = []

    rawEntries.forEach((e) => {
      const normalized = normalizeMemoryValue(e.key, e.value)
      if (!normalized) return
      entries.push({ key: e.key, value: normalized, label: MEMORY_KEYS[e.key].label })
    })

    if (!entries.length) {
      return {
        toolResult: {
          status: 'error',
          reason: `Geçerli tercih bulunamadı. İzin verilen anahtarlar: ${Object.keys(MEMORY_KEYS).join(', ')}. hedef_sinav yalnızca ${EXAM_TYPES.join('/')} olabilir; sinav_tarihi YYYY-AA-GG biçiminde ve gelecekte bir tarih olmalı.`,
        },
      }
    }

    return {
      toolResult: {
        status: 'awaiting_user_confirmation',
        note: 'Tercih HENÜZ KAYDEDİLMEDİ; kullanıcı onay kartından onaylamalı.',
        preview: entries.map((e) => `${e.label}: ${e.value}`),
      },
      action: {
        type: 'update_student_memory',
        title: 'Tercih güncellemesi',
        label: 'Kaydet',
        summary: entries.map((e) => `${e.label}: ${e.value}`).join(' · '),
        payload: { entries: entries.map(({ key, value }) => ({ key, value })) },
      },
    }
  }

  if (name === 'complete_study_task') {
    const taskId = cleanText(args.task_id, 40)
    if (!taskId || !/^[0-9a-f-]{36}$/i.test(taskId)) {
      return { toolResult: { status: 'error', reason: 'Geçerli bir madde kimliği gerekli.' } }
    }
    const known = [...(facts?.plan?.today ?? []), ...(facts?.plan?.upcoming ?? []), ...(facts?.plan?.overdue ?? [])]
    const match = known.find((t) => t.id === taskId)

    return {
      toolResult: {
        status: 'awaiting_user_confirmation',
        note: 'Madde HENÜZ tamamlandı olarak işaretlenmedi; kullanıcı onaylamalı.',
      },
      action: {
        type: 'complete_study_task',
        title: 'Plan maddesi',
        label: 'Tamamlandı İşaretle',
        summary: match
          ? `${match.subject}${match.topic ? ` – ${match.topic}` : ''} (${match.minutes} dk)`
          : 'Plan maddesi tamamlandı olarak işaretlenecek',
        payload: { task_id: taskId },
      },
    }
  }

  return { toolResult: { status: 'error', reason: 'Bilinmeyen araç.' } }
}

/* ==================================================================
   ÇALIŞTIRICI
   ================================================================== */

/**
 * Modelin çağırdığı aracı işler.
 *
 * Dönüş: { result, action? }
 *  - `result` modele geri verilir (tool message).
 *  - `action` varsa kullanıcıya aksiyon kartı olarak gösterilir.
 */
export async function runTool({ name, args, supabase, studentId, facts }) {
  if (WRITE_TOOLS.has(name)) {
    const { toolResult, action } = proposeAction(name, args ?? {}, facts)
    return { result: toolResult, action }
  }

  const reader = READERS[name]
  if (!reader) {
    return { result: { status: 'error', reason: 'Bilinmeyen araç.' } }
  }

  try {
    const result = await reader(supabase, studentId, args ?? {}, facts)
    return { result }
  } catch {
    // Ham hata modele verilmez; tablo/sorgu ayrıntısı sızdırabilir.
    return { result: { status: 'error', reason: 'Veri okunamadı.' } }
  }
}

/* ==================================================================
   ONAYLANMIŞ AKSİYONUN UYGULANMASI
   ================================================================== */

/**
 * Kullanıcı aksiyon kartındaki butona bastığında çalışır.
 *
 * GÜVENLİK: İstemciden gelen gövdeye GÜVENİLMEZ — her alan burada yeniden
 * doğrulanır. `student_id` daima JWT'den gelir, gövdeden asla okunmaz.
 * Bu yüzden istemci sahte bir aksiyon üretse bile yapabileceği en fazla
 * şey, arayüzden zaten yapabildiği bir kaydı kendi hesabına eklemektir.
 */
export async function executeAction(supabase, studentId, action) {
  const type = action?.type
  const payload = action?.payload ?? {}
  const today = toKey(new Date())

  if (type === 'create_study_plan') {
    const rawItems = Array.isArray(payload.items) ? payload.items.slice(0, 12) : []
    // `plan_group` aynı planın maddelerini birbirine bağlar.
    const planGroup = globalThis.crypto?.randomUUID?.() ?? null

    const rows = []
    rawItems.forEach((item) => {
      const subject = cleanText(item.subject, 60)
      const date = cleanDate(item.planned_date)
      if (!subject || !date || date < today) return
      rows.push({
        student_id: studentId,
        plan_group: planGroup,
        subject,
        topic: cleanText(item.topic, 80),
        activity: ACTIVITIES.includes(item.activity) ? item.activity : 'soru_cozumu',
        planned_date: date,
        duration_minutes: clampInt(item.duration_minutes, 5, 240, 30),
        status: 'planlandı',
      })
    })

    if (!rows.length) return { ok: false, code: 'action_invalid' }

    const { error } = await supabase.from('ai_study_tasks').insert(rows)
    if (error) return { ok: false, code: 'database_error' }

    return {
      ok: true,
      message: `${rows.length} maddelik plan kaydedildi.`,
      result: { plan_group: planGroup, count: rows.length },
    }
  }

  if (type === 'log_study_session') {
    const date = cleanDate(payload.study_date)
    const topic = cleanText(payload.topic, 140)
    if (!date || !topic || date > today) return { ok: false, code: 'action_invalid' }

    const { error } = await supabase.from('daily_logs').insert({
      student_id: studentId,
      study_date: date,
      topic,
      duration_minutes: clampInt(payload.duration_minutes, 0, 720, 0),
      correct: clampInt(payload.correct, 0, 2000, 0),
      incorrect: clampInt(payload.incorrect, 0, 2000, 0),
      empty: clampInt(payload.empty, 0, 2000, 0),
      notes: cleanText(payload.notes, 300),
    })
    if (error) return { ok: false, code: 'database_error' }

    return { ok: true, message: 'Çalışma kaydın eklendi.' }
  }

  if (type === 'update_student_memory') {
    const rawEntries = Array.isArray(payload.entries) ? payload.entries.slice(0, 5) : []
    const rows = []

    rawEntries.forEach((e) => {
      // İstemciden gelen gövdeye güvenilmez; teklif aşamasındaki AYNI
      // doğrulayıcı burada tekrar çalışır.
      const value = normalizeMemoryValue(e.key, e.value)
      if (!value) return
      rows.push({ student_id: studentId, key: e.key, value, updated_at: new Date().toISOString() })
    })

    if (!rows.length) return { ok: false, code: 'action_invalid' }

    const { error } = await supabase
      .from('ai_student_memory')
      .upsert(rows, { onConflict: 'student_id,key' })
    if (error) return { ok: false, code: 'database_error' }

    return { ok: true, message: 'Tercihin kaydedildi.' }
  }

  if (type === 'complete_study_task') {
    const taskId = cleanText(payload.task_id, 40)
    if (!taskId || !/^[0-9a-f-]{36}$/i.test(taskId)) return { ok: false, code: 'action_invalid' }

    // `.eq('student_id', studentId)` kod seviyesinde, RLS veritabanı
    // seviyesinde aynı sınırı koyar — başkasının maddesi güncellenemez.
    const { data, error } = await supabase
      .from('ai_study_tasks')
      .update({ status: 'tamamlandı', completed_at: new Date().toISOString() })
      .eq('id', taskId)
      .eq('student_id', studentId)
      .select('id')

    if (error) return { ok: false, code: 'database_error' }
    if (!data?.length) return { ok: false, code: 'action_not_found' }

    return { ok: true, message: 'Madde tamamlandı olarak işaretlendi.' }
  }

  return { ok: false, code: 'action_invalid' }
}
