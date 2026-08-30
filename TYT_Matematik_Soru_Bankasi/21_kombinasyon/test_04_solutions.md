# Konu 21 — Kombinasyon

## Test 04 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** En kısa yolları hareketlerin sırasını seçerek sayma.

**Çözüm:**

Her en kısa yol, 5 sağ ve 2 yukarı olmak üzere toplam 7 hareketten oluşur. Yedi hareket içindeki iki yukarı hareketin konumları seçildiğinde yol belirlenmiş olur.

$$\binom72=21$$

**Neden doğru?** Yukarı hareketlerin yerleri belli olduğunda kalan beş konum zorunlu olarak sağ hareketlerine aittir.

**Çeldirici notu:** Sağ ve yukarı hareket sayılarını çarpmak, bu hareketlerin farklı sıralarını saymaz.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Ardışık olmama koşuluyla gün seçme.

**Çözüm:**

Seçilen günlerin sıra numaraları $a<b<c$ olsun. Ardışık seçimi engellemek için

$$a'=a,\qquad b'=b-1,\qquad c'=c-2$$

dönüşümü yapılabilir. Böylece $1\le a'<b'<c'\le5$ olur. Beş sayıdan üçü seçilir:

$$\binom53=10$$

**Neden doğru?** İkinci ve üçüncü seçimin önündeki zorunlu birer günlük boşluk kaldırıldığında seçim, beş gün içinden sıradan bir üçlü seçimine dönüşür.

**Çeldirici notu:** Yedi günden doğrudan üç gün seçmek, art arda gelen günlerin bulunduğu seçimleri de içerir.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Belirli eleman sayılarına sahip alt kümeleri kombinasyonla sayma.

**Çözüm:**

Beş elemanlı bir kümenin çift sayıda eleman içeren alt kümeleri 0, 2 veya 4 elemanlıdır. Boş küme de 0 elemanlı olduğundan sayıma katılır.

$$\binom50+\binom52+\binom54=1+10+5=16$$

**Neden doğru?** Beşten büyük olmayan bütün çift eleman sayıları ayrı ayrı hesaba katılmıştır.

**Çeldirici notu:** Boş kümeyi göz ardı etmek sonucu bir eksik buldurur.

## Soru 4

**Doğru cevap:** B

**Kazanım:** “En fazla” koşulunu olası seçim sayılarına ayırma.

**Çözüm:**

En fazla bir beyaz çiçek seçilmesi için iki durum vardır:

- Beyaz çiçek seçilmezse dört kırmızı çiçek $\binom54=5$ biçimde seçilir.
- Bir beyaz çiçek seçilirse üç kırmızı ve bir beyaz çiçek $\binom53\binom31=10\cdot3=30$ biçimde seçilir.

Toplam

$$5+30=35$$

seçim vardır.

**Neden doğru?** Sıfır ve bir beyaz çiçek içeren bütün uygun dörtlüler sayılmıştır.

**Çeldirici notu:** Yalnız bir beyaz çiçek bulunan seçimleri saymak, hiç beyaz çiçek bulunmayan seçimleri dışarıda bırakır.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Zorunlu bir kişi ile birlikte bulunması yasak iki kişiyi aynı seçimde ele alma.

**Çözüm:**

C seçilmiş kabul edilir. Grubun kalan üç üyesi diğer yedi öğrenciden

$$\binom73=35$$

biçimde seçilebilir. A ile B'nin birlikte seçildiği istenmeyen durumda üçüncü kişi, A, B ve C dışındaki beş öğrenciden seçilir. Bu 5 grup çıkarılır:

$$35-5=30$$

**Neden doğru?** C'nin bulunduğu bütün gruplardan yalnız A ve B'yi birlikte içeren gruplar çıkarılmıştır.

**Çeldirici notu:** A ile B'yi tamamen seçenek dışı bırakmak, yalnız birlikte bulunmalarını yasaklayan koşulu gereğinden fazla daraltır.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Çiftlerden en fazla birer kişi seçerek grup oluşturma.

