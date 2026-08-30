# Konu 21 — Kombinasyon

## Test 26 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** İki koşulun aynı anda doğru veya aynı anda yanlış olduğu seçimleri sayma.

**Çözüm:**

A ile B birlikte ve C de gruptaysa üçü seçilmiş olur; kalan iki kişi diğer 7 öğrenciden seçilir:

$$\binom72=21$$

İki durum da gerçekleşmeyecekse C seçilmez ve A ile B birlikte bulunmaz. C dışındaki 9 öğrenciden beş kişilik bütün gruplardan A ile B'nin birlikte olduğu gruplar çıkarılır:

$$\binom95-\binom73=126-35=91$$

Toplam

$$21+91=112$$

grup vardır.

**Neden doğru?** Koşul iki önermenin ikisinin de doğru veya ikisinin de yanlış olduğu ayrık durumları kapsar.

**Çeldirici notu:** İkinci durumda A ile B'yi ayrı ayrı dışarıda bırakmak, yalnız birinin grupta bulunduğu uygun seçimleri eksik sayar.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Kesişimin büyüklüğü sabit iki adlandırılmış alt kümeyi sayma.

**Çözüm:**

Ortak iki eleman

$$\binom92=36$$

biçimde seçilir. A'nın yalnız kendisine ait elemanı kalan 7 elemandan; B'nin yalnız kendisine ait iki elemanı ise son 6 elemandan seçilir:

$$\binom92\binom71\binom62=36\cdot7\cdot15=3780$$

**Neden doğru?** A'ya ve B'ye özel elemanlar ayrık kaynaklardan seçildiği için kesişimde yalnız başta belirlenen iki eleman kalır.

**Çeldirici notu:** B'nin özel elemanlarını da yedi elemandan seçmek, A'ya özel elemanın B'ye yeniden girmesine izin verir.

## Soru 3

**Doğru cevap:** C

**Kazanım:** İki ayrı özel gruba ilişkin “tam” ve “en az” koşullarını birleştirme.

**Çözüm:**

Birinci gruptan iki öğrenci

$$\binom42=6$$

biçimde seçilir. Kalan üç öğrenci; E, F ve diğer 6 öğrenciden, E ile F'den en az biri bulunacak biçimde seçilir:

$$\binom83-\binom63=56-20=36$$

Toplam

$$6\cdot36=216$$

seçim vardır.

**Neden doğru?** İlk seçim birinci gruptan tam iki kişiyi sabitler; ikinci seçim ikinci grubun en az bir koşulunu tümleyenle sağlar.

**Çeldirici notu:** İkinci gruptan tam bir kişi seçmek E ile F'nin birlikte bulunduğu uygun ekipleri dışarıda bırakır.

## Soru 4

**Doğru cevap:** D

**Kazanım:** Üç türün de bulunduğu seçkileri tümleyenle sayma.

**Çözüm:**

On kitaptan beş kitap seçmenin $\binom{10}{5}=252$ yolu vardır. Matematik kitabı içermeyen $\binom65=6$, fizik kitabı içermeyen $\binom75=21$ ve kimya kitabı içermeyen 21 seçki çıkarılır.

Beş kitap seçildiği için iki dersin birden bulunmadığı seçki oluşturulamaz. Bu nedenle

$$252-6-21-21=204$$

seçki vardır.

**Neden doğru?** Her dersin yokluğu ayrı bir uygunsuz durumdur ve beş kitaplık seçkide bu durumların ikisi aynı anda gerçekleşemez.

**Çeldirici notu:** Yalnız bir dersin bulunmadığı seçkileri çıkarmak diğer ders eksikliklerini hesaba katmaz.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Farklı büyüklükteki gruplarda iki kişinin ayrı bulunmasını tümleyenle sayma.

**Çözüm:**

Bütün gruplandırmaların sayısı

$$\binom92\binom73=36\cdot35=1260$$

dır. A ile B'nin aynı grupta olduğu durumlar:

- İki kişilik gruptalarsa, üç kişilik grup kalan 7 kişiden $\binom73=35$ biçimde seçilir.
- Üç kişilik gruptalarsa üçüncü kişi 7, iki kişilik grup kalan 6 kişiden $\binom62=15$ biçimde seçilir: $7\cdot15=105$.
- Dört kişilik gruptalarsa diğer iki kişi $\binom72=21$, iki kişilik grup kalan 5 kişiden $\binom52=10$ biçimde seçilir: $21\cdot10=210$.

Uygun gruplandırma sayısı

$$1260-(35+105+210)=910$$

olur.

