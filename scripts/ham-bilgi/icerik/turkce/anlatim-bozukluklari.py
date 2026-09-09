"""TYT Türkçe — Anlatım Bozuklukları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: ANLATIM BOZUKLUKLARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Anlatım Bozuklukları",
    "alt_baslik": "Ham bilgi notu — anlama ve yapıya dayalı bozukluklar, düzeltme "
                  "yolları; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Anlatım Bozuklukları",
        "kazanimlar": "Anlama dayalı anlatım bozukluklarını tanır. "
                      "Yapıya dayalı anlatım bozukluklarını belirler. "
                      "Bozuk cümleleri düzeltir. "
                      "Bozukluğun türünü adlandırır.",
        "kapsam": "Gereksiz sözcük kullanımı, anlamca çelişen sözcükler, sözcüğün "
                  "yanlış anlamda kullanımı, mantık hatası, deyim yanlışı, "
                  "sıralama hatası; özne-yüklem uyumsuzluğu, tamlama yanlışı, "
                  "öge eksikliği, ek yanlışı, çatı uyumsuzluğu, 50 analiz sorusu",
        "nasil": "Anlatım bozukluğu sorularında **cümleyi yavaş ve yüksek sesle "
                 "okumayı** dene. Kulağa takılan yer, çoğu zaman bozukluğun "
                 "bulunduğu yerdir. Sonra **hangi türden** olduğunu adlandır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de her yıl **en az iki anlatım bozukluğu sorusu** çıkar; "
                    "konu, düzenli çalışmayla kesin net getirir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Anlama Dayalı Bozukluklar"},
        {"tur": "tablo",
         "basliklar": ["Bozukluk türü", "Açıklaması", "Örnek ve düzeltme"],
         "satirlar": [
             ["**Gereksiz sözcük kullanımı**",
              "Bir sözcüğün anlamı **başka bir sözcükte zaten** vardır",
              "\"**Yukarı** çıktı\" → \"Çıktı\"; \"**geriye** iade etti\" → \"iade etti\""],
             ["**Anlamca çelişen sözcükler**",
              "Aynı cümlede **birbiriyle çelişen** ifadeler bulunur",
              "\"**Kesinlikle** yarın **belki** gelirim\" → biri çıkarılmalı"],
             ["**Sözcüğün yanlış anlamda kullanımı**",
              "Sözcük, cümleye **uymayan** bir anlamda kullanılmıştır",
              "\"Bu ilaç hastalığı **azaltıyor**\" → \"hafifletiyor\""],
             ["**Deyim ve atasözü yanlışı**",
              "Deyim **yanlış biçimde** ya da **yanlış anlamda** kullanılmıştır",
              "\"Göze **yerleşmek**\" → \"göze **girmek**\""],
             ["**Mantık hatası**",
              "Cümlede **akla aykırı** bir sıralama ya da ilişki vardır",
              "\"Önce **öldü**, sonra **hastalandı**\" → sıra ters"],
             ["**Sıralama (dereceleme) hatası**",
              "Kavramlar **mantıklı bir sırayla** verilmemiştir",
              "\"Yaşlılar, **çocuklar** ve gençler\" → yaş sırası bozuk"],
         ],
         "oranlar": [0.26, 0.32, 0.42]},
        {"tur": "taktik", "baslik": "Gereksiz Sözcüğü Bulmanın Yolu", "govde":
            "Şüphelendiğin sözcüğü **cümleden çıkar**. **Anlam hiç değişmiyorsa** o "
            "sözcük **gereksizdir**. \"Yukarı çıktı\" → \"yukarı\"yı çıkar → \"çıktı\" "
            "→ anlam aynı → **gereksiz**. Ama \"Yukarı baktı\" cümlesinde \"yukarı\" "
            "gereklidir; çünkü \"baktı\" tek başına yönü belirtmez. **Ölçüt: sözcük "
            "yeni bir bilgi katıyor mu?**"},
        {"tur": "dikkat", "baslik": "En Sık Görülen Gereksiz Sözcükler", "ogeler": [
            "**\"Yukarı çıkmak\", \"aşağı inmek\", \"geri dönmek\", \"ileri gitmek\"** "
            "— yön zaten fiilde vardır.",
            "**\"Geriye iade etmek\", \"karşılıklı anlaşmak\", \"birbirleriyle "
            "tanışmak\"** — işteşlik zaten fiilde vardır.",
            "**\"Kesinlikle emin olmak\", \"belki olabilir\", \"muhtemelen sanırım\"** "
            "— kesinlik/olasılık iki kez bildirilmiştir.",
            "**\"Neden ve niçin\", \"eş ve dost\"** gibi ikilemeler bozukluk değildir; "
            "bunlar **pekiştirme** amaçlı kullanılır.",
        ]},
        {"tur": "cozum",
         "baslik": "Anlama Dayalı Bozukluk Bulma",
         "soru": "Aşağıdaki cümlelerdeki anlatım bozukluklarını bulup düzeltiniz.\n"
                 "**I.** \"Bu konuda kesinlikle belki haklı olabilirsin.\"\n"
                 "**II.** \"Kitabı okuduktan sonra geriye iade etti.\"\n"
                 "**III.** \"Yaşlılar, çocuklar ve gençler törene katıldı.\"",
         "adimlar": [
             "**I.** \"Kesinlikle\" (kesinlik) ile \"belki\" (olasılık) **çelişiyor** → "
             "**anlamca çelişen sözcükler**. Düzeltme: \"Bu konuda **haklı "
             "olabilirsin**.\"",
             "**II.** \"İade etmek\" zaten \"geri vermek\" demektir → **gereksiz "
             "sözcük**. Düzeltme: \"Kitabı okuduktan sonra **iade etti**.\"",
             "**III.** Yaş sırası **bozuk**; küçükten büyüğe ya da büyükten küçüğe "
             "gitmeli → **sıralama hatası**. Düzeltme: \"**Çocuklar, gençler ve "
             "yaşlılar** törene katıldı.\"",
         ],
         "sonuc": "Üç cümlede **üç farklı anlama dayalı bozukluk** vardır: çelişme, "
                  "gereksiz sözcük ve sıralama hatası."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yapıya Dayalı Bozukluklar"},
        {"tur": "tablo",
         "basliklar": ["Bozukluk türü", "Açıklaması", "Örnek ve düzeltme"],
         "satirlar": [
             ["**Özne-yüklem uyumsuzluğu**",
              "Özne ile yüklem **tekillik-çoğulluk** ya da **kişi** bakımından uyuşmaz",
              "\"Çocuklar bahçede **oynuyor**\" → doğru; \"Ağaçlar **sarardılar**\" → "
              "\"sarardı\" (cansız çoğul özne tekil yüklem ister)"],
             ["**Özne eksikliği**",
              "Sıralı cümlede **ikinci yüklemin öznesi** yoktur",
              "\"Kitabı aldı ve masaya konuldu\" → \"kitabı aldı ve **onu** masaya "
              "**koydu**\""],
             ["**Nesne eksikliği**",
              "Ortak nesne, cümlelerden birine **uymaz**",
              "\"Onu aradım ve buldum\" → doğru; \"Ona uğradım ve gördüm\" → nesne "
              "eksik"],
             ["**Tümleç eksikliği**",
              "Ortak tümleç, cümlelerden birine **uymaz**",
              "\"Kardeşimi sevdim ve güvendim\" → \"kardeşimi sevdim ve **ona** "
              "güvendim\""],
             ["**Tamlama yanlışı**",
              "Tamlayan ya da tamlanan eki **yanlış** ya da **eksik**",
              "\"ekonomik ve siyasi sorunlar**ı**\" → \"ekonomik **sorunları** ve "
              "siyasi sorunları\""],
             ["**Çatı uyumsuzluğu**",
              "Sıralı cümlelerde çatılar **uyuşmaz**",
              "\"Çay demlendi ve içtik\" → \"Çayı demledik ve içtik\""],
         ],
         "oranlar": [0.24, 0.30, 0.46]},
        {"tur": "taktik", "baslik": "Öge Eksikliğini Bulmanın Yolu", "govde":
            "Sıralı ya da bağlı cümlelerde **her yüklemi ayrı ayrı ele al** ve "
            "**ögelerini tek tek sor**. \"Kardeşimi sevdim ve güvendim\" → "
            "birinci yüklem: \"Kimi sevdim?\" → kardeşimi (var). İkinci yüklem: "
            "\"Kime güvendim?\" → **cevap yok** → **dolaylı tümleç eksik**. "
            "Bu yöntem, öge eksikliği sorularının tamamını çözer."},
        {"tur": "tuzak", "baslik": "Özne-Yüklem Uyumunda Üç Kural", "govde":
            "**1)** **Cansız varlıklar ve hayvanlar** çoğul özne olsa bile yüklem "
            "**tekil** olur: \"Ağaçlar sarardı\" (sarardılar değil). "
            "**2)** **İnsan olan çoğul özne** yüklemi çoğul yapabilir: \"Öğrenciler "
            "geldiler\" ya da \"geldi\" — ikisi de doğrudur. "
            "**3)** **Farklı kişilerden oluşan özne**de yüklem **en küçük kişiye** "
            "göre çekimlenir: \"Ali, sen ve ben gittik\" (1. çoğul kişi)."},
        {"tur": "cozum",
         "baslik": "Yapıya Dayalı Bozukluk Bulma",
         "soru": "Aşağıdaki cümlelerdeki anlatım bozukluklarını bulup düzeltiniz.\n"
                 "**I.** \"Öğrencilere kitap dağıtıldı ve teşekkür ettiler.\"\n"
                 "**II.** \"Bu sorunu ne sen ne de ben çözemedik.\"\n"
                 "**III.** \"Kardeşimi çok sever ve güvenirim.\"",
         "adimlar": [
             "**I.** Birinci yüklem **edilgen** (\"dağıtıldı\"), ikincisi **etken** "
             "(\"teşekkür ettiler\") → **çatı uyumsuzluğu**. Düzeltme: \"Öğrencilere "
             "kitap **dağıtıldı** ve **onlar** teşekkür **etti**.\"",
             "**II.** \"Ne ... ne de\" bağlacı cümleyi **anlamca olumsuz** yapar; "
             "yüklem **olumlu** olmalıdır → \"çözemedik\" yerine **\"çözebildik\"**.",
             "**III.** \"Kimi severim?\" → kardeşimi (var). \"Kime güvenirim?\" → "
             "**cevap yok** → **dolaylı tümleç eksik**. Düzeltme: \"Kardeşimi çok "
             "sever ve **ona** güvenirim.\"",
         ],
         "sonuc": "**I: çatı uyumsuzluğu**, **II: bağlaç-yüklem uyumsuzluğu**, "
                  "**III: tümleç eksikliği**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Ek ve Bağlaç Yanlışları"},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**\"Ne ... ne de\" bağlacı** cümleye zaten olumsuzluk katar; yüklem "
            "**olumlu** olmalıdır: \"Ne sen ne ben **geldik**\" (gelmedik değil).",
            "**\"Hem ... hem de\" bağlacı** olumlu cümlelerde kullanılır: "
            "\"Hem çalıştı hem kazandı.\"",
            "**Ek yanlışı**: \"Bu sorunu çözmek **için** çalıştım\" doğru; "
            "\"çözmek **üzere** çalıştım\" anlam kaymasına yol açabilir.",
            "**Zamir eksikliği**: iki cümlede farklı ögeler varsa zamirle "
            "**tamamlanmalıdır**: \"Onu aradım ve **ona** haber verdim.\"",
            "**Noktalama kaynaklı belirsizlik**: \"Yaşlı, adama baktı\" ile \"Yaşlı "
            "adama baktı\" farklı anlamlardadır.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Bozukluk arama sırası",
         "aciklama": "Bu dört adım, anlatım bozukluğu sorularının tamamını kapsar. "
                     "Sırayla uygularsan hem bozukluğu bulur hem **türünü "
                     "adlandırabilirsin**.",
         "ciz": S.akis(
             ["Yavaş oku", "Gereksiz sözcük ara", "Ögeleri kontrol et",
              "Uyumları kontrol et"],
             ["kulağa **takılan yer**\nneresi?", "çıkarınca **anlam**\ndeğişiyor mu?",
              "her yükleme **ögelerini**\nayrı ayrı sor",
              "**özne-yüklem**, **çatı**,\n**bağlaç** uyumu"])},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Düzeltme Uygulamaları"},
        {"tur": "cozum",
         "baslik": "Karma Bozukluk Analizi",
         "soru": "\"**Toplantıya katılan üyeler, sorunları tartıştı ve çözüm "
                 "önerileri getirildi.**\" cümlesindeki anlatım bozukluğunu bulup "
                 "düzeltiniz.",
         "adimlar": [
             "**Birinci yüklem**: \"tartıştı\" → **etken** çatılı; öznesi \"üyeler\".",
             "**İkinci yüklem**: \"getirildi\" → **edilgen** çatılı; sözde öznesi "
             "\"çözüm önerileri\".",
             "İki yüklemin **çatıları uyuşmuyor** → **çatı uyumsuzluğu**.",
             "**Düzeltme**: ikinci yüklemi de etken yap → \"...tartıştı ve çözüm "
             "önerileri **getirdi**.\"",
         ],
         "sonuc": "Bozukluk **çatı uyumsuzluğudur**. Sıralı cümlelerde ortak özne "
                  "varsa **bütün yüklemler aynı çatıda** olmalıdır."},
        {"tur": "dikkat", "baslik": "Sık Karşılaşılan On Bozuk Kalıp", "ogeler": [
            "**\"Yukarı çıkmak / aşağı inmek\"** → gereksiz sözcük.",
            "**\"Geriye iade etmek\"** → gereksiz sözcük.",
            "**\"Kesinlikle belki\"** → çelişme.",
            "**\"Birbirleriyle karşılıklı konuştular\"** → gereksiz sözcük.",
            "**\"Ne sen ne ben gelmedik\"** → bağlaç-yüklem uyumsuzluğu.",
            "**\"Ağaçlar sarardılar\"** → özne-yüklem uyumsuzluğu.",
            "**\"Kitabı aldı ve masaya konuldu\"** → çatı uyumsuzluğu.",
            "**\"Kardeşimi sevdim ve güvendim\"** → tümleç eksikliği.",
            "**\"Ekonomik ve siyasi sorunları\"** → tamlama yanlışı.",
            "**\"Önce öldü, sonra hastalandı\"** → mantık hatası.",
        ]},
        {"tur": "cikmis", "baslik": "Soru Kalıpları", "govde":
            "Bu konu iki kalıpta sorulur: **1)** \"Aşağıdaki cümlelerin hangisinde "
            "anlatım bozukluğu **vardır**?\" — dört doğru cümle arasından bozuk olanı "
            "bulursun. **2)** \"Bu cümledeki anlatım bozukluğu nasıl **giderilebilir**?\" "
            "— bozukluğu bulup düzeltme yolunu seçersin. İkinci kalıpta **en az "
            "değişiklikle** düzelten seçenek doğrudur; cümleyi baştan yazan seçenekler "
            "genellikle çeldiricidir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Gereksiz sözcük**: çıkarınca anlam değişmiyorsa gereksizdir.",
            "**Yön fiilde varsa yön sözcüğü gereksizdir** (yukarı çıkmak).",
            "**İşteşlik fiilde varsa \"karşılıklı\" gereksizdir**.",
            "**Kesinlik ve olasılık aynı cümlede çelişir**.",
            "**Cansız çoğul özne tekil yüklem** ister (ağaçlar sarardı).",
            "**Farklı kişili öznede yüklem en küçük kişiye** göre çekimlenir.",
            "**Sıralı cümlelerde çatılar aynı olmalıdır**.",
            "**\"Ne ... ne de\" bağlacında yüklem olumlu** olur.",
            "**Her yükleme ögelerini ayrı ayrı sor** — öge eksikliğini böyle bulursun.",
            "**Ortak tamlanan varsa tamlayanlar da uyumlu** olmalı.",
            "**Düzeltmede en az değişiklik yapan seçenek** doğrudur.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her cümleyi **önce oku, sonra düzelt, en son adlandır**. "
            "Yalnızca bozukluğu bulmak yetmez; **türünü söyleyebilmek** ve **düzeltilmiş "
            "hâlini yazabilmek** gerekir. Sınav ikisini de sorar.",
        "satir_sayisi": 2,
        "sorular": [
            "Anlatım bozukluklarının iki ana grubunu yazınız.",
            "Gereksiz sözcük kullanımını tanımlayarak bir örnek veriniz.",
            "Gereksiz sözcüğü bulmanın yöntemini yazınız.",
            "'Yukarı çıktı' ifadesindeki bozukluğu bulup düzeltiniz.",
            "'Geriye iade etti' ifadesindeki bozukluğu bulup düzeltiniz.",
            "'Birbirleriyle karşılıklı konuştular' ifadesindeki bozukluğu düzeltiniz.",
            "Yön bildiren fiillerde gereksiz sözcük oluşmasının nedenini açıklayınız.",
            "İkilemelerin gereksiz sözcük sayılıp sayılmadığını açıklayınız.",
            "Anlamca çelişen sözcükleri tanımlayarak bir örnek veriniz.",
            "'Kesinlikle belki gelirim' cümlesindeki bozukluğu düzeltiniz.",
            "Sözcüğün yanlış anlamda kullanımına bir örnek verip düzeltiniz.",
            "Deyim yanlışına bir örnek verip düzeltiniz.",
            "Mantık hatasını tanımlayarak bir örnek veriniz.",
            "Sıralama hatasını tanımlayarak bir örnek veriniz.",
            "'Yaşlılar, çocuklar ve gençler törene katıldı' cümlesini düzeltiniz.",
            "Özne-yüklem uyumsuzluğunu tanımlayınız.",
            "Cansız çoğul öznelerde yüklemin durumunu yazınız.",
            "'Ağaçlar sarardılar' cümlesini düzeltiniz.",
            "İnsan olan çoğul öznelerde yüklemin durumunu yazınız.",
            "Farklı kişilerden oluşan öznede yüklemin nasıl çekimlendiğini yazınız.",
            "'Ali, sen ve ben gitti' cümlesini düzeltiniz.",
            "Özne eksikliğini tanımlayarak bir örnek veriniz.",
            "Nesne eksikliğini tanımlayarak bir örnek veriniz.",
            "Tümleç eksikliğini tanımlayarak bir örnek veriniz.",
            "Öge eksikliğini bulma yöntemini yazınız.",
            "'Kardeşimi çok sever ve güvenirim' cümlesindeki bozukluğu düzeltiniz.",
            "'Onu aradım ve haber verdim' cümlesindeki bozukluğu düzeltiniz.",
            "Tamlama yanlışını tanımlayarak bir örnek veriniz.",
            "'Ekonomik ve siyasi sorunları' ifadesindeki bozukluğu düzeltiniz.",
            "Çatı uyumsuzluğunu tanımlayarak bir örnek veriniz.",
            "'Çay demlendi ve içtik' cümlesindeki bozukluğu düzeltiniz.",
            "'Kitabı aldı ve masaya konuldu' cümlesindeki bozukluğu düzeltiniz.",
            "Sıralı cümlelerde çatı uyumunun neden gerekli olduğunu açıklayınız.",
            "'Ne ... ne de' bağlacının yüklemle uyumunu yazınız.",
            "'Ne sen ne ben gelmedik' cümlesini düzeltiniz.",
            "'Hem ... hem de' bağlacının kullanım özelliğini yazınız.",
            "Zamir eksikliğini bir örnekle açıklayınız.",
            "Noktalamadan kaynaklanan belirsizliğe bir örnek veriniz.",
            "'Yaşlı adama baktı' ifadesinin iki farklı anlamını yazınız.",
            "Anlatım bozukluğu arama sırasını dört adımda yazınız.",
            "'Toplantıya katılan üyeler, sorunları tartıştı ve çözüm önerileri getirildi' cümlesindeki bozukluğu bulunuz.",
            "Aynı cümleyi düzeltiniz.",
            "Sık karşılaşılan beş bozuk kalıbı yazınız.",
            "Anlatım bozukluğu sorularının iki kalıbını yazınız.",
            "'Nasıl giderilebilir?' sorularında hangi seçeneğin doğru olduğunu yazınız.",
            "Cümleyi baştan yazan seçeneklerin neden çeldirici olduğunu açıklayınız.",
            "Kendi kurduğunuz bozuk bir cümleyi yazıp düzeltiniz.",
            "Anlama dayalı bir bozukluk örneği yazıp türünü adlandırınız.",
            "Yapıya dayalı bir bozukluk örneği yazıp türünü adlandırınız.",
            "Anlatım bozukluğu sorularında cümleyi yüksek sesle okumanın faydasını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Anlama dayalı** ve **yapıya dayalı** anlatım bozuklukları.",
            "Bir sözcüğün anlamının **başka bir sözcükte zaten bulunmasıdır**: \"**yukarı** çıktı\".",
            "Şüphelenilen sözcük **cümleden çıkarılır**; anlam **değişmiyorsa** o sözcük gereksizdir.",
            "\"Çıkmak\" fiili zaten yukarı yönü bildirir → **gereksiz sözcük**. Düzeltme: \"**Çıktı**.\"",
            "\"İade etmek\" zaten \"geri vermek\" demektir → **gereksiz sözcük**. Düzeltme: \"**İade etti**.\"",
            "\"Konuşmak\" fiili zaten işteştir → **gereksiz sözcük**. Düzeltme: \"**Konuştular**.\"",
            "Bu fiiller **yön anlamını kendi içinde taşır**; ayrıca yön sözcüğü eklemek **aynı bilgiyi iki kez** vermek olur.",
            "**Sayılmaz.** \"Eş ve dost\", \"neden ve niçin\" gibi ikilemeler **pekiştirme** amacıyla kullanılır ve bozukluk oluşturmaz.",
            "Aynı cümlede **birbiriyle çelişen** ifadelerin bulunmasıdır: \"**Kesinlikle** yarın **belki** gelirim.\"",
            "\"Kesinlikle\" (kesinlik) ile \"belki\" (olasılık) çelişiyor. Düzeltme: \"**Belki gelirim**.\" ya da \"**Kesinlikle geleceğim**.\"",
            "\"Bu ilaç hastalığı **azaltıyor**.\" → \"azaltmak\" sayı için kullanılır. Düzeltme: \"Bu ilaç hastalığı **hafifletiyor**.\"",
            "\"Göze **yerleşmek**\" → deyim yanlış kullanılmış. Düzeltme: \"Göze **girmek**.\"",
            "Cümlede **akla aykırı** bir sıralama ya da ilişki bulunmasıdır: \"Önce **öldü**, sonra **hastalandı**.\"",
            "Kavramların **mantıklı bir sırayla** verilmemesidir: \"Yaşlılar, çocuklar ve gençler.\"",
            "Yaş sırası bozuk. Düzeltme: \"**Çocuklar, gençler ve yaşlılar** törene katıldı.\"",
            "Özne ile yüklemin **tekillik-çoğulluk** ya da **kişi** bakımından uyuşmamasıdır.",
            "Yüklem **tekil** olur: \"Ağaçlar **sarardı**.\"",
            "\"Ağaçlar **sarardı**.\" — cansız çoğul özne tekil yüklem ister.",
            "Yüklem **hem tekil hem çoğul** olabilir: \"Öğrenciler **geldi**\" ya da \"**geldiler**\" — ikisi de doğrudur.",
            "**En küçük kişiye** göre çekimlenir: 1. kişi varsa birinci çoğul, yoksa 2. kişi varsa ikinci çoğul.",
            "\"Ali, sen ve ben **gittik**.\" — birinci kişi bulunduğu için yüklem **birinci çoğul** olur.",
            "Sıralı cümlede **ikinci yüklemin öznesinin bulunmamasıdır**: \"Kitabı aldı ve masaya konuldu.\"",
            "Ortak nesnenin cümlelerden birine **uymamasıdır**: \"Ona uğradım ve gördüm\" → \"gördüm\" için nesne eksik.",
            "Ortak tümlecin cümlelerden birine **uymamasıdır**: \"Kardeşimi sevdim ve güvendim\" → \"güvendim\" için dolaylı tümleç eksik.",
            "**Her yüklem ayrı ayrı ele alınır** ve ögeleri **tek tek sorulur**; cevapsız kalan öge eksiktir.",
            "\"Kime güvenirim?\" sorusu cevapsız → **dolaylı tümleç eksik**. Düzeltme: \"Kardeşimi çok sever ve **ona** güvenirim.\"",
            "\"Kime haber verdim?\" sorusu cevapsız. Düzeltme: \"Onu aradım ve **ona** haber verdim.\"",
            "Tamlayan ya da tamlanan ekinin **yanlış** ya da **eksik** olmasıdır.",
            "\"Ekonomik\" ile \"sorunları\" uyuşmuyor. Düzeltme: \"**Ekonomik sorunları ve siyasi sorunları**\" ya da \"**ekonomik ve siyasi sorunlar**\".",
            "Sıralı cümlelerdeki yüklemlerin **çatılarının uyuşmamasıdır**: \"Çay demlendi ve içtik.\"",
            "Birinci yüklem edilgen, ikincisi etken. Düzeltme: \"**Çayı demledik ve içtik**.\"",
            "Birinci yüklem etken, ikincisi edilgen. Düzeltme: \"Kitabı aldı ve **onu** masaya **koydu**.\"",
            "Ortak özne varsa bütün yüklemler **aynı çatıda** olmalıdır; aksi hâlde öznenin eylemi yapıp yapmadığı **belirsizleşir**.",
            "Bağlaç cümleye zaten **olumsuzluk** katar; yüklem **olumlu** olmalıdır.",
            "\"Ne sen ne ben **geldik**.\" — bağlaç olumsuzluğu zaten sağlar.",
            "**Olumlu** cümlelerde kullanılır ve iki ögeyi birlikte olumlar: \"Hem çalıştı hem kazandı.\"",
            "İki cümlede farklı ögeler varsa **zamirle tamamlanmalıdır**: \"Onu aradım ve **ona** haber verdim.\"",
            "\"**Yaşlı, adama baktı**\" (yaşlı bir kişi adama baktı) ile \"**Yaşlı adama baktı**\" (birisi yaşlı adama baktı) farklı anlamlardadır.",
            "**1)** Yaşlı bir kişi adama baktı (virgüllü). **2)** Birisi yaşlı bir adama baktı (virgülsüz).",
            "**1)** Yavaş oku. **2)** Gereksiz sözcük ara. **3)** Her yükleme ögelerini sor. **4)** Özne-yüklem, çatı ve bağlaç uyumlarını kontrol et.",
            "Birinci yüklem \"tartıştı\" **etken**, ikincisi \"getirildi\" **edilgen** → **çatı uyumsuzluğu**.",
            "\"Toplantıya katılan üyeler, sorunları tartıştı ve çözüm önerileri **getirdi**.\"",
            "\"Yukarı çıkmak\", \"geriye iade etmek\", \"kesinlikle belki\", \"ağaçlar sarardılar\", \"ne sen ne ben gelmedik\".",
            "**1)** \"Hangisinde anlatım bozukluğu vardır?\" **2)** \"Bu bozukluk nasıl giderilebilir?\"",
            "**En az değişiklikle** düzelten seçenek doğrudur.",
            "Cümleyi baştan yazan seçenekler bozukluğu giderir gibi görünse de **cümlenin anlamını değiştirebilir**; sorulan şey bozukluğun **en ekonomik biçimde** giderilmesidir.",
            "Bozuk: \"Öğrenciler sınav sonuçlarını merakla bekliyor ve açıklandı.\" Düzeltilmiş: \"Öğrenciler sınav sonuçlarını merakla bekliyordu; sonuçlar dün **açıklandı**.\"",
            "\"Bu konuda **kesinlikle** **muhtemelen** haklısın.\" → **anlamca çelişen sözcükler**.",
            "\"Arkadaşımı aradım ve teşekkür ettim.\" → \"Kime teşekkür ettim?\" cevapsız → **dolaylı tümleç eksikliği**.",
            "Yüksek sesle okumak, cümlenin **doğal akışını** ortaya çıkarır. Bozuk yerlerde **kulak takılır**; bu, gözle okumada fark edilmeyen uyumsuzlukları yakalatır.",
        ],
    },
}
