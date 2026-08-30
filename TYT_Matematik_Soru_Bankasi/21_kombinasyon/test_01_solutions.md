# Konu 21 — Kombinasyon

## Test 01 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Sıranın önemli olmadığı seçimleri kombinasyonla sayma.

**Çözüm:**

Yedi farklı kitaptan üçü seçilirken seçim sırası önemli değildir. Bu nedenle seçim sayısı

$$\binom73=\frac{7\cdot6\cdot5}{3\cdot2\cdot1}=35$$

olur.

**Neden doğru?** Aynı üç kitabın farklı seçilme sıraları ayrı sonuç kabul edilmemiştir.

**Çeldirici notu:** Kitapların seçilme sırasını önemli kabul etmek aynı üçlüleri birden fazla kez sayar.

## Soru 2

**Doğru cevap:** B

**Kazanım:** İki noktanın belirlediği doğruları seçim yoluyla sayma.

**Çözüm:**

Her doğru, sekiz noktadan seçilen bir nokta çiftiyle belirlenir. Herhangi üç nokta doğrusal olmadığı için farklı çiftler farklı doğrular oluşturur.

$$\binom82=\frac{8\cdot7}{2}=28$$

**Neden doğru?** Bir doğruyu belirleyen iki noktanın kendi arasındaki sırası yeni bir doğru oluşturmaz.

**Çeldirici notu:** Birinci ve ikinci noktayı ayrı görevler gibi saymak her doğruyu iki kez sayar.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Seçilenlerle seçilmeyenler arasındaki tamamlayıcı ilişkiyi kullanma.

**Çözüm:**

Yedi öğrenciyi seçmek, gezi grubunun dışında kalacak iki öğrenciyi seçmekle aynı sonucu belirler. Bu nedenle

$$\binom97=\binom92=\frac{9\cdot8}{2}=36$$

farklı grup vardır.

**Neden doğru?** Gruba alınmayan iki öğrenci belli olduğunda gruptaki diğer yedi öğrenci de kendiliğinden belirlenir.

**Çeldirici notu:** Seçilen yedi öğrenciyle dışarıda kalan iki öğrenciyi iki ayrı seçim gibi çarpmak aynı grubu tekrar sayar.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Belirli bir kişinin bulunmasının zorunlu olduğu grupları sayma.

**Çözüm:**

Ece gruba seçilmiş kabul edilir. Grubun kalan iki üyesi diğer altı öğrenciden seçilir.

$$\binom62=15$$

**Neden doğru?** Ece için yeniden seçim yapılmaz; yalnız onun yanındaki iki kişi belirlenir.

**Çeldirici notu:** Üç kişiyi yeniden yedi öğrenciden seçmek Ece'nin bulunmadığı grupları da sonuca katar.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Belirli bir kişinin dışarıda kaldığı seçimleri sayma.

**Çözüm:**

Mert seçilmeyeceği için seçim yapılabilecek 6 sporcu kalır. Bu sporculardan üçü

$$\binom63=20$$

biçimde seçilir.

**Neden doğru?** Mert baştan seçenekler arasından çıkarıldığı için oluşturulan grupların hiçbirinde yer almaz.

**Çeldirici notu:** Önce bütün grupları sayıp yalnız Mert'i tek başına çıkarmak, Mert'in bulunduğu tüm grupları elemez.

## Soru 6

**Doğru cevap:** A

**Kazanım:** “En az bir” koşulunu istenmeyen durumu çıkararak sayma.

**Çözüm:**

Dokuz öğrenciden oluşturulabilecek tüm ikili ekiplerin sayısı $\binom92=36$'dır. İçinde hiç kız öğrenci bulunmayan ekipler, beş erkek arasından seçilen ikililerdir.

$$\binom92-\binom52=36-10=26$$

**Neden doğru?** Tüm ekiplerden yalnız iki üyesi de erkek olan ekipler çıkarıldığında en az bir kız bulunan ekipler kalır.

**Çeldirici notu:** Yalnız bir kız ve bir erkekten oluşan ekipleri saymak, iki kızdan oluşan ekipleri gözden kaçırır.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Farklı gruplardan istenen sayılarda seçim yapma.

**Çözüm:**

Dört kız öğrenciden ikisi $\binom42=6$, beş erkek öğrenciden ikisi $\binom52=10$ biçimde seçilir. Her kız öğrenci seçimi her erkek öğrenci seçimiyle eşleştirilebilir.

$$\binom42\cdot\binom52=6\cdot10=60$$

**Neden doğru?** Dört kişilik ekibin kız ve erkek üyeleri ayrı ayrı seçilip seçimler birleştirilmiştir.

**Çeldirici notu:** İki seçim sayısını toplamak, kız ve erkek seçimlerinin birlikte gerçekleştiğini göz ardı eder.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Çokgenin köşegenlerini nokta çiftlerinden yararlanarak sayma.

**Çözüm:**

Altı köşeden seçilen her ikili bir doğru parçası belirler.

$$\binom62=15$$

Bu doğru parçalarının 6 tanesi altıgenin kenarıdır. Geri kalanlar köşegendir.

$$15-6=9$$

**Neden doğru?** İki köşeyi birleştiren bütün doğru parçalarından yalnız komşu köşeleri birleştiren kenarlar çıkarılmıştır.

**Çeldirici notu:** Bütün nokta çiftlerini köşegen saymak altıgenin kenarlarını da sonuca katar.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Farklı türlerden belirli sayıda seçim yapma.

**Çözüm:**

Dört müzik çalışmasından ikisi, üç tiyatro çalışmasından biri seçilir.

$$\binom42\cdot\binom31=6\cdot3=18$$

**Neden doğru?** Her müzik çalışması ikilisi, üç tiyatro çalışmasından herhangi biriyle birlikte seçilebilir.

**Çeldirici notu:** Üç çalışmanın sunulma sırasını da saymak, soruda istenmeyen farklılıklar oluşturur.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Birlikte bulunması yasaklanan iki öğenin olduğu seçimleri sayma.

**Çözüm:**

Dokuz kitaptan dördünün seçilebileceği tüm durumların sayısı

$$\binom94=126$$

dır. A ve B birlikte seçildiğinde diğer iki kitap, kalan yedi kitaptan seçilir.

$$\binom72=21$$

Bu yasak durumlar bütün seçimlerden çıkarılır:

$$126-21=105$$

**Neden doğru?** Yalnız A ile B'nin aynı seçimde bulunduğu gruplar elenmiş; ikisinden birinin veya hiçbirinin seçilmediği gruplar korunmuştur.

**Çeldirici notu:** A ve B'nin ikisini de tamamen seçenekler arasından çıkarmak, yalnız birlikte seçilmelerini yasaklayan koşulu gereğinden fazla daraltır.
