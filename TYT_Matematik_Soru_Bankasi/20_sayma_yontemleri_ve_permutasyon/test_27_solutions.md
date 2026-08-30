# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 27 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Rakamları kesin artan sayılarda seçimin sıralamayı tek olarak belirlediğini fark etme.

**Çözüm:**

Seçilen beş rakamın artan sırası yalnız bir tanedir. Rakamlar arasında $0$ bulunursa en başa geleceği için oluşan ifade beş basamaklı bir sayı olmaz. Bu nedenle beş rakam $1,2,\ldots,9$ arasından seçilir:

$$\binom95=126$$

**Neden doğru?** Sıralama koşulu her rakam kümesi için tek bir sayı oluşturur; ayrıca bir permütasyon çarpanı kullanılmaz.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Birbirinden bağımsız göreli sıra koşullarını simetriyle sayma.

**Çözüm:**

Yedi görevin kısıtlamasız sıralanma sayısı $7!$'dir. Her sıralamada $A$ ile $B$ yer değiştirildiğinde bu ikilinin istenen sırasını sağlayan ve sağlamayan düzenler eşleşir; dolayısıyla düzenlerin yarısı $A$'yı önce getirir. Aynı durum bağımsız $C,D$ ikilisi için de geçerlidir:

$$\frac{7!}{2\cdot2}=\frac{5040}{4}=1260$$

**Neden doğru?** İki koşul farklı görev çiftleriyle ilgili olduğundan her biri olasılık uzayını eşit iki parçaya böler.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Kolye dizilişlerinde dönme ve yansıma eşdeğerliklerini birlikte kullanma.

**Çözüm:**

Döndürmeler aynı kabul edildiğinde altı farklı boncuğun dairesel diziliş sayısı

$$(6-1)!=120$$

olur. Bir diziliş ile ters çevrilmiş görüntüsü de aynı kolyeyi verdiği için ve bütün boncuklar farklı olduğundan bu sayı ikiye bölünür:

$$\frac{120}{2}=60$$

**Neden doğru?** Farklı boncuklardan oluşan hiçbir diziliş ters çevrilmiş hâliyle dönme yoluyla çakışmaz; bu nedenle bütün sınıflar ikişerlidir.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Doğrusal dizilişte aralarında belirli sayıda kişi bulunan iki özel kişiyi yerleştirme.

**Çözüm:**

Ayşe ile Berk'in konum numaraları arasındaki fark $3$ olmalıdır. Sekiz konumda bu koşulu sağlayan $5$ konum çifti vardır. Ayşe ile Berk bu çiftlere $2$ farklı sırada, kalan altı kişi ise boş yerlere $6!$ biçimde yerleşir:

$$5\cdot2\cdot6!=10\cdot720=7200$$

**Neden doğru?** Konum farkının $3$ olması iki kişi arasında tam iki koltuk ve dolayısıyla iki kişi bulunmasını sağlar.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Eşli kişiler arasından aynı eşten iki kişi almadan kurul seçme.

**Çözüm:**

Önce kurula temsilci verecek dört çift, beş çift arasından $\binom54=5$ biçimde seçilir. Seçilen her çiftten eşlerden biri alınacağından

$$2^4=16$$

seçenek vardır. Toplam

$$5\cdot16=80$$

kurul oluşturulur.

**Neden doğru?** Dört kişi dört farklı çiftten seçildiği için hiçbir evli çift kurulda birlikte bulunmaz.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Özdeş ödül türlerini farklı kişilere ve çakışmayacak biçimde dağıtma.

**Çözüm:**

Matematik ödülü alacak iki öğrenci $\binom82=28$ biçimde seçilir. Kalan altı öğrenciden fizik ödülü alacak iki öğrenci $\binom62=15$ biçimde seçilir:

$$\binom82\binom62=28\cdot15=420$$

**Neden doğru?** Aynı türdeki ödüller özdeş olduğu için tür içindeki iki öğrencinin sırası önemli değildir; türler ise birbirinden farklıdır.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Dairesel düzende karşıtlık ve komşuluk koşullarını aynı anda sayma.

**Çözüm:**

Dönme eşdeğerliğini kaldırmak için Ayşe sabitlenir; Berk'in yeri karşısındaki sandalye olarak belirlenir. Geriye kalan dört sandalyede yalnız iki komşu sandalye çifti vardır; diğer komşuluklar Ayşe veya Berk'in oturduğu sandalyeler üzerinden oluşur. Ceren ile Deniz'in konum çifti $2$, bu çift içindeki sıraları $2$ biçimde seçilir. Kalan iki kişi de $2!$ biçimde yerleşir:

$$2\cdot2\cdot2=8$$

**Neden doğru?** Ayşe ve Berk'in karşılıklı konumları masayı iki ayrı ikili boşluk bölgesine ayırır; Ceren ile Deniz yalnızca bu bölgelerden birinde yan yana olabilir.

## Soru 8

**Doğru cevap:** D

**Kazanım:** İki ayrı yasak konumu içerme-dışlama ilkesiyle sayma.

**Çözüm:**

Kısıtlamasız $5!=120$ düzen vardır. Ayşe'nin $1$ numaralı koltukta olduğu $4!=24$, Berk'in $2$ numaralı koltukta olduğu yine $24$ düzen çıkarılır. İkisinin de yasak koltuğunda olduğu $3!=6$ düzen iki kez çıkarıldığı için geri eklenir:

$$120-24-24+6=78$$

**Neden doğru?** İçerme-dışlama, iki yasağın aynı anda gerçekleştiği düzenlerin eksik sayılmasını önler.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Belirli bir grubun tamamının yan yana olmadığı dizilişleri tüm dizilişlerden çıkarma.

**Çözüm:**

Yedi farklı kitabın tüm dizilişleri $7!=5040$'tır. Dört matematik kitabı bir blok kabul edildiğinde bu blok ve üç fizik kitabı $4!$ biçimde, matematik kitapları blok içinde ayrıca $4!$ biçimde sıralanır:

$$4!\cdot4!=576$$

İstenen sayı

$$5040-576=4464$$

olur.

**Neden doğru?** “Tamamının yan yana bulunmadığı” ifadesi, dört kitabın tek blok olduğu durumun tüm dizilişlerden çıkarılmasıyla doğrudan karşılanır.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Birlikte bulunması gereken iki farklı nesneyi tek bir birim gibi ele alarak örten dağıtım sayma.

**Çözüm:**

Belirli iki topun birlikte bulunacağı kutu $3$ biçimde seçilir. Kalan dört top üç kutuya serbestçe dağıtılır; ancak seçilmeyen iki kutunun ikisi de boş kalmamalıdır. İçerme-dışlamayla bu dağıtım sayısı

$$3^4-2\cdot2^4+1=81-32+1=50$$

olur. Toplam

$$3\cdot50=150$$

dağıtım vardır.

**Neden doğru?** Birlikteki iki top seçilen kutunun boş olmamasını zaten sağlar; yalnızca diğer iki kutunun boş kalması engellenir.
