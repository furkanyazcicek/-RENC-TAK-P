# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 41 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Göreli sıra ve yan yana gelmeme koşullarını birlikte kullanarak diziliş sayma.

**Çözüm:**

Üç cildin kendi aralarındaki sırası bütün dizilişlerin yalnız $\frac{1}{3!}$'ünde istenen biçimdedir. Bu nedenle cilt sırası uygun tüm dizilişlerin sayısı

$$\frac{8!}{3!}=6720$$

olur. İki romanın yan yana olduğu dizilişlerde romanlar bir blok kabul edilir. Yedi birimin dizilişi ve blok içi sıra hesaba katılıp yine cilt sırası koşulu uygulanır:

$$\frac{2\cdot7!}{3!}=1680$$

İstenen sayı

$$6720-1680=5040$$

dır.

**Neden doğru?** Önce ciltlerin göreli sırası sabitlenmiş, ardından bu dizilişler içinden romanların yan yana olduğu durumlar çıkarılmıştır.

**Çeldirici notu:** Ciltlerin art arda bulunması gerekmemektedir; yalnız kendi aralarındaki soldan sağa sıraları belirlenmiştir.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Kafes yollarında “yalnız biri” koşulunu içerme-dışlama ile uygulama.

**Çözüm:**

$P$ noktasından geçen yolların sayısı

$$\binom31\binom63=3\cdot20=60,$$

$Q$ noktasından geçen yolların sayısı ise

$$\binom63\binom31=20\cdot3=60$$

olur. Her iki noktadan da geçen yolların sayısı

$$\binom31\binom32\binom31=3\cdot3\cdot3=27$$

dir. Yalnız bir noktadan geçilmesi istendiği için her ikisinden geçen yollar iki toplamdan da çıkarılır:

$$60+60-2\cdot27=66$$

**Neden doğru?** Her iki noktadan geçen 27 yol, $P$ ve $Q$ sayımlarının her birinde bulunduğundan “yalnız biri” koşulu için iki kez çıkarılmıştır.

**Çeldirici notu:** $60+60-27$ işlemi en az bir noktadan geçen yolları sayar; iki noktadan da geçenleri dışarıda bırakmaz.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Ortak eleman içermeyen eşleşmeleri aşamalı olarak sayma.

**Çözüm:**

Üç doğru parçasının uçları için sekiz köşeden altısı $\binom86$ biçimde seçilir. Seçilen altı köşenin ikişerli ve adlandırılmamış üç gruba ayrılma sayısı

$$\frac{6!}{(2!)^3\,3!}=15$$

tir. Dolayısıyla

$$\binom86\cdot15=28\cdot15=420$$

seçim vardır.

**Neden doğru?** Altı farklı köşenin ikişerli eşleştirilmesi, seçilen doğru parçalarının ortak köşe taşımaması koşuluna tam olarak karşılık gelir.

**Çeldirici notu:** Üç doğru parçasının kendi aralarındaki sırası önemli olmadığı için oluşturulan üç ikili grup ayrıca sıralanmaz.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Alt sınır ve birlikte bulunmama koşullarını tümleyenle sayma.

**Çözüm:**

Beş kişilik bir kurulda 2, 3, 4 veya 5 kadın bulunabilir. Buna göre en az 2 kadın bulunan kurul sayısı

$$\binom62\binom53+\binom63\binom52+\binom64\binom51+\binom65=431$$

dir. Belirli kadın ile belirli erkeğin ikisinin de bulunduğu ve en az 2 kadın içeren kurullarda kalan üç kişi, geriye kalan 5 kadın ile 4 erkekten seçilir; ancak üç kişinin de erkek olduğu durum çıkarılır:

$$\binom93-\binom43=84-4=80$$

İstenen kurul sayısı

$$431-80=351$$

olur.

**Neden doğru?** Yasaklı iki kişinin birlikte bulunduğu kurullar, en az iki kadın koşulu korunarak uygun kurulların tamamından çıkarılmıştır.

**Çeldirici notu:** Belirli kadın zaten kurulda olduğundan kalan üç kişide en az bir kadın bulunması gerekir.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Farklı nesneleri, iç sıraları önemli ve boş olmayan adlandırılmış bölümlere yerleştirme.

**Çözüm:**

Önce yedi kitap $7!$ biçimde tek sıra hâlinde dizilir. Üç rafın da dolu olması için ardışık kitaplar arasındaki 6 boşluktan ikisine ayraç konur. İlk bölüm üst, ikinci bölüm orta, üçüncü bölüm alt rafı gösterir.

$$7!\binom62=5040\cdot15=75600$$

