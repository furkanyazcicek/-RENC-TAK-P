# Konu 18 — Fonksiyonlar

## Test 38 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Ardışık fonksiyon değeri farklarını biriktirerek uzak bir değeri bulma.

**Çözüm:**

$x=0,1,2,3$ için artışlar sırasıyla 2, 3, 4 ve 5'tir. Bu nedenle

$$f(4)=f(0)+2+3+4+5=1+14=15.$$

**Neden doğru?** Ardışık dört farkın toplamı $f(4)-f(0)$ değerini verir.

**Çeldirici notu:** Yalnız $x=3$ yazmak son birimlik artışı bulur; önceki üç artışı içermez.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Paydada bulunan karekökün tanım koşulunu ikinci dereceden eşitsizlikle bulma.

**Çözüm:**

Karekök paydada olduğundan kök içi sıfırdan büyük olmalıdır:

$$x^2-5x+6>0 \Rightarrow (x-2)(x-3)>0.$$

Bu eşitsizlik $x<2$ veya $x>3$ için sağlanır. Tanım kümesi $(-\infty,2)\cup(3,\infty)$ olur.

**Neden doğru?** 2 ve 3 değerleri paydayı sıfır yaptığı için aralığa dâhil edilmez.

**Çeldirici notu:** Kök içi için büyük-eşit kullanmak paydanın sıfır olduğu iki değeri yanlışlıkla tanım kümesine katar.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Pay ve payda ilişkisini kullanarak rasyonel fonksiyonun görüntü kümesini belirleme.

**Çözüm:**

$$f(x)=\frac{x^2}{x^2+1}=1-\frac1{x^2+1}.$$

$x=0$ için en küçük değer 0 alınır. İkinci terim her zaman pozitif olduğundan fonksiyon 1 olamaz; $|x|$ büyüdükçe 1'e yaklaşır. Görüntü kümesi $[0,1)$'dir.

**Neden doğru?** Alt uç elde edilir, üst sınır ise yalnız yaklaşım değeridir.

**Çeldirici notu:** Fonksiyon değerlerinin 1'e yaklaşmasını 1'i aldığı biçiminde yorumlamak sağ ucu yanlış kapatır.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Bir eşlemesi sabitlenmiş bire bir fonksiyonları sıralı seçimle sayma.

**Çözüm:**

Bir görüntü kullanılmıştır. Kalan üç girdi için sırasıyla 5, 4 ve 3 kullanılmamış görüntü seçeneği vardır:

$$5\cdot4\cdot3=60.$$

**Neden doğru?** Sabitlenen görüntü dâhil hiçbir hedef elemanı ikinci kez kullanılamaz.

**Çeldirici notu:** $6\cdot5\cdot4\cdot3$ hesaplamak sabitlenen eşlemeyi yeniden seçime açar.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Tanım kümesi sınırlandırılmış ikinci dereceden fonksiyonun ters değerini bulma.

**Çözüm:**

$f^{-1}(8)=x$ için

$$(x-2)^2-1=8 \Rightarrow (x-2)^2=9.$$

Adaylar $x=5$ ve $x=-1$'dir. Tanım kümesi $[2,\infty)$ olduğundan yalnız $x=5$ geçerlidir.

**Neden doğru?** Tanım kümesi parabolün sağ kolunu seçerek fonksiyonu bire bir yapar.

**Çeldirici notu:** İki cebirsel kökü de kabul etmek ters fonksiyon için verilen tanım aralığını yok sayar.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Fonksiyonun çift bileşenini simetrik değerler toplamından bulma.

**Çözüm:**

Tanıma göre

$$E(x)=\frac{4x^2+2}{2}=2x^2+1.$$

Bu nedenle

$$E(2)=2\cdot2^2+1=9.$$

**Neden doğru?** $f(x)$ ile $f(-x)$ ortalaması fonksiyonun çift bileşenini verir.

**Çeldirici notu:** Verilen toplamı ikiye bölmeden doğrudan $x=2$ yazmak 18 sonucuna götürür.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Parametreli doğrusal fonksiyon bileşkesinde katsayı karşılaştırması yapma.

**Çözüm:**

$$f(g(x))=a(x+a)+1=ax+a^2+1.$$

Bu ifade $3x+10$ olduğundan $a=3$ bulunur. Sabit terim de $3^2+1=10$ eşitliğini sağlar.

**Neden doğru?** Hem doğrusal katsayı hem sabit terim aynı parametre değerinde verilen fonksiyonla uyuşur.

**Çeldirici notu:** Yalnız sabit terimden $a^2=9$ yazmak pozitif ve negatif iki aday bırakır; $x$ katsayısı doğru işareti belirler.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Mutlak değerli bileşke denkleminin çözümlerini ve çarpımını bulma.

**Çözüm:**

$$f(g(x))=|(x+1)-1|=|x|.$$

$|x|=2$ eşitliğinin çözümleri $-2$ ve 2'dir. Çarpımları $-4$ olur.

**Neden doğru?** Bileşke içindeki yatay ötelemeler birbirini götürür ve iki simetrik çözüm kalır.

**Çeldirici notu:** Mutlak değer denkleminde yalnız pozitif çözümü almak çarpım yerine tek kök verir.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Kesin azalan fonksiyonda çıktı eşitsizliğini ters yönde girdi eşitsizliğine dönüştürme.

**Çözüm:**

$f$ kesin azalan olduğundan

$$f(a-1)>f(2a+3)$$

eşitsizliği $a-1<2a+3$ anlamına gelir. Buradan $a>-4$ bulunur.

**Neden doğru?** Azalan fonksiyonda daha büyük çıktı daha küçük girdiye karşılık gelir.

**Çeldirici notu:** Eşitsizlik yönünü korumak kesin artan fonksiyon kuralını yanlış uygular.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Bir fonksiyon grafiğinden en büyük çıktı değerini okuma.

**Çözüm:**

Grafik aşağı yönlü bir paraboldür. En yüksek noktası $(3,16)$ olduğundan cismin yerden yüksekliğinin en büyük değeri 16 metredir.

**Neden doğru?** Aşağı yönlü parabolde tepe noktasının ordinatı fonksiyonun maksimum değeridir.

**Çeldirici notu:** Tepe noktasının apsisi olan 3, yüksekliği değil bu yüksekliğe ulaşılan zamanı gösterir.
