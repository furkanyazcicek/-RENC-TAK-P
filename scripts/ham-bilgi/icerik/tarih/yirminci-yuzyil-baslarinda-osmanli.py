"""TYT Tarih — XX. Yüzyıl Başlarında Osmanlı (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: XX. YÜZYIL BAŞLARINDA OSMANLI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "XX. Yüzyıl Başlarında Osmanlı",
    "alt_baslik": "Ham bilgi notu — II. Meşrutiyet, fikir akımları, Trablusgarp "
                  "ve Balkan Savaşları; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
        "kazanimlar": "11.2.1 — II. Meşrutiyet'in ilanını ve sonuçlarını açıklar. "
                      "11.2.2 — Osmanlı'yı kurtarmaya yönelik fikir akımlarını "
                      "karşılaştırır. 11.2.3 — Trablusgarp ve Balkan Savaşları'nın "
                      "sonuçlarını değerlendirir.",
        "kapsam": "II. Meşrutiyet, 31 Mart Olayı, Osmanlıcılık-İslamcılık-"
                  "Türkçülük-Batıcılık, İttihat ve Terakki, Trablusgarp Savaşı "
                  "ve Uşi Antlaşması, I. ve II. Balkan Savaşları, Londra, "
                  "Bükreş, İstanbul ve Atina antlaşmaları, 50 analiz sorusu",
        "nasil": "Bu bölüm **I. Dünya Savaşı'nın ön hazırlığıdır**. Balkan "
                 "Savaşları'nın sonuçlarını iyi kavra; **Osmanlıcılığın "
                 "iflası** buradadır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **fikir akımları**, "
                    "**Uşi Antlaşması** ya da **Balkan Savaşları** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "II. Meşrutiyet (1908)"},
        {"tur": "dikkat", "baslik": "II. Meşrutiyet'in İlanı", "ogeler": [
            "**İttihat ve Terakki Cemiyeti**'nin baskısıyla **II. Abdülhamit "
            "Kanun-i Esasi'yi yeniden yürürlüğe koydu (23 Temmuz 1908)**.",
            "**Reval Görüşmeleri (1908)**: İngiltere ve Rusya'nın Osmanlı'yı "
            "paylaşma görüşmeleri, cemiyeti harekete geçiren doğrudan nedendir.",
            "**Çok partili hayata geçildi**: İttihat ve Terakki, Ahrar Fırkası, "
            "Hürriyet ve İtilaf Fırkası kuruldu.",
            "**1909 anayasa değişiklikleri** ile **padişahın yetkileri gerçekten "
            "sınırlandı**: meclisi keyfî kapatamaz, **bakanlar meclise karşı "
            "sorumlu** oldu, **113. madde (sürgün) kaldırıldı**, **basın "
            "sansürü** kalktı.",
            "**Bulgaristan bağımsızlığını ilan etti**, **Avusturya Bosna-Hersek'i "
            "ilhak etti**, **Girit Yunanistan'a katıldığını açıkladı** — "
            "meşrutiyetin ilanı **toprak kaybını durduramadı**.",
        ]},
        {"tur": "tuzak", "baslik": "31 Mart Olayı (13 Nisan 1909)", "govde":
            "**Meşrutiyet karşıtı bir ayaklanmadır**; ismi **rumi takvime** "
            "göredir (miladi 13 Nisan 1909). Selanik'ten gelen **Hareket Ordusu** "
            "(kurmay başkanı **Mustafa Kemal**) tarafından bastırıldı. Sonucunda "
            "**II. Abdülhamit tahttan indirildi** ve yerine **V. Mehmet Reşat** "
            "getirildi. Bu olay, **Osmanlı tarihinde rejime (yönetim biçimine) "
            "karşı yapılan ilk ayaklanmadır**."},
        {"tur": "gorsel", "baslik": "Şema 1 — Meşrutiyetin iki dönemi",
         "aciklama": "1876 ile 1908'in farkı **egemenliğin nerede olduğudur**. "
                     "Sınavda tam olarak bu karşılaştırma sorulur.",
         "ciz": S.karsilastirma(
             "I. MEŞRUTİYET (1876)",
             ["**Padişahın isteğiyle** ilan edildi",
              "**Egemenlik padişahtadır**",
              "Meclis **keyfî olarak kapatılabilir**",
              "Bakanlar **padişaha karşı** sorumludur",
              "**113. madde** ile sürgün yetkisi vardır",
              "**İki yıl** sürdü (1878'de kapatıldı)"],
             "II. MEŞRUTİYET (1908)",
             ["**Baskı ve zorlama ile** ilan edildi",
              "**1909 değişiklikleriyle padişah yetkileri sınırlandı**",
              "Meclis **keyfî kapatılamaz**",
              "Bakanlar **meclise karşı** sorumludur",
              "**113. madde kaldırıldı**",
              "**Çok partili hayat** başladı"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Osmanlı'yı Kurtarma Fikirleri"},
        {"tur": "tablo",
         "basliklar": ["Akım", "Savunduğu", "Neden başarısız oldu?"],
         "satirlar": [
             ["**Osmanlıcılık**",
              "Din ve etnik köken ayrımı yapmadan **herkesi \"Osmanlı vatandaşı\"** "
              "çatısında birleştirmek. **Tanzimat ve Islahat** fermanları bu "
              "fikrin ürünüdür",
              "**Balkan Savaşları'nda** azınlıkların Osmanlı'ya karşı savaşması "
              "ile **kesin olarak iflas etti**"],
             ["**İslamcılık (Panislamizm)**",
              "**Halifelik** etrafında bütün Müslümanları birleştirmek. "
              "**II. Abdülhamit** döneminin resmî siyasetidir",
              "**I. Dünya Savaşı'nda Arapların İngilizlerle iş birliği** yapması "
              "ile **iflas etti**"],
             ["**Türkçülük (Turancılık)**",
              "**Türk milliyetçiliği** temelinde birleşmek; Ziya Gökalp, "
              "Yusuf Akçura. **Türk Ocakları** ve **Türk Derneği** kuruldu",
              "**Turancı hedefler (Sarıkamış)** ağır kayıp verdi; ancak "
              "**Millî Mücadele'nin fikrî temeli** oldu"],
             ["**Batıcılık**",
              "Avrupa'nın **bilim, teknik ve kurumlarını** alarak ilerlemek. "
              "Abdullah Cevdet, Celal Nuri",
              "Tek başına yeterli görülmedi; ama **Cumhuriyet inkılaplarını** "
              "besledi"],
             ["**Adem-i merkeziyetçilik**",
              "**Yerel yönetimlere geniş yetki** vererek dağılmayı önlemek. "
              "Prens Sabahattin savundu",
              "**Ayrılıkçılığı kolaylaştıracağı** gerekçesiyle kabul görmedi"],
         ],
         "oranlar": [0.20, 0.44, 0.36]},
        {"tur": "taktik", "baslik": "Hangi Akım Nerede İflas Etti?", "govde":
            "**Osmanlıcılık → Balkan Savaşları (1912-13)**: gayrimüslimler "
            "Osmanlı'ya karşı savaştı. **İslamcılık → I. Dünya Savaşı (Arap "
            "isyanı)**: Müslüman Araplar İngilizlerle iş birliği yaptı. "
            "**Turancılık → Sarıkamış (1914-15)**: hedef gerçekçi değildi ve "
            "ağır kayıp verildi. Geriye **Türkçülük ve Batıcılık** kaldı; ikisi "
            "birlikte **Türkiye Cumhuriyeti'nin** fikrî temelini oluşturdu."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Trablusgarp Savaşı (1911–1912)"},
        {"tur": "dikkat", "baslik": "Nedenleri ve Seyri", "ogeler": [
            "**İtalya'nın sömürge arayışı**: geç birliğini kuran İtalya, "
            "**hammadde ve pazar** için sömürge istiyordu.",
            "**Trablusgarp Osmanlı'nın Kuzey Afrika'daki son toprağıydı** ve "
            "**savunmasızdı**: donanma yetersizdi, karadan ulaşım imkânsızdı "
            "(Mısır İngiltere'de, Tunus Fransa'da).",
            "Osmanlı **resmî ordu gönderemedi**; **gönüllü subaylar** gizlice "
            "gitti: **Mustafa Kemal (Derne-Tobruk)**, **Enver Bey (Bingazi)**, "
            "**Fethi Bey**, **Ali Fethi**.",
            "Subaylar **yerli halkı örgütleyerek** İtalyanlara karşı başarılı "
            "bir **direniş** yürüttü — İtalyanlar kıyıdan içeri giremedi.",
            "İtalya baskı kurmak için **Rodos ve On İki Ada'yı işgal etti** ve "
            "**Çanakkale Boğazı'nı** zorladı.",
            "**Balkan Savaşı çıkınca** Osmanlı barışa mecbur kaldı.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Uşi Antlaşması (1912)", "Maddesi ve sonucu"],
         "satirlar": [
             ["**Trablusgarp ve Bingazi**",
              "**İtalya'ya bırakıldı** → Osmanlı'nın **Kuzey Afrika'daki varlığı "
              "sona erdi**"],
             ["**On İki Ada**",
              "**Geçici olarak İtalya'ya** bırakıldı (Balkan Savaşı bitince geri "
              "verilecekti) → **geri alınamadı**; sonradan Yunanistan'a geçti"],
             ["**Halifelik bağı**",
              "Trablusgarp halkı **dinî açıdan halifeye bağlı** kalacaktı — "
              "**İslamcılık siyasetinin** izidir"],
             ["**Genel sonuç**",
              "Osmanlı, **iki cepheyle aynı anda savaşamayacağını** kanıtladı; "
              "Balkan devletleri **cesaretlendi**"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "tuzak", "baslik": "On İki Ada Neden Geri Alınamadı?", "govde":
            "Uşi Antlaşması'nda On İki Ada **geçici olarak** İtalya'ya "
            "bırakılmıştı: Balkan Savaşı bitince geri verilecekti. Ancak "
            "**Balkan Savaşları ve ardından I. Dünya Savaşı** araya girdi; "
            "Osmanlı adaları **hiçbir zaman geri alamadı**. **Lozan'da (1923)** "
            "İtalya'da kalması kabul edildi, **1947'de Yunanistan'a** geçti. "
            "Sınavda \"geçici verilip kalıcı kaybedilen yer\" diye sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Balkan Savaşları (1912–1913)"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki Balkan Savaşı",
         "aciklama": "İki savaşın **tarafları farklıdır**. Birincisinde Osmanlı "
                     "herkese karşı, ikincisinde Osmanlı **fırsatı değerlendiren** "
                     "taraftır.",
         "ciz": S.karsilastirma(
             "I. BALKAN SAVAŞI (1912)",
             ["**Osmanlı'ya karşı**: Bulgaristan, Sırbistan, Yunanistan, Karadağ",
              "**Rusya'nın kışkırtması** ve **Panslavizm** etkili oldu",
              "Osmanlı **ağır yenildi**; ordu **siyasete karışmıştı**",
              "**Edirne, Kırklareli ve Selanik** kaybedildi",
              "**Arnavutluk bağımsızlığını** ilan etti — **son ayrılan azınlık**",
              "**Londra Antlaşması (1913)** ile bitti: **Midye-Enez** batısı kaybedildi"],
             "II. BALKAN SAVAŞI (1913)",
             ["**Bulgaristan'a karşı**: Sırbistan, Yunanistan, Karadağ, Romanya "
              "ve **Osmanlı**",
              "Nedeni: **ganimet paylaşımında Bulgaristan'ın en büyük payı** alması",
              "Osmanlı fırsatı değerlendirip **Edirne ve Kırklareli'ni geri aldı**",
              "**İstanbul Antlaşması (Bulgaristan)**: bugünkü **Türkiye-Bulgaristan "
              "sınırı**; azınlık hakları tanındı",
              "**Atina Antlaşması (Yunanistan)**: **Ege adaları** Yunanistan'da kaldı",
              "**Bükreş Antlaşması**: Balkan devletleri kendi aralarında anlaştı"])},
        {"tur": "dikkat", "baslik": "Balkan Savaşları'nın Sonuçları", "ogeler": [
            "**Osmanlıcılık fikri kesin olarak iflas etti** — gayrimüslimler "
            "devlete karşı savaştı.",
            "**Türkçülük akımı güçlendi**; millî bilinç yükseldi.",
            "**Balkanlardaki Osmanlı egemenliği fiilen sona erdi**; Edirne "
            "dışında Rumeli kaybedildi.",
            "**Batı Trakya ve Ege adaları** elden çıktı.",
            "**Arnavutluk bağımsız oldu** — **Osmanlı'dan ayrılan son "
            "azınlıktır**.",
            "**Balkanlardan Anadolu'ya büyük göç** dalgası başladı.",
            "**Ordu siyasetten çekilmesi gerektiğini** anladı; ıslah çalışmaları "
            "başladı.",
            "**Osmanlı, I. Dünya Savaşı'na girme kararında yalnız kalmamak** "
            "için müttefik aradı.",
        ]},
        {"tur": "cozum",
         "baslik": "Balkan Yenilgisinin Nedenleri",
         "soru": "Osmanlı'nın I. Balkan Savaşı'nda ağır bir yenilgi almasının "
                 "nedenlerini yazınız.",
         "adimlar": [
             "**Ordu siyasete karışmıştı**; subaylar **İttihatçı-İtilafçı** diye "
             "bölünmüştü.",
             "**Terhis hatası**: savaş öncesi çok sayıda eğitimli asker terhis "
             "edilmişti.",
             "**Balkan devletleri ittifak kurdu**; Osmanlı **dört cephede aynı "
             "anda** savaştı.",
             "**Trablusgarp Savaşı** ordunun bir bölümünü ve dikkatini almıştı.",
             "**Ulaşım ve ikmal** yetersizdi; Balkanlardaki halk düşmanı destekledi.",
             "**Komutanlar arasında uyumsuzluk** ve **plansızlık** vardı.",
         ],
         "sonuc": "**Ordunun siyasete karışması, terhis hatası, çok cepheli savaş "
                  "ve ikmal yetersizliği.** Sınavda en çok istenen cevap "
                  "**ordunun siyasete karışmasıdır**."},
        {"tur": "cozum",
         "baslik": "Osmanlıcılığın İflası",
         "soru": "\"Balkan Savaşları'nda Osmanlı ordusunda görev yapması beklenen "
                 "bazı gayrimüslim topluluklar, karşı tarafta yer almıştır.\"\n"
                 "Bu durum hangi fikir akımının geçersizliğini kanıtlar?",
         "adimlar": [
             "**Osmanlıcılık**, din ve etnik köken ayrımı yapmadan herkesi "
             "\"Osmanlı vatandaşı\" çatısında tutmayı amaçlıyordu.",
             "Tanzimat ve Islahat fermanları bu amaçla **eşit haklar** vermişti.",
             "Ancak azınlıklar **eşitlikle yetinmeyip bağımsızlık** istedi.",
             "Balkan Savaşları'nda **devlete karşı savaşmaları**, bu fikrin "
             "artık **işlemediğini** gösterdi.",
         ],
         "sonuc": "**Osmanlıcılık fikrinin iflasını kanıtlar.** Bu tarihten sonra "
                  "devletin fikrî ekseni **Türkçülüğe** kaymış ve millî bilinç "
                  "güçlenmiştir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**II. Meşrutiyet 23 Temmuz 1908'de** ilan edildi.",
            "**Reval Görüşmeleri** ilanı hızlandıran dış nedendir.",
            "**31 Mart Olayı 13 Nisan 1909** — **rejime karşı ilk ayaklanma**.",
            "**Hareket Ordusu** bastırdı; **Mustafa Kemal kurmay başkanıydı**.",
            "**II. Abdülhamit tahttan indirildi**; **V. Mehmet Reşat** geldi.",
            "**1909 değişiklikleriyle 113. madde kaldırıldı.**",
            "**Bakanlar meclise karşı sorumlu** hâle geldi.",
            "**Osmanlıcılık Balkan Savaşları'nda** iflas etti.",
            "**İslamcılık I. Dünya Savaşı'nda (Arap isyanı)** iflas etti.",
            "**Trablusgarp Savaşı 1911–1912**; **Uşi Antlaşması** ile bitti.",
            "**Trablusgarp'a gönüllü subaylar** gitti; **Mustafa Kemal "
            "Derne-Tobruk**'ta.",
            "**On İki Ada geçici verildi, geri alınamadı.**",
            "**I. Balkan Savaşı'nda Osmanlı ağır yenildi**; **Londra (1913)**.",
            "**II. Balkan Savaşı'nda Edirne ve Kırklareli geri alındı.**",
            "**İstanbul Antlaşması** bugünkü **Türkiye-Bulgaristan sınırıdır**.",
            "**Arnavutluk Osmanlı'dan ayrılan son azınlıktır.**",
            "**Balkan yenilgisinin başlıca nedeni ordunun siyasete karışmasıdır.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu bölümde **fikir akımı–olay eşleştirmesi** çok sorulur. Her "
            "akımın **hangi olayla iflas ettiğini** ezberle; tek başına tanım "
            "yeterli değildir.",
        "satir_sayisi": 2,
        "sorular": [
            "II. Meşrutiyet'in ilan tarihini yazınız.",
            "II. Meşrutiyet'i ilan ettiren cemiyeti yazınız.",
            "Reval Görüşmeleri'nin önemini açıklayınız.",
            "II. Meşrutiyet ile başlayan siyasi yeniliği yazınız.",
            "II. Meşrutiyet döneminde kurulan partileri yazınız.",
            "1909 anayasa değişikliklerini yazınız.",
            "113. maddenin kaldırılmasının anlamını açıklayınız.",
            "Bakanların meclise karşı sorumlu olmasının anlamını açıklayınız.",
            "I. ve II. Meşrutiyet'i egemenlik açısından karşılaştırınız.",
            "II. Meşrutiyet'in ilanı sırasında yaşanan toprak kayıplarını yazınız.",
            "31 Mart Olayı'nın tarihini ve niteliğini yazınız.",
            "31 Mart Olayı'nı bastıran orduyu ve kurmay başkanını yazınız.",
            "31 Mart Olayı'nın sonucunu yazınız.",
            "Osmanlıcılık akımını açıklayınız.",
            "Osmanlıcılık fikrinin ürünü olan belgeleri yazınız.",
            "Osmanlıcılığın hangi olayla iflas ettiğini yazınız.",
            "İslamcılık akımını açıklayınız.",
            "İslamcılığı resmî siyaset hâline getiren padişahı yazınız.",
            "İslamcılığın hangi olayla iflas ettiğini yazınız.",
            "Türkçülük akımını ve temsilcilerini yazınız.",
            "Türkçülük akımının kurumlarını yazınız.",
            "Turancılığın hangi olayda başarısız olduğunu yazınız.",
            "Batıcılık akımını ve temsilcilerini yazınız.",
            "Adem-i merkeziyetçiliği ve savunucusunu yazınız.",
            "Adem-i merkeziyetçiliğin kabul görmeme nedenini yazınız.",
            "Cumhuriyet'in fikrî temelini oluşturan akımları yazınız.",
            "Trablusgarp Savaşı'nın çıkış nedenini yazınız.",
            "Trablusgarp'ın savunmasız olmasının nedenlerini yazınız.",
            "Osmanlı'nın Trablusgarp'a resmî ordu gönderememe nedenini yazınız.",
            "Trablusgarp'a giden gönüllü subayları ve görev yerlerini yazınız.",
            "Trablusgarp'ta uygulanan direniş yöntemini açıklayınız.",
            "İtalya'nın Osmanlı'ya baskı kurmak için yaptıklarını yazınız.",
            "Trablusgarp Savaşı'nı bitiren antlaşmayı ve tarihini yazınız.",
            "Uşi Antlaşması'nın maddelerini yazınız.",
            "On İki Ada'nın durumunu ve sonradan başına geleni yazınız.",
            "Uşi Antlaşması'ndaki halifelik maddesinin anlamını açıklayınız.",
            "I. Balkan Savaşı'nın taraflarını yazınız.",
            "Balkan devletlerini birleştiren dış etkeni yazınız.",
            "I. Balkan Savaşı'ndaki yenilginin nedenlerini yazınız.",
            "I. Balkan Savaşı'nda kaybedilen önemli şehirleri yazınız.",
            "Londra Antlaşması'nın belirlediği sınırı yazınız.",
            "Osmanlı'dan ayrılan son azınlığı yazınız.",
            "II. Balkan Savaşı'nın çıkış nedenini yazınız.",
            "II. Balkan Savaşı'nın taraflarını yazınız.",
            "II. Balkan Savaşı'nda Osmanlı'nın kazanımını yazınız.",
            "İstanbul Antlaşması'nın önemini yazınız.",
            "Atina Antlaşması'nın sonucunu yazınız.",
            "Bükreş Antlaşması'nın tarafını yazınız.",
            "Balkan Savaşları'nın Osmanlı üzerindeki fikrî sonucunu açıklayınız.",
            "Balkan Savaşları'nın nüfus üzerindeki etkisini yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**23 Temmuz 1908**.",
            "**İttihat ve Terakki Cemiyeti**.",
            "**İngiltere ve Rusya'nın Osmanlı'yı paylaşma görüşmeleridir (1908)**; İttihat ve Terakki'yi harekete geçiren doğrudan nedendir.",
            "**Çok partili hayata geçilmiştir**; siyasi partiler kurulmuş ve seçimle meclis oluşmuştur.",
            "**İttihat ve Terakki**, **Ahrar Fırkası**, **Hürriyet ve İtilaf Fırkası** (ayrıca Osmanlı Sosyalist Fırkası).",
            "Padişah meclisi **keyfî kapatamaz**, **bakanlar meclise karşı sorumlu** oldu, **113. madde kaldırıldı**, **basın sansürü** kalktı.",
            "Padişahın **istediği kişiyi sürgüne gönderme yetkisi** sona ermiş, **kişi güvenliği** güçlenmiştir.",
            "Hükümetin **halkın temsilcilerine hesap verdiği** anlamına gelir; bu, **parlamenter sistemin** temel ilkesidir.",
            "**I. Meşrutiyet'te egemenlik padişahtadır**; **II. Meşrutiyet'te (1909 değişiklikleriyle) padişahın yetkileri gerçekten sınırlanmış**, meclis güçlenmiştir.",
            "**Bulgaristan bağımsızlığını ilan etti**, **Avusturya Bosna-Hersek'i ilhak etti**, **Girit Yunanistan'a katıldığını açıkladı**.",
            "**13 Nisan 1909** (rumi 31 Mart); **meşrutiyet karşıtı bir ayaklanmadır** ve Osmanlı tarihinde **rejime karşı ilk ayaklanmadır**.",
            "**Hareket Ordusu**; kurmay başkanı **Mustafa Kemal**'dir.",
            "**II. Abdülhamit tahttan indirilmiş**, yerine **V. Mehmet Reşat** getirilmiştir.",
            "Din ve etnik köken ayrımı yapmadan **herkesi \"Osmanlı vatandaşı\" çatısında birleştirerek** dağılmayı önlemeyi amaçlar.",
            "**Tanzimat Fermanı (1839)** ve **Islahat Fermanı (1856)**; ayrıca **Kanun-i Esasi (1876)**.",
            "**Balkan Savaşları (1912–1913)**; gayrimüslimlerin Osmanlı'ya karşı savaşmasıyla.",
            "**Halifelik etrafında bütün Müslümanları birleştirerek** devleti ayakta tutmayı amaçlar.",
            "**II. Abdülhamit**.",
            "**I. Dünya Savaşı**; Müslüman **Arapların İngilizlerle iş birliği** yapmasıyla.",
            "**Türk milliyetçiliği temelinde birleşmeyi** savunur; temsilcileri **Ziya Gökalp ve Yusuf Akçura**'dır.",
            "**Türk Ocakları** ve **Türk Derneği** (ayrıca Türk Yurdu dergisi).",
            "**Sarıkamış Harekâtı (1914–1915)**; hedefler gerçekçi olmadığı için ağır kayıp verilmiştir.",
            "Avrupa'nın **bilim, teknik ve kurumlarını alarak** ilerlemeyi savunur; temsilcileri **Abdullah Cevdet ve Celal Nuri**'dir.",
            "**Yerel yönetimlere geniş yetki vererek** dağılmayı önlemeyi savunur; **Prens Sabahattin** temsilcisidir.",
            "**Ayrılıkçılığı kolaylaştıracağı** ve devletin bütünlüğünü daha da zayıflatacağı düşünüldüğü için.",
            "**Türkçülük ve Batıcılık**.",
            "**İtalya'nın sömürge arayışıdır**; geç birliğini kuran İtalya hammadde ve pazar için sömürge istiyordu.",
            "**Donanma yetersizdi**, karadan ulaşım imkânsızdı (**Mısır İngiltere'de, Tunus Fransa'daydı**) ve bölgede güçlü bir garnizon yoktu.",
            "**Deniz yolu güvenli değildi** ve **kara yolu kapalıydı**; ayrıca devlet iç sorunlarla uğraşıyordu.",
            "**Mustafa Kemal (Derne-Tobruk)**, **Enver Bey (Bingazi)**, **Fethi Bey** ve diğer gönüllü subaylar.",
            "**Yerli halkı örgütleyip silahlandırarak** düzenli olmayan bir **direniş (gerilla)** yürütülmüştür; İtalyanlar kıyıdan içeri giremedi.",
            "**Rodos ve On İki Ada'yı işgal etmiş** ve **Çanakkale Boğazı'nı** zorlamıştır.",
            "**Uşi Antlaşması**; **1912**.",
            "**Trablusgarp ve Bingazi İtalya'ya bırakıldı**, **On İki Ada geçici olarak İtalya'ya verildi**, halkın **halifeye dinî bağlılığı** sürecekti.",
            "**Geçici olarak** verilmişti; ancak Balkan ve I. Dünya savaşları yüzünden **geri alınamadı**, Lozan'da İtalya'da kaldı, **1947'de Yunanistan'a** geçti.",
            "**İslamcılık (Panislamizm) siyasetinin izidir**; Osmanlı, toprağı kaybetse de **halifelik yoluyla manevi bağı** korumak istemiştir.",
            "**Osmanlı'ya karşı Bulgaristan, Sırbistan, Yunanistan ve Karadağ**.",
            "**Rusya'nın kışkırtması** ve **Panslavizm** siyaseti.",
            "**Ordunun siyasete karışması**, **savaş öncesi terhis hatası**, **dört cephede aynı anda savaşma**, **Trablusgarp Savaşı'nın yükü**, **ikmal ve ulaşım yetersizliği**.",
            "**Edirne, Kırklareli ve Selanik**.",
            "**Midye-Enez hattı**; bu hattın batısı kaybedilmiştir (1913).",
            "**Arnavutluk** (I. Balkan Savaşı sırasında bağımsızlığını ilan etti).",
            "**Ganimet paylaşımında Bulgaristan'ın en büyük payı alması** ve diğer devletlerin buna itiraz etmesi.",
            "**Bulgaristan'a karşı Sırbistan, Yunanistan, Karadağ, Romanya ve Osmanlı**.",
            "**Edirne ve Kırklareli geri alınmıştır**.",
            "**Bulgaristan ile imzalanmıştır**; bugünkü **Türkiye-Bulgaristan sınırını** belirlemiş ve **Türk azınlığın haklarını** güvenceye almıştır.",
            "**Yunanistan ile imzalanmıştır**; **Ege adaları Yunanistan'da kalmıştır**.",
            "**Balkan devletlerinin kendi aralarında** imzaladığı antlaşmadır; Osmanlı taraf değildir.",
            "**Osmanlıcılık kesin olarak iflas etmiş**, **Türkçülük akımı güçlenmiş** ve **millî bilinç yükselmiştir**.",
            "**Balkanlardan Anadolu'ya büyük bir göç dalgası** yaşanmış, Anadolu'nun nüfus yapısı değişmiştir.",
        ],
    },
}
