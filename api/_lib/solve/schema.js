/**
 * AI Soru Çözüm Merkezi — yapılandırılmış çıktı şemaları (§5).
 *
 * ÜÇ TASARIM KARARI
 * =================
 *
 * 1) SUNUM ŞEMADA YOK — SEMANTİK VAR.
 *    Model NE olduğunu söyler (adım, iddia, şekil verisi); NASIL
 *    gösterileceğine DrKoç kodu karar verir (`whiteboard.js` + istemci
 *    renderer'ları). Bu, `scripts/bench/schema.mjs` içinde Faz 0'da
 *    alınmış bir karardır ve burada korunuyor. İki faydası var:
 *      · Model asla HTML/CSS/DOM üretemez → §45/§46'daki XSS riski
 *        mimari olarak yok olur, "sanitize etmeyi unutma" riski kalmaz.
 *      · Tahtanın görünümü değiştiğinde modele dokunmak gerekmez.
 *
 * 2) KONU SERBEST METİN, EŞLEŞTİRME KODDA.
 *    Faz 0 şeması konu adını ENUM yapmıştı (uydurmayı imkânsız kılmak
 *    için). Burada vazgeçildi çünkü tüm müfredat ağacı (4 sınav türü ×
 *    9 ders × ~40 konu) enum olarak HER İSTEĞE girdi token'ı olarak
 *    binerdi — §26'nın açıkça engellemek istediği şey.
 *    Yerine: model serbest yazar, sunucu `resolveTopicNode()` ile
 *    mevcut müfredat ağacına eşler (§31). Eşleşmeyen konu SESSİZCE
 *    kabul edilmez; `topic_matched: false` olarak işaretlenir ve
 *    performans analizine ham hâliyle girmez. Yani uydurma hâlâ
 *    taksonomiyi bozamaz, sadece maliyeti ödemiyoruz.
 *
 * 3) DOĞRULAMA İDDİALARI MAKİNE İÇİN.
 *    `verification.claims` öğrenciye gösterilmez. Bunlar `verify.js`
 *    tarafından kısıtlanmış bir matematik ayrıştırıcısında koşturulur.
 *    Modelin ürettiği KOD ASLA ÇALIŞTIRILMAZ — model yalnızca önceden
 *    tanımlı alanları doldurabilir.
 */

export const SCHEMA_VERSION = '1.0'

/* ==================================================================
   ORTAK KISALTMALAR
   Şema açıklamaları da girdi token'ıdır; kısa ve emir kipinde yazılır.
   ================================================================== */

const str = (description) => ({ type: 'string', description })
const nstr = (description) => ({ type: ['string', 'null'], description })
const int = (description) => ({ type: 'integer', description })
const nnum = (description) => ({ type: ['number', 'null'], description })
const num = (description) => ({ type: 'number', description })
const bool = (description) => ({ type: 'boolean', description })
const arr = (items, description) => ({ type: 'array', items, description })
const strArr = (description) => arr({ type: 'string' }, description)

const obj = (required, properties, description) => ({
  type: 'object',
  required,
  properties,
  ...(description ? { description } : {}),
})

/* ==================================================================
   SABİT LİSTELER
   ================================================================== */

/** Çözüm merkezinin kapsadığı dersler (§ görev tanımı: sayısal dersler). */
export const SOLVE_SUBJECTS = ['Matematik', 'Geometri', 'Fizik', 'Kimya', 'Biyoloji', 'Diğer']

/** `src/lib/curriculum/graph.js` ile aynı sınav türleri. */
export const EXAM_TYPES = ['LGS', 'TYT', 'AYT', 'KPSS', 'BELİRSİZ']

/**
 * Görselin neden çözülemediği. Serbest metin yerine enum: her değerin
 * öğrenciye gösterilecek Türkçe karşılığı `readIssueMessage()` içinde
 * TEK YERDE duruyor, modelin o an nasıl yazdığına bağlı değil (§23).
 */
