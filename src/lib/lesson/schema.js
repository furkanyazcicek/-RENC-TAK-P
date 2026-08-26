/**
 * DRKOÇ DERS BELGESİ — SEMANTİK ŞEMA (v2)
 * ==================================================================
 *
 * BU DOSYA NE YAPAR, NE YAPMAZ
 * ----------------------------
 * YAPAR : Bir dersin *anlamını* tanımlar. "Bu bir tuzak uyarısıdır",
 *         "bu bir çözümlü örnektir", "bu bir öğretmen müdahalesidir".
 * YAPMAZ: Hiçbir görsel karar vermez. Burada `rounded-xl`, `mor kart`,
 *         `gradient` gibi tek bir kelime bile geçmez.
 *
 * Sebebi spesifikasyonun 14. bölümüdür: içeriği üreten taraf (öğretmen
 * veya AI) sunumu seçemez. Sunumu `src/components/lessons/reader/*`
 * altındaki tasarım katmanı seçer. Böylece tek bir yerden bütün derslerin
 * görsel dili değişebilir ve AI "bunu mor kart yap" diyemez.
 *
 * v1 → v2 GEÇİŞİ
 * --------------
 * Eski belgeler (v1) kaybolmaz. `normalizeLessonDocument` eski tipleri
 * yeni tiplere eşler (`explanation` → `prose`, `visual` → `figure`…).
 * Veritabanında migration gerekmez; okuma anında dönüşür ve öğretmen
 * kaydettiğinde v2 olarak yazılır.
 *
 * BLOK TİPİ EKLERKEN
 * ------------------
 * 1) `BLOCK_SPECS` içine tipi ve alanlarını yaz.
 * 2) Sunum bileşenini `reader/blockRegistry.js` içine bağla.
 * Şemaya eklenip sunumu bağlanmayan tip, okuyucuda sessizce görünmez —
 * dersi çökertmez (spesifikasyon §50: graceful fallback).
 */

/* ==================================================================
   1) METİN TEMİZLİĞİ
   ================================================================== */

const LIMITS = {
  title: 180,
  short: 400,
  body: 9000,
  prose: 20000,
  script: 6000,
}

function text(value, limit = LIMITS.short) {
  if (typeof value !== 'string') return ''
  // Model bazen satır başında/sonunda görünmez boşluk bırakıyor; okuyucuda
  // paragraf hizasını bozuyordu.
  return value.replace(/ /g, ' ').trim().slice(0, limit)
}

/** Paragrafları korur, üçlü+ boş satırı ikiye indirir. */
function richText(value, limit = LIMITS.prose) {
  return text(value, limit).replace(/\n{3,}/g, '\n\n')
}

function list(value, mapper, max = 12) {
  if (!Array.isArray(value)) return []
  return value.map(mapper).filter(Boolean).slice(0, max)
}

function strList(value, limit = LIMITS.short, max = 12) {
  return list(value, (item) => text(item, limit) || null, max)
}

function clampInt(value, min, max, fallback) {
  const number = Number.parseInt(value, 10)
  return Number.isFinite(number) ? Math.min(max, Math.max(min, number)) : fallback
}

function oneOf(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback
}

export function createId(prefix = 'block') {
  const id = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
  return `${prefix}-${id}`
}

/** `{title, body}` çiftlerinden oluşan adım listesi (süreç, çözüm, odak). */
function steps(value, max = 10) {
  return list(
    value,
    (step) => {
      if (typeof step === 'string') {
        const body = text(step, LIMITS.body)
        return body ? { title: '', body } : null
      }
      if (!step || typeof step !== 'object') return null
      const title = text(step.title, LIMITS.title)
      const body = richText(step.body, LIMITS.body)
      return title || body ? { title, body } : null
    },
    max
  )
}

/* ==================================================================
   2) BLOK SÖZLEŞMELERİ
   ------------------------------------------------------------------
   `label`  öğretmen editorunde görünen ad
   `role`   içerik denetimi bu bloğun hangi pedagojik ihtiyacı
            karşıladığını buradan bilir (bkz. auditLessonDepth)
   `weight` "derinlik bütçesi" hesabında bloğun ağırlığı; 0 olan bloklar
            (ses scriptleri gibi) öğrenciye metin olarak görünmez
   `normalize` ham veriyi güvenli hâle getirir
   ================================================================== */

