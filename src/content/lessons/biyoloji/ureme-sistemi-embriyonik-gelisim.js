/** AYT BİYOLOJİ · ÜREME SİSTEMİ VE EMBRİYONİK GELİŞİM */
export default {
  slug: 'ureme-sistemi-embriyonik-gelisim',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Üreme Sistemi ve Embriyonik Gelişim' },
  order: 8,
  partLabel: '9. Bölüm',
  goldStandard: true,
  title: 'Üreme Sistemi ve Embriyonik Gelişim: Gametten Yeni Bireye',
  subtitle: 'Gamet üretimini, hormon döngülerini ve embriyonun ilk haftalarını birbirinden kopuk ezberler olarak değil; aynı neden–sonuç zincirinin ardışık halkaları olarak çöz.',
  document: {
    version: 1,
    estimated_minutes: 145,
    prerequisites: [
      { topic: 'Endokrin Sistem ve Hormonlar', why: 'GnRH–FSH–LH ekseni, testosteron, östrojen, progesteron, hCG ve oksitosin üreme olaylarını geri bildirimle düzenler.' },
      { topic: 'Hücre Bölünmeleri', why: 'Gametogenez mayozla kromozom sayısını yarıya indirir; zigotun büyümesi ve segmentasyon mitozla yürür.' },
      { topic: 'Hücre Zarı ve Taşıma', why: 'Döllenmede reseptör tanıması, akrozom tepkisi ve zar kaynaşması; plasentada seçici madde alışverişi gerçekleşir.' },
    ],
    outcomes: [
      'Üremenin bireyin yaşaması için değil, türün devamı için gerekli olduğunu açıklayabileceksin.',
      'Erkek ve dişi üreme organlarını yapı–görev ilişkisiyle doğru sıraya koyabileceksin.',
      'Seminifer tüpçük, Sertoli ve Leydig hücrelerinin görevlerini hormonal kontrolle ilişkilendirebileceksin.',
      'Spermatogenez ve oogenezi başlangıç zamanı, ürün sayısı, sitoplazma paylaşımı ve mayoz durakları bakımından karşılaştırabileceksin.',
      'Sperm ve yumurta yapısındaki farklılıkları hareket, enerji ve embriyonun ilk gelişimiyle bağlayabileceksin.',
      'Ovaryum ve uterus döngülerini aynı zaman ekseninde FSH, LH, östrojen ve progesteron değişimleriyle yorumlayabileceksin.',
      'Ovulasyondaki pozitif geri bildirimi döngünün geri kalanındaki negatif geri bildirimden ayırabileceksin.',
      'Döllenme yerini ve akrozom–zona pellusida–kortikal tepki sırasını açıklayabileceksin.',
      'Zigot, morula, blastosist, implantasyon, gastrulasyon ve organogenez basamaklarını doğru sıraya koyabileceksin.',
      'Plasenta ve göbek kordonunda anne–fetüs dolaşımlarının karışmadan madde alışverişi yaptığını yorumlayabileceksin.',
    ],
    sections: [
      {
        id: 'ue-giris', kind: 'opening', title: 'Yeni birey, iki yarım genomun doğru zamanda buluşmasıyla başlar',
        lead: 'Mayoz çeşitlilik üretir, döllenme diploit sayıyı geri kurar; mitoz ise tek hücrelik zigotu çok hücreli organizmaya dönüştürür.',
        blocks: [
          { id: 'ue-giris-prose', type: 'prose', body: `**Üreme**, türün sürekliliğini sağlar; bireyin yaşaması için zorunlu değildir. İnsanlarda eşeyli üremenin iki temel işlemi vardır: **mayoz**, diploit eşey ana hücrelerinden haploit gametler üretir ve genetik çeşitliliği artırır; **döllenme**, haploit sperm ile haploit yumurta çekirdeklerini birleştirerek diploit zigotu oluşturur. Böylece kromozom sayısı nesiller boyunca korunur.

Üreme sistemi yalnız gamet taşıyan kanallardan oluşmaz. Gonatlar hem gamet üretir hem de hormon salgılar. Testislerde seminifer tüpçükler sperm üretirken aradaki Leydig hücreleri testosteron salgılar. Yumurtalıklarda foliküller oositi geliştirir ve östrojen üretir; ovulasyondan sonra kalan folikül dokusu korpus luteuma dönüşerek başta progesteron salgılar. Hipotalamus–hipofiz–gonat ekseni bütün bu süreci geri bildirimlerle eşgüdümler.

Üreme başarısı için olayların **yeri ve zamanı** kritiktir. Sperm epididimiste hareket yeteneği kazanır; ikincil oosit ovulasyonla yumurta kanalına bırakılır; döllenme çoğunlukla yumurta kanalında gerçekleşir; bölünen embriyo rahme ilerler ve blastosist evresinde endometriyuma tutunur. Yani “döllenme rahimde olur” ve “embriyo yumurta kanalına yerleşir” ifadeleri yanlıştır.

Bu bölümde aynı anda üç saat işleyecek: gametlerin mayoz saati, dişi üreme döngüsünün hormon saati ve zigotun gelişim saati. AYT soruları genellikle bu saatlerden ikisini çaprazlar; örneğin LH piki ile oositin mayoz durumunu veya hCG ile korpus luteumun devamını birlikte sorar.` },
          { id: 'ue-giris-why', type: 'why', question: 'Gametler neden diploit değil haploittir?', body: 'Her gamet 2n olsaydı döllenmeyle 4n zigot oluşur ve kromozom sayısı her nesilde iki katına çıkardı. Mayoz gametleri n yapar; n + n birleşmesi 2n sayıyı yeniden kurar.' },
          { id: 'ue-giris-trap', type: 'trap', title: 'Üremeyi büyümeyle karıştırmak', wrong: 'Zigotun ilk mitozlarını gamet üretimi, gamet oluşumunu da büyüme olarak değerlendirmek.', right: 'Gametogenez mayoz ve farklılaşma; segmentasyon mitoz; büyüme hücre kütlesi/sayısındaki artış; gelişme ise farklılaşma ve organizasyondur.', body: 'Bölünmenin adını hücrenin amacından çıkar: kromozom sayısını yarıya indirmek mayoz, zigottan blastomer üretmek mitozdur.' },
          { id: 'ue-giris-audio', type: 'audio_script', body: `Bu konunun hızlı şifresi:

Mayoz gameti hazırlar. Hormonlar zamanı ayarlar. Döllenme diploitliği kurar. Mitoz hücre sayısını artırır. Farklılaşma organı oluşturur.

Soruda önce olayın nerede olduğunu, sonra hücrenin kromozom durumunu, en son hormonu sor.` },
        ],
      },
      {
        id: 'ue-anatomi', kind: 'build', title: 'Üreme anatomisi: üret, olgunlaştır, taşı ve uygun ortamı kur',
        lead: 'Organ adlarını ezberlemek yerine her yapıyı gametin yolculuğundaki göreviyle eşleştir.',
        blocks: [
          { id: 'ue-anatomi-figure', type: 'figure', kind: 'ureme-anatomi-haritasi', width: 'full', title: 'Erkek ve dişi üreme sisteminde işlev haritası', purpose: 'Gonatları, kanal yollarını, yardımcı bezleri ve rahim–yumurta kanalı ilişkisini tek beden bağlamında göstermek.', complexity: 'high', caption: 'Her odağa dokunduğunda yalnız anatomik bölge büyümez; seçilen yapının üretim, olgunlaşma, taşıma veya gelişim işlevini anlatan ayrı sahne açılır.', focus: [
            { title: 'Testis ve seminifer tüpçük', body: 'Skrotumdaki testislerde seminifer tüpçükler sperm üretir; Sertoli hücreleri gelişen hücreleri destekler, Leydig hücreleri LH etkisiyle testosteron salgılar.' },
            { title: 'Epididimis–vas deferens–bezler', body: 'Sperm epididimiste hareket yeteneği kazanır, vas deferensle taşınır; seminal kese, prostat ve bulboüretral bez salgıları semen ortamını oluşturur.' },
            { title: 'Ovaryum ve yumurta kanalı', body: 'Folikül içinde gelişen ikincil oosit ovulasyonla bırakılır; fimbrialar tarafından yumurta kanalına alınır ve döllenme çoğunlukla burada olur.' },
            { title: 'Uterus–serviks–vajina', body: 'Endometriyum implantasyon ve plasentaya zemin hazırlar; myometriyum doğumda kasılır, serviks rahim çıkışını, vajina doğum kanalını oluşturur.' },
          ] },
          { id: 'ue-anatomi-prose', type: 'prose', body: `Erkek gonadı olan **testisler**, sperm üretimi için vücut sıcaklığından yaklaşık 2 °C daha düşük tutuldukları skrotumda bulunur. Her testiste çok sayıda kıvrımlı seminifer tüpçük vardır. Tüpçük duvarındaki spermatogonyumlar lümene doğru ilerlerken mitoz, mayoz ve farklılaşma geçirir. Sertoli hücreleri onları besler, kan–testis bariyerine katkı verir, artık sitoplazmayı fagosite eder ve inhibin salgılar. Tüpçükler arasındaki Leydig hücreleri LH uyarısıyla testosteron üretir.

Yeni oluşan sperm henüz tam hareketli ve dölleme yetenekli değildir. **Epididimiste** olgunlaşır ve hareket yeteneği kazanır; dölleme kapasitesindeki son kimyasal hazırlık dişi üreme kanalında olur. Vas deferens spermi ejakulasyon kanalına taşır. Seminal keselerin fruktozca zengin ve alkali salgısı enerji/ortam desteği verir; prostat salgısı semen özelliklerine katkı sağlar; bulboüretral bez mukusu üretrayı kayganlaştırıp asidik kalıntıyı azaltır. Sperm + bez salgılarının tamamı **semen**dir; semen yalnız spermden ibaret değildir.

Dişi gonadı **ovaryum**, oosit ve hormon üretir. Folikül; oositi çevreleyen destek hücreleriyle birlikte işlevsel birimdir. Ovulasyonda yumurta kanalına bırakılan yapı çoğu kez mayoz II metafazında bekleyen **ikincil oosittir**; döllenme gerçekleşirse mayoz II tamamlanır. Yumurta kanalının saçak benzeri fimbriaları oositi içeri alır, silli epitel ve düz kas hareketleri embriyoyu rahme taşır.

**Uterus** üç temel katmanla düşünülür: dış perimetrium, kaslı myometrium ve iç endometrium. Endometrium döngü boyunca kalınlaşır; blastosist buraya implante olur. Myometrium gebelikte genişler ve doğumda oksitosinle güçlü kasılır. Serviks uterusun vajinaya açılan dar boynudur; mukusu sperm geçişini ve enfeksiyon bariyerini etkiler. Vajina spermin alındığı, menstruasyon akışının çıktığı ve doğumda genişleyen kanaldır.` },
          { id: 'ue-anatomi-table', type: 'table', title: 'Organı yolculuktaki göreviyle eşleştir', columns: ['Yapı', 'Asıl görev', 'Sınav ayrımı'], rows: [
            ['Seminifer tüpçük', 'Spermatogenez', 'Sertoli tüp içinde; Leydig tüpler arasında'],
            ['Epididimis', 'Spermin olgunlaşması ve hareket kazanması', 'Sperm burada üretilmez'],
            ['Vas deferens', 'Sperm taşıma/depolama', 'Üreter idrar; vas deferens sperm taşır'],
            ['Ovaryum', 'Oosit ve eşey hormonu üretimi', 'Döllenme yeri değildir'],
            ['Yumurta kanalı', 'Oosit/embriyo taşıma ve çoğunlukla döllenme', 'İmplantasyon normalde burada olmaz'],
            ['Endometriyum', 'Döngüsel kalınlaşma ve implantasyon', 'Myometrium kas tabakasıdır'],
          ], caption: 'AYT’de yapı sorusunu “ne üretir, ne taşır, nerede olur?” üçlüsüyle çöz.' },
          { id: 'ue-anatomi-check', type: 'checkpoint', question: 'FSH etkisiyle Sertoli hücresi işlevi bozulursa hangi süreç doğrudan aksar?', hint: 'Sertoli hücresinin seminifer tüpçük içindeki hedefini düşün.', answer: 'Gelişen sperm hücrelerinin beslenmesi ve spermatogenezin sürmesi aksar; inhibin geri bildirimi de değişebilir.' },
        ],
      },
      {
        id: 'ue-gamet', kind: 'deepen', title: 'Gametogenez: aynı mayozdan dört sperm, bir işlevsel yumurta',
        lead: 'Kromozom sayısı iki süreçte de yarıya iner; fark, zamanlama ve sitoplazmanın nasıl paylaşıldığındadır.',
        blocks: [
          { id: 'ue-gamet-figure', type: 'figure', kind: 'gametogenez-karsilastirma', width: 'full', title: 'Spermatogenez ve oogenezi hücre hücre izle', purpose: 'Mayoz basamaklarını, ürün sayısını, sperm–yumurta özelleşmesini ve hormonal kontrolü karşılaştırmalı göstermek.', complexity: 'high', caption: 'Seçilen odak, hücre soyunu veya gametin işlevsel mimarisini ayrı bir mekanizma çizimiyle açıklar.', focus: [
            { title: 'Spermatogenez: 2n’den dört n sperm', body: 'Birincil spermatosit mayoz I ile iki ikincil spermatosit, mayoz II ile dört spermatit verir; spermiogenezde spermatitler sperm biçimine farklılaşır.' },
            { title: 'Oogenez: eşit olmayan sitoplazma', body: 'Birincil oositten büyük ikincil oosit ve kutup hücresi oluşur; mayoz II yalnız döllenmeyle tamamlanır ve tek büyük işlevsel ovum elde edilir.' },
            { title: 'Sperm ve yumurta tasarımı', body: 'Sperm akrozom, haploit çekirdek, mitokondrili orta parça ve kamçıyla hareket odaklı; yumurta büyük sitoplazma ve koruyucu katmanlarla gelişim odaklıdır.' },
            { title: 'GnRH–FSH–LH geri bildirimi', body: 'Erkekte FSH Sertoli/spermatogenezi, LH Leydig/testosteronu uyarır; testosteron ve inhibin negatif geri bildirimle ekseni sınırlar.' },
          ] },
          { id: 'ue-gamet-prose', type: 'prose', body: `**Spermatogenez** ergenlikte başlar ve uygun hormon desteğiyle süreklidir. Spermatogonyumlar (2n) mitozla stoklarını korur; bazıları birincil spermatosite (2n) dönüşür. Mayoz I sonunda homolog kromozomların ayrılmasıyla iki ikincil spermatosit (n) oluşur. Mayoz II’de kardeş kromatitler ayrılır ve dört spermatit (n) elde edilir. Spermatitler bölünmeden biçim değiştirir: çekirdek yoğunlaşır, Golgi akrozomu yapar, sentriyol kamçı düzenini kurar, mitokondriler orta parçada toplanır, fazla sitoplazma atılır. Bu farklılaşma **spermiogenez**dir.

Spermin başında haploit çekirdek ve zona pellusidayı aşmaya yardım eden enzimleri taşıyan akrozom bulunur. Orta parçada kamçı hareketi için ATP sağlayan mitokondriler yoğunlaşır. Kuyruk mikrotübül düzeniyle hareket üretir. Spermin küçük sitoplazması taşınma hızına uygundur; embriyonun ilk sitoplazmik kaynaklarının büyük bölümü yumurtadan gelir. Sperm X veya Y eşey kromozomu taşırken yumurta daima X taşır; bu nedenle genetik cinsiyeti dölleyen spermin taşıdığı eşey kromozomu belirler.

**Oogenez** embriyonik dönemde başlar. Oogonyumlar mitozla çoğalır, birincil oositler mayoz I profazında durur. Ergenlikten sonra her döngüde gelişen foliküllerden genellikle biri baskınlaşır; birincil oosit mayoz I’i tamamlayarak büyük ikincil oosit ve küçük birinci kutup hücresini oluşturur. Sitoplazmanın eşit dağılmaması, tek hücrede bol organel ve besin biriktirir. İkincil oosit mayoz II metafazında durur ve bu hâlde ovulasyonla bırakılır. Sperm girişi olursa mayoz II tamamlanır; ovum ve ikinci kutup hücresi oluşur.

Bir birincil spermatositten dört işlevsel sperm, bir birincil oositten genellikle tek işlevsel ovum çıkar. Spermatogenez sürekli ve çok sayıda; oogenez döngüsel ve sınırlı rezervlidir. Ancak iki süreçte de mayoz I kromozom sayısını yarıya indirir, crossing-over ve bağımsız dağılım genetik çeşitlilik oluşturur.` },
          { id: 'ue-gamet-compare', type: 'compare', title: 'Spermatogenez – oogenez', columns: ['Spermatogenez', 'Oogenez'], rows: [
            { label: 'Başlangıç/zaman', values: ['Ergenlikte başlar, süreklidir', 'Embriyoda başlar; profaz I ve metafaz II durakları vardır'] },
            { label: 'Bir ana hücrenin ürünü', values: ['4 işlevsel sperm', '1 işlevsel ovum + kutup hücreleri'] },
            { label: 'Sitoplazma', values: ['Yaklaşık eşit paylaştırılır, sonra azaltılır', 'Eşit olmayan bölünmeyle ovumda korunur'] },
            { label: 'Hareket/işlev', values: ['Küçük, kamçılı, genom taşır', 'Büyük, hareketsiz; genom ve ilk sitoplazmik kaynakları taşır'] },
          ], insight: 'Aynı mayoz kuralı, farklı üreme stratejisi: spermde sayı ve hareket; yumurtada sitoplazma ve gelişim desteği.' },
          { id: 'ue-gamet-example', type: 'worked_example', title: 'Kromozom ve DNA miktarını karıştırma', question: 'Mayoz I’i tamamlamış ikincil spermatosit neden n olduğu hâlde her kromozomu iki kromatitlidir?', steps: [
            { title: 'Homologları ayır', body: 'Mayoz I’de anne ve babadan gelen homolog kromozomlar farklı hücrelere gider; kromozom takım sayısı n olur.' },
            { title: 'Kardeşleri henüz ayırma', body: 'Sentromerler mayoz I’de bölünmez; kardeş kromatitler birlikte kalır.' },
            { title: 'Mayoz II’yi uygula', body: 'Kardeş kromatitler mayoz II’de ayrılır ve tek kromatitli gametler oluşur.' },
          ], answer: 'İkincil spermatosit haploittir fakat DNA eşlenmesi daha önce yapıldığı için kromozomları hâlâ iki kromatitlidir.', takeaway: 'n–2n kromozom takımını; kromatit sayısı/DNA miktarı ise eşlenme ve ayrılma durumunu anlatır.' },
        ],
      },
      {
        id: 'ue-dongu', kind: 'deepen', title: 'Üreme döngüsü: ovaryum ve uterus aynı takvimde konuşur',
        lead: 'FSH folikülü büyütür, yükselen östrojen LH pikini doğurur; korpus luteum progesteronla endometriyumu sürdürür.',
        blocks: [
          { id: 'ue-dongu-figure', type: 'figure', kind: 'menstrual-dongu-hormonlari', width: 'full', title: '28 günlük döngüyü dört katmanda oku', purpose: 'Hipofiz hormonları, ovaryum olayları, yumurtalık hormonları ve endometriyum değişimini aynı zaman ekseninde ilişkilendirmek.', complexity: 'high', caption: 'Her odak seçildiğinde hormon eğrisinin altında çalışan ovaryum veya endometriyum mekanizması ayrı bağlam sahnesine dönüşür.', focus: [
            { title: 'Folikül evresi ve FSH', body: 'FSH ile foliküller büyür; baskın folikül östrojen üretir. Östrojen endometriyumun çoğalma evresini destekler.' },
            { title: 'Östrojen eşiği ve LH piki', body: 'Sürekli yüksek östrojen kısa süreli pozitif geri bildirim oluşturur; güçlü LH artışı ovulasyonu ve oositin yumurta kanalına bırakılmasını tetikler.' },
            { title: 'Luteal evre ve progesteron', body: 'Yırtılan folikül LH etkisiyle korpus luteuma dönüşür; progesteron endometriyumu salgı yapan, implantasyona uygun durumda tutar.' },
            { title: 'Gebelik yoksa menstruasyon', body: 'Korpus luteum geriler; progesteron ve östrojen düşer, endometriyumun işlevsel kısmı parçalanır ve yeni döngünün 1. günü başlar.' },
          ] },
          { id: 'ue-dongu-prose', type: 'prose', body: `Döngünün **1. günü menstruasyonun başladığı gündür**. Düşük östrojen ve progesteron, hipotalamus–hipofiz üzerindeki negatif geri bildirimi azaltır. GnRH darbeleriyle ön hipofizden FSH ve LH salınır. FSH desteğinde bir grup folikül büyür; genellikle biri baskın folikül olur. Granüloza hücrelerinden artan östrojen, uterus endometriyumunda mitozu ve kalınlaşmayı uyarır. Ovaryumdaki bu dönem folikül evresi, uterustaki dönem çoğalma (proliferatif) evresidir.

Östrojen düşük–orta düzeylerde çoğunlukla negatif geri bildirim yapar. Fakat baskın folikülden belirli süre boyunca çok yüksek östrojen gelmesi geri bildirimin işaretini geçici olarak değiştirir: hipotalamus ve hipofiz güçlü biçimde uyarılır, **LH piki** oluşur. LH piki folikül duvarının yırtılmasını ve ikincil oositin ovulasyonla bırakılmasını tetikler. Bu kısa **pozitif geri bildirim** istisnası AYT’nin favori ayrımıdır.

Ovulasyondan sonra kalan folikül hücreleri LH etkisiyle **korpus luteum**a dönüşür. Korpus luteum özellikle progesteron, ayrıca östrojen salgılar. Progesteron endometriyumu bez ve damar bakımından zengin salgı evresine geçirir, rahim kasılabilirliğini sınırlar. Yüksek progesteron–östrojen GnRH, FSH ve LH’yi negatif geri bildirimle baskılar; aynı döngüde yeni folikül/ovulasyon başlamasını önler.

Döllenme ve implantasyon olmazsa korpus luteum geriler. Progesteron ve östrojen hızla düşer; endometriyum damarları daralır, işlevsel tabaka parçalanır ve menstruasyonla atılır. Baskı kalktığı için FSH yeniden yükselmeye başlar. Gebelik oluşursa blastosistin dış hücrelerinden gelişen yapı **hCG** salgılar; hCG korpus luteumu bir süre canlı tutar. Daha sonra plasenta yeterli progesteron ve östrojen üretimini üstlenir.

“28 gün ve 14. gün ovulasyon” ideal ortalama modeldir; biyolojik döngüler kişiden kişiye değişebilir. Sınav grafiğinde gün ezberinden çok eğri ilişkisini oku: LH piki → ovulasyon; progesteronun en yüksek olduğu dönem → luteal/salgı evresi; her iki ovaryum hormonu düşerse → menstruasyon.` },
          { id: 'ue-dongu-table', type: 'table', title: 'Dört fazı tek tabloda eşleştir', columns: ['Olay', 'Ovaryum', 'Baskın sinyal', 'Uterus'], rows: [
            ['Başlangıç', 'Yeni foliküller gelişir', 'FSH', 'Menstruasyon / sonra onarım'],
            ['Folikül ortası', 'Baskın folikül büyür', 'Östrojen artışı', 'Çoğalma, kalınlaşma'],
            ['Ovulasyon', 'İkincil oosit bırakılır', 'LH piki', 'Endometriyum korunur'],
            ['Luteal', 'Korpus luteum', 'Progesteron yüksek', 'Salgı ve damarlaşma'],
            ['Gebelik yok', 'Korpus luteum geriler', 'Progesteron–östrojen düşer', 'İşlevsel tabaka dökülür'],
          ], caption: 'Hormon grafiğinde yüksekliği tek başına değil, önceki olayla birlikte yorumla.' },
          { id: 'ue-dongu-check', type: 'checkpoint', question: 'Korpus luteumun erken dönemde bozulması neden gebeliğin sürmesini zorlaştırabilir?', hint: 'Endometriyumun hangi hormona ihtiyaç duyduğunu düşün.', answer: 'Progesteron azalır; endometriyumun salgılı, damarlı ve implantasyonu destekleyen yapısı sürdürülemez. Normalde hCG korpus luteumu korur.' },
        ],
      },
      {
        id: 'ue-dollenme', kind: 'deepen', title: 'Döllenme: tanı, geç ve tek sperme kapıyı kapat',
        lead: 'Döllenme yalnız iki çekirdeğin buluşması değildir; tür özgül tanıma, zar tepkileri ve oosit mayozunun tamamlanması aynı sırada gerçekleşir.',
        blocks: [
          { id: 'ue-dollenme-figure', type: 'figure', kind: 'dollenme-implantasyon', width: 'full', title: 'Sperm temasından implantasyona ilk hafta', purpose: 'Akrozom tepkisini, çoklu sperm girişinin engellenmesini, segmentasyonu ve blastosistin endometriyuma tutunmasını bağlam koruyarak göstermek.', complexity: 'high', caption: 'Her seçimde süreç yalnız büyütülmez; reseptör, hücre bölünmesi veya doku etkileşimi düzeyinde yeni açıklayıcı sahne açılır.', focus: [
            { title: 'Kapasitasyon ve akrozom tepkisi', body: 'Dişi kanalında hazırlanan sperm, zona pellusida reseptörüne bağlanır; akrozom enzimleri folikül hücreleri ve zona içinde yol açmaya yardım eder.' },
            { title: 'Zar kaynaşması ve polispermiyi engelleme', body: 'İlk sperm–oosit zar kaynaşması kortikal granülleri uyarır; zona yapısı değişir ve başka spermlerin girişi sınırlandırılır.' },
            { title: 'Pronükleuslar ve zigot', body: 'Sperm girişi oositin mayoz II’yi tamamlamasını tetikler; dişi ve erkek pronükleusları kaynaşarak 2n zigotu oluşturur.' },
            { title: 'Segmentasyon–blastosist–implantasyon', body: 'Zigot büyümeden mitozlarla blastomer, morula ve blastosiste dönüşür; zona pellusidadan çıkarak endometriyuma tutunur.' },
          ] },
          { id: 'ue-dollenme-prose', type: 'prose', body: `Ovulasyonla yumurta kanalına geçen ikincil oosit, dıştan folikül hücreleri ve glikoprotein yapılı **zona pellusida** ile çevrilidir. Spermler dişi üreme kanalında kapasitasyon geçirerek zar özelliklerini ve hareket biçimini değiştirir. Oosite ulaşan sperm önce folikül hücreleri arasından geçer, sonra zona pellusidadaki özgül yapılara bağlanır. Akrozom zarı açılır ve hidrolitik enzimler yerel bir geçiş yolu oluşturur.

Bir spermin plazma zarı oosit zarıyla kaynaştığında sperm çekirdeği ve bazı yapıları sitoplazmaya girer. Oositte Ca²⁺ dalgası **kortikal reaksiyonu** başlatır; kortikal granül içerikleri zona pellusidayı değiştirerek başka spermlerin bağlanma/giriş olasılığını düşürür. Bu, polispermiyi engeller. Birden çok sperm çekirdeğinin girmesi kromozom dengesini bozacağından gelişim için ölümcül olabilir.

Sperm girişi, metafaz II’de duran ikincil oositin mayoz II’yi tamamlamasını tetikler. Ovum çekirdeği ve sperm çekirdeği pronükleus hâline gelir; genetik materyaller birleşir ve **diploit zigot** kurulur. Döllenme kromozom sayısını 2n’e döndürür, yeni gen kombinasyonu yaratır ve zigot metabolizması/bölünmeleri için başlangıç sinyali sağlar.

Zigot yumurta kanalında rahme ilerlerken arka arkaya **segmentasyon** mitozları geçirir. Hücre sayısı artar ama zona içindeki toplam hacim belirgin büyümez; bu nedenle her blastomer giderek küçülür. Sıkı hücre topu **morula**, iç boşluk ve hücre katmanları belirginleşen yapı **blastosist**tir. Blastosistin iç hücre kitlesi embriyoyu; dış trofoblast tabakası implantasyon ve plasental yapılara katkıyı oluşturur.

Blastosist yaklaşık ilk haftada zona pellusidadan çıkar ve endometriyuma tutunarak **implantasyonu** başlatır. Tüpte kalıcı yerleşim dış gebelik oluşturabilir. İmplantasyon döllenmeden farklı olay ve farklı yerdir: döllenme çoğunlukla yumurta kanalında, implantasyon rahim endometriyumunda olur.` },
          { id: 'ue-dollenme-process', type: 'process', title: 'İlk haftayı sıralama sorusuna çevir', intro: 'Konum ve yapı adını birlikte ilerlet.', steps: [
            { title: '1. Döllenme', body: 'Yumurta kanalında sperm–oosit kaynaşması ve 2n zigot.' },
            { title: '2. Segmentasyon', body: 'Büyüme olmadan ardışık mitoz; blastomerler küçülür.' },
            { title: '3. Morula', body: 'Sıkı, dut görünümünde hücre kitlesi.' },
            { title: '4. Blastosist', body: 'İç hücre kitlesi, trofoblast ve sıvı boşluğu belirginleşir.' },
            { title: '5. İmplantasyon', body: 'Zona pellusidadan çıkan blastosist endometriyuma tutunur.' },
          ] },
          { id: 'ue-dollenme-trap', type: 'trap', title: 'Segmentasyonda embriyonun büyüdüğünü sanmak', wrong: 'Her mitozda hücre sayısı ve toplam embriyo hacminin birlikte arttığını düşünmek.', right: 'İlk segmentasyonda hücre sayısı artar fakat zona içinde toplam hacim yaklaşık sabit kalır; blastomerler küçülür.', body: 'Büyüme daha sonra belirginleşir. İlk amaç büyük hücreyi çok sayıda küçük hücreye bölmektir.' },
        ],
      },
      {
        id: 'ue-embriyo', kind: 'deepen', title: 'Embriyonik gelişim: hücre katmanından organa, plasentadan fetüse',
        lead: 'Gastrulasyon vücut planını kurar, organogenez katmanları özelleştirir; plasenta iki dolaşım arasında seçici değişim yüzeyidir.',
        blocks: [
          { id: 'ue-embriyo-figure', type: 'figure', kind: 'embriyonik-gelisim-plasenta', width: 'full', title: 'Gastrulasyondan fetüs–plasenta birliğine', purpose: 'Üç embriyonik tabakanın oluşumunu, organ türevlerini, plasental madde değişimini ve gebelik/doğum hormonlarını tek gelişim çizgisinde göstermek.', complexity: 'high', caption: 'Odak seçildiğinde gelişimin o aşaması ayrı bir doku, organ veya dolaşım sahnesiyle açıklanır.', focus: [
            { title: 'Gastrulasyon ve üç tabaka', body: 'Hücre hareketleriyle ektoderm, mezoderm ve endoderm oluşur; embriyonun temel vücut eksenleri ve ilkel sindirim boşluğu kurulur.' },
            { title: 'Organogenez ve tabaka türevleri', body: 'Ektoderm sinir sistemi/epidermis; mezoderm kas–kemik–dolaşım–böbrek–gonat; endoderm sindirim/solunum epiteli ve ilişkili bezlerin çoğunu oluşturur.' },
            { title: 'Plasenta ve göbek kordonu', body: 'Anne ve fetüs kanı normalde karışmadan ince bariyer üzerinden gaz, besin, atık ve bazı antikorları değiştirir; iki umbilikal arter fetüsten çıkar, tek ven fetüse döner.' },
            { title: 'hCG, gebelik ve doğum geri bildirimi', body: 'hCG korpus luteumu korur; plasenta progesteron–östrojen üretimini devralır. Doğumda serviks gerilmesi–oksitosin–kasılma pozitif geri bildirimi çalışır.' },
          ] },
          { id: 'ue-embriyo-prose', type: 'prose', body: `İmplantasyondan sonra hücreler yalnız çoğalmaz; yer değiştirir ve farklılaşır. **Gastrulasyon** sırasında üç embriyonik germ tabakası oluşur. Ektoderm dışta, endoderm içte, mezoderm arada yer alır. Bu tabakalar hazır organlar değildir; farklı gen ifadeleri ve hücre etkileşimleriyle belirli doku soylarına dönüşür.

AYT düzeyinde temel türevler şöyle tutulur: **ektoderm** sinir sistemi, duyu yapılarının önemli bölümü ve epidermise; **mezoderm** kas, kemik, bağ doku, dolaşım sistemi, böbrek ve üreme organlarına; **endoderm** sindirim ve solunum kanalı epiteline, karaciğer–pankreas gibi ilişkili bezlerin epitel bölümlerine kaynaklık eder. Organogenezde hücre göçü, indüksiyon, farklılaşma ve programlanmış hücre ölümü birlikte çalışır. Parmak aralarının açılmasında apoptozis iyi bir örnektir.

Embriyonun dış yapılarıyla endometriyumun katkısından **plasenta** gelişir. Plasenta anne ve fetüs damarlarının birbirine çok yaklaştığı geniş yüzeyli bir değişim organıdır. O₂ ve besinler fetüse; CO₂ ve metabolik atıklar anne dolaşımına geçer. Bazı antikorlar pasif bağışıklık sağlar. Buna karşılık plasenta kusursuz bariyer değildir; alkol, nikotin, bazı ilaçlar ve enfeksiyon etkenleri geçebilir. Anne ve fetüs kanı normalde doğrudan karışmaz; maddeler plasental bariyeri aşar.

Göbek kordonunda fetüse ait **iki arter ve bir ven** bulunur. Umbilikal arterler fetüsten plasentaya O₂’si az ve atıkça zengin kan taşır; umbilikal ven plasentadan fetüse O₂ ve besince zengin kan getirir. “Arter daima oksijence zengin” genellemesi burada da akciğer dolaşımında olduğu gibi yanlıştır: arter/ven adı oksijen miktarına değil, kanın kalbe göre yönüne bağlıdır.

Trofoblast kökenli dokular erken gebelikte hCG salgılar; hCG korpus luteumu koruyarak progesteron–östrojen salgısını sürdürür. Plasenta hormon üretimini devralınca korpus luteuma bağımlılık azalır. Sekizinci haftanın sonundan sonra gelişen birey genellikle fetüs olarak adlandırılır; fetal dönemde organlar büyür ve olgunlaşır. Organların taslaklarının kurulduğu ilk trimester çevresel etkilere özellikle duyarlıdır.

Doğum yaklaşırken uterusun kasılmaları serviksi gerer; gerim sinyalleri arka hipofizden oksitosin salınmasını artırır. Oksitosin kasılmayı, kasılma serviks gerilmesini artırır: doğum tamamlanana dek çalışan **pozitif geri bildirim** döngüsüdür. Doğumdan sonra prolaktin süt üretimini, oksitosin süt kanallarından sütün salınmasını destekler; ikisini karıştırma.` },
          { id: 'ue-embriyo-table', type: 'table', title: 'Embriyonik tabakaları ürünleriyle eşleştir', columns: ['Tabaka', 'Başlıca türevler', 'Hafıza ipucu'], rows: [
            ['Ektoderm', 'Sinir sistemi, epidermis, duyu yapılarının bölümleri', 'Dış örtü + iletişim'],
            ['Mezoderm', 'Kas, kemik, bağ doku, kalp–damar, böbrek, gonatlar', 'Hareket + taşıma + iç destek'],
            ['Endoderm', 'Sindirim/solunum epiteli, karaciğer ve pankreas epiteli', 'İç tüp ve ilişkili bezler'],
          ], caption: 'Organların tamamı tek tabakadan oluşmak zorunda değildir; tablo AYT’de sorulan baskın embriyonik kökenleri özetler.' },
          { id: 'ue-embriyo-example', type: 'worked_example', title: 'Göbek kordonunda yönü çöz', question: 'Umbilikal arter O₂’ce fakir, umbilikal ven O₂’ce zengin olduğu hâlde adlandırma neden doğrudur?', steps: [
            { title: 'Referans noktasını seç', body: 'Damarı fetüsün kalbine göre adlandır.' },
            { title: 'Arteri izle', body: 'Kan fetüs kalbinden plasentaya uzaklaşıyorsa arterdir; O₂ içeriği belirleyici değildir.' },
            { title: 'Veni izle', body: 'Kan plasentadan fetüs kalbine dönüyorsa vendir.' },
          ], answer: 'Arter ve ven isimleri kanın kalbe göre yönünü belirtir; oksijen miktarını değil.', takeaway: 'Fetüs dolaşımında iki umbilikal arter dışarı, tek umbilikal ven içeri taşır.' },
        ],
      },
      {
        id: 'ue-saglik', kind: 'deepen', title: 'Sağlık ve sınav sentezi: bulguyu doğru halkaya yerleştir',
        lead: 'Üreme sistemi sorularında tek bir hormon veya organ değil; anatomi, zamanlama ve geri bildirim birlikte değerlendirilir.',
        blocks: [
          { id: 'ue-saglik-prose', type: 'prose', body: `Üreme sağlığını; dengeli beslenme, fiziksel hareket, tütün ve alkolden uzak durma, kişisel hijyen, güvenli cinsel davranışlar, uygun tarama ve gerektiğinde uzman değerlendirmesi destekler. Cinsel yolla bulaşan enfeksiyonların bazıları belirti vermeden ilerleyebilir; korunma ve tıbbi danışmanlık önemlidir. Bu bölüm biyolojik mekanizmayı açıklar; bireysel tanı veya tedavi yerine geçmez.

Kısırlık tek bir cinsiyete ait sorun değildir. Ovulasyon bozukluğu, yumurta kanalı tıkanıklığı, endometriyum sorunları; sperm sayısı/hareketi/yapısı veya kanal tıkanıklıkları gibi birçok neden olabilir. Yardımcı üreme tekniklerinde IVF ile oosit ve sperm vücut dışında bir araya getirilip gelişen embriyo uterusa aktarılabilir; ICSI’de tek sperm oosit içine mikroenjeksiyonla verilir. Bu işlemler döllenme olasılığını artırabilir ama implantasyon ve gebeliğin kesin olacağı anlamına gelmez.

Embriyonik gelişimde genetik program ile çevre etkileşir. Özellikle organogenezin yoğun olduğu erken dönemde bazı ilaçlar, iyonlaştırıcı radyasyon, alkol, tütün ve enfeksiyonlar gelişimi olumsuz etkileyebilir. Folat yeterliliği nöral tüp gelişimi için önemlidir. Sağlık sorularında “plasenta her zararlıyı tutar” öncülü yanlıştır; plasenta seçici fakat mutlak olmayan bariyerdir.

Sınavda hormonları oklarla çöz: FSH → folikül/Sertoli; LH → ovulasyon–korpus luteum/Leydig; östrojen → endometriyum çoğalması ve yüksek düzeyde LH piki; progesteron → endometriyumun sürdürülmesi; hCG → erken gebelikte korpus luteum; oksitosin → uterus kasılması ve süt salınması; prolaktin → süt üretimi. Ardından geri bildirimin işaretini sor. Çoğu düzenleme negatif, LH piki ve doğum kasılmaları belirgin pozitif geri bildirim örnekleridir.` },
          { id: 'ue-saglik-table', type: 'table', title: 'Hormonu hedef ve sonuçla eşleştir', columns: ['Hormon', 'Başlıca hedef', 'Temel sonuç'], rows: [
            ['FSH', 'Sertoli / ovaryum folikülü', 'Spermatogenez desteği / folikül gelişimi'],
            ['LH', 'Leydig / olgun folikül–korpus luteum', 'Testosteron / ovulasyon ve luteal yapı'],
            ['Östrojen', 'Endometriyum, hipotalamus–hipofiz', 'Çoğalma; düzeye bağlı geri bildirim'],
            ['Progesteron', 'Endometriyum ve uterus', 'Salgılı yapıyı koruma, kasılmayı azaltma'],
            ['hCG', 'Korpus luteum', 'Erken gebelikte progesteron–östrojeni sürdürme'],
            ['Oksitosin', 'Myometrium / süt kanalı çevresi', 'Doğum kasılması / süt salınması'],
            ['Prolaktin', 'Meme bezleri', 'Süt üretimi'],
          ], caption: 'Bir hormon birden çok hedefe sahip olabilir; tabloda sınavda en sık kullanılan eksenler gösterilir.' },
          { id: 'ue-saglik-exam', type: 'exam', title: 'AYT’de dokuz kritik ayrım', body: 'Sertoli–Leydig, epididimis–seminifer tüpçük, oosit–ovum, folikül–korpus luteum, FSH–LH, östrojen–progesteron, döllenme–implantasyon, segmentasyon–büyüme ve plasenta değişimi–kanların karışması ayrımlarını kur. Her öncülde hücreyi, yeri ve zamanı birlikte kontrol et.', patterns: ['Sertoli besler; Leydig testosteron', 'LH piki = ovulasyon', 'Progesteron = salgılı endometriyum', 'Döllenme tüpte; implantasyon uterusta', 'Segmentasyon = büyümeden mitoz', 'hCG = korpus luteumu koru'] },
          { id: 'ue-saglik-connection', type: 'connection', title: 'Sistemler arası bağ', body: 'Üreme; endokrin sinyaller, sinir sistemi geri bildirimi, dolaşımla hormon ve plasenta taşınması, kas dokusuyla doğum ve bağışıklıkla anne–fetüs toleransının birlikte çalıştığı sistemdir.', links: ['Endokrin Sistem — geri bildirim', 'Dolaşım — plasenta ve fetal damarlar', 'Hücre Bölünmeleri — mayoz/mitoz', 'Kalıtım — yeni alel kombinasyonları'] },
        ],
      },
      {
        id: 'ue-quiz', kind: 'practice', title: '10 soruda gametten embriyoya',
        lead: 'Hedef 8/10. Önce yer ve hücreyi, sonra kromozom durumunu, en son hormon veya gelişim sonucunu belirle.',
        blocks: [
          { id: 'ue-q1', type: 'quiz', purpose: 'recall', question: 'Sperm hücrelerinin üretildiği ve olgunlaşarak hareket yeteneği kazandığı yapılar sırasıyla hangileridir?', options: ['Epididimis – seminifer tüpçük', 'Seminifer tüpçük – epididimis', 'Prostat – vas deferens', 'Leydig hücresi – üretra'], answer_index: 1, explanation: 'Sperm **seminifer tüpçükte üretilir**, epididimiste olgunlaşıp hareket yeteneği kazanır.' },
          { id: 'ue-q2', type: 'quiz', purpose: 'concept', question: 'Bir birincil oositten genellikle tek işlevsel ovum oluşmasının temel nedeni nedir?', options: ['Mayoz I gerçekleşmemesi', 'Sitoplazmanın eşit olmayan paylaşılması', 'Ovumun diploit kalması', 'Kutup hücrelerinin sperm olması'], answer_index: 1, explanation: 'Sitoplazma büyük hücrede korunur; küçük kutup hücreleri genellikle işlevsizdir.' },
          { id: 'ue-q3', type: 'quiz', purpose: 'apply', question: 'Döngü ortasında sürekli yüksek östrojenin oluşturduğu pozitif geri bildirimin doğrudan sonucu hangisidir?', options: ['ADH’nin durması', 'LH piki ve ovulasyon', 'Korpus luteumun hemen parçalanması', 'Menstruasyonun başlaması'], answer_index: 1, explanation: 'Yüksek östrojen kısa süreli pozitif geri bildirimle **LH pikini**, o da ovulasyonu tetikler.' },
          { id: 'ue-q4', type: 'quiz', purpose: 'concept', question: 'Döllenme gerçekleşmezse menstruasyonu başlatan temel hormonal değişim hangisidir?', options: ['Korpus luteum geriler; progesteron ve östrojen düşer', 'LH sürekli yükselir', 'hCG korpus luteumu büyütür', 'Progesteron sürekli artar'], answer_index: 0, explanation: 'Korpus luteum gerileyince progesteron–östrojen düşer; endometriyumun işlevsel kısmı dökülür.' },
          { id: 'ue-q5', type: 'quiz', purpose: 'apply', question: 'İkincil oositin mayoz II’yi tamamlamasını normalde hangi olay tetikler?', options: ['Menstruasyon', 'FSH’nin sıfırlanması', 'Sperm girişinin gerçekleşmesi', 'Blastosistin implantasyonu'], answer_index: 2, explanation: 'İkincil oosit metafaz II’de bekler; sperm girişi mayoz II’nin tamamlanmasını tetikler.' },
          { id: 'ue-q6', type: 'quiz', purpose: 'sequence', question: 'Döllenmeden implantasyona doğru sıra hangisidir?', options: ['Zigot → morula → blastosist → implantasyon', 'Zigot → gastrula → morula → ovulasyon', 'Blastosist → zigot → morula → implantasyon', 'Morula → ovum → zigot → implantasyon'], answer_index: 0, explanation: 'Zigot segmentasyonla morula ve blastosiste dönüşür; blastosist endometriyuma implante olur.' },
          { id: 'ue-q7', type: 'quiz', purpose: 'concept', question: 'Segmentasyon sırasında hücre sayısı arttığı hâlde toplam hacmin yaklaşık sabit kalmasının sonucu nedir?', options: ['Blastomerler giderek büyür', 'Blastomerler giderek küçülür', 'Kromozom sayısı her mitozda yarıya iner', 'Embriyo doğrudan fetüse dönüşür'], answer_index: 1, explanation: 'Büyüme araları olmadan yapılan mitozlar aynı hacmi daha küçük blastomerlere böler.' },
          { id: 'ue-q8', type: 'quiz', purpose: 'apply', question: 'Göbek kordonunda plasentadan fetüse oksijen bakımından zengin kanı hangi damar taşır?', options: ['İki umbilikal arter', 'Tek umbilikal ven', 'Fetal aort', 'Anne uterin veni'], answer_index: 1, explanation: 'Tek **umbilikal ven** plasentadan fetüse döner; iki umbilikal arter fetüsten plasentaya gider.' },
          { id: 'ue-q9', type: 'quiz', purpose: 'concept', question: 'Erken gebelikte hCG’nin temel görevi hangisidir?', options: ['Korpus luteumu koruyup progesteron–östrojen salgısını sürdürmek', 'Spermatogenezi durdurmak', 'Zona pellusidayı yeniden oluşturmak', 'Embriyonun kromozom sayısını yarıya indirmek'], answer_index: 0, explanation: 'hCG, plasenta hormon üretimini devralana kadar korpus luteumun devamını destekler.' },
          { id: 'ue-q10', type: 'quiz', purpose: 'error', question: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?', options: ['Ektoderm — sinir sistemi ve epidermis', 'Mezoderm — kas, kemik, dolaşım ve böbrek', 'Endoderm — sindirim ve solunum kanalı epiteli', 'Plasenta — anne ve fetüs kanının doğrudan tek dolaşımda karışması'], answer_index: 3, explanation: 'Plasentada anne ve fetüs kanı normalde doğrudan karışmaz; ince bariyer üzerinden madde alışverişi olur.' },
        ],
      },
      {
        id: 'ue-kapanis', kind: 'close', title: 'Üç saati tek sınav mantığında birleştir',
        lead: 'Gamet saati, hormon saati ve embriyo saati artık aynı olay çizgisinde ilerliyor.',
        blocks: [
          { id: 'ue-kapanis-prose', type: 'prose', body: `Bir üreme sorusunda önce **kim?** sorusunu cevapla: sperm ana hücresi, birincil/ikincil oosit, folikül, korpus luteum, zigot, blastosist veya fetüs. Sonra **nerede?**: seminifer tüpçük, epididimis, ovaryum, yumurta kanalı, endometriyum veya plasenta. Son olarak **hangi sinyal?**: FSH, LH, östrojen, progesteron, hCG ya da oksitosin.

Zaman çizgisini iki sabit noktayla kur: LH piki ovulasyonu; implantasyon hCG’nin yükselmesini başlatır. Gebelik yoksa korpus luteum geriler ve hormon düşüşü menstruasyonu doğurur. Gebelik varsa hCG korpus luteumu korur, sonra plasenta steroid hormon üretimini devralır. Gelişim çizgisinde döllenme → zigot → segmentasyon → morula → blastosist → implantasyon → gastrulasyon → organogenez sırasını bozma.

Grafikli bir soruda önce eğrinin adını tahmin etmeye çalışma; olayları işaretle. Keskin ve kısa tepe ovulasyona denk geliyorsa LH’dir. Luteal evrede yükselen, endometriyumu salgılı tutan eğri progesterondur. Hormonların ikisi birden düşerken doku dökülüyorsa gebelik oluşmamıştır. Embriyo görselinde de büyüklüğe değil yapıya bak: sıkı hücre topu morula, boşluk ve iç hücre kitlesi taşıyan yapı blastosisttir. Bu okuma sırası, ezberlediğin bir gün numarası değişse bile soruyu çözer.` },
          { id: 'ue-summary', type: 'summary', title: 'Büyük resim', items: [
            'Testis ve ovaryum hem gamet hem hormon üreten gonatlardır.',
            'Sertoli sperm hücrelerini destekler; Leydig LH ile testosteron üretir.',
            'Spermatogenez dört işlevsel sperm, oogenez genellikle bir büyük ovum üretir.',
            'LH piki ovulasyonu; progesteron salgılı endometriyumun sürmesini destekler.',
            'Döllenme çoğunlukla yumurta kanalında, implantasyon endometriyumda gerçekleşir.',
            'Segmentasyonda hücre sayısı artar fakat ilk toplam hacim yaklaşık sabittir.',
            'Gastrulasyon üç germ tabakasını, organogenez doku ve organ taslaklarını kurar.',
            'Plasenta anne–fetüs kanını karıştırmadan seçici madde değişimi sağlar.',
          ] },
          { id: 'ue-memory', type: 'memory', title: 'Sınav şifresi: ÜRET–ZAMANLA–BİRLEŞTİR–YERLEŞ–FARKLILAŞ', body: '**ÜRET:** mayozla gamet. **ZAMANLA:** FSH–LH–östrojen–progesteron. **BİRLEŞTİR:** tüpte döllenme. **YERLEŞ:** blastosisti endometriyuma. **FARKLILAŞ:** üç tabakadan doku ve organ.' },
          { id: 'ue-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Genden Proteine**. DNA’nın eşlenmesi, RNA sentezi, genetik kod ve protein sentezini; burada kurduğumuz gamet–zigot genetik sürekliliğiyle bağlayacağız.', topics: ['DNA replikasyonu', 'Transkripsiyon ve RNA çeşitleri', 'Genetik kod', 'Translasyon ve protein sentezi'] },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
