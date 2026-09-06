"""TYT Matematik — Üslü Sayılar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: ÜSLÜ SAYILAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Üslü Sayılar",
    "alt_baslik": "Ham bilgi notu — üs kuralları, negatif ve sıfır üs, bilimsel "
                  "gösterim ve üslü denklemler; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Üslü Sayılar",
        "kazanimlar": "Üslü ifadelerde işlem kurallarını uygular; negatif ve "
                      "sıfır üsleri yorumlar; üslü denklemleri çözer.",
        "kapsam": "Üs tanımı, çarpma-bölme-kuvvet kuralları, sıfır ve negatif üs, "
                  "taban eşitleme, üslü denklemler, bilimsel gösterim, "
                  "işaret kuralları, 45 alıştırma",
        "nasil": "Bu konu **kural konusudur**; kuralları ezberlemeden soru "
                 "çözülmez. Ama ezber yeterli değil: her kuralı **bir örnekle** "
                 "not al ki hangi durumda hangisinin geçerli olduğunu karıştırma.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Üslü sayılar; köklü sayılar, çarpanlara ayırma ve fonksiyon "
                    "konularının işlem altyapısıdır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Tanım"},
        {"tur": "formul",
         "baslik": "Üslü ifade",
         "ifade": "a^n  =  a · a · a · ... · a     (n tane a)",
         "terimler": [
             ("a", "**Taban** — çarpılan sayı"),
             ("n", "**Üs (kuvvet)** — kaç kez çarpıldığı"),
             ("Okunuşu", "'a üssü n' ya da 'a'nın n. kuvveti'"),
         ],
         "not": "**Üs, tabanın kendisiyle kaç kez ÇARPILDIĞINI** gösterir; "
                "tabanla çarpılacak sayıyı değil. **2^3 = 8**'dir, 6 değil."},
        {"tur": "maddeler", "ogeler": [
            "**a^1 = a** — bir sayının birinci kuvveti kendisidir.",
            "**a^0 = 1** (a sıfırdan farklı olmak koşuluyla). Tabanın ne olduğu "
            "önemli değildir: 5^0 = 1, (−7)^0 = 1, (1/2)^0 = 1.",
            "**0^0 tanımsızdır.** Ayrıca **0^n = 0** (n pozitifken).",
            "**1^n = 1** — 1'in her kuvveti 1'dir.",
            "**(−1)^n**: n **çiftse 1**, n **tekse −1**'dir.",
        ]},
        {"tur": "tuzak", "baslik": "Parantez Üssü Değiştirir", "govde":
            "**(−2)^4 = 16** (eksi de üsse dâhil, dört kez çarpılır). "
            "**−2^4 = −16** (üs yalnızca 2'ye ait, eksi dışarıda kalır). "
            "Aynı biçimde **(2a)^3 = 8a^3** ama **2a^3 = 2 · a^3**'tür. "
            "Parantezin olup olmaması sonucu tamamen değiştirir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Üs Kuralları"},
        {"tur": "formul",
         "baslik": "Temel işlem kuralları",
         "ifade": "a^m · a^n = a^(m+n)          a^m / a^n = a^(m−n)\n"
                  "(a^m)^n = a^(m·n)             (a·b)^n = a^n · b^n\n"
                  "(a/b)^n = a^n / b^n           a^(−n) = 1 / a^n",
         "terimler": [
             ("Çarpma", "**Tabanlar aynıysa üsler TOPLANIR**"),
             ("Bölme", "**Tabanlar aynıysa üsler ÇIKARILIR**"),
             ("Kuvvetin kuvveti", "**Üsler ÇARPILIR**"),
             ("Negatif üs", "Kesrin **tersi alınır**, üs pozitif olur"),
         ],
         "not": "**Toplama ve çıkarmada üs kuralı YOKTUR.** a^m + a^n "
                "sadeleştirilemez; ancak **ortak parantez** alınabilir."},
        {"tur": "tuzak", "baslik": "Toplamada Üs Kuralı Yoktur", "govde":
            "**2^3 + 2^4 ifadesi 2^7 DEĞİLDİR.** Üsler yalnızca **çarpmada** "
            "toplanır. Doğrusu: 8 + 16 = **24**. Ya da ortak parantez: "
            "2^3(1 + 2) = 8 × 3 = 24. Bu, konudaki en sık hatadır."},
        {"tur": "cozum",
         "baslik": "Üs Kurallarını Birlikte Kullanma",
         "soru": "**(2^3 · 2^5) / 2^6** işleminin sonucu kaçtır?",
         "adimlar": [
             "Payda **tabanlar aynı, çarpma var** → üsler toplanır: "
             "2^3 · 2^5 = 2^(3+5) = **2^8**.",
             "Şimdi bölme, **tabanlar aynı** → üsler çıkarılır: "
             "2^8 / 2^6 = 2^(8−6) = **2^2**.",
             "2^2 = **4**.",
         ],
         "sonuc": "Sonuç 4'tür."},
        {"tur": "cozum",
         "baslik": "Ortak Parantezle Sadeleştirme",
         "soru": "**(3^12 + 3^11) / 3^11** işleminin sonucu kaçtır?",
         "adimlar": [
             "Payda toplama var; üsler toplanamaz → **ortak parantez** al.",
             "Küçük üslü olanı dışarı al: 3^11(3^1 + 1) = 3^11 · **4**.",
             "İfade: (3^11 · 4) / 3^11.",
             "3^11'ler sadeleşir → **4**.",
         ],
         "sonuc": "Sonuç 4'tür."},
        {"tur": "taktik", "baslik": "Toplamlı Üslü İfadelerde Ortak Parantez",
         "govde": "Üslü toplamlarda **üsleri toplamaya çalışma**; ortak parantez al:",
         "ogeler": [
             "**En küçük üslü terimi** dışarı al.",
             "Parantez içinde kalan üsler, **fark kadar** olur: "
             "3^12 + 3^11 = 3^11(3 + 1).",
             "Ardışık üsler varsa parantez içi çoğu zaman **taban + 1** çıkar.",
             "Çıkarmada da aynı yöntem: 3^12 − 3^11 = 3^11(3 − 1) = 3^11 · 2.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Negatif ve Kesirli Üs"},
        {"tur": "maddeler", "ogeler": [
            "**a^(−n) = 1 / a^n** — negatif üs, sayıyı **paydaya** taşır.",
            "**(a/b)^(−n) = (b/a)^n** — kesirde negatif üs, kesri **ters çevirir**.",
            "**Negatif üs sayıyı negatif YAPMAZ.** 2^(−3) = 1/8'dir; **−8 değildir**. "
            "Bu, en yaygın yanlış anlamalardan biridir.",
            "**Kesirli üs**: a^(1/n) = **n. dereceden kök a**. Örnek: "
            "8^(1/3) = 2, 16^(1/2) = 4.",
            "**a^(m/n) = (n. dereceden kök a)^m** biçiminde de yazılabilir.",
        ]},
        {"tur": "cozum",
         "baslik": "Negatif Üslü İşlem",
         "soru": "**(2/3)^(−2)** işleminin sonucu kaçtır?",
         "adimlar": [
             "Negatif üs, kesri **ters çevirir**: (3/2)^2.",
             "Üs hem paya hem paydaya dağılır: 3^2 / 2^2.",
             "9 / 4.",
         ],
         "sonuc": "Sonuç 9/4'tür."},
        {"tur": "dikkat", "baslik": "Negatif Üs ile Negatif Taban Farklı Şeyler",
         "govde": "**2^(−3) = 1/8** (pozitif bir kesir). "
                  "**(−2)^3 = −8** (negatif bir tam sayı). "
                  "Birincisinde **üs** negatif, ikincisinde **taban** negatiftir. "
                  "Sonuçların işareti tamamen farklıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "İşaret Kuralları"},
        {"tur": "tablo",
         "basliklar": ["Durum", "Sonucun İşareti", "Örnek"],
         "oranlar": [0.34, 0.28, 0.38],
         "satirlar": [
             ["**Pozitif taban**, herhangi üs", "**Pozitif**", "3^5 = 243"],
             ["**Negatif taban**, **çift** üs", "**Pozitif**", "(−2)^4 = 16"],
             ["**Negatif taban**, **tek** üs", "**Negatif**", "(−2)^3 = −8"],
             ["**Negatif üs**, pozitif taban", "**Pozitif** (kesir)", "2^(−3) = 1/8"],
             ["Parantezsiz eksi", "**Her zaman negatif**", "−2^4 = −16"],
         ]},
        {"tur": "taktik", "baslik": "İşaret Belirleme Refleksi", "govde":
            "Üslü bir ifadenin işaretini üç saniyede bul:",
         "ogeler": [
             "**Önce parantez var mı** diye bak. Eksi parantez içindeyse üsse "
             "dâhildir; dışındaysa sonuç **kesinlikle negatiftir**.",
             "Eksi parantez içindeyse **üsün tek/çift** olduğuna bak: "
             "**çift → pozitif**, **tek → negatif**.",
             "**Üsün negatif olması işareti değiştirmez**; yalnızca sayıyı "
             "kesre çevirir.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Üslü Denklemler"},
        {"tur": "taktik", "baslik": "Üslü Denklem Çözme Yöntemi", "govde":
            "Üslü denklemlerin tamamı tek bir fikirle çözülür: **tabanları "
            "eşitle**.",
         "ogeler": [
             "**1)** Denklemin iki tarafını **aynı tabana** getir "
             "(genellikle en küçük asal tabana).",
             "**2)** Tabanlar eşitlenince **üsler de eşit olmak zorundadır**; "
             "üsleri eşitleyip denklemi çöz.",
             "**3)** Taban eşitlenemiyorsa **üsleri eşitlemeyi** dene "
             "(a^n = b^n ise a = b, n tekse).",
             "**Uyarı**: Taban **1, 0 veya −1** ise bu kural özel durum yaratır; "
             "TYT'de genellikle taban pozitif ve 1'den farklı verilir.",
         ]},
        {"tur": "cozum",
         "baslik": "Taban Eşitleyerek Çözme",
         "soru": "**2^(x+1) = 32** denkleminde **x** kaçtır?",
         "adimlar": [
             "Sağ tarafı **2 tabanına** çevir: 32 = 2 × 2 × 2 × 2 × 2 = **2^5**.",
             "Denklem: 2^(x+1) = 2^5.",
             "Tabanlar eşit olduğu için **üsler eşitlenir**: x + 1 = 5.",
             "x = 5 − 1.",
         ],
         "sonuc": "x = 4'tür."},
        {"tur": "cozum",
         "baslik": "Farklı Tabanları Eşitleme",
         "soru": "**4^(x) = 8^(x−1)** denkleminde **x** kaçtır?",
         "adimlar": [
             "Her iki tarafı **2 tabanına** getir: 4 = 2^2, 8 = 2^3.",
             "Sol taraf: (2^2)^x = **2^(2x)**. Sağ taraf: (2^3)^(x−1) = "
             "**2^(3x−3)**.",
             "Tabanlar eşit → üsleri eşitle: 2x = 3x − 3.",
             "−x = −3 → x = **3**.",
         ],
         "sonuc": "x = 3'tür."},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Bilimsel Gösterim"},
        {"tur": "formul",
         "baslik": "Bilimsel gösterim",
         "ifade": "a × 10^n           (1 ≤ a < 10  ve  n tam sayı)",
         "terimler": [
             ("a", "**Katsayı** — mutlaka **1 ile 10 arasında** (10 dâhil değil)"),
             ("n", "**10'un kuvveti** — virgülün kaç basamak kaydığı"),
             ("n pozitifse", "Sayı **1'den büyüktür** (virgül sağa kaymıştır)"),
             ("n negatifse", "Sayı **1'den küçüktür** (virgül sola kaymıştır)"),
         ],
         "not": "Katsayı **10 veya daha büyük olamaz**. 25 × 10^3 bilimsel "
                "gösterim **değildir**; doğrusu **2,5 × 10^4**'tür."},
        {"tur": "cozum",
         "baslik": "Bilimsel Gösterime Çevirme",
         "soru": "**0,00045** sayısını bilimsel gösterimle yazınız.",
         "adimlar": [
             "Virgülü, **ilk sıfırdan farklı rakamın sağına** taşı: **4,5**.",
             "Virgül **sağa doğru 4 basamak** kaydı.",
             "Sayı 1'den küçük olduğu için üs **negatiftir**: 10^(−4).",
         ],
         "sonuc": "0,00045 = 4,5 × 10^(−4)."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**a^0 = 1** (a ≠ 0). **0^0 tanımsızdır.**",
            "**Çarpmada üsler toplanır**, **bölmede çıkarılır**, "
            "**kuvvetin kuvvetinde çarpılır**.",
            "**Toplamada üs kuralı yoktur** — ortak parantez al.",
            "**a^(−n) = 1/a^n**; negatif üs işareti **değiştirmez**.",
            "**(a/b)^(−n) = (b/a)^n** — kesir ters çevrilir.",
            "**(−2)^4 = 16**, **−2^4 = −16**.",
            "Negatif tabanda: **çift üs pozitif**, **tek üs negatif**.",
            "Üslü denklemde **tabanları eşitle, üsleri eşitle**.",
            "Bilimsel gösterimde katsayı **1 ≤ a < 10** olmalıdır.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Her soruda **hangi kuralı kullandığını** yaz. Toplama içeren "
            "ifadelerde önce **ortak parantez** almayı dene. Denklemlerde "
            "**tabanı eşitlemeden** üsleri eşitlemeye kalkma.",
        "satir_sayisi": 3,
        "sorular": [
            "Üslü ifadede taban ve üs neyi gösterir?",
            "2^3 işleminin sonucu kaçtır? 2×3 ile farkını açıklayınız.",
            "a^0 kaçtır? Koşulu nedir?",
            "0^0 ifadesi için ne söylenebilir?",
            "1^n ifadesinin sonucu nedir?",
            "(−1)^n ifadesi n çift ve tek iken kaç olur?",
            "(−2)^4 işleminin sonucu kaçtır?",
            "−2^4 işleminin sonucu kaçtır?",
            "Bu iki ifadenin farkını açıklayınız.",
            "(2a)^3 ile 2a^3 arasındaki farkı yazınız.",
            "Tabanları aynı üslü sayılar çarpılırken ne yapılır?",
            "Tabanları aynı üslü sayılar bölünürken ne yapılır?",
            "Kuvvetin kuvveti alınırken ne yapılır?",
            "(a·b)^n ifadesi nasıl açılır?",
            "2^3 · 2^5 işleminin sonucu kaçtır?",
            "(2^3 · 2^5) / 2^6 işleminin sonucu kaçtır?",
            "(3^2)^4 işleminin sonucu üslü biçimde nedir?",
            "5^7 / 5^4 işleminin sonucu kaçtır?",
            "2^3 + 2^4 ifadesi 2^7 midir? Açıklayınız.",
            "2^3 + 2^4 işleminin sonucu kaçtır?",
            "(3^12 + 3^11) / 3^11 işleminin sonucu kaçtır?",
            "(2^10 − 2^9) / 2^9 işleminin sonucu kaçtır?",
            "Üslü toplamlarda hangi yöntem kullanılır?",
            "a^(−n) ifadesi neye eşittir?",
            "2^(−3) işleminin sonucu kaçtır?",
            "Negatif üs sayıyı negatif yapar mı?",
            "(2/3)^(−2) işleminin sonucu kaçtır?",
            "(1/2)^(−3) işleminin sonucu kaçtır?",
            "Kesirde negatif üs ne yapar?",
            "a^(1/n) ifadesi neye eşittir?",
            "8^(1/3) işleminin sonucu kaçtır?",
            "16^(1/2) işleminin sonucu kaçtır?",
            "27^(2/3) işleminin sonucu kaçtır?",
            "Negatif tabanlı üslü sayının işareti neye göre belirlenir?",
            "(−3)^5 işleminin işareti nedir?",
            "(−3)^6 işleminin işareti nedir?",
            "Üslü denklem çözerken izlenen yol nedir?",
            "2^(x+1) = 32 denkleminde x kaçtır?",
            "3^(x) = 81 denkleminde x kaçtır?",
            "4^x = 8^(x−1) denkleminde x kaçtır?",
            "9^x = 27 denkleminde x kaçtır?",
            "2^(2x) = 64 denkleminde x kaçtır?",
            "Bilimsel gösterimin tanımını ve katsayı koşulunu yazınız.",
            "0,00045 sayısını bilimsel gösterimle yazınız.",
            "25 × 10^3 bilimsel gösterim midir? Değilse düzeltiniz.",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**Taban** çarpılan sayıdır; **üs** tabanın kendisiyle kaç kez çarpıldığını gösterir.",
            "2^3 = 2·2·2 = **8**. 2×3 = 6'dır. Üs **çarpma sayısını** gösterir, çarpanı değil.",
            "**1**'dir. Koşul: **a sıfırdan farklı** olmalıdır.",
            "**Tanımsızdır.**",
            "**1**'dir; 1'in her kuvveti 1'dir.",
            "n **çiftse 1**, n **tekse −1**.",
            "**16** (eksi üsse dâhil, üs çift).",
            "**−16** (üs yalnızca 2'ye ait).",
            "Birincisinde eksi **parantez içinde** olduğu için üsse dâhildir. İkincisinde eksi **dışarıdadır**, yalnızca sonucun işaretini belirler.",
            "**(2a)^3 = 8a^3** (üs hem 2'ye hem a'ya dağılır). **2a^3 = 2·a^3** (üs yalnızca a'ya aittir).",
            "**Üsler toplanır**: a^m · a^n = a^(m+n).",
            "**Üsler çıkarılır**: a^m / a^n = a^(m−n).",
            "**Üsler çarpılır**: (a^m)^n = a^(m·n).",
            "**a^n · b^n** biçiminde açılır.",
            "2^(3+5) = 2^8 = **256**.",
            "2^8 / 2^6 = 2^2 = **4**.",
            "3^(2·4) = **3^8**.",
            "5^(7−4) = 5^3 = **125**.",
            "**Değildir.** Üsler yalnızca **çarpmada** toplanır; toplamada üs kuralı yoktur.",
            "8 + 16 = **24**.",
            "Ortak parantez: 3^11(3 + 1) = 3^11 · 4 → 3^11'ler sadeleşir → **4**.",
            "Ortak parantez: 2^9(2 − 1) = 2^9 · 1 → **1**.",
            "**Ortak parantez** alınır; en küçük üslü terim dışarı çıkarılır.",
            "**1 / a^n.**",
            "1/2^3 = **1/8**.",
            "**Yapmaz.** Yalnızca sayıyı **kesre** çevirir; işaret değişmez.",
            "Kesir ters çevrilir: (3/2)^2 = **9/4**.",
            "(2/1)^3 = **8**.",
            "**Kesri ters çevirir** ve üssü pozitif yapar.",
            "**n. dereceden kök a**'ya eşittir.",
            "**2** (2^3 = 8).",
            "**4** (4^2 = 16).",
            "27^(1/3) = 3 → 3^2 = **9**.",
            "**Üsün tek ya da çift** olmasına göre: çift üs **pozitif**, tek üs **negatif** sonuç verir.",
            "**Negatif** (üs tek).",
            "**Pozitif** (üs çift).",
            "İki tarafı **aynı tabana** getir, sonra **üsleri eşitleyip** denklemi çöz.",
            "32 = 2^5 → x + 1 = 5 → **x = 4**.",
            "81 = 3^4 → **x = 4**.",
            "(2^2)^x = (2^3)^(x−1) → 2x = 3x − 3 → **x = 3**.",
            "(3^2)^x = 3^3 → 2x = 3 → **x = 3/2**.",
            "64 = 2^6 → 2x = 6 → **x = 3**.",
            "**a × 10^n** biçimidir; katsayı **1 ≤ a < 10** olmalı, n tam sayı olmalıdır.",
            "**4,5 × 10^(−4).**",
            "**Değildir**; katsayı 10'dan büyüktür. Doğrusu **2,5 × 10^4**'tür.",
        ],
    },
}
