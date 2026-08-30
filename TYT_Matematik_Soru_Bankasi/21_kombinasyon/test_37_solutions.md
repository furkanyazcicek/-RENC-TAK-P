# Konu 21 — Kombinasyon

## Test 37 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** İki tür nesneden belirli sayıda seçme.

**Çözüm:**

Matematik kitaplarından iki, fizik kitaplarından bir seçilir:

$$\binom42\binom61=6\cdot6=36$$

**Neden doğru?** İki kitap grubundaki seçimler bağımsızdır.

**Çeldirici notu:** Kitapları türlerine ayırmadan seçmek, tam iki matematik kitabı koşulunu korumaz.

## Soru 2

**Doğru cevap:** C

**Kazanım:** En az bir özel kişi içeren ekipleri tümleyeniyle sayma.

**Çözüm:**

Tüm ekipler $\binom{10}{4}=210$ tanedir. Ali ve Buse'nin ikisinin de bulunmadığı ekipler $\binom84=70$ tanedir:

$$210-70=140$$

**Neden doğru?** “En az biri” koşulunun dışındaki ekipler iki adayın da seçilmediği ekiplerdir.

**Çeldirici notu:** Yalnızca bir adayın bulunduğu ekipleri saymak, iki adayın birlikte bulunduğu ekipleri eksik bırakır.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Kombinasyonun simetri özelliğini kullanma.

**Çözüm:**

$$\binom92=\binom{9}{9-2}=\binom97$$

**Neden doğru?** İki elemanı seçmek, seçilmeyen yedi elemanı belirlemekle aynı sayıdadır.

**Çeldirici notu:** Üst ve alt indislerin toplamı 9 olmalıdır.

## Soru 4

**Doğru cevap:** E

**Kazanım:** İki zorunlu elemanı içeren seçim yapma.

**Çözüm:**

Kardeşler seçilmiş kabul edilir. Kalan 2 kişi diğer 6 kişiden seçilir:

$$\binom62=15$$

**Neden doğru?** Zorunlu iki kişi için ayrıca seçim yapılmaz.

**Çeldirici notu:** 8 kişiden doğrudan dört kişi seçmek, kardeşlerin ikisini birden içermeyebilir.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Dışlanan elemanları seçim kümesinden çıkarma.

**Çözüm:**

İki kitap dışarıda bırakılınca 9 kitaptan 3 kitap seçilir:

$$\binom93=84$$

**Neden doğru?** Kırmızı kapaklı kitaplar seçilemeyeceği için kullanılabilir kitap sayısı 9'dur.

**Çeldirici notu:** 11 kitaptan seçim yapmak, yasaklanan iki kitabı da hesaba katar.

## Soru 6

**Doğru cevap:** B

**Kazanım:** En az koşulunu durumlara ayırarak sayma.

**Çözüm:**

İki kız bir erkek veya üç kız seçilebilir:

$$\binom72\binom41+\binom73=84+35=119$$

**Neden doğru?** Üç kişilik ekipte en az iki kız bulunması bu iki durumu kapsar.

**Çeldirici notu:** Yalnızca iki kızlı ekipleri saymak, üç kızlı ekipleri eksik bırakır.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Özelliği belirli elemanlardan tam sayıda seçme.

**Çözüm:**

1–12 arasında 4 sayı 3'ün katı, 8 sayı değildir. İki gruptan ikişer sayı seçilir:

$$\binom42\binom82=6\cdot28=168$$

**Neden doğru?** “Tam iki” koşulu iki gruptan da ikişer seçim yapılmasını gerektirir.

**Çeldirici notu:** 3'ün katlarından yalnız bir veya üç seçmek koşula uymaz.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Farklı büyüklükteki alt kümelerin sayılarını toplama.

**Çözüm:**

İki elemanlı alt kümeler $\binom62=15$, üç elemanlılar $\binom63=20$ tanedir:

$$15+20=35$$

**Neden doğru?** İki durum birbirinden ayrıdır ve birlikte istenmektedir.

**Çeldirici notu:** Yalnızca üç elemanlı alt kümeleri saymak, iki elemanlıları gözden kaçırır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Çiftlerden birer kişi seçme.

**Çözüm:**

Önce 4 çiftten 2'si seçilir, sonra her çiftten bir kişi belirlenir:

$$\binom42\cdot2^2=6\cdot4=24$$

**Neden doğru?** Çift seçimi ile kişi seçimi bağımsızdır.

**Çeldirici notu:** Çiftlerden iki kişiyi doğrudan seçmek, aynı çiftten iki kişinin alınmasına yol açabilir.

## Soru 10

**Doğru cevap:** A

**Kazanım:** İki gruptan belirli sayıda öğrenci seçme.

**Çözüm:**

7 kızdan iki, 6 erkekten üç kişi seçilir:

$$\binom72\binom63=21\cdot20=420$$

**Neden doğru?** Kız ve erkek seçimleri birbirinden bağımsızdır.

**Çeldirici notu:** Kız ve erkekleri tek bir gruptan seçiyormuş gibi düşünmek, dağılım koşulunu bozar.
