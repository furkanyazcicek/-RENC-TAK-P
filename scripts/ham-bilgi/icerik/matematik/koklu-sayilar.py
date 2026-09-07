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
         "ifade": "n. dereceden √(a^m)  =  a^(m/n)",
         "terimler": [
             ("n", "**Kök derecesi** — yazılmazsa **2** kabul edilir (karekök)"),
             ("a", "**Kök içindeki sayı** (radikand)"),
             ("Kural", "Çift dereceli kökte **içerideki sayı negatif olamaz** "
                       "(gerçek sayılarda)"),
         ],
         "not": "**Karekökün sonucu her zaman pozitiftir (ya da sıfırdır).** "
                "√9 = 3'tür; **±3 değildir**. Ama x^2 = 9 denkleminin "
                "**iki kökü** vardır: x = 3 ve x = −3. Bu ayrım çok önemlidir."},
        {"tur": "formul",
         "baslik": "Kök işlem kuralları",
         "ifade": "√a · √b = √(a·b)          √a / √b = √(a/b)\n"
                  "(√a)^2 = a                       √(a^2) = |a|",
         "terimler": [
             ("Çarpma-bölme", "**Kök içleri çarpılır/bölünür** (dereceler aynıysa)"),
             ("Toplama-çıkarma", "**Kök içleri toplanmaz!** Yalnızca **benzer "
                                 "köklü terimler** toplanabilir"),
         ],
         "not": "**√9 + √16 = √25 DEĞİLDİR.** Doğrusu 3 + 4 = **7**'dir; "
                "√25 = 5'tir. Toplamada kök içleri **asla** birleştirilmez."},
        {"tur": "tuzak", "baslik": "Kök İçinde Toplama Yapılmaz", "govde":
            "Çarpma ve bölmede kök içleri birleşir; **toplama ve çıkarmada "
            "birleşmez**. Toplamada yapılabilecek tek şey, **benzer köklü "
            "terimleri** (kök içi aynı olanları) katsayılarını toplayarak "
            "birleştirmektir: 3·√2 + 5·√2 = **8·√2**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kök Dışına Çıkarma ve İçine Alma"},
        {"tur": "gorsel", "baslik": "Şema 2 — Kök dışına çıkarma ve içine alma",
         "aciklama": "İki işlem birbirinin tersidir. **Dışarı çıkarırken** kök "
                     "içindeki tam kare çarpanın karekökü alınır; **içeri alırken** "
                     "dışarıdaki katsayının karesi alınıp içeriyle çarpılır.",
         "ciz": S.karsilastirma(
             "Kök DIŞINA çıkarma",
             ["Kök içini **çarpanlara ayır**",
              "En büyük **tam kare** çarpanı bul",
              "Tam karenin **kökünü al**, dışarı yaz",
              "Örnek: √50 = √(25·2) = **5√2**"],
             "Kök İÇİNE alma",
             ["Dışarıdaki katsayıyı **karesini al**",
              "Kök içindekiyle **çarp**",
              "Tek kök hâline getir",
              "Örnek: 3√2 = √(9·2) = **√18**"],
             "İşe yaradığı yer",
             ["Benzer kökleri **toplamak** için",
              "Kökleri **sıralamak** için",
              "Paydayı **rasyonel yapmak** için"])},
        {"tur": "taktik", "baslik": "Kök Dışına Çıkarma Yöntemi", "govde":
            "Bu, konunun en çok kullanılan işlemidir:",
         "ogeler": [
             "**1)** Kök içindeki sayıyı **asal çarpanlarına ayır**.",
             "**2)** Karekök için çarpanları **ikişerli** grupla "
             "(küpkök için üçerli).",
             "**3)** Her ikili gruptan **bir tane** dışarı çıkar.",
             "**4)** Eşleşmeyen çarpanlar **kök içinde kalır**.",
             "Örnek: √72 → 72 = 2^3 · 3^2 → ikişerli: (2·2)·(3·3)·2 → "
             "dışarı 2 ve 3 çıkar → **6·√2**.",
         ]},
        {"tur": "cozum",
         "baslik": "Kök Dışına Çıkarma",
         "soru": "**√180** ifadesini en sade biçimde yazınız.",
         "adimlar": [
             "180'i asal çarpanlarına ayır: 180 = 2^2 · 3^2 · 5.",
             "İkişerli grupları belirle: **2^2** ve **3^2** tam çift üslü; "
             "**5** tek kalıyor.",
             "2^2'den **2**, 3^2'den **3** dışarı çıkar → dışarıda 2 × 3 = **6**.",
             "İçeride **5** kalır.",
         ],
         "sonuc": "√180 = 6·√5."},
        {"tur": "cozum",
         "baslik": "Kök İçine Alma",
         "soru": "**3·√5** ifadesini tek bir kök içinde yazınız.",
         "adimlar": [
             "Dışarıdaki sayı kök içine girerken **karesi alınır** "
             "(karekök olduğu için).",
             "3 → 3^2 = **9**.",
             "İçerideki sayıyla çarp: 9 × 5 = **45**.",
         ],
         "sonuc": "3·√5 = √45."},
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
            "√8 + √18 → 2·√2 + 3·√2 = **5·√2**.",
            "**Çarpma**: Katsayılar katsayılarla, kök içleri kök içleriyle "
            "çarpılır: (2·√3) · (5·√2) = **10·√6**.",
            "**Bölme**: Aynı mantık; sonra gerekirse **payda rasyonel yapılır**.",
        ]},
        {"tur": "cozum",
         "baslik": "Köklü Toplama",
         "soru": "**√8 + √18 − √50** işleminin sonucu kaçtır?",
         "adimlar": [
             "Her kökü **sadeleştir**: √8 = √(4·2) = **2·√2**.",
             "√18 = √(9·2) = **3·√2**.",
             "√50 = √(25·2) = **5·√2**.",
             "Hepsi **√2** cinsinden; katsayıları topla: 2 + 3 − 5 = **0**.",
         ],
         "sonuc": "Sonuç 0'dır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Paydayı Rasyonel Yapma"},
        {"tur": "taktik", "baslik": "İki Farklı Durum, İki Farklı Yöntem", "govde":
            "Paydada kök varsa ondan kurtulmak gerekir; yöntem paydanın "
            "yapısına göre değişir:",
         "ogeler": [
             "**Payda tek terimliyse** (√a biçiminde): pay ve paydayı "
             "**aynı kökle** çarp. Örnek: 1/√3 → (√3)/(√3 · √3) = "
             "**√3 / 3**.",
             "**Payda iki terimliyse** (a + √b biçiminde): pay ve paydayı "
             "paydanın **EŞLENİĞİYLE** çarp. Eşlenik, **ortadaki işaretin "
             "değiştirilmiş** hâlidir.",
             "Eşlenikle çarpınca payda **iki kare farkı** olur ve kökler "
             "kaybolur: (a + √b)(a − √b) = **a^2 − b**.",
         ]},
        {"tur": "cozum",
         "baslik": "Tek Terimli Paydayı Rasyonel Yapma",
         "soru": "**6 / √3** ifadesinin paydasını rasyonel yapınız.",
         "adimlar": [
             "Pay ve paydayı **√3** ile çarp.",
             "Pay: 6 · √3 = **6·√3**.",
             "Payda: √3 · √3 = **3**.",
             "İfade: 6·√3 / 3 → sadeleştir → **2·√3**.",
         ],
         "sonuc": "6 / √3 = 2·√3."},
        {"tur": "cozum",
         "baslik": "Eşlenikle Paydayı Rasyonel Yapma",
         "soru": "**4 / (3 − √5)** ifadesinin paydasını rasyonel yapınız.",
         "adimlar": [
             "Paydanın eşleniği: ortadaki işaret değişir → **3 + √5**.",
             "Pay ve paydayı bu eşlenikle çarp.",
             "Payda: (3 − √5)(3 + √5) = 3^2 − (√5)^2 = 9 − 5 = **4**.",
             "Pay: 4 · (3 + √5) = **12 + 4·√5**.",
             "İfade: (12 + 4·√5) / 4 → 4'e böl → **3 + √5**.",
         ],
         "sonuc": "4 / (3 − √5) = 3 + √5."},
        {"tur": "tuzak", "baslik": "Eşlenikte Yalnızca Ortadaki İşaret Değişir",
         "govde": "**(3 − √5)** ifadesinin eşleniği **(3 + √5)**'tir. "
                  "**(−3 + √5)** ya da **(−3 − √5)** değildir. Terimlerin "
                  "kendi işaretleri korunur; yalnızca **aralarındaki işlem "
                  "işareti** ters çevrilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Kökleri Sıralama"},
        {"tur": "gorsel", "baslik": "Şema 1 — Köklü sayılar sayı doğrusunda nerede?",
         "aciklama": "Bir köklü sayının **hangi iki tam sayı arasında** olduğunu "
                     "bulmak için altındaki ve üstündeki **tam kareleri** ararsın: "
                     "4 < 5 < 9 olduğu için 2 < √5 < 3'tür. Sıralama sorularının "
                     "çoğu bu tek adımla çözülür.",
         "ciz": S.sayi_dogrusu(
             [(0.00, "0"), (0.20, "1"), (0.40, "2"), (0.60, "3"),
              (0.80, "4"), (1.00, "5")],
             [(0.28, 0.28, "kapali", S.MARKA, "√2 ≈ 1,41"),
              (0.35, 0.35, "kapali", S.BILGI, "√3 ≈ 1,73"),
              (0.45, 0.45, "kapali", S.BASARI, "√5 ≈ 2,24"),
              (0.66, 0.66, "kapali", S.UYARI, "√11 ≈ 3,32")],
             alt_not="√2 ile √3 arasındaki fark, √3 ile √5 arasındakinden büyüktür: kökler seyrekleşerek büyür.")},
        {"tur": "taktik", "baslik": "Kök Sıralamanın İki Yolu", "govde":
            "Kökleri karşılaştırmak için dereceler eşit mi diye bak:",
         "ogeler": [
             "**Dereceler aynıysa**: **kök içi büyük olan büyüktür**. "
             "(√7 > √5)",
             "**Dereceler farklıysa**: **dereceleri eşitle**. Derecelerin "
             "**OKEK'i** alınır ve kökler o dereceye çevrilir.",
             "**Kök dışındaki katsayıları içeri al**, sonra kök içlerini "
             "karşılaştır: 2·√3 ile 3·√2 → √12 ile √18 → "
             "**3·√2 büyüktür**.",
             "**1'den küçük sayılarda ters döner**: √0,25 = 0,5'tir ve "
             "**0,25'ten büyüktür**. Sayı 1'den küçükse kökü **kendisinden "
             "büyüktür**.",
         ]},
        {"tur": "cozum",
         "baslik": "Katsayıları İçeri Alarak Sıralama",
         "soru": "**2·√3** ile **3·√2** sayılarından hangisi büyüktür?",
         "adimlar": [
             "Katsayıları kök içine al (karesini alarak).",
             "2·√3 = √(4 · 3) = **√12**.",
             "3·√2 = √(9 · 2) = **√18**.",
             "Dereceler aynı, kök içi büyük olan büyüktür: 18 > 12.",
         ],
         "sonuc": "3·√2 büyüktür."},
        {"tur": "dikkat", "baslik": "1'den Küçük Sayılarda Kök Büyütür", "govde":
            "Sayı **1'den büyükse** kökü **kendisinden küçüktür** "
            "(√9 = 3 < 9). Sayı **0 ile 1 arasındaysa** kökü "
            "**kendisinden büyüktür** (√0,25 = 0,5 > 0,25). "
            "Bu ters davranış sıralama sorularında tuzak olarak kullanılır."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**√(a^m) = a^(m/n)** — kök, üslü yazımın başka bir biçimidir.",
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
            "√9 kaçtır? ±3 midir? Açıklayınız.",
            "x^2 = 9 denkleminin kaç kökü vardır?",
            "√a · √b işleminin sonucu nedir?",
            "√a / √b işleminin sonucu nedir?",
            "√9 + √16 = √25 midir? Doğrusunu yazınız.",
            "√(a^2) ifadesi neye eşittir?",
            "Kök dışına çıkarma işleminin adımlarını yazınız.",
            "√72 ifadesini sadeleştiriniz.",
            "√180 ifadesini sadeleştiriniz.",
            "√128 ifadesini sadeleştiriniz.",
            "√300 ifadesini sadeleştiriniz.",
            "3·√5 ifadesini tek kök içinde yazınız.",
            "2·√7 ifadesini tek kök içinde yazınız.",
            "Kök içine alırken sayıya ne yapılır?",
            "Köklü ifadelerde toplama nasıl yapılır?",
            "3·√2 + 5·√2 işleminin sonucu nedir?",
            "√8 + √18 işleminin sonucu nedir?",
            "√8 + √18 − √50 işleminin sonucu kaçtır?",
            "√12 + √27 işleminin sonucu nedir?",
            "(2·√3) · (5·√2) işleminin sonucu nedir?",
            "(6·√10) / (2·√5) işleminin sonucu nedir?",
            "Paydası kök olan bir ifadede ne yapılır?",
            "Payda tek terimliyse hangi yöntem kullanılır?",
            "6 / √3 ifadesinin paydasını rasyonel yapınız.",
            "10 / √5 ifadesinin paydasını rasyonel yapınız.",
            "Eşlenik nedir? Nasıl yazılır?",
            "(3 − √5) ifadesinin eşleniği nedir?",
            "(√7 + 2) ifadesinin eşleniği nedir?",
            "4 / (3 − √5) ifadesinin paydasını rasyonel yapınız.",
            "6 / (√5 + √2) ifadesinin paydasını rasyonel yapınız.",
            "Eşlenikle çarpımda payda neden köksüz olur?",
            "(a + √b)(a − √b) çarpımının sonucu nedir?",
            "Dereceleri aynı kökler nasıl sıralanır?",
            "Dereceleri farklı kökler nasıl sıralanır?",
            "2·√3 ile 3·√2'den hangisi büyüktür?",
            "3·√5 ile 5·√2'den hangisi büyüktür?",
            "√0,25 kaçtır? 0,25'ten büyük müdür küçük müdür?",
            "1'den büyük bir sayının kökü kendisinden büyük müdür küçük müdür?",
            "0 ile 1 arasındaki bir sayının kökü için ne söylenir?",
            "√2 · √8 işleminin sonucu kaçtır?",
            "(√3 + √2)^2 işleminin sonucu nedir?",
            "√50 / √2 işleminin sonucu kaçtır?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**n. dereceden √(a^m) = a^(m/n).**",
            "**2** (karekök).",
            "**Olamaz** (gerçek sayılarda). Çünkü hiçbir gerçek sayının çift kuvveti negatif olmaz.",
            "**3'tür.** ±3 değildir; **karekökün sonucu her zaman pozitiftir**.",
            "**İki kökü vardır**: x = 3 ve x = −3.",
            "**√(a·b)** — kök içleri çarpılır.",
            "**√(a/b)** — kök içleri bölünür.",
            "**Değildir.** √9 + √16 = 3 + 4 = **7**; √25 ise 5'tir. Toplamada kök içleri birleşmez.",
            "**|a|** (a'nın mutlak değeri).",
            "**1)** Kök içini asal çarpanlarına ayır. **2)** Çarpanları ikişerli grupla. **3)** Her gruptan bir tane dışarı çıkar. **4)** Eşleşmeyenler içeride kalır.",
            "72 = 2^3·3^2 → **6·√2**.",
            "180 = 2^2·3^2·5 → **6·√5**.",
            "128 = 2^7 → **8·√2**.",
            "300 = 2^2·3·5^2 → **10·√3**.",
            "3^2 · 5 = 45 → **√45**.",
            "2^2 · 7 = 28 → **√28**.",
            "Kök derecesi kaçsa **o kuvvete yükseltilir**; karekökte **karesi** alınır.",
            "Yalnızca **kök içleri aynı** olan terimler birleştirilir; **katsayılar toplanır**, kök aynı kalır.",
            "**8·√2.**",
            "2·√2 + 3·√2 = **5·√2**.",
            "2·√2 + 3·√2 − 5·√2 = **0**.",
            "2·√3 + 3·√3 = **5·√3**.",
            "10·√6.",
            "3·√2.",
            "**Payda rasyonel yapılır** (paydadaki kökten kurtulunur).",
            "Pay ve payda **aynı kökle** çarpılır.",
            "6·√3 / 3 = **2·√3**.",
            "10·√5 / 5 = **2·√5**.",
            "İki terimli bir ifadenin **ortadaki işaretinin değiştirilmiş** hâlidir. (a + √b) → (a − √b).",
            "**(3 + √5).**",
            "**(√7 − 2).**",
            "Payda: 9 − 5 = 4. Pay: 4(3 + √5) → (12 + 4·√5)/4 = **3 + √5**.",
            "Payda: 5 − 2 = 3. Pay: 6(√5 − √2) → **2(√5 − √2)**.",
            "Çarpım **iki kare farkı** biçimine dönüşür; kökler kareye yükselince kök işareti kaybolur.",
            "**a^2 − b.**",
            "**Kök içi büyük olan** büyüktür.",
            "**Dereceler eşitlenir** (derecelerin OKEK'i alınır) ya da katsayılar kök içine alınıp kök içleri karşılaştırılır.",
            "√12 ile √18 → **3·√2 büyüktür**.",
            "√45 ile √50 → **5·√2 büyüktür**.",
            "**0,5'tir** ve 0,25'ten **büyüktür**.",
            "**Küçüktür** (√9 = 3 < 9).",
            "**Kökü kendisinden büyüktür.**",
            "√16 = **4**.",
            "3 + 2·√6 + 2 = **5 + 2·√6**.",
            "√25 = **5**.",
        ],
    },
}
