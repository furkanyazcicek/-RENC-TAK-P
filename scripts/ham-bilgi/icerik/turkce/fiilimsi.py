"""TYT Türkçe — Fiilimsi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: FİİLİMSİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Fiilimsi",
    "alt_baslik": "Ham bilgi notu — isim-fiil, sıfat-fiil, zarf-fiil ve cümledeki "
                  "görevleri; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Fiilimsi",
        "kazanimlar": "Fiilimsileri tanır ve türlerini ayırt eder. "
                      "Fiilimsi eklerini bilir. "
                      "Fiilimsinin cümledeki görevini belirler. "
                      "Fiilimsi ile çekimli fiili ayırt eder.",
        "kapsam": "İsim-fiil (-ma, -ış, -mak), sıfat-fiil (-an, -ası, -mez, -ar, -dik, "
                  "-ecek, -miş), zarf-fiil (-ip, -arak, -ince, -ken, -madan, -dıkça...); "
                  "fiilimsinin görevleri, yan cümlecik kurma, kalıplaşmış fiilimsiler, "
                  "50 analiz sorusu",
        "nasil": "Fiilimsi, **fiilden türeyen ama çekimlenemeyen** sözcüktür. "
                 "Tanımak için tek soru yeter: **\"Bu sözcük fiilden mi geldi ve "
                 "yüklem olabilir mi?\"** Fiilden gelmiş ama yüklem olamıyorsa "
                 "**fiilimsidir**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Fiilimsi, **cümlenin yapısı** konusunun anahtarıdır: fiilimsi "
                    "olan cümle **girişik birleşik cümledir**.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Fiilimsi Nedir?"},
        {"tur": "tanim", "kavram": "Fiilimsi (eylemsi)",
         "aciklama": "**Fiilden türeyen** ama **çekimlenemeyen**, cümlede **isim, "
                     "sıfat ya da zarf görevinde** kullanılan sözcüklerdir. "
                     "Fiil anlamı taşırlar ama **yüklem olamazlar**; yüklem olurlarsa "
                     "artık fiilimsi değil, **çekimli fiil** sayılırlar."},
        {"tur": "gorsel", "baslik": "Şema 1 — Fiilimsi ile çekimli fiilin farkı",
         "aciklama": "İkisi de fiilden gelir ama **birinin kip ve kişi eki vardır, "
                     "diğerinin yoktur**. Bu tek fark, ikisini kesin olarak ayırır.",
         "ciz": S.karsilastirma(
             "FİİLİMSİ",
             ["**Kip ve kişi eki almaz**",
              "**Yüklem olamaz**",
              "İsim, sıfat ya da **zarf görevinde**",
              "**Yan cümlecik** kurar",
              "gel**en**, oku**mak**, koş**arak**"],
             "ÇEKİMLİ FİİL",
             ["**Kip ve kişi eki alır**",
              "**Yüklem olur**",
              "Cümlenin **temel ögesi**",
              "**Temel cümleyi** kurar",
              "gel**di**, oku**yor**, koş**acak**"],
             "Sınama",
             ["**\"Yüklem olabilir mi?\"**",
              "Olamıyorsa **fiilimsi**",
              "Fiilimsi varsa cümle **birleşiktir**"])},
        {"tur": "taktik", "baslik": "Fiilimsiyi Bulmanın Kesin Yolu", "govde":
            "Şüphelendiğin sözcüğe **kip eki eklemeyi dene**. \"Gelen\" sözcüğüne "
            "\"-di\" ekleyemezsin (\"gelendi\" olmaz) → **fiilimsi**. \"Geldi\" zaten "
            "kip eki almış → **çekimli fiil**. İkinci sınama: sözcüğü **cümlenin sonuna "
            "koyup yüklem yapmayı** dene; olmuyorsa fiilimsidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "İsim-Fiil"},
        {"tur": "formul",
         "baslik": "İsim-fiil ekleri",
         "ifade": "**-ma / -me**   →  oku**ma**, gel**me**\n"
                  "**-ış / -iş / -uş / -üş**  →  bak**ış**, gör**üş**\n"
                  "**-mak / -mek**  →  oku**mak**, gel**mek**\n"
                  "Kısa kural:  **\"-ma, -ış, -mak\"** üçlüsü",
         "terimler": [
             ("Görevi", "Cümlede **isim gibi** kullanılır"),
             ("Öge olma", "**Özne, nesne, tümleç** olabilir"),
             ("Ek alabilir", "**Çekim eki alabilir**: okuma**yı**, bakış**ın**"),
             ("Ezberi", "**\"MAŞ-MAK\"** ya da \"-ma, -ış, -mak\""),
         ],
         "not": "**İsim-fiil eki \"-ma\" ile olumsuzluk eki \"-ma\" karıştırılır.** "
                "\"Oku**ma**yı seviyorum\" → isim-fiil. \"Kitabı oku**ma**!\" → "
                "olumsuzluk eki. Ayırt etmek için sor: **sözcük isim gibi mi "
                "kullanılıyor?**"},
        {"tur": "tuzak", "baslik": "Kalıplaşmış İsim-Fiiller", "govde":
            "Bazı sözcükler isim-fiil eki taşır ama artık **kalıplaşarak isim "
            "olmuştur**; bunlar fiilimsi sayılmaz. **\"dolma, kavurma, dondurma, "
            "danışma, çakmak, kaymak, ekmek, yemek\"** gibi. Ayırt etmek için sor: "
            "**\"Bu sözcük bir eylemi mi anlatıyor, yoksa bir nesneyi mi?\"** "
            "Nesneyi anlatıyorsa **kalıplaşmıştır**, fiilimsi değildir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Sıfat-Fiil"},
        {"tur": "formul",
         "baslik": "Sıfat-fiil ekleri",
         "ifade": "**-an / -en**      →  gel**en** çocuk\n"
                  "**-ası / -esi**    →  öp**ülesi** eller\n"
                  "**-mez / -maz**    →  çık**maz** sokak\n"
                  "**-ar / -er / -r**  →  koş**ar** adım\n"
                  "**-dik / -dığı**   →  bil**dik** yüz\n"
                  "**-ecek / -acak**  →  gel**ecek** gün\n"
                  "**-miş / -mış**    →  piş**miş** yemek",
         "terimler": [
             ("Görevi", "Cümlede **sıfat gibi** kullanılır; **ismi niteler**"),
             ("Ezberi", "**\"-AN, -ASI, -MEZ, -AR, -DIK, -ECEK, -MİŞ\"**"),
             ("Kısa yol", "\"**Ankara'da Dük Mesut**\" kalıbı"),
             ("Adlaşma", "Nitelediği isim düşerse **adlaşmış sıfat-fiil** olur"),
         ],
         "not": "**Sıfat-fiil, nitelediği isim düşünce adlaşır**: \"gel**en** "
                "kişiler\" → \"**gelenler**\". Adlaşınca **isim gibi** davranır, "
                "çekim eki alır ve öge olur. Ama hâlâ **fiilimsidir**."},
        {"tur": "dikkat", "baslik": "Sıfat-Fiil Eki mi Çekim Eki mi?", "ogeler": [
            "**\"-ecek\" eki** hem gelecek zaman eki hem sıfat-fiil ekidir: "
            "\"Yarın gel**ecek**\" (çekimli fiil) / \"gel**ecek** hafta\" (sıfat-fiil).",
            "**\"-miş\" eki** hem öğrenilen geçmiş zaman hem sıfat-fiil ekidir: "
            "\"Yemek piş**miş**\" (çekimli fiil) / \"piş**miş** yemek\" (sıfat-fiil).",
            "**\"-r\" eki** hem geniş zaman hem sıfat-fiil ekidir: \"Her gün "
            "koş**ar**\" (fiil) / \"koş**ar** adım\" (sıfat-fiil).",
            "Ayırt etmek için sor: **\"Bu sözcük yüklem mi, yoksa bir ismi mi "
            "niteliyor?\"** İsim niteliyorsa **sıfat-fiildir**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Zarf-Fiil"},
        {"tur": "formul",
         "baslik": "Zarf-fiil (bağ-fiil) ekleri",
         "ifade": "**-ip / -ıp**      →  gel**ip** gitti\n"
                  "**-arak / -erek**  →  koş**arak** geldi\n"
                  "**-ince / -ınca**  →  gör**ünce** şaşırdı\n"
                  "**-ken**           →  gel**irken** düştü\n"
                  "**-madan / -meden** →  sor**madan** çıktı\n"
                  "**-dıkça / -dikçe** →  gör**dükçe** özlüyor\n"
                  "**-alı / -eli**    →  gid**eli** bir yıl oldu\n"
                  "**-r ... -maz**    →  gel**ir gelmez** sordu",
         "terimler": [
             ("Görevi", "Cümlede **zarf gibi** kullanılır; **fiili etkiler**"),
             ("Sorusu", "**\"Nasıl? Ne zaman?\"** sorularına cevap verir"),
             ("Ek almaz", "Zarf-fiiller genellikle **çekim eki almaz**"),
             ("Bağlama", "İki eylemi **birbirine bağlar**"),
         ],
         "not": "**Zarf-fiiller cümlede zarf tümleci olur.** En çok karıştırılanı "
                "**\"-ken\"** ekidir; bu ek **ek fiilin zarf-fiili** sayılır ve "
                "\"gelir**ken**, öğrenci**yken**\" biçiminde hem fiile hem isme "
                "gelebilir."},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç fiilimsiyi ayırma",
         "aciklama": "Fiilimsinin türünü bulmak için **cümledeki görevine** bak: "
                     "isim gibiyse isim-fiil, ismi nitelediyse sıfat-fiil, fiili "
                     "etkiliyorsa zarf-fiildir.",
         "ciz": S.akis(
             ["Fiilimsiyi bul", "Görevine bak", "İsim mi, sıfat mı, zarf mı?",
              "Türü belirle"],
             ["fiilden gelmiş\n**yüklem olamayan**", "cümlede **ne** görevi\ngörüyor?",
              "isim → **isim-fiil**\nsıfat → **sıfat-fiil**\nzarf → **zarf-fiil**",
              "eki de doğrula"])},
        {"tur": "cozum",
         "baslik": "Fiilimsi Türü Belirleme",
         "soru": "\"**Koşarak gelen çocuk, dinlenmek için bir ağacın altına oturdu.**\" "
                 "cümlesindeki fiilimsileri bulup türlerini belirleyiniz.",
         "adimlar": [
             "**\"Koşarak\"**: fiilden gelmiş, yüklem olamaz. \"Nasıl geldi?\" "
             "sorusuna cevap veriyor → **zarf-fiil** (-arak).",
             "**\"Gelen\"**: \"çocuk\" ismini niteliyor → **sıfat-fiil** (-en).",
             "**\"Dinlenmek\"**: isim gibi kullanılmış, \"için\" edatıyla öbek kurmuş "
             "→ **isim-fiil** (-mek).",
             "**\"Oturdu\"**: kip ve kişi eki almış → **çekimli fiil**, yüklem.",
         ],
         "sonuc": "Cümlede **üç fiilimsi** vardır: koşarak (zarf-fiil), gelen "
                  "(sıfat-fiil), dinlenmek (isim-fiil). Yüklem \"oturdu\"dur. "
                  "Fiilimsi bulunduğu için cümle **girişik birleşik cümledir**."},
        {"tur": "tuzak", "baslik": "Fiilimsi Sayısı = Yan Cümlecik Sayısı", "govde":
            "Bir cümledeki **her fiilimsi bir yan cümlecik kurar**. Yukarıdaki örnekte "
            "üç fiilimsi olduğu için **üç yan cümlecik** vardır. Cümlenin yapısını "
            "belirlerken bu sayım kritiktir: **fiilimsi varsa cümle basit olamaz**, "
            "**girişik birleşik cümledir**. Bu bağlantı, cümle türleri konusunun "
            "temelidir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Fiilimsi fiilden gelir ama yüklem olamaz.**",
            "**Kip ve kişi eki almaz.**",
            "**İsim-fiil**: **-ma, -ış, -mak**.",
            "**Sıfat-fiil**: **-an, -ası, -mez, -ar, -dik, -ecek, -miş**.",
            "**Zarf-fiil**: **-ip, -arak, -ince, -ken, -madan, -dıkça, -alı**.",
            "**İsim-fiil isim**, **sıfat-fiil sıfat**, **zarf-fiil zarf** görevindedir.",
            "**\"-ma\" isim-fiil eki ile olumsuzluk eki karıştırılır.**",
            "**Kalıplaşmış isim-fiiller fiilimsi sayılmaz** (dolma, ekmek, yemek).",
            "**\"-ecek, -miş, -r\"** hem çekim hem sıfat-fiil eki olabilir.",
            "**Sıfat-fiil adlaşabilir** (gelenler).",
            "**Her fiilimsi bir yan cümlecik kurar.**",
            "**Fiilimsi varsa cümle basit değildir**; girişik birleşik cümledir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde fiilimsiyi bulmak kadar **türünü belirlemek** de sınanıyor. "
            "Her cevapta önce **eki**, sonra **cümledeki görevini** yaz; ikisi "
            "birbirini doğrular. Fiilimsi bulduğun her cümlenin **yapısını** da "
            "belirtmeyi alışkanlık edin.",
        "satir_sayisi": 2,
        "sorular": [
            "Fiilimsiyi tanımlayınız.",
            "Fiilimsi ile çekimli fiili ayıran ölçütü yazınız.",
            "Fiilimsinin yüklem olup olamayacağını gerekçesiyle yazınız.",
            "Fiilimsiyi bulmanın iki sınamasını yazınız.",
            "İsim-fiil eklerini yazınız.",
            "İsim-fiilin cümledeki görevini yazınız.",
            "İsim-fiile üç örnek veriniz.",
            "İsim-fiilin çekim eki alıp alamayacağını örnekle açıklayınız.",
            "İsim-fiil eki '-ma' ile olumsuzluk eki '-ma'yı ayırt eden ölçütü yazınız.",
            "'Okumayı seviyorum' ve 'Kitabı okuma!' örneklerini karşılaştırınız.",
            "Kalıplaşmış isim-fiili tanımlayarak üç örnek veriniz.",
            "Kalıplaşmış isim-fiili ayırt eden soruyu yazınız.",
            "'Dolma' sözcüğünün fiilimsi olup olmadığını gerekçesiyle yazınız.",
            "Sıfat-fiil eklerini yazınız.",
            "Sıfat-fiilin cümledeki görevini yazınız.",
            "Sıfat-fiile üç örnek veriniz.",
            "Sıfat-fiilin adlaşmasını bir örnekle açıklayınız.",
            "Adlaşmış sıfat-fiilin hâlâ fiilimsi olup olmadığını yazınız.",
            "'-ecek' ekinin iki farklı görevini örneklerle yazınız.",
            "'-miş' ekinin iki farklı görevini örneklerle yazınız.",
            "'-r' ekinin iki farklı görevini örneklerle yazınız.",
            "Sıfat-fiil eki ile çekim ekini ayıran soruyu yazınız.",
            "Zarf-fiil eklerini yazınız.",
            "Zarf-fiilin cümledeki görevini yazınız.",
            "Zarf-fiile üç örnek veriniz.",
            "Zarf-fiilin hangi sorulara cevap verdiğini yazınız.",
            "'-ken' ekinin özelliğini açıklayınız.",
            "'-ken' ekinin hem fiile hem isme gelebildiğini örnekle gösteriniz.",
            "'-ip' zarf-fiil ekinin işlevini yazınız.",
            "'-arak' zarf-fiil ekinin işlevini yazınız.",
            "'-ince' zarf-fiil ekinin işlevini yazınız.",
            "'-madan' zarf-fiil ekinin işlevini yazınız.",
            "'-dıkça' zarf-fiil ekinin işlevini yazınız.",
            "'-alı' zarf-fiil ekinin işlevini yazınız.",
            "'-r ... -maz' kalıbının işlevini örnekle yazınız.",
            "Fiilimsinin türünü belirlemek için izlenecek adımları yazınız.",
            "'Koşarak gelen çocuk, dinlenmek için oturdu' cümlesindeki fiilimsileri bulunuz.",
            "Aynı cümlede fiilimsilerin türlerini yazınız.",
            "Aynı cümlenin yüklemini yazınız.",
            "Aynı cümlenin yapısını belirleyiniz.",
            "Bir cümledeki fiilimsi sayısı ile yan cümlecik sayısı arasındaki ilişkiyi yazınız.",
            "Fiilimsi bulunan bir cümlenin basit olup olamayacağını gerekçesiyle yazınız.",
            "Fiilimsi bulunan cümlenin yapıca türünü yazınız.",
            "İsim-fiil içeren bir cümle kurunuz.",
            "Sıfat-fiil içeren bir cümle kurunuz.",
            "Zarf-fiil içeren bir cümle kurunuz.",
            "Üç fiilimsi türünü de içeren bir cümle kurunuz.",
            "'Gelen' ve 'geldi' sözcüklerini tür bakımından karşılaştırınız.",
            "'Yazmak' ve 'yazdı' sözcüklerini tür bakımından karşılaştırınız.",
            "Fiilimsilerin cümleye kattığı anlatım kolaylığını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Fiilden türeyen** ama **çekimlenemeyen**, cümlede **isim, sıfat ya da zarf görevinde** kullanılan sözcüklerdir.",
            "**Kip ve kişi eki alıp almadığı.** Fiilimsi almaz, çekimli fiil alır.",
            "**Olamaz.** Yüklem olabilmesi için kip ve kişi eki alması gerekir; aldığında artık fiilimsi değil, çekimli fiil olur.",
            "**1)** Sözcüğe kip eki eklemeyi dene; eklenemiyorsa fiilimsidir. **2)** Sözcüğü yüklem yapmayı dene; olmuyorsa fiilimsidir.",
            "**-ma / -me**, **-ış / -iş / -uş / -üş**, **-mak / -mek**.",
            "Cümlede **isim gibi** kullanılır; **özne, nesne ya da tümleç** olabilir.",
            "oku**ma**, bak**ış**, gel**mek**.",
            "**Alabilir**: \"okuma**yı** seviyorum\", \"bakış**ın**dan anladım\".",
            "**Sözcük isim gibi mi kullanılıyor?** İsim gibiyse **isim-fiil**, eyleme olumsuzluk katıyorsa **olumsuzluk ekidir**.",
            "**\"Okumayı seviyorum\"**: \"okuma\" isim gibi kullanılmış, nesne olmuş → **isim-fiil**. **\"Kitabı okuma!\"**: eyleme olumsuzluk katmış → **olumsuzluk eki**.",
            "İsim-fiil eki taşıdığı hâlde **kalıplaşarak isim olmuş** sözcüklerdir: **dolma, dondurma, ekmek** (ayrıca kavurma, çakmak, yemek).",
            "**\"Bu sözcük bir eylemi mi anlatıyor, yoksa bir nesneyi mi?\"** Nesneyi anlatıyorsa kalıplaşmıştır.",
            "**Fiilimsi değildir**; bir yemek adı olarak **kalıplaşmıştır**, eylem anlamı taşımaz.",
            "**-an/-en**, **-ası/-esi**, **-mez/-maz**, **-ar/-er/-r**, **-dik/-dığı**, **-ecek/-acak**, **-miş/-mış**.",
            "Cümlede **sıfat gibi** kullanılır; bir **ismi niteler**.",
            "gel**en** çocuk, çık**maz** sokak, piş**miş** yemek.",
            "\"gel**en** kişiler\" → \"kişiler\" düşerse \"**gelenler**\" olur; artık isim gibi davranır.",
            "**Fiilimsidir.** Adlaşması yalnızca cümledeki görevini değiştirir; fiilden türemiş ve çekimlenemez olma özelliği sürer.",
            "**Gelecek zaman eki**: \"Yarın gel**ecek**.\" **Sıfat-fiil eki**: \"gel**ecek** hafta\".",
            "**Öğrenilen geçmiş zaman eki**: \"Yemek piş**miş**.\" **Sıfat-fiil eki**: \"piş**miş** yemek\".",
            "**Geniş zaman eki**: \"Her gün koş**ar**.\" **Sıfat-fiil eki**: \"koş**ar** adım\".",
            "**\"Bu sözcük yüklem mi, yoksa bir ismi mi niteliyor?\"** İsim niteliyorsa sıfat-fiildir.",
            "**-ip**, **-arak**, **-ince**, **-ken**, **-madan**, **-dıkça**, **-alı** (ayrıca -r...-maz).",
            "Cümlede **zarf gibi** kullanılır; **fiili etkiler** ve **zarf tümleci** olur.",
            "gel**ip** gitti, koş**arak** geldi, gör**ünce** şaşırdı.",
            "**\"Nasıl? Ne zaman?\"** sorularına cevap verir.",
            "**Ek fiilin zarf-fiili** sayılır; hem fiile hem isme gelebilir.",
            "**Fiile**: \"gel**irken** düştü.\" **İsme**: \"öğrenci**yken** çok çalışırdı.\"",
            "İki eylemi **art arda bağlar**: \"gel**ip** gitti.\"",
            "Eylemin **nasıl yapıldığını** bildirir: \"koş**arak** geldi.\"",
            "Eylemin **ne zaman** gerçekleştiğini bildirir: \"gör**ünce** şaşırdı.\"",
            "Bir eylemin **yapılmadığını** belirterek diğerine bağlar: \"sor**madan** çıktı.\"",
            "Eylemin **tekrarlandıkça artan** etkisini bildirir: \"gör**dükçe** özlüyor.\"",
            "Bir eylemden **bu yana geçen süreyi** bildirir: \"gid**eli** bir yıl oldu.\"",
            "İki eylemin **hemen ardışıklığını** bildirir: \"gel**ir gelmez** sordu.\"",
            "**1)** Fiilimsiyi bul (fiilden gelmiş, yüklem olamayan). **2)** Cümledeki görevine bak. **3)** İsim gibiyse isim-fiil, sıfat gibiyse sıfat-fiil, zarf gibiyse zarf-fiil.",
            "**Koşarak**, **gelen**, **dinlenmek**.",
            "**Koşarak**: zarf-fiil. **Gelen**: sıfat-fiil. **Dinlenmek**: isim-fiil.",
            "**Oturdu**.",
            "**Girişik birleşik cümledir**; içinde fiilimsi bulunmaktadır.",
            "**Eşittir.** Her fiilimsi bir yan cümlecik kurar; üç fiilimsi varsa üç yan cümlecik vardır.",
            "**Olamaz.** Basit cümlede tek bir yargı bulunur; fiilimsi bir yan cümlecik kurduğu için cümle birleşik olur.",
            "**Girişik birleşik cümle**.",
            "\"Erken kalk**mak** beni dinç tutuyor.\"",
            "\"Dün tanış**tığım** kişi bugün aradı.\"",
            "\"Kapıyı aç**ınca** içeri soğuk girdi.\"",
            "\"Bahçede oyna**yan** çocuklar, gül**erek** eve dön**mek** için hazırlandı.\"",
            "**\"Gelen\"**: kip eki almamış, ismi niteliyor → **sıfat-fiil**. **\"Geldi\"**: kip ve kişi eki almış → **çekimli fiil**.",
            "**\"Yazmak\"**: isim gibi kullanılıyor, yüklem olamaz → **isim-fiil**. **\"Yazdı\"**: çekimlenmiş, yüklem olabilir → **çekimli fiil**.",
            "Fiilimsiler, **iki ayrı cümleyi tek cümlede birleştirmeyi** sağlar. \"Çocuk koştu. Çocuk geldi.\" yerine \"Koşarak geldi.\" denebilir; anlatım **kısalır ve akıcılaşır**.",
        ],
    },
}
