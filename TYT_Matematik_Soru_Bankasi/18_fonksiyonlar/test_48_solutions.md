# Konu 18 — Fonksiyonlar

## Test 48 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Kareli artış içeren fonksiyon bağıntısını ardışık olarak kullanma.

**Çözüm:**

Bağıntıda $x=0,2,4$ yazılır:

$$f(2)=f(0)+0=1,$$
$$f(4)=f(2)+4=5,$$
$$f(6)=f(4)+16=21.$$

**Neden doğru?** Her iki birimlik geçişte artış, o adımdaki girdinin karesidir.

**Çeldirici notu:** $x=6$ yazmak $f(8)$ ile $f(6)$ arasındaki ilişkiyi verir; istenen değeri üretmez.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Paydada bulunan köklü ifadenin sıkı pozitiflik koşulunu belirleme.

**Çözüm:**

Kök paydada olduğundan

$$(x-1)(x+3)>0$$

olmalıdır. Çarpım $x<-3$ veya $x>1$ için pozitiftir. Tanım kümesi

$$(-\infty,-3)\cup(1,\infty)$$

olur.

**Neden doğru?** $-3$ ve 1 kökü sıfır yapar; kök paydada olduğu için bu uçlar alınamaz.

**Çeldirici notu:** Koşulu $\ge0$ yazmak paydayı sıfır yapan iki değeri yanlışlıkla kümeye ekler.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Rasyonel fonksiyonun görüntü kümesini sınır ve erişilebilir uçlarla belirleme.

**Çözüm:**

$x^2+1\ge1$ olduğundan

$$0<\frac2{x^2+1}\le2.$$

Bir çıkarıldığında

$$-1<f(x)\le1$$

elde edilir. Görüntü kümesi $(-1,1]$'dir.

**Neden doğru?** 1 değeri $x=0$ için alınır; $-1$ değerine yaklaşılır ancak ulaşılamaz.

**Çeldirici notu:** Kesrin 0 olabileceğini düşünmek sol ucu yanlış kapatır.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Görüntü kümesinin eleman sayısı kısıtlanan fonksiyonları sayma.

**Çözüm:**

Görüntü kümesinin ikinci elemanı $B\setminus\{1\}$ içinden 4 biçimde seçilir. $b,c,d$ elemanları bu iki görüntüye $2^3$ biçimde gönderilebilir; ancak hepsi 1'e giderse ikinci görüntü kullanılmaz. Bu nedenle

$$4(2^3-1)=4\cdot7=28$$

fonksiyon vardır.

**Neden doğru?** $f(a)=1$ olduğu için 1 zaten kullanılmaktadır; yalnız seçilen ikinci görüntünün en az bir kez kullanılması gerekir.

**Çeldirici notu:** $4\cdot2^3$ hesaplamak ikinci görüntünün hiç kullanılmadığı dört durumu da içerir.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Bileşke değerinden parametre adaylarını bulup işaret koşuluyla seçim yapma.

**Çözüm:**

$f(0)=a$ olduğundan

$$g(f(0))=g(a)=a^2=16.$$

Buradan $a=\pm4$ bulunur. $a<0$ koşulu nedeniyle $a=-4$'tür.

**Neden doğru?** İşaret koşulu iki karekök adayından negatif olanı seçer.

**Çeldirici notu:** $g(0)$ hesaplamak bileşkenin iç fonksiyonunu atlamaktır.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Kesirli fonksiyonun ters değerini çıktı eşitliği üzerinden bulma.

**Çözüm:**

$$f^{-1}(2)=x \Rightarrow \frac{3x+1}{x-2}=2.$$

Buradan $3x+1=2x-4$ ve $x=-5$ elde edilir.

**Neden doğru?** $-5$ tanım kümesindedir ve fonksiyonda yerine yazıldığında 2 çıktısını verir.

**Çeldirici notu:** Pay ile paydayı yer değiştirmek fonksiyon tersini oluşturmaz.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Simetrik fonksiyon değerleri toplamını verilen bağıntıdan okuma.

**Çözüm:**

Bağıntıda $x=3$ yazılır:

$$f(3)+f(-3)=2\cdot3^2+6=18+6=24.$$

**Neden doğru?** İstenen toplam bağıntının sol tarafıyla doğrudan aynıdır.

**Çeldirici notu:** $x=-3$ için ayrıca işlem yapmak aynı toplamı yeniden üretir; iki sonucu toplamak değeri iki katına çıkarır.

## Soru 8

**Doğru cevap:** E

**Kazanım:** İki mutlak değerli fonksiyon denklemini kritik noktalara göre çözme.

**Çözüm:**

$-2\le x\le2$ için toplam sürekli 4'tür ve çözüm yoktur. $x>2$ için $f(x)=2x$ olup $x=3$; $x<-2$ için $f(x)=-2x$ olup $x=-3$ bulunur. İki çözüm vardır.

**Neden doğru?** Her dış bölgede bir çözüm oluşur; orta bölgede değer 6'ya ulaşmaz.

**Çeldirici notu:** Mutlak değerleri tek bir mutlak değer içinde birleştirmek kritik noktalar arasındaki sabit bölgeyi kaybettirir.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Bire bir fonksiyonda eşit çıktılardan eşit girdilere geçerek kökler toplamını bulma.

**Çözüm:**

$$a^2-2a=4a+3 \Rightarrow a^2-6a-3=0.$$

Bu denklemin kökler toplamı 6'dır.

**Neden doğru?** Bire birlik aynı görüntülerin girdilerini eşitlemeye izin verir.

**Çeldirici notu:** Fonksiyonun açık kuralını aramak, soruda verilen bire birlik bilgisinin asıl rolünü kaçırır.

## Soru 10

**Doğru cevap:** B

**Kazanım:** İki doğrusal fonksiyonun eşitlik noktasını cebirsel ve grafiksel olarak yorumlama.

**Çözüm:**

Planların ücretleri eşitlenir:

$$80+4x=20+7x.$$

Buradan $60=3x$ ve $x=20$ bulunur. Grafikteki kesişim noktası da aynı giriş sayısını gösterir.

**Neden doğru?** Doğruların kesiştiği noktada aynı $x$ girdisi için iki fonksiyonun çıktıları eşittir.

**Çeldirici notu:** Düşey eksen değerini cevap olarak almak giriş sayısı ile ücreti karıştırır.
