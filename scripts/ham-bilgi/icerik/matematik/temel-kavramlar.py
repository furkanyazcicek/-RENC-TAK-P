"""TYT Matematik — Temel Kavramlar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: TEMEL KAVRAMLAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Temel Kavramlar",
    "alt_baslik": "Ham bilgi notu — sayı kümeleri, tek-çift, ardışık sayılar, "
                  "asal sayılar ve işlem önceliği; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Temel Kavramlar",
        "kazanimlar": "Sayı kümelerini tanır ve ilişkilendirir; tek-çift, pozitif-"
                      "negatif ve asal sayı özelliklerini kullanır; ardışık sayı "
                      "problemlerini çözer.",
        "kapsam": "Sayı kümeleri, tek-çift kuralları, pozitif-negatif, ardışık "
                  "sayılar ve toplamları, asal sayılar, işlem önceliği, "
                  "50 alıştırma sorusu",
        "nasil": "Matematik notlarında **okumakla öğrenilmez**. Her çözümlü "
                 "örneği önce **kapat, kendin çöz**, sonra karşılaştır. "
                 "Fasikülü kalemsiz okuma.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Temel kavramlar TYT matematiğin **giriş kapısıdır**; buradaki "
                    "kurallar sonraki bütün konularda kullanılır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Sayı Kümeleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — Sayı kümelerinin iç içe yapısı",
         "aciklama": "Her küme bir üsttekinin **alt kümesidir**: "
                     "**N ⊂ Z ⊂ Q ⊂ R**. İrrasyonel sayılar rasyonellerin "
                     "**dışındadır** ama ikisi birlikte gerçek sayıları oluşturur.",
         "ciz": S.piramit(
             ["Gerçek (Reel) Sayılar — R", "Rasyonel Sayılar — Q",
              "Tam Sayılar — Z", "Doğal Sayılar — N", "Sayma Sayıları"],
             ["Rasyonel + irrasyonel sayıların tamamı",
              "a/b biçiminde yazılabilenler (b sıfırdan farklı)",
              "..., −2, −1, 0, 1, 2, ...",
              "0, 1, 2, 3, ...",
              "1, 2, 3, ... (sıfır yok)"])},
        {"tur": "maddeler", "ogeler": [
            "**Sayma sayıları**: 1, 2, 3, ... **Sıfır dâhil değildir**.",
            "**Doğal sayılar (N)**: 0, 1, 2, 3, ... **Sıfır dâhildir**.",
            "**Tam sayılar (Z)**: ..., −2, −1, 0, 1, 2, ... "
            "**Z+** pozitif tam sayılar, **Z−** negatif tam sayılar, "
            "**sıfır ikisine de dâhil değildir**.",
            "**Rasyonel sayılar (Q)**: **a/b** biçiminde yazılabilen sayılar "
            "(a ve b tam sayı, **b sıfırdan farklı**). Ondalık açılımı **sonlu** "
            "ya da **devirli** olur.",
            "**İrrasyonel sayılar**: a/b biçiminde **yazılamayan** sayılar. "
            "Ondalık açılımı **sonsuz ve devirsizdir**. Örnek: √2, √3, pi.",
            "**Gerçek (reel) sayılar (R)**: Rasyonel ve irrasyonel sayıların "
            "**birleşimidir**.",
        ]},
        {"tur": "tuzak", "baslik": "Her Kök İrrasyonel Değildir", "govde":
            "**√4 = 2**'dir ve bu bir **tam sayıdır**, irrasyonel değildir. "
            "Bir kökün irrasyonel olması için içindeki sayının **tam kare "
            "olmaması** gerekir. √9, √16, √25 rasyoneldir; "
            "√2, √3, √5 irrasyoneldir. Bu ayrım doğrudan sorulur."},
        {"tur": "dikkat", "baslik": "Sıfır Hangi Kümelerdedir?", "govde":
            "**Sıfır**: doğal sayıdır, tam sayıdır, rasyoneldir, gerçek sayıdır. "
            "**Ama sayma sayısı değildir**, **pozitif değildir**, **negatif "
            "değildir**. Ayrıca sıfır **çift** bir sayıdır. Bu beş bilgi "
            "sorularda sürekli kullanılır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Tek ve Çift Sayılar"},
        {"tur": "formul",
         "baslik": "Genel gösterim",
         "ifade": "Çift sayı: 2n            Tek sayı: 2n + 1",
         "terimler": [
             ("n", "Herhangi bir **tam sayı**"),
             ("Dikkat", "**Sıfır çifttir.** Negatif sayılar da tek ya da çift olabilir."),
         ]},
        {"tur": "tablo",
         "basliklar": ["İşlem", "Sonuç", "Örnek"],
         "oranlar": [0.32, 0.24, 0.44],
         "satirlar": [
             ["Çift + Çift", "**Çift**", "4 + 6 = 10"],
             ["Tek + Tek", "**Çift**", "3 + 5 = 8"],
             ["Tek + Çift", "**Tek**", "3 + 4 = 7"],
             ["Çift × Çift", "**Çift**", "4 × 6 = 24"],
             ["Tek × Tek", "**Tek**", "3 × 5 = 15"],
             ["Tek × Çift", "**Çift**", "3 × 4 = 12"],
             ["Çift üzeri n", "**Çift**", "4^2 = 16"],
             ["Tek üzeri n", "**Tek**", "3^2 = 9"],
         ]},
        {"tur": "taktik", "baslik": "Tek-Çift Sorularının Anahtarı", "govde":
            "Uzun kuralları ezberlemek yerine iki cümle yeter:",
         "ogeler": [
             "**Toplamada**: sonucun tek olması için **tek sayıda tek terim** "
             "bulunmalıdır. Tek terim sayısı çiftse toplam çifttir.",
             "**Çarpmada**: çarpanların **içinde bir tane bile çift varsa** "
             "sonuç **çifttir**. Sonucun tek olması için **hepsi tek** olmalıdır.",
             "**Üs alma tek-çiftliği değiştirmez**: tekin her kuvveti tek, "
             "çiftin her kuvveti çifttir.",
         ]},
        {"tur": "cozum",
         "baslik": "Tek-Çift Belirleme",
         "soru": "**a** tek, **b** çift sayılar olmak üzere "
                 "**3a + 2b + 5** ifadesi tek midir çift midir?",
         "adimlar": [
             "**3a**: tek × tek = **tek**.",
             "**2b**: çift × çift = **çift**.",
             "**5**: **tek**.",
             "Toplamda **iki tane tek** terim var (3a ve 5); tek terim sayısı "
             "**çift** olduğu için toplam **çifttir**.",
         ],
         "sonuc": "İfade çift sayıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Pozitif, Negatif ve Çarpım İşareti"},
        {"tur": "maddeler", "ogeler": [
            "**Negatif sayının çift kuvveti pozitif**, **tek kuvveti negatiftir**: "
            "(−2)^2 = 4, (−2)^3 = −8.",
            "**Parantez önemlidir**: **(−2)^4 = 16** ama **−2^4 = −16**. "
            "İkincisinde üs yalnızca 2'ye aittir, eksi dışarıdadır.",
            "Çarpma ve bölmede **negatif çarpan sayısı çiftse sonuç pozitif**, "
            "**tekse negatiftir**.",
            "**a^2 her zaman sıfır ya da pozitiftir**; hiçbir gerçek sayının "
            "karesi negatif olamaz.",
        ]},
        {"tur": "tuzak", "baslik": "Parantezli ve Parantezsiz Üs", "govde":
            "**(−3)^2 = 9** (eksi de üsse dâhil). **−3^2 = −9** (üs yalnızca 3'e "
            "ait, eksi dışarıda). Bu tek karakter farkı, sınavda en çok puan "
            "kaybettiren ayrıntılardan biridir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Ardışık Sayılar"},
        {"tur": "gorsel", "baslik": "Şema 2 — Ardışık sayı formülleri",
         "aciklama": "Ardışık sayı sorularının tamamı **terim sayısı** ve "
                     "**ortalama** üzerinden çözülür: toplam = terim sayısı × "
                     "ortalama, ortalama da **(ilk + son) / 2**'dir. Bu iki cümle "
                     "aşağıdaki formüllerin hepsini üretir.",
         "ciz": S.kartlar([
             ("Terim sayısı", "**(son − ilk) / artış + 1**"),
             ("Toplam", "**terim sayısı × (ilk + son) / 2**"),
             ("1'den n'e kadar", "**n · (n + 1) / 2**"),
             ("İlk n tek sayı", "**n²**"),
             ("İlk n çift sayı", "**n · (n + 1)**"),
             ("Kareler toplamı", "**n(n+1)(2n+1) / 6**"),
         ], sutun=3)},
        {"tur": "formul",
         "baslik": "Ardışık sayıların gösterimi",
         "ifade": "Ardışık tam sayılar: n, n+1, n+2, ...\n"
                  "Ardışık çift sayılar: 2n, 2n+2, 2n+4, ...\n"
                  "Ardışık tek sayılar: 2n+1, 2n+3, 2n+5, ...",
         "terimler": [
             ("Fark", "Ardışık tam sayılarda **1**, ardışık tek/çiftlerde **2**"),
         ]},
        {"tur": "formul",
         "baslik": "Ardışık sayı toplamları",
         "ifade": "1 + 2 + 3 + ... + n  =  n · (n + 1) / 2\n"
                  "İlk n tek sayının toplamı  =  n²\n"
                  "İlk n çift sayının toplamı  =  n · (n + 1)",
         "terimler": [
             ("n", "**Terim sayısı**"),
             ("Uyarı", "İkinci ve üçüncü formülde n, sayının kendisi değil "
                       "**kaçıncı terim** olduğudur"),
         ],
         "not": "**Terim sayısı** = (son terim − ilk terim) / ortak fark + 1. "
                "Bu bağıntıyı bilmeden yukarıdaki formüller kullanılamaz."},
        {"tur": "cozum",
         "baslik": "Ardışık Sayı Toplamı",
         "soru": "**1'den 50'ye kadar** olan doğal sayıların toplamı kaçtır?",
         "adimlar": [
             "Formülü yaz: 1 + 2 + ... + n = n(n+1)/2.",
             "Burada n = **50**.",
             "50 × 51 / 2 = 2550 / 2... dikkat: 50 × 51 = **2550**.",
             "2550 / 2 = **1275**.",
         ],
         "sonuc": "Toplam 1275'tir."},
        {"tur": "cozum",
         "baslik": "Belirli Aralıktaki Toplam",
         "soru": "**20 ile 40 arasındaki** (20 ve 40 dâhil) tam sayıların "
                 "toplamı kaçtır?",
         "adimlar": [
             "1'den 40'a kadar toplam: 40 × 41 / 2 = **820**.",
             "1'den 19'a kadar toplam: 19 × 20 / 2 = **190**.",
             "İstenen toplam = 820 − 190.",
         ],
         "sonuc": "Toplam 630'dur."},
        {"tur": "taktik", "baslik": "Ardışık Sayı Problemlerinde Ortadaki Sayı",
         "govde": "**Tek sayıda ardışık terim** varsa, ortadaki terime **x** demek "
                  "işlemi çok kısaltır:",
         "ogeler": [
             "3 ardışık sayı → **x−1, x, x+1** → toplam = **3x**.",
             "5 ardışık sayı → x−2, x−1, x, x+1, x+2 → toplam = **5x**.",
             "Yani **toplam = terim sayısı × ortadaki terim**.",
             "Toplam veriliyorsa ortadaki terimi bulmak için **terim sayısına böl**.",
             "**Çift sayıda terim** varsa orta yoktur; bu kez ilk terime n demek "
             "daha kolaydır.",
         ]},
        {"tur": "cozum",
         "baslik": "Ortadaki Terim Yöntemi",
         "soru": "Ardışık **beş** tam sayının toplamı **95**'tir. En büyük sayı "
                 "kaçtır?",
         "adimlar": [
             "Ortadaki sayıya **x** diyelim. Beş ardışık sayının toplamı **5x**'tir.",
             "5x = 95 → x = **19**.",
             "Sayılar: 17, 18, **19**, 20, 21.",
             "En büyüğü **21**'dir.",
         ],
         "sonuc": "En büyük sayı 21'dir."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Asal Sayılar"},
        {"tur": "maddeler", "ogeler": [
            "**Asal sayı**: **1 ve kendisinden başka pozitif böleni olmayan**, "
            "1'den büyük doğal sayıdır.",
            "**En küçük asal sayı 2'dir** ve **tek çift asal sayıdır**. Diğer "
            "bütün asal sayılar tektir.",
            "**1 asal değildir**; çünkü yalnızca bir tane pozitif böleni vardır.",
            "İlk asal sayılar: **2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, "
            "41, 43, 47**.",
            "**Aralarında asal**: İki sayının **1'den başka ortak böleni yoksa** "
            "aralarında asaldır. Kendileri asal olmak zorunda değildir "
            "(8 ile 9 aralarında asaldır).",
            "**Ardışık iki doğal sayı her zaman aralarında asaldır.**",
        ]},
        {"tur": "tuzak", "baslik": "Aralarında Asal ≠ Asal", "govde":
            "**8 ve 9** aralarında asaldır (ortak bölenleri yalnızca 1); ama "
            "ikisi de **asal sayı değildir**. 'Aralarında asal olan sayılar "
            "asaldır' ifadesi **yanlıştır**."},
        {"tur": "taktik", "baslik": "Bir Sayının Asal Olup Olmadığını Anlama",
         "govde": "Sayının **kareköküne kadar** olan asal sayılara bölünüp "
                  "bölünmediğine bakılır:",
         "ogeler": [
             "Örnek: **97** asal mı? √97 ≈ 9,8. O hâlde **2, 3, 5, 7**'ye "
             "bölünüyor mu diye bak.",
             "97 çift değil (2'ye bölünmez), rakam toplamı 16 (3'e bölünmez), "
             "5 ile bitmiyor, 7 × 13 = 91 ve 7 × 14 = 98 (7'ye bölünmez).",
             "Hiçbirine bölünmediği için **97 asaldır**.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "İşlem Önceliği"},
        {"tur": "formul",
         "baslik": "İşlem sırası",
         "ifade": "1) Parantez   2) Üs ve kök   3) Çarpma ve bölme   4) Toplama ve çıkarma",
         "terimler": [
             ("Aynı düzeydekiler", "**Soldan sağa** doğru yapılır"),
             ("İç içe parantez", "**En içteki** parantezden başlanır"),
         ],
         "not": "**Çarpma bölmeden, toplama çıkarmadan önce gelmez**; aynı "
                "düzeydedirler ve **soldan sağa** işlem yapılır. "
                "12 ÷ 3 × 2 = **8**'dir, 2 değil."},
        {"tur": "cozum",
         "baslik": "İşlem Önceliği Uygulaması",
         "soru": "**18 ÷ 3 × 2 + 4^2  −  (7 − 5)^3** işleminin sonucu kaçtır?",
         "adimlar": [
             "Önce **parantez**: (7 − 5) = **2**. İfade: 18 ÷ 3 × 2 + 4^2 − 2^3.",
             "Sonra **üsler**: 4^2 = 16, 2³ = 8. İfade: 18 ÷ 3 × 2 + 16 − 8.",
             "**Çarpma ve bölme, soldan sağa**: 18 ÷ 3 = 6, sonra 6 × 2 = **12**. "
             "İfade: 12 + 16 − 8.",
             "**Toplama ve çıkarma, soldan sağa**: 12 + 16 = 28, 28 − 8 = **20**.",
         ],
         "sonuc": "Sonuç 20'dir."},
        {"tur": "tuzak", "baslik": "Bölmeden Sonra Çarpma", "govde":
            "**18 ÷ 3 × 2** işleminde önce **18 ÷ 3 = 6**, sonra **6 × 2 = 12** "
            "yapılır. Çarpmayı önce yapıp 18 ÷ 6 = 3 demek **yanlıştır**. "
            "Çarpma ve bölme **eşit önceliklidir** ve **soldan sağa** işlenir."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**N ⊂ Z ⊂ Q ⊂ R**; irrasyoneller Q'nun dışındadır.",
            "**Sıfır**: doğal, tam, rasyonel ve **çifttir**; ama sayma sayısı, "
            "pozitif ya da negatif **değildir**.",
            "**√4 = 2** rasyoneldir; irrasyonel olmak için içi **tam kare "
            "olmamalıdır**.",
            "Toplamda sonuç **tek terim sayısı tekse tektir**.",
            "Çarpmada **bir tane bile çift varsa sonuç çifttir**.",
            "**(−3)^2 = 9**, **−3^2 = −9**.",
            "**Toplam = terim sayısı × ortadaki terim** (tek sayıda terimde).",
            "**1 asal değildir**; **2 tek çift asaldır**.",
            "İşlem sırası: **parantez → üs → çarpma-bölme → toplama-çıkarma**, "
            "aynı düzeyde **soldan sağa**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 50 Alıştırma"},
        "giris":
            "Matematik fasikülü **kalemle** çözülür. Her sorunun altına yalnızca "
            "sonucu değil, **kullandığın kuralı** da yaz. Takıldığın soruyu "
            "işaretle; cevap anahtarına baktıktan sonra o soruyu **bir gün sonra "
            "tekrar çöz**.",
        "satir_sayisi": 3,
        "sorular": [
            "Sayma sayıları ile doğal sayılar arasındaki farkı yazınız.",
            "Sıfır hangi sayı kümelerine aittir, hangilerine ait değildir?",
            "Rasyonel sayı tanımını yazınız ve ondalık açılımı hakkında ne söylenebilir?",
            "İrrasyonel sayıya üç örnek veriniz.",
            "√4 irrasyonel midir? Gerekçelendiriniz.",
            "√12 rasyonel midir irrasyonel midir?",
            "Bir sayının irrasyonel köklü olması için içindeki sayı nasıl olmalıdır?",
            "0,333... sayısı rasyonel midir? Neden?",
            "Tek ve çift sayının genel gösterimini yazınız.",
            "Sıfır tek midir çift midir?",
            "Tek + Tek işleminin sonucu nedir?",
            "Tek × Çift işleminin sonucu nedir?",
            "a tek, b çift ise 3a + 2b + 5 ifadesi tek midir çift midir?",
            "a tek, b tek ise a·b + a + b ifadesi tek midir çift midir?",
            "Toplamda sonucun tek olması için ne gerekir?",
            "Çarpmada sonucun tek olması için ne gerekir?",
            "(−2)^4 işleminin sonucu kaçtır?",
            "−2^4 işleminin sonucu kaçtır?",
            "(−3)³ işleminin sonucu kaçtır?",
            "(−1) üzeri 2026 kaçtır?",
            "(−1) üzeri 2025 kaçtır?",
            "Negatif bir sayının karesi negatif olabilir mi?",
            "Ardışık üç tam sayının gösterimini yazınız.",
            "Ardışık üç çift sayının gösterimini yazınız.",
            "Terim sayısını veren bağıntıyı yazınız.",
            "1'den 50'ye kadar olan doğal sayıların toplamı kaçtır?",
            "1'den 100'e kadar olan doğal sayıların toplamı kaçtır?",
            "20 ile 40 arasındaki (ikisi dâhil) tam sayıların toplamı kaçtır?",
            "İlk 10 tek sayının toplamı kaçtır?",
            "İlk 8 çift sayının toplamı kaçtır?",
            "Ardışık beş tam sayının toplamı 95 ise en büyüğü kaçtır?",
            "Ardışık üç tam sayının toplamı 51 ise ortadaki kaçtır?",
            "Ardışık yedi tam sayının toplamı 70 ise en küçüğü kaçtır?",
            "Ardışık dört tam sayının toplamı 38 ise en küçüğü kaçtır?",
            "Tek sayıda ardışık terimde toplam ile ortadaki terim arasındaki ilişki nedir?",
            "Asal sayı tanımını yazınız.",
            "En küçük asal sayı kaçtır? Özelliği nedir?",
            "1 neden asal sayı değildir?",
            "20'den küçük asal sayıları yazınız.",
            "97 asal mıdır? Yöntemi göstererek karar veriniz.",
            "91 asal mıdır? Gerekçelendiriniz.",
            "Aralarında asal ne demektir?",
            "8 ve 9 aralarında asal mıdır? İkisi asal mıdır?",
            "Ardışık iki doğal sayı için ne söylenebilir?",
            "İşlem önceliği sırasını yazınız.",
            "Aynı öncelikteki işlemler hangi yönde yapılır?",
            "12 ÷ 3 × 2 işleminin sonucu kaçtır?",
            "18 ÷ 3 × 2 + 4^2 − (7 − 5)^3 işleminin sonucu kaçtır?",
            "20 − 3 × 4 + 8 ÷ 2 işleminin sonucu kaçtır?",
            "(6 + 2)^2 ÷ 4 − 3 × 2 işleminin sonucu kaçtır?",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**Sayma sayıları 1'den başlar** (1, 2, 3, ...); **doğal sayılara sıfır da dâhildir** (0, 1, 2, ...).",
            "**Aittir**: doğal, tam, rasyonel, gerçek sayılar. **Ait değildir**: sayma sayıları, pozitif sayılar, negatif sayılar.",
            "**a/b** biçiminde yazılabilen sayılardır (a, b tam sayı ve b sıfırdan farklı). Ondalık açılımı **sonlu** ya da **devirlidir**.",
            "**√2, √3, pi** (√5, e de yazılabilir).",
            "**İrrasyonel değildir.** √4 = **2**'dir; bir tam sayıdır, dolayısıyla rasyoneldir.",
            "**İrrasyoneldir.** 12 tam kare değildir; √12 = 2·√3 biçimine iner ama √3 irrasyoneldir.",
            "İçindeki sayı **tam kare olmamalıdır**.",
            "**Rasyoneldir.** Ondalık açılımı **devirlidir** (1/3 biçiminde yazılabilir).",
            "**Çift: 2n**, **Tek: 2n + 1** (n tam sayı).",
            "**Çifttir.**",
            "**Çift.**",
            "**Çift.**",
            "3a **tek**, 2b **çift**, 5 **tek** → iki tek terim var, tek terim sayısı çift → **çifttir**.",
            "a·b **tek**, a **tek**, b **tek** → üç tek terim, tek terim sayısı tek → **tektir**.",
            "İfadedeki **tek terim sayısının tek** olması gerekir.",
            "**Bütün çarpanların tek** olması gerekir; bir tane bile çift varsa sonuç çifttir.",
            "**16** (eksi de üsse dâhil, üs çift).",
            "**−16** (üs yalnızca 2'ye ait, eksi dışarıda).",
            "**−27** (üs tek olduğu için işaret negatif kalır).",
            "**1** (üs çift).",
            "**−1** (üs tek).",
            "**Olamaz.** Gerçek sayılarda karesi alınan her sayının sonucu sıfır ya da pozitiftir.",
            "**n, n+1, n+2** (ya da x−1, x, x+1).",
            "**2n, 2n+2, 2n+4.**",
            "**Terim sayısı = (son terim − ilk terim) / ortak fark + 1.**",
            "50 × 51 / 2 = **1275**.",
            "100 × 101 / 2 = **5050**.",
            "820 − 190 = **630**.",
            "n² = 10² = **100**.",
            "n(n+1) = 8 × 9 = **72**.",
            "5x = 95 → x = 19 → sayılar 17, 18, 19, 20, 21 → en büyük **21**.",
            "3x = 51 → **x = 17**.",
            "7x = 70 → x = 10 (ortadaki) → sayılar 7, 8, 9, 10, 11, 12, 13 → en küçük **7**.",
            "n + (n+1) + (n+2) + (n+3) = 4n + 6 = 38 → 4n = 32 → **n = 8**.",
            "**Toplam = terim sayısı × ortadaki terim.**",
            "**1 ve kendisinden başka pozitif böleni olmayan**, 1'den büyük doğal sayıdır.",
            "**2**'dir. **Tek çift asal sayıdır**; diğer bütün asal sayılar tektir.",
            "Yalnızca **bir tane** pozitif böleni vardır (kendisi); tanım gereği asal sayının **iki** böleni olmalıdır.",
            "**2, 3, 5, 7, 11, 13, 17, 19.**",
            "√97 ≈ 9,8 → 2, 3, 5, 7'ye bölünüyor mu bakılır. Hiçbirine bölünmez → **asaldır**.",
            "**Asal değildir.** 91 = **7 × 13**.",
            "İki sayının **1'den başka ortak böleni bulunmamasıdır**.",
            "**Aralarında asaldır** (ortak bölenleri yalnızca 1). Ama **ikisi de asal sayı değildir**.",
            "**Her zaman aralarında asaldır.**",
            "**1) Parantez, 2) Üs ve kök, 3) Çarpma ve bölme, 4) Toplama ve çıkarma.**",
            "**Soldan sağa.**",
            "12 ÷ 3 = 4, 4 × 2 = **8**.",
            "Parantez: 2. Üsler: 16 ve 8. 18÷3=6, 6×2=12. 12 + 16 − 8 = **20**.",
            "3 × 4 = 12, 8 ÷ 2 = 4 → 20 − 12 + 4 = **12**.",
            "(8)² = 64, 64 ÷ 4 = 16, 3 × 2 = 6 → 16 − 6 = **10**.",
        ],
    },
}
