# Konu 18 — Fonksiyonlar

## Test 35 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Üç fonksiyon değerinden ikinci dereceden fonksiyonun katsayılarını belirleme.

**Çözüm:**

$f(0)=1$ olduğundan $c=1$'dir. Diğer iki koşul

$$a+b+1=2 \Rightarrow a+b=1,$$
$$a-b+1=4 \Rightarrow a-b=3$$

eşitliklerini verir. Buradan $a=2$ ve $b=-1$ bulunur. Dolayısıyla

$$f(2)=2\cdot2^2-2+1=7.$$

**Neden doğru?** Üç bağımsız değer, ikinci dereceden fonksiyonun üç katsayısını belirlemiştir.

**Çeldirici notu:** $f(-1)$ hesaplanırken $b(-1)$ teriminin işaretini değiştirmemek katsayıları yanlış verir.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Tanım kümesi koşulunu sınırlı bir aralıktaki tam sayılara uygulama.

**Çözüm:**

Kök içi için

$$\frac{x-1}{x+2}\ge0$$

ve ayrıca $x\ne-2$ olmalıdır. Kritik değerler $-2$ ve 1'dir. İşaret incelemesi sonucu ifade $x<-2$ veya $x\ge1$ için negatif değildir. Tanım kümesi

$$(-\infty,-2)\cup[1,\infty)$$

olur. $[-5,5]$ içinde ilk parçadan $-5,-4,-3$; ikinci parçadan $1,2,3,4,5$ alınır. Toplam 8 tam sayı vardır.

**Neden doğru?** $-2$ paydayı sıfır yaptığı için; $-1$ ile 0 ise kök içini negatif yaptığı için sayılmaz.

**Çeldirici notu:** $[-5,5]$ aralığındaki tüm tam sayıları saymak tanım koşulunu uygulamadan 11 sonucuna götürür.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Pozitif paydalı rasyonel fonksiyonun görüntü kümesini sınırlarla belirleme.

**Çözüm:**

$x^2+1\ge1$ olduğundan

$$0<\frac1{x^2+1}\le1.$$

En büyük değer $x=0$ için 1'dir. $|x|$ büyüdükçe fonksiyon 0'a yaklaşır ancak 0 değerini almaz. Görüntü kümesi $(0,1]$ olur.

**Neden doğru?** Üst sınır elde edilirken alt sınır yalnız yaklaşım değeridir.

**Çeldirici notu:** Fonksiyonun 0'a yaklaşmasını 0'ı aldığı biçiminde yorumlamak aralığın sol ucunu yanlış kapatır.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Görüntü kümesi önceden belirlenmiş fonksiyonları örtenlik koşuluyla sayma.

**Çözüm:**

Her girdi için 1 veya 2 seçilebilir; ancak görüntü kümesinin ikisini de içermesi için iki sabit fonksiyon çıkarılır:

$$2^4-2=14$$

olur.

**Neden doğru?** Görüntü olacak ikili zaten verilmiştir; ayrıca hedef çifti seçme adımı yoktur.

**Çeldirici notu:** $2^4$ hesaplamak yalnız 1'i veya yalnız 2'yi kullanan iki fonksiyonu da içerir.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Rasyonel fonksiyonun tersindeki bir değeri denklem kurarak bulma.

**Çözüm:**

$f^{-1}(2)=x$ olması $f(x)=2$ demektir:

$$\frac{3x+1}{x+2}=2 \Rightarrow 3x+1=2x+4 \Rightarrow x=3.$$

**Neden doğru?** Bulunan 3 değeri fonksiyonun $x\ne-2$ tanım koşulunu sağlar.

**Çeldirici notu:** Formülde doğrudan $x=2$ yazmak ters fonksiyon değeri yerine $f(2)$ değerini hesaplar.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Kendisiyle bileşkesi özdeşlik olan doğrusal fonksiyonun katsayılarını belirleme.

**Çözüm:**

$f(0)=5$ olduğundan $b=5$'tir. Ayrıca

$$f(f(x))=a(ax+b)+b=a^2x+b(a+1).$$

Bu ifade $x$'e eşit olduğundan $a^2=1$ ve $5(a+1)=0$ olmalıdır. Buradan $a=-1$ ve

$$a+b=-1+5=4$$

bulunur.

**Neden doğru?** Sıfırdan farklı sabit terim, $a=1$ olasılığını eler.

**Çeldirici notu:** Yalnız $a^2=1$ koşulunu kullanmak sabit terim eşitliğini denetlemeden iki aday bırakır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Çift fonksiyon özelliğini ötelenmiş bir girdide kullanma.

**Çözüm:**

$$g(-2)=f(-2-1)=f(-3).$$

$f$ çift olduğundan $f(-3)=f(3)=7$'dir.

**Neden doğru?** Çiftlik, zıt işaretli girdilerin fonksiyon değerlerini eşitler.

**Çeldirici notu:** $g(-2)$ hesabında $x-1$ yerine $x+1$ kullanmak öteleme yönünü değiştirir.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Bileşke fonksiyon denkleminin gerçek köklerini bulup toplamlarını hesaplama.

**Çözüm:**

$$f(g(x))=(2x+1)^2-1.$$

Bu ifade 0'a eşitlendiğinde

$$(2x+1)^2=1 \Rightarrow 2x+1=\pm1$$

olur. Çözümler $x=0$ ve $x=-1$ olduğundan toplamları $-1$'dir.

**Neden doğru?** Kareli denklem iki işaret durumuyla iki gerçek çözüm üretir.

**Çeldirici notu:** Yalnız pozitif karekök durumunu almak $x=-1$ çözümünü kaybettirir.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Kesin azalan fonksiyonda çıktı eşitsizliğini ters yönde girdi eşitsizliğine dönüştürme.

**Çözüm:**

$f$ kesin azalan olduğundan

$$f(a+2)<f(3a-4)$$

eşitsizliği $a+2>3a-4$ anlamına gelir. Buradan $6>2a$ ve $a<3$ bulunur.

**Neden doğru?** Azalan fonksiyon girdilerin sırasını çıktılarda tersine çevirir.

**Çeldirici notu:** Eşitsizlik yönünü korumak kesin artan fonksiyon kuralını yanlış uygular.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Geometrik bir kısıtı ikinci dereceden alan fonksiyonuna dönüştürüp en büyük değeri bulma.

**Çözüm:**

Duvara dik iki kenarın her biri $x$, duvara paralel çitli kenar $40-2x$ metre olsun. Alan

$$A(x)=x(40-2x)=-2(x-10)^2+200$$

olur. Bu nedenle en büyük alan 200 metrekaredir.

**Neden doğru?** Kareli ifade en fazla 0 katkı yapar ve $x=10$ için maksimum değer elde edilir.

**Çeldirici notu:** Dört kenarın çevresini 40 kabul etmek, duvar boyunca uzanan kenarda çit kullanılmadığı bilgisini yok sayar.
