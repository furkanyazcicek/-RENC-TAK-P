# Konu 21 — Kombinasyon

## Test 07 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Belirli bir toplamı veren sırasız sayı çiftlerini belirleme.

**Çözüm:**

Toplamı 11 olan farklı sayı çiftleri

$$(1,10),\ (2,9),\ (3,8),\ (4,7),\ (5,6)$$

olmak üzere 5 tanedir.

**Neden doğru?** Her çift küçük elemanı önce yazılarak yalnız bir kez sayılmıştır.

**Çeldirici notu:** $(1,10)$ ile $(10,1)$ çiftlerini farklı kabul etmek seçimin sırasını gereksiz yere önemser.

## Soru 2

**Doğru cevap:** C

**Kazanım:** Seçilen bir grubun içinden daha küçük bir alt grup oluşturma.

**Çözüm:**

Üç kişilik kurul sekiz öğrenciden

$$\binom83=56$$

biçimde seçilir. Her kurul için çalışma grubunu oluşturacak iki üye $\binom32=3$ biçimde belirlenir.

$$\binom83\binom32=56\cdot3=168$$

**Neden doğru?** Aynı kurul içinde farklı iki kişinin çalışma grubunda yer alması farklı sonuç oluşturur.

**Çeldirici notu:** Yalnız kurulları saymak, her kuruldan oluşturulabilen üç farklı çalışma grubunu göz ardı eder.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Aynı türden birden fazla ürün seçilebildiği durumları sayma.

**Çözüm:**

Üç şeker çeşidinden alınan miktarlar $x,y,z$ olmak üzere

$$x+y+z=5,\qquad x,y,z\ge0$$

olur. Beş şekeri yan yana, iki ayıracı da aralarına veya uçlara yerleştirdiğimiz düşünülürse toplam 7 konumdan ayıraçların iki konumu seçilir:

$$\binom72=21$$

**Neden doğru?** Ayıraçların ayırdığı üç bölüm, her şeker çeşidinden alınan miktarı tek biçimde belirler; boş bölüm o çeşitten hiç alınmadığını gösterir.

**Çeldirici notu:** Her çeşitten en az bir şeker alma koşulu eklemek, soruda izin verilen sıfır miktarlarını dışarıda bırakır.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Ortanca değer belli olduğunda küçük ve büyük değerleri ayrı seçme.

**Çözüm:**

Ortadaki sayı 4 olacağı için 4 seçilir. Ondan küçük sayı $1,2,3$ arasından 3 biçimde, büyük sayı ise $5,6$ arasından 2 biçimde seçilir.

$$3\cdot2=6$$

**Neden doğru?** Bir sayı 4'ten küçük, diğeri 4'ten büyük seçildiği için sıralamadaki ortanca değer zorunlu olarak 4 olur.

**Çeldirici notu:** İki sayıyı da 4'ün aynı tarafından seçmek, 4'ü ortanca olmaktan çıkarır.

## Soru 5

**Doğru cevap:** A

**Kazanım:** İki ayrı yasak birlikte bulunma koşulunda içerme–çıkarma yapmak.

**Çözüm:**

On öğrenciden oluşturulabilecek bütün dörtlü grupların sayısı $\binom{10}{4}=210$'dur.

A ile B'nin birlikte olduğu gruplar $\binom82=28$, C ile D'nin birlikte olduğu gruplar da $\binom82=28$ tanedir. A, B, C ve D'nin dördünün birden bulunduğu tek grup her iki çıkarma sırasında da elendiği için bir kez geri eklenir.

$$210-28-28+1=155$$

**Neden doğru?** İki yasaktan en az birini bozan bütün gruplar çıkarılmış, iki yasağı da bozan grup çift çıkarıldığı için düzeltilmiştir.

**Çeldirici notu:** Son grubu geri eklememek A, B, C ve D'nin birlikte olduğu grubu iki kez çıkarmış olur.

## Soru 6

**Doğru cevap:** B

**Kazanım:** İki belirli öğeden tam olarak birini içeren seçimleri sayma.

**Çözüm:**

A ile B'den hangisinin seçileceği 2 biçimde belirlenir. Kalan iki bitki, diğer dört bitkiden seçilir.

$$2\binom42=2\cdot6=12$$

**Neden doğru?** İlk aşamada özel iki bitkiden yalnız biri seçilmiş, öteki seçim dışında bırakılmıştır.

**Çeldirici notu:** Kalan iki bitkiyi beş bitkiden seçmek A ile B'nin ikisinin birlikte seçilmesine izin verir.

## Soru 7

**Doğru cevap:** C

**Kazanım:** İki ayrı yasak özelliğe sahip ikilileri içerme–çıkarma ile eleme.

**Çözüm:**

Sekiz sayıdan seçilebilecek bütün ikililerin sayısı $\binom82=28$'dir.

Ardışık 7 ikili, toplamı 9 olan 4 ikili vardır. $(4,5)$ ikilisi hem ardışık hem de toplamı 9 olduğu için iki listede de bulunur. Geçersiz ikili sayısı

$$7+4-1=10$$

olur. Bu nedenle uygun seçim sayısı

$$28-10=18$$

dir.

**Neden doğru?** İki yasağı da bozan $(4,5)$ ikilisi yalnız bir kez elenmiştir.

**Çeldirici notu:** Ortak ikiliyi dikkate almadan $7+4$ yazmak, $(4,5)$ seçimini iki kez çıkarır.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Bir aralığın içinden ve dışından tam istenen sayılarda seçim yapma.

**Çözüm:**

Altıdan küçük beş sayı $(1,2,3,4,5)$, en az altı olan beş sayı $(6,7,8,9,10)$ vardır. İlk gruptan üç, ikinci gruptan iki sayı seçilir.

$$\binom53\binom52=10\cdot10=100$$

**Neden doğru?** Beş sayılık seçim, koşula uygun olarak iki sayı grubuna $3+2$ biçiminde ayrılmıştır.

**Çeldirici notu:** Yalnız küçük sayıları seçmek, kalan iki sayının belirlenmesini eksik bırakır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** Kombinasyonun tamamlayıcı seçim eşitliğini kullanarak işlem yapma.

**Çözüm:**

$$\binom{10}{4}=210,\qquad \binom{10}{5}=252,\qquad \binom{10}{6}=\binom{10}{4}=210$$

olduğundan

$$210+252+210=672$$

bulunur.

**Neden doğru?** On elemandan altısını seçmek, dışarıda kalacak dört elemanı seçmekle aynı sayıda sonuç verir.

**Çeldirici notu:** $\binom{10}{6}$ değerini yeniden hesaplamak yerine yanlışlıkla $\binom{10}{5}$ ile eşitlemek toplamı değiştirir.

## Soru 10

**Doğru cevap:** A

**Kazanım:** Seçilen dört öğeyi adsız iki ikiliye ayırma.

**Çözüm:**

Önce sekiz öğrenciden dördü

$$\binom84=70$$

biçimde seçilir. Seçilen dört öğrenciden biri sabit düşünülürse onun eşi diğer üç öğrenciden 3 biçimde seçilir; kalan iki öğrenci de öteki çifti oluşturur.

$$\binom84\cdot3=70\cdot3=210$$

**Neden doğru?** Sabit öğrenci yöntemi, aynı iki çalışma çiftinin yer değiştirmesini tekrar saymadan üç farklı eşleştirmeyi verir.

**Çeldirici notu:** Dört kişiyi yalnız seçmek, bu dört kişinin oluşturabileceği üç farklı ikili ayrımını hesaba katmaz.
