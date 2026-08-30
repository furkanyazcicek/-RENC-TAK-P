# Konu 21 — Kombinasyon

## Test 02 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** İkili karşılaşma sayısından katılımcı sayısını belirleme.

**Çözüm:**

Her maç iki oyuncunun seçilmesiyle belirlenir. Oyuncu sayısı $n$ ise maç sayısı $\binom n2$ olur. Küçük değerler kontrol edildiğinde

$$\binom82=\frac{8\cdot7}{2}=28$$

olduğu görülür. Buna göre turnuvaya 8 oyuncu katılmıştır.

**Neden doğru?** Aynı iki oyuncunun yer değiştirmesi yeni bir maç oluşturmadığı için sırasız ikililer sayılmıştır.

**Çeldirici notu:** Her oyuncunun yedi maç yaptığını düşünerek $8\cdot7$ yazmak her maçı iki kez sayar.

## Soru 2

**Doğru cevap:** C

**Kazanım:** İki belirli kişiden tam olarak birinin seçildiği grupları sayma.

**Çözüm:**

Ayşe ile Berk'ten hangisinin seçileceği 2 biçimde belirlenir. Ekibin diğer iki üyesi, kalan sekiz öğrenciden seçilir.

$$2\cdot\binom82=2\cdot28=56$$

**Neden doğru?** İlk seçim Ayşe ile Berk'in birlikte bulunmasını engeller; kalan iki öğrenci bu ikisinin dışındaki kişilerden seçilir.

**Çeldirici notu:** “Tam olarak biri” yerine “en az biri” diye düşünmek, Ayşe ile Berk'in birlikte seçildiği ekipleri de sayar.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Noktalardan üçgen oluşturmayı kombinasyonla sayma.

**Çözüm:**

Çember üzerindeki herhangi üç farklı nokta bir üçgen belirler. Altı noktadan üçü

$$\binom63=\frac{6\cdot5\cdot4}{3\cdot2\cdot1}=20$$

biçimde seçilir.

**Neden doğru?** Çember üzerindeki üç farklı nokta aynı doğru üzerinde bulunamayacağından her üçlü bir üçgen oluşturur.

**Çeldirici notu:** Üç köşenin seçilme sırasını önemli kabul etmek aynı üçgeni birden fazla kez sayar.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Ayrık seçim durumlarını toplayarak sayma.

**Çözüm:**

Seçilen üç top ya kırmızı ya da mavi olmalıdır. Üç kırmızı top

$$\binom53=10,$$

üç mavi top ise

$$\binom43=4$$

biçimde seçilir. İki durum aynı anda gerçekleşemeyeceği için seçim sayıları toplanır:

$$10+4=14$$

**Neden doğru?** Aynı renk koşulunu sağlayan kırmızı ve mavi seçimler ayrı durumlar olarak eksiksiz sayılmıştır.

**Çeldirici notu:** Kırmızı ve mavi seçim sayılarını çarpmak, iki farklı renkten aynı anda üçer top seçiliyormuş gibi sonuç verir.

## Soru 5

**Doğru cevap:** A

**Kazanım:** En az bir belirli öğenin bulunduğu seçimleri tüm durumlardan yararlanarak sayma.

**Çözüm:**

Sekiz kitaptan yapılabilecek tüm üçlü seçimlerin sayısı

$$\binom83=56$$

dır. A ve B kitaplarının hiçbirinin seçilmediği durumda üç kitap, kalan altı kitaptan seçilir:

$$\binom63=20$$

Bu seçimler tüm durumlardan çıkarılır:

$$56-20=36$$

**Neden doğru?** A ile B'den birinin veya ikisinin seçildiği bütün durumlar korunmuş, yalnız ikisinin de seçilmediği durumlar elenmiştir.

**Çeldirici notu:** Yalnız A veya yalnız B'nin seçildiği durumları saymak, ikisinin birlikte seçildiği grupları dışarıda bırakır.

## Soru 6

**Doğru cevap:** B

**Kazanım:** “Birlikte ya da ikisi de değil” koşulunu ayrık durumlarla sayma.

**Çözüm:**

Ece ile Mert birlikte gruptaysa üçüncü kişi kalan dört öğrenciden 4 biçimde seçilir.

İkisi de grupta değilse üç kişi kalan dört öğrenciden

$$\binom43=4$$

biçimde seçilir. Bu iki durum ayrık olduğundan toplam

$$4+4=8$$

grup vardır.

**Neden doğru?** Koşulu sağlayan iki olasılık ayrı ayrı sayılmış ve hiçbir grup iki durumda birden yer almamıştır.

**Çeldirici notu:** Yalnız Ece ile Mert'in birlikte olduğu grupları saymak, ikisinin de bulunmadığı grupları eksik bırakır.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Bir seçimde belirli türden tam olarak istenen sayıda öğe bulundurma.

**Çözüm:**

Üç yıldızlı karttan ikisi ve dört yıldızsız karttan ikisi seçilir.

$$\binom32\cdot\binom42=3\cdot6=18$$

**Neden doğru?** Dört kartlık seçim, iki yıldızlı ve iki yıldızsız kart seçimiyle tamamlanmıştır.

**Çeldirici notu:** Yalnız yıldızlı kartları seçmek, dört kartlık seçimin yıldızsız kısmını belirlemez.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Üçgen oluşturmayan doğrusal nokta seçimlerini bütün üçlülerden çıkarma.

**Çözüm:**

Yedi noktadan seçilebilecek bütün üçlülerin sayısı

$$\binom73=35$$

tir. Aynı doğru üzerindeki dört noktadan seçilen her üçlü üçgen oluşturmaz. Bu üçlülerin sayısı

$$\binom43=4$$

olduğundan üçgen sayısı

$$35-4=31$$

olur.

**Neden doğru?** Soruda bu dört nokta dışında doğrusal üçlü bulunmadığı belirtildiği için çıkarılması gereken bütün geçersiz seçimler sayılmıştır.

**Çeldirici notu:** Aynı doğru üzerindeki dört noktanın tamamını tek bir geçersiz durum saymak, bu noktaların oluşturduğu dört ayrı üçlüyü gözden kaçırır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Zorunlu öğeler seçildikten sonra kalan seçimi tamamlama.

**Çözüm:**

İlk iki soru cevaplanacak altı soru arasında zaten yer alır. Geriye seçilmesi gereken dört soru ve seçim yapılabilecek sekiz soru kalır.

$$\binom84=70$$

**Neden doğru?** Zorunlu iki soru yeniden seçilmemiş, yalnız kalan dört sorunun seçimi sayılmıştır.

**Çeldirici notu:** On sorudan doğrudan altısını seçmek, ilk iki sorunun bulunmadığı seçimleri de sonuca katar.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Önce grup seçip ardından grup içinden görevli belirleme.

**Çözüm:**

Dört kişilik kurul dokuz öğrenciden

$$\binom94=126$$

biçimde seçilir. Her kurul için sözcü, seçilen dört üyeden 4 biçimde belirlenir.

$$\binom94\cdot4=126\cdot4=504$$

**Neden doğru?** Aynı kurulun farklı üyelerinin sözcü olması farklı sonuçlar oluşturduğu için sözcü seçimi ayrıca sayılmıştır.

**Çeldirici notu:** Yalnız dört kişilik kurulları saymak, her kurul içindeki dört farklı sözcü seçimini göz ardı eder.
