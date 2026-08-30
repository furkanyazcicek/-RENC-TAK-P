# Konu 18 — Fonksiyonlar

## Test 02 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Eşleme şemasından fonksiyon ve ters fonksiyon değeri okuma.

**Çözüm:**

Şemada $1$ elemanının $2$ elemanına gönderildiği görülür. Bu nedenle $f(1)=2$ ve $f^{-1}(2)=1$ olur. Ayrıca şemadan $f(0)=-1$ okunur. Dolayısıyla

$$f^{-1}(2)+f(0)=1+(-1)=0$$

bulunur.

**Neden doğru?** B seçeneği, ters fonksiyonda okun yönünün tersine çevrildiğini ve $0$ girdisinin çıktısını birlikte doğru kullanır.

**Çeldirici notu:** $f^{-1}(2)$ ifadesini $\frac{1}{f(2)}$ biçiminde yorumlamak veya şemadaki giriş ile çıkışı karıştırmak yanlış sonuçlara götürür.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Fonksiyon grafiğinden artan, sabit ve azalan olduğu aralıkları belirleme.

**Çözüm:**

Grafik $x=-4$ ile $x=-2$ arasında yükselmekte, $x=-2$ ile $x=1$ arasında sabit kalmakta, $x=1$ ile $x=3$ arasında alçalmakta ve $x=3$ ile $x=5$ arasında yeniden yükselmektedir. Bu nedenle fonksiyonun kesinlikle azalan olduğu aralık $[1,3]$'tür.

**Neden doğru?** C seçeneğinde $x$ arttıkça $f(x)$ grafiğin tamamı boyunca azalır.

**Çeldirici notu:** Sabit parçayı azalan kabul etmek veya grafiği soldan sağa değil sağdan sola okumak diğer seçeneklere yöneltebilir.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Fonksiyonun dönüştürülmüş girdisinden istenen fonksiyon değerini bulma.

**Çözüm:**

$f(5)$ değerine ulaşmak için $x+1=5$ olmalıdır. Buradan $x=4$ bulunur. Verilen eşitlikte $x=4$ yazılırsa

$$f(5)=2\cdot4-3=5$$

olur.

**Neden doğru?** D seçeneği, bağıntıdaki girdiyi doğrudan $x$ sanmak yerine $x+1$ ifadesini 5'e eşitleyerek bulunur.

**Çeldirici notu:** Eşitlikte doğrudan $x=5$ yazmak $f(6)$ değerini hesaplatır; bu, istenen girdiyi bir birim kaydırır.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Verilen bir bileşke fonksiyon kuralından dıştaki doğrusal fonksiyonun değerini belirleme.

**Çözüm:**

$f(5)$ değerini bulmak için önce $g(x)=5$ olacak $x$ belirlenir:

$$2x+3=5 \Rightarrow x=1.$$

Bu durumda

$$f(5)=f(g(1))=(f\circ g)(1)=6\cdot1-1=5$$

bulunur.

**Neden doğru?** E seçeneği, $g$ fonksiyonunun çıktısını 5 yapan girdiyi bileşke kuralında kullanır.

**Çeldirici notu:** $(f\circ g)(5)$ değerini hesaplamak, $f(5)$ yerine $f(g(5))$ değerini verir.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Sonlu bir tanım kümesinin fonksiyon altındaki görüntü kümesini oluşturma.

**Çözüm:**

Tanım kümesindeki elemanların görüntüleri

$$f(-2)=6,\quad f(-1)=2,\quad f(0)=0,\quad f(1)=0,\quad f(2)=2$$

olur. Aynı çıktılar görüntü kümesinde bir kez yazılacağından

$$f(A)=\{0,2,6\}$$

ve $|f(A)|=3$ bulunur.

**Neden doğru?** A seçeneği, tekrar eden $0$ ve $2$ çıktılarını kümede yalnızca birer kez sayar.

**Çeldirici notu:** Her girdiyi ayrı bir görüntü elemanı sanmak veya negatif girdilerin karesini negatif almak eleman sayısını değiştirir.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Mutlak değer fonksiyonundaki yatay ve düşey ötelemeleri yorumlama.

**Çözüm:**

Verilen $f$ kuralı kullanılırsa

$$g(x)=f(x-3)-2=|(x-3)+1|-2=|x-2|-2$$

