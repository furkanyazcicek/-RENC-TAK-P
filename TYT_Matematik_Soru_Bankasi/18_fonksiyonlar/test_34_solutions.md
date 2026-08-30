# Konu 18 — Fonksiyonlar

## Test 34 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Sabit girdi artışına karşılık gelen fonksiyon değeri değişimini yinelemeli kullanma.

**Çözüm:**

1'den 7'ye ulaşmak için üç kez 2 birimlik artış yapılır. Her adımda fonksiyon değeri 3 arttığından

$$f(7)=f(1)+3\cdot3=4+9=13.$$

**Neden doğru?** Girdi farkı $7-1=6$, verilen adım uzunluğu 2 olduğundan üç yineleme gerekir.

**Çeldirici notu:** Girdi farkı olan 6'yı doğrudan fonksiyon değerine eklemek her adımın 3 birimlik çıktı artışını gözden kaçırır.

## Soru 2

**Doğru cevap:** E

**Kazanım:** En büyük tam sayı fonksiyonunu negatif ve pozitif ondalık girdilerde değerlendirme.

**Çözüm:**

$-1{,}2$'den büyük olmayan en büyük tam sayı $-2$, $2{,}8$'den büyük olmayan en büyük tam sayı 2'dir. Bu nedenle

$$f(-1{,}2)+f(2{,}8)=-2+2=0.$$

**Neden doğru?** Negatif sayıda aşağı yuvarlama, sayıyı $-2$ yönüne götürür; sıfıra doğru yuvarlama değildir.

**Çeldirici notu:** $\lfloor-1{,}2\rfloor=-1$ almak, “büyük olmayan” koşulunu ihlal eder.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Eşleme şemasından bire bir ve örten olma özelliklerini belirleme.

**Çözüm:**

Şemada $a$, $b$ ve $c$ elemanlarının her birine en az bir ok geldiği için fonksiyon örtendir. Ancak 2 ve 3 elemanları aynı $b$ görüntüsüne gönderildiğinden bire bir değildir.

**Neden doğru?** Örtenlik hedef kümede açıkta eleman kalmamasını, bire birlik farklı girdilerin farklı çıktılara gitmesini gerektirir.

**Çeldirici notu:** Her tanım kümesi elemanından tek ok çıkmasını bire birlik sanmak, yalnızca fonksiyon olma koşulunu bire birlikle karıştırır.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Rasyonel dış fonksiyonla kurulan bileşkenin tanım kümesinde yasaklı iç çıktıları bulma.

**Çözüm:**

$$f(g(x))=\frac1{x^2+2x-3}.$$

Payda sıfır olamayacağından

$$x^2+2x-3\ne0 \Rightarrow (x+3)(x-1)\ne0$$

olmalıdır. Bu nedenle $x\ne-3$ ve $x\ne1$; tanım kümesi $\mathbb{R}\setminus\{-3,1\}$ olur.

**Neden doğru?** İç fonksiyonun 3 çıktısını ürettiği iki girdi, dış fonksiyonun paydasını sıfır yapar.

**Çeldirici notu:** Yalnız dış fonksiyonun kendi değişkenindeki yasaklı 3 değerini tanım kümesinden çıkarmak bileşke girdisi ile ara çıktıyı karıştırır.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Aşağı yönlü mutlak değer fonksiyonunun görüntü kümesini belirleme.

**Çözüm:**

$|x-4|\ge0$ olduğundan

$$-|x-4|+2\le2.$$

$x=4$ için 2 değeri alınır. $|x-4|$ sınırsız büyüyebildiğinden aşağı yönde sınır yoktur. Görüntü kümesi $(-\infty,2]$ olur.

**Neden doğru?** Fonksiyon en büyük değerini mutlak değerin sıfır olduğu noktada alır.

**Çeldirici notu:** Mutlak değer çıktısının negatif olmadığını görüp fonksiyonun da negatif olamayacağını düşünmek önündeki eksi işaretini atlar.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Bazı eşlemeleri sabitlenmiş fonksiyonları bağımsız seçimlerle sayma.

**Çözüm:**

İki eşleme sabitlenmiştir. Kalan $c,d,e$ elemanlarının her biri için 0 veya 1 olmak üzere iki bağımsız seçim vardır:

$$2^3=8.$$

**Neden doğru?** Her girdinin tam bir görüntüsü bulunur ve soruda bire birlik gibi ek bir kısıt yoktur.

**Çeldirici notu:** Sabitlenen $a$ ve $b$ için yeniden seçim yapmak fonksiyon sayısını gereksiz büyütür.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Ters fonksiyonun sabit noktasını özgün fonksiyon üzerinden bulma.

**Çözüm:**

$f^{-1}(a)=a$ eşitliği $f(a)=a$ ile eş değerdir. Bu nedenle

$$3a-4=a \Rightarrow 2a=4 \Rightarrow a=2.$$

**Neden doğru?** Bir nokta fonksiyon tarafından kendisine gönderiliyorsa ters fonksiyon tarafından da kendisine gönderilir.

**Çeldirici notu:** Önce ters fonksiyon kuralını bulmak mümkündür ancak sabit nokta eş değerliğini kullanmamak gereksiz işlem uzatır.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Parametreli doğrusal fonksiyon bileşkesinde sabit terimleri karşılaştırma.

**Çözüm:**

$$g(f(x))=(2x+m)-3=2x+m-3.$$

Bu ifade her $x$ için $2x+1$ olduğundan

$$m-3=1 \Rightarrow m=4$$

bulunur.

**Neden doğru?** Doğrusal katsayılar zaten eşittir; fonksiyonların özdeş olması sabit terimlerin eşitliğini gerektirir.

**Çeldirici notu:** Bileşke sırasını değiştirerek $f(g(x))$ hesaplamak parametreyi farklı katsayıyla ilişkilendirir.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Kesin artan fonksiyonda çıktı eşitsizliğini aynı yönde girdi eşitsizliğine dönüştürme.

**Çözüm:**

$f$ kesin artan olduğundan

$$2x+1\ge7-x$$

olmalıdır. Buradan $3x\ge6$ ve $x\ge2$ bulunur.

**Neden doğru?** Artan fonksiyon girdilerin sıralamasını çıktılarda korur; eşitlik durumu da geçerlidir.

**Çeldirici notu:** Eşitsizliğin yönünü değiştirmek kesin azalan fonksiyon kuralını yanlış uygular.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Kapalı aralıkta mutlak değer fonksiyonunun en büyük değerini aldığı girdileri belirleme.

**Çözüm:**

$f(x)$, $x$ ile 1 arasındaki uzaklıktır. $[-2,4]$ aralığının iki ucu da 1'e 3 birim uzaktadır:

$$f(-2)=3, \qquad f(4)=3.$$

Aralıktaki başka hiçbir nokta daha büyük değer vermez. İstenen girdilerin toplamı $-2+4=2$'dir.

**Neden doğru?** Mutlak değer fonksiyonunun kapalı aralıktaki en büyük değeri, merkezden en uzak uç noktada veya noktalarda alınır.

**Çeldirici notu:** Yalnız sağ uç noktayı seçmek sol ucun da aynı uzaklıkta olduğunu gözden kaçırır.
