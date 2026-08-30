# Konu 21 — Kombinasyon

## Test 25 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** En büyük elemanı sabit olan seçimleri sayma.

**Çözüm:**

En büyük sayının 9 olması için 9 zorunlu olarak seçilir; 10, 11 ve 12 seçilemez. Kalan üç sayı $1,2,\ldots,8$ arasından seçilir:

$$\binom83=56$$

**Neden doğru?** Sekiz küçük sayıdan seçilen her üçlü, 9 ile birlikte en büyük elemanı 9 olan farklı bir dörtlü oluşturur.

**Çeldirici notu:** Diğer üç sayıyı on bir sayıdan seçmek 9'dan büyük sayıların seçilmesine izin verir.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Ortak uçlu iki köşegeni ortak uç noktasına göre seçme.

**Çözüm:**

Ortak uç noktası altıgenin 6 köşesinden biri olabilir. Bir köşeden çizilebilen 3 köşegen vardır ve bunlardan ikisi seçilir:

$$6\binom32=6\cdot3=18$$

**Neden doğru?** Farklı iki köşegenin iki ortak ucu olamayacağı için her köşegen çifti ortak uç noktasında tam bir kez sayılır.

**Çeldirici notu:** Bir köşeden çıkan kenarları da seçime katmak yalnız köşegen çizilmesi koşulunu bozar.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Belirli bir noktadan geçen yolları bütün en kısa yollardan çıkarma.

**Çözüm:**

A'dan B'ye 4 sağ ve 3 yukarı adım gerekir. Bütün en kısa yolların sayısı

$$\binom73=35$$

tir. A'dan P'ye 2 sağ ve 1 yukarı adım, P'den B'ye 2 sağ ve 2 yukarı adım gerekir. P'den geçen yolların sayısı

$$\binom31\binom42=3\cdot6=18$$

dir. Bu yollar çıkarılır:

$$35-18=17$$

**Neden doğru?** Her en kısa yol P'den ya geçer ya geçmez; bu iki durum ayrık ve bütün yolları kapsar.

**Çeldirici notu:** Yalnız A–P yollarını çıkarmak, P'den sonra B'ye giden farklı yol seçeneklerini hesaba katmaz.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Binom açılımında belirli dereceli terimin katsayısını bulma.

**Çözüm:**

$(1+x)^{10}$ açılımında $x^4$ lü terim, on çarpanın dördünden $x$ seçilmesiyle oluşur. Katsayı

$$\binom{10}{4}=210$$

dur.

**Neden doğru?** Hangi dört çarpandan $x$ alınacağı seçildiğinde kalan altı çarpandan 1 alınır ve $x^4$ elde edilir.

**Çeldirici notu:** $4!$ ile çarpmak aynı dört çarpan seçimini farklı sıralarla yeniden sayar.

## Soru 5

**Doğru cevap:** D

**Kazanım:** İki eş büyüklükte bölümden dengeli seçim yapma.

**Çözüm:**

Toplam altı sorunun iki bölümden eşit sayıda gelmesi için her bölümden üçer soru seçilir:

$$\binom63\binom63=20\cdot20=400$$

**Neden doğru?** İki bölümün seçimleri bağımsızdır ve her ikisinde de sıra önemsizdir.

**Çeldirici notu:** Altı soruyu on iki sorudan koşulsuz seçmek bölümlerdeki sayıların eşit olmasını sağlamaz.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Bir değişkene üst sınır verilmiş negatif olmayan tam sayı çözümlerini sayma.

**Çözüm:**

$x$ değeri 0, 1 veya 2 olabilir. Bu değerler için $y+z$ toplamları sırasıyla 10, 9 ve 8 olur; çözüm sayıları

$$11,10,9$$

dur. Toplam

$$11+10+9=30$$

çözüm vardır.

**Neden doğru?** Sabit bir $x$ değeri için $y$ sıfırdan $10-x$ değerine kadar seçildiğinde $z$ tek olarak belirlenir.

**Çeldirici notu:** $x$ için yalnız 2 değerini almak, izin verilen 0 ve 1 değerlerini dışarıda bırakır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Dört sayının toplamının tek olmasını tek sayı adedine göre sayma.

**Çözüm:**

Listede 4 tek ve 4 çift sayı vardır. Dört sayının toplamının tek olması için tek sayıların adedi 1 veya 3 olmalıdır:

$$\binom41\binom43+\binom43\binom41$$

$$=4\cdot4+4\cdot4=32$$

**Neden doğru?** Tek sayıların tek adet seçilmesi toplamın tek olması için gerekli ve yeterlidir.

**Çeldirici notu:** İki tek sayı seçmek toplamın tek değil çift olmasına yol açar.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Aynı eşlenmiş çifte ait seçimleri bütün ikililerden çıkarma.

**Çözüm:**

On iki karttan iki kart seçmenin $\binom{12}{2}=66$ yolu vardır. Aynı eşlenmiş çifte ait 6 ikili koşula uymaz:

$$66-6=60$$

**Neden doğru?** Her eşlenmiş çift tam bir uygunsuz iki kart seçimi oluşturur.

**Çeldirici notu:** Altı çift arasından iki çift seçmek, her çiftten hangi kartın alınacağını hesaba katmaz.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Sabit bir kenarı içeren üçgenleri sayma.

**Çözüm:**

Kırmızı doğru parçasının iki uç noktası zorunlu olarak seçilir. Üçüncü köşe kalan 7 noktadan biri olabilir:

$$\binom71=7$$

**Neden doğru?** Kırmızı doğru parçasının uçları çember üzerindeki ardışık işaretli noktalar olduğundan, seçilen her üçüncü nokta bu parçayı üçgenin kenarı yapar.

**Çeldirici notu:** Kırmızı parçanın uçlarından yalnız birini seçmek sabit kenar koşulunu bozar.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Farklı sütunlardan birer hücre seçme.

**Çözüm:**

Önce hücre seçilecek üç sütun, beş sütundan seçilir. Seçilen her sütunda üst veya alt hücre olmak üzere 2 seçenek vardır:

$$\binom53\cdot2^3=10\cdot8=80$$

**Neden doğru?** Sütunlar önce farklı seçildiği için aynı sütundan iki hücre alınamaz.

**Çeldirici notu:** On hücreden doğrudan üçünü seçmek aynı sütundaki iki hücrenin birlikte seçilmesine izin verir.
