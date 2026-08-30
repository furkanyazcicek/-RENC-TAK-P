# Konu 18 — Fonksiyonlar

## Test 44 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Dönüştürülmüş girdiye karşılık gelen fonksiyon değerini bulma.

**Çözüm:**

$f(5)$ için bağıntının sol tarafındaki girdi 5 olmalıdır:

$$2x-1=5 \Rightarrow x=3.$$

Bu nedenle $f(5)=3^2+1=10$ olur.

**Neden doğru?** Bağıntıdaki $x$ doğrudan fonksiyonun girdisi değildir; fonksiyonun girdisi $2x-1$'dir.

**Çeldirici notu:** Eşitlikte doğrudan $x=5$ yazmak $f(9)$ değerini hesaplar.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Karekök ve payda koşullarını sınırlı aralıktaki tam sayılara uygulama.

**Çözüm:**

$x-1\ge0$ koşulundan $x\ge1$ elde edilir. Payda için ayrıca $x\ne4$ olmalıdır. $[1,8]$ aralığındaki sekiz tam sayıdan yalnız 4 çıkarılır; 7 tam sayı kalır.

**Neden doğru?** 1 kökü sıfır yaparak tanımlıdır; yasak olan tek tam sayı 4'tür.

**Çeldirici notu:** 1'i kök nedeniyle dışarıda bırakmak sayıyı bir eksiltir.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Mutlak değerli rasyonel fonksiyonun görüntü kümesini sınır değerlerle belirleme.

**Çözüm:**

$|x+2|\ge0$ olduğundan payda en az 1'dir. $x=-2$ için $f(x)=1$ alınır. $|x+2|$ büyüdükçe fonksiyon 0'a yaklaşır ancak hiçbir gerçek $x$ için 0 olmaz. Görüntü kümesi $(0,1]$'dir.

**Neden doğru?** Üst sınır elde edilir, alt sınır ise yalnız yaklaşım değeridir.

**Çeldirici notu:** Fonksiyonun çok küçük pozitif değerler alabilmesini 0 değerini de aldığı biçiminde yorumlamak aralık ucunu yanlış kapatır.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Örten fonksiyonları içerme-dışlama yöntemiyle sayma.

**Çözüm:**

Tüm fonksiyonların sayısı $3^4=81$'dir. Hedef kümenin belirli bir elemanını kullanmayan $2^4$ fonksiyon vardır ve kullanılmayan eleman 3 biçimde seçilir. İki elemanı birden kullanmayan sabit fonksiyonlar ilk çıkarımda iki kez çıkarıldığı için 3 kez geri eklenir:

$$3^4-\binom31 2^4+\binom32 1^4=81-48+3=36.$$

**Neden doğru?** Örtenlik, hedef kümedeki üç elemanın da en az bir kez görüntü olmasını gerektirir.

**Çeldirici notu:** $3^4$ sayısı hiçbir örtenlik denetimi yapmadan bütün fonksiyonları sayar.

## Soru 5

**Doğru cevap:** C

**Kazanım:** İki farklı bileşke sırasını karşılaştırarak parametre belirleme.

**Çözüm:**

$$f(g(3))=f(5)=5+a$$

ve

$$g(f(3))=g(3+a)=2(3+a)-1=5+2a$$

olur. Eşitlikten $5+a=5+2a$ ve $a=0$ bulunur.

**Neden doğru?** Fonksiyonlar aynı olsa da bileşke sırası ara değeri ve parametrenin katsayısını değiştirir.

**Çeldirici notu:** $f\circ g$ ile $g\circ f$ ifadelerini özdeş kabul etmek verilen koşulu kullanmadan sonuç çıkarmaktır.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Karekök fonksiyonunda ters görüntüyü denklem yoluyla bulma.

**Çözüm:**

$f^{-1}(1)=x$ için $f(x)=1$ yazılır:

$$\sqrt{x+1}-2=1 \Rightarrow \sqrt{x+1}=3.$$

Karesi alındığında $x+1=9$ ve $x=8$ elde edilir.

**Neden doğru?** Bulunan değer tanım kümesi olan $[-1,\infty)$ aralığındadır.

**Çeldirici notu:** $-2$ terimini karşıya geçirmeden kare almak köklü denklemin yapısını bozar.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Simetrik girdilerin farkında çift dereceli terimlerin yok olmasını kullanma.

**Çözüm:**

$f(x)-f(-x)$ farkında çift dereceli ve sabit terimler yok olur:

$$f(x)-f(-x)=-4x^3+6x.$$

$x=2$ için

$$-4\cdot8+12=-20$$

bulunur.

**Neden doğru?** Sonuç $a$ parametresinden bağımsızdır; çünkü $ax^2$ çift dereceli bir terimdir.

**Çeldirici notu:** $f(-2)$ çıkarılırken parantezi dağıtmamak terimlerin işaretlerini yanlış bırakır.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Mutlak değerli fonksiyon denklemini tanım aralıklarına ayırarak çözme.

**Çözüm:**

$x\ge-1$ için $f(x)=x+1-x=1$ olduğundan çözüm yoktur. $x<-1$ için

$$f(x)=-(x+1)-x=-2x-1$$

olur. $-2x-1=2$ eşitliğinden $x=-\frac32$ bulunur ve bu değer $x<-1$ koşulunu sağlar. Tek çözüm vardır.

**Neden doğru?** Her cebirsel sonuç kendi mutlak değer aralığında ayrıca denetlenmiştir.

**Çeldirici notu:** Mutlak değeri doğrudan $x+1$ almak negatif bölgedeki tek çözümü kaybettirir.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Bire bir fonksiyonda eşit çıktılardan eşit girdilere geçme.

**Çözüm:**

$f$ bire bir olduğundan

$$a^2-1=3a+1$$

olmalıdır. Böylece

$$a^2-3a-2=0$$

denklemi elde edilir. Kökler toplamı Vieta bağıntısına göre 3'tür.

**Neden doğru?** Kökleri tek tek hesaplamak gerekmeksizin istenen toplam doğrudan katsayılardan okunabilir.

**Çeldirici notu:** Bire birlik bilgisini kullanmadan fonksiyon değerlerini açmaya çalışmak, kuralı verilmeyen $f$ için ilerleme sağlamaz.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Ardışık fiyat değişimlerini bileşke fonksiyonla modelleme.

**Çözüm:**

İşlemler verildikleri sırayla $g\circ f$ bileşkesini oluşturur:

$$g(f(x))=0{,}8x-30.$$

Son fiyat 210 TL olduğundan

$$0{,}8x-30=210 \Rightarrow 0{,}8x=240 \Rightarrow x=300.$$

**Neden doğru?** Sabit kupon indirimi, yüzde indirimiyle bulunan yeni fiyat üzerinden uygulanır.

**Çeldirici notu:** 30 TL'yi önce düşürüp sonra yüzde 20 indirim yapmak işlem sırasını değiştirir ve farklı bir bileşke kurar.
