# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 49 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Belirli elemanların aynı ve farklı konum bölümlerinde bulunma koşullarını sayma.

**Çözüm:**

1 ile 2'nin bulunacağı yarı 2 biçimde seçilir. Bu yarıdaki dört konuma 1 ve 2 sıralı olarak $P(4,2)=12$ biçimde yerleşir. 3, diğer yarıdaki dört konumdan birine gelir. Kalan beş sayı boş konumlara $5!$ biçimde dizilir.

$$2\cdot P(4,2)\cdot4\cdot5!=2\cdot12\cdot4\cdot120=11\,520$$

**Neden doğru?** 1 ve 2 için ortak yarı baştan seçilmiş, 3 yalnız karşı yarıya yerleştirilerek iki koşul aynı anda sağlanmıştır.

**Çeldirici notu:** 1 ile 2 farklı sayılar olduğundan seçilen iki konuma yerleşimleri sıralıdır.

## Soru 2

**Doğru cevap:** E

**Kazanım:** İki eş bölümde aynı sayıda belirli sonuç bulunan deney dizilerini sayma.

**Çözüm:**

Toplam dört yazının ilk ve son dört atışa eşit dağılması için her bölümde iki yazı bulunmalıdır. İlk bölümde yazı gelecek iki konum $\binom42$, son bölümdeki iki konum da bağımsız olarak $\binom42$ biçimde seçilir.

$$\binom42^2=6^2=36$$

**Neden doğru?** İki bölümde ikişer yazı seçildiğinde hem toplam dört yazı hem de bölüm sayılarının eşitliği otomatik olarak sağlanır.

**Çeldirici notu:** Yalnız toplam dört yazının konumlarını $\binom84$ biçimde seçmek bölüm eşitliğini uygulamaz.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Pozitif tek parçalardan oluşan sıralı toplamları yinelemeli olarak sayma.

**Çözüm:**

$a_n$, $n$ sayısının pozitif tek sayıların sıralı toplamı olarak yazım sayısı olsun. İlk terim 1 ise geriye $n-1$; ilk terim en az 3 ise bu ilk terimden 2 çıkarıldığında $n-2$ için geçerli bir yazım elde edilir. Bu nedenle

$$a_n=a_{n-1}+a_{n-2}$$

kuralı geçerlidir. Başlangıç değerleri $a_1=1$ ve $a_2=1$ olduğundan

$$a_3=2,\ a_4=3,\ a_5=5,\ a_6=8,\ a_7=13,\ a_8=21$$

bulunur.

**Neden doğru?** İlk terimi 1 olan yazımlar ile ilk terimi en az 3 olan yazımlar ayrık olup bütün tek parçalı yazımları kapsar.

**Çeldirici notu:** Terimlerin sırası önemli olduğundan $1+7$ ile $7+1$ farklı yazımlardır.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Bitişik ve sıralı iki rakamı blok kabul ederek uç koşullu diziliş sayma.

**Çözüm:**

$2$ ile $3$, sırası değişmeyen $23$ bloğu olarak alınır. Bu blok ile $1,4,5$ rakamları toplam dört öğedir ve

$$4!=24$$

biçimde sıralanabilir. $1$ rakamının başta bulunduğu $3!=6$ ve sonda bulunduğu $3!=6$ sıralama koşula uymaz. Bu iki durum ayrık olduğundan

$$24-6-6=12$$

uygun sayı vardır.

**Neden doğru?** $23$ bloğu bitişiklik ve solda olma koşulunu aynı anda sağlar; uçlarda bulunan $1$ durumları ayrıca çıkarılır.

**Çeldirici notu:** $2$ ile $3$ bloğunu kendi içinde iki biçimde sıralamak, $2$'nin hemen solda bulunması koşulunu bozar.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Farklı nesneleri adlandırılmış bölümlere sabit miktarlarda dağıtma.

**Çözüm:**

Yedi etkinlik üç güne ve her gün en az iki tane olacak biçimde dağıtıldığında günlerdeki etkinlik sayıları zorunlu olarak $3,2,2$ olur. Üç etkinliğin yapılacağı gün 3 biçimde seçilir. Bu günün etkinlikleri $\binom73$, kalan iki günden belirli birinin etkinlikleri de $\binom42$ biçimde seçilir. Son iki etkinlik son güne kalır.

$$3\binom73\binom42=3\cdot35\cdot6=630$$

**Neden doğru?** Üç etkinlik yapılacak gün seçildikten sonra kalan iki gün adlandırılmış olduğundan bunlardan birinin iki etkinliği seçilir, son iki etkinlik öteki güne zorunlu kalır.

