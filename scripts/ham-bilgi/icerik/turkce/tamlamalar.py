"""TYT Türkçe — Tamlamalar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: TAMLAMALAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Tamlamalar",
    "alt_baslik": "Ham bilgi notu — isim ve sıfat tamlaması, tamlama çeşitleri ve "
                  "karma tamlamalar; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Tamlamalar",
        "kazanimlar": "İsim tamlamalarını türlerine göre ayırt eder. "
                      "Sıfat tamlamasını tanır. "
                      "Karma ve zincirleme tamlamaları çözümler. "
                      "Tamlamalarda anlam ilişkilerini belirler.",
        "kapsam": "Belirtili, belirtisiz, takısız ve zincirleme isim tamlaması; "
                  "sıfat tamlaması; karma tamlamalar; tamlayan ve tamlanan; tamlama "
                  "eklerinin düşmesi; tamlamalarda anlam ilişkileri, 45 analiz sorusu",
        "nasil": "Tamlama sorularının tamamı **ek kontrolüyle** çözülür: "
                 "**tamlayanda \"-in\" var mı, tamlananda \"-i\" var mı?** "
                 "İkisi de varsa belirtili, yalnızca tamlananda varsa belirtisiz, "
                 "hiçbiri yoksa takısızdır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **tamlama türü belirleme** "
                    "ya da **takısız tamlama ile sıfat tamlamasını ayırma** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "İsim Tamlaması"},
        {"tur": "gorsel", "baslik": "Şema 1 — Dört isim tamlaması",
         "aciklama": "Tamlama türünü **eklere bakarak** belirlersin. Tamlayan "
                     "\"-in\" ekini, tamlanan \"-i\" ekini alıp almadığına göre "
                     "dört tür ortaya çıkar.",
         "ciz": S.dikey_akis(
             ["Belirtili isim tamlaması", "Belirtisiz isim tamlaması",
              "Takısız isim tamlaması", "Zincirleme isim tamlaması"],
             ["**Tamlayan \"-in\" eki**, tamlanan **\"-i\" eki alır**. "
              "\"kapı**nın** kol**u**\", \"okul**un** bahçe**si**\". "
              "**Araya sözcük girebilir**: \"kapının **eski** kolu\".",
              "**Tamlayan ek almaz**, tamlanan **\"-i\" eki alır**. "
              "\"kapı kol**u**\", \"okul bahçe**si**\". **Genel bir tür bildirir**; "
              "araya sözcük girmez.",
              "**İkisi de ek almaz**. Tamlayan, tamlananın **neyden yapıldığını** ya "
              "da **neye benzediğini** bildirir: \"**altın** yüzük\", \"**demir** kapı\".",
              "**İkiden çok isim** birbirini tamlar: \"okul**un** bahçe**sin**in "
              "kapı**sı**\". Bir tamlamanın tamlayanı ya da tamlananı **başka bir "
              "tamlamadır**."])},
        {"tur": "tablo",
         "basliklar": ["Tamlama türü", "Tamlayan", "Tamlanan", "Örnek"],
         "satirlar": [
             ["**Belirtili**", "**-in eki alır**", "**-i eki alır**", "kapı**nın** kol**u**"],
             ["**Belirtisiz**", "**Ek almaz**", "**-i eki alır**", "kapı kol**u**"],
             ["**Takısız**", "**Ek almaz**", "**Ek almaz**", "**altın** yüzük"],
             ["**Zincirleme**", "En az **üç isim**", "—", "okul**un** bahçe**sin**in kapı**sı**"],
         ],
         "oranlar": [0.22, 0.24, 0.22, 0.32]},
        {"tur": "taktik", "baslik": "Belirtili mi Belirtisiz mi? Araya Sözcük Sokma",
         "govde": "İki tamlama arasına **bir sıfat sokmayı** dene. "
                  "**Belirtili tamlamada araya sözcük girer**: \"kapının **eski** "
                  "kolu\" → doğru. **Belirtisiz tamlamada girmez**: \"kapı **eski** "
                  "kolu\" → bozuk. Bunun nedeni, belirtisiz tamlamanın **tek bir "
                  "kavramı** (bir nesne türünü) karşılamasıdır."},
        {"tur": "dikkat", "baslik": "Belirtili ve Belirtisizin Anlam Farkı", "ogeler": [
            "**Belirtili tamlama belirli bir varlığı** anlatır: \"**bu** kapının kolu\" "
            "— hangi kapı olduğu bellidir.",
            "**Belirtisiz tamlama bir tür, bir cins** bildirir: \"kapı kolu\" — "
            "herhangi bir kapı kolu, bir nesne türü.",
            "**Kurum, yer ve nesne adları genellikle belirtisiz tamlamadır**: "
            "\"Türk Dil Kurumu\", \"Ankara Kalesi\", \"ders kitabı\".",
            "**Belirtisiz tamlamalar zamanla tek sözcük gibi kalıplaşabilir**: "
            "\"aslanağzı\", \"hanımeli\", \"denizaltı\".",
        ]},
        {"tur": "cozum",
         "baslik": "Tamlama Türü Belirleme",
         "soru": "Aşağıdaki tamlamaların türünü belirleyiniz: "
                 "**okulun bahçesi · okul bahçesi · demir kapı · evin bahçesinin duvarı**",
         "adimlar": [
             "**okulun bahçesi**: tamlayan \"-un\", tamlanan \"-i\" almış → "
             "**belirtili isim tamlaması**.",
             "**okul bahçesi**: tamlayan ek almamış, tamlanan \"-i\" almış → "
             "**belirtisiz isim tamlaması**.",
             "**demir kapı**: ikisi de ek almamış; \"demir\" kapının **neyden "
             "yapıldığını** bildiriyor → **takısız isim tamlaması**.",
             "**evin bahçesinin duvarı**: üç isim birbirini tamlıyor → "
             "**zincirleme isim tamlaması**.",
         ],
         "sonuc": "Dört tamlama, dört farklı türdedir. Ayrım yalnızca **eklere** "
                  "bakılarak yapılır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Takısız Tamlama ve Sıfat Tamlaması"},
        {"tur": "gorsel", "baslik": "Şema 2 — En çok karıştırılan ikili",
         "aciklama": "İkisinde de **ek yoktur**, bu yüzden karıştırılır. Ayrım "
                     "**tamlayanın ne bildirdiğine** dayanır: **madde ya da benzerlik** "
                     "mi, yoksa **nitelik** mi?",
         "ciz": S.karsilastirma(
             "TAKISIZ isim tamlaması",
             ["Tamlayan **isimdir**",
              "**Neyden yapıldığını** bildirir",
              "Ya da **neye benzediğini** bildirir",
              "**altın** yüzük (altından yapılmış)",
              "**tahta** masa, **gümüş** kaşık",
              "Sınama: **\"-den yapılmış\"** denebilir"],
             "SIFAT tamlaması",
             ["Tamlayan **sıfattır**",
              "İsmin **niteliğini** bildirir",
              "\"Nasıl?\" sorusuna cevap verir",
              "**güzel** yüzük (nitelik)",
              "**eski** masa, **temiz** kaşık",
              "Sınama: **\"nasıl?\"** sorusu cevap alır"],
             "Ayırt etme",
             ["**\"-den yapılmış\"** denebiliyorsa **takısız**",
              "**\"nasıl?\"** sorusu cevap alıyorsa **sıfat tamlaması**",
              "Tamlayanın **türü** belirleyicidir"])},
        {"tur": "tuzak", "baslik": "Bazı Sözcükler Hem İsim Hem Sıfat Olabilir", "govde":
            "\"**Altın** yüzük\" → yüzük altından yapılmış → **takısız isim tamlaması**. "
            "\"**Altın** saçlar\" → saçlar altından yapılmamış, **altına benzetilmiş** → "
            "bu da **takısız isim tamlamasıdır** (benzetme yoluyla). "
            "Ama \"**altın** kalpli insan\" ifadesinde \"altın\" bir **nitelik** "
            "bildirir → **sıfat tamlaması**. Ölçüt: **madde ya da benzerlik mi, "
            "yoksa nitelik mi?**"},
        {"tur": "cozum",
         "baslik": "Takısız mı Sıfat Tamlaması mı?",
         "soru": "Aşağıdaki tamlamaların türünü belirleyiniz: "
                 "**tahta kapı · eski kapı · mermer sütun · yüksek sütun**",
         "adimlar": [
             "**tahta kapı**: \"tahtadan yapılmış kapı\" denebilir → **takısız isim "
             "tamlaması**.",
             "**eski kapı**: \"Kapı nasıl?\" → eski → **sıfat tamlaması**.",
             "**mermer sütun**: \"mermerden yapılmış sütun\" denebilir → **takısız "
             "isim tamlaması**.",
             "**yüksek sütun**: \"Sütun nasıl?\" → yüksek → **sıfat tamlaması**.",
         ],
         "sonuc": "**Tahta ve mermer madde bildirdiği için takısız**, **eski ve yüksek "
                  "nitelik bildirdiği için sıfat tamlamasıdır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Karma Tamlamalar"},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Sıfat tamlaması, isim tamlamasının tamlayanı olabilir**: "
            "\"**güzel bir evin** bahçesi\" → \"güzel bir ev\" sıfat tamlaması, "
            "bütün ise belirtili isim tamlamasıdır.",
            "**İsim tamlaması, sıfat tamlamasının tamlananı olabilir**: "
            "\"**eski** okul bahçesi\" → \"okul bahçesi\" isim tamlaması, \"eski\" "
            "sıfat olarak onu niteliyor.",
            "**Tamlama içinde tamlama** bulunması **karma tamlama** oluşturur; "
            "sınavda çözümleme istenir.",
            "Karma tamlamayı çözerken **içten dışa doğru** git: önce en küçük tamlamayı "
            "bul, sonra onu kapsayanı belirle.",
        ]},
        {"tur": "cozum",
         "baslik": "Karma Tamlama Çözümleme",
         "soru": "\"**Eski evin geniş bahçesinin yüksek duvarı**\" tamlamasını "
                 "çözümleyiniz.",
         "adimlar": [
             "**En içteki tamlama**: \"eski ev\" → **sıfat tamlaması**.",
             "\"Eski evin geniş bahçesi\" → tamlayan \"-in\", tamlanan \"-si\" almış → "
             "**belirtili isim tamlaması**; tamlananı \"geniş bahçe\" (sıfat tamlaması).",
             "\"...bahçesinin yüksek duvarı\" → yine **belirtili isim tamlaması**; "
             "tamlananı \"yüksek duvar\" (sıfat tamlaması).",
             "Bütün olarak bakıldığında üç isim birbirini tamlıyor → **zincirleme isim "
             "tamlaması**.",
         ],
         "sonuc": "Yapı, **içinde üç sıfat tamlaması barındıran bir zincirleme isim "
                  "tamlamasıdır**. Karma tamlamalar **içten dışa** çözümlenir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Tamlamalarda Özel Durumlar"},
        {"tur": "tablo",
         "basliklar": ["Durum", "Açıklama", "Örnek"],
         "satirlar": [
             ["**Tamlayanın düşmesi**",
              "Belirtili tamlamada tamlayan söylenmeyebilir",
              "\"(Benim) **kitabım** masada.\""],
             ["**Ortak tamlayan**",
              "Bir tamlayan **birden çok tamlananı** tamlayabilir",
              "\"Okulun **bahçesi** ve **kapısı**\""],
             ["**Ortak tamlanan**",
              "Birden çok tamlayan **tek tamlananı** tamlayabilir",
              "\"Ali'nin ve Ayşe'nin **kitabı**\""],
             ["**Tamlayanın sıfat alması**",
              "Belirtili tamlamada araya sıfat girebilir",
              "\"kapının **paslı** kolu\""],
             ["**Zamirle kurulan tamlama**",
              "Tamlayan zamir olabilir",
              "\"**benim** kitabım\", \"**onun** evi\""],
         ],
         "oranlar": [0.24, 0.38, 0.38]},
        {"tur": "dikkat", "baslik": "Tamlamalarda Anlam İlişkileri", "ogeler": [
            "**Sahiplik**: \"Ali'nin kitabı\" — kitap Ali'ye aittir.",
            "**Parça-bütün**: \"masanın ayağı\", \"ağacın dalı\" — parça, bütünden "
            "ayrılmaz.",
            "**Yer ilgisi**: \"Ankara'nın havası\", \"evin bahçesi\".",
            "**Yapıldığı madde**: \"altın yüzük\", \"tahta kapı\" (takısız tamlama).",
            "**Benzetme**: \"altın saçlar\", \"aslan yürekli\" — benzetme yoluyla "
            "kurulan takısız tamlamalardır.",
        ]},
        {"tur": "cozum",
         "baslik": "Cümlede Tamlama Bulma",
         "soru": "\"**Kütüphanenin okuma salonunda eski bir kitabın sararmış "
                 "sayfalarını çevirdim.**\" cümlesindeki tamlamaları bulup türlerini "
                 "belirleyiniz.",
         "adimlar": [
             "**\"kütüphanenin okuma salonu\"**: tamlayan \"-nin\", tamlanan \"-u\" "
             "almış → **belirtili isim tamlaması**.",
             "**\"okuma salonu\"**: tamlayan ek almamış, tamlanan \"-u\" almış → "
             "**belirtisiz isim tamlaması** (belirtilinin tamlananı).",
             "**\"eski bir kitap\"**: \"eski\" ve \"bir\" sıfatları \"kitap\" ismini "
             "niteliyor → **sıfat tamlaması**.",
             "**\"eski bir kitabın sararmış sayfaları\"**: tamlayan \"-ın\", tamlanan "
             "\"-ı\" almış → **belirtili isim tamlaması**.",
             "**\"sararmış sayfalar\"**: sıfat-fiil \"sararmış\" ismi niteliyor → "
             "**sıfat tamlaması**.",
         ],
         "sonuc": "Cümlede **iki belirtili**, **bir belirtisiz isim tamlaması** ve "
                  "**iki sıfat tamlaması** vardır. Tamlamalar **iç içe** kurulmuştur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Belirtili**: tamlayan **-in**, tamlanan **-i** eki alır.",
            "**Belirtisiz**: tamlayan **ek almaz**, tamlanan **-i** alır.",
            "**Takısız**: **ikisi de ek almaz**; madde ya da benzerlik bildirir.",
            "**Zincirleme**: **üç ya da daha çok isim** birbirini tamlar.",
            "**Belirtiliye araya sözcük girer**, belirtisize girmez.",
            "**Belirtisiz tamlama bir tür, bir cins** bildirir.",
            "**Takısız tamlamada \"-den yapılmış\"** denebilir.",
            "**Sıfat tamlamasında \"nasıl?\"** sorusu cevap alır.",
            "**Sıfat tamlamasında tamlayan sıfat**, takısızda **isimdir**.",
            "**Karma tamlamalar içten dışa** çözümlenir.",
            "**Belirtili tamlamada tamlayan düşebilir** (\"kitabım\").",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her tamlama sorusunda **önce eklere bak**: tamlayanda \"-in\" "
            "var mı, tamlananda \"-i\" var mı? Bu iki kontrol tamlama türünü doğrudan "
            "verir. Takısız-sıfat ayrımında ise **\"-den yapılmış\"** sınamasını "
            "kullan.",
        "satir_sayisi": 2,
        "sorular": [
            "İsim tamlamasını tanımlayarak tamlayan ve tamlananı belirtiniz.",
            "Belirtili isim tamlamasının eklerini yazınız.",
            "Belirtisiz isim tamlamasının eklerini yazınız.",
            "Takısız isim tamlamasının ek durumunu yazınız.",
            "Zincirleme isim tamlamasını tanımlayınız.",
            "Belirtili ve belirtisiz tamlamayı ayıran sınamayı yazınız.",
            "'Kapının eski kolu' ifadesinin tamlama türünü belirleyiniz.",
            "'Kapı eski kolu' ifadesinin neden bozuk olduğunu açıklayınız.",
            "Belirtili tamlamanın anlam özelliğini yazınız.",
            "Belirtisiz tamlamanın anlam özelliğini yazınız.",
            "Kurum ve yer adlarının genellikle hangi tamlama türü olduğunu yazınız.",
            "Belirtisiz tamlamaların kalıplaşmasına üç örnek veriniz.",
            "'Okulun bahçesi' tamlamasının türünü belirleyiniz.",
            "'Okul bahçesi' tamlamasının türünü belirleyiniz.",
            "'Demir kapı' tamlamasının türünü belirleyiniz.",
            "'Evin bahçesinin duvarı' tamlamasının türünü belirleyiniz.",
            "Takısız tamlama ile sıfat tamlamasını ayıran ölçütü yazınız.",
            "Takısız tamlamada kullanılan sınama cümlesini yazınız.",
            "Sıfat tamlamasında sorulan soruyu yazınız.",
            "'Tahta kapı' tamlamasının türünü gerekçesiyle yazınız.",
            "'Eski kapı' tamlamasının türünü gerekçesiyle yazınız.",
            "'Mermer sütun' tamlamasının türünü gerekçesiyle yazınız.",
            "'Yüksek sütun' tamlamasının türünü gerekçesiyle yazınız.",
            "'Altın yüzük' ve 'altın saçlar' tamlamalarını karşılaştırınız.",
            "Benzetme yoluyla kurulan takısız tamlamaya iki örnek veriniz.",
            "Sıfat tamlamasında tamlayan ve tamlananın türlerini yazınız.",
            "Karma tamlamayı tanımlayınız.",
            "Karma tamlamayı çözümleme yönünü yazınız.",
            "Sıfat tamlamasının isim tamlamasının tamlayanı olabileceğini örnekle gösteriniz.",
            "İsim tamlamasının sıfat tamlamasının tamlananı olabileceğini örnekle gösteriniz.",
            "'Eski evin geniş bahçesinin yüksek duvarı' tamlamasını çözümleyiniz.",
            "Aynı yapıda kaç sıfat tamlaması olduğunu yazınız.",
            "Belirtili tamlamada tamlayanın düşmesine bir örnek veriniz.",
            "Ortak tamlayanı bir örnekle açıklayınız.",
            "Ortak tamlananı bir örnekle açıklayınız.",
            "Tamlayanın sıfat almasına bir örnek veriniz.",
            "Zamirle kurulan tamlamaya iki örnek veriniz.",
            "Tamlamalarda sahiplik ilişkisine bir örnek veriniz.",
            "Tamlamalarda parça-bütün ilişkisine bir örnek veriniz.",
            "Tamlamalarda yer ilgisine bir örnek veriniz.",
            "'Kütüphanenin okuma salonunda eski bir kitabın sararmış sayfalarını çevirdim' cümlesindeki tamlamaları bulunuz.",
            "Aynı cümlede kaç belirtili isim tamlaması olduğunu yazınız.",
            "Aynı cümlede kaç sıfat tamlaması olduğunu yazınız.",
            "Bir tamlamanın hem sıfat hem isim tamlaması ögesi taşıyabileceğini örnekle açıklayınız.",
            "Kendi kurduğunuz bir cümlede dört tamlama türünü de kullanınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "En az iki ismin, aralarında anlam ilişkisi kurularak oluşturduğu söz öbeğidir. **Tamlayan** belirten, **tamlanan** belirtilen ögedir.",
            "Tamlayan **-in / -ın / -un / -ün**, tamlanan **-i / -ı / -u / -ü** (ya da -si) eki alır.",
            "Tamlayan **ek almaz**, tamlanan **-i** eki alır.",
            "**İkisi de ek almaz.**",
            "**Üç ya da daha çok ismin** birbirini tamlamasıdır: \"okulun bahçesinin kapısı\".",
            "**Araya sözcük sokma**: belirtili tamlamada araya sıfat girebilir, belirtisizde giremez.",
            "**Belirtili isim tamlaması**; araya \"eski\" sıfatı girmiştir.",
            "**Belirtisiz tamlamadır** ve araya sözcük giremez; çünkü \"kapı kolu\" **tek bir kavramı** (bir nesne türünü) karşılar.",
            "**Belirli bir varlığı** anlatır; hangi varlıktan söz edildiği bellidir.",
            "**Bir tür, bir cins** bildirir; herhangi bir varlığı değil, o türden nesneleri anlatır.",
            "**Belirtisiz isim tamlaması**: \"Türk Dil Kurumu\", \"Ankara Kalesi\", \"ders kitabı\".",
            "**aslanağzı**, **hanımeli**, **denizaltı**.",
            "**Belirtili isim tamlaması**; tamlayan \"-un\", tamlanan \"-i\" almış.",
            "**Belirtisiz isim tamlaması**; tamlayan ek almamış, tamlanan \"-u\" almış.",
            "**Takısız isim tamlaması**; ikisi de ek almamış, \"demir\" neyden yapıldığını bildiriyor.",
            "**Zincirleme isim tamlaması**; üç isim birbirini tamlıyor.",
            "**Tamlayanın ne bildirdiği**: **madde ya da benzerlik** bildiriyorsa takısız, **nitelik** bildiriyorsa sıfat tamlamasıdır.",
            "**\"-den yapılmış\"** denebiliyorsa takısız isim tamlamasıdır.",
            "**\"Nasıl?\"** sorusu sorulur; cevap alınıyorsa sıfat tamlamasıdır.",
            "**Takısız isim tamlaması**; \"tahtadan yapılmış kapı\" denebilir.",
            "**Sıfat tamlaması**; \"Kapı nasıl?\" sorusuna \"eski\" cevabı gelir.",
            "**Takısız isim tamlaması**; \"mermerden yapılmış sütun\" denebilir.",
            "**Sıfat tamlaması**; \"Sütun nasıl?\" sorusuna \"yüksek\" cevabı gelir.",
            "**\"Altın yüzük\"**: yüzük gerçekten altından yapılmıştır → **madde bildirir**. **\"Altın saçlar\"**: saç altından yapılmamış, altına **benzetilmiştir** → **benzetme bildirir**. İkisi de **takısız isim tamlamasıdır**.",
            "**\"altın saçlar\"**, **\"aslan yürekli\"** (ayrıca \"buz gibi eller\").",
            "**Tamlayan sıfat**, **tamlanan isimdir**.",
            "Bir tamlamanın içinde **başka bir tamlama** bulunmasıdır.",
            "**İçten dışa**: önce en küçük tamlamayı bul, sonra onu kapsayanı belirle.",
            "\"**Güzel bir evin** bahçesi\" — \"güzel bir ev\" sıfat tamlamasıdır ve belirtili isim tamlamasının tamlayanıdır.",
            "\"**Eski** okul bahçesi\" — \"okul bahçesi\" isim tamlamasıdır ve \"eski\" sıfatının tamlananıdır.",
            "En içte \"eski ev\" (sıfat tamlaması); \"eski evin geniş bahçesi\" (belirtili isim tamlaması); \"...bahçesinin yüksek duvarı\" (belirtili isim tamlaması). Bütün: **zincirleme isim tamlaması**.",
            "**Üç**: \"eski ev\", \"geniş bahçe\", \"yüksek duvar\".",
            "\"(Benim) **kitabım** masada.\" — tamlayan \"benim\" söylenmemiştir.",
            "\"Okulun **bahçesi** ve **kapısı**\" — tek tamlayan, iki tamlanan.",
            "\"Ali'nin ve Ayşe'nin **kitabı**\" — iki tamlayan, tek tamlanan.",
            "\"Kapının **paslı** kolu\" — belirtili tamlamada araya sıfat girmiştir.",
            "\"**Benim** kitabım\", \"**onun** evi\".",
            "\"Ali'nin kitabı\" — kitap Ali'ye aittir.",
            "\"Masanın ayağı\" — ayak, masanın ayrılmaz bir parçasıdır.",
            "\"Ankara'nın havası\" — hava, Ankara'ya ait bir özelliktir.",
            "**Belirtili**: \"kütüphanenin okuma salonu\", \"eski bir kitabın sararmış sayfaları\". **Belirtisiz**: \"okuma salonu\". **Sıfat tamlaması**: \"eski bir kitap\", \"sararmış sayfalar\".",
            "**İki**.",
            "**İki**.",
            "\"**Eski evin geniş bahçesi**\" — bütün olarak belirtili isim tamlamasıdır ama hem tamlayanı (\"eski ev\") hem tamlananı (\"geniş bahçe\") **sıfat tamlamasıdır**.",
            "\"**Bahçenin duvarında** (belirtili) **taş bir bank** (takısız) ile **okul çantası** (belirtisiz) duruyordu; **yeni çanta** (sıfat tamlaması) kimindi acaba?\"",
        ],
    },
}
