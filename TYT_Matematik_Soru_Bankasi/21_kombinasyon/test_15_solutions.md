# Konu 21 — Kombinasyon

## Test 15 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Ortanca değer belli olduğunda alt ve üst değerleri dengeli seçme.

**Çözüm:**

Ortanca sayının 6 olması için 6 seçilir. Ondan küçük beş sayıdan ikisi ve ondan büyük beş sayıdan ikisi seçilmelidir.

$$\binom52\binom52=10\cdot10=100$$

**Neden doğru?** Seçimde 6'nın altında ve üstünde ikişer sayı bulunduğu için 6 sıralamada tam ortada kalır.

**Çeldirici notu:** Alt ve üst taraftan farklı sayıda değer seçmek 6'yı ortanca konumdan çıkarır.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Tam çiftler ve tek başına seçilen kişi koşulunu birlikte sayma.

**Çözüm:**

İki üyesi birlikte seçilecek evli çiftler altı çiftten

$$\binom62=15$$

biçimde seçilir. Beşinci kişi, kalan dört çiftin sekiz üyesinden biri olabilir.

$$\binom62\cdot8=15\cdot8=120$$

**Neden doğru?** Beşinci kişi seçilen iki tam çiftin dışında kaldığı için üçüncü bir tam çift oluşmaz.

**Çeldirici notu:** Beşinci kişiyi on iki kişinin tamamından seçmek, zaten seçilmiş kişilerin yeniden alınmasına izin verir.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Tekrarlı seçimde kullanılan iki türün miktarlarını eşit olmama koşuluyla sayma.

**Çözüm:**

Kullanılacak iki çeşit

$$\binom52=10$$

biçimde seçilir. Altı şekerin bu iki çeşide pozitif dağılımları $(1,5)$, $(2,4)$, $(3,3)$, $(4,2)$ ve $(5,1)$'dir. Eşit miktarlı $(3,3)$ dağılımı uygun değildir; 4 dağılım kalır.

$$\binom52\cdot4=10\cdot4=40$$

**Neden doğru?** Çeşitler farklı olduğu için $(1,5)$ ile $(5,1)$ farklı miktar seçimleri oluşturur.

**Çeldirici notu:** İki çeşidin miktarlarını sırasız kabul etmek hangi çeşitten kaç şeker alındığını belirsiz bırakır.

## Soru 4

**Doğru cevap:** C

**Kazanım:** İç içe iki alt kümeyi elemanların durumlarına göre sayma.

**Çözüm:**

A'nın her elemanı B'de olacağı için kümenin her elemanı üç durumdan birindedir: A'da (dolayısıyla B'de), yalnız B'de veya B'nin dışında. Böylece $A\subseteq B$ olan $3^5=243$ ikili vardır.

A ile B'nin eşit olduğu durumlarda her eleman ya ikisinde de bulunur ya da ikisinin de dışındadır; bu durumların sayısı $2^5=32$'dir.

$$3^5-2^5=243-32=211$$

**Neden doğru?** Kümelerin eşit olduğu ikililer çıkarıldığında A'nın B'nin içinde fakat ondan farklı olduğu bütün ikililer kalır.

**Çeldirici notu:** Yalnız A ve B'yi ayrı ayrı seçip sayıları çarpmak A'nın her elemanının B'de bulunması koşulunu korumaz.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Belirli bir alt gruptan tek sayıda kişi seçme.

**Çözüm:**

A, B ve C'den ya biri ya da üçü seçilmelidir.

Tam biri seçilirse grup

$$\binom31\binom73=3\cdot35=105$$

biçimde oluşturulur. Üçü de seçilirse dördüncü kişi diğer yedi öğrenciden 7 biçimde belirlenir.

$$105+7=112$$

**Neden doğru?** Üç kişilik özel gruptan mümkün olan tek sayıdaki seçimler 1 ve 3'tür.

**Çeldirici notu:** Yalnız tam bir özel öğrenci bulunan grupları saymak üçünün de seçildiği grupları eksik bırakır.

## Soru 6

**Doğru cevap:** E

