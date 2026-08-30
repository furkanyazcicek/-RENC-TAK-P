# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 33 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Eşit dereceli terimlerde baş katsayı iptalini kullanma.

**Çözüm:** $x^2P(x)$ polinomunun derecesi 6 ve baş katsayısı 2'dir. Farkın derecesinin 6'dan küçük olması için altıncı dereceli terimler birbirini götürmelidir. Bu nedenle $Q(x)$ polinomunun baş katsayısı da $a=2$ olmalıdır.

**Neden doğru?** İki polinomun altıncı dereceli terimleri ancak katsayıları eşit olduğunda farkta yok olur.

**Çeldirici notu:** Çıkarma işlemi nedeniyle $a=-2$ almak, $2-a=0$ denkleminin işaretini yanlış kurmaktır.

## Soru 2
**Doğru cevap:** D

**Kazanım:** Üçüncü dereceden polinomun eşit aralıklı değerlerinde sabit üçüncü farkı kullanma.

**Çözüm:** Birinci farklar $1,7,19$; ikinci farklar $6,12$ ve üçüncü fark 6'dır. Sonraki ikinci fark $18$, sonraki birinci fark $19+18=37$ olur. Böylece
$$P(4)=27+37=64.$$

**Neden doğru?** Üçüncü dereceden bir polinomun eşit aralıklı girdilerdeki üçüncü farkı sabittir.

**Çeldirici notu:** Son birinci ya da ikinci farkı sabit kabul etmek polinomun derecesini göz ardı eder.

## Soru 3
**Doğru cevap:** E

**Kazanım:** Özdeşlik ve binom açılımıyla belirli dereceli terimin katsayısını bulma.

**Çözüm:**
$$(1+x)^5(1-x)^5=(1-x^2)^5.$$
$x^6$ terimi, açılımda $(-x^2)^3$ seçildiğinde oluşur. Katsayısı
$$\binom53(-1)^3=-10$$
olur.

**Neden doğru?** $x^6$ için $x^2$ terimi üç kez seçilmelidir; işaret tek kuvvet nedeniyle negatiftir.

**Çeldirici notu:** Binom katsayısını 10 bulup negatif işareti atlamak D seçeneğine götürür.

## Soru 4
**Doğru cevap:** A

**Kazanım:** Aynı değeri alan noktalardan yardımcı polinomun köklerini kurma.

**Çözüm:** $P(x)-5$ baş katsayısı 1 olan dördüncü dereceden bir polinomdur ve 1, 2, 3, 4 köklerine sahiptir. Bu nedenle
$$P(x)-5=(x-1)(x-2)(x-3)(x-4).$$
$x=0$ için $P(0)-5=24$, dolayısıyla $P(0)=29$ bulunur.

**Neden doğru?** Dört farklı kök ve baş katsayı, dördüncü dereceden yardımcı polinomu tamamen belirler.

**Çeldirici notu:** Çarpım sonucunu 24 bulup sabit 5'i eklememek B seçeneğine götürür.

## Soru 5
**Doğru cevap:** B

**Kazanım:** Polinom bölümünde bölenin verdiği eşdeğerliği art arda kullanma.

**Çözüm:** $x^2-x-1$ bölenine göre $x^2\equiv x+1$ yazılır. Buradan
$$x^3\equiv2x+1,\quad x^4\equiv3x+2,\quad x^5\equiv5x+3$$
elde edilir. $R(x)=5x+3$ olduğundan katsayılar toplamı $5+3=8$'dir.

**Neden doğru?** Kalanın derecesi 2'den küçüktür ve $5x+3$ bu koşulu sağlar.

**Çeldirici notu:** Katsayılar toplamını yalnız $x$'in katsayısı olarak almak 5 sonucunu verir.

## Soru 6
**Doğru cevap:** C

**Kazanım:** Çarpanlara ayırma yoluyla çok katlı kökleri belirleme.

**Çözüm:**
$$P(x)=x^2(x-2)^2.$$
Hem 0 hem 2 ikişer katlı köktür. Bu nedenle $(x-r)^2$ çarpanı için $r=0$ veya $r=2$ seçilebilir.

**Neden doğru?** $x^2=(x-0)^2$ ve $(x-2)^2$ çarpanlarının ikisi de polinomda açıkça bulunur.

**Çeldirici notu:** Yalnız bir çarpanı incelemek ortak köklerden birini gözden kaçırır.

## Soru 7
**Doğru cevap:** D

**Kazanım:** İkinci derece denklemden bir kök ile tersinin toplamını elde etme.

**Çözüm:** $\alpha\ne0$ olmak üzere denklem $\alpha$'ya bölünür:
$$\alpha+\frac1\alpha=3.$$
Karesi alınırsa
$$\alpha^2+2+\frac1{\alpha^2}=9$$
ve istenen değer 7 bulunur.

**Neden doğru?** Sabit terimin 1 olması kök ile tersini aynı bağıntıda buluşturur.

**Çeldirici notu:** Toplamın karesindeki 2 çarpım terimini çıkarmamak 9 sonucuna götürür.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Parametreli ikinci derece denklemi çarpanlara ayırarak kök koşullarını inceleme.

**Çözüm:**
$$x^2-(m+2)x+2m=(x-2)(x-m).$$
Kökler 2 ve $m$'dir. İki kökün farklı ve $(1,5)$ aralığında tam sayı olması için $m=3$ veya $m=4$ olabilir. Toplam iki değer vardır.

**Neden doğru?** 2 zaten aralıktadır; $m$ hem aralıkta olmalı hem de 2'den farklı seçilmelidir.

**Çeldirici notu:** Uç noktaları veya $m=2$ değerini dahil etmek kök koşullarını bozar.

## Soru 9
**Doğru cevap:** A

**Kazanım:** Parabol ile yatay doğrunun teğetlik koşulunu tepe noktasıyla ilişkilendirme.

**Çözüm:**
$$y=x^2-4x+7=(x-2)^2+3.$$
Parabolün en küçük değeri 3'tür. $y=k$ doğrusu yalnız tepe noktasında kesişeceği için $k=3$ olmalıdır.

**Neden doğru?** Yatay doğru tepe ordinatında parabole teğet olur ve tek ortak nokta verir.

**Çeldirici notu:** Simetri ekseninin apsisi olan 2 ile tepe ordinatını karıştırmak hatalıdır.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Alan koşulunu ikinci derece eşitsizliğe dönüştürme.

**Çözüm:**
$$(x-1)(7-x)\geq8$$
eşitsizliği
$$x^2-8x+15\leq0$$
biçimine gelir. $(x-3)(x-5)\leq0$ olduğundan $3\leq x\leq5$ bulunur. Tam sayı değerler 3, 4 ve 5'tir.

**Neden doğru?** Bu üç değerde kenarlar pozitiftir ve alan en az 8 olur.

**Çeldirici notu:** Eşitsizlikte negatifle çarparken yön değiştirmemek çözüm aralığını tersine çevirir.
