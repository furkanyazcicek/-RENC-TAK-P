# Konu 21 — Kombinasyon

## Test 35 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** İki tür nesneden belirli sayıda seçme.

**Çözüm:**

Bir kırmızı ve iki mavi boncuk seçilir:

$$\binom51\binom42=5\cdot6=30$$

**Neden doğru?** Renk gruplarındaki seçimler bağımsızdır.

**Çeldirici notu:** Üç boncuğu renkleri ayırmadan seçmek, tam bir kırmızı koşulunu garanti etmez.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Parite koşuluna göre seçim yapma.

**Çözüm:**

1–9 arasında 5 tek ve 4 çift sayı vardır. Toplamın tek olması için bir tek ve bir çift seçilir:

$$\binom51\binom41=20$$

**Neden doğru?** İki sayının toplamı, biri tek biri çift olduğunda tektir.

**Çeldirici notu:** İki tek veya iki çift seçmek toplamı çift yapar.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Tam sayıda özel eleman içeren seçimleri çarpma kuralıyla sayma.

**Çözüm:**

İlk üç sorudan ikisi ve son dört sorudan biri seçilir:

$$\binom32\binom41=3\cdot4=12$$

**Neden doğru?** İki gruptaki seçimler birbirinden bağımsızdır.

**Çeldirici notu:** İlk üç sorudan üçünü seçmek, tam iki koşuluna uymaz.

## Soru 4

**Doğru cevap:** C

**Kazanım:** İki zorunlu elemanı içeren seçim yapma.

**Çözüm:**

Ayşe ve Berk seçilmiş olduğundan kalan 2 kişi, diğer 6 kişiden seçilir:

$$\binom62=15$$

**Neden doğru?** Zorunlu iki kişi için seçim yapılmaz; yalnızca kalan yerler doldurulur.

**Çeldirici notu:** 8 kişiden doğrudan dört kişi seçmek, Ayşe ve Berk'in ikisinin de seçilmesini garanti etmez.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Dışlanan elemanları seçim kümesinden çıkarma.

**Çözüm:**

Kırmızı ve mavi kalem kullanılamadığı için kalan 8 kalemden 3'ü seçilir:

$$\binom83=56$$

**Neden doğru?** İki kalem baştan dışarıda bırakılır.

**Çeldirici notu:** 10 kalemin tamamından seçim yapmak yasaklanan kalemleri de sayar.

## Soru 6

**Doğru cevap:** E

**Kazanım:** En az koşulunu durumlara ayırma.

**Çözüm:**

Ekipte üç veya dört kız bulunabilir:

$$\binom63\binom51+\binom64=100+15=115$$

**Neden doğru?** Dört kişilik ekipte kız sayısı 3'ten az olamaz.

**Çeldirici notu:** Yalnızca üç kızlı ekipleri saymak, dört kızlı ekipleri eksik bırakır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Bir özelliğe sahip eleman sayısını sabitleme.

**Çözüm:**

1–12 arasında 4 sayı 3'ün katı, 8 sayı 3'ün katı değildir. Birer gruptan seçim yapılır:

$$\binom41\binom82=4\cdot28=112$$

**Neden doğru?** Tam bir kat seçildiği için kalan iki sayı diğer gruptan gelmelidir.

**Çeldirici notu:** 3'ün katı olmayan sayılardan üç seçmek, tam bir kat koşulunu sağlamaz.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Doğrusal olmayan noktalardan dörtgen sayma.

**Çözüm:**

Hiçbir üç nokta doğrusal olmadığı için seçilen her dört nokta bir dörtgen oluşturur:

$$\binom94=126$$

**Neden doğru?** Dörtgenin köşeleri, 9 noktadan sıra gözetmeden seçilir.

**Çeldirici notu:** Köşelerin sırasını ayrıca saymak aynı dörtgeni tekrar eder.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Her çiftten bir eleman seçme.

**Çözüm:**

Beş çiftin her birinden iki seçenekten biri alınır:

$$2^5=32$$

**Neden doğru?** Her çiftteki seçim diğer çiftlerden bağımsızdır.

**Çeldirici notu:** Çiftleri seçip kişiler arasından seçim yapmamak, her çiftteki iki olasılığı eksik bırakır.

## Soru 10

**Doğru cevap:** D

**Kazanım:** En az bir özel eleman içeren alt kümeleri tümleyeniyle sayma.

**Çözüm:**

Tüm 4 elemanlı alt kümeler $\binom{10}{4}=210$ tanedir. İşaretli iki elemanın hiç bulunmadığı alt kümeler $\binom84=70$ tanedir:

$$210-70=140$$

**Neden doğru?** İstenen alt kümeler, iki özel elemanı da dışarıda bırakanların tümleyenidir.

**Çeldirici notu:** Özel elemanlardan tam birini içerenleri saymak, ikisini birden içeren alt kümeleri eksik bırakır.
