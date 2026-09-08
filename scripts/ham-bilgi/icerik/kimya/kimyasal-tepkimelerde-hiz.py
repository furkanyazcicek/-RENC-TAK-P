"""AYT Kimya — Kimyasal Tepkimelerde Hız (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: TEPKİMELERDE HIZ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Kimyasal Tepkimelerde Hız",
    "alt_baslik": "Ham bilgi notu — hız bağıntısı, aktifleşme enerjisi, hıza etki eden "
                  "etkenler ve katalizör; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Kimyasal Tepkimelerde Hız",
        "kazanimlar": "11.5.1.1 — Tepkime hızını tanımlar ve hesaplar. "
                      "11.5.1.2 — Çarpışma teorisiyle tepkime hızını açıklar. "
                      "11.5.2.1 — Hıza etki eden etkenleri yorumlar. "
                      "11.5.2.2 — Katalizörün etkisini enerji diyagramıyla açıklar.",
        "kapsam": "Ortalama ve anlık hız, hız bağıntısı ve derece, çarpışma teorisi, "
                  "etkin çarpışma, aktifleşme enerjisi, aktifleşmiş kompleks, derişim, "
                  "sıcaklık, yüzey alanı, katalizör ve madde cinsinin etkisi, mekanizmalı "
                  "tepkimeler, 45 analiz sorusu",
        "nasil": "Hız sorularında iki şey ayırt edilir: **hızı artıran** etken mi, "
                 "**verimi artıran** etken mi? Katalizör hızı artırır ama ürün miktarını "
                 "**değiştirmez**; bu ayrım sınavda tekrar tekrar sorulur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **hız bağıntısı yazma**, "
                    "**katalizörün enerji diyagramındaki etkisi** ya da **mekanizmada "
                    "yavaş basamak** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Tepkime Hızı"},
        {"tur": "formul",
         "baslik": "Ortalama tepkime hızı",
         "ifade": "Hız = **Δ derişim / Δ zaman**\n"
                  "Girenler için:  hız = **− Δ[A] / Δt**\n"
                  "Ürünler için:   hız = **+ Δ[B] / Δt**",
         "terimler": [
             ("Birim", "**mol/L·s** ya da **mol/L·dakika**"),
             ("Girenlerde eksi", "Girenlerin derişimi **azaldığı** için hız pozitif çıksın diye"),
             ("Katsayı ilişkisi", "Hızlar, denklemdeki **katsayılarla doğru orantılıdır**"),
             ("Anlık hız", "Derişim–zaman grafiğinde o noktaya çizilen **teğetin eğimi**"),
         ],
         "not": "**aA + bB → cC** tepkimesinde hızlar arasında şu bağıntı vardır: "
                "hız_A / a = hız_B / b = hız_C / c. Katsayısı büyük olan maddenin "
                "derişimi **daha hızlı** değişir."},
        {"tur": "cozum",
         "baslik": "Katsayı-Hız İlişkisi",
         "soru": "**N_2 + 3H_2 → 2NH_3** tepkimesinde hidrojenin harcanma hızı "
                 "**0,6 mol/L·s** ise azotun harcanma ve amonyağın oluşma hızlarını "
                 "bulunuz.",
         "adimlar": [
             "Katsayılar: N_2 için **1**, H_2 için **3**, NH_3 için **2**.",
             "Bağıntı: hız_(N_2) / 1 = hız_(H_2) / 3 = hız_(NH_3) / 2.",
             "hız_(N_2) = 0,6 / 3 = **0,2 mol/L·s**.",
             "hız_(NH_3) = (0,6 / 3) · 2 = **0,4 mol/L·s**.",
         ],
         "sonuc": "Azot 0,2 mol/L·s hızla harcanır, amonyak 0,4 mol/L·s hızla oluşur."},
        {"tur": "formul",
         "baslik": "Hız bağıntısı (hız denklemi)",
         "ifade": "Hız  =  k · [A]^m · [B]^n",
         "terimler": [
             ("k", "**Hız sabiti** — yalnızca **sıcaklık ve katalizöre** bağlıdır"),
             ("m, n", "**Tepkime dereceleri** — deneyle bulunur, katsayılarla **aynı olmak zorunda değildir**"),
             ("m + n", "Tepkimenin **toplam derecesi**"),
             ("Tek basamaklı tepkime", "Yalnızca burada **m ve n katsayılara eşittir**"),
         ],
         "not": "**Katı ve saf sıvılar hız bağıntısına yazılmaz**; derişimleri sabittir. "
                "Yalnızca **gaz ve çözelti hâlindeki** maddeler yazılır."},
        {"tur": "tuzak", "baslik": "Derece Katsayıya Eşit Değildir", "govde":
            "Hız bağıntısındaki üsler, **denklemdeki katsayılardan okunamaz**. Yalnızca "
            "tepkime **tek basamaklıysa** (elementer) katsayılara eşittir. Çok basamaklı "
            "tepkimelerde dereceler **deneyle** bulunur ya da **yavaş basamaktan** "
            "yazılır. \"Katsayıya bakıp üs yazmak\", bu konuda yapılan en yaygın hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Çarpışma Teorisi"},
        {"tur": "maddeler", "ogeler": [
            "Tepkimenin gerçekleşmesi için tanecikler **çarpışmak zorundadır**; ama her "
            "çarpışma tepkime vermez.",
            "**Etkin (verimli) çarpışma** için iki koşul birlikte sağlanmalıdır: "
            "**yeterli enerji** ve **uygun geometri (doğrultu)**.",
            "**Aktifleşme enerjisi (E_a)**, tepkimenin başlaması için gereken en az "
            "enerjidir. Çarpışan taneciklerin enerjisi bundan azsa tepkime olmaz.",
            "Çarpışma sırasında oluşan, kararsız ve çok kısa ömürlü ara yapıya "
            "**aktifleşmiş kompleks (geçiş hâli)** denir; enerji diyagramının **tepe "
            "noktasında** bulunur.",
            "**Aktifleşme enerjisi küçükse tepkime hızlıdır**; büyükse yavaştır.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Katalizörün enerji diyagramına etkisi",
         "aciklama": "Katalizör, tepkimeye **daha düşük aktifleşme enerjili yeni bir yol** "
                     "açar. Girenlerin ve ürünlerin enerji düzeyi **değişmez**; bu yüzden "
                     "**ΔH aynı kalır**. Katalizör hem ileri hem geri tepkimeyi **aynı "
                     "oranda** hızlandırır.",
         "ciz": S.grafik("Tepkime ilerleyişi", "Enerji", [
             ("Katalizörsüz", [(0.04, 0.40), (0.20, 0.42), (0.40, 0.92),
                               (0.60, 0.42), (0.94, 0.16)], S.TEHLIKE),
             ("Katalizörlü", [(0.04, 0.40), (0.20, 0.42), (0.40, 0.66),
                              (0.60, 0.42), (0.94, 0.16)], S.BASARI),
         ], notlar=[(0.44, 0.86, "E_a **küçülür**"), (0.60, 0.24, "ΔH **değişmez**")],
            gosterge="sol-ust", yukseklik=54.0)},
        {"tur": "tuzak", "baslik": "Katalizör Verimi Artırmaz", "govde":
            "Katalizör **aktifleşme enerjisini düşürerek hızı artırır**. Ancak "
            "**ΔH'yi, ürün miktarını ve denge sabitini değiştirmez**. Tepkime sonunda "
            "elde edilen ürün miktarı katalizörle **aynı kalır**; yalnızca **daha kısa "
            "sürede** elde edilir. Ayrıca katalizör tepkimeden **değişmeden çıkar** ve "
            "tekrar kullanılabilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Hıza Etki Eden Etkenler"},
        {"tur": "tablo",
         "basliklar": ["Etken", "Etkisi", "Nedeni"],
         "satirlar": [
             ["**Maddenin cinsi**", "Belirleyicidir",
              "Zayıf bağlı ve **iyonik** maddelerin tepkimeleri hızlıdır; kovalent bağlı "
              "moleküllerinki yavaştır"],
             ["**Derişim artışı**", "Hızı **artırır**",
              "Birim hacimdeki **tanecik sayısı** artar, çarpışma sıklığı yükselir"],
             ["**Sıcaklık artışı**", "Hızı **çok artırır**",
              "Hem çarpışma sıklığı hem de **etkin çarpışma oranı** artar; enerjisi "
              "E_a'yı aşan tanecik sayısı çoğalır"],
             ["**Temas yüzeyi**", "Hızı **artırır**",
              "Katı toz hâline getirilirse **temas eden yüzey** büyür"],
             ["**Katalizör**", "Hızı **artırır**",
              "**Aktifleşme enerjisini düşürür**; ΔH'yi değiştirmez"],
             ["**Basınç (gazlarda)**", "Hızı **artırır**",
              "Hacim küçülür, **derişim artar** — dolaylı etkidir"],
         ],
         "oranlar": [0.20, 0.22, 0.58]},
        {"tur": "dikkat", "baslik": "Sıcaklık Neden En Güçlü Etkendir?", "govde":
            "Derişim artışı yalnızca **çarpışma sayısını** artırır. Sıcaklık artışı ise "
            "hem çarpışma sayısını hem de **her çarpışmanın etkin olma olasılığını** "
            "artırır. Bu yüzden sıcaklık, hız üzerinde **en büyük** etkiye sahiptir; "
            "kabaca **her 10 °C'de hız iki katına çıkar**."},
        {"tur": "gorsel", "baslik": "Şema 2 — Sıcaklığın tanecik enerjisi dağılımına etkisi",
         "aciklama": "Sıcaklık artınca eğri **sağa ve basıklaşarak** kayar. "
                     "Aktifleşme enerjisinin sağında kalan alan, yani **enerjisi yeterli "
                     "tanecik sayısı**, belirgin biçimde büyür. Hızın hızlanmasının "
                     "gerçek nedeni budur.",
         "ciz": S.grafik("Tanecik enerjisi", "Tanecik sayısı", [
             ("Düşük sıcaklık", [(0.02, 0.04), (0.12, 0.52), (0.20, 0.88),
                                 (0.30, 0.62), (0.44, 0.28), (0.62, 0.10),
                                 (0.94, 0.03)], S.BILGI),
             ("Yüksek sıcaklık", [(0.02, 0.03), (0.16, 0.32), (0.32, 0.58),
                                  (0.46, 0.48), (0.64, 0.26), (0.94, 0.10)], S.TEHLIKE),
         ], notlar=[(0.58, 0.66, "E_a'nın sağı:\n**etkin çarpışmalar**")],
            kilavuzlar=[(0.56, 0.30)], gosterge="sag-ust", yukseklik=54.0)},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Mekanizmalı Tepkimeler"},
        {"tur": "tanim", "kavram": "Tepkime mekanizması",
         "aciklama": "Bir tepkimenin gerçekte hangi **basamaklardan** geçtiğini gösteren "
                     "dizidir. Basamakların toplamı **net tepkimeyi** verir. Basamaklar "
                     "arasında oluşup harcanan maddelere **ara ürün** denir."},
        {"tur": "gorsel", "baslik": "Şema 3 — Mekanizma sorusunu çözme sırası",
         "aciklama": "Mekanizma sorularında aranan iki şey vardır: **hız bağıntısı** ve "
                     "**ara ürün**. Hız bağıntısı **daima en yavaş basamaktan** yazılır; "
                     "çünkü tepkimenin toplam hızını en yavaş adım belirler.",
         "ciz": S.akis(
             ["Basamakları topla", "Sadeleştir", "Yavaş basamağı bul", "Hız bağıntısını yaz"],
             ["net tepkimeyi\nelde et", "iki tarafta olanlar\n= **ara ürün**",
              "soruda **belirtilir**", "**yalnızca yavaş**\nbasamaktan"])},
        {"tur": "cozum",
         "baslik": "Mekanizma Yorumu",
         "soru": "Bir tepkimenin mekanizması şöyledir:\n"
                 "**1. basamak (yavaş)**: A_2 → 2A\n"
                 "**2. basamak (hızlı)**: 2A + B → A_2B\n"
                 "Net tepkimeyi, ara ürünü ve hız bağıntısını yazınız.",
         "adimlar": [
             "İki basamak toplanır: A_2 + 2A + B → 2A + A_2B.",
             "**2A** iki tarafta da bulunduğu için **sadeleşir**: net tepkime "
             "**A_2 + B → A_2B**.",
             "Sadeleşen madde **ara üründür**: **A**.",
             "Hız bağıntısı **yalnızca yavaş basamaktan** yazılır: 1. basamakta yalnızca "
             "A_2 vardır.",
             "**Hız = k · [A_2]** — B'nin derişimi hız bağıntısında **yer almaz**.",
         ],
         "sonuc": "Net: A_2 + B → A_2B. Ara ürün: A. Hız = k·[A_2]; tepkime **birinci "
                  "derecedendir**."},
        {"tur": "taktik", "baslik": "B Neden Hız Bağıntısında Yok?", "govde":
            "Çünkü B, **yavaş basamağa katılmıyor**. Bir zincirin hızını en yavaş halka "
            "belirler; hızlı basamaktaki maddelerin derişimini artırmak toplam hızı "
            "değiştirmez. Bu yüzden hız bağıntısında yalnızca **yavaş basamağın "
            "girenleri** bulunur. Sorularda \"X'in derişimi iki katına çıkarılırsa hız "
            "nasıl değişir\" diye sorulduğunda önce X'in yavaş basamakta olup olmadığına "
            "bak."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Hızlar **katsayılarla doğru orantılıdır**: hız_A/a = hız_B/b.",
            "**k yalnızca sıcaklık ve katalizöre** bağlıdır; derişimden etkilenmez.",
            "**Katı ve saf sıvılar hız bağıntısına yazılmaz.**",
            "**Dereceler katsayıya eşit değildir** (tek basamaklı tepkime hariç).",
            "Etkin çarpışma için **yeterli enerji + uygun geometri** gerekir.",
            "**Aktifleşme enerjisi küçükse hız büyüktür.**",
            "**Katalizör E_a'yı düşürür**; **ΔH'yi ve ürün miktarını değiştirmez**.",
            "Katalizör **ileri ve geri tepkimeyi aynı oranda** hızlandırır.",
            "**Sıcaklık en güçlü etkendir**; hem sıklığı hem etkinliği artırır.",
            "**Hız bağıntısı daima yavaş basamaktan** yazılır.",
            "Basamaklarda oluşup harcanan madde **ara üründür**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde en çok sınanan şey **neyin neyi etkilediğidir**. Her soruda "
            "kendine iki şey sor: bu etken **hızı mı** yoksa **ürün miktarını mı** "
            "değiştirir; ve bu madde **yavaş basamakta var mı**? İki soruya cevap "
            "verebiliyorsan konu bitmiştir.",
        "satir_sayisi": 2,
        "sorular": [
            "Tepkime hızını tanımlayarak birimini yazınız.",
            "Girenlerin hızı yazılırken neden eksi işareti kullanıldığını açıklayınız.",
            "Ortalama hız ile anlık hızı ayırt ediniz.",
            "Anlık hızın grafikten nasıl bulunduğunu açıklayınız.",
            "aA + bB → cC tepkimesinde hızlar arasındaki bağıntıyı yazınız.",
            "N_2 + 3H_2 → 2NH_3 tepkimesinde H_2'nin harcanma hızı 0,6 mol/L·s ise N_2'nin hızını bulunuz.",
            "Aynı tepkimede NH_3'ün oluşma hızını bulunuz.",
            "Katsayısı büyük olan maddenin derişimi neden daha hızlı değişir?",
            "Hız bağıntısının genel biçimini yazarak simgeleri açıklayınız.",
            "Hız sabiti k'nin hangi etkenlere bağlı olduğunu yazınız.",
            "Derişim değişiminin k üzerinde etkisi var mıdır? Nedenini yazınız.",
            "Tepkime derecesinin nasıl belirlendiğini açıklayınız.",
            "Hız bağıntısındaki üslerin katsayılara eşit olduğu tek durumu yazınız.",
            "Katı ve saf sıvıların hız bağıntısına yazılmamasının nedenini açıklayınız.",
            "Çarpışma teorisine göre tepkimenin gerçekleşmesi için gereken iki koşulu yazınız.",
            "Etkin çarpışma kavramını tanımlayınız.",
            "Aktifleşme enerjisini tanımlayarak hızla ilişkisini yazınız.",
            "Aktifleşmiş kompleksi tanımlayarak enerji diyagramındaki yerini belirtiniz.",
            "Aktifleşme enerjisi büyük olan bir tepkimenin hızı hakkında ne söylenir?",
            "Katalizörün aktifleşme enerjisi üzerindeki etkisini açıklayınız.",
            "Katalizörün ΔH üzerindeki etkisini gerekçesiyle yazınız.",
            "Katalizörün ürün miktarına etkisi var mıdır? Nedenini yazınız.",
            "Katalizörün ileri ve geri tepkimeye etkisini karşılaştırınız.",
            "Katalizörün tepkime sonunda ne durumda olduğunu yazınız.",
            "Derişim artışının hızı artırmasının nedenini tanecik düzeyinde açıklayınız.",
            "Sıcaklık artışının hızı artırmasının iki nedenini yazınız.",
            "Sıcaklığın neden en güçlü etken olduğunu açıklayınız.",
            "Sıcaklık-tanecik enerjisi dağılımı grafiğinde sıcaklık artınca eğrinin nasıl değiştiğini yazınız.",
            "Aynı grafikte aktifleşme enerjisinin sağında kalan alanın anlamını yazınız.",
            "Temas yüzeyinin artırılmasının hıza etkisini bir örnekle açıklayınız.",
            "Bir kütle şekerin toz hâlinde daha hızlı çözünmesini hız kavramıyla açıklayınız.",
            "Gazlarda basınç artışının hızı artırmasının gerçek nedenini açıklayınız.",
            "Maddenin cinsinin hıza etkisini iki örnekle açıklayınız.",
            "İyonik tepkimelerin kovalent tepkimelerden hızlı olmasının nedenini yazınız.",
            "Tepkime mekanizmasını tanımlayınız.",
            "Ara ürünü tanımlayarak nasıl bulunduğunu açıklayınız.",
            "Hız bağıntısının hangi basamaktan yazıldığını gerekçesiyle açıklayınız.",
            "A_2 → 2A (yavaş) ve 2A + B → A_2B (hızlı) mekanizmasında net tepkimeyi yazınız.",
            "Aynı mekanizmada ara ürünü belirleyiniz.",
            "Aynı mekanizmanın hız bağıntısını yazınız.",
            "Bu mekanizmada B'nin derişimi iki katına çıkarılırsa hız nasıl değişir? Nedenini yazınız.",
            "Bu tepkimenin toplam derecesini yazınız.",
            "Bir zincirin hızını en yavaş halkanın belirlemesi benzetmesini kimyasal karşılığıyla açıklayınız.",
            "Hızı artıran ama ürün miktarını değiştirmeyen etkeni yazınız.",
            "Bir tepkimenin hızını artırmak için uygulanabilecek dört yöntemi sıralayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Birim zamandaki **derişim değişimidir**. Birimi **mol/L·s** (ya da mol/L·dakika).",
            "Girenlerin derişimi zamanla **azalır**; Δ[A] negatif çıkar. Hızın pozitif bir sayı olması için başına **eksi** konur.",
            "**Ortalama hız** belirli bir zaman aralığındaki toplam değişimdir. **Anlık hız** belirli bir andaki hızdır.",
            "Derişim–zaman grafiğinde o noktaya çizilen **teğetin eğimi** anlık hızı verir.",
            "**hız_A / a = hız_B / b = hız_C / c**. Hızlar katsayılarla doğru orantılıdır.",
            "0,6 / 3 = **0,2 mol/L·s**.",
            "(0,6 / 3) · 2 = **0,4 mol/L·s**.",
            "Katsayı, o maddeden **kaç mol harcandığını/oluştuğunu** gösterir. Aynı sürede daha çok mol değiştiği için derişim değişimi de büyüktür.",
            "**Hız = k · [A]^m · [B]^n**. k hız sabiti, m ve n tepkime dereceleridir.",
            "Yalnızca **sıcaklığa** ve **katalizöre** bağlıdır.",
            "**Yoktur**. Derişim değişince hız değişir ama k **sabit kalır**; k yalnızca sıcaklık ve katalizörle değişir.",
            "**Deneyle** belirlenir; derişimler değiştirilip hızın nasıl değiştiği ölçülür. Mekanizma biliniyorsa **yavaş basamaktan** yazılır.",
            "Tepkime **tek basamaklıysa (elementer)**. Bu durumda dereceler katsayılara eşittir.",
            "Katı ve saf sıvıların **derişimi sabittir**; miktarları değişse de birim hacimdeki tanecik sayısı değişmez. Bu yüzden hızı etkilemezler.",
            "**Yeterli enerji** (aktifleşme enerjisini aşan) ve **uygun geometri (doğrultu)**.",
            "Her iki koşulu da sağlayan, yani **tepkimeyle sonuçlanan** çarpışmadır. Çarpışmaların yalnızca küçük bir kısmı etkindir.",
            "Tepkimenin başlaması için gereken **en az enerjidir**. Küçükse tepkime **hızlı**, büyükse **yavaştır**.",
            "Çarpışma sırasında oluşan **kararsız ve çok kısa ömürlü** ara yapıdır. Enerji diyagramının **tepe noktasında** bulunur.",
            "**Yavaştır**. Enerjisi E_a'yı aşan tanecik oranı az olduğu için etkin çarpışma sayısı düşüktür.",
            "**Düşürür**. Tepkimeye, daha az enerji gerektiren **yeni bir yol** açar; böylece daha çok tanecik eşiği aşabilir.",
            "**Etkisi yoktur**. Katalizör girenlerin ve ürünlerin **enerji düzeyini değiştirmez**; yalnızca aradaki tepeyi alçaltır. ΔH aynı kalır.",
            "**Yoktur**. Katalizör yalnızca **daha kısa sürede** aynı ürün miktarına ulaşılmasını sağlar; denge sabitini ve verimi değiştirmez.",
            "**İkisini de aynı oranda** hızlandırır. Bu yüzden dengeye **daha çabuk** ulaşılır ama denge noktası değişmez.",
            "**Değişmeden çıkar** ve tekrar kullanılabilir. Tepkimede tüketilmez.",
            "Birim hacimdeki **tanecik sayısı** artar. Tanecikler birbirine daha sık çarptığı için birim zamandaki **etkin çarpışma sayısı** yükselir.",
            "**1)** Tanecik hızları arttığı için çarpışma **sıklığı** artar. **2)** Enerjisi E_a'yı aşan **tanecik oranı** büyür, yani çarpışmaların **etkin olma olasılığı** artar.",
            "Diğer etkenler yalnızca **çarpışma sayısını** artırır. Sıcaklık ise hem sayıyı hem de **her çarpışmanın etkinliğini** artırdığı için etkisi çok daha büyüktür.",
            "Eğri **sağa kayar ve basıklaşır**; tepe noktası düşer, dağılım geniş enerjilere yayılır.",
            "**Enerjisi aktifleşme enerjisini aşan tanecik sayısını** gösterir. Bu alan büyüdükçe etkin çarpışma sayısı ve dolayısıyla hız artar.",
            "**Temas eden yüzey alanı** büyür, daha çok tanecik çarpışabilir hâle gelir. Örneğin toz demir, demir çubuktan çok daha hızlı paslanır.",
            "Toz hâlde **temas yüzeyi** çok daha büyüktür; su molekülleri aynı anda daha çok şeker molekülüne ulaşır ve çözünme hızlanır.",
            "Basınç arttığında gazın **hacmi küçülür**, bu da **derişimi artırır**. Yani basıncın etkisi doğrudan değil, **derişim üzerinden dolaylıdır**.",
            "**Bağ türü ve gücü** belirleyicidir. **İyonik** tepkimeler (AgNO_3 + NaCl) çok hızlıdır; **kovalent** moleküllerin tepkimeleri (metan yanması) yavaştır.",
            "İyonik bileşikler çözeltide **hazır iyonlar** hâlindedir; bağ kırmaya gerek yoktur. Kovalent tepkimelerde önce **güçlü bağların kırılması** gerekir.",
            "Bir tepkimenin gerçekte hangi **basamaklardan geçtiğini** gösteren dizidir. Basamakların toplamı **net tepkimeyi** verir.",
            "Bir basamakta **oluşup** başka bir basamakta **harcanan** maddedir. Basamaklar toplanınca **sadeleşen** madde ara üründür.",
            "**En yavaş basamaktan** yazılır. Toplam hızı en yavaş adım belirler; hızlı basamaklardaki değişiklikler toplam hızı etkilemez.",
            "Toplandığında **A_2 + B → A_2B**; 2A sadeleşir.",
            "**A**. Birinci basamakta oluşur, ikinci basamakta harcanır.",
            "**Hız = k · [A_2]**. Yavaş basamakta yalnızca A_2 bulunur.",
            "**Hız değişmez**. B, hız bağıntısında yer almaz; çünkü **yavaş basamağa katılmamaktadır**.",
            "Hız bağıntısında [A_2] üssü 1 olduğu için tepkime **birinci derecedendir**.",
            "Bir tepkimenin toplam hızını **en yavaş basamak** belirler. Diğer basamaklar ne kadar hızlı olursa olsun, ürün ancak yavaş basamağın izin verdiği hızda oluşur.",
            "**Katalizör**. Hızı artırır ama ΔH'yi, denge sabitini ve elde edilen ürün miktarını değiştirmez.",
            "**Sıcaklığı artırmak**, **derişimi artırmak**, **temas yüzeyini büyütmek (toz etmek)** ve **katalizör kullanmak** (gazlarda ayrıca basıncı artırmak).",
        ],
    },
}
