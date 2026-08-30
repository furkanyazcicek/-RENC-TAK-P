# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 38 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Sabit toplamlı rakam kümelerini bulup sıfırın ilk basamak etkisiyle sıralama.

**Çözüm:**

Toplamı $10$ olan dört farklı rakam kümesi

$$\{0,1,2,7\},\{0,1,3,6\},\{0,1,4,5\},\{0,2,3,5\},\{1,2,3,4\}$$

olmak üzere beş tanedir. Sıfır içeren dört kümenin her biri

$$4!-3!=18$$

geçerli sayı oluşturur. Sıfır içermeyen son küme $4!=24$ sayı oluşturur:

$$4\cdot18+24=96$$

**Neden doğru?** Sıfır içeren kümelerde yalnız sıfırın başta olduğu dizilişler çıkarılır.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Genel konumdaki doğruların düzlemde oluşturduğu en fazla bölge sayısını belirleme.

**Çözüm:**

İlk başta düzlem bir bölgedir. Her yeni doğru, önceki doğrularla farklı noktalarda kesildiğinde üzerindeki parça sayısı kadar yeni bölge oluşturur. Altı doğru için toplam

$$1+6+\binom62=1+6+15=22$$

olur.

**Neden doğru?** Paralellik ve üçlü kesişim olmaması, her yeni doğrunun önceki doğrular tarafından mümkün olan en fazla parçaya ayrılmasını sağlar.

## Soru 3

**Doğru cevap:** E

**Kazanım:** En az bir tekrar içeren dizileri tamamlayıcı durumla sayma.

**Çözüm:**

Dört basamağın her biri için on seçenek olduğundan toplam dizi sayısı $10^4=10\,000$'dir. Dört rakamın da farklı olduğu diziler

$$P(10,4)=10\cdot9\cdot8\cdot7=5040$$

tanedir. En az bir tekrar içeren dizi sayısı

$$10\,000-5040=4960$$

olur.

**Neden doğru?** “En az bir tekrar” koşulunun tamamlayıcısı, bütün rakamların birbirinden farklı olmasıdır.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Sabit uç konumu altında başka iki kişinin komşuluğunu tamamlayıcı yolla sayma.

**Çözüm:**

Ceren'in bulunacağı uç $2$ biçimde seçilir. Kalan altı kişi, kalan konumlara $6!=720$ biçimde yerleşir. Ayşe ile Berk yan yana olduğunda blok yöntemiyle

$$2\cdot5!=240$$

diziliş vardır. Her Ceren ucu için uygun sayı $720-240=480$ olduğundan

$$2\cdot480=960$$

elde edilir.

**Neden doğru?** Ceren uçta sabitken Ayşe–Berk komşuluğu kalan altı konum içinde sıradan bir blok olarak sayılabilir.

## Soru 5

**Doğru cevap:** B

**Kazanım:** İki rengin de temsil edildiği seçimleri tek renkli seçimleri çıkararak sayma.

**Çözüm:**

Yedi bilyeden üçü $\binom73=35$ biçimde seçilir. Yalnız kırmızı bilyelerden oluşan $\binom43=4$ ve yalnız mavi bilyelerden oluşan $\binom33=1$ seçim çıkarılır:

$$35-4-1=30$$

**Neden doğru?** Her iki rengin de bulunmamasının tek olasılıkları seçimin tamamen kırmızı veya tamamen mavi olmasıdır.

## Soru 6

**Doğru cevap:** C

**Kazanım:** İki ayrı komşuluk yasağını içerme-dışlama ile birlikte uygulama.

**Çözüm:**

Toplam diziliş sayısı $7!=5040$'tır. $A,B$ yan yanaysa $2\cdot6!=1440$, $C,D$ yan yanaysa yine $1440$ diziliş vardır. Her iki çift de yan yanaysa iki blok, kalan üç kitapla birlikte beş birim oluşturur:

$$2\cdot2\cdot5!=480$$

İçerme-dışlamayla

$$5040-1440-1440+480=2640$$

bulunur.

**Neden doğru?** Her iki yasak komşuluğun birlikte oluştuğu dizilişler iki kez çıkarıldığı için bir kez geri eklenir.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Çift seçimini karşılıklı oturma koşullu dairesel dizilişle birleştirme.

**Çözüm:**

İki evli çift dört çift arasından

$$\binom42=6$$

biçimde seçilir. Seçilen dört kişiden biri sabitlenince eşi karşısına zorunlu olarak oturur. Diğer çift kalan iki sandalyeye $2$ farklı sırada yerleşir. Toplam

$$6\cdot2=12$$

olur.

**Neden doğru?** Bir kişi sabitlenerek dönme tekrarları kaldırılmış, iki eşin karşılıklı konumları tek olarak belirlenmiştir.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Farklı nesneleri etiketli kişilere eşit miktarlarda dağıtma.

**Çözüm:**

Ayşe'nin kitapları $\binom93=84$, Berk'in kitapları kalan altı kitaptan $\binom63=20$ biçimde seçilir. Son üç kitap Ceren'e kalır:

$$84\cdot20=1680$$

**Neden doğru?** Kişiler adlandırıldığı ve kişi içindeki kitap sırası önemli olmadığı için ardışık kombinasyonlar çarpılır.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Tekrarlı harf dizilişlerinde uçların aynı olduğu durumları tüm dizilişlerden çıkarma.

**Çözüm:**

Kısıtlamasız diziliş sayısı

$$\frac{8!}{(2!)^4}=2520$$

dir. İlk ve son harf aynıysa bu harf türü $4$ biçimde seçilir. O türün iki harfi uçlara yerleşir; kalan altı harf

$$\frac{6!}{(2!)^3}=90$$

biçimde sıralanır. İstenen sayı

$$2520-4\cdot90=2160$$

olur.

**Neden doğru?** Her harf türünden yalnız iki tane bulunduğu için aynı uçlu durumlar farklı türler arasında kesişmez.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Farklı iki görevle eş yetkili iki üyeyi aynı seçimde belirleme.

**Çözüm:**

Başkan $6$, başkan yardımcısı kalan beş kişiden $5$ biçimde seçilir. Kalan dört öğrenciden eş yetkili iki kurul üyesi

$$\binom42=6$$

biçimde belirlenir:

$$6\cdot5\cdot6=180$$

**Neden doğru?** Başkanlık görevleri farklı olduğu için sıralı, iki kurul üyeliği eş değerli olduğu için sırasız seçilir.
