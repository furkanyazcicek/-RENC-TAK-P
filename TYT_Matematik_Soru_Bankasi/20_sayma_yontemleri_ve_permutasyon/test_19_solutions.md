# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 19 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** Sırasız ikililerden yasaklı çiftleri çıkarma.

**Çözüm:** Altı kişi arasındaki kısıtsız tokalaşma sayısı $\binom62=15$'tir. Tokalaşmayacak iki belirli çift çıkarılır: $15-2=13$.

**Neden doğru?** Her tokalaşma sırasız bir kişi çifti tarafından belirlenir.

**Çeldirici notu:** Kişi başına tokalaşmaları toplayıp ikiye bölmemek her tokalaşmayı iki kez sayar.

## Soru 2
**Doğru cevap:** E

**Kazanım:** En az bir öğenin kendi yerinde kaldığı permütasyonları tamamlayıcı saymayla bulma.

**Çözüm:** Kısıtsız $5!=120$ yerleştirme vardır. Hiçbir kartın doğru zarfa girmediği yerleştirme sayısı dahil etme–çıkarma ile
$$5!-\binom51 4!+\binom52 3!-\binom53 2!+\binom54 1!-1=44$$
olur. En az bir doğru yerleştirme bulunanların sayısı $120-44=76$'dır.

**Neden doğru?** “En az bir doğru zarf” koşulunun tümleyeni, bütün kartların yanlış zarfta olmasıdır.

**Çeldirici notu:** Beş doğru kart durumunu doğrudan $120-5$ diye çıkarmak birden çok doğru kart içeren kesişimleri hesaba katmaz.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Zorunlu bir kişiyle birlikte iki kişinin beraber seçilme koşulunu durumlara ayırma.

**Çözüm:** Ayşe'nin görevi 4 biçimde seçilir. Berk ile Ceren birlikte görev alırsa kalan üç görevden ikisine $3\cdot2=6$ biçimde yerleşir, son görevli diğer 7 kişiden seçilir: $4\cdot6\cdot7=168$. İkisi de görev almazsa kalan üç görev diğer 7 kişiye $7\cdot6\cdot5=210$ biçimde verilir: $4\cdot210=840$. Toplam $1008$'dir.

**Neden doğru?** İki durum ayrıdır ve Berk ile Ceren'in aynı seçilme durumunda olduğu bütün görevlendirmeleri kapsar.

**Çeldirici notu:** Berk ile Ceren'in yalnız birlikte seçildiği durumu saymak ikisinin de seçilmediği geçerli görevlendirmeleri eksik bırakır.

## Soru 4
**Doğru cevap:** B

**Kazanım:** Belirli kişileri asal numaralı konumlara yerleştirme.

**Çözüm:** İlk on konum içindeki asal numaralar 2, 3, 5 ve 7'dir. Üç belirli öğrenci bu dört konuma $4\cdot3\cdot2=24$ biçimde yerleşir. Kalan 7 öğrenci $7!$ biçimde dizilir. Toplam $24\cdot5040=120\,960$'tır.

**Neden doğru?** Asal konumlardan biri diğer öğrencilerden biri tarafından doldurulabilir.

**Çeldirici notu:** Yalnız üç asal konum seçmek belirli öğrencilerin bu konumlardaki sırasını saymaz.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Ayrılmış konumlarda iki bağımsız göreli sıra koşulunu sayma.

**Çözüm:** Dört belirli öğrenci ilk dört konuma $4!$ biçimde yerleşir. Ayşe–Berk ve Ceren–Deniz sıralarının her biri olası dizilişlerin yarısını bıraktığından uygun iç sıra sayısı $4!/4=6$'dır. Kalan 4 öğrenci $4!$ biçimde dizilir. Toplam $6\cdot24=144$'tür.

**Neden doğru?** İki önce–sonra koşulu birbirinden bağımsızdır.

**Çeldirici notu:** Dört belirli kişinin tek bir göreli sırasını saymak serbest kalan diğer sıraları kaçırır.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte belirli kişilerin yan yana gelmesini aralık yöntemiyle engelleme.

**Çözüm:** Önce Ayşe, Berk ve Ceren dışındaki altı kişi masa çevresine $(6-1)!=5!$ biçimde oturtulur. Bu kişilerin arasında altı aralık oluşur. Üç belirli kişinin yan yana gelmemesi için bu aralıklardan üçü $\binom63$ biçimde seçilir ve Ayşe, Berk, Ceren seçilen aralıklara $3!$ biçimde yerleştirilir.

$$5!\binom63 3!=120\cdot20\cdot6=14\,400$$

**Neden doğru?** Üç belirli kişinin farklı aralıklara yerleştirilmesi, bu kişilerden hiçbir ikisinin yan yana gelmemesini gerekli ve yeterli biçimde sağlar.

**Çeldirici notu:** Altı aralıktan üçünü seçtikten sonra Ayşe, Berk ve Ceren'in bu aralıklardaki $3!$ farklı yerleşimini unutmamak gerekir.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Özdeş harfleri belirli türdeki konumlara yerleştirme.

**Çözüm:** Yedi konumun 1, 3, 5 ve 7 numaralı olanları tektir. Üç özdeş A için bu dört konumdan üçü $\binom43=4$ biçimde seçilir. Kalan M, M, R, R harfleri diğer dört konuma $4!/(2!2!)=6$ biçimde yerleşir. Toplam $4\cdot6=24$'tür.

**Neden doğru?** A harfleri özdeş olduğundan seçilen üç tek konum içinde ayrıca sıralanmaz.

**Çeldirici notu:** A harflerini $3!$ ile sıralamak aynı sözcükleri tekrar sayar.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Sıfırı iç konuma sabitleyerek tekrarsız sayı oluşturma.

**Çözüm:** Dördüncü basamak 0'dır. İlk basamak 1–9 arasından 9 biçimde seçilir. Kalan beş basamak, kullanılmamış 8 rakamdan $P(8,5)=6720$ biçimde doldurulur. Toplam $9\cdot6720=60\,480$'dir.

**Neden doğru?** Sıfır iç basamakta kullanıldığı için baş basamakta yalnız sıfır dışı rakamlar kalır.

**Çeldirici notu:** İlk basamak için 10 seçenek saymak sıfırı ikinci kez kullanır ve baş basamak koşulunu bozar.

## Soru 9
**Doğru cevap:** B

**Kazanım:** Alt sınır verilen özdeş nesne dağılımlarını dönüştürme.

**Çözüm:** Her kutuya önce ikişer top verilince 8 top kullanılır ve 4 top kalır. Kalan topların dört kutuya negatif olmayan dağılım sayısı $\binom{4+4-1}{4-1}=\binom73=35$'tir.

**Neden doğru?** Ön dağıtım, her kutudaki en az iki top koşulunu otomatik olarak sağlar.

**Çeldirici notu:** Kalan dört topu farklı kabul etmek aynı miktar dağılımlarını tekrar sayar.

## Soru 10
**Doğru cevap:** C

**Kazanım:** Etiketsiz ikilileri oluşturduktan sonra grupları sıralama.

**Çözüm:** Sekiz kişi dört etiketsiz ikiliye $8!/(2^4\,4!)=105$ biçimde ayrılır. Dört ikili soldan sağa $4!=24$ biçimde sıralanır. Toplam $105\cdot24=2520$'dir.

**Neden doğru?** İkili içindeki kişi sırası önemsenmez, ancak oluşan grupların soldan sağa sırası önemlidir.

**Çeldirici notu:** Grupları oluştururken etiketli sayıp sonra yeniden $4!$ ile çarpmak grup sırasını iki kez sayar.