export const BLOCK_SPECS = {
  /* ---------- Taşıyıcı anlatım ---------- */

  // Dersin omurgası. Kart DEĞİLDİR; sayfanın doğal akışında ilerleyen
  // paragraflardır. Bir ders ağırlıklı olarak bundan oluşur.
  prose: {
    label: 'Anlatım',
    role: 'explain',
    weight: 1,
    normalize: (b) => ({ body: richText(b.body) }),
  },

  // Kavramın tanımı + tanımın açılımı. Tanım tek başına bırakılmaz.
  concept: {
    label: 'Kavram',
    role: 'concept',
    weight: 1,
    normalize: (b) => ({
      term: text(b.term ?? b.title, LIMITS.title),
      body: richText(b.body),
    }),
  },

  // "Neden böyle?" — ezberi kıran blok. Soru açıkça yazılır.
  why: {
    label: 'Neden?',
    role: 'why',
    weight: 1,
    normalize: (b) => ({
      question: text(b.question ?? b.title, LIMITS.short),
      body: richText(b.body),
    }),
  },

  // Mekanizma: bir olayın adım adım nasıl gerçekleştiği.
  mechanism: {
    label: 'Mekanizma',
    role: 'mechanism',
    weight: 1.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      body: richText(b.body),
      steps: steps(b.steps),
    }),
  },

  // Numaralı işlem sırası — "her soruda şu üç durak".
  process: {
    label: 'Süreç / adım sırası',
    role: 'mechanism',
    weight: 1,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      intro: richText(b.intro ?? b.body, LIMITS.body),
      steps: steps(b.steps),
    }),
  },

  /* ---------- Öğretmen katmanı ---------- */

  // Kenar notu. Masaüstünde metnin yanında, mobilde satır içinde çıkar.
  // Kart değildir; bilinçli olarak "elle yazılmış not" hissi taşır.
  teacher_note: {
    label: 'Hoca notu',
    role: 'teacher',
    weight: 0.5,
    normalize: (b) => ({
      tone: oneOf(b.tone, ['note', 'warning', 'exam', 'connection'], 'note'),
      body: richText(b.body, LIMITS.body),
    }),
  },

  // Öğrencinin yaptığı klasik hata: yanlışı ve doğrusu karşılıklı verilir.
  trap: {
    label: 'Sık yapılan hata',
    role: 'trap',
    weight: 1,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      wrong: richText(b.wrong, LIMITS.body),
      right: richText(b.right, LIMITS.body),
      body: richText(b.body, LIMITS.body),
    }),
  },

  // Sınav bağlamı. Her bölüme değil, gerçekten anlamlı yere konur.
  exam: {
    label: 'Sınavda nasıl gelir?',
    role: 'exam',
    weight: 1,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      body: richText(b.body, LIMITS.body),
      patterns: strList(b.patterns, LIMITS.short, 6),
    }),
  },

  // Paragraftaki bir görüşü anahtar kelime ezberiyle değil, ipucunun
  // kavramın temel savına neden bağlandığını kurarak tanıtır.
  question_clue: {
    label: 'Soruda nasıl tanırım?',
    role: 'exam',
    weight: 1.5,
    normalize: (b) => ({
      concept: text(b.concept ?? b.title, LIMITS.title),
      statement: richText(b.statement ?? b.body, LIMITS.body),
      clues: strList(b.clues ?? b.patterns, LIMITS.short, 8),
      reasoning: richText(b.reasoning, LIMITS.body),
      boundary: richText(b.boundary ?? b.avoid, LIMITS.body),
    }),
  },

  // Konu sonunda "hangi bilgiyi sorar?" yerine ÖSYM'nin gerçekte ölçtüğü
  // yorumlama ve ilişki kurma becerisini görünür kılar.
  osym_insight: {
    label: 'ÖSYM bu konuda neyi ölçüyor?',
    role: 'exam',
    weight: 1,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      body: richText(b.body, LIMITS.body),
      measures: strList(b.measures ?? b.patterns, LIMITS.short, 8),
    }),
  },

  // Filozofu biyografiyle değil görüşünün soru mantığıyla tanıtır.
  philosopher: {
    label: 'Filozof → görüş',
    role: 'concept',
    weight: 1.5,
    normalize: (b) => ({
      name: text(b.name ?? b.title, LIMITS.title),
      view: richText(b.view ?? b.body, LIMITS.body),
      logic: richText(b.logic, LIMITS.body),
      clues: strList(b.clues, LIMITS.short, 8),
      contrast: richText(b.contrast, LIMITS.body),
    }),
  },

  // Bir savın öncüllerden sonuca nasıl ilerlediğini gösteren, süsleme
  // amacı taşımayan HTML/CSS tabanlı argüman akışı.
  argument_flow: {
    label: 'Argüman akışı',
    role: 'mechanism',
    weight: 1.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      claim: richText(b.claim ?? b.intro, LIMITS.body),
      steps: steps(b.steps, 10),
      conclusion: richText(b.conclusion, LIMITS.body),
      counter: richText(b.counter, LIMITS.body),
    }),
  },

  // Konu bağlantısı — bilgiyi izole bırakmamak için.
  connection: {
    label: 'Bağlantı',
    role: 'connection',
    weight: 1,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      body: richText(b.body, LIMITS.body),
      links: strList(b.links, LIMITS.short, 6),
    }),
  },

  memory: {
    label: 'Hafıza kancası',
    role: 'memory',
    weight: 0.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      body: richText(b.body, LIMITS.body),
    }),
  },

  /* ---------- Görsel ve veri ---------- */

  // Görsel bir *spesifikasyondur*, hazır resim değil. `kind` bir çizim
  // bileşenine, `data` o bileşenin girdisine karşılık gelir. Böylece aynı
  // görsel dili yüzlerce derste tekrar kullanılabilir.
  figure: {
    label: 'Görsel',
    role: 'visual',
    weight: 1.5,
    /**
     * İKİ TÜR ŞEKİL VARDIR ve ikisi de birinci sınıf vatandaştır:
     *
     *   1) `kind` verilir → kayıtlı bir SVG şeması çizilir. Etiketli
     *      bilimsel diyagramlar (anatomi, mekanizma, grafik) için bu yol
     *      tercih edilir: tema uyumlu, bölgeleri vurgulanabilir, ekran
     *      okuyucu okuyabilir, hiçbir yazı bulanıklaşmaz.
     *
     *   2) `image_url` verilir → hazırlanmış bir çizim gösterilir. Bir
     *      hücrenin dokusu, bir sürecin anlatısal üç panosu gibi elle
     *      çizim gerektiren yerlerde SVG'yi zorlamak anlamsızdır.
     *
     * Raster kullanılıyorsa `image_width`/`image_height` ÖNEMLİDİR:
     * tarayıcı yeri önceden ayırır ve görsel yüklenirken metin zıplamaz.
     * `image_srcset` ise telefona 1440 px'lik dosyayı indirtmemek içindir.
     *
     * `kind` artık boş kalabilir. Eskiden boşken 'placeholder' yazılıyordu;
     * bu, görseli olan şekilleri de "çizilmemiş şema" gibi gösteriyordu.
     */
    normalize: (b) => ({
      kind: text(b.kind ?? b.visual_kind, 60),
      title: text(b.title, LIMITS.title),
      caption: richText(b.caption, LIMITS.body),
      purpose: text(b.purpose, LIMITS.short),
      complexity: oneOf(b.complexity, ['low', 'medium', 'high'], 'medium'),
      width: oneOf(b.width, ['text', 'wide', 'full'], 'wide'),
      image_url: text(b.image_url, 800),
      image_srcset: text(b.image_srcset, 2000),
      image_sizes: text(b.image_sizes, 300),
      image_width: clampInt(b.image_width, 1, 8000, 0) || null,
      image_height: clampInt(b.image_height, 1, 8000, 0) || null,
      alt: text(b.alt, LIMITS.body),
      data: b.data && typeof b.data === 'object' ? b.data : {},
      focus: steps(b.focus, 8),
      audio_script: richText(b.audio_script ?? b.visual_audio_script, LIMITS.script),
    }),
  },

  formula: {
    label: 'Formül',
    role: 'formula',
    weight: 0.5,
    normalize: (b) => ({
      latex: text(b.latex ?? b.formula, 600),
      title: text(b.title, LIMITS.title),
      meaning: richText(b.meaning ?? b.body, LIMITS.body),
      variables: list(
        b.variables,
        (v) => {
          if (!v || typeof v !== 'object') return null
          const sym = text(v.sym ?? v.symbol, 40)
          const desc = text(v.desc ?? v.description, LIMITS.short)
          return sym ? { sym, desc } : null
        },
        10
      ),
    }),
  },

  table: {
    label: 'Tablo',
    role: 'data',
    weight: 1,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      interactive: Boolean(b.interactive),
      columns: strList(b.columns, 120, 8),
      rows: list(b.rows, (row) => (Array.isArray(row) ? strList(row, 300, 8) : null), 20),
      caption: richText(b.caption, LIMITS.body),
    }),
  },

  // İki (veya üç) kavramın karşılaştırması. Tablodan farkı: her satır bir
  // *ayrım ekseni*dir ve sonunda "asıl fark" cümlesi vardır.
  compare: {
    label: 'Karşılaştırma',
    role: 'compare',
    weight: 1.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      interactive: Boolean(b.interactive),
      columns: strList(b.columns, 120, 3),
      rows: list(
        b.rows,
        (row) => {
          if (!row || typeof row !== 'object') return null
          const label = text(row.label, 160)
          const values = strList(row.values, 400, 3)
          return label && values.length ? { label, values } : null
        },
        12
      ),
      insight: richText(b.insight, LIMITS.body),
    }),
  },

  // Yönlü kavram ilişkileri. Ham notlarda öğrenci konuya girmeden önce
  // parçaları aynı zihinsel modelde görür; bu dekoratif bir görsel değildir.
  concept_map: {
    label: 'Kavram haritası',
    role: 'visual',
    weight: 1.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      intro: richText(b.intro ?? b.body, LIMITS.body),
      nodes: list(
        b.nodes,
        (node) => {
          if (!node || typeof node !== 'object') return null
          const id = text(node.id, 80)
          const label = text(node.label ?? node.title, 140)
          const detail = text(node.detail ?? node.body, LIMITS.short)
          return id && label ? { id, label, detail } : null
        },
        18
      ),
      links: list(
        b.links,
        (link) => {
          if (!link || typeof link !== 'object') return null
          const from = text(link.from, 80)
          const to = text(link.to, 80)
          const label = text(link.label, 100)
          return from && to ? { from, to, label } : null
        },
        28
      ),
      caption: richText(b.caption, LIMITS.body),
    }),
  },

  // Tarih derslerinde yalnizca ogrenmeyi tasiyan donum noktalarini zaman
  // ekseninde gosterir. Dekoratif bir gorsel degil, okuma omurgasidir.
  timeline: {
    label: 'Kisa kronoloji',
    role: 'visual',
    weight: 1.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      intro: richText(b.intro ?? b.body, LIMITS.body),
      items: steps(b.items ?? b.events, 12),
      takeaway: richText(b.takeaway ?? b.caption, LIMITS.body),
    }),
  },

  // Sebep -> olay -> sonuc -> sonraki etki zincirini tek bir zihinsel
  // modelde toplar; tarih ve isim listesini aciklamaya donusturur.
  cause_effect: {
    label: 'Neden-sonuc zinciri',
    role: 'mechanism',
    weight: 1.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      intro: richText(b.intro ?? b.body, LIMITS.body),
      steps: steps(b.steps, 8),
      inference: richText(b.inference ?? b.takeaway, LIMITS.body),
    }),
  },

  period_summary: {
    label: 'Donem ozeti',
    role: 'summary',
    weight: 1,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      range: text(b.range ?? b.period, 120),
      body: richText(b.body, LIMITS.body),
      turning_points: strList(b.turning_points ?? b.points, 400, 8),
    }),
  },

  // Tarihsel cografyayi ogretmek icin katmanlari acilip kapanabilen,
  // sinir iddiasi tasimayan sematik harita. Konumlar yuzde koordinatidir;
  // her harita kaynak ve "sematik" uyarisi tasimak zorundadir.
  historical_map: {
    label: 'Etkileşimli tarih haritası',
    role: 'visual',
    weight: 2,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      intro: richText(b.intro ?? b.body, LIMITS.body),
      map_label: text(b.map_label ?? 'Şematik gösterim', 120),
      layers: list(
        b.layers,
        (layer) => {
          if (!layer || typeof layer !== 'object') return null
          const id = text(layer.id, 60)
          const label = text(layer.label, 120)
          return id && label ? { id, label, description: text(layer.description, LIMITS.short), active: layer.active !== false } : null
        },
        8
      ),
      regions: list(
        b.regions,
        (region) => {
          if (!region || typeof region !== 'object') return null
          const label = text(region.label, 120)
          return label ? { label, x: clampInt(region.x, 2, 98, 50), y: clampInt(region.y, 2, 98, 50), tone: oneOf(region.tone, ['land', 'water', 'muted'], 'muted') } : null
        },
        12
      ),
      locations: list(
        b.locations,
        (location) => {
          if (!location || typeof location !== 'object') return null
          const id = text(location.id, 60)
          const label = text(location.label, 120)
          if (!id || !label) return null
          return {
            id,
            label,
            detail: richText(location.detail, LIMITS.body),
            x: clampInt(location.x, 2, 98, 50),
            y: clampInt(location.y, 2, 98, 50),
            layer: text(location.layer, 60),
            tone: oneOf(location.tone, ['brand', 'aqua', 'accent', 'danger', 'muted'], 'brand'),
          }
        },
        24
      ),
      routes: list(
        b.routes,
        (route) => {
          if (!route || typeof route !== 'object') return null
          const from = text(route.from, 60)
          const to = text(route.to, 60)
          return from && to ? { from, to, label: text(route.label, 120), layer: text(route.layer, 60), tone: oneOf(route.tone, ['brand', 'aqua', 'accent', 'danger', 'muted'], 'brand') } : null
        },
        28
      ),
      insight: richText(b.insight, LIMITS.body),
      source_note: richText(b.source_note, LIMITS.body),
    }),
  },

  // Hukumdar, komutan, devlet adami, bilim insani veya dusunuru biyografi
  // ezberine donusturmeden olay ve tarihsel rolle eslestirir.
  historical_figures: {
    label: 'Hükümdarlar ve önemli şahsiyetler',
    role: 'people',
    weight: 2,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      intro: richText(b.intro ?? b.body, LIMITS.body),
      figures: list(
        b.figures,
        (figure) => {
          if (!figure || typeof figure !== 'object') return null
          const name = text(figure.name ?? figure.title, 140)
          if (!name) return null
          return {
            name,
            period: text(figure.period, 120),
            position: text(figure.position ?? figure.role, 180),
            contribution: richText(figure.contribution ?? figure.body, LIMITS.body),
            connections: strList(figure.connections, 300, 6),
            significance: richText(figure.significance, LIMITS.body),
          }
        },
        14
      ),
      takeaway: richText(b.takeaway, LIMITS.body),
    }),
  },

  // Türkçe anlam ve dil bilgisi derslerinde cümleyi ilişki birimlerine
  // ayırır. Renk içerikten gelmez; içerik yalnız parçanın pedagojik tonunu
  // bildirir, gerçek renkleri reader tasarım katmanı seçer.
  sentence_analysis: {
    label: 'Cümle analizi',
    role: 'visual',
    weight: 1.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      prompt: richText(b.prompt ?? b.sentence ?? b.body, LIMITS.body),
      segments: list(
        b.segments,
        (segment) => {
          if (!segment || typeof segment !== 'object') return null
          const value = text(segment.text ?? segment.value ?? segment.title, 500)
          if (!value) return null
          return {
            text: value,
            label: text(segment.label, 120),
            explanation: richText(segment.explanation ?? segment.body, LIMITS.body),
            tone: oneOf(segment.tone, ['brand', 'aqua', 'accent', 'success', 'danger', 'muted'], 'brand'),
          }
        },
        10
      ),
      takeaway: richText(b.takeaway ?? b.caption, LIMITS.body),
    }),
  },

  // Bir seçeneği değerlendirirken uygulanacak EVET/HAYIR kontrollerini
  // gerçek bir karar ağacı olarak gösterir; süreç listesinden farkı,
  // her düğümde iki olası kararın da görünür olmasıdır.
  decision_tree: {
    label: 'Karar ağacı',
    role: 'mechanism',
    weight: 1.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      intro: richText(b.intro ?? b.body, LIMITS.body),
      checks: list(
        b.checks ?? b.nodes,
        (check) => {
          if (!check || typeof check !== 'object') return null
          const question = text(check.question ?? check.title, LIMITS.short)
          if (!question) return null
          return {
            question,
            yes: text(check.yes ?? check.if_yes ?? check.body, LIMITS.short),
            no: text(check.no ?? check.if_no, LIMITS.short),
          }
        },
        8
      ),
      takeaway: richText(b.takeaway ?? b.conclusion, LIMITS.body),
    }),
  },

  /* ---------- Uygulama ---------- */

  example: {
    label: 'Örnek',
    role: 'example',
    weight: 1,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      body: richText(b.body),
    }),
  },

  // Çözümlü örnek: soru → adımlar → cevap → çıkarım.
  worked_example: {
    label: 'Çözümlü örnek',
    role: 'example',
    weight: 2,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      prompt: richText(b.prompt ?? b.question, LIMITS.body),
      steps: steps(b.steps, 12),
      answer: richText(b.answer, LIMITS.body),
      takeaway: richText(b.takeaway, LIMITS.body),
    }),
  },

  // "Burada dur, sence sonuç ne olur?" — cevap gizli, öğrenci açar.
  checkpoint: {
    label: 'Dur ve düşün',
    role: 'active',
    weight: 1,
    normalize: (b) => ({
      prompt: richText(b.prompt ?? b.question ?? b.body, LIMITS.body),
      hint: richText(b.hint, LIMITS.body),
      answer: richText(b.answer ?? b.explanation, LIMITS.body),
    }),
  },

  quiz: {
    label: 'Mini quiz',
    role: 'active',
    weight: 1,
    normalize: (b) => {
      const options = strList(b.options, 300, 6)
      return {
        question: richText(b.question ?? b.title, LIMITS.body),
        options,
        answer_index: clampInt(b.answer_index, 0, Math.max(0, options.length - 1), 0),
        explanation: richText(b.explanation, LIMITS.body),
        purpose: oneOf(b.purpose, ['recall', 'concept', 'apply', 'error'], 'concept'),
      }
    },
  },

  // ÖSYM soru mantığını kopya soru kullanmadan taklit eden ayrıntılı
  // uygulama. Her seçenek kendi gerekçesini taşır; öğrenci çözümü açınca
  // yalnız doğruyu değil çeldiricinin neden inandırıcı göründüğünü de görür.
  osym_simulation: {
    label: 'Mini ÖSYM simülasyonu',
    role: 'active',
    weight: 2,
    normalize: (b) => {
      const options = list(
        b.options,
        (option) => {
          if (typeof option === 'string') {
            const value = text(option, 500)
            return value ? { text: value, explanation: '' } : null
          }
          if (!option || typeof option !== 'object') return null
          const value = text(option.text ?? option.value, 500)
          return value ? { text: value, explanation: richText(option.explanation ?? option.body, LIMITS.body) } : null
        },
        6
      )
      return {
        title: text(b.title, LIMITS.title),
        passage: richText(b.passage ?? b.prompt, LIMITS.prose),
        question: richText(b.question, LIMITS.body),
        options,
        answer_index: clampInt(b.answer_index, 0, Math.max(0, options.length - 1), 0),
        stem_analysis: richText(b.stem_analysis, LIMITS.body),
        critical_point: richText(b.critical_point, LIMITS.body),
        takeaway: richText(b.takeaway, LIMITS.body),
      }
    },
  },

  /* ---------- Kapanış ---------- */

  summary: {
    label: 'Özet',
    role: 'summary',
    weight: 0.5,
    normalize: (b) => ({
      title: text(b.title, LIMITS.title),
      // Büyük tarih konularında "Mutlaka Bil" ve hızlı tekrar birlikte
      // 10 maddeyi aşabilir; kritik tarih veya kişi sessizce düşmemeli.
      points: strList(b.points, 400, 20),
      body: richText(b.body, LIMITS.body),
    }),
  },

  next_step: {
    label: 'Sonraki adım',
    role: 'next',
    weight: 0.5,
    normalize: (b) => ({
      body: richText(b.body, LIMITS.body),
      topics: strList(b.topics, 160, 6),
    }),
  },

  /* ---------- Görünmez taşıyıcılar ---------- */

  // Bölümün öğretmen anlatım metni. Okuyucuda METİN OLARAK GÖRÜNMEZ;
  // yalnızca "Hocayla Çalış" sesi bu metinden üretilir (spesifikasyon §22:
  // ses, notun kendisini kelimesi kelimesine okumaz).
  audio_script: {
    label: 'Ses anlatım metni',
    role: 'audio',
    weight: 0,
    normalize: (b) => ({
      body: richText(b.body ?? b.script, LIMITS.script),
      voice_hint: text(b.voice_hint, LIMITS.short),
      // Anlatım oynarken ekranda hangi bloğun vurgulanacağı. Bu alan
      // normalleştirmede korunmazsa ses ile ekran ayrışır: oynatıcı
      // script'in bir önündeki bloğa düşer ve öğrenci konuşulan yeri
      // değil, bölümün son kutusunu görür.
      target_block_id: text(b.target_block_id, 120),
      highlight_block_ids: strList(b.highlight_block_ids, 120, 6),
      label: text(b.label, LIMITS.title),
    }),
  },
}

