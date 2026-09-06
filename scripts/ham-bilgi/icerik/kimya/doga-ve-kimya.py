"""TYT Kimya — Doğa ve Kimya (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: DOĞA VE KİMYA",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Doğa ve Kimya",
    "alt_baslik": "Ham bilgi notu — su, hava ve toprak kimyası, çevre sorunları ve "
                  "sürdürülebilirlik; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Doğa ve Kimya",
        "kazanimlar": "9.9.1.1 — Suyun özelliklerini ve önemini açıklar. "
                      "9.9.1.2 — Hava kirliliğinin kimyasal nedenlerini yorumlar. "
                      "9.9.1.3 — Sürdürülebilir yaşam için kimyanın rolünü tartışır.",
        "kapsam": "Suyun anomalisi, sert ve yumuşak su, hava bileşimi, sera etkisi, "
                  "asit yağmurları, ozon incelmesi, toprak kirliliği, geri dönüşüm, "
                  "40 analiz sorusu",
        "nasil": "Bu konu **yorum** konusudur; ezberden çok **neden-sonuç** ister. "
                 "Her çevre sorununun **hangi gazdan** kaynaklandığını eşleştirerek "
                 "çalış.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Çevre soruları TYT'de biyoloji ve coğrafyayla da kesişir; "
                    "buradaki bilgi üç derste birden işine yarar.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Su Kimyası"},
        {"tur": "maddeler", "ogeler": [
            "Su **polar** bir moleküldür ve molekülleri arasında **hidrojen bağı** "
            "bulunur. Bütün özel davranışları bu iki bilgiden çıkar.",
            "**Yüksek öz ısı**: Çok ısı alsa bile sıcaklığı yavaş yükselir. "
            "Bu yüzden denizler iklimi **ılımanlaştırır** ve canlıların vücut "
            "sıcaklığı dengede kalır.",
            "**Yüksek kaynama noktası**: Benzer kütleli moleküllere göre çok yüksektir "
            "(H2S gaz iken H2O sıvıdır). Nedeni **hidrojen bağıdır**.",
            "**Suyun anomalisi**: Su 4 °C'de **en yoğun** hâldedir. Donarken "
            "**genleşir**, bu yüzden **buz suda yüzer**. Göller yüzeyden donar, "
            "altta canlılar yaşamaya devam eder.",
            "**Yüksek yüzey gerilimi**: Su damlasının küre biçimi alması ve bazı "
            "böceklerin su üstünde yürüyebilmesi bundandır.",
            "**Evrensel çözücü**: Polar ve iyonik maddelerin çoğunu çözer.",
        ]},
        {"tur": "tuzak", "baslik": "Suyun Genleşerek Donması Bir İstisnadır", "govde":
            "Maddelerin neredeyse tamamı **donarken büzülür**, yoğunluğu artar. "
            "**Su tersini yapar**: donarken hacmi artar, yoğunluğu **azalır**. "
            "Kışın su borularının patlamasının ve kayaların çatlamasının nedeni "
            "budur."},
        {"tur": "altbolum", "baslik": "Sert Su ve Yumuşak Su"},
        {"tur": "maddeler", "ogeler": [
            "**Sert su**: İçinde **kalsiyum (Ca+2)** ve **magnezyum (Mg+2)** iyonları "
            "**bol** bulunan sudur.",
            "**Sertliğin sonuçları**: Sabun **köpürmez** (iyonlar sabunla çökelek "
            "oluşturur), çaydanlık ve borularda **kireç (kazan taşı)** birikir, "
            "deterjan tüketimi artar.",
            "**Yumuşatma yöntemleri**: **Kaynatma** (geçici sertliği giderir), "
            "**soda (Na2CO3) ekleme**, **iyon değiştirici reçineler**, **damıtma**.",
            "**Yumuşak su**: Ca ve Mg iyonu az olan sudur; sabun **bol köpürür**.",
        ]},
        {"tur": "cikmis", "baslik": "Sabun köpürmesi sorusu", "govde":
            "'Aynı sabun bir suda köpürüyor, diğerinde köpürmüyor. Neden?' "
            "Cevap: köpürmeyen su **serttir**; içindeki **Ca+2 ve Mg+2** iyonları "
            "sabunla birleşip **çözünmeyen çökelek** oluşturur ve köpük yerine "
            "kir gibi bir tortu bırakır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hava Kimyası"},
        {"tur": "gorsel", "baslik": "Şema 1 — Temiz havanın bileşimi",
         "aciklama": "Hava **homojen bir karışımdır**; oranlar yere ve yüksekliğe "
                     "göre değişebilir.",
         "ciz": S.kartlar([
             ("Azot (N2)", "**%78**\nen bol gaz"),
             ("Oksijen (O2)", "**%21**\nsolunum için"),
             ("Argon (Ar)", "**%0,93**\nsoy gaz"),
             ("Karbondioksit (CO2)", "**%0,04**\nfotosentez ve sera etkisi"),
             ("Su buharı", "değişken\nnem"),
             ("Diğer soy gazlar", "eser miktarda\nNe, He, Kr, Xe"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Kirletici", "Kaynağı", "Yol Açtığı Sorun"],
         "oranlar": [0.24, 0.34, 0.42],
         "satirlar": [
             ["**CO2**", "Fosil yakıt, orman yangını, solunum",
              "**Sera etkisi**, küresel ısınma"],
             ["**CO (karbonmonoksit)**", "**Eksik yanma** (soba, egzoz)",
              "**Zehirlidir** — hemoglobine oksijenden daha güçlü bağlanır"],
             ["**SO2 (kükürtdioksit)**", "Kükürtlü kömür, petrol",
              "**Asit yağmuru**, solunum yolu hastalıkları"],
             ["**NO2 (azot oksitler)**", "Motorlu taşıtlar, yüksek sıcaklıkta yanma",
              "**Asit yağmuru**, fotokimyasal duman (smog)"],
             ["**CFC (kloroflorokarbon)**", "Eski buzdolapları, spreyler",
              "**Ozon tabakasının incelmesi**"],
             ["**Metan (CH4)**", "Bataklık, çöp sahaları, hayvancılık",
              "Güçlü **sera gazı**"],
             ["**Partikül madde (toz, is)**", "Sanayi, inşaat, yakıt",
              "Solunum yolu ve kalp hastalıkları"],
         ]},
        {"tur": "ezber", "baslik": "Sorun–Gaz Eşleşmesi", "ogeler": [
            "**Sera etkisi ve küresel ısınma** → CO2, CH4, su buharı, N2O",
            "**Asit yağmuru** → SO2 ve NOx (azot oksitler)",
            "**Ozon incelmesi** → CFC gazları",
            "**Zehirlenme (evde)** → CO — kokusuz ve renksizdir, bu yüzden tehlikeli",
            "**Fotokimyasal duman** → NOx + hidrokarbonlar + güneş ışığı",
        ]},
        {"tur": "tuzak", "baslik": "Sera Etkisi ile Ozon İncelmesi Farklı Sorunlardır",
         "govde": "**Sera etkisi**, CO2 gibi gazların ısıyı tutmasıdır → sonuç "
                  "**küresel ısınma**. **Ozon incelmesi**, CFC'lerin ozon tabakasını "
                  "parçalamasıdır → sonuç **morötesi (UV) ışınların artması**. "
                  "İkisinin nedeni de sonucu da farklıdır; sınavda birbirinin "
                  "yerine çeldirici olarak kullanılır."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Ozon (O3) iki yerde bulunur**: **Stratosferde (yukarıda)** koruyucudur, "
            "UV'yi süzer. **Yeryüzünde (troposferde)** ise **kirleticidir**, solunum "
            "yollarına zarar verir. Aynı madde, bulunduğu yere göre yararlı ya da "
            "zararlıdır.",
            "**Karbonmonoksit (CO)** hemoglobine oksijenden **yaklaşık 200 kat daha "
            "güçlü** bağlanır; bu yüzden az miktarı bile öldürücüdür.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Toprak Kimyası"},
        {"tur": "maddeler", "ogeler": [
            "Toprak; **mineraller, organik madde (humus), su ve hava**dan oluşan "
            "**heterojen bir karışımdır**.",
            "**Toprak pH'ı** bitki gelişimi için kritiktir. Çoğu bitki **6-7 arası** "
            "pH sever. **Asidik toprağa kireç**, **bazik toprağa kükürt ya da "
            "organik gübre** eklenerek düzeltilir.",
            "**Bitkinin ihtiyaç duyduğu temel elementler**: **Azot (N)** yaprak ve "
            "gövde gelişimi, **Fosfor (P)** kök ve çiçek, **Potasyum (K)** meyve ve "
            "hastalık direnci. Gübre torbalarındaki **NPK** bu üç elementin oranıdır.",
            "**Toprak kirliliği kaynakları**: aşırı ve bilinçsiz **gübre** kullanımı, "
            "**tarım ilaçları (pestisit)**, **ağır metaller** (kurşun, cıva, kadmiyum), "
            "endüstriyel atıklar, düzensiz çöp depolama.",
            "**Aşırı gübre**, yağmurla göllere taşınınca **ötrofikasyona** yol açar: "
            "algler aşırı çoğalır, suyun oksijeni tükenir, canlılar ölür.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Sürdürülebilirlik ve Yeşil Kimya"},
        {"tur": "maddeler", "ogeler": [
            "**Sürdürülebilirlik**: Bugünün ihtiyaçlarını, **gelecek kuşakların "
            "ihtiyaçlarını tehlikeye atmadan** karşılamaktır.",
            "**Yeşil kimya ilkeleri**: Atığı **oluştuktan sonra temizlemek yerine "
            "hiç oluşturmamak**, daha az zararlı çözücü kullanmak, **yenilenebilir "
            "hammadde** tercih etmek, enerji verimliliğini artırmak, **katalizör** "
            "kullanarak tepkimeyi daha düşük sıcaklıkta yürütmek.",
            "**Geri dönüşüm**: Cam, metal, kâğıt ve plastik yeniden işlenebilir. "
            "**Alüminyumun geri dönüşümü**, cevherden üretmeye göre yaklaşık "
            "**%95 daha az enerji** harcar.",
            "**Cam sonsuz kez** geri dönüştürülebilir ve kalitesi düşmez.",
            "**Yenilenebilir enerji**: güneş, rüzgâr, jeotermal, hidroelektrik, "
            "biyokütle. **Yenilenemeyen**: kömür, petrol, doğal gaz, nükleer yakıt.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Atık yönetimi öncelik sırası",
         "aciklama": "En üstteki en etkilidir. **Geri dönüşüm son çare değil, "
                     "üçüncü basamaktır**; önce azaltmak ve yeniden kullanmak gelir.",
         "ciz": S.piramit(
             ["Azalt", "Yeniden kullan", "Geri dönüştür", "Enerjiye çevir", "Depola"],
             ["**En etkili** — hiç üretme",
              "Aynı ürünü tekrar kullan",
              "Hammaddeye çevir",
              "Yakarak enerji elde et",
              "**En son çare** — düzenli depolama"])},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Suyun bütün özel davranışları **hidrojen bağından** çıkar.",
            "Su **4 °C'de en yoğundur**; donarken **genleşir**, buz **yüzer**.",
            "Sert su: **Ca+2 ve Mg+2** fazla → sabun **köpürmez**, **kireç** yapar.",
            "Hava: **%78 azot, %21 oksijen**.",
            "**CO2 → sera etkisi**, **SO2/NOx → asit yağmuru**, **CFC → ozon incelmesi**, "
            "**CO → zehirlenme**.",
            "Ozon **yukarıda koruyucu**, **aşağıda kirletici**.",
            "Gübrede **NPK**: azot yaprak, fosfor kök, potasyum meyve.",
            "Atık sırası: **azalt → yeniden kullan → geri dönüştür**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Bu konunun soruları **neden-sonuç** ister. 'Hangi gaz, hangi soruna, "
            "neden yol açar' zincirini her cevapta kurmaya çalış.",
        "satir_sayisi": 2,
        "sorular": [
            "Suyun polar olması ve hidrojen bağı içermesi hangi özelliklerine yol açar?",
            "Suyun yüksek öz ısısının iklim üzerindeki etkisini açıklayınız.",
            "H2S gaz iken H2O'nun sıvı olmasının nedeni nedir?",
            "Suyun anomalisi nedir? Kaç derecede en yoğundur?",
            "Buzun suda yüzmesinin göllerdeki canlılar için önemini açıklayınız.",
            "Kışın su borularının patlamasını suyun hangi özelliği açıklar?",
            "Suyun yüzey geriliminin yüksek olmasına bir doğa örneği veriniz.",
            "Sert su nedir? Hangi iyonları içerir?",
            "Sert suda sabunun köpürmemesinin nedeni nedir?",
            "Çaydanlıkta kireç birikmesini açıklayınız.",
            "Suyu yumuşatmak için kullanılan üç yöntem yazınız.",
            "Temiz havanın bileşimini yüzde olarak yazınız.",
            "Havanın homojen karışım olduğunu gösteren özellik nedir?",
            "Karbondioksitin havadaki oranı nedir ve hangi soruna yol açar?",
            "Karbonmonoksit hangi durumda oluşur?",
            "Karbonmonoksitin zehirleyici olmasının nedeni nedir?",
            "Karbonmonoksitin özellikle tehlikeli olmasının fiziksel nedeni nedir?",
            "Kükürtdioksitin kaynağı nedir ve hangi soruna yol açar?",
            "Azot oksitlerin kaynağı ve etkileri nelerdir?",
            "Asit yağmurlarının oluşum mekanizmasını yazınız.",
            "Asit yağmurlarının üç zararını yazınız.",
            "CFC gazları hangi soruna yol açar ve kaynağı nedir?",
            "Sera etkisi ile ozon incelmesi arasındaki farkı yazınız.",
            "Sera etkisine yol açan üç gaz yazınız.",
            "Ozonun stratosferde ve yeryüzünde farklı rol oynamasını açıklayınız.",
            "Fotokimyasal dumanın (smog) oluşumu için gereken üç bileşeni yazınız.",
            "Metanın sera gazı olarak önemi nedir? Kaynakları nelerdir?",
            "Toprağın hangi bileşenlerden oluştuğunu yazınız.",
            "Toprak pH'ının bitki için önemi nedir?",
            "Asidik bir toprak nasıl düzeltilir?",
            "Gübredeki NPK harfleri hangi elementleri gösterir?",
            "Azot, fosfor ve potasyumun bitkideki görevlerini ayrı ayrı yazınız.",
            "Toprak kirliliğinin dört kaynağını yazınız.",
            "Ağır metallerin toprakta birikmesinin besin zinciri açısından sonucu nedir?",
            "Aşırı gübre kullanımının göllerde yol açtığı sorunu adlandırıp açıklayınız.",
            "Sürdürülebilirlik kavramını bir cümleyle tanımlayınız.",
            "Yeşil kimyanın üç ilkesini yazınız.",
            "Alüminyum geri dönüşümünün enerji açısından avantajı nedir?",
            "Hangi malzeme sonsuz kez geri dönüştürülebilir?",
            "Atık yönetiminde öncelik sırasını yazınız ve en etkili basamağı belirtiniz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Yüksek öz ısı, yüksek kaynama noktası, yüksek yüzey gerilimi, evrensel çözücü olması** ve **donarken genleşmesi** (anomali).",
            "Su çok ısı alsa bile sıcaklığı yavaş yükselir, yavaş soğur. Bu yüzden **denizler ve göller çevrelerindeki iklimi ılımanlaştırır**; gece-gündüz farkı azalır.",
            "Su molekülleri arasında **hidrojen bağı** vardır; H2S'de yoktur. Hidrojen bağını kırmak için çok daha fazla enerji gerekir.",
            "Su **4 °C'de en yoğundur**; bu sıcaklığın altında soğudukça **genleşir** ve yoğunluğu azalır. Bu, maddelerin genel davranışına aykırıdır.",
            "Buz **yüzeyde kalır** ve altındaki suyu yalıtır; göl dibe kadar donmaz, canlılar kış boyunca **yaşamaya devam eder**.",
            "Su donarken **genleşir (hacmi artar)**; borunun içinde oluşan basınç metali çatlatır.",
            "**Su damlasının küre biçimi alması** ve bazı böceklerin (su tepegözü) su yüzeyinde yürüyebilmesi.",
            "İçinde **kalsiyum (Ca+2)** ve **magnezyum (Mg+2)** iyonları bol bulunan sudur.",
            "Ca+2 ve Mg+2 iyonları sabunla birleşerek **çözünmeyen çökelek** oluşturur; sabun köpürmek yerine tortu bırakır.",
            "Sudaki kalsiyum ve magnezyum bileşikleri ısıtılınca **çözünürlüğünü kaybeder** ve kap yüzeyinde **kireç (kazan taşı)** olarak birikir.",
            "**Kaynatma**, **soda (Na2CO3) ekleme**, **iyon değiştirici reçine** (damıtma da yazılabilir).",
            "**%78 azot, %21 oksijen, %0,93 argon, %0,04 karbondioksit** ve değişken oranda su buharı.",
            "Her yerinde **aynı bileşimi ve özelliği** göstermesi; bileşenlerinin gözle ya da mikroskopla ayırt edilememesi.",
            "Yaklaşık **%0,04**. Artması **sera etkisini güçlendirir** ve küresel ısınmaya yol açar.",
            "**Eksik (yetersiz oksijenle) yanma** sonucu oluşur: sobalar, şofbenler, egzoz.",
            "Hemoglobine **oksijenden çok daha güçlü bağlanır**; kanın oksijen taşımasını engeller ve dokular oksijensiz kalır.",
            "**Renksiz ve kokusuzdur**; kişi zehirlendiğini fark etmeden bilincini kaybeder.",
            "**Kükürtlü kömür ve petrolün yanması.** Havadaki su buharıyla birleşip **asit yağmuru** oluşturur; solunum yolu hastalıklarına yol açar.",
            "**Motorlu taşıtlar ve yüksek sıcaklıkta yanma.** **Asit yağmuru** ve **fotokimyasal dumana** yol açar.",
            "Fosil yakıtlardan çıkan **SO2 ve azot oksitler** atmosferdeki **su buharıyla** birleşir; **sülfürik asit ve nitrik asit** oluşur ve yağışla yeryüzüne iner.",
            "**Toprağın ve göllerin pH'ını düşürür**, ormanlara zarar verir, **mermer ve kireç taşı yapıları aşındırır** (metal yapıları korozyona uğratır).",
            "**Ozon tabakasının incelmesine** yol açar. Kaynağı **eski buzdolapları, klimalar ve sprey kutularıdır**.",
            "**Sera etkisi**: CO2 gibi gazların ısıyı tutması → **küresel ısınma**. **Ozon incelmesi**: CFC'lerin ozonu parçalaması → **UV ışınlarının artması**. Nedenleri ve sonuçları farklıdır.",
            "**Karbondioksit (CO2)**, **metan (CH4)**, **su buharı** (diazot monoksit de yazılabilir).",
            "**Stratosferde** UV ışınlarını süzdüğü için **koruyucudur**. **Yeryüzünde (troposferde)** solunum yollarına zarar verdiği için **kirleticidir**.",
            "**Azot oksitler (NOx)**, **hidrokarbonlar** ve **güneş ışığı**.",
            "CO2'den **çok daha güçlü** bir sera gazıdır. Kaynakları: **bataklıklar, çöp depolama alanları, hayvancılık (geviş getirenler)** ve pirinç tarlaları.",
            "**Mineraller (kum, kil, silt)**, **organik madde (humus)**, **su** ve **hava**.",
            "Bitkinin topraktaki **mineralleri emebilmesi** pH'a bağlıdır. Uygun olmayan pH'ta mineraller çözünmez ve bitki besin alamaz; çoğu bitki **6-7 arası** pH ister.",
            "**Kireç (kalsiyum bileşiği)** eklenerek pH yükseltilir.",
            "**N = Azot**, **P = Fosfor**, **K = Potasyum**.",
            "**Azot**: yaprak ve gövde gelişimi. **Fosfor**: kök gelişimi ve çiçeklenme. **Potasyum**: meyve kalitesi ve hastalıklara direnç.",
            "**Aşırı gübre**, **tarım ilaçları (pestisit)**, **ağır metaller**, **endüstriyel atıklar** (düzensiz çöp depolama da yazılabilir).",
            "Ağır metaller parçalanmaz; bitkiden başlayarak besin zincirinde **birikir (biyolojik birikim)** ve **en çok üst basamaktaki canlıya** zarar verir.",
            "**Ötrofikasyon.** Gübredeki azot ve fosfor göle taşınır, **algler aşırı çoğalır**, ışık dibe ulaşamaz; ayrışma sırasında **oksijen tükenir** ve sucul canlılar ölür.",
            "Bugünün ihtiyaçlarını, **gelecek kuşakların ihtiyaçlarını karşılama olanağını tehlikeye atmadan** karşılamaktır.",
            "**Atığı hiç oluşturmamak**, **daha az zararlı çözücü kullanmak**, **yenilenebilir hammadde tercih etmek** (enerji verimliliği, katalizör kullanımı da yazılabilir).",
            "Cevherden üretmeye göre yaklaşık **%95 daha az enerji** harcanır.",
            "**Cam.** Sonsuz kez geri dönüştürülebilir ve kalitesi düşmez.",
            "**Azalt → Yeniden kullan → Geri dönüştür → Enerjiye çevir → Depola.** En etkili basamak **azaltmaktır** (atığı hiç oluşturmamak).",
        ],
    },
}
