"""TYT Kimya — Maddenin Hâlleri (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: MADDENİN HÂLLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Maddenin Hâlleri",
    "alt_baslik": "Ham bilgi notu — katı, sıvı, gaz ve plazma; hâl değişimleri, "
                  "ısınma-soğuma grafikleri ve gaz yasaları; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Maddenin Halleri",
        "kazanimlar": "9.4.1.1 — Maddenin hâllerini tanecik davranışıyla açıklar. "
                      "9.4.1.2 — Hâl değişimlerini enerji alışverişiyle yorumlar. "
                      "9.4.2.1 — Gazların davranışını basınç-hacim-sıcaklıkla ilişkilendirir.",
        "kapsam": "Dört hâl, hâl değişimleri, ısınma-soğuma eğrileri, erime ve "
                  "kaynama noktası, buharlaşma, gaz yasaları, kısmi basınç, "
                  "45 analiz sorusu",
        "nasil": "Bu konu **grafik okuma** konusudur. Isınma eğrisindeki "
                 "**yatay bölümlerin** ne anlama geldiğini bilmeden soru çözülmez. "
                 "Grafiği kâğıda kendin çiz, eksenleri etiketle.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Isınma-soğuma grafiği TYT'de neredeyse her yıl karşına çıkar.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Maddenin Dört Hâli"},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Katı", "Sıvı", "Gaz"],
         "oranlar": [0.25, 0.25, 0.25, 0.25],
         "satirlar": [
             ["Tanecikler arası çekim", "**En güçlü**", "Orta", "**En zayıf** (yok sayılır)"],
             ["Tanecikler arası boşluk", "**En az**", "Orta", "**En çok**"],
             ["Belirli şekil", "**Var**", "Yok (kabın şeklini alır)", "Yok"],
             ["Belirli hacim", "**Var**", "**Var**", "Yok (kabı doldurur)"],
             ["Sıkıştırılabilirlik", "**Yok denecek kadar az**", "Çok az", "**Yüksek**"],
             ["Tanecik hareketi", "Yerinde **titreşim**", "Kayma ve öteleme", "Serbest, hızlı"],
             ["Akışkanlık", "Yok", "**Var**", "**Var**"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "**Plazma**: Maddenin **dördüncü hâli**. Çok yüksek sıcaklıkta gaz "
            "atomlarının **iyonlaşmasıyla** oluşur; **iyon ve serbest elektron** "
            "içerdiği için **elektriği iletir** ve manyetik alandan etkilenir.",
            "Plazma örnekleri: **Güneş ve yıldızlar**, **yıldırım**, **kuzey ışıkları "
            "(aurora)**, neon lamba ve floresan içi, kaynak arkı.",
            "**Evrende en yaygın madde hâli plazmadır** — bu bilgi doğrudan sorulur.",
            "**Akışkanlar**: Sıvı ve gaz. Katı akışkan değildir.",
            "**Sıkıştırılabilirlik** yalnızca gazlarda anlamlıdır; çünkü yalnızca "
            "gazlarda tanecikler arasında büyük boşluk vardır.",
        ]},
        {"tur": "tuzak", "baslik": "Cam Katı mıdır?", "govde":
            "Cam **amorf (şekilsiz) katı**dır: taneciklerinin düzeni kristal katılar "
            "gibi düzenli değildir. Bu yüzden **belirli bir erime noktası yoktur**, "
            "geniş bir sıcaklık aralığında yumuşar. Kristal katılar (tuz, buz, metal) "
            "ise **keskin bir erime noktasına** sahiptir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hâl Değişimleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — Hâl değişimleri ve enerji yönü",
         "aciklama": "**Isı alan** değişimler (erime, buharlaşma, süblimleşme) "
                     "tanecikleri **birbirinden uzaklaştırır**. **Isı veren** "
                     "değişimler (donma, yoğuşma, kırağılaşma) **yaklaştırır**.",
         "ciz": S.akis(
             ["Katı", "Sıvı", "Gaz"],
             ["erime →\n← donma", "buharlaşma →\n← yoğuşma",
              "süblimleşme: katı → gaz\nkırağılaşma: gaz → katı"])},
        {"tur": "tablo",
         "basliklar": ["Değişim", "Yön", "Enerji", "Örnek"],
         "oranlar": [0.24, 0.24, 0.20, 0.32],
         "satirlar": [
             ["**Erime**", "Katı → Sıvı", "**Alır**", "Buzun erimesi"],
             ["**Donma**", "Sıvı → Katı", "**Verir**", "Suyun buz tutması"],
             ["**Buharlaşma**", "Sıvı → Gaz", "**Alır**", "Çamaşırın kuruması"],
             ["**Yoğuşma**", "Gaz → Sıvı", "**Verir**", "Cama buğu oluşması"],
             ["**Süblimleşme**", "Katı → Gaz", "**Alır**", "Naftalin, kuru buz (katı CO_2)"],
             ["**Kırağılaşma**", "Gaz → Katı", "**Verir**", "Kırağı, karın oluşması"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Saf bir maddede erime noktası ile donma noktası aynıdır**; "
            "kaynama noktası ile yoğuşma noktası da aynıdır.",
            "**Buharlaşma her sıcaklıkta** ve **yalnızca yüzeyden** olur. "
            "**Kaynama** ise **belirli bir sıcaklıkta** ve **sıvının her yerinde** "
            "gerçekleşir. Bu ayrım sorulur.",
            "Buharlaşmayı hızlandıran etkenler: **sıcaklığın artması**, "
            "**yüzey alanının artması**, **hava akımı**, **dış basıncın azalması**.",
        ]},
        {"tur": "tuzak", "baslik": "Süblimleşmenin Tersi Yoğuşma Değildir", "govde":
            "Katıdan gaza geçiş **süblimleşme**, gazdan **doğrudan katıya** geçiş "
            "**kırağılaşma (geri süblimleşme)**dır. Yoğuşma ise gazdan **sıvıya** "
            "geçiştir. Üçünü karıştırmak sık yapılan hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Isınma ve Soğuma Grafikleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Saf bir maddenin ısınma eğrisi",
         "aciklama": "**Eğik bölümlerde** sıcaklık artar, madde **tek hâldedir** "
                     "ve **öz ısı** devrededir. **Yatay bölümlerde** sıcaklık "
                     "**sabittir**, madde **iki hâlde birlikte** bulunur ve "
                     "**hâl değişim ısısı** devrededir.",
         "ciz": S.grafik("Verilen ısı (zaman)", "Sıcaklık", [
             ("Saf madde", [(0, 0.10), (0.14, 0.32), (0.34, 0.32), (0.48, 0.60),
                            (0.76, 0.60), (0.90, 0.85), (1.0, 0.92)], MARKA),
         ], notlar=[(0.16, 0.46, "erime"), (0.50, 0.74, "kaynama")],
            gosterge="sag-alt")},
        {"tur": "maddeler", "ogeler": [
            "**Yatay bölümün varlığı, maddenin SAF olduğunu gösterir.** Karışımlarda "
            "hâl değişimi sırasında sıcaklık **sabit kalmaz**, yavaşça değişir.",
            "**Birinci yatay bölüm = erime**, sıcaklığı **erime noktasıdır**. "
            "**İkinci yatay bölüm = kaynama**, sıcaklığı **kaynama noktasıdır**.",
            "Yatay bölümün **uzunluğu madde miktarıyla** doğru orantılıdır. Aynı "
            "madde iki katına çıkarsa yatay bölüm **iki kat uzar**, ama "
            "**sıcaklık değeri değişmez**.",
            "Eğik bölümün **eğimi**, maddenin **öz ısısıyla ters** orantılıdır. "
            "Eğim dikse öz ısı küçüktür (çabuk ısınır).",
            "**Erime ve kaynama noktası maddenin ayırt edici özelliğidir**; "
            "madde miktarına **bağlı değildir**.",
        ]},
        {"tur": "formul",
         "baslik": "Isı hesapları",
         "ifade": "Q = m · c · ΔT          (sıcaklık değişirken)\n"
                  "Q = m · L                (hâl değişirken)",
         "terimler": [
             ("Q", "Alınan ya da verilen **ısı** (kalori ya da joule)"),
             ("m", "**Kütle** (g)"),
             ("c", "**Öz ısı** — 1 g maddenin sıcaklığını 1 °C artırmak için "
                   "gereken ısı. Suda 1 cal/g·°C"),
             ("ΔT", "**Sıcaklık farkı** (son − ilk)"),
             ("L", "**Hâl değişim ısısı** — erime ısısı ya da buharlaşma ısısı"),
         ],
         "not": "Hâl değişimi sırasında **ΔT = 0**'dır; bu yüzden orada "
                "**Q = m · L** kullanılır. İki formülü aynı basamakta birlikte "
                "kullanmak en sık yapılan hatadır."},
        {"tur": "cozum",
         "baslik": "Grafik Yorumlama",
         "soru": "Bir maddenin ısınma grafiğinde birinci yatay bölüm **−10 °C**'de, "
                 "ikinci yatay bölüm **80 °C**'de görülüyor. **20 °C**'de bu madde "
                 "hangi hâldedir?",
         "adimlar": [
             "Birinci yatay bölüm **erimedir** → **erime noktası = −10 °C**.",
             "İkinci yatay bölüm **kaynamadır** → **kaynama noktası = 80 °C**.",
             "20 °C, erime noktasından **yüksek** (−10 < 20) → madde erimiştir.",
             "20 °C, kaynama noktasından **düşük** (20 < 80) → henüz kaynamamıştır.",
         ],
         "sonuc": "Madde 20 °C'de sıvı hâldedir."},
        {"tur": "taktik", "baslik": "Hâl Belirleme Kuralı", "govde":
            "Verilen sıcaklığı erime (EN) ve kaynama (KN) noktalarıyla karşılaştır:",
         "ogeler": [
             "Sıcaklık **< EN** → **katı**",
             "Sıcaklık **= EN** → **katı + sıvı birlikte**",
             "**EN < Sıcaklık < KN** → **sıvı**",
             "Sıcaklık **= KN** → **sıvı + gaz birlikte**",
             "Sıcaklık **> KN** → **gaz**",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Erime ve Kaynama Noktasını Etkileyen Etkenler"},
        {"tur": "maddeler", "ogeler": [
            "**Dış basınç artarsa kaynama noktası yükselir.** Düşük basınçta "
            "(yüksek rakımda) su **100 °C'den önce** kaynar. Düdüklü tencerede "
            "basınç arttığı için su daha **yüksek** sıcaklıkta kaynar ve yemek "
            "daha çabuk pişer.",
            "**Saf sıvıya katı madde (tuz, şeker) eklenince kaynama noktası "
            "yükselir, donma noktası düşer.** Kışın yollara tuz dökülmesinin "
            "nedeni budur: tuz suyun donma noktasını **düşürür**.",
            "**Tanecikler arası çekim güçlüyse** erime ve kaynama noktası **yüksektir**. "
            "İyonik ve metalik bağlı maddeler bu yüzden çok yüksek sıcaklıkta erir.",
            "**Madde miktarı erime/kaynama noktasını DEĞİŞTİRMEZ**; yalnızca "
            "geçen **süreyi** değiştirir.",
        ]},
        {"tur": "cikmis", "baslik": "Rakım–kaynama sorusu", "govde":
            "'Aynı su Ankara'da mı yoksa deniz kıyısında mı daha çabuk kaynar?' "
            "Cevap: **Ankara'da**, çünkü rakım yüksek olduğu için **açık hava "
            "basıncı düşüktür** ve su daha **düşük** sıcaklıkta kaynar. Ama dikkat: "
            "**su daha düşük sıcaklıkta kaynadığı için yemek daha GEÇ pişer.** "
            "Sorunun asıl tuzağı burasıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Gazlar"},
        {"tur": "maddeler", "ogeler": [
            "**İdeal gaz varsayımları**: Tanecikler arasında çekim **yoktur**, "
            "taneciklerin **öz hacmi ihmal edilir**, çarpışmalar **esnektir**.",
            "**Gerçek gazlar**, **yüksek sıcaklık ve düşük basınçta** ideale yaklaşır. "
            "(Tanecikler birbirinden uzaklaşır, çekim önemsizleşir.)",
            "**Gaz basıncı**, taneciklerin kabın çeperlerine yaptığı çarpmalardan "
            "doğar.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Yasa", "Sabit Tutulan", "İlişki", "Günlük Örnek"],
         "oranlar": [0.20, 0.20, 0.28, 0.32],
         "satirlar": [
             ["**Boyle**", "Sıcaklık", "P ile V **ters** orantılı (P·V sabit)",
              "Şırınganın pistonunu bastırmak"],
             ["**Charles**", "Basınç", "V ile T **doğru** orantılı (V/T sabit)",
              "Balonun sıcakta şişmesi"],
             ["**Gay-Lussac**", "Hacim", "P ile T **doğru** orantılı (P/T sabit)",
              "Deodorant kutusunun ateşte patlaması"],
             ["**Avogadro**", "P ve T", "V ile mol sayısı **doğru** orantılı",
              "Balona üflemek"],
         ]},
        {"tur": "formul",
         "baslik": "İdeal gaz denklemi",
         "ifade": "P · V = n · R · T",
         "terimler": [
             ("P", "**Basınç** (atm)"),
             ("V", "**Hacim** (litre)"),
             ("n", "**Mol sayısı**"),
             ("R", "Gaz sabiti = **0,082** L·atm/mol·K"),
             ("T", "**Mutlak sıcaklık (Kelvin)** = °C + 273"),
         ],
         "not": "**Sıcaklık her zaman Kelvin cinsinden** yazılır. Santigrat "
                "kullanmak, bu konudaki hesap hatalarının neredeyse tamamının "
                "kaynağıdır."},
        {"tur": "cozum",
         "baslik": "Boyle Yasası Uygulaması",
         "soru": "Sabit sıcaklıkta, **2 litre** hacimli bir gazın basıncı **3 atm**'dir. "
                 "Hacim **6 litreye** çıkarılırsa basınç kaç atm olur?",
         "adimlar": [
             "Sıcaklık sabit olduğu için **Boyle yasası** geçerlidir: P_1·V_1 = P_2·V_2.",
             "Değerleri yerine koy: 3 × 2 = P_2 × 6.",
             "6 = 6 · P_2.",
             "P_2 = **1 atm**.",
         ],
         "sonuc": "Hacim 3 katına çıkınca basınç 3'te 1'ine düşer: 1 atm."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Kısmi basınç (Dalton yasası)**: Bir gaz karışımının toplam basıncı, "
            "her gazın **tek başına yapacağı basınçların toplamıdır**.",
            "Bir gazın kısmi basıncı = **toplam basınç × o gazın mol kesri**.",
            "**Mol kesri** = o gazın mol sayısı / toplam mol sayısı.",
            "**Difüzyon (yayılma)**: Gazın kendiliğinden yayılması. **Efüzyon**: "
            "Gazın küçük bir delikten sızması. **Mol kütlesi küçük olan gaz daha "
            "hızlı yayılır** (Graham yasası).",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Yatay bölüm = saf madde + hâl değişimi + sabit sıcaklık.**",
            "Yatay bölümün **uzunluğu miktara**, **yüksekliği maddenin cinsine** bağlıdır.",
            "Buharlaşma **her sıcaklıkta ve yüzeyden**; kaynama **belirli sıcaklıkta "
            "ve her yerden**.",
            "Basınç artarsa **kaynama noktası yükselir**; rakım artarsa **düşer**.",
            "Tuz eklemek: kaynama noktası **yükselir**, donma noktası **düşer**.",
            "Gaz hesaplarında sıcaklık **daima Kelvin**.",
            "Evrende en yaygın hâl **plazma**dır.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Grafik sorularında önce **eksenleri** oku, sonra **yatay bölümleri** "
            "işaretle. Hesap sorularında birimleri (özellikle sıcaklığı Kelvin'e) "
            "çevirdiğinden emin ol. Her cevabın altına kullandığın yasayı yaz.",
        "satir_sayisi": 2,
        "sorular": [
            "Katı, sıvı ve gazı tanecikler arası boşluk ve çekim bakımından karşılaştırınız.",
            "Hangi hâller akışkandır? Nedenini yazınız.",
            "Sıkıştırılabilirliğin yalnızca gazlarda anlamlı olmasının nedeni nedir?",
            "Plazma hâli nasıl oluşur ve hangi özelliğiyle gazdan ayrılır?",
            "Plazmaya üç doğal örnek veriniz.",
            "Evrende en yaygın madde hâli hangisidir?",
            "Kristal katı ile amorf katıyı erime davranışı bakımından ayırınız.",
            "Camın belirli bir erime noktası olmamasının nedeni nedir?",
            "Isı alan üç hâl değişimi yazınız.",
            "Isı veren üç hâl değişimi yazınız.",
            "Süblimleşme ve kırağılaşmayı tanımlayıp birer örnek veriniz.",
            "Yoğuşma ile kırağılaşma arasındaki farkı yazınız.",
            "Naftalinin küçülerek yok olmasını hangi hâl değişimi açıklar?",
            "Saf bir maddede erime ve donma noktası arasındaki ilişkiyi yazınız.",
            "Buharlaşma ile kaynamayı üç ölçüte göre karşılaştırınız.",
            "Buharlaşmayı hızlandıran dört etkeni yazınız.",
            "Isınma grafiğinde yatay bölümlerin anlamı nedir?",
            "Isınma grafiğinde yatay bölüm görülmesi maddenin saf olduğunu gösterir mi? Neden?",
            "Birinci ve ikinci yatay bölümün karşılık geldiği hâl değişimleri nelerdir?",
            "Yatay bölümün uzunluğu neye bağlıdır?",
            "Madde miktarı iki katına çıkarılırsa erime noktası değişir mi? Yatay bölüm nasıl değişir?",
            "Eğik bölümün eğimi ile öz ısı arasındaki ilişkiyi yazınız.",
            "Q = m·c·ΔT formülü hangi durumda kullanılır?",
            "Hâl değişimi sırasında hangi formül kullanılır? Nedenini yazınız.",
            "Erime noktası −10 °C, kaynama noktası 80 °C olan madde 20 °C'de hangi hâldedir?",
            "Aynı madde −10 °C'de hangi hâl veya hâllerde bulunur?",
            "Aynı madde 95 °C'de hangi hâldedir?",
            "Dış basınç arttığında kaynama noktası nasıl değişir?",
            "Düdüklü tencerede yemeğin çabuk pişmesinin nedeni nedir?",
            "Yüksek rakımda suyun daha düşük sıcaklıkta kaynamasına rağmen yemeğin geç pişmesini açıklayınız.",
            "Kışın yollara tuz dökülmesinin bilimsel nedeni nedir?",
            "Suya tuz eklenince kaynama ve donma noktaları nasıl değişir?",
            "Tanecikler arası çekim ile erime noktası arasındaki ilişkiyi yazınız.",
            "İdeal gazın üç varsayımını yazınız.",
            "Gerçek gazlar hangi koşullarda ideale yaklaşır?",
            "Gaz basıncının kaynağı nedir?",
            "Boyle yasasını ifade ediniz ve bir günlük örnek veriniz.",
            "Charles yasasında hangi büyüklük sabit tutulur?",
            "Deodorant kutusunun ateşe atılınca patlamasını hangi yasa açıklar?",
            "Sabit sıcaklıkta 4 L hacimli, 2 atm basınçlı gazın hacmi 2 L'ye düşerse basıncı ne olur?",
            "İdeal gaz denklemini yazınız ve terimlerin birimlerini belirtiniz.",
            "Gaz hesaplarında sıcaklığın Kelvin cinsinden alınmasının nedeni nedir?",
            "25 °C kaç Kelvin'dir?",
            "Dalton kısmi basınçlar yasasını bir cümleyle yazınız.",
            "Mol kütlesi küçük olan gazın daha hızlı yayılmasının nedeni ne olabilir?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Katıda** çekim en güçlü, boşluk en azdır. **Sıvıda** ikisi de orta düzeydedir. **Gazda** çekim yok sayılır, boşluk en fazladır.",
            "**Sıvı ve gaz** akışkandır. Tanecikleri birbirine göre **yer değiştirebildiği** için akarlar; katıda tanecikler yerinde titreşir.",
            "Yalnızca gazlarda tanecikler arasında **büyük boşluk** vardır; basınç uygulanınca bu boşluk küçülür. Katı ve sıvıda boşluk zaten yok denecek kadar azdır.",
            "Gaz atomlarının **çok yüksek sıcaklıkta iyonlaşmasıyla** oluşur. İçinde **serbest iyon ve elektron** bulunduğu için gazdan farklı olarak **elektriği iletir** ve manyetik alandan etkilenir.",
            "**Güneş ve yıldızlar**, **yıldırım**, **kuzey ışıkları (aurora)**.",
            "**Plazma.**",
            "**Kristal katının keskin bir erime noktası vardır** (buz, tuz, metal). **Amorf katı** belirli bir erime noktası göstermez, geniş bir aralıkta yumuşar (cam, mum).",
            "Tanecikleri **düzenli bir kristal örgü** oluşturmaz; bağların kopması tek bir sıcaklıkta değil, geniş bir aralıkta gerçekleşir.",
            "**Erime, buharlaşma (kaynama), süblimleşme.**",
            "**Donma, yoğuşma, kırağılaşma.**",
            "**Süblimleşme**: katıdan doğrudan gaza (naftalin, kuru buz). **Kırağılaşma**: gazdan doğrudan katıya (kırağı, kar oluşumu).",
            "**Yoğuşma** gazdan **sıvıya**, **kırağılaşma** gazdan **doğrudan katıya** geçiştir.",
            "**Süblimleşme.** Naftalin katı hâlden doğrudan gaz hâline geçer.",
            "**Birbirine eşittir.** Aynı sıcaklıkta madde erir veya donar; hangi yöne gideceğini ısı alıp vermesi belirler.",
            "**Sıcaklık**: buharlaşma her sıcaklıkta, kaynama belirli bir sıcaklıkta. **Yer**: buharlaşma yalnızca yüzeyden, kaynama sıvının her yerinden. **Görünüm**: kaynamada kabarcık oluşur.",
            "**Sıcaklığın artması**, **yüzey alanının artması**, **hava akımı (rüzgâr)**, **dış basıncın azalması**.",
            "Madde **hâl değiştirmektedir**; alınan ısı sıcaklığı artırmak yerine **tanecikler arası çekimi yenmek** için harcanır, bu yüzden sıcaklık sabit kalır.",
            "**Evet gösterir.** Saf maddeler hâl değişimini **sabit sıcaklıkta** yapar; karışımlarda sıcaklık hâl değişimi boyunca **yavaşça değişir**, düz bir yatay bölüm oluşmaz.",
            "Birinci yatay bölüm **erime**, ikinci yatay bölüm **kaynamadır**.",
            "**Madde miktarına** bağlıdır. Miktar arttıkça hâl değişimi daha uzun sürer, yatay bölüm uzar.",
            "**Erime noktası değişmez** (ayırt edici özelliktir). **Yatay bölüm iki kat uzar**, çünkü iki kat ısı gerekir.",
            "**Ters orantılıdır.** Eğim dikse öz ısı **küçüktür** (madde çabuk ısınır); eğim yatıksa öz ısı büyüktür.",
            "Madde **tek hâldeyken** ve **sıcaklığı değişirken** kullanılır (grafiğin eğik bölümleri).",
            "**Q = m · L** kullanılır. Hâl değişimi sırasında sıcaklık sabittir, yani **ΔT = 0**'dır; m·c·ΔT çarpımı sıfır çıkardı.",
            "**Sıvı hâldedir.** 20 °C erime noktasından yüksek, kaynama noktasından düşüktür.",
            "**Katı ve sıvı birlikte** bulunur; bu sıcaklık tam erime noktasıdır.",
            "**Gaz hâldedir** (95 °C > 80 °C).",
            "**Yükselir.** Sıvının buhar basıncının dış basınca eşitlenmesi için daha yüksek sıcaklık gerekir.",
            "Kapalı kapta basınç arttığı için su **100 °C'den daha yüksek** sıcaklıkta kaynar; yüksek sıcaklık pişme süresini kısaltır.",
            "Rakım yüksek olduğu için basınç düşüktür ve su **daha düşük sıcaklıkta** kaynar. Pişirme sıcaklığı düştüğü için yemek **daha geç** pişer.",
            "Tuz, suyun **donma noktasını düşürür**; 0 °C'de su donmaz, yol buzlanmaz.",
            "**Kaynama noktası yükselir**, **donma noktası düşer**.",
            "Çekim güçlendikçe tanecikleri ayırmak için daha çok enerji gerekir; **erime ve kaynama noktası yükselir**.",
            "Tanecikler arasında **çekim yoktur**, taneciklerin **öz hacmi ihmal edilir**, çarpışmalar **esnektir** (enerji kaybı olmaz).",
            "**Yüksek sıcaklık ve düşük basınçta.** Bu koşullarda tanecikler birbirinden uzaklaşır, çekim ve öz hacim önemsizleşir.",
            "Taneciklerin **kabın çeperlerine yaptığı çarpmalardır**.",
            "Sabit sıcaklıkta **basınç ile hacim ters orantılıdır** (P·V = sabit). Örnek: şırınganın ucu kapalıyken pistonu bastırınca hacim küçülür, basınç artar.",
            "**Basınç** sabit tutulur; hacim ile mutlak sıcaklık doğru orantılıdır.",
            "**Gay-Lussac yasası.** Hacim sabitken sıcaklık arttıkça basınç artar ve kap dayanamayıp patlar.",
            "P_1·V_1 = P_2·V_2 → 2 × 4 = P_2 × 2 → **P_2 = 4 atm**.",
            "**P·V = n·R·T.** P atm, V litre, n mol, R = 0,082 L·atm/mol·K, T Kelvin.",
            "Kelvin **mutlak sıcaklık** ölçeğidir ve sıfır noktası taneciklerin hareketinin durduğu noktadır. Santigrat kullanılırsa oranlar bozulur ve negatif değerler anlamsız sonuç verir.",
            "25 + 273 = **298 K**.",
            "Bir gaz karışımının **toplam basıncı**, karışımdaki gazların **kısmi basınçlarının toplamına** eşittir.",
            "Aynı sıcaklıkta bütün gazların **ortalama kinetik enerjisi eşittir**; kütlesi küçük olan taneciğin **hızı daha büyük** olur, bu yüzden daha hızlı yayılır.",
        ],
    },
}
