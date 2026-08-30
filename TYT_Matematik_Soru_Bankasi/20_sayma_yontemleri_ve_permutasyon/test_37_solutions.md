# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 37 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Aralarında en az belirli bir fark bulunan sayı seçimlerini dönüştürerek kombinasyonla sayma.

**Çözüm:**

Seçilen sayılar $a<b<c$ olsun. Aralarındaki farkların en az $3$ olması için

$$a,\quad b-2,\quad c-4$$

sayıları $1$–$6$ arasından seçilmiş üç farklı ve artan sayı olur. Bu dönüşüm tersine çevrilebilir. Dolayısıyla seçim sayısı

$$\binom63=20$$

dir.

**Neden doğru?** İkinci ve üçüncü sayıdan zorunlu aralık payları çıkarıldığında sıradan bir üçlü seçimine bire bir eşleme elde edilir.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Bir blok koşuluyla başka bir grubun göreli sıra koşulunu birlikte sayma.

**Çözüm:**

$D$ ve $E$ bir blok kabul edildiğinde bu blokla diğer beş görev toplam altı birim oluşturur. Blok içi sıra iki farklı olduğundan önce

$$6!\cdot2$$

diziliş vardır. $A,B,C$ görevlerinin kendi aralarındaki $3!$ göreli sıradan yalnız biri istenmektedir:

$$\frac{6!\cdot2}{3!}=240$$

**Neden doğru?** $D,E$ bloğu, $A,B,C$ görevlerinin göreli sıra simetrisini bozmaz.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Dikdörtgensel tabloda farklı satır ve sütun koşullu hücre çiftlerini sayma.

**Çözüm:**

İlk kare $12$ biçimde seçilir. İkinci kare, ilkinden farklı olan iki satırdan ve üç sütundan seçilir; yani $2\cdot3=6$ seçeneği vardır. Bu işlem her kare çiftini iki sırada saydığı için

$$\frac{12\cdot6}{2}=36$$

elde edilir.

**Neden doğru?** İki karenin seçilme sırası önemli değildir; ikiye bölme bu çift sayımı kaldırır.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Dönüşümlü dairesel oturma düzeninde eşlerin komşuluğunu yasaklayan yerleşimleri sayma.

**Çözüm:**

Erkekler masa çevresine $(4-1)!=6$ biçimde oturur. Erkekler sabitken aralarındaki dört boşluğa kadınlar yerleşecektir. Her kadın, eşinin iki yanındaki boşluklara oturamaz.

Erkekler saat yönünde $H_1,H_2,H_3,H_4$ sırasındaysa boşluklarda mümkün olan eş sıraları yalnız

$$(W_3,W_4,W_1,W_2)\quad\text{ve}\quad(W_4,W_1,W_2,W_3)$$

olmak üzere ikidir. Bu nedenle

$$6\cdot2=12$$

düzen vardır.

**Neden doğru?** Kadınların iki geçerli boşluk eşleşmesi, her eşin iki komşu boşluğunun da dışarıda kalmasını sağlar.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Her iki takımın bir kez karşılaştığı ligde maçları takım çiftleri olarak sayma.

**Çözüm:**

Her maç, on iki takımdan seçilen sırasız bir takım çiftiyle belirlenir:

$$\binom{12}{2}=66$$

**Neden doğru?** Takımların ev sahibi–deplasman ayrımı yapılmadığı ve yalnız bir maç oynandığı için çiftin sırası önemli değildir.

## Soru 6

**Doğru cevap:** B

**Kazanım:** İki özel elemandan tam olarak birinin uçlarda bulunduğu dizilişleri aşamalı sayma.

**Çözüm:**

Uçta bulunacak özel kitap $2$, bulunacağı uç $2$ biçimde seçilir. Diğer uçta $A$ ve $B$ dışındaki beş kitaptan biri bulunmalıdır; bunun $5$ seçeneği vardır. Kalan beş kitap içteki yerlere $5!$ biçimde dizilir:

$$2\cdot2\cdot5\cdot5!=2400$$

**Neden doğru?** Diğer uca özel olmayan bir kitap yerleştirilmesi, $A$ ve $B$'den tam olarak birinin uçta olmasını garanti eder.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Çift miktarlı özdeş nesne dağıtımını değişken dönüşümüyle sayma.

**Çözüm:**

Kutulardaki top sayıları

$$x_i=2y_i\qquad(i=1,2,3,4)$$

biçiminde yazılır. Toplamdan

$$y_1+y_2+y_3+y_4=5$$

elde edilir. Negatif olmayan tam sayı çözüm sayısı

$$\binom{5+4-1}{4-1}=\binom83=56$$

dır.

**Neden doğru?** Sıfır da çift olduğundan kutuların boş kalmasına izin veren negatif olmayan tüm $y_i$ değerleri geçerlidir.

## Soru 8

**Doğru cevap:** D

**Kazanım:** İki grubun da temsil edildiği kurul seçimlerini tamamlayıcı durumla sayma.

**Çözüm:**

On kişiden dört kişilik kurul sayısı $\binom{10}{4}=210$'dur. Kurulun tamamının kadın olduğu $\binom54=5$ ve tamamının erkek olduğu yine $5$ durum çıkarılır:

$$210-5-5=200$$

**Neden doğru?** En az bir kadın ve en az bir erkek bulunmamasının iki ayrık biçimi, kurulun tek cinsiyetten oluşmasıdır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Belirli sayıda tek rakam içeren sayılarda sıfırın ilk basamak etkisini ayırma.

**Çözüm:**

Dört tek rakamdan üçü $\binom43=4$, beş çift rakamdan biri $5$ biçimde seçilir. Seçilen dört rakam kısıtlamasız

$$4\cdot5\cdot4!=480$$

diziliş verir. Çift rakam olarak $0$ seçildiğinde, dört farklı tek-rakam üçlüsü için başında sıfır bulunan $3!=6$ diziliş geçersizdir:

$$480-4\cdot6=456$$

**Neden doğru?** Sıfır seçilmediğinde bütün permütasyonlar geçerli; seçildiğinde yalnız başta bulunduğu dizilişler geçersizdir.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Zorunlu ve yasak eleman koşullu sıralı seçimleri sayma.

**Çözüm:**

$A$ kitabı zorunlu, $B$ kitabı yasaktır. Geriye kullanılabilir beş kitaptan üçü

$$\binom53=10$$

biçimde seçilir. $A$ ile birlikte seçilen dört farklı kitap $4!=24$ biçimde sıralanır:

$$10\cdot24=240$$

**Neden doğru?** Zorunlu kitap da dört raf konumundan herhangi birinde bulunabileceği için seçilen kitapların tamamı birlikte sıralanır.
