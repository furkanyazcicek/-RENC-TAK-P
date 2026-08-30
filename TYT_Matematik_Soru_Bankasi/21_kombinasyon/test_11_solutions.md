# Konu 21 — Kombinasyon

## Test 11 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Belirli bir toplamı veren sırasız üçlüleri belirleme.

**Çözüm:**

Toplamı 10 olan farklı sayı üçlüleri

$$(1,2,7),\ (1,3,6),\ (1,4,5),\ (2,3,5)$$

olmak üzere 4 tanedir.

**Neden doğru?** Sayılar her üçlüde küçükten büyüğe yazıldığı için aynı seçim farklı sıralarla yeniden sayılmamıştır.

**Çeldirici notu:** Bir üçlünün farklı yazılışlarını ayrı kabul etmek seçimin sırasını gereksiz yere önemser.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Farklı amaçlar için birbirinden ayrık seçimler yapma.

**Çözüm:**

Okunacak üç kitap sekiz kitaptan

$$\binom83=56$$

biçimde seçilir. Bağışlanacak iki kitap, geriye kalan beş kitaptan

$$\binom52=10$$

biçimde seçilir.

$$\binom83\binom52=56\cdot10=560$$

**Neden doğru?** Okuma ve bağışlama amaçları farklı olduğu için iki kitap grubunun görevi açıkça belirlenmiştir.

**Çeldirici notu:** Bağışlanacak kitapları yeniden sekiz kitaptan seçmek aynı kitabın iki amaç için seçilmesine izin verir.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Her ikiliden tam olarak bir öğe seçme.

**Çözüm:**

Her evli çiftten hangi kişinin seçileceği 2 biçimde belirlenir. Beş çift için seçimler bağımsızdır.

$$2^5=32$$

**Neden doğru?** Her çift gruba bir ve yalnız bir kişi verir.

**Çeldirici notu:** Beş kişiyi on kişiden doğrudan seçmek bazı çiftlerden iki kişi, bazı çiftlerden hiç kimse seçilmesine izin verir.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Tekrarlı seçimde kullanılan çeşit sayısını sabitleme.

**Çözüm:**

Kullanılacak üç çeşit $\binom63=20$ biçimde seçilir. Dört topun tam üç çeşitten oluşması için seçilen çeşitlerden biri iki top, diğer ikisi birer top olmalıdır. İki kez kullanılacak çeşit 3 biçimde belirlenir.

$$\binom63\cdot3=20\cdot3=60$$

**Neden doğru?** $2+1+1$ dağılımı dört topun tam üç farklı çeşitten oluşmasını sağlar.

**Çeldirici notu:** Dört çeşidin her birinden bir top seçmek tam üç çeşit koşulunu bozar.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Dahil etme, dışlama ve alt küme büyüklüğünün tekliği koşullarını birlikte uygulama.

**Çözüm:**

A seçilir, B seçilmez. Geriye seçimi serbest olan beş eleman kalır. Alt kümede şimdilik bir eleman bulunduğundan toplam büyüklüğün tek olması için bu beş elemandan çift sayıda eleman seçilmelidir: 0, 2 veya 4.

$$\binom50+\binom52+\binom54=1+10+5=16$$

**Neden doğru?** A'ya eklenen çift sayıdaki eleman, alt kümenin toplam eleman sayısını tek tutar.

**Çeldirici notu:** Serbest elemanlardan tek sayıda seçmek toplam alt küme büyüklüğünü çift yapar.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Bir özel grubun tamamının birlikte bulunduğu veya hiç bulunmadığı seçimleri ayırma.

**Çözüm:**

A, B ve C birlikte seçilirse dördüncü üye kalan yedi öğrenciden 7 biçimde belirlenir.

Üçü de seçilmezse dört kişi kalan yedi öğrenciden

$$\binom74=35$$

biçimde seçilir. İki durum ayrık olduğundan

$$7+35=42$$

grup vardır.

**Neden doğru?** Koşulun izin verdiği iki durum ayrı ayrı sayılmış ve hiçbir grup iki durumda birden yer almamıştır.

**Çeldirici notu:** A, B ve C'den yalnız birini veya ikisini içeren gruplar koşulu sağlamaz.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Tam olarak iki tür içeren seçimleri tür çiftlerine göre sayma.

**Çözüm:**

Kırmızı–mavi seçimlerinde beş karttan üçü $\binom53=10$ biçimde seçilir; yalnız mavi kartlardan oluşan tek seçim çıkarılır ve 9 kalır. Kırmızı–yeşil için de 9 seçim vardır.

Mavi–yeşil seçimlerinde altı karttan üçü $\binom63=20$ biçimde seçilir. Yalnız mavi ve yalnız yeşil kartlardan oluşan iki seçim çıkarılır ve 18 kalır.

$$9+9+18=36$$

**Neden doğru?** Her seçim içerdiği iki renk çiftiyle tek biçimde sınıflandırılır.

**Çeldirici notu:** Üç rengin de bulunduğu seçimler herhangi bir renk çiftine ait kabul edilmemelidir.

## Soru 8

**Doğru cevap:** C

**Kazanım:** İki gruptan $2+1$ dağılımıyla seçim yapma.

**Çözüm:**

İki koltuğun seçileceği sıra 2 biçimde belirlenir. Bu sıradan iki koltuk $\binom52=10$, diğer sıradan bir koltuk 5 biçimde seçilir.

$$2\cdot\binom52\cdot5=2\cdot10\cdot5=100$$

**Neden doğru?** Üç koltuk iki sıraya yalnız $2+1$ biçiminde dağıtılmıştır.

**Çeldirici notu:** İki koltuğun bulunduğu sırayı sabit kabul etmek sonucu yarıya indirir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** İki ayrık gruptan birinin büyüklüğünü sabitleyip diğerini boş bırakmama.

**Çözüm:**

A grubunun iki üyesi

$$\binom62=15$$

biçimde seçilir. Kalan dört öğrencinin her biri B grubuna katılabilir veya hiçbir gruba katılmayabilir. Ancak B grubu boş olamaz; bu nedenle $2^4-1=15$ seçenek vardır.

$$\binom62(2^4-1)=15\cdot15=225$$

**Neden doğru?** A grubu belirlendikten sonra B grubu kalan öğrencilerin boş olmayan herhangi bir alt kümesi olarak seçilmiştir.

**Çeldirici notu:** $2^4$ değerini doğrudan kullanmak B grubunun boş olduğu durumu da sayar.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Önce öğeleri seçip sonra seçilenleri adsız ikililere ayırma.

**Çözüm:**

Karşılaşmalarda yer alacak altı takım sekiz takımdan

$$\binom86=28$$

biçimde seçilir. Altı takımın üç adsız ikiliye ayrılma sayısı

$$\frac{6!}{2^3\cdot3!}=15$$

tir.

$$\binom86\cdot15=28\cdot15=420$$

**Neden doğru?** Önce katılan takımlar seçilmiş, ardından her takımın tam bir karşılaşmada yer aldığı eşleştirmeler sayılmıştır.

**Çeldirici notu:** Yalnız altı takımı seçmek, bu takımların oluşturabileceği 15 farklı karşılaşma düzenini hesaba katmaz.
