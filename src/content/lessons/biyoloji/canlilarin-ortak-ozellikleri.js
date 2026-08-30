/**
 * TYT BİYOLOJİ · Canlıların Ortak Özellikleri
 * ==================================================================
 *
 * Biyoloji müfredatının ilk konusu — ve öğrencinin biyolojiye bakışını
 * belirleyen konu. Yanlış öğretilirse öğrenci biyolojiyi "ezberlenecek
 * madde listesi" sanıyor ve bu izlenim iki yıl boyunca değişmiyor.
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Ölçütler madde madde sayılmıyor; her biri bir SORUYA cevap olarak
 *   veriliyor. "Canlı olmak ne gerektirir?" sorusu listeyi kendiliğinden
 *   üretiyor.
 *
 * · Dört klasik kavram hatası dersin içine yerleştirildi: solunum ≠ soluk
 *   alıp verme, boşaltım ≠ dışkılama, hareket ≠ yer değiştirme, adaptasyon
 *   bireyde olmaz. Bunlar TYT'de doğrudan puan kaybettiren ayrımlar.
 *
 * · Virüsler ayrı bir bölüm olarak veriliyor. Müfredatta kısa geçiyor ama
 *   "ortak özellikler" konusunun sınavdaki en verimli çıkış noktası bu;
 *   ayrıca ölçütlerin neden BİRLİKTE arandığını en iyi virüs gösteriyor.
 *
 * · Metabolizma ve homeostazi diğer ölçütlerden daha uzun anlatılıyor,
 *   çünkü ikisi de bütün biyoloji boyunca geri gelecek. Burada kurulan
 *   ATP fikri, hücresel solunum ve fotosentez derslerinin temeli.
 */

