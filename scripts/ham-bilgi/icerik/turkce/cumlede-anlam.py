"""TYT Türkçe — Cümlede Anlam (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: CÜMLEDE ANLAM",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Cümlede Anlam",
    "alt_baslik": "Ham bilgi notu — cümlede anlam ilişkileri, yorum-yargı ayrımı ve "
                  "kavramlar; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Cümlede Anlam",
        "kazanimlar": "Cümleler arasındaki anlam ilişkilerini belirler. "
                      "Öznel ve nesnel yargıları ayırt eder. "
                      "Cümlede verilen kavramları tanır. "
                      "Cümleden çıkarılabilecek ve çıkarılamayacak yargıları belirler.",
        "kapsam": "Öznel-nesnel yargı, neden-sonuç, amaç-sonuç, koşul-sonuç, karşılaştırma, "
                  "tanım, varsayım, öneri, eleştiri, öz eleştiri, olasılık, tasarı, "
                  "yakınma, pişmanlık, doğrudan-dolaylı anlatım, cümle yorumu, "
                  "50 analiz sorusu",
        "nasil": "Cümlede anlam **ezberlenmez, ayırt edilir**. Her soruda cümleyi "
                 "**kendi cümlenle özetle**; ne söylüyor, nasıl söylüyor? Kavramları "
                 "tanımak için **cümlenin taşıdığı duyguyu** yakala.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de cümlede anlamdan gelen soru genellikle **öznel-nesnel "
                    "ayrımı**, **anlam ilişkisi** ya da **kavram belirleme** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Öznel ve Nesnel Yargı"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki yargı türü",
         "aciklama": "Ayrım tek soruyla yapılır: **bu yargı doğrulanabilir mi?** "
                     "Ölçülebilir, kanıtlanabilir bir bilgiyse nesnel; kişiden kişiye "
                     "değişen bir görüşse özneldir.",
         "ciz": S.karsilastirma(
             "NESNEL yargı",
             ["**Doğrulanabilir ya da yanlışlanabilir**",
              "Kişisel görüş **içermez**",
              "**Herkes için aynıdır**",
              "Ölçme, sayma, kanıtla desteklenir",
              "\"Roman **300 sayfadır**.\"",
              "\"Türkiye'nin başkenti Ankara'dır.\""],
             "ÖZNEL yargı",
             ["**Doğrulanamaz**, kanıtlanamaz",
              "Kişisel **beğeni ve görüş** bildirir",
              "**Kişiden kişiye değişir**",
              "Yorum, duygu ve değerlendirme taşır",
              "\"Roman **çok sürükleyici**.\"",
              "\"Ankara'nın havası çok güzeldir.\""],
             "Ayırt etme",
             ["**\"Doğrulanabilir mi?\"** diye sor",
              "Nitel sıfatlar (güzel, sıkıcı, başarılı) → **öznel**",
              "Sayı, tarih, ölçü → genellikle **nesnel**"])},
        {"tur": "tuzak", "baslik": "Sayı Geçmesi Nesnel Yapmaz", "govde":
            "\"Yazarın **üç romanı** vardır.\" nesneldir; sayılabilir. Ama \"Yazarın "
            "**en güzel üç romanı** budur.\" **özneldir**; içinde sayı geçse de "
            "\"en güzel\" ifadesi bir **değerlendirmedir**. Aynı cümlede hem nesnel hem "
            "öznel bölüm bulunabilir: \"**300 sayfalık** roman (nesnel), **okuru "
            "sıkmıyor** (öznel).\""},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Cümlede Anlam İlişkileri"},
        {"tur": "tablo",
         "basliklar": ["İlişki", "Belirteçleri", "Örnek"],
         "satirlar": [
             ["**Neden – sonuç**",
              "**için, -dığı için, -den, diye, ile**",
              "\"Yağmur **yağdığı için** maç ertelendi.\""],
             ["**Amaç – sonuç**",
              "**için, diye, üzere, amacıyla** (istek bildirir)",
              "\"Sınavı kazanmak **için** çok çalıştı.\""],
             ["**Koşul (şart)**",
              "**-sa/-se, ise, mi, üzere, takdirde**",
              "\"Erken **kalkarsan** yetişirsin.\""],
             ["**Karşılaştırma**",
              "**gibi, kadar, göre, daha, en, ise**",
              "\"Bu kitap **öncekinden daha** akıcı.\""],
             ["**Tanım**",
              "\"**nedir?**\" sorusuna cevap verir",
              "\"Roman, olay örgüsüne dayanan uzun anlatıdır.\""],
             ["**Varsayım**",
              "**tut ki, diyelim ki, farz et, düşün ki**",
              "\"**Diyelim ki** sınavı kazandın.\""],
         ],
         "oranlar": [0.22, 0.32, 0.46]},
        {"tur": "taktik", "baslik": "Neden-Sonuç ile Amaç-Sonucu Ayırma", "govde":
            "İkisinde de **\"için\"** geçebilir; bu yüzden karıştırılır. Ayırt etmek "
            "için sor: **eylem gerçekleşti mi, yoksa istenen bir şey mi?** "
            "\"Hasta **olduğu için** gelmedi\" → hastalık **gerçekleşmiş**, neden-sonuç. "
            "\"İyileşmek **için** ilaç içti\" → iyileşme **henüz olmamış, isteniyor**, "
            "amaç-sonuç. Kısaca: **neden geçmişe, amaç geleceğe** bakar."},
        {"tur": "cozum",
         "baslik": "Anlam İlişkisi Belirleme",
         "soru": "Aşağıdaki cümlelerdeki anlam ilişkilerini belirleyiniz.\n"
                 "**I.** \"Kar yağdığından okullar tatil edildi.\"\n"
                 "**II.** \"Sağlıklı kalmak için düzenli yürüyor.\"\n"
                 "**III.** \"Çalışırsan başarırsın.\"",
         "adimlar": [
             "**I.** Kar yağması **gerçekleşmiş** bir olaydır ve tatili doğurmuştur → "
             "**neden-sonuç**.",
             "**II.** Sağlıklı kalmak **henüz gerçekleşmemiş**, istenen bir durumdur → "
             "**amaç-sonuç**.",
             "**III.** \"-sa/-se\" eki vardır; sonuç bir **şarta bağlanmıştır** → "
             "**koşul-sonuç**.",
         ],
         "sonuc": "**I: neden-sonuç**, **II: amaç-sonuç**, **III: koşul-sonuç**. "
                  "Ayırt etmenin anahtarı, eylemin **gerçekleşmiş mi istenmiş mi** "
                  "olduğudur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Cümlede Kavramlar"},
        {"tur": "tablo",
         "basliklar": ["Kavram", "Anlamı", "Örnek"],
         "satirlar": [
             ["**Öneri (tavsiye)**", "Bir çözüm ya da yol gösterme",
              "\"Bence bu bölümü yeniden yazmalısın.\""],
             ["**Eleştiri**", "Olumlu ya da olumsuz **değerlendirme**",
              "\"Anlatımı akıcı ama kurgusu zayıf.\""],
             ["**Öz eleştiri**", "Kişinin **kendi** eksiğini görmesi",
              "\"İlk kitabımda çok acele etmişim.\""],
             ["**Yakınma (şikâyet)**", "Bir durumdan **rahatsızlık** bildirme",
              "\"Kimse beni dinlemiyor artık.\""],
             ["**Pişmanlık**", "Geçmişteki davranıştan **duyulan üzüntü**",
              "\"Keşke o teklifi reddetmeseydim.\""],
             ["**Olasılık (ihtimal)**", "**Kesin olmayan** tahmin",
              "\"Bu saatte gelmiş olabilir.\""],
             ["**Tasarı (plan)**", "**Gelecek için** düşünülen iş",
              "\"Yaz tatilinde bir roman yazacağım.\""],
             ["**Hayıflanma**", "Elden kaçana **üzülme**",
              "\"Ne yazık ki fırsatı değerlendiremedim.\""],
         ],
         "oranlar": [0.22, 0.34, 0.44]},
        {"tur": "dikkat", "baslik": "Karıştırılan Kavram Çiftleri", "ogeler": [
            "**Eleştiri – öz eleştiri**: eleştiri **başkasına**, öz eleştiri "
            "**kendine** yöneliktir.",
            "**Pişmanlık – hayıflanma**: pişmanlıkta **kişinin kendi yaptığı** bir "
            "davranış vardır; hayıflanmada **elde olmayan** bir kayıp söz konusudur.",
            "**Olasılık – tasarı**: olasılık **tahmin** bildirir (\"gelmiş olabilir\"), "
            "tasarı **kesin niyet** bildirir (\"gideceğim\").",
            "**Öneri – eleştiri**: öneri **yol gösterir** (\"şöyle yapmalısın\"), "
            "eleştiri **değerlendirir** (\"şöyle olmuş\").",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Cümleden çıkarılabilecek yargı",
         "aciklama": "\"Bu cümleden aşağıdakilerden hangisi **çıkarılamaz**?\" "
                     "sorularında amaç, cümlenin **söylediğiyle söylemediğini** "
                     "ayırmaktır. Cümlede olmayan bir bilgi eklenmişse o seçenek "
                     "çıkarılamaz.",
         "ciz": S.akis(
             ["Cümleyi oku", "Kendi cümlenle özetle", "Seçenekleri karşılaştır",
              "Fazla bilgiyi ele"],
             ["yavaş ve\n**tam** oku", "ne söylüyor,\nne söylemiyor",
              "her seçeneği cümleye\n**geri sor**",
              "cümlede **olmayan**\nbilgi varsa çıkarılamaz"])},
        {"tur": "tuzak", "baslik": "Aşırı Yorum Tuzağı", "govde":
            "\"Yazar, son romanında köy yaşamını anlatıyor.\" cümlesinden "
            "**\"Yazar köyde doğmuştur\"** sonucu **çıkarılamaz**. Cümle yalnızca "
            "romanın konusunu söyler; yazarın hayatı hakkında bilgi vermez. "
            "Çıkarım sorularında en sık düşülen tuzak, **cümlenin söylemediğini "
            "söylemiş gibi** kabul etmektir. Ölçüt şudur: **seçenekteki bilgi cümlede "
            "var mı?**"},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Anlatım Biçimi ve Cümle Yorumu"},
        {"tur": "tablo",
         "basliklar": ["Kavram", "Açıklaması", "Örnek"],
         "satirlar": [
             ["**Doğrudan anlatım**",
              "Sözün **aynen aktarılması**; tırnak işareti kullanılır",
              "Öğretmen, \"Yarın sınav var.\" dedi."],
             ["**Dolaylı anlatım**",
              "Sözün **anlatıcının ağzından** aktarılması",
              "Öğretmen, ertesi gün sınav olduğunu söyledi."],
             ["**Üslup (biçem)**",
              "**Nasıl anlatıldığı**: dil, cümle yapısı, sözcük seçimi",
              "\"Kısa cümlelerle, yalın bir dille yazmış.\""],
             ["**İçerik (öz)**",
              "**Ne anlatıldığı**: konu, tema, düşünce",
              "\"Yoksulluğu ve göçü işlemiş.\""],
         ],
         "oranlar": [0.22, 0.40, 0.38]},
        {"tur": "taktik", "baslik": "Üslup mu İçerik mi Sorusu", "govde":
            "Sorularda \"Bu cümlede yazarın **üslubuyla** ilgili bir yargı vardır\" "
            "denirse, cümlede **nasıl yazdığına** dair ifade aranır: sade, ağır, akıcı, "
            "kısa cümleli, betimlemeli... **İçerik** ise **ne yazdığıyla** ilgilidir: "
            "konu, kişiler, olay. Kısaca: **üslup biçimdir, içerik özdür**."},
        {"tur": "cozum",
         "baslik": "Öznel–Nesnel ve Kavram Belirleme",
         "soru": "\"**Yazarın 250 sayfalık bu romanı, okuru bir an bile sıkmayan akıcı "
                 "bir dille yazılmış; ancak sonu biraz aceleye getirilmiş.**\" "
                 "cümlesini inceleyiniz.",
         "adimlar": [
             "**\"250 sayfalık\"** → sayılabilir, doğrulanabilir → **nesnel**.",
             "**\"okuru bir an bile sıkmayan akıcı bir dil\"** → kişisel değerlendirme "
             "→ **öznel**, **olumlu eleştiri**.",
             "**\"sonu biraz aceleye getirilmiş\"** → kişisel değerlendirme → "
             "**öznel**, **olumsuz eleştiri**.",
             "\"Akıcı dil\" ifadesi **nasıl yazıldığını** anlatır → **üslupla** ilgilidir.",
         ],
         "sonuc": "Cümlede **hem nesnel hem öznel** yargı vardır; ayrıca **olumlu ve "
                  "olumsuz eleştiri birlikte** yapılmıştır. Bu tür cümlelere "
                  "**\"eleştiri\"** denir."},
        {"tur": "cikmis", "baslik": "ÖSYM'nin Sevdiği Soru Kalıbı", "govde":
            "\"Bu parçadaki altı çizili sözle anlatılmak istenen nedir?\" sorularında "
            "**deyimi ya da mecazı çözmen** beklenir. Yöntem şudur: altı çizili sözü "
            "**kendi cümlenle açıkla**, sonra seçeneklerde bu açıklamaya en yakın olanı "
            "seç. Seçenekten cümleye değil, **cümleden seçeneğe** git; tersi seni "
            "yanıltır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Nesnel doğrulanabilir**, **öznel doğrulanamaz**.",
            "**Sayı geçmesi cümleyi nesnel yapmaz**; \"en güzel üç\" özneldir.",
            "Bir cümlede **hem nesnel hem öznel** bölüm bulunabilir.",
            "**Neden geçmişe bakar** (gerçekleşmiş), **amaç geleceğe** (istenen).",
            "**Koşulda -sa/-se** eki aranır.",
            "**Eleştiri başkasına**, **öz eleştiri kendine** yöneliktir.",
            "**Pişmanlıkta kendi davranışı**, **hayıflanmada elde olmayan kayıp** vardır.",
            "**Olasılık tahmin**, **tasarı kesin niyet** bildirir.",
            "Çıkarım sorularında **cümlenin söylemediğini ekleme**.",
            "**Doğrudan anlatımda tırnak** vardır, dolaylıda yoktur.",
            "**Üslup biçimdir (nasıl)**, **içerik özdür (ne)**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde sorular **ayırt etmeyi** ve **kendi örneğini kurmayı** "
            "ölçüyor. Bir kavramı tanımlamak yetmez; **kendi cümleni yaz**. "
            "Çıkarım sorularında ise cevabını yazmadan önce \"bu bilgi cümlede var "
            "mı?\" diye sor.",
        "satir_sayisi": 2,
        "sorular": [
            "Nesnel yargıyı tanımlayarak bir örnek veriniz.",
            "Öznel yargıyı tanımlayarak bir örnek veriniz.",
            "Öznel ve nesnel yargıyı ayırt eden ölçütü yazınız.",
            "'Roman 300 sayfadır' cümlesinin türünü gerekçesiyle yazınız.",
            "'Roman çok sürükleyici' cümlesinin türünü gerekçesiyle yazınız.",
            "Sayı geçen bir cümlenin öznel olabileceğini bir örnekle gösteriniz.",
            "Hem nesnel hem öznel bölüm içeren bir cümle kurunuz.",
            "Neden-sonuç ilişkisini tanımlayarak belirteçlerini yazınız.",
            "Amaç-sonuç ilişkisini tanımlayarak belirteçlerini yazınız.",
            "Neden-sonuç ile amaç-sonucu ayırt eden ölçütü yazınız.",
            "'Hasta olduğu için gelmedi' cümlesindeki ilişkiyi belirleyiniz.",
            "'İyileşmek için ilaç içti' cümlesindeki ilişkiyi belirleyiniz.",
            "Koşul-sonuç ilişkisini tanımlayarak ekini yazınız.",
            "'Çalışırsan başarırsın' cümlesindeki ilişkiyi belirleyiniz.",
            "Karşılaştırma ilişkisinin belirteçlerini yazınız.",
            "Karşılaştırma bildiren bir cümle kurunuz.",
            "Tanım cümlesini tanımlayarak bir örnek veriniz.",
            "Varsayım cümlesinin belirteçlerini yazarak bir örnek veriniz.",
            "Öneri cümlesini tanımlayarak bir örnek veriniz.",
            "Eleştiri cümlesini tanımlayarak bir örnek veriniz.",
            "Öz eleştiri cümlesini tanımlayarak bir örnek veriniz.",
            "Eleştiri ile öz eleştiriyi ayırt eden ölçütü yazınız.",
            "Yakınma cümlesini tanımlayarak bir örnek veriniz.",
            "Pişmanlık cümlesini tanımlayarak bir örnek veriniz.",
            "Hayıflanma cümlesini tanımlayarak bir örnek veriniz.",
            "Pişmanlık ile hayıflanmayı ayırt eden ölçütü yazınız.",
            "Olasılık cümlesini tanımlayarak bir örnek veriniz.",
            "Tasarı cümlesini tanımlayarak bir örnek veriniz.",
            "Olasılık ile tasarıyı ayırt eden ölçütü yazınız.",
            "Öneri ile eleştiriyi ayırt eden ölçütü yazınız.",
            "'Bu cümleden çıkarılamaz' sorularında izlenecek adımları yazınız.",
            "'Yazar son romanında köy yaşamını anlatıyor' cümlesinden yazarın köyde doğduğu çıkarılabilir mi? Nedenini yazınız.",
            "Aşırı yorum tuzağını açıklayınız.",
            "Çıkarım sorularında kullanılacak temel ölçütü yazınız.",
            "Doğrudan anlatımı tanımlayarak bir örnek veriniz.",
            "Dolaylı anlatımı tanımlayarak bir örnek veriniz.",
            "Doğrudan anlatımı dolaylı anlatıma çevirirken nelerin değiştiğini yazınız.",
            "Üslup kavramını tanımlayınız.",
            "İçerik kavramını tanımlayınız.",
            "Üslup ile içeriği ayırt eden ölçütü yazınız.",
            "Üslupla ilgili bir yargı cümlesi kurunuz.",
            "İçerikle ilgili bir yargı cümlesi kurunuz.",
            "'250 sayfalık bu roman akıcı bir dille yazılmış' cümlesini öznel-nesnel bakımından çözümleyiniz.",
            "Aynı cümlede üslupla ilgili ifadeyi belirtiniz.",
            "Olumlu ve olumsuz eleştirinin birlikte yapıldığı bir cümle kurunuz.",
            "Altı çizili sözle anlatılmak isteneni bulma yöntemini yazınız.",
            "Bir cümlede hem koşul hem karşılaştırma bulunabilir mi? Örnekle açıklayınız.",
            "'Keşke' sözcüğüyle başlayan cümlelerin genellikle hangi kavramı bildirdiğini yazınız.",
            "'Belki, olabilir, sanırım' sözcüklerinin hangi kavramı bildirdiğini yazınız.",
            "Bir yazarın kendi eserini değerlendirdiği bir öz eleştiri cümlesi kurunuz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Doğrulanabilir ya da yanlışlanabilir**, kişisel görüş içermeyen yargıdır. \"Türkiye'nin başkenti Ankara'dır.\"",
            "**Doğrulanamayan**, kişisel beğeni ve görüş bildiren yargıdır. \"Ankara'nın havası çok güzeldir.\"",
            "**\"Doğrulanabilir mi?\"** sorusu. Doğrulanabiliyorsa nesnel, kişiden kişiye değişiyorsa özneldir.",
            "**Nesneldir**; sayfa sayısı sayılarak **doğrulanabilir**.",
            "**Özneldir**; \"sürükleyici\" bir **değerlendirmedir** ve kişiden kişiye değişir.",
            "\"Yazarın **en güzel üç romanı** budur.\" — sayı geçse de \"en güzel\" bir değerlendirmedir, cümle **özneldir**.",
            "\"**300 sayfalık** roman (nesnel), **okuru hiç sıkmıyor** (öznel).\"",
            "Bir olayın **başka bir olayı doğurmasıdır**. Belirteçleri: **için, -dığı için, -den, diye, ile**.",
            "Bir eylemin **hangi istekle** yapıldığını bildirir. Belirteçleri: **için, diye, üzere, amacıyla**.",
            "**Eylem gerçekleşmiş mi, isteniyor mu?** Gerçekleşmişse **neden**, isteniyorsa **amaçtır**. Neden geçmişe, amaç geleceğe bakar.",
            "Hastalık **gerçekleşmiş** bir durumdur ve gelmemeyi doğurmuştur → **neden-sonuç**.",
            "İyileşmek **henüz gerçekleşmemiş**, istenen bir durumdur → **amaç-sonuç**.",
            "Bir eylemin gerçekleşmesinin **başka bir eyleme bağlanmasıdır**. Eki: **-sa / -se** (ayrıca ise, takdirde).",
            "\"-sa\" eki vardır; başarı çalışmaya **bağlanmıştır** → **koşul-sonuç**.",
            "**gibi, kadar, göre, daha, en, ise**.",
            "\"Bu kitap **öncekinden daha** akıcı.\"",
            "Bir kavramın **\"nedir?\"** sorusuna cevap verecek biçimde açıklanmasıdır. \"Roman, olay örgüsüne dayanan uzun anlatıdır.\"",
            "**tut ki, diyelim ki, farz et, düşün ki**. \"**Diyelim ki** sınavı kazandın.\"",
            "Bir çözüm ya da yol gösterme bildirir. \"Bence bu bölümü yeniden yazmalısın.\"",
            "Bir şeyin **olumlu ya da olumsuz yönlerini değerlendirmedir**. \"Anlatımı akıcı ama kurgusu zayıf.\"",
            "Kişinin **kendi eksiğini ya da hatasını** görüp söylemesidir. \"İlk kitabımda çok acele etmişim.\"",
            "**Yöneldiği kişi**. Eleştiri **başkasına**, öz eleştiri **kendine** yöneliktir.",
            "Bir durumdan duyulan **rahatsızlığı** dile getirmektir. \"Kimse beni dinlemiyor artık.\"",
            "Geçmişte **kendi yaptığı** bir davranıştan duyulan üzüntüdür. \"Keşke o teklifi reddetmeseydim.\"",
            "**Elde olmayan** bir kayba üzülmedir. \"Ne yazık ki fırsatı değerlendiremedim.\"",
            "**Pişmanlıkta kişinin kendi yaptığı bir davranış** vardır; **hayıflanmada elde olmayan bir kayıp** söz konusudur.",
            "**Kesin olmayan bir tahmin** bildirir. \"Bu saatte gelmiş olabilir.\"",
            "**Gelecek için düşünülen, niyet edilen** iştir. \"Yaz tatilinde bir roman yazacağım.\"",
            "**Olasılık tahmin** bildirir ve kesinlik taşımaz; **tasarı kesin bir niyet** bildirir.",
            "**Öneri yol gösterir** (\"şöyle yapmalısın\"); **eleştiri değerlendirir** (\"şöyle olmuş\").",
            "**1)** Cümleyi yavaş ve tam oku. **2)** Kendi cümlenle özetle. **3)** Her seçeneği cümleye geri sor. **4)** Cümlede olmayan bilgi içeren seçeneği ele.",
            "**Çıkarılamaz**. Cümle yalnızca **romanın konusunu** söyler; yazarın nerede doğduğu hakkında hiçbir bilgi vermez.",
            "Cümlenin **söylemediği bir bilgiyi söylemiş gibi kabul etmektir**. Çıkarım sorularında en sık düşülen tuzaktır.",
            "**\"Seçenekteki bilgi cümlede var mı?\"** Yoksa o seçenek çıkarılamaz.",
            "Sözün **aynen, olduğu gibi** aktarılmasıdır; **tırnak işareti** kullanılır. Öğretmen, \"Yarın sınav var.\" dedi.",
            "Sözün **anlatıcının kendi ağzından** aktarılmasıdır; tırnak kullanılmaz. Öğretmen, ertesi gün sınav olduğunu söyledi.",
            "**Tırnak işareti kalkar**, **kişi ve zaman ekleri değişir** (yarın → ertesi gün), yüklem **-dığını / -acağını** biçimine döner.",
            "Yazarın **nasıl anlattığıdır**: dil, cümle yapısı, sözcük seçimi, anlatım biçimi.",
            "Yazarın **ne anlattığıdır**: konu, tema, olay, kişiler, düşünce.",
            "**Üslup biçimdir (nasıl)**, **içerik özdür (ne)**.",
            "\"Kısa cümlelerle, yalın bir dille yazmış.\"",
            "\"Yoksulluğu ve köyden kente göçü işlemiş.\"",
            "**\"250 sayfalık\"** doğrulanabilir → **nesnel**. **\"akıcı bir dille yazılmış\"** kişisel değerlendirme → **öznel**.",
            "**\"Akıcı bir dille yazılmış\"** — bu ifade **nasıl yazıldığını** anlatır, yani **üslupla** ilgilidir.",
            "\"Anlatımı akıcı ve sürükleyici ama sonu aceleye getirilmiş.\"",
            "Altı çizili sözü **kendi cümlenle açıkla**, sonra seçeneklerde bu açıklamaya en yakın olanı seç. **Cümleden seçeneğe** git, tersi değil.",
            "**Bulunabilir**: \"Çok çalışırsan bu sınavı **öncekinden daha** kolay geçersin.\" — \"-sa\" koşul, \"daha\" karşılaştırma bildirir.",
            "**Pişmanlık** (ya da hayıflanma). \"Keşke\" geçmişe dönük bir üzüntü bildirir.",
            "**Olasılık (ihtimal)**. Bu sözcükler kesinlik taşımayan tahmin bildirir.",
            "\"İlk romanımda karakterleri yeterince derinleştirememişim; bunu şimdi daha iyi görüyorum.\"",
        ],
    },
}