export const READ_ISSUES = [
  'alt_kisim_kesik',
  'ust_kisim_kesik',
  'yan_kisim_kesik',
  'bulanik',
  'karanlik',
  'egik_veya_donuk',
  'birden_fazla_soru',
  'sekil_okunmuyor',
  'siklar_gorunmuyor',
  'el_yazisi_okunmuyor',
  'soru_bulunamadi',
  'celiskili_bilgi',
]

const ISSUE_MESSAGES = {
  alt_kisim_kesik: 'Fotoğrafın alt kısmı görünmüyor — sorunun tamamını çeker misin?',
  ust_kisim_kesik: 'Sorunun üst kısmı kadraja girmemiş. Tamamını çeker misin?',
  yan_kisim_kesik: 'Sorunun kenarı kesilmiş. Biraz daha geniş çeker misin?',
  bulanik: 'Fotoğraf bulanık çıkmış. Telefonu sabit tutup tekrar çeker misin?',
  karanlik: 'Fotoğraf karanlık — yazıları net seçemiyorum. Daha aydınlık bir yerde çeker misin?',
  egik_veya_donuk: 'Fotoğraf epey eğik. Sayfayı düz açıyla, tam karşıdan çeker misin?',
  birden_fazla_soru:
    'Fotoğrafta birden fazla soru var. Hangisini çözmemi istiyorsan yalnızca onu kırpıp gönderir misin?',
  sekil_okunmuyor:
    'Sorudaki şekli net göremiyorum; şekildeki değerleri okuyamadan çözmek yanlış sonuç verir. Şekli daha yakından çeker misin?',
  siklar_gorunmuyor: 'Şıklar görünmüyor. Şıkların da göründüğü bir fotoğraf çeker misin?',
  el_yazisi_okunmuyor: 'El yazısını net çözemedim. Daha yakından ve aydınlık çeker misin?',
  soru_bulunamadi: 'Bu görselde çözebileceğim bir soru bulamadım. Soru fotoğrafı yükler misin?',
  celiskili_bilgi:
    'Sorudaki bilgiler bana çelişkili göründü; yanlış yönlendirmemek için çözmüyorum. Sorunun tamamını görebildiğimden emin olmak için tekrar çeker misin?',
}

/** Enum değerini öğrenciye gösterilecek Türkçe cümleye çevirir. */
export function readIssueMessage(issue) {
  return ISSUE_MESSAGES[issue] ?? null
}

/** Adımın türü — tahtada nasıl vurgulanacağını belirler (sunum kodda). */
export const STEP_KINDS = [
  'kurulum', // verilenleri yazma, denklem kurma
  'donusum', // cebirsel düzenleme
  'hesap', // sayısal işlem
  'yerine_koyma',
  'sonuc',
  'kontrol',
  'kavram', // formül/teorem hatırlatma
]

/* ==================================================================
   1) TRİYAJ — ucuz model, tek amaç: yönlendirme kararı (§3)
   ------------------------------------------------------------------
   Bu çağrı SORUYU ÇÖZMEZ. Çözmesini istemek, hangi modele gideceğine
   karar vermeden önce pahalı işi yapmak olurdu. Yalnızca "bu soru ne
   kadar zor, okunuyor mu, hangi ders" sorularını yanıtlar.
   ================================================================== */

