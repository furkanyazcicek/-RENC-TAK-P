# Konu 21 — Kombinasyon

## Test 17 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Aynı doğru üzerinde bulunmayan üç noktayı seçme.

**Çözüm:**

Dokuz noktadan üçü önce koşul gözetilmeden

$$\binom93=84$$

biçimde seçilir. Karenin iki köşegeni, iki yatay doğrusu, iki düşey doğrusu ve karşılıklı kenar orta noktalarından geçen iki doğru üzerinde üçer işaretli nokta vardır. Bu nedenle aynı doğru üzerindeki 8 üçlü çıkarılır:

$$84-8=76$$

**Neden doğru?** Üç noktanın üçgen oluşturmamasının tek nedeni, aynı doğru üzerinde bulunmalarıdır.

**Çeldirici notu:** Yalnız karenin yatay ve düşey doğrularını saymak, köşegenleri ve karşılıklı kenar orta noktalarından geçen doğruları gözden kaçırır.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Belirli bir elemanı içeren farklı büyüklükteki alt kümeleri sayma.

**Çözüm:**

Belirli eleman seçilmiş kabul edilir. İki elemanlı alt küme için kalan 7 elemandan biri, altı elemanlı alt küme için kalan 7 elemandan beşi seçilir.

$$\binom71+\binom75=7+21=28$$

**Neden doğru?** İki ve altı elemanlı alt kümeler ayrık iki durumdur; her ikisinde de belirtilen eleman zorunludur.

**Çeldirici notu:** Altı elemanlı alt kümede altı yeni eleman seçmek, önceden seçilmiş elemanı ikinci kez hesaba katar.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Doğrusal üçlüleri bütün üçlülerden çıkararak üçgen sayma.

**Çözüm:**

On noktadan seçilebilecek bütün üçlülerin sayısı $\binom{10}{3}$ tür. Aynı doğru üzerindeki üçlüler üçgen oluşturmaz. Bunlar altışarlı ve dörderli nokta gruplarından gelir:

$$\binom{10}{3}-\binom63-\binom43=120-20-4=96$$

**Neden doğru?** Sorudaki bilgiye göre bu iki doğru dışında doğrusal üçlü yoktur.

**Çeldirici notu:** İki doğrudan seçilen nokta sayılarını eşit tutmak, bir doğru üzerinden iki, diğerinden bir nokta seçilen üçgenleri eksik sayar.

## Soru 4

**Doğru cevap:** E

**Kazanım:** İki kişinin birlikte bulunmadığı grupları tümleyen durumla sayma.

**Çözüm:**

Bütün beş kişilik grupların sayısı

$$\binom95=126$$

dır. A ile B birlikte seçilirse kalan üç kişi diğer 7 öğrenciden seçilir:

$$\binom73=35$$

İkisinin birlikte bulunduğu gruplar çıkarılır:

$$126-35=91$$

**Neden doğru?** “İkisinin birden bulunmaması”, en az birinin dışarıda olması anlamına gelir; yalnız ikisinin de dışarıda olduğu durumla sınırlı değildir.

**Çeldirici notu:** A ve B'yi birlikte dışarıda bırakıp $\binom75$ hesaplamak, yalnız birinin grupta bulunduğu uygun seçimleri dışlar.

## Soru 5

**Doğru cevap:** A

**Kazanım:** İki renk grubundan belirtilen sayılarda seçim yapma.

**Çözüm:**

Üç kırmızı bilye 6 kırmızıdan, bir mavi bilye 4 maviden seçilir:

$$\binom63\binom41=20\cdot4=80$$

**Neden doğru?** Bilyeler birbirinden farklı olduğu için her renk içindeki seçimler kombinasyonla ayrı ayrı sayılır.

**Çeldirici notu:** Yalnız renk dağılımını saymak, aynı renkteki farklı bilye seçimlerini hesaba katmaz.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Toplamın tek–çift durumuna göre sayı seçme.

**Çözüm:**

Listede 5 tek ve 5 çift sayı vardır. Üç sayının toplamı; üçü de çift olduğunda veya ikisi tek, biri çift olduğunda çifttir.

$$\binom53+\binom52\binom51=10+50=60$$

**Neden doğru?** Tek sayıların adedi 0 ya da 2 olduğunda toplam çifttir ve bu iki durum birbirinden ayrıdır.

**Çeldirici notu:** Üç tek sayının toplamı tek olduğundan bu seçimler sayıma katılmaz.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Ortak uçlu doğru parçalarını seçme.

**Çözüm:**

Ortak uç noktası 8 biçimde seçilir. Bu noktaya bağlanacak üç farklı uç, kalan 7 noktadan seçilir:

$$8\binom73=8\cdot35=280$$

**Neden doğru?** Üç doğru parçasının ortak ucu tektir; diğer uçların sırası çizimi değiştirmez.

**Çeldirici notu:** Diğer üç ucu sıralamak aynı üç doğru parçasını birden fazla kez sayar.

## Soru 8

**Doğru cevap:** D

**Kazanım:** İşaretli ve işaretsiz elemanlardan koşullu alt küme seçme.

**Çözüm:**

Dört kırmızı işaretli elemandan ikisi, işaretsiz altı elemandan üçü seçilir:

$$\binom42\binom63=6\cdot20=120$$

**Neden doğru?** Beş elemanlı alt kümenin tam ikisi işaretli olduğunda kalan üç eleman işaretsiz olmalıdır.

**Çeldirici notu:** İşaretsiz elemanlardan da iki tane seçmek alt kümeyi dört elemanlı bırakır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Eş büyüklükte ve adlandırılmamış iki gruba ayırma.

**Çözüm:**

Önce bir grup için 10 öğrenciden 5'i seçilirse diğer grup kendiliğinden belirlenir:

$$\binom{10}{5}=252$$

Ancak grupların adları olmadığı için bir grubun seçilmesiyle onun tümleyeninin seçilmesi aynı ayrımı verir. Bu nedenle

$$\frac{252}{2}=126$$

**Neden doğru?** Her gruplandırma, ilk grup olarak iki farklı grubun seçilebilmesi nedeniyle iki kez sayılmıştır.

**Çeldirici notu:** Grupları birinci ve ikinci diye ayırmak, her gruplandırmayı iki farklı sonuç gibi gösterir.

## Soru 10

**Doğru cevap:** A

**Kazanım:** En küçük ve en büyük elemanı sabit olan seçimleri sayma.

**Çözüm:**

En küçük sayının 2, en büyük sayının 8 olması için 2 ve 8 zorunlu olarak seçilir; 1 ile 9 seçilemez. Kalan üç sayı $3,4,5,6,7$ arasından seçilir:

$$\binom53=10$$

**Neden doğru?** Aradaki üç sayının her seçimi, en küçük ve en büyük değerleri değiştirmeden farklı bir beşli oluşturur.

**Çeldirici notu:** 1 veya 9'u seçime katmak verilen en küçük ya da en büyük değer koşulunu bozar.
