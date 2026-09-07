"""TYT Matematik — Problemler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: PROBLEMLER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Problemler",
    "alt_baslik": "Ham bilgi notu — sayı, yaş, işçi, hareket, yüzde ve kâr-zarar "
                  "problemleri; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Problemler",
        "kazanimlar": "Günlük hayat durumlarını denklemle modeller; sayı, yaş, "
                      "işçi, hareket, yüzde ve kâr-zarar problemlerini çözer.",
        "kapsam": "Problem çözme stratejisi, sayı problemleri, yaş problemleri, "
                  "işçi-havuz problemleri, hareket problemleri, yüzde ve "
                  "kâr-zarar, faiz, 50 alıştırma",
        "nasil": "Problem çözmenin sırrı hesapta değil **kurmakta**dır. "
                 "Her problemde önce **'bilinmeyene ne diyeceğim'** sorusunu "
                 "yanıtla; denklem kendiliğinden gelir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de problemlerden **birden çok soru** gelir; bu, "
                    "matematik netini en çok etkileyen başlıktır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Problem Çözme Stratejisi"},
        {"tur": "gorsel", "baslik": "Şema 1 — Her problemde işleyen beş adım",
         "aciklama": "Problem sorularında kaybedilen zamanın çoğu, denklemi kurmadan "
                     "hesaba başlamaktan doğar. **Önce bilinmeyeni seç, sonra "
                     "denklemi kur**; işlem en son adımdır.",
         "ciz": S.akis([
             "Oku ve anla", "Bilinmeyeni seç", "Denklemi kur", "Çöz",
             "Soruyu yanıtla"],
             ["ne veriliyor,\nne isteniyor", "genelde **en küçük**\nbüyüklük x olur",
              "verilen ilişkiyi\nmatematiğe çevir", "denklemi\nsadeleştir ve çöz",
              "x'i değil,\n**sorulanı** yaz"])},
        {"tur": "taktik", "baslik": "Her Problemde İzlenecek Beş Adım", "govde":
            "Problem tipi ne olursa olsun yol aynıdır:",
         "ogeler": [
             "**1) Soruyu iki kez oku.** İkinci okumada **ne istendiğini** "
             "işaretle. Çoğu hata, sorunun istediğini yanlış anlamaktan çıkar.",
             "**2) Bilinmeyeni seç.** Genellikle **en küçük** ya da **hakkında "
             "en az bilgi verilen** büyüklüğe x demek işlemi kısaltır.",
             "**3) Diğer büyüklükleri x cinsinden yaz.** Gerekirse tablo kur.",
             "**4) Verilen koşulu denkleme çevir** ve çöz.",
             "**5) Bulduğun x'in soruda istenen şey olup olmadığını kontrol et.** "
             "Soru 'küçük sayı' isterken 'büyük sayıyı' bulmuş olabilirsin.",
         ]},
        {"tur": "tuzak", "baslik": "x'i Bulmak Soruyu Bitirmez", "govde":
            "Problemlerde en sık kaybedilen puan şudur: denklem doğru kurulur, "
            "x doğru bulunur, ama soru **başka bir şey** ister. "
            "'İki sayının küçüğü' sorulmuşken büyüğü yazmak ya da 'kaç yıl "
            "sonra' sorulmuşken yaşı yazmak gibi. **Bulduğun sayıyı soruya "
            "geri götür.**"},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Sayı Problemleri"},
        {"tur": "maddeler", "ogeler": [
            "**Ardışık sayılar**: n, n+1, n+2. **Ardışık çift/tek**: n, n+2, n+4.",
            "**Bir sayının x fazlası**: sayı + x. **x eksiği**: sayı − x.",
            "**Bir sayının x katı**: x · sayı. **x katının y fazlası**: x·sayı + y.",
            "**İki sayının toplamı S, farkı F ise**: büyük = **(S+F)/2**, "
            "küçük = **(S−F)/2**. Bu kısayol çok zaman kazandırır.",
        ]},
        {"tur": "cozum",
         "baslik": "Sayı Problemi",
         "soru": "Bir sayının **3 katının 5 fazlası**, aynı sayının "
                 "**2 katının 11 fazlasına** eşittir. Bu sayı kaçtır?",
         "adimlar": [
             "Sayıya **x** diyelim.",
             "'3 katının 5 fazlası' → **3x + 5**.",
             "'2 katının 11 fazlası' → **2x + 11**.",
             "Denklemi kur: 3x + 5 = 2x + 11.",
             "3x − 2x = 11 − 5 → **x = 6**.",
         ],
         "sonuc": "Sayı 6'dır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Yaş Problemleri"},
        {"tur": "taktik", "baslik": "Yaş Problemlerinin Üç Kuralı", "govde":
            "Yaş problemleri tablo kurunca çok basitleşir:",
         "ogeler": [
             "**Yaş farkı hiç değişmez.** Bugün 10 yaş fark varsa 20 yıl "
             "sonra da 10 yaş fark vardır. **En güçlü ipucu budur.**",
             "**t yıl sonra** herkesin yaşına **+t**, **t yıl önce** herkesin "
             "yaşından **−t** yapılır.",
             "**n kişinin yaş toplamı t yıl sonra n·t kadar artar.** "
             "3 kişinin toplamı 5 yıl sonra **15** artar.",
             "Bugünkü yaşları **x** ve **y** ile göster, tabloyu "
             "'geçmiş — bugün — gelecek' sütunlarıyla kur.",
         ]},
        {"tur": "cozum",
         "baslik": "Yaş Problemi",
         "soru": "Bir baba ile oğlunun bugünkü yaşları toplamı **50**'dir. "
                 "**5 yıl sonra** babanın yaşı, oğlunun yaşının **2 katı** "
                 "olacaktır. Oğlunun bugünkü yaşı kaçtır?",
         "adimlar": [
             "Oğlun bugünkü yaşı **x**, babanın **50 − x** olsun.",
             "5 yıl sonra: oğul **x + 5**, baba **55 − x**.",
             "Koşulu yaz: 55 − x = 2(x + 5).",
             "55 − x = 2x + 10 → 45 = 3x → **x = 15**.",
             "Kontrol: bugün oğul 15, baba 35. 5 yıl sonra 20 ve 40 → "
             "40 = 2 × 20 doğru.",
         ],
         "sonuc": "Oğlunun bugünkü yaşı 15'tir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "İşçi ve Havuz Problemleri"},
        {"tur": "formul",
         "baslik": "Birim zamanda yapılan iş",
         "ifade": "Bir işi t saatte bitiren birinin 1 saatte yaptığı iş = 1 / t",
         "terimler": [
             ("Birlikte çalışma", "**Birim işler TOPLANIR**: 1/t_1 + 1/t_2 = 1/T"),
             ("T", "Birlikte bitirme süresi"),
             ("Boşaltan musluk", "Birim işi **çıkarılır** (eksi ile yazılır)"),
         ],
         "not": "**Süreler doğrudan toplanmaz!** 6 saatte ve 3 saatte bitirenler "
                "birlikte 9 saatte bitirmez; **2 saatte** bitirir. Toplanan şey "
                "**süre değil, birim iştir**."},
        {"tur": "cozum",
         "baslik": "Birlikte Çalışma",
         "soru": "Bir işi **A** tek başına **6 saatte**, **B** tek başına "
                 "**3 saatte** bitiriyor. İkisi birlikte çalışırsa işi kaç "
                 "saatte bitirir?",
         "adimlar": [
             "A'nın 1 saatte yaptığı iş: **1/6**. B'nin: **1/3**.",
             "Birlikte 1 saatte: 1/6 + 1/3 = 1/6 + 2/6 = **3/6 = 1/2**.",
             "Birlikte 1 saatte işin **yarısını** yapıyorlar.",
             "Tamamı için: **2 saat**.",
         ],
         "sonuc": "İkisi birlikte işi 2 saatte bitirir."},
        {"tur": "cozum",
         "baslik": "Dolduran ve Boşaltan Musluk",
         "soru": "Bir havuzu **A musluğu 4 saatte doldururken**, **B musluğu "
                 "12 saatte boşaltıyor**. İkisi birlikte açılırsa havuz kaç "
                 "saatte dolar?",
         "adimlar": [
             "A'nın birim işi: **+1/4** (dolduruyor).",
             "B'nin birim işi: **−1/12** (boşaltıyor, **eksi** yazılır).",
             "Birlikte 1 saatte: 1/4 − 1/12 = 3/12 − 1/12 = **2/12 = 1/6**.",
             "Havuzun tamamı için: **6 saat**.",
         ],
         "sonuc": "Havuz 6 saatte dolar."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Hareket Problemleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Hareket problemlerinde üç durum",
         "aciklama": "Üçünde de temel bağıntı **yol = hız × zaman**'dır; değişen "
                     "yalnızca hızların nasıl birleştiğidir. Soruyu okurken ilk "
                     "belirlenmesi gereken şey **yönlerin aynı mı zıt mı** olduğudur.",
         "ciz": S.karsilastirma(
             "Zıt yönde (karşılıklı)",
             ["Aralarındaki mesafe **azalır**",
              "Hızlar **TOPLANIR**",
              "Buluşma süresi = **mesafe / (v_1 + v_2)**",
              "İki araç birbirine doğru gider"],
             "Aynı yönde (kovalama)",
             ["Aralarındaki mesafe **azalır ama yavaş**",
              "Hızlar **ÇIKARILIR**",
              "Yetişme süresi = **mesafe / (v_1 − v_2)**",
              "Hızlı olan öndekini yakalar"],
             "Ters yönde (uzaklaşma)",
             ["Aralarındaki mesafe **artar**",
              "Hızlar **TOPLANIR**",
              "t saat sonra mesafe = **(v_1 + v_2) · t**"])},
        {"tur": "formul",
         "baslik": "Temel hareket bağıntısı",
         "ifade": "Yol = Hız × Zaman        (x = v · t)",
         "terimler": [
             ("Birim uyumu", "km ile saat, ya da m ile saniye — **karıştırma**"),
             ("Dönüşüm", "**1 m/s = 3,6 km/sa**"),
             ("Ortalama hız", "**Toplam yol / Toplam zaman** — hızların "
                              "ortalaması DEĞİLDİR"),
         ],
         "not": "**Ortalama hız, hızların aritmetik ortalaması değildir.** "
                "Gidiş 60, dönüş 40 km/sa ise ortalama hız 50 **değildir**; "
                "toplam yolu toplam zamana bölmek gerekir (48 çıkar)."},
        {"tur": "taktik", "baslik": "İki Hareketli Problemleri", "govde":
            "İki araç söz konusuysa durumu belirle:",
         "ogeler": [
             "**Karşılıklı hareket (birbirine doğru)**: hızlar **toplanır**. "
             "Buluşma süresi = **aradaki mesafe / (v_1 + v_2)**.",
             "**Aynı yönde hareket (kovalama)**: hızlar **çıkarılır**. "
             "Yetişme süresi = **aradaki mesafe / (v_1 − v_2)**.",
             "**Aynı anda zıt yönde ayrılma**: hızlar **toplanır**; "
             "t saat sonra aralarındaki mesafe = **(v_1 + v_2) · t**.",
             "**Tur problemlerinde** (aynı pistte) yeniden buluşma için "
             "**bir tur fark** atması gerekir.",
         ]},
        {"tur": "cozum",
         "baslik": "Ortalama Hız",
         "soru": "Bir araç gidişte **60 km/sa**, dönüşte **40 km/sa** hızla "
                 "aynı yolu kat ediyor. **Ortalama hızı** kaç km/sa'dir?",
         "adimlar": [
             "Yolu **240 km** varsayalım (60 ve 40'ın ortak katı; sonuç yoldan "
             "bağımsızdır).",
             "Gidiş süresi: 240 / 60 = **4 saat**.",
             "Dönüş süresi: 240 / 40 = **6 saat**.",
             "Toplam yol: 480 km. Toplam süre: 10 saat.",
             "Ortalama hız = 480 / 10.",
         ],
         "sonuc": "Ortalama hız 48 km/sa'dir (50 değil)."},
        {"tur": "cozum",
         "baslik": "Karşılıklı Hareket",
         "soru": "Aralarında **300 km** olan iki şehirden aynı anda birbirine "
                 "doğru hareket eden iki araçtan biri **70 km/sa**, diğeri "
                 "**80 km/sa** hızla gidiyor. Kaç saat sonra karşılaşırlar?",
         "adimlar": [
             "Birbirine doğru gittikleri için **hızlar toplanır**: "
             "70 + 80 = **150 km/sa**.",
             "Aradaki mesafe **300 km**.",
             "Süre = mesafe / bileşke hız = 300 / 150.",
         ],
         "sonuc": "2 saat sonra karşılaşırlar."},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Yüzde, Kâr-Zarar ve Faiz"},
        {"tur": "formul",
         "baslik": "Yüzde ve kâr-zarar",
         "ifade": "Bir sayının %x'i = sayı · (x / 100)\n"
                  "Kâr = Satış − Maliyet          Zarar = Maliyet − Satış\n"
                  "Kâr yüzdesi = (Kâr / Maliyet) × 100",
         "terimler": [
             ("Dikkat", "Kâr ve zarar yüzdesi **MALİYET üzerinden** hesaplanır"),
             ("İskonto", "**Satış fiyatı** üzerinden hesaplanır"),
         ],
         "not": "**%20 zam yapıp sonra %20 indirim yapmak eski fiyata "
                "DÖNDÜRMEZ.** 100 → 120 → 96 olur; **%4 zarar** edilir. "
                "Çünkü yüzdeler farklı tabanlar üzerinden hesaplanır."},
        {"tur": "cozum",
         "baslik": "Kâr Yüzdesi",
         "soru": "**400 TL**'ye alınan bir ürün **500 TL**'ye satılıyor. "
                 "Kâr yüzdesi kaçtır?",
         "adimlar": [
             "Kâr = Satış − Maliyet = 500 − 400 = **100 TL**.",
             "Kâr yüzdesi **maliyet üzerinden** hesaplanır.",
             "(100 / 400) × 100 = 0,25 × 100.",
         ],
         "sonuc": "Kâr yüzdesi %25'tir."},
        {"tur": "cozum",
         "baslik": "Ardışık Yüzde Değişimi",
         "soru": "Bir ürünün fiyatına önce **%20 zam**, sonra **%20 indirim** "
                 "yapılıyor. Son fiyat, ilk fiyata göre nasıl değişmiştir?",
         "adimlar": [
             "İlk fiyata **100 TL** diyelim (yüzde sorularında en kolay yol).",
             "%20 zam: 100 × 1,20 = **120 TL**.",
             "%20 indirim **120 üzerinden** yapılır: 120 × 0,80 = **96 TL**.",
             "İlk fiyat 100, son fiyat 96 → **4 TL azalma**.",
         ],
         "sonuc": "Fiyat %4 azalmıştır (eski hâline dönmez)."},
        {"tur": "taktik", "baslik": "Yüzde Sorularında 100 Kabul Et", "govde":
            "Yüzde problemlerinde sayı verilmemişse **başlangıç değerine 100 "
            "de**; işlem çok kolaylaşır ve sonuç değişmez:",
         "ogeler": [
             "**%x zam** için **× (1 + x/100)** ile çarp.",
             "**%x indirim** için **× (1 − x/100)** ile çarp.",
             "Ardışık değişimlerde **çarpanları sırayla uygula**; "
             "yüzdeleri **toplama**.",
             "Örnek: %20 zam sonra %20 indirim → 1,20 × 0,80 = **0,96** → "
             "**%4 azalma**.",
         ]},
        {"tur": "formul",
         "baslik": "Basit faiz",
         "ifade": "Faiz = (Anapara × Yüzde × Zaman) / 100",
         "terimler": [
             ("Zaman", "**Yıl** cinsinden; ay verilmişse **12'ye bölünür**"),
             ("Toplam", "**Anapara + Faiz**"),
         ],
         "not": "Zaman **ay** olarak verilmişse formülde **ay/12** kullanılır. "
                "Bunu atlamak, sonucu 12 kat büyük çıkarır."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Bulduğun x'i soruya geri götür** — istenen o mu?",
            "İki sayının toplamı S, farkı F: büyük **(S+F)/2**, küçük **(S−F)/2**.",
            "**Yaş farkı hiç değişmez.** n kişinin toplamı t yılda **n·t** artar.",
            "İşçi problemlerinde **süreler değil, birim işler toplanır**.",
            "Boşaltan musluğun birim işi **eksi** yazılır.",
            "**Ortalama hız = toplam yol / toplam zaman.**",
            "Karşılıklı hareket → hızlar **toplanır**; kovalama → **çıkarılır**.",
            "Kâr yüzdesi **maliyet** üzerinden hesaplanır.",
            "**%20 zam + %20 indirim = %4 zarar.** Yüzdeler toplanmaz, çarpılır.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 50 Alıştırma"},
        "giris":
            "Her problemde **bilinmeyeni ne seçtiğini yaz**. Denklemi kurduktan "
            "sonra çözmeden önce bir kez daha soruyu oku. Sonucu bulunca "
            "**yerine koyup kontrol et**.",
        "satir_sayisi": 3,
        "sorular": [
            "Problem çözmenin beş adımını sırasıyla yazınız.",
            "Bilinmeyen seçerken neye dikkat edilir?",
            "x'i bulduktan sonra yapılması gereken son kontrol nedir?",
            "Bir sayının 3 katının 5 fazlası, 2 katının 11 fazlasına eşitse sayı kaçtır?",
            "Bir sayının yarısının 4 eksiği 10 ise sayı kaçtır?",
            "İki sayının toplamı 40, farkı 12 ise büyük sayı kaçtır?",
            "Aynı soruda küçük sayı kaçtır?",
            "Toplamı S, farkı F olan iki sayının büyüğü nasıl bulunur?",
            "Ardışık üç sayının toplamı 48 ise ortadaki sayı kaçtır?",
            "Ardışık üç çift sayının toplamı 42 ise en küçüğü kaçtır?",
            "Yaş problemlerinde değişmeyen büyüklük nedir?",
            "5 yıl sonra 3 kişinin yaş toplamı ne kadar artar?",
            "Baba ile oğlunun yaş toplamı 50, 5 yıl sonra baba oğlunun 2 katı olacaksa oğul kaç yaşındadır?",
            "Aynı soruda babanın bugünkü yaşı kaçtır?",
            "Bir anne ile kızının yaş farkı 24'tür. 4 yıl sonra fark kaç olur?",
            "Ali bugün 12, babası 42 yaşındadır. Kaç yıl sonra babası Ali'nin 2 katı olur?",
            "Bir işi t saatte bitiren birinin 1 saatte yaptığı iş nedir?",
            "Birlikte çalışmada hangi büyüklük toplanır?",
            "Süreler doğrudan toplanabilir mi? Neden?",
            "A işi 6 saatte, B 3 saatte bitiriyorsa birlikte kaç saatte bitirirler?",
            "A işi 12 saatte, B 6 saatte bitiriyorsa birlikte kaç saatte bitirirler?",
            "A musluğu havuzu 4 saatte dolduruyor, B 12 saatte boşaltıyorsa havuz kaç saatte dolar?",
            "Boşaltan musluğun birim işi nasıl yazılır?",
            "A ve B birlikte bir işi 4 saatte bitiriyor. A tek başına 12 saatte bitiriyorsa B kaç saatte bitirir?",
            "Temel hareket bağıntısını yazınız.",
            "1 m/s kaç km/sa'dir?",
            "72 km/sa kaç m/s'dir?",
            "Ortalama hız nasıl hesaplanır?",
            "Gidiş 60, dönüş 40 km/sa ise ortalama hız kaçtır?",
            "Ortalama hız neden hızların ortalaması değildir?",
            "Karşılıklı harekette hızlara ne yapılır?",
            "Aynı yönde harekette (kovalama) hızlara ne yapılır?",
            "Aralarında 300 km olan iki araç 70 ve 80 km/sa ile birbirine doğru giderse kaç saatte karşılaşır?",
            "Aralarında 40 km olan iki araç aynı yönde 90 ve 70 km/sa ile giderse öndeki kaç saatte yakalanır?",
            "Bir araç 4 saatte 320 km gidiyorsa hızı kaçtır?",
            "Bir sayının %25'i 40 ise sayı kaçtır?",
            "80 sayısının %15'i kaçtır?",
            "Kâr ve zarar hangi büyüklük üzerinden hesaplanır?",
            "400 TL'ye alınan ürün 500 TL'ye satılırsa kâr yüzdesi kaçtır?",
            "600 TL'ye alınan ürün 480 TL'ye satılırsa zarar yüzdesi kaçtır?",
            "Bir ürüne %20 zam, sonra %20 indirim yapılırsa son durum nedir?",
            "Bu sonucun nedenini açıklayınız.",
            "%25 zam sonra %20 indirim yapılırsa fiyat nasıl değişir?",
            "Yüzde sorularında başlangıç değeri verilmemişse ne yapılır?",
            "Bir ürün %20 kârla 480 TL'ye satılıyorsa maliyeti kaçtır?",
            "Basit faiz formülünü yazınız.",
            "10 000 TL, yıllık %12 faizle 6 ay yatırılırsa faiz kaç TL olur?",
            "Aynı soruda toplam kaç TL olur?",
            "Faiz hesabında zaman ay verilmişse ne yapılır?",
            "Bir ürünün fiyatı önce %10 artmış, sonra %10 azalmışsa net değişim nedir?",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**1)** Soruyu iki kez oku, isteneni işaretle. **2)** Bilinmeyeni seç. **3)** Diğerlerini x cinsinden yaz. **4)** Denklemi kur ve çöz. **5)** Sonucu soruya geri götür.",
            "Genellikle **en küçük** ya da **hakkında en az bilgi verilen** büyüklüğe x denir; böylece diğerleri kolayca yazılır.",
            "Bulunan değerin **soruda istenen büyüklük** olup olmadığının kontrol edilmesi.",
            "3x + 5 = 2x + 11 → **x = 6**.",
            "x/2 − 4 = 10 → x/2 = 14 → **x = 28**.",
            "(40 + 12)/2 = **26**.",
            "(40 − 12)/2 = **14**.",
            "**(S + F) / 2.**",
            "3x = 48 → **x = 16**.",
            "n + (n+2) + (n+4) = 42 → 3n + 6 = 42 → **n = 12**.",
            "**Yaş farkı** (hiç değişmez).",
            "3 × 5 = **15 yıl** artar.",
            "x + 5 ve 55 − x → 55 − x = 2(x+5) → **x = 15**.",
            "50 − 15 = **35**.",
            "**24** (fark hiç değişmez).",
            "42 + t = 2(12 + t) → 42 + t = 24 + 2t → **t = 18 yıl**.",
            "**1 / t.**",
            "**Birim işler** (1 saatte yapılan iş miktarları) toplanır.",
            "**Toplanamaz.** Toplanan şey süre değil, **birim zamanda yapılan iştir**.",
            "1/6 + 1/3 = 1/2 → **2 saat**.",
            "1/12 + 1/6 = 3/12 = 1/4 → **4 saat**.",
            "1/4 − 1/12 = 1/6 → **6 saat**.",
            "**Eksi işaretle** yazılır (birim iş çıkarılır).",
            "1/12 + 1/B = 1/4 → 1/B = 1/4 − 1/12 = 1/6 → **6 saat**.",
            "**Yol = Hız × Zaman** (x = v · t).",
            "**3,6 km/sa.**",
            "72 / 3,6 = **20 m/s**.",
            "**Toplam yol / toplam zaman.**",
            "Yol 240 varsay: süreler 4 ve 6 saat → 480/10 = **48 km/sa**.",
            "Aynı yol farklı hızlarda kat edildiğinde **geçen süreler farklıdır**; yavaş hızda daha uzun süre geçtiği için ortalama, düşük hıza **daha yakın** çıkar.",
            "**Toplanır.**",
            "**Çıkarılır.**",
            "300 / (70 + 80) = 300/150 = **2 saat**.",
            "40 / (90 − 70) = 40/20 = **2 saat**.",
            "320 / 4 = **80 km/sa**.",
            "x × 0,25 = 40 → **x = 160**.",
            "80 × 0,15 = **12**.",
            "**Maliyet** üzerinden hesaplanır.",
            "Kâr 100 → (100/400) × 100 = **%25**.",
            "Zarar 120 → (120/600) × 100 = **%20**.",
            "100 → 120 → 96 → **%4 azalmıştır**.",
            "İndirim, **zamlı fiyat (120)** üzerinden yapılır; zam ise ilk fiyat üzerinden yapılmıştı. **Tabanlar farklı** olduğu için birbirini götürmez.",
            "1,25 × 0,80 = 1,00 → **fiyat değişmez**.",
            "Başlangıç değerine **100 denir**; sonuç oransal olduğu için değişmez.",
            "M × 1,20 = 480 → **M = 400 TL**.",
            "**Faiz = (Anapara × Yüzde × Zaman) / 100**, zaman yıl cinsinden.",
            "(10 000 × 12 × 0,5) / 100 = **600 TL**.",
            "10 000 + 600 = **10 600 TL**.",
            "**12'ye bölünerek yıla çevrilir** (ay / 12).",
            "1,10 × 0,90 = 0,99 → **%1 azalmıştır**.",
        ],
    },
}