export const TRIAGE_SCHEMA = obj(
  [
    'readable',
    'read_confidence',
    'issues',
    'subject',
    'exam_type',
    'topic',
    'subtopic',
    'question_type',
    'difficulty',
    'visual_complexity',
    'estimated_steps',
    'reasoning_need',
    'confidence',
  ],
  {
    readable: bool('Soru, güvenilir biçimde çözülebilecek kadar okunuyor mu.'),
    read_confidence: num('Soruyu doğru OKUDUĞUNA dair güvenin, 0-1.'),
    issues: arr(
      { type: 'string', enum: READ_ISSUES },
      'Görselle ilgili engeller. Sorun yoksa boş dizi.'
    ),
    subject: { type: 'string', enum: SOLVE_SUBJECTS, description: 'Sorunun dersi.' },
    exam_type: { type: 'string', enum: EXAM_TYPES, description: 'Hangi sınav düzeyine ait.' },
    topic: str('Konu adı, Türkçe. Örn: "Türev". Emin değilsen "Belirsiz" yaz.'),
    subtopic: nstr('Alt konu. Örn: "Bileşke Fonksiyon". Yoksa null.'),
    question_type: {
      type: 'string',
      enum: ['coktan_secmeli', 'acik_uclu', 'dogru_yanlis', 'ispat', 'belirsiz'],
    },
    difficulty: int('Zorluk 1 (çok kolay) - 5 (çok zor).'),
    visual_complexity: int('Şekil/grafik/tablo karmaşıklığı 1 (yok) - 5 (çok karmaşık).'),
    estimated_steps: int('Çözümün kaç adım süreceğine dair tahmin.'),
    reasoning_need: int('Gereken akıl yürütme derinliği 1 - 5.'),
    confidence: num('Bu sınıflandırmanın tamamına dair güvenin, 0-1.'),
  }
)

/* ==================================================================
   2) ŞEKİL — tahtadaki görsellerin veri modeli
   ------------------------------------------------------------------
   Beş ilkel yeter: eğri, çokgen/çizgi, işaretçi, yay, etiket. Bunlarla
   parabol, üçgen, çember, açı, vektör, kuvvet diyagramı ve koordinat
   sistemi çizilebilir. Tablo ve akış şeması (biyoloji: DNA→RNA→Protein)
   ayrı tutulur çünkü koordinat uzayında değiller.

   Şema BÜYÜK. Bu yüzden yalnızca triyaj "şekil gerekiyor" dediğinde
   isteğe eklenir (bkz. buildSolutionSchema).
   ================================================================== */

