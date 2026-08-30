# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 24 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Kareli bir zemindeki farklı boyutlardaki kareleri sistematik sayma.

**Çözüm:**

Kareler, kenar uzunluklarına göre sayılır. Birim karelerden $4^2=16$, iki birimlik karelerden $3^2=9$, üç birimlik karelerden $2^2=4$ ve dört birimlik karelerden $1$ tane vardır.

$$16+9+4+1=30$$

**Neden doğru?** Her olası kenar uzunluğu ayrı sayıldığı için hiçbir kare atlanmaz veya iki kez sayılmaz.

Bu nedenle doğru cevap D'dir.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Birbirini dışlayan sıralı seçimlerde toplama ve çarpma ilkelerini birlikte kullanma.

**Çözüm:**

İki seçenek aynı anda gerçekleşmediği için sayılar toplanır:

$$P(7,3)+P(7,2)=7\cdot6\cdot5+7\cdot6=210+42=252$$

**Neden doğru?** Üç kitaplı ve iki kitaplı dizilişler ayrık iki durumdur; her durum kendi içinde sıralı sayılıp sonuçlar toplanır.

Doğru cevap E'dir.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Farklı görevlerin dağıtımında tam olarak bir koşulunu kullanma.

**Çözüm:**

Ayşe'nin alacağı görev $4$ biçimde seçilir. Berk ile Ceren'den görev alacak kişi $2$ biçimde, bu kişinin görevi ise kalan $3$ görev arasından seçilir.

Geriye kalan iki göreve, diğer yedi öğrenciden sıralı olarak iki kişi yerleştirilir:

$$4\cdot2\cdot3\cdot P(7,2)=4\cdot2\cdot3\cdot42=1008$$

**Neden doğru?** Ayşe ile Berk-Ceren koşulu önce ayrılıp kalan görevler yalnızca diğer yedi öğrenciye verildiğinden yasak durum sayıma girmez.

Doğru cevap A'dır.

## Soru 4

**Doğru cevap:** B

**Kazanım:** İki sıralı oturma düzeninde belirli bir konum ilişkisini sayma.

**Çözüm:**

Beş sütun arasında $4$ komşu sütun çifti vardır. Her sütun çifti iki farklı çapraz konum verdiğinden Ayşe ile Berk için $8$ konum çifti bulunur. Bu iki kişi seçilen konumlara $2$ farklı sırayla oturabilir. Diğer sekiz öğrenci kalan koltuklara $8!$ biçimde yerleşir.

$$8\cdot2\cdot8!=16\cdot40\,320=645\,120$$

**Neden doğru?** Çapraz konum çifti, Ayşe-Berk sırası ve kalan öğrencilerin dizilişi bağımsız seçimlerdir.

Doğru cevap B'dir.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Sabit ikililere ayrılmış yerlerde blok permütasyonu kullanma.

**Çözüm:**

Altı çift, altı sabit koltuk ikilisine $6!$ biçimde yerleştirilir. Her çift kendi ikilisi içinde $2$ farklı sırada oturabilir.

$$6!\cdot2^6=720\cdot64=46\,080$$

**Neden doğru?** Önce çiftler koltuk ikililerine, sonra her çift kendi içinde yerleştirildiği için tüm düzenler tam bir kez sayılır.

Doğru cevap C'dir.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte komşu olmayan boş yerleri sayma.

**Çözüm:**

Dönmeden kaynaklanan eş düzenleri ayırmak için kişilerden biri sabitlenir. Sabit kişinin dışında kalan sekiz sandalye bir sıra gibi düşünülebilir; bu sıranın iki ucu birbirine komşu değildir. Sekiz yerden birbirine komşu olmayan üç boş yer

$$\binom{8-3+1}{3}=\binom{6}{3}=20$$

biçimde seçilir. Kalan beş kişi $5!$ biçimde oturur:

$$20\cdot5!=20\cdot120=2400$$

**Neden doğru?** Bir kişiyi sabitlemek dönme eşdeğerliğini kaldırır; geriye kalan yol biçimindeki sekiz yerde boşluk koşulu doğrudan uygulanır.

Doğru cevap D'dir.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Tekrarlı harflerin bulunduğu dönüşümlü dizilişleri sayma.

**Çözüm:**

Sözcükte dört sessiz harf $(B,B,L,N)$ ve üç sesli harf $(A,A,A)$ vardır. Dört sessiz ve üç sesli harf dönüşümlü yerleşeceğinden diziliş sessiz harfle başlayıp sessiz harfle bitmek zorundadır.

Sesli harfler özdeştir. Sessiz harflerin sıralanma sayısı

$$\frac{4!}{2!}=12$$

**Neden doğru?** Harf sayıları dizilişin başlangıç ve bitiş türünü zorunlu kılar; yalnızca iki B'nin tekrarı için bölme gerekir.

olduğundan doğru cevap E'dir.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Simetri yoluyla sıralı rakam koşulu taşıyan sayıları sayma.

**Çözüm:**

Ortadaki basamağa $5$ yerleştirilir. Kalan altı basamak, geriye kalan sekiz rakamdan

$$P(8,6)=20\,160$$

biçimde doldurulur. Her dizilişte ilk ve son rakam yer değiştirildiğinde, ilk rakamı son rakamından küçük olan bir sayı ile büyük olan bir sayı eşleşir. Bu nedenle dizilişlerin yarısı istenen koşulu sağlar:

$$\frac{20\,160}{2}=10\,080$$

**Neden doğru?** İlk ve son rakamı yer değiştirme, tüm dizilişleri biri koşulu sağlayan biri sağlamayan eş büyüklükte çiftlere ayırır.

Doğru cevap A'dır.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Alt sınırlı ve bağıntılı özdeş nesne dağıtımlarını sayma.

**Çözüm:**

$Y=2+a$ olsun. Bu durumda $X=4+2a$ olur. Diğer kutulardaki top sayıları $Z=2+b$, $T=2+c$ ve $V=2+d$ biçiminde yazılabilir. Burada $a,b,c,d$ negatif olmayan tam sayılardır.

Toplam top sayısından

$$3a+b+c+d=4$$

elde edilir.

- $a=0$ iken $b+c+d=4$ denkleminin $\binom{6}{2}=15$ çözümü vardır.
- $a=1$ iken $b+c+d=1$ denkleminin $\binom{3}{2}=3$ çözümü vardır.

$a$ daha büyük olamaz. Toplam dağıtım sayısı $15+3=18$ olduğundan doğru cevap B'dir.

**Neden doğru?** En az iki top koşulu değişken dönüşümüne, iki kat ilişkisi de tek denkleme eksiksiz aktarılmıştır.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Adlandırılmamış gruplama ile grup içi sıralı görev seçimini birleştirme.

**Çözüm:**

Takımlar adlandırılmadığı için dörder kişilik iki takım

$$\frac{\binom84}{2}=35$$

biçimde oluşturulur. Her takımda kaptan ve kaptan yardımcısı $4\cdot3=12$ biçimde seçilir. İki takım için bu seçimler bağımsızdır:

$$35\cdot12\cdot12=5040$$

**Neden doğru?** Takımların yer değiştirmesi yeni bir bölünme sayılmaz; buna karşılık her takımdaki iki görev farklıdır.

Doğru cevap C'dir.
