# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 30 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Farklı harflerle oluşturulan dizilerin alfabetik sırasını bloklar hâlinde sayma.

**Çözüm:**

Harflerin alfabetik sırası $A,E,K,L,M$'dir. İlk harfi $A$ veya $E$ olan dizilerin tamamı **KALEM**'den önce gelir:

$$2\cdot4!=48$$

$K$ ile başlayıp ikinci harfi $A$ olan dizilere geçildiğinde üçüncü yerde $L$'den önce yalnız $E$ bulunabilir; bu durumda kalan iki harf $2!=2$ biçimde sıralanır. Böylece **KALEM**'den önce $48+2=50$ dizi vardır. Sözcük $51$. sıradadır.

**Neden doğru?** Her önceki alfabetik tercih, ardından gelen kullanılmamış harflerin bütün permütasyonlarını tek bir blok olarak oluşturur.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Belirli iki rakamdan tam olarak birinin kullanıldığı sayıları sıfır kısıtıyla sayma.

**Çözüm:**

$1$ ile $2$'den kullanılacak rakam $2$ biçimde seçilir. Diğer dört rakam, $\{0,3,4,5,6\}$ kümesinden seçilir.

$0$ seçilmezse dört rakamın tamamı $3,4,5,6$ olur ve seçilen beş rakam $5!=120$ sayı oluşturur. $0$ seçilirse, sıfır dışındaki dört rakamdan biri dışarıda bırakılır; bunun $4$ seçeneği vardır. Her seçimde geçerli sayı sayısı

$$5!-4!=96$$

dır. Bir özel rakam seçimi için $120+4\cdot96=504$, iki seçim için

$$2\cdot504=1008$$

bulunur.

**Neden doğru?** Sıfırın bulunduğu ve bulunmadığı rakam kümeleri ayrı sayıldığı için ilk basamak yasağı eksiksiz uygulanır.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Çokgenin köşe çiftlerinden kenarları çıkararak köşegen sayısını belirleme.

**Çözüm:**

Ongenin köşelerinden seçilen her ikili bir doğru parçası belirler:

$$\binom{10}{2}=45$$

Bunların $10$ tanesi çokgenin kenarıdır. Köşegen sayısı

$$45-10=35$$

olur.

**Neden doğru?** Her köşe çifti ya bir kenar ya da bir köşegen verir; iki grup birbiriyle kesişmez.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Dairesel düzende karşıtlık ve komşuluk koşullarını birlikte uygulama.

**Çözüm:**

Dönme eşdeğerliğini kaldırmak için Ceren sabitlenir; Deniz'in yeri karşı sandalye olarak belirlenir. Kalan altı sandalye iki ayrı üçlü sıra oluşturur. Bu boş sandalyeler arasında, Ceren veya Deniz'in sandalyesine uğramadan yan yana olan $4$ sandalye çifti vardır.

Ayşe ile Berk'in çifti $4$, bu çiftteki sıraları $2$, kalan dört kişinin yerleşimi $4!$ biçimde seçilir:

$$4\cdot2\cdot4!=4\cdot2\cdot24=192$$

**Neden doğru?** Ayşe ile Berk'in Ceren ya da Deniz üzerinden komşu sayılması mümkün olmadığından yalnızca tamamen boş kalan ardışık sandalye çiftleri kullanılır.

## Soru 5

**Doğru cevap:** D

**Kazanım:** En az bir uç konumun seçildiği kombinasyonları tamamlayıcı durumla sayma.

**Çözüm:**

Altı koltuktan üçü kısıtlamasız $\binom63=20$ biçimde seçilir. İki uç koltuğun da seçilmediği durumda üç koltuk ortadaki dört koltuktan seçilir:

$$\binom43=4$$

İstenen sayı $20-4=16$'dır.

**Neden doğru?** En az bir uç seçilmesi koşulunun tek tamamlayıcısı, her iki ucun da seçilmemesidir.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Takım seçimini takım içindeki sıralı görev dağıtımıyla birleştirme.

**Çözüm:**

Dört kişilik takım $\binom{10}{4}=210$ biçimde seçilir. Takım içinden kaptan $4$, sözcü kalan üç kişiden $3$ biçimde belirlenir:

$$210\cdot4\cdot3=2520$$

**Neden doğru?** Kaptan ve sözcü farklı görevler olduğundan bu iki kişinin yer değiştirmesi yeni bir sonuç oluşturur.

## Soru 7

**Doğru cevap:** A

**Kazanım:** İki özel kişinin birlikte bulunması veya birlikte bulunmaması durumlarını ayırma.

**Çözüm:**

Ayşe ile Berk birlikte kurulda ise diğer üç kişi kalan yedi öğrenciden

$$\binom73=35$$

biçimde seçilir. İkisi de kurulda değilse beş kişi kalan yedi öğrenciden

$$\binom75=21$$

biçimde seçilir. Toplam $35+21=56$ olur.

**Neden doğru?** İki durum birbirini dışlar ve “ikisi birlikte ya da ikisi de değil” koşulunun tamamını kapsar.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Sabit yönlü bir blok koşuluyla başka bir yan yana gelmeme koşulunu birlikte sayma.

**Çözüm:**

$A$ hemen $B$'nin solunda olacağından **AB** tek ve iç sırası sabit bir bloktur. Bu blokla diğer beş kitap toplam altı birim oluşturur ve $6!=720$ biçimde sıralanır.

Diğer belirli iki kitap da yan yana olursa bunlar iki iç sıraya sahip ikinci bir blok oluşturur. İki blok ve kalan üç kitap, beş birim olarak

$$2\cdot5!=240$$

biçimde sıralanır. İstenen sayı

$$720-240=480$$

olur.

**Neden doğru?** İlk blok zorunlu tutulurken ikinci blok oluşan yasak durumların tamamını ve yalnız onları temsil eder.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Palindromik sayılarda ilk yarının tüm sayıyı belirlemesini ve ilk basamak kısıtını kullanma.

**Çözüm:**

Altı basamaklı bir palindrom $abccba$ biçimindedir. Kullanılan üç rakam farklı olmalıdır. $a$ sıfır olamayacağı için $9$, $b$ rakamı $a$ dışında ve sıfır dahil $9$, $c$ ise ilk iki rakam dışında $8$ biçimde seçilir:

$$9\cdot9\cdot8=648$$

**Neden doğru?** İlk üç rakam seçildiğinde son üç rakam palindrom koşulu nedeniyle tek olarak belirlenir.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Tek pozitif parçalara ayırma koşulunu değişken dönüşümüyle sayma.

**Çözüm:**

Kutulardaki top sayıları

$$x_1=2a+1,\qquad x_2=2b+1,\qquad x_3=2c+1$$

biçiminde yazılır. Toplamdan

$$2(a+b+c)+3=9\Rightarrow a+b+c=3$$

elde edilir. Negatif olmayan tam sayı çözüm sayısı

$$\binom{3+3-1}{3-1}=\binom52=10$$

dur.

**Neden doğru?** Her pozitif tek sayı tek bir negatif olmayan değişken değerine karşılık geldiğinden dönüşüm bire birdir.
