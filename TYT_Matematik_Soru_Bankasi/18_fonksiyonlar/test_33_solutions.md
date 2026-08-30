# Konu 18 — Fonksiyonlar

## Test 33 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Yinelemeli fonksiyon bağıntısını ardışık girdilerde kullanma.

**Çözüm:**

Bağıntı sırasıyla $x=0,1,2$ için uygulanır:

$$f(1)=2f(0)-1=5,$$
$$f(2)=2f(1)-1=9,$$
$$f(3)=2f(2)-1=17.$$

**Neden doğru?** Her yeni değer bir önceki fonksiyon değerinden elde edilmiştir.

**Çeldirici notu:** Bağıntıyı yalnız bir kez uygulamak $f(1)$ değerinde durur; sorulan girdiye ulaşmak için üç adım gerekir.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Birden fazla karekök ve payda koşulunu birlikte kullanarak tanım kümesi bulma.

**Çözüm:**

Paydaki kök için $x-1\ge0$, yani $x\ge1$ gerekir. Bu koşul paydadaki $\sqrt{x+2}$ ifadesini de tanımlı yapar. Ancak payda sıfır olamaz:

$$\sqrt{x+2}-2\ne0 \Rightarrow x\ne2.$$

Tanım kümesi $[1,2)\cup(2,\infty)$ olur.

**Neden doğru?** 1 değeri payı sıfır yapar ve alınabilir; 2 değeri paydayı sıfır yaptığı için çıkarılır.

**Çeldirici notu:** Yalnız kök içlerini denetlemek, paydayı sıfır yapan 2 değerini yanlışlıkla tanım kümesine katar.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Kapalı aralıkta ikinci dereceden fonksiyonun en küçük ve en büyük değerlerini belirleme.

**Çözüm:**

$$f(x)=x^2-4x+7=(x-2)^2+3.$$

En küçük değer $x=2$ için 3'tür. Kapalı aralığın uçlarında

$$f(-1)=12, \qquad f(3)=4$$

olduğundan en büyük değer 12'dir. Görüntü kümesi $[3,12]$ olur.

**Neden doğru?** Sürekli fonksiyon kapalı aralıkta iki uç arasındaki bütün değerleri alır.

**Çeldirici notu:** Yalnız tepe noktasını incelemek alt sınırı verir; üst sınır için aralık uçlarının da değerlendirilmesi gerekir.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Görüntü kümesinin eleman sayısı sabitlenmiş fonksiyonları seçme ve örtenlik yoluyla sayma.

**Çözüm:**

Önce dört hedef elemandan görüntü kümesinde bulunacak ikisi seçilir:

$$\binom42=6.$$

Üç elemanlı tanım kümesinden seçilen iki elemanlı hedefe örten fonksiyon sayısı

$$2^3-2=6$$

olur. Toplam sayı $6\cdot6=36$'dır.

**Neden doğru?** “Tam olarak iki elemanlı” koşulu hem kullanılacak hedef çiftini seçmeyi hem de bu çiftin iki elemanını da kullanmayı gerektirir.

**Çeldirici notu:** Yalnız $\binom42$ hesaplamak, seçilen iki görüntüye tanım kümesi elemanlarının kaç farklı biçimde gönderilebildiğini atlar.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Ters fonksiyonun kuralından özgün fonksiyonu bulup bileşke değeri hesaplama.

**Çözüm:**

$$y=\frac{x-1}{2}$$

eşitliğinde $x$ yalnız bırakılırsa $x=2y+1$ olur. Dolayısıyla $f(x)=2x+1$'dir. Buna göre

$$f(1)=3, \qquad f(f(1))=f(3)=7.$$

**Neden doğru?** Ters fonksiyonun yaptığı işlemler ters sırayla geri çevrilerek $f$ fonksiyonu elde edilmiştir.

**Çeldirici notu:** Verilen kuralı doğrudan $f$ kuralı gibi kullanmak ters ile özgün fonksiyonu karıştırır.

## Soru 6

**Doğru cevap:** C

**Kazanım:** İkinci dereceden fonksiyonda eşit çıktılardan parametre belirleme.

**Çözüm:**

$f(0)=3$ olduğundan $b=3$'tür. Ayrıca

$$f(1)=1+a+b, \qquad f(5)=25+5a+b.$$

Bu değerler eşitlenirse $1+a=25+5a$, buradan $a=-6$ bulunur. Dolayısıyla $a+b=-3$'tür.

**Neden doğru?** Verilen iki koşul sırasıyla sabit terimi ve doğrusal katsayıyı belirler.

**Çeldirici notu:** $f(1)=f(5)$ eşitliğinden girdileri de eşitlemek, fonksiyonun bire bir olduğuna dair verilmeyen bir koşul ekler.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Fonksiyonun çift ve tek bileşenlerini veren iki eşitliği birlikte kullanma.

**Çözüm:**

$x=2$ için

$$f(2)+f(-2)=14,$$
$$f(2)-f(-2)=8$$

olur. Eşitlikler taraf tarafa toplanırsa $2f(2)=22$ ve $f(2)=11$ bulunur.

**Neden doğru?** Toplama işlemi $f(-2)$ terimlerini yok ederek istenen değeri doğrudan ayırır.

**Çeldirici notu:** Yalnız ilk eşitliği kullanmak iki bilinmeyenli tek denklem bıraktığı için $f(2)$ değerini belirlemez.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Bileşke fonksiyon denkleminin tüm gerçek çözümlerini bulup çarpımlarını hesaplama.

**Çözüm:**

$$f(g(x))=f(x^2)=x^2-1.$$

Bu nedenle

$$x^2-1=8 \Rightarrow x^2=9 \Rightarrow x=\pm3.$$

Çözümlerin çarpımı $-9$'dur.

**Neden doğru?** Kareli denklem iki zıt işaretli gerçek çözüm üretir.

**Çeldirici notu:** Yalnız pozitif karekökü almak $-3$ çözümünü kaybettirir ve çarpım yerine tek kök verir.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Fonksiyon grafiğinin yatay yansıma ve düşey öteleme altındaki nokta dönüşümünü belirleme.

**Çözüm:**

$(3,-1)$ noktası grafikte olduğundan $f(3)=-1$'dir. $g$ fonksiyonunda $-x=3$ olması için $x=-3$ alınır:

$$g(-3)=f(3)+2=-1+2=1.$$

Bu nedenle $(-3,1)$ noktası $g$ grafiğindedir.

**Neden doğru?** $f(-x)$ yatay koordinatın işaretini değiştirir; dışarıdaki $+2$ düşey koordinatı iki artırır.

**Çeldirici notu:** Yatay yansımada ordinatı, düşey ötelemede apsisi değiştirmek koordinat rollerini karıştırır.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Parçalı tanımlı ücret modelinde girdiye uygun kuralı seçme.

**Çözüm:**

$5>2$ olduğundan ikinci kural kullanılır:

$$U(5)=20+7(5-2)=20+21=41.$$

**Neden doğru?** İlk iki saatin toplam ücreti 20 TL'dir; yalnız sonraki üç saat 7 TL ile çarpılır.

**Çeldirici notu:** Beş saatin tamamını 7 ile çarpmak ilk iki saat için verilen sabit ücret kuralını yok sayar.
