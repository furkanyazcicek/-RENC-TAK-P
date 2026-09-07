"""TYT Fizik — Basınç (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: BASINÇ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Basınç",
    "alt_baslik": "Ham bilgi notu — katı, sıvı ve gaz basıncı, Pascal ilkesi ve "
                  "açık hava basıncı; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Basınç",
        "kazanimlar": "9.4.1.1 — Katı basıncını hesaplar. "
                      "9.4.1.2 — Sıvı basıncını derinlik ve öz kütleyle ilişkilendirir. "
                      "9.4.1.3 — Pascal ilkesini ve açık hava basıncını açıklar.",
        "kapsam": "Katı basıncı ve basınç kuvveti, sıvı basıncı, bileşik kaplar, "
                  "Pascal ilkesi ve hidrolik pres, açık hava basıncı, Toricelli "
                  "deneyi, gaz basıncı, 45 analiz sorusu",
        "nasil": "Bu konunun en kritik ayrımı **basınç ile basınç kuvvetidir**. "
                 "Sıvı basıncında **derinlik**, katı basıncında **temas yüzeyi** "
                 "belirleyicidir — ikisini karıştırma.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de basınçtan gelen soru neredeyse her zaman "
                    "**'kap şekli değişirse ne olur'** mantığındadır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Katı Basıncı"},
        {"tur": "formul",
         "baslik": "Katı basıncı ve basınç kuvveti",
         "ifade": "P = F / A                F = P · A",
         "terimler": [
             ("P", "**Basınç** — pascal (Pa) ya da N/m²"),
             ("F", "**Basınç kuvveti** — newton (N). Katılarda **ağırlığa eşittir**."),
             ("A", "**Temas yüzeyi alanı** — m²"),
         ],
         "not": "Katılarda **basınç kuvveti = ağırlıktır** ve cismin duruşu "
                "değişse bile **değişmez**. Değişen şey **temas alanıdır**, "
                "dolayısıyla **basınçtır**."},
        {"tur": "maddeler", "ogeler": [
            "**Aynı cisim yan yatırıldığında** ağırlığı (basınç kuvveti) değişmez; "
            "ama temas yüzeyi değişirse **basınç değişir**.",
            "**Temas alanı küçüldükçe basınç artar**: çivinin ucu sivri, bıçağın "
            "ağzı incedir.",
            "**Temas alanı büyüdükçe basınç azalır**: kar ayakkabısı, paletli "
            "araçlar, kamyon lastiklerinin çokluğu, temel atmak.",
            "**Katılar basıncı yalnızca uygulandığı yönde iletir** (aşağı doğru); "
            "sıvı ve gazlar gibi her yöne yaymazlar.",
        ]},
        {"tur": "cozum",
         "baslik": "Duruş Değişince Basınç",
         "soru": "Ağırlığı **60 N** olan dikdörtgen prizma biçiminde bir cismin "
                 "yüzeyleri **2 m²**, **3 m²** ve **6 m²**'dir. Cismin zemine "
                 "yapabileceği **en büyük** ve **en küçük** basınç kaçtır?",
         "adimlar": [
             "Basınç kuvveti her durumda **ağırlığa eşittir**: F = **60 N** (değişmez).",
             "**En büyük basınç** için **en küçük yüzey** kullanılır: "
             "P = 60 / 2 = **30 Pa**.",
             "**En küçük basınç** için **en büyük yüzey** kullanılır: "
             "P = 60 / 6 = **10 Pa**.",
         ],
         "sonuc": "En büyük basınç 30 Pa, en küçük basınç 10 Pa."},
        {"tur": "tuzak", "baslik": "Basınç ile Basınç Kuvvetini Karıştırma", "govde":
            "Katı bir cisim yan çevrildiğinde **basınç kuvveti (ağırlık) DEĞİŞMEZ**; "
            "yalnızca **basınç değişir**. Sorularda 'basınç kuvveti nasıl değişir' "
            "denirse cevap çoğu zaman **değişmez**dir. Bu tek ayrım, konudaki "
            "soruların yarısını çözer."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Sıvı Basıncı"},
        {"tur": "formul",
         "baslik": "Sıvı basıncı",
         "ifade": "P = h · d · g",
         "terimler": [
             ("P", "**Sıvı basıncı** (Pa)"),
             ("h", "**Derinlik** — sıvı yüzeyinden ölçülür (m)"),
             ("d", "Sıvının **öz kütlesi** (kg/m³)"),
             ("g", "**Yer çekimi ivmesi** (yaklaşık 10 N/kg)"),
         ],
         "not": "Formülde **kabın şekli, tabanın alanı ve sıvının miktarı YOKTUR**. "
                "Sıvı basıncı yalnızca **derinlik, öz kütle ve g**'ye bağlıdır. "
                "Bu konudaki en önemli cümle budur."},
        {"tur": "maddeler", "ogeler": [
            "**Sıvı basıncı her yöne eşit olarak** iletilir; kabın **tabanına ve "
            "yan yüzeylerine** de basınç yapar.",
            "**Derinlik arttıkça sıvı basıncı artar**; bu yüzden baraj duvarları "
            "**aşağıya doğru kalınlaşır**.",
            "**Aynı seviyedeki noktalarda basınç eşittir** (aynı sıvı içinde).",
            "**Bileşik kaplar**: Birbirine bağlı, farklı biçimlerdeki kaplara "
            "aynı sıvı konursa, sıvı **her kapta aynı seviyeye** yükselir. Çünkü "
            "basınç yalnızca derinliğe bağlıdır.",
            "**Sıvı basınç kuvveti** ise F = P · A bağıntısıyla bulunur ve "
            "**taban alanına bağlıdır**. Yani basınç kabın şeklinden bağımsız, "
            "**basınç kuvveti bağımlıdır**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Basıncı belirleyen etkenler",
         "aciklama": "Sıvı basıncında kabın **şekli, genişliği ve sıvı miktarı "
                     "etkisizdir**. Yalnızca soldaki üç büyüklük belirleyicidir.",
         "ciz": S.karsilastirma(
             "Sıvı Basıncını ETKİLER",
             ["**Derinlik (h)**", "**Sıvının öz kütlesi (d)**",
              "**Yer çekimi ivmesi (g)**"],
             "ETKİLEMEZ",
             ["Kabın **şekli**", "Kabın **taban alanı**", "Sıvının **miktarı**",
              "Kabın **yüksekliği** (dolu değilse)"],
             "Basınç Kuvveti",
             ["F = P × A", "**Taban alanına bağlıdır**",
              "Kabın şekli **etkiler**"])},
        {"tur": "cozum",
         "baslik": "Sıvı Basıncı Hesabı",
         "soru": "Öz kütlesi **1000 kg/m³** olan su ile dolu bir kapta, yüzeyden "
                 "**5 metre** derinlikteki basınç kaç pascaldır? (g = 10 N/kg)",
         "adimlar": [
             "Formülü yaz: P = h · d · g.",
             "Değerleri yerleştir: P = 5 × 1000 × 10.",
             "İşlemi yap: P = 50 000 Pa.",
         ],
         "sonuc": "50 000 Pa (50 kPa)."},
        {"tur": "cikmis", "baslik": "Bileşik kap sorusu", "govde":
            "Farklı genişlikte ve şekilde ama birbirine bağlı kaplara su "
            "konulduğunda su **hepsinde aynı seviyede** durur. Nedeni: basınç "
            "yalnızca **derinliğe** bağlıdır; seviyeler farklı olsaydı aynı "
            "yükseklikteki noktalarda basınç farkı doğar ve su **dengelenene "
            "kadar akardı**."},

        # ==========================================================
        {"tur": "gorsel", "baslik": "Şema 2 — Sıvı basıncı yalnızca derinliğe bağlıdır",
         "aciklama": "Sıvı basıncı derinlikle **doğru orantılı** artar; grafiği "
                     "**orijinden geçen bir doğrudur**. Doğrunun **eğimi d · g**'dir, "
                     "yani **yoğun sıvının doğrusu daha diktir**. Kabın şekli, "
                     "genişliği ve içindeki sıvının miktarı grafiği değiştirmez.",
         "ciz": S.grafik_seti([
             ("Basınç – Derinlik", "Derinlik (h)", "Basınç (P)",
              [("Cıva (yoğun)", [(0, 0.02), (0.55, 0.92)], TEHLIKE),
               ("Su", [(0, 0.02), (0.94, 0.60)], BILGI)],
              [(0.03, 0.80, "Eğim = **d · g**")]),
             ("Basınç – Miktar", "Sıvı miktarı", "Basınç (P)",
              [("", [(0, 0.55), (0.94, 0.55)], BASARI)],
              [(0.10, 0.24, "**Değişmez**")]),
         ], ortak_not="Derinlik artarsa basınç artar; sıvı eklenip derinlik değişmezse basınç aynı kalır.")},
        {"tur": "bolum", "numara": 3, "baslik": "Pascal İlkesi"},
        {"tur": "tanim", "kavram": "Pascal ilkesi",
         "aciklama": "Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının **her "
                     "noktasına ve kabın her yüzeyine aynen (azalmadan) iletilir**."},
        {"tur": "formul",
         "baslik": "Hidrolik pres (kaldıraç)",
         "ifade": "P_1 = P_2   →   F_1 / A_1  =  F_2 / A_2",
         "terimler": [
             ("F_1, A_1", "Küçük pistondaki **kuvvet** ve **alan**"),
             ("F_2, A_2", "Büyük pistondaki **kuvvet** ve **alan**"),
             ("Sonuç", "Alan kaç kat büyükse, **kuvvet de o kadar kat büyür**"),
         ],
         "not": "Hidrolik pres **kuvvet kazandırır, işten kazandırmaz**. Büyük "
                "piston az yol alır, küçük piston çok yol alır; **yapılan iş "
                "eşittir**. Enerjinin korunumu bozulmaz."},
        {"tur": "cozum",
         "baslik": "Hidrolik Pres Hesabı",
         "soru": "Bir hidrolik preste küçük pistonun alanı **5 cm²**, büyük "
                 "pistonun alanı **200 cm²**'dir. Küçük pistona **20 N** kuvvet "
                 "uygulanırsa büyük piston kaç newtonluk yükü kaldırır?",
         "adimlar": [
             "Pascal ilkesi: iki pistondaki **basınçlar eşittir**.",
             "F_1/A_1 = F_2/A_2 → 20/5 = F_2/200.",
             "20/5 = **4 Pa** (basınç).",
             "F_2 = 4 × 200.",
         ],
         "sonuc": "Büyük piston 800 N kaldırır (40 kat kuvvet kazancı)."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Uygulama alanları**: hidrolik fren, oto lifti, iş makineleri, "
            "hidrolik pres, dişçi koltuğu.",
            "**Sıvılar sıkıştırılamaz** olduğu için basıncı azalmadan iletirler; "
            "bu, hidrolik sistemlerin çalışma temelidir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Açık Hava (Atmosfer) Basıncı"},
        {"tur": "maddeler", "ogeler": [
            "Atmosferdeki hava taneciklerinin ağırlığından doğan basınçtır.",
            "**Deniz seviyesinde ve 0 °C'de** açık hava basıncı **76 cm-Hg** "
            "(yaklaşık **101 300 Pa** ya da **1 atm**)'dir.",
            "**Yükseklik (rakım) arttıkça açık hava basıncı azalır**; çünkü "
            "üstte kalan hava tabakası incelir.",
            "**Toricelli deneyi**: Bir ucu kapalı, cıva dolu cam boru cıva "
            "kabına ters çevrilince cıva **76 cm** yükseklikte durur. Bu, açık "
            "hava basıncının **76 cm cıva sütununu dengelediğini** gösterir.",
            "**Toricelli deneyinde borunun kesit alanı ve eğikliği sonucu "
            "değiştirmez**; yalnızca **düşey yükseklik** 76 cm'dir. Boru eğik "
            "tutulursa cıvanın boru boyunca uzunluğu artar ama **düşey yüksekliği "
            "yine 76 cm** kalır.",
            "Deneyde cıva yerine **su** kullanılsaydı sütun yaklaşık **10,3 metre** "
            "olurdu; çünkü suyun öz kütlesi cıvanınkinden çok küçüktür.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Açık hava basıncını etkileyen etkenler",
         "aciklama": "Toricelli deneyinde tek belirleyici **düşey yüksekliktir**. "
                     "Boru ne kadar geniş ya da eğik olursa olsun sonuç değişmez.",
         "ciz": S.akis(
             ["Rakım artar", "Hava sütunu incelir", "Basınç azalır", "Sonuç"],
             ["yükseğe çıkılır", "üstteki hava azalır", "76 cm-Hg'nin altına iner",
              "su daha düşük\nsıcaklıkta kaynar"])},
        {"tur": "tuzak", "baslik": "Boru Kalınlığı ve Eğikliği Etkisizdir", "govde":
            "Toricelli deneyinde borunun **kesit alanı büyütülse** ya da boru "
            "**eğik tutulsa** bile cıvanın **düşey yüksekliği 76 cm** kalır. "
            "Çünkü basıncı belirleyen **h · d · g**'dir ve buradaki h "
            "**düşey derinliktir**, boru boyunca ölçülen uzunluk değildir."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Günlük hayattaki etkileri**: pipetle içmek, vantuz, şırınga, "
            "damlalık, kuyu pompası — hepsi açık hava basıncıyla çalışır.",
            "Yüksek rakımda **su daha düşük sıcaklıkta kaynar**; bu yüzden yemek "
            "**geç pişer**. Düdüklü tencere içerideki basıncı artırarak bunun "
            "tersini yapar.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Kapalı Kaptaki Gaz Basıncı"},
        {"tur": "maddeler", "ogeler": [
            "Gaz basıncı, taneciklerin kabın çeperlerine **çarpmasından** doğar.",
            "**Manometre** ile ölçülür. Açık uçlu manometrede sıvı seviye farkı "
            "gazın basıncını verir.",
            "**Gazın ağırlığı ihmal edilir**; bu yüzden kapalı kaptaki gaz basıncı "
            "**her noktada aynıdır** (sıvıdan farkı budur).",
            "**Sıcaklık artarsa** tanecikler hızlanır, çarpma sayısı ve şiddeti "
            "artar → **basınç artar** (hacim sabitse).",
            "**Hacim küçülürse** çarpma sıklığı artar → **basınç artar** "
            "(sıcaklık sabitse).",
        ]},
        {"tur": "dikkat", "baslik": "Gaz Basıncı Derinliğe Bağlı Değildir", "govde":
            "Sıvılarda basınç **derinlikle artar**; gazlarda ise gazın ağırlığı "
            "ihmal edildiği için **her noktada aynıdır**. Kapalı bir kaptaki gazın "
            "tabana ve tavana yaptığı basınç **eşittir**. Bu ayrım doğrudan sorulur."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Katıda **P = F/A**; duruş değişince **kuvvet değişmez, basınç değişir**.",
            "Sıvıda **P = h·d·g**; **kap şekli, taban alanı ve sıvı miktarı etkisizdir**.",
            "**Sıvı basınç kuvveti** taban alanına **bağlıdır**.",
            "Bileşik kaplarda sıvı **aynı seviyede** durur.",
            "Pascal ilkesi **kuvvet kazandırır, işten kazandırmaz**.",
            "Açık hava basıncı deniz seviyesinde **76 cm-Hg**; rakımla **azalır**.",
            "Toricelli'de boru **kalınlığı ve eğikliği etkisizdir**; **düşey yükseklik** 76 cm.",
            "Kapalı kaptaki **gaz basıncı her noktada aynıdır**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Her soruda önce **'basınç mı, basınç kuvveti mi soruluyor'** diye sor. "
            "Sıvı sorularında formüldeki üç büyüklüğü (h, d, g) yaz ve verilenlerden "
            "hangisinin değiştiğini işaretle.",
        "satir_sayisi": 2,
        "sorular": [
            "Katı basıncı formülünü ve birimlerini yazınız.",
            "Katılarda basınç kuvveti neye eşittir?",
            "Bir cisim yan yatırıldığında basınç kuvveti değişir mi? Neden?",
            "Aynı cisim yan yatırıldığında basınç neden değişir?",
            "Çivinin ucunun sivri olmasının nedeni nedir?",
            "Kar ayakkabısının geniş olmasının nedeni nedir?",
            "Kamyonlarda çok sayıda lastik bulunmasının nedeni nedir?",
            "Katılar basıncı hangi yönde iletir?",
            "Ağırlığı 60 N, yüzeyleri 2, 3 ve 6 m² olan cismin yapabileceği en büyük basınç kaçtır?",
            "Aynı cismin yapabileceği en küçük basınç kaçtır?",
            "Ağırlığı 120 N olan cisim 4 m²'lik yüzeyiyle duruyorsa basınç kaçtır?",
            "Sıvı basıncı formülünü ve terimlerini yazınız.",
            "Sıvı basıncı kabın şekline bağlı mıdır? Neden?",
            "Sıvı basıncı sıvının miktarına bağlı mıdır?",
            "Sıvı basıncını etkileyen üç büyüklüğü yazınız.",
            "Sıvı basınç kuvveti hangi büyüklüğe ek olarak bağlıdır?",
            "Baraj duvarlarının aşağıya doğru kalınlaşmasının nedeni nedir?",
            "Aynı sıvı içinde aynı seviyedeki noktalarda basınçlar nasıldır?",
            "Bileşik kaplarda sıvının aynı seviyede durmasının nedeni nedir?",
            "1000 kg/m³ öz kütleli sıvıda 5 m derinlikteki basınç kaçtır? (g = 10)",
            "Aynı sıvıda 8 m derinlikteki basınç kaçtır?",
            "Öz kütlesi 800 kg/m³ olan sıvıda 10 m derinlikteki basınç kaçtır?",
            "İki sıvının derinliği aynı, öz kütleleri farklıysa basınçları nasıl karşılaştırılır?",
            "Pascal ilkesini bir cümleyle ifade ediniz.",
            "Hidrolik preste kullanılan bağıntıyı yazınız.",
            "Küçük piston 5 cm², büyük piston 200 cm² ve F_1 = 20 N ise F_2 kaçtır?",
            "Hidrolik pres işten kazandırır mı? Gerekçelendiriniz.",
            "Hidrolik sistemlerde sıvı kullanılmasının nedeni nedir?",
            "Pascal ilkesinin üç uygulama alanını yazınız.",
            "Açık hava basıncının kaynağı nedir?",
            "Deniz seviyesinde açık hava basıncı kaç cm-Hg'dir?",
            "Rakım arttıkça açık hava basıncı nasıl değişir? Neden?",
            "Toricelli deneyini kısaca anlatınız.",
            "Toricelli deneyinde borunun kesit alanı büyütülürse cıva yüksekliği değişir mi?",
            "Boru eğik tutulursa cıvanın düşey yüksekliği değişir mi? Neden?",
            "Toricelli deneyi cıva yerine su ile yapılsaydı sütun kaç metre olurdu?",
            "Cıva yerine su kullanılınca sütunun uzamasının nedeni nedir?",
            "Pipetle içmenin açık hava basıncıyla ilişkisini açıklayınız.",
            "Vantuzun yüzeye yapışmasını açıklayınız.",
            "Yüksek rakımda suyun daha düşük sıcaklıkta kaynamasının nedeni nedir?",
            "Düdüklü tencerenin yemeği çabuk pişirmesini basınçla açıklayınız.",
            "Kapalı kaptaki gaz basıncının kaynağı nedir?",
            "Gaz basıncı kabın derinliğine bağlı mıdır? Neden?",
            "Hacim sabitken sıcaklık artarsa gaz basıncı nasıl değişir?",
            "Sıcaklık sabitken hacim küçülürse gaz basıncı nasıl değişir?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**P = F / A.** P pascal (Pa ya da N/m²), F newton (N), A metrekare (m²).",
            "Cismin **ağırlığına** eşittir.",
            "**Değişmez.** Basınç kuvveti ağırlıktır; cismin duruşu ağırlığını değiştirmez.",
            "**Temas yüzeyi alanı (A) değiştiği** için. P = F/A oranında pay sabit kalır, payda değişir.",
            "Temas alanını **küçültmek** ve böylece aynı kuvvetle **daha büyük basınç** oluşturmak için.",
            "Temas alanını **büyütmek** ve böylece **basıncı azaltarak** kara batmayı önlemek için.",
            "Aracın ağırlığını **daha geniş bir alana** yaymak, yola yapılan **basıncı azaltmak** ve yolun bozulmasını önlemek için.",
            "Yalnızca **uygulandığı yönde (aşağı doğru)** iletir; sıvı ve gazlar gibi her yöne yaymaz.",
            "En küçük yüzey kullanılır: P = 60/2 = **30 Pa**.",
            "En büyük yüzey kullanılır: P = 60/6 = **10 Pa**.",
            "P = 120/4 = **30 Pa**.",
            "**P = h · d · g.** h derinlik (m), d öz kütle (kg/m³), g yer çekimi ivmesi (N/kg).",
            "**Bağlı değildir.** Formülde kabın şekli yer almaz; yalnızca derinlik, öz kütle ve g belirleyicidir.",
            "**Bağlı değildir.** Miktar değişse de derinlik aynı kalıyorsa basınç değişmez.",
            "**Derinlik (h)**, **öz kütle (d)** ve **yer çekimi ivmesi (g)**.",
            "**Taban alanına (A)** bağlıdır: F = P × A. Bu yüzden kabın şekli basınç kuvvetini etkiler.",
            "Derinlik arttıkça **sıvı basıncı artar**; duvarın alt kısmına daha büyük basınç uygulanır, bu yüzden orada daha kalın olması gerekir.",
            "**Eşittir.** Aynı sıvıda aynı derinlikteki bütün noktalarda basınç aynıdır.",
            "Basınç yalnızca **derinliğe** bağlıdır. Seviyeler farklı olsaydı aynı yükseklikteki noktalar arasında basınç farkı oluşur ve sıvı **dengelenene kadar akardı**.",
            "P = 5 × 1000 × 10 = **50 000 Pa**.",
            "P = 8 × 1000 × 10 = **80 000 Pa**.",
            "P = 10 × 800 × 10 = **80 000 Pa**.",
            "Derinlik ve g eşit olduğundan basınçlar **öz kütlelerle doğru orantılıdır**; öz kütlesi büyük olanın basıncı büyüktür.",
            "Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının **her noktasına ve kabın her yüzeyine azalmadan** iletilir.",
            "**F_1 / A_1 = F_2 / A_2.**",
            "20/5 = 4 → F_2 = 4 × 200 = **800 N**.",
            "**Kazandırmaz.** Kuvvet kazancı sağlar ama büyük piston **az yol** alır; yapılan **iş her iki tarafta eşittir**. Enerjinin korunumu geçerlidir.",
            "Sıvılar **sıkıştırılamaz**; bu yüzden uygulanan basıncı **azalmadan ve gecikmesiz** iletirler.",
            "**Hidrolik fren, oto lifti, hidrolik pres** (iş makineleri, dişçi koltuğu da yazılabilir).",
            "Atmosferdeki **hava taneciklerinin ağırlığı**.",
            "**76 cm-Hg** (yaklaşık 101 300 Pa ya da 1 atm).",
            "**Azalır.** Yükseğe çıkıldıkça üstte kalan **hava sütunu incelir**, ağırlığı azalır.",
            "Bir ucu kapalı, **cıva dolu cam boru** cıva kabına ters çevrilir. Cıva bir miktar iner ve **76 cm** yükseklikte durur; bu yükseklik açık hava basıncını dengeler.",
            "**Değişmez.** Basınç h·d·g ile belirlenir; kesit alanı formülde yer almaz.",
            "**Değişmez, yine 76 cm'dir.** Formüldeki h **düşey derinliktir**; boru boyunca ölçülen uzunluk artar ama düşey yükseklik aynı kalır.",
            "Yaklaşık **10,3 metre**.",
            "Suyun **öz kütlesi cıvanınkinden çok küçüktür** (yaklaşık 13,6 kat). Aynı basıncı dengelemek için sütunun o oranda **uzaması** gerekir.",
            "Pipetten hava çekilince içerideki basınç düşer; **dışarıdaki açık hava basıncı** sıvıyı pipetin içine doğru iter.",
            "Vantuz bastırılınca içerideki hava çıkar ve basınç düşer; **dışarıdaki açık hava basıncı** vantuzu yüzeye bastırır.",
            "Rakım arttıkça **açık hava basıncı azalır**; sıvının buhar basıncının dış basınca eşitlenmesi **daha düşük sıcaklıkta** gerçekleşir.",
            "Kapalı kapta basınç **arttığı** için su **100 °C'den yüksek** sıcaklıkta kaynar; yüksek sıcaklık pişme süresini kısaltır.",
            "Gaz taneciklerinin **kabın çeperlerine çarpmasıdır**.",
            "**Bağlı değildir.** Gazın ağırlığı ihmal edildiği için basınç kabın **her noktasında aynıdır**.",
            "**Artar.** Tanecikler hızlanır; çarpma sayısı ve şiddeti artar.",
            "**Artar.** Tanecikler daha küçük hacimde daha sık çarpar.",
        ],
    },
}
