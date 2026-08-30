# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 47 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Binom açılımlarında simetriden yararlanarak belirli bir katsayıyı bulma.

**Çözüm:**

Her iki açılımda $x^3$ terimi, beş çarpandan ikisinde sabit terimin seçilmesiyle oluşur. Katsayıların her biri $\binom52=10$'dur. İki açılımda da işaret pozitif olduğundan toplam katsayı $10+10=20$ olur.

**Neden doğru?** Tek kuvvetli terimlerin işareti iki açılımda aynıdır; birbirini yok edenler çift kuvvetli ara terimlerdir.

## Soru 2

**Doğru cevap:** C

**Kazanım:** İki doğrusal bölene ait kalanlardan ikinci dereceden bölenin kalanını oluşturma.

**Çözüm:**

Kalanın derecesi $2$'den küçük olduğu için $R(x)=ax+b$ yazılır. Verilenlerden

$$R(2)=2a+b=2,qquad R(-1)=-a+b=-1$$

olur. İki eşitlikten $a=1$ ve $b=0$ bulunur. Dolayısıyla $R(3)=3$'tür.

**Neden doğru?** $2$ ve $-1$ bölenin kökleri olduğu için bu girdilerde $P$ ile kalan aynı değerleri alır.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Simetrik katsayılı polinomlarda ters kök ilişkisini kullanma.

**Çözüm:**

Polinomun katsayıları iki yönden aynıdır ve

$$x^4P\left(\frac1x\right)=P(x)$$

eşitliği sağlanır. $x=2$ için

$$16P\left(\frac12\right)=P(2)=0$$

olduğundan $P\left(\frac12\right)=0$ bulunur.

**Neden doğru?** Sabit terim sıfır olmadığından ters alma geçerlidir ve her sıfır olmayan kökün tersi de köktür.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Yüksek kuvvetleri bir polinom bağıntısına göre döngüsel olarak indirgeme.

**Çözüm:**

$x^3-1=(x-1)(x^2+x+1)$ olduğundan $x^2+x+1$ ile kalan hesabında $x^3\equiv1$ yazılabilir. $2026$ sayısının $3$ ile bölümünden kalan $1$, $2025$'in kalını ise $0$'dır. Bu nedenle

$$x^{2026}+x^{2025}+1\equiv x+1+1=x+2$$

olur.

**Neden doğru?** Elde edilen $x+2$ ifadesinin derecesi bölenin derecesinden küçük olduğu için sonuç doğrudan kalandır.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Dördüncü dereceden bir denklemi ikinci dereceye indirgeme.

**Çözüm:**

$t=x^2$ yazılırsa

$$t^2-5t+4=(t-1)(t-4)=0$$

olur. Buradan $x^2=1$ veya $x^2=4$ elde edilir. Pozitif kökler $1$ ve $2$ olduğundan toplamları $3$'tür.

**Neden doğru?** Soru yalnızca pozitif kökleri istediği için $-1$ ve $-2$ toplama katılmaz.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Çift katlı çarpan koşulunu katsayı karşılaştırmasıyla kullanma.

**Çözüm:**

Başkatsayı $1$ olduğundan

$$P(x)=(x-2)^2(x^2+ax+b)$$

yazılabilir. Sabit terimden $4b=16$, yani $b=4$ bulunur. $x^3$ teriminin katsayısı sıfır olduğu için $a-4=0$ ve $a=4$'tür. $x^2$ katsayısı

$$m=b-4a+4=4-16+4=-8$$

olur.

**Neden doğru?** Çarpan gösterimi hem çift kökü hem de polinomun eksik tek dereceli terimlerini aynı anda hesaba katar.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Üçüncü derece denklemde köklerin simetrik bağıntılarını kullanma.

**Çözüm:**

Vieta bağıntılarından

$$\alpha\beta+\alpha\gamma+\beta\gamma=-5,qquad \alpha\beta\gamma=-6$$

olur. Buna göre

$$\frac1\alpha+\frac1\beta+\frac1\gamma
=\frac{\alpha\beta+\alpha\gamma+\beta\gamma}{\alpha\beta\gamma}
=\frac{-5}{-6}=\frac56$$

**Neden doğru?** Sabit terim sıfır olmadığından köklerin hiçbiri sıfır değildir ve tersler tanımlıdır.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Kök katlılıklarından polinomun işaret aralıklarını belirleme.

**Çözüm:**

Başkatsayı pozitif olduğundan polinomun işareti $x>4$ için pozitiftir. $4$ ve $-2$ çift katlı olduğundan bu noktalarda işaret değişmez; $1$ tek katlı olduğundan işaret yalnızca burada değişir. Bu nedenle $P(x)<0$ olan bölge $x<1$ olup kök $-2$ dışlanır.

$[-3,5]$ içinde uygun tam sayılar $-3,-1,0$ olmak üzere $3$ tanedir.

**Neden doğru?** Sıkı eşitsizlik nedeniyle köklerde polinomun değeri sıfır olsa da bu noktalar sayılmaz.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Çarpanlara ayrılabilen parametreli denklemde köklerin aralık koşulunu denetleme.

**Çözüm:**

Denklem

$$x^2-(m+2)x+2m=(x-2)(x-m)=0$$

biçiminde çarpanlara ayrılır. Kökler $2$ ve $m$'dir. Her iki kök $[1,4]$ aralığında bulunmalı ve farklı olmalıdır. Bu nedenle $m=1,3,4$ olabilir. Toplam $3$ değer vardır.

**Neden doğru?** $m=2$ aralıkta olsa da kökleri eşit yaptığı için farklı iki kök koşulunu sağlamaz.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Bir parabolün yatay ve düşey ötelenmesini denklemine aktarma.

**Çözüm:**

$f(x)=x^2-4x+7$ olsun. Grafiği $3$ birim sağa ötelemek için $x$ yerine $x-3$, ardından $2$ birim aşağı ötelemek için sonuçtan $2$ yazılır:

$$y=f(x-3)-2$$

$$=(x-3)^2-4(x-3)+7-2=x^2-10x+26$$

Dolayısıyla $c=26$'dır.

**Neden doğru?** Sağa ötelemede değişkenin içinde ters işaret kullanılır; düşey öteleme ise fonksiyon değerine doğrudan uygulanır.
