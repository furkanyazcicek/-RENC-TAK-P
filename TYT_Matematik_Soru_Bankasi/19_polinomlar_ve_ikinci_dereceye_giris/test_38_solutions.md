# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 38 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Bileşke polinom ile kuvveti arasındaki ortak kısmı sadeleştirme.

**Çözüm:** $P(t)=t^3+t$ olduğundan
$$P(P(x))=P(x)^3+P(x).$$
Buradan
$$P(P(x))-P(x)^3=P(x)=x^3+x$$
elde edilir. Derece 3'tür.

**Neden doğru?** Bileşkenin dokuzuncu dereceli kısmı bütünüyle çıkar ve geriye doğrudan $P(x)$ kalır.

**Çeldirici notu:** Yalnız bileşkenin derecesini 9 bulmak iki ifade arasındaki cebirsel iptali gözden kaçırır.

## Soru 2
**Doğru cevap:** D

**Kazanım:** Polinomun tek kısmını karşılıklı iki değerden bulma.

**Çözüm:**
$$T(2)=\frac{P(2)-P(-2)}2=\frac{7-(-1)}2=4.$$

**Neden doğru?** $P(x)-P(-x)$ farkı polinomun tek dereceli kısmının iki katıdır.

**Çeldirici notu:** Negatif değeri çıkarırken işareti korumak payı 6 sanmaya yol açar.

## Soru 3
**Doğru cevap:** E

**Kazanım:** Polinom özdeşliğinde $x=1$ yazarak katsayılar toplamını bulma.

**Çözüm:** Katsayılar toplamı $P(1)$'dir. Özdeşlikte $x=1$ yazılır:
$$3P(1)=1+2-1+4=6.$$
Dolayısıyla $P(1)=2$'dir.

**Neden doğru?** $x=1$, hem istenen katsayılar toplamını hem de özdeşliğin sağ tarafını doğrudan verir.

**Çeldirici notu:** Sağ tarafın katsayılar toplamı olan 6'yı doğrudan cevap almak dışarıdaki 3 çarpanını atlar.

## Soru 4
**Doğru cevap:** A

**Kazanım:** İki kare farkı özdeşliğiyle belirli dereceli terimin katsayısını bulma.

**Çözüm:** $A=x^3+1$ alınırsa çarpım
$$(A+x)(A-x)=A^2-x^2=(x^3+1)^2-x^2$$
olur. Açılım $x^6+2x^3-x^2+1$ olduğundan $x^2$ teriminin katsayısı $-1$'dir.

**Neden doğru?** Doğrusal terimler iki kare farkında yok olur; dışarıda kalan $-x^2$ istenen katsayıyı verir.

**Çeldirici notu:** Çarpımı iki kare toplamı gibi ele almak $x^2$ teriminin işaretini pozitif yapar.

## Soru 5
**Doğru cevap:** B

**Kazanım:** Köklerin ötelenmesiyle oluşan ikinci dereceden polinomu kurma.

**Çözüm:** Yeni köklerin toplamı
$$(\alpha-1)+(\beta-1)=6-2=4,$$
çarpımı
$$(\alpha-1)(\beta-1)=\alpha\beta-(\alpha+\beta)+1=7-6+1=2$$
olur. Yeni polinom $x^2-4x+2$'dir; katsayıları toplamı $1-4+2=-1$'dir.

**Neden doğru?** Monik ikinci derece polinom kökler toplamı ve çarpımıyla tamamen belirlenir.

**Çeldirici notu:** Köklerden 1 çıkarıldığında çarpımdan yalnız 1 çıkarmak çapraz terimleri atlar.

## Soru 6
**Doğru cevap:** C

**Kazanım:** Kalan polinomunu değişkenle çarpıp bölen bağıntısına göre indirgeme.

**Çözüm:**
$$xP(x)\equiv x(x-2)=x^2-2x.$$
$x^2+x+1$ bölenine göre $x^2\equiv-x-1$ olduğundan
$$x^2-2x\equiv-3x-1$$
bulunur.

**Neden doğru?** Sonuç birinci derecedendir ve bölenin derecesinden küçüktür.

**Çeldirici notu:** $x^2\equiv x+1$ yazmak bölenin işaretlerini yanlış taşımaktır.

## Soru 7
**Doğru cevap:** D

**Kazanım:** Dördüncü dereceden denklemi ikinci derece yardımcı değişkenle çözme.

**Çözüm:** $u=x^2$ alınırsa
$$u^2-2u-8=(u-4)(u+2)=0$$
olur. Gerçek kökler $x=\pm2$'dir. Kareleri toplamı $4+4=8$'dir.

**Neden doğru?** $u=-2$ gerçek $x$ üretmez; iki gerçek kökün karesi de 4'tür.

**Çeldirici notu:** Yardımcı denklemin iki kökünü de gerçek $x$ kökü sanmak fazladan değer üretir.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Eşit kök koşulundan parametre değerlerini bulma.

**Çözüm:** Eşit iki gerçek kök için diskriminant sıfırdır:
$$\Delta=(m-1)^2-4(m+2)=m^2-6m-7=0.$$
Buradan $(m-7)(m+1)=0$ ve $m=7$ veya $m=-1$ bulunur. Toplamları 6'dır.

**Neden doğru?** Baş katsayı 1 olduğundan her iki parametre değeri de geçerli ikinci derece denklem verir.

**Çeldirici notu:** Yalnız pozitif parametreyi almak soruda bulunmayan bir koşul eklemektir.

## Soru 9
**Doğru cevap:** A

**Kazanım:** Köklerin harmonik ortalamasından kökler toplamını ve kökleri bulma.

**Çözüm:** Kökler toplamı $s$, çarpımı 12'dir. Harmonik ortalama
$$\frac{2\alpha\beta}{\alpha+\beta}=\frac{24}{s}=3$$
olduğundan $s=8$ bulunur. Denklem $x^2-8x+12=0$ olur ve kökleri 2 ile 6'dır. Büyük kök 6'dır.

**Neden doğru?** Pozitif kökler için harmonik ortalama bağıntısı doğrudan Vieta değerleriyle yazılabilir.

**Çeldirici notu:** Harmonik ortalamayı $\frac{s}{2}$ sanmak aritmetik ortalama formülünü kullanmaktır.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Parabol ile doğrunun düşey konumunu ikinci derece eşitsizliğe dönüştürme.

**Çözüm:** Parabolün doğrunun altında kalması
$$x^2-4x+1<2x-7$$
demektir. Düzenlenirse
$$x^2-6x+8<0\quad\Rightarrow\quad(x-2)(x-4)<0$$
olur. Çözüm $2<x<4$ ve bu aralıktaki tek tam sayı 3'tür.

**Neden doğru?** Sıkı eşitsizlik sınırları dışarıda bırakır; yalnız bir tam sayı kalır.

**Çeldirici notu:** Kökleri de dahil etmek üç tam sayı varmış gibi görünmesine yol açar.