export const LESSON_BLOCK_TYPES = Object.keys(BLOCK_SPECS)

export const BLOCK_LABELS = Object.fromEntries(
  Object.entries(BLOCK_SPECS).map(([type, spec]) => [type, spec.label])
)

/** Öğretmenin editorde elle ekleyebileceği tipler (ses scripti hariç). */
export const EDITABLE_BLOCK_TYPES = LESSON_BLOCK_TYPES.filter((type) => BLOCK_SPECS[type].weight > 0)

/* ==================================================================
   3) v1 → v2 TİP EŞLEMESİ
   ================================================================== */

const LEGACY_TYPE_MAP = {
  explanation: 'prose',
  key_point: 'teacher_note',
  teacher_intervention: 'teacher_note',
  visual: 'figure',
  visual_audio: 'audio_script',
  audio: 'audio_script',
  exam_tip: 'exam',
  solved_example: 'worked_example',
  reflection: 'checkpoint',
  connection_map: 'connection',
  comparison: 'compare',
}

function resolveType(rawType) {
  if (LESSON_BLOCK_TYPES.includes(rawType)) return rawType
  return LEGACY_TYPE_MAP[rawType] ?? null
}

/* ==================================================================
   4) NORMALİZASYON
   ================================================================== */

export const SECTION_KINDS = ['opening', 'build', 'deepen', 'practice', 'close']

