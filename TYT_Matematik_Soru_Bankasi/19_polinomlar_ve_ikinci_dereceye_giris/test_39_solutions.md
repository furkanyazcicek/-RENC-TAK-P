# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 39 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** Binom açılımında öncü terimler çıkarıldıktan sonra kalan dereceyi bulma.

**Çözüm:** $(x^2+1)^4=x^8+4x^6+6x^4+4x^2+1$'dir. İlk iki terim çıkarılınca $6x^4+4x^2+1$ kalır; derece 4'tür.

**Neden doğru?** Sekizinci ve altıncı dereceli terimler tam olarak yok olur, dördüncü dereceli terim sıfır kalmaz.

**Çeldirici notu:** Açılım yapmadan yalnız ilk ifadenin derecesini almak iptali kaçırır.

## Soru 2
**Doğru cevap:** E

**Kazanım:** Ters değişkenli ifadeyi polinom biçimine dönüştürme.

**Çözüm:**
$$Q(x)=x^3\left(\frac1{x^3}-\frac2x+4\right)=1-2x^2+4x^3.$$
Bu nedenle $Q(2)=1-8+32=25$'tir.

**Neden doğru?** Dışarıdaki $x^3$ bütün terimlere dağıtıldığında negatif üs kalmaz.

**Çeldirici notu:** $x^3$ çarpanını yalnız ilk terime uygulamak polinomu yanlış kurar.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Polinom çarpımında belirli dereceli terime katkıları toplama.

**Çözüm:** $x^2$ terimine $x^2\cdot2$ ve $2x\cdot(-x)$ katkı verir. Katsayı toplamı $2-2=0$'dır.

**Neden doğru?** Diğer terim çiftlerinin derece toplamı 2 değildir.

**Çeldirici notu:** İkinci katkının negatif işaretini atlamak katsayıyı 4 yapar.

## Soru 4
**Doğru cevap:** B

**Kazanım:** İkinci dereceden bölenin köklerindeki değerlerden doğrusal kalanı kurma.

**Çözüm:** $a+b=4$ ve $-a+b=-2$ eşitliklerinden $a=3$, $b=1$ bulunur. $R(x)=3x+1$ olduğundan sıfırı $-\frac13$'tür.

**Neden doğru?** $x=\pm1$ bölenin kökleri olduğundan $P$ ile kalan aynı değerleri alır.

**Çeldirici notu:** $3x+1=0$ denkleminde sabiti karşıya geçirirken işareti korumamak pozitif sonuç verir.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Monik polinomda kökler toplamını bir alt derece katsayısıyla ilişkilendirme.

**Çözüm:** Kökler toplamı $r-3$'tür. Monik dördüncü dereceden polinomda $x^3$ katsayısı kökler toplamının ters işaretlisidir:
$$-(r-3)=2\Rightarrow r=1.$$

**Neden doğru?** Vieta bağıntısı çokluklarıyla birlikte bütün kökleri kapsar.

**Çeldirici notu:** Katsayıyı kökler toplamına doğrudan eşitlemek işaret hatasıdır.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Çarpım biçimindeki dördüncü derece denklemin gerçek köklerini ayırma.

**Çözüm:** İlk çarpan $x(x-2)$ ile 0 ve 2 köklerini verir. İkinci çarpan $(x-3)(x+1)$ olduğundan 3 ve $-1$ kökleri gelir. Pozitif köklerin çarpımı $2\cdot3=6$'dır.

**Neden doğru?** Yalnız 2 ve 3 pozitif köktür; sıfır pozitif sayı değildir.

**Çeldirici notu:** Sıfırı pozitif kök saymak çarpımı anlamsız biçimde sıfırlar.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Kökler toplamı ve çarpımından çarpımsal bir kök ifadesini hesaplama.

**Çözüm:** $\alpha+\beta=4$, $\alpha\beta=1$ olduğundan
$$\alpha^2+\beta^2=4^2-2\cdot1=14.$$
Böylece
$$(\alpha^2+1)(\beta^2+1)=\alpha^2\beta^2+\alpha^2+\beta^2+1=1+14+1=16.$$

**Neden doğru?** İfadenin açılımındaki bütün simetrik terimler Vieta değerleriyle belirlenir.

**Çeldirici notu:** Çarpımı yalnız $\alpha^2\beta^2$ olarak almak çapraz toplam ile sabit terimi atlar.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Tam kare farkı biçimindeki parametreli denklemin köklerini yorumlama.

**Çözüm:** Denklem $(x-m)^2=4$ biçimindedir; kökler $m-2$ ve $m+2$'dir. Toplam $2m=10$ olduğundan $m=5$, küçük kök 3'tür.

**Neden doğru?** $m=5$ için kökler 3 ve 7 olup iki koşulu da sağlar.

**Çeldirici notu:** Kökler toplamını $m$ sanmak orta nokta ile toplamı karıştırır.

## Soru 9
**Doğru cevap:** B

**Kazanım:** Gerçek kökü olmayan parametreli denklem için diskriminant eşitsizliğini çözme.

**Çözüm:** 
$$\Delta=4m^2-4(m+3)=4(m^2-m-3)<0.$$
Kritik değerler $\frac{1\pm\sqrt{13}}2$'dir. Bu açık aralıktaki tam sayılar $-1,0,1,2$ olmak üzere dört tanedir.

**Neden doğru?** Diskriminant yalnız bu aralıkta negatiftir ve baş katsayı daima 1'dir.

**Çeldirici notu:** Yaklaşık sınırları tam sayıya yuvarlayıp uçları dahil etmek fazladan değer saydırır.

## Soru 10
**Doğru cevap:** C

**Kazanım:** Dikdörtgen alanını ikinci derece fonksiyon olarak en büyük yapma.

**Çözüm:**
$$A(x)=(x+1)(9-x)=-x^2+8x+9=25-(x-4)^2.$$
Kareli terim en az 0 olduğundan alanın en büyük değeri 25'tir.

**Neden doğru?** $x=4$ için kenarlar 5 ve 5 olur; alan gerçekten 25'e ulaşır.

**Çeldirici notu:** Yalnız kenarların toplamını kullanmak alanın karesel yapısını gözden kaçırır.
