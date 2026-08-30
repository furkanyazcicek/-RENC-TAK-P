# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 26 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Belirli bir noktadan geçmeyen en kısa yolları tüm yollardan çıkararak sayma.

**Çözüm:**

Kısıtlama olmadan beş sağ ve dört yukarı adım

$$\binom94=126$$

biçimde sıralanır. $C$'den geçen yolların ilk parçasında iki sağ ve iki yukarı adım bulunduğundan $\binom42=6$ seçenek vardır. $C$'den sonra üç sağ ve iki yukarı adım kaldığı için ikinci parça $\binom52=10$ biçimde seçilir.

$$126-6\cdot10=66$$

**Neden doğru?** Tüm en kısa yollar, $C$'den geçenler ve geçmeyenler olarak ayrık iki gruba ayrılır.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Tam olarak bir sembolün tekrarlandığı dizileri aşamalı sayma.

**Çözüm:**

İki kez kullanılacak rakam $5$ biçimde, birer kez kullanılacak diğer iki rakam kalan dört rakamdan $\binom42=6$ biçimde seçilir. Seçilen dört rakamın, tekrarlı olan ikisi özdeş olduğundan diziliş sayısı $\frac{4!}{2!}=12$'dir.

$$5\cdot6\cdot12=360$$

**Neden doğru?** Tekrarlanan rakamın seçimi, diğer rakamların seçimi ve bunların sıralanması birbirini izleyen bağımsız aşamalardır.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Tekrarlı harflerin dizilişinde boşluk yöntemini kullanma.

**Çözüm:**

Önce $A,A,A,S$ harfleri sıralanır. Üç A özdeş olduğundan bu sıralama

$$\frac{4!}{3!}=4$$

biçimde yapılır. Oluşan dizilişin çevresinde ve harflerin arasında beş boşluk vardır. İki özdeş N, yan yana gelmemeleri için bu boşluklardan ikisine $\binom52=10$ biçimde yerleştirilir.

$$4\cdot10=40$$

**Neden doğru?** Her boşluğa en fazla bir N yerleştirmek, iki N'nin komşu olmasını doğrudan engeller.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte yan yana gelmeme koşulunu tüm durumdan çıkarma yoluyla kullanma.

**Çözüm:**

Altı kişinin dairesel diziliş sayısı $(6-1)!=120$'dir. Ayşe ile Berk yan yana kabul edilirse bir blok ve diğer dört kişi olmak üzere beş birim daire çevresine $(5-1)!=24$ biçimde oturur. Blok içindeki sıra iki farklıdır:

$$120-2\cdot24=72$$

**Neden doğru?** Yan yana olan ve olmayan düzenler tüm dairesel dizilişleri ayrık biçimde oluşturur.

## Soru 5

**Doğru cevap:** E

**Kazanım:** İlk basamakta sıfır kısıtı bulunan ve belirli sayıda çift rakam içeren sayıları durumlara ayırma.

**Çözüm:**

Kullanılabilecek çift rakamlar $0,2,4,6$, tek rakamlar $1,3,5,7$'dir. Önce iki çift ve üç tek rakam seçilip sıralansaydı

$$\binom42\binom43 5!=6\cdot4\cdot120=2880$$

diziliş elde edilirdi. Bunlardan başında sıfır bulunanlarda sıfırın yanına diğer üç çift rakamdan biri ve dört tek rakamdan üçü seçilir; kalan dört yer sıralanır:

$$3\binom43 4!=3\cdot4\cdot24=288$$

Bu nedenle sayı adedi $2880-288=2592$'dir.

**Neden doğru?** İlk hesap tüm rakam dizilerini kapsar; yalnızca sayı oluşturmayan, sıfırla başlayan diziler çıkarılır.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Dairesel oturma düzeninde karşılıklı iki konumu sabitleme.

**Çözüm:**

Dönme eşdeğerliğini kaldırmak için Ayşe'nin yeri sabitlenir. Berk'in karşısındaki yeri artık zorunludur. Kalan altı kişi, kalan altı sandalyeye

$$6!=720$$

biçimde oturur.

**Neden doğru?** Ayşe sabitlendikten sonra her geçerli dairesel düzen tam bir kez sayılır.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Farklı nesnelerin dizilişinde boşluk yöntemini ve sıralı yerleştirmeyi birlikte kullanma.

**Çözüm:**

Dört matematik kitabı $4!$ biçimde sıralanır. Çevrelerinde ve aralarında beş boşluk oluşur. Üç farklı fizik kitabı, yan yana gelmemeleri için bu beş boşluğun üçüne sıralı olarak

$$P(5,3)=5\cdot4\cdot3=60$$

biçimde yerleştirilir. Toplam

$$4!\cdot60=24\cdot60=1440$$

olur.

**Neden doğru?** Her boşluğa en fazla bir fizik kitabı yerleştirildiği için fizik kitaplarının komşuluğu engellenir.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Alt sınırlı özdeş nesne dağıtımında bir değişkenin çift olma koşulunu durumlara ayırma.

**Çözüm:**

Her çocuğa önce ikişer şeker verildiğinde geriye dört şeker kalır. Ayşe'nin toplam şeker sayısının çift olması için fazladan aldığı şeker sayısı $0$, $2$ veya $4$ olabilir.

- Ayşe $0$ ek şeker alırsa diğer üç çocuğa dağıtım sayısı $\binom62=15$,
- $2$ ek şeker alırsa $\binom42=6$,
- $4$ ek şeker alırsa $1$'dir.

Toplam $15+6+1=22$ dağıtım vardır.

**Neden doğru?** Başlangıçta verilen iki şeker çift olduğundan yalnızca Ayşe'nin aldığı ek şekerlerin tek-çiftliği önemlidir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Doğrusal bir sıradan komşu olmayan konumları seçme.

**Çözüm:**

$n$ konumdan komşu olmayan $r$ konum seçme sayısı $\binom{n-r+1}{r}$ biçimindedir. Burada

$$\binom{8-3+1}{3}=\binom63=20$$

olur.

**Neden doğru?** Seçilen koltukların arasına zorunlu birer boş koltuk ayrıldıktan sonra kalan serbest konumlar sıradan bir kombinasyonla seçilir.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Farklı kişileri etiketli gruplara belirli grup büyüklükleriyle dağıtma.

**Çözüm:**

Yedi öğrenci üç sınıfa ve her sınıfta en az iki kişi olacak biçimde dağıtıldığında sınıf büyüklükleri yalnızca $(3,2,2)$ olabilir. Üç kişilik sınıf $3$ biçimde seçilir. Bu sınıfa gidecek öğrenciler $\binom73=35$, kalan dört öğrenciden numarası küçük olan diğer sınıfa gidecek iki öğrenci $\binom42=6$ biçimde belirlenir.

$$3\cdot35\cdot6=630$$

**Neden doğru?** Sınıflar numaralı olduğu için iki kişilik grupların yer değiştirmesi yeni bir dağıtımdır ve ayrıca ikiye bölünmez.
