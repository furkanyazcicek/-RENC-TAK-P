# Konu 21 — Kombinasyon

## Test 33 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** İki tür nesneden belirli sayıda seçme.

**Çözüm:**

Bir manzara tablosu ve üç portre tablosu seçilir:

$$\binom31\binom83=3\cdot56=168$$

**Neden doğru?** İki tablo türündeki seçimler bağımsızdır ve çarpılır.

**Çeldirici notu:** Portre sayısını üçten farklı almak, “tam biri” koşulunu bozar.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Parite koşuluna göre seçimleri durumlara ayırma.

**Çözüm:**

1–8 arasında 4 tek ve 4 çift sayı vardır. Toplamın tek olması için bir tek-iki çift veya üç tek seçilir:

$$\binom41\binom42+\binom43=24+4=28$$

**Neden doğru?** Tek sayıların sayısı tek olduğunda toplam tektir.

**Çeldirici notu:** Üç tek sayıyı seçip iki çift sayıyı da eklemek, seçimdeki eleman sayısını artırır.

## Soru 3

**Doğru cevap:** E

**Kazanım:** En az bir özel eleman içeren ikili seçimleri sayma.

**Çözüm:**

6 sorudan 2 soru seçmenin toplamı $\binom62=15$'tir. İlk iki sorunun hiç seçilmediği seçimler $\binom42=6$ olduğundan

$$15-6=9$$

olur.

Sonuç E seçeneğinde verilmiştir.

**Neden doğru?** “En az biri” koşulunun tümleyeni iki özel sorunun da seçilmemesidir.

**Çeldirici notu:** İlk iki sorunun ikisini birden dışarıda bırakmak, istenen “en az biri” koşulunu sağlamaz.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Birlikte seçilemeyen iki elemanı tümleyeniyle sayma.

**Çözüm:**

Tüm seçimler $\binom73=35$ tanedir. Yasak olan iki kitabın birlikte bulunduğu seçimlerde üçüncü kitap 5 biçimde seçilir:

$$35-5=30$$

**Neden doğru?** Yalnızca iki belirli kitabın birlikte seçildiği durumlar çıkarılır.

**Çeldirici notu:** İki kitabı ayrı ayrı çıkarmak, her ikisini içeren seçimleri doğru biçimde ayıklamaz.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Grup büyüklüğü ve tür sayısı koşullarını durumlara ayırma.

**Çözüm:**

Kız sayısı erkek sayısından fazla olduğuna göre iki olasılık vardır:

$$\binom53\binom61+\binom54=60+5=65$$

**Neden doğru?** Dört kişilik ekipte kız sayısı 3 veya 4 olabilir.

**Çeldirici notu:** Sadece üç kızlı ekipleri saymak, dört kızlı ekipleri eksik bırakır.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Belirli bir özelliğe sahip elemanların sayısını sabitleme.

**Çözüm:**

1–12 arasında 4 sayı 3'ün katıdır. Diğer 8 sayıdan iki ve bu dört sayıdan iki seçilir:

$$\binom42\binom82=6\cdot28=168$$

**Neden doğru?** “Tam ikisi” koşulu, iki grubun da seçime katılmasını zorunlu kılar.

**Çeldirici notu:** 3'ün katı olmayan 8 sayıdan dördünü seçmek, istenen dağılımı sağlamaz.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Önceden belirlenmiş elemanı içeren seçim yapma.

**Çözüm:**

P noktası seçilmiş olduğundan kalan 7 noktadan 2'si seçilir:

$$\binom72=21$$

**Neden doğru?** P noktası için seçim yapılmaz; yalnızca diğer iki köşe belirlenir.

**Çeldirici notu:** P'yi de yeniden seçmeye çalışmak aynı koşulu iki kez hesaba katmaktır.

## Soru 8

**Doğru cevap:** E

**Kazanım:** En az bir özel eleman içeren alt kümeleri tümleyeniyle sayma.

**Çözüm:**

Tüm 4 elemanlı alt kümeler $\binom{10}{4}=210$ tanedir. Özel üç elemanın hiçbiri bulunmayan alt kümeler, kalan 7 elemandan seçilen $\binom74=35$ alt kümedir:

$$210-35=175$$

**Neden doğru?** İstenen alt kümeler, özel elemanların tümünü dışarıda bırakanların tümleyenidir.

**Çeldirici notu:** Yalnızca tam bir özel eleman içeren alt kümeleri saymak, iki veya üç özel elemanlıları dışarıda bırakır.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Her çiftten en fazla bir kişi seçme.

**Çözüm:**

Önce 4 çiftten 3'ü seçilir, sonra seçilen her çiftten bir kişi belirlenir:

$$\binom43\cdot2^3=4\cdot8=32$$

**Neden doğru?** Eşlerin aynı anda seçilmemesi, üç ayrı çiftten birer kişi seçilmesini gerektirir.

**Çeldirici notu:** 8 kişiden 3'ünü doğrudan seçmek, eşlerin birlikte seçilmesine izin verir.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Adlandırılmamış eş büyüklükte gruplar oluşturma.

**Çözüm:**

İlk iki kişilik takım $\binom92$, ikinci takım kalan 7 kişiden $\binom72$ biçimde seçilir. Takımların adı olmadığı için 2'ye bölünür:

$$\frac{\binom92\binom72}{2}=\frac{36\cdot21}{2}=378$$

**Neden doğru?** Takımların yer değiştirmesi yeni bir oluşturma biçimi sayılmaz.

**Çeldirici notu:** Takımları adlandırmak aynı gruplandırmayı iki kez sayar.
