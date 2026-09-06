"""TYT Biyoloji — Hücre (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT BİYOLOJİ: HÜCRE",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Biyoloji",
    "baslik": "Hücre",
    "alt_baslik": "Ham bilgi notu — hücre zarı ve madde geçişleri, organeller, "
                  "çekirdek; osmoz grafikleri ve 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Biyoloji",
        "konu": "Hücre",
        "kazanimlar": "9.2.1.1 — Hücrenin yapı ve görevlerini açıklar. "
                      "9.2.1.2 — Hücre zarından madde geçişlerini analiz eder.",
        "kapsam": "Hücre teorisi, prokaryot-ökaryot, zar yapısı, pasif ve aktif "
                  "taşıma, osmoz, organeller, çekirdek, bitki-hayvan farkı, 50 soru",
        "nasil": "Madde geçişleri bölümü bu konunun **kalbi**dir; oradaki tabloyu "
                 "ezberleyene kadar bırakma. Organelleri görev-eşleşmesi olarak çalış.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de hücreden her yıl soru çıkar; en çok da **madde geçişleri** "
                    "ve **osmoz** sorulur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Hücrenin Keşfi ve Hücre Teorisi"},
        {"tur": "maddeler", "ogeler": [
            "**Robert Hooke (1665)**: Mantar meşesinden aldığı ince kesitte boş "
            "odacıklar gördü, bunlara **cellula (hücre)** adını verdi. Gördüğü "
            "aslında **ölü hücrelerin çeperi**ydi.",
            "**Anton van Leeuwenhoek**: Kendi yaptığı mikroskopla **ilk canlı "
            "hücreleri** (bakteri, sperm, alyuvar) gözledi.",
            "**Robert Brown**: Bitki hücresinde **çekirdeği** buldu.",
            "**Schleiden ve Schwann**: Bütün bitki ve hayvanların hücrelerden "
            "oluştuğunu ileri sürdü.",
            "**Rudolf Virchow**: 'Her hücre, kendinden önceki bir hücreden oluşur' "
            "ilkesini ekledi — kendiliğinden oluş görüşü böylece çürüdü.",
        ]},
        {"tur": "ezber", "baslik": "Hücre Teorisinin Üç Maddesi", "ogeler": [
            "Bütün canlılar bir ya da daha çok **hücreden** oluşur.",
            "Hücre, canlıların **yapı ve işlev** bakımından en küçük birimidir.",
            "Her hücre, **kendinden önceki bir hücrenin bölünmesiyle** oluşur.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Prokaryot ve Ökaryot Hücre"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki hücre tipinin karşılaştırması",
         "aciklama": "Tek ayırt edici ölçüt: **zarla çevrili çekirdek var mı?** "
                     "Ribozom **her ikisinde de** bulunur — bu ÖSYM'nin favori tuzağıdır.",
         "ciz": S.karsilastirma(
             "Prokaryot",
             ["**Çekirdek zarı yok**", "DNA sitoplazmada, halkasal",
              "**Zarlı organel yok**", "Ribozom: **70S**",
              "Genelde küçük (1-10 mikrometre)", "Bakteri, arke"],
             "Ökaryot",
             ["**Çekirdek zarı var**", "DNA çekirdekte, doğrusal",
              "**Zarlı organeller var**", "Ribozom: **80S** (sitoplazmada)",
              "Genelde büyük (10-100 mikrometre)", "Protista, mantar, bitki, hayvan"],
             "Ortak",
             ["Hücre zarı", "Sitoplazma", "**Ribozom**", "DNA ve RNA",
              "Enzim sistemi", "ATP üretimi"])},
        {"tur": "dikkat", "baslik": "Prokaryotta Zarlı Organel Yok — Ama Organel Var",
         "govde": "Prokaryotta bulunan tek organel **ribozom**dur ve ribozomun zarı "
                  "yoktur. 'Prokaryotta organel yoktur' ifadesi **yanlıştır**; "
                  "doğrusu **'zarla çevrili organel yoktur'**dur."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Bakteride oksijenli solunum, mitokondri olmadan **hücre zarı "
            "kıvrımlarında (mezozom)** gerçekleşir.",
            "Fotosentez yapan bakterilerde (siyanobakteri) kloroplast yoktur; "
            "klorofil **sitoplazmada dağınık** hâlde bulunur.",
            "Bakteride ayrıca **plazmit** (küçük halkasal DNA), **kapsül** ve "
            "**kamçı** bulunabilir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Hücre Zarı"},
        {"tur": "tanim", "kavram": "Akıcı mozaik zar modeli",
         "aciklama": "Zar, **hareketli bir fosfolipit çift tabakası** ve bunun içine "
                     "gömülü, yer değiştirebilen **proteinlerden** oluşur. 'Akıcı' "
                     "hareketliliği, 'mozaik' protein dağılımının düzensizliğini anlatır."},
        {"tur": "gorsel", "baslik": "Şema 2 — Hücre zarının katmanları",
         "aciklama": "Zar **seçici geçirgendir**: neyin gireceğine yalnızca molekülün "
                     "büyüklüğü değil, **yağda çözünürlüğü ve yükü** de karar verir.",
         "ciz": S.katmanlar([
             ("Glikolipit ve glikoprotein",
              "Hücrenin kimliği; doku tanınması, bağışıklık ve hormon algısı burada"),
             ("Fosfolipit çift tabaka",
              "Yağda çözünenler (O2, CO2, alkol, A-D-E-K vitaminleri) doğrudan geçer"),
             ("Kanal ve taşıyıcı proteinler",
              "İyonlar, glikoz, aminoasit gibi suda çözünenler buradan geçer"),
             ("Kolesterol (yalnız hayvan hücresinde)",
              "Zarın akıcılığını dengeler; aşırı katılaşmayı ve gevşemeyi önler"),
         ], "ZAR KATMANI")},
        {"tur": "maddeler", "ogeler": [
            "**Yapısında en fazla protein** bulunur (kütlece); **en fazla molekül "
            "sayısı** ise fosfolipittir. Bu ayrım sorulur.",
            "**Canlı ve seçici geçirgendir**. Ölü hücrenin zarı **tam geçirgen** "
            "hâle gelir — seçiciliğini kaybeder.",
            "**Hücre duvarı** (bitki, mantar, bakteri) **cansız** ve **tam "
            "geçirgendir**; koruma ve destek sağlar, seçicilik yapmaz.",
        ]},
        {"tur": "tuzak", "baslik": "Seçici Geçirgen ≠ Tam Geçirgen", "govde":
            "**Hücre zarı** canlıdır ve **seçici geçirgendir** — neyin geçeceğine "
            "karar verir. **Hücre duvarı** cansızdır ve **tam geçirgendir** — her "
            "şeyi geçirir. Bitki hücresinde suyun içeri girmesini duvar değil, "
            "**zar** düzenler."},

        {"tur": "altbolum", "baslik": "A. Pasif Taşıma — ATP Harcanmaz"},
        {"tur": "maddeler", "ogeler": [
            "**Difüzyon (yayılma)**: Molekülün **çoktan aza** doğru, kendi "
            "kinetik enerjisiyle geçmesidir. O2, CO2, alkol, küçük yağ asitleri.",
            "**Osmoz**: **Suyun** az yoğun ortamdan çok yoğun ortama, yarı geçirgen "
            "zardan geçmesidir. Su **kendi yoğunluğunun çok olduğu** yerden aza gider.",
            "**Kolaylaştırılmış difüzyon**: Yine çoktan aza; ama molekül tek başına "
            "geçemediği için **taşıyıcı protein** kullanır. ATP **harcanmaz**. "
            "Glikoz, galaktoz, aminoasitler. Difüzyondan **daha hızlıdır**.",
            "Difüzyon hızını artıran etkenler: **yoğunluk farkının artması**, "
            "**sıcaklığın artması**, **molekülün küçülmesi**, **yüzey alanının "
            "artması**, **zarın incelmesi**.",
        ]},
        {"tur": "altbolum", "baslik": "B. Aktif Taşıma — ATP Harcanır"},
        {"tur": "maddeler", "ogeler": [
            "Molekül **azdan çoğa**, yani **yoğunluk gradyanına ters** yönde "
            "taşınır. Bu yüzden **enerji (ATP)** ve **taşıyıcı protein** şarttır.",
            "**Yalnızca canlı hücrede** görülür; ölü hücrede aktif taşıma olmaz.",
            "Örnek: **sodyum-potasyum pompası** (sinir hücresi), bağırsaktan "
            "glikozun tamamen emilmesi, bitki kökünün topraktan mineral alması.",
        ]},
        {"tur": "altbolum", "baslik": "C. Endositoz ve Ekzositoz — Büyük Moleküller"},
        {"tur": "maddeler", "ogeler": [
            "**Endositoz**: Zar içeri çökerek büyük maddeyi **koful içinde** alır. "
            "**Fagositoz** (katı madde — akyuvarın bakteri yutması) ve **pinositoz** "
            "(sıvı madde) diye ikiye ayrılır. **ATP harcanır**, zar **azalır**.",
            "**Ekzositoz**: Koful zara kaynaşır, içerik dışarı boşaltılır. Salgı "
            "üretimi ve atık atma. **ATP harcanır**, zar **artar**.",
            "**Hücre duvarı olan hücrelerde endositoz ve ekzositoz görülmez** — "
            "bitki, mantar ve bakteride duvar buna izin vermez. (Bitkide sınırlı "
            "ekzositoz istisnası dışında TYT için kural budur.)",
        ]},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Difüzyon", "Kolaylaştırılmış Dif.", "Aktif Taşıma"],
         "oranlar": [0.22, 0.24, 0.26, 0.28],
         "satirlar": [
             ["Yön", "Çoktan aza", "Çoktan aza", "**Azdan çoğa**"],
             ["ATP", "Harcanmaz", "Harcanmaz", "**Harcanır**"],
             ["Taşıyıcı protein", "Gerekmez", "**Gerekir**", "**Gerekir**"],
             ["Ölü hücrede", "Olur", "Olmaz", "Olmaz"],
             ["Örnek", "O2, CO2", "Glikoz, aminoasit", "Na-K pompası"],
         ]},
        {"tur": "taktik", "baslik": "Hangi Taşıma Olduğunu Bulma", "govde":
            "Soruda verilen üç bilgiye sırayla bak:",
         "ogeler": [
             "**Yön azdan çoğa** ise → kesinlikle **aktif taşıma**.",
             "Yön **çoktan aza** ve **protein kullanılıyorsa** → kolaylaştırılmış difüzyon.",
             "Yön **çoktan aza** ve **protein yoksa** → basit difüzyon.",
             "Madde **çok büyükse** (protein, bakteri) → endositoz/ekzositoz.",
             "Grafikte **doyma (plato)** varsa → taşıyıcı protein kullanılıyor demektir; "
             "yani basit difüzyon **değildir**.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Osmoz ve Hücrenin Ortamla İlişkisi"},
        {"tur": "tablo",
         "basliklar": ["Ortam", "Tanım", "Hayvan Hücresi", "Bitki Hücresi"],
         "oranlar": [0.18, 0.30, 0.26, 0.26],
         "satirlar": [
             ["**Hipotonik**", "Dış ortam **daha az** yoğun; su **içeri** girer",
              "Şişer, **patlar** (hemoliz)", "Şişer, **turgor** olur — patlamaz"],
             ["**İzotonik**", "İç ve dış yoğunluk **eşit**; net su geçişi yok",
              "Normal görünüm", "Gevşek (flask) durum"],
             ["**Hipertonik**", "Dış ortam **daha** yoğun; su **dışarı** çıkar",
              "Büzüşür (krenasyon)", "**Plazmoliz** — sitoplazma duvardan ayrılır"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "**Turgor**: Bitki hücresinin su alıp gerginleşmesi. Bitkinin dik "
            "durmasını sağlar; **hücre duvarı** patlamayı önler.",
            "**Plazmoliz**: Su kaybı sonucu sitoplazmanın duvardan ayrılması. "
            "**Geri dönüşümlüdür** — hücre hipotonik ortama konursa **deplazmoliz** "
            "olur ve eski hâline döner.",
            "Plazmoliz **çok ilerlerse** hücre ölür; bu noktadan sonra deplazmoliz "
            "gerçekleşmez.",
            "**Osmotik basınç**: Çözeltinin su çekme gücü. Yoğunluk arttıkça artar.",
            "**Turgor basıncı**: Suyun hücre duvarına yaptığı basınç.",
            "**Emme kuvveti = Osmotik basınç − Turgor basıncı.** Emme kuvveti "
            "yüksek olan hücre suyu **çeker**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Hipotonik ortamda su alımı",
         "aciklama": "Hayvan hücresinde su alımı **patlamayla** biter; bitki "
                     "hücresinde **hücre duvarı** basınç kurarak su alımını durdurur.",
         "ciz": S.akis(
             ["Hipotonik ortam", "Su içeri girer", "Hücre şişer", "Sonuç"],
             ["dış ortam seyreltik", "osmozla", "hacim artar",
              "hayvan: patlar\nbitki: turgor"])},
        {"tur": "cikmis", "baslik": "Salatalığa tuz dökülmesi", "govde":
            "Salatalığa tuz döküldüğünde dış ortam **hipertonik** olur, hücreler "
            "su kaybeder ve **plazmoliz** olur; salatalık suyunu bırakır ve pörsür. "
            "Turşu ve reçelin bozulmaması da aynı ilkedir: yoğun tuz/şeker ortamı "
            "mikropları **plazmolize** uğratır."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Sitoplazma ve Organeller"},
        {"tur": "gorsel", "baslik": "Şema 4 — Organellerin görev haritası",
         "aciklama": "Organelleri **ne yaptıklarıyla** eşleştirerek çalış; şekil "
                     "ezberi TYT'de işe yaramaz.",
         "ciz": S.kartlar([
             ("Ribozom", "protein sentezi\nzarsız · her hücrede"),
             ("Mitokondri", "oksijenli solunum\nçift zarlı · kendi DNA'sı"),
             ("Kloroplast", "fotosentez\nçift zarlı · kendi DNA'sı"),
             ("Endoplazmik retikulum", "taşıma ve sentez\ngranüllü / düz"),
             ("Golgi cisimciği", "paketleme ve salgı\nlizozomu üretir"),
             ("Lizozom", "hücre içi sindirim\ntek zarlı · hidrolaz"),
             ("Koful", "depolama ve boşaltım\nbitkide büyük"),
             ("Sentrozom", "iğ ipliği üretir\nzarsız · bölünme"),
             ("Peroksizom", "zararlı maddeyi parçalar\nkatalaz enzimi"),
         ], sutun=3)},
        {"tur": "maddeler", "ogeler": [
            "**Ribozom**: Zarsızdır, **bütün hücrelerde** bulunur. Protein sentezler. "
            "Prokaryotta 70S, ökaryotun sitoplazmasında 80S; **mitokondri ve "
            "kloroplastta 70S** ribozom vardır.",
            "**Mitokondri**: **Çift zarlıdır**; iç zarın kıvrımlarına **krista**, iç "
            "boşluğuna **matriks** denir. Oksijenli solunumun Krebs ve ETS basamakları "
            "burada geçer. **Kendi DNA'sı ve ribozomu** vardır, **kendini eşleyebilir**.",
            "**Kloroplast**: Çift zarlıdır. İçindeki yassı keseciklere **tilakoit**, "
            "üst üste dizilişine **granum**, sıvı kısmına **stroma** denir. Işık "
            "evresi granumda, karanlık evre stromada geçer. Kendi DNA'sı vardır.",
            "**Endoplazmik retikulum (ER)**: **Granüllü ER** üzerinde ribozom taşır, "
            "**protein** sentezinde görev alır. **Düz ER** ribozomsuzdur; **yağ ve "
            "steroit** sentezler, karaciğerde **zehir etkisizleştirir**.",
            "**Golgi cisimciği**: Gelen maddeyi işler, paketler, salgı kesesi hâline "
            "getirir. **Lizozomu üretir**. Salgı yapan hücrelerde (pankreas, tükürük "
            "bezi) **bol** bulunur.",
            "**Lizozom**: Tek zarlıdır, **sindirim enzimleri (hidrolaz)** taşır. "
            "Yaşlanmış organelleri ve hücre içine alınan besini parçalar. Zarı "
            "yırtılırsa hücre kendini sindirir — buna **otoliz** denir. "
            "**Bitki hücresinde bulunmaz** (görevini koful üstlenir).",
            "**Koful**: Depolama, boşaltım ve su dengesi. **Bitki hücresinde bir "
            "tane, büyük ve merkezî**; hayvan hücresinde **küçük ve çok sayıda**. "
            "Tatlı suda yaşayan tek hücrelilerde **kontraktil koful** fazla suyu atar.",
            "**Sentrozom**: Zarsızdır. **İğ ipliklerini** oluşturur, bölünmede "
            "kromozomların çekilmesini sağlar. **Hayvan hücresinde ve ilkel "
            "bitkilerde** bulunur; **gelişmiş bitkilerde yoktur**.",
            "**Peroksizom**: Hidrojen peroksit gibi zararlı maddeleri **katalaz** "
            "enzimiyle parçalar. Karaciğer ve böbrekte bol bulunur.",
        ]},
        {"tur": "tuzak", "baslik": "Mitokondri Bitkide de Vardır", "govde":
            "Sık yapılan hata: 'Bitkide kloroplast var, o hâlde mitokondri yoktur.' "
            "**Yanlış.** Bitki de solunum yapar, bu yüzden **mitokondri taşır**. "
            "Kloroplast fotosentez için ek olarak bulunur. Kök hücresi gibi ışık "
            "görmeyen bitki hücrelerinde ise kloroplast **bulunmayabilir**."},
        {"tur": "tablo",
         "basliklar": ["Organel", "Zar Durumu", "Bulunduğu Hücre"],
         "oranlar": [0.30, 0.28, 0.42],
         "satirlar": [
             ["Ribozom", "**Zarsız**", "Bütün hücreler (prokaryot dâhil)"],
             ["Sentrozom", "**Zarsız**", "Hayvan hücresi, ilkel bitkiler"],
             ["Lizozom", "**Tek zarlı**", "Hayvan hücresi (bitkide yok)"],
             ["Koful", "**Tek zarlı**", "Bitki (büyük), hayvan (küçük)"],
             ["ER, Golgi, Peroksizom", "**Tek zarlı**", "Bütün ökaryotlar"],
             ["Mitokondri", "**Çift zarlı**", "Bütün ökaryotlar (bitki dâhil)"],
             ["Kloroplast", "**Çift zarlı**", "Yalnızca bitki ve alg"],
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Çekirdek"},
        {"tur": "maddeler", "ogeler": [
            "**Çekirdek zarı**: Çift katlıdır ve üzerinde **por (delik)** bulunur. "
            "Porlar sayesinde mRNA dışarı, enzimler içeri geçer. Çekirdek zarı "
            "**endoplazmik retikulumla bağlantılıdır**.",
            "**Çekirdek plazması (nükleoplazma)**: Çekirdeğin sıvı kısmı.",
            "**Çekirdekçik (nükleolus)**: **rRNA** üretilir, **ribozomun yapısı** "
            "burada hazırlanır. Zarı yoktur. Bölünme sırasında **kaybolur**.",
            "**Kromatin iplik**: Bölünme dışındaki dönemde DNA'nın **açık, ince** "
            "hâlidir. Bu hâlde DNA **okunabilir** ve **eşlenebilir**.",
            "**Kromozom**: Bölünme sırasında kromatinin **kısalıp kalınlaşmış** "
            "hâli. Bu hâlde DNA okunamaz ama **taşınması kolaydır**.",
            "Kromozom sayısı canlının gelişmişliğini **göstermez**. İnsan 46, "
            "patates 48, eğrelti otu 500'ün üzerinde kromozom taşır.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 5 — DNA'dan kromozoma paketlenme",
         "ciz": S.akis(
             ["DNA", "Nükleozom", "Kromatin iplik", "Kromozom"],
             ["çift sarmal", "histon proteini\netrafına sarılır",
              "boncuk dizisi", "kısalıp kalınlaşır"])},
        {"tur": "dikkat", "baslik": "Kromatin ve Kromozom Aynı Maddedir", "govde":
            "İkisi de **aynı DNA**dır; yalnızca **paketlenme derecesi** farklıdır. "
            "'Kromozom kromatinden oluşur' demek doğrudur; 'kromozom ve kromatin "
            "farklı moleküllerdir' demek yanlıştır."},

        # ==========================================================
        {"tur": "bolum", "numara": 7, "baslik": "Bitki ve Hayvan Hücresi Farkları"},
        {"tur": "gorsel", "baslik": "Şema 6 — İki hücrenin karşılaştırması",
         "ciz": S.karsilastirma(
             "Bitki Hücresi",
             ["**Hücre duvarı** var (selüloz)", "**Kloroplast** var",
              "**Büyük, merkezî koful**", "**Lizozom yok**",
              "Gelişmişlerde **sentrozom yok**", "Bölünmede **ara lamel** oluşur",
              "Depo maddesi **nişasta**", "Köşeli görünüm"],
             "Hayvan Hücresi",
             ["Hücre duvarı **yok**", "Kloroplast **yok**",
              "**Küçük, çok sayıda koful**", "**Lizozom var**",
              "**Sentrozom var**", "Bölünmede **boğumlanma** olur",
              "Depo maddesi **glikojen**", "Yuvarlak görünüm"],
             "Ortak",
             ["Hücre zarı", "Sitoplazma", "**Mitokondri**", "Ribozom",
              "ER ve Golgi", "Çekirdek ve DNA"])},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Ribozom **her hücrede** var; zarsızdır.",
            "Zar **seçici geçirgen ve canlı**; duvar **tam geçirgen ve cansız**.",
            "Aktif taşımanın tek işareti: **azdan çoğa**.",
            "Grafikte **plato** varsa taşıyıcı protein kullanılıyor demektir.",
            "Bitki hücresi hipotonik ortamda **patlamaz**, turgora geçer.",
            "Bitkide **lizozom yok**, gelişmişlerde **sentrozom yok**; ama "
            "**mitokondri var**.",
            "Mitokondri ve kloroplastta **kendi DNA'sı ve 70S ribozomu** vardır.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 8, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde soruların yarısı **ayırt etme**, yarısı **yorum** "
            "sorusudur. Cevabı yazarken 'hangi ölçüte baktım' sorusunu da yanıtla. "
            "Osmoz sorularında ortamı kâğıda çiz ve suyun yönünü okla göster.",
        "satir_sayisi": 2,
        "sorular": [
            "Robert Hooke'un gördüğü yapının aslında ne olduğunu ve neden 'hücre' dediğini yazınız.",
            "Virchow'un hücre teorisine kattığı madde, hangi eski görüşü çürütmüştür?",
            "Prokaryot ve ökaryot hücreyi ayıran **tek** temel ölçüt nedir?",
            "'Prokaryotta organel yoktur' ifadesindeki hatayı düzeltiniz.",
            "Bakteri mitokondri taşımadığı hâlde oksijenli solunumu nasıl yapar?",
            "Siyanobakteri kloroplast taşımadan fotosentezi nasıl gerçekleştirir?",
            "Akıcı mozaik zar modelindeki 'akıcı' ve 'mozaik' sözcükleri neyi anlatır?",
            "Hücre zarında kütlece en çok bulunan madde ile sayıca en çok bulunan madde farklı mıdır? Açıklayınız.",
            "Hücre zarı ile hücre duvarını geçirgenlik ve canlılık ölçütlerine göre karşılaştırınız.",
            "Ölü bir hücrenin zarının tam geçirgen hâle gelmesi ne anlama gelir?",
            "O2 ve CO2'nin zardan doğrudan geçebilmesinin nedeni nedir?",
            "Glikozun zardan geçerken taşıyıcı proteine ihtiyaç duymasının nedeni nedir?",
            "Kolaylaştırılmış difüzyon ile aktif taşımanın ortak ve farklı yönlerini yazınız.",
            "Difüzyon hızını artıran dört etken yazınız.",
            "Bir maddenin taşınmasında ATP harcandığı nasıl anlaşılır?",
            "Sodyum-potasyum pompasının hangi taşıma türüne örnek olduğunu ve neden ATP gerektirdiğini açıklayınız.",
            "Bağırsaktan glikozun tamamının emilebilmesi için neden aktif taşıma gerekir?",
            "Madde geçiş grafiğinde plato oluşması hangi mekanizmayı işaret eder?",
            "Endositoz ve ekzositozun zar yüzeyine etkilerini karşılaştırınız.",
            "Fagositoz ile pinositoz arasındaki farkı örnekle yazınız.",
            "Hücre duvarı olan hücrelerde endositoz görülmemesinin nedeni nedir?",
            "Osmozda suyun hangi yönde hareket ettiğini yoğunluk üzerinden tanımlayınız.",
            "Alyuvar saf suya konursa ne olur? Aynı ortamda bitki hücresine ne olur?",
            "Bitki hücresinin hipotonik ortamda patlamamasının nedeni nedir?",
            "Plazmoliz ve deplazmoliz kavramlarını sırasıyla açıklayınız.",
            "Plazmolizin her zaman geri dönüşümlü olmamasının nedeni nedir?",
            "Emme kuvveti formülünü yazınız ve hangi hücrenin su çekeceğini açıklayınız.",
            "Turşunun bozulmamasını hücre düzeyinde açıklayınız.",
            "Salatalığa tuz döküldüğünde su bırakmasının nedeni nedir?",
            "Kontraktil kofulun tatlı suda yaşayan tek hücrelilerde bulunmasının nedeni nedir?",
            "Ribozomun bütün hücrelerde bulunmasının anlamı nedir?",
            "Mitokondrinin kendi DNA'sı ve ribozomu olmasının hangi kurama dayanak oluşturduğunu yazınız.",
            "Krista ve matriks kavramlarını mitokondri üzerinde yerleriyle açıklayınız.",
            "Granum ve stroma kloroplastta hangi evrelere ev sahipliği yapar?",
            "Granüllü ve düz endoplazmik retikulumun görev farkını yazınız.",
            "Karaciğer hücresinde düz ER'nin bol olmasının nedeni nedir?",
            "Golgi cisimciğinin bol olduğu iki hücre örneği veriniz ve nedenini açıklayınız.",
            "Lizozom zarının yırtılması hücrede neye yol açar? Bu olayın adı nedir?",
            "Bitki hücresinde lizozom bulunmamasına rağmen hücre içi sindirim nasıl yapılır?",
            "Sentrozomun görevini ve hangi hücrelerde bulunmadığını yazınız.",
            "Peroksizomun karaciğerde bol bulunmasının nedeni nedir?",
            "Çekirdek zarındaki porların işlevi nedir?",
            "Çekirdekçikte hangi molekül üretilir, hangi organelin yapımına katkı sağlar?",
            "Kromatin ve kromozomun aynı madde olduğunu paketlenme üzerinden açıklayınız.",
            "DNA hangi hâldeyken okunabilir ve eşlenebilir? Nedenini yazınız.",
            "Kromozom sayısının gelişmişlik göstergesi olmadığını bir örnekle kanıtlayınız.",
            "Bitki ve hayvan hücresinin sitokinez (sitoplazma bölünmesi) farkını yazınız.",
            "Kök hücresinde kloroplast bulunmamasının nedeni nedir?",
            "'Bitki hücresinde mitokondri yoktur' ifadesindeki hatayı düzeltiniz.",
            "Bir hücrede kloroplast ve büyük merkezî koful görülüyor, lizozom görülmüyorsa bu hücre hangi canlıya aittir?",
        ],
        "cevap_baslik": {"numara": 9, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Gördüğü, mantar meşesindeki **ölü hücrelerin çeperleriydi**. Boş odacıklar manastırdaki küçük odalara benzediği için 'cellula' dedi.",
            "'Her hücre kendinden önceki bir hücreden oluşur' maddesi, canlıların cansız maddeden kendiliğinden oluştuğu görüşünü (**abiyogenez**) çürüttü.",
            "**Zarla çevrili gerçek bir çekirdeğin bulunup bulunmaması.** Buna bağlı olarak zarlı organeller de ökaryotta bulunur.",
            "Doğrusu: 'Prokaryotta **zarla çevrili** organel yoktur.' **Ribozom** prokaryotta da bulunur, çünkü zarsızdır.",
            "Oksijenli solunumun zara bağlı basamakları, **hücre zarının içe kıvrımlarında (mezozom)** gerçekleşir.",
            "Klorofil pigmenti **sitoplazmada dağınık** hâlde ya da zar kıvrımlarında bulunur; ayrı bir organele gerek yoktur.",
            "**Akıcı**: fosfolipit ve proteinler yerinde sabit değil, yanal olarak hareket eder. **Mozaik**: proteinler zar boyunca düzensiz dağılmıştır.",
            "**Evet, farklıdır.** Kütlece en çok **protein**, molekül sayısı bakımından en çok **fosfolipit** bulunur.",
            "Zar **canlı** ve **seçici geçirgendir**; duvar **cansız** ve **tam geçirgendir**. Seçme kararını yalnızca zar verir.",
            "Zar seçiciliğini kaybetmiştir; artık hangi maddenin gireceğine karar veremez, her şey serbestçe geçer.",
            "Küçük ve **apolar (yağda çözünen)** oldukları için fosfolipit tabakasından doğrudan geçebilirler.",
            "Glikoz **büyük ve polardır (suda çözünür)**; yağ tabakasından geçemez, kanal/taşıyıcı proteine ihtiyaç duyar.",
            "**Ortak**: ikisi de taşıyıcı protein kullanır. **Fark**: kolaylaştırılmış difüzyon çoktan aza ve ATP'siz; aktif taşıma azdan çoğa ve ATP'lidir.",
            "Yoğunluk farkının artması, sıcaklığın artması, molekülün küçülmesi, yüzey alanının artması (zarın incelmesi de yazılabilir).",
            "Madde **az yoğun ortamdan çok yoğun ortama** taşınıyorsa ATP harcanmıştır; yani yoğunluk gradyanına ters yönde hareket vardır.",
            "**Aktif taşıma.** Sodyum ve potasyum, yoğunluklarının **az olduğu** taraftan çok olduğu tarafa taşındığı için enerji gerekir.",
            "Bağırsaktaki glikoz yoğunluğu kandan **düşük** hâle geldiğinde difüzyon durur; son moleküllerin de emilmesi için **azdan çoğa** taşıma gerekir.",
            "**Taşıyıcı protein** kullanıldığını gösterir; proteinler doyunca hız artmaz. Yani basit difüzyon değildir (kolaylaştırılmış difüzyon veya aktif taşıma).",
            "**Endositozda** zardan parça koparıldığı için zar yüzeyi **azalır**; **ekzositozda** koful zarı zara katıldığı için yüzey **artar**.",
            "**Fagositoz** katı maddenin alınmasıdır (akyuvarın bakteri yutması). **Pinositoz** sıvı maddenin alınmasıdır.",
            "**Hücre duvarı sert ve cansızdır**; zarın içeri çökmesine veya dışarı kıvrılmasına izin vermez.",
            "Su, **kendi yoğunluğunun çok olduğu** (çözelti yoğunluğunun az olduğu) yerden, **su yoğunluğunun az olduğu** yere geçer.",
            "Saf su hipotoniktir. Alyuvar su alır, şişer ve **patlar (hemoliz)**. Bitki hücresi su alır, şişer ama duvar sayesinde **turgor** durumuna geçer, patlamaz.",
            "**Hücre duvarı** vardır; su alımı arttıkça duvarın oluşturduğu **turgor basıncı** su girişini dengeler ve durdurur.",
            "**Plazmoliz**: hipertonik ortamda su kaybı sonucu sitoplazmanın duvardan ayrılması. **Deplazmoliz**: hipotonik ortama konunca suyun geri alınıp eski hâle dönülmesi.",
            "Su kaybı çok ilerlerse hücre **ölür**; ölü hücrede osmoz düzenlenemeyeceği için deplazmoliz gerçekleşmez.",
            "**Emme kuvveti = Osmotik basınç − Turgor basıncı.** Emme kuvveti **büyük** olan hücre, küçük olandan su çeker.",
            "Yoğun tuzlu su **hipertonik** ortam oluşturur; bozulmaya yol açan mikroorganizmalar su kaybedip **plazmolize** uğrar ve çoğalamaz.",
            "Tuz dış ortamı **hipertonik** yapar; salatalık hücreleri osmozla su kaybeder ve pörsür.",
            "Tatlı su hücreye göre **hipotoniktir**; sürekli su girer. Kontraktil koful fazla suyu **ATP harcayarak** dışarı atar, hücre patlamaz.",
            "Protein sentezinin **bütün canlılarda ortak** bir yaşamsal olay olduğunu gösterir.",
            "**Endosimbiyoz (içsel ortak yaşam) kuramına**: mitokondrinin, bir zamanlar serbest yaşayan bakterinin ökaryot hücreye yerleşmesiyle oluştuğu görüşüne.",
            "**Krista** iç zarın kıvrımlarıdır (yüzeyi artırır, ETS burada). **Matriks** iç boşluktaki sıvıdır (Krebs burada geçer).",
            "**Granum (tilakoit)** → **ışık evresi**. **Stroma** → **karanlık evre (Calvin döngüsü)**.",
            "**Granüllü ER** üzerinde ribozom taşır, **protein** işler ve taşır. **Düz ER** ribozomsuzdur; **yağ ve steroit** sentezler, zehir etkisizleştirir.",
            "Karaciğer **zehir (ilaç, alkol) etkisizleştirme** görevini üstlenir; bu işi düz ER yapar.",
            "**Pankreas ve tükürük bezi** hücreleri. İkisi de **bol salgı** üretir; Golgi salgıları paketleyip dışarı gönderir.",
            "Lizozom enzimleri sitoplazmaya dökülür ve hücre **kendi kendini sindirir**. Bu olaya **otoliz** denir.",
            "Görevi **koful** üstlenir; bitki hücresinde sindirim ve depolama işleri büyük merkezî kofulda yürütülür.",
            "**İğ ipliklerini** oluşturur. **Gelişmiş bitki hücrelerinde** bulunmaz (hayvan hücresinde ve ilkel bitkilerde vardır).",
            "Karaciğer, zararlı maddeleri (özellikle hidrojen peroksiti) parçalama görevini yürütür; bu iş **katalaz** enzimini taşıyan peroksizomda yapılır.",
            "Çekirdek ile sitoplazma arasında **madde alışverişini** sağlar: mRNA dışarı çıkar, enzim ve nükleotitler içeri girer.",
            "**rRNA** üretilir; bu molekül **ribozomun** yapısına katılır.",
            "İkisi de **aynı DNA molekülüdür**. Bölünme dışında **açık ve ince (kromatin)**, bölünme sırasında **kısalıp kalınlaşmış (kromozom)** hâldedir.",
            "**Kromatin hâldeyken.** DNA açık olduğu için enzimler zincire ulaşabilir; kromozom hâlinde çok sıkı paketlendiğinden okunamaz.",
            "**İnsan 46**, **patates 48** kromozom taşır; patates insandan gelişmiş değildir. Eğrelti otunda sayı 500'ü aşar.",
            "**Bitkide** iki hücre arasında **ara lamel (hücre plağı)** oluşur ve duvar örülür. **Hayvanda** zar ortadan **boğumlanarak** ayrılır.",
            "Kök **ışık almaz**; fotosentez yapılamayacağı için kloroplast bulunmaz (yerine renksiz plastitler bulunur).",
            "**Yanlıştır.** Bitki de solunum yapar ve bunun için **mitokondriye ihtiyaç duyar**. Kloroplast, fotosentez için **ek** organeldir.",
            "**Bitki hücresi.** Kloroplast ve büyük merkezî koful bitkiye özgüdür; lizozomun bulunmaması da bunu doğrular.",
        ],
    },
}
