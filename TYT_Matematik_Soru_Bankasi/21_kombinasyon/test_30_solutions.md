# Konu 21 — Kombinasyon

## Test 30 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Farkı tek olan sayıları paritelerine göre seçme.

**Çözüm:**

Farkın tek olması için bir sayı tek, diğeri çift olmalıdır. 1 ile 12 arasında 6 tek ve 6 çift sayı vardır:

$$\binom61\binom61=36$$

**Neden doğru?** Tek ve çift sayıların her ikilisi farklı ve uygun bir seçim oluşturur.

**Çeldirici notu:** İki tek veya iki çift sayının farkı çift olur.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Birlikte seçilmesi zorunlu iki kişiyi blok kabul etme.

**Çözüm:**

A ve B birlikte seçilmiş kabul edilir. Kurulun kalan iki üyesi diğer 6 öğrenciden seçilir:

$$\binom62=15$$

**Neden doğru?** A ve B'nin birlikte bulunması tek bir zorunlu ikili oluşturur.

**Çeldirici notu:** A ve B'yi bağımsız seçmek, ikisinden yalnız birinin bulunduğu kurulları da sayar.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Kesişimi sabit iki adlandırılmış alt kümeyi sayma.

**Çözüm:**

Ortak eleman 7 biçimde seçilir. A'nın yalnız elemanı kalan 6 elemandan; B'nin yalnız üç elemanı ise son 5 elemandan seçilir:

$$\binom71\binom61\binom53=7\cdot6\cdot10=420$$

**Neden doğru?** A ve B'ye özel elemanlar ayrık tutulduğu için kesişim tam bir eleman olur.

**Çeldirici notu:** B'nin üç özel elemanını tüm kalan altı elemandan seçmek, A'nın özel elemanının B'ye girmesine izin verir.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Tam olarak iki eş çifti içeren grup seçme.

**Çözüm:**

Birlikte bulunacak iki eş çifti beş çiftten seçilir:

$$\binom52=10$$

Bu dört kişi grubun tamamını oluşturur.

**Neden doğru?** Dört kişilik grupta iki tam eş çifti bulunduğunda başka kişi seçilemez.

**Çeldirici notu:** Çiftleri sıralı seçmek aynı iki çifti iki kez sayar.

## Soru 5

**Doğru cevap:** D

**Kazanım:** En az bir roman içeren seçkiyi tümleyenle sayma.

**Çözüm:**

On kitaptan dört kitap seçmenin $\binom{10}{4}=210$ yolu vardır. Roman içermeyen seçkiler, altı romandışı kitaptan dört seçilerek $\binom64=15$ biçimde oluşturulur:

$$210-15=195$$

**Neden doğru?** En az bir roman koşulunu bozan tek durum hiç roman seçilmemesidir.

**Çeldirici notu:** Yalnız bir roman seçmek, iki, üç veya dört roman içeren uygun seçkileri dışlar.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Pozitif çözümlerde bir değişkenin paritesini kullanma.

**Çözüm:**

$x$ tek ve pozitif olduğundan $x=1,3,5,7$ olabilir. Sabit $x$ için pozitif $y,z$ ikililerinin sayısı sırasıyla $6,4,2,0$ dır:

$$6+4+2=12$$

**Neden doğru?** $x=7$ olduğunda $y+z=1$ olur ve iki pozitif tam sayı bulunamaz.

**Çeldirici notu:** $y$ veya $z$'nin sıfır olmasına izin vermek pozitiflik koşulunu bozar.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Çarpımın tek olması için tüm çarpanların tek seçilmesi.

**Çözüm:**

1 ile 10 arasındaki tek sayılar 1, 3, 5, 7 ve 9'dur. Üçü bu beş sayıdan seçilir:

$$\binom53=10$$

**Neden doğru?** Çarpanlardan biri çift olursa çarpım çift olur.

**Çeldirici notu:** En az bir tek sayı seçmek çarpımın tek olması için yeterli değildir; bütün sayıların tek olması gerekir.

## Soru 8

**Doğru cevap:** B

**Kazanım:** İki türden tam sayıda kart seçme.

**Çözüm:**

Üç kırmızı kart 6 kırmızıdan, iki mavi kart 4 maviden seçilir:

$$\binom63\binom42=20\cdot6=120$$

**Neden doğru?** Beş kartın kalan ikisi, tam üç kırmızı koşulu nedeniyle mavi olmalıdır.

**Çeldirici notu:** Beş kartı bütün kartlardan seçmek renk sayısını sabitlemez.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Grup büyüklükleri farklı iki gruplandırmada zorunlu birlikte bulunmayı sayma.

**Çözüm:**

A ile B'nin bulunduğu grup ya üç kişilik ya da beş kişilik olabilir.

Üç kişilik grupta A, B dışında bir kişi 6 kişiden seçilir: $\binom61=6$. Beş kişilik grupta A, B dışında üç kişi 6 kişiden seçilir: $\binom63=20$.

Toplam

$$6+20=26$$

gruplandırma vardır.

**Neden doğru?** Grup büyüklükleri farklı olduğu için hangi grubun üçlü veya beşli olduğu zaten bellidir.

**Çeldirici notu:** A ve B'yi her iki grupta da birlikte saymak, aynı gruplandırmayı iki kez sayar.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Temel kombinasyon değerini hesaplama.

**Çözüm:**

On elemandan üçü sıra gözetmeden seçilir:

$$\binom{10}{3}=\frac{10\cdot9\cdot8}{3\cdot2\cdot1}=120$$

**Neden doğru?** Üç elemanın sırası önemli olmadığından kombinasyon kullanılır.

**Çeldirici notu:** $10\cdot9\cdot8$ hesabı aynı üçlülerin sıralamalarını ayrı ayrı sayar.
