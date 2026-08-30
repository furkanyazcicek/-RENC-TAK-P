# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 29 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Belirli toplamı veren rakam kümelerini bulup farklı sıralarını sayma.

**Çözüm:**

$1$–$7$ arasındaki farklı üç rakamdan toplamı $12$ olan kümeler

$$\{1,4,7\},\ \{1,5,6\},\ \{2,3,7\},\ \{2,4,6\},\ \{3,4,5\}$$

olmak üzere beş tanedir. Her kümedeki üç farklı rakam $3!=6$ biçimde sıralanır:

$$5\cdot6=30$$

**Neden doğru?** Sıfır kullanılmadığı için her sıralama geçerli bir üç basamaklı sayı oluşturur.

## Soru 2

**Doğru cevap:** E

**Kazanım:** En az bir özel kişinin bulunduğu kurul seçimlerini tüm durumdan tamamlayıcı yoluyla sayma.

**Çözüm:**

On öğrenciden kısıtlamasız üç kişilik kurul sayısı $\binom{10}{3}=120$'dir. Ayşe ile Berk'in ikisinin de bulunmadığı kurullar diğer sekiz öğrenciden seçilir ve sayıları $\binom83=56$'dır:

$$120-56=64$$

**Neden doğru?** En az biri bulunma koşulunun tamamlayıcısı, iki özel kişinin de bulunmadığı tek durumdur.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Birden fazla yan yana gelme koşulunu ayrı bloklarla sayma.

**Çözüm:**

Üç kişilik grup bir blok, iki kişilik grup başka bir blok kabul edilir. Bu iki blok ile kalan üç kişi toplam beş birim oluşturur ve $5!$ biçimde sıralanır. Blokların içindeki kişiler sırasıyla $3!$ ve $2!$ biçimde yer değiştirir:

$$5!\cdot3!\cdot2!=120\cdot6\cdot2=1440$$

**Neden doğru?** İki özel grup birbirinden ayrıdır; her blok dış sıralamada tek bir birim, kendi içinde ise bağımsız bir permütasyondur.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Bir sıralamada hem konum aralığı hem de göreli sıra koşulunu birlikte kullanma.

**Çözüm:**

Ayşe birinci sıradaysa Berk için arkasında $7$, ikinci sıradaysa $6$, üçüncü sıradaysa $5$ konum vardır. Ayşe ile Berk'in sıralı konum çifti

$$7+6+5=18$$

biçimde seçilir. Kalan altı koşucu boş sıralara $6!$ biçimde yerleşir:

$$18\cdot6!=18\cdot720=12\,960$$

**Neden doğru?** Berk'in yeri her Ayşe konumu için yalnızca daha büyük sıra numaraları arasından seçilmiştir.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Özdeş renk dizilerinde ardışık tekrar üst sınırını boşluk dağıtımıyla sayma.

**Çözüm:**

Önce üç mavi kart yerleştirilince kırmızı kartlar için dört boşluk oluşur. Dört özdeş kırmızı kart bu boşluklara dağıtılır; hiçbir boşluğa üç veya daha fazla kırmızı gelmemelidir.

Üst sınır olmadan dağıtım sayısı $\binom73=35$'tir. Belirli bir boşluğa en az üç kırmızı gelmesi durumunda kalan bir kırmızı dört boşluğa $4$ biçimde dağıtılır. Dört boşluk için $4\cdot4=16$ yasak dağıtım vardır. İki boşlukta birden üçer kırmızı bulunması mümkün değildir.

$$35-16=19$$

**Neden doğru?** Aynı boşluğa yerleştirilen kırmızılar art arda gelir; her boşluğu en fazla ikiyle sınırlamak üçlü ardışıklığı tam olarak engeller.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Farklı nesneleri etiketli günlere eşit büyüklükte ve gün içi sırasız dağıtma.

**Çözüm:**

Pazartesi gününün iki sunumu $\binom62$, salı gününün iki sunumu kalan dörtten $\binom42$ biçimde seçilir. Son iki sunum çarşambaya kalır:

$$\binom62\binom42=15\cdot6=90$$

**Neden doğru?** Günler farklıdır; ancak aynı gün içindeki iki sunumun yer değiştirmesi yeni bir dağıtım değildir.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Farklı kişileri adlandırılmamış ikililere ayırma.

**Çözüm:**

Sekiz kişi önce $8!$ biçimde sıralanıp ardışık ikililer hâline getirilebilir. Her ikilideki iki kişinin sırası önemli olmadığı için $2^4$'e, dört eşleşmenin kendi aralarındaki sırası önemli olmadığı için $4!$'e bölünür:

$$\frac{8!}{2^4\cdot4!}=105$$

**Neden doğru?** Bölme işlemleri, aynı eşleşme kümesini üreten ikili içi ve ikililer arası bütün tekrarları kaldırır.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Dairesel renk dizilerini dönme simetrileri altında Burnside sayımıyla belirleme.

**Çözüm:**

Özdeşlik dönüşümü $\binom63=20$ boyamayı sabit bırakır. Bir ve beş adımlı döndürmelerde bütün konumlar aynı renk olmak zorunda kalacağından uygun boyama yoktur. İki ve dört adımlı döndürmelerde üçlü iki yörüngeden biri siyah seçilebilir; her dönüşüm $2$ boyamayı sabit bırakır. Üç adımlı döndürmede renk sayıları çift olmak zorunda olduğundan yine uygun boyama yoktur.

Burnside ortalaması

$$\frac{20+0+2+0+2+0}{6}=4$$

olur.

**Neden doğru?** Yalnız dönmeler eşdeğerlik oluşturduğu için ortalama altı dönme üzerinden alınır; yansımalar hesaba katılmaz.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Her sembolün kullanıldığı dizileri içerme-dışlama ilkesiyle sayma.

**Çözüm:**

Kısıtlamasız $3^6$ dizi vardır. Belirli bir harfin hiç kullanılmadığı $2^6$ dizi, üç harf için çıkarılır. Yalnız tek bir harfin kullanıldığı diziler bu işlemde fazla çıkarıldığından üçü geri eklenir:

$$3^6-3\cdot2^6+3=729-192+3=540$$

**Neden doğru?** İçerme-dışlama, birden fazla harfi eksik olan dizilerin doğru sayıda çıkarılmasını sağlar.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Özdeş nesne dağıtımında tam olarak belirli sayıda kutunun sabit miktar alması koşulunu sayma.

**Çözüm:**

Birer top alacak iki kutu $\binom42=6$ biçimde seçilir. Kalan sekiz top diğer iki kutuya dağıtılır. Bu iki kutunun da tam olarak bir top alan kutulardan olmaması için her biri en az iki top almalıdır. Olası sıralı miktar çiftleri

$$(2,6),(3,5),(4,4),(5,3),(6,2)$$

olmak üzere beş tanedir:

$$6\cdot5=30$$

**Neden doğru?** Kalan iki kutudan biri de bir top alsaydı tam olarak iki kutu koşulu bozulurdu; bu nedenle alt sınır ikidir.
