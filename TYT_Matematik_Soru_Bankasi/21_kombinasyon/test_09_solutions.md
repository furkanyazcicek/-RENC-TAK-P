# Konu 21 — Kombinasyon

## Test 09 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Belirli bir alt gruptan tam istenen sayıda kişi seçme.

**Çözüm:**

A, B ve C'den ikisi

$$\binom32=3$$

biçimde seçilir. Grubun kalan iki üyesi diğer altı öğrenciden seçilir.

$$\binom32\binom62=3\cdot15=45$$

**Neden doğru?** Dört kişilik grup, üç özel öğrenciden tam iki ve diğer öğrencilerden iki kişiyle tamamlanmıştır.

**Çeldirici notu:** Kalan iki kişiyi yedi kişiden seçmek, seçilmeyen özel öğrencinin de gruba girmesine ve özel kişi sayısının üç olmasına izin verir.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Kombinasyon eşitliğinden bilinmeyen eleman sayısını bulma.

**Çözüm:**

$$\binom n2=\frac{n(n-1)}2,\qquad \binom n3=\frac{n(n-1)(n-2)}6$$

olduğundan ve $n\ge3$ olduğundan ortak $n(n-1)$ çarpanları sadeleştirilebilir:

$$\frac12=\frac{n-2}{6}$$

Buradan $n-2=3$ ve $n=5$ bulunur.

**Neden doğru?** $n\ge3$ koşulu paydalardaki seçimlerin tanımlı ve sadeleştirilen çarpanların sıfırdan farklı olmasını sağlar.

**Çeldirici notu:** $\binom n3$ ifadesindeki $(n-2)$ çarpanını gözden kaçırmak eşitliği yanlış çözdürür.

## Soru 3

**Doğru cevap:** A

**Kazanım:** Bütün öğeleri eş büyüklükte adsız gruplara ayırma.

**Çözüm:**

İlk üçlü $\binom93$, ikinci üçlü kalan altı öğrenciden $\binom63$ biçimde seçilir; son üçlü kendiliğinden belirlenir. Gruplar adlandırılmadığı için üç grubun $3!$ farklı seçilme sırası aynı bölünmeyi verir.

$$\frac{\binom93\binom63}{3!}=\frac{84\cdot20}{6}=280$$

**Neden doğru?** Her öğrenci tam bir grupta yer almış ve grup adlarından kaynaklanan tekrarlar kaldırılmıştır.

**Çeldirici notu:** $3!$ ile bölmemek aynı üç grubu seçilme sıralarına göre altı kez sayar.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Tekrarlı seçimde kullanılan tür sayısını sabitleme.

**Çözüm:**

Kullanılacak iki kurabiye çeşidi

$$\binom42=6$$

biçimde seçilir. Yedi kurabiyenin seçilen iki çeşide pozitif olarak dağılımları

$$1+6,\ 2+5,\ 3+4,\ 4+3,\ 5+2,\ 6+1$$

olmak üzere 6 tanedir.

$$\binom42\cdot6=6\cdot6=36$$

**Neden doğru?** İki çeşidin de kullanılması için her ikisine en az bir kurabiye verilmiştir.

**Çeldirici notu:** Bir çeşide sıfır kurabiye vermek, seçimin tam olarak iki çeşitten oluşması koşulunu bozar.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Belirli sıradaki seçilen değeri sabitleyerek alt ve üst seçimleri ayırma.

**Çözüm:**

İkinci sayı 4 olacağı için 4 seçilir. Ondan küçük tek sayı $1,2,3$ arasından 3 biçimde; ondan büyük iki sayı ise $5,6,\ldots,12$ arasından

$$\binom82=28$$

biçimde seçilir.

$$3\cdot28=84$$

**Neden doğru?** Tam bir sayı 4'ten küçük seçildiği için 4 sıralamada ikinci konumda kalır.

**Çeldirici notu:** 4'ten küçük iki sayı seçmek, 4'ü üçüncü sıraya taşır.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Çoğunluk koşulunu olası kişi dağılımlarına ayırma.

**Çözüm:**

Üç kişilik kurulda kadınların çoğunlukta olması için iki kadın bir erkek veya üç kadın seçilmelidir.

