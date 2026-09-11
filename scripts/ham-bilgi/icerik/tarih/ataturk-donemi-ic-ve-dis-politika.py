"""TYT Tarih — Atatürk Dönemi İç ve Dış Politika (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: ATATÜRK DÖNEMİ İÇ VE DIŞ POLİTİKA",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Atatürk Dönemi İç ve Dış Politika",
    "alt_baslik": "Ham bilgi notu — iç isyanlar, çok partili denemeler, Lozan'dan "
                  "kalan sorunlar ve dış politika; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
        "kazanimlar": "11.7.1 — Cumhuriyet'in ilk yıllarındaki iç sorunları "
                      "açıklar. 11.7.2 — Atatürk dönemi dış politikasının "
                      "ilkelerini değerlendirir. 11.7.3 — Lozan'dan kalan "
                      "sorunların çözümünü analiz eder.",
        "kapsam": "Şeyh Sait İsyanı, Takrir-i Sükûn, Menemen Olayı, çok partili "
                  "hayat denemeleri, Musul, nüfus mübadelesi, yabancı okullar, "
                  "Milletler Cemiyeti, Balkan Antantı, Montrö, Sadabat Paktı, "
                  "Hatay'ın anavatana katılması, 50 analiz sorusu",
        "nasil": "Dış politikayı **\"neyi ne zaman kazandık\"** biçiminde oku. "
                 "Her kazanım, **doğru zamanlama ve barışçı diplomasi** ile "
                 "elde edilmiştir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **Montrö**, "
                    "**Hatay** ya da **Musul sorunu** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "İç Politika"},
        {"tur": "tablo",
         "basliklar": ["Olay", "Yıl", "Nedeni ve sonucu"],
         "satirlar": [
             ["**Şeyh Sait İsyanı**", "1925",
              "**Neden**: halifeliğin kaldırılmasına tepki, dış kışkırtma "
              "(İngiltere) ve ayrılıkçılık. **Sonuç**: **Takrir-i Sükûn "
              "Kanunu** çıkarıldı, **İstiklal Mahkemeleri** yeniden kuruldu, "
              "**Terakkiperver Cumhuriyet Fırkası kapatıldı**, **Musul "
              "sorununda elimiz zayıfladı**"],
             ["**Terakkiperver Cumhuriyet Fırkası**", "1924–1925",
              "**İlk muhalefet partisidir**; **Kâzım Karabekir** başkanlığında "
              "kuruldu. Programındaki \"dinî inançlara saygılıyız\" maddesi "
              "**rejim karşıtlarınca istismar edildi**; Şeyh Sait İsyanı "
              "sonrası kapatıldı"],
             ["**Mustafa Kemal'e suikast girişimi**", "1926",
              "**İzmir'de** ortaya çıkarıldı; eski İttihatçılar ve muhalifler "
              "yargılandı. **İnkılaplara karşı direncin** kırılmasına yol açtı"],
             ["**Serbest Cumhuriyet Fırkası**", "1930",
              "**Atatürk'ün isteğiyle Fethi Okyar** kurdu; amaç **denetim ve "
              "demokrasi**. Rejim karşıtlarının toplanma yeri hâline gelince "
              "**kendi kendini feshetti**"],
             ["**Menemen Olayı**", "1930",
              "**Derviş Mehmet** önderliğinde çıkan **irticai (gerici) "
              "ayaklanmadır**; **Asteğmen Kubilay şehit edildi**. "
              "**Çok partili hayata geçiş denemeleri sona erdi**"],
         ],
         "oranlar": [0.26, 0.10, 0.64]},
        {"tur": "tuzak", "baslik": "Çok Partili Denemeler Neden Başarısız Oldu?", "govde":
            "İki deneme de **demokrasiye geçiş amacı** taşıyordu ama ikisi de "
            "**rejim karşıtlarının sığınağı** hâline geldi. Nedenleri: "
            "**(1)** toplum **çok partili hayata henüz hazır değildi**; "
            "**(2)** **inkılaplar yeni** ve kökleşmemişti; **(3)** muhalefet, "
            "eleştiriyi **rejimi hedef almaya** dönüştürdü; **(4)** "
            "**okuryazarlık ve siyasi kültür** düşüktü. **Çok partili hayata "
            "kalıcı geçiş 1946'da** gerçekleşmiştir."},
        {"tur": "gorsel", "baslik": "Şema 1 — İsyanların ortak zinciri",
         "aciklama": "Her iç olay, **inkılapların kararlılıkla sürdürülmesiyle** "
                     "sonuçlanmıştır. Sınavda \"sonucu neydi\" diye sorulur.",
         "ciz": S.akis(
             ["İnkılap yapılır", "Tepki doğar", "İsyan/olay çıkar", "Önlem alınır",
              "İnkılap pekişir"],
             ["Eski düzen\n**değişir**",
              "Çıkarı bozulan\n**direnir**",
              "**Şeyh Sait**,\n**Menemen**",
              "**Takrir-i Sükûn**,\nİstiklal Mahkemeleri",
              "Kararlılık\n**kanıtlanır**"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Lozan'dan Kalan Sorunlar"},
        {"tur": "tablo",
         "basliklar": ["Sorun", "Çözümü"],
         "satirlar": [
             ["**Musul**",
              "Lozan'da çözülemedi. **Şeyh Sait İsyanı** elimizi zayıflattı; "
              "sorun **Milletler Cemiyeti'ne** gitti ve İngiltere lehine karar "
              "çıktı. **Ankara Antlaşması (1926)** ile **Musul Irak'a "
              "(İngiltere'ye) bırakıldı**; karşılığında **25 yıl boyunca petrol "
              "gelirinin %10'u** alınacaktı (sonra toplu ödemeye çevrildi)"],
             ["**Nüfus mübadelesi**",
              "Lozan'a göre **İstanbul Rumları ve Batı Trakya Türkleri hariç** "
              "değişim yapılacaktı. **\"Yerleşmiş (etabli)\" tanımı** yüzünden "
              "Yunanistan ile anlaşmazlık çıktı. **1930 Ankara Antlaşması** ile "
              "çözüldü; **Türk-Yunan dostluğu** başladı"],
             ["**Yabancı okullar**",
              "Okulların **Türk müfettişlerce denetlenmesi**, **Türkçe, tarih ve "
              "coğrafya derslerinin Türk öğretmenlerce okutulması** kabul "
              "ettirildi. Bu, **eğitimde egemenliğin** kanıtıdır"],
             ["**Osmanlı borçları**",
              "Lozan'da paylaştırıldı; Türkiye'ye düşen kısım **1929'da "
              "taksitlendirildi**, **1954'te tamamen ödendi**"],
             ["**Boğazlar**",
              "Lozan'da **başkanı Türk olan uluslararası komisyona** bırakıldı. "
              "**Montrö Boğazlar Sözleşmesi (20 Temmuz 1936)** ile **komisyon "
              "kaldırıldı**, **Türkiye'nin tam egemenliği** tanındı ve "
              "**boğazlara asker yerleştirme** hakkı kazanıldı"],
             ["**Hatay**",
              "Ankara Antlaşması (1921) ile Fransa'ya bırakılmıştı. "
              "**1936–1939 arası diplomatik mücadele**; **1938'de Hatay "
              "Devleti** kuruldu, **29 Haziran 1939'da anavatana katıldı** — "
              "**Atatürk'ün son büyük dış politika başarısıdır**"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "tuzak", "baslik": "Montrö Neden Büyük Bir Kazanım?", "govde":
            "Lozan'da boğazlar **uluslararası bir komisyona** bırakılmıştı ve "
            "**Türkiye buralara asker yerleştiremiyordu** — yani egemenlik "
            "eksikti. **1930'larda İtalya ve Almanya'nın saldırgan tutumu** "
            "Türkiye'ye haklı bir gerekçe verdi ve Türkiye **savaş çıkarmadan, "
            "diplomasiyle** sözleşmenin değiştirilmesini istedi. **Montrö "
            "(1936)** ile **komisyon kaldırıldı**, **boğazlar silahlandırıldı** "
            "ve **geçiş kuralları Türkiye tarafından** belirlenir hâle geldi. "
            "Sınavda \"Lozan'ın eksiğini tamamlayan sözleşme\" diye sorulur."},
        {"tur": "cozum",
         "baslik": "Musul'un Kaybedilme Nedeni",
         "soru": "\"1926'da imzalanan Ankara Antlaşması ile Musul Irak'a "
                 "bırakılmıştır.\"\nBu sonucu doğuran nedenleri açıklayınız.",
         "adimlar": [
             "**Şeyh Sait İsyanı (1925)** ülkeyi iç sorunla meşgul etti ve "
             "**askerî seçenek kullanılamadı**.",
             "**İngiltere isyanı destekleyerek** Türkiye'yi zor durumda bıraktı.",
             "Sorun **Milletler Cemiyeti'ne** taşındı; **İngiltere'nin etkili "
             "olduğu** bu kurumda karar aleyhimize çıktı.",
             "Türkiye **yeni kurulmuş ve yorgun** bir devletti; **yeni bir "
             "savaşı göze alamadı**.",
             "**Musul petrolleri** İngiltere için vazgeçilmezdi; taviz vermedi.",
         ],
         "sonuc": "**İç isyan, İngiltere'nin baskısı ve yeni bir savaşı göze "
                  "alamama.** Musul, Atatürk dönemi dış politikasının **tek "
                  "büyük kaybıdır** ve **iç istikrarın dış politikayı doğrudan "
                  "etkilediğini** gösterir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Dış Politika İlkeleri ve Girişimler"},
        {"tur": "gorsel", "baslik": "Şema 2 — Atatürk dönemi dış politika ilkeleri",
         "aciklama": "Bu ilkeler, **her dış politika kararının** arkasındaki "
                     "mantığı açıklar. Soruda hangi ilkenin uygulandığı sorulur.",
         "ciz": S.kartlar([
             ("Tam bağımsızlık", "Hiçbir devletin\n**vesayeti** kabul edilmez"),
             ("Gerçekçilik", "**Gücün yettiği** hedefler;\nmaceradan kaçınma"),
             ("Barışçılık", "**Yurtta sulh,**\n**cihanda sulh**"),
             ("Akılcılık", "Duygusal değil,\n**akla dayalı** karar"),
             ("Eşitlik ve karşılıklılık", "İlişkiler **eşit taraflar**\narasında kurulur"),
             ("Batı'ya yönelme", "**Çağdaş uygarlık**\ndüzeyi hedefi"),
             ("İç işlere karışmama", "Başka devletin\n**iç işine karışılmaz**"),
             ("Milletlerarası hukuk", "Sorunlar **hukuk ve\ndiplomasi** ile çözülür"),
         ], sutun=4)},
        {"tur": "tablo",
         "basliklar": ["Girişim", "Yıl", "Amacı ve önemi"],
         "satirlar": [
             ["**Milletler Cemiyeti'ne üyelik**", "1932",
              "**Davet üzerine** üye olundu → **uluslararası saygınlığın** "
              "göstergesi. Dünya barışına katkı amacı"],
             ["**Balkan Antantı**", "1934",
              "**Türkiye, Yunanistan, Romanya, Yugoslavya**. "
              "**İtalya'nın (ve Bulgaristan'ın) yayılmacılığına karşı** "
              "kuruldu; **batı sınırının güvenliği**"],
             ["**Montrö Boğazlar Sözleşmesi**", "1936",
              "**Boğazlarda tam egemenlik**; komisyon kaldırıldı, asker "
              "yerleştirme hakkı kazanıldı"],
             ["**Sadabat Paktı**", "1937",
              "**Türkiye, İran, Irak, Afganistan**. **İtalya'nın Orta Doğu'ya "
              "yönelmesine karşı**; **doğu sınırının güvenliği**"],
             ["**Hatay'ın katılması**", "1939",
              "**Diplomatik yolla** kazanıldı; **Atatürk'ün son büyük başarısı**"],
         ],
         "oranlar": [0.26, 0.10, 0.64]},
        {"tur": "taktik", "baslik": "İki Antantı Karıştırma", "govde":
            "**Balkan Antantı (1934) batı sınırını**, **Sadabat Paktı (1937) "
            "doğu-güney sınırını** güvenceye alır. Balkan Antantı'nda "
            "**Yunanistan, Romanya, Yugoslavya**; Sadabat Paktı'nda **İran, "
            "Irak, Afganistan** vardır. **Her ikisinin de ortak nedeni "
            "İtalya'nın yayılmacı politikasıdır.** Kestirme: **\"Balkan → "
            "Balkanlar → batı\"**, **\"Sadabat → İran'daki saray → doğu\"**."},
        {"tur": "dikkat", "baslik": "Türk-Sovyet ve Türk-İngiliz İlişkileri", "ogeler": [
            "**Sovyetlerle** ilişkiler Kurtuluş Savaşı'nda kurulan dostluk "
            "üzerine gelişti; **1925 Dostluk ve Saldırmazlık Antlaşması** "
            "imzalandı, **1935'te uzatıldı**.",
            "**İngiltere ile** Musul yüzünden gergin başlayan ilişkiler, "
            "**1930'lardaki İtalya-Almanya tehdidi** karşısında **yakınlaşmaya** "
            "dönüştü.",
            "**İtalya**, Akdeniz ve Anadolu üzerindeki emelleri yüzünden "
            "**dönemin en büyük tehdidi** olarak görüldü — **Balkan Antantı ve "
            "Sadabat Paktı'nın** ortak nedenidir.",
            "**Yunanistan ile** mübadele sorunu çözülünce **dostluk** kuruldu "
            "(1930); Venizelos Türkiye'yi ziyaret etti.",
            "**Türkiye hiçbir bloğa girmedi**; **denge siyaseti** izledi.",
        ]},
        {"tur": "cozum",
         "baslik": "Hatay'ın Kazanılma Yöntemi",
         "soru": "Hatay'ın anavatana katılma sürecini ve bu sürecin Atatürk "
                 "dönemi dış politikası açısından anlamını açıklayınız.",
         "adimlar": [
             "**1921 Ankara Antlaşması** ile Hatay Fransa'ya (Suriye'ye) "
             "bırakılmıştı; ancak **özel bir yönetim** öngörülmüştü.",
             "**1936'da Fransa Suriye'den çekilme kararı** alınca Türkiye "
             "**Hatay'ın statüsünü Milletler Cemiyeti'ne** taşıdı.",
             "**1938'de bağımsız Hatay Devleti** kuruldu; **Türk bayrağına "
             "benzer bayrak** ve Türkçe resmî dil kabul edildi.",
             "**Hatay Millet Meclisi**, **29 Haziran 1939'da Türkiye'ye "
             "katılma kararı** aldı.",
             "Süreçte **tek kurşun atılmadı**; **diplomasi ve halk iradesi** "
             "kullanıldı.",
         ],
         "sonuc": "**Hatay, savaşsız ve diplomatik yolla kazanılmıştır.** Bu, "
                  "**\"yurtta sulh, cihanda sulh\"** ilkesinin ve **gerçekçi "
                  "diplomasinin** en açık örneğidir; Atatürk'ün son büyük dış "
                  "politika başarısıdır."},
        {"tur": "cozum",
         "baslik": "Dış Politika İlkesini Belirleme",
         "soru": "\"Türkiye, 1930'larda İtalya'nın Akdeniz'deki yayılmacı "
                 "politikasına karşı komşularıyla iki ayrı savunma antlaşması "
                 "imzalamış, ancak hiçbir bloğa katılmamıştır.\"\nBu tutum "
                 "hangi dış politika ilkeleriyle açıklanır?",
         "adimlar": [
             "Komşularla savunma antlaşması → **barışçılık** ve **bölgesel "
             "güvenlik** arayışı.",
             "Hiçbir bloğa katılmama → **tam bağımsızlık** ve **denge siyaseti**.",
             "Tehdidi doğru okuyup **gücünün yettiği** çözümü seçme → "
             "**gerçekçilik**.",
             "Sorunu savaşla değil antlaşmayla çözme → **milletlerarası hukuka "
             "bağlılık**.",
         ],
         "sonuc": "**Barışçılık, tam bağımsızlık, gerçekçilik ve hukuka "
                  "bağlılık.** Atatürk dönemi dış politikası, **güç kullanmadan "
                  "güvenlik üretmenin** örneğidir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Şeyh Sait İsyanı 1925** — **Takrir-i Sükûn** çıkarıldı.",
            "**Terakkiperver Cumhuriyet Fırkası ilk muhalefet partisidir.**",
            "**Serbest Cumhuriyet Fırkası (1930) kendisi kapandı.**",
            "**Menemen Olayı 1930** — **Asteğmen Kubilay** şehit edildi.",
            "**Çok partili hayata kalıcı geçiş 1946'dadır.**",
            "**Musul 1926 Ankara Antlaşması** ile Irak'a bırakıldı.",
            "**Musul'un kaybında Şeyh Sait İsyanı** etkili olmuştur.",
            "**Nüfus mübadelesi sorunu 1930'da** çözüldü.",
            "**Yabancı okullar Türk denetimine** girdi.",
            "**Milletler Cemiyeti'ne 1932'de davetle** üye olundu.",
            "**Balkan Antantı 1934** — batı sınırı; **Yunanistan, Romanya, "
            "Yugoslavya**.",
            "**Montrö 20 Temmuz 1936** — **boğazlarda tam egemenlik**.",
            "**Sadabat Paktı 1937** — doğu sınırı; **İran, Irak, Afganistan**.",
            "**Her iki paktın ortak nedeni İtalya'dır.**",
            "**Hatay 29 Haziran 1939'da** anavatana katıldı.",
            "**Hatay savaşsız, diplomasiyle** kazanıldı.",
            "**Türkiye hiçbir bloğa girmedi**; **denge siyaseti** izledi.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Dış politika sorularında **tarih + taraf + amaç** üçlüsü istenir. "
            "Her antlaşmanın **hangi tehdide karşı** yapıldığını yaz; sınav "
            "tam olarak bunu ölçer.",
        "satir_sayisi": 2,
        "sorular": [
            "Şeyh Sait İsyanı'nın tarihini ve nedenlerini yazınız.",
            "Şeyh Sait İsyanı'nın sonuçlarını yazınız.",
            "Takrir-i Sükûn Kanunu'nun amacını yazınız.",
            "Terakkiperver Cumhuriyet Fırkası'nın kurucusunu ve özelliğini yazınız.",
            "Terakkiperver Cumhuriyet Fırkası'nın kapatılma nedenini yazınız.",
            "1926 suikast girişiminin yerini ve sonucunu yazınız.",
            "Serbest Cumhuriyet Fırkası'nın kurucusunu ve kuruluş amacını yazınız.",
            "Serbest Cumhuriyet Fırkası'nın kapanma biçimini yazınız.",
            "Menemen Olayı'nın tarihini ve şehit edilen kişiyi yazınız.",
            "Menemen Olayı'nın çok partili hayata etkisini yazınız.",
            "Çok partili hayat denemelerinin başarısız olma nedenlerini yazınız.",
            "Çok partili hayata kalıcı geçiş yılını yazınız.",
            "Lozan'da çözülemeyen sorunları yazınız.",
            "Musul sorununun Lozan'daki durumunu yazınız.",
            "Musul'un kaybedilmesinde etkili olan iç olayı yazınız.",
            "Musul sorununun hangi kuruma taşındığını yazınız.",
            "1926 Ankara Antlaşması'nın Musul ile ilgili maddesini yazınız.",
            "Musul karşılığında Türkiye'ye tanınan hakkı yazınız.",
            "Musul'un kaybının dış politika açısından anlamını açıklayınız.",
            "Nüfus mübadelesinin Lozan'daki esasını yazınız.",
            "Mübadele sorununun çıkış nedenini açıklayınız.",
            "Mübadele sorununun çözüm tarihini ve sonucunu yazınız.",
            "Yabancı okullar sorununun çözümünü yazınız.",
            "Yabancı okullar sorununun çözümünün anlamını açıklayınız.",
            "Osmanlı borçlarının Lozan'daki durumunu yazınız.",
            "Osmanlı borçlarının ödenme tarihini yazınız.",
            "Boğazların Lozan'daki durumunu yazınız.",
            "Montrö Boğazlar Sözleşmesi'nin tarihini yazınız.",
            "Montrö'nün Türkiye'ye sağladığı kazanımları yazınız.",
            "Montrö'nün imzalanmasını kolaylaştıran uluslararası ortamı açıklayınız.",
            "Hatay'ın 1921'deki durumunu yazınız.",
            "Hatay sorununun 1936'da gündeme gelme nedenini yazınız.",
            "Hatay Devleti'nin kuruluş yılını yazınız.",
            "Hatay'ın anavatana katılma tarihini yazınız.",
            "Hatay'ın kazanılma yöntemini ve anlamını açıklayınız.",
            "Atatürk dönemi dış politika ilkelerinden beşini yazınız.",
            "Tam bağımsızlık ilkesini açıklayınız.",
            "Gerçekçilik ilkesini bir örnekle açıklayınız.",
            "Barışçılık ilkesinin sloganını yazınız.",
            "Milletler Cemiyeti'ne üyelik tarihini ve biçimini yazınız.",
            "Milletler Cemiyeti'ne davetle üye olunmasının anlamını açıklayınız.",
            "Balkan Antantı'nın tarihini ve üyelerini yazınız.",
            "Balkan Antantı'nın kuruluş amacını yazınız.",
            "Sadabat Paktı'nın tarihini ve üyelerini yazınız.",
            "Sadabat Paktı'nın kuruluş amacını yazınız.",
            "Balkan Antantı ile Sadabat Paktı'nın ortak nedenini yazınız.",
            "Türk-Sovyet ilişkilerinin Atatürk dönemindeki seyrini yazınız.",
            "Türk-İngiliz ilişkilerinin nasıl değiştiğini açıklayınız.",
            "Türk-Yunan ilişkilerinin düzelme nedenini yazınız.",
            "Türkiye'nin bloklara karşı tutumunu ve nedenini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**1925**; **halifeliğin kaldırılmasına tepki**, **dış kışkırtma (İngiltere)** ve **ayrılıkçılık**.",
            "**Takrir-i Sükûn Kanunu** çıkarıldı, **İstiklal Mahkemeleri** yeniden kuruldu, **Terakkiperver Cumhuriyet Fırkası kapatıldı** ve **Musul sorununda Türkiye'nin eli zayıfladı**.",
            "**Huzuru bozan yayın ve örgütlenmeleri engellemek**; hükümete olağanüstü yetki vererek isyanı ve rejim karşıtlığını bastırmak.",
            "**Kâzım Karabekir**; **Cumhuriyet tarihinin ilk muhalefet partisidir**.",
            "Programındaki **\"dinî inanç ve düşüncelere saygılıyız\"** maddesi **rejim karşıtlarınca istismar edilmiş**, Şeyh Sait İsyanı sonrası **Takrir-i Sükûn** ile kapatılmıştır.",
            "**İzmir**; girişim ortaya çıkarılmış, eski İttihatçılar ve muhalifler yargılanmış, **inkılaplara karşı direnç kırılmıştır** (1926).",
            "**Fethi Okyar**; **Atatürk'ün isteğiyle**, **hükümeti denetlemek ve demokrasiye geçmek** amacıyla kurulmuştur.",
            "**Kendi kendini feshetmiştir**; rejim karşıtlarının toplanma yeri hâline geldiğini gören Fethi Okyar partiyi kapatmıştır.",
            "**1930**; **Asteğmen Kubilay** şehit edilmiştir.",
            "**Çok partili hayata geçiş denemeleri sona ermiş**, tek partili döneme dönülmüştür.",
            "Toplum **hazır değildi**, **inkılaplar yeniydi**, muhalefet **rejimi hedef aldı** ve **okuryazarlık ile siyasi kültür düşüktü**.",
            "**1946**.",
            "**Musul**, **boğazların tam egemenliği**, **Hatay** ve **yabancı okullar** sorunları.",
            "**Çözülememiş**, ikili görüşmelere bırakılmıştır.",
            "**Şeyh Sait İsyanı (1925)**; ülke iç sorunla meşgul olduğu için askerî seçenek kullanılamamıştır.",
            "**Milletler Cemiyeti'ne**; İngiltere'nin etkili olduğu bu kurumda karar Türkiye aleyhine çıkmıştır.",
            "**Musul, Irak'a (İngiltere'ye) bırakılmıştır**.",
            "**25 yıl boyunca Musul petrol gelirinin %10'u** (sonradan toplu ödemeye çevrilmiştir).",
            "Atatürk dönemi dış politikasının **tek büyük kaybıdır** ve **iç istikrarın dış politikayı doğrudan etkilediğini** gösterir.",
            "**İstanbul Rumları ve Batı Trakya Türkleri hariç** karşılıklı nüfus değişimi yapılacaktı.",
            "**\"Yerleşmiş (etabli)\" tanımının** taraflarca farklı yorumlanması; Yunanistan İstanbul Rumlarının kapsamını genişletmek istemiştir.",
            "**1930 Ankara Antlaşması**; sorun çözülmüş ve **Türk-Yunan dostluğu** başlamıştır.",
            "Okulların **Türk müfettişlerce denetlenmesi** ve **Türkçe, tarih, coğrafya derslerinin Türk öğretmenlerce okutulması** kabul ettirilmiştir.",
            "**Eğitim alanında egemenliğin sağlandığını** ve yabancı kurumların **Türk hukukuna tabi** olduğunu gösterir.",
            "**Osmanlı'dan ayrılan devletler arasında paylaştırılmıştır**; Türkiye'ye düşen kısım taksitle ödenecekti.",
            "**1954**'te tamamen ödenmiştir (1929'da taksitlendirilmiştir).",
            "**Başkanı Türk olan uluslararası bir komisyona** bırakılmış, **Türkiye buraya asker yerleştirememiştir**.",
            "**20 Temmuz 1936**.",
            "**Komisyon kaldırıldı**, **Türkiye'nin tam egemenliği** tanındı, **boğazlara asker yerleştirme** hakkı kazanıldı ve **geçiş kurallarını Türkiye belirler** hâle geldi.",
            "**İtalya ve Almanya'nın saldırgan tutumu** genel bir güvensizlik doğurmuş, Türkiye'nin talebi **haklı ve makul** görülmüştür.",
            "**1921 Ankara Antlaşması** ile **Fransa'ya (Suriye'ye)** bırakılmıştı; ancak özel bir yönetim öngörülmüştü.",
            "**Fransa'nın Suriye'den çekilme kararı** alması; Hatay'ın statüsü belirsizleşince Türkiye konuyu **Milletler Cemiyeti'ne** taşımıştır.",
            "**1938**.",
            "**29 Haziran 1939**.",
            "**Diplomasi ve halk iradesiyle, tek kurşun atılmadan** kazanılmıştır; **\"yurtta sulh, cihanda sulh\"** ilkesinin en açık örneğidir.",
            "**Tam bağımsızlık**, **gerçekçilik**, **barışçılık**, **akılcılık**, **eşitlik ve karşılıklılık** (ayrıca iç işlere karışmama, hukuka bağlılık).",
            "Hiçbir devletin **siyasi, ekonomik veya askerî vesayetini** kabul etmemektir.",
            "**Gücün yettiği hedefleri seçmek** ve maceradan kaçınmaktır; örnek: **Musul için savaşa girilmemesi**.",
            "**\"Yurtta sulh, cihanda sulh.\"**",
            "**1932**; **davet üzerine** üye olunmuştur.",
            "Türkiye'nin **uluslararası saygınlığının ve güvenilirliğinin** arttığını gösterir.",
            "**1934**; **Türkiye, Yunanistan, Romanya, Yugoslavya**.",
            "**İtalya'nın (ve Bulgaristan'ın) yayılmacı politikasına karşı batı sınırının güvenliğini** sağlamak.",
            "**1937**; **Türkiye, İran, Irak, Afganistan**.",
            "**İtalya'nın Orta Doğu'ya yönelmesine karşı doğu ve güney sınırının güvenliğini** sağlamak.",
            "**İtalya'nın yayılmacı politikası**.",
            "Kurtuluş Savaşı'nda kurulan dostluk sürmüş, **1925 Dostluk ve Saldırmazlık Antlaşması** imzalanmış ve **1935'te uzatılmıştır**.",
            "**Musul yüzünden gergin başlamış**, ancak **1930'larda İtalya ve Almanya tehdidi** karşısında **yakınlaşmaya** dönüşmüştür.",
            "**Nüfus mübadelesi sorununun 1930'da çözülmesi**; ardından Venizelos Türkiye'yi ziyaret etmiş ve dostluk kurulmuştur.",
            "**Hiçbir bloğa girmemiş, denge siyaseti izlemiştir**; amaç **tam bağımsızlığı korumak** ve ülkeyi yeni bir savaşa sürüklememektir.",
        ],
    },
}
