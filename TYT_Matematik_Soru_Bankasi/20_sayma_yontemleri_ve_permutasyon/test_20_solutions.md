# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 20 — Çözümler

## Soru 1
**Doğru cevap:** E

**Kazanım:** Farklı uzunluklardaki sıralı seçimlerin tamamını toplama.

**Çözüm:** Seçilen bayrak sayısı 1'den 6'ya kadar olabilir. Toplam
$$P(6,1)+P(6,2)+\cdots+P(6,6)=6+30+120+360+720+720=1956$$
olur.

**Neden doğru?** Her uzunluk farklı sayıda bayrak içerdiği için durumlar ayrıdır ve sonuçları toplanır.

**Çeldirici notu:** Yalnız $6!$ kullanmak bütün bayrakların seçildiği tek uzunluğu sayar.

## Soru 2
**Doğru cevap:** A

**Kazanım:** Sıfır faktöriyeli içeren çarpımı hesaplama.

**Çözüm:** $0!=1$, $1!=1$, $2!=2$ ve $3!=6$ olduğundan çarpım $1\cdot1\cdot2\cdot6=12$'dir.

**Neden doğru?** Tanım gereği $0!=1$'dir; sıfır değildir.

**Çeldirici notu:** $0!$ değerini 0 almak bütün çarpımı yanlışlıkla sıfır yapar.

## Soru 3
**Doğru cevap:** B

**Kazanım:** Belirli kişinin izin verilen görevlerinden birini almasını sayma.

**Çözüm:** Ayşe başkan veya sözcü olmak üzere 2 görevden birini alır. Kalan dört görev diğer 10 öğrenciye sıralı olarak $10\cdot9\cdot8\cdot7=5040$ biçimde verilir. Toplam $2\cdot5040=10\,080$'dir.

**Neden doğru?** Ayşe yalnız bir görev alır ve kalan görevlerin adları birbirinden farklıdır.

**Çeldirici notu:** Kalan dört kişiyi sırasız seçmek hangi görevi aldıklarını ayırmaz.

## Soru 4
**Doğru cevap:** C

**Kazanım:** İki etiketsiz sıradaki doğrusal dizilişleri sayma.

**Çözüm:** On kişi, iki sıra adlandırılmış olsaydı on farklı konuma $10!$ biçimde yerleşirdi. İki sıranın bütünüyle yer değiştirmesi aynı kabul edildiği için sayı $10!/2=1\,814\,400$'dür.

**Neden doğru?** Her düzen, sıralar etiketli sayıldığında tam iki kez görünür.

**Çeldirici notu:** Her sıranın iç sırasını ayrıca bölmek, soruda önemli olduğu belirtilen soldan sağa düzeni yok sayar.

## Soru 5
**Doğru cevap:** D

**Kazanım:** Farklı kişileri büyüklükleri ve adları belirli gruplara ayırma.

**Çözüm:** X ekibine gidecek 2 kişi $\binom{12}{2}=66$ biçimde seçilir. Kalan 10 kişiden Y ekibine 4 kişi $\binom{10}{4}=210$ biçimde seçilir; son 6 kişi Z ekibini oluşturur. Toplam $66\cdot210=13\,860$'tır.

**Neden doğru?** Ekiplerin adları ve büyüklükleri farklı olduğundan grup değişimleri aynı sonuç değildir.

**Çeldirici notu:** Grup sayısını ayrıca $3!$ ile çarpmak zaten adlandırılmış X, Y ve Z ekiplerini yeniden sıralar.

## Soru 6
**Doğru cevap:** E

**Kazanım:** Özdeş harfleri diğer harflerin boşluklarına ayırarak yerleştirme.

**Çözüm:** A dışındaki K, K, P, D, O ve Y harfleri $6!/2!=360$ biçimde dizilir. Çevrelerinde oluşan 7 boşluktan üçü A harfleri için $\binom73=35$ biçimde seçilir. Toplam $360\cdot35=12\,600$'dür.

**Neden doğru?** Her boşluğa en fazla bir A konulduğunda A harfleri yan yana gelmez.

**Çeldirici notu:** A harflerini seçilen boşluklarda $3!$ biçimde sıralamak özdeş A'ları farklı kabul eder.

## Soru 7
**Doğru cevap:** A

**Kazanım:** Belirli bir sayı türünden tam iki rakam içeren tekrarsız sayıları sayma.

**Çözüm:** 3'ün katı rakamlar 3, 6 ve 9'dur; bunlardan ikisi $\binom32=3$ biçimde seçilir. Kalan altı rakamdan dördü $\binom64=15$ biçimde seçilir. Altı farklı rakam $6!=720$ biçimde dizilir. Toplam $3\cdot15\cdot720=32\,400$'dür.

**Neden doğru?** Rakam kümesinde sıfır olmadığı için baş basamak kısıtı yoktur.

**Çeldirici notu:** Üçün katı olmayan rakamlar arasına 0'ı eklemek soruda verilen rakam kümesini değiştirir.

## Soru 8
**Doğru cevap:** B

**Kazanım:** Özdeş nesne dağılımında boş kutu ve tek miktar koşullarını birlikte kullanma.

**Çözüm:** Boş kalacak kutu 4 biçimde seçilir. Dolu kutulardaki miktarlar $2a+1$, $2b+1$, $2c+1$ biçiminde yazılır. Toplam 11 olduğundan $a+b+c=4$ olur. Negatif olmayan çözüm sayısı $\binom62=15$ olduğuna göre toplam dağıtım sayısı $4\cdot15=60$'tır.

**Neden doğru?** Her dolu kutudan önce birer top ayırmak tek olma koşulunu, kalan topları ikili gruplar hâlinde dağıtmak da pariteyi korur.

**Çeldirici notu:** Boş kutuyu seçmemek yalnız önceden belirlenmiş bir kutunun boş olduğu dağılımları sayar.

## Soru 9
**Doğru cevap:** C

**Kazanım:** Farklı büyüklükteki etiketsiz grupları oluşturma.

**Çözüm:** Üç kişilik grup $\binom83=56$ biçimde seçildiğinde kalan beş kişi diğer grubu oluşturur. Grup büyüklükleri farklı olduğu için ayrıca 2'ye bölünmez.

**Neden doğru?** Üç kişilik ve beş kişilik gruplar büyüklüklerinden ayırt edilir.

**Çeldirici notu:** İkiye bölmek eşit büyüklükte olmayan grupları gereksiz yere aynılaştırır.

## Soru 10
**Doğru cevap:** D

**Kazanım:** Etiketsiz ikili gruplama ile dairesel blok dizilişini birleştirme.

**Çözüm:** Altı kişi üç etiketsiz ikiliye $6!/(2^3\,3!)=15$ biçimde ayrılır. Üç ikili blok masa çevresine $(3-1)!=2$ biçimde yerleşir. Her ikili kendi içinde 2 biçimde oturur. Toplam $15\cdot2\cdot2^3=240$'tır.

**Neden doğru?** Grup oluşturma aşamasında ikililer etiketsiz, oturma aşamasında ise blokların dairesel sırası önemlidir.

**Çeldirici notu:** İkilileri oluştururken sıralı saymak blokların masa çevresindeki sırasını daha sonra yeniden sayar.
