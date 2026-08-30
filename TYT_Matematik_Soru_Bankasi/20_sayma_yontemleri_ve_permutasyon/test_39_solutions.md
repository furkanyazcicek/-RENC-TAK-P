# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 39 — Çözümler

## Soru 1

**Doğru cevap:** D

**Kazanım:** Bir basamağı sabitlenmiş, rakamları farklı sayılarda ilk basamak kısıtını kullanma.

**Çözüm:**

Yüzler basamağına $5$ yerleştirilir. İlk basamak sıfır ve $5$ dışında kalan rakamlardan $6$ biçimde seçilir. Geriye kalan dört serbest basamak, kullanılmamış altı rakamdan sıralı olarak

$$P(6,4)=6\cdot5\cdot4\cdot3=360$$

biçimde doldurulur:

$$6\cdot360=2160$$

**Neden doğru?** Sabit yüzler basamağı ve seçilen ilk basamak çıkarıldıktan sonra sıfır dahil kalan rakamlar diğer konumlarda serbestçe kullanılabilir.

## Soru 2

**Doğru cevap:** E

**Kazanım:** İki aşamalı yol seçiminde ikinci yolun birinci yoldan farklı olma koşulunu kullanma.

**Çözüm:**

Üç sağ ve iki yukarı adımın sırası

$$\binom52=10$$

farklı en kısa yol oluşturur. Gidiş yolu $10$ biçimde seçilir. Dönüşte aynı geometrik yolun tersi kullanılamayacağı için kalan $9$ yoldan biri seçilir:

$$10\cdot9=90$$

**Neden doğru?** Gidiş ve dönüş sıralı iki seçimdir; her gidiş yolu için tam bir dönüş yolu yasaktır.

## Soru 3

**Doğru cevap:** A

**Kazanım:** En az bir özel nokta içeren geometrik seçimleri tamamlayıcı durumla sayma.

**Çözüm:**

Sekiz noktadan üç köşe $\binom83=56$ biçimde seçilir. $A$ ve $B$ noktalarının ikisinin de kullanılmadığı üçgenler kalan altı noktadan

$$\binom63=20$$

biçimde seçilir. İstenen sayı

$$56-20=36$$

olur.

**Neden doğru?** Herhangi üç nokta doğrusal olmadığından her üçlü geçerli bir üçgen oluşturur.

## Soru 4

**Doğru cevap:** B

**Kazanım:** Farklı nesnelerin etiketli gruplara alt ve üst sınırlı dağıtımını grup büyüklüklerine ayırma.

**Çözüm:**

Pozitif ve en fazla dört olan üç sınıf büyüklüğünün toplamı $8$'dir. Olası büyüklük türleri

$$(4,3,1),\quad(4,2,2),\quad(3,3,2)$$

dir.

- $(4,3,1)$ türü için sınıf büyüklükleri $3!$ sırada ve öğrenciler $\frac{8!}{4!3!1!}$ biçimde dağılır: $1680$.
- $(4,2,2)$ türünde dört kişilik sınıf $3$ biçimde seçilir: $3\cdot\frac{8!}{4!2!2!}=1260$.
- $(3,3,2)$ türünde iki kişilik sınıf $3$ biçimde seçilir: $3\cdot\frac{8!}{3!3!2!}=1680$.

Toplam

$$1680+1260+1680=4620$$

olur.

**Neden doğru?** Üç büyüklük türü bütün geçerli dağıtımları ayrık biçimde kapsar ve sınıfların adları katsayılarda hesaba katılır.

## Soru 5

**Doğru cevap:** C

**Kazanım:** Tam olarak belirli sayıda doğru eşleşme içeren permütasyonları sayma.

**Çözüm:**

Kendi kalemini alacak iki kişi

$$\binom62=15$$

biçimde seçilir. Kalan dört kişinin hiçbiri kendi kalemini almamalıdır. Dört elemanın sabit noktasız permütasyon sayısı $!4=9$'dur:

$$15\cdot9=135$$

**Neden doğru?** Kalan kişilerin düzensiz permütasyonu, başka bir doğru eşleşme oluşmasını engelleyerek “tam olarak iki” koşulunu sağlar.

## Soru 6

**Doğru cevap:** D

**Kazanım:** İki özel kişinin aynı anda seçilmediği ekipleri tamamlayıcı durumla sayma.

**Çözüm:**

On öğrenciden beş kişilik ekip sayısı

$$\binom{10}{5}=252$$

dir. Ayşe ile Berk'in ikisinin de ekipte bulunduğu seçimlerde diğer üç kişi kalan sekiz öğrenciden

$$\binom83=56$$

biçimde seçilir. Bu nedenle

$$252-56=196$$

uygun ekip vardır.

**Neden doğru?** Yasak olan yalnız iki özel kişinin aynı anda seçilmesidir; birinin veya ikisinin de dışarıda olduğu bütün ekipler korunur.

## Soru 7

**Doğru cevap:** E

**Kazanım:** İki harf grubunun kendi iç göreli sıraları sabitken konumlarını seçme.

**Çözüm:**

Sesli harflerin bulunacağı üç konum yedi konum arasından

$$\binom73=35$$

biçimde seçilir. Sesliler bu konumlara alfabetik sırada tek biçimde; sessizler de kalan konumlara alfabetik sırada tek biçimde yerleşir.

**Neden doğru?** Her iki grubun iç sırası zorunlu olduğundan yalnız grupların konumlar arasındaki iç içe geçişi seçilir.

## Soru 8

**Doğru cevap:** A

**Kazanım:** Farklı kişileri daha fazla sayıdaki etiketli konuma bire bir yerleştirme.

**Çözüm:**

Beş farklı öğrenci yedi koltuğa sıralı olarak

$$P(7,5)=7\cdot6\cdot5\cdot4\cdot3=2520$$

biçimde oturur.

**Neden doğru?** Hem seçilen beş koltuk hem de öğrencilerin bu koltuklardaki sırası permütasyon içinde birlikte sayılır.

## Soru 9

**Doğru cevap:** B

**Kazanım:** Bir kutunun miktarı belirli tek değerler alırken kalan özdeş nesneleri pozitif dağıtma.

**Çözüm:**

$A$ kutusundaki pozitif tek top sayısı $1,3,5,7,9$ veya $11$ olabilir. $A=k$ iken kalan $14-k$ top diğer üç kutuya pozitif dağıtılır ve dağıtım sayısı

$$\binom{14-k-1}{2}$$

olur. Toplam

$$\binom{12}{2}+\binom{10}{2}+\binom82+\binom62+\binom42+\binom22$$

$$=66+45+28+15+6+1=161$$

bulunur.

**Neden doğru?** $A$'nın her olası tek değeri ayrık bir durum oluşturur; diğer üç kutunun pozitifliği yıldız–çubuk hesabında korunur.

## Soru 10

**Doğru cevap:** C

**Kazanım:** Üç özel kişinin göreli sıralarında birinin diğer ikisinin arasında bulunma koşulunu simetriyle sayma.

**Çözüm:**

Sekiz kişinin toplam diziliş sayısı $8!=40\,320$'dir. Ayşe, Berk ve Ceren'in kendi aralarındaki $3!=6$ göreli sıradan ikisinde Ceren ortadadır:

$$A-C-B\quad\text{ve}\quad B-C-A$$

Bu nedenle

$$8!\cdot\frac{2}{6}=\frac{40\,320}{3}=13\,440$$

olur.

**Neden doğru?** Diğer beş kişinin konumları sabitken özel üçlünün altı göreli sırası eşit sayıda oluşur.
