# Konu 21 — Kombinasyon

## Test 05 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Toplamın tek olması koşulunu seçilen tek ve çift sayı adetlerine ayırma.

**Çözüm:**

Verilen sayılar arasında 5 tek ve 4 çift sayı vardır. Üç sayının toplamının tek olması için ya üç tek sayı ya da bir tek ve iki çift sayı seçilmelidir.

$$\binom53+\binom51\binom42=10+5\cdot6=40$$

**Neden doğru?** Tek toplam veren iki olası tek–çift dağılımı ayrı ayrı sayılmıştır.

**Çeldirici notu:** Yalnız bir tek sayı seçilen durumu saymak, üç tek sayının seçildiği uygun seçimleri eksik bırakır.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Belirli bir gruptan en az bir kişinin bulunduğu seçimleri bütünleyici sayma.

**Çözüm:**

On öğrenciden oluşturulabilecek bütün dörtlü grupların sayısı

$$\binom{10}{4}=210$$

dur. A, B ve C'nin hiçbirinin bulunmadığı gruplar, kalan yedi öğrenciden seçilir:

$$\binom74=35$$

Bu gruplar çıkarıldığında

$$210-35=175$$

grup kalır.

**Neden doğru?** A, B ve C'den birini, ikisini veya üçünü içeren bütün gruplar korunmuştur.

**Çeldirici notu:** A, B ve C'den yalnız birinin bulunduğu grupları saymak, bu kişilerden ikisini veya üçünü içeren grupları dışarıda bırakır.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Seçilen sayıların en küçüğü belli olduğunda kalan seçimi tamamlama.

**Çözüm:**

En küçük sayı 3 olacağı için 3 seçilir, 1 ve 2 seçilmez. Kalan üç sayı $4,5,6,7,8$ arasından seçilir.

$$\binom53=10$$

**Neden doğru?** Diğer sayıların tamamı 3'ten büyük seçildiği için 3 gerçekten seçimin en küçük elemanı olur.

**Çeldirici notu:** 1 veya 2'yi seçenekler arasında bırakmak, en küçük sayının 3 olma koşulunu bozar.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Sırasız bir seçim ile bağımsız başka bir seçimi birlikte sayma.

**Çözüm:**

Beş dondurma çeşidinden ikisi

$$\binom52=10$$

biçimde seçilir. Her çeşit çifti için üç sostan biri seçilebilir.

$$\binom52\cdot3=10\cdot3=30$$

**Neden doğru?** İki dondurma çeşidinin kendi aralarındaki sırası önemsenmemiş, sos seçimi her çeşit çiftiyle ayrı ayrı eşleştirilmiştir.

**Çeldirici notu:** Dondurma çeşitlerini birinci ve ikinci diye ayırmak aynı iki çeşidi iki kez sayar.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Belirli sayıda tek ve çift öğe içeren seçimleri sayma.

**Çözüm:**

$1$'den $8$'e kadar 4 çift ve 4 tek sayı vardır. İki çift ve iki tek sayı seçilmelidir.

$$\binom42\binom42=6\cdot6=36$$

**Neden doğru?** Dört sayılık seçim, tam olarak iki çift ve geriye kalan iki tek sayıyla tamamlanmıştır.

**Çeldirici notu:** Yalnız iki çift sayıyı seçmek, seçimin iki tek sayıdan oluşan bölümünü belirlemez.

## Soru 6

**Doğru cevap:** E

**Kazanım:** İki ayrı ikiliden tam olarak birer öğe seçme koşulunu uygulama.

**Çözüm:**

A ile B'den biri 2, C ile D'den biri 2 biçimde seçilir. Dört kitaplık seçimin kalan iki kitabı, bu dört özel kitabın dışındaki diğer dört kitaptan seçilir.

$$2\cdot2\cdot\binom42=4\cdot6=24$$

**Neden doğru?** Her özel ikilinin seçilmeyen üyesi yeniden seçime katılmamış, kalan yerler diğer kitaplarla tamamlanmıştır.

**Çeldirici notu:** Seçilmeyen A, B, C veya D kitaplarından birini kalan iki kitap arasında kullanmak “tam olarak biri” koşulunu bozar.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Birbirinden adla ayrılan, farklı büyüklükte iki grubu ardışık seçimle oluşturma.

**Çözüm:**

A takımının üç üyesi dokuz öğrenciden $\binom93=84$ biçimde seçilir. B takımının iki üyesi kalan altı öğrenciden $\binom62=15$ biçimde seçilir.

$$\binom93\binom62=84\cdot15=1260$$

**Neden doğru?** Takımların adları farklı olduğu için hangi öğrencilerin A, hangilerinin B takımında olduğu ayrı sonuçlar oluşturur.

**Çeldirici notu:** Takımları adsız kabul ederek ikiye bölmek, A ve B takımlarının farklı rollerini göz ardı eder.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Birlikte seçilmesi yasaklanan iki öğenin bulunduğu seçimleri bütün durumlardan çıkarma.

**Çözüm:**

On iki sorudan yapılabilecek bütün beşli seçimlerin sayısı

$$\binom{12}{5}=792$$

dir. İlk ve son soru birlikte seçildiğinde kalan üç soru diğer on sorudan seçilir:

$$\binom{10}{3}=120$$

İstenmeyen seçimler çıkarılır:

$$792-120=672$$

**Neden doğru?** İlk veya son sorudan yalnız birini ya da hiçbirini içeren seçimler korunmuş, yalnız ikisini birlikte içerenler elenmiştir.

**Çeldirici notu:** İlk ve son soruyu tamamen seçenekler arasından çıkarmak, ikisinin yalnız birlikte seçilmesini yasaklayan koşulu gereğinden fazla daraltır.

## Soru 9

**Doğru cevap:** C

**Kazanım:** İki alandan da öğe içeren seçimleri aynı alandan yapılan seçimleri çıkararak sayma.

**Çözüm:**

Yedi çalışmadan yapılabilecek bütün üçlü seçimlerin sayısı $\binom73=35$'tir. Yalnız bilim çalışmalarından oluşan $\binom43=4$ seçim ve yalnız sanat çalışmalarından oluşan $\binom33=1$ seçim uygun değildir.

$$35-4-1=30$$

**Neden doğru?** Tek alandan oluşan seçimler çıkarıldığında her iki alandan da en az bir çalışma içeren seçimler kalır.

**Çeldirici notu:** Yalnız iki bilim ve bir sanat çalışması seçilen durumu saymak, bir bilim ve iki sanat çalışması içeren seçimleri eksik bırakır.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Çiftlerden seçim yaparken tam olarak bir çiftin iki üyesini birlikte alma.

**Çözüm:**

İki üyesi birlikte seçilecek evli çift 5 biçimde belirlenir. Kalan iki kişi, başka bir evli çift oluşturmamalıdır. Bunun için kalan dört çiftten ikisi $\binom42=6$ biçimde seçilir ve seçilen her çiftten hangi eşin alınacağı $2^2=4$ biçimde belirlenir.

$$5\cdot\binom42\cdot2^2=5\cdot6\cdot4=120$$

**Neden doğru?** Bir tam çift seçildikten sonra diğer iki kişi farklı çiftlerden alındığı için ikinci bir evli çift oluşmaz.

**Çeldirici notu:** Kalan sekiz kişiden doğrudan iki kişi seçmek, ikinci bir evli çiftin oluştuğu seçimleri de sayar.
