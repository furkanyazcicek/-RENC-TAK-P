"""AYT Kimya — Gazlar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: GAZLAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Gazlar",
    "alt_baslik": "Ham bilgi notu — gaz yasaları, ideal gaz denklemi, gaz karışımları, "
                  "kısmi basınç ve difüzyon; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Gazlar",
        "kazanimlar": "11.2.1.1 — Gazların özelliklerini kinetik teoriyle açıklar. "
                      "11.2.1.2 — Gaz yasalarını grafiklerle yorumlar. "
                      "11.2.2.1 — İdeal gaz denklemini kullanarak hesap yapar. "
                      "11.2.3.1 — Gaz karışımlarında kısmi basıncı hesaplar.",
        "kapsam": "Kinetik teori, basınç–hacim–sıcaklık ilişkileri, Boyle, Charles, "
                  "Gay-Lussac ve Avogadro yasaları, ideal gaz denklemi, gaz yoğunluğu, "
                  "Dalton kısmi basınçlar yasası, Graham difüzyon yasası, gerçek gazlar, "
                  "50 analiz sorusu",
        "nasil": "Gaz sorularının tamamı **PV = nRT**'den türer. Soruyu okuduğunda önce "
                 "**neyin sabit tutulduğunu** işaretle; sabit olanları denklemden atınca "
                 "geriye çözülecek basit bir orantı kalır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de gazlardan gelen soru genellikle **iki durumlu oran hesabı**, "
                    "**kısmi basınç** ya da **grafik yorumu** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Gazların Genel Özellikleri"},
        {"tur": "maddeler", "ogeler": [
            "Gaz tanecikleri arasındaki **çekim kuvveti ihmal edilecek kadar küçüktür**; "
            "bu yüzden gazlar **bulundukları kabın hacmini alır**.",
            "Tanecikler **sürekli, rastgele ve doğrusal** hareket eder; çarpışmalar "
            "**esnektir**, yani toplam kinetik enerji korunur.",
            "**Basınç**, taneciklerin kabın çeperine yaptığı çarpmalardan doğar. "
            "Çarpma sayısı ya da şiddeti artarsa basınç artar.",
            "**Sıcaklık, ortalama kinetik enerjinin ölçüsüdür.** Aynı sıcaklıktaki "
            "bütün gazların **ortalama kinetik enerjisi eşittir**; ama kütleleri farklı "
            "olduğu için **hızları farklıdır**.",
            "Gazlar **sıkıştırılabilir** ve **birbirleriyle her oranda karışır** "
            "(difüzyon).",
        ]},
        {"tur": "tuzak", "baslik": "Aynı Sıcaklıkta Enerji Eşit, Hız Değil", "govde":
            "Aynı sıcaklıktaki H_2 ve O_2 gazlarının **ortalama kinetik enerjileri "
            "eşittir**. Ancak E_k = m·v²/2 olduğuna göre, **kütlesi küçük olan gazın "
            "hızı büyüktür**. Bu yüzden hidrojen oksijenden daha hızlı yayılır. "
            "\"Aynı sıcaklıkta bütün gazların hızı aynıdır\" ifadesi **yanlıştır**."},
        {"tur": "tablo",
         "basliklar": ["Birim", "Dönüşümü"],
         "satirlar": [
             ["**Basınç**", "1 atm = **760 mmHg** = 760 torr = 101,3 kPa"],
             ["**Hacim**", "1 L = **1000 mL** = 1 dm³ ;  1 m³ = 1000 L"],
             ["**Sıcaklık**", "**K = °C + 273** — gaz hesaplarında sıcaklık **daima kelvin**"],
             ["**Normal koşullar (NK)**", "**0 °C (273 K)** ve **1 atm**; 1 mol gaz **22,4 L**"],
             ["**Oda koşulları**", "**25 °C** ve 1 atm; 1 mol gaz **24,5 L**"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "dikkat", "baslik": "Sıcaklık Her Zaman Kelvin", "govde":
            "Gaz hesaplarında **santigrat kullanılmaz**. \"Sıcaklık iki katına çıkarıldı\" "
            "ifadesi **kelvin cinsinden** iki kat demektir: 27 °C (300 K) → 327 °C "
            "(600 K). Santigratla hesap yapmak, bu konuda yapılan en yaygın hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Gaz Yasaları"},
        {"tur": "tablo",
         "basliklar": ["Yasa", "Sabit tutulan", "Bağıntı", "İlişki"],
         "satirlar": [
             ["**Boyle-Mariotte**", "n, T", "**P_1·V_1 = P_2·V_2**", "P ile V **ters orantılı**"],
             ["**Charles**", "n, P", "**V_1 / T_1 = V_2 / T_2**", "V ile T **doğru orantılı**"],
             ["**Gay-Lussac**", "n, V", "**P_1 / T_1 = P_2 / T_2**", "P ile T **doğru orantılı**"],
             ["**Avogadro**", "P, T", "**V_1 / n_1 = V_2 / n_2**", "V ile n **doğru orantılı**"],
             ["**Birleşik gaz**", "yalnızca n", "**P_1V_1 / T_1 = P_2V_2 / T_2**",
              "Üç değişken birlikte"],
         ],
         "oranlar": [0.22, 0.16, 0.32, 0.30]},
        {"tur": "gorsel", "baslik": "Şema 1 — Üç gaz yasasının grafiği",
         "aciklama": "Grafik sorularında **eksenleri okumadan yorum yapma**. "
                     "P–V grafiği **hiperbol**, V–T ve P–T grafikleri **orijinden geçen "
                     "doğru**dur. Doğruların orijinden geçmesi, **mutlak sıfırda hacmin "
                     "ve basıncın sıfır olacağını** söyler.",
         "ciz": S.grafik_seti([
             ("Boyle: P–V", "Hacim (V)", "Basınç (P)",
              [("", [(0.10, 0.94), (0.16, 0.62), (0.24, 0.42), (0.36, 0.28),
                     (0.52, 0.18), (0.72, 0.12), (0.94, 0.09)], S.MARKA)],
              [(0.32, 0.62, "**ters** orantı\nP·V = sabit")]),
             ("Charles: V–T", "Sıcaklık (K)", "Hacim (V)",
              [("", [(0.02, 0.02), (0.94, 0.90)], S.BILGI)],
              [(0.06, 0.78, "**doğru** orantı\nV / T = sabit")]),
             ("Gay-Lussac: P–T", "Sıcaklık (K)", "Basınç (P)",
              [("", [(0.02, 0.02), (0.94, 0.90)], S.BASARI)],
              [(0.06, 0.78, "**doğru** orantı\nP / T = sabit")]),
         ], ortak_not="Doğruların orijinden geçmesi için sıcaklığın kelvin olması şarttır.")},
        {"tur": "cozum",
         "baslik": "İki Durumlu Hesap",
         "soru": "Sabit sıcaklıkta **2 L** hacimli bir kapta **3 atm** basınçlı gaz "
                 "bulunuyor. Gaz **6 L**'lik kaba aktarılırsa basınç kaç atm olur?",
         "adimlar": [
             "Sıcaklık ve mol sayısı sabit → **Boyle yasası** uygulanır.",
             "**P_1·V_1 = P_2·V_2** yazılır.",
             "3 · 2 = P_2 · 6.",
             "P_2 = 6 / 6 = **1 atm**.",
         ],
         "sonuc": "Hacim 3 katına çıktığı için basınç **3'te 1'ine** düşer: 1 atm."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "İdeal Gaz Denklemi"},
        {"tur": "formul",
         "baslik": "İdeal gaz denklemi ve türevleri",
         "ifade": "P · V  =  n · R · T\n"
                  "n = m / M_A   →   P · V = (m / M_A) · R · T\n"
                  "d = m / V   →   **P · M_A = d · R · T**",
         "terimler": [
             ("P", "**Basınç** (atm)"),
             ("V", "**Hacim** (litre)"),
             ("n", "**Mol sayısı**"),
             ("R", "**Gaz sabiti** = **0,082** L·atm/mol·K"),
             ("T", "**Mutlak sıcaklık** (kelvin)"),
             ("M_A", "**Mol kütlesi** (g/mol)"),
             ("d", "**Yoğunluk** (g/L)"),
         ],
         "not": "**P·M_A = d·R·T** bağıntısı, gaz yoğunluğu ve mol kütlesi sorularının "
                "tamamını çözer. Aynı koşullarda **mol kütlesi büyük olan gazın "
                "yoğunluğu da büyüktür**."},
        {"tur": "cozum",
         "baslik": "Mol Kütlesi Bulma",
         "soru": "**27 °C** ve **2 atm** basınçta bir gazın yoğunluğu **3,28 g/L** "
                 "ölçülüyor. Bu gazın mol kütlesi kaç g/mol'dür?",
         "adimlar": [
             "Sıcaklığı kelvine çevir: T = 27 + 273 = **300 K**.",
             "**P · M_A = d · R · T** bağıntısını kullan.",
             "2 · M_A = 3,28 · 0,082 · 300.",
             "2 · M_A = 80,7 → M_A ≈ **40 g/mol**.",
         ],
         "sonuc": "Gazın mol kütlesi yaklaşık **40 g/mol**'dür (argon olabilir)."},
        {"tur": "taktik", "baslik": "Hangi Bağıntıyı Seçeceksin?", "govde":
            "Soruda **kütle ya da yoğunluk** geçiyorsa **P·M_A = d·R·T**'yi kullan. "
            "**İki farklı durum** karşılaştırılıyorsa (önce–sonra) **birleşik gaz "
            "yasasını** kullan; sabit olanları sadeleştir. **Tek durum** ve mol "
            "soruluyorsa doğrudan **PV = nRT** yeter. Bu üç ayrım, gaz sorularının "
            "tamamını kapsar."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Gaz Karışımları"},
        {"tur": "formul",
         "baslik": "Dalton kısmi basınçlar yasası",
         "ifade": "P_(toplam) = P_1 + P_2 + P_3 + ...\n"
                  "P_(kısmi) = X · P_(toplam)\n"
                  "X = n_(gaz) / n_(toplam)",
         "terimler": [
             ("Kısmi basınç", "Bir gazın, karışımda **tek başınaymış gibi** yapacağı basınç"),
             ("X (mol kesri)", "O gazın **mol sayısının** toplam mol sayısına oranı; "
                               "**birimsizdir** ve toplamı **1**'dir"),
             ("Hacim kesri", "Aynı koşullarda **mol kesrine eşittir**"),
             ("Kısmi hacim", "V_(kısmi) = X · V_(toplam)"),
         ],
         "not": "Karışımdaki gazlar **birbirinden bağımsız** davranır; her biri kabın "
                "**tüm hacmini** doldurur. Bu yüzden hacimler değil, **basınçlar** "
                "toplanır."},
        {"tur": "gorsel", "baslik": "Şema 2 — Kısmi basınç mantığı",
         "aciklama": "Her gaz kabın **tamamını** doldurur ve kendi basıncını uygular. "
                     "Toplam basınç, bu bağımsız basınçların **toplamıdır**. Mol sayısı "
                     "çok olan gazın kısmi basıncı da büyüktür.",
         "ciz": S.akis(
             ["Toplam mol bul", "Mol kesrini hesapla", "Toplam basıncı bul",
              "Kısmi basıncı yaz"],
             ["bütün gazların\nmolleri toplanır", "X = n / n_(toplam)",
              "PV = nRT ile\nya da verilir", "P = X · P_(toplam)"])},
        {"tur": "cozum",
         "baslik": "Kısmi Basınç Hesabı",
         "soru": "Bir kapta **2 mol N_2**, **3 mol O_2** ve **5 mol He** bulunuyor. "
                 "Toplam basınç **4 atm** ise oksijenin kısmi basıncı kaç atm'dir?",
         "adimlar": [
             "Toplam mol = 2 + 3 + 5 = **10 mol**.",
             "Oksijenin mol kesri: X = 3 / 10 = **0,3**.",
             "Kısmi basınç = X · P_(toplam) = 0,3 · 4.",
             "P_(O_2) = **1,2 atm**.",
         ],
         "sonuc": "Oksijenin kısmi basıncı **1,2 atm**'dir."},
        {"tur": "formul",
         "baslik": "Graham difüzyon (yayılma) yasası",
         "ifade": "v_1 / v_2  =  √(M_2 / M_1)\n"
                  "t_1 / t_2  =  √(M_1 / M_2)",
         "terimler": [
             ("Difüzyon", "Gazın **kendiliğinden yayılması**"),
             ("Efüzyon", "Gazın **küçük bir delikten** dışarı sızması"),
             ("v", "Yayılma **hızı** — mol kütlesiyle **ters** orantılıdır"),
             ("t", "Yayılma **süresi** — mol kütlesiyle **doğru** orantılıdır"),
         ],
         "not": "**Hafif gaz hızlı yayılır.** Aynı koşullarda hidrojen (2 g/mol), "
                "oksijenden (32 g/mol) **4 kat hızlı** yayılır; çünkü √(32/2) = 4."},
        {"tur": "tuzak", "baslik": "Karekök Unutuluyor", "govde":
            "Hız oranı **kütle oranına değil, kütle oranının kareköküne** bağlıdır. "
            "Mol kütlesi 4 kat olan bir gaz 4 kat değil, **2 kat yavaş** yayılır. "
            "Bu konuda kaybedilen puanın neredeyse tamamı unutulan karekökten gelir."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Gerçek Gazlar"},
        {"tur": "gorsel", "baslik": "Şema 3 — İdeal gaz ile gerçek gaz",
         "aciklama": "Hiçbir gaz tam olarak ideal değildir. Gerçek gazlar **düşük "
                     "basınç ve yüksek sıcaklıkta** ideale yaklaşır; çünkü bu koşullarda "
                     "tanecikler birbirinden uzaktır ve çekim ihmal edilebilir.",
         "ciz": S.karsilastirma(
             "İdeal gaz varsayımları",
             ["Tanecik **hacmi yok** sayılır",
              "Tanecikler arası **çekim yok**",
              "Çarpışmalar **tam esnek**",
              "**PV = nRT** her koşulda geçerli",
              "**Yoğunlaşmaz, sıvılaşmaz**"],
             "Gerçek gaz davranışı",
             ["Taneciğin **kendi hacmi vardır**",
              "Tanecikler arası **çekim vardır**",
              "Yüksek basınçta hacim **beklenenden büyük**",
              "Düşük sıcaklıkta hacim **beklenenden küçük**",
              "Soğutulup sıkıştırılınca **sıvılaşır**"],
             "İdeale yaklaşma koşulu",
             ["**Düşük basınç**",
              "**Yüksek sıcaklık**",
              "**Küçük mol kütlesi** ve zayıf çekim",
              "He ve H_2 ideale en yakın gazlardır"])},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Sıcaklık daima kelvin**: K = °C + 273.",
            "**NK**: 0 °C ve 1 atm; 1 mol gaz **22,4 L**.",
            "**Boyle**: P·V sabit (ters orantı). **Charles**: V/T sabit. **Gay-Lussac**: P/T sabit.",
            "**PV = nRT**, R = **0,082**.",
            "**P·M_A = d·R·T** — yoğunluk ve mol kütlesi sorularının anahtarı.",
            "Aynı sıcaklıkta **kinetik enerji eşit, hız farklıdır**.",
            "**P_(kısmi) = X · P_(toplam)**; mol kesirlerinin toplamı **1**.",
            "**Graham**: hız oranı **kütle oranının karekökü** kadardır — ters orantılı.",
            "**Hafif gaz hızlı yayılır.**",
            "Gerçek gaz **düşük basınç ve yüksek sıcaklıkta** ideale yaklaşır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde hesap soruları ağırlıktadır. Her soruda ilk yapman gereken "
            "iki şey: **sıcaklığı kelvine çevirmek** ve **neyin sabit tutulduğunu "
            "işaretlemek**. Bu ikisini yaptığında geriye çözülecek tek bir orantı kalır.",
        "satir_sayisi": 2,
        "sorular": [
            "Gazların bulundukları kabın hacmini almasının nedenini tanecik düzeyinde açıklayınız.",
            "Gaz basıncının nasıl oluştuğunu açıklayınız.",
            "Sıcaklığın tanecik düzeyindeki karşılığını yazınız.",
            "Aynı sıcaklıktaki H_2 ve O_2 gazlarının kinetik enerjilerini ve hızlarını karşılaştırınız.",
            "'Aynı sıcaklıkta bütün gazların hızı aynıdır' ifadesindeki hatayı düzeltiniz.",
            "1 atm basıncın mmHg ve kPa karşılıklarını yazınız.",
            "Normal koşulları ve normal koşullarda 1 mol gazın hacmini yazınız.",
            "Gaz hesaplarında sıcaklığın kelvin olmasının nedenini açıklayınız.",
            "'27 °C'deki bir gazın sıcaklığı iki katına çıkarılıyor' ifadesindeki son sıcaklığı bulunuz.",
            "Boyle yasasını sabit tutulan büyüklükler ve bağıntısıyla yazınız.",
            "Charles yasasını sabit tutulan büyüklükler ve bağıntısıyla yazınız.",
            "Gay-Lussac yasasını sabit tutulan büyüklükler ve bağıntısıyla yazınız.",
            "Avogadro yasasını açıklayarak sonucunu yazınız.",
            "P–V grafiğinin biçimini ve nedenini açıklayınız.",
            "V–T grafiğinin orijinden geçmesinin anlamını açıklayınız.",
            "Sabit sıcaklıkta 2 L'de 3 atm olan gaz 6 L'ye aktarılırsa basıncı ne olur?",
            "Sabit basınçta 300 K'de 4 L olan gaz 600 K'ye ısıtılırsa hacmi ne olur?",
            "Sabit hacimde 1 atm ve 273 K olan gaz 546 K'ye ısıtılırsa basıncı ne olur?",
            "Birleşik gaz yasasını yazınız ve hangi durumda kullanıldığını açıklayınız.",
            "İdeal gaz denklemini yazarak her simgenin anlamını ve birimini belirtiniz.",
            "R gaz sabitinin değerini ve birimini yazınız.",
            "PV = nRT denkleminden mol kütlesi içeren biçimi türetiniz.",
            "P·M_A = d·R·T bağıntısını yazarak hangi sorularda kullanıldığını açıklayınız.",
            "27 °C ve 2 atm'de yoğunluğu 3,28 g/L olan gazın mol kütlesini bulunuz.",
            "Normal koşullarda 5,6 L gazın mol sayısını hesaplayınız.",
            "Aynı koşullarda mol kütlesi büyük olan gazın yoğunluğu hakkında ne söylenir?",
            "Normal koşullarda 1 mol He ile 1 mol CO_2'nin hacimlerini karşılaştırınız.",
            "Aynı kapta aynı sıcaklıkta bulunan iki gazın tanecik sayıları eşitse basınçları için ne söylenir?",
            "Dalton kısmi basınçlar yasasını yazınız.",
            "Kısmi basınç kavramını tanımlayınız.",
            "Mol kesrini tanımlayarak toplamının kaç olduğunu yazınız.",
            "2 mol N_2, 3 mol O_2 ve 5 mol He içeren karışımda toplam basınç 4 atm ise O_2'nin kısmi basıncını bulunuz.",
            "Aynı karışımda helyumun kısmi basıncını bulunuz.",
            "Gaz karışımlarında hacimlerin değil basınçların toplanmasının nedenini açıklayınız.",
            "Bir karışımda mol kesri en büyük olan gazın kısmi basıncı için ne söylenir?",
            "Difüzyon ve efüzyon kavramlarını ayırt ediniz.",
            "Graham yasasını hız ve süre için ayrı ayrı yazınız.",
            "H_2 gazının O_2 gazına göre kaç kat hızlı yayıldığını hesaplayınız.",
            "Mol kütlesi 4 kat olan bir gazın yayılma hızı kaç kat yavaştır?",
            "'Mol kütlesi 4 kat olan gaz 4 kat yavaş yayılır' ifadesindeki hatayı düzeltiniz.",
            "Aynı koşullarda eşit sürede yayılan iki gazın mol kütleleri için ne söylenir?",
            "İdeal gaz varsayımlarını üç maddede yazınız.",
            "Gerçek gazların ideal gazdan iki farkını yazınız.",
            "Gerçek gazların hangi koşullarda ideale yaklaştığını nedeniyle açıklayınız.",
            "Yüksek basınçta gerçek gaz hacminin beklenenden büyük olmasının nedenini açıklayınız.",
            "Düşük sıcaklıkta gerçek gaz hacminin beklenenden küçük olmasının nedenini açıklayınız.",
            "İdeale en yakın iki gazı yazarak nedenini açıklayınız.",
            "Gazların sıvılaştırılabilmesinin ideal gaz varsayımlarıyla çelişen yönünü açıklayınız.",
            "Bir balonun sıcak havada şişip soğukta büzülmesini hangi gaz yasasıyla açıklarsınız?",
            "Yüksek irtifada kapalı bir paketin şişmesini gaz yasalarıyla açıklayınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Tanecikler arası **çekim kuvveti çok zayıftır** ve tanecikler sürekli, rastgele hareket eder. Bir arada tutan kuvvet olmadığı için kabın her yerine dağılırlar.",
            "Taneciklerin kabın **çeperine çarpmasından** doğar. Birim zamandaki çarpma sayısı ya da çarpma şiddeti artarsa basınç artar.",
            "Sıcaklık, taneciklerin **ortalama kinetik enerjisinin** ölçüsüdür. Sıcaklık artınca ortalama hız ve dolayısıyla kinetik enerji artar.",
            "**Kinetik enerjileri eşittir** (sıcaklık aynı). E_k = m·v²/2 olduğundan kütlesi küçük olan **H_2 daha hızlıdır**.",
            "Aynı sıcaklıkta eşit olan şey **kinetik enerjidir, hız değil**. Kütlesi küçük olan gazın hızı büyüktür.",
            "1 atm = **760 mmHg** = 760 torr = **101,3 kPa**.",
            "**0 °C (273 K)** ve **1 atm**. Bu koşullarda 1 mol gaz **22,4 L** yer kaplar.",
            "Gaz yasalarındaki doğru orantılar **mutlak sıfırdan** başlar. Santigrat ölçeğinde sıfır keyfi bir noktadır; oranlar ancak kelvinle doğru çıkar.",
            "27 °C = **300 K**. İki katı **600 K** = **327 °C**'dir (54 °C değil).",
            "**n ve T sabit**; **P_1·V_1 = P_2·V_2**. Basınç ile hacim **ters orantılıdır**.",
            "**n ve P sabit**; **V_1/T_1 = V_2/T_2**. Hacim ile sıcaklık **doğru orantılıdır**.",
            "**n ve V sabit**; **P_1/T_1 = P_2/T_2**. Basınç ile sıcaklık **doğru orantılıdır**.",
            "Aynı sıcaklık ve basınçta **eşit hacimli gazlar eşit sayıda tanecik** içerir. Buradan V ile n'in doğru orantılı olduğu çıkar.",
            "**Hiperboldür**. P·V çarpımı sabit olduğu için P arttıkça V küçülür; eğri hiçbir ekseni kesmez.",
            "**Mutlak sıfırda (0 K) hacmin sıfır olacağını** gösterir. Doğrunun orijinden geçmesi, ancak kelvin ölçeği kullanılırsa mümkündür.",
            "Boyle: 3 · 2 = P_2 · 6 → **P_2 = 1 atm**.",
            "Charles: 4/300 = V_2/600 → **V_2 = 8 L**.",
            "Gay-Lussac: 1/273 = P_2/546 → **P_2 = 2 atm**.",
            "**P_1V_1/T_1 = P_2V_2/T_2**. Mol sayısı sabitken **basınç, hacim ve sıcaklığın birlikte değiştiği** durumlarda kullanılır.",
            "**P·V = n·R·T**. P: basınç (atm), V: hacim (L), n: mol sayısı, R: gaz sabiti, T: mutlak sıcaklık (K).",
            "**0,082 L·atm/mol·K**.",
            "n = m/M_A yerine konur: **P·V = (m/M_A)·R·T**.",
            "**P·M_A = d·R·T**. Gazın **yoğunluğu** ya da **mol kütlesi** sorulduğunda kullanılır.",
            "T = 300 K. 2·M_A = 3,28 · 0,082 · 300 = 80,7 → **M_A ≈ 40 g/mol**.",
            "n = 5,6 / 22,4 = **0,25 mol**.",
            "Aynı P ve T'de **yoğunluğu da büyüktür**; çünkü P·M_A = d·R·T bağıntısında M_A ile d doğru orantılıdır.",
            "**Hacimleri eşittir**. Avogadro yasasına göre aynı koşullarda eşit mol sayıdaki gazlar eşit hacim kaplar; mol kütlesi hacmi etkilemez.",
            "**Basınçları da eşittir**. PV = nRT'de V, n ve T aynı olduğu için P de aynı olur; gazın cinsi basıncı etkilemez.",
            "**P_(toplam) = P_1 + P_2 + P_3 + ...** Karışımdaki her gazın kısmi basınçlarının toplamı toplam basıncı verir.",
            "Bir gazın, karışımda **tek başına ve aynı hacimde bulunsaydı** uygulayacağı basınçtır.",
            "Bir gazın **mol sayısının toplam mol sayısına oranıdır**: X = n/n_(toplam). Birimsizdir ve tüm mol kesirlerinin toplamı **1**'dir.",
            "Toplam mol = 10. X_(O_2) = 3/10 = 0,3. P = 0,3 · 4 = **1,2 atm**.",
            "X_(He) = 5/10 = 0,5. P = 0,5 · 4 = **2 atm**.",
            "Gazlar birbirinden **bağımsız** davranır ve her biri kabın **tüm hacmini** doldurur. Hacimler ortaktır; ayrı ayrı uygulanan **basınçlar** toplanır.",
            "**Kısmi basıncı da en büyüktür**; çünkü kısmi basınç mol kesriyle doğru orantılıdır.",
            "**Difüzyon**, gazın ortama kendiliğinden **yayılmasıdır**. **Efüzyon**, gazın **küçük bir delikten** dışarı sızmasıdır.",
            "**v_1/v_2 = √(M_2/M_1)** ve **t_1/t_2 = √(M_1/M_2)**.",
            "√(32/2) = √16 = **4 kat** hızlı yayılır.",
            "√4 = 2 → **2 kat yavaş** yayılır.",
            "Hız oranı kütle oranına değil, kütle oranının **kareköküne** bağlıdır. 4 kat kütle **2 kat** yavaşlık demektir.",
            "**Mol kütleleri eşittir**. Graham yasasına göre eşit sürede yayılan gazların mol kütleleri de eşit olmalıdır.",
            "Tanecik **hacmi yok** sayılır, tanecikler arası **çekim yoktur**, çarpışmalar **tam esnektir**.",
            "Gerçek gazlarda taneciklerin **kendi hacmi vardır** ve tanecikler arasında **çekim kuvveti bulunur**. Bu yüzden PV = nRT'den sapma görülür.",
            "**Düşük basınç** ve **yüksek sıcaklıkta**. Bu koşullarda tanecikler birbirinden uzaktır; hem kendi hacimleri hem de aralarındaki çekim ihmal edilebilir hâle gelir.",
            "Yüksek basınçta tanecikler birbirine yaklaşır ve **kendi hacimleri** toplam hacim içinde artık ihmal edilemez; ölçülen hacim beklenenden büyük çıkar.",
            "Düşük sıcaklıkta tanecikler yavaşlar ve aralarındaki **çekim kuvveti** etkili olur; tanecikler birbirine yaklaşır, hacim beklenenden küçük olur.",
            "**He ve H_2**. Mol kütleleri çok küçüktür ve tanecikleri arasındaki çekim kuvvetleri çok zayıftır.",
            "İdeal gazda **çekim kuvveti yoktur**; çekim olmasaydı gaz hiçbir koşulda yoğunlaşıp sıvılaşamazdı. Sıvılaşma, gerçek gazlarda çekimin var olduğunu kanıtlar.",
            "**Charles yasası**. Sabit basınçta sıcaklık artınca hacim artar, sıcaklık düşünce hacim azalır.",
            "**Boyle yasası**. Yükseklerde dış basınç azalır; paketin içindeki gazın basıncı sabit kaldığı için hacim artar ve paket şişer.",
        ],
    },
}
