# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 42 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Uç konum ve yan yana gelmeme koşullarını aralık yöntemiyle birlikte uygulama.

**Çözüm:**

D'nin bulunacağı uç 2 biçimde seçilir. Kalan altı konumda önce A, B ve C dışındaki üç kişi $3!$ biçimde dizilir. Bu kişilerin başında, aralarında ve sonunda oluşan dört aralıktan üçü A, B ve C için $\binom43$ biçimde seçilir. A, B ve C bu aralıklara $3!$ biçimde yerleşir.

$$2\cdot3!\binom43 3!=2\cdot6\cdot4\cdot6=288$$

**Neden doğru?** D bir uçta sabitlendikten sonra A, B ve C'nin farklı aralıklara yerleşmesi, bu üç kişiden hiçbir ikisinin yan yana gelmemesini sağlar.

**Çeldirici notu:** D'nin sıranın hangi ucunda bulunduğu iki farklı diziliş oluşturur.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Tekrarlı rakam ve baş basamak koşullarını durumlara ayırarak sayma.

**Çözüm:**

Tekrarlanan rakam sıfırdan farklıysa 7 biçimde seçilir.

- Diğer iki rakamdan biri $0$ ise öteki rakam 6 biçimde seçilir. Dört rakamın $\frac{4!}{2!}=12$ dizilişinden $0$ ile başlayan $\frac{3!}{2!}=3$ tanesi çıkarılır: $7\cdot6\cdot9=378$.
- Diğer iki rakam da sıfırdan farklıysa bunlar kalan 6 rakamdan $\binom62$ biçimde seçilir: $7\binom62\cdot12=1260$.

Tekrarlanan rakam $0$ ise diğer iki rakam $\binom72$ biçimde seçilir. On iki dizilişin, başında sıfır bulunan $3!=6$ tanesi geçersizdir:

$$\binom72(12-6)=126$$

Toplam sayı

$$378+1260+126=1764$$

olur.

**Neden doğru?** Sıfırın tekrarlanan rakam olması ile yalnız bir kez kullanılması ayrı ele alınarak baş basamak kısıtı her iki durumda doğru uygulanmıştır.

**Çeldirici notu:** Tüm rakam kümeleri için doğrudan $12$ diziliş saymak, $0$ ile başlayan geçersiz yazılışları içeride bırakır.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Çembersel konumlarda bitişik olmayan seçimleri durumlara ayırma.

**Çözüm:**

1 numaralı noktanın seçilip seçilmemesine göre iki durum incelenir.

1 numaralı nokta seçilmezse geriye doğrusal biçimde sıralanmış 11 noktadan yan yana olmayan 5 nokta seçilir:

$$\binom{11-5+1}{5}=\binom75=21$$

1 numaralı nokta seçilirse 2 ve 12 numaralı noktalar seçilemez. Geriye kalan doğrusal 9 noktadan yan yana olmayan 4 nokta seçilir:

$$\binom{9-4+1}{4}=\binom64=15$$

Toplam seçim sayısı $21+15=36$'dır.

**Neden doğru?** Bir noktanın seçili ve seçili olmadığı durumlar ayrık olup çemberin uçlarındaki komşuluk bu ayrımda açıkça hesaba katılmıştır.

**Çeldirici notu:** Noktaları doğrudan bir doğru üzerindeymiş gibi saymak 1 ve 12 numaralı noktaların da komşu olduğunu gözden kaçırır.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Eş kısıtı altında belirli sayıda kadın ve erkek seçme.

**Çözüm:**

Önce 6 kadından ikisi $\binom62$ biçimde seçilir. Bu kadınların eşleri kurula alınamaz. Geriye kalan dört erkekten ikisi $\binom42$ biçimde seçilir.

$$\binom62\binom42=15\cdot6=90$$

**Neden doğru?** Kadınlar seçildikten sonra eşleri erkek adayları arasından çıkarıldığı için hiçbir çiftin birlikte bulunmaması koşulu otomatik olarak sağlanır.

**Çeldirici notu:** Erkekleri altı kişinin tamamından seçmek, seçilen kadınların eşlerinin de kurulda bulunmasına izin verir.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Tekrarlı harf dizilişlerinde uç harf koşulunu tümleyenle sayma.

**Çözüm:**

TENEKE sözcüğünde üç E; birer T, N ve K harfi vardır. Tüm dizilişlerin sayısı

$$\frac{6!}{3!}=120$$

dır. İlk ve son harfin aynı olabilmesi için bu iki harfin E olması gerekir. Uçlara iki E yerleştirildiğinde kalan E, T, N ve K harfleri $4!=24$ biçimde dizilir.

İstenen sayı

$$120-24=96$$

olur.

**Neden doğru?** Yalnız E harfi birden fazla bulunduğundan eş uçlu bütün dizilişler uçlarında E olanlardan oluşur.

**Çeldirici notu:** İlk ve son E sabitlendikten sonra kalan dört harfin birbirinden farklı olduğu unutulmamalıdır.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Kesin artan pozitif tam sayı dörtlülerini taban değerlerden yararlanarak sayma.

**Çözüm:**

