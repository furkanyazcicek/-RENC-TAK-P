# Konu 21 — Kombinasyon

## Test 22 — Çözümler

## Soru 1

**Doğru cevap:** B

**Kazanım:** Zorunlu ara noktadan geçen en kısa yolları iki aşamada sayma.

**Çözüm:**

A'dan P'ye iki sağ ve bir yukarı adım gerekir. Bu üç adımın sırası

$$\binom31=3$$

biçimde belirlenir. P'den B'ye iki sağ ve üç yukarı adım gerekir; beş adımın içinde iki sağ adımın konumu

$$\binom52=10$$

biçimde seçilir. Toplam yol sayısı

$$3\cdot10=30$$

dur.

**Neden doğru?** P'den geçen her en kısa yol, A–P ve P–B bölümlerindeki iki bağımsız en kısa yolun birleşimidir.

**Çeldirici notu:** A'dan B'ye bütün en kısa yolları saymak, P'den geçmeyen yolları da kapsar.

## Soru 2

**Doğru cevap:** C

**Kazanım:** İşaretli eleman sayısının çift olmasına göre alt küme seçme.

**Çözüm:**

Dört elemanlı alt kümede kırmızı eleman sayısı 0 veya 2 olabilir. Kırmızı olmayan 5 eleman vardır:

$$\binom30\binom54+\binom32\binom52$$

$$=1\cdot5+3\cdot10=35$$

**Neden doğru?** Üç kırmızı elemanın tamamını seçmek tek sayıda kırmızı eleman oluşturduğu için koşula uymaz.

**Çeldirici notu:** Yalnız iki kırmızı elemanlı durumu saymak, hiç kırmızı eleman içermeyen uygun alt kümeleri eksik bırakır.

## Soru 3

**Doğru cevap:** D

**Kazanım:** Özel üçlüden en çok bir kişi içeren grupları ayrık durumlarla sayma.

**Çözüm:**

Özel öğrencilerden hiçbiri seçilmezse dört kişi diğer 9 öğrenciden; tam biri seçilirse özel kişi 3 biçimde ve kalan üç kişi diğer 9 öğrenciden seçilir:

$$\binom94+\binom31\binom93$$

$$=126+3\cdot84=378$$

**Neden doğru?** “En çok bir” koşulunun sıfır ve bir özel kişi durumları ayrık olarak bütün uygun grupları kapsar.

**Çeldirici notu:** Yalnız tam bir özel kişi bulunan grupları saymak, hiçbirinin seçilmediği grupları dışarıda bırakır.

## Soru 4

**Doğru cevap:** E

**Kazanım:** Seçilen üçgenin içinde bir kenarı ayırt etme.

**Çözüm:**

Üçgenin köşeleri 7 noktadan

$$\binom73=35$$

biçimde seçilir. Her üçgenin kırmızıyla belirtilebilecek 3 kenarı vardır:

$$35\cdot3=105$$

**Neden doğru?** Aynı köşe üçlüsünde farklı bir kenarın kırmızı seçilmesi farklı bir sonuçtur.

**Çeldirici notu:** Yalnız köşe üçlülerini saymak kırmızı kenarın üç farklı seçimini gözden kaçırır.

## Soru 5

**Doğru cevap:** A

**Kazanım:** Bir kişinin seçilmesinin başka bir kişiyi zorunlu kıldığı grupları tümleyenle sayma.

**Çözüm:**

On öğrenciden dört kişilik bütün grupların sayısı $\binom{10}{4}=210$ dur. Koşulu bozan gruplarda B bulunur, A bulunmaz; kalan üç kişi diğer 8 öğrenciden seçilir:

$$\binom83=56$$

Bu gruplar çıkarılır:

$$210-56=154$$

**Neden doğru?** “B varsa A da vardır” koşulunu bozan tek durum B'nin içeride, A'nın dışarıda olmasıdır.

**Çeldirici notu:** A ile B'yi birlikte zorunlu tutmak, ikisinin de bulunmadığı veya yalnız A'nın bulunduğu uygun grupları dışlar.

## Soru 6

**Doğru cevap:** B

