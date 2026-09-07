"""TYT Fizik — Dalgalar (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: DALGALAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Dalgalar",
    "alt_baslik": "Ham bilgi notu — dalga türleri, dalga büyüklükleri, yansıma, "
                  "kırılma ve ses dalgaları; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Dalgalar",
        "kazanimlar": "9.11.1.1 — Dalga türlerini ve büyüklüklerini açıklar. "
                      "9.11.1.2 — Dalga olaylarını yorumlar. "
                      "9.11.1.3 — Ses dalgalarının özelliklerini açıklar.",
        "kapsam": "Mekanik ve elektromanyetik dalgalar, enine-boyuna dalga, "
                  "genlik-dalga boyu-periyot-frekans, dalga hızı, yansıma ve "
                  "kırılma, ses dalgaları, deprem dalgaları, 40 analiz sorusu",
        "nasil": "Bu konunun anahtarı tek bir bağıntıdır: **v = λ · f**. "
                 "Ortam değişince **hangi büyüklüğün değiştiğini, hangisinin "
                 "sabit kaldığını** bilmek soruların çoğunu çözer.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Dalgalarda TYT'nin favori sorusu **'ortam değişince ne "
                    "değişir'** biçimindedir; tuzak kutusunu iki kez oku.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Dalga Nedir?"},
        {"tur": "tanim", "kavram": "Dalga",
         "aciklama": "Bir ortamda oluşan **titreşimin (enerjinin) yayılmasıdır**. "
                     "Dalgada **enerji taşınır, madde taşınmaz**."},
        {"tur": "tuzak", "baslik": "Dalga Enerji Taşır, Madde Taşımaz", "govde":
            "Denizde bir şamandıra, dalga geçerken **yalnızca aşağı-yukarı "
            "titreşir**; dalgayla birlikte kıyıya sürüklenmez. Su molekülleri "
            "de yerinde titreşir. Dalganın taşıdığı şey **enerjidir**. "
            "'Dalga suyu taşır' ifadesi **yanlıştır**."},
        {"tur": "gorsel", "baslik": "Şema 1 — Dalgaların sınıflandırılması",
         "aciklama": "İlk ayrım **ortam gerekip gerekmediği**, ikinci ayrım "
                     "**titreşim ile yayılma yönü arasındaki açıdır**.",
         "ciz": S.agac("Dalgalar", [
             ("Mekanik (ortam gerekir)", ["Su dalgası", "Ses dalgası",
                                          "Yay dalgası", "Deprem dalgası"]),
             ("Elektromanyetik (ortam gerekmez)", ["Işık", "Radyo dalgası",
                                                   "Röntgen (X)", "Mikrodalga"]),
         ])},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Enine (Transversal) Dalga", "Boyuna (Boyuna) Dalga"],
         "oranlar": [0.26, 0.37, 0.37],
         "satirlar": [
             ["Titreşim yönü", "Yayılma yönüne **dik**", "Yayılma yönüne **paralel**"],
             ["Görünümü", "**Tepe ve çukur**", "**Sıkışma ve seyrelme**"],
             ["Örnek", "Su dalgası, ışık, yay dalgası (dik sallanan)",
              "**Ses dalgası**, yay dalgası (ileri-geri itilen)"],
             ["Boşlukta yayılır mı", "Elektromanyetik olanlar **evet**",
              "**Hayır** (ses boşlukta yayılmaz)"],
         ]},
        {"tur": "dikkat", "baslik": "Ses Boyuna Bir Dalgadır ve Boşlukta Yayılmaz",
         "govde": "**Ses mekanik ve boyuna** bir dalgadır; yayılması için "
                  "**madde ortamı (katı, sıvı, gaz)** gerekir. Uzayda ses "
                  "duyulmaz. **Işık ise elektromanyetiktir** ve boşlukta yayılır. "
                  "Bu iki ayrım doğrudan sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Dalga Büyüklükleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Dalga büyüklükleri tek şekil üzerinde",
         "aciklama": "**Genlik**, denge doğrusundan tepeye olan **düşey** uzaklıktır; "
                     "tepeden çukura olan uzaklık **iki genliktir**. **Dalga boyu**, "
                     "ardışık iki tepe (ya da iki çukur) arasındaki **yatay** uzaklıktır. "
                     "Genliği düşeyde, dalga boyunu yatayda aramak bu konudaki tek "
                     "ezberdir.",
         "ciz": S.grafik("Konum (x)", "Yer değiştirme (y)", [
             ("Dalga şekli", [(0.0, 0.5), (0.016, 0.583), (0.031, 0.663), (0.047, 0.735), (0.063, 0.797), (0.078, 0.846), (0.094, 0.88), (0.11, 0.898), (0.125, 0.898), (0.141, 0.88), (0.157, 0.846), (0.172, 0.797), (0.188, 0.735), (0.204, 0.663), (0.219, 0.583), (0.235, 0.5), (0.251, 0.417), (0.266, 0.337), (0.282, 0.265), (0.298, 0.203), (0.313, 0.154), (0.329, 0.12), (0.345, 0.102), (0.36, 0.102), (0.376, 0.12), (0.392, 0.154), (0.407, 0.203), (0.423, 0.265), (0.439, 0.337), (0.454, 0.417), (0.47, 0.5), (0.486, 0.583), (0.501, 0.663), (0.517, 0.735), (0.533, 0.797), (0.548, 0.846), (0.564, 0.88), (0.58, 0.898), (0.595, 0.898), (0.611, 0.88), (0.627, 0.846), (0.642, 0.797), (0.658, 0.735), (0.674, 0.663), (0.689, 0.583), (0.705, 0.5), (0.721, 0.417), (0.736, 0.337), (0.752, 0.265), (0.768, 0.203), (0.783, 0.154), (0.799, 0.12), (0.815, 0.102), (0.83, 0.102), (0.846, 0.12), (0.862, 0.154), (0.877, 0.203), (0.893, 0.265), (0.909, 0.337), (0.924, 0.417), (0.94, 0.5)], MARKA),
             ("Denge doğrusu", [(0, 0.5), (0.94, 0.5)], BILGI),
         ], gosterge="sag-alt",
            notlar=[(0.05, 0.72, "Genlik = **A**"), (0.30, 0.98, "Dalga boyu = **λ**")],
            kilavuzlar=[(0.117, 0.90), (0.586, 0.90)])},
        {"tur": "maddeler", "ogeler": [
            "**Genlik (A)**: Denge konumundan en uzak noktaya olan uzaklıktır. "
            "Dalganın **enerjisini** belirler; seste **şiddeti (gürlüğü)**, "
            "ışıkta **parlaklığı** verir.",
            "**Dalga boyu (λ)**: Ardışık iki tepe (ya da iki çukur) arasındaki "
            "uzaklıktır. Birimi **metre**dir.",
            "**Periyot (T)**: Bir tam dalganın oluşması için geçen süredir. "
            "Birimi **saniye**dir.",
            "**Frekans (f)**: Birim zamanda oluşan **tam dalga sayısıdır**. "
            "Birimi **hertz (Hz)**'dir.",
            "**Periyot ile frekans birbirinin tersidir**: **f = 1 / T**.",
        ]},
        {"tur": "formul",
         "baslik": "Dalga hızı",
         "ifade": "v = λ · f          v = λ / T",
         "terimler": [
             ("v", "**Dalga hızı** (m/s) — **yalnızca ORTAMA bağlıdır**"),
             ("λ", "**Dalga boyu** (m)"),
             ("f", "**Frekans** (Hz) — **yalnızca KAYNAĞA bağlıdır**"),
             ("T", "**Periyot** (s)"),
         ],
         "not": "En kritik iki cümle: **Hız ortama bağlıdır, kaynağa değil.** "
                "**Frekans kaynağa bağlıdır, ortama değil.** Ortam değişince "
                "hız ve dalga boyu değişir, **frekans DEĞİŞMEZ**."},
        {"tur": "tuzak", "baslik": "Ortam Değişince Frekans Değişmez", "govde":
            "Bir dalga bir ortamdan diğerine geçtiğinde **frekansı asla "
            "değişmez** — çünkü frekansı **kaynak** belirler. Değişen şeyler "
            "**hız** ve **dalga boyudur**. Işık sudan cama geçerken rengi "
            "(frekansı) değişmez; hızı ve dalga boyu değişir. Bu, konunun "
            "en çok sorulan noktasıdır."},
        {"tur": "cozum",
         "baslik": "Dalga Hızı Hesabı",
         "soru": "Dalga boyu **0,5 metre**, frekansı **20 Hz** olan bir dalganın "
                 "hızı ve periyodu kaçtır?",
         "adimlar": [
             "Hız: v = λ · f = 0,5 × 20 = **10 m/s**.",
             "Periyot, frekansın tersidir: T = 1 / f = 1 / 20.",
         ],
         "sonuc": "Hız 10 m/s, periyot 0,05 saniye."},
        {"tur": "cozum",
         "baslik": "Ortam Değişimi",
         "soru": "Bir dalga, hızı **20 m/s** olan ortamdan hızı **40 m/s** olan "
                 "ortama geçiyor. İlk ortamdaki dalga boyu **4 m** ise ikinci "
                 "ortamdaki dalga boyu kaçtır?",
         "adimlar": [
             "**Frekans değişmez.** Önce ilk ortamda frekansı bul: "
             "f = v / λ = 20 / 4 = **5 Hz**.",
             "İkinci ortamda aynı frekans geçerlidir: f = 5 Hz.",
             "İkinci ortamda dalga boyu: λ = v / f = 40 / 5.",
         ],
         "sonuc": "İkinci ortamda dalga boyu 8 metredir (hız 2 katına çıktığı "
                  "için dalga boyu da 2 katına çıktı)."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Dalga Olayları"},
        {"tur": "tablo",
         "basliklar": ["Olay", "Ne Olur?", "Değişen / Değişmeyen"],
         "oranlar": [0.22, 0.42, 0.36],
         "satirlar": [
             ["**Yansıma**", "Dalga engele çarpıp **aynı ortama geri döner**",
              "**Hiçbiri değişmez** (hız, dalga boyu, frekans aynı)"],
             ["**Kırılma**", "Dalga **ortam değiştirir**, doğrultusu sapar",
              "**Hız ve dalga boyu değişir**, **frekans değişmez**"],
             ["**Kırınım**", "Dalga **dar bir engelin ya da yarığın** kenarından "
              "bükülerek yayılır", "Yalnızca **doğrultu** değişir"],
             ["**Girişim**", "İki dalga üst üste biner", "Genlikler toplanır "
              "(**yapıcı**) ya da azalır (**yıkıcı**)"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "**Yansımada gelme açısı = yansıma açısıdır**; ikisi de **normale "
            "göre** ölçülür.",
            "**Kırınım**, yarık **daraldıkça belirginleşir**. Kapı aralığından "
            "sesi duymamızın nedeni kırınımdır — ses köşeyi döner.",
            "**Yankı (eko)**: Sesin bir engelden yansıyıp geri gelmesidir. "
            "Yankının ayırt edilebilmesi için engelin **en az 17 metre** uzakta "
            "olması gerekir.",
        ]},
        {"tur": "cikmis", "baslik": "Yansımada ne değişir?", "govde":
            "'Bir dalga yansıdığında hangi büyüklük değişir?' sorusunun cevabı "
            "**hiçbiri**dir. Yansımada dalga **aynı ortamda** kaldığı için hız, "
            "dalga boyu ve frekans **aynı kalır**; yalnızca **yayılma doğrultusu** "
            "değişir. Kırılmada ise hız ve dalga boyu değişir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Ses Dalgaları"},
        {"tur": "maddeler", "ogeler": [
            "Ses, **mekanik ve boyuna** bir dalgadır. Kaynağı **titreşen bir "
            "cisimdir**.",
            "**Sesin hızı ortama bağlıdır**: **katıda en hızlı**, **gazda en "
            "yavaştır** (katı > sıvı > gaz). Nedeni taneciklerin katıda **daha "
            "yakın** olması ve titreşimi daha çabuk aktarmasıdır.",
            "**Sıcaklık artınca havada sesin hızı artar.** Havada 0 °C'de "
            "yaklaşık **331 m/s**, 20 °C'de yaklaşık **343 m/s**'dir.",
            "**Ses boşlukta yayılmaz** — madde ortamı gerekir.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Sesin Özelliği", "Neye Bağlıdır?", "Nasıl Algılanır?"],
         "oranlar": [0.24, 0.36, 0.40],
         "satirlar": [
             ["**Şiddet (gürlük)**", "**Genliğe**", "Sesin **yüksek ya da alçak** "
              "olması. Birimi **desibel (dB)**."],
             ["**Yükseklik (incelik-kalınlık)**", "**Frekansa**",
              "Frekans **büyükse ince (tiz)**, **küçükse kalın (pes)** ses"],
             ["**Tını**", "Kaynağın **yapısına**", "Aynı notayı çalan iki farklı "
              "çalgıyı ayırt etmemizi sağlar"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**İnsanın duyabildiği frekans aralığı: 20 Hz – 20 000 Hz.**",
            "**İnfrases**: 20 Hz'in altı (fil, balina; deprem öncesi). "
            "**Ultrases**: 20 000 Hz'in üstü (yarasa, yunus, köpek düdüğü).",
            "**Ultrases kullanım alanları**: **ultrason (tıpta görüntüleme)**, "
            "**sonar (denizde derinlik ve cisim tespiti)**, malzeme kusuru "
            "bulma, temizleme cihazları.",
            "**Ses kirliliği**, 85 dB üzerindeki sürekli seslerde işitme kaybına "
            "yol açar. Önlem: ses yalıtımı, gürültü bariyeri, düşük gürültülü "
            "cihazlar.",
        ]},
        {"tur": "taktik", "baslik": "Ses Sorusunu Çözme", "govde":
            "Ses sorularında hangi özelliğin sorulduğunu ayırt et:",
         "ogeler": [
             "'Daha **gür/yüksek** ses' → **genlik** artmıştır.",
             "'Daha **ince (tiz)** ses' → **frekans** artmıştır.",
             "'Aynı notayı çalan iki çalgıyı ayırt etme' → **tını**.",
             "'Ses hangi ortamda daha hızlı yayılır' → **katı > sıvı > gaz**.",
             "Ortam değişse bile **frekans (dolayısıyla incelik) değişmez**; "
             "değişen **hız ve dalga boyudur**.",
         ]},

        {"tur": "altbolum", "baslik": "Deprem Dalgaları"},
        {"tur": "maddeler", "ogeler": [
            "**P dalgası (birincil)**: **Boyuna** dalgadır, **en hızlıdır** ve "
            "**ilk ulaşan** dalgadır. Katı, sıvı ve gazda yayılır. Hasarı azdır.",
            "**S dalgası (ikincil)**: **Enine** dalgadır, P'den yavaştır. "
            "**Yalnızca katıda yayılır**; sıvıda yayılmaz. Hasarı P'den fazladır.",
            "**Yüzey dalgaları**: **En yavaş** ama **en yıkıcı** olanlardır; "
            "yapıları asıl bunlar yıkar.",
            "Deprem merkezinin bulunmasında **P ve S dalgaları arasındaki varış "
            "zamanı farkı** kullanılır.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Dalga **enerji taşır, madde taşımaz**.",
            "**Ses mekanik ve boyunadır**, boşlukta yayılmaz. **Işık "
            "elektromanyetiktir**, boşlukta yayılır.",
            "**v = λ · f**; **f = 1/T**.",
            "**Hız ortama**, **frekans kaynağa** bağlıdır.",
            "Ortam değişince **frekans değişmez**; hız ve dalga boyu değişir.",
            "**Yansımada hiçbir büyüklük değişmez**, yalnızca doğrultu değişir.",
            "Sesin hızı: **katı > sıvı > gaz**.",
            "**Şiddet genliğe**, **incelik frekansa**, **tını kaynağın yapısına** bağlıdır.",
            "İşitme aralığı **20 Hz – 20 000 Hz**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Her soruda **hangi büyüklüğün değiştiğini, hangisinin sabit kaldığını** "
            "yaz. Ortam değişimi sorularında önce **frekansı bul** — o hiç "
            "değişmez ve seni doğru cevaba götürür.",
        "satir_sayisi": 2,
        "sorular": [
            "Dalgayı tanımlayınız. Dalga ne taşır, ne taşımaz?",
            "Denizdeki şamandıranın dalgayla sürüklenmemesini açıklayınız.",
            "Mekanik ve elektromanyetik dalgaları ayırınız, ikişer örnek veriniz.",
            "Enine ve boyuna dalgayı titreşim yönüne göre karşılaştırınız.",
            "Enine dalgada hangi yapılar görülür? Boyuna dalgada hangileri?",
            "Ses hangi tür dalgadır? Boşlukta yayılır mı?",
            "Işık hangi tür dalgadır? Boşlukta yayılır mı?",
            "Genliği tanımlayınız ve neyi belirlediğini yazınız.",
            "Dalga boyunu tanımlayınız ve birimini yazınız.",
            "Periyodu ve frekansı tanımlayınız.",
            "Periyot ile frekans arasındaki bağıntıyı yazınız.",
            "Dalga hızı bağıntısını yazınız.",
            "Dalga hızı neye bağlıdır?",
            "Frekans neye bağlıdır?",
            "Ortam değiştiğinde hangi büyüklükler değişir, hangisi değişmez?",
            "Dalga boyu 0,5 m, frekansı 20 Hz olan dalganın hızı kaçtır?",
            "Aynı dalganın periyodu kaçtır?",
            "Hızı 20 m/s olan ortamda dalga boyu 4 m ise frekans kaçtır?",
            "Aynı dalga hızı 40 m/s olan ortama geçerse dalga boyu ne olur?",
            "Işık sudan cama geçerken rengi değişir mi? Neden?",
            "Yansıma olayında hangi büyüklükler değişir?",
            "Yansımada gelme ve yansıma açıları arasındaki ilişki nedir?",
            "Kırılma olayında hangi büyüklükler değişir?",
            "Kırınım nedir? Ne zaman belirginleşir?",
            "Kapı aralığından sesi duymamızı hangi dalga olayı açıklar?",
            "Girişim olayında genliklere ne olur?",
            "Yankı (eko) nedir? Ayırt edilebilmesi için engel kaç metre uzakta olmalıdır?",
            "Sesin kaynağı nedir?",
            "Ses hangi ortamda en hızlı, hangisinde en yavaş yayılır?",
            "Sesin katıda daha hızlı yayılmasının nedeni nedir?",
            "Sıcaklık artınca havada sesin hızı nasıl değişir?",
            "Sesin şiddeti neye bağlıdır ve birimi nedir?",
            "Sesin inceliği-kalınlığı neye bağlıdır?",
            "Frekans büyükse ses ince mi kalın mı olur?",
            "Tını nedir? Ne işe yarar?",
            "İnsanın duyabildiği frekans aralığını yazınız.",
            "İnfrases ve ultrasesi tanımlayıp örnek canlılar veriniz.",
            "Ultrasesin üç kullanım alanını yazınız.",
            "P ve S deprem dalgalarını hız, tür ve yayılma ortamı bakımından karşılaştırınız.",
            "Deprem dalgalarından hangisi en yıkıcıdır?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Bir ortamda oluşan **titreşimin yayılmasıdır**. **Enerji taşır, madde taşımaz**.",
            "Su molekülleri ve şamandıra yalnızca **yerinde aşağı-yukarı titreşir**; ilerleyen şey **enerjidir**, su kütlesi değil.",
            "**Mekanik dalga** yayılmak için **madde ortamı gerektirir** (ses, su dalgası). **Elektromanyetik dalga** boşlukta da yayılır (ışık, radyo dalgası).",
            "**Enine dalgada** titreşim yayılma yönüne **diktir**. **Boyuna dalgada** titreşim yayılma yönüne **paraleldir**.",
            "**Enine**: tepe ve çukur. **Boyuna**: sıkışma ve seyrelme.",
            "**Mekanik ve boyuna** bir dalgadır. **Boşlukta yayılmaz.**",
            "**Elektromanyetik** bir dalgadır. **Boşlukta yayılır.**",
            "Denge konumundan **en uzak noktaya olan uzaklıktır**. Dalganın **enerjisini** belirler; seste **şiddeti**, ışıkta **parlaklığı** verir.",
            "**Ardışık iki tepe (ya da iki çukur) arasındaki uzaklıktır.** Birimi **metre**dir.",
            "**Periyot**: bir tam dalganın oluşma süresi (saniye). **Frekans**: birim zamanda oluşan tam dalga sayısı (hertz).",
            "**f = 1 / T** (birbirinin tersidir).",
            "**v = λ · f** (ya da v = λ / T).",
            "**Yalnızca ortama** bağlıdır.",
            "**Yalnızca kaynağa** bağlıdır.",
            "**Hız ve dalga boyu değişir**; **frekans değişmez**.",
            "v = 0,5 × 20 = **10 m/s**.",
            "T = 1/20 = **0,05 s**.",
            "f = v/λ = 20/4 = **5 Hz**.",
            "Frekans değişmez (5 Hz) → λ = 40/5 = **8 m**.",
            "**Değişmez.** Rengi belirleyen **frekanstır** ve frekans kaynağa bağlıdır; ortam değişse de değişmez. Değişen **hız ve dalga boyudur**.",
            "**Hiçbiri değişmez.** Dalga aynı ortamda kaldığı için hız, dalga boyu ve frekans aynı kalır; yalnızca **doğrultu** değişir.",
            "**Gelme açısı = yansıma açısıdır**; ikisi de **normale göre** ölçülür.",
            "**Hız ve dalga boyu değişir**; **frekans değişmez**.",
            "Dalganın, **dar bir engelin ya da yarığın kenarından bükülerek** yayılmasıdır. **Yarık daraldıkça** belirginleşir.",
            "**Kırınım.** Ses dalgaları kapı aralığından geçerken bükülür ve köşeyi döner.",
            "Aynı yönde üst üste binerlerse genlikler **toplanır (yapıcı girişim)**; zıt yönde binerlerse **azalır ya da sıfırlanır (yıkıcı girişim)**.",
            "Sesin bir engelden **yansıyıp geri gelmesidir**. Ayırt edilebilmesi için engel en az **17 metre** uzakta olmalıdır.",
            "**Titreşen bir cisimdir.**",
            "**Katıda en hızlı**, **gazda en yavaş** yayılır (katı > sıvı > gaz).",
            "Katıda tanecikler **birbirine çok yakındır**; titreşim komşu taneciğe **daha çabuk** aktarılır.",
            "**Artar.** Tanecikler daha hızlı hareket ettiği için titreşim daha çabuk iletilir.",
            "**Genliğe** bağlıdır. Birimi **desibel (dB)**'dir.",
            "**Frekansa** bağlıdır.",
            "**İnce (tiz)** olur.",
            "Kaynağın **yapısından** doğan özelliktir. Aynı notayı çalan **iki farklı çalgıyı ayırt etmemizi** sağlar.",
            "**20 Hz – 20 000 Hz.**",
            "**İnfrases**: 20 Hz'in altı (fil, balina). **Ultrases**: 20 000 Hz'in üstü (yarasa, yunus, köpek).",
            "**Ultrason (tıbbi görüntüleme)**, **sonar (denizde derinlik/cisim tespiti)**, **malzeme kusuru bulma** (temizleme cihazları da yazılabilir).",
            "**P dalgası**: boyuna, **en hızlı**, katı-sıvı-gazda yayılır. **S dalgası**: enine, daha yavaş, **yalnızca katıda** yayılır.",
            "**Yüzey dalgaları.** En yavaş olmalarına rağmen yapıları asıl bunlar yıkar.",
        ],
    },
}
