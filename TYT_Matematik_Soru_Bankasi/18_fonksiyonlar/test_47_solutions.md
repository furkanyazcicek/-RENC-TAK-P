# Konu 18 — Fonksiyonlar

## Test 47 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Fonksiyonel bağıntıda istenen simetrik girdileri oluşturma.

**Çözüm:**

$f(3)+f(1)$ toplamını elde etmek için $x+1=3$ ve $x-1=1$ olmalıdır; buradan $x=2$ seçilir:

$$f(3)+f(1)=2\cdot2^2+4=12.$$

**Neden doğru?** Tek bir uygun girdi, istenen iki fonksiyon değerini bağıntıda aynı anda verir.

**Çeldirici notu:** Bağıntıda $x=3$ yazmak $f(4)+f(2)$ toplamını üretir.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Kök içi ve payda kısıtlarını kesiştirerek tanım kümesi bulma.

**Çözüm:**

$4-x^2\ge0$ koşulundan $-2\le x\le2$ elde edilir. Payda sıfır olamayacağı için $x\ne1$ olmalıdır. Sonuç

$$[-2,1)\cup(1,2]$$

aralığıdır.

**Neden doğru?** $-2$ ve 2 kökü sıfır yaparak tanımlıdır; yalnız 1 payda nedeniyle çıkarılır.

**Çeldirici notu:** Kök içinin pozitif olması gerektiğini düşünmek uç noktaları gereksiz yere dışarıda bırakır.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Rasyonel fonksiyon denkleminde gerçek çözüm sayısını belirleme.

**Çözüm:**

$$\frac{x^2}{x^2+4}=\frac12 \Rightarrow 2x^2=x^2+4.$$

Buradan $x^2=4$ ve $x=\pm2$ bulunur. İki çözüm vardır.

**Neden doğru?** Her iki kök de paydayı sıfır yapmaz ve eşitliği sağlar.

**Çeldirici notu:** $x^2=4$ eşitliğinde yalnız pozitif kökü almak çözüm sayısını eksik verir.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Eşlemeleri sabitlenmiş bijektif fonksiyonları permütasyonla sayma.

**Çözüm:**

İki eşleme sabitlenince kalan 4 eleman, kalan 4 görüntüye bire bir yerleştirilir:

$$4!=24.$$

**Neden doğru?** Eşit eleman sayılı kümelerde bire bir ve örten fonksiyon, bir permütasyondur.

**Çeldirici notu:** $6!$ kullanmak önceden belirlenmiş iki eşlemeyi yeniden seçim sürecine katar.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Parametreli bileşke fonksiyon değerinden koşullu kök seçme.

**Çözüm:**

$g(1)=1+a$ olduğundan

$$f(g(1))=a(1+a)+1=7.$$

Buradan $a^2+a-6=0$, yani $(a-2)(a+3)=0$ elde edilir. $a>0$ koşulu $a=2$ değerini seçer.

**Neden doğru?** Pozitiflik koşulu bileşke denklemindeki iki kökten birini eler.

**Çeldirici notu:** İç fonksiyonun çıktısındaki $a$ terimini atlamak ikinci dereceden ilişkiyi kaybettirir.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Sınırlandırılmış parabolün ters fonksiyon değerini bulma.

**Çözüm:**

$$f^{-1}(17)=x \Rightarrow (x-2)^2+1=17.$$

Buradan $(x-2)^2=16$ ve $x=6$ ya da $x=-2$ bulunur. Tanım kümesi $[2,\infty)$ olduğundan $x=6$ alınır.

**Neden doğru?** Tanım aralığı parabolün sağ kolunu seçmektedir.

**Çeldirici notu:** Her iki cebirsel kökü kabul etmek fonksiyonun belirtilen tanım kümesini yok sayar.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Tek polinomda çift dereceli terimlerin katsayılarını belirleme.

**Çözüm:**

Fonksiyon tek olduğundan çift dereceli terimler bulunamaz; dolayısıyla $a=b=0$ olur. Böylece

$$f(1)=1+2-1=2.$$

**Neden doğru?** $f(-x)=-f(x)$ koşulunda çift kuvvetli terimler eşitliği bozar.

**Çeldirici notu:** Yalnız sabit terimin olmamasını tek fonksiyon için yeterli sanmak $x^4$ ve $x^2$ terimlerini gözden kaçırır.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Parçalı doğrusal fonksiyonda bire birlik ve örtenliği görüntü aralıklarıyla inceleme.

**Çözüm:**

İlk kol $(-\infty,2)$ görüntülerini üretir. İkinci kolun $[2,\infty)$ görüntülerini üretmesi için eğimi pozitif olmalıdır:

$$a>0.$$

Bu durumda iki görüntü aralığı çakışmadan bütün gerçek sayıları kapsar.

**Neden doğru?** Pozitif eğim ikinci kolu hem bire bir yapar hem de 2'den başlayarak üst yönde sınırsız kılar.

**Çeldirici notu:** $a=0$ ikinci kolu sabit yapar; farklı girdiler aynı 2 görüntüsüne gider.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Azalan fonksiyonda çıktı eşitsizliğini rasyonel girdi eşitsizliğine çevirme.

**Çözüm:**

$f$ kesin azalan olduğundan

$$f\left(\frac1{a+2}\right)<f(0) \Rightarrow \frac1{a+2}>0.$$

Pay pozitif olduğuna göre $a+2>0$, yani $a>-2$ olur.

**Neden doğru?** Azalan fonksiyon girdilerin sırasını çıktılarda tersine çevirir.

**Çeldirici notu:** Yalnız $a\ne-2$ yazmak kesri tanımlı yapar ancak pozitifliğini garanti etmez.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Bir geometrik niceliği ters fonksiyon ve bileşke üzerinden dönüştürme.

**Çözüm:**

$C^{-1}(36)$, çevresi 36 olan karenin kenarını verir:

$$4x=36 \Rightarrow x=9.$$

Ardından alan fonksiyonu uygulanır:

$$A(9)=9^2=81.$$

**Neden doğru?** Bileşke önce çevreden kenara, sonra kenardan alana geçmektedir.

**Çeldirici notu:** 36'yı doğrudan alan fonksiyonunda kullanmak çevre ile kenar uzunluğunu karıştırır.
