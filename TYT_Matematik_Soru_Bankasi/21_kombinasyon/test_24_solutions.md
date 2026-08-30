# Konu 21 — Kombinasyon

## Test 24 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Farklı büyüklükteki iki seçimi birleştirme.

**Çözüm:**

İki soru seçmenin $\binom72=21$, üç soru seçmenin $\binom73=35$ yolu vardır. Bu iki durum ayrık olduğundan

$$21+35=56$$

seçim yapılabilir.

**Neden doğru?** Bir seçki aynı anda hem iki hem üç sorudan oluşamayacağı için iki durumun sayıları doğrudan toplanır.

**Çeldirici notu:** İki ve üç soruluk seçimleri çarpmak, aynı anda iki ayrı seçki oluşturma durumunu sayar.

## Soru 2

**Doğru cevap:** E

**Kazanım:** En az bir eş çiftini içeren üçlü grupları tümleyenle sayma.

**Çözüm:**

On kişiden üç kişilik bütün grupların sayısı $\binom{10}{3}=120$ dir. Hiçbir eş çiftinin birlikte bulunmadığı gruplarda üç farklı çift seçilir ve her çiftten bir kişi alınır:

$$\binom53\cdot2^3=10\cdot8=80$$

Bu gruplar çıkarılır:

$$120-80=40$$

**Neden doğru?** Üç kişilik bir grupta birden fazla tam eş çifti bulunamayacağından tümleyen durum bütün uygunsuz grupları kapsar.

**Çeldirici notu:** Yalnız hangi eş çiftinin alınacağını seçmek, grubun üçüncü kişisini hesaba katmaz.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Pozitif tam sayı çözümlerini ayraç yöntemiyle sayma.

**Çözüm:**

Beş özdeş birim üç değişkene, her biri en az bir birim alacak biçimde dağıtılır. İki ayraç, dört iç boşluktan seçilir:

$$\binom{5-1}{3-1}=\binom42=6$$

**Neden doğru?** Ayraçların iki yanında ve arasında en az birer birim bırakılması bütün değişkenleri pozitif yapar.

**Çeldirici notu:** Uç boşluklara da ayraç koymak değişkenlerden birinin sıfır olmasına izin verir.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Tam eşleştirmelerde yasaklanan bir ikiliyi tümleyenle sayma.

**Çözüm:**

On öğrenciyi ikili gruplara ayırmanın

$$9\cdot7\cdot5\cdot3\cdot1=945$$

yolu vardır. A ile B aynı gruptaysa kalan 8 öğrenci

$$7\cdot5\cdot3\cdot1=105$$

biçimde eşleştirilir. Bu gruplandırmalar çıkarılır:

$$945-105=840$$

**Neden doğru?** Yasaklanan bütün gruplandırmalar A–B ikilisini içerir ve geri kalan öğrencilerin her eşleştirmesi bu durumu bir kez üretir.

**Çeldirici notu:** A ve B'nin eşlerini ayrı ayrı seçip kalanları hesaba katmamak tam gruplandırmayı tamamlamaz.

## Soru 5

**Doğru cevap:** C

**Kazanım:** İki ayrı soru bölümündeki alt ve üst seçim sınırlarını birlikte uygulama.

**Çözüm:**

Son iki sorudan hiçbiri seçilmezse dört soru ilk yedi sorudan seçilir ve ilk üç sorudan en az biri bulunmalıdır:

$$\binom74-\binom44=35-1=34$$

Son iki sorudan tam biri seçilirse bu soru 2 biçimde belirlenir. Kalan üç soru ilk yedi sorudan seçilir; ilk üç sorunun hiç alınmadığı seçimler çıkarılır:

$$2\left(\binom73-\binom43\right)=2(35-4)=62$$

Toplam

$$34+62=96$$

seçim vardır.

**Neden doğru?** Son bölümden sıfır ve bir seçim durumları ayrık olup ilk bölümün en az bir koşulu her ikisinde de korunmuştur.

