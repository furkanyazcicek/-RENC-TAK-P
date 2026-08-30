# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 23 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Kareli bölgede iki yatay ve iki düşey sınır seçerek dikdörtgen sayma.

**Çözüm:** Dört yatay çizgiden ikisi $\binom42=6$, beş düşey çizgiden ikisi $\binom52=10$ biçimde seçilir. Her seçim bir dikdörtgen belirler. Toplam $6\cdot10=60$'tır.

**Neden doğru?** Bir dikdörtgen, üst–alt ve sol–sağ sınır çizgileriyle tek olarak belirlenir.

**Çeldirici notu:** Yalnız birim kareleri saymak daha büyük dikdörtgenleri dışarıda bırakır.

## Soru 2
**Doğru cevap:** D

**Kazanım:** İki permütasyon değerinin farkını hesaplama.

**Çözüm:** $P(9,3)=9\cdot8\cdot7=504$, $P(8,3)=8\cdot7\cdot6=336$ olduğundan fark $504-336=168$'dir.

**Neden doğru?** Her permütasyon değeri kendi başlangıç sayısından azalan üç çarpan içerir.

**Çeldirici notu:** İki ifadenin yalnız ilk çarpanlarını çıkarmak çarpım yapısını korumaz.

## Soru 3
**Doğru cevap:** E

**Kazanım:** Belirli kişilerin göreli sırasını koruyarak çoklu görevlendirme yapma.

**Çözüm:** Beş görev içinden üç özel kişinin görev konumları $\binom53=10$ biçimde seçilir; seçilen konumlara Ayşe–Berk–Ceren sırası zorunludur. Kalan iki görev, diğer 9 öğrenciden $9\cdot8=72$ biçimde doldurulur. Toplam $10\cdot72=720$'dir.

**Neden doğru?** Konumlar seçildikten sonra üç özel kişinin iç sırası yalnız bir biçimdedir.

**Çeldirici notu:** Özel kişileri $3!$ ile çarpmak verilen göreli sırayı bozan düzenleri içerir.

## Soru 4
**Doğru cevap:** A

**Kazanım:** İki boyutlu oturma düzeninde karşılıklı konumları kullanma.

**Çözüm:** Ayşe ile Berk'in kullanacağı sütun 5, sütun içindeki üst–alt sıraları 2 biçimde seçilir. Kalan 8 öğrenci diğer yerlere $8!$ biçimde oturur. Toplam $5\cdot2\cdot8!=403\,200$'dür.

**Neden doğru?** Bir sütundaki iki karşılıklı yer, Ayşe ile Berk'in konumlarını belirler.

**Çeldirici notu:** Yalnız sütunu seçmek Ayşe ile Berk'in karşılıklı yer değişimini eksik sayar.

## Soru 5
**Doğru cevap:** B

**Kazanım:** Üç ayrı kitap grubunu bloklar hâlinde sıralama.

**Çözüm:** Üç ders bloğu $3!$ biçimde, her bloğun dört farklı kitabı $4!$ biçimde dizilir. Toplam $3!\cdot(4!)^3=82\,944$'tür.

**Neden doğru?** Blok sırası ve üç bağımsız blok içi sıra ayrı seçimlerdir.

**Çeldirici notu:** Yalnız bir blok için $4!$ kullanmak diğer iki dersin iç sıralarını yok sayar.

## Soru 6
**Doğru cevap:** C

**Kazanım:** Dairesel dizilişte özdeş iki boş yerin karşılıklı olmasını sayma.

**Çözüm:** Bir boş sandalye referans konumuna getirilirse diğer boş sandalye karşı konumda zorunludur. Boş sandalyeler özdeş olduğundan her düzen bu sabitlemede iki kez temsil edilir. Kalan 8 kişi $8!$ biçimde oturur; sonuç $8!/2=20\,160$'tır.

**Neden doğru?** Karşılıklı iki boş yerden hangisinin referans konumuna getirildiği düzeni değiştirmez.

**Çeldirici notu:** $8!$ almak iki özdeş boş yerin yer değişimini ayrı düzen sayar.

## Soru 7
**Doğru cevap:** D

**Kazanım:** İki sesli harfi uçlara, tekrarlı sessizleri orta konumlara yerleştirme.

**Çözüm:** Sesliler O ve A iki uca $2!$ biçimde yerleşir. Ortadaki P, R, G, R ve M harfleri $5!/2!=60$ biçimde dizilir. Toplam $2\cdot60=120$'dir.

**Neden doğru?** İki R özdeş olduğu için orta bölümdeki yer değiştirmeleri yeni diziliş oluşturmaz.

**Çeldirici notu:** Orta harfleri $5!$ saymak R tekrarlarını iki kez sayar.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Kullanılmayan rakam çiftine göre sıfırlı ve sıfırsız sayı durumlarını ayırma.

**Çözüm:** Toplamı 9 olan kullanılmayan çiftler $(0,9),(1,8),(2,7),(3,6),(4,5)$'tir. İlk durumda sıfır kullanılmadığı için $8!=40\,320$ sayı vardır. Diğer dört durumda sıfır kullanılır; her biri $8!-7!=35\,280$ sayı verir. Toplam $40\,320+4\cdot35\,280=181\,440$'tır.

**Neden doğru?** Sıfırın seçilen rakamlar arasında olup olmaması baş basamak sayımını değiştirir.

**Çeldirici notu:** Beş rakam çiftinin hepsine aynı $8!$ değerini uygulamak sıfırla başlayan gösterimleri içerir.

## Soru 9
**Doğru cevap:** A

**Kazanım:** Toplamı verilen farklı pozitif miktarların aritmetik dizi koşulunu çözme.

**Çözüm:** Dört terim $a,a+d,a+2d,a+3d$ olsun. $4a+6d=20$, yani $2a+3d=10$ olur. $a,d$ pozitif tam sayılar için tek çözüm $a=2,d=2$'dir; miktarlar 2, 4, 6, 8'dir. Bu dört miktar kutulara $4!=24$ biçimde atanır.

**Neden doğru?** Kutular farklı olduğu için aynı miktar kümesinin bütün sıraları farklı dağılımlardır.

**Çeldirici notu:** Miktarları yalnız küçükten büyüğe atamak kutu adlarını yok sayar.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Belirli bir çiftin birlikte olmadığı eşleştirmeleri tamamlayıcı saymayla bulma.

**Çözüm:** On iki kişinin altı ikiliye ayrılma sayısı $11\cdot9\cdot7\cdot5\cdot3\cdot1=10\,395$'tir. Ayşe ile Berk birlikteyse kalan 10 kişi $9\cdot7\cdot5\cdot3\cdot1=945$ biçimde eşleşir. Fark $10\,395-945=9450$'dir.

**Neden doğru?** Her ayrımda Ayşe ile Berk ya aynı ikilide ya farklı ikililerdedir.

**Çeldirici notu:** Yalnız 945'i almak sorulan durumun tümleyenini verir.
