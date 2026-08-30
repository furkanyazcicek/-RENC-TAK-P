# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 21 — Çözümler

## Soru 1
**Doğru cevap:** A

**Kazanım:** Polinom bölmesinde kalanın derece sınırını belirleme.

**Çözüm:** Kalanın derecesi her zaman bölenin derecesinden küçüktür. Bölen beşinci dereceden olduğuna göre kalan en fazla dördüncü dereceden olabilir.

**Neden doğru?** Derecesi 5 veya daha büyük bir terim kalsaydı bölme işlemi bir adım daha sürdürülebilirdi.

**Çeldirici notu:** Bölünenin derecesi 8, kalanın üst sınırını değil bölümün derecesini etkiler.

## Soru 2
**Doğru cevap:** B

**Kazanım:** Simetrik üç polinom değerinden baş katsayıyı bulma.

**Çözüm:** $P(1)+P(-1)-2P(0)=2a$ olur. $2a=6$ eşitliğinden $a=3$ bulunur.

**Neden doğru?** Doğrusal ve sabit terimlerin katkıları bu simetrik ikinci farkta tamamen yok olur.

**Çeldirici notu:** İfadeyi $a$'ya eşitlemek iki karesel katkıdan birini atlar.

## Soru 3
**Doğru cevap:** C

**Kazanım:** Çarpım özdeşliğinden polinomun katsayılar toplamını bulma.

**Çözüm:** Katsayılar toplamı $P(1)$'dir. Eşitlikte $x=1$ yazılırsa $2P(1)=1^4-1=0$, dolayısıyla $P(1)=0$ olur.

**Neden doğru?** $x+1$ çarpanı 1 noktasında sıfır olmadığı için eşitlik $P(1)$'i tek biçimde belirler.

**Çeldirici notu:** Sağ tarafın katsayılar toplamını doğrudan $P$'nin katsayılar toplamı sanmak soldaki $x+1$ çarpanını atlar.

## Soru 4
**Doğru cevap:** D

**Kazanım:** Palindromik polinomda köklerin ters çiftler oluşturduğunu kullanma.

**Çözüm:** Palindromik dördüncü dereceden polinom için $x^4P(1/x)=P(x)$ eşitliği vardır. $P(2)=0$ olduğundan $P(1/2)=0$ da sağlanır.

**Neden doğru?** Sıfırdan farklı bir kökün tersi, simetrik katsayı dizisi nedeniyle aynı polinomu sıfırlar.

**Çeldirici notu:** Katsayı simetrisi kökün işaretini değil tersini ilişkilendirir.

## Soru 5
**Doğru cevap:** E

**Kazanım:** Gruplandırarak çarpanlara ayırıp çift katlı kök koşulunu kullanma.

**Çözüm:**
$$P(x)=x^2(x+m)-4(x+m)=(x-2)(x+2)(x+m).$$
2 kökünün çift katlı olması için $x+m$ çarpanı da $x-2$ olmalıdır. Bu nedenle $m=-2$'dir.

**Neden doğru?** $m=-2$ değerinde $(x-2)$ çarpanı iki kez bulunur ve kökün çokluğu 2 olur.

**Çeldirici notu:** $m=2$ seçmek $x+m=x+2$ yapar ve $-2$ kökünü çift katlı hâle getirir.

## Soru 6
**Doğru cevap:** A

**Kazanım:** Bilinen kalanı polinomla çarpıp aynı bölen için yeni kalan bulma.

**Çözüm:** Bölüm işleminde $x^2\equiv-x-1$'dir. Bu nedenle
$$x(2x+3)=2x^2+3x\equiv2(-x-1)+3x=x-2.$$
Kalanın katsayıları toplamı $1-2=-1$'dir.

**Neden doğru?** Bölünenin bölümle ilgili kısmı yeniden aynı bölenle tam bölünür; yalnız eski kalanın $x$ ile çarpımı indirgenmelidir.

**Çeldirici notu:** $2x^2+3x$ ifadesini derecesi 2 olduğu hâlde kalan bırakmak derece koşulunu bozar.

## Soru 7
**Doğru cevap:** B

**Kazanım:** Kübik polinomu çarpanlara ayırıp pozitif köklerin çarpımını bulma.

**Çözüm:**
$$P(x)=(x-1)(x-2)(x-6)$$
olduğundan pozitif kökler 1, 2 ve 6'dır. Çarpımları 12'dir.

**Neden doğru?** Çarpanların açılımı $x^3-9x^2+20x-12$ polinomunu verir.

**Çeldirici notu:** Kökleri toplayıp 9 bulmak istenen çarpım yerine yanlış Vieta ifadesini kullanmaktır.

## Soru 8
**Doğru cevap:** C

**Kazanım:** Rasyonel kök ifadesini Vieta bağıntılarıyla hesaplama.

**Çözüm:** Ortak payda kullanılırsa
$$\frac{\alpha}{\alpha-1}+\frac{\beta}{\beta-1}
=\frac{2\alpha\beta-(\alpha+\beta)}{\alpha\beta-(\alpha+\beta)+1}
=\frac{12-5}{6-5+1}=\frac72.$$

**Neden doğru?** $\alpha+\beta=5$ ve $\alpha\beta=6$ değerleri pay ile paydayı tamamen belirler.

**Çeldirici notu:** Paydaları ayrı ayrı toplamadan doğrudan $\alpha+\beta$ kullanmak kesir işlemini bozar.

## Soru 9
**Doğru cevap:** D

**Kazanım:** Eşit kök koşulunun verdiği parametre değerlerini toplama.

**Çözüm:**
$$\Delta=4m^2-4(m+2)=4(m-2)(m+1).$$
$\Delta=0$ için $m=2$ veya $m=-1$ olur. Toplamları 1'dir.

**Neden doğru?** Her iki parametre değeri de denklemi ikinci dereceden bırakır ve diskriminantı sıfırlar.

**Çeldirici notu:** Yalnız pozitif parametreyi almak soruda bulunmayan bir koşul eklemektir.

## Soru 10
**Doğru cevap:** E

**Kazanım:** Pozitif asal kök koşulundan sabit terimi belirleme.

**Çözüm:** Köklerin toplamı 7'dir. Toplamları 7 olan pozitif asal sayılar 2 ve 5 olduğundan çarpımları $k=10$'dur.

**Neden doğru?** Vieta bağıntısına göre $k$ kökler çarpımıdır ve asal kök çifti tek seçenektir.

**Çeldirici notu:** 3 ve 4 toplamı 7 olsa da 4 asal değildir.
