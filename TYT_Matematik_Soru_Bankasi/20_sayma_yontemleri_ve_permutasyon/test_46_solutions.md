# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 46 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** İki komşuluk koşulunun aynı doğruluk değerine sahip olduğu dizilişleri sayma.

**Çözüm:**

A ile B'nin yan yana olduğu diziliş sayısı $2\cdot7!=10\,080$, C ile D'nin yan yana olduğu diziliş sayısı da aynıdır. Her iki çiftin de yan yana olduğu diziliş sayısı

$$2\cdot2\cdot6!=2880$$

dir. İki çiftin de yan yana olmadığı diziliş sayısı içerme-dışlama ile

$$8!-2\cdot10\,080+2880=23\,040$$

olur. Koşulların ikisi birden doğru ya da ikisi birden yanlış olacağı için

$$2880+23\,040=25\,920$$

diziliş vardır.

**Neden doğru?** İstenen durum, iki komşuluk olayının kesişimi ile iki olayın da gerçekleşmediği bölgenin ayrık birleşimidir.

**Çeldirici notu:** Yalnız iki çiftin yan yana olduğu düzenleri saymak, iki çiftin de ayrı olduğu uygun dizilişleri eksik bırakır.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Karşılıklı yüz çiftlerinde renk kısıtı ve bütün renkleri kullanma koşulunu uygulama.

**Çözüm:**

Küpün üç karşılıklı yüz çifti vardır. Her çiftin ilk yüzü için 3, karşı yüzü için 2 renk seçeneği olduğundan karşı yüzleri farklı bütün boyamaların sayısı

$$6^3=216$$

dır. Üç rengin tümünün kullanılmadığı bir boyamada tam iki renk kullanılır; çünkü karşı yüzler farklı olduğundan tek renk kullanılamaz. Kullanılacak iki renk $\binom32$, her karşı yüz çiftindeki sıraları ise $2^3$ biçimde seçilir:

$$\binom32 2^3=3\cdot8=24$$

İstenen sayı $216-24=192$'dir.

**Neden doğru?** Her yüzün konumu sabit kabul edildiğinden üç karşılıklı çift bağımsız ve sıralı renk çiftleri olarak sayılmıştır.

**Çeldirici notu:** Küp döndürmelerine göre bölme yapılmaz; soru döndürülerek çakışan boyamaları da farklı kabul etmektedir.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Farklı adım türlerinin kullanım sayılarını belirleyerek yol sayma.

**Çözüm:**

İki köşegen adım toplamda iki birim sağa ve iki birim yukarı ilerleme sağlar. Hedefe ulaşmak için bunlara ek olarak üç sağ ve bir yukarı adım gerekir.

Toplam altı adımın ikisi köşegen, üçü sağ ve biri yukarıdır. Farklı adım dizilerinin sayısı

$$\frac{6!}{2!\,3!\,1!}=60$$

olur.

**Neden doğru?** Her adım türünün sayısı hedef koordinat ve iki köşegen adım koşuluyla tek biçimde belirlenmiştir.

**Çeldirici notu:** Köşegen adım hem yatay hem düşey ilerleme sağladığından yalnız sağ veya yalnız yukarı adım gibi sayılmamalıdır.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Kurul seçiminde bir grubun sayıca çoğunlukta olması koşulunu durumlara ayırma.

**Çözüm:**

Beş kişilik kurulda kadınların çoğunlukta olması için kadın sayısı 3, 4 veya 5 olabilir.

$$\binom73\binom62+\binom74\binom61+\binom75$$

$$=35\cdot15+35\cdot6+21=525+210+21=756$$

**Neden doğru?** Beş kişilik bir grupta kadınların çoğunluğu sağlayabileceği üç olası sayı ayrık olarak sayılmıştır.

**Çeldirici notu:** Yalnız üç kadınlı kurulları saymak dört ve beş kadınlı kurulları eksik bırakır.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Sırasız eşleşmelerde eşleşme içi yönü koruyarak sayma.

**Çözüm:**

Sekiz takım bir sıraya dizilip ardışık ikililer karşılaştırılabilir. Her ikilide ilk takım ev sahibi, ikinci takım deplasman takımı kabul edilir. Karşılaşmaların kendi aralarındaki sırası önemli olmadığından dört karşılaşmanın $4!$ farklı sırası aynı eşleşmeyi verir.

$$\frac{8!}{4!}=\frac{40\,320}{24}=1680$$

**Neden doğru?** Eşleşme içindeki sıra ev–deplasman ayrımını gösterdiği için yalnız karşılaşmaların kendi aralarındaki sıraları bölünmüştür.