**Kazanım:** İki ayrı soru grubundan en az birer seçim yapma.

**Çözüm:**

On sorudan yapılabilecek bütün beşli seçimlerin sayısı $\binom{10}{5}=252$'dir.

İlk üç sorunun hiçbirini içermeyen seçimler $\binom75=21$, son üç sorunun hiçbirini içermeyen seçimler de 21 tanedir. İki gruptan da hiçbir soru içermeyen seçim için yalnız ortadaki dört sorudan beş soru seçmek gerekeceğinden böyle bir seçim yoktur.

$$252-21-21=210$$

**Neden doğru?** İlk ve son üçlülerin her birinden en az bir soru içeren seçimler bırakılmıştır.

**Çeldirici notu:** İlk ve son üçlülerden tam birer soru seçildiğini varsaymak, bu gruplardan daha fazla soru içeren uygun seçimleri dışarıda bırakır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** İki adlandırılmış ayrık grubu ardışık seçimle oluşturma.

**Çözüm:**

A grubunun iki üyesi

$$\binom82=28$$

biçimde seçilir. B grubunun iki üyesi kalan altı öğrenciden

$$\binom62=15$$

biçimde seçilir.

$$\binom82\binom62=28\cdot15=420$$

**Neden doğru?** Gruplar A ve B olarak adlandırıldığı için yer değiştirmeleri farklı sonuç oluşturur.

**Çeldirici notu:** Sonucu ikiye bölmek A ve B gruplarının farklı adlara sahip olduğunu göz ardı eder.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Özdeş öğeleri alt ve üst sınırlarla adlandırılmış kutulara dağıtma.

**Çözüm:**

Üç kutudaki bilye sayıları pozitif, en fazla 3 ve toplam 5 olmalıdır. Olası dağılım türleri

$$(3,1,1)\qquad \text{ve}\qquad(2,2,1)$$

dir. İlk türde 3 bilyeli kutu 3, ikinci türde 1 bilyeli kutu 3 biçimde belirlenir.

$$3+3=6$$

**Neden doğru?** Kutular numaralı olduğundan aynı sayı üçlüsünün farklı kutulara yerleşimleri farklı dağıtımlardır.

**Çeldirici notu:** Yalnız iki dağılım türünü saymak, bu türlerin numaralı kutular arasındaki farklı yerleşimlerini gözden kaçırır.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Tamamlayıcı sayı çiftlerinden tam birini içeren seçimleri sayma.

**Çözüm:**

Toplamı 13 olan altı sayı çifti vardır:

$$(1,12),\ (2,11),\ldots,(6,7)$$

Bu çiftlerden biri 6 biçimde seçilir. Üçüncü sayı, seçilen çiftin iki elemanı dışındaki 10 sayıdan seçilebilir.

$$6\cdot10=60$$

Üç sayı arasında ikinci bir 13 toplamlı çift oluşamaz; çünkü her sayının 13'e tamamlayan tek bir eşi vardır.

**Neden doğru?** Seçilen üçlüdeki 13 toplamlı çift, kendi iki elemanıyla tek biçimde belirlenir.

**Çeldirici notu:** Üçüncü sayıyı on iki sayının tamamından seçmek seçilmiş sayılardan birini tekrar kullanmaya izin verir.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Bir öğenin iki ikilide ortak olduğu ve diğer ikilinin ayrık kaldığı seçimleri sayma.

**Çözüm:**

İki karşılaşmada yer alacak takım 9 biçimde seçilir. Bu takımın iki rakibi kalan sekiz takımdan

$$\binom82=28$$

biçimde seçilir. Üçüncü karşılaşmanın iki takımı, henüz kullanılmayan altı takımdan

$$\binom62=15$$

biçimde seçilir.

$$9\cdot28\cdot15=3780$$

**Neden doğru?** Ortak takım iki karşılaşmada, seçilen diğer dört takım ise yalnız birer karşılaşmada yer alır.

**Çeldirici notu:** Üçüncü karşılaşmayı kalan sekiz takımdan seçmek, ortak takımın rakiplerinden birinin de ikinci kez oynamasına izin verir.
