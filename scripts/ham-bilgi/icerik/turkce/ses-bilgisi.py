"""TYT Türkçe — Ses Bilgisi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: SES BİLGİSİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Ses Bilgisi",
    "alt_baslik": "Ham bilgi notu — ünlü ve ünsüz uyumları, ses olayları ve istisnalar; "
                  "50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Ses Bilgisi",
        "kazanimlar": "Türkçenin ses özelliklerini bilir. "
                      "Büyük ve küçük ünlü uyumunu uygular. "
                      "Ünsüz sertleşmesi ve yumuşamasını tanır. "
                      "Ses olaylarını örneklerle açıklar.",
        "kapsam": "Ünlüler ve ünsüzler, büyük ünlü uyumu, küçük ünlü uyumu, ünsüz "
                  "benzeşmesi (sertleşme), ünsüz yumuşaması, ünlü düşmesi, ünlü türemesi, "
                  "ünsüz düşmesi, ünsüz türemesi, kaynaştırma, ulama, daralma, "
                  "Türkçenin ses özellikleri, 50 analiz sorusu",
        "nasil": "Ses bilgisi **kural konusudur**; kuralı bilirsen soru biter. "
                 "Ama asıl puanı **istisnalar** getirir. Her kuralın yanına "
                 "**istisnasını da yaz**; sınav genellikle oradan sorar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de ses bilgisinden gelen soru genellikle **ses olayı "
                    "belirleme** ya da **uyuma aykırı sözcük bulma** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Türkçenin Ses Özellikleri"},
        {"tur": "tablo",
         "basliklar": ["Ünlüler", "Kalın", "İnce"],
         "satirlar": [
             ["**Düz geniş**", "**a**", "**e**"],
             ["**Düz dar**", "**ı**", "**i**"],
             ["**Yuvarlak geniş**", "**o**", "**ö**"],
             ["**Yuvarlak dar**", "**u**", "**ü**"],
         ],
         "oranlar": [0.40, 0.30, 0.30]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Türkçede **8 ünlü**, **21 ünsüz** olmak üzere **29 harf** vardır.",
            "**Sert ünsüzler**: **f, s, t, k, ç, ş, h, p** — \"**Fıstıkçı Şahap**\" "
            "diye ezberlenir.",
            "**Yumuşak ünsüzler**: **b, c, d, g, ğ, j, l, m, n, r, v, y, z**.",
            "**Türkçe sözcükler iki ünsüzle başlamaz**: \"tren, spor, plan\" gibi "
            "sözcükler **yabancı kökenlidir**.",
            "**Türkçe sözcüklerde \"c, ğ, j, l, m, n, r, v, z\" harfleri başta "
            "bulunmaz** (birkaç istisna dışında).",
            "**Uzun ünlü yoktur**; uzun okunan ünlüler yabancı kökenli sözcüklerdedir "
            "(kâtip, âlim).",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Türkçe sözcüğü tanıma ölçütleri",
         "aciklama": "Bir sözcüğün Türkçe olup olmadığını anlamak, uyum sorularının "
                     "yarısını çözer. Bu altı ölçütten biri bile ihlal edilmişse "
                     "sözcük büyük olasılıkla **yabancı kökenlidir**.",
         "ciz": S.kartlar([
             ("İki ünsüzle başlamaz", "**tren, spor, kral**\nyabancıdır"),
             ("Uzun ünlü yoktur", "**kâtip, âlim**\nyabancıdır"),
             ("c, j, ğ ile başlamaz", "**cam, jandarma**\nyabancıdır"),
             ("Ünlü uyumuna uyar", "uymuyorsa genellikle\n**yabancıdır**"),
             ("İki ünlü yan yana gelmez", "**saat, fiil**\nyabancıdır"),
             ("Sözcük sonunda b,c,d,g olmaz", "**kitab → kitap**\nsertleşir"),
         ], sutun=3)},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Ünlü Uyumları"},
        {"tur": "formul",
         "baslik": "Büyük ünlü uyumu (kalınlık-incelik)",
         "ifade": "**Bir sözcüğün ünlüleri ya hep kalın (a, ı, o, u) ya hep ince "
                  "(e, i, ö, ü) olmalıdır.**\n"
                  "Uyar:   ka-lem-lik? hayır → **ka-la-ba-lık** (hepsi kalın)\n"
                  "Uymaz:  **kitap** (i ince, a kalın)",
         "terimler": [
             ("Kural", "Kalınla kalın, inceyle ince"),
             ("Uymayan ekler", "**-yor, -ken, -ki, -leyin, -imtırak, -daş** (bazıları)"),
             ("Uymayan sözcükler", "**kitap, kalem, hangi, hani, anne, elma, kardeş**"),
             ("Birleşik sözcükler", "**aranmaz**: bugün, hanımeli"),
         ],
         "not": "**Büyük ünlü uyumu birleşik sözcüklerde aranmaz.** \"Bugün\" "
                "sözcüğünde \"u\" kalın, \"ü\" ince olduğu hâlde uyumsuzluk sayılmaz; "
                "çünkü sözcük **bu + gün** biçiminde birleşiktir."},
        {"tur": "formul",
         "baslik": "Küçük ünlü uyumu (düzlük-yuvarlaklık)",
         "ifade": "**Kural 1:** Düz ünlüden (a, e, ı, i) sonra **düz ünlü** gelir.\n"
                  "**Kural 2:** Yuvarlak ünlüden (o, ö, u, ü) sonra **ya dar-yuvarlak "
                  "(u, ü) ya düz-geniş (a, e)** gelir.\n"
                  "Uyar:  **oduncu** (o → u → u), **kelebek** (e → e → e)\n"
                  "Uymaz: **çamur** (a düz, u yuvarlak)",
         "terimler": [
             ("Kısa kural", "**o ve ö yalnızca ilk hecede** bulunur"),
             ("İstisna sözcükler", "**çamur, kabuk, avuç, kavun, armut, tavuk**"),
             ("İstisna ekler", "**-yor, -ki**: geliyor, akşamki"),
             ("Aranmaz", "**Birleşik sözcüklerde ve tek heceli sözcüklerde**"),
         ],
         "not": "**\"o\" ve \"ö\" ünlüleri Türkçe sözcüklerin yalnızca ilk hecesinde "
                "bulunur.** İlk heceden sonra \"o\" ya da \"ö\" görüyorsan sözcük "
                "büyük olasılıkla **yabancı kökenlidir** (radyo, konsol, otobüs) ya da "
                "\"-yor\" ekini almıştır."},
        {"tur": "tuzak", "baslik": "İki Uyumu Karıştırma", "govde":
            "**Büyük ünlü uyumu kalınlık-inceliğe**, **küçük ünlü uyumu "
            "düzlük-yuvarlaklığa** bakar. Bir sözcük **birine uyup diğerine "
            "uymayabilir**: \"kitap\" büyük ünlü uyumuna uymaz ama küçük ünlü uyumuna "
            "**uyar** (i düz → a düz). Soruda hangisinin sorulduğunu okumadan cevap "
            "verme."},
        {"tur": "cozum",
         "baslik": "Ünlü Uyumu İnceleme",
         "soru": "Aşağıdaki sözcükleri ünlü uyumları bakımından inceleyiniz: "
                 "**kalemlik, oduncu, çamur, bugün**",
         "adimlar": [
             "**kalemlik** (a-e-i): a kalın, e ve i ince → **büyük ünlü uyumuna uymaz**. "
             "Ünlülerin hepsi düz → **küçük ünlü uyumuna uyar**.",
             "**oduncu** (o-u-u): hepsi kalın → **büyük uyuma uyar**. o yuvarlak, sonra "
             "dar-yuvarlak u → **küçük uyuma da uyar**.",
             "**çamur** (a-u): ikisi de kalın → **büyük uyuma uyar**. a düz ama sonra "
             "yuvarlak u gelmiş → **küçük uyuma uymaz**.",
             "**bugün** (u-ü): u kalın, ü ince → uymuyor gibi görünür ama **birleşik "
             "sözcüktür**, uyum **aranmaz**.",
         ],
         "sonuc": "Bir sözcük **iki uyumdan birine uyup diğerine uymayabilir**; "
                  "ikisini ayrı ayrı incelemek gerekir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Ünsüzle İlgili Ses Olayları"},
        {"tur": "tablo",
         "basliklar": ["Ses olayı", "Kuralı", "Örnek"],
         "satirlar": [
             ["**Ünsüz benzeşmesi (sertleşmesi)**",
              "**Sert ünsüzle biten** sözcüğe **c, d, g** ile başlayan ek gelirse "
              "ek **ç, t, k**'ye döner",
              "kitap + cı → **kitapçı**; iş + de → **işte**"],
             ["**Ünsüz yumuşaması**",
              "**p, ç, t, k** ile biten sözcüğe **ünlüyle başlayan ek** gelirse "
              "**b, c, d, g/ğ**'ye döner",
              "kitap + ı → **kitabı**; ağaç + ı → **ağacı**"],
             ["**Ünsüz düşmesi**",
              "**küçük, ufak, yüksek, alçak** gibi sözcüklerde **k** düşer",
              "küçük + al- → **küçülmek**; yüksek + l- → **yükselmek**"],
             ["**Ünsüz türemesi**",
              "Bazı sözcüklerde **ünsüz ikizleşir**",
              "his + i → **hissi**; af + etmek → **affetmek**"],
             ["**Kaynaştırma**",
              "İki ünlü yan yana gelmesin diye **y, ş, s, n** girer",
              "iki + er → **ikişer**; baba + ı → **babası**"],
         ],
         "oranlar": [0.26, 0.40, 0.34]},
        {"tur": "dikkat", "baslik": "Ünsüz Yumuşamasının İstisnaları", "ogeler": [
            "**Tek heceli sözcüklerin çoğunda yumuşama olmaz**: \"at + ı → atı\", "
            "\"saç + ı → saçı\", \"süt + ü → sütü\".",
            "**Özel adlarda yazıda yumuşama gösterilmez**: \"Zonguldak'a\", "
            "\"Sinop'a\" (okunuşta yumuşasa da yazılışta korunur).",
            "**Yabancı kökenli bazı sözcüklerde olmaz**: \"hukuk + u → hukuku\", "
            "\"millet + i → milleti\".",
            "**Bazı tek heceliler yumuşar**: \"but + u → budu\", \"kap + ı → kabı\", "
            "\"dip + i → dibi\", \"uç + u → ucu\". Bu yüzden \"tek hecelide yumuşama "
            "olmaz\" **kesin bir kural değildir**.",
        ]},
        {"tur": "cozum",
         "baslik": "Ses Olayı Belirleme",
         "soru": "Aşağıdaki sözcüklerde hangi ses olayları vardır?\n"
                 "**kitabı · işte · burnu · affetmek · ikişer**",
         "adimlar": [
             "**kitabı**: kitap + ı → \"p\" harfi \"b\"ye dönmüş → **ünsüz yumuşaması**.",
             "**işte**: iş + de → \"ş\" sert olduğu için \"d\" harfi \"t\"ye dönmüş → "
             "**ünsüz benzeşmesi (sertleşmesi)**.",
             "**burnu**: burun + u → ikinci hecedeki \"u\" düşmüş → **ünlü düşmesi**.",
             "**affetmek**: af + etmek → \"f\" ikizleşmiş → **ünsüz türemesi**.",
             "**ikişer**: iki + er → araya \"ş\" girmiş → **kaynaştırma**.",
         ],
         "sonuc": "Beş sözcükte beş farklı ses olayı vardır: **yumuşama, sertleşme, "
                  "ünlü düşmesi, ünsüz türemesi, kaynaştırma**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Ünlüyle İlgili Ses Olayları"},
        {"tur": "tablo",
         "basliklar": ["Ses olayı", "Kuralı", "Örnek"],
         "satirlar": [
             ["**Ünlü düşmesi (hece düşmesi)**",
              "İki heceli bazı sözcüklere **ünlüyle başlayan ek** gelince "
              "**ikinci hecedeki dar ünlü düşer**",
              "burun + u → **burnu**; ağız + ı → **ağzı**; oğul + u → **oğlu**"],
             ["**Ünlü türemesi**",
              "Pekiştirme ve bazı eklerde **ünlü türer**",
              "genç + cik → **gencecik**; bir + cik → **biricik**"],
             ["**Ünlü daralması**",
              "**a, e** ile biten fiillere **-yor** gelirse ünlü **ı, i, u, ü**'ye "
              "daralır",
              "başla + yor → **başlıyor**; söyle + yor → **söylüyor**"],
             ["**Ulama**",
              "**Ünsüzle biten** sözcük, **ünlüyle başlayan** sözcüğe bağlanarak okunur",
              "\"akşam olunca\" → \"akşa-mo-lunca\" (yazıda gösterilmez)"],
         ],
         "oranlar": [0.26, 0.40, 0.34]},
        {"tur": "tuzak", "baslik": "Daralma Yalnızca -yor Ekinde Değildir", "govde":
            "Ünlü daralması en çok **-yor** ekiyle görülür ama **\"de-\" ve \"ye-\"** "
            "fiillerinde **başka eklerle de** olur: \"de + en → **diyen**\", "
            "\"ye + ecek → **yiyecek**\", \"de + erek → **diyerek**\". "
            "Bu iki fiil, Türkçenin **düzensiz** davrandığı ender yerlerdendir; "
            "sorularda sık kullanılır."},
        {"tur": "dikkat", "baslik": "Ulamanın Koşulları", "ogeler": [
            "Birinci sözcük **ünsüzle bitmeli**, ikinci sözcük **ünlüyle başlamalıdır**.",
            "İki sözcük arasında **noktalama işareti bulunmamalıdır**; virgül varsa "
            "ulama **yapılamaz**.",
            "Ulama **yalnızca konuşmada** olur; **yazıda gösterilmez**.",
            "Ulama bir **söyleyiş kolaylığıdır**; ses olayı sayılır ama sözcüğün "
            "yazımını değiştirmez.",
        ]},
        {"tur": "cozum",
         "baslik": "Ünlü Daralması",
         "soru": "Aşağıdaki fiillerde ünlü daralması olup olmadığını belirleyiniz: "
                 "**anlıyor · geliyor · diyecek · okuyor**",
         "adimlar": [
             "**anlıyor**: anla + yor → \"a\" ünlüsü \"ı\"ya daralmış → **daralma var**.",
             "**geliyor**: gel + iyor → fiilin sonu **ünsüz**, daralacak ünlü yok → "
             "**daralma yok**.",
             "**diyecek**: de + ecek → \"e\" ünlüsü \"i\"ye daralmış → **daralma var** "
             "(-yor eki olmadan).",
             "**okuyor**: oku + yor → \"u\" zaten dar ünlü, daralma **gerçekleşmez** → "
             "**daralma yok**.",
         ],
         "sonuc": "Daralma için fiilin **a ya da e ile bitmesi** gerekir. \"okuyor\" ve "
                  "\"geliyor\" örneklerinde bu koşul sağlanmadığı için daralma yoktur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Sert ünsüzler**: **f, s, t, k, ç, ş, h, p** — \"Fıstıkçı Şahap\".",
            "**Büyük ünlü uyumu**: kalınlık-incelik. **Küçük ünlü uyumu**: "
            "düzlük-yuvarlaklık.",
            "**Uyumlar birleşik sözcüklerde aranmaz** (bugün, hanımeli).",
            "**\"o\" ve \"ö\" yalnızca ilk hecede** bulunur.",
            "**Sertleşme**: sert ünsüz + c/d/g → **ç/t/k** (kitapçı, işte).",
            "**Yumuşama**: p/ç/t/k + ünlü → **b/c/d/ğ** (kitabı, ağacı).",
            "**Özel adlarda yumuşama yazıda gösterilmez** (Zonguldak'a).",
            "**Ünlü düşmesi**: burun → burnu, ağız → ağzı.",
            "**Daralma**: a/e ile biten fiil + **-yor** (başlıyor).",
            "**\"de-\" ve \"ye-\"** fiilleri **başka eklerle de** daralır (diyen, yiyecek).",
            "**Kaynaştırma harfleri**: **y, ş, s, n**.",
            "**Ulama yazıda gösterilmez**; araya **noktalama girerse olmaz**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her kural için **kendi örneğini yazman** isteniyor. "
            "Kuralı ezberlemek yetmez; **istisnasını da bil**. Sınav sorularının "
            "büyük kısmı tam olarak istisnalardan gelir; bu yüzden onları ayrı bir "
            "yere not et.",
        "satir_sayisi": 2,
        "sorular": [
            "Türkçedeki ünlü ve ünsüz sayılarını yazınız.",
            "Ünlüleri kalınlık-incelik bakımından gruplandırınız.",
            "Ünlüleri düzlük-yuvarlaklık bakımından gruplandırınız.",
            "Sert ünsüzleri yazarak ezberleme kalıbını belirtiniz.",
            "Türkçe sözcüklerin iki ünsüzle başlamamasının sonucunu bir örnekle açıklayınız.",
            "Türkçe sözcüklerde başta bulunmayan harfleri yazınız.",
            "Türkçede uzun ünlü bulunup bulunmadığını örnekle açıklayınız.",
            "Türkçe sözcükte iki ünlünün yan yana gelip gelmediğini örnekle açıklayınız.",
            "Bir sözcüğün Türkçe olup olmadığını anlamanın altı ölçütünü yazınız.",
            "Büyük ünlü uyumunu tanımlayınız.",
            "Büyük ünlü uyumuna uymayan üç sözcük yazınız.",
            "Büyük ünlü uyumuna uymayan üç ek yazınız.",
            "Büyük ünlü uyumunun hangi sözcüklerde aranmadığını yazınız.",
            "Küçük ünlü uyumunun iki kuralını yazınız.",
            "Küçük ünlü uyumuna uymayan üç sözcük yazınız.",
            "'o' ve 'ö' ünlülerinin hangi hecede bulunduğunu yazınız.",
            "İlk heceden sonra 'o' bulunan bir sözcük hakkında ne söylenir?",
            "İki ünlü uyumunu ayıran ölçütü yazınız.",
            "'kitap' sözcüğünü iki uyum bakımından inceleyiniz.",
            "'kalemlik' sözcüğünü iki uyum bakımından inceleyiniz.",
            "'oduncu' sözcüğünü iki uyum bakımından inceleyiniz.",
            "'çamur' sözcüğünü iki uyum bakımından inceleyiniz.",
            "'bugün' sözcüğünde uyum aranmamasının nedenini yazınız.",
            "Ünsüz benzeşmesini (sertleşme) tanımlayarak bir örnek veriniz.",
            "'kitap + cı' örneğinde hangi ses olayının olduğunu yazınız.",
            "'iş + de' örneğinde hangi ses olayının olduğunu yazınız.",
            "Ünsüz yumuşamasını tanımlayarak bir örnek veriniz.",
            "'ağaç + ı' örneğinde hangi ses olayının olduğunu yazınız.",
            "Ünsüz yumuşamasının tek heceli sözcüklerdeki durumunu açıklayınız.",
            "Yumuşayan tek heceli sözcüklere üç örnek veriniz.",
            "Özel adlarda ünsüz yumuşamasının yazıdaki durumunu yazınız.",
            "Yabancı kökenli sözcüklerde yumuşamanın olmadığı iki örnek veriniz.",
            "Ünsüz düşmesini tanımlayarak iki örnek veriniz.",
            "Ünsüz türemesini tanımlayarak iki örnek veriniz.",
            "Kaynaştırma harflerini yazarak birer örnek veriniz.",
            "Kaynaştırmanın neden gerekli olduğunu açıklayınız.",
            "Ünlü düşmesini tanımlayarak üç örnek veriniz.",
            "'burun + u' örneğindeki ses olayını yazınız.",
            "'ağız + ı' örneğindeki ses olayını yazınız.",
            "Ünlü türemesini tanımlayarak iki örnek veriniz.",
            "Ünlü daralmasını tanımlayarak koşulunu yazınız.",
            "'başla + yor' örneğindeki ses olayını yazınız.",
            "'geliyor' sözcüğünde daralma olup olmadığını gerekçesiyle yazınız.",
            "'okuyor' sözcüğünde daralma olup olmadığını gerekçesiyle yazınız.",
            "'de-' ve 'ye-' fiillerinin daralmadaki özel durumunu açıklayınız.",
            "'diyecek' ve 'yiyen' sözcüklerindeki ses olayını yazınız.",
            "Ulamayı tanımlayarak koşullarını yazınız.",
            "Ulamanın yazıda gösterilip gösterilmediğini yazınız.",
            "Araya virgül girerse ulamanın durumunu yazınız.",
            "'kitabı, işte, burnu, affetmek, ikişer' sözcüklerindeki ses olaylarını sırayla yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**8 ünlü**, **21 ünsüz**; toplam **29 harf**.",
            "**Kalın**: a, ı, o, u. **İnce**: e, i, ö, ü.",
            "**Düz**: a, e, ı, i. **Yuvarlak**: o, ö, u, ü.",
            "**f, s, t, k, ç, ş, h, p** — **\"Fıstıkçı Şahap\"** kalıbıyla ezberlenir.",
            "**tren, spor, plan, kral** gibi iki ünsüzle başlayan sözcükler **yabancı kökenlidir**.",
            "**c, ğ, j, l, m, n, r, v, z** (birkaç istisna dışında).",
            "**Bulunmaz.** Uzun okunan ünlüler yabancı kökenli sözcüklerdedir: **kâtip, âlim, şair**.",
            "**Gelmez.** \"saat, fiil, şiir, kanaat\" gibi iki ünlünün yan yana geldiği sözcükler **yabancı kökenlidir**.",
            "**1)** İki ünsüzle başlamaz. **2)** Uzun ünlü yoktur. **3)** c, j, ğ ile başlamaz. **4)** Ünlü uyumlarına uyar. **5)** İki ünlü yan yana gelmez. **6)** Sonunda b, c, d, g bulunmaz.",
            "Bir sözcüğün ünlüleri **ya hep kalın ya hep ince** olmalıdır.",
            "**kitap, kalem, hangi** (ayrıca hani, anne, elma, kardeş).",
            "**-yor, -ken, -ki** (ayrıca -leyin, -daş, -imtırak).",
            "**Birleşik sözcüklerde** aranmaz: bugün, hanımeli, bilgisayar.",
            "**1)** Düz ünlüden sonra **düz ünlü** gelir. **2)** Yuvarlak ünlüden sonra ya **dar-yuvarlak (u, ü)** ya **düz-geniş (a, e)** gelir.",
            "**çamur, kabuk, avuç** (ayrıca kavun, armut, tavuk).",
            "Yalnızca **ilk hecede** bulunur.",
            "Sözcük büyük olasılıkla **yabancı kökenlidir** (radyo, konsol, otobüs) ya da **\"-yor\"** ekini almıştır.",
            "**Büyük ünlü uyumu kalınlık-inceliğe**, **küçük ünlü uyumu düzlük-yuvarlaklığa** bakar.",
            "i ince, a kalın → **büyük uyuma uymaz**. İkisi de düz → **küçük uyuma uyar**.",
            "a kalın, e ve i ince → **büyük uyuma uymaz**. Hepsi düz → **küçük uyuma uyar**.",
            "Hepsi kalın → **büyük uyuma uyar**. o yuvarlaktan sonra dar-yuvarlak u → **küçük uyuma uyar**.",
            "İkisi de kalın → **büyük uyuma uyar**. a düz ama sonra yuvarlak u gelmiş → **küçük uyuma uymaz**.",
            "**Birleşik sözcüktür** (bu + gün). Ünlü uyumları birleşik sözcüklerde **aranmaz**.",
            "**Sert ünsüzle biten** sözcüğe **c, d, g** ile başlayan ek gelirse ek **ç, t, k**'ye döner. \"seç + gi → seçki\".",
            "**Ünsüz benzeşmesi (sertleşmesi)**; \"c\" sertleşerek \"ç\" olmuştur.",
            "**Ünsüz benzeşmesi (sertleşmesi)**; \"d\" sertleşerek \"t\" olmuştur.",
            "**p, ç, t, k** ile biten sözcüğe **ünlüyle başlayan ek** gelince bu ünsüzler **b, c, d, g/ğ**'ye döner. \"dolap + ı → dolabı\".",
            "**Ünsüz yumuşaması**; \"ç\" yumuşayarak \"c\" olmuştur.",
            "Tek heceli sözcüklerin **çoğunda yumuşama olmaz** (at → atı, saç → saçı) ama **bir kısmında olur**; bu yüzden kesin kural değildir.",
            "**but → budu**, **kap → kabı**, **dip → dibi** (ayrıca uç → ucu).",
            "**Yazıda gösterilmez**; okunuşta yumuşasa da yazılışta korunur: **Zonguldak'a**, **Sinop'a**.",
            "**hukuk + u → hukuku**, **millet + i → milleti**.",
            "Bazı sözcüklere ek gelince **bir ünsüzün düşmesidir**: **küçük + al- → küçülmek**, **yüksek + l- → yükselmek**.",
            "Bazı sözcüklerde ek alınca **ünsüzün ikizleşmesidir**: **his + i → hissi**, **af + etmek → affetmek**.",
            "**y, ş, s, n**. baba + **s** + ı → babası; iki + **ş** + er → ikişer; oku + **y** + acak → okuyacak; o + **n** + a → ona.",
            "Türkçede **iki ünlü yan yana gelmediği** için, ünlüyle biten sözcüğe ünlüyle başlayan ek geldiğinde araya kaynaştırma harfi girer.",
            "İki heceli bazı sözcüklere ünlüyle başlayan ek gelince **ikinci hecedeki dar ünlü düşer**: **burun → burnu**, **ağız → ağzı**, **oğul → oğlu**.",
            "**Ünlü düşmesi (hece düşmesi)**; ikinci hecedeki \"u\" düşmüştür.",
            "**Ünlü düşmesi**; ikinci hecedeki \"ı\" düşmüştür.",
            "Bazı eklerde **ünlü türemesidir**: **genç + cik → gencecik**, **bir + cik → biricik**.",
            "**a, e** ile biten fiillere **-yor** eki gelince ünlünün **ı, i, u, ü**'ye dönüşmesidir.",
            "**Ünlü daralması**; \"a\" ünlüsü \"ı\"ya daralmıştır.",
            "**Daralma yoktur**; fiil **ünsüzle bitiyor** (gel-), daralacak bir ünlü yok.",
            "**Daralma yoktur**; \"u\" ünlüsü **zaten dardır**, daha fazla daralamaz.",
            "Bu iki fiil **-yor dışındaki eklerle de daralır**: de + en → **diyen**, ye + ecek → **yiyecek**, de + erek → **diyerek**.",
            "**Ünlü daralması**; \"e\" ünlüsü \"i\"ye daralmıştır.",
            "**Ünsüzle biten** sözcüğün, **ünlüyle başlayan** sözcüğe bağlanarak okunmasıdır. Koşullar: birincisi ünsüzle bitmeli, ikincisi ünlüyle başlamalı, arada **noktalama bulunmamalıdır**.",
            "**Gösterilmez**; yalnızca **konuşmada** gerçekleşen bir söyleyiş olayıdır.",
            "**Ulama yapılamaz.** Noktalama işareti sözcükler arasında bir duraklama yarattığı için bağlanma gerçekleşmez.",
            "**kitabı**: ünsüz yumuşaması. **işte**: ünsüz benzeşmesi. **burnu**: ünlü düşmesi. **affetmek**: ünsüz türemesi. **ikişer**: kaynaştırma.",
        ],
    },
}
