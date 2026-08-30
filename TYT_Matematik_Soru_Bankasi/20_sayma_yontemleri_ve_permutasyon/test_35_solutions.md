# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 35 — Çözümler

## Soru 1

**Doğru cevap:** E

**Kazanım:** Doğrusal dizilişleri yansıma eşdeğerliği altında sınıflandırma.

**Çözüm:**

Altı farklı süsün doğrusal diziliş sayısı $6!=720$'dir. Bütün süsler farklı olduğundan hiçbir diziliş kendi ters çevrilmiş hâliyle aynı olamaz. Her eşdeğerlik sınıfında bir diziliş ve onun aynadaki görüntüsü olmak üzere iki düzen vardır:

$$\frac{6!}{2}=360$$

**Neden doğru?** Yansıma ikişerli eşleşmeler oluşturur ve sabit kalan bir diziliş bulunmadığı için bölme tamdır.

## Soru 2

**Doğru cevap:** A

**Kazanım:** “Veya” koşulunda iki sıralama olayını içerme-dışlama ile birleştirme.

**Çözüm:**

Ayşe'nin birinci olduğu $6!=720$, Berk'in sonuncu olduğu yine $720$ sıralama vardır. Ayşe birinci ve Berk sonuncu olduğunda kalan beş kişi $5!=120$ biçimde sıralanır. İki kez sayılan kesişim çıkarılır:

$$720+720-120=1320$$

**Neden doğru?** “Veya” iki olayın birleşimidir; iki koşulu birden sağlayan sıralamalar toplamda iki kez yer aldığı için bir kez çıkarılır.

## Soru 3

**Doğru cevap:** B

**Kazanım:** Bir grubun elemanlarını diğer grubun oluşturduğu boşluklara zorunlu biçimde yerleştirme.

**Çözüm:**

Önce üç kadın $3!$ biçimde sıralanır. Dört erkeğin hiçbir ikisi yan yana gelmeyecekse erkekler kadınların çevresindeki dört boşluğun tamamına yerleşmek zorundadır. Erkeklerin sırası $4!$ biçimde seçilir:

$$3!\cdot4!=6\cdot24=144$$

**Neden doğru?** Erkek sayısı boşluk sayısına eşit olduğundan her boşluğa tam bir erkek gelir ve diziliş zorunlu olarak dönüşümlü olur.

## Soru 4

**Doğru cevap:** C

**Kazanım:** Belirli rakamların zorunlu ve yasak olduğu sayılarda ilk basamak kısıtını kullanma.

**Çözüm:**

Altı basamakta kullanılacak rakamlar zorunlu olarak $\{0,2,3,4,5,6\}$ kümesidir. Bu altı rakamın $6!=720$ dizilişi vardır. Başında sıfır bulunan $5!=120$ diziliş sayı oluşturmaz:

$$720-120=600$$

**Neden doğru?** Altı farklı rakam için verilen bulunma ve bulunmama koşulları kullanılacak rakam kümesini tek olarak belirler.

## Soru 5

**Doğru cevap:** D

**Kazanım:** Alt sınırlı grup seçimini olası kadın–erkek dağılımlarına ayırma.

**Çözüm:**

Kuruldaki kadın–erkek sayıları $(2,2)$, $(3,1)$ veya $(4,0)$ olabilir:

$$\binom62\binom42+\binom63\binom41+\binom64$$

$$=15\cdot6+20\cdot4+15=90+80+15=185$$

**Neden doğru?** Üç durum birbirini dışlar ve en az iki kadın bulunan dört kişilik bütün kurulları kapsar.

## Soru 6

**Doğru cevap:** E

**Kazanım:** Dairesel dizilişte belirli kişilerin göreli saat yönü sırasını sabitleme.

**Çözüm:**

Yedi kişinin dairesel diziliş sayısı $(7-1)!=720$'dir. Ayşe, Berk ve Ceren'in çember üzerindeki göreli sıraları iki farklı yönde olabilir: Ayşe–Berk–Ceren veya Ayşe–Ceren–Berk. Bunlardan yalnız ilki istenmektedir:

$$\frac{720}{2}=360$$

**Neden doğru?** Üç kişinin yerleşimleri, saat yönündeki iki olası çevrimsel sıraya simetriyle eşit sayıda dağılır.

## Soru 7

**Doğru cevap:** A

**Kazanım:** En az bir özel kişi içeren kurul seçimlerini tamamlayıcı durumla sayma.

**Çözüm:**

On iki öğrenciden dört kişilik kurul sayısı

$$\binom{12}{4}=495$$

tir. Üç özel öğrencinin hiçbirinin bulunmadığı kurul, diğer dokuz öğrenciden

$$\binom94=126$$

biçimde seçilir. İstenen sayı

$$495-126=369$$

olur.

**Neden doğru?** “En az biri” koşulunun tamamlayıcısı, üç özel öğrencinin de dışarıda kaldığı tek durumdur.

## Soru 8

**Doğru cevap:** B

**Kazanım:** Tekrarlı harf dizilişinde belirli harfleri boşluk yöntemiyle ayırma.

**Çözüm:**

Önce dört A ve üç B kartı

$$\frac{7!}{4!3!}=35$$

biçimde sıralanır. Bu yedi kartın çevresinde ve aralarında sekiz boşluk oluşur. İki özdeş C kartı yan yana gelmemeleri için bu boşluklardan ikisine

$$\binom82=28$$

biçimde yerleştirilir:

$$35\cdot28=980$$

**Neden doğru?** Her boşluğa en fazla bir C yerleştirilmesi iki C'nin komşuluğunu engeller.

## Soru 9

**Doğru cevap:** C

**Kazanım:** Özdeş nesne dağıtımında üst sınırı içerme-dışlama ile uygulama.

**Çözüm:**

Üst sınır olmadan $x_1+x_2+x_3=10$ denkleminin negatif olmayan çözüm sayısı

$$\binom{12}{2}=66$$

dır. Belirli bir kutuda en az altı top bulunursa altı top ayrıldıktan sonra kalan dört topun dağıtım sayısı $\binom62=15$ olur. Üç kutu için $3\cdot15=45$ yasak dağıtım vardır. İki kutuda birden altışar top bulunması mümkün değildir.

$$66-45=21$$

**Neden doğru?** “Beşten fazla” koşulu en az altı top demektir ve yasak kümeler bu toplamda kesişmez.

## Soru 10

**Doğru cevap:** D

**Kazanım:** Adlandırılmamış iki grupta belirli kişileri farklı gruplara yerleştirme.

**Çözüm:**

Ayşe'nin bulunduğu grup, Ayşe dışında ve Berk hariç kalan altı kişiden üçü seçilerek belirlenir:

$$\binom63=20$$

Geriye Berk ve diğer üç kişi kalır; bunlar ikinci grubu zorunlu olarak oluşturur.

**Neden doğru?** Gruplar adlandırılmamış olsa da Ayşe'nin bulunduğu grup seçimi bölünmeyi tek olarak belirlediğinden ayrıca ikiye bölünmez.
