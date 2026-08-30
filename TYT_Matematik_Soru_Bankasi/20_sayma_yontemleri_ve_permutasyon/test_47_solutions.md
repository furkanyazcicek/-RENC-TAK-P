# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 47 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Numaralandırılmış çembersel konumlarda komşu olmayan boş yerleri seçip kalan elemanları yerleştirme.

**Çözüm:**

Sekiz sandalyeden boş kalacak ikisi $\binom82=28$ biçimde seçilebilir. Çember üzerinde yan yana olan 8 sandalye çifti vardır. Dolayısıyla yan yana olmayan boş sandalye çifti sayısı

$$28-8=20$$

dir. Altı kişi kalan numaralı sandalyelere $6!$ biçimde oturur:

$$20\cdot6!=20\cdot720=14\,400$$

**Neden doğru?** Sandalyeler numaralandırıldığı için boş yerler belirlendikten sonra dönme eşliği uygulanmaz; kişi yerleşimleri doğrudan permütasyonla sayılır.

**Çeldirici notu:** Doğrusal sıralamadaki gibi yalnız yedi komşu çift saymak, 1 ve 8 numaralı sandalyelerin de yan yana olduğunu gözden kaçırır.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Elemanları kalan sınıflarına ayırarak her sınıftan seçim yapma.

**Çözüm:**

Kümede her kalan sınıfında dört sayı vardır. Dört sayı seçilip üç sınıf da kullanılacağı için sınıf sayıları $(2,1,1)$ olmalıdır. İki sayının seçileceği kalan sınıfı 3 biçimde belirlenir. Bu sınıftan $\binom42$, diğer iki sınıfın her birinden 4'er biçimde sayı seçilir.

$$3\binom42\cdot4\cdot4=3\cdot6\cdot16=288$$

**Neden doğru?** Toplam dört seçimde üç sınıfın da bulunması, sınıflardan tam birinin iki kez temsil edilmesini zorunlu kılar.

**Çeldirici notu:** İki elemanın geldiği kalan sınıfını seçmemek üç olası durumu eksik bırakır.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Doğrusal seçimleri belirli sayıda bağlı bileşen ve blok uzunluğuyla sayma.

**Çözüm:**

Beş seçili koltuk, uzunlukları $2,1,1,1$ olan dört seçili blok oluşturmalıdır. Uzunluğu 2 olan bloğun soldan sağa kaçıncı blok olacağı 4 biçimde seçilir.

Seçili blokların arasında en az birer boş koltuk bulunmalıdır. Toplam 7 boş koltuğun üçü iç aralara yerleştirildikten sonra kalan 4 boş koltuk, iki uç ve üç iç aralık olmak üzere 5 yere serbestçe dağıtılır:

$$\binom{4+5-1}{5-1}=\binom84=70$$

Toplam seçim sayısı $4\cdot70=280$'dir.

**Neden doğru?** Dört seçili bloğun yalnız birinin uzunluğu 2 olduğundan tam bir komşu çifti oluşur; zorunlu iç boşluklar diğer komşulukları engeller.

**Çeldirici notu:** Uzunluğu 2 olan bloğun dört farklı sıralama konumu, aynı boşluk dağılımında farklı koltuk seçimleri üretir.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Sonlu bir kümedeki üç terimli aritmetik dizileri ortak farka göre sayma.

**Çözüm:**

Ortak fark $d$ olsun. İlk terim $a$ için $a+2d\leq8$ olmalıdır.

- $d=1$ için $a=1,2,\ldots,6$: 6 seçim.
- $d=2$ için $a=1,2,3,4$: 4 seçim.
- $d=3$ için $a=1,2$: 2 seçim.

Daha büyük ortak fark mümkün değildir. Toplam $6+4+2=12$ seçim vardır.

**Neden doğru?** Her üçlü, en küçük elemanı ve pozitif ortak farkıyla tek biçimde belirlenir.

**Çeldirici notu:** Ortak fark sıfır olamaz; seçilen üç sayı birbirinden farklıdır.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Uç basamakların büyüklük ilişkisini yer değiştirme simetrisiyle sayma.

**Çözüm:**

Yedi rakamdan beşinin sıralı seçimi

$$P(7,5)=7\cdot6\cdot5\cdot4\cdot3=2520$$

farklı sayı verir. İlk ve son rakamlar her zaman farklıdır. Bu iki rakam yer değiştirildiğinde “ilk küçük” ve “ilk büyük” durumları bire bir eşleşir. Bu nedenle sayıların yarısı uygundur:

$$\frac{2520}{2}=1260$$

