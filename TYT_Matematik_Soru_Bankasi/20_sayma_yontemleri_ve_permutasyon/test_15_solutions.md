# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 15 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Üç ayrı yasaklı yerleşimi dahil etme–çıkarma ile sayma.

**Çözüm:** Kısıtsız $4!=24$ yerleştirme vardır. Her bir yasaklı kitap–raf eşleşmesi $3!=6$ yerleştirmede görülür. İkişerli yasak kesişimleri $2!=2$, üçlü kesişim $1$ yerleştirmedir. Sonuç
$$24-3\cdot6+3\cdot2-1=11$$
olur.

**Neden doğru?** Kesişimler, birden çok yasağı aynı anda içeren yerleştirmelerin kaç kez çıkarıldığını düzeltir.

**Çeldirici notu:** Yalnız üç altıyı çıkarmak iki veya üç yasağın birlikte gerçekleştiği yerleştirmeleri fazla çıkarır.

## Soru 2
**Doğru cevap:** A

**Kazanım:** Farklı uzunluktaki permütasyonları ortak çarpanla birleştirme.

**Çözüm:** $P(n,2)=n(n-1)$ ve $P(n,1)=n$ olduğundan toplam $n^2$'dir. $n^2=36$ ve $n>0$ olduğuna göre $n=6$ bulunur.

**Neden doğru?** $n(n-1)+n=n[(n-1)+1]=n^2$ olur.

**Çeldirici notu:** İki permütasyon değerini çarpmak sorudaki toplama işlemini değiştirir.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Belirli üç kişiden tam ikisinin görev aldığı sıralı seçimleri sayma.

**Çözüm:** Görev alacak iki özel kişi 3 biçimde seçilir. Bu kişiler üç görevden ikisine $3\cdot2=6$ biçimde yerleşir. Son görevli diğer 5 öğrenciden seçilir. Toplam $3\cdot6\cdot5=90$'dır.

**Neden doğru?** Seçilmeyen özel kişi son görev için aday değildir; aksi hâlde üçü birden görev alır.

**Çeldirici notu:** Son görev için 6 kişi saymak dışarıda bırakılan özel kişiyi yeniden göreve alır.

## Soru 4
**Doğru cevap:** C

**Kazanım:** Sabit konum farkı ve arada bulunma koşullarını birlikte sayma.

**Çözüm:** Ayşe'nin konumu 1'den 6'ya kadar 6 biçimde seçilir; Berk üç konum sağında zorunludur. Ceren aradaki iki konumdan birine yerleşir. Kalan 6 öğrenci $6!$ biçimde dizilir. Toplam $6\cdot2\cdot6!=8640$'tır.

**Neden doğru?** Ayşe'nin son üç konumda olması Berk'i sıranın dışına çıkaracağından başlangıç konumu altıyla sınırlıdır.

**Çeldirici notu:** Ceren için üç konum saymak Ayşe veya Berk'in bulunduğu uçlardan birini yeniden kullanır.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Bir gruptaki kişileri diğer grubun oluşturduğu boşluklara yerleştirme.

**Çözüm:** Erkek öğrenciler $5!$ biçimde dizilir ve çevrelerinde 6 boşluk oluşur. Üç kız öğrenci bu boşluklara sıralı olarak $6\cdot5\cdot4=120$ biçimde yerleşir. Toplam $5!\cdot120=14\,400$'dür.

**Neden doğru?** Farklı boşluklara yerleşen kız öğrenciler birbirine komşu olmaz.

**Çeldirici notu:** Yalnız üç boşluğu seçmek kız öğrencilerin bu boşluklardaki sırasını eksik sayar.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Dairesel dizilişte iki karşılıklı çiftin konumlarını belirleme.

**Çözüm:** Ayşe sabitlenir ve Berk karşısına oturur. Ceren kalan 8 konumdan birine, Deniz zorunlu olarak onun karşısına oturur. Kalan 6 kişi $6!$ biçimde yerleşir. Toplam $8\cdot6!=5760$'tır.

**Neden doğru?** Ceren ve Deniz farklı olduğundan Ceren'in seçtiği her konum farklı bir yönlenme oluşturur.

**Çeldirici notu:** Kalan karşılıklı konum çiftlerini yalnız 4 saymak Ceren ile Deniz'in çift içindeki iki yönünü eksik bırakır.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Tekrarlı iki harfin yan yana olmadığı dizilişleri tamamlayıcı saymayla bulma.

**Çözüm:** Kısıtsız diziliş sayısı $6!/2!=360$'tır. İki A bir blok kabul edilirse blokla diğer dört farklı harf $5!=120$ biçimde dizilir. Yan yana olmayan diziliş sayısı $360-120=240$'tır.

**Neden doğru?** İki A özdeş olduğundan blok içinde ayrıca yer değiştirme sayılmaz.

**Çeldirici notu:** A bloğunu 2 ile çarpmak özdeş A harflerini farklı kabul eder.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Zorunlu iki rakamı içeren tekrarsız sayıları seçme ve dizme.

**Çözüm:** 0 ve 5 dışında kullanılacak 4 rakam, kalan 8 rakamdan $\binom84=70$ biçimde seçilir. Seçilen altı rakam $6!$ biçimde dizilir; sıfırın başta olduğu $5!$ diziliş çıkarılır. Toplam $70(720-120)=42\,000$'dir.

**Neden doğru?** Sıfır ve 5 seçim aşamasında zorunlu, sıfırın başta olmaması diziliş aşamasında uygulanır.

**Çeldirici notu:** $6!$ dizilişin tamamını kullanmak sıfırla başlayan beş basamaklı gösterimleri içerir.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Özdeş nesnelerin pozitif ve birbirinden farklı miktarlardaki dağılımlarını sayma.

**Çözüm:** Sekizin pozitif ve birbirinden farklı üç parçaya ayrılışları $1+2+5$ ve $1+3+4$'tür. Her üçlü, farklı kutulara $3!=6$ biçimde atanır. Toplam $2\cdot6=12$ dağıtım vardır.

**Neden doğru?** Kutular farklı olduğu için aynı üç miktarın kutular arasındaki her sırası yeni dağılımdır.

**Çeldirici notu:** Miktarların sırasını önemsememek yalnız iki sayı vererek kutu adlarını yok sayar.

## Soru 10
**Doğru cevap:** D

**Kazanım:** Farklı kişileri eş büyüklükte etiketsiz gruplara ayırma.

**Çözüm:** Kişiler sıralanıp üçerli bölünürse $9!$ sıra oluşur. Her grubun içindeki $3!$ sıralama ve üç grubun kendi aralarındaki $3!$ sıralama sonucu değiştirmez. Sayı
$$\frac{9!}{(3!)^3\,3!}=280$$
olur.

**Neden doğru?** Hem grup içi sıra hem grupların adı olmadığı için grup sırası tekrar sayımdır.

**Çeldirici notu:** Yalnız grup içi sıraları bölmek üç grubun yer değişimini ayrı sonuç sayar.
