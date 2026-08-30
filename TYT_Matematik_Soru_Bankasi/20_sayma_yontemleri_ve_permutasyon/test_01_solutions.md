# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 01 — Çözümler

## Soru 1
**Doğru cevap:** A

**Kazanım:** Ardışık iki seçimi çarpma ilkesiyle sayma.

**Çözüm:** Çorba için 4, ana yemek için 3 seçenek vardır. Her çorba seçimi her ana yemek seçimiyle eşleşebildiğinden $4\cdot3=12$ seçim yapılabilir.

**Neden doğru?** İki seçim birlikte yapılacağı için seçenek sayıları çarpılır.

**Çeldirici notu:** 4 ile 3'ü toplamak, iki üründen yalnız birinin seçildiği durumla bu durumu karıştırır.

## Soru 2
**Doğru cevap:** B

**Kazanım:** Ayrık seçenek gruplarını toplama ilkesiyle sayma.

**Çözüm:** Öğrenci ya matematik ya da fen atölyesi seçecektir. İki grup aynı anda seçilemediği için $5+4=9$ seçenek vardır.

**Neden doğru?** “Veya” ile bağlanan ayrık seçimlerin sayıları toplanır.

**Çeldirici notu:** Seçenekleri çarpmak öğrencinin iki atölyeye birden katıldığı farklı bir durumu sayar.

## Soru 3
**Doğru cevap:** C

**Kazanım:** Faktöriyel gösteriminin değerini hesaplama.

**Çözüm:**
$$6!=6\cdot5\cdot4\cdot3\cdot2\cdot1=720.$$

**Neden doğru?** Faktöriyel, verilen pozitif tam sayıdan 1'e kadar bütün pozitif tam sayıların çarpımıdır.

**Çeldirici notu:** Çarpımı $5!$'te durdurmak 120 sonucunu verir.

## Soru 4
**Doğru cevap:** D

**Kazanım:** Farklı görevler için sıralı seçim yapma.

**Çözüm:** Başkan 7, başkan yardımcısı kalan 6, yazman kalan 5 kişiden seçilir. Toplam $7\cdot6\cdot5=210$ görevlendirme vardır.

**Neden doğru?** Görevler farklı olduğu için aynı üç öğrencinin görev değiştirmesi yeni bir görevlendirmedir.

**Çeldirici notu:** Üç kişiyi yalnız grup olarak seçmek görevlerin sırasını yok sayar.

## Soru 5
**Doğru cevap:** E

**Kazanım:** Farklı nesnelerin doğrusal dizilişlerini sayma.

**Çözüm:** İlk yere 6, sonraki yerlere sırasıyla 5, 4, 3, 2 ve 1 kitap yerleştirilebilir. Böylece $6!=720$ diziliş elde edilir.

**Neden doğru?** Her kitap kullanıldıkça bir sonraki raf yeri için seçenek sayısı bir azalır.

**Çeldirici notu:** Kitapların yalnız bir bölümünü yerleştirmek bütün raf dizilişlerini saymaz.

## Soru 6
**Doğru cevap:** A

**Kazanım:** Yan yana bulunma koşulunda blok yöntemi kullanma.

**Çözüm:** Ayşe ile Berk tek bir blok kabul edilirse üç öğrenciyle birlikte 4 birim $4!$ biçimde sıralanır. Blok içinde Ayşe ve Berk $2!$ biçimde yer değiştirir. Toplam $4!\cdot2=48$ diziliş vardır.

**Neden doğru?** Blok yöntemi iki öğrencinin ayrılmasını engeller; blok içindeki iki sıra ayrıca sayılır.

**Çeldirici notu:** Yalnız $4!$ almak Ayşe–Berk ile Berk–Ayşe sıralarından birini eksik sayar.

## Soru 7
**Doğru cevap:** B

**Kazanım:** Dönme bakımından aynı olan dairesel dizilişleri sayma.

**Çözüm:** Bir kişi sabitlenir, kalan 5 kişi onun çevresine $5!=120$ biçimde yerleştirilir.

**Neden doğru?** Yuvarlak masada bütün kişileri birlikte döndürmek yeni bir oturma düzeni oluşturmaz.

**Çeldirici notu:** $6!$ almak aynı düzenin altı farklı döndürülmüş hâlini ayrı ayrı sayar.

## Soru 8
**Doğru cevap:** C

**Kazanım:** Özdeş harflerin bulunduğu tekrarlı permütasyonu hesaplama.

**Çözüm:** Sözcükte 6 harf ve bunların içinde üç tane A vardır. Farklı diziliş sayısı
$$\frac{6!}{3!}=120$$
olur.

**Neden doğru?** Üç A'nın kendi aralarındaki yer değiştirmeleri yeni bir diziliş oluşturmaz.

**Çeldirici notu:** $6!$ almak özdeş A harflerini birbirinden farklıymış gibi sayar.

## Soru 9
**Doğru cevap:** D

**Kazanım:** Baş basamak ve tek olma koşullarını birlikte kullanarak sayı oluşturma.

**Çözüm:** Birler basamağı için 1, 3 veya 5 olmak üzere 3 seçenek vardır. Yüzler basamağı, seçilen tek rakam dışındaki sıfır olmayan 4 rakamdan; onlar basamağı kalan 4 rakamdan seçilir. Toplam $3\cdot4\cdot4=48$ sayı yazılır.

**Neden doğru?** Yüzler basamağında sıfır kullanılamaz ve seçilmiş rakam tekrar edilemez.

**Çeldirici notu:** Yüzler basamağına sıfırı da seçenek saymak üç basamak koşulunu bozar.

## Soru 10
**Doğru cevap:** E

**Kazanım:** Faktöriyel oranını ardışık çarpıma dönüştürme.

**Çözüm:**
$$\frac{n!}{(n-2)!}=n(n-1)=30.$$
Ardışık pozitif tam sayılar 6 ve 5 olduğundan $n=6$'dır.

**Neden doğru?** Pay ve paydadaki ortak faktörler sadeleşince yalnız iki ardışık çarpan kalır.

**Çeldirici notu:** $n!/(n-2)!$ ifadesini $n-2$ sanmak faktöriyel sadeleştirmesini yanlış yapar.
