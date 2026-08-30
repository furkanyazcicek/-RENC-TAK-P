/**
 * TYT BİYOLOJİ · KALITIM
 * Kalıtımı oran ezberinden çıkarıp kromozom → gamet → olasılık hattında kurar.
 */

export default {
  slug: 'kalitim-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Kalıtım',
  },
  order: 0,
  partLabel: 'Önce temelini öğren',
  title: 'Kalıtım: Ayrıntılı Temel Not',
  subtitle:
    'Kromozom ve alel dilinden Mendel ilkelerine; çaprazlamalardan kan grupları, eşeye bağlı kalıtım, soyağacı ve genetik danışmanlığa kadar bütün temel bilgiyi tek sistem içinde öğren.',

  document: {
    version: 1,
    estimated_minutes: 130,
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
        id: 'kal-mendel-derin',
        kind: 'deepen',
        title: 'Mendel deneyleri, ayrılma ve bağımsız dağılım',
        lead: 'Klasik oranlar, alellerin mayozda nasıl dağıldığını görünür kılan deney sonuçlarıdır.',
        blocks: [
          {
            id: 'kal-mendel-derin-prose',
            type: 'prose',
            body: `Mendel bezelyeyi; kolay yetişmesi, kısa kuşak süresi, çok sayıda döl vermesi, belirgin karşıt özelliklerinin bulunması ve hem kendileşme hem kontrollü çaprazlamaya elverişli olması nedeniyle kullandı. İncelenen karakter bakımından nesiller boyunca aynı sonucu veren **saf döllerle** çalışmaya başladı. Homozigot ebeveynlerin çaprazlandığı başlangıç kuşağı **P**, bunların yavruları **F₁**, F₁ bireylerinin çaprazlanmasıyla oluşanlar **F₂** kuşağıdır.

AA × aa çaprazlamasında F₁’in tamamı Aa olur. Tam baskınlık varsa hepsi baskın fenotiplidir. F₁ bireyleri Aa × Aa biçiminde çaprazlandığında F₂’de 1 AA : 2 Aa : 1 aa genotip oranı; 3 baskın : 1 çekinik fenotip oranı beklenir. F₁’de görünmeyen çekinik alel kaybolmamıştır; heterozigot genotipte korunmuş, mayozda gametlere geçmiş ve F₂’de aa birleşmesiyle yeniden fenotipte görünmüştür.

**Ayrılma ilkesi**, diploit bireyde bir gen için bulunan iki alelin mayozda farklı gametlere gitmesidir. Aa bireyin çok sayıdaki gametlerinin yaklaşık yarısı A, yarısı a taşır. Bunun hücresel temeli homolog kromozomların mayoz I’de ayrılmasıdır. Döllenme, iki gametten gelen alelleri yeniden çift hâline getirir.

**Bağımsız dağılım ilkesi**, farklı gen çiftlerinin gametlere birbirinden bağımsız dağılabilmesidir. Farklı kromozom çiftlerindeki genlerde doğrudan kullanılan bu sade model, aynı kromozomda birbirine yakın bağlı genlerde geçerli olmayabilir. Temel soruda genlerin bağımsız olduğu belirtilmişse her lokusun olasılığı ayrı hesaplanıp birlikte istenen sonuçlar çarpılır.

AaBb birey bağımsız genlerde AB, Ab, aB ve ab gametlerini eşit olasılıkla oluşturur. AaBb × AaBb çaprazlamasında her lokusta baskın fenotip olasılığı 3/4, çekinik fenotip olasılığı 1/4’tür. İki lokus birleştirildiğinde A_B_=9/16, A_bb=3/16, aaB_=3/16 ve aabb=1/16; yani 9:3:3:1 fenotip oranı elde edilir.

9:3:3:1 iki karakter geçen her sorunun otomatik cevabı değildir. İki ebeveynin de iki lokusta heterozigot olması, iki lokusta tam baskınlık bulunması ve genlerin bağımsız davranması gerekir. AaBb × aabb kontrol çaprazlamasında ise bağımsızlık koşulunda dört fenotip 1:1:1:1 beklenir.

Mendel oranları tek tek ailelerde zorunlu dağılım değildir. Aa × Aa çiftinin dört çocuğundan kesinlikle üçünün baskın, birinin çekinik olması gerekmez. Her döllenme bağımsızdır; oranlar her yeni yavru için olasılığı ve çok sayıda yavruda yaklaşılacak dağılımı gösterir.`,
          },
          {
            id: 'kal-mendel-derin-map',
            type: 'concept_map',
            title: 'Saf döl çaprazından Mendel ilkelerine',
            intro: 'Kuşakları, mayozu ve gözlenen oranı aynı zincirde izle.',
            nodes: [
              { id: 'p', label: 'P kuşağı', detail: 'AA × aa saf döller' },
              { id: 'f1', label: 'F₁', detail: 'Tümü Aa melez' },
              { id: 'mayoz', label: 'Mayoz', detail: 'A ve a gametlere ayrılır' },
              { id: 'f2', label: 'F₂', detail: '1:2:1 genotip; 3:1 fenotip' },
              { id: 'ilke', label: 'Ayrılma ilkesi', detail: 'Her gamet bir alel taşır' },
            ],
            links: [
              { from: 'p', to: 'f1', label: 'çaprazlanır' },
              { from: 'f1', to: 'mayoz', label: 'gamet üretir' },
              { from: 'mayoz', to: 'f2', label: 'döllenme' },
              { from: 'f2', to: 'ilke', label: 'örüntüyü gösterir' },
            ],
            caption: 'F₂ oranı, F₁ heterozigotlarında alellerin mayozla ayrılmasının sonucudur.',
          },
          {
            id: 'kal-mendel-derin-check',
            type: 'checkpoint',
            prompt: 'AaBBCcDd birey bağımsız genlerde kaç çeşit gamet oluşturabilir ve abcd gameti oluşturabilir mi?',
            hint: 'Heterozigot lokusları say; bireyde bulunmayan alel gamete geçemez.',
            answer: 'Aa, Cc ve Dd heterozigottur: 2³=8 çeşit gamet mümkündür. Bireyde b aleli bulunmadığı için abcd gameti oluşamaz; B bütün gametlerde bulunur.',
          },
          {
            id: 'kal-mendel-derin-trap',
            type: 'trap',
            title: 'İki gen görünce 9:3:3:1 yazmak',
            wrong: '“İki karakterli her çaprazlamanın fenotip oranı 9:3:3:1’dir.”',
            right: 'Bu oran yalnız AaBb × AaBb, bağımsız genler ve iki lokusta tam baskınlık koşullarında beklenir.',
            body: 'Ebeveyn genotipi, alel ilişkisi veya genlerin bağlı olması oranı değiştirir.',
          },
        ],
      },

      {
        id: 'kal-esey-genis',
        kind: 'deepen',
        title: 'Eşeyin kromozomal temeli ve Y’ye bağlı kalıtım',
        lead: 'X ve Y kromozomlarının ebeveynden çocuğa geçiş yönü, soyağacındaki güçlü eleme kurallarını oluşturur.',
        blocks: [
          {
            id: 'kal-esey-genis-prose',
            type: 'prose',
            body: `İnsanda 22 çift otozom ve bir çift eşey kromozomu bulunur. Temel modelde dişi XX, erkek XY’dir. Yumurtaların tamamı X; spermlerin yaklaşık yarısı X, yarısı Y taşır. XX zigot X taşıyan, XY zigot Y taşıyan spermle oluşur. Bu nedenle kromozomal eşeyi belirleyen gamet babadan gelir. Her doğumda kız veya erkek olasılığı yaklaşık 1/2’dir ve önceki çocukların eşeyi sonraki döllenmeyi değiştirmez.

X kromozomunda bulunan genler **X’e bağlı** kalıtılır. Erkekte bu genlerin çoğu için ikinci bir X kopyası yoktur; tek alelli duruma hemizigotluk denir. X’e bağlı çekinik alel erkekte tek kopyayla fenotipe yansır. Kadında çekinik fenotip için çoğunlukla iki çekinik alel gerekir; heterozigot kadın taşıyıcıdır.

XᴬXᵃ taşıyıcı kadın ile XᴬY normal erkeğin kızları XᴬXᴬ veya XᴬXᵃ; oğulları XᴬY veya XᵃY olabilir. Bütün çocuklar içinde etkilenmiş erkek olasılığı 1/4, yalnız erkek çocuklar içinde etkilenmiş olasılığı 1/2’dir. “Çocukların kaçta kaçı?” ile “erkek çocukların kaçta kaçı?” farklı örnek uzaylarıdır.

Baba oğluna Y verdiği için X’e bağlı alel babadan oğula geçmez. Baba X’ini bütün kızlarına verir. Etkilenmiş baba XᵃY ise bütün kızları babadan Xᵃ alır; kızların taşıyıcı veya etkilenmiş olmasını anneden gelen X belirler. Standart modelde X’e bağlı çekinik etkilenmiş kız için baba etkilenmiş, anne en az taşıyıcı olmalıdır.

X’e bağlı baskın kalıtımda etkilenmiş baba aleli bütün kızlarına aktarır, hiçbir oğluna doğrudan aktaramaz. Heterozigot etkilenmiş anne, kız ve erkek çocuklarının yarısına aleli verebilir. Baskın aleli taşıyan birey genellikle fenotipi gösterdiği için sağlıklı taşıyıcı kavramı daha çok çekinik modellerde kullanılır.

**Y’ye bağlı genler** yalnız Y kromozomundadır. Özellik yalnız erkeklerde görülür; etkilenmiş baba ilgili Y’yi bütün oğullarına verir, kızlarına aktaramaz. Erkekten erkeğe kesintisiz aktarım Y’ye bağlı modelin ayırt edici örüntüsüdür.

Eşeye bağlılık, eşeyle sınırlı özellikle aynı değildir. Süt üretimi gibi eşeyle sınırlı özelliklerin genleri otozomlarda bulunabilir fakat anatomik ve hormonal koşullar nedeniyle yalnız bir eşeyde fenotip oluşturur. X/Y’ye bağlı terimi genin kromozomdaki yerini belirtir.`,
          },
          {
            id: 'kal-esey-genis-table',
            type: 'table',
            title: 'Eşey kromozomuna bağlı aktarım örüntüleri',
            columns: ['Model', 'Baba → oğul', 'Baba → kız', 'Belirgin örüntü'],
            rows: [
              ['X’e bağlı çekinik', 'Olmaz', 'Etkilenmiş baba aleli tüm kızlara verir', 'Erkeklerde daha sık olabilir'],
              ['X’e bağlı baskın', 'Olmaz', 'Etkilenmiş baba tüm kızları etkiler', 'Baba–kızların tamamı'],
              ['Y’ye bağlı', 'Tüm oğullara', 'Olmaz', 'Yalnız erkek, baba–oğul hattı'],
              ['Otozomal', 'Olabilir', 'Olabilir', 'Aktarım eşey kromozomuna bağlı değildir'],
            ],
            caption: 'Tek bir bireyin eşeyi değil, bütün ailedeki zorunlu aktarım yönü değerlendirilir.',
          },
          {
            id: 'kal-esey-genis-check',
            type: 'checkpoint',
            prompt: 'X’e bağlı çekinik özellikte etkilenmiş baba ile homozigot normal annenin kız ve oğulları nasıl olur?',
            hint: 'Baba kızlarına Xᵃ, oğullarına Y; anne bütün çocuklara Xᴬ verir.',
            answer: 'Kızların tamamı XᴬXᵃ taşıyıcı ve fenotipçe normal; oğulların tamamı XᴬY normal olur. Babadan oğula X aktarılmaz.',
          },
        ],
      },

      {
        id: 'kal-test-danisma',
        kind: 'deepen',
        title: 'Genetik testler, taşıyıcılık ve genetik danışmanlık',
        lead: 'Test biyolojik veri sağlar; danışmanlık bu verinin anlamını, sınırını ve seçenekleri açıklığa kavuşturur.',
        blocks: [
          {
            id: 'kal-test-prose',
            type: 'prose',
            body: `**Genetik test**, kromozomları, DNA dizisini, belirli gen varyantlarını veya bazı biyokimyasal ürünleri inceleyerek kalıtsal durumlar hakkında bilgi edinir. Tanısal test belirti gösteren kişide nedeni araştırabilir; taşıyıcılık testi çekinik aleli fenotip göstermeden taşıyan bireyi belirleyebilir; prenatal test fetüste belirli durumları değerlendirebilir; yenidoğan taraması erken müdahale edilebilen hastalıkları araştırabilir.

Test sonucu her zaman “kesin hastalık var” veya “hiç risk yok” anlamına gelmez. Testin hangi genleri ve değişiklik türlerini kapsadığı, teknik duyarlılığı ve özgüllüğü, varyantın hastalıkla ilişkisi, hastalığın ilgili genotipte ortaya çıkma olasılığı ve çevresel etkenler sonucu belirler. Negatif sonuç bütün genetik riskleri sıfırlamayabilir; yatkınlıkla ilişkili pozitif sonuç hastalığın kesin gelişeceğini göstermeyebilir.

**Genetik danışmanlık**, birey ve aileye kalıtım modeli, test seçenekleri, olası sonuçlar, tekrar riski ve tıbbi izlem hakkında tarafsız ve anlaşılır bilgi sunan profesyonel süreçtir. Amaç kişi adına karar vermek değil, bilimsel bilgiyi açıklayarak bilinçli ve gönüllü kararı desteklemektir. Bilgilendirilmiş onam, mahremiyet, genetik verinin korunması ve ayrımcılık riski etik açıdan önemlidir.

Fenilketonüri, spinal müsküler atrofi ve kistik fibrozis gibi otozomal çekinik hastalıkların sade modelinde iki taşıyıcı ebeveyn Aa × Aa ise her gebelikte hasta aa olasılığı 1/4, sağlıklı taşıyıcı Aa olasılığı 1/2, ilgili aleli taşımayan AA olasılığı 1/4’tür. Bir çocuğun sonucu sonraki gebeliğin olasılığını değiştirmez.

Akraba bireylerin ortak atadan aynı seyrek çekinik aleli alma olasılığı rastgele iki bireye göre daha yüksek olabilir. Bu nedenle akraba evliliği belirli otozomal çekinik hastalıklarda iki ebeveynin de aynı aleli taşıma riskini artırabilir. Bu ifade bütün çocukların hasta olacağı veya akraba olmayan çiftlerde risk bulunmadığı anlamına gelmez.

Soyağacı aile içi aktarım örüntüsünden risk tahmini üretir; moleküler test doğrudan incelenen varyant hakkında veri sağlayabilir. Test yalnız kapsadığı bölgeyi ölçtüğü için aile öyküsü ve klinik değerlendirmeyle birlikte yorumlanır.`,
          },
          {
            id: 'kal-test-map',
            type: 'concept_map',
            title: 'Genetik risk bilgisinden bilinçli karara',
            intro: 'Test sonucu tek başına karar değildir; kapsamı ve klinik bağlamıyla yorumlanır.',
            nodes: [
              { id: 'oyku', label: 'Aile öyküsü / bulgu', detail: 'Risk sorusunu oluşturur' },
              { id: 'test', label: 'Uygun test', detail: 'Belirli genetik veriyi ölçer' },
              { id: 'yorum', label: 'Uzman yorumu', detail: 'Sınırları açıklar' },
              { id: 'danisma', label: 'Genetik danışmanlık', detail: 'Risk ve seçenekleri aktarır' },
              { id: 'karar', label: 'Bilinçli karar', detail: 'Gönüllü ve mahremiyet korumalı' },
            ],
            links: [
              { from: 'oyku', to: 'test', label: 'yönlendirir' },
              { from: 'test', to: 'yorum', label: 'veri sağlar' },
              { from: 'yorum', to: 'danisma', label: 'anlamlandırılır' },
              { from: 'danisma', to: 'karar', label: 'destekler' },
            ],
            caption: 'Genetik danışmanlık emir vermez; doğru bilgiyle özerk kararı destekler.',
          },
          {
            id: 'kal-test-why',
            type: 'why',
            question: 'Negatif genetik test neden her zaman sıfır risk anlamına gelmez?',
            body: 'Test yalnız kapsadığı genleri, bölgeleri ve varyant türlerini belirli teknik doğrulukla inceler. Başka bir gen, testin yakalayamadığı değişiklik veya gen–çevre etkileşimi rol oynayabilir. Sonuç test kapsamı ve aile öyküsüyle birlikte yorumlanır.',
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
            body: `Bir sonraki aşamada **Ekosistem Ekolojisi** konusuna geçerek canlıların çevreleriyle madde ve enerji ilişkisini; birey, popülasyon, komünite ve ekosistem düzeylerini kuracaksın.

Kalıtımda öğrendiğin varyasyon bilgisi, bir popülasyondaki bireylerin çevresel koşullara neden aynı tepkiyi vermediğini ve seçilimin hangi farklılıklar üzerinde işleyebildiğini anlamanın temelidir.`,
            topics: ['Ekosistem ekolojisi', 'Popülasyon ve komünite', 'Varyasyon–çevre ilişkisi'],
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
