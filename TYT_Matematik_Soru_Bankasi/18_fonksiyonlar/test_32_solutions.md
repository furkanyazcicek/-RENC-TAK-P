# Konu 18 — Fonksiyonlar

## Test 32 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Birbirine dönüşen iki girdiyi kullanarak fonksiyon değerlerini denklem sistemiyle bulma.

**Çözüm:**

$A=f(2)$ ve $B=f(-1)$ olsun. Bağıntıda $x=2$ ve $x=-1$ yazılırsa

$$A+2B=6,$$
$$B+2A=9$$

elde edilir. İlk denklemin iki katından ikinci denklem çıkarılırsa $3B=3$, yani $B=1$ olur. İlk denklemden $A=4$ bulunur.

**Neden doğru?** $1-2=-1$ ve $1-(-1)=2$ olduğundan seçilen iki girdi aynı iki fonksiyon değerini yer değiştirerek verir.

**Çeldirici notu:** Yalnız $x=2$ yazmak iki bilinmeyenli tek denklem bıraktığı için $f(2)$ değerini belirlemeye yetmez.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Sınırlandırılmış tanım kümesinde ikinci dereceden fonksiyonun ters değerini bulma.

**Çözüm:**

$f^{-1}(0)=x$ olması $f(x)=0$ demektir:

$$x^2-6x+5=0 \Rightarrow (x-1)(x-5)=0.$$

Adaylar 1 ve 5'tir. Tanım kümesi $[3,\infty)$ olduğundan yalnız $x=5$ geçerlidir.

**Neden doğru?** Tanım kümesi parabolün tepe noktasından başlayan sağ kolunu seçerek fonksiyonu bire bir yapar.

**Çeldirici notu:** İki cebirsel kökü de kabul etmek, ters fonksiyon için verilen tanım kümesi kısıtını yok sayar.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Karekök iç fonksiyonu ile rasyonel dış fonksiyonun tanım koşullarını birleştirme.

**Çözüm:**

Önce $f(x)$ tanımlı olmalıdır:

$$x+1\ge0 \Rightarrow x\ge-1.$$

Ayrıca $g$ fonksiyonunun paydası sıfır olamayacağından $f(x)\ne2$ gerekir:

$$\sqrt{x+1}\ne2 \Rightarrow x\ne3.$$

Tanım kümesi $[-1,3)\cup(3,\infty)$ olur.

**Neden doğru?** İç fonksiyonun çıktısı dış fonksiyonun yasaklı girdisi olan 2'ye eşit olamaz.

**Çeldirici notu:** Yalnız karekök koşulunu kullanmak $x=3$ değerini yanlışlıkla tanım kümesine ekler.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Rasyonel fonksiyon denkleminde gerçek çözüm sayısını bulma.

**Çözüm:**

$$\frac2{x^2+1}=1 \Rightarrow x^2+1=2.$$

Buradan $x^2=1$ ve $x=\pm1$ bulunur. İki gerçek çözüm vardır.

**Neden doğru?** Her iki kök de paydayı sıfır yapmaz ve denklemi sağlar.

**Çeldirici notu:** $x^2=1$ denkleminde yalnız pozitif kökü almak bir çözümü kaybettirir.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Bir eşlemesi sabitlenmiş bire bir ve örten fonksiyonları permütasyonla sayma.

**Çözüm:**

Bir tanım kümesi elemanının görüntüsü sabitlendiğinde kalan dört eleman, kalan dört görüntüye bire bir gönderilmelidir. Bu eşlemelerin sayısı

$$4!=24$$

olur.

**Neden doğru?** Eşit büyüklükteki sonlu kümelerde bire bir ve örten fonksiyonlar permütasyon oluşturur.

**Çeldirici notu:** $5!$ hesaplamak önceden sabitlenen eşlemeyi yeniden seçime açar.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Sonlu bir fonksiyon döngüsünde yüksek sayıda yineleme sonucunu bulma.

**Çözüm:**

Eşlemeler

$$1\to2\to4\to3\to1$$

biçiminde dört adımlık bir döngü oluşturur. $2026=4\cdot506+2$ olduğundan 2026 uygulama, iki uygulamayla aynı sonucu verir:

$$f^{2026}(1)=f^2(1)=4.$$

**Neden doğru?** Her dört uygulamada başlangıç değerine dönülür.

**Çeldirici notu:** 2026'yı fonksiyonun girdisi sanmak, yineleme sayısı ile tanım kümesi elemanını karıştırır.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Bileşke fonksiyonun tersindeki bir değeri cebirsel olarak bulma.

**Çözüm:**

$$h(x)=g(f(x))=(2x-1)+3=2x+2.$$

$h^{-1}(10)=x$ için $h(x)=10$ yazılır:

$$2x+2=10 \Rightarrow x=4.$$

**Neden doğru?** Önce bileşkenin kuralı doğru sırayla kurulmuş, ardından 10 çıktısını üreten girdi bulunmuştur.

**Çeldirici notu:** $f\circ g$ bileşkesini hesaplamak sabit terimi değiştirerek farklı bir ters değer üretir.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Tepe noktası biçimindeki ikinci dereceden fonksiyonun en küçük değerini belirleme.

**Çözüm:**

Her gerçek $x$ ve $m$ için $(x-m)^2\ge0$'dır. Bu nedenle

$$f_m(x)=(x-m)^2+2\ge2.$$

$x=m$ seçildiğinde eşitlik sağlanır ve en küçük değer 2 olur.

**Neden doğru?** $m$ tepe noktasının yatay konumunu değiştirir; ordinatı olan 2'yi değiştirmez.

**Çeldirici notu:** En küçük değeri $m$ sanmak yatay konum ile fonksiyon çıktısını karıştırır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Kesin azalan fonksiyonda çıktı eşitsizliğini girdi eşitsizliğine ters yönde aktarma.

**Çözüm:**

$f$ kesin azalan olduğundan

$$f(3a-2)\le f(a+4)$$

eşitsizliği girdiler için

$$3a-2\ge a+4$$

anlamına gelir. Buradan $2a\ge6$ ve $a\ge3$ bulunur.

**Neden doğru?** Azalan fonksiyon sıralamayı ters çevirir; eşitlik durumu da korunur.

**Çeldirici notu:** Eşitsizliğin yönünü korumak kesin artan fonksiyon kuralını yanlış uygulamak olur.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Açık ve kapalı uç noktaları bulunan basamak grafiğinden fonksiyon değeri okuma.

**Çözüm:**

$x=-1$ noktasında $y=2$ düzeyindeki daire açık, $y=-1$ düzeyindeki nokta kapalıdır. Bu nedenle $f(-1)=-1$'dir. $x=2$ noktasında ise $y=-1$ düzeyi açık, $y=3$ düzeyi kapalıdır; dolayısıyla $f(2)=3$ olur.

$$f(-1)+f(2)=-1+3=2.$$

**Neden doğru?** Açık nokta ilgili uç değerinin alınmadığını, kapalı nokta alındığını gösterir.

**Çeldirici notu:** Aynı apsisteki açık noktayı fonksiyon değeri sanmak her iki girdide de yanlış basamağı seçtirir.
