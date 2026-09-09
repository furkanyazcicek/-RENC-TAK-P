"""AYT Matematik — Olasılık (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: OLASILIK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Olasılık",
    "alt_baslik": "Ham bilgi notu — koşullu olasılık, bağımsız olaylar, bileşik olaylar "
                  "ve Bayes yaklaşımı; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Olasılık",
        "kazanimlar": "11.4.1.1 — Koşullu olasılığı açıklar ve hesaplar. "
                      "11.4.1.2 — Bağımsız ve bağımlı olayları ayırt eder. "
                      "11.4.2.1 — Bileşik olayların olasılığını hesaplar. "
                      "11.4.2.2 — Ayrık olayları tanır ve toplama kuralını uygular.",
        "kapsam": "Örnek uzay, olay, olasılık aksiyomları, ayrık ve ayrık olmayan "
                  "olaylar, toplama kuralı, koşullu olasılık, çarpma kuralı, bağımsız "
                  "olaylar, iadeli ve iadesiz seçim, en az bir olasılığı, 45 analiz "
                  "sorusu",
        "nasil": "Olasılık sorularında ilk iş **örnek uzayı doğru saymaktır**. "
                 "Sonra tek soru sorulur: **seçim iadeli mi, iadesiz mi?** İadeli ise "
                 "olaylar bağımsızdır, iadesizse koşullu olasılık devreye girer.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de olasılıktan gelen soru genellikle **koşullu olasılık**, "
                    "**iadesiz seçim** ya da **en az bir** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Kavramlar"},
        {"tur": "formul",
         "baslik": "Klasik olasılık tanımı",
         "ifade": "**P(A) = s(A) / s(E)**\n"
                  "**0 ≤ P(A) ≤ 1**\n"
                  "**P(E) = 1**        **P(∅) = 0**\n"
                  "Tümleyen:  **P(A') = 1 − P(A)**",
         "terimler": [
             ("E", "**Örnek uzay** — bütün olası sonuçların kümesi"),
             ("A", "**Olay** — örnek uzayın bir alt kümesi"),
             ("s(A)", "A'nın **eleman sayısı** (istenen durum sayısı)"),
             ("A'", "**Tümleyen olay** — A'nın gerçekleşmemesi"),
         ],
         "not": "**Olasılık asla 1'den büyük, 0'dan küçük olamaz.** Bir soruda 1'den "
                "büyük sonuç bulduysan mutlaka hesap hatası vardır; genellikle örnek "
                "uzay eksik sayılmıştır."},
        {"tur": "tanim", "kavram": "Ayrık (bağdaşmaz) olaylar",
         "aciklama": "**Aynı anda gerçekleşemeyen** olaylardır; **A ∩ B = ∅**'dir. "
                     "Bir zar atışında \"3 gelmesi\" ve \"5 gelmesi\" ayrıktır. "
                     "Ayrık olaylarda **P(A ∩ B) = 0**'dır."},
        {"tur": "formul",
         "baslik": "Toplama kuralı",
         "ifade": "Genel hâl:      **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**\n"
                  "Ayrık olaylarda: **P(A ∪ B) = P(A) + P(B)**",
         "terimler": [
             ("∪ (birleşim)", "\"**A veya B**\" — en az birinin gerçekleşmesi"),
             ("∩ (kesişim)", "\"**A ve B**\" — ikisinin birlikte gerçekleşmesi"),
             ("Çıkarma", "Ortak kısım **iki kez sayıldığı** için bir kez çıkarılır"),
             ("Ayrıkta", "Kesişim boş olduğu için **çıkarılacak bir şey yoktur**"),
         ],
         "not": "**\"Veya\" toplamayı, \"ve\" çarpmayı çağrıştırır.** Soruda \"ya da\", "
                "\"en az biri\" geçiyorsa birleşim; \"her ikisi de\", \"hem hem\" "
                "geçiyorsa kesişim düşünülür."},
        {"tur": "gorsel", "baslik": "Şema 1 — Ayrık olan ve olmayan olaylar",
         "aciklama": "Ayrım tek soruyla yapılır: **iki olay aynı anda gerçekleşebilir "
                     "mi?** Gerçekleşemiyorsa ayrıktır ve toplama kuralı sadeleşir.",
         "ciz": S.karsilastirma(
             "AYRIK olaylar",
             ["**A ∩ B = ∅**",
              "**P(A ∩ B) = 0**",
              "Aynı anda **gerçekleşemez**",
              "**P(A ∪ B) = P(A) + P(B)**",
              "Örnek: bir zarda 3 ve 5 gelmesi"],
             "AYRIK OLMAYAN olaylar",
             ["**A ∩ B ≠ ∅**",
              "**P(A ∩ B) > 0**",
              "Aynı anda **gerçekleşebilir**",
              "**P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**",
              "Örnek: bir zarda çift gelmesi ve 4'ten büyük gelmesi"],
             "Ayırt etme",
             ["**Aynı anda olabilir mi** diye sor",
              "Olamıyorsa **ayrıktır**",
              "**Ayrık ≠ bağımsız** — ikisi farklı kavramdır"])},
        {"tur": "tuzak", "baslik": "Ayrık Olmak ile Bağımsız Olmak Aynı Şey Değildir",
         "govde": "**Ayrık olaylar**, aynı anda **gerçekleşemeyen** olaylardır. "
                  "**Bağımsız olaylar** ise birinin gerçekleşmesi diğerinin olasılığını "
                  "**değiştirmeyen** olaylardır. Aslında **ayrık olaylar bağımsız "
                  "değildir**: A gerçekleştiyse B'nin olasılığı sıfır olur, yani birinci "
                  "olay ikinciyi doğrudan etkiler. Bu iki kavramı karıştırmak, konudaki "
                  "en derin hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Koşullu Olasılık"},
        {"tur": "formul",
         "baslik": "Koşullu olasılık ve çarpma kuralı",
         "ifade": "**P(A | B) = P(A ∩ B) / P(B)**       (P(B) ≠ 0)\n"
                  "Çarpma kuralı:  **P(A ∩ B) = P(B) · P(A | B)**\n"
                  "Bağımsızsa:     **P(A ∩ B) = P(A) · P(B)**",
         "terimler": [
             ("P(A | B)", "**B gerçekleştiği bilindiğinde** A'nın olasılığı"),
             ("Anlamı", "**Örnek uzay B'ye daralır**; artık sadece B içinde bakılır"),
             ("Bağımsızlık ölçütü", "**P(A | B) = P(A)** ise olaylar bağımsızdır"),
             ("Sıralı olaylar", "Çarpma kuralı **ardışık seçimlerde** kullanılır"),
         ],
         "not": "**Koşullu olasılıkta örnek uzay küçülür.** \"B olduğuna göre\" ifadesi, "
                "artık bütün örnek uzaya değil **yalnızca B'ye** bakacağını söyler. "
                "Bu yüzden payda P(B) olur."},
        {"tur": "cozum",
         "baslik": "Koşullu Olasılık",
         "soru": "Bir zar atılıyor. **Gelen sayının çift olduğu bilindiğine göre**, "
                 "bu sayının **4'ten büyük** olma olasılığı kaçtır?",
         "adimlar": [
             "**Örnek uzay daralır**: çift sayılar = {2, 4, 6} → **3 eleman**.",
             "**İstenen durum**: bu üçünden 4'ten büyük olanlar = {6} → **1 eleman**.",
             "**P = 1/3**.",
             "**Formülle kontrol**: P(A ∩ B) = P(6) = 1/6; P(B) = 3/6 = 1/2.",
             "P(A|B) = (1/6)/(1/2) = **1/3** — aynı sonuç.",
         ],
         "sonuc": "Olasılık **1/3**'tür. Koşulsuz olsaydı (4'ten büyük gelme olasılığı) "
                  "cevap 2/6 = 1/3 olurdu; burada tesadüfen aynı çıktı ama örnek uzay "
                  "**farklıdır**."},
        {"tur": "gorsel", "baslik": "Şema 2 — İadeli ve iadesiz seçim",
         "aciklama": "Bu ayrım, olasılık sorularının **en belirleyici noktasıdır**. "
                     "Soruda \"geri atılıyor\" ya da \"geri atılmadan\" ifadesini "
                     "mutlaka ara; yoksa **art arda çekiliyor** ifadesi genellikle "
                     "iadesiz demektir.",
         "ciz": S.karsilastirma(
             "İADELİ seçim",
             ["Çekilen **geri konur**",
              "Toplam sayı **değişmez**",
              "Olaylar **bağımsızdır**",
              "**P(A ∩ B) = P(A) · P(B)**",
              "Her çekilişte olasılık **aynıdır**"],
             "İADESİZ seçim",
             ["Çekilen **geri konmaz**",
              "Toplam sayı **azalır**",
              "Olaylar **bağımlıdır**",
              "**P(A ∩ B) = P(A) · P(B|A)**",
              "İkinci çekilişte olasılık **değişir**"],
             "Nasıl anlarız?",
             ["\"**geri atılıyor**\" → iadeli",
              "\"**geri atılmadan**\" → iadesiz",
              "\"**aynı anda**\" çekiliyorsa → **iadesiz** gibi hesaplanır"])},
        {"tur": "cozum",
         "baslik": "İadesiz Seçim",
         "soru": "Bir torbada **5 kırmızı** ve **3 mavi** bilye vardır. **Geri atmadan** "
                 "art arda iki bilye çekiliyor. **İkisinin de kırmızı** olma olasılığı "
                 "kaçtır?",
         "adimlar": [
             "**Birinci çekiliş**: 8 bilyeden 5'i kırmızı → **P = 5/8**.",
             "**İkinci çekiliş**: birinci kırmızı çıktığı için geriye **7 bilye** kaldı "
             "ve **4'ü kırmızı** → **P = 4/7**.",
             "**Çarpma kuralı**: P = (5/8) · (4/7).",
             "P = 20/56 = **5/14**.",
         ],
         "sonuc": "Olasılık **5/14**'tür. İadeli olsaydı (5/8)·(5/8) = **25/64** olurdu; "
                  "iki sonuç **farklıdır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Bağımsız Olaylar"},
        {"tur": "tanim", "kavram": "Bağımsız olaylar",
         "aciklama": "Birinin gerçekleşmesi, diğerinin olasılığını **değiştirmeyen** "
                     "olaylardır. Ölçütü: **P(A | B) = P(A)** ya da eşdeğer olarak "
                     "**P(A ∩ B) = P(A) · P(B)**'dir. Para atma, zar atma, iadeli "
                     "seçim gibi durumlar bağımsızdır."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Ardışık para ve zar atışları bağımsızdır**: önceki sonuç, sonrakini "
            "etkilemez.",
            "**Kumarbaz yanılgısı**: \"beş kez yazı geldi, artık tura gelmeli\" demek "
            "**yanlıştır**. Paranın hafızası yoktur; olasılık hep **1/2**'dir.",
            "**Bağımsızlık kontrolü**: P(A ∩ B) hesaplanır ve P(A)·P(B) ile "
            "karşılaştırılır. Eşitse bağımsız, değilse bağımlıdır.",
            "**İkiden çok bağımsız olayda** olasılıklar **çarpılarak** birleştirilir: "
            "P(A ∩ B ∩ C) = P(A)·P(B)·P(C).",
        ]},
        {"tur": "taktik", "baslik": "\"En Az Bir\" Sorularının Kısayolu", "govde":
            "\"**En az bir tanesinin** gerçekleşme olasılığı\" sorulduğunda doğrudan "
            "hesaplamak uzun sürer (bir tane, iki tane, üç tane... hepsi toplanır). "
            "Bunun yerine **tümleyeni** kullan: **P(en az bir) = 1 − P(hiçbiri)**. "
            "Bu kısayol, bu tip soruların tamamını tek satıra indirir."},
        {"tur": "cozum",
         "baslik": "En Az Bir Olasılığı",
         "soru": "Bir madenî para **4 kez** atılıyor. **En az bir tura** gelme olasılığı "
                 "kaçtır?",
         "adimlar": [
             "**Doğrudan hesap uzun**: 1 tura, 2 tura, 3 tura, 4 tura durumları ayrı "
             "ayrı hesaplanmalı.",
             "**Tümleyeni kullan**: \"en az bir tura\"nın tersi **\"hiç tura yok\"**, "
             "yani hepsi yazı.",
             "**Hepsi yazı**: (1/2)^4 = **1/16**.",
             "**P(en az bir tura)** = 1 − 1/16 = **15/16**.",
         ],
         "sonuc": "Olasılık **15/16**'dır. Tümleyen kullanmak, dört ayrı durumu "
                  "hesaplamaktan **çok daha hızlıdır**."},
        {"tur": "dikkat", "baslik": "Sık Kullanılan Olasılık Kısayolları", "ogeler": [
            "**En az bir** = **1 − hiçbiri**.",
            "**En çok bir** = **hiçbiri + tam bir tane**.",
            "**Hiç değilse iki** = **1 − (hiçbiri + tam bir tane)**.",
            "Bir soruda \"en az\" ya da \"en çok\" görürsen, önce **tümleyeninin daha "
            "kısa olup olmadığına** bak.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Bileşik Olaylar"},
        {"tur": "gorsel", "baslik": "Şema 3 — Olasılık sorusu çözme sırası",
         "aciklama": "Bu beş adım, olasılık sorularının neredeyse tamamını kapsar. "
                     "Özellikle **ikinci ve üçüncü adımı** atlamamak, hataların çoğunu "
                     "önler.",
         "ciz": S.akis(
             ["Örnek uzayı say", "İadeli mi iadesiz mi?", "Ve mi veya mı?",
              "Kuralı uygula", "Tümleyen kısayolu?"],
             ["toplam **kaç** olası\ndurum var", "**bağımsız mı**\nbağımlı mı",
              "**ve → çarp**\n**veya → topla**", "çarpma ya da\ntoplama kuralı",
              "\"en az bir\" varsa\n**1 − hiçbiri**"])},
        {"tur": "cozum",
         "baslik": "Bileşik Olay",
         "soru": "Bir sınıfta **12 kız** ve **8 erkek** öğrenci vardır. Rastgele "
                 "**3 öğrenci** seçiliyor. **En az bir erkek** seçilme olasılığı "
                 "kaçtır?",
         "adimlar": [
             "**Toplam seçim sayısı**: 20 öğrenciden 3 seçme = **C(20, 3) = 1140**.",
             "**Tümleyeni kullan**: \"en az bir erkek\"in tersi **\"hiç erkek yok\"**, "
             "yani **üçü de kız**.",
             "**Üçü de kız**: C(12, 3) = **220**.",
             "**P(hiç erkek yok)** = 220 / 1140 = **11/57**.",
             "**P(en az bir erkek)** = 1 − 11/57 = **46/57**.",
         ],
         "sonuc": "Olasılık **46/57**'dir. Doğrudan hesaplamak için 1 erkek, 2 erkek ve "
                  "3 erkek durumlarını ayrı ayrı bulup toplamak gerekirdi."},
        {"tur": "maddeler", "ogeler": [
            "**Kombinasyon** kullanılır: seçim **sırasız** ise (\"3 öğrenci seçiliyor\").",
            "**Permütasyon** kullanılır: seçim **sıralı** ise (\"başkan, sekreter, sayman "
            "seçiliyor\").",
            "Olasılıkta **pay ve payda aynı yöntemle** sayılmalıdır; biri kombinasyon, "
            "diğeri permütasyonla sayılırsa sonuç yanlış çıkar.",
            "**Ardışık çekilişlerde** çarpma kuralı, **tek seferde seçimde** kombinasyon "
            "kullanmak genellikle daha pratiktir; ikisi de aynı sonucu verir.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**P(A) = istenen / toplam**; **0 ≤ P(A) ≤ 1**.",
            "**P(A') = 1 − P(A)** — tümleyen.",
            "**P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**; ayrıkta kesişim **sıfırdır**.",
            "**Ayrık ≠ bağımsız** — ayrık olaylar aslında **bağımlıdır**.",
            "**P(A|B) = P(A ∩ B) / P(B)** — örnek uzay **B'ye daralır**.",
            "**Bağımsızsa P(A ∩ B) = P(A)·P(B)**.",
            "**İadeli → bağımsız**, **iadesiz → bağımlı**.",
            "**\"Ve\" çarp, \"veya\" topla.**",
            "**En az bir = 1 − hiçbiri** — en çok zaman kazandıran kısayol.",
            "**Kumarbaz yanılgısı**: paranın hafızası yoktur.",
            "**Pay ve paydayı aynı yöntemle** (ikisi de kombinasyon ya da ikisi de "
            "permütasyon) say.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruya **örnek uzayı sayarak** başla. Sonra iki soru sor: "
            "**iadeli mi iadesiz mi** ve **ve mi veya mı**. \"En az bir\" ifadesini "
            "gördüğün anda **tümleyene** geç; çözüm tek satıra iner.",
        "satir_sayisi": 2,
        "sorular": [
            "Örnek uzay ve olay kavramlarını tanımlayınız.",
            "Klasik olasılık tanımını yazınız.",
            "Olasılığın alabileceği değer aralığını yazınız.",
            "Kesin olayın ve imkânsız olayın olasılıklarını yazınız.",
            "Tümleyen olayın olasılık formülünü yazınız.",
            "Bir zar atıldığında 4'ten büyük gelme olasılığını bulunuz.",
            "İki zar atıldığında toplamın 7 olma olasılığını bulunuz.",
            "Ayrık olayları tanımlayarak bir örnek veriniz.",
            "Ayrık olaylarda kesişim olasılığını yazınız.",
            "Toplama kuralının genel biçimini yazınız.",
            "Toplama kuralında neden kesişimin çıkarıldığını açıklayınız.",
            "Ayrık olaylarda toplama kuralının nasıl sadeleştiğini yazınız.",
            "Bir zarda çift gelme ve 4'ten büyük gelme olaylarının ayrık olup olmadığını inceleyiniz.",
            "Ayrık olmak ile bağımsız olmak arasındaki farkı açıklayınız.",
            "Ayrık olayların neden bağımsız olmadığını açıklayınız.",
            "Koşullu olasılık formülünü yazınız.",
            "Koşullu olasılıkta örnek uzaya ne olduğunu açıklayınız.",
            "Bir zarda çift geldiği bilindiğine göre 4'ten büyük olma olasılığını bulunuz.",
            "Aynı soruyu formülle çözerek sonucu doğrulayınız.",
            "Çarpma kuralını yazınız.",
            "Bağımsız olayları tanımlayınız.",
            "Bağımsızlığın iki ölçütünü yazınız.",
            "Bağımsız olaylarda çarpma kuralının nasıl sadeleştiğini yazınız.",
            "İadeli ve iadesiz seçimi karşılaştırınız.",
            "Bir soruda iadeli mi iadesiz mi olduğunu nasıl anlarsınız?",
            "'Aynı anda iki bilye çekiliyor' ifadesi hangi seçim türüne karşılık gelir?",
            "5 kırmızı 3 mavi bilyeden iadesiz iki çekilişte ikisinin de kırmızı olma olasılığını bulunuz.",
            "Aynı soruyu iadeli seçim için çözünüz.",
            "İki sonucun farklı çıkmasının nedenini açıklayınız.",
            "Ardışık zar atışlarının bağımsız olmasının anlamını açıklayınız.",
            "Kumarbaz yanılgısını açıklayınız.",
            "Bir paranın beş kez yazı gelmesinden sonra tura gelme olasılığını yazınız.",
            "Üç bağımsız olayın birlikte gerçekleşme olasılığını yazınız.",
            "'En az bir' sorularında kullanılan kısayolu yazınız.",
            "Bir para 4 kez atılıyorsa en az bir tura gelme olasılığını bulunuz.",
            "Aynı soruyu doğrudan hesaplamanın neden uzun olduğunu açıklayınız.",
            "'En çok bir' ifadesinin hangi durumları kapsadığını yazınız.",
            "12 kız 8 erkek olan sınıftan 3 öğrenci seçme sayısını bulunuz.",
            "Aynı sınıftan seçilen 3 öğrencinin üçünün de kız olma olasılığını bulunuz.",
            "Aynı sınıfta en az bir erkek seçilme olasılığını bulunuz.",
            "Bu soruda tümleyen kullanmanın avantajını açıklayınız.",
            "Kombinasyon ve permütasyonun olasılıkta ne zaman kullanıldığını yazınız.",
            "Pay ve paydanın aynı yöntemle sayılmasının önemini açıklayınız.",
            "Bir torbadan çekilen bilyenin kırmızı olduğu bilindiğine göre ikinci çekilişin olasılığını nasıl hesaplarsınız?",
            "Olasılık sorusu çözerken izlenecek beş adımı sırayla yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Örnek uzay (E)**: bir deneyin bütün olası sonuçlarının kümesidir. **Olay (A)**: örnek uzayın bir **alt kümesidir**.",
            "**P(A) = s(A) / s(E)** — istenen durum sayısının toplam durum sayısına oranı.",
            "**0 ≤ P(A) ≤ 1**.",
            "**P(E) = 1** (kesin olay), **P(∅) = 0** (imkânsız olay).",
            "**P(A') = 1 − P(A)**.",
            "{5, 6} → **2/6 = 1/3**.",
            "Toplam 36 durum; toplamı 7 yapanlar 6 tane → **6/36 = 1/6**.",
            "**Aynı anda gerçekleşemeyen** olaylardır (A ∩ B = ∅). Örnek: bir zar atışında **3 gelmesi ve 5 gelmesi**.",
            "**P(A ∩ B) = 0**.",
            "**P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**.",
            "Ortak kısım (kesişim) **hem A'da hem B'de** sayıldığı için **iki kez** hesaba katılır; bir kez çıkarılarak düzeltilir.",
            "Kesişim boş olduğu için çıkarılacak bir şey kalmaz: **P(A ∪ B) = P(A) + P(B)**.",
            "**Ayrık değildirler**. Çift ve 4'ten büyük olan **6** sayısı her iki olayda da bulunur; kesişim boş değildir.",
            "**Ayrık**: aynı anda **gerçekleşemez**. **Bağımsız**: birinin gerçekleşmesi diğerinin olasılığını **değiştirmez**. Bunlar farklı kavramlardır.",
            "A gerçekleştiyse B'nin olasılığı **sıfır olur** (aynı anda olamazlar). Yani birinci olay ikinciyi **doğrudan etkiler**; bu tanım gereği bağımlılıktır.",
            "**P(A | B) = P(A ∩ B) / P(B)**, P(B) ≠ 0.",
            "**Örnek uzay B'ye daralır**. Artık bütün olasılıklara değil, yalnızca B'nin gerçekleştiği durumlara bakılır; bu yüzden payda P(B) olur.",
            "Çift sayılar {2, 4, 6} → 3 eleman. Bunlardan 4'ten büyük olan {6} → 1 eleman. **P = 1/3**.",
            "P(A ∩ B) = 1/6, P(B) = 1/2 → P(A|B) = (1/6)/(1/2) = **1/3**.",
            "**P(A ∩ B) = P(B) · P(A | B)**.",
            "Birinin gerçekleşmesi, diğerinin olasılığını **değiştirmeyen** olaylardır.",
            "**P(A | B) = P(A)** ya da eşdeğer olarak **P(A ∩ B) = P(A) · P(B)**.",
            "**P(A ∩ B) = P(A) · P(B)** — koşullu olasılığa gerek kalmaz.",
            "**İadeli**: çekilen geri konur, toplam değişmez, olaylar **bağımsızdır**. **İadesiz**: çekilen geri konmaz, toplam azalır, olaylar **bağımlıdır**.",
            "Soruda \"**geri atılıyor**\" ifadesi varsa iadeli, \"**geri atılmadan**\" ya da \"**art arda**\" ifadesi varsa genellikle iadesizdir.",
            "**İadesiz** seçim gibi hesaplanır; aynı anda çekilen iki bilye, art arda geri atmadan çekilenle aynıdır.",
            "(5/8) · (4/7) = 20/56 = **5/14**.",
            "(5/8) · (5/8) = **25/64**.",
            "İadesizde ikinci çekilişte hem **toplam sayı** hem **kırmızı sayısı** azalır; olasılık değişir. İadelide ise koşullar **aynı kalır**.",
            "Önceki atışın sonucu, sonraki atışın olasılığını **hiç etkilemez**. Her atışta olasılıklar başlangıçtaki gibidir.",
            "Bağımsız olaylarda geçmiş sonuçlara bakarak gelecekteki sonucun \"dengeleneceğini\" sanmaktır. Örneğin \"beş kez yazı geldi, artık tura gelmeli\" demek **yanlıştır**.",
            "**1/2**'dir. Paranın **hafızası yoktur**; önceki sonuçlar bir sonrakini etkilemez.",
            "**P(A ∩ B ∩ C) = P(A) · P(B) · P(C)**.",
            "**P(en az bir) = 1 − P(hiçbiri)**.",
            "P(hiç tura yok) = (1/2)^4 = 1/16. P(en az bir tura) = 1 − 1/16 = **15/16**.",
            "1 tura, 2 tura, 3 tura ve 4 tura durumlarının **ayrı ayrı** hesaplanıp toplanması gerekirdi; tümleyen tek işlemle sonuca ulaştırır.",
            "**Hiçbiri** ve **tam bir tane** durumlarını kapsar; ikisinin olasılıkları toplanır.",
            "**C(20, 3) = 1140**.",
            "C(12, 3) / C(20, 3) = 220 / 1140 = **11/57**.",
            "1 − 11/57 = **46/57**.",
            "Doğrudan hesap için **1 erkek, 2 erkek ve 3 erkek** durumları ayrı ayrı bulunup toplanmalıydı. Tümleyende yalnızca **tek bir durum** (üçü de kız) hesaplanır.",
            "**Kombinasyon**: seçim **sırasızsa** (\"3 öğrenci seçiliyor\"). **Permütasyon**: seçim **sıralıysa** (\"başkan, sekreter seçiliyor\").",
            "Pay ve payda **farklı yöntemlerle** sayılırsa oran anlamsız olur. İkisi de kombinasyon ya da ikisi de permütasyon olmalıdır.",
            "**Koşullu olasılık** kullanılır: ilk çekilişten sonra torbadaki **toplam sayı bir azalır** ve çekilen rengin sayısı da bir azalır. Yeni oran bu güncellenmiş sayılarla yazılır.",
            "**1)** Örnek uzayı say. **2)** İadeli mi iadesiz mi belirle. **3)** \"Ve\" mi \"veya\" mı sorusunu yanıtla. **4)** Uygun kuralı (çarpma/toplama) uygula. **5)** \"En az bir\" varsa tümleyen kısayolunu kullan.",
        ],
    },
}
