"""TYT Türkçe — Zamir ve Zarf (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: ZAMİR VE ZARF",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Zamir ve Zarf",
    "alt_baslik": "Ham bilgi notu — zamir çeşitleri, ek hâlindeki zamirler ve zarf "
                  "türleri; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Zamir ve Zarf",
        "kazanimlar": "Zamir çeşitlerini tanır ve ayırt eder. "
                      "Ek hâlindeki zamirleri belirler. "
                      "Zarf türlerini işlevleriyle bilir. "
                      "Zarf ile sıfatı ayırt eder.",
        "kapsam": "Kişi, işaret, soru, belgisiz ve dönüşlülük zamirleri; ilgi zamiri "
                  "ve iyelik ekleri; zamirin öge olması; durum, zaman, yer-yön, miktar "
                  "ve soru zarfları; zarf-sıfat ayrımı, 50 analiz sorusu",
        "nasil": "Zamir **ismin yerini tutar**, zarf **fiili etkiler**. İkisini de "
                 "bulmanın yolu aynıdır: **cümlede hangi sözcükle ilişkili** olduğuna "
                 "bak. Zamir bir ismin yerindedir, zarf bir fiilin yanındadır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **ek hâlindeki zamir**, "
                    "**zarf-sıfat ayrımı** ya da **zarf türü belirleme** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Zamir Çeşitleri"},
        {"tur": "tablo",
         "basliklar": ["Zamir türü", "Neyin yerini tutar", "Örnek"],
         "satirlar": [
             ["**Kişi (şahıs) zamiri**", "**Kişilerin** yerini tutar",
              "ben, sen, o, biz, siz, onlar"],
             ["**İşaret zamiri**", "İşaret ederek ismin yerini tutar",
              "bu, şu, o, bunlar, şunlar, onlar, öteki, beriki"],
             ["**Soru zamiri**", "**Soru yoluyla** ismin yerini tutar",
              "kim, ne, nere, hangisi, kaçı, kaçıncısı"],
             ["**Belgisiz zamir**", "**Belirsiz** biçimde ismin yerini tutar",
              "kimse, hepsi, bazısı, birkaçı, herkes, hiçbiri"],
             ["**Dönüşlülük zamiri**", "Özneye **dönerek** onu pekiştirir",
              "kendi (kendim, kendin, kendisi...)"],
         ],
         "oranlar": [0.26, 0.30, 0.44]},
        {"tur": "gorsel", "baslik": "Şema 1 — Ek hâlindeki zamirler",
         "aciklama": "Zamirler her zaman ayrı bir sözcük değildir; **ek biçiminde** de "
                     "olabilir. Bu ikisi sınavda en çok sorulan zamirlerdir.",
         "ciz": S.karsilastirma(
             "İLGİ ZAMİRİ (-ki)",
             ["**İsmin yerini tutar**",
              "Kendinden önceki isme **bitişik** yazılır",
              "\"Benim**ki** daha güzel.\"",
              "\"Seninkini gördüm.\"",
              "**Zamir olduğu için öge olur**"],
             "İYELİK EKİ",
             ["**Sahiplik** bildirir",
              "İsme **bitişik** yazılır",
              "\"Kitab**ım** masada.\"",
              "\"Ev**imiz** buradan uzak.\"",
              "**Tek başına öge olmaz**"],
             "Ayırt etme",
             ["**-ki isim yerine geçer**, iyelik geçmez",
              "\"Benimki\" = **benim kalemim**",
              "\"Kitabım\" = **kitap** + sahiplik"])},
        {"tur": "tuzak", "baslik": "İlgi Zamiri \"-ki\" ile Sıfat Yapan \"-ki\"", "govde":
            "**İlgi zamiri \"-ki\" ismin yerini tutar**: \"Benim**ki** daha güzel\" — "
            "\"kalemim\" yerine geçmiştir. **Sıfat yapan \"-ki\" ise ismi niteler**: "
            "\"akşam**ki** film\" — burada \"ki\" bir ismin yerini tutmaz, \"film\"i "
            "niteler. Ayırt etmek için sor: **\"Bu -ki bir ismin yerine mi geçti, "
            "yoksa bir ismi mi niteledi?\"**"},
        {"tur": "cozum",
         "baslik": "Zamir Türü Belirleme",
         "soru": "Aşağıdaki cümlelerde altı çizili sözcüklerin zamir türünü "
                 "belirleyiniz.\n"
                 "**I.** \"**Bunu** kim getirdi?\"\n"
                 "**II.** \"**Hepsi** sınavı geçti.\"\n"
                 "**III.** \"**Kendi** işini kendi görür.\"\n"
                 "**IV.** \"Seninki**ni** beğendim.\"",
         "adimlar": [
             "**I.** \"Bunu\" bir nesnenin yerini işaret ederek tutuyor → **işaret "
             "zamiri**. \"Kim\" ise → **soru zamiri**.",
             "**II.** \"Hepsi\" belirsiz bir çokluğun yerini tutuyor → **belgisiz "
             "zamir**.",
             "**III.** \"Kendi\" özneye dönerek onu pekiştiriyor → **dönüşlülük "
             "zamiri**.",
             "**IV.** \"Seninki\" bir ismin yerini tutuyor → **ilgi zamiri** "
             "(ek hâlinde).",
         ],
         "sonuc": "Sırasıyla **işaret, soru, belgisiz, dönüşlülük ve ilgi zamiri** "
                  "kullanılmıştır. Zamirin türü, **neyin yerini tuttuğuna** göre "
                  "belirlenir."},
        {"tur": "dikkat", "baslik": "Zamirle İlgili Üç Kural", "ogeler": [
            "**Zamirler cümlenin ögesi olur**: özne, nesne ya da tümleç olabilirler.",
            "**Zamirler çekim eki alabilir**: \"ben**i**\", \"sen**den**\", "
            "\"onlar**a**\".",
            "**\"O\" sözcüğü** insan için kullanılırsa **kişi zamiri**, varlık için "
            "kullanılırsa **işaret zamiridir**: \"O geldi\" (kişi) / \"O çok güzel "
            "bir kitap\" (işaret sıfatı).",
            "**Belgisiz zamirlerle belgisiz sıfatlar karıştırılır**: \"**bazı** "
            "öğrenciler\" (sıfat) / \"**bazısı** geldi\" (zamir).",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Zarf Çeşitleri"},
        {"tur": "tablo",
         "basliklar": ["Zarf türü", "Sorusu", "Örnek"],
         "satirlar": [
             ["**Durum zarfı**", "**Nasıl?**",
              "**hızlı** koştu, **sessizce** girdi, **koşarak** geldi"],
             ["**Zaman zarfı**", "**Ne zaman?**",
              "**dün** geldi, **şimdi** çıkıyor, **akşam** görüşürüz"],
             ["**Yer-yön zarfı**", "**Nereye?** (ek almadan)",
              "**içeri** girdi, **dışarı** çıktı, **ileri** gitti"],
             ["**Miktar (azlık-çokluk) zarfı**", "**Ne kadar?**",
              "**çok** çalıştı, **az** konuştu, **en** güzel"],
             ["**Soru zarfı**", "Fiili **sorar**",
              "**nasıl** geldi, **ne zaman** gitti, **niçin** sustu"],
         ],
         "oranlar": [0.28, 0.22, 0.50]},
        {"tur": "taktik", "baslik": "Yer-Yön Zarfının Tek Koşulu", "govde":
            "Bir sözcüğün **yer-yön zarfı** sayılması için **ek almamış olması** "
            "gerekir. \"**İçeri** girdi\" → ek yok → **yer-yön zarfı**. "
            "\"**İçeriye** girdi\" → yönelme eki almış → artık **dolaylı tümleçtir**, "
            "zarf değil. Yer-yön zarfları sınırlıdır: **içeri, dışarı, ileri, geri, "
            "yukarı, aşağı, öte, beri**."},
        {"tur": "gorsel", "baslik": "Şema 2 — Zarf mı sıfat mı?",
         "aciklama": "Aynı sözcük hem sıfat hem zarf olabilir. Ayrım için **hemen "
                     "sonrasına** bakılır: isim geliyorsa sıfat, fiil geliyorsa "
                     "zarftır.",
         "ciz": S.akis(
             ["Sözcüğü bul", "Hemen sonrasına bak", "İsim mi fiil mi?",
              "Türü belirle"],
             ["altı çizili\nsözcük", "hangi sözcükle\n**ilişkili**",
              "**isim** → sıfat\n**fiil** → zarf", "\"güzel ev\" sıfat\n\"güzel yazdı\" zarf"])},
        {"tur": "cozum",
         "baslik": "Zarf Türü Belirleme",
         "soru": "Aşağıdaki cümlelerde altı çizili sözcüklerin zarf türünü "
                 "belirleyiniz.\n"
                 "**I.** \"Çocuk **sessizce** odadan çıktı.\"\n"
                 "**II.** \"**Yarın** sizi ziyaret edeceğim.\"\n"
                 "**III.** \"**Dışarı** çıkmak istemiyorum.\"\n"
                 "**IV.** \"Bu soru **çok** kolaydı.\"\n"
                 "**V.** \"**Neden** bu kadar geç kaldın?\"",
         "adimlar": [
             "**I.** \"Nasıl çıktı?\" → **sessizce** → **durum zarfı**.",
             "**II.** \"Ne zaman ziyaret edecek?\" → **yarın** → **zaman zarfı**.",
             "**III.** \"Nereye çıkmak?\" ve **ek almamış** → **yer-yön zarfı**.",
             "**IV.** \"Ne kadar kolay?\" → **çok** → **miktar zarfı** (burada "
             "sıfatı etkiliyor).",
             "**V.** Fiili soruyor → **soru zarfı**.",
         ],
         "sonuc": "Sırasıyla **durum, zaman, yer-yön, miktar ve soru zarfı** "
                  "kullanılmıştır. Miktar zarfı **fiili, sıfatı ya da başka bir zarfı** "
                  "etkileyebilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Miktar Zarfının Özel Durumu"},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Miktar zarfı üç şeyi etkileyebilir**: fiili (\"**çok** çalıştı\"), "
            "sıfatı (\"**çok** güzel ev\"), başka bir zarfı (\"**çok** hızlı koştu\").",
            "**\"Çok\" sözcüğü isimden önce gelirse sıfat olur**: \"**çok** para\" → "
            "\"Ne kadar para?\" → **belgisiz sıfat**.",
            "**Karşılaştırma zarfları**: \"daha, en, pek, gayet, oldukça\" — bunlar "
            "sıfatların derecesini belirtir.",
            "**\"En\" sözcüğü daima zarftır**; sıfatın ya da zarfın derecesini "
            "yükseltir: \"**en** güzel\", \"**en** hızlı\".",
        ]},
        {"tur": "tuzak", "baslik": "\"Çok\" Sözcüğünün Üç Yüzü", "govde":
            "\"**Çok** çalıştı\" → fiili etkiliyor → **zarf**. "
            "\"**Çok** güzel bir ev\" → sıfatı etkiliyor → **zarf**. "
            "\"**Çok** para harcadı\" → \"para\" ismini belirtiyor → **belgisiz sıfat**. "
            "Aynı sözcük, sonrasında **ne olduğuna** göre tür değiştirir. "
            "Sorularda tam olarak bu ayrım sınanır."},
        {"tur": "cozum",
         "baslik": "\"Çok\" Sözcüğünün Türü",
         "soru": "Aşağıdaki cümlelerde \"çok\" sözcüğünün türünü belirleyiniz.\n"
                 "**I.** \"Bu yaz **çok** kitap okudum.\"\n"
                 "**II.** \"Sınava **çok** çalıştım.\"\n"
                 "**III.** \"Bu soru **çok** zordu.\"",
         "adimlar": [
             "**I.** \"Çok\"tan sonra **\"kitap\" ismi** var → \"Kaç kitap?\" → "
             "**belgisiz sıfat**.",
             "**II.** \"Çok\"tan sonra **\"çalıştım\" fiili** var → \"Ne kadar "
             "çalıştım?\" → **miktar zarfı**.",
             "**III.** \"Çok\"tan sonra **\"zor\" sıfatı** var → sıfatın derecesini "
             "belirtiyor → **miktar zarfı**.",
         ],
         "sonuc": "**I: belgisiz sıfat**, **II ve III: miktar zarfı**. Ayrım, "
                  "\"çok\" sözcüğünün **neyi etkilediğine** dayanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Zamir ve Zarfın Öge Olma Durumu"},
        {"tur": "tablo",
         "basliklar": ["Sözcük türü", "Cümledeki durumu", "Örnek"],
         "satirlar": [
             ["**Zamir**", "**Öge olur**: özne, nesne, tümleç",
              "\"**O** geldi\" (özne); \"**Onu** gördüm\" (nesne)"],
             ["**Zarf**", "**Zarf tümleci** olur",
              "\"**Dün** geldi\" (zarf tümleci)"],
             ["**Yer-yön zarfı**", "**Zarf tümlecidir**, dolaylı tümleç değil",
              "\"**İçeri** girdi\" (zarf tümleci)"],
             ["**Ek almış yer adı**", "**Dolaylı tümleç** olur",
              "\"**İçeriye** girdi\" (dolaylı tümleç)"],
         ],
         "oranlar": [0.24, 0.36, 0.40]},
        {"tur": "dikkat", "baslik": "Zamir ve Zarf Sorularında Üç Alışkanlık", "ogeler": [
            "**Zamir bulurken sor**: \"Bu sözcük hangi ismin yerine geçmiş?\" Cevap "
            "verebiliyorsan zamirdir.",
            "**Zarf bulurken sor**: \"Bu sözcük hangi fiili etkiliyor?\" Bir fiile "
            "bağlanabiliyorsa zarftır.",
            "**Sıfat-zarf karıştığında hemen sonrasına bak**: isim geliyorsa sıfat, "
            "fiil geliyorsa zarftır.",
            "**Yer-yön zarfında ek olmamalıdır**; ek varsa dolaylı tümleçtir.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Zamir ismin yerini tutar**, **zarf fiili etkiler**.",
            "**Beş zamir türü**: kişi, işaret, soru, belgisiz, dönüşlülük.",
            "**İlgi zamiri \"-ki\" ismin yerine geçer** (benimki).",
            "**Sıfat yapan \"-ki\" ismi niteler** (akşamki film).",
            "**Zamirler öge olur ve çekim eki alabilir.**",
            "**Beş zarf türü**: durum, zaman, yer-yön, miktar, soru.",
            "**Yer-yön zarfı ek almaz**; ek alırsa dolaylı tümleç olur.",
            "**Miktar zarfı fiili, sıfatı ya da zarfı** etkileyebilir.",
            "**\"Çok\" isimden önce sıfat**, fiil ve sıfattan önce **zarftır**.",
            "**\"En\" daima zarftır.**",
            "**Sıfat mı zarf mı? Hemen sonrasına bak.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruda **hangi soruyu sorduğunu** yaz: zamir için "
            "\"hangi ismin yerine geçti?\", zarf için \"hangi fiili etkiliyor?\". "
            "Bu iki soru, konunun tamamını kapsar.",
        "satir_sayisi": 2,
        "sorular": [
            "Zamiri tanımlayarak beş türünü yazınız.",
            "Kişi zamirlerini sıralayınız.",
            "İşaret zamirlerine üç örnek veriniz.",
            "Soru zamirlerine üç örnek veriniz.",
            "Belgisiz zamirlere üç örnek veriniz.",
            "Dönüşlülük zamirini tanımlayarak örnek veriniz.",
            "İlgi zamirini tanımlayarak örnek veriniz.",
            "İlgi zamiri ile iyelik ekini ayıran ölçütü yazınız.",
            "'Benimki daha güzel' cümlesinde '-ki'nin türünü belirleyiniz.",
            "'Akşamki film güzeldi' cümlesinde '-ki'nin türünü belirleyiniz.",
            "İki '-ki'yi ayıran soruyu yazınız.",
            "Zamirlerin cümledeki öge durumunu yazınız.",
            "Zamirlerin çekim eki alıp alamayacağını örnekle açıklayınız.",
            "'O' sözcüğünün kişi zamiri olduğu bir cümle yazınız.",
            "'O' sözcüğünün işaret sıfatı olduğu bir cümle yazınız.",
            "Belgisiz zamir ile belgisiz sıfatı ayırt eden ölçütü yazınız.",
            "'Bazı öğrenciler' ve 'bazısı geldi' örneklerini tür bakımından karşılaştırınız.",
            "'Bunu kim getirdi?' cümlesindeki zamirleri ve türlerini yazınız.",
            "'Hepsi sınavı geçti' cümlesindeki zamirin türünü yazınız.",
            "'Kendi işini kendi görür' cümlesindeki zamirin türünü yazınız.",
            "Zarfı tanımlayarak beş türünü yazınız.",
            "Durum zarfının sorusunu ve iki örneğini yazınız.",
            "Zaman zarfının sorusunu ve iki örneğini yazınız.",
            "Yer-yön zarfının sorusunu ve iki örneğini yazınız.",
            "Miktar zarfının sorusunu ve iki örneğini yazınız.",
            "Soru zarfına iki örnek veriniz.",
            "Yer-yön zarfı olabilmenin tek koşulunu yazınız.",
            "'İçeri girdi' ve 'içeriye girdi' örneklerini tür bakımından karşılaştırınız.",
            "Yer-yön zarfı olabilecek sözcükleri sıralayınız.",
            "Miktar zarfının etkileyebileceği üç sözcük türünü yazınız.",
            "'Çok çalıştı' cümlesinde 'çok' sözcüğünün türünü belirleyiniz.",
            "'Çok güzel bir ev' ifadesinde 'çok' sözcüğünün türünü belirleyiniz.",
            "'Çok para harcadı' cümlesinde 'çok' sözcüğünün türünü belirleyiniz.",
            "'Çok' sözcüğünün türünü belirleyen ölçütü yazınız.",
            "Karşılaştırma bildiren zarflara üç örnek veriniz.",
            "'En' sözcüğünün türünü gerekçesiyle yazınız.",
            "Sıfat ile zarfı ayıran ölçütü yazınız.",
            "'Güzel ev' ve 'güzel yazdı' örneklerini tür bakımından karşılaştırınız.",
            "'Çocuk sessizce odadan çıktı' cümlesindeki zarfın türünü belirleyiniz.",
            "'Yarın sizi ziyaret edeceğim' cümlesindeki zarfın türünü belirleyiniz.",
            "'Dışarı çıkmak istemiyorum' cümlesindeki zarfın türünü belirleyiniz.",
            "'Bu soru çok kolaydı' cümlesindeki zarfın türünü belirleyiniz.",
            "'Neden bu kadar geç kaldın?' cümlesindeki zarfın türünü belirleyiniz.",
            "Zarfın cümledeki öge durumunu yazınız.",
            "Yer-yön zarfının hangi öge olduğunu yazınız.",
            "Ek almış yer adının hangi öge olduğunu yazınız.",
            "Zamir bulurken sorulacak soruyu yazınız.",
            "Zarf bulurken sorulacak soruyu yazınız.",
            "'Kendisi' sözcüğünün hem dönüşlülük hem kişi zamiri gibi kullanıldığı örnekler yazınız.",
            "Kendi kurduğunuz bir cümlede üç farklı zarf türünü kullanınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**İsmin yerini tutan** sözcüklerdir. Türleri: **kişi, işaret, soru, belgisiz, dönüşlülük**.",
            "**ben, sen, o, biz, siz, onlar**.",
            "**bu, şu, o** (ayrıca bunlar, şunlar, öteki, beriki).",
            "**kim, ne, hangisi** (ayrıca nere, kaçı, kaçıncısı).",
            "**kimse, hepsi, bazısı** (ayrıca birkaçı, herkes, hiçbiri).",
            "Özneye **dönerek onu pekiştiren** zamirdir: **kendi** (kendim, kendin, kendisi). \"İşini **kendi** yaptı.\"",
            "**Ek hâlindeki zamirdir**; ismin yerini tutar ve bitişik yazılır: \"Benim**ki** daha güzel.\"",
            "**İlgi zamiri bir ismin yerine geçer**; **iyelik eki yalnızca sahiplik bildirir** ve tek başına isim yerine geçmez.",
            "**İlgi zamiri**; \"kalemim\" ismi yerine geçmiştir.",
            "**Sıfat yapan yapım eki**; \"film\" ismini nitelemiştir, ismin yerine geçmemiştir.",
            "**\"Bu -ki bir ismin yerine mi geçti, yoksa bir ismi mi niteledi?\"**",
            "**Öge olurlar**: özne, nesne ya da tümleç görevinde bulunabilirler.",
            "**Alabilirler**: \"ben**i**\", \"sen**den**\", \"onlar**a**\".",
            "\"**O** dün bize geldi.\" — bir kişinin yerini tutuyor.",
            "\"**O** kitabı bana ver.\" — \"kitap\" ismini belirtiyor, sıfat görevinde.",
            "**Belgisiz sıfat ismin önünde bulunur**; **belgisiz zamir tek başına, ismin yerine** kullanılır.",
            "**\"Bazı öğrenciler\"**: \"öğrenciler\" ismini belirtiyor → **belgisiz sıfat**. **\"Bazısı geldi\"**: ismin yerini tutuyor → **belgisiz zamir**.",
            "**\"Bunu\"** → işaret zamiri. **\"Kim\"** → soru zamiri.",
            "**Belgisiz zamir**; belirsiz bir çokluğun yerini tutuyor.",
            "**Dönüşlülük zamiri**; özneye dönerek onu pekiştiriyor.",
            "Fiili, sıfatı ya da başka bir zarfı **etkileyen** sözcüklerdir. Türleri: **durum, zaman, yer-yön, miktar, soru**.",
            "**\"Nasıl?\"** — \"**hızlı** koştu\", \"**sessizce** girdi\".",
            "**\"Ne zaman?\"** — \"**dün** geldi\", \"**şimdi** çıkıyor\".",
            "**\"Nereye?\"** (ek almadan) — \"**içeri** girdi\", \"**dışarı** çıktı\".",
            "**\"Ne kadar?\"** — \"**çok** çalıştı\", \"**az** konuştu\".",
            "**nasıl**, **ne zaman** (ayrıca niçin, neden, nereye).",
            "**Ek almamış olmalıdır.** Ek alırsa dolaylı tümleç olur.",
            "**\"İçeri girdi\"**: ek yok → **yer-yön zarfı**. **\"İçeriye girdi\"**: yönelme eki almış → **dolaylı tümleç**.",
            "**içeri, dışarı, ileri, geri, yukarı, aşağı, öte, beri**.",
            "**Fiili**, **sıfatı** ve **başka bir zarfı**.",
            "**Miktar zarfı**; \"çalıştı\" fiilini etkiliyor.",
            "**Miktar zarfı**; \"güzel\" sıfatının derecesini belirtiyor.",
            "**Belgisiz sıfat**; \"para\" ismini belirtiyor (\"Kaç para?\").",
            "**Hemen sonrasında ne olduğu**: isim geliyorsa sıfat, fiil ya da sıfat geliyorsa zarftır.",
            "**daha, en, pek** (ayrıca gayet, oldukça).",
            "**Daima zarftır**; sıfatın ya da zarfın derecesini yükseltir: \"**en** güzel\", \"**en** hızlı\".",
            "**Sıfat ismi**, **zarf fiili (ya da sıfatı, başka zarfı) etkiler.** Hemen sonrasına bakılır.",
            "**\"Güzel ev\"**: \"ev\" ismini niteliyor → **sıfat**. **\"Güzel yazdı\"**: \"yazdı\" fiilini niteliyor → **zarf**.",
            "**Durum zarfı**; \"Nasıl çıktı?\" sorusuna cevap veriyor.",
            "**Zaman zarfı**; \"Ne zaman ziyaret edecek?\" sorusuna cevap veriyor.",
            "**Yer-yön zarfı**; ek almamış ve yön bildiriyor.",
            "**Miktar zarfı**; \"kolay\" sıfatının derecesini belirtiyor.",
            "**Soru zarfı**; fiili soruyor.",
            "**Zarf tümleci** olur.",
            "**Zarf tümlecidir**, dolaylı tümleç değildir.",
            "**Dolaylı tümleç** olur: \"**içeriye** girdi\".",
            "**\"Bu sözcük hangi ismin yerine geçmiş?\"**",
            "**\"Bu sözcük hangi fiili etkiliyor?\"**",
            "**Dönüşlülük**: \"Bu işi **kendisi** yaptı.\" (özneye dönüyor). **Kişi zamiri gibi**: \"**Kendisi** yarın gelecekmiş.\" (nazik bir anlatımla \"o\" yerine).",
            "\"**Dün** (zaman) **hızlıca** (durum) **içeri** (yer-yön) girdi.\"",
        ],
    },
}
