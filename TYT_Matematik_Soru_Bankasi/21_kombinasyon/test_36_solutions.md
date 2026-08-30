# Konu 21 — Kombinasyon

## Test 36 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** İki tür nesneden belirli sayıda seçme.

**Çözüm:**

Kırmızı boncuklardan iki, mavi boncuklardan bir seçilir:

$$\binom52\binom41=10\cdot4=40$$

**Neden doğru?** İki renkteki seçimler bağımsızdır.

**Çeldirici notu:** Üç kırmızı seçmek, tam iki kırmızı koşulunu bozar.

## Soru 2

**Doğru cevap:** B

**Kazanım:** En az bir özel eleman içeren ekipleri tümleyeniyle sayma.

**Çözüm:**

Tüm ekipler $\binom83=56$ tanedir. İki adayın da bulunmadığı ekipler $\binom63=20$ tanedir:

$$56-20=36$$

**Neden doğru?** “En az biri” koşulunun tümleyeni, iki adayın da seçilmemesidir.

**Çeldirici notu:** Yalnızca bir adayın seçildiği ekipleri saymak, iki adayın birlikte bulunduğu ekipleri dışarıda bırakır.

## Soru 3

**Doğru cevap:** C

**Kazanım:** İki ayrı gruptan sabit sayıda soru seçme.

**Çözüm:**

İlk üç sorudan ikisi ve son dört sorudan ikisi seçilir:

$$\binom32\binom42=3\cdot6=18$$

**Neden doğru?** Her gruptaki seçim bağımsız yapılır.

**Çeldirici notu:** İlk üç sorudan üçünü seçmek, tam iki koşuluna uymaz.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Birlikte seçilemeyen iki elemanı tümleyeniyle sayma.

**Çözüm:**

Tüm üçlü seçkiler $\binom93=84$ tanedir. Belirli iki kitabın birlikte bulunduğu seçkilerde üçüncü kitap 7 biçimde seçilir:

$$84-7=77$$

**Neden doğru?** Yasak olan seçkiler, iki belirli kitabı birlikte içerir.

**Çeldirici notu:** Yalnızca bir kitabı dışlamak, diğer kitapla birlikte seçilmesini engellemez.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Tam sayıda eleman içeren ekipleri çarpma kuralıyla sayma.

**Çözüm:**

6 kızdan üç, 5 erkekten bir seçilir:

$$\binom63\binom51=20\cdot5=100$$

**Neden doğru?** Kız ve erkek seçimleri bağımsızdır.

**Çeldirici notu:** Kız ve erkek sayılarını toplayarak seçim yapmak, ekipteki dağılım koşulunu korumaz.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Pariteye göre dört elemanlı seçim yapma.

**Çözüm:**

1–10 arasında 5 çift ve 5 tek sayı vardır. İkişer tane seçilir:

$$\binom52\binom52=10\cdot10=100$$

**Neden doğru?** Tam iki çift sayının seçilmesi, kalan iki sayının tek olmasını gerektirir.

**Çeldirici notu:** Dört çifti seçmek, tam iki çift koşulunu aşar.

## Soru 7

**Doğru cevap:** B

**Kazanım:** En az bir özel eleman içeren seçimleri tümleyeniyle sayma.

**Çözüm:**

7 kitaptan 4 seçmenin $\binom74=35$ yolu vardır. İşaretli iki kitabın hiç seçilmediği seçimler kalan 5 kitaptan $\binom54=5$ tanedir:

$$35-5=30$$

**Neden doğru?** İstenen seçimler, iki işaretli kitabı da dışarıda bırakanların tümleyenidir.

**Çeldirici notu:** İşaretli kitaplardan tam birini seçme koşulu, ikisini birden içeren seçimleri eksik sayar.

## Soru 8

**Doğru cevap:** C

**Kazanım:** İşaretli eleman içeren ikili alt kümeleri sayma.

**Çözüm:**

8 elemandan iki seçmenin $\binom82=28$ yolu vardır. İşaretli üç elemanın hiçbiri bulunmayan seçimler $\binom52=10$ tanedir:

$$28-10=18$$

**Neden doğru?** En az bir işaretli eleman bulunmayan alt kümeler çıkarılır.

**Çeldirici notu:** İşaretli elemanları doğrudan seçmek, iki işaretlinin birlikte bulunduğu alt kümeleri ayrı sayabilir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Grup içindeki tür sayısı koşulunu durumlara ayırma.

**Çözüm:**

Erkek sayısı kadın sayısından fazla ise erkek sayısı 2 veya 3 olabilir:

$$\binom52\binom41+\binom53=40+10=50$$

**Neden doğru?** Üç kişilik kurulda erkek üstünlüğü bu iki durumu kapsar.

**Çeldirici notu:** Üç erkeğin tamamını seçmek tek durumdur; iki erkekli kurullar da sayılmalıdır.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Belirli sayıda çifti sıra gözetmeden seçme.

**Çözüm:**

6 çift arasından 3 çift seçilir:

$$\binom63=20$$

**Neden doğru?** Çiftlerin seçilme sırası önemli değildir.

**Çeldirici notu:** Çiftleri sıralı seçmek aynı seçimi birden fazla kez sayar.
