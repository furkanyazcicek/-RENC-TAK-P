# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 44 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Sabit konum farkı ile önce-sonra koşulunu birlikte kullanarak diziliş sayma.

**Çözüm:**

A solda ve aralarında bir kişi olduğundan A'nın konumu $1,2,3,4,5$ veya $6$ olabilir; B'nin konumu A'nın konumundan iki fazladır. C, B'nin sağındaki konumlardan birine gelmelidir. A'nın konumu sırasıyla $1,2,3,4,5,6$ olduğunda C için $5,4,3,2,1,0$ seçenek vardır.

Dolayısıyla A, B ve C'nin konumları

$$5+4+3+2+1=15$$

biçimde belirlenir. Kalan beş kişi boş yerlere $5!$ biçimde dizilir:

$$15\cdot5!=15\cdot120=1800$$

**Neden doğru?** A ve B'nin konum farkı sabit tutulmuş, C için yalnız B'nin sağındaki boş konumlar sayılmıştır.

**Çeldirici notu:** A'nın 6. konumda olduğu durumda B son konumdadır ve C için uygun yer kalmaz.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Sonuçları kalan sınıflarına ayırarak koşullu dizi sayma.

**Çözüm:**

Zarın tek sonuçları $1,3,5$ olup bunların 3 ile bölümünden kalanları sırasıyla $1,0,2$'dir. İlk üç atışın her biri için 3 seçenek vardır. İlk üç sayının toplamının 3 ile bölümünden kalanı belirlendiğinde, toplamı 3'ün katı yapacak dördüncü kalan ve buna karşılık gelen tek zar sonucu yalnız bir tanedir.

Bu nedenle sonuç dizisi sayısı

$$3^3=27$$

dir.

**Neden doğru?** Tek sonuçlar üç kalan sınıfını da birer kez temsil ettiğinden ilk üç atıştan sonra dördüncü atış tek biçimde belirlenir.

**Çeldirici notu:** Dördüncü atış için de üç seçenek kullanmak toplamın 3 ile bölünebilmesi koşulunu uygulamamak olur.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Geometrik seçimlerde doğrusal üçlü içeren geçersiz dörtgenleri çıkarma.

**Çözüm:**

Dokuz noktadan seçilebilecek tüm dörtlülerin sayısı $\binom94=126$'dır. Dörtgen oluşturmayan seçimler, aynı doğru üzerindeki beş noktadan en az üçünü içerir.

- Doğrusal beş noktadan üçü ve diğer dört noktadan biri: $\binom53\binom41=40$.
- Doğrusal beş noktadan dördü: $\binom54=5$.

Bu durumlar ayrık olduğundan geçerli dörtgen sayısı

$$126-40-5=81$$

olur.

**Neden doğru?** Verilen koşula göre dörtgeni geçersiz yapan tek durum, seçilen dört noktanın en az üçünün belirtilen doğru üzerinde bulunmasıdır.

**Çeldirici notu:** Doğru üzerindeki dört noktalı seçimler, üç nokta ve dışarıdan bir nokta seçilen durumlara dahil değildir; ayrıca çıkarılmalıdır.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Dairesel dizilişte komşuluk ve karşılıklılık konumlarını aynı anda sabitleme.

**Çözüm:**

Dönmelerden doğan eş dizilişleri ayırmak için A'nın yeri sabitlenir. D'nin yeri A'nın karşısı olarak belirlenir. A'nın iki yanına B ile C, kendi aralarında 2 biçimde oturur. Kalan dört kişi boş yerlere $4!$ biçimde yerleşir.

$$2\cdot4!=2\cdot24=48$$

**Neden doğru?** A sabitlendiğinde hem karşı koltuk hem de iki komşu koltuk belirli hâle gelir; yalnız B–C sırası ve kalan kişilerin sırası serbesttir.

**Çeldirici notu:** Masa çevresinde A için ayrıca sekiz konum saymak, döndürülerek çakışan düzenleri tekrar sayar.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Kurul seçiminde tam bir eş çifti bulunması koşulunu uygulama.

**Çözüm:**

Kurulda birlikte bulunacak evli çift 5 biçimde seçilir. Kalan iki kişi, diğer dört çiftin ikisinden gelmelidir; bu çiftler $\binom42$ biçimde seçilir. Seçilen her çiftten kurula alınacak eş için 2 seçenek vardır.

$$5\binom42 2^2=5\cdot6\cdot4=120$$

**Neden doğru?** Kalan iki kişinin farklı çiftlerden birer kişi olarak seçilmesi, kurulda ikinci bir tam evli çift oluşmasını engeller.

**Çeldirici notu:** İlk evli çift seçildikten sonra kalan sekiz kişiden doğrudan iki kişi seçmek, ikinci bir evli çift içeren kurulları da sayar.

