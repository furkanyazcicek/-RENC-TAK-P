# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 49 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Verilen iki kök ve sabit terimden kübik polinomun üçüncü kökünü belirleme.

**Çözüm:**

İki kök $1$ ve $-2$'dir. Üçüncü kök $r$ olsun. Monik kübik polinomda kökler çarpımı sabit terimin ters işaretlisine eşittir:

$$1\cdot(-2)\cdot r=-6$$

Buradan $r=3$ bulunur. Kökler toplamı $1-2+3=2$'dir.

**Neden doğru?** Sabit terim üçüncü kökü tek olarak belirlediği için katsayıları ayrı ayrı bulmaya gerek yoktur.

## Soru 2

**Doğru cevap:** E

**Kazanım:** $x$ ve $1-x$ girdileri arasındaki antisimetri bağıntısını uygun noktada kullanma.

**Çözüm:**

$x=1$ yazılırsa sol taraf doğrudan $P(1)-P(0)$ olur. Sağ taraf ise

$$(2\cdot1-1)(1^2-1+4)=1\cdot4=4$$

olduğundan istenen fark $4$'tür.

**Neden doğru?** Seçilen girdi, bağıntıdaki iki polinom değerini soruda istenen sırayla verir.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Yüksek kuvvetleri bir ikinci derece polinomuna göre döngüsel indirgeme.

**Çözüm:**

$$x^3+1=(x+1)(x^2-x+1)$$

olduğundan kalan hesabında $x^3\equiv-1$ ve dolayısıyla $x^6\equiv1$ yazılabilir. $100\equiv4\pmod6$ ve $50\equiv2\pmod6$ olduğundan

$$x^{100}+x^{50}+1\equiv x^4+x^2+1$$

olur. $x^2\equiv x-1$ ve $x^4=x\cdot x^3\equiv-x$ kullanılırsa kalan

$$-x+(x-1)+1=0$$

bulunur.

**Neden doğru?** Sonuç sıfır olduğu için verilen polinom bölene tam bölünmektedir.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Grafikteki kesme ve teğet olma bilgisinden kök katlılıklarıyla polinom kurma.

**Çözüm:**

$-1$ çift katlı, $2$ tek katlı köktür. Bu nedenle

$$P(x)=a(x+1)^2(x-2)$$

yazılır. $P(0)=4$ koşulundan $-2a=4$ ve $a=-2$ bulunur. Buna göre

$$P(3)=-2\cdot(4)^2\cdot1=-32$$

**Neden doğru?** Kübik derece, belirtilen katlılıkların toplamına eşit olduğu için başka çarpan yoktur.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Bir polinom grafiğinin dikey ötelenmesini fonksiyon değerine aktarma.

**Çözüm:**

Başlangıçtaki polinom $f(x)=(x-1)(x-2)(x-3)$ olsun. Grafik $m$ birim yukarı ötelenince yeni polinom

$$P(x)=f(x)+m$$

olur. Grafiğin $(0,2)$ noktasından geçmesi $P(0)=2$ demektir:

$$(-1)(-2)(-3)+m=2$$

$$-6+m=2\Rightarrow m=8$$

**Neden doğru?** Dikey öteleme yalnızca fonksiyon değerine $m$ ekler; $x$ değerini değiştirmez.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Parabol ile yatay doğrunun kesişim apsislerinin tam sayı olma koşulunu inceleme.

**Çözüm:**

Ortak noktalar için

$$x^2-4x+5=k$$

olur. Kökler

$$x=2\pm\sqrt{k-1}$$

biçimindedir. İki farklı tam sayı kök için $k-1$ pozitif bir tam kare olmalıdır. Verilen aralıkta $k-1=1,4,9$, yani $k=2,5,10$ olur. Toplam $3$ değer vardır.

**Neden doğru?** $k=1$ teğetlik verip yalnızca bir ortak nokta oluşturduğundan sayıma katılmaz.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Bir ikinci derece polinomun en küçük değerinden yatay doğrularla kesişim durumunu belirleme.

**Çözüm:**

$$P(x)=x^2-6x+13=(x-3)^2+4$$

olduğundan polinomun en küçük değeri $4$'tür. $P(x)=k$ denkleminin gerçek kökü olmaması için $k<4$ gerekir. Verilen kümede $0,1,2,3$ olmak üzere $4$ değer vardır.

**Neden doğru?** $k=4$ tepe noktasında bir gerçek kök verdiği için köksüz durumlara dahil değildir.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Eski köklerin toplam ve çarpımından yeni köklerin denklemini oluşturma.

**Çözüm:**

$\alpha+\beta=5$ ve $\alpha\beta=6$'dır. Ayrıca

$$\alpha+\frac1\beta=\alpha+\frac\alpha{\alpha\beta}=\frac76\alpha$$

ve benzer biçimde diğer yeni kök $\frac76\beta$ olur. Yeni köklerin toplamı $\frac{35}{6}$, çarpımı $\frac{49}{6}$'dır. Denklem

$$x^2-\frac{35}{6}x+\frac{49}{6}=0$$

veya

$$6x^2-35x+49=0$$

olur.

**Neden doğru?** $\alpha\beta=6$ ilişkisi, ters kök terimlerini aynı kökün sabit katına dönüştürür.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Bir polinomun kareli ifade biçiminden en büyük değerini belirleme.

**Çözüm:**

Her gerçek $x$ için

$$(x^2-4x+3)^2\geq0$$

olduğundan $P(x)\leq9$'dur. $x^2-4x+3=0$ denkleminin $x=1$ ve $x=3$ gerçek kökleri bulunduğu için kareli ifade sıfır olabilir. Dolayısıyla en büyük değer $9$'dur.

**Neden doğru?** Üst sınır yalnızca teorik değil, iki gerçek $x$ değerinde gerçekten elde edilmektedir.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Kübik bir denklemi çarpanlara ayırıp farklı kökleri ayırt etme.

**Çözüm:**

Denklem bir tarafa toplanıp çarpanlara ayrılırsa

$$x^3-3x-2=(x-2)(x+1)^2=0$$

olur. Farklı gerçek kökler $2$ ve $-1$'dir. Toplamları $1$ olur.

**Neden doğru?** $-1$ iki katlı olsa da soru farklı köklerin toplamını istediği için yalnızca bir kez kullanılır.
