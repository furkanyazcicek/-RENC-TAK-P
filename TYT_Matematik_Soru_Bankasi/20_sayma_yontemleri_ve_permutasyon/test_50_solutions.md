# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 50 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Dönüşümlü dizilişte konum kısıtını birlikte uygulama.

**Çözüm:**

Kitaplar derslerine göre dönüşümlü dizileceğinden iki yerleşim düzeni vardır:

$$M-E-M-E-M-E \qquad \text{ve} \qquad E-M-E-M-E-M$$

Her iki düzende de belirli matematik kitabının bulunabileceği, uçta olmayan 2 matematik konumu vardır. Kalan iki matematik kitabı $2!$, üç edebiyat kitabı $3!$ biçimde yerleşir.

$$2\cdot2\cdot2!\cdot3!=48$$

**Neden doğru?** Matematikle veya edebiyatla başlayan iki düzen ayrı ayrı sayılmış, uçta bulunmama koşulu yalnız belirli kitaba uygulanmıştır.

**Çeldirici notu:** Yalnız bir dönüşümlü düzeni saymak sonucu yarıya indirir.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Dairesel dizilişte istenmeyen yan yana olma durumunu tüm durumlardan çıkarma.

**Çözüm:**

Yedi kişinin yuvarlak masa çevresindeki tüm oturma düzenlerinin sayısı

$$(7-1)!=720$$

dir. Ayşe ile Berk bir bütün kabul edilirse bu bütünle birlikte 6 birim oluşur. Bu birimler yuvarlak masa çevresine $(6-1)!$ biçimde, Ayşe ile Berk kendi aralarında 2 biçimde oturur.

Yan yana oldukları düzen sayısı $2\cdot5!=240$ olduğundan istenen sayı

$$720-240=480$$

olur.

**Neden doğru?** Bütün dairesel düzenlerden yalnız Ayşe ile Berk'in yan yana bulunduğu düzenler çıkarılmıştır.

**Çeldirici notu:** İki kişinin kendi arasındaki yer değişimini hesaba katmamak, çıkarılması gereken düzen sayısını eksik buldurur.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Özdeş harflerin dizilişinde yan yana gelmeme koşulunu boşluk yöntemiyle uygulama.

**Çözüm:**

Önce A, A, A ve S harfleri dizilir. S harfinin yeri 4 biçimde seçilebildiğinden bu harfler

$$\frac{4!}{3!}=4$$

farklı sıra oluşturur. Oluşan sıranın başında, sonunda ve harflerin arasında toplam 5 boşluk vardır. İki özdeş N harfinin yan yana gelmemesi için bu boşluklardan ikisi seçilir.

$$4\cdot\binom52=4\cdot10=40$$

**Neden doğru?** Her boşluğa en fazla bir N yerleştirildiği için iki N'nin yan yana gelmesi engellenmiştir.

**Çeldirici notu:** N harflerini iki farklı harf gibi sıralamak, aynı sözcük dizilişini iki kez sayar.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Numaralı gruplara ayırma ile grup içi görev seçimini birlikte sayma.

**Çözüm:**

Ece ile Mert'in bulunacağı takım 2 biçimde seçilir. Bu takımın diğer iki üyesi, kalan 6 öğrenciden

$$\binom62=15$$

biçimde belirlenir. Ece ve Mert kaptan olamayacağı için bu takımın kaptanı diğer iki üyeden 2 biçimde seçilir. Öteki takımın kaptanı ise 4 biçimde seçilebilir.

$$2\cdot15\cdot2\cdot4=240$$

**Neden doğru?** Takımlar numaralı olduğu için Ece ile Mert'in 1. veya 2. takımda bulunması farklı sonuçlar oluşturur.

**Çeldirici notu:** Takım numaralarını dikkate almamak, ilk çarpanı eksik bırakır.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Basamak ve çiftlik koşullarını ortak durumlara göre sayma.

**Çözüm:**

Sayı $30000$'den büyük olduğundan on binler basamağı 3, 4 veya 5 olabilir.

- On binler basamağı 3 ise birler basamağı 0, 2 veya 4 olabilir. Kalan üç basamağa, geriye kalan dört rakamdan üçü $4\cdot3\cdot2=24$ biçimde yerleşir. Bu durum $3\cdot24=72$ sayı verir.
- On binler basamağı 4 ise birler basamağı 0 veya 2 olabilir. Bu durum $2\cdot24=48$ sayı verir.
- On binler basamağı 5 ise birler basamağı 0, 2 veya 4 olabilir. Bu durum da $3\cdot24=72$ sayı verir.

Toplam sayı

$$72+48+72=192$$

olur.

**Neden doğru?** İlk ve son basamak birlikte seçildikten sonra orta üç basamakta rakam tekrarı yapılmamıştır.

