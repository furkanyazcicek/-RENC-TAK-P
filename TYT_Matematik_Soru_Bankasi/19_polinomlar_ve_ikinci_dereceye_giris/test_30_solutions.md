# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 30 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Simetrik binom açılımlarının farkında öncü terim iptalini belirleme.

**Çözüm:** Altıncı dereceli terimler farkta yok olur. Beşinci dereceli terimlerin farkı $6x^5-(-6x^5)=12x^5$ olduğundan polinomun derecesi 5'tir.

**Neden doğru?** Çift dereceli terimler iki açılımda aynı, tek dereceliler zıt işaretlidir.

**Çeldirici notu:** Her iki açılımın derecesi 6 olduğu için farkın da 6 olduğunu varsaymak öncü terim iptalini kaçırır.

## Soru 2
**Doğru cevap:** A

**Kazanım:** Üç noktadaki değerden ikinci dereceden polinomu belirleyip yansıtılmış değeri bulma.

**Çözüm:** $P(x)=ax^2+bx+c$ olsun. $c=2$, $a+b=3$ ve $2a+b=5$ elde edilir. $a=2$, $b=1$ olduğundan $P(-1)=2-1+2=3$'tür.

**Neden doğru?** Üç farklı noktadaki değer, ikinci dereceden polinomun üç katsayısını tek biçimde belirler.

**Çeldirici notu:** Değerlerin artışını doğrusal sanmak sabit ikinci farkı gözden kaçırır.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Kökleri verilen monik polinomu çarpan biçiminde değerlendirerek değer bulma.

**Çözüm:** $P(x)=(x+1)(x-1)(x-2)$ olduğundan $P(3)=4\cdot2\cdot1=8$ olur.

**Neden doğru?** Monik olma, çarpanların önündeki katsayıyı 1 yapar.

**Çeldirici notu:** Kökleri doğrudan toplamak polinomun belirli bir noktadaki değerini vermez.

## Soru 4
**Doğru cevap:** C

**Kazanım:** Bölme algoritmasında bölüm ve kalandan polinomun sabit değerini bulma.

**Çözüm:**
$$P(x)=(x^2+1)(x-2)+3x+4.$$
$x=0$ için $P(0)=1\cdot(-2)+4=2$ olur.

**Neden doğru?** Doğrusal kalan içindeki $3x$ terimi sıfırda katkı yapmaz.

**Çeldirici notu:** Kalanın sabit terimi 4'ü doğrudan $P(0)$ sanmak bölüm çarpımının $-2$ katkısını atlar.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Ötelenmiş polinomun doğrusal çarpana tam bölünme koşulunu kullanma.

**Çözüm:** $P(x+1)$ polinomunun $x$ ile tam bölünmesi için sabit terimi sıfır olmalıdır. Bu sabit terim $P(1)$'dir:
$$P(1)=1+2+a+b=0.$$
Buradan $a+b=-3$ bulunur.

**Neden doğru?** $x$ böleninin kökü 0'dır; $P(x+1)$ için 0 değeri, özgün polinomda 1 girdisine karşılık gelir.

**Çeldirici notu:** Öteleme sonrası sabit terimi $P(0)=b$ sanmak girdideki $+1$ değişimini yok sayar.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Çift polinomun simetrik köklerinden zorunlu çarpanı belirleme.

**Çözüm:** $P$ çift olduğundan $P(-3)=P(3)=0$'dır. Hem $x-3$ hem $x+3$ çarpan olduğundan çarpımları $x^2-9$ da $P$'yi böler.

**Neden doğru?** Zıt kök çifti, sabit terimi negatif olan ikinci dereceden fark kareler çarpanını üretir.

**Çeldirici notu:** $x^2+9$ gerçek kök olarak $\pm3$ değil, karmaşık kökler gerektirir.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Yalnız kökler çarpımına bağlı simetrik ifadeyi hesaplama.

**Çözüm:** $\alpha\beta=3$ olduğundan
$$(\alpha\beta)^2+\alpha\beta=9+3=12.$$

**Neden doğru?** İfade kökler toplamına bağlı değildir; sabit terim doğrudan yeterlidir.

**Çeldirici notu:** Kökler toplamı 5'i ifadede kullanmak gereksiz bir bilgi ekler.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Parametreli çarpanlara ayrılmış denklemde kökler farkından parametre bulma.

**Çözüm:** Denklem $(x-m)(x-2)=0$ biçimindedir. $(m-2)^2=9$ ve $m>2$ olduğundan $m-2=3$, yani $m=5$ bulunur.

**Neden doğru?** Pozitif yön koşulu, karesel eşitliğin $m=-1$ adayını eler.

**Çeldirici notu:** Karekök alırken yalnız negatif 3'ü seçmek verilen sıralamayı ters çevirir.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Pozitif köklerin çarpımı ve farkından toplamlarını belirleme.

**Çözüm:** Çarpımları 5 olan ve aralarındaki fark 4 olan pozitif sayılar 1 ve 5'tir. Toplamları $s=6$ olur.

**Neden doğru?** Vieta bağıntısı sabit terimi çarpıma, $s$'yi kökler toplamına eşitler.

**Çeldirici notu:** Köklerden birini negatif almak çarpımı negatif yapar ve verilen denkleme uymaz.

## Soru 10
**Doğru cevap:** D

**Kazanım:** İkinci dereceden eşitsizliğin bütün gerçek sayılarda negatif olmama koşulunu kullanma.

**Çözüm:**
$$x^2-2kx+9=(x-k)^2+9-k^2.$$
Her gerçek $x$ için negatif olmaması için $9-k^2\geq0$, yani $-3\leq k\leq3$ olmalıdır. En büyük tam sayı 3'tür.

**Neden doğru?** $k=3$ için ifade $(x-3)^2$ olur ve sıfırdan küçük değer almaz.

**Çeldirici notu:** Sıkı pozitiflik koşulu uygulamak eşitlik durumunu gereksiz yere dışarıda bırakır.
