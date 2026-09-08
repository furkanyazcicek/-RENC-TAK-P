"""AYT Kimya — Sulu Çözelti Dengeleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: SULU ÇÖZELTİ DENGELERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Sulu Çözelti Dengeleri",
    "alt_baslik": "Ham bilgi notu — asit-baz kuramları, pH hesapları, tampon çözeltiler, "
                  "titrasyon ve çözünürlük çarpımı; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Sulu Çözelti Dengeleri",
        "kazanimlar": "11.6.3.1 — Suyun otoiyonizasyonunu ve pH kavramını açıklar. "
                      "11.6.3.2 — Asit ve bazların kuvvetini iyonlaşma sabitiyle "
                      "ilişkilendirir. "
                      "11.6.3.3 — Tampon çözeltilerin çalışma ilkesini açıklar. "
                      "11.6.4.1 — Çözünürlük çarpımını kullanarak çökelme koşulunu belirler.",
        "kapsam": "Arrhenius–Brønsted-Lowry–Lewis kuramları, suyun iyonlaşması ve K_su, "
                  "pH ve pOH, kuvvetli–zayıf asit ve bazlar, K_a ve K_b, konjuge çiftler, "
                  "tuzların hidrolizi, tampon çözeltiler, titrasyon ve eşdeğerlik noktası, "
                  "çözünürlük çarpımı K_çç, 50 analiz sorusu",
        "nasil": "Bu konu **hesap** konusudur ama hesabın öncesinde bir ayrım vardır: "
                 "**kuvvetli mi zayıf mı?** Kuvvetliyse derişimi doğrudan kullan, "
                 "zayıfsa **K_a ile hesapla**. Bu ayrımı yapmadan formüle geçme.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **pH hesabı**, **tampon "
                    "çözelti** ya da **çökelme olur mu** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Asit-Baz Kuramları"},
        {"tur": "gorsel", "baslik": "Şema 1 — Üç asit-baz kuramı",
         "aciklama": "Kuramlar birbirini **çürütmez, genişletir**. Arrhenius en dar, "
                     "Lewis en geniş kapsamlıdır. Bir madde Arrhenius'a göre asit "
                     "değilse bile Lewis'e göre asit olabilir.",
         "ciz": S.karsilastirma(
             "Arrhenius (en dar)",
             ["**Asit**: suda **H^+** verir",
              "**Baz**: suda **OH^-** verir",
              "Yalnızca **sulu çözeltiler** için",
              "NH_3'ü baz olarak **açıklayamaz**"],
             "Brønsted-Lowry",
             ["**Asit**: **proton (H^+) verir**",
              "**Baz**: **proton alır**",
              "Susuz ortamda da geçerlidir",
              "**Konjuge çiftler** bu kuramdan doğar"],
             "Lewis (en geniş)",
             ["**Asit**: **elektron çifti alır**",
              "**Baz**: **elektron çifti verir**",
              "Protonsuz maddeleri de kapsar",
              "**BF_3** Lewis asididir"])},
        {"tur": "tanim", "kavram": "Konjuge (eşlenik) asit-baz çifti",
         "aciklama": "Birbirinden **tek bir proton (H^+) farkı** olan madde çiftidir. "
                     "Asit proton verince **konjuge bazı**, baz proton alınca **konjuge "
                     "asidi** oluşur. Örnek: **HCl / Cl^-** ve **NH_4^+ / NH_3**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Kuvvetli asidin konjuge bazı zayıftır**; zayıf asidin konjuge bazı "
            "görece kuvvetlidir.",
            "**Amfoter (amfiprotik) maddeler** hem proton verip hem alabilir: **H_2O**, "
            "**HCO_3^-**, **HSO_4^-**, **H_2PO_4^-**.",
            "Su, asitle karşılaşınca **baz**, bazla karşılaşınca **asit** gibi davranır; "
            "bu yüzden amfoterdir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "pH ve pOH"},
        {"tur": "formul",
         "baslik": "Suyun iyonlaşması ve pH bağıntıları",
         "ifade": "H_2O ⇌ H^+ + OH^-\n"
                  "K_(su) = [H^+] · [OH^-] = **10^(-14)**   (25 °C)\n"
                  "pH = **−log[H^+]**        pOH = **−log[OH^-]**\n"
                  "**pH + pOH = 14**   (25 °C)",
         "terimler": [
             ("Saf suda", "[H^+] = [OH^-] = **10^(-7)** M → pH = **7** (nötr)"),
             ("Asidik", "[H^+] > [OH^-] → **pH < 7**"),
             ("Bazik", "[H^+] < [OH^-] → **pH > 7**"),
             ("Dikkat", "pH = 7 nötrlüğü **yalnızca 25 °C'de** gösterir"),
         ],
         "not": "**pH bir birim düştüğünde [H^+] 10 kat artar.** pH 3 olan çözelti, "
                "pH 5 olandan **100 kat** daha asidiktir. Logaritmik ölçek bunu söyler."},
        {"tur": "tuzak", "baslik": "Sıcaklık Değişince pH = 7 Nötr Olmaz", "govde":
            "Suyun iyonlaşması **endotermiktir**. Sıcaklık artınca denge iyonlaşma "
            "yönüne kayar, K_su büyür ve [H^+] artar. 50 °C'de saf suyun pH'ı yaklaşık "
            "**6,6**'dır ama su hâlâ **nötrdür**; çünkü [H^+] = [OH^-] eşitliği "
            "bozulmamıştır. Nötrlüğün ölçüsü pH = 7 değil, **[H^+] = [OH^-]** "
            "eşitliğidir."},
        {"tur": "cozum",
         "baslik": "pH Hesabı",
         "soru": "**0,01 M HCl** ve **0,01 M CH_3COOH** (K_a = 1,8·10^(-5)) "
                 "çözeltilerinin pH değerlerini karşılaştırınız.",
         "adimlar": [
             "**HCl kuvvetli asittir**, tamamen iyonlaşır: [H^+] = **0,01 = 10^(-2)** M.",
             "pH = −log(10^(-2)) = **2**.",
             "**CH_3COOH zayıf asittir**, kısmen iyonlaşır. [H^+] = √(K_a · C) "
             "yaklaşımı kullanılır.",
             "[H^+] = √(1,8·10^(-5) · 10^(-2)) = √(1,8·10^(-7)) ≈ **4,2·10^(-4)** M.",
             "pH ≈ −log(4,2·10^(-4)) ≈ **3,4**.",
         ],
         "sonuc": "Aynı derişimde olmalarına rağmen kuvvetli asidin pH'ı **2**, zayıf "
                  "asidinki **3,4**'tür. Derişim eşit olsa da **iyonlaşma yüzdesi** "
                  "farklıdır."},
        {"tur": "tablo",
         "basliklar": ["Tür", "Örnekler", "Özelliği"],
         "satirlar": [
             ["**Kuvvetli asitler**", "**HCl, HBr, HI, HNO_3, H_2SO_4, HClO_4**",
              "Suda **tamamen** iyonlaşır; K_a çok büyüktür"],
             ["**Zayıf asitler**", "CH_3COOH, HF, H_2CO_3, H_3PO_4, HCN",
              "**Kısmen** iyonlaşır; denge kurulur"],
             ["**Kuvvetli bazlar**", "**NaOH, KOH, LiOH, Ca(OH)_2, Ba(OH)_2**",
              "Suda **tamamen** iyonlaşır"],
             ["**Zayıf bazlar**", "NH_3, aminler, Al(OH)_3, Fe(OH)_3",
              "**Kısmen** iyonlaşır"],
         ],
         "oranlar": [0.22, 0.38, 0.40]},
        {"tur": "dikkat", "baslik": "Kuvvetli ile Derişik Aynı Şey Değildir", "govde":
            "**Kuvvet**, asidin **ne kadarının iyonlaştığıyla** ilgilidir; maddenin "
            "kendi özelliğidir. **Derişim**, çözeltide **ne kadar madde bulunduğuyla** "
            "ilgilidir. Seyreltik bir HCl çözeltisi **kuvvetli ama seyreltiktir**; "
            "derişik bir sirke çözeltisi **zayıf ama derişiktir**. Bu ayrım sorularda "
            "doğrudan sınanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Tuzların Hidrolizi"},
        {"tur": "tablo",
         "basliklar": ["Tuzun geldiği asit-baz", "Örnek", "Çözeltinin pH'ı"],
         "satirlar": [
             ["**Kuvvetli asit + kuvvetli baz**", "NaCl, KNO_3, Na_2SO_4",
              "**Nötr** (pH = 7) — hidroliz olmaz"],
             ["**Kuvvetli asit + zayıf baz**", "NH_4Cl, (NH_4)_2SO_4",
              "**Asidik** (pH < 7)"],
             ["**Zayıf asit + kuvvetli baz**", "CH_3COONa, Na_2CO_3, NaF",
              "**Bazik** (pH > 7)"],
             ["**Zayıf asit + zayıf baz**", "CH_3COONH_4",
              "**K_a ve K_b karşılaştırılır**; büyük olan yönü belirler"],
         ],
         "oranlar": [0.30, 0.28, 0.42]},
        {"tur": "taktik", "baslik": "Tuz Sorularında Kural Tek Cümlede", "govde":
            "**Kuvvetli olan taraf kazanır.** Tuzu oluşturan asit kuvvetliyse çözelti "
            "asidik, baz kuvvetliyse bazik olur. İkisi de kuvvetliyse nötrdür. "
            "\"NH_4Cl çözeltisinin pH'ı kaçtır\" sorusunda cevap hemen çıkar: HCl "
            "kuvvetli, NH_3 zayıf → **asidik**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Tampon Çözeltiler"},
        {"tur": "tanim", "kavram": "Tampon çözelti",
         "aciklama": "Az miktarda **asit ya da baz eklendiğinde pH'ı neredeyse hiç "
                     "değişmeyen** çözeltidir. **Zayıf bir asit ile onun tuzundan** "
                     "(konjuge bazından) ya da **zayıf bir baz ile onun tuzundan** "
                     "hazırlanır."},
        {"tur": "gorsel", "baslik": "Şema 2 — Tampon çözelti nasıl çalışır?",
         "aciklama": "Tamponun içinde hem **asit alıcı** hem **baz alıcı** bir tür "
                     "bulunur. Dışarıdan gelen asit ya da baz, bu türler tarafından "
                     "**yakalanır** ve pH neredeyse sabit kalır.",
         "ciz": S.karsilastirma(
             "Asit eklenirse",
             ["Eklenen **H^+** iyonları",
              "Tampondaki **konjuge baz** (CH_3COO^-) tarafından yakalanır",
              "CH_3COO^- + H^+ → CH_3COOH",
              "Serbest H^+ artmaz → **pH sabit kalır**"],
             "Baz eklenirse",
             ["Eklenen **OH^-** iyonları",
              "Tampondaki **zayıf asit** (CH_3COOH) tarafından nötrlenir",
              "CH_3COOH + OH^- → CH_3COO^- + H_2O",
              "Serbest OH^- artmaz → **pH sabit kalır**"],
             "Nerede bulunur?",
             ["**Kan** (HCO_3^- tamponu, pH ≈ 7,4)",
              "Hücre içi sıvılar (fosfat tamponu)",
              "İlaç ve kozmetik çözeltileri",
              "Toprak ve deniz suyu"])},
        {"tur": "formul",
         "baslik": "Henderson-Hasselbalch bağıntısı",
         "ifade": "pH  =  pK_a  +  log ( [tuz] / [asit] )",
         "terimler": [
             ("pK_a", "**−log K_a**"),
             ("[tuz]", "Konjuge bazın (tuzun) derişimi"),
             ("[asit]", "Zayıf asidin derişimi"),
             ("Eşit derişimde", "[tuz] = [asit] ise log 1 = 0 → **pH = pK_a**"),
         ],
         "not": "En etkili tampon, **derişimleri eşit** olan tampondur; o noktada "
                "pH = pK_a olur ve tamponlama gücü en yüksektir."},
        {"tur": "tuzak", "baslik": "Kuvvetli Asitle Tampon Yapılmaz", "govde":
            "Tampon için **zayıf** bir asit (ya da baz) ve onun **tuzu** gerekir. "
            "HCl + NaCl karışımı **tampon değildir**; çünkü HCl tamamen iyonlaşmıştır "
            "ve Cl^- proton yakalayamaz. \"HCl ile NaCl karışımı tampondur\" ifadesi "
            "**yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Titrasyon"},
        {"tur": "tanim", "kavram": "Titrasyon",
         "aciklama": "Derişimi **bilinmeyen** bir çözeltinin derişimini, derişimi "
                     "**bilinen** bir çözelti (**standart çözelti**) ile tepkimeye "
                     "sokarak bulma yöntemidir. Tepkimenin tam bittiği noktaya "
                     "**eşdeğerlik noktası**, indikatörün renk değiştirdiği noktaya "
                     "**dönüm noktası** denir."},
        {"tur": "formul",
         "baslik": "Nötrleşme hesabı",
         "ifade": "**M_A · V_A · t_A  =  M_B · V_B · t_B**",
         "terimler": [
             ("M", "Molarite"),
             ("V", "Hacim"),
             ("t_A", "Asidin verebileceği **H^+ sayısı** (HCl:1, H_2SO_4:2, H_3PO_4:3)"),
             ("t_B", "Bazın verebileceği **OH^- sayısı** (NaOH:1, Ca(OH)_2:2)"),
         ],
         "not": "**Tesir değerliğini (t) unutmak**, bu konudaki en yaygın hatadır. "
                "H_2SO_4 için 2 yazılmazsa sonuç yarı yarıya yanlış çıkar."},
        {"tur": "gorsel", "baslik": "Şema 3 — Titrasyon eğrisi",
         "aciklama": "Eşdeğerlik noktasında pH **çok küçük hacim değişimiyle çok "
                     "hızlı** değişir; grafiğin dik kısmı budur. **Kuvvetli asit–"
                     "kuvvetli baz** titrasyonunda eşdeğerlik noktası **pH = 7**'dedir; "
                     "**zayıf asit–kuvvetli baz** titrasyonunda **pH > 7** olur, çünkü "
                     "oluşan tuz **bazik hidroliz** yapar.",
         "ciz": S.grafik("Eklenen baz hacmi (mL)", "pH", [
             ("Kuvvetli asit – kuvvetli baz",
              [(0.04, 0.08), (0.24, 0.14), (0.42, 0.22), (0.50, 0.48),
               (0.54, 0.76), (0.68, 0.86), (0.94, 0.92)], S.MARKA),
             ("Zayıf asit – kuvvetli baz",
              [(0.04, 0.24), (0.24, 0.38), (0.42, 0.48), (0.50, 0.64),
               (0.56, 0.84), (0.70, 0.90), (0.94, 0.94)], S.BASARI),
         ], notlar=[(0.14, 0.56, "**eşdeğerlik noktası**\ndik bölge")],
            kilavuzlar=[(0.52, 0.50)], gosterge="sag-alt", yukseklik=56.0)},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Çözünürlük Çarpımı"},
        {"tur": "formul",
         "baslik": "Çözünürlük çarpımı (K_çç)",
         "ifade": "A_xB_y(k) ⇌ x A^(y+) + y B^(x-)\n"
                  "K_(çç) = [A^(y+)]^x · [B^(x-)]^y\n"
                  "Q_(çç) < K_(çç) → **çökelme yok**, çözelti doymamış\n"
                  "Q_(çç) = K_(çç) → **doymuş**, denge\n"
                  "Q_(çç) > K_(çç) → **çökelme olur**",
         "terimler": [
             ("K_çç", "Az çözünen tuzun **denge sabiti**; yalnızca sıcaklıkla değişir"),
             ("Katı", "Bağıntıya **yazılmaz**"),
             ("Küçük K_çç", "Tuz **daha az çözünür**"),
             ("Ortak iyon etkisi", "Ortamda ortak iyon varsa çözünürlük **azalır**"),
         ],
         "not": "**Ortak iyon etkisi** Le Chatelier'nin doğrudan bir sonucudur: ortamda "
                "zaten bulunan bir iyon, çözünme dengesini **katı yönüne** iter ve "
                "tuzun çözünürlüğünü düşürür."},
        {"tur": "cozum",
         "baslik": "Çökelme Var mı?",
         "soru": "**AgCl** için K_çç = **1,8·10^(-10)**'dur. **10^(-4) M Ag^+** ve "
                 "**10^(-4) M Cl^-** içeren bir çözeltide çökelme olur mu?",
         "adimlar": [
             "Q_çç hesaplanır: Q = [Ag^+] · [Cl^-].",
             "Q = 10^(-4) · 10^(-4) = **10^(-8)**.",
             "K_çç = 1,8·10^(-10) ≈ **10^(-9,7)**.",
             "**Q (10^(-8)) > K_çç (1,8·10^(-10))** olduğu için çözelti aşırı doymuştur.",
         ],
         "sonuc": "**Çökelme olur.** Sistem, Q'yu K'ye indirmek için katı AgCl "
                  "oluşturarak iyon derişimlerini düşürür."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Arrhenius** en dar, **Lewis** en geniş kuramdır.",
            "**Konjuge çift tek proton farkıyla** oluşur.",
            "**Kuvvetli asidin konjuge bazı zayıftır.**",
            "**K_su = 10^(-14)**, **pH + pOH = 14** (25 °C).",
            "**pH bir birim düşünce [H^+] 10 kat artar.**",
            "**Nötrlük ölçüsü pH = 7 değil, [H^+] = [OH^-] eşitliğidir.**",
            "**Kuvvet ile derişim ayrı şeylerdir.**",
            "Tuz sorularında **kuvvetli olan taraf kazanır**.",
            "**Tampon zayıf asit + tuzundan** yapılır; kuvvetli asitle tampon olmaz.",
            "**pH = pK_a + log([tuz]/[asit])**.",
            "Titrasyonda **tesir değerliğini (t) unutma**.",
            "**Q_çç > K_çç ise çökelme olur.**",
            "**Ortak iyon çözünürlüğü azaltır.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her hesap sorusunun başında bir ayrım vardır: **kuvvetli mi "
            "zayıf mı?** Bu soruyu yanıtlamadan formüle geçme. Çökelme sorularında da "
            "önce **Q'yu hesapla**, sonra K ile karşılaştır.",
        "satir_sayisi": 2,
        "sorular": [
            "Arrhenius asit-baz tanımını yazarak sınırlılığını açıklayınız.",
            "Brønsted-Lowry asit-baz tanımını yazınız.",
            "Lewis asit-baz tanımını yazarak bir örnek veriniz.",
            "Üç kuramı kapsam bakımından sıralayınız.",
            "NH_3'ün Arrhenius'a göre neden baz sayılamadığını açıklayınız.",
            "Konjuge asit-baz çiftini tanımlayarak iki örnek veriniz.",
            "Kuvvetli asidin konjuge bazının kuvveti hakkında ne söylenir?",
            "Amfoter maddeyi tanımlayarak üç örnek veriniz.",
            "Suyun amfoter olmasının anlamını açıklayınız.",
            "Suyun otoiyonizasyon denklemini ve K_su değerini yazınız.",
            "pH ve pOH tanımlarını formülle yazınız.",
            "25 °C'de pH + pOH toplamının kaç olduğunu yazınız.",
            "Saf suda [H^+] ve [OH^-] değerlerini yazınız.",
            "pH 3 olan çözelti pH 5 olandan kaç kat asidiktir?",
            "Sıcaklık artınca saf suyun pH'ının düşmesini açıklayınız.",
            "50 °C'de pH'ı 6,6 olan saf su asidik midir? Gerekçesiyle yazınız.",
            "Nötrlüğün gerçek ölçüsünün ne olduğunu yazınız.",
            "Altı kuvvetli asidi yazınız.",
            "Beş kuvvetli bazı yazınız.",
            "Kuvvetli ve zayıf asidi iyonlaşma bakımından karşılaştırınız.",
            "'Kuvvetli asit' ile 'derişik asit' kavramlarını ayırt ediniz.",
            "0,01 M HCl çözeltisinin pH'ını hesaplayınız.",
            "0,01 M CH_3COOH (K_a = 1,8·10^(-5)) çözeltisinin pH'ını yaklaşık olarak hesaplayınız.",
            "Aynı derişimdeki kuvvetli ve zayıf asidin pH farkının nedenini açıklayınız.",
            "Bir asidin K_a değeri büyükse kuvveti hakkında ne söylenir?",
            "NaCl çözeltisinin pH'ını gerekçesiyle yazınız.",
            "NH_4Cl çözeltisinin pH'ını gerekçesiyle yazınız.",
            "CH_3COONa çözeltisinin pH'ını gerekçesiyle yazınız.",
            "Zayıf asit ve zayıf bazdan oluşan bir tuzun pH'ı nasıl belirlenir?",
            "Tuz hidrolizinde 'kuvvetli olan taraf kazanır' kuralını bir örnekle açıklayınız.",
            "Tampon çözeltiyi tanımlayarak nasıl hazırlandığını yazınız.",
            "Tampona asit eklendiğinde ne olduğunu denklemle açıklayınız.",
            "Tampona baz eklendiğinde ne olduğunu denklemle açıklayınız.",
            "Kanın tampon sistemini ve normal pH değerini yazınız.",
            "HCl ile NaCl karışımının neden tampon olmadığını açıklayınız.",
            "Henderson-Hasselbalch bağıntısını yazınız.",
            "Tuz ve asit derişimleri eşit olan bir tamponun pH'ı ne olur?",
            "En etkili tamponun hangi durumda elde edildiğini açıklayınız.",
            "Titrasyonu tanımlayarak standart çözeltinin ne olduğunu yazınız.",
            "Eşdeğerlik noktası ile dönüm noktasını ayırt ediniz.",
            "Nötrleşme hesabı formülünü tesir değerlikleriyle birlikte yazınız.",
            "H_2SO_4 ve Ca(OH)_2 için tesir değerliklerini yazınız.",
            "0,1 M 20 mL H_2SO_4'ü nötrlemek için 0,2 M NaOH'tan kaç mL gerekir?",
            "Kuvvetli asit-kuvvetli baz titrasyonunda eşdeğerlik noktasındaki pH'ı yazınız.",
            "Zayıf asit-kuvvetli baz titrasyonunda eşdeğerlik noktasının neden 7'den büyük olduğunu açıklayınız.",
            "Titrasyon eğrisinde dik bölgenin anlamını yazınız.",
            "Çözünürlük çarpımını tanımlayarak katının neden bağıntıya yazılmadığını açıklayınız.",
            "AgCl için K_çç = 1,8·10^(-10) iken 10^(-4) M Ag^+ ve 10^(-4) M Cl^- içeren çözeltide çökelme olur mu?",
            "Ortak iyon etkisini Le Chatelier ilkesiyle açıklayınız.",
            "K_çç değeri küçük olan bir tuzun çözünürlüğü hakkında ne söylenir?",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Asit** suda **H^+**, **baz** suda **OH^-** veren maddedir. Sınırlılığı: yalnızca **sulu çözeltiler** için geçerlidir ve NH_3 gibi OH^- içermeyen bazları açıklayamaz.",
            "**Asit proton (H^+) veren**, **baz proton alan** maddedir. Susuz ortamlarda da geçerlidir.",
            "**Asit elektron çifti alan**, **baz elektron çifti veren** maddedir. Örnek: **BF_3** bir Lewis asididir (elektron çifti alır).",
            "**Arrhenius < Brønsted-Lowry < Lewis**. Her kuram bir öncekini kapsar ve genişletir.",
            "NH_3 yapısında **OH^- içermez**. Arrhenius tanımı OH^- vermeyi şart koştuğu için NH_3'ü baz sayamaz. Brønsted-Lowry'ye göre ise **proton aldığı** için bazdır.",
            "Birbirinden **tek proton farkı** olan çifttir. Örnek: **HCl / Cl^-** ve **NH_4^+ / NH_3**.",
            "**Zayıftır**. Kuvvetli asit protonunu kolayca verir; konjuge bazı bu protonu geri almakta isteksizdir.",
            "Hem **proton verebilen** hem **alabilen** maddedir. Örnek: **H_2O**, **HCO_3^-**, **HSO_4^-**.",
            "Su, asitle karşılaşınca **proton alır (baz gibi)**, bazla karşılaşınca **proton verir (asit gibi)** davranır. Duruma göre iki rolü de üstlenir.",
            "**H_2O ⇌ H^+ + OH^-**; 25 °C'de **K_su = [H^+]·[OH^-] = 10^(-14)**.",
            "**pH = −log[H^+]**, **pOH = −log[OH^-]**.",
            "**14**'tür.",
            "**[H^+] = [OH^-] = 10^(-7) M**.",
            "İki birim fark var; her birim 10 kat demektir → **100 kat** daha asidiktir.",
            "Suyun iyonlaşması **endotermiktir**. Sıcaklık artınca denge iyonlaşma yönüne kayar, [H^+] artar ve pH **düşer**.",
            "**Asidik değildir, nötrdür**. Çünkü [H^+] = [OH^-] eşitliği hâlâ geçerlidir; yalnızca ikisinin değeri birlikte artmıştır.",
            "**[H^+] = [OH^-]** eşitliğidir. pH = 7 ölçütü yalnızca **25 °C** için geçerlidir.",
            "**HCl, HBr, HI, HNO_3, H_2SO_4, HClO_4**.",
            "**NaOH, KOH, LiOH, Ca(OH)_2, Ba(OH)_2**.",
            "**Kuvvetli asit** suda **tamamen** iyonlaşır. **Zayıf asit kısmen** iyonlaşır ve iyonlaşma dengesi kurulur.",
            "**Kuvvet** iyonlaşma yüzdesiyle ilgilidir, **maddenin kendi özelliğidir**. **Derişim** çözeltide ne kadar madde bulunduğuyla ilgilidir. Seyreltik HCl kuvvetli ama seyreltiktir.",
            "HCl tamamen iyonlaşır: [H^+] = 10^(-2) → **pH = 2**.",
            "[H^+] = √(K_a·C) = √(1,8·10^(-5) · 10^(-2)) ≈ 4,2·10^(-4) → **pH ≈ 3,4**.",
            "Kuvvetli asit **tamamen**, zayıf asit **kısmen** iyonlaşır. Aynı derişimde olsalar da kuvvetli asit çok daha fazla H^+ verdiği için pH'ı düşüktür.",
            "**Daha kuvvetlidir**. K_a büyükse iyonlaşma dengesi ürünler (H^+) yönündedir.",
            "**Nötrdür (pH = 7)**. Kuvvetli asit (HCl) ile kuvvetli bazdan (NaOH) oluşmuştur; iyonları hidroliz olmaz.",
            "**Asidiktir (pH < 7)**. Kuvvetli asit (HCl) ile zayıf bazdan (NH_3) oluşmuştur; NH_4^+ hidroliz olup H^+ verir.",
            "**Baziktir (pH > 7)**. Zayıf asit (CH_3COOH) ile kuvvetli bazdan (NaOH) oluşmuştur; CH_3COO^- hidroliz olup OH^- verir.",
            "**K_a ve K_b karşılaştırılır**. K_a büyükse çözelti asidik, K_b büyükse baziktir; eşitse nötre yakındır.",
            "Tuzu oluşturan **hangi taraf kuvvetliyse çözelti o yöne kayar**. NH_4Cl'de HCl kuvvetli, NH_3 zayıf → çözelti **asidiktir**.",
            "Az miktarda asit ya da baz eklendiğinde **pH'ı neredeyse değişmeyen** çözeltidir. **Zayıf asit + tuzu** ya da **zayıf baz + tuzu** ile hazırlanır.",
            "Eklenen H^+ iyonları **konjuge baz** tarafından yakalanır: **CH_3COO^- + H^+ → CH_3COOH**. Serbest H^+ artmadığı için pH sabit kalır.",
            "Eklenen OH^- iyonları **zayıf asit** tarafından nötrlenir: **CH_3COOH + OH^- → CH_3COO^- + H_2O**. Serbest OH^- artmaz, pH sabit kalır.",
            "**Karbonat (HCO_3^-) tamponudur**; kanın normal pH'ı yaklaşık **7,4**'tür. Bu değerin dışına çıkmak yaşamsal tehlike yaratır.",
            "HCl **kuvvetli asittir** ve tamamen iyonlaşmıştır. Cl^- proton yakalayamaz; bu yüzden eklenen asidi tamponlayacak bir tür yoktur.",
            "**pH = pK_a + log([tuz] / [asit])**.",
            "log 1 = 0 olduğundan **pH = pK_a** olur.",
            "**Tuz ve asit derişimleri eşit** olduğunda. Bu noktada tamponlama kapasitesi hem asit hem baz eklemesine karşı en yüksektir.",
            "Derişimi bilinmeyen çözeltiyi, derişimi **bilinen bir çözeltiyle** tepkimeye sokarak derişimini bulma yöntemidir. Derişimi bilinen çözeltiye **standart çözelti** denir.",
            "**Eşdeğerlik noktası** tepkimenin teorik olarak tam bittiği noktadır. **Dönüm noktası** indikatörün renk değiştirdiği, gözle görülen noktadır. İkisi birbirine çok yakındır ama aynı değildir.",
            "**M_A · V_A · t_A = M_B · V_B · t_B**. t değerleri asidin verdiği H^+ ve bazın verdiği OH^- sayısıdır.",
            "**H_2SO_4 için t = 2**, **Ca(OH)_2 için t = 2**.",
            "0,1 · 20 · 2 = 0,2 · V · 1 → 4 = 0,2V → **V = 20 mL**.",
            "**pH = 7**'dir. Oluşan tuz nötrdür ve hidroliz olmaz.",
            "Oluşan tuz **zayıf asidin tuzudur** ve **bazik hidroliz** yapar. Ortama OH^- verdiği için eşdeğerlik noktasında pH 7'nin **üstündedir**.",
            "Eşdeğerlik noktası çevresinde **çok küçük hacim değişimiyle pH'ın çok hızlı değiştiğini** gösterir. İndikatörün renk değiştirdiği bölge burasıdır.",
            "Az çözünen bir tuzun **çözünme dengesinin sabitidir**. Katının **derişimi sabit** olduğu için bağıntıya yazılmaz.",
            "Q = 10^(-4) · 10^(-4) = 10^(-8). Q > K_çç (1,8·10^(-10)) olduğu için **çökelme olur**.",
            "Ortamda bulunan **ortak iyon**, çözünme dengesini **katı yönüne** iter (Le Chatelier). Bu yüzden tuzun çözünürlüğü **azalır**.",
            "**Daha az çözünür**. K_çç küçüldükçe dengedeki iyon derişimleri düşer, yani tuz suda daha az çözünür.",
        ],
    },
}
