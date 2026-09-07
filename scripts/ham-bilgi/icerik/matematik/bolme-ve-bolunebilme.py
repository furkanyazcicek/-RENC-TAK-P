"""TYT Matematik — Bölme ve Bölünebilme (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: BÖLME VE BÖLÜNEBİLME",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Bölme ve Bölünebilme",
    "alt_baslik": "Ham bilgi notu — bölme algoritması, bölünebilme kuralları, "
                  "kalan bulma ve çarpan sayısı; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Bölme ve Bölünebilme",
        "kazanimlar": "Bölme algoritmasını kullanır; bölünebilme kurallarını "
                      "uygular; bir sayının pozitif bölen sayısını hesaplar.",
        "kapsam": "Bölme algoritması, 2-3-4-5-6-8-9-10-11'e bölünebilme, "
                  "kalan bulma teknikleri, asal çarpanlara ayırma, pozitif bölen "
                  "sayısı, 50 alıştırma",
        "nasil": "Bölünebilme kurallarını **ezberlemeden geçme** — TYT'de doğrudan "
                 "sorulur. Kalan sorularında **bölme algoritmasını yazmayı** "
                 "refleks hâline getir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Bölünebilme, OBEB-OKEK ve rasyonel sayılar konularının da "
                    "temelidir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Bölme Algoritması"},
        {"tur": "gorsel", "baslik": "Şema 1 — Bölme işleminin dört elemanı",
         "aciklama": "Dört eleman arasındaki bağ **A = B · C + K**'dir ve "
                     "**kalan bölenden küçük olmak zorundadır** (0 ≤ K < B). "
                     "Sorularda verilmeyen elemanı bu bağıntıdan çekersin.",
         "ciz": S.kartlar([
             ("Bölünen (A)", "bölünecek olan\nbüyük sayı"),
             ("Bölen (B)", "kaça bölündüğü\n— asla 0 olamaz"),
             ("Bölüm (C)", "kaç kere\ntam bölündüğü"),
             ("Kalan (K)", "artan miktar\n**0 ≤ K < B**"),
         ], sutun=4)},
        {"tur": "formul",
         "baslik": "Bölme bağıntısı",
         "ifade": "A = B · C + K",
         "terimler": [
             ("A", "**Bölünen**"),
             ("B", "**Bölen** — sıfırdan farklı olmalıdır"),
             ("C", "**Bölüm**"),
             ("K", "**Kalan** — her zaman **0 ≤ K < B** olmalıdır"),
         ],
         "not": "**Kalan, bölenden küçük olmak zorundadır.** Bir soruda "
                "'kalan 7, bölen 5' deniyorsa bu **imkânsızdır**. En büyük "
                "kalan **bölen − 1**'dir."},
        {"tur": "maddeler", "ogeler": [
            "**Tam bölünme**: Kalan **sıfırdır** (K = 0). Bu durumda "
            "**A = B · C** olur ve 'B, A'yı tam böler' denir.",
            "**Bölen kaç farklı değer alabilir** sorularında kalan koşulu "
            "kullanılır: kalan K ise **bölen K'den büyük** olmalıdır.",
            "**Sıfıra bölme tanımsızdır.** Ama sıfırın bir sayıya bölümü "
            "**sıfırdır** (0 ÷ 5 = 0).",
        ]},
        {"tur": "cozum",
         "baslik": "Bölen Sayısını Bulma",
         "soru": "Bir bölme işleminde **bölüm 7**, **kalan 4**'tür. Bölünen en "
                 "küçük kaç olabilir?",
         "adimlar": [
             "Bölme algoritması: A = B · 7 + 4.",
             "**Kalan bölenden küçük olmalı**: 4 < B → B en az **5** olabilir.",
             "Bölüneni en küçük yapmak için **B'yi en küçük** al: B = 5.",
             "A = 5 × 7 + 4 = 35 + 4.",
         ],
         "sonuc": "Bölünen en küçük 39 olabilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Bölünebilme Kuralları"},
        {"tur": "gorsel", "baslik": "Şema 2 — Bölünebilme kuralları tek bakışta",
         "aciklama": "**Bileşik sayılara bölünebilme**, aralarında asal çarpanlarına "
                     "bölünebilmekle sınanır: 6 = 2 · 3, 12 = 3 · 4, 15 = 3 · 5. "
                     "Dikkat: 12 için 2 ve 6'ya bakmak **yanlıştır** (2 ile 6 "
                     "aralarında asal değildir).",
         "ciz": S.kartlar([
             ("2 ile", "son basamak\n**çift**"),
             ("3 ile", "rakamlar toplamı\n**3'ün katı**"),
             ("4 ile", "son **iki** basamak\n4'ün katı"),
             ("5 ile", "son basamak\n**0 ya da 5**"),
             ("6 ile", "hem **2** hem **3**\nkuralı sağlanır"),
             ("8 ile", "son **üç** basamak\n8'in katı"),
             ("9 ile", "rakamlar toplamı\n**9'un katı**"),
             ("10 ile", "son basamak\n**0**"),
             ("11 ile", "birler − onlar +\n... farkı 11'in katı"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Sayı", "Kural", "Örnek"],
         "oranlar": [0.12, 0.56, 0.32],
         "satirlar": [
             ["**2**", "**Son rakam çift** olmalı (0, 2, 4, 6, 8)", "1**4** → bölünür"],
             ["**3**", "**Rakamları toplamı 3'e** bölünmeli", "12**3** → 1+2+3 = 6"],
             ["**4**", "**Son iki basamak 4'e** bölünmeli ya da 00 olmalı",
              "3**16** → 16 ÷ 4 = 4"],
             ["**5**", "**Son rakam 0 ya da 5** olmalı", "24**5** → bölünür"],
             ["**6**", "**Hem 2'ye hem 3'e** bölünmeli", "24 → çift ve 2+4 = 6"],
             ["**8**", "**Son üç basamak 8'e** bölünmeli ya da 000 olmalı",
              "1**024** → 24 ÷ 8 = 3"],
             ["**9**", "**Rakamları toplamı 9'a** bölünmeli", "72**9** → 7+2+9 = 18"],
             ["**10**", "**Son rakam 0** olmalı", "35**0** → bölünür"],
             ["**11**", "Rakamların **birer atlayarak toplamlarının farkı** "
              "0 ya da 11'in katı olmalı", "**2915** → (2+1)−(9+5) = −11"],
         ]},
        {"tur": "taktik", "baslik": "11'e Bölünebilme Kuralı Nasıl Uygulanır?",
         "govde": "En çok karıştırılan kural budur; adım adım uygula:",
         "ogeler": [
             "Sayının rakamlarını **sağdan sola** doğru sırayla işaretle: "
             "**+, −, +, −, ...**",
             "İşaretli rakamları **topla**.",
             "Sonuç **0 ya da 11'in katıysa** sayı 11'e bölünür.",
             "Örnek: **9163** → sağdan: 3(+), 6(−), 1(+), 9(−) → "
             "3 − 6 + 1 − 9 = **−11** → 11'in katı → **bölünür**.",
         ]},
        {"tur": "tuzak", "baslik": "6'ya Bölünme İçin İki Koşul Birden", "govde":
            "Bir sayının 6'ya bölünmesi için **hem 2'ye hem 3'e** bölünmesi "
            "gerekir. Yalnızca çift olması **yetmez**. 14 çifttir ama 6'ya "
            "bölünmez (1+4=5, 3'e bölünmez). Aynı mantık **12'ye bölünme** "
            "için de geçerlidir: hem **3'e** hem **4'e** bölünmelidir."},
        {"tur": "cozum",
         "baslik": "Bilinmeyen Rakam Bulma",
         "soru": "**23a4** dört basamaklı sayısı **3 ile tam bölünebiliyorsa** "
                 "**a** yerine kaç farklı rakam yazılabilir?",
         "adimlar": [
             "3'e bölünme kuralı: **rakamları toplamı 3'e bölünmeli**.",
             "Rakamlar toplamı: 2 + 3 + a + 4 = **9 + a**.",
             "9 zaten 3'ün katı olduğu için **a'nın da 3'ün katı** olması gerekir.",
             "a bir rakam olduğundan: a ∈ {0, 3, 6, 9}.",
         ],
         "sonuc": "4 farklı rakam yazılabilir (0, 3, 6, 9)."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kalan Bulma"},
        {"tur": "maddeler", "ogeler": [
            "**Toplamın kalanı = kalanların toplamının kalanı.** İki sayının "
            "toplamının bölümünden kalanı bulmak için kalanları toplayıp "
            "yeniden bölmek yeterlidir.",
            "**Çarpımın kalanı = kalanların çarpımının kalanı.**",
            "**Üslü ifadelerde kalan**, kalanların **tekrar eden bir örüntü** "
            "oluşturmasından yararlanılarak bulunur.",
        ]},
        {"tur": "cozum",
         "baslik": "Toplamın Kalanı",
         "soru": "**A sayısının 7'ye bölümünden kalan 5**, **B sayısının 7'ye "
                 "bölümünden kalan 4**'tür. **A + B** toplamının 7'ye bölümünden "
                 "kalan kaçtır?",
         "adimlar": [
             "Kalanları topla: 5 + 4 = **9**.",
             "Bu toplam bölenden (7) büyük olduğu için **tekrar böl**: "
             "9 = 7 × 1 + **2**.",
         ],
         "sonuc": "Kalan 2'dir."},
        {"tur": "cozum",
         "baslik": "Üslü İfadede Kalan (Örüntü Yöntemi)",
         "soru": "**3^100** sayısının **5'e** bölümünden kalan kaçtır?",
         "adimlar": [
             "Üsleri sırayla dene ve kalanları yaz: 3^1 = 3 → kalan **3**.",
             "3^2 = 9 → kalan **4**. 3^3 = 27 → kalan **2**. 3^4 = 81 → kalan **1**.",
             "3^5'te kalan yeniden **3** olur → örüntü **4 adımda tekrar ediyor** "
             "(3, 4, 2, 1).",
             "100'ü 4'e böl: 100 = 4 × 25 + **0**. Kalan sıfır olduğu için "
             "örüntünün **son terimine** bakılır.",
             "Örüntünün 4. terimi: **1**.",
         ],
         "sonuc": "Kalan 1'dir."},
        {"tur": "taktik", "baslik": "Üslü İfadede Kalan Bulma Yöntemi", "govde":
            "Bu tip sorular ezberle değil, **örüntü bularak** çözülür:",
         "ogeler": [
             "Tabanın **1., 2., 3., 4. kuvvetlerinin** kalanlarını hesapla.",
             "Kalanlar **tekrar etmeye başladığı yerde** örüntünün uzunluğunu bul.",
             "**Üssü, örüntü uzunluğuna böl**; **kalan kaçsa** örüntünün "
             "o sıradaki terimini al.",
             "Bölme kalanı **sıfır çıkarsa** örüntünün **son terimini** al — "
             "en çok hata yapılan adım budur.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Asal Çarpanlara Ayırma ve Bölen Sayısı"},
        {"tur": "maddeler", "ogeler": [
            "Her doğal sayı, **asal çarpanlarının çarpımı** olarak **tek "
            "biçimde** yazılabilir. Buna **asal çarpanlara ayırma** denir.",
            "Örnek: **360 = 2^3 · 3^2 · 5**.",
            "Ayırma işlemi, sayıyı **en küçük asaldan başlayarak** ardışık "
            "bölmeyle yapılır.",
        ]},
        {"tur": "formul",
         "baslik": "Pozitif bölen (çarpan) sayısı",
         "ifade": "A = a^x · b^y · c^z  ise   Bölen sayısı = (x+1) · (y+1) · (z+1)",
         "terimler": [
             ("a, b, c", "**Asal çarpanlar**"),
             ("x, y, z", "Asal çarpanların **üsleri**"),
             ("Kural", "Her üse **1 eklenip** hepsi **çarpılır**"),
         ],
         "not": "**Asal olan bölen sayısı**, farklı asal çarpan sayısı kadardır. "
                "**Asal olmayan bölen sayısı** = toplam bölen sayısı − asal "
                "bölen sayısı − 1 (bir de 1 sayısı asal değildir, çıkarılır)."},
        {"tur": "cozum",
         "baslik": "Bölen Sayısı Hesabı",
         "soru": "**360** sayısının kaç tane **pozitif tam böleni** vardır?",
         "adimlar": [
             "Asal çarpanlarına ayır: 360 = 2 × 180 = 2 × 2 × 90 = ... → "
             "**360 = 2^3 · 3^2 · 5^1**.",
             "Üsleri al: **3, 2, 1**.",
             "Her üse 1 ekle: **4, 3, 2**.",
             "Çarp: 4 × 3 × 2.",
         ],
         "sonuc": "360 sayısının 24 pozitif tam böleni vardır."},
        {"tur": "cozum",
         "baslik": "Asal Olmayan Bölen Sayısı",
         "soru": "**360** sayısının kaç tane **asal olmayan pozitif böleni** vardır?",
         "adimlar": [
             "Toplam pozitif bölen sayısı: **24** (yukarıda bulundu).",
             "**Asal bölenler**: 2, 3, 5 → **3 tane**.",
             "**1 sayısı** da asal değildir ama genelde ayrıca sayılır; "
             "asal olmayan bölenler 1'i de içerir.",
             "Asal olmayan bölen sayısı = 24 − 3 = **21**.",
         ],
         "sonuc": "21 tane asal olmayan pozitif böleni vardır (1 dâhil)."},
        {"tur": "dikkat", "baslik": "Tam Bölen Sayısı Tek Sayı Olan Sayılar", "govde":
            "Bir sayının pozitif bölen sayısı **ancak ve ancak sayı TAM KARE "
            "ise tek sayıdır**. Nedeni: bölenler ikişerli eşleşir; tam karede "
            "ortadaki bölen kendisiyle eşleşir. Örnek: 36'nın bölenleri "
            "1, 2, 3, 4, 6, 9, 12, 18, 36 → **9 tane** (tek)."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**A = B · C + K** ve **0 ≤ K < B**. Kalan bölenden küçüktür.",
            "**2**: son rakam çift · **5**: son rakam 0 veya 5 · **10**: son rakam 0.",
            "**3**: rakamlar toplamı 3'ün katı · **9**: rakamlar toplamı 9'un katı.",
            "**4**: son iki basamak · **8**: son üç basamak.",
            "**6**: hem 2'ye hem 3'e · **12**: hem 3'e hem 4'e.",
            "**11**: sağdan +, −, +, − işaretle, topla; 0 ya da 11'in katı olmalı.",
            "**Toplamın/çarpımın kalanı = kalanların toplamının/çarpımının kalanı.**",
            "Üslü ifadede kalan: **örüntü bul, üssü örüntü uzunluğuna böl**.",
            "Bölen sayısı = **(üs+1)'lerin çarpımı**.",
            "**Bölen sayısı tek ise sayı tam karedir.**",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Alıştırma"},
        "giris":
            "Bölünebilme sorularında **kuralı yazıp** başla. Kalan sorularında "
            "**A = B·C + K** bağıntısını kâğıda dök. Üslü kalan sorularında "
            "**ilk dört kuvvetin kalanını** hesaplayıp örüntüyü çıkar.",
        "satir_sayisi": 3,
        "sorular": [
            "Bölme algoritmasını yazınız ve terimleri adlandırınız.",
            "Kalan ile bölen arasındaki ilişki nedir?",
            "Bölen 9 ise en büyük kalan kaçtır?",
            "Kalan 6 ise bölen en az kaç olabilir?",
            "Sıfıra bölme neden tanımsızdır?",
            "0 ÷ 7 işleminin sonucu kaçtır?",
            "Bölüm 7, kalan 4 ise bölünen en küçük kaç olabilir?",
            "Bölüm 5, kalan 3 ise bölünen en küçük kaç olabilir?",
            "2 ile bölünebilme kuralını yazınız.",
            "3 ile bölünebilme kuralını yazınız.",
            "4 ile bölünebilme kuralını yazınız.",
            "5 ile bölünebilme kuralını yazınız.",
            "6 ile bölünebilme kuralını yazınız.",
            "8 ile bölünebilme kuralını yazınız.",
            "9 ile bölünebilme kuralını yazınız.",
            "11 ile bölünebilme kuralını yazınız.",
            "12 ile bölünebilme için hangi iki koşul gerekir?",
            "1236 sayısı 4'e bölünür mü? Gösteriniz.",
            "2915 sayısı 11'e bölünür mü? Gösteriniz.",
            "9163 sayısı 11'e bölünür mü? Gösteriniz.",
            "23a4 sayısı 3'e bölünüyorsa a kaç farklı değer alır?",
            "35a sayısı 9'a bölünüyorsa a kaçtır?",
            "4a6 sayısı 4'e bölünüyorsa a kaç farklı değer alır?",
            "12a sayısı 6'ya bölünüyorsa a kaç farklı değer alır?",
            "14 sayısı çift olduğu hâlde neden 6'ya bölünmez?",
            "Toplamın kalanı nasıl bulunur?",
            "Çarpımın kalanı nasıl bulunur?",
            "A'nın 7'ye bölümünden kalan 5, B'nin kalanı 4 ise A+B'nin kalanı kaçtır?",
            "Aynı sayılar için A·B çarpımının 7'ye bölümünden kalan kaçtır?",
            "A'nın 5'e bölümünden kalan 3 ise 2A'nın kalanı kaçtır?",
            "3^100 sayısının 5'e bölümünden kalan kaçtır?",
            "2^50 sayısının 3'e bölümünden kalan kaçtır?",
            "7^25 sayısının 10'a bölümünden kalan kaçtır?",
            "Üslü ifadede kalan bulma yöntemini adım adım yazınız.",
            "Örüntü uzunluğuna bölme işleminde kalan sıfır çıkarsa ne yapılır?",
            "Asal çarpanlara ayırma nedir?",
            "360 sayısını asal çarpanlarına ayırınız.",
            "72 sayısını asal çarpanlarına ayırınız.",
            "Pozitif bölen sayısı formülünü yazınız.",
            "360 sayısının kaç pozitif tam böleni vardır?",
            "72 sayısının kaç pozitif tam böleni vardır?",
            "2^4 · 3^2 sayısının kaç pozitif böleni vardır?",
            "360 sayısının kaç asal böleni vardır?",
            "360 sayısının kaç asal olmayan böleni vardır?",
            "Bir sayının bölen sayısı hangi durumda tek olur? Nedenini açıklayınız.",
            "36 sayısının bölenlerini yazınız ve sayısını belirtiniz.",
            "Bölen sayısı 3 olan sayılar hakkında ne söylenebilir?",
            "İki basamaklı en büyük asal sayı kaçtır?",
            "100'den küçük kaç asal sayı vardır?",
            "Bir sayı hem 4'e hem 6'ya bölünüyorsa kesinlikle hangi sayıya bölünür?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**A = B · C + K.** A bölünen, B bölen, C bölüm, K kalandır.",
            "**Kalan her zaman bölenden küçüktür**: 0 ≤ K < B.",
            "**8** (bölen − 1).",
            "**7** (kalandan büyük olmalı).",
            "Hiçbir sayı 0 ile çarpıldığında sıfırdan farklı bir sonuç vermez; bölme işleminin **tek bir sonucu olamayacağı** için tanımsızdır.",
            "**0.**",
            "Kalan 4 → bölen en az 5. A = 5 × 7 + 4 = **39**.",
            "Kalan 3 → bölen en az 4. A = 4 × 5 + 3 = **23**.",
            "**Son rakamı çift** olmalıdır (0, 2, 4, 6, 8).",
            "**Rakamları toplamı 3'e** bölünmelidir.",
            "**Son iki basamağı 4'e** bölünmeli ya da **00** olmalıdır.",
            "**Son rakamı 0 ya da 5** olmalıdır.",
            "**Hem 2'ye hem 3'e** bölünmelidir.",
            "**Son üç basamağı 8'e** bölünmeli ya da **000** olmalıdır.",
            "**Rakamları toplamı 9'a** bölünmelidir.",
            "Rakamlar **sağdan sola +, −, +, −** işaretlenip toplanır; sonuç **0 ya da 11'in katı** olmalıdır.",
            "**Hem 3'e hem 4'e** bölünmelidir.",
            "Son iki basamak **36**; 36 ÷ 4 = 9 → **bölünür**.",
            "(2 + 1) − (9 + 5) = 3 − 14 = **−11** → 11'in katı → **bölünür**.",
            "3 − 6 + 1 − 9 = **−11** → **bölünür**.",
            "2+3+a+4 = 9+a; 9 zaten 3'ün katı → a da 3'ün katı olmalı → a ∈ {0,3,6,9} → **4 değer**.",
            "3+5+a = 8+a; 9'un katı olması için 8+a = 9 → **a = 1** (ya da 18 → a = 10 olamaz).",
            "Son iki basamak **a6**; 4'e bölünmesi için a6 ∈ {16, 36, 56, 76, 96} → a ∈ {1,3,5,7,9} → **5 değer**.",
            "Çift olmalı: a ∈ {0,2,4,6,8}. 3'e bölünmeli: 1+2+a = 3+a → a ∈ {0,3,6,9}. Kesişim: **a ∈ {0, 6} → 2 değer**.",
            "6'ya bölünmek için **hem 2'ye hem 3'e** bölünmesi gerekir. 14 çifttir ama 1+4 = 5, **3'e bölünmez**.",
            "**Kalanlar toplanır**, çıkan sonuç bölenden büyükse **yeniden bölünür**.",
            "**Kalanlar çarpılır**, sonuç bölenden büyükse **yeniden bölünür**.",
            "5 + 4 = 9 → 9 ÷ 7 → kalan **2**.",
            "5 × 4 = 20 → 20 ÷ 7 = 2 kalan **6**.",
            "2 × 3 = 6 → 6 ÷ 5 → kalan **1**.",
            "Kalan örüntüsü: 3, 4, 2, 1 (4 adımda tekrar). 100 ÷ 4 → kalan 0 → örüntünün son terimi → **1**.",
            "2'nin 3'e bölümünden kalanları: 2, 1, 2, 1 (2 adımda tekrar). 50 ÷ 2 → kalan 0 → son terim → **1**.",
            "7'nin 10'a bölümünden kalanları: 7, 9, 3, 1 (4 adımda tekrar). 25 ÷ 4 = 6 kalan **1** → örüntünün 1. terimi → **7**.",
            "**1)** İlk birkaç kuvvetin kalanını hesapla. **2)** Örüntünün uzunluğunu bul. **3)** Üssü örüntü uzunluğuna böl. **4)** Kalan kaçsa o sıradaki terimi al.",
            "Örüntünün **son terimi** alınır.",
            "Bir sayıyı **asal çarpanlarının çarpımı** biçiminde yazmaktır; bu gösterim **tektir**.",
            "**360 = 2^3 · 3^2 · 5.**",
            "**72 = 2^3 · 3^2.**",
            "Üslere **1 eklenip** hepsi **çarpılır**: (x+1)(y+1)(z+1).",
            "Üsler 3, 2, 1 → 4 × 3 × 2 = **24**.",
            "Üsler 3, 2 → 4 × 3 = **12**.",
            "(4+1)(2+1) = 5 × 3 = **15**.",
            "**3 tane** (2, 3 ve 5).",
            "24 − 3 = **21** (1 sayısı da asal olmayanlara dâhildir).",
            "**Sayı tam kare olduğunda** tek olur. Bölenler ikişerli eşleşir; tam karede ortadaki bölen **kendisiyle eşleştiği** için sayı tek çıkar.",
            "1, 2, 3, 4, 6, 9, 12, 18, 36 → **9 tane**.",
            "Bölen sayısı 3 ise sayı **bir asalın karesidir** (p^2 biçiminde): 4, 9, 25, 49...",
            "**97.**",
            "**25 tane.**",
            "**12'ye** bölünür (4 ve 6'nın OKEK'i 12'dir).",
        ],
    },
}
