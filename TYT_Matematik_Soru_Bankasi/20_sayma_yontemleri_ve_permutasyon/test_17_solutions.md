# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 17 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Her ikili bir kez karşılaşırken sırasız çiftleri sayma.

**Çözüm:** İlk takımın 8, ikincinin daha önce sayılmamış 7, sonraki takımların sırasıyla 6, 5, 4, 3, 2 ve 1 yeni rakibi vardır. Toplam $8+7+\cdots+1=36$ maç oynanır.

**Neden doğru?** A–B maçı ile B–A maçı aynı karşılaşmadır ve yalnız bir kez sayılır.

**Çeldirici notu:** $9\cdot8$ kullanmak her maçı iki takımın açısından iki kez sayar.

## Soru 2
**Doğru cevap:** C

**Kazanım:** İki permütasyon ifadesini ortak çarpanla karşılaştırma.

**Çözüm:** $P(n,2)=n(n-1)$ ve $P(n-1,2)=(n-1)(n-2)$'dir. $n\geq3$ olduğundan $n-1$ sadeleştirilir:
$$n=2(n-2).$$
Buradan $n=4$ bulunur.

**Neden doğru?** Koşul, ortak pozitif çarpanla sadeleştirmeye izin verir.

**Çeldirici notu:** $P(n-1,2)$ ifadesini $(n-1)n$ yazmak azalan çarpanları yanlış başlatır.

## Soru 3
**Doğru cevap:** D

**Kazanım:** Belirli kişileri ardışık görev konumlarına yerleştirme.

**Çözüm:** Dört sıralı görev içinde yan yana görev çifti 3 biçimde seçilir. Ayşe ile Berk bu iki göreve 2 biçimde yerleşir. Kalan iki görev, diğer 8 öğrenciden $8\cdot7=56$ biçimde doldurulur. Toplam $3\cdot2\cdot56=336$'dır.

**Neden doğru?** Görev sırası başkan, başkan yardımcısı, yazman, sayman biçiminde sabittir.

**Çeldirici notu:** Ayşe ile Berk'in sırasını tek kabul etmek iki görev değişimini eksik sayar.

## Soru 4
**Doğru cevap:** E

**Kazanım:** Belirli grubun iki ayrı konum kümesini birlikte doldurmasını sayma.

**Çözüm:** Dört öğrenciden uçlarda bulunacak ikisi $\binom42=6$ biçimde seçilir; uçlara $2!$, ortadaki 5 ve 6. konumlara kalan ikisi $2!$ biçimde yerleşir. Diğer 6 öğrenci $6!$ biçimde dizilir. Toplam $6\cdot2\cdot2\cdot6!=17\,280$'dir.

**Neden doğru?** Uç ve orta konum kümeleri ayrık ve ikişer kişiliktir.

**Çeldirici notu:** Dört belirli öğrenciyi yalnız dört konuma $4!$ biçimde dizmek hangi ikisinin uçlarda olduğunu içerse de aynı sonucu verir; ek bir seçimle tekrar çarpmak fazla sayar.

## Soru 5
**Doğru cevap:** A

**Kazanım:** Belirli dört kişinin göreli sırasını sabitleme.

**Çözüm:** Dokuz öğrencinin $9!$ dizilişi vardır. Dört belirli kişinin $4!=24$ göreli sırasından yalnız biri istenir. Bu nedenle $9!/24=15\,120$ diziliş vardır.

**Neden doğru?** Diğer öğrencilerin konumları değişmeden dört belirli kişinin tüm göreli sıraları eşit sayıda oluşur.

**Çeldirici notu:** Dört kişiyi yan yana kabul etmek göreli sıra koşuluna gereksiz bir blok koşulu ekler.

## Soru 6
**Doğru cevap:** B

**Kazanım:** Dairesel dizilişte karşılıklı kişilerden uzak konumları sayma.

**Çözüm:** Ayşe sabitlenir, Berk karşısına oturur. Kalan 8 konumdan Ayşe veya Berk'e komşu olan dört konum çıkarılınca Ceren için 4 yer kalır. Diğer 7 kişi $7!$ biçimde oturur. Toplam $4\cdot7!=20\,160$'tır.

**Neden doğru?** On kişilik masada karşılıklı iki kişinin komşu konum kümeleri birbirine karışmaz.

**Çeldirici notu:** Ceren için bütün sekiz boş konumu saymak yasaklı dört komşu konumu içerir.

## Soru 7
**Doğru cevap:** C

**Kazanım:** Farklı sesli harfleri sessizlerin oluşturduğu boşluklara yerleştirme.

**Çözüm:** Beş sessiz harf $5!$ biçimde dizilir ve çevrelerinde 6 boşluk oluşur. Üç farklı sesli harf bu boşluklara sıralı olarak $6\cdot5\cdot4=120$ biçimde yerleşir. Toplam $5!\cdot120=14\,400$'dür.

**Neden doğru?** Her boşluğa en fazla bir sesli harf yerleştirildiğinde sesliler komşu olmaz.

**Çeldirici notu:** Üç boşluğu yalnız seçmek farklı sesli harflerin bu boşluklardaki sırasını eksik sayar.

## Soru 8
**Doğru cevap:** D

**Kazanım:** Uç rakam toplamı koşulunda baş basamak kısıtını uygulama.

**Çözüm:** Toplamı 9 olan sıralı uç çiftleri $(0,9),(1,8),\ldots,(9,0)$ olmak üzere 10 tanedir; ancak ilk rakamın 0 olduğu çift geçersizdir. Kalan 9 çiftin her biri için ortadaki 5 basamak, kalan 8 rakamdan $P(8,5)=6720$ biçimde doldurulur. Toplam $9\cdot6720=60\,480$'dir.

**Neden doğru?** Uç rakamlar farklıdır ve orta basamaklarda yeniden kullanılamaz.

**Çeldirici notu:** On çiftin tamamını kullanmak sıfırla başlayan altı basamaklı gösterimleri içerir.

## Soru 9
**Doğru cevap:** E

**Kazanım:** Tam bir kutuda en küçük miktarın bulunduğu özdeş nesne dağılımlarını sayma.

**Çözüm:** Bir top alacak kutu 4 biçimde seçilir. Kalan 9 top diğer üç kutuya en az ikişer top verilecek biçimde dağıtılır. Her birine 2 top verildikten sonra kalan 3 topun negatif olmayan dağılım sayısı $\binom52=10$'dur. Toplam $4\cdot10=40$'tır.

**Neden doğru?** Diğer kutuların en az iki top alması, yalnız bir kutunun bir toplu olmasını garanti eder.

**Çeldirici notu:** Diğer kutulara yalnız pozitif olma koşulu koymak birden fazla kutunun bir top aldığı dağılımları içerir.

## Soru 10
**Doğru cevap:** A

**Kazanım:** Bağımsız temsilci seçimlerini doğrusal dizilişle birleştirme.

**Çözüm:** Her çiftten temsilci 2 biçimde seçildiği için $2^6$ temsilci grubu vardır. Seçilen 6 kişi $6!$ biçimde dizilir. Toplam $2^6\cdot6!=46\,080$'dir.

**Neden doğru?** Her çiftin seçimi diğerlerinden bağımsızdır ve sıralama temsilciler belirlendikten sonra yapılır.

**Çeldirici notu:** Yalnız $6!$ kullanmak çiftlerden hangi eşin seçildiğini yok sayar.
