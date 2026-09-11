"""TYT Tarih — Balta Limanı ve Osmanlı Ekonomisi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: BALTA LİMANI VE OSMANLI EKONOMİSİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Balta Limanı ve Osmanlı Ekonomisi",
    "alt_baslik": "Ham bilgi notu — kapitülasyonlardan Düyun-ı Umumiye'ye "
                  "Osmanlı ekonomisinin çöküşü; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
        "kazanimlar": "11.1.4 — Osmanlı ekonomisinin dönüşümünü açıklar. "
                      "11.1.5 — Balta Limanı Antlaşması'nın sonuçlarını "
                      "değerlendirir. 11.1.6 — Dış borçlanma ve Düyun-ı "
                      "Umumiye'nin etkilerini analiz eder.",
        "kapsam": "Klasik Osmanlı ekonomisi, kapitülasyonlar, Sanayi İnkılabı'nın "
                  "etkisi, Balta Limanı Ticaret Antlaşması (1838), dış borçlanma, "
                  "Düyun-ı Umumiye (1881), yabancı sermaye ve imtiyazlar, "
                  "45 analiz sorusu",
        "nasil": "Bu bölüm **zincirleme okunur**: kapitülasyon → Balta Limanı → "
                 "borç → Düyun-ı Umumiye. Her halkanın **bir öncekinin sonucu** "
                 "olduğunu göster.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **Balta Limanı'nın "
                    "sonuçları** ya da **Düyun-ı Umumiye** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Klasik Osmanlı Ekonomisi"},
        {"tur": "tablo",
         "basliklar": ["İlke", "Anlamı"],
         "satirlar": [
             ["**İaşecilik (provizyonizm)**",
              "**Ülkede mal bolluğu** ve **ucuzluk** esastır. Bu yüzden "
              "**ithalat teşvik**, **ihracat sınırlanır** — bugünkü anlayışın "
              "tam tersidir"],
             ["**Gelenekçilik**",
              "Var olan **düzenin korunması** esastır; ani değişimden kaçınılır"],
             ["**Fiskalizm**",
              "**Hazine gelirlerini artırmak ve gideri azaltmak** temel amaçtır"],
             ["**Narh sistemi**",
              "Devlet **fiyat tavanı** belirler; **kadı ve lonca** denetler. "
              "Amaç halkı **fahiş fiyattan korumaktır**"],
             ["**Lonca (gedik) düzeni**",
              "Üretim **belirli sayıda usta** ile sınırlıdır; **kalite ve "
              "fiyat denetlenir**, **haksız rekabet önlenir**"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "tuzak", "baslik": "İaşecilik Neden Sanayileşmeyi Engelledi?", "govde":
            "Osmanlı ekonomisinin amacı **kâr ve büyüme değil, halkın "
            "ihtiyacının karşılanmasıdır**. **İhracat sınırlandığı** için üretici "
            "**büyük ölçekli üretime** yönelmez; **lonca sistemi** üretici "
            "sayısını sabitler; **narh** kâr marjını sınırlar. Bu üçü birlikte, "
            "Osmanlı'da **sermaye birikimi ve fabrika üretimi** doğmasını "
            "engellemiştir. Avrupa **kâr için üretirken**, Osmanlı **ihtiyaç "
            "için üretmiştir**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Balta Limanı Ticaret Antlaşması (1838)"},
        {"tur": "dikkat", "baslik": "Antlaşmanın Koşulları ve Nedeni", "ogeler": [
            "**İngiltere ile 1838'de** imzalandı; **Mısır Sorunu'nda İngiltere'nin "
            "desteğini almak** için kabul edildi.",
            "**İç ticaret yabancılara açıldı**: İngiliz tüccar Osmanlı ülkesinde "
            "**yerli tüccar gibi** ticaret yapabilecek.",
            "**Yed-i vahit (tekel) sistemi kaldırıldı** → devletin ticaret "
            "üzerindeki denetimi bitti.",
            "**İhracat vergisi %12'ye çıkarıldı**, **ithalat vergisi %5'te kaldı** "
            "→ **yerli üretici cezalandırıldı, yabancı mal ödüllendirildi**.",
            "İngiliz tüccar **iç gümrük vergisinden muaf** tutuldu; **yerli "
            "tüccar ise iç gümrük ödemeye devam etti**.",
            "Kısa sürede **Fransa ve diğer devletlere** de aynı haklar tanındı.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Balta Limanı'nın çöküş zinciri",
         "aciklama": "Tek bir ticaret antlaşmasının **üretimi, istihdamı ve "
                     "maliyeyi** nasıl birlikte çökerttiğini gösterir.",
         "ciz": S.dikey_akis(
             ["Balta Limanı 1838", "Ucuz İngiliz malı", "Lonca ve el sanatları çöktü",
              "İşsizlik ve göç", "Dış ticaret açığı"],
             ["Yerli tüccar **iç gümrük öderken**, yabancı tüccar **muaf** oldu — "
              "kendi ülkesinde **dezavantajlı** duruma düştü.",
              "Fabrika üretimi **ucuz ve bol** olduğu için el tezgâhı rekabet "
              "edemedi.",
              "**Dokuma, deri ve maden** atölyeleri kapandı; **usta-çırak düzeni** "
              "dağıldı.",
              "Zanaatkârlar işsiz kaldı; **kırsaldan şehre ve dışarıya göç** başladı.",
              "Osmanlı **hammadde satan, mamul mal alan** ülke oldu; **açık "
              "büyüdü** ve **borçlanma** kaçınılmaz hâle geldi."])},
        {"tur": "tuzak", "baslik": "Balta Limanı Neden \"Ekonomik Kapitülasyon\"?", "govde":
            "Kapitülasyonlar **yabancıya ayrıcalık** verirdi ama Balta Limanı "
            "daha ağırdır: **yerli tüccarı yabancıdan daha dezavantajlı** hâle "
            "getirmiştir. **İç gümrükten muaf yabancı tüccar**, iç gümrük ödeyen "
            "yerli tüccarla rekabet ettiğinde sonuç bellidir. Sınavda \"Osmanlı'nın "
            "kendi ülkesinde yabancıdan geri kalmasının kanıtı\" sorulursa cevap "
            "**Balta Limanı Antlaşması'dır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Dış Borçlanma ve Düyun-ı Umumiye"},
        {"tur": "tablo",
         "basliklar": ["Aşama", "Yıl", "Açıklaması"],
         "satirlar": [
             ["**İlk dış borç**", "1854",
              "**Kırım Savaşı'nın finansmanı** için İngiltere ve Fransa'dan "
              "alındı. **Ağır faiz ve komisyonla** verildi"],
             ["**Borç sarmalı**", "1854–1874",
              "Alınan borçlar **üretime değil, savaş ve saray masraflarına** "
              "harcandı; **yeni borç eski borcu ödemek için** alındı"],
             ["**Moratoryum (iflas)**", "1875",
              "Osmanlı **borç taksitlerini ödeyemeyeceğini** açıkladı → "
              "**devlet iflasını ilan etti**"],
             ["**Düyun-ı Umumiye**", "1881",
              "**Muharrem Kararnamesi** ile kuruldu. **Alacaklı devletlerin "
              "temsilcilerinden oluşan** bu idare, Osmanlı'nın **bazı "
              "gelirlerine doğrudan el koydu**"],
         ],
         "oranlar": [0.22, 0.10, 0.68]},
        {"tur": "dikkat", "baslik": "Düyun-ı Umumiye Ne Yaptı?", "ogeler": [
            "**Tuz, tütün, ipek, damga, balık ve içki** gibi gelirleri "
            "**doğrudan topladı** ve alacaklılara aktardı.",
            "Osmanlı hazinesinin **en sağlam gelir kalemleri** elinden çıktı.",
            "**Kendi memur kadrosu** vardı ve zamanla **devlet içinde devlet** "
            "hâline geldi — bazı yıllarda **Maliye Nezareti'nden daha çok "
            "personel** çalıştırdı.",
            "**Osmanlı'nın mali bağımsızlığı fiilen sona erdi**.",
            "Yabancı sermayeye **demiryolu, liman, madencilik ve bankacılık** "
            "imtiyazları verildi.",
            "**Lozan Antlaşması (1923)** ile borçlar paylaştırıldı; "
            "**Düyun-ı Umumiye 1928-1954 arasında ödemelerle tasfiye edildi**.",
        ]},
        {"tur": "tuzak", "baslik": "Borç mu Yıktı, Harcama Biçimi mi?", "govde":
            "Borç almak tek başına yıkıcı değildir; **nereye harcandığı** "
            "belirleyicidir. Osmanlı'nın aldığı borçlar **fabrika, demiryolu ya "
            "da eğitim gibi üretken alanlara değil**, **savaş giderlerine, saray "
            "masraflarına ve eski borçların faizine** gitti. Bu yüzden borç "
            "**gelir yaratmadı**, sadece **yeni borç doğurdu**. Sınavda "
            "\"Osmanlı'nın borçlarını ödeyememesinin temel nedeni\" sorulursa "
            "cevap **borçların üretime yönlendirilmemesidir**."},
        {"tur": "gorsel", "baslik": "Şema 2 — Ekonomik çöküşün dört halkası",
         "aciklama": "Her halka bir öncekinin **doğrudan sonucudur**. Sınavda "
                     "halkalardan biri verilip **öncesi ya da sonrası** istenir.",
         "ciz": S.akis(
             ["Kapitülasyonlar", "Balta Limanı 1838", "Dış borç 1854",
              "Düyun-ı Umumiye 1881"],
             ["Yabancıya\n**ayrıcalık**",
              "Yerli üretici\n**rekabet edemez**",
              "Açık büyür,\n**borç alınır**",
              "Gelirlere\n**el konur**"])},
        {"tur": "cozum",
         "baslik": "Gümrük Oranlarının Anlamı",
         "soru": "\"Balta Limanı Antlaşması ile Osmanlı'da ihracat vergisi %12'ye "
                 "çıkarılmış, ithalat vergisi %5'te bırakılmıştır.\"\nBu düzenlemenin "
                 "sonuçlarını açıklayınız.",
         "adimlar": [
             "**İhracat vergisinin yüksek olması**, yerli üreticinin malını "
             "dışarı satmasını **pahalı** hâle getirdi.",
             "**İthalat vergisinin düşük olması**, yabancı malın Osmanlı "
             "pazarına **ucuza girmesini** sağladı.",
             "Sonuç: yerli üretici **hem dışarıda hem içeride** dezavantajlı "
             "duruma düştü.",
             "Osmanlı **hammadde satan, mamul mal alan** bir ülkeye dönüştü.",
             "**Dış ticaret açığı** büyüdü ve **borçlanma** kaçınılmaz oldu.",
         ],
         "sonuc": "**Yerli üretim çökmüş, Osmanlı açık pazar hâline gelmiştir.** "
                  "Bir ülkenin **ihracatını cezalandırıp ithalatını ödüllendirmesi**, "
                  "ekonomi tarihinde ender görülen bir durumdur."},
        {"tur": "cozum",
         "baslik": "Düyun-ı Umumiye'nin Egemenlik Boyutu",
         "soru": "Düyun-ı Umumiye İdaresi'nin kurulmasının Osmanlı egemenliği "
                 "açısından anlamını açıklayınız.",
         "adimlar": [
             "İdare, **alacaklı devletlerin temsilcilerinden** oluşuyordu — "
             "yani **yabancılar** yönetiyordu.",
             "Devletin **vergi toplama yetkisi**, egemenliğin en temel "
             "göstergelerinden biridir.",
             "Bu yetkinin bir bölümü **yabancı bir kuruma devredilmiştir**.",
             "İdare kendi **memur kadrosuyla** çalışmış, **devlet içinde devlet** "
             "hâline gelmiştir.",
         ],
         "sonuc": "**Osmanlı'nın mali bağımsızlığı fiilen sona ermiştir.** "
                  "Toprak kaybı kadar ağır olan bu durum, **siyasi bağımsızlığın "
                  "ekonomik bağımsızlık olmadan sürdürülemeyeceğini** gösterir — "
                  "Atatürk'ün ekonomi politikasının çıkış noktası da budur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**İaşecilik**: ithalat teşvik, **ihracat sınırlıdır**.",
            "**Narh**, devletin belirlediği **fiyat tavanıdır**.",
            "**Lonca**, üretici sayısını ve kaliteyi **denetler**.",
            "**Balta Limanı 1838 İngiltere** ile imzalandı.",
            "**Yed-i vahit (tekel)** Balta Limanı ile kaldırıldı.",
            "**İhracat %12, ithalat %5** — yerli üretici cezalandırıldı.",
            "**Yabancı tüccar iç gümrükten muaf**, yerli tüccar değil.",
            "**Balta Limanı ekonomik kapitülasyon** sayılır.",
            "**İlk dış borç 1854** (Kırım Savaşı).",
            "**Borçlar üretime değil**, savaş ve saray masrafına gitti.",
            "**1875'te Osmanlı iflasını (moratoryum)** ilan etti.",
            "**Düyun-ı Umumiye 1881'de Muharrem Kararnamesi** ile kuruldu.",
            "**Tuz, tütün, ipek, damga** gelirlerine el konuldu.",
            "**Düyun-ı Umumiye mali bağımsızlığı** sona erdirdi.",
            "**Kapitülasyonlar Lozan (1923)** ile kaldırıldı.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu bölümde sorular **zincir** biçimindedir: bir olay verilir, "
            "**nedeni ya da sonucu** istenir. Cevap yazarken zincirin bir "
            "önceki ve bir sonraki halkasını da belirt.",
        "satir_sayisi": 2,
        "sorular": [
            "İaşecilik ilkesini açıklayınız.",
            "İaşecilik ilkesinin ihracata bakışını yazınız.",
            "Gelenekçilik ilkesini açıklayınız.",
            "Fiskalizm ilkesini açıklayınız.",
            "Narh sistemini ve amacını yazınız.",
            "Lonca sisteminin işlevlerini yazınız.",
            "Klasik Osmanlı ekonomisinin sanayileşmeyi neden engellediğini açıklayınız.",
            "Osmanlı ile Avrupa'nın üretim amacı arasındaki farkı yazınız.",
            "Kapitülasyonların ilk verilme tarihini ve nedenini yazınız.",
            "Kapitülasyonların sürekli hâle geldiği tarihi yazınız.",
            "Sanayi İnkılabı'nın Osmanlı üretimine etkisini açıklayınız.",
            "Balta Limanı Antlaşması'nın tarihini ve tarafını yazınız.",
            "Balta Limanı'nın imzalanma nedenini yazınız.",
            "Yed-i vahit sistemini açıklayınız.",
            "Yed-i vahitin kaldırılmasının sonucunu yazınız.",
            "Balta Limanı'nda belirlenen ihracat ve ithalat vergilerini yazınız.",
            "Gümrük oranlarının yerli üreticiye etkisini açıklayınız.",
            "İç gümrük konusunda yerli ve yabancı tüccar arasındaki farkı yazınız.",
            "Balta Limanı'na neden ekonomik kapitülasyon dendiğini açıklayınız.",
            "Balta Limanı'nın loncalara etkisini yazınız.",
            "Balta Limanı'nın istihdama etkisini yazınız.",
            "Osmanlı'nın hammadde satan ülkeye dönüşmesini açıklayınız.",
            "Balta Limanı'nın diğer devletlere yayılmasını açıklayınız.",
            "İlk dış borcun alındığı yılı ve nedenini yazınız.",
            "İlk dış borcun hangi devletlerden alındığını yazınız.",
            "Alınan borçların nereye harcandığını yazınız.",
            "Borçların ödenememesinin temel nedenini açıklayınız.",
            "Moratoryumun ne anlama geldiğini yazınız.",
            "Osmanlı'nın iflasını ilan ettiği yılı yazınız.",
            "Düyun-ı Umumiye'nin kuruluş tarihini ve dayandığı kararnameyi yazınız.",
            "Düyun-ı Umumiye'nin kimlerden oluştuğunu yazınız.",
            "Düyun-ı Umumiye'nin el koyduğu gelirleri yazınız.",
            "Düyun-ı Umumiye'nin personel yapısını ve bunun anlamını yazınız.",
            "Düyun-ı Umumiye'nin Osmanlı egemenliği açısından anlamını açıklayınız.",
            "Yabancı sermayeye verilen imtiyaz alanlarını yazınız.",
            "Demiryolu imtiyazlarının Osmanlı açısından iki yönünü değerlendiriniz.",
            "Osmanlı Bankası'nın niteliğini yazınız.",
            "Ekonomik çöküşün dört halkasını sırayla yazınız.",
            "Kapitülasyonların kaldırıldığı antlaşmayı ve tarihini yazınız.",
            "Osmanlı borçlarının Lozan'daki durumunu yazınız.",
            "Düyun-ı Umumiye'nin tasfiye sürecini yazınız.",
            "Ekonomik bağımsızlık ile siyasi bağımsızlık arasındaki ilişkiyi açıklayınız.",
            "Osmanlı'nın Avrupa karşısında ekonomik olarak geri kalmasının nedenlerini yazınız.",
            "Balta Limanı'nın Osmanlı sanayisine etkisini bir cümleyle yazınız.",
            "XIX. yüzyıl Osmanlı ekonomisini bir cümleyle değerlendiriniz.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Ülkede **mal bolluğu ve ucuzluğun** sağlanması esasına dayanır; amaç halkın ihtiyacının karşılanmasıdır.",
            "**İhracat sınırlandırılır**, **ithalat teşvik edilir**; çünkü malın ülkeden çıkması kıtlık ve pahalılık riski taşır.",
            "**Var olan düzenin korunmasıdır**; ani ve köklü değişimlerden kaçınılır.",
            "**Hazine gelirlerini artırmak ve gideri azaltmaktır**; mali denge temel önceliktir.",
            "Devletin belirlediği **fiyat tavanıdır**; amaç halkı **fahiş fiyattan korumaktır**. Kadı ve lonca denetler.",
            "**Kalite denetimi**, **fiyat belirleme**, **usta-kalfa-çırak eğitimi**, **haksız rekabetin önlenmesi** ve **yardımlaşma**.",
            "**İhracat sınırlı** olduğu için büyük ölçekli üretime yönelinmemiş, **lonca** üretici sayısını sabitlemiş, **narh** kâr marjını sınırlamıştır; bu üçü **sermaye birikimini** engellemiştir.",
            "**Avrupa kâr ve büyüme için**, **Osmanlı ihtiyaç için** üretmiştir.",
            "**1535**; **Fransa'ya**, Şarlken'e karşı Fransa'yı Osmanlı'nın yanına çekmek için verilmiştir.",
            "**1740**; I. Mahmut dönemi.",
            "**Ucuz ve bol fabrika üretimi** Osmanlı pazarını doldurmuş, **el tezgâhı ve atölye üretimi rekabet edememiştir**.",
            "**1838**; **İngiltere** ile.",
            "**Mısır Sorunu'nda (Mehmet Ali Paşa'ya karşı) İngiltere'nin desteğini almak**.",
            "Devletin bazı malların alım satımını **tekelinde tutmasıdır**; ticaret üzerinde denetim sağlar.",
            "Devletin **ticaret üzerindeki denetimi sona ermiş**, iç pazar yabancı tüccara tamamen açılmıştır.",
            "**İhracat %12**, **ithalat %5**.",
            "Yerli üretici malını **dışarı satarken yüksek vergi** öderken, yabancı mal **ucuza içeri girmiştir**; yerli üretici hem içeride hem dışarıda dezavantajlı duruma düşmüştür.",
            "**Yabancı tüccar iç gümrükten muaf tutulmuş**, **yerli tüccar iç gümrük ödemeye devam etmiştir**.",
            "**Yerli tüccarı yabancıdan daha dezavantajlı** hâle getirdiği için; kapitülasyonlardan bile ağır sonuçlar doğurmuştur.",
            "**Loncalar çökmüştür**; dokuma, deri ve maden atölyeleri kapanmış, usta-çırak düzeni dağılmıştır.",
            "Zanaatkârlar **işsiz kalmış**, kırsaldan şehre ve yurt dışına **göç** başlamıştır.",
            "Yerli mamul üretimi çökünce Osmanlı **hammadde satan, mamul mal satın alan** bir ülkeye dönüşmüştür.",
            "Kısa sürede **Fransa ve diğer Avrupa devletlerine** de aynı haklar tanınmış, ayrıcalıklar genelleşmiştir.",
            "**1854**; **Kırım Savaşı'nın** finansmanı için.",
            "**İngiltere ve Fransa**.",
            "**Savaş giderlerine, saray masraflarına ve eski borçların faizine** harcanmıştır.",
            "Borçlar **üretime yönlendirilmediği** için **gelir yaratmamış**, yalnızca yeni borç doğurmuştur.",
            "Devletin **borç ödemelerini durdurduğunu ilan etmesidir**; fiilen iflas anlamına gelir.",
            "**1875**.",
            "**1881**; **Muharrem Kararnamesi**.",
            "**Alacaklı devletlerin temsilcilerinden** oluşmuştur.",
            "**Tuz, tütün, ipek, damga, balık ve içki** gelirleri (ayrıca bazı vilayet vergileri).",
            "**Kendi memur kadrosu** vardı ve zaman zaman **Maliye Nezareti'nden daha çok personel** çalıştırdı; bu, **devlet içinde devlet** hâline geldiğini gösterir.",
            "**Vergi toplama yetkisinin bir bölümü yabancı bir kuruma devredilmiştir**; Osmanlı'nın **mali bağımsızlığı fiilen sona ermiştir**.",
            "**Demiryolu, liman, madencilik, bankacılık** ve belediye hizmetleri (havagazı, tramvay).",
            "**Olumlu yönü** ulaşımı geliştirmesi; **olumsuz yönü** hatların **hammadde taşımaya ve yabancı çıkarına** göre planlanması ve **kilometre garantisi** ile hazineye yük olmasıdır.",
            "**Yabancı sermayeli bir bankadır**; Osmanlı'nın merkez bankası işlevini görmüş ama **denetimi yabancıların elindedir**.",
            "**Kapitülasyonlar → Balta Limanı (1838) → dış borç (1854) → Düyun-ı Umumiye (1881)**.",
            "**24 Temmuz 1923 Lozan Antlaşması**.",
            "Borçlar **Osmanlı'dan ayrılan devletler arasında paylaştırılmış**, Türkiye'ye düşen kısım **taksitle ödenmek üzere** kabul edilmiştir.",
            "Lozan sonrası ödemeler düzenlenmiş ve borçlar **1954'te tamamen ödenerek** tasfiye edilmiştir.",
            "**Ekonomik bağımsızlık olmadan siyasi bağımsızlık sürdürülemez**; Osmanlı örneği bunun kanıtıdır. Atatürk'ün ekonomi politikasının çıkış noktası da budur.",
            "**Kapitülasyonlar**, **Balta Limanı gibi eşitsiz antlaşmalar**, **sanayileşememe**, **sermaye birikiminin olmaması**, **savaş giderleri** ve **borçların üretken alanlara yönlendirilmemesi**.",
            "**Yerli sanayiyi çökertmiş**, Osmanlı'yı Avrupa'nın **açık pazarı ve hammadde deposu** hâline getirmiştir.",
            "Osmanlı, **kendi pazarını koruyamadığı ve üretim yapısını yenileyemediği** için yüzyıl boyunca **borç ve bağımlılık sarmalına** girmiştir.",
        ],
    },
}
