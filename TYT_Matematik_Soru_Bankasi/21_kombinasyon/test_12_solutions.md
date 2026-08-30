# Konu 21 — Kombinasyon

## Test 12 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Belirli bir alt gruptan tam olarak bir kişi seçme.

**Çözüm:**

A, B ve C'den biri

$$\binom31=3$$

biçimde seçilir. Grubun kalan üç üyesi diğer yedi öğrenciden seçilir.

$$\binom31\binom73=3\cdot35=105$$

**Neden doğru?** Seçilmeyen iki özel öğrenci kalan seçim havuzuna katılmadığı için grupta tam bir özel öğrenci bulunur.

**Çeldirici notu:** Kalan üç kişiyi dokuz öğrenciden seçmek A, B ve C'den birden fazla kişinin gruba girmesine izin verir.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Bir ana seçimden sonra kalan öğeleri farklı amaçlara ayırma.

**Çözüm:**

Sergilenecek üç kitap

$$\binom73=35$$

biçimde seçilir. Kalan dört kitaptan Ayça'ya verilecek kitap 4, Berk'e verilecek farklı kitap 3 biçimde belirlenir.

$$\binom73\cdot4\cdot3=35\cdot12=420$$

**Neden doğru?** Ayça ve Berk farklı kişiler olduğu için onlara verilen kitapların yer değiştirmesi farklı sonuç oluşturur.

**Çeldirici notu:** Ayça ve Berk için kitapları sırasız bir ikili olarak seçmek, hangi kitabın kime verildiğini belirlemez.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Tekrarlı seçimde her tür için alt sınır uygulama.

**Çözüm:**

Önce üç çeşidin her birinden ikişer şeker alınır. Böylece 6 şeker belirlenir ve geriye üç çeşit arasında serbestçe dağıtılacak 2 şeker kalır.

$$\binom{2+3-1}{3-1}=\binom42=6$$

**Neden doğru?** Başlangıçta verilen ikişer şeker her çeşit için alt sınırı sağlar; kalan iki şeker herhangi bir çeşide eklenebilir.

**Çeldirici notu:** Sekiz şekerin tamamını serbest dağıtmak bir çeşitten ikiden az alınan seçimleri de sayar.

## Soru 4

**Doğru cevap:** E

**Kazanım:** İki ikili için farklı seçilme ilişkilerini aynı grupta uygulama.

**Çözüm:**

A ile B birlikte seçilirse C ile D'den biri 2, dördüncü kişi diğer beş öğrenciden 5 biçimde seçilir. Bu durum $2\cdot5=10$ grup verir.

A ile B'nin ikisi de seçilmezse C ile D'den biri 2 biçimde seçilir ve kalan üç kişi diğer beş öğrenciden $\binom53=10$ biçimde seçilir. Bu durum $2\cdot10=20$ grup verir.

$$10+20=30$$

**Neden doğru?** A–B ikilisinin izin verilen iki durumu ayrı ayrı sayılmış; C–D ikilisinden her durumda yalnız biri alınmıştır.

**Çeldirici notu:** A ile B'den yalnız birini içeren gruplar ilk koşulu sağlamaz.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Tamamlayıcı büyüklükteki kombinasyonların eşitliğini kullanma.

**Çözüm:**

Dokuz elemandan beşini seçmek, dışarıda kalacak dört elemanı seçmekle aynı sayıda sonuç verir.

$$\binom95=\binom94=126$$

Bu nedenle

$$\binom94+\binom95=126+126=252$$

olur.

**Neden doğru?** Her beşli seçim, dışarıda kalan dörtlüyle bire bir eşleşir.

**Çeldirici notu:** İki kombinasyon eşit diye toplamı tek birinin değeri kabul etmek iki terimden birini yok sayar.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Bir kurulda belirli türdeki kişi sayısının çift olmasını durumlara ayırma.

**Çözüm:**

