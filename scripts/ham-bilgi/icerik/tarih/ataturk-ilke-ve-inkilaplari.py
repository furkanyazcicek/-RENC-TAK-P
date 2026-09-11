"""TYT Tarih — Atatürk İlke ve İnkılapları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: ATATÜRK İLKE VE İNKILAPLARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Atatürk İlke ve İnkılapları",
    "alt_baslik": "Ham bilgi notu — siyasi, hukuk, eğitim, toplumsal ve ekonomik "
                  "inkılaplar ile altı ilke; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
        "kazanimlar": "11.6.1 — Atatürk dönemi inkılaplarını alanlarına göre "
                      "sınıflandırır. 11.6.2 — İnkılapların amaçlarını ve "
                      "sonuçlarını değerlendirir. 11.6.3 — Atatürk ilkelerini "
                      "ve bütünleyici ilkeleri açıklar.",
        "kapsam": "Saltanatın ve halifeliğin kaldırılması, Cumhuriyet'in ilanı, "
                  "çok partili hayat denemeleri, anayasalar, hukuk-eğitim-"
                  "toplumsal-ekonomik inkılaplar, altı temel ilke ve bütünleyici "
                  "ilkeler, 50 analiz sorusu",
        "nasil": "İnkılapları **tek tek değil, amacına göre** çalış. Her "
                 "inkılabın **hangi ilkeye hizmet ettiğini** eşleştirmek "
                 "sınavın anahtarıdır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **inkılap-ilke "
                    "eşleştirmesi** ya da **laiklik aşamaları** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Siyasi Alandaki İnkılaplar"},
        {"tur": "tablo",
         "basliklar": ["İnkılap", "Tarih", "Nedeni ve sonucu"],
         "satirlar": [
             ["**Saltanatın kaldırılması**", "1 Kasım 1922",
              "**Neden**: Lozan'a İstanbul Hükümeti'nin de çağrılması "
              "(**iki başlılık**). **Sonuç**: Osmanlı Devleti hukuken sona erdi, "
              "**millî egemenlik** yolunda büyük adım atıldı; **halifelik "
              "kaldı** (geçici uzlaşma)"],
             ["**Ankara'nın başkent olması**", "13 Ekim 1923",
              "Güvenlik, coğrafi konum ve **yeni devletin yeni merkezi** olması "
              "düşüncesi"],
             ["**Cumhuriyet'in ilanı**", "29 Ekim 1923",
              "**Neden**: hükümet kurma bunalımı ve **devletin adının "
              "konmamış olması**. **Sonuç**: **devlet başkanlığı sorunu "
              "çözüldü**, **meclis hükümeti yerine kabine sistemi** geldi, "
              "**Mustafa Kemal ilk cumhurbaşkanı** oldu"],
             ["**Halifeliğin kaldırılması**", "3 Mart 1924",
              "**Neden**: halifeliğin **eski düzen yanlılarının odağı** hâline "
              "gelmesi ve **çift başlılık**. **Sonuç**: **laikliğin önündeki "
              "en büyük engel kalktı**, inkılapların önü açıldı; aynı gün "
              "**Tevhid-i Tedrisat** ve **Şeriye ve Evkaf Vekâleti'nin "
              "kaldırılması**"],
             ["**Çok partili hayat denemeleri**", "1924 / 1930",
              "**Terakkiperver Cumhuriyet Fırkası (1924)** — **Şeyh Sait "
              "İsyanı** sonrası kapatıldı. **Serbest Cumhuriyet Fırkası (1930)** "
              "— kendisi kapandı. **Menemen Olayı (1930)** denemeleri "
              "sonlandırdı"],
         ],
         "oranlar": [0.24, 0.14, 0.62]},
        {"tur": "tuzak", "baslik": "Saltanat ile Halifelik Neden Aynı Anda Kaldırılmadı?", "govde":
            "**Saltanat 1922'de**, **halifelik 1924'te** kaldırıldı. Arada "
            "**16 ay** vardır çünkü halkın büyük bölümü halifeliğe bağlıydı ve "
            "**ikisini birden kaldırmak tepki çekebilirdi**. Ayrıca halifelik, "
            "geçiş döneminde **toplumsal denge** işlevi gördü. Ancak halife "
            "**eski düzen yanlılarının odağı** hâline gelince ve **çift "
            "başlılık** doğunca kaldırıldı. Sınavda \"aşamalı yöntem\" olarak "
            "sorulur."},
        {"tur": "gorsel", "baslik": "Şema 1 — Laikliğe giden basamaklar",
         "aciklama": "Laiklik **tek bir kanunla** gelmedi; **aşama aşama** "
                     "kuruldu. Sınavda \"laikliğe geçiş sürecinde hangisi "
                     "önce/sonra\" sorulur.",
         "ciz": S.dikey_akis(
             ["Saltanatın kaldırılması 1922", "Halifeliğin kaldırılması 1924",
              "Tevhid-i Tedrisat 1924", "Medeni Kanun 1926",
              "Anayasadan din maddesinin çıkarılması 1928",
              "Laikliğin anayasaya girmesi 1937"],
             ["Egemenliğin kaynağı **milletе** geçti.",
              "Aynı gün **Şeriye ve Evkaf Vekâleti** de kaldırıldı.",
              "**Eğitim birleştirildi**; medreseler kapatıldı.",
              "**Hukuk birliği** sağlandı; aile hukuku laikleşti.",
              "**\"Devletin dini İslam'dır\"** maddesi çıkarıldı.",
              "**Laiklik ilkesi anayasaya** girdi; süreç tamamlandı."])},
        {"tur": "dikkat", "baslik": "Anayasalar", "ogeler": [
            "**Teşkilat-ı Esasiye (1921)**: **ilk anayasadır**; kısa ve "
            "olağanüstü dönem anayasasıdır. **Egemenlik kayıtsız şartsız "
            "milletindir**. **Güçler birliği** vardır.",
            "**1921'de değişiklik (29 Ekim 1923)**: \"**Türkiye Devleti'nin "
            "şekl-i hükûmeti cumhuriyettir**\" maddesi eklendi.",
            "**1924 Anayasası**: **Cumhuriyet'in ilk kapsamlı anayasasıdır**; "
            "**1961'e kadar** yürürlükte kaldı. **1928'de laikliğe aykırı "
            "maddeler**, **1937'de altı ilke** eklendi.",
            "**1961 ve 1982 anayasaları** Atatürk dönemi dışındadır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hukuk, Eğitim ve Toplumsal İnkılaplar"},
        {"tur": "tablo",
         "basliklar": ["Alan", "İnkılap ve amacı"],
         "satirlar": [
             ["**Hukuk**",
              "**Şeriye Mahkemeleri kaldırıldı (1924)**. **Türk Medeni Kanunu "
              "(17 Şubat 1926)** — İsviçre'den alındı: **tek eşlilik**, "
              "**resmî nikâh**, **kadın-erkek eşitliği**, **mirasta eşitlik**, "
              "**boşanmada eşit hak**. Ayrıca **Ceza, Ticaret, Borçlar ve İcra "
              "kanunları** çıkarıldı. **Amaç: hukuk birliği ve laiklik**"],
             ["**Eğitim**",
              "**Tevhid-i Tedrisat Kanunu (3 Mart 1924)**: bütün okullar **Millî "
              "Eğitim Bakanlığı'na** bağlandı, **medreseler kapatıldı** → "
              "**eğitim birliği ve laiklik**. **Yeni Türk harfleri (1 Kasım "
              "1928)**. **Millet Mektepleri (1928)**. **Türk Dil ve Tarih "
              "kurumları (1931-32)**. **Üniversite reformu (1933)**"],
             ["**Toplumsal**",
              "**Şapka Kanunu (1925)**, **tekke, zaviye ve türbelerin "
              "kapatılması (1925)**, **takvim-saat-ölçü değişikliği (1925-31)**, "
              "**soyadı kanunu (1934)**, **lakap ve unvanların kaldırılması "
              "(1934)**, **kadınlara seçme-seçilme hakkı (1930 belediye, "
              "1933 muhtarlık, 1934 milletvekili)**"],
             ["**Ekonomik**",
              "**İzmir İktisat Kongresi (1923)** ve **Misakıiktisadi**. "
              "**Aşar vergisi kaldırıldı (1925)**. **Kabotaj Kanunu (1 Temmuz "
              "1926)**. **Teşvik-i Sanayi Kanunu (1927)**. **I. Beş Yıllık "
              "Sanayi Planı (1934)**. **Merkez Bankası (1930)**, **İş Bankası "
              "(1924)**, **Sümerbank (1933)**, **Etibank (1935)**"],
         ],
         "oranlar": [0.16, 0.84]},
        {"tur": "tuzak", "baslik": "Medeni Kanun Neden İsviçre'den Alındı?", "govde":
            "**En yeni ve çağdaş** medeni kanunlardan biriydi (1912). "
            "**Demokratik ve laik** yapıdaydı, **kadın-erkek eşitliğini** "
            "gözetiyordu. **Sade ve anlaşılır** bir dille yazılmıştı, "
            "**boşluk ve çelişki azdı**. Ayrıca **Avrupa hukuk sistemine "
            "uyumluydu** ve **uygulaması kolaydı**. Sınavda doğrudan "
            "\"neden İsviçre\" diye sorulur."},
        {"tur": "gorsel", "baslik": "Şema 2 — Medeni Kanun'un getirdikleri",
         "aciklama": "Medeni Kanun, **kadın haklarının** ve **hukuk birliğinin** "
                     "temelidir. Kartların her biri ayrı ayrı sorulur.",
         "ciz": S.kartlar([
             ("Tek eşlilik", "Çok eşlilik\n**yasaklandı**"),
             ("Resmî nikâh", "Evlilik **devlet**\nkaydına bağlandı"),
             ("Mirasta eşitlik", "Kadın ve erkek\n**eşit pay** alır"),
             ("Boşanmada eşit hak", "Kadın da **mahkemeye**\nbaşvurabilir"),
             ("Hukuk birliği", "Herkese **tek hukuk**;\ncemaat mahkemeleri bitti"),
             ("Kadına meslek hakkı", "**Çalışma ve tanıklıkta**\neşitlik"),
         ], sutun=3)},
        {"tur": "dikkat", "baslik": "Ekonomik İnkılapların Anlamı", "ogeler": [
            "**İzmir İktisat Kongresi (1923)**: **Misakıiktisadi** kabul edildi — "
            "**millî ekonomi** ve **tam bağımsızlık** ilkesi.",
            "**Aşar vergisinin kaldırılması (1925)**: köylünün üzerindeki "
            "**Osmanlı'dan kalma ağır yükü** kaldırdı; **halkçılık** ilkesinin "
            "örneğidir.",
            "**Kabotaj Kanunu (1926)**: Türk karasularında **taşımacılık hakkı "
            "yalnızca Türk gemilerine** verildi → **tam bağımsızlık ve "
            "milliyetçilik**.",
            "**Teşvik-i Sanayi Kanunu (1927)**: özel girişimi destekleme; "
            "**liberal dönem**.",
            "**1929 Dünya Ekonomik Bunalımı** sonrası **devletçiliğe** geçildi; "
            "**I. Beş Yıllık Sanayi Planı (1934)** uygulandı.",
            "**Sümerbank, Etibank ve Denizbank** devletçilik döneminin "
            "kurumlarıdır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Atatürk İlkeleri"},
        {"tur": "tablo",
         "basliklar": ["İlke", "Anlamı", "Örnek inkılaplar"],
         "satirlar": [
             ["**Cumhuriyetçilik**",
              "Egemenliğin **millete** ait olması; yöneticilerin **seçimle** "
              "belirlenmesi",
              "Cumhuriyet'in ilanı, TBMM'nin açılışı, siyasi partiler, "
              "kadınlara seçme-seçilme hakkı"],
             ["**Milliyetçilik**",
              "**Türk milletini sevmek ve yüceltmek**; ırk değil **ortak "
              "vatan, dil, kültür ve ülkü** birliği",
              "Kabotaj Kanunu, Türk Dil ve Tarih kurumları, misakımillî, "
              "kapitülasyonların kaldırılması"],
             ["**Halkçılık**",
              "**Kanun önünde eşitlik**, **ayrıcalık tanımama**, halkın "
              "yönetime katılması",
              "Aşarın kaldırılması, soyadı kanunu, unvanların kaldırılması, "
              "Medeni Kanun, kadın hakları"],
             ["**Devletçilik**",
              "Özel sektörün yetmediği alanlarda **devletin ekonomiye "
              "girmesi**",
              "I. Beş Yıllık Sanayi Planı, Sümerbank, Etibank, demiryolları"],
             ["**Laiklik**",
              "**Din ile devlet işlerinin ayrılması**; devletin **bütün "
              "inançlara eşit** mesafede olması",
              "Halifeliğin kaldırılması, Tevhid-i Tedrisat, Medeni Kanun, "
              "Şeriye Mahkemeleri'nin kaldırılması, tekke ve zaviyelerin "
              "kapatılması"],
             ["**İnkılapçılık**",
              "**Sürekli yenileşme**; çağın gereklerine uyum",
              "Harf inkılabı, kılık-kıyafet, takvim-saat-ölçü, üniversite "
              "reformu"],
         ],
         "oranlar": [0.18, 0.36, 0.46]},
        {"tur": "taktik", "baslik": "İnkılabı İlkeyle Eşleştirmenin Kestirmesi", "govde":
            "**Din-devlet ayrımı varsa → laiklik.** **Eşitlik ve ayrıcalık "
            "kaldırma varsa → halkçılık.** **Seçim, meclis, egemenlik varsa → "
            "cumhuriyetçilik.** **Dil, tarih, vatan, bağımsız ekonomi varsa → "
            "milliyetçilik.** **Devletin fabrika kurması, planlama varsa → "
            "devletçilik.** **Eskiyi bırakıp yeniyi alma varsa → inkılapçılık.** "
            "Bir inkılap **birden çok ilkeyle** ilgili olabilir; sorunun "
            "istediği **ağırlıklı ilkedir**."},
        {"tur": "tablo",
         "basliklar": ["Bütünleyici ilke", "Anlamı"],
         "satirlar": [
             ["**Millî egemenlik**", "Egemenliğin **millete** ait olması — "
              "cumhuriyetçiliği tamamlar"],
             ["**Millî birlik ve beraberlik**", "Toplumun **bölünmez bütünlüğü** — "
              "milliyetçiliği tamamlar"],
             ["**Yurtta sulh, cihanda sulh**", "**Barışçı dış politika** — "
              "milliyetçiliği ve cumhuriyetçiliği tamamlar"],
             ["**Millî bağımsızlık**", "**Tam bağımsızlık**: siyasi, ekonomik, "
              "askerî, kültürel"],
             ["**Çağdaşlaşma (muasırlaşma)**", "**Çağın gereklerine uyum** — "
              "inkılapçılığı tamamlar"],
             ["**Bilimsellik ve akılcılık**", "Kararların **akıl ve bilime** "
              "dayanması — laikliği ve inkılapçılığı tamamlar"],
             ["**İnsan ve insanlık sevgisi**", "**Barış ve hoşgörü** temelli "
              "insan anlayışı"],
         ],
         "oranlar": [0.32, 0.68]},
        {"tur": "cozum",
         "baslik": "İnkılap–İlke Eşleştirmesi",
         "soru": "Aşağıdaki inkılapların hangi ilkeyle doğrudan ilgili olduğunu "
                 "yazınız.\n**I.** Aşar vergisinin kaldırılması\n"
                 "**II.** Kabotaj Kanunu\n**III.** Tevhid-i Tedrisat Kanunu\n"
                 "**IV.** Sümerbank'ın kurulması",
         "adimlar": [
             "**I.** Köylünün üzerindeki ağır vergi yükünün kaldırılması → "
             "**eşitlik ve halkın yararı** → **halkçılık**.",
             "**II.** Türk karasularında taşımacılığın Türklere verilmesi → "
             "**millî ekonomi ve bağımsızlık** → **milliyetçilik**.",
             "**III.** Eğitimin tek çatı altında toplanıp medreselerin "
             "kapatılması → **din-devlet ayrımı** → **laiklik**.",
             "**IV.** Devletin fabrika kurup ekonomiye girmesi → **devletçilik**.",
         ],
         "sonuc": "**I: halkçılık**, **II: milliyetçilik**, **III: laiklik**, "
                  "**IV: devletçilik**. Bir inkılabın **birincil amacı** hangi "
                  "ilkeye hizmet ediyorsa cevap odur."},
        {"tur": "cozum",
         "baslik": "İnkılapların Ortak Amacı",
         "soru": "Atatürk inkılaplarının ortak amacını ve uygulanma yöntemini "
                 "açıklayınız.",
         "adimlar": [
             "**Ortak amaç**: **çağdaş, laik ve bağımsız bir ulus devlet** "
             "kurmak; toplumu **muasır medeniyet seviyesine** çıkarmak.",
             "**Yöntem 1 — aşamalılık**: saltanat 1922, halifelik 1924, "
             "laiklik 1937 — **toplumu hazırlayarak** adım adım.",
             "**Yöntem 2 — hukuki zemin**: her inkılap **kanunla** yapılmıştır; "
             "keyfî uygulama yoktur.",
             "**Yöntem 3 — akılcılık ve bilimsellik**: örnek alınan kurumlar "
             "**incelenerek** seçilmiştir (İsviçre Medeni Kanunu gibi).",
             "**Yöntem 4 — bütünlük**: siyasi, hukuki, eğitim, toplumsal ve "
             "ekonomik alanlar **birlikte** dönüştürülmüştür.",
         ],
         "sonuc": "**Amaç çağdaş, laik ve bağımsız bir ulus devlet kurmaktır; "
                  "yöntem aşamalı, hukuka dayalı ve bütüncüldür.** İnkılapların "
                  "kalıcı olmasının nedeni de budur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Saltanat 1 Kasım 1922'de** kaldırıldı — nedeni **Lozan'daki "
            "çift başlılıktır**.",
            "**Cumhuriyet 29 Ekim 1923'te** ilan edildi.",
            "**Halifelik 3 Mart 1924'te** kaldırıldı; aynı gün **Tevhid-i "
            "Tedrisat**.",
            "**Terakkiperver Fırka Şeyh Sait İsyanı** sonrası kapatıldı.",
            "**Serbest Cumhuriyet Fırkası (1930)** kendisi kapandı.",
            "**Teşkilat-ı Esasiye 1921 ilk anayasadır.**",
            "**1924 Anayasası 1961'e kadar** yürürlükte kaldı.",
            "**Medeni Kanun 17 Şubat 1926**; **İsviçre'den** alındı.",
            "**Tevhid-i Tedrisat eğitim birliğini** sağladı.",
            "**Harf inkılabı 1 Kasım 1928**.",
            "**Kabotaj Kanunu 1 Temmuz 1926**.",
            "**Aşar 1925'te** kaldırıldı.",
            "**Soyadı Kanunu 1934**.",
            "**Kadınlara milletvekili seçme-seçilme hakkı 1934**.",
            "**Laiklik anayasaya 1937'de** girdi.",
            "**Devletçiliğe 1929 bunalımı** sonrası geçildi.",
            "**Bütünleyici ilkeler altı temel ilkeyi** tamamlar.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu bölümde **inkılap-ilke eşleştirmesi** ve **tarih sıralaması** "
            "sorulur. Her inkılabın yanına **amacını** ve **ilgili ilkesini** "
            "yaz.",
        "satir_sayisi": 2,
        "sorular": [
            "Saltanatın kaldırılma tarihini ve nedenini yazınız.",
            "Saltanatın kaldırılmasının sonuçlarını yazınız.",
            "Ankara'nın başkent olma tarihini ve nedenlerini yazınız.",
            "Cumhuriyet'in ilan tarihini ve nedenini yazınız.",
            "Cumhuriyet'in ilanının getirdiği yönetim değişikliğini yazınız.",
            "Halifeliğin kaldırılma tarihini ve nedenlerini yazınız.",
            "Halifeliğin kaldırıldığı gün çıkarılan diğer kanunları yazınız.",
            "Saltanat ile halifeliğin aynı anda kaldırılmama nedenini açıklayınız.",
            "Terakkiperver Cumhuriyet Fırkası'nın kuruluş ve kapanış nedenini yazınız.",
            "Serbest Cumhuriyet Fırkası'nın kuruluş amacını ve sonucunu yazınız.",
            "Menemen Olayı'nın sonucunu yazınız.",
            "Teşkilat-ı Esasiye Kanunu'nun tarihini ve özelliklerini yazınız.",
            "1924 Anayasası'nın yürürlükte kalma süresini yazınız.",
            "1928 anayasa değişikliğini yazınız.",
            "Laiklik ilkesinin anayasaya girdiği yılı yazınız.",
            "Şeriye Mahkemeleri'nin kaldırılma tarihini yazınız.",
            "Türk Medeni Kanunu'nun kabul tarihini yazınız.",
            "Medeni Kanun'un İsviçre'den alınma nedenlerini yazınız.",
            "Medeni Kanun'un kadın haklarına getirdiklerini yazınız.",
            "Medeni Kanun'un hukuk birliğine katkısını açıklayınız.",
            "Tevhid-i Tedrisat Kanunu'nun tarihini ve amacını yazınız.",
            "Tevhid-i Tedrisat'ın laiklikle ilişkisini açıklayınız.",
            "Harf inkılabının tarihini ve amacını yazınız.",
            "Millet Mektepleri'nin kuruluş amacını yazınız.",
            "Türk Dil ve Tarih kurumlarının kuruluş amacını yazınız.",
            "Şapka Kanunu'nun tarihini yazınız.",
            "Tekke, zaviye ve türbelerin kapatılma nedenini yazınız.",
            "Takvim, saat ve ölçü değişikliklerinin amacını yazınız.",
            "Soyadı Kanunu'nun tarihini ve amacını yazınız.",
            "Lakap ve unvanların kaldırılmasının hangi ilkeyle ilgili olduğunu yazınız.",
            "Kadınlara verilen siyasi hakları tarihleriyle yazınız.",
            "İzmir İktisat Kongresi'nin tarihini ve kabul edilen belgeyi yazınız.",
            "Misakıiktisadi'nin temel ilkesini yazınız.",
            "Aşar vergisinin kaldırılma tarihini ve önemini yazınız.",
            "Kabotaj Kanunu'nun tarihini ve içeriğini yazınız.",
            "Teşvik-i Sanayi Kanunu'nun amacını yazınız.",
            "Devletçiliğe geçiş nedenini açıklayınız.",
            "I. Beş Yıllık Sanayi Planı'nın tarihini yazınız.",
            "Sümerbank ve Etibank'ın kuruluş amacını yazınız.",
            "Cumhuriyetçilik ilkesini açıklayınız ve iki örnek veriniz.",
            "Milliyetçilik ilkesini açıklayınız ve iki örnek veriniz.",
            "Halkçılık ilkesini açıklayınız ve iki örnek veriniz.",
            "Devletçilik ilkesini açıklayınız ve iki örnek veriniz.",
            "Laiklik ilkesini açıklayınız ve üç örnek veriniz.",
            "İnkılapçılık ilkesini açıklayınız ve iki örnek veriniz.",
            "Bütünleyici ilkelerden dördünü yazınız.",
            "Yurtta sulh cihanda sulh ilkesini açıklayınız.",
            "Laikliğe geçiş aşamalarını sırayla yazınız.",
            "İnkılapların ortak amacını yazınız.",
            "İnkılapların uygulanma yöntemini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**1 Kasım 1922**; **Lozan'a İstanbul Hükümeti'nin de çağrılması** ve doğan **çift başlılık**.",
            "**Osmanlı Devleti hukuken sona ermiş**, **millî egemenlik** yolunda büyük adım atılmış, Lozan'a tek temsilci gönderilmiştir; **halifelik kalmıştır**.",
            "**13 Ekim 1923**; **güvenlik (İstanbul işgale açıktı)**, **coğrafi konum (Anadolu'nun merkezi)** ve **yeni devlete yeni merkez** düşüncesi.",
            "**29 Ekim 1923**; **hükümet kurma bunalımı** ve **devletin adının konmamış olması**.",
            "**Meclis hükümeti sistemi yerine kabine sistemi** gelmiş, **devlet başkanlığı sorunu çözülmüş**, Mustafa Kemal **ilk cumhurbaşkanı** olmuştur.",
            "**3 Mart 1924**; halifeliğin **eski düzen yanlılarının odağı** hâline gelmesi ve **çift başlılık** yaratması.",
            "**Tevhid-i Tedrisat Kanunu** ve **Şeriye ve Evkaf Vekâleti'nin kaldırılması** (ayrıca Erkân-ı Harbiye Vekâleti kaldırıldı).",
            "Halkın büyük bölümü halifeliğe bağlıydı; **ikisini birden kaldırmak tepki çekebilirdi**. Halifelik geçiş döneminde **toplumsal denge** işlevi gördü — bu, inkılapların **aşamalı yönteminin** örneğidir.",
            "**1924**'te ilk muhalefet partisi olarak kuruldu; **Şeyh Sait İsyanı** sonrası **Takrir-i Sükûn Kanunu** ile kapatıldı.",
            "**1930**'da Atatürk'ün isteğiyle **denetim ve demokrasi** amacıyla kuruldu; rejim karşıtlarının toplanma yeri hâline gelince **kendi kendini feshetti**.",
            "**Çok partili hayata geçiş denemeleri sona ermiş**, tek partili döneme dönülmüştür (1930).",
            "**20 Ocak 1921**; **ilk anayasadır**, kısadır, **güçler birliği** ilkesine dayanır ve **egemenliğin millete ait olduğunu** belirtir.",
            "**1961'e kadar** (yaklaşık 37 yıl).",
            "**\"Devletin dini İslam'dır\"** maddesi anayasadan çıkarılmıştır.",
            "**1937**.",
            "**1924** (halifeliğin kaldırıldığı dönemde).",
            "**17 Şubat 1926**.",
            "**En yeni ve çağdaş** kanunlardan biri olması, **laik ve demokratik** yapısı, **kadın-erkek eşitliğini** gözetmesi, **sade ve anlaşılır** dili ve **uygulama kolaylığı**.",
            "**Tek eşlilik**, **resmî nikâh**, **mirasta eşitlik**, **boşanmada eşit hak**, **tanıklıkta ve çalışmada eşitlik**.",
            "**Herkese tek hukuk** uygulanmaya başlanmış, **cemaat mahkemeleri ve azınlık hukuku** sona ermiş, hukuki ikilik ortadan kalkmıştır.",
            "**3 Mart 1924**; **eğitimi tek çatı altında toplamak (eğitim birliği)** ve **laik eğitime** geçmek.",
            "**Medreseler kapatılmış**, bütün okullar **Millî Eğitim Bakanlığı'na** bağlanmıştır; din temelli eğitim kurumları sona ermiştir.",
            "**1 Kasım 1928**; **okuma yazmayı kolaylaştırmak** ve **çağdaş eğitime** geçmek.",
            "**Yeni harflerle halka okuma yazma öğretmek** (1928).",
            "**Türk dilini yabancı sözcüklerden arındırmak** ve **Türk tarihini bilimsel yöntemle araştırmak**; milliyetçilik ilkesine hizmet eder.",
            "**1925**.",
            "**Toplumdaki hurafe ve batıl inançları önlemek**, **akılcı ve laik** bir toplum yapısı kurmak ve **birlik-beraberliği** korumak.",
            "**Uluslararası ölçütlere uyum sağlamak** ve **ekonomik-bilimsel ilişkileri kolaylaştırmak**.",
            "**1934**; **kişilerin ayırt edilmesini sağlamak**, resmî işlemleri kolaylaştırmak ve **eşitliği** pekiştirmek.",
            "**Halkçılık** (eşitlik ve ayrıcalıkların kaldırılması).",
            "**1930 belediye**, **1933 muhtarlık**, **1934 milletvekili** seçme ve seçilme hakkı.",
            "**1923**; **Misakıiktisadi (Ekonomi Andı)**.",
            "**Millî ekonomi** kurmak ve **tam bağımsızlık** sağlamak; yerli üretimi desteklemek.",
            "**1925**; Osmanlı'dan kalan **ağır ürün vergisi** kaldırılmış, **köylünün yükü hafiflemiştir** — halkçılığın örneğidir.",
            "**1 Temmuz 1926**; **Türk karasularında taşımacılık ve limanlar arası yük-yolcu taşıma hakkı yalnızca Türk gemilerine** verilmiştir.",
            "**Özel girişimi ve yerli sanayiyi desteklemek** (1927).",
            "**1929 Dünya Ekonomik Bunalımı** özel sektörün yetersiz kaldığını göstermiş, **devletin ekonomiye doğrudan girmesi** zorunlu hâle gelmiştir.",
            "**1934**.",
            "**Devletin sanayi ve madencilik alanında doğrudan üretim yapması**; devletçilik ilkesinin uygulama araçlarıdır.",
            "**Egemenliğin millete ait olması ve yöneticilerin seçimle belirlenmesidir**; örnek: **Cumhuriyet'in ilanı**, **kadınlara seçme-seçilme hakkı**.",
            "**Türk milletini sevmek ve yüceltmektir**; ırk değil **ortak vatan, dil, kültür ve ülkü** birliğine dayanır. Örnek: **Kabotaj Kanunu**, **Türk Dil ve Tarih kurumları**.",
            "**Kanun önünde eşitlik ve ayrıcalık tanımamadır**; örnek: **aşarın kaldırılması**, **soyadı kanunu**.",
            "**Özel sektörün yetmediği alanlarda devletin ekonomiye girmesidir**; örnek: **I. Beş Yıllık Sanayi Planı**, **Sümerbank**.",
            "**Din ile devlet işlerinin ayrılması ve devletin bütün inançlara eşit mesafede olmasıdır**; örnek: **halifeliğin kaldırılması**, **Tevhid-i Tedrisat**, **Medeni Kanun**.",
            "**Sürekli yenileşme ve çağın gereklerine uyumdur**; örnek: **harf inkılabı**, **takvim-saat-ölçü değişikliği**.",
            "**Millî egemenlik**, **millî birlik ve beraberlik**, **yurtta sulh cihanda sulh**, **millî bağımsızlık** (ayrıca çağdaşlaşma, bilimsellik, insan sevgisi).",
            "**Ülke içinde huzur ve barışı, dünyada da barışı korumayı** esas alan **barışçı dış politika** ilkesidir.",
            "**Saltanatın kaldırılması (1922) → halifeliğin kaldırılması ve Tevhid-i Tedrisat (1924) → Medeni Kanun (1926) → anayasadan din maddesinin çıkarılması (1928) → laikliğin anayasaya girmesi (1937)**.",
            "Toplumu **muasır medeniyet seviyesine** çıkarmak; **çağdaş, laik ve bağımsız bir ulus devlet** kurmak.",
            "**Aşamalı** (toplumu hazırlayarak), **hukuka dayalı** (her inkılap kanunla), **akılcı ve bilimsel** (örnek kurumlar incelenerek) ve **bütüncül** (bütün alanlar birlikte) bir yöntem izlenmiştir.",
        ],
    },
}