**Çeldirici notu:** Ayrıca $2^4$ ile bölmek, ev sahibi ile deplasman takımının yer değiştirdiği farklı eşleşmeleri aynı kabul eder.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Birbirinden bağımsız göreli sıra koşullarını simetriyle sayma.

**Çözüm:**

Sekiz sayının tüm diziliş sayısı $8!$'dir. Her bir sayı çifti için küçük olanın önce gelmesi olası dizilişlerin yarısını bırakır. Üç çift birbirinden bağımsız olduğundan

$$\frac{8!}{2^3}=\frac{40\,320}{8}=5040$$

uygun diziliş vardır.

**Neden doğru?** Her dizilişte bir çiftin elemanlarını yer değiştirmek yalnız o çiftin önce-sonra durumunu değiştirir; bu nedenle üç yarıya indirme bağımsızdır.

**Çeldirici notu:** 1, 3 ve 5 sayılarının kendi aralarındaki sırası belirli değildir; yalnız eşleriyle olan sıraları verilmiştir.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Pozitif tam sayı çözümlerinde tam sayıda tek bileşen koşulunu dönüştürme.

**Çözüm:**

Tek olacak iki değişken $\binom52=10$ biçimde seçilir. Seçilen değişkenler $2a+1$, diğer üç değişken pozitif çift oldukları için $2b+2$ biçiminde yazılır. En küçük değerlerin toplamı

$$2\cdot1+3\cdot2=8$$

dir. Kalan 4, iki katlı artışlarla dağıtılır; dolayısıyla beş negatif olmayan değişkenin toplamı 2 olur. Bu dağılımın sayısı

$$\binom{2+5-1}{5-1}=\binom64=15$$

tir. Toplam $10\cdot15=150$ sıralı beşli vardır.

**Neden doğru?** Tek ve çift değişkenlerin en küçük pozitif değerleri çıkarıldıktan sonra her artış iki birim olduğundan pariteler korunur.

**Çeldirici notu:** Çift değişkenlere başlangıçta 0 vermek pozitif tam sayı koşulunu bozar.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Özdeş harfleri belirli türdeki konumlara tam sayıda yerleştirme.

**Çözüm:**

Üç çift numaralı konumdan ikisi $\binom32$, üç tek numaralı konumdan biri $\binom31$ biçimde A harfleri için seçilir. Kalan K, R ve C harfleri boş üç konuma $3!$ biçimde yerleşir.

$$\binom32\binom31 3!=3\cdot3\cdot6=54$$

**Neden doğru?** A harfleri özdeş olduğu için seçilen üç konum içinde ayrıca sıralanmaz; diğer harfler farklı olduğu için sıralanır.

**Çeldirici notu:** Üçüncü A'nın tek numaralı konumu da üç farklı biçimde seçilmelidir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Çarpımın bölünebilme koşulunu asal çarpan içeriğinin tümleyeniyle sayma.

**Çözüm:**

Dört elemanlı tüm seçimlerin sayısı $\binom{10}{4}=210$'dur. Çarpımın 4 ile bölünmemesi için $4$ veya $8$ seçilmemeli ve $2,6,10$ sayılarından en fazla biri seçilmelidir.

- Bu üç çift sayıdan hiçbiri seçilmezse beş tek sayıdan dördü seçilir: $\binom54=5$.
- Bu üç çift sayıdan biri ve beş tek sayıdan üçü seçilir: $\binom31\binom53=3\cdot10=30$.

Geçersiz 35 seçim vardır. İstenen sayı

$$210-35=175$$

olur.

**Neden doğru?** $4$ ve $8$ tek başına iki adet 2 çarpanı sağlarken, $2,6,10$ sayılarından iki tanesi birlikte aynı koşulu sağlar.

**Çeldirici notu:** Yalnız 4'ün katı bir sayı içeren seçimleri saymak, iki farklı tek-2-çarpanlı çift sayının birlikte seçildiği durumları kaçırır.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Son iki basamak üzerinden bölünebilme koşuluyla sayı oluşturma.

**Çözüm:**

Verilen rakamlarla yazılabilen, rakamları farklı ve 4'ün katı olan iki basamaklı son parçalar

$$12,16,24,32,36,52,56,64$$

olmak üzere 8 tanedir. Son iki basamak belirlendiğinde kalan dört rakam ilk dört basamağa $4!$ biçimde yerleşir.

$$8\cdot4!=8\cdot24=192$$

**Neden doğru?** Bir doğal sayının 4 ile bölünebilmesi yalnız son iki basamağına bağlıdır ve kullanılan rakamların hiçbiri sıfır değildir.

**Çeldirici notu:** Son iki basamağı sırasız bir çift olarak seçmek, örneğin 12 ile 21'in farklı bölünebilme durumlarını ayırt etmez.