Kesin artan en küçük pozitif dörtlü $(1,2,3,4)$ olup toplamı 10'dur. Toplamı 14 yapmak için bu değerlere, artanlığı bozmayacak biçimde toplam 4 eklenir. Elde edilen dörtlüler şunlardır:

$$
(1,2,3,8),\ (1,2,4,7),\ (1,2,5,6),\ (1,3,4,6),\ (2,3,4,5)
$$

Dolayısıyla 5 farklı sıralı dörtlü vardır.

**Neden doğru?** Toplam 4'lük artışın tüm bölümlemeleri artan sıraya uygun biçimde listelenmiş ve her biri tek bir dörtlü üretmiştir.

**Çeldirici notu:** Dörtlüler kesin artan olduğundan aynı sayı iki farklı konumda kullanılamaz.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Kareli bölgede tüm dikdörtgenlerden kareleri ayırma.

**Çözüm:**

Bölgede 5 yatay ve 6 düşey çizgi vardır. İkişer çizgi seçilerek oluşturulan tüm dikdörtgenlerin sayısı

$$\binom52\binom62=10\cdot15=150$$

dir. Birim kare cinsinden kenar uzunluğu 1, 2, 3 ve 4 olan karelerin sayısı sırasıyla

$$4\cdot5,\quad3\cdot4,\quad2\cdot3,\quad1\cdot2$$

olur. Toplam kare sayısı $20+12+6+2=40$ olduğundan kare olmayan dikdörtgen sayısı

$$150-40=110$$

dur.

**Neden doğru?** Her dikdörtgen iki yatay ve iki düşey çizgiyle tek biçimde belirlenmiş, ardından eş kenarlı olanlar çıkarılmıştır.

**Çeldirici notu:** Birim kareleri saymak yalnız en küçük kareleri verir; daha büyük kareler de çıkarılmalıdır.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Sabit ikili zaman bölümlerinde birlikte bulunmama koşulunu tümleyenle sayma.

**Çözüm:**

Altı farklı sunumun altı sıralı saate kısıtsız yerleşimi $6!=720$'dir. Belirli iki sunumun aynı günde olduğu programlarda ortak gün 3 biçimde, bu günün iki saatindeki sıraları 2 biçimde seçilir. Kalan sunumlar $4!$ biçimde yerleşir.

$$3\cdot2\cdot4!=144$$

Bu programlar tüm programlardan çıkarılır:

$$720-144=576$$

**Neden doğru?** Her gün tam iki saat içerdiği için belirli iki sunumun aynı gün olması, o günün iki saatini bütünüyle doldurmaları anlamına gelir.

**Çeldirici notu:** İki sunumu yalnız bir blok kabul etmek gün sınırlarını dikkate almaz ve farklı günlerin bitişik saatlerini de yanlışlıkla sayabilir.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Tüm sembolleri içeren tekrarlı dizilerde uç koşulunu uygulama.

**Çözüm:**

Beş konumda dört harfin tümü kullanılacağı için harflerden biri iki kez, diğerleri birer kez bulunur. Tekrarlanacak harf 4, bu harfin iki konumu $\binom52$ ve kalan üç harfin sırası $3!$ biçimde seçilir:

$$4\binom52 3!=240$$

İlk ve son harfi aynı olan dizilerde tekrarlanan harf uçlarda olmalıdır. Uç harf 4, ortadaki üç farklı harfin sırası $3!$ biçimde seçilir; böyle 24 dizi vardır.

$$240-24=216$$

**Neden doğru?** Her harfin kullanılması beş konumda tam olarak bir harfin tekrarını zorunlu kılar; eş uçlu diziler bu tekrarın iki uçta olduğu durumlardır.

**Çeldirici notu:** İlk ve son harfi baştan bağımsız seçmek, dört harfin tamamının kullanılması koşulunu korumaz.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Adlandırılmamış ve farklı büyüklükteki gruplarda ayrılma koşulunu tümleyenle sayma.

**Çözüm:**

Sekiz kişinin 3, 3 ve 2 kişilik adlandırılmamış gruplara tüm ayrımlarının sayısı

$$\frac{8!}{3!\,3!\,2!\,2!}=280$$

dir. Son paydadaki $2!$, iki üçlü grubun kendi aralarında adlandırılmamasından gelir.

Ayşe ile Berk aynı gruptaysa iki durum vardır:

- İkili grubu birlikte oluştururlarsa kalan altı kişi iki adsız üçlüye $\frac{\binom63}{2}=10$ biçimde ayrılır.
- Bir üçlü grupta birlikte bulunurlarsa yanlarına gelecek kişi 6 biçimde seçilir. Kalan beş kişi, büyüklükleri farklı olan üçlü ve ikili gruplara $\binom53=10$ biçimde ayrılır. Bu durum $6\cdot10=60$ ayrım verir.

Bu nedenle farklı gruplarda bulundukları ayrım sayısı

$$280-(10+60)=210$$

dur.

**Neden doğru?** Aynı grupta bulunma durumları, birlikte ikiliyi oluşturmaları ve aynı üçlüde yer almaları olarak ayrık ve eksiksiz iki parçaya ayrılmıştır.

**Çeldirici notu:** İki üçlü grup adlandırılmadığından tüm ayrımlarda bu grupların yer değişimini iki farklı durum saymamak gerekir.
