# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 48 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Sıra istatistiği belirli olan alt kümeleri küçük ve büyük elemanları ayırarak sayma.

**Çözüm:**

İkinci küçük sayının 4 olması için 4 mutlaka seçilmelidir. 4'ten küçük $1,2,3$ sayılarından tam biri, 4'ten büyük altı sayıdan ise ikisi seçilir.

$$\binom31\binom62=3\cdot15=45$$

**Neden doğru?** Tam bir küçük eleman seçilmesi 4'ü ikinci sıraya, iki büyük eleman seçilmesi de toplam eleman sayısını dörde tamamlar.

**Çeldirici notu:** 4'ten küçük iki sayı seçmek 4'ü üçüncü küçük eleman yapar.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Kafes yollarını yön değişimi sayısına göre pozitif uzunluklu hareket bloklarına ayırma.

**Çözüm:**

Üç yön değişimi, yolun dört hareket bloğundan oluşması demektir.

Yol sağa hareketle başlarsa blok türleri sağ–yukarı–sağ–yukarı olur. Beş sağ adımın iki pozitif bloğa dağılımı $\binom41=4$, dört yukarı adımın iki pozitif bloğa dağılımı $\binom31=3$ biçimdedir. Bu durumda $4\cdot3=12$ yol vardır.

Yol yukarı hareketle başlarsa aynı sayım $3\cdot4=12$ yol verir. Toplam

$$12+12=24$$

olur.

**Neden doğru?** Başlangıç yönü ve dört pozitif blok uzunluğu, yolu tek biçimde belirler; tam üç blok sınırı yön değişimine karşılık gelir.

**Çeldirici notu:** Bloklardan birine sıfır adım vermek gerçekte daha az sayıda yön değişimi oluşturur.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Deney sonuçlarını sabit sayıda bir sonuç ve karşılaştırmalı kalan sonuçlarla sayma.

**Çözüm:**

Beraberlikle biten iki maçın konumları $\binom52=10$ biçimde seçilir. Kalan üç maçta ev sahibi galibiyeti sayısının daha fazla olması için sonuçlar şu dağılımlardan birine sahip olmalıdır:

- Üç ev sahibi galibiyeti: 1 dizi.
- İki ev sahibi, bir deplasman galibiyeti: $\binom32=3$ dizi.

Her beraberlik konumu seçimi için 4 olasılık vardır:

$$\binom52(1+3)=10\cdot4=40$$

**Neden doğru?** Beraberlikler ayrıldıktan sonra üç kararlı maçta ev sahibi galibiyeti sayısını üstün yapan bütün dağılımlar sayılmıştır.

**Çeldirici notu:** Bir ev sahibi ve iki deplasman galibiyeti üstünlük koşulunun tersini sağlar.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Farklı büyüklükte ve adlandırılmamış grupları belirli üyelik koşuluyla oluşturma.

**Çözüm:**

Dört kişilik grupta Ayşe'nin yanına gelecek üç kişi kalan yedi kişiden $\binom73=35$ biçimde seçilir. Kalan dört kişi iki adlandırılmamış ikili gruba

$$\frac{4!}{2!\,2!\,2!}=3$$

biçimde ayrılır. Toplam

$$35\cdot3=105$$

ayrım vardır.

**Neden doğru?** Dörtlü grup büyüklüğüyle ayırt edilir; kalan iki ikili ise adlandırılmadığı için kendi aralarındaki yer değişimi yeni ayrım oluşturmaz.

**Çeldirici notu:** İki ikiliyi kırmızı ve mavi gibi adlandırmak sonucu iki katına çıkarır.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Belirli türdeki harfleri uçlar dışındaki konumlara yerleştirme.

**Çözüm:**

KİTAP sözcüğünün sesli harfleri İ ve A'dır. Bu iki harf, ortadaki üç konumdan ikisine $\binom32$ biçimde seçilen yerlere $2!$ sırayla yerleşir. K, T ve P harfleri kalan üç konuma $3!$ biçimde dizilir.

$$\binom32 2!3!=3\cdot2\cdot6=36$$

**Neden doğru?** Sesliler orta üç konuma yerleştirildiğinde iki uçta da ünsüz bulunması otomatik olarak sağlanır.

