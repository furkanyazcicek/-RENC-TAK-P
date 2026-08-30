# Konu 21 — Kombinasyon

## Test 27 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Sayıları kalan sınıflarına ayırarak toplamı 3'ün katı olan üçlüleri seçme.

**Çözüm:**

1'den 9'a kadar sayılar, 3 ile bölündüğünde kalanlarına göre üçer elemanlı üç sınıfa ayrılır. Toplamın 3'ün katı olması için ya her sınıftan bir sayı seçilir ya da aynı sınıftan üç sayı seçilir:

$$3\cdot3\cdot3+3\binom33=27+3=30$$

**Neden doğru?** Kalanların toplamı sırasıyla $0+1+2$ veya $0+0+0,1+1+1,2+2+2$ olduğunda 3'ün katıdır.

**Çeldirici notu:** Yalnız her sınıftan birer sayı seçmek, aynı kalan sınıfından seçilen üçlüleri dışarıda bırakır.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Özel üçlüden en az iki kişi içeren kurul seçme.

**Çözüm:**

Özel öğrencilerden tam ikisi seçilirse kalan iki öğrenci diğer 5 kişiden, üçünün tamamı seçilirse kalan bir öğrenci diğer 5 kişiden seçilir:

$$\binom32\binom52+\binom33\binom51=3\cdot10+5=35$$

**Neden doğru?** “En az iki” koşulunun iki ve üç özel öğrenci durumları ayrık ve bütün durumlardır.

**Çeldirici notu:** Tam iki özel kişiyi saymak, üçünün birlikte bulunduğu kurulları eksik bırakır.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Ortak elemanı olmayan, adlandırılmış iki alt kümeyi seçme.

**Çözüm:**

A alt kümesi 7 elemandan iki, B alt kümesi kalan 5 elemandan üç eleman seçilerek belirlenir:

$$\binom72\binom53=21\cdot10=210$$

**Neden doğru?** B, A'dan seçilen iki elemanı kullanmadığı için kesişim boş kalır.

**Çeldirici notu:** İki alt kümeyi bağımsız olarak ana kümeden seçmek ortak elemanlı çiftleri de kapsar.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Evli çiftlerden en fazla birer kişi seçme.

**Çözüm:**

Önce dört evli çift seçilir:

$$\binom64=15$$

Seçilen her çiftten gruba girecek kişi iki biçimde belirlenir:

$$\binom64\cdot2^4=15\cdot16=240$$

**Neden doğru?** Dört farklı çiftten birer kişi seçildiği için hiçbir eş çifti birlikte bulunmaz.

**Çeldirici notu:** On iki kişiden doğrudan dört kişi seçmek aynı eş çiftinin iki üyesini de içerebilir.

## Soru 5

**Doğru cevap:** A

**Kazanım:** İki türden tam sayıda öğe içeren seçkiyi sayma.

**Çözüm:**

Tam iki roman dört romandan, kalan üç kitap altı öykü kitabından seçilir:

$$\binom42\binom63=6\cdot20=120$$

**Neden doğru?** Beş kitaplık seçkide tam iki roman olduğunda geri kalan üç kitap zorunlu olarak öyküdür.

**Çeldirici notu:** Beş kitabı on kitaptan koşulsuz seçmek roman sayısını sabitlemez.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Bir değişkenin paritesine göre tam sayı çözümlerini sayma.

**Çözüm:**

$x$ değeri $0,2,4,6,8$ olabilir. Sabit bir $x$ için $y+z=9-x$ eşitliğinin negatif olmayan çözüm sayısı $10-x$ tir. Bu nedenle

$$10+8+6+4+2=30$$

üçlü vardır.

**Neden doğru?** Her sabit $x$ değerinde $y$ sıfırdan $9-x$ değerine kadar seçilir ve $z$ belirlenir.

**Çeldirici notu:** $x$ için yalnız pozitif çiftleri almak $x=0$ durumunu dışarıda bırakır.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Çift ve tek sayılardan belirtilen sayıda seçme.

**Çözüm:**

1'den 10'a kadar 5 çift ve 5 tek sayı vardır. Tam iki çift seçildiğinde iki tek de seçilmelidir:

$$\binom52\binom52=10\cdot10=100$$

**Neden doğru?** Dört sayının kalan iki elemanı teklerden seçilerek çift sayısı tam iki yapılır.

**Çeldirici notu:** Çift sayılardan üç veya dört tane seçmek verilen tamlık koşulunu bozar.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Seçilen ekip içinden farklı bir görevli belirleme.

**Çözüm:**

Üç kişilik ekip

$$\binom93=84$$

biçimde seçilir. Sözcü ekip üyelerinden biri olarak 3 biçimde belirlenir:

$$\binom93\cdot3=84\cdot3=252$$

**Neden doğru?** Sözcü ekip dışında seçilemeyeceği için görev seçimi kurul seçiminden sonra yapılır.

**Çeldirici notu:** Sözcüyü dokuz öğrenciden bağımsız seçmek ekipte olmayan bir kişinin sözcü olmasına izin verir.

## Soru 9

**Doğru cevap:** E

**Kazanım:** İşaretli elemanlardan tam sayıda seçme.

**Çözüm:**

Tam üç kırmızı eleman dört kırmızıdan, kalan iki eleman işaretsiz altı elemandan seçilir:

$$\binom43\binom62=4\cdot15=60$$

**Neden doğru?** Beş elemanlı alt kümede kırmızı olmayan iki eleman zorunlu olarak işaretsiz gruptan gelir.

**Çeldirici notu:** Kalan iki elemanı on elemandan seçmek dördüncü kırmızı elemanın da seçilmesine izin verir.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Üç farklı renkten birer kart seçme.

**Çözüm:**

Kırmızı, mavi ve yeşil kartlardan birer tane seçilir:

$$\binom51\binom41\binom31=5\cdot4\cdot3=60$$

**Neden doğru?** Renkler farklı olduğundan her renk grubundaki seçimler bağımsızdır.

**Çeldirici notu:** Yalnız renk sırasını saymak, aynı renkteki farklı kartları ayırt etmez.