**Neden doğru?** Her kitap dizilişi ve iki iç ayraç seçimi, üç rafın da dolu olduğu tek bir yerleşimle bire bir eşleşir.

**Çeldirici notu:** Ayraçları dizilişin uçlarına koymak boş raf oluşmasına yol açar; bu nedenle yalnız altı iç boşluk kullanılır.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Geometrik seçimlerde geçersiz doğrusal üçlüleri tüm seçimlerden çıkarma.

**Çözüm:**

On noktadan seçilebilecek tüm üçlülerin sayısı $\binom{10}{3}=120$'dir. Aynı doğru üzerindeki dört noktadan seçilen $\binom43=4$ üçlü üçgen oluşturmaz.

$$\binom{10}{3}-\binom43=120-4=116$$

**Neden doğru?** Verilen koşula göre üçgen oluşturmayan başka bir üçlü bulunmadığından yalnız dört doğrusal üçlü çıkarılmıştır.

**Çeldirici notu:** Aynı doğru üzerindeki dört noktanın tamamını tek bir geçersiz durum saymak yerine, bu noktalardan oluşan üçlüler sayılmalıdır.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Belirli uzaklıktaki iki elemanın konumlarını ek bir dışlama koşuluyla sayma.

**Çözüm:**

A ile B'nin yerleri arasında üç konum farkı olmalıdır. Soldaki konum $1,2,3,4$ veya $5$ olabileceğinden konum çifti 5 biçimde, A ile B'nin bu iki konuma yerleşmesi 2 biçimde seçilir.

C, A ile B arasındaki iki konuma gelemez; A ve B dışındaki 6 konumdan 4'üne gelebilir. Kalan beş kişi $5!$ biçimde sıralanır.

$$5\cdot2\cdot4\cdot5!=4800$$

**Neden doğru?** A-B aralığı önce kesin olarak belirlenmiş, C için bu aralığın dışındaki uygun konumlar seçilmiş ve kalan kişiler serbestçe dizilmiştir.

**Çeldirici notu:** C'nin A ile B arasına gelebildiği iki konumu da kullanmak ek koşulu gözden kaçırır.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Parite ve pozitiflik koşullarını değişken dönüşümüyle sayma problemine dönüştürme.

**Çözüm:**

$a,b,c,d$ negatif olmayan tam sayılar olmak üzere

$$x_1=2a+1,\quad x_2=2b+1,\quad x_3=2c+2,\quad x_4=2d+2$$

yazılabilir. Verilen eşitlik

$$a+b+c+d=7$$

biçimine dönüşür. Negatif olmayan tam sayı çözüm sayısı

$$\binom{7+4-1}{4-1}=\binom{10}{3}=120$$

olur.

**Neden doğru?** Dönüşüm, pozitif tek ve pozitif çift sayıların her birini bir negatif olmayan tam sayıyla bire bir eşleştirir.

**Çeldirici notu:** Pozitif çift sayıların en küçüğü 2 olduğundan $x_3=2c$ yazıp $c=0$'a izin vermek pozitiflik koşulunu bozar.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Doğrusal konumlarda bitişik olmayan seçimleri aralık yöntemiyle sayma.

**Çözüm:**

Önce beş beyaz kare yan yana düşünülür. Bunların başında, sonunda ve aralarında toplam 6 aralık oluşur. Siyah karelerin yan yana gelmemesi için üç farklı aralık seçilir.

$$\binom63=20$$

**Neden doğru?** Her aralığa en fazla bir siyah kare yerleştirmek, siyah karelerin yan yana gelmesini tam olarak engeller.

**Çeldirici notu:** Siyah kareler özdeş olduğu için seçilen üç aralığın kendi arasında sıralanması yeni bir boyama oluşturmaz.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Boş kalmama ve aynı grupta bulunma koşullarını içerme-dışlama ile uygulama.

**Çözüm:**

Ayşe ile Berk'in birlikte bulunacağı atölye 3 biçimde seçilir. Kalan beş öğrencinin her biri üç atölyeden birine gidebilir. Ancak Ayşe ile Berk'in bulunmadığı iki atölyenin de dolu olması gerekir.

Bu beş öğrencinin uygun dağılım sayısı içerme-dışlama ile

$$3^5-2\cdot2^5+1=243-64+1=180$$

olur. Toplam dağıtım sayısı

$$3\cdot180=540$$

dır.

**Neden doğru?** İki atölyeden herhangi birinin boş kaldığı dağılımlar çıkarılmış, ikisinin birden boş kaldığı tek dağılım iki kez çıkarıldığı için geri eklenmiştir.

**Çeldirici notu:** Yalnız $3^5$ kullanmak, iki atölyeden birinin veya ikisinin boş kaldığı dağılımları da sayar.
