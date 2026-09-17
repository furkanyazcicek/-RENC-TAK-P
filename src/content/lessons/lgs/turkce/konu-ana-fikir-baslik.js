import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Paragrafta Anlam · 1. ders
 * Kazanım : T.8.3.16 · T.8.3.17 · T.8.3.18 · T.8.3.19 · T.8.3.13
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * Beş kazanım tek bir derste toplandı, çünkü beşi de aynı zihinsel işin
 * basamakları: paragrafın neyden söz ettiğini, ne söylediğini, bunu neyle
 * desteklediğini ve nasıl adlandırılacağını bulmak.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-konu-ana-fikir-baslik',
  topic: 'Paragrafta Anlam',
  order: 1,
  title: 'Konu, Ana Fikir, Yardımcı Fikir ve Başlık',
  subtitle:
    'Konu bir söz öbeğidir, ana fikir bir yargıdır. Bu tek ayrım, paragraf sorularının büyük bölümünü çözer.',
  minutes: 45,
  kazanimlar: [
    { kod: 'T.8.3.16', metin: 'Metnin konusunu belirler.' },
    { kod: 'T.8.3.17', metin: 'Metnin ana fikrini/ana duygusunu belirler.' },
    { kod: 'T.8.3.18', metin: 'Metindeki yardımcı fikirleri belirler.' },
    { kod: 'T.8.3.19', metin: 'Metnin içeriğine uygun başlık/başlıklar belirler.' },
    { kod: 'T.8.3.13', metin: 'Okuduklarını özetler.' },
  ],
  prerequisites: [
    { topic: 'Cümlede yargı kavramı', why: 'Konu ile ana fikri ayıran ölçüt, ifadenin yargı bildirip bildirmediğidir.' },
    { topic: 'Öznel–nesnel yargı', why: 'Ana fikir çoğu zaman yazarın savunduğu bir yargıdır; onu tanımak gerekir.' },
  ],
  outcomes: [
    'Bir paragrafın konusunu bir söz öbeğiyle ifade edebileceksin.',
    'Ana fikri, paragrafın tamamını kapsayan tek bir yargı cümlesiyle yazabileceksin.',
    'Yardımcı fikirleri ana fikirden ayırt edebileceksin.',
    'Başlık seçerken kapsam denetimi yapabileceksin: ne çok dar ne çok geniş.',
    'Ana fikri açıkça yazılmamış bir paragrafta örtük ana fikri çıkarabileceksin.',
  ],

  opening: {
    title: 'Neyden söz ediyor, ne söylüyor?',
    lead: 'Paragraf sorularında öğrencilerin çoğu doğru paragrafı okur, yanlış soruyu cevaplar.',
    body: `Bir paragrafa sorulabilecek iki temel soru vardır ve ikisi birbirine hiç benzemez.

**“Neyden söz ediliyor?”** sorusunun cevabı **konudur** ve bir **söz öbeğiyle** ifade edilir: “okuma alışkanlığı”, “şehirlerdeki yeşil alanlar”, “teknolojinin çocuklar üzerindeki etkisi”. Konu bir yargı bildirmez; yalnız paragrafın üzerinde durduğu alanı gösterir.

**“Bu konuda ne söyleniyor?”** sorusunun cevabı **ana fikirdir** ve bir **yargı cümlesiyle** ifade edilir: “Okuma alışkanlığı erken yaşta ve zorlamadan kazandırılmalıdır.” Ana fikir, yazarın o paragrafta ulaştırmak istediği hükümdür.

Bu ayrımı bir ölçütle sabitle: **konu söz öbeğidir, ana fikir cümledir.** Eğer bulduğun cevap bir yükleme sahip değilse, bulduğun şey konudur. Yükleme sahipse ve bir hüküm bildiriyorsa ana fikirdir.

MEB 8. sınıf programı bu iki kazanımı ayrı ayrı yazar: **T.8.3.16** metnin konusunu belirlemeyi, **T.8.3.17** ana fikri/ana duyguyu belirlemeyi ister. Yanlarına **T.8.3.18** (yardımcı fikirler) ve **T.8.3.19** (uygun başlık) eklenir. Dördü birlikte, paragrafın iskeletini çıkarmak demektir.

Bu derste ayrıca özetlemeyi de (**T.8.3.13**) çalışacağız; çünkü iyi bir özet, ana fikri merkeze alıp yardımcı fikirleri sıraya koymaktan başka bir şey değildir. Önce ayrımı kuracağız, sonra ana fikrin paragraftaki yerini bulmayı, ardından başlık seçerken kapsam denetimini öğreneceğiz.`,
  },

  concepts: [
    {
      term: 'Konu',
      body: 'Paragrafta üzerinde durulan varlık, kavram, olay ya da durumdur. **Söz öbeğiyle** ifade edilir, yargı bildirmez: “kent içindeki yeşil alanlar”, “el yazısının önemi”. “Neyden söz ediliyor?” sorusunun cevabıdır.',
    },
    {
      term: 'Ana fikir',
      body: 'Yazarın paragrafta okura ulaştırmak istediği temel yargıdır. **Cümleyle** ifade edilir ve paragrafın tamamını kapsar: “Kent içindeki yeşil alanlar, yalnızca güzellik için değil sağlık için de zorunludur.”',
    },
    {
      term: 'Ana duygu',
      body: 'Şiirde ve duygu ağırlıklı metinlerde ana fikrin karşılığıdır: metnin okurda uyandırdığı baskın duygu. “Özlem”, “yalnızlık”, “umut” gibi tek sözcükle de ifade edilebilir; çünkü burada aranan bir hüküm değil, bir duygudur.',
    },
    {
      term: 'Yardımcı fikir',
      body: 'Ana fikri açıklayan, örnekleyen ya da destekleyen alt yargılardır. Paragrafın tamamını değil, bir bölümünü karşılar. Bir paragrafta birden çok yardımcı fikir bulunur; ana fikir ise tektir.',
    },
    {
      term: 'Başlık',
      body: 'Metnin içeriğini karşılayan kısa addır. Ana fikre ya da konuya dayanabilir; ölçütü **kapsamdır**: paragrafın tamamını içine almalı, dışına taşmamalıdır.',
    },
    {
      term: 'Kapsam denetimi',
      body: 'Bir başlığın ya da ana fikir ifadesinin paragrafla ölçülmesidir. Üç sonuç çıkar: **dar** (paragrafın bir bölümünü karşılar), **geniş** (paragrafta olmayan şeyleri de içine alır), **uygun** (tam örtüşür).',
    },
  ],

  why: {
    question: 'Neden konu ile ana fikir bu kadar sık karışıyor?',
    body: `Çünkü ikisi de paragrafın “ne hakkında olduğunu” söyler gibi görünür. Ama biri alanı, öteki hükmü gösterir.

Bir benzetme yardımcı olabilir. Konu, bir haritada işaretlenen **bölge**dir. Ana fikir, o bölge hakkında söylenen **cümledir**. Aynı bölge hakkında bambaşka cümleler kurulabilir: “Bu bölgede ulaşım yetersizdir.” ya da “Bu bölge son on yılda hızla gelişmiştir.” İkisinin konusu aynı, ana fikri farklıdır.

Karışıklığın ikinci sebebi, öğrencilerin çoğunun konuyu **en çok tekrar eden sözcükten** çıkarmaya çalışmasıdır. Bu bazen tutar, çoğu zaman tutmaz. Bir paragrafta “telefon” sözcüğü altı kez geçebilir ama paragraf telefondan değil, **dikkat dağınıklığından** söz ediyor olabilir; telefon yalnızca örnektir. Sözcük sayarak konu bulmak, anahtar kelime avcılığının başka bir biçimidir ve aynı sebeple çöker.

Üçüncü sebep, ana fikrin her zaman paragrafta **yazılı olmamasıdır**. Bazı paragraflarda yazar hükmü açıkça söyler; bazılarında yalnız örnekleri sıralar ve hükmü okura bıraktır. İkinci durumda ana fikri sen kuracaksın. Yazılı olmayan bir şeyi aramak, yazılı olan cümlelerden birini yanlışlıkla ana fikir sanmaya yol açar.

Bu üç sebep de tek bir çözümle aşılır: önce paragrafı bitir, sonra **kendi cümleni yaz**, ancak ondan sonra seçeneklere bak. Kendi cümleni yazmadan seçeneklere bakarsan, seçenekler senin düşünceni kurar.`,
  },

  decision: {
    title: 'Paragrafın iskeletini çıkarma yolu',
    lead: 'Sıra bozulmaz: önce bütün, sonra alan, sonra hüküm, sonra destek, en sonunda ad.',
    intro:
      'Paragraf sorularında şu beş durağı uygula. Üçüncü durakta kendi cümleni yazmadan seçeneklere bakma.',
    steps: [
      {
        title: '1. Paragrafı bir kez bütün oku',
        body: 'Cümle cümle durup yorumlama. Paragraf bir bütün olarak anlam kurar ve ana fikir çoğu zaman son cümlede netleşir. İlk okumada hiçbir karar verme.',
      },
      {
        title: '2. Konuyu söz öbeğiyle yaz',
        body: '“Bu paragraf neyden söz ediyor?” Cevabını yüklemsiz bir öbek olarak yaz: “okuma alışkanlığı kazandırma”. Cümle kurduysan ana fikre kaymışsındır; geri dön.',
      },
      {
        title: '3. Ana fikri yargı cümlesiyle yaz',
        body: '“Yazar bu konuda ne söylüyor?” Cevabını tek bir cümleyle ve kendi sözcüklerinle yaz. Bu cümle paragrafın tamamını kapsamalı; yalnız bir bölümünü karşılıyorsa yardımcı fikir bulmuşsundur.',
      },
      {
        title: '4. Yardımcı fikirleri işaretle',
        body: 'Ana fikri açıklayan, örnekleyen ya da kanıtlayan cümleleri ayrı ayrı belirle. Bunlar sorularda “paragraftan çıkarılabilecek yargı” olarak karşına çıkar.',
      },
      {
        title: '5. Kapsam denetimi yap',
        body: 'Bulduğun ana fikri ve başlık adayını paragrafla karşılaştır. Paragrafın bir bölümünü karşılıyorsa **dar**, paragrafta olmayan şeyleri de içine alıyorsa **geniş**tir. İkisi de yanlıştır.',
      },
    ],
    takeaway: 'Konu bir öbek, ana fikir bir cümledir. Bu ölçüt hiçbir paragrafta değişmez.',
  },

  decisionTree: {
    title: 'Elimdeki ifade konu mu, ana fikir mi, yardımcı fikir mi?',
    intro:
      'Bir seçeneği değerlendirirken sırayla şu üç kontrolü uygula. Birincisi biçimi, ikincisi kapsamı sınar.',
    checks: [
      {
        question: 'İfade bir yargı bildiriyor mu (yüklemi var mı)?',
        yes: 'Yargıdır; ikinci kontrole geç.',
        no: 'Konudur. Örnek: “kent içindeki yeşil alanlar”.',
      },
      {
        question: 'Bu yargı paragrafın tamamını kapsıyor mu?',
        yes: 'Ana fikirdir. Paragrafı okumayan biri bu cümleyi okusa metnin ne dediğini anlar.',
        no: 'Üçüncü kontrole geç.',
      },
      {
        question: 'Yargı paragraftaki bir bölümü doğru biçimde karşılıyor mu?',
        yes: 'Yardımcı fikirdir. Doğrudur ama ana fikir değildir; bu yüzden “ana fikir” sorusunda yanlış seçenektir.',
        no: 'Paragrafta karşılığı yoktur; bu bir çeldiricidir ve elenir.',
      },
    ],
    takeaway:
      'Bir seçeneğin doğru olması onu ana fikir yapmaz. Yardımcı fikirler de doğrudur; ayrımı kapsam yapar.',
  },

  comparison: {
    title: 'Üç kavramı kapsam ve biçimle ayır',
    columns: ['Konu', 'Ana fikir', 'Yardımcı fikir'],
    rows: [
      { label: 'Biçimi', values: ['Söz öbeği (yüklemsiz)', 'Yargı cümlesi', 'Yargı cümlesi'] },
      { label: 'Sorusu', values: ['Neyden söz ediliyor?', 'Bu konuda ne söyleniyor?', 'Bu yargı neyle destekleniyor?'] },
      { label: 'Kapsamı', values: ['Paragrafın alanı', 'Paragrafın tamamı', 'Paragrafın bir bölümü'] },
      { label: 'Sayısı', values: ['Bir', 'Bir', 'Birden çok'] },
      { label: 'Örnek', values: ['el yazısıyla not tutma', 'El yazısıyla not tutmak öğrenmeyi kalıcı kılar.', 'El yazısı, yazarken seçim yapmayı zorunlu kılar.'] },
      { label: 'Sık yapılan hata', values: ['En çok geçen sözcüğü konu sanmak', 'İlk cümleyi ana fikir sanmak', 'Doğru olduğu için ana fikir sanmak'] },
    ],
    insight:
      'Ana fikir tektir ve paragrafın tamamını kapsar; yardımcı fikirler doğrudur ama parçayı karşılar. Sorularda en güçlü çeldirici, doğru bir yardımcı fikirdir.',
  },

  traps: [
    {
      title: 'İlk cümleyi otomatik olarak ana fikir saymak',
      wrong: 'Paragrafın ilk cümlesi genellikle konuyu verir; öyleyse ana fikir de odur.',
      right: 'Ana fikir paragrafın başında, ortasında, sonunda olabileceği gibi hiç yazılmamış da olabilir. Yerini paragrafı okumadan bilemem.',
      body: 'İlk cümle çoğu zaman giriş yapar ve konuyu tanıtır. Hükmü verdiği paragraflar vardır ama bu bir kural değildir; kapsam denetimi yapmadan karar verme.',
    },
    {
      title: 'En çok tekrar eden sözcüğü konu sanmak',
      wrong: 'Paragrafta “telefon” altı kez geçiyor; konu telefondur.',
      right: 'Telefon burada bir örnek olabilir. Paragrafın asıl üzerinde durduğu şey dikkat dağınıklığıysa konu odur.',
      body: 'Sözcük sıklığı bir ipucudur, kanıt değildir. Konuyu, paragrafın bütününün ne üzerine kurulduğuna bakarak belirle.',
    },
    {
      title: 'Doğru ama dar bir başlık seçmek',
      wrong: 'Seçenek paragrafta gerçekten geçen bir şeyi söylüyor; öyleyse uygun başlıktır.',
      right: 'Başlık paragrafın tamamını karşılamalı. Yalnız bir cümleye karşılık gelen başlık **dardır** ve yanlıştır.',
      body: 'Başlık sorularının çeldiricileri neredeyse her zaman paragrafta gerçekten bulunan bir ayrıntıdan üretilir. Bu yüzden “metinde var mı?” sorusu yetmez; “tamamını kapsıyor mu?” diye sor.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-konu-anafikir-ayrim',
      title: 'Biçim ölçütü: öbek mi, cümle mi?',
      lead: 'Konu ile ana fikri ayırmanın en hızlı yolu anlamı değil, ifadenin biçimini kontrol etmektir.',
      blocks: [
        {
          id: 'lgs-konu-ayrim-anlatim',
          type: 'prose',
          body: `Bir seçenekte “şehirlerde bisiklet kullanımı” yazıyorsa, bu bir **söz öbeğidir**: yüklemi yoktur, bir hüküm bildirmez, yalnız bir alana işaret eder. Bu bir konu ifadesidir.

Aynı seçenek “Şehirlerde bisiklet kullanımı, trafiği azaltmanın en kolay yoludur.” biçiminde yazılsaydı, bu bir **yargı cümlesi** olurdu: bir hüküm var, bir sav var, katılınabilir ya da katılınmayabilir. Bu bir ana fikir adayıdır.

Bu biçim ölçütü, soruların yarısını daha okumadan çözer. “Bu parçanın konusu aşağıdakilerden hangisidir?” sorusunda seçeneklerden biri cümle biçimindeyse, o seçenek büyük ihtimalle yanlıştır — çünkü konu öbekle ifade edilir. Tersi de doğrudur: “ana fikir” sorusunda öbek biçimindeki seçenekler elenir.

Ama dikkat: ölçüt biçimdir, **uzunluk değil**. “Kent içindeki yeşil alanların insan sağlığı üzerindeki etkisi” uzun bir öbektir, yine de konudur. “Yeşil alan şarttır.” kısa bir cümledir, yine de ana fikir adayıdır.

Bir de **ana duygu** durumu var. Şiir ve duygu ağırlıklı metinlerde soru “ana duygu” der ve cevap tek bir sözcük olabilir: özlem, umut, yalnızlık. Burada ölçüt değişir, çünkü aranan bir hüküm değil bir duygudur. Soru kökündeki sözcüğe dikkat et: “ana fikir” mi diyor, “ana duygu” mu?

Son olarak, kendi cümleni yazarken ana fikri **yazarın ağzından** yaz. “Yazar, el yazısıyla not tutmanın öğrenmeyi kalıcı kıldığını savunuyor.” Bu biçim, ana fikri yanlışlıkla kendi görüşüne çevirmeni engeller.`,
        },
        {
          id: 'lgs-konu-ayrim-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı paragraf, üç farklı ifade',
          columns: ['İfade', 'Biçimi', 'Kapsamı', 'Adı'],
          rows: [
            ['el yazısıyla not tutma', 'Söz öbeği', 'Paragrafın alanı', 'Konu'],
            ['El yazısıyla not tutmak öğrenmeyi kalıcı kılar.', 'Yargı cümlesi', 'Paragrafın tamamı', 'Ana fikir'],
            ['El yazısı, yazarken seçim yapmayı zorunlu kılar.', 'Yargı cümlesi', 'Bir bölüm', 'Yardımcı fikir'],
            ['Klavyeyle yazmak daha hızlıdır.', 'Yargı cümlesi', 'Bir ayrıntı', 'Yardımcı fikir'],
            ['Öğrenmede kalıcılık', 'Söz öbeği', 'Paragrafın alanı', 'Konu (başka bir ifadesi)'],
            ['Teknoloji eğitimi olumsuz etkiler.', 'Yargı cümlesi', 'Paragrafın dışı', 'Çeldirici — kapsam aşımı'],
          ],
          caption:
            'Son satır kapsam aşımının nasıl göründüğünü gösterir: cümle kulağa mantıklı gelir ama paragrafın söylemediği bir hükümdür.',
        },
        {
          id: 'lgs-konu-ayrim-analiz',
          type: 'sentence_analysis',
          title: 'Bir paragrafın iskeletini görmek',
          prompt:
            'Aşağıda kısa bir paragraf parçalara ayrıldı. Her parçaya tıklayarak o cümlenin paragraftaki görevini gör.',
          segments: [
            {
              text: 'Son yıllarda öğrencilerin çoğu notlarını telefona yazıyor.',
              label: 'Giriş — konuyu açar',
              explanation:
                'Bu cümle bir durum saptıyor ve konuyu tanıtıyor: not tutma biçimi. Hüküm bildirmiyor, bu yüzden ana fikir değil.',
              tone: 'muted',
            },
            {
              text: 'Oysa el yazısıyla yazarken beyin, duyduğunu olduğu gibi aktaramaz; seçmek zorunda kalır.',
              label: 'Yardımcı fikir — mekanizmayı açıklar',
              explanation:
                'Doğru bir yargı, ama paragrafın tamamını karşılamıyor; ana fikrin gerekçelerinden birini veriyor.',
              tone: 'aqua',
            },
            {
              text: 'Bu seçme işi, bilgiyi yazmadan önce bir kez işlemeyi gerektirir.',
              label: 'Yardımcı fikir — gerekçeyi derinleştirir',
              explanation:
                'Bir önceki cümlenin devamı. Yine bir bölümü karşılıyor. İki yardımcı fikir üst üste gelince ana fikir yaklaşır.',
              tone: 'aqua',
            },
            {
              text: 'Bu yüzden el yazısıyla tutulan not, yalnız bir kayıt değil, bir öğrenme aracıdır.',
              label: 'Ana fikir — paragrafın tamamını kapsar',
              explanation:
                'Yazarın vardığı hüküm. Paragrafı okumayan biri yalnız bu cümleyi okusa metnin ne dediğini anlar. Kapsam denetimi geçer.',
              tone: 'brand',
            },
          ],
          takeaway:
            'Ana fikir burada son cümlede. Ama her paragrafta böyle olmaz; yeri değil, kapsamı belirleyicidir.',
        },
        {
          id: 'lgs-konu-ayrim-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Soru “ana fikir” yerine “bu parçadan çıkarılabilecek yargı” diyorsa, doğru cevap yardımcı fikirlerden biri de olabilir. Soru kökündeki ifadeyi kaçırırsan, doğru bir yardımcı fikri “ana fikir değil” diye elersin.',
        },
      ],
    },

    {
      id: 'lgs-turkce-anafikir-yeri',
      title: 'Ana fikir paragrafın neresinde?',
      lead: 'Ana fikir baştan, sondan, ortadan ya da hiçbir yerden gelebilir. Dördüncü durumda onu sen kurarsın.',
      blocks: [
        {
          id: 'lgs-anafikir-yeri-anlatim',
          type: 'prose',
          body: `Paragraflar ana fikri dört farklı biçimde taşır.

**Başta verilen ana fikir.** Yazar hükmü ilk cümlede söyler, sonra onu açıklar ve örnekler. Bu yapı bilgilendirici metinlerde ve makalelerde sıktır. Tanıma yolu: ilk cümleden sonraki cümlelerin hepsi o hükmü destekliyorsa ana fikir baştadır.

**Sonda verilen ana fikir.** Yazar önce örnekleri, gözlemleri ve gerekçeleri sıralar, hükmü sona saklar. Genellikle “bu yüzden”, “demek ki”, “kısacası” gibi ifadelerle gelir. En sık görülen yapı budur.

**Ortada verilen ana fikir.** Yazar bir giriş yapar, hükmü ortada söyler, kalan cümlelerle destekler. Daha az görülür ama sorularda bilerek kullanılır; çünkü “baştadır ya da sondadır” ezberini kıran yapı budur.

**Örtük ana fikir.** Yazar hükmü hiç yazmaz; yalnız örnekleri ya da olayı anlatır, sonucu okura bırakır. Öyküleyici metinlerde ve denemelerde sıktır. Burada ana fikri **sen kuracaksın** ve bu, soruların en zor biçimidir.

Örtük ana fikri kurmanın yolu şudur: paragraftaki bütün cümlelerin ortaklaştığı noktayı bul ve onu tek bir yargı cümlesine çevir. Kendine sor: “Yazar bunca şeyi anlattı; benden ne anlamamı istiyor?” Cevabını yazarken paragrafta olmayan bir bilgi eklememeye dikkat et — kapsam aşımı tam burada olur.

Bir uyarı daha: ana fikir cümlesi paragrafta yazılıysa bile, soru seçeneklerinde o cümlenin **birebir kopyası** bulunmayabilir. Seçenek aynı hükmü farklı sözcüklerle söyleyebilir. Bu yüzden eşleştirmeyi sözcük benzerliğine değil anlam örtüşmesine dayandır.`,
        },
        {
          id: 'lgs-anafikir-yeri-tablo',
          type: 'table',
          interactive: true,
          title: 'Dört yapı, dört tanıma işareti',
          columns: ['Yapı', 'Tanıma işareti', 'Ana fikri nasıl bulurum?', 'Sık yapılan hata'],
          rows: [
            ['Başta', 'İlk cümleden sonrası hep destek', 'İlk cümleyi kapsam denetiminden geçir', 'Her paragrafta ilk cümleyi seçmek'],
            ['Sonda', '“bu yüzden, demek ki, kısacası”', 'Son cümleyi kapsam denetiminden geçir', 'Son cümleyi okumadan karar vermek'],
            ['Ortada', 'Giriş + hüküm + destek', 'Hangi cümlenin tamamı kapsadığını dene', '“Baş ya da son” ezberi'],
            ['Örtük', 'Hiçbir cümle hüküm bildirmiyor', 'Ortak noktayı kendin cümleye çevir', 'Yazılı cümlelerden birini seçmek'],
            ['Karma', 'Baştaki hüküm sonda yinelenir', 'İkisi de aynı hükmü söylüyorsa sorun yok', 'İki farklı ana fikir olduğunu sanmak'],
          ],
          caption:
            'Bu tabloyu bir arama planı gibi kullan: yapıyı tanıdığında nereye bakacağını bilirsin. Ama kararı yine kapsam denetimi verir.',
        },
        {
          id: 'lgs-anafikir-yeri-tuzak',
          type: 'trap',
          title: 'Örtük ana fikirde paragrafta olmayanı eklemek',
          wrong: 'Paragraf bir öğrencinin sınav kaygısını anlatıyor; ana fikir “sınav sistemi değişmelidir” olmalı.',
          right: 'Paragrafta sistem eleştirisi yoksa bu hüküm paragrafın dışındadır. Örtük ana fikir, paragrafın söylediklerinin toplamıdır; dışına çıkamaz.',
          body: 'Örtük ana fikir sorularının en pahalı hatası kapsam aşımıdır. Kurduğun cümlenin her parçasını paragraftan bir yere bağlayabilmelisin.',
        },
      ],
    },

    {
      id: 'lgs-turkce-baslik-kapsam',
      title: 'Başlık seçme: kapsam denetiminin en saf hâli',
      lead: 'Başlık soruları bilgi değil ölçü sorar. Doğru başlık, paragrafla tam örtüşen başlıktır.',
      blocks: [
        {
          id: 'lgs-baslik-anlatim',
          type: 'prose',
          body: `Başlık soruları basit görünür ve çoğu öğrenci bu yüzden hızlı karar verir. Oysa çeldiriciler özellikle **doğru ama ölçüsüz** başlıklardan üretilir.

**Dar başlık**, paragrafın yalnız bir bölümünü karşılar. Paragraf kent içindeki yeşil alanların üç yararını anlatıyorsa ve başlık “Parklarda Yürüyüşün Faydaları” ise, başlık dardır: paragrafta yürüyüş dışında hava kalitesi ve gürültü de vardır.

**Geniş başlık**, paragrafta olmayan alanları da içine alır. Aynı paragraf için “Çevre Sorunları” başlığı geniştir: paragraf çevre sorunlarının tamamını değil, kent içi yeşil alanları anlatıyor.

**Uygun başlık**, paragrafın sınırlarıyla örtüşür: “Kent İçindeki Yeşil Alanlar Neden Gerekli?”

Denetimi şöyle yap: başlığı oku, sonra paragrafın her cümlesine bak ve sor — **“Bu cümle başlığın altına girer mi?”** Bir cümle bile girmiyorsa başlık dardır. Sonra tersini sor: **“Başlığın altına girebilecek ama paragrafta olmayan konular var mı?”** Varsa başlık geniştir.

Bir ayrıntı: başlık her zaman ana fikri yansıtmak zorunda değildir; konuyu da yansıtabilir. Soru “en uygun başlık” diyorsa ölçüt kapsamdır, biçim değil. Bu yüzden hem soru biçimindeki hem öbek biçimindeki başlıklar doğru olabilir.

Son olarak özetleme (**T.8.3.13**) ile başlık arasındaki bağı kur: iyi bir özet, ana fikri bir cümlede verip yardımcı fikirleri sırayla ekler ve paragrafın dışına çıkmaz. Başlık ise o özetin en kısa hâlidir. İkisinde de tek ölçüt aynıdır: kapsam.`,
        },
        {
          id: 'lgs-baslik-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Dar, geniş ve uygun başlık',
          columns: ['Dar başlık', 'Geniş başlık', 'Uygun başlık'],
          rows: [
            { label: 'Sorun', values: ['Paragrafın bir bölümünü karşılar', 'Paragrafta olmayanı da içine alır', 'Paragrafla örtüşür'] },
            { label: 'Örnek', values: ['Parklarda Yürüyüş', 'Çevre Sorunları', 'Kent İçindeki Yeşil Alanlar Neden Gerekli?'] },
            { label: 'Nasıl yakalanır?', values: ['Paragrafta başlığın dışında kalan cümle var mı?', 'Başlığın altına girip paragrafta olmayan konu var mı?', 'İki soru da “hayır” cevabı veriyor'] },
            { label: 'Neden çeldirici?', values: ['Paragrafta gerçekten geçiyor', 'Kulağa kapsayıcı ve iddialı geliyor', '—'] },
          ],
          insight:
            'Dar başlık “metinde var mı?” testini geçer, “tamamını kapsıyor mu?” testini geçemez. Bu yüzden iki testi de uygula.',
        },
        {
          id: 'lgs-baslik-tuzak',
          type: 'trap',
          title: 'Başlığı ilgi çekiciliğine göre seçmek',
          wrong: 'Seçeneklerden biri daha çarpıcı ve merak uyandırıcı; başlık odur.',
          right: 'Başlığın ölçütü çarpıcılık değil kapsamdır. Çarpıcı ama dar bir başlık yanlıştır.',
          body: 'Gazete başlıkları çarpıcı olmak için yazılır; sınav sorusunda ise ölçü aranır. İki bağlamı karıştırma.',
        },
        {
          id: 'lgs-baslik-hafiza',
          type: 'memory',
          title: 'İki soruluk kapsam denetimi',
          body: '**Dışarıda kalan cümle var mı?** → dar. **İçeri giren fazlalık var mı?** → geniş. İkisi de yoksa uygundur.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Konu mu, ana fikir mi?',
      prompt:
        'Paragraf: “Şehirde yürürken çoğumuz kulaklık takarız. Böylece gürültüden kaçtığımızı sanırız; oysa kulaklık gürültüyü kaldırmaz, üstüne bir katman daha ekler. Sessizliğe alışmamış bir kulak, sessizliği de rahatsız edici bulmaya başlar. Şehirde asıl ihtiyacımız olan şey, sesi bastırmak değil sessizliği yeniden öğrenmektir.” Konuyu ve ana fikri ayrı ayrı yaz.',
      steps: [
        { title: '1. Paragrafı bütün oku', body: 'Karar vermeden bitir. Son cümlede bir hüküm var; not al ama henüz seçme.' },
        { title: '2. Konuyu öbekle yaz', body: '“Neyden söz ediliyor?” → “şehirde gürültü ve sessizlik ilişkisi”. Yüklem yok, hüküm yok: konu ifadesi.' },
        { title: '3. Ana fikri cümleyle yaz', body: '“Yazar ne söylüyor?” → “Şehirde asıl gereken, sesi bastırmak değil sessizliğe yeniden alışmaktır.” Yüklem var, hüküm var.' },
        { title: '4. Kapsam denetimi yap', body: 'Paragrafın dört cümlesi de bu hükme hizmet ediyor mu? Kulaklık örneği evet, katman açıklaması evet, alışkanlık cümlesi evet, son cümle hükmün kendisi. Denetim geçti.' },
        { title: '5. Çeldiriciyi öngör', body: '“Kulaklık gürültüyü kaldırmaz.” cümlesi doğrudur ama paragrafın bir bölümünü karşılar: yardımcı fikirdir. Ana fikir sorusunda en güçlü çeldirici bu olurdu.' },
      ],
      answer:
        'Konu: şehirde gürültü ve sessizlik ilişkisi. Ana fikir: Şehirde asıl gereken, sesi bastırmak değil sessizliğe yeniden alışmaktır.',
      takeaway: 'Konu öbek, ana fikir cümle. Bu iki cevabı ayrı ayrı yazmadan seçeneklere bakma.',
    },
    {
      title: 'Seviye 2 — Örtük ana fikri kur',
      prompt:
        'Paragraf: “Dedem her sabah gazetesini alır, mutfak masasına oturur ve ilk sayfadan başlayarak okurdu. Hiçbir haberi atlamazdı. Ben telefonumda bir sabahta yüzlerce başlık görüyorum, hiçbirini hatırlamıyorum. Dedem akşam yemeğinde okuduğu üç haberi bana anlatabilirdi.” Bu paragrafın ana fikri nedir?',
      steps: [
        { title: 'Hüküm bildiren cümle var mı?', body: 'Dört cümlenin dördü de olay ve gözlem aktarıyor. Hiçbiri açık bir hüküm vermiyor → **örtük ana fikir**.' },
        { title: 'Cümlelerin ortak noktasını bul', body: 'Dede: az okur, tamamını okur, hatırlar, anlatabilir. Anlatıcı: çok görür, hiçbirini hatırlamaz. Ortak eksen: okunan miktar ile akılda kalan arasındaki ters ilişki.' },
        { title: 'Tek cümleye çevir', body: '“Çok sayıda başlığa göz atmak, az sayıda haberi dikkatle okumaktan daha az şey bırakır.”' },
        { title: 'Kapsam denetimi yap', body: 'Dört cümle de bu hükme bağlanıyor mu? Evet. Paragrafta olmayan bir şey ekledim mi? Hayır — gazete, telefon, hatırlama, anlatabilme hepsi metinde var.' },
        { title: 'Kapsam aşımını test et', body: '“Teknoloji insanı aptallaştırıyor.” cümlesi kulağa uyar ama paragrafın söylediğinden çok daha geniştir. Paragraf teknolojiyi değil, okuma biçimini karşılaştırıyor. Bu çeldirici elenmeli.' },
      ],
      answer:
        'Ana fikir: Çok sayıda başlığa göz atmak, az sayıda haberi dikkatle okumaktan daha az iz bırakır.',
      takeaway:
        'Örtük ana fikri kurarken kurduğun cümlenin her parçasını paragraftan bir yere bağlayabilmelisin.',
    },
    {
      title: 'Seviye 3 — Başlıkta kapsam denetimi',
      prompt:
        'Seviye 2’deki paragraf için şu başlıkları değerlendir: (A) Gazete Okumanın Tarihi (B) Dedemin Sabahları (C) Az Okumak, Çok Hatırlamak (D) Teknolojinin Zararları',
      steps: [
        { title: '(A) için dışarıda kalan var mı?', body: 'Paragrafta gazeteciliğin tarihi yok; başlık paragrafta olmayan bir alana açılıyor. Aynı zamanda paragrafın telefon kısmını kapsamıyor. Hem geniş hem dar: elenir.' },
        { title: '(B) için dışarıda kalan var mı?', body: 'Anlatıcının kendi okuma biçimi başlığın altına girmiyor. Paragrafın yarısı dışarıda kalıyor → **dar**.' },
        { title: '(C) için iki testi de uygula', body: 'Dışarıda kalan cümle var mı? Yok; dedenin azı ve anlatıcının çoğu, hatırlama ekseni hepsi giriyor. Fazlalık var mı? Yok. → **uygun**.' },
        { title: '(D) için fazlalık testi', body: '“Teknolojinin zararları” başlığı altına sağlık, güvenlik, bağımlılık gibi paragrafta hiç geçmeyen konular girer → **geniş**.' },
        { title: 'Karar ver ve gerekçelendir', body: 'Doğru başlık (C). Gerekçe: paragrafın iki tarafını da (dedenin az okuması, anlatıcının çok görüp hatırlamaması) kapsıyor ve dışına taşmıyor.' },
      ],
      answer: '(C) Az Okumak, Çok Hatırlamak',
      takeaway:
        'Başlık sorusunda üç seçenek genellikle paragrafta gerçekten geçen bir şeyden üretilir. Ayıran şey ölçüdür.',
    },
  ],

  questionClue: {
    concept: 'paragrafın iskeleti sorusu',
    statement:
      'Soru kökünde “konusu”, “ana fikri”, “ana düşüncesi”, “bu parçadan çıkarılabilecek yargı”, “en uygun başlık” ifadelerinden biri varsa, önce kendi cümleni yazmalısın.',
    clues: [
      'Soru kökünde “konu / ana fikir / ana düşünce / başlık” terimleri',
      'Seçeneklerin bir kısmının öbek, bir kısmının cümle biçiminde olması',
      'Paragrafın son cümlesinde “bu yüzden, demek ki, kısacası” ifadeleri',
      'Seçeneklerde paragrafta geçen sözcüklerin bilerek tekrarlanması',
      '“Parçadan çıkarılabilecek yargı” biçimindeki geniş soru kökleri',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, doğru ama ölçüsüz seçeneklerle seni sınıyor. Çözüm yolu önce kendi ana fikir cümleni yazmak, sonra her seçeneğe kapsam denetimi uygulamaktır.',
    boundary:
      'Bu ipuçlarını “son cümle her zaman ana fikirdir” gibi bir kısayola çevirme. Ana fikir ortada olabilir ya da hiç yazılmamış olabilir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir parçanın konusunun sorulması',
      'Bir parçanın ana fikrinin ya da ana duygusunun sorulması',
      'Parçadan çıkarılabilecek yardımcı fikrin seçtirilmesi',
      'Parçaya en uygun başlığın belirlenmesi',
      'Parçanın özetinin seçtirilmesi',
      'Ana fikri örtük bir parçada yazarın vardığı sonucun sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Okuma alışkanlığı kazandırma” ifadesi bir paragrafın konusu mu, ana fikri mi olabilir? Kararını biçim ölçütüyle gerekçelendir.',
      hint: 'İfadenin yüklemi var mı, bir hüküm bildiriyor mu?',
      answer:
        'Konusu olabilir. İfade bir söz öbeğidir: yüklemi yoktur, bir hüküm bildirmez, yalnız paragrafın üzerinde durduğu alanı gösterir. Ana fikir olabilmesi için bir yargı cümlesine dönüşmesi gerekirdi: “Okuma alışkanlığı erken yaşta ve zorlamadan kazandırılmalıdır.”',
    },
    {
      prompt:
        'Bir paragraf, bir öğretmenin öğrencilerine ders dışında da vakit ayırdığını üç ayrı olayla anlatıyor ve hiçbir yerde hüküm bildirmiyor. Bu paragrafın ana fikri nasıl bulunur?',
      hint: 'Ana fikir yazılı değilse nereden gelir?',
      answer:
        'Ana fikir örtüktür; üç olayın ortaklaştığı noktayı bulup tek bir yargı cümlesine çevirmek gerekir. Örneğin: “Öğretmenlik, ders saatiyle sınırlı olmayan bir sorumluluktur.” Kurduğun cümlenin her parçasını üç olaydan birine bağlayabilmelisin; bağlayamıyorsan kapsamı aşmışsındır.',
    },
    {
      prompt:
        'Bir başlık seçeneği paragrafta gerçekten geçen bir ayrıntıyı karşılıyor ama paragrafın diğer yarısını kapsamıyor. Bu başlık dar mı, geniş mi? Neden yanlıştır?',
      hint: 'İki kapsam sorusundan hangisi “hayır” cevabı veriyor?',
      answer:
        'Dardır. “Paragrafta başlığın dışında kalan cümle var mı?” sorusuna “evet” cevabı geliyor. Yanlış olmasının sebebi bilgi hatası değil, ölçü hatasıdır: başlık paragrafın tamamını temsil etmek zorundadır. Bu yüzden “metinde var mı?” testi tek başına yetmez.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey okumak değil, ölçmek',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Paragraf sorularında bunun somut karşılığı şudur: sen zaten paragrafı anlıyorsun; ölçülen şey, anladığın şeyle seçenekleri ölçebilme becerin. Bu yüzden çeldiricilerin neredeyse tamamı paragrafta gerçekten bulunan doğru yargılardır; yanlışlıkları bilgi değil, kapsam yanlışlığıdır.',
    measures: [
      'Konu ile ana fikri biçim ölçütüyle ayırabilme',
      'Ana fikri paragrafın tamamını kapsayacak biçimde kurabilme',
      'Yardımcı fikri ana fikirden ayırabilme',
      'Örtük ana fikri paragrafın dışına çıkmadan çıkarabilme',
      'Başlıkta dar–geniş–uygun denetimi yapabilme',
      'Doğru ama ölçüsüz seçenekleri eleyebilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Kasabanın küçük kütüphanesinde yalnız üç raf vardı. Görevli, gelen her çocuğa önce ne okumak istediğini sorar, sonra rafın önüne götürüp iki kitap gösterirdi: “Birini seç.” İki seçenek, çocuğun gözünde bütün rafı taşınabilir hâle getiriyordu. Şehirdeki büyük kütüphaneye ilk gittiğimde binlerce kitabın arasında yarım saat dolaştım ve elim boş çıktım. O gün anladım ki bir şeyi seçebilmek için önce seçeneklerin sayısının azaltılması gerekiyor.`,
    question: 'Bu parçanın ana fikri aşağıdakilerden hangisidir?',
    options: [
      {
        text: 'Küçük kütüphaneler büyük kütüphanelerden daha yararlıdır',
        explanation:
          'Parçada kütüphanelerin büyüklüğü değil, seçenek sayısının seçimi nasıl etkilediği anlatılıyor. Bu seçenek paragrafın örneklerinden birini genel bir hükme çeviriyor ve paragrafın söylemediği bir karşılaştırma yapıyor. Kapsam aşımı.',
      },
      {
        text: 'Seçim yapabilmek için seçenek sayısının azaltılması gerekir',
        explanation:
          'Doğru cevap. Parçanın son cümlesi bu hükmü açıkça veriyor ve önceki bütün cümleler ona hizmet ediyor: iki kitap gösteren görevli, taşınabilir hâle gelen raf, binlerce kitap arasında elin boş çıkması. Kapsam denetimi geçiyor.',
      },
      {
        text: 'Kütüphane görevlileri çocuklara rehberlik etmelidir',
        explanation:
          'Paragrafta gerçekten bulunan bir ayrıntıdan üretilmiş doğru bir yardımcı fikir. Ama paragrafın yalnız bir bölümünü karşılıyor: şehirdeki kütüphane bölümünü ve son cümleyi dışarıda bırakıyor. Ana fikir sorusunun en güçlü çeldiricisi.',
      },
      {
        text: 'Çocukluk anıları insanın okuma alışkanlığını belirler',
        explanation:
          'Parçada okuma alışkanlığının nasıl oluştuğuna dair bir yargı yok; anlatılan şey bir seçim deneyimi. Metnin anı biçiminde olması bu seçeneği inandırıcı gösteriyor ama hüküm paragrafta bulunmuyor.',
      },
      {
        text: 'Büyük kütüphanelerde kitap bulmak zordur',
        explanation:
          'Bu, paragraftaki bir olayın düz aktarımı; hüküm değil gözlem. Ayrıca yalnız bir cümleyi karşılıyor ve paragrafın vardığı sonucu hiç içermiyor. Dar kapsamlı çeldirici.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökü “ana fikir” diyor; yani paragrafın tamamını kapsayan tek yargı aranıyor. İlk iş konuyu öbekle, ana fikri cümleyle kendi sözcüklerinle yazmak: konu → seçenek sayısının seçim üzerindeki etkisi.',
    critical_point:
      'Kritik nokta, üç seçeneğin de paragrafta gerçekten bulunan bir şeye dokunması. Hiçbiri yalan söylemiyor. Ayrımı yapan şey kapsam: hangisi paragrafın hem kasaba hem şehir bölümünü, hem de son cümledeki hükmü birden karşılıyor?',
    takeaway:
      'Ana fikir sorusunda “doğru mu?” yetmez. “Tamamını kapsıyor mu?” diye sor.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Aşağıdakilerden hangisi bir **konu** ifadesidir?',
      options: [
        'El yazısıyla not tutmak öğrenmeyi kalıcı kılar.',
        'Şehirlerde bisiklet kullanımının yaygınlaşması',
        'Gürültü, insanın dikkatini beklenenden çok bozar.',
        'Okuma alışkanlığı erken yaşta kazandırılmalıdır.',
      ],
      answer_index: 1,
      explanation:
        'İkinci seçenek bir söz öbeğidir: yüklemi yok, hüküm bildirmiyor, yalnız bir alanı gösteriyor. Diğer üçü yargı cümlesidir ve birer ana fikir adayıdır. Konu–ana fikir ayrımının en hızlı ölçütü budur: öbek mi, cümle mi?',
    },
    {
      purpose: 'apply',
      question:
        'Bir paragraf, bir mahalle fırınının kırk yıldır aynı yöntemle ekmek yaptığını, müşterilerin kuyruk oluşturduğunu ve ustanın makineleşmeyi reddettiğini anlatıyor; hiçbir cümlede hüküm bildirilmiyor. Bu paragrafın ana fikri hangi yolla bulunur?',
      options: [
        'İlk cümle ana fikir kabul edilir',
        'Cümlelerin ortak noktası bulunup tek bir yargı cümlesine çevrilir',
        'En çok tekrar eden sözcük konu olarak yazılır',
        'Son cümlenin birebir kopyası seçilir',
      ],
      answer_index: 1,
      explanation:
        'Paragrafta hüküm bildiren cümle yoksa ana fikir örtüktür ve okuyucu tarafından kurulur. Yöntem: bütün cümlelerin ortaklaştığı noktayı bulup tek bir yargıya çevirmek. İlk ya da son cümleyi seçmek burada yanlıştır, çünkü ikisi de hüküm bildirmiyor. Sözcük saymak ise konu bulmanın bile güvenilir yolu değildir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, ana fikir sorusunda paragrafta gerçekten geçen doğru bir yargıyı işaretliyor ama cevap yanlış çıkıyor. Bu durumun en olası sebebi nedir?',
      options: [
        'Seçtiği yargı paragrafın yalnız bir bölümünü karşılayan bir yardımcı fikirdir',
        'Seçtiği yargı öznel bir ifadedir',
        'Seçtiği yargı paragrafta hiç geçmemektedir',
        'Seçtiği yargı bir söz öbeğidir',
      ],
      answer_index: 0,
      explanation:
        'Ana fikir sorularının en güçlü çeldiricisi, paragrafta gerçekten bulunan doğru bir yardımcı fikirdir. Yanlışlığı bilgi değil kapsam kaynaklıdır: paragrafın tamamını değil bir bölümünü karşılar. Öznellik, paragrafta bulunmama ya da öbek biçimi ayrı sorunlardır ve bu tarifle uyuşmaz.',
    },
  ],

  summary: [
    'Konu bir söz öbeğidir ve “neyden söz ediliyor?” sorusuna cevap verir.',
    'Ana fikir bir yargı cümlesidir ve “bu konuda ne söyleniyor?” sorusuna cevap verir.',
    'Ana fikir tektir ve paragrafın tamamını kapsar; yardımcı fikirler birden çoktur ve bölümleri karşılar.',
    'Ana fikir baştan, sondan, ortadan gelebilir ya da hiç yazılmamış (örtük) olabilir.',
    'Örtük ana fikri kurarken paragrafta olmayan hiçbir bilgi eklenemez.',
    'Başlığın ölçütü kapsamdır: dışarıda kalan cümle varsa dar, içeri giren fazlalık varsa geniştir.',
    'Sözcük sıklığı konu bulmanın güvenilir yolu değildir; sık geçen sözcük yalnız bir örnek olabilir.',
    'Ana fikir sorularının en güçlü çeldiricisi, doğru bir yardımcı fikirdir.',
    'Seçeneklere bakmadan önce ana fikri kendi cümlenle yaz.',
    'İyi bir özet, ana fikri merkeze alır, yardımcı fikirleri sıralar ve paragrafın dışına çıkmaz.',
  ],

  next: [
    'Paragrafın Yapısı ve Akışı (T.8.3.10, T.8.3.12, T.8.3.28)',
    'Anlatım Biçimleri (T.8.3.11)',
    'Düşünceyi Geliştirme Yolları (T.8.3.34)',
  ],
})

export default lesson
