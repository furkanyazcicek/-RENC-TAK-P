# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 20 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Aynı dereceli öncü terimler iptal edildiğinde kalan polinomun derecesini bulma.

**Çözüm:** $P(x)^2$ polinomunun ilk terimleri $x^6+2x^5+\cdots$, $P(x^2)$ polinomunun ilk terimleri $x^6+x^4+1$'dir. $x^6$ terimleri yok olur, $2x^5$ kaldığı için derece 5'tir.

**Neden doğru?** İkinci ifadede beşinci dereceli terim bulunmadığından farktaki $2x^5$ terimi iptal olamaz.

**Çeldirici notu:** Her iki ifadenin derecesini 6 bulup farkın da 6 olduğunu söylemek öncü terim iptalini kaçırır.

## Soru 2
**Doğru cevap:** A

**Kazanım:** İkinci dereceden polinomun sabit ikinci farkını hesaplama.

**Çözüm:** İkinci dereceden $ax^2+bx+c$ polinomu için $P(x+1)-2P(x)+P(x-1)=2a$'dır. Burada $a=3$ olduğundan değer 6'dır.

**Neden doğru?** Açılımda doğrusal ve sabit terimler tamamen yok olur, yalnız karesel terimin iki katı kalır.

**Çeldirici notu:** İlk farkı kullanmak $x$'e bağlı bir ifade üretir ve ortadaki $-2P(x)$ terimini eksik bırakır.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Polinom çarpımında belirli dereceli katsayıdan parametre bulma.

**Çözüm:** $x^3$ terimi $x^3\cdot(-2)$ ve $ax\cdot x^2$ çarpımlarından gelir. Katsayı $a-2=5$ olduğundan $a=7$'dir.

**Neden doğru?** Dereceleri toplamı 3 olan bütün terim eşleşmeleri hesaba katılmıştır.

**Çeldirici notu:** $-2x^3$ katkısını atmak $a=5$ sonucuna götürür.

## Soru 4
**Doğru cevap:** C

**Kazanım:** Bölme özdeşliğini ters yönde kullanarak sabit terim bulma.

**Çözüm:**
$$P(x)=(x-2)(x^2+x+3)+4.$$
Sabit terim $(-2)\cdot3+4=-2$'dir.

**Neden doğru?** Sabit terim için bütün polinomun açılması gerekmez; çarpanların sabit terimleri ve kalan yeterlidir.

**Çeldirici notu:** Kalan 4'ü tek başına sabit terim sanmak çarpımın $-6$ katkısını atlar.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Eşlenik köklü monik kübik polinomda doğrusal katsayıyı bulma.

**Çözüm:** Eşlenik köklerin çarpımı 1, toplamı 4'tür. Köklerin ikili çarpımları toplamı
$$1+(-1)\cdot4=-3$$
olur. Bu değer monik kübik polinomun $x$ katsayısıdır.

**Neden doğru?** Vieta bağıntısında kübik polinomun doğrusal katsayısı ikili kök çarpımlarının toplamına eşittir.

**Çeldirici notu:** Kökler toplamını kullanmak $x^2$ katsayısını verir, doğrusal katsayıyı değil.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Tek polinomdan elde edilen bölüm polinomunun çiftliğini kullanma.

**Çözüm:** $P$ tek olduğundan $P(-2)=-12$'dir. $Q(-2)=P(-2)/(-2)=6$ bulunur.

**Neden doğru?** Tek polinom $x$ çarpanına sahiptir; $P(x)/x$ bölümü çift polinomdur ve verilen değerle tutarlıdır.

**Çeldirici notu:** $P(-2)$ değerini 12 almak tek polinomun işaret değişimini yok sayar.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Kök çokluklarını dikkate alarak kökler toplamını bulma.

**Çözüm:** 1 kökü iki, $-1$ kökü üç kez sayılır. Toplam $2\cdot1+3\cdot(-1)=-1$ olur.

**Neden doğru?** Vieta bağıntılarındaki kökler toplamı, tekrarlı kökleri çoklukları kadar içerir.

**Çeldirici notu:** Her farklı kökü bir kez saymak $1+(-1)=0$ sonucunu verir ve kök çokluklarını gözden kaçırır.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Yüksek dereceli simetrik ifadeyi kökler toplamı ve çarpımına dönüştürme.

**Çözüm:**
$$\alpha^3\beta^2+\alpha^2\beta^3=\alpha^2\beta^2(\alpha+\beta).$$
$\alpha\beta=-1$ ve $\alpha+\beta=-1$ olduğundan sonuç $(-1)^2(-1)=-1$'dir.

**Neden doğru?** Ortak çarpan alma ifadeyi doğrudan Vieta değerlerinin çarpımına indirger.

**Çeldirici notu:** $(\alpha\beta)^2$ değerini $-1$ almak karesel işareti yanlış kullanmaktır.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Pozitif çift tam sayı köklerden parametre belirleme.

**Çözüm:** Çarpımları 12 olan pozitif çift tam sayılar 2 ve 6'dır. Kökler toplamı $m$ olduğundan $m=8$ bulunur.

**Neden doğru?** Vieta bağıntıları sabit terimi kökler çarpımına, $m$'yi kökler toplamına eşitler.

**Çeldirici notu:** 3 ve 4 çarpımı 12 olsa da her iki kök de çift değildir.

## Soru 10
**Doğru cevap:** D

**Kazanım:** Pozitif tam sayı kök ve asal çarpım koşulundan parametre bulma.

**Çözüm:** Toplamları 6 olan farklı pozitif tam sayı çiftleri $(1,5)$ ve $(2,4)$'tür. Çarpımları 5 ve 8 olur; yalnız 5 asal olduğundan $k=5$'tir.

**Neden doğru?** Vieta bağıntısına göre $k$ kökler çarpımıdır ve verilen asallık koşulu tek çifti seçtirir.

**Çeldirici notu:** Eşit kök çifti $(3,3)$ birbirinden farklı olma koşuluna uymaz ve çarpımı da asal değildir.