**Çeldirici notu:** İlk basamak 4 iken son basamakta 4'ü yeniden kullanmak, rakamların farklı olma koşulunu bozar.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Özdeş nesneleri koşullu olarak farklı kutulara dağıtma.

**Çözüm:**

Birinci kutudaki bilye sayısı pozitif ve tek olduğundan 1, 3 veya 5 olabilir.

- Birinci kutuda 1 bilye varsa kalan 6 bilye diğer iki kutuya pozitif olarak 5 biçimde dağıtılır.
- Birinci kutuda 3 bilye varsa kalan 4 bilye 3 biçimde dağıtılır.
- Birinci kutuda 5 bilye varsa kalan 2 bilye yalnız $1+1$ biçiminde dağıtılır.

Bu nedenle toplam dağıtım sayısı

$$5+3+1=9$$

dur.

**Neden doğru?** Her kutuda en az bir bilye bulunması koşulu, diğer iki kutuya yapılan dağıtımlarda korunmuştur.

**Çeldirici notu:** Boş kutuya izin vermek, soruda bulunmayan dağıtımları da sayar.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Belirli bir noktadan geçen en kısa yolları çarpma ilkesiyle sayma.

**Çözüm:**

A'dan C'ye giderken 2 doğu ve 1 kuzey hareketi yapılır. Bu üç hareketin sırası

$$\binom31=3$$

biçimde belirlenir. C'den B'ye ulaşmak için 2 doğu ve 2 kuzey hareketi kalır. Bu dört hareketin sırası

$$\binom42=6$$

biçimde belirlenir. Her A–C yolu her C–B yoluyla birleştirilebildiğinden

$$3\cdot6=18$$

farklı yol vardır.

**Neden doğru?** C'den geçme koşulu, yolculuğu A–C ve C–B olmak üzere iki zorunlu aşamaya ayırır.

**Çeldirici notu:** A'dan B'ye giden tüm yolları saymak, C'den geçmeyen yolları da içerir.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Göreli sıra ve yan yana gelmeme koşullarını birlikte uygulama.

**Çözüm:**

Altı öğrencinin tüm sıralamalarında A, B ve C'nin kendi aralarındaki $3!$ farklı sırasından yalnız biri A–B–C biçimindedir. Bu koşulu sağlayan sıralama sayısı

$$\frac{6!}{3!}=120$$

dir. Bu sıralamalar içinde D ile E'nin yan yana olduğu durumlarda D ve E bir bütün kabul edilir. Beş birimin sıralamalarında A, B ve C'nin göreli sırası yine sabit olduğundan

$$\frac{5!}{3!}\cdot2=40$$

düzen vardır. İstenen sayı

$$120-40=80$$

olur.

**Neden doğru?** Önce A–B–C göreli sırası korunmuş, ardından D ile E'nin yan yana olduğu istenmeyen durumlar çıkarılmıştır.

**Çeldirici notu:** D–E bütününün kendi içindeki iki farklı sırayı unutmak, çıkarılan düzen sayısını eksik hesaplatır.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Belirli türlerde seçim yaptıktan sonra seçilen nesneleri sıralama.

**Çözüm:**

Beş matematik kitabından ikisi $\binom52$, dört edebiyat kitabından ikisi $\binom42$ biçimde seçilir. Seçilen dört farklı kitap $4!$ biçimde dizilir.

$$\binom52\cdot\binom42\cdot4!=10\cdot6\cdot24=1440$$

**Neden doğru?** Kitap seçimi sırasında sıra önemsenmemiş, rafa yerleştirme aşamasında ise seçilen dört kitabın sırası hesaba katılmıştır.

**Çeldirici notu:** Yalnız kitapları seçmek, aynı dört kitabın farklı raf dizilişlerini saymaz.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Görevli seçiminde istenmeyen tek türden oluşan durumları çıkarma.

**Çözüm:**

On bir kişi arasından üç farklı görevli

$$11\cdot10\cdot9=990$$

biçimde seçilir. Üç görevlinin de kadın olduğu dağılım sayısı

$$6\cdot5\cdot4=120,$$

üçünün de erkek olduğu dağılım sayısı ise

$$5\cdot4\cdot3=60$$

tır. Her iki cinsiyetten de görevli bulunması için bu iki durum çıkarılır:

$$990-120-60=810$$

**Neden doğru?** Üç görev birbirinden farklı olduğundan seçimlerde görev sırası korunmuş, yalnız tek cinsiyetten oluşan görev dağılımları elenmiştir.

**Çeldirici notu:** Görevleri aynı kabul ederek üç kişilik kurul seçmek, başkanlık ve diğer görevlerin farklılığını göz ardı eder.
