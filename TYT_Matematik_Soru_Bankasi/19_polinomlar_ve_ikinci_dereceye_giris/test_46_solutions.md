# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 46 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Polinomlarda bölme algoritmasından belirli bir terimin katsayısını bulma.

**Çözüm:**

Bölme algoritmasına göre

$$P(x)=(x^2+x+1)(x^2-2x+3)+2x-1$$

olur. Çarpımda $x^3$ terimine $x^2\cdot(-2x)$ ve $x\cdot x^2$ katkı verir. Bu nedenle katsayı

$$-2+1=-1$$

olur.

**Neden doğru?** Kalanın derecesi $1$ olduğu için $x^3$ katsayısına herhangi bir katkısı yoktur.

## Soru 2

**Doğru cevap:** B

**Kazanım:** İkinci dereceden bir bölenin köklerinde kalan polinomunu değerlendirme.

**Çözüm:**

$x^2-1$ polinomunun kökleri $1$ ve $-1$'dir. Bu değerlerde bölünen polinom ile kalan aynı değeri alır:

$$P(1)=3\cdot1+2=5$$

$$P(-1)=3\cdot(-1)+2=-1$$

Dolayısıyla $P(1)P(-1)=-5$ bulunur.

**Neden doğru?** Bölenin sıfır olduğu girdilerde bölümü içeren terim yok olur ve yalnızca kalan kalır.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Çarpan teoremini iki farklı kökte kullanarak polinom katsayılarını belirleme.

**Çözüm:**

$$x^2+x-2=(x-1)(x+2)$$

olduğundan $P(1)=P(-2)=0$ olmalıdır. Bu eşitlikler

$$b+c=-8$$

ve

$$2b-c=-7$$

sonuçlarını verir. Taraf tarafa toplandığında $3b=-15$, yani $b=-5$ bulunur. Buradan $c=-3$ ve

$$b-c=-5-(-3)=-2$$

elde edilir.

**Neden doğru?** Tam bölünme, bölenin her iki kökünü de $P$ polinomunun kökü yapar; iki koşul iki bilinmeyeni tek olarak belirler.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Polinomlarda ardışık değer farkını katsayı karşılaştırmasıyla inceleme.

**Çözüm:**

Fark açıldığında

$$P(x+1)-P(x)=3x^2+(3+2p)x+(1+p+q)$$

elde edilir. Katsayılar karşılaştırılırsa

$$3+2p=9\Rightarrow p=3$$

ve

$$1+p+q=8\Rightarrow q=4$$

olur. Buna göre $p+q=7$'dir.

**Neden doğru?** Sabit terim $r$ fark alındığında yok olur; istenen $p$ ve $q$ kalan katsayılardan doğrudan belirlenir.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Sonlu geometrik toplamı çarpan ilişkisiyle inceleme.

**Çözüm:**

$x=1$ için sol taraf $7$ olduğundan $1$ kök değildir. $x\neq1$ iken

$$1+x+x^2+\cdots+x^6=\frac{x^7-1}{x-1}$$

olur. Eşitliğin sıfır olması için $x^7=1$ gerekir. Bu denklemin tek gerçek çözümü $x=1$'dir; ancak bu değer ilk denklemi sağlamaz. Dolayısıyla gerçek kök yoktur.

**Neden doğru?** Kesirli gösterim kullanılırken dışlanan $x=1$ ayrıca kontrol edildiği için sahte kök oluşmaz.

## Soru 6

**Doğru cevap:** A

**Kazanım:** İkinci derece denklemin kökleri arasındaki uzaklığı parametreyle ilişkilendirme.

**Çözüm:**

Monik ikinci derece denklemde kökler arasındaki uzaklık $\sqrt{\Delta}$'dır. Ayırıcı

$$\Delta=(m+1)^2-4(m-2)=(m-1)^2+8$$

olur. Uzaklık $3$ olduğundan

$$(m-1)^2+8=9$$

ve $(m-1)^2=1$ elde edilir. Buradan $m=0$ veya $m=2$'dir. Toplamları $2$ olur.

**Neden doğru?** Her iki parametre de ayırıcıyı $9$ yapar ve iki farklı gerçek kök üretir.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Kökler toplamı ve çarpımını cebirsel bir ifadede kullanma.

**Çözüm:**

Vieta bağıntılarından

$$\alpha+\beta=\frac52,\qquad \alpha\beta=\frac12$$

olur. İstenen ifade

$$4\alpha\beta-2(\alpha+\beta)+1$$

biçiminde açılır. Değerler yerine yazılırsa

$$4\cdot\frac12-2\cdot\frac52+1=2-5+1=-2$$

bulunur.

**Neden doğru?** Kökleri tek tek bulmaya gerek kalmadan simetrik ifade yalnızca kökler toplamı ve çarpımıyla hesaplanır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Bir sayının iki gerçek kök arasında bulunma koşulunu polinomun işaretiyle belirleme.

**Çözüm:**

Başkatsayı pozitif olduğundan $2$ sayısının iki kök arasında olması için $f(2)<0$ olmalıdır.

$$f(2)=4-2(m+1)+m=2-m$$

olduğundan $2-m<0$, yani $m>2$ gerekir. Verilen kümede bu koşulu $3,4,5$ sağlar. Toplam $3$ değer vardır.

**Neden doğru?** Yukarı açılan bir parabolün negatif olduğu bölge varsa bu bölge iki gerçek kök arasıdır.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Doğru ile parabolün teğetlik koşulunu ortak nokta denkleminin ayırıcısıyla kurma.

**Çözüm:**

Ortak noktalar için

$$x^2-4x+k=2x-3$$

$$x^2-6x+k+3=0$$

denklemi elde edilir. Yalnız bir ortak nokta olması için ayırıcı sıfır olmalıdır:

$$36-4(k+3)=0$$

$$24-4k=0\Rightarrow k=6$$

**Neden doğru?** Ortak nokta denkleminin tek gerçek kökü olması, doğrunun parabole teğet olmasıyla aynı koşuldur.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Mutlak değerli bir polinom denklemini iki ikinci derece denkleme ayırma.

**Çözüm:**

$|P(x)|=1$ eşitliği $P(x)=1$ veya $P(x)=-1$ demektir.

Birinci durumda

$$x^2-4x+2=0$$

denklemi elde edilir ve ayırıcısı $8>0$ olduğundan iki farklı gerçek kök vardır. İkinci durumda

$$x^2-4x+4=0\Rightarrow (x-2)^2=0$$

olduğundan bir gerçek kök gelir. İki kök kümesi ayrık olduğu için toplam $3$ farklı gerçek kök vardır.

**Neden doğru?** Mutlak değerin iki olası işareti ayrı incelenmiş ve çift katlı kök yalnızca bir farklı kök olarak sayılmıştır.
