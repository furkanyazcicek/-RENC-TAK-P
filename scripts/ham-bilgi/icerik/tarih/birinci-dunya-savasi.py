"""TYT Tarih — I. Dünya Savaşı (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: I. DÜNYA SAVAŞI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "I. Dünya Savaşı",
    "alt_baslik": "Ham bilgi notu — nedenler, bloklar, Osmanlı cepheleri, gizli "
                  "antlaşmalar ve savaşın sonu; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
        "kazanimlar": "11.3.1 — I. Dünya Savaşı'nın nedenlerini açıklar. "
                      "11.3.2 — Osmanlı'nın savaşa giriş nedenlerini değerlendirir. "
                      "11.3.3 — Osmanlı cephelerini ve sonuçlarını analiz eder.",
        "kapsam": "Savaşın genel ve özel nedenleri, İtilaf ve İttifak blokları, "
                  "Osmanlı'nın savaşa girişi, Kafkas-Kanal-Çanakkale-Irak-Hicaz-"
                  "Suriye-Galiçya cepheleri, gizli antlaşmalar, Wilson İlkeleri, "
                  "Brest-Litovsk, Mondros'a giden yol, 50 analiz sorusu",
        "nasil": "Cepheleri **amacına göre** grupla: **taarruz, savunma, yardım**. "
                 "Bu üçlü, cephe sorularının tamamını çözer.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **cephelerin "
                    "amacı**, **Çanakkale'nin sonuçları** ya da **gizli "
                    "antlaşmalar** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Savaşın Nedenleri ve Bloklar"},
        {"tur": "dikkat", "baslik": "Genel Nedenler", "ogeler": [
            "**Sanayi İnkılabı** sonrası devletlerin **hammadde ve pazar** "
            "arayışı → **sömürgecilik yarışı**.",
            "**Fransız İhtilali** ile yayılan **milliyetçilik** → çok uluslu "
            "imparatorluklarda ayrılıkçılık.",
            "**Almanya ve İtalya'nın geç siyasi birlik kurması** → sömürge "
            "paylaşımına geç kalmaları ve **mevcut düzeni değiştirme isteği**.",
            "**Silahlanma yarışı** ve **bloklaşma**.",
            "**Fransa'nın Almanya'dan Alsas-Loren'i geri alma** isteği (revanş).",
            "**Rusya'nın Panslavizm** siyaseti ve **sıcak denizlere inme** amacı.",
            "**Avusturya-Rusya rekabeti** Balkanlarda.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — İki blok",
         "aciklama": "Blokların **savaş sırasında değişmesi** sınavda sık "
                     "sorulur: İtalya taraf değiştirdi, ABD ve Japonya sonradan "
                     "katıldı.",
         "ciz": S.karsilastirma(
             "İTTİFAK (Bağlaşma) DEVLETLERİ",
             ["**Almanya**", "**Avusturya-Macaristan**", "**İtalya** — "
              "**1915'te ayrılıp İtilaf'a geçti**",
              "**Osmanlı Devleti** (1914'te katıldı)",
              "**Bulgaristan** (1915'te katıldı)"],
             "İTİLAF (Anlaşma) DEVLETLERİ",
             ["**İngiltere**", "**Fransa**", "**Rusya** — **1917 Bolşevik "
              "İhtilali ile çekildi**",
              "**İtalya** (1915), **Romanya**, **Yunanistan**, **Sırbistan**",
              "**ABD** (1917), **Japonya**"],
             "SAVAŞIN BAŞLAMASI",
             ["**Sırp bir öğrencinin Avusturya veliahdını öldürmesi (28 Haziran "
              "1914, Saraybosna)** görünürdeki nedendir",
              "Avusturya **Sırbistan'a savaş ilan etti**",
              "**İttifak sistemi** zinciri kırdı; savaş **dünya savaşına** dönüştü"])},
        {"tur": "tuzak", "baslik": "Görünür Neden ile Gerçek Neden", "govde":
            "**Saraybosna suikastı savaşın nedeni değil, bahanesidir.** Gerçek "
            "nedenler **sömürge yarışı, milliyetçilik, bloklaşma ve silahlanmadır**. "
            "Suikast olmasaydı da savaş çıkacaktı; çünkü **Avrupa zaten iki bloğa "
            "bölünmüş** ve gerilim doruk noktasına ulaşmıştı. Sınavda "
            "\"savaşın görünürdeki nedeni\" ile \"temel nedeni\" ayrı ayrı sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Osmanlı'nın Savaşa Girişi"},
        {"tur": "tablo",
         "basliklar": ["Osmanlı'nın giriş nedeni", "Açıklaması"],
         "satirlar": [
             ["**Kaybedilen toprakları geri almak**",
              "Balkan Savaşları'nda kaybedilen yerler, **Kafkasya ve Mısır** "
              "hedeflenmişti"],
             ["**Kapitülasyonlardan kurtulmak**",
              "Ekonomik bağımsızlık kazanmak için savaşın fırsat sayılması"],
             ["**Yalnızlıktan kurtulmak**",
              "Osmanlı'nın müttefiki yoktu; **İtilaf devletleri ittifak "
              "tekliflerini reddetmişti**"],
             ["**Almanya'nın kazanacağına inanılması**",
              "**İttihat ve Terakki'nin Alman hayranlığı** ve Alman ordusunun "
              "gücüne duyulan güven"],
             ["**Turancılık ve İslamcılık hedefleri**",
              "**Orta Asya Türklerini** birleştirme ve **halifelik yoluyla "
              "Müslümanları harekete geçirme** amacı"],
             ["**Almanya'nın Osmanlı'yı istemesi**",
              "Osmanlı, **yeni cepheler açarak İtilaf'ı bölecek**, **boğazları "
              "kapatarak Rusya'yı yalnızlaştıracak** ve **halifelik** ile "
              "sömürgelerde ayaklanma çıkaracaktı"],
         ],
         "oranlar": [0.30, 0.70]},
        {"tur": "tuzak", "baslik": "Osmanlı Savaşa Nasıl Sokuldu?", "govde":
            "İngiliz donanmasından kaçan **Goeben ve Breslau** adlı iki Alman "
            "savaş gemisi Osmanlı sularına sığındı. Osmanlı, tarafsızlığını "
            "korumak için gemileri **satın aldığını açıkladı** ve adlarını "
            "**Yavuz ve Midilli** yaptı. Ancak bu gemiler **Rus limanlarını "
            "bombalayınca** Osmanlı fiilen savaşa girmiş oldu (**Ekim 1914**). "
            "Sınavda \"Osmanlı'yı savaşa fiilen sokan olay\" diye sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Osmanlı Cepheleri"},
        {"tur": "tablo",
         "basliklar": ["Cephe", "Amaç ve sonuç"],
         "satirlar": [
             ["**Kafkas (Doğu)**\n**Taarruz**",
              "**Amaç**: Kafkasya'yı alıp **Orta Asya Türklerine ulaşmak** "
              "(Turancılık) ve Bakû petrollerine varmak. **Sarıkamış Harekâtı "
              "(1914-15)**: **kış şartlarında yaklaşık 90.000 asker donarak "
              "şehit oldu** — Osmanlı'nın **en ağır kaybıdır**. Ruslar "
              "Erzurum, Trabzon, Muş, Bitlis'e girdi. **Mustafa Kemal Muş ve "
              "Bitlis'i geri aldı**. **Brest-Litovsk (1918)** ile Ruslar çekildi; "
              "**Kars, Ardahan, Batum geri alındı**"],
             ["**Kanal (Süveyş)**\n**Taarruz**",
              "**Amaç**: **Mısır'ı geri almak** ve İngiltere'nin **sömürge "
              "yolunu kesmek**. **İki harekât da başarısız** oldu; Osmanlı "
              "savunmaya çekildi. Bu cephe **Sina-Filistin-Suriye** cephesine "
              "dönüştü"],
             ["**Çanakkale**\n**Savunma**",
              "**Amaç (İtilaf'ın)**: **Boğazları geçip İstanbul'u almak**, "
              "**Rusya'ya yardım ulaştırmak** ve Osmanlı'yı savaş dışı bırakmak. "
              "**Deniz savaşı (18 Mart 1915)** ve **kara savaşları (Arıburnu, "
              "Conkbayırı, Anafartalar, Kireçtepe)**. **Osmanlı kazandı** — "
              "**tek kesin zafer** kazanılan cephedir"],
             ["**Irak**\n**Savunma**",
              "**Amaç (İngiltere'nin)**: **petrol bölgesini** ele geçirmek ve "
              "Rusya ile birleşmek. **Kut'ül Amare (1916)**: İngilizler "
              "kuşatılıp **teslim alındı** — büyük bir zafer. Ancak sonradan "
              "Bağdat kaybedildi"],
             ["**Hicaz-Yemen**\n**Savunma**",
              "**Amaç**: **kutsal yerleri korumak**. **Şerif Hüseyin** "
              "İngilizlerle iş birliği yaparak isyan etti → **İslamcılık "
              "siyaseti iflas etti**. **Fahrettin Paşa Medine'yi** uzun süre "
              "savundu"],
             ["**Suriye-Filistin (Sina)**\n**Savunma**",
              "**Osmanlı'nın son savunma cephesidir**. **Mustafa Kemal, Yıldırım "
              "Orduları Grubu** komutanı olarak orduyu **Halep kuzeyinde** "
              "durdurdu — bugünkü **Türkiye-Suriye sınırının** temeli"],
             ["**Galiçya, Romanya, Makedonya**\n**Yardım**",
              "**Müttefiklere yardım** amacıyla açıldı. **Osmanlı toprağı "
              "dışındadır**; asker ve kaynak boşa harcandı"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "taktik", "baslik": "Cepheleri Üç Grupta Tut", "govde":
            "**Taarruz cepheleri: Kafkas ve Kanal** — Osmanlı saldırdı, ikisi de "
            "**başarısız** oldu. **Savunma cepheleri: Çanakkale, Irak, Hicaz-Yemen, "
            "Suriye-Filistin** — Osmanlı savundu, **yalnız Çanakkale kesin zafer**. "
            "**Yardım cepheleri: Galiçya, Romanya, Makedonya** — Osmanlı toprağı "
            "dışında, müttefike destek. Sınavda \"hangisi taarruz/yardım "
            "cephesidir\" doğrudan sorulur."},
        {"tur": "gorsel", "baslik": "Şema 2 — Çanakkale Zaferi'nin sonuçları",
         "aciklama": "Çanakkale, **bir cephe zaferinden çok daha fazlasıdır**; "
                     "dünya savaşının seyrini değiştirmiştir.",
         "ciz": S.kartlar([
             ("Savaş uzadı", "İtilaf planı bozuldu,\nsavaş **2 yıl uzadı**"),
             ("Rusya yardım alamadı", "Ekonomisi çöktü →\n**Bolşevik İhtilali**"),
             ("Bulgaristan katıldı", "İttifak'a katılıp\nkara bağlantısı kurdu"),
             ("Mustafa Kemal tanındı", "**Anafartalar Kahramanı**;\nulusal ün kazandı"),
             ("Millî bilinç", "**\"Vatan savunulabilir\"**\ninancı doğdu"),
             ("Sömürge halkları", "Sömürgelere karşı\n**direniş umudu** verdi"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "Çanakkale ile Bolşevik İhtilali'nin Bağı", "govde":
            "İtilaf devletleri Çanakkale'yi **Rusya'ya silah ve gıda ulaştırmak** "
            "için geçmek istiyordu. Boğazlar kapalı kalınca Rusya **yardım "
            "alamadı**; **ekonomisi çöktü**, halkta açlık ve hoşnutsuzluk arttı. "
            "Bu ortam **1917 Bolşevik İhtilali'ni** hazırladı. İhtilalden sonra "
            "Rusya **Brest-Litovsk (1918)** ile savaştan çekildi ve **Kars, "
            "Ardahan, Batum'u Osmanlı'ya geri verdi**. Ayrıca Bolşevikler "
            "**gizli antlaşmaları dünyaya açıkladı**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Gizli Antlaşmalar ve Savaşın Sonu"},
        {"tur": "tablo",
         "basliklar": ["Gizli antlaşma", "Osmanlı toprakları üzerindeki paylaşım"],
         "satirlar": [
             ["**Boğazlar Antlaşması (1915)**",
              "**Rusya'ya İstanbul ve Boğazlar** verilecek"],
             ["**Londra Antlaşması (1915)**",
              "**İtalya'ya On İki Ada ve Antalya çevresi**; İtalya bu vaatle "
              "İtilaf'a geçti"],
             ["**Sykes-Picot (1916)**",
              "**İngiltere ve Fransa Arap topraklarını paylaştı**: Fransa'ya "
              "Suriye-Lübnan, İngiltere'ye Irak-Ürdün; **Filistin uluslararası** "
              "yönetime"],
             ["**Saint Jean de Maurienne (1917)**",
              "**İtalya'ya İzmir ve Batı Anadolu** vaat edildi"],
             ["**Petrograd Protokolü (1916)**",
              "**Rusya'ya Doğu Anadolu ve Trabzon** verilecek"],
             ["**Mac Mahon yazışmaları**",
              "**Şerif Hüseyin'e bağımsız Arap krallığı** vaat edildi "
              "(sonra tutulmadı)"],
             ["**Balfour Deklarasyonu (1917)**",
              "**Filistin'de Yahudilere yurt** vaadi"],
         ],
         "oranlar": [0.28, 0.72]},
        {"tur": "tuzak", "baslik": "Gizli Antlaşmalar Nasıl Ortaya Çıktı?", "govde":
            "**1917 Bolşevik İhtilali'nden** sonra Rusya, çarlık döneminin "
            "**gizli antlaşmalarını dünya kamuoyuna açıkladı**. Böylece İtilaf "
            "devletlerinin \"özgürlük ve adalet\" söyleminin arkasında "
            "**paylaşım planları** olduğu ortaya çıktı. Bu açıklama, **Millî "
            "Mücadele'nin haklılığını** kanıtlayan en önemli belgelerdendir ve "
            "**Wilson İlkeleri'nin** gerçek niyetle çeliştiğini gösterir."},
        {"tur": "dikkat", "baslik": "Wilson İlkeleri (Ocak 1918)", "ogeler": [
            "**ABD Başkanı Wilson**'ın yayımladığı **14 maddelik barış "
            "programıdır**.",
            "**Yenen devletler yenilenlerden toprak ve tazminat almayacak**.",
            "**Her millet kendi geleceğini kendisi belirleyecek (self-determinasyon)**.",
            "**Gizli antlaşmalar yapılmayacak**; diplomasi açık olacak.",
            "**Osmanlı'nın Türklerin çoğunlukta olduğu bölgelerinde egemenlik** "
            "tanınacak; **azınlıklara özerklik** verilecek.",
            "**Boğazlar bütün devletlere açık** olacak.",
            "**Milletler Cemiyeti** kurulacak.",
            "Osmanlı, bu ilkelere güvenerek **Mondros'u kabul etti** — ancak "
            "ilkeler **uygulanmadı**; **12. madde işgallere kılıf** yapıldı.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Savaşın sonu ve Osmanlı",
         "aciklama": "İttifak devletlerinin teslim sırası; Osmanlı **yalnız "
                     "kalınca** ateşkes istemek zorunda kaldı.",
         "ciz": S.dikey_akis(
             ["Bulgaristan teslim (Eylül 1918)", "Osmanlı yalnız kaldı",
              "Mondros Ateşkesi (30 Ekim 1918)", "Almanya ve Avusturya teslim",
              "Paris Barış Konferansı (1919)"],
             ["Bulgaristan çekilince Osmanlı'nın **Almanya ile kara bağlantısı "
              "kesildi**.",
              "Cepheler çöktü, ikmal kalmadı; **İttihat ve Terakki hükümeti "
              "istifa etti**.",
              "**Limni Adası'nın Mondros Limanı'nda** imzalandı; **fiilen "
              "teslim belgesidir**.",
              "İttifak bloğu tamamen dağıldı; savaş **İtilaf'ın zaferiyle** bitti.",
              "Yenilen devletlerle yapılacak antlaşmalar burada belirlendi; "
              "**Osmanlı toprakları paylaşıldı**."])},
        {"tur": "cozum",
         "baslik": "Cephe Amacını Belirleme",
         "soru": "\"Osmanlı Devleti bu cepheyi, Orta Asya'daki Türklerle "
                 "birleşmek ve Bakû petrollerine ulaşmak amacıyla açmıştır. "
                 "Ancak kış şartları nedeniyle çok ağır kayıp verilmiştir.\"\n"
                 "Söz edilen cephe hangisidir ve bu hangi fikir akımıyla "
                 "ilgilidir?",
         "adimlar": [
             "Orta Asya Türkleriyle birleşme hedefi → **Turancılık**.",
             "Kış şartlarında ağır kayıp → **Sarıkamış Harekâtı**.",
             "Bakû petrolleri ve Kafkasya → **Kafkas (Doğu) Cephesi**.",
             "Cephe Osmanlı'nın **saldırdığı** cephedir → **taarruz cephesi**.",
         ],
         "sonuc": "**Kafkas Cephesi**; **Turancılık (Türkçülük)** akımıyla "
                  "ilgilidir ve bir **taarruz cephesidir**. Sarıkamış, "
                  "Turancı hedeflerin gerçekçi olmadığını göstermiştir."},
        {"tur": "cozum",
         "baslik": "Wilson İlkeleri'nin Çelişkisi",
         "soru": "\"Wilson İlkeleri'nde yenen devletlerin toprak ve tazminat "
                 "almayacağı belirtilmiş, ancak savaş sonrasında Osmanlı "
                 "toprakları işgal edilmiştir.\"\nBu çelişkinin nedenini "
                 "açıklayınız.",
         "adimlar": [
             "İtilaf devletleri savaş sırasında **gizli antlaşmalarla** "
             "toprakları **zaten paylaşmıştı**.",
             "Wilson İlkeleri, **kamuoyunu ikna etmek** ve savaşı bitirmek için "
             "kullanılan bir söylemdi.",
             "**12. madde** (Türklerin çoğunlukta olduğu yerlerde egemenlik) "
             "**azınlık nüfus verileri çarpıtılarak** işgallere kılıf yapıldı.",
             "**ABD, kendi önerdiği ilkeleri uygulatacak güçte değildi** ve "
             "sonradan Milletler Cemiyeti'ne bile katılmadı.",
         ],
         "sonuc": "**Gizli antlaşmalardaki paylaşım planları, Wilson İlkeleri'nin "
                  "önüne geçmiştir.** Bu çelişki, Millî Mücadele'nin **haklılığını** "
                  "ve **askerî mücadelenin zorunluluğunu** ortaya koymuştur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Saraybosna suikastı görünür nedendir**; gerçek neden **sömürge "
            "yarışıdır**.",
            "**İtalya İttifak'tan ayrılıp İtilaf'a geçti (1915).**",
            "**Rusya 1917 ihtilaliyle savaştan çekildi.**",
            "**ABD 1917'de İtilaf yanında** savaşa girdi.",
            "**Yavuz ve Midilli** olayı Osmanlı'yı fiilen savaşa soktu.",
            "**Taarruz cepheleri: Kafkas ve Kanal** — ikisi de başarısız.",
            "**Sarıkamış'ta yaklaşık 90.000 asker** donarak şehit oldu.",
            "**Çanakkale tek kesin zafer** kazanılan cephedir.",
            "**Kut'ül Amare (1916)** Irak Cephesi'nde kazanıldı.",
            "**Şerif Hüseyin isyanı İslamcılığı** iflas ettirdi.",
            "**Suriye-Filistin Osmanlı'nın son savunma** cephesidir.",
            "**Yardım cepheleri: Galiçya, Romanya, Makedonya.**",
            "**Brest-Litovsk (1918)** ile **Kars, Ardahan, Batum** geri alındı.",
            "**Gizli antlaşmaları Bolşevikler açıkladı.**",
            "**Sykes-Picot** Arap topraklarını İngiltere ve Fransa'ya böldü.",
            "**Saint Jean de Maurienne** İtalya'ya **İzmir'i** vaat etti.",
            "**Wilson İlkeleri Ocak 1918'de** yayımlandı, **uygulanmadı**.",
            "**Bulgaristan teslim olunca** Osmanlı ateşkes istemek zorunda kaldı.",
            "**Mondros 30 Ekim 1918'de** imzalandı.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Cephe soruları **amaç** üzerinden sorulur. Her cepheyi yazarken "
            "**neden açıldı, kim saldırdı, sonuç ne oldu** üçlüsünü kur.",
        "satir_sayisi": 2,
        "sorular": [
            "I. Dünya Savaşı'nın temel (gerçek) nedenlerini yazınız.",
            "Savaşın görünürdeki nedenini yazınız.",
            "Almanya ve İtalya'nın geç birlik kurmasının savaşa etkisini açıklayınız.",
            "Fransa'nın Almanya'ya yönelik hedefini yazınız.",
            "Rusya'nın Panslavizm siyasetini açıklayınız.",
            "İttifak Devletleri'ni yazınız.",
            "İtilaf Devletleri'ni yazınız.",
            "İtalya'nın blok değiştirme nedenini ve tarihini yazınız.",
            "Rusya'nın savaştan çekilme nedenini ve tarihini yazınız.",
            "ABD'nin savaşa giriş tarihini ve nedenini yazınız.",
            "Osmanlı'nın savaşa giriş nedenlerini yazınız.",
            "Almanya'nın Osmanlı'yı yanına çekme nedenlerini yazınız.",
            "Osmanlı'yı fiilen savaşa sokan olayı açıklayınız.",
            "Yavuz ve Midilli gemilerinin asıl adlarını yazınız.",
            "Osmanlı cephelerini üç gruba ayırarak yazınız.",
            "Kafkas Cephesi'nin açılma amacını yazınız.",
            "Sarıkamış Harekâtı'nın sonucunu yazınız.",
            "Sarıkamış'ın hangi fikir akımıyla ilgili olduğunu yazınız.",
            "Mustafa Kemal'in Kafkas Cephesi'ndeki başarısını yazınız.",
            "Brest-Litovsk Antlaşması'nın Osmanlı açısından sonucunu yazınız.",
            "Kanal Cephesi'nin açılma amacını yazınız.",
            "Kanal Cephesi'nin sonucunu ve dönüştüğü cepheyi yazınız.",
            "Çanakkale Cephesi'nin İtilaf açısından amaçlarını yazınız.",
            "18 Mart 1915'in önemini yazınız.",
            "Çanakkale kara savaşlarının yapıldığı yerleri yazınız.",
            "Çanakkale Zaferi'nin savaşın süresine etkisini açıklayınız.",
            "Çanakkale ile Bolşevik İhtilali arasındaki bağı açıklayınız.",
            "Çanakkale Zaferi'nin Bulgaristan'a etkisini yazınız.",
            "Çanakkale'nin Mustafa Kemal açısından önemini yazınız.",
            "Irak Cephesi'nin İngiltere açısından amacını yazınız.",
            "Kut'ül Amare'nin önemini yazınız.",
            "Hicaz-Yemen Cephesi'nin amacını yazınız.",
            "Şerif Hüseyin isyanının fikrî sonucunu açıklayınız.",
            "Medine savunmasını yapan komutanı yazınız.",
            "Suriye-Filistin Cephesi'nin özelliğini yazınız.",
            "Mustafa Kemal'in Suriye Cephesi'ndeki görevini ve başarısını yazınız.",
            "Yardım cephelerini ve açılma amacını yazınız.",
            "Yardım cephelerinin Osmanlı açısından sonucunu değerlendiriniz.",
            "Boğazlar Antlaşması'nın içeriğini yazınız.",
            "Londra Antlaşması'nın İtalya'ya vaadini yazınız.",
            "Sykes-Picot Antlaşması'nın içeriğini yazınız.",
            "Saint Jean de Maurienne'in İtalya'ya vaadini yazınız.",
            "Mac Mahon yazışmalarının içeriğini yazınız.",
            "Balfour Deklarasyonu'nun içeriğini yazınız.",
            "Gizli antlaşmaların nasıl ortaya çıktığını açıklayınız.",
            "Wilson İlkeleri'nin tarihini ve niteliğini yazınız.",
            "Wilson İlkeleri'nden dördünü yazınız.",
            "Wilson İlkeleri'nin 12. maddesinin nasıl kullanıldığını açıklayınız.",
            "Osmanlı'nın ateşkes istemek zorunda kalma nedenini yazınız.",
            "Mondros Ateşkesi'nin tarihini ve imzalandığı yeri yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Sömürgecilik yarışı (hammadde ve pazar arayışı)**, **milliyetçilik**, **bloklaşma ve silahlanma yarışı**, **Almanya ve İtalya'nın geç birlik kurması**.",
            "**Avusturya veliahdının Saraybosna'da bir Sırp öğrenci tarafından öldürülmesi (28 Haziran 1914)**.",
            "Sömürge paylaşımına **geç kalmışlardır**; mevcut düzeni **değiştirmek** istemeleri gerginliği artırmıştır.",
            "**Alsas-Loren'i Almanya'dan geri almak** (revanş siyaseti).",
            "**Slav halklarını Rusya önderliğinde birleştirmek**; bu, Balkanlarda Avusturya ve Osmanlı ile çatışma doğurmuştur.",
            "**Almanya, Avusturya-Macaristan, İtalya** (başlangıçta); sonradan **Osmanlı ve Bulgaristan**.",
            "**İngiltere, Fransa, Rusya**; sonradan **İtalya, Romanya, Yunanistan, Sırbistan, ABD, Japonya**.",
            "**1915**; İtilaf devletlerinin **On İki Ada ve Antalya çevresi** vaadi (Londra Antlaşması) üzerine.",
            "**1917 Bolşevik İhtilali**; yeni yönetim **Brest-Litovsk (1918)** ile savaştan çekilmiştir.",
            "**1917**; Almanya'nın **denizaltı saldırıları** ve İtilaf devletlerine verdiği borçların tehlikeye girmesi.",
            "**Kaybedilen toprakları geri almak**, **kapitülasyonlardan kurtulmak**, **yalnızlıktan kurtulmak**, **Almanya'nın kazanacağına inanılması**, **Turancılık ve İslamcılık hedefleri**.",
            "**Yeni cepheler açarak İtilaf'ı bölmek**, **boğazları kapatarak Rusya'yı yalnızlaştırmak** ve **halifelik yoluyla sömürgelerde ayaklanma çıkarmak**.",
            "İngiliz donanmasından kaçan **Goeben ve Breslau** gemileri Osmanlı'ya sığındı, satın alındığı açıklandı; ancak bu gemiler **Rus limanlarını bombalayınca** Osmanlı fiilen savaşa girdi (**Ekim 1914**).",
            "**Goeben (Yavuz)** ve **Breslau (Midilli)**.",
            "**Taarruz**: Kafkas, Kanal. **Savunma**: Çanakkale, Irak, Hicaz-Yemen, Suriye-Filistin. **Yardım**: Galiçya, Romanya, Makedonya.",
            "**Kafkasya'yı alıp Orta Asya Türkleriyle birleşmek (Turancılık)** ve **Bakû petrollerine ulaşmak**.",
            "**Kış şartlarında yaklaşık 90.000 asker donarak şehit olmuştur**; Osmanlı'nın **en ağır kaybıdır** ve Ruslar Doğu Anadolu'ya ilerlemiştir.",
            "**Turancılık (Türkçülük)**; harekât bu hedefin gerçekçi olmadığını göstermiştir.",
            "**Muş ve Bitlis'i Ruslardan geri almıştır**.",
            "Rusya savaştan çekilmiş ve **Kars, Ardahan, Batum Osmanlı'ya geri verilmiştir (1918)**.",
            "**Mısır'ı geri almak** ve İngiltere'nin **Süveyş üzerinden sömürgelerine giden yolunu kesmek**.",
            "**İki harekât da başarısız olmuştur**; cephe **Sina-Filistin-Suriye** savunma cephesine dönüşmüştür.",
            "**Boğazları geçip İstanbul'u almak**, **Rusya'ya yardım ulaştırmak** ve **Osmanlı'yı savaş dışı bırakmak**.",
            "**Deniz savaşının kazanıldığı gündür**; İtilaf donanması ağır kayıp verip geri çekilmiş, boğaz denizden geçilemeyeceği anlaşılmıştır.",
            "**Arıburnu, Conkbayırı, Anafartalar ve Kireçtepe**.",
            "İtilaf'ın planı bozulmuş, **savaş yaklaşık iki yıl uzamıştır**.",
            "Boğazlar kapalı kalınca **Rusya yardım alamadı**, ekonomisi çöktü ve halkta hoşnutsuzluk arttı; bu ortam **1917 Bolşevik İhtilali'ni** hazırladı.",
            "**Bulgaristan İttifak'a katılmıştır**; böylece Almanya ile Osmanlı arasında **kara bağlantısı** kurulmuştur.",
            "**Anafartalar Kahramanı** olarak ün kazanmış, ulusal bir lider konumuna yükselmiştir.",
            "**Petrol bölgesini ele geçirmek** ve **Rusya ile birleşmek**.",
            "**1916**'da İngiliz kuvvetleri kuşatılıp **teslim alınmıştır**; İngiltere'nin savaştaki en ağır yenilgilerinden biridir.",
            "**Kutsal yerleri (Mekke ve Medine'yi) korumak**.",
            "**Şerif Hüseyin'in İngilizlerle iş birliği yapması**, Müslümanların halifelik etrafında birleşemeyeceğini göstermiş ve **İslamcılık siyasetini iflas ettirmiştir**.",
            "**Fahrettin Paşa**.",
            "**Osmanlı'nın son savunma cephesidir**; savaşın sonuna kadar burada direnilmiştir.",
            "**Yıldırım Orduları Grubu komutanıdır**; orduyu **Halep kuzeyinde durdurmuştur** — bu hat bugünkü **Türkiye-Suriye sınırının** temelidir.",
            "**Galiçya, Romanya ve Makedonya**; **müttefiklere (Almanya ve Avusturya'ya) yardım** amacıyla açılmıştır.",
            "**Osmanlı toprağı dışındadır**; asker ve kaynak boşa harcanmış, kendi cephelerinde ihtiyaç duyulan güç dağıtılmıştır.",
            "**Rusya'ya İstanbul ve Boğazlar** verilecekti (1915).",
            "**On İki Ada ve Antalya çevresi** (1915); İtalya bu vaatle İtilaf'a geçmiştir.",
            "**İngiltere ve Fransa Arap topraklarını paylaşmıştır (1916)**: Fransa'ya Suriye-Lübnan, İngiltere'ye Irak-Ürdün, Filistin uluslararası yönetime.",
            "**İzmir ve Batı Anadolu** (1917).",
            "**Şerif Hüseyin'e bağımsız bir Arap krallığı** vaat edilmiştir; bu vaat **tutulmamıştır**.",
            "**Filistin'de Yahudilere yurt kurulması** vaadidir (1917).",
            "**1917 Bolşevik İhtilali'nden sonra Rusya, çarlık dönemi gizli antlaşmalarını dünya kamuoyuna açıklamıştır**.",
            "**Ocak 1918**; ABD Başkanı Wilson'ın yayımladığı **14 maddelik barış programıdır**.",
            "**Yenenler toprak ve tazminat almayacak**, **her millet kendi geleceğini belirleyecek**, **gizli antlaşma yapılmayacak**, **Milletler Cemiyeti kurulacak** (ayrıca boğazlar açık olacak).",
            "**Türklerin çoğunlukta olduğu yerlerde egemenlik tanınacağını** söyler; ancak **azınlık nüfus verileri çarpıtılarak işgallere kılıf** yapılmıştır.",
            "**Bulgaristan'ın teslim olmasıyla Almanya ile kara bağlantısı kesilmiş**, cepheler çökmüş ve ikmal imkânı kalmamıştır.",
            "**30 Ekim 1918**; **Limni Adası'nın Mondros Limanı'nda**.",
        ],
    },
}
