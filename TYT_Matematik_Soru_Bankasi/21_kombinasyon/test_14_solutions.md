# Konu 21 — Kombinasyon

## Test 14 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Uç değerlerin toplamı sabitken aradaki değerleri seçme.

**Çözüm:**

En küçük ve en büyük sayının toplamı 10 olabileceği çiftler $(1,9)$, $(2,8)$, $(3,7)$ ve $(4,6)$'dır.

- Uçlar 1 ve 9 ise aradaki 7 sayıdan ikisi seçilir: $\binom72=21$.
- Uçlar 2 ve 8 ise aradaki 5 sayıdan ikisi seçilir: $\binom52=10$.
- Uçlar 3 ve 7 ise aradaki 3 sayıdan ikisi seçilir: $\binom32=3$.
- Uçlar 4 ve 6 ise arada yalnız bir sayı olduğundan seçim yapılamaz.

Toplam $21+10+3=34$ seçim vardır.

**Neden doğru?** Diğer iki sayı uçların arasından seçildiği için belirlenen en küçük ve en büyük değerler değişmez.

**Çeldirici notu:** Uçların dışından sayı seçmek en küçük veya en büyük sayıyı değiştirir.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Çembersel sıralanmış konumlardan yan yana olmayan seçim yapma.

**Çözüm:**

Belirli bir koltuğu ele alalım.

- Bu koltuk seçilirse iki yanındaki koltuk seçilemez. Geriye doğrusal dizilmiş 5 koltuktan yan yana olmayan ikisi seçilir: $\binom{5-2+1}{2}=\binom42=6$.
- Bu koltuk seçilmezse kalan 7 koltuk doğrusal bir sıra oluşturur. Bu sıradan yan yana olmayan üç koltuk $\binom{7-3+1}{3}=\binom53=10$ biçimde seçilir.

Toplam $6+10=16$ seçim vardır.

**Neden doğru?** Belirli koltuğun seçildiği ve seçilmediği iki durum bütün seçimleri tekrar etmeden kapsar.

**Çeldirici notu:** Koltukları doğrusal kabul etmek ilk ve son koltuğun da çemberde yan yana olduğunu gözden kaçırır.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Tekrarlı seçimde hem alt hem üst sınır uygulama.

**Çözüm:**

Dört çeşitten alınan miktarların toplamı 8, her biri 1 ile 3 arasında olmalıdır. Olası dağılımlar:

- $3,3,1,1$: Üçer alınan iki çeşit $\binom42=6$ biçimde seçilir.
- $3,2,2,1$: Üç alınan çeşit 4, bir alınan çeşit kalan üç çeşitten 3 biçimde seçilir; $4\cdot3=12$ dağılım vardır.
- $2,2,2,2$: 1 dağılım vardır.

Toplam $6+12+1=19$ seçim vardır.

**Neden doğru?** Toplamı 8 yapan ve bütün miktarları 1 ile 3 arasında tutan tüm çokluk dağılımları kapsanmıştır.

**Çeldirici notu:** $4,2,1,1$ dağılımı toplamı 8 yapsa da bir çeşitten en fazla üç alma koşulunu bozar.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Belirli büyüklükteki alt kümeleri bütün alt kümelerden çıkarma.

**Çözüm:**

Yedi elemanlı bir kümenin toplam $2^7=128$ alt kümesi vardır. Üç elemanlı $\binom73=35$ ve dört elemanlı $\binom74=35$ alt küme koşulu sağlamaz.

$$128-35-35=58$$

**Neden doğru?** Yalnız 3 ve 4 elemanlı alt kümeler çıkarılmış, diğer bütün büyüklükler korunmuştur.

**Çeldirici notu:** $\binom73=\binom74$ olduğu için yalnız birini çıkarmak iki farklı alt küme büyüklüğünden birini sayıma katar.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Birleşim büyüklüğü belirli iki ayrık ve adlandırılmış alt kümeyi sayma.

**Çözüm:**

Önce birleşimde bulunacak üç eleman beş elemandan

