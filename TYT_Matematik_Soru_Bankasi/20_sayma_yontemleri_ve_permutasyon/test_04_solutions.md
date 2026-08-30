# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 04 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** Gidiş–dönüş yolculuğunda kullanılan yolları seçeneklerden çıkarma.

**Çözüm:** Gidişte A–B için 4, B–C için 3 seçenek vardır. Dönüşte C–B için kullanılanın dışında 2, B–A için kullanılanın dışında 3 yol kalır. Toplam $4\cdot3\cdot2\cdot3=72$ yolculuk vardır.

**Neden doğru?** Her yol kesiminde dönüş seçeneği, o kesimde gidişte kullanılan yola bağlıdır.

**Çeldirici notu:** Dönüşte de 4 ve 3 seçeneği kullanmak aynı yolların tekrarını yasaklayan koşulu yok sayar.

## Soru 2
**Doğru cevap:** E

**Kazanım:** Ayrık iki menü türünde çarpma ve toplama ilkelerini birlikte kullanma.

**Çözüm:** Çorba–ana yemek seçimi $3\cdot4=12$, ana yemek–tatlı seçimi $4\cdot2=8$ biçimde yapılır. İki menü türünden yalnız biri seçileceği için toplam $12+8=20$'dir.

**Neden doğru?** Her menü içinde seçimler çarpılır, birbirini dışlayan menü türleri toplanır.

**Çeldirici notu:** Üç türü birden çarpmak müşterinin çorba, ana yemek ve tatlı aldığı farklı bir menüyü sayar.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Faktöriyelli ifadeyi ortak çarpanla sadeleştirme.

**Çözüm:** $7!=7\cdot6!$ ve $6!=6\cdot5!$ olduğundan
$$\frac{7!-6!}{5!}=\frac{(7-1)6!}{5!}=6\cdot6=36.$$

**Neden doğru?** Çıkarma yapılmadan önce payda ile ortak faktöriyel çarpan görünür hâle getirilir.

**Çeldirici notu:** $7!-6!$ ifadesini $(7-6)!$ sanmak faktöriyel işleminin dağılmadığını gözden kaçırır.

## Soru 4
**Doğru cevap:** B

**Kazanım:** Yasaklı görevlendirmeyi bütün sıralı seçimlerden çıkarma.

**Çözüm:** Kısıtsız görevlendirme $6\cdot5=30$ biçimdedir. Ayşe yardımcı kaptan olursa kaptan kalan 5 kişiden seçilir; yasaklı 5 durum vardır. İstenen sayı $30-5=25$'tir.

**Neden doğru?** Ayşe'nin kaptan olduğu görevlendirmeler serbesttir; yalnız yardımcı kaptan olduğu durumlar çıkarılır.

**Çeldirici notu:** Ayşe'yi tamamen öğrenci grubundan çıkarmak onun kaptan olduğu geçerli durumları da siler.

## Soru 5
**Doğru cevap:** C

**Kazanım:** İki kişi arasındaki konum farkını sabitleyerek doğrusal diziliş sayma.

**Çözüm:** Ayşe ile Berk'in konumları $(1,3),(2,4),(3,5),(4,6)$ olmak üzere 4 çift olabilir. İkili bu konumlarda 2 biçimde, kalan 4 öğrenci de $4!$ biçimde dizilir. Toplam $4\cdot2\cdot4!=192$'dir.

**Neden doğru?** Konum çiftlerinin farkı 2 olduğunda aralarında tam bir yer kalır.

**Çeldirici notu:** Yalnız yan yana blok yöntemi kullanmak aradaki öğrenci koşulunu karşılamaz.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte karşılıklı iki konumu sabitleme.

**Çözüm:** Ayşe'nin yeri dönme eşdeğerliğini kaldırmak için sabitlenir. Berk'in karşısındaki yeri artık tektir. Kalan 6 kişi boş yerlere $6!=720$ biçimde oturur.

**Neden doğru?** Ayşe sabitlendikten sonra karşı koltuk ayrıca seçilmez; çemberde belirlenmiştir.

**Çeldirici notu:** Berk için 7 yer saymak karşılıklı olma koşulunu yok sayar.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Belirli harfleri blok kabul ederek doğrusal diziliş sayma.

**Çözüm:** A ve E bir blok kabul edilirse blokla birlikte 4 birim $4!$ biçimde dizilir. A ile E blok içinde 2 biçimde sıralanır. Toplam $4!\cdot2=48$'dir.

**Neden doğru?** Blok, iki sesli harfin ayrılmasını engeller ve iç sıralarını korumaz.

**Çeldirici notu:** Yalnız $4!$ almak AE ve EA sıralarından birini eksik sayar.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Çift sayı oluştururken sıfır olan ve olmayan son basamakları ayırma.

**Çözüm:** Son basamak 0 ise kalan basamaklar $6\cdot5\cdot4=120$ biçimde seçilir. Son basamak 2, 4 veya 6 ise 3 seçenek; binler basamağı için sıfır ve seçilen rakam dışında 5, diğer basamaklar için 5 ve 4 seçenek vardır: $3\cdot5\cdot5\cdot4=300$. Toplam $420$'dir.

**Neden doğru?** Son basamak sıfırken binler basamağı seçenek sayısı, son basamak sıfır değilken oluşan seçenek sayısından farklıdır.

**Çeldirici notu:** Bütün çift son basamakları aynı durum saymak baş basamakta sıfır kısıtını yanlış uygular.

## Soru 9
**Doğru cevap:** B

**Kazanım:** İkili permütasyon eşitliğinden öğe sayısını bulma.

**Çözüm:** $P(n,2)=n(n-1)$ olduğundan $n(n-1)=42$'dir. $7\cdot6=42$ olduğu için $n=7$ bulunur.

**Neden doğru?** İki farklı konuma sırasıyla $n$ ve $n-1$ seçenek yerleşir.

**Çeldirici notu:** $P(n,2)$ ifadesini $n!/2!$ sanmak permütasyon formülünü yanlış uygular.

## Soru 10
**Doğru cevap:** C

**Kazanım:** Belirli üç kişinin göreli sırasını simetriyle sayma.

**Çözüm:** Kısıtsız $7!=5040$ diziliş vardır. Ayşe, Berk ve Ceren'in kendi aralarındaki $3!=6$ göreli sırasından yalnız biri istenmektedir. Bu nedenle $5040/6=840$ diziliş vardır.

**Neden doğru?** Diğer öğrencilerin yerleri sabit tutulduğunda bu üç öğrenci bütün göreli sıralarda eşit sayıda görünür.

**Çeldirici notu:** Üç öğrenciyi yan yana kabul etmek soruda bulunmayan bir blok koşulu ekler.
