# Konu 18 — Fonksiyonlar

## Test 30 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Fonksiyonel eşitlikte uygun girdi seçerek simetrik iki fonksiyon değerinin toplamını bulma.

**Çözüm:**

Sorulan ifade $f(1)+f(3)$ olduğundan verilen bağıntıda $x=1$ yazılır:

$$f(1)+f(4-1)=2\cdot1^2-8\cdot1+14=8.$$

**Neden doğru?** $4-x$ ifadesi $x=1$ için 3 olur ve sol taraf doğrudan sorulan toplamı verir.

**Çeldirici notu:** $f(1)$ ve $f(3)$ değerlerini ayrı ayrı bulmaya çalışmak, bağıntının yalnız toplamı belirlediğini gözden kaçırır.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Parçalı fonksiyon denkleminde aday çözümleri parça koşullarıyla sınama.

**Çözüm:**

İlk parçada $x+2=2$ eşitliği $x=0$ verir; ancak bu parçada $x<0$ olmalıdır, dolayısıyla aday geçersizdir. İkinci parçada

$$x^2+1=2 \Rightarrow x=\pm1$$

bulunur. $x\ge0$ koşulunu yalnız $x=1$ sağlar.

**Neden doğru?** Cebirsel adaylardan yalnız kendi parçasının aralık koşulunu sağlayan değer çözüm olabilir.

**Çeldirici notu:** Parça koşullarını kontrol etmeden $0,-1,1$ değerlerinin tamamını kabul etmek fazladan çözüm üretir.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Ters fonksiyon bileşkesini verilen eşleme değerlerinden geriye doğru izleme.

**Çözüm:**

$f(5)=7$ olduğundan $f^{-1}(7)=5$'tir. Ayrıca $f(2)=5$ olduğundan $f^{-1}(5)=2$ olur. Dolayısıyla

$$(f^{-1}\circ f^{-1})(7)=2.$$

**Neden doğru?** Bileşke sağdan sola uygulanmış ve her ters adım verilen eşlemeyi geri çevirmiştir.

**Çeldirici notu:** $f^{-1}$ fonksiyonunu yalnız bir kez uygulamak 5 sonucunda erken durdurur.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Karekök dış fonksiyonuyla kurulan bileşkenin tanım kümesini eşitsizlikle bulma.

**Çözüm:**

$$f(g(x))=\sqrt{(x^2-4)-1}=\sqrt{x^2-5}.$$

Kök içi negatif olmamalıdır:

$$x^2-5\ge0 \Rightarrow x\le-\sqrt5 \text{ veya } x\ge\sqrt5.$$

Tanım kümesi $(-\infty,-\sqrt5]\cup[\sqrt5,\infty)$ olur.

**Neden doğru?** Eşitlik durumunda kök içi sıfırdır ve karekök tanımlıdır; bu yüzden uçlar alınır.

**Çeldirici notu:** $x^2\ge5$ eşitsizliğini $x\ge\sqrt5$ biçiminde tek yönlü çözmek negatif aralığı kaybettirir.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Sonlu bir tanım kümesinin görüntü kümesini tekrarları ayıklayarak bulma.

**Çözüm:**

Fonksiyon değerleri

$$f(-1)=3,\quad f(0)=0,\quad f(1)=-1,\quad f(2)=0,\quad f(3)=3$$

olur. Görüntü kümesi $\{-1,0,3\}$ olduğundan elemanlar toplamı 2'dir.

**Neden doğru?** Görüntü kümesinde aynı çıktı birden fazla kez yazılmaz.

**Çeldirici notu:** Beş çıktının tamamını toplamak, kümedeki farklı elemanların toplamı yerine değerler listesinin toplamını verir.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Belirli görüntü koşulları altındaki fonksiyonları çarpma ilkesiyle sayma.

**Çözüm:**

$f(1)$ için seçim yoktur; görüntü $a$ olarak sabittir. $f(2)$ için $a$ dışındaki 3 seçenek, $f(3)$ ve $f(4)$ için ayrı ayrı 4'er seçenek vardır:

$$1\cdot3\cdot4\cdot4=48.$$

**Neden doğru?** Her tanım kümesi elemanının görüntü seçimi, verilen iki koşul dışında bağımsızdır.

**Çeldirici notu:** Fonksiyonun bire bir veya örten olması gerektiğini varsaymak soruda bulunmayan bir kısıt ekler.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Bileşke fonksiyonun belirli bir değerinden doğrusal parametre bulma.

**Çözüm:**

Önce $g(3)=2$ bulunur. Ardından

$$(f\circ g)(3)=f(2)=2a+2=8$$

olduğundan $2a=6$ ve $a=3$ elde edilir.

**Neden doğru?** Bileşke işleminde önce içteki $g$, sonra dıştaki $f$ uygulanmıştır.

**Çeldirici notu:** $f(3)$ değerini hesaplamak bileşkenin iç fonksiyonunu atlar.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Ters fonksiyonun kuralından özgün fonksiyonun bir değerini bulma.

**Çözüm:**

$f(7)=y$ olsun. Bu eşitlik $f^{-1}(y)=7$ anlamına gelir. Verilen kurala göre

$$2y-5=7 \Rightarrow 2y=12 \Rightarrow y=6.$$

**Neden doğru?** Ters fonksiyon, 7 çıktısını onu üreten $y$ girdisine geri taşır.

**Çeldirici notu:** Ters fonksiyon kuralında doğrudan $x=7$ yazmak $f^{-1}(7)$ değerini bulur; sorulan $f(7)$ değildir.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Parabolün tekdüze olduğu sol aralığın sınırını tepe noktasından belirleme.

**Çözüm:**

$$f(x)=x^2+2x=(x+1)^2-1$$

olduğundan tepe noktasının apsisi $-1$'dir. Fonksiyon $(-\infty,-1]$ aralığında kesin azalan ve bire birdir. Aralığı sağa daha fazla uzatmak aynı çıktıyı veren simetrik girdiler oluşturur. Bu nedenle en büyük $m=-1$'dir.

**Neden doğru?** Parabol tepe noktasına kadar tek yönde değişir; yön değişimi bire birliği bozar.

**Çeldirici notu:** Tepe noktasının ordinatı olan $-1$ ile apsisin aynı çıkması bu soruda rastlantısaldır; aralık sınırı apsisten belirlenir.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Periyodik fonksiyonda büyük bir girdiyi eş değer küçük girdiye indirgeme.

**Çözüm:**

$$2027=-1+338\cdot6$$

olduğundan 2027 ile $-1$ girdileri 6'nın tam katı kadar farklıdır. Periyodiklikten

$$f(2027)=f(-1)=4$$

bulunur.

**Neden doğru?** Fonksiyonun değeri girdi her 6 birim değiştiğinde tekrar eder.

**Çeldirici notu:** 2027'yi 6'ya bölüp yalnız kalanı kullanırken negatif eş değer olan $-1$ ile 5'in aynı periyot sınıfında olduğunu gözden kaçırmak gereksiz işlem doğurur.
