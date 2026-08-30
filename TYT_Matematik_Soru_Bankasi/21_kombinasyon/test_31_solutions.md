# Konu 21 — Kombinasyon

## Test 31 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Paritesi belirli dört elemanlı seçim yapma.

**Çözüm:**

1'den 10'a kadar 5 tek ve 5 çift sayı vardır. Tam bir tek sayı ve üç çift sayı seçilir:

$$\binom51\binom53=5\cdot10=50$$

**Neden doğru?** Dört sayının yalnız biri tek olduğunda kalan üçü zorunlu olarak çifttir.

**Çeldirici notu:** Bir tek ve üç sayıyı bütün listeden seçmek, ikinci bir tek sayının seçilmesine izin verir.

## Soru 2

**Doğru cevap:** B

**Kazanım:** İki özel kişiden tam birini içeren kurul seçme.

**Çözüm:**

A veya B'den seçilecek kişi 2 biçimde belirlenir. Kalan üç kişi diğer 7 öğrenciden seçilir:

$$2\binom73=2\cdot35=70$$

**Neden doğru?** Özel ikiliden yalnız bir kişi seçildiği için diğer seçimler bu ikilinin dışındaki öğrencilerden yapılır.

**Çeldirici notu:** A ve B'yi birlikte seçmek tam olarak bir koşulunu bozar.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Eş büyüklükte iki alt kümenin kesişimini sabit tutma.

**Çözüm:**

Ortak iki eleman $\binom82$ biçimde seçilir. A'nın yalnız elemanı kalan 6 elemandan, B'nin yalnız elemanı son 5 elemandan seçilir:

$$\binom82\binom61\binom51=28\cdot6\cdot5=840$$

**Neden doğru?** Ortak elemanlar ve iki alt kümeye özel elemanlar ayrı ayrı belirlenir.

**Çeldirici notu:** İki alt kümeyi bağımsız seçmek kesişimin iki eleman olmasını garanti etmez.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Her çiftten bir kişi seçme.

**Çözüm:**

Beş kişilik grup oluşturulurken beş çiftin her birinden tam bir kişi alınmalıdır. Her çift için 2 seçenek vardır:

$$2^5=32$$

**Neden doğru?** Beş kişinin beş farklı çifti temsil etmesi, “en fazla bir” koşulunu ve grup büyüklüğünü birlikte sağlar.

**Çeldirici notu:** On kişiden doğrudan beş kişi seçmek aynı çiftten iki kişinin bulunmasına izin verir.

## Soru 5

**Doğru cevap:** E

**Kazanım:** İki türden tam sayıda kitap seçme.

**Çözüm:**

Tam üç roman dört romandan, kalan üç öykü sekiz öykü kitabından seçilir:

$$\binom43\binom83=4\cdot56=224$$

**Neden doğru?** Altı kitaplık seçkide roman sayısı üç olduğunda öykü sayısı zorunlu olarak üçtür.

**Çeldirici notu:** Dört romandan dört seçmek seçkide roman sayısını tam üç olmaktan çıkarır.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Tek bir değişkenin paritesine göre üç değişkenli çözüm sayma.

**Çözüm:**

$x=1,3,5,7,9$ olabilir. Sabit $x$ için $y+z=10-x$ eşitliğinin çözüm sayısı $11-x$ tir:

$$9+7+5+3+1=25$$

**Neden doğru?** $y$ sıfırdan $10-x$ değerine kadar seçildiğinde $z$ tek olarak belirlenir.

**Çeldirici notu:** $x=0$ değerini dahil etmek x'in tek olma koşulunu bozar.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Kalan sınıflarına göre toplamı 3'ün katı olan dörtlüleri sayma.

**Çözüm:**

1'den 12'ye kadar her kalan sınıfında 4 sayı vardır. Dört sayının toplamı 3'ün katı olması için kalan dağılımları $(4,0,0)$ veya $(2,1,1)$ olabilir:

$$3\binom44+3\binom42\binom41\binom41=3+3\cdot6\cdot4\cdot4=291$$

**Neden doğru?** Kalanların toplamı 0 mod 3 olduğunda yalnız bu iki dağılım mümkündür.

**Çeldirici notu:** Her sınıftan birer sayı seçmek yalnız üç sayılık bir seçimdir.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Çembersel dizilimde yan yana olmayan noktaları seçme.

**Çözüm:**

Sekiz noktadan dört seçilip hiçbiri yan yana olmayacaksa çemberde seçilen ve seçilmeyen noktalar sırayla dönüşümlü olmak zorundadır. Başlangıç noktası seçildiğinde iki farklı dönüşümlü seçim elde edilir:

$$2$$

Sonuç C seçeneğinde verilmiştir.

**Neden doğru?** Dört seçimin arasına dört seçilmeyen nokta yerleştirilmesi, her aralıkta tam bir nokta bulunmasını zorunlu kılar.

**Çeldirici notu:** Doğrusal sıra formülünü doğrudan kullanmak çemberin ilk ve son noktalarının komşuluğunu gözden kaçırır.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Bir farklı ve iki eş büyüklükte gruba ayırma.

**Çözüm:**

Dört kişilik grup $\binom{10}{4}=210$ biçimde seçilir. Kalan altı öğrenci iki adlandırılmamış üçlü gruba ayrılır:

$$\frac{\binom63}{2}=\frac{20}{2}=10$$

Toplam

$$210\cdot10=2100$$

gruplandırma vardır.

**Neden doğru?** Dört kişilik grup büyüklüğü nedeniyle ayırt edilir; iki üçlü grubun yer değiştirmesi aynı gruplandırmadır.

**Çeldirici notu:** Üçlü grupları adlandırmak aynı gruplandırmayı iki kez sayar.

## Soru 10

**Doğru cevap:** E

**Kazanım:** İki ayrı gruptan belirli sayıda öğrenci seçme.

**Çözüm:**

Kız öğrenciler arasından üç, erkek öğrenciler arasından iki kişi seçilir:

$$\binom{10}{3}\binom72=120\cdot21=2520$$

**Neden doğru?** Kız ve erkek seçimleri birbirinden bağımsızdır; çarpma kuralı uygulanır.

**Çeldirici notu:** Toplama yapmak, iki grubun birlikte seçilmesi koşulunu karşılamaz.
