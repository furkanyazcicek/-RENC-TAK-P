# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 34 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Kesin azalan rakam koşulunda seçimin sıralamayı tek olarak belirlediğini kullanma.

**Çözüm:**

On rakamdan dördü seçildiğinde bu rakamların azalan sırası yalnız bir tanedir. En büyük seçilen rakam ilk basamakta bulunacağından sıfırın seçilmiş olması da başta sıfır oluşturmaz. Bu nedenle

$$\binom{10}{4}=210$$

sayı yazılabilir.

**Neden doğru?** Dört farklı rakamın kesin azalan dizilişi tek olduğundan ayrıca bir permütasyon çarpanı kullanılmaz.

## Soru 2

**Doğru cevap:** E

**Kazanım:** İç konumlarda bulunan iki kişinin göreli sırasını konum seçimiyle sayma.

**Çözüm:**

Ayşe ile Berk'in konumları ortadaki altı konumdan seçilir. Ayşe'nin solda olması gerektiği için seçilen her konum çifti tek bir sıraya sahiptir:

$$\binom62=15$$

Kalan altı kişi boş konumlara $6!$ biçimde yerleşir:

$$15\cdot6!=15\cdot720=10\,800$$

**Neden doğru?** Konum çifti küçükten büyüğe Ayşe ve Berk'e verildiği için ayrıca ikiyle çarpılmaz.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Çembersel sırada komşu olmayan belirli sayıda köşe seçme.

**Çözüm:**

$n$ çembersel konumdan komşu olmayan $r$ konum seçme sayısı

$$\frac{n}{n-r}\binom{n-r}{r}$$

biçimindedir. $n=9$ ve $r=4$ için

$$\frac95\binom54=9$$

elde edilir.

**Neden doğru?** Dokuzgenin ilk ve son diye ayrılan köşeleri de komşu olduğundan doğrusal seçim sayısına çembersel düzeltme uygulanır.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Birden fazla ardışıklık koşulunda sabit ve değişebilir blok içi sıraları ayırt etme.

**Çözüm:**

**ABC** sırası sabit bir bloktur. $D$ ile $E$ ikinci bir blok oluşturur ve kendi aralarında $2$ biçimde sıralanabilir. Bu iki blokla kalan dört görev toplam altı birim oluşturur:

$$6!\cdot2=720\cdot2=1440$$

**Neden doğru?** İlk blok içindeki sıra soruda sabitlenmişken ikinci blok için iki olası iç sıra vardır.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Adlandırılmamış ikili gruplamalarda belirli bir eşleşmeyi tüm durumdan çıkarma.

**Çözüm:**

Altı kişinin ikililere ayrılma sayısı

$$\frac{6!}{2^3\cdot3!}=15$$

tir. Ayşe ile Berk aynı ikilideyse kalan dört kişi $3$ farklı biçimde iki ikiliye ayrılır. Bu nedenle

$$15-3=12$$

uygun gruplama vardır.

**Neden doğru?** Ayşe ile Berk'in birlikte ve ayrı olduğu durumlar tüm eşleşmeleri ayrık biçimde oluşturur.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Tam olarak bir sabit noktalı permütasyonu sabit kişi seçimi ve düzensiz permütasyonla sayma.

**Çözüm:**

Kendi kitabını alacak tek kişi $5$ biçimde seçilir. Geriye kalan dört kişinin hiçbiri kendi kitabını almamalıdır. Dört elemanın sabit noktasız permütasyon sayısı $!4=9$ olduğundan

$$5\cdot9=45$$

dağıtım vardır.

**Neden doğru?** Sabit kişi seçildikten sonra kalan dağıtımda başka bir doğru eşleşmeye izin verilmemesi “tam olarak bir” koşulunu sağlar.

## Soru 7

**Doğru cevap:** E

**Kazanım:** İki özel kişinin farklı etiketli gruplarda bulunduğu eş büyüklükte takım dağılımını sayma.

**Çözüm:**

Ayşe'nin takımı $2$ biçimde seçilir; Berk diğer takımda olmak zorundadır. Ayşe'nin takımındaki kalan üç kişi, diğer altı öğrenciden

$$\binom63=20$$

biçimde seçilir. Geriye kalan üç kişi Berk'in takımını tamamlar:

$$2\cdot20=40$$

**Neden doğru?** Takımlar adlandırıldığı için Ayşe'nin Kırmızı veya Mavi takımda olması farklı dağılımlardır.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Bir alt grubun göreli sırası sabit olan permütasyonları simetriyle sayma.

**Çözüm:**

Altı farklı rakamın $6!=720$ dizilişi vardır. Tek rakamlar $1,3,5$ kendi aralarında $3!$ farklı göreli sırada bulunabilir ve bunlardan yalnız biri artan sıradır:

$$\frac{6!}{3!}=120$$

**Neden doğru?** Çift rakamların yerleri ve sıraları serbest kalırken tek rakamların göreli sırası tek seçeneğe indirilir.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Alt sınırlı özdeş nesne dağıtımında başlangıç paylaştırması yapma.

**Çözüm:**

Her kutuya önce üçer top verilirse $12$ top kullanılır ve geriye üç top kalır. Kalan üç özdeş top dört kutuya negatif olmayan miktarlarda

$$\binom{3+4-1}{4-1}=\binom63=20$$

biçimde dağıtılır.

**Neden doğru?** İlk paylaştırma alt sınırı karşılar; geriye kalan dağıtımda ek bir kısıt yoktur.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Sabit uçlar ve yasak orta konum koşullarını birlikte sayma.

**Çözüm:**

$A$ ve $B$ kitapları iki uca $2$ farklı sırada yerleşir. $C$ kitabı geriye kalan beş iç konumun ortadaki hariç dördünden birine yerleşir. Diğer dört kitap kalan yerlere $4!$ biçimde dizilir:

$$2\cdot4\cdot4!=2\cdot4\cdot24=192$$

**Neden doğru?** Uçlar dolduktan sonra $C$ için yalnız dört uygun iç konum kalır; diğer kitapların sırası tamamen serbesttir.