## Soru 6

**Doğru cevap:** D

**Kazanım:** İki farklı özdeş harf çifti için yan yana gelmeme koşulunu içerme-dışlama ile sayma.

**Çözüm:**

KAKAO sözcüğünün tüm farklı diziliş sayısı

$$\frac{5!}{2!\,2!}=30$$

dur. İki K'nın yan yana olduğu $\frac{4!}{2!}=12$, iki A'nın yan yana olduğu yine 12 diziliş vardır. Hem K'ların hem A'ların yan yana olduğu dizilişlerde KK ve AA birer bloktur; O ile birlikte $3!=6$ diziliş elde edilir.

İçerme-dışlama ilkesiyle

$$30-12-12+6=12$$

olur.

**Neden doğru?** K ve A bloklarının birlikte bulunduğu dizilişler iki kez çıkarıldığı için bir kez geri eklenmiştir.

**Çeldirici notu:** K'ların ayrık olması A'ların da ayrık olduğunu garanti etmez; iki yasak durum ayrı ele alınmalıdır.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Bir kümeden belirli özellikte tam sayıda eleman seçme.

**Çözüm:**

Kümede 3'ün katı olan $3,6,9,12$ sayıları ve 3'ün katı olmayan 8 sayı vardır. Dört elemanın tam ikisi ilk gruptan seçileceğine göre

$$\binom42\binom82=6\cdot28=168$$

seçim yapılabilir.

**Neden doğru?** İki sayı her iki sınıftan da seçildiği için dört elemanlı kümede 3'ün katı olanların sayısı tam olarak iki olur.

**Çeldirici notu:** Yalnız 3'ün katı olan iki sayıyı seçmek, kalan iki sayının nasıl seçileceğini hesaba katmaz.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Uç basamak koşulu altında tüm rakamların permütasyonunu sayma.

**Çözüm:**

Toplamı 8 olan ve farklı rakamlardan oluşan sıralı uç çiftleri

$$(1,7),(2,6),(3,5),(5,3),(6,2),(7,1)$$

olmak üzere 6 tanedir. Uçlar belirlendiğinde kalan beş rakam orta basamaklara $5!$ biçimde yerleşir.

$$6\cdot5!=6\cdot120=720$$

**Neden doğru?** Her rakam yalnız bir kez kullanıldığı için $(4,4)$ çifti uygun değildir; diğer çiftlerin ters sıraları farklı sayılar oluşturur.

**Çeldirici notu:** Uç çiftlerini sırasız saymak ilk ve son basamakların yer değişiminden doğan farklı sayıları eksik bırakır.

## Soru 9

**Doğru cevap:** B

**Kazanım:** İki bölümden yapılan seçimlerde sayı karşılaştırması koşulunu durumlara ayırma.

**Çözüm:**

Toplam beş soru seçildiğinden birinci bölümdeki soru sayısının daha fazla olması için bölüm dağılımı $(3,2)$ veya $(4,1)$ olmalıdır.

$$\binom43\binom62+\binom44\binom61=4\cdot15+1\cdot6=66$$

**Neden doğru?** Birinci bölümde en fazla dört soru bulunduğu için eşitsizliği sağlayan başka bir bölüm dağılımı yoktur.

**Çeldirici notu:** $(2,3)$ dağılımı ikinci bölümden daha fazla soru seçildiği için koşulu sağlamaz.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Pozitif tam sayı dağılımlarında üçgen eşitsizliğini uygulama.

**Çözüm:**

Üç kutudaki sayılar $(x,y,z)$ olsun. Pozitif ve toplamları 9 olan sıralı üçlülerin sayısı $\binom82=28$'dir.

Üçgen oluşmaması için kutulardan birindeki sayı diğer ikisinin toplamına eşit veya ondan büyük olmalıdır. Toplam 9 olduğundan bu sayı en az 5'tir. Örneğin $x\geq5$ için

$$x=5+a,\quad y=1+b,\quad z=1+c$$

yazılır ve $a+b+c=2$ olur. Bunun $\binom42=6$ çözümü vardır. Büyük olan kutu 3 biçimde seçilir ve bu geçersiz durumlar aynı anda iki farklı kutuda oluşamaz.

$$28-3\cdot6=10$$

**Neden doğru?** Pozitif kenar uzunluklarında toplam 9 iken üçgen eşitsizliğini bozan durumlar tam olarak bir kenarın en az 5 olmasıdır.

**Çeldirici notu:** Eşitlik durumu üçgen oluşturmadığından en büyük kenarın diğer ikisinin toplamına eşit olduğu dağılımlar da çıkarılmalıdır.
