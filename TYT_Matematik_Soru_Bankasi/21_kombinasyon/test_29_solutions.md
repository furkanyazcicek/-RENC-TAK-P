# Konu 21 — Kombinasyon

## Test 29 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Belirli bir özelliği taşıyan tam iki sayı içeren seçim.

**Çözüm:**

1'den 12'ye kadar 3'ün katı olan 4 sayı, olmayan 8 sayı vardır. Tam iki 3'ün katı seçilirse

$$\binom42\binom82=6\cdot28=168$$

seçim yapılır.

**Neden doğru?** Kalan iki sayı 3'ün katı olmayanlardan seçilerek tamlık koşulu korunur.

**Çeldirici notu:** Dört sayıyı bütün listeden seçmek, üç katlarının sayısını sınırlandırmaz.

## Soru 2

**Doğru cevap:** E

**Kazanım:** Özel üçlüden en az iki kişi içeren kurul seçme.

**Çözüm:**

Özel öğrencilerden tam ikisi seçilirse kalan üç kişi diğer 6 öğrenciden; üçü de seçilirse kalan iki kişi diğer 6 öğrenciden seçilir:

$$\binom32\binom63+\binom33\binom62=3\cdot20+15=75$$

**Neden doğru?** En az iki koşulu iki ve üç özel öğrenci durumlarının birleşimidir.

**Çeldirici notu:** Tam iki özel kişiyi seçmek, üçünün birlikte bulunduğu kurulları dışarıda bırakır.

## Soru 3

**Doğru cevap:** A

**Kazanım:** İç içe iki alt kümeyi belirleme.

**Çözüm:**

Önce B alt kümesi 7 elemandan üç seçilerek belirlenir. A, B'nin içinden iki eleman seçer:

$$\binom73\binom32=35\cdot3=105$$

**Neden doğru?** A'nın her elemanı B'de olduğundan $A\subset B$ koşulu doğrudan sağlanır.

**Çeldirici notu:** A'yı ana kümeden bağımsız seçmek, A'nın B dışında eleman içermesine izin verir.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Tam olarak bir eş çifti içeren üçlü grup seçme.

**Çözüm:**

Birlikte bulunacak eş çifti 6 biçimde seçilir. Grubun üçüncü kişisi, bu çiftin dışındaki 10 kişiden seçilir:

$$\binom61\binom{10}{1}=6\cdot10=60$$

**Neden doğru?** Üç kişilik grupta bir tam eş çifti ve bu çiftten farklı bir kişi bulunur.

**Çeldirici notu:** Altı çiftten iki çift seçmek üç kişilik grup için mümkün değildir.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Üç türün de bulunduğu dört kitaplık seçkiyi sayma.

**Çözüm:**

Dağılım $(2,1,1)$ olabilir. İki kitap alınacak tür seçilerek

$$\binom42\binom31\binom31+\binom32\binom41\binom31+\binom32\binom41\binom31$$

$$=6\cdot3\cdot3+3\cdot4\cdot3+3\cdot4\cdot3=126$$

elde edilir.

**Neden doğru?** Dört kitapta üç türün de bulunması için türlerden biri iki, diğer ikisi birer kitapla temsil edilir.

**Çeldirici notu:** Her türden birer kitap seçmek yalnız üç kitaplık bir seçki oluşturur.

## Soru 6

**Doğru cevap:** D

**Kazanım:** Çift değişkenleri yarıya indirerek tam sayı çözümü sayma.

**Çözüm:**

$x=2a$, $y=2b$, $z=2c$ yazılır. Böylece

$$a+b+c=5,\qquad a,b,c\ge0$$

olur. Çözüm sayısı

$$\binom{5+3-1}{3-1}=\binom72=21$$

dir.

**Neden doğru?** Her $(a,b,c)$ çözümü tam olarak bir çift $(x,y,z)$ üçlüsü verir.

**Çeldirici notu:** Çiftlik koşulunu göz ardı etmek, toplamı 10 olan tüm çözümleri sayar.

## Soru 7

**Doğru cevap:** E

**Kazanım:** Dört sayının toplamının paritesine göre seçim yapma.

**Çözüm:**

Beş tek ve beş çift sayı vardır. Toplamın çift olması için tek sayılar 0, 2 veya 4 tane seçilebilir:

$$\binom50\binom54+\binom52\binom52+\binom54\binom50$$

$$=5+100+5=110$$

**Neden doğru?** Tek sayıların adedi çift olduğunda toplam çift olur.

**Çeldirici notu:** Tek sayıların tam iki olması koşulu, hiç tek veya dört tek içeren uygun seçimleri dışarıda bırakır.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Sabit bir kenarı içeren dörtgenleri sayma.

**Çözüm:**

Kırmızı kenarın iki ucu zorunlu olarak seçilir. Diğer iki köşe kalan 6 noktadan seçilir:

$$\binom62=15$$

**Neden doğru?** Kırmızı kenarın uçları çember üzerinde ardışık olduğundan, seçilen diğer iki nokta ile her zaman dörtgenin bir kenarı olur.

**Çeldirici notu:** Kırmızı kenarın uçlarından birini dışarıda bırakmak verilen sabit kenar koşulunu bozar.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Ekip ve ekip dışındaki yedek grubunu ardışık seçme.

**Çözüm:**

Dört kişilik ekip $\binom94=126$ biçimde seçilir. Kalan 5 öğrenciden iki kişilik yedek grup $\binom52=10$ biçimde seçilir:

$$126\cdot10=1260$$

**Neden doğru?** Yedek grup ekip dışında kalan öğrencilerden oluşturulduğu için iki seçim çakışmaz.

**Çeldirici notu:** İki grubu ana kümeden bağımsız seçmek ekip ile yedek grubun ortak üye içermesine izin verir.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Bir topluluğu eş büyüklükte ve adlandırılmamış gruplara ayırma.

**Çözüm:**

Gruplar geçici olarak adlandırılırsa seçim sayısı

$$\binom{12}{3}\binom93\binom63\binom33$$

olur. Dört grubun adları olmadığından $4!$ ile bölünür:

$$\frac{220\cdot84\cdot20}{24}=15400$$

**Neden doğru?** Dört grubun her biri aynı büyüklükte olduğundan grup sırası yeni bir gruplandırma oluşturmaz.

**Çeldirici notu:** Grupları adlandırılmış kabul etmek aynı gruplandırmayı $4!$ kez sayar.
