"""TYT Fizik — Elektrostatik (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: ELEKTROSTATİK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Elektrostatik",
    "alt_baslik": "Ham bilgi notu — elektrik yükü, yükleme yolları, Coulomb yasası "
                  "ve elektroskop; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Elektrostatik",
        "kazanimlar": "9.8.1.1 — Elektrik yükünü ve yükleme yollarını açıklar. "
                      "9.8.1.2 — Coulomb yasasını uygular. "
                      "9.8.1.3 — Elektroskopun çalışmasını yorumlar.",
        "kapsam": "Elektrik yükü, iletken-yalıtkan, sürtünme-dokunma-etki ile "
                  "yükleme, topraklama, Coulomb yasası, elektrik alan, elektroskop, "
                  "40 analiz sorusu",
        "nasil": "**Etki ile yükleme** ve **topraklama** bu konunun en çok "
                 "karıştırılan başlıklarıdır; şemayı adım adım takip et. Coulomb "
                 "yasasında **karesiyle ters orantı** vurgusunu kaçırma.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Elektroskop soruları TYT'de sık çıkar ve ezberle değil, "
                    "adım adım düşünmeyle çözülür.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Elektrik Yükü"},
        {"tur": "maddeler", "ogeler": [
            "Maddedeki **proton (+)** ve **elektron (−)** sayıları eşitse cisim "
            "**nötrdür**.",
            "**Yüklenme yalnızca elektron alışverişiyle** olur. **Proton sayısı "
            "asla değişmez** — protonlar çekirdekte sabittir.",
            "**Elektron veren cisim (+)** yüklenir. **Elektron alan cisim (−)** "
            "yüklenir.",
            "**Aynı cins yükler birbirini iter**, **zıt cins yükler birbirini çeker**.",
            "**Yüklü cisim, nötr cismi her zaman ÇEKER.** Bu yüzden çekme olayı "
            "cismin yükü hakkında kesin bilgi vermez.",
            "**Yükün korunumu**: Kapalı bir sistemde toplam yük **değişmez**; "
            "yalnızca cisimler arasında paylaşılır.",
        ]},
        {"tur": "tuzak", "baslik": "Çekme Kesin Bilgi Vermez, İtme Verir", "govde":
            "Bir cisim yüklü bir çubuğu **çekiyorsa**, cisim ya **zıt yüklüdür** "
            "ya da **nötrdür** — iki olasılık vardır. Ama **itiyorsa** kesinlikle "
            "**aynı cins yükle yüklüdür**. Sorularda 'kesinlikle yüklüdür' "
            "denmesini sağlayan tek gözlem **itmedir**."},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "İletken", "Yalıtkan"],
         "oranlar": [0.28, 0.36, 0.36],
         "satirlar": [
             ["Serbest elektron", "**Vardır**", "**Yoktur** (çok azdır)"],
             ["Yük dağılımı", "**Yüzeye** yayılır, dengelenir", "**Verildiği yerde** kalır"],
             ["Elektriği iletir mi", "**Evet**", "**Hayır**"],
             ["Örnek", "Metaller, insan vücudu, tuzlu su, toprak",
              "Cam, plastik, ebonit, kauçuk, tahta, hava"],
         ]},
        {"tur": "dikkat", "baslik": "İletkende Yük Yüzeye Dağılır", "govde":
            "Bir iletken küreye yük verilirse, yükler **birbirini ittiği için** "
            "kürenin **dış yüzeyine** dağılır ve **iç kısımda yük bulunmaz**. "
            "Bu yüzden metal bir kafesin içi elektriksel olarak korunaklıdır "
            "(**Faraday kafesi**); şimşek çakarken arabanın içi güvenlidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yükleme Yolları"},
        {"tur": "gorsel", "baslik": "Şema 1 — Üç yükleme yolu",
         "aciklama": "Sürtünme ve dokunma ile yükleme **kalıcıdır**; etki ile "
                     "yükleme **geçicidir** (yükleyici uzaklaşınca cisim eski "
                     "hâline döner).",
         "ciz": S.agac("Yükleme", [
             ("Kalıcı", ["Sürtünme ile", "Dokunma ile"]),
             ("Geçici", ["Etki (tesir) ile"]),
         ])},
        {"tur": "altbolum", "baslik": "A. Sürtünme ile Yükleme"},
        {"tur": "maddeler", "ogeler": [
            "**İki yalıtkan cisim** birbirine sürtüldüğünde biri elektron verir, "
            "diğeri alır.",
            "Cisimler **zıt cins ve eşit büyüklükte** yükle yüklenir. "
            "**Toplam yük yine sıfırdır** (yükün korunumu).",
            "Örnek: Cam çubuk ipek kumaşa sürtülürse **cam (+)**, **ipek (−)** "
            "yüklenir. Ebonit çubuk yün kumaşa sürtülürse **ebonit (−)**, "
            "**yün (+)** yüklenir.",
        ]},
        {"tur": "altbolum", "baslik": "B. Dokunma ile Yükleme"},
        {"tur": "maddeler", "ogeler": [
            "**Yüklü bir cisim, nötr ya da yüklü bir iletkene dokundurulur.** "
            "Yükler iki cisim arasında **paylaşılır**.",
            "Dokunma sonrası **her iki cisim de aynı cins yükle** yüklenir.",
            "**Özdeş küreler** dokundurulup ayrılırsa, toplam yük **eşit olarak "
            "paylaşılır**: her birinin son yükü **(q_1 + q_2) / 2** olur.",
            "**Özdeş olmayan** cisimlerde paylaşım **yüzey alanına göre** yapılır.",
        ]},
        {"tur": "cozum",
         "baslik": "Özdeş Kürelerde Yük Paylaşımı",
         "soru": "Yükleri **+8q** ve **−2q** olan iki **özdeş** iletken küre "
                 "birbirine dokundurulup ayrılıyor. Kürelerin son yükleri kaçtır?",
         "adimlar": [
             "Toplam yükü bul: (+8q) + (−2q) = **+6q**.",
             "Özdeş küreler olduğu için toplam yük **eşit paylaşılır**.",
             "Her birinin son yükü: +6q / 2.",
         ],
         "sonuc": "Her iki kürenin son yükü +3q olur."},
        {"tur": "altbolum", "baslik": "C. Etki (Tesir) ile Yükleme"},
        {"tur": "maddeler", "ogeler": [
            "**Yüklü cisim, nötr iletkene DOKUNDURULMADAN yaklaştırılır.**",
            "Nötr cisimdeki serbest elektronlar yer değiştirir: yüklü cisme **yakın "
            "uçta ZIT yük**, **uzak uçta AYNI cins yük** toplanır.",
            "**Cismin toplam yükü hâlâ sıfırdır**; yalnızca yükler ayrışmıştır. "
            "Bu yüzden etki ile yükleme **geçicidir** — yükleyici uzaklaşınca "
            "yükler yeniden dağılır ve cisim nötr hâline döner.",
            "**Kalıcı hâle getirmek için topraklama** gerekir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Etki ile yükleme ve topraklama",
         "aciklama": "**Topraklama sırası kritiktir**: önce toprak bağlantısı "
                     "kesilir, **sonra** yüklü çubuk uzaklaştırılır. Sıra ters "
                     "olursa cisim tekrar nötr olur.",
         "ciz": S.akis(
             ["Çubuk yaklaştırılır", "Yükler ayrışır", "Topraklanır",
              "Toprak kesilir", "Çubuk uzaklaşır"],
             ["dokundurulmadan", "yakın uç zıt,\nuzak uç aynı",
              "uzak uçtaki yük\ntoprağa gider", "**önce bu**",
              "cisim **zıt yükle**\nkalıcı yüklendi"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Topraklama**: Cismin, toprakla iletken bir bağlantı kurmasıdır. "
            "Toprak **çok büyük bir yük deposu** gibi davranır.",
            "**Nötr bir cisim topraklanırsa hiçbir şey olmaz** (zaten nötrdür).",
            "**Yüklü bir cisim topraklanırsa nötr hâle gelir**: fazla elektronlar "
            "toprağa gider ya da topraktan elektron gelir.",
            "**Etki altındayken topraklanan cisim, yükleyici çubuğun ZIT cinsiyle "
            "kalıcı olarak yüklenir.**",
        ]},
        {"tur": "tuzak", "baslik": "Topraklamada Sıra Önemlidir", "govde":
            "Etki ile kalıcı yükleme yaparken **önce toprak bağlantısı kesilir, "
            "SONRA yüklü çubuk uzaklaştırılır**. Sıra ters yapılırsa (önce çubuk "
            "uzaklaştırılırsa) yükler yeniden dağılır ve cisim **nötr kalır**. "
            "Bu ayrıntı doğrudan sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Coulomb Yasası"},
        {"tur": "gorsel", "baslik": "Şema 3 — Coulomb kuvveti neye nasıl bağlı?",
         "aciklama": "Kuvvet **yükle doğru orantılı**, **uzaklığın karesiyle ters "
                     "orantılıdır**. Bu yüzden yük iki katına çıkınca kuvvet **2 kat**, "
                     "uzaklık iki katına çıkınca kuvvet **4 kata düşer** (1/4'ü olur). "
                     "Soruda 'uzaklık 3 katına çıkarsa' derse kuvvet **9'da 1'e** iner.",
         "ciz": S.grafik_seti([
             ("Kuvvet – Uzaklık", "Uzaklık (d)", "Kuvvet (F)",
              [("", [(0.1, 0.94), (0.135, 0.516), (0.17, 0.325), (0.205, 0.224), (0.24, 0.163), (0.275, 0.124), (0.31, 0.098), (0.345, 0.079), (0.38, 0.065), (0.415, 0.055), (0.45, 0.046), (0.485, 0.04), (0.52, 0.035), (0.555, 0.031), (0.59, 0.027), (0.625, 0.024), (0.66, 0.022), (0.695, 0.019), (0.73, 0.018), (0.765, 0.016), (0.8, 0.015), (0.835, 0.013), (0.87, 0.012), (0.905, 0.011), (0.94, 0.011)], TEHLIKE)],
              [(0.30, 0.62, "F ~ **1/d²**")]),
             ("Kuvvet – Yük", "Yük (q)", "Kuvvet (F)",
              [("", [(0, 0.02), (0.94, 0.90)], MARKA)],
              [(0.05, 0.74, "F ~ **q**")]),
         ], ortak_not="Uzaklık 2 kat → kuvvet 1/4 · Uzaklık 3 kat → kuvvet 1/9 · Yük 2 kat → kuvvet 2 kat")},
        {"tur": "formul",
         "baslik": "İki nokta yük arasındaki kuvvet",
         "ifade": "F = k · (q_1 · q_2) / d²",
         "terimler": [
             ("F", "**Elektriksel kuvvet** (N) — itme ya da çekme"),
             ("k", "Coulomb sabiti (yaklaşık **9 × 10^9** N·m²/C²)"),
             ("q_1, q_2", "**Yük miktarları** (coulomb, C)"),
             ("d", "Yükler arasındaki **uzaklık** (m)"),
         ],
         "not": "Kuvvet, **yüklerin çarpımıyla doğru**, **uzaklığın KARESİYLE "
                "ters** orantılıdır. Uzaklık 2 katına çıkarsa kuvvet **4'te 1'ine** "
                "düşer; yarıya inerse kuvvet **4 katına** çıkar."},
        {"tur": "cozum",
         "baslik": "Uzaklık Değişiminin Etkisi",
         "soru": "İki yük arasındaki uzaklık **3 katına** çıkarılırsa aralarındaki "
                 "elektriksel kuvvet nasıl değişir?",
         "adimlar": [
             "Coulomb yasasında kuvvet, uzaklığın **karesiyle ters** orantılıdır.",
             "Uzaklık 3d olursa payda d² yerine (3d)² = **9d²** olur.",
             "Kuvvet **9'a bölünür**.",
         ],
         "sonuc": "Kuvvet 9'da 1'ine düşer."},
        {"tur": "cozum",
         "baslik": "Yük ve Uzaklık Birlikte Değişirse",
         "soru": "Yüklerden biri **2 katına** çıkarılır ve uzaklık **yarıya** "
                 "indirilirse kuvvet kaç katına çıkar?",
         "adimlar": [
             "Yükün 2 katına çıkması kuvveti **2 katına** çıkarır (doğru orantı).",
             "Uzaklığın yarıya inmesi: payda (d/2)² = d²/4 olur → kuvvet "
             "**4 katına** çıkar.",
             "İki etki çarpılır: 2 × 4.",
         ],
         "sonuc": "Kuvvet 8 katına çıkar."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Elektrik alan (E)**: Yüklü bir cismin çevresinde oluşan etki "
            "bölgesidir. **E = F / q** bağıntısıyla bulunur; birimi **N/C**'dir.",
            "**Elektrik alan vektöreldir.** Pozitif yükten **dışa doğru**, negatif "
            "yüke **içe doğru** yönelir.",
            "**Elektriksel potansiyel (V)**: Birim yükün sahip olduğu potansiyel "
            "enerjidir; **skalerdir**, birimi **volt**tur.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Elektroskop"},
        {"tur": "maddeler", "ogeler": [
            "**Elektroskop**, bir cismin **yüklü olup olmadığını** ve **yük "
            "miktarını** anlamaya yarayan araçtır.",
            "**Yapısı**: Topuz (küre), iletken çubuk ve iki ince **yaprak**.",
            "**Yükleme sonucu yapraklar açılır**; çünkü her iki yaprak da **aynı "
            "cins yükle** yüklenir ve birbirini iter.",
            "**Açılma miktarı yük miktarıyla doğru orantılıdır**.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Durum", "Yapraklarda Ne Olur?", "Sonuç"],
         "oranlar": [0.34, 0.32, 0.34],
         "satirlar": [
             ["Nötr elektroskoba **yüklü cisim** yaklaştırılır",
              "**Açılır**", "Etki ile yük ayrışması"],
             ["**Yüklü** elektroskoba **aynı cins** yük yaklaştırılır",
              "**Açıklık artar**", "Yaprakların yükü artar"],
             ["**Yüklü** elektroskoba **zıt cins** yük yaklaştırılır",
              "**Açıklık azalır**, kapanabilir", "Yapraklardaki yük azalır"],
             ["**Yüklü** elektroskop **topraklanır**", "**Kapanır**", "Cisim nötrleşir"],
             ["**Nötr** elektroskop topraklanır", "**Değişmez**", "Zaten nötrdür"],
         ]},
        {"tur": "taktik", "baslik": "Elektroskop Sorusunu Çözme", "govde":
            "Elektroskop sorularında iki adım yeterlidir:",
         "ogeler": [
             "**1)** Elektroskop **başlangıçta yüklü mü nötr mü** belirle.",
             "**2)** Yaklaştırılan yük, **yapraklardaki yükü artırıyor mu "
             "azaltıyor mu** diye bak.",
             "**Açıklık artıyorsa** → yaklaştırılan yük, elektroskopla **aynı "
             "cinstir**.",
             "**Açıklık azalıyorsa** → **zıt cinstir**.",
             "**Nötr elektroskopta her durumda açılır** — cins bilgisi vermez.",
         ]},
        {"tur": "cikmis", "baslik": "Ayırt edici gözlem", "govde":
            "'Bir elektroskopun yükünün cinsini belirlemek için ne yapılmalı?' "
            "Cevap: **cinsi bilinen bir yük yaklaştırılır**. Açıklık **artarsa** "
            "elektroskop aynı cinsle, **azalırsa** zıt cinsle yüklüdür. Yalnızca "
            "'yaprakların açık olması' yükün **cinsini** söylemez."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Yüklenme **yalnızca elektron** alışverişiyle olur; **proton değişmez**.",
            "**İtme kesin bilgi verir**, **çekme vermez** (nötr de çekilir).",
            "İletkende yük **yüzeye** dağılır; **iç kısımda yük yoktur**.",
            "Sürtünme ile yüklenen iki cisim **zıt ve eşit** yük alır.",
            "Özdeş kürelerde dokunma sonrası yük: **(q_1 + q_2) / 2**.",
            "**Etki ile yükleme geçicidir**; kalıcı olması için **topraklama** gerekir.",
            "Topraklamada **önce toprak kesilir, sonra çubuk uzaklaştırılır**.",
            "Coulomb: kuvvet **uzaklığın karesiyle ters** orantılıdır.",
            "Elektroskopta **açıklık artarsa aynı cins**, azalırsa **zıt cins**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Yükleme sorularında **adım adım** ilerle ve her adımda cismin toplam "
            "yükünü yaz. Elektroskop sorularında önce başlangıç durumunu belirle. "
            "Coulomb sorularında oranları ayrı ayrı hesaplayıp çarp.",
        "satir_sayisi": 2,
        "sorular": [
            "Bir cismin nötr olması ne demektir?",
            "Cisimler nasıl yüklenir? Proton sayısı değişir mi?",
            "Elektron veren ve elektron alan cisimlerin yükleri ne olur?",
            "Aynı ve zıt cins yükler arasındaki etkileşimi yazınız.",
            "Yüklü bir cisim nötr cismi çeker mi? Neden?",
            "Bir cismin kesinlikle yüklü olduğunu hangi gözlem kanıtlar?",
            "Çekme olayının kesin bilgi vermemesinin nedeni nedir?",
            "Yükün korunumu ilkesini yazınız.",
            "İletken ve yalıtkanı serbest elektron bakımından karşılaştırınız.",
            "İletken bir küreye verilen yük nerede toplanır? Neden?",
            "Faraday kafesi nedir? Şimşek çakarken araba içinin güvenli olmasını açıklayınız.",
            "Üç yükleme yolunu yazınız ve hangilerinin kalıcı olduğunu belirtiniz.",
            "Sürtünme ile yüklemede iki cismin yükleri nasıl olur?",
            "Cam çubuk ipeğe sürtülürse hangisi hangi yükle yüklenir?",
            "Sürtünme ile yüklemede toplam yük değişir mi?",
            "Dokunma ile yüklemede cisimlerin son yükleri aynı cins mi olur?",
            "Özdeş kürelerde dokunma sonrası yük nasıl hesaplanır?",
            "+8q ve −2q yüklü özdeş küreler dokundurulup ayrılırsa son yükleri kaçtır?",
            "+10q ve +2q yüklü özdeş küreler için aynı hesabı yapınız.",
            "+6q ve −6q yüklü özdeş küreler dokundurulursa ne olur?",
            "Etki ile yüklemede cisme dokunulur mu?",
            "Etki ile yüklemede yakın ve uzak uçlarda hangi yükler toplanır?",
            "Etki ile yükleme neden geçicidir?",
            "Topraklama nedir? Toprak nasıl davranır?",
            "Nötr bir cisim topraklanırsa ne olur?",
            "Yüklü bir cisim topraklanırsa ne olur?",
            "Etki altındayken topraklanan cisim hangi yükle kalıcı yüklenir?",
            "Topraklamada işlem sırası neden önemlidir?",
            "Sıra ters yapılırsa (önce çubuk uzaklaştırılırsa) ne olur?",
            "Coulomb yasasını formülüyle yazınız.",
            "Kuvvet yüklerle nasıl, uzaklıkla nasıl ilişkilidir?",
            "Uzaklık 2 katına çıkarsa kuvvet nasıl değişir?",
            "Uzaklık 3 katına çıkarsa kuvvet nasıl değişir?",
            "Uzaklık yarıya inerse kuvvet nasıl değişir?",
            "Yüklerden biri 2 katına çıkar ve uzaklık yarıya inerse kuvvet kaç katına çıkar?",
            "Elektrik alanı tanımlayınız ve bağıntısını yazınız.",
            "Elektrik alanın yönü pozitif ve negatif yük için nasıldır?",
            "Elektroskop ne işe yarar? Yapısını yazınız.",
            "Elektroskopta yaprakların açılmasının nedeni nedir?",
            "Yüklü elektroskoba zıt cins yük yaklaştırılırsa açıklık nasıl değişir?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Cisimdeki **proton (+) ve elektron (−) sayılarının eşit** olması, dolayısıyla net yükünün **sıfır** olmasıdır.",
            "**Yalnızca elektron alışverişiyle** yüklenir. **Proton sayısı değişmez**; protonlar çekirdekte sabittir.",
            "**Elektron veren (+)**, **elektron alan (−)** yükle yüklenir.",
            "**Aynı cins yükler birbirini iter**, **zıt cins yükler birbirini çeker**.",
            "**Çeker.** Yüklü cisim, nötr cisimde **etki ile yük ayrışması** oluşturur; yakın uçta zıt yük toplandığı için çekim doğar.",
            "**İtme.** Yalnızca aynı cins yükler birbirini iter; itme gözlenen cisim kesinlikle yüklüdür.",
            "Çekme hem **zıt yüklü** bir cisimle hem de **nötr** bir cisimle gerçekleşebilir; iki olasılık olduğu için kesin sonuç vermez.",
            "Kapalı bir sistemde **toplam yük değişmez**; yalnızca cisimler arasında paylaşılır.",
            "**İletkende serbest elektron vardır**, yük yüzeye yayılır ve elektrik iletilir. **Yalıtkanda serbest elektron yoktur**, yük verildiği yerde kalır.",
            "**Dış yüzeyde** toplanır. Aynı cins yükler **birbirini ittiği** için mümkün olan en uzak konuma, yani yüzeye dağılırlar.",
            "İçi boş bir **iletken kafes**tir; yük yalnızca dış yüzeyde toplandığı için **iç kısım elektrik alandan korunur**. Arabanın metal gövdesi bu görevi görür.",
            "**Sürtünme, dokunma ve etki (tesir) ile.** Sürtünme ve dokunma **kalıcı**, etki ile yükleme **geçicidir**.",
            "**Zıt cins ve eşit büyüklükte** yükle yüklenirler.",
            "**Cam (+)**, **ipek (−)** yüklenir.",
            "**Değişmez.** Biri elektron verirken diğeri aynı miktarda alır; toplam yük yine sıfırdır.",
            "**Evet, aynı cins olur.** Yükler paylaşıldığı için iki cisim de aynı işaretli yüke sahip olur.",
            "Toplam yük **eşit paylaşılır**: her birinin son yükü **(q_1 + q_2) / 2** olur.",
            "Toplam +6q → her birine **+3q**.",
            "Toplam +12q → her birine **+6q**.",
            "Toplam yük sıfırdır → her ikisi de **nötr** olur.",
            "**Dokunulmaz.** Yüklü cisim yalnızca **yaklaştırılır**.",
            "**Yakın uçta zıt cins**, **uzak uçta aynı cins** yük toplanır.",
            "Cismin **toplam yükü hâlâ sıfırdır**; yalnızca yükler ayrışmıştır. Yükleyici uzaklaşınca yükler yeniden dağılır ve cisim nötr hâline döner.",
            "Cismin **toprakla iletken bağlantı kurmasıdır**. Toprak **çok büyük bir yük deposu** gibi davranır; sınırsız elektron alıp verebilir.",
            "**Hiçbir şey olmaz**; cisim zaten nötrdür.",
            "**Nötr hâle gelir.** Fazla elektronlar toprağa gider ya da eksik elektronlar topraktan gelir.",
            "Yükleyici çubuğun **zıt cinsiyle** kalıcı olarak yüklenir.",
            "**Önce toprak bağlantısı kesilmeli, sonra çubuk uzaklaştırılmalıdır.** Böylece ayrışan yük cisimde hapsolur.",
            "Yükler **yeniden dağılır** ve cisim **nötr kalır**; kalıcı yükleme gerçekleşmez.",
            "**F = k · (q_1 · q_2) / d².**",
            "**Yüklerin çarpımıyla doğru orantılı**, **uzaklığın karesiyle ters orantılıdır**.",
            "**4'te 1'ine düşer.**",
            "**9'da 1'ine düşer.**",
            "**4 katına çıkar.**",
            "Yük etkisi ×2, uzaklık etkisi ×4 → **8 katına** çıkar.",
            "Yüklü bir cismin çevresinde oluşan **etki bölgesidir**. **E = F / q**, birimi **N/C**'dir.",
            "**Pozitif yükten dışa doğru**, **negatif yüke içe doğru** yönelir.",
            "Bir cismin **yüklü olup olmadığını** ve **yük miktarını** belirlemeye yarar. **Topuz, iletken çubuk ve iki yapraktan** oluşur.",
            "Her iki yaprak da **aynı cins yükle** yüklenir ve **birbirini iter**.",
            "**Açıklık azalır**, hatta yaprakların kapanmasına yol açabilir; çünkü yapraklardaki yük azalır.",
        ],
    },
}
