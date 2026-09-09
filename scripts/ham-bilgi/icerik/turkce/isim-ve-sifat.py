"""TYT Türkçe — İsim ve Sıfat (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: İSİM VE SIFAT",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "İsim ve Sıfat",
    "alt_baslik": "Ham bilgi notu — isim çeşitleri, isim çekim ekleri, sıfat türleri ve "
                  "adlaşmış sıfat; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "İsim ve Sıfat",
        "kazanimlar": "İsimleri özelliklerine göre sınıflandırır. "
                      "İsim çekim eklerini tanır. "
                      "Sıfatları niteleme ve belirtme yönünden ayırt eder. "
                      "Adlaşmış sıfatı tanır.",
        "kapsam": "Varlıklara verilişine göre (özel-cins), varlıkların oluşuna göre "
                  "(somut-soyut), sayısına göre (tekil-çoğul-topluluk) isimler; isim "
                  "çekim ekleri; niteleme ve belirtme sıfatları; işaret, sayı, belgisiz "
                  "ve soru sıfatları; adlaşmış sıfat; 50 analiz sorusu",
        "nasil": "İsim ve sıfat, **birbirinden ayrı düşünülemez**: sıfat ancak bir "
                 "ismin **önünde** varlık kazanır. Bu yüzden her sıfat sorusunda "
                 "**hemen sonrasında isim var mı** diye bak; yoksa o sözcük sıfat "
                 "değildir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **sıfat türü belirleme**, "
                    "**adlaşmış sıfat** ya da **isim tamlaması ile karıştırma** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "İsim Çeşitleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — İsimleri üç ölçütle sınıflandırma",
         "aciklama": "Bir isim, **üç ölçütün üçüne göre birden** sınıflandırılır. "
                     "\"Ankara\" hem özel, hem somut, hem tekildir.",
         "ciz": S.dikey_akis(
             ["Varlıklara verilişine göre", "Varlıkların oluşuna göre", "Sayısına göre"],
             ["**Özel isim**: tek bir varlığa verilir, **büyük harfle** başlar "
              "(Ankara, Ahmet, Türkçe). **Cins isim**: aynı türden bütün varlıkları "
              "karşılar (kent, insan, dil).",
              "**Somut isim**: beş duyuyla algılanır (taş, koku, ses). "
              "**Soyut isim**: algılanamaz, yalnızca düşünülür (sevgi, akıl, özlem).",
              "**Tekil isim**: bir varlığı karşılar (kitap). **Çoğul isim**: birden çok "
              "varlığı karşılar (kitaplar). **Topluluk ismi**: tekil göründüğü hâlde "
              "**çokluk** anlatır (ordu, sürü, sınıf, orman)."])},
        {"tur": "tuzak", "baslik": "Topluluk İsmi Çoğul Değildir", "govde":
            "**\"Ordu, sürü, sınıf, orman, takım, meclis\"** gibi sözcükler **tekil "
            "biçimlidir** ama **çokluk anlatır**; bunlara **topluluk ismi** denir. "
            "Çoğul eki almadıkları için çoğul isim sayılmazlar. Ayrıca topluluk "
            "isimleri de **çoğul eki alabilir**: \"ordu**lar**\", \"sınıf**lar**\" — "
            "bu durumda birden çok topluluk anlatılır."},
        {"tur": "tablo",
         "basliklar": ["İsim çekim eki", "İşlevi", "Örnek"],
         "satirlar": [
             ["**Çokluk eki (-ler, -lar)**", "Sayı bildirir", "kitap**lar**, ev**ler**"],
             ["**İyelik ekleri**", "**Sahiplik** bildirir",
              "kitab**ım**, kitab**ın**, kitab**ı**, kitab**ımız**"],
             ["**Hâl ekleri**", "İsmin cümledeki **görevini** belirler",
              "**Yalın**: ev. **Belirtme**: ev**i**. **Yönelme**: ev**e**. "
              "**Bulunma**: ev**de**. **Ayrılma**: ev**den**"],
             ["**Tamlayan eki (-in)**", "Belirtili isim tamlamasında tamlayana gelir",
              "kapı**nın** kolu"],
             ["**İlgi eki (-ki)**", "İlgi zamiri kurar", "benim**ki**, sen**inki**"],
         ],
         "oranlar": [0.24, 0.28, 0.48]},
        {"tur": "dikkat", "baslik": "Özel İsimlerin Yazımı", "ogeler": [
            "**Özel isimler daima büyük harfle** başlar ve **ekleri kesme işaretiyle** "
            "ayrılır: \"Ankara'**da**\", \"Ahmet'**in**\".",
            "**Yapım ekleri kesmeyle ayrılmaz**: \"Türk**çe**\", \"Ankara**lı**\", "
            "\"Avrupa**lı**\".",
            "**Kurum adlarına gelen ekler kesmeyle ayrılmaz**: \"Türk Dil Kurumu**na**\".",
            "**Özel isim cins isim gibi kullanılırsa küçük harfle** yazılır: \"Bir "
            "**edison** olmak isterdi\" (dâhi anlamında).",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Sıfatlar"},
        {"tur": "gorsel", "baslik": "Şema 2 — Sıfatın iki büyük dalı",
         "aciklama": "Bir sıfat ya ismin **nasıl olduğunu** söyler (niteleme) ya da "
                     "**hangisi, kaç tanesi olduğunu** söyler (belirtme). Ayrım için "
                     "sorulacak soru bellidir.",
         "ciz": S.karsilastirma(
             "NİTELEME sıfatı",
             ["İsmin **nasıl olduğunu** bildirir",
              "**\"Nasıl?\"** sorusuna cevap verir",
              "Varlığın **özelliğini** anlatır",
              "**güzel** ev, **kırmızı** kalem",
              "**Yalnızca niteleme sıfatı adlaşabilir**"],
             "BELİRTME sıfatı",
             ["İsmi **belirtir, işaret eder, sayar**",
              "**Hangi, kaç, ne kadar** sorularına cevap verir",
              "Dört türü vardır",
              "**bu** ev, **üç** kalem, **bazı** insanlar",
              "**Adlaşamaz**"],
             "Dört belirtme sıfatı",
             ["**İşaret**: bu, şu, o, öteki",
              "**Sayı**: üç, birinci, yarım, ikişer",
              "**Belgisiz**: bazı, birkaç, her, hiçbir",
              "**Soru**: hangi, kaç, nasıl, ne"])},
        {"tur": "tablo",
         "basliklar": ["Sayı sıfatı türü", "Ne bildirir", "Örnek"],
         "satirlar": [
             ["**Asıl sayı sıfatı**", "Kesin sayı", "**üç** kalem, **on** kişi"],
             ["**Sıra sayı sıfatı**", "Sıra bildirir", "**birinci** sınıf, **son** gün"],
             ["**Üleştirme sıfatı**", "Paylaştırma bildirir", "**ikişer** elma, **üçer** kitap"],
             ["**Kesir sayı sıfatı**", "Kesir bildirir", "**yarım** ekmek, **çeyrek** saat"],
         ],
         "oranlar": [0.26, 0.26, 0.48]},
        {"tur": "taktik", "baslik": "Sıfat mı Zamir mi? Sonrasına Bak", "govde":
            "**Sıfat daima bir ismin önünde bulunur.** \"**Bu** kitap\" → sonrasında "
            "isim var → **sıfat**. \"**Bunu** aldım\" → sonrasında isim yok, kendisi "
            "ismin yerini tutuyor → **zamir**. Aynı kural \"kaç, hangi, bazı, her\" "
            "için de geçerlidir: **isimle birlikteyse sıfat, tek başınaysa zamirdir**."},
        {"tur": "cozum",
         "baslik": "Sıfat Türü Belirleme",
         "soru": "Aşağıdaki cümlelerde altı çizili sözcüklerin sıfat türünü "
                 "belirleyiniz.\n"
                 "**I.** \"**Yorgun** işçiler eve döndü.\"\n"
                 "**II.** \"**Bu** soruyu çözemedim.\"\n"
                 "**III.** \"**Birkaç** öğrenci geç kaldı.\"\n"
                 "**IV.** \"**Kaçıncı** katta oturuyorsun?\"\n"
                 "**V.** \"Herkese **ikişer** kitap verildi.\"",
         "adimlar": [
             "**I.** \"İşçiler nasıl?\" → **yorgun** → **niteleme sıfatı**.",
             "**II.** \"Hangi soru?\" → **bu** → **işaret sıfatı**.",
             "**III.** \"Kaç öğrenci?\" belirsiz → **belgisiz sıfat**.",
             "**IV.** Soru soruyor ve ismi belirtiyor → **soru sıfatı**.",
             "**V.** Paylaştırma bildiriyor → **üleştirme (sayı) sıfatı**.",
         ],
         "sonuc": "**I: niteleme**, **II: işaret**, **III: belgisiz**, **IV: soru**, "
                  "**V: üleştirme sayı** sıfatıdır. Ayrım için sorulan soru her "
                  "seferinde farklıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Adlaşmış Sıfat"},
        {"tur": "tanim", "kavram": "Adlaşmış sıfat",
         "aciklama": "**Niteleme sıfatının, nitelediği isim düşünce isim gibi "
                     "kullanılmasıdır.** \"**Yaşlı insanlar** öne otursun\" cümlesinde "
                     "\"insanlar\" düşerse \"**Yaşlılar** öne otursun\" olur; "
                     "\"yaşlılar\" artık **isim görevindedir**."},
        {"tur": "gorsel", "baslik": "Şema 3 — Adlaşmış sıfatı tanıma",
         "aciklama": "Adlaşmış sıfat, cümlede **isim gibi davranır**: özne, nesne ya "
                     "da tümleç olabilir; **çekim eki alabilir**. Ama kökeninde bir "
                     "**niteleme sıfatı** vardır.",
         "ciz": S.akis(
             ["Niteleme sıfatı bul", "Nitelediği isim var mı?", "İsim düşmüş mü?",
              "Adlaşmış sıfat"],
             ["**\"nasıl?\"** sorusuna\ncevap veren sözcük",
              "sonrasında **isim**\naranıyor", "isim yok ama\n**anlam korunuyor**",
              "sıfat artık\n**isim görevinde**"])},
        {"tur": "tuzak", "baslik": "Her İsimleşen Sözcük Adlaşmış Sıfat Değildir",
         "govde": "Adlaşmış sıfat olması için sözcüğün **niteleme sıfatı** olması "
                  "gerekir. **Belirtme sıfatları adlaşmaz**; onlar isimsiz "
                  "kullanıldığında **zamir** olur. \"**Bu** güzel\" → \"bu\" bir işaret "
                  "sıfatıydı, isimsiz kullanılınca **işaret zamiri** oldu, adlaşmış "
                  "sıfat değil. **Ölçüt: kökeni niteleme sıfatı mı?**"},
        {"tur": "cozum",
         "baslik": "Adlaşmış Sıfat Bulma",
         "soru": "Aşağıdaki cümlelerde adlaşmış sıfat var mıdır?\n"
                 "**I.** \"Küçükler önde, büyükler arkada yürüsün.\"\n"
                 "**II.** \"Bunu kim yaptı?\"\n"
                 "**III.** \"Akıllı, sözünü bilir.\"",
         "adimlar": [
             "**I.** \"Küçük\" ve \"büyük\" **niteleme sıfatıdır**; \"çocuklar\" ismi "
             "düşmüş → **adlaşmış sıfat var**.",
             "**II.** \"Bunu\" bir **işaret sıfatından** gelir; isimsiz kullanılınca "
             "**zamir** olur → **adlaşmış sıfat yok**.",
             "**III.** \"Akıllı\" niteleme sıfatıdır, \"insan\" ismi düşmüş → "
             "**adlaşmış sıfat var**.",
         ],
         "sonuc": "**I ve III'te adlaşmış sıfat vardır**, **II'de yoktur**. "
                  "Ayrım, sözcüğün **niteleme sıfatı mı belirtme sıfatı mı** "
                  "olduğuna dayanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Sıfatlarda Pekiştirme ve Küçültme"},
        {"tur": "tablo",
         "basliklar": ["Yapı", "Nasıl oluşur", "Örnek"],
         "satirlar": [
             ["**Pekiştirilmiş sıfat**",
              "Sıfatın **ilk ünlüsüne kadar** olan kısım alınır, **m, p, r, s** "
              "harflerinden biri eklenir ve sıfatın başına getirilir",
              "**bem**beyaz, **kıp**kırmızı, **sim**siyah, **yem**yeşil"],
             ["**İkileme ile pekiştirme**",
              "Sıfat **yinelenir** ya da yakın anlamlısıyla kullanılır",
              "**uzun uzun** yollar, **irili ufaklı** taşlar"],
             ["**Küçültme sıfatı**",
              "**-cik, -cek, -imsi, -imtırak** ekleriyle yapılır",
              "**küçücük** ev, **sarımsı** renk, **yeşilimtırak** yaprak"],
             ["**Unvan sıfatı**",
              "İsimden **önce ya da sonra** gelen unvanlar",
              "**Doktor** Ahmet, Ayşe **Hanım**, **Öğretmen** Ali"],
         ],
         "oranlar": [0.24, 0.38, 0.38]},
        {"tur": "dikkat", "baslik": "Sıfatların Sıralanışı", "ogeler": [
            "Bir isim **birden çok sıfat** alabilir: \"**bu üç güzel** kitap\".",
            "Sıralanışta genellikle **belirtme sıfatı önce**, **niteleme sıfatı sonra** "
            "gelir: \"**bu** (işaret) **güzel** (niteleme) ev\".",
            "**Sıfat tamlamasında tamlanan daima isimdir**; sıfat tamlayandır.",
            "**Sıfat tamlaması ek almaz**; ek alan kısım tamlanan isimdir: "
            "\"güzel ev**ler**\" → \"-ler\" eki **eve** aittir, sıfata değil.",
        ]},
        {"tur": "cozum",
         "baslik": "Sıfat Tamlaması Çözümleme",
         "soru": "\"**Bu iki eski kitabı raftan aldım.**\" cümlesindeki sıfat "
                 "tamlamasını çözümleyiniz.",
         "adimlar": [
             "**Tamlanan (isim)**: \"kitap\".",
             "**Sıfatlar**: \"bu\" (işaret sıfatı), \"iki\" (asıl sayı sıfatı), "
             "\"eski\" (niteleme sıfatı).",
             "**Sıralanış**: işaret → sayı → niteleme; Türkçenin olağan sırası budur.",
             "**Ek**: \"-ı\" belirtme hâli eki **kitaba** gelmiştir, sıfatlara değil.",
         ],
         "sonuc": "Tamlama **üç sıfat + bir isim** biçimindedir: \"bu iki eski kitap\". "
                  "Bir isim, **birden çok sıfatla** nitelenebilir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Özel isimler büyük harfle** başlar, **çekim ekleri kesmeyle** ayrılır.",
            "**Yapım ekleri kesmeyle ayrılmaz** (Türkçe, Ankaralı).",
            "**Topluluk ismi tekil biçimlidir**, **çokluk anlatır** (ordu, sürü).",
            "**Niteleme sıfatı \"nasıl?\"**, **belirtme sıfatı \"hangi, kaç?\"** "
            "sorularına cevap verir.",
            "**Belirtme sıfatları dörttür**: işaret, sayı, belgisiz, soru.",
            "**Sayı sıfatları**: asıl, sıra, üleştirme, kesir.",
            "**Sıfat daima ismin önünde** bulunur; yoksa zamirdir.",
            "**Yalnızca niteleme sıfatı adlaşır.**",
            "**Belirtme sıfatı isimsiz kullanılırsa zamir olur**, adlaşmış sıfat değil.",
            "**Pekiştirmede m, p, r, s** harfleri kullanılır.",
            "**Sıfat tamlamasında ek, tamlanan isme gelir.**",
            "Bir isim **birden çok sıfat** alabilir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her sıfat sorusunda **hangi soruyu sorduğunu** yaz: "
            "\"nasıl?\" mı, \"hangi?\" mi, \"kaç?\" mı? Soruyu adlandırmak, sıfat "
            "türünü doğrudan verir. Adlaşmış sıfat sorularında ise **kökeni niteleme "
            "sıfatı mı** diye kontrol et.",
        "satir_sayisi": 2,
        "sorular": [
            "İsimleri üç ölçüte göre sınıflandırınız.",
            "Özel ve cins ismi ayırt ederek üçer örnek veriniz.",
            "Somut ve soyut ismi ayırt ederek üçer örnek veriniz.",
            "Tekil, çoğul ve topluluk ismini örneklerle açıklayınız.",
            "Topluluk isminin çoğul isimden farkını yazınız.",
            "Topluluk isimlerinin çoğul eki alıp alamayacağını örnekle açıklayınız.",
            "İsim çekim eklerini sıralayınız.",
            "Hâl eklerini örnekleriyle yazınız.",
            "İyelik eklerini örnekle yazınız.",
            "Özel isimlerin yazımına ilişkin kuralı yazınız.",
            "Özel isme gelen yapım ekinin yazımını örnekle açıklayınız.",
            "Kurum adlarına gelen eklerin yazımını yazınız.",
            "Özel ismin cins isim gibi kullanıldığı bir örnek veriniz.",
            "Sıfatın tanımını yaparak iki büyük dalını yazınız.",
            "Niteleme sıfatının sorusunu ve işlevini yazınız.",
            "Belirtme sıfatının dört türünü yazınız.",
            "İşaret sıfatına üç örnek veriniz.",
            "Belgisiz sıfata üç örnek veriniz.",
            "Soru sıfatına üç örnek veriniz.",
            "Sayı sıfatının dört türünü örnekleriyle yazınız.",
            "Asıl sayı sıfatını örnekle yazınız.",
            "Sıra sayı sıfatını örnekle yazınız.",
            "Üleştirme sıfatını örnekle yazınız.",
            "Kesir sayı sıfatını örnekle yazınız.",
            "Sıfat ile zamiri ayıran ölçütü yazınız.",
            "'Bu kitap' ve 'bunu aldım' örneklerini tür bakımından karşılaştırınız.",
            "'Yorgun işçiler eve döndü' cümlesindeki sıfatın türünü belirleyiniz.",
            "'Birkaç öğrenci geç kaldı' cümlesindeki sıfatın türünü belirleyiniz.",
            "'Kaçıncı katta oturuyorsun?' cümlesindeki sıfatın türünü belirleyiniz.",
            "'Herkese ikişer kitap verildi' cümlesindeki sıfatın türünü belirleyiniz.",
            "Adlaşmış sıfatı tanımlayınız.",
            "Adlaşmış sıfatın nasıl oluştuğunu bir örnekle gösteriniz.",
            "Hangi tür sıfatların adlaşabildiğini yazınız.",
            "Belirtme sıfatı isimsiz kullanılırsa ne olur?",
            "'Küçükler önde, büyükler arkada yürüsün' cümlesinde adlaşmış sıfat var mıdır?",
            "'Bunu kim yaptı?' cümlesinde adlaşmış sıfat var mıdır? Nedenini yazınız.",
            "'Akıllı, sözünü bilir' cümlesinde adlaşmış sıfat var mıdır?",
            "Pekiştirilmiş sıfatın nasıl yapıldığını yazınız.",
            "Pekiştirmede kullanılan harfleri yazınız.",
            "Dört pekiştirilmiş sıfat örneği yazınız.",
            "İkileme yoluyla pekiştirmeye iki örnek veriniz.",
            "Küçültme sıfatını yapan ekleri örnekleriyle yazınız.",
            "Unvan sıfatını tanımlayarak iki örnek veriniz.",
            "Bir ismin birden çok sıfat alıp alamayacağını örnekle açıklayınız.",
            "Sıfatların sıralanış düzenini yazınız.",
            "Sıfat tamlamasında tamlayan ve tamlananın türlerini yazınız.",
            "Sıfat tamlamasında ekin hangi kısma geldiğini örnekle açıklayınız.",
            "'Bu iki eski kitabı raftan aldım' cümlesindeki sıfat tamlamasını çözümleyiniz.",
            "'Güzel evler' tamlamasında '-ler' ekinin hangi sözcüğe ait olduğunu yazınız.",
            "Kendi kurduğunuz bir cümlede dört farklı sıfat türünü kullanınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**1)** Varlıklara verilişine göre (özel-cins). **2)** Varlıkların oluşuna göre (somut-soyut). **3)** Sayısına göre (tekil-çoğul-topluluk).",
            "**Özel**: tek bir varlığa verilir, büyük harfle başlar — **Ankara, Ahmet, Türkçe**. **Cins**: aynı türden bütün varlıkları karşılar — **kent, insan, dil**.",
            "**Somut**: beş duyuyla algılanır — **taş, koku, ses**. **Soyut**: algılanamaz — **sevgi, akıl, özlem**.",
            "**Tekil**: bir varlığı karşılar (kitap). **Çoğul**: çokluk eki almıştır (kitaplar). **Topluluk**: tekil biçimli ama çokluk anlatır (ordu, sürü, sınıf).",
            "**Çoğul isim çokluk eki almıştır**; **topluluk ismi ek almadan** çokluk anlatır.",
            "**Alabilirler**: \"ordu**lar**\", \"sınıf**lar**\". Bu durumda **birden çok topluluk** anlatılır.",
            "**Çokluk eki**, **iyelik ekleri**, **hâl ekleri**, **tamlayan eki**, **ilgi eki**.",
            "**Yalın**: ev. **Belirtme**: evi. **Yönelme**: eve. **Bulunma**: evde. **Ayrılma**: evden.",
            "**-m, -n, -ı, -mız, -nız, -ları**: kitab**ım**, kitab**ın**, kitab**ı**.",
            "**Büyük harfle** başlar ve **çekim ekleri kesme işaretiyle** ayrılır: \"Ankara'**da**\".",
            "**Kesmeyle ayrılmaz**: \"Türk**çe**\", \"Ankara**lı**\", \"Avrupa**lı**\".",
            "**Kesmeyle ayrılmaz**: \"Türk Dil Kurumu**na**\", \"Millî Eğitim Bakanlığı**nda**\".",
            "\"Bir **edison** olmak isterdi.\" — dâhi anlamında cins isim gibi kullanılmış, **küçük harfle** yazılmıştır.",
            "İsmi **niteleyen ya da belirten** sözcüklerdir. İki dalı: **niteleme** ve **belirtme** sıfatları.",
            "**\"Nasıl?\"** sorusuna cevap verir; ismin **özelliğini, nasıl olduğunu** bildirir.",
            "**İşaret, sayı, belgisiz, soru** sıfatları.",
            "**bu, şu, o** (ayrıca öteki, beriki).",
            "**bazı, birkaç, her** (ayrıca hiçbir, bütün, tüm).",
            "**hangi, kaç, nasıl** (ayrıca ne, kaçıncı).",
            "**Asıl**: üç kalem. **Sıra**: birinci sınıf. **Üleştirme**: ikişer elma. **Kesir**: yarım ekmek.",
            "Kesin sayı bildirir: \"**on** kişi geldi.\"",
            "Sıra bildirir: \"**üçüncü** sırada oturuyor.\"",
            "Paylaştırma bildirir: \"Herkese **üçer** kitap düştü.\"",
            "Kesir bildirir: \"**Çeyrek** saat bekledi.\"",
            "**Sıfat daima bir ismin önünde bulunur**; sonrasında isim yoksa o sözcük **zamirdir**.",
            "**\"Bu kitap\"**: sonrasında isim var → **işaret sıfatı**. **\"Bunu aldım\"**: isim yok, ismin yerini tutuyor → **işaret zamiri**.",
            "\"İşçiler nasıl?\" → **niteleme sıfatı**.",
            "\"Kaç öğrenci?\" belirsiz → **belgisiz sıfat**.",
            "Soru soruyor ve ismi belirtiyor → **soru sıfatı**.",
            "Paylaştırma bildiriyor → **üleştirme sayı sıfatı**.",
            "**Niteleme sıfatının, nitelediği isim düşünce isim gibi kullanılmasıdır.**",
            "\"**Yaşlı insanlar** öne otursun\" → \"insanlar\" düşer → \"**Yaşlılar** öne otursun\". \"Yaşlılar\" artık isim görevindedir.",
            "**Yalnızca niteleme sıfatları** adlaşabilir.",
            "**Zamir** olur; adlaşmış sıfat değildir.",
            "**Vardır**; \"küçük\" ve \"büyük\" niteleme sıfatlarıdır, \"çocuklar\" ismi düşmüştür.",
            "**Yoktur**; \"bunu\" bir **işaret sıfatından** gelir ve isimsiz kullanıldığında **zamir** olur.",
            "**Vardır**; \"akıllı\" niteleme sıfatıdır, \"insan\" ismi düşmüştür.",
            "Sıfatın **ilk ünlüsüne kadar** olan kısım alınır, **m, p, r, s** harflerinden biri eklenir ve sıfatın başına getirilir.",
            "**m, p, r, s**.",
            "**bem**beyaz, **kıp**kırmızı, **sim**siyah, **yem**yeşil.",
            "\"**uzun uzun** yollar\", \"**irili ufaklı** taşlar\".",
            "**-cik** (küçücük), **-imsi** (sarımsı), **-imtırak** (yeşilimtırak), **-cek** (büyücek).",
            "İsimden **önce ya da sonra** gelerek kişiyi niteleyen sıfatlardır: **Doktor** Ahmet, Ayşe **Hanım**.",
            "**Alabilir**: \"**bu üç güzel** kitap\" — bir isim üç sıfatla nitelenmiştir.",
            "Genellikle **belirtme sıfatı önce**, **niteleme sıfatı sonra** gelir: \"**bu** (işaret) **güzel** (niteleme) ev\".",
            "**Tamlayan sıfattır**, **tamlanan daima isimdir**.",
            "**Tamlanan isme** gelir: \"güzel ev**ler**\" → \"-ler\" eki **eve** aittir, \"güzel\"e değil.",
            "**Tamlanan**: kitap. **Sıfatlar**: bu (işaret), iki (asıl sayı), eski (niteleme). **Ek**: \"-ı\" belirtme hâli eki kitaba gelmiştir.",
            "**\"Ev\"** sözcüğüne aittir; sıfat olan \"güzel\" ek almaz.",
            "\"**Şu** (işaret) **iki** (sayı) **eski** (niteleme) **hangi** kitaptı?\" — ya da: \"**Bazı** (belgisiz) **genç** (niteleme) öğrenciler **üçer** (üleştirme) soru çözdü.\"",
        ],
    },
}
