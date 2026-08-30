# Konu 18 — Fonksiyonlar

## Test 46 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Ardışık fonksiyon farklarını yineleyerek sonraki değeri bulma.

**Çözüm:**

Bağıntıda sırasıyla $x=0,1,2,3$ yazılır. Fonksiyon değerindeki toplam artış

$$0+2+4+6=12$$

olur. $f(0)=1$ olduğundan $f(4)=1+12=13$ bulunur.

**Neden doğru?** Her adım bir sonraki tam sayı girdisindeki fonksiyon değerini verir.

**Çeldirici notu:** Yalnız $x=3$ yazmak son geçişteki artışı verir; önceki üç geçişi içermez.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Kök içindeki rasyonel ifadenin işaret tablosuyla tanım kümesini bulma.

**Çözüm:**

$$\frac{x+2}{x-1}\ge0$$

ve $x\ne1$ olmalıdır. Kritik değerler $-2$ ile 1'dir. İşaret incelemesi sonucu ifade $x\le-2$ veya $x>1$ için negatif değildir. Tanım kümesi

$$(-\infty,-2]\cup(1,\infty)$$

olur.

**Neden doğru?** $-2$ kök içini sıfır yapar ve alınır; 1 paydayı sıfır yaptığı için alınmaz.

**Çeldirici notu:** Yalnız payın pozitif olduğu bölgeyi almak, pay ve paydanın birlikte negatif olduğu $x\le-2$ bölümünü kaybettirir.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Aşağı yönlü mutlak değer fonksiyonunun görüntü kümesini belirleme.

**Çözüm:**

$|x-2|\ge0$ olduğundan $f(x)\le3$ olur. $x=2$ için 3 değeri alınır. Mutlak değer büyüdükçe fonksiyon alt yönde sınırsızdır. Bu nedenle görüntü kümesi

$$(-\infty,3]$$

olur.

**Neden doğru?** Tepe değeri elde edilirken aşağı yönde herhangi bir alt sınır yoktur.

**Çeldirici notu:** Mutlak değer çıktılarının pozitif olmasını, başındaki eksi nedeniyle oluşan fonksiyon çıktılarıyla karıştırmak görüntüyü yanlış sınırlar.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Görüntü kümesinin eleman sayısı verilen fonksiyonları seçim ve örtenlikle sayma.

**Çözüm:**

Önce dört hedef elemandan kullanılacak üçü $\binom43=4$ biçimde seçilir. Beş elemandan bu üçlüye örten fonksiyon sayısı

$$3^5-\binom31 2^5+\binom32 1^5=243-96+3=150$$

olur. Toplam $4\cdot150=600$ fonksiyon vardır.

**Neden doğru?** Önce görüntü olacak üçlü seçilir, sonra bu üç elemanın tamamını kullanan fonksiyonlar sayılır.

**Çeldirici notu:** $4\cdot3^5$ hesaplamak seçilen üçlüden bir veya iki elemanı hiç kullanmayan fonksiyonları da içerir.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Ters fonksiyon bilgisini doğrusal fonksiyonun bir eşlemesine dönüştürme.

**Çözüm:**

$f^{-1}(1)=-1$ eşitliği $f(-1)=1$ anlamına gelir. Böylece

$$a+b=5, \qquad -a+b=1$$

denklem sistemi elde edilir. Denklemler çıkarıldığında $2a=4$ ve $a=2$ bulunur.

**Neden doğru?** Ters fonksiyon eşitliği, girdi ile çıktının yer değiştirdiği ikinci bir doğrusal koşul verir.

**Çeldirici notu:** $f^{-1}(1)$ ifadesini $1/f(1)$ sanmak ters fonksiyonla çarpmaya göre tersi karıştırır.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Kesirli fonksiyonun ters görüntüsünü denklem kurarak bulma.

**Çözüm:**

$f^{-1}(2)=x$ için $f(x)=2$ yazılır:

$$\frac{x+1}{x-2}=2 \Rightarrow x+1=2x-4.$$

Buradan $x=5$ elde edilir.

**Neden doğru?** 5 değeri tanım kümesindedir ve $f(5)=6/3=2$ eşitliğini sağlar.

**Çeldirici notu:** Fonksiyon kuralındaki kesri ters çevirmek ters fonksiyon değerini vermez.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Çift polinomda tek dereceli terimlerin katsayılarını belirleme.

**Çözüm:**

Polinom çift olduğundan tek dereceli terimlerin katsayıları sıfırdır:

$$a=0 \quad\text{ve}\quad b=0.$$

Bu durumda

$$f(1)=1+2+1=4$$

olur.

**Neden doğru?** Çift fonksiyonda $f(-x)=f(x)$ eşitliği tek kuvvetli terimlerin bulunmasına izin vermez.

**Çeldirici notu:** Yalnız $a=0$ almak doğrusal $bx$ teriminin de tek fonksiyon davranışı taşıdığını gözden kaçırır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Parçalı fonksiyon denkleminde her aday çözümü kendi aralığında denetleme.

**Çözüm:**

$x\le1$ kolunda $x^2=4$ eşitliğinin adayları $-2$ ve 2'dir; yalnız $-2$ bu kola uygundur. $x>1$ kolunda

$$2x+1=4 \Rightarrow x=\frac32$$

bulunur ve koşulu sağlar. Toplam iki çözüm vardır.

**Neden doğru?** Her iki parça da birer geçerli fakat farklı çözüm üretir.

**Çeldirici notu:** $x^2=4$ denkleminin iki kökünü de ilk parçaya almak $x\le1$ koşulunu yok sayar.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Bire bir fonksiyonda eşit görüntülerden eşit girdilere geçip kökler toplamını bulma.

**Çözüm:**

Bire birlikten

$$a^2+2a=3-a$$

ve dolayısıyla

$$a^2+3a-3=0$$

elde edilir. Kökler toplamı $-3$'tür.

**Neden doğru?** İstenen toplam, ikinci dereceden denklemin kökler toplamı bağıntısından doğrudan okunur.

**Çeldirici notu:** Girdileri eşitlememek, kuralı verilmeyen fonksiyon üzerinde işlem yapmayı imkânsızlaştırır.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Eşleme şemasından bileşke fonksiyon değerini okuma.

**Çözüm:**

Şemaya göre önce $f(2)=4$ okunur. İkinci uygulamada $f(4)=1$ olduğundan

$$(f\circ f)(2)=f(f(2))=f(4)=1.$$

**Neden doğru?** Bileşke, ilk okun çıkan elemanı ikinci eşlemenin girdisi olarak kullanır.

**Çeldirici notu:** Yalnız ilk oku okuyup 4 demek fonksiyonu iki kez uygulama koşulunu tamamlamaz.
