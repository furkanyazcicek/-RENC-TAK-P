# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 23 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Polinomun sabit değerini çıkarıp $x$ çarpanına bölmede derece belirleme.

**Çözüm:** $P(x)-P(0)$ polinomunun sabit terimi sıfırdır ve $x$ ile tam bölünür. Yedinci dereceli öncü terim korunur; $x$ ile bölündüğünde bölümün derecesi 6 olur.

**Neden doğru?** Sabit bir değer çıkarmak en yüksek dereceli terimi değiştirmez, doğrusal çarpana bölmek dereceyi bir azaltır.

**Çeldirici notu:** $P(0)$ çıkarılınca derecenin de yok olduğunu düşünmek yalnız sabit terimin değiştiğini gözden kaçırır.

## Soru 2
**Doğru cevap:** D

**Kazanım:** Bir polinom ile yansıtılmış girdili değerinin farkından katsayı belirleme.

**Çözüm:**
$$P(x)-P(2-x)=(4+2a)(x-1).$$
Bu ifade $10(x-1)$ olduğundan $4+2a=10$ ve $a=3$ bulunur.

**Neden doğru?** Eşitlik her gerçek $x$ için geçerli olduğundan aynı doğrusal çarpanın katsayıları eşittir.

**Çeldirici notu:** $(2-x)^2$ açılımındaki $-4x$ terimini atlamak katsayıyı değiştirir.

## Soru 3
**Doğru cevap:** E

**Kazanım:** Çarpan biçimindeki polinomu belirli bir noktada değerlendirme.

**Çözüm:**
$$P(0)=2(-1)(-2)-3(-2)(-3)+(-3)(-1)=4-18+3=-11.$$

**Neden doğru?** Her çarpan ayrı ayrı $x=0$ için değerlendirilip önündeki katsayıyla birlikte toplanmıştır.

**Çeldirici notu:** İkinci terimdeki dışarıdaki eksi işaretini atlamak sonucu pozitife çevirir.

## Soru 4
**Doğru cevap:** A

**Kazanım:** Kalan teoremiyle geometrik toplam biçimindeki polinomun kalanını bulma.

**Çözüm:** $x+1$ ile bölümden kalan $P(-1)$'dir:
$$-1+1-1+1-1+1=0.$$

**Neden doğru?** Tek ve çift kuvvetli terimler $x=-1$ için ikişer ikişer birbirini götürür.

**Çeldirici notu:** Altı terim bulunduğu için kalanı 6 sanmak polinom değerini hesaplamaz.

## Soru 5
**Doğru cevap:** B

**Kazanım:** Kübik polinomu çarpanlara ayırıp seçilen köklerin çarpımını bulma.

**Çözüm:** $P(1)=0$ olduğundan $x-1$ çarpandır. Bölüm $x^2-x-6=(x-3)(x+2)$ olur. Pozitif kökler 1 ve 3, çarpımları 3'tür.

**Neden doğru?** Çarpanlar $(x-1)(x-3)(x+2)$ biçiminde polinomun tamamını verir.

**Çeldirici notu:** Negatif kök $-2$'yi çarpıma katmak sorudaki pozitiflik koşulunu ihlal eder.

## Soru 6
**Doğru cevap:** C

**Kazanım:** Tek dereceli terimlerden oluşan polinomun gerçek kök sayısını belirleme.

**Çözüm:**
$$Q(x)=2x(x^2+3).$$
$x^2+3$ gerçek sayılarda sıfır olamayacağı için tek gerçek kök $x=0$'dır.

**Neden doğru?** Çarpanlardan yalnız $x$ gerçek bir sıfır üretir; diğer çarpan her zaman pozitiftir.

**Çeldirici notu:** $x^2+3=0$ denkleminden $\pm\sqrt3$ yazmak eksi işaretini yanlış kullanmaktır.

## Soru 7
**Doğru cevap:** D

**Kazanım:** Kökler toplamı ve çarpımından rasyonel simetrik ifade hesaplama.

**Çözüm:** $\alpha\beta=6$ ve $\alpha+\beta=5$ olduğundan
$$\frac{\alpha^2\beta^2}{\alpha+\beta}=\frac{6^2}{5}=\frac{36}{5}.$$

**Neden doğru?** Pay $(\alpha\beta)^2$ biçiminde doğrudan Vieta değerine dönüşür.

**Çeldirici notu:** Payda kökler toplamı yerine kökler çarpımını kullanmak iki bağıntıyı karıştırır.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Kökleri ötelenen ikinci dereceden polinomun katsayılar toplamını bulma.

**Çözüm:** Yeni köklerin toplamı $2-(\alpha+\beta)=-2$, çarpımı $1-(\alpha+\beta)+\alpha\beta=-2$'dir. Yeni polinom $x^2+2x-2$ olur; katsayıları toplamı 1'dir.

**Neden doğru?** Monik polinomun doğrusal katsayısı yeni kökler toplamının tersi, sabit terimi yeni kökler çarpımıdır.

**Çeldirici notu:** Her kökten 1 çıkarmak yerine köklere 1 eklemek doğrusal katsayının işaretini değiştirir.

## Soru 9
**Doğru cevap:** A

**Kazanım:** Kökler çarpımının karesi ve parametre koşulundan parametre bulma.

**Çözüm:** $\alpha\beta=2m$ olduğundan $4m^2=324$ ve $m=\pm9$ bulunur. $m>0$ koşuluyla $m=9$ seçilir.

**Neden doğru?** Karekök alma iki aday üretir; pozitiflik koşulu negatif adayı eler.

**Çeldirici notu:** $(2m)^2$ ifadesini $2m^2$ yazmak çarpanın da karesini almayı unutur.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Bilinen bir kökü denklemde yerine koyarak parametre bulma.

**Çözüm:** $x=1$ yazıldığında $2-s+3=0$ olur. Buradan $s=5$ bulunur.

**Neden doğru?** Bir sayı denklemin kökü ise yerine yazıldığında sol tarafı sıfır yapar.

**Çeldirici notu:** Baş katsayı 2'yi kökler toplamı sanmak yerine doğrudan kök koşulu kullanılmalıdır.
