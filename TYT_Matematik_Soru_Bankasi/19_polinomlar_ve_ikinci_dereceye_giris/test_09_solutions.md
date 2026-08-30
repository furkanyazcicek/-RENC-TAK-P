# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 09 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** En yüksek dereceli terimler yok olduğunda polinomun derecesini belirleme.

**Çözüm:** Binom açılımında $(x^2+1)^4$ polinomunun ilk terimleri $x^8+4x^6+\cdots$ biçimindedir. $x^8$ terimleri birbirini götürür; kalan en yüksek dereceli terim $4x^6$ olduğundan derece 6'dır.

**Neden doğru?** Çıkarma işlemi yalnız sekizinci dereceli öncü terimi yok eder, altıncı dereceli katsayı sıfır değildir.

**Çeldirici notu:** Açılım yapmadan ilk ifadenin derecesini 8 almak öncü terim iptalini kaçırır.

## Soru 2
**Doğru cevap:** E

**Kazanım:** Polinomun ardışık aralıklardaki değer farklarını kullanma.

**Çözüm:** $x=0$ için $P(2)-P(0)=8$, dolayısıyla $P(2)=9$ olur. $x=2$ için $P(4)-P(2)=16$ olduğundan $P(4)=25$ bulunur.

**Neden doğru?** Verilen özdeşlik iki birim aralıklı polinom değerlerini birbirine bağlar ve iki kez uygulanabilir.

**Çeldirici notu:** Yalnız ilk adımı kullanmak $P(2)$ değerini sonuç sanmaya yol açar.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Çarpan teoremiyle katsayılar arasında bağıntı kurma.

**Çözüm:** $x+1$ çarpan olduğundan $P(-1)=0$'dır. Bu koşul $2-2a+b=0$ verir. Buradan $2a-b=2$ bulunur.

**Neden doğru?** Çarpan teoremine göre $x+1$ ile tam bölünebilme, $-1$ değerinde polinomun sıfır olmasına eşdeğerdir.

**Çeldirici notu:** Tek dereceli terimlerde $x=-1$ işaretini korumamak bağıntının yönünü değiştirir.

## Soru 4
**Doğru cevap:** B

**Kazanım:** Polinom çarpımında belirli dereceli terimin katsayısını bulma.

**Çözüm:** $x^3$ terimi $x^2\cdot ax$ ve $2x\cdot x^2$ çarpımlarından gelir. Katsayı $a+2=7$ olduğundan $a=5$'tir.

**Neden doğru?** Dereceleri toplamı 3 olan bütün terim çiftleri hesaba katılmıştır.

**Çeldirici notu:** Yalnız bir çarpımı almak $2x$ teriminin katkısını atlar.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Monik ikinci dereceden polinomu bir kök ve bir değer yardımıyla belirleme.

**Çözüm:** $P(x)=(x-1)(x-r)$ yazılabilir. $P(2)=2-r=3$ olduğundan $r=-1$'dir. Böylece $P(3)=(3-1)(3+1)=8$ olur.

**Neden doğru?** Baş katsayının 1 olması çarpanların önündeki katsayıyı sabitler; verilen değer diğer kökü belirler.

**Çeldirici notu:** $P(2)=3$ bilgisini ikinci kökün 3 olması biçiminde yorumlamak yanlıştır.

## Soru 6
**Doğru cevap:** D

**Kazanım:** İkinci dereceden bölenin bir kökünde kalan değerini kullanma.

**Çözüm:** $x^2+x=x(x+1)$ olduğundan $-1$ bölenin köküdür. Bu nedenle $P(-1)=2(-1)-1=-3$ olur.

**Neden doğru?** Bölme özdeşliğinde bölen sıfır olduğunda polinomun değeri kalanın değerine eşittir.

**Çeldirici notu:** Kalanı sabit sayı sanmak $2x$ terimini yok sayar.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Birer birer ilerleyen değer farklarını biriktirme.

**Çözüm:** Sırasıyla $P(1)-P(0)=2$, $P(2)-P(1)=8$ ve $P(3)-P(2)=14$ elde edilir. $P(0)=2$ ile bu farklar toplandığında $P(3)=26$ bulunur.

**Neden doğru?** Ardışık üç fark toplandığında ara değerler sadeleşir ve doğrudan $P(3)-P(0)$ kalır.

**Çeldirici notu:** Yalnız $x=3$ yazmak $P(3)-P(2)$ farkını sonuç sanmaya neden olur.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Kökler toplamı ve çarpımından simetrik rasyonel ifade bulma.

**Çözüm:** $\alpha+\beta=6$ ve $\alpha\beta=5$'tir. İstenen ifade
$$\frac{\alpha^2+\beta^2}{\alpha\beta}=\frac{(\alpha+\beta)^2-2\alpha\beta}{\alpha\beta}=\frac{36-10}{5}=\frac{26}{5}$$
olur.

**Neden doğru?** Pay ortak paydada köklerin kareleri toplamına dönüşür ve Vieta bağıntılarıyla hesaplanır.

**Çeldirici notu:** Payı $(\alpha+\beta)^2$ almak $2\alpha\beta$ terimini fazladan içerir.

## Soru 9
**Doğru cevap:** B

**Kazanım:** İkinci dereceden denklemin gerçek kökü olmama koşulunu kullanma.

**Çözüm:** Gerçek kök olmaması için $\Delta<0$ olmalıdır. $16-4m<0$ eşitsizliğinden $m>4$ çıkar. Bu koşulu sağlayan en küçük tam sayı 5'tir.

**Neden doğru?** Gerçek katsayılı ikinci dereceden denklem, diskriminantı negatif olduğunda gerçek köke sahip değildir.

**Çeldirici notu:** $\Delta\leq0$ almak çift katlı gerçek kökü de yanlışlıkla dışarıda bırakır.

## Soru 10
**Doğru cevap:** C

**Kazanım:** Köklerin çarpımı ve tam sayı koşulundan kökleri belirleme.

**Çözüm:** Çarpımları 12 olan ardışık pozitif tam sayılar 3 ve 4'tür. Kökler toplamı $s$ olduğundan $s=3+4=7$ bulunur.

**Neden doğru?** Vieta bağıntılarına göre sabit terim kökler çarpımını, $s$ ise kökler toplamını verir.

**Çeldirici notu:** 2 ve 6 çarpımı 12 olsa da bu sayılar ardışık değildir.
