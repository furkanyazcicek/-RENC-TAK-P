"""TYT Fizik — Hareket ve Kuvvet (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: HAREKET VE KUVVET",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Hareket ve Kuvvet",
    "alt_baslik": "Ham bilgi notu — düzgün ve ivmeli hareket, Newton yasaları, "
                  "sürtünme ve serbest düşme; grafik yorumu ve 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Hareket ve Kuvvet",
        "kazanimlar": "9.6.1.1 — Hareket türlerini ayırt eder ve grafiklerle "
                      "yorumlar. 9.6.1.2 — Newton'un hareket yasalarını uygular. "
                      "9.6.1.3 — Sürtünme kuvvetini açıklar.",
        "kapsam": "Konum-yol-yer değiştirme, sürat-hız, ivme, düzgün doğrusal ve "
                  "düzgün hızlanan hareket, hareket grafikleri, Newton yasaları, "
                  "sürtünme, serbest düşme, 50 analiz sorusu",
        "nasil": "Bu konu **grafik** konusudur. Üç grafiği (konum-zaman, hız-zaman, "
                 "ivme-zaman) birbirine çevirebilmelisin: **hız-zaman grafiğinde "
                 "alan yer değiştirmedir, eğim ivmedir**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT fizikte en çok soru bu konudan gelir; grafikleri "
                    "kâğıda kendin çizmeden geçme.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Hareketin Temel Kavramları"},
        {"tur": "maddeler", "ogeler": [
            "**Konum**: Cismin, seçilen bir başlangıç noktasına göre bulunduğu yer. "
            "**Vektöreldir**.",
            "**Yol**: Alınan **toplam mesafe**. **Skalerdir**, **hiç azalmaz** ve "
            "negatif olamaz.",
            "**Yer değiştirme**: Başlangıç ile bitiş konumu arasındaki **en kısa "
            "doğru**. **Vektöreldir**, sıfır ya da negatif olabilir.",
            "**Sürat = Yol / Zaman** → **skaler**. "
            "**Hız = Yer değiştirme / Zaman** → **vektörel**.",
            "**İvme**: Hızdaki değişimin zamana oranı. **Vektöreldir**, birimi "
            "**m/s²**'dir.",
        ]},
        {"tur": "formul",
         "baslik": "Temel bağıntılar",
         "ifade": "v = Δx / Δt          a = Δv / Δt",
         "terimler": [
             ("v", "**Hız** (m/s)"),
             ("Δx", "**Yer değiştirme** (m)"),
             ("a", "**İvme** (m/s²)"),
             ("Δv", "**Hız değişimi** = son hız − ilk hız"),
         ],
         "not": "**İvme ile hız aynı yönlüyse cisim HIZLANIR**, **zıt yönlüyse "
                "YAVAŞLAR**. İvmenin işareti tek başına hızlanma-yavaşlama bilgisi "
                "vermez; hızla karşılaştırılmalıdır."},
        {"tur": "tuzak", "baslik": "Negatif İvme Her Zaman Yavaşlama Değildir", "govde":
            "Bir cisim **negatif yönde hızlanıyorsa** ivmesi de negatiftir ama "
            "cisim **yavaşlamıyor, hızlanıyordur**. Karar için **hız ve ivmenin "
            "işaretlerini karşılaştır**: aynı işaretliyse hızlanma, zıt işaretliyse "
            "yavaşlama vardır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hareket Türleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki temel hareket türü",
         "ciz": S.karsilastirma(
             "Düzgün Doğrusal Hareket",
             ["Hız **sabit**", "**İvme sıfır**", "Net kuvvet **sıfır**",
              "Eşit zamanda eşit yol", "x = v · t"],
             "Düzgün Hızlanan Hareket",
             ["Hız **düzgün artar/azalır**", "**İvme sabit** ve sıfırdan farklı",
              "Net kuvvet **sabit**", "Eşit zamanda artan yol",
              "x = v_0·t + a·t²/2"],
             "Ortak",
             ["Doğrusal yörünge", "İvme sabittir (biri sıfır)",
              "Grafiklerle incelenir"])},
        {"tur": "formul",
         "baslik": "Düzgün hızlanan hareket bağıntıları",
         "ifade": "v = v_0 + a·t\nx = v_0·t + (a·t²) / 2\nv² = v_0² + 2·a·x",
         "terimler": [
             ("v_0", "**İlk hız** (m/s)"),
             ("v", "**Son hız** (m/s)"),
             ("a", "**İvme** (m/s²)"),
             ("x", "**Yer değiştirme** (m)"),
             ("t", "**Zaman** (s)"),
         ],
         "not": "**Zaman verilmemişse** üçüncü bağıntıyı (v² = v_0² + 2ax) kullan; "
                "bu, soru çözümünde en çok zaman kazandıran seçimdir."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**İlk hızsız (v_0 = 0) hareket** için bağıntılar sadeleşir: "
            "**v = a·t**, **x = a·t²/2**, **v² = 2·a·x**.",
            "İlk hızsız düzgün hızlanan harekette, ardışık eşit zaman aralıklarında "
            "alınan yollar **1 : 3 : 5 : 7 ...** oranındadır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Hareket Grafikleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Düzgün doğrusal hareketin üç grafiği",
         "aciklama": "Hız sabit olduğu için **konum grafiği doğru**dur ve eğimi hızı "
                     "verir; **hız grafiği yatay**dır, altındaki alan yolu verir; "
                     "**ivme sıfır**dır. Üç grafik aynı hareketi üç ayrı pencereden "
                     "gösterir — birini görüp diğer ikisini kurabilmelisin.",
         "ciz": S.grafik_seti([
             ("Konum – Zaman", "t", "x",
              [("", [(0, 0.08), (0.94, 0.90)], MARKA)],
              [(0.10, 0.76, "Eğim = **hız**")]),
             ("Hız – Zaman", "t", "v",
              [("", [(0, 0.60), (0.94, 0.60)], BILGI)],
              [(0.20, 0.24, "Alan = **yol**")],
              [(0, S.ZEMIN_MAVI)]),
             ("İvme – Zaman", "t", "a",
              [("", [(0, 0.03), (0.94, 0.03)], TEHLIKE)],
              [(0.18, 0.30, "**a = 0**")]),
         ], ortak_not="Düzgün doğrusal hareket:  v sabit  ·  a = 0  ·  x = v · t")},
        {"tur": "gorsel", "baslik": "Şema 3 — Düzgün hızlanan hareketin üç grafiği",
         "aciklama": "Sabit ivmede **konum grafiği paraboldür** (giderek dikleşir), "
                     "**hız grafiği eğik doğrudur** (eğimi ivmeyi verir), **ivme "
                     "grafiği yatay doğrudur**. Yavaşlayan harekette hız doğrusu bu "
                     "kez aşağı doğru iner, ivme doğrusu eksenin altına düşer.",
         "ciz": S.grafik_seti([
             ("Konum – Zaman", "t", "x",
              [("", [(0, 0.02), (0.24, 0.07), (0.47, 0.24), (0.71, 0.53),
                     (0.94, 0.92)], MARKA)],
              [(0.10, 0.62, "Parabol")]),
             ("Hız – Zaman", "t", "v",
              [("", [(0, 0.02), (0.94, 0.88)], BILGI)],
              [(0.04, 0.86, "Eğim = **ivme**")],
              [(0, S.ZEMIN_MAVI)]),
             ("İvme – Zaman", "t", "a",
              [("", [(0, 0.55), (0.94, 0.55)], BASARI)],
              [(0.16, 0.24, "**a sabit**")]),
         ], ortak_not="Düzgün hızlanan hareket:  a sabit  ·  v = v_0 + a·t  ·  x = v_0·t + a·t²/2")},
        {"tur": "tablo",
         "basliklar": ["Grafik", "Eğim Neyi Verir?", "Altındaki Alan Neyi Verir?"],
         "oranlar": [0.30, 0.34, 0.36],
         "satirlar": [
             ["**Konum – Zaman**", "**Hız**", "Anlamsızdır"],
             ["**Hız – Zaman**", "**İvme**", "**Yer değiştirme**"],
             ["**İvme – Zaman**", "Anlamsızdır", "**Hız değişimi (Δv)**"],
         ]},
        {"tur": "gorsel", "baslik": "Şema 4 — Hız-zaman grafiğinin okunması",
         "aciklama": "**Yatay doğru** → sabit hız (ivme sıfır). **Yükselen doğru** "
                     "→ hızlanma. **Alçalan doğru** → yavaşlama. "
                     "Eksenin **altındaki alan negatif** yer değiştirmedir.",
         "ciz": S.grafik("Zaman (t)", "Hız (v)", [
             ("Hızlanıyor", [(0, 0.10), (0.30, 0.75)], MARKA),
             ("Sabit hız", [(0.30, 0.75), (0.62, 0.75)], BILGI),
             ("Yavaşlıyor", [(0.62, 0.75), (0.95, 0.08)], TEHLIKE),
         ], gosterge="sol-ust", dolgular=[(1, S.ZEMIN_MAVI)],
            kilavuzlar=[(0.62, 0.75)])},
        {"tur": "taktik", "baslik": "Grafik Sorusunu Çözme Sırası", "govde":
            "Grafik sorularında panik yapma; şu sırayı izle:",
         "ogeler": [
             "**1)** Eksenleri oku. Hangi grafik olduğunu belirle.",
             "**2)** Soruda **ne isteniyor**: yol mu, yer değiştirme mi, hız mı, "
             "ivme mi?",
             "**3)** İstenen **eğimse** doğrunun dikliğine, **alansa** şeklin "
             "alanına bak.",
             "**4)** **Yol** isteniyorsa eksenin altındaki alanı **pozitif** say; "
             "**yer değiştirme** isteniyorsa **negatif** say. Bu ayrım en sık "
             "yapılan hatadır.",
         ]},
        {"tur": "cozum",
         "baslik": "Hız-Zaman Grafiğinden Yol Bulma",
         "soru": "Bir cisim **0-4 s** arasında hızını **0'dan 20 m/s**'ye düzgün "
                 "artırıyor, sonra **4-10 s** arasında **20 m/s** ile sabit hızla "
                 "gidiyor. Toplam yol kaç metredir?",
         "adimlar": [
             "Hız-zaman grafiğinde **alan = yer değiştirme**.",
             "İlk bölüm bir **üçgen**: alan = (taban × yükseklik) / 2 = "
             "(4 × 20) / 2 = **40 m**.",
             "İkinci bölüm bir **dikdörtgen**: alan = taban × yükseklik = "
             "6 × 20 = **120 m**.",
             "Hareket tek yönlü olduğu için yol = yer değiştirme = 40 + 120.",
         ],
         "sonuc": "Toplam yol 160 metredir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Newton'un Hareket Yasaları"},
        {"tur": "tablo",
         "basliklar": ["Yasa", "İfadesi", "Günlük Örnek"],
         "oranlar": [0.22, 0.44, 0.34],
         "satirlar": [
             ["**1. Yasa** (Eylemsizlik)", "Net kuvvet sıfırsa cisim **duruyorsa "
              "durmaya**, hareket ediyorsa **sabit hızla hareketine** devam eder.",
              "Otobüs durunca öne savrulmak"],
             ["**2. Yasa** (Dinamiğin temel ilkesi)", "**F = m · a.** Net kuvvet, "
              "kütle ile ivmenin çarpımıdır. İvme **kuvvetle doğru**, **kütleyle "
              "ters** orantılıdır.", "Aynı kuvvetle dolu ve boş arabayı itmek"],
             ["**3. Yasa** (Etki-tepki)", "Her etkiye **eşit büyüklükte ve zıt "
              "yönlü** bir tepki vardır. Kuvvetler **farklı cisimlere** etki eder.",
              "Yüzerken suyu geriye itmek"],
         ]},
        {"tur": "formul",
         "baslik": "Dinamiğin temel ilkesi",
         "ifade": "F_(net) = m · a",
         "terimler": [
             ("F_(net)", "**Net (bileşke) kuvvet** — newton (N)"),
             ("m", "**Kütle** (kg)"),
             ("a", "**İvme** (m/s²) — **her zaman net kuvvetle aynı yönlüdür**"),
         ],
         "not": "**Net kuvvet sıfırsa ivme de sıfırdır**; bu, cismin durduğu "
                "anlamına gelmez — **sabit hızla** gidiyor da olabilir. "
                "Bu ayrım doğrudan sorulur."},
        {"tur": "tuzak", "baslik": "Etki-Tepki Kuvvetleri Birbirini Dengelemez",
         "govde": "Etki ve tepki kuvvetleri **farklı cisimlere** etki eder; bu "
                  "yüzden **birbirini dengeleyemezler**. Masaya koyduğun kitap "
                  "için: kitabın ağırlığı **Dünya'nın kitaba**, tepki ise "
                  "**kitabın Dünya'ya** uyguladığı kuvvettir. Kitabı dengeleyen "
                  "şey masanın uyguladığı **normal kuvvettir** — bu ayrı bir "
                  "kuvvettir."},
        {"tur": "dikkat", "baslik": "Dengelenmiş Kuvvet ≠ Duruyor", "govde":
            "**Net kuvvet sıfır** olan bir cisim ya **duruyordur** ya da "
            "**sabit hızla düzgün doğrusal hareket** yapıyordur. 'Kuvvetler "
            "dengelenmişse cisim durur' ifadesi **eksiktir**."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Sürtünme Kuvveti"},
        {"tur": "formul",
         "baslik": "Sürtünme kuvveti",
         "ifade": "Fs = k · N",
         "terimler": [
             ("Fs", "**Sürtünme kuvveti** (N) — harekete **zıt** yönlüdür"),
             ("k", "**Sürtünme katsayısı** — yüzeylerin cinsine ve pürüzlülüğüne bağlı"),
             ("N", "**Normal kuvvet** — yüzeyin cisme dik uyguladığı kuvvet"),
         ],
         "not": "Yatay zeminde **N = G (ağırlık)**'dır. Sürtünme kuvveti "
                "**temas yüzeyinin alanına ve cismin hızına bağlı değildir** — "
                "bu, en çok şaşırtan bilgidir."},
        {"tur": "maddeler", "ogeler": [
            "**Sürtünme kuvveti her zaman harekete (ya da hareket eğilimine) "
            "zıt yönlüdür.**",
            "**Sürtünmeyi artıran etkenler**: yüzeyin pürüzlülüğü, normal kuvvetin "
            "(ağırlığın) artması.",
            "**Sürtünmeyi azaltma yolları**: yağlama, rulman ve bilye kullanma, "
            "yüzeyi cilalama, hava yastığı.",
            "**Sürtünmenin yararları**: yürüyebilmek, frenleme, çivinin tahtada "
            "durması, kalemle yazabilmek.",
            "**Zararları**: aşınma, ısınma, enerji kaybı, verimin düşmesi.",
            "**Sürtünmeli ortamda** cismin ivmesi: **a = (F − Fs) / m**.",
        ]},
        {"tur": "cozum",
         "baslik": "Sürtünmeli Ortamda İvme",
         "soru": "Kütlesi **4 kg** olan bir cisme yatay zeminde **20 N**'luk kuvvet "
                 "uygulanıyor. Sürtünme katsayısı **0,25**, g = 10 m/s². Cismin "
                 "ivmesi kaçtır?",
         "adimlar": [
             "Normal kuvveti bul: yatay zeminde N = G = m·g = 4 × 10 = **40 N**.",
             "Sürtünme kuvvetini bul: Fs = k · N = 0,25 × 40 = **10 N**.",
             "Net kuvveti bul: F_(net) = F − Fs = 20 − 10 = **10 N**.",
             "İvmeyi bul: a = F_(net) / m = 10 / 4.",
         ],
         "sonuc": "Cismin ivmesi 2,5 m/s²'dir."},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Serbest Düşme"},
        {"tur": "gorsel", "baslik": "Şema 5 — Serbest düşmenin üç grafiği",
         "aciklama": "Serbest düşme, **ilk hızı sıfır olan düzgün hızlanan "
                     "hareket**tir. Bu yüzden grafikleri Şema 3 ile birebir aynıdır; "
                     "tek fark ivmenin yerçekimi ivmesi **g = 10 m/s²** olmasıdır.",
         "ciz": S.grafik_seti([
             ("Yol – Zaman", "t", "h",
              [("", [(0, 0.02), (0.24, 0.07), (0.47, 0.24), (0.71, 0.53),
                     (0.94, 0.92)], MARKA)],
              [(0.06, 0.66, "h = **g·t²/2**")]),
             ("Hız – Zaman", "t", "v",
              [("", [(0, 0.02), (0.94, 0.88)], BILGI)],
              [(0.06, 0.72, "v = **g·t**")]),
             ("İvme – Zaman", "t", "a",
              [("", [(0, 0.55), (0.94, 0.55)], TEHLIKE)],
              [(0.10, 0.24, "**g = 10 m/s²**")]),
         ], ortak_not="Kütle grafiklerin hiçbirinde yer almaz — bu yüzden ağır cisim daha hızlı düşmez.")},
        {"tur": "maddeler", "ogeler": [
            "**Serbest düşme**: Cismin yalnızca **yer çekimi etkisinde**, ilk hızsız "
            "(v_0 = 0) düşmesidir. **Sürtünme (hava direnci) yoktur**.",
            "İvmesi **yer çekimi ivmesidir**: **g ≈ 10 m/s²** (yaklaşık 9,8).",
            "**Serbest düşmede cismin kütlesi düşme süresini ETKİLEMEZ.** "
            "Boşlukta tüy ile demir aynı anda düşer.",
            "Bağıntılar düzgün hızlanan hareketle aynıdır, yalnızca a yerine g "
            "yazılır: **v = g·t**, **h = g·t²/2**, **v² = 2·g·h**.",
        ]},
        {"tur": "cozum",
         "baslik": "Serbest Düşme Hesabı",
         "soru": "Bir cisim **45 metre** yüksekten serbest bırakılıyor. Yere kaç "
                 "saniyede düşer ve yere çarpma hızı kaçtır? (g = 10 m/s²)",
         "adimlar": [
             "Yükseklik bağıntısı: h = g·t² / 2 → 45 = 10·t² / 2.",
             "45 = 5·t² → t² = 9 → t = **3 saniye**.",
             "Hız bağıntısı: v = g·t = 10 × 3.",
         ],
         "sonuc": "3 saniyede düşer, yere 30 m/s hızla çarpar."},
        {"tur": "tuzak", "baslik": "Ağır Cisim Daha Hızlı Düşmez", "govde":
            "Havada tüy demirden yavaş düşer; ama bunun nedeni **kütle değil, "
            "hava direncidir**. Hava boşaltılmış bir tüpte ikisi **aynı anda** "
            "yere ulaşır. 'Ağır cisim önce düşer' ifadesi **yanlıştır**; "
            "serbest düşmede kütle etkisizdir."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Yol skaler ve azalmaz**, **yer değiştirme vektörel ve sıfır olabilir**.",
            "**Hız-zaman grafiğinde: eğim = ivme, alan = yer değiştirme.**",
            "**Konum-zaman grafiğinde: eğim = hız.**",
            "İvme ile hız **aynı yönlüyse hızlanma**, **zıt yönlüyse yavaşlama**.",
            "**F_(net) = m·a**; net kuvvet sıfırsa cisim **durur ya da sabit hızla gider**.",
            "**Etki-tepki farklı cisimlere** etki eder, birbirini dengelemez.",
            "**Fs = k·N**; sürtünme **yüzey alanına ve hıza bağlı değildir**.",
            "Serbest düşmede **kütle etkisizdir**; **h = g·t²/2**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Grafik sorularında **mutlaka eksenleri oku**. Hesap sorularında "
            "bilinen ve istenen büyüklükleri listele, sonra uygun bağıntıyı seç. "
            "Zaman verilmemişse **v² = v_0² + 2ax** aklına gelsin.",
        "satir_sayisi": 2,
        "sorular": [
            "Konum, yol ve yer değiştirmeyi tanımlayıp skaler-vektörel ayrımını yapınız.",
            "Yolun negatif olamamasının nedeni nedir?",
            "Yer değiştirmenin sıfır olduğu bir hareket örneği veriniz.",
            "Sürat ile hız arasındaki farkı yazınız.",
            "İvmeyi tanımlayınız ve birimini yazınız.",
            "İvme ile hız aynı yönlüyse cisim ne yapar?",
            "Negatif ivme her zaman yavaşlama anlamına gelir mi? Açıklayınız.",
            "Düzgün doğrusal hareketin üç özelliğini yazınız.",
            "Düzgün hızlanan hareketin üç özelliğini yazınız.",
            "Düzgün hızlanan hareketin üç bağıntısını yazınız.",
            "Zaman verilmemiş bir soruda hangi bağıntı kullanılır?",
            "İlk hızsız düzgün hızlanan harekette bağıntılar nasıl sadeleşir?",
            "İlk hızsız harekette ardışık eşit zamanlarda alınan yolların oranı nedir?",
            "İlk hızı 0, ivmesi 2 m/s² olan cismin 5 s sonundaki hızı kaçtır?",
            "Aynı cismin 5 s'de aldığı yol kaçtır?",
            "İlk hızı 10 m/s, ivmesi 3 m/s² olan cismin 4 s sonundaki hızı kaçtır?",
            "Konum-zaman grafiğinde eğim neyi verir?",
            "Hız-zaman grafiğinde eğim neyi verir?",
            "Hız-zaman grafiğinde alan neyi verir?",
            "İvme-zaman grafiğinde alan neyi verir?",
            "Hız-zaman grafiğinde yatay doğru neyi gösterir?",
            "Hız-zaman grafiğinde eksenin altında kalan alan nasıl yorumlanır?",
            "Yol ile yer değiştirme sorularında alan hesabı nasıl farklılaşır?",
            "0-4 s'de hız 0'dan 20 m/s'ye çıkıyor, 4-10 s'de sabit kalıyorsa toplam yol kaçtır?",
            "Newton'un birinci yasasını ifade ediniz.",
            "Eylemsizliğin ölçüsü nedir?",
            "Otobüs aniden kalkınca geriye savrulmayı hangi yasa açıklar?",
            "Newton'un ikinci yasasını formülüyle yazınız.",
            "İvme kuvvetle ve kütleyle nasıl ilişkilidir?",
            "Aynı kuvvet dolu ve boş arabaya uygulanırsa ivmeleri nasıl karşılaştırılır?",
            "Newton'un üçüncü yasasını ifade ediniz.",
            "Etki ve tepki kuvvetleri neden birbirini dengelemez?",
            "Masadaki kitabın ağırlığının tepkisi hangi kuvvettir?",
            "Kitabı dengeleyen kuvvet hangisidir?",
            "Net kuvveti sıfır olan bir cisim hangi iki durumda olabilir?",
            "'Kuvvetler dengelenmişse cisim durur' ifadesindeki eksiği tamamlayınız.",
            "Sürtünme kuvveti formülünü ve terimlerini yazınız.",
            "Sürtünme kuvvetinin yönü nedir?",
            "Yatay zeminde normal kuvvet neye eşittir?",
            "Sürtünme kuvveti temas yüzeyinin alanına bağlı mıdır?",
            "Sürtünme kuvveti cismin hızına bağlı mıdır?",
            "Sürtünmeyi artıran iki etken yazınız.",
            "Sürtünmeyi azaltmak için kullanılan üç yöntem yazınız.",
            "Sürtünmenin üç yararını yazınız.",
            "Sürtünmenin üç zararını yazınız.",
            "4 kg cisme 20 N kuvvet uygulanıyor, k = 0,25 ve g = 10 ise ivme kaçtır?",
            "Serbest düşmeyi tanımlayınız.",
            "Serbest düşmede kütle düşme süresini etkiler mi? Neden?",
            "45 m yükseklikten bırakılan cisim kaç saniyede düşer? (g = 10)",
            "Aynı cismin yere çarpma hızı kaçtır?",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Konum**: başlangıca göre bulunulan yer (**vektörel**). **Yol**: alınan toplam mesafe (**skaler**). **Yer değiştirme**: başlangıç-bitiş arası en kısa doğru (**vektörel**).",
            "Yol, alınan **toplam mesafedir**; hareket devam ettikçe yalnızca **artar**, geriye dönülse bile eklenmeye devam eder.",
            "**Bir pistte tam tur atmak** ya da çıkılan yerden aynı yola dönmek. Başlangıç ve bitiş noktası aynıdır.",
            "**Sürat** yolun zamana oranıdır ve **skalerdir**. **Hız** yer değiştirmenin zamana oranıdır ve **vektöreldir**.",
            "**Hızdaki değişimin zamana oranıdır** (a = Δv/Δt). Birimi **m/s²**'dir.",
            "**Hızlanır.**",
            "**Hayır.** Cisim negatif yönde hızlanıyorsa ivme negatiftir ama cisim hızlanmaktadır. Karar için **hız ve ivmenin işaretleri karşılaştırılır**.",
            "**Hız sabittir**, **ivme sıfırdır**, **net kuvvet sıfırdır** (eşit zamanlarda eşit yol alınır).",
            "**Hız düzgün değişir**, **ivme sabittir ve sıfırdan farklıdır**, **net kuvvet sabittir**.",
            "**v = v_0 + a·t**, **x = v_0·t + a·t²/2**, **v² = v_0² + 2·a·x**.",
            "**v² = v_0² + 2·a·x** bağıntısı; içinde zaman bulunmaz.",
            "**v = a·t**, **x = a·t²/2**, **v² = 2·a·x**.",
            "**1 : 3 : 5 : 7 ...** (tek sayılar) oranındadır.",
            "v = a·t = 2 × 5 = **10 m/s**.",
            "x = a·t²/2 = 2 × 25 / 2 = **25 m**.",
            "v = 10 + 3 × 4 = **22 m/s**.",
            "**Hızı** verir.",
            "**İvmeyi** verir.",
            "**Yer değiştirmeyi** verir.",
            "**Hız değişimini (Δv)** verir.",
            "**Sabit hızı** (ivmenin sıfır olduğunu) gösterir.",
            "**Negatif yer değiştirme** olarak yorumlanır; cisim ters yönde hareket ediyordur.",
            "**Yol** hesaplanırken eksenin altındaki alan da **pozitif** sayılır. **Yer değiştirme** hesaplanırken **negatif** alınır.",
            "Üçgen alanı: (4 × 20)/2 = 40 m. Dikdörtgen alanı: 6 × 20 = 120 m. Toplam **160 m**.",
            "Net kuvvet sıfırsa cisim **duruyorsa durmaya**, hareket ediyorsa **sabit hızla düzgün doğrusal hareketine** devam eder.",
            "**Kütle.**",
            "**Birinci yasa (eylemsizlik).** Yolcu hareket durumunu korumak ister; otobüs ileri gider, yolcu geride kalır.",
            "**F_(net) = m · a.**",
            "İvme **kuvvetle doğru orantılı**, **kütleyle ters orantılıdır**.",
            "**Boş arabanın ivmesi büyüktür**; kütlesi küçük olduğu için aynı kuvvet daha büyük ivme kazandırır.",
            "Her etkiye **eşit büyüklükte ve zıt yönlü** bir tepki vardır; bu kuvvetler **farklı cisimlere** etki eder.",
            "**Farklı cisimlere** etki ettikleri için. Dengelenme, aynı cisme etki eden kuvvetler arasında olur.",
            "**Kitabın Dünya'ya uyguladığı çekim kuvveti.** (Ağırlık, Dünya'nın kitaba uyguladığı kuvvettir.)",
            "**Masanın kitaba uyguladığı normal kuvvet.**",
            "Ya **duruyordur** ya da **sabit hızla düzgün doğrusal hareket** yapıyordur.",
            "Cisim **durur ya da sabit hızla düzgün doğrusal hareket yapar**.",
            "**Fs = k · N.** k sürtünme katsayısı, N normal kuvvettir.",
            "**Harekete (ya da hareket eğilimine) zıt** yönlüdür.",
            "**Cismin ağırlığına (G = m·g)** eşittir.",
            "**Bağlı değildir.** Yalnızca yüzeylerin cinsine (k) ve normal kuvvete bağlıdır.",
            "**Bağlı değildir** (TYT düzeyinde kayma sürtünmesi hız bağımsız kabul edilir).",
            "**Yüzeyin pürüzlülüğünün artması** ve **normal kuvvetin (ağırlığın) artması**.",
            "**Yağlama**, **rulman/bilye kullanma**, **yüzeyi cilalama** (hava yastığı da yazılabilir).",
            "**Yürüyebilmek**, **frenleme**, **çivinin tahtada durması** (yazı yazabilmek de yazılabilir).",
            "**Aşınma**, **ısınma**, **enerji kaybı (verim düşüşü)**.",
            "N = 4 × 10 = 40 N. Fs = 0,25 × 40 = 10 N. F_(net) = 20 − 10 = 10 N. a = 10/4 = **2,5 m/s²**.",
            "Cismin yalnızca **yer çekimi etkisinde**, **ilk hızsız** ve **hava direnci olmadan** düşmesidir.",
            "**Etkilemez.** Serbest düşmede ivme herkes için **g**'dir; bağıntılarda kütle yer almaz. Boşlukta tüy ve demir aynı anda düşer.",
            "45 = 10·t²/2 → 45 = 5t² → t² = 9 → t = **3 s**.",
            "v = g·t = 10 × 3 = **30 m/s**.",
        ],
    },
}
