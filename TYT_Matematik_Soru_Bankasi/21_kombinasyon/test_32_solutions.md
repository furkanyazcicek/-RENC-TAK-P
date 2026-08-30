# Konu 21 — Kombinasyon

## Test 32 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** İki gruptan belirli sayıda eleman seçme.

**Çözüm:**

Kırmızı kartlardan 2, mavi kartlardan 1 seçilir:

$$\binom42\binom51=6\cdot5=30$$

**Neden doğru?** Kırmızı ve mavi seçimleri bağımsız olduğundan çarpma kuralı kullanılır.

**Çeldirici notu:** Renkleri ayırmadan doğrudan seçim yapmak, verilen renk koşulunu gözden kaçırır.

## Soru 2

**Doğru cevap:** C

**Kazanım:** En az bir özel eleman içeren seçimleri tümleyeniyle sayma.

**Çözüm:**

Tüm üçlü seçimlerden hiç sözlük içermeyenleri çıkaralım:

$$\binom73-\binom53=35-10=25$$

**Neden doğru?** “En az bir sözlük” koşulunun tümleyeni, iki sözlüğü de dışarıda bırakmaktır.

**Çeldirici notu:** Yalnızca bir sözlük seçilen durumları saymak, iki sözlüğün birlikte seçilmesini eksik bırakır.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Zorunlu bir eleman içeren kombinasyon oluşturma.

**Çözüm:**

Yıldız biçimli rozet seçilmiş kabul edilir. Kalan 4 rozetten 2'si seçilir:

$$\binom42=6$$

**Neden doğru?** Zorunlu rozet için ayrıca seçim yapılmaz; yalnızca kalan iki rozet belirlenir.

**Çeldirici notu:** Beş rozetten üçünü doğrudan seçmek, zorunlu rozet koşulunu garanti etmez.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Birlikte bulunması yasak olan iki elemanlı seçimleri tümleyeniyle sayma.

**Çözüm:**

8 öğrenciden dört kişi seçilirse $\binom84=70$ seçim vardır. Ece ve Elif'in birlikte bulunduğu seçimler $\binom62=15$ tanedir. Bu nedenle

$$70-15=55$$

grup kalır.

**Neden doğru?** İstenmeyen seçimler, iki kardeşin birlikte seçildiği seçimlerdir.

**Çeldirici notu:** Kardeşlerden birini baştan çıkarmak, diğer öğrencilerle oluşan seçimleri eksik sayabilir.

## Soru 5

**Doğru cevap:** A

**Kazanım:** İki renkten eşit sayıda eleman seçme.

**Çözüm:**

Kırmızı toplardan 2 ve mavi toplardan 2 seçilir:

$$\binom62\binom52=15\cdot10=150$$

**Neden doğru?** İki renkteki seçimler ayrı yapılıp çarpılır.

**Çeldirici notu:** 11 toptan 4'ünü doğrudan seçmek, renk dağılımını belirlemez.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Parite koşuluna göre seçimleri sınıflandırma.

**Çözüm:**

1'den 10'a kadar 5 tek ve 5 çift sayı vardır. Toplamın çift olması için ya üç çift ya da iki tek ve bir çift seçilir:

$$\binom53+\binom52\binom51=10+50=60$$

**Neden doğru?** Üç sayının toplamı, tek sayıların sayısı çift olduğunda çifttir.

**Çeldirici notu:** Tek sayıların sayısını tek almak toplamı tek yapar.

## Soru 7

**Doğru cevap:** C

**Kazanım:** En az sayıda eleman koşulunu tümleyeniyle değerlendirme.

**Çözüm:**

12 öğrenciden 5 kişilik tüm ekipler $\binom{12}{5}=792$ tanedir. Kız sayısı 0 veya 1 olan ekipler çıkarılır:

$$792-\binom55-\binom71\binom54=792-1-35=756$$

**Neden doğru?** En az 2 kız koşulunun dışındaki tek durumlar, hiç kız veya yalnız bir kız bulunan ekiplerdir.

**Çeldirici notu:** Sadece tam iki kız bulunan ekipleri saymak, üç, dört veya beş kızlı ekipleri dışarıda bırakır.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Doğrusal olmayan noktalardan üçgen sayma.

**Çözüm:**

Her üç nokta bir üçgen oluşturur. Bu nedenle

$$\binom83=56$$

üçgen çizilebilir.

**Neden doğru?** Hiçbir üç nokta doğrusal olmadığı için seçilen üç nokta her zaman bir üçgenin köşeleridir.

**Çeldirici notu:** Noktaların sırasını ayrıca hesaba katmak aynı üçgeni birden fazla sayar.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Bir alt sınır koşulunu durumlara ayırarak sayma.

**Çözüm:**

Kuruldaki kadın sayısı 3, 4 veya 5 olabilir:

$$\binom63\binom42+\binom64\binom41+\binom65\binom40=120+60+6=186$$

**Neden doğru?** Bu üç durum birbirinden ayrıdır ve kadın sayısı 3'ten az olamaz.

**Çeldirici notu:** Yalnızca üç kadınlı kurulları saymak, dört ve beş kadınlı kurulları kaçırır.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Sıra gözetmeden belirli sayıda eser seçme.

**Çözüm:**

7 eserden 3'ü seçilir:

$$\binom73=35$$

**Neden doğru?** Sergilenecek eserlerin sırası önemli değildir.

**Çeldirici notu:** Eserleri sıralı seçmek, aynı üçlü grubu farklı sıralarla tekrar sayar.
