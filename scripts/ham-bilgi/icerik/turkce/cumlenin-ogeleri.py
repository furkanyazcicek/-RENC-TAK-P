"""TYT Türkçe — Cümlenin Ögeleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: CÜMLENİN ÖGELERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Cümlenin Ögeleri",
    "alt_baslik": "Ham bilgi notu — yüklem, özne, nesne, tümleçler ve öge bulma "
                  "sırası; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Cümlenin Ögeleri",
        "kazanimlar": "Cümlenin temel ve yardımcı ögelerini belirler. "
                      "Öge bulma sırasını uygular. "
                      "Nesne türlerini ayırt eder. "
                      "Tümleçleri işlevlerine göre tanır.",
        "kapsam": "Yüklem, özne (gerçek-sözde), belirtili ve belirtisiz nesne, dolaylı "
                  "tümleç, zarf tümleci, cümle dışı unsur; öge bulma sırası, öge "
                  "sorularında sık yapılan hatalar, 50 analiz sorusu",
        "nasil": "Öge bulmanın **tek doğru sırası** vardır: **önce yüklem**, sonra "
                 "özne, sonra nesne, en son tümleçler. Sırayı bozarsan öge kaymaları "
                 "olur. Her soruda **önce yüklemi bul ve yuvarlak içine al**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **öge sayısı**, "
                    "**nesne türü** ya da **öge dizilişi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Öge Bulma Sırası"},
        {"tur": "gorsel", "baslik": "Şema 1 — Doğru sıra: yüklemden başla",
         "aciklama": "Bu sıra **zorunludur**. Yüklem bulunmadan hiçbir öge doğru "
                     "belirlenemez; çünkü bütün sorular **yükleme** sorulur.",
         "ciz": S.akis(
             ["Yüklemi bul", "Özneyi bul", "Nesneyi bul", "Tümleçleri bul"],
             ["genellikle **sonda**\nçekimli fiil ya da ek fiil",
              "**\"Kim? Ne?\"**\nyükleme sorulur",
              "**\"Neyi? Kimi? Ne?\"**\nyükleme sorulur",
              "**\"Nereye? Nerede?\nNasıl? Ne zaman?\"**"])},
        {"tur": "tablo",
         "basliklar": ["Öge", "Sorusu", "Örnek"],
         "satirlar": [
             ["**Yüklem**", "Cümlenin **yargı bildiren** ögesi",
              "\"Çocuk bahçede **oynuyor**.\""],
             ["**Özne**", "Yükleme **\"Kim? Ne?\"**",
              "\"**Çocuk** bahçede oynuyor.\""],
             ["**Belirtili nesne**", "Yükleme **\"Neyi? Kimi?\"**",
              "\"Kitab**ı** okudum.\""],
             ["**Belirtisiz nesne**", "Yükleme **\"Ne?\"**",
              "\"**Kitap** okudum.\""],
             ["**Dolaylı tümleç**", "**\"Nereye? Nerede? Nereden? Kime? Kimde?\"**",
              "\"**Okula** gitti.\""],
             ["**Zarf tümleci**", "**\"Nasıl? Ne zaman? Niçin? Ne kadar?\"**",
              "\"**Dün** geldi.\""],
             ["**Cümle dışı unsur**", "Öge sayılmaz",
              "Ünlemler, bağlaçlar, hitaplar, ara sözler"],
         ],
         "oranlar": [0.24, 0.38, 0.38]},
        {"tur": "taktik", "baslik": "Yüklemi Bulmanın Kesin Yolu", "govde":
            "Yüklem, cümlede **yargı bildiren** ögedir ve genellikle **sonda** bulunur. "
            "İki biçimde olur: **çekimli fiil** (\"geldi\", \"okuyor\") ya da "
            "**ek fiil almış isim** (\"öğretmendi\", \"güzeldir\"). "
            "Yüklemi bulmak için sor: **\"Bu cümlede yargı bildiren, hüküm veren "
            "sözcük hangisi?\"** Bulduğun sözcüğü daire içine al; bütün soruları "
            "ona soracaksın."},
        {"tur": "tuzak", "baslik": "Soruyu Yükleme Sor, Cümleye Değil", "govde":
            "Öge sorularında sorular **yükleme** sorulur, cümleye değil. "
            "\"Ali dün okula gitti\" cümlesinde **\"Kim gitti?\"** diye sorulur → "
            "\"Ali\" (özne). **\"Nereye gitti?\"** → \"okula\" (dolaylı tümleç). "
            "Soruyu yükleme sormazsan yanlış ögeler bulursun. Bu, öge sorularındaki "
            "**en yaygın hatadır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Özne"},
        {"tur": "gorsel", "baslik": "Şema 2 — Gerçek özne ve sözde özne",
         "aciklama": "Özne, cümlede **her zaman görünür olmayabilir**. Görünmediğinde "
                     "yüklemdeki **kişi ekinden** bulunur; buna **gizli özne** denir.",
         "ciz": S.karsilastirma(
             "GERÇEK özne",
             ["Eylemi **yapan** ögedir",
              "Çatı **etkendir**",
              "\"**Ali** kapıyı açtı.\"",
              "Yükleme \"kim?\" sorusu cevap alır",
              "**Gizli** de olabilir: \"(Ben) geldim.\""],
             "SÖZDE özne",
             ["Eylemden **etkilenen** ögedir",
              "Çatı **edilgendir**",
              "\"**Kapı** açıldı.\"",
              "Eylemi yapan **belli değildir**",
              "Aslında **nesne** görevindedir"],
             "Ayırt etme",
             ["**\"Bu işi kim yaptı?\"**",
              "Cevap varsa **gerçek özne**",
              "Cevap yoksa **sözde özne**"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Gizli özne**, cümlede yazılmayan ama **yüklemin kişi ekinden anlaşılan** "
            "öznedir: \"Dün geldim\" → gizli özne **\"ben\"**.",
            "**Özne yalın hâlde bulunur**; çekim eki almaz (iyelik eki alabilir: "
            "\"kitabım geldi\").",
            "**Edilgen çatılı cümlelerde gerçek özne yoktur**; sözde özne bulunur.",
            "**Bir cümlede özne bulunmayabilir**: \"Yağmur yağıyor\" gibi doğa "
            "olaylarında ya da \"Buraya girilmez\" gibi edilgen cümlelerde.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Nesne ve Tümleçler"},
        {"tur": "tablo",
         "basliklar": ["Öge", "Ayırt edici özelliği", "Örnek"],
         "satirlar": [
             ["**Belirtili nesne**", "**Belirtme hâli eki (-i)** alır",
              "\"Kitab**ı** okudum.\" (\"Neyi okudum?\")"],
             ["**Belirtisiz nesne**", "**Yalın hâldedir**, ek almaz",
              "\"**Kitap** okudum.\" (\"Ne okudum?\")"],
             ["**Dolaylı tümleç**", "**-e, -de, -den** eklerini alır",
              "\"Okul**a** gitti\", \"ev**de** kaldı\", \"iş**ten** geldi\""],
             ["**Zarf tümleci**", "**Ek almaz** ya da zarf niteliğindedir",
              "\"**Dün** geldi\", \"**hızlıca** koştu\", \"**içeri** girdi\""],
         ],
         "oranlar": [0.24, 0.34, 0.42]},
        {"tur": "tuzak", "baslik": "Belirtisiz Nesne ile Özneyi Karıştırma", "govde":
            "**İkisi de yalın hâldedir**, bu yüzden karıştırılır. Ayrım, sorulan "
            "sorunun **yükleme mi yoksa özneye mi** sorulduğuna dayanır: "
            "**Özne için \"Kim? Ne?\"** sorusu **yükleme** sorulur; **belirtisiz nesne "
            "için \"Ne?\"** sorusu **özne ve yükleme birlikte** sorulur. "
            "\"Ali kitap okudu\" → \"Kim okudu?\" → Ali (özne). "
            "\"Ali ne okudu?\" → kitap (belirtisiz nesne)."},
        {"tur": "cozum",
         "baslik": "Ögeleri Bulma",
         "soru": "\"**Ali dün akşam kütüphanede yeni aldığı kitabı dikkatle okudu.**\" "
                 "cümlesinin ögelerini bulunuz.",
         "adimlar": [
             "**Yüklem**: \"okudu\" (yargı bildiren, çekimli fiil).",
             "**Özne**: \"Kim okudu?\" → **Ali**.",
             "**Belirtili nesne**: \"Neyi okudu?\" → **yeni aldığı kitabı** "
             "(\"-ı\" eki almış).",
             "**Dolaylı tümleç**: \"Nerede okudu?\" → **kütüphanede**.",
             "**Zarf tümleci**: \"Ne zaman okudu?\" → **dün akşam**; \"Nasıl okudu?\" → "
             "**dikkatle**.",
         ],
         "sonuc": "Cümlede **beş öge** vardır: yüklem, özne, belirtili nesne, dolaylı "
                  "tümleç ve **iki zarf tümleci**. Öge sayılırken **iki zarf tümleci "
                  "ayrı ayrı** sayılır."},
        {"tur": "dikkat", "baslik": "Öge Bölmede Üç Kural", "ogeler": [
            "**Bir öge parçalanmaz**: \"yeni aldığı kitabı\" tek bir nesnedir; "
            "\"yeni\" ve \"kitabı\" ayrı ögeler değildir.",
            "**Tamlamalar tek öge sayılır**: \"okulun bahçesi\" bir bütündür.",
            "**Fiilimsi öbekleri tek öge sayılır**: \"koşarak gelen çocuk\" tek özne.",
            "**Bağlaç ve ünlemler öge değildir**; cümle dışı unsurdur.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Cümle Dışı Unsurlar"},
        {"tur": "tablo",
         "basliklar": ["Unsur", "Açıklaması", "Örnek"],
         "satirlar": [
             ["**Ünlemler**", "Duygu bildirir, cümleye bağlanmaz",
              "\"**Ah**, ne kadar yorgunum!\""],
             ["**Hitaplar (seslenmeler)**", "Kime seslenildiğini bildirir",
              "\"**Çocuklar**, sessiz olun!\""],
             ["**Bağlaçlar**", "Ögeleri ya da cümleleri bağlar",
              "\"Geldi **ama** kimseyi görmedi.\""],
             ["**Ara sözler**", "İki virgül ya da kısa çizgi arasında açıklama yapar",
              "\"Ali, **sınıfın en çalışkanı**, birinci oldu.\""],
         ],
         "oranlar": [0.26, 0.36, 0.38]},
        {"tur": "tuzak", "baslik": "Ara Söz Her Zaman Cümle Dışı Değildir", "govde":
            "Ara söz, **bir ögeyi açıklıyorsa o ögenin parçası** sayılabilir. "
            "\"Ali, **sınıfın en çalışkanı**, birinci oldu\" cümlesinde ara söz "
            "**özneyi (Ali'yi)** açıklamaktadır; bu durumda **özneyle birlikte** "
            "değerlendirilir. Ancak sınavda genellikle **cümle dışı unsur** olarak "
            "sorulur. Soruda ara sözün **neyi açıkladığına** dikkat et."},
        {"tur": "cozum",
         "baslik": "Cümle Dışı Unsurlu Cümle",
         "soru": "\"**Ah çocuklar, dün akşam size bir sürpriz hazırlamıştım ama "
                 "gelemediniz.**\" cümlesinin ögelerini belirleyiniz.",
         "adimlar": [
             "**Cümle dışı unsurlar**: \"Ah\" (ünlem), \"çocuklar\" (hitap), \"ama\" "
             "(bağlaç).",
             "**Birinci cümlenin yüklemi**: \"hazırlamıştım\".",
             "**Özne**: gizli özne **\"ben\"**. **Belirtisiz nesne**: \"bir sürpriz\". "
             "**Dolaylı tümleç**: \"size\". **Zarf tümleci**: \"dün akşam\".",
             "**İkinci cümlenin yüklemi**: \"gelemediniz\"; gizli özne **\"siz\"**.",
         ],
         "sonuc": "Cümlede **üç cümle dışı unsur** vardır ve bunlar **öge sayılmaz**. "
                  "Ayrıca cümle **bağlaçla bağlanmış sıralı cümledir**."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Öge sırası: yüklem → özne → nesne → tümleçler.**",
            "**Soruları daima yükleme sor.**",
            "**Yüklem**: çekimli fiil ya da **ek fiil almış isim**.",
            "**Özne**: \"Kim? Ne?\" — yalın hâlde bulunur.",
            "**Gizli özne** yüklemin kişi ekinden anlaşılır.",
            "**Edilgen cümlede sözde özne** vardır.",
            "**Belirtili nesne \"-i\" eki alır**, belirtisiz nesne **yalındır**.",
            "**Dolaylı tümleç -e, -de, -den** eklerini alır.",
            "**Zarf tümleci ek almaz** ya da zarf niteliğindedir.",
            "**Bir öge parçalanmaz**; tamlamalar ve öbekler **tek öge** sayılır.",
            "**Ünlem, hitap, bağlaç ve ara söz cümle dışı unsurdur.**",
            "**Yer-yön zarfı zarf tümlecidir**, dolaylı tümleç değil.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her cümlede **önce yüklemi işaretle**, sonra soruları ona "
            "sor. Cevaplarını yazarken **hangi soruyu sorduğunu** da belirt; bu "
            "alışkanlık, öge kaymalarını tamamen önler.",
        "satir_sayisi": 2,
        "sorular": [
            "Cümlenin ögelerini bulma sırasını yazınız.",
            "Öge bulurken soruların kime sorulduğunu yazınız.",
            "Yüklemi tanımlayarak iki biçimini yazınız.",
            "Yüklemi bulmak için sorulacak soruyu yazınız.",
            "Özneyi tanımlayarak sorusunu yazınız.",
            "Gizli özneyi tanımlayarak bir örnek veriniz.",
            "Sözde özneyi tanımlayarak bir örnek veriniz.",
            "Gerçek özne ile sözde özneyi ayıran soruyu yazınız.",
            "Öznenin hangi hâlde bulunduğunu yazınız.",
            "Öznesi bulunmayan cümleye iki örnek veriniz.",
            "Belirtili nesneyi tanımlayarak ekini yazınız.",
            "Belirtisiz nesneyi tanımlayarak ek durumunu yazınız.",
            "Belirtili nesnenin sorusunu yazınız.",
            "Belirtisiz nesnenin sorusunu yazınız.",
            "Belirtisiz nesne ile özneyi ayıran ölçütü yazınız.",
            "'Ali kitap okudu' cümlesinde özneyi ve nesneyi bulunuz.",
            "Dolaylı tümleci tanımlayarak eklerini yazınız.",
            "Dolaylı tümlecin sorularını yazınız.",
            "Zarf tümlecini tanımlayarak sorularını yazınız.",
            "Zarf tümlecinin ek durumunu yazınız.",
            "Yer-yön zarfının hangi öge olduğunu yazınız.",
            "'İçeri girdi' ve 'içeriye girdi' cümlelerindeki ögeleri karşılaştırınız.",
            "'Ali dün akşam kütüphanede yeni aldığı kitabı dikkatle okudu' cümlesinin yüklemini bulunuz.",
            "Aynı cümlenin öznesini bulunuz.",
            "Aynı cümlenin nesnesini bulunuz ve türünü yazınız.",
            "Aynı cümlenin dolaylı tümlecini bulunuz.",
            "Aynı cümlenin zarf tümleçlerini bulunuz.",
            "Aynı cümlede kaç öge olduğunu yazınız.",
            "Bir ögenin parçalanamayacağını bir örnekle açıklayınız.",
            "Tamlamaların öge olarak nasıl değerlendirildiğini yazınız.",
            "Fiilimsi öbeklerinin öge olarak nasıl değerlendirildiğini yazınız.",
            "Cümle dışı unsurları sıralayınız.",
            "Ünlemlerin öge durumunu yazınız.",
            "Hitapların öge durumunu yazınız.",
            "Bağlaçların öge durumunu yazınız.",
            "Ara sözü tanımlayarak bir örnek veriniz.",
            "Ara sözün öge durumunu açıklayınız.",
            "'Ah çocuklar, dün akşam size bir sürpriz hazırlamıştım ama gelemediniz' cümlesindeki cümle dışı unsurları bulunuz.",
            "Aynı cümlenin ilk yüklemini ve öznesini yazınız.",
            "Aynı cümlenin dolaylı tümlecini yazınız.",
            "Aynı cümlenin zarf tümlecini yazınız.",
            "'Kapı açıldı' cümlesinin ögelerini belirleyiniz.",
            "'Yağmur yağıyor' cümlesinin ögelerini belirleyiniz.",
            "'Dün geldim' cümlesinin ögelerini belirleyiniz.",
            "'O, sınıfın en çalışkan öğrencisiydi' cümlesinin ögelerini belirleyiniz.",
            "Yüklemi isim olan bir cümle kurup ögelerini gösteriniz.",
            "Beş ögesi bulunan bir cümle kurunuz.",
            "Yalnızca yüklemden oluşan bir cümle kurunuz.",
            "Öge sorularında en sık yapılan hatayı ve nedenini yazınız.",
            "Öge bulma sırasının bozulması hâlinde ne olacağını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Yüklem → özne → nesne → tümleçler.**",
            "**Yükleme** sorulur; cümlenin geneline değil.",
            "Cümlenin **yargı bildiren** ögesidir. İki biçimi: **çekimli fiil** ve **ek fiil almış isim**.",
            "**\"Bu cümlede yargı bildiren, hüküm veren sözcük hangisi?\"**",
            "Yüklemin bildirdiği işi **yapan ya da olan** ögedir. Sorusu: **\"Kim? Ne?\"**",
            "Cümlede **yazılmayan** ama yüklemin **kişi ekinden anlaşılan** öznedir: \"Dün geldim\" → **\"ben\"**.",
            "**Edilgen** cümlede özne gibi görünen ama eylemi yapmayan, ondan **etkilenen** ögedir: \"**Kapı** açıldı.\"",
            "**\"Bu işi kim yaptı?\"** Cevap varsa gerçek özne, yoksa sözde öznedir.",
            "**Yalın hâlde** bulunur; çekim eki almaz (iyelik eki alabilir).",
            "\"**Yağmur yağıyor**\" (doğa olayı) ve \"**Buraya girilmez**\" (edilgen cümle).",
            "Yüklemin bildirdiği işten **doğrudan etkilenen** ve **belirtme hâli eki (-i)** alan ögedir.",
            "İşten etkilenen ama **yalın hâlde** bulunan, ek almayan nesnedir.",
            "**\"Neyi? Kimi?\"**",
            "**\"Ne?\"**",
            "**Sorunun kime sorulduğu**: özne için \"Kim? Ne?\" **yükleme**, belirtisiz nesne için \"Ne?\" **özne ve yükleme birlikte** sorulur.",
            "\"Kim okudu?\" → **Ali** (özne). \"Ali ne okudu?\" → **kitap** (belirtisiz nesne).",
            "Yüklemin yöneldiği, bulunduğu ya da ayrıldığı yeri bildiren ögedir. Ekleri: **-e, -de, -den**.",
            "**\"Nereye? Nerede? Nereden? Kime? Kimde? Kimden?\"**",
            "Yüklemi **durum, zaman, yön, miktar ve sebep** yönünden tamamlayan ögedir. Soruları: **\"Nasıl? Ne zaman? Niçin? Ne kadar?\"**",
            "Genellikle **ek almaz** ya da zaten **zarf niteliğindedir**.",
            "**Zarf tümlecidir**; ek almadığı için dolaylı tümleç sayılmaz.",
            "**\"İçeri girdi\"**: \"içeri\" ek almamış → **zarf tümleci**. **\"İçeriye girdi\"**: yönelme eki almış → **dolaylı tümleç**.",
            "**Okudu**.",
            "**Ali** (\"Kim okudu?\").",
            "**Yeni aldığı kitabı** — \"-ı\" eki almış → **belirtili nesne**.",
            "**Kütüphanede** (\"Nerede okudu?\").",
            "**Dün akşam** (\"Ne zaman?\") ve **dikkatle** (\"Nasıl?\").",
            "**Beş öge**: yüklem, özne, belirtili nesne, dolaylı tümleç ve iki zarf tümleci (zarf tümleçleri ayrı ayrı sayılır, toplam altı öge de denebilir; sınavda genellikle **beş farklı öge türü** biçiminde sorulur).",
            "\"Yeni aldığı kitabı\" **tek bir nesnedir**; \"yeni\" ve \"kitabı\" ayrı ögeler değildir. Öbeğin tamamı bir öge sayılır.",
            "**Tek öge** sayılırlar: \"okulun bahçesi\" bir bütündür, bölünmez.",
            "**Tek öge** sayılırlar: \"koşarak gelen çocuk\" tek bir öznedir.",
            "**Ünlemler, hitaplar (seslenmeler), bağlaçlar** ve **ara sözler**.",
            "**Öge sayılmazlar**; cümle dışı unsurdur ve genellikle virgülle ayrılır.",
            "**Öge sayılmazlar**; kime seslenildiğini bildirirler.",
            "**Öge sayılmazlar**; ögeleri ya da cümleleri bağlarlar.",
            "İki virgül ya da kısa çizgi arasında bir ögeyi **açıklayan** sözdür: \"Ali, **sınıfın en çalışkanı**, birinci oldu.\"",
            "Genellikle **cümle dışı unsur** sayılır; ancak bir ögeyi açıklıyorsa **o ögeyle birlikte** de değerlendirilebilir.",
            "**\"Ah\"** (ünlem), **\"çocuklar\"** (hitap), **\"ama\"** (bağlaç).",
            "**Yüklem**: hazırlamıştım. **Özne**: gizli özne **\"ben\"**.",
            "**Size**.",
            "**Dün akşam**.",
            "**Yüklem**: açıldı. **Sözde özne**: kapı. (Eylemi yapan belli değildir.)",
            "**Yüklem**: yağıyor. **Özne**: yağmur. (Nesne ve tümleç yoktur.)",
            "**Yüklem**: geldim. **Gizli özne**: ben. **Zarf tümleci**: dün.",
            "**Yüklem**: sınıfın en çalışkan öğrencisiydi (ek fiil almış isim). **Özne**: o.",
            "\"**Babam** (özne) **öğretmendi** (yüklem).\" — yüklem, ek fiil almış bir isimdir.",
            "\"**Ali** (özne) **dün** (zarf t.) **okulda** (dolaylı t.) **ödevini** (belirtili nesne) **bitirdi** (yüklem).\"",
            "\"**Yağıyor.**\" — tek ögeli cümledir (gizli özne \"yağmur\" düşünülebilir).",
            "**Soruyu yükleme değil cümleye sormak.** Bu, öge kaymalarına ve yanlış eşleştirmelere yol açar.",
            "Yüklem bulunmadan sorular kime sorulacağı belli olmaz; **bütün ögeler yanlış belirlenir**. Özellikle özne ile belirtisiz nesne karışır.",
        ],
    },
}
