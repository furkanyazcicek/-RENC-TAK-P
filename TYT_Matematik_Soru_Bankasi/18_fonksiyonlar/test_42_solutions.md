# Konu 18 — Fonksiyonlar

## Test 42 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Önceki değere bağlı fonksiyon bağıntısını ardışık olarak yineleme.

**Çözüm:**

$x=0,1,2$ için sırasıyla

$$f(1)=2f(0)=2,$$
$$f(2)=2f(1)+1=5,$$
$$f(3)=2f(2)+2=12$$

olur.

**Neden doğru?** Her yeni değer bir önceki fonksiyon değerini kullanarak üretilir.

**Çeldirici notu:** Bağıntıyı $f(x+1)=f(x)+2x$ biçiminde okumak fonksiyon değerinin iki katını kaybettirir.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Kök içindeki rasyonel ifadenin işaretini ve payda koşulunu birlikte inceleme.

**Çözüm:**

Kök içi için

$$\frac{x+3}{2-x}\ge0$$

ve $x\ne2$ olmalıdır. Kritik değerler $-3$ ve 2'dir. İşaret incelemesi sonucu ifade $[-3,2)$ aralığında negatif değildir.

**Neden doğru?** $-3$ payı sıfır yapar ve alınır; 2 paydayı sıfır yaptığı için alınmaz.

**Çeldirici notu:** Pay ve paydayı aynı anda negatif kabul etmek bu kesirde işaretlerin kritik noktalar çevresindeki yönünü yanlış yorumlar.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Mutlak değerli rasyonel ifadenin görüntü kümesini yardımcı değişkenle belirleme.

**Çözüm:**

$t=|x-1|\ge0$ olsun. Fonksiyon

$$\frac{t}{t+1}=1-\frac1{t+1}$$

biçimindedir. $t=0$ için 0 alınır; $t$ büyüdükçe değer 1'e yaklaşır ancak 1 olmaz. Görüntü kümesi $[0,1)$'dir.

**Neden doğru?** Alt uç elde edilirken üst sınır yalnız yaklaşım değeridir.

**Çeldirici notu:** $t$ sınırsız büyüdüğü için fonksiyonun da sınırsız olduğunu düşünmek pay ve paydanın birlikte büyüdüğünü gözden kaçırır.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Belirli eşlemeleri sabitlenmiş bire bir ve örten fonksiyonları permütasyonla sayma.

**Çözüm:**

Üç eşleme sabitlendiğinde kalan dört tanım kümesi elemanı, kalan dört hedef elemanına bire bir gönderilmelidir. Bu eşlemelerin sayısı

$$4!=24$$

olur.

**Neden doğru?** Yedi elemanlı eşit kümeler arasındaki bire bir ve örten fonksiyonlar permütasyondur.

**Çeldirici notu:** $7!$ hesaplamak önceden sabitlenen üç eşlemeyi yeniden seçime açar.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Parabolün sol koluyla sınırlandırılmış ters fonksiyon değerini bulma.

**Çözüm:**

$f^{-1}(11)=x$ için

$$(x-1)^2+2=11 \Rightarrow (x-1)^2=9.$$

Adaylar $x=4$ ve $x=-2$'dir. Tanım kümesi $(-\infty,1]$ olduğundan yalnız $x=-2$ geçerlidir.

**Neden doğru?** Tanım kümesi parabolün sol kolunu seçerek fonksiyonu bire bir yapar.

**Çeldirici notu:** Pozitif karekök adayını otomatik seçmek verilen tanım aralığını yok sayar.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Polinomun çift kısmını simetrik değerler ortalamasıyla ayırma.

**Çözüm:**

$f(x)$ ile $f(-x)$ toplandığında tek kuvvetli terimler yok olur:

$$f(x)+f(-x)=4x^2+10.$$

Dolayısıyla

$$E(x)=2x^2+5$$

ve $E(2)=8+5=13$ olur.

**Neden doğru?** Simetrik ortalama yalnız çift dereceli ve sabit terimleri korur.

**Çeldirici notu:** Toplamı ikiye bölmemek fonksiyonun çift kısmı yerine iki katını verir.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Parametreli doğrusal bileşkede katsayı karşılaştırması yapma.

**Çözüm:**

$$g(f(x))=3(ax+2)-a=3ax+6-a.$$

Bu ifade $6x+4$ olduğundan $3a=6$ ve $a=2$ bulunur. Sabit terim de $6-2=4$ eşitliğini sağlar.

**Neden doğru?** Aynı parametre hem doğrusal katsayıyı hem sabit terimi doğru üretmektedir.

**Çeldirici notu:** Yalnız sabit terimi eşitlemek parametreyi eksik bir koşulla belirlemeye çalışır.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Bire bir fonksiyonda eşit çıktılardan eşit girdilere geçerek ikinci dereceden denklem çözme.

**Çözüm:**

$f$ bire bir olduğundan

$$a+2=a^2-4$$

olmalıdır. Buradan

$$a^2-a-6=0 \Rightarrow (a-3)(a+2)=0$$

elde edilir. Çözümlerin toplamı $3+(-2)=1$'dir.

**Neden doğru?** Bire birlik aynı çıktının iki farklı girdiden gelmesini engeller.

**Çeldirici notu:** Fonksiyonun açık kuralı verilmediği için işlem yapılamayacağını düşünmek bire birlik bilgisini gözden kaçırır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Kesin artan fonksiyon eşitsizliğini rasyonel girdi eşitsizliğine dönüştürme.

**Çözüm:**

$f$ kesin artan olduğundan

$$\frac1{a-1}>0$$

olmalıdır. Pay pozitif olduğuna göre paydanın da pozitif olması gerekir:

$$a-1>0 \Rightarrow a>1.$$

**Neden doğru?** Artan fonksiyon çıktıların sırasını girdilerde aynı yönde korur.

**Çeldirici notu:** Yalnız $a\ne1$ koşulunu yazmak kesrin tanımlı olmasını sağlar ancak pozitif olmasını sağlamaz.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Fonksiyon ve ters fonksiyon grafiklerinin $y=x$ doğrusuna göre simetrisini kullanma.

**Çözüm:**

$(2,5)$ noktası $f$ grafiğinde olduğundan $f(2)=5$'tir. Ters fonksiyon bu eşlemeyi geri çevirir:

$$f^{-1}(5)=2.$$

Dolayısıyla $(5,2)$ noktası $f^{-1}$ grafiğinde bulunur.

**Neden doğru?** Ters grafikte bir noktanın apsis ve ordinatı yer değiştirir.

**Çeldirici notu:** Yalnız bir koordinatın işaretini değiştirmek yansıma eksenini $y=x$ yerine koordinat eksenlerinden biri sanmaktır.
