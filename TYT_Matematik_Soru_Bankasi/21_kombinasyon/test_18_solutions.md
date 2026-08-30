# Konu 21 — Kombinasyon

## Test 18 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Ardışık olmayan elemanları seçme.

**Çözüm:**

Seçilen sayılar $a<b<c$ olsun. Aralarında en az birer sayı bulunması için

$$a'=a,\qquad b'=b-1,\qquad c'=c-2$$

dönüşümü yapılır. Böylece $1$ ile $6$ arasından herhangi üç farklı sayı seçme problemi elde edilir:

$$\binom63=20$$

**Neden doğru?** Çıkarılan kaydırmalar, seçilen sayılar arasındaki zorunlu birer boşluğu hesaptan kaldırır ve her uygun seçimle bire bir eşleşir.

**Çeldirici notu:** Yalnız art arda gelen üçlüleri çıkarmak, tek bir ardışık çift içeren seçimleri hesaba katmaz.

## Soru 2

**Doğru cevap:** D

**Kazanım:** İki özel kişiden tam olarak birini içeren kurul seçme.

**Çözüm:**

A ile B'den seçilecek kişi 2 biçimde belirlenir. Kurulun kalan iki üyesi diğer 5 kişiden seçilir:

$$2\binom52=2\cdot10=20$$

**Neden doğru?** İlk seçim özel ikiliden yalnız bir kişiyi, ikinci seçim bu ikilinin dışındaki kişileri kullanır.

**Çeldirici notu:** A ve B dışındaki beş kişiden üç kişi seçmek, özel kişilerin ikisini de kurul dışında bırakır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Ayrık ve adlandırılmamış iki alt kümeyi seçme.

**Çözüm:**

Önce iki alt kümede yer alacak dört eleman seçilir:

$$\binom64=15$$

Bu dört elemanın ikişerli iki gruba ayrılmasının 3 farklı yolu vardır. Dolayısıyla

$$15\cdot3=45$$

seçim yapılabilir.

**Neden doğru?** İki alt küme adlandırılmadığı için aynı iki grubun yer değiştirmesi yeni bir seçim değildir.

**Çeldirici notu:** İlk ikiliyi ve ikinci ikiliyi ayrı ayrı seçip ikiye bölmemek, her alt küme çiftini iki kez sayar.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Aynı çiftten iki kişi gelmeyecek biçimde seçim yapma.

**Çözüm:**

Önce grupta temsil edilecek üç çift, beş çiftten seçilir. Ardından seçilen her çiftten gruba girecek kişi iki biçimde belirlenir:

$$\binom53\cdot2^3=10\cdot8=80$$

**Neden doğru?** Üç farklı çiftten birer kişi seçildiği için grupta eş olan iki kişi birlikte bulunamaz.

**Çeldirici notu:** On kişiden doğrudan üç kişi seçmek, aynı çiftten iki kişinin bulunduğu grupları da kapsar.

## Soru 5

**Doğru cevap:** B

**Kazanım:** İki ayrı türden en az birer öğe içeren seçimi tümleyenle sayma.

**Çözüm:**

On kitaptan dört kitap seçmenin $\binom{10}{4}=210$ yolu vardır. Roman içermeyen seçimler $\binom74=35$, öykü içermeyen seçimler $\binom84=70$ tanedir. Ne roman ne öykü içeren, diğer beş kitaptan yapılan $\binom54=5$ seçim iki kez çıkarıldığı için geri eklenir:

$$210-35-70+5=110$$

**Neden doğru?** Tümleyenle sayma, iki türden herhangi birinin eksik olduğu bütün seçimleri kapsar.

**Çeldirici notu:** Roman ve öykü içermeyen ortak durumu geri eklememek bu seçimleri iki kez çıkarmış olur.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Sayıları aynı kalanı veren sınıflara ayırarak ikili seçme.

**Çözüm:**

İki sayının farkının 4'ün katı olması için 4 ile bölündüklerinde aynı kalanı vermeleri gerekir. Sayılar dörderli dört kalan sınıfına değil, üçer elemanlı dört sınıfa ayrılır:

$$\{1,5,9\},\ \{2,6,10\},\ \{3,7,11\},\ \{4,8,12\}$$

Her sınıftan iki sayı seçilebilir:

$$4\binom32=4\cdot3=12$$

**Neden doğru?** Aynı kalan sınıfındaki her ikilinin farkı 4 veya 8'dir ve her ikisi de 4'ün katıdır.

**Çeldirici notu:** Yalnız farkı tam 4 olan ikilileri saymak, farkı 8 olan uygun ikilileri dışarıda bırakır.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Kurul içinden aynı görevli iki kişiyi belirleme.

**Çözüm:**

Dört kişilik kurul $\binom74=35$ biçimde seçilir. Kurul içinden iki yazman, görevleri aynı olduğundan $\binom42=6$ biçimde belirlenir:

$$\binom74\binom42=35\cdot6=210$$

Dolayısıyla kurul ve yazmanlar $210$ biçimde belirlenebilir.

**Neden doğru?** Önce yazmanlar, ardından kurulun diğer iki üyesi seçildiğinde her görev dağılımı tam bir kez sayılır.

**Çeldirici notu:** Yalnız kurulu seçmek veya yalnız iki yazmanı seçmek diğer seçimi eksik bırakır.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Özdeş nesneleri her bölüme en az bir tane gelecek biçimde dağıtma.

**Çözüm:**

Her öğrenciye önce birer kalem verilir. Kalan 6 özdeş kalemin dört öğrenciye dağıtım sayısı

$$\binom{6+4-1}{4-1}=\binom93=84$$

tür.

**Neden doğru?** Ön dağıtım her öğrencinin en az bir kalem alma koşulunu sağlar; kalan dağıtımda sıfıra izin verilir.

**Çeldirici notu:** Kalemleri birbirinden farklı kabul etmek aynı miktar dağılımını çok kez sayar.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Bir özel ikiliden tam bir kişi ve başka bir ikiliden en çok bir kişi seçme.

**Çözüm:**

C ile D'den seçilecek kişi 2 biçimde belirlenir. Kalan üç üye; A, B ve diğer dört kişiden, A ile B birlikte olmayacak biçimde seçilir.

Altı kişiden üç seçimin tamamından A ile B'nin birlikte olduğu ve üçüncü kişinin diğer dört kişiden geldiği seçimler çıkarılır:

$$2\left(\binom63-4\right)=2(20-4)=32$$

**Neden doğru?** C–D seçimi tam bir kişiyle sınırlanmış, kalan seçimde A–B birlikteliği tümleyenle kaldırılmıştır.

**Çeldirici notu:** A ile B'nin ikisini de dışarıda bırakmak, yalnız birinin ekipte bulunduğu uygun seçimleri eksiltir.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Tek ve çift sayılardan belirtilen sayılarda seçim yapma.

**Çözüm:**

Listede 5 çift ve 5 tek sayı vardır. Üç çift sayı ile beşli seçimi tamamlayacak iki tek sayı seçilir:

$$\binom53\binom52=10\cdot10=100$$

**Neden doğru?** Beş seçimin tam üçü çift olduğunda kalan ikisi zorunlu olarak tektir.

**Çeldirici notu:** Beş sayının yalnız üçünü seçmek, iki tek sayı seçimini hesaba katmaz.