**Çeldirici notu:** Gün içindeki etkinlikleri ayrıca sıralamak soruda bulunmayan bir ayrım ekler.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Bir grubun üyelerini ve grup içindeki sırasız özel görevi birlikte seçme.

**Çözüm:**

Önce iki eş başkan 11 öğrenciden $\binom{11}{2}$ biçimde seçilir. Takımın kalan üç üyesi, geriye kalan 9 öğrenciden $\binom93$ biçimde belirlenir.

$$\binom{11}{2}\binom93=55\cdot84=4620$$

**Neden doğru?** Eş başkanlar önceden seçildiği için takımın kalan üyeleri arasından yeniden görev seçimi yapılmasına gerek kalmaz.

**Çeldirici notu:** Eş başkanları sıralı seçmek, iki başkanın yer değiştirmesini farklı görev dağılımı sayar.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Belirli türdeki elemanları aralıklara yerleştirerek yan yana gelmeyi engelleme.

**Çözüm:**

Önce beş kadın $5!$ biçimde dizilir. Kadınların başında, sonunda ve aralarında 6 aralık oluşur. Üç erkek için bu aralıklardan üçü $\binom63$ biçimde seçilir ve erkekler seçilen aralıklara $3!$ biçimde yerleşir.

$$5!\binom63 3!=120\cdot20\cdot6=14\,400$$

**Neden doğru?** Her aralığa en fazla bir erkek yerleştirilmesi erkeklerin yan yana gelmesini tam olarak engeller.

**Çeldirici notu:** Erkekler birbirinden farklı olduğu için seçilen üç aralıktaki sıraları $3!$ biçimde değişir.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Simetrik iki değişken arasındaki kesin eşitsizlik koşulunu sayma.

**Çözüm:**

Dört kutuya 9 özdeş bilyenin negatif olmayan dağıtım sayısı

$$\binom{9+4-1}{4-1}=\binom{12}{3}=220$$

dir. Birinci ve ikinci kutuda eşit sayıda bilye bulunan dağıtımlarda bu ortak sayı $k=0,1,2,3,4$ olabilir. Kalan iki kutunun toplamları sırasıyla $9,7,5,3,1$ olur ve çözüm sayıları $10,8,6,4,2$'dir. Böylece eşitlik durumu toplam 30 dağıtımdır.

Kalan $220-30=190$ dağıtım, birinci kutunun fazla ve ikinci kutunun fazla olduğu iki simetrik duruma eşit bölünür:

$$\frac{190}{2}=95$$

**Neden doğru?** Birinci ve ikinci kutunun adlarını değiştirmek eşit olmayan dağıtımları karşıt eşitsizlik durumları arasında bire bir eşler.

**Çeldirici notu:** Eşit dağıtımlar iki eşitsizlik durumundan hiçbirine ait olmadığı için yarıya bölmeden önce çıkarılmalıdır.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Adlandırılmış iki sırada birlikte bulunma koşuluyla oturma düzeni sayma.

**Çözüm:**

A ile B'nin bulunacağı sıra 2 biçimde seçilir. Bu sıradaki üçüncü kişi kalan dört kişiden 4 biçimde belirlenir. Seçilen üç kişi kendi sıralarına $3!$, diğer üç kişi de öteki sıraya $3!$ biçimde oturur.

$$2\cdot4\cdot3!\cdot3!=2\cdot4\cdot36=288$$

**Neden doğru?** Sıralar numaralı olduğu için A–B grubunun birinci veya ikinci sırada bulunması farklı düzenler oluşturur.

**Çeldirici notu:** İki sıranın yer değiştirmesini aynı kabul etmek sonucu gereksiz yere ikiye böler.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Seçim ve sıralamada “tam olarak biri” koşulunu uygulama.

**Çözüm:**

A ve B kartlarından hangisinin seçileceği 2 biçimde belirlenir. Kalan üç kart, diğer beş karttan $\binom53$ biçimde seçilir. Seçilen dört farklı kart soldan sağa $4!$ biçimde dizilir.

$$2\cdot\binom53\cdot4!=2\cdot10\cdot24=480$$

**Neden doğru?** Önce A ve B'den yalnız biri seçilmiş, ardından diğer kartlar tamamlanıp seçilen dört kartın bütün sıraları sayılmıştır.

**Çeldirici notu:** “Tam olarak biri” yerine “en az biri” diye düşünmek, A ve B'nin birlikte seçildiği dizilişleri de sonuca katar.
