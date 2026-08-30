# Konu 21 — Kombinasyon

## Test 08 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** İki grubun da temsil edildiği seçimleri bütün durumlardan yararlanarak sayma.

**Çözüm:**

Altı aile üyesinden yapılabilecek bütün üçlü seçimlerin sayısı

$$\binom63=20$$

dir. Üç kişinin de çocuk olduğu seçimler $\binom43=4$ tanedir. Yalnız ebeveynlerden üç kişi seçilemez. Bu nedenle uygun seçim sayısı

$$20-4=16$$

olur.

**Neden doğru?** En az bir ebeveyn koşulunu bozan tek olasılık üç çocuğun seçilmesidir; kalan bütün üçlülerde çocuk da bulunur.

**Çeldirici notu:** Yalnız bir ebeveyn ve iki çocuk bulunan seçimleri saymak, iki ebeveyn ve bir çocuk bulunan seçimleri eksik bırakır.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Bağımsız ikililerin her birinden tam olarak bir öğe seçme.

**Çözüm:**

Her sayı çiftinden hangi sayının seçileceği 2 biçimde belirlenir. Dört çift için seçimler birbirinden bağımsızdır.

$$2^4=16$$

**Neden doğru?** Her bir çift seçime bir ve yalnız bir sayı verir.

**Çeldirici notu:** Dört çift içinden yalnız bir çift seçmek, her çiftten sayı alma koşulunu karşılamaz.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Her türden en az bir tane alınan tekrarlı seçimleri sayma.

**Çözüm:**

Önce dört çeşidin her birinden birer kurabiye alınır. Böylece dört kurabiye belirlenmiş, geriye çeşitler arasında serbestçe dağıtılacak iki kurabiye kalmıştır.

İki kurabiyeyi dört çeşide dağıtma sayısı

$$\binom{2+4-1}{4-1}=\binom53=10$$

dur.

**Neden doğru?** Başlangıçta her çeşitten bir tane alınması en az bir koşulunu sağlar; kalan iki kurabiye herhangi bir çeşide eklenebilir.

**Çeldirici notu:** Altı kurabiyenin tamamını serbest dağıtmak, bazı çeşitlerden hiç alınmayan seçimleri de sayar.

## Soru 4

**Doğru cevap:** A

**Kazanım:** İki kişinin ortak öğe içermeyen seçimlerini ardışık olarak sayma.

**Çözüm:**

Ayça iki kitabı beş kitaptan

$$\binom52=10$$

biçimde seçer. Berk'in kitapları kalan üç kitaptan seçilmelidir:

$$\binom32=3$$

Bu nedenle

$$\binom52\binom32=10\cdot3=30$$

seçim vardır.

**Neden doğru?** Öğrenciler farklı kişiler olduğu için Ayça'nın ve Berk'in kitap grupları yer değiştirdiğinde sonuç değişir.

**Çeldirici notu:** Berk'in kitaplarını yine beş kitaptan seçmek ortak kitaplara izin verir.

## Soru 5

**Doğru cevap:** B

**Kazanım:** En küçük ve en büyük değer birlikte sabitken kalan öğeleri seçme.

**Çözüm:**

2 ve 9 seçilmelidir; 1 ve 10 seçilemez. Kalan iki sayı $3,4,5,6,7,8$ arasından seçilir.

$$\binom62=15$$

**Neden doğru?** Diğer iki sayı 2 ile 9 arasında seçildiği için verilen en küçük ve en büyük değerler değişmez.

**Çeldirici notu:** 1 veya 10'u seçenekler arasında bırakmak uç değer koşulunu bozar.

## Soru 6

**Doğru cevap:** C

**Kazanım:** En az bir eş çiftinin bulunduğu seçimleri bütünleyici sayma.

**Çözüm:**

On kişiden seçilebilecek bütün üçlülerin sayısı

$$\binom{10}{3}=120$$

dir. Hiç evli çift içermeyen bir seçim için beş çiftten üçü $\binom53$ biçimde seçilir ve her çiftten alınacak kişi $2^3$ biçimde belirlenir.

$$\binom53\cdot2^3=10\cdot8=80$$

Bu seçimler bütün durumlardan çıkarılır:

$$120-80=40$$

**Neden doğru?** Üç kişilik bir grupta birden fazla tam evli çift bulunamayacağından kalan her seçim koşulu sağlar.

**Çeldirici notu:** Bir evli çift seçip üçüncü kişiyi sekiz kişiden seçmek aynı üçlüyü tekrar saymaz; ancak bu yöntem yerine bütünleyici sayım daha doğrudan ve güvenlidir.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Bir grup seçip bu grubun dışından görevli belirleme.

**Çözüm:**

Üç kişilik kurul yedi öğrenciden

$$\binom73=35$$

biçimde seçilir. Kurul dışında dört öğrenci kaldığından yedek üye 4 biçimde belirlenir.

$$\binom73\cdot4=35\cdot4=140$$

**Neden doğru?** Yedek üye kurul dışında seçildiği için hiçbir öğrenci iki görevi birden üstlenmez.

**Çeldirici notu:** Yedek üyeyi yedi öğrencinin tamamından seçmek kurul üyelerinden birinin yeniden seçilmesine izin verir.

## Soru 8

**Doğru cevap:** E

**Kazanım:** En az bir ardışık çift içeren seçimleri bütünleyici sayma.

**Çözüm:**

On sayıdan yapılabilecek bütün dörtlü seçimlerin sayısı

$$\binom{10}{4}=210$$

dur. Ardışık sayı içermeyen dört sayı seçme sayısı, seçilen sayıların aralarındaki zorunlu üç boşluk kaldırılarak

$$\binom{10-4+1}{4}=\binom74=35$$

bulunur. Bu seçimler çıkarılır:

$$210-35=175$$

**Neden doğru?** Ardışık çift içermeyen seçimler elendiğinde geriye en az bir ardışık çifti bulunan bütün seçimler kalır.

**Çeldirici notu:** Her ardışık çifti ayrı sayıp kalan iki sayıyı seçmek, birden fazla ardışık çift içeren dörtlüleri tekrar sayar.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Öğeleri iki adlandırılmış ve boş olmayan gruba ayırma.

**Çözüm:**

Her öğrenci A veya B grubuna 2 biçimde yerleştirilebilir. Böylece $2^7=128$ dağılım oluşur. A grubunun boş olduğu ve B grubunun boş olduğu iki dağılım uygun değildir.

$$2^7-2=126$$

**Neden doğru?** Gruplar adlandırıldığı için A ve B gruplarının yer değiştirmesi farklı bir dağılım oluşturur.

**Çeldirici notu:** Sonucu ikiye bölmek, A ve B adlarının farklılığını göz ardı eder.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Tam eşleştirmelerde belirli bir ikiliyi dışlama.

**Çözüm:**

Altı öğrencinin üç çifte ayrılma sayısı

$$\frac{6!}{2^3\cdot3!}=15$$

tir. Ayşe ile Berk aynı çiftteyse kalan dört öğrenci 3 farklı biçimde iki çifte ayrılır. Bu eşleştirmeler çıkarılır:

$$15-3=12$$

**Neden doğru?** Bütün tam eşleştirmelerden yalnız Ayşe–Berk çiftini içerenler elenmiştir.

**Çeldirici notu:** Toplam 15 eşleştirmeden yalnız bir sonuç çıkarmak, Ayşe ile Berk birlikteyken kalan dört öğrencinin oluşturabildiği üç farklı eşleştirmeyi gözden kaçırır.
