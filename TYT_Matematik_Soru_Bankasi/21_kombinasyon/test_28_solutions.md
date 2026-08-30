# Konu 21 — Kombinasyon

## Test 28 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Belirli bir özelliği taşıyan tam bir eleman içeren üçlü seçim.

**Çözüm:**

1'den 10'a kadar 3'ün katları 3, 6 ve 9 olmak üzere 3 tanedir. Diğer 7 sayıdan iki ve bu üçlüden bir sayı seçilir:

$$\binom31\binom72=3\cdot21=63$$

**Neden doğru?** Tam bir 3'ün katı seçildiği için kalan iki sayı 3'ün katı olmayanlardan alınır.

**Çeldirici notu:** Kalan iki sayıyı bütün sayılardan seçmek birden fazla 3'ün katı içeren seçimleri de kapsar.

## Soru 2

**Doğru cevap:** D

**Kazanım:** İki özel ikilide farklı sayıda eleman seçme koşullarını birleştirme.

**Çözüm:**

A ile B'den tam biri seçilir: 2 seçenek. C ile D'den en az biri seçilir. İlk iki özel seçimden sonra kalan 4 öğrenci arasından seçim yapılır.

C ile D'den tam biri seçilirse 2 seçim yapılır ve kalan bir öğrenci diğer 4 kişiden seçilir; ikisi de seçilirse kalan öğrenci diğer 4 kişiden seçilir:

$$2\left(2\binom42+\binom41\right)=2(12+4)=32$$

Burada kurul dört kişi olduğundan C–D'den tam biri durumunda iki, ikisi birlikte durumunda bir kişi seçilmelidir; toplam

$$2\left(2\binom42+\binom41\right)=32$$

olur.

**Neden doğru?** A–B koşulu tam bir, C–D koşulu en az bir kişi seçilmesini zorunlu kılar.

**Çeldirici notu:** C ve D'den yalnız tam birini seçmek, ikisinin birlikte bulunduğu uygun kurulları dışarıda bırakır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Ortak elemanı olmayan, adlandırılmış iki ikili alt kümeyi seçme.

**Çözüm:**

A alt kümesi 8 elemandan iki, B alt kümesi kalan 6 elemandan iki eleman seçilerek belirlenir:

$$\binom82\binom62=28\cdot15=420$$

**Neden doğru?** A ve B'nin adları farklı olduğundan önce A'nın seçilmesi ve sonra B'nin seçilmesi ayrı bir sonuç üretir.

**Çeldirici notu:** Alt kümeleri adlandırılmamış kabul ederek ikiye bölmek sorudaki $(A,B)$ sırasını yok sayar.

## Soru 4

**Doğru cevap:** A

**Kazanım:** En az bir eş çifti içeren grupları tümleyenle sayma.

**Çözüm:**

On kişiden dört kişilik bütün grupların sayısı $\binom{10}{4}=210$ dur. Hiçbir eş çiftinin birlikte bulunmadığı gruplarda dört farklı çift seçilir ve her çiftten bir kişi alınır:

$$\binom54\cdot2^4=5\cdot16=80$$

Uygun grupların sayısı

$$210-80=130$$

dur.

**Neden doğru?** Dört kişilik grupta hiç tam eş çifti yoksa dört farklı çiftten birer kişi alınmıştır.

**Çeldirici notu:** Eş çiftlerini doğrudan seçmek, üçüncü ve dördüncü kişilerin hangi çiftlerden geldiğini eksik bırakır.

## Soru 5

**Doğru cevap:** B

**Kazanım:** En az iki roman içeren seçkiyi durumlara ayırma.

**Çözüm:**

Tam iki roman seçilirse kalan iki kitap 7 öykü kitabından; tam üç roman seçilirse kalan bir kitap 7 öykü kitabından; dört roman seçilirse başka kitap seçilmez:

$$\binom52\binom72+\binom53\binom71+\binom54$$

$$=10\cdot21+10\cdot7+5=285$$

elde edilir.

**Neden doğru?** En az iki roman koşulunun iki, üç ve dört roman durumları ayrı ayrı sayılmıştır.

**Çeldirici notu:** Yalnız iki romanlı seçkileri saymak, üç ve dört romanlı uygun seçkileri dışarıda bırakır.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Bir değişkenin paritesine göre dört değişkenli tam sayı çözümü sayma.

**Çözüm:**

$x=0,2,4,6,8$ olabilir. Sabit $x$ için kalan üç değişkenin toplamı $8-x$ olur ve çözüm sayısı $\binom{10-x}{2}$ dir:

$$\binom{10}{2}+\binom82+\binom62+\binom42+\binom22=45+28+15+6+1=95$$

**Neden doğru?** Her sabit $x$ değerinde yıldız-çubuk yöntemi kalan toplamın üç değişkene dağılımını sayar.

**Çeldirici notu:** $x$ için yalnız 0 ve 8 değerlerini almak aradaki çift değerleri gözden kaçırır.

## Soru 7

**Doğru cevap:** D

**Kazanım:** İki eş büyüklükte sayı grubundan belirtilen sayıda seçim yapma.

**Çözüm:**

1'den 12'ye kadar 6 çift ve 6 tek sayı vardır. Tam iki çift ve üç tek seçilir:

$$\binom62\binom63=15\cdot20=300$$

**Neden doğru?** Beşli seçimin kalan üç elemanı teklerden geldiği için çift sayısı tam iki olur.

**Çeldirici notu:** Çift sayılardan üç tane seçmek tam iki koşulunu bozar.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Bir topluluğu bir farklı ve iki eş büyüklükte gruba ayırma.

**Çözüm:**

Üç kişilik grup 7 öğrenciden

$$\binom73=35$$

biçimde seçilir. Kalan dört öğrenci iki adlandırılmamış ikiliye ayrılır; bu ayrımın 3 yolu vardır:

$$35\cdot3=105$$

**Neden doğru?** Üçlü grup büyüklüğü nedeniyle ayırt edilir; iki ikilinin yer değiştirmesi yeni bir gruplandırma değildir.

**Çeldirici notu:** İki ikiliye ad vermek aynı gruplandırmayı iki kez sayar.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Ortak elemanı olmayan, eş büyüklükte ve adlandırılmış alt kümeleri seçme.

**Çözüm:**

A alt kümesi 10 elemandan üç, B alt kümesi kalan 7 elemandan üç eleman seçilir:

$$\binom{10}{3}\binom73=120\cdot35=4200$$

**Neden doğru?** A ve B adlandırılmış olduğundan aynı üçlülerin yer değiştirmesi farklı bir ikili oluşturur.

**Çeldirici notu:** B'yi de 10 elemandan seçmek A ile B'nin ortak eleman içermesine izin verir.

## Soru 10

**Doğru cevap:** B

**Kazanım:** İki renkten en az birer kart içeren seçimi tümleyenle sayma.

**Çözüm:**

On karttan dört kart seçmenin $\binom{10}{4}=210$ yolu vardır. Dört kartın da kırmızı veya dört kartın da mavi olduğu seçimler $\binom54=5$ er tanedir:

$$210-5-5=200$$

Bu nedenle doğru sonuç 200'dür.

**Neden doğru?** Her iki renkten en az bir kart bulunması, tek renkli iki ayrık durumu çıkarmayı gerektirir.

**Çeldirici notu:** Yalnız iki kırmızı ve iki mavi seçmek, 1–3 ve 3–1 dağılımlarını dışarıda bırakır.
