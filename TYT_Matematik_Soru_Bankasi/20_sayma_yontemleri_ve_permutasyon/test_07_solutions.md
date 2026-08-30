# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 07 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Bağımsız ikili kararları ve en az bir koşulunu sayma.

**Çözüm:** Beş önerinin her biri için 2 seçenek olduğundan kısıtsız $2^5=32$ karar dizisi vardır. Bütün önerilerin reddedildiği tek dizi çıkarılır: $32-1=31$.

**Neden doğru?** “En az bir kabul” koşulunun tümleyeni yalnızca “hepsi ret” durumudur.

**Çeldirici notu:** 32'yi doğrudan almak hiçbir önerinin kabul edilmediği diziyi de içerir.

## Soru 2
**Doğru cevap:** C

**Kazanım:** Faktöriyel oranlarını ayrı ayrı sadeleştirme.

**Çözüm:**
$$\frac{10!}{8!}=10\cdot9=90,\qquad \frac{8!}{7!}=8.$$
Toplam $90+8=98$'dir.

**Neden doğru?** Her pay, kendi paydasındaki faktöriyel çarpanı içerir.

**Çeldirici notu:** İki kesri tek bir faktöriyel oranı gibi sadeleştirmek toplama işlemini bozar.

## Soru 3
**Doğru cevap:** D

**Kazanım:** Belirli bir kişinin görev aldığı sıralı seçimleri sayma.

**Çözüm:** Ayşe'nin alacağı görev için 3 seçenek vardır. Kalan iki görev, diğer 7 öğrenciden sıralı olarak $7\cdot6=42$ biçimde verilir. Toplam $3\cdot42=126$'dır.

**Neden doğru?** Ayşe yalnız bir görev alır; diğer görevlerin adları farklı olduğu için sıralı seçim yapılır.

**Çeldirici notu:** Kalan iki öğrenciyi yalnız grup olarak seçmek hangi görevi aldıklarını ayırmaz.

## Soru 4
**Doğru cevap:** E

**Kazanım:** En az bir uç koşulunu tamamlayıcı saymayla çözme.

**Çözüm:** Kısıtsız diziliş $7!=5040$'tır. Ayşe ile Berk'in ikisi de uçta değilse ortadaki 5 konuma $5\cdot4=20$ biçimde yerleşir; kalanlar $5!=120$ biçimde dizilir. İstenen sayı $5040-20\cdot120=2640$'tır.

**Neden doğru?** Tümleyen durumda iki belirli öğrenci de orta konumlardadır.

**Çeldirici notu:** Yalnız ikisinin de uçta olduğu düzenleri saymak “en az biri” koşulunun büyük bölümünü kaçırır.

## Soru 5
**Doğru cevap:** A

**Kazanım:** Belirli kişileri ayrık konum bölgelerine yerleştirme.

**Çözüm:** Ayşe için ilk dört konumdan 4, Berk için son dört konumdan 4 seçenek vardır. Kalan 6 öğrenci boş konumlara $6!$ biçimde dizilir. Toplam $4\cdot4\cdot6!=11\,520$'dir.

**Neden doğru?** İki konum bölgesi ayrık olduğundan Ayşe ve Berk aynı konumu seçemez.

**Çeldirici notu:** Ayşe ile Berk'in kendi bölgelerindeki konumlarını yalnız seçip kalan öğrencileri sıralamamak düzenleri eksik sayar.

## Soru 6
**Doğru cevap:** B

**Kazanım:** Dairesel dizilişte karşılıklı olma durumunu tüm düzenden çıkarma.

**Çözüm:** Kısıtsız oturma sayısı $5!=120$'dir. Ayşe sabitlenip Berk karşısına oturtulduğunda kalan 4 kişi $4!=24$ biçimde yerleşir. Karşılıklı olmayan düzen sayısı $120-24=96$'dır.

**Neden doğru?** Altı kişilik masada Ayşe'nin karşısındaki konum tektir.

**Çeldirici notu:** 24'ü cevap almak sorulan durumun tümleyenini verir.

## Soru 7
**Doğru cevap:** C

**Kazanım:** Özdeş harfleri boşluk yöntemiyle ayırma.

**Çözüm:** Önce N, N ve S harfleri $3!/2!=3$ biçimde dizilir. Bu dizilişlerin çevresinde oluşan 4 boşluktan üçüne birer A yerleştirilir; boş bırakılacak yer için 4 seçenek vardır. Toplam $3\cdot4=12$'dir.

**Neden doğru?** Her boşluğa en fazla bir A konulduğunda A harfleri yan yana gelmez.

**Çeldirici notu:** A harflerini özdeş oldukları hâlde kendi aralarında sıralamak aynı sözcükleri tekrar sayar.

## Soru 8
**Doğru cevap:** D

**Kazanım:** Alt sınır, tek olma ve rakam tekrarsızlığı koşullarını durumlara ayırma.

**Çözüm:** Birler basamağı 1 veya 3 ise binler basamağı 4, 5 ya da 6 olabilir; her bir durumda orta basamaklar $5\cdot4$ biçimde seçilir ve $2\cdot3\cdot20=120$ sayı oluşur. Birler basamağı 5 ise binler basamağı 4 veya 6'dır; $2\cdot20=40$ sayı oluşur. Toplam $160$'tır.

**Neden doğru?** Birler basamağı 5 olduğunda 5, binler basamağı seçeneği olamaz.

**Çeldirici notu:** Her tek birler basamağı için üç binler basamağı saymak 5 rakamını bir durumda tekrar kullanır.

## Soru 9
**Doğru cevap:** E

**Kazanım:** Bütün alıcıların kullanıldığı görev dağılımlarını dahil etme–çıkarma ile sayma.

**Çözüm:** Kısıtsız dağıtım $3^5=243$'tür. En az bir öğrencinin hiç görev almadığı durumlar $3\cdot2^5=96$ kez çıkarılır. Yalnız bir öğrencinin bütün görevleri aldığı 3 dağıtım iki kez çıkarıldığı için geri eklenir. Sonuç $243-96+3=150$'dir.

**Neden doğru?** Her görevin alıcısı bağımsız seçilir; son koşul boş kalan öğrenci bulunmamasıdır.

**Çeldirici notu:** Yalnız $243-96$ yapmak tek alıcılı dağıtımları iki kez çıkarmış olur.

## Soru 10
**Doğru cevap:** A

**Kazanım:** İki grubun doğrusal dizilişte dönüşümlü yerleşimini sayma.

**Çözüm:** Sıra kızla veya erkekle başlayabilir: 2 seçenek. Kızlar kendi yerlerine $4!$, erkekler kendi yerlerine $4!$ biçimde dizilir. Toplam $2\cdot4!\cdot4!=1152$'dir.

**Neden doğru?** Grupların başlangıç seçimi iki farklı konum örüntüsü oluşturur.

**Çeldirici notu:** Yalnız bir başlangıç türünü saymak geçerli dizilişlerin yarısını dışarıda bırakır.
