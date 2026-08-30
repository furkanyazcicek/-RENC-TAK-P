# Konu 21 — Kombinasyon

## Test 03 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Bir öğenin bulunduğu ve bulunmadığı seçimleri ayırarak kombinasyon ilişkisi kurma.

**Çözüm:**

Belirli kişi grupta bulunmuyorsa üç kişi kalan yedi kişiden seçilir ve $\binom73$ grup oluşur. Belirli kişi grupta bulunuyorsa onun yanındaki iki kişi kalan yedi kişiden seçilir. Bu nedenle

$$x=\binom72=21$$

olur.

**Neden doğru?** Sekiz kişiden seçilen her üçlü, belirli kişiyi ya içerir ya da içermez; iki durum bütün grupları tekrar etmeden kapsar.

**Çeldirici notu:** Belirli kişi grupta bulunduğunda üç kişiyi yeniden seçmek, grubun büyüklüğünü dört kişiye çıkarır.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Birden fazla kişinin dışarıda kaldığı seçimleri sayma.

**Çözüm:**

Deniz ile Selin seçilmeyeceği için grup, kalan yedi öğrenciden oluşturulur.

$$\binom74=35$$

**Neden doğru?** İki öğrenci baştan seçenekler arasından çıkarılmış, geriye kalan öğrencilerden sırasız bir dörtlü seçilmiştir.

**Çeldirici notu:** Dokuz öğrenciden doğrudan dört kişi seçmek, Deniz veya Selin'in bulunduğu grupları da sayar.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Noktalardan dörtgen oluşturmayı kombinasyonla sayma.

**Çözüm:**

Çember üzerindeki herhangi dört farklı nokta bir dörtgen belirler. Sekiz noktadan dördü

$$\binom84=\frac{8\cdot7\cdot6\cdot5}{4\cdot3\cdot2\cdot1}=70$$

biçimde seçilir.

**Neden doğru?** Çember üzerindeki dört farklı noktadan herhangi üçü doğrusal olmadığı için her dörtlü bir dörtgen oluşturur.

**Çeldirici notu:** Dört köşenin seçilme sırasını önemsemek aynı dörtgeni birden fazla kez sayar.

## Soru 4

**Doğru cevap:** A

**Kazanım:** “En az” koşulunu ayrık seçim durumlarına ayırma.

**Çözüm:**

En az iki matematik kitabı seçilmesi için iki durum vardır:

- İki matematik ve bir fizik kitabı: $\binom52\binom41=10\cdot4=40$
- Üç matematik kitabı: $\binom53=10$

Toplam seçim sayısı

$$40+10=50$$

olur.

**Neden doğru?** İki ve üç matematik kitabı içeren seçimler ayrı ayrı sayılmış ve üç kitaplık bütün uygun seçimler kapsanmıştır.

**Çeldirici notu:** Yalnız iki matematik kitabı seçilen durumu saymak, üç matematik kitabının seçildiği grupları dışarıda bırakır.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Bir grupta çoğunluk koşulunu olası dağılımlara ayırma.

**Çözüm:**

Dört kişilik ekipte kızların çoğunlukta olması için ekipte ya üç ya da dört kız öğrenci bulunmalıdır.

Üç kız ve bir erkek bulunan ekiplerin sayısı

$$\binom63\binom41=20\cdot4=80,$$

dört kız bulunan ekiplerin sayısı ise

$$\binom64=15$$

tir. Toplam

$$80+15=95$$

ekip oluşturulabilir.

**Neden doğru?** Dört kişilik bir ekipte çoğunluk için gereken iki olası kız öğrenci sayısı da hesaba katılmıştır.

**Çeldirici notu:** İki kız ve iki erkek bulunan ekiplerde kızlar çoğunlukta olmadığından bu ekipler sayıma katılmaz.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Farklı büyüklüklerdeki seçimlerin sayılarını toplama.

**Çözüm:**

Bir kart seçimi $\binom71=7$, iki kart seçimi $\binom72=21$ biçimde yapılır. Bu iki durum aynı anda gerçekleşemediği için

$$\binom71+\binom72=7+21=28$$

seçim vardır.

**Neden doğru?** “En az bir, en çok iki” koşulu yalnız bir veya iki kartlık seçimlere izin verir.

**Çeldirici notu:** Boş seçimi eklemek, en az bir kart seçme koşulunu bozar.

## Soru 7

**Doğru cevap:** D

**Kazanım:** İstenmeyen eşleşmeleri bütün ikili seçimlerden çıkarma.

**Çözüm:**

Toplulukta 10 kişi vardır. Bu kişilerden seçilebilecek bütün ikililerin sayısı

$$\binom{10}{2}=45$$

tir. Beş evli çiftin her biri istenmeyen bir ikili oluşturur. Bu ikililer çıkarılır:

$$45-5=40$$

**Neden doğru?** Evli olmayan iki kişinin seçildiği bütün ikililer korunmuş, yalnız beş evli çift elenmiştir.

**Çeldirici notu:** Her çift için iki farklı sıra saymak, seçilen iki kişinin sırasının önemsiz olduğunu gözden kaçırır.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Bir alt gruptan en az belirli sayıda öğe seçme koşulunu durumlara ayırma.

**Çözüm:**

İlk üç sorudan ya ikisi ya da üçü seçilmelidir.

- İlk üç sorudan ikisi seçilirse kalan üç soru diğer yedi sorudan seçilir: $\binom32\binom73=3\cdot35=105$.
- İlk üç sorunun tamamı seçilirse kalan iki soru diğer yedi sorudan seçilir: $\binom33\binom72=21$.

Toplam

$$105+21=126$$

seçim vardır.

**Neden doğru?** İlk üç sorudan seçilebilecek uygun sayılar olan iki ve üç ayrı durumlarda eksiksiz sayılmıştır.

**Çeldirici notu:** Yalnız ilk üç sorudan ikisinin seçildiği durumları saymak, üçünün de seçildiği seçimleri eksik bırakır.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Farklı büyüklükteki grupların seçim sayılarını birleştirme.

**Çözüm:**

Üç kişilik grupların sayısı $\binom83=56$'dır. Beş kişilik grupların sayısı da

$$\binom85=\binom83=56$$

olur. Grup ya üç ya da beş kişilik olacağından

$$56+56=112$$

farklı grup oluşturulabilir.

**Neden doğru?** Üç ve beş kişilik gruplar farklı büyüklükte oldukları için aynı sonucu temsil etmez; sayıları toplanır.

**Çeldirici notu:** $\binom85=\binom83$ eşitliğini bu iki grup türünün aynı olduğu biçiminde yorumlamak toplamı yarıya indirir.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Birden fazla belirli öğenin tamamının birlikte seçildiği durumları eleme.

**Çözüm:**

Sekiz kitaptan yapılabilecek bütün dörtlü seçimlerin sayısı

$$\binom84=70$$

tir. A, B ve C kitaplarının üçü birlikte seçildiğinde dördüncü kitap kalan beş kitaptan 5 biçimde seçilir. Bu istenmeyen seçimler çıkarılır:

$$70-5=65$$

**Neden doğru?** Koşul yalnız A, B ve C'nin üçünün aynı anda seçilmesini yasaklar; bu kitaplardan birinin veya ikisinin seçildiği durumlar korunur.

**Çeldirici notu:** A, B ve C kitaplarını tamamen seçenekler arasından çıkarmak, sorudaki koşulu gereğinden fazla daraltır.
