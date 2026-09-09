"""TYT Türkçe — Cümle Türleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: CÜMLE TÜRLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Cümle Türleri",
    "alt_baslik": "Ham bilgi notu — yapısına, yükleminin türüne, yerine ve anlamına "
                  "göre cümleler; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Cümle Türleri",
        "kazanimlar": "Cümleleri yapısına göre sınıflandırır. "
                      "Yüklemin türüne ve yerine göre cümleleri ayırt eder. "
                      "Anlamına göre cümle türlerini belirler. "
                      "Fiilimsi ile cümle yapısı arasındaki ilişkiyi kurar.",
        "kapsam": "Basit, birleşik, sıralı ve bağlı cümle; girişik, ki'li, iç içe ve "
                  "şartlı birleşik cümle; fiil ve isim cümlesi; kurallı ve devrik "
                  "cümle; olumlu, olumsuz, soru ve ünlem cümlesi, 50 analiz sorusu",
        "nasil": "Cümle türleri **dört ayrı ölçüte göre** belirlenir ve bir cümle "
                 "**dördüne göre birden** sınıflandırılır. Yapı sorularında anahtar "
                 "**fiilimsidir**: fiilimsi varsa cümle **basit olamaz**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **yapıca cümle türü** "
                    "ya da **sıralı-bağlı ayrımı** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Yapısına Göre Cümleler"},
        {"tur": "gorsel", "baslik": "Şema 1 — Dört yapı türü",
         "aciklama": "Yapıyı belirlemek için iki şeye bak: **kaç yargı var** ve "
                     "**nasıl bağlanmışlar**. Fiilimsi varsa cümle kesinlikle "
                     "**basit değildir**.",
         "ciz": S.dikey_akis(
             ["BASİT cümle", "BİRLEŞİK cümle", "SIRALI cümle", "BAĞLI cümle"],
             ["**Tek yargı** vardır; **tek yüklem** bulunur ve **fiilimsi yoktur**. "
              "Uzun olması basit olmasını engellemez: \"Dün akşam kütüphanede "
              "arkadaşlarımla ders çalıştım.\"",
              "**Bir temel cümle** ve **en az bir yan cümlecik** vardır. Türleri: "
              "**girişik** (fiilimsili), **ki'li**, **iç içe** (aktarma cümlesi) ve "
              "**şartlı** birleşik cümle.",
              "**Birden çok yargı** virgül ya da noktalı virgülle bağlanır: "
              "\"Kapı açıldı, içeri soğuk girdi.\" Ögeleri ortaksa **bağımlı sıralı**, "
              "değilse **bağımsız sıralı** cümledir.",
              "**Birden çok yargı bağlaçla** bağlanır: \"Geldi **ama** kimseyi "
              "görmedi.\" Bağlaçlar: **ve, ama, fakat, ancak, çünkü, oysa, ya da**."])},
        {"tur": "taktik", "baslik": "Yapıyı Belirlemenin Üç Adımı", "govde":
            "**1)** **Fiilimsi var mı?** Varsa cümle **birleşiktir** (girişik). "
            "**2)** **Birden çok yüklem var mı?** Varsa **sıralı ya da bağlıdır**. "
            "**3)** **Nasıl bağlanmışlar?** Virgülle → **sıralı**, bağlaçla → "
            "**bağlı**. Hiçbiri yoksa cümle **basittir**. Bu üç adım, yapı sorularının "
            "tamamını çözer."},
        {"tur": "tablo",
         "basliklar": ["Birleşik cümle türü", "Nasıl kurulur", "Örnek"],
         "satirlar": [
             ["**Girişik birleşik**", "**Fiilimsiyle** yan cümlecik kurulur",
              "\"Koşarak gelen çocuk yoruldu.\""],
             ["**Ki'li birleşik**", "**\"ki\" bağlacıyla** bağlanır",
              "\"Duydum ki memleketine dönmüşsün.\""],
             ["**İç içe birleşik**", "Bir cümle **başka cümlenin ögesi** olur",
              "\"'Yarın geleceğim' dedi.\""],
             ["**Şartlı birleşik**", "**Şart ekiyle (-sa)** bağlanır",
              "\"Çalışırsan başarırsın.\""],
         ],
         "oranlar": [0.24, 0.34, 0.42]},
        {"tur": "tuzak", "baslik": "Uzun Cümle Basit Olabilir", "govde":
            "Bir cümlenin **uzun olması onu birleşik yapmaz**. \"Dün akşam "
            "kütüphanede arkadaşlarımla saatlerce ders çalıştım\" cümlesi çok uzundur "
            "ama **tek yüklem** vardır ve **fiilimsi yoktur** → **basit cümledir**. "
            "Aynı biçimde çok kısa bir cümle birleşik olabilir: \"Gelen gitti\" → "
            "\"gelen\" fiilimsidir → **girişik birleşik cümle**."},
        {"tur": "cozum",
         "baslik": "Yapıca Cümle Türü Belirleme",
         "soru": "Aşağıdaki cümlelerin yapısını belirleyiniz.\n"
                 "**I.** \"Sabah erkenden kalktı ve işe gitti.\"\n"
                 "**II.** \"Yorgun düşen işçiler dinlenmek için oturdu.\"\n"
                 "**III.** \"Kapı açıldı, içeri soğuk girdi.\"\n"
                 "**IV.** \"Dün akşam kütüphanede uzun süre ders çalıştım.\"",
         "adimlar": [
             "**I.** İki yüklem (\"kalktı\", \"gitti\") **\"ve\" bağlacıyla** bağlanmış "
             "→ **bağlı cümle**.",
             "**II.** \"Düşen\" ve \"dinlenmek\" **fiilimsileri** var → **girişik "
             "birleşik cümle**.",
             "**III.** İki yüklem (\"açıldı\", \"girdi\") **virgülle** bağlanmış → "
             "**sıralı cümle**.",
             "**IV.** Tek yüklem, fiilimsi yok → **basit cümle** (uzun olması fark "
             "etmez).",
         ],
         "sonuc": "**I: bağlı**, **II: girişik birleşik**, **III: sıralı**, "
                  "**IV: basit** cümledir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yüklemin Türüne ve Yerine Göre"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki ayrı ölçüt",
         "aciklama": "Bu iki ölçüt birbirinden bağımsızdır: bir cümle hem **isim "
                     "cümlesi** hem **devrik** olabilir.",
         "ciz": S.karsilastirma(
             "Yüklemin TÜRÜNE göre",
             ["**Fiil cümlesi**: yüklem **çekimli fiildir**",
              "\"Çocuk bahçede **oynuyor**.\"",
              "**İsim cümlesi**: yüklem **ek fiil almış isimdir**",
              "\"O, sınıfın en çalışkanı**ydı**.\"",
              "Sınama: yüklem **fiil mi isim mi?**"],
             "Yüklemin YERİNE göre",
             ["**Kurallı (düz) cümle**: yüklem **sonda**",
              "\"Çocuk bahçede **oynuyor**.\"",
              "**Devrik cümle**: yüklem **sonda değil**",
              "\"**Oynuyor** çocuk bahçede.\"",
              "Sınama: yüklem **nerede?**"],
             "Not",
             ["**Eksiltili cümle**: yüklemi **söylenmemiş** cümle",
              "\"Gece yarısı, ıssız bir sokak...\"",
              "Genellikle **üç nokta** ile biter"])},
        {"tur": "dikkat", "baslik": "Devrik Cümlenin Kullanım Amacı", "ogeler": [
            "**Şiir ve edebî metinlerde** anlatıma **akıcılık ve vurgu** kazandırmak "
            "için kullanılır.",
            "**Atasözlerinde** sık görülür: \"Ak akçe kara gün içindir.\"",
            "**Konuşma dilinde** doğal olarak ortaya çıkar: \"Geldi mi Ali?\"",
            "Devrik cümle **yanlış bir kullanım değildir**; bilinçli bir **anlatım "
            "tercihidir**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Anlamına Göre Cümleler"},
        {"tur": "tablo",
         "basliklar": ["Cümle türü", "Özelliği", "Örnek"],
         "satirlar": [
             ["**Olumlu cümle**", "Yargı **gerçekleşmiştir** ya da gerçekleşecektir",
              "\"Ödevini yaptı.\""],
             ["**Olumsuz cümle**", "Yargı **gerçekleşmemiştir**; **-ma, değil, yok** "
              "bulunur", "\"Ödevini yapmadı.\""],
             ["**Soru cümlesi**", "**Cevap bekler**; soru sözcüğü ya da **mi** eki taşır",
              "\"Ödevini yaptın mı?\""],
             ["**Ünlem cümlesi**", "**Duygu** bildirir; ünlem işaretiyle biter",
              "\"Ne güzel bir gün!\""],
         ],
         "oranlar": [0.22, 0.42, 0.36]},
        {"tur": "tuzak", "baslik": "Biçimce Olumlu Anlamca Olumsuz", "govde":
            "Bir cümle **biçimce olumlu** görünüp **anlamca olumsuz** olabilir. "
            "\"Bu işi yapar mıyım hiç!\" → biçimde olumsuzluk eki yok ama anlam "
            "**\"yapmam\"** demektir. Tersi de olur: \"Gelmez olur muyum!\" → "
            "iki olumsuzluk üst üste gelmiş, anlam **\"elbette gelirim\"** olmuştur. "
            "Sorularda **biçim ile anlamı ayrı ayrı** değerlendir."},
        {"tur": "cozum",
         "baslik": "Biçim ve Anlam Ayrımı",
         "soru": "Aşağıdaki cümleleri **biçimce** ve **anlamca** olumlu-olumsuz "
                 "bakımından inceleyiniz.\n"
                 "**I.** \"Seni burada görmeyi hiç beklemiyordum.\"\n"
                 "**II.** \"Bu soruyu çözemez miyim hiç!\"\n"
                 "**III.** \"Sınavı kazanmadı değil.\"",
         "adimlar": [
             "**I.** \"-me\" olumsuzluk eki var → **biçimce olumsuz**. Anlam da "
             "olumsuz → **anlamca olumsuz**.",
             "**II.** \"-emez\" olumsuzluk eki var → **biçimce olumsuz**. Ama anlam "
             "\"elbette çözerim\" → **anlamca olumlu**.",
             "**III.** İki olumsuzluk (\"-ma\" ve \"değil\") üst üste gelmiş → "
             "**biçimce olumsuz**. Anlam \"kazandı\" → **anlamca olumlu**.",
         ],
         "sonuc": "**I: biçimce ve anlamca olumsuz.** **II ve III: biçimce olumsuz, "
                  "anlamca olumlu.** İki olumsuzluk bir araya gelirse anlam **olumluya "
                  "döner**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Soru cümlesi her zaman cevap beklemez**: \"Bu iş böyle mi olur?\" "
            "cümlesi bir **yakınmadır**; buna **sözde soru cümlesi** denir.",
            "**\"mi\" eki soru anlamı katmayabilir**: \"Yağmur yağdı mı sokaklar "
            "dolar\" cümlesinde \"mi\" **koşul** anlamı katmıştır.",
            "**Ünlem cümlesi olumlu ya da olumsuz** olabilir; ölçüt yalnızca "
            "**duygu bildirmesidir**.",
            "**Bir cümle aynı anda hem soru hem ünlem** olabilir: \"Ne yaptın sen "
            "böyle?!\"",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Sıralı ve Bağlı Cümle Ayrımı"},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Sıralı cümle", "Bağlı cümle"],
         "satirlar": [
             ["**Bağlayıcı**", "**Virgül** ya da **noktalı virgül**", "**Bağlaç** (ve, ama, çünkü)"],
             ["**Türleri**", "**Bağımlı** (ortak ögeli) ve **bağımsız** sıralı", "Tek türdür"],
             ["**Örnek**", "\"Kapı açıldı, içeri soğuk girdi.\"", "\"Geldi ama kimseyi görmedi.\""],
             ["**Ortak öge**", "Bağımlı sıralıda **ortak öge vardır**", "Bulunabilir de bulunmayabilir de"],
         ],
         "oranlar": [0.22, 0.39, 0.39]},
        {"tur": "taktik", "baslik": "Bağımlı mı Bağımsız Sıralı mı?", "govde":
            "**Bağımlı sıralı cümlede en az bir öge ortaktır**: \"Ali eve geldi, "
            "yemeğini yedi, uyudu\" → **öznesi (Ali) ortaktır** → bağımlı sıralı. "
            "**Bağımsız sıralı cümlede ortak öge yoktur**: \"Kapı açıldı, içeri soğuk "
            "girdi\" → özneler farklı (kapı / soğuk) → bağımsız sıralı. "
            "Sınama: **cümleleri ayırdığında hepsi tek başına anlamlı mı?**"},
        {"tur": "cozum",
         "baslik": "Bütün Ölçütlere Göre Çözümleme",
         "soru": "\"**Sabah erken kalkan öğrenciler derse yetişti ama otobüsü kaçıranlar "
                 "geç kaldı.**\" cümlesini **dört ölçüte göre** çözümleyiniz.",
         "adimlar": [
             "**Yapısına göre**: \"kalkan\" ve \"kaçıranlar\" **fiilimsileri** var; "
             "ayrıca iki yüklem \"ama\" bağlacıyla bağlanmış → **bağlı cümle** "
             "(içinde girişik yapılar barındırır).",
             "**Yüklemin türüne göre**: \"yetişti\" ve \"geç kaldı\" **çekimli fiil** → "
             "**fiil cümlesi**.",
             "**Yüklemin yerine göre**: yüklemler **sonda** → **kurallı cümle**.",
             "**Anlamına göre**: yargı gerçekleşmiş → **olumlu cümle**.",
         ],
         "sonuc": "Cümle **bağlı, fiil, kurallı ve olumlu** cümledir. Bir cümle "
                  "**dört ölçüte göre birden** sınıflandırılır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Fiilimsi varsa cümle basit olamaz.**",
            "**Basit cümlede tek yüklem** ve **fiilimsi yoktur**; uzunluk fark etmez.",
            "**Birleşik cümlede temel cümle + yan cümlecik** vardır.",
            "**Dört birleşik cümle**: girişik, ki'li, iç içe, şartlı.",
            "**Sıralı virgülle**, **bağlı bağlaçla** bağlanır.",
            "**Bağımlı sıralıda ortak öge** vardır, bağımsızda yoktur.",
            "**Fiil cümlesinde yüklem çekimli fiil**, **isim cümlesinde ek fiil almış "
            "isimdir**.",
            "**Kurallı cümlede yüklem sonda**, devrikte değildir.",
            "**Eksiltili cümlenin yüklemi söylenmemiştir.**",
            "**İki olumsuzluk bir araya gelirse anlam olumlu olur.**",
            "**Biçimce olumsuz anlamca olumlu** cümleler sık sorulur.",
            "**\"mi\" eki her zaman soru anlamı katmaz.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her cümleyi **dört ölçüte göre birden** incelemeyi alışkanlık "
            "edin: yapı, yüklem türü, yüklem yeri, anlam. Yapı sorularında ilk iş "
            "**fiilimsi aramaktır**; fiilimsi görürsen cümle basit olamaz.",
        "satir_sayisi": 2,
        "sorular": [
            "Cümlelerin hangi dört ölçüte göre sınıflandırıldığını yazınız.",
            "Basit cümleyi tanımlayınız.",
            "Basit cümlenin uzun olabileceğini bir örnekle gösteriniz.",
            "Birleşik cümleyi tanımlayınız.",
            "Birleşik cümlenin dört türünü yazınız.",
            "Girişik birleşik cümleyi tanımlayarak bir örnek veriniz.",
            "Ki'li birleşik cümleyi tanımlayarak bir örnek veriniz.",
            "İç içe birleşik cümleyi tanımlayarak bir örnek veriniz.",
            "Şartlı birleşik cümleyi tanımlayarak bir örnek veriniz.",
            "Sıralı cümleyi tanımlayınız.",
            "Bağlı cümleyi tanımlayınız.",
            "Sıralı ve bağlı cümleyi ayıran ölçütü yazınız.",
            "Bağımlı sıralı cümleyi tanımlayarak bir örnek veriniz.",
            "Bağımsız sıralı cümleyi tanımlayarak bir örnek veriniz.",
            "Bağımlı ile bağımsız sıralıyı ayıran sınamayı yazınız.",
            "Yapıyı belirlemenin üç adımını yazınız.",
            "Fiilimsi ile cümle yapısı arasındaki ilişkiyi yazınız.",
            "'Sabah erkenden kalktı ve işe gitti' cümlesinin yapısını belirleyiniz.",
            "'Yorgun düşen işçiler dinlenmek için oturdu' cümlesinin yapısını belirleyiniz.",
            "'Kapı açıldı, içeri soğuk girdi' cümlesinin yapısını belirleyiniz.",
            "'Dün akşam kütüphanede uzun süre ders çalıştım' cümlesinin yapısını belirleyiniz.",
            "'Gelen gitti' cümlesinin yapısını gerekçesiyle belirleyiniz.",
            "Fiil cümlesini tanımlayarak bir örnek veriniz.",
            "İsim cümlesini tanımlayarak bir örnek veriniz.",
            "Fiil ve isim cümlesini ayıran sınamayı yazınız.",
            "Kurallı cümleyi tanımlayarak bir örnek veriniz.",
            "Devrik cümleyi tanımlayarak bir örnek veriniz.",
            "Devrik cümlenin kullanım amaçlarını yazınız.",
            "Devrik cümlenin yanlış bir kullanım olup olmadığını açıklayınız.",
            "Eksiltili cümleyi tanımlayarak bir örnek veriniz.",
            "Olumlu cümleyi tanımlayarak bir örnek veriniz.",
            "Olumsuz cümlenin işaretlerini yazınız.",
            "Soru cümlesini tanımlayarak iki kuruluş biçimini yazınız.",
            "Ünlem cümlesini tanımlayarak bir örnek veriniz.",
            "Biçimce olumsuz anlamca olumlu cümleye bir örnek veriniz.",
            "Biçimce olumlu anlamca olumsuz cümleye bir örnek veriniz.",
            "İki olumsuzluğun bir araya gelmesinin anlama etkisini yazınız.",
            "'Seni burada görmeyi hiç beklemiyordum' cümlesini biçim ve anlam bakımından inceleyiniz.",
            "'Bu soruyu çözemez miyim hiç!' cümlesini biçim ve anlam bakımından inceleyiniz.",
            "'Sınavı kazanmadı değil' cümlesini biçim ve anlam bakımından inceleyiniz.",
            "Sözde soru cümlesini tanımlayarak bir örnek veriniz.",
            "'mi' ekinin soru anlamı katmadığı bir örnek yazınız.",
            "Bir cümlenin hem soru hem ünlem olabileceğini örnekle gösteriniz.",
            "'Sabah erken kalkan öğrenciler derse yetişti ama otobüsü kaçıranlar geç kaldı' cümlesini yapısına göre inceleyiniz.",
            "Aynı cümleyi yüklemin türüne göre inceleyiniz.",
            "Aynı cümleyi yüklemin yerine göre inceleyiniz.",
            "Aynı cümleyi anlamına göre inceleyiniz.",
            "Bir cümlenin dört ölçüte göre birden sınıflandırılabileceğini açıklayınız.",
            "Kendi kurduğunuz bir cümleyi dört ölçüte göre çözümleyiniz.",
            "Yapı sorularında en sık yapılan hatayı ve nedenini yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Yapısına**, **yükleminin türüne**, **yükleminin yerine** ve **anlamına** göre.",
            "**Tek yargı** bildiren, **tek yüklemi** olan ve **fiilimsi bulunmayan** cümledir.",
            "\"Dün akşam kütüphanede arkadaşlarımla saatlerce ders çalıştım.\" — uzundur ama tek yüklem vardır ve fiilimsi yoktur.",
            "**Bir temel cümle** ve **en az bir yan cümlecikten** oluşan cümledir.",
            "**Girişik**, **ki'li**, **iç içe** ve **şartlı** birleşik cümle.",
            "**Fiilimsiyle** yan cümlecik kurulan cümledir: \"**Koşarak gelen** çocuk yoruldu.\"",
            "**\"ki\" bağlacıyla** bağlanan cümledir: \"Duydum **ki** memleketine dönmüşsün.\"",
            "Bir cümlenin **başka bir cümlenin ögesi** olmasıdır: \"**'Yarın geleceğim'** dedi.\"",
            "**Şart ekiyle (-sa/-se)** bağlanan cümledir: \"Çalışır**san** başarırsın.\"",
            "Birden çok yargının **virgül ya da noktalı virgülle** bağlandığı cümledir.",
            "Birden çok yargının **bağlaçla** bağlandığı cümledir.",
            "**Bağlayıcı**: sıralıda **virgül/noktalı virgül**, bağlıda **bağlaç** bulunur.",
            "**En az bir ögesi ortak** olan sıralı cümledir: \"Ali eve geldi, yemeğini yedi, uyudu.\" (özne ortak).",
            "**Ortak ögesi bulunmayan** sıralı cümledir: \"Kapı açıldı, içeri soğuk girdi.\"",
            "**Cümleleri ayırdığında hepsi tek başına anlamlı mı?** Anlamlıysa bağımsız, bir öge eksik kalıyorsa bağımlı sıralıdır.",
            "**1)** Fiilimsi var mı? **2)** Birden çok yüklem var mı? **3)** Nasıl bağlanmışlar (virgül mü bağlaç mı)?",
            "**Fiilimsi bir yan cümlecik kurar**; bu yüzden fiilimsi bulunan cümle **basit olamaz**, **girişik birleşik cümledir**.",
            "İki yüklem \"ve\" bağlacıyla bağlanmış → **bağlı cümle**.",
            "\"Düşen\" ve \"dinlenmek\" fiilimsileri var → **girişik birleşik cümle**.",
            "İki yüklem virgülle bağlanmış → **sıralı cümle** (özneler farklı olduğu için bağımsız sıralı).",
            "Tek yüklem, fiilimsi yok → **basit cümle**.",
            "**Girişik birleşik cümledir**; \"gelen\" bir sıfat-fiildir ve yan cümlecik kurar. Kısalığı basit olmasını sağlamaz.",
            "Yüklemi **çekimli fiil** olan cümledir: \"Çocuk bahçede **oynuyor**.\"",
            "Yüklemi **ek fiil almış isim** olan cümledir: \"O, sınıfın en çalışkanı**ydı**.\"",
            "**Yüklem fiil mi isim mi?** Çekimli fiilse fiil cümlesi, ek fiil almış isimse isim cümlesidir.",
            "Yüklemi **sonda** bulunan cümledir: \"Çocuk bahçede **oynuyor**.\"",
            "Yüklemi **sonda bulunmayan** cümledir: \"**Oynuyor** çocuk bahçede.\"",
            "**Şiir ve edebî metinlerde** akıcılık ve vurgu sağlamak; **atasözlerinde** ve **konuşma dilinde** doğal olarak kullanılır.",
            "**Yanlış değildir**; bilinçli bir **anlatım tercihidir** ve anlatıma vurgu katar.",
            "**Yüklemi söylenmemiş** cümledir: \"Gece yarısı, ıssız bir sokak...\" Genellikle **üç nokta** ile biter.",
            "Yargının **gerçekleştiğini ya da gerçekleşeceğini** bildiren cümledir: \"Ödevini yaptı.\"",
            "**-ma / -me** olumsuzluk eki, **değil**, **yok** sözcükleri.",
            "**Cevap bekleyen** cümledir. İki biçimde kurulur: **soru sözcüğüyle** (kim, ne, nasıl) ya da **mi eki** ile.",
            "**Duygu bildiren** ve genellikle **ünlem işaretiyle** biten cümledir: \"Ne güzel bir gün!\"",
            "\"Bu soruyu çözemez miyim hiç!\" — olumsuzluk eki var ama anlam **\"elbette çözerim\"**.",
            "\"Bu işi yapar mıyım hiç!\" — olumsuzluk eki yok ama anlam **\"yapmam\"**.",
            "**Anlam olumluya döner**: \"kazanmadı değil\" = \"kazandı\".",
            "**Biçimce olumsuz** (\"-me\" eki var), **anlamca da olumsuz**.",
            "**Biçimce olumsuz** (\"-emez\" eki var), **anlamca olumlu** (\"elbette çözerim\").",
            "**Biçimce olumsuz** (iki olumsuzluk var), **anlamca olumlu** (\"kazandı\").",
            "**Cevap beklemeyen**, yakınma ya da şaşkınlık bildiren soru cümlesidir: \"Bu iş böyle mi olur?\"",
            "\"Yağmur yağdı **mı** sokaklar dolar.\" — burada \"mi\" **koşul** anlamı katmıştır.",
            "\"Ne yaptın sen böyle?!\" — hem soru sorulmuş hem şaşkınlık bildirilmiştir.",
            "İki fiilimsi (\"kalkan\", \"kaçıranlar\") ve iki yüklem \"ama\" ile bağlanmış → **bağlı cümledir** (içinde girişik yapılar barındırır).",
            "Yüklemler \"yetişti\" ve \"geç kaldı\" → **fiil cümlesi**.",
            "Yüklemler sonda → **kurallı cümle**.",
            "Yargı gerçekleşmiş → **olumlu cümle**.",
            "Dört ölçüt **birbirinden bağımsızdır**; her cümle dördüne göre ayrı ayrı değerlendirilir. Bir cümle aynı anda birleşik, isim, devrik ve olumsuz olabilir.",
            "\"Yarın gelecek misin?\" — **Yapı**: basit. **Yüklem türü**: fiil cümlesi. **Yüklem yeri**: kurallı. **Anlam**: soru cümlesi.",
            "**Fiilimsiyi gözden kaçırmak.** Fiilimsi fark edilmezse cümle yanlışlıkla **basit** sayılır; oysa girişik birleşik cümledir.",
        ],
    },
}
