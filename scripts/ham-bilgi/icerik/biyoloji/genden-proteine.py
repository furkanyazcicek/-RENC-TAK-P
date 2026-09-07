"""AYT Biyoloji — Genden Proteine (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: GENDEN PROTEİNE",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Genden Proteine",
    "alt_baslik": "Ham bilgi notu — nükleik asitler, DNA eşlenmesi, transkripsiyon, "
                  "translasyon, mutasyon ve biyoteknoloji; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Genden Proteine",
        "kazanimlar": "12.1.1.1 — Nükleik asitlerin yapı ve görevlerini açıklar. "
                      "12.1.1.2 — DNA'nın kendini eşlemesini açıklar. "
                      "12.1.1.3 — Protein sentezini transkripsiyon ve translasyonla açıklar. "
                      "12.1.1.4 — Genetik mühendisliği uygulamalarını değerlendirir.",
        "kapsam": "DNA ve RNA yapısı, Chargaff kuralı, yarı korunumlu eşlenme, replikasyon "
                  "enzimleri, mRNA–tRNA–rRNA, genetik şifre, transkripsiyon ve translasyon "
                  "basamakları, mutasyon çeşitleri, genetik mühendisliği ve biyoteknoloji, "
                  "50 analiz sorusu",
        "nasil": "Bu konu **hesap ve akış** konusudur. Nükleotit hesaplarını formülle "
                 "değil **Chargaff kuralıyla** çöz; protein sentezini de **DNA → mRNA → "
                 "protein** okunu kâğıda çizerek takip et.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **nükleotit hesabı**, "
                    "**kodon–antikodon eşleştirmesi** ya da **mutasyonun etkisi** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Nükleik Asitler"},
        {"tur": "gorsel", "baslik": "Şema 1 — DNA'nın yapı basamakları",
         "aciklama": "Sorularda \"kaç nükleotit, kaç şeker, kaç fosfat\" diye "
                     "sorulduğunda bu basamak dizisi hatırlanmalıdır: **her nükleotitte "
                     "bir şeker, bir fosfat ve bir baz** bulunur; bu yüzden üç sayı da "
                     "birbirine eşittir.",
         "ciz": S.katmanlar([
             ("Azotlu organik baz",
              "**Pürinler**: adenin (A), guanin (G) — çift halkalı. **Pirimidinler**: timin (T), sitozin (C), urasil (U) — tek halkalı."),
             ("Nükleotit",
              "**Şeker + fosfat + baz**. DNA'nın yapı birimidir; bir DNA'da nükleotit, şeker, fosfat ve baz sayıları **birbirine eşittir**."),
             ("Nükleotit zinciri (iplik)",
              "Nükleotitler **şeker–fosfat bağlarıyla** dizilir. Bu bağlar zincirin **omurgasını** oluşturur."),
             ("Çift sarmal DNA",
              "İki zincir **hidrojen bağlarıyla** karşılıklı durur: **A–T ikili**, **G–C üçlü** bağ. Zincirler birbirine **ters yönlüdür**."),
         ])},
        {"tur": "tanim", "kavram": "Nükleotit",
         "aciklama": "Nükleik asitlerin **yapı birimidir**. Üç kısımdan oluşur: "
                     "**beş karbonlu şeker** (DNA'da deoksiriboz, RNA'da riboz), "
                     "**fosfat grubu** ve **azotlu organik baz**."},
        {"tur": "gorsel", "baslik": "Şema 2 — DNA ile RNA farkı",
         "aciklama": "İki molekülün üç temel farkı vardır: **şeker**, **baz** ve "
                     "**iplik sayısı**. Sorularda bu üçünden biri mutlaka geçer.",
         "ciz": S.karsilastirma(
             "DNA",
             ["**Çift** iplikli, sarmal",
              "Şeker: **deoksiriboz**",
              "Bazlar: A, T, G, C — **timin var**",
              "Kendini **eşleyebilir**",
              "Çekirdek, mitokondri, kloroplast",
              "Kalıtsal bilgiyi **saklar**"],
             "RNA",
             ["**Tek** iplikli",
              "Şeker: **riboz**",
              "Bazlar: A, U, G, C — **urasil var**",
              "Kendini **eşleyemez**",
              "Çekirdek, sitoplazma, ribozom",
              "Bilgiyi **taşır ve uygular**"],
             "Ortak",
             ["İkisi de **nükleotitten** oluşur",
              "İkisi de **fosfat** içerir",
              "İkisi de **A, G, C** bazlarını taşır",
              "İkisi de protein sentezinde **görevlidir**"])},
        {"tur": "formul",
         "baslik": "Chargaff kuralı ve nükleotit hesapları",
         "ifade": "A = T   ve   G = C\n"
                  "A + G  =  T + C   =   toplam / 2\n"
                  "Zayıf bağ sayısı = 2·(A) + 3·(G)",
         "terimler": [
             ("A = T", "Adenin ile timin **çift** hidrojen bağı kurar"),
             ("G = C", "Guanin ile sitozin **üçlü** hidrojen bağı kurar"),
             ("Pürin = Pirimidin", "A + G = T + C; her zaman **eşittir**"),
             ("Nükleotit sayısı", "**Fosfat sayısına** ve **şeker sayısına** eşittir"),
         ],
         "not": "**G–C oranı yüksek olan DNA daha dayanıklıdır**, çünkü üçlü hidrojen "
                "bağı ikili bağdan güçlüdür. Bu DNA'nın **erime sıcaklığı da yüksektir**."},
        {"tur": "cozum",
         "baslik": "Nükleotit Hesabı",
         "soru": "Bir DNA molekülünde toplam **1200 nükleotit** bulunuyor ve **adenin "
                 "sayısı 300**'dür. Guanin sayısını ve toplam zayıf hidrojen bağı "
                 "sayısını bulunuz.",
         "adimlar": [
             "**A = T** olduğuna göre T = 300; A + T = **600**.",
             "Toplam 1200 olduğuna göre G + C = 1200 − 600 = **600**.",
             "**G = C** olduğundan G = C = 600 / 2 = **300**.",
             "Zayıf bağ = 2·A + 3·G = 2·300 + 3·300 = 600 + 900 = **1500**.",
         ],
         "sonuc": "Guanin sayısı 300, toplam hidrojen bağı sayısı 1500'dür."},
        {"tur": "tuzak", "baslik": "Nükleotit Sayısı ile Baz Sayısı", "govde":
            "Bir DNA'da **nükleotit sayısı = fosfat sayısı = şeker sayısı = baz "
            "sayısıdır**; bunlar birbirine eşittir. Ancak **hidrojen bağı sayısı** "
            "bunlardan farklıdır ve A ile G sayısına bağlıdır. Sorularda \"kaç "
            "nükleotit\" ile \"kaç hidrojen bağı\" birbirine karıştırılır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "DNA'nın Kendini Eşlemesi"},
        {"tur": "tanim", "kavram": "Yarı korunumlu eşlenme",
         "aciklama": "DNA eşlendiğinde oluşan her yeni molekülün **bir ipliği eski, bir "
                     "ipliği yenidir**. Meselson ve Stahl deneyiyle kanıtlanmıştır. "
                     "Eşlenme **S evresinde** gerçekleşir."},
        {"tur": "gorsel", "baslik": "Şema 3 — Eşlenmede görevli enzimler",
         "aciklama": "Enzimlerin sırası soru olur. Kısaca: **helikaz açar, primaz "
                     "başlatır, polimeraz yazar, ligaz birleştirir**.",
         "ciz": S.dikey_akis(
             ["Helikaz", "Primaz", "DNA polimeraz", "Ligaz"],
             ["İki ipliği tutan **hidrojen bağlarını kırar** ve sarmalı açar.",
              "Sentezin başlaması için kısa bir **RNA primeri** yerleştirir.",
              "Yeni nükleotitleri **5' → 3' yönünde** ekler; ayrıca **hata düzeltmesi** yapar.",
              "**Okazaki parçacıklarını** birbirine bağlayarak kesintili ipliği tamamlar."])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "DNA polimeraz yalnızca **5' → 3' yönünde** çalışabildiği için bir iplik "
            "**kesintisiz (öncü)**, diğeri **kesintili (gecikmeli)** sentezlenir.",
            "Eşlenme **çok noktadan aynı anda** başlar (ökaryotta); bu, uzun DNA'nın "
            "makul sürede kopyalanmasını sağlar.",
            "Eşlenmede **ATP harcanır** ve serbest nükleotitler ile **enzimler** gerekir.",
            "Bir DNA n kez eşlenirse **2^n molekül** oluşur; bunların **2 tanesi eski "
            "iplik taşır**, geri kalanı tamamen yenidir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Protein Sentezi"},
        {"tur": "tablo",
         "basliklar": ["RNA çeşidi", "Nerede üretilir", "Görevi"],
         "satirlar": [
             ["**mRNA (elçi)**", "Çekirdekte, DNA'nın **anlamlı** ipliğinden",
              "Genetik şifreyi **kodon** hâlinde ribozoma taşır"],
             ["**tRNA (taşıyıcı)**", "Çekirdekte",
              "**Antikodonuyla** kodona bağlanır; ilgili **amino asidi** getirir"],
             ["**rRNA (ribozomal)**", "Çekirdekçikte",
              "Proteinlerle birleşerek **ribozomun yapısını** oluşturur"],
         ],
         "oranlar": [0.22, 0.32, 0.46]},
        {"tur": "gorsel", "baslik": "Şema 4 — DNA'dan proteine",
         "aciklama": "Bilgi akışı tek yönlüdür: **DNA → RNA → protein**. Bu akışa "
                     "moleküler biyolojinin **merkezî dogması** denir.",
         "ciz": S.akis(
             ["DNA", "Transkripsiyon", "mRNA", "Translasyon", "Polipeptit"],
             ["kalıtsal bilgi\nçekirdekte", "**RNA polimeraz**\nmRNA yazar",
              "çekirdekten\nsitoplazmaya", "**ribozomda**\ntRNA amino asit getirir",
              "amino asit\nzinciri"])},
        {"tur": "formul",
         "baslik": "Şifre ve sayı ilişkileri",
         "ifade": "3 DNA nükleotidi = 1 kodon = 1 amino asit\n"
                  "Amino asit sayısı = mRNA nükleotidi / 3\n"
                  "Peptit bağı sayısı = amino asit sayısı − 1\n"
                  "Açığa çıkan su sayısı = peptit bağı sayısı",
         "terimler": [
             ("Kodon", "mRNA üzerindeki **üçlü** nükleotit dizisi"),
             ("Antikodon", "tRNA üzerindeki, kodonu **tamamlayan** üçlü dizi"),
             ("Başlangıç kodonu", "**AUG** — metiyonin amino asidini kodlar"),
             ("Durdurma kodonu", "**UAA, UAG, UGA** — amino asit **kodlamaz**, sentezi bitirir"),
         ],
         "not": "**64 kodon**, **20 amino asit** vardır. Bir amino asidi birden çok "
                "kodon kodlayabilir; bu duruma şifrenin **yedekli (dejenere)** olması "
                "denir. Ama **bir kodon yalnızca bir amino asidi** kodlar."},
        {"tur": "tuzak", "baslik": "Durdurma Kodonu Amino Asit Kodlamaz", "govde":
            "Amino asit sayısı hesaplanırken **durdurma kodonu sayılmaz**. Örneğin 300 "
            "nükleotitlik bir mRNA'da 100 kodon vardır ama sentezlenen protein "
            "**99 amino asitlidir**; sonuncu kodon durdurma kodonudur. Bu ayrıntı "
            "hesap sorularında sürekli sınanır."},
        {"tur": "cozum",
         "baslik": "Protein Sentezi Hesabı",
         "soru": "Bir proteinin sentezi için kullanılan mRNA **450 nükleotitlidir** ve "
                 "sonunda bir durdurma kodonu bulunmaktadır. Bu proteindeki amino asit "
                 "sayısını, peptit bağı sayısını ve açığa çıkan su sayısını bulunuz. "
                 "Bu proteini kodlayan gendeki nükleotit sayısı kaçtır?",
         "adimlar": [
             "Kodon sayısı = 450 / 3 = **150 kodon**.",
             "Sonuncusu durdurma kodonu olduğu için amino asit sayısı = 150 − 1 = "
             "**149 amino asit**.",
             "Peptit bağı = 149 − 1 = **148**; açığa çıkan su = **148**.",
             "mRNA, DNA'nın **tek ipliğinden** yazılır; gen ise **çift ipliklidir**. "
             "Gendeki nükleotit sayısı = 450 × 2 = **900**.",
         ],
         "sonuc": "149 amino asit, 148 peptit bağı, 148 su; gen 900 nükleotitlidir."},
        {"tur": "dikkat", "baslik": "Prokaryot ve Ökaryotta Sentez Farkı", "govde":
            "**Prokaryotta** çekirdek zarı olmadığı için transkripsiyon ve translasyon "
            "**aynı anda ve aynı yerde** olur. **Ökaryotta** transkripsiyon "
            "**çekirdekte**, translasyon **sitoplazmada** gerçekleşir; ayrıca ökaryotta "
            "mRNA çekirdekten çıkmadan **intronlar çıkarılır (splicing)**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Mutasyon"},
        {"tur": "tanim", "kavram": "Mutasyon",
         "aciklama": "DNA'nın **nükleotit dizisinde** ya da kromozom yapısında meydana "
                     "gelen **kalıcı değişimdir**. **Vücut hücrelerinde** olursa "
                     "yalnızca bireyi etkiler; **eşey hücrelerinde** olursa **kalıtılır**."},
        {"tur": "tablo",
         "basliklar": ["Mutasyon türü", "Ne olur", "Etkisi"],
         "satirlar": [
             ["**Nokta (yer değiştirme)**", "Bir nükleotit yerine başkası gelir",
              "Şifre yedekli olduğu için **etkisiz** kalabilir; bir amino asit değişebilir "
              "(**orak hücreli anemi**)"],
             ["**Ekleme / çıkarma**", "Bir ya da iki nükleotit eklenir veya çıkarılır",
              "**Okuma çerçevesi kayar**; o noktadan sonraki bütün amino asitler değişir — "
              "**en ağır** sonuç"],
             ["**Kromozom sayısı**", "Kromozom sayısı değişir (ayrılmama)",
              "Down (21. trizomi), Turner (X0), Klinefelter (XXY)"],
             ["**Kromozom yapısı**", "Kopma, eksilme, ters dönme, yer değiştirme",
              "Kedi miyavlaması sendromu (5. kromozomda eksilme)"],
         ],
         "oranlar": [0.24, 0.32, 0.44]},
        {"tur": "maddeler", "ogeler": [
            "**Mutasyon her zaman zararlı değildir**: etkisiz (nötr) olabilir, hatta "
            "**yararlı** olabilir. Bakterilerde antibiyotik direnci ve orak hücre "
            "alelinin sıtmaya direnç sağlaması buna örnektir.",
            "**Mutasyon çeşitliliğin kaynağıdır**; doğal seçilim ancak var olan "
            "çeşitlilik üzerinde çalışabilir. Bu yüzden mutasyon **evrimin ham "
            "maddesidir**.",
            "**Mutajen etkenler**: ultraviyole ve radyoaktif ışınlar, bazı kimyasallar "
            "(katran, benzen), bazı virüsler.",
            "**Modifikasyon** mutasyondan farklıdır: çevre etkisiyle **fenotipte** olur, "
            "**DNA değişmez** ve **kalıtılmaz** (Himalaya tavşanının tüy rengi, "
            "sıcaklıkla değişen çuha çiçeği rengi).",
        ]},
        {"tur": "tuzak", "baslik": "Mutasyon mu Modifikasyon mu?", "govde":
            "Soruda \"kalıtılır mı\" diye sorulduğunda cevap ayrımı verir: "
            "**mutasyon DNA'da olur ve (eşey hücresindeyse) kalıtılır**; "
            "**modifikasyon yalnızca fenotipte olur ve asla kalıtılmaz**. "
            "Güneşte bronzlaşmak modifikasyon, güneş yüzünden deri hücresinde oluşan "
            "DNA hasarı mutasyondur."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Genetik Mühendisliği ve Biyoteknoloji"},
        {"tur": "tablo",
         "basliklar": ["Uygulama", "Nasıl çalışır", "Kullanım alanı"],
         "satirlar": [
             ["**Rekombinant DNA**", "**Restriksiyon enzimi** DNA'yı keser, **ligaz** "
              "yapıştırır; gen **plazmide** takılır",
              "Bakteriye **insülin, büyüme hormonu** ürettirme"],
             ["**PCR**", "DNA parçası laboratuvarda **milyonlarca kez çoğaltılır**",
              "Adli tıp, hastalık tanısı, arkeoloji"],
             ["**DNA parmak izi**", "Kişiye özgü **tekrar dizileri** karşılaştırılır",
              "Suç soruşturması, babalık testi"],
             ["**Gen tedavisi**", "Bozuk genin yerine **sağlam gen** aktarılır",
              "Kalıtsal hastalıkların tedavisi"],
             ["**Klonlama**", "Bir bireyin **genetik kopyası** üretilir",
              "Koyun Dolly; tarım ve tıp uygulamaları"],
             ["**Kök hücre**", "Farklılaşmamış hücreler **istenen dokuya** yönlendirilir",
              "Doku ve organ onarımı"],
         ],
         "oranlar": [0.22, 0.42, 0.36]},
        {"tur": "dikkat", "baslik": "Plazmid Neden Kullanılır?", "govde":
            "**Plazmid**, bakteride ana DNA'dan **bağımsız çoğalabilen** halkasal küçük "
            "bir DNA parçasıdır. İstenen gen plazmide takılıp bakteriye verildiğinde, "
            "bakteri çoğaldıkça gen de çoğalır ve **protein üretilir**. İnsan insülininin "
            "bakteriye ürettirilmesi bu yolla yapılır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**DNA çift iplikli, deoksiriboz, timin**; **RNA tek iplikli, riboz, urasil**.",
            "**A = T**, **G = C**; **A–T ikili**, **G–C üçlü** hidrojen bağı.",
            "**Nükleotit = fosfat = şeker = baz sayısı**; hidrojen bağı farklıdır.",
            "Eşlenme **yarı korunumludur**; her yeni molekülde **bir eski iplik** vardır.",
            "**Helikaz açar, primaz başlatır, polimeraz yazar, ligaz birleştirir.**",
            "**3 nükleotit = 1 kodon = 1 amino asit.**",
            "**64 kodon, 20 amino asit**; şifre **yedeklidir**.",
            "**Durdurma kodonu amino asit kodlamaz** — hesapta çıkarılır.",
            "**Peptit bağı = amino asit − 1 = açığa çıkan su.**",
            "**Ekleme/çıkarma mutasyonu okuma çerçevesini kaydırır** — en ağır olanıdır.",
            "**Modifikasyon DNA'yı değiştirmez ve kalıtılmaz.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde hesap soruları ağırlıktadır. Her hesapta önce **hangi "
            "birimden hangi birime** geçtiğini yaz: nükleotit mi, kodon mu, amino asit "
            "mi? Birim karışıklığı, bu konuda kaybedilen puanın neredeyse tamamıdır.",
        "satir_sayisi": 2,
        "sorular": [
            "Nükleotidin üç kısmını yazınız.",
            "DNA ile RNA'yı şeker, baz ve iplik sayısı bakımından karşılaştırınız.",
            "DNA ve RNA'da ortak bulunan bazları yazınız.",
            "Chargaff kuralını yazarak dayandığı yapısal nedeni açıklayınız.",
            "A–T ve G–C arasındaki hidrojen bağı sayılarını yazınız.",
            "G–C oranı yüksek bir DNA'nın neden daha dayanıklı olduğunu açıklayınız.",
            "1200 nükleotitli, 300 adeninli bir DNA'da guanin sayısını bulunuz.",
            "Aynı DNA'daki toplam hidrojen bağı sayısını hesaplayınız.",
            "Bir DNA'da nükleotit, fosfat, şeker ve baz sayıları arasındaki ilişkiyi yazınız.",
            "Yarı korunumlu eşlenmeyi tanımlayınız ve hangi deneyle kanıtlandığını yazınız.",
            "DNA eşlenmesinin hücre döngüsünün hangi evresinde olduğunu yazınız.",
            "Helikaz, primaz, DNA polimeraz ve ligaz enzimlerinin görevlerini yazınız.",
            "Bir ipliğin kesintili sentezlenmesinin nedenini açıklayınız.",
            "Okazaki parçacıklarının ne olduğunu ve nasıl birleştirildiğini yazınız.",
            "Ökaryotta eşlenmenin çok noktadan başlamasının nedenini açıklayınız.",
            "Bir DNA 4 kez eşlendiğinde kaç molekül oluşur ve kaçında eski iplik bulunur?",
            "Üç RNA çeşidini üretildikleri yer ve görevleriyle yazınız.",
            "Merkezî dogmayı bir okla gösteriniz ve her adımın adını yazınız.",
            "Transkripsiyonu tanımlayarak görevli enzimi yazınız.",
            "Translasyonun gerçekleştiği organeli ve rol alan iki RNA'yı yazınız.",
            "Kodon ve antikodon kavramlarını ayırt ediniz.",
            "Başlangıç kodonunu ve kodladığı amino asidi yazınız.",
            "Durdurma kodonlarını yazarak amino asit kodlayıp kodlamadıklarını belirtiniz.",
            "64 kodon ve 20 amino asit ilişkisini 'yedekli şifre' kavramıyla açıklayınız.",
            "'Bir kodon birden çok amino asidi kodlayabilir' ifadesindeki hatayı düzeltiniz.",
            "450 nükleotitli bir mRNA'dan sentezlenen proteindeki amino asit sayısını bulunuz.",
            "Aynı proteindeki peptit bağı sayısını ve açığa çıkan su sayısını yazınız.",
            "Bu proteini kodlayan gendeki nükleotit sayısını hesaplayınız.",
            "Prokaryot ve ökaryotta protein sentezini yer ve zaman bakımından karşılaştırınız.",
            "Ökaryotta mRNA'nın çekirdekten çıkmadan geçirdiği işlemi yazınız.",
            "Bir polipeptidin sentezi sırasında ribozomun mRNA üzerindeki hareket yönünü yazınız.",
            "Aynı mRNA'ya birden çok ribozomun bağlanmasının avantajını açıklayınız.",
            "Mutasyonu tanımlayarak vücut ve eşey hücresindeki sonuçlarını karşılaştırınız.",
            "Nokta mutasyonunun etkisiz kalabilmesinin nedenini açıklayınız.",
            "Orak hücreli aneminin moleküler nedenini yazınız.",
            "Ekleme/çıkarma mutasyonunun neden en ağır sonucu doğurduğunu açıklayınız.",
            "Down sendromunun kromozomal nedenini yazınız.",
            "Turner ve Klinefelter sendromlarının kromozom yapılarını yazınız.",
            "Mutasyonun her zaman zararlı olmadığını iki örnekle açıklayınız.",
            "Mutasyonun evrimdeki rolünü açıklayınız.",
            "Üç mutajen etkene örnek veriniz.",
            "Modifikasyonu tanımlayarak mutasyondan iki farkını yazınız.",
            "Himalaya tavşanının tüy renginin değişmesinin mutasyon mu modifikasyon mu olduğunu gerekçesiyle yazınız.",
            "Rekombinant DNA teknolojisinin basamaklarını yazınız.",
            "Restriksiyon enziminin görevini açıklayınız.",
            "Plazmidin neden taşıyıcı olarak kullanıldığını açıklayınız.",
            "PCR'ın ne işe yaradığını ve iki kullanım alanını yazınız.",
            "DNA parmak izinin çalışma ilkesini açıklayınız.",
            "Gen tedavisinin amacını yazınız.",
            "Kök hücrenin tıptaki kullanım amacını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Beş karbonlu şeker** (deoksiriboz ya da riboz), **fosfat grubu** ve **azotlu organik baz**.",
            "**DNA**: çift iplikli, deoksiriboz, timin içerir. **RNA**: tek iplikli, riboz, timin yerine **urasil** içerir.",
            "**Adenin (A)**, **guanin (G)** ve **sitozin (C)**.",
            "**A = T** ve **G = C**'dir. Nedeni, adeninin yalnızca timinle, guaninin yalnızca sitozinle **hidrojen bağı kurabilmesidir**.",
            "**A–T arasında 2**, **G–C arasında 3** hidrojen bağı vardır.",
            "G–C bağı **üçlü** olduğu için A–T'nin ikili bağından güçlüdür. G–C oranı yüksek DNA'yı ayırmak daha çok enerji ister; **erime sıcaklığı yüksektir**.",
            "A = T = 300 → A + T = 600. G + C = 1200 − 600 = 600. **G = C = 300**.",
            "Zayıf bağ = 2·A + 3·G = 2·300 + 3·300 = **1500**.",
            "Hepsi **birbirine eşittir**: her nükleotitte bir şeker, bir fosfat ve bir baz bulunur.",
            "Oluşan her yeni DNA molekülünün **bir ipliği eski, bir ipliği yenidir**. **Meselson ve Stahl** deneyiyle kanıtlanmıştır.",
            "İnterfazın **S evresinde**.",
            "**Helikaz** hidrojen bağlarını kırıp sarmalı açar. **Primaz** RNA primeri yerleştirir. **DNA polimeraz** nükleotit ekler (5'→3') ve hata düzeltir. **Ligaz** parçaları birleştirir.",
            "DNA polimeraz yalnızca **5' → 3' yönünde** çalışabilir. İki iplik ters yönlü olduğu için biri kesintisiz, diğeri kısa parçalar hâlinde sentezlenir.",
            "Kesintili ipliğin **kısa DNA parçalarıdır**. **Ligaz** enzimiyle birbirine bağlanarak bütün bir iplik oluşturulur.",
            "Ökaryot DNA'sı **çok uzundur**. Tek noktadan başlansaydı kopyalama günler sürerdi; çok noktadan başlamak süreyi makul düzeye indirir.",
            "**2^4 = 16 molekül** oluşur. Bunlardan yalnızca **2 tanesinde** başlangıçtaki eski ipliklerden biri bulunur.",
            "**mRNA**: çekirdekte üretilir, şifreyi **kodon** hâlinde ribozoma taşır. **tRNA**: çekirdekte üretilir, **antikodonuyla** amino asit getirir. **rRNA**: çekirdekçikte üretilir, **ribozomun yapısına** katılır.",
            "**DNA → (transkripsiyon) → RNA → (translasyon) → Protein**.",
            "DNA'nın **anlamlı ipliğinden mRNA sentezlenmesidir**. Görevli enzim **RNA polimerazdır**.",
            "**Ribozomda** gerçekleşir. **mRNA** şifreyi taşır, **tRNA** amino asidi getirir (rRNA ribozomun yapısındadır).",
            "**Kodon mRNA üzerindeki** üçlü nükleotit dizisidir. **Antikodon tRNA üzerindeki**, kodonu tamamlayan üçlü dizidir.",
            "**AUG**; **metiyonin** amino asidini kodlar.",
            "**UAA, UAG, UGA**. Bunlar **amino asit kodlamaz**; sentezin bitmesini sağlarlar.",
            "20 amino asit için 64 kodon vardır; bu yüzden bir amino asidi **birden çok kodon** kodlayabilir. Şifrenin bu özelliğine **yedeklilik (dejenerelik)** denir.",
            "Tersi doğrudur: **bir amino asidi birden çok kodon** kodlayabilir, ama **bir kodon yalnızca bir amino asidi** kodlar. Şifre bu yönüyle **tek anlamlıdır**.",
            "Kodon sayısı = 450/3 = 150. Sonuncusu durdurma kodonu olduğu için **149 amino asit**.",
            "Peptit bağı = 149 − 1 = **148**; açığa çıkan su = **148**.",
            "mRNA, DNA'nın **tek ipliğinden** yazılır; gen **çift ipliklidir**: 450 × 2 = **900 nükleotit**.",
            "**Prokaryotta** çekirdek zarı olmadığı için ikisi **aynı yerde ve aynı anda** olur. **Ökaryotta** transkripsiyon **çekirdekte**, translasyon **sitoplazmada** gerçekleşir.",
            "**İntronların çıkarılması (splicing)** ve ekzonların birleştirilmesi; ayrıca uçlara koruyucu başlık ve kuyruk eklenir.",
            "Ribozom mRNA üzerinde **5' → 3' yönünde** ilerler ve kodonları sırayla okur.",
            "Aynı mRNA'dan **aynı anda çok sayıda protein** sentezlenir (polizom). Bu, üretimi büyük ölçüde hızlandırır.",
            "DNA dizisindeki **kalıcı değişimdir**. **Vücut hücresinde** olursa yalnızca bireyi etkiler ve kalıtılmaz; **eşey hücresinde** olursa **döllere aktarılır**.",
            "Genetik şifre **yedekli** olduğu için değişen kodon **aynı amino asidi** kodlayabilir; bu durumda protein değişmez ve mutasyon etkisiz kalır.",
            "Hemoglobin genindeki **tek bir nükleotidin değişmesiyle** bir amino asit (glutamik asit yerine valin) değişir; hemoglobin şekli bozulur ve alyuvar orak biçimini alır.",
            "Nükleotit sayısı üçün katı olmayacak şekilde değiştiği için **okuma çerçevesi kayar**; mutasyon noktasından sonraki **bütün kodonlar** ve dolayısıyla bütün amino asitler değişir.",
            "**21. kromozomun üç adet** bulunmasıdır (trizomi 21); mayozda ayrılmama sonucu oluşur.",
            "**Turner: X0** (tek X, 45 kromozom). **Klinefelter: XXY** (47 kromozom).",
            "Bakterilerde **antibiyotik direnci** kazandırabilir; orak hücre aleli taşıyıcılarda **sıtmaya direnç** sağlar. Ayrıca birçok mutasyon **etkisizdir**.",
            "Mutasyon, popülasyondaki **kalıtsal çeşitliliğin tek yeni kaynağıdır**. Doğal seçilim ancak var olan çeşitlilik üzerinde işleyebilir; bu yüzden mutasyon **evrimin ham maddesidir**.",
            "**Ultraviyole ve radyoaktif ışınlar**, **katran/benzen gibi kimyasallar**, **bazı virüsler**.",
            "**Çevre etkisiyle fenotipte oluşan değişimdir**. Mutasyondan farkları: **DNA değişmez** ve **kalıtılmaz**.",
            "**Modifikasyondur**. Tüy rengi **sıcaklığa bağlı olarak** değişir; DNA'da bir değişiklik yoktur ve bu özellik yavrulara aktarılmaz.",
            "İstenen gen **restriksiyon enzimiyle** kesilir, **plazmid** de aynı enzimle kesilir, **ligazla** birleştirilir, plazmid **bakteriye** aktarılır; bakteri çoğalırken proteini üretir.",
            "DNA'yı **belirli baz dizilerinden keser**; kesme sonucu oluşan yapışkan uçlar, gen ile plazmidin birbirine bağlanmasını sağlar.",
            "Bakteride ana DNA'dan **bağımsız çoğalabilen** halkasal küçük bir DNA'dır. Bakteriye kolayca girer ve bakteri çoğaldıkça **taşıdığı geni de çoğaltır**.",
            "Küçük bir DNA parçasını laboratuvarda **milyonlarca kez çoğaltır**. **Adli tıpta** ve **hastalık tanısında** kullanılır (ayrıca arkeolojik örneklerde).",
            "Herkeste farklı olan **tekrar eden DNA dizileri** karşılaştırılır. Kişiye özgü bir desen verdiği için **suç soruşturması** ve **babalık testinde** kullanılır.",
            "Kalıtsal bir hastalığa yol açan **bozuk genin işlevini**, hücreye sağlam bir gen aktarılarak düzeltmektir.",
            "Kök hücreler **farklılaşmamış** hücrelerdir; istenen doku tipine yönlendirilerek **hasarlı doku ve organların onarımında** kullanılır.",
        ],
    },
}
