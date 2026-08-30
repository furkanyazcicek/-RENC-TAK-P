# Konu 18 — Fonksiyonlar

## Test 19 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** İkinci dereceden fonksiyon grafiğindeki yatay ve düşey ötelemeyi yorumlama.

**Çözüm:**

$f(x)=x^2$ grafiğinin tepe noktası $(0,0)$'dır. İki birim sağa öteleme apsisi 2, üç birim aşağı öteleme ordinatı $-3$ yapar.

**Neden doğru?** Yeni kural $g(x)=(x-2)^2-3$ ve tepe noktası $(2,-3)$ olur.

**Çeldirici notu:** Sağa ötelemede kural içinde $x-2$ görülmesi tepe noktasını $-2$ yapmaz.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Bir aralığın mutlak değer fonksiyonu altındaki ters görüntüsünü bulma.

**Çözüm:**

$f^{-1}([0,1])$, çıktısı 0 ile 1 arasında olan girdilerdir:

$$0\le|x-2|\le1.$$

Alt koşul her zaman sağlanır. $|x-2|\le1$ eşitsizliğinden

$$1\le x\le3$$

bulunur.

**Neden doğru?** Ters görüntü tek bir sayı değil, verilen çıktı aralığını üreten bütün girdiler kümesidir.

**Çeldirici notu:** $f^{-1}$ gösterimini yalnız cebirsel ters fonksiyon gibi yorumlamak aralık sorusunu yanlış kurar.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Bir eşlemesi sabitlenmiş örten fonksiyonları sayma.

**Çözüm:**

Kalan üç girdinin görüntülerinde 2 ve 3 mutlaka bulunmalıdır. Tüm $3^3$ seçimden 2'nin kullanılmadığı $2^3$ ve 3'ün kullanılmadığı $2^3$ seçim çıkarılır; ikisinin de kullanılmadığı tek seçim geri eklenir:

$$3^3-2\cdot2^3+1=27-16+1=12.$$

**Neden doğru?** 1 görüntüsü baştan kullanıldığı için örtenlik yalnız 2 ve 3'ün en az birer kez seçilmesine bağlıdır.

**Çeldirici notu:** $3^3$ hesaplamak 2 veya 3'ün hiç kullanılmadığı eşlemeleri de içerir.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Pay ve paydada bulunan köklü ifadelerin tanım koşullarını birlikte belirleme.

**Çözüm:**

Paydaki kök için $5-x\ge0$, yani $x\le5$ olmalıdır. Paydadaki karekök sıfır olamayacağından $x-1>0$, yani $x>1$ gerekir.

$$1<x\le5$$

**Neden doğru?** Paydaki kök sıfır olabilir; paydadaki kök ise sıfır olamaz.

**Çeldirici notu:** Her iki kök için de aynı uç nokta kuralını kullanmak 1 veya 5 sınırlarından birini yanlış seçtirir.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Periyodik fonksiyonda eşdeğer girdileri belirleme.

**Çözüm:**

Fonksiyonun periyodu 4'tür. $17=1+4\cdot4$ olduğundan

$$f(17)=f(1)=-2.$$

**Neden doğru?** Girdiye 4'ün tam katını eklemek fonksiyon değerini değiştirmez.

**Çeldirici notu:** Periyot kadar artışı fonksiyon çıktısına eklemek, periyodiklik ile doğrusal artışı karıştırır.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Kapalı aralıkta ikinci dereceden fonksiyonun en büyük değerini belirleme.

**Çözüm:**

$$f(x)=(x-2)^2-3$$

parabolü yukarı açılır ve $x=2$'de en küçük değerini alır. Kapalı aralıkta en büyük değer uç noktalardan birindedir:

$$f(0)=1, \qquad f(5)=6.$$

**Neden doğru?** Uç noktalar karşılaştırıldığında en büyük değer 6'dır.

**Çeldirici notu:** Tepe noktası yukarı açılan parabolde en büyük değil, en küçük değeri verir.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Kare ve karekökün bileşkesinde mutlak değer oluştuğunu fark etme.

**Çözüm:**

$$ (f\circ g)(x)=\sqrt{(x^2-1)+1}=\sqrt{x^2}=|x|.$$

**Neden doğru?** Gerçek sayılarda temel karekök sonucu negatif olamayacağı için $\sqrt{x^2}$ ifadesi $|x|$'e eşittir.

**Çeldirici notu:** $\sqrt{x^2}=x$ eşitliği yalnız $x\ge0$ için doğrudur.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Polinom biçimindeki çift fonksiyonda tek kuvvetli terim katsayısını belirleme.

**Çözüm:**

Çift fonksiyonda $x^3$ gibi tek kuvvetli terimler bulunamaz. Bu nedenle

$$m+1=0 \Rightarrow m=-1.$$

$m=-1$ için kalan terimler $-6x^2+5$ biçiminde çift fonksiyon oluşturur.

**Neden doğru?** Seçilen parametre tek kuvvetli terimi kaldırırken çift kuvvetli terime engel olmaz.

**Çeldirici notu:** $x^2$ katsayısını sıfırlamak çift fonksiyon için gerekli değildir.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Sonlu kümelerde bire bir ve örten fonksiyonun eksik görüntüsünü belirleme.

**Çözüm:**

$B$ kümesindeki 3, 0 ve 2 görüntüleri kullanılmıştır. Fonksiyon bire bir ve örten olduğundan geriye kalan 4 girdisi, kullanılmayan 1 çıktısına gönderilmelidir.

**Neden doğru?** Her hedef elemanı tam bir kez görüntü olarak kullanılmış olur.

**Çeldirici notu:** Kullanılmış bir çıktıyı tekrar seçmek bire birliği bozar ve 1'i görüntü dışında bırakır.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Fonksiyonel eşitlikte istenen ardışık değer toplamını uygun girdiyle bulma.

**Çözüm:**

İstenen ifade doğrudan $x=2$ durumuna karşılık gelir:

$$f(2)+f(3)=2\cdot2+3=7.$$

**Neden doğru?** Eşitlikteki iki fonksiyon girdisi ardışık olduğundan istenen toplam için tek bir uygun girdi yeterlidir.

**Çeldirici notu:** $f(2)$ ve $f(3)$ değerlerini ayrı ayrı bulmaya çalışmak, verilen bilginin yalnız toplamı belirlediğini gözden kaçırır.
