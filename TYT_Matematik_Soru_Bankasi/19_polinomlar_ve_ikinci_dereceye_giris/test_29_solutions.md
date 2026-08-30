# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 29 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** Aynı dereceli öncü terimler iptal olduğunda polinomun gerçek derecesini belirleme.

**Çözüm:** $P(x^2)=x^6+x^2$ ve $P(x)^2=x^6+2x^4+x^2$ olur. Fark $-2x^4$ olduğundan derece 4'tür.

**Neden doğru?** Altıncı ve ikinci dereceli terimler yok olur; dördüncü dereceli terim sıfır değildir.

**Çeldirici notu:** İki ifadenin de derecesini 6 bulup farkın derecesini de 6 almak öncü terim iptalini kaçırır.

## Soru 2
**Doğru cevap:** E

**Kazanım:** Monik ikinci dereceden polinomda eşit değerlerin simetri merkezini kullanma.

**Çözüm:** $P(1)=P(3)$ olduğundan simetri ekseni bu noktaların ortası olan $x=2$'dir. Katsayı denklemleri $a+b=3$, $3a+b=-5$ verir; $a=-4$, $b=7$ ve $P(2)=3$ bulunur.

**Neden doğru?** Monik ikinci dereceden polinom, simetri eksenine eşit uzaklıktaki 1 ve 3 noktalarında aynı değeri alır.

**Çeldirici notu:** Ortak değer 4'ü tepe değer sanmak verilen noktaların tepe noktası olmadığını gözden kaçırır.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Kökleri ve baş katsayısı verilen kübik polinomu belirleme.

**Çözüm:** $P(x)=x(x-1)(x-2)$ olur. $P(3)=3\cdot2\cdot1=6$'dır.

**Neden doğru?** Moniklik, kök çarpanlarının önündeki katsayıyı 1 olarak sabitler.

**Çeldirici notu:** Kökleri toplayıp 3'te yerine yazmamak polinom değerini vermez.

## Soru 4
**Doğru cevap:** B

**Kazanım:** Polinom ile $P(-x)$ çarpımında belirli katsayıyı bulma.

**Çözüm:**
$$P(x)P(-x)=(x^2+3+2x)(x^2+3-2x)=(x^2+3)^2-4x^2=x^4+2x^2+9.$$
$x^2$ katsayısı 2'dir.

**Neden doğru?** Eşlenik çarpanlar doğrusal çapraz terimleri yok eder.

**Çeldirici notu:** $(x^2+3)^2$ içindeki $6x^2$ katkısından $4x^2$ çıkarılmalıdır.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Çift dördüncü dereceden polinomun kök kareleri toplamını bulma.

**Çözüm:** $y=x^2$ alınırsa $y^2-10y+16=0$ olur ve $y$ köklerinin toplamı 10'dur. Her $y$ değeri iki zıt $x$ kökü verdiğinden bütün köklerin kareleri toplamı $2\cdot10=20$'dir.

**Neden doğru?** Zıt köklerin kareleri eşittir ve her yardımcı değişken kökü iki kez katkı verir.

**Çeldirici notu:** Yalnız $y$ kökleri toplamı 10'u cevaplamak zıt kök çiftlerinden birer tanesini atlar.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Yansıma karşıtı polinomun merkez noktasındaki değerini kullanma.

**Çözüm:** $2x-1=0$ için $x=1/2$ alınır. Bu noktada
$$Q(1/2)=P(1/2)-P(1/2)=0.$$
Kalan 0'dır.

**Neden doğru?** Doğrusal bölenle bölümden kalan, bölenin kökündeki polinom değeridir.

**Çeldirici notu:** $Q(1-x)=-Q(x)$ simetrisini kullanmadan genel bir $P$ değeri aramak gereksizdir.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Gruplandırarak kübik polinomu çarpanlara ayırma.

**Çözüm:**
$$P(x)=x^2(x+1)-4(x+1)=(x+1)(x-2)(x+2).$$
Tek pozitif kök 2'dir.

**Neden doğru?** Diğer kökler $-1$ ve $-2$ olup pozitiflik koşuluna girmez.

**Çeldirici notu:** $x^2-4$ çarpanından yalnız $-2$ kökünü almak işaret seçimini ters yapar.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Kökler toplamı ve çarpımından oran biçimindeki simetrik ifadeyi bulma.

**Çözüm:** $\alpha+\beta=4$, $\alpha\beta=2$ olduğundan
$$\frac{(\alpha+\beta)^2}{\alpha\beta}=\frac{16}{2}=8.$$

**Neden doğru?** İfade doğrudan iki Vieta değerinden oluşur; kökleri çözmeye gerek yoktur.

**Çeldirici notu:** Kökler toplamının karesini almadan $4/2$ yapmak üstü yok sayar.

## Soru 9
**Doğru cevap:** B

**Kazanım:** Zıt işaretli kök koşulundan parametre aralığı bulma.

**Çözüm:** Kökler çarpımı $-m-2$'dir. Köklerin zıt işaretli olması için $-m-2<0$, yani $m>-2$ gerekir. Diskriminant her zaman pozitiftir. Bu koşulu sağlayan en küçük tam sayı $-1$'dir.

**Neden doğru?** Gerçek iki kökün çarpımı negatifse kökler zorunlu olarak zıt işaretlidir.

**Çeldirici notu:** $m=-2$ için çarpım sıfırdır; köklerden biri pozitif ya da negatif değil, sıfır olur.

## Soru 10
**Doğru cevap:** C

**Kazanım:** İkinci dereceden polinom grafiğinin tepe noktası ordinatını bulma.

**Çözüm:** Simetri ekseni $x=3$'tür. $P(3)=9-18+5=-4$ olduğundan tepe noktasının ordinatı $-4$'tür.

**Neden doğru?** Baş katsayı pozitif olduğundan tepe noktası aynı zamanda polinomun minimum noktasıdır.

**Çeldirici notu:** Sabit terim 5 grafiğin $y$ ekseni kesişimidir, tepe noktası ordinatı değildir.
