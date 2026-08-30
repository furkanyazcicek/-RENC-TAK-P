# Konu 21 — Kombinasyon

## Test 06 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Çarpımın çift olma koşulunu bütünleyici sayma ile uygulama.

**Çözüm:**

Sekiz sayıdan üçü toplam

$$\binom83=56$$

biçimde seçilir. Çarpımın tek olduğu seçimlerde üç sayının da tek olması gerekir. Dört tek sayıdan üçü $\binom43=4$ biçimde seçilir. Bu seçimler bütün durumlardan çıkarılır:

$$56-4=52$$

**Neden doğru?** En az bir çift sayı içeren her seçim çift çarpım verir; yalnız üç tek sayıdan oluşan seçimler elenmiştir.

**Çeldirici notu:** Yalnız bir çift sayı içeren seçimleri saymak, iki veya üç çift sayı içeren uygun seçimleri eksik bırakır.

## Soru 2

**Doğru cevap:** B

**Kazanım:** İki seçimin ortak ve farklı öğelerini ayrı aşamalarda belirleme.

**Çözüm:**

İki öğrencinin ortak seçtiği iki film, altı filmden

$$\binom62=15$$

biçimde belirlenir. Ayça'nın yalnız kendisinin seçtiği film kalan dört filmden 4 biçimde seçilir. Baran'ın yalnız kendisinin seçtiği film, Ayça'nın farklı filminden de başka olacağı için kalan üç filmden 3 biçimde seçilir.

$$\binom62\cdot4\cdot3=15\cdot12=180$$

**Neden doğru?** Son iki film farklı seçildiği için ortak film sayısı ikide kalır.

**Çeldirici notu:** Ayça ile Baran'ın farklı filmlerini aynı seçmek, ortak film sayısını üçe çıkarır.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Kadın ve erkek seçiminde eşlerin birlikte bulunmasını engelleme.

**Çözüm:**

Önce beş erkekten ikisi

$$\binom52=10$$

biçimde seçilir. Bu iki erkeğin eşleri seçilemez. Geriye kalan üç kadından ikisi $\binom32=3$ biçimde seçilir.

$$\binom52\binom32=10\cdot3=30$$

**Neden doğru?** Kadınlar yalnız seçilmeyen erkeklerin eşleri arasından alındığı için kurulda evli bir çift oluşmaz.

**Çeldirici notu:** Kadınları beş kadının tamamından seçmek, seçilen erkeklerden birinin eşinin de seçilmesine izin verir.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Belirli bir büyüklükten fazla eleman içeren alt kümeleri sayma.

**Çözüm:**

Eleman sayısı 4'ten büyük olan alt kümeler 5, 6, 7 veya 8 elemanlıdır.

$$\binom85+\binom86+\binom87+\binom88=56+28+8+1=93$$

**Neden doğru?** Sekiz elemanlı bir kümede koşulu sağlayan bütün olası alt küme büyüklükleri hesaba katılmıştır.

**Çeldirici notu:** Dört elemanlı alt kümeleri de eklemek “4'ten büyük” koşulunu “en az 4” olarak değiştirir.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Eş büyüklükteki adsız grupların yer değişimini düzelterek bölme yapma.

**Çözüm:**

İki kişilik grup $\binom82=28$ biçimde seçilir. Kalan altı öğrenciden üçü üç kişilik gruplardan biri için $\binom63=20$ biçimde seçildiğinde son üçlü kendiliğinden belirlenir. İki üçlü adlandırılmadığı için yer değiştirmeleri yeni sonuç oluşturmaz.

$$\binom82\cdot\frac{\binom63}{2}=28\cdot10=280$$

**Neden doğru?** İkili grup büyüklüğüyle ayırt edilir; yalnız eş büyüklükteki iki üçlünün değişimi aynı bölünmeyi verir.

**Çeldirici notu:** İki üçlü için ikiye bölmemek, aynı grup bölünmesini üçlülerin seçilme sırasına göre iki kez sayar.

## Soru 6

**Doğru cevap:** A

**Kazanım:** En küçük ve en büyük değer arasındaki fark koşuluyla seçim yapma.

**Çözüm:**

Farkı 5 olan en küçük–en büyük sayı çiftleri

$$(1,6),\ (2,7),\ (3,8)$$

olmak üzere 3 tanedir. Her çift için üçüncü sayı, iki uç arasındaki dört sayıdan biri olabilir.

$$3\cdot4=12$$

**Neden doğru?** Her üçlü, kendi en küçük ve en büyük sayısını tek biçimde belirlediğinden seçimler tekrar sayılmaz.

**Çeldirici notu:** Üçüncü sayıyı uçların dışından seçmek, en büyük ile en küçük arasındaki farkı değiştirir.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Bir kurulda belirli türdeki kişi sayısının tek olması koşulunu durumlara ayırma.

**Çözüm:**

Beş kişilik kurulda kadın sayısı 1, 3 veya 5 olabilir.

$$\binom61\binom44+\binom63\binom42+\binom65\binom40$$

$$=6\cdot1+20\cdot6+6\cdot1=132$$

**Neden doğru?** Kurul büyüklüğüne ve eldeki kişi sayılarına uygun bütün tek kadın sayıları ayrı ayrı değerlendirilmiştir.

**Çeldirici notu:** Yalnız üç kadın bulunan kurulları saymak, bir veya beş kadın bulunan uygun kurulları eksik bırakır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Bir kümeyi iki boş olmayan ve adsız gruba ayırma.

**Çözüm:**

Öğrencilerden bir bölümü ilk grup için seçilirse diğer grup kendiliğinden belirlenir. $2^8$ alt kümeden boş küme ve bütün öğrencilerin bulunduğu küme çıkarılır:

$$2^8-2=254$$

Gruplar adlandırılmadığı için her bölünme, iki grubun yer değiştirmesiyle iki kez sayılmıştır.

$$\frac{254}{2}=127$$

**Neden doğru?** Boş grup oluşturan iki seçim elenmiş, ardından grup adlarından kaynaklanan çift sayım kaldırılmıştır.

**Çeldirici notu:** İkiye bölmemek, aynı iki grubu hangi grubun önce seçildiğine göre yeniden sayar.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Bütün öğeleri adsız ikililere ayırma.

**Çözüm:**

İlk eşleşme $\binom62$, ikinci eşleşme kalan dört okuldan $\binom42$, son eşleşme de $\binom22$ biçimde seçilebilir. Üç karşılaşma adlandırılmadığı için seçilme sıralarının $3!$ farklı yazımı aynı eşleştirmeyi verir.

$$\frac{\binom62\binom42\binom22}{3!}=\frac{15\cdot6\cdot1}{6}=15$$

**Neden doğru?** Her okul tam bir ikilide yer almış ve karşılaşmaların sırası sonuçta önemsenmemiştir.

**Çeldirici notu:** $3!$ ile bölmemek aynı üç karşılaşmayı farklı seçilme sıralarıyla tekrar sayar.

## Soru 10

**Doğru cevap:** E

**Kazanım:** “En fazla” koşulunu bütün uygun tür dağılımlarına ayırma.

**Çözüm:**

Ekipte 0, 1 veya 2 kadın bulunabilir.

$$\binom40\binom65+\binom41\binom64+\binom42\binom63$$

$$=1\cdot6+4\cdot15+6\cdot20=186$$

**Neden doğru?** Beş kişilik ekibin kadın sayısı için izin verilen üç durum ayrı ayrı ve eksiksiz sayılmıştır.

**Çeldirici notu:** Yalnız iki kadın bulunan ekipleri saymak, sıfır veya bir kadın bulunan uygun ekipleri dışarıda bırakır.
