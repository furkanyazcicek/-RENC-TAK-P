# Konu 18 — Fonksiyonlar

## Test 26 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Dönüştürülmüş fonksiyon girdisini hedef değere eşitleyerek fonksiyon değeri bulma.

**Çözüm:**

$f(0)$ için

$$\frac{x-1}{x+1}=0$$

olmalıdır. Buradan $x=1$ bulunur. Verilen eşitlikte $x=1$ yazılırsa

$$f(0)=2\cdot1+3=5.$$

**Neden doğru?** Kesrin sıfır olması için pay sıfır olmalı, payda ise sıfır olmamalıdır; $x=1$ bu koşulları sağlar.

**Çeldirici notu:** Sağ tarafta doğrudan $x=0$ kullanmak, $f$ fonksiyonunun girdisi ile eşitlikteki yardımcı değişkeni karıştırır.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Sınırlandırılmış parabolde iki ters fonksiyon değerini birlikte bulma.

**Çözüm:**

$f^{-1}(5)=x$ için $f(x)=5$ yazılır:

$$x^2-4x=5 \Rightarrow x^2-4x-5=0 \Rightarrow (x-5)(x+1)=0.$$

Adaylar $5$ ve $-1$'dir. Tanım kümesi $[2,\infty)$ olduğundan $f^{-1}(5)=5$ olur. Benzer biçimde

$$x^2-4x=12 \Rightarrow (x-6)(x+2)=0$$

ve tanım kümesinden $f^{-1}(12)=6$ seçilir. Toplam $5+6=11$'dir.

**Neden doğru?** Tanım kümesi her iki denklemde de parabolün sağ kolundaki kökü seçer.

**Çeldirici notu:** Yalnız ilk ters değeri bulup durmak sorudaki toplamın ikinci terimini atlar.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Bileşke fonksiyonun tanım kümesinde iç ve dış fonksiyon koşullarını birlikte değerlendirme.

**Çözüm:**

Önce $f(x)$ tanımlı olmalıdır:

$$3-x\ge0 \Rightarrow x\le3.$$

Ayrıca $g$ fonksiyonunun paydası sıfır olamayacağından $f(x)\ne2$ gerekir:

$$\sqrt{3-x}\ne2 \Rightarrow x\ne-1.$$

Bu nedenle tanım kümesi

$$(-\infty,-1)\cup(-1,3]$$

olur.

**Neden doğru?** İç fonksiyonun çıktısı, dış fonksiyonun yasaklı girdisi olan 2'ye eşit olmamalıdır.

**Çeldirici notu:** Yalnız karekök koşulunu kullanmak $x=-1$ değerini yanlışlıkla tanım kümesine katar.

## Soru 4

**Doğru cevap:** D

**Kazanım:** $x$ ve $-x$ girdilerini birlikte kullanarak fonksiyon değerlerini denklem sistemiyle bulma.

**Çözüm:**

$x=2$ için

$$f(2)+2f(-2)=12,$$

$x=-2$ için

$$f(-2)+2f(2)=0$$

elde edilir. İlk denklemin iki katından ikinci denklem çıkarılırsa $3f(-2)=24$, yani $f(-2)=8$ olur. İkinci denklemden

$$8+2f(2)=0 \Rightarrow f(2)=-4$$

bulunur.

**Neden doğru?** Verilen bağıntı $x$ ve $-x$ için iki bağımsız doğrusal denklem üretir.

**Çeldirici notu:** Yalnız $x=2$ yazmak iki bilinmeyenli tek denklem bıraktığı için sonucu belirlemeye yetmez.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Parabolün simetri ekseninden bire bir olduğu en geniş sağ aralığı belirleme.

**Çözüm:**

$$f(x)=x^2+4x+1=(x+2)^2-3.$$

Parabolün tepe noktasının apsisi $-2$'dir. Fonksiyon $[-2,\infty)$ aralığında sürekli artan ve bire birdir. Bu nedenle en küçük $m$ değeri $-2$'dir.

**Neden doğru?** Aralık tepe noktasının soluna uzatılırsa simetri nedeniyle aynı çıktıyı veren iki farklı girdi bulunur.

