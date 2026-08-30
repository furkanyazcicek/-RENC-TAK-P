# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 02 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Üç aşamalı seçimi çarpma ilkesiyle sayma.

**Çözüm:** Gömlek için 5, pantolon için 3, ayakkabı için 2 seçenek vardır. Her seçim birlikte yapılacağından $5\cdot3\cdot2=30$ takım oluşturulur.

**Neden doğru?** Her aşamadaki seçenek, diğer aşamaların tüm seçenekleriyle eşleşebilir.

**Çeldirici notu:** Seçenek sayılarını toplamak, üç üründen yalnız birinin seçildiği durumu sayar.

## Soru 2
**Doğru cevap:** C

**Kazanım:** Birbirini dışlayan ulaşım seçeneklerini toplama ilkesiyle sayma.

**Çözüm:** Yolculuk yalnız bir ulaşım türüyle yapılacağı için seçenek sayısı $6+4+2=12$'dir.

**Neden doğru?** Otobüs, tren ve vapur seçenekleri aynı yolculuğun ayrık yollarıdır.

**Çeldirici notu:** Sefer sayılarını çarpmak üç taşıtın art arda kullanıldığı başka bir yolculuğu sayar.

## Soru 3
**Doğru cevap:** D

**Kazanım:** Faktöriyel oranını sadeleştirme.

**Çözüm:**
$$\frac{8!}{6!}=8\cdot7=56.$$

**Neden doğru?** $8!=8\cdot7\cdot6!$ olduğundan $6!$ çarpanları sadeleşir.

**Çeldirici notu:** İfadeyi $8!/2!$ biçiminde yorumlamak paydanın yapısını değiştirir.

## Soru 4
**Doğru cevap:** E

**Kazanım:** Bir göreve getirilecek kişi kısıtlıyken sıralı seçim yapma.

**Çözüm:** Başkan için Ayşe veya Bora olmak üzere 2 seçenek vardır. Başkan yardımcısı, başkan seçildikten sonra kalan 7 kişiden biri olur. Toplam $2\cdot7=14$ görevlendirme vardır.

**Neden doğru?** Başkanın kimliği ilk aşamadaki seçenek sayısını 8'den 2'ye indirir.

**Çeldirici notu:** Başkan yardımcısını da yalnız Ayşe veya Bora arasından seçmek soruda olmayan bir kısıt ekler.

## Soru 5
**Doğru cevap:** A

**Kazanım:** İstenmeyen yan yana dizilişleri tüm dizilişlerden çıkarma.

**Çözüm:** Kısıtsız diziliş sayısı $7!=5040$'tır. Belirli iki kitap bir blok kabul edilirse yan yana diziliş sayısı $6!\cdot2=1440$ olur. İstenen sayı $5040-1440=3600$'dür.

**Neden doğru?** “Yan yana değil” koşulu tamamlayıcı saymayla doğrudan ve eksiksiz hesaplanır.

**Çeldirici notu:** Yalnız $7!-6!$ yapmak iki kitabın blok içindeki iki sırasından birini eksik sayar.

## Soru 6
**Doğru cevap:** B

**Kazanım:** Uç konumları sabitleyerek doğrusal diziliş sayma.

**Çözüm:** Ayşe ile Berk iki uca $2!$ biçimde yerleşir. Kalan 4 öğrenci ortadaki yerlere $4!$ biçimde dizilir. Toplam $2!\cdot4!=48$'dir.

**Neden doğru?** İki uç birbirinden farklı konumlardır; Ayşe ve Berk bu konumlarda yer değiştirebilir.

**Çeldirici notu:** $4!$ almak iki uçtaki yer değişimini saymaz.

## Soru 7
**Doğru cevap:** C

**Kazanım:** Dairesel dizilişte yan yana olma koşulunu blok yöntemiyle sayma.

**Çözüm:** Ayşe ile Berk bir blok kabul edildiğinde çevrede 6 birim vardır. Bunlar $(6-1)!=5!$ biçimde dizilir. Blok kendi içinde 2 biçimde sıralandığından toplam $2\cdot5!=240$ olur.

**Neden doğru?** Dairesel dizilişte bir birim sabitlenir; blok içindeki sıra ayrıca hesaba katılır.

**Çeldirici notu:** Doğrusal diziliş gibi $6!$ kullanmak döndürmeyle aynı olan düzenleri tekrar sayar.

## Soru 8
**Doğru cevap:** D

**Kazanım:** Birden fazla harf grubunun tekrar ettiği permütasyonları sayma.

**Çözüm:** MARMARA sözcüğünde 7 harf; üç A, iki M ve iki R vardır. Farklı diziliş sayısı
$$\frac{7!}{3!\,2!\,2!}=210$$
olur.

**Neden doğru?** Her özdeş harf grubunun kendi içindeki yer değiştirmeleri ayrı ayrı bölünür.

**Çeldirici notu:** Yalnız A harflerinin tekrarını dikkate almak M ve R harflerini farklıymış gibi fazla sayar.

## Soru 9
**Doğru cevap:** E

**Kazanım:** Son basamağa göre durumlara ayırarak koşullu sayı oluşturma.

**Çözüm:** Son basamak 0 ise binler basamağı için 6, sonraki iki basamak için 5 ve 4 seçenek vardır: $6\cdot5\cdot4=120$. Son basamak 5 ise binler basamağı 0 veya 5 olamayacağı için 5, sonraki basamaklar için 5 ve 4 seçenek vardır: $5\cdot5\cdot4=100$. Toplam $120+100=220$'dir.

**Neden doğru?** 5 ile bölünebilme, birler basamağının 0 veya 5 olmasını gerektirir ve iki durum ayrıdır.

**Çeldirici notu:** Son basamak 5 iken binler basamağında sıfırı kullanmak dört basamak koşulunu bozar.

## Soru 10
**Doğru cevap:** A

**Kazanım:** İki öğe arasındaki önce–sonra koşulunu simetriyle sayma.

**Çözüm:** Dört farklı harfin kısıtsız $4!=24$ dizilişi vardır. Her dizilişte A ile B'nin yerleri değiştirildiğinde “A önce” ve “B önce” durumları eşleşir. Bu nedenle dizilişlerin yarısında A, B'den önce gelir: $24/2=12$.

**Neden doğru?** A ile B farklı olduğundan hiçbir diziliş eşleşmesiz kalmaz ve iki durum eşit sayıdadır.

**Çeldirici notu:** A ile B'yi yan yana kabul etmek soruda bulunmayan ek bir kısıt oluşturur.
