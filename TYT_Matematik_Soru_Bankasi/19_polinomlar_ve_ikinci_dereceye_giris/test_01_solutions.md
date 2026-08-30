# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 01 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Parametreli polinomda dereceyi belirleyen baş katsayı koşulunu kullanma.

**Çözüm:**

Polinomun derecesinin 2 olması için dördüncü dereceli terim yok olmalıdır:

$$m-2=0 Rightarrow m=2.$$

Bu durumda $P(x)=3x^2-1$ olur ve derecesi gerçekten 2'dir.

**Neden doğru?** En yüksek dereceli terimin katsayısı sıfır olduğunda bir sonraki sıfır olmayan terim dereceyi belirler.

**Çeldirici notu:** En büyük üs olarak 4'ü doğrudan seçmek parametre koşulunu yok sayar.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Polinom değerinden bilinmeyen katsayıyı bulma.

**Çözüm:**

$$P(1)=1-2+a+4=a+3.$$

$P(1)=6$ olduğundan $a+3=6$ ve $a=3$ bulunur.

**Neden doğru?** $x=1$ yazıldığında bütün kuvvetler 1 olur ve parametre doğrusal bir denklemle belirlenir.

**Çeldirici notu:** $-2x^2$ terimini $x=1$ için pozitif almak işaret hatasına yol açar.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Polinomun katsayılar toplamını $P(1)$ üzerinden bulma.

**Çözüm:**

Katsayılar toplamı

$$P(1)=2-1+3-5=-1$$

değeridir.

**Neden doğru?** $x=1$ yazıldığında her terim kendi katsayısına dönüşür; bulunmayan derecelerin katsayıları 0'dır.

**Çeldirici notu:** Yalnız pozitif katsayıları toplamak eksi işaretli terimleri gözden kaçırır.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Çift ve tek dereceli terimlerin katsayı toplamlarını $P(-1)$ ile ilişkilendirme.

**Çözüm:**

Çift dereceli terimlerin katsayıları toplamı $1+3+5=9$, tek derecelilerin toplamı $-2-4=-6$'dır. İstenen fark

$$9-(-6)=15$$

olur. Bu değer aynı zamanda $P(-1)$'dir.

**Neden doğru?** $x=-1$ yazıldığında çift kuvvetler 1, tek kuvvetler $-1$ çarpanı getirir.

**Çeldirici notu:** Tek dereceli katsayıların mutlak değerlerini kullanmak katsayı işaretlerini değiştirir.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Polinom toplamında en yüksek dereceli terimlerin yok olmasını inceleme.

**Çözüm:**

$$P(x)+Q(x)=x^2+3x-5.$$

Üçüncü dereceli terimler birbirini götürdüğü için toplam polinomunun derecesi 2'dir.

**Neden doğru?** Derece işlem öncesi polinomların derecelerinden değil, sadeleştirilmiş sonuçtaki en büyük üsten okunur.

**Çeldirici notu:** Her iki polinom da üçüncü dereceli diye toplamın derecesini 3 kabul etmek baş terimlerin yok oluşunu kaçırır.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Polinom kuvveti ve çarpımında derece kurallarını birlikte kullanma.

**Çözüm:**

$$\deg(P^2Q)=2\deg P+\deg Q=2\cdot2+3=7.$$

**Neden doğru?** Polinomun karesi derecesini iki katına çıkarır; sıfırdan farklı polinomların çarpımında dereceler toplanır.

**Çeldirici notu:** $2+2+3$ yerine yalnız $2+3$ toplamak $P$'nin karesini hesaba katmaz.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Kalan teoremini $x+2$ böleni için uygulama.

**Çözüm:**

$x+2=x-(-2)$ olduğundan kalan

$$P(-2)=(-2)^3-3(-2)+4=-8+6+4=2$$

olur.

**Neden doğru?** Bir polinomun $x-a$ ile bölümünden kalan $P(a)$'dır; burada $a=-2$'dir.

**Çeldirici notu:** Bölen $x+2$ olduğu hâlde $P(2)$ hesaplamak işareti yanlış okumaktır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Polinomun doğrusal çarpana tam bölünme koşulunu kullanma.

**Çözüm:**

$x-1$ ile tam bölünme için $P(1)=0$ olmalıdır:

$$1+a-5+3=0 Rightarrow a-1=0.$$

Buradan $a=1$ bulunur.

**Neden doğru?** Kalan teoremine göre $P(1)$ aynı zamanda bölümden kalandır.

**Çeldirici notu:** $x-1=0$ denklemini çözmek yalnız kullanılacak girdiyi verir; parametre için bu değeri polinomda kullanmak gerekir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** İkinci dereceden denklemde çift katlı kök koşulunu diskriminantla kullanma.

**Çözüm:**

İki eşit gerçek kök için $\Delta=0$ olmalıdır:

$$(-6)^2-4\cdot1\cdot m=0.$$

Buradan $36-4m=0$ ve $m=9$ bulunur.

**Neden doğru?** Sıfır diskriminant parabolün $x$ eksenine tek noktada teğet olmasına karşılık gelir.

**Çeldirici notu:** $\Delta>0$ koşulu eşit değil, farklı iki gerçek kök üretir.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Kökler toplamı ve çarpımını yeni bir ifadede birlikte kullanma.

**Çözüm:**

Vieta bağıntılarına göre

$$\alpha+\beta=\frac52,qquad \alpha\beta=-\frac32.$$

Bu nedenle

$$(\alpha+1)(\beta+1)=\alpha\beta+\alpha+\beta+1=-\frac32+\frac52+1=2.$$

**Neden doğru?** İstenen çarpım kökleri ayrı ayrı bulmadan simetrik toplam ve çarpımla hesaplanabilir.

**Çeldirici notu:** Kökler çarpımında $c/a$ yerine $-c/a$ kullanmak işareti değiştirir.
