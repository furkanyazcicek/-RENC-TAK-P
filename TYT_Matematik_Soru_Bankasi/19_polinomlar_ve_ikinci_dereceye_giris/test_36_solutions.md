# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 36 — Çözümler

## Soru 1
**Doğru cevap:** A

**Kazanım:** Polinom ile $P(-x)$ toplamında tek dereceli terimlerin yok olduğunu fark etme.

**Çözüm:** $P(x)+P(-x)$ toplamında tek dereceli terimler birbirini götürür, çift dereceli ve sabit terimler iki katına çıkar:
$$P(x)+P(-x)=-4x^4+14.$$
İki sıfırdan farklı terim vardır.

**Neden doğru?** Toplam yalnız polinomun çift kısmını iki katıyla bırakır.

**Çeldirici notu:** Tek dereceli terimlerin işaret değiştirdiğini hesaba katmamak bütün terimleri saymaya yol açar.

## Soru 2
**Doğru cevap:** B

**Kazanım:** Eşit polinom değerlerinden ikinci derece polinomun simetri eksenini bulma.

**Çözüm:** Monik ikinci dereceden polinomda $P(2)=P(6)$ olduğundan simetri ekseni 2 ile 6'nın orta noktası olan $x=4$'tür. Diğer yandan eksen $x=-\frac a2$ olduğuna göre
$$-\frac a2=4\Rightarrow a=-8.$$

**Neden doğru?** Eşit değerleri veren iki farklı apsis simetri eksenine eşit uzaklıktadır.

**Çeldirici notu:** Apsislerin toplamını doğrudan $a$ almak Vieta ile simetri ekseni bağıntısını karıştırır.

## Soru 3
**Doğru cevap:** C

**Kazanım:** Üç noktadaki değerlerden ikinci dereceden kalan polinomunu belirleme.

**Çözüm:** $R(x)=ax^2+bx+c$ olsun. Eşit aralıklı $2,3,6$ değerlerinin birinci farkları 1 ve 3, ikinci farkı 2 olduğundan $2a=2$ ve $a=1$'dir. $R(1)=2$, $R(2)=3$ koşulları
$$b+c=1,\qquad2b+c=-1$$
verir. Buradan $b=-2$, $c=3$ bulunur. Katsayılar toplamı $1-2+3=2$'dir.

**Neden doğru?** Bölenin üç kökünde $P$ ile kalan $R$ aynı değerleri alır.

**Çeldirici notu:** Verilen üç değeri doğrudan katsayı sanmak kalan polinomunu kurmaz.

## Soru 4
**Doğru cevap:** D

**Kazanım:** Polinom bölmesinde bölümün sabit terimini sentetik bölmeyle bulma.

**Çözüm:** 2 ile sentetik bölme uygulanır:

|  | $1$ | $2$ | $-5$ | $-6$ | $8$ |
|---:|---:|---:|---:|---:|---:|
|  |  | $2$ | $8$ | $6$ | $0$ |
| bölüm/kalan | $1$ | $4$ | $3$ | $0$ | $8$ |

Bölüm $x^3+4x^2+3x$ olduğundan bölüm polinomunun sabit terimi 0'dır.

**Neden doğru?** Sentetik bölmede son sütun kalan, önceki sütunlar bölüm katsayılarıdır.

**Çeldirici notu:** Son bölüm katsayısı ile kalanı karıştırmak hatalı sonuca götürür.

## Soru 5
**Doğru cevap:** E

**Kazanım:** Kökleri verilen monik polinomun sabit terimini bulma.

**Çözüm:**
$$P(x)=(x-1)(x-2)(x+1)^2.$$
$x=0$ yazıldığında
$$P(0)=(-1)(-2)(1)^2=2$$
bulunur.

**Neden doğru?** Sabit terim, çarpan biçimindeki polinomun $x=0$ değeridir.

**Çeldirici notu:** Dördüncü derecede sabit terimin işaretini kökler toplamından çıkarmaya çalışmak güvenilir değildir.

## Soru 6
**Doğru cevap:** A

**Kazanım:** Ötelemiş polinomların farkını açarak katsayılar toplamını bulma.

**Çözüm:**
$$P(x+1)=x^3+3x^2,$$
$$P(x-1)=x^3-3x^2+4.$$
Fark $6x^2-4$ olur. Katsayılar toplamı $6-4=2$'dir.

**Neden doğru?** Katsayılar toplamı fark polinomunun $x=1$ değerine eşittir.

**Çeldirici notu:** Sabit terim $-4$'ü toplamda atlamak 6 sonucuna götürür.

## Soru 7
**Doğru cevap:** B

**Kazanım:** Üçüncü dereceden polinomu bir kök yardımıyla çarpanlara ayırma.

**Çözüm:** $P(1)=0$ olduğundan $x-1$ bir çarpandır. Bölme yapıldığında
$$P(x)=(x-1)(x^2+2x-8)=(x-1)(x+4)(x-2)$$
elde edilir. Tek negatif kök $-4$'tür.

**Neden doğru?** Çarpanlara ayrılmış biçim üç gerçek kökü doğrudan gösterir.

**Çeldirici notu:** $x+4$ çarpanından kökü 4 almak işaret hatasıdır.

## Soru 8
**Doğru cevap:** C

**Kazanım:** Rasyonel kök ifadesini kökler toplamı ve çarpımına dönüştürme.

**Çözüm:** $s=\alpha+\beta=\frac72$ ve $p=\alpha\beta=\frac32$ olsun. İfade
$$\frac{\alpha(1+\alpha)+\beta(1+\beta)}{(1+\alpha)(1+\beta)}
=\frac{s+(s^2-2p)}{1+s+p}$$
biçimindedir. Değerler yerleştirilince
$$\frac{\frac72+\frac{49}{4}-3}{1+\frac72+\frac32}
=\frac{\frac{51}{4}}6=\frac{17}{8}$$
bulunur.

**Neden doğru?** Pay ve payda simetrik ifadeler olduğundan yalnız kökler toplamı ile çarpımı yeterlidir.

**Çeldirici notu:** Kesirleri payda eşitlemeden terim terim toplamak simetrik yapıyı bozar.

## Soru 9
**Doğru cevap:** D

**Kazanım:** Kökler çarpımı sabit olan pozitif tam sayı çiftlerini sayma.

**Çözüm:** Pozitif tam sayı köklerin çarpımı 18'dir. Sırasız çarpan çiftleri
$$(1,18),\quad(2,9),\quad(3,6)$$
olur. Bunların kökler toplamları sırasıyla 19, 11 ve 9 olduğundan $m$ üç farklı değer alır.

**Neden doğru?** Her pozitif çarpan çifti bir monik ikinci derece denklem ve bir $m$ değeri belirler.

**Çeldirici notu:** $(1,18)$ ile $(18,1)$ çiftlerini ayrı saymak aynı denklemi iki kez sayar.

## Soru 10
**Doğru cevap:** E

**Kazanım:** Baş katsayısı pozitif ikinci derece polinomun işaretini köklerine göre belirleme.

**Çözüm:** Baş katsayı pozitif olduğundan parabolün kolları yukarı yönlüdür. Polinom köklerin dışında pozitif, köklerin arasında negatiftir. Sıkı eşitsizlik nedeniyle kökler alınmaz:
$$x\in(-\infty,-2)\cup(5,\infty).$$

**Neden doğru?** İşaret, her basit kökte değişir ve uç bölgelerde baş katsayının işaretiyle aynıdır.

**Çeldirici notu:** Köklerin arasını seçmek $P(x)<0$ eşitsizliğinin çözümünü verir.
