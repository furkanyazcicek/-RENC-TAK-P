# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 13 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Belirli sayıda öğenin kendi yerinde kaldığı permütasyonları sayma.

**Çözüm:** Kendi zarfında kalacak 3 kart $\binom53=10$ biçimde seçilir. Kalan iki kartın ikisinin de yanlış zarfta olması için bu kartlar zorunlu olarak yer değiştirir; tek seçenek vardır. Toplam 10 yerleştirme oluşur.

**Neden doğru?** Kalan iki karttan yalnız biri kendi zarfına girerse diğeri de zorunlu olarak kendi zarfına girer; bu nedenle ikisi yer değiştirmelidir.

**Çeldirici notu:** Kalan iki kartı $2!$ biçimde saymak ikisinin de kendi zarfında kaldığı geçersiz yerleşimi içerir.

## Soru 2
**Doğru cevap:** D

**Kazanım:** Permütasyon eşitliğini ardışık çarpanlara dönüştürme.

**Çözüm:** $P(n,3)=n(n-1)(n-2)$ olduğundan
$$n(n-1)(n-2)=20n.$$
$n>0$ için sadeleştirme yapılır: $(n-1)(n-2)=20$. Ardışık çarpanlar 5 ve 4 olduğundan $n=6$'dır.

**Neden doğru?** $n\geq3$ koşulu $n$ ile sadeleştirmenin güvenli olmasını sağlar.

**Çeldirici notu:** Sağ taraftaki 20'yi doğrudan $P(n,3)$'ün değeri sanmak $n$ çarpanını yok sayar.

## Soru 3
**Doğru cevap:** E

**Kazanım:** İki belirli kişinin birlikte seçilmesi veya birlikte seçilmemesi durumlarını toplama.

**Çözüm:** Ayşe ile Berk birlikte görev alırsa görevleri $4\cdot3=12$, kalan iki görevli diğer 6 kişiden $6\cdot5=30$ biçimde seçilir: 360 durum. İkisi de görev almazsa dört görev kalan 6 kişiye $6\cdot5\cdot4\cdot3=360$ biçimde verilir. Toplam $720$'dir.

**Neden doğru?** İki durum ayrıdır ve birlikte bütün istenen görevlendirmeleri kapsar.

**Çeldirici notu:** Yalnız birlikte görev alma durumunu saymak ikisinin de seçilmediği geçerli görevlendirmeleri eksik bırakır.

## Soru 4
**Doğru cevap:** A

**Kazanım:** İki belirli kişiden tam birini uç konuma yerleştirme.

**Çözüm:** Uçta bulunacak kişi 2, kullanacağı uç 2 biçimde seçilir. Diğer belirli kişi ortadaki 6 konumdan birine yerleşir. Kalan 6 öğrenci $6!$ biçimde dizilir. Toplam $2\cdot2\cdot6\cdot6!=17\,280$'dir.

**Neden doğru?** Diğer belirli kişinin orta konuma yerleştirilmesi “tam biri” koşulunu güvenceye alır.

**Çeldirici notu:** Diğer belirli kişiyi kalan bütün konumlara yerleştirmek iki kişinin de uçta olduğu düzenleri içerir.

## Soru 5
**Doğru cevap:** B

**Kazanım:** Konumları kalan sınıflarına ayırarak belirli kişileri yerleştirme.

**Çözüm:** Konumlar $(1,4,7)$, $(2,5,8)$ ve $(3,6,9)$ olmak üzere üç gruba ayrılır. Üç belirli öğrenci için grup 3 biçimde seçilir ve grup içinde $3!$ sıra vardır. Kalan 6 öğrenci $6!$ biçimde dizilir. Toplam $3\cdot3!\cdot6!=12\,960$'tır.

**Neden doğru?** Aynı gruptaki üç konumun 3 ile bölümünden kalanları eşittir.

