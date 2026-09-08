"""AYT Kimya — Kimyasal Tepkimelerde Denge (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: TEPKİMELERDE DENGE",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Kimyasal Tepkimelerde Denge",
    "alt_baslik": "Ham bilgi notu — denge sabiti, Le Chatelier ilkesi ve denge "
                  "hesapları; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Kimyasal Tepkimelerde Denge",
        "kazanimlar": "11.6.1.1 — Dinamik dengeyi açıklar. "
                      "11.6.1.2 — Denge sabitini yazar ve hesaplar. "
                      "11.6.2.1 — Le Chatelier ilkesiyle denge kaymasını yorumlar. "
                      "11.6.2.2 — Denge üzerinde etkili olmayan etkenleri ayırt eder.",
        "kapsam": "Tersinir tepkime, dinamik denge, K_c ve K_p, denge sabitinin anlamı, "
                  "Q ile K karşılaştırması, Le Chatelier ilkesi, derişim–basınç–sıcaklık "
                  "etkisi, katalizör ve soy gazın etkisizliği, denge hesapları, "
                  "50 analiz sorusu",
        "nasil": "Denge sorularının tamamı tek soruyla çözülür: **sistem hangi yöne "
                 "kayarsa uygulanan etkiyi azaltır?** Le Chatelier bunu söyler. "
                 "Hesaplarda ise **başlangıç–değişim–denge** tablosunu kurmadan sayıya "
                 "geçme.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **Le Chatelier yorumu**, "
                    "**denge sabiti hesabı** ya da **hangi etken dengeyi değiştirmez** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Kimyasal Denge"},
        {"tur": "tanim", "kavram": "Dinamik denge",
         "aciklama": "Tersinir bir tepkimede **ileri ve geri tepkime hızlarının eşit "
                     "olduğu** durumdur. Tepkime **durmaz**; iki yönde de sürer ama "
                     "**derişimler artık değişmez**. Bu yüzden \"dinamik\" denir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Dengeye gidiş",
         "aciklama": "Başlangıçta ileri tepkime hızlıdır, geri tepkime sıfırdır. "
                     "Girenler azaldıkça ileri hız **düşer**, ürünler arttıkça geri hız "
                     "**yükselir**. İkisi **eşitlendiğinde** denge kurulur. Dikkat: "
                     "eşitlenen **hızlardır, derişimler değil**.",
         "ciz": S.grafik("Zaman", "Tepkime hızı", [
             ("İleri tepkime hızı", [(0.02, 0.90), (0.14, 0.70), (0.28, 0.56),
                                     (0.44, 0.48), (0.62, 0.44), (0.94, 0.44)], S.MARKA),
             ("Geri tepkime hızı", [(0.02, 0.04), (0.14, 0.20), (0.28, 0.34),
                                    (0.44, 0.42), (0.62, 0.44), (0.94, 0.44)], S.BASARI),
         ], notlar=[(0.62, 0.62, "**denge kuruldu**")],
            kilavuzlar=[(0.60, 0.44)], gosterge="sag-alt", yukseklik=54.0)},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Denge yalnızca **kapalı sistemlerde** kurulur; ürünlerden biri ortamdan "
            "uzaklaşırsa denge kurulamaz.",
            "Dengede **derişimler sabittir ama eşit değildir**. \"Girenlerin ve ürünlerin "
            "derişimi eşit olur\" ifadesi **yanlıştır**.",
            "Dengeye **her iki yönden de** ulaşılabilir: yalnızca girenlerden ya da "
            "yalnızca ürünlerden başlanabilir; sonuç aynı denge noktasıdır.",
            "Denge **makroskobik olarak durgun**, **tanecik düzeyinde hareketlidir**.",
        ]},
        {"tur": "tuzak", "baslik": "Dengede Tepkime Durmaz", "govde":
            "En yaygın yanlış anlama budur. Dengede **her iki tepkime de sürmektedir**; "
            "yalnızca hızları eşit olduğu için **net bir değişim gözlenmez**. Radyoaktif "
            "izotopla işaretlenmiş bir madde kullanıldığında, dengedeki bir sistemde bile "
            "işaretin ürünlere geçtiği görülür — bu, tepkimenin devam ettiğinin "
            "kanıtıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Denge Sabiti"},
        {"tur": "gorsel", "baslik": "Şema 2 — Derişimlerin zamanla değişimi",
         "aciklama": "Hız grafiğinde **eşitlenen** şey hızlardı; derişim grafiğinde ise "
                     "eğriler **yataylaşır ama farklı düzeylerde** durur. Bu, dengede "
                     "derişimlerin **sabit olduğunu ama eşit olmadığını** gösterir. "
                     "Yatay bölgenin başladığı an, dengenin kurulduğu andır.",
         "ciz": S.grafik("Zaman", "Derişim (mol/L)", [
             ("Giren madde", [(0.02, 0.90), (0.14, 0.68), (0.28, 0.52),
                              (0.44, 0.44), (0.60, 0.42), (0.94, 0.42)], S.MARKA),
             ("Ürün", [(0.02, 0.04), (0.14, 0.28), (0.28, 0.48),
                       (0.44, 0.62), (0.60, 0.66), (0.94, 0.66)], S.BASARI),
         ], notlar=[(0.60, 0.88, "**denge bölgesi**\nderişimler sabit")],
            kilavuzlar=[(0.58, 0.66)], gosterge="sol-ust", yukseklik=54.0)},
        {"tur": "formul",
         "baslik": "Denge sabiti bağıntıları",
         "ifade": "aA + bB ⇌ cC + dD  için\n"
                  "K_c = ([C]^c · [D]^d) / ([A]^a · [B]^b)\n"
                  "K_p = (P_C^c · P_D^d) / (P_A^a · P_B^b)\n"
                  "K_p = K_c · (R·T)^(Δn)",
         "terimler": [
             ("K_c", "**Derişimler** cinsinden denge sabiti"),
             ("K_p", "**Kısmi basınçlar** cinsinden denge sabiti — yalnızca **gazlar** için"),
             ("Δn", "**Gaz** ürünlerinin molü − **gaz** girenlerinin molü"),
             ("Katı ve saf sıvı", "Denge bağıntısına **yazılmaz**; derişimleri sabittir"),
         ],
         "not": "**Δn = 0 ise K_p = K_c** olur. Denge sabiti **yalnızca sıcaklıkla "
                "değişir**; derişim, basınç ve katalizör K'yi **değiştirmez**."},
        {"tur": "tablo",
         "basliklar": ["K değeri", "Anlamı"],
         "satirlar": [
             ["**K >> 1** (çok büyük)", "Denge **ürünler yönündedir**; tepkime büyük ölçüde tamamlanmıştır"],
             ["**K << 1** (çok küçük)", "Denge **girenler yönündedir**; tepkime çok az ilerlemiştir"],
             ["**K ≈ 1**", "Girenler ve ürünler **karşılaştırılabilir** miktardadır"],
             ["**Ters tepkime**", "K' = **1 / K**"],
             ["**Tepkime n ile çarpılırsa**", "K' = **K^n**"],
             ["**İki tepkime toplanırsa**", "K' = **K_1 · K_2**"],
         ],
         "oranlar": [0.30, 0.70]},
        {"tur": "formul",
         "baslik": "Tepkime bölümü (Q) ile denge sabitinin karşılaştırılması",
         "ifade": "Q, K ile **aynı biçimde** yazılır ama **denge dışındaki** derişimlerle hesaplanır.\n"
                  "**Q < K** → tepkime **ileri** yönde ilerler (ürün oluşur)\n"
                  "**Q = K** → sistem **dengededir**\n"
                  "**Q > K** → tepkime **geri** yönde ilerler (giren oluşur)",
         "terimler": [
             ("Q", "**Tepkime bölümü** — herhangi bir andaki oran"),
             ("Mantık", "Sistem her zaman **Q'yu K'ye eşitlemeye** çalışır"),
             ("Kullanımı", "Bir karışımın **dengede olup olmadığını** ve hangi yöne "
                           "gideceğini belirlemek için"),
         ],
         "not": "Q **küçükse** ürün yetersizdir, sistem ürün üretir; Q **büyükse** ürün "
                "fazladır, sistem geri döner. Bu tek cümle, yön belirleme sorularının "
                "tamamını çözer."},
        {"tur": "cozum",
         "baslik": "Denge Sabiti Hesabı",
         "soru": "**2 L**'lik kapalı bir kaba **4 mol H_2** ve **4 mol I_2** konuyor. "
                 "Denge kurulduğunda **6 mol HI** oluştuğu görülüyor. "
                 "**H_2 + I_2 ⇌ 2HI** tepkimesinin K_c değerini bulunuz.",
         "adimlar": [
             "**Başlangıç–değişim–denge** tablosu kurulur. Başlangıç: H_2 = 4, I_2 = 4, HI = 0.",
             "6 mol HI oluştuysa, katsayı oranından **3 mol H_2** ve **3 mol I_2** harcanmıştır.",
             "Dengede: H_2 = 4 − 3 = **1 mol**, I_2 = **1 mol**, HI = **6 mol**.",
             "Derişimlere çevir (V = 2 L): [H_2] = 0,5 ; [I_2] = 0,5 ; [HI] = 3.",
             "K_c = [HI]² / ([H_2]·[I_2]) = 3² / (0,5 · 0,5) = 9 / 0,25.",
         ],
         "sonuc": "**K_c = 36**. K büyük olduğu için denge **ürünler yönündedir**."},
        {"tur": "dikkat", "baslik": "Mol mü Derişim mi?", "govde":
            "Denge sabiti **derişimlerle** hesaplanır, mol sayılarıyla değil. Ancak "
            "tepkimede **giren ve ürün gaz mol sayıları eşitse** (Δn = 0) hacim "
            "sadeleşir ve mol sayılarıyla da doğru sonuç bulunur. Yukarıdaki örnekte "
            "Δn = 0 olduğu için 6²/(1·1) = 36 da aynı sonucu verir. Ama **Δn ≠ 0 ise "
            "hacme çevirmek zorunludur**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Le Chatelier İlkesi"},
        {"tur": "tanim", "kavram": "Le Chatelier ilkesi",
         "aciklama": "Dengedeki bir sisteme dışarıdan bir etki uygulandığında, sistem "
                     "**bu etkiyi azaltacak yönde** kayarak yeni bir denge kurar. "
                     "Kısacası: **sistem rahatsız edilmeye direnir**."},
        {"tur": "gorsel", "baslik": "Şema 3 — Etkenler ve denge kayması",
         "aciklama": "Her etkende sorulacak soru aynıdır: **sistem hangi yöne giderse "
                     "bu etkiyi azaltır?** Cevap, kaymanın yönünü verir.",
         "ciz": S.kartlar([
             ("Giren derişimi artarsa", "denge **ürünlere**\nkayar"),
             ("Ürün derişimi artarsa", "denge **girenlere**\nkayar"),
             ("Basınç artarsa (hacim ↓)", "**mol sayısı az** olan\ntarafa kayar"),
             ("Basınç azalırsa", "**mol sayısı çok** olan\ntarafa kayar"),
             ("Sıcaklık artarsa", "**endotermik** yöne\nkayar — K **değişir**"),
             ("Sıcaklık azalırsa", "**ekzotermik** yöne\nkayar — K **değişir**"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Etken", "Denge kayar mı?", "K değişir mi?"],
         "satirlar": [
             ["**Derişim değişimi**", "**Evet**", "**Hayır** — K sabittir"],
             ["**Basınç / hacim değişimi**", "**Evet** (gaz molleri farklıysa)", "**Hayır**"],
             ["**Sıcaklık değişimi**", "**Evet**", "**EVET** — K yalnızca sıcaklıkla değişir"],
             ["**Katalizör**", "**Hayır**", "**Hayır**"],
             ["**Soy gaz (sabit hacimde)**", "**Hayır**", "**Hayır**"],
             ["**Katı/saf sıvı miktarı**", "**Hayır**", "**Hayır**"],
         ],
         "oranlar": [0.32, 0.34, 0.34]},
        {"tur": "tuzak", "baslik": "Dengeyi Değiştirmeyen Dört Şey", "govde":
            "Sınavda en çok sorulan soru \"**hangisi dengeyi etkilemez**\"dir. "
            "Cevap dört tanedir: **katalizör**, **sabit hacimde eklenen soy gaz**, "
            "**katı ya da saf sıvı miktarını değiştirmek**, ve **gaz mol sayıları eşit "
            "olan bir tepkimede basınç değişimi**. Bunları ezberlemek, tek başına "
            "birkaç soru kazandırır."},
        {"tur": "dikkat", "baslik": "Soy Gaz Ne Zaman Etkiler?", "ogeler": [
            "**Sabit hacimde** soy gaz eklenirse: toplam basınç artar ama **kısmi "
            "basınçlar değişmez** → denge **kaymaz**.",
            "**Sabit basınçta** soy gaz eklenirse: sistemin hacmi **genişler**, kısmi "
            "basınçlar **düşer** → denge **mol sayısı çok olan tarafa** kayar.",
            "Bu ayrım, sorunun \"sabit hacim\" mi \"sabit basınç\" mı dediğine bakarak "
            "yapılır.",
        ]},
        {"tur": "cozum",
         "baslik": "Le Chatelier Uygulaması",
         "soru": "**N_2(g) + 3H_2(g) ⇌ 2NH_3(g)**    ΔH = **−92 kJ**\n"
                 "Bu dengede amonyak verimini artırmak için ne yapılmalıdır?",
         "adimlar": [
             "**Basınç artırılmalı.** Girenler 4 mol gaz, ürünler 2 mol gazdır; basınç "
             "artınca denge **mol sayısı az olan ürünlere** kayar.",
             "**Sıcaklık düşürülmeli.** Tepkime **ekzotermiktir** (ΔH < 0); sıcaklık "
             "düşünce denge **ekzotermik yöne**, yani ürünlere kayar.",
             "**N_2 ya da H_2 derişimi artırılmalı**; denge ürünlere kayar.",
             "**Oluşan NH_3 ortamdan uzaklaştırılmalı**; ürün azalınca denge yeniden "
             "ürün üretmeye yönelir.",
             "**Katalizör verim artırmaz** ama dengeye **daha çabuk** ulaşılmasını sağlar.",
         ],
         "sonuc": "Yüksek basınç, düşük sıcaklık ve ürünün uzaklaştırılması verimi "
                  "artırır. Gerçek üretimde (Haber yöntemi) düşük sıcaklık tepkimeyi "
                  "aşırı yavaşlattığı için **orta bir sıcaklık ve katalizör** birlikte "
                  "kullanılır."},
        {"tur": "taktik", "baslik": "Sıcaklık Sorularında Isıyı Denkleme Yaz", "govde":
            "Ekzotermik tepkimede ısıyı **ürün** gibi düşün: A + B ⇌ C + **ısı**. "
            "Sıcaklığı artırmak, \"ürün eklemek\" gibidir; denge **girenlere** kayar. "
            "Endotermikte ısı **giren** tarafındadır; sıcaklık artınca denge **ürünlere** "
            "kayar. Bu küçük numara, sıcaklık sorularının tamamını hatasız çözdürür."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Dengede **hızlar eşittir**, **derişimler sabittir ama eşit değildir**.",
            "Denge **kapalı sistemde** kurulur; tepkime **durmaz**.",
            "**Katı ve saf sıvılar denge bağıntısına yazılmaz.**",
            "**K yalnızca sıcaklıkla değişir.**",
            "**K büyükse denge ürünler**, küçükse **girenler** yönündedir.",
            "**Q < K** ise ileri, **Q > K** ise geri yönde ilerler.",
            "Ters tepkimede **K' = 1/K**; n ile çarpılırsa **K^n**.",
            "Basınç artınca denge **mol sayısı az olan tarafa** kayar.",
            "Sıcaklık artınca denge **endotermik yöne** kayar.",
            "**Katalizör, soy gaz (sabit hacim) ve katı miktarı dengeyi değiştirmez.**",
            "Isıyı denkleme yazmak, sıcaklık sorularını kolaylaştırır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde iki tür soru var: **yorum** ve **hesap**. Yorum sorularında "
            "her zaman \"sistem hangi yöne giderse bu etkiyi azaltır?\" diye sor. "
            "Hesap sorularında ise **başlangıç–değişim–denge** tablosunu kurmadan "
            "işleme başlama.",
        "satir_sayisi": 2,
        "sorular": [
            "Dinamik dengeyi tanımlayarak 'dinamik' sözcüğünün anlamını açıklayınız.",
            "Dengede tepkimenin durup durmadığını gerekçesiyle yazınız.",
            "Dengede eşit olan büyüklüğün ne olduğunu belirtiniz.",
            "'Dengede girenlerin ve ürünlerin derişimi eşittir' ifadesindeki hatayı düzeltiniz.",
            "Dengenin kurulabilmesi için sistemin hangi özelliği taşıması gerektiğini yazınız.",
            "Dengeye iki yönden de ulaşılabilmesinin anlamını açıklayınız.",
            "Dengeye gidiş grafiğinde ileri ve geri hızın nasıl değiştiğini yazınız.",
            "aA + bB ⇌ cC + dD tepkimesi için K_c bağıntısını yazınız.",
            "Katı ve saf sıvıların denge bağıntısına yazılmamasının nedenini açıklayınız.",
            "K_p ile K_c arasındaki bağıntıyı yazınız.",
            "Δn = 0 olduğunda K_p ile K_c arasındaki ilişkiyi yazınız.",
            "Denge sabitinin yalnızca hangi etkenle değiştiğini yazınız.",
            "K değeri çok büyük olan bir tepkime için ne söylenir?",
            "K değeri çok küçük olan bir tepkime için ne söylenir?",
            "Bir tepkime ters çevrilirse denge sabiti nasıl değişir?",
            "Bir tepkime 2 ile çarpılırsa denge sabiti nasıl değişir?",
            "İki tepkime toplanırsa denge sabitleri nasıl birleşir?",
            "Tepkime bölümü Q'yu tanımlayarak K'den farkını yazınız.",
            "Q < K ise tepkimenin hangi yönde ilerleyeceğini gerekçesiyle yazınız.",
            "Q > K ise tepkimenin hangi yönde ilerleyeceğini gerekçesiyle yazınız.",
            "2 L'lik kapta 4 mol H_2 ve 4 mol I_2'den 6 mol HI oluşuyorsa K_c'yi bulunuz.",
            "Aynı soruda dengedeki H_2 ve I_2 mol sayılarını yazınız.",
            "Bu tepkimede mol sayılarıyla da doğru sonuç bulunmasının nedenini açıklayınız.",
            "Δn ≠ 0 olan bir tepkimede neden derişime çevirmek zorunlu olduğunu açıklayınız.",
            "Le Chatelier ilkesini tek cümleyle yazınız.",
            "Girenlerden birinin derişimi artırılırsa denge hangi yöne kayar?",
            "Ürünlerden biri ortamdan uzaklaştırılırsa denge hangi yöne kayar?",
            "Basınç artırıldığında denge hangi yöne kayar? Nedenini yazınız.",
            "Gaz mol sayıları eşit olan bir tepkimede basınç değişiminin etkisini yazınız.",
            "Sıcaklık artırıldığında denge hangi yöne kayar?",
            "Ekzotermik bir tepkimede sıcaklık düşürülürse ne olur?",
            "Sıcaklık değişiminin denge sabiti üzerindeki etkisini yazınız.",
            "Derişim değişiminin denge sabiti üzerindeki etkisini yazınız.",
            "Katalizörün denge üzerindeki etkisini gerekçesiyle yazınız.",
            "Katalizörün dengeye ulaşma süresi üzerindeki etkisini yazınız.",
            "Sabit hacimde soy gaz eklenmesinin dengeye etkisini açıklayınız.",
            "Sabit basınçta soy gaz eklenmesinin dengeye etkisini açıklayınız.",
            "Dengeyi etkilemeyen dört durumu sıralayınız.",
            "Katı miktarının artırılmasının dengeye etkisini gerekçesiyle yazınız.",
            "N_2 + 3H_2 ⇌ 2NH_3 (ΔH = −92 kJ) dengesinde verimi artırmak için basınç nasıl ayarlanmalıdır?",
            "Aynı dengede sıcaklık nasıl ayarlanmalıdır? Nedenini yazınız.",
            "Aynı dengede katalizörün verime etkisi var mıdır?",
            "Haber yönteminde neden çok düşük sıcaklık kullanılmadığını açıklayınız.",
            "Ekzotermik tepkimede ısının denklemin hangi tarafına yazıldığını belirtiniz.",
            "Isıyı denkleme yazma yönteminin sıcaklık sorularını nasıl kolaylaştırdığını açıklayınız.",
            "Bir dengede ürün derişimi artırıldığında K değişir mi? Nedenini yazınız.",
            "Dengedeki bir sistemde hacim yarıya indirilirse ne olur?",
            "Denge grafiklerinde derişimlerin sabitlendiği anın ne anlama geldiğini yazınız.",
            "Radyoaktif işaretleme deneyinin dengedeki tepkime hakkında ne kanıtladığını açıklayınız.",
            "CaCO_3(k) ⇌ CaO(k) + CO_2(g) dengesinde K_c bağıntısını yazınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Tersinir bir tepkimede **ileri ve geri tepkime hızlarının eşit olduğu** durumdur. 'Dinamik', tepkimenin **durmadığını**, iki yönde de sürdüğünü anlatır.",
            "**Durmaz**. İleri ve geri tepkime sürer; hızları eşit olduğu için **net bir değişim gözlenmez**.",
            "**İleri ve geri tepkime hızları** eşittir.",
            "Dengede derişimler **sabittir ama eşit değildir**. Eşit olan şey **hızlardır**; derişimler K değerine göre farklı olabilir.",
            "**Kapalı sistem** olmalıdır. Madde alışverişi olursa (ürün uçup giderse) denge kurulamaz.",
            "Denge noktası, **başlangıçta girenlerden mi ürünlerden mi başlandığına bağlı değildir**. Aynı sıcaklıkta aynı K değerine ulaşılır.",
            "**İleri hız azalır** (girenler tükeniyor), **geri hız artar** (ürünler birikiyor). İkisi eşitlendiğinde denge kurulur.",
            "**K_c = ([C]^c · [D]^d) / ([A]^a · [B]^b)**.",
            "Katı ve saf sıvıların **derişimi sabittir**; miktarları değişse de birim hacimdeki tanecik sayısı değişmez. Bu yüzden K'yi etkilemezler.",
            "**K_p = K_c · (R·T)^(Δn)**; burada Δn, gaz ürün molü − gaz giren molüdür.",
            "**K_p = K_c** olur; çünkü (R·T)^0 = 1'dir.",
            "Yalnızca **sıcaklıkla** değişir. Derişim, basınç, hacim ve katalizör K'yi değiştirmez.",
            "Denge **ürünler yönündedir**; tepkime büyük ölçüde **tamamlanmıştır**, ürün derişimi girenlerden çok fazladır.",
            "Denge **girenler yönündedir**; tepkime **çok az ilerlemiştir**, ortamda ağırlıklı olarak girenler bulunur.",
            "**K' = 1 / K** olur.",
            "**K' = K²** olur.",
            "Denge sabitleri **çarpılır**: K' = K_1 · K_2.",
            "Q, K ile **aynı biçimde** yazılır ama **herhangi bir andaki** derişimlerle hesaplanır. K yalnızca **denge anındaki** değerdir.",
            "**İleri yönde** ilerler. Ürün derişimi yetersizdir; sistem Q'yu K'ye eşitlemek için **ürün üretir**.",
            "**Geri yönde** ilerler. Ürün fazladır; sistem Q'yu düşürmek için **girenlere döner**.",
            "Harcanan: 3 mol H_2, 3 mol I_2. Dengede [H_2] = [I_2] = 0,5; [HI] = 3. K_c = 9 / 0,25 = **36**.",
            "**H_2 = 1 mol**, **I_2 = 1 mol**.",
            "Tepkimede **giren ve ürün gaz mol sayıları eşittir** (2 = 2). Bu yüzden hacim payda ve payda sadeleşir; mol sayılarıyla da aynı sonuç bulunur.",
            "Δn ≠ 0 olduğunda hacim **sadeleşmez**; K değeri hacme bağlı hâle gelir. Bu yüzden mol sayıları mutlaka **derişime** çevrilmelidir.",
            "Dengedeki bir sisteme dış etki uygulandığında sistem, **bu etkiyi azaltacak yönde** kayarak yeni bir denge kurar.",
            "Denge **ürünler yönüne** kayar; sistem eklenen giren maddeyi tüketerek etkiyi azaltmaya çalışır.",
            "Denge **ürünler yönüne** kayar; eksilen ürünü yerine koymak için ileri tepkime hızlanır.",
            "**Mol sayısı az olan tarafa** kayar. Sistem, toplam gaz mol sayısını azaltarak basıncı düşürmeye çalışır.",
            "**Etkisi yoktur**. Hangi yöne kaysa toplam mol sayısı değişmeyeceği için basınç değişimi dengeyi kaydırmaz.",
            "**Endotermik yöne** kayar. Sistem, ısıyı soğurarak sıcaklık artışını azaltmaya çalışır.",
            "Denge **ekzotermik yöne (ürünlere)** kayar; sistem ısı üreterek sıcaklık düşüşünü telafi etmeye çalışır.",
            "**K değişir**. Sıcaklık, denge sabitini değiştiren **tek etkendir**.",
            "**K değişmez**. Derişim değişince denge kayar ama yeni dengede oran yine aynı K değerini verir.",
            "**Etkisi yoktur**. Katalizör ileri ve geri tepkimeyi **aynı oranda** hızlandırır; denge noktası ve K değişmez.",
            "Dengeye **daha kısa sürede** ulaşılmasını sağlar. Denge noktasını değiştirmez, yalnızca oraya varış süresini kısaltır.",
            "**Denge kaymaz**. Toplam basınç artar ama tepkimeye giren gazların **kısmi basınçları değişmez**.",
            "**Denge, mol sayısı çok olan tarafa kayar**. Sabit basınçta soy gaz eklemek hacmi genişletir; diğer gazların kısmi basınçları düşer.",
            "**Katalizör**, **sabit hacimde soy gaz**, **katı ya da saf sıvı miktarı**, ve **gaz mol sayıları eşitse basınç değişimi**.",
            "**Etkisi yoktur**. Katının derişimi sabittir; miktarını artırmak birim hacimdeki tanecik sayısını değiştirmez.",
            "**Artırılmalıdır**. Girenler 4 mol gaz, ürünler 2 mol gazdır; basınç artınca denge **mol sayısı az olan ürünlere** kayar.",
            "**Düşürülmelidir**. Tepkime ekzotermiktir; sıcaklık düşünce denge **ekzotermik yöne**, yani amonyağa doğru kayar.",
            "**Yoktur**. Katalizör verimi değil, yalnızca dengeye ulaşma **hızını** artırır.",
            "Düşük sıcaklık dengeyi ürünler yönüne kaydırır ama **tepkime hızını çok düşürür**. Verim yüksek olsa da ürün elde etme süresi çok uzar. Bu yüzden orta sıcaklık ve **katalizör** birlikte kullanılır.",
            "**Ürünler tarafına** yazılır: A + B ⇌ C + **ısı**.",
            "Isı denkleme yazılınca sıcaklık değişimi, **madde eklemek ya da çıkarmak** gibi düşünülebilir. Sıcaklık artışı 'ısı eklemek' demektir; denge ısıyı tüketen yöne kayar.",
            "**Değişmez**. Denge kayar ve yeni derişimler oluşur, ama bu yeni derişimlerin oranı **yine aynı K değerini** verir. K yalnızca sıcaklıkla değişir.",
            "Hacim yarıya inince **basınç iki katına** çıkar. Denge, **gaz mol sayısı az olan tarafa** kayar. Mol sayıları eşitse hiçbir şey değişmez.",
            "İleri ve geri tepkime **hızlarının eşitlendiğini**, yani **dengenin kurulduğunu** gösterir.",
            "Dengedeki bir sistemde işaretli atomların zamanla **ürünlere geçtiği** görülür. Bu, dengede tepkimenin **durmadığını**, iki yönde de sürdüğünü kanıtlar.",
            "**K_c = [CO_2]**. CaCO_3 ve CaO **katı** oldukları için bağıntıya yazılmaz.",
        ],
    },
}
