# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 45 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Polinom değerlerinden sonlu farklar yoluyla bir sonraki değeri belirleme.

**Çözüm:**

Birinci farklar $3,11,25$; ikinci farklar $8,14$ ve üçüncü fark $6$'dır. Derecesi en fazla $3$ olan bir polinomda üçüncü fark sabittir. Bu nedenle sıradaki ikinci fark $14+6=20$, sıradaki birinci fark $25+20=45$ olur.

$$P(4)=40+45=85$$

**Neden doğru?** Eşit aralıklı girdilerde üçüncü dereceden bir polinomun üçüncü farkı sabittir; tablo bu kuralla tek biçimde tamamlanır.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Simetrik katsayılı bir polinomu uygun ikinci derece çarpanlara ayırma.

**Çözüm:**

Polinom

$$P(x)=(x^2+2x+1)(x^2+3x+1)=(x+1)^2(x^2+3x+1)$$

biçiminde çarpanlara ayrılır. $x=-1$ bir gerçek köktür. $x^2+3x+1$ denkleminin ayırıcısı $9-4=5>0$ olduğundan bu çarpan iki farklı gerçek kök verir. Toplam $3$ farklı gerçek kök vardır.

**Neden doğru?** $-1$'in iki katlı olması onu iki farklı kök yapmaz; farklı kök sayısı $1+2=3$'tür.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Bir polinomun köklerindeki işaret değişiminden kök katlılıklarını belirleme.

**Çözüm:**

İşaretin değişmediği $x=1$ kökü çift katlıdır. Diğer iki kökte işaret değiştiği için bunlar tek katlıdır. Derece $4$ ve başkatsayı $1$ olduğundan

$$P(x)=(x+2)(x-1)^2(x-3)$$

olur. Dolayısıyla

$$P(0)=2\cdot1\cdot(-3)=-6$$

**Neden doğru?** Katlılıkların toplamı $1+2+1=4$ olduğundan başka bir çarpan bulunamaz.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Ardışık polinom değerleri arasındaki bağıntıyı teleskopik toplama ile kullanma.

**Çözüm:**

$x=0,1,2,3,4$ için yazılan eşitlikler taraf tarafa toplandığında ara terimler sadeleşir:

$$P(5)-P(0)=\sum_{k=0}^{4}(6k+3)$$

$$=6(0+1+2+3+4)+5\cdot3=60+15=75$$

$P(0)=2$ olduğundan $P(5)=77$ bulunur.

**Neden doğru?** Toplamda her ara $P(k)$ değeri bir kez artı, bir kez eksi işaretle yer aldığı için yalnızca uç değerler kalır.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Bir polinom eşitliğinde bileşik ifadeyi yeni değişken olarak tanıma.

**Çözüm:**

Sağ taraf

$$8x^3-12x^2+6x+4=(2x-1)^3+5$$

biçimindedir. $t=2x-1$ yazılırsa $P(t)=t^3+5$ elde edilir. Buna göre

$$P(3)=3^3+5=32$$

**Neden doğru?** Eşitlik her gerçek $x$ için geçerli ve $2x-1$ her gerçek değeri alabildiği için $P(t)$ tam olarak belirlenir.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Çift katlı bir çarpanı kullanarak polinom katsayılarını belirleme.

**Çözüm:**

Polinom kübik olduğundan

$$P(x)=(x-2)^2(x-r)$$

yazılabilir. Sabit terim $-4r=8$ olduğundan $r=-2$'dir. Bu durumda

$$P(x)=(x-2)^2(x+2)=x^3-2x^2-4x+8$$

olur. $a=-2$ ve $b=-4$ olduğundan $a+b=-6$ bulunur.

**Neden doğru?** Başkatsayın $1$ olması ek bir sabit çarpanı engeller; sabit terim de kalan doğrusal çarpanı tek başına belirler.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Simetrik girdiler içeren polinom bağıntısında simetri merkezini kullanma.

**Çözüm:**

$x=1$ için $2-x$ de $1$ olur. Bu nedenle

$$2P(1)=2-4+10=8$$

ve $P(1)=4$ bulunur.

**Neden doğru?** $x$ ile $2-x$ ifadelerinin eşit olduğu tek simetri noktası kullanıldığında bilinmeyen iki değer tek değere dönüşür.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Bir polinomu çarpanlara ayırıp işaret incelemesini tam sayılarla sınırlama.

**Çözüm:**

Gruplayarak

$$P(x)=x^2(x-4)-(x-4)=(x-1)(x+1)(x-4)$$

elde edilir. Başkatsayı pozitif ve kökler $-1,1,4$ olduğundan $P(x)\leq0$ aralıkları

$$(-\infty,-1]\cup[1,4]$$

olur. $[-2,5]$ içindeki uygun tam sayılar $-2,-1,1,2,3,4$ olmak üzere $6$ tanedir.

**Neden doğru?** Kökler basit olduğu için her kökte işaret değişir; eşitlik işareti nedeniyle kökler de sayıma katılır.

## Soru 9

**Doğru cevap:** C

**Kazanım:** İkinci derece denklemin kökleri arasındaki uzaklığı ayırıcı ile ilişkilendirme.

**Çözüm:**

Başkatsayı $1$ olan ikinci derece denklemde iki kök arasındaki uzaklık $\sqrt{\Delta}$'dır. Burada

$$\Delta=36-4m$$

olduğundan

$$\sqrt{36-4m}=4$$

$$36-4m=16\quad\Rightarrow\quad m=5$$

**Neden doğru?** $A$ ve $B$ parabolün $x$ ekseniyle kesişimleri olduğundan apsisleri denklemin gerçek kökleridir ve yatay uzaklıkları kök farkıdır.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Bir polinomun bileşkesini ara değişken kullanarak iki denklem ailesine ayırma.

**Çözüm:**

$y=P(x)$ olsun. $P(y)=6$ eşitliği

$$y^2-5y+6=6\quad\Rightarrow\quad y(y-5)=0$$

olduğundan $P(x)=0$ veya $P(x)=5$ olmalıdır.

$P(x)=0$ denkleminin kökleri $2$ ve $3$'tür. Diğer durumda

$$x^2-5x+1=0$$

denkleminin ayırıcısı $21>0$ olduğundan iki farklı gerçek kök daha gelir. Kök kümeleri ayrık olduğu için toplam $4$ farklı gerçek kök vardır.

**Neden doğru?** Bileşke denklemi önce $P(x)$'in alabileceği iki değere ayrılmış, sonra her değer için gerçek kökler ayrı ayrı sayılmıştır.
