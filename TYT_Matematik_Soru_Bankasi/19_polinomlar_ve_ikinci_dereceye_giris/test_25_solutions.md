# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 25 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** İki kare farkı biçimindeki polinomun derecesinden iç polinomun derecesini bulma.

**Çözüm:** $(P-1)(P+1)=P^2-1$ olduğundan ifadenin derecesi $2\deg P$'dir. $2\deg P=10$ ile $\deg P=5$ bulunur.

**Neden doğru?** $P^2$ polinomunun öncü terimi sabit 1 ile yok olamaz.

**Çeldirici notu:** İki çarpan bulunduğu için dereceye 2 eklemek yerine çarpan dereceleri toplanmalıdır.

## Soru 2
**Doğru cevap:** A

**Kazanım:** Yansımaya göre simetrik polinom özdeşliğini orta noktada değerlendirme.

**Çözüm:** $x=\frac12$ için $1-x=\frac12$ olur. Böylece
$$2P\left(\frac12\right)=4\left(\frac14\right)-4\left(\frac12\right)+10=9$$
ve $P(1/2)=9/2$ bulunur.

**Neden doğru?** Yansımanın sabit noktası olan $1/2$, sol taraftaki iki polinom değerini eşit yapar.

**Çeldirici notu:** Sol tarafta aynı değer iki kez bulunduğu için 9 sonucunu 2'ye bölmemek hatadır.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Binom açılımlarının toplamında terim iptallerini belirleme.

**Çözüm:**
$$(x+1)^5+(x-1)^5=2x^5+20x^3+10x.$$
Sıfırdan farklı üç terim vardır.

**Neden doğru?** İki açılım toplandığında çift dereceli terimler zıt işaretle gelip yok olur, tek dereceliler iki katına çıkar.

**Çeldirici notu:** Açılımlardan yalnız birindeki altı terimi saymak iptalleri gözden kaçırır.

## Soru 4
**Doğru cevap:** C

**Kazanım:** Bölenin iki kökünde doğrusal kalanın katsayılarını bulma.

**Çözüm:** Bölen $x(x-2)$ olduğundan $b=P(0)=5$ ve $2a+b=P(2)=1$ olur. $a=-2$ ve $a+b=3$ bulunur.

**Neden doğru?** Bölenin 0 ve 2 köklerinde polinomun değeri kalanın değerine eşittir.

**Çeldirici notu:** $P(2)=a+b$ yazmak doğrusal terimdeki 2 çarpanını atlar.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Kökler toplamından eksik kökü, kökler çarpımından sabit terimi bulma.

**Çözüm:** Kökler toplamı 5'tir. $-1+1+2+r=5$ ile $r=3$ bulunur. Dördüncü derecede sabit terim kökler çarpımıdır:
$$P(0)=(-1)\cdot1\cdot2\cdot3=-6.$$

**Neden doğru?** Monik dördüncü dereceden polinomda $x^3$ katsayısı kökler toplamının ters işaretlisidir.

**Çeldirici notu:** Çift dereceli polinomda sabit terimin önüne fazladan eksi koymak işareti ters çevirir.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Özdeşlikten bölüm polinomunu ve katsayılar toplamını bulma.

**Çözüm:**
$$\frac{x^5-1}{x-1}=x^4+x^3+x^2+x+1.$$
Katsayılar toplamı 5'tir.

**Neden doğru?** Geometrik toplam özdeşliği çarpma kontrolünde yeniden $x^5-1$ verir.

**Çeldirici notu:** Beşinci dereceyi bölümün derecesi sanmak bölümde derecenin bir azaldığını kaçırır.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Çift dereceli polinomun gerçek kök sayısını yardımcı değişkenle inceleme.

**Çözüm:** $y=x^2\geq0$ alınırsa $y^2+4y+16$ elde edilir. Bu ifadenin diskriminantı $16-64<0$ ve baş katsayısı pozitiftir; hiçbir gerçek $y$, dolayısıyla gerçek $x$ kökü yoktur.

**Neden doğru?** Polinom tüm gerçek $x$ değerlerinde pozitiftir ve sıfıra ulaşmaz.

**Çeldirici notu:** $x^2=-4$ veya $-16$ gibi gerçek olmayan ara değerlerden gerçek kök üretmek yanlıştır.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Köklerin terslerinin kareleri toplamını Vieta bağıntılarıyla hesaplama.

**Çözüm:** $\alpha+\beta=2$, $\alpha\beta=-2$ olduğundan
$$\frac1{\alpha^2}+\frac1{\beta^2}=\frac{\alpha^2+\beta^2}{(\alpha\beta)^2}=\frac{4-2(-2)}{4}=2.$$

**Neden doğru?** Pay ortak paydada köklerin kareleri toplamına, payda kökler çarpımının karesine dönüşür.

**Çeldirici notu:** Paydada $(\alpha\beta)^2$ yerine $\alpha\beta$ kullanmak işaret ve değer hatası oluşturur.

## Soru 9
**Doğru cevap:** C

**Kazanım:** İki farklı gerçek kök koşulundan parametre aralığı bulma.

**Çözüm:**
$$\Delta=4m^2-4(m+2)=4(m-2)(m+1).$$
İki farklı gerçek kök için $(m-2)(m+1)>0$, yani $m<-1$ veya $m>2$ olmalıdır. En küçük pozitif tam sayı 3'tür.

**Neden doğru?** Diskriminantın kesin pozitif olması eşit kök durumunu dışarıda bırakır.

**Çeldirici notu:** $m=2$ için diskriminant sıfırdır ve kökler farklı değildir.

## Soru 10
**Doğru cevap:** D

**Kazanım:** İkinci dereceden polinomun simetri eksenini katsayılardan bulma.

**Çözüm:** Simetri ekseni $x=-\frac{b}{2a}$ olduğundan
$$x=-\frac4{2}=-2$$
bulunur.

**Neden doğru?** Kare tamamlama $P(x)=(x+2)^2+3$ biçimini verir ve merkez doğrusunu açıkça gösterir.

**Çeldirici notu:** $-b/a=-4$ kullanmak paydadaki 2 katsayısını atlar.
