# Konu 18 — Fonksiyonlar

## Test 40 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Sabit aralıklı fonksiyon farkını ardışık olarak kullanma.

**Çözüm:**

$x=2$ için

$$f(2)-f(0)=5 \Rightarrow f(2)=7.$$

$x=4$ için

$$f(4)-f(2)=11 \Rightarrow f(4)=18$$

olur.

**Neden doğru?** 0'dan 4'e iki adet 2 birimlik adımla ulaşılmış ve her adımın farklı artışı ayrı hesaplanmıştır.

**Çeldirici notu:** Bağıntıda yalnız $x=4$ yazmak $f(2)$ bilinmeden $f(4)$ değerini belirlemeye yetmez.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Pay ve paydada bulunan kareköklerin tanım koşullarını birlikte kullanma.

**Çözüm:**

Paydaki kök için $5-x\ge0$, yani $x\le5$ gerekir. Paydadaki kök sıfır olamayacağından

$$x+1>0 \Rightarrow x>-1$$

olmalıdır. Tanım kümesi $(-1,5]$ olur.

**Neden doğru?** 5 değeri payı sıfır yapar ve alınabilir; $-1$ değeri paydayı sıfır yaptığı için alınamaz.

**Çeldirici notu:** Paydadaki kök için büyük-eşit kullanmak $-1$ değerini yanlışlıkla tanım kümesine katar.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Mutlak değer fonksiyonunun alt sınırından görüntü kümesini belirleme.

**Çözüm:**

$|2x+1|\ge0$ olduğundan $f(x)\ge4$ olur. $x=-\frac12$ için 4 değeri alınır; mutlak değer sınırsız büyüyebildiği için görüntü kümesi $[4,\infty)$'dir.

**Neden doğru?** Alt sınır gerçekten elde edilir ve üst yönde sınır yoktur.

**Çeldirici notu:** En küçük değerin 4 olduğunu bulup bu değerin alınmadığını düşünmek aralık ucunu gereksiz yere açık bırakır.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Örten olmayan fonksiyonları toplam fonksiyon sayısından örtenleri çıkararak bulma.

**Çözüm:**

Toplam fonksiyon sayısı $3^4=81$'dir. Dört elemanlı bir kümeden üç elemanlı kümeye örten fonksiyon sayısı 36'dır. Bu nedenle örten olmayan fonksiyon sayısı

$$81-36=45$$

olur.

**Neden doğru?** Tüm fonksiyonlar, örten olanlar ve örten olmayanlar olarak ayrık iki gruba ayrılır.

**Çeldirici notu:** Yalnız sabit fonksiyonları örten olmayan kabul etmek görüntü kümesi iki elemanlı fonksiyonları atlar.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Rasyonel fonksiyonun sabit noktalarını ikinci dereceden denklemle inceleme.

**Çözüm:**

$f(x)=x$ için

$$\frac{x+2}{x-3}=x \Rightarrow x+2=x^2-3x.$$

Buradan $x^2-4x-2=0$ elde edilir. Kökler toplamı 4'tür.

**Neden doğru?** İkinci dereceden denklemin kökler toplamı $-(-4)/1=4$'tür ve $x=3$ bu denklemin kökü değildir.

**Çeldirici notu:** Payı sıfıra eşitlemek sabit noktaları değil yalnız fonksiyonun sıfırını bulur.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Sonlu döngüde yüksek sayıda fonksiyon yinelemesini bulma.

**Çözüm:**

$$a\to b\to c\to a$$

biçiminde üç adımlık bir döngü vardır. $2025=3\cdot675$ olduğundan 2025 uygulama başlangıç elemanına geri döndürür:

$$f^{2025}(b)=b.$$

**Neden doğru?** Uygulama sayısı döngü uzunluğunun tam katıdır.

**Çeldirici notu:** Bir uygulama yapıp $c$ değerinde durmak 2025'in üçe bölümünden kalanı incelemez.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Fonksiyonun çift kısmını simetrik değerler toplamından hesaplama.

**Çözüm:**

$$E(x)=\frac{6x^2+4}{2}=3x^2+2.$$

Bu nedenle $E(1)=3+2=5$ olur.

**Neden doğru?** $f(x)$ ve $f(-x)$ değerlerinin ortalaması fonksiyonun çift kısmını verir.

**Çeldirici notu:** Verilen toplamı ikiye bölmeden kullanmak çift kısım yerine iki katını hesaplar.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Ters fonksiyon değerini özgün fonksiyon eşitliğine dönüştürerek parametre bulma.

**Çözüm:**

$f^{-1}(4)=1$ eşitliği $f(1)=4$ demektir. Buna göre

$$m+2=4 \Rightarrow m=2.$$

**Neden doğru?** Ters eşleme, 4 çıktısının 1 girdisinden geldiğini belirtir.

**Çeldirici notu:** $f^{-1}$ kuralını açıkça bulmaya çalışırken eğimin sıfır olmaması koşulunu gereksiz yere karmaşıklaştırmak işlem hatasına yol açabilir.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Grafikteki bir noktanın yatay öteleme ve düşey yansıma altındaki dönüşümünü bulma.

**Çözüm:**

$f(-2)=3$ veriliyor. $g$ fonksiyonunda $x+1=-2$ olması için $x=-3$ alınır:

$$g(-3)=-f(-2)=-3.$$

Dolayısıyla $(-3,-3)$ noktası $g$ grafiğindedir.

**Neden doğru?** İçteki $x+1$ apsisi bir birim sola, dıştaki eksi işareti ordinatı $x$ eksenine göre yansıtır.

**Çeldirici notu:** Öteleme ve yansımanın ikisini de aynı koordinata uygulamak nokta dönüşümünü bozar.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Bir bağıntının fonksiyon olup olmadığını düşey doğru testiyle değerlendirme.

**Çözüm:**

Çember üzerinde $-3<x<3$ aralığındaki birçok $x$ değeri için biri pozitif, diğeri negatif iki farklı $y$ değeri vardır. Bu nedenle bazı düşey doğrular grafiği iki noktada keser ve bağıntı $y$'yi $x$'in bir fonksiyonu olarak tanımlamaz.

**Neden doğru?** Fonksiyonda her girdi tam olarak bir çıktıyla eşleşmelidir.

**Çeldirici notu:** Grafiğin kapalı olması veya eksenleri kesmesi tek başına fonksiyon olmamasının ölçütü değildir.