**Çeldirici notu:** Sabit terim veya tepe noktasının ordinatını $m$ sanmak, tanım aralığının sınırını yanlış yorumlar.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Sabit bir görüntü koşulu altında örten fonksiyonları içerme-dışlama yöntemiyle sayma.

**Çözüm:**

$f(1)=a$ olduğundan kalan üç elemanın görüntüleri $a,b,c$ arasından seçilir; ayrıca hem $b$ hem $c$ en az bir kez kullanılmalıdır. Toplam seçim sayısından $b$'yi ya da $c$'yi hiç kullanmayanlar çıkarılır, ikisini de kullanmayan durum geri eklenir:

$$3^3-2\cdot2^3+1=27-16+1=12.$$

**Neden doğru?** $a$ zaten görüntü kümesinde bulunduğundan örtenlik için yalnız $b$ ve $c$'nin de kullanılması gerekir.

**Çeldirici notu:** Kalan üç girdiyi farklı görüntülere göndermeyi zorunlu sanmak, örtenlik ile bire birliği karıştırır.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Pozitif değişkende bir ifade için alt sınır bulup görüntü kümesini belirleme.

**Çözüm:**

$x>0$ olduğundan aritmetik-geometrik ortalama eşitsizliğiyle

$$x+\frac1x\ge2\sqrt{x\cdot\frac1x}=2$$

olur. Eşitlik $x=1$ için sağlanır. Fonksiyon 2'den büyük her değeri de alabildiğinden görüntü kümesi $[2,\infty)$'dir.

**Neden doğru?** Alt sınır 2'dir ve bu değer gerçekten elde edilir.

**Çeldirici notu:** $x>0$ olduğu için her pozitif çıktının alınacağını düşünmek ifadenin sahip olduğu alt sınırı gözden kaçırır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Açık ve kapalı uç noktaları bulunan parçalı bir grafikten görüntü kümesi okuma.

**Çözüm:**

Grafikte en küçük çıktı $-2$'dir ve kapalı noktayla gösterildiği için alınır. En büyük sınır 2'dir; ancak bu noktada daire açık olduğundan 2 alınmaz. İki doğru parçası aradaki bütün değerleri üretir.

$$\text{Görüntü kümesi }[-2,2)\text{ olur.}$$

**Neden doğru?** Kapalı uç aralığa dâhil, açık uç aralığa dâhil değildir.

**Çeldirici notu:** Açık daireyi yalnız grafikte bir boşluk olarak görüp 2'yi görüntü kümesine eklemek üst ucu yanlış kapatır.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Bire birliği kesin artanlık üzerinden kullanarak eşit çıktılardan eşit girdilere geçme.

**Çözüm:**

$f$ kesin artan olduğundan bire birdir. Bu nedenle

$$a^2+1=5a-3$$

olmalıdır. Buradan

$$a^2-5a+4=0 \Rightarrow (a-1)(a-4)=0$$

elde edilir. Çözümlerin toplamı $1+4=5$'tir.

**Neden doğru?** Kesin artan bir fonksiyonda eşit çıktılar ancak eşit girdilerden gelebilir.

**Çeldirici notu:** Fonksiyonun kuralını bilmeden işlem yapılamayacağını düşünmek, kesin artanlığın verdiği bire birlik bilgisini gözden kaçırır.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Rasyonel bir fonksiyonun kendisiyle bileşkesini kurup oluşan denklemin çözümlerini denetleme.

**Çözüm:**

$x\ne-1$ ve bileşkede $f(x)\ne-1$ olduğundan $x\ne-3$ olmalıdır. Bileşke

$$f(f(x))=\frac{2}{\frac{2}{x+1}+1}=\frac{2(x+1)}{x+3}$$

olur. Denklem

$$\frac{2(x+1)}{x+3}=x \Rightarrow x^2+x-2=0$$

biçimindedir. $(x-1)(x+2)=0$ olduğundan çözümler 1 ve $-2$'dir. İkisi de tanım koşullarını sağlar; toplamları $-1$ olur.

**Neden doğru?** Bileşke kurulurken hem ilk fonksiyonun hem dıştaki fonksiyonun payda koşulu korunmuştur.

**Çeldirici notu:** Payda koşullarını denetlememek, cebirsel olarak bulunan fakat fonksiyonda tanımsız olabilecek değerleri kabul ettirebilir.
