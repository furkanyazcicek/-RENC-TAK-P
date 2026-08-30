# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 25 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Belirli bir noktadan geçen en kısa yolları iki bağımsız yol parçası olarak sayma.

**Çözüm:**

$A$'dan $C$'ye giderken iki sağ ve bir yukarı adımın sırası $\binom31=3$ biçimde seçilir. $C$'den $B$'ye üç sağ ve iki yukarı adım kaldığından bu bölümde $\binom52=10$ yol vardır.

$$3\cdot10=30$$

**Neden doğru?** $C$'den geçme koşulu yolu iki ardışık parçaya ayırır; her ilk parça her ikinci parçayla eşleşebilir.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Bir permütasyonda sabit kalan eleman sayısına ilişkin olanaksız durumu fark etme.

**Çözüm:**

Dört mektup doğru zarfa yerleştirildiğinde geriye bir mektup ve ona ait tek boş zarf kalır. Son mektup da zorunlu olarak doğru zarfa girer. Bu nedenle tam olarak dört doğru yerleştirme mümkün değildir ve sayı $0$'dır.

**Neden doğru?** Bir permütasyonda yalnızca tek elemanın yanlış yerde kalması olanaksızdır; yanlış yerleşen bir eleman en az bir başka elemanın yerini de değiştirir.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Yasak uç ve komşuluk koşullarını birlikte sağlayan doğrusal dizilişleri sayma.

**Çözüm:**

Ayşe ile Berk yalnızca içteki altı konuma yerleşebilir. Bu konumlara sıralı yerleşimleri $6\cdot5=30$'dur. İç konumlardaki beş komşu konum çifti için Ayşe ile Berk $2$ sırada oturabileceğinden yasak yerleşim sayısı $5\cdot2=10$'dur.

Uygun konum yerleşimi $30-10=20$, kalan altı kişinin yerleşimi $6!$ olduğundan

$$20\cdot6!=20\cdot720=14\,400$$

**Neden doğru?** Önce iki özel kişinin konumları seçilmiş, ardından kalan kişiler tüm boş yerlerde serbestçe sıralanmıştır.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Dairesel dizilişte dönüşümlü iki grubun yerleşimini sayma.

**Çözüm:**

Dört kadın yuvarlak masa çevresine $(4-1)!=3!$ biçimde oturur. Aralarında oluşan dört boşluğa erkekler $4!$ biçimde yerleşir.

$$3!\cdot4!=6\cdot24=144$$

**Neden doğru?** Kadınların dairesel yerleşimi dönme eşdeğerliğini kaldırır; erkeklerin boşluklara yerleşmesi dönüşümlü olma koşulunu otomatik sağlar.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Birden fazla harfi tekrarlanan sözcüklerde tekrarlı permütasyonu kullanma.

**Çözüm:**

Dokuz harfin içinde $M$, $A$ ve $T$ harflerinin her biri ikişer kez, diğer üç harf birer kez bulunur. Bu nedenle

$$\frac{9!}{2!\,2!\,2!}=\frac{362\,880}{8}=45\,360$$

farklı diziliş vardır.

**Neden doğru?** Her tekrarlı harfin kendi içindeki yer değiştirmeleri yeni bir diziliş oluşturmadığından üç ayrı $2!$ çarpanına bölünür.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Sıfırın başta bulunamaması ile çiftlik koşulunu durumlara ayırarak sayma.

**Çözüm:**

Son rakam $0$ ise ilk rakamın $9$, ortadaki dört basamağın ise $P(8,4)$ seçeneği vardır:

$$9\cdot P(8,4)=9\cdot1680=15\,120$$

Son rakam $2,4,6,8$'den biri ise bunun $4$, ilk rakamın sıfır dışındaki kalan rakamlardan $8$, ortadaki basamakların $P(8,4)$ seçeneği vardır:

$$4\cdot8\cdot1680=53\,760$$

Toplam $15\,120+53\,760=68\,880$'dir.

**Neden doğru?** Son basamağın sıfır olması, ilk basamak için kullanılabilir rakam sayısını değiştirdiğinden iki durum ayrı sayılmalıdır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Simetri ve eşitlik durumunu ayırarak özdeş nesne dağıtımlarını sayma.

**Çözüm:**

Her kutu pozitif sayıda top aldığında toplam dağıtım sayısı

$$\binom{10-1}{4-1}=\binom93=84$$

olur. $A=B=t$ olan dağıtımlar için $t=1,2,3,4$ değerlerinde $C+D$ sırasıyla $8,6,4,2$ olur. Pozitif $(C,D)$ çiftlerinin sayıları $7,5,3,1$ olup toplam $16$'dır.

$A\neq B$ olan $84-16=68$ dağıtımın yarısında $A>B$ olduğundan

$$\frac{68}{2}=34$$

**Neden doğru?** $A$ ile $B$'yi yer değiştirmek eşit olmayan dağıtımları biri $A>B$, diğeri $B>A$ olan ikililere ayırır.

## Soru 8

**Doğru cevap:** B

**Kazanım:** İki ayrı özel kişi grubuna ait alt ve üst sınır koşullarını birlikte sayma.

**Çözüm:**

Ayşe-Berk grubundan seçilen kişi sayısı $1$ veya $2$; Ceren-Deniz grubundan seçilen kişi sayısı $0$ veya $1$ olabilir. Diğer dört kişi kalan yerleri doldurur:

$$2\binom43+2\cdot2\binom42+\binom42+2\binom41$$

$$=8+24+6+8=46$$

**Neden doğru?** Dört olası özel-grup sayısı birbirini dışlar ve kurulun tüm geçerli oluşumlarını eksiksiz kapsar.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Farklı nesnelerin dağıtımında sabit miktar ve boş kalmama koşullarını birlikte kullanma.

**Çözüm:**

Ayşe'nin alacağı iki kitap $\binom62=15$ biçimde seçilir. Kalan dört kitabın her biri Berk veya Ceren'e verilebilir; ancak birinin hiç kitap almaması yasaktır. Bu nedenle uygun dağıtım sayısı

$$2^4-2=14$$

olur. Toplam

$$15\cdot14=210$$

dağıtım vardır.

**Neden doğru?** Çıkarılan iki durum, kalan kitapların tamamının yalnız Berk'e veya yalnız Ceren'e verilmesidir.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Farklı kişileri farklı katlara örten biçimde dağıtmak için içerme-dışlama ilkesini kullanma.

**Çözüm:**

Kısıtlama olmadan $4^6$ iniş seçimi vardır. En az bir katın boş kalması içerme-dışlama ile çıkarılır:

$$4^6-\binom41 3^6+\binom42 2^6-\binom43 1^6$$

$$=4096-2916+384-4=1560$$

**Neden doğru?** İlk çıkarma birden çok boş katı fazla çıkardığı için ikili boşluklar geri eklenir, üçlü boşluklar yeniden çıkarılır.
