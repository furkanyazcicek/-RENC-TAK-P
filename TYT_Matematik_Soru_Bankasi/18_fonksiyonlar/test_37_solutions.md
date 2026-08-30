# Konu 18 — Fonksiyonlar

## Test 37 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** İki noktası verilen doğrusal fonksiyonun tersindeki bir değeri bulma.

**Çözüm:**

Doğrunun eğimi

$$a=\frac{9-5}{4-2}=2$$

olur. $(2,5)$ noktası kullanılırsa $5=2\cdot2+b$ ve $b=1$ bulunur. Yani $f(x)=2x+1$'dir. $f^{-1}(13)=x$ için

$$2x+1=13 \Rightarrow x=6.$$

**Neden doğru?** Önce grafiği belirleyen doğrusal kural, ardından 13 çıktısını üreten girdi bulunmuştur.

**Çeldirici notu:** Doğrunun eğimini yalnız çıktı farkı olan 4 sanmak girdi farkını hesaba katmaz.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Karekök ve ikinci dereceden payda koşullarını birlikte kullanarak tanım kümesini bulma.

**Çözüm:**

Kök içi için $2-x\ge0$, yani $x\le2$ gerekir. Payda

$$x^2-x-6=(x-3)(x+2)$$

olduğundan $x\ne3$ ve $x\ne-2$ olmalıdır. $3$ zaten $x\le2$ koşulunun dışındadır. Tanım kümesi

$$(-\infty,-2)\cup(-2,2]$$

olur.

**Neden doğru?** 2 değeri kökü sıfır yapar ve alınabilir; $-2$ paydayı sıfır yaptığı için çıkarılır.

**Çeldirici notu:** Paydanın iki kökünü de aralıkta birer bölme noktası olarak kullanmak, tanım koşulunun zaten elediği 3'ü gereksiz yere dâhil eder.

## Soru 3

**Doğru cevap:** D

**Kazanım:** İki mutlak değer farkının parçalı davranışından görüntü kümesini belirleme.

**Çözüm:**

$-2\le x\le2$ için

$$f(x)=(2-x)-(x+2)=-2x$$

olur ve bu ifade 4'ten $-4$'e kadar bütün değerleri alır. $x\le-2$ için değer 4, $x\ge2$ için değer $-4$ olarak sabittir. Bu nedenle görüntü kümesi $[-4,4]$'tür.

**Neden doğru?** Orta aralıktaki doğrusal parça iki uç arasındaki tüm değerleri üretir ve uç değerler de alınır.

**Çeldirici notu:** Mutlak değerlerin ayrı ayrı negatif olmadığını görüp farkın da negatif olamayacağını düşünmek yanlıştır.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Bir görüntüsü sabitlenmiş ve görüntü kümesi iki elemanlı fonksiyonları sayma.

**Çözüm:**

Görüntü kümesinin 1 dışındaki elemanı 2 biçimde seçilir. Kalan dört girdi, bu iki görüntüye $2^4$ biçimde gönderilebilir; ancak hepsi 1'e giderse ikinci görüntü kullanılmaz:

$$2(2^4-1)=2\cdot15=30.$$

**Neden doğru?** 1 görüntüsü $f(a)=1$ ile zaten kullanılmıştır; yalnız seçilen diğer görüntünün en az bir kez kullanılması gerekir.

**Çeldirici notu:** $2\cdot2^4$ hesaplamak ikinci görüntünün hiç kullanılmadığı iki durumu da sayar.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Rasyonel fonksiyonun tersindeki bir değeri özgün fonksiyon denklemiyle bulma.

**Çözüm:**

$f^{-1}(-1)=x$ olması $f(x)=-1$ demektir:

$$\frac{x-4}{2x+1}=-1 \Rightarrow x-4=-2x-1 \Rightarrow 3x=3.$$

Buradan $x=1$ bulunur.

**Neden doğru?** Bulunan değer paydayı sıfır yapmadığı için geçerli bir girdidir.

**Çeldirici notu:** Formülde doğrudan $x=-1$ kullanmak ters fonksiyon değeri yerine $f(-1)$ değerini hesaplar.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Polinom biçimindeki fonksiyonun çift olma koşulunu parametreye uygulama.

**Çözüm:**

Çift fonksiyonda tek dereceli terim bulunmamalıdır. Bu nedenle

$$m^2-9=0 \Rightarrow m=\pm3.$$

$m>0$ koşulundan $m=3$ seçilir. Kalan $x^2$ ve sabit terimler çiftliği bozmaz.

**Neden doğru?** Parametre koşulu, iki cebirsel aday arasından pozitif olanı belirler.

**Çeldirici notu:** $x^2$ teriminin katsayısını sıfırlamaya çalışmak çift fonksiyonda bulunmasına izin verilen bir terimi kaldırır.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Doğrusal fonksiyon bileşkelerinin özdeşlik koşulundan parametre bulma.

**Çözüm:**

$$f(g(x))=2x-3+a,$$

$$g(f(x))=2(x+a)-3=2x+2a-3.$$

Sabit terimler eşitlenirse $a=2a$ ve $a=0$ bulunur.

**Neden doğru?** Bileşkelerin her gerçek girdide eşit olması doğrusal ifadelerin karşılıklı katsayılarını eşitler.

**Çeldirici notu:** Bileşke sırasını önemsememek, iki farklı sabit terimin oluşturduğu parametre koşulunu gözden kaçırır.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Parçalı fonksiyon denkleminde her parçadan gelen çözümleri aralık koşullarıyla denetleme.

**Çözüm:**

İlk parçada $x^2=9$ eşitliği $x=\pm3$ verir; $x<0$ koşulunu yalnız $x=-3$ sağlar. İkinci parçada

$$2x+1=9 \Rightarrow x=4$$

bulunur ve $x\ge0$ koşulunu sağlar. Toplam iki çözüm vardır.

**Neden doğru?** Her parçadan tam bir geçerli çözüm gelmektedir.

**Çeldirici notu:** İlk parçanın iki cebirsel kökünü de kabul etmek $x=3$ değerinde yanlış kuralı kullanır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Kesin artan fonksiyonun bire birliğini eşit çıktılarda kullanma.

**Çözüm:**

$f$ kesin artan olduğundan bire birdir. Bu nedenle

$$a^2+2=6a-3 \Rightarrow a^2-6a+5=0.$$

$$(a-1)(a-5)=0$$

olduğundan çözümler 1 ve 5'tir; çarpımları 5 olur.

**Neden doğru?** Eşit fonksiyon değerleri bire bir fonksiyonda eşit girdilerden gelir.

**Çeldirici notu:** Artanlık verisini eşitsizlik kurmak için kullanmak, soruda çıktıların eşit olduğunu gözden kaçırır.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Yol fonksiyonunda iki zaman arasındaki alınan yolu fonksiyon değerleri farkıyla bulma.

**Çözüm:**

$$s(3)=3^2+4\cdot3=21,$$
$$s(1)=1^2+4\cdot1=5.$$

Bu iki zaman arasında alınan yol $s(3)-s(1)=21-5=16$ metredir.

**Neden doğru?** Birikimli yol fonksiyonunda aralıktaki yol, son ve ilk değerlerin farkıdır.

**Çeldirici notu:** Yalnız $s(3)$ değerini almak hareketlinin ilk saniyeye kadar aldığı yolu da sonuca katar.
