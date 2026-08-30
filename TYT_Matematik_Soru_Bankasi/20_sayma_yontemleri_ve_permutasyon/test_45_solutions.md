# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 45 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Belirli elemanların göreli sırasını simetriyle sayma.

**Çözüm:**

A, B ve C'nin kendi aralarındaki $3!=6$ göreli sırasından yalnız A–C–B sırası verilen iki koşulu birlikte sağlar. Yedi kişinin bütün dizilişlerinde bu altı göreli sıra eşit sayıda görülür.

$$\frac{7!}{3!}=\frac{5040}{6}=840$$

**Neden doğru?** C'nin A ile B arasında ve A'nın solda olması, üç kişinin göreli sırasını tek bir biçimde belirler; aralarındaki diğer kişiler serbest kalır.

**Çeldirici notu:** Üç kişiyi blok kabul etmek, soruda bulunmayan art arda olma koşulunu ekler.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Dairesel dönüşümlü oturmada belirli iki kişinin komşuluğunu tümleyenle sayma.

**Çözüm:**

Kadınlar masa çevresine $(4-1)!=6$ biçimde oturur. Erkekler kadınların arasındaki dört yere $4!=24$ biçimde yerleşir. Böylece kısıtsız dönüşümlü düzen sayısı $6\cdot24=144$'tür.

Belirli erkek, belirli kadının iki yanındaki yerden birine 2 biçimde; kalan erkekler diğer yerlere $3!$ biçimde oturur. Bu komşu düzenlerin sayısı

$$6\cdot2\cdot3!=72$$

olduğundan istenen sayı $144-72=72$'dir.

**Neden doğru?** Kadınların yerleşimi sabitken belirli kadına komşu olabilecek tam iki erkek konumu vardır.

**Çeldirici notu:** Belirli erkek için yalnız bir komşu yer saymak, kadının diğer yanındaki düzenleri eksik bırakır.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Özdeş sembollerin belirli sayıda doğrusal blok oluşturduğu dizileri sayma.

**Çözüm:**

Dört tane 1'in iki pozitif uzunluklu bloğa ayrılması için ilk bloğun uzunluğu 1, 2 veya 3 olabilir; yani $\binom31=3$ seçenek vardır.

Beş tane 0; iki 1 bloğunun başına, arasına ve sonuna dağıtılır. Ortadaki boşlukta blokları ayırmak için en az bir 0 bulunmalıdır. Bu 0 yerleştirildikten sonra kalan dört 0'ın üç boşluğa dağıtım sayısı

$$\binom{4+3-1}{3-1}=\binom62=15$$

tir. Toplam $3\cdot15=45$ dizi vardır.

**Neden doğru?** 1 bloklarının pozitif uzunlukları ve aralarındaki zorunlu 0, “tam iki blok” koşulunu gerekli ve yeterli biçimde sağlar.

**Çeldirici notu:** Baş ve son boşluklar boş kalabilir; yalnız iki 1 bloğunun arasındaki boşluk zorunlu olarak doludur.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Üç sınıftan da eleman içeren sabit büyüklükte seçimleri durumlara ayırma.

**Çözüm:**

Dört kişilik ekipte üç grubun da bulunması için gruplardan birinden iki, diğerlerinden birer öğrenci seçilmelidir.

$$\binom42\binom31\binom21+\binom41\binom32\binom21+\binom41\binom31\binom22$$

$$=6\cdot3\cdot2+4\cdot3\cdot2+4\cdot3\cdot1=36+24+12=72$$

**Neden doğru?** $(2,1,1)$ dağılımında iki öğrencinin geldiği grup üç olası durum olarak ayrı ayrı ve eksiksiz sayılmıştır.

**Çeldirici notu:** Yalnız A grubundan iki kişi seçilen durumu saymak diğer iki grup dağılımını eksik bırakır.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Basamak ve parite koşullarını konuma göre ayırarak sayı oluşturma.

**Çözüm:**

Çift rakam yüzler basamağındaysa $0$ kullanılamaz. Yüzler basamağı için $2,4,6,8$ arasından 4; diğer iki basamak için beş tek rakamdan sıralı olarak 5 ve 4 seçenek vardır:

$$4\cdot5\cdot4=80$$

Çift rakam onlar ya da birler basamağındaysa çift rakamın konumu 2, değeri $0,2,4,6,8$ arasından 5 biçimde seçilir. Yüzler basamağı için 5, diğer tek basamak için 4 seçenek vardır:

$$2\cdot5\cdot5\cdot4=200$$

Toplam $80+200=280$ sayı yazılır.

**Neden doğru?** Sıfır yalnız çift rakamın yüzler basamağında olduğu durumda yasaklanmış, diğer konumlarda geçerli biçimde kullanılmıştır.