function normalizeBlock(raw) {
  const type = resolveType(raw?.type)
  if (!type) return null
  const spec = BLOCK_SPECS[type]
  const fields = spec.normalize(raw ?? {})

  // İçi tamamen boş blok okuyucuya gitmez — "AI görünümü"nün bir kaynağı da
  // içi boş, süslü kutulardır.
  const hasContent = Object.values(fields).some((value) =>
    Array.isArray(value) ? value.length > 0 : typeof value === 'object' && value !== null ? Object.keys(value).length > 0 : Boolean(value)
  )
  if (!hasContent) return null

  return {
    id: typeof raw.id === 'string' && raw.id ? raw.id.slice(0, 120) : createId('block'),
    type,
    ...fields,
  }
}

function normalizeSection(raw) {
  const section = raw && typeof raw === 'object' ? raw : {}
  return {
    id: typeof section.id === 'string' && section.id ? section.id.slice(0, 120) : createId('section'),
    title: text(section.title, LIMITS.title) || 'Başlıksız bölüm',
    kind: oneOf(section.kind, SECTION_KINDS, 'build'),
    lead: richText(section.lead, LIMITS.body),
    blocks: Array.isArray(section.blocks) ? section.blocks.map(normalizeBlock).filter(Boolean) : [],
  }
}

