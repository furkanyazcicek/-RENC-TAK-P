"""TYT Tarih — Tarih ve Zaman (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: TARİH VE ZAMAN",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Tarih ve Zaman",
    "alt_baslik": "Ham bilgi notu — tarih biliminin yöntemi, kaynak türleri, takvimler "
                  "ve çağ ayrımı; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Tarih ve Zaman",
        "kazanimlar": "9.1.1 — Tarih biliminin konusunu ve yöntemini açıklar. "
                      "9.1.2 — Tarihî kaynakları sınıflandırır. "
                      "9.1.3 — Zaman ve takvim kavramlarını açıklar. "
                      "9.1.4 — Tarihe yardımcı bilim dallarını tanır.",
        "kapsam": "Tarihin tanımı ve konusu, tarih biliminin yöntemi (kaynak tarama, "
                  "tasnif, tahlil, tenkit, terkip), kaynak türleri, tarihe yardımcı "
                  "bilimler, zaman ve takvim, Türklerin kullandığı takvimler, "
                  "çağlara ayırma, 45 analiz sorusu",
        "nasil": "Bu ünite, tarihin **nasıl yazıldığını** öğretir. Ezberlenecek "
                 "olay değil, **kavram** vardır. Özellikle **kaynak türlerini** ve "
                 "**yöntem basamaklarını** iyi ayır; sorular tam oradan gelir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu üniteden gelen soru genellikle **kaynak türü**, "
                    "**yardımcı bilim** ya da **takvim** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Tarih Bilimi"},
        {"tur": "tanim", "kavram": "Tarih",
         "aciklama": "**Geçmişte yaşamış insan topluluklarının** birbirleriyle olan "
                     "ilişkilerini, kültür ve uygarlıklarını, **yer ve zaman "
                     "göstererek**, **neden-sonuç ilişkisi içinde**, **belgelere "
                     "dayanarak** ve **tarafsız** biçimde inceleyen bilimdir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Tarihî olayın dört koşulu",
         "aciklama": "Bir anlatının **tarih sayılabilmesi** için bu dördü birden "
                     "gerekir. Sorularda \"aşağıdakilerden hangisi tarihî bir olay "
                     "değildir\" diye tam olarak bu koşullar sınanır.",
         "ciz": S.kartlar([
             ("Yer belirtilmeli", "olay **nerede**\ngeçti?"),
             ("Zaman belirtilmeli", "olay **ne zaman**\ngerçekleşti?"),
             ("Belgeye dayanmalı", "**kanıt** olmadan\ntarih yazılmaz"),
             ("Neden-sonuç kurulmalı", "**niçin** oldu,\n**neye** yol açtı?"),
             ("Tarafsızlık", "kişisel yorum ve\n**taraf tutma olmaz**"),
             ("Deney yapılamaz", "olaylar **tekrarlanamaz**\nbu yüzden deney yok"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "Tarihte Deney ve Gözlem Yoktur", "govde":
            "Tarih, **fen bilimlerinden ayrılır**: olaylar **bir kez yaşanır**, "
            "**tekrarlanamaz** ve laboratuvara taşınamaz. Bu yüzden tarihte "
            "**deney ve gözlem yöntemi kullanılamaz**; yerine **belgeye dayalı "
            "yöntem** geçerlidir. Ayrıca aynı nedenle tarihte **kesin yasalar "
            "bulunmaz** ve **geleceğe yönelik kesin tahmin** yapılamaz."},
        {"tur": "formul",
         "baslik": "Tarih biliminin yöntemi — beş basamak",
         "ifade": "**1. Kaynak tarama (bulma)**  →  konuyla ilgili belgeler toplanır\n"
                  "**2. Tasnif (sınıflandırma)**  →  belgeler türüne ve konusuna göre ayrılır\n"
                  "**3. Tahlil (çözümleme)**      →  belgenin içeriği incelenir\n"
                  "**4. Tenkit (eleştiri)**       →  belgenin **gerçekliği ve güvenilirliği** sınanır\n"
                  "**5. Terkip (sentez)**         →  bilgiler birleştirilip **yazıya dökülür**",
         "terimler": [
             ("Tenkit", "**En kritik basamak**; sahte ve taraflı belge burada elenir"),
             ("İç tenkit", "Belgenin **içeriği** doğru mu?"),
             ("Dış tenkit", "Belge **gerçekten o döneme mi ait**?"),
             ("Terkip", "Sonuçta ortaya **tarih metni** çıkar"),
         ],
         "not": "**Basamakların sırası değişmez.** Kaynak bulunmadan tasnif, tasnif "
                "yapılmadan tahlil olmaz. Sorularda \"aşağıdakilerden hangisi ilk/son "
                "aşamadır\" biçiminde sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Tarihî Kaynaklar"},
        {"tur": "gorsel", "baslik": "Şema 2 — Kaynakların iki ayrımı",
         "aciklama": "Kaynaklar **iki ayrı ölçüte göre** sınıflandırılır. Bir kaynak "
                     "aynı anda hem \"birinci elden\" hem \"yazılı\" olabilir; iki "
                     "ayrım **birbirinden bağımsızdır**.",
         "ciz": S.karsilastirma(
             "OLUŞUM ZAMANINA göre",
             ["**Birinci elden (ana) kaynak**",
              "Olayın **yaşandığı döneme** ait",
              "Olayı **görenler** ya da yaşayanlar üretmiştir",
              "Ferman, tapu, para, kitabe, günlük",
              "**Güvenilirliği yüksektir**"],
             "TÜRÜNE göre",
             ["**Yazılı**: ferman, kitabe, gazete, arşiv belgesi",
              "**Sözlü**: destan, efsane, atasözü, menkıbe",
              "**Kalıntı (arkeolojik)**: eşya, mezar, silah, sikke",
              "**Çizili-sesli-görüntülü**: harita, fotoğraf, film",
              "Tür, **güvenilirliği tek başına belirlemez**"],
             "İkinci elden kaynak",
             ["Olaydan **sonra** yazılanlar",
              "Ana kaynaklara **dayanarak** üretilir",
              "Araştırma kitapları, tarih ders kitapları",
              "**Yorum içerebilir**"])},
        {"tur": "tablo",
         "basliklar": ["Kaynak türü", "Örnekleri", "Notu"],
         "satirlar": [
             ["**Yazılı kaynak**",
              "Ferman, berat, kitabe, vakfiye, salname, gazete, arşiv belgesi",
              "**En güvenilir** kaynak türüdür"],
             ["**Sözlü kaynak**",
              "Destan, efsane, menkıbe, atasözü, halk hikâyesi",
              "**Yazının bulunmadığı** dönemler için önemlidir; abartı içerebilir"],
             ["**Kalıntı (arkeolojik)**",
              "Sikke, silah, mezar, çanak-çömlek, yapı kalıntısı",
              "**Yazısız dönemlerin** başlıca kaynağıdır"],
             ["**Çizili, sesli, görüntülü**",
              "Harita, fotoğraf, film, ses kaydı, minyatür",
              "**Yakın çağ** için çok kullanılır"],
         ],
         "oranlar": [0.24, 0.40, 0.36]},
        {"tur": "dikkat", "baslik": "Sözlü Kaynakların Değeri ve Sınırı", "ogeler": [
            "**Yazının bulunmadığı dönemlerde** neredeyse tek kaynaktır; İslamiyet "
            "öncesi Türk tarihinin önemli bir bölümü **destanlardan** öğrenilir.",
            "**Abartı ve olağanüstü ögeler** içerdiği için **doğrudan kanıt** sayılmaz.",
            "**Arkeolojik ve yazılı kaynaklarla desteklenirse** değeri artar.",
            "Bir destan, **olayın kendisini değil**, toplumun o olaya **nasıl baktığını** "
            "gösterir.",
        ]},
        {"tur": "cozum",
         "baslik": "Kaynak Türünü Belirleme",
         "soru": "Aşağıdaki kaynakların türünü ve elden durumunu belirleyiniz.\n"
                 "**I.** Orhun Yazıtları\n"
                 "**II.** Bir tarih profesörünün 2020'de yazdığı Osmanlı tarihi kitabı\n"
                 "**III.** Kanuni döneminde basılmış gümüş akçe\n"
                 "**IV.** Oğuz Kağan Destanı",
         "adimlar": [
             "**I.** Göktürkler döneminde **taşa yazılmış** → **yazılı kaynak** ve "
             "**birinci elden**.",
             "**II.** Olaydan yüzyıllar sonra, ana kaynaklara dayanarak yazılmış → "
             "**ikinci elden kaynak**.",
             "**III.** Dönemin **eşyası**, üretildiği çağa ait → **kalıntı** ve "
             "**birinci elden**.",
             "**IV.** Kuşaktan kuşağa aktarılmış → **sözlü kaynak**; olayın kendisine "
             "değil, **algısına** tanıklık eder.",
         ],
         "sonuc": "**I: yazılı-birinci elden**, **II: ikinci elden**, **III: kalıntı-"
                  "birinci elden**, **IV: sözlü kaynak**. Tür ile elden durumu "
                  "**ayrı ayrı** belirlenir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Tarihe Yardımcı Bilimler"},
        {"tur": "tablo",
         "basliklar": ["Bilim dalı", "İncelediği", "Tarihe katkısı"],
         "satirlar": [
             ["**Arkeoloji**", "**Kazı** yoluyla kalıntılar",
              "Yazısız dönemleri aydınlatır"],
             ["**Coğrafya**", "**Yer ve iklim**",
              "Olayın geçtiği mekânı ve etkisini açıklar"],
             ["**Kronoloji**", "**Zaman ve takvim**", "Olayları sıraya koyar"],
             ["**Paleografya**", "**Eski yazılar**", "Belgelerin okunmasını sağlar"],
             ["**Epigrafya**", "**Kitabeler (yazıtlar)**", "Taş ve anıt yazılarını çözer"],
             ["**Nümizmatik**", "**Paralar (sikkeler)**",
              "Ekonomi, hükümdar ve sınırlar hakkında bilgi verir"],
             ["**Filoloji**", "**Diller**", "Dil akrabalığı ve kültür ilişkisini gösterir"],
             ["**Etnografya**", "**Örf, âdet ve gelenekler**", "Toplum yaşayışını aydınlatır"],
             ["**Diplomatik**", "**Resmî belgeler**", "Ferman, berat ve antlaşmaları inceler"],
             ["**Antropoloji**", "**İnsan ırkları ve yapısı**", "Toplulukların kökenini araştırır"],
             ["**Heraldik**", "**Arma ve mühürler**", "Hanedan ve devlet simgelerini çözer"],
             ["**Sicillografi**", "**Mühürler**", "Belgelerin gerçekliğini doğrular"],
         ],
         "oranlar": [0.24, 0.32, 0.44]},
        {"tur": "taktik", "baslik": "Yardımcı Bilimleri Ezberlemenin Yolu", "govde":
            "Adın **kökündeki sözcüğe** bak: **nümiz-** para (nümizmatik), **epi-graf** "
            "üstüne yazılan (epigrafya = kitabeler), **paleo-graf** eski yazı "
            "(paleografya), **etno-** halk (etnografya), **antropo-** insan "
            "(antropoloji), **filo-loji** dil sevgisi (filoloji). Kök anlamını bilirsen "
            "hiçbirini ezberlemene gerek kalmaz."},
        {"tur": "tuzak", "baslik": "Epigrafya ile Paleografya Karışır", "govde":
            "**Epigrafya kitabeleri** (taş, anıt, mezar taşı üzerindeki yazıları) "
            "inceler. **Paleografya ise eski yazı türlerini** (Göktürk alfabesi, "
            "Osmanlı hattı, çivi yazısı) inceler; belgenin **hangi yazıyla yazıldığını** "
            "ve **nasıl okunacağını** çözer. Kısaca: **epigrafya nereye yazıldığına**, "
            "**paleografya nasıl yazıldığına** bakar."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Zaman ve Takvim"},
        {"tur": "tablo",
         "basliklar": ["Takvim", "Esası", "Kullanan"],
         "satirlar": [
             ["**12 Hayvanlı Türk Takvimi**", "**Güneş yılı** (365 gün)",
              "**İslamiyet öncesi Türkler** — ilk Türk takvimi"],
             ["**Hicri Takvim**", "**Ay yılı** (354 gün)",
              "Müslüman Türkler; başlangıcı **Hicret (622)**"],
             ["**Celali Takvimi**", "**Güneş yılı**",
              "**Büyük Selçuklu** (Melikşah döneminde hazırlandı)"],
             ["**Rumi Takvim**", "**Güneş yılı**",
              "Osmanlı'da **mali işler** için; 1839'dan sonra"],
             ["**Miladi Takvim**", "**Güneş yılı**",
              "**1 Ocak 1926**'dan itibaren Türkiye; başlangıcı **Hz. İsa'nın doğumu**"],
         ],
         "oranlar": [0.28, 0.24, 0.48]},
        {"tur": "dikkat", "baslik": "Takvimlerle İlgili Kritik Ayrımlar", "ogeler": [
            "**Ay yılı 354, güneş yılı 365 gündür**; aralarında **11 günlük fark** "
            "vardır. Bu yüzden hicri ve miladi tarihler arasında **yıl kayması** olur.",
            "**Türklerin kullandığı ilk takvim 12 Hayvanlı Türk Takvimidir** ve "
            "**güneş yılı** esaslıdır.",
            "**Türkler, girdikleri her medeniyet dairesinde takvim değiştirmiştir**; "
            "bu, **kültürel etkileşimin** göstergesi olarak sorulur.",
            "**Miladi takvime geçiş 1 Ocak 1926**'dır; bu, **inkılaplar** konusuyla "
            "bağlantılıdır.",
        ]},
        {"tur": "formul",
         "baslik": "Yüzyıl ve çağ hesabı",
         "ifade": "Bir yılın hangi yüzyılda olduğu:\n"
                  "**Yılın son iki basamağı atılır, kalan sayıya 1 eklenir.**\n"
                  "Örnek: **1453** → 14 + 1 = **15. yüzyıl**\n"
                  "Tam yüzyıl yılları istisnadır: **1500** → **15. yüzyıl** (1 eklenmez)",
         "terimler": [
             ("Milattan önce", "Sayı **büyüdükçe tarih eskiye** gider"),
             ("Milattan sonra", "Sayı **büyüdükçe tarih yakına** gelir"),
             ("Yüzyıl", "**100 yıl**; \"asır\" da denir"),
             ("Çağ", "Tarihin **büyük dönemleri**; başlangıç ve bitişleri belirlidir"),
         ],
         "not": "**Milattan önceki tarihlerde büyük sayı daha eskidir**: MÖ 500, "
                "MÖ 300'den **daha eskidir**. Bu ters mantık, hesaplama sorularında "
                "sık sık hataya yol açar."},
        {"tur": "gorsel", "baslik": "Şema 3 — Tarihin çağlara ayrılması",
         "aciklama": "Çağlar, **toplumları derinden etkileyen olaylarla** başlar ve "
                     "biter. Bu ayrım **Avrupa merkezlidir** ve her toplum için aynı "
                     "biçimde geçerli değildir — sınavda bu eleştiri de sorulur.",
         "ciz": S.dikey_akis(
             ["Tarih Öncesi Çağlar", "İlk Çağ", "Orta Çağ", "Yeni Çağ", "Yakın Çağ"],
             ["**Yazının icadına kadar** (MÖ 3200). Taş ve Maden devirlerine ayrılır. "
              "Yazı olmadığı için **arkeolojik kaynaklarla** aydınlatılır.",
              "**Yazının icadı (MÖ 3200)** ile **Kavimler Göçü (375)** arası. "
              "İlk uygarlıklar, ilk devletler ve ilk yazılı hukuk bu çağda ortaya çıktı.",
              "**Kavimler Göçü (375)** ile **İstanbul'un Fethi (1453)** arası. "
              "Feodalite, skolastik düşünce ve İslam medeniyetinin yükselişi.",
              "**İstanbul'un Fethi (1453)** ile **Fransız İhtilali (1789)** arası. "
              "Coğrafi keşifler, Rönesans, Reform ve merkezî krallıklar.",
              "**Fransız İhtilali (1789)** ile **günümüz** arası. Milliyetçilik, "
              "sanayileşme, dünya savaşları ve ulus devletler."])},
        {"tur": "cozum",
         "baslik": "Yüzyıl Hesabı",
         "soru": "Aşağıdaki tarihlerin hangi yüzyılda olduğunu bulunuz: "
                 "**1071 · 1453 · 1800 · MÖ 490**",
         "adimlar": [
             "**1071**: son iki basamak atılır → 10; +1 → **11. yüzyıl**.",
             "**1453**: 14 + 1 → **15. yüzyıl**.",
             "**1800**: tam yüzyıl yılı → **18. yüzyıl** (1 eklenmez).",
             "**MÖ 490**: 4 + 1 → **MÖ 5. yüzyıl**.",
         ],
         "sonuc": "Sırasıyla **11., 15., 18. ve MÖ 5. yüzyıl**. Tam yüzyıl yıllarında "
                  "(1800, 1900 gibi) **1 eklenmediğini** unutma."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Tarihî olayda **yer, zaman, belge ve neden-sonuç** bulunmalıdır.",
            "**Tarihte deney ve gözlem yoktur**; olaylar tekrarlanamaz.",
            "Yöntem sırası: **kaynak tarama → tasnif → tahlil → tenkit → terkip**.",
            "**Tenkit**, sahte ve taraflı belgeyi eleyen basamaktır.",
            "**Birinci elden kaynak** olayın dönemine aittir.",
            "**Yazılı kaynak en güvenilir**, **sözlü kaynak abartı içerebilir**.",
            "**Nümizmatik para**, **epigrafya kitabe**, **paleografya eski yazı**.",
            "**Epigrafya nereye**, **paleografya nasıl** yazıldığına bakar.",
            "**İlk Türk takvimi 12 Hayvanlı**, **güneş yılı** esaslıdır.",
            "**Ay yılı 354**, **güneş yılı 365** gün; fark **11 gündür**.",
            "**Yüzyıl**: son iki basamak at, **1 ekle**; tam yüzyılda **ekleme**.",
            "**MÖ'de büyük sayı daha eskidir.**",
            "**Çağ ayrımı Avrupa merkezlidir**; evrensel değildir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu ünitede ezberlenecek olay değil, **kavram** vardır. Cevaplarını "
            "yazarken tanımları kendi cümlelerinle kurmaya çalış; ezberlenmiş tanım "
            "sınavda az işe yarar, kavranmış tanım her soruyu çözer.",
        "satir_sayisi": 2,
        "sorular": [
            "Tarihin tanımını yaparak içindeki beş ögeyi belirtiniz.",
            "Bir olayın tarihî olay sayılması için gereken koşulları yazınız.",
            "Tarihte neden deney ve gözlem yapılamadığını açıklayınız.",
            "Tarihte kesin yasaların bulunmamasının nedenini yazınız.",
            "Tarih biliminin yöntemini beş basamakta yazınız.",
            "Tenkit basamağının önemini açıklayınız.",
            "İç tenkit ile dış tenkiti ayırt ediniz.",
            "Terkip basamağında ne yapıldığını yazınız.",
            "Yöntem basamaklarının sırasının neden değişmediğini açıklayınız.",
            "Birinci elden kaynağı tanımlayarak üç örnek veriniz.",
            "İkinci elden kaynağı tanımlayarak bir örnek veriniz.",
            "Kaynakları türüne göre dörde ayırarak örnek veriniz.",
            "Yazılı kaynaklara beş örnek veriniz.",
            "Sözlü kaynaklara üç örnek veriniz.",
            "Kalıntı (arkeolojik) kaynaklara üç örnek veriniz.",
            "Sözlü kaynakların değerini ve sınırını açıklayınız.",
            "Bir destanın tarihe kattığı asıl bilgiyi açıklayınız.",
            "Orhun Yazıtları'nın kaynak türünü ve elden durumunu belirleyiniz.",
            "Kanuni döneminde basılmış bir akçenin kaynak türünü belirleyiniz.",
            "Bugün yazılmış bir Osmanlı tarihi kitabının elden durumunu belirleyiniz.",
            "Oğuz Kağan Destanı'nın kaynak türünü belirleyiniz.",
            "Arkeolojinin tarihe katkısını yazınız.",
            "Kronolojinin tarihe katkısını yazınız.",
            "Nümizmatiğin incelediği şeyi ve katkısını yazınız.",
            "Epigrafyanın incelediği şeyi yazınız.",
            "Paleografyanın incelediği şeyi yazınız.",
            "Epigrafya ile paleografyayı ayırt eden ölçütü yazınız.",
            "Filolojinin tarihe katkısını yazınız.",
            "Etnografyanın incelediği şeyi yazınız.",
            "Diplomatiğin incelediği şeyi yazınız.",
            "Antropolojinin tarihe katkısını yazınız.",
            "Heraldik ve sicillografinin incelediği şeyleri yazınız.",
            "Yardımcı bilimlerin adlarını ezberlemenin kolay yolunu açıklayınız.",
            "12 Hayvanlı Türk Takvimi'nin esasını ve önemini yazınız.",
            "Hicri takvimin esasını ve başlangıcını yazınız.",
            "Celali takviminin hangi devlette hazırlandığını yazınız.",
            "Rumi takvimin kullanım amacını yazınız.",
            "Miladi takvime geçiş tarihini yazınız.",
            "Ay yılı ile güneş yılı arasındaki gün farkını yazınız.",
            "Türklerin takvim değiştirmesinin neyi gösterdiğini açıklayınız.",
            "Bir yılın hangi yüzyılda olduğunu bulma kuralını yazınız.",
            "1071, 1453 ve 1800 tarihlerinin yüzyıllarını bulunuz.",
            "MÖ 490 tarihinin yüzyılını bulunuz.",
            "Milattan önceki tarihlerde büyük sayının ne anlama geldiğini yazınız.",
            "Tarihin çağlara ayrılmasını başlangıç ve bitiş olaylarıyla yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Geçmiş insan topluluklarını **yer** ve **zaman** göstererek, **neden-sonuç** ilişkisi içinde, **belgelere dayanarak** ve **tarafsız** biçimde inceleyen bilimdir.",
            "**Yer** ve **zaman** belirtilmeli, **belgeye dayanmalı**, **neden-sonuç** ilişkisi kurulabilmeli ve anlatım **tarafsız** olmalıdır.",
            "Tarihî olaylar **bir kez yaşanır** ve **tekrarlanamaz**; laboratuvara taşınamaz. Bu yüzden deney ve gözlem yöntemi uygulanamaz.",
            "Olaylar **kendine özgü koşullarda** gerçekleşir ve aynı koşullar bir daha oluşmaz. Bu yüzden fen bilimlerindeki gibi **değişmez yasalar** kurulamaz.",
            "**Kaynak tarama → tasnif → tahlil → tenkit → terkip.**",
            "**Sahte, taraflı ve güvenilmez belgeler** bu basamakta elenir. Tenkit yapılmazsa yanlış bilgi tarih metnine girer.",
            "**İç tenkit** belgenin **içeriğinin doğruluğunu**, **dış tenkit** belgenin **gerçekten o döneme ait olup olmadığını** sınar.",
            "Elde edilen bilgiler **birleştirilip yazıya dökülür**; ortaya tarih metni çıkar.",
            "Her basamak bir öncekinin **ürününü kullanır**: kaynak bulunmadan tasnif, tasnif yapılmadan tahlil mümkün değildir.",
            "Olayın **yaşandığı döneme ait** kaynaktır: **ferman**, **kitabe**, **sikke** (ayrıca tapu, günlük).",
            "Olaydan **sonra**, ana kaynaklara dayanılarak üretilen kaynaktır: **bugün yazılmış bir tarih araştırması**.",
            "**Yazılı** (ferman), **sözlü** (destan), **kalıntı** (sikke), **çizili-sesli-görüntülü** (harita, fotoğraf).",
            "**Ferman, berat, kitabe, vakfiye, salname** (ayrıca gazete, arşiv belgesi).",
            "**Destan, efsane, atasözü** (ayrıca menkıbe, halk hikâyesi).",
            "**Sikke, silah, mezar** (ayrıca çanak-çömlek, yapı kalıntısı).",
            "**Yazının bulunmadığı dönemler** için neredeyse tek kaynaktır; ancak **abartı ve olağanüstü ögeler** içerdiği için doğrudan kanıt sayılmaz.",
            "Olayın kendisini değil, toplumun o olaya **nasıl baktığını**, hangi değerleri yücelttiğini gösterir.",
            "**Yazılı kaynak** ve **birinci elden**; Göktürkler döneminde taşa yazılmıştır.",
            "**Kalıntı (arkeolojik) kaynak** ve **birinci elden**; dönemin eşyasıdır.",
            "**İkinci elden kaynaktır**; olaydan yüzyıllar sonra ana kaynaklara dayanarak yazılmıştır.",
            "**Sözlü kaynaktır**; kuşaktan kuşağa aktarılmıştır.",
            "**Kazı** yoluyla yer altındaki kalıntıları ortaya çıkarır; özellikle **yazısız dönemleri** aydınlatır.",
            "**Zaman ve takvim** bilgisiyle olayları **sıraya koyar**; kronoloji olmadan neden-sonuç kurulamaz.",
            "**Paraları (sikkeleri)** inceler; dönemin **ekonomisi, hükümdarları ve sınırları** hakkında bilgi verir.",
            "**Kitabeleri (yazıtları)** inceler; taş ve anıt üzerindeki yazıları çözer.",
            "**Eski yazı türlerini** inceler; belgenin hangi yazıyla yazıldığını ve nasıl okunacağını çözer.",
            "**Epigrafya nereye yazıldığına** (kitabe, anıt), **paleografya nasıl yazıldığına** (yazı türü) bakar.",
            "**Dilleri** inceler; **dil akrabalığı** ve **kültür ilişkilerini** ortaya koyar.",
            "**Örf, âdet, gelenek ve yaşayış biçimlerini** inceler.",
            "**Resmî belgeleri** inceler: ferman, berat, antlaşma metinleri.",
            "**İnsan ırklarını ve fiziksel yapısını** inceler; toplulukların **kökenini** araştırır.",
            "**Heraldik arma ve mühürleri**, **sicillografi mühürleri** inceler; belgelerin gerçekliğini doğrular.",
            "**Adın kökündeki sözcüğe** bakılır: nümiz- (para), epi-graf (üstüne yazılan), paleo-graf (eski yazı), etno- (halk), antropo- (insan).",
            "**Güneş yılı** esaslıdır (365 gün) ve **Türklerin kullandığı ilk takvimdir**; her yıl bir hayvan adıyla anılır.",
            "**Ay yılı** esaslıdır (354 gün); başlangıcı **Hicret (622)**'tir.",
            "**Büyük Selçuklu Devleti**'nde, **Melikşah** döneminde hazırlanmıştır.",
            "Osmanlı'da **mali işlerde** kullanılmıştır; güneş yılı esaslıdır.",
            "**1 Ocak 1926**.",
            "**11 gün** (354 ile 365 arasındaki fark).",
            "Türklerin **girdikleri her medeniyet dairesinden etkilendiğini**, yani **kültürel etkileşime açık** olduklarını gösterir.",
            "**Son iki basamak atılır, kalan sayıya 1 eklenir.** Tam yüzyıl yıllarında (1800, 1900) 1 eklenmez.",
            "**1071 → 11. yüzyıl**, **1453 → 15. yüzyıl**, **1800 → 18. yüzyıl**.",
            "4 + 1 = **MÖ 5. yüzyıl**.",
            "**Daha eski** olduğunu gösterir: MÖ 500, MÖ 300'den daha eskidir.",
            "**Tarih Öncesi**: yazının icadına kadar. **İlk Çağ**: yazının icadı (MÖ 3200) – Kavimler Göçü (375). **Orta Çağ**: 375 – İstanbul'un Fethi (1453). **Yeni Çağ**: 1453 – Fransız İhtilali (1789). **Yakın Çağ**: 1789 – günümüz.",
        ],
    },
}
