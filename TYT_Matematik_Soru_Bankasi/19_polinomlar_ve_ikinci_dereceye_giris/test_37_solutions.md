# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 37 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Bir polinomun iki zıt yöndeki ötelemesinin farkında derece azalmasını belirleme.

**Çözüm:** $P(x)$ polinomunun baş terimi $ax^5$ olsun. Farktaki en yüksek dereceli katkı
$$a\big((x+1)^5-(x-1)^5\big)$$
ifadesinden gelir. $x^5$ terimleri yok olur, $x^4$ teriminin katsayısı $a(5-(-5))=10a$ olur. $a\ne0$ olduğundan derece 4'tür.

**Neden doğru?** Beşinci dereceli terimler çıkarma işleminde iptal olurken dördüncü dereceli terim sıfır kalmaz.

**Çeldirici notu:** Ötelemenin dereceyi hiç değiştirmediğini söyleyip 5 almak farktaki öncü terim iptalini gözden kaçırır.

## Soru 2
**Doğru cevap:** C

**Kazanım:** Polinom bölme özdeşliğinde belirli bir noktadaki bölüm değerini bulma.

**Çözüm:** Eşitlikte $x=5$ yazılır:
$$18=(5-2)Q(5)+3.$$
Buradan $3Q(5)=15$ ve $Q(5)=5$ bulunur.

**Neden doğru?** Bölme özdeşliği her gerçek sayı için geçerli olduğundan verilen değer doğrudan kullanılabilir.

**Çeldirici notu:** Kalan 3'ü çıkarmadan 18'i doğrudan 3'e bölmek 6 sonucuna götürür.

## Soru 3
**Doğru cevap:** D

**Kazanım:** Polinom çarpımında belirli dereceli terime katkı veren çarpımları seçme.

**Çözüm:** $x^3$ terimine
$$x^3\cdot(-3),\qquad 2x^2\cdot x,qquad (-x)\cdot2x^2$$
çarpımları katkı verir. Katsayı toplamı $-3+2-2=-3$'tür.

**Neden doğru?** Dereceleri toplamı 3 olan bütün terim çiftleri hesaba katılmıştır.

**Çeldirici notu:** Yalnız bir çarpım çiftini almak veya $(-x)$ teriminin işaretini atlamak eksik sonuç verir.

## Soru 4
**Doğru cevap:** E

**Kazanım:** İkinci dereceden polinomun fark bağıntısından katsayılarını ve değerini bulma.

**Çözüm:**
$$P(x+1)-P(x)=a(2x+1)+b=2ax+(a+b).$$
Katsayılar karşılaştırılırsa $2a=4$ ve $a+b=6$ olur; buradan $a=2$, $b=4$ bulunur. $P(0)=c=1$ olduğuna göre
$$P(2)=2\cdot4+4\cdot2+1=17.$$

**Neden doğru?** Özdeşlik her gerçek $x$ için sağlandığından aynı dereceli terimlerin katsayıları eşittir.

**Çeldirici notu:** $P(0)=1$ koşulunu kullanmadan yalnız $a$ ve $b$ ile değer hesaplamak sabit terimi eksik bırakır.

## Soru 5
**Doğru cevap:** A

**Kazanım:** Polinom bileşkesinde kök koşullarını ayrı denklemlere dönüştürme.

**Çözüm:** $P(t)=t(t-3)$ olduğundan $Q(x)=0$ için
$$x^2-1=0\quad\text{veya}\quad x^2-1=3$$
olmalıdır. Bu denklemler sırasıyla $x=\pm1$ ve $x=\pm2$ köklerini verir. Toplam dört farklı gerçek kök vardır.

**Neden doğru?** İç ifade, dış polinomun iki farklı köküne eşitlenir ve her biri iki gerçek çözüm üretir.

**Çeldirici notu:** Yalnız dış polinomun iki kökünü saymak iç denklemlerin ikişer çözüm verdiğini atlar.

