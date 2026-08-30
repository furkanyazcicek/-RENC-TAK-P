# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 40 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Bileşke polinomun derecesinden polinomun derecesini bulma.

**Çözüm:** $\deg P=n$ ise $\deg(P(P(x)))=n^2$ olur. $n^2=16$ ve derece pozitif tam sayı olduğundan $n=4$'tür.

**Neden doğru?** Bileşkede dış ve iç polinomun dereceleri çarpılır.

**Çeldirici notu:** Dereceleri toplamak bileşkeyi polinom toplamı gibi yorumlamaktır.

## Soru 2
**Doğru cevap:** A

**Kazanım:** İkinci dereceden polinomun sabit ikinci farkını kullanma.

**Çözüm:** Birinci farklar 1 ve 5, ikinci fark 4'tür. Sonraki birinci fark $5+4=9$ olduğundan $P(3)=9+9=18$'dir.

**Neden doğru?** Eşit aralıklı girdilerde ikinci dereceden polinomun ikinci farkı sabittir.

**Çeldirici notu:** Son farkı 5 olarak sürdürmek ikinci fark bilgisini kullanmaz.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Çift dereceli katsayılar toplamını polinomun karşılıklı değerlerinden bulma.

**Çözüm:** Çarpım polinomu $R$ olsun. $R(1)=0$ ve
$$R(-1)=(-1+2+1)(1-3-4)=2\cdot(-6)=-12.$$
Çift dereceli katsayılar toplamı
$$\frac{R(1)+R(-1)}2=-6$$
olur.

**Neden doğru?** $R(1)+R(-1)$ toplamında tek dereceli terimler yok olur.

**Çeldirici notu:** $R(-1)$ değerini doğrudan almak çift kısmın iki katını cevap sanmaktır.

## Soru 4
**Doğru cevap:** C

**Kazanım:** Bölme özdeşliğinden belirli bir polinom değerini hesaplama.

**Çözüm:**
$$P(x)=(x^2-2x)(x+1)+3x+2.$$
$x=-1$ için bölüm terimi sıfır, kalan değeri $-3+2=-1$ olur.

**Neden doğru?** $x+1$ bölüm polinomu bu noktada sıfır olduğu için hesap kısalır.

**Çeldirici notu:** Yalnız bölenin değerini kullanmak bölüm ve kalan yapısını göz ardı eder.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Değişken ötelemesinin polinom köklerine etkisini bulma.

**Çözüm:** $P(x-2)=0$ için $x-2$ sırasıyla $-2$, 1 ve 4 olmalıdır. Yeni kökler 0, 3 ve 6'dır; toplamları 9'dur.

**Neden doğru?** Her eski kök, dönüşümde 2 birim sağa ötelenir.

**Çeldirici notu:** Köklerden 2 çıkarmak ötelemenin yönünü ters yorumlamaktır.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Kuvvet döngüsünü kullanarak geometrik toplamın kalanını bulma.

**Çözüm:** $x^2+x+1$ bölenine göre $1+x+x^2\equiv0$ ve $x^3\equiv1$'dir. İlk altı terim iki tam üçlü oluşturup sıfır kalan verir; geriye $x^6\equiv1$ kalır.

**Neden doğru?** Yedinci terim, üçlü grupların dışında kalan tek terimdir.

**Çeldirici notu:** Bütün terimleri iki üçlü sanmak son $x^6$ terimini atlar.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Dördüncü dereceden denklemi yardımcı değişkenle çözme.

**Çözüm:** $u=x^2$ alınırsa $u^2+2u-8=(u-2)(u+4)=0$ olur. Yalnız $x^2=2$ gerçek çözüm üretir ve $x=\pm\sqrt2$ olmak üzere iki farklı kök vardır.

**Neden doğru?** $x^2=-4$ gerçek sayılarda çözümsüzdür.

**Çeldirici notu:** Yardımcı denklemin iki kökünü de ikişer gerçek kök üretir sanmak fazladan kök sayar.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Rasyonel kök ifadesini Vieta bağıntılarıyla hesaplama.

**Çözüm:** $s=\alpha+\beta=\frac52$, $p=\alpha\beta=\frac12$'dir.
$$\frac1{\alpha-1}+\frac1{\beta-1}
=\frac{s-2}{p-s+1}
=\frac{\frac12}{-1}=-\frac12.$$

**Neden doğru?** Pay ve payda kökler toplamı ile çarpımına indirgenir.

**Çeldirici notu:** Paydaları ayrı ayrı yok sayıp tersleri toplamak kesir yapısını bozar.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Çarpanlara ayrılan parametreli denklemin tam sayı kök koşullarını sayma.

**Çözüm:** Denklem $(x-3)(x-m)=0$ biçimindedir. Köklerden 3 zaten aralıktadır. Diğer kökün aralıkta, tam sayı ve 3'ten farklı olması için $m=2,4,5,6$ olabilir. Dört değer vardır.

**Neden doğru?** Kapalı aralık uçları dahil eder, farklı kök koşulu yalnız $m=3$'ü dışlar.

**Çeldirici notu:** Uç noktaları dışarıda bırakmak veya $m=3$'ü saymak koşullardan birini ihlal eder.

## Soru 10
**Doğru cevap:** D

**Kazanım:** İkinci derece eşitsizliğin tam sayı çözümlerini belirleme.

**Çözüm:** $(x-3)(x-5)\leq0$ olduğundan $3\leq x\leq5$'tir. Tam sayılar 3, 4 ve 5; toplamları 12'dir.

**Neden doğru?** Baş katsayı pozitif olduğundan ifade iki kök arasında sıfır veya negatiftir.

**Çeldirici notu:** Yalnız tam sayı adedini bulmak istenen toplam yerine 3 sonucunu verir.
