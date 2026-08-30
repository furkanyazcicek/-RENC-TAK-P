# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 14 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** Aynı dereceli iki bileşimin öncü katsayılarını karşılaştırma.

**Çözüm:** Her iki bileşim de altıncı derecedir. $P(Q(x))$ polinomunun öncü terimi $(2x^2)^3=8x^6$, $Q(P(x))$ polinomunun öncü terimi $2(x^3)^2=2x^6$ olur. Farkın öncü katsayısı 6 olduğundan derece 6'dır.

**Neden doğru?** Eşit dereceli terimler tamamen yok olmaz; çünkü öncü katsayıları birbirinden farklıdır.

**Çeldirici notu:** Yalnız derecelerin eşitliğine bakıp öncü terimlerin kesinlikle yok olduğunu düşünmek yanlıştır.

## Soru 2
**Doğru cevap:** E

**Kazanım:** Polinom özdeşliğinde öteleme açılımıyla katsayı belirleme.

**Çözüm:** $P(x)=ax^2+bx+c$ yazılırsa
$$P(x-1)+P(x+1)=2ax^2+2bx+2a+2c$$
olur. Katsayılar karşılaştırıldığında $a=1$, $b=0$ ve $2+2c=6$ ile $c=2$ bulunur. $P(0)=2$'dir.

**Neden doğru?** Eşitlik her gerçek sayı için geçerli olduğundan aynı dereceli terimlerin katsayıları eşittir.

**Çeldirici notu:** Ötelemelerdeki $+1$ ve $-1$ sabitlerinin kare katkısını atlamak $c$ değerini değiştirir.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Çift ve tek dereceli katsayı toplamlarının farkını $P(-1)$ ile ilişkilendirme.

**Çözüm:** Çift dereceli katsayılar toplamından tek dereceliler çıkarıldığında $P(-1)$ elde edilir. Verilen eşitlikte $P(-1)=0\cdot Q(-1)+5=5$'tir.

**Neden doğru?** $x=-1$ değeri çift kuvvetlerde $+1$, tek kuvvetlerde $-1$ etkisi oluşturur.

**Çeldirici notu:** $x=1$ yazmak farkı değil bütün katsayıların toplamını verir.

## Soru 4
**Doğru cevap:** B

**Kazanım:** Binom açılımında işaretli bir terimin katsayısını bulma.

**Çözüm:** $x^3$ için beş çarpandan üçünde $x$, ikisinde $-1$ seçilir. Katsayı $\binom53(-1)^2=10$'dur.

**Neden doğru?** İki adet $-1$ çarpanı işareti pozitif yapar ve seçim sayısı binom katsayısıyla bulunur.

**Çeldirici notu:** $(-1)^2$ işaretini negatif almak katsayının işaretini ters çevirir.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Kökleri verilen monik polinomun sabit terimini bulma.

**Çözüm:** $P(x)=(x-1)(x-2)(x-3)$ olduğundan $P(0)=(-1)(-2)(-3)=-6$ olur.

**Neden doğru?** Bir polinomun sabit terimi sıfırdaki değeridir ve moniklik çarpanların önündeki katsayıyı 1 yapar.

**Çeldirici notu:** Üç negatif çarpanın sonucunu pozitif almak işaret hatasıdır.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Büyük kuvvetli polinomun bölümünden kalanı eşdeğerlik kullanarak bulma.

**Çözüm:** $x^2-1$ ile bölümde $x^2\equiv1$'dir. $2026=2\cdot1013$ olduğundan $x^{2026}=(x^2)^{1013}\equiv1$ olur.

**Neden doğru?** Elde edilen sabit 1'in derecesi bölenin derecesinden küçüktür ve geçerli kalandır.

**Çeldirici notu:** Üssün çift olduğunu görmeden $x$ kalanı seçmek tek kuvvet durumuyla karıştırmaktır.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Üç noktadaki değerden ikinci dereceden polinomu belirleyip yeni değer bulma.

**Çözüm:** $P(x)=ax^2+bx+c$ olsun. $P(0)=1$ ile $c=1$; diğer değerlerden $a-b=3$ ve $a+b=1$ elde edilir. Böylece $a=2$, $b=-1$ ve $P(2)=8-2+1=7$ olur.

**Neden doğru?** İkinci dereceden bir polinomun üç katsayısı, üç farklı noktadaki değerle tek biçimde belirlenir.

**Çeldirici notu:** Tablodaki değerlerin doğrusal arttığını varsaymak ikinci farkı yok sayar.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Köklerin terslerinden yeni denklem kurma.

**Çözüm:** $\alpha+\beta=5$ ve $\alpha\beta=6$'dır. Ters köklerin toplamı $\frac56$, çarpımı $\frac16$ olur. Denklem
$$x^2-\frac56x+\frac16=0$$
veya $6x^2-5x+1=0$'dır. Katsayılar toplamı 2'dir.

**Neden doğru?** Kesirlerden kurtarılan katsayıların ortak böleni yoktur; istenen aralarında asal tam sayı biçimi budur.

**Çeldirici notu:** Kökleri ters çevirirken yalnız sabit terimle baş katsayıyı yer değiştirmek orta katsayının işaretini korumayı gerektirir.

## Soru 9
**Doğru cevap:** B

**Kazanım:** Parametreli denklemin derecesinin düşme koşulunu belirleme.

**Çözüm:** Denklemin birinci dereceden olması için $x^2$ katsayısı sıfır, $x$ katsayısı sıfırdan farklı olmalıdır. $m-1=0$ ile $m=1$ bulunur; bu değerde $2m=2\ne0$'dır.

**Neden doğru?** İkinci dereceli terim yok olurken doğrusal terim korunur ve denklem gerçekten birinci derecede kalır.

**Çeldirici notu:** Yalnız baş katsayıyı sıfırlayıp doğrusal katsayıyı denetlememek sabit eşitlik olasılığını gözden kaçırır.

## Soru 10
**Doğru cevap:** C

**Kazanım:** Kökler toplamı ve özel kök ilişkisini birlikte kullanma.

**Çözüm:** Küçük pozitif kök $r$, diğeri $r^2$ olsun. $r+r^2=6$ eşitliği $(r-2)(r+3)=0$ verir. Pozitiflikten $r=2$ seçilir; kökler 2 ve 4, çarpımları $k=8$'dir.

**Neden doğru?** Vieta bağıntısıyla kökler toplamı 6, çarpımı $k$'dır; pozitiflik cebirsel adaylardan yalnız birini bırakır.

**Çeldirici notu:** $r=-3$ toplam bağıntısını sağlasa da köklerin pozitif olması koşuluna uymaz.
