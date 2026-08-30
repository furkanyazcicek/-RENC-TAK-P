# Konu 18 — Fonksiyonlar

## Test 24 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Kareköklü iç fonksiyonla kurulan bileşkenin kuralını ve tanım kümesini belirleme.

**Çözüm:**

$$g(f(x))=(\sqrt{x+4})^2-4=x.$$

Ancak $f$ fonksiyonunun tanımlı olması için $x+4\ge0$, yani $x\ge-4$ gerekir.

**Neden doğru?** Cebirsel sadeleşme kökten gelen tanım koşulunu ortadan kaldırmaz.

**Çeldirici notu:** Sonuç yalnız $x$ kaldığı için tanım kümesini tüm gerçek sayılar kabul etmek yanlıştır.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Sonlu bir fonksiyon döngüsünde yüksek sayıda bileşke sonucunu bulma.

**Çözüm:**

Tabloya göre

$$1\to3\to2\to4\to1$$

biçiminde 4 adımlık bir döngü vardır. $2025=4\cdot506+1$ olduğundan 2025 uygulama, bir uygulamayla aynı sonucu verir:

$$f^{2025}(1)=f(1)=3.$$

**Neden doğru?** Her dört uygulamada başlangıç girdisine dönülür.

**Çeldirici notu:** 2025'i tablo girdisi gibi kullanmak uygulama sayısı ile fonksiyon girdisini karıştırır.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Aşağı yönlü mutlak değer fonksiyonunun görüntü kümesini belirleme.

**Çözüm:**

$|x+1|\ge0$ olduğundan

$$2-|x+1|\le2.$$

$x=-1$ için en büyük değer 2 alınır. $|x+1|$ sınırsız büyüyebildiği için fonksiyonun alt sınırı yoktur.

**Neden doğru?** Görüntü kümesi $(-\infty,2]$ olur ve üst uç değer alınır.

**Çeldirici notu:** Mutlak değerin çıktısının negatif olmaması, önündeki eksi nedeniyle $f$ çıktısının da negatif olamayacağı anlamına gelmez.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Parametreli doğrusal fonksiyonun sabit olma koşulunu ve kökler çarpımını kullanma.

**Çözüm:**

Fonksiyonun sabit olması için $x$'in katsayısı sıfır olmalıdır:

$$m^2-4=0 \Rightarrow m=-2 \text{ veya } m=2.$$

Bu değerlerin çarpımı $(-2)\cdot2=-4$'tür.

**Neden doğru?** Her iki parametre değerinde de fonksiyon $f(x)=1$ sabit kuralına dönüşür.

**Çeldirici notu:** Köklerin toplamını hesaplamak sorulan çarpım yerine farklı bir simetrik değeri verir.

## Soru 5

**Doğru cevap:** C

**Kazanım:** İki doğrusal fonksiyonun bileşkelerinin eşit olma koşulundan parametre bulma.

**Çözüm:**

$$f(g(x))=2(3x+1)+a=6x+2+a,$$

$$g(f(x))=3(2x+a)+1=6x+3a+1.$$

Bileşkeler eşit olduğundan $2+a=3a+1$ ve $a=\frac12$ bulunur.

**Neden doğru?** $x$ katsayıları zaten eşittir; sabit terimlerin eşitliği parametreyi belirler.

**Çeldirici notu:** $f\circ g$ ile $g\circ f$ genel olarak eşit değildir; verilen koşul katsayı karşılaştırması gerektirir.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Paydada bulunan karekökün tanım koşulunu ikinci dereceden eşitsizlikle bulma.

**Çözüm:**

Karekök paydada olduğundan

$$x^2-9>0$$

olmalıdır. $(x-3)(x+3)>0$ eşitsizliği $x<-3$ veya $x>3$ için sağlanır.

**Neden doğru?** Kök içi sıfır olduğunda payda sıfır olacağı için $-3$ ve 3 uçları alınmaz.

**Çeldirici notu:** Yalnız $x\ne\pm3$ koşulu, kök içinin negatif olduğu $(-3,3)$ aralığını yanlışlıkla dâhil eder.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Parçalı tanımlı fonksiyon denkleminde aday çözümleri parça koşullarıyla doğrulama.

**Çözüm:**

İlk parçada $x+1=5$ eşitliği $x=4$ verir; ancak $4<2$ olmadığı için geçersizdir. İkinci parçada

$$2x-1=5 \Rightarrow x=3$$

bulunur ve $3\ge2$ koşulunu sağlar.

**Neden doğru?** Yalnız ikinci parçadan gelen aday kendi aralık koşulunda geçerlidir.

**Çeldirici notu:** Her cebirsel adayı parça koşulunu kontrol etmeden kabul etmek fazladan çözüm üretir.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Sonlu tanım kümesinde görüntü kümesini ve elemanlar toplamını bulma.

**Çözüm:**

Fonksiyon değerleri sırasıyla $5,2,1,2,5$ olur. Görüntü kümesi

$$\{1,2,5\}$$

olduğundan elemanlar toplamı $1+2+5=8$'dir.

**Neden doğru?** Tekrarlanan çıktılar görüntü kümesinde yalnız bir kez yer alır.

**Çeldirici notu:** Beş fonksiyon değerinin tamamını toplamak görüntü kümesindeki farklı elemanların toplamını vermez.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Kesin artan fonksiyonda çıktı eşitsizliğini girdi eşitsizliğine dönüştürme.

**Çözüm:**

$f$ kesin artan olduğundan çıktıların sırası girdilerin sırasıyla aynıdır:

$$2a+1>5-a.$$

Buradan $3a>4$ ve $a>\frac43$ bulunur.

**Neden doğru?** Artan fonksiyon eşitsizliğin yönünü korur.

**Çeldirici notu:** Eşitsizliğin yönünü değiştirmek kesin azalan fonksiyon için geçerli olurdu.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Sabit artışlı yinelemeli fonksiyonda iki değer arasındaki farkı bulma.

**Çözüm:**

2'den 5'e ulaşmak için üç ardışık adım vardır. Her adımda fonksiyon değeri 2 arttığından

$$f(5)-f(2)=3\cdot2=6.$$

**Neden doğru?** Başlangıç fonksiyon değerini bilmeye gerek olmadan toplam artış hesaplanabilir.

**Çeldirici notu:** Girdi farkı olan 3'ü doğrudan cevaplamak her adımın 2 birimlik çıktı artışını gözden kaçırır.
