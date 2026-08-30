# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 40 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Basamak ve rakam kısıtlarını birlikte kullanarak sayma.

**Çözüm:**

Sayının birler basamağı $1,3,5,7$ rakamlarından biri olmalıdır; bunun için 4 seçim vardır. Birler basamağı belirlendikten sonra geriye $0$ ve sıfırdan farklı 7 rakam kalır.

İlk dört basamakta $0$ ile birlikte kullanılacak üç rakam $\binom{7}{3}=35$ biçimde seçilir. Seçilen dört rakamın tüm sıralamalarından $0$ ile başlayanlar çıkarılır:

$$4!-3!=18$$

Dolayısıyla sayı adedi

$$4\cdot35\cdot18=2520$$

olur.

**Neden doğru?** Teklik koşulu birler basamağını, $0$'ın sayı içinde bulunması ise ilk dört basamağın seçimini belirler; iki koşul aynı sayımda birlikte uygulanmıştır.

**Çeldirici notu:** $0$'ın ilk basamağa gelemeyeceğini veya oluşturulan sayının tek olması gerektiğini gözden kaçırmak sayımı değiştirir.

## Soru 2

**Doğru cevap:** A

**Kazanım:** Ayrık ve adlandırılmış grupları koşullu olarak oluşturma.

**Çözüm:**

Ayşe kırmızı takımda sabittir. Kırmızı takımın kalan iki üyesi 9 kişiden $\binom{9}{2}$ biçimde seçilir. Bu seçimden sonra kalan 7 kişiden mavi takıma iki kişi seçilir.

$$\binom{9}{2}\binom{7}{2}=36\cdot21=756$$

**Neden doğru?** Ayşe sabitlendikten sonra iki takım art arda ve ortak üye bırakmayacak biçimde seçilmiştir.

**Çeldirici notu:** Takımların adları farklı olduğu için kırmızı ve mavi takımı kendi aralarında özdeş kabul etmek doğru değildir.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Dairesel permütasyonda birden çok karşılıklılık koşulunu uygulama.

**Çözüm:**

Dönmeden kaynaklanan eş dizilişleri ayırmak için Ali'nin yeri sabitlenir. Burcu'nun yeri, Ali'nin karşısı olarak belirlenir.

Cem kalan 6 yerden birine oturabilir; Deniz'in yeri de Cem'in karşısı olarak belirlenir. Kalan dört kişi boş yerlere $4!$ biçimde oturur.

$$6\cdot4!=6\cdot24=144$$

**Neden doğru?** Bir kişinin sabitlenmesi dönme eşliğini kaldırır; iki karşıtlık koşulu da ilgili eşlerin yerlerini tek biçimde belirler.

**Çeldirici notu:** Dairesel dizilişte başlangıç noktası varmış gibi sekiz farklı döndürmeyi ayrı saymak sonucu büyütür.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Özdeş elemanları aralıklara yerleştirerek kısıtlı diziliş sayısını bulma.

**Çözüm:**

Önce birbirinden farklı N, K ve R harfleri $3!=6$ biçimde sıralanır. Bu harflerin oluşturduğu dört aralık şöyledir:

$$\_\,N\,\_\,K\,\_\,R\,\_$$

Üç özdeş A harfinin yan yana gelmemesi için bu dört aralıktan üçü seçilir. Böylece

$$3!\binom{4}{3}=6\cdot4=24$$

farklı yazılış elde edilir.

**Neden doğru?** A harflerinin farklı aralıklara yerleştirilmesi, yan yana gelmeme koşulunu hem gerekli hem yeterli olarak sağlar.

**Çeldirici notu:** Üç A harfi özdeş olduğundan seçilen aralıklar arasında ayrıca $3!$ ile sıralama yapılmaz.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Özdeş nesneleri tam olma koşuluyla farklı kutulara dağıtma.

**Çözüm:**

Yalnız bir bilye bulunacak kutu 4 biçimde seçilir. Geriye kalan 12 bilye diğer üç kutuya dağıtılır ve bu kutuların her birinde en az 2 bilye bulunmalıdır.

Bu üç kutudaki bilye sayılarından ikişer çıkarıldığında 6 bilyenin üç farklı kutuya kısıtsız dağıtımı kalır:

$$\binom{6+3-1}{3-1}=\binom{8}{2}=28$$

Toplam dağıtım sayısı

$$4\cdot28=112$$

olur.

**Neden doğru?** Bir bilyeli kutu önce seçilmiş, diğer kutulara en az ikişer bilye verilerek “tam olarak bir” koşulu korunmuştur.

