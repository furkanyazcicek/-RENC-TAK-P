# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 16 — Çözümler

## Soru 1
**Doğru cevap:** A

**Kazanım:** Görüntü kümesinde tam iki alıcı bulunan görev dağılımlarını sayma.

**Çözüm:** Görev alacak iki kişi $\binom32=3$ biçimde seçilir. Dört farklı görev bu iki kişiye $2^4=16$ biçimde dağıtılır; ancak yalnız bir kişinin bütün görevleri aldığı 2 dağıtım çıkarılır. Toplam $3(16-2)=42$'dir.

**Neden doğru?** Seçilen iki kişinin ikisinin de en az bir görev alması gerekir.

**Çeldirici notu:** Kısıtsız 16 dağıtımı kullanmak seçilen kişilerden birinin boş kaldığı iki durumu içerir.

## Soru 2
**Doğru cevap:** B

**Kazanım:** Permütasyon değerinden seçilen öğe sayısını belirleme.

**Çözüm:** $P(7,1)=7$, $P(7,2)=42$ ve $P(7,3)=7\cdot6\cdot5=210$ olduğundan $r=3$'tür.

**Neden doğru?** Permütasyon çarpımı seçilen öğe sayısı kadar azalan çarpan içerir.

**Çeldirici notu:** 210'u $7!/3!$ sanmak permütasyonun paydasındaki farkı yanlış kurar.

## Soru 3
**Doğru cevap:** C

**Kazanım:** İki belirli görevin farklı gruplardan verilmesini sayma.

**Çözüm:** Başkan kız, yazman erkek olduğunda $5\cdot4$; başkan erkek, yazman kız olduğunda $4\cdot5$ seçim vardır. Her durumda başkan yardımcısı kalan 7 kişiden seçilir. Toplam $(20+20)\cdot7=280$'dir.

**Neden doğru?** Başkan ve yazmanın görevleri farklı olduğu için iki cinsiyet yönü ayrı ayrı sayılır.

**Çeldirici notu:** Yalnız başkanın kız olduğu durumu saymak diğer yönü eksik bırakır.

## Soru 4
**Doğru cevap:** D

**Kazanım:** Belirli kişileri seçilmiş tek numaralı konumlara yerleştirme.

**Çözüm:** On kişilik sırada 5 tek numaralı konum vardır. Dört belirli öğrenci bu konumlara $5\cdot4\cdot3\cdot2=120$ biçimde yerleşir. Kalan 6 öğrenci diğer konumlara $6!$ biçimde dizilir. Toplam $120\cdot720=86\,400$'dür.

**Neden doğru?** Tek konumlardan biri diğer öğrencilerden biri tarafından doldurulur; bu seçim kalan grubun dizilişinde yer alır.

**Çeldirici notu:** Dört tek konumu yalnız seçmek belirli öğrencilerin bu konumlardaki sırasını saymaz.

## Soru 5
**Doğru cevap:** E

**Kazanım:** En az bir komşu çift koşulunu tümleyici saymayla çözme.

**Çözüm:** Kısıtsız diziliş $8!=40\,320$'dir. Üç belirli kişinin hiçbir ikisi yan yana değilse önce diğer 5 öğrenci $5!$ biçimde dizilir; oluşan 6 boşluktan üçüne belirli öğrenciler $6\cdot5\cdot4=120$ biçimde yerleşir. Bu durum $14\,400$ düzendir. İstenen sayı $40\,320-14\,400=25\,920$'dir.

**Neden doğru?** “En az ikisi yan yana” koşulunun tümleyeni, üçünden hiçbir ikisinin yan yana olmamasıdır.

**Çeldirici notu:** Yalnız üçünün bir blok oluşturduğu düzenleri saymak tek bir komşu çift içeren geçerli dizilişleri kaçırır.

## Soru 6
**Doğru cevap:** A

**Kazanım:** Dairesel dizilişte belirli kişinin komşularını izin verilen gruptan seçme.

**Çözüm:** Ayşe sabitlenir. Berk ve Ceren dışındaki 5 kişi arasından Ayşe'nin sol ve sağ komşuları sıralı olarak $5\cdot4=20$ biçimde seçilir. Kalan 5 kişi diğer yerlere $5!$ biçimde oturur. Toplam $20\cdot120=2400$'dür.

**Neden doğru?** Sol ve sağ komşu konumları farklıdır; aynı iki kişinin yer değiştirmesi yeni düzen oluşturur.

**Çeldirici notu:** Komşuları sırasız seçmek sağ–sol yer değişimini eksik sayar.

## Soru 7
**Doğru cevap:** B

**Kazanım:** Belirli öğelerin göreli sırasını sabitleme.

**Çözüm:** Altı farklı harfin $6!=720$ dizilişi vardır. Üç sesli harfin $3!=6$ göreli sırasından yalnız E–İ–O sırası istenir. Sonuç $720/6=120$'dir.

**Neden doğru?** Sessiz harflerin konumları ve sıraları serbest kalırken seslilerin göreli sırası tektir.

**Çeldirici notu:** Sesli harfleri yan yana kabul etmek soruda bulunmayan bir blok koşulu ekler.

## Soru 8
**Doğru cevap:** C

**Kazanım:** Belirli türden tam bir rakam içeren tekrarsız sayıları sayma.

**Çözüm:** Kullanılacak çift rakam 2, 4, 6 veya 8 olmak üzere 4 biçimde seçilir. Beş tek rakamdan dördü $\binom54=5$ biçimde seçilir. Seçilen beş farklı rakam $5!=120$ biçimde dizilir. Toplam $4\cdot5\cdot120=2400$'dür.

**Neden doğru?** Rakam kümesinde sıfır bulunmadığından baş basamak için ek kısıt yoktur.

**Çeldirici notu:** Çift rakamın sayıda bulunacağı basamağı ayrıca seçmek aynı dizilişleri tekrar sayar.

## Soru 9
**Doğru cevap:** D

**Kazanım:** Bir kutu miktarı sabitken kalan özdeş nesneleri pozitif dağıtma.

**Çözüm:** X kutusuna 3 top verildikten sonra 6 top Y, Z ve T kutularına pozitif miktarlarda dağıtılır. $y+z+t=6$ denkleminin pozitif tam sayı çözüm sayısı $\binom52=10$'dur.

**Neden doğru?** Y, Z ve T farklı kutular olduğu için miktarların sırası önemlidir.

**Çeldirici notu:** Sıfıra izin vermek diğer kutulardan birinin boş kaldığı dağılımları içerir.

## Soru 10
**Doğru cevap:** E

**Kazanım:** Etiketsiz eş gruplara ayırma ve her grupta görevli seçme.

**Çözüm:** Beşer kişilik iki etiketsiz grup $\binom{10}{5}/2=126$ biçimde oluşturulur. Her gruptan kaptan 5'er biçimde seçilir. Toplam $126\cdot5\cdot5=3150$'dir.

**Neden doğru?** Grupların adları olmadığı için grup değişimi aynı ayrımdır; kaptan seçimleri grup oluşturulduktan sonra bağımsızdır.

**Çeldirici notu:** Grup sayısını 2'ye bölmemek aynı iki grubu ters sırayla tekrar sayar.