## Soru 6
**Doğru cevap:** B

**Kazanım:** Kalan polinomunun karesini bölen bağıntısıyla yeniden indirgeme.

**Çözüm:** Aynı bölen bakımından
$$P(x)^2\equiv(x+1)^2=x^2+2x+1.$$
$x^2-x+1$ bölenine göre $x^2\equiv x-1$ olduğundan
$$x^2+2x+1\equiv(x-1)+2x+1=3x$$
bulunur.

**Neden doğru?** Elde edilen $3x$ kalanının derecesi bölenin derecesinden küçüktür.

**Çeldirici notu:** $(x+1)^2$ ifadesini indirgemeden bırakmak geçerli kalan biçimine ulaşmaz.

## Soru 7
**Doğru cevap:** C

**Kazanım:** Tersinir yapılı dördüncü derece denklemi $x+\frac1x$ dönüşümüyle çözme.

**Çözüm:** $x=0$ kök değildir. Denklem $x^2$ ile bölünür:
$$\left(x+\frac1x\right)^2-5\left(x+\frac1x\right)+6=0.$$
$t=x+\frac1x$ alınırsa $(t-2)(t-3)=0$ olur. $t=2$ için $x=1$; $t=3$ için $x^2-3x+1=0$ denkleminin iki farklı pozitif kökü vardır. Toplam üç farklı pozitif kök bulunur.

**Neden doğru?** $t=2$ bir çift katlı kök üretse de farklı kök sayımında yalnız bir kez sayılır.

**Çeldirici notu:** Çokluğu farklı kök sayısı gibi saymak veya $t$ değerlerini doğrudan $x$ sanmak sonucu bozar.

## Soru 8
**Doğru cevap:** D

**Kazanım:** Rasyonel kök ifadesini kökler toplamı ve çarpımına dönüştürme.

**Çözüm:** $s=\alpha+\beta=\frac83$, $p=\alpha\beta=\frac23$ olsun. İfade
$$\frac{\alpha+\beta+2}{\alpha\beta+\alpha+\beta+1}
=\frac{s+2}{p+s+1}$$
olur. Değerler yerleştirilince
$$\frac{\frac{14}{3}}{\frac{13}{3}}=\frac{14}{13}$$
bulunur.

**Neden doğru?** İki kesrin ortak paydası simetrik biçimde yalnız $s$ ve $p$ ile yazılır.

**Çeldirici notu:** Paydaları toplamadan payları doğrudan toplamak kesir işleminde temel hata oluşturur.

## Soru 9
**Doğru cevap:** E

**Kazanım:** Çarpanlara ayrılabilen parametreli denklemde köklerin aralık koşullarını inceleme.

**Çözüm:**
$$x^2-(m+4)x+4m=(x-4)(x-m).$$
Köklerden 4 zaten $(0,5)$ aralığındadır. Diğer kökün 7'den büyük olması için $m>7$ gerekir. Bu koşulu sağlayan en küçük tam sayı $m=8$'dir.

**Neden doğru?** $m>7$ olduğunda yalnız 4 açık aralıkta kalır ve kökler farklıdır.

**Çeldirici notu:** $m=7$ seçmek “7'den büyük” koşulundaki açık sınırı dahil etmektir.

## Soru 10
**Doğru cevap:** A

**Kazanım:** İkinci derece eşitsizliğin çözüm aralığı uzunluğunu köklerden belirleme.

**Çözüm:**
$$x^2-(k+1)x+k=(x-1)(x-k).$$
$k>1$ olduğundan eşitsizliğin çözümü $(1,k)$ aralığıdır. Aralık uzunluğu $k-1=5$ olduğuna göre $k=6$ bulunur.

**Neden doğru?** Baş katsayı pozitif olduğu için çarpım iki kök arasında negatiftir.

**Çeldirici notu:** Aralık uzunluğunu uç noktaların toplamı sanmak kökler arası uzaklığı yanlış yorumlar.
