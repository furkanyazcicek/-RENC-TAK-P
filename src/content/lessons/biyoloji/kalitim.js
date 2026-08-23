/**
 * TYT BİYOLOJİ · KALITIM
 * Kalıtımı oran ezberinden çıkarıp kromozom → gamet → olasılık hattında kurar.
 */

export default {
  slug: 'kalitim',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Kalıtım',
  },
  order: 1,
  partLabel: '1. Bölüm',
  goldStandard: true,
  title: 'Kalıtım: Alelden Soy Ağacına',
  subtitle:
    'Oranları ezberleme. Önce kromozomu, sonra gameti, en son olasılığı kur: çaprazlama, kan grubu ve soy ağacı soruları aynı mantığın farklı yüzleridir.',

  document: {
    version: 1,
    estimated_minutes: 55,
    prerequisites: [
      {
        topic: 'Nükleik Asitler',
        why: 'Genin DNA üzerinde bilgi taşıyan bir bölge olduğunu ve bu bilginin protein üzerinden fenotipe yansıdığını kullanacağız.',
      },
      {
        topic: 'Mayoz ve Eşeyli Üreme',
        why: 'Alel çiftlerinin gametlere ayrılması ve bağımsız dağılım, mayozdaki homolog kromozom davranışının sonucudur.',
      },
    ],
    outcomes: [
      'Gen, alel, lokus, homolog kromozom, genotip ve fenotip kavramlarını ilişkilendirebileceksin.',
      'Bir bireyin genotipinden gamet çeşitlerini çıkarıp mono ve dihibrit çaprazlama yapabileceksin.',
      'Genotip ve fenotip oranlarını birbirine karıştırmadan hesaplayabileceksin.',
      'Kontrol çaprazlamasının bilinmeyen genotipi nasıl sınadığını açıklayabileceksin.',
      'ABO ve Rh sistemlerinde genotip–fenotip dönüşümü yapabileceksin.',
      'Soy ağacında otozomal çekinik ve X’e bağlı çekinik kalıtıma ilişkin zorunlu çıkarımlar yapabileceksin.',
    ],

    sections: [
      {
        id: 'kal-giris',
        kind: 'opening',
        title: 'Kalıtım bir harf oyunu değil',
        lead: 'A ve a yalnız birer etikettir. Asıl olay, homolog kromozomların mayozda ayrılması ve döllenmede yeniden çift oluşturmasıdır.',
        blocks: [
          {
            id: 'kal-giris-prose',
            type: 'prose',
            body: `**Kalıtım**, biyolojik özelliklerin genetik bilgi aracılığıyla kuşaklar arasında aktarılmasıdır. Fakat “çocuk annesine benzedi” cümlesi tek başına kalıtım mekanizmasını açıklamaz. Soruyu çözebilmek için dört basamağı birbirine bağlamalısın:

1. Gen hangi kromozomda ve hangi **lokusta**?
2. Birey o gen için hangi iki **aleli** taşıyor?
3. Mayozda bu aleller hangi **gametlere** ayrılıyor?
4. Döllenmede gametler hangi olasılıklarla birleşiyor?

Kalıtım sorularının büyük bölümü bu dört basamakta çözülür. Punnett karesi yalnız üçüncü ve dördüncü basamağı düzenleyen bir araçtır; düşünmenin yerine geçmez.

Bir sınav sorusuna başlarken ilk refleksin oran hatırlamak değil, ==ebeveynlerin genotipini ve oluşturabilecekleri gametleri yazmak== olmalı.`,
          },
          {
            id: 'kal-giris-model',
            type: 'exam',
            title: 'Sorunun verdiği modeli önce ilan et',
            body: `TYT soruları çoğunlukla tek gen–iki alel ve tam baskınlık modelini kullanır; fakat soru eş baskınlık, çok alellilik veya X'e bağlı kalıtım söylediğinde sembollerin anlamı değişir. Bu yüzden çözüm kâğıdının ilk satırına modeli yaz: **“tam baskınlık”**, **“ABO”** ya da **“X'e bağlı çekinik”**.

Sonra fenotipten genotipe giderken kesin olanla olası olanı ayır. Çekinik fenotip tek genli tam baskınlıkta genotipi kesinleştirir: birey aa'dır. Baskın fenotip ise iki olasılık bırakır: AA veya Aa. Soruda yeterli bilgi yoksa bu iki seçeneği keyfine göre teke indirme. Kalıtımda doğru çözüm yalnız işlem yapmak değil, hangi çıkarımın **zorunlu**, hangisinin yalnız **mümkün** olduğunu bilmektir.`,
          },
          {
            id: 'kal-giris-trap',
            type: 'trap',
            title: '“Baskın”ı güçlü, iyi veya yaygın sanmak',
            wrong: 'Baskın alelin çekinik aleli yok ettiğini veya popülasyonda daha çok bulunduğunu düşünmek.',
            right:
              'Baskınlık yalnız **heterozigot genotipte hangi fenotipin görüldüğünü** söyler. Çekinik alel DNA’da durur ve gametlere aktarılır. Baskın bir özellik seyrek, çekinik bir özellik yaygın olabilir.',
            body:
              'Ayrıca baskın özellik “sağlıklı”, çekinik özellik “hastalık” demek değildir. Kalıtım gösterimi bir değer yargısı değil, aleller arası fenotip ilişkisidir.',
          },
          {
            id: 'kal-giris-audio',
            type: 'audio_script',
            body: `Kalıtımda öğrencilerin yaptığı ilk hata şu: daha soruyu okumadan üçe bir oranını arıyorlar.

Dur. Önce birey hangi alelleri taşıyor, sonra hangi gametleri üretiyor? Bunları yazmadan hiçbir oran güvenli değil.

Bu derste A ve a harflerini ezberlemeyeceğiz. O harflerin kromozom üzerinde nerede durduğunu, mayozda nasıl ayrıldığını ve yavruda nasıl yeniden çift olduğunu göreceğiz. Bunu kurunca kan grubu ve soy ağacı da aynı mantığa bağlanacak.`,
          },
        ],
      },

      {
        id: 'kal-kavramlar',
        kind: 'build',
        title: 'Kromozomdan fenotipe dört durak',
        lead: 'Gen, alel, genotip ve fenotip aynı şey değildir; birbirinin devamıdır.',
        blocks: [
          {
            id: 'kal-kavram-figure',
            type: 'figure',
            kind: 'kalitim-kavram-haritasi',
            width: 'full',
            title: 'Aynı lokustan gözlenen özelliğe',
            purpose:
              'Kalıtım kavramlarını ayrı tanımlar olarak değil, homolog kromozomdan protein ürününe uzanan tek neden–sonuç hattında kurmak.',
            complexity: 'high',
            caption:
              'Ana levhada bilgi akışını izle. Her maddeye dokunduğunda, kavramın yalnız büyütülmüş hâli değil biyolojik mekanizması açılır.',
            focus: [
              {
                title: 'Lokus ve homolog kromozom',
                body: 'Homolog kromozomların biri anneden, biri babadan gelir. Uzunlukları, sentromer konumları ve taşıdıkları genlerin lokusları benzerdir. **Aynı gen aynı lokustadır**; fakat o genin DNA dizisi farklı bir alel olabilir.',
              },
              {
                title: 'Alel ve baskınlık',
                body: 'Alel, aynı karaktere etki eden genin alternatif biçimidir. A ile a aynı genin iki alelini gösterir. Tam baskınlıkta Aa birey baskın fenotipi gösterir; bu, a alelinin kaybolduğu anlamına gelmez.',
              },
              {
                title: 'Genotip',
                body: 'Bir gen için alel bileşimi genotiptir. **AA ve aa homozigot**, **Aa heterozigot**tur. Büyük harfi anneden veya babadan gelene göre yazmayız; büyük harf baskın alelin sembolüdür.',
              },
              {
                title: 'Fenotip',
                body: 'Renk, kan grubu veya bir enzimin çalışması gibi gözlenebilen sonuç fenotiptir. Fenotip çoğu özellikte **genotip ile çevrenin etkileşimidir**. Aynı fenotip her zaman aynı genotipi kanıtlamaz.',
              },
            ],
            audio_script: `Bu levhayı soldan sağa oku.

İlk durak lokus: homolog kromozomların aynı noktasında aynı gen var.

İkinci durak alel: o genin DNA dizisi iki kromozomda aynı ya da farklı olabilir.

Üçüncü durak genotip: bireyin taşıdığı iki aleli birlikte yazıyoruz.

Dördüncü durak fenotip: bu alellerin ürünleri ve çevre birleşiyor, gözlediğimiz özellik ortaya çıkıyor.

Kritik cümle şu: aynı fenotipe bakıp genotipi her zaman tek seçenek olarak yazamazsın. Baskın fenotip AA da olabilir, Aa da.`,
          },
          {
            id: 'kal-kavram-table',
            type: 'table',
            title: 'Kalıtım sözlüğü — karıştırmadan',
            columns: ['Kavram', 'Doğru anlam', 'Örnek / sınav notu'],
            rows: [
              ['Karakter', 'Kalıtılabilen genel özellik', 'Tohum rengi'],
              ['Özellik', 'Karakterin belirli görünümü', 'Sarı tohum'],
              ['Gen', 'DNA üzerindeki işlevsel bilgi bölgesi', 'Pigment üretimini etkileyen gen'],
              ['Alel', 'Aynı genin alternatif biçimi', 'A veya a'],
              ['Lokus', 'Genin kromozomdaki konumu', 'Homologlarda aynı konum'],
              ['Genotip', 'Bireyin alel bileşimi', 'AA, Aa, aa'],
              ['Fenotip', 'Gözlenen sonuç', 'Tam baskınlıkta AA ve Aa aynı görünebilir'],
            ],
            caption:
              '“Karakter–özellik” ve “gen–alel” ikilileri bilinçli olarak karıştırılır. Karakter başlıktır, özellik onun seçeneğidir; gen bilgi bölgesidir, alel o bölgenin varyantıdır.',
          },
        ],
      },

      {
        id: 'kal-mendel',
        kind: 'deepen',
        title: 'Çaprazlamanın motoru: gamet',
        lead: 'Yavru genotipini doğrudan ebeveynden kopyalamaz; her ebeveynden birer gamet alır.',
        blocks: [
          {
            id: 'kal-mendel-figure',
            type: 'figure',
            kind: 'mendel-caprazlama',
            width: 'full',
            title: 'Genotipten yavru olasılığına',
            purpose:
              'Ayrılma ilkesi, Punnett karesi, kontrol çaprazlaması ve bağımsız dağılımı aynı kromozom–gamet mantığıyla göstermek.',
            complexity: 'high',
            caption:
              'Oran son duraktır. Önce ebeveyn genotipi, sonra gamet çeşitleri, en son döllenme olasılıkları gelir.',
            focus: [
              {
                title: 'Ayrılma ilkesi: gametleri yaz',
                body: 'Aa birey mayozla iki gamet çeşidi üretir: A ve a. Her gamet, homolog çiftin yalnız bir üyesini taşır. AA yalnız A, aa yalnız a gameti oluşturur. Tek gen için gamet olasılıkları bu ayrılmadan doğar.',
              },
              {
                title: 'Punnett karesi: olasılık tablosu',
                body: 'Aa × Aa çaprazlamasında dört eş olasılıklı birleşme vardır: AA, Aa, Aa, aa. **Genotip oranı 1:2:1**, tam baskınlıkta **fenotip oranı 3:1** olur. Eksik baskınlık veya eş baskınlıkta fenotip de 1:2:1 olabilir.',
              },
              {
                title: 'Kontrol çaprazlaması',
                body: 'Baskın fenotipli bir bireyin AA mı Aa mı olduğunu sınamak için aa ile çaprazlanır. Çekinik fenotipli yavru görülmesi, bilinmeyen bireyin a aleli taşıdığını ve **Aa olduğunu kesinleştirir**.',
              },
              {
                title: 'Bağımsız genlerde çarpma kuralı',
                body: 'AaBb birey, genler bağımsızsa dört gamet üretir: AB, Ab, aB, ab. İki sonucun birlikte olasılığı çarpılır. 9:3:3:1 oranını yalnız “iki karakter var” diye kullanma; bağımsızlık ve tam baskınlık koşullarını kontrol et.',
              },
            ],
          },
          {
            id: 'kal-mendel-worked',
            type: 'worked_example',
            title: 'AaBb × Aabb çaprazlamasında aabb olasılığı',
            prompt:
              'A ve B genleri farklı kromozom çiftlerinde ve tam baskın. **AaBb × Aabb** çaprazlamasında aabb genotipli yavru oluşma olasılığı nedir?',
            steps: [
              {
                title: 'A lokusunu tek başına çöz',
                body: 'Aa × Aa çaprazlamasında aa olasılığı **1/4**tür.',
              },
              {
                title: 'B lokusunu tek başına çöz',
                body: 'Bb × bb çaprazlamasında bb olasılığı **1/2**dir.',
              },
              {
                title: 'Bağımsız olayları çarp',
                body: 'Genler bağımsız olduğuna göre iki koşulun aynı yavruda gerçekleşme olasılığı: 1/4 × 1/2 = **1/8**.',
              },
              {
                title: 'Sonucu kontrol et',
                body: 'aabb yavru, her iki ebeveynden de a; B lokusunda ise ilk ebeveynden b ve ikinci ebeveynden zorunlu b almalıdır. Çarpma mantığı bu gerekliliklerle uyumludur.',
              },
            ],
            answer: 'aabb olasılığı **1/8**, yani %12,5’tir.',
            takeaway:
              'Bağımsız gen sorusunda 16 kutuluk tablo çizmek zorunda değilsin. Her lokusu ayrı çöz, “ve” bağlacında olasılıkları çarp.',
          },
          {
            id: 'kal-mendel-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Bir ailenin ilk çocuğunun çekinik olması, ikinci çocuğun olasılığını değiştirmez. Her döllenme yeni ve bağımsız bir olaydır; önceki çocuklar genotip torbasından alel tüketmez.',
          },
        ],
      },

      {
        id: 'kal-olasilik',
        kind: 'build',
        title: 'Olasılık: “ve” çarpılır, “veya” toplanır',
        lead: 'Büyük Punnett karelerini küçültmenin yolu, sorunun bağlacını görmektir.',
        blocks: [
          {
            id: 'kal-olasilik-prose',
            type: 'prose',
            body: `Kalıtım olasılığı iki temel kuralla hızlanır:

- **Birlikte gerçekleşecek bağımsız olaylar (“ve”) çarpılır.** Aa × Aa çaprazlamasında yavrunun *aa ve erkek* olma olasılığı: 1/4 × 1/2 = **1/8**.
- **Birbirini dışlayan alternatifler (“veya”) toplanır.** Yavrunun AA veya Aa olma olasılığı: 1/4 + 1/2 = **3/4**.

“En az bir” ifadesinde çoğu zaman tüm seçenekleri tek tek toplamak yerine **tümleyeni** kullanmak daha hızlıdır. Üç çocukta en az bir çekinik fenotip soruluyorsa önce hiç çekinik olmama olasılığını bulur, 1’den çıkarırsın.

Aa × Aa’da bir çocuğun baskın fenotipli olma olasılığı 3/4 ise üç çocuğun da baskın olması (3/4)³ = 27/64’tür. En az birinin çekinik olma olasılığı **1 − 27/64 = 37/64** olur.`,
          },
          {
            id: 'kal-olasilik-compare',
            type: 'compare',
            title: 'Hangi durumda hangi oran?',
            columns: ['Çaprazlama', 'Genotip oranı', 'Tam baskınlık fenotipi'],
            rows: [
              { label: 'AA × aa', values: ['Tümü Aa', 'Tümü Aa', 'Tümü baskın'] },
              { label: 'Aa × aa', values: ['1 Aa : 1 aa', '1:1', '1:1'] },
              { label: 'Aa × Aa', values: ['1 AA : 2 Aa : 1 aa', '1:2:1', '3:1'] },
              { label: 'AA × Aa', values: ['1 AA : 1 Aa', '1:1', 'Tümü baskın'] },
            ],
            insight:
              '3:1 yalnız **Aa × Aa ve tam baskınlık** durumunun fenotip oranıdır. Soruda eksik baskınlık, eş baskınlık, öldürücü alel veya farklı ebeveyn genotipi varsa oran değişir.',
          },
          {
            id: 'kal-olasilik-trap',
            type: 'trap',
            title: 'Gamet çeşidi ile gamet sayısını karıştırmak',
            wrong: 'AaBb birey dört çeşit gamet oluşturduğu için her mayozda dört gametin mutlaka AB, Ab, aB ve ab olduğunu düşünmek.',
            right:
              '2ⁿ kuralı **olası gamet çeşidi** sayısını verir; n heterozigot gen çifti sayısıdır ve genlerin bağımsız olduğu varsayılır. Tek bir mayozun ürünleri ile çok sayıda mayozdaki olası çeşitler aynı ifade değildir.',
            body:
              'AaBbCc için bağımsız genlerde 2³ = 8 gamet çeşidi mümkündür. Olasılık hesabında her biri 1/8 kabul edilir.',
          },
        ],
      },

      {
        id: 'kal-kan',
        kind: 'deepen',
        title: 'Çok alellilik ve eş baskınlık: ABO–Rh',
        lead: 'Bir birey iki alel taşır; fakat popülasyonda aynı genin ikiden fazla aleli bulunabilir.',
        blocks: [
          {
            id: 'kal-kan-figure',
            type: 'figure',
            kind: 'kan-grubu-kalitimi',
            width: 'full',
            title: 'Kan grubunda genotip, antijen ve uygunluk',
            purpose:
              'ABO ve Rh kalıtımını, alyuvar yüzeyindeki antijen üretimi ve antikorla karşılaşma mekanizmasına bağlamak.',
            complexity: 'high',
            caption:
              'Kalıtım ile transfüzyon uygunluğunu ayır: aleller antijeni belirler; alıcının antikoru yabancı antijenle karşılaşırsa aglütinasyon riski doğar.',
            focus: [
              {
                title: 'Üç alel, bireyde iki tanesi',
                body: 'ABO geni için popülasyonda Iᴬ, Iᴮ ve i alelleri bulunur. Bir diploit birey yalnız iki alel taşır. Iᴬ ve Iᴮ eş baskın; i her ikisine karşı çekiniktir. **Çok alellilik bireyin üç alel taşıması değildir.**',
              },
              {
                title: 'ABO genotip–fenotip eşleşmesi',
                body: 'A: IᴬIᴬ veya Iᴬi. B: IᴮIᴮ veya Iᴮi. AB: IᴬIᴮ. O: ii. A ve B fenotipleri iki genotiple, AB ve O fenotipleri tek genotiple açıklanır.',
              },
              {
                title: 'Antijen–antikor uygunluğu',
                body: 'A alyuvarı A antijeni, B alyuvarı B antijeni taşır; AB ikisini, O hiçbirini taşımaz. Alıcının antikoru yabancı antijeni çapraz bağlarsa aglütinasyon gelişebilir. Soruda alyuvar mı plazma mı verildiğine dikkat et.',
              },
              {
                title: 'Rh sistemi ayrı kalıtılır',
                body: 'TYT modelinde D baskındır: DD ve Dd Rh(+), dd Rh(−). ABO ile Rh genleri ayrı değerlendirilir; örneğin A Rh(+) tek bir alel çifti değil, iki farklı gen sisteminin birleşik fenotipidir.',
              },
            ],
          },
          {
            id: 'kal-kan-table',
            type: 'table',
            title: 'ABO hızlı eşleştirme',
            columns: ['Fenotip', 'Olası genotip', 'Alyuvar antijeni', 'Plazmada beklenen antikor'],
            rows: [
              ['A', 'IᴬIᴬ veya Iᴬi', 'A', 'Anti-B'],
              ['B', 'IᴮIᴮ veya Iᴮi', 'B', 'Anti-A'],
              ['AB', 'IᴬIᴮ', 'A ve B', 'Anti-A / Anti-B yok'],
              ['O', 'ii', 'A / B yok', 'Anti-A ve Anti-B'],
            ],
            caption:
              'Bu tablo eritrosit transfüzyonu için temel mantığı kurar. Klinik uygulamada alt gruplar, çapraz karşılaştırma ve başka antijen sistemleri de bulunduğundan “evrensel” ifadeleri mutlak tıbbi kural gibi kullanma.',
          },
          {
            id: 'kal-kan-worked',
            type: 'worked_example',
            title: 'A grubundaki anne ile B grubundaki babanın O çocuk sahibi olması',
            prompt:
              'A fenotipli bir anne ile B fenotipli bir babanın O kan gruplu çocuğu doğuyor. Anne ve babanın genotipleri nedir; sonraki çocuğun AB olma olasılığı kaçtır?',
            steps: [
              {
                title: 'O çocuğun genotipini yaz',
                body: 'O fenotipi yalnız **ii** olabilir. Çocuk bir i alelini anneden, bir i alelini babadan almıştır.',
              },
              {
                title: 'Ebeveynlerin gizli alelini bul',
                body: 'A fenotipli anne i taşıdığına göre **Iᴬi**; B fenotipli baba **Iᴮi** olmalıdır.',
              },
              {
                title: 'Gametleri birleştir',
                body: 'Anne Iᴬ veya i; baba Iᴮ veya i gameti verir. Dört eş olasılıklı genotip: IᴬIᴮ, Iᴬi, Iᴮi, ii.',
              },
              {
                title: 'AB olasılığını seç',
                body: 'IᴬIᴮ dört birleşmeden biridir: olasılık **1/4**.',
              },
            ],
            answer: 'Anne Iᴬi, baba Iᴮi; sonraki çocuğun AB olma olasılığı **1/4**tür.',
            takeaway:
              'Çocuğun genotipi ebeveynlerin görünmeyen alellerini açığa çıkarabilir. Önce kesin genotipli fenotipi bul: ABO’da O = ii en güçlü ipuçlarından biridir.',
          },
        ],
      },

      {
        id: 'kal-soyagaci',
        kind: 'build',
        title: 'Soy ağacında dedektiflik',
        lead: 'Amaç bütün bireylere tahmini harf yazmak değil; önce zorunlu genotipleri sabitlemektir.',
        blocks: [
          {
            id: 'kal-soy-figure',
            type: 'figure',
            kind: 'soyagaci-x-bagli',
            width: 'full',
            title: 'Soy ağacı ve X’e bağlı aktarım',
            purpose:
              'Soy ağacı sembollerini, otozomal çekinik ipucunu ve X kromozomunun anne–oğul / baba–kız aktarım yönünü birlikte öğretmek.',
            complexity: 'high',
            caption:
              'Soy ağacını tek bakışta isimlendirme. Önce kesin aktarım yollarını gör, sonra olası kalıtım modelini sınamaya başla.',
            focus: [
              {
                title: 'Önce sembolleri ve akrabalığı oku',
                body: 'Kare erkek, daire kadın; dolu şekil özelliği gösteren bireydir. Aynı ebeveyn çizgisinden çıkan bireyler kardeştir. Kuşakları ve eş bağlantılarını yanlış okumak, doğru genetik bilgiyi bile yanlış sonuca götürür.',
              },
              {
                title: 'Otozomal çekinik model',
                body: 'Fenotipçe normal iki ebeveynden etkilenmiş çocuk doğması çekinik modeli destekler ve iki ebeveyni de taşıyıcı yapar. Otozomal olduğu için kadın ve erkek aynı alel çiftleriyle değerlendirilir.',
              },
              {
                title: 'X’e bağlı çekinik aktarım',
                body: 'Erkek X’i anneden, Y’yi babadan alır. Bu nedenle **babadan oğula X’e bağlı aktarım olmaz**. Taşıyıcı anne etkilenmiş aleli oğluna verirse, oğulda ikinci X olmadığı için özellik görülür.',
              },
              {
                title: 'Zorunlu taşıyıcıyı bul',
                body: 'X’e bağlı çekinik özellikte etkilenmiş baba, aleli bütün kızlarına verir. Anne normal aleller taşıyorsa kızlar etkilenmez ama zorunlu taşıyıcıdır. Önce bu kesin aktarımları işaretle.',
              },
            ],
          },
          {
            id: 'kal-soy-why',
            type: 'why',
            question: 'X’e bağlı çekinik özellik neden erkeklerde daha sık görünür?',
            body: `Erkeklerde X kromozomundaki birçok genin ikinci bir kopyası Y üzerinde yoktur. Bu nedenle X üzerinde çekinik bir hastalık aleli varsa onu örtecek ikinci normal alel bulunmaz; tek kopya fenotipe yansır.

Kadında ise özellik çekinikse çoğunlukla iki X’in de ilgili aleli taşıması gerekir. Tek etkilenmiş alel taşıyan heterozigot kadın genellikle taşıyıcıdır.

Fakat ==“erkeklerde çok görülüyor” tek başına X’e bağlı kalıtımı kanıtlamaz==. Küçük bir soy ağacında rastlantısal olarak erkek sayısı fazla olabilir. Baba–oğul aktarımı, etkilenmiş kızın ebeveynleri ve zorunlu taşıyıcı yolları birlikte kontrol edilmelidir.`,
          },
          {
            id: 'kal-soy-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Soy ağacında sıran şu olsun: (1) etkilenmiş bireylerin genotipini kesinleştir, (2) çocuklardan ebeveynlere zorunlu alelleri taşı, (3) X’e bağlıysa babanın oğluna X veremediğini uygula, (4) ancak sonra olasılıklı genotipleri yaz.',
          },
        ],
      },

      {
        id: 'kal-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Her soruda önce modelin koşulunu söyle; sonra hesap yap.',
        blocks: [
          {
            id: 'kal-quiz1',
            type: 'quiz',
            purpose: 'concept',
            question: 'Homolog kromozomlarla ilgili aşağıdaki ifadelerden hangisi doğrudur?',
            options: [
              'DNA dizileri baştan sona kesinlikle aynıdır',
              'Biri anneden, biri babadan gelir ve aynı gen lokuslarını taşır',
              'Yalnız eşey hücrelerinde çift hâlinde bulunur',
              'Aynı homolog çiftin iki üyesi her zaman aynı aleli taşır',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Homolog kromozomlar aynı genleri aynı lokuslarda taşır ve biri anneden, biri babadan gelir. Fakat aynı gen için farklı aleller taşıyabilirler; bu nedenle DNA dizileri bütünüyle özdeş değildir.

Kardeş kromatitler eşlenme sonrasında birbirinin kopyasıdır; homolog kromozom ile kardeş kromatiti karıştırma.`,
          },
          {
            id: 'kal-quiz2',
            type: 'quiz',
            purpose: 'apply',
            question: 'Tam baskınlıkta Aa × aa çaprazlamasının fenotip oranı nedir?',
            options: ['Tümü baskın', '3 baskın : 1 çekinik', '1 baskın : 1 çekinik', 'Tümü çekinik'],
            answer_index: 2,
            explanation: `Aa birey A ve a; aa birey yalnız a gameti üretir. Yavruların yarısı Aa (baskın fenotip), yarısı aa (çekinik fenotip) olur. Sonuç **1:1**dir.

3:1 oranı ancak Aa × Aa ve tam baskınlık koşulunda çıkar.`,
          },
          {
            id: 'kal-quiz3',
            type: 'quiz',
            purpose: 'probability',
            question: 'Aa × Aa çaprazlamasında iki çocuğun da çekinik fenotipli olma olasılığı kaçtır?',
            options: ['1/2', '1/4', '1/8', '1/16'],
            answer_index: 3,
            explanation: `Bir çocuk için aa olasılığı 1/4’tür. İki doğum bağımsız olduğundan “birinci **ve** ikinci” olasılığı çarpılır:

**1/4 × 1/4 = 1/16.**

İlk çocuğun sonucu, sonraki çocuğun genetik olasılığını değiştirmez.`,
          },
          {
            id: 'kal-quiz4',
            type: 'quiz',
            purpose: 'error',
            question: 'AaBb bireyin AB, Ab, aB ve ab gametlerini eşit olasılıkla üretmesi için hangi koşul gereklidir?',
            options: [
              'A ve B alellerinin ikisinin de baskın olması',
              'Genlerin bağımsız davranması',
              'Bireyin homozigot olması',
              'Özelliklerin aynı fenotipi oluşturması',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **genlerin bağımsız davranmasıdır**. Farklı kromozom çiftlerindeki genler mayozda bağımsız yönlenebilir ve dört gamet çeşidi 1/4’er olasılıkla oluşur.

Bağlı genlerde gamet oranları bu basit dağılıma uymayabilir. Baskınlık ise gamet oluşumunu değil fenotip görünümünü etkiler.`,
          },
          {
            id: 'kal-quiz5',
            type: 'quiz',
            purpose: 'blood',
            question: 'AB kan gruplu bir bireyin ABO genotipi aşağıdakilerden hangisidir?',
            options: ['Iᴬi', 'Iᴮi', 'IᴬIᴮ', 'ii'],
            answer_index: 2,
            explanation: `AB fenotipi yalnız **IᴬIᴮ** genotipiyle oluşur. Iᴬ ve Iᴮ eş baskın olduğu için iki antijen de alyuvar yüzeyinde görünür.

A ve B fenotiplerinin ikişer, AB ve O fenotiplerinin birer olası genotipi vardır.`,
          },
          {
            id: 'kal-quiz6',
            type: 'quiz',
            purpose: 'blood-apply',
            question: 'Iᴬi × ii çaprazlamasında O kan gruplu çocuk olma olasılığı kaçtır?',
            options: ['0', '1/4', '1/2', '3/4'],
            answer_index: 2,
            explanation: `Iᴬi ebeveyn Iᴬ veya i; ii ebeveyn yalnız i gameti verir. Yavruların yarısı Iᴬi (A), yarısı ii (O) olur. Olasılık **1/2**dir.`,
          },
          {
            id: 'kal-quiz7',
            type: 'quiz',
            purpose: 'pedigree',
            question: 'X’e bağlı çekinik bir alel için aşağıdaki aktarımlardan hangisi gerçekleşemez?',
            options: ['Taşıyıcı anneden oğula', 'Etkilenmiş babadan kızına', 'Etkilenmiş babadan oğluna', 'Taşıyıcı anneden kızına'],
            answer_index: 2,
            explanation: `Baba oğluna **Y**, kızına **X** kromozomu verir. Bu nedenle X’e bağlı bir alel babadan oğula aktarılamaz.

Bu kural soy ağacında güçlü bir eleme aracıdır. Baba–oğul aktarımı açıkça varsa yalnız X’e bağlı modeli yeniden sorgulamalısın.`,
          },
          {
            id: 'kal-quiz8',
            type: 'quiz',
            purpose: 'synthesis',
            question: 'Fenotipçe normal iki ebeveynin otozomal çekinik özellik gösteren bir çocuğu varsa ebeveynler için ne söylenir?',
            options: ['İkisi de kesin homozigot baskındır', 'En az biri etkilenmiştir', 'İkisi de taşıyıcı heterozigottur', 'Yalnız anne taşıyıcıdır'],
            answer_index: 2,
            explanation: `Etkilenmiş çocuk **aa** olduğuna göre a alelinin birini anneden, birini babadan almıştır. Ebeveynler fenotipçe normal oldukları için aa olamaz; ikisi de **Aa taşıyıcıdır**.

Bu, otozomal çekinik soy ağaçlarının en güçlü zorunlu çıkarımlarından biridir.`,
          },
          {
            id: 'kal-quiz9',
            type: 'quiz',
            purpose: 'test-cross',
            question: 'Baskın fenotipli bilinmeyen bir birey aa ile çaprazlandığında çekinik fenotipli yavru oluşuyorsa bilinmeyen bireyin genotipi nedir?',
            options: ['Kesin AA', 'Kesin Aa', 'Kesin aa', 'AA veya Aa olabilir'],
            answer_index: 1,
            explanation: `Çekinik yavru **aa** olduğuna göre a alelinin birini aa ebeveynden, diğerini bilinmeyen ebeveynden almıştır. Bilinmeyen birey baskın fenotipli olduğundan aa olamaz; genotipi kesin olarak **Aa**dır.

Kontrol çaprazlamasında çekinik yavru görmek kesin kanıttır. Buna karşılık az sayıda yavrunun tamamının baskın olması, bilinmeyenin AA olduğunu mutlak biçimde kanıtlamaz; Aa birey de rastlantısal olarak yalnız A gameti vermiş olabilir.`,
          },
          {
            id: 'kal-quiz10',
            type: 'quiz',
            purpose: 'rh-synthesis',
            question: 'Basitleştirilmiş TYT modelinde Rh(−) bir anne ile heterozigot Rh(+) bir babanın Rh(−) çocuk sahibi olma olasılığı kaçtır?',
            options: ['0', '1/4', '1/2', 'Tümü'],
            answer_index: 2,
            explanation: `Anne Rh(−) olduğundan **dd**, heterozigot baba **Dd**dir. Anne yalnız d; baba D veya d gameti verir. Yavruların yarısı Dd yani Rh(+), yarısı dd yani Rh(−) olur. Olasılık **1/2**dir.

Burada ABO kan grubuna ilişkin bilgi verilse bile iki gen sistemi ayrı hesaplanır; birlikte istenirse bağımsızlık varsayımıyla olasılıklar çarpılır.`,
          },
        ],
      },

      {
        id: 'kal-kapanis',
        kind: 'close',
        title: 'Oranı değil, üretim hattını hatırla',
        lead: 'Bir kalıtım sorusunu çözmeden önce aşağıdaki sekiz cümleyi gerçekten kurabiliyor musun?',
        blocks: [
          {
            id: 'kal-summary',
            type: 'summary',
            title: 'Bu dersten geriye kalması gerekenler',
            points: [
              'Homolog kromozomlar aynı genleri aynı lokuslarda taşır; farklı aleller taşıyabilir.',
              'Baskınlık yalnız heterozigotta hangi fenotipin görüldüğünü söyler; güç, yarar veya yaygınlık değildir.',
              'Genotip alel bileşimidir; fenotip genotip ile çevrenin gözlenen sonucudur.',
              'Mayozda alel çifti ayrılır; her gamet bir gen için tek alel taşır.',
              'Aa × Aa’da genotip 1:2:1; tam baskınlık fenotipi 3:1’dir. Bu oran koşula bağlıdır.',
              'Bağımsız olaylarda “ve” çarpılır, birbirini dışlayan “veya” seçenekleri toplanır.',
              'ABO’da Iᴬ ve Iᴮ eş baskın, i çekiniktir; Rh sistemi ayrı gen çiftiyle değerlendirilir.',
              'X’e bağlı alel babadan oğula geçmez; oğul X kromozomunu anneden alır.',
            ],
          },
          {
            id: 'kal-memory',
            type: 'memory',
            body:
              'Kalıtım sorusunda sıran: **genotipi yaz → gametleri çıkar → birleşmeleri kur → genotip ve fenotipi ayrı say → modelin koşulunu kontrol et.** Oran, bu zincirin sonucudur.',
          },
          {
            id: 'kal-final-check',
            type: 'exam',
            title: 'Son 20 saniyelik hata kontrolü',
            body: `Cevabı işaretlemeden önce dört kontrol yap. Birincisi, **gametlere genotip değil tek alel** yazdın mı? İkincisi, sorunun istediği genotip oranı mı, fenotip oranı mı? Üçüncüsü, olasılıkta “ve” bağlacını görünce bağımsız olayları çarpıp “veya” durumunda birbirini dışlayan seçenekleri topladın mı? Dördüncüsü, cinsiyet kromozomlarında babanın kızına X, oğluna Y verdiğini korudun mu?

Bu kısa denetim özellikle doğru kurulmuş bir çözümün son adımda bozulmasını önler. Unutma: bir soy ağacında tek bir bireyin genotipini kesinleştirmek bazen bütün ağacı açar; bir çaprazlamada tek bir gameti eksik yazmak ise bütün oranı değiştirir. Hız, adım atlamak değil doğru sırayı otomatikleştirmektir.`,
          },
          {
            id: 'kal-next',
            type: 'next_step',
            body: `Bir sonraki aşamada bu temel üzerine **Mayoz ve Eşeyli Üreme** ile **Genetik Varyasyon** konularını bağlayabilirsin.

Mayoz, burada kullandığımız ayrılma ve bağımsız dağılımın hücresel mekanizmasını; mutasyon ve rekombinasyon ise popülasyondaki yeni alel kombinasyonlarının kaynağını açıklar.`,
            topics: ['Mayoz ve eşeyli üreme', 'Mutasyon ve genetik varyasyon', 'Biyoteknoloji'],
          },
          {
            id: 'kal-close-audio',
            type: 'audio_script',
            body: `Ders bitti. Kendine üç kısa soru sor.

Bir: Aa birey neden A ve a gameti üretiyor? Homologlar mayozda ayrıldığı için.

İki: Üçe bir oranını her soruda kullanabilir miyim? Hayır. İki heterozigot, tam baskınlık ve tek gen koşulunu kontrol etmeliyim.

Üç: X'e bağlı alel babadan oğula geçer mi? Hayır, baba oğluna Y verir.

Bu üç cevabı mekanizmasıyla verebiliyorsan kalıtımın omurgası kuruldu.`,
          },
        ],
      },
    ],
  },
}