$$\binom42\binom31+\binom43=6\cdot3+4=22$$

**Neden doğru?** Üç kişilik kurulda kadınların çoğunlukta olduğu iki olası dağılım da sayılmıştır.

**Çeldirici notu:** Yalnız iki kadın bulunan kurulları saymak, üç kadından oluşan kurulları eksik bırakır.

## Soru 7

**Doğru cevap:** E

**Kazanım:** İki ayrı alt gruptan en az birer öğe alma koşulunda içerme–çıkarma yapma.

**Çözüm:**

On sorudan yapılabilecek bütün beşli seçimlerin sayısı $\binom{10}{5}=252$'dir.

İlk iki sorunun hiçbirinin seçilmediği $\binom85=56$ seçim ve son iki sorunun hiçbirinin seçilmediği yine 56 seçim vardır. Bu iki duruma birden giren, yani yalnız ortadaki altı sorudan seçilen beşli sayısı $\binom65=6$'dır ve iki kez çıkarıldığı için geri eklenir.

$$252-56-56+6=146$$

**Neden doğru?** Hem ilk iki sorudan hem son iki sorudan en az birer soru içeren seçimler bırakılmıştır.

**Çeldirici notu:** Ortadaki altı sorudan yapılan seçimleri geri eklememek bu seçimleri iki kez çıkarmış olur.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Tamamlayıcı sayı çiftlerinden aynı anda en fazla bir öğe seçme.

**Çözüm:**

Toplamı 11 olan sayılar

$$(1,10),\ (2,9),\ (3,8),\ (4,7),\ (5,6)$$

biçiminde beş çifttir. Üç sayının hiçbir ikisi 11 toplamını vermeyecekse üç farklı çift seçilip her çiftten bir sayı alınmalıdır.

$$\binom53\cdot2^3=10\cdot8=80$$

**Neden doğru?** Aynı tamamlayıcı çiftten iki sayı alınmadığı için 11 toplamını veren bir ikili oluşmaz.

**Çeldirici notu:** Üç sayıyı doğrudan on sayıdan seçmek, aynı tamamlayıcı çiftin iki üyesini de içeren seçimleri de sayar.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Öğeleri iki ayrık, adlandırılmış ve boş olmayan gruba seçmeli olarak yerleştirme.

**Çözüm:**

Her öğrenci A grubunda, B grubunda veya hiçbir grupta olmak üzere 3 durumda bulunabilir. Böylece $3^5=243$ yerleştirme vardır.

A grubunun boş olduğu yerleştirmelerde her öğrenci için yalnız B veya hiçbir grup seçenekleri bulunur: $2^5=32$. B grubunun boş olduğu 32 yerleştirme de çıkarılır. Her iki grubun boş olduğu tek yerleştirme iki kez çıkarıldığı için geri eklenir.

$$3^5-2\cdot2^5+1=243-64+1=180$$

**Neden doğru?** Gruplar ayrık ve adlandırılmış tutulmuş, her iki grubun da en az bir üyesi olması sağlanmıştır.

**Çeldirici notu:** Sonucu ikiye bölmek A ve B gruplarının adlandırılmış olduğunu göz ardı eder.

## Soru 10

**Doğru cevap:** C

**Kazanım:** İki seçimin en az bir ortak öğe içerdiği durumları bütünleyici sayma.

**Çözüm:**

Ayça'nın iki kitap seçimi $\binom52=10$, Berk'in seçimi de bağımsız olarak 10 biçimde yapılabilir. Toplam $10\cdot10=100$ seçim vardır.

Hiç ortak kitap bulunmayan seçimlerde Ayça iki kitabı 10 biçimde, Berk ise kalan üç kitaptan ikisini $\binom32=3$ biçimde seçer. Bu durumların sayısı $10\cdot3=30$'dur.

$$100-30=70$$

**Neden doğru?** Ortak kitap içermeyen seçimler çıkarıldığında bir veya iki ortak kitabı bulunan bütün seçimler kalır.

**Çeldirici notu:** Yalnız tam bir ortak kitap bulunan seçimleri saymak, iki öğrencinin aynı iki kitabı seçtiği durumları eksik bırakır.
