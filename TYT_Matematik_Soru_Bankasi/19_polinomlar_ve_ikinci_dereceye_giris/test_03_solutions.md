# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 03 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Birden fazla üst dereceli terimi parametreyle yok ederek polinom derecesini belirleme.

**Çözüm:**

Derecenin 1 olması için hem altıncı hem dördüncü dereceli terimlerin katsayıları sıfır olmalıdır. $m-3=0$ eşitliğinden $m=3$ bulunur. Bu değer $m^2-9=0$ eşitliğini de sağlar.

**Neden doğru?** $m=3$ için polinom $P(x)=2x-1$ olur.

**Çeldirici notu:** $m=-3$ yalnız altıncı dereceli terimi yok eder; dördüncü dereceli terim kalır.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Ötelenmiş polinom girdisinden istenen değere ulaşma.

**Çözüm:**

$P(1)$ için $x-2=1$ olmalıdır; buradan $x=3$ bulunur:

$$P(1)=3^2-4\cdot3+7=4.$$

**Neden doğru?** Sağ taraftaki değişken, polinomun girdisi olan $x-2$ ile aynı değildir.

**Çeldirici notu:** Doğrudan $x=1$ yazmak $P(-1)$ değerini hesaplar.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Çift dereceli terimlerin katsayılarını seçerek toplama.

**Çözüm:**

Çift dereceli terimler $-x^4$, $3x^2$ ve sabit $6$'dır. Katsayıları toplamı

$$-1+3+6=8$$

olur.

**Neden doğru?** Sabit terim sıfırıncı derecedendir ve çift dereceli terimler arasında yer alır.

**Çeldirici notu:** Sabit terimi derece içermiyor diye toplamın dışında bırakmak sonucu 2 eksiltmez, 6 eksiltir.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Bir polinom ifadesinin sabit terimini değişkene sıfır vererek bulma.

**Çözüm:**

$$Q(0)=0^2P(0)+3\cdot0-5=-5.$$

Bu değer $Q$ polinomunun sabit terimidir.

**Neden doğru?** $P(0)$ bilinmese de önündeki $x^2$ çarpanı bu katkıyı sıfırlar.

**Çeldirici notu:** $P$'nin sabit terimini bilmek gerektiğini düşünmek çarpan olan $x^2$'yi gözden kaçırır.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Polinom çarpımında belirli dereceli terimin katsayısını bulma.

**Çözüm:**

$x^3$ terimine katkı yapan çarpımlar

$$x^2\cdot(-3x)=-3x^3,qquad x\cdot2x^2=2x^3$$

olur. Toplam katsayı $-3+2=-1$'dir.

**Neden doğru?** Üsleri toplamı 3 olan bütün terim çiftleri hesaba katılmıştır.

**Çeldirici notu:** Yalnız baş terimleri çarpmak $x^4$ katsayısını verir.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Polinom bileşiminde değişkenin kuvvetinin dereceye etkisini belirleme.

**Çözüm:**

$P$'nin baş terimi $ax^4$ ise $P(x^3)$ polinomunun baş terimi

$$a(x^3)^4=ax^{12}$$

olur. Derece 12'dir.

**Neden doğru?** Girdideki üçüncü kuvvet, polinom derecesiyle çarpılır.

**Çeldirici notu:** $4+3$ toplamak bileşimde üslerin çarpıldığını gözden kaçırır.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Kalan bilgisini yeni bir polinom ifadesine aktarma.

**Çözüm:**

$P(2)=5$ olduğundan

$$Q(2)=P(2)^2+P(2)+1=25+5+1=31.$$

**Neden doğru?** $x-2$ ile bölümden kalan, yeni polinom için de doğrudan $Q(2)$ değeridir.

**Çeldirici notu:** Yalnız $P(2)^2=25$ hesaplamak diğer iki terimi atlar.

## Soru 8

**Doğru cevap:** E

**Kazanım:** İkinci dereceden bölenin köklerinde kalan polinomunu kullanma.

**Çözüm:**

$x^2-4=(x-2)(x+2)$ olduğundan

$$P(2)=3\cdot2+1=7,qquad P(-2)=3(-2)+1=-5.$$

Toplam $7+(-5)=2$'dir.

**Neden doğru?** Bölenin köklerinde bölüm terimi sıfır olur ve polinom değeri kalana eşitlenir.

**Çeldirici notu:** $P(-2)$ hesabında $3x$ teriminin işaretini değiştirmemek toplamı büyütür.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Köklerin kareleri toplamını Vieta bağıntılarıyla kullanma.

**Çözüm:**

$$\alpha+\beta=5,qquad \alpha\beta=m.$$

Dolayısıyla

$$\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta=25-2m.$$

$25-2m=13$ eşitliğinden $m=6$ bulunur.

**Neden doğru?** Kökleri ayrı ayrı çözmeden simetrik ifade katsayılardan hesaplanır.

**Çeldirici notu:** $(\alpha+\beta)^2$ ifadesini doğrudan 13'e eşitlemek $2\alpha\beta$ terimini atlar.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Köklerin oranları toplamını simetrik kök bağıntılarıyla hesaplama.

**Çözüm:**

$$\frac{\alpha}{\beta}+\frac{\beta}{\alpha}
=\frac{\alpha^2+\beta^2}{\alpha\beta}.$$

Kökler toplamı 3, çarpımı 1 olduğundan

$$\alpha^2+\beta^2=3^2-2\cdot1=7.$$

İstenen değer $7/1=7$'dir.

**Neden doğru?** Pay ve payda yalnız köklerin toplamı ile çarpımına dönüştürülmüştür.

**Çeldirici notu:** Oranları doğrudan kökler toplamına eşitlemek ortak payda adımını atlar.