elde edilir. Mutlak değer ifadesi $x=2$ için sıfır olduğundan $g$ fonksiyonunun en küçük değeri $-2$'dir. Bu değer $(2,-2)$ noktasında alınır.

**Neden doğru?** B seçeneği hem yatay öteleme sonucunda oluşan $x=2$ tepe apsisini hem de $-2$ düşey ötelemesini doğru gösterir.

**Çeldirici notu:** $x-3$ ifadesini grafiği sola öteliyor sanmak veya dışarıdaki $-2$'yi apsise uygulamak yaygın hatalardır.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Ters fonksiyon değerini gerçek bir durum içinde giriş ve çıkış değişimi olarak yorumlama.

**Çözüm:**

$M$ fonksiyonu kitapçık sayısını toplam ücrete dönüştürür. Ters fonksiyon ise toplam ücretten kitapçık sayısına gider. Ayrıca

$$M(10)=18\cdot10+60=240$$

olduğundan $M^{-1}(240)=10$ eşitliği, toplam ücreti 240 TL olan siparişte 10 kitapçık basıldığını belirtir.

**Neden doğru?** C seçeneği, ters fonksiyonda toplam ücretin girdi; kitapçık sayısının çıktı olduğunu doğru yorumlar.

**Çeldirici notu:** Fonksiyon ile ters fonksiyonun giriş ve çıkış büyüklüklerini yer değiştirmemek, birimleri anlamsız biçimde eşleştirir.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Sonlu bir kümede tanımlı fonksiyonun bire bir olma koşulunu parametre üzerinden kullanma.

**Çözüm:**

Bire bir fonksiyonda farklı girdilerin çıktıları farklı olmalıdır. Bu nedenle $m-1$ değeri ne 2'ye ne de 5'e eşit olabilir:

$$m-1\ne2 \Rightarrow m\ne3,$$

$$m-1\ne5 \Rightarrow m\ne6.$$

Dolayısıyla $m$, $3$ ve $6$ değerlerini alamaz.

**Neden doğru?** D seçeneği, ikinci girdinin çıktısını mevcut iki çıktıyla eşitleyen değerlerin ikisini de içerir.

**Çeldirici notu:** $m-1$ yerine doğrudan $m$'yi 2 ve 5 ile karşılaştırmak yanlış yasaklı değerler üretir.

## Soru 9

**Doğru cevap:** E

**Kazanım:** İkinci dereceden bir fonksiyonun en küçük değeri ile görüntü kümesi arasındaki ilişkiyi kullanma.

**Çözüm:**

Tam kareye tamamlarsak

$$f(x)=x^2-4x+a=(x-2)^2+a-4$$

olur. $(x-2)^2$ ifadesinin en küçük değeri 0 olduğundan $f$ fonksiyonunun en küçük değeri $a-4$'tür. Görüntü kümesinin alt ucu 1 verildiğine göre

$$a-4=1 \Rightarrow a=5$$

bulunur.

**Neden doğru?** E seçeneği, parabolün tepe noktasındaki minimum değeri görüntü kümesinin alt sınırına eşitler.

**Çeldirici notu:** Tepe noktasının apsisi olan 2'yi minimum değer sanmak veya tam kareye tamamlarken 4'ün işaretini karıştırmak hataya yol açar.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Rasyonel bir fonksiyonun görüntü kümesini çıktı değişkeni üzerinden belirleme.

**Çözüm:**

$y=\frac{x-1}{x+2}$ yazıp $x$ yalnız bırakılırsa

$$y(x+2)=x-1,$$

$$x(y-1)=-(1+2y),$$

$$x=\frac{-(1+2y)}{y-1}$$

elde edilir. Bu ifade $y\ne1$ olan her gerçek sayı için bir gerçek $x$ verir. $y=1$ için ise

$$\frac{x-1}{x+2}=1$$

eşitliği $x-1=x+2$ biçiminde çelişkiye dönüşür. Dolayısıyla 1 görüntü kümesinde bulunmaz.

**Neden doğru?** A seçeneği, fonksiyonun alabileceği bütün gerçek değerlerden yalnızca 1'i çıkarır.

**Çeldirici notu:** Tanım kümesinden çıkarılan $-2$ ile görüntü kümesinden çıkarılan $1$ değerini karıştırmak temel çeldiricidir.
