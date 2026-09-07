"""TYT Fizik — İş, Güç ve Enerji (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: İŞ, GÜÇ VE ENERJİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "İş, Güç ve Enerji",
    "alt_baslik": "Ham bilgi notu — iş kavramı, kinetik ve potansiyel enerji, "
                  "enerjinin korunumu ve verim; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "İş, Güç ve Enerji",
        "kazanimlar": "9.7.1.1 — Fiziksel anlamda işi tanımlar ve hesaplar. "
                      "9.7.1.2 — Kinetik ve potansiyel enerjiyi hesaplar. "
                      "9.7.1.3 — Enerjinin korunumunu ve verimi yorumlar.",
        "kapsam": "İş kavramı ve işaret, güç, kinetik enerji, çekim potansiyel "
                  "enerjisi, esneklik potansiyel enerjisi, enerjinin korunumu, "
                  "sürtünmeli ortamda enerji, verim, 45 analiz sorusu",
        "nasil": "Bu konuda **fiziksel iş ile günlük iş** karıştırılır; ilk tuzak "
                 "kutusunu iki kez oku. Enerji sorularında **korunum ilkesini** "
                 "yazıp başlamak neredeyse her soruyu bitirir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Enerjinin korunumu, fizik boyunca kullanacağın en güçlü "
                    "araçtır; burada sağlam kur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "İş"},
        {"tur": "formul",
         "baslik": "İş bağıntısı",
         "ifade": "W = F · x",
         "terimler": [
             ("W", "**İş** — joule (J)"),
             ("F", "**Kuvvet** (N) — yer değiştirme **doğrultusundaki** bileşen"),
             ("x", "**Yer değiştirme** (m)"),
         ],
         "not": "**İş yapılabilmesi için iki koşul birden gerekir**: bir **kuvvet "
                "uygulanmalı** ve cisim **yer değiştirmelidir**. İkisinden biri "
                "yoksa iş **sıfırdır**."},
        {"tur": "maddeler", "ogeler": [
            "**İş skaler bir büyüklüktür**; ama **işareti** olabilir.",
            "**Pozitif iş**: Kuvvet ile yer değiştirme **aynı yönlüdür** (itme "
            "kuvveti, cismi ileri götürüyor).",
            "**Negatif iş**: Kuvvet ile yer değiştirme **zıt yönlüdür** "
            "(sürtünme kuvvetinin yaptığı iş **her zaman negatiftir**).",
            "**Sıfır iş**: Kuvvet ile yer değiştirme **birbirine dik** ya da "
            "yer değiştirme **yok**.",
            "**Birim**: 1 joule = 1 newton × 1 metre.",
        ]},
        {"tur": "tuzak", "baslik": "Yorulmak İş Yapmak Değildir", "govde":
            "Elinde ağır bir çanta ile **yatay** yürüyen kişi çok yorulur ama "
            "**çanta için yaptığı iş SIFIRDIR**. Çünkü uyguladığı kuvvet "
            "**yukarı**, yer değiştirme ise **yatay**dır — ikisi birbirine diktir. "
            "Aynı biçimde, duvarı iterken duvar hareket etmiyorsa **iş yapılmamış** "
            "olur. Bu, konudaki en klasik sorudur."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Yer çekimi kuvvetinin yaptığı iş**: Cisim **aşağı** inerken "
            "**pozitif**, **yukarı** çıkarken **negatiftir**.",
            "**Normal kuvvetin yaptığı iş yatay hareket için sıfırdır** (kuvvet "
            "yer değiştirmeye diktir).",
            "**Merkezcil kuvvetin (dairesel hareketteki) yaptığı iş sıfırdır**; "
            "kuvvet her an hıza diktir.",
        ]},
        {"tur": "formul",
         "baslik": "Güç",
         "ifade": "P = W / t          P = F · v",
         "terimler": [
             ("P", "**Güç** — watt (W)"),
             ("W", "**Yapılan iş** (J)"),
             ("t", "**Süre** (s)"),
             ("v", "**Sabit hız** (m/s) — ikinci bağıntı sabit hızlı hareket içindir"),
         ],
         "not": "**Güç, işin ne kadar hızlı yapıldığını** gösterir. Aynı işi "
                "daha kısa sürede yapan makinenin **gücü büyüktür**; ama "
                "**yaptığı iş aynıdır**. Bu ayrım doğrudan sorulur."},
        {"tur": "cozum",
         "baslik": "İş ve Güç Hesabı",
         "soru": "Bir işçi **200 N**'luk kutuyu **5 metre** yukarı, **10 saniyede** "
                 "çıkarıyor. Yapılan iş ve harcanan güç kaçtır?",
         "adimlar": [
             "İş: W = F · x = 200 × 5 = **1000 J**.",
             "Güç: P = W / t = 1000 / 10.",
         ],
         "sonuc": "Yapılan iş 1000 J, güç 100 watt."},

        {"tur": "gorsel", "baslik": "Şema 1 — Kuvvet-yol grafiğinde iş, alandır",
         "aciklama": "Kuvvet sabitse iş **dikdörtgenin alanı**, kuvvet düzgün "
                     "değişiyorsa **üçgenin alanı**dır. Eksenin **altında kalan alan "
                     "negatif iştir** (sürtünme kuvvetinin yaptığı iş gibi). "
                     "Bu yüzden grafikte iş sorulduğunda tek yapılacak şey **alan "
                     "hesaplamaktır**.",
         "ciz": S.grafik_seti([
             ("Sabit kuvvet", "Yol (x)", "Kuvvet (F)",
              [("", [(0, 0.62), (0.94, 0.62)], MARKA)],
              [(0.16, 0.26, "W = **F · x**")],
              [(0, S.ZEMIN_MOR)]),
             ("Düzgün değişen kuvvet", "Yol (x)", "Kuvvet (F)",
              [("", [(0, 0.02), (0.94, 0.88)], BILGI)],
              [(0.06, 0.72, "W = **alan**")],
              [(0, S.ZEMIN_MAVI)]),
         ], ortak_not="İş bir alandır: birimi J (joule), yönü yoktur, işareti vardır.")},
        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Enerji Türleri"},
        {"tur": "formul",
         "baslik": "Mekanik enerjinin üç bileşeni",
         "ifade": "E_k = (m · v²) / 2\nE_p = m · g · h\nE_(es) = (k · x²) / 2",
         "terimler": [
             ("E_k", "**Kinetik enerji** — hareketten doğar"),
             ("E_p", "**Çekim potansiyel enerjisi** — yükseklikten doğar"),
             ("E_(es)", "**Esneklik potansiyel enerjisi** — yaydaki sıkışma/gerilmeden doğar"),
             ("k", "Yay sabiti (N/m), **x** yayın uzama miktarı (m)"),
         ],
         "not": "**Kinetik enerji hızın KARESİYLE** orantılıdır: hız 2 katına "
                "çıkarsa kinetik enerji **4 katına** çıkar. Bu, sorularda en çok "
                "kullanılan çıkarımdır."},
        {"tur": "maddeler", "ogeler": [
            "**Mekanik enerji = Kinetik enerji + Potansiyel enerji.**",
            "**Kinetik enerji hiçbir zaman negatif olamaz** (kütle ve hızın karesi "
            "pozitiftir).",
            "**Potansiyel enerji, seçilen referans (sıfır) düzlemine göre** "
            "hesaplanır; referans değişirse değeri değişir.",
            "**Diğer enerji türleri**: ısı, ışık, ses, elektrik, kimyasal, "
            "nükleer enerji.",
        ]},
        {"tur": "cozum",
         "baslik": "Hız İki Katına Çıkarsa",
         "soru": "Bir aracın hızı **2 katına** çıkarılırsa kinetik enerjisi kaç "
                 "katına çıkar? Fren mesafesi nasıl değişir?",
         "adimlar": [
             "E_k = m·v²/2 bağıntısında hız yerine 2v yaz.",
             "E_k' = m·(2v)² / 2 = m·4v² / 2 = **4 × (m·v²/2)**.",
             "Kinetik enerji **4 katına** çıkar.",
             "Fren mesafesi, sürtünme kuvvetinin bu enerjiyi yutmasıyla belirlenir; "
             "enerji 4 katına çıktığı için mesafe de **4 katına** çıkar.",
         ],
         "sonuc": "Kinetik enerji 4 katına, fren mesafesi 4 katına çıkar."},
        {"tur": "cikmis", "baslik": "Hız sınırı sorusu", "govde":
            "'Neden hız sınırı vardır?' sorusunun fizik cevabı: kinetik enerji "
            "**hızın karesiyle** artar. Hızı %50 artırmak kinetik enerjiyi **iki "
            "kattan fazla** artırır; çarpışmada açığa çıkan enerji ve fren mesafesi "
            "de o oranda büyür."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Enerjinin Korunumu"},
        {"tur": "gorsel", "baslik": "Şema 2 — Düşerken enerjinin paylaşımı",
         "aciklama": "Serbest düşen cisimde **potansiyel enerji azalırken kinetik "
                     "enerji tam o kadar artar**; toplamları (mekanik enerji) sürtünmesiz "
                     "ortamda **yatay bir doğrudur, değişmez**. İki eğrinin kesiştiği "
                     "yükseklik, E_p = E_k olduğu noktadır; orası **düşüş yolunun tam "
                     "yarısıdır**.",
         "ciz": S.grafik("Yükseklik (h)", "Enerji (E)", [
             ("Potansiyel E_p", [(0, 0.03), (0.94, 0.80)], BILGI),
             ("Kinetik E_k", [(0, 0.80), (0.94, 0.03)], TEHLIKE),
             ("Toplam (sabit)", [(0, 0.83), (0.94, 0.83)], BASARI),
         ], gosterge="sag-alt", kilavuzlar=[(0.47, 0.415)])},
        {"tur": "tanim", "kavram": "Enerjinin korunumu ilkesi",
         "aciklama": "Enerji **yoktan var edilemez, vardan yok edilemez**; yalnızca "
                     "**bir türden diğerine dönüşür** ya da bir cisimden diğerine "
                     "aktarılır. Toplam enerji **sabittir**."},
        {"tur": "gorsel", "baslik": "Şema 3 — Serbest düşmede enerji dönüşümü",
         "aciklama": "Sürtünmesiz ortamda **toplam mekanik enerji sabittir**: "
                     "potansiyel enerji azalırken kinetik enerji **aynı miktarda** "
                     "artar.",
         "ciz": S.akis(
             ["En yüksek nokta", "Yarı yükseklik", "Yere değme anı"],
             ["**E_p en büyük**\nE_k = 0", "E_p ve E_k **eşit**",
              "**E_k en büyük**\nE_p = 0"])},
        {"tur": "formul",
         "baslik": "Sürtünmesiz ortamda korunum",
         "ifade": "E_(k1) + E_(p1)  =  E_(k2) + E_(p2)",
         "terimler": [
             ("Sol taraf", "**Başlangıçtaki** kinetik + potansiyel enerji"),
             ("Sağ taraf", "**Sonraki** kinetik + potansiyel enerji"),
         ],
         "not": "**Sürtünme varsa** eşitlik bozulmaz; kaybolan mekanik enerji "
                "**ısıya dönüşmüştür**: Ebaşlangıç = E_(son) + **Isı (sürtünme işi)**."},
        {"tur": "cozum",
         "baslik": "Enerjinin Korunumu Uygulaması",
         "soru": "**20 metre** yükseklikten serbest bırakılan **2 kg** kütleli "
                 "cismin yere çarpma hızı kaçtır? (g = 10 m/s², sürtünme yok)",
         "adimlar": [
             "Başlangıçta yalnızca **potansiyel enerji** var: "
             "E_p = m·g·h = 2 × 10 × 20 = **400 J**.",
             "Yere değme anında yalnızca **kinetik enerji** var.",
             "Korunum: E_p = E_k → 400 = m·v²/2 = 2·v²/2 = **v²**.",
             "v² = 400 → v = √(400).",
         ],
         "sonuc": "Yere çarpma hızı 20 m/s'dir."},
        {"tur": "taktik", "baslik": "Enerji Sorusunu Çözme Sırası", "govde":
            "Enerji sorularında dinamik denklemlerle uğraşma; korunumu kullan:",
         "ogeler": [
             "**1)** Başlangıç ve bitiş noktalarını seç.",
             "**2)** Her noktada **hangi enerji türlerinin** olduğunu yaz "
             "(yükseklik varsa E_p, hız varsa E_k).",
             "**3)** **Sürtünme var mı** diye bak. Yoksa doğrudan eşitle.",
             "**4)** Sürtünme varsa **kayıp enerjiyi ısı** olarak sağ tarafa ekle.",
             "**5)** Kütle çoğu zaman **sadeleşir** — sonuç kütleden bağımsız çıkar.",
         ]},
        {"tur": "tuzak", "baslik": "Sürtünmede Enerji Kaybolmaz", "govde":
            "'Sürtünme nedeniyle enerji kayboldu' ifadesi **fizik dilinde "
            "yanlıştır**. Enerji kaybolmaz; **ısıya ve sese dönüşür**. Doğru "
            "ifade: 'mekanik enerjinin bir kısmı ısı enerjisine dönüştü'dür."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Verim"},
        {"tur": "formul",
         "baslik": "Verim",
         "ifade": "Verim = (Yararlı enerji / Verilen enerji) × 100",
         "terimler": [
             ("Yararlı enerji", "İstenen işe dönüşen enerji"),
             ("Verilen enerji", "Sisteme verilen **toplam** enerji"),
             ("Kayıp", "Verilen − Yararlı (genellikle **ısı** olarak kaybedilir)"),
         ],
         "not": "**Verim hiçbir zaman %100 olamaz.** Her makinede sürtünme, ısınma "
                "ve ses nedeniyle bir miktar kayıp vardır. '%100 verimli makine' "
                "sorularda **her zaman yanlış** şıktır."},
        {"tur": "cozum",
         "baslik": "Verim Hesabı",
         "soru": "Bir motora **500 J** enerji veriliyor; motor **350 J**'lük "
                 "yararlı iş üretiyor. Verim yüzde kaçtır? Kayıp enerji kaçtır?",
         "adimlar": [
             "Verim = (350 / 500) × 100.",
             "Verim = 0,7 × 100 = **%70**.",
             "Kayıp = 500 − 350 = **150 J** (ısı ve ses olarak).",
         ],
         "sonuc": "Verim %70, kayıp enerji 150 J."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Basit makineler** (kaldıraç, makara, eğik düzlem, vida, çıkrık) "
            "**kuvvetten kazandırır**; ama **işten kazandırmaz**. Kuvvet azalırken "
            "**yol artar**.",
            "**Sürtünmesiz basit makinede**: yapılan iş girişte ve çıkışta "
            "**eşittir**. Sürtünmeli olanda giriş işi daha büyüktür.",
            "**Yenilenebilir enerji kaynakları**: güneş, rüzgâr, hidroelektrik, "
            "jeotermal, biyokütle, dalga. **Yenilenemeyen**: kömür, petrol, "
            "doğal gaz, nükleer yakıt.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**W = F · x**; kuvvet ve yer değiştirme **dik ise iş sıfırdır**.",
            "**Sürtünmenin yaptığı iş her zaman negatiftir.**",
            "**P = W/t**; aynı işi hızlı yapan **daha güçlüdür**, işi aynıdır.",
            "**E_k = m·v²/2** — hız 2 katına çıkarsa E_k **4 katına** çıkar.",
            "**E_p = m·g·h** — referans düzleme göre değişir.",
            "Sürtünmesizde **E_k + E_p sabittir**; sürtünmelide fark **ısıya** dönüşür.",
            "**Verim asla %100 olamaz.**",
            "Basit makineler **kuvvetten kazandırır, işten kazandırmaz**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "İş sorularında önce **kuvvet ile yer değiştirmenin açısına** bak. "
            "Enerji sorularında **korunum denklemini yaz**, sonra sayıları koy. "
            "Kütlenin sadeleştiği yerleri fark etmeye çalış.",
        "satir_sayisi": 2,
        "sorular": [
            "Fiziksel anlamda iş yapılabilmesi için gereken iki koşulu yazınız.",
            "İş bağıntısını ve birimini yazınız.",
            "1 joule'ü tanımlayınız.",
            "İş skaler mi vektörel midir? İşareti olabilir mi?",
            "İşin pozitif olduğu durumu açıklayınız.",
            "İşin negatif olduğu durumu açıklayınız.",
            "Sürtünme kuvvetinin yaptığı iş neden her zaman negatiftir?",
            "Elinde çanta ile yatay yürüyen kişinin çanta için yaptığı iş kaçtır? Neden?",
            "Duvarı iten ama duvarı hareket ettiremeyen kişi iş yapmış olur mu?",
            "Yer çekimi kuvvetinin işi cisim yukarı çıkarken nasıldır?",
            "Dairesel hareketteki merkezcil kuvvetin yaptığı iş kaçtır? Neden?",
            "200 N'luk cismi 5 m yukarı çıkarmak için yapılan iş kaçtır?",
            "Aynı iş 10 saniyede yapılıyorsa güç kaçtır?",
            "Güç bağıntılarını yazınız ve birimini belirtiniz.",
            "Aynı işi farklı sürelerde yapan iki makinenin işi ve gücü nasıl karşılaştırılır?",
            "Kinetik enerji bağıntısını yazınız.",
            "Kinetik enerji negatif olabilir mi? Neden?",
            "Çekim potansiyel enerjisi bağıntısını yazınız.",
            "Potansiyel enerjinin referans düzlemine bağlı olması ne demektir?",
            "Esneklik potansiyel enerjisi bağıntısını yazınız.",
            "Mekanik enerji neyin toplamıdır?",
            "Hız 2 katına çıkarsa kinetik enerji kaç katına çıkar?",
            "Hız 3 katına çıkarsa kinetik enerji kaç katına çıkar?",
            "Fren mesafesinin hızın karesiyle artmasını açıklayınız.",
            "Hız sınırlarının fiziksel gerekçesini yazınız.",
            "Kütlesi 4 kg, hızı 10 m/s olan cismin kinetik enerjisi kaçtır?",
            "Kütlesi 2 kg olan cisim 15 m yükseklikteyse potansiyel enerjisi kaçtır? (g = 10)",
            "Enerjinin korunumu ilkesini bir cümleyle yazınız.",
            "Serbest düşen bir cisimde en yüksek noktada hangi enerji vardır?",
            "Aynı cisimde yere değme anında hangi enerji vardır?",
            "Yarı yükseklikte iki enerji nasıl karşılaştırılır?",
            "Sürtünmesiz ortamda korunum denklemini yazınız.",
            "Sürtünme varsa denklem nasıl değişir?",
            "20 m yükseklikten bırakılan cismin yere çarpma hızı kaçtır? (g = 10)",
            "Yukarıdaki sonuç cismin kütlesine bağlı mıdır? Neden?",
            "'Sürtünme nedeniyle enerji kayboldu' ifadesindeki hatayı düzeltiniz.",
            "Sürtünmede mekanik enerji hangi enerji türlerine dönüşür?",
            "Verim formülünü yazınız.",
            "500 J verilen bir motor 350 J yararlı iş üretiyorsa verim kaçtır?",
            "Aynı motorda kayıp enerji kaçtır ve neye dönüşmüştür?",
            "Verimin %100 olamamasının nedeni nedir?",
            "Basit makineler işten kazandırır mı? Gerekçelendiriniz.",
            "Basit makinelerde kuvvet azalırken hangi büyüklük artar?",
            "Dört yenilenebilir enerji kaynağı yazınız.",
            "Dört yenilenemeyen enerji kaynağı yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Bir **kuvvet uygulanmalı** ve cisim **yer değiştirmelidir**. İkisinden biri yoksa iş sıfırdır.",
            "**W = F · x.** Birimi **joule (J)**'dür.",
            "**1 newtonluk** kuvvetin, kuvvet doğrultusunda **1 metrelik** yer değiştirme boyunca yaptığı iştir.",
            "**Skalerdir**, ama **işareti olabilir** (pozitif ya da negatif).",
            "Kuvvet ile yer değiştirme **aynı yönlü** olduğunda iş **pozitiftir**.",
            "Kuvvet ile yer değiştirme **zıt yönlü** olduğunda iş **negatiftir**.",
            "Sürtünme kuvveti **her zaman harekete zıt yönlüdür**; kuvvet ile yer değiştirme zıt olduğu için iş negatif çıkar.",
            "**Sıfırdır.** Uygulanan kuvvet **yukarı**, yer değiştirme **yatay**dır; ikisi birbirine **dik** olduğu için iş yapılmaz.",
            "**Olmaz.** Kuvvet uygulanmıştır ama **yer değiştirme yoktur**; iş sıfırdır.",
            "**Negatiftir.** Yer çekimi aşağı, yer değiştirme yukarı yönlüdür.",
            "**Sıfırdır.** Merkezcil kuvvet her an hız vektörüne **diktir**.",
            "W = 200 × 5 = **1000 J**.",
            "P = 1000 / 10 = **100 watt**.",
            "**P = W / t** ve **P = F · v**. Birimi **watt (W)**'tır.",
            "**İşleri eşittir**; kısa sürede yapanın **gücü büyüktür**.",
            "**E_k = m · v² / 2.**",
            "**Olamaz.** Kütle pozitif, hızın karesi de her zaman pozitiftir.",
            "**E_p = m · g · h.**",
            "Yükseklik (h) **seçilen sıfır düzlemine göre** ölçülür; referans değişirse potansiyel enerjinin sayısal değeri de değişir.",
            "**E_(es) = k · x² / 2.** k yay sabiti, x uzama/sıkışma miktarıdır.",
            "**Kinetik enerji + potansiyel enerji.**",
            "**4 katına** (hızın karesiyle orantılıdır).",
            "**9 katına.**",
            "Fren sırasında sürtünme kuvveti **kinetik enerjiyi** yutar. Kinetik enerji hızın karesiyle arttığı için, aynı sürtünme kuvvetiyle durmak için gereken **mesafe de karesiyle** artar.",
            "Kinetik enerji **hızın karesiyle** arttığından, hızdaki küçük artışlar bile çarpışma enerjisini ve fren mesafesini **çok büyütür**.",
            "E_k = 4 × 100 / 2 = **200 J**.",
            "E_p = 2 × 10 × 15 = **300 J**.",
            "Enerji **yoktan var edilemez, vardan yok edilemez**; yalnızca **tür değiştirir** ya da aktarılır. Toplam enerji sabittir.",
            "Yalnızca **potansiyel enerji** vardır (E_k = 0).",
            "Yalnızca **kinetik enerji** vardır (E_p = 0).",
            "**Birbirine eşittir**; potansiyel enerjinin yarısı kinetik enerjiye dönüşmüştür.",
            "**E_(k1) + E_(p1) = E_(k2) + E_(p2).**",
            "Kaybolan mekanik enerji **ısıya dönüşür**: **Ebaşlangıç = E_(son) + Isı (sürtünme işi)**.",
            "E_p = E_k → m·g·h = m·v²/2 → v² = 2·g·h = 2 × 10 × 20 = 400 → v = **20 m/s**.",
            "**Bağlı değildir.** Denklemde kütle **sadeleşir**; sonuç yalnızca g ve h'ye bağlıdır.",
            "Enerji **kaybolmaz**. Doğru ifade: 'mekanik enerjinin bir kısmı **ısı enerjisine dönüştü**'dür.",
            "Ağırlıklı olarak **ısıya**, kısmen de **ses enerjisine** dönüşür.",
            "**Verim = (Yararlı enerji / Verilen enerji) × 100.**",
            "(350 / 500) × 100 = **%70**.",
            "500 − 350 = **150 J**; ağırlıklı olarak **ısı** (ve ses) enerjisine dönüşmüştür.",
            "Her makinede **sürtünme, ısınma ve ses** nedeniyle mutlaka bir miktar enerji kaybı olur; kaybın tamamen önlenmesi mümkün değildir.",
            "**Kazandırmaz.** Kuvvetten kazandırır ama **yoldan kaybettirir**; sürtünmesiz durumda giriş ve çıkış işi **eşittir**.",
            "**Yol (alınan mesafe)** artar.",
            "**Güneş, rüzgâr, hidroelektrik, jeotermal** (biyokütle, dalga da yazılabilir).",
            "**Kömür, petrol, doğal gaz, nükleer yakıt.**",
        ],
    },
}
