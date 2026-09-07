"""AYT Biyoloji — Duyu Organları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: DUYU ORGANLARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Duyu Organları",
    "alt_baslik": "Ham bilgi notu — göz, kulak, burun, dil ve deri; reseptör çeşitleri, "
                  "görme ve işitme kusurları; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Duyu Organları",
        "kazanimlar": "11.1.3.1 — Duyu organlarının yapı ve işleyişini açıklar. "
                      "11.1.3.2 — Duyu organlarındaki rahatsızlıkları ve korunma "
                      "yollarını açıklar.",
        "kapsam": "Reseptör çeşitleri, gözün tabakaları, görme olayı, göz kusurları ve "
                  "düzeltilmesi, kulağın bölümleri, işitme ve denge, burun ve koku, "
                  "dil ve tat, derinin yapısı ve dokunma reseptörleri, 45 analiz sorusu",
        "nasil": "Duyu organları **yol takip etme** konusudur. Her organda uyarının "
                 "hangi yapıdan girip hangi sinirle beyne gittiğini **sırayla** yaz. "
                 "Sınav sorusu çoğunlukla bu sıranın bir halkasını sorar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de duyu organlarından gelen soruların çoğu **göz kusurlarının "
                    "düzeltilmesi** ya da **hangi reseptör hangi uyarıyı algılar** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Reseptörler"},
        {"tur": "tanim", "kavram": "Reseptör (almaç)",
         "aciklama": "Belirli bir uyarıyı algılayıp **impulsa çeviren** özelleşmiş "
                     "yapıdır. Her reseptör **yalnızca kendi uyarısına** duyarlıdır; "
                     "gözdeki reseptör sesi, kulaktaki reseptör ışığı algılayamaz."},
        {"tur": "tablo",
         "basliklar": ["Reseptör çeşidi", "Algıladığı uyarı", "Bulunduğu yer"],
         "satirlar": [
             ["**Fotoreseptör**", "**Işık**", "Gözün ağ tabakası (retina)"],
             ["**Mekanoreseptör**", "**Basınç, dokunma, ses, denge**",
              "Deri, iç kulak, kas ve tendonlar"],
             ["**Kemoreseptör**", "**Kimyasal madde** (koku, tat)",
              "Burun, dil, damar duvarları"],
             ["**Termoreseptör**", "**Sıcaklık değişimi**", "Deri, hipotalamus"],
             ["**Ağrı reseptörü (nosiseptör)**", "**Doku hasarı**",
              "Deri ve iç organlar — **adaptasyon yapmaz**"],
         ],
         "oranlar": [0.28, 0.32, 0.40]},
        {"tur": "tanim", "kavram": "Adaptasyon (duyu körlüğü)",
         "aciklama": "Aynı uyarı sürekli verildiğinde reseptörün **duyarlılığını "
                     "yitirmesidir**. Bir odaya girince hissedilen kokunun bir süre "
                     "sonra fark edilmemesi buna örnektir. **Ağrı reseptörleri "
                     "adaptasyon yapmaz** — bu, canlıyı koruyan bir özelliktir."},
        {"tur": "tuzak", "baslik": "Duyunun Oluştuğu Yer Reseptör Değildir", "govde":
            "Reseptör yalnızca uyarıyı **impulsa çevirir**. Görme, işitme, koku ve tat "
            "duyusu **beyin kabuğunda** oluşur. \"Görme olayı retinada gerçekleşir\" "
            "ifadesi **yanlıştır**; retinada oluşan şey **görüntü ve impulstur**, "
            "görme duyusu beyinde oluşur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Göz"},
        {"tur": "gorsel", "baslik": "Şema 1 — Gözün üç tabakası",
         "aciklama": "Işık dıştan içe doğru ilerler; **fotoreseptörler en içteki "
                     "tabakadadır**. Bu yüzden ışığın önce saydam yapılardan geçmesi "
                     "gerekir.",
         "ciz": S.katmanlar([
             ("Sert tabaka (sklera)",
              "En **dıştaki** koruyucu tabaka. Ön kısmı saydamlaşarak **kornea**yı oluşturur; ışık buradan girer."),
             ("Damar tabaka (koroit)",
              "Gözü **besler** ve içeriyi **karartır**. Ön kısmı **iris**tir; ortasındaki delik **göz bebeğidir** ve ışık miktarını ayarlar."),
             ("Ağ tabaka (retina)",
              "**Fotoreseptörlerin** bulunduğu en iç tabaka. **Sarı benek** en net gören yer, **kör nokta** ise reseptör bulunmayan çıkış noktasıdır."),
         ])},
        {"tur": "tablo",
         "basliklar": ["Fotoreseptör", "Algıladığı", "Özelliği"],
         "satirlar": [
             ["**Koni hücreleri**", "**Renk** ve ayrıntı",
              "**Aydınlıkta** çalışır; **sarı benekte** yoğundur. Kırmızı, yeşil ve mavi olmak üzere üç çeşittir"],
             ["**Çubuk hücreleri**", "**Işık şiddeti** (siyah-beyaz)",
              "**Loş ışıkta** çalışır; çevrede yoğundur. **A vitamini** eksikliğinde "
              "**gece körlüğü** görülür"],
         ],
         "oranlar": [0.22, 0.22, 0.56]},
        {"tur": "gorsel", "baslik": "Şema 2 — Görme olayının sırası",
         "aciklama": "Görüntü retinaya **ters ve küçük** düşer; beyin bunu düzeltir. "
                     "Bu yüzden gördüğümüz düz görüntü **beyin işidir**.",
         "ciz": S.akis(
             ["Kornea", "Göz bebeği", "Göz merceği", "Retina", "Görme siniri", "Beyin"],
             ["ışık **kırılır**", "ışık miktarı\nayarlanır", "**odaklama**\nyapılır",
              "ters ve küçük\n**görüntü**", "impuls\ntaşınır", "**görme duyusu**\noluşur"])},
        {"tur": "tanim", "kavram": "Göz uyumu (akomodasyon)",
         "aciklama": "Göz merceğinin, cismin uzaklığına göre **kalınlığını "
                     "değiştirmesidir**. **Yakına** bakarken mercek **kalınlaşır**, "
                     "**uzağa** bakarken **incelir**. Bunu **kirpiksi cisim** kasları "
                     "sağlar."},
        {"tur": "tablo",
         "basliklar": ["Kusur", "Nedeni", "Düzeltme"],
         "satirlar": [
             ["**Miyop** (uzağı görememe)",
              "Göz **önden arkaya uzundur** ya da mercek çok kalındır; görüntü retinanın **önüne** düşer",
              "**Kalın kenarlı (ıraksak)** mercek"],
             ["**Hipermetrop** (yakını görememe)",
              "Göz **kısadır** ya da mercek çok incedir; görüntü retinanın **arkasına** düşer",
              "**İnce kenarlı (yakınsak)** mercek"],
             ["**Astigmat**", "Kornea ya da merceğin **küresel olmaması**; ışık "
              "farklı düzlemlerde farklı kırılır", "**Silindirik** mercek"],
             ["**Presbitlik**", "Yaşla birlikte merceğin **esnekliğini yitirmesi**; "
              "uyum yapamaz", "**İnce kenarlı** mercek (okuma gözlüğü)"],
             ["**Renk körlüğü**", "**Koni** hücrelerindeki eksiklik; kalıtsaldır ve "
              "**X'e bağlı çekiniktir**", "Düzeltilemez"],
             ["**Katarakt**", "Göz **merceğinin saydamlığını yitirmesi**",
              "Cerrahi olarak mercek değişimi"],
         ],
         "oranlar": [0.22, 0.48, 0.30]},
        {"tur": "taktik", "baslik": "Miyop mu Hipermetrop mu? Tek Cümlede Ayır", "govde":
            "**Miyop uzağı göremez**, görüntü retinanın **önüne** düşer, **kalın "
            "kenarlı** mercekle düzeltilir — üçü de \"ön/kalın\" ile başlar diye "
            "hatırla. **Hipermetropta** her şey tersidir: yakını göremez, görüntü "
            "**arkaya** düşer, **ince kenarlı** mercek kullanılır."},
        {"tur": "dikkat", "baslik": "Kör Noktada Neden Görme Yoktur?", "govde":
            "Kör nokta, **görme sinirinin gözden çıktığı** yerdir. Burada **koni ve "
            "çubuk hücresi bulunmaz**, bu yüzden buraya düşen ışık algılanamaz. İki "
            "gözün görme alanları çakıştığı için günlük hayatta bu boşluğu fark etmeyiz."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kulak"},
        {"tur": "tablo",
         "basliklar": ["Bölüm", "Yapılar", "Görevi"],
         "satirlar": [
             ["**Dış kulak**", "Kulak kepçesi, kulak yolu, **kulak zarı**",
              "Ses dalgalarını **toplar** ve zara iletir"],
             ["**Orta kulak**", "**Çekiç – örs – üzengi** kemikleri, **östaki borusu**",
              "Ses titreşimlerini **güçlendirerek** iç kulağa aktarır; östaki borusu "
              "zarın iki yanındaki **basıncı eşitler**"],
             ["**İç kulak**", "**Salyangoz (koklea)**, **yarım daire kanalları**, "
              "**tulumcuk ve kesecik**",
              "Salyangoz **işitme**, yarım daire kanalları **dönme dengesi**, "
              "tulumcuk-kesecik **duruş dengesi**"],
         ],
         "oranlar": [0.18, 0.34, 0.48]},
        {"tur": "gorsel", "baslik": "Şema 3 — İşitmenin sırası",
         "aciklama": "Ses **dış kulakta dalga**, **orta kulakta titreşim**, **iç "
                     "kulakta sıvı hareketi**, sonunda **impuls** hâline gelir. Sorular "
                     "bu dört biçim değişiminin sırasını sorar.",
         "ciz": S.akis(
             ["Kulak kepçesi", "Kulak zarı", "Üç küçük kemik", "Salyangoz",
              "İşitme siniri", "Beyin"],
             ["sesi **toplar**", "**titreşir**", "titreşimi\n**güçlendirir**",
              "sıvı hareketi →\n**impuls**", "impuls\ntaşınır", "**işitme**\noluşur"])},
        {"tur": "maddeler", "ogeler": [
            "**Denge** duyusu iç kulaktadır ama işitmeyle ilgisi yoktur: **yarım daire "
            "kanalları dönme hareketini**, **tulumcuk ve kesecik başın duruşunu** "
            "algılar.",
            "Denge bilgisi **beyinciğe** gider; beyincik kasların uyumunu buna göre "
            "ayarlar.",
            "**Östaki borusu**, orta kulağı **yutağa** bağlar. Uçakta ya da yüksek "
            "yerde kulakların tıkanması, bu boruyla basıncın eşitlenmesiyle geçer.",
            "**İletim tipi işitme kaybı** dış ve orta kulaktaki engelden (kulak kiri, "
            "zar delinmesi, kemik sertleşmesi); **sinirsel işitme kaybı** iç kulak ya "
            "da işitme sinirindeki hasardan kaynaklanır.",
            "Uzun süre **yüksek sese** maruz kalmak salyangozdaki tüylü hücreleri "
            "kalıcı olarak tahrip eder; bu kayıp **geri dönmez**.",
        ]},
        {"tur": "tuzak", "baslik": "Denge Kulakta Algılanır, Beyincikte Değerlendirilir",
         "govde": "Denge **reseptörleri iç kulaktadır**; ancak dengeyi **sağlayan "
                  "merkez beyinciktir**. \"Denge merkezi iç kulaktır\" ifadesi "
                  "eksiktir: iç kulak bilgiyi **toplar**, beyincik **kullanır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Burun ve Dil"},
        {"tur": "gorsel", "baslik": "Şema 4 — Koku ve tat: iki kemoreseptör",
         "aciklama": "İkisi de **kimyasal** uyarı algılar ve **birlikte** çalışır. "
                     "Nezle olunca yemeklerin tatsız gelmesinin sebebi, tat "
                     "reseptörlerinin değil **koku reseptörlerinin** çalışmamasıdır.",
         "ciz": S.karsilastirma(
             "KOKU (burun)",
             ["**Kemoreseptör**dür",
              "Uyarıcı madde **gaz** hâlinde olmalı",
              "Burun boşluğunun **üst** kısmında",
              "**Çabuk adaptasyon** yapar",
              "Koku siniriyle beyne gider"],
             "TAT (dil)",
             ["**Kemoreseptör**dür",
              "Uyarıcı madde **sıvı** hâlinde olmalı (tükürükte çözünmeli)",
              "Dildeki **tat tomurcuklarında**",
              "Beş temel tat: tatlı, tuzlu, ekşi, acı, **umami**",
              "Dil siniriyle beyne gider"],
             "Ortak yön",
             ["İkisi de **kimyasal** algılar",
              "İkisi de **beyin kabuğunda** değerlendirilir",
              "Birlikte **lezzet** duyusunu oluşturur"])},
        {"tur": "dikkat", "baslik": "Dilde 'Tat Haritası' Yoktur", "govde":
            "Ders kitaplarındaki eski \"tatlı ucda, acı arkada\" haritası **geçerli "
            "değildir**. Beş temel tat, dilin **her bölgesinde** algılanabilir; "
            "yalnızca duyarlılık bölgeden bölgeye biraz değişir."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Deri"},
        {"tur": "tablo",
         "basliklar": ["Tabaka", "Yapısı", "İçerdiği"],
         "satirlar": [
             ["**Üst deri (epidermis)**", "Çok katlı yassı epitel; **damar yoktur**",
              "Ölü keratinli hücreler, **melanin** üreten hücreler"],
             ["**Alt deri (dermis)**", "Bağ dokusu; **damar ve sinir bakımından zengin**",
              "**Duyu reseptörleri**, ter bezi, yağ bezi, kıl kökü"],
         ],
         "oranlar": [0.26, 0.34, 0.40]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Deride **dokunma, basınç, sıcaklık, soğukluk ve ağrı** olmak üzere beş "
            "çeşit reseptör bulunur.",
            "Reseptörlerin **yoğunluğu her bölgede aynı değildir**: parmak ucu ve "
            "dudakta çok, sırtta azdır. Bu yüzden parmak ucu daha duyarlıdır.",
            "Deri aynı zamanda **örtü ve boşaltım** organıdır: terle su, tuz ve az "
            "miktarda üre atılır.",
            "**Melanin** ultraviyole ışınlara karşı korur; miktarı kalıtsaldır ve "
            "güneşle artar.",
            "Deri, **D vitamini** üretiminin başladığı yerdir; güneş ışığı bunu tetikler.",
        ]},
        {"tur": "cozum",
         "baslik": "Reseptör Yolu Kurma",
         "soru": "Sıcak bir bardağa dokunan kişinin elini çekmesi sürecinde uyarının "
                 "izlediği yolu, reseptör türünü belirterek yazınız.",
         "adimlar": [
             "Uyarı **sıcaklıktır**; algılayan reseptör deride bulunan **termoreseptör** "
             "(çok sıcaksa ayrıca **ağrı reseptörü**) olur.",
             "Reseptör uyarıyı **impulsa** çevirir; impuls **duyu nöronuyla** omuriliğe "
             "taşınır.",
             "Karar **omurilikteki ara nöronda** verilir — bu bir **reflekstir**, "
             "beyin beklenmez.",
             "**Motor nöron** impulsu kol kasına taşır, kas kasılır ve el çekilir.",
             "Beyin olayı **sonradan** öğrenir; acı bu yüzden el çekildikten sonra "
             "hissedilir.",
         ],
         "sonuc": "Termoreseptör → duyu nöronu → omurilik → motor nöron → kas; acı "
                  "duyusu ise sonradan beyinde oluşur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Reseptör uyarıyı **impulsa çevirir**; duyu **beyinde** oluşur.",
            "**Ağrı reseptörleri adaptasyon yapmaz**.",
            "Gözde **koni renk ve aydınlık**, **çubuk loş ışık**; A vitamini eksikliği "
            "**gece körlüğü** yapar.",
            "**Sarı benek** en net gören yer, **kör noktada** reseptör yoktur.",
            "**Miyop**: uzağı göremez, görüntü **önde**, **kalın kenarlı** mercek.",
            "**Hipermetrop**: yakını göremez, görüntü **arkada**, **ince kenarlı** mercek.",
            "**Renk körlüğü X'e bağlı çekiniktir**, düzeltilemez.",
            "Orta kulakta **çekiç–örs–üzengi**; **östaki borusu basıncı eşitler**.",
            "**Salyangoz işitme**, **yarım daire kanalları dönme dengesi**.",
            "Koku ve tat **kemoreseptördür**; koku için **gaz**, tat için **sıvı** gerekir.",
            "Deride **damar üst deride yoktur**; reseptörler **alt deridedir**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde sorular **yol takibi** ve **ayırt etme** üzerine kuruludur. "
            "Bir duyu organı sorusunda takıldığında kendine şunu sor: **uyarı nedir, "
            "hangi reseptör algılar, hangi sinirle nereye gider?** Üçünü yazdığında "
            "cevap çoğu zaman kendiliğinden çıkar.",
        "satir_sayisi": 2,
        "sorular": [
            "Reseptör kavramını tanımlayarak seçici olmasının anlamını açıklayınız.",
            "Beş reseptör çeşidini algıladıkları uyarı ve bulundukları yerle eşleştiriniz.",
            "Adaptasyon nedir? Bir örnekle açıklayınız.",
            "Ağrı reseptörlerinin adaptasyon yapmamasının canlı için önemini yazınız.",
            "'Görme olayı retinada gerçekleşir' ifadesindeki hatayı düzeltiniz.",
            "Gözün üç tabakasını dıştan içe doğru görevleriyle yazınız.",
            "İris ve göz bebeğinin görevini açıklayınız.",
            "Koni ve çubuk hücrelerini algıladıkları uyarı ve çalıştıkları ortam bakımından karşılaştırınız.",
            "A vitamini eksikliğinde hangi hücreler etkilenir ve hangi kusur ortaya çıkar?",
            "Sarı benek ile kör noktayı reseptör bulunma durumu bakımından karşılaştırınız.",
            "Görme olayının sırasını altı basamakta yazınız.",
            "Retinaya düşen görüntünün özelliklerini yazarak beynin katkısını açıklayınız.",
            "Göz uyumu (akomodasyon) nedir? Yakına ve uzağa bakışta mercek nasıl değişir?",
            "Miyop kusurunun nedenini ve düzeltme yöntemini açıklayınız.",
            "Hipermetrop kusurunun nedenini ve düzeltme yöntemini açıklayınız.",
            "Astigmatın miyop ve hipermetroptan farkını yazınız.",
            "Presbitliğin yaşla ortaya çıkmasının nedenini açıklayınız.",
            "Renk körlüğünün kalıtım biçimini ve neden erkeklerde daha sık görüldüğünü yazınız.",
            "Kataraktın nedenini ve tedavi yaklaşımını yazınız.",
            "Kör noktanın günlük hayatta fark edilmemesinin nedenini açıklayınız.",
            "Kulağın üç bölümünü yapıları ve görevleriyle yazınız.",
            "Ses dalgasının dış kulaktan iç kulağa kadar geçirdiği biçim değişimlerini sırayla yazınız.",
            "Orta kulaktaki üç kemiğin işlevini açıklayınız.",
            "Östaki borusunun görevini ve uçaktaki kulak tıkanmasıyla ilişkisini yazınız.",
            "Salyangozun görevini açıklayınız.",
            "Yarım daire kanalları ile tulumcuk-keseciğin algıladığı denge türlerini ayırt ediniz.",
            "Denge bilgisinin değerlendirildiği merkezi yazarak iç kulağın rolünü açıklayınız.",
            "İletim tipi ve sinirsel işitme kaybını nedenleri bakımından karşılaştırınız.",
            "Yüksek sese uzun süre maruz kalmanın iç kulaktaki etkisini açıklayınız.",
            "Koku reseptörlerinin uyarılabilmesi için maddenin hangi hâlde olması gerekir?",
            "Tat reseptörlerinin uyarılabilmesi için maddenin hangi hâlde olması gerekir?",
            "Nezle olan bir kişinin yemekleri tatsız bulmasının nedenini açıklayınız.",
            "Beş temel tadı yazarak dilde 'tat haritası' olmadığını açıklayınız.",
            "Koku ve tat duyusunun ortak yönlerini üç maddede yazınız.",
            "Derinin iki tabakasını damar ve reseptör içeriği bakımından karşılaştırınız.",
            "Deride bulunan beş reseptör çeşidini yazınız.",
            "Parmak ucunun sırta göre daha duyarlı olmasının nedenini açıklayınız.",
            "Derinin boşaltıma katkısını açıklayınız.",
            "Melaninin görevini ve miktarını etkileyen etkenleri yazınız.",
            "Derinin D vitamini üretimindeki rolünü açıklayınız.",
            "Sıcak bir cisme dokunan kişide uyarının izlediği yolu reseptörden kasa kadar yazınız.",
            "Acının el çekildikten sonra hissedilmesinin nedenini açıklayınız.",
            "Karanlık bir odaya girildiğinde bir süre sonra görmeye başlamanın nedenini açıklayınız.",
            "Bir kişi hem yakını hem uzağı net göremiyorsa hangi kusurlar birlikte düşünülebilir?",
            "Duyu organlarının hepsinde ortak olan üç özelliği yazınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Belirli bir uyarıyı algılayıp **impulsa çeviren** özelleşmiş yapıdır. Her reseptör **yalnızca kendi uyarısına** duyarlıdır; göz sesi, kulak ışığı algılayamaz.",
            "**Foto**: ışık — retina. **Mekano**: basınç/ses/denge — deri, iç kulak. **Kemo**: kimyasal — burun, dil. **Termo**: sıcaklık — deri, hipotalamus. **Nosiseptör**: doku hasarı — deri ve iç organlar.",
            "Sürekli aynı uyarıya maruz kalan reseptörün **duyarlılığını yitirmesidir**. Bir odadaki kokunun bir süre sonra fark edilmemesi buna örnektir.",
            "Ağrı, vücudu **tehlikeden koruyan** bir uyarıdır. Adaptasyon olsaydı süren hasar fark edilmez ve canlı zarar görürdü.",
            "Retinada **görüntü ve impuls** oluşur; **görme duyusu beyin kabuğunda** oluşur. Retina yalnızca algılayıp iletir.",
            "**Sert tabaka**: korur, önü **kornea**. **Damar tabaka**: besler ve karartır, önü **iris**. **Ağ tabaka**: **fotoreseptörleri** taşır.",
            "**İris** gözün renkli kısmıdır; ortasındaki **göz bebeği**nin çapını değiştirerek göze giren **ışık miktarını ayarlar**.",
            "**Koni**: renk ve ayrıntı, **aydınlıkta**, sarı benekte yoğun. **Çubuk**: ışık şiddeti (siyah-beyaz), **loş ışıkta**, çevrede yoğun.",
            "**Çubuk hücreleri** etkilenir; görme pigmenti (rodopsin) yapılamaz ve **gece körlüğü** ortaya çıkar.",
            "**Sarı benekte** koni hücreleri en yoğundur, **en net görülen** yerdir. **Kör noktada** hiç fotoreseptör yoktur, görme oluşmaz.",
            "**Kornea → göz bebeği → göz merceği → retina → görme siniri → beyin**.",
            "Görüntü **ters ve küçük** düşer. Beyin bu görüntüyü **düzelterek** algılar; gördüğümüz düz görüntü beynin işidir.",
            "Merceğin cismin uzaklığına göre **kalınlığını değiştirmesidir**. **Yakına** bakarken **kalınlaşır**, **uzağa** bakarken **incelir**.",
            "Göz küresi **uzundur** ya da mercek çok kalındır; görüntü retinanın **önüne** düşer. **Kalın kenarlı (ıraksak)** mercekle düzeltilir.",
            "Göz küresi **kısadır** ya da mercek çok incedir; görüntü retinanın **arkasına** düşer. **İnce kenarlı (yakınsak)** mercekle düzeltilir.",
            "Astigmatta sorun uzaklık değil, **kornea/merceğin küresel olmamasıdır**; ışık farklı düzlemlerde farklı kırılır ve görüntü bulanıklaşır. **Silindirik** mercekle düzeltilir.",
            "Yaşla birlikte göz merceği **esnekliğini yitirir** ve kalınlaşamaz; bu yüzden yakına uyum yapılamaz.",
            "**X'e bağlı çekinik** kalıtılır. Erkekte tek X bulunduğu için tek çekinik alel yeterlidir; kadında hastalık için **iki** çekinik alel gerekir.",
            "Göz **merceğinin saydamlığını yitirmesidir**; ışık retinaya ulaşamaz. **Cerrahi mercek değişimiyle** tedavi edilir.",
            "İki gözün **görme alanları çakışır**; bir gözün kör noktasına düşen bölge diğer gözle görülür. Ayrıca beyin eksik bölgeyi tamamlar.",
            "**Dış**: kepçe, yol, zar — sesi toplar. **Orta**: çekiç-örs-üzengi, östaki — titreşimi güçlendirir, basıncı eşitler. **İç**: salyangoz, yarım daire kanalları, tulumcuk-kesecik — işitme ve denge.",
            "Dış kulakta **ses dalgası**, kulak zarında ve kemiklerde **mekanik titreşim**, salyangozda **sıvı hareketi**, sonunda **impuls**.",
            "Kulak zarındaki titreşimi **güçlendirerek** (yaklaşık 20 kat) iç kulaktaki sıvıya aktarır. Küçük yüzeye aktarım basıncı artırır.",
            "Orta kulağı **yutağa** bağlar ve kulak zarının **iki yanındaki basıncı eşitler**. Uçakta yutkunma bu boruyu açar, tıkanma hissi geçer.",
            "İçindeki sıvının hareketi **tüylü hücreleri** uyarır; mekanik titreşim burada **impulsa** çevrilir. İşitme reseptörleri buradadır.",
            "**Yarım daire kanalları dönme (hareket) dengesini**, **tulumcuk ve kesecik başın duruş (konum) dengesini** algılar.",
            "Denge bilgisi **beyinciğe** gider. İç kulak bilgiyi **toplar**, beyincik kas uyumunu ayarlayarak dengeyi **sağlar**.",
            "**İletim tipi**: dış ve orta kulaktaki engel (kulak kiri, zar delinmesi, kemik sertleşmesi). **Sinirsel**: iç kulak ya da işitme sinirindeki hasar.",
            "Salyangozdaki **tüylü hücreler** kalıcı olarak tahrip olur. Bu hücreler yenilenmediği için kayıp **geri dönmez**.",
            "**Gaz (buhar)** hâlinde olmalıdır; burun mukusunda çözünerek reseptöre ulaşır.",
            "**Sıvı** hâlinde olmalı ya da **tükürükte çözünmelidir**; çözünmeyen madde tat vermez.",
            "Lezzet, tat ve kokunun **birlikte** oluşturduğu duyudur. Nezlede koku reseptörleri çalışmadığı için lezzet algısı kaybolur; tat reseptörleri sağlamdır.",
            "**Tatlı, tuzlu, ekşi, acı, umami**. Bu tatların hepsi dilin **her bölgesinde** algılanabilir; klasik tat haritası geçerli değildir.",
            "İkisi de **kemoreseptördür**, ikisi de **beyin kabuğunda** değerlendirilir, ikisi birlikte **lezzet** duyusunu oluşturur.",
            "**Üst deride damar yoktur**, ölü keratinli hücreler ve melanin üreten hücreler bulunur. **Alt deri** damar ve sinir bakımından zengindir; **reseptörler burada**dır.",
            "**Dokunma, basınç, sıcak, soğuk ve ağrı** reseptörleri.",
            "Parmak ucunda birim alandaki **reseptör yoğunluğu** çok daha fazladır; bu yüzden ayrıntı ayırt etme gücü yüksektir.",
            "**Terle** su, tuz ve az miktarda **üre** atılır. Deri bu yönüyle yardımcı bir boşaltım organıdır.",
            "**Ultraviyole ışınlara** karşı korur. Miktarı **kalıtsaldır** ve güneş ışığıyla **artar**.",
            "Güneşten gelen **UV ışınları**, derideki öncü molekülü D vitamininin ilk basamağına dönüştürür; sonra karaciğer ve böbrekte etkin hâle gelir.",
            "**Termoreseptör (ve ağrı reseptörü) → duyu nöronu → omurilikteki ara nöron → motor nöron → kol kası**. Kas kasılır, el çekilir.",
            "El çekme bir **omurilik refleksidir** ve beyin beklenmez. Acı ise **beyin kabuğunda** oluşur; bu yol daha uzun olduğu için sonra hissedilir.",
            "Loş ortamda **çubuk hücreleri** devreye girer; ayrıca göz bebeği büyür. Rodopsinin yeniden oluşması zaman aldığı için görme kademeli olarak gelir.",
            "**Astigmat** (her mesafede bulanıklık) ya da miyop ile hipermetropun birlikte bulunduğu durumlar; ayrıca yaşa bağlıysa presbitlik eşlik ediyordur.",
            "Hepsinde **özelleşmiş reseptör** vardır, hepsi uyarıyı **impulsa** çevirir, hepsinde duyu **beyin kabuğunda** oluşur.",
        ],
    },
}
