# Konu 21 — Kombinasyon

## Test 21 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Belirli renkteki kartlardan tam bir tane seçme.

**Çözüm:**

Bir kırmızı kart 4 kırmızı karttan, kalan üç kart kırmızı olmayan 8 karttan seçilir:

$$\binom41\binom83=4\cdot56=224$$

**Neden doğru?** Kalan üç kartın kırmızı olmayanlardan seçilmesi, seçkide tam bir kırmızı kart bulunmasını sağlar.

**Çeldirici notu:** Diğer üç kartı bütün kartlardan seçmek, birden fazla kırmızı kart içeren seçimlere izin verir.

## Soru 2

**Doğru cevap:** B

**Kazanım:** İki ayrı özel ikiliden en az birer eleman içeren alt kümeleri tümleyenle sayma.

**Çözüm:**

Sekiz elemandan dört eleman seçmenin $\binom84=70$ yolu vardır. A ile B'nin ikisinin de bulunmadığı seçimler $\binom64=15$, C ile D'nin ikisinin de bulunmadığı seçimler de 15 tanedir. İki özel ikilinin de bulunmadığı tek seçim, kalan dört elemanın tamamından oluşur ve iki kez çıkarıldığı için geri eklenir:

$$70-15-15+1=41$$

**Neden doğru?** Tümleyenle sayma, iki ayrı “en az bir” koşulunun herhangi birini bozan seçimleri birlikte ele alır.

**Çeldirici notu:** Ortak uygunsuz seçimi geri eklememek bu alt kümeyi iki kez çıkarmış olur.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Bir topluluğu adlandırılmamış ikili gruplara ayırma.

**Çözüm:**

İlk öğrenci 9 kişiden biriyle, sonra kalan ilk öğrenci 7 kişiden biriyle eşleşebilir. Bu işlem aynı grup çiftlerini yeniden adlandırmadan

$$9\cdot7\cdot5\cdot3\cdot1=945$$

gruplandırma verir.

**Neden doğru?** Her adımda henüz eşleşmemiş ilk öğrenci sabit tutulduğu için ikililerin kendi sırası ve grupların sırası yeni bir sonuç oluşturmaz.

**Çeldirici notu:** Öğrencileri sıraya dizip yalnız ikişerli ayırmak, aynı beş ikili grubu çok farklı sıralamayla yeniden sayar.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Alt kümeleri tümleyenleriyle adlandırılmamış çiftler hâlinde eşleme.

**Çözüm:**

Altı elemanlı kümenin $2^6=64$ alt kümesi vardır. Boş küme ile ana küme çıkarıldığında 62 alt küme kalır. Her alt küme, tümleyeniyle aynı çifte ait olduğundan

$$\frac{62}{2}=31$$

alt küme çifti oluşur.

**Neden doğru?** Altı elemanlı ana küme boş olmadığı için hiçbir alt küme kendi tümleyenine eşit değildir; bütün alt kümeler ikişerli çiftlere ayrılır.

**Çeldirici notu:** Boş küme ile ana kümeyi çıkarmadan ikiye bölmek, sorunun dışarıda bıraktığı çifti de sayar.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Farklı öğeleri adlandırılmış kişilere belirtilen sayılarda dağıtma.

**Çözüm:**

Birinci öğrencinin üç kitabı $\binom73=35$ biçimde seçilir. Kalan dört kitaptan ikinci öğrencinin iki kitabı $\binom42=6$ biçimde belirlenir; son iki kitap üçüncü öğrenciye kalır:

$$\binom73\binom42=35\cdot6=210$$

**Neden doğru?** Öğrenciler adlandırılmış olduğu için aynı kitap gruplarının öğrenci değiştirmesi farklı bir dağıtımdır.

**Çeldirici notu:** İki kitap alan öğrencileri ayırt etmemek, ikinci ve üçüncü öğrencinin farklı kişiler olmasını gözden kaçırır.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Tek eleman sayılı alt kümeleri çift eleman sayılı alt kümelerle eşleme.

