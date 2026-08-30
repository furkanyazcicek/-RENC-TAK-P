# Konu 21 — Kombinasyon

## Test 20 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Toplamın tek–çift durumuna göre ikili seçim yapma.

**Çözüm:**

İki sayının toplamının tek olması için sayılardan biri tek, diğeri çift olmalıdır. Listede 6 tek ve 6 çift sayı vardır:

$$\binom61\binom61=6\cdot6=36$$

**Neden doğru?** Bir tek ile bir çift sayının seçilmesi toplamın tek olması için hem gerekli hem yeterlidir.

**Çeldirici notu:** İki tek veya iki çift sayının toplamı çift olduğundan bu seçimler uygun değildir.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Belirli bir alt kümeyi içeren daha büyük alt kümeleri sayma.

**Çözüm:**

Belirtilen iki eleman seçilmiş kabul edilir. Üçüncü eleman, kümenin kalan 7 elemanından biri olabilir:

$$\binom71=7$$

**Neden doğru?** Zorunlu iki eleman sabit olduğundan her farklı üçüncü eleman farklı bir üç elemanlı alt küme oluşturur.

**Çeldirici notu:** Dokuz elemandan üçünü yeniden seçmek, belirtilen iki elemanın bulunma koşulunu kullanmaz.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Aynı doğruyu birden fazla belirleyen nokta çiftlerini düzelterek farklı doğru sayma.

**Çözüm:**

On bir noktadan seçilen her nokta çifti başlangıçta

$$\binom{11}{2}=55$$

doğru verir. Ancak aynı doğru üzerindeki dört noktanın oluşturduğu $\binom42=6$ çift, tek bir doğru belirler. Bu altı sayım çıkarılıp aynı doğru bir kez geri eklenir:

$$55-6+1=50$$

**Neden doğru?** Sorudaki koşul nedeniyle bu dört noktanın doğrusu dışında hiçbir doğru üç ya da daha fazla işaretli nokta içermez.

**Çeldirici notu:** Altı çifti çıkarıp doğruyu geri eklememek, ortak doğruyu hiç saymamış olur.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Adlandırılmış ve ayrık iki alt kümeyi seçme.

**Çözüm:**

A alt kümesi 7 elemandan

$$\binom72=21$$

biçimde seçilir. B, A ile ortak eleman içermeyeceği için kalan 5 elemandan üçü seçilir:

$$\binom53=10$$

Toplam

$$\binom72\binom53=21\cdot10=210$$

ikili vardır.

**Neden doğru?** A ve B adlandırılmış olduğu için seçim sırası hangi alt kümenin iki, hangisinin üç elemanlı olduğunu belirler.

**Çeldirici notu:** Sonucu ikiye bölmek, farklı büyüklükte ve farklı adlara sahip alt kümeleri ayırt etmez.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Özel bir gruptan en az bir kişi içeren seçimleri tümleyenle sayma.

**Çözüm:**

Dokuz öğrenciden dört kişilik bütün grupların sayısı $\binom94=126$ dır. A, B ve C'nin hiçbirinin bulunmadığı gruplarda dört kişi diğer 6 öğrenciden seçilir:

$$\binom64=15$$

Bu gruplar çıkarılır:

$$126-15=111$$

**Neden doğru?** Tümleyen durum, üç özel öğrencinin de grubun dışında olduğu bütün seçimleri kapsar.

**Çeldirici notu:** Yalnız özel öğrencilerden tam birini seçmek, iki veya üçünün bulunduğu uygun grupları dışarıda bırakır.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Bir değişkenin çift olma koşuluna göre negatif olmayan tam sayı çözümlerini sayma.

**Çözüm:**

$x$ değeri sırasıyla $0,2,4,6,8$ olabilir. Her sabit $x$ değeri için $y+z=8-x$ eşitliğinin çözüm sayıları sırasıyla

$$9,7,5,3,1$$

dir. Toplam

$$9+7+5+3+1=25$$

çözüm vardır.

**Neden doğru?** $y$ değeri sıfırdan $8-x$ değerine kadar seçildiğinde $z$ kendiliğinden belirlenir.

**Çeldirici notu:** $x$ için yalnız pozitif çift değerleri almak, izin verilen $x=0$ durumunu dışarıda bırakır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** İki öğenin birlikte dışarıda kalmadığı seçimleri tümleyenle sayma.

**Çözüm:**

On sorudan altısını seçmenin $\binom{10}{6}=210$ yolu vardır. Birinci ve onuncu soruların ikisi de dışarıda kalırsa altı sorunun tamamı ortadaki 8 sorudan seçilir:

$$\binom86=28$$

Bu seçimler çıkarılır:

$$210-28=182$$

**Neden doğru?** İzin verilmeyen tek durum, iki uç sorunun da seçilmemesidir.

**Çeldirici notu:** Birinci ve onuncu soruların ikisini de zorunlu seçmek, yalnız birinin seçildiği uygun durumları dışlar.

## Soru 8

**Doğru cevap:** B

**Kazanım:** İç bölgede kesişen köşegen çiftlerini köşe dörtlüleriyle sayma.

**Çözüm:**

Altıgenin seçilen her dört köşesi bir dörtgen oluşturur. Bu dörtgenin iki köşegeni altıgenin iç bölgesinde bir kez kesişir. Tersine, iç bölgede kesişen her köşegen çifti dört farklı uç nokta belirler. Bu nedenle

$$\binom64=15$$

köşegen çifti vardır.

**Neden doğru?** Dört köşe ile kesişen köşegen çifti arasında bire bir eşleme vardır.

**Çeldirici notu:** Altıgenin bütün köşegenlerinden rastgele iki tanesini seçmek, ortak uçlu veya kesişmeyen köşegen çiftlerini de sayar.

## Soru 9

**Doğru cevap:** C

**Kazanım:** En kısa yolun adımlarını sıra gözetmeyen konum seçimiyle sayma.

**Çözüm:**

A'dan B'ye en kısa yol için 5 sağ ve 3 yukarı adım gerekir. Toplam 8 adımın içinde yukarı adımların bulunacağı üç konum seçilir:

$$\binom83=56$$

**Neden doğru?** Yukarı adımların konumları belirlendiğinde kalan beş konum zorunlu olarak sağ adımlarıdır.

**Çeldirici notu:** Sağ ve yukarı adımların kendi içlerinde farklı olduğunu düşünmek aynı yolu birden fazla kez sayar.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Bir alt kümenin içinde daha küçük bir alt küme seçme.

**Çözüm:**

Önce beş elemanlı B alt kümesi seçilir, ardından B'nin içinden iki elemanlı A alt kümesi belirlenir:

$$\binom85\binom52=56\cdot10=560$$

**Neden doğru?** A elemanları B'nin içinden seçildiği için $A\subset B$ koşulu kendiliğinden sağlanır.

**Çeldirici notu:** A ve B'yi ana kümeden bağımsız seçmek, A'nın B dışında eleman içermesine izin verir.
