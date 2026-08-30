# Konu 18 — Fonksiyonlar

## Test 43 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Fonksiyonel bağıntıyı ardışık girdiler için kullanma.

**Çözüm:**

$a=b=1$ için

$$f(2)=f(1)+f(1)+2=3+3+2=8$$

bulunur. Ardından $a=2$ ve $b=1$ alınır:

$$f(3)=f(2)+f(1)+4=8+3+4=15.$$

**Neden doğru?** Bağıntı, önce bilinen değerden $f(2)$'yi, sonra da $f(3)$'ü üretmektedir.

**Çeldirici notu:** $2ab$ terimini her adımda sabit 2 almak ikinci kullanımda eksik toplamaya yol açar.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Kök içindeki rasyonel ifadenin işaretini inceleyerek tanım kümesini belirleme.

**Çözüm:**

Kök içi için

$$\frac{5-x}{x+1}\ge0$$

ve $x\ne-1$ olmalıdır. Kritik değerler $-1$ ile 5'tir. İşaret incelemesi sonucu tanım kümesi

$$(-1,5]$$

olur.

**Neden doğru?** 5 kök içini sıfır yaptığı için alınır; $-1$ paydayı sıfır yaptığı için alınmaz.

**Çeldirici notu:** Pay ile paydayı ayrı ayrı pozitif istemek, oran işaretini aralıklar üzerinde incelemeyi eksik bırakır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Sınırlandırılmış mutlak değer fonksiyonunun görüntü kümesini bulma.

**Çözüm:**

$|x-3|$ ifadesi $[0,5]$ aralığında en küçük değerini $x=3$ için 0, en büyük değerini $x=0$ için 3 alır. Bir eklendiğinde

$$1\le f(x)\le4$$

elde edilir.

**Neden doğru?** Her iki uç değer de tanım aralığındaki girdilerde gerçekleşir; bu yüzden aralık kapalıdır.

**Çeldirici notu:** Yalnız $x=0$ ve $x=5$ uçlarını karşılaştırmak iç noktadaki en küçük değeri kaçırır.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Bir eşlemesi sabitlenmiş fonksiyonların sayısını çarpma yoluyla bulma.

**Çözüm:**

$a$ elemanının görüntüsü sabittir. $b$ ve $c$ elemanlarının her biri için $B$ kümesinden bağımsız olarak 4 seçim yapılabilir:

$$4\cdot4=16.$$

**Neden doğru?** Fonksiyon olma koşulu her girdiye tam bir görüntü seçilmesini ister; farklı girdilerin aynı görüntüye gitmesine izin verir.

**Çeldirici notu:** Soruda bire bir olma koşulu bulunmadığı hâlde görüntüleri farklı seçmek seçenek sayısını gereksiz azaltır.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Bileşke değerinden parametre belirleme.

**Çözüm:**

$f(0)=a$ olduğundan

$$g(f(0))=g(a)=a^2-1=8.$$

Buradan $a^2=9$ ve $a=\pm3$ bulunur. $a>0$ koşulu nedeniyle $a=3$'tür.

**Neden doğru?** Pozitiflik koşulu, ikinci dereceden eşitliğin iki adayından yalnız birini bırakır.

**Çeldirici notu:** $g(0)$ değerini önce hesaplamak bileşke sırasını ters okumaktır.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Ters fonksiyon değerini çıktıdan girdiye dönerek bulma.

**Çözüm:**

$f^{-1}\left(\frac12\right)=x$ demek $f(x)=\frac12$ demektir. Buna göre

$$\frac{2x-1}{x+3}=\frac12$$

eşitliğinden $4x-2=x+3$ ve $3x=5$ bulunur. Dolayısıyla $x=\frac53$'tür.

**Neden doğru?** İstenen değer ters fonksiyonun kuralını bütünüyle çıkarmadan da doğrudan bulunabilir.

**Çeldirici notu:** Kesrin pay ve paydasını ayrı ayrı ters çevirmek fonksiyon tersini değil, ifadenin çarpmaya göre tersini oluşturur.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Simetrik girdilerde tek dereceli terimlerin birbirini götürdüğünü kullanma.

**Çözüm:**

$f(x)+f(-x)$ toplamında $x^3$ ve $-2x$ terimleri yok olur:

$$f(x)+f(-x)=6x^2+2.$$

$x=2$ için sonuç $6\cdot4+2=26$ olur.

**Neden doğru?** $x$ ve $-x$ girdilerinin toplamı yalnız polinomun çift kısmını iki katıyla bırakır.

**Çeldirici notu:** $f(-2)$ hesaplanırken yalnız $x^3$ teriminin işaretini değiştirmek doğrusal terimi gözden kaçırır.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Parçalı fonksiyonda değer kümelerinin çakışmasını inceleyerek bire birlik koşulu bulma.

**Çözüm:**

$x<0$ kolu kesin artandır ve görüntüleri $(-\infty,1)$ aralığındadır. İkinci kolun bu değerleri tekrar etmemesi ve kendi içinde bire bir olması için $a-1>0$ olmalıdır. Bu durumda ikinci kolun görüntüleri $[1,\infty)$ olur.

$$a-1>0 \Rightarrow a>1.$$

**Neden doğru?** İki kolun görüntü aralıkları ayrılır ve her kol kendi içinde kesin artan olur.

**Çeldirici notu:** $a=1$ için ikinci kol sabit olduğundan farklı girdiler aynı görüntüye gider.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Kesin azalan fonksiyonda çıktı eşitsizliğini ters yönlü girdi eşitsizliğine dönüştürme.

**Çözüm:**

$f$ kesin azalan olduğundan

$$f(2a-1)\ge f(5-a) \Rightarrow 2a-1\le5-a.$$

Buradan $3a\le6$ ve $a\le2$ bulunur.

**Neden doğru?** Azalan fonksiyon, girdilerin sırasını çıktılarda tersine çevirir.

**Çeldirici notu:** Eşitsizlik yönünü korumak artan fonksiyon varsaymak anlamına gelir.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Sözel bir geometrik modeli fonksiyon denklemi ve tanım aralığıyla çözme.

**Çözüm:**

$$x(12-x)=32$$

eşitliği

$$x^2-12x+32=0 \Rightarrow (x-4)(x-8)=0$$

biçimine gelir. Adaylar 4 ve 8'dir. $x$ kısa kenar olduğundan $0<x\le6$ koşulu yalnız $x=4$ değerini kabul eder.

**Neden doğru?** Tanım aralığı, aynı alana sahip iki kenar adayından kısa olanı seçer.

**Çeldirici notu:** İkinci dereceden denklemin iki kökünü de cevap sanmak modeldeki kısa kenar koşulunu yok sayar.
