"""TYT Matematik — Köklü Sayılar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: KÖKLÜ SAYILAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Köklü Sayılar",
    "alt_baslik": "Ham bilgi notu — kök kuralları, kök dışına çıkarma, paydayı "
                  "rasyonel yapma ve kök sıralama; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Köklü Sayılar",
        "kazanimlar": "Köklü ifadelerde işlem yapar; kök dışına çıkarma ve "
                      "içine alma işlemlerini uygular; paydayı rasyonel yapar.",
        "kapsam": "Kök tanımı, kök kuralları, kök dışına çıkarma ve içine alma, "
                  "köklü ifadelerde dört işlem, paydayı rasyonel yapma, eşlenik, "
                  "kök sıralama, 45 alıştırma",
        "nasil": "Köklü sayılar üslü sayıların **başka bir yazımıdır**. "
                 "Takıldığın her yerde **kökü üslü biçime çevir** — kurallar "
                 "kendiliğinden çalışır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Kök sorularında en çok puan **paydayı rasyonel yapma** "
                    "adımında kaybedilir; o bölümü atlama.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Tanım ve Temel Kurallar"},
        {"tur": "formul",
         "baslik": "Kök ile üs ilişkisi",
         "ifade": "n. dereceden kök (a^m)  =  a^(m/n)",
         "terimler": [
             ("n", "**Kök derecesi** — yazılmazsa **2** kabul edilir (karekök)"),
             ("a", "**Kök içindeki sayı** (radikand)"),
             ("Kural", "Çift dereceli kökte **içerideki sayı negatif olamaz** "
                       "(gerçek sayılarda)"),
         ],
         "not": "**Karekökün sonucu her zaman pozitiftir (ya da sıfırdır).** "
                "kök 9 = 3'tür; **±3 değildir**. Ama x^2 = 9 denkleminin "
                "**iki kökü** vardır: x = 3 ve x = −3. Bu ayrım çok önemlidir."},
        {"tur": "formul",
         "baslik": "Kök işlem kuralları",
         "ifade": "kök a · kök b = kök (a·b)          kök a / kök b = kök (a/b)\n"
                  "(kök a)^2 = a                       kök (a^2) = |a|",
         "terimler": [
             ("Çarpma-bölme", "**Kök içleri çarpılır/bölünür** (dereceler aynıysa)"),
             ("Toplama-çıkarma", "**Kök içleri toplanmaz!** Yalnızca **benzer "
                                 "köklü terimler** toplanabilir"),
         ],
         "not": "**kök 9 + kök 16 = kök 25 DEĞİLDİR.** Doğrusu 3 + 4 = **7**'dir; "
                "kök 25 = 5'tir. Toplamada kök içleri **asla** birleştirilmez."},
        {"tur": "tuzak", "baslik": "Kök İçinde Toplama Yapılmaz", "govde":
            "Çarpma ve bölmede kök içleri birleşir; **toplama ve çıkarmada "
            "birleşmez**. Toplamada yapılabilecek tek şey, **benzer köklü "
            "terimleri** (kök içi aynı olanları) katsayılarını toplayarak "
            "birleştirmektir: 3·kök2 + 5·kök2 = **8·kök2**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kök Dışına Çıkarma ve İçine Alma"},
        {"tur": "taktik", "baslik": "Kök Dışına Çıkarma Yöntemi", "govde":
            "Bu, konunun en çok kullanılan işlemidir:",
         "ogeler": [
             "**1)** Kök içindeki sayıyı **asal çarpanlarına ayır**.",
             "**2)** Karekök için çarpanları **ikişerli** grupla "
             "(küpkök için üçerli).",
             "**3)** Her ikili gruptan **bir tane** dışarı çıkar.",
             "**4)** Eşleşmeyen çarpanlar **kök içinde kalır**.",
             "Örnek: kök 72 → 72 = 2^3 · 3^2 → ikişerli: (2·2)·(3·3)·2 → "
             "dışarı 2 ve 3 çıkar → **6·kök 2**.",
         ]},
        {"tur": "cozum",
         "baslik": "Kök Dışına Çıkarma",
         "soru": "**kök 180** ifadesini en sade biçimde yazınız.",
         "adimlar": [
             "180'i asal çarpanlarına ayır: 180 = 2^2 · 3^2 · 5.",
             "İkişerli grupları belirle: **2^2** ve **3^2** tam çift üslü; "
             "**5** tek kalıyor.",
             "2^2'den **2**, 3^2'den **3** dışarı çıkar → dışarıda 2 × 3 = **6**.",
             "İçeride **5** kalır.",
         ],
         "sonuc": "kök 180 = 6·kök 5."},
        {"tur": "cozum",
         "baslik": "Kök İçine Alma",
         "soru": "**3·kök 5** ifadesini tek bir kök içinde yazınız.",
         "adimlar": [
             "Dışarıdaki sayı kök içine girerken **karesi alınır** "
             "(karekök olduğu için).",
             "3 → 3^2 = **9**.",
             "İçerideki sayıyla çarp: 9 × 5 = **45**.",
         ],
         "sonuc": "3·kök 5 = kök 45."},
        {"tur": "dikkat", "baslik": "İçeri Girerken Üs, Dışarı Çıkarken Kök", "govde":
            "Kök **derecesi kaçsa** dışarıdaki sayı içeri girerken **o kuvvete "
            "yükselir**. Karekökte kare alınır, küpkökte küpü alınır. "
            "Ters yönde ise kök alınır. Bu simetriyi aklında tut."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Köklü İfadelerde Dört İşlem"},
        {"tur": "maddeler", "ogeler": [
            "**Toplama-çıkarma**: Yalnızca **kök içleri aynı** olan terimler "
            "birleştirilir; **katsayılar toplanır**, kök aynı kalır.",
            "Kök içleri farklı görünse bile **önce sadeleştirilmelidir**: "
            "kök 8 + kök 18 → 2·kök2 + 3·kök2 = **5·kök2**.",
            "**Çarpma**: Katsayılar katsayılarla, kök içleri kök içleriyle "
            "çarpılır: (2·kök3) · (5·kök2) = **10·kök6**.",
            "**Bölme**: Aynı mantık; sonra gerekirse **payda rasyonel yapılır**.",
        ]},
        {"tur": "cozum",
         "baslik": "Köklü Toplama",
         "soru": "**kök 8 + kök 18 − kök 50** işleminin sonucu kaçtır?",
         "adimlar": [
             "Her kökü **sadeleştir**: kök 8 = kök(4·2) = **2·kök2**.",
             "kök 18 = kök(9·2) = **3·kök2**.",
             "kök 50 = kök(25·2) = **5·kök2**.",
             "Hepsi **kök2** cinsinden; katsayıları topla: 2 + 3 − 5 = **0**.",
         ],
         "sonuc": "Sonuç 0'dır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Paydayı Rasyonel Yapma"},
        {"tur": "taktik", "baslik": "İki Farklı Durum, İki Farklı Yöntem", "govde":
            "Paydada kök varsa ondan kurtulmak gerekir; yöntem paydanın "
            "yapısına göre değişir:",
         "ogeler": [
             "**Payda tek terimliyse** (kök a biçiminde): pay ve paydayı "
             "**aynı kökle** çarp. Örnek: 1/kök3 → (kök3)/(kök3 · kök3) = "
             "**kök3 / 3**.",
             "**Payda iki terimliyse** (a + kök b biçiminde): pay ve paydayı "
             "paydanın **EŞLENİĞİYLE** çarp. Eşlenik, **ortadaki işaretin "
             "değiştirilmiş** hâlidir.",
             "Eşlenikle çarpınca payda **iki kare farkı** olur ve kökler "
             "kaybolur: (a + kök b)(a − kök b) = **a^2 − b**.",
         ]},
        {"tur": "cozum",
         "baslik": "Tek Terimli Paydayı Rasyonel Yapma",
         "soru": "**6 / kök 3** ifadesinin paydasını rasyonel yapınız.",
         "adimlar": [
             "Pay ve paydayı **kök 3** ile çarp.",
             "Pay: 6 · kök3 = **6·kök3**.",
             "Payda: kök3 · kök3 = **3**.",
             "İfade: 6·kök3 / 3 → sadeleştir → **2·kök3**.",
         ],
         "sonuc": "6 / kök 3 = 2·kök 3."},
        {"tur": "cozum",
         "baslik": "Eşlenikle Paydayı Rasyonel Yapma",
         "soru": "**4 / (3 − kök 5)** ifadesinin paydasını rasyonel yapınız.",
         "adimlar": [
             "Paydanın eşleniği: ortadaki işaret değişir → **3 + kök 5**.",
             "Pay ve paydayı bu eşlenikle çarp.",
             "Payda: (3 − kök5)(3 + kök5) = 3^2 − (kök5)^2 = 9 − 5 = **4**.",
             "Pay: 4 · (3 + kök5) = **12 + 4·kök5**.",
             "İfade: (12 + 4·kök5) / 4 → 4'e böl → **3 + kök5**.",
         ],
         "sonuc": "4 / (3 − kök 5) = 3 + kök 5."},
        {"tur": "tuzak", "baslik": "Eşlenikte Yalnızca Ortadaki İşaret Değişir",
         "govde": "**(3 − kök5)** ifadesinin eşleniği **(3 + kök5)**'tir. "
                  "**(−3 + kök5)** ya da **(−3 − kök5)** değildir. Terimlerin "
                  "kendi işaretleri korunur; yalnızca **aralarındaki işlem "
                  "işareti** ters çevrilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Kökleri Sıralama"},
        {"tur": "taktik", "baslik": "Kök Sıralamanın İki Yolu", "govde":
            "Kökleri karşılaştırmak için dereceler eşit mi diye bak:",
         "ogeler": [
             "**Dereceler aynıysa**: **kök içi büyük olan büyüktür**. "
             "(kök 7 > kök 5)",
             "**Dereceler farklıysa**: **dereceleri eşitle**. Derecelerin "
             "**OKEK'i** alınır ve kökler o dereceye çevrilir.",
             "**Kök dışındaki katsayıları içeri al**, sonra kök içlerini "
             "karşılaştır: 2·kök3 ile 3·kök2 → kök12 ile kök18 → "
             "**3·kök2 büyüktür**.",
             "**1'den küçük sayılarda ters döner**: kök 0,25 = 0,5'tir ve "
             "**0,25'ten büyüktür**. Sayı 1'den küçükse kökü **kendisinden "
             "büyüktür**.",
         ]},
        {"tur": "cozum",
         "baslik": "Katsayıları İçeri Alarak Sıralama",
         "soru": "**2·kök 3** ile **3·kök 2** sayılarından hangisi büyüktür?",
         "adimlar": [
             "Katsayıları kök içine al (karesini alarak).",
             "2·kök3 = kök(4 · 3) = **kök 12**.",
             "3·kök2 = kök(9 · 2) = **kök 18**.",
             "Dereceler aynı, kök içi büyük olan büyüktür: 18 > 12.",
         ],
         "sonuc": "3·kök 2 büyüktür."},
        {"tur": "dikkat", "baslik": "1'den Küçük Sayılarda Kök Büyütür", "govde":
            "Sayı **1'den büyükse** kökü **kendisinden küçüktür** "
            "(kök 9 = 3 < 9). Sayı **0 ile 1 arasındaysa** kökü "
            "**kendisinden büyüktür** (kök 0,25 = 0,5 > 0,25). "
            "Bu ters davranış sıralama sorularında tuzak olarak kullanılır."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**kök (a^m) = a^(m/n)** — kök, üslü yazımın başka bir biçimidir.",
            "**Karekökün sonucu pozitiftir**; ama x^2 = 9 denkleminin **iki** kökü vardır.",
            "**Çarpma-bölmede kök içleri birleşir**, **toplama-çıkarmada birleşmez**.",
            "Kök dışına çıkarmada çarpanlar **ikişerli** gruplanır.",
            "Kök içine alırken sayı **karesi alınarak** girer.",
            "Yalnızca **kök içleri aynı** terimler toplanabilir.",
            "Tek terimli paydada **aynı kökle**, iki terimlide **eşlenikle** çarpılır.",
            "Eşlenikte yalnızca **ortadaki işaret** değişir.",
            "**0 ile 1 arasındaki sayının kökü kendisinden büyüktür.**",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Kök sorularında ilk adım her zaman **sadeleştirmedir**: kök içini "
            "asal çarpanlarına ayır, çıkarabileceklerini çıkar. Payda rasyonel "
            "yaparken **eşleniği doğru yazdığından** emin ol.",
        "satir_sayisi": 3,
        "sorular": [
            "Kök ile üs arasındaki ilişkiyi formülle yazınız.",
            "Kök derecesi yazılmazsa kaç kabul edilir?",
            "Çift dereceli kökte kök içi negatif olabilir mi? Neden?",
            "kök 9 kaçtır? ±3 midir? Açıklayınız.",
            "x^2 = 9 denkleminin kaç kökü vardır?",
            "kök a · kök b işleminin sonucu nedir?",
            "kök a / kök b işleminin sonucu nedir?",
            "kök 9 + kök 16 = kök 25 midir? Doğrusunu yazınız.",
            "kök (a^2) ifadesi neye eşittir?",
            "Kök dışına çıkarma işleminin adımlarını yazınız.",
            "kök 72 ifadesini sadeleştiriniz.",
            "kök 180 ifadesini sadeleştiriniz.",
            "kök 128 ifadesini sadeleştiriniz.",
            "kök 300 ifadesini sadeleştiriniz.",
            "3·kök 5 ifadesini tek kök içinde yazınız.",
            "2·kök 7 ifadesini tek kök içinde yazınız.",
            "Kök içine alırken sayıya ne yapılır?",
            "Köklü ifadelerde toplama nasıl yapılır?",
            "3·kök2 + 5·kök2 işleminin sonucu nedir?",
            "kök 8 + kök 18 işleminin sonucu nedir?",
            "kök 8 + kök 18 − kök 50 işleminin sonucu kaçtır?",
            "kök 12 + kök 27 işleminin sonucu nedir?",
            "(2·kök3) · (5·kök2) işleminin sonucu nedir?",
            "(6·kök10) / (2·kök5) işleminin sonucu nedir?",
            "Paydası kök olan bir ifadede ne yapılır?",
            "Payda tek terimliyse hangi yöntem kullanılır?",
            "6 / kök 3 ifadesinin paydasını rasyonel yapınız.",
            "10 / kök 5 ifadesinin paydasını rasyonel yapınız.",
            "Eşlenik nedir? Nasıl yazılır?",
            "(3 − kök 5) ifadesinin eşleniği nedir?",
            "(kök 7 + 2) ifadesinin eşleniği nedir?",
            "4 / (3 − kök 5) ifadesinin paydasını rasyonel yapınız.",
            "6 / (kök 5 + kök 2) ifadesinin paydasını rasyonel yapınız.",
            "Eşlenikle çarpımda payda neden köksüz olur?",
            "(a + kök b)(a − kök b) çarpımının sonucu nedir?",
            "Dereceleri aynı kökler nasıl sıralanır?",
            "Dereceleri farklı kökler nasıl sıralanır?",
            "2·kök 3 ile 3·kök 2'den hangisi büyüktür?",
            "3·kök 5 ile 5·kök 2'den hangisi büyüktür?",
            "kök 0,25 kaçtır? 0,25'ten büyük müdür küçük müdür?",
            "1'den büyük bir sayının kökü kendisinden büyük müdür küçük müdür?",
            "0 ile 1 arasındaki bir sayının kökü için ne söylenir?",
            "kök 2 · kök 8 işleminin sonucu kaçtır?",
            "(kök 3 + kök 2)^2 işleminin sonucu nedir?",
            "kök 50 / kök 2 işleminin sonucu kaçtır?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**n. dereceden kök (a^m) = a^(m/n).**",
            "**2** (karekök).",
            "**Olamaz** (gerçek sayılarda). Çünkü hiçbir gerçek sayının çift kuvveti negatif olmaz.",
            "**3'tür.** ±3 değildir; **karekökün sonucu her zaman pozitiftir**.",
            "**İki kökü vardır**: x = 3 ve x = −3.",
            "**kök (a·b)** — kök içleri çarpılır.",
            "**kök (a/b)** — kök içleri bölünür.",
            "**Değildir.** kök9 + kök16 = 3 + 4 = **7**; kök25 ise 5'tir. Toplamada kök içleri birleşmez.",
            "**|a|** (a'nın mutlak değeri).",
            "**1)** Kök içini asal çarpanlarına ayır. **2)** Çarpanları ikişerli grupla. **3)** Her gruptan bir tane dışarı çıkar. **4)** Eşleşmeyenler içeride kalır.",
            "72 = 2^3·3^2 → **6·kök 2**.",
            "180 = 2^2·3^2·5 → **6·kök 5**.",
            "128 = 2^7 → **8·kök 2**.",
            "300 = 2^2·3·5^2 → **10·kök 3**.",
            "3^2 · 5 = 45 → **kök 45**.",
            "2^2 · 7 = 28 → **kök 28**.",
            "Kök derecesi kaçsa **o kuvvete yükseltilir**; karekökte **karesi** alınır.",
            "Yalnızca **kök içleri aynı** olan terimler birleştirilir; **katsayılar toplanır**, kök aynı kalır.",
            "**8·kök 2.**",
            "2·kök2 + 3·kök2 = **5·kök 2**.",
            "2·kök2 + 3·kök2 − 5·kök2 = **0**.",
            "2·kök3 + 3·kök3 = **5·kök 3**.",
            "10·kök 6.",
            "3·kök 2.",
            "**Payda rasyonel yapılır** (paydadaki kökten kurtulunur).",
            "Pay ve payda **aynı kökle** çarpılır.",
            "6·kök3 / 3 = **2·kök 3**.",
            "10·kök5 / 5 = **2·kök 5**.",
            "İki terimli bir ifadenin **ortadaki işaretinin değiştirilmiş** hâlidir. (a + kök b) → (a − kök b).",
            "**(3 + kök 5).**",
            "**(kök 7 − 2).**",
            "Payda: 9 − 5 = 4. Pay: 4(3 + kök5) → (12 + 4·kök5)/4 = **3 + kök 5**.",
            "Payda: 5 − 2 = 3. Pay: 6(kök5 − kök2) → **2(kök5 − kök2)**.",
            "Çarpım **iki kare farkı** biçimine dönüşür; kökler kareye yükselince kök işareti kaybolur.",
            "**a^2 − b.**",
            "**Kök içi büyük olan** büyüktür.",
            "**Dereceler eşitlenir** (derecelerin OKEK'i alınır) ya da katsayılar kök içine alınıp kök içleri karşılaştırılır.",
            "kök12 ile kök18 → **3·kök 2 büyüktür**.",
            "kök45 ile kök50 → **5·kök 2 büyüktür**.",
            "**0,5'tir** ve 0,25'ten **büyüktür**.",
            "**Küçüktür** (kök 9 = 3 < 9).",
            "**Kökü kendisinden büyüktür.**",
            "kök 16 = **4**.",
            "3 + 2·kök6 + 2 = **5 + 2·kök 6**.",
            "kök 25 = **5**.",
        ],
    },
}