**Çeldirici notu:** Sesli harfler birbirinden farklı olduğu için seçilen iki iç konuma iki farklı sırayla yerleşebilir.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Zorunlu eleman içeren ve ardışık eleman taşımayan alt kümeleri sayma.

**Çözüm:**

5 seçildiği için 4 ve 6 seçilemez. Kalan iki eleman

$$\{1,2,3,7,8,9\}$$

kümesinden seçilecektir. Bu kümeden iki sayı $\binom62=15$ biçimde seçilir. Ardışık olan $(1,2),(2,3),(7,8),(8,9)$ çiftleri uygun değildir.

$$15-4=11$$

**Neden doğru?** 4 ve 6 baştan çıkarıldığı için seçilen diğer sayıların 5 ile ardışıklığı; dört yasak çift çıkarıldığında da kendi aralarındaki ardışıklıkları engellenmiştir.

**Çeldirici notu:** Yalnız 4 ve 6'yı çıkarmak, örneğin 1 ile 2'nin birlikte seçilmesine hâlâ izin verir.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Kesin sıralı pozitif tam sayı çözümlerini en küçük elemana göre sayma.

**Çözüm:**

$x>y>z$ olduğundan çözümler, toplamı 12 olan üç farklı pozitif sayının azalan sıralarıdır. Sayı kümeleri

$$\{1,2,9\},\{1,3,8\},\{1,4,7\},\{1,5,6\},\{2,3,7\},\{2,4,6\},\{3,4,5\}$$

olmak üzere 7 tanedir. Her kümenin azalan sırası tek olduğundan 7 sıralı üçlü vardır.

**Neden doğru?** Kesin eşitsizlik her üçlüde elemanların yerlerini tek biçimde belirler; ayrıca bir permütasyon çarpanı gerekmez.

**Çeldirici notu:** Aynı üç sayının altı farklı sıralamasını saymak $x>y>z$ koşulunu gözden kaçırır.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Sıralı seçimlerde belirli kişilerin en az birini tümleyenle sayma.

**Çözüm:**

On yarışmacıdan ilk üç derecenin tüm sıralı seçim sayısı $P(10,3)=720$'dir. Ayşe ile Berk'in ikisinin de ilk üçte olmadığı sıralamalar, kalan sekiz kişiden

$$P(8,3)=8\cdot7\cdot6=336$$

biçimde oluşur. İstenen sayı

$$720-336=384$$

olur.

**Neden doğru?** Tüm sıralamalardan iki belirli kişinin de dışarıda olduğu durumlar çıkarılınca en az birinin bulunduğu sıralamalar kalır.

**Çeldirici notu:** Ayşe ve Berk'i ayrı ayrı sayıp toplamak, ikisinin de ilk üçte olduğu sıralamaları iki kez sayar.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Farklı büyüklükte iki grupta ayrı bulunma koşulunu uygulama.

**Çözüm:**

Üç kişilik grupta Ayşe ile Berk'ten tam biri bulunmalıdır. Bu kişi 2 biçimde seçilir. Grubun kalan iki üyesi diğer altı kişiden $\binom62=15$ biçimde seçilir. Beş kişilik grup kalan kişilerden zorunlu olarak oluşur.

$$2\binom62=2\cdot15=30$$

**Neden doğru?** Grup büyüklükleri farklı olduğu için üç kişilik grup seçildiğinde iki grubun kimliği belirlenir ve ayrıca grup sırası sayılmaz.

**Çeldirici notu:** Ayşe ile Berk'in hangi gruplarda bulunduğunu iki kez daha sıralamak aynı ayrımı tekrar sayar.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Sıralı takım seçiminde zorunlu üyenin yasaklı konumunu uygulama.

**Çözüm:**

Ayşe'nin koşacağı sıra 2, 3 veya 4 olmak üzere 3 biçimde belirlenir. Kalan üç sıra için diğer altı öğrenciden sıralı olarak üç kişi seçilir:

$$3\cdot P(6,3)=3\cdot6\cdot5\cdot4=360$$

**Neden doğru?** Ayşe'nin takımda bulunması konumu seçilerek sağlanmış, ilk sırada olmaması yalnız üç uygun konum kullanılarak uygulanmıştır.

**Çeldirici notu:** Önce dört kişiyi seçip sonra $4!$ ile sıralamak, Ayşe'nin ilk sırada olduğu düzenleri ayrıca çıkarmayı gerektirir.