const FIGURE_SCHEMA = obj(
  ['kind', 'caption'],
  {
    kind: {
      type: 'string',
      enum: ['yok', 'grafik', 'tablo', 'akis', 'sayi_dogrusu'],
      description: 'Bu adımda gösterilecek görselin türü. Gerekmiyorsa "yok".',
    },
    caption: nstr('Şeklin tek cümlelik açıklaması. Yoksa null.'),

    view: {
      type: ['object', 'null'],
      description: 'grafik için görünüm penceresi.',
      required: ['xmin', 'xmax', 'ymin', 'ymax'],
      properties: { xmin: num(''), xmax: num(''), ymin: num(''), ymax: num('') },
    },

    curves: arr(
      obj(['expr', 'label'], {
        expr: str('x cinsinden fonksiyon, DÜZ matematik sözdizimi (LaTeX değil). Örn: "x^2-4*x+3".'),
        label: nstr('Eğrinin etiketi. Örn: "f(x)".'),
      }),
      'Çizilecek fonksiyonlar. Yoksa boş dizi.'
    ),

    polylines: arr(
      obj(['points', 'closed', 'style', 'label'], {
        points: arr(obj(['x', 'y'], { x: num(''), y: num('') }), 'Köşe noktaları, sırayla.'),
        closed: bool('Kapalı şekil mi (üçgen, dörtgen) yoksa açık çizgi mi.'),
        style: { type: 'string', enum: ['duz', 'kesikli', 'ok', 'vektor'] },
        label: nstr('Şeklin etiketi. Yoksa null.'),
      }),
      'Doğru parçaları, çokgenler, vektörler. Yoksa boş dizi.'
    ),

    circles: arr(
      obj(['cx', 'cy', 'r', 'label'], {
        cx: num(''),
        cy: num(''),
        r: num('Yarıçap.'),
        label: nstr(''),
      }),
      'Çemberler. Yoksa boş dizi.'
    ),

    markers: arr(
      obj(['x', 'y', 'style', 'label'], {
        x: num(''),
        y: num(''),
        style: { type: 'string', enum: ['nokta', 'bos_nokta', 'dik_aci', 'carpi'] },
        label: nstr('Nokta etiketi. Örn: "A".'),
      }),
      'Noktalar ve dik açı işaretleri. Yoksa boş dizi.'
    ),

    arcs: arr(
      obj(['cx', 'cy', 'r', 'start_deg', 'end_deg', 'label'], {
        cx: num(''),
        cy: num(''),
        r: num(''),
        start_deg: num(''),
        end_deg: num(''),
        label: nstr('Açı etiketi. Örn: "60°".'),
      }),
      'Açı yayları. Yoksa boş dizi.'
    ),

    labels: arr(
      obj(['x', 'y', 'text'], { x: num(''), y: num(''), text: str('Kısa etiket metni.') }),
      'Serbest konumlu etiketler. Yoksa boş dizi.'
    ),

    table: {
      type: ['object', 'null'],
      description: 'tablo için. Değilse null.',
      required: ['headers', 'rows'],
      properties: {
        headers: strArr('Sütun başlıkları.'),
        rows: arr(obj(['cells'], { cells: strArr('Satır hücreleri, başlıklarla aynı sayıda.') }), ''),
      },
    },

    flow: {
      type: ['object', 'null'],
      description: 'akis için (örn. DNA → RNA → Protein). Değilse null.',
      required: ['nodes', 'edges'],
      properties: {
        nodes: arr(obj(['id', 'label'], { id: str('Kısa kimlik.'), label: str('Kutu metni.') }), ''),
        edges: arr(
          obj(['from', 'to', 'label'], { from: str(''), to: str(''), label: nstr('Ok etiketi.') }),
          ''
        ),
      },
    },

    number_line: {
      type: ['object', 'null'],
      description: 'sayi_dogrusu için (eşitsizlik, aralık). Değilse null.',
      required: ['min', 'max', 'points', 'intervals'],
      properties: {
        min: num(''),
        max: num(''),
        points: arr(
          obj(['value', 'filled', 'label'], {
            value: num(''),
            filled: bool('Dolu nokta (dahil) mi, boş nokta (hariç) mi.'),
            label: nstr(''),
          }),
          ''
        ),
        intervals: arr(
          obj(['from', 'to', 'closed_start', 'closed_end', 'label'], {
            from: num(''),
            to: num(''),
            closed_start: bool(''),
            closed_end: bool(''),
            label: nstr(''),
          }),
          ''
        ),
      },
    },
  },
  'Bu adımda tahtada çizilecek şekil. Gerekmiyorsa kind="yok".'
)

/* ==================================================================
   3) ÇÖZÜM ADIMI
   ================================================================== */

function stepSchema(withFigure) {
  const properties = {
    n: int('1den başlayan sıra numarası.'),
    kind: { type: 'string', enum: STEP_KINDS, description: 'Bu adımın türü.' },
    title: str('Adımın başlığı, 2-5 kelime. Örn: "6\'yı karşıya atalım".'),
    narration: str(
      'Öğretmenin tahtada söyleyeceği cümle. KISA ve sade Türkçe. ' +
        'Kötü: "cebirsel manipülasyon uygulanarak her iki tarafa 6 çıkarma işlemi gerçekleştirilmiştir". ' +
        'İyi: "Şimdi her iki taraftan 6 çıkaralım."'
    ),
    math: nstr(
      'Bu adımın matematiksel ifadesi, LaTeX (dolar işareti OLMADAN). ' +
        'Bu adımda matematik yoksa null.'
    ),
    why: nstr(
      'Bu işlemi NEDEN yaptığımız, 1-2 cümle. Öğrenci "Neden?" düğmesine ' +
        'bastığında bu gösterilecek. İşlemi tekrar anlatma; GEREKÇEYİ anlat.'
    ),
    emphasis: nstr(
      'Bu adımda dikkat çekilecek ifade parçası, LaTeX. Örn: "2x". Yoksa null.'
    ),
    is_key: bool('Bu adım çözümün kilit fikri mi.'),
  }

  const required = ['n', 'kind', 'title', 'narration', 'math', 'why', 'emphasis', 'is_key']

  if (withFigure) {
    properties.figure = FIGURE_SCHEMA
    required.push('figure')
  }

  return obj(required, properties)
}

