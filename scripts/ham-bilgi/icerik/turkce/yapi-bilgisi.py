"""TYT Türkçe — Yapı Bilgisi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: YAPI BİLGİSİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Yapı Bilgisi",
    "alt_baslik": "Ham bilgi notu — kök, gövde, yapım ve çekim ekleri, sözcük yapısı; "
                  "50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Yapı Bilgisi",
        "kazanimlar": "Kök ve gövdeyi ayırt eder. "
                      "Yapım ve çekim eklerini tanır. "
                      "Sözcükleri yapısına göre sınıflandırır. "
                      "Birleşik sözcüklerin oluşumunu açıklar.",
        "kapsam": "Kök (isim ve fiil kökü), gövde, yapım ekleri, çekim ekleri, "
                  "basit-türemiş-birleşik sözcük, isimden isim, isimden fiil, fiilden "
                  "isim, fiilden fiil yapan ekler, birleşik sözcük türleri, "
                  "50 analiz sorusu",
        "nasil": "Yapı bilgisinin tamamı **tek bir ayrıma** dayanır: **yapım eki yeni "
                 "sözcük türetir, çekim eki türetmez**. Bir ekin hangisi olduğunu "
                 "anlamak için sor: **\"Bu ek sözcüğü sözlüğe girecek yeni bir sözcük "
                 "yaptı mı?\"**",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **yapım eki almış sözcüğü "
                    "bulma** ya da **sözcüğün yapısını belirleme** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Kök ve Gövde"},
        {"tur": "tanim", "kavram": "Kök",
         "aciklama": "Bir sözcüğün **anlamlı en küçük parçasıdır**; **parçalanamaz**. "
                     "**İsim kökü** ve **fiil kökü** olmak üzere ikiye ayrılır. "
                     "Kökü bulmak için sözcükten **bütün ekleri** çıkarırsın."},
        {"tur": "gorsel", "baslik": "Şema 1 — Kök çeşitleri ve gövde",
         "aciklama": "Kökün türünü bulmak için sözcüğe **\"-mek/-mak\"** eklemeyi dene: "
                     "anlamlı oluyorsa **fiil kökü**, olmuyorsa **isim köküdür**.",
         "ciz": S.dikey_akis(
             ["İsim kökü", "Fiil kökü", "Gövde", "Sesteş kök"],
             ["**Varlık, kavram ya da nitelik** bildirir. \"-mek/-mak\" eklenemez. "
              "**göz**, **su**, **taş**, **güzel**, **iki**.",
              "**Eylem ya da oluş** bildirir. \"-mek/-mak\" eklenebilir. "
              "**gel(mek)**, **yaz(mak)**, **sev(mek)**, **kırıl(mak)**.",
              "**Kök + yapım eki** ile oluşan yeni sözcüktür. Gövde de kendisi gibi "
              "**isim gövdesi** ya da **fiil gövdesi** olabilir: **gözlük**, **başla-**.",
              "Hem isim hem fiil kökü olabilen sözcüklerdir. **yüz** (organ / yüzmek), "
              "**boya** (madde / boyamak), **kuru** (nitelik / kurumak)."])},
        {"tur": "tuzak", "baslik": "Sesteş Kökte Anlam Belirleyicidir", "govde":
            "**yüz, boya, ekşi, kuru, göç, savaş, barış, güven** gibi sözcükler hem "
            "**isim** hem **fiil** kökü olabilir. Hangisi olduğunu **cümledeki anlam** "
            "belirler: \"**Yüzü**nü yıkadı\" → isim; \"Denizde **yüz**dü\" → fiil. "
            "Bu tür sözcüklerde kökü belirlemeden ek çözümlemesi yapmak yanlış "
            "sonuç verir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yapım ve Çekim Ekleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki ek türünün ayrımı",
         "aciklama": "Bu ayrım, konunun tamamıdır. Bir ekin türünü bilmek için tek "
                     "soru yeter: **sözcüğün anlamı değişti mi, yoksa yalnızca görevi "
                     "mi belirlendi?**",
         "ciz": S.karsilastirma(
             "YAPIM eki",
             ["**Yeni sözcük türetir**",
              "Sözcüğün **anlamını değiştirir**",
              "Sözlükte **ayrı madde** olur",
              "**Çekim ekinden önce** gelir",
              "göz → **gözlük**, yaz → **yazar**",
              "Sözcük **türünü değiştirebilir**"],
             "ÇEKİM eki",
             ["**Yeni sözcük türetmez**",
              "Sözcüğe **görev ve ilgi** kazandırır",
              "Sözlükte **ayrı madde olmaz**",
              "**Yapım ekinden sonra** gelir",
              "göz → **gözler, gözde, gözü**",
              "Sözcük **türünü değiştirmez**"],
             "Sınama sorusu",
             ["**\"Sözlüğe yeni bir sözcük\ngirdi mi?\"**",
              "Girdiyse **yapım**, girmediyse **çekim**",
              "Ekler **daima bu sırayla** dizilir"])},
        {"tur": "tablo",
         "basliklar": ["Yapım eki türü", "İşlevi", "Örnek"],
         "satirlar": [
             ["**İsimden isim**", "İsimden yeni **isim** türetir",
              "göz + lük → **gözlük**; kitap + çı → **kitapçı**"],
             ["**İsimden fiil**", "İsimden **fiil** türetir",
              "baş + la → **başlamak**; su + sa → **susamak**"],
             ["**Fiilden isim**", "Fiilden **isim** türetir",
              "yaz + ar → **yazar**; sev + gi → **sevgi**"],
             ["**Fiilden fiil**", "Fiilden yeni **fiil** türetir",
              "kır + ıl → **kırılmak**; gör + üş → **görüşmek**"],
         ],
         "oranlar": [0.24, 0.30, 0.46]},
        {"tur": "tablo",
         "basliklar": ["Çekim eki türü", "İşlevi", "Örnek"],
         "satirlar": [
             ["**Çokluk eki**", "Sayı bildirir", "**-ler, -lar**: kitaplar"],
             ["**Hâl (durum) ekleri**", "İsmin cümledeki görevini belirler",
              "**-i, -e, -de, -den**: evi, eve, evde, evden"],
             ["**İyelik ekleri**", "Sahiplik bildirir",
              "**-m, -n, -ı, -mız, -nız, -ları**: kitabım"],
             ["**Tamlayan eki**", "Belirtili isim tamlamasında tamlayana gelir",
              "**-ın, -in, -un, -ün**: kapının"],
             ["**Fiil çekim ekleri**", "Kip, kişi ve zaman bildirir",
              "**-dı, -yor, -acak, -meli, -sa**: geldi, geliyor"],
             ["**Soru eki**", "Soru anlamı katar", "**mı, mi, mu, mü**"],
         ],
         "oranlar": [0.24, 0.34, 0.42]},
        {"tur": "taktik", "baslik": "Ekleri Ayırmanın Pratik Yolu", "govde":
            "**Ekler daima şu sırayla dizilir: kök + yapım eki + çekim eki.** "
            "Bu yüzden bir sözcükte **çekim ekinden sonra yapım eki gelmez**. "
            "\"Gözlüklerim\" sözcüğünde: **göz** (kök) + **-lük** (yapım) + **-ler** "
            "(çekim) + **-im** (çekim). Ek dizilişini soldan sağa izlersen hangi ekin "
            "nerede bittiğini kolayca görürsün."},
        {"tur": "cozum",
         "baslik": "Ek Çözümlemesi",
         "soru": "Aşağıdaki sözcükleri köklerine ve eklerine ayırarak eklerin türünü "
                 "belirleyiniz: **kitapçıdan · gözlüklerim · başlayacağız**",
         "adimlar": [
             "**kitapçıdan**: **kitap** (isim kökü) + **-çı** (yapım: isimden isim) + "
             "**-dan** (çekim: ayrılma hâli).",
             "**gözlüklerim**: **göz** (isim kökü) + **-lük** (yapım) + **-ler** "
             "(çekim: çokluk) + **-im** (çekim: iyelik).",
             "**başlayacağız**: **baş** (isim kökü) + **-la** (yapım: isimden fiil) + "
             "**-acak** (çekim: gelecek zaman) + **-ız** (çekim: kişi).",
             "Üçünde de **yapım ekleri çekim eklerinden önce** gelmiş.",
         ],
         "sonuc": "Üç sözcük de **türemiştir**; çünkü hepsi **yapım eki almıştır**. "
                  "Çekim ekleri sözcüğün yapısını değiştirmez."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Sözcüğün Yapısı"},
        {"tur": "gorsel", "baslik": "Şema 3 — Üç sözcük yapısı",
         "aciklama": "Bir sözcüğün yapısını belirlemek için yalnızca **yapım eki alıp "
                     "almadığına** ve **kaç kökten oluştuğuna** bakılır. Çekim ekleri "
                     "**hiç dikkate alınmaz**.",
         "ciz": S.karsilastirma(
             "BASİT sözcük",
             ["**Yapım eki almamıştır**",
              "Kök hâlindedir",
              "**Çekim eki alabilir**",
              "kitap, ev, gel-, güzel",
              "kitaplar, evde → **yine basit**"],
             "TÜREMİŞ sözcük",
             ["**Yapım eki almıştır**",
              "Kök + yapım eki",
              "Kaç yapım eki aldığı önemsiz",
              "gözlük, yazar, başlamak",
              "gözlüklerim → **türemiş**"],
             "BİRLEŞİK sözcük",
             ["**En az iki sözcükten** oluşur",
              "Kökler birleşerek **yeni anlam** kazanır",
              "**Bitişik yazılır**",
              "hanımeli, bilgisayar, kahvaltı",
              "Anlam **kaymış** olabilir"])},
        {"tur": "tuzak", "baslik": "Çekim Eki Sözcüğü Türemiş Yapmaz", "govde":
            "**\"Kitaplar\", \"evde\", \"geliyorum\"** sözcükleri ek almış olsalar da "
            "**basittir**; çünkü aldıkları ekler **çekim ekidir** ve yeni sözcük "
            "türetmemiştir. Yapı sorularında **çekim eklerini sil**, geriye kalanı "
            "incele. Bu tek alışkanlık, yapı sorularının çoğunu doğru çözdürür."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Birleşik sözcükler** oluşurken **ses düşmesi** olabilir: "
            "kahve + altı → **kahvaltı**; cuma + ertesi → **cumartesi**.",
            "**Anlam kaymasıyla** oluşan birleşikler bitişik yazılır: **hanımeli** "
            "(bir bitki), **aslanağzı** (bir çiçek), **imambayıldı** (bir yemek).",
            "**Fiil + fiil** birleşimiyle de birleşik sözcük oluşur: **gidip gelmek**, "
            "**alıvermek**, **düşeyazmak**.",
            "**Birleşik sözcük hem türemiş hem birleşik olabilir**: \"bilgisayarcı\" "
            "sözcüğü hem birleşik (bilgi + sayar) hem türemiştir (+cı).",
        ]},
        {"tur": "cozum",
         "baslik": "Sözcük Yapısını Belirleme",
         "soru": "Aşağıdaki sözcüklerin yapısını belirleyiniz: "
                 "**kitaplarımız · gözlükçü · atasözü · geliyorum**",
         "adimlar": [
             "**kitaplarımız**: kitap + -lar (çekim) + -ımız (çekim) → yapım eki yok → "
             "**BASİT**.",
             "**gözlükçü**: göz + -lük (yapım) + -çü (yapım) → **TÜREMİŞ**.",
             "**atasözü**: ata + söz + -ü → iki sözcükten oluşmuş → **BİRLEŞİK**.",
             "**geliyorum**: gel + -iyor (çekim) + -um (çekim) → yapım eki yok → "
             "**BASİT**.",
         ],
         "sonuc": "**kitaplarımız ve geliyorum basit**, **gözlükçü türemiş**, "
                  "**atasözü birleşiktir**. Ek sayısı değil, **ekin türü** belirleyicidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Karıştırılan Ekler"},
        {"tur": "tablo",
         "basliklar": ["Ek", "Yapım eki olarak", "Çekim eki olarak"],
         "satirlar": [
             ["**-ler / -lar**",
              "Yer adı yapar: **Ahmetler** (aile), **Bursalılar**",
              "Çokluk bildirir: **kitaplar**, **evler**"],
             ["**-ce / -ca**",
              "Dil adı ve isim yapar: **Türkçe**, **karaca**",
              "Eşitlik bildirir: **bence**, **sence**"],
             ["**-i / -ı**",
              "Fiilden isim yapar: **yazı**, **ölçü**",
              "Belirtme hâli: **kitabı** okudum"],
             ["**-lik**",
              "İsimden isim yapar: **gözlük**, **kitaplık**",
              "(Çekim eki olarak kullanılmaz)"],
             ["**-en / -an**",
              "Sıfat-fiil yapar: **gelen**, **koşan**",
              "(Yapım eki sayılır ama çekimli fiil kurmaz)"],
         ],
         "oranlar": [0.20, 0.40, 0.40]},
        {"tur": "dikkat", "baslik": "Aynı Ek İki Farklı Görevde", "ogeler": [
            "**\"-ler\" eki** \"kitaplar\"da çokluk (**çekim**), \"Ahmetler geldi\" "
            "(Ahmet ailesi) örneğinde **yapım ekidir**.",
            "**\"-ce\" eki** \"bence\"de eşitlik (**çekim**), \"Türkçe\"de dil adı "
            "yaptığı için **yapım ekidir**.",
            "Bir ekin türünü **kalıp olarak değil, cümledeki görevine bakarak** "
            "belirle.",
            "Sınama: **\"Bu ek sözlüğe yeni bir madde soktu mu?\"** Soktuysa yapım "
            "ekidir.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Kök, anlamlı en küçük parçadır**; parçalanamaz.",
            "**\"-mek/-mak\" eklenebiliyorsa fiil kökü**, eklenemiyorsa isim köküdür.",
            "**Sesteş köklerde anlam belirleyicidir** (yüz, boya, kuru).",
            "**Yapım eki yeni sözcük türetir**, **çekim eki türetmez**.",
            "**Ek sırası: kök + yapım eki + çekim eki.**",
            "**Çekim ekinden sonra yapım eki gelmez.**",
            "**Basit**: yapım eki almamış. **Türemiş**: yapım eki almış. "
            "**Birleşik**: iki kökten oluşmuş.",
            "**Çekim ekleri sözcüğü türemiş yapmaz** (kitaplar → basit).",
            "Yapı sorularında **önce çekim eklerini sil**.",
            "**Bir sözcük hem birleşik hem türemiş** olabilir (bilgisayarcı).",
            "**Aynı ek farklı görevlerde** bulunabilir (-ler, -ce).",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde sorular **çözümleme** ister: sözcüğü köküne ve eklerine ayır, "
            "her ekin türünü yaz. Bunu düzenli yaparsan yapı soruları refleks hâline "
            "gelir. Her cevapta **hangi sınama sorusunu kullandığını** da belirt.",
        "satir_sayisi": 2,
        "sorular": [
            "Kök kavramını tanımlayınız.",
            "İsim kökü ile fiil kökünü ayıran ölçütü yazınız.",
            "Beş isim kökü ve beş fiil kökü yazınız.",
            "Gövde kavramını tanımlayarak bir örnek veriniz.",
            "Sesteş kökü tanımlayarak üç örnek veriniz.",
            "'yüz' sözcüğünü hem isim hem fiil kökü olarak cümlede kullanınız.",
            "Sesteş köklerde kökün türünü neyin belirlediğini yazınız.",
            "Yapım ekini tanımlayınız.",
            "Çekim ekini tanımlayınız.",
            "Yapım ve çekim ekini ayıran sınama sorusunu yazınız.",
            "Eklerin diziliş sırasını yazınız.",
            "Çekim ekinden sonra yapım eki gelip gelemeyeceğini gerekçesiyle yazınız.",
            "İsimden isim yapan eklere üç örnek veriniz.",
            "İsimden fiil yapan eklere üç örnek veriniz.",
            "Fiilden isim yapan eklere üç örnek veriniz.",
            "Fiilden fiil yapan eklere üç örnek veriniz.",
            "Çokluk ekini örnekle yazınız.",
            "Hâl (durum) eklerini örnekleriyle yazınız.",
            "İyelik eklerini örnekle yazınız.",
            "Tamlayan ekini örnekle yazınız.",
            "Fiil çekim eklerine üç örnek veriniz.",
            "Soru ekini örnekle yazınız.",
            "'kitapçıdan' sözcüğünü köküne ve eklerine ayırınız.",
            "'gözlüklerim' sözcüğünü köküne ve eklerine ayırınız.",
            "'başlayacağız' sözcüğünü köküne ve eklerine ayırınız.",
            "Basit sözcüğü tanımlayarak üç örnek veriniz.",
            "Türemiş sözcüğü tanımlayarak üç örnek veriniz.",
            "Birleşik sözcüğü tanımlayarak üç örnek veriniz.",
            "'kitaplar' sözcüğünün yapısını gerekçesiyle yazınız.",
            "'geliyorum' sözcüğünün yapısını gerekçesiyle yazınız.",
            "'gözlükçü' sözcüğünün yapısını gerekçesiyle yazınız.",
            "'atasözü' sözcüğünün yapısını gerekçesiyle yazınız.",
            "Yapı sorularında ilk yapılması gereken işlemi yazınız.",
            "Çekim ekinin sözcüğün yapısını neden değiştirmediğini açıklayınız.",
            "Birleşik sözcük oluşurken ses düşmesine iki örnek veriniz.",
            "Anlam kaymasıyla oluşan birleşik sözcüğe üç örnek veriniz.",
            "Fiil + fiil birleşimiyle oluşan birleşik sözcüğe iki örnek veriniz.",
            "Bir sözcüğün hem birleşik hem türemiş olabileceğini bir örnekle gösteriniz.",
            "'-ler' ekinin yapım eki olduğu bir örnek yazınız.",
            "'-ler' ekinin çekim eki olduğu bir örnek yazınız.",
            "'-ce' ekinin yapım eki olduğu bir örnek yazınız.",
            "'-ce' ekinin çekim eki olduğu bir örnek yazınız.",
            "'-i' ekinin yapım eki olduğu bir örnek yazınız.",
            "'-i' ekinin çekim eki olduğu bir örnek yazınız.",
            "Bir ekin türünü belirlerken neye bakılması gerektiğini yazınız.",
            "Aynı ekin iki farklı görevde bulunabilmesinin nedenini açıklayınız.",
            "'susamak' sözcüğünü köküne ve eklerine ayırarak kökün türünü belirtiniz.",
            "'görüşmek' sözcüğünü köküne ve eklerine ayırarak ek türlerini yazınız.",
            "'bilgisayarcılık' sözcüğünün yapısını çözümleyiniz.",
            "Kendi seçtiğiniz üç sözcüğü basit, türemiş ve birleşik olacak biçimde yazıp çözümleyiniz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Bir sözcüğün **anlamlı en küçük parçasıdır**; daha küçük parçalara ayrılamaz.",
            "Sözcüğe **\"-mek/-mak\"** eklenebiliyorsa **fiil kökü**, eklenemiyorsa **isim köküdür**.",
            "**İsim kökü**: göz, su, taş, güzel, iki. **Fiil kökü**: gel-, yaz-, sev-, koş-, bak-.",
            "**Kök + yapım eki** ile oluşan yeni sözcüktür. \"göz + lük → **gözlük**\" bir isim gövdesidir.",
            "Hem **isim** hem **fiil** kökü olabilen sözcüklerdir: **yüz**, **boya**, **kuru** (ayrıca göç, savaş, barış).",
            "**İsim**: \"Yüzünü yıkadı.\" **Fiil**: \"Denizde yüzdü.\"",
            "**Cümledeki anlam** belirler. Sözcüğün tek başına türünü söylemek mümkün değildir.",
            "Eklendiği sözcükten **yeni bir sözcük türeten** ektir; sözcüğün anlamını değiştirir ve sözlükte ayrı madde olmasını sağlar.",
            "Yeni sözcük türetmeyen, sözcüğe **görev ve ilgi kazandıran** ektir; sözlükte ayrı madde oluşturmaz.",
            "**\"Bu ek sözlüğe yeni bir sözcük soktu mu?\"** Soktuysa **yapım**, sokmadıysa **çekim** ekidir.",
            "**Kök + yapım eki + çekim eki**.",
            "**Gelmez.** Ekler daima kök, yapım eki, çekim eki sırasını izler; çekim eki her zaman **en sonda** bulunur.",
            "**-lik** (gözlük), **-cı** (kitapçı), **-lı** (tuzlu).",
            "**-la** (başlamak), **-sa** (susamak), **-al** (çoğalmak).",
            "**-ar** (yazar), **-gi** (sevgi), **-ış** (bakış).",
            "**-ıl** (kırılmak), **-üş** (görüşmek), **-dır** (yazdırmak).",
            "**-ler, -lar**: kitap**lar**, ev**ler**.",
            "**-i** (belirtme): evi. **-e** (yönelme): eve. **-de** (bulunma): evde. **-den** (ayrılma): evden.",
            "**-m, -n, -ı, -mız, -nız, -ları**: kitab**ım**, kitab**ın**, kitab**ı**.",
            "**-ın, -in, -un, -ün**: kapı**nın** kolu.",
            "**-dı** (geldi), **-yor** (geliyor), **-acak** (gelecek).",
            "**mı, mi, mu, mü**: Geldi **mi**?",
            "**kitap** (isim kökü) + **-çı** (yapım) + **-dan** (çekim, ayrılma hâli).",
            "**göz** (isim kökü) + **-lük** (yapım) + **-ler** (çekim, çokluk) + **-im** (çekim, iyelik).",
            "**baş** (isim kökü) + **-la** (yapım, isimden fiil) + **-acak** (çekim, gelecek zaman) + **-ız** (çekim, kişi).",
            "**Yapım eki almamış** sözcüktür; kök hâlindedir. **kitap, ev, gel-** (çekim eki alabilir: kitaplar yine basittir).",
            "**Yapım eki almış** sözcüktür. **gözlük, yazar, başlamak**.",
            "**En az iki sözcüğün birleşmesiyle** oluşan sözcüktür. **hanımeli, bilgisayar, kahvaltı**.",
            "**Basittir**; aldığı **-lar** eki **çekim ekidir**, yeni sözcük türetmemiştir.",
            "**Basittir**; **-iyor** ve **-um** ekleri **çekim ekidir**.",
            "**Türemiştir**; **-lük** ve **-çü** ekleri **yapım ekidir**.",
            "**Birleşiktir**; **ata** ve **söz** olmak üzere iki sözcükten oluşmuştur.",
            "**Çekim eklerini silmek.** Geriye kalan kısımda yapım eki var mı diye bakılır.",
            "Çekim eki **yeni bir sözcük türetmez**; yalnızca sözcüğe görev ve ilgi kazandırır. Sözcük yapısı ise **türetme** üzerinden belirlenir.",
            "**kahve + altı → kahvaltı**; **cuma + ertesi → cumartesi** (ayrıca ne + asıl → nasıl).",
            "**hanımeli** (bitki), **aslanağzı** (çiçek), **imambayıldı** (yemek).",
            "**alıvermek**, **düşeyazmak** (ayrıca gidip gelmek).",
            "**bilgisayarcı**: hem **birleşik** (bilgi + sayar) hem **türemiştir** (+cı).",
            "\"**Ahmetler** bize geldi.\" — Ahmet ailesi anlamında; yeni bir sözcük türetmiştir.",
            "\"Rafta beş **kitaplar** vardı\" değil, \"Rafta **kitaplar** vardı.\" — çokluk bildirir.",
            "\"**Türkçe** dersini seviyorum.\" — dil adı yapmıştır.",
            "\"**Bence** bu doğru bir karar.\" — eşitlik bildirir.",
            "\"Bu **yazı**yı kim yazmış?\" — fiilden isim türetmiştir.",
            "\"**Kitabı** dün okudum.\" — belirtme hâli ekidir.",
            "**Cümledeki görevine** bakılmalıdır; ekin biçimi tek başına türünü belirlemez.",
            "Türkçede birçok ek **sesçe aynı** olduğu hâlde **farklı işlevler** üstlenir. Bu yüzden ekin türü ancak **bağlam içinde** belirlenebilir.",
            "**su** (isim kökü) + **-sa** (yapım, isimden fiil) + **-mak** (mastar eki). Kök **isimdir**.",
            "**gör** (fiil kökü) + **-üş** (yapım, fiilden fiil) + **-mek** (mastar eki).",
            "**bilgi + sayar** (birleşik) + **-cı** (yapım) + **-lık** (yapım) → hem **birleşik** hem **türemiştir**.",
            "**Basit**: \"deniz\" (kök hâlinde). **Türemiş**: \"denizci\" (deniz + -ci yapım eki). **Birleşik**: \"denizaltı\" (deniz + altı).",
        ],
    },
}
