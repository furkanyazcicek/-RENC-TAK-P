"""TYT Tarih — İnsanlığın İlk Dönemleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: İNSANLIĞIN İLK DÖNEMLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "İnsanlığın İlk Dönemleri",
    "alt_baslik": "Ham bilgi notu — tarih öncesi çağlar ve İlk Çağ uygarlıkları; "
                  "50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "İnsanlığın İlk Dönemleri",
        "kazanimlar": "9.2.1 — Tarih öncesi çağların özelliklerini açıklar. "
                      "9.2.2 — Yerleşik hayata geçişin sonuçlarını değerlendirir. "
                      "9.2.3 — İlk Çağ uygarlıklarının siyasi, sosyal ve kültürel "
                      "özelliklerini karşılaştırır.",
        "kapsam": "Tarih öncesi çağlar (Taş ve Maden devirleri), yerleşik hayata "
                  "geçiş, Mezopotamya, Mısır, Anadolu, İran, Hint, Çin, İbrani, "
                  "Fenike, Yunan ve Roma uygarlıkları, 50 analiz sorusu",
        "nasil": "Bu ünitede **her uygarlığın ilkleri** ve **ayırt edici özelliği** "
                 "sorulur. Uygarlıkları tek tek ezberlemek yerine **kim neyi ilk "
                 "yaptı** tablosunu kur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu üniteden gelen soru genellikle **\"ilk\" bilgileri** "
                    "ya da **coğrafya-uygarlık ilişkisi** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Tarih Öncesi Çağlar"},
        {"tur": "tuzak", "baslik": "Çağların Başlangıcı Her Yerde Aynı Değildir", "govde":
            "Tarih öncesi çağlar **her toplumda aynı anda başlayıp bitmemiştir**. "
            "Bir toplum Cilalı Taş Devri'ni yaşarken başka bir toplum Maden Devri'ne "
            "geçmiş olabilir. Ayrıca bazı toplumlar bir çağı **hiç yaşamadan atlamış** "
            "olabilir. Bu, **göç ve etkileşimle** açıklanır ve sınavda \"çağların "
            "evrensel olmadığı\" biçiminde sorulur."},
        {"tur": "tablo",
         "basliklar": ["Devir", "Öne çıkan gelişme", "Sonucu"],
         "satirlar": [
             ["**Kaba (Eski) Taş — Paleolitik**",
              "Avcılık ve toplayıcılık, mağara hayatı, **ateşin bulunması**",
              "**Göçebe** yaşam; en uzun süren devirdir"],
             ["**Yontma (Orta) Taş — Mezolitik**",
              "Ateşin denetim altına alınması, mikrolit araçlar",
              "**Geçiş devri**; iklim ısınmaya başladı"],
             ["**Cilalı (Yeni) Taş — Neolitik**",
              "**Tarım**, **hayvanların evcilleştirilmesi**, **yerleşik hayat**, "
              "çanak-çömlek, dokumacılık",
              "**Köyler ve ilk toplumsal düzen**; en köklü değişim"],
             ["**Maden Devri**",
              "Bakır → tunç → demir; **ilk şehir devletleri**",
              "**Ticaret** ve **iş bölümü** gelişti"],
         ],
         "oranlar": [0.26, 0.42, 0.32]},
        {"tur": "gorsel", "baslik": "Şema 1 — Yerleşik hayatın zincirleme sonuçları",
         "aciklama": "Neolitik Devrim, tarihin **en köklü kırılmasıdır**. Sorularda "
                     "\"aşağıdakilerden hangisi yerleşik hayata geçişin sonucudur\" "
                     "diye tam bu zincir sorulur.",
         "ciz": S.dikey_akis(
             ["Tarım başladı", "Yerleşik hayata geçildi", "Üretim fazlası oluştu",
              "İş bölümü doğdu", "Sınıflar ve devlet ortaya çıktı"],
             ["Buğday ve arpa ekildi, hayvanlar evcilleştirildi; **besin artık "
              "aranmıyor, üretiliyor**.",
              "Köyler kuruldu; **mimarlık, çanak-çömlek ve dokumacılık** gelişti.",
              "**Depolama** gerekti; ambar, mülkiyet ve **miras** kavramı doğdu.",
              "Herkesin avlanması gerekmedi; **zanaatkâr, tüccar, rahip, asker** "
              "meslekleri ayrıştı.",
              "Ürünün paylaşımı ve korunması için **yönetim ve hukuk** gerekti; "
              "**şehir devletleri** kuruldu."])},
        {"tur": "dikkat", "baslik": "Tarih Öncesinden Sınavda Çıkan Ayrıntılar", "ogeler": [
            "**Ateş Kaba Taş Devri'nde bulundu**, **Yontma Taş Devri'nde denetim "
            "altına alındı**.",
            "**Yerleşik hayat Cilalı Taş Devri'nde** başladı — Maden Devri'nde değil.",
            "**İlk kullanılan maden bakır**, **en son kullanılan demirdir**; tunç "
            "bakır ile kalayın alaşımıdır.",
            "**Çatalhöyük (Konya)** dünyanın **ilk şehir yerleşimlerinden** biridir; "
            "**Göbeklitepe (Şanlıurfa)** ise **tapınağın yerleşimden önce** "
            "kurulabildiğini göstermiştir.",
            "Tarih öncesi çağlar **yazı olmadığı için** yalnızca **arkeolojik "
            "kalıntılarla** aydınlatılır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Mezopotamya Uygarlıkları"},
        {"tur": "tablo",
         "basliklar": ["Uygarlık", "İlkleri ve özellikleri", "Kritik not"],
         "satirlar": [
             ["**Sümerler**",
              "**Yazıyı buldular (MÖ 3200, çivi yazısı)**, ilk yazılı hukuk "
              "(**Urgakina Kanunları**), ziggurat, ay yılı takvimi, Gılgamış Destanı",
              "**Tarih çağlarını başlatan** uygarlıktır"],
             ["**Akadlar**",
              "**Sargon** önderliğinde kuruldu; **tarihin ilk düzenli ordusu** ve "
              "**ilk imparatorluğu**",
              "Farklı kavimleri tek yönetimde topladı"],
             ["**Babiller**",
              "**Hammurabi Kanunları** (ilk anayasa niteliğinde), Babil'in Asma "
              "Bahçeleri, **teokrasiden mutlak krallığa** geçiş",
              "Kral yetkisini **Tanrı'dan değil güçten** aldı"],
             ["**Asurlular**",
              "**Ticaret kolonileri** (Anadolu'ya **yazıyı taşıdılar**), ilk "
              "kütüphane (Ninova), **acımasız ceza hukuku**",
              "Anadolu **tarih çağlarına** onlarla girdi"],
             ["**Elamlar**",
              "Susa merkezli; **maden işlemeciliği** ve çanak-çömlek",
              "Mezopotamya'nın doğu ucunda kaldılar"],
         ],
         "oranlar": [0.18, 0.50, 0.32]},
        {"tur": "taktik", "baslik": "Mezopotamya'yı Dört Sözcükle Tut", "govde":
            "**Sümer = yazı**, **Akad = ordu-imparatorluk**, **Babil = hukuk "
            "(Hammurabi)**, **Asur = ticaret-kütüphane**. Beşinci uygarlık Elam'dır "
            "ve **madencilikle** anılır. Bu dört anahtar sözcük, bu bölümden gelen "
            "soruların neredeyse tamamını karşılar."},
        {"tur": "tuzak", "baslik": "Urgakina ile Hammurabi Karışır", "govde":
            "**Urgakina Kanunları (Sümer)** tarihin **bilinen ilk yazılı kanunlarıdır** "
            "ama sınırlı ve dağınıktır. **Hammurabi Kanunları (Babil)** ise **ilk "
            "anayasa niteliğindeki** kapsamlı derlemedir ve **kısasa kısas** ilkesine "
            "dayanır. Yani \"ilk yazılı kanun\" Sümer, \"ilk kapsamlı-anayasal kanun\" "
            "Babil'dir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Mısır, Anadolu ve İran Uygarlıkları"},
        {"tur": "tablo",
         "basliklar": ["Uygarlık", "Öne çıkan özellikleri"],
         "satirlar": [
             ["**Mısır**",
              "**Hiyeroglif** yazısı, **papirüs**, **güneş yılı takvimi** "
              "(bugünkü takvimin atası), **mumyacılık → tıp ve anatomi**, "
              "**piramitler**, **firavun tanrı-kral**, Nil taşkınlarını ölçmek "
              "için **geometri**"],
             ["**Hititler**",
              "**Anal (yıllık)** adlı tarafsız yıllıklar → **ilk tarih yazıcılığı**, "
              "**Pankuş Meclisi** (kralı denetleyen meclis), **Kadeş Antlaşması** "
              "(tarihin **ilk yazılı antlaşması**, Mısır ile), **Tavananna** "
              "(yetkili kraliçe)"],
             ["**Frigler**",
              "**Tarım toplumu**; öküz kesmenin ve saban kırmanın cezası **ölüm**. "
              "**Tapates** adlı kilim dokumacılığı. Başkent **Gordion**"],
             ["**Lidyalılar**",
              "**Parayı buldular (MÖ 700, sikke)** → değiş tokuş ekonomisi bitti. "
              "**Kral Yolu** (Efes–Sus) ticareti geliştirdi. **Paralı askerlik** "
              "yüzünden yıkıldılar"],
             ["**Urartular**",
              "**Kale, su kanalı ve bendleri** ile ünlü. **Mezarları ev biçiminde** "
              "→ **öldükten sonra yaşama inanç**. Madencilikte ileri"],
             ["**İyonyalılar**",
              "**Şehir devletleri (polis)**. **Bilim ve felsefede** çığır: Thales, "
              "Pythagoras, Diyojen, Hipokrat. **Özgür düşünce ortamı** bilimi büyüttü"],
             ["**Persler (İran)**",
              "**Satraplık** (eyalet) sistemi, **posta ve casus teşkilatı**, "
              "**Zerdüştlük**. Ülkeyi denetleyen ilk düzenli **merkezî yönetim**"],
         ],
         "oranlar": [0.16, 0.84]},
        {"tur": "dikkat", "baslik": "Coğrafya Uygarlığı Nasıl Biçimlendirdi?", "ogeler": [
            "**Mısır çevresi çöllerle korunduğu için** kültürü **yerli ve özgün** "
            "kaldı; Mezopotamya ise **açık coğrafyada** olduğu için sürekli **istila "
            "ve etkileşim** yaşadı.",
            "**Nil'in düzenli taşması** Mısır'da **takvim, geometri ve ölçme** "
            "bilgisini doğurdu.",
            "**İyonya'nın liman kenti olması** doğu bilgisini batıya taşıdı; "
            "**bilimin gelişmesi** buna dayanır.",
            "**Lidya'nın Kral Yolu üzerinde olması** parayı ve ticareti doğurdu.",
            "**Frigya'nın verimli ovaları** tarımı kutsallaştırdı; cezalar bile "
            "tarıma göre düzenlendi.",
        ]},
        {"tur": "cozum",
         "baslik": "Uygarlık–Özellik Eşleştirme",
         "soru": "Aşağıdaki bilgilerden hareketle hangi uygarlıktan söz edildiğini "
                 "bulunuz.\n**I.** Mezarlarını ev biçiminde yapmışlardır.\n"
                 "**II.** Kralın yetkilerini sınırlayan bir meclis kurmuşlardır.\n"
                 "**III.** Değiş tokuş yerine madenî para kullanmışlardır.",
         "adimlar": [
             "**I.** Ev biçimli mezar → **ölümden sonra yaşama inanç** → **Urartular**.",
             "**II.** Kralı denetleyen meclis → **Pankuş Meclisi** → **Hititler**.",
             "**III.** İlk madenî para → **Lidyalılar**.",
         ],
         "sonuc": "**I: Urartu**, **II: Hitit**, **III: Lidya**. Bu tip sorularda "
                  "**tek bir ayırt edici ayrıntı** yeterlidir; tüm uygarlığı bilmek "
                  "gerekmez."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Doğu ve Akdeniz Uygarlıkları"},
        {"tur": "tablo",
         "basliklar": ["Uygarlık", "Öne çıkan özellikleri"],
         "satirlar": [
             ["**Hint**",
              "**Kast sistemi** (Brahman–Kşatriya–Vaişya–Şudra–Paryalar) → "
              "**kapalı sınıf yapısı millî birliği engelledi**. Brahmanizm, "
              "Budizm ve Hinduizm doğdu"],
             ["**Çin**",
              "**Kâğıt, matbaa, barut ve pusulanın** anavatanı. **Çin Seddi** "
              "Türk akınlarına karşı yapıldı. Konfüçyanizm ve Taoizm"],
             ["**İbraniler**",
              "**Tek tanrılı ilk din: Yahudilik**. Ancak **millî bir din** "
              "olduğu için yayılmadı. Kudüs merkez"],
             ["**Fenikeliler**",
              "**Alfabeyi buldular (22 harf)** → Yunan ve Latin alfabelerinin "
              "atası. **Deniz ticareti** ve **koloniler**. Cam ve boya sanayii"],
             ["**Yunan**",
              "**Polis (şehir devleti)**, **doğrudan demokrasi (Atina)**, "
              "**Olimpiyatlar**, felsefe (Sokrates, Platon, Aristo). "
              "**Siyasi birlik kurulamadı**"],
             ["**Roma**",
              "**On İki Levha Kanunları** → **bugünkü Avrupa hukukunun temeli**. "
              "**Latin alfabesi**, **Miladi takvim**, su kemerleri, **395'te "
              "ikiye ayrılma**"],
         ],
         "oranlar": [0.16, 0.84]},
        {"tur": "gorsel", "baslik": "Şema 2 — İlk Çağ'ın \"ilk\"leri",
         "aciklama": "Sınavda en çok sorulan bilgi kümesi budur. Her kartı "
                     "**uygarlık adıyla birlikte** ezberle.",
         "ciz": S.kartlar([
             ("Yazı", "**Sümerler**\nçivi yazısı, MÖ 3200"),
             ("Alfabe", "**Fenikeliler**\n22 harf"),
             ("Para", "**Lidyalılar**\nsikke, MÖ 700"),
             ("İlk yazılı kanun", "**Sümerler**\nUrgakina"),
             ("İlk anayasal kanun", "**Babiller**\nHammurabi"),
             ("İlk yazılı antlaşma", "**Hitit–Mısır**\nKadeş"),
             ("İlk tarih yazıcılığı", "**Hititler**\nAnallar"),
             ("İlk düzenli ordu", "**Akadlar**\nSargon"),
             ("Tek tanrılı ilk din", "**İbraniler**\nYahudilik"),
             ("Güneş takvimi", "**Mısırlılar**\nNil'e göre"),
             ("Doğrudan demokrasi", "**Atina**\nYunan"),
             ("Roma hukuku", "**On İki Levha**\nAvrupa'nın temeli"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "\"Tek Tanrılı İlk Din\" Sorusu", "govde":
            "**İbranilerin Yahudiliği tek tanrılı ilk dindir** ama **evrensel "
            "değildir**: yalnızca İbrani kavmine ait sayıldığı için **yayılmamıştır**. "
            "Sınavda \"tek tanrılı olmasına rağmen neden yayılmadı\" diye sorulursa "
            "cevap **millî din olmasıdır**. Mısır'daki **Aton inancı** ise kısa "
            "süreli bir deneme olarak kalmıştır."},
        {"tur": "dikkat", "baslik": "Kanun ve Yönetim Karşılaştırması", "ogeler": [
            "**Sümer**: teokratik; kral aynı zamanda **rahip (patesi)**.",
            "**Babil**: **mutlak krallık**; kral gücünü tanrıdan değil **ordudan** alır.",
            "**Hitit**: **meclisle sınırlı krallık** (Pankuş) — İlk Çağ'da nadirdir.",
            "**Pers**: **satraplıklarla yönetilen merkezî imparatorluk**; "
            "denetim için **posta ve casus** ağı.",
            "**Atina**: **doğrudan demokrasi**, ama kadınlar, köleler ve yabancılar "
            "**dışarıda**.",
            "**Roma**: **krallık → cumhuriyet → imparatorluk** sırasıyla üç yönetim "
            "biçimi yaşadı.",
        ]},
        {"tur": "cozum",
         "baslik": "Sonuç Çıkarma Sorusu",
         "soru": "\"Sümerlerde kral aynı zamanda baş rahipti; Babil'de ise kral "
                 "yetkisini ordudan ve fetihlerden alıyordu.\"\nBu bilgiye dayanarak "
                 "hangi sonuca ulaşılabilir?",
         "adimlar": [
             "Sümer'de yönetimin kaynağı **din** → **teokratik yönetim**.",
             "Babil'de yönetimin kaynağı **askerî güç** → **mutlak/laik nitelikli "
             "krallık**.",
             "İki bilgi yan yana konduğunda ortaya **yönetim anlayışında bir "
             "değişim** çıkar.",
         ],
         "sonuc": "**Mezopotamya'da zamanla dinî temelli yönetimden askerî temelli "
                  "yönetime geçilmiştir.** Bu tip sorularda **iki bilginin farkı** "
                  "cevabı verir; bilgilerin kendisi değil."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Yazı MÖ 3200'de Sümerlerde** bulundu; **tarih çağları** böyle başladı.",
            "**Yerleşik hayat Cilalı Taş Devri'nde** başladı.",
            "**İlk maden bakır**, **son maden demir**.",
            "**Urgakina ilk yazılı kanun**, **Hammurabi ilk anayasal kanun**.",
            "**Kadeş ilk yazılı antlaşma** (Hitit–Mısır).",
            "**Anallar ilk tarafsız tarih yazıcılığı** (Hitit).",
            "**Pankuş Meclisi** kralı denetler (Hitit).",
            "**Akadlar ilk düzenli orduyu** kurdu.",
            "**Asurlular Anadolu'ya yazıyı** taşıdı.",
            "**Mısır güneş takvimini** buldu; **mumyacılık tıbbı** geliştirdi.",
            "**Lidyalılar parayı**, **Fenikeliler alfabeyi** buldu.",
            "**İbranilerin Yahudiliği tek tanrılı ilk din** ama **millî**.",
            "**Kast sistemi Hint'te millî birliği engelledi**.",
            "**İyonya'da özgür düşünce bilimi** doğurdu.",
            "**On İki Levha Kanunları Avrupa hukukunun temelidir**.",
            "**Roma 395'te ikiye ayrıldı**; Batı 476'da yıkıldı.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu ünitede sorular **\"kim ilk yaptı\"** ve **\"coğrafya neyi doğurdu\"** "
            "biçiminde gelir. Cevaplarken uygarlığın adını yazmak yeterli değil; "
            "**neden o uygarlıkta ortaya çıktığını** da bir cümleyle yaz.",
        "satir_sayisi": 2,
        "sorular": [
            "Tarih öncesi çağların hangi kaynakla aydınlatıldığını yazınız.",
            "Çağların her toplumda aynı anda yaşanmamasının nedenini açıklayınız.",
            "Kaba Taş Devri'nin yaşam biçimini yazınız.",
            "Ateşin bulunduğu ve denetim altına alındığı devirleri yazınız.",
            "Cilalı Taş Devri'nde ortaya çıkan dört gelişmeyi yazınız.",
            "Yerleşik hayata geçişin zincirleme sonuçlarını sırayla yazınız.",
            "Üretim fazlasının hangi kavramları doğurduğunu açıklayınız.",
            "İş bölümünün toplumsal sınıfları nasıl doğurduğunu açıklayınız.",
            "İlk ve son kullanılan madenleri yazınız.",
            "Tuncun hangi iki madenden elde edildiğini yazınız.",
            "Çatalhöyük ve Göbeklitepe'nin önemini yazınız.",
            "Sümerlerin tarih açısından en önemli katkısını yazınız.",
            "Urgakina Kanunları'nın önemini yazınız.",
            "Ziggurat'ın işlevlerini yazınız.",
            "Akadların iki \"ilk\"ini yazınız.",
            "Hammurabi Kanunları'nın niteliğini ve dayandığı ilkeyi yazınız.",
            "Sümer ile Babil yönetim anlayışını karşılaştırınız.",
            "Asurluların Anadolu tarihi açısından önemini yazınız.",
            "Mezopotamya kültürünün sürekli etkilenmesinin coğrafi nedenini yazınız.",
            "Mısır kültürünün özgün kalmasının coğrafi nedenini yazınız.",
            "Mumyacılığın hangi bilimi geliştirdiğini açıklayınız.",
            "Nil'in taşmasının hangi bilimleri doğurduğunu yazınız.",
            "Mısır'da kullanılan yazı ve yazı malzemesini yazınız.",
            "Hititlerdeki Anal geleneğinin önemini yazınız.",
            "Pankuş Meclisi'nin işlevini yazınız.",
            "Kadeş Antlaşması'nın tarihteki yerini yazınız.",
            "Tavananna'nın kim olduğunu yazınız.",
            "Friglerde tarımın kutsallığını gösteren uygulamayı yazınız.",
            "Lidyalıların en önemli buluşunu ve sonucunu yazınız.",
            "Kral Yolu'nun iki ucunu ve işlevini yazınız.",
            "Lidya'nın yıkılış nedenini yazınız.",
            "Urartu mezarlarının biçiminin gösterdiği inancı yazınız.",
            "İyonya'da bilimin gelişme nedenini açıklayınız.",
            "Pers satraplık sisteminin amacını yazınız.",
            "Perslerin denetim için kurduğu iki teşkilatı yazınız.",
            "Hint kast sisteminin sonucunu açıklayınız.",
            "Çin'in dünyaya kazandırdığı dört buluşu yazınız.",
            "Çin Seddi'nin yapılma nedenini yazınız.",
            "İbranilerin dininin özelliğini ve yayılmama nedenini yazınız.",
            "Fenikelilerin alfabeyi bulmasının sonucunu yazınız.",
            "Fenikelilerin ticaret biçimini yazınız.",
            "Yunan şehir devletlerine verilen adı yazınız.",
            "Atina demokrasisinin dışında kalan grupları yazınız.",
            "Yunanistan'da siyasi birlik kurulamamasının nedenini yazınız.",
            "On İki Levha Kanunları'nın önemini yazınız.",
            "Roma'nın yaşadığı üç yönetim biçimini sırayla yazınız.",
            "Roma'nın 395'teki bölünmesini ve sonucunu yazınız.",
            "Latin alfabesinin kökenini yazınız.",
            "İlk Çağ'da yazının bulunmasının tarih açısından anlamını yazınız.",
            "İlk Çağ uygarlıklarının etkileşiminin en açık kanıtını bir örnekle yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Arkeolojik kalıntılarla** (kazı buluntuları); yazı olmadığı için yazılı kaynak yoktur.",
            "Toplumların **coğrafi koşulları, göç ve etkileşim düzeyi** farklıdır; bazı toplumlar bir devri **hiç yaşamadan atlamıştır**.",
            "**Avcılık ve toplayıcılık**, mağarada barınma, **göçebe** yaşam; en uzun süren devirdir.",
            "**Ateş Kaba Taş Devri'nde bulundu**, **Yontma Taş Devri'nde denetim altına alındı**.",
            "**Tarım**, **hayvanların evcilleştirilmesi**, **yerleşik hayat**, **çanak-çömlek ve dokumacılık**.",
            "Tarım → yerleşik hayat → üretim fazlası → iş bölümü → **toplumsal sınıflar ve devlet**.",
            "**Depolama, özel mülkiyet, miras** ve ürünün korunması için **yönetim** kavramlarını doğurdu.",
            "Herkesin besin üretmesi gerekmediği için **zanaatkâr, tüccar, rahip ve asker** meslekleri ayrıştı; bu ayrışma **sınıfları** oluşturdu.",
            "**İlk bakır**, **son demir**.",
            "**Bakır ve kalay** alaşımıdır.",
            "**Çatalhöyük** ilk şehir yerleşimlerinden biridir; **Göbeklitepe** tapınağın yerleşimden **önce** kurulabildiğini göstermiştir.",
            "**Yazıyı bulmaları (MÖ 3200, çivi yazısı)**; böylece **tarih çağları** başlamıştır.",
            "**Bilinen ilk yazılı kanunlardır**; hukukun sözlü gelenekten yazıya geçtiğini gösterir.",
            "**Tapınak, gözlemevi, ambar ve okul** olarak kullanılmıştır; hem dinî hem bilimsel bir yapıdır.",
            "**İlk düzenli ordu** ve **ilk imparatorluk** (Sargon önderliğinde).",
            "**İlk anayasa niteliğinde** kapsamlı kanunlardır; **kısasa kısas** ilkesine dayanır.",
            "**Sümer teokratiktir** (kral aynı zamanda rahiptir); **Babil'de kral yetkisini askerî güçten** alır — yönetim dinden ayrışmıştır.",
            "**Ticaret kolonileriyle Anadolu'ya yazıyı taşıdılar**; Anadolu böylece **tarih çağlarına** girdi.",
            "**Açık ve geçiş coğrafyasında** olması sürekli **istila ve göç** almasına, dolayısıyla sürekli etkileşime yol açtı.",
            "**Çevresinin çöllerle korunması**, dış etkileri sınırladı; kültür **yerli ve özgün** kaldı.",
            "**Tıp ve anatomiyi**; ceset üzerinde çalışıldığı için insan vücudu tanındı.",
            "Toprakların yeniden ölçülmesi **geometriyi**, taşma zamanının hesaplanması **astronomi ve takvimi** doğurdu.",
            "**Hiyeroglif** yazısı, **papirüs** malzemesi.",
            "**Tarafsız yıllıklar** tutulmuştur; **ilk tarih yazıcılığı** örneğidir çünkü yenilgiler de yazılmıştır.",
            "**Kralın yetkilerini denetleyen** meclistir; İlk Çağ'da kral yetkisinin sınırlanması nadirdir.",
            "**Tarihin ilk yazılı antlaşmasıdır** (Hitit–Mısır).",
            "**Yetkili Hitit kraliçesidir**; yönetimde söz sahibidir, kadının konumunu gösterir.",
            "**Öküz kesenin ve saban kıranın cezası ölümdür**; tarım kutsal sayılmıştır.",
            "**Madenî parayı (sikke)** bulmaları; **değiş tokuş ekonomisi sona ermiş**, ticaret hızlanmıştır.",
            "**Efes ile Sus** arasındadır; Anadolu–Mezopotamya **ticaretini** geliştirmiştir.",
            "**Paralı askerlik** sistemi; ordu millî olmadığı için Pers saldırısına dayanamadılar.",
            "**Ev biçimindedir**; **öldükten sonra yaşama inandıklarını** gösterir.",
            "**Liman kenti olmaları** doğu bilgisini getirdi; **özgür düşünce ortamı** ve şehir devletlerinin baskısız yapısı bilimi büyüttü.",
            "Geniş ülkeyi **eyaletlere bölerek merkezden denetlemek**.",
            "**Posta teşkilatı** ve **casus (kralın gözü kulağı) teşkilatı**.",
            "**Kapalı sınıf yapısı** sınıflar arası geçişi engelledi; **millî birlik** kurulamadı ve ülke kolay istila edildi.",
            "**Kâğıt, matbaa, barut ve pusula**.",
            "**Türk (Hun) akınlarına** karşı korunmak.",
            "**Tek tanrılı ilk dindir (Yahudilik)**; **millî bir din** sayıldığı için başka topluluklara yayılmamıştır.",
            "**22 harfli alfabe** Yunan ve Latin alfabelerinin atası oldu; yazı **kolaylaşıp yaygınlaştı**.",
            "**Deniz ticareti** ve Akdeniz kıyılarında **koloniler** kurmak.",
            "**Polis**.",
            "**Kadınlar, köleler ve yabancılar** yönetime katılamazdı.",
            "**Şehir devletlerinin bağımsızlığı** ve aralarındaki rekabet; ayrıca **dağlık coğrafya** birleşmeyi zorlaştırdı.",
            "Roma'nın **ilk yazılı kanunlarıdır**; **bugünkü Avrupa hukukunun temelini** oluşturur.",
            "**Krallık → cumhuriyet → imparatorluk**.",
            "**Batı ve Doğu Roma** olarak ayrıldı; **Batı Roma 476'da yıkıldı** ve İlk Çağ'ın sonuna yaklaşıldı.",
            "**Fenike alfabesine** dayanır; Yunan alfabesi üzerinden Latinceye geçmiştir.",
            "Olaylar **kayıt altına alınabilir** hâle geldi; **tarih öncesi çağlar sona erdi**, tarih çağları başladı.",
            "**Fenike alfabesinin Yunan ve Latin alfabelerine dönüşmesi** (ya da Asurluların Anadolu'ya yazıyı taşıması) uygarlıkların birbirinden öğrendiğini kanıtlar.",
        ],
    },
}