Dört kişilik kurulda kadın sayısı 0, 2 veya 4 olabilir.

$$\binom50\binom54+\binom52\binom52+\binom54\binom50$$

$$=1\cdot5+10\cdot10+5\cdot1=110$$

**Neden doğru?** Kurul büyüklüğüne uygun bütün çift kadın sayıları ayrı ayrı sayılmıştır.

**Çeldirici notu:** Yalnız iki kadın bulunan kurulları saymak sıfır veya dört kadın bulunan uygun kurulları eksik bırakır.

## Soru 7

**Doğru cevap:** C

**Kazanım:** İki seçimin ortak ve yalnız kendilerine ait öğelerini ayırma.

**Çözüm:**

Ortak kitap 6 biçimde seçilir. Ayça'nın yalnız kendisinin seçtiği iki kitap kalan beş kitaptan $\binom52=10$ biçimde seçilir. Berk'in yalnız kendisinin seçtiği iki kitap, ortak ve Ayça'ya özgü kitaplar çıkarıldıktan sonra kalan üç kitaptan $\binom32=3$ biçimde seçilir.

$$6\cdot\binom52\binom32=6\cdot10\cdot3=180$$

**Neden doğru?** Ayça'ya ve Berk'e özgü kitap grupları ayrık tutulduğu için ortak kitap sayısı tam olarak birdir.

**Çeldirici notu:** Berk'in son iki kitabını kalan beş kitaptan seçmek birden fazla ortak kitaba izin verir.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Bir öğeyi dışarıda bırakıp kalanları adsız ikililere ayırma.

**Çözüm:**

Çiftlerin dışında kalacak öğrenci 7 biçimde seçilir. Kalan altı öğrencinin üç adsız ikiliye ayrılma sayısı

$$\frac{6!}{2^3\cdot3!}=15$$

tir.

$$7\cdot15=105$$

**Neden doğru?** Dışarıda kalan öğrenci belirlendikten sonra kalan herkes tam bir çalışma çiftinde yer alır.

**Çeldirici notu:** Yalnız eşleştirmeleri saymak, dışarıda kalabilecek yedi farklı öğrenciyi göz ardı eder.

## Soru 9

**Doğru cevap:** E

**Kazanım:** En az bir tamamlayıcı sayı çifti içeren seçimleri bütünleyici sayma.

**Çözüm:**

Toplamı 11 olan sayılar beş tamamlayıcı çift oluşturur. On sayıdan yapılabilecek bütün dörtlü seçimlerin sayısı

$$\binom{10}{4}=210$$

dur. Toplamı 11 olan hiçbir çift içermeyen bir seçim için beş çiftten dördü seçilir ve her çiftten bir sayı alınır:

$$\binom54\cdot2^4=5\cdot16=80$$

Bu seçimler çıkarılır:

$$210-80=130$$

**Neden doğru?** Tamamlayıcı çift içermeyen dörtlüler elendiğinde en az bir 11 toplamlı ikili içeren bütün seçimler kalır.

**Çeldirici notu:** Her 11 toplamlı çifti ayrı seçip kalan iki sayıyı belirlemek, iki tamamlayıcı çift içeren dörtlüleri tekrar sayar.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Belirli bir alt gruptan en az istenen sayıda kişi seçme.

**Çözüm:**

A, B ve C'den tam ikisi seçilirse kalan iki kişi diğer beş öğrenciden seçilir:

$$\binom32\binom52=3\cdot10=30$$

Üçü birden seçilirse dördüncü kişi diğer beş öğrenciden 5 biçimde belirlenir.

$$30+5=35$$

**Neden doğru?** En az iki özel kişi koşulunu sağlayan iki ve üç özel kişili bütün gruplar sayılmıştır.

**Çeldirici notu:** Yalnız tam iki özel kişi bulunan grupları saymak A, B ve C'nin üçünün birlikte bulunduğu grupları eksik bırakır.
