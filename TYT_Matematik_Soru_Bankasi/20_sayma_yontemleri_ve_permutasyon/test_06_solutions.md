# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 06 — Çözümler

## Soru 1
**Doğru cevap:** A

**Kazanım:** Boş yer bulunan doğrusal oturmada yan yana olma koşulunu sayma.

**Çözüm:** Ayşe ile Berk için 7 sandalye içinde 6 komşu sandalye çifti vardır. İkili seçilen çifte 2 biçimde oturur. Kalan 3 öğrenci, boş kalan 5 sandalyeye $5\cdot4\cdot3=60$ biçimde yerleşir. Toplam $6\cdot2\cdot60=720$'dir.

**Neden doğru?** Ayşe ile Berk'in kullandığı komşu sandalye çifti her düzende tektir.

**Çeldirici notu:** Önce beş sandalyeyi seçip yalnız öğrencileri dizmek, yan yana koşulunu seçilen sandalye aralıklarına göre yanlış uygulayabilir.

## Soru 2
**Doğru cevap:** B

**Kazanım:** İki harfin göreli sırasını simetriyle sayma.

**Çözüm:** Beş farklı harfin $5!=120$ dizilişi vardır. Her dizilişte A ile E'nin yerleri değiştirildiğinde “A önce” ve “E önce” durumları eşleşir. İstenen sayı $120/2=60$'tır.

**Neden doğru?** A ve E farklı harflerdir; iki göreli sıra eşit sayıda oluşur.

**Çeldirici notu:** A ile E'yi yan yana kabul etmek soruda bulunmayan bir kısıt ekler.

## Soru 3
**Doğru cevap:** C

**Kazanım:** Dairesel dizilişte üç kişilik blok kullanma.

**Çözüm:** Üç kişi bir blok kabul edildiğinde blok ve kalan 5 kişiyle 6 birim oluşur. Dairesel diziliş sayısı $(6-1)!=5!$, blok içi sıra sayısı $3!$'tir. Toplam $5!\cdot3!=720$'dir.

**Neden doğru?** Blok kişileri bitişik tutar, dairesel sayım ise ortak döndürmeleri tek düzen kabul eder.

**Çeldirici notu:** Birimleri doğrusal biçimde $6!$ saymak aynı çember düzeninin döndürülmüş hâllerini tekrar sayar.

## Soru 4
**Doğru cevap:** D

**Kazanım:** Sayının bulunduğu aralığı baş basamak seçimine dönüştürme.

**Çözüm:** Binler basamağı yalnız 3 veya 4 olabilir: 2 seçenek. Kalan üç basamak sırasıyla 5, 4 ve 3 seçenekle doldurulur. Toplam $2\cdot5\cdot4\cdot3=120$ sayı vardır.

**Neden doğru?** Baş basamak aralık koşulunu sağlar; seçilen rakam sonraki basamaklarda kullanılamaz.

**Çeldirici notu:** Binler basamağı için 5'i de seçmek üst sınırdan büyük sayıları içeri alır.

## Soru 5
**Doğru cevap:** E

**Kazanım:** Bütün seçeneklerin kullanıldığı dağılımları dahil etme–çıkarma ile sayma.

**Çözüm:** Kısıtsız seçim sayısı $3^4=81$'dir. En az bir katın boş olduğu seçimler ilk aşamada $3\cdot2^4=48$ kez çıkarılır. İki katın birden boş olduğu 3 seçim iki kez çıkarıldığı için geri eklenir. Sonuç $81-48+3=36$'dır.

**Neden doğru?** Üç katın da kullanılması, hiçbir katın boş kalmaması koşuludur.

**Çeldirici notu:** Yalnız $81-48$ yapmak bütün öğrencilerin tek katta indiği durumları iki kez çıkarmış olur.

## Soru 6
**Doğru cevap:** A

**Kazanım:** En az bir grup üyesi koşulunu tamamlayıcı saymayla çözme.

**Çözüm:** Kısıtsız görevlendirme $7\cdot6=42$'dir. İki görevin de erkek öğrencilere verildiği $3\cdot2=6$ durum çıkarılır. İstenen sayı $42-6=36$'dır.

**Neden doğru?** “En az bir kız” koşulunun tümleyeni, iki görevlinin de erkek olmasıdır.

**Çeldirici notu:** Yalnız bir kız ve bir erkek seçmek iki kızın görev aldığı geçerli düzenleri dışarıda bırakır.

## Soru 7
**Doğru cevap:** B

**Kazanım:** Belirli kişileri, diğer kişilerin oluşturduğu boşluklara yerleştirme.

**Çözüm:** Önce kalan 4 öğrenci $4!$ biçimde dizilir. Bu öğrencilerin çevresinde oluşan 5 boşluktan üçü Ayşe, Berk ve Ceren için sıralı olarak $5\cdot4\cdot3=60$ biçimde seçilir. Toplam $4!\cdot60=1440$'tır.

**Neden doğru?** Üç öğrenci farklı boşluklara yerleştiğinde aralarında mutlaka diğer öğrencilerden biri bulunur.

**Çeldirici notu:** Üç boşluğu seçip öğrencilerin bu boşluklardaki sırasını saymamak sonucu altıda bire indirir.

## Soru 8
**Doğru cevap:** C

**Kazanım:** Dairesel dizilişte iki kişinin çembersel uzaklığını sabitleme.

**Çözüm:** Ayşe sabitlenir. Berk, Ayşe'den saat yönünde veya ters yönde iki sandalye uzaklıktaki 2 konumdan birine oturabilir. Kalan 5 kişi $5!$ biçimde yerleşir. Toplam $2\cdot5!=240$'tır.

**Neden doğru?** İki sandalye uzaklık, aralarında tam bir kişinin bulunmasını sağlar.

**Çeldirici notu:** Berk için yalnız bir yönü saymak simetrik diğer konumu eksik bırakır.

## Soru 9
**Doğru cevap:** D

**Kazanım:** Belirli nesneyi uçlar dışındaki konumlara yerleştirme.

**Çözüm:** Belirli fotoğraf ortadaki 4 konumdan birine yerleşir. Kalan 5 fotoğraf diğer yerlere $5!$ biçimde dizilir. Toplam $4\cdot5!=480$'dir.

**Neden doğru?** Altı konumun yalnız dördü uç değildir.

**Çeldirici notu:** Fotoğrafın yerini sabit kabul edip yalnız $5!$ almak dört olası orta konumu ayırmaz.

## Soru 10
**Doğru cevap:** E

**Kazanım:** Birden fazla ikili bloğun yerleşimini sayma.

**Çözüm:** Beş çift birer blok kabul edilirse bloklar $5!$ biçimde dizilir. Her çift kendi içinde 2 biçimde yer değiştirebildiğinden $2^5$ iç sıra vardır. Toplam $5!\cdot2^5=3840$'tır.

**Neden doğru?** Her çiftin iç sırası diğer çiftlerden bağımsızdır.

**Çeldirici notu:** Yalnız bir çift için 2 çarpanı kullanmak diğer dört çiftin iç sırasını eksik sayar.
