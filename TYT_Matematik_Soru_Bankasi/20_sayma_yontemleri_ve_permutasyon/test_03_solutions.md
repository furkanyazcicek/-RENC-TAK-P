# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 03 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Çarpma ilkesiyle bulunan tüm seçimlerden yasaklı durumu çıkarma.

**Çözüm:** Kısıt olmadan $4\cdot3=12$ takım seçilebilir. Yalnız bir gömlek–pantolon ikilisi yasak olduğundan $12-1=11$ takım kalır.

**Neden doğru?** Yasaklanan durum tek bir sıralı seçim çiftidir.

**Çeldirici notu:** Bir gömlek ve bir pantolonu tamamen seçeneklerden çıkarmak yasak olmayan eşleşmeleri de siler.

## Soru 2
**Doğru cevap:** D

**Kazanım:** İki seçim kümesinin birleşimindeki öğeleri tekrar saymadan bulma.

**Çözüm:** İki listede ortak olan 2 etkinlik ilk toplamada iki kez sayılır. Farklı etkinlik sayısı $7+6-2=11$'dir.

**Neden doğru?** Ortak etkinlikler yalnız birer kez sayılmalıdır.

**Çeldirici notu:** Doğrudan $7+6$ yapmak ortak iki etkinliği iki kez sayar.

## Soru 3
**Doğru cevap:** E

**Kazanım:** Verilen faktöriyel değerinden sayıyı belirleme.

**Çözüm:** $6!=720$ ve $7!=7\cdot720=5040$ olduğundan $n=7$ olur.

**Neden doğru?** Faktöriyel değerleri pozitif tam sayılarda artar ve 5040 değeri yalnız $7!$'e karşılık gelir.

**Çeldirici notu:** 5040'ı $6!$ sanmak son çarpan 7'yi gözden kaçırır.

## Soru 4
**Doğru cevap:** A

**Kazanım:** İlk görevi belirli bir gruptan seçerek sıralı görevlendirme yapma.

**Çözüm:** Başkan için 5 kız öğrenciden biri seçilir. Yazman, başkan seçildikten sonra kalan 8 öğrenciden biri olabilir. Toplam $5\cdot8=40$ görevlendirme vardır.

**Neden doğru?** Yazman için cinsiyet kısıtı bulunmadığından kalan bütün öğrenciler seçenektir.

**Çeldirici notu:** Yazmanı da yalnız kız öğrencilerden seçmek soruda olmayan bir koşul ekler.

## Soru 5
**Doğru cevap:** B

**Kazanım:** Belirli bir nesnenin uçta bulunduğu doğrusal dizilişleri sayma.

**Çözüm:** Belirli kitap için 2 uç seçeneği vardır. Kalan 4 kitap diğer yerlere $4!$ biçimde dizilir. Toplam $2\cdot4!=48$'dir.

**Neden doğru?** İki uç farklı konumlardır ve sabit kitap yalnız birini kullanır.

**Çeldirici notu:** Yalnız $4!$ almak kitabın hangi uçta olduğunu ayırmaz.

## Soru 6
**Doğru cevap:** C

**Kazanım:** İki öğenin göreli sırasını simetriyle sayma.

**Çözüm:** Kısıtsız $6!=720$ diziliş vardır. Her dizilişte Ayşe ve Berk'in yerleri değiştirilince “Ayşe solda” ile “Berk solda” durumları eşleşir. Bu nedenle istenen sayı $720/2=360$'tır.

**Neden doğru?** İki göreli sıra eşit sayıda oluşur ve hiçbir diziliş iki gruba birden girmez.

**Çeldirici notu:** Ayşe ile Berk'i yan yana kabul etmek “solda” koşuluna fazladan kısıt ekler.

## Soru 7
**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte yan yana olmama koşulunu tamamlayıcı saymayla çözme.

**Çözüm:** Kısıtsız oturma sayısı $5!=120$'dir. Ayşe ile Berk yan yana olursa blok yöntemiyle $2\cdot4!=48$ düzen oluşur. Yan yana olmayan düzen sayısı $120-48=72$'dir.

**Neden doğru?** Her oturma düzeni ya yan yana olan ya da olmayan gruptadır.

**Çeldirici notu:** Blok sayısını doğrudan cevap almak sorulan durumun tümleyenini verir.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Birden fazla özdeş harf grubuyla tekrarlı permütasyon hesaplama.

**Çözüm:** 11 harfin içinde 4 tane I, 4 tane S ve 2 tane P vardır. Farklı diziliş sayısı
$$\frac{11!}{4!\,4!\,2!}=34\,650$$
olur.

**Neden doğru?** Her özdeş harf grubunun kendi içindeki yer değiştirmeleri yeni sözcük oluşturmaz.

**Çeldirici notu:** Harf tekrarlarından yalnız birini hesaba katmak sonucu gereğinden büyük yapar.

## Soru 9
**Doğru cevap:** A

**Kazanım:** Alt sınır ve basamak koşuluyla tekrarsız sayı oluşturma.

**Çözüm:** Sayının 5000'den büyük olması için binler basamağı 5, 6 veya 7 olabilir: 3 seçenek. Kalan basamaklar sırasıyla 7, 6 ve 5 seçenekle doldurulur. Toplam $3\cdot7\cdot6\cdot5=630$ sayı vardır.

**Neden doğru?** Binler basamağı sıfır olamaz ve seçilen rakam diğer basamaklarda tekrarlanamaz.

**Çeldirici notu:** Binler basamağında 4'ü de kullanmak 5000'den küçük sayıları içeri alır.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Kişileri seçilmiş konumlara sıralı biçimde yerleştirme.

**Çözüm:** İlk öğrenci için 7, sonraki öğrenciler için sırasıyla 6, 5, 4 ve 3 sandalye seçeneği vardır. Toplam $7\cdot6\cdot5\cdot4\cdot3=2520$ oturma biçimi oluşur.

**Neden doğru?** Sandalyeler numaralı olduğu için hem boş kalan yerler hem kişilerin yerleşim sırası sonucu değiştirir.

**Çeldirici notu:** Önce yalnız beş sandalyeyi seçmek, öğrencilerin seçilen sandalyelerdeki sırasını eksik sayar.
