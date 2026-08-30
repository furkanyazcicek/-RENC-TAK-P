# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 09 — Çözümler

## Soru 1
**Doğru cevap:** D

**Kazanım:** Ardışık farklılık ve eşit uç koşullarını birlikte sayma.

**Çözüm:** İlk terim için 5, ikinci terim için ilkinden farklı 4 seçenek vardır. Son terim ilk terime eşittir. Üçüncü terim hem ikinci hem son terimden farklı olmalıdır; bu iki terim zaten farklı olduğundan 3 seçenek kalır. Toplam $5\cdot4\cdot3=60$ dizi vardır.

**Neden doğru?** Üçüncü terim, iki komşusundan da farklı olmak zorundadır.

**Çeldirici notu:** Üçüncü terim için 4 seçenek saymak son terimle aynı olabileceği geçersiz dizileri içerir.

## Soru 2
**Doğru cevap:** E

**Kazanım:** Faktöriyel eşitliğinde eksik çarpanı bulma.

**Çözüm:** $8!=8\cdot7\cdot6!$ olduğundan $k=8\cdot7=56$'dır.

**Neden doğru?** Eşitliğin iki tarafındaki $6!$ çarpanları sadeleşir.

**Çeldirici notu:** Yalnız 8 çarpanını almak $7$ çarpanını gözden kaçırır.

## Soru 3
**Doğru cevap:** A

**Kazanım:** İki belirli kişinin birlikte seçildiği durumları tüm görevlendirmelerden çıkarma.

**Çözüm:** Kısıtsız görevlendirme $9\cdot8\cdot7=504$'tür. Ayşe ile Berk birlikte görev alırsa görevleri $3\cdot2=6$ biçimde, üçüncü görevli kalan 7 kişiden seçilir; $42$ durum vardır. İstenen sayı $504-42=462$'dir.

**Neden doğru?** “İkisinin birden görev almaması”, ikisinin aynı anda görev aldığı durumların yasaklanmasıdır; birinin görev alması serbesttir.

**Çeldirici notu:** Ayşe ile Berk'i tamamen aday grubundan çıkarmak yalnız ikisinin de görev almadığı durumları sayar.

## Soru 4
**Doğru cevap:** B

**Kazanım:** Simetrik konum çiftlerine belirli kişileri yerleştirme.

**Çözüm:** Uçlara eşit uzaklıktaki konum çiftleri $(1,8),(2,7),(3,6),(4,5)$ olmak üzere 4 tanedir. Ayşe ile Berk seçilen çifte 2 biçimde, kalan 6 öğrenci $6!$ biçimde yerleşir. Toplam $4\cdot2\cdot6!=5760$'tır.

**Neden doğru?** Her simetrik konum çifti yalnız bir kez seçilir; iki öğrenci bu çifte iki sırayla yerleşebilir.

**Çeldirici notu:** Yalnız dört konum çiftini seçmek öğrencilerin ve kalan grubun sırasını hesaba katmaz.

## Soru 5
**Doğru cevap:** C

**Kazanım:** Bir grubun bütün üyelerini blok kabul ederek diziliş sayma.

**Çözüm:** Üç kız öğrenci bir blok kabul edilirse blok ve 5 erkek öğrenci 6 birim oluşturur; bunlar $6!$ biçimde dizilir. Kızlar blok içinde $3!$ biçimde sıralanır. Toplam $6!\cdot3!=4320$'dir.

**Neden doğru?** Blok kız öğrencileri bir arada tutarken kendi iç sıralarını serbest bırakır.

**Çeldirici notu:** Yalnız $6!$ almak kızların altı farklı iç sırasını tek düzen sayar.

## Soru 6
**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte belirli kişileri boşluk yöntemiyle ayırma.

**Çözüm:** Önce diğer 5 kişi masa çevresine $(5-1)!=4!$ biçimde oturur. Aralarında oluşan 5 boşluktan üçüne Ayşe, Berk ve Ceren sıralı olarak $5\cdot4\cdot3=60$ biçimde yerleşir. Toplam $4!\cdot60=1440$'tır.

**Neden doğru?** Üç kişi farklı boşluklara yerleştirildiğinde hiçbiri diğerinin yanında olmaz.

**Çeldirici notu:** Boşlukları yalnız seçmek üç öğrencinin bu boşluklardaki sırasını eksik sayar.

## Soru 7
**Doğru cevap:** E

**Kazanım:** Tekrarlı harflerde eşit uç koşulunu durumlara ayırma.

**Çözüm:** Uçlar A olduğunda ortada B, B ve C kalır; bunlar $3!/2!=3$ biçimde dizilir. Uçlar B olduğunda ortada A, A ve C için yine 3 sıra vardır. Toplam $3+3=6$'dır.

**Neden doğru?** C yalnız bir tane olduğu için iki uçta birden bulunamaz.

**Çeldirici notu:** A ve B durumlarından yalnız birini saymak geçerli dizilişlerin yarısını eksik bırakır.

## Soru 8
**Doğru cevap:** A

**Kazanım:** Artan rakam koşulunda seçimin sıralamayı tekil olarak belirlediğini fark etme.

**Çözüm:** Rakamlar artan olduğundan seçilen dört rakamın dizilişi tektir. Sıfır seçilirse ilk basamakta bulunur ve sayı dört basamaklı olmaz. Bu nedenle 1–6 arasından dört rakam seçilir; seçim sayısı $\binom64=15$'tir.

**Neden doğru?** Her dört elemanlı rakam kümesi yalnız bir artan sayı oluşturur.

**Çeldirici notu:** Sıfırı da seçime katmak başında sıfır bulunan üç basamaklı gösterimleri sayar.

## Soru 9
**Doğru cevap:** B

**Kazanım:** Farklı nesneleri sıralı ve boş kalabilen gruplara dağıtma.

**Çözüm:** Önce kitaplar $6!$ biçimde sıralanır. Bu sırayı üç rafa ayırmak için sekiz konumlu gösterimde iki ayraç yerleştirilir; ayraçlar yan yana veya uçta olabilir. Ayraç konumlarının sayısı $\binom82=28$'dir. Toplam $6!\cdot28=20\,160$ olur.

**Neden doğru?** Ayraçların uçta ya da yan yana olması sırasıyla ilk/son rafın veya orta rafın boş kalmasını temsil eder.

**Çeldirici notu:** Rafların boş kalamayacağını varsaymak ayraçların uç ve yan yana konumlarını haksız yere çıkarır.

## Soru 10
**Doğru cevap:** C

**Kazanım:** Sıralı gün atamalarında iki kişinin göreli sırasını simetriyle sayma.

**Çözüm:** Dört kişi beş farklı günden dördüne $5\cdot4\cdot3\cdot2=120$ biçimde atanır. Her programda Ayşe ile Berk'in günleri yer değiştirilince önce–sonra durumları eşleşir. Programların yarısında Ayşe önce olduğundan sonuç $120/2=60$'tır.

**Neden doğru?** Günler farklı ve sıralıdır; Ayşe ile Berk aynı gün sunum yapamaz.

**Çeldirici notu:** Yalnız kişileri sıralamak hangi günün boş kaldığını saymaz.
