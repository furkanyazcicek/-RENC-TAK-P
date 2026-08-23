/**
 * TYT BİYOLOJİ · Hücre — 3. Bölüm
 * AKTİF TAŞIMA VE TOPLU TAŞIMA
 * ==================================================================
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Ders, önceki iki bölümde kurulan kuralın KIRILMASIYLA açılıyor:
 *   şimdiye kadar madde hep çoktan aza gidiyordu, burada tersi olacak.
 *   Kuralı bozan durumu "yeni bir konu" gibi değil, "kuralın istisnası
 *   ve bedeli" olarak vermek öğrencinin zihninde tek bir çerçeve kuruyor.
 *
 * · Sodyum–potasyum pompasında 3/2/1 oranı ve iki iyonun da DERİŞİME
 *   KARŞI taşındığı özellikle vurgulanıyor. Öğrenciler "aktif taşıma
 *   derişime karşıdır" cümlesini ezberliyor ama pompada bunu göremiyor.
 *
 * · Endositoz/ekzositozda zar yüzeyi değişimi ayrı bir başlık; TYT'de
 *   doğrudan sorulan ve en çok kaçırılan ayrıntı bu.
 *
 * · Bitki hücresinde endositozun görülmemesi, ezber olarak değil
 *   SEBEBİYLE veriliyor: hücre duvarı zarın içeri çökmesine izin vermez.
 *   Bir önceki bölümde duvarın rolü kurulmuştu, buradan devam ediliyor.
 *
 * · Bölümün sonunda dört taşıma biçiminin TAMAMI tek tabloda toplanıyor;
 *   konu üç derse yayıldığı için birleştirici bir çerçeve gerekiyor.
 */

