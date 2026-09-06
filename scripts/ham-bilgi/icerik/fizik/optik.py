"""TYT Fizik — Optik (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: OPTİK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Optik",
    "alt_baslik": "Ham bilgi notu — ışığın yayılması, gölge, aynalar, kırılma ve "
                  "mercekler; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Optik",
        "kazanimlar": "9.12.1.1 — Işığın yayılmasını ve gölgeyi açıklar. "
                      "9.12.1.2 — Düzlem ve küresel aynalarda görüntüyü yorumlar. "
                      "9.12.1.3 — Kırılmayı ve mercekleri açıklar.",
        "kapsam": "Işık kaynakları, ışığın yayılması, gölge ve tutulmalar, "
                  "yansıma, düzlem-çukur-tümsek ayna, kırılma, tam yansıma, "
                  "ince ve kalın kenarlı mercek, göz kusurları, 45 analiz sorusu",
        "nasil": "Optik **çizim** konusudur. Her ayna ve mercek için **özel "
                 "ışınları** kâğıda çizerek çalış. Görüntü özelliklerini tablo "
                 "hâlinde ezberlemek yerine çizerek çıkar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de optikten gelen soru genellikle **ayna ya da mercekte "
                    "görüntü özelliği** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Işığın Yayılması ve Gölge"},
        {"tur": "maddeler", "ogeler": [
            "**Işık kaynakları**: **Doğal** (Güneş, yıldızlar, ateş böceği) ve "
            "**yapay** (ampul, mum, lazer).",
            "**Işık homojen bir ortamda doğrusal olarak yayılır** ve **boşlukta "
            "da yayılır** (elektromanyetik dalgadır).",
            "**Işık hızı boşlukta 300 000 km/s**'dir (3 × 10 üzeri 8 m/s). "
            "Bu, doğadaki **en büyük hızdır**.",
            "**Işık yılı**: Işığın **bir yılda aldığı yoldur**. Bir **uzunluk** "
            "birimidir, zaman birimi **değildir**.",
        ]},
        {"tur": "tuzak", "baslik": "Işık Yılı Bir Zaman Birimi Değildir", "govde":
            "'Işık yılı' adına rağmen bir **uzaklık (uzunluk)** birimidir; "
            "ışığın **bir yılda aldığı yolu** ifade eder. 'Yıldıza 4 ışık yılı "
            "sürede gidilir' ifadesi **yanlıştır**; doğrusu 'yıldız 4 ışık yılı "
            "**uzaklıktadır**'dır."},
        {"tur": "tablo",
         "basliklar": ["Madde Türü", "Işığı Nasıl Geçirir?", "Örnek"],
         "oranlar": [0.26, 0.38, 0.36],
         "satirlar": [
             ["**Saydam**", "Işığın **tamamına yakınını** geçirir; arkası net görünür",
              "Cam, saf su, hava"],
             ["**Yarı saydam**", "Işığın **bir kısmını** geçirir; arkası bulanık görünür",
              "Buzlu cam, yağlı kâğıt, tül"],
             ["**Opak (saydam olmayan)**", "Işığı **geçirmez**; **tam gölge** oluşturur",
              "Tahta, metal, karton"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Gölge**: Işığın opak bir cisim tarafından engellenmesiyle oluşan "
            "karanlık bölgedir.",
            "**Nokta kaynakta** yalnızca **tam gölge** oluşur. "
            "**Yaygın (geniş) kaynakta** hem **tam gölge** hem de çevresinde "
            "**yarı gölge** oluşur.",
            "**Cisim kaynağa yaklaştırılırsa gölge büyür**; perdeye yaklaştırılırsa "
            "gölge **küçülür**.",
            "**Güneş tutulması**: Sıralama **Güneş – Ay – Dünya**. Ay, Güneş'i "
            "gölgeler. **Ay tutulması**: Sıralama **Güneş – Dünya – Ay**. Dünya'nın "
            "gölgesi Ay'ın üzerine düşer.",
        ]},
        {"tur": "cikmis", "baslik": "Tutulma sıralaması", "govde":
            "Sıralamayı karıştırmamak için şunu düşün: **tutulan cisim en sondadır "
            "değil, ORTADAKİ gölgeleyendir**. Güneş tutulmasında ortada **Ay** "
            "vardır (Ay Güneş'i kapatır). Ay tutulmasında ortada **Dünya** vardır "
            "(Dünya'nın gölgesi Ay'a düşer)."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yansıma ve Aynalar"},
        {"tur": "maddeler", "ogeler": [
            "**Yansıma yasası**: **Gelme açısı = yansıma açısıdır**; ikisi de "
            "**normale (yüzeye dik doğruya)** göre ölçülür.",
            "**Düzgün yansıma**: Pürüzsüz yüzeyde (ayna, durgun su) — **net "
            "görüntü** oluşur.",
            "**Dağınık (difüz) yansıma**: Pürüzlü yüzeyde (duvar, kâğıt) — "
            "görüntü oluşmaz ama cismi **her yönden görebiliriz**. "
            "**Yansıma yasası burada da geçerlidir**; yalnızca yüzey pürüzlü "
            "olduğu için ışınlar farklı yönlere gider.",
        ]},
        {"tur": "dikkat", "baslik": "Dağınık Yansımada da Yasa Geçerlidir", "govde":
            "'Dağınık yansımada yansıma yasası geçerli değildir' ifadesi "
            "**yanlıştır**. Yasa her noktada geçerlidir; ama yüzey pürüzlü olduğu "
            "için her noktanın **normali farklı yöndedir** ve yansıyan ışınlar "
            "dağılır. Cisimleri görebilmemizin nedeni budur."},
        {"tur": "altbolum", "baslik": "A. Düzlem Ayna"},
        {"tur": "maddeler", "ogeler": [
            "Görüntü **sanal (zahiri)**, **düz**, cisimle **aynı boyda**tır.",
            "Görüntü, aynanın **arkasında** ve cismin aynaya olan uzaklığı "
            "**kadar** uzaktadır.",
            "**Sağ-sol ters** görünür (ayna simetrisi). Bu yüzden ambulans "
            "yazıları ters yazılır.",
            "**Cisim aynaya v hızıyla yaklaşırsa görüntü de v hızıyla yaklaşır**; "
            "**cisim ile görüntü arasındaki yaklaşma hızı 2v** olur.",
            "**Boy aynası**: Bir insanın tüm boyunu görebilmesi için aynanın boyu, "
            "**kendi boyunun yarısı** kadar olmalıdır ve bu **aynanın uzaklığından "
            "bağımsızdır**.",
        ]},
        {"tur": "altbolum", "baslik": "B. Küresel Aynalar"},
        {"tur": "gorsel", "baslik": "Şema 1 — Çukur ve tümsek ayna",
         "aciklama": "**Çukur ayna** ışığı **toplar**, **tümsek ayna** **dağıtır**. "
                     "Tümsek aynada görüntü **her zaman** sanal, düz ve küçüktür — "
                     "bu yüzden soru kolaydır.",
         "ciz": S.karsilastirma(
             "Çukur (İç Bükey) Ayna",
             ["Işığı **toplar**", "Odak **önde**, gerçek",
              "Görüntü **cismin yerine göre değişir**",
              "Odakta cisim → görüntü **oluşmaz**",
              "Odak içinde → **sanal, düz, büyük**",
              "Kullanım: **diş hekimi aynası**, far, teleskop"],
             "Tümsek (Dış Bükey) Ayna",
             ["Işığı **dağıtır**", "Odak **arkada**, sanal",
              "Görüntü **her zaman aynı**",
              "**Her zaman sanal, düz ve küçük**",
              "Geniş görüş alanı sağlar",
              "Kullanım: **araç yan aynası**, market güvenlik aynası"],
             "Ortak",
             ["Yansıma yasasına uyar", "Odak ve merkez noktaları vardır",
              "Görüntü çizimle bulunur"])},
        {"tur": "maddeler", "ogeler": [
            "**Çukur aynada görüntü**: Cisim **merkezin dışındaysa** → gerçek, "
            "ters, küçük. **Merkezdeyse** → gerçek, ters, aynı boyda. "
            "**Merkez ile odak arasındaysa** → gerçek, ters, büyük. "
            "**Odaktaysa** → görüntü **oluşmaz** (ışınlar paralel gider). "
            "**Odak ile ayna arasındaysa** → **sanal, düz, büyük**.",
            "**Gerçek görüntü perdeye düşer**, **sanal görüntü düşmez**.",
            "**Odak uzaklığı, merkez uzaklığının yarısıdır**: f = r / 2.",
        ]},
        {"tur": "taktik", "baslik": "Görüntü Özelliğini Hızla Bulma", "govde":
            "Ayna ve mercek sorularında ezber yerine şu üç kuralı kullan:",
         "ogeler": [
             "**Tümsek ayna ve ince kenarlı olmayan (kalın kenarlı) mercek**: "
             "görüntü **her zaman sanal, düz, küçük**. Cismin yeri fark etmez.",
             "**Sanal görüntü her zaman DÜZDÜR**; **gerçek görüntü her zaman "
             "TERSTİR**. İkisi birlikte anılır.",
             "**Gerçek görüntü perdeye düşer**, sanal görüntü düşmez.",
             "Çukur ayna ve ince kenarlı mercekte cismin **odağa göre yeri** "
             "belirleyicidir.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kırılma"},
        {"tur": "maddeler", "ogeler": [
            "**Kırılma**: Işığın **bir saydam ortamdan diğerine geçerken "
            "doğrultu değiştirmesidir**. Nedeni **hızının değişmesidir**.",
            "**Az yoğun ortamdan çok yoğun ortama** geçerken ışın **normale "
            "YAKLAŞIR** (hız azalır).",
            "**Çok yoğun ortamdan az yoğun ortama** geçerken ışın **normalden "
            "UZAKLAŞIR** (hız artar).",
            "**Işın yüzeye dik (normal doğrultusunda) gelirse kırılmaz**, "
            "doğrultusunu koruyarak devam eder.",
            "**Kırılmada frekans değişmez**; **hız ve dalga boyu değişir**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Kırılmanın yönü",
         "aciklama": "Kural tek cümlede: **yoğun ortama girerken normale yaklaş, "
                     "çıkarken uzaklaş**. Hız ile normale yakınlık **ters** gider.",
         "ciz": S.akis(
             ["Az yoğun ortam", "Yüzey", "Çok yoğun ortam"],
             ["hız **büyük**", "**kırılma**\nolur", "hız **küçük**\nnormale **yaklaşır**"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Tam yansıma**: Işık **çok yoğun ortamdan az yoğun ortama** geçerken, "
            "gelme açısı **sınır açısını aşarsa** ışık ikinci ortama geçemez ve "
            "**tamamen geri yansır**.",
            "**Tam yansımanın iki şartı**: ışık **yoğun ortamdan az yoğun ortama** "
            "gitmeli ve gelme açısı **sınır açıdan büyük** olmalıdır.",
            "**Kullanım alanları**: **fiber optik kablolar** (internet, telefon), "
            "endoskop, elmasın parlaklığı, serap (ılgım) olayı.",
            "**Serap**: Sıcak asfaltta suya benzeyen görüntü; sıcak havanın "
            "yoğunluğunun az olması sonucu ışığın **tam yansımasıdır**.",
        ]},
        {"tur": "tuzak", "baslik": "Tam Yansımanın Yönü Tek Yönlüdür", "govde":
            "Tam yansıma **yalnızca çok yoğun ortamdan az yoğun ortama** geçişte "
            "olur (sudan havaya, camdan havaya). Tersi yönde **asla** gerçekleşmez. "
            "Soruda 'havadan cama geçerken tam yansıma olur' deniyorsa bu şık "
            "**kesinlikle yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Mercekler"},
        {"tur": "gorsel", "baslik": "Şema 3 — İki mercek türü",
         "aciklama": "**İnce kenarlı mercek yakınsaktır** (toplar), **kalın "
                     "kenarlı mercek ıraksaktır** (dağıtır). Kalın kenarlıda "
                     "görüntü **her zaman aynıdır**.",
         "ciz": S.karsilastirma(
             "İnce Kenarlı (Yakınsak)",
             ["Işığı **toplar**", "Odak **gerçek**",
              "Görüntü cismin yerine göre **değişir**",
              "Odak içinde → **sanal, düz, büyük** (büyüteç)",
              "Kullanım: **büyüteç, fotoğraf makinesi**",
              "**Miyop değil, hipermetrop** tedavisinde"],
             "Kalın Kenarlı (Iraksak)",
             ["Işığı **dağıtır**", "Odak **sanal**",
              "Görüntü **her zaman aynı**",
              "**Her zaman sanal, düz, küçük**",
              "Kullanım: **kapı gözetleme deliği**",
              "**Miyop** tedavisinde"],
             "Ortak",
             ["Kırılma ilkesiyle çalışır", "Odak uzaklığı vardır",
              "Görüntü çizimle bulunur"])},
        {"tur": "maddeler", "ogeler": [
            "**İnce kenarlı mercekte görüntü**, çukur aynadakiyle **aynı mantıkla** "
            "bulunur: cisim odak içindeyse **sanal, düz, büyük** (büyüteç), "
            "odak dışındaysa **gerçek ve ters**.",
            "**Merceğin odak uzaklığı küçüldükçe kırma gücü artar.**",
            "**Göz kusurları**: **Miyop** (uzağı görememe — görüntü retinanın "
            "**önünde** oluşur) → **kalın kenarlı (ıraksak)** mercekle düzeltilir. "
            "**Hipermetrop** (yakını görememe — görüntü retinanın **arkasında** "
            "oluşur) → **ince kenarlı (yakınsak)** mercekle düzeltilir.",
            "**Astigmat**: Kornea eğriliğinin düzensiz olmasıdır; **silindirik "
            "mercekle** düzeltilir. **Presbiyopi**: Yaşa bağlı yakını görememedir.",
        ]},
        {"tur": "ezber", "baslik": "Göz Kusuru Eşleştirmesi", "ogeler": [
            "**Miyop** → uzağı göremez → görüntü retinanın **önünde** → "
            "**kalın kenarlı** mercek",
            "**Hipermetrop** → yakını göremez → görüntü retinanın **arkasında** → "
            "**ince kenarlı** mercek",
            "**Astigmat** → kornea düzensiz → **silindirik** mercek",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Işık yılı bir uzunluk birimidir.**",
            "**Gelme açısı = yansıma açısı**; dağınık yansımada da geçerlidir.",
            "Düzlem aynada görüntü **sanal, düz, aynı boyda**; boy aynası "
            "**boyun yarısı** kadar olmalıdır.",
            "**Tümsek ayna ve kalın kenarlı mercekte görüntü her zaman sanal, "
            "düz, küçüktür.**",
            "**Sanal görüntü düz**, **gerçek görüntü terstir**; gerçek görüntü "
            "**perdeye düşer**.",
            "Yoğun ortama girerken **normale yaklaşır**, çıkarken **uzaklaşır**.",
            "**Tam yansıma yalnızca yoğundan aza** geçişte olur.",
            "**Miyop → kalın kenarlı**, **hipermetrop → ince kenarlı** mercek.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Optik sorularında **mutlaka çizim yap**: ayna/mercek, eksen, odak ve "
            "merkez noktalarını koy, sonra özel ışınları çiz. Görüntü özelliklerini "
            "çizimden oku, ezberden değil.",
        "satir_sayisi": 2,
        "sorular": [
            "Doğal ve yapay ışık kaynaklarına ikişer örnek veriniz.",
            "Işık homojen ortamda nasıl yayılır? Boşlukta yayılır mı?",
            "Işığın boşluktaki hızı nedir?",
            "Işık yılı neyin birimidir? Yaygın hatayı düzeltiniz.",
            "Saydam, yarı saydam ve opak maddeleri birer örnekle ayırınız.",
            "Gölge nasıl oluşur?",
            "Nokta kaynak ile yaygın kaynağın oluşturduğu gölgeler nasıl farklıdır?",
            "Cisim ışık kaynağına yaklaştırılırsa gölge nasıl değişir?",
            "Güneş tutulmasında cisimlerin sıralaması nasıldır?",
            "Ay tutulmasında cisimlerin sıralaması nasıldır?",
            "Yansıma yasasını yazınız. Açılar neye göre ölçülür?",
            "Düzgün ve dağınık yansımayı karşılaştırınız.",
            "Dağınık yansımada yansıma yasası geçerli midir? Açıklayınız.",
            "Cisimleri her yönden görebilmemizi hangi yansıma türü sağlar?",
            "Düzlem aynada görüntünün üç özelliğini yazınız.",
            "Düzlem aynada görüntü nerede oluşur?",
            "Ambulans yazılarının ters yazılmasının nedeni nedir?",
            "Cisim düzlem aynaya v hızıyla yaklaşırsa cisim-görüntü yaklaşma hızı kaçtır?",
            "Bir insanın tüm boyunu görebilmesi için ayna boyu ne kadar olmalıdır?",
            "Boy aynasının uzunluğu, kişinin aynaya uzaklığına bağlı mıdır?",
            "Çukur ve tümsek aynayı ışığa etkisi bakımından karşılaştırınız.",
            "Tümsek aynada görüntünün özellikleri nelerdir?",
            "Tümsek aynanın iki kullanım alanını yazınız.",
            "Çukur aynada cisim merkezin dışındaysa görüntü nasıldır?",
            "Çukur aynada cisim odaktaysa ne olur?",
            "Çukur aynada cisim odak ile ayna arasındaysa görüntü nasıldır?",
            "Çukur aynanın iki kullanım alanını yazınız.",
            "Gerçek ve sanal görüntüyü perdeye düşme bakımından ayırınız.",
            "Sanal görüntü düz mü ters midir? Gerçek görüntü için de yazınız.",
            "Odak uzaklığı ile merkez uzaklığı arasındaki bağıntıyı yazınız.",
            "Kırılma nedir ve nedeni nedir?",
            "Az yoğundan çok yoğun ortama geçerken ışın nasıl kırılır?",
            "Çok yoğundan az yoğun ortama geçerken ışın nasıl kırılır?",
            "Işın yüzeye dik gelirse ne olur?",
            "Kırılmada hangi büyüklükler değişir, hangisi değişmez?",
            "Tam yansımayı tanımlayınız.",
            "Tam yansımanın iki şartını yazınız.",
            "Tam yansımanın üç kullanım alanı yazınız.",
            "Serap (ılgım) olayını açıklayınız.",
            "'Havadan cama geçerken tam yansıma olur' ifadesini değerlendiriniz.",
            "İnce ve kalın kenarlı merceği ışığa etkisi bakımından karşılaştırınız.",
            "Kalın kenarlı mercekte görüntünün özellikleri nelerdir?",
            "Büyüteç hangi mercektir ve cisim nereye konur?",
            "Miyop nedir? Hangi mercekle düzeltilir?",
            "Hipermetrop nedir? Hangi mercekle düzeltilir?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Doğal**: Güneş, yıldızlar (ateş böceği de yazılabilir). **Yapay**: ampul, mum (lazer de yazılabilir).",
            "**Doğrusal olarak** yayılır. **Boşlukta da yayılır**; elektromanyetik dalgadır.",
            "**300 000 km/s** (3 × 10 üzeri 8 m/s).",
            "**Uzunluk (uzaklık)** birimidir; ışığın **bir yılda aldığı yoldur**. Zaman birimi **değildir**.",
            "**Saydam**: cam (ışığın tamamına yakınını geçirir). **Yarı saydam**: buzlu cam (bir kısmını geçirir). **Opak**: tahta (geçirmez).",
            "Işığın **opak bir cisim tarafından engellenmesiyle** oluşan karanlık bölgedir.",
            "**Nokta kaynakta yalnızca tam gölge** oluşur. **Yaygın kaynakta** hem **tam gölge** hem çevresinde **yarı gölge** oluşur.",
            "**Gölge büyür.**",
            "**Güneş – Ay – Dünya.** Ay ortadadır ve Güneş'i kapatır.",
            "**Güneş – Dünya – Ay.** Dünya ortadadır ve gölgesi Ay'a düşer.",
            "**Gelme açısı = yansıma açısıdır.** Açılar **normale (yüzeye dik doğruya)** göre ölçülür.",
            "**Düzgün yansıma** pürüzsüz yüzeyde olur ve **net görüntü** oluşturur. **Dağınık yansıma** pürüzlü yüzeyde olur, görüntü oluşmaz.",
            "**Geçerlidir.** Her noktada gelme açısı yansıma açısına eşittir; ancak yüzey pürüzlü olduğu için her noktanın **normali farklı yöndedir** ve ışınlar dağılır.",
            "**Dağınık (difüz) yansıma.**",
            "**Sanal (zahiri)**, **düz**, cisimle **aynı boyda**.",
            "Aynanın **arkasında** ve cismin aynaya olan uzaklığı **kadar** uzakta.",
            "Düzlem aynada görüntü **sağ-sol ters** oluşur; ters yazılan yazı **dikiz aynasında düz** okunur.",
            "**2v.** Görüntü de v hızıyla aynaya yaklaşır; aralarındaki mesafe 2v hızla azalır.",
            "**Boyunun yarısı** kadar.",
            "**Bağlı değildir.** Kişi aynaya yaklaşsa da uzaklaşsa da gereken ayna boyu **boyunun yarısı** kadardır.",
            "**Çukur ayna ışığı toplar** (yakınsak), **tümsek ayna dağıtır** (ıraksak).",
            "**Her zaman sanal, düz ve küçüktür**; cismin yerinden bağımsızdır.",
            "**Araç yan aynası** ve **market güvenlik aynası** (geniş görüş alanı sağlar).",
            "**Gerçek, ters ve küçük.**",
            "**Görüntü oluşmaz**; yansıyan ışınlar birbirine **paralel** gider.",
            "**Sanal, düz ve büyük** (diş hekimi aynası, makyaj aynası mantığı).",
            "**Diş hekimi aynası** ve **araç farı** (teleskop da yazılabilir).",
            "**Gerçek görüntü perdeye düşer**, **sanal görüntü düşmez**.",
            "**Sanal görüntü düzdür**, **gerçek görüntü terstir**.",
            "**f = r / 2** (odak uzaklığı, merkez uzaklığının yarısıdır).",
            "Işığın **bir saydam ortamdan diğerine geçerken doğrultu değiştirmesidir**. Nedeni **hızının değişmesidir**.",
            "**Normale yaklaşır** (hızı azalır).",
            "**Normalden uzaklaşır** (hızı artar).",
            "**Kırılmaz**; doğrultusunu koruyarak devam eder.",
            "**Hız ve dalga boyu değişir**; **frekans değişmez**.",
            "Işığın **çok yoğun ortamdan az yoğun ortama** geçerken, gelme açısı **sınır açıyı aştığında** ikinci ortama geçemeyip **tamamen geri yansımasıdır**.",
            "Işık **yoğun ortamdan az yoğun ortama** gitmeli ve gelme açısı **sınır açıdan büyük** olmalıdır.",
            "**Fiber optik kablolar**, **endoskop**, **elmasın parlaklığı** (serap da yazılabilir).",
            "Sıcak asfaltın üstündeki hava **ısınıp yoğunluğunu kaybeder**. Işık yoğun havadan az yoğun havaya geçerken **tam yansımaya** uğrar ve gökyüzünün görüntüsü su gibi algılanır.",
            "**Yanlıştır.** Hava az yoğun, cam çok yoğundur; tam yansıma **yalnızca yoğundan aza** geçişte olur.",
            "**İnce kenarlı mercek ışığı toplar** (yakınsak), **kalın kenarlı mercek dağıtır** (ıraksak).",
            "**Her zaman sanal, düz ve küçüktür.**",
            "**İnce kenarlı mercektir.** Cisim **odak ile mercek arasına** konur; görüntü sanal, düz ve büyük olur.",
            "**Uzağı görememedir**; görüntü retinanın **önünde** oluşur. **Kalın kenarlı (ıraksak)** mercekle düzeltilir.",
            "**Yakını görememedir**; görüntü retinanın **arkasında** oluşur. **İnce kenarlı (yakınsak)** mercekle düzeltilir.",
        ],
    },
}
