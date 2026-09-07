"""TYT Fizik — Sıvıların Kaldırma Kuvveti (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: SIVILARIN KALDIRMA KUVVETİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Sıvıların Kaldırma Kuvveti",
    "alt_baslik": "Ham bilgi notu — Arşimet ilkesi, yüzme-batma koşulları ve "
                  "görünür ağırlık; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Sıvıların Kaldırma Kuvveti",
        "kazanimlar": "9.3.1.1 — Arşimet ilkesini açıklar. "
                      "9.3.1.2 — Yüzme, askıda kalma ve batma koşullarını "
                      "öz kütleyle ilişkilendirir.",
        "kapsam": "Arşimet ilkesi, kaldırma kuvveti bağıntısı, görünür ağırlık, "
                  "yüzme-askıda kalma-batma koşulları, batan hacim oranı, "
                  "40 analiz sorusu",
        "nasil": "Bu konunun tamamı **tek bir formülden** çıkar. Formülde "
                 "**cismin öz kütlesi YOKTUR** — bunu kavrarsan soruların çoğu "
                 "kendiliğinden çözülür.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de kaldırma kuvvetinden gelen soru genellikle "
                    "**'hangi sıvıda daha çok batar'** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Arşimet İlkesi"},
        {"tur": "tanim", "kavram": "Arşimet ilkesi",
         "aciklama": "Bir sıvıya batırılan cisme, **taşırdığı sıvının ağırlığı "
                     "kadar** ve **yukarı yönlü** bir kaldırma kuvveti etki eder."},
        {"tur": "formul",
         "baslik": "Kaldırma kuvveti",
         "ifade": "F_k = V_(batan) · d_(sıvı) · g",
         "terimler": [
             ("F_k", "**Kaldırma kuvveti** (N) — her zaman **yukarı** yönlüdür"),
             ("V_(batan)", "Cismin **sıvı içinde kalan hacmi** (m³)"),
             ("d_(sıvı)", "**Sıvının** öz kütlesi (kg/m³)"),
             ("g", "Yer çekimi ivmesi (yaklaşık 10 N/kg)"),
         ],
         "not": "Formülde **cismin öz kütlesi ve cismin toplam hacmi YOKTUR**. "
                "Kaldırma kuvveti yalnızca **batan hacme** ve **sıvının öz "
                "kütlesine** bağlıdır. Bu konunun tek cümlelik özeti budur."},
        {"tur": "maddeler", "ogeler": [
            "Kaldırma kuvveti, **sıvı basıncının** cismin alt ve üst yüzeyine "
            "yaptığı **basınç kuvvetleri farkından** doğar. Alt yüzey daha "
            "derinde olduğu için oradaki kuvvet daha büyüktür; net kuvvet "
            "**yukarı** yönlüdür.",
            "**Cismin şekli kaldırma kuvvetini etkilemez**; yalnızca **batan "
            "hacim** önemlidir.",
            "**Derinlik kaldırma kuvvetini etkilemez** — cisim tamamen battıktan "
            "sonra daha derine indirilse bile kaldırma kuvveti **değişmez**. "
            "Çünkü batan hacim artık sabittir.",
        ]},
        {"tur": "tuzak", "baslik": "Derinlik Kaldırma Kuvvetini Değiştirmez", "govde":
            "Sıvı **basıncı** derinlikle artar; ama **kaldırma kuvveti artmaz**. "
            "Cisim tamamen batmışsa alt ve üst yüzey arasındaki basınç **farkı** "
            "sabit kalır. 'Cisim daha derine indirilirse kaldırma kuvveti artar' "
            "ifadesi **yanlıştır** ve en sık kurulan tuzaktır."},
        {"tur": "formul",
         "baslik": "Görünür ağırlık",
         "ifade": "G' = G − F_k",
         "terimler": [
             ("G'", "**Görünür (sıvı içindeki) ağırlık** — dinamometrenin gösterdiği değer"),
             ("G", "Cismin **gerçek ağırlığı** (havadaki)"),
             ("F_k", "**Kaldırma kuvveti**"),
         ],
         "not": "Cisim sıvıya girdiğinde **gerçek ağırlığı değişmez**; yalnızca "
                "**görünür ağırlığı** azalır. Suda kendimizi hafif hissetmemizin "
                "nedeni budur."},
        {"tur": "cozum",
         "baslik": "Görünür Ağırlık Hesabı",
         "soru": "Havadaki ağırlığı **50 N** olan bir cisim suya tamamen "
                 "batırıldığında dinamometre **30 N** gösteriyor. Kaldırma kuvveti "
                 "ve cismin hacmi kaçtır? (dsu = 1000 kg/m³, g = 10 N/kg)",
         "adimlar": [
             "Kaldırma kuvvetini bul: F_k = G − G' = 50 − 30 = **20 N**.",
             "Cisim **tamamen** battığı için V_(batan) = V_(cisim).",
             "Formülü yaz: 20 = V × 1000 × 10.",
             "V = 20 / 10 000.",
         ],
         "sonuc": "Kaldırma kuvveti 20 N, cismin hacmi 0,002 m³ (2000 cm³)."},

        # ==========================================================
        {"tur": "gorsel", "baslik": "Şema 1 — Batırdıkça ne artar, ne azalır?",
         "aciklama": "Cisim sıvıya girdikçe **batan hacim artar**, bu yüzden "
                     "**kaldırma kuvveti artar** ve dinamometrenin gösterdiği değer "
                     "(görünen ağırlık) **azalır**. Cisim **tamamen battıktan sonra** "
                     "daha derine indirilse bile batan hacim değişmediği için "
                     "**ikisi de sabit kalır** — grafiğin yatay kısmı budur.",
         "ciz": S.grafik_seti([
             ("Kaldırma kuvveti", "Batırma derinliği", "F_(kaldırma)",
              [("", [(0, 0.02), (0.52, 0.72), (0.94, 0.72)], BASARI)],
              [(0.44, 0.30, "Tam batınca\n**sabit**")]),
             ("Dinamometre okuması", "Batırma derinliği", "Görünen ağırlık",
              [("", [(0, 0.90), (0.52, 0.26), (0.94, 0.26)], TEHLIKE)],
              [(0.44, 0.62, "Azalır,\nsonra **sabit**")]),
         ], ortak_not="Görünen ağırlık = Gerçek ağırlık − Kaldırma kuvveti")},
        {"tur": "bolum", "numara": 2, "baslik": "Yüzme, Askıda Kalma ve Batma"},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç durum ve koşulları",
         "aciklama": "Karar **öz kütle karşılaştırmasıyla** verilir. Cismin öz "
                     "kütlesi sıvınınkinden küçükse yüzer, eşitse askıda kalır, "
                     "büyükse batar.",
         "ciz": S.katmanlar([
             ("YÜZER  ·  d_(cisim) < d_(sıvı)",
              "Cisim kısmen batar. Denge hâlinde **F_k = G**. Tahta suda yüzer."),
             ("ASKIDA KALIR  ·  d_(cisim) = d_(sıvı)",
              "Cisim tamamen batar ama dibe inmez. **F_k = G**. Her yerde dengede kalır."),
             ("BATAR  ·  d_(cisim) > d_(sıvı)",
              "Cisim dibe iner. **F_k < G**; dibe ulaşınca kap tabanı da tepki uygular."),
         ], "DURUM")},
        {"tur": "maddeler", "ogeler": [
            "**Yüzme ve askıda kalmada** cisim dengededir: **kaldırma kuvveti = "
            "ağırlık (F_k = G)**.",
            "**Batmada** kaldırma kuvveti ağırlıktan küçüktür (**F_k < G**); cisim "
            "dibe iner.",
            "Yüzen bir cisimde **batan hacim oranı**, öz kütlelerin oranına eşittir.",
        ]},
        {"tur": "formul",
         "baslik": "Yüzen cisimde batan hacim oranı",
         "ifade": "V_(batan) / V_(cisim)  =  d_(cisim) / d_(sıvı)",
         "terimler": [
             ("Anlamı", "Cismin **hangi kesrinin** sıvı içinde kaldığını verir"),
             ("Örnek", "Buzun öz kütlesi 0,9; suyunki 1 → buzun **%90'ı** su içindedir"),
         ],
         "not": "Bu bağıntı **yalnızca yüzen (dengede olan) cisimler** için "
                "geçerlidir. Batan cisimde zaten hacmin tamamı sıvı içindedir."},
        {"tur": "cozum",
         "baslik": "Batan Hacim Oranı",
         "soru": "Öz kütlesi **0,6 g/cm³** olan bir tahta parçası suda yüzüyor. "
                 "Tahtanın hacminin yüzde kaçı su içindedir? (dsu = 1 g/cm³)",
         "adimlar": [
             "Bağıntıyı yaz: V_(batan) / V_(cisim) = d_(cisim) / d_(sıvı).",
             "Değerleri yerleştir: V_(batan) / V_(cisim) = 0,6 / 1.",
             "Oran = **0,6**.",
             "Yüzdeye çevir: 0,6 × 100 = **%60**.",
         ],
         "sonuc": "Tahtanın %60'ı su içinde, %40'ı su üstündedir."},
        {"tur": "cikmis", "baslik": "Buzdağı sorusu", "govde":
            "Buzun öz kütlesi **0,92 g/cm³**, deniz suyununki yaklaşık **1,03 "
            "g/cm³**'tür. Oran 0,92/1,03 ≈ **0,89** çıkar; yani buzdağının "
            "yaklaşık **%89'u su altındadır**, yalnızca **%11'i** görünür. "
            "'Buzdağının görünen kısmı' deyimi buradan gelir."},
        {"tur": "taktik", "baslik": "Aynı Cisim Farklı Sıvılarda", "govde":
            "Aynı cisim farklı sıvılara atıldığında karşılaştırma yaparken:",
         "ogeler": [
             "Cisim **yüzüyorsa**: her sıvıda **F_k = G**'dir → **kaldırma kuvvetleri "
             "EŞİTTİR**. Değişen şey **batan hacimdir**: öz kütlesi büyük sıvıda "
             "cisim **daha az batar**.",
             "Cisim **tamamen batıyorsa**: batan hacim her sıvıda aynıdır → "
             "kaldırma kuvveti **sıvının öz kütlesiyle doğru orantılıdır**.",
             "Bu iki durumu ayırmadan karşılaştırma yapmak, konudaki en sık "
             "hatadır.",
         ]},
        {"tur": "tuzak", "baslik": "Yüzen Cisimde Kaldırma Kuvveti Değişmez", "govde":
            "Bir tahta suda da tuzlu suda da yüzüyorsa, **her iki sıvıda kaldırma "
            "kuvveti aynıdır** ve ağırlığına eşittir. Tuzlu suda **daha az batar**, "
            "ama **daha çok kaldırılmaz**. Denizde yüzmenin kolay olması, "
            "kaldırma kuvvetinin artmasından değil, **daha az batmaktan** gelir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kaldırma Kuvvetinin Uygulamaları"},
        {"tur": "maddeler", "ogeler": [
            "**Gemiler**: Çelikten yapılmalarına rağmen yüzerler; çünkü içleri "
            "**boştur** ve **ortalama öz kütleleri** sudan küçüktür. Gemi delinip "
            "su alınca ortalama öz kütle artar ve gemi batar.",
            "**Denizaltı**: **Balast tankları** su alarak öz kütleyi artırır ve "
            "batar; tanklardaki suyu boşaltıp hava basınca öz kütle azalır ve "
            "yüzeye çıkar.",
            "**Balık**: **Hava kesesi (yüzme kesesi)** ile hacmini ayarlar; "
            "böylece farklı derinliklerde askıda kalabilir.",
            "**Denge şamandırası ve can yeleği**: Öz kütlesi çok düşük malzeme "
            "kullanılarak ortalama öz kütle düşürülür.",
            "**Hidrometre (dansimetre)**: Sıvının öz kütlesini ölçen araçtır; "
            "yoğun sıvıda **daha az batar**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Denizaltının çalışma mantığı",
         "aciklama": "Denizaltı **hacmini değiştirmez**; **kütlesini** değiştirerek "
                     "ortalama öz kütlesini ayarlar.",
         "ciz": S.akis(
             ["Tanka su alınır", "Kütle artar", "Öz kütle artar", "Denizaltı batar"],
             ["balast tankı", "hacim sabit", "d = m/V büyür", "d_(cisim) > d_(sıvı)"])},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**F_k = V_(batan) · d_(sıvı) · g** — formülde **cismin öz kütlesi yoktur**.",
            "**Derinlik kaldırma kuvvetini değiştirmez.**",
            "**Cismin şekli** kaldırma kuvvetini etkilemez, **batan hacmi** etkiler.",
            "**Yüzme/askıda kalma → F_k = G**. **Batma → F_k < G**.",
            "Yüzen cisimde **V_(batan)/V_(cisim) = d_(cisim)/d_(sıvı)**.",
            "Aynı cisim farklı sıvılarda **yüzüyorsa kaldırma kuvvetleri eşittir**.",
            "Gemiler **ortalama öz kütlesi** sudan küçük olduğu için yüzer.",
            "Denizaltı **kütlesini** değiştirir, hacmini değil.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Her soruda önce **cisim yüzüyor mu batıyor mu** diye sor; "
            "karşılaştırma kuralı buna göre değişir. Formülü yazıp içinde "
            "**hangi büyüklüğün değiştiğini** işaretle.",
        "satir_sayisi": 2,
        "sorular": [
            "Arşimet ilkesini bir cümleyle ifade ediniz.",
            "Kaldırma kuvveti formülünü ve terimlerini yazınız.",
            "Kaldırma kuvvetinin yönü nedir?",
            "Kaldırma kuvvetinin fiziksel kaynağını basınç farkıyla açıklayınız.",
            "Kaldırma kuvveti cismin öz kütlesine bağlı mıdır? Neden?",
            "Kaldırma kuvveti cismin şekline bağlı mıdır?",
            "Tamamen batmış bir cisim daha derine indirilirse kaldırma kuvveti değişir mi? Neden?",
            "Görünür ağırlık bağıntısını yazınız.",
            "Bir cisim suya girince gerçek ağırlığı değişir mi?",
            "Suda kendimizi hafif hissetmemizin nedeni nedir?",
            "Havada 50 N, suda 30 N gelen cismin kaldırma kuvveti kaçtır?",
            "Aynı cismin hacmi kaçtır? (dsu = 1000 kg/m³, g = 10)",
            "Havada 80 N, suda 60 N gelen cismin hacmini bulunuz.",
            "Yüzme koşulunu öz kütle karşılaştırmasıyla yazınız.",
            "Askıda kalma koşulunu yazınız.",
            "Batma koşulunu yazınız.",
            "Yüzen bir cisimde kaldırma kuvveti ile ağırlık arasındaki ilişki nedir?",
            "Batan bir cisimde kaldırma kuvveti ile ağırlık arasındaki ilişki nedir?",
            "Yüzen cisimde batan hacim oranını veren bağıntıyı yazınız.",
            "Öz kütlesi 0,6 g/cm³ olan tahtanın suda batan hacim yüzdesi kaçtır?",
            "Öz kütlesi 0,8 g/cm³ olan cismin suda batan hacim yüzdesi kaçtır?",
            "Buzun deniz suyunda batan hacim oranı yaklaşık kaçtır?",
            "Buzdağının yalnızca küçük bir kısmının görünmesini açıklayınız.",
            "Öz kütlesi 1 g/cm³ olan bir cisim suda hangi durumda kalır?",
            "Öz kütlesi 2 g/cm³ olan cisim suda ne yapar?",
            "Aynı cisim su ve tuzlu suda yüzüyorsa kaldırma kuvvetleri nasıldır?",
            "Aynı cisim tuzlu suda neden daha az batar?",
            "Denizde yüzmenin havuzda yüzmekten kolay olmasının nedeni nedir?",
            "Aynı cisim iki farklı sıvıya tamamen batırılırsa kaldırma kuvvetleri nasıl karşılaştırılır?",
            "Yüzen ve batan cisimlerde karşılaştırma kuralının neden farklı olduğunu açıklayınız.",
            "Çelikten yapılan geminin yüzmesinin nedeni nedir?",
            "Gemi delinip su alınca neden batar?",
            "Denizaltı nasıl batar ve nasıl yüzeye çıkar?",
            "Denizaltı hacmini mi kütlesini mi değiştirir?",
            "Balıklar derinlik ayarını hangi organla yapar?",
            "Can yeleğinin çalışma ilkesi nedir?",
            "Hidrometre ne işe yarar? Yoğun sıvıda nasıl davranır?",
            "Bir cismin suda yüzüp yağda battığı biliniyorsa öz kütlesi hakkında ne söylenir?",
            "Kaldırma kuvveti sıvının derinliğine mi, cismin batan hacmine mi bağlıdır?",
            "Bir cismin havadaki ve sıvı içindeki ağırlığı biliniyorsa hangi büyüklükler hesaplanabilir?",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Bir sıvıya batırılan cisme, **taşırdığı sıvının ağırlığı kadar** ve **yukarı yönlü** bir kaldırma kuvveti etki eder.",
            "**F_k = V_(batan) · d_(sıvı) · g.** V_(batan) batan hacim, d_(sıvı) sıvının öz kütlesi, g yer çekimi ivmesi.",
            "Her zaman **yukarı** (düşey yukarı) yönlüdür.",
            "Sıvı basıncı derinlikle arttığı için cismin **alt yüzeyine** yapılan basınç kuvveti, **üst yüzeyine** yapılandan büyüktür. Aradaki fark **yukarı yönlü** net kuvveti oluşturur.",
            "**Bağlı değildir.** Formülde cismin öz kütlesi yer almaz; yalnızca batan hacim ve sıvının öz kütlesi belirleyicidir.",
            "**Bağlı değildir.** Şekil ne olursa olsun belirleyici olan **batan hacimdir**.",
            "**Değişmez.** Cisim tamamen battıktan sonra batan hacim sabit kalır; alt-üst yüzey arasındaki basınç farkı da sabittir.",
            "**G' = G − F_k.**",
            "**Değişmez.** Gerçek ağırlık aynı kalır; yalnızca **görünür ağırlık** azalır.",
            "Suyun uyguladığı **kaldırma kuvveti** ağırlığımızın bir kısmını dengeler; **görünür ağırlığımız** azalır.",
            "F_k = 50 − 30 = **20 N**.",
            "20 = V × 1000 × 10 → V = **0,002 m³** (2000 cm³).",
            "F_k = 80 − 60 = 20 N → 20 = V × 1000 × 10 → V = **0,002 m³**.",
            "**d_(cisim) < d_(sıvı).**",
            "**d_(cisim) = d_(sıvı).**",
            "**d_(cisim) > d_(sıvı).**",
            "**Eşittir (F_k = G).** Cisim dengededir.",
            "**Kaldırma kuvveti ağırlıktan küçüktür (F_k < G).**",
            "**V_(batan) / V_(cisim) = d_(cisim) / d_(sıvı).**",
            "0,6/1 = 0,6 → **%60**.",
            "0,8/1 = 0,8 → **%80**.",
            "0,92 / 1,03 ≈ **0,89** → yaklaşık **%89**'u su altındadır.",
            "Buzun öz kütlesi deniz suyununkine **çok yakındır**; bu yüzden hacminin yaklaşık **%89'u batar**, yalnızca **%11'i** yüzeyin üstünde kalır.",
            "**Askıda kalır** (d_(cisim) = d_(sıvı)). Tamamen batar ama dibe inmez.",
            "**Batar** (d_(cisim) > d_(sıvı)).",
            "**Eşittir.** İkisinde de yüzdüğü için F_k = G'dir ve ağırlık değişmemiştir.",
            "Tuzlu suyun **öz kütlesi büyüktür**; aynı kaldırma kuvvetini oluşturmak için **daha az hacmin** batması yeterlidir.",
            "Deniz suyunun öz kütlesi tatlı sudan **büyüktür**; vücudumuzun **daha az kısmı batar** ve yüzeyde durmak kolaylaşır.",
            "Batan hacim her iki sıvıda **aynıdır** (cismin hacmi kadar). Bu durumda kaldırma kuvveti **sıvının öz kütlesiyle doğru orantılıdır**.",
            "**Yüzen** cisimde denge şartı F_k = G olduğundan kaldırma kuvveti sabit, **batan hacim** değişkendir. **Tamamen batan** cisimde batan hacim sabit, **kaldırma kuvveti** değişkendir.",
            "Geminin içi **boştur**; hacmi büyük, kütlesi görece küçüktür. **Ortalama öz kütlesi** sudan **küçük** olduğu için yüzer.",
            "İçeri giren su **kütleyi artırır**, hacim değişmez; **ortalama öz kütle** sudan büyük hâle gelir ve gemi batar.",
            "**Balast tanklarına su alarak** kütlesini ve ortalama öz kütlesini artırır, **batar**. Suyu boşaltıp hava basarak öz kütlesini azaltır ve **yüzeye çıkar**.",
            "**Kütlesini** değiştirir; hacmi sabittir.",
            "**Hava kesesi (yüzme kesesi)** ile.",
            "Öz kütlesi **çok düşük** malzeme (köpük, hava dolu bölmeler) kullanılarak kişinin **ortalama öz kütlesi düşürülür** ve suda yüzmesi sağlanır.",
            "**Sıvının öz kütlesini ölçer.** Öz kütlesi büyük (yoğun) sıvıda **daha az batar**.",
            "Öz kütlesi **sudan küçük, yağdan büyüktür**: dyağ < d_(cisim) < dsu.",
            "**Cismin batan hacmine** (ve sıvının öz kütlesine) bağlıdır; sıvının derinliği kaldırma kuvvetini etkilemez.",
            "**Kaldırma kuvveti** (F_k = G − G') ve buradan **cismin hacmi** hesaplanabilir; cisim tamamen batmışsa **öz kütlesi** de bulunabilir.",
        ],
    },
}