export function normalizeLessonDocument(value) {
  const document = value && typeof value === 'object' ? value : {}
  const sections = Array.isArray(document.sections) ? document.sections : []

  return {
    version: 2,
    estimated_minutes: clampInt(document.estimated_minutes, 1, 180, 15),
    // Ön koşul: öğrenciye "buraya girmeden önce şunu bilmen gerekir" demek.
    prerequisites: list(
      document.prerequisites,
      (item) => {
        if (typeof item === 'string') {
          const topic = text(item, LIMITS.title)
          return topic ? { topic, why: '' } : null
        }
        if (!item || typeof item !== 'object') return null
        const topic = text(item.topic, LIMITS.title)
        return topic ? { topic, why: text(item.why, LIMITS.short) } : null
      },
      6
    ),
    // "Bu dersin sonunda yapabileceklerin" — öğrencinin kendini test
    // edebilmesi için somut ifadeler.
    outcomes: strList(document.outcomes, LIMITS.short, 8),
    sections: sections.map(normalizeSection),
  }
}

/* ==================================================================
   5) BOŞ İSKELETLER (editor)
   ================================================================== */

export function createEmptyBlock(type = 'prose') {
  const safeType = LESSON_BLOCK_TYPES.includes(type) ? type : 'prose'
  return { id: createId('block'), type: safeType, ...BLOCK_SPECS[safeType].normalize({}) }
}

export function createEmptySection(kind = 'build') {
  return {
    id: createId('section'),
    title: 'Yeni bölüm',
    kind,
    lead: '',
    blocks: [{ id: createId('block'), type: 'prose', body: '' }],
  }
}

export function createEmptyLessonDocument() {
  return {
    version: 2,
    estimated_minutes: 15,
    prerequisites: [],
    outcomes: [],
    sections: [createEmptySection('opening')],
  }
}

/* ==================================================================
   6) DOĞRULAMA — kaydetmeyi engelleyen sert hatalar
   ================================================================== */

export function validateLessonDocument(value) {
  const document = normalizeLessonDocument(value)
  const errors = []

  if (!document.sections.length) errors.push('En az bir bölüm ekleyin.')

  document.sections.forEach((section, index) => {
    if (!section.title.trim()) errors.push(`${index + 1}. bölümün başlığı eksik.`)
    if (!section.blocks.length) errors.push(`“${section.title}” bölümünde en az bir içerik bloğu olmalı.`)
    section.blocks.forEach((block) => {
      if (block.type === 'quiz' && (!block.question || block.options.length < 2)) {
        errors.push(`“${section.title}” bölümündeki mini quiz için soru ve en az iki seçenek gerekli.`)
      }
      if (block.type === 'checkpoint' && (!block.prompt || !block.answer)) {
        errors.push(`“${section.title}” bölümündeki “dur ve düşün” için hem soru hem cevap gerekli.`)
      }
      if (block.type === 'compare' && block.columns.length < 2) {
        errors.push(`“${section.title}” bölümündeki karşılaştırma en az iki sütun istiyor.`)
      }
      if (block.type === 'historical_map') {
        if (block.locations.length < 2) errors.push(`“${section.title}” bölümündeki tarih haritasında en az iki öğretici konum gerekli.`)
        if (!block.source_note) errors.push(`“${section.title}” bölümündeki tarih haritasında kaynak ve sadeleştirme notu gerekli.`)
        const locationIds = new Set(block.locations.map((location) => location.id))
        if (block.routes.some((route) => !locationIds.has(route.from) || !locationIds.has(route.to))) {
          errors.push(`“${section.title}” bölümündeki tarih haritasında tanımsız konuma bağlanan güzergâh var.`)
        }
      }
    })
  })

  return { document, errors: [...new Set(errors)] }
}

/* ==================================================================
   7) DERİNLİK DENETİMİ — "içerik kıtlığı" kontrolü
   ------------------------------------------------------------------
   Spesifikasyon §54: bir not görsel olarak güzel olduğu hâlde eğitimsel
   olarak kıtsa BAŞARISIZDIR. Bu fonksiyon kaydetmeyi ENGELLEMEZ; öğretmene
   ve üretim hattına "bu ders öğrencinin tek başına öğrenmesi için yeterli
   mi?" sorusunu somut kanıtla sorar.

   Eşikler otoriter değil, deneyimseldir: bir konuyu sıfırdan öğreten özel
   ders anlatımı pratikte 1200 kelimenin altına inmiyor.
   ================================================================== */

const DEPTH_RULES = {
  minWords: 1200,
  minWordsPerSection: 180,
  minSections: 4,
  requiredRoles: [
    { role: 'why', message: 'Hiçbir yerde “neden böyle?” sorusu cevaplanmamış — not ezber listesine dönüşür.' },
    { role: 'example', message: 'Örnek veya çözümlü örnek yok; öğrenci bilgiyi uygulayamaz.' },
    { role: 'visual', message: 'Hiç görsel yok. Bu konuda gerçekten gerekmiyorsa görmezden gelin.' },
    { role: 'active', message: 'Öğrenciye hiçbir yerde bir şey yaptırılmıyor (dur-düşün veya mini quiz yok).' },
    { role: 'trap', message: 'Sık yapılan hata uyarısı yok; öğretmen müdahalesi eksik.' },
    { role: 'summary', message: 'Kapanış özeti yok; öğrenci neyi öğrendiğini toparlayamaz.' },
  ],
}

// Matematikte derinlik, uzun paragraftan çok çözümlü örnek, görünür işlem
// basamağı ve yardımsız transfer sorusuyla oluşur. Genel profilin bölüm başına
// 180 kelime eşiği matematik notlarını gereksiz açıklama yazmaya itiyordu.
const MATH_DEPTH_RULES = {
  minWords: 1000,
  minWordsPerSection: 60,
  minSections: 7,
  requiredRoles: DEPTH_RULES.requiredRoles,
}

