# Konu 21 — Kombinasyon

## Test 10 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Sayıları bölümden kalan sınıflarına ayırarak seçim yapma.

**Çözüm:**

Sayılar 3 ile bölümünden kalanlarına göre

$$\{3,6,9\},\qquad \{1,4,7\},\qquad \{2,5,8\}$$

biçiminde üç gruba ayrılır. Kalanların birbirinden farklı olması için her gruptan bir sayı seçilir.

$$3\cdot3\cdot3=27$$

**Neden doğru?** Üç sayının kalanları 0, 1 ve 2 olduğundan hiçbir iki sayı aynı kalan sınıfında değildir.

**Çeldirici notu:** Üç sayıyı dokuz sayıdan doğrudan seçmek aynı kalan sınıfından birden fazla sayı seçilmesine izin verir.

## Soru 2

**Doğru cevap:** A

**Kazanım:** İki adlandırılmış grubun kesişimindeki kişi sayısını sabitleme.

**Çözüm:**

Ortak öğrenci 6 biçimde seçilir. A grubunun yalnız kendisinde bulunan üyesi kalan 5 öğrenciden, B grubunun yalnız kendisinde bulunan üyesi ise kalan 4 öğrenciden seçilir.

$$6\cdot5\cdot4=120$$

**Neden doğru?** Grupların farklı adları olduğu için A'ya özgü ve B'ye özgü öğrencilerin yer değiştirmesi farklı sonuç oluşturur.

**Çeldirici notu:** Son iki öğrenciyi sırasız bir ikili olarak seçmek, hangisinin A ve hangisinin B grubunda olduğunu belirlemez.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Belirli bir alt gruptan en fazla bir öğe içeren seçimleri durumlara ayırma.

**Çözüm:**

Özel kitaplardan hiçbiri seçilmezse dört kitap diğer beş kitaptan $\binom54=5$ biçimde seçilir.

Özel kitaplardan biri seçilirse bu kitap $\binom31=3$, diğer üç kitap kalan beş kitaptan $\binom53=10$ biçimde seçilir.

$$\binom54+\binom31\binom53=5+3\cdot10=35$$

**Neden doğru?** Sıfır veya bir özel kitap içeren bütün dörtlü seçimler sayılmıştır.

**Çeldirici notu:** Yalnız bir özel kitap bulunan seçimleri saymak, özel kitap içermeyen seçimleri dışarıda bırakır.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Tekrarlı seçimde her tür için üst sınır uygulama.

**Çözüm:**

Dört çeşitten alınan sayılar toplam 6, her biri en fazla 2 olmalıdır. Olası dağılımlar şunlardır:

- $2,2,2,0$: Hiç alınmayan çeşit 4 biçimde seçilir.
- $2,2,1,1$: İkişer tane alınan çeşitler $\binom42=6$ biçimde seçilir.

Toplam seçim sayısı

$$4+6=10$$

olur.

**Neden doğru?** Dört sayının toplamını 6 yapan ve hiçbir sayısı 2'yi aşmayan bütün dağılım türleri kapsanmıştır.

**Çeldirici notu:** $3,1,1,1$ dağılımı toplamı 6 yapsa da bir çeşitten en fazla iki alma koşulunu bozar.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Zorunlu bir ikili ile yasaklanan başka bir ikiliyi aynı seçimde ele alma.

**Çözüm:**

A ile B seçilmiş kabul edilir. Grubun kalan iki üyesi diğer altı öğrenciden

$$\binom62=15$$

biçimde seçilebilir. C ile D'nin birlikte seçildiği tek durum uygun değildir.

$$15-1=14$$

**Neden doğru?** A ile B'yi içeren bütün dörtlülerden yalnız C ile D'yi de birlikte içeren grup çıkarılmıştır.

**Çeldirici notu:** C ile D'yi tamamen seçenek dışı bırakmak, yalnız birlikte bulunmalarını yasaklayan koşulu gereğinden fazla daraltır.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Bölünebilme özelliğine göre tam istenen sayılarda seçim yapma.

**Çözüm:**

Birden on ikiye kadar 3'ün katı olan 4 sayı, 3'ün katı olmayan 8 sayı vardır. Her iki gruptan ikişer sayı seçilir.

$$\binom42\binom82=6\cdot28=168$$

**Neden doğru?** Dört sayılık seçim tam olarak iki kat ve iki kat olmayan sayıyla tamamlanmıştır.

**Çeldirici notu:** Yalnız 3'ün katı olan iki sayıyı seçmek, kalan iki sayının belirlenmesini eksik bırakır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Farklı büyüklükteki grupları seçimle oluşturma.

**Çözüm:**

Bir kişilik grup 7 biçimde belirlenir. Kalan altı öğrenciden iki kişilik grup

$$\binom62=15$$

biçimde seçildiğinde son dört öğrenci dört kişilik grubu oluşturur.

$$7\cdot15=105$$

**Neden doğru?** Grup büyüklükleri farklı olduğu için gruplar kendi büyüklükleriyle ayırt edilir ve ayrıca bölme yapılmaz.

**Çeldirici notu:** Grupların yer değiştirmesi mümkün olmadığı hâlde sonucun bir sayıya bölünmesi uygun bölünmeleri eksiltir.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Bir grup seçtikten sonra grubun dışından birden fazla yedek belirleme.

**Çözüm:**

Dört kişilik kurul sekiz öğrenciden

$$\binom84=70$$

biçimde seçilir. Kurul dışında kalan dört öğrenciden iki yedek üye $\binom42=6$ biçimde belirlenir.

$$\binom84\binom42=70\cdot6=420$$

**Neden doğru?** Yedek üyeler yalnız kurul dışında kalan öğrenciler arasından seçilmiştir.

**Çeldirici notu:** Yedek üyeleri sekiz öğrencinin tamamından seçmek kurul üyelerinin yeniden seçilmesine izin verir.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Tam olarak iki öğenin aynı gruptan geldiği seçimleri sayma.

**Çözüm:**

İki çalışmanın seçileceği alan 3 biçimde belirlenir. Bu alandaki üç çalışmadan ikisi $\binom32=3$ biçimde seçilir. Üçüncü çalışmanın alanı kalan iki alandan 2, çalışma ise o alandaki üç seçenekten 3 biçimde seçilir.

$$3\cdot\binom32\cdot2\cdot3=3\cdot3\cdot2\cdot3=54$$

**Neden doğru?** Üçüncü çalışma farklı bir alandan seçildiği için dağılım tam olarak $2+1$ olur.

**Çeldirici notu:** Üçüncü çalışmayı dokuz çalışmanın tamamından seçmek üçünün aynı alandan olduğu veya seçilmiş bir çalışmanın yeniden alındığı durumlara izin verir.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Alt kümede belirli öğe koşulu ile eleman sayısının tek–çiftliğini birlikte uygulama.

**Çözüm:**

A ile B'den hangisinin seçileceği 2 biçimde belirlenir. Alt kümede şimdilik bir eleman vardır. Toplam eleman sayısının çift olması için diğer dört elemandan tek sayıda eleman seçilmelidir; yani bir veya üç eleman alınır.

$$2\left(\binom41+\binom43\right)=2(4+4)=16$$

**Neden doğru?** Bir özel elemana eklenen tek sayıdaki diğer eleman, toplam alt küme büyüklüğünü çift yapar.

**Çeldirici notu:** Diğer dört elemandan çift sayıda eleman seçmek, toplam eleman sayısını tek yapar.