/* ==================================================================
   4) DOĞRULAMA İDDİALARI (makine koşacak)
   ================================================================== */

export const CLAIM_TYPES = ['substitute', 'arithmetic', 'equation_check', 'numerical_check']

const CLAIMS_SCHEMA = arr(
  obj(['type', 'expression', 'variables', 'expect', 'tolerance', 'describes'], {
    type: { type: 'string', enum: CLAIM_TYPES },
    expression: str(
      'Değerlendirilecek ifade, DÜZ matematik sözdizimi (LaTeX DEĞİL, \\frac yazma). ' +
        'equation_check için "sol = sag" biçiminde.'
    ),
    variables: arr(
      obj(['name', 'value'], {
        name: str('Değişken adı, örn "x".'),
        value: num('Sayısal değeri.'),
      }),
      'İfadedeki değişkenlerin değerleri. Yoksa boş dizi.'
    ),
    expect: num('İfadenin eşit olması beklenen sayı. equation_check için 0 yaz.'),
    tolerance: num('Kabul edilebilir sapma. Tam sonuç bekleniyorsa 0.'),
    describes: str('Bu iddia neyi kanıtlıyor, kısa Türkçe. Örn: "x=6 denklemi sağlıyor".'),
  }),
  'Cevabının doğruluğunu BAĞIMSIZ olarak kanıtlayan, makine tarafından ' +
    'kontrol edilebilir iddialar. Kuramıyorsan boş dizi bırak — uydurma iddia yazma.'
)

/* ==================================================================
   5) TAM ÇÖZÜM ŞEMASI
   ================================================================== */

/**
 * @param {object} options
 * @param {boolean} [options.withFigure]   Şekil alanlarını dahil et (token maliyeti)
 * @param {boolean} [options.multipleChoice] Yanlış şık analizi iste (§35)
 */