// Tarih dersleri kronoloji, neden-sonuc, alt kazanim ve kanit okumayi birlikte
// tasir. Esik, kisa ozetlerin "tam ders" gibi yayinlanmasini engeller; genel
// profile gore bir miktar dusuktur cunku tablo ve zaman seritleri yogundur.
const HISTORY_DEPTH_RULES = {
  minWords: 1250,
  minWordsPerSection: 90,
  minSections: 7,
  requiredRoles: [
    { role: 'why', message: 'Olayin neden meydana geldigi aciklanmamis.' },
    { role: 'data', message: 'Mufredatin alt kazanimlarini ayiran veri tablosu bulunmuyor.' },
    { role: 'example', message: 'Kanittan cikarim yaptiran cozumlu ornek bulunmuyor.' },
    { role: 'people', message: 'Hukumdar veya onemli sahsiyetler olaylarla baglanmamis.' },
    { role: 'visual', message: 'Kronoloji veya iliski omurgasi bulunmuyor.' },
    { role: 'mechanism', message: 'Sebep-olay-sonuc-sonraki etki zinciri bulunmuyor.' },
    { role: 'active', message: 'Ogrenciye yorum yaptiran bir durak bulunmuyor.' },
    { role: 'trap', message: 'Karistirilan nokta uyarisi bulunmuyor.' },
    { role: 'summary', message: 'Spot bilgi veya donem ozeti bulunmuyor.' },
  ],
}

function countWords(value) {
  return String(value ?? '').trim().split(/\s+/).filter(Boolean).length
}

/**
 * Bir bloğun öğrenciye giden görünür metin ağırlığı.
 *
 * Sayım ÖZYİNELEMELİ olmak zorunda. İlk sürüm yalnızca iki seviye
 * iniyordu ve `compare` bloklarının hücrelerini (`rows[].values[]`)
 * hiç saymıyordu. Sonuç: karşılaştırma tablosu ağırlıklı bölümler
 * "yüzeysel" uyarısı alıyordu — oysa öğrencinin okuduğu metnin çoğu
 * oradaydı. Denetim yanlış yerde alarm verince güvenilmez hâle gelir.
 */
function blockWords(block) {
  const spec = BLOCK_SPECS[block.type]
  if (!spec || spec.weight === 0) return 0

  const walk = (value) => {
    if (typeof value === 'string') return countWords(value)
    if (Array.isArray(value)) return value.reduce((sum, item) => sum + walk(item), 0)
    if (value && typeof value === 'object') return Object.values(value).reduce((sum, item) => sum + walk(item), 0)
    return 0
  }

  let total = 0
  for (const [key, value] of Object.entries(block)) {
    // `audio_script` öğrenciye metin olarak görünmez; sayıma girmez.
    if (key === 'id' || key === 'type' || key === 'audio_script') continue
    total += walk(value)
  }
  return total
}

export function auditLessonDepth(value, { profile = 'default' } = {}) {
  const document = normalizeLessonDocument(value)
  const rules = profile === 'history'
    ? HISTORY_DEPTH_RULES
    : profile === 'math'
      ? MATH_DEPTH_RULES
      : DEPTH_RULES
  const roles = new Set()
  let words = 0
  const thinSections = []
  let workedExamples = 0
  let workedSteps = 0
  let independentQuestions = 0
  let hasBeginnerExample = false
  let hasSelectiveExample = false

  document.sections.forEach((section) => {
    let sectionWords = countWords(section.lead)
    section.blocks.forEach((block) => {
      const spec = BLOCK_SPECS[block.type]
      if (spec?.weight > 0) roles.add(spec.role)
      if (block.type === 'worked_example') {
        workedExamples += 1
        workedSteps += Array.isArray(block.steps) ? block.steps.length : 0
        hasBeginnerExample ||= String(block.title || '').includes('Seviye 1')
        hasSelectiveExample ||= String(block.title || '').includes('Seviye 5')
      }
      if (block.type === 'quiz') independentQuestions += 1
      sectionWords += blockWords(block)
    })
    words += sectionWords
    if (sectionWords < rules.minWordsPerSection) thinSections.push({ title: section.title, words: sectionWords })
  })

  const warnings = []
  if (words < rules.minWords) {
    warnings.push(
      `Ders toplam ${words} kelime. Bu öğrenme profili genelde en az ${rules.minWords} kelime gerekiyor — açıklamaları kısaltmayın, gereksiz kelimeyi atın.`
    )
  }
  if (document.sections.length < rules.minSections) {
    warnings.push(`${document.sections.length} bölüm var. Öğretme akışı genelde en az ${rules.minSections} bölüm ister (giriş → kurma → derinleşme → uygulama/kapanış).`)
  }
  thinSections.forEach((section) => {
    warnings.push(`“${section.title}” bölümü yalnızca ${section.words} kelime — burada anlatım yüzeysel kalmış olabilir.`)
  })
  rules.requiredRoles.forEach(({ role, message }) => {
    if (!roles.has(role)) warnings.push(message)
  })
  if (!document.prerequisites.length) {
    warnings.push('Ön koşul bilgisi tanımlanmamış; öğrenci nereden başlayacağını bilemez.')
  }
  if (!document.outcomes.length) {
    warnings.push('“Bu dersin sonunda yapabileceklerin” tanımlı değil; öğrenci kendini kontrol edemez.')
  }

  if (profile === 'math') {
    if (workedExamples < 5) warnings.push('Matematik dersi en az 5 çözümlü örnek içermeli.')
    if (workedSteps < 9) warnings.push('Çözümlü örneklerde işlem akışı yeterince görünür değil; en az 9 işlem basamağı gerekli.')
    if (!hasBeginnerExample) warnings.push('Matematiğe sıfırdan başlayan öğrenci için Seviye 1 örneği yok.')
    if (!hasSelectiveExample) warnings.push('İleri öğrenci için rehberli Seviye 5 seçici örneği yok.')
    if (independentQuestions < 3) warnings.push('Rehberli örneklerden farklı en az 3 yardımsız matematik sorusu gerekli.')
  }

  return {
    words,
    sections: document.sections.length,
    roles: [...roles],
    warnings,
    // 0–100. Yayına hazırlık göstergesidir, not değildir.
    score: Math.max(0, 100 - warnings.length * 9),
  }
}

/* ==================================================================
   8) İÇERİK PARMAK İZİ — cache geçersizliği
   ================================================================== */

export function contentHash(value) {
  // Kriptografik amaç taşımaz; TTS ve kişiselleştirme cache'i için kararlı
  // bir anahtar üretir. Sunucudaki TTS katmanı gerçek SHA-256 kullanır.
  const source = JSON.stringify(normalizeLessonDocument(value))
  let hash = 2166136261
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return `v2-${(hash >>> 0).toString(16)}`
}

/** Tek bir bölümün parmak izi — bölüm sesi yalnız o bölüm değişince yenilenir. */
export function sectionHash(section) {
  const source = JSON.stringify(normalizeSection(section))
  let hash = 2166136261
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return `s2-${(hash >>> 0).toString(16)}`
}

