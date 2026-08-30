# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 15 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Polinomun ardışık değer farkında derece değişimini kullanma.

**Çözüm:** $n$'inci dereceden bir polinomda $P(x+1)-P(x)$ ifadesinin derecesi $n-1$ olur. $n-1=6$ olduğundan $n=7$'dir.

**Neden doğru?** Öncü terim $ax^n$ için $(x+1)^n-x^n$ farkında $x^n$ terimleri yok olur, $anx^{n-1}$ terimi kalır.

**Çeldirici notu:** Farkın derecesini $P$ ile aynı almak öncü terim iptalini gözden kaçırır.

## Soru 2
**Doğru cevap:** A

**Kazanım:** Katsayı dizisini tersine çeviren polinom dönüşümünü uygulama.

**Çözüm:**
$$Q(x)=x^3\left(\frac{2}{x^3}-\frac5x+1\right)=2-5x^2+x^3.$$
Bu nedenle $x^2$ teriminin katsayısı $-5$'tir.

**Neden doğru?** $x^3$ çarpanı kesirli kuvvetleri yok eder ve $P$'nin katsayılarını ters derece sırasına taşır.

**Çeldirici notu:** $-5x$ terimini dönüşümden sonra yine doğrusal bırakmak dışarıdaki $x^3$ çarpanını eksik uygular.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Bir polinomun verilen ikinci dereceden polinoma tam bölünme koşulundan katsayı bulma.

**Çözüm:** $x^2+x+1$ ile bölüm işleminde $x^3\equiv1$ ve $x^4\equiv x$ alınabilir. Buna göre
$$P(x)\equiv x+2+a(-x-1)+2x+1=(3-a)x+(3-a).$$
Kalanın sıfır olması için $a=3$ olmalıdır.

**Neden doğru?** Tam bölünebilme, derecesi böleninkinden küçük kalan polinomun bütün katsayılarının sıfır olmasını gerektirir.

**Çeldirici notu:** $x^3\equiv1$ bağıntısını kullanıp $x^4\equiv x$ dönüşümünü yapmamak kalan katsayılarını eksik bırakır.

## Soru 4
**Doğru cevap:** C

**Kazanım:** İkinci dereceden bölenin köklerinde doğrusal kalanı belirleme.

**Çözüm:** $R(x)=ax+b$ olsun. $R(1)=P(1)=2$ ve $R(2)=P(2)=5$ eşitlikleri $a+b=2$, $2a+b=5$ verir. $a=3$, $b=-1$ ve $R(0)=-1$ bulunur.

**Neden doğru?** Bölenin 1 ve 2 köklerinde bölme özdeşliğindeki bölenli terim sıfır olur; kalan polinomla aynı değerleri alır.

**Çeldirici notu:** Kalanı sabit sanmak bölenin ikinci dereceden olduğunu gözden kaçırır.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Kökleri verilen monik dördüncü dereceden polinomda doğrusal katsayıyı bulma.

**Çözüm:** $x$ katsayısı, köklerin üçlü çarpımları toplamının ters işaretlisidir. Üçlü çarpımlar toplamı
$$2+6-6-3=-1$$
olduğundan doğrusal katsayı 1'dir.

**Neden doğru?** Monik dördüncü dereceden polinomun Vieta açılımında $x$ katsayısı $-\sum r_ir_jr_k$ biçimindedir.

**Çeldirici notu:** Üçlü çarpımlar toplamında son işaret değişimini yapmamak $-1$ sonucunu verir.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Doğrusal çarpanla polinom bölmesinde bölüm katsayılarını bulma.

**Çözüm:** 1 ile sentetik bölmede $2,-3,5,-4$ katsayılarından bölüm katsayıları $2,-1,4$ ve kalan 0 elde edilir. Bölüm $2x^2-x+4$ olduğundan sabit terim 4'tür.

**Neden doğru?** Çarpma kontrolü $(x-1)(2x^2-x+4)=2x^3-3x^2+5x-4$ eşitliğini verir.

**Çeldirici notu:** Son bulunan 0 kalan, bölümün sabit terimi değildir.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Ardışık polinom farkından katsayı, verilen değerden sabit terim belirleme.

**Çözüm:** $P(x+1)-P(x)=2x+1+a$ olduğundan $a=4$'tür. $P(2)=4+8+b=3$ eşitliğinden $b=-9$ ve $a+b=-5$ bulunur.

**Neden doğru?** Özdeşlik doğrusal katsayıyı, tek bir polinom değeri de geriye kalan sabit katsayıyı belirler.

**Çeldirici notu:** Kare açılımındaki sabit 1'i atmak $a$ değerini bir fazla verir.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Köklerin karelerinden oluşan yeni polinomun katsayısını bulma.

**Çözüm:** $\alpha+\beta=7$ ve $\alpha\beta=10$'dur. Yeni köklerin toplamı
$$\alpha^2+\beta^2=49-20=29$$
olur. Monik polinomun $x$ katsayısı bunun ters işaretlisi, yani $-29$'dur.

**Neden doğru?** Monik ikinci dereceden polinomda doğrusal katsayı kökler toplamının negatifidir.

**Çeldirici notu:** Yeni köklerin toplamı 29'u işaret değiştirmeden yazmak Vieta işaretini atlar.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Eşit kök ve kökün işaretinden parametre seçme.

**Çözüm:** Eşit kök için $m^2-36=0$, yani $m=\pm6$'dır. Çift katlı kök $-m/2$ olduğundan kökün negatif olması için $m=6$ seçilir.

**Neden doğru?** Diskriminant iki aday üretir; kökün işareti bu adaylardan yalnız pozitif $m$ değerini bırakır.

**Çeldirici notu:** $m=-6$ diskriminantı sıfırlar ancak çift katlı kökü pozitif yapar.

## Soru 10
**Doğru cevap:** D

**Kazanım:** Kökleri verilen parametreli ikinci dereceden denklemde parametre bulma.

**Çözüm:** Kökler çarpımı 2 olduğundan
$$\frac{m+2}{m+1}=2$$
eşitliği yazılır. $m+2=2m+2$ ile $m=0$ bulunur.

**Neden doğru?** $m=0$ için denklem $x^2-3x+2=0$ olur ve kökler gerçekten 1 ile 2'dir.

**Çeldirici notu:** Pay ve paydayı ters kullanmak baş katsayılı denklemde Vieta bağıntısını bozar.
