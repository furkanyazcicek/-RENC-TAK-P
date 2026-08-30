# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 27 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Üçlü polinom bileşiminde derece bağıntısını kullanma.

**Çözüm:** $n=\deg P$ için üçlü bileşimin derecesi $n^3$ olur. $n^3=125$ eşitliğinden $n=5$ bulunur.

**Neden doğru?** Her bileşim adımında dış ve iç polinom dereceleri çarpılır.

**Çeldirici notu:** Üç kez bileşim yapıldığı için dereceyi $3n$ almak bileşim kuralını toplama sanmaktır.

## Soru 2
**Doğru cevap:** C

**Kazanım:** Polinomun çift kısmını simetrik değerlerden hesaplama.

**Çözüm:**
$$E(2)=\frac{P(2)+P(-2)}2=\frac{7+1}{2}=4.$$

**Neden doğru?** $P(x)+P(-x)$ toplamında tek dereceli terimler yok olur ve çift kısım iki kat alınır.

**Çeldirici notu:** İki değeri toplamayıp çıkarmak polinomun tek kısmını verir.

## Soru 3
**Doğru cevap:** D

**Kazanım:** Sentetik bölmeyle bölüm polinomunun belirli katsayısını bulma.

**Çözüm:** 1 ile sentetik bölmede $1,2,-1,3,-5$ katsayılarından bölüm katsayıları $1,3,2,5$ ve kalan 0 elde edilir. Bölüm $x^3+3x^2+2x+5$ olduğundan $x$ katsayısı 2'dir.

**Neden doğru?** Çarpma kontrolü $(x-1)(x^3+3x^2+2x+5)=P(x)$ eşitliğini verir.

**Çeldirici notu:** Sentetik bölmedeki son 0 kalan, bölümün sabit terimi veya doğrusal katsayısı değildir.

## Soru 4
**Doğru cevap:** E

**Kazanım:** Polinomun girdisi ötelenince köklerin nasıl değiştiğini belirleme.

**Çözüm:** $Q(x)=0$ için $P(x+1)=0$ olmalıdır. Eski köklerden 1 çıkarılır; yeni kökler 0, 1 ve 3, toplamları 4'tür.

**Neden doğru?** $x+1=r$ eşitliği her eski kök $r$ için yeni kökü $r-1$ yapar.

**Çeldirici notu:** Eski köklere 1 eklemek ötelemenin yönünü ters yorumlamaktır.

## Soru 5
**Doğru cevap:** A

**Kazanım:** İki kök koşulundan kübik polinom katsayılarını belirleme.

**Çözüm:** $P(1)=0$ ve $P(-1)=0$ koşulları
$$a+b=-7, \qquad a-b=-5$$
verir. Buradan $a=-6$, $b=-1$ ve $ab=6$ bulunur.

**Neden doğru?** $x^2-1$ ile tam bölünme, 1 ve $-1$ sayılarının ayrı ayrı kök olmasını gerektirir.

**Çeldirici notu:** Yalnız bir kökü kullanmak iki bilinmeyeni belirlemeye yetmez.

## Soru 6
**Doğru cevap:** B

**Kazanım:** Polinom çarpımında $x\mapsto1-x$ yansıma simetrisini tanıma.

**Çözüm:**
$$Q(1-x)=P(1-x)P(1-(1-x))=P(1-x)P(x)=Q(x).$$

**Neden doğru?** Çarpanların yer değiştirmesi çarpımın değerini değiştirmez; yansımanın merkezi $x=1/2$'dir.

**Çeldirici notu:** $Q(-x)=Q(x)$ eşitliği merkez 0'a göre çiftlik gerektirir ve genel bir $P$ için zorunlu değildir.

## Soru 7
**Doğru cevap:** C

**Kazanım:** Dördüncü dereceden çift polinomun işaretini kök aralıklarında inceleme.

**Çözüm:**
$$P(x)=(x^2-1)(x^2-4).$$
$P(x)\leq0$ için $1\leq x^2\leq4$ olmalıdır. Tam sayı çözümler $-2,-1,1,2$ olmak üzere dört tanedir.

**Neden doğru?** İki çarpan yalnız $x^2$ değeri 1 ile 4 arasında olduğunda zıt işaretli veya sıfırdır.

**Çeldirici notu:** $x=0$ için iki çarpan da negatif olduğundan çarpım pozitiftir ve çözüme girmez.

## Soru 8
**Doğru cevap:** D

**Kazanım:** İki kökün harmonik ortalamasını Vieta bağıntılarıyla bulma.

**Çözüm:** Harmonik ortalama
$$\frac{2\alpha\beta}{\alpha+\beta}=\frac{2\cdot8}{6}=\frac83$$
olur.

**Neden doğru?** Kökler toplamı 6, çarpımı 8'dir ve harmonik ortalama bu iki simetrik değere bağlıdır.

**Çeldirici notu:** Kökler toplamını 2'ye bölmek aritmetik ortalamayı verir, harmonik ortalamayı değil.

## Soru 9
**Doğru cevap:** E

**Kazanım:** İki gerçek kökün pozitif olma koşulundan parametre sınırı bulma.

**Çözüm:** Diskriminant $(m-1)^2+8$ olduğundan her zaman pozitiftir. İki kökün de pozitif olması için toplam $m+1>0$ ve çarpım $m-2>0$ olmalıdır. Belirleyici koşul $m>2$; en küçük tam sayı 3'tür.

**Neden doğru?** Gerçek iki kökün toplamı ve çarpımı pozitifse köklerin ikisi de pozitiftir.

**Çeldirici notu:** Yalnız kökler toplamını pozitif yapmak, iki kökün de pozitif olmasını garanti etmez.

## Soru 10
**Doğru cevap:** A

**Kazanım:** İkinci dereceden polinom grafiğinin $y$ eksenini kestiği noktayı belirleme.

**Çözüm:** $y$ ekseni üzerindeki noktalarda $x=0$'dır. Bu nedenle kesişim ordinatı
$$P(0)=8$$
olur.

**Neden doğru?** Bir polinom grafiğinin $y$ eksenini kestiği noktanın ordinatı polinomun sabit terimine eşittir.

**Çeldirici notu:** Kökler 2 ve 4, grafiğin $x$ ekseniyle kesişimlerini verir; $y$ ekseni kesişimini değil.
