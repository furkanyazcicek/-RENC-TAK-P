"""TYT Matematik — Permütasyon, Kombinasyon ve Olasılık (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: PERMÜTASYON - KOMBİNASYON - OLASILIK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Permütasyon - Kombinasyon - Olasılık",
    "alt_baslik": "Ham bilgi notu — sayma yolları, faktöriyel, sıralama ve seçme, "
                  "olasılık hesabı; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Permütasyon - Kombinasyon - Olasılık",
        "kazanimlar": "Sayma yollarını uygular; permütasyon ve kombinasyonu "
                      "ayırt eder; olasılık hesaplar.",
        "kapsam": "Toplama ve çarpma yolu, faktöriyel, permütasyon, tekrarlı "
                  "permütasyon, dairesel permütasyon, kombinasyon, olasılık "
                  "tanımı, bağımlı-bağımsız olaylar, 45 alıştırma",
        "nasil": "Bu konunun tek kritik sorusu: **sıra önemli mi değil mi?** "
                 "Önemliyse permütasyon, değilse kombinasyon. Bu ayrımı yapan "
                 "öğrenci soruların çoğunu çözer.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **bir sayma "
                    "problemidir**; formül ezberi tek başına yetmez.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Sayma Yolları"},
        {"tur": "formul",
         "baslik": "İki temel sayma ilkesi",
         "ifade": "TOPLAMA yolu:  'ya A ya B'  →  m + n\n"
                  "ÇARPMA yolu:   'önce A sonra B'  →  m × n",
         "terimler": [
             ("Toplama", "Seçenekler **birbirinin alternatifi** ise (VEYA)"),
             ("Çarpma", "Seçimler **arka arkaya yapılıyorsa** (VE)"),
         ],
         "not": "Soruda **'ya da / veya'** geçiyorsa **topla**; "
                "**'ve / sonra / hem'** geçiyorsa **çarp**. Bu tek ayrım, "
                "sayma sorularının yarısını çözer."},
        {"tur": "cozum",
         "baslik": "Çarpma Yolu",
         "soru": "Bir kişi **4 gömlek** ve **3 pantolon** arasından birer tane "
                 "seçerek kaç farklı biçimde giyinebilir?",
         "adimlar": [
             "Önce gömlek **sonra** pantolon seçiliyor → **çarpma yolu**.",
             "Gömlek için **4** seçenek, pantolon için **3** seçenek.",
             "4 × 3.",
         ],
         "sonuc": "12 farklı biçimde giyinebilir."},
        {"tur": "formul",
         "baslik": "Faktöriyel",
         "ifade": "n! = n · (n−1) · (n−2) · ... · 2 · 1",
         "terimler": [
             ("0!", "**0! = 1**'dir (tanım gereği)"),
             ("1!", "**1! = 1**"),
             ("Sadeleştirme", "n! = n · (n−1)! — büyük faktöriyelleri "
                              "**küçük olana kadar açmak** yeter"),
         ],
         "not": "**Negatif ve kesirli sayıların faktöriyeli tanımsızdır.** "
                "Ayrıca faktöriyel çok hızlı büyür: 5! = 120, 10! = 3 628 800."},
        {"tur": "cozum",
         "baslik": "Faktöriyel Sadeleştirme",
         "soru": "**8! / 6!** işleminin sonucu kaçtır?",
         "adimlar": [
             "Büyük faktöriyeli, küçüğüne inene kadar aç: 8! = 8 × 7 × **6!**.",
             "İfade: (8 × 7 × 6!) / 6!.",
             "6!'ler sadeleşir → 8 × 7.",
         ],
         "sonuc": "Sonuç 56'dır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Permütasyon (Sıralama)"},
        {"tur": "formul",
         "baslik": "Permütasyon formülleri",
         "ifade": "P(n, r) = n! / (n − r)!\n"
                  "n elemanın tamamının sıralanışı = n!\n"
                  "Tekrarlı permütasyon = n! / (a! · b! · ...)",
         "terimler": [
             ("P(n, r)", "n elemandan **r tanesini SIRALI** seçme"),
             ("Tekrarlı", "a, b... **aynı olan elemanların sayıları**"),
             ("Dairesel", "n elemanın dairesel sıralanışı = **(n−1)!**"),
         ],
         "not": "**Permütasyonda SIRA ÖNEMLİDİR.** 'AB' ile 'BA' farklı "
                "sayılır. Soruda **sıralama, dizilim, başkan-yardımcı seçimi, "
                "harflerle kelime yazma** geçiyorsa permütasyondur."},
        {"tur": "cozum",
         "baslik": "Tekrarlı Permütasyon",
         "soru": "**KİTAP** kelimesinin harfleriyle kaç farklı **beş harfli** "
                 "dizilim yazılabilir? Peki **ANKARA** kelimesi için kaç tanedir?",
         "adimlar": [
             "**KİTAP**: 5 harf, hepsi **farklı** → 5! = **120**.",
             "**ANKARA**: 6 harf ama **A harfi 3 kez** tekrarlıyor.",
             "Tekrarlı permütasyon: 6! / 3!.",
             "720 / 6 = **120**.",
         ],
         "sonuc": "KİTAP için 120, ANKARA için 120 dizilim vardır."},
        {"tur": "taktik", "baslik": "Koşullu Sıralama Soruları", "govde":
            "Sıralama sorularında koşul varsa şu yolları kullan:",
         "ogeler": [
             "**Belirli iki eleman yan yana olacaksa**: o ikisini **tek bir "
             "blok** say, sonra blok içinde **2!** ile çarp.",
             "**Belirli bir eleman başta/sonda olacaksa**: önce **onu yerleştir**, "
             "kalanları serbestçe sırala.",
             "**Belirli iki eleman yan yana OLMAYACAKSA**: "
             "**toplam − (yan yana olanlar)** hesapla.",
             "**Sesli/sessiz harf koşulu varsa** önce koşullu yerleri doldur.",
         ]},
        {"tur": "cozum",
         "baslik": "Koşullu Sıralama",
         "soru": "**5 kişi** yan yana sıralanacaktır. **Ali ile Veli yan yana** "
                 "olacak biçimde kaç farklı sıralama yapılabilir?",
         "adimlar": [
             "Ali ve Veli'yi **tek bir blok** kabul et → artık **4 nesne** var "
             "(blok + diğer 3 kişi).",
             "4 nesnenin sıralanışı: 4! = **24**.",
             "Blok içinde Ali-Veli ya da Veli-Ali olabilir → **2!** = **2**.",
             "Toplam: 24 × 2.",
         ],
         "sonuc": "48 farklı sıralama yapılabilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kombinasyon (Seçme)"},
        {"tur": "formul",
         "baslik": "Kombinasyon formülü",
         "ifade": "C(n, r) = n! / ( r! · (n − r)! )",
         "terimler": [
             ("C(n, r)", "n elemandan **r tanesini SIRASIZ** seçme"),
             ("Özellik", "**C(n, r) = C(n, n−r)** — seçmek ile seçmemek aynıdır"),
             ("Özel değerler", "**C(n, 0) = 1**, **C(n, 1) = n**, **C(n, n) = 1**"),
         ],
         "not": "**Kombinasyonda SIRA ÖNEMSİZDİR.** 'AB' ile 'BA' **aynı** "
                "seçimdir. Soruda **komisyon, takım, grup kurma, el seçme, "
                "doğru parçası** geçiyorsa kombinasyondur."},
        {"tur": "gorsel", "baslik": "Şema 1 — Permütasyon mu kombinasyon mu?",
         "aciklama": "**Tek soru**: seçtiklerimin **sırası bir şey değiştiriyor "
                     "mu?** Değiştiriyorsa permütasyon, değiştirmiyorsa "
                     "kombinasyondur.",
         "ciz": S.karsilastirma(
             "PERMÜTASYON (sıra önemli)",
             ["Başkan ve yardımcı seçme", "Harflerle kelime yazma",
              "Yarışta ilk üç sıralama", "Kişileri sıraya dizme",
              "Şifre oluşturma", "**P(n,r) = n! / (n−r)!**"],
             "KOMBİNASYON (sıra önemsiz)",
             ["Komisyon / takım kurma", "Gruptan kişi seçme",
              "Meyve tabağı hazırlama", "İki noktadan doğru çizme",
              "El (kart) seçme", "**C(n,r) = n! / (r!·(n−r)!)**"],
             "İlişki",
             ["**P(n,r) = C(n,r) × r!**",
              "Permütasyon = seç, sonra **sırala**",
              "Bu yüzden P her zaman **C'den büyük ya da eşittir**"])},
        {"tur": "cozum",
         "baslik": "Kombinasyon Hesabı",
         "soru": "**8 kişilik** bir gruptan **3 kişilik komisyon** kaç farklı "
                 "biçimde seçilebilir?",
         "adimlar": [
             "Komisyonda **sıra önemli değil** → **kombinasyon**.",
             "C(8, 3) = 8! / (3! · 5!).",
             "Sadeleştir: (8 × 7 × 6) / (3 × 2 × 1).",
             "336 / 6 = **56**.",
         ],
         "sonuc": "56 farklı komisyon seçilebilir."},
        {"tur": "tuzak", "baslik": "Başkan Seçimi Kombinasyon Değildir", "govde":
            "'8 kişiden 3 kişilik komisyon' → **kombinasyon (56)**. "
            "Ama '8 kişiden **başkan, yardımcı ve sayman**' → görevler farklı "
            "olduğu için **sıra önemlidir** → **permütasyon**: "
            "P(8,3) = 8 × 7 × 6 = **336**. Aynı sayılarla iki farklı cevap; "
            "ayrımı yapmak şart."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Olasılık"},
        {"tur": "formul",
         "baslik": "Klasik olasılık",
         "ifade": "P(A) = (İstenen durum sayısı) / (Tüm olası durum sayısı)",
         "terimler": [
             ("Örnek uzay (E)", "Bütün olası sonuçların kümesi"),
             ("Olay (A)", "Örnek uzayın bir **alt kümesi**"),
             ("Aralık", "**0 ≤ P(A) ≤ 1** — olasılık negatif ya da 1'den büyük olamaz"),
         ],
         "not": "**P(A) = 0** → **imkânsız olay**. **P(A) = 1** → **kesin olay**. "
                "**P(A) + P(A') = 1** — bir olay ile tümleyeninin olasılıkları "
                "toplamı **her zaman 1**'dir."},
        {"tur": "maddeler", "ogeler": [
            "**Bir zar**: örnek uzay 6 elemanlıdır. **İki zar**: 6 × 6 = "
            "**36** durum.",
            "**Bir madenî para**: 2 durum. **n para**: **2^n** durum.",
            "**52'lik iskambil destesi**: 4 tür (kupa, karo, sinek, maça), "
            "her türde 13 kart.",
            "**Ayrık (bağdaşmaz) olaylar**: aynı anda gerçekleşemez → "
            "**P(A veya B) = P(A) + P(B)**.",
            "**Bağımsız olaylar**: biri diğerini etkilemez → "
            "**P(A ve B) = P(A) × P(B)**.",
        ]},
        {"tur": "taktik", "baslik": "'En Az Bir' Sorularında Tümleyen", "govde":
            "'En az bir' ifadesi gördüğünde doğrudan hesaplama; **tümleyenden** "
            "git:",
         "ogeler": [
             "**P(en az bir) = 1 − P(hiçbiri)**.",
             "'Hiçbiri' durumu genellikle **tek bir durum** olduğu için hesabı "
             "çok kolaydır.",
             "Örnek: 3 para atıldığında en az bir yazı gelme olasılığı → "
             "**1 − P(hiç yazı yok)** = 1 − (1/2)^3 = 1 − 1/8 = **7/8**.",
             "Aynı yöntem 'en az iki', 'en fazla bir' gibi ifadelerde de "
             "işi kısaltır.",
         ]},
        {"tur": "cozum",
         "baslik": "İki Zar Olasılığı",
         "soru": "İki zar birlikte atılıyor. **Gelen sayıların toplamının 7 "
                 "olma** olasılığı kaçtır?",
         "adimlar": [
             "Tüm olası durumlar: 6 × 6 = **36**.",
             "Toplamı 7 yapan durumları listele: (1,6), (2,5), (3,4), (4,3), "
             "(5,2), (6,1) → **6 durum**.",
             "Olasılık = 6 / 36.",
         ],
         "sonuc": "Olasılık 1/6'dır."},
        {"tur": "cozum",
         "baslik": "Torbadan Çekme (Ardışık)",
         "soru": "Bir torbada **4 kırmızı**, **6 mavi** top vardır. **Geri "
                 "atmadan** ardışık iki top çekiliyor. **İkisinin de kırmızı** "
                 "olma olasılığı kaçtır?",
         "adimlar": [
             "İlk topun kırmızı olma olasılığı: 4/10 = **2/5**.",
             "Geri atılmadığı için ikinci çekimde **toplam 9**, kırmızı **3** "
             "kalır → 3/9 = **1/3**.",
             "İki olay **ardışık** olduğu için olasılıklar **çarpılır**.",
             "(2/5) × (1/3) = **2/15**.",
         ],
         "sonuc": "Olasılık 2/15'tir."},
        {"tur": "tuzak", "baslik": "Geri Atmalı ve Geri Atmasız Fark Eder",
         "govde": "**Geri atılarak** çekilirse ikinci çekimde koşullar "
                  "**değişmez** (4/10 × 4/10). **Geri atılmadan** çekilirse "
                  "toplam sayı ve renk sayısı **azalır** (4/10 × 3/9). "
                  "Soruda 'geri atılmadan', 'ardışık', 'birlikte' ifadelerini "
                  "kaçırmak yanlış cevaba götürür."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**'veya' → topla**, **'ve/sonra' → çarp**.",
            "**0! = 1.**",
            "**Sıra önemliyse permütasyon**, önemsizse **kombinasyon**.",
            "**P(n,r) = n!/(n−r)!**, **C(n,r) = n!/(r!(n−r)!)**.",
            "**P(n,r) = C(n,r) × r!**",
            "Tekrarlı permütasyon: **n! / (tekrar edenlerin faktöriyellerinin "
            "çarpımı)**.",
            "Dairesel permütasyon: **(n−1)!**",
            "Yan yana koşulunda **blok yap, sonra 2! ile çarp**.",
            "**P(A) + P(A') = 1**; 'en az bir' → **1 − P(hiçbiri)**.",
            "**Geri atmalı / atmasız** ayrımını kaçırma.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Her soruda önce **'sıra önemli mi?'** diye sor ve cevabını yaz. "
            "Olasılık sorularında **örnek uzayın eleman sayısını** en başta "
            "hesapla. 'En az bir' gördüğünde tümleyene git.",
        "satir_sayisi": 3,
        "sorular": [
            "Toplama ve çarpma sayma yollarını ayırt eden anahtar kelimeler nelerdir?",
            "4 gömlek ve 3 pantolonla kaç farklı giyinme biçimi vardır?",
            "Bir menüde 3 çorba, 4 ana yemek, 2 tatlı varsa kaç farklı menü seçilir?",
            "Ankara'dan İstanbul'a 3, İstanbul'dan İzmir'e 4 yol varsa Ankara'dan İzmir'e kaç yol vardır?",
            "Faktöriyel tanımını yazınız.",
            "0! kaçtır?",
            "5! kaçtır?",
            "8! / 6! işleminin sonucu kaçtır?",
            "10! / 8! işleminin sonucu kaçtır?",
            "Negatif sayıların faktöriyeli tanımlı mıdır?",
            "Permütasyon formülünü yazınız.",
            "Permütasyonda sıra önemli midir?",
            "n elemanın tamamının sıralanışı kaçtır?",
            "P(5, 3) kaçtır?",
            "P(6, 2) kaçtır?",
            "KİTAP kelimesinin harfleriyle kaç dizilim yazılır?",
            "ANKARA kelimesinin harfleriyle kaç dizilim yazılır?",
            "Tekrarlı permütasyon formülünü yazınız.",
            "MATEMATİK kelimesinin harfleriyle kaç dizilim yazılır?",
            "Dairesel permütasyon formülünü yazınız.",
            "6 kişi yuvarlak masaya kaç farklı biçimde oturur?",
            "5 kişi yan yana kaç farklı biçimde sıralanır?",
            "5 kişiden Ali ile Veli yan yana olacak biçimde kaç sıralama vardır?",
            "Aynı soruda Ali ile Veli yan yana OLMAYACAK biçimde kaç sıralama vardır?",
            "Kombinasyon formülünü yazınız.",
            "Kombinasyonda sıra önemli midir?",
            "C(n, r) = C(n, n−r) özelliğini açıklayınız.",
            "C(8, 3) kaçtır?",
            "C(6, 2) kaçtır?",
            "C(n, 0) ve C(n, n) kaçtır?",
            "8 kişiden 3 kişilik komisyon kaç farklı biçimde seçilir?",
            "8 kişiden başkan, yardımcı ve sayman kaç farklı biçimde seçilir?",
            "Bu iki sorunun cevabının farklı olmasının nedeni nedir?",
            "P(n,r) ile C(n,r) arasındaki bağıntıyı yazınız.",
            "Düzlemde doğrusal olmayan 6 noktadan kaç doğru çizilir?",
            "Olasılık formülünü yazınız.",
            "Olasılık hangi aralıkta değer alır?",
            "P(A) = 0 ve P(A) = 1 ne anlama gelir?",
            "P(A) + P(A') kaçtır?",
            "İki zar atıldığında örnek uzayın eleman sayısı kaçtır?",
            "İki zar atıldığında toplamın 7 olma olasılığı kaçtır?",
            "3 madenî para atıldığında örnek uzay kaç elemanlıdır?",
            "3 para atıldığında en az bir yazı gelme olasılığı kaçtır?",
            "4 kırmızı, 6 mavi top olan torbadan geri atmadan iki top çekiliyor. İkisinin de kırmızı olma olasılığı kaçtır?",
            "Aynı soruda toplar geri atılarak çekilseydi olasılık kaç olurdu?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**'ya da / veya'** geçiyorsa **toplama**; **'ve / sonra / hem'** geçiyorsa **çarpma** yolu kullanılır.",
            "4 × 3 = **12**.",
            "3 × 4 × 2 = **24**.",
            "3 × 4 = **12**.",
            "**n! = n · (n−1) · ... · 2 · 1.**",
            "**1.**",
            "5 × 4 × 3 × 2 × 1 = **120**.",
            "8 × 7 = **56**.",
            "10 × 9 = **90**.",
            "**Tanımlı değildir.**",
            "**P(n, r) = n! / (n − r)!.**",
            "**Önemlidir.** 'AB' ile 'BA' farklı sayılır.",
            "**n!**",
            "5!/2! = 5 × 4 × 3 = **60**.",
            "6 × 5 = **30**.",
            "5 harf, hepsi farklı → 5! = **120**.",
            "6 harf, A 3 kez → 6!/3! = 720/6 = **120**.",
            "**n! / (a! · b! · ...)** — a, b tekrar eden elemanların sayılarıdır.",
            "9 harf; M 2, A 2, T 2 kez → 9!/(2!·2!·2!) = 362 880/8 = **45 360**.",
            "**(n − 1)!**",
            "(6−1)! = 5! = **120**.",
            "5! = **120**.",
            "Blok yap → 4! × 2! = 24 × 2 = **48**.",
            "Toplam 120 − yan yana 48 = **72**.",
            "**C(n, r) = n! / (r! · (n−r)!).**",
            "**Önemli değildir.** 'AB' ile 'BA' aynı seçimdir.",
            "r tanesini **seçmek**, geriye kalan (n−r) tanesini **seçmemekle** aynı sonucu verir; bu yüzden sayıları eşittir.",
            "(8×7×6)/(3×2×1) = **56**.",
            "(6×5)/(2×1) = **15**.",
            "İkisi de **1**'dir.",
            "Sıra önemsiz → C(8,3) = **56**.",
            "Görevler farklı, sıra önemli → P(8,3) = 8×7×6 = **336**.",
            "Komisyonda **üyeler eşit** (sıra önemsiz); başkan-yardımcı-saymanda **görevler farklı** olduğu için sıra önemlidir.",
            "**P(n,r) = C(n,r) × r!**",
            "İki nokta bir doğru belirler, sıra önemsiz → C(6,2) = **15**.",
            "**P(A) = istenen durum sayısı / tüm olası durum sayısı.**",
            "**0 ile 1 arasında** (0 ≤ P(A) ≤ 1).",
            "**P(A) = 0** imkânsız olay, **P(A) = 1** kesin olay demektir.",
            "**1.**",
            "6 × 6 = **36**.",
            "Toplamı 7 yapan 6 durum var → 6/36 = **1/6**.",
            "2^3 = **8**.",
            "1 − P(hiç yazı yok) = 1 − 1/8 = **7/8**.",
            "(4/10) × (3/9) = (2/5) × (1/3) = **2/15**.",
            "(4/10) × (4/10) = **4/25**.",
        ],
    },
}
