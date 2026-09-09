"""TYT Türkçe — Yazım Kuralları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: YAZIM KURALLARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Yazım Kuralları",
    "alt_baslik": "Ham bilgi notu — büyük harf, ayrı-bitişik yazım, kesme işareti ve "
                  "sayıların yazımı; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Yazım Kuralları",
        "kazanimlar": "Büyük harflerin kullanıldığı yerleri bilir. "
                      "Ayrı ve bitişik yazılan sözcükleri ayırt eder. "
                      "Kesme işaretinin kullanımını bilir. "
                      "Sayıların ve kısaltmaların yazımını uygular.",
        "kapsam": "Büyük harf kullanımı, kesme işareti, \"de/da\" ve \"ki\" yazımı, "
                  "\"mi\" soru ekinin yazımı, bitişik ve ayrı yazılan birleşik "
                  "sözcükler, sayıların yazımı, kısaltmalar, düzeltme işareti, "
                  "50 analiz sorusu",
        "nasil": "Yazım kuralları **ezber konusudur** ama ezberi kolaylaştıran "
                 "**mantıklar** vardır. Özellikle **de/ki/mi üçlüsünü** ve **kesme "
                 "işaretini** kavrarsan soruların büyük kısmı çözülür.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de yazım kurallarından **her yıl soru çıkar** ve bu sorular "
                    "**kısa sürede çözülür**; net kazandıran konulardandır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Büyük Harf Kullanımı"},
        {"tur": "tablo",
         "basliklar": ["Kural", "Açıklama", "Örnek"],
         "satirlar": [
             ["**Cümle başı**", "Her cümle büyük harfle başlar",
              "\"Bugün hava çok güzel.\""],
             ["**Özel adlar**", "Kişi, yer, kurum, millet, dil adları",
              "**Ahmet**, **Ankara**, **Türk**, **Türkçe**"],
             ["**Kitap ve yazı adları**", "Her sözcük büyük harfle başlar (bağlaçlar hariç)",
              "**Yaban**, **Çalıkuşu**, **Kürk Mantolu Madonna**"],
             ["**Unvanlar**", "Kişi adından **önce ya da sonra** gelen unvanlar",
              "**Doktor** Ahmet, Ayşe **Hanım**, **Mareşal** Fevzi Çakmak"],
             ["**Gezegen ve yıldız adları**", "Terim olarak kullanılıyorsa büyük",
              "**Dünya**, **Güneş**, **Ay** (gezegen anlamında)"],
             ["**Yön adları**", "**Özel ad olarak** kullanılıyorsa büyük",
              "**Doğu** Anadolu; ama \"güneye gitti\" küçük"],
         ],
         "oranlar": [0.24, 0.36, 0.40]},
        {"tur": "dikkat", "baslik": "Büyük Harfte Sık Yapılan Hatalar", "ogeler": [
            "**Ay ve gün adları**, belirli bir tarihle birlikte kullanılırsa **büyük**, "
            "yalnız kullanılırsa **küçük** yazılır: \"**5 Mayıs 2026**\" ama \"gelecek "
            "**mayıs** ayında\".",
            "**Dil ve millet adları daima büyük** yazılır: \"**Türkçe**\", "
            "\"**İngilizce**\", \"**Türk**\".",
            "**Yön adları**, bir yer adının parçasıysa **büyük**, yalnızca yön "
            "bildiriyorsa **küçük**: \"**Batı** Avrupa\" ama \"batıya doğru\".",
            "**Dünya, Güneş, Ay** sözcükleri **gezegen ve gök cismi** anlamındaysa "
            "büyük; **günlük anlamda** kullanılıyorsa küçük yazılır: \"**Ay** "
            "Dünya'nın uydusudur\" ama \"bu ay çok yoruldum\".",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kesme İşareti"},
        {"tur": "gorsel", "baslik": "Şema 1 — Kesme işareti nerede kullanılır?",
         "aciklama": "Tek kural yeter: **özel adlara gelen ÇEKİM ekleri** kesmeyle "
                     "ayrılır; **yapım ekleri ayrılmaz**. Bu ayrım, kesme işareti "
                     "sorularının tamamını çözer.",
         "ciz": S.karsilastirma(
             "KESME İŞARETİ KULLANILIR",
             ["**Özel adlara gelen çekim ekleri**",
              "Ankara'**da**, Ahmet'**in**, Türkiye'**ye**",
              "**Kısaltmalara gelen ekler**",
              "TBMM'**nin**, TDK'**dan**",
              "**Sayılara gelen ekler**",
              "1923'**te**, 5'**inci**"],
             "KESME İŞARETİ KULLANILMAZ",
             ["**Özel adlara gelen yapım ekleri**",
              "Türk**çe**, Ankara**lı**, Avrupa**lı**",
              "**Kurum adlarına gelen ekler**",
              "Türk Dil Kurumu**na**",
              "**Özel addan türeyen sözcükler**",
              "Müslüman**lık**, Atatürk**çü**"],
             "Sınama",
             ["**\"Bu ek yeni sözcük türetti mi?\"**",
              "Türettiyse **yapım eki** → kesme **yok**",
              "Türetmediyse **çekim eki** → kesme **var**"])},
        {"tur": "tuzak", "baslik": "Kurum Adlarında Kesme Kullanılmaz", "govde":
            "**\"Türk Dil Kurumuna\", \"Millî Eğitim Bakanlığında\", \"Ankara "
            "Üniversitesinden\"** — kurum, kuruluş ve organizasyon adlarına gelen "
            "ekler **kesmeyle ayrılmaz**. Bu, en sık yapılan hatalardan biridir. "
            "Buna karşılık **kişi ve yer adlarına** gelen ekler **daima kesmeyle** "
            "ayrılır: \"Ankara'da\", \"Ahmet'in\"."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "\"de\", \"ki\", \"mi\" Yazımı"},
        {"tur": "tablo",
         "basliklar": ["Sözcük", "Ayrı yazılırsa", "Bitişik yazılırsa"],
         "satirlar": [
             ["**de / da**",
              "**Bağlaçtır**; \"dahi, bile\" anlamı taşır. Çıkarılınca cümle anlamlı "
              "kalır. **Asla \"te\" olmaz**",
              "**Bulunma hâli ekidir**; \"nerede?\" sorusuna cevap verir. "
              "**Sertleşebilir**: kitap**ta**"],
             ["**ki**",
              "**Bağlaçtır**; iki cümleyi bağlar. \"Duydum **ki**...\"",
              "**Yapım eki ya da ilgi zamiridir**: akşam**ki**, benim**ki**"],
             ["**mi / mı**",
              "**Daima ayrı yazılır**; soru eki ya da başka bir anlam katıcı olsun "
              "fark etmez",
              "**Bitişik yazılmaz**; ama kendinden **sonraki eke bitişir**: "
              "\"Güzel **mi**ymiş?\""],
         ],
         "oranlar": [0.16, 0.42, 0.42]},
        {"tur": "taktik", "baslik": "\"de\" Sınamasının Üç Adımı", "govde":
            "**1)** \"de\"yi cümleden **çıkar**; cümle anlamlı kalıyorsa **bağlaçtır**, "
            "ayrı yazılır. **2)** Yerine **\"dahi\" ya da \"bile\"** koyabiliyorsan "
            "**bağlaçtır**. **3)** Sözcük **\"te\" olarak sertleşiyorsa** kesinlikle "
            "**ektir**, bitişik yazılır. Üç sınama da aynı sonucu verir; biri yeterlidir."},
        {"tur": "cozum",
         "baslik": "de / ki / mi Yazımı",
         "soru": "Aşağıdaki cümlelerdeki yazım hatalarını bulup düzeltiniz.\n"
                 "**I.** \"Sen de mi bizimle geliyorsun?\"\n"
                 "**II.** \"Bende bu kitabı okudum.\"\n"
                 "**III.** \"Duydumki memleketine dönmüşsün.\"\n"
                 "**IV.** \"Akşam ki filmi izledin mi?\"",
         "adimlar": [
             "**I.** \"de\" çıkarılınca cümle anlamlı → **bağlaç**, **ayrı** yazılmış → "
             "**doğru**. \"mi\" de ayrı → **doğru**.",
             "**II.** \"Bende\" bitişik yazılmış ama \"dahi\" anlamı var → **bağlaç** "
             "→ **\"Ben de\"** olmalı → **hata**.",
             "**III.** \"ki\" bağlaç, iki cümleyi bağlıyor → **ayrı** yazılmalı → "
             "**\"Duydum ki\"** → **hata**.",
             "**IV.** \"Akşamki\" bir sıfat yapıyor → **bitişik** yazılmalı → "
             "**\"Akşamki\"** → **hata**.",
         ],
         "sonuc": "**I doğru**; **II, III ve IV hatalıdır**. Doğru biçimler: "
                  "\"**Ben de**\", \"**Duydum ki**\", \"**Akşamki**\"."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Ayrı ve Bitişik Yazım"},
        {"tur": "tablo",
         "basliklar": ["Durum", "Yazım", "Örnek"],
         "satirlar": [
             ["**Anlam kaymışsa**", "**Bitişik**",
              "**hanımeli** (bitki), **aslanağzı** (çiçek), **imambayıldı** (yemek)"],
             ["**Ses düşmesi varsa**", "**Bitişik**",
              "**kahvaltı** (kahve+altı), **cumartesi** (cuma+ertesi), **nasıl** (ne+asıl)"],
             ["**Yardımcı fiille kurulanlar**", "Ses olayı **varsa bitişik**, **yoksa ayrı**",
              "**kaybolmak**, **hissetmek** (bitişik); **yardım etmek**, **not almak** (ayrı)"],
             ["**Pekiştirilmiş sözcükler**", "**Bitişik**", "**bembeyaz**, **kıpkırmızı**"],
             ["**İkilemeler**", "**Ayrı**", "**yavaş yavaş**, **eciş bücüş**"],
             ["**Sayılar**", "Her sayı **ayrı** yazılır",
              "**yirmi beş**, **iki yüz elli** (\"yirmibeş\" yanlış)"],
         ],
         "oranlar": [0.26, 0.24, 0.50]},
        {"tur": "dikkat", "baslik": "Sayıların Yazımı", "ogeler": [
            "**Metin içinde sayılar yazıyla** yazılır: \"**Sınıfta yirmi beş öğrenci "
            "var**.\"",
            "**Her sayı ayrı yazılır**: \"**iki yüz elli beş**\" (ikiyüzellibeş "
            "yanlıştır).",
            "**Para, ölçü ve istatistik anlatan sayılar rakamla** yazılabilir: "
            "\"**250 TL**\", \"**5 kg**\".",
            "**Sıra sayıları** ya yazıyla ya **nokta ile** yazılır: \"**beşinci**\" "
            "ya da \"**5.**\"; \"5'inci\" biçimi de doğrudur.",
            "**Üleştirme sayıları daima yazıyla**: \"**ikişer**\", \"**beşer**\" "
            "(2'şer yanlıştır).",
        ]},
        {"tur": "tuzak", "baslik": "Yardımcı Fiillerde Ses Olayı Kontrolü", "govde":
            "**\"etmek, olmak, eylemek\"** yardımcı fiilleriyle kurulan birleşik "
            "fiiller, **ses düşmesi ya da türemesi varsa bitişik**, **yoksa ayrı** "
            "yazılır. \"**his** + etmek\" → \"hiss**et**mek\" (ünsüz türemesi) → "
            "**bitişik**. \"**kayıp** + olmak\" → \"kay**bol**mak\" (ünlü düşmesi) → "
            "**bitişik**. Ama \"**yardım etmek**\", \"**not almak**\" → ses olayı yok "
            "→ **ayrı**."},
        {"tur": "cozum",
         "baslik": "Ayrı-Bitişik Yazım",
         "soru": "Aşağıdaki sözcüklerin yazımını denetleyiniz: "
                 "**kahvaltı · yardım etmek · hissetmek · yirmibeş · yavaşyavaş**",
         "adimlar": [
             "**kahvaltı**: kahve + altı, **ünlü düşmesi** var → **bitişik doğru**.",
             "**yardım etmek**: ses olayı **yok** → **ayrı doğru**.",
             "**hissetmek**: his + etmek, **ünsüz türemesi** var → **bitişik doğru**.",
             "**yirmibeş**: sayılar **ayrı** yazılır → **\"yirmi beş\"** olmalı → "
             "**hata**.",
             "**yavaşyavaş**: ikilemeler **ayrı** yazılır → **\"yavaş yavaş\"** olmalı "
             "→ **hata**.",
         ],
         "sonuc": "**Kahvaltı, yardım etmek ve hissetmek doğru**; **yirmibeş ve "
                  "yavaşyavaş hatalıdır**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Kısaltmalarda nokta**: küçük harfli kısaltmalarda **nokta konur** "
            "(**Dr., Prof., vb.**); büyük harfli kısaltmalarda **konmaz** "
            "(**TBMM, TDK, ABD**).",
            "**Kısaltmalara gelen ekler okunuşa göre** yazılır: **TDK'den** değil "
            "**TDK'den** (te-de-ka), **TBMM'nin**.",
            "**Düzeltme işareti (^)** anlam karışıklığını önlemek için kullanılır: "
            "**kâr** (kazanç) / **kar** (yağan); **âlem** (dünya) / **alem** (bayrak).",
            "**\"Bugün, bu gün\"** ikisi de vardır ama anlamları farklıdır: "
            "\"**bugün**\" (içinde bulunduğumuz gün), \"**bu gün**\" (belirli bir gün).",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Özel adlara gelen çekim ekleri kesmeyle**, **yapım ekleri kesmesiz**.",
            "**Kurum adlarına gelen ekler kesmeyle ayrılmaz.**",
            "**Bağlaç \"de\" ayrı**, **hâl eki \"de\" bitişik**.",
            "**Bağlaç \"de\" asla \"te\" olmaz.**",
            "**Bağlaç \"ki\" ayrı**, **yapım eki \"-ki\" bitişik**.",
            "**Soru eki \"mi\" daima ayrı** yazılır.",
            "**Anlam kaymışsa ya da ses düşmesi varsa bitişik** yazılır.",
            "**Yardımcı fiilde ses olayı varsa bitişik, yoksa ayrı**.",
            "**Her sayı ayrı yazılır**: \"yirmi beş\".",
            "**İkilemeler ayrı** yazılır.",
            "**Ay ve gün adları tarihle birlikteyse büyük**, yalnızsa küçük.",
            "**Büyük harfli kısaltmalarda nokta yoktur.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her kural için **kendi örneğini yaz**. Yazım kuralları "
            "yalnızca okuyarak öğrenilmez; **yazarak** pekişir. Özellikle de/ki/mi "
            "üçlüsünü her gün birkaç cümlede kullan.",
        "satir_sayisi": 2,
        "sorular": [
            "Büyük harfle başlayan altı durumu yazınız.",
            "Kitap adlarının yazımını örnekle açıklayınız.",
            "Unvanların yazımını örnekle açıklayınız.",
            "Ay ve gün adlarının yazımını iki örnekle açıklayınız.",
            "Dil ve millet adlarının yazımını yazınız.",
            "Yön adlarının hangi durumda büyük harfle yazıldığını örnekle açıklayınız.",
            "'Dünya, Güneş, Ay' sözcüklerinin yazımını iki durum için açıklayınız.",
            "Kesme işaretinin kullanıldığı üç durumu yazınız.",
            "Kesme işaretinin kullanılmadığı üç durumu yazınız.",
            "Kesme işareti için kullanılan sınamayı yazınız.",
            "Özel adlara gelen yapım eklerinin yazımını örnekle açıklayınız.",
            "Kurum adlarına gelen eklerin yazımını örnekle açıklayınız.",
            "Kısaltmalara gelen eklerin yazımını örnekle açıklayınız.",
            "Sayılara gelen eklerin yazımını örnekle açıklayınız.",
            "Bağlaç olan 'de'nin yazımını ve anlamını yazınız.",
            "Hâl eki olan 'de'nin yazımını ve işlevini yazınız.",
            "'de' için kullanılan üç sınamayı yazınız.",
            "Bağlaç olan 'de'nin neden sertleşmediğini açıklayınız.",
            "Bağlaç olan 'ki'nin yazımını örnekle yazınız.",
            "Yapım eki olan '-ki'nin yazımını örnekle yazınız.",
            "İlgi zamiri olan '-ki'nin yazımını örnekle yazınız.",
            "Soru eki 'mi'nin yazım kuralını yazınız.",
            "'mi' ekinin kendinden sonraki eke bitişmesini örnekle açıklayınız.",
            "'Sen de mi bizimle geliyorsun?' cümlesindeki yazımları denetleyiniz.",
            "'Bende bu kitabı okudum' cümlesindeki hatayı düzeltiniz.",
            "'Duydumki memleketine dönmüşsün' cümlesindeki hatayı düzeltiniz.",
            "'Akşam ki filmi izledin mi?' cümlesindeki hatayı düzeltiniz.",
            "Anlam kaymasıyla oluşan birleşik sözcüklerin yazımını üç örnekle yazınız.",
            "Ses düşmesiyle oluşan birleşik sözcüklerin yazımını üç örnekle yazınız.",
            "Yardımcı fiillerle kurulan birleşik fiillerin yazım kuralını yazınız.",
            "'Hissetmek' sözcüğünün bitişik yazılma nedenini açıklayınız.",
            "'Kaybolmak' sözcüğünün bitişik yazılma nedenini açıklayınız.",
            "'Yardım etmek' ifadesinin ayrı yazılma nedenini açıklayınız.",
            "Pekiştirilmiş sözcüklerin yazımını iki örnekle yazınız.",
            "İkilemelerin yazımını iki örnekle yazınız.",
            "Sayıların metin içindeki yazımını yazınız.",
            "'Yirmibeş' yazımındaki hatayı düzeltiniz.",
            "Para ve ölçü bildiren sayıların yazımını yazınız.",
            "Sıra sayılarının yazımını üç biçimde gösteriniz.",
            "Üleştirme sayılarının yazımını örnekle yazınız.",
            "Küçük harfli kısaltmalarda noktanın durumunu örnekle yazınız.",
            "Büyük harfli kısaltmalarda noktanın durumunu örnekle yazınız.",
            "Düzeltme işaretinin kullanım amacını örnekle açıklayınız.",
            "'kâr' ve 'kar' sözcüklerinin farkını yazınız.",
            "'Bugün' ve 'bu gün' yazımlarının farkını açıklayınız.",
            "'kahvaltı, yardım etmek, hissetmek, yirmibeş, yavaşyavaş' yazımlarını denetleyiniz.",
            "Kendi kurduğunuz bir cümlede bağlaç 'de' ile hâl eki 'de'yi birlikte kullanınız.",
            "Kendi kurduğunuz bir cümlede bağlaç 'ki' ile yapım eki '-ki'yi birlikte kullanınız.",
            "Kesme işaretinin doğru ve yanlış kullanıldığı ikişer örnek yazınız.",
            "Yazım kurallarını öğrenmek için önerdiğiniz çalışma yöntemini yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Cümle başı**, **özel adlar**, **kitap ve yazı adları**, **unvanlar**, **gezegen ve yıldız adları**, **özel ad olan yön adları**.",
            "**Her sözcük büyük harfle** başlar (bağlaçlar hariç): **Kürk Mantolu Madonna**, **Çalıkuşu**.",
            "Kişi adından **önce ya da sonra** gelen unvanlar büyük yazılır: **Doktor** Ahmet, Ayşe **Hanım**.",
            "Belirli bir tarihle birlikteyse **büyük**: \"**5 Mayıs 2026**\". Yalnız kullanılıyorsa **küçük**: \"gelecek **mayıs**\".",
            "**Daima büyük** yazılır: **Türkçe**, **İngilizce**, **Türk**, **Alman**.",
            "Bir **yer adının parçasıysa büyük**: \"**Doğu** Anadolu\". Yalnızca yön bildiriyorsa **küçük**: \"doğuya gitti\".",
            "**Gök cismi anlamındaysa büyük**: \"**Ay**, **Dünya**'nın uydusudur.\" **Günlük anlamdaysa küçük**: \"Bu **ay** çok yoruldum.\"",
            "**Özel adlara gelen çekim ekleri** (Ankara'da), **kısaltmalara gelen ekler** (TDK'nin), **sayılara gelen ekler** (1923'te).",
            "**Özel adlara gelen yapım ekleri** (Türkçe), **kurum adlarına gelen ekler** (Türk Dil Kurumuna), **özel addan türeyen sözcükler** (Atatürkçü).",
            "**\"Bu ek yeni bir sözcük türetti mi?\"** Türettiyse **yapım eki** → kesme yok. Türetmediyse **çekim eki** → kesme var.",
            "**Kesmeyle ayrılmaz**: **Türkçe**, **Ankaralı**, **Avrupalı**, **Müslümanlık**.",
            "**Kesmeyle ayrılmaz**: **Türk Dil Kurumuna**, **Millî Eğitim Bakanlığında**.",
            "**Kesmeyle ayrılır** ve **okunuşa göre** yazılır: **TBMM'nin**, **TDK'den**.",
            "**Kesmeyle ayrılır**: **1923'te**, **5'inci**, **2026'da**.",
            "**Ayrı yazılır** ve **\"dahi, bile\"** anlamı taşır: \"Ben **de** geldim.\"",
            "**Bitişik yazılır** ve **bulunma** bildirir: \"Ev**de** kaldım.\"",
            "**1)** Çıkarma sınaması. **2)** \"Dahi/bile\" sınaması. **3)** Sertleşme sınaması.",
            "Bağlaç **ayrı bir sözcüktür**, ek değildir. Ünsüz benzeşmesi kuralı **eklere** uygulanır; ayrı yazılan bağlaç bu kurala girmez.",
            "**Ayrı yazılır**: \"Duydum **ki** gelmiş.\"",
            "**Bitişik yazılır**: \"akşam**ki** film\", \"dün**kü** yağmur\".",
            "**Bitişik yazılır**: \"Benim**ki** daha güzel.\"",
            "**Daima ayrı yazılır**; soru anlamı katsın katmasın fark etmez.",
            "\"Güzel **mi**ymiş?\" — \"mi\" ayrı yazılır ama kendinden sonraki ek ona bitişir.",
            "\"de\" bağlaç olarak **ayrı** yazılmış → doğru. \"mi\" soru eki **ayrı** yazılmış → doğru. **Cümlede yazım hatası yoktur.**",
            "\"Bende\" bitişik yazılmış ama **\"dahi\" anlamı** var → bağlaçtır. Düzeltme: **\"Ben de\"**.",
            "\"ki\" iki cümleyi bağlıyor → bağlaçtır. Düzeltme: **\"Duydum ki\"**.",
            "\"Akşamki\" bir sıfat yapıyor → yapım ekidir. Düzeltme: **\"Akşamki\"** (bitişik).",
            "**Bitişik yazılır**: **hanımeli**, **aslanağzı**, **imambayıldı**.",
            "**Bitişik yazılır**: **kahvaltı** (kahve+altı), **cumartesi** (cuma+ertesi), **nasıl** (ne+asıl).",
            "**Ses olayı varsa bitişik**, **yoksa ayrı** yazılır.",
            "\"his + etmek\" → **ünsüz türemesi** (ss) var → **bitişik**.",
            "\"kayıp + olmak\" → **ünlü düşmesi** (ı düşmüş) var → **bitişik**.",
            "\"yardım\" ve \"etmek\" birleşirken **hiçbir ses olayı olmaz** → **ayrı** yazılır.",
            "**Bitişik**: **bembeyaz**, **kıpkırmızı**.",
            "**Ayrı**: **yavaş yavaş**, **eciş bücüş**.",
            "**Yazıyla** yazılır: \"Sınıfta **yirmi beş** öğrenci var.\"",
            "Sayılar **ayrı** yazılır. Düzeltme: **\"yirmi beş\"**.",
            "**Rakamla** yazılabilir: **250 TL**, **5 kg**, **%30**.",
            "**beşinci**, **5.**, **5'inci** — üçü de doğrudur.",
            "**Daima yazıyla**: **ikişer**, **beşer** (2'şer yanlıştır).",
            "**Nokta konur**: **Dr.**, **Prof.**, **vb.**, **sf.**",
            "**Nokta konmaz**: **TBMM**, **TDK**, **ABD**, **MEB**.",
            "**Anlam karışıklığını önlemek** ve **uzun okunuşu göstermek** için kullanılır: **kâr**, **âlem**, **hâlâ**.",
            "**kâr**: kazanç. **kar**: gökten yağan. Düzeltme işareti anlamı ayırır.",
            "**\"Bugün\"**: içinde bulunduğumuz gün. **\"Bu gün\"**: sözü edilen belirli bir gün (\"bu gün de geçti\").",
            "**kahvaltı** (doğru, ünlü düşmesi), **yardım etmek** (doğru, ses olayı yok), **hissetmek** (doğru, ünsüz türemesi), **yirmibeş** (yanlış → yirmi beş), **yavaşyavaş** (yanlış → yavaş yavaş).",
            "\"Ben **de** okul**da** çok çalıştım.\" — birincisi bağlaç (ayrı), ikincisi hâl eki (bitişik).",
            "\"Duydum **ki** dün**kü** toplantı iptal olmuş.\" — birincisi bağlaç (ayrı), ikincisi yapım eki (bitişik).",
            "**Doğru**: \"Ankara'**da** yaşıyorum.\", \"Ahmet'**in** kitabı.\" **Yanlış**: \"Türk'**çe** öğreniyorum.\" (doğrusu Türkçe), \"Türk Dil Kurumu'**na**\" (doğrusu Kurumuna).",
            "**Her gün birkaç cümle yazmak** ve yazdıklarını **kurallara göre denetlemek**. Özellikle de/ki/mi üçlüsünü ve kesme işaretini içeren cümleler kurup sınamaları uygulamak en etkili yöntemdir.",
        ],
    },
}
