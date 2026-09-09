"""TYT Türkçe — Paragrafta Anlatım Teknikleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: ANLATIM TEKNİKLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Paragrafta Anlatım Teknikleri",
    "alt_baslik": "Ham bilgi notu — açıklama, tartışma, öyküleme, betimleme ve anlatıcı "
                  "bakış açıları; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Paragrafta Anlatım Teknikleri",
        "kazanimlar": "Anlatım biçimlerini tanır ve ayırt eder. "
                      "Bir paragrafta kullanılan anlatım tekniğini belirler. "
                      "Anlatıcı bakış açılarını tanır. "
                      "Anlatım biçimlerinin dil özelliklerini bilir.",
        "kapsam": "Açıklayıcı, tartışmacı, öyküleyici ve betimleyici anlatım; "
                  "anlatım biçimlerinin dil özellikleri; öyküleyici anlatımda olay, "
                  "kişi, zaman, mekân; betimlemede izlenim ve gözlem; anlatıcı bakış "
                  "açıları; 45 analiz sorusu",
        "nasil": "Anlatım tekniği sorularında **ne anlatıldığına değil, nasıl "
                 "anlatıldığına** bak. Tek soru yeter: **\"Yazar burada ne yapıyor — "
                 "bilgi mi veriyor, savunuyor mu, olay mı anlatıyor, tablo mu "
                 "çiziyor?\"**",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **hangi anlatım biçimi "
                    "kullanılmış** ya da **anlatıcının bakış açısı** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Dört Temel Anlatım Biçimi"},
        {"tur": "gorsel", "baslik": "Şema 1 — Dört anlatım biçiminin amacı",
         "aciklama": "Her anlatım biçiminin **farklı bir amacı** vardır. Yazarın "
                     "amacını belirlemek, biçimi belirlemektir.",
         "ciz": S.kartlar([
             ("Açıklayıcı", "**bilgi vermek**\n\"öğretmek\" ister"),
             ("Tartışmacı", "**görüş değiştirmek**\n\"ikna etmek\" ister"),
             ("Öyküleyici", "**olay anlatmak**\n\"yaşatmak\" ister"),
             ("Betimleyici", "**görüntü çizmek**\n\"göstermek\" ister"),
             ("Ölçüt", "\"Yazar burada\n**ne yapıyor**?\""),
             ("Karma kullanım", "bir paragrafta\n**birden çok** biçim olabilir"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Anlatım biçimi", "Amacı ve özelliği", "Dil özellikleri"],
         "satirlar": [
             ["**Açıklayıcı**",
              "**Bilgi verir, öğretir**. Nesneldir; yazar kendi görüşünü katmaz",
              "Yalın ve sade dil; terimler; **tanım, örnek, sayı**; geniş zaman"],
             ["**Tartışmacı**",
              "**Okurun görüşünü değiştirmeyi** amaçlar. Öznellik ağır basar",
              "**Karşıt görüş** verilip çürütülür; \"oysa, ancak, ne var ki\"; "
              "soru cümleleri"],
             ["**Öyküleyici**",
              "**Olayı zaman akışı içinde** anlatır. Olay, kişi, zaman, mekân vardır",
              "**Eylem bildiren yüklemler**; \"-dı, -mış\" geçmiş zaman; devinim"],
             ["**Betimleyici**",
              "**Sözcüklerle tablo çizer**. Varlığın nasıl göründüğünü anlatır",
              "**Sıfatlar çok**; duyu sözcükleri; durum bildiren yüklemler"],
         ],
         "oranlar": [0.20, 0.38, 0.42]},
        {"tur": "taktik", "baslik": "Öyküleme mi Betimleme mi? Hareket Testi", "govde":
            "İkisi de anlatıya dayanır ve karıştırılır. Ayırt etmenin en kolay yolu "
            "**hareket testidir**: paragrafta **olaylar birbirini izliyor, bir şeyler "
            "oluyorsa öykülemedir**; **her şey duruyor, yalnızca görünüm anlatılıyorsa "
            "betimlemedir**. \"Kapıyı açtı, içeri girdi, ışığı yaktı\" → öyküleme "
            "(hareket var). \"Oda küçüktü, duvarlar soluk sarıydı, pencere sokağa "
            "bakıyordu\" → betimleme (hareket yok)."},
        {"tur": "cozum",
         "baslik": "Anlatım Biçimini Belirleme",
         "soru": "Aşağıdaki parçalarda hangi anlatım biçimi kullanılmıştır?\n"
                 "**I.** \"Fotosentez, yeşil bitkilerin güneş ışığını kullanarak besin "
                 "ürettiği süreçtir. Bu süreçte karbondioksit ve su kullanılır.\"\n"
                 "**II.** \"Kimileri teknolojinin okumayı öldürdüğünü söylüyor. Oysa "
                 "dijital kitap satışları her yıl artıyor.\"\n"
                 "**III.** \"Sabah erkenden kalktı, çantasını aldı ve kapıdan çıktı.\"",
         "adimlar": [
             "**I.** Bir kavram **tanımlanıyor**, bilgi veriliyor; yazarın görüşü yok "
             "→ **açıklayıcı anlatım**.",
             "**II.** Bir görüş aktarılıp **\"oysa\" ile çürütülüyor**; okuru ikna etme "
             "amacı var → **tartışmacı anlatım**.",
             "**III.** Olaylar **zaman sırasıyla** veriliyor, hareket var → "
             "**öyküleyici anlatım**.",
         ],
         "sonuc": "**I: açıklayıcı**, **II: tartışmacı**, **III: öyküleyici**. "
                  "Her birinde yazarın **amacı** farklıdır: bilgilendirmek, ikna etmek, "
                  "yaşatmak."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Açıklayıcı ve Tartışmacı Anlatım"},
        {"tur": "gorsel", "baslik": "Şema 2 — Açıklama ile tartışmanın ayrımı",
         "aciklama": "İkisi de düşünce ağırlıklıdır ama **tutumları farklıdır**: "
                     "açıklama **bilgi verir ve tarafsızdır**, tartışma **görüş "
                     "savunur ve taraflıdır**.",
         "ciz": S.karsilastirma(
             "AÇIKLAYICI anlatım",
             ["Amaç: **bilgilendirmek**",
              "**Nesneldir**; yazarın görüşü yok",
              "Karşıt görüş **bulunmaz**",
              "Tanım, örnek, sayı kullanılır",
              "Ansiklopedi, ders kitabı, haber"],
             "TARTIŞMACI anlatım",
             ["Amaç: **görüş değiştirmek**",
              "**Özneldir**; yazar taraf tutar",
              "**Karşıt görüş verilip çürütülür**",
              "\"oysa, ancak, ne var ki\" sık",
              "Deneme, eleştiri, köşe yazısı"],
             "Ortak yön",
             ["İkisi de **düşünce ağırlıklıdır**",
              "İkisinde de **olay yoktur**",
              "İkisi de **fikir yazılarında** görülür"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Açıklayıcı anlatımda yazar kendini gizler**; \"bence, kanımca\" gibi "
            "ifadeler bulunmaz.",
            "**Tartışmacı anlatımda karşıt görüş şarttır**: yazar önce başka bir görüşü "
            "aktarır, sonra çürütür. Karşıt görüş yoksa tartışma değildir.",
            "Tartışmacı anlatımın belirgin izleri: **\"oysa, ancak, ne var ki, "
            "gerçekte, aslında, kimileri sanır ki\"**.",
            "**Soru cümleleri** tartışmacı anlatımda sık görülür; yazar okuru "
            "düşünmeye çağırır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Öyküleyici ve Betimleyici Anlatım"},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Öyküleyici", "Betimleyici"],
         "satirlar": [
             ["**Amacı**", "Olayı **yaşatmak**", "Görüntüyü **göstermek**"],
             ["**Hareket**", "**Vardır**; olaylar birbirini izler", "**Yoktur**; her şey durağandır"],
             ["**Ögeleri**", "**Olay, kişi, zaman, mekân**", "Varlık ve **özellikleri**"],
             ["**Baskın sözcük türü**", "**Fiil** (eylem)", "**Sıfat** (niteleme)"],
             ["**Yüklemleri**", "Kılış ve oluş bildirir", "**Durum** bildirir"],
             ["**Duyular**", "Ağırlıklı olarak görme", "**Beş duyu da** kullanılır"],
             ["**Zaman**", "**Zaman akışı** vardır", "Zaman **donmuştur**"],
         ],
         "oranlar": [0.24, 0.38, 0.38]},
        {"tur": "dikkat", "baslik": "Betimlemenin İki Türü", "ogeler": [
            "**Açıklayıcı betimleme**: **nesnel**dir; varlık olduğu gibi, yorum "
            "katılmadan anlatılır. Bilimsel metinlerde ve tanıtım yazılarında görülür.",
            "**Sanatsal betimleme**: **öznel**dir; yazarın **izlenimi** ve duyguları "
            "işin içindedir. Roman ve şiirde görülür.",
            "Ayırt etmek için sor: **\"Bu tabloyu herkes aynı görür mü?\"** Görürse "
            "açıklayıcı, görmezse sanatsal betimlemedir.",
            "**Kişi betimlemesine portre** denir; dış görünüş anlatılıyorsa **fiziksel "
            "portre**, karakter anlatılıyorsa **ruhsal portredir**.",
        ]},
        {"tur": "cozum",
         "baslik": "Betimleme Türünü Belirleme",
         "soru": "Aşağıdaki iki betimlemeyi karşılaştırınız.\n"
                 "**I.** \"Ağaç yaklaşık on metre boyundaydı; gövde çapı kırk santim, "
                 "yaprakları elips biçimindeydi.\"\n"
                 "**II.** \"Yaşlı ağaç, sanki tüm yılların yorgunluğunu omuzlarında "
                 "taşıyordu; dalları hüzünle yere doğru eğilmişti.\"",
         "adimlar": [
             "**I.** Ölçüler verilmiş, **yorum yok**; herkes aynı şeyi görür → "
             "**açıklayıcı (nesnel) betimleme**.",
             "**II.** \"Yorgunluk\", \"hüzün\" gibi **yazarın izlenimleri** var; "
             "ayrıca **kişileştirme** yapılmış.",
             "İkinci metni farklı okurlar farklı canlandırır → **sanatsal (öznel) "
             "betimleme**.",
         ],
         "sonuc": "**I: açıklayıcı betimleme**, **II: sanatsal betimleme**. Ayrım, "
                  "**yazarın kendini katıp katmamasına** dayanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Anlatıcı Bakış Açıları"},
        {"tur": "tablo",
         "basliklar": ["Bakış açısı", "Anlatıcı kim", "Özelliği"],
         "satirlar": [
             ["**İlahi (hâkim) bakış açısı**",
              "Her şeyi bilen dış anlatıcı",
              "Kişilerin **iç dünyasını, geçmişini, geleceğini** bilir; \"**biliyordu, "
              "düşündü**\" der"],
             ["**Kahraman bakış açısı**",
              "Olayı yaşayan kişi",
              "**Birinci kişi** ağzından: \"**gittim, gördüm**\"; yalnızca kendi "
              "bildiğini anlatır"],
             ["**Gözlemci bakış açısı**",
              "Dışarıdan izleyen anlatıcı",
              "Yalnızca **görüp duyduğunu** aktarır; **iç dünyayı bilmez**: "
              "\"**öyle görünüyordu**\""],
         ],
         "oranlar": [0.26, 0.24, 0.50]},
        {"tur": "taktik", "baslik": "Bakış Açısını Bulmanın Kısayolu", "govde":
            "**Birinci kişi ekleri (-dım, -dim) varsa** → **kahraman** bakış açısı. "
            "**Üçüncü kişi anlatımı var ve kişilerin düşünceleri veriliyorsa** → "
            "**ilahi** bakış açısı. **Üçüncü kişi anlatımı var ama yalnızca dışarıdan "
            "görünen anlatılıyorsa** → **gözlemci** bakış açısı. Ayırt edici soru: "
            "**\"Anlatıcı, kişinin aklından geçeni biliyor mu?\"** Biliyorsa ilahi, "
            "bilmiyorsa gözlemcidir."},
        {"tur": "cozum",
         "baslik": "Bakış Açısı Belirleme",
         "soru": "Aşağıdaki parçalarda anlatıcının bakış açısını belirleyiniz.\n"
                 "**I.** \"Kapıdan girdiğinde çok yorgun olduğunu düşünüyordu; oysa "
                 "kimseye belli etmek istemiyordu.\"\n"
                 "**II.** \"Kapıdan girdi, üzerindeki paltoyu çıkardı ve sessizce "
                 "oturdu.\"\n"
                 "**III.** \"Kapıdan girdim, paltomu çıkardım ve sessizce oturdum.\"",
         "adimlar": [
             "**I.** \"Düşünüyordu\", \"istemiyordu\" → kişinin **iç dünyası** "
             "biliniyor → **ilahi bakış açısı**.",
             "**II.** Yalnızca **dışarıdan görülebilecek** davranışlar anlatılmış; "
             "düşünce yok → **gözlemci bakış açısı**.",
             "**III.** **Birinci kişi** ekleri var (\"girdim, çıkardım\") → "
             "**kahraman bakış açısı**.",
         ],
         "sonuc": "**I: ilahi**, **II: gözlemci**, **III: kahraman** bakış açısı. "
                  "Aynı olay, üç farklı anlatıcıyla üç farklı biçimde aktarılabilir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Açıklayıcı**: bilgi verir, **nesneldir**, karşıt görüş yoktur.",
            "**Tartışmacı**: ikna eder, **özneldir**, **karşıt görüş şarttır**.",
            "**Öyküleyici**: olay anlatır, **hareket vardır**, fiil ağırlıklıdır.",
            "**Betimleyici**: görüntü çizer, **hareket yoktur**, sıfat ağırlıklıdır.",
            "**Hareket testi**: bir şeyler oluyorsa öyküleme, duruyorsa betimleme.",
            "**Açıklayıcı betimleme nesnel**, **sanatsal betimleme özneldir**.",
            "**Portre**: kişi betimlemesi; fiziksel ya da ruhsal olabilir.",
            "**Tartışmada \"oysa, ancak, ne var ki\"** izleri aranır.",
            "**Birinci kişi eki → kahraman** bakış açısı.",
            "**İç dünya biliniyorsa → ilahi**, bilinmiyorsa **gözlemci**.",
            "Bir paragrafta **birden çok anlatım biçimi** bulunabilir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her kavram için **kendi örneğini yazman** isteniyor. "
            "Tanımı ezberlemek yetmez; iki üç cümlelik bir parça kurabiliyorsan "
            "kavramı gerçekten anlamışsın demektir. Anlatım biçimi sorularında "
            "\"yazar burada ne yapıyor?\" sorusunu her seferinde tekrarla.",
        "satir_sayisi": 2,
        "sorular": [
            "Dört temel anlatım biçimini amaçlarıyla birlikte yazınız.",
            "Anlatım biçimini belirlemek için sorulacak temel soruyu yazınız.",
            "Açıklayıcı anlatımın amacını ve tutumunu yazınız.",
            "Açıklayıcı anlatımın dil özelliklerini yazınız.",
            "Açıklayıcı anlatımın kullanıldığı üç metin türü yazınız.",
            "Tartışmacı anlatımın amacını ve tutumunu yazınız.",
            "Tartışmacı anlatımın olmazsa olmaz ögesini yazınız.",
            "Tartışmacı anlatımın belirgin bağlaçlarını yazınız.",
            "Soru cümlelerinin tartışmacı anlatımdaki işlevini yazınız.",
            "Açıklayıcı ve tartışmacı anlatımı üç bakımdan karşılaştırınız.",
            "Öyküleyici anlatımın dört ögesini yazınız.",
            "Öyküleyici anlatımın baskın sözcük türünü yazınız.",
            "Betimleyici anlatımın amacını yazınız.",
            "Betimleyici anlatımın baskın sözcük türünü yazınız.",
            "Öyküleme ile betimlemeyi ayıran hareket testini açıklayınız.",
            "'Kapıyı açtı, içeri girdi, ışığı yaktı' cümlesindeki anlatım biçimini belirleyiniz.",
            "'Oda küçüktü, duvarlar soluk sarıydı' cümlesindeki anlatım biçimini belirleyiniz.",
            "Betimlemede kaç duyunun kullanıldığını yazınız.",
            "Açıklayıcı betimlemeyi tanımlayarak bir örnek veriniz.",
            "Sanatsal betimlemeyi tanımlayarak bir örnek veriniz.",
            "İki betimleme türünü ayıran soruyu yazınız.",
            "Portre kavramını tanımlayınız.",
            "Fiziksel ve ruhsal portreyi ayırt ediniz.",
            "'Fotosentez, yeşil bitkilerin güneş ışığını kullanarak besin ürettiği süreçtir.' Bu cümledeki anlatım biçimini belirleyiniz.",
            "'Kimileri teknolojinin okumayı öldürdüğünü söylüyor. Oysa dijital kitap satışları artıyor.' Bu parçadaki anlatım biçimini belirleyiniz.",
            "'Sabah erkenden kalktı, çantasını aldı ve kapıdan çıktı.' Bu cümledeki anlatım biçimini belirleyiniz.",
            "'Ağaç on metre boyundaydı, gövde çapı kırk santimdi.' Bu betimlemenin türünü belirleyiniz.",
            "'Yaşlı ağaç, tüm yılların yorgunluğunu omuzlarında taşıyordu.' Bu betimlemenin türünü belirleyiniz.",
            "İkinci örnekte hangi söz sanatının kullanıldığını yazınız.",
            "İlahi (hâkim) bakış açısını tanımlayınız.",
            "Kahraman bakış açısını tanımlayınız.",
            "Gözlemci bakış açısını tanımlayınız.",
            "Bakış açısını belirlemenin kısayolunu yazınız.",
            "İlahi ile gözlemci bakış açısını ayıran soruyu yazınız.",
            "'Kapıdan girdiğinde çok yorgun olduğunu düşünüyordu.' Bu cümledeki bakış açısını belirleyiniz.",
            "'Kapıdan girdi, paltosunu çıkardı ve sessizce oturdu.' Bu cümledeki bakış açısını belirleyiniz.",
            "'Kapıdan girdim, paltomu çıkardım.' Bu cümledeki bakış açısını belirleyiniz.",
            "Aynı olayın üç bakış açısıyla anlatılabileceğini bir örnekle gösteriniz.",
            "Bir paragrafta birden çok anlatım biçiminin bulunup bulunamayacağını açıklayınız.",
            "Öyküleyici ve betimleyici anlatımın birlikte kullanıldığı bir örnek yazınız.",
            "Açıklayıcı anlatımla üç cümlelik bir parça yazınız.",
            "Tartışmacı anlatımla üç cümlelik bir parça yazınız.",
            "Öyküleyici anlatımla üç cümlelik bir parça yazınız.",
            "Betimleyici anlatımla üç cümlelik bir parça yazınız.",
            "Yazdığınız dört parçada hangi ipuçlarının anlatım biçimini ele verdiğini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Açıklayıcı**: bilgi vermek. **Tartışmacı**: görüş değiştirmek. **Öyküleyici**: olay anlatmak. **Betimleyici**: görüntü çizmek.",
            "**\"Yazar burada ne yapıyor — bilgi mi veriyor, savunuyor mu, olay mı anlatıyor, tablo mu çiziyor?\"**",
            "Amacı **bilgilendirmek ve öğretmektir**; tutumu **nesneldir**, yazar kendi görüşünü katmaz.",
            "**Yalın ve sade dil**, terimler, **tanım-örnek-sayı** kullanımı, genellikle **geniş zaman**.",
            "**Ansiklopedi maddesi**, **ders kitabı**, **haber metni** (ayrıca tanıtım yazıları).",
            "Amacı **okurun görüşünü değiştirmektir**; tutumu **özneldir**, yazar taraf tutar.",
            "**Karşıt görüş.** Yazar önce başka bir görüşü aktarır, sonra çürütür. Karşıt görüş yoksa tartışmacı anlatım değildir.",
            "**oysa, ancak, ne var ki, gerçekte, aslında** (ayrıca \"kimileri sanır ki\").",
            "Okuru **düşünmeye çağırır** ve yazarın savunacağı görüşe zemin hazırlar.",
            "**Amaç**: bilgilendirme / ikna. **Tutum**: nesnel / öznel. **Karşıt görüş**: yok / var.",
            "**Olay, kişi, zaman, mekân**.",
            "**Fiil (eylem)**. Olaylar birbirini izlediği için eylem bildiren yüklemler ağırlıktadır.",
            "**Sözcüklerle bir tablo çizmek**; varlığın nasıl göründüğünü okurun gözünde canlandırmak.",
            "**Sıfat (niteleme sözcükleri)**. Varlıkların özellikleri anlatıldığı için sıfatlar ağırlıktadır.",
            "Paragrafta **bir şeyler oluyor, olaylar birbirini izliyorsa öykülemedir**; **her şey duruyor, yalnızca görünüm anlatılıyorsa betimlemedir**.",
            "**Öyküleyici anlatım**; olaylar zaman sırasıyla birbirini izliyor, hareket var.",
            "**Betimleyici anlatım**; hareket yok, yalnızca odanın görünümü anlatılıyor.",
            "**Beş duyunun tamamı** kullanılabilir: görme, işitme, koklama, tatma, dokunma.",
            "**Nesnel** betimlemedir; varlık olduğu gibi, yorum katılmadan anlatılır. \"Bina üç katlı, cephesi gri renkliydi.\"",
            "**Öznel** betimlemedir; yazarın izlenimi ve duyguları işin içindedir. \"Bina, yıllara yenik düşmüş yorgun bir dev gibi duruyordu.\"",
            "**\"Bu tabloyu herkes aynı görür mü?\"** Görürse **açıklayıcı**, görmezse **sanatsal** betimlemedir.",
            "**Kişi betimlemesidir**; bir insanın dış görünüşünün ya da karakterinin anlatılmasıdır.",
            "**Fiziksel portre** dış görünüşü (boy, yüz, giyim) anlatır. **Ruhsal portre** karakteri, huyları ve iç dünyayı anlatır.",
            "**Açıklayıcı anlatım**; bir kavram tanımlanıyor, bilgi veriliyor, yazarın görüşü yok.",
            "**Tartışmacı anlatım**; bir görüş aktarılıp \"oysa\" ile çürütülüyor.",
            "**Öyküleyici anlatım**; olaylar zaman sırasıyla veriliyor, hareket var.",
            "**Açıklayıcı (nesnel) betimleme**; ölçüler verilmiş, yorum katılmamış.",
            "**Sanatsal (öznel) betimleme**; \"yorgunluk\" gibi izlenimler ve duygular var.",
            "**Kişileştirme**; ağaca insana özgü nitelikler (yorgunluk, omuzlarında taşımak) verilmiştir.",
            "**Her şeyi bilen dış anlatıcıdır**; kişilerin iç dünyasını, geçmişini ve geleceğini bilir.",
            "**Olayı yaşayan kişinin kendi ağzından** anlatmasıdır; birinci kişi ekleri kullanılır.",
            "**Dışarıdan izleyen anlatıcıdır**; yalnızca görüp duyduğunu aktarır, kişilerin iç dünyasını bilmez.",
            "**Birinci kişi eki** varsa kahraman; **üçüncü kişi + iç dünya** varsa ilahi; **üçüncü kişi + yalnızca dış görünüm** varsa gözlemcidir.",
            "**\"Anlatıcı, kişinin aklından geçeni biliyor mu?\"** Biliyorsa **ilahi**, bilmiyorsa **gözlemcidir**.",
            "**İlahi bakış açısı**; \"düşünüyordu\" ifadesiyle kişinin iç dünyası biliniyor.",
            "**Gözlemci bakış açısı**; yalnızca dışarıdan görülebilecek davranışlar anlatılmış.",
            "**Kahraman bakış açısı**; birinci kişi ekleri (\"girdim, çıkardım\") kullanılmış.",
            "**İlahi**: \"Pencereden dışarı baktı; içinden hâlâ dönmeyeceğini biliyordu.\" **Gözlemci**: \"Pencereden dışarı baktı, uzun süre kıpırdamadan durdu.\" **Kahraman**: \"Pencereden dışarı baktım, dönmeyeceğimi biliyordum.\"",
            "**Bulunabilir.** Bir paragraf öyküleyici anlatımla başlayıp betimlemeyle sürebilir; hatta araya açıklama da girebilir. Soruda \"ağırlıklı olarak\" ifadesi geçiyorsa **baskın olan** biçim istenmektedir.",
            "\"Kapıyı açtı ve içeri girdi (öyküleme). Oda loştu; duvarlarda soluk mavi bir kâğıt, köşede eski bir koltuk vardı (betimleme).\"",
            "\"Deprem, yer kabuğundaki enerjinin aniden boşalmasıyla oluşur. Bu enerji, fay hatları boyunca dalgalar hâlinde yayılır. Depremin şiddeti Richter ölçeğiyle belirlenir.\"",
            "\"Kimileri gençlerin hiç kitap okumadığını söylüyor. Oysa kitap fuarlarındaki kalabalığın çoğunluğunu gençler oluşturuyor. Sorun okumamak değil, okunanı paylaşacak ortam bulamamaktır.\"",
            "\"Sabah ezanıyla uyandı. Sessizce giyindi, çantasını omuzladı ve kapıyı ardından usulca kapattı. Sokakta henüz kimse yoktu.\"",
            "\"Sokak dardı; iki yanında birbirine yaslanmış eski evler vardı. Duvarların sıvası dökülmüş, pencere kenarlarında solmuş saksılar duruyordu. Havada ıslak taş kokusu asılıydı.\"",
            "**Açıklayıcıda** tanım ve terim; **tartışmacıda** karşıt görüş ve \"oysa\"; **öyküleyicide** birbirini izleyen eylemler ve geçmiş zaman ekleri; **betimleyicide** sıfat yoğunluğu ve duyu sözcükleri ipucu olur.",
        ],
    },
}
