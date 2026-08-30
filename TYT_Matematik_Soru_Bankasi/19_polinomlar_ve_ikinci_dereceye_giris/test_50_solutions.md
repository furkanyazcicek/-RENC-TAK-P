# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 50 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Yüksek dereceli terimlerin yok olduğu bir polinom farkının derecesini belirleme.

**Çözüm:**

$$P(x)^2=4x^4-4x^3+5x^2-2x+1$$

olduğundan

$$2P(x)^2=8x^4-8x^3+10x^2-4x+2$$

elde edilir. Buna göre

$$Q(x)-2P(x)^2=-3x^2+4x+1$$

olur ve derece $2$'dir.

**Neden doğru?** Dördüncü ve üçüncü dereceli terimler tam olarak yok olur; kalan polinomun baş terimi $-3x^2$'dir.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Değişken kaydırıldığında kalan polinomunu yeni bölenin köklerinde belirleme.

**Çözüm:**

$S(x)=P(x+1)$ olsun. $x^2-x=x(x-1)$ olduğundan yeni kalanın $S(0)$ ve $S(1)$ değerleri gerekir. Verilen eski kalandan

$$S(0)=P(1)=2\cdot1+1=3$$

ve

$$S(1)=P(2)=2\cdot2+1=5$$

bulunur. Bu iki değeri alan birinci dereceden kalan $2x+3$'tür.

**Neden doğru?** Yeni bölenin kökleri $0$ ve $1$, kaydırma sonrasında eski bölenin kökleri $1$ ve $2$ ile eşleşir.

## Soru 3

**Doğru cevap:** B

**Kazanım:** $P(x)P(-x)$ özdeşliğinden ikinci derece polinomun katsayılarını belirleme.

**Çözüm:**

$$P(x)=x^2+ax+b$$

yazılsın. Bu durumda

$$P(x)P(-x)=x^4+(2b-a^2)x^2+b^2$$

olur. $P(0)=b>0$ ve $b^2=4$ olduğundan $b=2$'dir. Ayrıca

$$2b-a^2=-5\Rightarrow4-a^2=-5\Rightarrow a^2=9$$

olur. $x$ katsayısı pozitif olduğundan $a=3$ ve

$$P(1)=1+3+2=6$$

bulunur.

**Neden doğru?** İşaret koşulları, $a$ ve $b$ için cebirsel olarak mümkün olan ikişer değerden doğru olanları tekleştirir.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Aynı polinom değerini veren üç girdiden monik kübik polinomu çarpan biçiminde kurma.

**Çözüm:**

$P(x)-6$ monik ve üçüncü dereceden bir polinomdur; $0$, $1$ ve $2$ bu polinomun kökleridir. Dolayısıyla

$$P(x)-6=x(x-1)(x-2)$$

olur. $x=3$ için

$$P(3)=3\cdot2\cdot1+6=12$$

bulunur.

**Neden doğru?** Monik üçüncü dereceden bir polinom, üç kökü verildiğinde başka bir katsayıya ihtiyaç kalmadan belirlenir.

## Soru 5

**Doğru cevap:** D

**Kazanım:** İkinci derece denklemin kök bağıntılarını koordinat düzlemindeki uzaklık hesabında kullanma.

**Çözüm:**

Kökler toplamı $\alpha+\beta=2$, kökler farkının mutlak değeri ise

$$|\alpha-\beta|=\sqrt{\Delta}=\sqrt8=2\sqrt2$$

olur. Ordinatlar farkı

$$|\alpha^2-\beta^2|=|\alpha-\beta||\alpha+\beta|=4\sqrt2$$

dir. Uzaklık

$$|AB|=\sqrt{(2\sqrt2)^2+(4\sqrt2)^2}
=\sqrt{8+32}=2\sqrt{10}$$

bulunur.

**Neden doğru?** Noktaların yatay ve düşey farkları aynı kök bağıntılarından elde edilip uzaklık bağıntısında birlikte kullanılmıştır.

## Soru 6

**Doğru cevap:** E

**Kazanım:** İkinci derece bir polinomun her gerçek sayı için negatif olmama koşulunu ayırıcıyla belirleme.

**Çözüm:**

Başkatsayı pozitif olduğundan polinomun her yerde negatif olmaması için ayırıcı sıfırdan büyük olmamalıdır:

$$\Delta=(m-2)^2-4(m+3)=m^2-8m-8\leq0$$

Bu eşitsizliğin gerçek çözüm aralığı

$$4-2\sqrt6\leq m\leq4+2\sqrt6$$

dır. Uçlar yaklaşık $-0{,}90$ ve $8{,}90$ olduğundan uygun tam sayılar $0,1,\ldots,8$ olmak üzere $9$ tanedir.

**Neden doğru?** Yukarı açılan bir parabolün $x$ ekseninin altına inmemesi, gerçek iki farklı köke sahip olmamasıyla eş değerdir.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Aralarında asal çarpanlara göre verilen kalanlardan birleşik bölenin kalanını kurma.

**Çözüm:**

$x^3-1=(x-1)(x^2+x+1)$ ve kalan en fazla ikinci derecedendir. $x^2+x+1$ ile kalan $x$ olduğundan

$$R(x)=x+k(x^2+x+1)$$

yazılabilir. $x-1$ ile kalan $4$ olduğundan $R(1)=4$ olmalıdır:

$$1+3k=4\Rightarrow k=1$$

Böylece $R(x)=(x+1)^2$ ve $R(2)=9$ olur.

**Neden doğru?** Kurulan kalan iki ayrı kalan koşulunu aynı anda sağlar ve derecesi birleşik bölenin derecesinden küçüktür.

## Soru 8

**Doğru cevap:** B

**Kazanım:** İki parabolün kesişim apsislerinin ortalamasını kökler toplamıyla bulma.

**Çözüm:**

Ortak noktalar için

$$x^2-4x+7=-x^2+2x+k$$

ve

$$2x^2-6x+7-k=0$$

elde edilir. Kesişim apsislerinin toplamı Vieta bağıntısından $3$'tür. Aritmetik ortalamaları

$$\frac32$$

olur.

**Neden doğru?** $k$ değeri kökler çarpımını değiştirir; kökler toplamını ve dolayısıyla orta noktanın apsisini değiştirmez.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Dördüncü dereceden görünen bir denklemi ara değişkenle iki ikinci derece denkleme ayırma.

**Çözüm:**

$t=x^2-3x$ yazılırsa

$$t^2-5t+4=(t-1)(t-4)=0$$

olur. $t=1$ için $x^2-3x-1=0$ denkleminin tam sayı kökü yoktur. $t=4$ için

$$x^2-3x-4=(x-4)(x+1)=0$$

olduğundan $x=4$ ve $x=-1$ elde edilir. Toplam $2$ farklı tam sayı kök vardır.

**Neden doğru?** Soru gerçek köklerin tamamını değil yalnızca tam sayı kökleri istediği için ilk denklemin irrasyonel kökleri sayılmaz.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Binom açılımında belirli bir katsayıyı bölüm polinomunun sabit terimiyle ilişkilendirme.

**Çözüm:**

Paydaki iki açılımın sabit terimleri birbirini yok eder; bu nedenle pay $x$ ile tam bölünür. Bölümün sabit terimi, payın $x$ teriminin katsayısıdır. $(x+1)^8$ içindeki $x$ katsayısı $8$, $(x-1)^8$ içindeki $x$ katsayısı $-8$'dir. Farkın $x$ katsayısı

$$8-(-8)=16$$

olur.

**Neden doğru?** Bir polinom $x$ ile bölündüğünde eski $x$ terimi yeni sabit terime dönüşür.
