# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 34 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** Bileşke polinomun baş katsayısını belirleme.

**Çözüm:** $P(t)$ polinomunun öncü terimi $t^2$, $Q(x)$ polinomunun öncü terimi $3x^3$'tür. Bileşkede öncü terim
$$(3x^3)^2=9x^6$$
olur. Baş katsayı 9'dur.

**Neden doğru?** Dış polinomun ikinci kuvveti, iç polinomun baş katsayısını da ikinci kuvvete yükseltir.

**Çeldirici notu:** Dereceleri veya baş katsayıları yalnız toplamak bileşke işlemini çarpım gibi yorumlamaktır.

## Soru 2
**Doğru cevap:** E

**Kazanım:** İkinci dereceden polinomun sabit ikinci farkını geriye doğru kullanma.

**Çözüm:** Verilen değerlerin birinci farkları 3 ve 5, ikinci farkı 2'dir. Önceki birinci fark $3-2=1$ olmalıdır. Dolayısıyla
$$P(0)-P(-1)=1$$
ve $P(-1)=2-1=1$ bulunur.

**Neden doğru?** Eşit aralıklı girdilerde ikinci dereceden polinomun ikinci farkı değişmez.

**Çeldirici notu:** Son fark olan 5'i geriye doğru da kullanmak farkların yönünü ve değişimini göz ardı eder.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Ardışık polinom değerlerini fark bağıntısıyla toplama.

**Çözüm:** Bağıntıda sırasıyla $x=0,1,2$ yazılır:
$$P(1)-P(0)=1,$$
$$P(2)-P(1)=7,$$
$$P(3)-P(2)=19.$$
Bu eşitlikler taraf tarafa toplandığında $P(3)-P(0)=27$ olur. $P(0)=2$ olduğundan $P(3)=29$'dur.

**Neden doğru?** Ara değerler toplamda birbirini götürür ve doğrudan başlangıç-sonuç farkı kalır.

**Çeldirici notu:** Yalnız $x=2$ yazıp 19'u sonuç sanmak önceki artışları atlar.

## Soru 4
**Doğru cevap:** B

**Kazanım:** Bölen polinomun verdiği kuvvet döngüsüyle kalanı bulma.

**Çözüm:** $x^2-x+1$ bölenine göre $x^2\equiv x-1$ ve dolayısıyla
$$x^3\equiv x(x-1)=x^2-x\equiv-1$$
olur. Buradan
$$x^5=x^2x^3\equiv-x^2\equiv1-x$$
ve $x^5+1\equiv2-x$ bulunur.

**Neden doğru?** $2-x$ polinomunun derecesi bölenin derecesinden küçüktür ve elde edilen eşdeğerliği sağlar.

**Çeldirici notu:** $x^2\equiv x-1$ bağıntısında işareti değiştirmek $x+2$ gibi hatalı kalanlara götürür.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Polinom değerini köklerin çarpım biçimiyle ilişkilendirme.

**Çözüm:** Baş katsayı 1 olduğundan
$$P(1)=(1-\alpha)(1-\beta)(1-\gamma)=-12.$$
Üç çarpanın da işareti değiştirildiğinde
$$(\alpha-1)(\beta-1)(\gamma-1)=-P(1)=12$$
olur.

**Neden doğru?** Üç işaret değişimi çarpımın işaretini bir kez değiştirir.

**Çeldirici notu:** İstenen çarpımı doğrudan $P(1)$ sanmak negatif işareti kaçırır.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Değişken dönüşümünün polinom köklerine etkisini inceleme.

**Çözüm:** $P(2x-1)=0$ olması için $2x-1$ sırasıyla $-1$, 2 ve 5 olmalıdır. Yeni kökler
$$0,\quad\frac32,\quad3$$
olur. Toplamları $\frac92$'dir.

**Neden doğru?** Her eski kök $r$, $2x-1=r$ eşitliğiyle yeni bir köke dönüşür.

**Çeldirici notu:** Eski köklerin toplamını doğrudan kullanmak değişken dönüşümünü atlar.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Kökler toplamı ve çarpımından dördüncü kuvvetler toplamını bulma.

**Çözüm:** $\alpha+\beta=4$ ve $\alpha\beta=2$ olduğundan
$$\alpha^2+\beta^2=4^2-2\cdot2=12.$$
Bu kez
$$\alpha^4+\beta^4=(\alpha^2+\beta^2)^2-2\alpha^2\beta^2
=12^2-2\cdot2^2=136$$
bulunur.

**Neden doğru?** İkinci özdeşlik, dördüncü kuvvetleri köklerin temel simetrik toplamlarına indirger.

**Çeldirici notu:** $(\alpha^2+\beta^2)^2$ içindeki $2\alpha^2\beta^2$ terimini çıkarmamak 144 sonucuna götürür.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Gerçek kökü olmayan parametreli ikinci derece denklemde diskriminant aralığını çözme.

**Çözüm:** Gerçek kök bulunmaması için
$$\Delta=(m-2)^2-4(m+1)=m^2-8m=m(m-8)<0$$
olmalıdır. Buradan $0<m<8$ elde edilir. Tam sayı değerler $1,2,3,4,5,6,7$ olmak üzere yedi tanedir.

**Neden doğru?** Baş katsayı her zaman 1 olduğundan diskriminantın negatif olması gerekli ve yeterlidir.

**Çeldirici notu:** Sınır değerleri 0 ve 8'i dahil etmek eşit iki gerçek köklü denklemleri de sayar.

## Soru 9
**Doğru cevap:** B

**Kazanım:** Verilen bir kökten parametreyi ve diğer kökü bulma.

**Çözüm:** $x=3$ denklemde yazılır:
$$9-3(m+1)+2m-2=0.$$
Buradan $m=4$ bulunur. Kökler toplamı $m+1=5$ olduğuna göre diğer kök $5-3=2$'dir.

**Neden doğru?** Verilen kök parametreyi belirler; Vieta bağıntısı ikinci kökü doğrudan verir.

**Çeldirici notu:** Bulunan $m=4$ değerini diğer kök sanmak parametre ile bilinmeyeni karıştırır.

## Soru 10
**Doğru cevap:** C

**Kazanım:** İki ikinci derece eşitsizliğin çözüm kümelerini kesiştirme.

**Çözüm:**
$$(x-2)(x-3)\leq0 \quad\Rightarrow\quad x\in[2,3],$$
$$(x-2)(x-5)\geq0 \quad\Rightarrow\quad x\in(-\infty,2]\cup[5,\infty).$$
Bu iki kümenin kesişimi yalnız $\{2\}$'dir.

**Neden doğru?** $x=2$ her iki eşitsizlikte de eşitlik sağlar; diğer ortak değer yoktur.

**Çeldirici notu:** Çözüm kümelerini kesiştirmek yerine birleştirmek gereğinden geniş bir aralık verir.
