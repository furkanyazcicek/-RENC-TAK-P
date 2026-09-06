"""TYT Fizik — Manyetizma (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: MANYETİZMA",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Manyetizma",
    "alt_baslik": "Ham bilgi notu — mıknatıslar, manyetik alan, akımın manyetik "
                  "etkisi ve elektromıknatıs; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Manyetizma",
        "kazanimlar": "9.10.1.1 — Mıknatısları ve manyetik alanı açıklar. "
                      "9.10.1.2 — Akımın manyetik etkisini yorumlar. "
                      "9.10.1.3 — Elektromıknatısın kullanım alanlarını açıklar.",
        "kapsam": "Mıknatıs çeşitleri, kutuplar, manyetik alan ve alan çizgileri, "
                  "Dünya'nın manyetik alanı, akımın manyetik etkisi, sağ el kuralı, "
                  "elektromıknatıs, 40 analiz sorusu",
        "nasil": "Bu konu **görsel** bir konudur; alan çizgilerini kâğıda kendin "
                 "çiz. **Sağ el kuralını** parmaklarınla uygulayarak öğren, "
                 "ezberlemeye çalışma.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Manyetizmadan TYT'de genellikle **1 soru** gelir ve çoğu "
                    "zaman elektromıknatısın gücünü artırma yolları sorulur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Mıknatıslar"},
        {"tur": "maddeler", "ogeler": [
            "**Mıknatıs**, demir, nikel, kobalt gibi maddeleri **çeken** cisimdir.",
            "Her mıknatısın **iki kutbu** vardır: **kuzey (N)** ve **güney (S)**.",
            "**Aynı kutuplar birbirini iter**, **zıt kutuplar birbirini çeker**.",
            "**Mıknatıs ikiye bölünürse tek kutuplu parça elde EDİLEMEZ**; her "
            "parça yine **kendi N ve S kutbuna** sahip olur. Bu, elektrik yükünden "
            "en önemli farkıdır.",
            "**Çekme kuvveti kutuplarda en büyüktür**, **ortada en küçüktür "
            "(neredeyse sıfırdır)**.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Madde Türü", "Davranışı", "Örnek"],
         "oranlar": [0.28, 0.40, 0.32],
         "satirlar": [
             ["**Ferromanyetik**", "Mıknatıs tarafından **kuvvetle çekilir**; "
              "kendisi de mıknatıslanabilir", "Demir, nikel, kobalt"],
             ["**Paramanyetik**", "Çok **zayıf çekilir**", "Alüminyum, platin"],
             ["**Diyamanyetik**", "Çok zayıf **itilir**", "Bakır, gümüş, su"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Doğal mıknatıs**: Doğada bulunur (manyetit taşı). "
            "**Yapay mıknatıs**: İnsan yapımıdır.",
            "**Geçici mıknatıs**: Yumuşak demirden yapılır; manyetik alan "
            "kalkınca **mıknatıslığını kaybeder**. **Kalıcı mıknatıs**: Çelikten "
            "yapılır; mıknatıslığını **uzun süre korur**.",
            "**Mıknatıslığı bozan etkenler**: **yüksek sıcaklık (ısıtma)**, "
            "**sert darbe (çekiçle vurma)**, güçlü zıt manyetik alan.",
        ]},
        {"tur": "tuzak", "baslik": "Tek Kutuplu Mıknatıs Yoktur", "govde":
            "Bir çubuk mıknatıs kaç parçaya bölünürse bölünsün, **her parça yine "
            "iki kutuplu** olur. 'Mıknatıs bölünerek yalnızca N kutbu elde edilir' "
            "ifadesi **yanlıştır**. Elektrikte (+) ve (−) yükler ayrı ayrı "
            "bulunabilir; manyetizmada kutuplar **ayrılamaz**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Manyetik Alan"},
        {"tur": "maddeler", "ogeler": [
            "**Manyetik alan**: Mıknatısın çevresinde, manyetik etkinin "
            "hissedildiği bölgedir. **Vektörel** bir büyüklüktür.",
            "**Manyetik alan çizgileri**: Mıknatısın **dışında N'den S'ye**, "
            "**içinde S'den N'ye** doğrudur. Çizgiler **kapalı eğriler** "
            "oluşturur; hiçbir yerde kesişmez.",
            "**Çizgilerin sık olduğu yerde alan güçlüdür**; bu yüzden çizgiler "
            "**kutuplarda en sıktır**.",
            "Manyetik alan **pusula iğnesiyle** ya da **demir tozlarıyla** "
            "gözlenebilir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Manyetik alan çizgilerinin özellikleri",
         "ciz": S.kartlar([
             ("Yön", "dışta **N → S**\niçte **S → N**"),
             ("Biçim", "**kapalı eğriler**\nkesişmez"),
             ("Sıklık", "sık = **güçlü alan**\nseyrek = zayıf"),
             ("En güçlü yer", "**kutuplar**"),
             ("En zayıf yer", "mıknatısın **ortası**"),
             ("Gözlem", "pusula ya da\n**demir tozu**"),
         ], sutun=3)},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Dünya dev bir mıknatıs gibi davranır.** Pusulanın kuzeyi gösteren "
            "ucu, Dünya'nın **manyetik güney kutbunu** işaret eder. Yani "
            "**coğrafi kuzey**te **manyetik güney** kutbu bulunur.",
            "**Coğrafi kutuplar ile manyetik kutuplar tam olarak çakışmaz**; "
            "aradaki açıya **sapma açısı** denir.",
            "Dünya'nın manyetik alanı, **Güneş'ten gelen zararlı yüklü "
            "parçacıklardan** bizi korur; **kuzey ışıkları (aurora)** bu "
            "etkileşimden doğar.",
        ]},
        {"tur": "dikkat", "baslik": "Pusula Manyetik Güneyi Gösterir", "govde":
            "Pusulanın **N ucu**, zıt kutup tarafından çekileceği için Dünya'nın "
            "**manyetik GÜNEY** kutbuna yönelir. Bu kutup **coğrafi KUZEY**'e "
            "yakındır. Adlandırma karışık görünse de mantık basittir: "
            "**zıt kutuplar çeker**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Akımın Manyetik Etkisi"},
        {"tur": "maddeler", "ogeler": [
            "**Oersted deneyi**: Üzerinden akım geçen bir telin yakınındaki "
            "**pusula iğnesi sapar**. Bu deney, **elektrik ile manyetizmanın "
            "bağlantılı** olduğunu gösteren ilk kanıttır.",
            "**Üzerinden akım geçen her iletkenin çevresinde manyetik alan "
            "oluşur.** Akım kesilirse alan da kaybolur.",
            "**Düz telin çevresinde** manyetik alan çizgileri **iç içe çemberler** "
            "biçimindedir.",
            "**Alan şiddeti**, **akımla doğru**, **telden uzaklıkla ters** "
            "orantılıdır.",
        ]},
        {"tur": "taktik", "baslik": "Sağ El Kuralı", "govde":
            "Manyetik alanın yönünü bulmak için iki farklı sağ el kuralı vardır; "
            "hangisini kullanacağını **şeklin türü** belirler:",
         "ogeler": [
             "**Düz tel için**: **Başparmak akım yönünü** gösterecek biçimde teli "
             "kavra. **Diğer dört parmağın sarılma yönü**, manyetik alan "
             "çizgilerinin yönüdür.",
             "**Bobin (solenoit) için**: **Dört parmak akım yönünde** bobini "
             "kavrar; **başparmağın gösterdiği uç KUZEY (N) kutbudur**.",
             "Soruda akımın yönü ters çevrilirse **kutuplar da yer değiştirir**.",
         ]},
        {"tur": "cikmis", "baslik": "Oersted deneyi sorusu", "govde":
            "'Akım geçen telin yanındaki pusula neden sapar?' Cevap: **akım, "
            "telin çevresinde manyetik alan oluşturur**; pusula iğnesi bu alana "
            "göre yönelir. Akım kesilince pusula **eski konumuna döner**. "
            "Bu deney elektromanyetizmanın başlangıcıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Elektromıknatıs"},
        {"tur": "tanim", "kavram": "Elektromıknatıs",
         "aciklama": "Yalıtkan bir telin **yumuşak demir çekirdek** üzerine "
                     "sarılmasıyla yapılan, **akım geçtiğinde mıknatıs özelliği "
                     "kazanan** düzenektir. Akım kesilince mıknatıslığını "
                     "**kaybeder**."},
        {"tur": "gorsel", "baslik": "Şema 2 — Elektromıknatısın gücünü artırma yolları",
         "aciklama": "Dördü de sınavda doğrudan sorulur. **Çekirdeğin yumuşak "
                     "demir olması**, akım kesilince mıknatıslığın kaybolması "
                     "için gereklidir.",
         "ciz": S.piramit(
             ["Akımı artırmak", "Sarım sayısını artırmak",
              "Yumuşak demir çekirdek kullanmak", "Çekirdek kesitini büyütmek"],
             ["En doğrudan etki",
              "Sarım sıklaştıkça alan güçlenir",
              "Manyetik alanı yoğunlaştırır",
              "Alanın toplandığı kesit büyür"])},
        {"tur": "maddeler", "ogeler": [
            "**Kullanım alanları**: elektrik zili, hoparlör, elektrik motoru, "
            "jeneratör, hurda kaldıran vinç, MR cihazı, manyetik tren, "
            "kapı kilitleri, röle.",
            "**Kalıcı mıknatıstan farkı**: Elektromıknatısın **gücü ayarlanabilir** "
            "ve **istendiğinde kapatılabilir**. Kalıcı mıknatısta bu mümkün değildir.",
            "**Elektrik motoru**: Elektrik enerjisini **hareket (kinetik) "
            "enerjisine** çevirir. **Jeneratör (dinamo)**: Hareket enerjisini "
            "**elektrik enerjisine** çevirir. İkisi birbirinin tersidir.",
        ]},
        {"tur": "tuzak", "baslik": "Çekirdek Neden Yumuşak Demir?", "govde":
            "Elektromıknatısta çekirdek **çelik değil, yumuşak demirdir**. Çelik "
            "kullanılsaydı akım kesildikten sonra da **mıknatıslığını korurdu** "
            "ve düzenek kapatılamazdı. Vinç kaldırdığı hurdayı bırakamazdı. "
            "'Neden çelik kullanılmaz' sorusunun cevabı budur."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Tek kutuplu mıknatıs yoktur**; bölünen her parça iki kutupludur.",
            "Çekme kuvveti **kutuplarda en büyük**, **ortada en küçüktür**.",
            "Alan çizgileri **dışta N'den S'ye**, **içte S'den N'ye**; kesişmez.",
            "**Çizgi sıklığı = alan şiddeti.**",
            "Pusulanın N ucu, Dünya'nın **manyetik güney** kutbunu (coğrafi kuzeyi) "
            "gösterir.",
            "**Oersted**: akım geçen telin çevresinde **manyetik alan** oluşur.",
            "Bobinde **dört parmak akım yönünde**, **başparmak N kutbunu** gösterir.",
            "Elektromıknatısın gücü: **akım**, **sarım sayısı**, **yumuşak demir "
            "çekirdek** ile artar.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Alan çizgisi sorularında **mutlaka şekil çiz**. Sağ el kuralı "
            "sorularında elini gerçekten kullan; zihinde canlandırmak hataya "
            "açıktır.",
        "satir_sayisi": 2,
        "sorular": [
            "Mıknatıs hangi maddeleri çeker?",
            "Bir mıknatısın kaç kutbu vardır? Adlarını yazınız.",
            "Aynı ve zıt kutuplar arasındaki etkileşimi yazınız.",
            "Bir çubuk mıknatıs ikiye bölünürse ne olur?",
            "Tek kutuplu mıknatıs elde edilebilir mi? Elektrik yüküyle farkını yazınız.",
            "Mıknatısın çekme kuvveti nerede en büyüktür, nerede en küçüktür?",
            "Ferromanyetik maddelere üç örnek veriniz.",
            "Paramanyetik ve diyamanyetik maddeleri karşılaştırınız.",
            "Doğal ve yapay mıknatısı ayırınız.",
            "Geçici ve kalıcı mıknatıs arasındaki farkı yazınız.",
            "Kalıcı mıknatıs hangi malzemeden yapılır?",
            "Mıknatıslığı bozan üç etkeni yazınız.",
            "Manyetik alanı tanımlayınız. Skaler mi vektörel midir?",
            "Manyetik alan çizgilerinin yönünü mıknatısın dışında ve içinde yazınız.",
            "Alan çizgileri kesişir mi? Neden?",
            "Alan çizgilerinin sıklığı neyi gösterir?",
            "Alan çizgileri nerede en sıktır?",
            "Manyetik alan hangi araçlarla gözlenebilir?",
            "Dünya'nın manyetik alanı hakkında ne söylenebilir?",
            "Pusulanın kuzeyi gösteren ucu hangi manyetik kutbu işaret eder?",
            "Coğrafi kuzeyde hangi manyetik kutup bulunur? Nedenini açıklayınız.",
            "Sapma açısı nedir?",
            "Dünya'nın manyetik alanının canlılar için önemi nedir?",
            "Kuzey ışıklarının (aurora) oluşumunu kısaca açıklayınız.",
            "Oersted deneyini anlatınız ve önemini yazınız.",
            "Akım geçen bir telin çevresinde ne oluşur?",
            "Akım kesilirse manyetik alana ne olur?",
            "Düz telin çevresindeki alan çizgilerinin biçimi nasıldır?",
            "Alan şiddeti akımla ve uzaklıkla nasıl ilişkilidir?",
            "Düz tel için sağ el kuralını yazınız.",
            "Bobin için sağ el kuralını yazınız.",
            "Bobinde akım yönü ters çevrilirse kutuplara ne olur?",
            "Elektromıknatısı tanımlayınız.",
            "Elektromıknatısın gücünü artırmanın dört yolunu yazınız.",
            "Elektromıknatıs çekirdeğinin yumuşak demir olmasının nedeni nedir?",
            "Çekirdek çelikten yapılsaydı ne olurdu?",
            "Elektromıknatısın kalıcı mıknatısa göre iki üstünlüğünü yazınız.",
            "Elektromıknatısın dört kullanım alanı yazınız.",
            "Elektrik motoru hangi enerji dönüşümünü yapar?",
            "Jeneratör hangi enerji dönüşümünü yapar?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Demir, nikel, kobalt** ve bunların alaşımlarını çeker.",
            "**İki kutup**: **kuzey (N)** ve **güney (S)**.",
            "**Aynı kutuplar iter**, **zıt kutuplar çeker**.",
            "**Her parça yine iki kutuplu (N ve S) bir mıknatıs olur.**",
            "**Elde edilemez.** Elektrikte (+) ve (−) yükler **ayrı ayrı** bulunabilir; manyetizmada kutuplar **ayrılamaz**.",
            "**Kutuplarda en büyük**, **ortada en küçüktür** (neredeyse sıfır).",
            "**Demir, nikel, kobalt.**",
            "**Paramanyetik** maddeler mıknatıs tarafından **çok zayıf çekilir** (alüminyum, platin). **Diyamanyetik** maddeler **çok zayıf itilir** (bakır, gümüş, su).",
            "**Doğal mıknatıs** doğada bulunur (manyetit taşı). **Yapay mıknatıs** insan yapımıdır.",
            "**Geçici mıknatıs** (yumuşak demir) alan kalkınca mıknatıslığını **kaybeder**. **Kalıcı mıknatıs** (çelik) mıknatıslığını **uzun süre korur**.",
            "**Çelik** (sert manyetik malzeme).",
            "**Yüksek sıcaklık (ısıtma)**, **sert darbe (çekiçle vurma)**, **güçlü zıt manyetik alan**.",
            "Mıknatısın çevresinde **manyetik etkinin hissedildiği bölgedir**. **Vektöreldir**.",
            "**Dışında N'den S'ye**, **içinde S'den N'ye** doğrudur.",
            "**Kesişmez.** Kesişselerdi o noktada alanın **iki farklı yönü** olurdu; bu fiziksel olarak mümkün değildir.",
            "**Alanın şiddetini** gösterir: sık çizgi güçlü alan, seyrek çizgi zayıf alan demektir.",
            "**Kutuplarda.**",
            "**Pusula iğnesi** ve **demir tozları** ile.",
            "Dünya **dev bir çubuk mıknatıs gibi** davranır; çevresinde bir manyetik alan bulunur.",
            "Dünya'nın **manyetik güney** kutbunu gösterir.",
            "**Manyetik güney kutbu** bulunur. Pusulanın N ucu oraya yöneldiğine göre, **zıt kutuplar çeker** kuralı gereği orası güney kutbu olmalıdır.",
            "**Coğrafi kutup ile manyetik kutup arasındaki açıdır**; ikisi tam olarak çakışmaz.",
            "Güneş'ten gelen **zararlı yüklü parçacıkları saptırarak** canlıları korur.",
            "Güneş'ten gelen yüklü parçacıklar, Dünya'nın manyetik alanı tarafından **kutuplara yönlendirilir** ve atmosferdeki gaz atomlarıyla çarpışarak **ışıma** oluşturur.",
            "Üzerinden **akım geçen bir telin** yanındaki **pusula iğnesi sapar**. Bu deney **elektrik ile manyetizmanın bağlantılı olduğunu** gösteren ilk kanıttır.",
            "Telin çevresinde bir **manyetik alan** oluşur.",
            "Manyetik alan da **kaybolur**.",
            "**İç içe çemberler** biçimindedir.",
            "**Akımla doğru orantılı**, **telden uzaklıkla ters orantılıdır**.",
            "**Başparmak akım yönünü** gösterecek biçimde tel kavranır; **diğer dört parmağın sarılma yönü** manyetik alan çizgilerinin yönüdür.",
            "**Dört parmak akım yönünde** bobini kavrar; **başparmağın gösterdiği uç kuzey (N) kutbudur**.",
            "**Kutuplar yer değiştirir** (N olan uç S, S olan uç N olur).",
            "Yalıtkan bir telin **yumuşak demir çekirdek** üzerine sarılmasıyla yapılan, **akım geçtiğinde** mıknatıs özelliği kazanan düzenektir.",
            "**Akımı artırmak**, **sarım sayısını artırmak**, **yumuşak demir çekirdek kullanmak**, **çekirdeğin kesitini büyütmek**.",
            "Akım kesildiğinde **mıknatıslığını hemen kaybetmesi** için. Böylece düzenek istendiğinde kapatılabilir.",
            "Akım kesildikten sonra da **mıknatıslığını korurdu**; elektromıknatıs kapatılamaz, örneğin vinç kaldırdığı hurdayı **bırakamazdı**.",
            "**Gücü ayarlanabilir** ve **istendiğinde kapatılabilir**.",
            "**Elektrik zili, hoparlör, elektrik motoru, hurda kaldıran vinç** (MR, manyetik tren, röle de yazılabilir).",
            "**Elektrik enerjisini hareket (kinetik) enerjisine** çevirir.",
            "**Hareket (kinetik) enerjisini elektrik enerjisine** çevirir.",
        ],
    },
}