**Çeldirici notu:** Çift rakamı her konumda beş seçenekli saymak sıfırla başlayan yazılışları doğal sayı kabul eder.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Pozitif tam sayı çözümlerinde eşit bileşenli durumları içerme-dışlama ile ayıklama.

**Çözüm:**

Pozitif tam sayı çözüm sayısı $\binom{14}{2}=91$'dir. $x=y$ olduğunda $2x+z=15$ eşitliğinde $x=1,2,\ldots,7$ olabilir; 7 çözüm vardır. Aynı sayı diğer iki eşitlik için de geçerlidir ve ilk toplam $3\cdot7=21$ olur.

Üç eşitlik kümesinin ikili kesişimleri yalnız $(5,5,5)$ çözümüdür. İçerme-dışlama ile en az iki bileşeni eşit çözüm sayısı

$$21-3+1=19$$

dur. Bileşenleri farklı çözüm sayısı

$$91-19=72$$

olur.

**Neden doğru?** Birbirinden farklı olma koşulunu bozan bütün çözümler, üç eşitlik olayının birleşimi olarak eksiksiz sayılmıştır.

**Çeldirici notu:** $(5,5,5)$ çözümü üç eşitlik olayında da bulunduğu için kesişimler düzeltilmeden doğrudan 21 çıkarmak doğru değildir.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Sabit toplamlı, farklı elemanlı alt kümeleri sistematik biçimde sayma.

**Çözüm:**

En küçük elemanın değerine göre üçlüler şunlardır:

$$
\begin{aligned}
1&:\ \{1,5,9\},\{1,6,8\},\\
2&:\ \{2,4,9\},\{2,5,8\},\{2,6,7\},\\
3&:\ \{3,4,8\},\{3,5,7\},\\
4&:\ \{4,5,6\}.
\end{aligned}
$$

Toplam 8 seçim vardır.

**Neden doğru?** Üçlüler en küçük elemanlarına göre ayrıldığı için her seçim bir kez listelenmiş ve tekrar oluşmamıştır.

**Çeldirici notu:** Elemanların sırası önemli olmadığı için aynı üçlünün farklı sıraları yeni seçim sayılmaz.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Belirli elemanları aynı türdeki konumlara yerleştirme.

**Çözüm:**

Altı konumda üç tek ve üç çift numaralı yer vardır. 1 ile 2'nin kullanacağı konum türü 2 biçimde seçilir. Bu türdeki üç konumdan ikisine 1 ve 2 sıralı olarak $P(3,2)=6$ biçimde yerleşir. Kalan dört sayı boş konumlara $4!$ biçimde dizilir.

$$2\cdot P(3,2)\cdot4!=2\cdot6\cdot24=288$$

**Neden doğru?** Önce ortak konum paritesi seçildiği için 1 ile 2'nin ikisinin de tek ya da ikisinin de çift konumda bulunması koşulu doğrudan sağlanır.

**Çeldirici notu:** 1 ve 2 farklı sayılar olduğundan seçilen iki konuma yerleşimleri sıralıdır.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Döngü biçimindeki komşuluk grafiğini uygun renklerle boyama.

**Çözüm:**

İlk köşe için 3, ikinci köşe için 2 renk seçeneği vardır.

- Üçüncü köşe ilk köşeyle aynı renkteyse 1 seçenek vardır; dördüncü köşe bu ortak renkten farklı 2 renkten biri olabilir.
- Üçüncü köşe ilk iki köşeden de farklıysa 1 seçenek vardır; dördüncü köşe hem birinci hem üçüncü köşeden farklı olan tek renge boyanır.

$$3\cdot2\cdot(2+1)=18$$

**Neden doğru?** Son köşe hem üçüncü hem birinci köşeye komşu olduğundan bu iki köşenin aynı veya farklı renkte olması ayrı ele alınmıştır.

**Çeldirici notu:** Köşeleri doğrusal bir sıra gibi boyamak, son köşe ile ilk köşenin de komşu olduğunu gözden kaçırır.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Sembol kullanım sayılarının parite koşuluyla tekrarlı diziliş sayma.

**Çözüm:**

Üç harfin kullanım sayısı pozitif, çift ve toplamda 6 olmalıdır. Bu koşulları sağlayan tek dağılım $(2,2,2)$'dir. İkişer A, B ve C'nin farklı diziliş sayısı

$$\frac{6!}{2!\,2!\,2!}=90$$

dır.

**Neden doğru?** Pozitif çift sayıların en küçüğü 2 olduğundan üç harfin altışar konuma dağılımı zorunlu olarak ikişerdir.

**Çeldirici notu:** Harfleri farklı kabul edip $6!$ kullanmak, özdeş harflerin yer değiştirmelerini ayrı diziler sayar.