**Çeldirici notu:** Yalnız bir konum grubunu saymak diğer iki kalan sınıfını eksik bırakır.

## Soru 6
**Doğru cevap:** C

**Kazanım:** Dairesel dizilişte karşılıklı ve yan yana koşullarını birlikte sayma.

**Çözüm:** Ayşe sabitlenir, Berk'in karşı konumu belirlenir. Kalan 6 boş konum içindeki komşu konum çiftlerinden yalnız dört tanesi Ayşe veya Berk'in yerini içermez. Ceren ile Deniz bu çiftlerden birine 2 sırayla oturur. Kalan 4 kişi $4!$ biçimde yerleşir. Toplam $4\cdot2\cdot4!=192$'dir.

**Neden doğru?** Ayşe ve Berk'in yanındaki boş konumlar birbirleriyle her zaman komşu değildir; yalnız tamamı boş dört kenar çifti kullanılabilir.

**Çeldirici notu:** Çemberdeki sekiz komşu çiftin tümünü kullanmak Ayşe veya Berk'in dolu yerlerini yeniden seçer.

## Soru 7
**Doğru cevap:** D

**Kazanım:** Tekrarlı harflerde sesli harf bloğunu kullanma.

**Çözüm:** Sesliler A, A ve E'dir; blok içinde $3!/2!=3$ sıra vardır. Sesli blok ile K, K, R, R ve T toplam 6 birim oluşturur. Bu birimler $6!/(2!2!)=180$ biçimde dizilir. Toplam $3\cdot180=540$'tır.

**Neden doğru?** Hem sesli blok içindeki A tekrarı hem blok dışındaki K ve R tekrarları hesaba katılır.

**Çeldirici notu:** Bütün seslileri farklı saymak A harflerinin yer değiştirmelerini gereksiz yere ayrı kabul eder.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Uç rakamların büyüklük sırasını simetriyle sayma.

**Çözüm:** Kısıtsız sayı sayısı $P(8,6)=20\,160$'tır. İlk ve son rakamlar farklıdır. Her sayıda bu iki rakam yer değiştirildiğinde “ilk küçük” ile “ilk büyük” durumları eşleşir. Bu nedenle sayıların yarısı uygundur: $20\,160/2=10\,080$.

**Neden doğru?** Sıfır bulunmadığından uç rakamları değiştirmek her zaman altı basamaklı geçerli bir sayı bırakır.

**Çeldirici notu:** İlk ve son rakamı bağımsız seçip kalan basamakların dizilişini unutmak sonucu eksik sayar.

## Soru 9
**Doğru cevap:** A

**Kazanım:** İki kutulu dağılımda alt miktar sınırını tamamlayıcı saymayla uygulama.

**Çözüm:** Kısıtsız dağıtım $2^8=256$'dır. X kutusunda 0 veya 1 top bulunan $1+8=9$ durum ve Y kutusu için aynı 9 durum çıkarılır. Sekiz top varken iki kutunun aynı anda en fazla bir top alması mümkün değildir. Sonuç $256-18=238$'dir.

**Neden doğru?** Her top farklı olduğu için bir kutuda tek top bulunması, o topun 8 farklı seçimine karşılık gelir.

**Çeldirici notu:** Yalnız boş kutu durumlarını çıkarmak tek toplu geçersiz dağılımları içeride bırakır.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Farklı öğeleri sırasız ikililere ayırma.

**Çözüm:** İlk takım için 7 rakip, kalan en küçük numaralı takım için 5, sonraki için 3 ve son takım için 1 rakip seçeneği vardır. Eşleşme sayısı $7\cdot5\cdot3\cdot1=105$'tir.

**Neden doğru?** Her adımda henüz eşleşmemiş sabit bir takım seçildiği için maçların sırası tekrar sayılmaz.

**Çeldirici notu:** Takımları sıraya dizip ikili gruplamak maç içi ve maçlar arası sıraları gereksiz yere sayar.
