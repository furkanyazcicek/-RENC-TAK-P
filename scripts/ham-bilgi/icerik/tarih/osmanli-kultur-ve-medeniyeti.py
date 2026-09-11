"""TYT Tarih — Osmanlı Kültür ve Medeniyeti (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: OSMANLI KÜLTÜR VE MEDENİYETİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Osmanlı Kültür ve Medeniyeti",
    "alt_baslik": "Ham bilgi notu — devlet teşkilatı, toprak ve vergi düzeni, ordu, "
                  "hukuk, eğitim, toplum ve sanat; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Dünya Gücü Osmanlı",
        "kazanimlar": "10.3.1 — Osmanlı devlet teşkilatını açıklar. "
                      "10.3.2 — Osmanlı toprak ve vergi sistemini değerlendirir. "
                      "10.3.3 — Osmanlı toplum yapısını ve kültür hayatını analiz eder.",
        "kapsam": "Padişah ve merkez teşkilatı, divan, taşra yönetimi, tımar "
                  "sistemi, toprak türleri, vergiler, kara ve deniz ordusu, "
                  "hukuk (şeri-örfi), millet sistemi, eğitim, sanat ve mimari, "
                  "50 analiz sorusu",
        "nasil": "Bu ünite **kurum notudur**; olay yoktur. Her kurumu "
                 "**\"ne işe yarar\"** ve **\"hangi kurumla karışır\"** biçiminde "
                 "çalış. Sınavda kurumların **işlevi** sorulur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **divan üyeleri**, "
                    "**tımar sistemi** ya da **millet sistemi** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Merkez Teşkilatı"},
        {"tur": "gorsel", "baslik": "Şema 1 — Sarayın üç bölümü",
         "aciklama": "Topkapı Sarayı hem **padişahın evi** hem **devletin "
                     "merkezidir**. Üç avlunun işlevi ayrı ayrı sorulur.",
         "ciz": S.katmanlar([
             ("Birun (dış saray)", "**Halka açık dış bölüm**; yeniçeri ağası, "
              "kapıcıbaşı, şehremini gibi görevliler burada bulunur"),
             ("Enderun (iç saray)", "**Devlet adamı yetiştirilen okul**; "
              "devşirme çocuklar burada eğitilir, oda oda yükselirler"),
             ("Harem", "**Padişahın ailesinin yaşadığı bölüm**; aynı zamanda "
              "cariyelerin **eğitildiği** yerdir"),
         ], sol_baslik="TOPKAPI SARAYI")},
        {"tur": "tablo",
         "basliklar": ["Divan üyesi", "Görevi"],
         "satirlar": [
             ["**Veziriazam (Sadrazam)**",
              "**Padişahın mutlak vekili**; divana başkanlık eder, **padişah "
              "mührünü** taşır. Padişah sefere çıkmazsa **serdar-ı ekrem** "
              "sıfatıyla orduyu yönetir"],
             ["**Kubbealtı vezirleri**", "Sadrazama yardım eder, devlet işlerinde "
              "görüş bildirir"],
             ["**Kazasker**", "**Adalet ve eğitim** işleri; kadı ve müderris "
              "atamaları. **Rumeli ve Anadolu** kazaskeri olmak üzere ikidir"],
             ["**Defterdar**", "**Maliye**; devletin gelir-giderini yönetir, "
              "bütçeyi hazırlar"],
             ["**Nişancı**", "**Padişahın tuğrasını** çeker; **kanunları bilir**, "
              "tapu-kadastro (tahrir) kayıtlarını tutar"],
             ["**Kaptan-ı Derya**", "**Donanma komutanı**; XVI. yüzyıldan sonra "
              "divan üyesidir"],
             ["**Yeniçeri Ağası**", "Yeniçeri Ocağı'nın komutanı; **vezir "
              "rütbesindeyse** divana katılır"],
             ["**Şeyhülislam (Müftü)**",
              "**Divan üyesi değildir**; kararların **dine uygunluğunu** "
              "**fetva** ile bildirir. Gerektiğinde çağrılır"],
             ["**Reisülküttap**", "**Dış işleri** ve yazışmalar; XVIII. yüzyılda "
              "önemi arttı"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "tuzak", "baslik": "Şeyhülislam Divan Üyesi Değildir", "govde":
            "**Şeyhülislam divanın asıl üyesi değildir**; **gerektiğinde çağrılır** "
            "ve alınacak kararın **dine uygun olup olmadığını fetva ile bildirir**. "
            "Fetva **bağlayıcı bir karar değil, hukuki görüştür**. Sınavda "
            "\"aşağıdakilerden hangisi divan üyesi değildir\" diye sorulduğunda "
            "cevap genellikle **şeyhülislamdır**."},
        {"tur": "dikkat", "baslik": "Divan-ı Hümayun Hakkında", "ogeler": [
            "**Devletin en yüksek karar ve yargı organıdır**; hem **bakanlar "
            "kurulu** hem **yüksek mahkeme** gibi çalışır.",
            "**Herkes divana başvurabilir** — Müslüman, gayrimüslim, kadın, "
            "köylü ayrımı yoktur. Bu, **hukukun herkese açık** olduğunun "
            "kanıtı olarak sorulur.",
            "**Kararlar tavsiye niteliğindedir**; **son söz padişahındır** → "
            "**mutlakiyet**.",
            "**Fatih'e kadar divana padişah başkanlık ederdi**; Fatih'ten sonra "
            "**sadrazam** başkanlık etmeye başladı ve padişah **kafes ardından** "
            "izledi → **padişahın konumu yüceltildi**.",
            "**II. Mahmut** döneminde kaldırılıp yerine **nazırlıklar "
            "(bakanlıklar)** kuruldu.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Taşra Teşkilatı ve Toprak Düzeni"},
        {"tur": "gorsel", "baslik": "Şema 2 — Taşra yönetim basamakları",
         "aciklama": "Büyükten küçüğe sıralamayı ezberle; sınavda **sıralama** "
                     "sorusu gelir.",
         "ciz": S.akis(
             ["Eyalet", "Sancak", "Kaza", "Nahiye", "Köy"],
             ["**Beylerbeyi**\nyönetir",
              "**Sancakbeyi**\nyönetir",
              "**Kadı**\nyönetir",
              "**Naip**\nyönetir",
              "**Köy kethüdası**"])},
        {"tur": "tablo",
         "basliklar": ["Toprak türü", "Açıklaması"],
         "satirlar": [
             ["**Miri arazi**",
              "**Mülkiyeti devlete ait** topraklar; Osmanlı arazisinin **büyük "
              "çoğunluğu**dur. Alt türleri: **dirlik, mukataa, vakıf, ocaklık, "
              "yurtluk, paşmaklık, malikâne**"],
             ["**Dirlik**",
              "**Hizmet karşılığı gelirinin** verildiği topraklar. Üçe ayrılır: "
              "**has** (100.000 akçe üstü — padişah, vezir, beylerbeyi), "
              "**zeamet** (20.000–100.000 akçe — kadı, subaşı), "
              "**tımar** (3.000–20.000 akçe — sipahi)"],
             ["**Mukataa**",
              "Geliri **doğrudan hazineye** giden topraklar; **iltizam** usulüyle "
              "kiraya verilir"],
             ["**Ocaklık**", "Geliri **kale muhafızlarına ve tersane giderlerine** "
              "ayrılan topraklar"],
             ["**Yurtluk**", "Geliri **sınır boylarındaki** görevlilere ayrılan topraklar"],
             ["**Paşmaklık**", "Geliri **padişahın annesi, kızları ve eşlerine** "
              "ayrılan topraklar"],
             ["**Vakıf**", "Geliri **hayır kurumlarına** (cami, medrese, imaret) "
              "ayrılan topraklar"],
             ["**Mülk arazi**", "**Özel mülkiyetteki** topraklar; alınıp satılabilir "
              "ve miras bırakılabilir"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "tanim", "kavram": "Tımar Sistemi",
         "aciklama": "Devlete ait toprağın **gelirinin**, hizmet karşılığı "
                     "**sipahiye** verilmesidir. Sipahi bu gelirle geçinir, "
                     "**kalan payla belirli sayıda cebeli (atlı asker) besler** "
                     "ve savaşa götürür. **Mülkiyet devlette kalır.**"},
        {"tur": "gorsel", "baslik": "Şema 3 — Tımar sisteminin faydaları",
         "aciklama": "Tımar, Osmanlı'nın **ordu, maliye, üretim ve asayişi** "
                     "aynı anda çözen sistemidir. Bozulunca **dört alan birden** "
                     "bozulmuştur.",
         "ciz": S.kartlar([
             ("Hazine korunur", "Askere **nakit maaş**\nödenmez"),
             ("Hazır ordu", "**Tımarlı sipahi**\nsürekli hazırdır"),
             ("Üretim sürer", "Toprak **boş bırakılmaz**,\nvergi düzenlidir"),
             ("Asayiş sağlanır", "Sipahi bölgenin\n**güvenliğinden** sorumludur"),
             ("Merkez güçlenir", "**Mülkiyet devlette**\nkalır, feodalite doğmaz"),
             ("Nüfus yerinde kalır", "Köylü **toprağa bağlı**\nüretime devam eder"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "Tımar Bozulunca Ne Oldu?", "govde":
            "XVII. yüzyıldan sonra tımarlar **liyakate göre değil rüşvet ve "
            "iltimasla** dağıtılınca sistem bozuldu. Sonuçları zincirlemedir: "
            "**(1)** tımarlı sipahi sayısı azaldı → **ordu zayıfladı**; "
            "**(2)** boşalan yerler **iltizama (mukataaya)** çevrildi → "
            "**mültezim köylüyü ezdi**; **(3)** köylü toprağı bırakıp şehre kaçtı "
            "→ **çift bozan** ve **üretim düştü**; **(4)** işsiz kalanlar "
            "**Celali İsyanları'na** katıldı. Sınavda \"tımarın bozulmasının "
            "sonuçları\" doğrudan sorulur."},
        {"tur": "tablo",
         "basliklar": ["Vergi", "Kimden / ne için alınır"],
         "satirlar": [
             ["**Öşür**", "**Müslüman** çiftçiden alınan **ürün vergisi** "
              "(onda bir)"],
             ["**Haraç**", "**Gayrimüslim** çiftçiden alınan **ürün ve toprak** "
              "vergisi"],
             ["**Cizye**", "**Gayrimüslim erkeklerden**, **askerlik yapmadıkları "
              "için** alınan baş vergisi"],
             ["**Ağnam**", "**Hayvan** başına alınan vergi"],
             ["**Avarız**", "**Olağanüstü durumlarda** (savaş) alınan vergi; "
              "sonradan **sürekli** hâle geldi"],
             ["**Çift resmi**", "Tımar toprağını işleyen **Müslüman köylüden** "
              "alınan toprak vergisi"],
             ["**Çift bozan**", "**Toprağını terk eden** köylüden alınan ceza vergisi"],
             ["**Gümrük**", "Ticaret mallarından alınan vergi"],
         ],
         "oranlar": [0.22, 0.78]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Ordu ve Hukuk"},
        {"tur": "gorsel", "baslik": "Şema 4 — Osmanlı ordusunun yapısı",
         "aciklama": "**Kapıkulu maaşlı ve merkeze bağlı**, **eyalet askeri "
                     "tımarlı ve taşrada**dır. Bu ayrım sınavın klasiğidir.",
         "ciz": S.agac("OSMANLI ORDUSU", [
             ("Kapıkulu", ["Yeniçeri", "Cebeci", "Topçu", "Humbaracı",
                           "Kapıkulu süvarisi"]),
             ("Eyalet askerleri", ["Tımarlı sipahi", "Akıncı", "Azap", "Deli",
                                   "Yaya-müsellem"]),
             ("Donanma", ["Kaptan-ı derya", "Levent", "Azap", "Tersane"]),
         ])},
        {"tur": "tablo",
         "basliklar": ["Karşılaştırma", "Kapıkulu", "Eyalet askerleri"],
         "satirlar": [
             ["**Kaynağı**", "**Devşirme** (Hristiyan çocuklar)",
              "**Türk-Müslüman** halk"],
             ["**Maaşı**", "**Ulufe** (üç ayda bir, nakit)",
              "**Tımar geliri** (nakit maaş almaz)"],
             ["**Bağlılığı**", "**Doğrudan padişaha**", "**Sancakbeyi ve "
              "beylerbeyine**"],
             ["**Bulunduğu yer**", "**İstanbul (merkez)**", "**Taşra (eyaletler)**"],
             ["**Sayısı**", "Daha **az**", "Daha **çok** (ordunun çoğunluğu)"],
         ],
         "oranlar": [0.22, 0.39, 0.39]},
        {"tur": "tablo",
         "basliklar": ["Hukuk türü", "Kaynağı ve kapsamı"],
         "satirlar": [
             ["**Şeri hukuk**",
              "**Kur'an, sünnet, icma ve kıyasa** dayanır. **Aile, miras, "
              "ticaret ve ibadet** konularını kapsar. **Kadı** uygular"],
             ["**Örfi hukuk**",
              "**Padişahın koyduğu kurallar** (kanunname). **Şeri hukuka aykırı "
              "olamaz**. Devlet düzeni, vergi ve ceza konularını kapsar"],
         ],
         "oranlar": [0.22, 0.78]},
        {"tur": "dikkat", "baslik": "Kadılık Kurumunun Özellikleri", "ogeler": [
            "**Kadı hem yargıç hem yöneticidir**: davaya bakar, kaza yönetir, "
            "vergi ve narh (fiyat) denetimi yapar, nikâh kıyar.",
            "**Kararları kesindir**; ancak taraflar **divana başvurabilir**.",
            "**Yerel yöneticiye bağlı değildir**, **doğrudan merkeze bağlıdır** → "
            "**yargı bağımsızlığının** göstergesi olarak sorulur.",
            "**Bir yerde uzun süre görev yapamaz** (genellikle 20 ay) — "
            "**yerel çıkar ilişkisi kurmasını önlemek** için.",
            "**Kazasker** tarafından atanır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Toplum, Eğitim ve Sanat"},
        {"tur": "gorsel", "baslik": "Şema 5 — Osmanlı toplum yapısı",
         "aciklama": "Osmanlı toplumu **din esasına göre (millet sistemi)** ve "
                     "**vergi esasına göre (yönetenler-yönetilenler)** iki ayrı "
                     "biçimde bölünür.",
         "ciz": S.karsilastirma(
             "YÖNETENLER (Askerî sınıf)",
             ["**Vergi vermezler**",
              "**Seyfiye**: kılıç ehli — askerler ve yöneticiler",
              "**İlmiye**: kalem-ilim ehli — kadı, müderris, müftü",
              "**Kalemiye**: bürokrasi — kâtipler, defterdar, nişancı"],
             "YÖNETİLENLER (Reaya)",
             ["**Vergi verirler**",
              "**Köylüler**: tarımla uğraşır, çift resmi öder",
              "**Şehirliler**: esnaf, zanaatkâr, tüccar",
              "**Konargöçerler**: hayvancılıkla geçinir, ağnam öder"],
             "MİLLET SİSTEMİ",
             ["Toplum **din esasına** göre ayrılır",
              "**Müslümanlar**, **Ortodokslar**, **Ermeniler**, **Yahudiler**",
              "Her millet **kendi din ve hukukunda** serbesttir",
              "**Cemaat liderleri** devlete karşı sorumludur"])},
        {"tur": "tuzak", "baslik": "Millet Sistemi ve Sınıf Atlama", "govde":
            "Osmanlı toplumunda **kast benzeri kapalı sınıf yoktur**: bir reaya "
            "çocuğu **medrese okuyup ilmiye sınıfına** geçebilir. Ayrıca "
            "**devşirme** yoluyla bir Hristiyan çocuk **sadrazamlığa** kadar "
            "yükselebilir. Bu yüzden sınavda \"Osmanlı'da sınıf atlamanın mümkün "
            "olduğunu gösteren uygulama\" sorulursa cevap **medrese eğitimi ve "
            "devşirme sistemidir**."},
        {"tur": "tablo",
         "basliklar": ["Alan", "Ham bilgi"],
         "satirlar": [
             ["**Eğitim**",
              "**Sıbyan mektebi** (ilköğretim), **medrese** (yüksek öğretim), "
              "**Enderun** (devlet adamı), **Ahilik/lonca** (mesleki eğitim). "
              "**Sahn-ı Seman (Fatih)** ve **Süleymaniye (Kanuni)** medreseleri "
              "en yüksek düzeydedir"],
             ["**Mimari**",
              "**Mimar Sinan**: **Şehzade Camii (çıraklık)**, **Süleymaniye "
              "(kalfalık)**, **Selimiye — Edirne (ustalık)**. Ayrıca köprü, "
              "su kemeri ve külliyeler"],
             ["**Süsleme sanatları**",
              "**Hat** (güzel yazı), **tezhip** (altın yaldızlı süsleme), "
              "**minyatür** (kitap resmi), **ebru** (su üzerine boya), "
              "**çini** (İznik çinileri), **kat'ı**, **oyma**"],
             ["**Edebiyat**",
              "**Divan edebiyatı**: Fuzuli, Baki, Nedim, Nefi. "
              "**Halk edebiyatı**: Karacaoğlan, Köroğlu, Dadaloğlu. "
              "**Nesir**: Evliya Çelebi (**Seyahatname**), Kâtip Çelebi "
              "(**Keşfüzzünun**), Naima (**ilk vakanüvis**)"],
             ["**Bilim**",
              "**Ali Kuşçu** (astronomi-matematik), **Takiyüddin** (rasathane), "
              "**Piri Reis** (haritacılık), **Matrakçı Nasuh** (minyatür-tarih), "
              "**Hezarfen Ahmet Çelebi** ve **Lagari Hasan Çelebi** (uçuş denemeleri)"],
             ["**Sosyal yardım**",
              "**Vakıflar**: imaret (aşevi), darüşşifa (hastane), külliye, "
              "kervansaray, çeşme, sebil. **Devletin sosyal güvenlik ağıdır**"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "cozum",
         "baslik": "Divanın Niteliğini Belirleme",
         "soru": "\"Divan-ı Hümayun'a Müslüman-gayrimüslim, kadın-erkek, "
                 "zengin-fakir herkes başvurabilir; ancak divanda alınan "
                 "kararların yürürlüğe girmesi için padişahın onayı gerekirdi.\"\n"
                 "Bu bilgilerden hangi iki sonuca ulaşılabilir?",
         "adimlar": [
             "Herkesin başvurabilmesi → **hukuk önünde eşitlik** ve "
             "**adalete erişim** vardır.",
             "Padişah onayı gerekmesi → **egemenlik tek elde**, karar organı "
             "**danışma niteliğindedir**.",
             "İki bilgi birlikte okunduğunda: **adalette açıklık, yönetimde "
             "mutlakiyet**.",
         ],
         "sonuc": "**(1) Osmanlı'da adalete başvurma hakkı herkese açıktır; "
                  "(2) yönetim mutlakiyetçidir, son söz padişahındır.** "
                  "ÖSYM bu tip sorularda **iki zıt görünen sonucu** birlikte ister."},
        {"tur": "cozum",
         "baslik": "Tımarın Bozulmasının Zinciri",
         "soru": "Tımar sisteminin bozulmasının Osmanlı'ya etkilerini sırayla "
                 "yazınız.",
         "adimlar": [
             "Tımarlar **liyakate göre değil rüşvetle** dağıtıldı → sipahi "
             "sayısı azaldı.",
             "**Ordu zayıfladı**; savaşlarda başarısızlık başladı.",
             "Boşalan topraklar **iltizama** verildi → **mültezim köylüyü ezdi**.",
             "Köylü toprağı terk etti → **üretim düştü**, **çift bozan** vergisi arttı.",
             "İşsiz ve topraksız kalanlar **Celali İsyanları'na** katıldı.",
             "Vergi gelirleri azaldı → **hazine açık verdi**, **akçe tağşiş edildi** "
             "(değeri düşürüldü).",
         ],
         "sonuc": "**Askerî, ekonomik ve sosyal çöküş zinciri.** Tımarın bozulması "
                  "yalnız orduyu değil, **üretimi, maliyeyi ve toplumsal düzeni** "
                  "birlikte bozmuştur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Enderun devlet adamı yetiştiren okuldur.**",
            "**Sadrazam padişahın mutlak vekilidir**; mührü taşır.",
            "**Kazasker adalet ve eğitim**, **defterdar maliye**, **nişancı tuğra**.",
            "**Şeyhülislam divan üyesi değildir**; **fetva** verir.",
            "**Divan kararları tavsiye niteliğindedir**; son söz padişahındır.",
            "**Fatih'ten sonra divana sadrazam** başkanlık etti.",
            "**Taşra: eyalet → sancak → kaza → nahiye → köy.**",
            "**Dirlik: has > zeamet > tımar.**",
            "**Tımarda mülkiyet devlette kalır**; sipahi **cebeli** besler.",
            "**Öşür Müslümandan**, **haraç ve cizye gayrimüslimden** alınır.",
            "**Cizye askerlik yapmama** karşılığıdır.",
            "**Kapıkulu maaşlı (ulufe)**, **tımarlı sipahi maaşsızdır**.",
            "**Kadı doğrudan merkeze bağlıdır** ve **kısa süre** görev yapar.",
            "**Örfi hukuk şeri hukuka aykırı olamaz.**",
            "**Yönetenler vergi vermez**, **reaya vergi verir**.",
            "**Millet sistemi din esasına** dayanır.",
            "**Mimar Sinan'ın ustalık eseri Selimiye'dir.**",
            "**Evliya Çelebi Seyahatname**, **Naima ilk vakanüvistir**.",
            "**Vakıflar devletin sosyal güvenlik ağıdır.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Kurum notlarında sorular **\"hangisi görevidir / değildir\"** "
            "biçiminde gelir. Her kurumun yanına **bir cümlelik işlev** yaz; "
            "uzun tanım ezberleme.",
        "satir_sayisi": 2,
        "sorular": [
            "Topkapı Sarayı'nın üç bölümünü ve işlevlerini yazınız.",
            "Enderun'un işlevini yazınız.",
            "Divan-ı Hümayun'un niteliğini yazınız.",
            "Divana kimlerin başvurabildiğini ve bunun anlamını yazınız.",
            "Divan kararlarının bağlayıcılığını açıklayınız.",
            "Fatih'ten sonra divan başkanlığındaki değişikliği ve nedenini yazınız.",
            "Veziriazamın görevlerini yazınız.",
            "Serdar-ı ekrem unvanını açıklayınız.",
            "Kazaskerin görevlerini yazınız.",
            "Defterdarın görevini yazınız.",
            "Nişancının görevlerini yazınız.",
            "Kaptan-ı deryanın görevini yazınız.",
            "Şeyhülislamın divandaki konumunu açıklayınız.",
            "Fetvanın niteliğini yazınız.",
            "Reisülküttabın görevini yazınız.",
            "Taşra teşkilatını büyükten küçüğe sıralayınız.",
            "Beylerbeyi ve sancakbeyinin görev alanlarını yazınız.",
            "Miri araziyi tanımlayınız.",
            "Dirlik topraklarını üçe ayırarak gelirlerini yazınız.",
            "Mukataa topraklarının özelliğini yazınız.",
            "Ocaklık ve yurtluk topraklarını açıklayınız.",
            "Paşmaklık topraklarını açıklayınız.",
            "Vakıf topraklarının işlevini yazınız.",
            "Mülk arazinin özelliğini yazınız.",
            "Tımar sistemini tanımlayınız.",
            "Cebelinin ne olduğunu yazınız.",
            "Tımar sisteminin devlete sağladığı faydaları yazınız.",
            "Tımarın feodaliteden farkını açıklayınız.",
            "Tımar sisteminin bozulma nedenini yazınız.",
            "Tımarın bozulmasının sonuçlarını sırayla yazınız.",
            "İltizam usulünü açıklayınız.",
            "Çift bozan vergisinin ne olduğunu yazınız.",
            "Öşür ve haraç vergilerini karşılaştırınız.",
            "Cizyenin kimden ve neden alındığını yazınız.",
            "Avarız vergisini açıklayınız.",
            "Kapıkulu ile eyalet askerlerini beş ölçüte göre karşılaştırınız.",
            "Ulufenin ne olduğunu ve ne sıklıkla ödendiğini yazınız.",
            "Kapıkulu ocaklarından dördünü yazınız.",
            "Akıncıların görevini yazınız.",
            "Şeri hukukun kaynaklarını ve kapsamını yazınız.",
            "Örfi hukukun kaynağını ve sınırını yazınız.",
            "Kadının görevlerini yazınız.",
            "Kadının merkeze bağlı olmasının anlamını açıklayınız.",
            "Kadının bir yerde uzun süre görev yapmamasının nedenini yazınız.",
            "Osmanlı toplumunun vergi esasına göre ayrımını yazınız.",
            "Seyfiye, ilmiye ve kalemiye sınıflarını açıklayınız.",
            "Millet sisteminin esasını yazınız.",
            "Osmanlı'da sınıf atlamanın mümkün olduğunu gösteren uygulamaları yazınız.",
            "Mimar Sinan'ın çıraklık, kalfalık ve ustalık eserlerini yazınız.",
            "Vakıf sisteminin sosyal işlevini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Birun** dış saray (halka açık bölüm), **Enderun** devlet adamı yetiştirilen okul, **Harem** padişahın ailesinin yaşadığı ve cariyelerin eğitildiği bölüm.",
            "**Devşirme çocukların eğitildiği** ve devlet adamı olarak yetiştirildiği saray okuludur.",
            "**Devletin en yüksek karar ve yargı organıdır**; hem bakanlar kurulu hem yüksek mahkeme gibi çalışır.",
            "**Herkes** başvurabilir (Müslüman-gayrimüslim, kadın-erkek); bu, **adalete erişimin herkese açık** olduğunu gösterir.",
            "**Tavsiye niteliğindedir**; kararın yürürlüğe girmesi için **padişahın onayı** gerekir — yönetim mutlakiyetçidir.",
            "**Sadrazam** başkanlık etmeye başlamış, padişah **kafes ardından** izlemiştir; amaç **padişahın konumunu yüceltmek** ve tartışmadan uzak tutmaktır.",
            "**Padişahın mutlak vekilidir**; divana başkanlık eder, **padişah mührünü** taşır, devlet işlerini yürütür.",
            "Padişah sefere çıkmadığında **orduyu yöneten sadrazama** verilen unvandır.",
            "**Adalet ve eğitim** işlerinden sorumludur; **kadı ve müderris atamalarını** yapar. Rumeli ve Anadolu olmak üzere ikidir.",
            "**Maliyeden sorumludur**; devletin gelir-giderini yönetir ve bütçeyi hazırlar.",
            "**Padişahın tuğrasını çeker**, **kanunları bilir** ve **tahrir (tapu-kadastro) kayıtlarını** tutar.",
            "**Donanma komutanıdır**; XVI. yüzyıldan sonra divan üyesi olmuştur.",
            "**Divanın asıl üyesi değildir**; gerektiğinde çağrılır ve kararların **dine uygunluğunu** bildirir.",
            "**Bağlayıcı bir karar değil, hukuki görüştür**.",
            "**Dış işleri ve yazışmalardan** sorumludur; XVIII. yüzyılda önemi artmıştır.",
            "**Eyalet → sancak → kaza → nahiye → köy.**",
            "**Beylerbeyi eyaleti**, **sancakbeyi sancağı** yönetir; ikisi de hem askerî hem idari yetkiye sahiptir.",
            "**Mülkiyeti devlete ait** topraklardır; Osmanlı arazisinin büyük çoğunluğunu oluşturur.",
            "**Has** (100.000 akçe üstü), **zeamet** (20.000–100.000 akçe), **tımar** (3.000–20.000 akçe).",
            "Geliri **doğrudan hazineye** giden topraklardır; **iltizam** usulüyle kiraya verilir.",
            "**Ocaklık** geliri kale muhafızlarına ve tersane giderlerine, **yurtluk** geliri sınır boylarındaki görevlilere ayrılan topraklardır.",
            "Geliri **padişahın annesi, kızları ve eşlerine** ayrılan topraklardır.",
            "Geliri **cami, medrese, imaret gibi hayır kurumlarına** ayrılan topraklardır.",
            "**Özel mülkiyettedir**; alınıp satılabilir ve **miras bırakılabilir**.",
            "Devlet toprağının **gelirinin hizmet karşılığı sipahiye verilmesidir**; mülkiyet devlette kalır.",
            "Tımarlı sipahinin geliriyle **beslediği ve savaşa götürdüğü atlı askerdir**.",
            "**Hazineye yük binmez**, **hazır ordu bulunur**, **üretim ve vergi düzeni sürer**, **asayiş sağlanır**, **merkezî otorite güçlenir**.",
            "**Tımarda mülkiyet devlette kalır** ve toprak miras bırakılamaz; feodalitede mülkiyet senyöre geçer. Bu yüzden tımar merkezî otoriteyi **güçlendirir**.",
            "Tımarların **liyakate göre değil rüşvet ve iltimasla** dağıtılması; ayrıca ateşli silahların yaygınlaşmasıyla tımarlı süvarinin öneminin azalması.",
            "**Ordu zayıfladı** → topraklar **iltizama** verildi → **mültezim köylüyü ezdi** → köylü toprağı terk etti, **üretim düştü** → işsizler **Celali İsyanları'na** katıldı → **hazine açık verdi**.",
            "Bir bölgenin **vergisinin peşin para karşılığı mültezime kiralanmasıdır**; mültezim fazlasını kendine aldığı için halk ezilmiştir.",
            "**Toprağını terk eden köylüden** alınan ceza vergisidir; amaç köylüyü toprakta tutmaktır.",
            "**Öşür Müslüman çiftçiden**, **haraç gayrimüslim çiftçiden** alınan ürün vergisidir.",
            "**Gayrimüslim erkeklerden**, **askerlik yapmadıkları için** alınan baş vergisidir.",
            "**Olağanüstü durumlarda (savaş)** alınan vergidir; sonradan **sürekli** hâle gelmiştir.",
            "**Kaynak**: kapıkulu devşirme, eyalet Türk-Müslüman. **Maaş**: kapıkulu ulufe, eyalet tımar geliri. **Bağlılık**: kapıkulu padişaha, eyalet sancakbeyine. **Yer**: kapıkulu merkez, eyalet taşra. **Sayı**: eyalet askerleri daha çoktur.",
            "**Kapıkulu askerlerinin nakit maaşıdır**; **üç ayda bir** ödenir.",
            "**Yeniçeri, cebeci, topçu, humbaracı** (ayrıca kapıkulu süvarisi).",
            "**Sınır boylarında akın yapmak**, düşman hakkında bilgi toplamak ve orduya yol açmaktır.",
            "**Kur'an, sünnet, icma ve kıyastır**; **aile, miras, ticaret ve ibadet** konularını kapsar.",
            "**Padişahın koyduğu kanunlardır (kanunname)**; **şeri hukuka aykırı olamaz**.",
            "**Hem yargıç hem yöneticidir**: davaya bakar, kazayı yönetir, vergi ve narh denetimi yapar, nikâh kıyar.",
            "**Yerel yöneticiden bağımsızdır**; bu, **yargı bağımsızlığının** göstergesi sayılır.",
            "**Yerel çıkar ilişkisi kurmasını ve yozlaşmayı önlemek** için (genellikle 20 ay).",
            "**Yönetenler (askerî sınıf) vergi vermez**, **yönetilenler (reaya) vergi verir**.",
            "**Seyfiye** kılıç ehli (asker-yönetici), **ilmiye** ilim ehli (kadı, müderris, müftü), **kalemiye** bürokrasi (kâtip, defterdar, nişancı).",
            "**Din esasına** dayanır; her din topluluğu (Müslüman, Ortodoks, Ermeni, Yahudi) **kendi din ve hukukunda serbesttir**.",
            "**Medrese eğitimiyle ilmiye sınıfına geçmek** ve **devşirme yoluyla sadrazamlığa kadar yükselmek**.",
            "**Çıraklık: Şehzade Camii**, **kalfalık: Süleymaniye Camii**, **ustalık: Selimiye Camii (Edirne)**.",
            "**Devletin sosyal güvenlik ağıdır**: imaret yoksulu doyurur, darüşşifa ücretsiz tedavi eder, kervansaray yolcuyu barındırır; vakıf malları satılamadığı için kurumlar yüzyıllarca yaşar.",
        ],
    },
}
