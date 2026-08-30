# Konu 21 — Kombinasyon

## Test 39 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** İki tür kitaptan belirli sayıda seçme.

**Çözüm:**

Romanlardan iki, şiir kitaplarından iki seçilir:

$$\binom52\binom62=10\cdot15=150$$

**Neden doğru?** İki türdeki seçimler bağımsızdır.

**Çeldirici notu:** Kitapları tek gruptan seçmek, roman sayısı koşulunu bozabilir.

## Soru 2

**Doğru cevap:** E

**Kazanım:** En az bir özel aday içeren seçimleri tümleyeniyle sayma.

**Çözüm:**

12 adaydan iki seçmenin $\binom{12}{2}=66$ yolu vardır. Üç özel adayın hiçbirinin seçilmediği seçimler kalan 9 adaydan $\binom92=36$ tanedir:

$$66-36=30$$

**Neden doğru?** “En az biri” koşulunun tümleyeni, üç özel adayın da seçilmemesidir.

**Çeldirici notu:** Yalnızca bir özel adayın seçildiği durumları saymak, iki veya üç özel adaylı seçimleri eksik bırakır.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Sıra gözetmeden iki kişi seçme.

**Çözüm:**

11 finalistten 2'si seçilir:

$$\binom{11}{2}=55$$

**Neden doğru?** Madalya alacak kişilerde sıra önemli değildir.

**Çeldirici notu:** Birinci ve ikinci madalyayı sıralı düşünmek aynı ikiliyi iki kez sayar.

## Soru 4

**Doğru cevap:** B

**Kazanım:** İki zorunlu kişiyi içeren kurul seçme.

**Çözüm:**

Ayla ve Bora seçilmiş olduğundan kalan 2 kişi, diğer 7 kişiden seçilir:

$$\binom72=21$$

**Neden doğru?** İki zorunlu kişi için seçim yapılmaz.

**Çeldirici notu:** 9 kişiden doğrudan dört kişi seçmek, iki zorunlu kişinin birlikte bulunmasını garanti etmez.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Bir gruptan belirli sayıda etkinlik seçme.

**Çözüm:**

9 etkinlikten 3'ü seçilir:

$$\binom93=84$$

**Neden doğru?** Etkinliklerin seçilme sırası önemli değildir.

**Çeldirici notu:** Sıralı seçim yapmak aynı üçlü etkinlik grubunu tekrar sayar.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Parite koşuluna göre seçim yapma.

**Çözüm:**

1–9 arasında 5 tek ve 4 çift sayı vardır. Toplamın çift olması için ya üç çift ya da iki tek ve bir çift seçilir:

$$\binom43+\binom52\binom41=4+40=44$$

**Neden doğru?** Üç sayının toplamı, tek sayıların sayısı çift olduğunda çifttir.

**Çeldirici notu:** Üç tek sayı seçmek toplamı tek yapar.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Çiftlerden birer kişi seçme.

**Çözüm:**

Önce 6 çiftten 2'si seçilir, sonra her çiftten bir kişi belirlenir:

$$\binom62\cdot2^2=15\cdot4=60$$

**Neden doğru?** Çift seçimi ile her çiftten kişi seçimi bağımsızdır.

**Çeldirici notu:** 12 kişiden doğrudan iki kişi seçmek, aynı çiftten iki kişinin alınmasını engellemez.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Seçimden sonra görev belirleme.

**Çözüm:**

Önce iki öğrenci $\binom92=36$ biçimde seçilir. Bu iki kişiden biri başkan olarak 2 biçimde belirlenir:

$$36\cdot2=72$$

**Neden doğru?** Başkanlık görevi, seçilen iki kişiden birine verilir.

**Çeldirici notu:** Yalnızca $\binom92$ hesaplamak, başkan seçimini göz ardı eder.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Çiftlerden birer kişi seçme.

**Çözüm:**

Önce 6 renkten 3'ü seçilir, sonra her renkten iki karttan biri alınır:

$$\binom63\cdot2^3=20\cdot8=160$$

**Neden doğru?** Renk seçimi ve kart seçimi bağımsızdır.

**Çeldirici notu:** Aynı renkten iki kart seçmek, her renkten bir kart koşulunu bozar.

## Soru 10

**Doğru cevap:** C

**Kazanım:** İki özel eleman içeren alt kümeleri tümleyeniyle sayma.

**Çözüm:**

Tüm 4 elemanlı alt kümeler $\binom{10}{4}=210$ tanedir. İşaretli iki elemanın bulunmadığı alt kümeler $\binom84=70$ tanedir:

$$210-70=140$$

**Neden doğru?** İstenen alt kümeler, iki işaretli elemanı da içermeyenlerin tümleyenidir.

**Çeldirici notu:** İşaretli elemanlardan tam birini saymak, ikisini birden içeren alt kümeleri eksik bırakır.