**Çeldirici notu:** Diğer kutuların da birer bilye almasına izin vermek, “tam olarak birinde” koşulunu bozar.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Sıralamada konum seçimi ve göreli öncelik koşulunu birlikte kullanma.

**Çözüm:**

İlk üçte yer alacak kişi Ceren ile Doruk arasından 2 biçimde seçilir. İlk üçün kalan iki kişisi, diğer 6 sporcudan $\binom{6}{2}$ biçimde seçilir.

Seçilen ilk üç sporcu kendi arasında $3!$, kalan beş sporcu kendi arasında $5!$ biçimde sıralanabilir. Bu sıralamaların tam yarısında Ayça, Berke'den önce gelir. Bu nedenle

$$\frac{2\binom{6}{2}3!5!}{2}=15\cdot6\cdot120=10800$$

sonuç sıralaması vardır.

**Neden doğru?** İlk üçteki Ceren-Doruk koşulu seçim aşamasında, Ayça-Berke önceliği ise simetrik sıralamaların yarısı alınarak uygulanmıştır.

**Çeldirici notu:** “Yalnız biri” koşulu Ceren ve Doruk'un ikisinin de ilk üçte olduğu durumları dışarıda bırakır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** Tümleyeni ve yerine koymama durumlarını kullanarak eşleştirme sayma.

**Çözüm:**

Anahtarların kilitlere tüm eşleştirmelerinin sayısı $5!=120$'dir. Hiçbir anahtarın kendi kilidine takılmadığı eşleştirmelerin sayısı, içerme-dışlama ilkesiyle

$$5!-\binom51 4!+\binom52 3!-\binom53 2!+\binom54 1!-\binom55 0!=44$$

olur. En az bir doğru eşleştirme bulunan durumların sayısı

$$120-44=76$$

dır.

**Neden doğru?** Tüm eşleştirmelerden hiçbir doğru eşleşme içermeyenler çıkarıldığında geriye tam olarak en az bir doğru eşleşmesi olanlar kalır.

**Çeldirici notu:** Beş anahtardan birini doğru eşleşmiş seçmek, birden fazla doğru eşleşmesi olan durumları tekrar tekrar sayar.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Satır-sütun kısıtlı tablo seçimlerini sayma.

**Çözüm:**

Önce kullanılacak üç satır $\binom43$, ardından kullanılacak üç sütun $\binom53$ biçimde seçilir. Seçilen üç satır ile üç sütun, her satır ve sütunda bir işaret olacak biçimde $3!$ farklı eşleştirilir.

$$\binom43\binom53 3!=4\cdot10\cdot6=240$$

**Neden doğru?** Üç farklı satır ve üç farklı sütun seçildikten sonra yapılan bire bir eşleştirme, satır ve sütun çakışmasını bütünüyle engeller.

**Çeldirici notu:** Yalnızca satır ve sütun kümelerini seçmek, bu kümelerin farklı eşleştirmelerini hesaba katmaz.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Zorunlu seçimleri sabitleyerek kombinasyon oluşturma.

**Çözüm:**

Uçlardaki iki koltuk seçime zorunlu olarak dahildir. Kalan iki koltuk, aradaki 8 koltuktan seçilir:

$$\binom82=28$$

**Neden doğru?** İki uç koltuk zorunlu olarak sabitlendiği için yalnızca kalan iki koltuğun seçilmesi gerekir.

**Çeldirici notu:** Uç koltukları da seçim yapılacak koltuklar arasında saymak verilen koşulu kullanmamak anlamına gelir.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Adlandırılmış eş büyüklükte grupları üyelik koşuluyla oluşturma.

**Çözüm:**

Aylin, Barış ve Cansu'nun üç farklı takıma dağıtılması $3!$ biçimde yapılır. Her takımda birer kişi belirlenince kalan 9 öğrenci, takımlardaki üçer boş yere

$$\frac{9!}{3!\,3!\,3!}$$

biçimde dağıtılır. Toplam sayı

$$3!\cdot\frac{9!}{(3!)^3}=6\cdot1680=10080$$

olur.

**Neden doğru?** Üç özel öğrenci farklı takımlara bire bir yerleştirildikten sonra kalan kontenjanlar eşit ve adlandırılmış gruplar olarak doldurulmuştur.

**Çeldirici notu:** Takımlar adlandırılmış olduğundan takım adlarının yer değiştirmesi aynı dağılımı vermez.
