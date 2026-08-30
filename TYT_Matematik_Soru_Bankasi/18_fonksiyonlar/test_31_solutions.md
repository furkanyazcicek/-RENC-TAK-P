# Konu 18 — Fonksiyonlar

## Test 31 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Tablodan bileşke fonksiyon değerini doğru uygulama sırasıyla okuma.

**Çözüm:**

Önce içteki fonksiyon uygulanır. Tablodan $g(-1)=1$ ve ardından $f(1)=-1$ okunur. Dolayısıyla

$$(f\circ g)(-1)=f(g(-1))=-1.$$

**Neden doğru?** $g$ fonksiyonunun çıktısı, $f$ fonksiyonunun yeni girdisi olarak kullanılmıştır.

**Çeldirici notu:** $f(-1)$ değerini doğrudan okumak veya bileşke sırasını değiştirmek farklı sonuç verir.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Pay ve paydada bulunan kareköklerin farklı tanım koşullarını birlikte kullanma.

**Çözüm:**

Paydaki karekök için $x+4\ge0$, yani $x\ge-4$ gerekir. Paydadaki karekök sıfır da olamayacağından

$$3-x>0 \Rightarrow x<3$$

olmalıdır. Tanım kümesi $[-4,3)$ olur.

**Neden doğru?** Payda kökü için eşitsizlik sıkıdır; $x=3$ paydayı sıfır yapar, $x=-4$ ise payı sıfır yapar ve alınabilir.

**Çeldirici notu:** İki karekök için de yalnız “kök içi sıfırdan büyük veya eşit” kuralını kullanmak 3'ü yanlışlıkla aralığa katar.

## Soru 3

**Doğru cevap:** C

**Kazanım:** İki mutlak değer toplamının en küçük değerini geometrik uzaklık ilişkisiyle bulma.

**Çözüm:**

$|x-3|$, $x$ ile 3 arasındaki; $|x+1|$ ise $x$ ile $-1$ arasındaki uzaklıktır. $x\in[-1,3]$ iken bu uzaklıkların toplamı iki sabit nokta arasındaki uzaklığa eşittir:

$$3-(-1)=4.$$

Bu aralığın dışında toplam büyür. Görüntü kümesi $[4,\infty)$'dir.

**Neden doğru?** En küçük değer 4'tür ve $[-1,3]$ aralığındaki her girdide gerçekten alınır.

**Çeldirici notu:** Mutlak değerlerin ayrı ayrı sıfır olabildiğini görüp toplamın da sıfır olacağını düşünmek, iki ifadenin aynı anda sıfır olamayacağını gözden kaçırır.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Sonlu kümeler arasında örten fonksiyonları içerme-dışlama yöntemiyle sayma.

**Çözüm:**

Toplam $3^4=81$ fonksiyon vardır. Hedef kümenin belirli bir elemanını kullanmayan fonksiyon sayısı $2^4$ olduğundan üç seçim için $3\cdot2^4$ çıkarılır. Yalnız tek hedef elemanı kullanan fonksiyonlar iki kez çıkarıldığı için 3 durum geri eklenir:

$$3^4-3\cdot2^4+3=81-48+3=36.$$

**Neden doğru?** Örtenlik, hedef kümedeki üç elemanın da en az bir kez görüntü olarak kullanılmasını gerektirir.

**Çeldirici notu:** Yalnız $81-48$ yapmak, iki farklı hedef elemanı aynı anda eksik olan sabit fonksiyonları fazla çıkarır.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Rasyonel fonksiyonun tersindeki bir değeri özgün fonksiyon denklemiyle bulma.

**Çözüm:**

$f^{-1}(1)=x$ olması $f(x)=1$ demektir:

$$\frac{2x+3}{x-1}=1 \Rightarrow 2x+3=x-1 \Rightarrow x=-4.$$

**Neden doğru?** Bulunan $-4$ değeri paydanın sıfır olmaması koşulunu sağlar.

**Çeldirici notu:** Formülde $x=1$ yazmak ters fonksiyon yerine $f(1)$ değerini arar ve paydayı sıfır yapar.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Polinom biçimindeki fonksiyonun çift olma koşulunu katsayılara uygulama.

**Çözüm:**

Çift fonksiyonda tek dereceli terim bulunmamalıdır. Bu nedenle $x^3$ teriminin katsayısı sıfır olmalıdır:

$$m+1=0 \Rightarrow m=-1.$$

Bu durumda $f(x)=2x^2-5$ olur ve $f(-x)=f(x)$ sağlanır.

**Neden doğru?** Kalan kareli ve sabit terimler işaret değişiminden etkilenmez.

**Çeldirici notu:** $x^2$ terimini yok etmeye çalışmak çift fonksiyonda bulunmasına izin verilen bir terimi gereksiz yere kaldırır.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Doğrusal fonksiyonun kendisiyle bileşkesinde katsayı karşılaştırması yapma.

**Çözüm:**

$$f(f(x))=a(ax+b)+b=a^2x+b(a+1).$$

$a^2=4$ ve $a<0$ olduğundan $a=-2$'dir. Sabit terim için

$$b(a+1)=3 \Rightarrow -b=3 \Rightarrow b=-3$$

bulunur. Böylece $a+b=-5$ olur.

**Neden doğru?** Her gerçek $x$ için eşitlik, hem doğrusal katsayının hem sabit terimin karşılıklı eşit olmasını gerektirir.

**Çeldirici notu:** $a^2=4$ eşitliğinden pozitif kökü seçmek verilen $a<0$ koşuluna aykırıdır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Parçalı fonksiyon denkleminde cebirsel adayları parça aralıklarıyla doğrulama.

**Çözüm:**

İlk parçada $x+2=4$ eşitliği $x=2$ verir; fakat $2\le1$ değildir. İkinci parçada $5-x=4$ eşitliği $x=1$ verir; fakat $1>1$ değildir. Geçerli çözüm yoktur.

**Neden doğru?** Her iki kuralın ürettiği aday da kendi parçasının koşulunu ihlal eder.

**Çeldirici notu:** Parça koşullarını kontrol etmeden 1 ve 2 değerlerini çözüm kabul etmek iki sahte kök üretir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Kesin azalan fonksiyonun bire birliğini eşit çıktılarda kullanma.

**Çözüm:**

Kesin azalan fonksiyon bire birdir. Bu nedenle

$$a^2=4a+5 \Rightarrow a^2-4a-5=0.$$

$$(a-5)(a+1)=0$$

olduğundan çözümler 5 ve $-1$'dir. Çarpımları $-5$ olur.

**Neden doğru?** Bire bir fonksiyonda eşit çıktılar yalnız eşit girdilerden gelir.

**Çeldirici notu:** “Azalan” sözcüğü nedeniyle denklem yerine eşitsizlik kurmak, verilen çıktıların eşit olduğunu gözden kaçırır.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Sabit hızla azalan bir uzunluğu doğrusal fonksiyonla modelleme.

**Çözüm:**

$t$ saat sonraki mum boyu

$$h(t)=18-1{,}5t$$

olur. $h(t)=7{,}5$ için

$$18-1{,}5t=7{,}5 \Rightarrow 1{,}5t=10{,}5 \Rightarrow t=7.$$

**Neden doğru?** Mumun kısaldığı toplam uzunluk $18-7{,}5=10{,}5$ cm'dir ve bu fark saatlik azalma miktarına bölünür.

**Çeldirici notu:** Kalan boyu 1,5'e bölmek, yanan uzunluk yerine yanlış büyüklüğü kullanır.