**Çözüm:**

Kümenin belirli bir elemanı seçilsin. Bu elemanı eklemek veya çıkarmak, her alt kümenin eleman sayısının tek–çift durumunu değiştirir. Böylece tek eleman sayılı ve çift eleman sayılı alt kümeler bire bir eşleşir.

Sekiz elemanlı kümenin $2^8=256$ alt kümesinin yarısı tek eleman sayılıdır:

$$\frac{256}{2}=128$$

**Neden doğru?** Eşleme tersinirdir; aynı elemanı yeniden eklemek veya çıkarmak başlangıçtaki alt kümeye döndürür.

**Çeldirici notu:** Yalnız tek sayılı bir büyüklüğü hesaba katmak, 1, 3, 5 ve 7 elemanlı bütün alt kümeleri birlikte saymaz.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Özdeş nesneleri kutulara pozitif tek miktarlarda dağıtma.

**Çözüm:**

Kutulardaki bilye sayıları $2x+1$, $2y+1$ ve $2z+1$ olsun. Toplam 9 olduğundan

$$2x+2y+2z+3=9$$

ve dolayısıyla

$$x+y+z=3$$

elde edilir. Negatif olmayan tam sayı çözümlerinin sayısı

$$\binom{3+3-1}{3-1}=\binom52=10$$

dur.

**Neden doğru?** Her $x,y,z$ çözümü kutularda pozitif ve tek bilye sayıları oluşturur; kutular numaralı olduğu için değişkenlerin yeri önemlidir.

**Çeldirici notu:** Kutuların adlarını önemsememek, farklı kutulardaki miktarların yer değiştirdiği dağıtımları aynı kabul eder.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Zorunlu bir kişi altında başka iki kişinin birlikte bulunmadığı kurulları sayma.

**Çözüm:**

C seçilmiş kabul edilir. Kurulun kalan üç üyesi diğer 9 kişiden $\binom93=84$ biçimde seçilir. A ile B birlikte seçilirse üçüncü kişi, A, B ve C dışındaki 7 kişiden biri olur. Bu 7 kurul çıkarılır:

$$84-7=77$$

**Neden doğru?** C'nin zorunluluğu başta sağlanmış, yalnız A–B birlikteliğini bozan seçimler çıkarılmıştır.

**Çeldirici notu:** A ve B'nin ikisini de kurul dışında bırakmak, yalnız birinin bulunduğu uygun kurulları eksik sayar.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Ana kümeyi iki adlandırılmamış ve ayrık alt kümeye ayırma.

**Çözüm:**

Ana kümenin her elemanı A'ya veya B'ye yerleştirilebilir. Alt kümeler adlandırılmış olsaydı $2^8=256$ seçim olurdu. Ancak $(A,B)$ ile $(B,A)$ aynı kabul edildiği ve ana küme boş olmadığı için her bölünme iki kez sayılmıştır:

$$\frac{2^8}{2}=128$$

**Neden doğru?** Ayrıklık ve birleşimin ana küme olması, her elemanın iki alt kümeden tam birinde bulunmasını zorunlu kılar.

**Çeldirici notu:** Bir elemanın iki alt kümede birden bulunmasına izin vermek kesişimin boş olması koşulunu bozar.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Alt sınırı olan bir değişkenle negatif olmayan tam sayı çözümü sayma.

**Çözüm:**

$x'=x-2$ yazılırsa $x'\ge0$ ve

$$x'+y+z+t=7$$

olur. Dört negatif olmayan tam sayı değişkeninin toplamının 7 olduğu çözüm sayısı

$$\binom{7+4-1}{4-1}=\binom{10}{3}=120$$

dir.

**Neden doğru?** İki birimlik zorunlu pay ayrıldıktan sonra kalan yedi birim dört değişkene serbestçe dağıtılır.

**Çeldirici notu:** $x\ge2$ koşulunu kullanmadan doğrudan dağıtım yapmak farklı bir toplamı sayar.