export function buildSolutionSchema({ withFigure = false, multipleChoice = false } = {}) {
  const helpProps = {
    common_mistake: str('Öğrencilerin bu soru tipinde en sık yaptığı hata, tek cümle.'),
    key_concept: str('Bu sorunun dayandığı temel kavram, tek cümle.'),
    short_tip: str('Benzer soruda işe yarayacak kısa ipucu, tek cümle.'),
  }
  const helpRequired = ['common_mistake', 'key_concept', 'short_tip']

  if (multipleChoice) {
    helpProps.wrong_choices = arr(
      obj(['key', 'why_wrong'], {
        key: str('Şık harfi (A-E).'),
        why_wrong: str('Bu şıkkın neden yanlış olduğu — hangi hataya düşen öğrenci bunu seçer.'),
      }),
      'Doğru şık DIŞINDAKİ şıkların neden yanlış olduğu.'
    )
    helpRequired.push('wrong_choices')
  }

  return obj(
    ['schema_version', 'reading', 'analysis', 'solution', 'verification', 'student_help'],
    {
      schema_version: { type: 'string', enum: [SCHEMA_VERSION] },

      /* ---------- A) OKUMA — çözümden bağımsız ---------- */
      reading: obj(
        ['readable', 'read_confidence', 'issues', 'question_text', 'choices', 'figure_description'],
        {
          readable: bool('Soruyu güvenilir biçimde çözecek kadar okuyabildin mi.'),
          read_confidence: num('Soruyu DOĞRU OKUDUĞUNA dair güvenin, 0-1.'),
          issues: arr({ type: 'string', enum: READ_ISSUES }, 'Görsel engelleri. Yoksa boş dizi.'),
          question_text: str(
            'Sorunun tam metni, gördüğün gibi. Matematiksel ifadeleri LaTeX ile $...$ ' +
              'içinde yaz. Yorum ekleme, çözme.'
          ),
          choices: arr(
            obj(['key', 'text'], { key: str('A-E'), text: str('Şıkkın içeriği, LaTeX ile.') }),
            'Şıklar. Açık uçlu soruda boş dizi.'
          ),
          figure_description: nstr(
            'Şekil varsa: noktalar, doğrular, açılar, uzunluklar, etiketler ve ilişkiler. ' +
              'Yoksa null. ÖNEMLİ: şekil ölçekli olmayabilir; piksellerden ölçü TAHMİN ETME, ' +
              'yalnızca ETİKETLENMİŞ bilgiyi yaz.'
          ),
        }
      ),

      /* ---------- B) ANALİZ — çözümden ÖNCE düşünme ---------- */
      analysis: obj(
        [
          'subject',
          'topic',
          'subtopic',
          'difficulty',
          'givens',
          'unknowns',
          'goal',
          'required_concepts',
          'strategy',
        ],
        {
          subject: { type: 'string', enum: SOLVE_SUBJECTS },
          topic: str('Konu adı, Türkçe. Örn: "Türev".'),
          subtopic: nstr('Alt konu. Örn: "Zincir Kuralı". Yoksa null.'),
          difficulty: int('Zorluk 1-5.'),
          givens: strArr('Soruda VERİLENLER, kısa maddeler. Fizik/kimyada birimiyle birlikte.'),
          unknowns: strArr('İSTENENLER, kısa maddeler.'),
          goal: str('Sorunun tek cümlelik hedefi.'),
          required_concepts: strArr('Kullanılacak formül/teorem/kural adları.'),
          strategy: str('Çözüm planı, 1-2 cümle. Adımları burada çözme, yalnızca planı söyle.'),
        }
      ),

      /* ---------- C) ÇÖZÜM ---------- */
      solution: obj(['steps', 'answer'], {
        steps: arr(
          stepSchema(withFigure),
          'Çözüm adımları, sırayla. Her adım TEK bir mantıksal hamle olsun. ' +
            'Kolay soruda adımları gereksiz uzatma.'
        ),
        answer: obj(['value_latex', 'plain', 'unit', 'choice'], {
          value_latex: str('Nihai cevap, LaTeX. Örn: "x = 6" veya "2\\\\sqrt{3}".'),
          plain: str('Nihai cevabın düz metin hâli, örn "6". Karşılaştırma için kullanılacak.'),
          unit: nstr('Birim, örn "m/s". Yoksa null.'),
          choice: nstr('Doğru şıkkın harfi (A-E). Açık uçlu soruda null.'),
        }),
      }),

      /* ---------- D) DOĞRULAMA ---------- */
      verification: obj(
        ['claims', 'self_check', 'unit_check', 'sanity_check', 'self_confidence', 'ambiguity_notes'],
        {
          claims: CLAIMS_SCHEMA,
          self_check: str('Cevabını nasıl kontrol ettiğin, tek cümle. Örn: "x=6\'yı denklemde yerine koydum".'),
          unit_check: nstr('Fizik/kimyada birim tutarlılığı kontrolü. Değilse null.'),
          sanity_check: nstr(
            'Sonucun fiziksel/geometrik olarak makul olup olmadığı (negatif uzunluk, ' +
              '180°yi aşan açı toplamı, mertebe hatası). Yoksa null.'
          ),
          self_confidence: num(
            'Cevabının DOĞRU olduğuna dair güvenin, 0-1. DÜRÜST OL: emin değilsen düşük yaz. ' +
              'Yanlış ama yüksek güvenli cevap, bu sistemdeki en ağır hatadır.'
          ),
          ambiguity_notes: strArr('Soruda belirsiz/çelişkili bulduğun noktalar. Yoksa boş dizi.'),
        }
      ),

      /* ---------- E) ÖĞRENCİ YARDIMI ---------- */
      student_help: obj(helpRequired, helpProps),
    }
  )
}

/* ==================================================================
   6) TEK ADIM AÇIKLAMASI — "Neden?" derinleştirme / "Takıldım" (§10, §11)
   ================================================================== */

