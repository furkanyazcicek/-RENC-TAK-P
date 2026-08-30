# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 48 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Polinom grafiğinin uç davranışı ve köklerdeki temas biçiminden en küçük dereceyi belirleme.

**Çözüm:**

Grafiğin iki ucunun aynı yönde olması dereceyi çift yapar. Eksenin kesildiği iki kök en az birer katlı, eksene değip geri dönülen kök ise en az iki katlıdır. En küçük derece

$$1+1+2=4$$

olur.

**Neden doğru?** Daha düşük bir derece hem iki kesme kökünü hem de çift katlı temas kökünü birlikte taşıyamaz.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Bir polinomun tek ve çift bileşenlerini $P(x)$ ile $P(-x)$ bağıntılarından elde etme.

**Çözüm:**

İki eşitlik taraf tarafa toplanırsa

$$2P(x)=6x^2+8x+4$$

ve

$$P(x)=3x^2+4x+2$$

bulunur. Dolayısıyla

$$P(2)=3\cdot4+4\cdot2+2=22$$

**Neden doğru?** Toplama işlemi $P(-x)$ terimlerini yok ederek $P(x)$ polinomunu doğrudan belirler.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Kaydırılmış bir polinom eşitliğinde uygun girdiyle bölen terimini yok etme.

**Çözüm:**

$P(3)$ için $x+2=3$, yani $x=1$ seçilir. Bu değerde $x^2-1=0$ olduğundan $Q(x)$'i içeren terim yok olur:

$$P(3)=3\cdot1+4=7$$

**Neden doğru?** Seçilen girdi hem istenen $P$ değerini verir hem de bilinmeyen $Q(1)$ değerine ihtiyacı ortadan kaldırır.

## Soru 4

**Doğru cevap:** A

**Kazanım:** İki kare farkından yararlanarak kökleri ve katlılıklarını belirleme.

**Çözüm:**

$$P(x)=(x^2+1-2x)(x^2+1+2x)$$

$$=(x-1)^2(x+1)^2$$

olur. $1$ ve $-1$ köklerinin her biri iki katlıdır. Katlılıklar toplamı $2+2=4$'tür.

**Neden doğru?** Soru farklı kök sayısını değil, köklerin katlılıkları toplamını istemektedir.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Köklere ait çarpım biçimindeki bir ifadeyi polinomun uygun değeriyle bulma.

**Çözüm:**

Monik polinom

$$P(x)=(x-\alpha)(x-\beta)(x-\gamma)$$

biçimindedir. $x=-1$ yazılırsa

$$P(-1)=-(\alpha+1)(\beta+1)(\gamma+1)$$

olur. Diğer yandan $P(-1)=-1+3+1=3$ olduğundan istenen çarpım $-3$'tür.

**Neden doğru?** Üç negatif çarpan toplamda negatif işaret verdiği için işaret değişikliği korunmalıdır.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Bir ikinci derece polinomun açık aralıkta tek kök bulundurmasını uç nokta işaretleriyle denetleme.

**Çözüm:**

$$f_m(0)=-m,qquad f_m(1)=-1$$

olur. Uç noktalardaki değerler zıt işaretliyse süreklilikten $(0,1)$ aralığında bir kök bulunur. Bunun için

$$f_m(0)f_m(1)=m<0$$

olmalıdır. Verilen kümede $m=-3,-2,-1$ olmak üzere $3$ değer vardır.

**Neden doğru?** İkinci derece bir polinom, uçlarda zıt işaret varken aralıkta tek sayıda ve en fazla iki kök bulundurabileceğinden tam olarak bir kök vardır.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Parabolün simetri eksenini kullanarak eş uzaklıktaki nokta değerlerini ilişkilendirme.

**Çözüm:**

Tepe noktasının apsisi $2$ olduğundan simetri ekseni $x=2$'dir. $0$ ve $4$ sayıları bu eksene eşit uzaklıktadır. Bu nedenle parabolün bu apsislerdeki ordinatları eşittir. $f(0)=3$ olduğundan $f(4)=3$'tür.

**Neden doğru?** Parabolün simetrisi, katsayıları ayrı ayrı bulmadan istenen ordinatı belirler.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Kökler toplamı ve çarpımından oran biçimindeki yeni köklerin denklemini kurma.

**Çözüm:**

Vieta bağıntılarından $\alpha+\beta=4$ ve $\alpha\beta=1$'dir. Yeni köklerin toplamı

$$\frac\alpha\beta+\frac\beta\alpha
=\frac{\alpha^2+\beta^2}{\alpha\beta}
=\frac{(\alpha+\beta)^2-2\alpha\beta}{\alpha\beta}=14$$

ve çarpımı $1$'dir. Aranan denklem

$$x^2-14x+1=0$$

olur.

**Neden doğru?** Yeni köklerin hem toplamı hem çarpımı eski köklerin simetrik bağıntılarıyla tek olarak belirlenir.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Çift fonksiyonların kesişimini $|x|$ değişkeniyle ikinci derece denkleme indirgeme.

**Çözüm:**

$t=|x|\geq0$ olsun. $x^2=t^2$ olduğundan ortak noktalar için

$$t^2=t+2$$

$$t^2-t-2=(t-2)(t+1)=0$$

elde edilir. $t\geq0$ olduğu için $t=2$ alınır. $|x|=2$ den $x=-2$ ve $x=2$ olmak üzere iki ortak nokta vardır.

**Neden doğru?** $t=-1$ mutlak değerin değer kümesine uymadığı için yeni bir kesişim oluşturmaz.

## Soru 10

**Doğru cevap:** B

**Kazanım:** İki polinomun kalanlarından çarpımlarının kalanını hesaplama.

**Çözüm:**

Çarpımın kalanını bulmak için verilen kalanlar çarpılır:

$$(x+2)(2x-1)=2x^2+3x-2$$

$x^2+1$ ile kalan hesabında $x^2\equiv-1$ olduğundan

$$2x^2+3x-2\equiv-2+3x-2=3x-4$$

bulunur.

**Neden doğru?** Son ifadenin derecesi bölenin derecesinden küçüktür; bu nedenle başka indirgeme gerekmez.
