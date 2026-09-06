"""TYT Kimya — Kimyasal Türler Arası Etkileşimler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: KİMYASAL TÜRLER ARASI ETKİLEŞİMLER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Kimyasal Türler Arası Etkileşimler",
    "alt_baslik": "Ham bilgi notu — güçlü ve zayıf etkileşimler, iyonik ve kovalent "
                  "bağ, hidrojen bağı; fiziksel özellik yorumu ve 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Kimyasal Türler Arası Etkileşimler",
        "kazanimlar": "9.3.1.1 — Kimyasal türleri sınıflandırır. "
                      "9.3.1.2 — Güçlü ve zayıf etkileşimleri karşılaştırır. "
                      "9.3.1.3 — Etkileşim türü ile fiziksel özellikleri ilişkilendirir.",
        "kapsam": "Kimyasal tür çeşitleri, iyonik-kovalent-metalik bağ, polar ve "
                  "apolar kovalent, London-dipol-hidrojen bağı, erime/kaynama "
                  "noktası yorumu, 45 analiz sorusu",
        "nasil": "Bu konunun tamamı **karşılaştırma**dır. 'Hangisinin kaynama "
                 "noktası yüksek?' sorusunu çözebiliyorsan konuyu bitirmişsin "
                 "demektir. Bağ türünü bulma taktiğini ezberle.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Bağlar konusu, maddenin hâlleri ve çözünürlük konularının "
                    "da anahtarıdır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Kimyasal Türler"},
        {"tur": "maddeler", "ogeler": [
            "**Atom**: Bir elementin bütün özelliklerini taşıyan en küçük birim "
            "(He, Fe, Na).",
            "**Molekül**: İki ya da daha fazla atomun **kovalent bağla** bağlanmasıyla "
            "oluşan tanecik. **Element molekülü** (O2, N2, H2, Cl2, P4, S8) ve "
            "**bileşik molekülü** (H2O, CO2, NH3) diye ikiye ayrılır.",
            "**İyon**: Yüklü tanecik. **Katyon** (+) ve **anyon** (−). "
            "**Tek atomlu** (Na+, Cl−) ya da **çok atomlu (kök)** (SO4(−2), NH4(+1), "
            "NO3(−1), CO3(−2), PO4(−3), OH(−1)) olabilir.",
            "**Radikal**: **Ortaklanmamış (eşleşmemiş) elektronu** olan tanecik. "
            "Çok kararsız ve tepkindir. Örnek: OH radikali, Cl radikali.",
        ]},
        {"tur": "dikkat", "baslik": "Radikal ile İyonu Karıştırma", "govde":
            "**İyon yüklüdür**; elektron alıp vermiştir. **Radikal genellikle "
            "yüksüzdür** ama **eşleşmemiş elektronu** vardır. OH(−1) bir iyondur; "
            "OH (yüksüz) ise bir radikaldir. Aradaki fark yük değil, "
            "**elektronun eşleşip eşleşmediğidir**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Etkileşimlerin Genel Haritası"},
        {"tur": "gorsel", "baslik": "Şema 1 — Güçlü ve zayıf etkileşimler",
         "aciklama": "**Güçlü etkileşimler** taneciğin **içindedir** ve kimyasal "
                     "değişimle kırılır. **Zayıf etkileşimler** tanecikler "
                     "**arasındadır** ve fiziksel değişimle (erime, kaynama) kırılır.",
         "ciz": S.agac("Etkileşimler", [
             ("Güçlü (bağ)", ["İyonik", "Kovalent", "Metalik"]),
             ("Zayıf (moleküller arası)", ["London", "Dipol-dipol", "Hidrojen bağı",
                                           "İyon-dipol"]),
         ])},
        {"tur": "tuzak", "baslik": "Kaynama Zayıf Etkileşimi Kırar", "govde":
            "Su kaynadığında **O—H kovalent bağı kırılmaz**; kırılan şey su "
            "molekülleri **arasındaki hidrojen bağlarıdır**. Bu yüzden su buharı "
            "hâlâ H2O'dur. 'Kaynama sırasında kovalent bağ kırılır' ifadesi "
            "**yanlıştır** ve ÖSYM'nin klasik çeldiricisidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Güçlü Etkileşimler (Kimyasal Bağlar)"},

        {"tur": "altbolum", "baslik": "A. İyonik Bağ"},
        {"tur": "maddeler", "ogeler": [
            "**Metal ile ametal** arasında, **elektron alışverişi** sonucu oluşur. "
            "Metal elektron verir (katyon), ametal alır (anyon); zıt yükler "
            "**elektrostatik çekimle** bir arada durur.",
            "Elektronegatiflik farkı **büyüktür** (genellikle 1,7'den fazla).",
            "**Molekül oluşturmaz!** İyonik bileşikler **örgü (kristal) yapıdadır**; "
            "NaCl bir molekül değil, **formül birimidir**.",
            "**Özellikleri**: Erime-kaynama noktası **yüksek**, oda sıcaklığında "
            "**katı**, **sert ama kırılgan**, suda genellikle **çözünür**.",
            "**İletkenlik**: **Katı hâlde iletmez** (iyonlar örgüde sabittir), "
            "**sıvı (erimiş) ve sulu çözeltisinde iletir** (iyonlar serbesttir). "
            "Bu ayrım doğrudan sorulur.",
        ]},

        {"tur": "altbolum", "baslik": "B. Kovalent Bağ"},
        {"tur": "maddeler", "ogeler": [
            "**Ametal ile ametal** arasında, **elektronların ortaklaşa kullanılmasıyla** "
            "oluşur.",
            "**Apolar kovalent bağ**: **Aynı cins** atomlar arasında (H2, O2, Cl2) ya "
            "da elektronegatiflik farkı **çok küçük** olduğunda. Ortak elektronlar "
            "**eşit** paylaşılır.",
            "**Polar kovalent bağ**: **Farklı cins** ametaller arasında (HCl, H2O, "
            "NH3). Elektronegatifliği büyük olan atom elektronu **kendine daha çok "
            "çeker**; kısmi (+) ve kısmi (−) uçlar oluşur.",
            "Bağ sayısına göre: **tekli** (H—H), **ikili** (O=O), **üçlü** "
            "(N ile N arasında). Bağ sayısı arttıkça **bağ enerjisi artar**, "
            "**bağ uzunluğu azalır**.",
        ]},
        {"tur": "tuzak", "baslik": "Polar Bağ ≠ Polar Molekül", "govde":
            "**CO2**'de C=O bağları **polardır**; ama molekül **doğrusal** olduğu "
            "için iki bağın çekimi birbirini götürür ve molekül **apolardır**. "
            "**H2O**'da ise molekül **açısaldır**, çekimler birbirini götürmez ve "
            "molekül **polardır**. Yani: bağın polarlığına değil, "
            "**molekülün geometrisine** bakılır."},
        {"tur": "ezber", "baslik": "Sık Sorulan Molekül Polarlıkları", "ogeler": [
            "**Apolar moleküller**: H2, O2, N2, Cl2, **CO2**, CH4, CCl4, BF3",
            "**Polar moleküller**: **H2O**, **NH3**, HCl, HF, H2S, CHCl3, SO2",
            "Kural: molekül **simetrikse ve merkez atomda ortaklanmamış elektron "
            "çifti yoksa** genellikle apolardır.",
        ]},

        {"tur": "altbolum", "baslik": "C. Metalik Bağ"},
        {"tur": "maddeler", "ogeler": [
            "**Metal ile metal** arasında oluşur. Metal atomları değerlik "
            "elektronlarını ortak bir havuza bırakır; oluşan **elektron denizi** "
            "katyonları bir arada tutar.",
            "**Özellikleri**: Isı ve elektriği **çok iyi iletir** (katı hâlde bile), "
            "**şekil verilebilir** (tel ve levha hâline gelir), **parlaktır**.",
            "Metaller **katı hâlde de iletken**tir — iyonik bileşiklerden ayrıldığı "
            "en belirgin nokta budur.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "İyonik Bağ", "Kovalent Bağ", "Metalik Bağ"],
         "oranlar": [0.22, 0.26, 0.26, 0.26],
         "satirlar": [
             ["Kimler arasında", "**Metal + ametal**", "**Ametal + ametal**", "**Metal + metal**"],
             ["Elektron", "**Alışveriş**", "**Ortaklaşma**", "**Elektron denizi**"],
             ["Tanecik", "Formül birimi (örgü)", "**Molekül**", "Kristal örgü"],
             ["Katı hâlde iletir mi", "**Hayır**", "Hayır (grafit hariç)", "**Evet**"],
             ["Sıvı hâlde iletir mi", "**Evet**", "Hayır", "**Evet**"],
             ["Örnek", "NaCl, MgO, CaF2", "H2O, CO2, NH3", "Fe, Cu, Al"],
         ]},
        {"tur": "taktik", "baslik": "Bağ Türünü 5 Saniyede Bulma", "govde":
            "Bileşikteki elementlerin **metal mi ametal mi** olduğuna bak:",
         "ogeler": [
             "**Metal + Ametal** → **iyonik** (NaCl, CaO, KBr)",
             "**Ametal + Ametal** → **kovalent** (H2O, CO2, HCl)",
             "**Metal + Metal** → **metalik** (alaşımlar, saf metaller)",
             "İçinde **NH4(+1)** kökü varsa, ametallerden oluşsa bile bileşik "
             "**iyoniktir** (NH4Cl). Kökün içi kovalent, kök ile anyon arası iyoniktir.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Zayıf Etkileşimler (Moleküller Arası)"},
        {"tur": "tablo",
         "basliklar": ["Etkileşim", "Nerede Görülür?", "Güç"],
         "oranlar": [0.26, 0.48, 0.26],
         "satirlar": [
             ["**London (indüklenmiş dipol)**", "**Bütün** moleküllerde bulunur. "
              "Apolar moleküllerde tek etkileşim türüdür.", "**En zayıf**"],
             ["**Dipol-dipol**", "**Polar** moleküller arasında (HCl, SO2)", "Orta"],
             ["**Hidrojen bağı**", "H atomu **F, O veya N**'ye bağlıysa (H2O, NH3, HF)",
              "**Zayıflar içinde en güçlü**"],
             ["**İyon-dipol**", "İyon ile polar molekül arasında (NaCl'nin suda "
              "çözünmesi)", "Güçlü"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "**London kuvvetleri**, molekülün **büyüklüğü (mol kütlesi) arttıkça "
            "güçlenir**. Bu yüzden halojenlerde F2 gaz, Br2 sıvı, I2 katıdır.",
            "**Hidrojen bağının şartı**: Hidrojen, **doğrudan F, O ya da N** atomuna "
            "bağlı olmalıdır. Molekülde H bulunması yetmez — CH4'te hidrojen bağı "
            "**yoktur** (H, karbona bağlıdır).",
            "**Hidrojen bağı suyun anomalisini açıklar**: Su, benzer mol kütleli "
            "moleküllere göre çok **yüksek kaynama noktasına** sahiptir; buz suda "
            "**yüzer**, çünkü katı hâldeki hidrojen bağları taneciklerin arasını "
            "açar ve **yoğunluk azalır**.",
        ]},
        {"tur": "cikmis", "baslik": "Kaynama noktası sıralama sorusu", "govde":
            "'Aşağıdakilerden hangisinin kaynama noktası en yüksektir?' sorusunda "
            "sırayla bak: **1) Bağ türü** — iyonik/metalik varsa o en yüksektir. "
            "**2) Hidrojen bağı** var mı. **3) Polar mı apolar mı**. "
            "**4) Mol kütlesi** (London). Bu sıra bozulmaz."},
        {"tur": "gorsel", "baslik": "Şema 2 — Etkileşim gücü ve kaynama noktası",
         "aciklama": "Kaynama noktasını belirleyen şey **moleküller arası** "
                     "etkileşimin gücüdür; molekül içindeki bağ değil.",
         "ciz": S.piramit(
             ["İyonik / Metalik", "Hidrojen bağı", "Dipol-dipol", "London"],
             ["**Çok yüksek** e.n. ve k.n. — NaCl 1465 °C",
              "**Yüksek** — su 100 °C",
              "**Orta** — HCl −85 °C",
              "**Düşük** — mol kütlesiyle artar"])},
        {"tur": "cozum",
         "baslik": "Kaynama Noktası Karşılaştırması",
         "soru": "**H2O**, **H2S**, **CH4** ve **NaCl** maddelerini kaynama "
                 "noktalarına göre **büyükten küçüğe** sıralayınız.",
         "adimlar": [
             "**NaCl** iyonik bağlıdır; iyonik bağ bütün moleküller arası "
             "etkileşimlerden **çok daha güçlüdür** → en yüksek.",
             "**H2O**'da hidrojen **oksijene** bağlıdır → **hidrojen bağı** vardır → "
             "moleküller arası en güçlü ikinci.",
             "**H2S** polardır ama kükürt F-O-N'den biri değildir → yalnızca "
             "**dipol-dipol** vardır.",
             "**CH4** apolardır → yalnızca **London** kuvvetleri vardır → en düşük.",
         ],
         "sonuc": "NaCl > H2O > H2S > CH4"},
        {"tur": "tuzak", "baslik": "H2S'nin Kaynama Noktası H2O'dan Düşüktür",
         "govde": "Kükürt oksijenden **daha ağırdır**; mol kütlesine bakarsan H2S'nin "
                  "daha yüksek kaynaması gerekirdi. Ama H2O'da **hidrojen bağı** "
                  "vardır, H2S'de yoktur. **Hidrojen bağı mol kütlesini yener.** "
                  "Bu, konunun en kritik sorusudur."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Çözünme ve 'Benzer Benzeri Çözer'"},
        {"tur": "maddeler", "ogeler": [
            "**Polar maddeler polar çözücülerde**, **apolar maddeler apolar "
            "çözücülerde** çözünür. Bu kurala **'benzer benzeri çözer'** denir.",
            "**Su polar** bir çözücüdür: tuz (iyonik) ve şeker (polar) suda çözünür; "
            "yağ (apolar) çözünmez.",
            "**Benzin, eter, karbon tetraklorür** apolar çözücülerdir: yağ ve "
            "boya bunlarda çözünür.",
            "**İyonik bileşiğin suda çözünmesi**: Su molekülleri kısmi (−) ucuyla "
            "katyonu, kısmi (+) ucuyla anyonu sarar. Bu olaya **hidratasyon** "
            "(genel adı **çözünme/solvatasyon**) denir; etkileşim türü "
            "**iyon-dipol**dür.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Metal + ametal = iyonik**, **ametal + ametal = kovalent**, "
            "**metal + metal = metalik**.",
            "İyonik bileşik **katı hâlde iletmez**, **sıvı ve çözelti hâlinde iletir**.",
            "Metal **katı hâlde de iletir**.",
            "**CO2 apolar**, **H2O polar** — geometriye bak.",
            "Hidrojen bağı için H, **F–O–N**'den birine bağlı olmalı.",
            "Kaynamada **zayıf etkileşim** kırılır, kovalent bağ **kırılmaz**.",
            "Sıralama ölçütü: **iyonik/metalik > hidrojen bağı > dipol-dipol > London**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu konunun soruları **karşılaştırma** sorularıdır. Her cevabın altına "
            "'hangi ölçütle sıraladım' cümlesini yaz. Kaynama noktası sorularında "
            "dört basamaklı sırayı (bağ → hidrojen bağı → polarlık → mol kütlesi) "
            "uygula.",
        "satir_sayisi": 2,
        "sorular": [
            "Element molekülü ile bileşik molekülünü birer örnekle ayırt ediniz.",
            "Çok atomlu iyona (köke) üç örnek veriniz.",
            "İyon ile radikal arasındaki temel farkı yazınız.",
            "Güçlü ve zayıf etkileşimlerin nerede bulunduğunu (tanecik içi/arası) yazınız.",
            "Su kaynadığında hangi etkileşim kırılır? Kovalent bağ kırılır mı?",
            "Su buharının hâlâ H2O olmasının nedeni nedir?",
            "İyonik bağ hangi tür elementler arasında, nasıl oluşur?",
            "İyonik bileşiklerin molekül oluşturmamasının nedeni nedir?",
            "NaCl'nin katı hâlde elektriği iletmemesinin nedeni nedir?",
            "Aynı bileşik erimiş hâldeyken neden iletir?",
            "İyonik bileşiklerin sert ama kırılgan olmasını açıklayınız.",
            "Kovalent bağ nasıl oluşur? Hangi elementler arasında görülür?",
            "Apolar ve polar kovalent bağı elektronegatiflik farkıyla ayırınız.",
            "H2, HCl ve O2 moleküllerindeki bağları polarlık bakımından sınıflandırınız.",
            "Bağ sayısı arttıkça bağ enerjisi ve bağ uzunluğu nasıl değişir?",
            "CO2'de bağlar polar olduğu hâlde molekülün apolar olmasının nedeni nedir?",
            "H2O'nun polar molekül olmasının nedeni nedir?",
            "Apolar moleküllere dört örnek veriniz.",
            "Polar moleküllere dört örnek veriniz.",
            "Metalik bağı elektron denizi modeliyle açıklayınız.",
            "Metallerin katı hâlde iletken olmasının nedeni nedir?",
            "Metallerin tel ve levha hâline gelebilmesini bağ yapısıyla açıklayınız.",
            "NH4Cl bileşiğinde hangi bağ türleri bir arada bulunur?",
            "MgO, CH4 ve Cu bileşik/maddelerindeki bağ türlerini yazınız.",
            "London kuvvetleri hangi moleküllerde bulunur?",
            "London kuvvetlerinin gücü neye bağlı olarak artar?",
            "Halojenlerde F2 gaz, Br2 sıvı, I2 katı olmasının nedeni nedir?",
            "Dipol-dipol etkileşimi hangi moleküller arasında görülür?",
            "Hidrojen bağının oluşabilmesi için gereken şartı yazınız.",
            "CH4'te hidrojen bulunduğu hâlde hidrojen bağı olmamasının nedeni nedir?",
            "Suyun beklenenden yüksek kaynama noktasına sahip olmasını açıklayınız.",
            "Buzun suda yüzmesini hidrojen bağlarıyla açıklayınız.",
            "İyon-dipol etkileşimi nerede görülür? Bir örnek veriniz.",
            "Zayıf etkileşimleri güçlerine göre sıralayınız.",
            "Kaynama noktası karşılaştırmasında izlenecek dört basamağı sırasıyla yazınız.",
            "H2O, H2S, CH4 ve NaCl'yi kaynama noktasına göre sıralayınız.",
            "H2S'nin mol kütlesi H2O'dan büyük olduğu hâlde kaynama noktasının düşük olmasının nedeni nedir?",
            "HF ve HCl'den hangisinin kaynama noktası daha yüksektir? Neden?",
            "'Benzer benzeri çözer' kuralını bir cümleyle açıklayınız.",
            "Yağın suda çözünmemesinin nedeni nedir?",
            "Tuzun suda çözünmesini iyon-dipol etkileşimiyle açıklayınız.",
            "Hidratasyon kavramını tanımlayınız.",
            "Apolar bir maddeyi çözmek için hangi çözücüyü seçersiniz? İki örnek veriniz.",
            "Grafitin ametal olmasına rağmen elektriği iletmesinin nedeni ne olabilir?",
            "Bir maddenin erime noktası çok yüksek ve sulu çözeltisi iletken ise bağ türü nedir?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Element molekülü** aynı cins atomlardan oluşur (O2, N2). **Bileşik molekülü** farklı cins atomlardan oluşur (H2O, CO2).",
            "**SO4(−2), NO3(−1), NH4(+1)** (CO3(−2), PO4(−3), OH(−1) de yazılabilir).",
            "**İyon yüklüdür** (elektron alıp vermiştir). **Radikalin eşleşmemiş elektronu** vardır ve genellikle yüksüzdür.",
            "**Güçlü etkileşimler (bağlar) tanecik içindedir**; **zayıf etkileşimler tanecikler arasındadır**.",
            "**Hidrojen bağları** kırılır. **Kovalent bağ kırılmaz** — kırılsaydı su artık H2O olmazdı.",
            "Kaynama **fiziksel bir değişimdir**; yalnızca moleküller arası çekimler yenilir, molekülün kendi yapısı korunur.",
            "**Metal ile ametal** arasında, **elektron alışverişiyle** oluşur. Metal katyona, ametal anyona dönüşür; zıt yükler elektrostatik olarak çekilir.",
            "İyonik bileşiklerde her katyon birden çok anyonla çevrilidir; belirli bir 'birim molekül' yoktur. Yapı **kristal örgüdür**, NaCl bir **formül birimidir**.",
            "Katı hâlde iyonlar **örgü içinde sabittir**, hareket edemez; yük taşıyacak serbest tanecik yoktur.",
            "Erime sırasında örgü bozulur, **iyonlar serbest hâle gelir** ve yükü taşıyabilirler.",
            "Örgüdeki elektrostatik çekim güçlü olduğu için **serttir**; ancak katmanlar kaydırıldığında aynı yükler karşı karşıya gelip **itme** oluşturduğundan kristal aniden **kırılır**.",
            "**Ametal ile ametal** arasında, elektronların **ortaklaşa kullanılmasıyla** oluşur.",
            "**Apolarda** elektronegatiflik farkı yok denecek kadar azdır, ortak elektronlar **eşit** paylaşılır. **Polarda** fark vardır, elektronlar daha elektronegatif atoma **kayar**.",
            "**H2 apolar**, **O2 apolar** (aynı cins atomlar); **HCl polar** (farklı cins ametaller).",
            "Bağ sayısı arttıkça **bağ enerjisi artar** ve **bağ uzunluğu azalır**.",
            "Molekül **doğrusaldır**; iki C=O bağının kutup çekimi **eşit ve zıt yönlüdür**, birbirini götürür ve net kutuplaşma sıfır olur.",
            "Molekül **açısaldır** ve oksijende **ortaklanmamış elektron çiftleri** vardır; bağ kutupları birbirini götürmez, net bir kutuplaşma kalır.",
            "**H2, O2, CO2, CH4** (N2, Cl2, CCl4, BF3 de yazılabilir).",
            "**H2O, NH3, HCl, HF** (H2S, SO2, CHCl3 de yazılabilir).",
            "Metal atomları **değerlik elektronlarını ortak bir havuza** bırakır. Oluşan hareketli **elektron denizi**, geride kalan katyonları bir arada tutar.",
            "Elektron denizindeki elektronlar **serbestçe hareket eder**; katı hâlde bile yük taşıyabilirler.",
            "Katmanlar kaydırıldığında **elektron denizi yeniden dağılır** ve bağ kopmaz; bu yüzden metal kırılmadan şekil alır (dövülebilirlik).",
            "Kök **içinde kovalent** (N—H bağları), **kök ile Cl(−1) arasında iyonik** bağ bulunur.",
            "**MgO iyonik** (metal + ametal), **CH4 kovalent** (ametal + ametal), **Cu metalik**.",
            "**Bütün moleküllerde** bulunur; apolar moleküllerde ise **tek** moleküller arası etkileşim türüdür.",
            "**Molekülün büyüklüğü (mol kütlesi ve elektron sayısı) arttıkça** güçlenir.",
            "Hepsi apolardır ve aralarında yalnızca **London kuvvetleri** vardır. Mol kütlesi F2 < Br2 < I2 sırasında arttığı için London kuvvetleri güçlenir ve hâlleri gaz → sıvı → katı olur.",
            "**Polar moleküller** arasında (HCl, SO2 gibi kalıcı dipolü olanlar).",
            "Hidrojen atomu **doğrudan F, O veya N** atomuna bağlı olmalıdır.",
            "Hidrojen **karbona** bağlıdır. Karbon F-O-N'den biri değildir ve elektronegatifliği yeterince yüksek olmadığı için hidrojen bağı oluşmaz.",
            "Su molekülleri arasında **hidrojen bağı** bulunur. Bu bağlar dipol-dipol ve London kuvvetlerinden çok daha güçlüdür; kopmaları için fazladan enerji gerekir.",
            "Katı hâlde hidrojen bağları molekülleri **düzenli ve boşluklu** bir örgüye oturtur; hacim artar, **yoğunluk azalır** ve buz suda yüzer.",
            "**İyon ile polar molekül** arasında görülür. Örnek: **NaCl'nin suda çözünmesi** — su molekülleri iyonları sarar.",
            "**London < dipol-dipol < hidrojen bağı < iyon-dipol.**",
            "**1)** Bağ türü (iyonik/metalik en yüksek), **2)** hidrojen bağı var mı, **3)** polar mı apolar mı, **4)** mol kütlesi (London).",
            "**NaCl > H2O > H2S > CH4.**",
            "H2O'da **hidrojen bağı** vardır, H2S'de yoktur. Hidrojen bağının gücü, mol kütlesi farkının etkisini **fazlasıyla aşar**.",
            "**HF.** Florda hidrojen bağı vardır; klorda (HCl) yalnızca dipol-dipol etkileşimi bulunur.",
            "**Polar maddeler polar çözücülerde**, **apolar maddeler apolar çözücülerde** çözünür.",
            "Yağ **apolardır**, su **polardır**. Su molekülleri birbirine hidrojen bağıyla tutunur ve apolar yağ moleküllerini aralarına almaz.",
            "Su molekülleri **kısmi (−) oksijen ucuyla Na(+) iyonunu**, **kısmi (+) hidrojen ucuyla Cl(−) iyonunu** sarar. Bu **iyon-dipol** çekimi örgüyü çözer.",
            "Çözünen iyon veya molekülün **su molekülleriyle sarılması** olayıdır (genel adıyla solvatasyon).",
            "**Apolar bir çözücü** seçilir: **benzin, eter** (karbon tetraklorür, aseton benzeri çözücüler de yazılabilir).",
            "Grafitte her karbon üç komşusuyla bağ yapar; **dördüncü değerlik elektronu katmanlar arasında serbesttir** ve yük taşıyabilir.",
            "**İyonik bağ.** Yüksek erime noktası güçlü örgü çekimini, sulu çözeltinin iletkenliği serbest iyonların varlığını gösterir.",
        ],
    },
}