export const EXPLAIN_SCHEMA = obj(['answer', 'math', 'follow_up'], {
  answer: str(
    'Öğrencinin sorusuna doğrudan yanıt. Sade Türkçe, en fazla 4 cümle. ' +
      'Çözümün tamamını tekrarlama; SORULAN yeri açıkla.'
  ),
  math: nstr('Açıklamayı destekleyen ara işlem, LaTeX (dolar işareti olmadan). Gerekmiyorsa null.'),
  follow_up: nstr('Öğrencinin sorabileceği bir sonraki mantıklı soru. Yoksa null.'),
})

/* ==================================================================
   7) ALTERNATİF YÖNTEM (§12)
   ================================================================== */

export function buildAlternativeSchema({ withFigure = false } = {}) {
  return obj(['has_alternative', 'method_name', 'why_useful', 'steps'], {
    has_alternative: bool(
      'Bu soru için GERÇEKTEN anlamlı, farklı bir yöntem var mı. ' +
        'Aynı çözümü kelime değiştirerek tekrar etmek alternatif DEĞİLDİR — o durumda false yaz.'
    ),
    method_name: nstr('Yöntemin adı. Örn: "Grafikle çözüm". Yoksa null.'),
    why_useful: nstr('Bu yöntem ne zaman daha hızlı/kolay. Yoksa null.'),
    steps: arr(stepSchema(withFigure), 'Alternatif çözümün adımları. Yoksa boş dizi.'),
  })
}

/* ==================================================================
   8) ÖĞRENCİNİN ÇÖZÜMÜNÜ KONTROL (§18, §38)
   ================================================================== */

export function buildCheckSchema({ withFigure = false } = {}) {
  return obj(
    ['readable', 'issues', 'student_steps', 'verdict', 'first_error', 'correction', 'encouragement'],
    {
      readable: bool('Öğrencinin çözümünü okuyabildin mi.'),
      issues: arr({ type: 'string', enum: READ_ISSUES }, 'Okuma engelleri. Yoksa boş dizi.'),
      student_steps: arr(
        obj(['n', 'as_written', 'is_correct'], {
          n: int('Sıra numarası.'),
          as_written: str('Öğrencinin yazdığı işlem, LaTeX. Düzeltmeden, gördüğün gibi.'),
          is_correct: bool('Bu adım doğru mu.'),
        }),
        'Öğrencinin adımları, sırayla.'
      ),
      verdict: {
        type: 'string',
        enum: ['dogru', 'sonuc_dogru_yol_hatali', 'hatali', 'eksik', 'okunamadi'],
      },
      first_error: {
        type: ['object', 'null'],
        description: 'İLK hatalı adım. Çözüm doğruysa null.',
        required: ['step_n', 'what_went_wrong', 'why_it_happened', 'error_type'],
        properties: {
          step_n: int('Hatanın olduğu adım numarası.'),
          what_went_wrong: str(
            'Ne yanlış yapıldı. "Yanlış." DEME; ne olduğunu söyle. ' +
              'Örn: "Burada işaret hatası yaptın: -3x\'i karşıya atarken +3x olmalıydı."'
          ),
          why_it_happened: str('Bu hatanın altındaki kavram yanılgısı, tek cümle.'),
          error_type: {
            type: 'string',
            enum: [
              'isaret_hatasi',
              'islem_hatasi',
              'formul_yanlis',
              'kavram_yanilgisi',
              'birim_hatasi',
              'okuma_hatasi',
              'eksik_durum',
              'dikkatsizlik',
            ],
          },
        },
      },
      correction: arr(
        stepSchema(withFigure),
        'Hatalı adımdan İTİBAREN doğru çözüm. Çözüm baştan doğruysa boş dizi.'
      ),
      encouragement: str(
        'Öğrenciye tek cümlelik, abartısız geri bildirim. Boş övgü yapma; ' +
          'doğru yaptığı somut şeyi söyle.'
      ),
    }
  )
}
