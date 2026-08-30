# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 11 — Çözümler

## Soru 1
**Doğru cevap:** A

**Kazanım:** En kısa yolun zorunlu adımlarını farklı sıralarla düzenleme.

**Çözüm:** Her en kısa yol 3 sağ ve 2 yukarı hareketin bir sırasıdır. Beş hareket içinde yukarı hareketlerin iki konumu seçildiğinde yol belirlenir. Sayı $\binom52=10$'dur.

**Neden doğru?** Hareketlerin tür ve sayıları sabittir; yalnız uygulanma sıraları değişir.

**Çeldirici notu:** Sağa ve yukarı hareketleri birbirinden tamamen farklı adımlar saymak özdeş hareketleri tekrar sayar.

## Soru 2
**Doğru cevap:** B

**Kazanım:** Faktöriyel toplamını ortak çarpanla hesaplama.

**Çözüm:** $6!+5!=6\cdot5!+5!=7\cdot5!=7\cdot120=840$'tır.

**Neden doğru?** İki terimdeki ortak $5!$ çarpanı dışarı alınabilir.

**Çeldirici notu:** $6!+5!$ ifadesini $11!$ sanmak faktöriyel işlemini toplama üzerine yanlış taşır.

## Soru 3
**Doğru cevap:** C

**Kazanım:** Koşullu bir görevlendirmedeki tek yasaklı durumu çıkarma.

**Çözüm:** Kısıtsız görevlendirme $8\cdot7\cdot6=336$'dır. Ayşe başkan ve Berk başkan yardımcısı olduğunda yazman kalan 6 kişiden seçilir; 6 yasaklı görevlendirme vardır. Sonuç $336-6=330$'dur.

**Neden doğru?** Yasak yalnız iki belirli görevin birlikte verilmesi durumunda oluşur.

**Çeldirici notu:** Ayşe veya Berk'i tamamen adaylardan çıkarmak serbest görevlendirmeleri de siler.

## Soru 4
**Doğru cevap:** D

**Kazanım:** Belirli kişileri aynı tek–çift özelliğindeki konumlara yerleştirme.

**Çözüm:** Dört tek konuma Ayşe ve Berk $4\cdot3=12$ biçimde yerleşir. Çift konumlar için de 12 biçim vardır. Kalan 6 öğrenci $6!$ biçimde dizilir. Toplam $(12+12)\cdot6!=17\,280$'dir.

**Neden doğru?** “İkisi de tek” ve “ikisi de çift” durumları ayrık olduğundan sonuçları toplanır.

**Çeldirici notu:** Bir tek ve bir çift konum seçmek sorudaki aynı tür konum koşulunun tersini sayar.

## Soru 5
**Doğru cevap:** E

**Kazanım:** Merkez ve simetrik konum koşullarını birlikte kullanma.

**Çözüm:** Ayşe 4. konumda sabittir. Berk ile Ceren için $(1,7),(2,6),(3,5)$ olmak üzere 3 simetrik çift ve çift içinde 2 sıra vardır. Kalan 4 öğrenci $4!$ biçimde dizilir. Toplam $3\cdot2\cdot4!=144$'tür.

**Neden doğru?** Yedi kişilik sırada orta konum tektir ve üç simetrik konum çifti vardır.

**Çeldirici notu:** Berk ile Ceren'in seçilen çiftteki iki sırasından birini unutmak sonucu yarıya indirir.

## Soru 6
**Doğru cevap:** A

**Kazanım:** Dairesel dizilişte iç sırası kısmen belirlenmiş üçlü blok kullanma.

**Çözüm:** Berk ortada olduğundan blok A–B–C veya C–B–A olmak üzere 2 iç sıraya sahiptir. Blokla kalan 5 kişi toplam 6 birimdir; bunlar masa çevresine $5!$ biçimde oturur. Toplam $2\cdot5!=240$'tır.

**Neden doğru?** Berk'in orta konumu sabit, Ayşe ile Ceren'in iki uçtaki sırası serbesttir.

**Çeldirici notu:** Blok içinde $3!$ kullanmak Berk'in ortada olmadığı dört geçersiz sırayı içerir.

## Soru 7
**Doğru cevap:** B

**Kazanım:** Tekrarlı harflerde sabit uç koşullarını kullanma.

**Çözüm:** İlk K ve son A yerleştirildiğinde ortada K, A ve Y harfleri kalır. Bu üç harf farklı olduğundan $3!=6$ diziliş vardır.

**Neden doğru?** Sabit uçlarda kullanılan tekrarlar çıkarıldığında ortadaki harfler birbirinden farklıdır.

**Çeldirici notu:** K ve A tekrarları hâlâ ikişer tane kalmış gibi bölme yapmak geçerli dizilişleri eksiltir.

## Soru 8
**Doğru cevap:** C

**Kazanım:** Seçilen rakamların en büyüğünü belirli bir basamağa sabitleme.

**Çözüm:** Önce 7 rakamdan kullanılacak 5 rakam $\binom75=21$ biçimde seçilir. Seçilenlerin en büyüğü orta basamağa zorunlu olarak gelir. Kalan 4 rakam diğer basamaklara $4!=24$ biçimde dizilir. Toplam $21\cdot24=504$'tür.

**Neden doğru?** Her beşli rakam seçiminin yalnız bir en büyük elemanı vardır.

**Çeldirici notu:** Ortadaki rakamı ayrıca beş seçenekle seçmek her sayıyı birden fazla kez sayar.

## Soru 9
**Doğru cevap:** D

**Kazanım:** Bir kutudaki miktarı sabitleyip kalanları boş bırakmadan dağıtma.

**Çözüm:** X kutusuna gidecek 2 top $\binom72=21$ biçimde seçilir. Kalan 5 top Y veya Z'ye $2^5=32$ biçimde dağılır; ancak hepsinin Y'ye ya da hepsinin Z'ye gittiği 2 durum çıkarılır. Toplam $21\cdot30=630$'dur.

**Neden doğru?** Y ve Z'nin ikisinin de dolu olması yalnız iki tek-kutulu dağılımı yasaklar.

**Çeldirici notu:** Kalan topları kısıtsız dağıtmak Y veya Z'nin boş olduğu iki durumu içerir.

## Soru 10
**Doğru cevap:** E

**Kazanım:** Farklı öğeleri eşit büyüklükte etiketli gruplara ayırma.

**Çözüm:** Pazartesi görevleri $\binom62=15$, salı görevleri kalanlardan $\binom42=6$ biçimde seçilir; son iki görev çarşambaya kalır. Toplam $15\cdot6=90$'dır.

**Neden doğru?** Günler farklı olduğu için grup sıralarını ayrıca bölmeye gerek yoktur.

**Çeldirici notu:** Aynı gün içindeki iki görevi sıralamak soruda önemsenmeyen bir farkı sayar.
