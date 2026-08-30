# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 21 — Çözümler

## Soru 1
**Doğru cevap:** A

**Kazanım:** Sırasız takım çiftlerini iki karşılaşmayla sayma.

**Çözüm:** Takım çiftlerinin sayısı $\binom72=21$'dir. Her çift iki maç yaptığı için toplam $2\cdot21=42$ maç oynanır.

**Neden doğru?** Ev sahibi değiştiğinde aynı iki takım arasında farklı bir maç oluşur.

**Çeldirici notu:** Yalnız 21'i almak her takım çiftinin ikinci maçını eksik sayar.

## Soru 2
**Doğru cevap:** B

**Kazanım:** İki permütasyon değerinin oranını sadeleştirme.

**Çözüm:** $P(8,3)=8\cdot7\cdot6$ ve $P(6,1)=6$ olduğundan
$$\frac{8\cdot7\cdot6}{6}=56$$
elde edilir.

**Neden doğru?** Pay ve paydadaki ortak 6 çarpanı sadeleşir.

**Çeldirici notu:** $P(6,1)$ ifadesini $6!$ sanmak permütasyon gösterimini yanlış yorumlar.

## Soru 3
**Doğru cevap:** C

**Kazanım:** Belirli iki kişinin görev sırasını sabitleyerek görevlendirme sayma.

**Çözüm:** Dört görev içinden Ayşe ile Berk'in yerleri, Ayşe önce olacak biçimde $\binom42=6$ biçimde seçilir. Kalan iki görev diğer 10 öğrenciden $10\cdot9=90$ biçimde doldurulur. Toplam $6\cdot90=540$'tır.

**Neden doğru?** Seçilen iki görev konumunda Ayşe–Berk sırası zorunludur.

**Çeldirici notu:** Görev konumlarını $4\cdot3$ saymak Berk'in Ayşe'den önce olduğu durumları da içerir.

## Soru 4
**Doğru cevap:** D

**Kazanım:** Belirli kişileri komşu olmayan konumlara yerleştirme.

**Çözüm:** On iki konumdan komşu olmayan 4 konum $\binom94=126$ biçimde seçilir. Dört belirli öğrenci bu konumlara $4!$, kalan 8 öğrenci diğer konumlara $8!$ biçimde dizilir. Toplam $126\cdot24\cdot40\,320=121\,927\,680$'dir.

**Neden doğru?** Doğrusal sırada $n$ konumdan komşu olmayan $r$ konum seçimi $\binom{n-r+1}{r}$ biçimindedir.

**Çeldirici notu:** Dört konumu kısıtsız seçmek yan yana gelen belirli öğrencileri içerir.

## Soru 5
**Doğru cevap:** E

**Kazanım:** İki grubun sıra üzerindeki bölgesini sabitleyip grup içlerini dizme.

**Çözüm:** İlk beş konumda kızlar $5!$, son beş konumda erkekler $5!$ biçimde dizilir. Toplam $5!\cdot5!=14\,400$'dür.

**Neden doğru?** Bütün kızların önce olması, iki grubun kullanacağı konumları tamamen belirler.

**Çeldirici notu:** Grup sırasını ayrıca 2 ile çarpmak erkeklerin önce olduğu soruda istenmeyen düzenleri içerir.

## Soru 6
**Doğru cevap:** A

**Kazanım:** Bir boş konumu da öğe kabul ederek dairesel diziliş sayma.

**Çözüm:** Altı farklı kişi ve bir boş yer, toplam 7 farklı öğe gibi düşünülür. Dairesel diziliş sayısı $(7-1)!=720$'dir.

**Neden doğru?** Boş sandalye diğer öğelerden farklı bir işaretleyici gibi davranır.

**Çeldirici notu:** Önce boş sandalyeyi 7 biçimde seçip sonra kişileri dairesel saymak ortak döndürmeleri tekrar sayabilir.

## Soru 7
**Doğru cevap:** B

**Kazanım:** Belirli türdeki harfleri iki uca yerleştirme.

**Çözüm:** Sesli harfler E ve İ iki uca $2!$ biçimde, kalan dört sessiz harf orta konumlara $4!$ biçimde yerleşir. Toplam $2\cdot24=48$'dir.

**Neden doğru?** Sözcükteki bütün harfler birbirinden farklıdır.

**Çeldirici notu:** Sesli harflerin sağ–sol yer değişimini saymamak sonucu yarıya indirir.

## Soru 8
**Doğru cevap:** C

**Kazanım:** Seçilen beş rakamın ortanca elemanını belirli basamağa sabitleme.

**Çözüm:** Kullanılacak 5 rakam $\binom85=56$ biçimde seçilir. Her beşlinin ortanca değeri tektir ve ilk basamağa yerleşir. Kalan 4 rakam diğer basamaklara $4!=24$ biçimde dizilir. Toplam $56\cdot24=1344$'tür.

**Neden doğru?** Beş farklı rakam sıralandığında üçüncü rakam tek bir ortanca değer verir.

**Çeldirici notu:** Ortanca rakamı ayrıca seçmek aynı rakam kümesini birden çok kez sayar.

## Soru 9
**Doğru cevap:** D

**Kazanım:** Kutu miktarlarının tek–çift yapısını dönüşümle sayma.

**Çözüm:** Çift top alacak kutu 4 biçimde seçilir. Bu kutudaki miktar $2a$ ve $a\geq1$, diğer kutulardaki miktarlar $2b+1$, $2c+1$, $2d+1$ olsun. Toplam 13 olduğundan $a+b+c+d=5$ olur. $a'=a-1$ alınırsa dört değişkenin toplamı 4'tür; $\binom73=35$ çözüm vardır. Toplam $4\cdot35=140$'tır.

**Neden doğru?** Üç tek ve bir çift miktarın toplamı tektir; dönüşüm bütün koşulları korur.

**Çeldirici notu:** Çift miktarlı kutuda sıfıra izin vermek boş kutu içeren geçersiz dağılımları sayar.

## Soru 10
**Doğru cevap:** E

**Kazanım:** Belirli bir ikili sabitken kalan kişileri sırasız çiftlere ayırma.

**Çözüm:** Ayşe ile Berk bir grup olarak sabittir. Kalan 8 kişi dört ikiliye $7\cdot5\cdot3\cdot1=105$ biçimde ayrılır.

**Neden doğru?** Her adımda en küçük numaralı eşleşmemiş kişi sabit alınırsa grup sırası tekrar sayılmaz.

**Çeldirici notu:** Ayşe–Berk grubunu da yeniden seçmek sabit koşulu gereksiz yere çoğaltır.
