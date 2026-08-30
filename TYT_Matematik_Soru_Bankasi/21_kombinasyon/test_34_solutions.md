# Konu 21 — Kombinasyon

## Test 34 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** İki gruptan belirli sayıda eleman seçme.

**Çözüm:**

Bir vurmalı çalgıcı ve iki yaylı çalgıcı seçilir:

$$\binom21\binom42=2\cdot6=12$$

**Neden doğru?** İki gruptaki seçimler bağımsızdır.

**Çeldirici notu:** İki vurmalı çalgıcıyı seçmek, “tam bir” koşulunu bozar.

## Soru 2

**Doğru cevap:** E

**Kazanım:** En az bir özel eleman içeren seçimleri tümleyeniyle sayma.

**Çözüm:**

Tüm seçimler $\binom{10}{4}=210$ tanedir. Yıldızsız 7 karttan yapılan seçimler $\binom74=35$ olduğuna göre

$$210-35=175$$

seçim vardır.

**Neden doğru?** En az bir yıldızlı kart içermeyen seçimler tüm seçimlerden çıkarılır.

**Çeldirici notu:** Sadece bir yıldızlı kart içeren seçimleri saymak, iki veya üç yıldızlıları dışarıda bırakır.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Kombinasyonun tamamlayıcı seçim simetrisini kullanma.

**Çözüm:**

Kombinasyon simetrisine göre

$$\binom83=\binom{8}{8-3}=\binom85$$

olur.

**Neden doğru?** Üç elemanı seçmek, seçilmeyen beş elemanı belirlemekle aynı sayıda seçime karşılık gelir.

**Çeldirici notu:** Alt indis ile üst indisi yer değiştirilemez; toplamları 8 olmalıdır.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Birlikte seçilemeyen iki kişiyi tümleyeniyle değerlendirme.

**Çözüm:**

9 öğrenciden dört kişi seçmenin $\binom94=126$ yolu vardır. Efe ve Ege'nin birlikte olduğu ekiplerde kalan iki kişi 7 kişiden seçilir:

$$126-\binom72=126-21=105$$

**Neden doğru?** Yasak olan ekipler iki kardeşi birlikte içerir.

**Çeldirici notu:** Kardeşlerden yalnız birini dışarıda bırakmak, iki kardeşin de seçilebildiği bazı ekipleri hesaba katmaz.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Alt sınır koşulunu durumlara ayırarak sayma.

**Çözüm:**

Kurulda iki veya üç kadın bulunabilir:

$$\binom42\binom61+\binom43=36+4=40$$

**Neden doğru?** Bu iki durum birbirinden ayrıdır ve koşulu sağlayan tüm kurulları kapsar.

**Çeldirici notu:** Yalnızca iki kadınlı kurulları saymak, üç kadınlı kurulları eksik bırakır.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Parite koşuluna göre seçimleri sınıflandırma.

**Çözüm:**

1–12 arasında 6 tek ve 6 çift sayı vardır. Toplamın çift olması için tek sayıların sayısı 0, 2 veya 4 olabilir:

$$\binom60\binom64+\binom62\binom62+\binom64\binom60=15+225+15=255$$

**Neden doğru?** Tek sayıların sayısı çift olduğunda toplam çift olur.

**Çeldirici notu:** Tek sayıların sayısını tek almak toplamı tek yapar.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Her iki gruptan en az bir eleman içeren seçimleri sayma.

**Çözüm:**

9 bilyeden üç seçmenin $\binom93=84$ yolu vardır. Tek renkli seçimler $\binom53+\binom43=10+4$ tanedir:

$$84-10-4=70$$

**Neden doğru?** İki rengin de bulunması, iki tek renkli durumun dışlanması demektir.

**Çeldirici notu:** Sadece kırmızı-mavi-kırmızı sıralamasını düşünmek, seçimde sıranın önemsiz olduğunu gözden kaçırır.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Alt kümelerin büyüklüklerine göre sayıları toplama.

**Çözüm:**

Bir elemanlı alt kümeler $\binom61=6$, iki elemanlı alt kümeler $\binom62=15$ tanedir:

$$6+15=21$$

**Neden doğru?** İstenen alt kümeler farklı büyüklüklerde olduğundan sayılar toplanır.

**Çeldirici notu:** Boş kümeyi eklemek, soruda istenmeyen üçüncü bir büyüklüğü dahil eder.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Her renkten en fazla bir kart seçme.

**Çözüm:**

Önce 5 renkten 4'ü seçilir, ardından her renkten bir kart belirlenir:

$$\binom54\cdot2^4=5\cdot16=80$$

**Neden doğru?** Dört farklı renkten birer kart seçildiğinde renkler birbirinden farklı olur.

**Çeldirici notu:** Kartları yalnızca toplam sayıya göre seçmek, aynı renkten iki kart alınmasına izin verir.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Özel eleman içeren alt kümeleri tümleyeniyle sayma.

**Çözüm:**

12 kitaptan 4 seçmenin $\binom{12}{4}=495$ yolu vardır. İşaretli üç kitabın hiçbirini içermeyen seçimler $\binom94=126$ tanedir:

$$495-126=369$$

**Neden doğru?** En az bir işaretli kitap içerenler, işaretli kitapsız seçimlerin tümleyenidir.

**Çeldirici notu:** İşaretli kitaplardan tam birini seçmek koşulu daraltır; soru en az birini istemektedir.
