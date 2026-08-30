# Konu 21 — Kombinasyon

## Test 38 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** İki tür kitaptan belirli sayıda seçme.

**Çözüm:**

Romanlardan iki, öykülerden iki kitap seçilir:

$$\binom62\binom52=15\cdot10=150$$

**Neden doğru?** İki türdeki seçimler bağımsızdır.

**Çeldirici notu:** Dört kitabı tek gruptan seçmek, roman sayısı koşulunu sağlamaz.

## Soru 2

**Doğru cevap:** D

**Kazanım:** En az bir özel kişi içeren ekipleri tümleyeniyle sayma.

**Çözüm:**

Tüm ekipler $\binom93=84$ tanedir. İki temsilcinin de bulunmadığı ekipler $\binom73=35$ tanedir:

$$84-35=49$$

**Neden doğru?** “En az biri” koşulunun tümleyeni, iki temsilcinin de seçilmemesidir.

**Çeldirici notu:** Yalnızca bir temsilciyi içeren ekipleri saymak, iki temsilcinin birlikte bulunduğu ekipleri eksik bırakır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Sıra gözetmeden ikili seçim yapma.

**Çözüm:**

9 koltuktan 2'si seçilir:

$$\binom92=36$$

**Neden doğru?** Koltuk çiftinde sıra önemli değildir.

**Çeldirici notu:** İki koltuğu sıralı düşünmek, aynı çifti iki kez sayar.

## Soru 4

**Doğru cevap:** A

**Kazanım:** İki zorunlu elemanı içeren seçim yapma.

**Çözüm:**

Ayla ve Baran seçilmiş olduğundan kalan 2 kişi, diğer 5 kişiden seçilir:

$$\binom52=10$$

**Neden doğru?** Zorunlu kişiler için seçim yapılmaz.

**Çeldirici notu:** 7 kişiden doğrudan dört kişi seçmek, iki zorunlu kişinin birlikte seçilmesini garanti etmez.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Kullanılamayan elemanları seçim kümesinden çıkarma.

**Çözüm:**

İki kitap çıkarılınca 8 kitaptan 3 kitap seçilir:

$$\binom83=56$$

**Neden doğru?** Seçim yalnızca kullanılabilir sekiz kitap arasından yapılır.

**Çeldirici notu:** 10 kitabın tamamından seçim yapmak, yasaklanan iki kitabı da hesaba katar.

## Soru 6

**Doğru cevap:** C

**Kazanım:** En az koşulunu tümleyeniyle değerlendirme.

**Çözüm:**

11 öğrenciden üç seçmenin $\binom{11}{3}=165$ yolu vardır. Hiç kız bulunmayan ekipler $\binom63=20$ tanedir:

$$165-20=145$$

**Neden doğru?** En az bir kız bulunmayan tek durum, üç erkeğin seçilmesidir.

**Çeldirici notu:** Yalnızca tek kızlı ekipleri saymak, iki veya üç kızlı ekipleri dışarıda bırakır.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Pariteye göre seçim yapma.

**Çözüm:**

1–10 arasında 5 tek ve 5 çift sayı vardır. İkişer tek ve çift seçilir:

$$\binom52\binom52=100$$

**Neden doğru?** Tam iki tek seçildiğinde kalan iki sayı çift olur.

**Çeldirici notu:** Tek sayıların sayısını üç almak, istenen tam iki koşulunu bozar.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Doğrusal olmayan noktalardan üçgen sayma.

**Çözüm:**

Hiçbir üç nokta doğrusal olmadığı için 8 noktadan seçilen her üçlü bir üçgen oluşturur:

$$\binom83=56$$

**Neden doğru?** Her üç nokta farklı bir üçgenin köşelerini belirler.

**Çeldirici notu:** Noktaların sırasını ayrıca hesaba katmak aynı üçgeni tekrar sayar.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Çiftlerden birer kişi seçme.

**Çözüm:**

Önce 5 çiftten 3'ü seçilir, sonra her çiftten bir kişi belirlenir:

$$\binom53\cdot2^3=10\cdot8=80$$

**Neden doğru?** Çift seçimi ve her çiftten kişi seçimi bağımsızdır.

**Çeldirici notu:** 10 kişiden doğrudan üç kişi seçmek, eşlerin birlikte seçilmesine izin verir.

## Soru 10

**Doğru cevap:** B

**Kazanım:** İki gruptan tam sayıda eleman seçme.

**Çözüm:**

Kadınlardan iki, erkeklerden iki kişi seçilir:

$$\binom82\binom52=28\cdot10=280$$

**Neden doğru?** İki gruptaki seçimler bağımsız olduğundan çarpma kuralı uygulanır.

**Çeldirici notu:** 13 kişiden doğrudan dört kişi seçmek, kadın-erkek dağılımını belirlemez.
