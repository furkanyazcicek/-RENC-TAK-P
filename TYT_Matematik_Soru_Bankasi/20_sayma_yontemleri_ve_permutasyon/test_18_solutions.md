# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 18 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Köşe çiftlerinden kenarları çıkararak köşegen sayma.

**Çözüm:** On köşeden seçilen her iki köşe bir doğru parçası belirler; toplam $\binom{10}{2}=45$ parça vardır. Bunların 10'u çokgenin kenarıdır. Köşegen sayısı $45-10=35$'tir.

**Neden doğru?** Her köşegen iki farklı köşe tarafından ve yalnız bir kez belirlenir.

**Çeldirici notu:** Bütün köşe çiftlerini almak çokgenin kenarlarını da köşegen sayar.

## Soru 2
**Doğru cevap:** D

**Kazanım:** Faktöriyel içindeki asal çarpan sayısını katları üzerinden bulma.

**Çözüm:** $15!$ içinde 3'ün katlarından $\lfloor15/3\rfloor=5$ tane 3 çarpanı gelir. 9'un katı olan 9 ayrıca bir 3 daha verir: $\lfloor15/9\rfloor=1$. Toplam üs $5+1=6$'dır.

**Neden doğru?** 9 sayısı $3^2$ içerdiği için ilk sayımda alınan 3'e ek bir çarpan sağlar.

**Çeldirici notu:** Yalnız 3'ün katlarını saymak 9'un ikinci 3 çarpanını gözden kaçırır.

## Soru 3
**Doğru cevap:** E

**Kazanım:** İlk görevi belirli bir gruptan, kalan görevleri grup dışından seçme.

**Çözüm:** Başkan için Ayşe, Berk veya Ceren olmak üzere 3 seçenek vardır. Diğer iki görev, bu üçlü dışındaki 6 öğrenciden sıralı olarak $6\cdot5=30$ biçimde verilir. Toplam $3\cdot30=90$'dır.

**Neden doğru?** Başkan olmayan iki özel öğrenci de diğer görevler için yasaktır; soru kalan altılıyı açıkça belirtir.

**Çeldirici notu:** Kalan görevler için 8 kişi saymak üçlüden iki kişiyi yeniden aday yapar.

## Soru 4
**Doğru cevap:** A

**Kazanım:** Belirli kişileri uç ve orta konumlara sabitleme.

**Çözüm:** Ayşe ile Berk iki uca $2!$, Ceren ile Deniz 5 ve 6. konumlara $2!$ biçimde yerleşir. Kalan 6 öğrenci $6!$ biçimde dizilir. Toplam $2\cdot2\cdot720=2880$'dir.

**Neden doğru?** İki konum çifti sabittir; yalnız her çift içindeki yer değişimleri ve kalan grup sıralanır.

**Çeldirici notu:** Orta konumlar için yeniden seçim yapmak sabit 5 ve 6. konumları gereksiz yere çoğaltır.

## Soru 5
**Doğru cevap:** B

**Kazanım:** İki grubun göreli sırasını, grup içi sıraları serbest bırakarak sayma.

**Çözüm:** Dört belirli kişinin $4!=24$ göreli sırası vardır. İlk iki göreli konumda Ayşe ile Berk $2!$, son iki konumda Ceren ile Deniz $2!$ biçimde sıralanır; uygun 4 göreli sıra vardır. Dizilişlerin $4/24=1/6$'sı uygundur. Sonuç $9!/6=60\,480$'dir.

**Neden doğru?** İki grup içinde sıra serbest, ancak ilk grubun iki üyesi ikinci grubun iki üyesinden önce olmalıdır.

**Çeldirici notu:** Ayşe–Berk ve Ceren–Deniz iç sıralarını sabitlemek geçerli göreli sıraların yalnız birini sayar.

## Soru 6
**Doğru cevap:** C

**Kazanım:** Dairesel dizilişte yönü belirtilmiş iki komşu konumu sabitleme.

**Çözüm:** Ayşe sabitlenir. Berk'in saat yönündeki, Ceren'in saat yönünün tersindeki komşu konumu artık tektir. Kalan 5 kişi boş yerlere $5!=120$ biçimde oturur.

**Neden doğru?** Yönler açıkça belirtildiği için Berk ile Ceren'in yerleri arasında ayrıca değişim yapılmaz.

**Çeldirici notu:** Berk ile Ceren'in yerlerini 2 ile çarpmak yön koşuluna uymayan oturmaları içerir.

## Soru 7
**Doğru cevap:** D

**Kazanım:** Tekrarlı sesli harfleri sessizlerin boşluklarına yerleştirme.

**Çözüm:** Sessiz harfler K, R, D, N ve Z olup $5!$ biçimde dizilir. Çevrelerinde oluşan 6 boşluktan dördü $\binom64=15$ biçimde seçilir. Sesliler A, A, E ve İ seçilen boşluklara $4!/2!=12$ biçimde yerleşir. Toplam $120\cdot15\cdot12=21\,600$'dür.

**Neden doğru?** Her seçilen boşluğa bir sesli geldiği için sesliler birbirine komşu olmaz.

**Çeldirici notu:** İki A'yı farklı saymak her dizilişi iki kez sayar.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Tek ve çift rakam adetleri sabit tekrarsız sayıları seçip dizme.

**Çözüm:** Beş tek rakamdan üçü $\binom53=10$, dört çift rakamdan üçü $\binom43=4$ biçimde seçilir. Sıfır bulunmadığı için seçilen altı rakam $6!=720$ biçimde dizilir. Toplam $10\cdot4\cdot720=28\,800$'dür.

**Neden doğru?** Kullanılan rakam kümesi 1–9 olduğu için baş basamak kısıtı oluşmaz.

**Çeldirici notu:** Tek ve çift rakamların basamaklarını ayrıca seçmek, bütün $6!$ dizilişlerde zaten bulunan ayrımı tekrar sayar.

## Soru 9
**Doğru cevap:** A

**Kazanım:** Farklı büyüklükteki görev gruplarını etiketli günlere dağıtma.

**Çözüm:** Beş görev alacak gün 3 biçimde seçilir. O güne gidecek görevler $\binom95=126$, kalan iki günden belirli birine gidecek iki görev $\binom42=6$ biçimde seçilir; son iki görev son güne kalır. Toplam $3\cdot126\cdot6=2268$'dir.

**Neden doğru?** Günler farklı olduğu için iki ikili görev grubunun yer değiştirmesi yeni dağıtım oluşturur.

**Çeldirici notu:** Beş görevli günü seçmemek yalnız önceden belirlenmiş bir gün için sayım yapar.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Etiketsiz ikili gruplama ile grup içi görev seçimini birleştirme.

**Çözüm:** On kişi beş etiketsiz ikiliye
$$\frac{10!}{2^5\,5!}=945$$
biçimde ayrılır. Her ikilide sorumlu 2 biçimde seçildiğinden $2^5$ görev seçimi vardır. Toplam $945\cdot32=30\,240$'tır.

**Neden doğru?** İkili içindeki sorumlu seçimi, ikili oluşturulduktan sonra bağımsız yapılır.

**Çeldirici notu:** İkili grupları sıralı kabul etmek beş grubun yer değiştirmelerini tekrar sayar.
