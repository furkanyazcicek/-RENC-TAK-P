# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 32 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Polinom farkında en yüksek dereceli terim iptalini belirleme.

**Çözüm:**
$$(x^2+1)^3=x^6+3x^4+3x^2+1.$$
$x^6$ çıkarılınca en yüksek dereceli terim $3x^4$ kalır; derece 4'tür.

**Neden doğru?** Altıncı dereceli terim tamamen yok olur, dördüncü dereceli katsayı sıfır değildir.

**Çeldirici notu:** İlk ifadenin derecesini 6 alıp çıkarma işlemini göz ardı etmek öncü terim iptalini kaçırır.

## Soru 2
**Doğru cevap:** C

**Kazanım:** İki simetrik kök koşulundan katsayı birleşimini bulma.

**Çözüm:** $P(1)=0$ koşulu $a+b=-2$, $P(-1)=0$ koşulu $a-b=0$ verir. Sorulan değer doğrudan 0'dır.

**Neden doğru?** $x=-1$ değerinde küplü ve sabit terimler birbirini götürür; yalnız $a-b$ kalır.

**Çeldirici notu:** İki denklemi toplamaya çalışmak sorulan birleşimin zaten ikinci koşulda bulunduğunu gözden kaçırır.

## Soru 3
**Doğru cevap:** D

**Kazanım:** Tam kuvvet biçimindeki polinomun farklı gerçek kök sayısını belirleme.

**Çözüm:**
$$P(x)=(x-1)^4.$$
Yalnız $x=1$ gerçek köktür; çokluğu 4 olsa da farklı kök sayısı 1'dir.

**Neden doğru?** Kök çokluğu farklı köklerin sayısını artırmaz.

**Çeldirici notu:** Dördüncü dereceyi dört farklı gerçek kök olarak yorumlamak çokluk kavramını karıştırır.

## Soru 4
**Doğru cevap:** E

**Kazanım:** Polinom bileşiminde sabit terimi iç polinomun sabit değerinden bulma.

**Çözüm:**
$$P(P(x))=(x^2+1)^2+1=x^4+2x^2+2.$$
Sabit terim 2'dir.

**Neden doğru?** Dış polinomun $u^2+1$ biçiminde iç girdiye uygulanması ek sabit 1'i korur.

**Çeldirici notu:** Yalnız iç polinomun sabit terimi 1'i almak dışarıdaki son $+1$ katkısını atlar.

## Soru 5
**Doğru cevap:** A

**Kazanım:** Tekrarlı köklerden dördüncü dereceden polinomun karesel katsayısını bulma.

**Çözüm:** İkili kök çarpımları toplamı
$$1+4+4(-2)=-3$$
olur. Bu değer monik dördüncü dereceden polinomun $x^2$ katsayısıdır.

**Neden doğru?** 1'lerin çarpımı 1, $-2$'lerin çarpımı 4 ve dört çapraz çiftin toplamı $-8$'dir.

**Çeldirici notu:** Tekrarlı kök çiftlerinden yalnız birer tanesini almak çapraz çarpımları eksik sayar.

## Soru 6
**Doğru cevap:** B

**Kazanım:** Bileşik polinomun doğrusal bölenle bölümünden kalanını eski kalanla ilişkilendirme.

**Çözüm:** $P(x)$ polinomunun $x-4$ ile bölümünden kalan $P(4)=5$'tir. $P(x^2)$ için $x-2$ ile bölümden kalan $P(2^2)=P(4)=5$ olur.

**Neden doğru?** Yeni doğrusal bölenin kökü 2, iç polinomda eski değerlendirme noktası 4'ü üretir.

**Çeldirici notu:** $P(2)$ değerini kullanmak içteki kare dönüşümünü atlar.

## Soru 7
**Doğru cevap:** C

**Kazanım:** Pozitif köklerin kareli ortalamasını Vieta bağıntılarıyla bulma.

**Çözüm:** $\alpha+\beta=6$, $\alpha\beta=8$ olduğundan $\alpha^2+\beta^2=36-16=20$'dir. Kareli ortalama
$$\sqrt{\frac{\alpha^2+\beta^2}{2}}=\sqrt{10}$$
olur.

**Neden doğru?** Kareli ortalama, kareler toplamının aritmetik ortalamasının kareköküdür.

**Çeldirici notu:** $\sqrt{\alpha\beta}$ kullanmak geometrik ortalamayı verir.

## Soru 8
**Doğru cevap:** D

**Kazanım:** Köklerin harmonik ortalamasından parametre bulma.

**Çözüm:** Kökler toplamı $m+2$, çarpımı $2m$'dir. Harmonik ortalama
$$\frac{2\cdot2m}{m+2}=3$$
eşitliğinden $4m=3m+6$ ve $m=6$ bulunur.

**Neden doğru?** $m=6$ için kökler 6 ve 2 olup ikisi de pozitiftir.

**Çeldirici notu:** Harmonik ortalamayı $(m+2)/2$ yazmak aritmetik ortalamayla karıştırmaktır.

## Soru 9
**Doğru cevap:** E

**Kazanım:** Birbirinin çarpmaya göre tersi olan köklerden parametre bulma.

**Çözüm:** Kökler birbirinin çarpmaya göre tersi olduğundan çarpımları 1'dir. Vieta bağıntısıyla $m=1$ bulunur.

**Neden doğru?** $m=1$ için denklem $x^2-3x+1=0$ olur; iki gerçek kökün çarpımı gerçekten 1'dir.

**Çeldirici notu:** Kökler toplamını 1'e eşitlemek çarpımsal tersi toplamsal tersle karıştırır.

## Soru 10
**Doğru cevap:** A

**Kazanım:** Köklerin işareti değiştirildiğinde yeni ikinci dereceden polinomu kurma.

**Çözüm:** Yeni köklerin toplamı $-(\alpha+\beta)=-5$, çarpımı $\alpha\beta=6$'dır. Yeni polinom $x^2+5x+6$ ve katsayıları toplamı 12'dir.

**Neden doğru?** Her iki kökün işareti değişince toplamın işareti değişir, çarpım değişmez.

**Çeldirici notu:** Sabit terimi $-6$ yapmak iki negatif kökün çarpımının yine pozitif olduğunu gözden kaçırır.
