"""AYT Biyoloji — Canlılar ve Çevre (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: CANLILAR VE ÇEVRE",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Canlılar ve Çevre",
    "alt_baslik": "Ham bilgi notu — madde döngüleri, enerji akışı, biyomlar, çevre "
                  "sorunları ve sürdürülebilirlik; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Canlılar ve Çevre",
        "kazanimlar": "12.4.1.1 — Madde döngülerini açıklar. "
                      "12.4.1.2 — Ekosistemde enerji akışını açıklar. "
                      "12.4.1.3 — Çevre sorunlarının nedenlerini ve sonuçlarını değerlendirir. "
                      "12.4.1.4 — Sürdürülebilirlik için alınabilecek önlemleri tartışır.",
        "kapsam": "Su, karbon, azot, fosfor ve oksijen döngüleri, besin zinciri ve ağı, "
                  "enerji piramidi ve %10 kuralı, biyomlar, sera etkisi ve küresel "
                  "iklim değişikliği, ozon incelmesi, asit yağmuru, biyoçeşitlilik "
                  "kaybı, sürdürülebilirlik, 45 analiz sorusu",
        "nasil": "Bu konu ezber gibi durur ama **döngülerin ortak kalıbı** vardır: "
                 "madde havadan/topraktan alınır, canlıya girer, ayrıştırıcılarla geri "
                 "döner. Her döngüde **kim alıyor, kim geri veriyor** sorusunu sor.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **azot döngüsündeki "
                    "bakteriler**, **enerji piramidi hesabı** ya da **çevre sorunu–"
                    "neden eşleştirmesi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Ekosistemde Beslenme İlişkileri"},
        {"tur": "tablo",
         "basliklar": ["Grup", "Beslenme biçimi", "Örnek"],
         "satirlar": [
             ["**Üretici (ototrof)**", "Kendi besinini **inorganik maddelerden** üretir "
              "(fotosentez ya da kemosentez)", "Bitkiler, algler, siyanobakteriler, kemosentetik bakteriler"],
             ["**Tüketici (heterotrof)**", "Besinini **dışarıdan hazır** alır",
              "Otçullar, etçiller, hepçiller"],
             ["**Ayrıştırıcı**", "Ölü organik maddeyi **inorganik hâle** çevirir",
              "Saprofit bakteriler ve mantarlar"],
         ],
         "oranlar": [0.22, 0.40, 0.38]},
        {"tur": "dikkat", "baslik": "Ayrıştırıcılar Olmasaydı Ne Olurdu?", "govde":
            "Ölü canlılar ve atıklar **birikir**, topraktaki mineraller **tükenirdi**. "
            "Üreticiler yeniden kullanabilecekleri inorganik madde bulamaz ve madde "
            "döngüleri **dururdu**. Ayrıştırıcılar bir ekosistemin **geri dönüşüm "
            "sistemidir**; onlarsız hiçbir döngü tamamlanamaz."},
        {"tur": "gorsel", "baslik": "Şema 1 — Enerji piramidi ve %10 kuralı",
         "aciklama": "Her basamakta enerjinin yalnızca **yaklaşık %10'u** bir üste "
                     "aktarılır; gerisi solunumda **ısı** olarak kaybolur. Bu yüzden "
                     "piramit yukarı doğru daralır ve zincirler **kısadır**.",
         "ciz": S.piramit(
             ["3. tüketici — 10 birim", "2. tüketici — 100 birim",
              "1. tüketici — 1000 birim", "Üretici — 10 000 birim"],
             ["en az enerji", "enerjinin %90'ı kayboldu",
              "otçullar", "**güneş enerjisi girişi**"])},
        {"tur": "maddeler", "ogeler": [
            "**Enerji akışı tek yönlüdür**: güneş → üretici → tüketici → ısı. Isı olarak "
            "kaybolan enerji **geri kazanılamaz**; bu yüzden ekosisteme sürekli güneş "
            "enerjisi girmelidir.",
            "**Madde döngüseldir**: aynı karbon atomu bir bitkide, sonra bir hayvanda, "
            "sonra havada bulunabilir. Madde miktarı **sabittir**.",
            "**Besin zinciri** tek hatlı, **besin ağı** iç içe geçmiş çok sayıda "
            "zincirdir. Besin ağı ne kadar karmaşıksa ekosistem **o kadar dayanıklıdır**.",
            "Piramit **enerji** için her zaman düz, **birey sayısı** için ters "
            "olabilir (bir ağaç üzerinde binlerce böcek gibi).",
        ]},
        {"tur": "cozum",
         "baslik": "Enerji Hesabı",
         "soru": "Üretici basamağında **20 000 birim** enerji bulunan bir ekosistemde, "
                 "**üçüncül tüketicilere** yaklaşık kaç birim enerji ulaşır?",
         "adimlar": [
             "Üretici: 20 000 birim.",
             "Birincil tüketici (otçul): 20 000 × 0,1 = **2000 birim**.",
             "İkincil tüketici: 2000 × 0,1 = **200 birim**.",
             "Üçüncül tüketici: 200 × 0,1 = **20 birim**.",
         ],
         "sonuc": "Üçüncül tüketicilere yaklaşık **20 birim** enerji ulaşır; başlangıçtaki "
                  "enerjinin **binde biri**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Madde Döngüleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Karbon döngüsü",
         "aciklama": "Karbonu havadan alan tek yol **fotosentezdir**; havaya geri veren "
                     "yollar ise **solunum, ayrıştırma, yanma ve fosil yakıt "
                     "kullanımıdır**. Sanayi devriminden bu yana geri verme, almadan "
                     "**daha hızlı** olduğu için havadaki karbondioksit artmaktadır.",
         "ciz": S.dongu(
             ["Havadaki CO_2", "Üreticiler\n(fotosentez)", "Tüketiciler\n(besinle)",
              "Ayrıştırıcılar\nve solunum"],
             "Karbon\ndöngüsü")},
        {"tur": "tablo",
         "basliklar": ["Döngü", "Havadan/topraktan alınış", "Geri dönüş"],
         "satirlar": [
             ["**Su**", "Buharlaşma, terleme; yağışla yeryüzüne döner",
              "Canlılarda kullanılır, solunum ve terlemeyle atmosfere döner"],
             ["**Karbon**", "**Yalnızca fotosentez** (ve kemosentez) ile alınır",
              "**Solunum**, **ayrıştırma**, **yanma**, fosil yakıt tüketimi"],
             ["**Azot**", "**Azot bağlayıcı bakteriler** ve yıldırım; bitki **nitrat** olarak alır",
              "**Ayrıştırma** ve **denitrifikasyon bakterileri** azotu havaya döndürür"],
             ["**Fosfor**", "**Kayaların aşınmasıyla** toprağa geçer; **gaz hâli yoktur**",
              "Ayrıştırıcılarla toprağa döner; okyanus tabanında **birikebilir**"],
             ["**Oksijen**", "**Fotosentezle** havaya verilir",
              "**Solunum** ve **yanma** ile tüketilir"],
         ],
         "oranlar": [0.16, 0.42, 0.42]},
        {"tur": "tuzak", "baslik": "Fosfor Döngüsünün Gaz Hâli Yoktur", "govde":
            "Su, karbon, azot ve oksijen döngülerinde **atmosfer bir depo** görevi "
            "görür. **Fosforun ise gaz hâli yoktur**; döngüsü **kayalar, toprak ve su** "
            "arasında geçer. Bu yüzden fosfor döngüsü **en yavaş** döngüdür ve fosfor "
            "çoğu ekosistemde **sınırlayıcı** besin maddesidir."},
        {"tur": "gorsel", "baslik": "Şema 3 — Azot döngüsündeki bakteriler",
         "aciklama": "Azot döngüsü sınavda **bakteri adlarıyla** sorulur. Dördünü "
                     "birbirinden ayırmanın yolu, her birinin **neyi neye çevirdiğini** "
                     "yazmaktır.",
         "ciz": S.kartlar([
             ("Azot bağlayıcı", "havadaki **N_2** → amonyak\n(baklagil kökündeki bakteriler)"),
             ("Nitrit bakterisi", "**amonyak → nitrit**\n(kemosentez yapar)"),
             ("Nitrat bakterisi", "**nitrit → nitrat**\nbitkinin alabileceği biçim"),
             ("Denitrifikasyon", "**nitrat → azot gazı**\nazotu havaya geri verir"),
             ("Ayrıştırıcı", "ölü organik madde\n→ **amonyak**"),
             ("Yıldırım", "havadaki azotu\n**nitrata** çevirir"),
         ], sutun=3)},
        {"tur": "dikkat", "baslik": "Bitkiler Havadaki Azotu Doğrudan Kullanamaz", "govde":
            "Atmosferin **%78'i azottur** ama bitkiler bu azotu **doğrudan alamaz**; "
            "azot gazındaki üçlü bağı kıracak enzimleri yoktur. Azot ancak **bakteriler "
            "ya da yıldırım** tarafından **nitrata** çevrildikten sonra kullanılabilir. "
            "\"Havada bol azot varken bitkilerde azot eksikliği olmaz\" ifadesi bu "
            "yüzden **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Biyomlar"},
        {"tur": "tablo",
         "basliklar": ["Biyom", "İklim", "Canlı örtüsü"],
         "satirlar": [
             ["**Tropikal yağmur ormanı**", "Sıcak ve **çok yağışlı**, mevsimsiz",
              "**En yüksek tür çeşitliliği**; katmanlı orman yapısı"],
             ["**Savan**", "Sıcak, **belirgin kurak mevsim**",
              "Otlaklar ve seyrek ağaçlar; büyük otçul sürüleri"],
             ["**Çöl**", "**Çok az yağış**, büyük gece-gündüz farkı",
              "Sukkulent bitkiler, geceleri etkin hayvanlar"],
             ["**Çayır (step)**", "Orta yağış, mevsimlik",
              "Otsu bitkiler; **verimli tarım toprakları**"],
             ["**Ilıman orman**", "Dört mevsim belirgin, orta yağış",
              "Yaprak döken ağaçlar (kayın, meşe)"],
             ["**Tayga (boreal orman)**", "Uzun ve soğuk kış",
              "İğne yapraklı ağaçlar (çam, ladin)"],
             ["**Tundra**", "**Çok soğuk**, kısa yaz, donmuş alt toprak",
              "Liken, yosun, cüce çalılar; ağaç yok"],
         ],
         "oranlar": [0.24, 0.32, 0.44]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Biyomları belirleyen iki temel etken **sıcaklık** ve **yağıştır**.",
            "Türkiye'de **Akdeniz (maki)**, **step**, **ılıman orman** ve dağlık "
            "bölgelerde **iğne yapraklı orman** biyomları görülür.",
            "**Su ekosistemleri** tatlı su (göl, akarsu) ve tuzlu su (deniz, okyanus) "
            "olarak ikiye ayrılır. Okyanuslardaki **fitoplanktonlar**, dünyadaki "
            "oksijenin büyük bölümünü üretir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Çevre Sorunları"},
        {"tur": "tablo",
         "basliklar": ["Sorun", "Nedeni", "Sonucu"],
         "satirlar": [
             ["**Sera etkisi / küresel ısınma**",
              "**CO_2**, metan ve su buharının artması; fosil yakıt kullanımı ve orman kaybı",
              "Ortalama sıcaklık artışı, buzulların erimesi, deniz seviyesinin yükselmesi, iklim düzensizliği"],
             ["**Ozon tabakasının incelmesi**",
              "**Kloroflorokarbonlar (CFC)** — soğutucu ve sprey gazları",
              "**UV ışınları** artar; deri kanseri, katarakt, fotosentezde azalma"],
             ["**Asit yağmuru**",
              "**Kükürt ve azot oksitleri** — fabrika ve araç bacaları",
              "Toprak ve göllerin asitleşmesi, orman kaybı, yapıların aşınması"],
             ["**Ötrofikasyon**",
              "Sulara **fosfat ve nitrat** karışması (gübre, deterjan)",
              "Aşırı alg çoğalması, suda **oksijenin tükenmesi**, balık ölümleri"],
             ["**Erozyon ve çölleşme**",
              "Bitki örtüsünün yok edilmesi, aşırı otlatma, yanlış tarım",
              "Verimli toprağın kaybı, tarım alanlarının daralması"],
             ["**Biyoçeşitlilik kaybı**",
              "Habitat tahribi, aşırı avlanma, kirlilik, istilacı türler",
              "Besin ağlarının bozulması, ekosistem direncinin azalması"],
         ],
         "oranlar": [0.22, 0.36, 0.42]},
        {"tur": "tuzak", "baslik": "Sera Etkisi ile Ozon İncelmesi Ayrı Sorunlardır",
         "govde": "**Sera etkisi**, atmosferdeki **karbondioksit ve metanın** ısıyı "
                  "tutmasıdır; sonucu **ısınmadır**. **Ozon incelmesi**, "
                  "**kloroflorokarbonların** ozon molekülünü parçalamasıdır; sonucu "
                  "**UV artışıdır**. İki sorunun **nedeni de sonucu da farklıdır**; "
                  "sınavda sürekli birbiriyle karıştırılırlar. Ayrıca **sera etkisi "
                  "kendi başına zararlı değildir** — o olmasaydı Dünya çok soğuk "
                  "olurdu; sorun **etkinin artmasıdır**."},
        {"tur": "gorsel", "baslik": "Şema 4 — Sürdürülebilirlik için ne yapılabilir?",
         "aciklama": "Çözümler tek tek bireysel davranışlarla sınırlı değildir; "
                     "**enerji, tarım ve şehir planlaması** düzeyinde kararlar gerekir. "
                     "Sınavda \"hangisi çözüm değildir\" biçiminde sorulur.",
         "ciz": S.kartlar([
             ("Yenilenebilir enerji", "güneş, rüzgâr, jeotermal\n**fosil yakıt yerine**"),
             ("Geri dönüşüm", "madde döngüsüne\n**geri kazandırma**"),
             ("Ağaçlandırma", "CO_2 tutar,\n**erozyonu önler**"),
             ("Bilinçli tarım", "gübre ve ilacın\n**ölçülü** kullanımı"),
             ("Koruma alanları", "millî park, tabiat parkı\n**habitatı korur**"),
             ("Tohum bankaları", "genetik çeşitliliği\n**gelecek için saklar**"),
         ], sutun=3)},
        {"tur": "maddeler", "ogeler": [
            "**Sürdürülebilirlik**, bugünün ihtiyaçlarını, gelecek kuşakların "
            "ihtiyaçlarını karşılama olanağını **tehlikeye atmadan** karşılamaktır.",
            "**Biyoçeşitlilik** üç düzeyde ele alınır: **genetik çeşitlilik**, **tür "
            "çeşitliliği** ve **ekosistem çeşitliliği**.",
            "Türkiye, üç farklı bitki coğrafyasının kesiştiği yerde bulunduğu için "
            "**biyoçeşitlilik bakımından çok zengindir**; **endemik tür** sayısı yüksektir.",
            "**Endemik tür**, yalnızca belirli bir bölgede yaşayan türdür; habitatı yok "
            "olursa tür **tümüyle yok olur**.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Enerji tek yönlü**, **madde döngüseldir**.",
            "Basamaklar arası aktarım **yaklaşık %10**; zincirler bu yüzden kısadır.",
            "**Ayrıştırıcılar olmadan hiçbir döngü tamamlanamaz.**",
            "Karbonu havadan alan **tek yol fotosentezdir**.",
            "**Fosforun gaz hâli yoktur**; en yavaş döngüdür.",
            "**Bitkiler havadaki azotu doğrudan kullanamaz**; nitrata çevrilmeli.",
            "**Denitrifikasyon azotu havaya geri verir** — tek geri veren bakteri odur.",
            "**Tropikal yağmur ormanı en çeşitli**, **tundra en soğuk** biyomdur.",
            "**Sera etkisi CO_2 ile ısınma**, **ozon incelmesi CFC ile UV artışıdır**.",
            "**Ötrofikasyonda su oksijensiz kalır** ve balıklar ölür.",
            "**Endemik tür yalnızca bir bölgede yaşar**; habitatı giderse tür de gider.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde döngü ve çevre sorunu soruları ağırlıktadır. Döngü "
            "sorularında **maddeyi kim alıyor, kim geri veriyor** sorusunu; çevre "
            "sorularında **neden–sonuç eşleşmesini** yazmadan cevaba geçme.",
        "satir_sayisi": 2,
        "sorular": [
            "Üretici, tüketici ve ayrıştırıcıları beslenme biçimleri bakımından karşılaştırınız.",
            "Ayrıştırıcılar olmasaydı ekosistemde neler olacağını açıklayınız.",
            "Enerji akışının tek yönlü olmasının nedenini açıklayınız.",
            "Madde akışının döngüsel olmasının nedenini açıklayınız.",
            "Basamaklar arasında aktarılan enerji oranını ve kayıp nedenlerini yazınız.",
            "Üretici basamağında 20 000 birim enerji varsa üçüncül tüketiciye kaç birim ulaşır?",
            "Besin zinciri ile besin ağını karşılaştırınız.",
            "Besin ağının karmaşık olmasının ekosisteme kattığı avantajı açıklayınız.",
            "Birey sayısı piramidinin ters olabilmesini bir örnekle açıklayınız.",
            "Su döngüsünün canlılar üzerinden işleyen kısmını açıklayınız.",
            "Karbonun atmosferden alınmasını sağlayan tek yolu yazınız.",
            "Karbonun atmosfere geri dönmesini sağlayan dört yolu yazınız.",
            "Havadaki karbondioksit miktarının artmasının nedenini açıklayınız.",
            "Fosil yakıtların karbon döngüsündeki yerini açıklayınız.",
            "Bitkilerin havadaki azotu doğrudan kullanamamasının nedenini açıklayınız.",
            "Azot bağlayıcı bakterilerin görevini ve bulundukları yeri yazınız.",
            "Nitrit ve nitrat bakterilerinin dönüşümlerini sırayla yazınız.",
            "Denitrifikasyon bakterilerinin görevini ve döngüdeki önemini açıklayınız.",
            "Ayrıştırıcıların azot döngüsündeki rolünü yazınız.",
            "Yıldırımın azot döngüsüne katkısını açıklayınız.",
            "Baklagil ekiminin toprağı zenginleştirmesinin nedenini açıklayınız.",
            "Fosfor döngüsünün diğer döngülerden temel farkını yazınız.",
            "Fosfor döngüsünün en yavaş döngü olmasının nedenini açıklayınız.",
            "Oksijen döngüsünde oksijeni üreten ve tüketen olayları yazınız.",
            "Biyomları belirleyen iki temel etkeni yazınız.",
            "Tropikal yağmur ormanının iklim ve çeşitlilik özelliklerini yazınız.",
            "Çöl biyomundaki canlıların iki uyum özelliğini yazınız.",
            "Tundra biyomunda ağaç yetişmemesinin nedenini açıklayınız.",
            "Tayga biyomunun iklim ve bitki örtüsü özelliklerini yazınız.",
            "Türkiye'de görülen biyom tiplerini yazınız.",
            "Fitoplanktonların küresel oksijen üretimindeki payını açıklayınız.",
            "Sera etkisinin nedenini ve sonuçlarını yazınız.",
            "Sera etkisinin kendi başına zararlı olmadığını açıklayınız.",
            "Ozon tabakasının incelmesinin nedenini ve sonuçlarını yazınız.",
            "Sera etkisi ile ozon incelmesini neden ve sonuç bakımından ayırt ediniz.",
            "Asit yağmurunun nedenini ve üç sonucunu yazınız.",
            "Ötrofikasyonun nedenini ve sudaki oksijene etkisini açıklayınız.",
            "Ötrofikasyonda balık ölümlerinin nedenini adım adım açıklayınız.",
            "Erozyonun nedenlerini ve sonucunu yazınız.",
            "Biyoçeşitlilik kaybının dört nedenini yazınız.",
            "Biyoçeşitliliğin üç düzeyini yazınız.",
            "Endemik tür kavramını tanımlayarak korunmasının önemini açıklayınız.",
            "Türkiye'nin biyoçeşitlilik bakımından zengin olmasının nedenini açıklayınız.",
            "Sürdürülebilirliği tanımlayarak üç uygulama örneği veriniz.",
            "Ağaçlandırmanın iki farklı çevre sorununa aynı anda çözüm olmasını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Üretici** besinini inorganik maddelerden **kendi üretir**. **Tüketici** hazır besinle beslenir. **Ayrıştırıcı** ölü organik maddeyi **inorganik hâle** çevirir.",
            "Ölü canlılar ve atıklar **birikirdi**, topraktaki mineraller **tükenirdi**. Üreticiler inorganik madde bulamaz ve **madde döngüleri dururdu**.",
            "Enerji güneşten girer ve her basamakta **ısı olarak kaybolur**. Isı canlılar tarafından yeniden kullanılamadığı için enerji **geri dönmez**.",
            "Maddeler ayrıştırıcılar sayesinde **inorganik hâle** çevrilip toprağa ve havaya döner; üreticiler bunları **yeniden kullanır**. Dünyadaki madde miktarı sabittir.",
            "Yaklaşık **%10** aktarılır. Kaybın nedenleri: **solunumda ısıya dönüşme**, sindirilemeyen kısımların atılması ve avlanamayan bireyler.",
            "20 000 → 2000 → 200 → **20 birim**. Başlangıçtaki enerjinin **binde biri** kadardır.",
            "**Besin zinciri** tek hatlı bir beslenme sırasıdır. **Besin ağı**, birden çok zincirin iç içe geçmiş hâlidir ve gerçek doğayı daha iyi yansıtır.",
            "Bir tür azaldığında tüketiciler **başka besin kaynaklarına** yönelebilir. Bu esneklik ekosistemin **dayanıklılığını** artırır.",
            "Bir **ağaç** üzerinde binlerce **böcek** yaşayabilir. Birey sayısı olarak tüketiciler üreticiden fazladır ama **enerji piramidi yine de düzdür**.",
            "Bitkiler topraktan su alır, **terlemeyle** atmosfere verir. Hayvanlar suyu içer, **solunum ve boşaltımla** geri verir. Su böylece canlılar üzerinden döngüye katılır.",
            "**Fotosentez** (bir de kemosentez). Karbondioksit ancak bu yolla organik maddeye bağlanır.",
            "**Solunum**, **ayrıştırma (çürüme)**, **yanma** ve **fosil yakıt tüketimi**.",
            "**Fosil yakıt kullanımı** ve **orman alanlarının azalması**. Havaya verilen karbon artarken fotosentezle geri alınan karbon azalmıştır.",
            "Fosil yakıtlar, milyonlarca yıl önce gömülen canlıların karbonudur; **döngü dışında kilitli** kalmıştır. Yakıldıklarında bu karbon **kısa sürede atmosfere** salınır.",
            "Azot gazındaki **üçlü bağ çok güçlüdür** ve bitkilerde bu bağı kıracak enzim yoktur. Azot ancak **nitrata** çevrildikten sonra kullanılabilir.",
            "Havadaki **azot gazını amonyağa** çevirirler. **Baklagil köklerindeki nodüllerde** ve toprakta serbest hâlde bulunurlar.",
            "**Nitrit bakterileri amonyağı nitrite**, **nitrat bakterileri nitriti nitrata** çevirir. Bitkiler azotu **nitrat** biçiminde alır.",
            "**Nitratı azot gazına** çevirip atmosfere geri verirler. Azotun atmosfere dönmesini sağlayan **tek yol** budur; döngünün kapanmasını sağlarlar.",
            "Ölü canlıları ve azotlu atıkları parçalayarak **amonyak** açığa çıkarırlar. Bu amonyak nitrit ve nitrat bakterileriyle bitkinin kullanabileceği biçime çevrilir.",
            "Yıldırımın yüksek enerjisi havadaki azot ile oksijenin birleşmesini sağlar; oluşan **azot oksitleri yağmurla nitrat** hâlinde toprağa iner.",
            "Baklagil köklerinde **azot bağlayıcı bakteriler** bulunur. Bu bakteriler havadaki azotu toprağa kazandırır; toprağın **azot bakımından zenginleşmesini** sağlar.",
            "**Fosforun gaz hâli yoktur**; atmosfer bir depo görevi görmez. Döngü **kayalar, toprak ve su** arasında geçer.",
            "Fosfor, ana kaynağı olan **kayaların yavaş yavaş aşınmasıyla** açığa çıkar. Ayrıca okyanus tabanında birikip döngüden **uzun süre çıkabilir**.",
            "**Üreten**: fotosentez. **Tüketen**: solunum ve yanma. Oksijen döngüsü karbon döngüsüyle iç içedir.",
            "**Sıcaklık** ve **yağış**.",
            "Sıcak ve **çok yağışlıdır**, belirgin mevsim yoktur. **Dünyanın en yüksek tür çeşitliliğine** sahiptir; orman katmanlı bir yapı gösterir.",
            "Bitkiler **su depolar** (sukkulent yapı) ve yaprakları dikene dönüşmüştür. Hayvanlar **gece etkindir** ve az su kaybedecek biçimde uyum sağlamıştır.",
            "**Alt toprak sürekli donmuş** hâldedir (permafrost) ve yaz çok kısadır. Ağaç kökleri derine inemediği için yalnızca liken, yosun ve cüce çalılar yetişir.",
            "**Uzun ve soğuk kış**, kısa yaz. Bitki örtüsü **iğne yapraklı ağaçlardır** (çam, ladin, köknar).",
            "**Akdeniz (maki)**, **step (çayır)**, **ılıman yaprak döken orman** ve dağlık bölgelerde **iğne yapraklı orman**.",
            "Okyanuslardaki fitoplanktonlar fotosentez yaparak **dünyadaki oksijenin büyük bölümünü** üretir; aynı zamanda deniz besin ağlarının **üretici** basamağıdır.",
            "**CO_2, metan ve su buharının** artmasıdır; fosil yakıt kullanımı ve orman kaybı hızlandırır. Sonuçları: **sıcaklık artışı**, buzulların erimesi, deniz seviyesinin yükselmesi, iklim düzensizliği.",
            "Sera etkisi olmasaydı Dünya'nın ısısı uzaya kaçar ve gezegen **yaşanmayacak kadar soğuk** olurdu. Sorun etkinin varlığı değil, insan etkinlikleriyle **aşırı artmasıdır**.",
            "**Kloroflorokarbonlar (CFC)** ozon molekülünü parçalar. Sonuçta **UV ışınları artar**; deri kanseri, katarakt ve fotosentezde azalma görülür.",
            "**Sera etkisi**: neden CO_2 ve metan, sonuç **ısınma**. **Ozon incelmesi**: neden CFC, sonuç **UV artışı**. Nedenleri de sonuçları da farklıdır.",
            "**Kükürt ve azot oksitlerinin** yağmur suyuyla birleşmesidir. Sonuçları: toprak ve göllerin **asitleşmesi**, **orman kaybı** ve tarihî yapıların aşınması.",
            "Sulara **fosfat ve nitrat** karışmasıdır (gübre, deterjan). Aşırı alg çoğalır; algler ölünce ayrıştırıcılar çoğalır ve **sudaki oksijeni tüketir**.",
            "Besin artışıyla algler patlar → algler **suyun yüzeyini kaplar**, ışık geçmez → alt tabakadaki üreticiler ölür → ayrıştırıcılar çoğalıp **oksijeni tüketir** → balıklar **oksijensizlikten** ölür.",
            "**Bitki örtüsünün yok edilmesi**, aşırı otlatma ve yanlış tarım. Sonuç: **verimli üst toprağın kaybı** ve tarım alanlarının daralması, uzun vadede **çölleşme**.",
            "**Habitat tahribi**, **aşırı avlanma**, **kirlilik** ve **istilacı türlerin** girmesi (ayrıca iklim değişikliği).",
            "**Genetik çeşitlilik**, **tür çeşitliliği** ve **ekosistem çeşitliliği**.",
            "**Yalnızca belirli bir bölgede** yaşayan türdür. Habitatı yok olursa tür **dünya üzerinden tümüyle** silinir; bu yüzden korunması önceliklidir.",
            "**Üç farklı bitki coğrafyasının** kesişme noktasında bulunur, iklim ve yükselti çeşitliliği fazladır. Bu nedenle tür sayısı ve **endemik tür** oranı yüksektir.",
            "Bugünün ihtiyaçlarını, **gelecek kuşakların ihtiyaçlarını tehlikeye atmadan** karşılamaktır. Örnekler: **yenilenebilir enerji**, **geri dönüşüm**, **koruma alanları** (ayrıca bilinçli tarım).",
            "Ağaçlar fotosentezle **karbondioksit tutarak** sera etkisini azaltır; kökleriyle toprağı tutarak **erozyonu ve çölleşmeyi** önler. Ayrıca habitat sağlayarak biyoçeşitliliği destekler.",
        ],
    },
}
