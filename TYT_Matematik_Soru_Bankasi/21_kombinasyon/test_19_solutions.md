# Konu 21 — Kombinasyon

## Test 19 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Belirli bir özelliği taşıyan ve taşımayan sayılardan koşullu seçim yapma.

**Çözüm:**

Listedeki 3'ün katları $3,6,9$ olmak üzere 3 tanedir. Diğer 6 sayı 3'ün katı değildir. Seçimin tam iki elemanı 3'ün katı olacağı için

$$\binom32\binom62=3\cdot15=45$$

seçim yapılabilir.

**Neden doğru?** Dört sayının kalan ikisi, tamlık koşulu nedeniyle 3'ün katı olmayan sayılardan seçilmiştir.

**Çeldirici notu:** Dört sayının tamamını dokuz sayıdan seçmek, 3'ün katlarının sayısını sınırlamaz.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Boyutu üstten sınırlanan alt kümeleri sayma.

**Çözüm:**

En fazla iki elemanlı alt kümeler; boş küme, bir elemanlı ve iki elemanlı alt kümelerdir:

$$\binom70+\binom71+\binom72=1+7+21=29$$

**Neden doğru?** Boş kümenin eleman sayısı sıfır olduğundan “en fazla iki” koşulunu sağlar.

**Çeldirici notu:** Boş kümeyi hesaba katmamak sonucu bir eksik verir.

## Soru 3

**Doğru cevap:** A

**Kazanım:** En az koşulunu ayrık durumlara ayırarak seçim yapma.

**Çözüm:**

Seçkide ya üç ya da dört şiir kitabı bulunabilir. Diğer 8 kitaptan gerekli sayıda seçim yapıldığında

$$\binom43\binom82+\binom44\binom81$$

$$=4\cdot28+1\cdot8=120$$

elde edilir.

**Neden doğru?** Beş kitaplık seçkide şiir kitabı sayısının en az üç olabileceği bütün durumlar ayrı ayrı sayılmıştır.

**Çeldirici notu:** Yalnız üç şiir kitabı seçmek, dört şiir kitabı içeren uygun seçkileri dışarıda bırakır.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Adlandırılmış ve ayrık iki takımı art arda seçme.

**Çözüm:**

Kırmızı takım 9 öğrenciden

$$\binom93=84$$

biçimde seçilir. Mavi takım, kalan 6 öğrenciden

$$\binom63=20$$

biçimde seçilir. Takımların adları farklı olduğundan yer değiştirmeleri aynı sonuç değildir:

$$84\cdot20=1680$$

**Neden doğru?** İlk takım seçildikten sonra ikinci takım yalnız kalan öğrencilerden kurulduğu için iki takımın ortak üyesi olmaz.

**Çeldirici notu:** Sonucu ikiye bölmek, kırmızı ve mavi takım adlarının ayırt edici olmasını gözden kaçırır.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Çarpımın tek–çift durumunu kullanarak sayı seçme.

**Çözüm:**

Üç sayının çarpımının tek olması için üçünün de tek olması gerekir. Bu nedenle bütün üçlülerden yalnız tek sayılardan oluşan üçlüler çıkarılır. Listede 5 tek sayı vardır:

$$\binom{10}{3}-\binom53=120-10=110$$

**Neden doğru?** Çarpımın çift olması için seçilen üçlüde en az bir çift sayı bulunması yeterlidir.

**Çeldirici notu:** Yalnız bir çift sayı içeren üçlüleri saymak, iki veya üç çift sayı içeren uygun seçimleri dışarıda bırakır.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Özel üçlüden en az iki kişiyi içeren kurul seçme.

**Çözüm:**

Özel üçlüden tam iki kişi seçilirse diğer 6 kişiden üç kişi; özel üçlünün tamamı seçilirse diğer 6 kişiden iki kişi seçilir:

$$\binom32\binom63+\binom33\binom62$$

$$=3\cdot20+1\cdot15=75$$

**Neden doğru?** “En az iki” koşulunun iki ve üç özel kişi durumları ayrık olarak bütün olasılıkları kapsar.

**Çeldirici notu:** Yalnız iki özel kişi seçmek, A, B ve C'nin üçünün de kurulda bulunduğu grupları eksik bırakır.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Dikdörtgeni belirleyen yatay ve düşey doğru çiftlerini seçme.

**Çözüm:**

Her dikdörtgen için 5 yatay doğrudan ikisi ve 4 düşey doğrudan ikisi seçilir:

$$\binom52\binom42=10\cdot6=60$$

**Neden doğru?** İki yatay ve iki düşey doğru, kenarları bu doğrular üzerinde bulunan bir ve yalnız bir dikdörtgen belirler.

**Çeldirici notu:** Yalnız yan yana doğruları seçmek, birden fazla aralık genişliğine sahip dikdörtgenleri eksik sayar.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Aynı büyüklükte iki adlandırılmamış grup içeren bölünmeleri sayma.

**Çözüm:**

İki kişilik grup, büyüklüğü farklı olduğu için $\binom82=28$ biçimde seçilir. Kalan 6 öğrenci iki üçlü gruba ayrılır. İlk üçlü $\binom63=20$ biçimde seçilir ancak üçlü grupların adları olmadığından ikiye bölünür:

$$\binom82\cdot\frac{\binom63}{2}=28\cdot10=280$$

**Neden doğru?** İki kişilik grup kendiliğinden ayırt edilir; eş büyüklükteki iki üçlünün yer değiştirmesi yeni bir gruplandırma oluşturmaz.

**Çeldirici notu:** Üçlü gruplar için ikiye bölmemek her gruplandırmayı iki kez sayar.

## Soru 9

**Doğru cevap:** B

**Kazanım:** İki özel öğeden en az birini içeren seçimleri tümleyenle sayma.

**Çözüm:**

On bir kitaptan dört kitap seçmenin

$$\binom{11}{4}=330$$

yolu vardır. A ve B'nin ikisinin de seçilmediği seçimlerde dört kitap diğer 9 kitaptan seçilir:

$$\binom94=126$$

Bu seçimler çıkarılır:

$$330-126=204$$

**Neden doğru?** Tümleyeni alınan durum, A ile B'den hiçbirinin bulunmadığı bütün seçimlerdir.

**Çeldirici notu:** A ile B'den tam birini seçmek, ikisinin birlikte bulunduğu uygun seçkileri dışarıda bırakır.

## Soru 10

**Doğru cevap:** C

**Kazanım:** İki kişinin birlikte seçilme durumlarının aynı olmasını sayma.

**Çözüm:**

A ile B birlikte seçilirse kalan üç öğrenci diğer 10 öğrenciden seçilir:

$$\binom{10}{3}=120$$

İkisi de seçilmezse beş öğrencinin tamamı diğer 10 öğrenciden seçilir:

$$\binom{10}{5}=252$$

İki ayrık durumun toplamı

$$120+252=372$$

olur.

**Neden doğru?** Koşul A ve B'nin ya ikisinin de içeride ya ikisinin de dışarıda olmasına izin verir.

**Çeldirici notu:** Yalnız birlikte seçildikleri durumu saymak, ikisinin de bulunmadığı grupları eksik bırakır.
