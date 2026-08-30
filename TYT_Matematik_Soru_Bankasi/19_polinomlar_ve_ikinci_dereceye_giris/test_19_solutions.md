# Konu 19 — Polinomlar ve İkinci Dereceye Giriş

## Test 19 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** Değişken dönüşümü ve çarpım derecesinden polinomun derecesini belirleme.

**Çözüm:** $n=\deg P$ için $2+3n=17$ olur ve $n=5$ bulunur. $P(x^2)$ polinomunun derecesi 10'dur; $x$ terimi bunu değiştirmez.

**Neden doğru?** Dereceleri farklı iki polinomun toplamında büyük olan derece korunur.

**Çeldirici notu:** $P(x^3)$ için dereceye 3 eklemek yerine dereceyi 3 ile çarpmak gerekir.

## Soru 2
**Doğru cevap:** E

**Kazanım:** Bölme özdeşliğinden polinom değeri hesaplama.

**Çözüm:** $x=2$ yazılırsa $P(2)=(4+1)Q(2)+2-2=5\cdot3=15$ olur.

**Neden doğru?** Bölüm polinomunun verilen değeri, bölenin aynı noktadaki değeriyle çarpılıp kalana eklenmiştir.

**Çeldirici notu:** $x^2+1$ çarpanını $2+1$ almak karesel değeri yanlış hesaplar.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Dönüştürülmüş polinomun katsayılar toplamını değerler üzerinden bulma.

**Çözüm:** Katsayılar toplamı $Q(1)$'dir. $Q(1)=P(1)-P(0)=7-3=4$ bulunur.

**Neden doğru?** $1-x$ ifadesi $x=1$ için 0 olduğundan verilen iki polinom değeri doğrudan kullanılır.

**Çeldirici notu:** $P(1)+P(0)$ almak tanımdaki çıkarma işaretini gözden kaçırır.

## Soru 4
**Doğru cevap:** B

**Kazanım:** Bölüm ve bölen verilince bölünen polinomun katsayısını bulma.

**Çözüm:**
$$P(x)=(x^2-1)(x^2+2x+3)=x^4+2x^3+2x^2-2x-3.$$
Doğrusal terimin katsayısı $-2$'dir.

**Neden doğru?** Kalan sıfır olduğundan bölünen, bölen ile bölümün tam çarpımıdır.

**Çeldirici notu:** $-1$ ile bölümün $2x$ terimini çarpmamak doğrusal katsayıyı yok eder.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Kök çoklukları ve bir katsayıdan eksik kökü belirleme.

**Çözüm:** Monik beşinci dereceden polinomda kökler toplamı 3'tür. $0+0+1-2+r=3$ eşitliğinden $r=4$ bulunur.

**Neden doğru?** $x^4$ katsayısı kökler toplamının ters işaretlisidir; $-3$ katsayısı toplamın 3 olduğunu gösterir.

**Çeldirici notu:** Sıfır kökünü çokluğu nedeniyle toplamı değiştiriyormuş gibi değerlendirmek sonucu etkilemez.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Büyük kuvvetin ikinci dereceden polinomla bölümünden kalanını döngüyle bulma.

**Çözüm:** $x^2+1$ ile bölümde $x^2\equiv-1$ ve kuvvetler dört adımda yinelenir. $2027\equiv3\pmod4$ olduğundan $x^{2027}\equiv x^3\equiv-x$ olur.

**Neden doğru?** $-x$ polinomunun derecesi bölenin derecesinden küçüktür ve geçerli kalandır.

**Çeldirici notu:** Yalnız üssün tekliğine bakıp $x$ seçmek dört adımlı işaret döngüsünü kaçırır.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Dördüncü dereceden çift polinomu ikinci dereceden ifadeyle çarpanlara ayırma.

**Çözüm:** $y=x^2$ alınırsa $y^2-5y+4=(y-1)(y-4)$ olur. Dolayısıyla kökler $\pm1,\pm2$; pozitif köklerin toplamı 3'tür.

**Neden doğru?** $x^2=1$ ve $x^2=4$ denklemlerinin her biri iki gerçek kök üretir; yalnız pozitifler seçilir.

**Çeldirici notu:** $y$ kökleri 1 ve 4'ü doğrudan $x$ kökleri sanmak karekök adımını atlar.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Köklerin ötelenmiş çarpımını Vieta bağıntılarıyla hesaplama.

**Çözüm:**
$$(\alpha-1)(\beta-1)=\alpha\beta-(\alpha+\beta)+1=1-3+1=-1.$$

**Neden doğru?** Kökler toplamı 3, çarpımı 1 olduğundan açılan ifadede bütün terimler bilinir.

**Çeldirici notu:** Son sabit $+1$ terimini atmak sonucu bir eksik verir.

## Soru 9
**Doğru cevap:** B

**Kazanım:** Birbirinin toplamsal tersi olan köklerden parametre bulma.

**Çözüm:** Kökler birbirinin toplama işlemine göre tersi olduğundan toplamları 0'dır. Vieta bağıntısıyla $2-m=0$ ve $m=2$ bulunur.

**Neden doğru?** Bu değer için denklem $x^2-8=0$ olur ve kökler gerçekten $\pm2\sqrt2$'dir.

**Çeldirici notu:** Köklerin çarpımını 0 almak toplamsal ters ile çarpımsal tersi karıştırır.

## Soru 10
**Doğru cevap:** C

**Kazanım:** Köklerin aritmetik ortalaması ve çarpımından kökleri belirleme.

**Çözüm:** Aritmetik ortalama 3 olduğundan kökler toplamı 6'dır. Çarpımları 8 olan ve toplamları 6 olan pozitif kökler 2 ile 4'tür; küçük kök 2'dir.

**Neden doğru?** Vieta bağıntıları toplamı $s$, çarpımı 8 olarak verir ve iki koşul kökleri tek biçimde belirler.

**Çeldirici notu:** Aritmetik ortalama 3'ü doğrudan küçük kök sanmak iki kökün eşit olmadığını gözden kaçırır.
