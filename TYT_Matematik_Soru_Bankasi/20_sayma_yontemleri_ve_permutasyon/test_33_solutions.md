# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 33 — Çözümler

## Soru 1

**Doğru cevap:** C

**Kazanım:** Farklı iki gruptan birinin elemanlarını komşu olmayacak biçimde boşluklara yerleştirme.

**Çözüm:**

Önce beş erkek $5!=120$ biçimde sıralanır. Erkeklerin çevresinde ve aralarında kadınlar için altı boşluk oluşur. Dört farklı kadın bu boşlukların dördüne sıralı olarak

$$P(6,4)=6\cdot5\cdot4\cdot3=360$$

biçimde yerleşir:

$$120\cdot360=43\,200$$

**Neden doğru?** Her boşluğa en fazla bir kadın yerleştirildiği için herhangi iki kadın yan yana gelemez.

## Soru 2

**Doğru cevap:** D

**Kazanım:** Hiçbir elemanın kendi konumunda olmadığı permütasyonları sayma.

**Çözüm:**

Dört elemanlı bir kümenin sabit noktasız permütasyon sayısı içerme-dışlamayla

$$4!-\binom41 3!+\binom42 2!-\binom43 1!+\binom44 0!$$

$$=24-24+12-4+1=9$$

olur.

**Neden doğru?** Her “kendi şemsiyesini alma” olayı sırayla çıkarılıp kesişimler dönüşümlü olarak geri eklenmiştir.

## Soru 3

**Doğru cevap:** E

**Kazanım:** Sabit konum ile iki kişinin göreli sırasını aynı dizilişte kullanma.

**Çözüm:**

Ayşe'nin yeri sabittir. Kalan yedi kişi boş konumlara $7!$ biçimde yerleşebilir. Bu dizilişlerin yarısında Berk Ceren'den sonra gelir:

$$\frac{7!}{2}=2520$$

**Neden doğru?** Berk ile Ceren'in yerlerini değiştirmek, koşulu sağlayan ve sağlamayan dizilişleri bire bir eşler.

## Soru 4

**Doğru cevap:** A

**Kazanım:** Büyüklük ve bölünebilme koşullarını ilk ve son basamağa göre durumlara ayırma.

**Çözüm:**

Binler basamağı $5$ ise son basamak yalnızca $0$ olabilir. Ortadaki iki basamak kalan beş rakamdan

$$P(5,2)=20$$

biçimde seçilir.

Binler basamağı $6$ ise son basamak $0$ veya $5$ olabilir. Her son basamak seçimi için ortadaki iki basamak yine $P(5,2)=20$ biçimdedir. Toplam

$$20+20+20=60$$

sayı vardır.

**Neden doğru?** $5$ ile bölünebilme son basamağı $0$ veya $5$ yaparken $5000$'den büyük olma koşulu binler basamağını $5$ ya da $6$ ile sınırlar.

## Soru 5

**Doğru cevap:** B

**Kazanım:** Bir ekipte bir grubun diğerinden çoğunlukta olduğu seçimleri olası grup büyüklüklerine ayırma.

**Çözüm:**

Beş kişilik ekipte kadınların çoğunlukta olması için kadın–erkek sayıları $(3,2)$, $(4,1)$ veya $(5,0)$ olabilir:

$$\binom73\binom82+\binom74\binom81+\binom75\binom80$$

$$=35\cdot28+35\cdot8+21=980+280+21=1281$$

**Neden doğru?** Üç durum birbirini dışlar ve kadın sayısının erkek sayısından fazla olduğu bütün beş kişilik ekipleri kapsar.

## Soru 6

**Doğru cevap:** C

**Kazanım:** Zorunlu bir elemanın bulunduğu seçimde seçme ve sıralama adımlarını birleştirme.

**Çözüm:**

Birinci soru zaten seçilecektir. Diğer beş sorudan üçü

$$\binom53=10$$

biçimde seçilir. Seçilen dört farklı soru $4!=24$ biçimde sıralanır:

$$10\cdot24=240$$

**Neden doğru?** Zorunlu soru da çözüm sırasındaki dört farklı konumdan herhangi birinde bulunabilir; bu nedenle tüm dört soru birlikte sıralanır.

## Soru 7

**Doğru cevap:** D

**Kazanım:** Dairesel dizilişte eşleri blok kabul ederek iç ve dış sıraları sayma.

**Çözüm:**

Her evli çift bir blok kabul edilirse dört blok masa çevresine

$$(4-1)!=6$$

biçimde yerleşir. Her çift kendi içinde iki farklı sırada oturabilir:

$$6\cdot2^4=6\cdot16=96$$

**Neden doğru?** Blokların dairesel sırası dönme tekrarlarını kaldırır; her blok içindeki iki sıra bağımsızdır.

## Soru 8

**Doğru cevap:** E

**Kazanım:** Birden fazla tekrarlı harfi bulunan sözcükte tekrarlı permütasyonu kullanma.

**Çözüm:**

Yedi harfin içinde $A$ ve $R$ ikişer kez, diğer üç harf birer kez bulunmaktadır. Bu nedenle farklı diziliş sayısı

$$\frac{7!}{2!2!}=\frac{5040}{4}=1260$$

olur.

**Neden doğru?** Aynı iki A'nın ve aynı iki R'nin kendi aralarındaki yer değişimleri yeni bir diziliş oluşturmaz.

## Soru 9

**Doğru cevap:** A

**Kazanım:** Karşıt köşe çiftlerinden en fazla birer köşe seçme.

**Çözüm:**

Sekizgenin köşeleri dört karşıt köşe çiftine ayrılır. Dört köşe seçilecek ve hiçbir karşıt çift birlikte seçilmeyecekse her karşıt çiftten tam bir köşe alınmalıdır. Dört çiftin her birinden seçim için iki seçenek vardır:

$$2^4=16$$

**Neden doğru?** Dört köşe seçme zorunluluğu ve dört karşıt çift bulunması, her çiftten bir temsilci seçimini zorunlu kılar.

## Soru 10

**Doğru cevap:** B

**Kazanım:** Farklı nesneleri etiketli kişilere belirli miktarlarda dağıtma.

**Çözüm:**

Ayşe'nin üç kitabı $\binom73=35$, Berk'in iki kitabı kalan dört kitaptan $\binom42=6$ biçimde seçilir. Son iki kitap Ceren'e kalır:

$$35\cdot6=210$$

**Neden doğru?** Kişiler adlandırılmıştır ve kişi içindeki kitap sırası önemli değildir; bu nedenle kombinasyonlar doğrudan çarpılır.