**Kazanım:** Köklerin işaretinden sabit terimin işaretini belirleyerek kök çifti seçme.

**Çözüm:**

Baş katsayısı 1 olan ikinci dereceden denklemin sabit terimi köklerin çarpımıdır. Çarpımın negatif olması için bir negatif ve bir pozitif kök seçilmelidir. Kümede 3 negatif ve 3 pozitif sayı vardır:

$$\binom31\binom31=3\cdot3=9$$

**Neden doğru?** Seçilen kök çifti, baş katsayısı 1 olan denklemi tek olarak belirler.

**Çeldirici notu:** İki negatif kökün çarpımı pozitif olduğundan bu çiftler sayıma katılmaz.

## Soru 7

**Doğru cevap:** C

**Kazanım:** Tamamlayıcı çiftlerin her birinden bir eleman seçme.

**Çözüm:**

Beş sayı seçilecek ve beş tamamlayıcı çiftten hiçbiri bütünüyle alınmayacaktır. Bu nedenle her çiftten tam bir sayı seçilmelidir. Her çift için 2 seçenek vardır:

$$2^5=32$$

**Neden doğru?** Bir çiftten hiç sayı alınmasa beş sayıya ulaşmak için başka bir çiftin iki sayısını da almak gerekirdi.

**Çeldirici notu:** On sayıdan doğrudan beşini seçmek, toplamı 11 olan bir çiftin birlikte seçilmesine izin verir.

## Soru 8

**Doğru cevap:** D

**Kazanım:** Kesişimi bir elemanlı olan adlandırılmış iki alt kümeyi sayma.

**Çözüm:**

Ortak eleman 8 biçimde seçilir. A'nın yalnız kendisine ait elemanı kalan 7 elemandan, B'nin yalnız kendisine ait elemanı ise son 6 elemandan seçilir:

$$8\cdot7\cdot6=336$$

**Neden doğru?** A ve B adlandırıldığı için iki özel elemanın yer değiştirmesi farklı bir $(A,B)$ ikilisi verir.

**Çeldirici notu:** Sonucu ikiye bölmek A ve B'nin farklı adlara sahip olduğunu gözden kaçırır.

## Soru 9

**Doğru cevap:** E

**Kazanım:** İki topluluktan da en az bir kişi içeren ekip seçme.

**Çözüm:**

On öğrenciden üç kişilik bütün ekiplerin sayısı $\binom{10}{3}=120$ dir. Yalnız dört kişilik sınıftan gelen $\binom43=4$ ekip ve yalnız altı kişilik sınıftan gelen $\binom63=20$ ekip çıkarılır:

$$120-4-20=96$$

**Neden doğru?** İki sınıf dışındaki bir kaynak olmadığı için çıkarılan iki durum ayrık olarak bütün uygunsuz ekipleri kapsar.

**Çeldirici notu:** Yalnız birinci sınıftan bir, ikinci sınıftan iki kişi seçmek ters dağılımdaki uygun ekipleri eksik bırakır.

## Soru 10

**Doğru cevap:** A

**Kazanım:** İki ayrı bölümdeki üst ve alt seçim sınırlarını birlikte uygulama.

**Çözüm:**

İlk iki sorudan hiçbiri seçilmezse dört soru kalan 6 sorudan seçilir; son üç sorudan en az biri zorunlu olarak seçilmiş olur:

$$\binom64=15$$

İlk iki sorudan tam biri seçilirse bu soru 2 biçimde belirlenir. Kalan üç soru, ortadaki üç ve son üç sorudan oluşan 6 sorudan seçilir; son üç sorunun hiçbirinin seçilmediği tek seçim çıkarılır:

$$2\left(\binom63-\binom33\right)=2(20-1)=38$$

Toplam

$$15+38=53$$

seçim vardır.

**Neden doğru?** İlk bölüm için izin verilen sıfır ve bir seçim durumları ayrık olarak sayılmış, ikinci bölümün en az bir koşulu her durumda korunmuştur.

**Çeldirici notu:** İlk iki sorudan birini zorunlu seçmek, ikisinin de seçilmediği uygun durumları dışarıda bırakır.
