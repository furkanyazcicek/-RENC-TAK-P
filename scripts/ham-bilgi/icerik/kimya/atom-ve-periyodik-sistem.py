"""TYT Kimya — Atom ve Periyodik Sistem (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: ATOM VE PERİYODİK SİSTEM",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Atom ve Periyodik Sistem",
    "alt_baslik": "Ham bilgi notu — atom modelleri, atomun yapısı, izotoplar, "
                  "elektron dizilimi ve periyodik özellikler; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Atom ve Periyodik Sistem",
        "kazanimlar": "9.2.1.1 — Atom modellerinin gelişimini açıklar. "
                      "9.2.1.2 — Atomun yapısını taneciklerle açıklar. "
                      "9.2.2.1 — Periyodik sistemi ve periyodik özellikleri yorumlar.",
        "kapsam": "Dalton'dan modern modele, proton-nötron-elektron, atom ve kütle "
                  "numarası, izotop-izoton-izobar, iyon yükü, elektron dizilimi, "
                  "grup-periyot bulma, periyodik özellikler, 50 analiz sorusu",
        "nasil": "Bu konu TYT kimyanın **en çok soru gelen** başlığıdır. Elektron "
                 "dizilimini kâğıda yazmadan geçme; grup-periyot bulmayı **on kez** "
                 "tekrarla. Periyodik özellik oklarını ezberle.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Atom ve periyodik sistem, kimyanın geri kalanının temelidir — "
                    "burayı boş bırakırsan bağlar ve mol de çöker.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Atom Modellerinin Gelişimi"},
        {"tur": "gorsel", "baslik": "Şema 1 — Modellerin sırası",
         "aciklama": "Her model bir öncekinin **açıklayamadığı deneyi** açıklamak "
                     "için doğdu. Sınavda 'hangi model neyi açıklayamadı' diye sorulur.",
         "ciz": S.akis(
             ["Dalton", "Thomson", "Rutherford", "Bohr", "Modern"],
             ["içi dolu berk\nküre", "üzümlü kek", "çekirdek\nkeşfi",
              "kararlı\nyörüngeler", "olasılık\nbulutu"])},
        {"tur": "tablo",
         "basliklar": ["Model", "Temel İddiası", "Açıklayamadığı"],
         "oranlar": [0.20, 0.42, 0.38],
         "satirlar": [
             ["**Dalton**", "Atom **içi dolu**, bölünemez, berk bir küredir. Aynı "
              "elementin atomları özdeştir.",
              "Elektrik olayları, **izotoplar**, atom altı tanecikler"],
             ["**Thomson**", "Atom **(+) yüklü bir küre**; içine **(−) elektronlar** "
              "üzüm gibi gömülü. Atom **nötr**dür.",
              "**Çekirdeğin varlığı**; altın levha deneyindeki sapmalar"],
             ["**Rutherford**", "Kütlenin ve (+) yükün tamamı çok küçük bir "
              "**çekirdekte**; atomun büyük kısmı **boşluk**. Elektronlar çevrede döner.",
              "Elektronun neden çekirdeğe **düşmediği**, atom spektrumları"],
             ["**Bohr**", "Elektronlar **belirli enerji düzeylerinde (kabuklarda)** "
              "döner. Enerji alınca üst düzeye çıkar, verince iner.",
              "**Çok elektronlu** atomların spektrumları"],
             ["**Modern**", "Elektronun yeri **kesin bilinemez**; bulunma "
              "**olasılığının** yüksek olduğu bölgeler (orbital) vardır.",
              "— (bugün kabul edilen modeldir)"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Altın levha (Rutherford) deneyi**: İnce altın levhaya gönderilen alfa "
            "taneciklerinin **çoğu sapmadan geçti** → atom büyük ölçüde **boşluktur**. "
            "**Çok azı geri döndü** → atomun merkezinde **küçük, yoğun ve (+) yüklü "
            "bir çekirdek** vardır.",
            "**Nötronu** James Chadwick keşfetti. Çekirdeğin kütlesinin beklenenden "
            "büyük olması bu keşfe götürdü.",
        ]},
        {"tur": "tuzak", "baslik": "'Atom Bölünemez' Artık Doğru Değil", "govde":
            "Dalton'un 'atom bölünemez' iddiası **çürütülmüştür**. Ayrıca 'aynı "
            "elementin bütün atomları özdeştir' iddiası da **izotopların keşfiyle** "
            "geçersiz kaldı. Sorularda Dalton'a atfedilen bu iki madde çeldirici "
            "olarak kullanılır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Atomun Yapısı"},
        {"tur": "tablo",
         "basliklar": ["Tanecik", "Yükü", "Yeri", "Kütlesi"],
         "oranlar": [0.24, 0.18, 0.28, 0.30],
         "satirlar": [
             ["**Proton (p)**", "**+1**", "Çekirdek", "1 akb (elektronun ~1836 katı)"],
             ["**Nötron (n)**", "**0**", "Çekirdek", "1 akb"],
             ["**Elektron (e)**", "**−1**", "Çekirdek çevresi (katmanlar)", "İhmal edilir"],
         ]},
        {"tur": "formul",
         "baslik": "Atomun kimliği",
         "ifade": "Atom Numarası (Z) = Proton Sayısı        Kütle Numarası (A) = p + n",
         "terimler": [
             ("Z", "**Proton sayısı**. Elementin kimliğidir; değişirse element değişir."),
             ("A", "**Kütle numarası** = proton + nötron. Çekirdekteki tanecik sayısıdır."),
             ("n", "Nötron sayısı = **A − Z**"),
             ("e", "**Nötr** atomda elektron sayısı = proton sayısı = Z"),
         ],
         "not": "**Elektron kütle numarasına katılmaz** — kütlesi ihmal edilecek "
                "kadar küçüktür. Bu, en sık yapılan hatadır."},
        {"tur": "maddeler", "ogeler": [
            "**Nötr atom**: proton = elektron. Toplam yük **sıfır**dır.",
            "**Katyon (+ yüklü iyon)**: Atom **elektron vermiştir**. Elektron sayısı "
            "**azalır**, proton değişmez. Örnek: Na → Na(+1), 11 proton, **10 elektron**.",
            "**Anyon (− yüklü iyon)**: Atom **elektron almıştır**. Elektron sayısı "
            "**artar**. Örnek: Cl → Cl(−1), 17 proton, **18 elektron**.",
            "**Metaller elektron verir** (katyon olur), **ametaller elektron alır** "
            "(anyon olur).",
            "İyon yükü = **proton sayısı − elektron sayısı**.",
        ]},
        {"tur": "cozum",
         "baslik": "İyon Hesabı",
         "soru": "Kütle numarası 56, nötron sayısı 30 olan bir atom **3 elektron "
                 "vermiştir**. Bu iyonun proton ve elektron sayısını bulunuz.",
         "adimlar": [
             "Proton = A − n = 56 − 30 = **26** (bu, demirdir).",
             "Nötr hâlde elektron = proton = **26**.",
             "3 elektron **verdiği** için elektron sayısı azalır: 26 − 3 = **23**.",
             "Proton sayısı **hiç değişmez**: yine **26**.",
         ],
         "sonuc": "Fe(+3) iyonu: 26 proton, 23 elektron, 30 nötron."},

        {"tur": "altbolum", "baslik": "İzotop, İzoton, İzobar, İzoelektronik"},
        {"tur": "tablo",
         "basliklar": ["Kavram", "Neyi Aynı?", "Neyi Farklı?", "Örnek"],
         "oranlar": [0.24, 0.22, 0.24, 0.30],
         "satirlar": [
             ["**İzotop**", "**Proton** (Z)", "Nötron ve kütle numarası",
              "H-1, H-2, H-3 · C-12, C-14"],
             ["**İzoton**", "**Nötron** sayısı", "Proton ve kütle numarası", "Na-23 ve Mg-24"],
             ["**İzobar**", "**Kütle numarası** (A)", "Proton ve nötron", "Ar-40 ve Ca-40"],
             ["**İzoelektronik**", "**Elektron** sayısı", "Proton sayısı",
              "Na(+1), Mg(+2), F(−1), Ne"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**İzotop atomların kimyasal özellikleri aynıdır** — çünkü kimyasal "
            "özelliği **elektron sayısı** belirler ve izotoplarda elektron sayısı "
            "aynıdır. **Fiziksel özellikleri farklıdır** (kütle, yoğunluk, kaynama "
            "noktası), çünkü nötron sayısı farklıdır.",
            "**İzoelektronik** tanecikler aynı elektron dizilimine sahiptir; ama "
            "proton sayıları farklı olduğu için **çapları farklıdır**.",
        ]},
        {"tur": "tuzak", "baslik": "İzotop = Aynı Element", "govde":
            "İzotoplar **aynı elementin** farklı atomlarıdır; proton sayıları eşittir. "
            "İzoton ve izobar ise **farklı elementlerin** atomlarıdır. 'İzotop atomlar "
            "farklı elementtir' ifadesi **yanlıştır**."},
        {"tur": "cikmis", "baslik": "Ortalama atom kütlesi", "govde":
            "Periyodik tablodaki kütle, izotopların **doğadaki bolluk yüzdesine göre "
            "ağırlıklı ortalamasıdır**. Klorun kütlesinin 35,5 çıkmasının nedeni "
            "budur: Cl-35 (%75) ve Cl-37 (%25) karışımıdır. Hiçbir klor atomunun "
            "kütlesi tek başına 35,5 **değildir**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Elektron Dizilimi"},
        {"tur": "maddeler", "ogeler": [
            "Elektronlar çekirdek çevresinde **katmanlara (enerji düzeylerine)** "
            "yerleşir. Katmanlar içten dışa **K, L, M, N** diye adlandırılır.",
            "Bir katmanın alabileceği **en fazla** elektron sayısı **2n²** "
            "formülüyle bulunur: K = 2, L = 8, M = 18, N = 32.",
            "**Ancak son katmanda 8'den fazla elektron bulunamaz** (TYT düzeyinde "
            "geçerli kural). Bu yüzden M katmanı son katmansa en çok 8 alır.",
            "**Değerlik (valans) elektronu**: **son katmandaki** elektron sayısıdır. "
            "Elementin kimyasal davranışını bu belirler.",
        ]},
        {"tur": "cozum",
         "baslik": "20 Elektronlu Atomun Dizilimi",
         "soru": "Atom numarası **20** olan elementin katman dizilimini yazınız, "
                 "grup ve periyodunu bulunuz.",
         "adimlar": [
             "K katmanına en fazla 2 → **2** elektron yerleşir. Kalan: 18.",
             "L katmanına en fazla 8 → **8** elektron yerleşir. Kalan: 10.",
             "M katmanı 18 alabilir ama **son katman 8'i geçemez**; ayrıca kalan 10 "
             "elektronun 2'si N'ye geçer → M'ye **8** yerleşir. Kalan: 2.",
             "N katmanına **2** elektron yerleşir. Dizilim: **2 — 8 — 8 — 2**.",
             "**Periyot = katman sayısı = 4**. **Değerlik elektronu = 2** → **2A grubu**.",
         ],
         "sonuc": "2 — 8 — 8 — 2 · 4. periyot, 2A grubu (Kalsiyum)."},
        {"tur": "taktik", "baslik": "Grup ve Periyot Bulma", "govde":
            "Katman dizilimini yazdıktan sonra iki soru yeter:",
         "ogeler": [
             "**Periyot = katman (kabuk) sayısı.** Dizilimde kaç sayı varsa o kadar "
             "periyottur.",
             "**A grubu numarası = son katmandaki elektron sayısı.** 2-8-1 ise "
             "**1A**, 2-8-7 ise **7A**.",
             "Son katmanı **8 dolu** olan (helyumda 2) elementler **8A — soy gaz**tır.",
             "İyonun grubu sorulursa **nötr hâline** dön; grup nötr atoma göre "
             "belirlenir.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Periyodik Sistem"},
        {"tur": "maddeler", "ogeler": [
            "**Mendeleyev** elementleri **artan atom kütlesine** göre sıraladı; bazı "
            "yerleri boş bıraktı ve keşfedilmemiş elementlerin özelliklerini "
            "**önceden bildi**.",
            "**Moseley**, sıralamanın **artan atom numarasına (proton sayısına)** göre "
            "yapılması gerektiğini gösterdi. Bugünkü tablo Moseley'in düzenidir.",
            "**Periyot (yatay sıra)**: 7 tanedir. Periyot numarası = **katman sayısı**.",
            "**Grup (dikey sütun)**: 18 tanedir. **A grupları** baş gruplar, "
            "**B grupları** geçiş metalleridir.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Grup", "Adı", "Değerlik e", "Özellik"],
         "oranlar": [0.14, 0.30, 0.18, 0.38],
         "satirlar": [
             ["**1A**", "Alkali metaller", "1", "**En aktif metaller**, suyla şiddetli "
              "tepkir (H hariç)"],
             ["**2A**", "Toprak alkali metaller", "2", "Aktif metaller"],
             ["**3A**", "Toprak metalleri", "3", "Al bu gruptadır"],
             ["**4A**", "Karbon grubu", "4", "C, Si — yarı iletkenler"],
             ["**5A**", "Azot grubu", "5", "N, P"],
             ["**6A**", "Kalkojenler", "6", "O, S"],
             ["**7A**", "Halojenler", "7", "**En aktif ametaller**"],
             ["**8A**", "Soy gazlar", "8 (He'de 2)", "**Kararlı**, tepkimeye girmez"],
         ]},
        {"tur": "dikkat", "baslik": "Hidrojen Alkali Metal Değildir", "govde":
            "Hidrojen 1A grubunda **yer alır** ama **alkali metal değildir**; "
            "bir **ametaldir**. Tabloda oraya konmasının nedeni değerlik "
            "elektronunun 1 olmasıdır. Bu, doğrudan sorulan bir ayrımdır."},

        {"tur": "altbolum", "baslik": "Metal, Ametal ve Yarı Metal"},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç sınıfın karşılaştırması",
         "ciz": S.karsilastirma(
             "Metaller",
             ["Elektron **verir** → katyon", "Isı ve elektriği **iyi iletir**",
              "**Parlak**, tel ve levha olur", "Oda sıcaklığında **katı** (Hg hariç)",
              "Bazik oksit oluşturur"],
             "Ametaller",
             ["Elektron **alır** → anyon", "**Yalıtkan** (grafit hariç)",
              "**Mat**, kırılgan", "Katı, sıvı veya gaz olabilir",
              "Asidik oksit oluşturur"],
             "Yarı metaller",
             ["B, Si, Ge, As, Sb, Te", "**Yarı iletken**",
              "Metal ve ametal arası", "Elektronik sanayinin temeli"])},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Periyodik Özellikler"},
        {"tur": "tablo",
         "basliklar": ["Özellik", "Soldan Sağa (aynı periyot)", "Yukarıdan Aşağı (aynı grup)"],
         "oranlar": [0.30, 0.35, 0.35],
         "satirlar": [
             ["**Atom numarası**", "**Artar**", "**Artar**"],
             ["**Atom yarıçapı (çap)**", "**Azalır**", "**Artar**"],
             ["**İyonlaşma enerjisi**", "**Artar**", "**Azalır**"],
             ["**Elektron ilgisi**", "**Artar**", "**Azalır**"],
             ["**Elektronegatiflik**", "**Artar**", "**Azalır**"],
             ["**Metalik özellik**", "**Azalır**", "**Artar**"],
             ["**Ametalik özellik**", "**Artar**", "**Azalır**"],
             ["**Değerlik elektronu**", "**Artar**", "**Değişmez**"],
             ["**Katman sayısı**", "**Değişmez**", "**Artar**"],
         ]},
        {"tur": "ezber", "baslik": "Tek Cümlelik Kural", "ogeler": [
            "Periyodik tabloda **sağ üste** gidildikçe: çap **küçülür**, "
            "iyonlaşma enerjisi ve elektronegatiflik **büyür**, **ametalik** özellik artar.",
            "**Sol alta** gidildikçe: çap **büyür**, iyonlaşma enerjisi **düşer**, "
            "**metalik** özellik artar.",
            "**En elektronegatif element: Flor (F).** En aktif metal: Fransiyum.",
        ]},
        {"tur": "maddeler", "ogeler": [
            "**İyonlaşma enerjisi**: Gaz hâldeki nötr bir atomdan **bir elektron "
            "koparmak** için gereken enerji. Çap küçüldükçe elektron çekirdeğe daha "
            "sıkı bağlı olur ve enerji **artar**.",
            "**Ardışık iyonlaşma enerjileri sürekli artar** (İE1 < İE2 < İE3...). "
            "Çünkü her elektron koptukça geriye kalanlar çekirdeğe daha güçlü çekilir.",
            "İki ardışık iyonlaşma enerjisi arasında **büyük bir sıçrama** varsa, "
            "o noktada **kararlı soy gaz dizilimine** ulaşılmıştır; sıçramadan "
            "önceki elektron sayısı elementin **grup numarasını** verir.",
            "**Elektron ilgisi**: Gaz hâldeki bir atomun **elektron alırken** "
            "açığa çıkardığı enerji. Halojenlerde en yüksektir.",
            "**Elektronegatiflik**: Bir atomun, bağdaki **ortak elektronları kendine "
            "çekme** gücü. Flor en yüksektir.",
        ]},
        {"tur": "cozum",
         "baslik": "İyonlaşma Enerjisi Sıçramasından Grup Bulma",
         "soru": "Bir elementin ardışık iyonlaşma enerjileri (kJ/mol): "
                 "**738 — 1451 — 7733 — 10540**. Bu element hangi gruptadır?",
         "adimlar": [
             "Değerleri karşılaştır: 738 → 1451 arasında normal bir artış var.",
             "1451 → **7733** arasında **çok büyük bir sıçrama** var (yaklaşık 5 katı).",
             "Sıçrama, **kararlı soy gaz dizilimine** ulaşıldığını gösterir.",
             "Sıçramadan önce **2 elektron** koparılmıştır → değerlik elektronu **2**.",
         ],
         "sonuc": "Element 2A grubundadır (toprak alkali metal)."},
        {"tur": "tuzak", "baslik": "İyon Çapı ile Atom Çapını Karıştırma", "govde":
            "**Katyonun çapı, nötr atomundan daha KÜÇÜKTÜR** — elektron kaybettiği "
            "için genellikle bir katman eksilir ve kalan elektronlar daha sıkı "
            "çekilir. **Anyonun çapı, nötr atomundan daha BÜYÜKTÜR** — elektron "
            "eklenince itme artar. Yani: **anyon > nötr atom > katyon**."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Z = proton**, **A = p + n**, **n = A − Z**. Elektron kütleye katılmaz.",
            "İyon yükü = **proton − elektron**. Proton **asla** değişmez.",
            "İzotop: **proton aynı**. İzoton: **nötron aynı**. İzobar: **kütle aynı**.",
            "**Periyot = katman sayısı**, **A grubu = son katman elektron sayısı**.",
            "Sağ üste git: çap **küçülür**, iyonlaşma enerjisi **artar**.",
            "İyonlaşma enerjisindeki **büyük sıçrama** grup numarasını verir.",
            "**Anyon > nötr > katyon** (çap sıralaması).",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülün yarısı **hesap**, yarısı **yorum** sorusudur. Hesap "
            "sorularında ara basamakları yaz; yorum sorularında hangi periyodik "
            "eğilimi kullandığını belirt. Elektron dizilimlerini mutlaka kâğıda dök.",
        "satir_sayisi": 2,
        "sorular": [
            "Dalton atom modelinin çürütülen iki iddiasını yazınız.",
            "Thomson modelinin açıklayamadığı deney hangisidir?",
            "Altın levha deneyinde taneciklerin çoğunun sapmadan geçmesi neyi gösterir?",
            "Aynı deneyde çok az taneciğin geri dönmesi neyi kanıtlar?",
            "Rutherford modelinin açıklayamadığı temel sorun neydi?",
            "Bohr modelinin getirdiği yenilik nedir?",
            "Modern atom modelinde elektronun konumu nasıl tanımlanır?",
            "Nötronu kim keşfetti ve bu keşfe götüren gözlem neydi?",
            "Proton, nötron ve elektronun yük ve kütlelerini karşılaştırınız.",
            "Elektronun kütle numarasına katılmamasının nedeni nedir?",
            "Atom numarası 17, kütle numarası 35 olan atomun nötron sayısı kaçtır?",
            "Kütle numarası 40, nötron sayısı 22 olan atomun proton sayısı kaçtır?",
            "Nötr bir atomda elektron sayısı nasıl bulunur?",
            "Bir atom 2 elektron verirse proton sayısı değişir mi? Gerekçelendiriniz.",
            "S(−2) iyonunda 16 proton varsa elektron sayısı kaçtır?",
            "Al(+3) iyonunda 10 elektron varsa proton sayısı kaçtır?",
            "İyon yükünü veren bağıntıyı yazınız.",
            "Metallerin katyon, ametallerin anyon oluşturmasının nedeni nedir?",
            "İzotop atomların tanımını yapıp bir örnek veriniz.",
            "İzotopların kimyasal özelliklerinin aynı olmasının nedeni nedir?",
            "İzotopların hangi özellikleri farklıdır? Neden?",
            "İzoton ve izobar kavramlarını birer örnekle ayırt ediniz.",
            "Na(+1), Mg(+2) ve F(−1) taneciklerinin ortak özelliği nedir?",
            "İzoelektronik tanecikler aynı çapa sahip midir? Gerekçelendiriniz.",
            "Klorun ortalama atom kütlesinin 35,5 olmasının nedeni nedir?",
            "Katmanların alabileceği en fazla elektron sayısını veren formülü yazınız.",
            "Son katmanda en fazla kaç elektron bulunabilir?",
            "Atom numarası 12 olan elementin katman dizilimini yazınız.",
            "Atom numarası 19 olan elementin grup ve periyodunu bulunuz.",
            "Atom numarası 20 olan elementin dizilimini yazıp grup-periyodunu belirtiniz.",
            "Değerlik elektronu kavramını tanımlayınız ve önemini yazınız.",
            "Periyot numarası neye eşittir?",
            "A grubu numarası neye eşittir?",
            "Mendeleyev ile Moseley'in sıralama ölçütü arasındaki farkı yazınız.",
            "1A grubunun adını ve genel özelliğini yazınız.",
            "Hidrojenin 1A grubunda bulunmasına rağmen alkali metal sayılmamasının nedeni nedir?",
            "7A grubunun adını yazınız ve neden çok aktif olduklarını açıklayınız.",
            "8A grubunun tepkimeye girmemesinin nedeni nedir?",
            "Metal ve ametalleri elektron alışverişi ve iletkenlik açısından karşılaştırınız.",
            "Yarı metallere üç örnek veriniz ve teknolojideki önemini yazınız.",
            "Aynı periyotta soldan sağa gidildikçe atom çapı neden azalır?",
            "Aynı grupta yukarıdan aşağı inildikçe atom çapı neden artar?",
            "İyonlaşma enerjisini tanımlayınız.",
            "Ardışık iyonlaşma enerjilerinin sürekli artmasının nedeni nedir?",
            "İyonlaşma enerjilerinde görülen büyük sıçrama neyi gösterir?",
            "738 — 1451 — 7733 değerlerine sahip element hangi gruptadır? Neden?",
            "Elektronegatifliği en yüksek element hangisidir?",
            "Metalik özellik periyodik tabloda hangi yöne doğru artar?",
            "Katyonun çapı nötr atomundan neden küçüktür?",
            "Anyon, nötr atom ve katyonu çap bakımından sıralayınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**'Atom bölünemez'** (atom altı tanecikler bulundu) ve **'aynı elementin bütün atomları özdeştir'** (izotoplar bulundu).",
            "**Rutherford'un altın levha deneyi.** Thomson modeli çekirdeğin varlığını öngörmediği için sapmaları açıklayamadı.",
            "Atomun **büyük ölçüde boşluk** olduğunu gösterir.",
            "Atomun merkezinde **küçük, çok yoğun ve (+) yüklü bir çekirdek** bulunduğunu kanıtlar.",
            "Dönen elektronun enerji kaybedip **çekirdeğe düşmemesini** açıklayamadı; ayrıca atom spektrumlarını açıklayamadı.",
            "Elektronların gelişigüzel değil, **belirli enerji düzeylerinde (kararlı yörüngelerde)** bulunduğunu; enerji alıp vererek düzey değiştirdiğini ortaya koydu.",
            "Konum kesin olarak bilinemez; elektronun **bulunma olasılığının yüksek olduğu bölge (orbital)** tanımlanır.",
            "**James Chadwick.** Çekirdeğin kütlesinin yalnızca protonlarla açıklanamayacak kadar büyük olması.",
            "**Proton** +1 yüklü, 1 akb; **nötron** yüksüz, 1 akb; **elektron** −1 yüklü, kütlesi ihmal edilir (protonun ~1/1836'sı).",
            "Kütlesi protonun yaklaşık **1/1836'sı** kadardır; toplam kütleyi anlamlı ölçüde değiştirmez.",
            "n = A − Z = 35 − 17 = **18**.",
            "Z = A − n = 40 − 22 = **18**.",
            "Elektron sayısı **proton sayısına (Z)** eşittir.",
            "**Değişmez.** Elektron alışverişi yalnızca **elektron sayısını** değiştirir; proton sayısı değişirse element değişmiş olurdu.",
            "Nötr hâlde 16 elektron vardır; 2 elektron **aldığı** için **18 elektron**.",
            "3 elektron **verdiği** için nötr hâlde 13 elektronu vardı; proton sayısı **13**.",
            "**İyon yükü = proton sayısı − elektron sayısı.**",
            "Metallerin **son katmanındaki elektron sayısı azdır**; vermek daha kolaydır. Ametallerin son katmanı doluya yakındır; **almak** daha kolaydır. İkisi de soy gaz dizilimine ulaşmak ister.",
            "**Proton sayıları aynı, nötron (dolayısıyla kütle) sayıları farklı** atomlardır. Örnek: C-12 ve C-14.",
            "Kimyasal özellikleri **elektron sayısı ve dizilimi** belirler; izotoplarda bunlar aynıdır.",
            "**Fiziksel özellikleri** (kütle, yoğunluk, erime-kaynama noktası, yayılma hızı) farklıdır; çünkü **nötron sayıları** yani kütleleri farklıdır.",
            "**İzoton**: nötron sayıları aynı (Na-23 ve Mg-24). **İzobar**: kütle numaraları aynı (Ar-40 ve Ca-40). İkisi de **farklı elementlerin** atomlarıdır.",
            "**Elektron sayıları aynıdır** (10); yani **izoelektroniktirler**, aynı elektron dizilimine sahiptirler.",
            "**Hayır.** Elektron sayıları eşit olsa da **proton sayıları farklıdır**; proton sayısı arttıkça çekim artar ve çap **küçülür**.",
            "Doğada Cl-35 (%75) ve Cl-37 (%25) izotopları bulunur. Tablodaki değer bunların **bolluk yüzdesine göre ağırlıklı ortalamasıdır**; tek bir atomun kütlesi değildir.",
            "**2n²** (n = katman numarası): K = 2, L = 8, M = 18, N = 32.",
            "**8 elektron.**",
            "**2 — 8 — 2.**",
            "**2 — 8 — 8 — 1** → **4. periyot, 1A grubu** (potasyum).",
            "**2 — 8 — 8 — 2** → **4. periyot, 2A grubu** (kalsiyum).",
            "**Son katmandaki elektron sayısıdır.** Elementin kimyasal davranışını, hangi bağı kuracağını ve grubunu belirler.",
            "**Katman (kabuk) sayısına** eşittir.",
            "**Son katmandaki elektron sayısına** eşittir.",
            "Mendeleyev **artan atom kütlesine**, Moseley **artan atom numarasına (proton sayısına)** göre sıraladı. Bugünkü tablo Moseley'in düzenidir.",
            "**Alkali metaller.** Değerlik elektronu 1'dir, bu elektronu kolayca verirler; **en aktif metallerdir** ve suyla şiddetli tepkime verirler.",
            "Hidrojen bir **ametaldir**. 1A'da yer almasının nedeni yalnızca **değerlik elektronunun 1** olmasıdır.",
            "**Halojenler.** Son katmanlarında 7 elektron vardır; kararlı düzene ulaşmak için **tek bir elektron** almaları yeterlidir, bu yüzden çok aktiftirler.",
            "Son katmanları **tamamen doludur** (8, helyumda 2); zaten kararlı oldukları için elektron alma veya verme eğilimleri yoktur.",
            "**Metaller** elektron verir, ısı ve elektriği **iyi iletir**, parlak ve şekillendirilebilirdir. **Ametaller** elektron alır, **yalıtkandır** (grafit hariç), mat ve kırılgandır.",
            "**Bor, silisyum, germanyum** (arsenik, antimon, tellür de yazılabilir). **Yarı iletken** oldukları için transistör, çip ve güneş pilinin temelini oluştururlar.",
            "**Katman sayısı değişmez** ama **proton sayısı artar**; çekirdeğin elektronlara çekimi güçlenir ve elektron bulutu büzülür.",
            "**Katman sayısı artar**; en dıştaki elektronlar çekirdekten uzaklaşır ve iç katmanların **perdeleme etkisi** çekimi zayıflatır.",
            "Gaz hâldeki **nötr bir atomdan bir elektron koparmak** için gereken en düşük enerjidir.",
            "Her elektron koptukça geriye kalan elektronlar aynı çekirdek yükü tarafından **daha güçlü çekilir**; bir sonrakini koparmak daha zor olur.",
            "O noktada **kararlı soy gaz dizilimine** ulaşıldığını gösterir; sıçramadan önce koparılan elektron sayısı elementin **grup numarasıdır**.",
            "738 → 1451 normal artış, 1451 → **7733** büyük sıçrama. Sıçramadan önce **2** elektron koparılmış → **2A grubu**.",
            "**Flor (F).**",
            "**Sol alta** doğru artar (soldan sağa azalır, yukarıdan aşağı artar).",
            "Elektron kaybettiği için genellikle **bir katman eksilir** ve kalan elektronlar aynı sayıdaki proton tarafından **daha sıkı çekilir**.",
            "**Anyon > nötr atom > katyon.**",
        ],
    },
}
