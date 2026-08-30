# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 14 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** İki ayrı yasaklı konumu dahil etme–çıkarma ile sayma.

**Çözüm:** Kısıtsız $4!=24$ oturma vardır. Ayşe'nin 1. sandalyede olduğu $3!=6$, Berk'in 2. sandalyede olduğu 6 düzen çıkarılır. İkisinin de yasaklı sandalyede bulunduğu $2!=2$ düzen iki kez çıkarıldığı için eklenir. Sonuç $24-6-6+2=14$'tür.

**Neden doğru?** İki yasak olayın kesişimi dahil etme–çıkarma ile bir kez geri alınır.

**Çeldirici notu:** Yalnız iki altıyı çıkarmak iki yasağın birlikte gerçekleştiği düzenleri iki kez siler.

## Soru 2
**Doğru cevap:** E

**Kazanım:** Faktöriyeldeki 10 çarpanlarını 5 çarpanları üzerinden sayma.

**Çözüm:** İkişer çarpanı yeterince fazla olduğundan sıfır sayısını 5 çarpanları belirler. $25!$ içinde 5'in katlarından 5 tane, ayrıca 25 sayısından gelen bir ek 5 çarpanı vardır. Toplam $5+1=6$ sıfır bulunur.

**Neden doğru?** Her son sıfır bir $2\cdot5=10$ çarpanından oluşur ve sınırlayıcı çarpan 5'tir.

**Çeldirici notu:** Yalnız 5'in katlarını saymak 25'in ikinci 5 çarpanını gözden kaçırır.

## Soru 3
**Doğru cevap:** A

**Kazanım:** Zorunlu ve yasaklı kişileri birlikte içeren görevlendirmeyi sayma.

**Çözüm:** Ayşe'nin alacağı görev 3 biçimde seçilir. Berk çıkarıldığında kalan iki görev, Ayşe ve Berk dışındaki 7 öğrenciden $7\cdot6=42$ biçimde doldurulur. Toplam $3\cdot42=126$'dır.

**Neden doğru?** Berk hiçbir görev için aday değildir; Ayşe ise tam bir görev alır.

**Çeldirici notu:** Kalan görevler için 8 kişi saymak Berk'in görev aldığı geçersiz durumları içerir.

## Soru 4
**Doğru cevap:** B

**Kazanım:** İki ikili bloğun birbirine komşu olmama koşulunu sayma.

**Çözüm:** İki çift birer blok kabul edilince bloklar ve kalan 4 öğrenci toplam 6 birim olur. Kısıtsız $6!=720$ birim sırası vardır. İki blok yan yana olursa tek blok gibi $2\cdot5!=240$ sıra oluşur. Ayrı birim sırası $720-240=480$'dir. Her çift kendi içinde 2 biçimde yer değiştirdiğinden sonuç $480\cdot2\cdot2=1920$'dir.

**Neden doğru?** Önce blokların birbirinden ayrı olduğu üst sıra, sonra bağımsız iç sıralar sayılır.

**Çeldirici notu:** Blokların yan yana olduğu 240 üst sırayı çıkarmamak çiftlerin dört kişilik tek küme oluşturduğu düzenleri içerir.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Orta konumun iki yanından birini seçerek belirli kişileri yerleştirme.

**Çözüm:** Ayşe 5. konumda sabittir. Berk ile Ceren için sol veya sağ taraf 2 biçimde seçilir; seçilen taraftaki 4 konuma sıralı olarak $4\cdot3=12$ biçimde yerleşirler. Kalan 6 öğrenci $6!$ biçimde dizilir. Toplam $2\cdot12\cdot6!=17\,280$'dir.

**Neden doğru?** Berk ile Ceren'in Ayşe'nin aynı tarafında olması, ikisinin de aynı dört konum kümesinden seçilmesini gerektirir.

**Çeldirici notu:** Birini sol birini sağ tarafa yerleştirmek sorulan koşulun tersini sayar.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte eşit aralıklı belirli kişileri yerleştirme.

**Çözüm:** Ayşe sabitlenir. Dokuz kişilik masada Berk ile Ceren, Ayşe'den üçer konum aralıklı iki yere oturmalı ve bu iki yerde $2!$ biçimde yer değiştirebilir. Kalan 6 kişi $6!$ biçimde yerleşir. Toplam $2\cdot6!=1440$'tır.

**Neden doğru?** Üç belirli kişinin arasındaki iki boş koltuk, çemberi üç eşit aralığa böler.

**Çeldirici notu:** Berk ile Ceren'in iki eşit aralıklı konumdaki yer değişimini saymamak sonucu yarıya indirir.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Tekrarlı harfleri belirli tek–çift konum gruplarına yerleştirme.

**Çözüm:** Sesli harfler A, A, E ve İ'dir; çift konumlara $4!/2!=12$ biçimde yerleşir. Sessiz harfler M, M, T, T ve K'dir; tek konumlara $5!/(2!2!)=30$ biçimde yerleşir. Toplam $12\cdot30=360$'tır.

**Neden doğru?** Dokuz harfli sözcükte dört çift ve beş tek konum vardır; sayılar sesli ve sessiz harf adetleriyle aynıdır.

**Çeldirici notu:** A, M veya T tekrarlarından birini dikkate almamak aynı dizilişleri tekrar sayar.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Sıfır içeren tekrarsız sayılarda baş basamak kısıtını uygulama.

**Çözüm:** Sıfırla birlikte kullanılacak diğer 4 rakam, 1–7 arasından $\binom74=35$ biçimde seçilir. Seçilen beş rakamın $5!=120$ dizilişinden sıfırın başta olduğu $4!=24$ diziliş çıkarılır. Toplam $35\cdot(120-24)=3360$ sayı vardır.

**Neden doğru?** Sıfırın içermesi seçim aşamasında, başta olmaması diziliş aşamasında uygulanır.

**Çeldirici notu:** Bütün $5!$ dizilişi kullanmak sıfırla başlayan dört basamaklı gösterimleri içerir.

## Soru 9
**Doğru cevap:** B

**Kazanım:** Özdeş nesneleri tam iki dolu kutuya dağıtma.

**Çözüm:** Dolu olacak iki kutu $\binom42=6$ biçimde seçilir. Yedi top iki seçilmiş kutuya pozitif miktarlarda $1+6,2+5,\ldots,6+1$ olmak üzere 6 biçimde bölünür. Toplam $6\cdot6=36$'dır.

**Neden doğru?** Kutular farklı olduğu için $1+6$ ile $6+1$ ayrı dağılımlardır.

**Çeldirici notu:** Dolu iki kutuyu seçmemek yalnız sabit bir kutu çifti için dağılım sayar.

## Soru 10
**Doğru cevap:** C

**Kazanım:** Etiketsiz gruplama ile grup içi dairesel dizilişi birlikte sayma.

**Çözüm:** İlk dört kişilik grup $\binom84=70$ biçimde seçilir; grupların adı olmadığı için bu sayı 2'ye bölünür. Her dört kişilik grup masa çevresine $(4-1)!=6$ biçimde oturur. Toplam $70\cdot6\cdot6/2=1260$'tır.

**Neden doğru?** Aynı iki grubun yer değiştirmesi yeni bir düzenleme oluşturmaz; iki masadaki dairesel sıralar ise bağımsızdır.

**Çeldirici notu:** Grup seçimini 2'ye bölmemek aynı iki masayı ters adlarla yeniden sayar.
