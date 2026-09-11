"""TYT Tarih — Kurtuluş Savaşı (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: KURTULUŞ SAVAŞI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Kurtuluş Savaşı",
    "alt_baslik": "Ham bilgi notu — TBMM dönemi, cepheler, antlaşmalar ve "
                  "Lozan'a giden yol; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
        "kazanimlar": "11.5.1 — TBMM'nin açılışını ve niteliğini açıklar. "
                      "11.5.2 — Kurtuluş Savaşı cephelerini değerlendirir. "
                      "11.5.3 — Savaş sonrası antlaşmaları analiz eder.",
        "kapsam": "TBMM'nin açılışı ve nitelikleri, iç isyanlar, Sevr Antlaşması, "
                  "Doğu ve Güney cepheleri, Batı Cephesi (I.-II. İnönü, Kütahya-"
                  "Eskişehir, Sakarya, Büyük Taarruz), Londra Konferansı, "
                  "Moskova, Kars, Ankara antlaşmaları, Mudanya ve Lozan, "
                  "50 analiz sorusu",
        "nasil": "Cepheleri **sonucuna göre** oku: her savaşın ardından bir "
                 "**diplomatik kazanım** vardır. Askerî başarı ile siyasi "
                 "kazanımı **eşleştirmek** sınavın anahtarıdır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **Sakarya'nın "
                    "sonuçları**, **Sevr-Lozan karşılaştırması** ya da "
                    "**TBMM'nin nitelikleri** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "TBMM Dönemi (23 Nisan 1920)"},
        {"tur": "dikkat", "baslik": "TBMM'nin Nitelikleri", "ogeler": [
            "**Kurucu meclistir**: yeni bir devlet kurmaktadır.",
            "**Güçler birliği (kuvvetler birliği) ilkesi** geçerlidir: "
            "**yasama, yürütme ve yargı** TBMM'dedir → savaş koşullarında "
            "**hızlı karar** almak için.",
            "**Olağanüstü yetkilere** sahiptir.",
            "**Egemenlik kayıtsız şartsız milletindir** ilkesini benimser.",
            "**Meclisin üstünde bir güç yoktur**; padişah ve halifenin durumu "
            "\"düşman baskısından kurtulunca\" görüşülecektir.",
            "**İhtilalci bir meclistir**: İstanbul Hükümeti'ni tanımaz.",
            "**Meclis hükümeti sistemi** uygulanır: bakanlar meclis içinden "
            "**tek tek seçilir**.",
        ]},
        {"tur": "tuzak", "baslik": "TBMM Neden Cumhuriyeti Hemen İlan Etmedi?", "govde":
            "TBMM açıldığında **saltanat ve halifelik hâlâ vardı** ve halkın "
            "büyük bölümü padişaha bağlıydı. Amaç **önce vatanı kurtarmaktı**; "
            "rejim tartışması **birliği bozabilirdi**. Bu yüzden TBMM, "
            "\"padişah ve halifenin durumu **kurtuluştan sonra** belirlenecek\" "
            "diyerek meseleyi **ertelemiştir**. Sınavda \"TBMM'nin saltanata "
            "karşı tavrını ertelemesinin nedeni\" sorulursa cevap **ulusal "
            "birliği korumaktır**."},
        {"tur": "tablo",
         "basliklar": ["İç isyanlar", "Nedeni ve alınan önlemler"],
         "satirlar": [
             ["**İstanbul Hükümeti kaynaklı**",
              "**Anzavur, Kuvayıinzibatiye (Halifelik Ordusu)**; şeyhülislam "
              "**TBMM'ye katılanların öldürülmesinin dinen caiz olduğuna** dair "
              "fetva verdi"],
             ["**Halife ve padişah yanlısı isyanlar**",
              "**Bolu, Düzce, Hendek, Adapazarı, Yozgat, Konya, Afyon** "
              "ayaklanmaları"],
             ["**Azınlık isyanları**",
              "**Rum (Pontus)** ve **Ermeni** ayaklanmaları; devlet kurma amaçlı"],
             ["**Kuvayımilliye kaynaklı**",
              "**Çerkez Ethem** ve **Demirci Mehmet Efe**: düzenli orduya "
              "katılmayı reddettiler"],
             ["**Alınan önlemler**",
              "**Hıyanet-i Vataniye Kanunu (29 Nisan 1920)**, "
              "**İstiklal Mahkemeleri (11 Eylül 1920)**, **Ankara Müftüsü "
              "Rifat Börekçi'nin karşı fetvası**, **Hâkimiyet-i Milliye** "
              "gazetesiyle propaganda"],
         ],
         "oranlar": [0.28, 0.72]},
        {"tur": "dikkat", "baslik": "Sevr Antlaşması (10 Ağustos 1920)", "ogeler": [
            "**Osmanlı Devleti ile İtilaf devletleri** arasında imzalandı; "
            "**TBMM tanımadı**.",
            "**Türkiye'ye bırakılan alan**: İç Anadolu ve Karadeniz'in bir "
            "bölümü — **başkent İstanbul, ordu 50.700 kişi ile sınırlı**.",
            "**Doğu Anadolu'da Ermenistan ve Kürdistan** kurulacak.",
            "**İzmir ve Batı Anadolu Yunanistan'a**, **Antalya-Konya "
            "İtalya'ya**, **Adana-Sivas-Malatya Fransa'ya**, **Arap toprakları "
            "İngiltere'ye**.",
            "**Boğazlar uluslararası bir komisyona** bırakılacak; komisyonda "
            "Türk üye olmayacak.",
            "**Kapitülasyonlar genişletilerek** sürdürülecek; **azınlıklara "
            "geniş haklar** verilecek.",
            "**Hukuken hiç yürürlüğe girmemiştir**: Osmanlı Mebusan Meclisi "
            "kapalı olduğu için **onaylanmamıştır**.",
        ]},
        {"tur": "tuzak", "baslik": "Sevr Neden \"Ölü Doğmuş\" Sayılır?", "govde":
            "**Sevr hukuken hiç yürürlüğe girmemiştir**: bir antlaşmanın "
            "geçerli olması için **meclis onayı** gerekir; Mebusan Meclisi "
            "**16 Mart 1920'de kapatıldığı** için Sevr **onaylanamamıştır**. "
            "Ayrıca **TBMM antlaşmayı imzalayanları vatan haini ilan etmiştir**. "
            "Yine de Sevr, **İtilaf devletlerinin gerçek niyetini** ortaya "
            "koyduğu için **Millî Mücadele'ye katılımı artırmıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Doğu ve Güney Cepheleri"},
        {"tur": "tablo",
         "basliklar": ["Cephe", "Seyri ve sonucu"],
         "satirlar": [
             ["**Doğu Cephesi**",
              "**Kâzım Karabekir** komutasında **Ermenilere** karşı savaşıldı. "
              "**Gümrü Antlaşması (3 Aralık 1920)**: **TBMM'nin ilk siyasi ve "
              "askerî başarısı**, **imzaladığı ilk antlaşma**. Ermeniler "
              "**Sevr'den vazgeçti** → **Sevr'i geçersiz sayan ilk belge**. "
              "**Doğu sınırı güvence altına alındı**; buradaki birlikler "
              "**Batı Cephesi'ne** kaydırıldı"],
             ["**Güney Cephesi**",
              "**Fransızlara** ve Ermeni birliklerine karşı **Kuvayımilliye ve "
              "halk** savaştı; **düzenli ordu yoktur**. **Maraş, Antep ve "
              "Urfa'da** destan yazıldı: **Maraş'a \"Kahraman\"**, "
              "**Antep'e \"Gazi\"**, **Urfa'ya \"Şanlı\"** unvanı verildi. "
              "**Sakarya Zaferi sonrası Ankara Antlaşması (20 Ekim 1921)** ile "
              "cephe kapandı"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "gorsel", "baslik": "Şema 1 — Cephelerin kapanma sırası",
         "aciklama": "Bir cephe kapandığında **oradaki asker Batı'ya** kaydırıldı. "
                     "Bu, Batı Cephesi'ndeki zaferlerin **gizli sebebidir**.",
         "ciz": S.akis(
             ["Doğu Cephesi", "Güney Cephesi", "Batı Cephesi", "Zafer"],
             ["**Gümrü 1920**\nkapandı",
              "**Ankara Ant. 1921**\nkapandı",
              "Bütün güç\n**tek cephede**",
              "**Büyük Taarruz**\n30 Ağustos 1922"])},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Batı Cephesi"},
        {"tur": "tablo",
         "basliklar": ["Savaş", "Tarih", "Sonuçları"],
         "satirlar": [
             ["**I. İnönü**", "6–10 Ocak 1921",
              "**Düzenli ordunun ilk zaferi**. **Teşkilat-ı Esasiye (ilk anayasa) "
              "kabul edildi (20 Ocak 1921)**. **İstiklal Marşı** kabul edildi "
              "(12 Mart 1921). **Londra Konferansı** toplandı → TBMM **ilk kez "
              "İtilaf tarafından çağrıldı**. **Moskova Antlaşması (16 Mart 1921)** "
              "imzalandı → **Sovyet Rusya Misakımillî'yi tanıdı**"],
             ["**II. İnönü**", "23 Mart–1 Nisan 1921",
              "Yunan taarruzu durduruldu. **İtalya Anadolu'dan çekilmeye başladı**. "
              "TBMM'ye **iç ve dış güven** arttı"],
             ["**Kütahya-Eskişehir**", "10–24 Temmuz 1921",
              "**Yenilgi**. Ordu **Sakarya'nın doğusuna** çekildi. "
              "**Meclis'i Kayseri'ye taşıma** tartışması çıktı. "
              "**Mustafa Kemal'e başkomutanlık** verildi (5 Ağustos 1921) ve "
              "**Tekâlif-i Milliye Emirleri** yayımlandı"],
             ["**Sakarya**", "23 Ağustos–13 Eylül 1921",
              "**Dönüm noktası**: 1683 II. Viyana'dan beri süren **geri çekilme "
              "sona erdi**. **Yunan taarruzu kesin olarak durdu**. "
              "**Mustafa Kemal'e \"Gazi\" unvanı ve mareşallik** verildi. "
              "**Fransa ile Ankara Antlaşması (20 Ekim 1921)** → Güney Cephesi "
              "kapandı, **bir İtilaf devleti TBMM'yi resmen tanıdı**. "
              "**Kars Antlaşması (13 Ekim 1921)** ile doğu sınırı kesinleşti"],
             ["**Büyük Taarruz**", "26–30 Ağustos 1922",
              "**Başkomutanlık Meydan Muharebesi (30 Ağustos)** kazanıldı. "
              "**9 Eylül'de İzmir'e** girildi. **Mudanya Ateşkesi (11 Ekim 1922)** "
              "→ **savaş bitti**, **Doğu Trakya savaşsız** alındı"],
         ],
         "oranlar": [0.20, 0.14, 0.66]},
        {"tur": "tuzak", "baslik": "Sakarya Neden Dönüm Noktası?", "govde":
            "**1683 II. Viyana Kuşatması'ndan beri** Türkler Avrupa karşısında "
            "**sürekli geri çekiliyordu**. Sakarya, bu **238 yıllık geri "
            "çekilişi durduran** savaştır. Bundan sonra **taarruz sırası "
            "Türk ordusuna** geçti. Ayrıca zaferin ardından **Fransa (Ankara "
            "Antlaşması) TBMM'yi resmen tanıdı** — **bir İtilaf devletinin "
            "TBMM'yi tanıdığı ilk antlaşmadır**. Bu iki neden, Sakarya'yı "
            "sınavın en çok sorulan savaşı yapar."},
        {"tur": "dikkat", "baslik": "Tekâlif-i Milliye Emirleri (7–8 Ağustos 1921)", "ogeler": [
            "**Millî Yükümlülük Emirleri**; ordunun ihtiyacını **halktan "
            "karşılamak** için çıkarıldı.",
            "Her ilçede **Tekâlif-i Milliye Komisyonları** kuruldu.",
            "Halkın **yiyecek, giyecek, taşıt, akaryakıt ve silahının** bir "
            "bölümüne el konuldu; **karşılığı sonra ödenmek üzere** makbuz "
            "verildi.",
            "**Uygulamayı denetlemek için İstiklal Mahkemeleri** görevlendirildi.",
            "**Topyekûn savaş** anlayışının ve **millî seferberliğin** en açık "
            "örneğidir.",
            "Bu emirler, **Sakarya Zaferi'nin lojistik temelini** oluşturmuştur.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Zafer ve diplomatik kazanım eşleşmesi",
         "aciklama": "Her askerî başarının ardından **bir siyasi kazanım** "
                     "gelmiştir. Sınav bu eşleşmeyi sorar.",
         "ciz": S.kartlar([
             ("I. İnönü", "**Londra Konferansı**\n**Moskova Antlaşması**"),
             ("II. İnönü", "**İtalya çekiliyor**\niç ve dış güven arttı"),
             ("Sakarya", "**Kars ve Ankara**\nantlaşmaları"),
             ("Büyük Taarruz", "**Mudanya Ateşkesi**\nsavaş bitti"),
             ("Gümrü", "**Sevr'i geçersiz**\nsayan ilk belge"),
             ("Mudanya", "**Doğu Trakya**\nsavaşsız alındı"),
         ], sutun=3)},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Antlaşmalar ve Lozan"},
        {"tur": "tablo",
         "basliklar": ["Antlaşma", "Taraf ve önemi"],
         "satirlar": [
             ["**Gümrü (3 Aralık 1920)**",
              "**Ermenistan**; TBMM'nin **imzaladığı ilk antlaşmadır**. "
              "Ermeniler **Sevr'den vazgeçti**"],
             ["**Moskova (16 Mart 1921)**",
              "**Sovyet Rusya**; **Misakımillî'yi tanıyan ilk büyük devlet**. "
              "Çarlık dönemi antlaşmaları geçersiz sayıldı; **Batum Gürcistan'a** "
              "bırakıldı"],
             ["**Kars (13 Ekim 1921)**",
              "**Sovyet Rusya'ya bağlı Kafkas cumhuriyetleri** (Ermenistan, "
              "Gürcistan, Azerbaycan); **bugünkü doğu sınırımız kesinleşti**"],
             ["**Ankara (20 Ekim 1921)**",
              "**Fransa**; **bir İtilaf devletinin TBMM'yi resmen tanıdığı ilk "
              "antlaşmadır**. **Hatay dışında bugünkü Suriye sınırı** çizildi; "
              "**Hatay Fransa'ya bırakıldı** → sorun 1939'a kadar sürdü"],
             ["**Mudanya (11 Ekim 1922)**",
              "**İngiltere, Fransa, İtalya** (Yunanistan sonradan imzaladı); "
              "**silahlı mücadele sona erdi**. **Doğu Trakya ve İstanbul "
              "savaşsız** TBMM'ye bırakıldı → **askerî zaferin diplomatik "
              "karşılığıdır**"],
             ["**Lozan (24 Temmuz 1923)**",
              "**Yeni Türk Devleti'nin tapu senedidir**; bağımsızlık "
              "uluslararası düzeyde tanındı"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "tablo",
         "basliklar": ["Lozan'da çözülen", "Karar"],
         "satirlar": [
             ["**Kapitülasyonlar**", "**Kesin olarak kaldırıldı** → **tam "
              "bağımsızlık** (en büyük kazanım)"],
             ["**Sınırlar**", "**Suriye sınırı Ankara Antlaşması'na göre**; "
              "**Irak sınırı (Musul) ertelendi**; **Batı sınırı Meriç**; "
              "**Karaağaç savaş tazminatı** olarak alındı"],
             ["**Boğazlar**", "**Başkanı Türk olan uluslararası komisyona** "
              "bırakıldı → **egemenliği tam sağlamadı**; **1936 Montrö** ile "
              "çözüldü"],
             ["**Azınlıklar**", "**Türk vatandaşı** sayıldılar; **ayrıcalık "
              "tanınmadı**"],
             ["**Nüfus mübadelesi**", "**İstanbul Rumları ve Batı Trakya "
              "Türkleri dışında** karşılıklı değişim"],
             ["**Osmanlı borçları**", "**Osmanlı'dan ayrılan devletler arasında "
              "paylaştırıldı**; Türkiye'ye düşen kısım **taksitle** ödenecek"],
             ["**Patrikhane**", "**Siyasi yetkisi kaldırıldı**; yalnız dinî "
              "kurum olarak İstanbul'da kaldı"],
             ["**Çözülemeyenler**", "**Musul**, **boğazların tam egemenliği**, "
              "**Hatay** ve **yabancı okullar** sorunları sonraya kaldı"],
         ],
         "oranlar": [0.24, 0.76]},
        {"tur": "gorsel", "baslik": "Şema 3 — Sevr ile Lozan",
         "aciklama": "İki antlaşma arasındaki fark, **üç yıllık askerî "
                     "mücadelenin** karşılığıdır.",
         "ciz": S.karsilastirma(
             "SEVR (1920)",
             ["**Osmanlı Devleti** imzaladı; **TBMM tanımadı**",
              "**Ordu 50.700 kişi** ile sınırlı",
              "**Ermenistan ve Kürdistan** kurulacak",
              "**İzmir Yunanistan'a**, Anadolu paylaşıldı",
              "**Kapitülasyonlar genişletilerek** sürecek",
              "**Boğazlarda Türk üye yok**",
              "**Hiç yürürlüğe girmedi**"],
             "LOZAN (1923)",
             ["**TBMM Hükümeti** imzaladı",
              "**Ordu sınırlaması yok**",
              "**Azınlıklara ayrıcalık yok**; Türk vatandaşıdır",
              "**Batı Anadolu ve Trakya Türkiye'de**",
              "**Kapitülasyonlar kesin olarak kaldırıldı**",
              "**Komisyon başkanı Türk**",
              "**Yeni devletin tapu senedidir**"])},
        {"tur": "cozum",
         "baslik": "Askerî Zafer–Siyasi Kazanım Eşleştirme",
         "soru": "\"Bir askerî zaferin ardından Sovyet Rusya, Türkiye'nin "
                 "Misakımillî sınırlarını tanıyan bir antlaşma imzalamıştır.\"\n"
                 "Söz edilen zafer hangisidir ve bu neyi gösterir?",
         "adimlar": [
             "Sovyet Rusya ile imzalanan ve Misakımillî'yi tanıyan antlaşma → "
             "**Moskova Antlaşması (16 Mart 1921)**.",
             "Bu antlaşmadan hemen önceki askerî başarı → **I. İnönü Zaferi "
             "(Ocak 1921)**.",
             "Aynı dönemde **Londra Konferansı** da toplanmıştır → TBMM ilk kez "
             "**İtilaf tarafından çağrılmıştır**.",
             "Sonuç: askerî başarı, **diplomatik tanınmayı** getirmiştir.",
         ],
         "sonuc": "**I. İnönü Zaferi'dir.** Bu, **askerî başarı olmadan "
                  "diplomatik kazanım elde edilemeyeceğini** gösterir; "
                  "Kurtuluş Savaşı'nın her aşamasında bu ilke geçerlidir."},
        {"tur": "cozum",
         "baslik": "Lozan'ın En Büyük Kazanımı",
         "soru": "Lozan Antlaşması'nın Türkiye açısından en büyük kazanımını "
                 "gerekçesiyle açıklayınız.",
         "adimlar": [
             "**Kapitülasyonların kesin olarak kaldırılması**, Osmanlı'dan beri "
             "süren **ekonomik bağımlılığı** sona erdirdi.",
             "Ekonomik bağımsızlık olmadan **siyasi bağımsızlık sürdürülemez** — "
             "Osmanlı örneği bunu kanıtlamıştı.",
             "Ayrıca **azınlıklara ayrıcalık tanınmaması**, dış devletlerin "
             "**iç işlere karışma gerekçesini** ortadan kaldırdı.",
             "**Yeni Türk Devleti uluslararası düzeyde tanındı**.",
         ],
         "sonuc": "**Kapitülasyonların kaldırılması ve tam bağımsızlığın "
                  "tanınmasıdır.** Bu yüzden Lozan, **yeni Türk Devleti'nin "
                  "tapu senedi** sayılır ve **Sevr'i tarihe gömen belgedir**."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**TBMM'de güçler birliği** vardır; savaş koşulunun gereğidir.",
            "**Hıyanet-i Vataniye Kanunu** ve **İstiklal Mahkemeleri** isyanlara "
            "karşıdır.",
            "**Sevr 10 Ağustos 1920** — **hiç yürürlüğe girmedi**.",
            "**Gümrü TBMM'nin imzaladığı ilk antlaşmadır.**",
            "**Güney Cephesi'nde düzenli ordu yoktur**; halk savaştı.",
            "**Maraş Kahraman, Antep Gazi, Urfa Şanlı** unvanını aldı.",
            "**I. İnönü düzenli ordunun ilk zaferidir.**",
            "**Teşkilat-ı Esasiye 20 Ocak 1921** — **ilk anayasa**.",
            "**Moskova Antlaşması Misakımillî'yi tanıyan** ilk büyük devlettir.",
            "**Kütahya-Eskişehir yenilgidir**; başkomutanlık ve Tekâlif-i "
            "Milliye buradan doğdu.",
            "**Sakarya 1683'ten beri süren geri çekilmeyi** durdurdu.",
            "**Ankara Antlaşması ile Fransa TBMM'yi resmen tanıdı.**",
            "**Kars Antlaşması doğu sınırını** kesinleştirdi.",
            "**Büyük Taarruz 26 Ağustos**, **Başkomutanlık Meydan Muharebesi "
            "30 Ağustos 1922**.",
            "**Mudanya 11 Ekim 1922** — **Doğu Trakya savaşsız** alındı.",
            "**Lozan 24 Temmuz 1923** — **kapitülasyonlar kaldırıldı**.",
            "**Musul, boğazlar, Hatay ve yabancı okullar** Lozan'da çözülemedi.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu bölümde **savaş → antlaşma** eşleştirmesi sorulur. Her savaşın "
            "ardından **hangi belgenin** geldiğini yaz; tarih ezberi tek başına "
            "yetmez.",
        "satir_sayisi": 2,
        "sorular": [
            "TBMM'nin açılış tarihini yazınız.",
            "TBMM'nin niteliklerini yazınız.",
            "Güçler birliği ilkesini ve benimsenme nedenini açıklayınız.",
            "TBMM'nin saltanat konusundaki tutumunu ve nedenini açıklayınız.",
            "Meclis hükümeti sistemini açıklayınız.",
            "İç isyanların nedenlerini gruplayarak yazınız.",
            "Kuvayıinzibatiye'nin ne olduğunu yazınız.",
            "Şeyhülislamın fetvasının amacını ve buna verilen karşılığı yazınız.",
            "Hıyanet-i Vataniye Kanunu'nun tarihini ve amacını yazınız.",
            "İstiklal Mahkemeleri'nin kuruluş tarihini ve işlevini yazınız.",
            "Sevr Antlaşması'nın tarihini ve taraflarını yazınız.",
            "Sevr'in Türkiye'ye bıraktığı alanı yazınız.",
            "Sevr'in ordu ile ilgili maddesini yazınız.",
            "Sevr'in Doğu Anadolu ile ilgili maddesini yazınız.",
            "Sevr'in boğazlarla ilgili maddesini yazınız.",
            "Sevr'in neden hukuken geçersiz olduğunu açıklayınız.",
            "Sevr'in Millî Mücadele'ye etkisini açıklayınız.",
            "Doğu Cephesi'nin komutanını ve düşmanını yazınız.",
            "Gümrü Antlaşması'nın tarihini ve önemini yazınız.",
            "Gümrü'nün Sevr açısından anlamını açıklayınız.",
            "Doğu Cephesi'nin kapanmasının Batı Cephesi'ne katkısını yazınız.",
            "Güney Cephesi'nde savaşan gücün özelliğini yazınız.",
            "Maraş, Antep ve Urfa'ya verilen unvanları yazınız.",
            "Güney Cephesi'nin hangi antlaşmayla kapandığını yazınız.",
            "I. İnönü Savaşı'nın tarihini ve önemini yazınız.",
            "I. İnönü sonrası kabul edilen anayasayı ve tarihini yazınız.",
            "İstiklal Marşı'nın kabul tarihini yazınız.",
            "Londra Konferansı'nın TBMM açısından önemini yazınız.",
            "Moskova Antlaşması'nın tarihini ve önemini yazınız.",
            "II. İnönü Savaşı'nın sonuçlarını yazınız.",
            "Kütahya-Eskişehir Savaşları'nın sonucunu yazınız.",
            "Başkomutanlık yetkisinin verilme tarihini ve nedenini yazınız.",
            "Tekâlif-i Milliye Emirleri'nin amacını ve içeriğini yazınız.",
            "Tekâlif-i Milliye'nin denetimini kimin yaptığını yazınız.",
            "Sakarya Savaşı'nın tarihini yazınız.",
            "Sakarya Savaşı'nın neden dönüm noktası olduğunu açıklayınız.",
            "Sakarya sonrası Mustafa Kemal'e verilen unvanları yazınız.",
            "Kars Antlaşması'nın tarafını ve önemini yazınız.",
            "Ankara Antlaşması'nın tarihini, tarafını ve önemini yazınız.",
            "Ankara Antlaşması'nda Hatay'ın durumunu yazınız.",
            "Büyük Taarruz'un başlangıç tarihini yazınız.",
            "Başkomutanlık Meydan Muharebesi'nin tarihini yazınız.",
            "İzmir'e giriş tarihini yazınız.",
            "Mudanya Ateşkesi'nin tarihini ve taraflarını yazınız.",
            "Mudanya ile savaşsız kazanılan yerleri yazınız.",
            "Lozan Antlaşması'nın tarihini yazınız.",
            "Lozan'da kapitülasyonlarla ilgili kararı ve önemini yazınız.",
            "Lozan'da azınlıklarla ilgili kararı yazınız.",
            "Lozan'da çözülemeyen sorunları yazınız.",
            "Sevr ile Lozan'ı beş başlıkta karşılaştırınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**23 Nisan 1920**.",
            "**Kurucu**, **ihtilalci**, **olağanüstü yetkili** bir meclistir; **güçler birliği** ilkesini benimser ve **ulusal egemenliği** esas alır.",
            "**Yasama, yürütme ve yargının TBMM'de toplanmasıdır**; savaş koşullarında **hızlı karar almak** için benimsenmiştir.",
            "**Ertelemiştir**; padişah ve halifenin durumu \"düşman baskısından kurtulunca\" görüşülecektir. Neden: **ulusal birliği korumak** ve rejim tartışmasıyla mücadeleyi bölmemektir.",
            "**Bakanların meclis içinden tek tek seçilmesidir**; ayrı bir başbakan yoktur, meclis başkanı aynı zamanda hükümetin de başkanıdır.",
            "**İstanbul Hükümeti kaynaklı** (Anzavur, Kuvayıinzibatiye), **halife-padişah yanlısı** (Bolu, Düzce, Yozgat, Konya), **azınlık** (Rum, Ermeni) ve **Kuvayımilliye kaynaklı** (Çerkez Ethem) isyanlar.",
            "**Halifelik Ordusu** da denen, İstanbul Hükümeti tarafından TBMM'ye karşı kurulan **silahlı birliktir**.",
            "**TBMM'ye katılanların öldürülmesinin dinen caiz olduğunu** ilan ederek halkı Millî Mücadele'den uzaklaştırmaktır; buna karşı **Ankara Müftüsü Rifat Börekçi karşı fetva** vermiştir.",
            "**29 Nisan 1920**; **vatana ihanet suçlarını** yargılamak ve iç isyanları bastırmaktır.",
            "**11 Eylül 1920**; isyanları ve asker kaçaklarını yargılamış, **Tekâlif-i Milliye uygulamasını** denetlemiştir.",
            "**10 Ağustos 1920**; **Osmanlı Devleti ile İtilaf devletleri** arasında imzalanmıştır.",
            "**İç Anadolu ve Karadeniz'in bir bölümü**; başkent İstanbul'dur.",
            "**Ordu 50.700 kişiyle sınırlanmış**, ağır silah bulundurulması yasaklanmıştır.",
            "**Ermenistan ve Kürdistan** adında iki devlet kurulacaktı.",
            "**Uluslararası bir komisyona** bırakılacak ve komisyonda **Türk üye bulunmayacaktı**.",
            "**Mebusan Meclisi 16 Mart 1920'de kapatıldığı için onaylanamamıştır**; bir antlaşmanın geçerliliği meclis onayına bağlıdır.",
            "İtilaf devletlerinin **gerçek niyetini** açıkça ortaya koymuş, halkın **Millî Mücadele'ye katılımını artırmıştır**.",
            "**Kâzım Karabekir**; **Ermenilere** karşı savaşılmıştır.",
            "**3 Aralık 1920**; **TBMM'nin imzaladığı ilk antlaşmadır** ve ilk siyasi-askerî başarısıdır.",
            "Ermeniler **Sevr'den vazgeçmiştir**; bu yönüyle Gümrü, **Sevr'i geçersiz sayan ilk belgedir**.",
            "Doğu sınırı güvence altına alınmış, buradaki **birlikler Batı Cephesi'ne kaydırılmıştır**.",
            "**Düzenli ordu yoktur**; **Kuvayımilliye ve halk** savaşmıştır.",
            "**Maraş \"Kahraman\"**, **Antep \"Gazi\"**, **Urfa \"Şanlı\"**.",
            "**Ankara Antlaşması (20 Ekim 1921)**.",
            "**6–10 Ocak 1921**; **düzenli ordunun ilk zaferidir**.",
            "**Teşkilat-ı Esasiye Kanunu**; **20 Ocak 1921**.",
            "**12 Mart 1921**.",
            "TBMM **ilk kez İtilaf devletleri tarafından konferansa çağrılmıştır**; bu, hukuken **tanınma yolunda** ilk adımdır.",
            "**16 Mart 1921**; **Sovyet Rusya Misakımillî'yi tanıyan ilk büyük devlettir**.",
            "Yunan taarruzu durdurulmuş, **İtalya Anadolu'dan çekilmeye başlamış**, TBMM'ye iç ve dış güven artmıştır.",
            "**Yenilgiyle sonuçlanmış**, ordu **Sakarya'nın doğusuna** çekilmiş, meclisi Kayseri'ye taşıma tartışması çıkmıştır.",
            "**5 Ağustos 1921**; Kütahya-Eskişehir yenilgisi sonrası **hızlı ve tek elden karar** alabilmek için Mustafa Kemal'e verilmiştir.",
            "**Ordunun ihtiyacını halktan karşılamaktır**; yiyecek, giyecek, taşıt, akaryakıt ve silahın bir bölümüne **makbuz karşılığı** el konulmuştur.",
            "**İstiklal Mahkemeleri**.",
            "**23 Ağustos–13 Eylül 1921**.",
            "**1683 II. Viyana Kuşatması'ndan beri süren geri çekilme sona ermiştir**; taarruz sırası Türk ordusuna geçmiştir.",
            "**\"Gazi\" unvanı ve mareşallik rütbesi**.",
            "**Sovyet Rusya'ya bağlı Kafkas cumhuriyetleri** (Ermenistan, Gürcistan, Azerbaycan); **bugünkü doğu sınırımızı kesinleştirmiştir** (13 Ekim 1921).",
            "**20 Ekim 1921**; **Fransa** ile. **Bir İtilaf devletinin TBMM'yi resmen tanıdığı ilk antlaşmadır** ve Güney Cephesi kapanmıştır.",
            "**Hatay Fransa'ya (Suriye'ye) bırakılmıştır**; sorun **1939'a** kadar sürmüştür.",
            "**26 Ağustos 1922**.",
            "**30 Ağustos 1922**.",
            "**9 Eylül 1922**.",
            "**11 Ekim 1922**; **İngiltere, Fransa ve İtalya** ile (Yunanistan sonradan imzalamıştır).",
            "**Doğu Trakya ve İstanbul** savaşsız olarak TBMM'ye bırakılmıştır.",
            "**24 Temmuz 1923**.",
            "**Kesin olarak kaldırılmıştır**; bu, **tam bağımsızlığın** en önemli göstergesidir ve Lozan'ın en büyük kazanımıdır.",
            "**Türk vatandaşı sayılmışlardır**; **hiçbir ayrıcalık tanınmamıştır** — böylece dış müdahale gerekçesi ortadan kalkmıştır.",
            "**Musul**, **boğazların tam egemenliği**, **Hatay** ve **yabancı okullar** sorunları.",
            "**İmzalayan**: Sevr Osmanlı, Lozan TBMM. **Ordu**: Sevr'de sınırlı, Lozan'da sınırsız. **Toprak**: Sevr'de paylaşım, Lozan'da Misakımillî'ye yakın sınırlar. **Kapitülasyon**: Sevr'de genişletildi, Lozan'da kaldırıldı. **Geçerlilik**: Sevr hiç yürürlüğe girmedi, Lozan yürürlüktedir.",
        ],
    },
}
