"""AYT Kimya — Kimyasal Tepkimelerde Enerji (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: TEPKİMELERDE ENERJİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Kimyasal Tepkimelerde Enerji",
    "alt_baslik": "Ham bilgi notu — entalpi, tepkime ısıları, Hess yasası ve bağ "
                  "enerjileri; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Kimyasal Tepkimelerde Enerji",
        "kazanimlar": "11.4.1.1 — Sistem, ortam ve entalpi kavramlarını açıklar. "
                      "11.4.1.2 — Ekzotermik ve endotermik tepkimeleri enerji "
                      "diyagramıyla yorumlar. "
                      "11.4.2.1 — Hess yasasını kullanarak tepkime entalpisini hesaplar. "
                      "11.4.2.2 — Bağ enerjilerinden tepkime ısısını hesaplar.",
        "kapsam": "Sistem–ortam, iç enerji, entalpi, ekzotermik–endotermik tepkimeler, "
                  "enerji diyagramları, oluşum entalpisi, yanma entalpisi, nötrleşme "
                  "entalpisi, Hess yasası, bağ enerjileri, 50 analiz sorusu",
        "nasil": "Bu konuda tek bir işaret kuralı bütün soruları çözer: **ekzotermikte "
                 "ΔH negatif, endotermikte pozitiftir**. Hess ve bağ enerjisi "
                 "hesaplarında işareti yazmadan sayıya geçme.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **Hess yasasıyla ΔH "
                    "bulma**, **bağ enerjisi hesabı** ya da **enerji diyagramı yorumu** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Kavramlar"},
        {"tur": "tablo",
         "basliklar": ["Kavram", "Tanımı"],
         "satirlar": [
             ["**Sistem**", "İncelenen madde ya da tepkimenin kendisi"],
             ["**Ortam (çevre)**", "Sistemin dışında kalan, sistemle enerji alışverişi yapabilen her şey"],
             ["**İç enerji (E)**", "Sistemdeki taneciklerin toplam kinetik ve potansiyel enerjisi"],
             ["**Entalpi (H)**", "Sabit basınçta sistemin **ısı içeriği**. Mutlak değeri "
              "ölçülemez; yalnızca **değişimi (ΔH)** ölçülür"],
             ["**ΔH**", "**H_(ürünler) − H_(girenler)**"],
         ],
         "oranlar": [0.24, 0.76]},
        {"tur": "gorsel", "baslik": "Şema 1 — Ekzotermik ve endotermik tepkime",
         "aciklama": "Diyagramı okumanın tek kuralı: **ürünler girenlerden aşağıdaysa "
                     "ekzotermik, yukarıdaysa endotermiktir**. Aradaki tepe noktası "
                     "**aktifleşme enerjisidir** ve tepkimenin hızıyla ilgilidir, "
                     "entalpiyle değil.",
         "ciz": S.grafik_seti([
             ("Ekzotermik (ΔH < 0)", "Tepkime ilerleyişi", "Enerji",
              [("", [(0.04, 0.42), (0.22, 0.44), (0.40, 0.88), (0.58, 0.44),
                     (0.94, 0.16)], S.TEHLIKE)],
              [(0.02, 0.62, "**ısı açığa çıkar**\nortam ısınır")]),
             ("Endotermik (ΔH > 0)", "Tepkime ilerleyişi", "Enerji",
              [("", [(0.04, 0.14), (0.22, 0.16), (0.40, 0.88), (0.58, 0.52),
                     (0.94, 0.52)], S.BILGI)],
              [(0.02, 0.30, "**ısı soğurulur**\nortam soğur")]),
         ], ortak_not="Tepe noktası aktifleşme enerjisidir; ΔH ise girenler ile ürünlerin farkıdır.")},
        {"tur": "tablo",
         "basliklar": ["Özellik", "Ekzotermik", "Endotermik"],
         "satirlar": [
             ["**ΔH işareti**", "**Negatif (−)**", "**Pozitif (+)**"],
             ["**Isı**", "Açığa çıkar; **ürünler tarafında** yazılır", "Soğurulur; **girenler tarafında** yazılır"],
             ["**Ortam sıcaklığı**", "**Yükselir**", "**Düşer**"],
             ["**Enerji karşılaştırması**", "H_(ürünler) **<** H_(girenler)", "H_(ürünler) **>** H_(girenler)"],
             ["**Örnekler**", "Yanma, nötrleşme, patlama, solunum, paslanma",
              "Fotosentez, buz erimesi, suyun buharlaşması, NH_4NO_3 çözünmesi"],
         ],
         "oranlar": [0.22, 0.39, 0.39]},
        {"tur": "tuzak", "baslik": "Aktifleşme Enerjisi ile ΔH Karıştırılır", "govde":
            "**Aktifleşme enerjisi (E_a)**, tepkimenin başlaması için gereken en az "
            "enerjidir ve **tepkime hızını** belirler. **ΔH** ise girenlerle ürünler "
            "arasındaki **enerji farkıdır** ve hızla ilgisi yoktur. Bir tepkimenin "
            "aktifleşme enerjisi büyük olsa da ekzotermik olabilir; **odunun yanması** "
            "buna örnektir: kibrit gerekir ama sonra bol ısı açığa çıkar."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Entalpi Çeşitleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Hess yasasının mantığı: iki yol, tek sonuç",
         "aciklama": "Karbondan karbondioksite **iki farklı yoldan** gidilebilir: "
                     "doğrudan ya da önce karbonmonoksit üzerinden. Entalpi bir **hâl "
                     "fonksiyonu** olduğu için iki yolun **toplam ΔH değeri aynıdır**. "
                     "Hess yasası tam olarak bunu söyler.",
         "ciz": S.grafik_seti([
             ("Doğrudan yol", "Tepkime yolu", "Entalpi",
              [("", [(0.06, 0.86), (0.94, 0.14)], S.MARKA)],
              [(0.04, 0.42, "C → CO_2\n**−394 kJ**")]),
             ("İki basamaklı yol", "Tepkime yolu", "Entalpi",
              [("", [(0.06, 0.86), (0.48, 0.66)], S.BILGI),
               ("", [(0.48, 0.66), (0.94, 0.14)], S.BASARI)],
              [(0.04, 0.24, "−111 kJ, sonra −283 kJ\n**toplam −394 kJ**")]),
         ], ortak_not="Başlangıç ve bitiş aynıysa, izlenen yol ne olursa olsun ΔH değişmez.")},
        {"tur": "tablo",
         "basliklar": ["Entalpi türü", "Tanımı", "İşareti"],
         "satirlar": [
             ["**Standart oluşum entalpisi (ΔH_f)**",
              "**1 mol** bileşiğin, **elementlerinden** standart koşullarda oluşması "
              "sırasındaki entalpi değişimi",
              "Genellikle **negatif**"],
             ["**Yanma entalpisi (ΔH_y)**",
              "**1 mol** maddenin oksijenle **tam yanması** sırasındaki entalpi değişimi",
              "**Daima negatif**"],
             ["**Nötrleşme entalpisi**",
              "Kuvvetli asit ile kuvvetli bazın **1 mol su** oluşturacak biçimde "
              "tepkimesi (≈ **−57,3 kJ**)",
              "**Daima negatif**"],
             ["**Çözünme entalpisi**",
              "**1 mol** maddenin çözünmesindeki entalpi değişimi",
              "**Pozitif ya da negatif**"],
             ["**Hâl değişim entalpisi**",
              "Erime, buharlaşma, süblimleşme entalpileri",
              "Erime ve buharlaşma **pozitif**"],
         ],
         "oranlar": [0.26, 0.50, 0.24]},
        {"tur": "dikkat", "baslik": "Elementlerin Oluşum Entalpisi Sıfırdır", "govde":
            "Standart koşullarda **en kararlı hâlindeki elementlerin oluşum entalpisi "
            "sıfır kabul edilir**: O_2(g), N_2(g), C(katı, grafit), Br_2(sıvı), "
            "Hg(sıvı). Ancak **O_3 (ozon)** ya da **C (elmas)** en kararlı hâl olmadığı "
            "için oluşum entalpileri **sıfır değildir**. Hesaplarda bu ayrım doğrudan "
            "sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Hess Yasası"},
        {"tur": "tanim", "kavram": "Hess yasası",
         "aciklama": "Bir tepkimenin entalpi değişimi, tepkimenin **hangi basamaklardan "
                     "geçtiğine bağlı değildir**; yalnızca **başlangıç ve bitiş "
                     "durumlarına** bağlıdır. Entalpi bir **hâl fonksiyonudur**."},
        {"tur": "gorsel", "baslik": "Şema 3 — Hess yasasını uygulama kuralları",
         "aciklama": "Verilen tepkimeleri, istenen tepkimeyi **elde edecek biçimde** "
                     "düzenlersin. Her düzenleme, ΔH'ye de **aynı işlemi** uygular.",
         "ciz": S.kartlar([
             ("Tepkime ters çevrilirse", "**ΔH işaret değiştirir**\n(+) → (−)"),
             ("Bir sayıyla çarpılırsa", "**ΔH aynı sayıyla çarpılır**"),
             ("Tepkimeler toplanırsa", "**ΔH değerleri toplanır**"),
             ("Aynı madde iki tarafta", "**sadeleştirilir**"),
             ("Hedef", "verilenleri istenen\ntepkimeye **çevir**"),
             ("Kontrol", "girenler ve ürünler\n**tam olarak** uyuşmalı"),
         ], sutun=3)},
        {"tur": "cozum",
         "baslik": "Hess Yasası Uygulaması",
         "soru": "Aşağıdaki verilerden **C(k) + 1/2 O_2(g) → CO(g)** tepkimesinin "
                 "ΔH değerini bulunuz.\n"
                 "**(1)** C(k) + O_2(g) → CO_2(g)    ΔH_1 = **−394 kJ**\n"
                 "**(2)** CO(g) + 1/2 O_2(g) → CO_2(g)    ΔH_2 = **−283 kJ**",
         "adimlar": [
             "İstenen tepkimede **CO ürün** tarafında; (2) numaralı tepkimede ise "
             "**giren** tarafında. Bu yüzden (2) **ters çevrilir**.",
             "Ters çevrilen (2): CO_2(g) → CO(g) + 1/2 O_2(g)    ΔH = **+283 kJ**.",
             "(1) aynen alınır: C(k) + O_2(g) → CO_2(g)    ΔH = −394 kJ.",
             "İkisi toplanır; **CO_2 sadeleşir**: C(k) + 1/2 O_2(g) → CO(g).",
             "ΔH = (−394) + (+283) = **−111 kJ**.",
         ],
         "sonuc": "Tepkimenin entalpi değişimi **−111 kJ**'dür; tepkime ekzotermiktir."},
        {"tur": "formul",
         "baslik": "Oluşum entalpilerinden tepkime ısısı",
         "ifade": "ΔH_(tepkime)  =  Σ ΔH_f(**ürünler**)  −  Σ ΔH_f(**girenler**)",
         "terimler": [
             ("Σ", "Toplam; her maddenin oluşum entalpisi **katsayısıyla çarpılır**"),
             ("Elementler", "En kararlı hâldeki elementler için ΔH_f = **0**"),
             ("Sıralama", "**Önce ürünler, sonra girenler** — ters yazmak işareti bozar"),
         ],
         "not": "Bu bağıntı, Hess yasasının **kısayoludur**. Tablodan oluşum entalpileri "
                "verildiğinde tepkimeleri tek tek düzenlemek yerine doğrudan bu formül "
                "kullanılır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Bağ Enerjileri"},
        {"tur": "tanim", "kavram": "Bağ enerjisi",
         "aciklama": "Gaz hâlindeki **1 mol bağı koparmak** için gereken enerjidir. "
                     "**Bağ kırmak endotermiktir (enerji gerekir)**, **bağ oluşturmak "
                     "ekzotermiktir (enerji açığa çıkar)**."},
        {"tur": "formul",
         "baslik": "Bağ enerjilerinden tepkime ısısı",
         "ifade": "ΔH  =  Σ (**kırılan** bağ enerjileri)  −  Σ (**oluşan** bağ enerjileri)",
         "terimler": [
             ("Kırılan bağlar", "**Girenlerdeki** bağlar — enerji **harcanır**"),
             ("Oluşan bağlar", "**Ürünlerdeki** bağlar — enerji **açığa çıkar**"),
             ("Sonuç negatifse", "Oluşan bağlar daha güçlü → **ekzotermik**"),
             ("Sonuç pozitifse", "Kırılan bağlar daha güçlü → **endotermik**"),
         ],
         "not": "Bu formülün sırası, oluşum entalpisi formülünün **tam tersidir**: "
                "burada **girenler önce** yazılır. Sırayı karıştırmak işaret hatasına "
                "yol açar; en sık yapılan hata budur."},
        {"tur": "tuzak", "baslik": "İki Formülün Sırası Terstir", "govde":
            "**Oluşum entalpisiyle**: ΔH = ürünler − girenler. "
            "**Bağ enerjisiyle**: ΔH = girenler (kırılan) − ürünler (oluşan). "
            "Bu iki sıra birbirinin tersidir ve sınavda tam olarak bu karışıklık "
            "sınanır. Formülü ezberlemek yerine mantığı tut: **bağ kırmak enerji "
            "ister (+), bağ oluşturmak enerji verir (−)**."},
        {"tur": "cozum",
         "baslik": "Bağ Enerjisi Hesabı",
         "soru": "**H_2(g) + Cl_2(g) → 2HCl(g)** tepkimesinin ΔH değerini hesaplayınız. "
                 "(H−H: 436 kJ/mol, Cl−Cl: 243 kJ/mol, H−Cl: 431 kJ/mol)",
         "adimlar": [
             "**Kırılan bağlar**: 1 mol H−H ve 1 mol Cl−Cl → 436 + 243 = **679 kJ**.",
             "**Oluşan bağlar**: 2 mol H−Cl → 2 × 431 = **862 kJ**.",
             "ΔH = kırılan − oluşan = 679 − 862.",
             "ΔH = **−183 kJ**.",
         ],
         "sonuc": "ΔH negatif olduğu için tepkime **ekzotermiktir**; oluşan bağlar "
                  "kırılanlardan daha güçlüdür."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Bağ enerjisi büyükse bağ güçlüdür** ve molekül kararlıdır. Üçlü bağ > "
            "çift bağ > tekli bağ.",
            "Bağ enerjisi arttıkça **bağ uzunluğu azalır**; güçlü bağ kısa bağdır.",
            "Bağ enerjisi hesabı yalnızca **gaz hâlindeki** maddeler için doğru sonuç "
            "verir; sıvı ve katılarda tanecikler arası kuvvetler de işin içine girer.",
            "**N_2'nin üçlü bağı çok güçlüdür (946 kJ/mol)**; azotun tepkimeye girmekte "
            "isteksiz olmasının nedeni budur.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Ekzotermik: ΔH negatif**, ısı ürünlerde, ortam **ısınır**.",
            "**Endotermik: ΔH pozitif**, ısı girenlerde, ortam **soğur**.",
            "**Aktifleşme enerjisi hızı**, **ΔH enerji farkını** belirler.",
            "En kararlı hâldeki **elementlerin oluşum entalpisi sıfırdır** (O_3 ve elmas hariç).",
            "**Yanma ve nötrleşme entalpisi daima negatiftir.**",
            "**Hess**: tepkime ters çevrilirse **işaret değişir**, çarpılırsa **ΔH de çarpılır**.",
            "Oluşum entalpisiyle: **ürünler − girenler**.",
            "Bağ enerjisiyle: **kırılan − oluşan** — sıra terstir.",
            "**Bağ kırmak endotermik**, **bağ oluşturmak ekzotermiktir**.",
            "**Güçlü bağ kısa bağdır**; bağ enerjisi büyükse molekül kararlıdır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde işaret hataları en çok puan kaybettiren şeydir. Her hesapta "
            "sonucu yazmadan önce kendine sor: **ısı açığa mı çıktı, soğuruldu mu?** "
            "Açığa çıktıysa sonuç negatif olmak zorundadır; sayı pozitif çıktıysa bir "
            "yerde sıra ters yazılmıştır.",
        "satir_sayisi": 2,
        "sorular": [
            "Sistem ve ortam kavramlarını bir örnekle açıklayınız.",
            "İç enerji ve entalpi kavramlarını ayırt ediniz.",
            "Entalpinin mutlak değerinin ölçülememesinin nedenini açıklayınız.",
            "ΔH'nin tanımını formülle yazınız.",
            "Ekzotermik tepkimede ΔH'nin işaretini gerekçesiyle yazınız.",
            "Endotermik tepkimede ortam sıcaklığının nasıl değiştiğini açıklayınız.",
            "Ekzotermik bir tepkimede ısının denklemin hangi tarafına yazıldığını belirtiniz.",
            "Ekzotermik ve endotermik tepkimeye üçer örnek veriniz.",
            "Enerji diyagramında ekzotermik tepkimenin nasıl anlaşıldığını yazınız.",
            "Aktifleşme enerjisini tanımlayarak neyi belirlediğini yazınız.",
            "Aktifleşme enerjisi ile ΔH arasındaki farkı açıklayınız.",
            "Aktifleşme enerjisi büyük olan bir tepkime ekzotermik olabilir mi? Örnekle açıklayınız.",
            "Standart oluşum entalpisini tanımlayınız.",
            "Yanma entalpisinin işaretini gerekçesiyle yazınız.",
            "Nötrleşme entalpisinin yaklaşık değerini ve işaretini yazınız.",
            "Kuvvetli asit-kuvvetli baz nötrleşmelerinde entalpinin hep aynı çıkmasının nedenini açıklayınız.",
            "En kararlı hâldeki elementlerin oluşum entalpisi kaçtır?",
            "O_2 ve O_3'ün oluşum entalpilerini karşılaştırınız.",
            "Grafit ve elmasın oluşum entalpilerini karşılaştırınız.",
            "Hess yasasını tanımlayınız.",
            "Entalpinin hâl fonksiyonu olmasının anlamını açıklayınız.",
            "Hess yasasında tepkime ters çevrilirse ΔH'ye ne olur?",
            "Hess yasasında tepkime 3 ile çarpılırsa ΔH'ye ne olur?",
            "C(k) + O_2 → CO_2 (ΔH = −394) ve CO + 1/2 O_2 → CO_2 (ΔH = −283) verilerinden C + 1/2 O_2 → CO tepkimesinin ΔH'sini bulunuz.",
            "Aynı hesapta hangi tepkimenin ters çevrildiğini ve nedenini yazınız.",
            "Oluşum entalpilerinden tepkime ısısı formülünü yazınız.",
            "Bu formülde katsayıların rolünü açıklayınız.",
            "Bağ enerjisini tanımlayarak hangi hâl için geçerli olduğunu belirtiniz.",
            "Bağ kırmanın endotermik olmasının nedenini açıklayınız.",
            "Bağ oluşturmanın ekzotermik olmasının nedenini açıklayınız.",
            "Bağ enerjilerinden tepkime ısısı formülünü yazınız.",
            "Bu formülün oluşum entalpisi formülünden farkını açıklayınız.",
            "H_2 + Cl_2 → 2HCl tepkimesinin ΔH'sini verilen bağ enerjileriyle hesaplayınız (H−H: 436, Cl−Cl: 243, H−Cl: 431).",
            "Bu tepkimenin ekzotermik mi endotermik mi olduğunu gerekçesiyle yazınız.",
            "Hesap sonucu negatif çıkarsa bağların gücü hakkında ne söylenir?",
            "Bağ enerjisi ile bağ uzunluğu arasındaki ilişkiyi yazınız.",
            "Tekli, çift ve üçlü bağı bağ enerjisi bakımından sıralayınız.",
            "Azot molekülünün tepkimeye girmekte isteksiz olmasının nedenini açıklayınız.",
            "Bağ enerjisi hesabının yalnızca gaz hâli için doğru olmasının nedenini açıklayınız.",
            "Buzun erimesinin endotermik olmasının nedenini açıklayınız.",
            "Suyun buharlaşmasının ΔH işaretini yazınız.",
            "Solunum tepkimesinin ΔH işaretini gerekçesiyle yazınız.",
            "Fotosentezin ΔH işaretini gerekçesiyle yazınız.",
            "NH_4NO_3'ün suda çözünürken kabın soğumasını açıklayınız.",
            "Bir soğutucu buz torbasının çalışma ilkesini entalpiyle açıklayınız.",
            "Yakıtların enerji değerinin yanma entalpisiyle ilişkisini açıklayınız.",
            "Aynı kütlede metan ve hidrojenden hangisinin daha çok enerji verdiğini nasıl belirlersiniz?",
            "Bir tepkimenin ΔH değeri sıcaklıkla değişir mi? Kısaca açıklayınız.",
            "Ekzotermik bir tepkimede ürünlerin entalpisi girenlerden büyük olabilir mi? Nedenini yazınız.",
            "Enerji diyagramı verilen bir soruda ΔH ve E_a'yı nasıl okuyacağınızı adım adım yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Sistem** incelenen kısımdır (deney tüpündeki tepkime). **Ortam** sistemin dışıdır (tüp, hava, laboratuvar). İkisi arasında enerji alışverişi olur.",
            "**İç enerji** taneciklerin toplam kinetik ve potansiyel enerjisidir. **Entalpi**, sabit basınçta sistemin **ısı içeriğidir**; iç enerji ile basınç-hacim işinin toplamıdır.",
            "Bir sistemdeki bütün enerji biçimlerini tek tek ölçmek mümkün değildir. Ancak bir değişim sırasında **alınan ya da verilen ısı** ölçülebildiği için yalnızca **ΔH** bulunur.",
            "**ΔH = H_(ürünler) − H_(girenler)**.",
            "**Negatiftir**. Ürünlerin entalpisi girenlerden küçüktür; aradaki fark **ısı olarak dışarı verilir**.",
            "Ortam **soğur**. Tepkime ısıyı ortamdan aldığı için ortamın sıcaklığı düşer.",
            "**Ürünler tarafına** yazılır; çünkü ısı tepkimenin bir **ürünüdür**, açığa çıkmıştır.",
            "**Ekzotermik**: yanma, nötrleşme, solunum (ayrıca patlama, paslanma). **Endotermik**: fotosentez, buz erimesi, suyun buharlaşması (ayrıca NH_4NO_3 çözünmesi).",
            "**Ürünler girenlerden aşağıdaysa** ekzotermiktir; enerji ekseninde ürünlerin düzeyi daha düşüktür.",
            "Tepkimenin **başlaması için gereken en az enerjidir**. **Tepkime hızını** belirler; büyükse tepkime yavaştır.",
            "**E_a** tepe noktasının yüksekliğidir, **hızla** ilgilidir. **ΔH** girenlerle ürünler arasındaki farktır, **enerji dengesiyle** ilgilidir. Biri diğerini belirlemez.",
            "**Olabilir**. Odunun yanması buna örnektir: başlaması için kibrit (yüksek E_a) gerekir ama başladıktan sonra **bol ısı açığa çıkar** (ΔH negatif).",
            "**1 mol** bileşiğin, **en kararlı hâldeki elementlerinden** standart koşullarda (25 °C, 1 atm) oluşması sırasındaki entalpi değişimidir.",
            "**Daima negatiftir**. Yanma tepkimeleri her zaman **ısı açığa çıkarır**.",
            "Yaklaşık **−57,3 kJ/mol**'dür ve **negatiftir**; nötrleşme ekzotermik bir olaydır.",
            "Kuvvetli asit ve baz suda **tamamen iyonlaşır**. Gerçekleşen tepkime her durumda aynıdır: **H^+ + OH^- → H_2O**. Bu yüzden entalpi de aynı çıkar.",
            "**Sıfırdır**. Örneğin O_2(g), N_2(g), C(grafit), Br_2(sıvı) ve Hg(sıvı) için ΔH_f = 0'dır.",
            "**O_2 en kararlı hâldir**, ΔH_f = 0. **O_3 (ozon)** en kararlı hâl olmadığı için ΔH_f **sıfırdan farklıdır** (pozitiftir).",
            "**Grafit** karbonun en kararlı hâlidir, ΔH_f = 0. **Elmas** için ΔH_f **sıfırdan farklıdır**.",
            "Bir tepkimenin entalpi değişimi, izlenen **basamaklara bağlı değildir**; yalnızca **başlangıç ve bitiş** durumlarına bağlıdır.",
            "Değeri yalnızca sistemin **o anki durumuna** bağlıdır, oraya nasıl gelindiğine değil. Bu yüzden farklı yollardan aynı sonuca ulaşılır.",
            "**İşaret değiştirir**: ΔH pozitifse negatif, negatifse pozitif olur.",
            "**ΔH de 3 ile çarpılır**. Entalpi madde miktarına bağlı (kapsamlı) bir özelliktir.",
            "İkinci tepkime ters çevrilir (ΔH = +283) ve birinciyle toplanır: ΔH = −394 + 283 = **−111 kJ**.",
            "**İkinci tepkime** ters çevrildi. Çünkü istenen tepkimede **CO ürün** tarafındayken, verilen tepkimede **giren** tarafındaydı.",
            "**ΔH = Σ ΔH_f(ürünler) − Σ ΔH_f(girenler)**.",
            "Her maddenin oluşum entalpisi, denklemdeki **katsayısıyla çarpılır**. Katsayı, o maddeden kaç mol bulunduğunu gösterir.",
            "Gaz hâlindeki **1 mol bağı koparmak** için gereken enerjidir. Yalnızca **gaz hâli** için tanımlıdır.",
            "Bağ, atomları bir arada tutan **çekim kuvvetidir**. Bu çekimi yenmek için **dışarıdan enerji verilmesi** gerekir; bu yüzden endotermiktir.",
            "Atomlar birbirine yaklaşıp bağ kurduğunda sistem **daha kararlı ve düşük enerjili** hâle geçer. Aradaki fark **ısı olarak açığa çıkar**.",
            "**ΔH = Σ (kırılan bağ enerjileri) − Σ (oluşan bağ enerjileri)**.",
            "Oluşum entalpisi formülünde **ürünler önce** yazılır; bağ enerjisi formülünde **girenler (kırılan) önce** yazılır. Sıra **terstir**.",
            "Kırılan: 436 + 243 = 679. Oluşan: 2 × 431 = 862. ΔH = 679 − 862 = **−183 kJ**.",
            "**Ekzotermiktir**; ΔH negatiftir. Oluşan bağlar kırılan bağlardan daha çok enerji açığa çıkarmıştır.",
            "**Oluşan bağlar kırılanlardan daha güçlüdür**. Bağ oluşumunda açığa çıkan enerji, kırmak için harcanandan fazladır.",
            "**Ters orantılıdır**. Bağ enerjisi arttıkça bağ **kısalır**; güçlü bağ kısa bağdır.",
            "**Üçlü bağ > çift bağ > tekli bağ**. Bağ sayısı arttıkça çekim güçlenir.",
            "N_2'deki **üçlü bağın enerjisi çok yüksektir (946 kJ/mol)**. Bu bağı kırmak için gereken enerji büyük olduğundan azot tepkimelere zor girer.",
            "Sıvı ve katılarda **tanecikler arası çekim kuvvetleri** de vardır ve bunların enerjisi hesaba katılmaz. Bu yüzden yalnızca gazlarda doğru sonuç verir.",
            "Buzdaki **hidrojen bağlarını kırmak** için enerji gerekir. Bu enerji ortamdan alındığı için olay **endotermiktir**.",
            "**Pozitiftir (+)**. Sıvıdan gaza geçmek için moleküller arası çekimin yenilmesi gerekir; enerji **soğurulur**.",
            "**Negatiftir**. Solunumda besindeki kimyasal enerji açığa çıkar ve ATP ile ısıya dönüşür; ekzotermik bir tepkimedir.",
            "**Pozitiftir**. Fotosentez, **güneş enerjisini soğurarak** besin üretir; enerji dışarıdan alınır.",
            "NH_4NO_3'ün çözünmesi **endotermiktir**. Çözünme için gereken enerji **çevreden (kaptan ve sudan)** alındığı için kabın sıcaklığı düşer.",
            "İçinde **endotermik olarak çözünen bir tuz** (genellikle NH_4NO_3) ile su ayrı bölmelerde bulunur. Torba sıkılınca ikisi karışır, çözünme ortamdan **ısı çeker** ve torba soğur.",
            "Bir yakıtın enerji değeri, **yanma entalpisinin büyüklüğüyle** ölçülür. Yanma entalpisi (mutlak değerce) büyük olan yakıt, birim başına daha çok enerji verir.",
            "İkisinin de **birim kütle başına yanma entalpisi** hesaplanır (kJ/g). Mol başına değil kütle başına karşılaştırma yapılmalıdır; hidrojen bu ölçüde çok daha yüksektir.",
            "**Az da olsa değişir**; çünkü girenlerin ve ürünlerin ısı sığaları farklıdır. AYT düzeyinde genellikle **sabit kabul edilir**.",
            "**Olamaz**. Ekzotermik tanımı gereği ürünlerin entalpisi girenlerden **küçüktür**; aksi hâlde ΔH pozitif olur ve tepkime endotermik olurdu.",
            "**1)** Girenlerin ve ürünlerin enerji düzeylerini işaretle. **2)** ΔH = ürünler − girenler farkını al; işaretine bak. **3)** E_a, girenlerden **tepe noktasına** olan yükseklik farkıdır. **4)** Ürünler aşağıdaysa ekzotermik, yukarıdaysa endotermik.",
        ],
    },
}
