import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Anlatım Bozuklukları
 * Kazanım : T.8.3.8 · T.8.4.16
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * PROGRAM SINIRI — BAĞLAYICI
 * T.8.3.8'in açıklaması tek cümledir: "Dil bilgisi yönünden anlatım
 * bozuklukları üzerinde durulur." T.8.4.16'nın a maddesi de "dil
 * bilgisine dayalı anlatım bozuklukları" der.
 * ANLAMA DAYALI bozukluklar 7. sınıf kazanımıdır (T.7.4.16 a).
 * Bu ders, 8. sınıf sınırı olan DİL BİLGİSİ yönünü merkeze alır;
 * anlama dayalı bozuklukları yalnız kısa bir hatırlatma olarak anar
 * ve hangi sınıfın kazanımı olduğunu açıkça söyler.
 *
 * NOT: "Anlatım Bozuklukları" başlığı kütüphane konu ağacında henüz
 * yoktur; supabase/migration_lgs_konu_tamamlama.sql ile eklenmesi
 * önerilmiştir ve kullanıcı onayı beklemektedir.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-anlatim-bozukluklari',
  topic: 'Anlatım Bozuklukları',
  order: 1,
  title: 'Anlatım Bozuklukları: Dil Bilgisi Yönünden',
  subtitle:
    'Program 8. sınıfta dil bilgisi yönünü ister. Bozukluğu “kulağa garip geliyor” diye değil, ögeleri test ederek bulacağız.',
  minutes: 43,
  kazanimlar: [
    { kod: 'T.8.3.8', metin: 'Metindeki anlatım bozukluklarını belirler.' },
    { kod: 'T.8.4.16', metin: 'Yazdıklarını düzenler.' },
  ],
  prerequisites: [
    { topic: 'Cümlenin ögeleri', why: 'Öge eksikliğini bulmak için ögeleri ayırabilmen gerekir.' },
    { topic: 'Fiilde çatı', why: 'Çatı uyuşmazlığını görmek için failin belli olup olmadığını sınayabilmelisin.' },
  ],
  outcomes: [
    'Sıralı yüklemli cümlelerde ortak ögeyi her yükleme ayrı ayrı bağlayabileceksin.',
    'Özne, nesne ve tümleç eksikliğini testle bulabileceksin.',
    'Özne–yüklem uyuşmazlığını sayı ve kişi bakımından denetleyebileceksin.',
    'Çatı uyuşmazlığını failin belirli olup olmamasıyla açıklayabileceksin.',
    'Bozukluğu bulduktan sonra cümleyi en az değişiklikle düzeltebileceksin.',
  ],

  opening: {
    title: 'Kulağa garip gelmek bir gerekçe değildir',
    lead: 'Anlatım bozukluğu sezgiyle değil, ögeleri test ederek bulunur. Program da 8. sınıfta bunu ister.',
    body: `Şu cümleyi oku: “Öğrenciler kitapları okudu ve rafa yerleştirdi.” Sorun var mı? Yok. İki yüklem de aynı nesneyi paylaşabiliyor: kitapları okudu, kitapları rafa yerleştirdi.

Şimdi şunu oku: “Öğrenciler kitapları okudu ve kütüphaneye gitti.” Yine sorun yok; ikinci yüklem nesne istemiyor.

Ama şuna bak: “Öğrenciler kitapları okudu ve çok sevindiler.” Burada bir uyumsuzluk hissediyorsun ama nerede? Yüklemlerden biri tekil (“okudu”), öteki çoğul (“sevindiler”). Aynı özneye bağlı iki yüklem, sayı bakımından uyuşmuyor.

İşte anlatım bozuklukları böyle bulunur: **sezgiyle değil testle.** “Kulağa garip geliyor” bir gerekçe değildir; sınavda seçenekler arasında üç cümle de kulağa garip gelebilir.

MEB 8. sınıf programındaki **T.8.3.8** kazanımı metindeki anlatım bozukluklarının belirlenmesini ister ve açıklaması tek cümledir: *“Dil bilgisi yönünden anlatım bozuklukları üzerinde durulur.”* Yazma tarafındaki **T.8.4.16** de aynı sınırı koyar: “dil bilgisine dayalı anlatım bozuklukları”.

Bu sınır önemlidir. **Anlama dayalı** bozukluklar — gereksiz sözcük, anlamca çelişme, sözcüğün yanlış anlamda kullanılması gibi — 7. sınıf kazanımıdır (T.7.4.16). 8. sınıfta odak **dil bilgisidir**: öge eksikliği, uyuşmazlık, tamlama ve ek yanlışları.

Bu derste dört test kuracağız:

**1. Ortak öge testi** — sıralı yüklemli cümlelerde.
**2. Uyum testi** — özne ile yüklem arasında.
**3. Çatı testi** — failin belli olup olmamasında.
**4. Tamlama ve ek testi** — sözcük öbeklerinde.`,
  },

  concepts: [
    {
      term: 'Öge eksikliği',
      body: 'Sıralı ya da bağlı yüklemlerden birinin gerektirdiği ögenin cümlede bulunmamasıdır: “Kitabı okudu ve çok beğendi.” — ikinci yüklem de nesne ister ve ortak nesne uyuyor; sorun yok. Ama “Kitabı okudu ve arkadaşına verdi.” cümlesinde nesne ortaktır ve yine sorun yoktur. Sorun, ortak ögenin bir yükleme uymadığı durumda doğar.',
    },
    {
      term: 'Özne eksikliği',
      body: 'İki yüklemin farklı özneler istemesine rağmen tek bir öznenin kullanılmasıdır: “Yağmur yağdı ve maç iptal edildi.” cümlesinde iki ayrı özne açıkça verilmiş; sorun yok. Bozukluk, ikinci öznenin söylenmediği durumlarda doğar.',
    },
    {
      term: 'Özne–yüklem uyuşmazlığı',
      body: 'Öznenin sayı ya da kişi bakımından yükleme uymamasıdır: “Öğrenciler kitabı okudu ve çok sevindiler.” İki yüklem aynı özneye bağlı ama biri tekil, öteki çoğul.',
    },
    {
      term: 'Çatı uyuşmazlığı',
      body: 'Aynı özneye bağlı yüklemlerden birinde failin belli, ötekinde gizli olmasıdır: “Kapı açıldı ve içeri girdi.” İlk yüklemde fail gizli, ikincisinde belli; aynı özneye bağlanamazlar.',
    },
    {
      term: 'Tamlama yanlışlığı',
      body: 'Tamlamanın eksik ya da yanlış kurulmasıdır: “Türkçe ve matematik dersleri” doğrudur; “Türkçe ve matematik sınavını” gibi kullanımlarda tamlanan ek yanlış olabilir. Ortak tamlanan, her tamlayana uymalıdır.',
    },
    {
      term: 'Ek yanlışlığı',
      body: 'Çekim ekinin yanlış ya da eksik kullanılmasıdır: hâl eki, tamlayan eki ya da iyelik ekinin gerekli olduğu yerde bulunmaması. Cümlenin dil bilgisel bağlarını koparır.',
    },
  ],

  why: {
    question: 'Neden bozukluğu “hissederek” bulmak yetmiyor?',
    body: `Üç sebeple.

**Birincisi:** sınav soruları tam da bu sezgiyi hedefler. Dört seçenekten üçü kulağa alışılmadık gelebilir; tek biri gerçekten bozuktur. Sezgi, alışılmadıkla bozuğu ayıramaz.

**İkincisi:** bozukluklar çoğu zaman **uzun cümlelerde** saklanır. Cümle uzadıkça sezgi zayıflar; çünkü zihnin cümlenin başındaki ögeyi sonundaki yüklemle eşleştirmesi zorlaşır. Test ise uzunluktan etkilenmez.

**Üçüncüsü:** bozukluğu bulmak yetmez; **düzeltmen** de istenebilir. T.8.4.16 kazanımı yazdıklarını “gözden geçirmesi ve düzeltmesi”ni ister. Düzeltmek için sorunun tam olarak nerede olduğunu bilmen gerekir — “garip geliyor” bir düzeltme yolu göstermez.

O hâlde yöntem şu: **cümleyi ögelerine ayır ve her yüklemi ayrı ayrı sına.**

Bir örnek üzerinde görelim: “Sınıfa girdi ve tahtaya yazdı.” Ögelere ayıralım. Yüklemler: “girdi” ve “yazdı”. Ortak özne gizli: “o”. Birinci yüklem “nereye?” sorusuna cevap istiyor: sınıfa. İkincisi de istiyor: tahtaya. İkisi de var. Sorun yok.

Şimdi: “Sınıfa girdi ve tahtaya yazarak anlattı.” Yine sorun yok.

Ama: “Kitabı okudu ve çok etkilendi.” Burada birinci yüklem nesne istiyor (neyi okudu? kitabı). İkinci yüklem “neyden etkilendi?” sorusunu soruyor ve dolaylı tümleç istiyor. Ortak öge “kitabı” ikinci yükleme uymuyor — “kitabı etkilendi” denmez. Doğrusu: “Kitabı okudu ve ondan çok etkilendi.”

İşte test budur: **ortak ögeyi her yükleme tek tek bağla.** Bir yükleme bağlanamıyorsa, o yüklem için ayrı bir öge gerekiyor demektir.`,
  },

  decision: {
    title: 'Anlatım bozukluğu bulma yolu',
    lead: 'Cümleyi parçala, her yüklemi ayrı sına, sonra en az değişiklikle düzelt.',
    intro:
      'Bir anlatım bozukluğu sorusunda şu beş durağı uygula. İkinci durak bu dersin ana testidir.',
    steps: [
      {
        title: '1. Yüklemleri bul',
        body: 'Cümlede kaç yüklem var? Birden çoksa bozukluk ihtimali yüksektir; çünkü ortak ögeler paylaşılır ve paylaşım her zaman tutmaz.',
      },
      {
        title: '2. Ortak ögeyi her yükleme ayrı bağla',
        body: 'Ortak özneyi, nesneyi ve tümleci her yüklemle tek tek dene. Biri uymuyorsa o yüklem için ayrı bir öge gerekir: öge eksikliği vardır.',
      },
      {
        title: '3. Uyum testini uygula',
        body: 'Özne ile yüklem sayı (tekil–çoğul) ve kişi bakımından uyuşuyor mu? İki yüklem varsa ikisi de aynı özneyle uyuşmalı.',
      },
      {
        title: '4. Çatı testini uygula',
        body: 'Yüklemlerden birinde fail belli, ötekinde gizli mi? İkisi aynı özneye bağlanıyorsa çatı uyuşmazlığı vardır.',
      },
      {
        title: '5. En az değişiklikle düzelt',
        body: 'Bozukluğu bulduktan sonra cümleyi baştan yazma; eksik ögeyi ekle ya da uyumsuz eki düzelt. Düzeltme, sorunu tam olarak nerede bulduğunu da kanıtlar.',
      },
    ],
    takeaway: 'Bozukluk sezgiyle değil, ögeleri tek tek bağlayarak bulunur.',
  },

  decisionTree: {
    title: 'Hangi tür bozukluk?',
    intro:
      'Üç kontrol, 8. sınıf kapsamındaki dil bilgisi bozukluklarını ayırır.',
    checks: [
      {
        question: 'Ortak bir öge, yüklemlerden birine bağlanamıyor mu?',
        yes: 'Öge eksikliği vardır: özne, nesne ya da tümleç eksik. Örnek: “Kitabı okudu ve çok etkilendi.”',
        no: 'Ögeler yerinde; ikinci kontrole geç.',
      },
      {
        question: 'Özne ile yüklem sayı ya da kişi bakımından uyuşmuyor mu?',
        yes: 'Özne–yüklem uyuşmazlığı vardır. Örnek: “Öğrenciler kitabı okudu ve sevindiler.”',
        no: 'Uyum tamam; üçüncü kontrole geç.',
      },
      {
        question: 'Yüklemlerden birinde fail belli, ötekinde gizli mi?',
        yes: 'Çatı uyuşmazlığı vardır. Örnek: “Kapı açıldı ve içeri girdi.”',
        no: 'Bu üç tür yok; tamlama ya da ek yanlışını kontrol et.',
      },
    ],
    takeaway:
      'Üç kontrolün üçü de temiz çıkarsa cümlede dil bilgisi yönünden bir bozukluk yok demektir.',
  },

  comparison: {
    title: 'Üç öge eksikliğini ayır',
    columns: ['Özne eksikliği', 'Nesne eksikliği', 'Tümleç eksikliği'],
    rows: [
      { label: 'Ne eksik?', values: ['İkinci yüklemin öznesi', 'İkinci yüklemin nesnesi', 'İkinci yüklemin tümleci'] },
      { label: 'Bozuk örnek', values: ['Yağmur başladı ve maçı iptal ettiler; herkes üzüldü ve dağıldı.', 'Kitabı aldı ve okudu, sonra kütüphaneye bağışladı.', 'Kitabı okudu ve çok etkilendi.'] },
      { label: 'Test', values: ['Her yüklem aynı özneyi mi istiyor?', 'Her yüklem aynı nesneyi alabiliyor mu?', 'Her yüklem aynı tümlece bağlanıyor mu?'] },
      { label: 'Düzeltme', values: ['Eksik özneyi ekle', 'Eksik nesneyi ekle', 'Eksik tümleci ekle'] },
      { label: 'Düzeltilmiş hâl', values: ['—', '—', 'Kitabı okudu ve ondan çok etkilendi.'] },
    ],
    insight:
      'Üçünün de kaynağı aynıdır: bir öge iki yüklem arasında paylaştırılmış ama yalnız birine uyuyor.',
  },

  traps: [
    {
      title: 'Anlama dayalı bozuklukları 8. sınıf kapsamı sanmak',
      wrong: 'Gereksiz sözcük kullanımı da bu kazanımın konusudur.',
      right: 'Program 8. sınıfta “dil bilgisi yönünden” der. Anlama dayalı bozukluklar 7. sınıf kazanımıdır (T.7.4.16 a).',
      body: 'Bu ayrımı bilmek çalışma zamanını doğru yere harcamanı sağlar. Anlama dayalı bozukluklar alt sınıfta kurulmuştur ve tekrar edilebilir; ama 8. sınıfın odağı dil bilgisidir.',
    },
    {
      title: 'Ortak ögeyi test etmeden geçmek',
      wrong: 'Cümlede nesne var; öyleyse nesne eksikliği olamaz.',
      right: 'Nesnenin bulunması yetmez; **her yükleme uyması** gerekir. Ortak ögeyi yüklemlerle tek tek deneyeceğim.',
      body: 'Bozukluk, ögenin yokluğundan değil, paylaşımın tutmamasından doğar. Bu yüzden test tek tek bağlamaktır.',
    },
    {
      title: '“Kulağa garip geliyor” demeyi gerekçe saymak',
      wrong: 'Bu cümle bana tuhaf geldi; bozuk olan bu.',
      right: 'Tuhaflık bir gerekçe değildir. Bozukluğu adlandırabilmeliyim: hangi yüklem hangi ögeyi istiyor ve o öge nerede?',
      body: 'Soru hazırlayanlar seçeneklerin birkaçını bilerek alışılmadık kurar. Ayrımı yapan şey adlandırma ve düzeltme yeteneğidir.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-bozukluk-oge',
      title: 'Ortak öge testi: sıralı yüklemlerin tuzağı',
      lead: 'Dil bilgisi bozukluklarının çoğu, iki yüklemin bir ögeyi paylaşmasından doğar.',
      blocks: [
        {
          id: 'lgs-bozukluk-oge-anlatim',
          type: 'prose',
          body: `Türkçede iki yüklem bir ögeyi paylaşabilir. “Kitabı aldı ve okudu.” cümlesinde “kitabı” nesnesi iki yükleme de bağlanıyor: kitabı aldı, kitabı okudu. Paylaşım tutuyor, cümle sağlam.

Sorun, paylaşımın **tutmadığı** durumlarda doğar.

“Kitabı okudu ve çok etkilendi.” Birinci yüklem nesne istiyor: neyi okudu? Kitabı. İkinci yüklem nesne değil, dolaylı tümleç istiyor: neyden etkilendi? Ortak öge “kitabı” ikinci yükleme uymuyor — “kitabı etkilendi” denmez. **Tümleç eksikliği** var.

Düzeltmesi basit: eksik tümleci ekle. “Kitabı okudu ve **ondan** çok etkilendi.”

Bir örnek daha: “Öğrencilere ödevi anlattı ve dağıttı.” Birinci yüklem hem dolaylı tümleç (öğrencilere) hem nesne (ödevi) istiyor. İkinci yüklem de nesne istiyor: neyi dağıttı? Ödevi. Paylaşım tutuyor; sorun yok.

Ama: “Öğrencilere ödevi anlattı ve teşekkür etti.” İkinci yüklem “kime teşekkür etti?” sorusunu soruyor ve dolaylı tümleç istiyor. Ortak tümleç “öğrencilere” uyuyor mu? Uyuyor. Peki nesne “ödevi” ikinci yükleme bağlanıyor mu? Hayır, ama zaten bağlanması gerekmiyor — “teşekkür etmek” nesne almaz. Sorun yok.

Görüyorsun: test mekaniktir ve her seferinde aynı biçimde çalışır. **Her yüklemin hangi ögeleri istediğini sor, sonra ortak ögeyi o yükleme bağlamayı dene.**

Bir ipucu: fiilin geçişli olup olmadığını kontrol etmek işini kısaltır. Geçişsiz bir fiil nesne istemez; o yüklem için nesne eksikliği aramak gereksizdir. Bu bağı Cümlenin Ögeleri dersinde kurmuştuk.

Son olarak, bozukluğu bulduktan sonra **en az değişiklikle** düzelt. Cümleyi baştan yazmak sorunun nerede olduğunu göstermez; eksik ögeyi eklemek gösterir.`,
        },
        {
          id: 'lgs-bozukluk-oge-tablo',
          type: 'table',
          interactive: true,
          title: 'Ortak ögeyi yüklemlere bağla',
          columns: ['Cümle', '1. yüklem ne istiyor?', '2. yüklem ne istiyor?', 'Sonuç'],
          rows: [
            ['Kitabı aldı ve okudu.', 'Nesne: kitabı', 'Nesne: kitabı', 'Paylaşım tutuyor — sağlam'],
            ['Kitabı okudu ve çok etkilendi.', 'Nesne: kitabı', 'Dolaylı tümleç: ondan', 'Tümleç eksik — bozuk'],
            ['Arkadaşına mektup yazdı ve gönderdi.', 'Nesne + tümleç', 'Nesne: mektup', 'Paylaşım tutuyor — sağlam'],
            ['Sınava hazırlandı ve kazandı.', 'Dolaylı tümleç: sınava', 'Nesne: sınavı', 'Nesne eksik — bozuk'],
            ['Öğrencilere ödevi anlattı ve teşekkür etti.', 'Nesne + tümleç', 'Dolaylı tümleç: öğrencilere', 'Paylaşım tutuyor — sağlam'],
          ],
          caption:
            'Dördüncü satırın düzeltmesi: “Sınava hazırlandı ve **sınavı** kazandı.” Eksik ögeyi eklemek yeterli.',
        },
        {
          id: 'lgs-bozukluk-oge-analiz',
          type: 'sentence_analysis',
          title: 'Bozukluğu adım adım yakala',
          prompt:
            'Aşağıdaki cümleyi parçalara ayırdık. Her parçaya tıklayarak testin hangi adımda sonuç verdiğini gör.',
          segments: [
            {
              text: 'Yeni gelen öğretmen',
              label: 'Ortak özne',
              explanation:
                'İki yüklem de bu özneye bağlanacak. Özne tekil; uyum testinde bunu hatırlamamız gerekecek.',
              tone: 'brand',
            },
            {
              text: 'sınıfı tanıdı',
              label: '1. yüklem — nesne istiyor',
              explanation:
                '“Tanımak” geçişli bir fiil ve nesne almış: “neyi tanıdı? → sınıfı”. Buraya kadar sorun yok.',
              tone: 'aqua',
            },
            {
              text: 've çok sevdi.',
              label: '2. yüklem — ortak nesneyi alabiliyor mu?',
              explanation:
                '“Sevmek” de geçişli ve nesne istiyor: “neyi sevdi?” Ortak nesne “sınıfı” buraya bağlanıyor: “sınıfı sevdi”. Paylaşım tutuyor.',
              tone: 'success',
            },
            {
              text: '(Karşılaştır: “sınıfı tanıdı ve çok memnun kaldı.”)',
              label: 'Bozuk varyant',
              explanation:
                '“Memnun kalmak” nesne değil dolaylı tümleç istiyor: “neden memnun kaldı?” Ortak nesne “sınıfı” buraya bağlanamıyor. Tümleç eksikliği doğuyor. Düzeltme: “…tanıdı ve **ondan** çok memnun kaldı.”',
              tone: 'danger',
            },
          ],
          takeaway:
            'Aynı cümle yapısı, ikinci yüklemin istediği ögeye göre sağlam ya da bozuk olabilir. Test her seferinde ikinci yüklemde sonuç verir.',
        },
        {
          id: 'lgs-bozukluk-oge-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Bir cümlede iki yüklem varsa doğrudan ortak öge testine geç. Bu, anlatım bozukluğu sorularının büyük bölümünü açan tek adımdır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-bozukluk-uyum',
      title: 'Uyum ve çatı: iki yüklem bir özneye bağlanırken',
      lead: 'İki yüklemin aynı özneyi paylaşması, sayı ve çatı bakımından da uyum ister.',
      blocks: [
        {
          id: 'lgs-bozukluk-uyum-anlatim',
          type: 'prose',
          body: `**Özne–yüklem uyuşmazlığı**, öznenin sayı ya da kişi bakımından yükleme uymamasıdır.

“Öğrenciler kitabı okudu ve çok sevindiler.” Bu cümlede iki yüklem aynı özneye (öğrenciler) bağlı; ama biri tekil (“okudu”), öteki çoğul (“sevindiler”). İki yüklem de aynı özneyi paylaşıyorsa **aynı sayıda** olmalıdır.

Düzeltmenin iki yolu var: ikisini de tekil yapmak (“okudu ve çok sevindi”) ya da ikisini de çoğul yapmak (“okudular ve çok sevindiler”). Türkçede insan dışı çoğul özneler tekil yüklem alabilir; ama bu, aynı cümledeki iki yüklemin farklı olmasını haklı çıkarmaz.

Kişi uyumunda da benzer bir kural vardır: “Ben ve kardeşim sinemaya gittiler.” yanlıştır; özne birinci ve üçüncü kişiyi kapsıyorsa yüklem birinci çoğul olur: “gittik”.

**Çatı uyuşmazlığı**, aynı özneye bağlı yüklemlerden birinde failin belli, ötekinde gizli olmasıdır.

“Kapı açıldı ve içeri girdi.” Birinci yüklemde fail gizli: kapıyı kim açtı bilmiyoruz, “kapı” işi yapmıyor, işten etkileniyor. İkinci yüklemde ise fail belli olmalı: içeri kim girdi? Aynı özneye bağlanırsa “kapı içeri girdi” gibi anlamsız bir sonuç çıkar.

Düzeltme: “Kapı açıldı ve **adam** içeri girdi.” Ya da: “Kapıyı açtı ve içeri girdi.”

Çatı uyuşmazlığını tanımanın pratik yolu şudur: yüklemlerden birinde “işi yapan belli değil” anlamı, ötekinde “işi yapan belli” anlamı varsa ve ikisi aynı özneye bağlanıyorsa, bozukluk vardır. Bu testi Fiilde Çatı dersinde kurmuştuk.

Bir uyarı: her edilgen–etken karışımı bozukluk değildir. İki yüklem **farklı öznelere** bağlıysa sorun yoktur: “Kapı açıldı, çocuk içeri girdi.” Burada iki ayrı özne var ve cümle sağlam.

Ölçüt şudur: **iki yüklem aynı özneyi mi paylaşıyor?** Paylaşıyorsa hem sayı hem çatı bakımından uyumlu olmalıdır.`,
        },
        {
          id: 'lgs-bozukluk-uyum-tablo',
          type: 'table',
          interactive: true,
          title: 'Uyum ve çatı bozukluklarını tanı',
          columns: ['Bozuk cümle', 'Sorun', 'Neden?', 'Düzeltme'],
          rows: [
            ['Öğrenciler kitabı okudu ve sevindiler.', 'Sayı uyuşmazlığı', 'Aynı özne, biri tekil biri çoğul yüklem', 'okudu ve sevindi / okudular ve sevindiler'],
            ['Ben ve kardeşim sinemaya gittiler.', 'Kişi uyuşmazlığı', 'Özne 1. çoğul, yüklem 3. çoğul', 'Ben ve kardeşim sinemaya gittik.'],
            ['Kapı açıldı ve içeri girdi.', 'Çatı uyuşmazlığı', 'Bir yüklemde fail gizli, ötekinde belli', 'Kapı açıldı ve adam içeri girdi.'],
            ['Camlar silindi ve odayı havalandırdı.', 'Çatı uyuşmazlığı', 'Aynı özne iki farklı çatıya bağlanmış', 'Camlar silindi, oda havalandırıldı.'],
            ['Kapı açıldı, çocuk içeri girdi.', 'Sorun yok', 'İki ayrı özne var', '—'],
          ],
          caption:
            'Son satır ölçütü gösterir: iki yüklem farklı öznelere bağlıysa çatı farkı bozukluk yaratmaz.',
        },
        {
          id: 'lgs-bozukluk-uyum-tuzak',
          type: 'trap',
          title: 'Her edilgen–etken karışımını bozukluk saymak',
          wrong: '“Kapı açıldı, çocuk içeri girdi.” — biri edilgen biri etken; bozuk.',
          right: 'İki yüklem farklı öznelere bağlı: kapı ve çocuk. Ayrı özneleri olan yüklemler farklı çatılarda olabilir.',
          body: 'Çatı uyuşmazlığı, yalnız **aynı özneye bağlı** yüklemler arasında doğar. Önce özneleri ayır, sonra çatıyı sına.',
        },
      ],
    },

    {
      id: 'lgs-turkce-bozukluk-tamlama-sinir',
      title: 'Tamlama, ek yanlışları ve programın sınırı',
      lead: 'Son iki bozukluk türü ve 7. sınıf–8. sınıf ayrımı.',
      blocks: [
        {
          id: 'lgs-bozukluk-tamlama-anlatim',
          type: 'prose',
          body: `**Tamlama yanlışlığı**, birden çok tamlayanın tek bir tamlananı paylaşmasında doğar.

“Türkçe ve matematik dersleri” doğrudur: iki tamlayan da aynı tamlanana bağlanabiliyor.

Ama “sosyal ve fen bilimleri dersi” kullanımında sorun vardır: “sosyal bilimleri” denmez, “sosyal bilimler” denir. Ortak tamlanan her tamlayana uymak zorundadır.

Aynı sorun sıfat tamlamalarında da çıkar: “büyük ve gösterişli bir binalar” yanlıştır; “bir” tekillik bildirirken “binalar” çoğuldur.

**Ek yanlışlığı**, çekim ekinin eksik ya da yanlış kullanılmasıdır. En sık görüleni hâl eki yanlışıdır: “Sınavı hazırlandı.” yanlıştır; “sınava hazırlandı” olmalıdır. Hazırlanmak fiili “-e” hâl eki ister.

Bir başka biçim, tamlayan ekinin eksikliğidir: “Okul bahçesinde oynadık.” doğrudur; “Okulun bahçesi geniş.” de doğrudur. Ama “Okul bahçesi geniş” ile “Okulun bahçesinde” karışımı hatalı kurulursa bağ kopar.

Şimdi programın sınırına gelelim; bu, çalışma zamanını doğru harcaman için önemlidir.

**T.8.3.8**’in açıklaması: *“Dil bilgisi yönünden anlatım bozuklukları üzerinde durulur.”* Yani 8. sınıfta odak bu derste işlediğimiz türlerdir: öge eksikliği, uyuşmazlık, çatı uyuşmazlığı, tamlama ve ek yanlışı.

**Anlama dayalı** bozukluklar — gereksiz sözcük kullanımı, anlamca çelişen ifadeler, sözcüğün yanlış anlamda kullanılması, deyim yanlışı, sıralama hatası — **7. sınıf kazanımıdır** (T.7.4.16 a: “Anlama dayalı anlatım bozuklukları bakımından yazdıklarını gözden geçirmesi…”).

Bunlar 8. sınıfta tamamen yasak değildir; alt sınıfta kurulmuş bilgidir ve tekrar edilebilir. Ama **8. sınıfın odağı dil bilgisidir** ve bu derste öncelik oraya verilmiştir.

Kısa bir hatırlatma olarak anlama dayalı bozukluklardan ikisini anımsayalım: **gereksiz sözcük** (“yukarıya çıktı” — çıkmak zaten yukarı yöndür) ve **anlamca çelişme** (“Kesinlikle gelebilir.” — kesinlik ile olasılık çelişir). Bunlar 7. sınıfın konusudur.`,
        },
        {
          id: 'lgs-bozukluk-tamlama-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Hangi kazanım, hangi sınıf?',
          columns: ['Dil bilgisi yönünden (8. sınıf)', 'Anlama dayalı (7. sınıf)'],
          rows: [
            { label: 'Kazanım', values: ['T.8.3.8 · T.8.4.16 a', 'T.7.4.16 a'] },
            { label: 'Türler', values: ['Öge eksikliği, uyuşmazlık, çatı, tamlama, ek', 'Gereksiz sözcük, çelişme, yanlış anlamda kullanım, deyim yanlışı'] },
            { label: 'Test', values: ['Ögeleri ayır, yüklemlere bağla', 'Anlamı sına, çelişkiyi ara'] },
            { label: 'Örnek', values: ['Kitabı okudu ve çok etkilendi.', 'Yukarıya çıktı.'] },
            { label: 'Bu dersteki yeri', values: ['Ana konu', 'Kısa hatırlatma'] },
          ],
          insight:
            'Program sınırını bilmek, çalışma zamanını doğru yere harcamanı sağlar: 8. sınıfta öncelik dil bilgisi yönündedir.',
        },
        {
          id: 'lgs-bozukluk-tamlama-tuzak',
          type: 'trap',
          title: 'Ortak tamlananı her tamlayana denemeden geçmek',
          wrong: '“Sosyal ve fen bilimleri dersi” kulağa doğru geliyor.',
          right: 'Her tamlayanı ayrı ayrı denerim: “sosyal bilimleri dersi” — bu kullanım hatalıdır, “sosyal bilimler” denir. Ortak tamlanan uymuyor.',
          body: 'Tamlama bozukluklarının testi öge testiyle aynı mantığa dayanır: ortak parçayı her tarafa ayrı ayrı bağla.',
        },
        {
          id: 'lgs-bozukluk-tamlama-hafiza',
          type: 'memory',
          title: 'Dört soruluk bozukluk taraması',
          body: '**Kaç yüklem var?** · **Ortak öge her yükleme uyuyor mu?** · **Sayı ve kişi uyuyor mu?** · **Çatı uyuyor mu?**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Öge eksikliğini bul ve düzelt',
      prompt:
        'Cümle: “Sınava iyi hazırlandı ve kolaylıkla kazandı.” Bu cümlede anlatım bozukluğu var mı?',
      steps: [
        { title: 'Yüklemleri bul', body: 'İki yüklem var: “hazırlandı” ve “kazandı”. Ortak özne gizli: “o”.' },
        { title: '1. yüklem ne istiyor?', body: '“Hazırlanmak” dolaylı tümleç ister: neye hazırlandı? → sınava. Cümlede var.' },
        { title: '2. yüklem ne istiyor?', body: '“Kazanmak” nesne ister: neyi kazandı? Cümlede nesne yok. Ortak öge “sınava” buraya bağlanamaz: “sınava kazandı” denmez.' },
        { title: 'Bozukluğu adlandır', body: 'İkinci yüklem için **nesne eksikliği** var.' },
        { title: 'En az değişiklikle düzelt', body: '“Sınava iyi hazırlandı ve **sınavı** kolaylıkla kazandı.” Eksik nesne eklendi; cümlenin geri kalanına dokunulmadı.' },
      ],
      answer: 'Nesne eksikliği vardır. Düzeltme: “Sınava iyi hazırlandı ve sınavı kolaylıkla kazandı.”',
      takeaway: 'Ortak öge testini her yükleme ayrı ayrı uygula; bozukluk genellikle ikinci yüklemde çıkar.',
    },
    {
      title: 'Seviye 2 — Uyuşmazlık mı, çatı mı?',
      prompt:
        'Şu iki cümlenin hangisinde ne tür bir bozukluk var? (1) “Çocuklar bahçeye çıktı ve oyun oynadılar.” (2) “Bahçe sulandı ve çiçekleri topladı.”',
      steps: [
        { title: '(1) yüklemleri ve özneyi bul', body: 'Özne: çocuklar. Yüklemler: “çıktı” (tekil), “oynadılar” (çoğul).' },
        { title: '(1) uyum testi', body: 'Aynı özneye bağlı iki yüklem farklı sayıda. → **Özne–yüklem uyuşmazlığı**. Düzeltme: “çıktı ve oyun oynadı” ya da “çıktılar ve oyun oynadılar”.' },
        { title: '(2) yüklemleri ve özneyi bul', body: 'Yüklemler: “sulandı” ve “topladı”. Birinci yüklemin öznesi “bahçe”; ikinci yüklemin öznesi belirtilmemiş.' },
        { title: '(2) çatı testi', body: 'Birinci yüklemde fail gizli (bahçeyi biri suladı), ikinci yüklemde fail belli olmalı (çiçekleri biri topladı). Aynı özneye bağlanırsa “bahçe çiçekleri topladı” çıkar. → **Çatı uyuşmazlığı**.' },
        { title: '(2) düzelt', body: '“Bahçe sulandı ve çiçekler toplandı.” ya da “Bahçeyi suladı ve çiçekleri topladı.” İki yolla da uyum sağlanır.' },
      ],
      answer: '(1) özne–yüklem uyuşmazlığı · (2) çatı uyuşmazlığı',
      takeaway:
        'Uyum testi sayıya bakar, çatı testi faile. İkisini ayrı ayrı uygula.',
    },
    {
      title: 'Seviye 3 — Hangi cümle sağlam?',
      prompt:
        'Şu dört cümleden hangisinde dil bilgisi yönünden anlatım bozukluğu **yoktur**? (A) “Kitabı okudu ve çok etkilendi.” (B) “Öğretmenler toplantıya katıldı ve görüş bildirdiler.” (C) “Mektubu yazdı ve postaya verdi.” (D) “Oda havalandırıldı ve masayı sildi.”',
      steps: [
        { title: '(A) ortak öge testi', body: '“Etkilenmek” dolaylı tümleç ister; ortak nesne “kitabı” uymaz. → Tümleç eksikliği. **Bozuk**.' },
        { title: '(B) uyum testi', body: 'Aynı özne, biri tekil (“katıldı”) biri çoğul (“bildirdiler”) yüklem. → Özne–yüklem uyuşmazlığı. **Bozuk**.' },
        { title: '(C) ortak öge testi', body: '“Yazmak” nesne ister: mektubu. “Vermek” de nesne ister: mektubu. Ortak nesne iki yükleme de uyuyor; “postaya” tümleci ikinci yükleme bağlı. **Sağlam**.' },
        { title: '(D) çatı testi', body: 'Birinci yüklemde fail gizli (“havalandırıldı”), ikincisinde belli (“sildi”). Aynı özneye bağlanıyor. → Çatı uyuşmazlığı. **Bozuk**.' },
        { title: 'Kararı ver', body: 'Sağlam olan tek cümle (C). Üç bozukluğun üçü de farklı türden; bu yüzden üç testi de uygulamak gerekti.' },
      ],
      answer: '(C) “Mektubu yazdı ve postaya verdi.”',
      takeaway:
        'Bir soruda üç farklı bozukluk türü bir arada bulunabilir. Üç testi de sırayla uygula.',
    },
  ],

  questionClue: {
    concept: 'anlatım bozukluğu sorusu',
    statement:
      'Soru kökünde “anlatım bozukluğu”, “dil bilgisi yönünden bozukluk”, “hangisinde anlatım bozukluğu yoktur” ifadelerinden biri varsa, çözüm yolu ögeleri test etmektir.',
    clues: [
      'Seçeneklerin “ve” ile bağlanmış iki yüklemli cümleler olması',
      'Aynı cümlede tekil ve çoğul yüklemlerin bir arada bulunması',
      'Bir yüklemde failin gizlenmiş olması',
      'Ortak tamlanana bağlanan birden çok tamlayan',
      'Soru kökünde “dil bilgisi yönünden” sınırlaması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, sezgiyle değil testle çözülmek üzere kurulmuş. Çözüm yolu yüklemleri bulmak, ortak ögeyi her yükleme ayrı ayrı bağlamak ve uyum ile çatıyı sınamaktır.',
    boundary:
      'Bu ipuçlarını “iki yüklem varsa bozukturur” gibi bir kısayola çevirme. İki yüklemli cümlelerin çoğu sağlamdır; bozukluk paylaşımın tutmadığı durumlarda doğar.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Dört cümleden hangisinde anlatım bozukluğu bulunduğunun sorulması',
      'Hangi cümlede anlatım bozukluğu bulunmadığının sorulması',
      'Bir cümledeki bozukluğun nasıl giderileceğinin sorulması',
      'Bir parçada numaralanmış cümlelerden hangisinin bozuk olduğunun sorulması',
      'Özne–yüklem uyuşmazlığının ayırt ettirilmesi',
      'Çatı uyuşmazlığı içeren cümlenin bulunması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Toplantıya katıldı ve söz aldı.” cümlesinde anlatım bozukluğu var mı? Testi uygula.',
      hint: 'Her yüklemin hangi ögeyi istediğini sor.',
      answer:
        'Yoktur. “Katılmak” dolaylı tümleç ister: neye katıldı? → toplantıya. “Söz almak” ise nesnesini kendi içinde taşıyor (“söz”) ve ortak tümleci de kullanabiliyor. Ortak ögelerin paylaşımı tutuyor, uyum ve çatı bakımından da sorun yok.',
    },
    {
      prompt:
        '“Öğrenciler sınıfa girdi ve sıralara oturdular.” cümlesinde hangi tür bozukluk var ve nasıl düzeltilir?',
      hint: 'Sayı uyumuna bak.',
      answer:
        'Özne–yüklem uyuşmazlığı var. Aynı özneye (öğrenciler) bağlı iki yüklemden biri tekil (“girdi”), öteki çoğul (“oturdular”). İki yüklem de aynı özneyi paylaştığı için aynı sayıda olmalıdır. Düzeltme: “girdi ve sıralara oturdu” ya da “girdiler ve sıralara oturdular”.',
    },
    {
      prompt:
        '“Gereksiz sözcük kullanımı” hangi sınıfın kazanımıdır ve 8. sınıf kazanımıyla ilişkisi nedir?',
      hint: 'Program açıklamalarını karşılaştır.',
      answer:
        'Anlama dayalı bir bozukluktur ve 7. sınıf kazanımıdır (T.7.4.16 a). 8. sınıf kazanımı T.8.3.8 ise açıkça “dil bilgisi yönünden anlatım bozuklukları” der. Bu, gereksiz sözcük konusunun yasak olduğu anlamına gelmez; alt sınıfta kurulmuştur ve tekrar edilebilir. Ama 8. sınıfın odağı dil bilgisi yönündeki bozukluklardır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey dil duygusu değil, öge çözümlemesi',
    body:
      'Kazanımın açıklaması “dil bilgisi yönünden” diyerek ölçme yönünü belirler. MEB’in merkezî sınav kılavuzu da soruların analiz yapma becerisini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: sorular “hangi cümle kulağa yanlış geliyor?” diye sormaz; cümleyi ögelerine ayırıp yüklemlerin istediklerini karşılayıp karşılamadığını denetleyebilmeni ister. Bu yüzden seçeneklerin birkaçı bilerek alışılmadık kurulur.',
    measures: [
      'Bir cümledeki yüklem sayısını belirleyebilme',
      'Ortak ögeyi her yükleme ayrı ayrı bağlayabilme',
      'Fiilin geçişliliğinden yola çıkıp gereksiz arama yapmama',
      'Özne–yüklem uyumunu sayı ve kişi bakımından denetleyebilme',
      'Çatı uyuşmazlığını aynı özneye bağlı yüklemlerde arayabilme',
      'Bozukluğu en az değişiklikle düzeltebilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün cümleler',
    passage: `Aşağıdaki cümleleri birlikte inceleyelim:
I. Mahalleli yeni parkı benimsedi ve düzenli olarak kullanıyor.
II. Bahçe düzenlendi ve ağaçları suladı.
III. Komşular toplantıya katıldı ve önerilerini yazılı olarak sundu.
IV. Çocuklar oyun alanını çok sevdi ve her gün oraya koşuyorlar.`,
    question: 'Bu cümlelerden hangisinde **çatı uyuşmazlığından** kaynaklanan bir anlatım bozukluğu vardır?',
    options: [
      {
        text: 'I. cümle',
        explanation:
          'Bozukluk yok. İki yüklem de (“benimsedi”, “kullanıyor”) aynı özneye bağlı, ikisinde de fail belli ve ortak nesne (“yeni parkı”) her iki yükleme de uyuyor.',
      },
      {
        text: 'II. cümle',
        explanation:
          'Doğru cevap. Birinci yüklemde fail gizlenmiş (“düzenlendi” — bahçeyi biri düzenledi), ikinci yüklemde ise fail belli olmalı (“ağaçları suladı” — biri suladı). İkisi aynı özneye bağlanınca “bahçe ağaçları suladı” gibi bir sonuç çıkıyor. Düzeltme: “Bahçe düzenlendi ve ağaçlar sulandı.”',
      },
      {
        text: 'III. cümle',
        explanation:
          'Bozukluk yok. “Katılmak” dolaylı tümleç (“toplantıya”), “sunmak” nesne (“önerilerini”) istiyor ve ikisi de cümlede var. Sayı ve çatı bakımından da uyum sağlanmış.',
      },
      {
        text: 'IV. cümle',
        explanation:
          'Bu cümlede bir bozukluk var ama türü farklı: “sevdi” tekil, “koşuyorlar” çoğul. Bu bir **özne–yüklem uyuşmazlığıdır**, çatı uyuşmazlığı değil. Soru kökü türü sınırladığı için bu seçenek doğru cevap olamaz.',
      },
      {
        text: 'II. ve IV. cümleler',
        explanation:
          'İki cümlede de bozukluk var; ancak IV’teki bozukluk çatı değil sayı uyuşmazlığıdır. Soru kökü yalnız çatı uyuşmazlığını istiyor.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökü bozukluğun **türünü** sınırlıyor: çatı uyuşmazlığı. Bu yüzden yalnız bozuk cümleyi bulmak yetmez; bozukluğun türünü de adlandırmam gerekiyor. Yöntem: her cümlede yüklemleri bulup faillerin belli olup olmadığını sınamak.',
    critical_point:
      'Kritik nokta, IV. cümlede de gerçek bir bozukluk bulunması. Türünü ayırt etmeyen öğrenci onu işaretleyebilir. Soru kökündeki sınırlama okunmadan verilen karar yanlış olur.',
    takeaway:
      'Bir soruda birden çok bozuk cümle bulunabilir. Soru kökü türü sınırlıyorsa, türü de adlandırman gerekir.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisinde anlatım bozukluğu **vardır**?',
      options: [
        'Mektubu yazdı ve postaya verdi.',
        'Filmi izledi ve çok beğendi.',
        'Konuya hazırlandı ve rahatlıkla anlattı.',
        'Ödevi bitirdi ve öğretmenine teslim etti.',
      ],
      answer_index: 2,
      explanation:
        'Üçüncü cümlede “hazırlanmak” dolaylı tümleç ister (“konuya”), “anlatmak” ise nesne ister (“neyi anlattı?”). Ortak öge “konuya” ikinci yükleme bağlanamaz: “konuya anlattı” denmez. Nesne eksikliği vardır; düzeltme: “Konuya hazırlandı ve konuyu rahatlıkla anlattı.” Diğer üç cümlede ortak nesne her iki yükleme de uyuyor.',
    },
    {
      purpose: 'concept',
      question:
        'T.8.3.8 kazanımı 8. sınıfta hangi tür anlatım bozukluklarını kapsar?',
      options: [
        'Anlama dayalı bozuklukları',
        'Dil bilgisi yönünden bozuklukları',
        'Yalnız yazım ve noktalama hatalarını',
        'Bütün bozukluk türlerini eşit ağırlıkta',
      ],
      answer_index: 1,
      explanation:
        'Kazanımın açıklaması tek cümledir: “Dil bilgisi yönünden anlatım bozuklukları üzerinde durulur.” Anlama dayalı bozukluklar 7. sınıf kazanımıdır (T.7.4.16 a). Yazım ve noktalama ise ayrı bir alandır ve T.8.4.16’nın b maddesinde ele alınır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Kapı açıldı, çocuk içeri girdi.” cümlesi için “çatı uyuşmazlığı var” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'İki yüklemin farklı öznelere bağlı olduğunu gözden kaçırmak',
        'Nesne eksikliğini fark edememek',
        'Sayı uyumunu denetlememek',
        'Tamlama yanlışını görememek',
      ],
      answer_index: 0,
      explanation:
        'Çatı uyuşmazlığı yalnız **aynı özneye bağlı** yüklemler arasında doğar. Bu cümlede iki ayrı özne var: “kapı” ve “çocuk”. Farklı öznelere bağlı yüklemler farklı çatılarda olabilir ve bu bozukluk yaratmaz. Öğrenci önce özneleri ayırmadan çatı testine geçmiştir.',
    },
  ],

  summary: [
    'Program 8. sınıfta “dil bilgisi yönünden” anlatım bozukluklarını ister; anlama dayalı bozukluklar 7. sınıf kazanımıdır.',
    'Bozukluk sezgiyle değil testle bulunur; “kulağa garip geliyor” bir gerekçe değildir.',
    'İki yüklemli cümlelerde ortak ögeyi her yükleme ayrı ayrı bağla.',
    'Bir yükleme bağlanamayan ortak öge, o yüklem için bir öge eksikliği demektir.',
    'Fiilin geçişliliğini kontrol etmek gereksiz nesne aramasını önler.',
    'Aynı özneye bağlı iki yüklem sayı ve kişi bakımından uyuşmalıdır.',
    'Çatı uyuşmazlığı yalnız aynı özneye bağlı yüklemler arasında doğar.',
    'Farklı öznelere bağlı yüklemler farklı çatılarda olabilir; bu bozukluk değildir.',
    'Ortak tamlanan her tamlayana uymalıdır; uymuyorsa tamlama yanlışı vardır.',
    'Bozukluğu bulduktan sonra en az değişiklikle düzelt; düzeltme, teşhisini de kanıtlar.',
  ],

  next: [
    'Cümle Türleri (T.8.4.19)',
    'Görsel, Tablo ve Grafik Okuma (T.8.3.27, T.8.3.32)',
    'Cümlenin Ögeleri (T.8.4.18)',
  ],
})

export default lesson
