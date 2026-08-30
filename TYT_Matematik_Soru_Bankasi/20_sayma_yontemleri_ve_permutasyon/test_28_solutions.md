# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 28 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Tür koşulu taşıyan seçimi, seçilen nesnelerin sıralanmasıyla birleştirme.

**Çözüm:**

İki matematik kitabı $\binom62=15$, bir fizik kitabı $\binom51=5$ biçimde seçilir. Seçilen üç farklı kitap $3!=6$ biçimde sıralanır:

$$\binom62\binom51 3!=15\cdot5\cdot6=450$$

**Neden doğru?** Önce kitap kümesi belirlenir, ardından aynı kümenin farklı raf sıraları ayrı sonuçlar olarak sayılır.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Tekrarlı nesne dizilişini uçlardaki renge göre durumlara ayırma.

**Çözüm:**

Uçlar kırmızı ise ortada bir kırmızı, iki mavi ve iki beyaz kalır:

$$\frac{5!}{2!2!}=30$$

Uçlar mavi ise ortada üç kırmızı ve iki beyaz kalır; diziliş sayısı $\frac{5!}{3!2!}=10$'dur. Uçların beyaz olduğu durumda da aynı biçimde $10$ diziliş vardır.

$$30+10+10=50$$

**Neden doğru?** Uçların rengi üç ayrık durum oluşturur ve her durumda kalan renk çoklukları tekrarlı permütasyonla sayılır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Dairesel dizilişte art arda gelmesi gereken kişileri blok olarak ele alma.

**Çözüm:**

Ayşe, Berk ve Ceren tek bir blok kabul edilir. Bu blok ile diğer üç kişi olmak üzere dört birim masa çevresine

$$(4-1)!=6$$

biçimde yerleşir. Üç kişi blok içinde $3!=6$ biçimde sıralanır:

$$6\cdot6=36$$

**Neden doğru?** Blok yöntemi, üç özel kişinin masa çevresindeki ardışık sandalyelerde bulunmasını otomatik olarak sağlar.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Farklı ve özdeş görevleri aynı seçimde birlikte sayma.

**Çözüm:**

Başkan $9$ biçimde seçilir. Başkanın dışında kalan sekiz öğrenciden aynı yetkiye sahip iki kurul üyesi $\binom82=28$ biçimde seçilir:

$$9\cdot28=252$$

**Neden doğru?** İki kurul üyesinin görevleri eş değerli olduğu için kendi aralarındaki sıra yeni bir seçim oluşturmaz.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Tek ve çift rakamların dönüşümlü dizilişlerini başlangıç türüne göre sayma.

**Çözüm:**

Dört tek ve dört çift rakam vardır. Altı basamakta üç tek ve üç çift rakam kullanılmalıdır. Sayı tek rakamla ya da çift rakamla başlayabilir. Her durumda kullanılacak üç tek rakam sıralı olarak $P(4,3)=24$, üç çift rakam da $24$ biçimde seçilir:

$$2\cdot24\cdot24=1152$$

**Neden doğru?** Rakam kümelerinde sıfır bulunmadığından iki başlangıç türü için de ilk basamak kısıtı oluşmaz.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Özdeş nesnelerin etiketli kutulara üst sınırlı dağıtımını tamamlayıcı değişkenlerle sayma.

**Çözüm:**

Kutulardaki top sayıları $x_1,x_2,x_3$ olsun. Her kutuda en fazla beş top bulunduğundan $y_i=5-x_i$ negatif olmayan tam sayıdır. Toplamdan

$$y_1+y_2+y_3=15-12=3$$

elde edilir. Bu denklemin çözüm sayısı

$$\binom{3+3-1}{3-1}=\binom52=10$$

olur.

**Neden doğru?** $y_i$ toplamı yalnızca $3$ olduğundan $y_i\leq5$ koşulu kendiliğinden sağlanır ve dönüşüm bire birdir.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Çember içindeki iki köşegenin kesişimini dört nokta seçimiyle eşleştirme.

**Çözüm:**

Çember üzerindeki her dört nokta bir dörtgen belirler ve bu dörtgenin iki köşegeni çemberin içinde bir kez kesişir. Üç köşegenin aynı iç noktada kesişmediği verildiğinden farklı dört nokta seçimleri farklı kesişim noktaları verir:

$$\binom84=70$$

**Neden doğru?** Her iç kesişim noktası da uçları çember üzerinde olan iki kirişten, yani tek bir dört nokta kümesinden oluşur.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Bölünebilme ve ilk basamak kısıtlarını son basamağa göre ayırarak sayma.

**Çözüm:**

Son basamak $0$ ise ilk basamak $1$–$6$ arasından $6$, ortadaki iki basamak kalan beş rakamdan sıralı olarak $P(5,2)=20$ biçimde seçilir. Bu durumda $120$ sayı vardır.

Son basamak $5$ ise ilk basamak sıfır ve $5$ dışında $5$ biçimde, ortadaki iki basamak kalan beş rakamdan $20$ biçimde seçilir. Bu durumda $100$ sayı vardır.

$$120+100=220$$

**Neden doğru?** $5$ ile bölünebilme son rakamı yalnızca $0$ veya $5$ yapar; iki durumdaki ilk basamak seçenekleri farklıdır.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Farklı büyüklükte adlandırılmamış gruplara ayırma.

**Çözüm:**

İki kişilik grup $\binom92$, ardından üç kişilik grup kalan yedi kişiden $\binom73$ biçimde seçilir. Kalan dört kişi son grubu oluşturur:

$$\binom92\binom73=36\cdot35=1260$$

**Neden doğru?** Grup büyüklükleri farklı olduğu için gruplar büyüklükleriyle zaten ayırt edilir; ayrıca bir sıralama ya da bölme işlemi gerekmez.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Uç koşulu taşıyan ikili dizilerde kalan basamakları kombinasyonla belirleme.

**Çözüm:**

İlk ve son basamak için $(1,0)$ veya $(0,1)$ olmak üzere iki seçenek vardır. Böylece uçlarda bir tane $1$ kullanılmış olur. Ortadaki altı basamağa kalan üç tane $1$

$$\binom63=20$$

biçimde yerleştirilir:

$$2\cdot20=40$$

**Neden doğru?** Sıfırların yerleri, birlerin seçilen konumları belirlendiğinde otomatik olarak oluşur.
