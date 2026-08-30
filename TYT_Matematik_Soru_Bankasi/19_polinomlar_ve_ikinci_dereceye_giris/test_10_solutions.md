# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 10 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Polinomun tek dereceli bölümünü değişken dönüşümü altında inceleme.

**Çözüm:** Beşinci dereceli öncü terim $ax^5$ olsun. $P(x^2)$ içinde $ax^{10}$, $P(-x^2)$ içinde $-ax^{10}$ oluşur. Farkta öncü terim $2ax^{10}$ olduğundan derece 10'dur.

**Neden doğru?** Beşinci kuvvet tek olduğundan işaret değiştirir ve çıkarma işleminde öncü terimler birbirini yok etmek yerine iki katına çıkar.

**Çeldirici notu:** $x^2$ dönüşümünün dereceyi iki katına çıkardığını gözden kaçırmak dereceyi 5 verir.

## Soru 2
**Doğru cevap:** A

**Kazanım:** Doğrusal dönüşümlü polinom girdisinden istenen değeri bulma.

**Çözüm:** $2x-1=3$ için $x=2$ alınır. $P(3)=2^3+2+3=13$ olur.

**Neden doğru?** Sağ taraftaki değişken, sol taraftaki girdiyi 3 yapan değerle değerlendirilmiştir.

**Çeldirici notu:** Sağ tarafta doğrudan $x=3$ yazmak $P(5)$ değerini hesaplar.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Binom açılımında belirli terimin katsayısını bulma.

**Çözüm:** $x^4$ terimi altı çarpandan dördünde $x$, ikisinde 1 seçilerek oluşur. Katsayı $\binom{6}{4}=15$'tir.

**Neden doğru?** Dört adet $x$ seçiminin yapılabileceği farklı çarpan kümelerinin sayısı binom katsayısını verir.

**Çeldirici notu:** Üs ile katsayıyı aynı sanmak 6 cevabına götürür.

## Soru 4
**Doğru cevap:** C

**Kazanım:** Polinomun sabit terimini sıfır değerinden bulma.

**Çözüm:** $x=0$ yazıldığında $(0+2)^3-0^3=8$ elde edilir.

**Neden doğru?** Bir polinomun sabit terimi, polinomun sıfır noktasındaki değeridir.

**Çeldirici notu:** Üçüncü kuvveti dağıtırken $2^3$ yerine $3\cdot2$ almak 6 sonucunu verir.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Bir polinomun tek ve sabit terimlerini simetri bağıntısıyla belirleme.

**Çözüm:** $P(x)-P(-x)=2ax$ olduğundan $2a=8$ ve $a=4$ bulunur. $P(0)=b=3$ olduğuna göre $a+b=7$'dir.

**Neden doğru?** $P(x)-P(-x)$ farkında çift dereceli ve sabit terimler yok olur, yalnız doğrusal terim kalır.

**Çeldirici notu:** Farkı $ax$ almak işaret değişiminden gelen 2 katsayısını atlar.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Değişken dönüşümü ve çarpımda polinom derecesi hesaplama.

**Çözüm:** $P(x^2+1)$ polinomunun derecesi $3\cdot2=6$, $Q(x^3)$ polinomunun derecesi $2\cdot3=6$'dır. Çarpımın derecesi $6+6=12$ olur.

**Neden doğru?** Sabit eklenmesi iç polinomun derecesini değiştirmez; çarpımda sıfır olmayan öncü terimler çarpılır.

**Çeldirici notu:** Dış polinom derecelerini doğrudan toplamak iç dönüşümlerin etkisini yok sayar.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Bölme algoritmasında bölüm ve kalandan polinom değeri bulma.

**Çözüm:** Bölme özdeşliği
$$P(x)=(x^2-1)(x+2)+3x-4$$
biçimindedir. $x=2$ için $P(2)=3\cdot4+2=14$ bulunur.

**Neden doğru?** Bölünen; bölen ile bölümün çarpımına kalanın eklenmesiyle elde edilir.

**Çeldirici notu:** Yalnız kalanı değerlendirmek, bölenin $x=2$ için sıfır olmadığını kaçırır.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Kökleri verilen monik üçüncü dereceden polinomda katsayı bulma.

**Çözüm:** $P(x)=(x+1)(x-2)(x-3)$ olur. $x$ teriminin katsayısı köklerin ikili çarpımları toplamıdır:
$$(-1)(2)+(-1)(3)+(2)(3)=1.$$

**Neden doğru?** Monik kübik polinomda $x$ katsayısı köklerin ikili çarpımları toplamına eşittir.

**Çeldirici notu:** Kökler toplamını kullanmak $x^2$ katsayısını bulur, $x$ katsayısını değil.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Köklerin kareleri toplamından kökler çarpımını çıkarma.

**Çözüm:** $\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta$ olduğundan
$$10=16-2\alpha\beta$$
ve $\alpha\beta=3$ bulunur.

**Neden doğru?** Verilen toplamın karesi açıldığında aranan çarpım terimi doğrudan ortaya çıkar.

**Çeldirici notu:** $\alpha^2+\beta^2$ değerini $(\alpha+\beta)^2$ sanmak çapraz çarpımı atlar.

## Soru 10
**Doğru cevap:** D

**Kazanım:** Eşit kök koşulundan parametre belirleme.

**Çözüm:** Eşit iki gerçek kök için diskriminant sıfırdır:
$$(-2m)^2-4(m+6)=0 \Rightarrow m^2-m-6=0.$$
Buradan $(m-3)(m+2)=0$ olur. $m>0$ koşuluna göre $m=3$'tür.

**Neden doğru?** Diskriminantın sıfır olması iki kökün çakışması için gerekli ve yeterli koşuldur.

**Çeldirici notu:** $m=-2$ cebirsel denklemi sağlasa da verilen pozitiflik koşulunu sağlamaz.
