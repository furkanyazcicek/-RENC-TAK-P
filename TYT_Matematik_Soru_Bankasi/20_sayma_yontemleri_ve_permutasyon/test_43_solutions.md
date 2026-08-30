# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 43 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Blok, göreli sıra ve uçta bulunmama koşullarını birlikte kullanma.

**Çözüm:**

A–B–C sırası değişmeyen tek bir blok kabul edilir. Bu blokla birlikte toplam 7 birim vardır ve kısıtsız diziliş sayısı $7!=5040$'tır.

D'nin uçlardan birinde bulunduğu $2\cdot6!$, E'nin uçlardan birinde bulunduğu $2\cdot6!$ diziliş vardır. D ile E iki ucu birlikte doldurursa $2!\cdot5!$ diziliş elde edilir. İçerme-dışlama ilkesiyle

$$7!-2\cdot6!-2\cdot6!+2!\cdot5!=5040-2880+240=2400$$

olur.

**Neden doğru?** A–B–C bloğunun iç sırası sabit tutulmuş, D ve E'nin uçta olduğu durumlar tüm dizilişlerden eksiksiz çıkarılmıştır.

**Çeldirici notu:** D ile E'nin iki ucu birlikte doldurduğu dizilişler iki kez çıkarıldığı için geri eklenmelidir.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Yasaklı hücreler altında satır-sütun çakışmasız yerleştirmeleri içerme-dışlama ile sayma.

**Çözüm:**

Her satır için farklı bir sütun seçilmesinin kısıtsız sayısı $P(5,4)=120$'dir. Dört boyalı hücrenin en az birinin kullanıldığı yerleşimler içerme-dışlama ile ayıklanır:

$$P(5,4)-\binom41P(4,3)+\binom42P(3,2)-\binom43P(2,1)+\binom44$$

$$=120-4\cdot24+6\cdot6-4\cdot2+1=53$$

**Neden doğru?** Seçilen her boyalı hücre bir satırı ve bir sütunu sabitlediğinden kalan taşlar, kalan sütunlara bire bir yerleştirilmiştir.

**Çeldirici notu:** Her satırdan yalnız bir seçeneği çıkarmak yeterli değildir; yasaklı hücrelerin birlikte kullanıldığı durumlar tekrar hesaba katılmalıdır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Tek düşüş içeren permütasyonları iki artan parçaya ayırarak sayma.

**Çözüm:**

Diziliş, düşüşün bulunduğu yerden iki parçaya ayrıldığında her parçanın kendi içinde artan olması gerekir. İlk parçada bulunacak sayılar boş olmayan ve tüm kümeyi içermeyen bir alt küme olarak seçildiğinde iki parçanın sırası tek biçimde belirlenir. Böyle $2^5-2=30$ seçim vardır.

Ancak ilk parça $\{1\}$, $\{1,2\}$, $\{1,2,3\}$ veya $\{1,2,3,4\}$ olduğunda parçaların arasında da düşüş oluşmaz; bütün dizi artan olur. Bu dört durum çıkarılır:

$$30-4=26$$

**Neden doğru?** Tam bir düşüş bulunan her diziliş, düşüş noktasından ayrılan iki artan parçanın eleman kümeleriyle bire bir eşleşir.

**Çeldirici notu:** Her uygun alt küme sınırda düşüş oluşturmaz; ilk küçük sayıların tamamını içeren dört alt küme artan diziyi tekrar üretir.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Sabit büyüklükte adlandırılmış gruplarda birlikte ve ayrı bulunma koşullarını uygulama.

**Çözüm:**

A ile B'nin bulunacağı takım 3, bu takımdaki üçüncü kişi 7 biçimde seçilir. Kalan altı kişi diğer iki takıma $\binom63=20$ biçimde dağıtılır. A ile B'nin aynı takımda olduğu toplam $3\cdot7\cdot20=420$ dağılım vardır.

C ile D'nin de aynı takımda olduğu durumlarda A–B takımının üçüncü kişisi C ve D dışındaki 5 kişiden seçilmelidir. C–D takımının hangisi olduğu 2, yanlarındaki üçüncü kişi kalan 4 kişiden biri olarak seçilir:

$$3\cdot5\cdot2\cdot4=120$$

İstenen sayı $420-120=300$'dür.

**Neden doğru?** Önce A–B koşulunu sağlayan bütün dağılımlar sayılmış, bunların içinden C ile D'nin aynı takımda olduğu dağılımlar çıkarılmıştır.

**Çeldirici notu:** A–B takımına C veya D alınırsa C ile D zaten farklı takımlarda olur; bu durumlar çıkarılmamalıdır.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Üst sınır içeren negatif olmayan tam sayı çözümlerini tümleyenle sayma.

**Çözüm:**

Üst sınır dikkate alınmadan negatif olmayan çözüm sayısı

$$\binom{12+3-1}{3-1}=\binom{14}{2}=91$$

dir. $x\geq5$ olan geçersiz çözümlerde $x'=x-5$ yazılır ve

