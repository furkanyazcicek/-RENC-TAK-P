"""AYT Biyoloji — Sindirim Sistemi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: SİNDİRİM SİSTEMİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Sindirim Sistemi",
    "alt_baslik": "Ham bilgi notu — sindirim organları, enzimler, karaciğer ve pankreas, "
                  "emilim ve düzenleyici hormonlar; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Sindirim Sistemi",
        "kazanimlar": "11.2.2.1 — Sindirim sisteminin yapı ve görevlerini açıklar. "
                      "11.2.2.2 — Besinlerin sindirimini enzimlerle ilişkilendirir. "
                      "11.2.2.3 — Emilimi ve emilen maddelerin taşınmasını açıklar. "
                      "11.2.2.4 — Sindirim sistemi rahatsızlıklarını açıklar.",
        "kapsam": "Mekanik ve kimyasal sindirim, ağız–yutak–yemek borusu, mide, ince "
                  "bağırsak, kalın bağırsak, karaciğer ve safra, pankreas öz suyu, "
                  "enzim tabloları, villus ve emilim, sindirim hormonları, "
                  "rahatsızlıklar, 45 analiz sorusu",
        "nasil": "Bu konunun bel kemiği **enzim–substrat–ürün** üçlüsüdür. Her enzimi "
                 "\"nerede salgılanır, neyi parçalar, neye çevirir\" biçiminde üç "
                 "sütunlu yaz; sınav sorusu bu üçlünün birini gizler.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de sindirimden gelen soru çoğunlukla **hangi enzim nerede "
                    "çalışır** ya da **emilen madde hangi damarla taşınır** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Sindirimin Anlamı"},
        {"tur": "tanim", "kavram": "Sindirim",
         "aciklama": "Büyük besin moleküllerinin, **hücre zarından geçebilecek** kadar "
                     "küçük yapı taşlarına parçalanmasıdır. Amaç yalnızca küçültmek "
                     "değil, **emilebilir hâle getirmektir**."},
        {"tur": "gorsel", "baslik": "Şema 1 — İki sindirim türü",
         "aciklama": "Mekanik sindirim **yüzey alanını artırır**, böylece kimyasal "
                     "sindirimi **hızlandırır**. İkisi birbirinin alternatifi değil, "
                     "tamamlayıcısıdır.",
         "ciz": S.karsilastirma(
             "Mekanik (fiziksel) sindirim",
             ["Besin **küçük parçalara** ayrılır",
              "**Kimyasal yapı değişmez**",
              "**Enzim kullanılmaz**",
              "Çiğneme, mide kasılmaları, safranın yağı damlacıklara ayırması",
              "Yüzey alanını **artırır**"],
             "Kimyasal sindirim",
             ["Besin **yapı taşlarına** ayrılır",
              "**Kimyasal yapı değişir**",
              "**Enzim gereklidir**",
              "Nişasta → glikoz, protein → amino asit",
              "**Hidroliz** tepkimesidir, su harcanır"],
             "Ortak nokta",
             ["İkisi de sindirim kanalında olur",
              "İkisi de **emilimi kolaylaştırır**",
              "Genellikle **birlikte** yürür"])},
        {"tur": "dikkat", "baslik": "Hangi Besinler Sindirilmez?", "govde":
            "**Su, mineraller, vitaminler** ve **glikoz gibi monomerler** zaten yeterince "
            "küçüktür; **sindirilmeden doğrudan emilir**. \"Bütün besinler sindirilir\" "
            "ifadesi yanlıştır. **Selüloz** ise insanda sindirilemez; enzimi yoktur, "
            "ancak bağırsak hareketlerini düzenlediği için gereklidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Ağızdan Mideye"},
        {"tur": "tablo",
         "basliklar": ["Organ", "Mekanik sindirim", "Kimyasal sindirim"],
         "satirlar": [
             ["**Ağız**", "**Çiğneme** ve dilin karıştırması",
              "**Tükürük amilazı (pityalin)**: nişasta → **maltoz**. Ortam **hafif bazik**"],
             ["**Yutak – yemek borusu**", "**Peristaltik** (dalga) hareketler",
              "**Yoktur**; yalnızca iletim görevi vardır"],
             ["**Mide**", "Güçlü **kas kasılmaları**, besinin **kimusa** dönüşmesi",
              "**Pepsin**: protein → **peptit**. **Renin** (bebekte): sütü pıhtılaştırır. "
              "**Mide lipazı**: az miktarda yağ. Ortam **asidik (HCl)**"],
         ],
         "oranlar": [0.20, 0.30, 0.50]},
        {"tur": "maddeler", "ogeler": [
            "**HCl (mide asidi)**, pepsinojeni **etkin pepsine** çevirir, mikropları "
            "öldürür ve proteinleri **denatüre** eder. Mide pH'ı yaklaşık **2**'dir.",
            "Enzimlerin **etkin olmayan hâlde** salgılanmasının (pepsinojen, tripsinojen) "
            "nedeni, **salgılandığı hücreyi sindirmemeleridir**.",
            "Mide iç yüzeyini **mukus** korur; mukus tabakası zedelenirse **ülser** "
            "gelişir.",
            "**Yutak**, hava ve besin yollarının **kesiştiği** yerdir. Yutkunma sırasında "
            "**küçük dil (epiglottis)** soluk borusunu kapatır.",
            "Yemek borusundaki hareket **peristaltik**tir; bu yüzden baş aşağı duran bir "
            "insan da yutkunabilir. **Yer çekimi gerekmez**.",
        ]},
        {"tur": "tuzak", "baslik": "Midede Karbonhidrat Sindirimi Sürmez", "govde":
            "Tükürük amilazı **bazik ortamda** çalışır. Besin mideye geçip **asidik** "
            "ortamla karşılaşınca amilaz **etkisiz hâle gelir**. Bu yüzden midede "
            "karbonhidrat sindirimi **durur**; yalnızca **protein** sindirimi başlar."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "İnce Bağırsak, Karaciğer ve Pankreas"},
        {"tur": "gorsel", "baslik": "Şema 3 — Sindirim enzimlerinin pH aralıkları",
         "aciklama": "Her enzimin **en iyi çalıştığı bir pH değeri** vardır; bu değerden "
                     "uzaklaştıkça etkinlik düşer ve enzim sonunda **denatüre olur**. "
                     "Tükürük amilazının midede durmasının ve pankreas enzimlerinin "
                     "bazik ortam istemesinin nedeni budur.",
         "ciz": S.grafik("pH (asidik → bazik)", "Enzim etkinliği", [
             ("Pepsin (mide)", [(0.04, 0.06), (0.10, 0.44), (0.16, 0.88),
                                (0.24, 0.50), (0.34, 0.10), (0.44, 0.02)], S.TEHLIKE),
             ("Amilaz (ağız)", [(0.28, 0.04), (0.40, 0.42), (0.50, 0.82),
                                (0.60, 0.44), (0.72, 0.06)], S.MARKA),
             ("Tripsin (bağırsak)", [(0.52, 0.04), (0.64, 0.40), (0.76, 0.86),
                                     (0.86, 0.48), (0.96, 0.08)], S.BASARI),
         ], gosterge="sag-ust", yukseklik=52.0)},
        {"tur": "tanim", "kavram": "İnce bağırsak",
         "aciklama": "Sindirimin **tamamlandığı** ve emilimin **neredeyse tamamının** "
                     "gerçekleştiği organdır. İlk bölümü **on iki parmak bağırsağı "
                     "(duodenum)**'dur; safra ve pankreas öz suyu buraya dökülür."},
        {"tur": "tablo",
         "basliklar": ["Salgı", "Kaynağı", "İçeriği ve görevi"],
         "satirlar": [
             ["**Safra**", "**Karaciğer** üretir, **safra kesesi** depolar",
              "**Enzim içermez**. Yağları **damlacıklara ayırır** (mekanik sindirim = "
              "emülsifikasyon) ve mideden gelen **asidi nötrleştirir**"],
             ["**Pankreas öz suyu**", "Pankreasın **dış salgı** bölümü",
              "**Pankreas amilazı** (nişasta → maltoz), **tripsin** (protein → peptit), "
              "**lipaz** (yağ → yağ asidi + gliserol), **NaHCO_3** (asidi nötrler)"],
             ["**Bağırsak öz suyu**", "İnce bağırsak çeperi",
              "**Maltaz, laktaz, sükraz** (disakkarit → monosakkarit), **erepsin** "
              "(peptit → amino asit)"],
         ],
         "oranlar": [0.20, 0.24, 0.56]},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç besinin sindirim yolu",
         "aciklama": "Üç besin grubunun da sindirimi **ince bağırsakta biter**. "
                     "Karbonhidrat **ağızda**, protein **midede**, **yağ ise yalnızca "
                     "ince bağırsakta** sindirilmeye başlar — bu ayrım sınavda çok sorulur.",
         "ciz": S.sayi_dogrusu(satirlar=[
             ("Karbonhidrat",
              [(0.06, "Ağız"), (0.34, "Mide"), (0.62, "İnce bağırsak"), (0.92, "Kalın b.")],
              [(0.06, 0.30, "kapali-acik", S.MARKA, "ağızda başlar"),
               (0.46, 0.78, "acik-kapali", S.MARKA, "burada biter")]),
             ("Protein",
              [(0.06, "Ağız"), (0.34, "Mide"), (0.62, "İnce bağırsak"), (0.92, "Kalın b.")],
              [(0.26, 0.78, "kapali", S.BILGI, "midede başlar, ince bağırsakta biter")]),
             ("Yağ",
              [(0.06, "Ağız"), (0.34, "Mide"), (0.62, "İnce bağırsak"), (0.92, "Kalın b.")],
              [(0.50, 0.78, "kapali", S.BASARI, "yalnızca ince bağırsakta")]),
         ], alt_not="Kalın bağırsakta hiçbir besinin kimyasal sindirimi yapılmaz.")},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Karaciğerin görevleri**: safra üretimi, kan şekerini düzenleme "
            "(glikojen depolama), **amonyağı üreye** çevirme, ilaç ve zehirleri "
            "etkisizleştirme, A-D-E-K vitaminleri ve demir depolama, plazma "
            "proteinlerini (albümin, fibrinojen) üretme, embriyoda **kan hücresi** "
            "üretme.",
            "**Safra enzim içermez**; bu yüzden kimyasal değil **mekanik** sindirim "
            "yapar. Yağı küçük damlacıklara ayırarak lipazın çalışacağı **yüzeyi "
            "artırır**.",
            "Safra kesesi alınan bir kişide safra üretimi sürer; yalnızca **depolama** "
            "yapılamaz, bu yüzden yağlı yiyecekler zor hazmedilir.",
            "Pankreas öz suyu ve safra, mideden gelen asidik kimusu **nötrleştirir**; "
            "çünkü bağırsak enzimleri **bazik ortamda** çalışır.",
        ]},
        {"tur": "cikmis", "baslik": "Enzim Sorusunun Klasik Kurgusu", "govde":
            "Bir soruda \"safra kanalı tıkanan hastada hangi besinin sindirimi "
            "aksar\" diye sorulur. Cevap **yağdır** — ama dikkat: safra **enzim "
            "içermediği** için kimyasal sindirim değil, **yüzey artışı** aksar. "
            "Lipaz yine salgılanır, sadece verimi düşer. Ayrıca **A, D, E, K** "
            "vitaminlerinin emilimi de bozulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Emilim"},
        {"tur": "tanim", "kavram": "Villus (tümür)",
         "aciklama": "İnce bağırsak iç yüzeyindeki **parmaksı çıkıntılardır**. Her "
                     "villusun içinde bir **kılcal kan damarı ağı** ve bir **lenf "
                     "kılcalı (kilüs damarı)** bulunur. Villuslar emilim **yüzeyini "
                     "yüzlerce kat** artırır."},
        {"tur": "gorsel", "baslik": "Şema 4 — Emilen madde nereye gider?",
         "aciklama": "Bu ayrım AYT'de doğrudan sorulur: **suda çözünenler kana**, "
                     "**yağda çözünenler lenfe** geçer. Kana geçen her şey önce "
                     "**kapı toplardamarıyla karaciğere** uğrar.",
         "ciz": S.karsilastirma(
             "KANA emilenler",
             ["**Glikoz** ve diğer monosakkaritler",
              "**Amino asitler**",
              "**Su**, **mineraller**",
              "**Suda çözünen vitaminler** (B, C)",
              "Yol: kılcal damar → **kapı toplardamarı** → **karaciğer** → kalp"],
             "LENFE emilenler",
             ["**Yağ asidi** ve **gliserol**",
              "**Yağda çözünen vitaminler** (A, D, E, K)",
              "Villustaki **kilüs damarına** geçer",
              "Yol: lenf damarları → **peke sarnıcı** → **göğüs lenf kanalı** → "
              "**köprücük altı toplardamarı** → kalp",
              "**Karaciğere uğramaz**"])},
        {"tur": "maddeler", "ogeler": [
            "**Ağızda emilim yoktur** (bazı ilaçlar dışında). **Midede** su, alkol ve "
            "bazı ilaçlar emilir. **Asıl emilim ince bağırsaktadır.**",
            "**Kalın bağırsakta** su, mineral ve bakterilerin ürettiği **K vitamini** "
            "ile bazı **B vitaminleri** emilir. Kimyasal sindirim **yoktur**.",
            "Emilim yalnızca difüzyonla olmaz; **glikoz ve amino asit** çoğunlukla "
            "**aktif taşımayla** emilir, yani **ATP harcanır**.",
            "Kalın bağırsak suyu fazla emerse **kabızlık**, az emerse **ishal** olur.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Hormon", "Salgılandığı yer", "Görevi"],
         "satirlar": [
             ["**Gastrin**", "Mide", "**Mide öz suyu** salgısını artırır"],
             ["**Sekretin**", "On iki parmak bağırsağı",
              "Pankreastan **bikarbonatlı** (bazik) sıvı salgılatır; asidi nötrler"],
             ["**Kolesistokinin (CCK)**", "On iki parmak bağırsağı",
              "**Safra kesesini kastırır** ve pankreastan **enzim** salgılatır"],
         ],
         "oranlar": [0.26, 0.28, 0.46]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Rahatsızlıklar"},
        {"tur": "tablo",
         "basliklar": ["Rahatsızlık", "Nedeni", "Sonucu"],
         "satirlar": [
             ["**Ülser**", "Mide/on iki parmak mukusunun zedelenmesi; **H. pylori** "
              "bakterisi, stres, ilaçlar", "Mide duvarında yara, ağrı, kanama"],
             ["**Reflü**", "Mide ile yemek borusu arasındaki kapağın gevşemesi",
              "Asidin yemek borusuna kaçması, göğüste yanma"],
             ["**Safra taşı**", "Safranın içeriğindeki kolesterolün kristalleşmesi",
              "Kanal tıkanırsa **yağ sindirimi** ve **A, D, E, K** emilimi bozulur"],
             ["**Laktoz intoleransı**", "**Laktaz** enziminin yetersizliği",
              "Süt şekeri sindirilemez; gaz, şişkinlik, ishal"],
             ["**Çölyak**", "**Glutene** karşı bağışıklık tepkisi",
              "Villuslar körelir, **emilim bozukluğu** ve gelişme geriliği"],
             ["**Apandisit**", "Kör bağırsak uzantısının iltihaplanması",
              "Şiddetli karın ağrısı; cerrahi gerekir"],
         ],
         "oranlar": [0.22, 0.40, 0.38]},
        {"tur": "cozum",
         "baslik": "Emilim Yolu Kurma",
         "soru": "Bir öğün sonrası kanda **glikoz** ve lenfte **yağ asidi** artıyor. "
                 "Bu iki maddenin izlediği yolları karşılaştırınız ve neden farklı "
                 "yollar izlediklerini açıklayınız.",
         "adimlar": [
             "**Glikoz suda çözünür**; villustaki **kılcal kan damarına** emilir.",
             "Kılcal damarlar birleşerek **kapı toplardamarını** oluşturur; kan önce "
             "**karaciğere** uğrar. Karaciğer fazla glikozu **glikojen** olarak depolar.",
             "**Yağ asidi ve gliserol** suda çözünmez; villus hücresinde yeniden yağa "
             "dönüşür ve **lenf kılcalına (kilüs)** geçer.",
             "Lenf damarları → **peke sarnıcı** → **göğüs lenf kanalı** → **köprücük "
             "altı toplardamarı**. Yani yağ kana **kalbe yakın bir yerden** karışır ve "
             "**karaciğere uğramadan** dolaşıma girer.",
         ],
         "sonuc": "Fark **çözünürlükten** doğar: suda çözünen kana, yağda çözünen lenfe "
                  "emilir; bu yüzden yağ karaciğer denetiminden geçmeden dolaşıma katılır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Su, mineral, vitamin ve monomerler sindirilmez**, doğrudan emilir.",
            "**Selüloz insanda sindirilemez** ama bağırsak hareketleri için gereklidir.",
            "Karbonhidrat **ağızda**, protein **midede**, yağ **ince bağırsakta** başlar.",
            "**Üçünün de sindirimi ince bağırsakta biter.**",
            "**Midede karbonhidrat sindirimi durur** (asit amilazı bozar).",
            "**Safra enzim içermez**; yağa **mekanik** sindirim yapar.",
            "**Yemek borusunda kimyasal sindirim yoktur.**",
            "**Kalın bağırsakta kimyasal sindirim yoktur**; su, mineral ve K vitamini emilir.",
            "**Suda çözünenler kana**, **yağda çözünenler lenfe** emilir.",
            "Kana emilen her şey önce **kapı toplardamarıyla karaciğere** uğrar.",
            "Enzimler **etkisiz hâlde** salgılanır ki salgılandığı hücreyi sindirmesin.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde enzim ve emilim soruları ağırlıktadır. Her enzim sorusunda "
            "**nerede – neyi – neye** üçlüsünü, her emilim sorusunda **suda mı yağda "
            "mı çözünür** sorusunu kendine sor. Bu iki alışkanlık soruların çoğunu "
            "tek adımda çözer.",
        "satir_sayisi": 2,
        "sorular": [
            "Sindirimin amacını 'küçültme' kavramının ötesine geçerek tanımlayınız.",
            "Mekanik ve kimyasal sindirimi enzim kullanımı ve yapı değişikliği bakımından karşılaştırınız.",
            "Mekanik sindirimin kimyasal sindirime katkısını açıklayınız.",
            "Sindirilmeden emilen dört madde grubunu yazınız.",
            "İnsanda selülozun sindirilememesinin nedenini ve buna rağmen neden tüketilmesi gerektiğini açıklayınız.",
            "Ağızda gerçekleşen mekanik ve kimyasal sindirimi yazınız.",
            "Tükürük amilazının etkilediği besini ve oluşturduğu ürünü yazınız.",
            "Yemek borusunda kimyasal sindirim olmamasının nedenini açıklayınız.",
            "Peristaltik hareketin baş aşağı yutkunmayı mümkün kılmasını açıklayınız.",
            "Yutkunma sırasında soluk borusunun nasıl korunduğunu yazınız.",
            "HCl'nin midedeki üç görevini yazınız.",
            "Pepsinojenin etkisiz hâlde salgılanmasının nedenini açıklayınız.",
            "Midede karbonhidrat sindiriminin durmasının nedenini açıklayınız.",
            "Renin enziminin görevini ve hangi dönemde etkili olduğunu yazınız.",
            "Mide duvarının kendini sindirmesini engelleyen yapıyı ve bozulmasının sonucunu yazınız.",
            "İnce bağırsağın sindirim ve emilimdeki iki temel rolünü yazınız.",
            "On iki parmak bağırsağına dökülen iki salgıyı kaynaklarıyla yazınız.",
            "Safranın içeriğini ve yağ üzerindeki etkisini açıklayınız.",
            "'Safra yağı kimyasal olarak sindirir' ifadesindeki hatayı düzeltiniz.",
            "Pankreas öz suyundaki üç enzimi etkiledikleri besinlerle eşleştiriniz.",
            "Pankreas öz suyundaki bikarbonatın görevini açıklayınız.",
            "Bağırsak öz suyundaki enzimleri ve ürünlerini yazınız.",
            "Karaciğerin altı görevini yazınız.",
            "Karaciğerin amonyakla ilgili görevini ve önemini açıklayınız.",
            "Safra kesesi alınan bir kişide sindirimin nasıl etkileneceğini açıklayınız.",
            "Safra kanalı tıkanan bir hastada hangi besinin sindiriminin ve hangi vitaminlerin emiliminin aksayacağını yazınız.",
            "Karbonhidrat, protein ve yağın sindiriminin başladığı organları yazınız.",
            "Üç besin grubunun sindiriminin nerede tamamlandığını yazınız.",
            "Villusun yapısını ve emilimdeki işlevini açıklayınız.",
            "Villusun içindeki iki damar yapısını ve taşıdıkları maddeleri yazınız.",
            "Kana emilen maddeleri sıralayınız.",
            "Lenfe emilen maddeleri sıralayınız.",
            "Kana emilen maddelerin izlediği yolu karaciğere kadar yazınız.",
            "Lenfe emilen yağların dolaşıma katıldığı noktayı yazınız.",
            "Yağların karaciğere uğramadan dolaşıma katılmasının nedenini açıklayınız.",
            "Emilimin ağız, mide, ince bağırsak ve kalın bağırsaktaki durumunu karşılaştırınız.",
            "Kalın bağırsakta emilen maddeleri yazınız ve kimyasal sindirim olup olmadığını belirtiniz.",
            "Glikoz ve amino asit emiliminde ATP harcanmasının nedenini açıklayınız.",
            "Kabızlık ve ishalin kalın bağırsaktaki su emilimiyle ilişkisini açıklayınız.",
            "Gastrin, sekretin ve kolesistokinin hormonlarının görevlerini yazınız.",
            "Yağlı bir öğün sonrası hangi hormonun devreye gireceğini gerekçesiyle yazınız.",
            "Ülserin nedenlerini ve mukusla ilişkisini açıklayınız.",
            "Laktoz intoleransının enzim temelini yazınız.",
            "Çölyak hastalığında emilimin bozulmasının yapısal nedenini açıklayınız.",
            "Reflünün nedenini ve belirtisini yazınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Sindirim, besinleri **hücre zarından geçebilecek** yapı taşlarına ayırmaktır. Amaç yalnızca küçültmek değil, **emilebilir ve hücrede kullanılabilir** hâle getirmektir.",
            "**Mekanik**: enzim yok, kimyasal yapı değişmez, parçalar küçülür. **Kimyasal**: enzim var, yapı değişir, monomerler oluşur (hidroliz).",
            "Besini küçük parçalara ayırarak enzimlerin etki edeceği **yüzey alanını artırır**; böylece kimyasal sindirim **hızlanır**.",
            "**Su**, **mineraller**, **vitaminler** ve **monomerler** (glikoz, amino asit, yağ asidi gibi hazır yapı taşları).",
            "İnsanda **selülaz enzimi yoktur**. Yine de selüloz bağırsak duvarını uyararak **peristaltik hareketleri** artırır ve dışkının kıvamını düzenler.",
            "**Mekanik**: çiğneme ve dilin karıştırması. **Kimyasal**: tükürük amilazıyla **nişastanın maltoza** parçalanması.",
            "**Nişastayı** etkiler, **maltoz** oluşturur. Hafif bazik ortamda çalışır.",
            "Yemek borusunda **enzim salgılanmaz**; görevi yalnızca besini peristaltik hareketlerle mideye **iletmektir**.",
            "Peristaltik hareket, kasların **dalga hâlinde** kasılıp gevşemesidir; besini iterek ilerletir. Bu yüzden **yer çekimine gerek yoktur**.",
            "**Küçük dil (epiglottis)** soluk borusunun girişini kapatır; besin yemek borusuna yönlendirilir.",
            "**Pepsinojeni pepsine çevirir**, besinle gelen **mikropları öldürür**, proteinleri **denatüre ederek** enzimin işini kolaylaştırır.",
            "Etkin hâlde salgılansaydı **salgılandığı hücrenin proteinlerini sindirirdi**. Bu yüzden etkisiz salgılanır, mide boşluğunda HCl ile etkinleşir.",
            "Tükürük amilazı **bazik ortamda** çalışır; midenin **asidik** ortamı enzimi bozar (denatüre eder). Bu yüzden nişasta sindirimi durur.",
            "**Sütü pıhtılaştırarak** midede kalma süresini uzatır ve pepsinin etkisini artırır. Özellikle **bebeklik** döneminde etkilidir.",
            "**Mukus** tabakası korur. Zedelenirse mide asidi kendi duvarını aşındırır ve **ülser** oluşur.",
            "**Sindirim burada tamamlanır** ve besinlerin **emiliminin neredeyse tamamı** burada gerçekleşir.",
            "**Safra** (karaciğerde üretilir, safra kesesinde depolanır) ve **pankreas öz suyu** (pankreasın dış salgı bölümünden).",
            "Safra **su, safra tuzları, kolesterol ve pigment** içerir; **enzim içermez**. Yağı **küçük damlacıklara ayırarak** (emülsifikasyon) lipazın çalışacağı yüzeyi artırır.",
            "Safra **enzim içermez**; yaptığı iş **mekanik** sindirimdir. Yağın kimyasal sindirimini **lipaz** yapar.",
            "**Pankreas amilazı**: nişasta → maltoz. **Tripsin**: protein → peptit. **Lipaz**: yağ → yağ asidi + gliserol.",
            "**NaHCO_3**, mideden gelen **asidik kimusu nötrleştirir**. Bağırsak enzimleri bazik ortamda çalıştığı için bu şarttır.",
            "**Maltaz, laktaz, sükraz** disakkaritleri **monosakkaritlere**; **erepsin** peptitleri **amino asitlere** çevirir.",
            "**Safra üretimi**, **kan şekeri düzenlenmesi** (glikojen), **amonyağın üreye çevrilmesi**, **zehir ve ilaçların etkisizleştirilmesi**, **A-D-E-K ve demir depolanması**, **plazma proteinlerinin üretimi**.",
            "Amino asitlerin yıkımından çıkan **zehirli amonyağı**, daha az zehirli olan **üreye** çevirir. Üre böbrekle atılır; bu dönüşüm olmasaydı amonyak birikir ve öldürücü olurdu.",
            "Safra **üretilmeye devam eder** ama **depolanamaz**; sürekli az miktarda bağırsağa akar. Bir öğünde çok yağ alındığında yeterli safra bulunamaz ve **yağ sindirimi zorlaşır**.",
            "**Yağın** sindirimi aksar; ayrıca yağda çözünen **A, D, E, K** vitaminlerinin emilimi bozulur.",
            "**Karbonhidrat ağızda**, **protein midede**, **yağ ince bağırsakta** sindirilmeye başlar.",
            "Üçünün de sindirimi **ince bağırsakta** tamamlanır.",
            "İnce bağırsak iç yüzeyindeki **parmaksı çıkıntılardır**. Emilim **yüzeyini yüzlerce kat artırır**; içlerinde kılcal damar ve lenf kılcalı bulunur.",
            "**Kılcal kan damarı** (glikoz, amino asit, su, mineral, B ve C vitamini) ve **lenf kılcalı / kilüs damarı** (yağ asidi, gliserol, A-D-E-K vitaminleri).",
            "**Glikoz ve monosakkaritler**, **amino asitler**, **su**, **mineraller**, **suda çözünen vitaminler (B, C)**.",
            "**Yağ asidi ve gliserol**, **yağda çözünen vitaminler (A, D, E, K)**.",
            "Villustaki kılcal damar → toplardamarlar → **kapı toplardamarı** → **karaciğer**. Karaciğer kanı denetler, sonra kan kalbe gider.",
            "Lenf damarları → **peke sarnıcı** → **göğüs lenf kanalı** → **sol köprücük altı toplardamarı**. Yağ dolaşıma kalbe yakın bir yerden katılır.",
            "Yağlar **suda çözünmediği** için kılcal kan damarına doğrudan geçemez; **lenf yolunu** izler. Lenf, kana kalbe yakın noktadan karıştığı için **karaciğer denetiminden geçmez**.",
            "**Ağızda** emilim yok denecek kadar azdır. **Midede** su, alkol ve bazı ilaçlar emilir. **İnce bağırsakta** asıl emilim olur. **Kalın bağırsakta** su, mineral ve bazı vitaminler emilir.",
            "**Su**, **mineraller**, bakterilerin ürettiği **K vitamini** ve bazı **B vitaminleri** emilir. **Kimyasal sindirim yoktur**.",
            "Bu maddeler bağırsakta kandan **daha düşük** derişimde bulunabilir; derişime **ters yönde** taşındıkları için taşıyıcı proteinler ve **ATP** gerekir.",
            "Su fazla emilirse dışkı sertleşir → **kabızlık**. Su az emilirse dışkı sulu kalır → **ishal**.",
            "**Gastrin**: mide öz suyu salgısını artırır. **Sekretin**: pankreastan bikarbonatlı bazik sıvı salgılatır. **Kolesistokinin**: safra kesesini kastırır ve pankreastan enzim salgılatır.",
            "**Kolesistokinin (CCK)**. Yağ, on iki parmak bağırsağına ulaşınca CCK salgılanır; safra kesesi kasılır ve pankreastan lipaz salgılanır.",
            "Mide duvarını koruyan **mukus tabakasının zedelenmesidir**. Nedenleri **H. pylori** bakterisi, uzun süreli stres ve bazı ağrı kesicilerdir.",
            "**Laktaz** enziminin yetersiz salgılanmasıdır. Laktoz sindirilemez, kalın bağırsakta bakterilerce fermente edilir; gaz, şişkinlik ve ishal oluşur.",
            "Glutene karşı gelişen bağışıklık tepkisi ince bağırsaktaki **villusları köreltir**. Emilim yüzeyi azaldığı için besinler emilemez.",
            "Mide ile yemek borusu arasındaki **kapağın gevşemesidir**. Mide asidi yemek borusuna kaçar; göğüste yanma ve ağızda ekşime yapar.",
        ],
    },
}
