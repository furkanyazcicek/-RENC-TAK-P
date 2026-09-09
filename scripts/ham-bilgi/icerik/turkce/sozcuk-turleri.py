"""TYT Türkçe — Sözcük Türleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: SÖZCÜK TÜRLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Sözcük Türleri",
    "alt_baslik": "Ham bilgi notu — sekiz sözcük türü, edat, bağlaç, ünlem ve tür "
                  "kayması; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Sözcük Türleri",
        "kazanimlar": "Sözcük türlerini tanır ve ayırt eder. "
                      "Edat, bağlaç ve ünlemleri işlevleriyle bilir. "
                      "Sözcüğün cümledeki türünü belirler. "
                      "Tür kaymalarını fark eder.",
        "kapsam": "İsim, sıfat, zamir, zarf, fiil, edat, bağlaç, ünlem; edat-bağlaç "
                  "ayrımı, \"ile, ki, de, mi\" sözcüklerinin türleri, tür kayması, "
                  "sözcüğün cümledeki görevi, 50 analiz sorusu",
        "nasil": "Türkçede **bir sözcüğün türü tek başına belirlenemez**; "
                 "**cümledeki görevine** bakılır. Aynı sözcük bir cümlede sıfat, "
                 "diğerinde zarf olabilir. Bu yüzden her soruda **sözcüğü cümlede "
                 "sına**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **edat-bağlaç ayrımı**, "
                    "**\"de/ki\" türü** ya da **tür kayması** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Sekiz Sözcük Türü"},
        {"tur": "tablo",
         "basliklar": ["Tür", "İşlevi", "Örnek"],
         "satirlar": [
             ["**İsim (ad)**", "Varlıkları ve kavramları **karşılar**",
              "ev, sevgi, Ankara, kalem"],
             ["**Sıfat (ön ad)**", "İsmi **niteler ya da belirtir**",
              "**güzel** ev, **üç** kalem, **bu** kitap"],
             ["**Zamir (adıl)**", "İsmin **yerini tutar**",
              "ben, bu, kim, hepsi, -ki"],
             ["**Zarf (belirteç)**", "Fiili, sıfatı ya da başka zarfı **etkiler**",
              "**hızlı** koştu, **çok** güzel, **dün** geldi"],
             ["**Fiil (eylem)**", "İş, oluş ya da durum **bildirir**",
              "geldi, okuyor, uyumuş"],
             ["**Edat (ilgeç)**", "Tek başına anlamsız; **anlam ilgisi** kurar",
              "gibi, kadar, için, ile, göre"],
             ["**Bağlaç**", "Sözcük ya da cümleleri **bağlar**",
              "ve, ama, çünkü, ile, ki, de"],
             ["**Ünlem**", "**Duygu** ve **seslenme** bildirir",
              "Ah!, Eyvah!, Ey!, Hey!"],
         ],
         "oranlar": [0.20, 0.42, 0.38]},
        {"tur": "gorsel", "baslik": "Şema 1 — İki büyük grup",
         "aciklama": "Sözcük türleri önce **anlamlı olup olmadıklarına** göre ikiye "
                     "ayrılır. Bu ayrım, edat-bağlaç sorularının temelidir.",
         "ciz": S.karsilastirma(
             "ANLAMLI sözcükler",
             ["**Tek başına anlam taşır**",
              "**İsim**: varlık karşılar",
              "**Sıfat**: ismi niteler",
              "**Zamir**: ismin yerini tutar",
              "**Zarf**: fiili etkiler",
              "**Fiil**: eylem bildirir"],
             "GÖREVLİ sözcükler",
             ["**Tek başına anlam taşımaz**",
              "Cümlede **görev** üstlenir",
              "**Edat**: anlam ilgisi kurar",
              "**Bağlaç**: bağlantı kurar",
              "**Ünlem**: duygu bildirir",
              "Cümleden **çıkarılamazlar** (edat)"],
             "Ayırt etme",
             ["**\"Tek başına anlamı var mı?\"**",
              "Varsa **anlamlı**, yoksa **görevli**",
              "Görevliler **çekim eki almaz**"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Edat ve Bağlaç Ayrımı"},
        {"tur": "taktik", "baslik": "Edat mı Bağlaç mı? Çıkarma Testi", "govde":
            "En güvenilir yöntem **çıkarma testidir**: sözcüğü cümleden **çıkar**. "
            "**Cümlenin anlamı bozuluyorsa edat**, **anlam korunuyorsa bağlaçtır**. "
            "\"Kuş **gibi** uçuyor\" → \"gibi\"yi çıkarınca anlam bozulur → **edat**. "
            "\"Ali **ve** Ayşe geldi\" → \"ve\"yi çıkarınca anlam korunur (\"Ali, Ayşe "
            "geldi\") → **bağlaç**."},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Edat (ilgeç)", "Bağlaç"],
         "satirlar": [
             ["**Görevi**", "**Anlam ilgisi** kurar", "**Bağlantı** kurar"],
             ["**Çıkarılırsa**", "Anlam **bozulur**", "Anlam **korunur**"],
             ["**Cümledeki yeri**", "Kendinden önceki sözcükle **öbek kurar**",
              "İki ögeyi ya da cümleyi **bağlar**"],
             ["**Öge olma**", "Bir **ögenin parçası** olur", "**Öge olmaz**, cümle dışıdır"],
             ["**Örnekler**", "gibi, kadar, için, göre, ile, dolayı",
              "ve, ama, fakat, çünkü, ki, de, ile"],
         ],
         "oranlar": [0.22, 0.39, 0.39]},
        {"tur": "tuzak", "baslik": "\"İle\" Sözcüğü Hem Edat Hem Bağlaçtır", "govde":
            "**\"İle\" yerine \"ve\" konabiliyorsa bağlaçtır**: \"Ali **ile** Ayşe "
            "geldi\" = \"Ali **ve** Ayşe geldi\" → **bağlaç**. "
            "**Konamıyorsa edattır**: \"Kalem **ile** yazdım\" (\"ve\" konamaz) → "
            "**edat**; burada \"ile\" **araç** bildirir. Bu tek sınama, \"ile\" "
            "sorularının tamamını çözer."},
        {"tur": "cozum",
         "baslik": "Edat–Bağlaç Belirleme",
         "soru": "Aşağıdaki cümlelerde altı çizili sözcüklerin türünü belirleyiniz.\n"
                 "**I.** \"Bu iş, senin **için** çok kolay.\"\n"
                 "**II.** \"Geldi **ama** kimseyle konuşmadı.\"\n"
                 "**III.** \"Ahmet **ile** Mehmet yola çıktı.\"\n"
                 "**IV.** \"Kapıyı anahtar **ile** açtı.\"",
         "adimlar": [
             "**I.** \"İçin\"i çıkar: \"Bu iş, senin çok kolay\" → anlam **bozuldu** → "
             "**edat**.",
             "**II.** \"Ama\"yı çıkar: \"Geldi, kimseyle konuşmadı\" → anlam "
             "**korundu** → **bağlaç**.",
             "**III.** \"İle\" yerine \"ve\" konabiliyor mu? \"Ahmet **ve** Mehmet\" → "
             "evet → **bağlaç**.",
             "**IV.** \"Anahtar **ve** açtı\" olmaz → **edat** (araç bildiriyor).",
         ],
         "sonuc": "**I: edat**, **II: bağlaç**, **III: bağlaç**, **IV: edat**. "
                  "Aynı sözcük (\"ile\") iki farklı türde kullanılabilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "\"de\", \"ki\" ve \"mi\" Sorunu"},
        {"tur": "gorsel", "baslik": "Şema 2 — Ayrı mı bitişik mi?",
         "aciklama": "Bu üç sözcük hem **ek** hem **bağlaç** olabilir. Ek olanlar "
                     "**bitişik**, bağlaç olanlar **ayrı** yazılır. Ayrım, hem tür "
                     "hem yazım sorularında karşına çıkar.",
         "ciz": S.dikey_akis(
             ["\"de / da\"", "\"ki\"", "\"mi / mı\""],
             ["**Bağlaç ise ayrı yazılır** ve \"**dahi, bile**\" anlamı taşır: "
              "\"Ben **de** geldim.\" **Hâl eki ise bitişik yazılır** ve **bulunma** "
              "bildirir: \"Ev**de** kaldım.\" Sınama: **çıkarınca anlam bozulmuyorsa "
              "bağlaçtır**.",
              "**Bağlaç ise ayrı** yazılır: \"Duydum **ki** gelmiş.\" **Sıfat yapan ek "
              "ise bitişik**: \"akşam**ki** film\". **İlgi zamiri ise bitişik**: "
              "\"Benim**ki** daha güzel.\"",
              "**Soru eki daima ayrı yazılır** ama **kendinden sonraki eke bitişir**: "
              "\"Geldi **mi**?\", \"Güzel **mi**ymiş?\" Soru anlamı katmasa bile "
              "ayrı yazılır: \"Yağmur yağdı **mı** sokaklar dolar.\""])},
        {"tur": "dikkat", "baslik": "\"de\" Bağlacının Üç Sınaması", "ogeler": [
            "**Çıkarma sınaması**: \"de\"yi çıkardığında cümle anlamlı kalıyorsa "
            "**bağlaçtır** (ayrı yazılır).",
            "**\"Dahi/bile\" sınaması**: yerine \"dahi\" ya da \"bile\" konabiliyorsa "
            "**bağlaçtır**.",
            "**Sertleşme sınaması**: bağlaç olan \"de\" **asla \"te\" olmaz**. "
            "\"Kitap **te**\" yanlıştır; \"Kitap **da**\" doğrudur. Hâl eki ise "
            "sertleşir: \"kitap**ta**\".",
            "Üç sınama da aynı sonucu verir; biri yeterlidir ama şüphedeysen **ikisini "
            "birden** uygula.",
        ]},
        {"tur": "cozum",
         "baslik": "\"de\" ve \"ki\" Ayrımı",
         "soru": "Aşağıdaki cümlelerde \"de\" ve \"ki\" sözcüklerinin türünü ve "
                 "yazımını belirleyiniz.\n"
                 "**I.** \"Sen de mi bizimle geliyorsun?\"\n"
                 "**II.** \"Çantayı masada bıraktım.\"\n"
                 "**III.** \"Sanmıştım ki her şey yolunda.\"\n"
                 "**IV.** \"Dünkü toplantıya katılamadım.\"",
         "adimlar": [
             "**I.** \"de\"yi çıkar: \"Sen mi bizimle geliyorsun?\" → anlamlı → "
             "**bağlaç**, **ayrı** yazılır.",
             "**II.** \"masa**da**\" → \"nerede?\" sorusuna cevap veriyor → **bulunma "
             "hâli eki**, **bitişik** yazılır.",
             "**III.** \"ki\" iki cümleyi bağlıyor → **bağlaç**, **ayrı** yazılır.",
             "**IV.** \"dün**kü**\" → \"dün\" ismini sıfat yapmış → **yapım eki**, "
             "**bitişik** yazılır.",
         ],
         "sonuc": "**I: bağlaç (ayrı)**, **II: hâl eki (bitişik)**, **III: bağlaç "
                  "(ayrı)**, **IV: yapım eki (bitişik)**. Ayrım hem **tür** hem "
                  "**yazım** sorusudur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Tür Kayması"},
        {"tur": "tanim", "kavram": "Tür kayması",
         "aciklama": "Bir sözcüğün **cümledeki göreve göre tür değiştirmesidir**. "
                     "Türkçede sözcüklerin türü **sabit değildir**; aynı sözcük farklı "
                     "cümlelerde farklı türlerde bulunabilir. Bu yüzden tür, **cümlede** "
                     "belirlenir."},
        {"tur": "tablo",
         "basliklar": ["Sözcük", "Bir cümlede", "Başka cümlede"],
         "satirlar": [
             ["**güzel**", "**Sıfat**: güzel bir gün", "**Zarf**: güzel konuştu"],
             ["**bu**", "**Sıfat**: bu kitap", "**Zamir**: bunu aldım"],
             ["**iyi**", "**Sıfat**: iyi insan", "**Zarf**: iyi anladın"],
             ["**genç**", "**Sıfat**: genç adam", "**İsim**: gençler geldi"],
             ["**az**", "**Sıfat**: az para", "**Zarf**: az konuştu"],
             ["**doğru**", "**Sıfat**: doğru cevap", "**Zarf**: doğru gitti"],
         ],
         "oranlar": [0.20, 0.40, 0.40]},
        {"tur": "taktik", "baslik": "Sıfat mı Zarf mı? Neyi Etkilediğine Bak", "govde":
            "**Sıfat ismi**, **zarf fiili (ya da sıfatı, başka zarfı) etkiler.** "
            "\"**Güzel** çiçek\" → \"güzel\" **çiçeği** (isim) niteliyor → **sıfat**. "
            "\"**Güzel** konuştu\" → \"güzel\" **konuşmayı** (fiil) niteliyor → "
            "**zarf**. Ölçüt tek: **hemen sonrasında isim mi var, fiil mi?**"},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**İsimleşme (adlaşmış sıfat)**: sıfat, nitelediği isim düşünce isimleşir: "
            "\"**Yaşlılar** öne otursun.\" Burada \"yaşlılar\" **isim** görevindedir.",
            "**Zamir, ismin yerini tutar**; bu yüzden \"bu, şu, o\" tek başına "
            "kullanılırsa **zamir**, ismin önünde kullanılırsa **sıfattır**.",
            "**Ünlemler cümlenin ögesi olmaz**; cümle dışı unsurdur ve genellikle "
            "**virgülle** ayrılır.",
            "**Bağlaçlar da cümlenin ögesi olmaz**; iki ögeyi ya da cümleyi bağlar.",
        ]},
        {"tur": "cozum",
         "baslik": "Tür Belirleme",
         "soru": "Aşağıdaki cümlelerde altı çizili sözcüklerin türünü belirleyiniz.\n"
                 "**I.** \"**Bu** soruyu çözemedim.\"\n"
                 "**II.** \"**Bunu** kim yaptı?\"\n"
                 "**III.** \"Çok **hızlı** bir araba aldı.\"\n"
                 "**IV.** \"Çok **hızlı** yürüyordu.\"",
         "adimlar": [
             "**I.** \"Bu\" hemen sonrasındaki **\"soru\" ismini** belirtiyor → "
             "**işaret sıfatı**.",
             "**II.** \"Bunu\" tek başına, **ismin yerini** tutuyor → **işaret zamiri**.",
             "**III.** \"Hızlı\" **\"araba\" ismini** niteliyor → **sıfat**.",
             "**IV.** \"Hızlı\" **\"yürüyordu\" fiilini** niteliyor → **zarf**.",
         ],
         "sonuc": "Aynı sözcükler **farklı türlerde** kullanılmıştır. Türü belirleyen "
                  "şey sözcüğün kendisi değil, **cümledeki görevidir**."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Sekiz tür**: isim, sıfat, zamir, zarf, fiil, edat, bağlaç, ünlem.",
            "**Anlamlı sözcükler** tek başına anlam taşır; **görevliler** taşımaz.",
            "**Edat çıkarılınca anlam bozulur**, **bağlaç çıkarılınca korunur**.",
            "**Edat öge olur**, **bağlaç öge olmaz**.",
            "**\"İle\" yerine \"ve\" konabiliyorsa bağlaç**, konamıyorsa edattır.",
            "**Bağlaç \"de\" ayrı**, **hâl eki \"de\" bitişik** yazılır.",
            "**Bağlaç \"de\" asla \"te\" olmaz.**",
            "**Bağlaç \"ki\" ayrı**, **yapım eki \"-ki\" bitişik** yazılır.",
            "**Soru eki \"mi\" daima ayrı** yazılır.",
            "**Sıfat ismi**, **zarf fiili** etkiler.",
            "**\"Bu, şu, o\"** ismin önündeyse **sıfat**, tek başınaysa **zamirdir**.",
            "**Türkçede sözcüğün türü cümlede belirlenir.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her sorunun cevabında **hangi sınamayı kullandığını** da "
            "yaz: çıkarma testi mi, \"ve\" testi mi, \"neyi etkiliyor\" testi mi? "
            "Sınamayı adlandırmak, sınavda refleks hâline gelmesini sağlar.",
        "satir_sayisi": 2,
        "sorular": [
            "Sekiz sözcük türünü sıralayınız.",
            "Anlamlı ve görevli sözcükleri ayıran ölçütü yazınız.",
            "İsmi tanımlayarak üç örnek veriniz.",
            "Sıfatı tanımlayarak üç örnek veriniz.",
            "Zamiri tanımlayarak üç örnek veriniz.",
            "Zarfı tanımlayarak üç örnek veriniz.",
            "Fiili tanımlayarak üç örnek veriniz.",
            "Edatı tanımlayarak üç örnek veriniz.",
            "Bağlacı tanımlayarak üç örnek veriniz.",
            "Ünlemi tanımlayarak üç örnek veriniz.",
            "Edat ile bağlacı ayıran çıkarma testini açıklayınız.",
            "Edat ve bağlacın öge olma durumlarını karşılaştırınız.",
            "'Kuş gibi uçuyor' cümlesinde 'gibi' sözcüğünün türünü sınayarak belirleyiniz.",
            "'Ali ve Ayşe geldi' cümlesinde 've' sözcüğünün türünü sınayarak belirleyiniz.",
            "'İle' sözcüğünün türünü belirleyen sınamayı yazınız.",
            "'Ahmet ile Mehmet yola çıktı' cümlesinde 'ile' sözcüğünün türünü belirleyiniz.",
            "'Kapıyı anahtar ile açtı' cümlesinde 'ile' sözcüğünün türünü belirleyiniz.",
            "'Bu iş senin için çok kolay' cümlesinde 'için' sözcüğünün türünü belirleyiniz.",
            "'Geldi ama kimseyle konuşmadı' cümlesinde 'ama' sözcüğünün türünü belirleyiniz.",
            "Bağlaç olan 'de'nin yazımını ve anlamını yazınız.",
            "Hâl eki olan 'de'nin yazımını ve işlevini yazınız.",
            "'de' bağlacının üç sınamasını yazınız.",
            "Bağlaç olan 'de'nin neden sertleşmediğini açıklayınız.",
            "'Sen de mi bizimle geliyorsun?' cümlesinde 'de'nin türünü belirleyiniz.",
            "'Çantayı masada bıraktım' cümlesinde 'da'nın türünü belirleyiniz.",
            "Bağlaç olan 'ki'nin yazımını örnekle yazınız.",
            "Yapım eki olan '-ki'nin yazımını örnekle yazınız.",
            "İlgi zamiri olan '-ki'yi örnekle yazınız.",
            "'Sanmıştım ki her şey yolunda' cümlesinde 'ki'nin türünü belirleyiniz.",
            "'Dünkü toplantıya katılamadım' cümlesinde '-ki'nin türünü belirleyiniz.",
            "Soru eki 'mi'nin yazım kuralını yazınız.",
            "Soru anlamı katmayan 'mi' eki de ayrı yazılır mı? Örnekle açıklayınız.",
            "Tür kaymasını tanımlayınız.",
            "Türkçede sözcüğün türünün neye göre belirlendiğini yazınız.",
            "Sıfat ile zarfı ayıran ölçütü yazınız.",
            "'Güzel çiçek' ve 'güzel konuştu' örneklerini tür bakımından karşılaştırınız.",
            "'Bu' sözcüğünü hem sıfat hem zamir olarak cümlede kullanınız.",
            "'İyi' sözcüğünü hem sıfat hem zarf olarak cümlede kullanınız.",
            "'Genç' sözcüğünü hem sıfat hem isim olarak cümlede kullanınız.",
            "Adlaşmış sıfatı tanımlayarak bir örnek veriniz.",
            "'Yaşlılar öne otursun' cümlesindeki 'yaşlılar' sözcüğünün türünü belirleyiniz.",
            "Ünlemlerin cümledeki öge durumunu yazınız.",
            "Bağlaçların cümledeki öge durumunu yazınız.",
            "'Bu soruyu çözemedim' cümlesinde 'bu' sözcüğünün türünü belirleyiniz.",
            "'Bunu kim yaptı?' cümlesinde 'bunu' sözcüğünün türünü belirleyiniz.",
            "'Çok hızlı bir araba aldı' cümlesinde 'hızlı' sözcüğünün türünü belirleyiniz.",
            "'Çok hızlı yürüyordu' cümlesinde 'hızlı' sözcüğünün türünü belirleyiniz.",
            "Aynı sözcüğün iki farklı türde kullanılabilmesinin nedenini açıklayınız.",
            "'Kadar' sözcüğünü hem edat hem farklı bir görevde kullanınız.",
            "Kendi seçtiğiniz bir sözcüğü üç farklı türde cümlede kullanınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**İsim, sıfat, zamir, zarf, fiil, edat, bağlaç, ünlem.**",
            "**\"Tek başına anlamı var mı?\"** Varsa **anlamlı** (isim, sıfat, zamir, zarf, fiil), yoksa **görevli** (edat, bağlaç, ünlem) sözcüktür.",
            "Varlıkları ve kavramları **karşılayan** sözcüklerdir: **ev, sevgi, Ankara**.",
            "İsmi **niteleyen ya da belirten** sözcüklerdir: **güzel** ev, **üç** kalem, **bu** kitap.",
            "İsmin **yerini tutan** sözcüklerdir: **ben, bu, kim** (ayrıca hepsi, -ki).",
            "Fiili, sıfatı ya da başka bir zarfı **etkileyen** sözcüklerdir: **hızlı** koştu, **çok** güzel, **dün** geldi.",
            "İş, oluş ya da durum **bildiren** sözcüklerdir: **geldi, okuyor, uyumuş**.",
            "Tek başına anlamı olmayan, sözcükler arasında **anlam ilgisi kuran** sözcüklerdir: **gibi, kadar, için**.",
            "Sözcük, sözcük öbeği ya da cümleleri **bağlayan** sözcüklerdir: **ve, ama, çünkü**.",
            "**Duygu ve seslenme** bildiren sözcüklerdir: **Ah!, Eyvah!, Ey!**",
            "Sözcük cümleden **çıkarılır**: anlam **bozuluyorsa edat**, **korunuyorsa bağlaçtır**.",
            "**Edat, bir ögenin parçası olur** (öge sayılır). **Bağlaç öge olmaz**; cümle dışı bir bağlayıcıdır.",
            "\"Gibi\"yi çıkar: \"Kuş uçuyor\" → anlam **değişti** (benzetme kalktı) → **edat**.",
            "\"Ve\"yi çıkar: \"Ali, Ayşe geldi\" → anlam **korundu** → **bağlaç**.",
            "**\"İle\" yerine \"ve\" konabiliyor mu?** Konabiliyorsa **bağlaç**, konamıyorsa **edattır**.",
            "\"Ahmet **ve** Mehmet\" denebiliyor → **bağlaç**.",
            "\"Anahtar **ve** açtı\" denemiyor; \"ile\" **araç** bildiriyor → **edat**.",
            "\"İçin\"i çıkar: \"Bu iş, senin çok kolay\" → anlam **bozuldu** → **edat**.",
            "\"Ama\"yı çıkar: \"Geldi, kimseyle konuşmadı\" → anlam **korundu** → **bağlaç**.",
            "**Ayrı yazılır** ve **\"dahi, bile\"** anlamı taşır: \"Ben **de** geldim.\"",
            "**Bitişik yazılır** ve **bulunma** bildirir; \"nerede?\" sorusuna cevap verir: \"Ev**de** kaldım.\"",
            "**1)** Çıkarma sınaması. **2)** \"Dahi/bile\" sınaması. **3)** Sertleşme sınaması (bağlaç \"de\" asla \"te\" olmaz).",
            "Bağlaç **ayrı bir sözcüktür**, ek değildir. Ünsüz benzeşmesi **eklerde** görülür; ayrı yazılan bağlaç bu kurala girmez.",
            "Çıkarınca cümle anlamlı kalıyor → **bağlaç**, **ayrı** yazılır.",
            "\"Nerede?\" sorusuna cevap veriyor → **bulunma hâli eki**, **bitişik** yazılır.",
            "**Ayrı yazılır**; iki cümleyi bağlar: \"Duydum **ki** gelmiş.\"",
            "**Bitişik yazılır**; ismi sıfat yapar: \"akşam**ki** film\", \"dün**kü** yağmur\".",
            "**Bitişik yazılır**; ismin yerini tutar: \"Benim**ki** daha güzel.\"",
            "İki cümleyi bağlıyor → **bağlaç**, **ayrı** yazılır.",
            "\"Dün\" ismini sıfat yapmış → **yapım eki**, **bitişik** yazılır.",
            "**Daima ayrı yazılır** ama **kendinden sonraki eke bitişir**: \"Geldi **mi**?\", \"Güzel **mi**ymiş?\"",
            "**Ayrı yazılır.** \"Yağmur yağdı **mı** sokaklar dolar.\" cümlesinde soru anlamı yoktur ama yine ayrı yazılır.",
            "Bir sözcüğün **cümledeki göreve göre tür değiştirmesidir**.",
            "**Cümledeki görevine göre** belirlenir; sözcüğün türü tek başına sabit değildir.",
            "**Sıfat ismi**, **zarf fiili (ya da sıfatı, başka zarfı) etkiler.** Hemen sonrasında isim varsa sıfat, fiil varsa zarftır.",
            "**\"Güzel çiçek\"**: \"güzel\" **çiçek** ismini niteliyor → **sıfat**. **\"Güzel konuştu\"**: \"güzel\" **konuşma** fiilini niteliyor → **zarf**.",
            "**Sıfat**: \"**Bu** kitabı okudum.\" **Zamir**: \"**Bunu** okudum.\"",
            "**Sıfat**: \"**İyi** bir insandır.\" **Zarf**: \"Konuyu **iyi** anladın.\"",
            "**Sıfat**: \"**Genç** adam koştu.\" **İsim**: \"**Gençler** salonda toplandı.\"",
            "**Nitelediği isim düşünce isimleşen sıfattır**: \"**Yaşlılar** öne otursun.\" (\"yaşlı insanlar\" yerine).",
            "**İsim** görevindedir; adlaşmış sıfattır.",
            "**Öge olmazlar**; cümle dışı unsurdur ve genellikle **virgülle** ayrılır.",
            "**Öge olmazlar**; iki ögeyi ya da iki cümleyi bağlarlar.",
            "\"Soru\" ismini belirtiyor → **işaret sıfatı**.",
            "Tek başına, ismin yerini tutuyor → **işaret zamiri**.",
            "\"Araba\" ismini niteliyor → **sıfat**.",
            "\"Yürüyordu\" fiilini niteliyor → **zarf**.",
            "Türkçede sözcüklerin türü **sabit değildir**; tür, sözcüğün **cümlede üstlendiği göreve** göre belirlenir. Aynı sözcük farklı cümlelerde farklı görevler üstlenebilir.",
            "**Edat**: \"Deniz **kadar** derin gözleri vardı.\" **İsim**: \"Bu **kadar**ı da fazla.\"",
            "\"Doğru\" sözcüğü — **Sıfat**: \"**Doğru** cevabı buldun.\" **Zarf**: \"Eve **doğru** yürüdü.\" **İsim**: \"Her zaman **doğru**yu söyle.\"",
        ],
    },
}
