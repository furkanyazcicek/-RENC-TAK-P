"""TYT Kimya — Karışımlar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: KARIŞIMLAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Karışımlar",
    "alt_baslik": "Ham bilgi notu — saf madde ve karışım ayrımı, homojen-heterojen, "
                  "derişim hesapları ve ayırma yöntemleri; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Karışımlar",
        "kazanimlar": "9.7.1.1 — Saf madde ve karışımları sınıflandırır. "
                      "9.7.1.2 — Çözeltilerde derişimi hesaplar. "
                      "9.7.1.3 — Karışımları ayırma yöntemlerini seçer.",
        "kapsam": "Saf madde-karışım ayrımı, homojen ve heterojen karışımlar, "
                  "çözelti-çözünen-çözücü, kütlece yüzde ve molarite, derişik-"
                  "seyreltik, ayırma yöntemleri, 45 analiz sorusu",
        "nasil": "Ayırma yöntemleri **hangi özelliğe dayandığına göre** ezberlenir "
                 "— yöntemin adını değil, **dayandığı farkı** öğren. Derişim "
                 "hesaplarında birime dikkat et.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Ayırma yöntemleri TYT'de neredeyse her yıl karşına çıkar; "
                    "tabloyu kapatıp kendine sorabilmelisin.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Saf Madde ve Karışım"},
        {"tur": "gorsel", "baslik": "Şema 1 — Maddenin sınıflandırılması",
         "aciklama": "İlk soru: madde **tek cins tanecikten** mi oluşuyor? Evetse "
                     "saf madde, hayırsa karışımdır.",
         "ciz": S.agac("Madde", [
             ("Saf Madde", ["Element", "Bileşik"]),
             ("Karışım", ["Homojen (çözelti)", "Heterojen"]),
         ])},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Saf Madde", "Karışım"],
         "oranlar": [0.30, 0.35, 0.35],
         "satirlar": [
             ["Bileşim", "**Belirli ve sabit**", "**Değişken**"],
             ["Erime/kaynama noktası", "**Belirli ve sabit**", "**Aralıklıdır**, sabit değil"],
             ["Isınma grafiği", "Hâl değişiminde **yatay bölüm var**", "Yatay bölüm **yok**"],
             ["Yoğunluk", "**Ayırt edici**", "Ayırt edici değil"],
             ["Ayrıştırma", "**Kimyasal** yolla (bileşikler)", "**Fiziksel** yolla"],
             ["Formülle gösterim", "**Var**", "**Yok**"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "**Element**: Tek cins atomdan oluşur (Fe, O_2, He).",
            "**Bileşik**: Farklı cins atomların **belirli oranlarda** kimyasal "
            "bağla birleşmesiyle oluşur (H_2O, NaCl). **Kendini oluşturan elementlerin "
            "özelliklerini taşımaz**.",
            "**Karışım**: İki ya da daha fazla maddenin **kimyasal bağ kurmadan** "
            "bir araya gelmesidir. Bileşenler **özelliklerini korur**.",
        ]},
        {"tur": "tuzak", "baslik": "Hava Bir Bileşik Değildir", "govde":
            "Hava **homojen bir karışımdır**; bileşimi yere ve yüksekliğe göre "
            "**değişir** ve bileşenleri (azot, oksijen) kendi özelliklerini korur. "
            "Aynı şekilde **çelik, lehim, tunç** gibi alaşımlar da karışımdır, "
            "bileşik değildir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Homojen ve Heterojen Karışımlar"},
        {"tur": "maddeler", "ogeler": [
            "**Homojen karışım (çözelti)**: Her yerinde **aynı** özelliği gösterir; "
            "bileşenler **gözle ya da mikroskopla ayırt edilemez**. Tanecik boyutu "
            "**çok küçüktür**.",
            "Örnekler: **tuzlu su, şekerli su, hava, alaşımlar (çelik, pirinç, "
            "lehim, tunç), kolonya, gazoz**.",
            "**Heterojen karışım**: Her yerinde **farklı** özellik gösterir; "
            "bileşenler ayırt edilebilir.",
            "**Heterojen alt türleri**: **Süspansiyon** (katı + sıvı — ayran, "
            "çamurlu su, kireçli su), **emülsiyon** (sıvı + sıvı — zeytinyağı-su, "
            "süt, mayonez), **aerosol** (sıvı/katı + gaz — sis, duman, deodorant), "
            "**adi karışım** (katı + katı — pilav, tuz-kum, salata).",
        ]},
        {"tur": "ezber", "baslik": "Karışım Türü Ayırt Etme", "ogeler": [
            "**Alaşımlar homojendir** — çelik, pirinç, tunç, lehim, bronz.",
            "**Süt ve ayran heterojendir** (emülsiyon ve süspansiyon).",
            "**Bütün çözeltiler homojendir**; 'çözelti' denince homojen anlaşılır.",
            "**Gaz karışımları her zaman homojendir** (hava, gaz karışımları).",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Çözeltiler ve Derişim"},
        {"tur": "maddeler", "ogeler": [
            "**Çözücü**: Genellikle miktarı **fazla** olan, çözme işini yapan madde "
            "(çoğunlukla su).",
            "**Çözünen**: Miktarı **az** olan, çözünen madde.",
            "**Derişik çözelti**: Birim hacimde **çok** çözünen bulunur. "
            "**Seyreltik çözelti**: **Az** çözünen bulunur.",
            "**Doymuş çözelti**: Belirli sıcaklıkta **çözebileceği en fazla** "
            "çözüneni almış çözeltidir; daha fazlası çözünmez, dibe çöker.",
            "**Çözünürlük**: Belirli sıcaklıkta **100 g çözücüde** çözünebilen "
            "en fazla madde miktarıdır. **Ayırt edici bir özelliktir**.",
        ]},
        {"tur": "formul",
         "baslik": "Kütlece yüzde derişim",
         "ifade": "% = (çözünenin kütlesi / çözeltinin kütlesi) × 100",
         "terimler": [
             ("Çözelti kütlesi", "**Çözünen + çözücü** kütlelerinin toplamı"),
             ("Dikkat", "Payda **çözücü değil, ÇÖZELTİ**dir. En sık yapılan hata budur."),
         ]},
        {"tur": "formul",
         "baslik": "Molar derişim (Molarite)",
         "ifade": "M = n / V",
         "terimler": [
             ("M", "**Molarite** (mol/L)"),
             ("n", "Çözünenin **mol sayısı**"),
             ("V", "**Çözeltinin hacmi**, litre cinsinden (çözücünün değil)"),
         ],
         "not": "Hacim **mL** verilmişse **1000'e bölerek litreye** çevir. "
                "Molarite hesaplarındaki hataların çoğu bu adımın atlanmasından çıkar."},
        {"tur": "cozum",
         "baslik": "Kütlece Yüzde Hesabı",
         "soru": "**20 g tuz**, **180 g suda** çözülüyor. Çözeltinin kütlece "
                 "yüzde derişimi kaçtır?",
         "adimlar": [
             "Çözelti kütlesi = çözünen + çözücü = 20 + 180 = **200 g**.",
             "Formülü yaz: % = (20 / 200) × 100.",
             "% = 0,1 × 100.",
         ],
         "sonuc": "Çözelti kütlece %10'luk tuzlu sudur."},
        {"tur": "cozum",
         "baslik": "Molarite Hesabı",
         "soru": "**4 g NaOH**, suda çözülerek **500 mL** çözelti hazırlanıyor. "
                 "Çözeltinin molaritesi kaçtır? (Na = 23, O = 16, H = 1)",
         "adimlar": [
             "NaOH'ın mol kütlesi: 23 + 16 + 1 = **40 g/mol**.",
             "Mol sayısı: n = 4 / 40 = **0,1 mol**.",
             "Hacmi litreye çevir: 500 mL = **0,5 L**.",
             "M = n / V = 0,1 / 0,5.",
         ],
         "sonuc": "Çözeltinin molaritesi 0,2 mol/L'dir."},
        {"tur": "taktik", "baslik": "Seyreltme ve Derişiklendirme", "govde":
            "Çözeltiye su eklendiğinde ya da su buharlaştırıldığında "
            "**çözünenin mol sayısı değişmez**:",
         "ogeler": [
             "**M_1 · V_1 = M_2 · V_2** bağıntısı bu yüzden geçerlidir.",
             "**Su eklenirse**: hacim artar, derişim **azalır** (seyrelir).",
             "**Su buharlaştırılırsa**: hacim azalır, derişim **artar**.",
             "**Aynı çözeltiden bir miktar alınırsa derişim DEĞİŞMEZ** — homojen "
             "olduğu için her damlası aynı derişimdedir. Bu doğrudan sorulur.",
         ]},
        {"tur": "tuzak", "baslik": "Çözeltiden Bir Kısım Almak Derişimi Değiştirmez",
         "govde": "200 mL'lik bir çözeltiden 50 mL alırsan, alınan kısmın "
                  "**derişimi aynıdır**; yalnızca **mol sayısı ve kütlesi azalır**. "
                  "'Yarısını alınca derişim yarıya iner' ifadesi **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Çözünürlüğe Etki Eden Etkenler"},
        {"tur": "tablo",
         "basliklar": ["Etken", "Katı-Sıvı Çözünürlüğü", "Gaz-Sıvı Çözünürlüğü"],
         "oranlar": [0.26, 0.37, 0.37],
         "satirlar": [
             ["**Sıcaklık artışı**", "Genellikle **artırır**", "**Azaltır**"],
             ["**Basınç artışı**", "Etkilemez", "**Artırır**"],
             ["**Çözücü cinsi**", "Belirleyicidir (benzer benzeri çözer)", "Belirleyicidir"],
             ["**Karıştırma / toz hâline getirme**", "Çözünürlüğü değil, "
              "**çözünme HIZINI** artırır", "Hızı artırır"],
         ]},
        {"tur": "dikkat", "baslik": "Çözünürlük ile Çözünme Hızı Farklı Şeylerdir",
         "govde": "**Karıştırmak, ısıtmak ve toz hâline getirmek** çözünmeyi "
                  "**hızlandırır**. Ama **çözünürlüğü** (en fazla ne kadar "
                  "çözünebileceğini) yalnızca **sıcaklık, basınç ve madde cinsi** "
                  "belirler. Karıştırmak daha fazla tuz çözdürmez, sadece daha "
                  "çabuk çözdürür."},
        {"tur": "cikmis", "baslik": "Gazoz sorusu", "govde":
            "'Gazoz neden soğukken daha çok gaz tutar?' Cevap: **gazların sıvıdaki "
            "çözünürlüğü sıcaklık arttıkça AZALIR**. Kapağı açılınca da **basınç "
            "düşer**, çözünürlük azalır ve gaz kabarcıklar hâlinde çıkar. "
            "Bu iki etkiyi birlikte sorarlar."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Karışımları Ayırma Yöntemleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Hangi karışım hangi yöntemle ayrılır?",
         "aciklama": "Ayırma yöntemi seçilirken tek soru sorulur: **bileşenler hangi "
                     "özellikleri bakımından farklı?** Yöntem her zaman o farkı "
                     "kullanır.",
         "ciz": S.kartlar([
             ("Eleme", "**tanecik boyutu**\nfarklı — un/kepek"),
             ("Süzme", "**katı + sıvı**\nçözünmemiş — çay"),
             ("Buharlaştırma", "**çözünmüş katı**\nayrılır — tuzlu su"),
             ("Damıtma", "**kaynama noktası**\nfarklı — alkol/su"),
             ("Ayırma hunisi", "**karışmayan sıvılar**\n— su/zeytinyağı"),
             ("Mıknatısla", "**bileşen mıknatısla\nçekilir** — demir tozu"),
             ("Yüzdürme", "**yoğunluk** farkı\n— buğday/samanlı su"),
             ("Diyaliz", "**tanecik boyutu**\n— kan temizleme"),
             ("Kromatografi", "**tutunma hızı**\nfarklı — mürekkep"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Yöntem", "Dayandığı Fark", "Nerede Kullanılır?"],
         "oranlar": [0.24, 0.30, 0.46],
         "satirlar": [
             ["**Eleme**", "**Tanecik boyutu**", "Kum-çakıl, un-kepek (katı-katı)"],
             ["**Süzme**", "**Tanecik boyutu**", "Çay-çay posası, çamurlu su (katı-sıvı)"],
             ["**Yüzdürme**", "**Yoğunluk**", "Buğday-samanı ayırma, talaş-kum"],
             ["**Mıknatısla ayırma**", "**Mıknatıstan etkilenme**", "Demir tozu-kükürt"],
             ["**Ayırma hunisi**", "**Yoğunluk** (karışmayan sıvılar)", "Su-zeytinyağı"],
             ["**Diyaliz**", "**Tanecik boyutu** (yarı geçirgen zar)", "Böbrek yetmezliğinde kan temizleme"],
             ["**Buharlaştırma**", "**Kaynama noktası**", "Tuzlu sudan tuz elde etme"],
             ["**Damıtma (destilasyon)**", "**Kaynama noktası farkı**",
              "Su-alkol, ham petrolün ayrıştırılması"],
             ["**Ayrımsal kristallendirme**", "**Çözünürlük farkı**", "Şeker-tuz ayırma"],
             ["**Özütleme (ekstraksiyon)**", "**Çözünürlük farkı**", "Çaydemleme, bitkiden yağ çıkarma"],
             ["**Kromatografi**", "**Sürüklenme (tutunma) hızı**", "Mürekkep renklerinin ayrılması"],
         ]},
        {"tur": "taktik", "baslik": "Yöntem Seçme Refleksi", "govde":
            "Soruda verilen karışımın **hâllerine** ve **hangi özelliğin farklı "
            "olduğuna** bak:",
         "ogeler": [
             "**Katı + katı** → tanecik boyutu farklıysa **eleme**, yoğunluk "
             "farklıysa **yüzdürme**, biri mıknatıstan etkileniyorsa **mıknatıs**, "
             "çözünürlük farklıysa **ayrımsal kristallendirme**.",
             "**Katı + sıvı** → çözünmemişse **süzme**, çözünmüşse "
             "**buharlaştırma** ya da **damıtma**.",
             "**Sıvı + sıvı** → karışmıyorsa **ayırma hunisi**, karışıyorsa "
             "**damıtma**.",
             "Soruda **kaynama noktası** veriliyorsa cevap büyük olasılıkla "
             "**damıtmadır**.",
         ]},
        {"tur": "tuzak", "baslik": "Buharlaştırma ile Damıtmayı Karıştırma", "govde":
            "**Buharlaştırmada** yalnızca **geride kalan katı** elde edilir; buhar "
            "uçup gider (tuzlu sudan tuz alma). **Damıtmada** buhar **yoğuşturulup "
            "toplanır**, yani **her iki bileşen de** elde edilir. Soru 'suyu da "
            "geri kazanmak istiyoruz' diyorsa cevap **damıtmadır**."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Saf maddenin **erime/kaynama noktası sabittir**, karışımın değildir.",
            "**Alaşımlar homojendir**, **süt ve ayran heterojendir**.",
            "Kütlece yüzdede payda **çözelti** kütlesidir, çözücü değil.",
            "Molaritede hacim **çözeltinin** hacmidir ve **litre** cinsindendir.",
            "Çözeltiden bir kısım almak **derişimi değiştirmez**.",
            "Sıcaklık: katıların çözünürlüğünü **artırır**, gazlarınkini **azaltır**.",
            "Karıştırmak **hızı** artırır, **çözünürlüğü** değil.",
            "**Damıtma** her iki bileşeni de kazandırır; buharlaştırma yalnızca katıyı.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Ayırma yöntemi sorularında **hangi özelliğin farklı olduğunu** yaz; "
            "yöntemin adı ondan sonra kendiliğinden gelir. Derişim sorularında "
            "paydanın ne olduğunu her seferinde kontrol et.",
        "satir_sayisi": 2,
        "sorular": [
            "Saf madde ile karışımı erime-kaynama noktası bakımından karşılaştırınız.",
            "Isınma grafiğinde yatay bölüm görülmemesi ne anlama gelir?",
            "Element ile bileşiği tanecik yapısı bakımından ayırınız.",
            "Bileşiğin, kendini oluşturan elementlerin özelliklerini taşımadığını bir örnekle açıklayınız.",
            "Karışımda bileşenlerin özelliklerini korumasını bir örnekle açıklayınız.",
            "Havanın bileşik değil karışım olmasının nedenini yazınız.",
            "Çeliğin bileşik mi karışım mı olduğunu gerekçesiyle yazınız.",
            "Homojen karışımın tanımını yapınız ve üç örnek veriniz.",
            "Süspansiyon ve emülsiyonu tanımlayıp birer örnek veriniz.",
            "Aerosole iki örnek veriniz.",
            "Sütün heterojen sayılmasının nedeni nedir?",
            "Gaz karışımlarının her zaman homojen olmasının nedeni ne olabilir?",
            "Çözücü ve çözüneni miktar ölçütüyle tanımlayınız.",
            "Derişik ve seyreltik çözeltiyi karşılaştırınız.",
            "Doymuş çözelti nedir?",
            "Çözünürlük kavramını tanımlayınız ve ayırt edici olup olmadığını belirtiniz.",
            "Kütlece yüzde derişim formülünü yazınız ve paydanın ne olduğunu belirtiniz.",
            "20 g tuz 180 g suda çözülürse kütlece yüzde derişim kaçtır?",
            "25 g şeker 75 g suda çözülürse kütlece yüzde kaçtır?",
            "Kütlece %20'lik 300 g çözeltide kaç gram çözünen vardır?",
            "Molarite formülünü yazınız ve hacmin birimini belirtiniz.",
            "4 g NaOH ile hazırlanan 500 mL çözeltinin molaritesi kaçtır?",
            "0,5 molar 2 litre çözeltide kaç mol çözünen vardır?",
            "Molarite hesabında hacmin çözeltiye ait olmasının nedeni nedir?",
            "M_1·V_1 = M_2·V_2 bağıntısı neden geçerlidir?",
            "Bir çözeltiye su eklenirse derişim nasıl değişir?",
            "Bir çözeltiden su buharlaştırılırsa derişim nasıl değişir?",
            "200 mL çözeltiden 50 mL alınırsa alınan kısmın derişimi ne olur?",
            "0,4 molar 100 mL çözelti 400 mL'ye tamamlanırsa yeni derişim kaçtır?",
            "Sıcaklık artışının katı ve gaz çözünürlüğüne etkisini ayrı ayrı yazınız.",
            "Basınç artışı hangi tür çözünürlüğü etkiler?",
            "Gazozun soğukken daha çok gaz tutmasının nedeni nedir?",
            "Gazoz kapağı açılınca köpürmesini basınçla açıklayınız.",
            "Karıştırmak çözünürlüğü mü çözünme hızını mı artırır?",
            "Toz hâline getirmenin çözünmeye etkisini açıklayınız.",
            "Eleme ve süzme hangi ortak özelliğe dayanır? Farkları nedir?",
            "Yüzdürme yöntemi hangi farka dayanır? Bir örnek veriniz.",
            "Demir tozu ile kükürt karışımı nasıl ayrılır?",
            "Su ile zeytinyağı karışımı hangi yöntemle ayrılır? Dayandığı fark nedir?",
            "Tuzlu sudan yalnızca tuz elde etmek için hangi yöntem kullanılır?",
            "Tuzlu sudan hem tuz hem su elde etmek için hangi yöntem kullanılır?",
            "Buharlaştırma ile damıtma arasındaki farkı yazınız.",
            "Ham petrolün bileşenlerine ayrılmasında hangi yöntem kullanılır?",
            "Mürekkebin renklerine ayrılmasında kullanılan yöntem ve dayandığı fark nedir?",
            "Diyaliz hangi ilkeye dayanır ve nerede kullanılır?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Saf maddenin** erime ve kaynama noktası **belirli ve sabittir**. **Karışımın** ise bir **aralıkta** gerçekleşir, sabit değildir.",
            "Maddenin **karışım** olduğunu gösterir; hâl değişimi boyunca sıcaklık sabit kalmamıştır.",
            "**Element** tek cins atomdan, **bileşik** farklı cins atomların belirli oranlarda kimyasal bağla birleşmesinden oluşur.",
            "**Su (H_2O)**: hidrojen yanıcı, oksijen yakıcıdır; ama su yangın söndürür. Bileşik yeni ve bağımsız bir maddedir.",
            "**Tuzlu su**: tuz hâlâ tuzlu, su hâlâ sudur; ikisi de kendi özelliğini korur ve fiziksel yolla ayrılabilir.",
            "Bileşimi **yere ve yüksekliğe göre değişir**, bileşenleri **kimyasal bağ kurmamıştır** ve **fiziksel yolla** ayrılabilir.",
            "**Karışımdır** (alaşım). Demir ve karbon kimyasal bağ kurmamıştır, oranları değişebilir; homojen bir karışımdır.",
            "Her yerinde **aynı özelliği** gösteren, bileşenleri ayırt edilemeyen karışımdır. Örnek: **tuzlu su, hava, çelik**.",
            "**Süspansiyon**: katının sıvı içinde asılı kalması (ayran, çamurlu su). **Emülsiyon**: birbiriyle karışmayan iki sıvının karışımı (zeytinyağı-su, süt).",
            "**Sis** ve **duman** (deodorant spreyi de yazılabilir).",
            "İçindeki **yağ damlacıkları suda çözünmez**, asılı hâlde durur; mikroskopla ayırt edilebilir. Bu yüzden **emülsiyondur**.",
            "Gaz tanecikleri **serbest ve hızlı** hareket eder, aralarında büyük boşluk vardır; bu yüzden her zaman **eşit dağılırlar**.",
            "**Çözücü** miktarı fazla olan, **çözünen** miktarı az olandır.",
            "**Derişikte** birim hacimde **çok**, **seyreltikte az** çözünen bulunur.",
            "Belirli sıcaklıkta **çözebileceği en fazla** çözüneni almış, daha fazlasını çözemeyen çözeltidir.",
            "Belirli sıcaklıkta **100 g çözücüde çözünebilen en fazla madde miktarıdır**. **Ayırt edici bir özelliktir**.",
            "**% = (çözünen kütlesi / çözelti kütlesi) × 100.** Payda **çözelti** kütlesidir (çözünen + çözücü).",
            "Çözelti = 20 + 180 = 200 g → (20/200) × 100 = **%10**.",
            "Çözelti = 25 + 75 = 100 g → (25/100) × 100 = **%25**.",
            "300 × 0,20 = **60 g**.",
            "**M = n / V.** Hacim **litre** cinsinden ve **çözeltiye** aittir.",
            "NaOH = 40 g/mol → n = 4/40 = 0,1 mol. V = 0,5 L → M = 0,1/0,5 = **0,2 M**.",
            "n = M × V = 0,5 × 2 = **1 mol**.",
            "Çözünen madde çözücünün içine dağıldığında **toplam hacim değişir**; anlamlı olan, elde edilen **çözeltinin** son hacmidir.",
            "Seyreltme sırasında yalnızca su eklenir; **çözünenin mol sayısı değişmez**. n = M·V olduğundan iki durumda da mol sayısı eşittir.",
            "Hacim arttığı için derişim **azalır** (çözelti seyrelir).",
            "Hacim azaldığı için derişim **artar**.",
            "**Değişmez**, aynı kalır. Çözelti homojendir; yalnızca alınan kısmın **mol sayısı ve kütlesi** azalır.",
            "M_1·V_1 = M_2·V_2 → 0,4 × 100 = M_2 × 400 → M_2 = **0,1 M**.",
            "Sıcaklık artışı **katıların** çözünürlüğünü genellikle **artırır**, **gazların** çözünürlüğünü **azaltır**.",
            "Yalnızca **gazların sıvıdaki** çözünürlüğünü etkiler; basınç arttıkça çözünürlük **artar**.",
            "**Gazların çözünürlüğü sıcaklık düştükçe artar**; soğuk gazozda karbondioksit daha çok çözünmüş hâlde kalır.",
            "Kapak açılınca şişe içindeki **basınç düşer**; basınç azalınca gazın çözünürlüğü de azalır ve CO_2 kabarcıklar hâlinde çıkar.",
            "**Çözünme hızını** artırır. Çözünürlük (en fazla ne kadar çözüneceği) değişmez.",
            "Katının **yüzey alanını artırır**; çözücüyle temas eden yüzey büyüdüğü için çözünme **hızlanır**, ama çözünürlük değişmez.",
            "İkisi de **tanecik boyutu** farkına dayanır. **Eleme** katı-katı karışımlarda, **süzme** katı-sıvı karışımlarda kullanılır.",
            "**Yoğunluk** farkına dayanır. Örnek: **buğdayı samandan** ayırma, talaş-kum karışımı.",
            "**Mıknatısla ayırma.** Demir mıknatıstan etkilenir, kükürt etkilenmez.",
            "**Ayırma hunisi.** Dayandığı fark **yoğunluk**tur (ve iki sıvının birbiriyle karışmamasıdır).",
            "**Buharlaştırma.** Su buharlaşıp uçar, geride tuz kalır.",
            "**Damıtma (destilasyon).** Buhar yoğuşturulup toplandığı için hem su hem tuz elde edilir.",
            "**Buharlaştırmada** yalnızca geride kalan katı elde edilir, buhar uçar. **Damıtmada** buhar yoğuşturulup toplanır, **her iki bileşen** de kazanılır.",
            "**Ayrımsal damıtma.** Bileşenlerin **kaynama noktası farkından** yararlanılır.",
            "**Kromatografi.** Bileşenlerin, hareketli faz içinde **farklı hızlarda sürüklenmesine (tutunmasına)** dayanır.",
            "**Tanecik boyutu** farkına ve **yarı geçirgen zara** dayanır. **Böbrek yetmezliği** olan hastaların kanının temizlenmesinde kullanılır.",
        ],
    },
}
