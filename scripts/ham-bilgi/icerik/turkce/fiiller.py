"""TYT Türkçe — Fiiller (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: FİİLLER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Fiiller",
    "alt_baslik": "Ham bilgi notu — anlam ve kip, haber ve dilek kipleri, çatı ve ek "
                  "fiil; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Fiiller",
        "kazanimlar": "Fiilleri anlamına göre sınıflandırır. "
                      "Haber ve dilek kiplerini tanır. "
                      "Fiilde çatıyı belirler. "
                      "Ek fiili ve işlevlerini bilir.",
        "kapsam": "Kılış, durum ve oluş fiilleri; haber kipleri (görülen geçmiş, "
                  "öğrenilen geçmiş, şimdiki, gelecek, geniş zaman); dilek kipleri "
                  "(gereklilik, şart, istek, emir); bileşik zamanlı fiiller; fiilde "
                  "çatı (özne-nesne yönünden); ek fiil; anlam kayması, 50 analiz sorusu",
        "nasil": "Fiiller konusu **üç ayrı katmandan** oluşur: **anlam** (kılış-durum-"
                 "oluş), **kip** (haber-dilek) ve **çatı** (özne-nesne). Her soruda "
                 "hangi katmanın sorulduğunu belirle; üçünü karıştırmak en yaygın "
                 "hatadır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de fiillerden gelen soru genellikle **çatı belirleme**, "
                    "**kip kayması** ya da **ek fiil** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Anlamına Göre Fiiller"},
        {"tur": "gorsel", "baslik": "Şema 1 — Üç fiil türü",
         "aciklama": "Ayrım için iki soru yeter: **\"Neyi?\" sorusu cevap alıyor mu** "
                     "ve **özne isteyerek mi yapıyor?** Bu iki soru üç türü birbirinden "
                     "ayırır.",
         "ciz": S.karsilastirma(
             "KILIŞ fiili",
             ["Özne **isteyerek** yapar",
              "**Nesne alır** (\"neyi?\" sorusu cevaplanır)",
              "Eylem **başkasına** yönelir",
              "**yazmak, kırmak, atmak, okumak**",
              "\"Camı kırdı\" → neyi? camı"],
             "DURUM fiili",
             ["Özne **isteyerek** yapar",
              "**Nesne almaz**",
              "Eylem **öznenin kendisinde** kalır",
              "**koşmak, oturmak, uyumak, gülmek**",
              "\"Çocuk koştu\" → neyi koştu? (yok)"],
             "OLUŞ fiili",
             ["Özne **isteği dışında** değişir",
              "**Nesne almaz**",
              "Kendiliğinden bir **değişim** olur",
              "**büyümek, sararmak, paslanmak, uzamak**",
              "\"Yapraklar sarardı\""])},
        {"tur": "taktik", "baslik": "Üç Fiili Ayırmanın İki Sorusu", "govde":
            "**Birinci soru: \"Neyi?\" sorusu cevap alıyor mu?** Alıyorsa **kılış** "
            "fiilidir. **İkinci soru: Özne bunu isteyerek mi yapıyor?** İsteyerek "
            "yapıyorsa **durum**, kendiliğinden oluyorsa **oluş** fiilidir. "
            "\"Sarardı\" fiilini kimse isteyerek yapmaz; bu yüzden oluş fiilidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kipler"},
        {"tur": "tablo",
         "basliklar": ["Haber (bildirme) kipleri", "Eki", "Örnek"],
         "satirlar": [
             ["**Görülen (bilinen) geçmiş zaman**", "**-dı, -di, -du, -dü**", "gel**di**"],
             ["**Öğrenilen (duyulan) geçmiş zaman**", "**-mış, -miş, -muş, -müş**", "gel**miş**"],
             ["**Şimdiki zaman**", "**-yor**", "gel**iyor**"],
             ["**Gelecek zaman**", "**-acak, -ecek**", "gel**ecek**"],
             ["**Geniş zaman**", "**-r, -ar, -er**", "gel**ir**"],
         ],
         "oranlar": [0.44, 0.28, 0.28]},
        {"tur": "tablo",
         "basliklar": ["Dilek (tasarlama) kipleri", "Eki", "Örnek"],
         "satirlar": [
             ["**Gereklilik kipi**", "**-malı, -meli**", "gel**meli**"],
             ["**Şart (koşul) kipi**", "**-sa, -se**", "gel**se**"],
             ["**İstek kipi**", "**-a, -e**", "gel**e**"],
             ["**Emir kipi**", "**Eki yoktur**", "gel, gel**sin**"],
         ],
         "oranlar": [0.44, 0.28, 0.28]},
        {"tur": "dikkat", "baslik": "Kiplerle İlgili Dört Kural", "ogeler": [
            "**Haber kipleri zaman bildirir**; **dilek kipleri zaman bildirmez**, "
            "yalnızca bir **istek, koşul, gereklilik ya da buyruk** anlatır.",
            "**Emir kipinin eki yoktur**; birinci tekil ve çoğul kişide **çekimi de "
            "yoktur** (\"gel\" denir ama \"ben gel\" denmez).",
            "**Bileşik zamanlı fiil**: bir fiilin **iki kip eki** alması. "
            "\"gel**iyor**du\" → şimdiki zamanın hikâyesi.",
            "**Bileşik zaman üç türlüdür**: **hikâye (-dı)**, **rivayet (-mış)**, "
            "**şart (-sa)**. \"gelecekti\", \"gelirmiş\", \"gelseydi\".",
        ]},
        {"tur": "tuzak", "baslik": "Kip Kayması (Anlam Kayması)", "govde":
            "Bir fiil, **taşıdığı kip ekinin dışında bir zamanı** anlatabilir. "
            "\"Yarın Ankara'ya **gidiyorum**\" cümlesinde **şimdiki zaman eki** vardır "
            "ama anlam **gelecek zamandır**. Buna **kip (zaman) kayması** denir. "
            "Sorularda \"Bu cümlede fiil hangi kipte çekimlenmiş ama hangi anlamda "
            "kullanılmıştır?\" biçiminde sorulur; **ek ile anlamı ayrı ayrı** "
            "belirlemek gerekir."},
        {"tur": "cozum",
         "baslik": "Kip ve Anlam Belirleme",
         "soru": "Aşağıdaki cümlelerde fiilin kipini ve taşıdığı anlamı ayrı ayrı "
                 "belirleyiniz.\n"
                 "**I.** \"Her sabah yedide **kalkarım**.\"\n"
                 "**II.** \"Yarın seninle **buluşuyoruz**.\"\n"
                 "**III.** \"Fatih, İstanbul'u 1453'te **alır**.\"",
         "adimlar": [
             "**I.** Ek: **-r** → **geniş zaman**. Anlam: alışkanlık bildiriyor → "
             "**kayma yok**.",
             "**II.** Ek: **-yor** → **şimdiki zaman**. Anlam: \"yarın\" denmiş → "
             "**gelecek zaman** → **kayma var**.",
             "**III.** Ek: **-r** → **geniş zaman**. Anlam: 1453 denmiş → **görülen "
             "geçmiş zaman** → **kayma var**.",
         ],
         "sonuc": "**II ve III'te kip kayması vardır.** Ek bir zamanı gösterirken "
                  "cümlenin anlamı başka bir zamanı işaret etmektedir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Fiilde Çatı"},
        {"tur": "gorsel", "baslik": "Şema 2 — Çatı iki yönden incelenir",
         "aciklama": "Çatı sorularında önce **hangi yönden sorulduğunu** belirle. "
                     "Özne yönünden çatı için **\"eylemi kim yapıyor?\"**, nesne "
                     "yönünden çatı için **\"neyi?\" sorusu cevap alıyor mu?**",
         "ciz": S.karsilastirma(
             "ÖZNE yönünden çatı",
             ["**Etken**: özne eylemi **kendisi yapar** (Ali kapıyı açtı)",
              "**Edilgen**: özne eylemden **etkilenir**, yapan belli değil (Kapı açıldı)",
              "**Dönüşlü**: özne eylemi **kendine** yapar (Çocuk yıkandı)",
              "**İşteş**: eylem **karşılıklı ya da birlikte** yapılır (Bakıştılar)"],
             "NESNE yönünden çatı",
             ["**Geçişli**: **nesne alır** (\"neyi?\" cevaplanır) — Kitabı okudu",
              "**Geçişsiz**: **nesne almaz** — Çocuk uyudu",
              "**Oldurgan**: geçişsiz fiil **geçişli** yapılmıştır — uyudu → uyut**tu**",
              "**Ettirgen**: geçişli fiil **daha da geçişli** yapılmıştır — okudu → okut**tu**"],
             "Sınama",
             ["Özne için: **\"eylemi kim yaptı?\"**",
              "Nesne için: **\"neyi, kimi?\"**",
              "**Edilgende özne, sözde öznedir**"])},
        {"tur": "tuzak", "baslik": "Edilgen Çatıda Gerçek Özne Yoktur", "govde":
            "\"**Kapı açıldı**\" cümlesinde \"kapı\" **özne gibi görünür** ama eylemi "
            "yapan değildir; **eylemden etkilenendir**. Buna **sözde özne** denir. "
            "Edilgen çatının işareti **-l ve -n** ekleridir: \"yaz**ıl**dı\", "
            "\"gör**ün**dü\". Ayırt etmek için sor: **\"Bu işi kim yaptı?\"** "
            "Cevap cümlede yoksa çatı **edilgendir**."},
        {"tur": "cozum",
         "baslik": "Çatı Belirleme",
         "soru": "Aşağıdaki cümlelerin çatısını **özne ve nesne** yönünden "
                 "belirleyiniz.\n"
                 "**I.** \"Öğretmen ödevleri okudu.\"\n"
                 "**II.** \"Ödevler okundu.\"\n"
                 "**III.** \"Çocuk aynada uzun uzun bakındı.\"\n"
                 "**IV.** \"İki arkadaş kucaklaştı.\"",
         "adimlar": [
             "**I.** Eylemi öğretmen yapıyor → **etken**. \"Neyi okudu?\" → ödevleri → "
             "**geçişli**.",
             "**II.** Yapan belli değil, \"ödevler\" etkilenen → **edilgen**. "
             "Nesne yok (\"ödevler\" sözde özne) → **geçişsiz**.",
             "**III.** Eylem öznenin kendisine dönüyor → **dönüşlü**. Nesne yok → "
             "**geçişsiz**.",
             "**IV.** Eylem karşılıklı yapılıyor → **işteş**. Nesne yok → "
             "**geçişsiz**.",
         ],
         "sonuc": "**I: etken-geçişli**, **II: edilgen-geçişsiz**, **III: dönüşlü-"
                  "geçişsiz**, **IV: işteş-geçişsiz**. Her cümle **iki yönden birden** "
                  "incelenir."},
        {"tur": "dikkat", "baslik": "Oldurgan ile Ettirgen Ayrımı", "ogeler": [
            "**Oldurgan**: **geçişsiz** bir fiil, **-r, -t, -dır** ekleriyle "
            "**geçişli** hâle getirilir. \"uyu**mak**\" (geçişsiz) → \"uyu**t**mak\" "
            "(geçişli).",
            "**Ettirgen**: **zaten geçişli** olan fiil, aynı eklerle **bir kat daha "
            "geçişli** yapılır. \"oku**mak**\" (geçişli) → \"oku**t**mak\" (ettirgen).",
            "Ayırt etmek için sor: **\"Fiil ek almadan önce geçişli miydi?\"** "
            "Geçişsizse **oldurgan**, geçişliyse **ettirgendir**.",
            "**Ettirgenlik katlanabilir**: \"okut**tur**mak\", \"yazdır**t**mak\".",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Ek Fiil"},
        {"tur": "formul",
         "baslik": "Ek fiilin dört çekimi",
         "ifade": "**Görülen geçmiş zaman:  -idi**    → öğretmen**di**, güzel**di**\n"
                  "**Öğrenilen geçmiş zaman: -imiş**  → öğretmen**miş**, güzel**miş**\n"
                  "**Şart:                  -ise**    → öğretmen**se**, güzel**se**\n"
                  "**Geniş zaman:           -dir**    → öğretmen**dir**, güzel**dir**",
         "terimler": [
             ("Birinci görev", "**İsim soylu sözcükleri yüklem yapar**"),
             ("İkinci görev", "**Basit zamanlı fiilleri bileşik zamanlı yapar**"),
             ("Yazımı", "Genellikle **bitişik** yazılır ama **ayrı da yazılabilir**"),
             ("Bulma yolu", "Sözcüğü **\"-dır\" ile bitirebiliyorsan** ek fiil vardır"),
         ],
         "not": "**Ek fiilin iki görevi vardır.** İsim soylu bir sözcüğe gelirse onu "
                "**yüklem yapar** (\"O, öğretmendi\"); bir fiile gelirse onu **bileşik "
                "zamanlı** yapar (\"geliyordu\"). Hangi görevde olduğunu, geldiği "
                "sözcüğün türü belirler."},
        {"tur": "cozum",
         "baslik": "Ek Fiil Belirleme",
         "soru": "Aşağıdaki cümlelerde ek fiili bulup görevini belirleyiniz.\n"
                 "**I.** \"Babam eskiden öğretmendi.\"\n"
                 "**II.** \"Çocuk bahçede oynuyordu.\"\n"
                 "**III.** \"Hava çok güzelmiş.\"",
         "adimlar": [
             "**I.** \"öğretmen\" + **-di** → isim soylu sözcüğü **yüklem yapmış** → "
             "ek fiilin **görülen geçmiş zamanı**.",
             "**II.** \"oynuyor\" (şimdiki zaman) + **-du** → fiili **bileşik zamanlı "
             "yapmış** → şimdiki zamanın **hikâyesi**.",
             "**III.** \"güzel\" + **-miş** → sıfatı **yüklem yapmış** → ek fiilin "
             "**öğrenilen geçmiş zamanı**.",
         ],
         "sonuc": "**I ve III'te ek fiil yüklem yapmış**, **II'de bileşik zaman "
                  "kurmuştur**. Görev, ek fiilin **geldiği sözcüğün türüne** göre "
                  "değişir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Kılış**: nesne alır. **Durum**: almaz, isteyerek. **Oluş**: almaz, "
            "kendiliğinden.",
            "**Haber kipleri zaman bildirir**, **dilek kipleri bildirmez**.",
            "**Beş haber kipi**: görülen geçmiş, öğrenilen geçmiş, şimdiki, gelecek, "
            "geniş.",
            "**Dört dilek kipi**: gereklilik, şart, istek, emir.",
            "**Emir kipinin eki yoktur**, **1. kişide çekimi de yoktur**.",
            "**Bileşik zaman**: hikâye (-dı), rivayet (-mış), şart (-sa).",
            "**Kip kaymasında ek bir zaman, anlam başka bir zaman** gösterir.",
            "**Etken-edilgen-dönüşlü-işteş** özne yönünden çatıdır.",
            "**Geçişli-geçişsiz-oldurgan-ettirgen** nesne yönünden çatıdır.",
            "**Edilgende sözde özne** vardır; \"kim yaptı?\" sorusu cevapsız kalır.",
            "**Oldurgan geçişsizi geçişli yapar**, **ettirgen geçişliyi daha geçişli**.",
            "**Ek fiil ya yüklem yapar ya bileşik zaman kurar.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruda **hangi katmanın sorulduğunu** belirle: anlam mı, "
            "kip mi, çatı mı? Çatı sorularında iki yönden birden inceleme alışkanlığı "
            "kazan; sınavda genellikle ikisi birden sorulur.",
        "satir_sayisi": 2,
        "sorular": [
            "Fiilleri anlamına göre üçe ayırarak tanımlayınız.",
            "Kılış fiilini tanımlayarak üç örnek veriniz.",
            "Durum fiilini tanımlayarak üç örnek veriniz.",
            "Oluş fiilini tanımlayarak üç örnek veriniz.",
            "Üç fiil türünü ayıran iki soruyu yazınız.",
            "'Sarardı' fiilinin türünü gerekçesiyle yazınız.",
            "'Kırdı' fiilinin türünü gerekçesiyle yazınız.",
            "'Uyudu' fiilinin türünü gerekçesiyle yazınız.",
            "Haber kiplerini eklerdiyle birlikte yazınız.",
            "Dilek kiplerini ekleriyle birlikte yazınız.",
            "Haber ve dilek kiplerini ayıran ölçütü yazınız.",
            "Emir kipinin iki özelliğini yazınız.",
            "Bileşik zamanlı fiili tanımlayınız.",
            "Bileşik zamanın üç türünü örnekleriyle yazınız.",
            "'Geliyordu' fiilinin bileşik zaman türünü yazınız.",
            "'Gelirmiş' fiilinin bileşik zaman türünü yazınız.",
            "'Gelseydi' fiilinin bileşik zaman türünü yazınız.",
            "Kip kaymasını tanımlayınız.",
            "'Her sabah yedide kalkarım' cümlesinde kip ve anlamı belirleyiniz.",
            "'Yarın seninle buluşuyoruz' cümlesinde kip ve anlamı belirleyiniz.",
            "'Fatih, İstanbul'u 1453'te alır' cümlesinde kip ve anlamı belirleyiniz.",
            "Çatının hangi iki yönden incelendiğini yazınız.",
            "Etken çatıyı tanımlayarak bir örnek veriniz.",
            "Edilgen çatıyı tanımlayarak bir örnek veriniz.",
            "Edilgen çatının eklerini yazınız.",
            "Sözde özneyi tanımlayarak bir örnek veriniz.",
            "Edilgen çatıyı belirlemek için sorulacak soruyu yazınız.",
            "Dönüşlü çatıyı tanımlayarak bir örnek veriniz.",
            "İşteş çatıyı tanımlayarak bir örnek veriniz.",
            "Geçişli fiili tanımlayarak bir örnek veriniz.",
            "Geçişsiz fiili tanımlayarak bir örnek veriniz.",
            "Geçişliliği belirlemek için sorulacak soruyu yazınız.",
            "Oldurgan fiili tanımlayarak bir örnek veriniz.",
            "Ettirgen fiili tanımlayarak bir örnek veriniz.",
            "Oldurgan ile ettirgeni ayıran soruyu yazınız.",
            "'Uyuttu' fiilinin oldurgan mı ettirgen mi olduğunu gerekçesiyle yazınız.",
            "'Okuttu' fiilinin oldurgan mı ettirgen mi olduğunu gerekçesiyle yazınız.",
            "Ettirgenliğin katlanabileceğini bir örnekle gösteriniz.",
            "'Öğretmen ödevleri okudu' cümlesinin çatısını iki yönden belirleyiniz.",
            "'Ödevler okundu' cümlesinin çatısını iki yönden belirleyiniz.",
            "'Çocuk aynada bakındı' cümlesinin çatısını iki yönden belirleyiniz.",
            "'İki arkadaş kucaklaştı' cümlesinin çatısını iki yönden belirleyiniz.",
            "Ek fiili tanımlayarak iki görevini yazınız.",
            "Ek fiilin dört çekimini yazınız.",
            "Ek fiilin yazımı hakkında bilgi veriniz.",
            "'Babam eskiden öğretmendi' cümlesinde ek fiilin görevini yazınız.",
            "'Çocuk bahçede oynuyordu' cümlesinde ek fiilin görevini yazınız.",
            "'Hava çok güzelmiş' cümlesinde ek fiilin görevini yazınız.",
            "Ek fiilin görevini neyin belirlediğini yazınız.",
            "Kendi kurduğunuz bir cümlede etken-geçişli, başka bir cümlede edilgen-geçişsiz çatı kullanınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Kılış**: özne isteyerek yapar, nesne alır. **Durum**: özne isteyerek yapar, nesne almaz. **Oluş**: özne isteği dışında değişir, nesne almaz.",
            "Özne tarafından **isteyerek yapılan** ve **nesne alan** fiillerdir: **yazmak, kırmak, okumak**.",
            "Özne tarafından **isteyerek yapılan** ama **nesne almayan** fiillerdir: **koşmak, oturmak, uyumak**.",
            "Öznede **isteği dışında bir değişim** bildiren fiillerdir: **büyümek, sararmak, paslanmak**.",
            "**1)** \"Neyi?\" sorusu cevap alıyor mu? Alıyorsa **kılış**. **2)** Özne isteyerek mi yapıyor? İsteyerek yapıyorsa **durum**, kendiliğinden oluyorsa **oluş**.",
            "**Oluş fiilidir**; nesne almaz ve özne bu değişimi **isteyerek yapmaz**.",
            "**Kılış fiilidir**; \"Neyi kırdı?\" sorusu cevap alır, nesne alır.",
            "**Durum fiilidir**; nesne almaz ama özne bu eylemi **isteyerek** yapar.",
            "**Görülen geçmiş (-dı)**, **öğrenilen geçmiş (-mış)**, **şimdiki (-yor)**, **gelecek (-acak)**, **geniş zaman (-r)**.",
            "**Gereklilik (-malı)**, **şart (-sa)**, **istek (-a)**, **emir (eki yok)**.",
            "**Haber kipleri zaman bildirir**; **dilek kipleri zaman bildirmez**, yalnızca istek, koşul, gereklilik ya da buyruk anlatır.",
            "**1)** Eki yoktur. **2)** Birinci tekil ve çoğul kişide **çekimi yoktur** (\"ben gel\" denmez).",
            "Bir fiilin **iki kip eki** almasıdır; ikinci ek **ek fiildir**.",
            "**Hikâye (-dı)**: geliyor**du**. **Rivayet (-mış)**: gelir**miş**. **Şart (-sa)**: gelecek**se**.",
            "**Şimdiki zamanın hikâyesi**.",
            "**Geniş zamanın rivayeti**.",
            "**Şartın hikâyesi** (dilek-şart kipinin hikâyesi).",
            "Bir fiilin, **taşıdığı kip ekinin dışında bir zamanı anlatmasıdır**.",
            "Ek: **-r** → geniş zaman. Anlam: **alışkanlık** bildiriyor → **kayma yok**.",
            "Ek: **-yor** → şimdiki zaman. Anlam: **gelecek zaman** (\"yarın\") → **kayma var**.",
            "Ek: **-r** → geniş zaman. Anlam: **görülen geçmiş zaman** (1453) → **kayma var**.",
            "**Özne yönünden** ve **nesne yönünden**.",
            "Öznenin eylemi **kendisinin yaptığı** çatıdır: \"**Ali** kapıyı açtı.\"",
            "Öznenin eylemden **etkilendiği**, eylemi yapanın belli olmadığı çatıdır: \"Kapı **açıldı**.\"",
            "**-l** ve **-n**: \"yaz**ıl**dı\", \"gör**ün**dü\".",
            "Edilgen çatılı cümlede **özne gibi görünen ama eylemi yapmayan** ögedir: \"**Kapı** açıldı.\"",
            "**\"Bu işi kim yaptı?\"** Cevap cümlede yoksa çatı **edilgendir**.",
            "Öznenin eylemi **kendisine yaptığı** çatıdır: \"Çocuk **yıkandı**.\"",
            "Eylemin **karşılıklı ya da birlikte** yapıldığı çatıdır: \"İki arkadaş **bakıştı**.\"",
            "**Nesne alan** fiillerdir; \"neyi, kimi?\" sorusu cevap alır: \"Kitabı **okudu**.\"",
            "**Nesne almayan** fiillerdir: \"Çocuk **uyudu**.\"",
            "**\"Neyi? Kimi?\"** Cevap alınıyorsa geçişli, alınmıyorsa geçişsizdir.",
            "**Geçişsiz** bir fiilin **-r, -t, -dır** ekleriyle **geçişli** hâle getirilmesidir: uyumak → **uyutmak**.",
            "**Zaten geçişli** olan fiilin aynı eklerle **bir kat daha geçişli** yapılmasıdır: okumak → **okutmak**.",
            "**\"Fiil ek almadan önce geçişli miydi?\"** Geçişsizse **oldurgan**, geçişliyse **ettirgendir**.",
            "**Oldurgandır**; \"uyumak\" fiili **geçişsizdi**, ek alarak geçişli hâle gelmiştir.",
            "**Ettirgendir**; \"okumak\" fiili **zaten geçişliydi**, ek alarak bir kat daha geçişli olmuştur.",
            "**okut** → **okuttur** → **okutturt**: her ek bir kat daha ettirgenlik katar.",
            "**Etken** (eylemi öğretmen yapıyor) ve **geçişli** (\"neyi okudu?\" → ödevleri).",
            "**Edilgen** (yapan belli değil) ve **geçişsiz** (nesne yok, \"ödevler\" sözde özne).",
            "**Dönüşlü** (eylem özneye dönüyor) ve **geçişsiz** (nesne yok).",
            "**İşteş** (eylem karşılıklı) ve **geçişsiz** (nesne yok).",
            "İsim soylu sözcüklere ve fiillere gelen ektir. **1)** İsim soylu sözcüğü **yüklem yapar**. **2)** Basit zamanlı fiili **bileşik zamanlı yapar**.",
            "**-idi** (öğretmendi), **-imiş** (öğretmenmiş), **-ise** (öğretmense), **-dir** (öğretmendir).",
            "Genellikle **bitişik** yazılır ama **ayrı da yazılabilir**: \"güzeldi\" / \"güzel idi\".",
            "İsim soylu \"öğretmen\" sözcüğünü **yüklem yapmıştır**; ek fiilin görülen geçmiş zamanıdır.",
            "\"Oynuyor\" fiilini **bileşik zamanlı yapmıştır**; şimdiki zamanın hikâyesidir.",
            "\"Güzel\" sıfatını **yüklem yapmıştır**; ek fiilin öğrenilen geçmiş zamanıdır.",
            "**Geldiği sözcüğün türü**: isim soylu bir sözcüğe gelirse yüklem yapar, fiile gelirse bileşik zaman kurar.",
            "**Etken-geçişli**: \"Öğrenciler soruları çözdü.\" **Edilgen-geçişsiz**: \"Sorular çözüldü.\"",
        ],
    },
}
