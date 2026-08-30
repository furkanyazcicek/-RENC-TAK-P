# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 22 — Çözümler

## Soru 1
**Doğru cevap:** B

**Kazanım:** Nokta üçlülerinden üçgen sayma.

**Çözüm:** Her üç farklı nokta bir üçgen belirler. Herhangi üç nokta doğrusal olmadığı için bütün seçimler geçerlidir: $\binom83=56$.

**Neden doğru?** Üçgenin köşe sırası sonucu değiştirmez.

**Çeldirici notu:** Noktaları sıralı seçmek aynı üçgeni $3!$ kez sayar.

## Soru 2
**Doğru cevap:** C

**Kazanım:** Farklı uzunluktaki permütasyonları oranlayarak değişkeni bulma.

**Çözüm:** Ortak $n(n-1)$ çarpanı sadeleştirilince
$$(n-2)(n-3)=30$$
olur. Ardışık çarpanlar 6 ve 5 olduğundan $n=8$ bulunur.

**Neden doğru?** $n\geq4$ koşulu ortak çarpanların sıfır olmamasını sağlar.

**Çeldirici notu:** 30'u $n(n-1)$ ile eşitlemek sadeleşmeden sonra kalan çarpanları yanlış seçer.

## Soru 3
**Doğru cevap:** D

**Kazanım:** İki özel kişiden birini belirli göreve getirip diğerini dışarıda bırakma.

**Çözüm:** Başkan Ayşe veya Berk olmak üzere 2 biçimde seçilir. Diğer özel kişi görev alamaz. Kalan iki görev, diğer 8 öğrenciden $8\cdot7=56$ biçimde doldurulur. Toplam $2\cdot56=112$'dir.

**Neden doğru?** Başkan olmayan özel kişi, başkan yardımcısı ve yazman seçimlerinden çıkarılır.

**Çeldirici notu:** Kalan görevler için 9 kişi saymak iki özel kişinin birlikte görev aldığı durumları içerir.

## Soru 4
**Doğru cevap:** E

**Kazanım:** Belirli kişileri ayrık konum çiftlerine birer kişi düşecek biçimde yerleştirme.

**Çözüm:** Dört belirli öğrenci dört konum çiftine $4!$ biçimde atanır. Her öğrenci kendi çiftindeki iki yerden birini seçer: $2^4$ seçenek. Kalan dört öğrenci boş yerlere $4!$ biçimde dizilir. Toplam $4!\cdot2^4\cdot4!=9216$'dır.

**Neden doğru?** Her konum çiftinde bir belirli, bir diğer öğrenci bulunur.

**Çeldirici notu:** Belirli öğrencileri doğrudan sekiz konumdan seçmek her çiftin kullanılması koşulunu garanti etmez.

## Soru 5
**Doğru cevap:** A

**Kazanım:** Eşit büyüklükte iki gruptan birini boşluk yöntemiyle ayırma.

**Çözüm:** Erkek öğrenciler $5!$ biçimde dizilir. Çevrelerinde oluşan 6 boşluktan beşine kız öğrenciler sıralı olarak $6\cdot5\cdot4\cdot3\cdot2=720$ biçimde yerleşir. Toplam $5!\cdot720=86\,400$'dür.

**Neden doğru?** Farklı boşluklara yerleşen kız öğrenciler birbirine komşu olmaz.

**Çeldirici notu:** Kızların kullanacağı boşlukları yalnız seçmek kızların kendi sırasını eksik sayar.

## Soru 6
**Doğru cevap:** B

**Kazanım:** Özdeş boş konumlarla dairesel diziliş sayma.

**Çözüm:** Sekiz farklı kişi ve iki özdeş boş yer, toplam 10 öğelik dairesel bir diziliştir. Doğrusal çoklu diziliş sayısı $10!/2!$ olup ortak 10 döndürmeye bölünür. Sonuç $10!/(2!\cdot10)=9!/2=181\,440$'tır.

**Neden doğru?** Kişiler farklı olduğundan hiçbir düzen daha kısa bir döndürmeyle kendisiyle çakışmaz.

**Çeldirici notu:** Boş yerleri farklı saymak her düzeni $2!$ kez tekrarlar.

## Soru 7
**Doğru cevap:** C

**Kazanım:** Belirli harf grubunun göreli sırasını sabitleme.

**Çözüm:** Altı farklı harfin $6!=720$ dizilişi vardır. Dört sessiz harfin $4!=24$ göreli sırasından yalnız biri istenir. Sonuç $720/24=30$'dur.

**Neden doğru?** Sesli harflerin konum ve sıraları serbest kalır.

**Çeldirici notu:** Sessiz harfleri yan yana kabul etmek soruda bulunmayan blok koşulu ekler.

## Soru 8
**Doğru cevap:** D

**Kazanım:** Sıfırın bulunup bulunmamasına göre tek–çift rakam seçimini ayırma.

**Çözüm:** Sıfır seçilirse diğer iki çift rakam $\binom42=6$, dört tek rakam $\binom54=5$ biçimde seçilir. Bu 30 rakam kümesinin her biri $7!-6!=4320$ geçerli sayı verir. Sıfır seçilmezse üç çift rakam $\binom43=4$, dört tek rakam 5 biçimde seçilir ve her küme $7!$ sayı verir. Toplam
$$30\cdot4320+20\cdot5040=230\,400$$
olur.

**Neden doğru?** Sıfır yalnız seçildiği durumda baş basamak için geçersiz diziliş üretir.

**Çeldirici notu:** Sıfırlı ve sıfırsız rakam kümelerine aynı diziliş sayısını uygulamak baş basamak koşulunu yanlış kullanır.

## Soru 9
**Doğru cevap:** E

**Kazanım:** Bir kutu miktarını diğer kutuların toplamına bağlayan dağılımı çözme.

**Çözüm:** X kutusunda $x$, diğer kutularda toplam $14-x$ top vardır. $x=14-x$ olduğundan $x=7$ bulunur. Kalan 7 top Y, Z, T ve V kutularına pozitif miktarlarda dağıtılır. Çözüm sayısı $\binom{7-1}{4-1}=\binom63=20$'dir.

**Neden doğru?** Toplam eşitliği X kutusunun miktarını tek olarak belirler; geriye dört kutulu pozitif dağılım kalır.

**Çeldirici notu:** Diğer kutularda sıfıra izin vermek en az bir top koşulunu bozar.

## Soru 10
**Doğru cevap:** A

**Kazanım:** Farklı büyüklükteki gruplama ile grup içi görev seçimini birleştirme.

**Çözüm:** Dört kişilik grup $\binom94=126$ biçimde seçilir; kalanlar beş kişilik grubu oluşturur. Küçük gruptaki kaptan 4 biçimde seçilir. Toplam $126\cdot4=504$'tür.

**Neden doğru?** Grup büyüklükleri farklı olduğu için gruplar büyüklüklerinden ayırt edilir ve 2'ye bölünmez.

**Çeldirici notu:** Kaptanı grup seçilmeden önce bütün 9 kişiden seçmek kaptanın beş kişilik grupta kaldığı geçersiz durumları içerir.