$$\binom53=10$$

biçimde seçilir. Bu üç elemanın her biri A veya B kümesine gidebilir. İki küme de boş olmayacağı için bütün elemanların A'da veya bütün elemanların B'de olduğu iki dağılım çıkarılır.

$$\binom53(2^3-2)=10\cdot6=60$$

**Neden doğru?** A ve B adlandırılmış, ayrık ve boş olmayan tutulurken birleşimleri tam üç eleman olarak sabitlenmiştir.

**Çeldirici notu:** Sonucu ikiye bölmek A ve B kümelerinin farklı adlara sahip olduğunu göz ardı eder.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Eşit tür dağılımını bütün seçimlerden çıkarma.

**Çözüm:**

Dokuz kişiden dört kişilik bütün kurulların sayısı

$$\binom94=126$$

dır. Kadın ve erkek sayılarının eşit olduğu kurullarda iki kadın ve iki erkek bulunur:

$$\binom52\binom42=10\cdot6=60$$

Bu kurullar çıkarılır:

$$126-60=66$$

**Neden doğru?** Dört kişilik kurulda eşitliği sağlayan tek dağılım $2+2$'dir.

**Çeldirici notu:** Yalnız kadınların çoğunlukta olduğu kurulları saymak erkeklerin çoğunlukta olduğu uygun kurulları eksik bırakır.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Bir alt küme ile tümleyeninin büyüklük koşullarını birlikte uygulama.

**Çözüm:**

Kümede yedi eleman vardır. Seçilen alt küme ve tümleyeninde en az üçer eleman bulunması için seçilen alt kümenin büyüklüğü 3 veya 4 olmalıdır.

$$\binom73+\binom74=35+35=70$$

**Neden doğru?** Alt küme 3 elemanlıysa tümleyeni 4, alt küme 4 elemanlıysa tümleyeni 3 elemanlıdır.

**Çeldirici notu:** Alt küme ile tümleyenini aynı kabul edip ikiye bölmek yanlıştır; soruda seçilen alt küme açıkça ayırt edilmiştir.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Tam evli çiftlerden oluşan seçimleri sayma.

**Çözüm:**

Dört evli çiftten, iki üyesi de seçilecek iki çift belirlenir.

$$\binom42=6$$

**Neden doğru?** Seçilen iki çiftin dört üyesi grubu tamamen belirler.

**Çeldirici notu:** Her çiftin içinden ayrıca kişi seçmek, çiftlerin iki üyesinin de alınması koşulunu bozar.

## Soru 9

**Doğru cevap:** B

**Kazanım:** İki türün de bulunduğu seçimleri bütünleyici sayma.

**Çözüm:**

Dokuz sayıdan yapılabilecek bütün üçlü seçimlerin sayısı $\binom93=84$'tür.

Üç sayının da 3'ün katı olduğu tek seçim vardır. Üç sayının da 3'ün katı olmadığı seçimlerin sayısı, diğer altı sayıdan $\binom63=20$'dir.

$$84-1-20=63$$

**Neden doğru?** Tek türden oluşan seçimler çıkarıldığında her iki sayı türünü de içeren seçimler kalır.

**Çeldirici notu:** Yalnız bir tane 3 katı bulunan seçimleri saymak, iki tane 3 katı bulunan uygun seçimleri eksik bırakır.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Ortak öğesi bulunmayan iki adsız ikiliyi sayma.

**Çözüm:**

Karşılaşmalarda yer alacak dört takım dokuz takımdan

$$\binom94=126$$

biçimde seçilir. Dört takım, birbirinden adla ayrılmayan iki karşılaşmaya 3 farklı biçimde eşleştirilebilir.

$$\binom94\cdot3=126\cdot3=378$$

**Neden doğru?** Dört takım seçildikten sonra her takımın yalnız bir karşılaşmada yer aldığı üç farklı eşleştirme vardır.

**Çeldirici notu:** Dört takımı yalnız seçmek bu takımlar arasındaki üç farklı karşılaşma düzenini hesaba katmaz.
