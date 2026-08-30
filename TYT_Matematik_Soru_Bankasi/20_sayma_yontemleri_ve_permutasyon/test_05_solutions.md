# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 05 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Çok aşamalı seçimde yasaklı eşleşmeleri çıkarma.

**Çözüm:** Kısıtsız menü sayısı $3\cdot4\cdot2=24$'tür. Yasaklı ana yemek–tatlı ikilisi seçildiğinde başlangıç için 3 seçenek bulunduğundan 3 menü geçersizdir. İstenen sayı $24-3=21$'dir.

**Neden doğru?** Yasaklanan ikili her başlangıç seçeneğiyle ayrı bir menü oluşturur.

**Çeldirici notu:** Yalnız bir menüyü çıkarmak başlangıç seçeneklerinin oluşturduğu üç yasaklı durumu eksik sayar.

## Soru 2
**Doğru cevap:** A

**Kazanım:** Alternatif güzergâhlarda toplama ve çarpma ilkelerini birlikte kullanma.

**Çözüm:** X üzerinden $2\cdot3=6$, Y üzerinden $4\cdot2=8$ yol vardır. İki güzergâh ayrık olduğundan toplam $6+8=14$ yol bulunur.

**Neden doğru?** Her güzergâhın kendi aşamaları çarpılır, alternatif güzergâhların sonuçları toplanır.

**Çeldirici notu:** Dört yol sayısını birlikte çarpmak aynı yolculukta hem X hem Y üzerinden geçildiğini varsayar.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Faktöriyel oranlarını ardışık çarpımlara dönüştürme.

**Çözüm:**
$$\frac{9!}{7!}=9\cdot8=72,\qquad\frac{7!}{5!}=7\cdot6=42.$$
Bu nedenle ifadenin değeri $72-42=30$'dur.

**Neden doğru?** Her oran kendi paydasındaki faktöriyelle ayrı ayrı sadeleştirilir.

**Çeldirici notu:** Pay ve paydaları birbirleriyle çapraz biçimde sadeleştirmek iki ayrı kesrin yapısını bozar.

## Soru 4
**Doğru cevap:** C

**Kazanım:** En az bir koşulunu tamamlayıcı saymayla çözme.

**Çözüm:** Kısıtsız görevlendirme $7\cdot6=42$ biçimdedir. Ayşe ve Berk'in ikisinin de görev almadığı durumda kalan 5 öğrenciden $5\cdot4=20$ görevlendirme yapılır. İstenen sayı $42-20=22$'dir.

**Neden doğru?** “En az biri” koşulunun tümleyeni, ikisinin de seçilmediği durumlardır.

**Çeldirici notu:** Yalnız Ayşe'nin veya yalnız Berk'in seçildiği durumları saymak ikisinin birlikte görev aldığı düzenleri dışarıda bırakabilir.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Üç öğeyi tek blok kabul ederek doğrusal diziliş sayma.

**Çözüm:** Üç öğrenci bir blok kabul edildiğinde dört öğrenciyle birlikte 5 birim vardır; bunlar $5!$ biçimde dizilir. Blok içindeki üç öğrenci $3!$ biçimde sıralanır. Toplam $5!\cdot3!=720$'dir.

**Neden doğru?** Blok üç öğrencinin ayrılmasını engeller; kendi iç sıralarının tamamı ayrıca sayılır.

**Çeldirici notu:** Yalnız $5!$ almak blok içindeki altı farklı sırayı tek düzen sayar.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Belirli kişileri izin verilen konumlara yerleştirerek diziliş sayma.

**Çözüm:** Ayşe ile Berk, ortadaki 4 konuma sıralı olarak $4\cdot3=12$ biçimde yerleşir. Kalan 4 öğrenci kalan yerlere $4!=24$ biçimde dizilir. Toplam $12\cdot24=288$'dir.

**Neden doğru?** Ayşe ve Berk'in yerleri farklıdır; seçilen iki orta konumda yer değiştirmeleri yeni diziliş oluşturur.

**Çeldirici notu:** Ortadaki konumlardan yalnız ikisini seçmek Ayşe ile Berk'in bu yerlerdeki sırasını eksik sayar.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Dairesel dizilişte iki grubu dönüşümlü yerleştirme.

**Çözüm:** Kız öğrenciler masa çevresine $(4-1)!=3!$ biçimde oturur. Aralarında oluşan dört boşluğa erkek öğrenciler $4!$ biçimde yerleşir. Toplam $3!\cdot4!=144$'tür.

**Neden doğru?** Kızların dairesel düzeni sabitlenince dönüşümlü oturma için erkeklerin kullanacağı boşluklar belirlenir.

**Çeldirici notu:** Her iki grubu da doğrusal biçimde $4!$ saymak masa çevresindeki döndürme eşdeğerliğini tekrar sayar.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Özdeş harflerde blok ve tekrarlı permütasyonu birlikte kullanma.

**Çözüm:** İki L tek bir blok kabul edilir. Bu blokla birlikte B, A, O, O ve N olmak üzere 6 birim vardır; iki O özdeştir. Farklı diziliş sayısı $6!/2!=360$'tır.

**Neden doğru?** Özdeş L harflerinin blok içindeki yer değiştirmesi yeni bir sıra oluşturmaz; O tekrarları da ayrıca bölünür.

**Çeldirici notu:** L bloğunu iki farklı iç sıraya sahip sanmak özdeş harfleri farklıymış gibi sayar.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Belirli bir rakamın tekrar sayısını konum seçerek belirleme.

**Çözüm:** 1 rakamının bulunacağı iki basamak $\binom42=6$ biçimde seçilir. Diğer iki basamağın her biri 2, 3, 4 veya 5 olabilir; tekrar serbest olduğundan $4^2=16$ seçenek vardır. Toplam $6\cdot16=96$ sayı yazılır.

**Neden doğru?** Kalan basamaklarda 1 kullanılamaz; aksi hâlde 1 rakamı ikiden fazla görünür.

**Çeldirici notu:** Diğer basamaklara da 1'i seçenek olarak katmak “tam iki kez” koşulunu bozar.

## Soru 10
**Doğru cevap:** D

**Kazanım:** Hiçbir öğenin kendi yerine gelmediği permütasyonları sayma.

**Çözüm:** Dahil etme–çıkarma ilkesine göre sayı
$$4!-\binom41 3!+\binom42 2!-\binom43 1!+1=24-24+12-4+1=9$$
olur.

**Neden doğru?** Kendi anahtarını alan kişi kümeleri sırayla çıkarılıp kesişimler geri eklenir.

**Çeldirici notu:** Yalnız bütün dağıtımlardan dört sabit durumu çıkarmak birden fazla kişinin doğru anahtarı aldığı kesişimleri yanlış sayar.
