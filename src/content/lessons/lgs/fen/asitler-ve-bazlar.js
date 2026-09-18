import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.4 Madde ve Endüstri · 3. ders
 * Kazanım : F.8.4.4.1 · F.8.4.4.2 · F.8.4.4.3 · F.8.4.4.4 · F.8.4.4.5 · F.8.4.4.6
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAM SINIRLARI — BAĞLAYICI
 *   F.8.4.4.1 → Asit ve bazların YAPISINA GİRİLMEZ; yalnız genel
 *               özellikleri üzerinde durulur.
 *   F.8.4.4.3 → Ayraç olarak GÜNLÜK HAYATTA ULAŞILABİLECEK malzemeler
 *               kullanılır (mor lahana, çay, türlü bitki özleri).
 *   F.8.4.4.6 → Temizlik malzemelerinin bilinçsiz kullanımının
 *               tehlikeleri ve alınacak tedbirler vurgulanır.
 *
 * GÜVENLİK KARARI
 * Program temizlik malzemelerinin karıştırılmasının tehlikesini öğretmeyi
 * ZORUNLU kılıyor. Ders bu tehlikeyi AÇIKÇA söyler ama hiçbir yerde
 * "hangi oranla ne olur" türü bir tarif vermez; yalnız "karıştırma" ve
 * "ne yapmalı" düzeyinde kalır. Bu, kazanımın koruyucu amacına uygundur.
 *
 * Asit/baz formülleri, iyon yapısı ve nötrleşme denklemi 8. sınıf
 * kazanımında istenmediği için BİLİNÇLİ OLARAK yazılmadı.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-asitler-ve-bazlar',
  topic: 'Madde ve Endüstri',
  order: 3,
  title: 'Asitler ve Bazlar: Özellik, Ayraç, pH ve Güvenlik',
  subtitle:
    'Bir maddenin asit mi baz mı olduğunu tadına bakarak anlamaya çalışmazsın. Bunun için ayraçlar ve pH vardır.',
  minutes: 48,
  kazanimlar: [
    {
      kod: 'F.8.4.4.1',
      metin: 'Asit ve bazların genel özelliklerini ifade eder.',
      sinir: 'Asit ve bazların **yapısına girilmez**; yalnız genel özellikleri üzerinde durulur.',
    },
    { kod: 'F.8.4.4.2', metin: 'Asit ve bazlara günlük yaşamdan örnekler verir.' },
    {
      kod: 'F.8.4.4.3',
      metin: 'Maddelerin asitlik ve bazlık durumlarını ayraçlar kullanarak belirler.',
      sinir: 'Günlük hayatta ulaşılabilecek malzemeler (mor lahana suyu gibi) ayraç olarak kullanılır.',
    },
    { kod: 'F.8.4.4.4', metin: 'pH değerinin maddenin asitlik ve bazlık durumu hakkında bilgi verdiğini bilir.' },
    { kod: 'F.8.4.4.5', metin: 'Asit ve bazların çeşitli maddeler üzerindeki etkilerini gözlemler.' },
    {
      kod: 'F.8.4.4.6',
      metin: 'Asit ve bazların temizlik malzemesi olarak kullanımı sırasında oluşabilecek tehlikelere karşı tedbir alır.',
      sinir: 'Bilinçsiz kullanımın tehlikeleri ve alınacak tedbirler vurgulanır.',
    },
  ],
  prerequisites: [
    { topic: 'Fiziksel ve Kimyasal Değişim: Kimlik Değişti mi?', why: 'Asitlerin maddeler üzerindeki etkisi bir kimyasal değişimdir.' },
    { topic: 'Periyodik Sistem: Düzenin Kendisi Bilgidir', why: 'Maddelerin sınıflandırılması fikri orada kuruldu.' },
  ],
  outcomes: [
    'Asit ve bazların genel özelliklerini sayabileceksin.',
    'Günlük hayattan asit ve baz örnekleri verebileceksin.',
    'Bir ayracın renk değişimini okuyup maddenin asitlik durumunu belirleyebileceksin.',
    'pH değerine bakarak bir maddenin asit mi baz mı nötr mü olduğunu söyleyebileceksin.',
    'Temizlik malzemelerini kullanırken hangi tedbirleri alacağını bileceksin.',
  ],

  opening: {
    title: 'Limon ekşi, sabun kaygan',
    lead: 'İki madde de günlük hayatın içinde. Biri dilini buruşturuyor, öbürü parmaklarının arasından kayıyor. Bu farkın bir adı var.',
    body: `Limonu ısırdığında yüzün buruşur: ekşidir. Sabunu elinde ovaladığında parmaklarının arasından kayar: kaygandır.

Bu iki gözlem rastgele değildir. İki farklı madde sınıfının en tanıdık özellikleridir.

- Limon suyu, sirke, kola gibi maddeler **asit** özelliği taşır.
- Sabun, deterjan, diş macunu gibi maddeler **baz** özelliği taşır.

Şimdi çok önemli bir uyarıyla başlayalım — bu ders bir güvenlik dersidir aynı zamanda.

**Bir maddenin asit mi baz mı olduğunu tadına bakarak ya da eline alarak anlamaya çalışmazsın.** Bazı asit ve bazlar ciltte yanığa yol açabilir, yutulduğunda ciddi zarar verebilir. Mutfaktaki limon güvenlidir; temizlik dolabındaki madde değildir.

Peki nasıl anlayacağız? İki güvenli yolumuz var ve bu dersin merkezinde bunlar duruyor:

1. **Ayraçlar** — renk değiştirerek maddenin asit mi baz mı olduğunu gösteren maddeler.
2. **pH değeri** — asitlik ve bazlık durumunu bir sayıyla ifade eden ölçü.

Ders boyunca altı işimiz var: genel özellikleri tanımak, günlük hayattan örnekler vermek, ayraç kullanmayı öğrenmek, pH değerini okumayı öğrenmek, asit ve bazların maddeler üzerindeki etkilerini görmek ve **güvenlik tedbirlerini** öğrenmek.

Sonuncusu yalnız bir sınav konusu değil; evde işine yarayacak bir bilgi. Program da bunu ayrı bir kazanım olarak istiyor.

Bir kapsam uyarısı: *program bu kazanımda asit ve bazların **yapısına girilmemesini** ister.* Yani asitlerin ve bazların içyapısı, formülleri ya da hangi parçacıklardan oluştuğu bu derste anlatılmayacak. Senden istenen **genel özellikleri** bilmek ve ayraç ile pH’ı kullanabilmek.`,
  },

  concepts: [
    {
      term: 'Asit',
      body: 'Sulu çözeltisi **ekşi** tada sahip olan, mavi turnusol kâğıdını **kırmızıya** çeviren madde sınıfıdır. Bazı metaller üzerinde aşındırıcı etki gösterir.',
    },
    {
      term: 'Baz',
      body: 'Sulu çözeltisi **acı** tada sahip olan ve ele **kaygan** gelen, kırmızı turnusol kâğıdını **maviye** çeviren madde sınıfıdır.',
    },
    {
      term: 'Ayraç (indikatör)',
      body: 'Asit ya da baz ile karşılaştığında **renk değiştiren** maddedir. Bu renk değişimi, maddenin asitlik durumunu güvenli biçimde belirlemeyi sağlar.',
    },
    {
      term: 'Turnusol kâğıdı',
      body: 'En bilinen ayraçtır. Mavi turnusol asitte kırmızıya, kırmızı turnusol bazda maviye döner.',
    },
    {
      term: 'pH',
      body: 'Bir maddenin asitlik ya da bazlık durumunu **sayıyla** ifade eden ölçüdür. **0 ile 14** arasında değer alır.',
    },
    {
      term: 'Nötr madde',
      body: 'Ne asit ne baz özelliği gösteren maddedir. **pH değeri 7**’dir. Saf su nötrdür.',
    },
    {
      term: 'Nötrleşme',
      body: 'Bir asit ile bir bazın birbirinin etkisini azaltmasıdır. Bu yüzden asidik bir durumu gidermek için bazik bir madde kullanılabilir.',
    },
  ],

  why: {
    question: 'Neden tat ve dokunma ile değil de ayraç ve pH ile belirliyoruz?',
    body: `Çünkü tat ve dokunma **güvenli değildir** ve **ölçülebilir değildir.**

İki ayrı gerekçe var; ikisi de önemli.

**Birinci gerekçe: güvenlik.** Asit ve bazların bir kısmı zararsızdır (limon, sirke, sabun), bir kısmı ise ciddi biçimde zararlıdır. Temizlik malzemelerinin çoğu güçlü asit ya da baz içerir; bunların cilde teması yanığa yol açabilir. Bir maddenin hangi gruba girdiğini tadına bakarak anlamaya çalışmak, tam da anlamak istediğin şeyin sana zarar verebileceği anlamına gelir.

Bu yüzden bilimsel yöntem güvenli bir yol arar: **maddeye dokunmadan bilgi almak.**

**İkinci gerekçe: ölçülebilirlik.** “Ekşi” bir gözlemdir, sayı değildir. Limon suyu da sirke de ekşidir; ama hangisi daha güçlü bir asittir? Tat bunu söyleyemez.

İşte bu iki gerekçe iki aracı doğurur.

**Ayraçlar** birinci sorunu çözer. Bir ayraç, maddeye damlatıldığında renk değiştirir. Renge bakarak asit mi baz mı olduğunu söylersin; maddeye dokunmadan, tadına bakmadan.

**pH** ikinci sorunu çözer. Asitlik durumunu bir **sayıya** çevirir:

- **pH < 7** → asit
- **pH = 7** → nötr
- **pH > 7** → baz

Ve sayı olduğu için karşılaştırma yapabilirsin. pH değeri 2 olan bir madde, pH değeri 5 olan bir maddeden **daha güçlü asittir.** Çünkü 7’den uzaklaştıkça özellik güçlenir.

Bu ilişkiyi iyi kurmak gerekiyor; çünkü sorularda en çok burası ölçülür:

**pH küçüldükçe asitlik artar. pH büyüdükçe bazlık artar. 7’ye yaklaştıkça ikisi de zayıflar.**

Sayı doğrusunu şöyle düşün: 7 ortadadır. Soluna gittikçe asitlik güçlenir, sağına gittikçe bazlık güçlenir.

Son olarak bir kavram daha kuralım: **nötrleşme.** Bir asit ile bir baz karşılaştığında birbirlerinin etkisini azaltır. Bu yüzden asidik bir durumu gidermek için bazik bir madde kullanılır. Arı sokmasında ya da mide yanmasında kullanılan bazı çözümler bu ilkeye dayanır.

*Kapsam notu: program asit ve bazların yapısına girilmemesini ister; bu yüzden nötrleşmeyi de bir denklemle değil, sonucuyla anlatıyoruz.*`,
  },

  mechanism: {
    title: 'Bir maddenin asitlik durumu nasıl belirlenir?',
    lead: 'Altı adımlık güvenli bir yol. Hiçbir adımda maddeye dokunmak ya da tatmak yok.',
    intro:
      'Aşağıdaki sıra, bir maddenin asit mi baz mı nötr mü olduğunu belirlemenin güvenli yoludur.',
    steps: [
      {
        title: '1. Güvenlik önlemlerini al',
        body: 'Çalışma öğretmen gözetiminde yapılır. Maddeye çıplak elle dokunulmaz, tadına bakılmaz, koklanmaz.',
      },
      {
        title: '2. Maddeden küçük bir örnek al',
        body: 'İncelenecek maddeden az miktarda örnek ayrılır. Az miktarla çalışmak hem güvenlidir hem yeterlidir.',
      },
      {
        title: '3. Bir ayraç seç',
        body: 'Turnusol kâğıdı ya da günlük hayatta bulunabilen bir ayraç (örneğin mor lahana suyu) kullanılır.',
      },
      {
        title: '4. Ayracı örnekle buluştur',
        body: 'Turnusol kâğıdı örneğe değdirilir ya da ayraç çözeltisinden birkaç damla örneğe damlatılır.',
      },
      {
        title: '5. Renk değişimini oku',
        body: 'Oluşan renk, önceden bilinen renk karşılıklarıyla eşleştirilir. Mavi turnusol kırmızıya döndüyse madde asittir; kırmızı turnusol maviye döndüyse bazdır.',
      },
      {
        title: '6. Gerekirse pH ile sayıya çevir',
        body: 'Daha kesin bir bilgi isteniyorsa pH ölçümü yapılır. Ayraç “hangi grup” sorusunu, pH ise “ne kadar güçlü” sorusunu cevaplar.',
      },
    ],
    takeaway:
      'Son adım ikisinin iş bölümünü gösterir: ayraç sınıfı söyler, pH ise gücü sayıyla verir.',
  },

  comparison: {
    title: 'Asitlerin ve bazların genel özellikleri',
    columns: ['Asitler', 'Bazlar'],
    rows: [
      { label: 'Tadı (yalnız bilgi olarak)', values: ['Ekşi', 'Acı'] },
      { label: 'Dokunma hissi', values: ['—', 'Ele kaygan gelir'] },
      { label: 'Mavi turnusol', values: ['Kırmızıya çevirir', 'Değiştirmez'] },
      { label: 'Kırmızı turnusol', values: ['Değiştirmez', 'Maviye çevirir'] },
      { label: 'pH aralığı', values: ['7’den küçük', '7’den büyük'] },
      { label: 'Bazı metallere etkisi', values: ['Aşındırıcı etki gösterir', 'Metalleri asitler kadar aşındırmaz'] },
      { label: 'Günlük örnek', values: ['Limon suyu, sirke, kola, mide öz suyu', 'Sabun, deterjan, diş macunu, kabartma tozu'] },
    ],
    insight:
      'Birinci satırdaki “yalnız bilgi olarak” ifadesi bilinçlidir: tat bir genel özelliktir, ama bir belirleme yöntemi değildir. Belirleme ayraçla ve pH ile yapılır.',
  },

  traps: [
    {
      title: 'Asitlik durumunu tadarak belirlemeye çalışmak',
      wrong: 'Bir maddenin asit mi baz mı olduğunu tadına bakarak anlarım.',
      right: 'Tat bir **genel özelliktir**, bir **belirleme yöntemi değildir.** Belirleme ayraçla ya da pH ölçümüyle yapılır.',
      body: 'Özellikle temizlik malzemeleri güçlü asit ya da baz içerir ve ciddi zarar verebilir. Bir maddeye dokunmadan bilgi alabilmek, bu konudaki en önemli kazanımdır.',
    },
    {
      title: 'pH büyüdükçe asitliğin arttığını sanmak',
      wrong: 'pH değeri büyük olan madde daha güçlü asittir.',
      right: 'Tam tersi: **pH küçüldükçe asitlik artar.** pH büyüdükçe bazlık artar. 7 nötr noktadır.',
      body: 'Sayı doğrusunu hatırla: 7 ortadadır, sola gidildikçe asitlik güçlenir (6, 5, 4…), sağa gidildikçe bazlık güçlenir (8, 9, 10…). Bu ters ilişki, sorularda en çok yanılınan noktadır.',
    },
    {
      title: 'Nötr olmayı “hiçbir şey olmamak” sanmak',
      wrong: 'Nötr madde, içinde hiçbir madde bulunmayan sıvıdır.',
      right: 'Nötr madde, **ne asit ne baz** özelliği gösteren maddedir ve pH değeri 7’dir. Saf su bunun en bilinen örneğidir.',
      body: 'Nötrlük bir “yokluk” değil, bir denge durumudur. Asit ile bazın etkisinin birbirini dengelemesiyle de nötr bir sonuç elde edilebilir.',
    },
    {
      title: 'Temizlik malzemelerini karıştırmanın daha etkili olacağını sanmak',
      wrong: 'İki farklı temizlik malzemesini karıştırırsam daha iyi temizler.',
      right: 'Temizlik malzemeleri **kesinlikle karıştırılmamalıdır.** Karıştırıldıklarında sağlığa ciddi zarar verebilecek gazlar açığa çıkabilir.',
      body: 'Bu, programın açıkça öğretilmesini istediği bir güvenlik bilgisidir. Ürünlerin etiketlerinde de bu uyarı bulunur. Doğru kullanım, her ürünü etiketindeki yönergeye göre **ayrı ayrı** kullanmaktır.',
    },
  ],

  variables: {
    title: 'Ayracı kendin hazırla: mor lahana deneyi',
    lead:
      'Kazanım, günlük hayatta ulaşılabilecek malzemelerin ayraç olarak kullanılmasını ister. Mor lahana suyu bunun en bilinen örneğidir.',
    question: 'Farklı maddelere aynı ayraç damlatıldığında oluşan renk değişir mi?',
    independent: {
      label: 'İncelenen maddenin türü',
      note: 'Ben seçiyorum: limon suyu, saf su, sabun köpüğü',
    },
    setup: {
      label: 'Eşit hacimde mor lahana suyu bulunan kaplar',
      note: 'Her kaba aynı miktarda madde eklenir',
    },
    dependent: {
      label: 'Ayracın aldığı renk',
      note: 'Ölçtüğüm: oluşan rengin hangi grupla eşleştiği',
    },
    controlled: [
      'Kullanılan ayraç (hepsinde aynı mor lahana suyu)',
      'Ayraç ve madde miktarları',
      'Kapların temizliği',
      'Gözlem ışığı ve gözlem anı',
    ],
    caption:
      'Ayraç ve miktarlar bilerek sabit tutulur. Aksi hâlde renk farkının maddeden mi ayraç miktarından mı geldiğini söyleyemezdik.',
  },

  experiment: {
    title: 'Ayraç hazırlama ve kullanma',
    intro:
      'Bu etkinlik öğretmen gözetiminde yapılır. Kullanılan maddeler yalnız mutfakta bulunabilen güvenli maddelerdir; temizlik malzemeleriyle çalışılmaz.',
    steps: [
      { title: '1. Ayracı hazırla', body: 'Mor lahana yaprakları sıcak suda bekletilir ve renkli su süzülerek ayraç elde edilir. Bu işlem öğretmen tarafından yapılır.' },
      { title: '2. Kapları hazırla', body: 'Üç temiz kaba eşit miktarda mor lahana suyu konulur. Miktarların eşit olması bir kontrol değişkenidir.' },
      { title: '3. Birinci kaba limon suyu ekle', body: 'Az miktarda limon suyu eklenir ve oluşan renk kaydedilir.' },
      { title: '4. İkinci kaba saf su ekle', body: 'Aynı miktarda saf su eklenir ve oluşan renk kaydedilir. Bu kap karşılaştırma içindir.' },
      { title: '5. Üçüncü kaba sabun köpüğü ekle', body: 'Aynı miktarda sabun köpüğü eklenir ve oluşan renk kaydedilir.' },
      { title: '6. Renkleri karşılaştır', body: 'Üç kaptaki renkler yan yana konarak karşılaştırılır. Renk farkının tek olası nedeni eklenen maddedir; çünkü ayraç ve miktarlar sabit tutulmuştur.' },
    ],
    takeaway:
      'Ayraç, maddeye dokunmadan bilgi almanı sağlar. Bilimsel yöntemin güvenlik yönü tam olarak budur.',
  },

  dataTable: {
    title: 'Gözlem kaydı: ayraç ve turnusol sonuçları',
    columns: ['Madde', 'Mor lahana ayracında renk', 'Mavi turnusol', 'Kırmızı turnusol', 'Sonuç'],
    rows: [
      ['Limon suyu', 'Kırmızıya çalan ton', 'Kırmızıya döndü', 'Değişmedi', 'Asit'],
      ['Saf su', 'Mor (değişmedi)', 'Değişmedi', 'Değişmedi', 'Nötr'],
      ['Sabun köpüğü', 'Yeşile çalan ton', 'Değişmedi', 'Maviye döndü', 'Baz'],
    ],
    caption:
      'İki ayracın sonuçları birbirini doğruluyor. Bir belirlemeyi iki ayrı ayraçla sınamak, sonucun güvenilirliğini artırır. *(Renk tonları örnek gözlem olarak verilmiştir.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-asit-baz-ph',
      title: 'pH: asitliği sayıyla ifade etmek',
      lead: 'Ayraç “hangi grup” der; pH “ne kadar” der.',
      blocks: [
        {
          id: 'lgs-fen-asit-baz-ph-anlatim',
          type: 'prose',
          body: `**pH**, bir maddenin asitlik ya da bazlık durumunu sayıyla ifade eden ölçüdür. **0 ile 14** arasında değer alır.

Üç temel aralık vardır:

- **pH 0–7 arası** → **asit**
- **pH 7** → **nötr**
- **pH 7–14 arası** → **baz**

Şimdi asıl önemli ilişkiye gelelim; sorularda en çok burası ölçülür.

**pH küçüldükçe asitlik güçlenir.** pH değeri 1 olan bir madde, pH değeri 5 olan bir maddeden çok daha güçlü bir asittir.

**pH büyüdükçe bazlık güçlenir.** pH değeri 13 olan bir madde, pH değeri 9 olan bir maddeden çok daha güçlü bir bazdır.

**7’ye yaklaştıkça hem asitlik hem bazlık zayıflar.** pH 6 olan bir madde zayıf bir asittir; pH 8 olan bir madde zayıf bir bazdır.

Bunu bir sayı doğrusu gibi düşün. Ortada 7 var. Soluna doğru gittikçe asitlik artıyor, sağına doğru gittikçe bazlık artıyor. Ortadan uzaklaşmak, özelliğin güçlenmesi demek.

Şimdi bir soru: pH 3 olan madde ile pH 5 olan maddeden hangisi daha güçlü asittir?

Cevap: **pH 3 olan.** Çünkü 7’ye daha uzak, yani sayı daha küçük.

Bir soru daha: pH 5 olan madde ile pH 9 olan madde karşılaştırılırsa ne söylenir?

Cevap: İkisi farklı gruptadır. pH 5 olan **asit**, pH 9 olan **bazdır.** İkisi de 7’ye yakın olduğu için ikisi de zayıftır; ama farklı taraflardadırlar.

pH nasıl ölçülür? İki yaygın yol vardır:

- **pH kâğıdı (indikatör kâğıdı):** maddeye değdirildiğinde bir renk alır; bu renk, üzerinde pH değerleri yazılı bir renk cetveliyle eşleştirilir.
- **pH ölçer:** doğrudan sayısal değer veren araçtır.

Şimdi pH’ın neden günlük hayatta önemli olduğuna bakalım.

- Toprağın pH’ı, hangi bitkinin orada iyi yetişeceğini etkiler.
- Havuz ve içme suyunda pH belirli aralıkta tutulur.
- Cilt ürünlerinde “pH dengeli” ifadesi, ürünün cilde uygun bir aralıkta olduğunu anlatır.
- Yağmur suyunun pH’ı normalden düşükse asit yağmurundan söz edilir — bunu bir sonraki derste göreceğiz.

Son bir ayrım: **pH bir madde miktarı değildir.** “pH’ı yüksek” demek “çok madde var” demek değildir; “bazlık özelliği güçlü” demektir. Bu ayrımı kurmak, sorulardaki çeldiricileri elemeni sağlar.`,
        },
        {
          id: 'lgs-fen-asit-baz-ph-tablo',
          type: 'table',
          interactive: true,
          title: 'pH değerini okumak',
          columns: ['pH değeri', 'Madde grubu', 'Özelliğin gücü', 'Örnek düzey'],
          rows: [
            ['0 – 3', 'Asit', 'Güçlü asit', 'Endüstriyel asitler, mide öz suyu'],
            ['4 – 6', 'Asit', 'Zayıf asit', 'Limon suyu, sirke, kola'],
            ['7', 'Nötr', '—', 'Saf su'],
            ['8 – 10', 'Baz', 'Zayıf baz', 'Kabartma tozu çözeltisi, diş macunu'],
            ['11 – 14', 'Baz', 'Güçlü baz', 'Bazı temizlik malzemeleri'],
          ],
          caption:
            'Tabloyu tek yönde oku: ortadan (7) uzaklaştıkça özellik güçlenir. Örnek düzey sütunu ezberlenecek bir liste değil, aralıkları somutlaştırmak içindir.',
        },
        {
          id: 'lgs-fen-asit-baz-ph-tuzak',
          type: 'trap',
          title: 'pH sıralamasını ters kurmak',
          wrong: 'pH 2 olan madde, pH 6 olan maddeden daha zayıf asittir; çünkü sayısı küçük.',
          right: 'pH **küçüldükçe** asitlik **güçlenir.** pH 2 olan madde, pH 6 olan maddeden çok daha güçlü bir asittir.',
          body: 'Ters ilişkiyi akılda tutmanın yolu sayı doğrusudur: 7’den ne kadar uzaksa özellik o kadar güçlüdür. Sola uzaklık asitlik, sağa uzaklık bazlık demektir.',
        },
        {
          id: 'lgs-fen-asit-baz-ph-hafiza',
          type: 'memory',
          title: 'pH’ı tek cümlede tut',
          body:
            '**7 ortadır.** Sola gidersen asitlik güçlenir, sağa gidersen bazlık güçlenir. **Ortadan uzaklık = güç.**',
        },
      ],
    },

    {
      id: 'lgs-fen-asit-baz-etki',
      title: 'Asit ve bazların maddeler üzerindeki etkileri',
      lead: 'Kazanım F.8.4.4.5 bu etkilerin gözlenmesini ister; gözlem bize bir tedbir de öğretir.',
      blocks: [
        {
          id: 'lgs-fen-asit-baz-etki-anlatim',
          type: 'prose',
          body: `Asitler ve bazlar temas ettikleri maddeleri etkileyebilir. Bu etkiler gözle görülebilir ve bize önemli bir bilgi verir: **hangi maddeyi neyle temizlemeyeceğimizi.**

**Asitlerin etkileri:**

- Bazı metaller üzerinde **aşındırıcı** etki gösterirler. Metal yüzeyde bozulma, incelme ve zamanla delinme görülebilir.
- Mermer ve benzeri yapı taşları üzerinde bozulmaya yol açabilirler. Tarihî yapıların yüzeylerinde görülen aşınmanın nedenlerinden biri budur.
- Ciltte yanma ve tahrişe yol açabilirler.

**Bazların etkileri:**

- Yağları çözme özellikleri vardır; bu yüzden temizlik ürünlerinde yaygın olarak kullanılırlar.
- Bazı yüzeylerde matlaşmaya ve bozulmaya yol açabilirler.
- Güçlü bazlar ciltte ciddi tahrişe yol açabilir; kayganlık hissi bu etkinin bir işaretidir.

Bu gözlemler bir araya geldiğinde günlük hayatta işe yarayan bir kural çıkar:

**Her yüzey her temizlik ürünüyle temizlenmez.**

Mermer bir tezgâhı asit içeren bir ürünle temizlemek yüzeyi kalıcı olarak bozabilir. Metal bir yüzeyde asidik ürün kullanmak aşınmaya yol açabilir. Bu yüzden ürün etiketlerinde hangi yüzeylerde kullanılabileceği yazar.

Şimdi bu etkilerden doğan iki koruma yöntemine bakalım:

**Koruma 1 — Metalleri kaplamak.** Metal yüzeyler boya ya da başka bir kaplamayla örtülerek asitlerle ve nemle doğrudan teması engellenir.

**Koruma 2 — Nötrleşmeden yararlanmak.** Asit ile baz birbirinin etkisini azaltır. Bu yüzden asidik bir durumu gidermek için bazik bir madde, bazik bir durumu gidermek için asidik bir madde kullanılabilir.

Nötrleşmenin günlük hayattaki karşılıkları:

- Mide asidinin fazlalığından kaynaklanan yanma hissine karşı kullanılan bazı ürünler bazik özelliktedir.
- Arı sokmasında ve bazı böcek ısırıklarında farklı yaklaşımlar önerilmesinin nedeni, bunların farklı asitlik durumlarına sahip olmasıdır.
- Tarımda toprağın asitlik durumu, uygun maddeler eklenerek düzenlenir.

*Kapsam notu: program asit ve bazların yapısına girilmemesini istediği için nötrleşmeyi de bir denklemle değil, sonucuyla anlattık. Senden istenen, etkilerin gözlenmesi ve sonuçlarının bilinmesidir.*`,
        },
        {
          id: 'lgs-fen-asit-baz-etki-tablo',
          type: 'table',
          interactive: true,
          title: 'Etki, sonuç ve alınacak tedbir',
          columns: ['Durum', 'Gözlenen etki', 'Alınacak tedbir'],
          rows: [
            ['Metal yüzeyde asidik ürün', 'Aşınma, bozulma', 'Asidik ürün kullanmamak, yüzeyi kaplamak'],
            ['Mermer yüzeyde asidik ürün', 'Yüzeyde matlaşma ve bozulma', 'Etikette uygun yazan ürünü kullanmak'],
            ['Ciltle temas', 'Yanma, tahriş', 'Eldiven kullanmak, teması bol suyla yıkamak'],
            ['Mide asidi fazlalığı', 'Yanma hissi', 'Hekim önerisiyle uygun ürün kullanmak'],
            ['Toprağın asitlik durumu', 'Bitki gelişiminin etkilenmesi', 'Toprağın pH’ına uygun düzenleme yapmak'],
          ],
          caption:
            'Son sütun bu bölümün asıl çıktısıdır: bir etkiyi bilmek, ona karşı bir tedbir üretmeyi sağlar.',
        },
        {
          id: 'lgs-fen-asit-baz-etki-baglanti',
          type: 'connection',
          title: 'Bu bilgi nerelere bağlanıyor?',
          body:
            'Asit ve bazların etkileri yalnız bu dersin konusu değil; ünitenin ve günlük hayatın birçok yerine bağlanır.',
          links: [
            'Asit yağmurları konusu doğrudan asitlerin yapılar üzerindeki etkisine dayanır.',
            'Kimyasal değişim konusu, aşınmanın neden kimyasal bir olay olduğunu açıklar.',
            'Kimya endüstrisi konusunda bu maddelerin üretimi ve kullanımı yer alır.',
            'Ev güvenliği, bu dersteki tedbirlerin doğrudan uygulamasıdır.',
            'Tarımda toprak düzenlemesi pH bilgisine dayanır.',
          ],
        },
      ],
    },

    {
      id: 'lgs-fen-asit-baz-guvenlik',
      title: 'Güvenlik: temizlik malzemeleri nasıl kullanılır?',
      lead: 'Bu bölüm bir sınav konusundan fazlası. Program bunu ayrı bir kazanım olarak istiyor.',
      blocks: [
        {
          id: 'lgs-fen-asit-baz-guvenlik-anlatim',
          type: 'prose',
          body: `Evlerde kullanılan temizlik malzemelerinin büyük bölümü güçlü asit ya da güçlü baz içerir. Bu maddeler doğru kullanıldığında yararlıdır; bilinçsiz kullanıldığında **ciddi zarar verebilir.**

Program bu konuda tek bir şey ister: tehlikeleri bilmek ve **tedbir almak.** Kuralları tek tek görelim.

**Kural 1 — Temizlik malzemeleri birbiriyle karıştırılmaz.**

Bu, en önemli kuraldır. Farklı temizlik ürünleri karıştırıldığında sağlığa ciddi zarar verebilecek gazlar açığa çıkabilir. Bu gazlar solunum yollarını etkiler ve kapalı ortamda hayati tehlike oluşturabilir.

“Daha iyi temizlesin” diye ürün karıştırmak yaygın bir hatadır ve tehlikelidir. Her ürün **kendi başına** ve etiketinde yazdığı gibi kullanılır.

**Kural 2 — Etiket okunur.**

Ürünlerin üzerinde kullanım yönergesi ve uyarı işaretleri bulunur. Bu bilgiler süs değildir; ürünün nasıl kullanılacağını ve hangi yüzeylerde kullanılmaması gerektiğini söyler.

**Kural 3 — Ortam havalandırılır.**

Temizlik yapılırken pencere açılır. Kapalı ortamda biriken buhar ve gazlar solunum yollarını rahatsız edebilir.

**Kural 4 — Koruyucu kullanılır.**

Eldiven, cildin doğrudan temasını engeller. Gerektiğinde göz koruması da kullanılır.

**Kural 5 — Temas hâlinde bol suyla yıkanır.**

Madde cilde ya da göze temas ederse bölge bol suyla yıkanır ve gerekiyorsa sağlık kuruluşuna başvurulur.

**Kural 6 — Ürünler kendi kabında ve çocuklardan uzakta tutulur.**

Temizlik ürünleri başka bir kaba, özellikle içecek kabına aktarılmaz. Bu, yanlışlıkla içilmesine yol açabilen ciddi bir tehlikedir. Ürünler çocukların ulaşamayacağı yerlerde saklanır.

**Kural 7 — Yiyecek maddeleriyle birlikte saklanmaz.**

Temizlik ürünleri mutfakta yiyeceklerle aynı dolapta tutulmaz.

Bu yedi kural, kazanımın istediği “tedbir alma” davranışının tamamıdır.

Son olarak şunu vurgulayalım: bu bilgi bir sınav sorusundan ibaret değildir. Evde uygulanabilir ve gerçekten koruyucudur. Bir kazanımın günlük hayata bu kadar doğrudan bağlandığı yerler azdır; bu, onlardan biri.`,
        },
        {
          id: 'lgs-fen-asit-baz-guvenlik-surec',
          type: 'process',
          title: 'Temizlik yaparken izlenecek sıra',
          intro: 'Kurallar bir sıraya konduğunda uygulanabilir bir alışkanlığa dönüşür.',
          steps: [
            { title: '1. Etiketi oku', body: 'Ürünün hangi yüzeylerde kullanılacağını ve uyarılarını oku. Uygun değilse başka ürün kullan.' },
            { title: '2. Ortamı havalandır', body: 'Pencereyi aç. Kapalı ortamda temizlik yapma.' },
            { title: '3. Eldiven tak', body: 'Cildin ürünle doğrudan temasını engelle.' },
            { title: '4. Tek ürünle çalış', body: 'Ürünleri asla karıştırma. Bir ürünü kullanıp durulamadan başka ürüne geçme.' },
            { title: '5. Temas olursa bol suyla yıka', body: 'Cilde ya da göze temas ederse bölgeyi bol suyla yıka; gerekiyorsa sağlık kuruluşuna başvur.' },
            { title: '6. Ürünleri yerine kaldır', body: 'Kendi kabında, kapağı kapalı, çocukların ulaşamayacağı ve yiyeceklerden ayrı bir yerde sakla.' },
          ],
        },
        {
          id: 'lgs-fen-asit-baz-guvenlik-hoca',
          type: 'teacher_note',
          tone: 'warn',
          body:
            'Bu bölüm bir bilgi değil, bir davranış kazanımıdır. Sınavda “hangi tedbir doğrudur?” diye sorulabilir; ama asıl yeri evdir. Özellikle birinci kuralı aklında tut: **temizlik malzemeleri karıştırılmaz.**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Ayraç sonucunu oku',
      prompt:
        'Bir maddeye mavi turnusol kâğıdı değdirildiğinde kâğıt kırmızıya dönüyor. Aynı maddeye kırmızı turnusol değdirildiğinde bir değişiklik olmuyor. Bu madde asit midir, baz mıdır?',
      steps: [
        { title: '1. Mavi turnusolun kuralını hatırla', body: 'Mavi turnusol **asitte** kırmızıya döner.' },
        { title: '2. Birinci gözlemi değerlendir', body: 'Mavi turnusol kırmızıya dönmüş; bu, maddenin asit olduğuna işaret eder.' },
        { title: '3. Kırmızı turnusolun kuralını hatırla', body: 'Kırmızı turnusol **bazda** maviye döner.' },
        { title: '4. İkinci gözlemi değerlendir', body: 'Kırmızı turnusolda değişiklik olmamış; bu, maddenin baz olmadığını gösterir.' },
        { title: '5. İki gözlemi birleştir', body: 'İki gözlem de aynı yönü gösteriyor: madde **asittir.** İki ayrı ayraçla doğrulama yapılmış oldu.' },
      ],
      answer: 'Madde asittir; mavi turnusolu kırmızıya çevirmiş, kırmızı turnusolu değiştirmemiştir.',
      takeaway:
        'İki ayrı ayraçla sınamak sonucu güçlendirir: biri “asit” derken öbürü “baz değil” demiş olur.',
    },
    {
      title: 'Seviye 2 — pH’ları sırala',
      prompt:
        'Üç maddenin pH değerleri şöyledir: X = 2, Y = 7, Z = 11. Bu maddeleri sınıflandır ve X ile Z’nin özelliklerinin gücünü karşılaştır.',
      steps: [
        { title: '1. Aralıkları hatırla', body: 'pH 7’den küçükse asit, 7 ise nötr, 7’den büyükse bazdır.' },
        { title: '2. X’i sınıflandır', body: 'X’in pH’ı 2; 7’den küçük olduğu için **asittir.**' },
        { title: '3. Y’yi sınıflandır', body: 'Y’nin pH’ı 7; tam ortada olduğu için **nötrdür.**' },
        { title: '4. Z’yi sınıflandır', body: 'Z’nin pH’ı 11; 7’den büyük olduğu için **bazdır.**' },
        { title: '5. Güçleri karşılaştır', body: 'X, 7’ye 5 birim uzaklıkta; Z ise 4 birim uzaklıkta. İkisi de güçlü sayılır; X güçlü bir asit, Z güçlü bir bazdır.' },
        { title: '6. Yanlış karşılaştırmadan kaçın', body: 'X ile Z farklı gruplardadır; “hangisi daha güçlü asit” diye karşılaştırılamazlar. Yalnız kendi grupları içinde karşılaştırma anlamlıdır.' },
      ],
      answer: 'X asit, Y nötr, Z bazdır. X güçlü bir asit, Z güçlü bir bazdır; farklı grupta oldukları için asitlik bakımından karşılaştırılamazlar.',
      takeaway:
        'Karşılaştırma yaparken önce grubu belirle. Farklı gruptaki maddeler aynı özellik üzerinden sıralanamaz.',
    },
    {
      title: 'Seviye 3 — Tedbiri gerekçelendir',
      prompt:
        'Bir kişi banyoyu temizlerken iki farklı temizlik ürününü “daha iyi temizlesin” diye bir kapta karıştırmak istiyor. Bu davranışın neden tehlikeli olduğunu açıkla ve doğru yolu yaz.',
      steps: [
        { title: '1. Ürünlerin içeriğini düşün', body: 'Temizlik ürünlerinin büyük bölümü güçlü asit ya da güçlü baz içerir.' },
        { title: '2. Karıştırmanın sonucunu belirt', body: 'Farklı temizlik ürünleri karıştırıldığında sağlığa ciddi zarar verebilecek gazlar açığa çıkabilir.' },
        { title: '3. Riski somutlaştır', body: 'Bu gazlar solunum yollarını etkiler. Banyo gibi küçük ve kapalı bir alanda risk daha da artar.' },
        { title: '4. Beklentinin yanlışlığını göster', body: 'Karıştırmak temizleme gücünü artırmaz; ürünler kendi başlarına kullanılmak üzere hazırlanmıştır.' },
        { title: '5. Doğru yolu yaz', body: 'Her ürün etiketindeki yönergeye göre **ayrı ayrı** kullanılır. Bir üründen sonra yüzey durulanır, sonra gerekiyorsa öbür ürüne geçilir.' },
        { title: '6. Tedbirleri ekle', body: 'Pencere açılarak ortam havalandırılır, eldiven kullanılır, temas hâlinde bölge bol suyla yıkanır.' },
      ],
      answer:
        'Tehlikelidir; çünkü farklı temizlik ürünleri karıştırıldığında sağlığa zarar verebilecek gazlar açığa çıkabilir. Ürünler ayrı ayrı, etiketine göre, havalandırılmış ortamda ve eldivenle kullanılmalıdır.',
      takeaway:
        'Bu, sınav için ezberlenen değil, evde uygulanan bir bilgidir. Kazanımın amacı da tam olarak budur.',
    },
  ],

  dailyLife: {
    title: 'Asitler ve bazlar hayatın neresinde?',
    body:
      'Bu iki madde sınıfı mutfaktan banyoya, topraktan sağlığa kadar her yerde karşına çıkar.',
    links: [
      'Mutfaktaki limon suyu ve sirke asit, kabartma tozu bazdır.',
      'Sabun, şampuan ve deterjanlar bazik özellik taşır.',
      'Diş macunlarının bazik olması, ağızdaki asidik ortamı dengelemeye yöneliktir.',
      'Tarımda toprağın pH’ı ölçülür ve gerekiyorsa düzenlenir.',
      'Havuz ve içme suyunda pH belirli bir aralıkta tutulur.',
      'Temizlik ürünlerinin etiketlerindeki uyarılar bu dersteki tehlikelerle ilgilidir.',
    ],
  },

  questionClue: {
    concept: 'Asit–baz sorusu',
    statement:
      'Soruda turnusol renkleri, pH değerleri, günlük maddelerin listesi ya da bir temizlik durumu varsa, ölçülen şey bu dersin kavramlarıdır.',
    clues: [
      'Turnusol kâğıdının renk değişiminin verilmesi',
      'Maddelerin pH değerlerinin sayı olarak sıralanması',
      'Mor lahana suyu gibi bir ayraçtan söz edilmesi',
      'Günlük maddelerin (limon, sabun, sirke) listelenmesi',
      'Temizlik malzemesi kullanımıyla ilgili bir durumun anlatılması',
    ],
    reasoning:
      'Bu işaretler iki farklı işlem ister: ayraç sonucunu gruba çevirmek ya da pH sayısını konuma çevirmek. Güvenlik soruları ise tedbir listesini uygulatır.',
    boundary:
      'Bu ipuçlarını “pH büyükse asit güçlüdür” gibi ters bir kısayola çevirme. Ayrıca asit ve bazların yapısına, formüllerine bu düzeyde girilmez; sorular genel özellik ve kullanım üzerinden gelir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu altı kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Turnusol sonuçlarından maddenin grubunun belirlenmesi',
      'pH değerleri verilip sınıflandırma ya da sıralama istenmesi',
      'Günlük maddelerin asit–baz olarak ayrılması',
      'Bir ayraç deneyinin sonucunun yorumlanması',
      'Asitlerin ve bazların maddeler üzerindeki etkisinin sorulması',
      'Temizlik malzemesi kullanımında doğru tedbirin seçilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        'pH değeri 3 olan bir madde ile pH değeri 6 olan bir madde veriliyor. Hangisi daha güçlü asittir? Gerekçeni yaz.',
      hint: '7’ye uzaklık ne anlama geliyor?',
      answer:
        'pH değeri **3** olan madde daha güçlü asittir. pH ölçeğinde 7 nötr noktadır; 7’den uzaklaştıkça özellik güçlenir. Sola doğru, yani sayı küçüldükçe asitlik artar. pH 3, pH 6’ya göre 7’den daha uzaktır; bu yüzden daha güçlü bir asittir. İkisi de 7’den küçük olduğu için ikisi de asittir; fark güçlerindedir.',
    },
    {
      prompt:
        'Bir maddenin asit mi baz mı olduğunu anlamak için neden tadına bakmıyoruz? İki gerekçe yaz.',
      hint: 'Biri güvenlikle, biri ölçmeyle ilgili.',
      answer:
        'Birinci gerekçe **güvenliktir**: bazı asit ve bazlar ciltte yanığa yol açabilir, yutulduğunda ciddi zarar verebilir; özellikle temizlik malzemeleri güçlü asit ya da baz içerir. İkinci gerekçe **ölçülebilirliktir**: tat bir gözlemdir, sayı değildir; iki maddenin hangisinin daha güçlü olduğunu tat söyleyemez. Bu yüzden ayraçlar (maddeye dokunmadan bilgi verir) ve pH (durumu sayıya çevirir) kullanılır.',
    },
    {
      prompt:
        'Temizlik malzemelerinin birbiriyle karıştırılmaması neden bu kadar önemlidir?',
      hint: 'Ürünlerin içeriği ne, karışınca ne olabilir?',
      answer:
        'Çünkü temizlik malzemelerinin büyük bölümü güçlü asit ya da güçlü baz içerir. Farklı ürünler karıştırıldığında sağlığa **ciddi zarar verebilecek gazlar** açığa çıkabilir; bu gazlar solunum yollarını etkiler ve kapalı ortamda hayati tehlike oluşturabilir. Karıştırmak temizleme gücünü de artırmaz. Doğru yol, her ürünü etiketindeki yönergeye göre ayrı ayrı, havalandırılmış bir ortamda ve eldivenle kullanmaktır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tanım değil, sonucu okuma ve tedbir alma',
    body:
      'Altı kazanımın fiillerine bak: “ifade eder”, “örnekler verir”, “ayraçlar kullanarak belirler”, “bilgi verdiğini bilir”, “gözlemler”, “tedbir alır”. Son üçü doğrudan uygulama fiilleridir. Program ayrıca asit ve bazların yapısına girilmemesini ister. İkisi birlikte şunu söyler: bu konuda senden yapı ya da formül bilgisi beklenmez; bir ayraç sonucunu ya da pH değerini okuyup doğru sonuca varman ve doğru tedbiri seçmen beklenir.',
    measures: [
      'Asit ve bazların genel özelliklerini ayırt edebilme',
      'Günlük maddeleri doğru gruba yerleştirebilme',
      'Turnusol ve ayraç sonuçlarını okuyabilme',
      'pH değerinden grup ve güç çıkarımı yapabilme',
      'Asit ve bazların maddeler üzerindeki etkilerini bilme',
      'Temizlik malzemesi kullanımında doğru tedbiri seçebilme',
    ],
  },

  simulationTable: {
    title: 'Dört maddenin ayraç ve pH kaydı',
    columns: ['Madde', 'Mavi turnusol', 'Kırmızı turnusol', 'pH değeri'],
    rows: [
      ['K', 'Kırmızıya döndü', 'Değişmedi', '3'],
      ['L', 'Değişmedi', 'Değişmedi', '7'],
      ['M', 'Değişmedi', 'Maviye döndü', '12'],
      ['N', 'Kırmızıya döndü', 'Değişmedi', '6'],
    ],
    caption: 'Dört madde de aynı koşullarda, aynı ayraçlarla incelenmiştir.',
  },

  simulation: {
    title: 'Mini uygulama — özgün ayraç kaydı',
    passage: `Bir öğrenci dört maddeyi turnusol kâğıtlarıyla inceliyor ve ayrıca pH değerlerini ölçüp yukarıdaki kaydı tutuyor.

Öğrenci kayda bakarak maddeler hakkında çıkarım yapmak istiyor.`,
    question: 'Bu kayda göre aşağıdakilerden hangisi doğrudur?',
    options: [
      {
        text: 'K ve N asittir; K, N’den daha güçlü asittir',
        explanation:
          'Doğru cevap. İkisinde de mavi turnusol kırmızıya dönmüş ve pH değerleri 7’den küçük; ikisi de asittir. K’nin pH’ı 3, N’ninki 6 olduğu için K, 7’ye daha uzaktır ve daha güçlü asittir.',
      },
      {
        text: 'N, K’den daha güçlü asittir; çünkü pH değeri daha büyüktür',
        explanation:
          'pH ile asitlik arasındaki ilişki terstir: pH küçüldükçe asitlik güçlenir. N’nin pH’ı 6, K’ninki 3 olduğu için daha güçlü asit olan K’dir.',
      },
      {
        text: 'L bir bazdır; çünkü hiçbir turnusolu değiştirmemiştir',
        explanation:
          'Hiçbir turnusolu değiştirmemek baz olmak değil, **nötr** olmak anlamına gelir. L’nin pH değeri de 7’dir; bu, nötr olduğunu doğrular.',
      },
      {
        text: 'M asittir; çünkü bir turnusol kâğıdının rengini değiştirmiştir',
        explanation:
          'Önemli olan hangi turnusolun değiştiğidir. M, kırmızı turnusolu maviye çevirmiş ve pH’ı 12’dir; bu, M’nin baz olduğunu gösterir.',
      },
      {
        text: 'K ile M aynı gruptadır; çünkü ikisi de turnusol rengini değiştirmiştir',
        explanation:
          'Turnusol rengini değiştirmek tek başına grup bilgisi vermez. K mavi turnusolu kırmızıya çevirmiş (asit), M ise kırmızı turnusolu maviye çevirmiştir (baz); farklı gruplardadırlar.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru dört satırı tek tek değerlendirmeyi istiyor. Yöntem: önce hangi turnusolun değiştiğine bak (grup bilgisi), sonra pH değerine bak (güç bilgisi). İki sütun birbirini doğrular.',
    critical_point:
      'Kritik nokta K ile N’nin karşılaştırılmasıdır. İkisi de asit; fark pH değerlerinde. pH ile asitlik arasındaki ters ilişkiyi kuramayan öğrenci burada yanılır ve N’yi daha güçlü sanır.',
    takeaway:
      'Bir tabloda iki farklı sütun iki farklı soruyu cevaplar: turnusol “hangi grup”, pH “ne kadar güçlü”.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'pH değeri ile asitlik arasındaki ilişki aşağıdakilerden hangisidir?',
      options: [
        'pH büyüdükçe asitlik artar',
        'pH küçüldükçe asitlik artar',
        'pH değeri asitlik hakkında bilgi vermez',
        'pH yalnız bazlar için kullanılır',
      ],
      answer_index: 1,
      explanation:
        'pH ölçeğinde 7 nötr noktadır. 7’den küçük değerler asidi, büyük değerler bazı gösterir. Sayı küçüldükçe, yani 7’den sola uzaklaştıkça asitlik güçlenir. Bu ters ilişki sorularda en çok yanılınan noktadır. pH hem asitler hem bazlar için kullanılır ve ikisi hakkında da bilgi verir.',
    },
    {
      purpose: 'apply',
      question:
        'Bir maddeye kırmızı turnusol kâğıdı değdirildiğinde kâğıt maviye dönüyor. Bu madde için ne söylenebilir?',
      options: [
        'Asittir; pH değeri 7’den küçüktür',
        'Nötrdür; pH değeri 7’dir',
        'Bazdır; pH değeri 7’den büyüktür',
        'Turnusol sonucundan bir çıkarım yapılamaz',
      ],
      answer_index: 2,
      explanation:
        'Kırmızı turnusol kâğıdı bazlarda maviye döner. Öyleyse madde bazdır ve pH değeri 7’den büyüktür. Asit olsaydı mavi turnusolu kırmızıya çevirirdi, kırmızı turnusolda değişiklik olmazdı. Nötr bir madde ise hiçbir turnusolun rengini değiştirmezdi.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “İki temizlik ürününü karıştırırsam daha iyi temizler.” diyor. Bu düşüncenin hatası nedir?',
      options: [
        'Karıştırmanın sağlığa zarar verebilecek gazlar açığa çıkarabileceğini bilmemek',
        'Temizlik ürünlerinin baz içerdiğini bilmemek',
        'pH ölçeğini yanlış hatırlamak',
        'Turnusol kâğıdını yanlış kullanmak',
      ],
      answer_index: 0,
      explanation:
        'Temizlik ürünlerinin büyük bölümü güçlü asit ya da güçlü baz içerir. Farklı ürünler karıştırıldığında sağlığa ciddi zarar verebilecek gazlar açığa çıkabilir; kapalı ortamda bu durum hayati tehlike oluşturabilir. Ayrıca karıştırmak temizleme gücünü artırmaz. Doğru kullanım, her ürünü etiketine göre ayrı ayrı kullanmaktır.',
    },
  ],

  summary: [
    'Asitlerin sulu çözeltisi ekşi tada sahiptir ve mavi turnusolu kırmızıya çevirir.',
    'Bazların sulu çözeltisi acı tada sahiptir, ele kaygan gelir ve kırmızı turnusolu maviye çevirir.',
    'Bir maddenin asitlik durumu tat ya da dokunma ile değil, ayraç ve pH ile belirlenir.',
    'Ayraç, asit ya da bazla karşılaştığında renk değiştiren maddedir.',
    'Mor lahana suyu gibi günlük malzemeler ayraç olarak kullanılabilir.',
    'pH, asitlik ve bazlık durumunu 0 ile 14 arasında bir sayıyla ifade eder.',
    'pH 7’den küçükse asit, 7 ise nötr, 7’den büyükse bazdır.',
    'pH küçüldükçe asitlik, büyüdükçe bazlık güçlenir; 7’den uzaklık gücü gösterir.',
    'Asitler bazı metaller ve yapı taşları üzerinde aşındırıcı etki gösterir.',
    'Bazlar yağ çözme özellikleri nedeniyle temizlik ürünlerinde kullanılır.',
    'Asit ile baz karşılaştığında birbirinin etkisini azaltır; buna nötrleşme denir.',
    'Temizlik malzemeleri asla birbiriyle karıştırılmaz; zararlı gazlar açığa çıkabilir.',
    'Temizlik yaparken etiket okunur, ortam havalandırılır, eldiven kullanılır.',
    'Ürünler kendi kabında, çocuklardan ve yiyeceklerden uzakta saklanır.',
  ],

  next: [
    'Asit Yağmurları (F.8.4.4.7)',
    'Maddenin Isı ile Etkileşimi ve Hâl Değişim Grafikleri (F.8.4.5.1–F.8.4.5.4)',
    'Türkiye’de Kimya Endüstrisi (F.8.4.6.1, F.8.4.6.2)',
  ],
})

export default lesson