**Çözüm:**

Önce altı evli çiftten, kurula üye verecek üç çift seçilir:

$$\binom63=20$$

Seçilen her çiftten hangi eşin kurula gireceği 2 biçimde belirlenir. Üç çift için $2^3=8$ seçim vardır.

$$\binom63\cdot2^3=20\cdot8=160$$

**Neden doğru?** Üç farklı çift seçilip her birinden yalnız bir kişi alındığı için hiçbir evli çiftin iki üyesi birlikte kurulda bulunmaz.

**Çeldirici notu:** Yalnız çiftleri seçmek, her çiftten hangi kişinin kurula katılacağını belirlemez.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Üç türün de bulunduğu seçimleri olası dağılımlara ayırma.

**Çözüm:**

Dört kart seçilip her renkten en az bir kart bulunacağı için renk sayıları $2,1,1$ biçiminde dağılır.

- İki kırmızı seçilirse: $\binom42\binom31\binom21=6\cdot3\cdot2=36$
- İki mavi seçilirse: $\binom41\binom32\binom21=4\cdot3\cdot2=24$
- İki yeşil seçilirse: $\binom41\binom31\binom22=4\cdot3\cdot1=12$

Toplam

$$36+24+12=72$$

seçim vardır.

**Neden doğru?** Dört kartta hangi rengin iki kez bulunduğuna göre üç ayrık durum bütün uygun seçimleri kapsar.

**Çeldirici notu:** Her renkten yalnız bir kart seçmek toplam üç kart verir ve seçim tamamlanmamış olur.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Birbirinden adla ayrılmayan iki ikili grup oluşturma.

**Çözüm:**

Önce ilk çalışma çifti $\binom92$, sonra ikinci çalışma çifti kalan yedi öğrenciden $\binom72$ biçimde seçilebilir. Ancak çiftler adlandırılmadığı için aynı iki çift bu işlemde iki farklı sırayla sayılır. Bu nedenle

$$\frac{\binom92\binom72}{2}=\frac{36\cdot21}{2}=378$$

olur.

**Neden doğru?** Çiftlerin yer değiştirmesi yeni bir sonuç oluşturmadığı için sıralı sayım ikiye bölünmüştür.

**Çeldirici notu:** İkiye bölmemek, aynı iki çalışma çiftini “önce seçilen” çift değiştiğinde yeniden sayar.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Alt kümeleri eleman sayılarına göre bütünleyici sayma.

**Çözüm:**

Altı elemanlı bir kümenin toplam $2^6=64$ alt kümesi vardır. En az iki elemanlı olmayan alt kümeler boş küme ve altı tane tek elemanlı alt kümedir.

$$64-\binom60-\binom61=64-1-6=57$$

**Neden doğru?** Sıfır ve bir elemanlı alt kümeler çıkarıldığında geriye iki veya daha fazla elemanlı bütün alt kümeler kalır.

**Çeldirici notu:** Yalnız boş kümeyi çıkarmak, tek elemanlı alt kümeleri de yanlışlıkla sayıma katar.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Birbirinden adla ayrılmayan eş büyüklükte iki grup oluşturma.

**Çözüm:**

Bir grup için on öğrenciden beşi $\binom{10}{5}=252$ biçimde seçildiğinde diğer grup kendiliğinden belirlenir. Ancak gruplar adlandırılmadığı için her bölünme, hangi grubun önce seçildiğine göre iki kez sayılmıştır.

$$\frac{\binom{10}{5}}{2}=\frac{252}{2}=126$$

**Neden doğru?** İki grubun yer değiştirmesi yeni bir bölünme oluşturmadığı için sıralı sayım ikiye bölünmüştür.

**Çeldirici notu:** $\binom{10}{5}$ sonucunu doğrudan kullanmak aynı iki grubu iki kez sayar.
