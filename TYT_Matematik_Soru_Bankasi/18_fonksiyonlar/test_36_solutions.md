# Konu 18 — Fonksiyonlar

## Test 36 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Fonksiyonel eşitlikte uygun girdi seçerek simetrik iki değerin toplamını bulma.

**Çözüm:**

Verilen bağıntıda $x=0$ yazılır:

$$f(0)+f(2)=0^2-2\cdot0+10=10.$$

**Neden doğru?** $2-x$ ifadesi $x=0$ için 2 olur ve sol taraf doğrudan sorulan toplamı verir.

**Çeldirici notu:** Fonksiyon değerlerini ayrı ayrı bulmaya çalışmak, bağıntının yalnız toplamı belirlediğini gözden kaçırır.

## Soru 2

**Doğru cevap:** B

**Kazanım:** İşaret belirleyen parçalı bir ifadenin görüntü kümesini bulma.

**Çözüm:**

$x>0$ için $|x|=x$ ve $f(x)=1$; $x<0$ için $|x|=-x$ ve $f(x)=-1$ olur. Görüntü kümesi $\{-1,1\}$ olduğundan elemanlar toplamı 0'dır.

**Neden doğru?** Tanım kümesinde 0 bulunmadığı için başka bir durum yoktur.

**Çeldirici notu:** $|x|$ her zaman pozitif olduğu için bölümün de hep pozitif olacağını düşünmek paydanın işaretini gözden kaçırır.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Karekök dış fonksiyonuyla kurulan bileşkenin tanım kümesini ikinci dereceden eşitsizlikle bulma.

**Çözüm:**

$$f(g(x))=\sqrt{4-(x^2+1)}=\sqrt{3-x^2}.$$

Kök içi negatif olmamalıdır:

$$3-x^2\ge0 \Rightarrow x^2\le3 \Rightarrow -\sqrt3\le x\le\sqrt3.$$

**Neden doğru?** Uçlarda kök içi sıfırdır ve karekök tanımlı olduğu için aralığa dâhildir.

**Çeldirici notu:** $x^2\le3$ eşitsizliğinde yalnız pozitif üst sınırı yazmak negatif alt sınırı kaybettirir.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Kapalı aralıkta ikinci dereceden fonksiyonun görüntü kümesini belirleme.

**Çözüm:**

$$f(x)=x^2-4x+5=(x-2)^2+1.$$

En küçük değer $x=2$ için 1'dir. Aralık uçlarında $f(0)=f(4)=5$ olduğundan en büyük değer 5'tir. Görüntü kümesi $[1,5]$ olur.

**Neden doğru?** Sürekli fonksiyon kapalı aralıkta minimum ile maksimum arasındaki bütün değerleri alır.

**Çeldirici notu:** Yalnız tepe noktasını kullanmak görüntü kümesinin üst sınırını belirlemeye yetmez.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Belirli eşlemeleri sabitlenmiş bire bir ve örten fonksiyonları permütasyonla sayma.

**Çözüm:**

İki farklı tanım kümesi elemanının iki farklı görüntüsü sabitlenmiştir. Kalan dört tanım kümesi elemanı, kalan dört görüntüye bire bir gönderilir. Bu nedenle sayı

$$4!=24$$

olur.

**Neden doğru?** Bire bir ve örten fonksiyon, altı elemanlı kümeler arasında bir permütasyondur.

**Çeldirici notu:** $6!$ hesaplamak önceden sabitlenen iki eşlemeyi yeniden seçime açar.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Bileşke fonksiyonun ters değerini verilen ardışık eşlemelerden bulma.

**Çözüm:**

$$2\xrightarrow{f}5\xrightarrow{g}7$$

olduğundan $(g\circ f)(2)=7$'dir. Bu eşleme tersine çevrilirse

$$(g\circ f)^{-1}(7)=2$$

elde edilir.

**Neden doğru?** Ters fonksiyon, bileşkenin 7 çıktısını bu çıktıyı üreten 2 girdisine geri gönderir.

**Çeldirici notu:** Yalnız $g^{-1}(7)=5$ adımında durmak bileşkenin tersini tamamlamaz.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Polinom biçimindeki fonksiyonun tek olma koşulunu katsayılara uygulama.

**Çözüm:**

Tek fonksiyonda çift dereceli terim bulunmamalıdır. Bu nedenle

$$m-1=0 \Rightarrow m=1.$$

Bu değerde $f(x)=3x$ olur ve $f(-x)=-f(x)$ sağlanır.

**Neden doğru?** Kalan doğrusal terim tek kuvvetlidir ve sabit terim yoktur.

**Çeldirici notu:** $3x$ terimini yok etmeye çalışmak tek fonksiyonda bulunmasına izin verilen terimi kaldırır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** İki fonksiyonun grafiklerinin kesişim sayısını denklem çözüm sayısıyla ilişkilendirme.

**Çözüm:**

Grafikte $y=f(x)$ parabolü ile $y=g(x)$ doğrusu iki farklı noktada kesişmektedir. Her kesişimin apsisi $f(x)=g(x)$ denkleminin bir gerçek çözümüdür. Bu nedenle çözüm sayısı 2'dir.

**Neden doğru?** Aynı apsiste iki grafiğin ordinatlarının eşit olması fonksiyon değerlerinin eşitliği demektir.

**Çeldirici notu:** Parabolün tepe noktasını da çözüm sanmak, bu noktanın yatay doğru üzerinde olmadığını gözden kaçırır.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Sonlu bir tanım kümesinde belirli görüntülere giden ön görüntü elemanlarını sayma.

**Çözüm:**

$f(x)=1$ olması $x=-1$ veya $x=1$; $f(x)=4$ olması $x=-2$ veya $x=2$ için gerçekleşir. İstenen küme

$$\{-2,-1,1,2\}$$

olduğundan eleman sayısı 4'tür.

**Neden doğru?** Hem 1'in hem 4'ün tanım kümesindeki tüm ön görüntüleri alınmıştır.

**Çeldirici notu:** Her çıktı için yalnız pozitif karekökü almak negatif iki girdiyi kaybettirir.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Sabit farkla değişen fonksiyon değerini geriye doğru yineleme.

**Çözüm:**

Girdi bir arttığında fonksiyon değeri 2 azalmaktadır. 3'ten $-1$'e dört adım geriye gidildiğinde her adımda değer 2 artar:

$$f(-1)=f(3)+4\cdot2=5+8=13.$$

**Neden doğru?** Bağıntı ileri yönde azalma, geri yönde aynı miktarda artma verir.

**Çeldirici notu:** Geri giderken de 2 çıkarmak değişim yönünü ters yorumlar.
