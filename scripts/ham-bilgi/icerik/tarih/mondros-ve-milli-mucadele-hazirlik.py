"""TYT Tarih — Mondros, İşgaller ve Millî Mücadele Hazırlık Dönemi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: MONDROS VE HAZIRLIK DÖNEMİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Mondros ve Millî Mücadele Hazırlık Dönemi",
    "alt_baslik": "Ham bilgi notu — Mondros, işgaller, cemiyetler, genelgeler, "
                  "kongreler ve TBMM'nin açılışı; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
        "kazanimlar": "11.4.1 — Mondros Ateşkes Antlaşması'nın sonuçlarını "
                      "açıklar. 11.4.2 — Millî Mücadele hazırlık dönemini "
                      "değerlendirir. 11.4.3 — Kongrelerin ve genelgelerin "
                      "önemini analiz eder.",
        "kapsam": "Mondros Ateşkes Antlaşması, işgaller, Paris Barış Konferansı, "
                  "İzmir'in işgali, zararlı ve yararlı cemiyetler, Kuvayımilliye, "
                  "Mustafa Kemal'in Samsun'a çıkışı, Amasya Genelgesi, Erzurum ve "
                  "Sivas kongreleri, Amasya Görüşmeleri, Misakımillî, TBMM'nin "
                  "açılışı, 50 analiz sorusu",
        "nasil": "Bu dönem **belge dönemidir**. Her genelge ve kongre bir "
                 "**hukuki adımdır**; hangisinde **ilk kez** ne söylendiğini "
                 "ayır — sınav tam olarak bunu sorar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **Amasya "
                    "Genelgesi**, **Sivas Kongresi** ya da **Misakımillî** "
                    "üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Mondros Ateşkes Antlaşması (30 Ekim 1918)"},
        {"tur": "tablo",
         "basliklar": ["Madde", "Anlamı ve sonucu"],
         "satirlar": [
             ["**Boğazlar İtilaf'a açılacak**",
              "**İstanbul ve Boğazlar denetimi** fiilen kaybedildi; başkent "
              "tehdit altına girdi"],
             ["**7. madde**",
              "İtilaf devletleri **güvenliklerini tehdit eden bir durumda "
              "istedikleri yeri işgal edebilecek** → **işgallerin hukuki "
              "dayanağı**; antlaşmanın **en tehlikeli maddesidir**"],
             ["**24. madde**",
              "**Altı vilayette (Vilayat-ı Sitte) karışıklık çıkarsa** İtilaf "
              "buraları işgal edebilecek → **Ermeni devleti** kurma zemini"],
             ["**Ordu terhis edilecek**",
              "Osmanlı **savunmasız** bırakıldı; silah ve cephaneye el konuldu"],
             ["**Haberleşme ve ulaşım denetlenecek**",
              "Telsiz, telgraf, demiryolu ve limanlar İtilaf denetimine geçti"],
             ["**Toros tünelleri ve demiryolları**",
              "İtilaf'a teslim edilecek → askerî sevkiyat imkânsız hâle geldi"],
         ],
         "oranlar": [0.30, 0.70]},
        {"tur": "tuzak", "baslik": "7. Madde Neden Bu Kadar Önemli?", "govde":
            "Mondros'un **7. maddesi**, İtilaf devletlerine **istedikleri yeri, "
            "istedikleri gerekçeyle işgal etme** hakkı verdi. Bu madde "
            "sayesinde işgaller **\"hukuka uygun\"** gösterildi. Gerçek işgal "
            "gerekçeleri **gizli antlaşmalardaki paylaşım planlarıydı**; 7. madde "
            "yalnızca **kılıf** oldu. Sınavda \"Mondros'un en tehlikeli maddesi\" "
            "sorulursa cevap **7. maddedir**."},
        {"tur": "gorsel", "baslik": "Şema 1 — Mondros'tan sonra işgaller",
         "aciklama": "İşgaller **kronolojik** ve **bölgesel** olarak sorulur. "
                     "En kritik olan **İzmir'in işgalidir**; tepkiyi o başlatmıştır.",
         "ciz": S.dikey_akis(
             ["İngiltere", "Fransa", "İtalya", "Yunanistan", "Ermeniler"],
             ["**Musul, Urfa, Antep, Maraş, Batum, Samsun, Merzifon**; ayrıca "
              "**İstanbul** (13 Kasım 1918 fiilen, 16 Mart 1920 resmen).",
              "**Adana, Mersin, Dörtyol**; sonra Urfa, Antep ve Maraş'ı "
              "İngiltere'den devraldı.",
              "**Antalya, Konya, Bodrum, Kuşadası, Fethiye**; Saint Jean de "
              "Maurienne'e dayanarak.",
              "**İzmir (15 Mayıs 1919)**; İtilaf onayıyla, sözde **Rum "
              "çoğunluğu koruma** bahanesiyle. **Millî Mücadele'yi başlatan "
              "kıvılcımdır**.",
              "**Doğu Anadolu'da Vilayat-ı Sitte** üzerinde devlet kurma "
              "girişimleri; Mondros'un 24. maddesine dayandırıldı."])},
        {"tur": "dikkat", "baslik": "İzmir'in İşgalinin Sonuçları", "ogeler": [
            "**15 Mayıs 1919**'da Yunan birlikleri İzmir'e çıktı; **Hasan Tahsin** "
            "ilk kurşunu attı.",
            "**Kuvayımilliye** hareketi doğdu; halk **kendiliğinden silahlandı**.",
            "**Protesto mitingleri** ülke geneline yayıldı (Sultanahmet Mitingi).",
            "**Redd-i İlhak Cemiyeti** kuruldu.",
            "İşgalin **Wilson İlkeleri'ne aykırılığı** açıkça görüldü; İtilaf'ın "
            "gerçek niyeti anlaşıldı.",
            "**İstanbul Hükümeti'nin çaresizliği** ortaya çıktı; halk **kendi "
            "kurtuluşunu** aramaya başladı.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Cemiyetler ve Kuvayımilliye"},
        {"tur": "gorsel", "baslik": "Şema 2 — Cemiyetler",
         "aciklama": "Cemiyetleri **amaçlarına göre** üçe ayır. Sınavda "
                     "\"hangisi millî varlığa zararlıdır\" diye sorulur.",
         "ciz": S.karsilastirma(
             "MİLLÎ VARLIĞA ZARARLI",
             ["**Sulh ve Selamet-i Osmaniye**: padişah ve halifeye bağlılık",
              "**Teali İslam**: kurtuluşu hilafette görür",
              "**İngiliz Muhipleri**: İngiliz mandası ister",
              "**Wilson Prensipleri**: Amerikan mandası ister",
              "**Kürt Teali**: doğuda ayrı devlet amaçlar",
              "**Hürriyet ve İtilaf**: İttihatçı karşıtı, işgalle uzlaşmacı"],
             "AZINLIK CEMİYETLERİ",
             ["**Mavri Mira**: Rum, Bizans'ı canlandırmak (Megali İdea)",
              "**Etnik-i Eterya**: Rum, Pontus ve Ege'de Yunan devleti",
              "**Pontus Rum**: Karadeniz'de Rum devleti",
              "**Hınçak ve Taşnak**: Ermeni, Doğu Anadolu'da devlet",
              "**Alyans İsrailit ve Makabi**: Yahudi cemiyetleri"],
             "MİLLÎ (YARARLI) CEMİYETLER",
             ["**Trakya Paşaeli**: Trakya'yı Yunan işgalinden korumak",
              "**İzmir Müdafaa-i Hukuk / Redd-i İlhak**: İzmir'in ilhakını "
              "reddetmek",
              "**Doğu Anadolu Müdafaa-i Hukuk**: Ermeni devletine karşı",
              "**Kilikyalılar**: Çukurova'yı savunmak",
              "**Trabzon Muhafaza-i Hukuk**: Pontus'a karşı",
              "**Millî Kongre**: basın yoluyla dünyaya sesini duyurmak"])},
        {"tur": "tuzak", "baslik": "Millî Cemiyetlerin Ortak Zayıflığı", "govde":
            "Millî cemiyetler **vatanseverdi** ama **bölgeseldi**: her biri "
            "**yalnız kendi bölgesini** kurtarmayı amaçlıyordu ve aralarında "
            "**bağlantı yoktu**. Ayrıca çoğu **basın ve mitingle** mücadeleyi "
            "yeterli görüyordu. **Sivas Kongresi'nde** bu cemiyetlerin **tek "
            "çatı altında (Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti)** "
            "birleştirilmesi, Millî Mücadele'nin **ulusallaşmasını** sağlamıştır."},
        {"tur": "dikkat", "baslik": "Kuvayımilliye Hakkında", "ogeler": [
            "**İşgallere karşı halkın kendiliğinden kurduğu silahlı direniş "
            "birlikleridir**; **düzenli ordu değildir**.",
            "**Olumlu yönleri**: işgalleri yavaşlattı, **düzenli ordu kuruluncaya "
            "kadar zaman kazandırdı**, halkta **direniş bilinci** oluşturdu, "
            "**iç isyanları bastırdı**.",
            "**Olumsuz yönleri**: **disiplinsizdi**, kendi başına karar alıyordu, "
            "**ihtiyaçlarını halktan zorla** karşılıyordu, düşmanı **kesin "
            "sonuca ulaştıracak güçte değildi**.",
            "**8 Kasım 1920'de** düzenli orduya katılmasına karar verildi — "
            "**I. İnönü öncesinde**.",
            "**Çerkez Ethem** gibi bazı Kuvayımilliye önderleri düzenli orduya "
            "girmeyi reddedip **isyan etti**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Genelgeler ve Kongreler"},
        {"tur": "tablo",
         "basliklar": ["Belge", "Tarih", "Getirdiği ve önemi"],
         "satirlar": [
             ["**Samsun'a çıkış**", "19 Mayıs 1919",
              "Mustafa Kemal **9. Ordu Müfettişi** olarak görevlendirildi; "
              "**Millî Mücadele'nin fiilen başlangıcı**"],
             ["**Havza Genelgesi**", "28 Mayıs 1919",
              "**İşgalleri protesto mitingleri** düzenlenmesi istendi → "
              "**halkın harekete geçirilmesi**"],
             ["**Amasya Genelgesi**", "22 Haziran 1919",
              "**\"Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.\"** "
              "**\"Milletin istiklalini yine milletin azim ve kararı "
              "kurtaracaktır.\"** → **Kurtuluş Savaşı'nın gerekçesi, amacı ve "
              "yöntemi ilk kez belirtildi**. **İhtilal bildirisi** niteliğindedir. "
              "**Sivas'ta millî bir kongre** toplanması kararlaştırıldı"],
             ["**Erzurum Kongresi**", "23 Temmuz–7 Ağustos 1919",
              "**Toplanışı bölgesel, kararları ulusaldır**. **Millî sınırlar "
              "içinde vatan bir bütündür, parçalanamaz.** **Manda ve himaye "
              "kabul edilemez** (ilk kez). **Kuvayımilliyeyi etkin, millî "
              "iradeyi hâkim kılmak esastır** → **ulusal egemenlik**. "
              "**Geçici hükümet kurulabilir** (ilk kez). **Temsil Heyeti** "
              "kuruldu (bölgesel)"],
             ["**Sivas Kongresi**", "4–11 Eylül 1919",
              "**Hem toplanışı hem kararları ulusaldır**. Erzurum kararları "
              "**bütün ülkeye genişletildi**. **Cemiyetler tek çatı altında "
              "birleştirildi** (Anadolu ve Rumeli Müdafaa-i Hukuk). "
              "**Manda ve himaye kesin olarak reddedildi**. **Temsil Heyeti "
              "ulusal** hâle getirildi. **İrade-i Milliye** gazetesi çıkarıldı"],
             ["**Amasya Görüşmeleri**", "20–22 Ekim 1919",
              "**İstanbul Hükümeti (Salih Paşa) Temsil Heyeti'ni resmen tanıdı** "
              "→ Millî Mücadele **hukuki meşruiyet** kazandı. Meclisin "
              "toplanması kararlaştırıldı"],
             ["**Misakımillî**", "28 Ocak 1920",
              "**Son Osmanlı Mebusan Meclisi**'nde kabul edildi. **Millî "
              "Mücadele'nin siyasi programı ve sınırlarıdır**"],
             ["**TBMM'nin açılışı**", "23 Nisan 1920",
              "**Ulusal egemenlik fiilen gerçekleşti**; yeni Türk devletinin "
              "temeli atıldı"],
         ],
         "oranlar": [0.20, 0.14, 0.66]},
        {"tur": "tuzak", "baslik": "Erzurum ile Sivas Farkı", "govde":
            "**Erzurum Kongresi toplanış bakımından bölgeseldir** (Doğu Anadolu "
            "ve Trabzon delegeleri katıldı) ama **aldığı kararlar ulusaldır**. "
            "**Sivas Kongresi hem toplanış hem karar bakımından ulusaldır** "
            "(bütün yurttan delege geldi). Ayrıca **Temsil Heyeti Erzurum'da "
            "bölgesel**, **Sivas'ta ulusal** hâle getirilmiştir. Sınavda bu "
            "ayrım doğrudan sorulur."},
        {"tur": "dikkat", "baslik": "Misakımillî Kararları", "ogeler": [
            "**Mondros imzalandığı sırada işgal edilmemiş, Türklerin çoğunlukta "
            "olduğu topraklar bölünmez bir bütündür.**",
            "**Kars, Ardahan, Batum** ve **Batı Trakya** için gerekirse "
            "**halk oylaması** yapılacak.",
            "**Arap toprakları** için halkın kararı esas alınacak.",
            "**İstanbul ve Marmara güvende olmak koşuluyla** boğazların "
            "durumu görüşülebilir.",
            "**Azınlık hakları**, komşu ülkelerdeki Müslüman azınlığa tanınan "
            "haklar kadar olacak.",
            "**Kapitülasyonlar ve siyasi-mali-adli kısıtlamalar kaldırılacak** "
            "→ **tam bağımsızlık**.",
        ]},
        {"tur": "tuzak", "baslik": "Misakımillî Neden \"Sınır Belgesi\" Değildir?", "govde":
            "Misakımillî **kesin bir harita çizmez**; **ilkeler koyar**. "
            "\"Mondros'ta işgal edilmemiş ve Türklerin çoğunlukta olduğu yerler\" "
            "ölçütü, sınırı **nüfus ve tarih esasına** dayandırır. Ayrıca "
            "**halk oylaması** öngörerek **self-determinasyon** ilkesini "
            "benimser. En kritik yanı, **tam bağımsızlığı (kapitülasyonların "
            "kaldırılmasını)** açıkça istemesidir. **Misakımillî'yi kabul eden "
            "meclisin İstanbul'un işgaliyle (16 Mart 1920) kapatılması**, "
            "TBMM'nin açılmasına yol açmıştır."},
        {"tur": "cozum",
         "baslik": "Amasya Genelgesi'nin Niteliği",
         "soru": "\"Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir. "
                 "Milletin istiklalini yine milletin azim ve kararı "
                 "kurtaracaktır.\"\nBu ifadelerden hangi sonuçlara ulaşılabilir?",
         "adimlar": [
             "\"Vatanın bütünlüğü tehlikededir\" → mücadelenin **gerekçesi** "
             "ortaya konmuştur.",
             "\"Milletin bağımsızlığı\" → mücadelenin **amacı** bağımsızlıktır.",
             "\"Milletin azim ve kararı\" → mücadelenin **yöntemi** ulusaldır; "
             "kurtuluş **padişahtan ya da yabancıdan** beklenmeyecektir.",
             "Bu ifade aynı zamanda **ulusal egemenlik** düşüncesinin ilk "
             "işaretidir.",
         ],
         "sonuc": "**Kurtuluş Savaşı'nın gerekçesi, amacı ve yöntemi ilk kez "
                  "birlikte açıklanmıştır.** Bu yönüyle Amasya Genelgesi bir "
                  "**ihtilal bildirisidir**; İstanbul Hükümeti'nin otoritesi "
                  "fiilen tanınmamıştır."},
        {"tur": "cozum",
         "baslik": "TBMM'nin Açılış Nedeni",
         "soru": "TBMM'nin açılmasına yol açan gelişmeleri sırayla yazınız.",
         "adimlar": [
             "**Misakımillî**, Son Osmanlı Mebusan Meclisi'nde kabul edildi "
             "(28 Ocak 1920).",
             "İtilaf devletleri bu kararlardan rahatsız oldu ve **İstanbul'u "
             "resmen işgal etti (16 Mart 1920)**.",
             "**Meclis-i Mebusan kapatıldı** ve milletvekilleri tutuklandı ya "
             "da Malta'ya sürüldü.",
             "**Yasama organı kalmadı**; Mustafa Kemal Ankara'da **olağanüstü "
             "yetkili bir meclis** toplanması çağrısı yaptı.",
             "**23 Nisan 1920'de TBMM açıldı**.",
         ],
         "sonuc": "**Misakımillî → İstanbul'un işgali → Meclis-i Mebusan'ın "
                  "kapatılması → TBMM'nin açılması.** Yani TBMM, **işgalin "
                  "doğurduğu bir zorunluluktur**; ulusal egemenliğin fiilen "
                  "kurulduğu andır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Mondros 30 Ekim 1918** — **7. madde işgallerin dayanağıdır**.",
            "**24. madde Ermeni devletinin** zeminini hazırladı.",
            "**İzmir 15 Mayıs 1919'da** işgal edildi; **ilk kurşun Hasan Tahsin**.",
            "**Kuvayımilliye düzenli ordu değildir**; **8 Kasım 1920'de** "
            "orduya katıldı.",
            "**Millî cemiyetlerin zayıflığı bölgesel olmalarıdır.**",
            "**Mustafa Kemal 19 Mayıs 1919'da Samsun'a** çıktı.",
            "**Havza Genelgesi mitingleri** başlattı.",
            "**Amasya Genelgesi 22 Haziran 1919** — **gerekçe, amaç ve yöntem**.",
            "**Erzurum toplanışı bölgesel, kararları ulusaldır.**",
            "**Manda ve himaye ilk kez Erzurum'da** reddedildi.",
            "**Sivas hem toplanışı hem kararları ulusaldır.**",
            "**Cemiyetler Sivas'ta tek çatı altında** birleştirildi.",
            "**Amasya Görüşmeleri'nde Temsil Heyeti resmen tanındı.**",
            "**Misakımillî 28 Ocak 1920** — **tam bağımsızlık** istendi.",
            "**İstanbul 16 Mart 1920'de resmen** işgal edildi.",
            "**TBMM 23 Nisan 1920'de** açıldı.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu dönemde sorular **\"ilk kez nerede\"** biçiminde gelir. "
            "Her karar için **hangi belgede ilk kez söylendiğini** not et; "
            "aynı karar birden çok belgede tekrarlanabilir.",
        "satir_sayisi": 2,
        "sorular": [
            "Mondros Ateşkes Antlaşması'nın tarihini ve imzalandığı yeri yazınız.",
            "Mondros'un boğazlarla ilgili maddesini ve sonucunu yazınız.",
            "Mondros'un 7. maddesini ve önemini açıklayınız.",
            "Mondros'un 24. maddesini ve amacını açıklayınız.",
            "Vilayat-ı Sitte'nin ne olduğunu yazınız.",
            "Mondros'un ordu ile ilgili maddesinin sonucunu yazınız.",
            "Mondros'un fiilen ne anlama geldiğini açıklayınız.",
            "Mondros sonrası İngiltere'nin işgal ettiği yerleri yazınız.",
            "Fransa'nın işgal ettiği yerleri yazınız.",
            "İtalya'nın işgallerini ve dayanağını yazınız.",
            "İzmir'in işgal tarihini ve işgalciyi yazınız.",
            "İzmir'in işgalinde ilk kurşunu atan kişiyi yazınız.",
            "İzmir'in işgalinin sonuçlarını yazınız.",
            "İzmir'in işgalinin Wilson İlkeleri açısından anlamını açıklayınız.",
            "Millî varlığa zararlı cemiyetlerden dördünü yazınız.",
            "İngiliz Muhipleri Cemiyeti'nin amacını yazınız.",
            "Wilson Prensipleri Cemiyeti'nin amacını yazınız.",
            "Mavri Mira'nın amacını yazınız.",
            "Megali İdea'yı açıklayınız.",
            "Pontus Rum Cemiyeti'nin amacını yazınız.",
            "Hınçak ve Taşnak cemiyetlerinin amacını yazınız.",
            "Millî cemiyetlerden dördünü ve bölgelerini yazınız.",
            "Millî cemiyetlerin ortak zayıflığını açıklayınız.",
            "Millî cemiyetlerin birleştirildiği kongreyi ve çatı adını yazınız.",
            "Kuvayımilliye'yi tanımlayınız.",
            "Kuvayımilliye'nin olumlu yönlerini yazınız.",
            "Kuvayımilliye'nin olumsuz yönlerini yazınız.",
            "Kuvayımilliye'nin düzenli orduya katılma tarihini yazınız.",
            "Mustafa Kemal'in Samsun'a çıkış tarihini ve resmî görevini yazınız.",
            "Havza Genelgesi'nin içeriğini yazınız.",
            "Amasya Genelgesi'nin tarihini yazınız.",
            "Amasya Genelgesi'nin belirlediği üç şeyi yazınız.",
            "Amasya Genelgesi'nin niteliğini açıklayınız.",
            "Erzurum Kongresi'nin tarihini ve toplanış niteliğini yazınız.",
            "Erzurum Kongresi'nin kararlarını yazınız.",
            "Manda ve himayenin ilk kez reddedildiği kongreyi yazınız.",
            "Temsil Heyeti'nin ilk kez kurulduğu kongreyi yazınız.",
            "Sivas Kongresi'nin tarihini ve niteliğini yazınız.",
            "Sivas Kongresi'nin en önemli kararını yazınız.",
            "Erzurum ile Sivas kongrelerinin farkını açıklayınız.",
            "İrade-i Milliye gazetesinin çıkarıldığı kongreyi yazınız.",
            "Amasya Görüşmeleri'nin tarihini ve önemini yazınız.",
            "Temsil Heyeti'nin resmen tanınmasının anlamını açıklayınız.",
            "Misakımillî'nin kabul tarihini ve kabul edildiği meclisi yazınız.",
            "Misakımillî kararlarını maddeler hâlinde yazınız.",
            "Misakımillî'de halk oylaması öngörülen yerleri yazınız.",
            "Misakımillî'nin tam bağımsızlıkla ilgili maddesini yazınız.",
            "İstanbul'un resmen işgal tarihini yazınız.",
            "TBMM'nin açılmasına yol açan gelişmeleri sırayla yazınız.",
            "TBMM'nin açılış tarihini ve tarihî anlamını yazınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**30 Ekim 1918**; **Limni Adası'nın Mondros Limanı'nda**.",
            "**Boğazlar İtilaf devletlerine açılacaktı**; İstanbul ve Boğazların denetimi fiilen kaybedildi, başkent tehdit altına girdi.",
            "İtilaf devletlerine **güvenliklerini tehdit eden bir durumda istedikleri yeri işgal etme** hakkı verir; **işgallerin hukuki dayanağıdır** ve antlaşmanın **en tehlikeli maddesidir**.",
            "**Altı vilayette (Vilayat-ı Sitte) karışıklık çıkarsa** İtilaf'ın buraları işgal edebileceğini söyler; amaç **Ermeni devleti** kurma zemini hazırlamaktır.",
            "**Erzurum, Van, Bitlis, Elazığ, Diyarbakır ve Sivas**; Ermenilerin talep ettiği altı ildir.",
            "**Ordu terhis edilmiş**, silah ve cephaneye el konulmuştur; Osmanlı **savunmasız** bırakılmıştır.",
            "Bir ateşkes değil, **fiilen teslim belgesidir**; devletin savunma, ulaşım ve haberleşme imkânları elinden alınmıştır.",
            "**Musul, Urfa, Antep, Maraş, Batum, Samsun, Merzifon** ve **İstanbul**.",
            "**Adana, Mersin ve Dörtyol**; sonra Urfa, Antep ve Maraş'ı İngiltere'den devralmıştır.",
            "**Antalya, Konya, Bodrum, Kuşadası, Fethiye**; dayanağı **Saint Jean de Maurienne** gizli antlaşmasıdır.",
            "**15 Mayıs 1919**; **Yunanistan** (İtilaf devletlerinin onayıyla).",
            "**Hasan Tahsin**.",
            "**Kuvayımilliye doğdu**, **protesto mitingleri** yayıldı, **Redd-i İlhak Cemiyeti** kuruldu, İstanbul Hükümeti'nin çaresizliği ortaya çıktı.",
            "**Wilson İlkeleri'ne açıkça aykırıdır**; \"her millet kendi geleceğini belirleyecek\" denirken Türk çoğunluklu bir şehir işgal edilmiştir. İtilaf'ın **gerçek niyeti** böylece anlaşılmıştır.",
            "**Sulh ve Selamet-i Osmaniye**, **Teali İslam**, **İngiliz Muhipleri**, **Wilson Prensipleri** (ayrıca Kürt Teali, Hürriyet ve İtilaf).",
            "Kurtuluşu **İngiliz mandasında** görmüştür.",
            "Kurtuluşu **Amerikan mandasında** görmüştür.",
            "**Rum cemiyetidir**; **Bizans'ı yeniden canlandırmayı (Megali İdea)** amaçlar.",
            "Yunanistan'ın **Bizans'ı yeniden kurma ve Ege ile İstanbul'u ele geçirme** ideali.",
            "**Karadeniz'de bir Rum (Pontus) devleti** kurmak.",
            "**Doğu Anadolu'da bağımsız bir Ermeni devleti** kurmak.",
            "**Trakya Paşaeli (Trakya)**, **Redd-i İlhak (İzmir)**, **Doğu Anadolu Müdafaa-i Hukuk (Doğu Anadolu)**, **Kilikyalılar (Çukurova)** (ayrıca Trabzon Muhafaza-i Hukuk).",
            "**Bölgeseldirler**; her biri yalnız kendi bölgesini kurtarmayı amaçlar ve **aralarında bağlantı yoktur**.",
            "**Sivas Kongresi**; **Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti**.",
            "İşgallere karşı **halkın kendiliğinden kurduğu silahlı direniş birlikleridir**; düzenli ordu değildir.",
            "**İşgalleri yavaşlatmış**, **düzenli ordu kuruluncaya kadar zaman kazandırmış**, halkta **direniş bilinci** oluşturmuş ve **iç isyanları bastırmıştır**.",
            "**Disiplinsizdir**, kendi başına karar alır, **ihtiyaçlarını halktan zorla** karşılar ve **kesin sonuca ulaştıracak güçte değildir**.",
            "**8 Kasım 1920** (I. İnönü Savaşı öncesinde).",
            "**19 Mayıs 1919**; **9. Ordu Müfettişi** olarak.",
            "**İşgalleri protesto eden mitingler düzenlenmesi** istenmiştir; amaç halkı harekete geçirmektir.",
            "**22 Haziran 1919**.",
            "Mücadelenin **gerekçesi** (vatanın bütünlüğü tehlikede), **amacı** (bağımsızlık) ve **yöntemi** (milletin azim ve kararı).",
            "Bir **ihtilal bildirisidir**; İstanbul Hükümeti'nin otoritesi fiilen tanınmamış ve ulusal egemenliğin ilk işareti verilmiştir.",
            "**23 Temmuz–7 Ağustos 1919**; **toplanışı bölgesel, kararları ulusaldır**.",
            "**Millî sınırlar içinde vatan bir bütündür**, **manda ve himaye kabul edilemez**, **Kuvayımilliyeyi etkin, millî iradeyi hâkim kılmak esastır**, **gerekirse geçici hükümet kurulur**, **Temsil Heyeti** oluşturulmuştur.",
            "**Erzurum Kongresi**.",
            "**Erzurum Kongresi** (bölgesel olarak); **Sivas Kongresi'nde ulusal** hâle getirilmiştir.",
            "**4–11 Eylül 1919**; **hem toplanışı hem kararları ulusaldır**.",
            "**Bütün millî cemiyetlerin tek çatı altında (Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti) birleştirilmesi**.",
            "**Erzurum toplanış bakımından bölgesel** (kararları ulusal), **Sivas hem toplanış hem karar bakımından ulusaldır**; ayrıca Temsil Heyeti Sivas'ta ulusal hâle gelmiştir.",
            "**Sivas Kongresi**.",
            "**20–22 Ekim 1919**; **İstanbul Hükümeti (Salih Paşa) Temsil Heyeti'ni resmen tanımıştır** — Millî Mücadele **hukuki meşruiyet** kazanmıştır.",
            "Millî Mücadele'nin **hukuken tanınması** ve İstanbul Hükümeti'nin Anadolu hareketini **muhatap kabul etmesi** demektir.",
            "**28 Ocak 1920**; **Son Osmanlı Mebusan Meclisi**.",
            "**Mondros'ta işgal edilmemiş, Türklerin çoğunlukta olduğu yerler bölünmez bir bütündür**; **Kars-Ardahan-Batum ve Batı Trakya'da halk oylaması**; **Arap topraklarında halkın kararı**; **boğazların durumu İstanbul güvende olmak koşuluyla görüşülebilir**; **azınlık hakları karşılıklılık esasına göre**; **kapitülasyonlar kaldırılacak**.",
            "**Kars, Ardahan, Batum** ve **Batı Trakya**.",
            "**Kapitülasyonlar ile siyasi, mali ve adli kısıtlamaların kaldırılmasıdır**; bu, **tam bağımsızlık** talebidir.",
            "**16 Mart 1920**.",
            "**Misakımillî'nin kabulü (28 Ocak 1920)** → **İstanbul'un resmen işgali (16 Mart 1920)** → **Meclis-i Mebusan'ın kapatılması** → **Ankara'da olağanüstü yetkili meclis çağrısı** → **TBMM'nin açılışı**.",
            "**23 Nisan 1920**; **ulusal egemenlik fiilen gerçekleşmiş** ve yeni Türk devletinin temeli atılmıştır.",
        ],
    },
}
