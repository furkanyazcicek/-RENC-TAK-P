"""TYT Türkçe — Paragrafta Ana Düşünce (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: PARAGRAFTA ANA DÜŞÜNCE",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Paragrafta Ana Düşünce",
    "alt_baslik": "Ham bilgi notu — ana düşünce, konu, başlık ve yardımcı düşünce "
                  "ayrımı; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Paragrafta Ana Düşünce",
        "kazanimlar": "Paragrafın ana düşüncesini belirler. "
                      "Konu ile ana düşünceyi ayırt eder. "
                      "Yardımcı düşünceleri tanır. "
                      "Paragrafa uygun başlık seçer.",
        "kapsam": "Konu, ana düşünce, yardımcı düşünce, başlık, ana düşüncenin yeri, "
                  "ana düşünceyi bulma yöntemleri, konu-ana düşünce ayrımı, başlık "
                  "seçme ölçütleri, 45 analiz sorusu",
        "nasil": "Ana düşünce, yazarın **\"bunu söylemek için yazdım\"** dediği "
                 "cümledir. Bulmak için sor: **\"Yazar bu paragrafı neden yazdı?\"** "
                 "Konu \"neden söz ediyor\", ana düşünce \"**ne demek istiyor**\" "
                 "sorusuna cevap verir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de her paragraf grubunda **en az bir ana düşünce sorusu** "
                    "bulunur; bu yüzden konu doğrudan net kazandırır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Dört Temel Kavram"},
        {"tur": "gorsel", "baslik": "Şema 1 — Konu, ana düşünce, yardımcı düşünce, başlık",
         "aciklama": "Bu dördü sürekli karıştırılır ama **soruları farklıdır**. "
                     "Her birinin kendi sorusunu ezberlersen ayrım kendiliğinden "
                     "yapılır.",
         "ciz": S.dikey_akis(
             ["KONU", "ANA DÜŞÜNCE", "YARDIMCI DÜŞÜNCE", "BAŞLIK"],
             ["**\"Neden söz ediliyor?\"** sorusunun cevabıdır. Genellikle **bir sözcük "
              "ya da söz öbeğiyle** ifade edilir: \"okuma alışkanlığı\", \"kentleşme\".",
              "**\"Ne demek isteniyor?\"** sorusunun cevabıdır. **Yargı bildiren bir "
              "cümledir**: \"Okuma alışkanlığı çocuk yaşta kazanılmalıdır.\"",
              "Ana düşünceyi **destekleyen, açıklayan, örnekleyen** düşüncelerdir. "
              "Paragrafta **birden çok** yardımcı düşünce bulunabilir.",
              "Ana düşünceyi **özetleyen kısa ifadedir**. Konu kadar dar, ana düşünce "
              "kadar geniş olmalıdır; genellikle **söz öbeği** biçimindedir."])},
        {"tur": "tablo",
         "basliklar": ["Kavram", "Sorusu", "Biçimi", "Örnek"],
         "satirlar": [
             ["**Konu**", "Neden söz ediyor?", "Söz öbeği", "Okuma alışkanlığı"],
             ["**Ana düşünce**", "Ne demek istiyor?", "**Yargı cümlesi**",
              "Okuma alışkanlığı çocuk yaşta kazanılmalıdır."],
             ["**Yardımcı düşünce**", "Bunu nasıl destekliyor?", "Yargı cümlesi",
              "Ailede kitap okuyan çocuk da okur."],
             ["**Başlık**", "Nasıl adlandırılır?", "Kısa söz öbeği",
              "Çocuklukta Başlayan Alışkanlık"],
         ],
         "oranlar": [0.20, 0.24, 0.20, 0.36]},
        {"tur": "tuzak", "baslik": "Konu ile Ana Düşünce Karıştırılır", "govde":
            "**Konu bir sözcük ya da söz öbeğidir**, yargı bildirmez: \"kentleşme\". "
            "**Ana düşünce ise tam bir cümledir** ve yargı bildirir: \"Plansız "
            "kentleşme, kentin dokusunu bozar.\" Seçeneklerde **yüklemi olmayan** bir "
            "ifade varsa o **konu**dur, ana düşünce değil. Bu tek ölçüt, iki kavramı "
            "her zaman ayırır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Ana Düşünceyi Bulma"},
        {"tur": "gorsel", "baslik": "Şema 2 — Ana düşünceyi bulma yolları",
         "aciklama": "Üç yöntem de aynı sonuca götürür. Paragrafın yapısına göre "
                     "hangisinin daha hızlı olduğuna karar ver.",
         "ciz": S.kartlar([
             ("Sonuç bağlacını ara", "**kısacası, sonuç olarak,\ndemek ki, özetle**"),
             ("Dönüş bağlacını ara", "**ama, ancak, fakat**\nsonrası genellikle asıl düşünce"),
             ("Kendi cümlenle özetle", "\"Yazar aslında\n**şunu diyor**...\""),
             ("Tekrar eden kavram", "en sık geçen düşünce\n**merkezdedir**"),
             ("İlk ve son cümle", "önce **buralara** bak\nçoğu zaman oradadır"),
             ("Sınama sorusu", "\"Paragrafın tamamı\n**bunu anlatmak için mi**?\""),
         ], sutun=3)},
        {"tur": "taktik", "baslik": "En Güvenilir Yöntem: Kendi Cümlenle Özetle", "govde":
            "Paragrafı okuduktan sonra **kitabı kapat ve kendi cümlenle özetle**: "
            "\"Yazar aslında şunu diyor: ...\" Bu cümleyi kurabildiysen ana düşünceyi "
            "bulmuşsun demektir. Sonra seçeneklerde **kendi cümlene en yakın olanı** "
            "seç. Bu yöntem, seçeneklerin seni yönlendirmesini engeller ve çeldiricilere "
            "karşı en güçlü korumadır."},
        {"tur": "cozum",
         "baslik": "Ana Düşünceyi Belirleme",
         "soru": "\"**Bir yazarın gücü, kullandığı sözcüklerin çokluğunda değil, "
                 "yerinde kullanılmasındadır. Binlerce sözcük bilip hiçbirini doğru "
                 "yere koyamayan yazar, sözlükten farksızdır. Oysa az sözcükle yazan "
                 "ama her sözcüğü tam yerine oturtan bir kalem, okurun aklında kalır.**\"\n"
                 "Bu paragrafın konusunu, ana düşüncesini ve bir yardımcı düşüncesini "
                 "belirleyiniz.",
         "adimlar": [
             "**Konu**: \"Neden söz ediyor?\" → **yazarın sözcük kullanımı** "
             "(söz öbeği, yargı yok).",
             "**Ana düşünce**: \"Ne demek istiyor?\" → sözcük **sayısı değil, yerinde "
             "kullanımı** önemlidir.",
             "**Sınama**: paragrafın üç cümlesi de bu yargıyı destekliyor mu? **Evet.**",
             "**Yardımcı düşünce**: \"Çok sözcük bilip yerinde kullanamayan yazar "
             "etkili olamaz.\" — ana düşünceyi **destekleyen** bir yargı.",
         ],
         "sonuc": "**Konu**: yazarın sözcük kullanımı. **Ana düşünce**: Bir yazarın "
                  "gücü, sözcükleri **yerinde kullanmasındadır**. **Başlık**: "
                  "\"Yerinde Kullanılan Sözcük\" olabilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Ana Düşüncenin Yeri"},
        {"tur": "tablo",
         "basliklar": ["Paragraf yapısı", "Ana düşüncenin yeri", "Tanınma biçimi"],
         "satirlar": [
             ["**Tümevarım**", "**Son cümlede**",
              "Örneklerle başlar, yargıyla biter; \"kısacası, sonuç olarak\""],
             ["**Tümdengelim**", "**İlk cümlede**",
              "Yargıyla başlar, sonraki cümleler açıklar ve örnekler"],
             ["**Dağınık**", "**Tek cümlede yok**",
              "Bütünden çıkarılır; okurun özetlemesi gerekir"],
             ["**Sarmal**", "**Hem başta hem sonda**",
              "İlk cümledeki yargı, son cümlede yinelenir ve pekiştirilir"],
         ],
         "oranlar": [0.22, 0.24, 0.54]},
        {"tur": "dikkat", "baslik": "Ana Düşünce Nerede Olamaz?", "ogeler": [
            "**Örnek cümlelerinde olamaz**: \"Örneğin, sözgelimi, nitekim\" ile başlayan "
            "cümleler **yardımcı düşüncedir**.",
            "**Karşıt görüşün anlatıldığı cümlede olamaz**: yazar bir görüşü "
            "**eleştirmek için** aktarıyorsa o cümle ana düşünce değildir.",
            "**Tek bir ayrıntıyı anlatan cümlede olamaz**: ana düşünce **paragrafın "
            "tamamını** kapsamalıdır.",
            "**Soru cümlesinde genellikle olmaz**; ana düşünce **yargı bildirmelidir**.",
        ]},
        {"tur": "tuzak", "baslik": "Karşıt Görüş Tuzağı", "govde":
            "Bazı paragraflar önce **eleştirilecek görüşü** anlatır, sonra çürütür: "
            "\"Kimileri okumanın yalnızca bilgi edinmek olduğunu düşünür. **Oysa** "
            "okumak, düşünme biçimini de değiştirir.\" Buradaki **birinci cümle "
            "yazarın görüşü değildir**; ana düşünce **\"oysa\"dan sonra** gelir. "
            "İlk cümleye bakıp cevap işaretlemek, bu paragraf türünde kesin yanlıştır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Başlık Bulma"},
        {"tur": "maddeler", "ogeler": [
            "**Başlık ana düşünceyi özetler**; bu yüzden önce ana düşünceyi bul, sonra "
            "başlığa geç.",
            "**Çok geniş olmamalı**: paragraf okuma alışkanlığını anlatıyorsa başlık "
            "\"Eğitim\" olamaz; kapsam çok geniştir.",
            "**Çok dar olmamalı**: paragrafın yalnızca bir cümlesini karşılayan başlık "
            "da yanlıştır.",
            "**Paragrafta geçmeyen bir kavram** başlık olamaz.",
            "**Genellikle söz öbeğidir**, tam cümle değil; ama yargı bildiren başlıklar "
            "da olabilir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Başlık seçme ölçütü",
         "aciklama": "İyi bir başlık, **kapsam bakımından tam ortada** durur: "
                     "paragrafın tamamını kapsar ama fazlasını değil.",
         "ciz": S.karsilastirma(
             "ÇOK GENİŞ başlık (yanlış)",
             ["Paragrafın **dışına taşar**",
              "Başka paragraflara da uyar",
              "\"Eğitim\", \"Sanat\", \"Yaşam\"",
              "Ayırt edici değildir"],
             "UYGUN başlık (doğru)",
             ["Paragrafın **tamamını kapsar**",
              "Fazlasını **kapsamaz**",
              "Ana düşünceyi **özetler**",
              "\"Çocuklukta Başlayan Okuma\""],
             "ÇOK DAR başlık (yanlış)",
             ["Paragrafın **bir bölümünü** karşılar",
              "Yardımcı düşünceye aittir",
              "Bütünü temsil etmez",
              "\"Ailenin Kitaplığı\""])},
        {"tur": "cozum",
         "baslik": "Başlık Seçme",
         "soru": "Ana düşüncesi **\"Sanat eseri, izleyicisiyle buluştuğunda tamamlanır\"** "
                 "olan bir paragraf için aşağıdaki başlıklardan hangisi uygundur?\n"
                 "**A)** Sanat  **B)** Sanatın Tarihi  **C)** İzleyicisiz Sanat Olmaz  "
                 "**D)** Müze Ziyaretleri  **E)** Ressamın Fırçası",
         "adimlar": [
             "**A)** \"Sanat\" → **çok geniş**; sayısız paragrafa uyar, ayırt edici "
             "değildir.",
             "**B)** \"Sanatın Tarihi\" → paragrafta **tarihten söz edilmiyor**; "
             "konu dışıdır.",
             "**C)** \"İzleyicisiz Sanat Olmaz\" → ana düşünceyi **tam olarak** "
             "özetliyor.",
             "**D)** \"Müze Ziyaretleri\" → **çok dar**; olsa olsa bir ayrıntıdır.",
             "**E)** \"Ressamın Fırçası\" → paragrafın **ana düşüncesiyle ilgisiz**.",
         ],
         "sonuc": "Doğru başlık **C) İzleyicisiz Sanat Olmaz**'dır. Başlık, ana "
                  "düşünceyi **ne eksik ne fazla** karşılamalıdır."},
        {"tur": "cikmis", "baslik": "Ana Düşünce Sorusunun Kalıpları", "govde":
            "Aynı şey farklı biçimlerde sorulur; hepsi **ana düşünceyi** ister: "
            "\"Bu parçada asıl anlatılmak istenen nedir?\", \"Bu parçanın ana düşüncesi "
            "aşağıdakilerden hangisidir?\", \"Bu parçada vurgulanmak istenen nedir?\", "
            "\"Bu parça aşağıdakilerden hangisiyle özetlenebilir?\", \"Yazarın bu "
            "parçayı yazma amacı nedir?\" Beşi de aynı yöntemle çözülür."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Konu**: \"neden söz ediyor?\" — **söz öbeği**, yargı yok.",
            "**Ana düşünce**: \"ne demek istiyor?\" — **yargı cümlesi**.",
            "Seçenekte **yüklem yoksa** o konudur, ana düşünce değildir.",
            "**Yardımcı düşünce ana düşünceyi destekler**, onun yerini tutmaz.",
            "**Başlık ana düşünceyi özetler**; önce ana düşünceyi bul.",
            "**Kendi cümlenle özetle**, sonra en yakın seçeneği seç.",
            "**\"Kısacası, sonuç olarak\"** ana düşünceyi işaret eder.",
            "**\"Ama, ancak, oysa\"dan sonrası** genellikle asıl düşüncedir.",
            "**\"Örneğin\"den sonrası** yardımcı düşüncedir.",
            "**Karşıt görüş cümlesi ana düşünce olamaz.**",
            "**Tümevarımda sonda**, **tümdengelimde başta** ara.",
            "Başlık **ne çok geniş ne çok dar** olmalı.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruda **kendi cümleni kurman** isteniyor. Bir kavramı "
            "tanımlamak yetmez; **örneğini de yaz**. Ana düşünce sorularında cevabını "
            "yazmadan önce \"paragrafın tamamı bunu anlatmak için mi yazılmış?\" diye "
            "sor.",
        "satir_sayisi": 2,
        "sorular": [
            "Konuyu tanımlayarak hangi soruya cevap verdiğini yazınız.",
            "Ana düşünceyi tanımlayarak hangi soruya cevap verdiğini yazınız.",
            "Konu ile ana düşüncenin biçimsel farkını yazınız.",
            "Bir seçeneğin konu mu ana düşünce mi olduğunu ayıran ölçütü yazınız.",
            "Yardımcı düşünceyi tanımlayınız.",
            "Bir paragrafta kaç ana düşünce, kaç yardımcı düşünce bulunabilir?",
            "Başlığı tanımlayarak ana düşünceyle ilişkisini yazınız.",
            "'Okuma alışkanlığı' ifadesinin konu mu ana düşünce mi olduğunu gerekçesiyle yazınız.",
            "Aynı konuyla ilgili bir ana düşünce cümlesi kurunuz.",
            "Aynı ana düşünceyi destekleyen bir yardımcı düşünce yazınız.",
            "Aynı paragraf için uygun bir başlık öneriniz.",
            "Ana düşünceyi bulmanın üç yolunu yazınız.",
            "En güvenilir ana düşünce bulma yöntemini açıklayınız.",
            "Kendi cümlenle özetleme yönteminin avantajını yazınız.",
            "'Kısacası, sonuç olarak' ifadelerinin ana düşünceyle ilişkisini yazınız.",
            "'Ama, ancak, oysa' bağlaçlarının ana düşünceye işaret etme biçimini açıklayınız.",
            "Tekrar eden kavramın ana düşünceyle ilişkisini yazınız.",
            "Ana düşünceyi sınayan soruyu yazınız.",
            "Tümevarım yapısında ana düşüncenin yerini yazınız.",
            "Tümdengelim yapısında ana düşüncenin yerini yazınız.",
            "Dağınık yapıda ana düşüncenin nasıl bulunduğunu yazınız.",
            "Sarmal yapıyı tanımlayınız.",
            "Ana düşüncenin bulunamayacağı cümle türlerini sıralayınız.",
            "Örnek cümlelerinin neden ana düşünce olamayacağını açıklayınız.",
            "Karşıt görüş tuzağını bir örnekle açıklayınız.",
            "'Kimileri okumanın yalnızca bilgi edinmek olduğunu düşünür. Oysa okumak düşünme biçimini de değiştirir.' Bu parçada ana düşünce hangi cümlededir?",
            "Aynı parçada ilk cümlenin işlevini yazınız.",
            "Soru cümlesinin ana düşünce olup olamayacağını gerekçesiyle yazınız.",
            "Başlığın çok geniş olmasının neden yanlış olduğunu açıklayınız.",
            "Başlığın çok dar olmasının neden yanlış olduğunu açıklayınız.",
            "Paragrafta geçmeyen bir kavramın başlık olup olamayacağını yazınız.",
            "Ana düşüncesi 'Sanat eseri izleyicisiyle buluştuğunda tamamlanır' olan paragraf için uygun bir başlık yazınız.",
            "'Sanat' başlığının neden uygun olmadığını açıklayınız.",
            "'Müze Ziyaretleri' başlığının neden uygun olmadığını açıklayınız.",
            "Ana düşünce sorusunun beş farklı soru kalıbını yazınız.",
            "'Bu parçada vurgulanmak istenen nedir?' sorusu hangi kavramı sorar?",
            "'Yazarın bu parçayı yazma amacı nedir?' sorusu hangi kavramı sorar?",
            "Bir paragrafın konusunu bulmak için hangi soruyu sorarsınız?",
            "Ana düşünce ile yardımcı düşünceyi ayıran sınama sorusunu yazınız.",
            "Metinde doğru olan bir bilginin neden ana düşünce olmayabileceğini açıklayınız.",
            "Kapsam daraltma çeldiricisinin ana düşünce sorularındaki görünümünü açıklayınız.",
            "Aşırı genelleme yapan bir ana düşünce seçeneği neden şüphelidir?",
            "Bir paragrafın ana düşüncesini üç farklı cümleyle ifade ediniz.",
            "Kendi seçtiğiniz bir konuda tümevarım yapısında kısa bir paragraf yazınız.",
            "Aynı konuda tümdengelim yapısında kısa bir paragraf yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Paragrafta **neden söz edildiğidir**; **\"Neden söz ediliyor?\"** sorusuna cevap verir.",
            "Yazarın **okura vermek istediği asıl mesajdır**; **\"Ne demek isteniyor?\"** sorusuna cevap verir.",
            "**Konu bir söz öbeğidir**, yargı bildirmez. **Ana düşünce tam bir cümledir** ve yargı bildirir.",
            "**Yüklem var mı?** Yüklemi olmayan, yargı bildirmeyen ifade **konudur**.",
            "Ana düşünceyi **destekleyen, açıklayan ya da örnekleyen** düşüncelerdir.",
            "**Bir ana düşünce**, **birden çok yardımcı düşünce** bulunur.",
            "Ana düşünceyi **özetleyen kısa ifadedir**; ana düşünce bulunmadan başlık doğru seçilemez.",
            "**Konudur**; yargı bildirmez, yüklemi yoktur, yalnızca neden söz edildiğini gösterir.",
            "\"Okuma alışkanlığı çocuk yaşta kazanılmalıdır.\"",
            "\"Evinde kitap gören çocuk, okumayı doğal bir davranış olarak öğrenir.\"",
            "\"Çocuklukta Başlayan Alışkanlık\".",
            "**1)** Sonuç bağlaçlarını ara. **2)** Dönüş bağlaçlarına bak. **3)** Kendi cümlenle özetle (ayrıca tekrar eden kavrama bak).",
            "**Kendi cümlenle özetlemek**: paragrafı okuduktan sonra \"Yazar aslında şunu diyor: ...\" cümlesini kurmak, sonra seçeneklerde buna en yakın olanı seçmek.",
            "**Seçeneklerin seni yönlendirmesini engeller.** Kendi özetini kurduğunda çeldiricilere karşı bağışıklık kazanırsın.",
            "Bu ifadelerden sonra gelen cümle genellikle **ana düşüncedir**; yazar önceki anlattıklarını bir yargıda toplar.",
            "Bu bağlaçlar bir **dönüş** bildirir; yazarın **asıl savunduğu görüş** genellikle bağlaçtan **sonra** gelir.",
            "En sık tekrar eden kavram, paragrafın **merkezindedir** ve genellikle ana düşüncenin içinde geçer.",
            "**\"Paragrafın tamamı bu cümleyi anlatmak için mi yazılmış?\"** Cevap evetse ana düşünce, hayırsa yardımcı düşüncedir.",
            "**Son cümlede**; ayrıntılardan genele gidilir ve yargı sonda verilir.",
            "**İlk cümlede**; yargı önce verilir, sonraki cümleler onu açıklar.",
            "**Bütünden çıkarılır**; tek bir cümlede yer almaz, okurun paragrafı özetlemesi gerekir.",
            "Ana düşüncenin **hem ilk hem son cümlede** yer aldığı yapıdır; baştaki yargı sonda yinelenerek pekiştirilir.",
            "**Örnek cümleleri**, **karşıt görüşün anlatıldığı cümleler**, **tek bir ayrıntıyı anlatan cümleler** ve genellikle **soru cümleleri**.",
            "Örnekler ana düşünceyi **desteklemek için** vardır; kendileri asıl mesaj değildir. \"Örneğin\" ile başlayan cümle **yardımcı düşüncedir**.",
            "Yazar önce **eleştireceği görüşü** aktarır, sonra çürütür. \"Kimileri sanatın yalnızca eğlence olduğunu sanır. **Oysa** sanat, düşünmeyi de öğretir.\" Ana düşünce ikinci cümlededir.",
            "**İkinci cümlede**: \"Okumak düşünme biçimini de değiştirir.\"",
            "İlk cümle, yazarın **katılmadığı, eleştireceği görüştür**; ana düşünce değil, ona zemin hazırlayan bir giriştir.",
            "**Genellikle olamaz**; ana düşünce **yargı bildirmelidir**. Soru cümlesi yargı bildirmez, düşündürür.",
            "Paragrafın **dışına taşar** ve başka birçok paragrafa da uyar; **ayırt edici** değildir.",
            "Paragrafın yalnızca **bir bölümünü** karşılar; bütünü temsil etmediği için ana düşünceyi özetleyemez.",
            "**Olamaz.** Başlık, paragrafın içeriğinden çıkarılmalıdır; metinde bulunmayan bir kavram başlık yapılamaz.",
            "\"İzleyicisiz Sanat Olmaz\" (ya da \"Sanatı Tamamlayan İzleyici\").",
            "**Çok geniştir**; sanatla ilgili sayısız paragrafa uyar ve bu paragrafı ayırt etmez.",
            "**Çok dardır**; paragrafın ana düşüncesini değil, olsa olsa bir ayrıntısını karşılar.",
            "\"Asıl anlatılmak istenen\", \"ana düşünce\", \"vurgulanmak istenen\", \"hangisiyle özetlenebilir\", \"yazma amacı\".",
            "**Ana düşünceyi** sorar.",
            "**Ana düşünceyi** sorar; yazma amacı ile ana düşünce aynı şeyi ifade eder.",
            "**\"Bu paragrafta neden söz ediliyor?\"**",
            "**\"Paragrafın tamamı bunu anlatmak için mi yazılmış?\"**",
            "Bilgi **doğru olabilir** ama yalnızca ana düşünceyi **destekleyen bir ayrıntı** olabilir. Doğruluk, ana düşünce olmak için yeterli değildir.",
            "Seçenek, ana düşüncenin **yalnızca bir bölümünü** verir. Paragrafın tamamını kapsamadığı için yanlıştır.",
            "Paragraflar genellikle **ölçülü** konuşur. \"Herkes, asla, daima\" gibi ifadeler metnin söylediğinden **fazlasını** iddia eder.",
            "Örnek — ana düşünce \"Okumak çocuk yaşta kazanılmalıdır\": **1)** Okuma alışkanlığının temeli çocuklukta atılır. **2)** Erken yaşta başlamayan okuma alışkanlığı sonradan zor kazanılır. **3)** Çocukluk, okuma sevgisinin kök saldığı dönemdir.",
            "Örnek: \"Kitapla büyüyen çocuklar okuldaki derslerde daha başarılı oluyor. Evinde kitaplık bulunan öğrencilerin sözcük dağarcığı daha geniş. Araştırmalar, okumaya erken başlayanların ileride de okumayı sürdürdüğünü gösteriyor. **Kısacası okuma alışkanlığı çocuk yaşta kazanılmalıdır.**\"",
            "Örnek: \"**Okuma alışkanlığı çocuk yaşta kazanılmalıdır.** Çünkü bu dönemde edinilen davranışlar kalıcı olur. Evinde kitap gören çocuk, okumayı doğal bir iş sayar. Araştırmalar da erken başlayanların okumayı bırakmadığını gösteriyor.\"",
        ],
    },
}