/* ==================================================================
   9) EDİTÖR ALAN TANIMLARI
   ------------------------------------------------------------------
   Öğretmen JSON görmemeli (§41). Editor, blok tipini seçtiğinde hangi
   alanların çıkacağını buradan okur — böylece yeni bir blok tipi
   eklendiğinde editorde ayrıca kod yazmak gerekmez, tek kaynak korunur.

   `kind` değerleri `LessonEditor` içindeki alan bileşenlerine karşılık gelir:
     text | textarea | list | steps | select | options | variables
     | tableRows | compareRows | figure
   ================================================================== */

export const BLOCK_FIELDS = {
  prose: [{ name: 'body', label: 'Anlatım', kind: 'textarea', rows: 8, hint: '**kalın**, ==vurgu==, *eğik*, $formül$ ve “- ” ile madde yazabilirsiniz.' }],

  concept: [
    { name: 'term', label: 'Tanımlanan kavram', kind: 'text' },
    { name: 'body', label: 'Tanım ve açılımı', kind: 'textarea', rows: 6 },
  ],

  why: [
    { name: 'question', label: '“Neden?” sorusu', kind: 'text', hint: 'Soruyu açıkça yazın; öğrenci soruyu görmeden cevabı önemsemez.' },
    { name: 'body', label: 'Cevap', kind: 'textarea', rows: 6 },
  ],

  mechanism: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'body', label: 'Giriş açıklaması', kind: 'textarea', rows: 4 },
    { name: 'steps', label: 'Adımlar', kind: 'steps' },
  ],

  process: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'intro', label: 'Giriş', kind: 'textarea', rows: 3 },
    { name: 'steps', label: 'Adımlar', kind: 'steps' },
  ],

  teacher_note: [
    { name: 'tone', label: 'Ton', kind: 'select', options: [
      { value: 'note', label: 'Hoca notu' },
      { value: 'warning', label: 'Dikkat' },
      { value: 'exam', label: 'Sınav notu' },
      { value: 'connection', label: 'Bağlantı' },
    ] },
    { name: 'body', label: 'Not', kind: 'textarea', rows: 3, hint: 'Kısa tutun. Kenar notu uzun paragraf taşımaz.' },
  ],

  trap: [
    { name: 'title', label: 'Hatanın adı', kind: 'text' },
    { name: 'wrong', label: 'Öğrencinin kurduğu yanlış mantık', kind: 'textarea', rows: 3 },
    { name: 'right', label: 'Doğrusu', kind: 'textarea', rows: 3 },
    { name: 'body', label: 'Ek açıklama', kind: 'textarea', rows: 3 },
  ],

  exam: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'body', label: 'Açıklama', kind: 'textarea', rows: 4 },
    { name: 'patterns', label: 'Soru kalıpları', kind: 'list' },
  ],

  question_clue: [
    { name: 'concept', label: 'Tanınacak kavram / görüş', kind: 'text' },
    { name: 'statement', label: 'Örnek paragraf fikri', kind: 'textarea', rows: 3 },
    { name: 'clues', label: 'Metindeki ipuçları', kind: 'list' },
    { name: 'reasoning', label: 'İpuçları neden bu kavrama götürür?', kind: 'textarea', rows: 5 },
    { name: 'boundary', label: 'Kör ezberi engelleyen sınır', kind: 'textarea', rows: 3 },
  ],

  osym_insight: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'body', label: 'ÖSYM bakışı', kind: 'textarea', rows: 4 },
    { name: 'measures', label: 'Ölçülen beceriler', kind: 'list' },
  ],

  philosopher: [
    { name: 'name', label: 'Filozof', kind: 'text' },
    { name: 'view', label: 'Temel görüş', kind: 'textarea', rows: 4 },
    { name: 'logic', label: 'Anahtar mantık', kind: 'textarea', rows: 4 },
    { name: 'clues', label: 'Paragraftaki işaretler', kind: 'list' },
    { name: 'contrast', label: 'Karşı görüş / ayrım', kind: 'textarea', rows: 3 },
  ],

  argument_flow: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'claim', label: 'Ana sav', kind: 'textarea', rows: 3 },
    { name: 'steps', label: 'Öncüller ve akıl yürütme', kind: 'steps' },
    { name: 'conclusion', label: 'Sonuç', kind: 'textarea', rows: 3 },
    { name: 'counter', label: 'Karşı itiraz', kind: 'textarea', rows: 3 },
  ],

  connection: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'body', label: 'Açıklama', kind: 'textarea', rows: 4 },
    { name: 'links', label: 'Bağlanan konular', kind: 'list' },
  ],

  memory: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'body', label: 'Hafıza cümlesi', kind: 'textarea', rows: 3 },
  ],

  figure: [
    { name: 'kind', label: 'Şema', kind: 'figure' },
    { name: 'title', label: 'Şekil başlığı', kind: 'text' },
    { name: 'caption', label: 'Alt yazı', kind: 'textarea', rows: 3 },
    { name: 'purpose', label: 'Pedagojik amaç', kind: 'text', hint: 'Bu görsel öğrenciye neyi göstermek için var? Dekoratif görsel eklemeyin.' },
    { name: 'width', label: 'Genişlik', kind: 'select', options: [
      { value: 'text', label: 'Metin genişliği' },
      { value: 'wide', label: 'Geniş' },
      { value: 'full', label: 'Tam genişlik' },
    ] },
    { name: 'focus', label: 'Odak noktaları', kind: 'steps', hint: 'Sıra önemlidir: her odak, şemanın aynı sıradaki bölgesini vurgular.' },
    { name: 'audio_script', label: 'Görseli Hocayla İncele anlatımı', kind: 'textarea', rows: 6, hint: 'Alt yazıyı tekrar etmeyin. Öğrenciye nereye bakacağını sırayla söyleyin.' },
  ],

  formula: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'latex', label: 'Formül (LaTeX)', kind: 'text', hint: 'Örn. F = q \\cdot v \\cdot B \\cdot \\sin\\theta' },
    { name: 'variables', label: 'Değişkenler', kind: 'variables' },
    { name: 'meaning', label: 'Formül ne anlatıyor?', kind: 'textarea', rows: 4 },
  ],

  table: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'columns', label: 'Sütun başlıkları', kind: 'list' },
    { name: 'rows', label: 'Satırlar', kind: 'tableRows' },
    { name: 'caption', label: 'Alt yazı', kind: 'textarea', rows: 2 },
  ],

  compare: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'columns', label: 'Karşılaştırılan kavramlar', kind: 'list' },
    { name: 'rows', label: 'Ayrım eksenleri', kind: 'compareRows' },
    { name: 'insight', label: 'Asıl ayrım', kind: 'textarea', rows: 3, hint: 'Tablo tek başına öğretmez. Farkın NEDEN önemli olduğunu buraya yazın.' },
  ],

  concept_map: [
    { name: 'title', label: 'Harita başlığı', kind: 'text' },
    { name: 'intro', label: 'Kısa yönlendirme', kind: 'textarea', rows: 3 },
    { name: 'nodes', label: 'Kavramlar', kind: 'conceptNodes' },
    { name: 'links', label: 'İlişkiler', kind: 'conceptLinks', hint: 'Oklar, kavramları neden-sonuç veya kapsama ilişkisiyle bağlamalıdır.' },
    { name: 'caption', label: 'Haritadan çıkarılacak sonuç', kind: 'textarea', rows: 3 },
  ],

  timeline: [
    { name: 'title', label: 'Kronoloji başlığı', kind: 'text' },
    { name: 'intro', label: 'Kısa yönlendirme', kind: 'textarea', rows: 3 },
    { name: 'items', label: 'Tarih / olay durakları', kind: 'steps', hint: 'Adım başlığına tarih veya dönemi, açıklamaya olayı yazın.' },
    { name: 'takeaway', label: 'Kronolojiden çıkarım', kind: 'textarea', rows: 3 },
  ],

  cause_effect: [
    { name: 'title', label: 'Zincir başlığı', kind: 'text' },
    { name: 'intro', label: 'Kısa yönlendirme', kind: 'textarea', rows: 3 },
    { name: 'steps', label: 'Sebep - olay - sonuç - etki', kind: 'steps' },
    { name: 'inference', label: 'Bu zincirden çıkarım', kind: 'textarea', rows: 3 },
  ],

  period_summary: [
    { name: 'title', label: 'Dönem adı', kind: 'text' },
    { name: 'range', label: 'Zaman aralığı', kind: 'text' },
    { name: 'body', label: 'Dönemin ana karakteri', kind: 'textarea', rows: 4 },
    { name: 'turning_points', label: 'Dönüm noktaları', kind: 'list' },
  ],

  historical_map: [
    { name: 'title', label: 'Harita başlığı', kind: 'text' },
    { name: 'intro', label: 'Öğrenci yönlendirmesi', kind: 'textarea', rows: 4 },
    { name: 'map_label', label: 'Doğruluk / ölçek etiketi', kind: 'text', hint: 'Şematik bir çizimse bunu açıkça belirtin.' },
    { name: 'insight', label: 'Haritadan çıkarılacak coğrafi sonuç', kind: 'textarea', rows: 5 },
    { name: 'source_note', label: 'Kaynak ve sadeleştirme notu', kind: 'textarea', rows: 3 },
  ],

  historical_figures: [
    { name: 'title', label: 'Bölüm başlığı', kind: 'text' },
    { name: 'intro', label: 'Öğrenci yönlendirmesi', kind: 'textarea', rows: 3 },
    { name: 'figures', label: 'Hükümdarlar ve şahsiyetler', kind: 'historicalFigures' },
    { name: 'takeaway', label: 'Kişi–olay bağlantısının özeti', kind: 'textarea', rows: 3 },
  ],

  sentence_analysis: [
    { name: 'title', label: 'Çözümleme başlığı', kind: 'text' },
    { name: 'prompt', label: 'Çözümlenecek cümle', kind: 'textarea', rows: 3 },
    { name: 'segments', label: 'Anlam parçaları', kind: 'steps', hint: 'Adım başlığına cümle parçasını, açıklamaya bu parçanın görevini yazın.' },
    { name: 'takeaway', label: 'Cümleden çıkarılacak sonuç', kind: 'textarea', rows: 3 },
  ],

  decision_tree: [
    { name: 'title', label: 'Karar ağacı başlığı', kind: 'text' },
    { name: 'intro', label: 'Nasıl kullanılacak?', kind: 'textarea', rows: 3 },
    { name: 'checks', label: 'Kontrol soruları', kind: 'steps', hint: 'Adım başlığına kontrol sorusunu, açıklamaya EVET sonucunu yazın. Ayrıntılı HAYIR dalı içerik kaynağında tanımlanabilir.' },
    { name: 'takeaway', label: 'Son karar kuralı', kind: 'textarea', rows: 3 },
  ],

  example: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'body', label: 'Örnek', kind: 'textarea', rows: 5 },
  ],

  worked_example: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'prompt', label: 'Soru', kind: 'textarea', rows: 4 },
    { name: 'steps', label: 'Çözüm adımları', kind: 'steps' },
    { name: 'answer', label: 'Cevap', kind: 'textarea', rows: 2 },
    { name: 'takeaway', label: 'Buradan ne öğrendik?', kind: 'textarea', rows: 3 },
  ],

  checkpoint: [
    { name: 'prompt', label: 'Öğrenciye sorulan', kind: 'textarea', rows: 3 },
    { name: 'hint', label: 'İpucu', kind: 'textarea', rows: 2 },
    { name: 'answer', label: 'Cevap', kind: 'textarea', rows: 5 },
  ],

  quiz: [
    { name: 'purpose', label: 'Amaç', kind: 'select', options: [
      { value: 'recall', label: 'Bilgi kontrolü' },
      { value: 'concept', label: 'Kavram kontrolü' },
      { value: 'apply', label: 'Uygulama' },
      { value: 'error', label: 'Hata tespiti' },
    ] },
    { name: 'question', label: 'Soru', kind: 'textarea', rows: 3 },
    { name: 'options', label: 'Seçenekler', kind: 'options' },
    { name: 'explanation', label: 'Cevap açıklaması', kind: 'textarea', rows: 5, hint: 'Yalnızca doğruyu değil, çeldiricilerin neden yanlış olduğunu da yazın.' },
  ],

  osym_simulation: [
    { name: 'title', label: 'Simülasyon başlığı', kind: 'text' },
    { name: 'passage', label: 'Özgün soru metni', kind: 'textarea', rows: 6 },
    { name: 'question', label: 'Soru kökü', kind: 'textarea', rows: 3 },
    { name: 'options', label: 'Seçenekler', kind: 'options' },
    { name: 'stem_analysis', label: 'Soru kökü analizi', kind: 'textarea', rows: 3 },
    { name: 'critical_point', label: 'Kritik çözüm noktası', kind: 'textarea', rows: 3 },
    { name: 'takeaway', label: 'Bu sorudan alınacak refleks', kind: 'textarea', rows: 3 },
  ],

  summary: [
    { name: 'title', label: 'Başlık', kind: 'text' },
    { name: 'points', label: 'Maddeler', kind: 'list' },
    { name: 'body', label: 'Ek açıklama', kind: 'textarea', rows: 3 },
  ],

  next_step: [
    { name: 'body', label: 'Yönlendirme', kind: 'textarea', rows: 4 },
    { name: 'topics', label: 'Sıradaki konular', kind: 'list' },
  ],

  audio_script: [
    { name: 'body', label: 'Öğretmen anlatımı', kind: 'textarea', rows: 8, hint: 'Notu kelimesi kelimesine okumayın. Yönlendirin, durdurun, bağlantı kurdurun.' },
  ],
}