export default {
  slug: 'canlilarin-ortak-ozellikleri',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Canlıların Ortak Özellikleri',
  },
  order: 1,
  partLabel: null,
  goldStandard: true,
  title: 'Canlıların Ortak Özellikleri: “Canlı” Olmak Ne Gerektirir?',
  subtitle:
    'Ölçütleri madde madde ezberleme. Her birini “canlı olmak için bu neden şart?” sorusunun cevabı olarak öğren; sınavda sorulan da tam olarak bu.',

  document: {
    version: 2,
    estimated_minutes: 32,
    prerequisites: [
      { topic: 'Temel kimya kavramları', why: 'Molekül, atom ve tepkime kelimeleri geçtiğinde durmaman gerekiyor.' },
      { topic: 'Ortaokul fen — canlı/cansız ayrımı', why: 'Buradaki tartışmayı sıfırdan değil, bildiğin yerden başlatacağız.' },
    ],
    outcomes: [
      'Bir varlığın canlı sayılması için hangi ölçütlerin **birlikte** bulunması gerektiğini açıklayabileceksin.',
      'Biyolojik organizasyon düzeylerini sıralayıp canlılığın hangi düzeyde başladığını gerekçelendirebileceksin.',
      'Metabolizmayı anabolizma ve katabolizma olarak ayırıp ATP’nin rolünü anlatabileceksin.',
      'Homeostazinin negatif geri bildirimle nasıl korunduğunu bir örnek üzerinden gösterebileceksin.',
      'Solunum, boşaltım, hareket ve adaptasyon kavramlarındaki klasik hataları yapmayacaksın.',
      'Virüslerin neden tam olarak canlı sayılmadığını ölçütlere dayanarak tartışabileceksin.',
    ],

    sections: [
      /* ============================================================
         1) AÇILIŞ
         ============================================================ */
      {
        id: 'cok-giris',
        kind: 'opening',
        title: 'Basit görünen, aslında hiç basit olmayan bir soru',
        lead: 'Biyolojiye bu soruyla başlıyoruz çünkü dersin geri kalanı bunun üzerine kuruluyor. Cevabı ezberlemeni değil, nasıl kurulduğunu görmeni istiyorum.',
        blocks: [
          {
            id: 'cok-giris-1',
            type: 'prose',
            body: `Bir taşla bir böceği ayırt etmek zor değil. Ama şu üçünü sıraya koy: bir kaya, bir buz kristali, bir virüs.

Buz kristali büyür. Dışarıdan madde alır, düzenli bir yapıya katar, giderek genişler. Buna rağmen kimse buzun canlı olduğunu söylemez.

Virüs ise kendi genetik maddesini taşır, çoğalır, hatta evrimleşir. Buna rağmen biyologların çoğu virüsü tam olarak canlı saymaz.

Demek ki ==tek bir özellik canlılığı belirlemiyor==. Büyümek yetmiyor, çoğalmak da yetmiyor. Canlılık, bir dizi özelliğin **aynı anda** bulunmasıyla ortaya çıkıyor.

Bu dersin mantığı da bu: ölçütleri bir liste olarak vermek yerine, "canlı olmak için bu neden şart?" sorusunu her biri için ayrı ayrı soracağız.`,
          },
          {
            id: 'cok-giris-note',
            type: 'teacher_note',
            tone: 'warning',
            body: 'Bu konuyu "ezberlenecek 10 madde" olarak görürsen biyolojinin tamamını öyle görmeye başlarsın. Her ölçütün altında bir mekanizma var; onu ara.',
          },
          {
            id: 'cok-giris-why',
            type: 'why',
            question: 'Biyologlar neden tek bir “canlı” tanımı üzerinde anlaşamıyor?',
            body: `Çünkü her tanım, kenarda kalan bir örneği ya dışarıda bırakıyor ya da içeri alıyor.

"Çoğalabilen şey canlıdır" dersen virüsü içeri almak zorunda kalırsın. "Metabolizması olan şey canlıdır" dersen virüsü dışarıda bırakırsın ama bu kez tohum ve spor gibi metabolizması neredeyse durmuş yapıları da tartışmaya açarsın.

Bu yüzden biyoloji tek bir cümlelik tanım yerine ==bir ölçütler kümesi== kullanır. Bir varlık bu ölçütlerin tamamını karşılıyorsa canlıdır; bir kısmını karşılıyorsa sınırdadır.

Sınav soruları da tam bu mantıkla yazılır: sana bir varlık verilir, hangi ölçütü karşılayıp hangisini karşılamadığı sorulur.`,
          },
          {
            id: 'cok-giris-audio',
            type: 'audio_script',
            body: `Derse başlamadan önce bir dakika şunu düşün: buz kristali büyür, ama canlı değil. Virüs çoğalır, ama tam olarak canlı sayılmıyor.

O hâlde canlı olmak için ne gerekiyor?

Bu sorunun cevabını ezberleyeceğin bir liste olarak değil, kurabileceğin bir mantık olarak vereceğim. Çünkü sınavda sana listeyi sormuyorlar; listeyi kullanıp karar vermeni istiyorlar.`,
          },
        ],
      },

      /* ============================================================
         2) HÜCRESEL YAPI VE ORGANİZASYON
         ============================================================ */
      {
        id: 'cok-hucre',
        kind: 'build',
        title: 'Birinci ölçüt: hücresel yapı',
        lead: 'Diğer bütün ölçütlerin üzerine kurulduğu temel bu. Onun için önce buradan başlıyoruz.',
        blocks: [
          {
            id: 'cok-hucre-concept',
            type: 'concept',
            term: 'Hücre teorisi',
            body: `Üç maddede özetlenir ve üçü de sınav açısından önemlidir:

- Bütün canlılar bir veya daha fazla **hücreden** oluşur.
- Hücre, canlılık özelliği gösteren **en küçük** yapı birimidir.
- Her hücre, kendisinden önce var olan bir hücreden **bölünmeyle** oluşur.

Üçüncü madde ilk bakışta ayrıntı gibi görünür ama aslında en güçlüsüdür: canlılığın kendiliğinden yoktan var olmadığını, ==bir sürekliliğin parçası olduğunu== söyler.`,
          },
          {
            id: 'cok-hucre-prose',
            type: 'prose',
            body: `"Hücre canlılığın en küçük birimidir" cümlesini dikkatli oku. Burada söylenen şey, hücreden küçük yapıların yok olduğu değil. Elbette hücrenin içinde organeller, moleküller, atomlar var.

Söylenen şey şu: ==bir organel tek başına canlı değildir==. Mitokondriyi hücreden ayırıp bir tüpe koyduğunda bir süre tepkime yürütür, sonra durur. Kendini onaramaz, çoğalamaz, iç dengesini koruyamaz.

Canlılık, parçaların toplamından fazla bir şey. Hücre, o "fazla"nın ortaya çıktığı ilk düzey.`,
          },
          {
            id: 'cok-hucre-figure',
            type: 'figure',
            kind: 'organizasyon-duzeyleri',
            width: 'wide',
            title: 'Biyolojik organizasyon düzeyleri',
            purpose: 'Canlılığın hangi basamakta başladığını göstermek ve her düzeyin bir öncekini kapsadığını görselleştirmek.',
            complexity: 'medium',
            focus: [
              { title: 'Yapı taşları', body: 'Atom, molekül ve organel bir canlının içinde bulunabilir ama tek başına metabolizma, çoğalma ve homeostazi kuramaz. Bu yüzden canlı değildir.' },
              { title: 'Hücre — canlılık eşiği', body: 'Canlılık özelliği gösteren en küçük düzey hücredir. Tek hücreli bir canlıda hücre ile organizma aynı basamaktır.' },
              { title: 'Birey içi düzeyler', body: 'Doku, organ ve sistem yalnızca çok hücreli canlılarda bulunur; birlikte tek bir organizmayı oluştururlar.' },
              { title: 'Organizma üstü düzeyler', body: 'Popülasyondan itibaren tek bireyin dışına çıkılır; aynı tür, farklı türler ve cansız çevre giderek birlikte incelenir.' },
            ],
            caption:
              'Kesikli çizginin altındaki üç düzey canlı **değildir**; canlının yapı taşlarıdır. Sınavda “canlılık özelliği gösteren en küçük birim” sorulduğunda cevap her zaman hücredir.',
            audio_script: `Bu merdivene alttan başlayarak bak.

Atom, molekül, organel. Üçü de canlı değil. Bunlar bir canlının içinde bulunur ama tek başlarına yaşamazlar.

Şimdi dördüncü basamağa gel. Hücre. Kesikli çizgi tam burada. Canlılık buradan itibaren başlıyor.

Yukarı doğru devam et: doku, organ, sistem, organizma. Bunlar bir bireyin içindeki düzeyler.

Ve son dört basamak: popülasyon, komünite, ekosistem, biyosfer. Bunlar artık tek bir bireyi değil, bireylerin oluşturduğu daha büyük yapıları anlatıyor.

Merdivenin genişlediğine dikkat et. Bu tesadüf değil: her düzey bir öncekini içine alıyor.`,
          },
          {
            id: 'cok-hucre-table',
            type: 'table',
            title: 'Düzeylerin sınırları',
            interactive: true,
            columns: ['Düzey aralığı', 'Kapsam', 'Örnek'],
            rows: [
              ['Atom → Organel', 'Canlı değil, yapı taşı', 'Karbon atomu, su molekülü, ribozom'],
              ['Hücre', 'Canlılığın en küçük birimi', 'Amip, bir sinir hücresi'],
              ['Doku → Organizma', 'Bir bireyin içindeki düzeyler', 'Kas dokusu, kalp, dolaşım sistemi, insan'],
              ['Popülasyon → Biyosfer', 'Organizma üstü düzeyler', 'Bir gölün sazanları, orman, dünya'],
            ],
            caption:
              'Doku düzeyi yalnızca **çok hücreli** canlılarda bulunur. Amip veya bakteride doku aramak anlamsızdır; onlarda hücre düzeyinden doğrudan organizma düzeyine geçilir.',
          },
          {
            id: 'cok-hucre-trap',
            type: 'trap',
            title: 'Tek hücreli canlıyı “basit” sanmak',
            wrong:
              'Tek hücreli olduğu için amip veya paramesyumun az iş yaptığını, çok hücrelilere göre daha az yeteneği olduğunu düşünmek.',
            right:
              'Tek hücreli bir canlı, çok hücreli bir canlının **bütün sistemlerinin işini tek bir hücrede** yapmak zorundadır: beslenme, boşaltım, hareket, uyarıya tepki, üreme. Bu yüzden yapısı basit değil, tam tersine yoğun biçimde uzmanlaşmıştır.',
            body: 'Sınavda "tek hücrelilerde şu olay görülmez" biçiminde bir öncül gördüğünde iki kez düşün. Görülmeyen şey genelde *yapı* düzeyidir (doku, organ), *olay* değil.',
          },
        ],
      },

      /* ============================================================
         3) METABOLİZMA
         ============================================================ */
      {
        id: 'cok-metabolizma',
        kind: 'deepen',
        title: 'İkinci ölçüt: metabolizma',
        lead: 'Bu bölüm dersin en önemli kısmı. Burada kuracağın fikir, hücresel solunumdan fotosenteze kadar bütün biyoloji boyunca geri gelecek.',
        blocks: [
          {
            id: 'cok-met-concept',
            type: 'concept',
            term: 'Metabolizma',
            body: `Bir canlının içinde gerçekleşen **bütün** kimyasal tepkimelerin toplamıdır. İki yönü vardır ve bu iki yön birbirinin tersidir:

- **Anabolizma (yapım):** Küçük moleküllerden büyük moleküller sentezlenir. Enerji **harcanır**.
- **Katabolizma (yıkım):** Büyük moleküller küçük moleküllere parçalanır. Enerji **açığa çıkar**.

Protein sentezi anabolizmadır. Hücresel solunum katabolizmadır. İkisi de aynı hücrede, aynı anda yürür.`,
          },
          {
            id: 'cok-met-figure',
            type: 'figure',
            kind: 'metabolizma-atp',
            width: 'full',
            title: 'Metabolizma ve ATP döngüsü',
            purpose: 'Katabolizma ile anabolizma arasındaki köprünün ATP olduğunu ve ATP’nin tükenmeyen bir taşıyıcı olduğunu göstermek.',
            complexity: 'medium',
            caption:
              'Katabolizmadan çıkan enerji doğrudan anabolizmaya aktarılmaz. Arada **ATP** vardır. Bu ara basamak biyolojinin en verimli buluşlarından biridir: enerji standart bir para birimine çevrilir ve her iş için aynı molekül kullanılabilir.',
            focus: [
              {
                title: 'Katabolizma — yıkım',
                body: 'Büyük moleküller enzimlerle parçalanır ve bağlarındaki enerji açığa çıkar. Bu enerji ısı olarak kaybolmadan önce bir kısmı ATP’ye aktarılır. Hücresel solunum bunun en bilinen örneğidir.',
              },
              {
                title: 'ATP döngüsü',
                body: 'ATP kullanıldığında ADP ve fosfata ayrılır; katabolizmadan gelen enerjiyle tekrar ATP’ye dönüştürülür. Yani ATP tüketilip biten bir depo değil, sürekli kurulup bozulan bir **taşıyıcıdır**.',
              },
              {
                title: 'Anabolizma — sentez',
                body: 'Küçük moleküller birleştirilirken enerji gerekir ve bu enerji ATP’den karşılanır. Protein sentezi, DNA eşlenmesi ve glikojen depolanması bu gruba girer.',
              },
            ],
            audio_script: `Bu şemaya ortadan başlayarak bak. Ortadaki döngüde ATP ve ADP var.

Şimdi sola bak. Katabolizma. Büyük moleküller yıkılıyor ve enerji açığa çıkıyor. O enerji nereye gidiyor? Şemadaki oku takip et: ADP'yi ATP'ye çeviriyor.

Şimdi sağa bak. Anabolizma. Küçük moleküller birleşiyor ve bunun için enerji gerekiyor. O enerji nereden geliyor? Yine oku takip et: ATP yıkılıyor.

Bir saniye dur ve şunu düşün: neden hücre katabolizmadan çıkan enerjiyi doğrudan anabolizmaya vermiyor da araya ATP koyuyor?

Cevap, standartlaştırma. Hücrede yüzlerce farklı iş var. Her iş için ayrı bir enerji aktarım yolu kursaydı bu sistem yönetilemezdi. ATP tek bir para birimi gibi çalışıyor.`,
          },
          {
            id: 'cok-met-trap',
            type: 'trap',
            title: '“ATP enerjinin kendisidir” demek',
            wrong: 'ATP’yi hücrenin enerji deposu sanmak; “hücre ATP depolar, gerektiğinde harcar” diye düşünmek.',
            right:
              'ATP bir **enerji taşıyıcısıdır**, depo değildir. Kararsız bir moleküldür ve üretildikten kısa süre sonra harcanır. Hücrenin gerçek depoları glikojen, nişasta ve yağdır; ATP bunlardan üretilir.',
            body: 'Bu ayrımı şimdi kurmazsan hücresel solunum konusunda "hücre neden sürekli ATP üretiyor?" sorusunda takılırsın.',
          },
          {
            id: 'cok-met-connection',
            type: 'connection',
            title: 'Bu fikir nereye gidiyor?',
            body:
              'Metabolizma buradaki tanımıyla bitmiyor. Enzimler konusunda tepkimelerin nasıl hızlandırıldığını, hücresel solunumda katabolizmanın ayrıntısını, fotosentezde ise anabolizmanın en büyük örneğini göreceksin. Şimdi kurduğun anabolizma–katabolizma ayrımı o üç konunun da iskeleti.',
            links: ['Canlıların Temel Bileşenleri — enzimler', 'Hücre — mitokondri ve kloroplast', 'Canlılarda Enerji Dönüşümleri'],
          },
          {
            id: 'cok-met-checkpoint',
            type: 'checkpoint',
            prompt:
              'Bir hücrede protein sentezi hızlanıyor. Bu hücrenin ATP tüketimi ve hücresel solunum hızı nasıl değişir? Neden?',
            hint: 'Protein sentezi hangi metabolizma koluna girer? O kol enerji harcar mı, üretir mi?',
            answer: `Protein sentezi **anabolizmadır**, yani enerji harcar. Hızlanınca ATP tüketimi artar.

ATP tüketimi arttığında ortamda ADP birikir. Hücre bu ADP’yi tekrar ATP’ye çevirmek zorundadır ve bunun için katabolizmayı, yani hücresel solunumu hızlandırır.

Sonuç: ==anabolizmadaki artış, katabolizmayı da artırır==. İkisi birbirinden bağımsız çalışmaz; ATP üzerinden birbirine bağlıdır.

Bu mantık sınavda çok sevilir: sana bir kolda değişiklik verilir, diğer kolda ne olacağı sorulur.`,
          },
          {
            id: 'cok-met-audio',
            type: 'audio_script',
            body: `Bu bölümü kapatmadan önce şu iki cümleyi kendi kelimelerinle söyleyebiliyor musun kontrol et:

Birincisi: anabolizma enerji harcar, katabolizma enerji açığa çıkarır.
İkincisi: ikisi arasındaki köprü ATP'dir.

Söyleyebiliyorsan devam et. Söyleyemiyorsan şemaya bir kez daha bak — bu iki cümle üzerine iki yıllık biyoloji kurulacak.`,
          },
        ],
      },

      /* ============================================================
         4) BESLENME VE SOLUNUM
         ============================================================ */
      {
        id: 'cok-beslenme',
        kind: 'build',
        title: 'Üçüncü ve dördüncü ölçüt: beslenme ve solunum',
        lead: 'Metabolizmanın yürümesi için iki şey gerekiyor: hammadde ve kullanılabilir enerji. Beslenme birincisini, solunum ikincisini sağlıyor.',
        blocks: [
          {
            id: 'cok-bes-prose',
            type: 'prose',
            body: `Her canlı beslenir. Ama "beslenme" kelimesi seni yanıltmasın: bu, ağızdan yemek yemek demek değil. Beslenme, canlının ==yapıtaşı ve enerji kaynağı olacak organik maddeyi elde etmesidir==.

Bir bakterinin de, bir çam ağacının da, senin de bunu yapman gerekir. Fark, organik maddeyi nereden bulduğunuzdadır.`,
          },
          {
            id: 'cok-bes-compare',
            type: 'compare',
            title: 'Organik maddeyi kim üretir, kim hazır alır?',
            interactive: true,
            columns: ['Ototrof (üretici)', 'Heterotrof (tüketici)'],
            rows: [
              {
                label: 'Organik madde',
                values: ['İnorganik maddeden kendisi üretir', 'Dışarıdan hazır alır'],
              },
              {
                label: 'Enerji kaynağı',
                values: ['Işık (fotoototrof) veya kimyasal tepkime (kemoototrof)', 'Aldığı besinin bağ enerjisi'],
              },
              {
                label: 'Örnek',
                values: ['Bitkiler, algler, siyanobakteriler, nitrit bakterileri', 'Hayvanlar, mantarlar, çoğu bakteri'],
              },
              {
                label: 'Ekosistemdeki rol',
                values: ['Enerjiyi ekosisteme sokar', 'Var olan enerjiyi aktarır'],
              },
            ],
            insight:
              'Ayrımın ölçütü “fotosentez yapıyor mu?” değil, ==“organik maddeyi kendisi üretebiliyor mu?”==. Kemoototrof bakteriler ışık kullanmaz ama yine de ototrofturlar; enerjiyi kimyasal tepkimelerden alırlar. Bu ayrımı kurmazsan “ototrof = fotosentez” hatasına düşersin.',
          },
          {
            id: 'cok-bes-figure',
            type: 'figure',
            kind: 'beslenme-stratejileri',
            width: 'full',
            title: 'İki beslenme yolu, ortak ATP hedefi',
            purpose: 'Ototrof ve heterotrof ayrımının organik maddenin kaynağıyla ilgili olduğunu; iki grubun da hücresel solunum yaptığını göstermek.',
            complexity: 'medium',
            caption: 'Ototrof–heterotrof ayrımı **organik besinin nereden geldiğini** söyler. ATP’nin nasıl üretildiğini söylemez; her iki grup da hücresel solunum yapar.',
            focus: [
              { title: 'Ototrof yol', body: 'CO₂ ve su gibi inorganik maddelerden organik besin kurulur. Enerji ışık veya inorganik maddelerin oksidasyonundan gelebilir.' },
              { title: 'Heterotrof yol', body: 'Organik besin başka canlılardan hazır alınır. Hayvanlar, mantarlar ve çoğu bakteri bu yolu kullanır.' },
              { title: 'Ortak enerji yolu', body: 'Kaynak farklı olsa da iki grup da organik besinin bağ enerjisini hücresel solunumla ATP’ye dönüştürür.' },
            ],
            audio_script: `Önce üstteki iki yolu ayır. Solda ototrof var: karbon kaynağı karbondioksit, organik besini kendisi kuruyor. Sağda heterotrof var: organik besini hazır alıyor.

Şimdi iki okun aşağıda birleştiği yere bak. İki yol da hücresel solunuma geliyor ve ATP üretiyor.

Sınavdaki kritik ayrım bu: ototrof olmak solunum yapmamak demek değildir. Bitki gündüz de gece de solunum yapar; yalnızca organik besinin kaynağı bakımından üreticidir.`,
          },
          {
            id: 'cok-bes-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Bitkiler hem ototroftur hem de hücresel solunum yapar. “Bitkiler fotosentez yapar, hayvanlar solunum yapar” cümlesi yanlıştır; bitkiler ikisini birden yapar.',
          },
          {
            id: 'cok-bes-solunum',
            type: 'concept',
            term: 'Solunum',
            body: `Besinlerdeki kimyasal bağ enerjisinin ==ATP'ye dönüştürülmesi== olayıdır. Bütün canlılarda görülür.

Oksijen kullanılıp kullanılmamasına göre ikiye ayrılır:

- **Oksijenli solunum:** Organik madde tamamen parçalanır, verim yüksektir.
- **Oksijensiz (fermantasyon):** Organik madde tam parçalanmaz, verim düşüktür.

Hangisi olursa olsun amaç aynıdır: ATP üretmek.`,
          },
          {
            id: 'cok-bes-trap',
            type: 'trap',
            title: 'Solunumu “soluk alıp verme” sanmak',
            wrong: '“Bitkiler solunum yapmaz, sadece fotosentez yapar” veya “solungaç olmayan canlı solunum yapmaz” demek.',
            right:
              'Soluk alıp verme (gaz alışverişi) bir **taşıma** olayıdır ve her canlıda bulunmaz. Solunum ise **hücre içinde** gerçekleşen bir ATP üretim olayıdır ve istisnasız her canlıda vardır. Bitki de solunum yapar, bakteri de.',
            body:
              'Bu ayrımı şöyle sabitle: soluk alıp verme akciğerin işidir, solunum hücrenin işidir. Sınavda “bütün canlılarda görülür” öncülünde solunum geçiyorsa cevap genelde doğrudur.',
          },
        ],
      },

      /* ============================================================
         5) HOMEOSTAZİ
         ============================================================ */
      {
        id: 'cok-homeostazi',
        kind: 'deepen',
        title: 'Beşinci ölçüt: homeostazi',
        lead: 'Dış dünya sürekli değişiyor. Canlının içi ise değişmemek zorunda. Bu bölümde bunun nasıl başarıldığına bakıyoruz.',
        blocks: [
          {
            id: 'cok-hom-prose',
            type: 'prose',
            body: `Vücut sıcaklığın, dışarısı 5 derece de olsa 35 derece de olsa 36–37 aralığında kalır. Kan şekerin, aç da olsan tok da olsan dar bir aralıkta tutulur.

Bu tesadüf değil, ==aktif olarak korunan bir durum==. Enzimlerin çalışabilmesi için belirli sıcaklık ve pH aralığı gerekir; bu aralığın dışına çıkıldığında enzimler bozulur ve metabolizma durur. Yani homeostazi bir konfor meselesi değil, hayatta kalma koşulu.

**Homeostazi**, canlının değişen dış koşullara rağmen iç ortamını kararlı tutmasıdır.`,
          },
          {
            id: 'cok-hom-figure',
            type: 'figure',
            kind: 'homeostazi-dongusu',
            width: 'full',
            title: 'Negatif geri bildirim döngüsü',
            purpose: 'Geri bildirimin neden “negatif” olarak adlandırıldığını, döngünün sapmayı söndürdüğünü göstermek.',
            complexity: 'medium',
            caption:
              'Döngünün adı “negatif”, sonucu kötü olduğu için değil; ==sonucun kendisini başlatan sapmayı söndürdüğü== için. Sıcaklık yükseldiğinde terleme başlar, terleme sıcaklığı düşürür, sıcaklık düşünce terleme durur.',
            focus: [
              { title: 'Sapma', body: 'İç ortamdaki bir değer normal aralığın dışına çıkar. Örnekte vücut sıcaklığının yükselmesi.' },
              { title: 'Reseptör', body: 'Sapmayı algılayan yapı. Sıcaklık örneğinde deri ve hipotalamustaki ısı reseptörleri.' },
              { title: 'Kontrol merkezi', body: 'Gelen bilgiyi normal değerle karşılaştırır ve ne yapılacağına karar verir. İnsanda genellikle hipotalamus.' },
              { title: 'Efektör', body: 'Kararı uygulayan yapı. Terleme için ter bezleri, titreme için kaslar.' },
              { title: 'Sonuç', body: 'Sapma azalır ve değer normal aralığa döner.' },
              { title: 'Geri bildirim', body: 'Normale dönüş, döngüyü başlatan uyarıyı ortadan kaldırır ve sistem kendini durdurur. Bu yüzden “negatif”tir.' },
            ],
            audio_script: `Bu şemayı soldan sağa takip et.

Önce bir sapma var: vücut sıcaklığı yükseldi. Sonra reseptör bunu algılıyor. Kontrol merkezi değerlendiriyor. Efektör devreye giriyor, terleme başlıyor.

Şimdi alttaki kutuya bak: sapma azalıyor, normale dönülüyor.

Ve şimdi asıl önemli kısım. Soldaki kesikli kırmızı oku ve üzerindeki eksi işaretini bul.

O ok başa dönüyor. Ama bir şeyi başlatmak için değil, ==durdurmak için==. Sıcaklık normale döndüğü anda terlemeyi başlatan sebep ortadan kalkıyor ve sistem kendi kendini kapatıyor.

Geri bildirimin "negatif" olması bu demek. Kötü olduğu için değil, sapmayı söndürdüğü için.`,
          },
          {
            id: 'cok-hom-example',
            type: 'example',
            title: 'Aynı döngü, farklı sistem',
            body: `Kan şekeri yükseldiğinde pankreas insülin salgılar. İnsülin, glikozun hücrelere alınmasını ve karaciğerde glikojen olarak depolanmasını sağlar. Kan şekeri düşer. Düşünce insülin salgısı da azalır.

Şemadaki kutuların yerine koy: **sapma** = kan şekerinin yükselmesi, **reseptör + kontrol merkezi** = pankreas, **efektör** = karaciğer ve hücreler, **sonuç** = kan şekerinin normale dönmesi.

Aynı iskelet, farklı organlar. AYT'de endokrin sistem ve üriner sistem konularında bu döngüyü defalarca kuracaksın.`,
          },
          {
            id: 'cok-hom-note',
            type: 'teacher_note',
            tone: 'note',
            body: 'Pozitif geri bildirim de vardır ama nadirdir: doğum sırasında kasılmaların birbirini tetiklemesi gibi. Orada sonuç, sapmayı söndürmez, artırır.',
          },
        ],
      },

      /* ============================================================
         6) KALAN ÖLÇÜTLER
         ============================================================ */
      {
        id: 'cok-diger',
        kind: 'build',
        title: 'Kalan ölçütler: boşaltım, hareket, tepki, üreme, büyüme, uyum',
        lead: 'Bunlar daha kısa ama içlerinde sınavda en çok puan kaybettiren üç kavram hatası saklı. Onları özellikle işaretleyeceğim.',
        blocks: [
          {
            id: 'cok-diger-bosaltim',
            type: 'concept',
            term: 'Boşaltım',
            body:
              'Metabolizma sonucu oluşan **zararlı atıkların** vücuttan uzaklaştırılmasıdır. Karbondioksit, su, amonyak, üre ve ürik asit bu gruba girer. Her canlıda görülür.',
          },
          {
            id: 'cok-diger-trap1',
            type: 'trap',
            title: 'Boşaltımı dışkılama sanmak',
            wrong: 'Dışkılamayı boşaltım saymak; “boşaltım sindirim sisteminin sonudur” diye düşünmek.',
            right:
              'Dışkı, **sindirilmemiş** besin artığıdır — hiç hücreye girmemiş, metabolizmaya katılmamıştır. Boşaltım ise metabolizma sonucu **hücre içinde oluşan** atıkların atılmasıdır. Dışkılama boşaltım değildir.',
            body: 'Aynı mantıkla ter ve idrar boşaltım ürünüdür, çünkü ikisi de metabolizmadan gelir.',
          },
          {
            id: 'cok-diger-hareket',
            type: 'prose',
            body: `**Hareket**, canlının kendisinin veya bir kısmının konum değiştirmesidir. Buradaki kritik ayrım şu: hareket etmek, ==yer değiştirmek zorunda değildir==.

Bir ayçiçeğinin güneşe yönelmesi harekettir. Bitki bulunduğu yerden ayrılmaz ama gövdesi yön değiştirir. Aynı şekilde küstüm otunun dokunulduğunda yapraklarını kapatması da harekettir.

**Uyarılara tepki** ise canlının çevresindeki değişimi algılayıp buna karşılık vermesidir. Bitkideki yönelim hareketleri de, senin sıcak bir yüzeyden elini çekmen de bu ölçüte girer.`,
          },
          {
            id: 'cok-diger-trap2',
            type: 'trap',
            title: 'Hareketi yer değiştirmeyle karıştırmak',
            wrong: '“Bitkiler hareket edemez” demek.',
            right:
              'Bitkiler **yer değiştiremez** ama **hareket eder**. Işığa yönelme, köklerin suya yönelmesi, çiçeklerin açılıp kapanması hareket örnekleridir.',
            body: 'Sınav öncüllerinde "hareket" ile "aktif yer değiştirme" ayrı ayrı kullanılır; hangisinin geçtiğine dikkat et.',
          },
          {
            id: 'cok-diger-ureme',
            type: 'prose',
            body: `**Üreme**, canlının kendine benzer yeni bireyler oluşturmasıdır. Türün devamı için zorunludur — ama dikkat et: ==bireyin yaşaması için zorunlu değildir==. Katır üreyemez, yine de canlıdır. Sen de ürememeyi seçebilirsin, canlılığın değişmez.

Bu yüzden üreme ölçütü "her canlı ürer" biçiminde değil, **"canlılar üreme yeteneğine sahip yapılardan oluşur"** biçiminde okunmalıdır.

**Büyüme ve gelişme** ise sık karıştırılan bir ikilidir:
- **Büyüme:** Hücre sayısının veya hacminin artması. Nicel bir değişimdir.
- **Gelişme:** Hücrelerin özelleşerek farklı görevler üstlenmesi. Nitel bir değişimdir.

Bir tohumun çimlenip fidan olması gelişmedir; fidanın boyunun uzaması büyümedir.`,
          },
          {
            id: 'cok-diger-uyum',
            type: 'concept',
            term: 'Uyum (adaptasyon)',
            body: `Bir popülasyondaki bireylerin, yaşadıkları ortamda hayatta kalma ve üreme şansını artıran **kalıtsal** özellikler taşımasıdır.

Buradaki iki kelime kritik: **kalıtsal** ve **popülasyon**. Adaptasyon bireyin yaşamı boyunca kazandığı bir şey değildir.`,
          },
          {
            id: 'cok-diger-trap3',
            type: 'trap',
            title: '“Birey ortama uyum sağlar” demek',
            wrong:
              '“Sıcak bölgeye taşınan bir insan zamanla adapte olur” veya “zürafalar uzanmaya çalıştıkları için boyunları uzadı” biçiminde düşünmek.',
            right:
              'Adaptasyon **bireyde** değil, **popülasyonda** ve **kuşaklar boyunca** gerçekleşir. Popülasyonda zaten var olan kalıtsal çeşitlilik içinden, ortama uygun özelliği taşıyanlar daha çok üreyerek oranlarını artırır. Birey kendini değiştirmez; ==doğal seçilim popülasyonu değiştirir==.',
            body:
              'Bireyin ortama kısa sürede verdiği tepkiye (soğukta titreme, yüksekte alyuvar artışı) **alışma/aklimasyon** denir ve bu kalıtsal değildir. İkisini karıştırma.',
          },
        ],
      },

      /* ============================================================
         7) VİRÜSLER + UYGULAMA
         ============================================================ */
      {
        id: 'cok-virus',
        kind: 'practice',
        title: 'Sınırdaki örnek: virüsler canlı mı?',
        lead: 'Ölçütlerin neden birlikte arandığını en iyi gösteren örnek burada. Aynı zamanda bu konunun sınavdaki en verimli çıkış noktası.',
        blocks: [
          {
            id: 'cok-vir-compare',
            type: 'compare',
            title: 'Virüsler hangi ölçütü karşılıyor, hangisini karşılamıyor?',
            interactive: true,
            columns: ['Canlı özelliği gösterir', 'Cansız özelliği gösterir'],
            rows: [
              {
                label: 'Genetik madde',
                values: ['DNA veya RNA taşır', '—'],
              },
              {
                label: 'Çoğalma',
                values: ['Konak hücre içinde çoğalır', 'Konak dışında çoğalamaz'],
              },
              {
                label: 'Hücresel yapı',
                values: ['—', 'Hücre yapısı yoktur; organel, sitoplazma ve zar bulunmaz'],
              },
              {
                label: 'Metabolizma',
                values: ['—', 'Kendi enzimi ve metabolizması yoktur'],
              },
              {
                label: 'Konak dışında',
                values: ['—', 'Kristalleşerek cansız gibi durabilir'],
              },
            ],
            insight:
              'Virüs, ölçütlerin **bir kısmını** karşılıyor. Ama canlılık için ölçütlerin tamamı aranır ve virüsün karşılamadığı iki ölçüt tam da temel olanlar: ==hücresel yapı ve metabolizma==. Bu yüzden virüsler “zorunlu hücre içi parazit” olarak sınıflandırılır; canlı ile cansız arasında bir geçiş formu sayılır.',
          },
          {
            id: 'cok-vir-figure',
            type: 'figure',
            kind: 'virus-canlilik',
            width: 'full',
            title: 'Virüs için canlılık ölçütlerini tek tek sınayalım',
            purpose: 'Bir veya iki canlılık özelliğinin bir yapıyı canlı saymaya yetmediğini, virüs üzerinden ölçüt kontrolüyle göstermek.',
            complexity: 'medium',
            caption: 'Virüsün genetik madde taşıması ve konakta çoğalması önemlidir; fakat **hücresel yapı ile bağımsız metabolizma yokluğu** canlı kabul edilmesini engeller.',
            focus: [
              { title: 'Genetik madde', body: 'Virüs DNA veya RNA taşır. İkisini birden değil, bunlardan yalnızca birini bulundurur ve kalıtsal değişim geçirebilir.' },
              { title: 'Konakta çoğalma', body: 'Yeni virüsler yalnızca canlı bir hücrenin enzimleri ve ribozomları kullanılarak üretilebilir. Konak dışında çoğalma durur.' },
              { title: 'Hücresel yapı yok', body: 'Virüsün hücre zarı, sitoplazması, ribozomu ve organelleri yoktur. Protein kılıf hücre zarı değildir.' },
              { title: 'Bağımsız metabolizma yok', body: 'Kendi ATP’sini üretemez ve kendi proteinini sentezleyemez. Bu eksiklik, canlılık kararındaki en güçlü ölçüttür.' },
            ],
            audio_script: `Virüsü canlı ya da cansız diye tek hamlede etiketleme. Dört ölçütü sırayla kontrol et.

Bir: genetik madde var. İki: çoğalma var ama yalnızca konak hücre içinde. Buraya kadar canlılara benziyor.

Üç: hücresel yapı yok. Dört: bağımsız metabolizma yok. Bunlar temel iki eksik.

Bu yüzden sonuç ortada: virüs bazı canlılık özelliklerini taşır ama bunların tamamını kendi başına yürütemez.`,
          },
          {
            id: 'cok-vir-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Virüsler mutasyon geçirir ve evrimleşir. “Değişmezler” diyen bir öncül görürsen yanlıştır — grip aşısının her yıl yenilenmesinin sebebi budur.',
          },
          {
            id: 'cok-vir-worked',
            type: 'worked_example',
            title: 'Ölçütleri kullanarak karar verme',
            prompt:
              'Bir bilim insanı, laboratuvarda X yapısını inceliyor. X: (1) kendi genetik maddesini taşıyor, (2) uygun ortamda sayısını artırıyor, (3) enzim üretemiyor, (4) hücre zarı ve sitoplazması bulunmuyor. Bu bilgilere göre X için ne söylenebilir?',
            steps: [
              {
                title: 'Hangi ölçütler karşılanıyor, işaretle',
                body: 'Genetik madde taşıması ve çoğalması canlılara özgü özelliklerdir. İlk iki madde karşılanıyor.',
              },
              {
                title: 'Hangi temel ölçütler eksik, onları ayır',
                body: 'Enzim üretememesi metabolizmasının olmadığını gösterir. Hücre zarı ve sitoplazma yokluğu hücresel yapısının olmadığını gösterir. Bu ikisi **temel** ölçütlerdir.',
              },
              {
                title: 'Çoğalmanın koşulunu sorgula',
                body: '“Uygun ortamda çoğalıyor” ifadesi dikkat ister. Metabolizması olmayan bir yapı kendi başına çoğalamaz; bu çoğalma ancak bir konak hücrenin enzimleri ve ribozomları kullanılarak gerçekleşebilir.',
              },
              {
                title: 'Sonucu ölçütlere dayandır',
                body: 'Bir kısım canlılık özelliği var, ama hücresel yapı ve metabolizma yok. Bu profil virüslerin profilidir.',
              },
            ],
            answer:
              'X bir virüstür. Tam anlamıyla canlı sayılamaz; ancak konak hücre içindeyken canlılık özellikleri gösterir. Bağımsız olarak metabolizma yürütemez.',
            takeaway:
              'Bu soru tipinde adı verilmez, **özellikler** verilir. Yapman gereken tek şey ölçüt listesini sırayla kontrol etmek. Özellikle “kendi enzimini üretebiliyor mu?” sorusu virüs ile hücreli canlıyı tek başına ayırır.',
          },
          {
            id: 'cok-vir-quiz1',
            type: 'quiz',
            purpose: 'concept',
            question: 'Aşağıdakilerden hangisi **bütün** canlılarda görülür?',
            options: [
              'Oksijenli solunum',
              'Hücresel solunum',
              'Aktif yer değiştirme',
              'Fotosentez',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **hücresel solunum**. Her canlının ATP’ye ihtiyacı vardır ve ATP hücresel solunumla üretilir.

Diğerleri neden yanlış:
- **Oksijenli solunum:** Bazı bakteriler yalnızca oksijensiz solunum yapar; hatta oksijen onlar için öldürücüdür.
- **Aktif yer değiştirme:** Bitkiler ve sabit yaşayan hayvanlar (süngerler gibi) yer değiştirmez.
- **Fotosentez:** Yalnızca fotoototroflarda görülür.

Bu soru tipinde anahtar kelime “bütün”dür. Tek bir istisna bulduğun anda o seçeneği eleyebilirsin.`,
          },
          {
            id: 'cok-vir-quiz2',
            type: 'quiz',
            purpose: 'error',
            question:
              'Soğuk bir bölgeye taşınan bir kişinin, aylar içinde soğuğa daha dayanıklı hâle gelmesi aşağıdakilerden hangisiyle açıklanır?',
            options: [
              'Bireyin ortama adaptasyonu',
              'Bireyin fizyolojik alışması (aklimasyon)',
              'Popülasyonda doğal seçilim',
              'Kalıtsal mutasyon oluşması',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **fizyolojik alışma (aklimasyon)**. Bu, bireyin yaşamı boyunca gerçekleşen, **kalıtsal olmayan** bir değişimdir ve çocuklarına aktarılmaz.

Adaptasyon **bireyde** olmaz; popülasyonda, kuşaklar boyunca, doğal seçilimle gerçekleşir. Tek bir kişinin ay içinde yaşadığı değişim adaptasyon değildir.

C seçeneği doğru bir mekanizmadır ama soruda tek bir bireyden söz ediliyor; doğal seçilim popülasyon düzeyinde işler. D seçeneği ise mutasyonun ihtiyaca göre oluştuğunu varsayar — mutasyonlar rastgeledir.`,
          },
        ],
      },

      /* ============================================================
         8) KAPANIŞ
         ============================================================ */
      {
        id: 'cok-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Aşağıdaki maddeleri okurken her birine “evet, bunu anlatabilirim” diyebiliyor musun kontrol et. Diyemediğin madde varsa ilgili bölüme dön.',
        blocks: [
          {
            id: 'cok-kap-summary',
            type: 'summary',
            title: 'Bu dersten geriye kalması gerekenler',
            points: [
              'Canlılık tek bir özellikle değil, ölçütlerin **birlikte** bulunmasıyla tanımlanır.',
              'Hücre, canlılık özelliği gösteren en küçük birimdir; atom, molekül ve organel canlı değildir.',
              'Metabolizma = anabolizma (enerji harcayan sentez) + katabolizma (enerji açığa çıkaran yıkım). İkisinin köprüsü ATP’dir.',
              'ATP bir enerji **taşıyıcısıdır**, depo değildir; sürekli kurulup bozulur.',
              'Ototrof–heterotrof ayrımının ölçütü fotosentez değil, organik maddeyi kendi üretip üretememektir.',
              'Solunum hücrede olur ve her canlıda vardır; soluk alıp verme bir taşıma olayıdır ve her canlıda bulunmaz.',
              'Boşaltım metabolik atıkların atılmasıdır; dışkılama boşaltım değildir.',
              'Bitkiler yer değiştiremez ama hareket eder.',
              'Adaptasyon bireyde değil, popülasyonda ve kuşaklar boyunca gerçekleşir; kalıtsaldır.',
              'Virüslerin hücresel yapısı ve metabolizması yoktur; bu yüzden tam olarak canlı sayılmazlar.',
            ],
          },
          {
            id: 'cok-kap-memory',
            type: 'memory',
            body:
              'Bir varlığın canlı olup olmadığına karar verirken önce tek bir soruyu sor: *kendi metabolizmasını yürütebiliyor mu?* Bu soru virüsü de, buz kristalini de, robotu da tek hamlede eler.',
          },
          {
            id: 'cok-kap-next',
            type: 'next_step',
            body: `Bu derste canlıların ne yaptığını konuştuk. Sıradaki konuda ==neyden yapıldıklarına== bakacağız: su, mineraller, karbonhidratlar, lipitler, proteinler, enzimler, vitaminler, nükleik asitler ve ATP.

Özellikle enzimler bölümüne dikkat et — bugün konuştuğumuz metabolizmanın nasıl yürütüldüğünü orada göreceksin.`,
            topics: ['Canlıların Temel Bileşenleri', 'Hücre'],
          },
          {
            id: 'cok-kap-audio',
            type: 'audio_script',
            body: `Ders bitti. Kapatmadan önce şunu yap:

Ekrandan başını kaldır ve bir arkadaşına anlatır gibi şu soruyu cevapla — "canlı olmak için ne gerekiyor?"

Ölçütleri sırayla saymana gerek yok. Bana metabolizmayı, hücresel yapıyı ve homeostaziyi anlatabiliyorsan bu konu sende oturmuş demektir.

Takıldığın yer olursa ilgili bölüme dön. Takılmadıysan temel bileşenlere geçebilirsin.`,
          },
        ],
      },
    ],
  },
}
