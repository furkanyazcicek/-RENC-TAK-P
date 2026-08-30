# Konu 18 — Fonksiyonlar

## Test 50 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Çarpımsal fonksiyonel bağıntıyı ardışık pozitif tam sayılarda kullanma.

**Çözüm:**

$f(2)=f(1+1)=2\cdot2=4$ olur. Ardından

$$f(4)=f(2+2)=f(2)\cdot f(2)=4\cdot4=16.$$

**Neden doğru?** Bağıntı, girdilerin toplamını fonksiyon değerlerinin çarpımına dönüştürür.

**Çeldirici notu:** $f(4)=4f(1)$ yazmak verilen çarpımsal ilişkiyi doğrusal bir ilişki gibi yorumlamaktır.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Mutlak değerli kök koşulu ile payda koşulunu birlikte kullanma.

**Çözüm:**

$$4-|x|\ge0 \Rightarrow |x|\le4$$

olduğundan $-4\le x\le4$ gerekir. Ayrıca $x^2-1\ne0$, yani $x\ne-1$ ve $x\ne1$ olmalıdır. Tanım kümesi

$$[-4,-1)\cup(-1,1)\cup(1,4]$$

olur.

**Neden doğru?** $-4$ ve 4 kökü sıfır yaparak alınır; $-1$ ve 1 yalnız payda nedeniyle çıkarılır.

**Çeldirici notu:** Kök koşulundan bulunan kapalı aralıktan paydanın iki kökünü çıkarmamak tanımsız girdileri kümeye ekler.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Rasyonel fonksiyonun görüntü kümesini eşdeğer ifadeyle belirleme.

**Çözüm:**

Fonksiyon

$$f(x)=3-\frac2{x^2+1}$$

biçimindedir. $0<\frac2{x^2+1}\le2$ olduğundan

$$1\le f(x)<3$$

elde edilir.

**Neden doğru?** 1 değeri $x=0$ için alınır; 3'e yaklaşılır ancak ulaşılmaz.

**Çeldirici notu:** Kesrin sıfır olabileceğini düşünmek 3 değerini görüntü kümesine ekler.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Görüntü kümesinin eleman sayısı verilen fonksiyonları sayma.

**Çözüm:**

Önce üç elemanlı hedef kümeden görüntü olacak iki eleman seçilir. Bu seçim $\binom32=3$ biçimdedir. Seçilen iki elemana 4 elemandan tanımlanan ve ikisini de kullanan fonksiyonların sayısı

$$2^4-2=14$$

olur. Toplam sayı

$$3\cdot14=42$$

olur.

**Neden doğru?** Her seçilen ikili için iki hedefin de en az bir kez görüntü olması sağlanmıştır.

**Çeldirici notu:** $3\cdot2^4$ hesaplamak, seçilen ikilinin yalnız bir elemanını kullanan sabit fonksiyonları da içerir.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Ters fonksiyon eşitliğini asıl fonksiyonun eşlemesine dönüştürme.

**Çözüm:**

$f^{-1}(3)=2$ eşitliği $f(2)=3$ demektir. Bu nedenle

$$2a-1=3 \Rightarrow 2a=4 \Rightarrow a=2.$$

**Neden doğru?** Ters fonksiyonda girdi ve çıktı yer değiştirir.

**Çeldirici notu:** $f^{-1}(3)$ ifadesini $1/f(3)$ olarak yorumlamak iki farklı ters kavramını karıştırır.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Sınırlandırılmış mutlak değer fonksiyonunun ters değerini bulma.

**Çözüm:**

Tanım kümesinde $x\ge2$ olduğundan $|x-2|=x-2$ olur. Dolayısıyla

$$f^{-1}(7)=x \Rightarrow x-2=7 \Rightarrow x=9.$$

**Neden doğru?** Tanım aralığı mutlak değerin sağ kolunu seçerek fonksiyonu bire bir yapar.

**Çeldirici notu:** $x=-5$ adayını almak $x\ge2$ koşuluna aykırıdır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Simetrik fonksiyon değerleri toplamında tek dereceli terimlerin yok olmasını kullanma.

**Çözüm:**

$f(1)+f(-1)$ toplamında küplü ve doğrusal terimler birbirini götürür. Geriye

$$2a+10=14$$

kalır. Buradan $a=2$ bulunur.

**Neden doğru?** $ax^2$ terimi çift dereceli olduğu için iki fonksiyon değerinde de aynı işaretle bulunur.

**Çeldirici notu:** $f(-1)$ hesaplanırken $(-1)^2$ teriminin işaretini negatif almak parametreyi yanlış değiştirir.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Parçalı fonksiyon denkleminde adayları ait oldukları aralıkta sınama.

**Çözüm:**

$x<0$ kolunda $x+3=7$ eşitliği $x=4$ verir; bu değer kola uygun değildir. $x\ge0$ kolunda

$$x^2+3=7 \Rightarrow x=\pm2$$

adaylarından yalnız $x=2$ koşulu sağlar. Tek çözüm vardır.

**Neden doğru?** Her cebirsel aday parçanın tanım koşuluyla birlikte değerlendirilmiştir.

**Çeldirici notu:** $x^2=4$ denkleminin iki kökünü de almak ikinci parçanın $x\ge0$ koşulunu gözden kaçırır.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Artan ve azalan fonksiyonların bileşkelerindeki sıralama yönünü belirleme.

**Çözüm:**

$g$ girdilerin sırasını ters çevirir, ardından $f$ bu yeni sırayı korur; bu nedenle $f\circ g$ azalandır. $f$ önce sırayı korur, ardından $g$ ters çevirir; dolayısıyla $g\circ f$ de azalandır.

**Neden doğru?** Her iki bileşkede de tam bir kez sıra tersine çevrilir.

**Çeldirici notu:** Fonksiyonların yazılış sırasına bakarak bir bileşkeyi artan sanmak, sıra etkilerini adım adım izlememektir.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Tablodan ters fonksiyon ve bileşke değerlerini birlikte okuma.

**Çözüm:**

Tabloda $f(2)=4$ olduğundan $f^{-1}(4)=2$'dir. Ayrıca $f(-1)=0$ ve $f(0)=2$ olduğundan

$$f(f(-1))=f(0)=2.$$

Toplam $2+2=4$ olur.

**Neden doğru?** İlk terimde tablo ters yönde, ikinci terimde ise ardışık iki eşleme olarak okunur.

**Çeldirici notu:** $f(f(-1))$ ifadesinde yalnız $f(-1)=0$ sonucunda durmak ikinci fonksiyon uygulamasını atlar.