export default {
  slug: 'hucre-aktif-toplu-tasima',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Hücre',
  },
  order: 3,
  partLabel: '3. Bölüm',
  goldStandard: true,
  title: 'Aktif Taşıma ve Toplu Taşıma',
  subtitle:
    'Şimdiye kadar madde hep çoktan aza gidiyordu. Bu bölümde kural kırılıyor — ve hücre bunun bedelini ATP ile ödüyor.',

  document: {
    version: 2,
    estimated_minutes: 28,
    prerequisites: [
      {
        topic: 'Hücre — 1. Bölüm',
        why: 'Taşıyıcı proteinler ve doygunluk mantığı burada aynen geçerli olacak.',
      },
      {
        topic: 'Hücre — 2. Bölüm',
        why: 'Hücre duvarının rolü, bitki hücresinde endositozun neden görülmediğini açıklıyor.',
      },
    ],
    outcomes: [
      'Aktif taşımayı pasif taşımadan iki ölçütle ayırt edebileceksin.',
      'Sodyum–potasyum pompasının çalışmasını oranlarıyla anlatabileceksin.',
      'Endositoz ve ekzositozu aşamalarıyla açıklayabileceksin.',
      'Zar yüzeyinin hangi olayda arttığını, hangisinde azaldığını söyleyebileceksin.',
      'Bitki hücresinde endositozun neden görülmediğini gerekçelendirebileceksin.',
      'Dört taşıma biçimini tek tabloda karşılaştırabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'at-giris',
        kind: 'opening',
        title: 'Kuralın kırıldığı yer',
        lead: 'Bu bölüm bir istisnayla başlıyor. Ama istisnanın kendisi değil, bedeli önemli.',
        blocks: [
          {
            id: 'at-giris-1',
            type: 'prose',
            body: `İki bölümdür aynı kuralı kullanıyoruz: madde ==çok olduğu yerden az olduğu yere== gider ve hücre bunun için enerji harcamaz.

Şimdi bir gözlemle karşılaşalım.

Deniz suyunda yaşayan yosunların hücrelerinde iyot derişimi, deniz suyundakinin ==bin katından fazladır==. Aynı şekilde bitki köklerindeki mineral derişimi, topraktakinden çok daha yüksektir.

Pasif taşıma bunu açıklayamaz. Pasif taşımada madde en fazla iki taraf eşitlenene kadar geçer; bir tarafı bin kat derişik hâle getiremez.

Demek ki hücre bazen maddeyi ==derişim farkına karşı== taşıyabiliyor. Ama bunun bedava olmadığını göreceğiz.`,
          },
          {
            id: 'at-giris-why',
            type: 'why',
            question: 'Hücre neden bu zahmete giriyor? Derişimler eşitlense ne olurdu?',
            body: `Hücre ölürdü.

Bunu somutlaştıralım. Sinir hücrelerinde uyartının iletilebilmesi, zarın iki yanı arasında ==sodyum ve potasyum farkının korunmasına== bağlıdır. O fark ortadan kalkarsa sinir sistemi çalışmaz.

Böbrekte de aynı durum: idrarla giden yararlı maddelerin (glikoz, amino asit) geri kazanılması, onları derişik kandan daha derişik hâle getirmeyi gerektirir. Pasif taşımayla bu mümkün değil.

Buradaki genel fikir şu: ==canlılık, dengesizliği korumaktır==. Termodinamik her şeyi eşitlemeye çalışır; canlı sistem sürekli enerji harcayarak buna direnir.

Bir canlının ölümü, aslında bu direncin bitmesi ve derişimlerin eşitlenmesidir.`,
          },
          {
            id: 'at-giris-note',
            type: 'teacher_note',
            tone: 'note',
            body: 'Bu bölümdeki iki taşıma biçimi de (aktif taşıma ve toplu taşıma) ATP harcar. Ortak noktaları bu; farkları taşınan şeyin büyüklüğünde.',
          },
          {
            id: 'at-giris-audio',
            type: 'audio_script',
            body: `Bu derse bir çelişkiyle başlıyoruz.

İki bölümdür şunu öğrendin: madde çoktan aza gider. Şimdi sana şunu söylüyorum — deniz yosununun içindeki iyot, deniz suyundakinin bin katı.

Bir saniye dur ve düşün: bu nasıl olabilir?

Pasif taşımayla olamaz. Pasif taşıma en fazla iki tarafı eşitler.

Demek ki hücrenin başka bir yolu var. Bu bölümde o yolu göreceğiz — ve göreceksin ki bedava değil.

Şunu aklında tut: canlılık, dengesizliği korumaktır. Her şeyin eşitlendiği an, canlının bittiği andır.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'at-aktif',
        kind: 'build',
        title: 'Aktif taşıma: derişime karşı, ATP ile',
        lead: 'Pasif taşımadan tek bir şeyle ayrılır — ama o tek şey her şeyi değiştirir.',
        blocks: [
          {
            id: 'at-aktif-concept',
            type: 'concept',
            term: 'Aktif taşıma',
            body: `Maddenin, **az olduğu yerden çok olduğu yere** — yani derişim farkına karşı — taşınmasıdır.

İki zorunlu koşulu vardır:
- **ATP harcanır.** Derişim farkına karşı gitmek enerji ister.
- **Taşıyıcı protein kullanılır.** Enerjiyi kullanıp şekil değiştirerek maddeyi karşıya geçiren yapı budur.

Pasif taşımayla karşılaştırınca sadece iki fark var: ==yön== ve ==enerji==. Protein kullanımı ortak (kolaylaştırılmış difüzyonda da vardı), özgüllük ortak, doygunluk ortak.

Bu yüzden aktif taşımayı ayırt etmenin en kesin yolu şu soruyu sormaktır: **madde hangi yöne gidiyor?**`,
          },
          {
            id: 'at-aktif-figure',
            type: 'figure',
            kind: 'aktif-tasima-pompa',
            width: 'full',
            title: 'Sodyum–potasyum pompası',
            purpose:
              'Aktif taşımanın “derişime karşı” tanımını somut bir örnekte, ok yönleri ile derişim durumunu yan yana koyarak göstermek.',
            complexity: 'high',
            caption:
              'Okların yönüne ve yanlarındaki yazılara birlikte bak: sodyum ==zaten dışarıda çokken== yine dışarı, potasyum ==zaten içeride çokken== yine içeri taşınıyor. Aktif taşımanın tanımı tam olarak bu terslik.',
            focus: [
              {
                title: 'Derişime karşı taşıma',
                body: 'Hücre dışında sodyum, hücre içinde potasyum zaten daha derişiktir. Pompa her ikisini de bu farkı **daha da artıracak** yönde taşır. Pasif taşımayla bu mümkün değildir; olay ancak enerji harcanarak gerçekleşir.',
              },
              {
                title: 'Pompa proteini',
                body: 'Zarı boydan boya geçen bir taşıyıcı protein. ATP’den aldığı enerjiyle şekil değiştirir: bir konumda sodyumu bağlar, diğer konumda potasyumu. Enzimler gibi özgüldür ve doygunluk gösterir.',
              },
              {
                title: 'ATP maliyeti',
                body: 'Her döngüde **3 sodyum dışarı, 2 potasyum içeri** taşınır ve **1 ATP** harcanır. Sinir hücresi gibi dokularda hücrenin ürettiği ATP’nin önemli bir kısmı yalnızca bu pompaya gider.',
              },
            ],
            audio_script: `Şemaya bakarken tek bir şeye dikkat et: okların yönü ile yanlarındaki yazılar birbirine ters.

Önce sol üstteki yazıyı oku: sodyum zaten dışarıda çok.

Şimdi kırmızı okları takip et. Nereye gidiyorlar? Yukarı, yani dışarı.

Bir saniye dur ve düşün: zaten dışarıda çokken neden yine dışarı taşınıyor?

Çünkü bu aktif taşıma. Derişim farkını azaltmıyor, artırıyor.

Aynı şeyi potasyum için de yap. Sol alttaki yazı: potasyum zaten içeride çok. Mavi oklar nereye gidiyor? Aşağı, yani içeri.

İkisi de zaten çok olduğu tarafa gidiyor. Bu yüzden sağdaki ATP kutusu var.

Ve sayılara dikkat et: üç sodyum dışarı, iki potasyum içeri, bir ATP. Bu oran sınavda doğrudan sorulabiliyor.`,
          },
          {
            id: 'at-aktif-trap',
            type: 'trap',
            title: '“Aktif taşıma hep hücreye madde alır” sanmak',
            wrong: '“Aktif taşıma hücrenin ihtiyacı olan maddeyi içeri alması demektir” diye düşünmek.',
            right:
              'Aktif taşımanın yönü **içeri veya dışarı** olabilir; belirleyici olan yön değil, ==derişim farkına karşı olmasıdır==. Sodyum–potasyum pompasında sodyum dışarı, potasyum içeri taşınır — ikisi de aktif taşımadır.',
            body: 'Sınavda ayırt edici soru şu: madde kendi derişim farkını azaltıyor mu, artırıyor mu? Artırıyorsa aktiftir.',
          },
          {
            id: 'at-aktif-example',
            type: 'example',
            title: 'Nerelerde karşına çıkacak?',
            body: `Aktif taşıma, biyolojinin ilerleyen konularında sürekli geri gelecek:

- **Bitki kökleri:** Topraktaki mineral derişimi düşük olmasına rağmen kök hücreleri mineralleri içeri alır.
- **Böbrek:** Süzülen glikoz ve amino asitler, kana geri kazandırılır. Bu geri emilimin bir kısmı aktif taşımadır.
- **İnce bağırsak:** Besin derişimi kanda daha yüksek olsa bile emilim sürer.
- **Sinir hücresi:** Uyartının iletilmesi için gereken iyon farkı sodyum–potasyum pompasıyla korunur.

Dördü de aynı mantık: ==hücre, doğal akışa karşı bir dengesizlik kuruyor ve bunu ATP ile finanse ediyor.==`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'at-toplu',
        kind: 'build',
        title: 'Toplu taşıma: zardan geçemeyecek kadar büyük olanlar',
        lead: 'Şimdiye kadar tek tek moleküllerden söz ettik. Peki bir bakteriyi ya da protein topağını hücre nasıl alır?',
        blocks: [
          {
            id: 'at-toplu-prose',
            type: 'prose',
            body: `Zardan geçiş, ister pasif ister aktif olsun, ==molekül düzeyinde== gerçekleşir. Bir molekül ya lipit tabakadan sızar ya da bir proteinin içinden geçer.

Ama bazı maddeler bunların hiçbiriyle geçemeyecek kadar büyüktür: proteinler, polisakkaritler, hatta bütün bir bakteri hücresi.

Hücre bu durumda zarı bir taşıma aracı gibi kullanır: zarı ==kıvırarak veya kaynaştırarak== maddeyi toplu hâlde alır ya da verir. Buna **toplu taşıma** (endositoz ve ekzositoz) denir.

Zarın şekil değiştirmesi enerji gerektirir; bu yüzden toplu taşıma da ==ATP harcayan== bir olaydır.`,
          },
          {
            id: 'at-toplu-figure',
            type: 'figure',
            kind: 'toplu-tasima',
            width: 'full',
            title: 'Endositoz ve ekzositoz',
            purpose:
              'İki olayın aşamalarını ve en çok kaçırılan ayrıntıyı — zar yüzeyindeki değişimi — göstermek.',
            complexity: 'medium',
            caption:
              'Aşamaları takip ederken zarın kendisine dikkat et. Endositozda zarın bir parçası ==koful olarak içeri gidiyor== (yüzey azalır); ekzositozda kofulun zarı ==hücre zarına ekleniyor== (yüzey artar).',
            focus: [
              {
                title: 'Endositoz',
                body: 'Alınacak madde zara yaklaşır, zar o bölgede içeri çöker ve maddeyi sararak bir koful oluşturur. Katı maddeler alınıyorsa **fagositoz**, sıvı alınıyorsa **pinositoz** denir. Akyuvarların bakteri yutması fagositoza örnektir.',
              },
              {
                title: 'Ekzositoz',
                body: 'Golgi’den gelen salgı kofulu hücre zarına yaklaşır, zarla kaynaşır ve içeriğini dışarı boşaltır. Hormon salgılanması, sindirim enzimlerinin salınması ve sindirilemeyen atıkların atılması bu yolla olur.',
              },
              {
                title: 'ATP maliyeti',
                body: 'Her iki olay da zarın bükülmesini, kopmasını veya kaynaşmasını gerektirir. Bu şekil değişikliklerinin tamamı enerji ister — bu yüzden toplu taşıma **hiçbir koşulda pasif değildir**.',
              },
            ],
            audio_script: `Bu şemada iki dizi var, her biri üç aşamalı. Ama asıl bakman gereken şey aşamalar değil, sağdaki yazılar.

Üst diziye bak. Endositoz. Madde yaklaşıyor, zar içeri çöküyor, koful oluşuyor.

Şimdi durup şunu düşün: o koful neyden yapıldı?

Hücre zarından. Zarın bir parçası koparıldı ve içeri gitti. Yani hücre zarının yüzeyi azaldı.

Sağdaki kırmızı yazı bunu söylüyor: zar yüzeyi azalır.

Şimdi alt diziye geç. Ekzositoz. Koful zara geliyor, kaynaşıyor, içerik dışarı çıkıyor.

Kofulun zarı nereye gitti? Hücre zarına eklendi. Yani yüzey arttı.

Yeşil yazı: zar yüzeyi artar.

Bu ayrımı iyi kur. Sınavda "endositoz sonrası hücre zarının yüzey alanı nasıl değişir?" diye sorulduğunda cevabı buradan vereceksin.`,
          },
          {
            id: 'at-toplu-compare',
            type: 'compare',
            title: 'Endositoz ve ekzositoz',
            columns: ['Endositoz', 'Ekzositoz'],
            rows: [
              { label: 'Yön', values: ['Dışarıdan içeri', 'İçeriden dışarı'] },
              { label: 'Zar yüzeyi', values: ['**Azalır**', '**Artar**'] },
              { label: 'ATP', values: ['Harcanır', 'Harcanır'] },
              { label: 'Alt türleri', values: ['Fagositoz (katı) · Pinositoz (sıvı)', 'Alt türü yoktur'] },
              { label: 'Örnek', values: ['Akyuvarın bakteri yutması', 'Hormon ve enzim salgılanması'] },
            ],
            insight:
              'İki olay birbirinin tersi gibi görünüyor ama bir noktada ayrılıyorlar: ==ekzositozun alt türü yoktur==. Sebebi basit — dışarı verilen madde koful içindedir ve katı mı sıvı mı olduğu zarın davranışını değiştirmez. Endositozda ise alınacak maddenin hâli, zarın nasıl kıvrılacağını belirler.',
          },
          {
            id: 'at-toplu-prose2',
            type: 'prose',
            body: `Endositozun iki alt türü arasındaki fark, alınan maddenin hâlidir:

- **Fagositoz** ("hücre yeme"): Katı ve büyük parçalar alınır. Zar, maddenin çevresini yalancı ayaklarla sararak içeri alır. Akyuvarların bakteri yutması ve amibin besin alması bu yolla olur.
- **Pinositoz** ("hücre içme"): Sıvı ve içindeki çözünmüş maddeler alınır. Zar küçük bir cepçik oluşturur; oluşan koful fagositozdakinden çok daha küçüktür.

İkisi de aynı mekanizmayla çalışır, aynı enerjiyi harcar. Ayrım sınavda ==alınan maddenin katı mı sıvı mı olduğuna== bakılarak yapılır.

Hücreye alınan madde koful içindeyken henüz kullanılabilir değildir. Sindirilmesi gerekir — ve bunu yapan organel **lizozomdur**. Bir sonraki bölümde lizozomu incelerken bu bağlantıya döneceğiz.`,
          },
          {
            id: 'at-toplu-trap',
            type: 'trap',
            title: 'Bitki hücresinde endositoz aramak',
            wrong: '“Bütün hücrelerde endositoz görülür” demek.',
            right:
              'Bitki hücresinin dışında sert bir **hücre duvarı** vardır ve bu duvar zarın içeri çökmesine izin vermez. Bu yüzden bitki hücrelerinde ve hücre duvarı taşıyan diğer canlılarda (mantar, bakteri) ==endositoz görülmez==.',
            body:
              'Bir önceki bölümde duvarın hücreyi patlamaktan koruduğunu görmüştün. Aynı sertlik burada bir kısıt olarak karşımıza çıkıyor: ==her avantajın bir bedeli var==.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'at-toparlama',
        kind: 'deepen',
        title: 'Dört taşıma biçimi tek tabloda',
        lead: 'Konu üç derse yayıldı. Şimdi hepsini yan yana koyup çerçeveyi kapatalım.',
        blocks: [
          {
            id: 'at-top-table',
            type: 'table',
            title: 'Zardan madde geçişinin tamamı',
            columns: ['Taşıma biçimi', 'Yön', 'ATP', 'Protein', 'Geçen madde'],
            rows: [
              ['Basit difüzyon', 'Çoktan aza', 'Yok', 'Yok', 'Küçük, kutupsuz (O₂, CO₂)'],
              ['Kolaylaştırılmış difüzyon', 'Çoktan aza', 'Yok', 'Var', 'Kutuplu moleküller, iyonlar'],
              ['Osmoz', 'Çoktan aza (su için)', 'Yok', 'Kanal (akuaporin) olabilir', 'Yalnızca su'],
              ['Aktif taşıma', '**Azdan çoğa**', '**Var**', 'Var', 'İyonlar, glikoz, amino asit'],
              ['Endositoz / Ekzositoz', 'Toplu hâlde', '**Var**', 'Zarın kendisi', 'Çok büyük moleküller, hücreler'],
            ],
            caption:
              'Tabloyu ezberleme; **iki soruyla** yeniden üretebilirsin: *Madde hangi yöne gidiyor?* (ATP’yi belirler) ve *Madde kutuplu/büyük mü?* (protein gerekip gerekmediğini belirler).',
          },
          {
            id: 'at-top-checkpoint',
            type: 'checkpoint',
            prompt:
              'Bir hücrede oksijen tüketimi ilaçla tamamen durduruluyor. Yukarıdaki beş taşıma biçiminden hangileri devam eder, hangileri durur?',
            hint: 'Oksijen tüketimi durunca hangi molekülün üretimi aksar? Hangi taşımalar ona bağlı?',
            answer: `Oksijen tüketiminin durması, oksijenli solunumun durması demektir. Bu da ==ATP üretiminin büyük ölçüde azalması== anlamına gelir.

**Devam edenler:** basit difüzyon, kolaylaştırılmış difüzyon ve osmoz. Üçü de ATP harcamaz; enerjiyi derişim farkından alırlar. Hücre ölse bile bir süre daha devam ederler.

**Duranlar:** aktif taşıma ve toplu taşıma (endositoz/ekzositoz). İkisi de ATP’ye bağlıdır.

Bir ayrıntı: hücre glikolizle az miktarda ATP üretmeye devam edebilir, bu yüzden aktif taşıma bir anda değil kademeli olarak yavaşlar. Ama uzun vadede duracaktır.

Buradaki asıl ders şu: ==pasif taşımalar hücrenin canlılığına bağlı değildir==, aktif olanlar bağlıdır. Ölü bir hücrede difüzyon görülür, aktif taşıma görülmez.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'at-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Aşağıdaki sorular bu bölümün üç kritik ayrımını hedefliyor.',
        blocks: [
          {
            id: 'at-uyg-worked',
            type: 'worked_example',
            title: 'Deney verisinden taşıma biçimini bulma',
            prompt:
              'Bir araştırmacı, X maddesinin hücreye giriş hızını üç farklı koşulda ölçüyor:\n\n**(1)** Normal koşullarda hız yüksek.\n**(2)** Ortama solunum zehiri eklenip ATP üretimi durdurulduğunda hız çok düşüyor.\n**(3)** Madde derişimi sürekli artırıldığında hız bir noktadan sonra sabitleniyor.\n\nX maddesi hangi yolla taşınmaktadır ve her gözlem bunu nasıl destekliyor?',
            steps: [
              {
                title: 'İkinci gözlemi yorumla — ATP bağımlılığı',
                body: 'ATP üretimi durunca hız düşüyorsa taşıma ATP’ye bağlıdır. Bu tek başına basit difüzyonu, kolaylaştırılmış difüzyonu ve osmozu **eler**; çünkü üçü de pasiftir ve ATP olmadan da sürer.',
              },
              {
                title: 'Üçüncü gözlemi yorumla — doygunluk',
                body: 'Hızın tavana vurması, sınırlı sayıda bir yapının doyduğunu gösterir. Bu yapı **taşıyıcı proteindir**. Yani madde zardan doğrudan sızmıyor, bir proteinden geçiyor.',
              },
              {
                title: 'İki gözlemi birleştir',
                body: 'ATP gerekiyor **ve** taşıyıcı protein kullanılıyor. Bu ikisi birlikte yalnızca **aktif taşımada** bulunur.',
              },
              {
                title: 'Toplu taşıma ihtimalini ele',
                body: 'Endositoz da ATP harcar, ama orada madde koful içinde toplu hâlde alınır ve taşıyıcı protein doygunluğu görülmez. Üçüncü gözlemdeki doygunluk, olayın **molekül düzeyinde ve proteinle** gerçekleştiğini söylüyor.',
              },
            ],
            answer:
              'X maddesi aktif taşımayla alınmaktadır. ATP bağımlılığı taşımanın aktif olduğunu, doygunluk ise taşıyıcı protein kullanıldığını gösterir.',
            takeaway:
              'Bu soru tipinde her gözlem **bir ihtimali eler**. Tek bir gözlemle karar verme: doygunluk tek başına aktif taşımayı kanıtlamaz (kolaylaştırılmış difüzyonda da vardır), ATP bağımlılığı tek başına protein kullanıldığını göstermez (endositoz da ATP harcar). ==Kesin sonuç, gözlemlerin kesişiminden çıkar.==',
          },
          {
            id: 'at-uyg-quiz1',
            type: 'quiz',
            purpose: 'concept',
            question:
              'Bir maddenin hücre zarından aktif taşımayla geçtiğini gösteren **en kesin** kanıt aşağıdakilerden hangisidir?',
            options: [
              'Taşınma sırasında taşıyıcı protein kullanılması',
              'Taşınmanın belirli bir derişimden sonra hızının sabitlenmesi',
              'Maddenin az olduğu ortamdan çok olduğu ortama geçmesi',
              'Maddenin kutuplu bir molekül olması',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Aktif taşımayı diğerlerinden ayıran tek kesin ölçüt **yöndür**: derişim farkına karşı geçiş yalnızca aktif taşımada görülür.

Diğerleri neden kesin kanıt değil:
- **A:** Kolaylaştırılmış difüzyonda da protein kullanılır.
- **B:** Doygunluk da hem kolaylaştırılmış difüzyonda hem aktif taşımada görülür — protein kullanıldığını gösterir, ATP’yi değil.
- **D:** Kutupluluk protein gerekliliğini belirler, yönü değil.

Bu soru tipi, ortak özelliklerle ayırt edici özelliği karıştırmanı ister. ==Ayırt edici olan yön.==`,
          },
          {
            id: 'at-uyg-quiz2',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Bir akyuvar, bir bakteriyi fagositozla içine alıyor. Bu olay sırasında akyuvarda aşağıdakilerden hangisi gözlenir?',
            options: [
              'Hücre zarının yüzey alanı artar',
              'Hücre zarının yüzey alanı azalır',
              'ATP harcanmaz, çünkü madde kendiliğinden içeri alınır',
              'Bakteri, taşıyıcı proteinlerden geçirilir',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Fagositozda zarın bir parçası içeri çökerek koful oluşturur ve bu parça hücre zarından ayrılır — dolayısıyla **zar yüzeyi azalır**.

- **A yanlış:** Yüzeyin artması ekzositozda görülür.
- **C yanlış:** Zarın bükülmesi ve kopması ATP gerektirir; toplu taşıma hiçbir koşulda pasif değildir.
- **D yanlış:** Bakteri bir taşıyıcı proteinden geçemeyecek kadar büyüktür; zaten toplu taşımanın var olma sebebi budur.

Kolay hatırlatıcı: ==madde içeri girerken zar da onunla birlikte içeri gider.==`,
          },
          {
            id: 'at-uyg-quiz3',
            type: 'quiz',
            purpose: 'error',
            question: 'Bitki hücresi ile ilgili aşağıdakilerden hangisi **doğrudur**?',
            options: [
              'Hücre duvarı sayesinde endositozu daha kolay gerçekleştirir',
              'Hücre duvarı nedeniyle endositoz görülmez',
              'Aktif taşıma yapamaz, çünkü hücre duvarı geçirgen değildir',
              'Ekzositoz yapamaz, çünkü koful oluşturamaz',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Sert selüloz duvar, hücre zarının içeri çökmesine izin vermez; bu yüzden bitki hücrelerinde **endositoz görülmez**.

- **A yanlış:** Duvar kolaylaştırmaz, tam tersine engeller.
- **C yanlış:** Hücre duvarı **tam geçirgendir**; seçici olan hücre zarıdır. Bitki hücresi aktif taşıma yapabilir — kök hücrelerinin mineral alması buna örnektir.
- **D yanlış:** Bitki hücresi koful oluşturabilir ve ekzositoz yapabilir; hücre duvarı maddesi zaten bu yolla dışarı salgılanır.

C seçeneğindeki ayrım önemli: ==duvar tam geçirgen, zar seçici geçirgendir.==`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'at-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Bu, zardan madde geçişi konusunun sonu. Üç bölümü birlikte kapatıyoruz.',
        blocks: [
          {
            id: 'at-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Aktif taşıma, maddenin **azdan çoğa** — derişim farkına karşı — taşınmasıdır.',
              'Aktif taşımada hem **ATP** hem **taşıyıcı protein** zorunludur.',
              'Aktif taşımayı ayırt eden tek kesin ölçüt **yöndür**; protein ve doygunluk kolaylaştırılmış difüzyonda da vardır.',
              'Sodyum–potasyum pompası her döngüde **3 Na⁺ dışarı, 2 K⁺ içeri** taşır ve **1 ATP** harcar.',
              'İki iyon da zaten çok oldukları tarafa taşınır — pompanın aktif olmasının sebebi budur.',
              'Toplu taşıma, zardan geçemeyecek kadar büyük maddeler içindir ve **ATP harcar**.',
              'Endositozda zar yüzeyi **azalır**; ekzositozda **artar**.',
              'Endositozun iki alt türü vardır (fagositoz, pinositoz); ekzositozun alt türü yoktur.',
              'Bitki hücresinde **endositoz görülmez** — hücre duvarı zarın içeri çökmesine izin vermez.',
              'Hücre duvarı **tam geçirgendir**; seçici geçirgen olan hücre zarıdır.',
            ],
          },
          {
            id: 'at-kap-memory',
            type: 'memory',
            body:
              'Her taşıma sorusunu iki soruyla çöz: *Hangi yöne gidiyor?* → ATP’yi belirler. *Kutuplu mu, büyük mü?* → protein veya koful gerekip gerekmediğini belirler. Üçüncü bir soruya nadiren ihtiyaç duyarsın.',
          },
          {
            id: 'at-kap-next',
            type: 'next_step',
            body: `Zarı bitirdik. Sıradaki bölümde zarın içine giriyoruz: **sitoplazma ve organeller**.

Orada bu üç bölümde öğrendiklerin geri gelecek. Golgi’den çıkan salgı kofulunun zarla kaynaşması ekzositozdur; lizozomun içine madde alması endositozla başlar; mitokondrinin iç zarı da aynı seçici geçirgenlik kurallarına uyar.`,
            topics: ['Sitoplazma ve organeller', 'Çekirdek ve hücre tipleri'],
          },
          {
            id: 'at-kap-audio',
            type: 'audio_script',
            body: `Bölüm bitti. Üç kontrol yap.

Bir: aktif taşımayı ayıran kesin ölçüt ne? Yön diyebiliyorsan tamam.

İki: endositozda zar yüzeyi artar mı azalır mı? Azalır diyebiliyorsan tamam.

Üç: bitki hücresinde endositoz görülür mü? Görülmez, çünkü hücre duvarı zarın içeri çökmesine izin vermez diyebiliyorsan tamam.

Üçüne de cevap verebiliyorsan zardan madde geçişi konusunu bitirdin. Şimdi hücrenin içine giriyoruz.`,
          },
        ],
      },
    ],
  },
}
