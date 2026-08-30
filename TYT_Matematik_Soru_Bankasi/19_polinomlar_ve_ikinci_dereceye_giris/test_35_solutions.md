# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 35 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Değişken dönüşümü içeren polinom toplamının derecesini çözümleme.

**Çözüm:** $\deg P=n$ olsun. $P(x^2)$ polinomunun derecesi $2n$, $xP(x^3)$ polinomunun derecesi $3n+1$ olur. $n\geq1$ için $3n+1>2n$ olduğundan toplamın derecesi $3n+1$'dir. 
$$3n+1=10\Rightarrow n=3.$$

**Neden doğru?** İki terimin derecesi farklı olduğu için öncü terimlerin birbirini götürmesi mümkün değildir.

**Çeldirici notu:** Dışarıdaki $x$ çarpanının dereceye 1 eklediğini unutmak yanlış sonuca götürür.

## Soru 2
**Doğru cevap:** A

**Kazanım:** İkinci dereceden bölenin köklerinde kalan polinomunu değerlendirme.

**Çözüm:** Bölen $(x-1)(x-2)$ olduğundan $P(1)=2\cdot1+1=3$ ve $P(2)=2\cdot2+1=5$ olur. Çarpımları
$$P(1)P(2)=3\cdot5=15$$
bulunur.

**Neden doğru?** Bölenin köklerinde bölünen polinom ile kalan polinomu aynı değeri alır.

**Çeldirici notu:** Yalnız kalan polinomunun katsayılarını çarpmak, istenen değerleri hesaplamaz.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Çarpanlara ayırarak polinom bölümünü sadeleştirme.

**Çözüm:**
$$x^6-1=(x^3-1)(x^3+1)$$
ve
$$x^3-1=(x-1)(x^2+x+1)$$
olduğundan
$$P(x)=(x-1)(x+1)(x^2-x+1)=x^4-x^3+x-1.$$
$x$ teriminin katsayısı 1'dir.

**Neden doğru?** Bölen, $x^3-1$ çarpanının içinde tam olarak bulunur; sadeleştirme bir polinom verir.

**Çeldirici notu:** Son iki çarpanı açarken $x$ terimini yok saymak katsayıyı 0 sanmaya yol açar.

## Soru 4
**Doğru cevap:** C

**Kazanım:** Eşit polinom değerlerinden yardımcı polinom kurma.

**Çözüm:** $P(x)-4$ baş katsayısı 1 olan üçüncü dereceden bir polinomdur ve $-1$, 0, 2 köklerine sahiptir:
$$P(x)-4=(x+1)x(x-2).$$
$x=1$ yazılırsa $P(1)-4=-2$, dolayısıyla $P(1)=2$ bulunur.

**Neden doğru?** Üç farklı kök ile baş katsayı, üçüncü dereceden yardımcı polinomu belirler.

**Çeldirici notu:** $P(1)-4=-2$ sonucunu doğrudan cevap almak sabit 4'ü geri eklememektir.

## Soru 5
**Doğru cevap:** D

**Kazanım:** $P(1)$ ve $P(-1)$ değerlerinden çift ve tek dereceli katsayı toplamlarını birlikte bulma.

**Çözüm:** Çift dereceli katsayılar toplamı $E$, tek dereceli katsayılar toplamı $T$ olsun. Verilenler
$$E+T=7,\qquad E-T=3$$
eşitliklerini verir. Buradan $E=5$ ve $T=2$ bulunur. Çarpımları $5\cdot2=10$'dur.

**Neden doğru?** $x=-1$ yazıldığında yalnız tek dereceli terimlerin işareti değişir.

**Çeldirici notu:** 7 ile 3'ü doğrudan çarpmak bu değerlerin katsayı grupları değil, onların toplamı ve farkı olduğunu gözden kaçırır.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Kuvvetleri bölen polinomun oluşturduğu döngüyle indirgeme.

**Çözüm:** $x^3-1$ bölenine göre $x^3\equiv1$'dir. $2026=3\cdot675+1$ olduğundan
$$x^{2026}\equiv x.$$

**Neden doğru?** Üs üçer azaltıldığında kalan üs 1 olur ve kalan polinomun derecesi 3'ten küçüktür.

**Çeldirici notu:** Bölümden kalan üs ile polinom bölümünden kalanı karıştırmak 1 sonucuna götürebilir.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Dördüncü dereceden denklemi ikinci derece yardımcı değişkenle çözme.

**Çözüm:** $u=x^2$ alınırsa
$$u^2-3u-4=(u-4)(u+1)=0$$
olur. Gerçek sayılarda $x^2=4$ eşitliği $x=\pm2$ köklerini verir; $x^2=-1$ gerçek kök vermez. Tek pozitif kök 2'dir.

**Neden doğru?** Yardımcı denklemin yalnız negatif olmayan kökü gerçek $x$ değerleri üretir.

**Çeldirici notu:** $u=-1$ değerinden gerçek kök üretmek gerçek sayı koşulunu ihlal eder.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Kökler toplamı ve çarpımından kökler farkının karesini bulma.

**Çözüm:** $\alpha+\beta=5$ ve $\alpha\beta=3$ olduğundan
$$(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta=25-12=13.$$
Bu nedenle istenen oran $\frac{13}{5}$'tir.

**Neden doğru?** Kökleri tek tek çözmeden simetrik bağıntılarla hem pay hem payda bulunur.

**Çeldirici notu:** Farkın karesinde $4\alpha\beta$ yerine $2\alpha\beta$ çıkarmak payı yanlış verir.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Sabit toplamlı farklı pozitif tam sayı köklerde çarpımı en büyük yapma.

**Çözüm:** Kökler $r$ ve $10-r$ biçimindedir; çarpımları $m=r(10-r)$ olur. Farklı pozitif tam sayı kökler birbirine en yakın $4$ ve 6 seçildiğinde çarpım en büyüktür:
$$m=4\cdot6=24.$$

**Neden doğru?** Sabit toplamda çarpım sayılar birbirine yaklaştıkça artar; eşit kök koşul dışıdır.

**Çeldirici notu:** 5 ve 5 köklerini seçip 25 bulmak “birbirinden farklı” koşulunu atlar.

## Soru 10
**Doğru cevap:** D

**Kazanım:** Parabol ile doğrunun kesişim apsislerini ikinci derece denklemle ilişkilendirme.

**Çözüm:** Kesişimde ordinatlar eşittir:
$$x^2-6x+8=2x-7.$$
Buradan $x^2-8x+15=0$ elde edilir. Kesişim apsisleri bu denklemin kökleri olduğundan toplamları 8'dir.

**Neden doğru?** Vieta bağıntısına göre monik denklemde kökler toplamı $-(-8)=8$ olur.

**Çeldirici notu:** Parabolün kendi kökleri olan 2 ve 4'ü kullanmak doğruyla kesişim koşulunu göz ardı eder.
