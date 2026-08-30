# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 12 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Belirli bir noktadan geçen en kısa yolları tüm yollardan çıkarma.

**Çözüm:** A'dan B'ye kısıtsız en kısa yol sayısı $\binom62=15$'tir. C'ye 2 sağ ve 1 yukarı hareketle $\binom31=3$, C'den B'ye yine 2 sağ ve 1 yukarı hareketle 3 farklı biçimde gidilir. C'den geçen $3\cdot3=9$ yol çıkarılır: $15-9=6$.

**Neden doğru?** C'den geçen her yol, A–C ve C–B alt yollarının bağımsız bir çiftidir.

**Çeldirici notu:** Yalnız A'dan C'ye giden yolları çıkarmak C sonrası yol çeşitliliğini eksik sayar.

## Soru 2
**Doğru cevap:** C

**Kazanım:** Faktöriyel eşitliğini ardışık çarpan denklemine dönüştürme.

**Çözüm:** $n!=n(n-1)(n-2)!$ olduğundan $n(n-1)=42$ olur. $7\cdot6=42$ olduğuna göre $n=7$'dir.

**Neden doğru?** $(n-2)!$ pozitif ve iki tarafta ortak çarpandır.

**Çeldirici notu:** Sağ taraftaki 42'yi doğrudan $n$ kabul etmek iki ardışık çarpanı gözden kaçırır.

## Soru 3
**Doğru cevap:** D

**Kazanım:** Görevli iki kişinin aynı gruptan olmasını durumlara ayırma.

**Çözüm:** Başkan ve yardımcısı kız olursa $5\cdot4$, erkek olursa $4\cdot3$ sıralı seçim vardır. Her durumda yazman kalan 7 kişiden seçilir. Toplam $(20+12)\cdot7=224$'tür.

**Neden doğru?** Başkan ve yardımcısı farklı görevlerde olduğu için aynı cinsiyet grubunda bile seçim sıralıdır.

**Çeldirici notu:** Başkan ile yardımcısını sırasız seçmek görev değişimlerini tek durum sayar.

## Soru 4
**Doğru cevap:** E

**Kazanım:** Belirli bir grubun bütün çift numaralı konumları doldurmasını sayma.

**Çözüm:** Dokuz kişilik sırada çift numaralı konumlar 2, 4, 6 ve 8'dir. Dört belirli öğrenci bu yerlere $4!$, kalan 5 öğrenci diğer yerlere $5!$ biçimde dizilir. Toplam $4!\cdot5!=2880$'dir.

**Neden doğru?** Çift konum sayısı belirli öğrenci sayısına eşit olduğu için bu konumların tamamı onlar tarafından doldurulur.

**Çeldirici notu:** Dört çift konumu yeniden seçmek zaten sabit olan konumları gereksiz yere tekrar sayar.

## Soru 5
**Doğru cevap:** A

**Kazanım:** Üç kişinin göreli sıralarında ortadaki kişiyi sabitleme.

**Çözüm:** Ayşe, Berk ve Ceren'in $3!=6$ göreli sırasından Ceren'in ortada olduğu iki sıra vardır: A–C–B ve B–C–A. Bu nedenle dizilişlerin üçte biri uygundur: $8!/3=13\,440$.

**Neden doğru?** “Arasında” koşulu yan yana olmayı değil, göreli sırada ortada bulunmayı ifade eder.

**Çeldirici notu:** Üç kişiyi blok kabul etmek soruda olmayan yan yana olma koşulu ekler.

## Soru 6
**Doğru cevap:** B

**Kazanım:** Dairesel dizilişte belirli bir kişinin iki komşusunu sabitleme.

**Çözüm:** Ayşe sabitlenir. Berk ile Ceren Ayşe'nin iki yanına $2!$ biçimde, kalan 4 kişi diğer yerlere $4!$ biçimde oturur. Toplam $2\cdot24=48$'dir.

**Neden doğru?** Ayşe sabitlendiğinde ortak döndürmeler tek düzene indirgenir.

**Çeldirici notu:** Berk ile Ceren'in sağ–sol sırasını tek kabul etmek sonucu yarıya indirir.

## Soru 7
**Doğru cevap:** C

**Kazanım:** İki ayrı özdeş harf çiftinin komşuluk koşulunu dahil etme–çıkarma ile sayma.

**Çözüm:** Kısıtsız diziliş sayısı $6!/(2!2!)=180$'dir. A'lar yan yana olduğunda $5!/2!=60$, B'ler yan yana olduğunda yine 60 düzen vardır. Her iki çift de yan yana olduğunda iki blok ve C, D olmak üzere $4!=24$ düzen bulunur. Sonuç $180-60-60+24=84$'tür.

**Neden doğru?** İki komşuluk olayının kesişimi iki kez çıkarıldığı için bir kez geri eklenir.

**Çeldirici notu:** Yalnız iki 60'ı çıkarmak her iki çiftin de bitişik olduğu düzenleri iki kez siler.

## Soru 8
**Doğru cevap:** D

**Kazanım:** Basamakların tek–çift örüntüsüne göre tekrarsız sayı oluşturma.

**Çözüm:** Tek basamaklar 1, 3, 5, 7 arasından sıralı olarak $4\cdot3\cdot2=24$ biçimde; çift basamaklar 0, 2, 4, 6 arasından $4\cdot3=12$ biçimde seçilir. İlk basamak zaten tek olduğundan sıfır sorunu yoktur. Toplam $24\cdot12=288$'dir.

**Neden doğru?** Tek ve çift rakam kümeleri ayrık olduğu için iki aşamanın seçimleri bağımsızdır.

**Çeldirici notu:** Çift basamaklarda sıfırı dışarıda bırakmak geçerli sayıları eksik sayar.

## Soru 9
**Doğru cevap:** E

**Kazanım:** Özdeş nesne dağılımlarında üst sınır koşulunu sayma.

**Çözüm:** $x+y+z=6$ ve $0\leq x,y,z\leq3$ olmalıdır. Kısıtsız negatif olmayan çözüm sayısı $\binom82=28$'dir. Bir kutuda en az 4 top bulunan durumlar, hangi kutu olduğuna göre $3\binom42=18$ tanedir. İki kutunun aynı anda en az 4 top alması mümkün değildir. Sonuç $28-18=10$'dur.

**Neden doğru?** Toplam top sayısı 6 olduğundan iki ayrı üst sınır ihlali kesişemez.

**Çeldirici notu:** Üst sınırı her kutudan bağımsız çıkarıp kesişim olasılığını kontrol etmemek genelde hataya yol açar.

## Soru 10
**Doğru cevap:** A

**Kazanım:** Etiketsiz iki gruba ayırırken grup değişimini aynı kabul etme.

**Çözüm:** Her kişi iki gruptan birine $2^7=128$ biçimde atanır. Gruplardan birinin boş olduğu 2 durum çıkarılır. Grup adları olmadığı için her ayrım iki kez sayılmıştır. Sonuç $(128-2)/2=63$'tür.

**Neden doğru?** Bir ayrımda iki grubun yer değiştirmesi yeni bir sonuç oluşturmaz.

**Çeldirici notu:** İkiye bölmemek grupları birinci ve ikinci grup diye etiketleyerek her ayrımı iki kez sayar.
