# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 06 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Sıfır polinomunda bütün katsayıların sıfır olması koşulunu kullanma.

**Çözüm:**

$$a-2=0,qquad b+1=0,qquad c-4=0$$

olmalıdır. Buradan $a=2$, $b=-1$, $c=4$ ve

$$a+b+c=2-1+4=5$$

bulunur.

**Neden doğru?** Sıfır polinomu her gerçek $x$ için 0 olduğundan bütün katsayıları sıfırdır.

**Çeldirici notu:** Yalnız polinomun sabit teriminin olmamasını sıfır polinomu için yeterli sanmak diğer katsayıları gözden kaçırır.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Ötelenmiş polinom girdisinde sıfır değerine karşılık gelen değişkeni bulma.

**Çözüm:**

$P(0)$ için $x+2=0$, yani $x=-2$ alınır:

$$P(0)=(-2)^3-3(-2)+1=-8+6+1=-1.$$

**Neden doğru?** Sol taraftaki polinom girdisini 0 yapan sağ taraf değişkeni kullanılmıştır.

**Çeldirici notu:** Sağ tarafta $x=0$ yazmak $P(2)$ değerini verir.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Polinomda negatif girdinin tek ve çift kuvvetlere etkisini kullanma.

**Çözüm:**

$$P(-1)=2(-1)^5-(-1)^4+3(-1)^3-4(-1)+5.$$

Buradan

$$-2-1-3+4+5=3$$

bulunur.

**Neden doğru?** Tek kuvvetler işaret değiştirirken dördüncü kuvvet pozitif kalır ve önündeki eksi korunur.

**Çeldirici notu:** $-x^4$ terimini $x=-1$ için pozitif almak dışarıdaki eksi işaretini kaybettirir.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Bileşik polinomun sabit terimini iç polinomun sabit değeri üzerinden bulma.

**Çözüm:**

Sabit terim için dış değişkene $x=0$ yazılır:

$$P(0^2+2\cdot0+3)=P(3)=7.$$

**Neden doğru?** İç polinomun sabit terimi 3 olduğundan bileşiğin sabit terimi $P(3)$'tür.

**Çeldirici notu:** $P(0)$ kullanmak iç polinomdaki sabit 3'ü yok sayar.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Polinom çarpımında belirli katsayıdan parametre bulma.

**Çözüm:**

$x^4$ terimine

$$x^2\cdot(-x^2)=-x^4,qquad ax\cdot2x^3=2ax^4$$

katkı verir. Katsayı $2a-1$ olduğundan

$$2a-1=5 Rightarrow a=3.$$

**Neden doğru?** Üsleri toplamı 4 olan iki terim çifti birlikte kullanılmıştır.

**Çeldirici notu:** $2ax^4$ katkısında çapraz çarpımı atlamak parametreyi belirlemeyi engeller.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Polinom bileşiminde dereceleri çarpma.

**Çözüm:**

$$\deg(P\circ Q)=\deg P\cdot\deg Q=3\cdot4=12.$$

**Neden doğru?** $P$'nin baş terimindeki üçüncü kuvvet, dördüncü dereceden $Q$ polinomuna uygulanır.

**Çeldirici notu:** Dereceleri toplamak bileşim yerine polinom çarpımı kuralını kullanmaktır.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Kalan bilgisini değişken katsayılı yeni polinoma aktarma.

**Çözüm:**

$P(2)=3$ olduğundan

$$Q(2)=2^2P(2)-5=4\cdot3-5=7.$$

**Neden doğru?** $x-2$ ile bölümden kalan $Q(2)$ değeridir.

**Çeldirici notu:** $x^2$ çarpanını 2 almak karesini hesaplamadan işlem yapmaktır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** İkinci dereceden bölenin köklerinde doğrusal kalanı belirleme.

**Çözüm:**

$$x^2+x-2=(x-1)(x+2).$$

Bu nedenle

$$a+b=4,qquad -2a+b=1.$$

Denklemlerden $a=1$, $b=3$ ve $ab=3$ bulunur.

**Neden doğru?** Bölenin her iki kökü doğrusal kalan için ayrı bir denklem verir.

**Çeldirici notu:** $x=-2$ için kalanı $2a+b$ yazmak negatif işareti kaybettirir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Parametreli denklemin köklerinin kareleri toplamını kullanma.

**Çözüm:**

Denklem

$$(x-1)(x-m)=0$$

biçimindedir; kökler 1 ve $m$'dir. Buna göre

$$1+m^2=17 Rightarrow m^2=16.$$

$m>1$ olduğundan $m=4$ alınır.

**Neden doğru?** İşaret koşulu $m=-4$ adayını eler.

**Çeldirici notu:** Kökler toplamını 17'ye eşitlemek kareler toplamı koşulunu değiştirir.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Kökler farkının karesini kökler toplamı ve çarpımıyla hesaplama.

**Çözüm:**

$$\alpha+\beta=3,qquad \alpha\beta=\frac12.$$

Bu nedenle

$$(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta=9-2=7.$$

**Neden doğru?** Kökleri açık biçimde çözmeden farkın karesi simetrik bağıntıyla bulunur.

**Çeldirici notu:** $(\alpha-\beta)^2$ ifadesinde $2\alpha\beta$ yerine $4\alpha\beta$ oluştuğunu gözden kaçırmak sonucu 8 yapar.