$$x'+y+z=7$$

elde edilir. Bu denklemin $\binom92=36$ negatif olmayan çözümü vardır. Dolayısıyla

$$91-36=55$$

uygun üçlü bulunur.

**Neden doğru?** $x\geq5$ çözümleri ile yeni denklemin negatif olmayan çözümleri bire bir eşleştiğinden çıkarma bütün üst sınır ihlallerini kapsar.

**Çeldirici notu:** $x$ için beş olası değeri seçip $y$ ile $z$ çözümlerinin her değerde değiştiğini gözden kaçırmamak gerekir.

## Soru 6

**Doğru cevap:** C

**Kazanım:** En küçük ve en büyük eleman farkı sabit olan alt kümeleri sayma.

**Çözüm:**

En küçük sayı $m$ ise en büyük sayı $m+6$ olmalıdır. Her iki sayının da kümede bulunması için $m=1,2,3,4$ olabilir; yani 4 seçenek vardır.

Uçlar belirlendiğinde aradaki beş sayıdan ikisi seçilir:

$$4\binom52=4\cdot10=40$$

**Neden doğru?** Her seçim en küçük elemanı tarafından tek bir duruma ait olduğundan farklı $m$ değerlerinde tekrar sayım oluşmaz.

**Çeldirici notu:** Uçlar arasından dört sayı seçmek, farkı 6 yapan en küçük ve en büyük sayıların seçilmesini garanti etmez.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Seçilen sayıların toplam paritesini tek-çift durumlarıyla sayma.

**Çözüm:**

Kümede dört tek ve dört çift sayı vardır. Üç sayının toplamı iki durumda çift olur:

- Üçü de çifttir: $\binom43=4$ seçim.
- İkisi tek, biri çifttir: $\binom42\binom41=6\cdot4=24$ seçim.

Toplam $4+24=28$ seçim vardır.

**Neden doğru?** Üç terimin toplamı ancak tek sayı adedi 0 veya 2 olduğunda çifttir; iki durum ayrık ve eksiksizdir.

**Çeldirici notu:** Bir tek ile iki çift sayının toplamı tek olduğundan bu durum uygun değildir.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Dairesel dizilişte karşılıklılık ve yan yana gelmeme koşullarını tümleyenle sayma.

**Çözüm:**

C sabitlenir, D'nin karşısındaki yeri belirlenir. Kalan altı kişi boş altı konuma $6!=720$ biçimde oturabilir.

Boş konumlar, üçer konumluk iki ayrı sıra oluşturur. Bu sıralarda toplam dört komşu konum çifti vardır. A ile B'nin yan yana olduğu düzen sayısı

$$4\cdot2\cdot4!=192$$

dir. Bu düzenler çıkarılır:

$$720-192=528$$

**Neden doğru?** C ile D'nin bulunduğu konumların iki yanındaki koltuklar birbirine komşu değildir; yalnız tamamı boş dört masa kenarı A–B çifti için kullanılabilir.

**Çeldirici notu:** Çemberdeki sekiz komşu çiftin tümünü kullanmak C veya D'nin dolu konumlarını da A–B çifti için seçer.

## Soru 9

**Doğru cevap:** A

**Kazanım:** İki renkli doğrusal dizilerde renk geçişlerinin yerlerini sayma.

**Çözüm:**

Sekiz kare arasında rengin değişebileceği 7 sınır vardır. Renk değişiminin olacağı üç sınır $\binom73$ biçimde seçilir. İlk karenin rengi kırmızı veya mavi olmak üzere 2 biçimde belirlendiğinde diğer bütün renkler zorunlu olarak oluşur.

$$2\binom73=2\cdot35=70$$

**Neden doğru?** Başlangıç rengi ve geçiş sınırları, sekiz karenin renk dizisini tek biçimde belirler.

**Çeldirici notu:** Dört renk bloğunu ayrıca sıralamak gerekmez; blokların renkleri başlangıç renginden sonra dönüşümlü ilerler.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Tamamlayıcı iki durumu yer değiştirme simetrisiyle eşleştirerek sayma.

**Çözüm:**

Altı rakamın tüm diziliş sayısı $6!=720$'dir. Bütün rakamların toplamı 21 olduğundan ilk üç basamağın toplamı ile son üç basamağın toplamı eşit olamaz.

Her dizilişin ilk üç ve son üç basamaklı bölümleri yer değiştirildiğinde “ilk toplam büyük” durumu “son toplam büyük” durumuna dönüşür. Bu iki durum eşit sayıda olduğundan

$$\frac{720}{2}=360$$

sayı istenen koşulu sağlar.

**Neden doğru?** Bölümleri yer değiştirme işlemi geçerli sayıları ikişerli eşler ve eşit toplamlı sabit bir durum bulunmaz.

**Çeldirici notu:** İlk üç basamağa gelecek rakamları seçtikten sonra her iki üçlü içindeki $3!$ sıralamaları hesaba katılmalıdır.
