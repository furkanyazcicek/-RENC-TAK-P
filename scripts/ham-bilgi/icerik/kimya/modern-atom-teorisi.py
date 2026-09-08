"""AYT Kimya — Modern Atom Teorisi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: MODERN ATOM TEORİSİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Modern Atom Teorisi",
    "alt_baslik": "Ham bilgi notu — kuantum sayıları, orbital dizilimi, periyodik "
                  "özellikler ve yükseltgenme basamakları; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Modern Atom Teorisi",
        "kazanimlar": "11.1.1.1 — Atomun kuantum modelini açıklar. "
                      "11.1.1.2 — Kuantum sayılarını ve orbitalleri ilişkilendirir. "
                      "11.1.2.1 — Periyodik sistemi elektron dizilimiyle ilişkilendirir. "
                      "11.1.2.2 — Periyodik özelliklerin değişimini yorumlar.",
        "kapsam": "Bohr'dan kuantum modeline geçiş, dört kuantum sayısı, orbital "
                  "türleri, Aufbau–Pauli–Hund kuralları, küresel simetri, periyodik "
                  "sistemde yer bulma, atom ve iyon yarıçapı, iyonlaşma enerjisi, "
                  "elektron ilgisi, elektronegatiflik, yükseltgenme basamakları, "
                  "50 analiz sorusu",
        "nasil": "Bu konunun tamamı **elektron diziliminden** çıkar. Önce dizilimi "
                 "doğru yaz, sonra her soruyu ona sor: periyot, grup, blok, iyon "
                 "yarıçapı, iyonlaşma enerjisi — hepsi dizilimin içindedir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **elektron dizilimi**, "
                    "**periyodik özellik sıralaması** ya da **iyonlaşma enerjisindeki "
                    "düzensizlik** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Kuantum Modeline Geçiş"},
        {"tur": "gorsel", "baslik": "Şema 1 — Bohr modelinden kuantum modeline",
         "aciklama": "Bohr modeli **yalnızca hidrojen** için işe yaradı. Çok "
                     "elektronlu atomların spektrumunu açıklayamadığı için yerini "
                     "kuantum modeline bıraktı.",
         "ciz": S.karsilastirma(
             "Bohr atom modeli",
             ["Elektron **belirli yörüngelerde** döner",
              "Yörüngenin **yarıçapı hesaplanabilir**",
              "Elektronun yeri ve hızı **aynı anda bilinir**",
              "Yalnızca **hidrojen** için doğru sonuç verir",
              "Elektron **parçacık** kabul edilir"],
             "Modern (kuantum) model",
             ["Elektron **orbitallerde** bulunur",
              "Orbital, elektronun **bulunma olasılığının** yüksek olduğu bölgedir",
              "**Heisenberg belirsizlik ilkesi**: yer ve hız aynı anda tam bilinemez",
              "**Bütün atomlar** için geçerlidir",
              "Elektron hem **dalga** hem **parçacık** (de Broglie)"],
             "Ortak",
             ["İkisinde de enerji **kesiklidir (kuantumlu)**",
              "İkisinde de elektron enerji alıp **uyarılabilir**",
              "İkisi de **spektrum** verilerine dayanır"])},
        {"tur": "tanim", "kavram": "Orbital",
         "aciklama": "Çekirdek çevresinde elektronun **bulunma olasılığının en yüksek "
                     "olduğu bölgedir**. Bir orbitalde **en çok 2 elektron** bulunur ve "
                     "bu elektronların **spinleri zıttır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kuantum Sayıları"},
        {"tur": "tablo",
         "basliklar": ["Kuantum sayısı", "Simge", "Ne belirtir", "Alabildiği değerler"],
         "satirlar": [
             ["**Baş (asal)**", "**n**", "**Enerji düzeyi** (katman); çekirdeğe uzaklık",
              "1, 2, 3, ... (pozitif tam sayı)"],
             ["**Açısal momentum**", "**l**", "**Alt düzey** ve orbitalin **şekli**",
              "0 → s, 1 → p, 2 → d, 3 → f  (0'dan n−1'e)"],
             ["**Manyetik**", "**m_l**", "Orbitalin **uzaydaki yönelimi**",
              "−l'den +l'ye; toplam **2l + 1** değer"],
             ["**Spin**", "**m_s**", "Elektronun **kendi ekseni** çevresinde dönme yönü",
              "**+1/2** ya da **−1/2**"],
         ],
         "oranlar": [0.22, 0.10, 0.32, 0.36]},
        {"tur": "formul",
         "baslik": "Orbital ve elektron sayıları",
         "ifade": "Bir alt düzeydeki orbital sayısı = **2l + 1**\n"
                  "Bir alt düzeydeki en çok elektron = **2(2l + 1)**\n"
                  "n. katmandaki orbital sayısı = **n^2**\n"
                  "n. katmandaki en çok elektron = **2n^2**",
         "terimler": [
             ("s alt düzeyi", "**1** orbital, en çok **2** elektron — küresel"),
             ("p alt düzeyi", "**3** orbital, en çok **6** elektron — çift lobsu"),
             ("d alt düzeyi", "**5** orbital, en çok **10** elektron"),
             ("f alt düzeyi", "**7** orbital, en çok **14** elektron"),
         ],
         "not": "**Dört kuantum sayısı aynı olan iki elektron bulunamaz** (Pauli "
                "dışlama ilkesi). Bir orbitaldeki iki elektronun ilk üç sayısı aynıdır, "
                "**spinleri farklıdır**."},
        {"tur": "tuzak", "baslik": "n Katman, l Alt Düzeydir", "govde":
            "**n = 3** için l değerleri **0, 1, 2** olabilir; yani 3s, 3p ve 3d vardır. "
            "**3f yoktur**, çünkü l en çok n−1 olabilir. Aynı mantıkla **1p, 2d, 3f "
            "orbitalleri yoktur**. Sorularda \"aşağıdaki orbitallerden hangisi olamaz\" "
            "diye tam olarak bu sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Elektron Dizilimi"},
        {"tur": "gorsel", "baslik": "Şema 2 — Dizilimin üç kuralı",
         "aciklama": "Üçü birlikte uygulanır: **Aufbau sırayı**, **Pauli sınırı**, "
                     "**Hund yerleşimi** belirler.",
         "ciz": S.dikey_akis(
             ["Aufbau (yapım) ilkesi", "Pauli dışlama ilkesi", "Hund kuralı"],
             ["Elektronlar **en düşük enerjili** orbitalden başlayarak yerleşir. "
              "Sıra: 1s 2s 2p 3s 3p **4s 3d** 4p 5s 4d 5p 6s **4f** 5d 6p 7s 5f 6d.",
              "Bir orbitalde **en çok 2 elektron** bulunur ve **spinleri zıt** olur. "
              "Dört kuantum sayısı aynı olan iki elektron yoktur.",
              "Aynı enerjili (eş enerjili) orbitallere elektronlar **önce birer birer** "
              "ve **aynı spinle** yerleşir; hepsi dolduktan sonra eşleşme başlar."])},
        {"tur": "cozum",
         "baslik": "Elektron Dizilimi ve Periyodik Yer",
         "soru": "**_26Fe** atomunun elektron dizilimini yazınız; periyodunu, grubunu "
                 "ve bloğunu belirleyiniz. Fe^2+ iyonunun dizilimini de yazınız.",
         "adimlar": [
             "Aufbau sırasıyla: **1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6**.",
             "**Periyot** = en büyük n değeri = **4**.",
             "Son elektron **d orbitalinde** bittiği için **d bloğu**, yani **geçiş "
             "metali**.",
             "B grubu numarası = **4s + 3d** elektronları = 2 + 6 = **8** → **8B grubu**.",
             "İyon oluşurken elektron **en dıştaki katmandan (4s)** kopar: "
             "**Fe^2+ → 1s^2 2s^2 2p^6 3s^2 3p^6 3d^6**.",
         ],
         "sonuc": "Fe: 4. periyot, 8B grubu, d bloğu. Fe^2+ dizilimi ...3p^6 3d^6'dır."},
        {"tur": "tuzak", "baslik": "Elektron 4s'ten Kopar, 3d'den Değil", "govde":
            "Dizilim yazılırken **4s önce doldurulur** ama iyon oluşurken **elektron "
            "önce 4s'ten kopar**. Nedeni, dolduktan sonra 4s orbitalinin 3d'den **daha "
            "yüksek enerjili** hâle gelmesidir. Bu, geçiş metali iyonu sorularının "
            "tamamında sınanan tek noktadır."},
        {"tur": "dikkat", "baslik": "Küresel Simetri (Cr ve Cu İstisnası)", "ogeler": [
            "**Yarı dolu** (d^5) ve **tam dolu** (d^10) d alt düzeyi daha **kararlıdır**.",
            "**_24Cr**: beklenen ...4s^2 3d^4 yerine **...4s^1 3d^5** olur.",
            "**_29Cu**: beklenen ...4s^2 3d^9 yerine **...4s^1 3d^10** olur.",
            "Aynı kararlılık **p^3 ve p^6** için de geçerlidir; azotun (p^3) iyonlaşma "
            "enerjisinin oksijenden yüksek olmasının nedeni budur.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Periyodik Sistem"},
        {"tur": "tablo",
         "basliklar": ["Blok", "Son elektron", "Grup", "Örnek"],
         "satirlar": [
             ["**s bloğu**", "s orbitalinde biter", "**1A ve 2A**",
              "Na (1A), Mg (2A) — ayrıca He"],
             ["**p bloğu**", "p orbitalinde biter", "**3A – 8A**",
              "Al (3A), Cl (7A), Ar (8A)"],
             ["**d bloğu**", "d orbitalinde biter", "**B grupları** (geçiş metalleri)",
              "Fe, Cu, Zn"],
             ["**f bloğu**", "f orbitalinde biter", "**Lantanit ve aktinitler**",
              "Ce, U"],
         ],
         "oranlar": [0.18, 0.28, 0.28, 0.26]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Periyot numarası = en büyük n değeri** (katman sayısı).",
            "**A grubu numarası = son katmandaki (değerlik) elektron sayısı**.",
            "**B grubu numarası = (n−1)d + ns elektronlarının toplamı**; 8, 9 ve 10 "
            "olanlar **8B grubudur**.",
            "**Soy gazlar (8A)** kararlıdır; son katmanları **tam doludur** (He hariç "
            "hepsinde 8 elektron).",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Periyodik özelliklerin değişim yönü",
         "aciklama": "Tek bir kural her şeyi açıklar: **çekirdek çekimi arttıkça** "
                     "elektron daha sıkı tutulur. Soldan sağa gidildikçe proton sayısı "
                     "artar, yarıçap küçülür; yukarıdan aşağı inildikçe katman sayısı "
                     "artar, yarıçap büyür.",
         "ciz": S.kartlar([
             ("Atom yarıçapı", "soldan sağa **azalır**\naşağı inince **artar**"),
             ("İyonlaşma enerjisi", "soldan sağa **artar**\naşağı inince **azalır**"),
             ("Elektron ilgisi", "soldan sağa **artar**\naşağı inince **azalır**"),
             ("Elektronegatiflik", "soldan sağa **artar**\naşağı inince **azalır**\nen yüksek: **F**"),
             ("Metalik özellik", "soldan sağa **azalır**\naşağı inince **artar**"),
             ("Ametalik özellik", "soldan sağa **artar**\naşağı inince **azalır**"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Özellik", "Tanımı"],
         "satirlar": [
             ["**İyonlaşma enerjisi**",
              "Gaz hâlindeki **nötr** bir atomdan **bir elektron koparmak** için gereken "
              "en az enerji. Her zaman **endotermiktir (+)**"],
             ["**Elektron ilgisi**",
              "Gaz hâlindeki nötr bir atomun **elektron aldığında** açığa çıkardığı enerji. "
              "Genellikle **ekzotermiktir (−)**"],
             ["**Elektronegatiflik**",
              "Bir atomun, bağdaki **ortak elektronları kendine çekme gücü**. Birimi yoktur; "
              "**flor en yüksektir (4,0)**"],
         ],
         "oranlar": [0.24, 0.76]},
        {"tur": "tuzak", "baslik": "İyonlaşma Enerjisinde İki Düzensizlik", "govde":
            "Kural \"soldan sağa artar\" der ama iki yerde **kırılır**: "
            "**2A > 3A** (Be > B, Mg > Al) çünkü 2A'da s orbitali **tam doludur**. "
            "**5A > 6A** (N > O, P > S) çünkü 5A'da p orbitali **yarı doludur**. "
            "Sorularda \"beklenenin tersine\" ifadesi geçiyorsa cevap bu iki "
            "düzensizlikten biridir."},
        {"tur": "cozum",
         "baslik": "İyon Yarıçapı Sıralaması",
         "soru": "**_11Na^+**, **_12Mg^2+**, **_9F^-** ve **_8O^2-** iyonlarını yarıçapa "
                 "göre büyükten küçüğe sıralayınız.",
         "adimlar": [
             "Dördü de **10 elektronludur** (Ne ile eş elektronlu). Bunlara **izoelektronik** "
             "iyonlar denir.",
             "Elektron sayısı aynı olduğuna göre yarıçapı belirleyen tek şey **proton "
             "sayısıdır**.",
             "**Proton sayısı arttıkça** çekim artar, elektron bulutu **büzülür** ve "
             "yarıçap **küçülür**.",
             "Proton sayıları: O (8) < F (9) < Na (11) < Mg (12).",
         ],
         "sonuc": "Yarıçap sırası: **O^2- > F^- > Na^+ > Mg^2+**. Kural: izoelektronik "
                  "iyonlarda proton çoksa yarıçap küçüktür."},
        {"tur": "dikkat", "baslik": "Katyon Küçülür, Anyon Büyür", "ogeler": [
            "**Katyon** (pozitif iyon), atomdan **elektron kaybederek** oluşur; "
            "genellikle bir katman eksilir → **atomdan küçüktür**.",
            "**Anyon** (negatif iyon), atoma **elektron eklenerek** oluşur; itme artar "
            "→ **atomdan büyüktür**.",
            "Aynı elementin iyonlarında yük arttıkça yarıçap küçülür: "
            "**Fe > Fe^2+ > Fe^3+**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Yükseltgenme Basamakları"},
        {"tur": "maddeler", "ogeler": [
            "**Serbest elementlerde yükseltgenme basamağı sıfırdır**: Na, O_2, P_4, S_8.",
            "**1A metalleri +1**, **2A metalleri +2**, **Al +3** basamağını alır.",
            "**Flor daima −1**'dir. Diğer halojenler genellikle −1'dir ama oksijenle "
            "bileşiklerinde pozitif olabilir.",
            "**Oksijen genellikle −2**'dir. İstisnalar: **peroksitlerde −1** (H_2O_2), "
            "**süperoksitlerde −1/2**, **OF_2'de +2**.",
            "**Hidrojen genellikle +1**'dir; **metal hidrürlerinde −1** olur (NaH, CaH_2).",
            "**Bileşikte yükseltgenme basamaklarının toplamı sıfırdır**; iyonda ise "
            "**iyonun yüküne eşittir**.",
        ]},
        {"tur": "cozum",
         "baslik": "Yükseltgenme Basamağı Bulma",
         "soru": "**K_2Cr_2O_7** bileşiğinde kromun yükseltgenme basamağını bulunuz.",
         "adimlar": [
             "K bir **1A metalidir**: her biri **+1**, ikisi **+2**.",
             "O genellikle **−2**'dir: 7 × (−2) = **−14**.",
             "Bileşik nötr olduğu için toplam **sıfır** olmalıdır: (+2) + 2x + (−14) = 0.",
             "2x = 12 → **x = +6**.",
         ],
         "sonuc": "Kromun yükseltgenme basamağı **+6**'dır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**l en çok n−1** olur: 1p, 2d, 3f **yoktur**.",
            "Orbital sayısı **2l+1**, elektron sayısı **2(2l+1)**.",
            "Doldurma sırasında **4s önce**, iyonlaşmada **4s'ten önce kopar**.",
            "**Cr: 4s^1 3d^5**, **Cu: 4s^1 3d^10** — küresel simetri istisnaları.",
            "**Periyot = en büyük n**, **A grubu = değerlik elektronu**.",
            "Soldan sağa: yarıçap **azalır**, iyonlaşma enerjisi ve elektronegatiflik **artar**.",
            "İyonlaşma enerjisinde iki düzensizlik: **2A > 3A** ve **5A > 6A**.",
            "**Katyon atomdan küçük**, **anyon atomdan büyüktür**.",
            "İzoelektronik iyonlarda **proton çoksa yarıçap küçüktür**.",
            "**F daima −1**; **O genellikle −2** (peroksitte −1).",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde soruların çoğu **dizilim yazmadan çözülemez**. Kaleme "
            "sarılmadan önce elementin elektron dizilimini yaz; periyot, grup, iyon "
            "yarıçapı ve iyonlaşma enerjisi sorularının hepsi o satırın içinde "
            "gizlidir.",
        "satir_sayisi": 2,
        "sorular": [
            "Bohr atom modeli ile kuantum modelini elektronun yeri bakımından karşılaştırınız.",
            "Bohr modelinin hangi sınırlılığı nedeniyle terk edildiğini yazınız.",
            "Heisenberg belirsizlik ilkesini bir cümleyle açıklayınız.",
            "Orbital kavramını tanımlayarak bir orbitaldeki en çok elektron sayısını yazınız.",
            "Dört kuantum sayısını simgeleri ve belirttikleri özelliklerle yazınız.",
            "n = 3 için alabilecek l değerlerini ve karşılık gelen alt düzeyleri yazınız.",
            "'2d orbitali' ifadesindeki hatayı açıklayınız.",
            "s, p, d ve f alt düzeylerindeki orbital ve elektron sayılarını yazınız.",
            "n = 4 katmanındaki toplam orbital ve elektron sayısını hesaplayınız.",
            "Pauli dışlama ilkesini kuantum sayıları üzerinden açıklayınız.",
            "Hund kuralını eş enerjili orbitaller üzerinden açıklayınız.",
            "Aufbau ilkesine göre doldurma sırasını 4p'ye kadar yazınız.",
            "4s orbitalinin 3d'den önce dolmasının nedenini açıklayınız.",
            "_26Fe atomunun elektron dizilimini yazınız.",
            "Aynı atomun periyodunu, grubunu ve bloğunu belirleyiniz.",
            "Fe^2+ ve Fe^3+ iyonlarının elektron dizilimlerini yazınız.",
            "Geçiş metali iyonlarında elektronun 4s'ten kopmasının nedenini açıklayınız.",
            "_24Cr atomunun beklenen ve gerçek elektron dizilimini yazarak farkın nedenini açıklayınız.",
            "_29Cu atomunda görülen küresel simetri istisnasını açıklayınız.",
            "Yarı dolu ve tam dolu orbitallerin kararlı olmasının sonuçlarını iki örnekle yazınız.",
            "s, p, d ve f bloklarını son elektronun yeri bakımından ayırt ediniz.",
            "Periyot numarasının elektron dizilimindeki karşılığını yazınız.",
            "A grubu numarasının nasıl bulunduğunu açıklayınız.",
            "B grubu numarasının nasıl bulunduğunu açıklayınız.",
            "8B grubunun neden üç sütundan oluştuğunu açıklayınız.",
            "Soy gazların kararlı olmasının elektron dizilimindeki nedenini yazınız.",
            "Atom yarıçapının periyot ve grup boyunca değişimini nedeniyle açıklayınız.",
            "İyonlaşma enerjisini tanımlayarak işaretini gerekçesiyle yazınız.",
            "Elektron ilgisini tanımlayarak işaretini gerekçesiyle yazınız.",
            "Elektronegatifliği tanımlayarak en yüksek olan elementi yazınız.",
            "İyonlaşma enerjisinde 2A > 3A düzensizliğinin nedenini açıklayınız.",
            "İyonlaşma enerjisinde 5A > 6A düzensizliğinin nedenini açıklayınız.",
            "Ardışık iyonlaşma enerjilerindeki büyük sıçramanın ne anlama geldiğini açıklayınız.",
            "Bir elementin 3. iyonlaşma enerjisinden 4.'ye büyük bir sıçrama varsa grubu nedir?",
            "Metalik ve ametalik özelliğin periyodik değişimini yazınız.",
            "Katyonun atomdan küçük olmasının nedenini açıklayınız.",
            "Anyonun atomdan büyük olmasının nedenini açıklayınız.",
            "Na^+, Mg^2+, F^- ve O^2- iyonlarını yarıçapa göre sıralayınız.",
            "İzoelektronik iyonlarda yarıçapı belirleyen etkeni yazınız.",
            "Fe, Fe^2+ ve Fe^3+ türlerini yarıçapa göre sıralayınız.",
            "Serbest elementlerde yükseltgenme basamağının kaç olduğunu yazınız.",
            "Oksijenin yükseltgenme basamağının istisnalarını üç örnekle yazınız.",
            "Hidrojenin −1 değerlik aldığı bileşik türünü örnekle yazınız.",
            "K_2Cr_2O_7 bileşiğinde kromun yükseltgenme basamağını bulunuz.",
            "KMnO_4 bileşiğinde manganın yükseltgenme basamağını bulunuz.",
            "SO_4^2- iyonunda kükürdün yükseltgenme basamağını bulunuz.",
            "Bir bileşikte yükseltgenme basamakları toplamının kaç olduğunu yazınız.",
            "Aynı periyotta soldan sağa gidildikçe çekirdek çekiminin artmasının iki sonucunu yazınız.",
            "Aynı grupta aşağı inildikçe iyonlaşma enerjisinin azalmasının nedenini açıklayınız.",
            "Elektron dizilimi 1s^2 2s^2 2p^6 3s^2 3p^5 olan elementin periyodunu, grubunu ve alacağı iyon yükünü yazınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Bohr**: elektron belirli **yörüngelerde** döner, yeri kesin bilinir. **Kuantum**: elektron **orbitallerde** bulunur, yalnızca **bulunma olasılığı** bilinir.",
            "**Yalnızca hidrojen** için doğru sonuç veriyordu; çok elektronlu atomların spektrum çizgilerini açıklayamadı.",
            "Bir elektronun **yeri ile hızı aynı anda tam olarak** belirlenemez; birini ne kadar kesin bilirsek diğerindeki belirsizlik o kadar artar.",
            "Elektronun **bulunma olasılığının en yüksek olduğu bölgedir**. Bir orbitalde en çok **2 elektron** bulunur ve spinleri zıttır.",
            "**n**: enerji düzeyi (katman). **l**: alt düzey ve orbital şekli. **m_l**: orbitalin yönelimi. **m_s**: spin yönü.",
            "l = **0, 1, 2** olabilir; sırasıyla **3s, 3p, 3d** alt düzeylerine karşılık gelir.",
            "n = 2 için l en çok **1** olabilir (0 ve 1). d için l = 2 gerekir; bu yüzden **2d orbitali yoktur**.",
            "**s**: 1 orbital, 2 elektron. **p**: 3 orbital, 6 elektron. **d**: 5 orbital, 10 elektron. **f**: 7 orbital, 14 elektron.",
            "Orbital sayısı = n^2 = **16**; elektron sayısı = 2n^2 = **32**.",
            "Bir atomda **dört kuantum sayısı da aynı** olan iki elektron bulunamaz. Aynı orbitaldeki iki elektronun ilk üç sayısı aynıdır, **spinleri farklıdır**.",
            "Eş enerjili orbitallere elektronlar **önce birer birer ve aynı spinle** yerleşir; hepsi yarı dolduktan sonra eşleşme başlar. Böylece itme en aza iner.",
            "**1s 2s 2p 3s 3p 4s 3d 4p**.",
            "Doldurma sırasında **4s'in enerjisi 3d'den düşüktür**; elektron her zaman en düşük enerjili boş orbitale yerleşir.",
            "**1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6**.",
            "**Periyot 4** (en büyük n), **d bloğu**, B grubu numarası 4s + 3d = 2 + 6 = 8 → **8B grubu**.",
            "**Fe^2+**: 1s^2 2s^2 2p^6 3s^2 3p^6 **3d^6**. **Fe^3+**: 1s^2 2s^2 2p^6 3s^2 3p^6 **3d^5**.",
            "Orbitaller dolduktan sonra **4s'in enerjisi 3d'nin üstüne çıkar**. En yüksek enerjili ve en dış katmandaki elektron ilk koptuğu için 4s boşalır.",
            "Beklenen **4s^2 3d^4**, gerçek **4s^1 3d^5**. Nedeni, **yarı dolu d^5** düzeninin daha kararlı olmasıdır.",
            "Beklenen **4s^2 3d^9** yerine **4s^1 3d^10** olur; **tam dolu d^10** düzeni daha kararlıdır.",
            "**_24Cr → 4s^1 3d^5** ve **_29Cu → 4s^1 3d^10**. Ayrıca azotun (p^3) iyonlaşma enerjisi oksijenden yüksektir.",
            "**s bloğu**: son elektron s'te (1A, 2A). **p bloğu**: p'de (3A–8A). **d bloğu**: d'de (B grupları). **f bloğu**: f'te (lantanit-aktinit).",
            "Periyot numarası, dizilimdeki **en büyük n değerine** (katman sayısına) eşittir.",
            "**Son katmandaki (değerlik) elektron sayısına** eşittir. Örneğin ...3s^2 3p^5 → 7 elektron → **7A**.",
            "**(n−1)d + ns** elektronlarının toplamına eşittir. Toplam 8, 9 ya da 10 ise element **8B grubundadır**.",
            "B grubu numarası **8, 9 ve 10** olan elementlerin üçü de 8B sayılır; bu yüzden 8B üç sütundan oluşur.",
            "Son katmanları **tam doludur** (He'de 2, diğerlerinde 8 elektron). Elektron alma ya da verme eğilimleri olmadığı için tepkimeye girmezler.",
            "Periyotta soldan sağa **proton sayısı artar**, çekim güçlenir, yarıçap **küçülür**. Grupta aşağı inildikçe **katman sayısı artar**, yarıçap **büyür**.",
            "Gaz hâlindeki nötr atomdan **bir elektron koparmak** için gereken en az enerjidir. Elektron koparmak enerji gerektirdiği için her zaman **endotermiktir (+)**.",
            "Gaz hâlindeki nötr atomun **elektron aldığında** açığa çıkardığı enerjidir. Genellikle enerji açığa çıktığı için **ekzotermiktir (−)**.",
            "Bir atomun bağdaki **ortak elektronları kendine çekme gücüdür**. Birimi yoktur; en yüksek olan element **flordur (4,0)**.",
            "2A'da **s orbitali tam doludur** ve bu kararlı bir düzendir. 3A'da ise elektron daha yüksek enerjili **p orbitalindedir** ve daha kolay kopar.",
            "5A'da **p orbitali yarı doludur** (p^3) ve kararlıdır. 6A'da bir orbitalde **iki elektron eşleşmiştir**; aralarındaki itme kopmayı kolaylaştırır.",
            "Sıçrama, elektronun artık **bir alt katmandan (soy gaz düzeninden)** koptuğunu gösterir. Sıçramadan önceki elektron sayısı, elementin **değerlik elektronu** sayısıdır.",
            "3'ten 4'e sıçrama varsa element **3 değerlik elektronu** taşır → **3A grubundadır**.",
            "**Metalik özellik** soldan sağa azalır, aşağı inince artar. **Ametalik özellik** soldan sağa artar, aşağı inince azalır.",
            "Elektron verildiği için genellikle **bir katman eksilir**; ayrıca kalan elektron başına düşen çekirdek çekimi artar. İkisi de yarıçapı **küçültür**.",
            "Elektron eklendiği için **elektronlar arası itme artar** ve elektron bulutu genişler; yarıçap **büyür**.",
            "Dördü de **10 elektronludur**; yarıçapı proton sayısı belirler. Proton çoksa çekim güçlüdür: **O^2- > F^- > Na^+ > Mg^2+**.",
            "**Proton sayısıdır**. Elektron sayısı aynı olduğunda proton sayısı arttıkça çekim güçlenir ve yarıçap küçülür.",
            "**Fe > Fe^2+ > Fe^3+**. Elektron sayısı azaldıkça çekirdek başına çekim artar ve yarıçap küçülür.",
            "**Sıfırdır**. Na, O_2, P_4, S_8 gibi serbest hâldeki tüm elementlerde geçerlidir.",
            "**Peroksitlerde −1** (H_2O_2), **süperoksitlerde −1/2**, **OF_2'de +2** (flor daha elektronegatif olduğu için).",
            "**Metal hidrürlerinde** −1 olur: **NaH**, **CaH_2**. Metal daha az elektronegatif olduğu için elektron hidrojene kayar.",
            "2(+1) + 2x + 7(−2) = 0 → 2x = **+12** → **x = +6**.",
            "(+1) + x + 4(−2) = 0 → x = **+7**.",
            "x + 4(−2) = −2 → x = **+6**.",
            "**Sıfırdır**. İyonlarda ise toplam, **iyonun yüküne** eşittir.",
            "**Atom yarıçapı küçülür** ve **iyonlaşma enerjisi ile elektronegatiflik artar** (ayrıca ametalik özellik artar).",
            "Katman sayısı arttıkça son elektron çekirdekten **uzaklaşır** ve iç katmanların **perdeleme etkisi** artar; elektron daha kolay kopar.",
            "En büyük n = 3 → **3. periyot**; değerlik elektronu 2 + 5 = 7 → **7A grubu**. Sekize tamamlamak için 1 elektron alır → iyon yükü **−1**.",
        ],
    },
}
