# Konu 18 — Fonksiyonlar

## Test 28 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Ardışık girdiler arasındaki fonksiyon değeri değişimlerini biriktirme.

**Çözüm:**

$x=0,1,2$ için eşitlik sırasıyla

$$f(1)-f(0)=1,$$
$$f(2)-f(1)=3,$$
$$f(3)-f(2)=5$$

sonuçlarını verir. Taraf tarafa toplandığında ara değerler sadeleşir:

$$f(3)-f(0)=1+3+5=9.$$

$f(0)=3$ olduğundan $f(3)=12$'dir.

**Neden doğru?** Ardışık farkların toplamı başlangıç ve bitiş değerleri arasındaki toplam değişimi verir.

**Çeldirici notu:** Yalnız $x=2$ yazıp son artışı hesaplamak önceki iki artışı gözden kaçırır.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Mutlak değerli fonksiyon denkleminde iki durumu değerlendirip çözümleri ilişkilendirme.

**Çözüm:**

$$|x-2|=3$$

eşitliğinden $x-2=3$ veya $x-2=-3$ olur. Çözümler $5$ ve $-1$ olduğundan toplamları 4'tür.

**Neden doğru?** Mutlak değeri 3 olan bir ifade hem 3'e hem $-3$'e eşit olabilir.

**Çeldirici notu:** Yalnız pozitif durumu almak çözümlerden birini kaybettirir.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Rasyonel bir iç fonksiyonla kurulan kareköklü bileşkenin tanım kümesini bulma.

**Çözüm:**

Bileşke

$$f(g(x))=\sqrt{\frac1{x-1}+2}=\sqrt{\frac{2x-1}{x-1}}$$

olur. Kök içinin negatif olmaması ve $x\ne1$ olması gerekir. İşaret incelemesinde kritik değerler $\frac12$ ve 1'dir:

$$\frac{2x-1}{x-1}\ge0 \Rightarrow x\in\left(-\infty,\frac12\right]\cup(1,\infty).$$

**Neden doğru?** $x=\frac12$ kök içini sıfır yaptığı için alınır; $x=1$ paydayı sıfır yaptığı için alınmaz.

**Çeldirici notu:** Pay ve paydayı ayrı ayrı pozitif kabul etmek, ikisinin de negatif olduğu ilk aralığı kaybettirir.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Rasyonel fonksiyonun alamadığı çıktı değerini denklem üzerinden belirleme.

**Çözüm:**

$y=f(x)$ yazalım:

$$y=\frac{2x-1}{x+3} \Rightarrow yx+3y=2x-1.$$

Buradan

$$x(y-2)=-1-3y$$

elde edilir. $y\ne2$ için bir $x$ bulunabilir. $y=2$ yazılırsa $2x+6=2x-1$ gibi olanaksız bir eşitlik çıkar. Bu nedenle görüntü kümesi $\mathbb{R}\setminus\{2\}$'dir.

**Neden doğru?** Yalnız $y=2$ değeri hiçbir gerçek girdi tarafından üretilemez.

**Çeldirici notu:** Tanım kümesinden çıkarılan $-3$ değerini görüntü kümesinden de çıkarmak girdi ile çıktıyı karıştırır.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Sonlu kümeler arasındaki fonksiyonları toplamdan sabit fonksiyonları çıkararak sayma.

**Çözüm:**

Her dört girdi için iki çıktı seçeneği olduğundan toplam $2^4=16$ fonksiyon vardır. Hedef kümenin her bir elemanı için birer tane olmak üzere 2 sabit fonksiyon bulunur. Sabit olmayanların sayısı

$$16-2=14$$

olur.

**Neden doğru?** Sabit fonksiyonda dört girdinin tamamı aynı hedef elemanına gönderilir.

**Çeldirici notu:** Sabit olmayanı örten ile aynı sanmak, iki çıktıdan yalnız birinin kullanıldığı sabit olmayan fonksiyonları atlar.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Doğrusal fonksiyonun ikinci bileşkesinde katsayı karşılaştırması yapma.

**Çözüm:**

$$f(f(x))=a(ax+b)+b=a^2x+ab+b.$$

$a>0$ ve $a^2=9$ olduğundan $a=3$'tür. Sabit terimler için

$$ab+b=b(a+1)=-8$$

yazılır. $4b=-8$ olduğundan $b=-2$ ve $a+b=1$ bulunur.

**Neden doğru?** Eşitlik her gerçek $x$ için sağlandığından doğrusal ifadelerin karşılıklı katsayıları eşittir.

**Çeldirici notu:** $a^2=9$ eşitliğinden $a=-3$ almak verilen $a>0$ koşuluna aykırıdır.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Tanım kümesi sınırlandırılmış karekök fonksiyonunun ters değerini bulma.

**Çözüm:**

$f^{-1}(5)=x$ olması $f(x)=5$ demektir:

$$\sqrt{x+1}=5 \Rightarrow x+1=25 \Rightarrow x=24.$$

**Neden doğru?** Bulunan 24 değeri verilen $[-1,\infty)$ tanım kümesindedir.

**Çeldirici notu:** $5^2$ sonucundan 1'i çıkarmamak ters işlem zincirini eksik bırakır.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Bir fonksiyon grafiğinin yatay ve düşey ötelenmesini cebirsel olarak ifade etme.

**Çözüm:**

$f$ grafiğinin tepe noktası $(0,0)$, $g$ grafiğinin tepe noktası $(2,1)$'dir. Grafik önce 2 birim sağa, ardından 1 birim yukarı ötelenmiştir. Bu dönüşüm

$$g(x)=f(x-2)+1$$

biçiminde yazılır.

**Neden doğru?** $x$ yerine $x-2$ yazmak grafiği sağa, fonksiyona 1 eklemek yukarı öteler.

**Çeldirici notu:** Yatay ötelemede işareti grafik yönüyle aynı sanmak $f(x+2)$ seçeneğine götürür.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Kesin azalan fonksiyonda çıktı eşitsizliğinin yönünü girdilere aktarabilme.

**Çözüm:**

$f$ kesin azalan olduğundan daha büyük çıktı daha küçük girdiye karşılık gelir:

$$|a|<3.$$

Buradan $-3<a<3$ bulunur.

**Neden doğru?** Daha büyük çıktı, kesin azalan fonksiyonda daha küçük girdiye karşılık gelir.

**Çeldirici notu:** $|a|<3$ eşitsizliğinde uçları dâhil etmek sıkı eşitsizliği yanlış kapatır.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Geometrik bir durumu ikinci dereceden fonksiyonla modelleyip en büyük değeri bulma.

**Çözüm:**

Kenarlar $x$ ve $12-x$ santimetredir. Alan

$$A(x)=x(12-x)=-x^2+12x=-(x-6)^2+36$$

olur. Kareli ifade en az 0 olduğundan alanın en büyük değeri 36'dır.

**Neden doğru?** En büyük alan, iki kenarın da 6 cm olduğu kare durumunda alınır.

**Çeldirici notu:** Çevreyi doğrudan iki kenarın toplamı sanıp $24-x$ kullanmak modelin temel koşulunu bozar.
