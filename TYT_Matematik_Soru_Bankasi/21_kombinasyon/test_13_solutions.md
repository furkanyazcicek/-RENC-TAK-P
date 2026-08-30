# Konu 21 — Kombinasyon

## Test 13 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Bölünebilme özelliğine sahip öğelerden tam olarak birini seçme.

**Çözüm:**

Sayılar arasında 5'in katı olan 2 sayı $(5,10)$ ve olmayan 8 sayı vardır. Beşin katlarından biri, diğer sayılardan ikisi seçilir.

$$\binom21\binom82=2\cdot28=56$$

**Neden doğru?** Üç sayılık seçim tam bir 5 katı ve iki 5 katı olmayan sayıyla tamamlanmıştır.

**Çeldirici notu:** Diğer iki sayıyı on sayının tamamından seçmek ikinci bir 5 katının da seçilmesine izin verir.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Belirli öğelerin ne tamamını ne de hiçbirini içeren seçimleri sayma.

**Çözüm:**

Sekiz öğrenciden oluşturulabilecek bütün dörtlü grupların sayısı $\binom84=70$'tir.

A, B ve C'nin üçünün de bulunduğu gruplarda dördüncü kişi diğer beş öğrenciden 5 biçimde seçilir. Üçünün de bulunmadığı gruplar ise diğer beş öğrenciden $\binom54=5$ biçimde seçilir.

$$70-5-5=60$$

**Neden doğru?** Özel öğrencilerden bir veya ikisini içeren bütün gruplar korunmuş, yalnız sıfır ve üç özel öğrencili gruplar elenmiştir.

**Çeldirici notu:** Yalnız tam bir özel öğrenci içeren grupları saymak iki özel öğrencili uygun grupları dışarıda bırakır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Tekrarlı seçimde belirli bir çokluk dağılımını uygulama.

**Çözüm:**

Üç top alınacak çeşit 6 biçimde seçilir. Birer top alınacak diğer iki çeşit, kalan beş çeşitten

$$\binom52=10$$

biçimde seçilir.

$$6\cdot\binom52=6\cdot10=60$$

**Neden doğru?** Üç kez kullanılan çeşit ile birer kez kullanılan iki çeşit farklı roller taşıdığı için ayrı aşamalarda seçilmiştir.

**Çeldirici notu:** Kullanılan üç çeşidi yalnız $\binom63$ biçimde seçmek hangi çeşitten üç top alınacağını belirlemez.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Bir alt kümenin belirli bir grupla kesişimindeki eleman sayısının çift olması koşulunu uygulama.

**Çözüm:**

A, B ve C'den ya hiçbiri ya da ikisi seçilmelidir. Bu seçim

$$\binom30+\binom32=1+3=4$$

biçimde yapılır. Diğer beş elemanın her biri alt kümeye alınabilir veya alınmayabilir; bu da $2^5=32$ seçenek verir.

$$4\cdot32=128$$

**Neden doğru?** Özel üçlüden çift sayıda eleman seçilmiş, diğer elemanlar koşulu etkilemediği için serbest bırakılmıştır.

**Çeldirici notu:** A, B ve C'den üçünü seçmek kesişimdeki eleman sayısını tek yapar.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Ortak bir öğeye sahip iki adsız ikiliyi sayma.

**Çözüm:**

İki karşılaşmada ortak olacak takım 8 biçimde seçilir. Ortak takımın karşılaşacağı diğer iki takım kalan yedi takımdan sırasız olarak seçilir.

$$8\cdot\binom72=8\cdot21=168$$

**Neden doğru?** Karşılaşmalar adlandırılmadığı için diğer iki takımın yer değiştirmesi yeni bir sonuç oluşturmaz.

**Çeldirici notu:** Diğer iki takımı sıralı seçmek aynı iki karşılaşmayı iki kez sayar.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Toplamın tek–çiftliğini seçilen tek sayı adedine göre sayma.

**Çözüm:**

