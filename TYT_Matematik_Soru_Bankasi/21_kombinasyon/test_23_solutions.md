# Konu 21 — Kombinasyon

## Test 23 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Aynı satırdaki bütün binom katsayılarının toplamını kullanma.

**Çözüm:**

Binom açılımına göre

$$\sum_{k=0}^{8}\binom8k=(1+1)^8=2^8=256$$

olur.

**Neden doğru?** $(a+b)^8$ açılımında $a=b=1$ alındığında bütün terimler yalnız kombinasyon katsayılarına dönüşür.

**Çeldirici notu:** Yalnız ortadaki katsayıyı almak toplamın diğer sekiz terimini dışarıda bırakır.

## Soru 2

**Doğru cevap:** D

**Kazanım:** İki rengin de bulunduğu seçimi tümleyenle sayma.

**Çözüm:**

On karttan dördünü seçmenin $\binom{10}{4}=210$ yolu vardır. Dört kartın da kırmızı olduğu $\binom64=15$ seçim ve dört kartın da mavi olduğu $\binom44=1$ seçim çıkarılır:

$$210-15-1=194$$

**Neden doğru?** Kartların tamamının aynı renkte olmaması, seçkide iki rengin de bulunması anlamına gelir.

**Çeldirici notu:** Yalnız iki kırmızı ve iki mavi kart seçmek, 1–3 ve 3–1 renk dağılımlarını dışarıda bırakır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Ortak ucu olmayan iki doğru parçasını dört uç noktası üzerinden sayma.

**Çözüm:**

Önce doğru parçalarının dört farklı uç noktası 8 noktadan seçilir:

$$\binom84=70$$

Seçilen dört noktayı ikişerli iki adlandırılmamış çifte ayırmanın 3 yolu vardır:

$$70\cdot3=210$$

**Neden doğru?** Her eşleştirme ortak ucu bulunmayan iki doğru parçasını, her doğru parçası çifti de dört farklı uç noktasını belirler.

**Çeldirici notu:** Dört nokta için yalnız bir eşleştirme saymak olası diğer iki doğru parçası çiftini eksik bırakır.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Ortanca değeri sabit olan üçlü seçim yapma.

**Çözüm:**

Ortanca sayının 5 olması için bir sayı $1,2,3,4$ arasından, diğer sayı $6,7,8,9$ arasından seçilmelidir. Her iki tarafta da 4 seçenek vardır:

$$4\cdot4=16$$

**Neden doğru?** 5 zorunlu seçildiğinde küçük ve büyük sayı birbirinden bağımsız olarak iki ayrı aralıktan belirlenir.

**Çeldirici notu:** Diğer iki sayıyı sekiz sayıdan koşulsuz seçmek, ikisinin de 5'in aynı tarafında olduğu seçimlere izin verir.

## Soru 5

**Doğru cevap:** B

**Kazanım:** En az koşulunu tam dört ve tam beş durumlarına ayırma.

**Çözüm:**

Tam dört roman seçilirse roman olmayan 5 kitaptan biri; beş roman seçilirse başka kitap seçilmez:

$$\binom64\binom51+\binom65=15\cdot5+6=81$$

**Neden doğru?** Beş kitaplık seçkide en az dört roman bulunmasının yalnız dört ve beş roman durumları vardır.

**Çeldirici notu:** Yalnız dört romanlı seçkileri saymak beş romanın da seçildiği uygun seçkileri dışarıda bırakır.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Birden çok alt sınırı kaldırarak tam sayı çözümü sayma.

**Çözüm:**

$$x'=x-2,\qquad y'=y-2,\qquad z'=z-2$$

yazılırsa $x',y',z'\ge0$ ve

$$x'+y'+z'=6$$

olur. Çözüm sayısı

$$\binom{6+3-1}{3-1}=\binom82=28$$

dir.

**Neden doğru?** Her değişkenden zorunlu ikişer birim ayrıldıktan sonra kalan altı birim üç değişkene serbestçe dağıtılır.

**Çeldirici notu:** Değişkenleri yalnız pozitif kabul etmek, verilen iki birimlik alt sınırı tam olarak uygulamaz.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Farklı satır ve sütunlardan iki hücre seçme.

**Çözüm:**

Önce iki farklı satır ve iki farklı sütun seçilir. Bu satır ve sütunların kesişimindeki dört hücreden, aynı satır ve sütunda olmayan iki hücreyi köşegen biçiminde eşleştirmenin 2 yolu vardır:

$$\binom32\binom42\cdot2=3\cdot6\cdot2=36$$

**Neden doğru?** Her uygun hücre çifti iki satır ve iki sütun belirler; seçilen dikdörtgenin iki köşegeninden biri olur.

**Çeldirici notu:** Dört kesişim hücresinden rastgele ikisini seçmek aynı satır veya sütunda bulunan çiftleri de kapsar.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Sabit bir kenarı içeren dörtgenleri sayma.

**Çözüm:**

Kırmızı doğru parçasının iki uç noktası zorunlu olarak seçilir. Bu noktalar çember üzerindeki işaretli noktalar arasında ardışık olduğundan, seçilecek diğer köşeler ne olursa olsun doğru parçası dörtgenin bir kenarı olur. Diğer iki köşe kalan 7 noktadan belirlenir:

$$\binom72=21$$

**Neden doğru?** Çember üzerindeki her iki ek nokta, kırmızı doğru parçasını kenar kabul eden tek bir dörtgen oluşturur.

**Çeldirici notu:** Kırmızı doğru parçasının uçlarından yalnız birini seçmek bu parçanın dörtgenin kenarı olmasını engeller.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Sayıları kalan sınıflarına ayırarak üçlü seçim yapma.

**Çözüm:**

Sayılar 4 ile bölündüklerinde verdikleri kalana göre dört sınıfa ayrılır ve her sınıfta 4 sayı bulunur. Üç sayı aynı sınıftan seçilir:

$$4\binom43=4\cdot4=16$$

**Neden doğru?** Aynı kalan sınıfından seçilen her üçlüde bütün sayılar 4 ile bölündüğünde aynı kalanı verir.

**Çeldirici notu:** Dört kalan sınıfından birer sayı seçmek sayıların aynı kalanı vermesini sağlamaz.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Çembersel dizilimde yan yana olmayan noktaları seçme.

**Çözüm:**

Belirli bir noktanın seçilip seçilmemesine göre iki durum ele alınsın.

Bu nokta seçilmezse kalan 9 nokta bir sıra oluşturur ve yan yana olmayan dört nokta

$$\binom{9-4+1}{4}=\binom64=15$$

biçimde seçilir. Belirli nokta seçilirse iki komşusu seçilemez; arada kalan 7 noktalık sıradan yan yana olmayan üç nokta

$$\binom{7-3+1}{3}=\binom53=10$$

biçimde seçilir. Toplam

$$15+10=25$$

seçim vardır.

**Neden doğru?** İki durum ayrık olup çemberdeki her uygun seçimi, belirlenen noktanın seçilme durumuna göre tam bir kez kapsar.

**Çeldirici notu:** Noktaları yalnız doğrusal bir sıra gibi ele almak ilk ve son noktanın da komşu olduğunu gözden kaçırır.
