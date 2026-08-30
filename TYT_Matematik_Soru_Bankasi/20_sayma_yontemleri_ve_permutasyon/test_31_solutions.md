# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 31 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Bir kaplama problemini ilk yerleştirmenin oluşturduğu durumlara göre özyinelemeli sayma.

**Çözüm:**

$2\times n$ tahtanın kaplama sayısı $T_n$ olsun. Tahtanın solunda bir dikey domino kullanılırsa geriye $2\times(n-1)$ tahta; iki yatay domino üst üste kullanılırsa $2\times(n-2)$ tahta kalır. Bu nedenle

$$T_n=T_{n-1}+T_{n-2}$$

olur. $T_1=1$ ve $T_2=2$ değerlerinden

$$T_3=3,\quad T_4=5,\quad T_5=8,\quad T_6=13$$

elde edilir.

**Neden doğru?** Sol kenarı örten taşlar ya tek bir dikey taş ya da zorunlu olarak üst üste iki yatay taştır; iki durum ayrık ve eksiksizdir.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Köşegenin bir tarafında kalan en kısa yolları Catalan sayımıyla belirleme.

**Çözüm:**

Dört sağ ve dört yukarı adımdan oluşan, hiçbir anda yukarı adım sayısının sağ adım sayısını geçmediği yolların sayısı dördüncü Catalan sayısıdır:

$$\frac{1}{4+1}\binom84=\frac{70}{5}=14$$

**Neden doğru?** Koşul, yolun $y=x$ doğrusunun üstüne çıkmamasıyla aynıdır; eşit sayıda iki adım türü için Catalan bağıntısı tam olarak bu yolları sayar.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Belirli türdeki elemanları kendilerine ayrılmış konumlarda bağımsız sıralama.

**Çözüm:**

Tek sayılar $1,3,5$, tek numaralı üç konuma $3!$ biçimde; çift sayılar $2,4,6$ ise çift numaralı üç konuma yine $3!$ biçimde yerleşir:

$$3!\cdot3!=6\cdot6=36$$

**Neden doğru?** Tek ve çift konum kümeleri ayrıdır; iki grubun iç sıralamaları birbirinden bağımsız seçilir.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Bir grubun göreli sırasının sabit kaldığı doğrusal dizilişleri konum seçimiyle sayma.

**Çözüm:**

Erkeklerin oturacağı dört koltuk sekiz koltuktan $\binom84=70$ biçimde seçilir. Erkeklerin bu koltuklardaki sırası alfabetik koşul nedeniyle tek olarak belirlenir. Dört kadın kalan koltuklara $4!=24$ biçimde oturur:

$$70\cdot24=1680$$

**Neden doğru?** Erkeklerin konumları seçildiğinde göreli sıraları zorunludur; yalnız kadınların sırası serbesttir.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Farklı kişileri eş büyüklükte ve adlandırılmamış gruplara ayırma.

**Çözüm:**

Kişiler önce sıralanıp ardışık üçlü gruplara ayrılabilir. Her grubun iç sırası önemli olmadığı için $(3!)^3$'e, üç grubun kendi aralarındaki sırası önemli olmadığı için $3!$'e bölünür:

$$\frac{9!}{(3!)^3\cdot3!}=280$$

**Neden doğru?** İki ayrı bölme, hem grup içi sıralamalardan hem de grupların yer değiştirmesinden kaynaklanan tekrarları kaldırır.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Belirli üç kişi arasındaki göreli sıra koşulunu simetriyle sayma.

**Çözüm:**

Altı koşucunun $6!=720$ farklı sonuç sıralaması vardır. Ayşe, Berk ve Ceren'in kendi aralarındaki $3!=6$ göreli sırasının ikisinde Ayşe en öndedir: Ayşe–Berk–Ceren ve Ayşe–Ceren–Berk.

$$720\cdot\frac{2}{6}=240$$

**Neden doğru?** Diğer üç koşucunun yerleri değiştirilmeden özel üçlünün bütün göreli sıraları eşit sayıda oluşur.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Bağımsız temsilci seçimlerini dairesel dizilişle birleştirme.

**Çözüm:**

Her çiftten seçilecek kişi için iki seçenek olduğundan beş temsilci

$$2^5=32$$

biçimde seçilir. Seçilen beş farklı kişi masa çevresine

$$(5-1)!=24$$

biçimde oturur:

$$32\cdot24=768$$

**Neden doğru?** Her temsilci kümesi için dairesel oturma düzenleri aynı sayıda ve seçimlerden bağımsızdır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Özel bir gruptan tam olarak belirli sayıda kişi içeren kurul seçme.

**Çözüm:**

Ayşe, Berk ve Ceren'den kurula girecek tek kişi $\binom31=3$ biçimde seçilir. Kurulun kalan üç üyesi diğer beş öğrenciden $\binom53=10$ biçimde seçilir:

$$3\cdot10=30$$

**Neden doğru?** Diğer iki özel öğrenci dışarıda bırakıldığından “tam olarak biri” koşulu doğrudan sağlanır.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Çembersel sırada komşu olmayan konumları seçme.

**Çözüm:**

On köşeden komşu olmayan üçünü seçme sayısı

$$\frac{10}{10-3}\binom{10-3}{3}
=\frac{10}{7}\binom73=50$$

dir.

Bağıntı, doğrusal sıradaki seçimlerin uçların birlikte seçilip seçilmemesine göre ayrılmasıyla da elde edilebilir.

**Neden doğru?** İlk ve son köşe de komşu olduğundan doğrusal seçim bağıntısı doğrudan değil, çembersel düzeltmeyle kullanılmalıdır.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Farklı nesnelerin etiketli kutulara tam olarak bir kutu boş kalacak biçimde dağıtımını sayma.

**Çözüm:**

Boş kalacak kutu $3$ biçimde seçilir. Sekiz top kalan iki kutuya $2^8$ biçimde dağıtılabilir; ancak bu iki kutudan birinin de boş kaldığı iki dağıtım çıkarılır:

$$3\big(2^8-2\big)=3\cdot254=762$$

**Neden doğru?** Çıkarılan iki durum, bütün topların yalnızca birinci ya da yalnızca ikinci dolu kutuya gitmesidir; böylece tam olarak iki kutu dolu kalır.
