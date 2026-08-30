# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 10 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** İkili sonuç dizisinde değişim noktalarını seçme.

**Çözüm:** İlk sonuç K veya Y olmak üzere 2 biçimde seçilir. Altı sonuç arasında 5 geçiş yeri vardır; sonucun değişeceği iki yer $\binom52=10$ biçimde seçilir. Diğer geçişlerde sonuç aynı kalır. Toplam $2\cdot10=20$ dizi vardır.

**Neden doğru?** İlk sonuç ve değişim yerleri belirlendiğinde dizinin bütün terimleri tek biçimde belirlenir.

**Çeldirici notu:** Yalnız iki değişim yerini seçmek, dizinin K veya Y ile başlaması seçeneklerinden birini eksik bırakır.

## Soru 2
**Doğru cevap:** A

**Kazanım:** Küçük faktöriyel değerlerini birlikte hesaplama.

**Çözüm:** $1!+2!+3!+4!=1+2+6+24=33$'tür.

**Neden doğru?** Her faktöriyel kendi çarpımıyla ayrı ayrı değerlendirilir.

**Çeldirici notu:** Toplamı $(1+2+3+4)!$ biçiminde yorumlamak faktöriyel işlemini toplama üzerine yanlış dağıtır.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Belirli kişileri izin verilen görev gruplarına yerleştirme.

**Çözüm:** Ayşe başkan veya başkan yardımcısı olmak üzere 2; Berk yazman veya sayman olmak üzere 2 görevden birini alır. Kalan iki görev, diğer 8 öğrenciden sıralı olarak $8\cdot7=56$ biçimde doldurulur. Toplam $2\cdot2\cdot56=224$'tür.

**Neden doğru?** Ayşe ile Berk'in görev kümeleri ayrık olduğundan görev çakışması oluşmaz.

**Çeldirici notu:** Kalan iki öğrenciyi yalnız grup olarak seçmek hangi görevi aldıklarını ayırmaz.

## Soru 4
**Doğru cevap:** C

**Kazanım:** Belirli bir grubun ayrılmış konumları bütünüyle doldurmasını sayma.

**Çözüm:** Ayşe, Berk ve Ceren ilk üç konuma $3!$ biçimde, kalan 6 öğrenci diğer konumlara $6!$ biçimde dizilir. Toplam $3!\cdot6!=4320$'dir.

**Neden doğru?** İlk üç konumun her biri belirli üçlüden biri tarafından doldurulur.

**Çeldirici notu:** Üçlünün ilk üç konumdaki iç sırasını sabit kabul etmek sonucu altıda bire indirir.

## Soru 5
**Doğru cevap:** D

**Kazanım:** İç sırası sabit bir bloğu doğrusal dizilişte kullanma.

**Çözüm:** Ayşe–Berk–Ceren tek ve iç sırası sabit bir bloktur. Kalan 5 öğrenciyle birlikte 6 birim oluşur; bunlar $6!=720$ biçimde dizilir.

**Neden doğru?** Blok içi sıra önceden verildiği için ayrıca $3!$ çarpanı kullanılmaz.

**Çeldirici notu:** Bloğu $3!$ ile çarpmak soruda izin verilmeyen beş iç sırayı da sayar.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Dairesel dizilişte birden fazla ikili blok kullanma.

**Çözüm:** Ayşe–Berk ve Ceren–Deniz iki blok kabul edilir. Kalan 4 kişiyle birlikte 6 birim masa çevresine $(6-1)!=5!$ biçimde oturur. Her blok kendi içinde 2 biçimde sıralanır. Toplam $5!\cdot2\cdot2=480$'dir.

**Neden doğru?** İki bloğun iç sıraları birbirinden bağımsızdır.

**Çeldirici notu:** Yalnız bir blok için 2 çarpanı kullanmak diğer çiftin iki yönünden birini eksik bırakır.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Birden fazla harf grubunun tekrar ettiği permütasyonları sayma.

**Çözüm:** Sözcükte 10 harf; üç İ, üç T ve iki S vardır. Farklı diziliş sayısı
$$\frac{10!}{3!\,3!\,2!}=50\,400$$
olur.

**Neden doğru?** Her özdeş harf grubunun kendi içindeki yer değiştirmeleri ayrı ayrı bölünür.

**Çeldirici notu:** Yalnız bir tekrar grubunu hesaba katmak aynı sözcükleri birçok kez sayar.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Son iki basamağa göre durumlara ayırarak bölünebilir sayı oluşturma.

**Çözüm:** Tekrarsızlık nedeniyle son iki basamak 25, 50 veya 75 olabilir. Sonu 25 ile biten $7\cdot7\cdot6\cdot5=1470$, 50 ile biten $8\cdot7\cdot6\cdot5=1680$, 75 ile biten yine 1470 sayı vardır. Toplam $1470+1680+1470=4620$'dir.

**Neden doğru?** 50 durumunda sıfır zaten sonda kullanıldığı için ilk basamakta 25 ve 75 durumlarına göre bir fazla seçenek vardır.

**Çeldirici notu:** 00 sonunu kullanmak rakamların birbirinden farklı olması koşulunu bozar.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Özdeş nesneleri farklı kutulara pozitif miktarlarda dağıtma.

**Çözüm:** Her kutuya önce birer top verilir; kalan 2 özdeş top üç kutuya dağıtılır. Olası ek dağılımlar $(2,0,0)$ türünün 3 sırası ve $(1,1,0)$ türünün 3 sırası olmak üzere toplam 6'dır.

**Neden doğru?** Toplar özdeş olduğu için aynı kutu miktarları aynı dağıtımı temsil eder.

**Çeldirici notu:** Topları farklı kabul etmek aynı miktar dağılımını tekrar tekrar sayar.

## Soru 10
**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte eşleri karşılıklı konum çiftlerine yerleştirme.

**Çözüm:** Bir kişi sabitlenir ve eşi karşısına yerleşir. Kalan üç çift, üç karşılıklı konum çiftine $3!$ biçimde atanır; her çift bu konumlarda 2 biçimde oturur. Toplam $3!\cdot2^3=48$'dir.

**Neden doğru?** İlk çiftin sabitlenmesi ortak döndürmeleri tek düzene indirir.

**Çeldirici notu:** Kalan çiftlerin karşılıklı konumlardaki iki yönünü saymamak sonucu sekizde bire indirir.