Birden ona kadar 5 tek ve 5 çift sayı vardır. Dört sayının toplamının çift olması için tek sayı adedi 0, 2 veya 4 olmalıdır.

$$\binom50\binom54+\binom52\binom52+\binom54\binom50$$

$$=1\cdot5+10\cdot10+5\cdot1=110$$

**Neden doğru?** Çift toplam veren bütün olası tek sayı adetleri ayrı ayrı değerlendirilmiştir.

**Çeldirici notu:** Yalnız iki tek sayı seçilen durumu saymak sıfır veya dört tek sayılı uygun seçimleri eksik bırakır.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Bir seçimde belirli türün çoğunlukta olmasını durumlara ayırma.

**Çözüm:**

Beş kitaplık seçimde matematik kitaplarının çoğunlukta olması için 3, 4 veya 5 matematik kitabı seçilmelidir.

$$\binom63\binom42+\binom64\binom41+\binom65\binom40$$

$$=20\cdot6+15\cdot4+6\cdot1=120+60+6=186$$

**Neden doğru?** Matematik kitaplarının çoğunluk oluşturduğu üç olası dağılım eksiksiz sayılmıştır.

**Çeldirici notu:** İki matematik ve üç edebiyat kitabı bulunan seçimlerde matematik kitapları çoğunlukta değildir.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Tam olarak bir ardışık çift içeren gün seçimlerini sayma.

**Çözüm:**

Ardışık çift $(i,i+1)$ olsun. Üçüncü gün, bu çiftin dışında ve çifte komşu olmayan bir gün olmalıdır; aksi hâlde ikinci bir ardışık çift oluşur.

Çift $(1,2)$ veya $(7,8)$ olduğunda üçüncü gün için 5'er seçenek vardır. Çiftin başlangıcı $2,3,4,5$ veya $6$ olduğunda üçüncü gün için 4'er seçenek vardır.

$$5+5\cdot4+5=30$$

**Neden doğru?** Her uygun üçlüde yalnız bir ardışık çift bulunduğu için üçlüler çiftlerine göre tek kez sayılır.

**Çeldirici notu:** Üç ardışık günü seçmek iki ardışık çift oluşturur ve koşulu sağlamaz.

## Soru 9

**Doğru cevap:** A

**Kazanım:** İki farklı alt grup için “en az” ve “en fazla” koşullarını birlikte uygulama.

**Çözüm:**

Son iki sorudan hiçbirinin seçilmediği durumda dört soru ilk altı sorudan seçilir; ilk iki sorudan en az biri bulunmalıdır:

$$\binom64-\binom44=15-1=14$$

Son iki sorudan biri seçilirse bu soru 2 biçimde belirlenir. Kalan üç soru ilk altı sorudan seçilir ve ilk iki sorudan en az biri olmalıdır:

$$2\left(\binom63-\binom43\right)=2(20-4)=32$$

Toplam $14+32=46$ seçim vardır.

**Neden doğru?** Son iki sorudan izin verilen sıfır ve bir seçim durumları ayrı ayrı sayılmıştır.

**Çeldirici notu:** Son iki sorudan tam birinin seçildiğini varsaymak, ikisinin de seçilmediği uygun seçimleri dışarıda bırakır.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Eş büyüklükteki adsız grupların yer değişimini düzelterek grup bölme.

**Çözüm:**

İki kişilik grup

$$\binom{10}{2}=45$$

biçimde seçilir. Kalan sekiz öğrenciden dört kişilik gruplardan biri $\binom84=70$ biçimde seçildiğinde diğeri belirlenir. İki dörtlü adlandırılmadığı için yer değişimleri aynı bölünmedir.

$$\binom{10}{2}\cdot\frac{\binom84}{2}=45\cdot35=1575$$

**Neden doğru?** İkili grup büyüklüğüyle ayırt edilir; yalnız iki dörtlünün yer değişimi tekrar oluşturur.

**Çeldirici notu:** İkiye bölmemek aynı iki dörtlüyü seçilme sırasına göre iki kez sayar.
