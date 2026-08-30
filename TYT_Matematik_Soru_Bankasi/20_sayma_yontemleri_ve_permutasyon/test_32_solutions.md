# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 32 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Birbirini dışlayan rotalarda toplama ve rota içindeki aşamalarda çarpma ilkelerini birlikte kullanma.

**Çözüm:**

$B$ üzerinden gidilen rotalarda ilk yol için $3$, ikinci yol için $4$ seçenek vardır:

$$3\cdot4=12$$

$C$ üzerinden gidilen rotaların sayısı ise

$$2\cdot5=10$$

olur. İki ara kentten yalnız biri kullanılacağı için sonuçlar toplanır:

$$12+10=22$$

**Neden doğru?** Bir rotanın ardışık parçaları birlikte seçildiğinden çarpılır; $B$ ve $C$ seçenekleri ayrık olduğundan toplanır.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Doğrusal dizilişte iki kişi arasındaki en az uzaklık koşulunu tamamlayıcı durumlarla sayma.

**Çözüm:**

Kısıtlamasız diziliş sayısı $7!=5040$'tır. Ayşe ile Berk yan yana olduğunda blok yöntemiyle

$$2\cdot6!=1440$$

diziliş vardır. Aralarında tam bir kişi olduğunda konum numaraları arasındaki fark $2$'dir. Beş konum çifti, iki iç sıra ve kalan beş kişinin $5!$ dizilişiyle

$$5\cdot2\cdot5!=1200$$

diziliş elde edilir. Bu iki yasak durum ayrık olduğundan

$$5040-1440-1200=2400$$

olur.

**Neden doğru?** En az iki kişi bulunmaması, özel kişilerin ya yan yana olması ya da aralarında tam bir kişi bulunması demektir.

## Soru 3

**Doğru cevap:** D

**Kazanım:** İki farklı tekrarlı harf grubuna ait komşuluk yasaklarını içerme-dışlama ile sayma.

**Çözüm:**

Kısıtlamasız farklı diziliş sayısı

$$\frac{5!}{2!2!}=30$$

dur. A'lar yan yana kabul edilirse **AA**, $R,R,K$ nesneleri $\frac{4!}{2!}=12$ biçimde; R'ler yan yana kabul edilirse yine $12$ biçimde sıralanır. Her iki harf çifti de yan yanaysa **AA**, **RR**, $K$ nesneleri $3!=6$ biçimde sıralanır.

$$30-12-12+6=12$$

**Neden doğru?** Her iki yasağın aynı anda gerçekleştiği dizilişler iki kez çıkarıldığı için bir kez geri eklenir.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Ardışık bağımsız seçimleri sonradan yapılan görev seçimiyle birleştirme.

**Çözüm:**

Sınıf temsilcileri sırasıyla $3$, $4$ ve $5$ biçimde seçilir. Oluşan üç temsilciden sözcü $3$ biçimde belirlenir:

$$3\cdot4\cdot5\cdot3=180$$

**Neden doğru?** Her sınıf seçimi ve sözcü belirleme aşaması diğer seçimlerle bağımsız olarak birleşir.

## Soru 5

**Doğru cevap:** A

**Kazanım:** İki değişken arasındaki büyüklük koşulunu simetri ve eşitlik durumuyla sayma.

**Çözüm:**

Ayşe, Berk ve Ceren'in şeker sayıları negatif olmayan tam sayılar olduğundan toplam dağıtım sayısı

$$\binom{11+3-1}{3-1}=\binom{13}{2}=78$$

dir. Ayşe ile Berk eşit miktarda şeker aldığında bu miktar $0,1,\ldots,5$ olabilir; her değer Ceren'in miktarını tek olarak belirler. Dolayısıyla $6$ eşitlik durumu vardır.

Kalan $78-6=72$ dağıtım, Ayşe'nin fazla ve Berk'in fazla olduğu eş büyüklükte iki gruba ayrılır:

$$\frac{72}{2}=36$$

**Neden doğru?** Ayşe ile Berk'in adlarını değiştirmek, eşit olmayan her dağıtımı karşıt eşitsizliği taşıyan tek bir dağıtımla eşler.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Konum yasağı ile iki kişinin göreli sıra koşulunu aynı dizilişte kullanma.

**Çözüm:**

Ceren uçlarda bulunmayacağı için yeri ortadaki altı konumdan $6$ biçimde seçilir. Kalan yedi kişi boş yerlere $7!$ biçimde yerleşebilir. Bu dizilişlerin tam yarısında Ayşe Berk'ten önce gelir:

$$6\cdot\frac{7!}{2}=6\cdot2520=15\,120$$

**Neden doğru?** Ceren'in konumu sabitken Ayşe ile Berk'in yerlerini değiştirmek, önce–sonra koşulunu sağlayan ve sağlamayan dizilişleri bire bir eşler.

## Soru 7

**Doğru cevap:** C

**Kazanım:** İki paralel doğru üzerindeki noktalardan dejenere olmayan dörtgen seçme.

**Çözüm:**

Dörtgen oluşması için her doğrudan tam iki nokta seçilmelidir. Bir doğrudan üç veya dört nokta seçilirse seçilen üç köşe doğrusal olur ve dörtgen oluşmaz.

$$\binom62\binom52=15\cdot10=150$$

**Neden doğru?** Paralel iki doğru üzerinden ikişer nokta seçimi, her zaman iki tabanı paralel olan dejenere olmayan bir dörtgen oluşturur.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Pozitif tam sayıların kesin artan ve sabit toplamlı üçlülerini sayma.

**Çözüm:**

$A<B<C$ ve toplam $12$ koşullarını sağlayan üçlüler

$$(1,2,9),(1,3,8),(1,4,7),(1,5,6),$$
$$ (2,3,7),(2,4,6),(3,4,5)$$

olmak üzere yedi tanedir.

**Neden doğru?** $A$ en fazla $3$ olabilir; her olası $A$ için $B>A$ ve $C=12-A-B>B$ koşulları sistematik olarak taranmıştır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Sıralı ödül dağıtımında bir kişinin bulunması ve başka bir kişinin bulunmaması koşulunu sayma.

**Çözüm:**

Ayşe'nin alacağı madalya türü $3$ biçimde seçilir. Berk dışarıda bırakıldıktan sonra kalan iki farklı madalya, Ayşe ve Berk dışındaki altı koşucuya sıralı olarak

$$P(6,2)=6\cdot5=30$$

biçimde verilir:

$$3\cdot30=90$$

**Neden doğru?** Madalyalar farklı olduğu için diğer iki sporcunun yer değiştirmesi yeni bir sonuç oluşturur.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Dairesel ve dönüşümlü oturma düzeninde karşılıklı eş koşulunu kullanma.

**Çözüm:**

Erkeklerden biri dönme eşdeğerliğini kaldırmak için sabitlenir. Diğer dört erkek, dönüşümlü düzenin erkeklere ayrılan dört sandalyesine $4!$ biçimde yerleşir. Her kadının yeri, eşinin tam karşısındaki sandalye olarak tek biçimde belirlenir:

$$4!=24$$

**Neden doğru?** On sandalyede karşı sandalye beş adım uzakta olduğundan erkek konumunun karşısı kadınlara ayrılan konumlardan biridir ve eşlerin yerleri çakışmaz.
