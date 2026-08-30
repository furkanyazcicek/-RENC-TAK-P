# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 31 — Çözümler

## Soru 1
**Doğru cevap:** A

**Kazanım:** Aynı dereceli çarpım ve kare farkında öncü terim iptalini inceleme.

**Çözüm:**
$$P(x+1)P(x-1)=(x^2+2x+2)(x^2-2x+2)=x^4+4,$$
$$P(x)^2=(x^2+1)^2=x^4+2x^2+1.$$
Fark $-2x^2+3$ olduğundan derece 2'dir.

**Neden doğru?** Dördüncü dereceli terimler yok olur, karesel terim sıfır kalmaz.

**Çeldirici notu:** Her iki ifadenin derecesini 4 bulup farkı da dördüncü dereceden sanmak iptali kaçırır.

## Soru 2
**Doğru cevap:** B

**Kazanım:** İkinci dereceden polinomun eşit aralıklı değerlerinde sabit ikinci farkı kullanma.

**Çözüm:** Ardışık değerlerin birinci farkları $3-1=2$ ve $7-3=4$'tür. İkinci fark $4-2=2$ olur. İkinci dereceden polinomda ikinci fark sabit olduğundan sonraki birinci fark $4+2=6$'dır. Bu nedenle
$$P(3)=7+6=13.$$

**Neden doğru?** Eşit aralıklı girdilerde ikinci dereceden bir polinomun ikinci farkları sabittir.

**Çeldirici notu:** Değerlerin artışını sabit sanıp son farkı yeniden 4 almak polinomun ikinci dereceden olduğu bilgisini kullanmaz.

## Soru 3
**Doğru cevap:** C

**Kazanım:** Polinom karesinin katsayılarını karşılaştırma.

**Çözüm:**
$$P(x)=x^4+2x^3+3x^2+2x+1.$$
Katsayılar arasında en büyük olan 3'tür.

**Neden doğru?** $x^2$ terimine hem $x\cdot x$ hem de iki farklı $x^2\cdot1$ çarpımı katkı verir.

**Çeldirici notu:** Yalnız çapraz çarpımın 2 katsayısını almak iki kareli katkıyı eksik bırakır.

## Soru 4
**Doğru cevap:** D

**Kazanım:** Kalanların doğrusal birleşiminden yeni kalanı bulma.

**Çözüm:** $P(1)=2$ ve $Q(1)=-3$ olduğundan
$$P(1)+2Q(1)=2+2(-3)=-4.$$

**Neden doğru?** Kalan teoremine göre yeni polinomun $x-1$ ile bölümünden kalan 1 noktasındaki değeridir.

**Çeldirici notu:** $Q$'nun kalanını yalnız bir kez eklemek dışarıdaki 2 katsayısını atlar.

## Soru 5
**Doğru cevap:** E

**Kazanım:** Simetrik köklerden tek dereceli polinomun doğrusal katsayısını bulma.

**Çözüm:**
$$P(x)=x(x^2-1)(x^2-4)=x^5-5x^3+4x.$$
Doğrusal terimin katsayısı 4'tür.

**Neden doğru?** Zıt kök çiftleri önce fark kareler çarpanlarını, sıfır kökü de dışarıdaki $x$ çarpanını verir.

**Çeldirici notu:** Kökleri yalnız toplamak bütün tek dereceli katsayıları belirlemez.

## Soru 6
**Doğru cevap:** A

**Kazanım:** Polinom ile yansıtılmış hâlinin toplamının çiftliğini tanıma.

**Çözüm:**
$$R(-x)=P(-x)+P(x)=R(x).$$

**Neden doğru?** Toplamda çarpanların sırası değişir ancak değer değişmez; $R$ çift polinomdur.

**Çeldirici notu:** $R(-x)=-R(x)$ eşitliği tek polinom özelliğidir.

## Soru 7
**Doğru cevap:** B

**Kazanım:** Altıncı dereceden polinomu kübik yardımcı değişkenle çözerek gerçek kök sayma.

**Çözüm:** $y=x^3$ alınırsa $y^2-5y+4=(y-1)(y-4)$ olur. $x^3=1$ ve $x^3=4$ denklemlerinin her biri bir gerçek kök verdiğinden toplam iki farklı gerçek kök vardır.

**Neden doğru?** Küp fonksiyonu gerçek sayılarda bire birdir; her pozitif $y$ için tek gerçek küpkök bulunur.

**Çeldirici notu:** Kareli denklem gibi her yardımcı kökten iki zıt kök üretmek küp fonksiyonunu yanlış yorumlamaktır.

## Soru 8
**Doğru cevap:** C

**Kazanım:** Pozitif köklerin geometrik ortalamasını Vieta bağıntısıyla bulma.

**Çözüm:** Kökler çarpımı 12 olduğundan geometrik ortalama
$$\sqrt{\alpha\beta}=\sqrt{12}=2\sqrt3$$
olur.

**Neden doğru?** Her iki kök pozitif olduğu için geometrik ortalama gerçek ve pozitiftir.

**Çeldirici notu:** Kökler toplamını ikiye bölmek aritmetik ortalamayı verir.

## Soru 9
**Doğru cevap:** D

**Kazanım:** Parametreli denklemin diskriminantından parametre seçme.

**Çözüm:** Diskriminant
$$\Delta=(m+1)^2-4m=(m-1)^2$$
olur. $(m-1)^2=16$ ile $m=5$ veya $m=-3$ bulunur. $m>1$ koşuluna göre $m=5$'tir.

**Neden doğru?** Eşitsizlik iki cebirsel adaydan yalnız birini bırakır.

**Çeldirici notu:** Karekök alırken yalnız $m-1=4$ değil, $m-1=-4$ adayı da önce değerlendirilmelidir.

## Soru 10
**Doğru cevap:** E

**Kazanım:** İkinci dereceden eşitsizliğin çözüm aralığı uzunluğunu bulma.

**Çözüm:**
$$x^2-6x+5=(x-1)(x-5).$$
Baş katsayı pozitif olduğundan çözüm $(1,5)$ aralığıdır. Uzunluk $5-1=4$ birimdir.

**Neden doğru?** Açık veya kapalı uçlar aralığın uzunluğunu değiştirmez.

**Çeldirici notu:** Kök sayısı 2'yi aralık uzunluğu sanmak iki farklı kavramı karıştırır.