**Çeldirici notu:** Son iki sorudan birini zorunlu seçmek ikisinin de dışarıda olduğu uygun seçkileri eksik bırakır.

## Soru 6

**Doğru cevap:** D

**Kazanım:** En az bir ardışık çift içeren seçimleri tümleyenle sayma.

**Çözüm:**

Dokuz sayıdan üç sayı seçmenin $\binom93=84$ yolu vardır. Ardışık hiçbir sayı içermeyen üçlülerin sayısı, zorunlu boşluklar kaldırıldığında

$$\binom{9-3+1}{3}=\binom73=35$$

olur. Bu üçlüler çıkarılır:

$$84-35=49$$

**Neden doğru?** Her üçlü ya en az bir ardışık çift içerir ya da hiçbir ardışık çift içermez; durumlar ayrık ve bütündür.

**Çeldirici notu:** Yalnız art arda gelen üç sayıyı saymak, tek bir ardışık çift içeren üçlüleri dışarıda bırakır.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Bir kenarı çevrel çemberin çapı olan üçgenleri sayma.

**Çözüm:**

Düzgün ongenin karşılıklı köşe çiftleri 5 çap belirler. Çapın iki ucu seçildikten sonra üçüncü köşe kalan 8 köşeden biri olabilir:

$$5\cdot8=40$$

**Neden doğru?** Bir üçgenin iki farklı kenarı aynı çemberin çapı olamayacağı için hiçbir üçgen iki kez sayılmaz.

**Çeldirici notu:** Bütün köşe çiftlerini çap kabul etmek, karşılıklı olmayan köşeleri de sayıma katar.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Çokgenle tam bir ortak kenarı bulunan üçgenleri sayma.

**Çözüm:**

Üçgenin sekizgenle ortak olacak kenarı 8 biçimde seçilir. Üçüncü köşe; seçilen kenarın iki ucundan ve bu uçların diğer iki komşusundan farklı olmalıdır. Böylece 4 uygun köşe kalır:

$$8\cdot4=32$$

**Neden doğru?** Komşu iki dış köşenin seçilmemesi, üçgenin sekizgenle ikinci bir ortak kenar oluşturmasını engeller.

**Çeldirici notu:** Üçüncü köşeyi kalan altı köşeden seçmek iki ortak kenarı bulunan üçgenleri de sayar.

## Soru 9

**Doğru cevap:** B

**Kazanım:** İki renkten eşit sayıda seçimleri tüm seçimlerden çıkarma.

**Çözüm:**

Sekiz karttan dördünü seçmenin $\binom84=70$ yolu vardır. Kırmızı ve mavi kart sayılarının eşit olduğu seçimlerde her renkten ikişer kart alınır:

$$\binom42\binom42=6\cdot6=36$$

Bu seçimler çıkarılır:

$$70-36=34$$

**Neden doğru?** Dört kartlık bir seçkide iki rengin sayılarının eşit olabileceği tek dağılım 2–2'dir.

**Çeldirici notu:** Yalnız dört kartın da aynı renk olduğu seçimleri saymak 1–3 ve 3–1 dağılımlarını eksik bırakır.

## Soru 10

**Doğru cevap:** C

**Kazanım:** İç içe iki alt kümeyi eleman durumlarıyla sayma.

**Çözüm:**

E kümesinin her elemanı için üç durum vardır: B'nin dışında olmak, B'de fakat A'da olmamak veya A'da bulunmak. A'daki her eleman zaten B'de olduğundan başka durum yoktur.

Yedi elemanın seçimleri birbirinden bağımsızdır:

$$3^7=2187$$

**Neden doğru?** Üç durum $A\subseteq B$ koşulunu her eleman için doğrudan sağlar.

**Çeldirici notu:** Her eleman için dört bağımsız üyelik durumu saymak A'da olup B'de olmayan, koşula aykırı duruma izin verir.
