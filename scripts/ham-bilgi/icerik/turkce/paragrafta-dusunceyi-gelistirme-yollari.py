"""TYT Türkçe — Paragrafta Düşünceyi Geliştirme Yolları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: DÜŞÜNCEYİ GELİŞTİRME YOLLARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Paragrafta Düşünceyi Geliştirme Yolları",
    "alt_baslik": "Ham bilgi notu — tanımlama, örnekleme, karşılaştırma, tanık gösterme, "
                  "sayısal veri ve benzetme; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Paragrafta Düşünceyi Geliştirme Yolları",
        "kazanimlar": "Düşünceyi geliştirme yollarını tanır. "
                      "Bir paragrafta kullanılan geliştirme yolunu belirler. "
                      "Geliştirme yollarının işlevlerini açıklar. "
                      "Birden çok geliştirme yolunu bir arada ayırt eder.",
        "kapsam": "Tanımlama, örnekleme, karşılaştırma, tanık gösterme, sayısal "
                  "verilerden yararlanma, benzetme, soru sorma, kişileştirme, "
                  "somutlaştırma; ayırt etme ölçütleri, 45 analiz sorusu",
        "nasil": "Bu konu **kısa ve kesin puan** getirir. Her geliştirme yolunun "
                 "**tek bir işareti** vardır: tanımda \"nedir\", örneklemede \"örneğin\", "
                 "tanık göstermede **tırnak**, sayısal veride **rakam**. İşaretleri "
                 "tanı, soru bitsin.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **hangi geliştirme yolu "
                    "kullanılmış** ya da **hangisi kullanılmamış** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Geliştirme Yolları"},
        {"tur": "gorsel", "baslik": "Şema 1 — Her yolun tek bir işareti vardır",
         "aciklama": "Bu altı işaret, soruların neredeyse tamamını çözer. "
                     "Paragrafta işaretin **kendisini** ara; tanımı hatırlamaya "
                     "çalışma.",
         "ciz": S.kartlar([
             ("Tanımlama", "**\"nedir?\"**\nsorusuna cevap"),
             ("Örnekleme", "**örneğin, sözgelimi**\nsomut örnek"),
             ("Karşılaştırma", "**gibi, kadar, oysa**\niki şey yan yana"),
             ("Tanık gösterme", "**tırnak içinde**\nbaşkasının sözü"),
             ("Sayısal veri", "**rakam, yüzde,\ntarih, oran**"),
             ("Benzetme", "**gibi, sanki**\nbenzerlik kurma"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Geliştirme yolu", "Tanımı", "İşareti ve örneği"],
         "satirlar": [
             ["**Tanımlama**",
              "Bir kavramın **ne olduğunun** açıklanması",
              "\"**nedir?**\" sorusuna cevap verir. \"Roman, olay örgüsüne dayanan "
              "uzun anlatıdır.\""],
             ["**Örnekleme**",
              "Düşüncenin **somut örneklerle** desteklenmesi",
              "**örneğin, sözgelimi, söz gelişi**. \"Sözgelimi Sait Faik'in "
              "öykülerinde...\""],
             ["**Karşılaştırma**",
              "İki varlık ya da kavramın **benzer ve farklı** yönleriyle verilmesi",
              "**gibi, kadar, göre, oysa, ise**. \"Şiir sezgiye, roman gözleme dayanır.\""],
             ["**Tanık gösterme**",
              "**Uzman ya da ünlü birinin sözünün** aktarılması",
              "**Tırnak işareti + kişi adı**. \"Camus'nün dediği gibi: '...'\""],
             ["**Sayısal verilerden yararlanma**",
              "**Rakam, oran ve istatistiklerle** destekleme",
              "**Sayı, yüzde, tarih**. \"Okuma oranı son on yılda %12 arttı.\""],
             ["**Benzetme**",
              "Bir kavramın **başka bir şeye benzetilerek** anlatılması",
              "**gibi, sanki, andırmak**. \"Dil, akan bir ırmak gibidir.\""],
         ],
         "oranlar": [0.24, 0.32, 0.44]},
        {"tur": "tuzak", "baslik": "Tanık Gösterme ile Örnekleme Karıştırılır", "govde":
            "**Tanık göstermede bir kişinin sözü aktarılır** ve genellikle **tırnak "
            "içinde** verilir; amacı düşünceyi **otoriteyle desteklemektir**. "
            "**Örneklemede ise bir durum ya da olay somutlaştırılır**; kimsenin sözü "
            "aktarılmaz. \"Tolstoy'un dediği gibi...\" → tanık gösterme. "
            "\"Sözgelimi Tolstoy, romanlarında bunu yapar.\" → örnekleme. "
            "**Ölçüt: söz mü aktarılıyor, durum mu?**"},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Diğer Geliştirme Yolları"},
        {"tur": "tablo",
         "basliklar": ["Geliştirme yolu", "Tanımı", "Örneği"],
         "satirlar": [
             ["**Soru sorma**",
              "Okuru **düşündürmek** ya da konuya dikkat çekmek için soru kullanma",
              "\"Peki, okumadan düşünmek mümkün müdür?\""],
             ["**Somutlaştırma**",
              "**Soyut bir kavramın** somut örnek ya da görüntüyle anlatılması",
              "\"Sabır, taşı delen damladır.\""],
             ["**Kişileştirme**",
              "İnsan dışı varlığa **insana özgü nitelik** verme",
              "\"Kitaplar raflarda okurunu bekliyordu.\""],
             ["**Açıklama**",
              "Bir düşüncenin **daha anlaşılır kılınması**, genişletilmesi",
              "\"Yani, bir başka deyişle, şöyle ki...\""],
             ["**Neden-sonuç ilişkisi**",
              "Düşüncenin **gerekçelendirilmesi**",
              "\"Bu nedenle okuma alışkanlığı erken yaşta kazanılmalıdır.\""],
         ],
         "oranlar": [0.24, 0.36, 0.40]},
        {"tur": "taktik", "baslik": "\"Hangisi Kullanılmamıştır?\" Sorusunun Yolu", "govde":
            "Bu tip sorularda **seçenekleri paragrafta tek tek ara**. Bulduklarını "
            "**çiz**; geriye kalan cevaptır. Arama sırası şöyle olmalı: önce **gözle "
            "görülen işaretler** (tırnak → tanık, rakam → sayısal veri, \"örneğin\" → "
            "örnekleme), sonra **anlam gerektirenler** (tanımlama, karşılaştırma, "
            "benzetme). Kolay olanları eleyince genellikle iki seçenek kalır."},
        {"tur": "cozum",
         "baslik": "Geliştirme Yollarını Belirleme",
         "soru": "\"**Deneme, yazarın kendisiyle konuştuğu bir türdür. Montaigne'in "
                 "dediği gibi: 'Ben burada kendimi anlatıyorum.' Sözgelimi Nurullah "
                 "Ataç'ın denemeleri de bu yönüyle bir iç konuşmadır. Türkiye'de son "
                 "beş yılda yayımlanan deneme kitabı sayısı %30 arttı.**\"\n"
                 "Bu parçada hangi geliştirme yolları kullanılmıştır?",
         "adimlar": [
             "**Birinci cümle**: \"Deneme ... bir türdür\" → **\"nedir?\"** sorusuna "
             "cevap veriyor → **tanımlama**.",
             "**İkinci cümle**: tırnak içinde **Montaigne'in sözü** aktarılmış → "
             "**tanık gösterme**.",
             "**Üçüncü cümle**: \"**Sözgelimi**\" ile somut bir örnek verilmiş → "
             "**örnekleme**.",
             "**Dördüncü cümle**: **%30** oranı verilmiş → **sayısal verilerden "
             "yararlanma**.",
         ],
         "sonuc": "Parçada **tanımlama, tanık gösterme, örnekleme ve sayısal veri** "
                  "kullanılmıştır. **Karşılaştırma ve benzetme yoktur**; soru "
                  "\"kullanılmamıştır\" biçiminde sorulsaydı cevap bu ikisinden biri "
                  "olurdu."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Ayırt Etme Ölçütleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Karıştırılan üç çift",
         "aciklama": "Bu üç çift, sınavda en çok karıştırılan geliştirme yollarıdır. "
                     "Her çift için **tek bir ayırt edici soru** vardır.",
         "ciz": S.karsilastirma(
             "Benzetme ↔ Karşılaştırma",
             ["**Benzetmede** iki şey birbirine **benzetilir**",
              "Amaç: **anlatımı güçlendirmek**",
              "\"Dil, akan bir ırmak **gibidir**.\"",
              "**Karşılaştırmada** iki şey **ölçülür**",
              "Amaç: **fark ya da benzerliği göstermek**",
              "\"Şiir sezgiye, roman gözleme dayanır.\""],
             "Tanık gösterme ↔ Örnekleme",
             ["**Tanıkta söz aktarılır**",
              "Genellikle **tırnak içinde**",
              "Kişi **otorite** olarak kullanılır",
              "**Örneklemede durum verilir**",
              "\"örneğin, sözgelimi\"",
              "Kişi **örnek** olarak kullanılır"],
             "Tanımlama ↔ Açıklama",
             ["**Tanımda \"nedir?\"** sorusu",
              "Kavramın **sınırı çizilir**",
              "**Açıklamada genişletme** vardır",
              "\"yani, bir başka deyişle\"",
              "Tanım **kısa**, açıklama **uzundur**"])},
        {"tur": "dikkat", "baslik": "Sık Yapılan Üç Hata", "ogeler": [
            "**Her sayı sayısal veri değildir**: \"üç arkadaş konuştu\" ifadesindeki "
            "sayı, düşünceyi **desteklemek için** kullanılmamıştır. Sayısal veri, "
            "**savı güçlendirmek** amacıyla verilmelidir.",
            "**Her tırnak tanık gösterme değildir**: bir kitap adı ya da alıntı sözcük "
            "de tırnak içinde olabilir. **Bir kişinin görüşü** aktarılmalıdır.",
            "**Karşılaştırmada iki taraf da açıkça bulunmalıdır**: yalnızca bir şey "
            "anlatılıp diğerine değinilmiyorsa karşılaştırma yoktur.",
            "**Benzetme yapılması için \"gibi\" şart değildir**: \"Dil bir ırmaktır\" "
            "cümlesinde de benzetme vardır.",
        ]},
        {"tur": "cozum",
         "baslik": "Kullanılmayan Yolu Bulma",
         "soru": "\"**Kent yaşamı, insanı hem yakınlaştırır hem yalnızlaştırır. "
                 "Milyonlarca kişinin yaşadığı bir şehirde insan, kalabalık bir adada "
                 "yaşıyormuş gibi hisseder. Köyde herkes birbirini tanırken kentte "
                 "komşusunun adını bilmeyenler çoğunluktadır.**\"\n"
                 "Bu parçada aşağıdakilerden hangisi **yoktur**? "
                 "(benzetme / karşılaştırma / tanık gösterme / somutlaştırma)",
         "adimlar": [
             "**Benzetme**: \"kalabalık bir adada yaşıyormuş **gibi**\" → **vardır**.",
             "**Karşılaştırma**: \"**Köyde** herkes birbirini tanırken **kentte** "
             "komşusunun adını bilmeyenler...\" → **vardır**.",
             "**Somutlaştırma**: soyut olan yalnızlık, \"ada\" imgesiyle "
             "somutlaştırılmış → **vardır**.",
             "**Tanık gösterme**: hiçbir kişinin sözü aktarılmamış, tırnak yok → "
             "**YOKTUR**.",
         ],
         "sonuc": "Parçada **tanık gösterme** kullanılmamıştır. Bu tip sorularda "
                  "**gözle görülen işaretleri** (tırnak, rakam) önce aramak zaman "
                  "kazandırır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Uygulama İpuçları"},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Bir paragrafta birden çok geliştirme yolu bulunabilir**; soru "
            "\"hangisi vardır/yoktur\" biçiminde sorulur.",
            "**Geliştirme yolu ile anlatım biçimi farklı şeylerdir**: anlatım biçimi "
            "**genel yaklaşımdır** (açıklayıcı, tartışmacı), geliştirme yolu ise "
            "**kullanılan araçtır** (örnekleme, tanık gösterme).",
            "**Açıklayıcı anlatımda** en çok **tanımlama, örnekleme ve sayısal veri**; "
            "**tartışmacı anlatımda** en çok **tanık gösterme ve karşılaştırma** "
            "kullanılır.",
            "**Soru sorma**, tartışmacı anlatımda okuru düşündürmek için sık "
            "kullanılır.",
        ]},
        {"tur": "cikmis", "baslik": "Soru Kalıplarını Tanı", "govde":
            "Bu konu üç kalıpta sorulur: **1)** \"Bu parçada aşağıdakilerden hangisine "
            "**başvurulmuştur**?\" **2)** \"Bu parçada aşağıdakilerden hangisi "
            "**yoktur**?\" **3)** \"Bu parçada numaralanmış cümlelerden hangisinde "
            "**örnekleme** vardır?\" Üçünde de yöntem aynıdır: **işaretleri ara, "
            "bulduklarını çiz**. İkinci kalıpta eleme, birinci kalıpta doğrudan "
            "eşleştirme yapılır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Tanımlama**: \"nedir?\" sorusuna cevap verir.",
            "**Örnekleme**: \"örneğin, sözgelimi\" ile somut örnek.",
            "**Karşılaştırma**: iki şey **yan yana** ölçülür (gibi, kadar, oysa).",
            "**Tanık gösterme**: **tırnak içinde bir kişinin sözü**.",
            "**Sayısal veri**: rakam, yüzde, tarih — **savı desteklemeli**.",
            "**Benzetme**: \"gibi, sanki\"; **\"gibi\" olmadan da** olabilir.",
            "**Somutlaştırma**: soyut kavram somut imgeyle anlatılır.",
            "**Tanıkta söz aktarılır**, **örneklemede durum verilir**.",
            "**Her sayı sayısal veri, her tırnak tanık gösterme değildir.**",
            "**Karşılaştırmada iki taraf da açıkça bulunmalıdır.**",
            "**Anlatım biçimi genel yaklaşım**, **geliştirme yolu kullanılan araçtır**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her geliştirme yolu için **kendi cümleni kurman** isteniyor. "
            "Kendi örneğini yazabiliyorsan sınavda tanımakta zorlanmazsın. "
            "Ayırt etme sorularında ise \"hangi işaret var?\" sorusunu her seferinde "
            "tekrarla.",
        "satir_sayisi": 2,
        "sorular": [
            "Tanımlamayı tanımlayarak hangi soruya cevap verdiğini yazınız.",
            "Tanımlama yoluyla bir cümle kurunuz.",
            "Örneklemeyi tanımlayarak belirteçlerini yazınız.",
            "Örnekleme yoluyla bir cümle kurunuz.",
            "Karşılaştırmayı tanımlayarak belirteçlerini yazınız.",
            "Karşılaştırma yoluyla bir cümle kurunuz.",
            "Tanık göstermeyi tanımlayarak işaretini yazınız.",
            "Tanık gösterme yoluyla bir cümle kurunuz.",
            "Sayısal verilerden yararlanmayı tanımlayınız.",
            "Sayısal veri kullanarak bir cümle kurunuz.",
            "Benzetmeyi tanımlayarak belirteçlerini yazınız.",
            "Benzetme yoluyla bir cümle kurunuz.",
            "Soru sormanın paragraftaki işlevini yazınız.",
            "Somutlaştırmayı tanımlayarak bir örnek veriniz.",
            "Kişileştirmeyi tanımlayarak bir örnek veriniz.",
            "Açıklama yolunu tanımlayarak belirteçlerini yazınız.",
            "Neden-sonuç ilişkisinin geliştirme yolu olarak işlevini yazınız.",
            "Tanık gösterme ile örneklemeyi ayıran ölçütü yazınız.",
            "'Tolstoy'un dediği gibi...' ifadesinin hangi geliştirme yolu olduğunu yazınız.",
            "'Sözgelimi Tolstoy, romanlarında bunu yapar.' ifadesinin hangi geliştirme yolu olduğunu yazınız.",
            "Benzetme ile karşılaştırmayı ayıran ölçütü yazınız.",
            "'Dil, akan bir ırmak gibidir.' cümlesindeki geliştirme yolunu belirleyiniz.",
            "'Şiir sezgiye, roman gözleme dayanır.' cümlesindeki geliştirme yolunu belirleyiniz.",
            "Tanımlama ile açıklamayı ayıran ölçütü yazınız.",
            "Her sayının sayısal veri olmadığını bir örnekle açıklayınız.",
            "Her tırnağın tanık gösterme olmadığını açıklayınız.",
            "Karşılaştırma için gereken zorunlu koşulu yazınız.",
            "Benzetme için 'gibi' sözcüğünün şart olup olmadığını örnekle açıklayınız.",
            "'Deneme, yazarın kendisiyle konuştuğu bir türdür.' cümlesindeki geliştirme yolunu belirleyiniz.",
            "'Montaigne'in dediği gibi: Ben burada kendimi anlatıyorum.' cümlesindeki geliştirme yolunu belirleyiniz.",
            "'Türkiye'de son beş yılda yayımlanan deneme kitabı sayısı %30 arttı.' cümlesindeki geliştirme yolunu belirleyiniz.",
            "'Kent yaşamı insanı hem yakınlaştırır hem yalnızlaştırır. Kalabalık bir adada yaşıyormuş gibi hisseder. Köyde herkes birbirini tanırken kentte komşusunun adını bilmeyenler çoğunluktadır.' Bu parçada hangi geliştirme yolları vardır?",
            "Aynı parçada hangi geliştirme yolunun bulunmadığını yazınız.",
            "'Hangisi kullanılmamıştır?' sorularında izlenecek yöntemi yazınız.",
            "Arama sırasında önce hangi işaretlerin aranması gerektiğini yazınız.",
            "Bir paragrafta birden çok geliştirme yolu bulunabilir mi? Nedenini yazınız.",
            "Anlatım biçimi ile geliştirme yolu arasındaki farkı açıklayınız.",
            "Açıklayıcı anlatımda en sık kullanılan üç geliştirme yolunu yazınız.",
            "Tartışmacı anlatımda en sık kullanılan iki geliştirme yolunu yazınız.",
            "Soru sormanın hangi anlatım biçiminde sık kullanıldığını yazınız.",
            "Bu konunun soru kalıplarını üç maddede yazınız.",
            "Tanımlama ve örnekleme yollarını birlikte kullanan iki cümlelik bir parça yazınız.",
            "Karşılaştırma ve sayısal veri yollarını birlikte kullanan iki cümlelik bir parça yazınız.",
            "Tanık gösterme ve benzetme yollarını birlikte kullanan iki cümlelik bir parça yazınız.",
            "Yazdığınız parçalarda hangi işaretlerin geliştirme yolunu ele verdiğini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Bir kavramın **ne olduğunun açıklanmasıdır**; **\"nedir?\"** sorusuna cevap verir.",
            "\"Öykü, tek bir olay çevresinde gelişen kısa anlatı türüdür.\"",
            "Düşüncenin **somut örneklerle desteklenmesidir**. Belirteçleri: **örneğin, sözgelimi, söz gelişi, nitekim**.",
            "\"Sözgelimi Sait Faik, öykülerinde sıradan insanları anlatır.\"",
            "İki varlık ya da kavramın **benzer ve farklı yönleriyle** verilmesidir. Belirteçleri: **gibi, kadar, göre, oysa, ise, ama**.",
            "\"Şiir sezgiye dayanır, roman ise gözleme.\"",
            "**Uzman ya da tanınmış birinin sözünün aktarılmasıdır**. İşareti: **tırnak işareti + kişi adı**.",
            "\"Cemil Meriç'in dediği gibi: 'Kitap, dost bir el uzatır insana.'\"",
            "Düşüncenin **rakam, oran ve istatistiklerle** desteklenmesidir.",
            "\"Ülkemizde kişi başına düşen yıllık kitap okuma süresi altı saati geçmiyor.\"",
            "Bir kavramın **başka bir şeye benzetilerek** anlatılmasıdır. Belirteçleri: **gibi, sanki, andırmak, kadar**.",
            "\"Bellek, üzerine yazdıkça silinen bir tahtayı andırır.\"",
            "Okuru **düşündürmek** ve konuya **dikkat çekmektir**; genellikle yazarın savunacağı görüşe zemin hazırlar.",
            "**Soyut bir kavramın somut örnek ya da görüntüyle** anlatılmasıdır. \"Sabır, taşı delen damladır.\"",
            "İnsan dışı varlığa **insana özgü nitelik** verilmesidir. \"Kitaplar raflarda okurunu bekliyordu.\"",
            "Bir düşüncenin **daha anlaşılır kılınması ve genişletilmesidir**. Belirteçleri: **yani, bir başka deyişle, şöyle ki, demek ki**.",
            "Düşünceyi **gerekçelendirir**; savın nedenini ya da sonucunu ortaya koyarak inandırıcılığı artırır.",
            "**Söz mü aktarılıyor, durum mu?** Tanıkta bir kişinin **sözü** aktarılır; örneklemede bir **durum ya da olay** somutlaştırılır.",
            "**Tanık gösterme**; bir kişinin sözü aktarılmaktadır.",
            "**Örnekleme**; kişinin sözü değil, yaptığı bir **durum** örnek olarak verilmektedir.",
            "**Benzetmede** iki şey birbirine **benzetilir**, amaç anlatımı güçlendirmektir. **Karşılaştırmada** iki şey **ölçülür**, amaç fark ya da benzerliği göstermektir.",
            "**Benzetme**; dil ile ırmak arasında benzerlik kurulmuştur.",
            "**Karşılaştırma**; şiir ile roman iki ayrı ölçüte göre yan yana getirilmiştir.",
            "**Tanımda \"nedir?\" sorusu** yanıtlanır ve kavramın sınırı çizilir; **kısadır**. **Açıklamada** var olan düşünce **genişletilir**; \"yani, bir başka deyişle\" ile sürer ve **daha uzundur**.",
            "\"Üç arkadaş sinemaya gitti.\" cümlesindeki sayı, bir **savı desteklemek** için kullanılmamıştır. Sayısal veri sayılabilmesi için sayının **düşünceyi güçlendirmesi** gerekir.",
            "Tırnak işareti **kitap adı**, **alıntı sözcük** ya da **vurgu** için de kullanılabilir. Tanık gösterme sayılması için **bir kişinin görüşünün** aktarılması gerekir.",
            "**İki tarafın da açıkça bulunması.** Yalnızca bir şey anlatılıp diğerine hiç değinilmiyorsa karşılaştırma yoktur.",
            "**Şart değildir.** \"Dil bir ırmaktır.\" cümlesinde \"gibi\" yoktur ama benzetme vardır; benzetme yönü doğrudan kurulmuştur.",
            "**Tanımlama**; \"deneme nedir?\" sorusuna cevap verilmiştir.",
            "**Tanık gösterme**; Montaigne'in sözü tırnak içinde aktarılmıştır.",
            "**Sayısal verilerden yararlanma**; %30 oranı savı desteklemek için verilmiştir.",
            "**Benzetme** (\"adada yaşıyormuş gibi\"), **karşılaştırma** (köy–kent) ve **somutlaştırma** (yalnızlık, ada imgesiyle).",
            "**Tanık gösterme**; hiçbir kişinin sözü aktarılmamış, tırnak işareti kullanılmamıştır.",
            "**Seçenekleri paragrafta tek tek ara**, bulduklarını **çiz**; geriye kalan cevaptır.",
            "Önce **gözle görülen işaretler**: tırnak (tanık gösterme), rakam (sayısal veri), \"örneğin\" (örnekleme). Sonra **anlam gerektirenler**: tanımlama, karşılaştırma, benzetme.",
            "**Bulunabilir.** Bir paragraf hem tanımlayıp hem örnekleyebilir, üstüne sayısal veri de ekleyebilir. Soruların çoğu zaten bu çokluğu ölçer.",
            "**Anlatım biçimi genel yaklaşımdır** (açıklayıcı, tartışmacı, öyküleyici, betimleyici). **Geliştirme yolu ise kullanılan araçtır** (örnekleme, tanık gösterme, sayısal veri).",
            "**Tanımlama**, **örnekleme** ve **sayısal verilerden yararlanma**.",
            "**Tanık gösterme** ve **karşılaştırma**.",
            "**Tartışmacı anlatımda**; okuru düşünmeye çağırmak ve savunulacak görüşe hazırlamak için.",
            "**1)** \"Hangisine başvurulmuştur?\" **2)** \"Hangisi yoktur?\" **3)** \"Numaralanmış cümlelerden hangisinde ... vardır?\"",
            "\"Deneme, yazarın kendi düşüncelerini serbestçe aktardığı bir türdür. Sözgelimi Montaigne'in yazıları, bu serbestliğin ilk örnekleri sayılır.\"",
            "\"Köy okullarında sınıf mevcudu ortalama 12 iken kentlerde bu sayı 34'e çıkıyor. Köyde öğretmen her öğrenciyle tek tek ilgilenebilirken kentte bu neredeyse imkânsız.\"",
            "\"Sait Faik'in dediği gibi: 'Yazmasam deli olacaktım.' Onun için yazmak, tıkanmış bir borunun açılması gibiydi.\"",
            "**Örneklemede** \"sözgelimi\", **tanımlamada** \"...bir türdür\" kalıbı, **sayısal veride** rakamlar, **karşılaştırmada** \"iken\", **tanık göstermede** tırnak ve kişi adı, **benzetmede** \"gibi\" ipucu olur.",
        ],
    },
}
