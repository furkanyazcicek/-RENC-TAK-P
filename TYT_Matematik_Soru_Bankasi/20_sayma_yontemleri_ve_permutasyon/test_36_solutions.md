# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 36 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** İki bölümde sıralama yönü sabit olduğunda eleman seçiminin tüm dizilişi belirlediğini kullanma.

**Çözüm:**

İlk dört konumda bulunacak sayılar sekiz sayı arasından

$$\binom84=70$$

biçimde seçilir. Bu dört sayı artan sırada tek biçimde, geriye kalan dört sayı da son bölümde azalan sırada tek biçimde yerleşir.

**Neden doğru?** İlk bölümün sayı kümesi belirlendiğinde her iki bölümün iç sırası da koşullar tarafından zorunlu olarak belirlenir.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Dairesel düzende karşıtlık koşulu altında başka bir çiftin komşu olmamasını sayma.

**Çözüm:**

Ceren sabitlenir ve Deniz karşısına yerleşir. Kalan dört kişi için dört boş sandalye vardır ve toplam $4!=24$ yerleşim yapılabilir. Boş sandalyeler içinde Ayşe ile Berk'in yan yana olabileceği iki sandalye çifti vardır. Bu çift, Ayşe–Berk sırası ve kalan iki kişinin sırası

$$2\cdot2\cdot2!=8$$

yasak yerleşim oluşturur. İstenen sayı

$$24-8=16$$

dır.

**Neden doğru?** Ceren ve Deniz'in sandalyeleri boş konumları iki ayrı ikili komşuluk bölgesine ayırır.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Belirli toplamı veren farklı elemanlı alt kümeleri sistematik belirleme.

**Çözüm:**

Toplamı $12$ olan üçlüler

$$\{1,3,8\},\{1,4,7\},\{1,5,6\},$$
$$\{2,3,7\},\{2,4,6\},\{3,4,5\}$$

olmak üzere altı tanedir.

**Neden doğru?** En küçük eleman sırasıyla $1,2,3$ alınarak diğer iki eleman artan sırada tarandığında bütün olasılıklar bir kez elde edilir.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Ayrık eleman çiftlerine ait bağımsız göreli sıra koşullarını simetriyle sayma.

**Çözüm:**

Yedi görevin kısıtlamasız sıralanma sayısı $7!=5040$'tır. Her görev çifti için istenen önce–sonra sırası, sıralamaların yarısında gerçekleşir. Üç çift birbirinden ayrık olduğundan

$$\frac{7!}{2^3}=\frac{5040}{8}=630$$

olur.

**Neden doğru?** Her çiftin iki elemanını yer değiştirmek, diğer iki koşulu bozmadan yalnız o çiftin göreli sırasını tersine çevirir.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Sıralı derece seçiminde dışarıda bırakılan kişileri aday kümesinden çıkarma.

**Çözüm:**

Ayşe ile Berk madalya almayacağı için üç farklı madalya kalan sekiz koşucuya verilir:

$$P(8,3)=8\cdot7\cdot6=336$$

**Neden doğru?** Altın, gümüş ve bronz madalyalar farklı olduğundan seçilen üç koşucunun sırası önemlidir.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Tekrarlı harfli bir sözcükte belirli türdeki harfleri blok olarak yerleştirme.

**Çözüm:**

Sesli harfler $A,A,E,İ$ tek bir blok kabul edilir. Bu blokla birlikte sessiz harfler $M,M,T,T,K$ olmak üzere altı nesne vardır. Dış diziliş sayısı

$$\frac{6!}{2!2!}=180$$

dir. Sesli harfler blok içinde

$$\frac{4!}{2!}=12$$

biçimde sıralanır:

$$180\cdot12=2160$$

**Neden doğru?** İki M, iki T ve iki A kendi türleri içinde özdeş olduğundan ilgili faktöriyellere bölünür.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Alt sınırlı özdeş nesne dağıtımını başlangıç paylaştırmasıyla sayma.

**Çözüm:**

Her kutuya önce ikişer top verildiğinde on top kullanılır ve geriye iki özdeş top kalır. Bu iki top beş kutuya

$$\binom{2+5-1}{5-1}=\binom64=15$$

biçimde dağıtılır.

**Neden doğru?** İlk dağıtım bütün alt sınırları sağlar; kalan toplar için başka kısıt yoktur.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Bir kişinin belirli bir görevi alamadığı kurul ve görev seçimlerini doğrudan sayma.

**Çözüm:**

Başkan Ayşe olamayacağı için diğer altı öğrenciden $6$ biçimde seçilir. Başkan seçildikten sonra kurulun diğer iki üyesi kalan altı öğrenciden

$$\binom62=15$$

biçimde seçilir:

$$6\cdot15=90$$

**Neden doğru?** Ayşe kurul üyesi olabilir; yasak yalnız başkanlık göreviyle ilgilidir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Tekrarlı iki renkli dizilişte uçların rengini durumlara ayırma.

**Çözüm:**

İki uç kırmızı ise ortadaki altı konuma iki kırmızı yerleştirilir:

$$\binom62=15$$

İki uç mavi olduğunda da ortadaki altı konuma dört kırmızı $\binom64=15$ biçimde yerleşir. Toplam

$$15+15=30$$

olur.

**Neden doğru?** Uçların kırmızı ve mavi olduğu durumlar ayrık, renkler kendi içlerinde özdeştir.

## Soru 10

**Doğru cevap:** E

**Kazanım:** İki farklı yasak konumu içerme-dışlama ilkesiyle sayma.

**Çözüm:**

Toplam $6!=720$ diziliş vardır. $A$ ilk sıradaysa $5!=120$, $B$ son sıradaysa yine $120$ diziliş yasaktır. Her iki yasağın birlikte gerçekleştiği $4!=24$ diziliş iki kez çıkarıldığı için geri eklenir:

$$720-120-120+24=504$$

**Neden doğru?** İçerme-dışlama, iki yasak konumun kesişimini doğru çoklukta hesaba katar.
