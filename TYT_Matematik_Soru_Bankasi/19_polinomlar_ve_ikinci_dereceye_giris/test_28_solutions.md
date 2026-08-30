# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 28 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Polinom ile yansıtılmış hâlinin çarpımında derece belirleme.

**Çözüm:** $P(-x)$ de beşinci derecedendir. Çarpımın derecesi $5+5=10$ olur.

**Neden doğru?** Öncü terimler $ax^5$ ve $-ax^5$ olup çarpımları $-a^2x^{10}$'dur; sıfır olmaz.

**Çeldirici notu:** $P(-x)$ dönüşümü dereceyi değiştirmez, yalnız tek dereceli terimlerin işaretini değiştirir.

## Soru 2
**Doğru cevap:** D

**Kazanım:** Simetrik ötelemenin ikinci farkından baş katsayıyı bulma.

**Çözüm:** İkinci dereceden polinom için
$$P(x+1)+P(x-1)-2P(x)=2a.$$
Bu değer 8 olduğundan $a=4$ bulunur.

**Neden doğru?** Doğrusal ve sabit terimler simetrik toplamda $2P(x)$ ile tamamen sadeleşir.

**Çeldirici notu:** Sonucu doğrudan $a=8$ almak iki karesel katkıyı tek saymaktır.

## Soru 3
**Doğru cevap:** E

**Kazanım:** Tek kuvvetli toplamın bölüm polinomunda katsayılar toplamını bulma.

**Çözüm:**
$$\frac{x^7+1}{x+1}=x^6-x^5+x^4-x^3+x^2-x+1.$$
$x=1$ yazıldığında katsayılar toplamı $1-1+1-1+1-1+1=1$ olur.

**Neden doğru?** Tek üs için $x^7+1$ ifadesi $x+1$ ile tam bölünür ve işaretler dönüşümlü ilerler.

**Çeldirici notu:** Yedi terim bulunduğu için toplamı 7 sanmak katsayı işaretlerini yok sayar.

## Soru 4
**Doğru cevap:** A

**Kazanım:** Tekrarlı gerçek köklerin çokluklarını belirleme.

**Çözüm:**
$$P(x)=(x^2-1)^2=(x-1)^2(x+1)^2.$$
1 ve $-1$ köklerinin her birinin çokluğu 2 olduğundan çokluklar toplamı 4'tür.

**Neden doğru?** Dördüncü derece, iki gerçek kökün ikişer kez sayılmasıyla tamamen karşılanır.

**Çeldirici notu:** Yalnız farklı kökleri saymak 2 sonucunu verir ve çokluk bilgisini atlar.

## Soru 5
**Doğru cevap:** B

**Kazanım:** Simetrik köklerden monik dördüncü dereceden polinom katsayısı bulma.

**Çözüm:**
$$P(x)=(x^2-1)(x^2-4)=x^4-5x^2+4.$$
Bu nedenle $x^2$ teriminin katsayısı $-5$'tir.

**Neden doğru?** Zıt kök çiftleri doğrusal ve küplü terimleri yok eder; karesel katsayı çarpımda açıkça görünür.

**Çeldirici notu:** Köklerin karelerini $1+4=5$ olarak bulup işaret değiştirmemek katsayıyı pozitif verir.

## Soru 6
**Doğru cevap:** C

**Kazanım:** Çift polinomda ikinci dereceden bölen için doğrusal kalanı belirleme.

**Çözüm:** Kalan $ax+b$ olsun. $P(2)=P(-2)=7$ olduğundan $2a+b=7$ ve $-2a+b=7$ olur. Buradan $a=0$, $b=7$; kalan 7'dir.

**Neden doğru?** Çiftlik iki simetrik noktadaki değerleri eşitler ve doğrusal kalanın eğimini sıfırlar.

**Çeldirici notu:** Kalanı $7x$ almak $x=-2$ için değeri $-14$ yapar ve çiftlikle çelişir.

## Soru 7
**Doğru cevap:** D

**Kazanım:** Rasyonel simetrik kök ifadesini Vieta bağıntılarıyla hesaplama.

**Çözüm:**
$$\frac{\alpha^2}{\beta}+\frac{\beta^2}{\alpha}
=\frac{\alpha^3+\beta^3}{\alpha\beta}.$$
$\alpha+\beta=3$, $\alpha\beta=1$ olduğundan $\alpha^3+\beta^3=27-9=18$ ve sonuç 18'dir.

**Neden doğru?** Paydalar eşitlendiğinde küpler toplamı ortaya çıkar ve yalnız Vieta değerleriyle bulunur.

**Çeldirici notu:** $\alpha^2+\beta^2$ kullanmak pay eşitlemesinde birer kuvvet eksik bırakır.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Köklerin aritmetik ortalamasından parametre bulma.

**Çözüm:** Kökler toplamı $m+2$ olduğundan aritmetik ortalama $(m+2)/2=5$'tir. Buradan $m=8$ bulunur.

**Neden doğru?** Denklem $(x-m)(x-2)=0$ biçimindedir ve $m=8$ için köklerin ortalaması gerçekten 5'tir.

**Çeldirici notu:** Aritmetik ortalamayı kökler toplamı sanmak 2'ye bölmeyi atlar.

## Soru 9
**Doğru cevap:** A

**Kazanım:** Ardışık pozitif tek köklerden kökler toplamını belirleme.

**Çözüm:** Çarpımları 15 olan ardışık pozitif tek tam sayılar 3 ve 5'tir. Toplamları $s=8$ bulunur.

**Neden doğru?** Vieta bağıntısı sabit terimi kökler çarpımına, $s$'yi kökler toplamına eşitler.

**Çeldirici notu:** 1 ve 15 tek olsa da ardışık tek tam sayılar değildir.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Zıt işaretli köklerin oranı ve çarpımından kökler toplamını bulma.

**Çözüm:** Negatif kök $-r$, pozitif kök $2r$ olsun. Çarpım $-2r^2=-18$ olduğundan $r=3$'tür. Kökler $-3$ ve 6, toplamları $s=3$ olur.

**Neden doğru?** Vieta bağıntısı kökler çarpımını $-18$, toplamını $s$ olarak verir; işaret koşulu $r>0$ seçtirir.

**Çeldirici notu:** Kökleri 3 ve 6 almak çarpımı pozitif yapar ve denklemdeki sabit terimle çelişir.