**Neden doğru?** Grup büyüklükleri farklı olduğu için grupların ayrıca adlandırılmasına veya simetri düzeltmesine gerek yoktur.

**Çeldirici notu:** Yalnız A ile B'nin iki kişilik grupta birlikte olmasını çıkarmak diğer iki birliktelik durumunu bırakır.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Eşlenmiş çiftlerden tam sayıda bütün çift içeren seçim yapma.

**Çözüm:**

Tam alınacak iki eşlenmiş çift

$$\binom62=15$$

biçimde seçilir. Böylece dört kart belirlenir. Kalan iki kart, diğer dört eşlenmiş çiftten farklı ikisi seçilip her birinden bir kart alınarak belirlenir:

$$\binom42\cdot2^2=6\cdot4=24$$

Toplam

$$15\cdot24=360$$

seçim vardır.

**Neden doğru?** Son iki kart farklı eşlenmiş çiftlerden alındığı için üçüncü bir bütün çift oluşmaz.

**Çeldirici notu:** Kalan sekiz karttan doğrudan ikisini seçmek üçüncü bir eşlenmiş çiftin tamamlanmasına izin verir.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Aynı doğru üzerindeki üçlüleri bütün nokta üçlülerinden çıkarma.

**Çözüm:**

Toplam 10 noktadan üçü

$$\binom{10}{3}=120$$

biçimde seçilir. Beş noktalı doğru üzerindeki $\binom53=10$ ve dört noktalı doğru üzerindeki $\binom43=4$ üçlü üçgen oluşturmaz:

$$120-10-4=106$$

**Neden doğru?** Sorudaki koşul, belirtilen iki doğru dışında doğrusal üçlü olmadığını garanti eder.

**Çeldirici notu:** Doğruların dışındaki noktayı ayrı bir durum olarak saymak yerine bütün üçlülerden doğrusal olanları çıkarmak daha doğrudan ve eksiksizdir.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Doğrusal bir seçimde tam bir ardışık blok oluşturan dörtlüleri sayma.

**Çözüm:**

Dört seçilmiş sayının tam bir ardışık çifti olması, seçilmiş sayıların üç ayrı blok oluşturması demektir: blok uzunlukları $2,1,1$ olur.

Uzunluğu 4 olan seçim üç pozitif blok uzunluğuna

$$\binom32=3$$

biçimde ayrılır. Sekiz seçilmeyen sayının iki iç blok arasına en az birer tane yerleştirilmesinden sonra kalan 6 sayı, baş ve son boşluklarla birlikte dört boşluğa dağıtılır:

$$\binom{6+4-1}{4-1}=\binom93=84$$

Toplam

$$3\cdot84=252$$

seçim vardır.

**Neden doğru?** Üç bloktan yalnız biri iki elemanlı olduğundan seçilen sayılar arasında tam bir ardışık çift bulunur.

**Çeldirici notu:** Yalnız dört ardışık sayı dizisini çıkarmak iki veya üç ayrı ardışık ilişki içeren bütün seçimleri ayırt etmez.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Özel üçlüden çift sayıda kişi içeren grup seçme.

**Çözüm:**

Özel öğrencilerden hiçbiri seçilmezse grup diğer 9 öğrenciden seçilir; tam ikisi seçilirse özel ikili ve kalan dört kişi ayrı ayrı seçilir:

$$\binom30\binom96+\binom32\binom94$$

$$=84+3\cdot126=462$$

**Neden doğru?** İzin verilen özel öğrenci sayıları 0 ve 2 olup iki durum ayrık olarak bütün uygun grupları kapsar.

**Çeldirici notu:** “Ya hiçbiri ya da tam ikisi” koşulunu “en çok iki” olarak okumak tam bir özel kişi içeren grupları yanlışlıkla ekler.

## Soru 10

**Doğru cevap:** E

**Kazanım:** Birleşimi ana küme ve kesişimi sabit iki alt kümeyi sayma.

**Çözüm:**

Kesişimdeki iki eleman

$$\binom92=36$$

biçimde seçilir. Kalan 7 elemanın her biri birleşimin ana küme olması ve kesişime yeni eleman eklenmemesi için yalnız A'da veya yalnız B'de bulunabilir. Her eleman için 2 seçenek vardır:

$$\binom92\cdot2^7=36\cdot128=4608$$

**Neden doğru?** Kesişim elemanları iki alt kümede birden, diğer elemanlar ise tam bir alt kümede yer alır.

**Çeldirici notu:** Kalan elemanlara iki kümenin dışında kalma seçeneği vermek birleşimin ana kümeye eşit olmasını bozar.
