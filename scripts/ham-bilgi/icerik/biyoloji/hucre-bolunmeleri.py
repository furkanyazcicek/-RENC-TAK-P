"""TYT Biyoloji — Hücre Bölünmeleri (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT BİYOLOJİ: HÜCRE BÖLÜNMELERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Biyoloji",
    "baslik": "Hücre Bölünmeleri",
    "alt_baslik": "Ham bilgi notu — hücre döngüsü, mitoz, mayoz ve üreme; "
                  "kromozom-DNA grafikleri ve 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Biyoloji",
        "konu": "Hücre Bölünmeleri",
        "kazanimlar": "9.4.1.1 — Hücre döngüsünü ve mitozu açıklar. "
                      "9.4.2.1 — Mayoz bölünmeyi ve eşeyli üremedeki rolünü açıklar.",
        "kapsam": "İnterfaz ve evreler, mitoz, sitokinez, mayoz I-II, krossing-over, "
                  "mitoz-mayoz karşılaştırması, eşeyli ve eşeysiz üreme, grafikler, "
                  "45 analiz sorusu",
        "nasil": "Bu konunun soruları **grafik ve sayısal**dır. Evre isimlerini "
                 "ezberlemek yetmez; **kromozom sayısı, kromatit sayısı ve DNA "
                 "miktarının** her evrede ne olduğunu bilmelisin.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Mayozdaki **krossing-over** ve **bağımsız dağılım**, TYT'de "
                    "kalıtım sorularının da temelidir — burayı iyi kur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Kavramlar"},
        {"tur": "maddeler", "ogeler": [
            "**Kromozom**: DNA'nın bölünme sırasında kısalıp kalınlaşmış hâli.",
            "**Kromatit**: Eşlenmiş kromozomun **her bir kolu**. İki kardeş kromatit "
            "**sentromerden** birbirine bağlıdır.",
            "**Sentromer**: Kardeş kromatitleri birleştiren boğum. **Kromozom sayısı, "
            "sentromer sayısına eşittir** — bu, sayısal soruların anahtarıdır.",
            "**Homolog kromozom**: Biri anneden, biri babadan gelen, **aynı boyda, "
            "aynı gen bölgelerini taşıyan** kromozom çifti. Taşıdıkları **aleller "
            "farklı olabilir**.",
            "**Diploit (2n)**: Homolog kromozomların **çift** hâlde bulunması. Vücut "
            "(somatik) hücreleri diploittir. İnsanda 2n = 46.",
            "**Haploit (n)**: Homologların **tek** hâlde bulunması. Üreme hücreleri "
            "(gamet) haploittir. İnsanda n = 23.",
        ]},
        {"tur": "taktik", "baslik": "Sayısal Soruların Üç Kuralı", "govde":
            "Kromozom-kromatit karışıklığı en çok puan kaybettiren yerdir:",
         "ogeler": [
             "**Kromozom sayısı = sentromer sayısı.** Kromatit ikiye katlansa bile "
             "sentromer bir tane olduğu sürece kromozom **bir** sayılır.",
             "**DNA eşlendikten sonra** kromozom sayısı **değişmez**, kromatit sayısı "
             "ve DNA miktarı **iki katına çıkar**.",
             "**Anafazda sentromer bölünür** → kromozom sayısı **anlık olarak iki "
             "katına** çıkar; sonra hücre bölününce yarıya iner.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hücre Döngüsü"},
        {"tur": "gorsel", "baslik": "Şema 1 — Hücre döngüsünün evreleri",
         "aciklama": "Döngünün **en uzun** bölümü interfazdır (G_1 + S + G_2). "
                     "Bölünmenin kendisi (M evresi) döngünün küçük bir kısmıdır.",
         "ciz": S.dongu(
             ["G_1 — büyüme ve\norganel üretimi", "S — DNA eşlenir",
              "G_2 — bölünme\nhazırlığı", "M — mitoz ve\nsitokinez"],
             "Hücre Döngüsü")},
        {"tur": "maddeler", "ogeler": [
            "**İnterfaz (G_1 + S + G_2)**: Hücrenin bölünmeye hazırlandığı, en uzun "
            "evre. Hücre **büyür**, organel sayısı **artar**, protein ve enzim "
            "sentezlenir, **ATP biriktirilir**.",
            "**G_1**: Hücre büyür, organeller çoğalır. **DNA henüz eşlenmemiştir**.",
            "**S (sentez)**: **DNA eşlenir (replikasyon)**. Bu evrenin sonunda her "
            "kromozom **iki kardeş kromatitli** hâle gelir; DNA miktarı **iki katına** "
            "çıkar ama **kromozom sayısı değişmez**.",
            "**G_2**: Bölünme için gerekli proteinler ve **iğ iplikleri** hazırlanır. "
            "**Sentrozom eşlenmesi** de bu evrede tamamlanır.",
            "**G_0**: Bölünmeyi bırakmış, göreve odaklanmış hücrelerin evresi. "
            "**Sinir hücresi ve çizgili kas hücresi** G_0'dadır — bu yüzden "
            "onarılmaları çok zordur.",
            "**Kontrol noktaları**: G_1, G_2 ve M evrelerinde hücre denetlenir. Denetim "
            "bozulursa **kontrolsüz bölünme (kanser)** ortaya çıkar.",
        ]},
        {"tur": "tuzak", "baslik": "İnterfaz Bölünmenin Parçası Değildir", "govde":
            "İnterfaz bir **hazırlık** evresidir, bölünmenin evresi **değildir**. "
            "'Mitozun ilk evresi interfazdır' ifadesi **yanlıştır**. Mitozun ilk "
            "evresi **profaz**dır. Ayrıca DNA eşlenmesi mitozda değil, "
            "**interfazın S evresinde** olur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Mitoz Bölünme"},
        {"tur": "paragraf", "metin":
            "Mitoz, **bir hücreden kalıtsal olarak özdeş iki hücre** oluşmasıdır. "
            "Çok hücrelilerde **büyüme, yenilenme ve onarım**; tek hücrelilerde "
            "**üreme** sağlar."},
        {"tur": "gorsel", "baslik": "Şema 2 — Mitozun evreleri",
         "aciklama": "Sıra: **Pro–Meta–Ana–Telo**. Kısaltma olarak "
                     "**'PMAT'** aklında tut.",
         "ciz": S.dikey_akis(
             ["Profaz", "Metafaz", "Anafaz", "Telofaz", "Sitokinez"],
             ["Kromatin kısalıp kalınlaşır, **kromozom** görünür hâle gelir. "
              "Çekirdek zarı ve çekirdekçik **erir**. İğ iplikleri kurulur.",
              "Kromozomlar hücrenin **tam ortasında (ekvator düzlemi)** tek sıra "
              "hâlinde dizilir. Kromozomların **en belirgin** göründüğü evredir.",
              "**Sentromerler bölünür**, kardeş kromatitler **zıt kutuplara** çekilir. "
              "Kromozom sayısı anlık olarak **iki katına** çıkar.",
              "Kromozomlar kutuplara ulaşır, tekrar **kromatin** hâline döner. "
              "Çekirdek zarı ve çekirdekçik **yeniden oluşur**.",
              "**Sitoplazma** bölünür. Hayvanda **boğumlanma**, bitkide **ara lamel** "
              "(hücre plağı) oluşumu ile gerçekleşir."])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Mitoz sonucunda **2 hücre** oluşur; ikisi de **ana hücreyle özdeştir** "
            "(2n → 2n).",
            "**Kalıtsal çeşitlilik sağlamaz.** Yavru hücreler birbirinin ve ana "
            "hücrenin kopyasıdır.",
            "Bitkilerde mitoz **meristem** dokusunda sürekli görülür; bu yüzden "
            "bitkilerde büyüme **sınırsızdır**.",
            "**Sentrozom bitkilerde bulunmadığı** için iğ iplikleri sitoplazmadaki "
            "mikrotübüllerden oluşur.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Mitozda DNA miktarı ve kromozom sayısı",
         "aciklama": "**DNA miktarı** S evresinde iki katına çıkar, telofazda "
                     "yarılanır. **Kromozom sayısı** yalnızca **anafazda** anlık "
                     "olarak iki katına çıkar ve sitokinezden sonra normale döner.",
         "ciz": S.grafik("Evreler (G_1 · S · G_2 · P · M · A · T)", "Miktar / Sayı", [
             ("DNA miktarı", [(0, 0.35), (0.14, 0.35), (0.30, 0.70), (0.44, 0.70),
                              (0.58, 0.70), (0.72, 0.70), (0.86, 0.70),
                              (0.93, 0.35), (1.0, 0.35)], MARKA),
             ("Kromozom sayısı", [(0, 0.35), (0.14, 0.35), (0.30, 0.35), (0.44, 0.35),
                                  (0.58, 0.35), (0.72, 0.35), (0.78, 0.70),
                                  (0.86, 0.70), (0.93, 0.35), (1.0, 0.35)], BILGI),
         ], gosterge="sol-ust")},
        {"tur": "tuzak", "baslik": "Anafazda Kromozom Sayısı Neden Artar?", "govde":
            "Anafazda **sentromer bölünür**. Sentromer bölününce her kardeş kromatit "
            "**kendi sentromerine** sahip olur ve artık **ayrı bir kromozom** sayılır. "
            "DNA miktarı **artmaz** — yalnızca sayma biçimi değişir. Bu, ÖSYM'nin en "
            "sevdiği ince ayrımdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Mayoz Bölünme"},
        {"tur": "paragraf", "metin":
            "Mayoz, **2n bir hücreden 4 tane n hücre** oluşturan, **art arda iki kez** "
            "gerçekleşen bölünmedir. Amacı **gamet (üreme hücresi) üretmek** ve "
            "**kalıtsal çeşitlilik** sağlamaktır. Mayozdan önce de **interfaz** yaşanır "
            "ve DNA **bir kez** eşlenir."},

        {"tur": "altbolum", "baslik": "A. Mayoz I — İndirgeme Bölünmesi"},
        {"tur": "maddeler", "ogeler": [
            "**Profaz I**: Homolog kromozomlar **yan yana gelir (sinapsis)** ve "
            "**tetrat** (dört kromatitli yapı) oluşturur. Bu sırada kromatitler "
            "arasında parça değişimi olur: **krossing-over (parça değişimi)**. "
            "Mayozun **en uzun ve en önemli** evresidir.",
            "**Metafaz I**: **Homolog çiftler** ekvator düzleminde **karşılıklı iki "
            "sıra** hâlinde dizilir. (Mitozda tek sıraydı.) Homologların hangi kutba "
            "bakacağı **rastgeledir** → **bağımsız dağılım**.",
            "**Anafaz I**: **Homolog kromozomlar** birbirinden ayrılıp zıt kutuplara "
            "gider. **Sentromer bölünmez!** Kardeş kromatitler birlikte kalır. "
            "**Kromozom sayısı burada yarıya iner (2n → n).**",
            "**Telofaz I ve Sitokinez I**: İki tane **n kromozomlu** hücre oluşur. "
            "Her kromozom hâlâ **iki kromatitlidir**.",
        ]},
        {"tur": "altbolum", "baslik": "B. Mayoz II — Mitoza Benzeyen Bölünme"},
        {"tur": "maddeler", "ogeler": [
            "Mayoz I ile Mayoz II arasında **DNA eşlenmesi olmaz** (interfaz yaşanmaz "
            "ya da çok kısadır).",
            "**Profaz II, Metafaz II, Anafaz II, Telofaz II** evreleri mitozdakiyle "
            "aynı mantıkla işler.",
            "**Anafaz II'de sentromer bölünür**, kardeş kromatitler ayrılır.",
            "Sonuçta **4 tane haploit (n) hücre** oluşur ve bunların **hepsi "
            "birbirinden farklıdır**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 4 — Mayozun akışı",
         "aciklama": "Kromozom sayısı **Anafaz I'de** yarılanır. Mayoz II, mitoza "
                     "benzer ama başlangıç hücresi **haploit**tir.",
         "ciz": S.akis(
             ["2n hücre", "Mayoz I", "2 × n hücre", "Mayoz II", "4 × n hücre"],
             ["interfazda DNA\neşlenir", "homologlar\nayrılır", "her kromozom\n2 kromatitli",
              "kardeş kromatitler\nayrılır", "hepsi **farklı**"])},

        {"tur": "altbolum", "baslik": "C. Kalıtsal Çeşitliliğin Kaynakları"},
        {"tur": "maddeler", "ogeler": [
            "**Krossing-over (Profaz I)**: Homolog kromozomların kardeş olmayan "
            "kromatitleri arasında parça değişimi. **Yeni gen kombinasyonları** "
            "oluşturur — çeşitliliğin en büyük kaynağıdır.",
            "**Bağımsız dağılım (Metafaz I / Anafaz I)**: Homolog çiftlerin kutuplara "
            "rastgele dağılması. İnsanda bu, **2 üzeri 23** farklı gamet olasılığı "
            "demektir.",
            "**Rastgele döllenme**: Milyonlarca spermden hangisinin yumurtayı "
            "dölleyeceğinin belirsiz olması.",
        ]},
        {"tur": "tuzak", "baslik": "Krossing-over Kardeş Kromatitler Arasında Olmaz",
         "govde": "Parça değişimi, **homolog kromozomların kardeş OLMAYAN** "
                  "kromatitleri arasında olur. Kardeş kromatitler zaten birbirinin "
                  "**kopyasıdır**; aralarında değişim olsa **çeşitlilik doğmaz**. "
                  "Bu yüzden krossing-over mitozda görülmez."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Mitoz ve Mayozun Karşılaştırılması"},
        {"tur": "gorsel", "baslik": "Şema 5 — İki bölünmenin farkları ve ortak yönleri",
         "ciz": S.karsilastirma(
             "Mitoz",
             ["**Bir** bölünme", "**2** hücre oluşur", "2n → **2n** (sayı korunur)",
              "Yavrular **özdeş**", "**Krossing-over yok**",
              "Metafazda **tek sıra**", "Vücut hücrelerinde",
              "Büyüme, onarım, yenilenme"],
             "Mayoz",
             ["**İki** bölünme", "**4** hücre oluşur", "2n → **n** (sayı yarılanır)",
              "Yavrular **farklı**", "**Krossing-over var**",
              "Metafaz I'de **çift sıra**", "Üreme ana hücrelerinde",
              "Gamet oluşumu, çeşitlilik"],
             "Ortak",
             ["Önce **interfaz** yaşanır", "DNA **bir kez** eşlenir",
              "İğ iplikleri kurulur", "Sitokinez ile biter",
              "Ökaryot hücrelerde görülür"])},
        {"tur": "tablo",
         "basliklar": ["Evre", "Mitoz", "Mayoz I", "Mayoz II"],
         "oranlar": [0.20, 0.26, 0.28, 0.26],
         "satirlar": [
             ["Profaz", "Tetrat **yok**", "**Tetrat ve krossing-over var**", "Tetrat yok"],
             ["Metafaz", "**Tek sıra**", "**Çift sıra** (homolog çiftler)", "Tek sıra"],
             ["Anafaz", "**Sentromer bölünür**, kromatitler ayrılır",
              "**Sentromer bölünmez**, homologlar ayrılır",
              "**Sentromer bölünür**, kromatitler ayrılır"],
             ["Sonuç", "2 hücre, **2n**", "2 hücre, **n** (2 kromatitli)", "4 hücre, **n**"],
         ]},
        {"tur": "taktik", "baslik": "Evre Tanıma Refleksi", "govde":
            "Sorularda verilen şekli ya da bilgiyi şu üç soruyla ayır:",
         "ogeler": [
             "**Tetrat (dört kromatitli yapı) var mı?** Varsa kesinlikle **Profaz I**.",
             "Metafazda kromozomlar **çift sıra** mı dizilmiş? Öyleyse **Metafaz I**.",
             "Anafazda **homologlar** mı ayrılıyor, **kardeş kromatitler** mi? "
             "Homolog ayrılıyorsa **Anafaz I**; kromatit ayrılıyorsa **mitoz anafazı "
             "veya Anafaz II**.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Üreme ve Gamet Oluşumu"},
        {"tur": "maddeler", "ogeler": [
            "**Spermatogenez (erkekte)**: Bir spermatogonyumdan (2n) mayoz sonucu "
            "**4 tane işlevsel sperm (n)** oluşur. Sitoplazma **eşit** paylaşılır.",
            "**Oogenez (dişide)**: Bir oogonyumdan (2n) mayoz sonucu **1 tane "
            "işlevsel yumurta (n)** ve **3 tane kutup hücresi** oluşur. Sitoplazma "
            "**eşit paylaşılmaz** — yumurta besin depolayabilsin diye sitoplazmanın "
            "neredeyse tamamını alır. Kutup hücreleri **körelir**.",
            "**Döllenme**: Sperm (n) + Yumurta (n) → **Zigot (2n)**. Tür kromozom "
            "sayısı böylece nesiller boyu **sabit kalır**.",
            "**Partenogenez**: Döllenmemiş yumurtanın gelişerek yeni birey "
            "oluşturması. Bal arısında **erkek arı (n)** böyle oluşur; kraliçe ve "
            "işçi arılar döllenmiş yumurtadan (2n) gelir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 6 — Sperm ve yumurta oluşumunun farkı",
         "ciz": S.karsilastirma(
             "Spermatogenez",
             ["**4** işlevsel hücre", "Sitoplazma **eşit** bölünür",
              "Ergenlikte başlar, **sürekli** devam eder", "Küçük, hareketli"],
             "Oogenez",
             ["**1** işlevsel hücre + **3 kutup**", "Sitoplazma **eşit değil**",
              "Doğumdan önce başlar, **dönemsel**", "Büyük, hareketsiz, besin depolu"],
             "Ortak",
             ["Mayozla oluşur", "Sonuç hücreler **haploit (n)**",
              "Kalıtsal çeşitlilik taşır"])},

        {"tur": "altbolum", "baslik": "Kanser — Kontrolden Çıkan Mitoz"},
        {"tur": "maddeler", "ogeler": [
            "Hücre döngüsündeki **kontrol noktalarının** çalışmaması sonucu hücrenin "
            "**kontrolsüz ve sürekli** bölünmesidir.",
            "**Tümör**: Kontrolsüz bölünen hücre kütlesi. **İyi huylu (benign)** "
            "tümör bulunduğu yerde kalır; **kötü huylu (malign)** tümör çevre dokuya "
            "yayılır.",
            "**Metastaz**: Kanser hücrelerinin kan veya lenf yoluyla başka organlara "
            "yayılmasıdır.",
            "Nedenleri: **mutasyon**, radyasyon, kimyasal maddeler (sigara katranı), "
            "bazı virüsler, kalıtsal yatkınlık.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Kromozom sayısı = sentromer sayısı.**",
            "DNA **interfazın S evresinde** eşlenir, mitozda değil.",
            "**Anafazda** sentromer bölünür → kromozom sayısı **anlık** iki katına çıkar.",
            "**Anafaz I'de** sentromer **bölünmez**; kromozom sayısı burada yarılanır.",
            "**Tetrat ve krossing-over** yalnızca **Profaz I**'de vardır.",
            "Metafaz: mitozda **tek sıra**, Mayoz I'de **çift sıra**.",
            "Mitoz **özdeş 2** hücre, mayoz **farklı 4** hücre verir.",
            "Oogenezde **1 yumurta + 3 kutup**; spermatogenezde **4 sperm**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu konunun soruları **sayısal ve grafiksel**dir. Her sayısal soruda "
            "önce 'kaç sentromer var' diye sor. Grafik sorularında ekseni kâğıda "
            "çiz, evreleri altına yaz ve eğriyi kendin oluştur.",
        "satir_sayisi": 2,
        "sorular": [
            "Kromozom ile kromatit arasındaki farkı sentromer üzerinden açıklayınız.",
            "Bir hücrede 40 kromatit varsa ve DNA eşlenmişse kromozom sayısı kaçtır?",
            "Homolog kromozomların 'aynı gen bölgelerini taşıması' ile 'aynı alelleri taşıması' aynı şey midir?",
            "Diploit ve haploit kavramlarını insan örneğiyle açıklayınız.",
            "İnterfazın hücre döngüsünün en uzun evresi olmasının nedeni nedir?",
            "G_1, S ve G_2 evrelerinde sırasıyla ne olur?",
            "'Mitozun ilk evresi interfazdır' ifadesindeki hatayı düzeltiniz.",
            "G_0 evresindeki hücrelere iki örnek veriniz ve bunun sonucunu yazınız.",
            "Sinir hücresinin yaralanma sonrası zor onarılmasını hücre döngüsüyle açıklayınız.",
            "Mitozun evrelerini sırasıyla yazıp her birinde olan temel olayı bir cümleyle belirtiniz.",
            "Kromozomların en belirgin göründüğü evre hangisidir? Neden?",
            "Profazda çekirdek zarının erimesinin işlevsel nedeni nedir?",
            "Anafazda kromozom sayısının iki katına çıkmasının nedeni nedir? DNA miktarı da artar mı?",
            "Bitki ve hayvan hücresinde sitokinez farkını yazınız.",
            "Bitkilerde büyümenin sınırsız olmasını mitoz üzerinden açıklayınız.",
            "Bitkilerde sentrozom olmadığı hâlde iğ iplikleri nasıl oluşur?",
            "Mitozun tek hücrelilerdeki işlevi ile çok hücrelilerdeki işlevini karşılaştırınız.",
            "Mitozun kalıtsal çeşitlilik sağlamamasının nedeni nedir?",
            "Mayozdan önce DNA kaç kez eşlenir? Bu neden önemlidir?",
            "Sinapsis ve tetrat kavramlarını tanımlayınız.",
            "Krossing-over hangi evrede, hangi kromatitler arasında gerçekleşir?",
            "Krossing-overın kardeş kromatitler arasında olması çeşitlilik sağlar mıydı? Neden?",
            "Metafaz I ile mitoz metafazı arasındaki dizilim farkını yazınız.",
            "Anafaz I'de sentromerin bölünmemesinin sonucu nedir?",
            "Kromozom sayısı mayozun hangi evresinde yarıya iner?",
            "Mayoz I sonunda oluşan hücrelerde her kromozom kaç kromatitlidir?",
            "Mayoz II'nin mitoza benzemesinin nedeni nedir? Tek farkı nedir?",
            "Bağımsız dağılım nedir ve insanda kaç farklı gamet olasılığı doğurur?",
            "Kalıtsal çeşitliliğin üç kaynağını yazınız.",
            "Bir hücrede tetrat gözleniyorsa bu hücre hangi evrededir?",
            "Anafazda homologlar ayrılıyorsa hangi evredeyiz? Kardeş kromatitler ayrılıyorsa?",
            "Mitoz ve mayozun dört ortak yönünü yazınız.",
            "2n = 24 olan bir hücre mitoz geçirirse oluşan hücrelerin kromozom sayısı kaçtır?",
            "Aynı hücre mayoz geçirirse oluşan hücre sayısı ve kromozom sayısı kaç olur?",
            "2n = 16 olan bir canlıda Metafaz I'de ekvatorda kaç tetrat bulunur?",
            "Spermatogenez sonunda kaç işlevsel hücre oluşur? Oogenezde kaç tane?",
            "Oogenezde sitoplazmanın eşit paylaşılmamasının işlevsel nedeni nedir?",
            "Kutup hücrelerinin görevi var mıdır? Akıbetleri nedir?",
            "Döllenmenin tür kromozom sayısını sabit tutmadaki rolünü açıklayınız.",
            "Bal arısında erkek bireyin kromozom sayısı neden n'dir?",
            "Partenogenezle oluşan bireyde kalıtsal çeşitlilik beklenir mi?",
            "Kanserin hücre döngüsüyle ilişkisini kontrol noktaları üzerinden açıklayınız.",
            "İyi huylu ve kötü huylu tümör arasındaki farkı yazınız.",
            "Metastaz nedir ve neden tehlikelidir?",
            "Mayoz geçiremeyen bir canlı türünün karşılaşacağı temel sorun ne olurdu?",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Kromozom** bir sentromere sahip yapıdır; **kromatit** eşlenmiş kromozomun her bir koludur. İki kardeş kromatit tek sentromere bağlı olduğu sürece **tek kromozom** sayılır.",
            "**20 kromozom.** Her kromozom iki kromatitli olduğundan kromatit sayısı kromozomun iki katıdır.",
            "**Aynı şey değildir.** Homologlar aynı **gen bölgelerini** taşır (örneğin göz rengi geni ikisinde de aynı yerdedir) ama taşıdıkları **aleller farklı olabilir** (biri mavi, biri kahverengi aleli).",
            "**Diploit (2n)**: homologlar çift hâlde, insanda **46**. **Haploit (n)**: homologlar tek hâlde, insanda **23** (gametler).",
            "Hücre bu evrede **büyür**, organellerini çoğaltır, DNA'sını eşler, protein ve ATP biriktirir; bölünmenin bütün hazırlığı burada yapılır.",
            "**G_1**: hücre büyür, organeller çoğalır. **S**: DNA eşlenir. **G_2**: bölünme proteinleri ve iğ iplikleri hazırlanır.",
            "İnterfaz **bölünmenin değil, hazırlığın** evresidir. Mitozun ilk evresi **profazdır**.",
            "**Sinir hücresi** ve **çizgili kas hücresi**. Bölünmedikleri için yaralandıklarında **onarım çok sınırlıdır**.",
            "Sinir hücresi **G_0 evresindedir**; hücre döngüsünden çıkmıştır ve bölünmez. Bölünme olmayınca yerine yeni hücre üretilemez.",
            "**Profaz**: kromozomlar belirginleşir, çekirdek zarı erir. **Metafaz**: ekvatorda dizilim. **Anafaz**: sentromer bölünür, kromatitler kutuplara gider. **Telofaz**: çekirdek yeniden oluşur.",
            "**Metafaz.** Kromozomlar en çok kısalıp kalınlaştığı ve tek düzlemde dizildiği için en net görülür.",
            "İğ ipliklerinin kromozomlara **ulaşabilmesi** için engel kalkmalıdır; zar erimezse iplikler sentromere tutunamaz.",
            "**Sentromer bölündüğü** için her kromatit kendi sentromerine sahip olur ve ayrı kromozom sayılır. **DNA miktarı artmaz**; yalnızca sayma birimi değişir.",
            "**Bitkide** ortada **ara lamel (hücre plağı)** oluşur ve duvar örülür. **Hayvanda** zar dıştan içe doğru **boğumlanır**.",
            "Bitkide **meristem** dokusu ömür boyu mitoz geçirir; bu yüzden büyüme belirli bir yaşta durmaz.",
            "İğ iplikleri **sitoplazmadaki mikrotübüllerden** oluşur; sentrozom şart değildir.",
            "**Tek hücrelilerde** mitoz **üreme** sağlar (birey sayısı artar). **Çok hücrelilerde** büyüme, **yenilenme ve onarım** sağlar.",
            "Oluşan hücreler ana hücrenin **birebir kopyasıdır**; krossing-over ve bağımsız dağılım yoktur, gen dizilimi değişmez.",
            "**Bir kez** (interfazın S evresinde). İki bölünme olmasına rağmen tek eşlenme yapıldığı için kromozom sayısı **yarıya iner**.",
            "**Sinapsis**: homolog kromozomların yan yana gelip eşleşmesi. **Tetrat**: bu eşleşmeyle oluşan, **dört kromatitli** yapı.",
            "**Profaz I**'de, **homolog kromozomların kardeş OLMAYAN** kromatitleri arasında.",
            "**Sağlamazdı.** Kardeş kromatitler birbirinin **birebir kopyasıdır**; aralarında parça değişimi gen içeriğini değiştirmez.",
            "Mitoz metafazında kromozomlar **tek sıra**; Metafaz I'de homolog çiftler **karşılıklı çift sıra** hâlinde dizilir.",
            "Kardeş kromatitler **birlikte kalır**; kutuplara **homolog kromozomlar** gider. Böylece kromozom sayısı yarıya iner ama her kromozom hâlâ iki kromatitlidir.",
            "**Anafaz I**'de.",
            "**İki kromatitli.** Sentromer henüz bölünmediği için kardeş kromatitler ayrılmamıştır.",
            "Mayoz II'de de **sentromer bölünür** ve kardeş kromatitler ayrılır — mitozla aynı mantıktır. Tek fark, başlangıç hücresinin **haploit (n)** olmasıdır.",
            "Homolog çiftlerin kutuplara **rastgele** dağılmasıdır. İnsanda 23 çift olduğu için **2 üzeri 23** farklı gamet olasılığı doğar.",
            "**Krossing-over**, **bağımsız dağılım** ve **rastgele döllenme**.",
            "**Profaz I.** Tetrat yalnızca bu evrede görülür.",
            "Homologlar ayrılıyorsa **Anafaz I**; kardeş kromatitler ayrılıyorsa **mitoz anafazı veya Anafaz II**.",
            "Öncesinde **interfaz** yaşanır; DNA **bir kez eşlenir**; **iğ iplikleri** kurulur; **sitokinezle** biter (hepsi ökaryot hücrede görülür).",
            "**24.** Mitozda kromozom sayısı korunur (2n → 2n).",
            "**4 hücre** oluşur, her biri **12** kromozomludur (2n → n).",
            "**8 tetrat.** 2n = 16 ise 8 homolog çift vardır; her çift bir tetrat oluşturur.",
            "Spermatogenezde **4**, oogenezde **1** işlevsel hücre (+ 3 kutup hücresi) oluşur.",
            "Yumurtanın, döllenmeden sonra embriyoyu besleyebilmesi için **sitoplazma ve besin deposuna** ihtiyacı vardır; bu yüzden sitoplazmanın neredeyse tamamını alır.",
            "İşlevsel görevleri **yoktur**; çok az sitoplazma aldıkları için gelişemez ve **körelirler**.",
            "Gametler mayozla **n**'e indirgenir; döllenmede n + n = **2n** olur. Böylece tür kromozom sayısı nesiller boyunca **sabit** kalır.",
            "**Döllenmemiş yumurtadan (partenogenezle)** geliştiği için babası yoktur ve yumurtanın haploit kromozom takımını taşır.",
            "**Sınırlı olarak beklenir.** Yumurta mayozla oluştuğu için krossing-over ve bağımsız dağılımın izini taşır; ancak döllenme olmadığından baba kaynaklı çeşitlilik yoktur.",
            "Hücre döngüsündeki **kontrol noktaları** hasarlı hücreyi durdurur. Bu denetim bozulunca hücre **kontrolsüz ve sürekli** bölünür; kanser böyle oluşur.",
            "**İyi huylu** tümör bulunduğu yerde kalır, çevre dokuya yayılmaz. **Kötü huylu** tümör çevre dokuyu istila eder ve yayılabilir.",
            "Kanser hücrelerinin **kan veya lenf yoluyla** başka organlara taşınıp orada yeni tümör oluşturmasıdır. Hastalığı **birden çok organa** yaydığı için tehlikelidir.",
            "**Gamet üretemez**, dolayısıyla eşeyli üreyemezdi; ayrıca **kalıtsal çeşitlilik** oluşmaz, tür değişen çevre koşullarına uyum sağlayamazdı.",
        ],
    },
}
