"""AYT Biyoloji — Üriner Sistem (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: ÜRİNER SİSTEM",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Üriner Sistem",
    "alt_baslik": "Ham bilgi notu — böbrek yapısı, nefron, süzülme–geri emilim–salgılama, "
                  "idrar oluşumu ve homeostazi; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Üriner Sistem",
        "kazanimlar": "11.2.5.1 — Üriner sistemin yapı ve görevlerini açıklar. "
                      "11.2.5.2 — Nefronda idrar oluşumunu üç aşamayla açıklar. "
                      "11.2.5.3 — Böbreğin homeostazideki rolünü açıklar. "
                      "11.2.5.4 — Üriner sistem rahatsızlıklarını açıklar.",
        "kapsam": "Boşaltım organları, böbrek yapısı, nefron bölümleri, glomerulusta "
                  "süzülme, geri emilim, salgılama, idrarın bileşimi, ADH ve aldosteron, "
                  "renin-anjiyotensin, diyaliz, rahatsızlıklar, 45 analiz sorusu",
        "nasil": "Bu konu **üç aşamada** çözülür: süzülme, geri emilim, salgılama. Bir "
                 "maddenin idrarda bulunup bulunmadığını sorarsalar, o maddenin bu üç "
                 "aşamada başına ne geldiğini sırayla düşün.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de üriner sistemden gelen soru genellikle **süzüntü ile idrarın "
                    "karşılaştırılması** ya da **ADH–aldosteron etkisi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Boşaltım ve Boşaltım Organları"},
        {"tur": "tanim", "kavram": "Boşaltım",
         "aciklama": "Metabolizma sonucu oluşan **zararlı ya da fazla** maddelerin "
                     "vücuttan uzaklaştırılmasıdır. Dışkılama boşaltım **değildir**; "
                     "çünkü dışkı hücre metabolizmasının ürünü değil, **sindirilmemiş "
                     "artıktır**."},
        {"tur": "tablo",
         "basliklar": ["Organ", "Attığı maddeler"],
         "satirlar": [
             ["**Böbrek**", "**Üre**, ürik asit, kreatinin, fazla su, tuz ve iyonlar — asıl boşaltım organı"],
             ["**Akciğer**", "**Karbondioksit** ve su buharı"],
             ["**Deri**", "Terle **su, tuz** ve az miktarda **üre**"],
             ["**Karaciğer**", "Amonyağı **üreye** çevirir; safra pigmentleri ve ilaç artıkları"],
         ],
         "oranlar": [0.22, 0.78]},
        {"tur": "tuzak", "baslik": "Karaciğer Boşaltımın Neresinde?", "govde":
            "Karaciğer atığı **vücut dışına atmaz**; zehirli **amonyağı üreye çevirir** "
            "ve kana verir. Atım işini böbrek yapar. Bu yüzden karaciğere \"boşaltıma "
            "**yardımcı** organ\" denir. \"Karaciğer bir boşaltım organıdır ve üreyi "
            "atar\" ifadesi **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Böbreğin Yapısı"},
        {"tur": "gorsel", "baslik": "Şema 1 — Böbreğin katmanları",
         "aciklama": "Böbreğin süzme işi **kabuk bölgesinde**, idrarın "
                     "yoğunlaştırılması ise **öz bölgesinde** yapılır. Bu ayrım, "
                     "nefron bölümlerinin nerede bulunduğunu da açıklar.",
         "ciz": S.katmanlar([
             ("Kabuk (korteks)",
              "**Glomerulus** ve **Bowman kapsülü** buradadır; **süzülme** burada olur. Nefronların baş kısmı bu bölgede yer alır."),
             ("Öz (medulla)",
              "**Henle kulpu** ve toplama kanalları burada bulunur; **idrarın yoğunlaştırılması** burada yapılır."),
             ("Havuzcuk (pelvis)",
              "Oluşan idrarın toplandığı boşluktur. Buradan **üreter** ile idrar kesesine gönderilir."),
         ])},
        {"tur": "tanim", "kavram": "Nefron",
         "aciklama": "Böbreğin **yapı ve görev birimidir**; bir böbrekte yaklaşık "
                     "**1 milyon** nefron bulunur. **Malpighi cisimciği** (glomerulus + "
                     "Bowman kapsülü) ve **boşaltım kanalı** (proksimal tüp, Henle kulpu, "
                     "distal tüp) olmak üzere iki bölümü vardır."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Glomerulus**, atardamardan gelip yine **atardamara** açılan bir kılcal "
            "yumaktır. Giren damar **çıkandan geniştir**; bu yüzden içeride **yüksek "
            "basınç** oluşur ve süzülme mümkün olur.",
            "Böbrekler dakikada kalpten çıkan kanın yaklaşık **dörtte birini** alır. "
            "Bu, vücut ağırlığına oranla çok yüksek bir orandır.",
            "Böbrek üstü bezi böbreğe **yapışıktır ama işlevi farklıdır**; hormon "
            "salgılar, boşaltıma doğrudan katılmaz.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "İdrar Oluşumunun Üç Aşaması"},
        {"tur": "gorsel", "baslik": "Şema 2 — Süzülme, geri emilim, salgılama",
         "aciklama": "Üç aşamayı bir cümlede toplayabilirsin: **önce her şey süzülür, "
                     "sonra işe yarayanlar geri alınır, en sonda atlananlar zorla "
                     "atılır**. İdrar bu üç işlemin sonucudur.",
         "ciz": S.dikey_akis(
             ["1. Süzülme (glomerulus → Bowman kapsülü)",
              "2. Geri emilim (tüplerden kılcallara)",
              "3. Salgılama (kılcallardan tüplere)"],
             ["**Basınç farkıyla, pasif.** Su, glikoz, amino asit, üre, tuz, vitamin süzülür. "
              "**Kan hücreleri ve büyük proteinler süzülemez.** Oluşan sıvıya **süzüntü** denir.",
              "**Vücuda gerekli olanlar geri alınır**: glikozun ve amino asidin **tamamı** "
              "(aktif taşıma), suyun büyük kısmı (osmoz), tuzun bir bölümü. **Üre çok az geri emilir.**",
              "**Süzülmeden kaçan ya da fazla olan maddeler** kandan tüpe verilir: H^+, K^+, "
              "amonyak, ilaç ve boya artıkları. **Aktif taşımadır, ATP harcanır.**"])},
        {"tur": "tablo",
         "basliklar": ["Madde", "Kanda", "Süzüntüde", "İdrarda"],
         "satirlar": [
             ["**Kan hücreleri**", "Var", "**Yok**", "**Yok**"],
             ["**Büyük proteinler**", "Var", "**Yok**", "**Yok**"],
             ["**Glikoz**", "Var", "**Var**", "**Yok** (tamamı geri emilir)"],
             ["**Amino asit**", "Var", "**Var**", "**Yok** (tamamı geri emilir)"],
             ["**Su**", "Var", "Var", "**Az** (çoğu geri emilir)"],
             ["**Üre**", "Var", "Var", "**Çok** (derişimi artar)"],
         ],
         "oranlar": [0.28, 0.18, 0.20, 0.34]},
        {"tur": "tuzak", "baslik": "Glikoz Süzülür ama İdrarda Bulunmaz", "govde":
            "Glikoz küçük bir molekül olduğu için **süzülür**; ancak proksimal tüpte "
            "**tamamı aktif taşımayla geri emilir**. Bu yüzden sağlıklı bir kişinin "
            "idrarında glikoz **bulunmaz**. Kan şekeri çok yükselirse taşıyıcı proteinler "
            "**doyar** ve fazla glikoz geri emilemez; idrarda glikoz görülür. Şeker "
            "hastalığının adı buradan gelir."},
        {"tur": "dikkat", "baslik": "İdrarda Protein Görülmesi Ne Anlama Gelir?", "govde":
            "Büyük proteinler normalde **süzülemez**. İdrarda protein bulunması, "
            "**glomerulus süzme zarının zedelendiğini** gösterir. Aynı şekilde idrarda "
            "**kan hücresi** görülmesi de bir hasar işaretidir."},
        {"tur": "cozum",
         "baslik": "Süzüntü ve İdrar Karşılaştırması",
         "soru": "Bir nefronda günde yaklaşık **180 litre süzüntü** oluşuyor, ancak "
                 "günlük idrar miktarı yalnızca **1,5 litre**. Aradaki farkı açıklayınız "
                 "ve bunun canlı için anlamını yazınız.",
         "adimlar": [
             "Süzülme **seçici değildir**; basınç farkıyla küçük moleküllerin **tamamı** "
             "süzülür.",
             "Süzüntüde vücuda gerekli maddeler de bulunur: su, glikoz, amino asit, tuz.",
             "**Geri emilim** aşamasında bunların büyük kısmı kana geri alınır: suyun "
             "yaklaşık **%99'u**, glikoz ve amino asidin **tamamı**.",
             "Geriye kalan yaklaşık **1,5 litre** sıvı, üre bakımından **yoğunlaşmış** "
             "hâlde idrar olarak atılır.",
         ],
         "sonuc": "Süzülme kaba ve seçici olmayan bir eleme, geri emilim ise ince bir "
                  "ayıklamadır. Bu iki aşamalı düzen sayesinde vücut hem atığı atar "
                  "hem de değerli maddeyi kaybetmez."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Böbrek ve Homeostazi"},
        {"tur": "gorsel", "baslik": "Şema 3 — Nefron boyunca madde derişimi",
         "aciklama": "**Glikoz** süzüldükten hemen sonra tamamen geri emilir, bu yüzden "
                     "eğrisi sıfıra iner. **Üre** çok az geri emildiği ve su çekildiği "
                     "için derişimi **giderek artar**. **Su** ise yol boyunca "
                     "sürekli geri emilir. Üç eğri, nefronun ne yaptığını tek bakışta "
                     "anlatır.",
         "ciz": S.grafik("Nefron boyunca ilerleme", "Derişim", [
             ("", [(0.04, 0.62), (0.16, 0.30), (0.28, 0.06), (0.94, 0.04)], S.BILGI),
             ("", [(0.04, 0.30), (0.30, 0.44), (0.56, 0.62), (0.94, 0.92)], S.TEHLIKE),
             ("", [(0.04, 0.90), (0.26, 0.62), (0.52, 0.38), (0.94, 0.16)], S.MARKA),
         ], notlar=[(0.30, 0.20, "**Glikoz** — sıfırlanır"),
                    (0.58, 0.90, "**Üre** — derişir"),
                    (0.10, 0.74, "**Su** — geri emilir")],
            yukseklik=52.0)},
        {"tur": "tablo",
         "basliklar": ["Hormon", "Kaynağı", "Etkisi"],
         "satirlar": [
             ["**ADH (vazopressin)**", "Hipotalamusta üretilir, **hipofiz arka lobundan** salınır",
              "Toplama kanallarından **su geri emilimini artırır** → idrar **azalır ve "
              "koyulaşır**"],
             ["**Aldosteron**", "**Böbrek üstü bezi korteksi**",
              "**Na^+ geri emilimini**, **K^+ atılımını** artırır; sodyumla birlikte su "
              "tutulur → **kan basıncı yükselir**"],
             ["**Renin**", "**Böbrek** (kan basıncı düşünce salgılanır)",
              "Anjiyotensin zincirini başlatır; damarları daraltır ve **aldosteron** "
              "salgılattırır"],
         ],
         "oranlar": [0.22, 0.28, 0.50]},
        {"tur": "gorsel", "baslik": "Şema 4 — Su kaybında devreye giren düzenek",
         "aciklama": "Terleyen ya da su içmeyen bir kişide olan biten budur. Sonuçta "
                     "idrar **azalır ve koyulaşır** — bu, böbreğin suyu koruduğunun "
                     "işaretidir.",
         "ciz": S.akis(
             ["Su kaybı", "Kan osmotik basıncı artar", "Hipotalamus algılar",
              "ADH salınır", "Su geri emilir", "İdrar azalır"],
             ["terleme, az su\niçme", "kan **koyulaşır**", "susama hissi\nde başlar",
              "hipofiz arka\nlobundan", "toplama\nkanallarında",
              "**koyu renkli**\nidrar"])},
        {"tur": "maddeler", "ogeler": [
            "Böbrek yalnızca atık atmaz; **su dengesini**, **tuz-iyon dengesini**, "
            "**kan pH'ını** ve **kan basıncını** düzenler. Ayrıca **eritropoetin** "
            "salgılayarak alyuvar üretimini uyarır ve **D vitaminini etkin hâle** getirir.",
            "**Alkol ADH salgısını baskılar**; bu yüzden idrar artar ve vücut su "
            "kaybeder. **Kafein** de idrar söktürücü etki yapar.",
            "Kan pH'ı düşerse böbrek **H^+ salgılar** ve **bikarbonatı geri emer**; "
            "böylece pH dengesi korunur. Bu, akciğerden **daha yavaş ama daha kalıcı** "
            "bir düzenlemedir.",
            "Terleme ile idrar **ters orantılıdır**: çok terlenen sıcak bir günde idrar "
            "miktarı azalır ve koyulaşır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Rahatsızlıklar ve Diyaliz"},
        {"tur": "tablo",
         "basliklar": ["Rahatsızlık", "Nedeni", "Sonucu"],
         "satirlar": [
             ["**Böbrek taşı**", "İdrardaki minerallerin (kalsiyum oksalat, ürik asit) "
              "kristalleşmesi", "Şiddetli yan ağrısı, idrar yolunun tıkanması"],
             ["**Nefrit**", "Glomerulusların iltihaplanması (genellikle bağışıklık kaynaklı)",
              "İdrarda **protein ve kan**, ödem, yüksek tansiyon"],
             ["**Böbrek yetmezliği**", "Nefronların işlevini yitirmesi (diyabet, yüksek "
              "tansiyon, enfeksiyon)", "Kanda üre birikir (**üremi**); diyaliz ya da nakil gerekir"],
             ["**Sistit**", "İdrar kesesinin bakteriyel iltihabı", "Sık ve yanmalı idrar"],
             ["**Şekersiz diyabet**", "**ADH eksikliği**",
              "Günde çok miktarda **açık renkli** idrar, aşırı susama"],
         ],
         "oranlar": [0.24, 0.40, 0.36]},
        {"tur": "tanim", "kavram": "Diyaliz",
         "aciklama": "Böbrek görevini yapamadığında kanın **yarı geçirgen bir zardan** "
                     "geçirilerek temizlenmesidir. Diyaliz sıvısı, kandaki **atıkların "
                     "difüzyonla geçmesini** sağlar; gerekli maddelerin kaybolmaması "
                     "için sıvının derişimi kana **yakın ayarlanır**. Diyaliz "
                     "**geri emilim ve salgılama yapmaz**; yalnızca derişim farkına "
                     "dayanır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Dışkılama boşaltım değildir**; hücre metabolizmasının ürünü değildir.",
            "**Karaciğer amonyağı üreye çevirir** ama üreyi **atmaz**.",
            "**Süzülme kabukta**, yoğunlaştırma **özde** olur.",
            "Glomerulusta **giren damar çıkandan geniştir** → yüksek basınç → süzülme.",
            "**Süzülme pasif**, **geri emilim ve salgılama aktif** (ATP harcanır).",
            "**Kan hücresi ve büyük protein süzülemez.**",
            "**Glikoz ve amino asit süzülür ama tamamı geri emilir**; idrarda bulunmaz.",
            "**İdrarda protein/kan görülmesi glomerulus hasarını** gösterir.",
            "**ADH su tutar**, **aldosteron sodyum (dolayısıyla su) tutar**.",
            "**Alkol ADH'yi baskılar** → idrar artar.",
            "Böbrek ayrıca **eritropoetin** salgılar ve **D vitaminini etkinleştirir**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde sorular üç aşamayı sınar. Her soruda kendine sor: **bu madde "
            "süzülüyor mu, geri emiliyor mu, salgılanıyor mu?** Üç sorunun cevabını "
            "yazdığında maddenin idrarda bulunup bulunmadığı kendiliğinden çıkar.",
        "satir_sayisi": 2,
        "sorular": [
            "Boşaltımı tanımlayarak dışkılamanın neden boşaltım sayılmadığını açıklayınız.",
            "Dört boşaltım organını attıkları maddelerle eşleştiriniz.",
            "Karaciğerin boşaltımdaki rolünü açıklayarak 'boşaltım organı' sayılıp sayılmayacağını tartışınız.",
            "Amonyağın üreye çevrilmesinin canlı için önemini açıklayınız.",
            "Böbreğin kabuk ve öz bölgelerinde hangi işlemlerin yapıldığını yazınız.",
            "Nefronun iki ana bölümünü ve alt yapılarını yazınız.",
            "Glomerulusun damar yapısındaki özelliği ve bunun süzülmeye etkisini açıklayınız.",
            "Böbreklerin kalp debisinin dörtte birini almasının işlevsel nedenini açıklayınız.",
            "Süzülmenin pasif olmasının anlamını açıklayınız.",
            "Süzüntüde bulunan ve bulunmayan maddeleri karşılaştırmalı olarak yazınız.",
            "Kan hücrelerinin ve büyük proteinlerin süzülememesinin nedenini açıklayınız.",
            "Geri emilim aşamasında geri alınan maddeleri ve taşıma türlerini yazınız.",
            "Salgılama aşamasında tüplere verilen maddeleri yazınız.",
            "Salgılamanın aktif taşıma olmasının nedenini açıklayınız.",
            "Süzülme ile salgılamayı yön ve enerji kullanımı bakımından karşılaştırınız.",
            "Glikozun süzülmesine rağmen idrarda bulunmamasının nedenini açıklayınız.",
            "Kan şekeri çok yükselen bir kişinin idrarında glikoz görülmesini açıklayınız.",
            "İdrarda protein görülmesinin hangi yapının zedelendiğini gösterdiğini yazınız.",
            "Günde 180 litre süzüntü oluşurken 1,5 litre idrar atılmasının nedenini açıklayınız.",
            "Bu iki aşamalı düzenin canlıya sağladığı avantajı yazınız.",
            "Üre derişiminin süzüntüden idrara doğru artmasının nedenini açıklayınız.",
            "ADH'nin üretildiği ve salgılandığı yerleri ayırt ediniz.",
            "ADH'nin böbrekteki etkisini ve idrar üzerindeki sonucunu yazınız.",
            "Aldosteronun böbrekteki iki etkisini yazınız.",
            "ADH ile aldosteronun ortak amacını ve farkını açıklayınız.",
            "Reninin salgılanma nedenini ve zincirdeki rolünü açıklayınız.",
            "Su kaybı yaşayan bir kişide devreye giren düzeneği adım adım yazınız.",
            "Çok su içen bir kişinin idrarının açık renkli ve bol olmasını açıklayınız.",
            "Alkolün idrar miktarını artırmasının hormonal nedenini yazınız.",
            "Terleme ile idrar miktarı arasındaki ilişkiyi açıklayınız.",
            "Böbreğin kan pH'ını nasıl düzenlediğini açıklayınız.",
            "Böbreğin pH düzenlemesini akciğerinkiyle hız ve kalıcılık bakımından karşılaştırınız.",
            "Eritropoetinin kaynağını, uyaranını ve etkisini yazınız.",
            "Böbreğin D vitaminiyle ilgili görevini yazınız.",
            "Böbreğin homeostaziye beş katkısını sıralayınız.",
            "Böbrek taşının oluşum nedenini ve belirtisini yazınız.",
            "Nefritte idrarda protein ve kan görülmesinin nedenini açıklayınız.",
            "Böbrek yetmezliğinde kanda hangi maddenin biriktiğini ve bunun adını yazınız.",
            "Şekersiz diyabetin nedenini ve şeker hastalığından farkını açıklayınız.",
            "Diyalizin çalışma ilkesini açıklayınız.",
            "Diyaliz sıvısının derişiminin kana yakın ayarlanmasının nedenini yazınız.",
            "Diyalizin nefrondan hangi yönleriyle farklı olduğunu yazınız.",
            "Bir böbreği alınan kişinin yaşamını sürdürebilmesinin nedenini açıklayınız.",
            "Yüksek tansiyonun böbrek üzerindeki uzun vadeli etkisini açıklayınız.",
            "Böbrek ile dolaşım sisteminin işbirliğini bir cümleyle özetleyiniz.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Boşaltım, **hücre metabolizmasının** zararlı ya da fazla ürünlerinin atılmasıdır. Dışkı **sindirilmemiş artıktır**, hücrede üretilmemiştir; bu yüzden dışkılama boşaltım sayılmaz.",
            "**Böbrek**: üre, ürik asit, kreatinin, fazla su ve tuz. **Akciğer**: karbondioksit ve su buharı. **Deri**: su, tuz, az üre. **Karaciğer**: amonyağı üreye çevirir, safra pigmentleri.",
            "Karaciğer atığı **vücut dışına atmaz**, zehirli amonyağı **üreye dönüştürür**. Bu yüzden boşaltıma **yardımcı organ** sayılır; asıl boşaltımı böbrek yapar.",
            "Amonyak **çok zehirlidir** ve hücrede birikirse öldürücüdür. Üre daha az zehirli olduğu için kanda taşınabilir ve böbrekle güvenle atılabilir.",
            "**Kabuk (korteks)**: glomerulus ve Bowman kapsülü — **süzülme**. **Öz (medulla)**: Henle kulpu ve toplama kanalları — **idrarın yoğunlaştırılması**.",
            "**Malpighi cisimciği** (glomerulus + Bowman kapsülü) ve **boşaltım kanalı** (proksimal tüp, Henle kulpu, distal tüp, toplama kanalı).",
            "Glomerulusa **giren atardamar, çıkandan geniştir**. Bu darboğaz içeride **yüksek kan basıncı** oluşturur; süzülme bu basınç sayesinde gerçekleşir.",
            "Böbrek yalnızca kendi beslenmesi için değil, **kanı sürekli süzmek** için bu kadar kan alır. Kanın tamamı günde defalarca böbrekten geçer.",
            "Süzülme **kan basıncının etkisiyle** gerçekleşir; taşıyıcı protein ve **ATP gerektirmez**. Seçici değildir; molekül büyüklüğüne göre eleme yapar.",
            "**Süzüntüde var**: su, glikoz, amino asit, üre, ürik asit, tuz, vitamin, hormon. **Süzüntüde yok**: kan hücreleri ve büyük plazma proteinleri.",
            "Süzme zarındaki **gözenekler bu moleküllerden küçüktür**. Ayrıca zarın negatif yükü, negatif yüklü proteinleri iter.",
            "**Glikoz ve amino asidin tamamı** (aktif taşıma), **suyun yaklaşık %99'u** (osmoz), **tuzun büyük kısmı** (aktif taşıma ve difüzyon), vitaminler.",
            "**H^+**, **K^+**, amonyak, kreatinin, ilaç ve boya artıkları; yani süzülmeden kaçan ya da fazla olan maddeler.",
            "Bu maddeler kandan tüpe, çoğunlukla **derişime ters yönde** taşınır. Bu yüzden taşıyıcı protein ve **ATP** gerekir.",
            "**Süzülme** kandan tüpe, **pasif** (basınçla). **Salgılama** da kandan tüpe ama **aktif** (ATP ile) ve **seçicidir**.",
            "Glikoz küçük olduğu için **süzülür**, ancak proksimal tüpte **tamamı aktif taşımayla geri emilir**. Bu yüzden sağlıklı idrarda bulunmaz.",
            "Kan şekeri yükselince süzüntüdeki glikoz da artar. Geri emilimi yapan **taşıyıcı proteinler doyar**; fazla glikoz geri emilemeyip **idrarla atılır**.",
            "**Glomerulus süzme zarının zedelendiğini** gösterir. Normalde protein süzülemez; süzülüyorsa gözenekler büyümüş ya da zar hasar görmüştür.",
            "Süzülme **seçici değildir**; gerekli maddeler de süzülür. **Geri emilim** aşamasında suyun %99'u ile glikoz ve amino asidin tamamı geri alınır; kalan sıvı idrar olur.",
            "Vücut hem **atığı eksiksiz atar** hem de **değerli maddeyi kaybetmez**. Tek aşamalı seçici bir süzme, bu kadar çok maddeyi ayırt edemezdi.",
            "Su ve gerekli maddeler geri emilirken **üre çok az geri emilir**. Sıvı azaldıkça üre aynı kalır; bu yüzden **derişimi artar**.",
            "**Hipotalamusta üretilir**, **hipofizin arka lobundan** kana salınır. Arka lob yalnızca depolama ve salım yapar.",
            "**Toplama kanallarından su geri emilimini artırır**. Sonuç: idrar **azalır ve koyulaşır**, vücutta su tutulur.",
            "**Na^+ geri emilimini artırır** ve **K^+ atılımını artırır**. Sodyumla birlikte su da tutulduğu için kan hacmi ve basıncı yükselir.",
            "İkisi de **vücutta su tutar**. **ADH doğrudan suyu** geri emdirir; **aldosteron sodyumu** tutarak suyu dolaylı yoldan tutar.",
            "**Kan basıncı düştüğünde** böbrekten salgılanır. Anjiyotensin zincirini başlatır; damarları daraltır ve **aldosteron** salgılattırarak basıncı yükseltir.",
            "Su kaybı → kan **osmotik basıncı artar** → hipotalamus algılar (susama başlar) → **ADH salınır** → toplama kanallarında **su geri emilir** → idrar **azalır ve koyulaşır**.",
            "Kan sulandığı için osmotik basınç düşer, **ADH salgısı azalır**; su geri emilemez ve **bol, açık renkli** idrar oluşur.",
            "Alkol **ADH salgısını baskılar**. Su geri emilemez, idrar miktarı artar ve vücut su kaybeder.",
            "**Ters orantılıdır**. Çok terlenen bir günde vücut su kaybeder; ADH artar, idrar **azalır ve koyulaşır**.",
            "Kan asitleşirse böbrek **H^+ salgılar** ve **bikarbonatı geri emer**; kan bazlaşırsa tersini yapar. Böylece pH dar bir aralıkta tutulur.",
            "**Akciğer hızlı ama geçici** (karbondioksit atarak dakikalar içinde), **böbrek yavaş ama kalıcı** (saatler-günler içinde iyon dengesiyle) düzenler.",
            "**Böbrekten** salgılanır; uyaranı **kandaki oksijen azlığıdır**. Kırmızı ilikte **alyuvar üretimini artırır**.",
            "Deride ve karaciğerde işlenmiş D vitamini öncüsünü **etkin hâle getirir**. Bu yüzden böbrek yetmezliğinde kemik sorunları görülür.",
            "**Su dengesi**, **tuz-iyon dengesi**, **kan pH'ı**, **kan basıncı**, **alyuvar üretiminin uyarılması** (ve D vitamininin etkinleştirilmesi).",
            "İdrardaki minerallerin (kalsiyum oksalat, ürik asit) **kristalleşip birikmesidir**. Şiddetli yan ağrısı ve idrar yolu tıkanması yapar. Az su içmek riski artırır.",
            "Glomerulusların iltihaplanmasıyla **süzme zarı zedelenir**; normalde geçemeyen protein ve kan hücreleri süzüntüye geçer ve idrarda görülür.",
            "Kanda **üre ve diğer azotlu atıklar** birikir; bu tabloya **üremi** denir. Diyaliz ya da böbrek nakli gerekir.",
            "**ADH eksikliğinden** kaynaklanır; su geri emilemez ve günde çok miktarda **açık renkli** idrar çıkar. Şeker hastalığında ise sorun **insülindedir** ve idrarda **glikoz** bulunur.",
            "Kan, **yarı geçirgen bir zarın** bir yanından geçirilir; diğer yanındaki diyaliz sıvısına atıklar **difüzyonla** geçer. Derişim farkı esastır.",
            "Sıvının derişimi kana yakın ayarlanmazsa **gerekli maddeler de** (glikoz, iyonlar) kandan sıvıya geçer ve kaybedilir. Yalnızca atıkların geçmesi istenir.",
            "Diyaliz **yalnızca difüzyonla** çalışır; **geri emilim ve salgılama yapmaz**, hormon üretmez, kan basıncını ve alyuvar üretimini düzenlemez.",
            "Böbrekler **yedekli** çalışır; tek böbrekteki nefronlar büyüyerek ve daha verimli çalışarak eksiği karşılar. Normal koşullarda bir böbrek yeterlidir.",
            "Yüksek basınç **glomerulus kılcallarını zedeler**; süzme zarı bozulur, nefronlar zamanla işlevini yitirir ve **böbrek yetmezliği** gelişir.",
            "Dolaşım sistemi kanı böbreğe **getirir**, böbrek kanı **temizler ve bileşimini ayarlar**; temizlenmiş kan yeniden dolaşıma verilir.",
        ],
    },
}
