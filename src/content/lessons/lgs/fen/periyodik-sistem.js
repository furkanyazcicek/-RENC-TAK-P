import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.4 Madde ve Endüstri · 1. ders
 * Kazanım : F.8.4.1.1 · F.8.4.1.2
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.4.1.1 → "Periyodik sisteme duyulan ihtiyaç ve periyodik sistemin
 *               oluşturulma süreci ayrıntıya girilmeden vurgulanır."
 *   F.8.4.1.2 → a) "Elementlerin özelliklerine girilmez."
 *               b) "Soygazların üzerinde durulur."
 *
 * Program soy gazlar için yalnız "üzerinde durulur" der; derste öne
 * çıkarılan KARARLILIK özelliği DRKOÇ'un seçimidir ve programa
 * atfedilmez.
 *
 * Bu yüzden derste tek tek elementlerin özellikleri (erime noktası,
 * yoğunluk, tepkime davranışı, elektron dizilimi) ANLATILMAZ. Ders
 * sınıflandırmanın MANTIĞI üzerine kurulur: tablo nasıl düzenlenmiş,
 * grup ve periyot ne anlama geliyor, üç sınıf nasıl ayrılıyor.
 *
 * Elektron dizilimi ve katman sayısı 8. sınıf kazanımında yer almadığı
 * için "periyot numarası katman sayısını verir" gibi bir açıklama
 * BİLİNÇLİ OLARAK kullanılmadı.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-periyodik-sistem',
  topic: 'Madde ve Endüstri',
  order: 1,
  title: 'Periyodik Sistem: Düzenin Kendisi Bilgidir',
  subtitle:
    'Periyodik sistem bir liste değil, bir düzendir. Bir elementin tablodaki yeri sana onun hakkında bir şey söyler.',
  minutes: 40,
  kazanimlar: ['F.8.4.1.1', 'F.8.4.1.2'],
  prerequisites: [
    { topic: 'Element ve sembol kavramı', why: 'Tabloda yer alan birimlerin ne olduğunu bilmeden düzeni okuyamazsın.' },
    { topic: 'Atom kavramı', why: 'Elementlerin atomlardan oluştuğunu bilmek sınıflandırmayı anlamlandırır.' },
  ],
  outcomes: [
    'Grup ile periyodun ne olduğunu ve nasıl oluşturulduğunu açıklayabileceksin.',
    'Bir elementin tablodaki yerini grup ve periyot olarak okuyabileceksin.',
    'Elementleri metal, yarı metal ve ametal olarak sınıflandırabileceksin.',
    'Soy gazların neden ayrı bir yerde durduğunu söyleyebileceksin.',
    'Periyodik sistemin neden bir liste değil bir düzen olduğunu anlatabileceksin.',
  ],

  opening: {
    title: 'Kütüphanede kitap aramak',
    lead: 'Rafları rastgele dizilmiş bir kütüphanede aradığın kitabı bulamazsın. Düzenli bir kütüphanede ise yerini tahmin edebilirsin.',
    body: `Bir kütüphane düşün. Binlerce kitap var ama hiçbir düzen yok: raflara rastgele dizilmişler. Aradığın kitabı bulmanın tek yolu hepsine tek tek bakmak.

Şimdi düzenli bir kütüphane düşün. Kitaplar konuya göre gruplanmış, her grup kendi içinde alfabetik sıralanmış. Artık aradığın kitabın **yerini tahmin edebilirsin.** Üstelik bir kitabın bulunduğu raf, sana o kitap hakkında bir şey söyler: hangi konuda olduğunu.

İşte periyodik sistem, elementler için tam olarak bunu yapar.

Bilinen elementler rastgele bir liste hâlinde dizilseydi, her birini ayrı ayrı ezberlemek zorunda kalırdık. Oysa periyodik sistemde elementler **benzerliklerine göre** yerleştirilmiştir. Bu yüzden bir elementin tablodaki **yeri**, o element hakkında bilgi taşır.

Bu dersin ana fikri budur: **düzenin kendisi bilgidir.**

Derste üç iş yapacağız:

1. Periyodik sistemin nasıl oluşturulduğuna kısaca bakacağız.
2. **Grup** ve **periyot** kavramlarını kuracağız.
3. Elementleri **metal, yarı metal ve ametal** olarak sınıflandırmayı öğreneceğiz.

Bir kapsam uyarısı: *program bu kazanımda **element özelliklerine girilmemesini** ister.* Yani tek tek elementlerin erime noktası, yoğunluğu ya da davranışı bu derste anlatılmayacak. Senden istenen, **sınıflandırmanın mantığını** kurmak ve bir elementin tablodaki yerini okuyabilmek.

Bu sınır işine yarar: çalışırken element ezberlemeye değil, düzeni anlamaya odaklan.`,
  },

  concepts: [
    {
      term: 'Periyodik sistem',
      body: 'Elementlerin belirli bir düzene göre yerleştirildiği tablodur. Elementler rastgele değil, benzerliklerine göre dizilir.',
    },
    {
      term: 'Grup',
      body: 'Periyodik sistemdeki **dikey sütunlardır.** Aynı gruptaki elementler birbirine benzeyen özellikler gösterir. Bu yüzden grup, tablodaki en anlamlı benzerlik ekseni sayılır.',
    },
    {
      term: 'Periyot',
      body: 'Periyodik sistemdeki **yatay sıralardır.** Bir periyot soldan sağa doğru okunur ve aynı periyottaki elementler bir sırayı paylaşır.',
    },
    {
      term: 'Metal',
      body: 'Periyodik sistemin sol ve orta bölümünde yer alan element sınıfıdır. Bilinen elementlerin büyük bölümü metaldir.',
    },
    {
      term: 'Ametal',
      body: 'Periyodik sistemin sağ üst bölümünde yer alan element sınıfıdır. Metallerden farklı davranışlar gösterirler.',
    },
    {
      term: 'Yarı metal',
      body: 'Metaller ile ametaller arasındaki sınır bölgesinde yer alan element sınıfıdır. Adından da anlaşılacağı gibi iki sınıfın arasında bir konumdadır. Kazanım metninde “yarımetal” biçiminde bitişik yazılır; ikisi aynı sınıfı anlatır.',
    },
    {
      term: 'Soy gaz',
      body: 'Periyodik sistemin en sağındaki grupta yer alan elementlerdir. **Kararlı yapıdadırlar**; bu yüzden başka elementlerle kolayca etkileşime girmezler. Program soy gazların üzerinde ayrıca durulmasını ister.',
    },
  ],

  why: {
    question: 'Elementler neden alfabetik değil de böyle bir düzende sıralanmış?',
    body: `Çünkü alfabetik bir sıralama hiçbir bilgi taşımaz.

Elementleri adlarının ilk harfine göre dizseydik, yan yana duran iki element arasında hiçbir ilişki olmazdı. Sıralama yalnız “bulmayı” kolaylaştırırdı, “anlamayı” değil.

Periyodik sistem farklı bir yol izler: elementleri **benzerliklerine göre** gruplar. Bu sayede tablo bir arama aracı olmaktan çıkıp bir **düşünme aracı** hâline gelir.

Kısaca oluşum sürecine bakalım. *Program, periyodik sisteme duyulan ihtiyacın ve oluşturulma sürecinin “ayrıntıya girilmeden” vurgulanmasını ister; bu yüzden yalnız ana fikri göreceğiz.*

Bilim insanları elementleri düzenlemek için uzun süre uğraştı. Bir noktada şu fark edildi: elementler belirli bir özelliğe göre sıralandığında, bazı benzerlikler **düzenli aralıklarla tekrar ediyordu.** Yani belirli bir sayıda element sonra benzer davranışlar yeniden ortaya çıkıyordu.

Bu düzenli tekrar, tablonun adını verir: **periyodik** sözcüğü “belirli aralıklarla tekrar eden” demektir.

Bu fark edilince tablo şöyle kuruldu: benzer özellik gösteren elementler **alt alta** gelecek biçimde yerleştirildi. Böylece dikey sütunlar oluştu ve bunlara **grup** dendi. Yatay sıralar ise **periyot** adını aldı.

Şimdi bu kurgunun sonucuna bakalım — dersin ana fikri burada:

**Bir elementin tablodaki yeri, o element hakkında bilgi taşır.**

Bir elementin hangi sütunda olduğunu bilirsen, hangi elementlere benzediğini de bilirsin. Hangi bölgede olduğunu bilirsen, metal mi ametal mi olduğunu bilirsin.

Bu yüzden periyodik sistem “ezberlenecek bir liste” değildir. Okunacak bir haritadır.

Son bir nokta: tabloda benzerlik ekseni **dikeydir.** Yani birbirine en çok benzeyen elementler yan yana değil, **alt alta** duranlardır. Öğrencilerin çoğu bunu ters kurar; sorularda da sık ölçülür.`,
  },

  mechanism: {
    title: 'Tablo nasıl kuruldu?',
    lead: 'Düzenin nasıl ortaya çıktığını görürsen, grup ve periyot kavramları ezber olmaktan çıkar.',
    intro:
      'Aşağıdaki adımlar periyodik sistemin kuruluş mantığını gösterir. Her adım bir öncekinin sonucudur.',
    steps: [
      {
        title: '1. Elementler bir düzene göre sıralandı',
        body: 'Bilinen elementler belirli bir özelliğe göre sıraya konuldu. Bu, rastgele bir listeden farklı olarak anlamlı bir başlangıç noktasıydı.',
      },
      {
        title: '2. Benzerliklerin tekrar ettiği fark edildi',
        body: 'Sıralama ilerledikçe bazı benzerliklerin belirli aralıklarla yeniden ortaya çıktığı görüldü. Bu düzenli tekrar tesadüf değildi.',
      },
      {
        title: '3. Tekrar eden benzerlikler alt alta getirildi',
        body: 'Sıra, benzer elementler alt alta gelecek biçimde satırlara bölündü. Böylece dikey sütunlar oluştu.',
      },
      {
        title: '4. Dikey sütunlara grup dendi',
        body: 'Aynı sütunda yer alan elementler birbirine benzeyen özellikler gösterir. Grup, tablodaki benzerlik eksenidir.',
      },
      {
        title: '5. Yatay sıralara periyot dendi',
        body: 'Her satır bir periyottur ve soldan sağa doğru okunur. Bir periyot boyunca ilerledikçe elementlerin özellikleri kademeli olarak değişir.',
      },
      {
        title: '6. Düzen, boşlukları da gösterdi',
        body: 'Tablo kurulduğunda bazı yerler boş kaldı. Bu boşluklar, henüz bulunmamış elementlerin varlığına işaret etti. Sonradan bulunan elementler bu boşlukları doldurdu.',
      },
    ],
    takeaway:
      'Son adım tablonun gücünü gösterir: iyi kurulmuş bir düzen, yalnız bilineni saklamaz; bilinmeyen hakkında da tahmin yürütmeyi sağlar.',
  },

  comparison: {
    title: 'Grup ile periyodun farkı',
    columns: ['Grup', 'Periyot'],
    rows: [
      { label: 'Tablodaki yönü', values: ['Dikey sütun', 'Yatay sıra'] },
      { label: 'Nasıl okunur?', values: ['Yukarıdan aşağıya', 'Soldan sağa'] },
      { label: 'Ne anlatır?', values: ['Benzer özellik gösteren elementler', 'Aynı sırayı paylaşan elementler'] },
      { label: 'Benzerlik ekseni mi?', values: ['Evet — asıl benzerlik burada', 'Hayır — özellikler kademeli değişir'] },
      { label: 'Kütüphane benzetmesi', values: ['Aynı konudaki kitaplar', 'Aynı raftaki sıra'] },
      { label: 'Soruda nasıl geçer?', values: ['“Aynı grupta bulunan elementler…”', '“Aynı periyotta bulunan elementler…”'] },
    ],
    insight:
      'Dördüncü satır bu dersin kritik bilgisidir: birbirine benzeyen elementler yan yana değil, **alt alta** durur.',
  },

  traps: [
    {
      title: 'Benzerlik eksenini yatay sanmak',
      wrong: 'Yan yana duran elementler birbirine en çok benzeyen elementlerdir.',
      right: 'Benzerlik ekseni **dikeydir.** Birbirine en çok benzeyen elementler aynı **grupta**, yani alt alta bulunanlardır.',
      body: 'Tablo zaten bu amaçla kurulmuştur: benzer elementler alt alta gelsin diye sıra satırlara bölünmüştür. Aynı periyottaki elementler bir sırayı paylaşır ama özellikleri soldan sağa kademeli olarak değişir.',
    },
    {
      title: 'Grup ile periyodu ters adlandırmak',
      wrong: 'Grup yatay sıra, periyot dikey sütundur.',
      right: 'Tam tersi: **grup dikey sütun**, **periyot yatay sıradır.**',
      body: 'Karıştırmamak için bir bağ kur: “periyot” sözcüğü zamanla ilgilidir ve zaman çizgisi gibi **soldan sağa** akar. Grup ise bir topluluktur ve topluluk alt alta dizilir.',
    },
    {
      title: 'Elementlerin çoğunun ametal olduğunu sanmak',
      wrong: 'Periyodik sistemdeki elementlerin çoğu ametaldir.',
      right: 'Bilinen elementlerin **büyük bölümü metaldir.** Ametaller tablonun sağ üst bölümünde, görece küçük bir alanda yer alır.',
      body: 'Tabloya bakarken alanların büyüklüğüne dikkat et: metaller sol ve orta bölümün tamamını kaplar. Bu, gözle görülür bir bilgidir ve ezber gerektirmez.',
    },
    {
      title: 'Soy gazları sıradan bir ametal grubu sanmak',
      wrong: 'Soy gazlar da öbür ametaller gibi davranır.',
      right: 'Soy gazlar **kararlı yapıdadır**; bu yüzden başka elementlerle kolayca etkileşime girmezler. Program soy gazların üzerinde ayrıca durulmasını ister; bu grubun en belirgin özelliği kararlılığıdır.',
      body: 'Tablonun en sağındaki sütunda yer alırlar. “Soy” sözcüğü buradan gelir: kendi hâlinde duran, kolay kolay birleşmeyen anlamında.',
    },
  ],

  variables: null,

  deepDiveSections: [
    {
      id: 'lgs-fen-periyodik-yer-okuma',
      title: 'Bir elementin tablodaki yerini okumak',
      lead: 'Bu bölümün tek işi var: grup ve periyodu bir konum bilgisine çevirmek.',
      blocks: [
        {
          id: 'lgs-fen-periyodik-yer-okuma-anlatim',
          type: 'prose',
          body: `Periyodik sistemde bir elementin yeri iki bilgiyle belirtilir: **grubu** ve **periyodu.**

Bu, bir sinema salonundaki koltuk numarasına benzer. “7. sıra, 4. koltuk” dediğinde tek bir yer tarif etmiş olursun. Periyodik sistemde de “3. periyot, 2. grup” dediğinde tek bir element kastedilir.

**Periyot numarası** elementin kaçıncı yatay sırada olduğunu söyler. Periyotlar yukarıdan aşağıya doğru numaralanır.

**Grup numarası** elementin kaçıncı dikey sütunda olduğunu söyler. Gruplar soldan sağa doğru numaralanır.

Şimdi bu iki bilgiyi nasıl kullanacağını görelim.

**Kullanım 1 — Benzer elementleri bulmak.** Bir elementin grubunu biliyorsan, o gruptaki öbür elementlerin ona benzediğini bilirsin. Bu, tablonun sana verdiği en güçlü bilgidir.

**Kullanım 2 — Sınıfı belirlemek.** Bir elementin tablodaki bölgesini biliyorsan, metal mi ametal mi yarı metal mi olduğunu söyleyebilirsin. Sol ve orta bölüm metal (hidrojen hariç), sağ üst bölüm ametal, aradaki sınır bölgesi yarı metaldir.

**Kullanım 3 — Karşılaştırma yapmak.** İki element verildiğinde, aynı grupta mı aynı periyotta mı olduklarına bakarsın. Aynı gruptaysalar benzer özellikler gösterirler; aynı periyottaysalar yalnız bir sırayı paylaşırlar.

Şimdi bir uyarı. Öğrencilerin çoğu şunu yapar: elementleri tek tek ezberlemeye çalışır. Bu gereksizdir ve zaten *program da element özelliklerine girilmemesini ister.*

Senden istenen şey konumu **okumak**. Bir soruda tablo ya da tablonun bir bölümü verilir; sen o tabloyu okuyup soruyu cevaplarsın. Ezber değil, okuma.

Son olarak bir düzen ayrıntısı: soy gazlar tablonun **en sağındaki** grupta yer alır. Bir periyodun sonu her zaman bir soy gazla biter. Bu, tablonun kuruluşundaki düzenli tekrarın en görünür işaretlerinden biridir.`,
        },
        {
          id: 'lgs-fen-periyodik-yer-okuma-tablo',
          type: 'table',
          interactive: true,
          title: 'İki element verildiğinde ne sorulur?',
          columns: ['Durum', 'Ne anlama gelir?', 'Ne söylenebilir?'],
          rows: [
            ['Aynı grupta', 'Aynı dikey sütunda, alt alta', 'Benzer özellikler gösterirler'],
            ['Aynı periyotta', 'Aynı yatay sırada, yan yana', 'Bir sırayı paylaşırlar; özellikleri kademeli değişir'],
            ['Farklı grup ve periyotta', 'Tablonun farklı bölgelerinde', 'Doğrudan bir benzerlik ilişkisi kurulamaz'],
            ['İkisi de sol bölgede', 'Metal bölgesi', 'İkisi de metaldir'],
            ['İkisi de sağ üst bölgede', 'Ametal bölgesi', 'İkisi de ametaldir'],
            ['En sağdaki sütunda', 'Soy gaz grubu', 'Kararlı yapıdadırlar'],
          ],
          caption:
            'Bir soruda önce bu tablodaki satırlardan hangisine düştüğünü belirle; cevap çoğu zaman oradan çıkar.',
        },
        {
          id: 'lgs-fen-periyodik-yer-okuma-hafiza',
          type: 'memory',
          title: 'Yönleri karıştırmamanın yolu',
          body:
            '**Periyot** zaman gibidir: soldan sağa akar, **yatay**dır. **Grup** bir topluluktur: alt alta dizilir, **dikey**dir. Benzerlik ise gruptadır.',
        },
        {
          id: 'lgs-fen-periyodik-yer-okuma-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Sorularda tablo genellikle harflerle verilir: elementlerin gerçek adları yerine X, Y, Z gibi semboller kullanılır. Bu bilinçlidir — soru senden ezber değil, **tabloyu okuma** ister. Harfleri görünce rahatla: gerçek element bilmen gerekmiyor.',
        },
      ],
    },

    {
      id: 'lgs-fen-periyodik-siniflar',
      title: 'Metal, yarı metal, ametal ve soy gazlar',
      lead: 'Sınıflandırmanın kendisi bir konum bilgisidir: nerede duruyorsa o sınıftandır.',
      blocks: [
        {
          id: 'lgs-fen-periyodik-siniflar-anlatim',
          type: 'prose',
          body: `Periyodik sistemdeki elementler üç sınıfa ayrılır: **metal, yarı metal, ametal.**

Bu sınıflandırmanın en pratik yanı şudur: sınıfı belirlemek için elementin özelliklerini bilmene gerek yoktur. **Tablodaki yerine** bakman yeterlidir.

**Metaller** tablonun **sol ve orta** bölümünde yer alır. Bilinen elementlerin büyük bölümü metaldir; tabloya baktığında en geniş alanı onlar kaplar.

**Ametaller** tablonun **sağ üst** bölümünde yer alır. Kapladıkları alan metallere göre küçüktür.

Bu konum kuralının bilinen bir istisnası var; onu mutlaka bil: **hidrojen** tablonun sol üst köşesinde, 1. grubun başında durur ama bir **ametaldir.** Periyodik tablolarda bu yüzden çoğu zaman metallerden farklı bir renkle gösterilir. Bir soruda tablo renkli verilmişse rengi, konumdan önce oku.

**Yarı metaller** ikisinin arasındaki **sınır bölgesinde** yer alır. Bu isim tesadüf değildir: konumları gibi özellikleri de iki sınıfın arasındadır.

Sınır bölgesi fikrini kavramak önemlidir. Metal bölgesinden ametal bölgesine geçerken keskin bir çizgi yoktur; arada bir geçiş şeridi bulunur ve yarı metaller oradadır.

Şimdi **soy gazlara** gelelim. Program bu grubun üzerinde özellikle durulmasını ister.

Soy gazlar tablonun **en sağındaki** grupta yer alır. En belirgin özellikleri **kararlı yapıda** olmalarıdır: başka elementlerle kolayca etkileşime girmezler, kendi hâllerinde dururlar.

“Soy” sözcüğü buradan gelir — kolay kolay birleşmeyen, kendi başına duran anlamında.

Bu kararlılık neden önemli? Çünkü periyodik sistemin düzeninde bir işaret noktası oluşturur: her periyot bir soy gazla biter. Tablonun sağ kenarı boyunca inen bu sütun, düzenli tekrarın en görünür işaretidir.

Şimdi bir kapsam uyarısı, bu dersin en önemli sınırı:

*Program bu kazanımda **element özelliklerine girilmemesini** açıkça ister.* Yani metallerin ve ametallerin tek tek fiziksel ve kimyasal özelliklerini ezberlemen istenmiyor. Senden istenen, elementleri **tablo üzerinde** sınıflandırabilmek.

Bu sınırı bilmek çalışma zamanını doğrudan etkiler. Piyasadaki bazı kaynaklar uzun özellik listeleri verir; sen tablo okumaya odaklan.

Son olarak sınıflandırmanın mantığını bir cümlede toplayalım: **konum bilgisi, sınıf bilgisidir.** Tabloda nerede duruyorsa o sınıftandır.`,
        },
        {
          id: 'lgs-fen-periyodik-siniflar-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Üç sınıf ve soy gazlar: konumla tanı',
          columns: ['Metaller', 'Ametaller', 'Yarı metaller'],
          rows: [
            { label: 'Tablodaki bölge', values: ['Sol ve orta', 'Sağ üst', 'İkisinin arasındaki sınır şeridi'] },
            { label: 'Kapladığı alan', values: ['En geniş', 'Daha küçük', 'İnce bir şerit'] },
            { label: 'Adının anlamı', values: ['—', '“Metal olmayan”', '“İki sınıfın arasında”'] },
            { label: 'Nasıl tanınır?', values: ['Konumdan', 'Konumdan', 'Konumdan'] },
            { label: 'Soy gazlarla ilişkisi', values: ['Ayrı bölgededir', 'Soy gazlar en sağdaki sütundadır', 'Ayrı bölgededir'] },
          ],
          insight:
            'Dördüncü satır üç sütunda da aynı: sınıfı belirleyen şey elementin özelliği değil, tablodaki konumudur. Bu, kazanımın istediği beceridir.',
        },
        {
          id: 'lgs-fen-periyodik-siniflar-tuzak',
          type: 'trap',
          title: 'Yarı metali “yarı metal yarı ametal karışımı” sanmak',
          wrong: 'Yarı metaller, metal ve ametallerin karışımından oluşur.',
          right: 'Yarı metal bir **karışım değildir**; kendi başına bir element sınıfıdır. Adı, özelliklerinin iki sınıfın arasında olmasından gelir.',
          body: 'Periyodik sistemdeki her kutu bir elementi gösterir; karışımları değil. Yarı metaller, metal bölgesiyle ametal bölgesi arasındaki sınır şeridinde yer alan elementlerdir.',
        },
        {
          id: 'lgs-fen-periyodik-siniflar-baglanti',
          type: 'connection',
          title: 'Bu düzen sonraki derslerde ne işe yarayacak?',
          body:
            'Periyodik sistem yalnız bu dersin konusu değildir; ünitenin geri kalanında kullanacağın bir haritadır.',
          links: [
            'Fiziksel ve kimyasal değişim konusunda elementlerin nasıl davrandığını konumlarıyla ilişkilendireceksin.',
            'Bileşiklerin oluşumunda farklı sınıflardan elementlerin bir araya gelmesi söz konusudur.',
            'Asit ve bazlar konusunda karşına çıkan maddeler bu elementlerden oluşur.',
            'Kimya endüstrisi konusunda hangi elementlerin sanayide kullanıldığını göreceksin.',
            'Soy gazların kararlılığı, maddelerin neden birleştiği sorusunun arka planıdır.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Konumu oku',
      prompt:
        'Bir periyodik sistemde X elementi 3. yatay sırada, 2. dikey sütunda bulunuyor. Bu elementin periyodu ve grubu nedir?',
      steps: [
        { title: '1. Yatay sıranın adını hatırla', body: 'Periyodik sistemde yatay sıralara **periyot** denir.' },
        { title: '2. Periyodu yaz', body: 'X, 3. yatay sırada bulunduğuna göre **3. periyottadır.**' },
        { title: '3. Dikey sütunun adını hatırla', body: 'Dikey sütunlara **grup** denir.' },
        { title: '4. Grubu yaz', body: 'X, 2. dikey sütunda bulunduğuna göre **2. gruptadır.**' },
        { title: '5. Konumu birlikte ifade et', body: 'X elementi 3. periyot, 2. grupta yer alır. Bu iki bilgi birlikte tablodaki tek bir yeri gösterir.' },
      ],
      answer: 'X elementi 3. periyotta ve 2. gruptadır.',
      takeaway:
        'Yatay = periyot, dikey = grup. Bu iki eşleştirme oturduğunda konum soruları kendiliğinden çözülür.',
    },
    {
      title: 'Seviye 2 — Benzerliği bul',
      prompt:
        'Bir tabloda X ve Y elementleri aynı dikey sütunda; X ile Z ise aynı yatay sırada bulunuyor. Hangi iki elementin özellikleri birbirine daha çok benzer? Gerekçeni yaz.',
      steps: [
        { title: '1. Konumları adlandır', body: 'X ile Y aynı dikey sütunda, yani aynı **gruptadır.** X ile Z aynı yatay sırada, yani aynı **periyottadır.**' },
        { title: '2. Benzerlik eksenini hatırla', body: 'Periyodik sistem, benzer özellik gösteren elementler alt alta gelecek biçimde kurulmuştur. Benzerlik ekseni **dikeydir.**' },
        { title: '3. Grup ilişkisini değerlendir', body: 'Aynı grupta bulunan elementler birbirine benzeyen özellikler gösterir. Öyleyse X ile Y benzer davranır.' },
        { title: '4. Periyot ilişkisini değerlendir', body: 'Aynı periyotta bulunmak yalnız bir sırayı paylaşmak demektir. Bu elementlerin özellikleri soldan sağa kademeli olarak değişir.' },
        { title: '5. Karşılaştır ve sonuca var', body: 'Benzerlik grup ekseninde olduğu için **X ile Y** birbirine daha çok benzer.' },
      ],
      answer: 'X ile Y birbirine daha çok benzer; çünkü aynı grupta, yani aynı dikey sütunda bulunurlar.',
      takeaway:
        'Sorularda “benzer özellik” ifadesini gördüğünde ilk bakacağın şey grup, yani dikey sütun olmalıdır.',
    },
    {
      title: 'Seviye 3 — Sınıfı konumdan çıkar',
      prompt:
        'Bir periyodik sistem şemasında K elementi sol bölümde, L elementi sağ üst bölümde, M elementi ise ikisinin arasındaki sınır şeridinde gösteriliyor. N elementi ise en sağdaki sütunda. Bu dört elementi sınıflandır ve N hakkında ne söyleyebileceğini yaz.',
      steps: [
        { title: '1. Bölgeleri hatırla', body: 'Sol ve orta bölüm metal, sağ üst bölüm ametal, aradaki sınır şeridi yarı metaldir. En sağdaki sütun ise soy gazlardır.' },
        { title: '2. K’yi sınıflandır', body: 'K sol bölümde bulunuyor; öyleyse **metaldir.**' },
        { title: '3. L’yi sınıflandır', body: 'L sağ üst bölümde bulunuyor; öyleyse **ametaldir.**' },
        { title: '4. M’yi sınıflandır', body: 'M sınır şeridinde bulunuyor; öyleyse **yarı metaldir.**' },
        { title: '5. N’yi sınıflandır', body: 'N en sağdaki sütunda bulunuyor; öyleyse bir **soy gazdır.**' },
        { title: '6. N hakkında çıkarım yap', body: 'Soy gazlar **kararlı yapıdadır**; başka elementlerle kolayca etkileşime girmezler. Soy gazlar, programın ayrıca üzerinde durulmasını istediği gruptur.' },
      ],
      answer:
        'K metal, L ametal, M yarı metal, N ise soy gazdır. N kararlı yapıda olduğu için başka elementlerle kolayca etkileşime girmez.',
      takeaway:
        'Dört sınıflandırmanın dördü de yalnız konuma bakılarak yapıldı; hiçbir element özelliği ezberlenmedi.',
    },
  ],

  dailyLife: {
    title: 'Periyodik sistem nerede işe yarıyor?',
    body:
      'Bu düzen bir ders konusu olmanın ötesinde, bilimin ve sanayinin ortak dilidir.',
    links: [
      'Sanayide hangi malzemenin kullanılacağına karar verilirken elementlerin sınıfı dikkate alınır.',
      'Laboratuvarlarda maddeler adlandırılırken ve sembollerle gösterilirken bu ortak dil kullanılır.',
      'Yeni bir element bulunduğunda tabloda kendisine ayrılmış yere yerleştirilir.',
      'Teknoloji üretiminde yarı metallerin sınır konumu önemli bir yer tutar.',
      'Soy gazların kararlı yapısı, bazı kullanım alanlarında tercih edilme nedenidir.',
    ],
  },

  questionClue: {
    concept: 'Periyodik sistem sorusu',
    statement:
      'Soruda bir tablo parçası, harflerle gösterilmiş elementler ya da “aynı grupta / aynı periyotta” ifadeleri varsa, ölçülen şey tablo okumadır.',
    clues: [
      'Elementlerin X, Y, Z gibi harflerle gösterilmesi',
      'Tablonun bir bölümünün şema hâlinde verilmesi',
      '“Aynı grupta bulunan” ya da “aynı periyotta bulunan” ifadeleri',
      '“Benzer özellik gösterir” ifadesi',
      'Metal, ametal, yarı metal ya da soy gaz sözcüklerinin geçmesi',
    ],
    reasoning:
      'Bu işaretler tek bir işlemi ister: konumu okumak. Dikey ise grup ve benzerlik; yatay ise periyot ve kademeli değişim; bölge ise sınıf bilgisi.',
    boundary:
      'Bu ipuçlarını element ezberine çevirme. Program bu kazanımda element özelliklerine girilmemesini ister; sorular da bu yüzden gerçek element adları yerine harf kullanır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.4.1.1 ve F.8.4.1.2 kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir elementin grup ve periyodunun tablodan okunması',
      'Hangi elementlerin benzer özellik göstereceğinin sorulması',
      'Grup ve periyot kavramlarının ayırt edilmesi',
      'Verilen elementlerin metal, yarı metal, ametal olarak sınıflandırılması',
      'Soy gazların kararlı yapısı üzerine bir çıkarım istenmesi',
      'Bir öğrenci açıklamasındaki grup–periyot karışıklığının bulunması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Periyodik sistemde birbirine en çok benzeyen elementler yan yana mı, alt alta mı bulunur? Neden?',
      hint: 'Tablo hangi amaçla satırlara bölünmüştü?',
      answer:
        '**Alt alta** bulunurlar. Periyodik sistem, elementler sıralanırken tekrar eden benzerlikler **alt alta gelecek biçimde** satırlara bölünerek kurulmuştur. Bu yüzden aynı dikey sütunda, yani aynı grupta bulunan elementler birbirine benzeyen özellikler gösterir. Yan yana bulunmak ise aynı periyotta olmak demektir; aynı periyottaki elementlerin özellikleri soldan sağa doğru kademeli olarak değişir.',
    },
    {
      prompt:
        'Bir elementin metal mi ametal mi olduğunu belirlemek için özelliklerini bilmek zorunda mısın?',
      hint: 'Kazanım seni neye bakmaya yönlendiriyor?',
      answer:
        'Hayır. Kazanım elementlerin **periyodik tablo üzerinde** sınıflandırılmasını ister; yani sınıfı belirlemek için tablodaki **konuma** bakmak yeterlidir. Sol ve orta bölüm metal, sağ üst bölüm ametal, aradaki sınır şeridi yarı metaldir. Program ayrıca element özelliklerine girilmemesini açıkça belirtir; bu yüzden sorular da özellik ezberi değil, konum okuma ister.',
    },
    {
      prompt:
        'Program soy gazların üzerinde ayrıca durulmasını ister. Bu grubun en belirgin özelliği nedir ve ne anlama gelir?',
      hint: 'Adlarındaki “soy” sözcüğü ne anlatıyor?',
      answer:
        'Soy gazların en belirgin özelliği **kararlı yapıda** olmalarıdır. Kararlı olmak, başka elementlerle kolayca etkileşime girmemek demektir; soy gazlar kendi hâllerinde durur. Tablonun en sağındaki grupta yer alırlar ve her periyodun sonunda bir soy gaz bulunur. Bu düzenli tekrar, periyodik sistemin kuruluş mantığının en görünür işaretlerinden biridir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey ezber değil, tablo okuma',
    body:
      'Kazanımların fiilleri yön gösteriyor: “nasıl oluşturulduğunu **açıklar**” ve “periyodik tablo **üzerinde** sınıflandırır”. İkincisindeki “üzerinde” sözcüğü belirleyicidir: sınıflandırma tabloya bakılarak yapılır. Program ayrıca element özelliklerine girilmemesini ister. MEB merkezî sınav kılavuzu da soruların okuduğunu anlama, yorumlama ve analiz becerilerini ölçecek nitelikte hazırlandığını belirtir; bu konuda somut karşılığı bir tabloyu ya da şemayı doğru okuyabilmendir.',
    measures: [
      'Grup ve periyot kavramlarını doğru adlandırabilme',
      'Bir elementin konumunu grup ve periyot olarak okuyabilme',
      'Benzerlik ekseninin dikey olduğunu bilme',
      'Elementleri tablo üzerinde metal, yarı metal, ametal olarak sınıflandırabilme',
      'Soy gazların kararlı yapıda olduğunu bilme',
      'Bir şemadan doğrudan bilgi çıkarabilme',
    ],
  },

  simulationTable: {
    title: 'Bir periyodik sistem şemasında dört elementin konumu',
    columns: ['Element', 'Periyot (yatay sıra)', 'Grup (dikey sütun)', 'Bulunduğu bölge'],
    rows: [
      ['X', '2', '1', 'Sol bölüm'],
      ['Y', '3', '1', 'Sol bölüm'],
      ['Z', '3', '6', 'Sağ üst bölüm'],
      ['T', '3', '8', 'En sağdaki sütun'],
    ],
    caption:
      'Elementler gerçek adlarıyla değil, harflerle gösterilmiştir; soru tablo okumayı ölçer.',
  },

  simulation: {
    title: 'Mini uygulama — özgün şema okuma',
    passage: `Bir öğrenci periyodik sistemin bir bölümünü inceleyip dört elementin konumunu yukarıdaki tabloya kaydediyor.

Öğrenci kayda bakarak elementler arasındaki ilişkiler hakkında çıkarım yapmak istiyor.`,
    question: 'Bu kayda göre aşağıdakilerden hangisi doğrudur?',
    options: [
      {
        text: 'X ile Y benzer özellikler gösterir; T ise kararlı yapıdadır',
        explanation:
          'Doğru cevap. X ile Y aynı grupta (1. grup) bulunduğu için benzer özellikler gösterir. T ise en sağdaki sütunda, yani soy gaz grubunda yer alır; soy gazlar kararlı yapıdadır.',
      },
      {
        text: 'Y ile Z benzer özellikler gösterir; çünkü ikisi de 3. periyottadır',
        explanation:
          'Aynı periyotta bulunmak yalnız bir yatay sırayı paylaşmak demektir; benzerlik anlamına gelmez. Benzerlik ekseni dikeydir, yani gruptadır. Üstelik Y sol bölümde, Z sağ üst bölümde yer alır.',
      },
      {
        text: 'X ile Y aynı periyotta bulundukları için aynı sınıftandır',
        explanation:
          'X 2. periyotta, Y ise 3. periyottadır; aynı periyotta değildirler. İkisinin ortak yanı aynı grupta bulunmalarıdır. Ayrıca sınıfı belirleyen periyot değil, tablodaki bölgedir.',
      },
      {
        text: 'Z bir metaldir; çünkü 3. periyotta yer almaktadır',
        explanation:
          'Periyot numarası sınıf bilgisi vermez. Z sağ üst bölümde bulunduğu için ametaldir. Aynı periyotta hem metaller hem ametaller bulunabilir.',
      },
      {
        text: 'T ile Z aynı periyotta oldukları için ikisi de kararlı yapıdadır',
        explanation:
          'İkisi de 3. periyotta bulunur; ama kararlılık periyottan değil, soy gaz grubunda yer almaktan gelir. T en sağdaki sütunda olduğu için kararlıdır; Z için böyle bir çıkarım yapılamaz.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru dört satırı ilişkilendirmeyi istiyor. Yöntem: önce grup sütununa bak (aynı grup → benzerlik), sonra bölge sütununa bak (sınıf bilgisi). Periyot sütunu bu soruda çeldirici üretmek için konulmuştur.',
    critical_point:
      'Kritik nokta, üç seçeneğin de aynı periyotta olmayı bir benzerlik ya da ortaklık gerekçesi gibi sunmasıdır. Aynı periyotta olmak yalnız bir sırayı paylaşmaktır; benzerlik ekseni dikeydir.',
    takeaway:
      'Bir tablo sorusunda hangi sütunun bilgi, hangisinin çeldirici olduğunu ayırt etmek çözümün yarısıdır.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Periyodik sistemde grup ve periyot ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Grup yatay sıra, periyot dikey sütundur',
        'Grup dikey sütun, periyot yatay sıradır',
        'Grup ve periyot aynı anlama gelir',
        'Grup yalnız metaller için, periyot yalnız ametaller için kullanılır',
      ],
      answer_index: 1,
      explanation:
        'Periyodik sistemde dikey sütunlara grup, yatay sıralara periyot denir. Aynı gruptaki elementler benzer özellikler gösterir; aynı periyottakiler ise yalnız bir sırayı paylaşır. Karıştırmamak için “periyot” sözcüğünün zaman gibi soldan sağa aktığını düşünebilirsin. Son seçenek ise sınıflandırmayla konum kavramlarını birbirine karıştırmaktadır.',
    },
    {
      purpose: 'apply',
      question:
        'Bir periyodik sistem şemasında P elementi sağ üst bölümde, R elementi ise sol bölümde gösteriliyor. Bu elementler için ne söylenebilir?',
      options: [
        'İkisi de metaldir',
        'P ametal, R metaldir',
        'P metal, R ametaldir',
        'İkisi de yarı metaldir',
      ],
      answer_index: 1,
      explanation:
        'Periyodik sistemde sol ve orta bölümde metaller, sağ üst bölümde ametaller, ikisinin arasındaki sınır şeridinde yarı metaller yer alır. P sağ üst bölümde olduğu için ametal, R sol bölümde olduğu için metaldir. Sınıflandırma için elementlerin özelliklerini bilmeye gerek yoktur; konum yeterlidir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Aynı periyotta bulunan elementler birbirine en çok benzeyen elementlerdir.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Benzerlik ekseninin grup, yani dikey sütun olduğunu gözden kaçırmak',
        'Periyodun yatay sıra olduğunu bilmemek',
        'Soy gazların kararlı olduğunu unutmak',
        'Metallerin sayıca çok olduğunu göz ardı etmek',
      ],
      answer_index: 0,
      explanation:
        'Periyodik sistem, tekrar eden benzerlikler alt alta gelecek biçimde kurulmuştur; bu yüzden benzerlik ekseni dikeydir. Birbirine en çok benzeyen elementler aynı **grupta** bulunanlardır. Aynı periyotta bulunmak yalnız bir yatay sırayı paylaşmak demektir ve o sıra boyunca özellikler kademeli olarak değişir. Öğrenci periyodun ne olduğunu doğru bilmiş, ama benzerlik eksenini ters kurmuştur.',
    },
  ],

  summary: [
    'Periyodik sistem, elementlerin benzerliklerine göre yerleştirildiği bir düzendir.',
    'Elementler sıralandığında bazı benzerliklerin düzenli aralıklarla tekrar ettiği fark edilmiştir.',
    'Bu tekrar eden benzerlikler alt alta gelecek biçimde satırlara bölünerek tablo kurulmuştur.',
    'Dikey sütunlara grup denir; aynı gruptaki elementler benzer özellikler gösterir.',
    'Yatay sıralara periyot denir; bir periyot soldan sağa okunur.',
    'Benzerlik ekseni dikeydir: birbirine en çok benzeyen elementler alt alta bulunur.',
    'Bir elementin tablodaki yeri, o element hakkında bilgi taşır.',
    'Metaller sol ve orta bölümde, ametaller sağ üst bölümde yer alır; hidrojen 1. grupta durduğu hâlde ametaldir.',
    'Yarı metaller ikisinin arasındaki sınır şeridinde bulunur.',
    'Bilinen elementlerin büyük bölümü metaldir.',
    'Soy gazlar en sağdaki grupta yer alır ve kararlı yapıdadır.',
    'Sınıflandırma için element özelliklerini ezberlemek gerekmez; konum yeterlidir.',
  ],

  next: [
    'Fiziksel ve Kimyasal Değişim (F.8.4.2.1, F.8.4.3.1)',
    'Asitler ve Bazlar: Özellikler, pH, Güvenlik (F.8.4.4.1–F.8.4.4.6)',
    'Maddenin Isı ile Etkileşimi ve Hâl Değişim Grafikleri (F.8.4.5.1–F.8.4.5.4)',
  ],
})

export default lesson