**Neden doğru?** Sıfır kullanılmadığı için uç basamakları yer değiştirmek her zaman geçerli bir beş basamaklı sayı üretir.

**Çeldirici notu:** İlk ve son rakamı seçtikten sonra ortadaki üç basamağın sıralı yerleşimini unutmamak gerekir.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Özdeş nesne dağılımında çift miktar koşulunu değişken dönüşümüyle sayma.

**Çözüm:**

Kutulardaki bilye sayıları $2x_1,2x_2,2x_3,2x_4$ olarak yazılabilir. Burada $x_i$'ler negatif olmayan tam sayılardır ve

$$x_1+x_2+x_3+x_4=5$$

olur. Çözüm sayısı

$$\binom{5+4-1}{4-1}=\binom83=56$$

dır.

**Neden doğru?** Sıfır çift sayı olduğundan boş kutular, ilgili $x_i=0$ çözümleriyle doğru biçimde temsil edilir.

**Çeldirici notu:** Her kutuya başlangıçta iki bilye vermek, soruda bulunmayan dolu olma koşulunu ekler.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Gruplara ayırma ve görev seçimini koşulla birlikte sayma.

**Çözüm:**

Ayşe'nin hangi takımda bulunacağı 2 biçimde belirlenir. Berk diğer takımda olmak zorundadır. Ayşe'nin takımındaki diğer üç öğrenci, kalan altı öğrenciden

$$\binom63=20$$

biçimde seçilir. Her takımda dört öğrenci bulunduğundan iki takımın kaptanları $4\cdot4=16$ biçimde seçilebilir. Böylece toplam

$$2\cdot\binom63\cdot4\cdot4=2\cdot20\cdot16=640$$

olur.

**Neden doğru?** Takımlar numaralı olduğundan Ayşe'nin 1. veya 2. takımda bulunması farklı durumlar oluşturur; kaptan seçimleri takım dağılımından sonra bağımsızdır.

**Çeldirici notu:** Ayşe'nin bulunacağı takımı sabit kabul etmek, takım numaralarından doğan 2 çarpanını eksik bırakır.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Çift sayıda tekrarlanan sembollerle palindromik diziliş oluşturma.

**Çözüm:**

Palindromun simetrik konumlarında aynı harf bulunmalıdır. Her harften iki tane olduğuna göre ilk dört konuma A, B, C ve D harflerinin her biri bir kez yerleşir. Son dört konum bu sıranın tersi olarak zorunlu biçimde belirlenir.

İlk yarının sırası $4!=24$ biçimde seçilebilir.

**Neden doğru?** İlk yarıdaki her harf, ikinci yarıda simetrik eşini zorunlu olarak belirlediğinden başka serbest seçim kalmaz.

**Çeldirici notu:** Sekiz konumu doğrudan $8!/(2!)^4$ ile saymak palindrom olmayan dizileri de içerir.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Seçim ve görev atamasında “ya … ya da …” koşulunu ayrık durumlarla sayma.

**Çözüm:**

Ayşe başkansa kurulun diğer üç üyesi kalan dokuz öğrenciden $\binom93=84$ biçimde seçilir.

Ayşe kurulda yoksa dört kurul üyesi dokuz öğrenciden $\binom94$ biçimde seçilir ve başkan bu dört üyeden 4 biçimde belirlenir:

$$\binom94\cdot4=126\cdot4=504$$

İki durum ayrık olduğundan toplam $84+504=588$ sonuç vardır.

**Neden doğru?** Ayşe'nin başkan olduğu ve kurulda bulunmadığı durumlar birlikte gerçekleşemez ve verilen koşulun bütün olasılıklarını kapsar.

**Çeldirici notu:** Ayşe'nin sıradan kurul üyesi olduğu durumlar sorudaki iki koşuldan hiçbirini sağlamaz.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Tekrarlanan belirli sonuçların bitişik olmadığı deney dizilerini sayma.

**Çözüm:**

Beş atış konumundan iki tanesi, yan yana olmayacak biçimde

$$\binom{5-2+1}{2}=\binom42=6$$

biçimde 6 sonucu için seçilir. Kalan üç atışın her birinde $1,2,3,4,5$ sonuçlarından biri gelebilir.

$$6\cdot5^3=6\cdot125=750$$

**Neden doğru?** 6'ların konumları belirlendikten sonra diğer üç konumun hiçbiri 6 olamaz, ancak kendi aralarında bağımsızdır.

**Çeldirici notu:** Önce $\binom52$ seçip yan yana olan dört konum çiftini çıkarmak da 6 verir; yalnızca $\binom52$ kullanmak bitişiklik koşulunu gözden kaçırır.
