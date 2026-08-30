# Konu 18 — Fonksiyonlar

## Test 15 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Bazı görüntüleri sabitlenmiş sonlu küme fonksiyonlarını sayma.

**Çözüm:**

$f(1)$ ve $f(2)$ görüntüleri verilmiştir. Geriye kalan 3 ve 4 elemanlarının her biri $B$'deki üç elemandan herhangi birine gönderilebilir.

$$3\cdot3=9$$

**Neden doğru?** Soruda bire birlik veya örtenlik koşulu bulunmadığından iki serbest girdi için seçimler birbirinden bağımsızdır.

**Çeldirici notu:** Aynı görüntünün tekrar kullanılamayacağını varsaymak, soruda bulunmayan bire birlik koşulunu eklemek olur.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Fonksiyonel eşitlikte uygun girdi seçerek fonksiyon değeri bulma.

**Çözüm:**

Eşitlikte $x=0$ yazılır:

$$f(0)+f(0)=6.$$

Buradan $2f(0)=6$ ve $f(0)=3$ bulunur.

**Neden doğru?** $-0=0$ olduğundan eşitliğin solundaki iki terim aynı fonksiyon değeridir.

**Çeldirici notu:** Sağ taraftaki 6'yı doğrudan $f(0)$ kabul etmek iki eş terimin toplamını gözden kaçırır.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Rasyonel bir iç fonksiyonla kurulan köklü bileşkenin tanım kümesini işaret incelemesiyle bulma.

**Çözüm:**

Kök içi negatif olamaz:

$$\frac{1}{x-1}+2\ge0 \Rightarrow \frac{2x-1}{x-1}\ge0.$$

Kritik değerler $x=\tfrac12$ ve $x=1$'dir. İşaret incelemesi sonucu ifade $x\le\tfrac12$ veya $x>1$ için sıfır ya da pozitiftir. $x=1$ tanımsızdır.

**Neden doğru?** Tanım kümesi $(-\infty,\tfrac12]\cup(1,\infty)$ olur; kök içini sıfır yapan $\tfrac12$ dâhildir.

**Çeldirici notu:** Payda içeren eşitsizlikte iki tarafı $x-1$ ile doğrudan çarpmak, işarete göre yön değişimini kaçırabilir.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Tablo üzerinden ters görüntü ve ardından fonksiyon değeri hesaplama.

**Çözüm:**

İlk tabloda $f(3)=2$ olduğundan $f^{-1}(2)=3$'tür. İkinci tablodan $g(3)=5$ okunur.

$$g(f^{-1}(2))=g(3)=5.$$

**Neden doğru?** İşlemler içten dışa yapılmış ve ters görüntü, tabloda çıktısı 2 olan girdi olarak okunmuştur.

**Çeldirici notu:** $f^{-1}(2)$ yerine $f(2)$ aramak ters fonksiyonun girdi–çıktı değişimini gözden kaçırır.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Rasyonel bir fonksiyonun görüntü kümesini sınır değerleri üzerinden belirleme.

**Çözüm:**

$x^2+1\ge1$ olduğundan

$$0<\frac{2}{x^2+1}\le2.$$

Bu ifade 3'ten çıkarıldığında

$$1\le f(x)<3$$

elde edilir. $x=0$ için 1 alınır; ancak kesir hiçbir gerçek $x$ için sıfır olamayacağından 3 alınamaz.

**Neden doğru?** Alt sınır dâhil, üst sınır hariçtir; görüntü kümesi $[1,3)$ olur.

**Çeldirici notu:** $x$ büyüdükçe fonksiyon 3'e yaklaşır fakat hiçbir sonlu gerçek girdide 3 olmaz.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Grafik ötelemesini fonksiyon kuralına aktarıp sıfırları bulma.

**Çözüm:**

Grafiğin 2 birim sola ötelenmesi $x$ yerine $x+2$ yazılmasıyla gösterilir:

$$g(x)=f(x+2)=(x+2)^2-1.$$

$g(x)=0$ için $x+2=\pm1$ olur. Kökler $-3$ ve $-1$ olduğundan toplamları $-4$'tür.

**Neden doğru?** Öteleme yönü ile cebirsel değişim doğru eşleştirilmiştir.

**Çeldirici notu:** Sola ötelemede $x-2$ yazmak grafiği ters yönde taşır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Bileşke fonksiyonun tersinde işlem sırasının tersine döndüğünü kullanma.

**Çözüm:**

$$ (f\circ g)^{-1}=g^{-1}\circ f^{-1} $$

olduğundan

$$ (f\circ g)^{-1}(4)=g^{-1}(f^{-1}(4))=g^{-1}(2)=5.$$

**Neden doğru?** Asıl bileşkede önce $g$, sonra $f$ uygulandığı için ters işlemde önce $f^{-1}$, sonra $g^{-1}$ uygulanır.

**Çeldirici notu:** Tersleri $f^{-1}\circ g^{-1}$ sırasında uygulamak bileşke sırasının tersine döndüğünü unutmak olur.

## Soru 8

**Doğru cevap:** B

**Kazanım:** İki mutlak değer toplamının parçalı davranışını kritik noktalar üzerinden inceleme.

**Çözüm:**

Kritik noktalar $-1$ ve 2'dir. $-1\le x\le2$ için

$$|x-2|=2-x, \qquad |x+1|=x+1$$

olur. Böylece $h(x)=3$ sabittir.

**Neden doğru?** Bu aralıkta iki sabit noktaya olan uzaklıkların toplamı değişmez.

**Çeldirici notu:** Kritik noktaları yalnız işaret değişimi olarak görmek, aralarındaki sabit toplam ilişkisini kaçırabilir.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Doğrusal fonksiyonun kesin azalan olma koşulunu eğim üzerinden belirleme.

**Çözüm:**

Kesin azalan doğrusal fonksiyonun eğimi negatiftir:

$$2m-3<0 \Rightarrow 2m<3 \Rightarrow m<\frac32.$$

**Neden doğru?** Eğim sıfır olursa fonksiyon sabit olur; bu nedenle eşitlik durumu alınmaz.

**Çeldirici notu:** $m\le\tfrac32$ seçeneği sabit fonksiyon oluşturan sınır değerini de içerir.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Sonlu bir kümede öz-ters ve bire bir fonksiyonun eksik eşlemesini belirleme.

**Çözüm:**

Şemada 1 ile 3 birbirine gönderilmekte ve 2 kendisine gitmektedir. Bire birlik nedeniyle 1, 2 ve 3 artık 4'ün görüntüsü olamaz. Geriye yalnız 4 kalır; dolayısıyla $f(4)=4$'tür. Bu eşleme ayrıca $f(f(4))=4$ koşulunu sağlar.

**Neden doğru?** Hem bire birlik hem de öz-terslik koşulları tamamlanan eşlemede korunur.

**Çeldirici notu:** 4'ü daha önce görüntü olarak kullanılan bir elemana göndermek bire birliği bozar.
