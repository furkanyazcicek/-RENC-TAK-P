"""TYT Türkçe — Noktalama İşaretleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: NOKTALAMA İŞARETLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Noktalama İşaretleri",
    "alt_baslik": "Ham bilgi notu — virgül, noktalı virgül, iki nokta, tırnak ve "
                  "diğer işaretler; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Noktalama İşaretleri",
        "kazanimlar": "Noktalama işaretlerinin kullanım yerlerini bilir. "
                      "Virgül ve noktalı virgülü ayırt eder. "
                      "Noktalamanın anlama etkisini açıklar. "
                      "Yanlış noktalamayı düzeltir.",
        "kapsam": "Nokta, virgül, noktalı virgül, iki nokta, üç nokta, soru işareti, "
                  "ünlem, kısa çizgi, uzun çizgi, tırnak işareti, parantez, kesme "
                  "işareti; noktalamanın anlam üzerindeki etkisi, 50 analiz sorusu",
        "nasil": "Noktalama, **anlamı taşıyan bir araçtır**; süs değildir. "
                 "Bir virgülün yeri cümlenin anlamını tamamen değiştirebilir. "
                 "Bu yüzden kuralları ezberlerken **neden öyle olduğunu** da düşün.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de noktalamadan gelen soru genellikle **virgülün işlevi** ya "
                    "da **hangi işaretin yanlış kullanıldığı** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Nokta ve Virgül"},
        {"tur": "tablo",
         "basliklar": ["İşaret", "Kullanım yeri", "Örnek"],
         "satirlar": [
             ["**Nokta (.)**", "Tamamlanmış cümlelerin sonunda",
              "\"Bugün hava çok güzel.\""],
             ["", "Kısaltmalardan sonra", "**Dr.**, **Prof.**, **vb.**"],
             ["", "Tarihlerde gün, ay, yıl arasında", "**5.5.2026**"],
             ["", "Sıra sayılarında", "**5.** sınıf, **XX.** yüzyıl"],
             ["**Virgül (,)**", "Eş görevli sözcükleri ayırır",
              "\"Elma, armut, kiraz aldım.\""],
             ["", "Sıralı cümleleri ayırır", "\"Kapı açıldı, içeri girdi.\""],
             ["", "Ara sözleri ayırır", "\"Ali, sınıfın birincisi, ödül aldı.\""],
             ["", "Hitapları ayırır", "\"Çocuklar, sessiz olun!\""],
             ["", "Özneyi vurgulamak için", "\"Yaşlı adam, yavaşça kalktı.\""],
         ],
         "oranlar": [0.20, 0.36, 0.44]},
        {"tur": "tuzak", "baslik": "Virgülün Anlamı Değiştirmesi", "govde":
            "Virgülün yeri, cümlenin anlamını **tamamen değiştirebilir**: "
            "\"**Yaşlı, adama baktı.**\" → yaşlı olan **kişi bakıyor**. "
            "\"**Yaşlı adama baktı.**\" → biri **yaşlı adama** bakıyor. "
            "Aynı biçimde: \"**Genç, kadına yardım etti**\" ile \"**Genç kadına "
            "yardım etti**\" farklı anlamlardadır. Sorularda tam olarak bu ayrım "
            "sınanır."},
        {"tur": "dikkat", "baslik": "Virgül Nerede Kullanılmaz?", "ogeler": [
            "**Özne ile yüklem arasına** gereksiz yere virgül konmaz: \"Ali, geldi\" "
            "→ yanlış (vurgu amacı yoksa).",
            "**\"ve, veya, ile\" bağlaçlarından önce ve sonra** virgül konmaz: "
            "\"Elma ve armut aldım\" → doğru; \"Elma, ve armut\" → yanlış.",
            "**\"mi\" soru ekinden önce** virgül konmaz: \"Geldi mi?\" → doğru.",
            "**Sıfat ile isim arasına** virgül konmaz: \"güzel, ev\" → yanlış.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Noktalı Virgül ve İki Nokta"},
        {"tur": "gorsel", "baslik": "Şema 1 — Noktalı virgülün iki görevi",
         "aciklama": "Noktalı virgül, **virgülden güçlü, noktadan zayıf** bir "
                     "duraklama sağlar. İki temel işlevi vardır.",
         "ciz": S.karsilastirma(
             "Anlamca bağlı cümleleri ayırır",
             ["Aralarında **anlam ilişkisi olan** cümleler",
              "Nokta koymak **bağı koparırdı**",
              "\"Çok çalıştı; sonunda başardı.\"",
              "\"Erken kalktı; yine de geç kaldı.\""],
             "Virgülle ayrılmış grupları ayırır",
             ["İçinde **virgül bulunan grupları** ayırır",
              "Karışıklığı **önler**",
              "\"Sınıfta Ali, Ayşe ve Mehmet; bahçede Can ve Ece vardı.\"",
              "Gruplar birbirine karışmaz"],
             "Kural",
             ["**Virgülden güçlü**, **noktadan zayıf**",
              "İki cümle **anlamca bağlıysa** kullanılır",
              "Bağımsız cümlelerde **nokta** tercih edilir"])},
        {"tur": "tablo",
         "basliklar": ["İşaret", "Kullanım yeri", "Örnek"],
         "satirlar": [
             ["**İki nokta (:)**", "**Açıklama** ya da **örnek** getirilecekse",
              "\"Şunları aldım: kalem, defter, silgi.\""],
             ["", "**Alıntıdan önce**", "\"Atatürk şöyle demiştir: ...\""],
             ["**Üç nokta (...)**", "**Tamamlanmamış** cümlelerde",
              "\"Bir gün gelir de...\""],
             ["", "**Alıntıda atlanan** bölümü gösterir", "\"...ve böylece bitti.\""],
             ["", "**Sözün sürdüğünü** gösterir", "\"Kalem, defter, silgi...\""],
             ["**Soru işareti (?)**", "**Soru bildiren** cümlelerin sonunda",
              "\"Nereye gidiyorsun?\""],
             ["", "**Bilinmeyen ya da kuşkulu** bilgide", "\"Yunus Emre (1240?-1320)\""],
             ["**Ünlem (!)**", "**Duygu** ve **seslenme** bildiren cümlelerde",
              "\"Ne güzel bir gün!\", \"Ey Türk gençliği!\""],
         ],
         "oranlar": [0.20, 0.38, 0.42]},
        {"tur": "tuzak", "baslik": "Soru İşareti Ne Zaman Konmaz?", "govde":
            "**Soru sözcüğü bulunan her cümle soru cümlesi değildir.** "
            "\"**Nereye gittiğini bilmiyorum.**\" cümlesinde \"nereye\" soru sözcüğü "
            "vardır ama cümle **soru sormaz**, bilgi verir → **nokta** konur. "
            "Aynı biçimde \"Gelip gelmeyeceğini merak ediyorum\" cümlesinde de soru "
            "işareti kullanılmaz. **Ölçüt: cümle cevap bekliyor mu?**"},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Diğer İşaretler"},
        {"tur": "tablo",
         "basliklar": ["İşaret", "Kullanım yeri", "Örnek"],
         "satirlar": [
             ["**Kısa çizgi (-)**", "Satır sonunda **hece bölmede**",
              "\"anla-\" / \"tım\""],
             ["", "**Ekleri göstermede**", "\"-lık\", \"-cı\""],
             ["", "**Arasında anlamında**", "\"1914-1918 Savaşı\""],
             ["**Uzun çizgi (—)**", "**Konuşma çizgisi** olarak",
              "\"— Nereye gidiyorsun?\""],
             ["**Tırnak (\" \")**", "**Başkasının sözünü** aynen aktarmada",
              "\"Öğretmen, 'Yarın sınav var.' dedi.\""],
             ["", "**Özel vurgu** ve **eser adlarında**", "\"Yaban\" romanı"],
             ["**Parantez ( )**", "**Açıklama** eklemede",
              "\"Yunus Emre (1240-1320) büyük bir şairdir.\""],
             ["**Kesme (')**", "**Özel adlara gelen çekim eklerini** ayırmada",
              "\"Ankara'da\", \"Ahmet'in\""],
         ],
         "oranlar": [0.20, 0.36, 0.44]},
        {"tur": "dikkat", "baslik": "Tırnak İşaretiyle İlgili Kurallar", "ogeler": [
            "**Tırnak içindeki cümlenin noktalaması tırnağın içinde** kalır: "
            "\"Öğretmen, **'Yarın sınav var.'** dedi.\"",
            "**Tırnak içine alınan sözlere ek getirilirse kesme kullanılmaz**: "
            "\"**'Yaban'** romanını okudum.\"",
            "**Eser ve yazı adları** tırnak içine alınabilir ya da **eğik yazıyla** "
            "gösterilebilir.",
            "**Konuşma çizgisi (—) ile tırnak birlikte kullanılmaz**; biri seçilir.",
        ]},
        {"tur": "cozum",
         "baslik": "Noktalama Hatalarını Bulma",
         "soru": "Aşağıdaki cümlelerdeki noktalama hatalarını bulup düzeltiniz.\n"
                 "**I.** \"Nereye gittiğini bilmiyorum?\"\n"
                 "**II.** \"Elma, ve armut aldım.\"\n"
                 "**III.** \"Ali, geldi.\"\n"
                 "**IV.** \"Şunları aldım, kalem, defter, silgi.\"",
         "adimlar": [
             "**I.** Cümle **soru sormuyor**, bilgi veriyor → soru işareti yanlış → "
             "**nokta** konmalı.",
             "**II.** **\"ve\" bağlacından önce virgül konmaz** → \"Elma ve armut "
             "aldım.\"",
             "**III.** Özne ile yüklem arasına **gereksiz virgül** konmuş (vurgu amacı "
             "yok) → \"Ali geldi.\"",
             "**IV.** Açıklama getirileceği için **iki nokta** konmalı → \"Şunları "
             "aldım: kalem, defter, silgi.\"",
         ],
         "sonuc": "Dört cümlede de **noktalama hatası** vardır. Doğru biçimler: "
                  "\"...bilmiyorum.\", \"Elma ve armut aldım.\", \"Ali geldi.\", "
                  "\"Şunları aldım: kalem, defter, silgi.\""},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Noktalamanın Anlama Etkisi"},
        {"tur": "gorsel", "baslik": "Şema 2 — Aynı sözcükler, farklı anlamlar",
         "aciklama": "Noktalama, cümlenin **anlamını belirleyen** bir araçtır. "
                     "Aşağıdaki örnekler, tek bir virgülün anlamı nasıl "
                     "değiştirdiğini gösterir.",
         "ciz": S.kartlar([
             ("Yaşlı, adama baktı.", "**Yaşlı olan bakıyor**\nözne: yaşlı"),
             ("Yaşlı adama baktı.", "**Yaşlı adama bakılıyor**\nnesne: yaşlı adam"),
             ("Genç, kadına yardım etti.", "**Genç olan yardım etti**"),
             ("Genç kadına yardım etti.", "**Genç kadına** yardım edildi"),
             ("Dur, ateş etme!", "**Ateş etme** buyruğu"),
             ("Dur ateş, etme!", "**Ateşe** sesleniliyor"),
         ], sutun=3)},
        {"tur": "taktik", "baslik": "Noktalama Sorusunu Çözme Sırası", "govde":
            "**1)** Cümleyi **noktalamasız** oku; ne anlatmak istediğini belirle. "
            "**2)** Verilen noktalamanın bu anlamı **destekleyip desteklemediğine** "
            "bak. **3)** Uyuşmuyorsa **hata oradadır**. Özellikle **virgül, iki nokta "
            "ve soru işareti** üzerinde dur; sorular çoğunlukla bu üçünden gelir."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Ara sözler iki virgül arasına** alınır; tek virgül **yetmez**: "
            "\"Ali**,** sınıfın birincisi**,** ödül aldı.\"",
            "**Sıralı cümlelerde ortak öge varsa virgül** kullanılır: \"Kalktı, "
            "giyindi, çıktı.\"",
            "**Uzun ve karmaşık cümlelerde noktalı virgül** karışıklığı önler.",
            "**Alıntı cümlesinden önce iki nokta** konur; alıntı **tırnak içine** "
            "alınır.",
        ]},
        {"tur": "cikmis", "baslik": "Soru Kalıpları", "govde":
            "Bu konu iki kalıpta sorulur: **1)** \"Bu cümledeki noktalama işaretlerinden "
            "hangisi **yanlış** kullanılmıştır?\" — işaretleri tek tek denetlersin. "
            "**2)** \"Bu parçada numaralanmış yerlerden hangisine **farklı bir işaret** "
            "getirilmelidir?\" — boşluğa hangi işaretin geleceğini belirlersin. "
            "İkisinde de yöntem aynıdır: **cümlenin anlamına bak**, işaret bu anlamı "
            "desteklemeli."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Nokta**: tamamlanmış cümle, kısaltma, tarih, sıra sayısı.",
            "**Virgül**: eş görevli sözcükler, sıralı cümleler, ara söz, hitap.",
            "**\"ve, veya, ile\" bağlaçlarından önce virgül konmaz.**",
            "**Özne-yüklem arasına gereksiz virgül konmaz.**",
            "**Noktalı virgül**: anlamca bağlı cümleler ve virgüllü grupların ayrımı.",
            "**İki nokta**: açıklama, örnek ya da alıntı getirileceğinde.",
            "**Üç nokta**: tamamlanmamış cümle, atlanan bölüm, süren söz.",
            "**Soru sözcüğü olan her cümle soru cümlesi değildir.**",
            "**Tırnak içindeki noktalama tırnağın içinde** kalır.",
            "**Tırnak içine alınan söze ek gelirse kesme kullanılmaz.**",
            "**Ara sözler iki virgül** arasına alınır.",
            "**Virgülün yeri anlamı değiştirir.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her kural için **kendi cümleni yaz**. Noktalama, yazarak "
            "öğrenilen bir konudur. Anlam değişimi sorularında ise cümleyi **iki farklı "
            "biçimde noktalayıp** anlamlarını karşılaştır.",
        "satir_sayisi": 2,
        "sorular": [
            "Noktanın dört kullanım yerini yazınız.",
            "Kısaltmalarda noktanın kullanımını örnekle yazınız.",
            "Tarihlerde noktanın kullanımını örnekle yazınız.",
            "Sıra sayılarında noktanın kullanımını örnekle yazınız.",
            "Virgülün beş kullanım yerini yazınız.",
            "Eş görevli sözcüklerin ayrılmasına bir örnek veriniz.",
            "Sıralı cümlelerin ayrılmasına bir örnek veriniz.",
            "Ara sözlerin ayrılmasına bir örnek veriniz.",
            "Ara sözlerde kaç virgül kullanıldığını yazınız.",
            "Hitapların ayrılmasına bir örnek veriniz.",
            "Virgülün kullanılmadığı dört durumu yazınız.",
            "'Elma, ve armut aldım' cümlesindeki hatayı düzeltiniz.",
            "'Ali, geldi' cümlesindeki hatayı düzeltiniz.",
            "Virgülün anlamı değiştirmesine bir örnek veriniz.",
            "'Yaşlı, adama baktı' ve 'Yaşlı adama baktı' cümlelerini karşılaştırınız.",
            "'Genç, kadına yardım etti' ve 'Genç kadına yardım etti' cümlelerini karşılaştırınız.",
            "Noktalı virgülün iki görevini yazınız.",
            "Anlamca bağlı cümlelerin ayrılmasına bir örnek veriniz.",
            "Virgüllü grupların ayrılmasına bir örnek veriniz.",
            "Noktalı virgülün nokta ve virgülle karşılaştırmasını yazınız.",
            "İki noktanın iki kullanım yerini yazınız.",
            "Açıklama getirilecekse hangi işaretin kullanıldığını yazınız.",
            "'Şunları aldım, kalem, defter, silgi' cümlesindeki hatayı düzeltiniz.",
            "Üç noktanın üç kullanım yerini yazınız.",
            "Soru işaretinin iki kullanım yerini yazınız.",
            "Soru sözcüğü bulunan her cümlenin soru cümlesi olmadığını örnekle açıklayınız.",
            "'Nereye gittiğini bilmiyorum?' cümlesindeki hatayı düzeltiniz.",
            "Soru cümlesini belirleyen ölçütü yazınız.",
            "Ünlem işaretinin kullanım yerlerini yazınız.",
            "Kısa çizginin üç kullanım yerini yazınız.",
            "Uzun çizginin kullanım yerini yazınız.",
            "Tırnak işaretinin iki kullanım yerini yazınız.",
            "Tırnak içindeki cümlenin noktalamasının nerede kaldığını yazınız.",
            "Tırnak içine alınan söze ek gelirse ne yapıldığını yazınız.",
            "Konuşma çizgisi ile tırnağın birlikte kullanılıp kullanılamayacağını yazınız.",
            "Parantezin kullanım yerini örnekle yazınız.",
            "Kesme işaretinin kullanım yerini örnekle yazınız.",
            "Noktalama sorusunu çözme sırasını yazınız.",
            "Noktalama sorularında en çok hangi üç işaretin sorulduğunu yazınız.",
            "Alıntı cümlesinden önce hangi işaretin kullanıldığını yazınız.",
            "Uzun ve karmaşık cümlelerde hangi işaretin karışıklığı önlediğini yazınız.",
            "'Dur, ateş etme!' ve 'Dur ateş, etme!' cümlelerini karşılaştırınız.",
            "Noktalamanın anlamı taşıyan bir araç olduğunu bir örnekle açıklayınız.",
            "Bu konunun iki soru kalıbını yazınız.",
            "'Hangi işaret yanlış kullanılmıştır?' sorularında izlenecek yöntemi yazınız.",
            "Kendi kurduğunuz bir cümleyi iki farklı biçimde noktalayıp anlamlarını karşılaştırınız.",
            "Ara söz içeren bir cümle kurup doğru noktalayınız.",
            "Noktalı virgül gerektiren bir cümle kurunuz.",
            "İki nokta gerektiren bir cümle kurunuz.",
            "Noktalama kurallarını öğrenmek için önerdiğiniz çalışma yöntemini yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Tamamlanmış cümlelerin sonunda**, **kısaltmalardan sonra**, **tarihlerde**, **sıra sayılarında**.",
            "**Dr.**, **Prof.**, **vb.**, **sf.** — küçük harfli kısaltmalarda nokta konur.",
            "**5.5.2026** — gün, ay ve yıl arasına nokta konur.",
            "**5.** sınıf, **XX.** yüzyıl — sayıdan sonra nokta konur.",
            "**Eş görevli sözcükler**, **sıralı cümleler**, **ara sözler**, **hitaplar**, **vurgulanan özne**.",
            "\"Elma, armut, kiraz aldım.\"",
            "\"Kapı açıldı, içeri girdi.\"",
            "\"Ali, sınıfın birincisi, ödül aldı.\"",
            "**İki virgül** kullanılır; ara söz iki virgül arasına alınır.",
            "\"Çocuklar, sessiz olun!\"",
            "**Özne-yüklem arasına** (vurgu yoksa), **\"ve, veya, ile\" bağlaçlarından önce**, **\"mi\" ekinden önce**, **sıfat ile isim arasına**.",
            "\"ve\" bağlacından önce virgül konmaz. Düzeltme: \"**Elma ve armut aldım.**\"",
            "Özne ile yüklem arasına gereksiz virgül konmuş. Düzeltme: \"**Ali geldi.**\"",
            "\"Yaşlı, adama baktı\" ile \"Yaşlı adama baktı\" — virgül anlamı tamamen değiştirir.",
            "**\"Yaşlı, adama baktı\"**: yaşlı olan kişi bakıyor (özne yaşlı). **\"Yaşlı adama baktı\"**: biri yaşlı bir adama bakıyor (nesne yaşlı adam).",
            "**\"Genç, kadına yardım etti\"**: genç olan yardım etti. **\"Genç kadına yardım etti\"**: genç bir kadına yardım edildi.",
            "**1)** Anlamca bağlı cümleleri ayırır. **2)** Virgülle ayrılmış grupları birbirinden ayırır.",
            "\"Çok çalıştı; sonunda başardı.\"",
            "\"Sınıfta Ali, Ayşe ve Mehmet; bahçede Can ve Ece vardı.\"",
            "**Virgülden güçlü**, **noktadan zayıf** bir duraklama sağlar. Cümleler anlamca bağlıysa nokta yerine tercih edilir.",
            "**Açıklama ya da örnek getirilecekse** ve **alıntıdan önce**.",
            "**İki nokta (:)**.",
            "Açıklama getirileceği için iki nokta gerekir. Düzeltme: \"**Şunları aldım: kalem, defter, silgi.**\"",
            "**Tamamlanmamış cümlelerde**, **alıntıda atlanan bölümü göstermede**, **sözün sürdüğünü belirtmede**.",
            "**Soru bildiren cümlelerin sonunda** ve **bilinmeyen ya da kuşkulu bilgide**.",
            "\"**Nereye gittiğini bilmiyorum.**\" — \"nereye\" soru sözcüğü var ama cümle soru sormuyor, bilgi veriyor.",
            "Cümle soru sormuyor. Düzeltme: \"**Nereye gittiğini bilmiyorum.**\"",
            "**\"Cümle cevap bekliyor mu?\"** Bekliyorsa soru cümlesidir.",
            "**Duygu bildiren cümlelerde** (\"Ne güzel bir gün!\") ve **seslenmelerde** (\"Ey Türk gençliği!\").",
            "**Satır sonunda hece bölmede**, **ekleri göstermede**, **\"arasında\" anlamında** (1914-1918).",
            "**Konuşma çizgisi** olarak kullanılır: \"— Nereye gidiyorsun?\"",
            "**Başkasının sözünü aynen aktarmada** ve **özel vurgu ile eser adlarında**.",
            "**Tırnağın içinde** kalır: \"Öğretmen, '**Yarın sınav var.**' dedi.\"",
            "**Kesme işareti kullanılmaz**: \"**'Yaban'** romanını okudum.\"",
            "**Birlikte kullanılmaz**; ikisinden **biri** seçilir.",
            "**Açıklama eklemede**: \"Yunus Emre (1240-1320) büyük bir şairdir.\"",
            "**Özel adlara gelen çekim eklerini ayırmada**: \"Ankara'da\", \"Ahmet'in\".",
            "**1)** Cümleyi noktalamasız oku, anlamı belirle. **2)** Verilen noktalamanın bu anlamı destekleyip desteklemediğine bak. **3)** Uyuşmuyorsa hata oradadır.",
            "**Virgül**, **iki nokta** ve **soru işareti**.",
            "**İki nokta (:)** konur; alıntı **tırnak içine** alınır.",
            "**Noktalı virgül**; içinde virgül bulunan grupları ayırarak karışıklığı önler.",
            "**\"Dur, ateş etme!\"**: birine ateş etmemesi söyleniyor. **\"Dur ateş, etme!\"**: \"ateş\" adlı birine sesleniliyor.",
            "\"Yaşlı, adama baktı\" ile \"Yaşlı adama baktı\" cümleleri **aynı sözcüklerden** oluşur ama tek bir virgül yüzünden **özne ve nesne yer değiştirir**. Bu, noktalamanın süs değil, **anlam taşıyıcısı** olduğunu gösterir.",
            "**1)** \"Hangi noktalama işareti yanlış kullanılmıştır?\" **2)** \"Numaralanmış yerlerden hangisine farklı bir işaret getirilmelidir?\"",
            "İşaretleri **tek tek denetle**; her birinin kullanım kuralını hatırla ve cümlenin anlamıyla uyuşup uyuşmadığına bak.",
            "\"Öğretmen, öğrencilere baktı.\" (öğretmen bakıyor) / \"Öğretmen öğrencilere baktı.\" (aynı anlam ama vurgu farklı; ilkinde özne vurgulanmıştır).",
            "\"Ayşe, sınıfın en çalışkan öğrencisi, bu yıl da birinci oldu.\"",
            "\"Sabah erken kalktı; buna rağmen otobüsü kaçırdı.\"",
            "\"Çantamda şunlar vardı: iki defter, üç kalem ve bir silgi.\"",
            "**Her gün birkaç cümle yazıp noktalamak** ve **okuduğun metinlerdeki işaretlerin neden orada olduğunu sormak**. Ayrıca aynı cümleyi farklı biçimde noktalayıp anlam değişimini gözlemlemek çok etkilidir.",
        ],
    },
}
