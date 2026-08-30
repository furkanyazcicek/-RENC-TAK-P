# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 17 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Polinom bileşimi ve kuvvetinde derece ilişkilerini birlikte kullanma.

**Çözüm:** $n=\deg P$ için $\deg(P\circ P)=n^2=16$ olduğundan $n=4$'tür. $(x-1)P(x)^2$ polinomunun derecesi $1+2\cdot4=9$ olur.

**Neden doğru?** Sabit olmayan polinomların bileşiminde dereceler çarpılır; çarpımda toplanır.

**Çeldirici notu:** $P(x)^2$ ifadesinde dereceye 2 eklemek yerine dereceyi 2 ile çarpmak gerekir.

## Soru 2
**Doğru cevap:** C

**Kazanım:** İkinci dereceden bölenin oluşturduğu eşdeğerliklerle parametre belirleme.

**Çözüm:** $x^2-x+1$ ile bölüm işleminde $x^2\equiv x-1$ ve buradan $x^4\equiv-x$ olur. O hâlde
$$P(x)\equiv -x+a(x-1)+1=(a-1)x+(1-a).$$
Bu kalan $x-1$ olduğundan $a-1=1$ ve $a=2$ bulunur.

**Neden doğru?** Elde edilen doğrusal kalanın hem $x$ katsayısı hem sabit terimi verilen kalanla aynıdır.

**Çeldirici notu:** $x^4\equiv x^2$ sanmak eşdeğerliği her çarpım adımında yeniden uygulamayı atlar.

## Soru 3
**Doğru cevap:** D

**Kazanım:** Bölme özdeşliğinde verilen değerden bölüm polinomunu değerlendirme.

**Çözüm:** $x=2$ yazıldığında $11=(2-1)Q(2)+3$ olur. Buradan $Q(2)=8$ bulunur.

**Neden doğru?** Verilen eşitlik, bölünenin bölen ile bölümün çarpımına kalanın eklenmesi biçimindedir.

**Çeldirici notu:** Sabit 3'ü karşı tarafa geçirmeden bölmek $Q(2)$ değerini 11 sanmaya yol açar.

## Soru 4
**Doğru cevap:** E

**Kazanım:** Eşlenik doğrusal terimli polinom çarpımında katsayı bulma.

**Çözüm:** Çarpım
$$P(x)=(x^2+1)^2-a^2x^2=x^4+(2-a^2)x^2+1$$
olur. $2-a^2=-7$ eşitliğinden $a^2=9$; $a>0$ koşuluyla $a=3$ bulunur.

**Neden doğru?** İki çarpan, $(A+B)(A-B)=A^2-B^2$ özdeşliğiyle orta dereceli katsayıyı belirler.

**Çeldirici notu:** Pozitiflik koşulunu kullanmamak $a=-3$ değerini de aday bırakır.

## Soru 5
**Doğru cevap:** A

**Kazanım:** Kökler toplamından eksik kökü ve sabit terimi bulma.

**Çözüm:** Monik dördüncü dereceden polinomda kökler toplamı 10'dur. $1+2+3+r=10$ ile $r=4$ bulunur. Sabit terim kökler çarpımı olduğundan $P(0)=1\cdot2\cdot3\cdot4=24$'tür.

**Neden doğru?** Çift dereceli monik polinomda sabit terimin işareti kökler çarpımıyla aynıdır.

**Çeldirici notu:** $x^3$ katsayısı $-10$ olduğu için kökler toplamını $-10$ almak Vieta işaretini ters kullanır.

## Soru 6
**Doğru cevap:** B

**Kazanım:** $x^2$ ile bölümden kalan terimleri belirleme.

**Çözüm:** $x^2$ ile bölümde ikinci ve daha yüksek dereceli bütün terimler bölünür. Kalan $4x+7$ ve katsayıları toplamı $4+7=11$'dir.

**Neden doğru?** Kalanın derecesi 2'den küçük olmalı; doğrusal ve sabit terimler bu şartı sağlar.

**Çeldirici notu:** Küplü ve beşinci dereceli terimlerin katsayılarını kalana eklemek bölüm kuralını bozar.

## Soru 7
**Doğru cevap:** C

**Kazanım:** Gruplandırarak çarpanlara ayırma ve kökleri seçme.

**Çözüm:**
$$P(x)=x^2(x-4)-1(x-4)=(x^2-1)(x-4)=(x-1)(x+1)(x-4).$$
Pozitif kökler 1 ve 4 olduğundan toplamları 5'tir.

**Neden doğru?** Çarpanların her biri bir kök verir; yalnız pozitif olanlar istenen toplama alınır.

**Çeldirici notu:** $-1$ kökünü de toplama katmak işaret koşulunu gözden kaçırır.

## Soru 8
**Doğru cevap:** D

**Kazanım:** Kökler toplamı ve çarpımını yeni polinomun kökleri olarak kullanma.

**Çözüm:** $\alpha+\beta=5$ ve $\alpha\beta=2$'dir. Yeni polinomun kökleri 5 ve 2 olduğundan sabit terimi bunların çarpımı $10$'dur.

**Neden doğru?** Baş katsayısı 1 olan ikinci dereceden polinomda sabit terim kökler çarpımına eşittir.

**Çeldirici notu:** Eski polinomun sabit terimi 2'yi yeni polinomda değişmeden kullanmak kök dönüşümünü atlar.

## Soru 9
**Doğru cevap:** E

**Kazanım:** Ardışık köklü parametreli denklemde kökler toplamını kullanma.

**Çözüm:** Denklem $(x-m)(x-m-1)=0$ biçimindedir. Kökler toplamı $2m+1=7$ olduğundan $m=3$ bulunur.

**Neden doğru?** Çarpanlara ayrılmış biçim köklerin gerçekten $m$ ve $m+1$ olduğunu, yani ardışık olduklarını gösterir.

**Çeldirici notu:** $m^2+m$ sabit terimini kökler toplamı sanmak Vieta bağıntılarını karıştırır.

## Soru 10
**Doğru cevap:** A

**Kazanım:** Kökler toplamı, tam sayı ve fark koşullarından kökleri belirleme.

**Çözüm:** Negatif tam sayı köklerin toplamı $-4$ ve farklarının mutlak değeri 2'dir. Bu sayılar $-1$ ve $-3$ olduğundan çarpımları $k=3$'tür.

**Neden doğru?** Vieta bağıntıları kökler toplamını $-4$, çarpımını $k$ olarak verir.

**Çeldirici notu:** Kökleri 1 ve 3 almak farkı sağlasa da negatiflik ve toplam koşullarına uymaz.
