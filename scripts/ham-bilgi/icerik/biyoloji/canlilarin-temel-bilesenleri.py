"""TYT Biyoloji — Canlıların Temel Bileşenleri (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT BİYOLOJİ: CANLILARIN TEMEL BİLEŞENLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Biyoloji",
    "baslik": "Canlıların Temel Bileşenleri",
    "alt_baslik": "Ham bilgi notu — inorganik ve organik bileşikler, enzimler, "
                  "nükleik asitler ve ATP; grafik yorumu ve 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Biyoloji",
        "konu": "Canlıların Temel Bileşenleri",
        "kazanimlar": "9.1.2.1 — Canlıların yapısını oluşturan bileşikleri "
                      "açıklar. 9.1.2.2 — Enzimlerin çalışmasına etki eden "
                      "faktörleri analiz eder.",
        "kapsam": "Su, mineraller, asit-baz-tuz; karbonhidrat, lipit, protein, "
                  "enzim, vitamin, nükleik asit, ATP; enzim grafikleri, 45 soru",
        "nasil": "Bu konu **tablo ve grafik** konusudur. Tabloları ezberleme, "
                 "ayırt edici sütuna bak. Enzim grafiklerini kâğıda kendin çiz.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Etkileşimli not öğretir, bu not tekrar ettirir. TYT biyolojide "
                    "en çok soru bu konudan gelir — burayı boş bırakma.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Genel Bakış: Bileşiklerin Haritası"},
        {"tur": "paragraf", "metin":
            "Canlı vücudundaki maddeler ikiye ayrılır: **inorganik** (canlı tarafından "
            "üretilemez, dışarıdan hazır alınır, sindirilmeden hücreye girer) ve "
            "**organik** (canlı tarafından üretilebilir, karbon iskeleti taşır)."},
        {"tur": "gorsel", "baslik": "Şema 1 — Bileşiklerin sınıflandırılması",
         "aciklama": "**Tek ayırt edici soru**: Canlı bu maddeyi kendisi üretebilir mi? "
                     "Üretebiliyorsa organik, üretemiyorsa inorganiktir.",
         "ciz": S.agac("Bileşikler", [
             ("İnorganik", ["Su", "Mineral", "Asit", "Baz", "Tuz"]),
             ("Organik", ["Karbonhidrat", "Lipit", "Protein", "Enzim",
                          "Vitamin", "Nükleik asit", "ATP", "Hormon"]),
         ])},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "İnorganik", "Organik"],
         "oranlar": [0.28, 0.36, 0.36],
         "satirlar": [
             ["Canlı üretebilir mi", "**Hayır** (D vitamini gibi istisnalar hariç)", "**Evet**"],
             ["Sindirilir mi", "**Hayır** — doğrudan geçer", "Büyükse **evet** (hidroliz)"],
             ["Enerji verir mi", "**Hayır**", "Karbonhidrat, lipit, protein **verir**"],
             ["Karbon içerir mi", "Genelde hayır (CO2 istisna)", "**Evet** — karbon iskeleti"],
             ["Örnek", "Su, Fe, Ca, HCl, NaCl", "Glikoz, yağ, protein, DNA, ATP"],
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "İnorganik Bileşikler"},

        {"tur": "altbolum", "baslik": "A. Su"},
        {"tur": "maddeler", "ogeler": [
            "Hücrenin **en fazla** bulunan maddesidir (yaklaşık %70-90).",
            "**Evrensel çözücüdür**: polar (kutuplu) yapısı sayesinde tuzları, "
            "şekerleri ve birçok maddeyi çözer. Yağ gibi apolar maddeleri çözmez.",
            "**Öz ısısı yüksektir**: çok ısı alsa bile sıcaklığı yavaş yükselir. "
            "Bu, canlının vücut sıcaklığını **dengede** tutar (homeostazi).",
            "**Buharlaşma ısısı yüksektir**: terleme ile çok ısı atılır.",
            "**Hidroliz ve dehidrasyon** tepkimelerine doğrudan katılır.",
            "**Taşıma** görevi görür: kan, öz su, lenf hep sulu ortamdır.",
            "Yaş ilerledikçe hücredeki su oranı **azalır**; embriyoda en yüksektir. "
            "Tohum ve spor gibi metabolizması yavaş yapılarda su oranı **en düşüktür**.",
        ]},
        {"tur": "tuzak", "baslik": "Su Enerji Vermez", "govde":
            "Su hayati öneme sahiptir ama **enerji verici değildir**. ATP üretiminde "
            "kullanılmaz, yakılmaz. 'Canlının en çok ihtiyaç duyduğu madde' ile "
            "'enerji kaynağı' aynı şey değildir. Enerji verenler yalnızca "
            "**karbonhidrat, lipit ve protein**tir."},

        {"tur": "altbolum", "baslik": "B. Mineraller"},
        {"tur": "maddeler", "ogeler": [
            "Sindirilmeden emilirler; **enzimlerin yardımcı parçası** (kofaktör) "
            "olarak da görev alırlar.",
            "**Kalsiyum (Ca)**: Kemik ve diş yapısı, kas kasılması, kanın pıhtılaşması.",
            "**Demir (Fe)**: Hemoglobinin yapısına katılır; eksikliğinde **kansızlık**.",
            "**İyot (I)**: Tiroksin hormonunun yapısında; eksikliğinde **guatr**.",
            "**Sodyum (Na) ve Potasyum (K)**: Sinir hücresinde impuls iletimi, "
            "hücrede osmotik denge.",
            "**Fosfor (P)**: ATP, DNA, RNA ve fosfolipitlerin yapısında.",
            "**Magnezyum (Mg)**: **Klorofilin** yapısında; eksikliğinde yapraklar sararır.",
            "**Flor (F)**: Diş minesi. **Çinko (Zn)**: Enzim yapısı, bağışıklık.",
        ]},
        {"tur": "ezber", "baslik": "Mineral–Görev Eşleşmesi", "ogeler": [
            "Fe → hemoglobin · I → tiroksin · Mg → klorofil · Ca → kemik ve kas",
            "P → ATP ve nükleik asit · Na/K → sinir iletimi · Zn → enzim",
        ]},

        {"tur": "altbolum", "baslik": "C. Asit, Baz ve Tuz"},
        {"tur": "maddeler", "ogeler": [
            "**Asit**: Suda çözündüğünde **H+** iyonu verir. pH **0-7** arasıdır. "
            "Mide öz suyu (HCl), limon, sirke.",
            "**Baz**: Suda çözündüğünde **OH-** iyonu verir. pH **7-14** arasıdır. "
            "Sabun, amonyak, sodyum hidroksit.",
            "**Nötr**: pH = 7 (saf su).",
            "**Tuz**: Asit ile bazın tepkimesinden oluşur; suda iyonlarına ayrışır.",
            "pH ölçeğinde **her bir birim 10 kat** fark demektir: pH 4, pH 5'ten "
            "**10 kat** daha asidiktir.",
            "İnsan kanının pH'ı **7,4** civarında sabit tutulur (tamponlar sayesinde). "
            "Bu değerin bozulması ölümcüldür — homeostazinin en katı örneğidir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Organik Bileşikler — Ortak Mantık"},
        {"tur": "gorsel", "baslik": "Şema 2 — Monomer, polimer ve iki temel tepkime",
         "aciklama": "Her **dehidrasyon sentezinde bir su açığa çıkar**, her "
                     "**hidrolizde bir su harcanır**. Bağ sayısı = harcanan/açığa "
                     "çıkan su sayısıdır.",
         "ciz": S.akis(
             ["Monomer", "Dehidrasyon sentezi", "Polimer", "Hidroliz", "Monomer"],
             ["yapı taşı", "su açığa çıkar", "büyük molekül", "su harcanır", "yapı taşı"])},
        {"tur": "taktik", "baslik": "Su Sayısı Hesabı", "govde":
            "Sayısal soruların anahtarı tek bir kuraldır:",
         "ogeler": [
             "**n** tane monomerden düz zincirli bir polimer oluşurken **n − 1** "
             "su açığa çıkar ve **n − 1** bağ kurulur.",
             "Halkalı (dairesel) bir yapı oluşuyorsa **n** su açığa çıkar, **n** bağ kurulur.",
             "Polimeri tamamen hidroliz etmek için, sentezde çıkan su kadar su gerekir.",
             "Örnek: 100 aminoasitten bir protein → **99 peptit bağı**, **99 su**.",
         ]},
        {"tur": "tablo",
         "basliklar": ["Organik Bileşik", "Yapı Taşı (Monomer)", "Bağın Adı"],
         "oranlar": [0.32, 0.38, 0.30],
         "satirlar": [
             ["Karbonhidrat", "Monosakkarit (glikoz, fruktoz, galaktoz)", "**Glikozit** bağı"],
             ["Protein", "Aminoasit", "**Peptit** bağı"],
             ["Yağ (trigliserit)", "Gliserol + 3 yağ asidi", "**Ester** bağı"],
             ["Nükleik asit", "Nükleotit", "**Fosfodiester** bağı"],
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Karbonhidratlar"},
        {"tur": "maddeler", "ogeler": [
            "Yapısında **C, H, O** bulunur. H ve O oranı genellikle **2:1**'dir.",
            "Hücrenin **birincil ve en hızlı** enerji kaynağıdır. 1 gramı yaklaşık "
            "**4 kalori** verir.",
            "Enerji verme sırası: **Önce karbonhidrat → sonra yağ → en son protein**. "
            "Protein en son yakılır; çünkü yapıya katılan asıl moleküldür.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Karbonhidrat basamakları",
         "aciklama": "Monosakkaritler **sindirilmeden** kana geçer. Disakkarit ve "
                     "polisakkaritler önce hidroliz edilir.",
         "ciz": S.kartlar([
             ("Monosakkarit", "glikoz, fruktoz,\ngalaktoz, riboz, deoksiriboz"),
             ("Disakkarit", "maltoz (glikoz+glikoz)\nsükroz (glikoz+fruktoz)\nlaktoz (glikoz+galaktoz)"),
             ("Polisakkarit", "nişasta, glikojen,\nselüloz, kitin"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Polisakkarit", "Bulunduğu Canlı", "Görevi"],
         "oranlar": [0.24, 0.30, 0.46],
         "satirlar": [
             ["**Nişasta**", "Bitki", "Besin **depolar** (kök, tohum, yumru)"],
             ["**Glikojen**", "Hayvan, mantar", "Besin depolar (karaciğer, kas)"],
             ["**Selüloz**", "Bitki", "**Hücre duvarı** — yapısaldır, depo değildir"],
             ["**Kitin**", "Mantar, eklem bacaklı", "Hücre duvarı / dış iskelet"],
         ]},
        {"tur": "tuzak", "baslik": "Selülozu İnsan Sindiremez", "govde":
            "İnsanda selülozu parçalayan **selülaz enzimi yoktur**; bu yüzden selüloz "
            "enerji vermez, **posa (lif)** olarak bağırsak hareketlerini düzenler. "
            "Otçul hayvanlar da aslında sindiremez — sindirim sistemlerindeki "
            "**simbiyot bakteriler** sindirir. ÖSYM bu ayrımı sever."},
        {"tur": "dikkat", "baslik": "Riboz ve Deoksiriboz da Karbonhidrattır", "govde":
            "**Riboz** (RNA'da) ve **deoksiriboz** (DNA'da) 5 karbonlu "
            "monosakkaritlerdir. 'Nükleik asitte karbonhidrat var mıdır?' sorusunun "
            "cevabı **evet**tir."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Lipitler (Yağlar)"},
        {"tur": "maddeler", "ogeler": [
            "Yapısında **C, H, O** bulunur ama **oksijen oranı karbonhidrattan "
            "azdır**; bu yüzden birim kütlede daha çok enerji taşır: 1 gramı "
            "yaklaşık **9 kalori**.",
            "Suda **çözünmezler** (apolardır); eter, alkol, kloroform gibi organik "
            "çözücülerde çözünürler.",
            "**Trigliserit (nötral yağ)**: 1 gliserol + 3 yağ asidi. En yaygın "
            "depo yağıdır. Yıkımında **3 su harcanır**.",
            "**Doymuş yağ asidi**: Karbonlar arasında **çift bağ yok**; oda "
            "sıcaklığında **katı**; genellikle hayvansal (tereyağı, iç yağı).",
            "**Doymamış yağ asidi**: **Çift bağ var**; oda sıcaklığında **sıvı**; "
            "genellikle bitkisel (zeytinyağı, ayçiçek yağı).",
            "**Fosfolipit**: Bir ucu **suyu seven (hidrofil) baş**, iki ucu **suyu "
            "sevmeyen (hidrofob) kuyruk**. **Hücre zarının temel yapısıdır**.",
            "**Steroit**: Halkalı yapıdadır. Kolesterol (zar akıcılığını düzenler), "
            "östrojen, testosteron, D vitamini, kortizol.",
            "**Vitaminler A, D, E, K** yağda çözünür.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 4 — Yağ ve karbonhidrat karşılaştırması",
         "aciklama": "Aynı kütlede yağ daha çok enerji verir; ama karbonhidrat "
                     "**daha hızlı** kullanılır. Bu yüzden acil enerji karbonhidrattan, "
                     "uzun süreli depo yağdan sağlanır.",
         "ciz": S.karsilastirma(
             "Karbonhidrat",
             ["1 g = ~4 kalori", "Suda çözünür", "**Hızlı** parçalanır",
              "O oranı yüksek", "Az miktarda depolanır"],
             "Lipit",
             ["1 g = ~9 kalori", "Suda çözünmez", "**Yavaş** parçalanır",
              "O oranı düşük", "Sınırsıza yakın depolanır"],
             "Ortak",
             ["C, H, O içerir", "Enerji verir", "Hücre yapısına katılır"])},
        {"tur": "cikmis", "baslik": "Solunum suyu sorusu", "govde":
            "Eşit kütlede yağ ve karbonhidrat oksijenli solunumda yakıldığında "
            "**yağ daha çok O2 harcar**, **daha çok su ve daha çok ATP** üretir. "
            "Bunun nedeni yağın yapısında **hidrojenin daha bol, oksijenin daha az** "
            "olmasıdır. Bu, sayısal olmayan ama mantık isteyen bir sorudur."},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Proteinler"},
        {"tur": "maddeler", "ogeler": [
            "Yapısında **C, H, O, N** bulunur; bazılarında ek olarak **S** (kükürt) "
            "vardır. **Azot (N) proteini karbonhidrat ve lipitten ayıran elementtir**.",
            "Monomeri **aminoasit**tir. Doğada **20 çeşit** aminoasit vardır.",
            "**Temel (esansiyel) aminoasit**: Canlının **üretemediği**, dışarıdan "
            "hazır alması gereken aminoasittir. İnsanda **8 tane**tir (çocukta 9).",
            "Aminoasitler **peptit bağı** ile bağlanır; bağlanma sırasında **su "
            "açığa çıkar**.",
            "Proteinin çeşidini belirleyen üç şey: aminoasitlerin **çeşidi**, "
            "**sayısı** ve **dizilişi (sırası)**.",
            "**Denatürasyon**: Yüksek sıcaklık, uygun olmayan pH veya ağır metaller "
            "proteinin **üç boyutlu yapısını bozar**. Yapı bozulunca **işlev kaybolur**. "
            "Genellikle **geri dönüşsüzdür** (yumurta akının pişmesi).",
        ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Görevleri**: Yapı (kollajen, keratin), enzim, hormon (insülin), "
            "taşıma (hemoglobin), savunma (antikor), kasılma (aktin-miyozin), "
            "en son çare olarak enerji.",
            "**Protein sentezi ribozomda** yapılır; şifresi **DNA**'dadır, "
            "**mRNA** ile taşınır, **tRNA** aminoasidi getirir.",
        ]},
        {"tur": "tuzak", "baslik": "Denatürasyon ≠ Hidroliz", "govde":
            "**Denatürasyonda** peptit bağları kırılmaz, yalnızca üç boyutlu "
            "katlanma bozulur. **Hidrolizde** peptit bağları kırılır ve aminoasitler "
            "ayrılır. Yumurta pişince denatüre olur, hidroliz olmaz."},

        # ==========================================================
        {"tur": "bolum", "numara": 7, "baslik": "Enzimler — TYT'nin En Çok Sorduğu Başlık"},
        {"tur": "tanim", "kavram": "Enzim",
         "aciklama": "Hücredeki tepkimeleri hızlandıran **biyolojik katalizör**dür. "
                     "Tepkimenin **aktivasyon enerjisini düşürerek** çalışır."},
        {"tur": "maddeler", "ogeler": [
            "Temel yapısı **proteindir**. Yalnızca proteinden oluşan enzime **basit "
            "enzim**, protein + yardımcı kısımdan oluşana **bileşik enzim** denir.",
            "**Apoenzim**: Enzimin protein kısmı. **Kofaktör**: Yardımcı kısım "
            "(mineral ise kofaktör, organik molekül ise **koenzim** — vitaminler "
            "genellikle koenzim olarak görev yapar).",
            "**Özgüldür**: Her enzim yalnızca bir tepkimeyi (ya da benzer bir grubu) "
            "katalizler. Anahtar-kilit uyumu vardır.",
            "**Tepkimeden değişmeden çıkar**; tekrar tekrar kullanılır. Bu yüzden "
            "hücrede **az miktarda** bulunması yeterlidir.",
            "**Çift yönlü** çalışabilir: aynı enzim hem yapım hem yıkım "
            "tepkimesini yürütebilir.",
            "**Tepkimenin denge noktasını değiştirmez**, yalnızca dengeye ulaşma "
            "**süresini kısaltır**.",
            "Adlandırma: Etki ettiği maddenin sonuna **-az** eki gelir "
            "(**lakt**oz → **laktaz**, **lip**it → **lipaz**, **protein** → **proteaz**).",
        ]},
        {"tur": "gorsel", "baslik": "Şema 5 — Enzimin aktivasyon enerjisine etkisi",
         "aciklama": "Enzim, tepkimeyi başlatmak için gereken **eşik enerjiyi** "
                     "düşürür. Tepkimenin başındaki ve sonundaki enerji düzeyi "
                     "**değişmez** — yalnızca tepe alçalır.",
         "ciz": S.grafik("Tepkimenin ilerleyişi", "Enerji", [
             ("Enzimsiz", [(0, 0.30), (0.25, 0.55), (0.45, 0.92), (0.65, 0.55),
                           (1.0, 0.14)], TEHLIKE),
             ("Enzimli", [(0, 0.30), (0.25, 0.42), (0.45, 0.55), (0.65, 0.40),
                          (1.0, 0.14)], MARKA),
         ], gosterge="sag-ust")},

        {"tur": "altbolum", "baslik": "Enzim Hızına Etki Eden Faktörler"},
        {"tur": "gorsel", "baslik": "Şema 6 — Sıcaklık ve pH grafikleri",
         "aciklama": "İkisi de **çan eğrisi** verir: optimum değere kadar hız artar, "
                     "sonra **denatürasyon** yüzünden hızla düşer. Sıcaklık düşükse "
                     "enzim bozulmaz, yalnızca **yavaşlar**; sıcaklık yüksekse "
                     "**bozulur ve geri dönmez**.",
         "ciz": S.grafik("Sıcaklık (°C)", "Tepkime hızı", [
             ("İnsan enzimi (opt. 37 °C)",
              [(0, 0.03), (0.2, 0.22), (0.35, 0.60), (0.5, 0.95),
               (0.6, 0.80), (0.72, 0.30), (0.82, 0.02)], MARKA),
             ("Sıcak su bakterisi",
              [(0, 0.02), (0.3, 0.10), (0.55, 0.30), (0.75, 0.62),
               (0.9, 0.88), (1.0, 0.45)], BILGI),
         ], gosterge="sol-ust")},
        {"tur": "tablo",
         "basliklar": ["Faktör", "Etkisi", "Grafiğin Şekli"],
         "oranlar": [0.24, 0.46, 0.30],
         "satirlar": [
             ["**Sıcaklık**", "Optimuma kadar artırır, sonra denatürasyonla düşürür",
              "Çan eğrisi (asimetrik)"],
             ["**pH**", "Her enzimin kendi optimum pH'ı vardır (pepsin ~2, tripsin ~8)",
              "Çan eğrisi"],
             ["**Substrat miktarı**", "Enzim doyana kadar artırır; sonra **sabitlenir**",
              "Artıp **platoya** oturur"],
             ["**Enzim miktarı**", "Substrat sınırsızsa **sürekli artırır**",
              "Doğrusal artış"],
             ["**Su miktarı**", "%15'in altında enzim çalışamaz",
              "Belirli eşikten sonra artar"],
             ["**Yüzey alanı**", "Substrat ne kadar küçük parçaysa hız o kadar yüksek",
              "Artan eğri"],
             ["**İnhibitör**", "Enzimi engeller (ağır metal, siyanür)",
              "Hızı düşürür"],
             ["**Aktivatör**", "Enzimi etkinleştirir (bazı mineraller)", "Hızı artırır"],
         ]},
        {"tur": "taktik", "baslik": "Plato Sorusunu Çözme", "govde":
            "Bir grafik artıp sonra **yatay** hâle geliyorsa, artan değişkenin "
            "değil **başka bir faktörün** sınırlayıcı olduğunu anla:",
         "ogeler": [
             "Substrat artıyor ama hız sabitse → **enzim miktarı** sınırlayıcıdır.",
             "Enzim artıyor ama hız sabitse → **substrat** sınırlayıcıdır.",
             "Soru 'hızı tekrar artırmak için ne yapılmalı' diye sorarsa, cevap "
             "**sınırlayıcı olan faktörü artırmak**tır.",
         ]},
        {"tur": "tuzak", "baslik": "Düşük Sıcaklık Enzimi Öldürmez", "govde":
            "Buzdolabında besin bozulmaz; çünkü enzimler **yavaşlar**, bozulmaz. "
            "Sıcaklık tekrar yükseltilirse enzim yeniden çalışır. Yüksek sıcaklıkta "
            "ise protein yapısı bozulur (denatürasyon) ve **geri dönüş yoktur**. "
            "ÖSYM bu asimetriyi doğrudan sorar."},

        # ==========================================================
        {"tur": "bolum", "numara": 8, "baslik": "Vitaminler, Nükleik Asitler ve ATP"},

        {"tur": "altbolum", "baslik": "A. Vitaminler"},
        {"tur": "maddeler", "ogeler": [
            "**Enerji vermezler**, yapıya katılmazlar; **düzenleyicidir** ve çoğu "
            "**koenzim** olarak görev yapar.",
            "**Sindirilmeden** kana geçerler; molekül yapıları küçüktür.",
            "**Yağda çözünenler: A, D, E, K.** Vücutta (karaciğerde) **depolanır**; "
            "fazlası zehir etkisi yapabilir. Safra ile emilirler.",
            "**Suda çözünenler: B grubu ve C.** Depolanmaz, **fazlası idrarla atılır**; "
            "her gün alınmalıdır.",
            "**D vitamini**, insanın deride güneş ışığıyla **üretebildiği** tek "
            "vitamindir. Bu yüzden 'canlı vitamin üretemez' ifadesi mutlak değildir. "
            "K vitamini ve bazı B vitaminleri de bağırsak bakterilerince üretilir.",
            "Eksiklikleri: A → gece körlüğü, D → raşitizm, C → skorbüt, "
            "B1 → beriberi, B12 → kansızlık, K → pıhtılaşma bozukluğu.",
        ]},

        {"tur": "altbolum", "baslik": "B. Nükleik Asitler"},
        {"tur": "maddeler", "ogeler": [
            "Monomeri **nükleotit**tir. Bir nükleotit = **5C'lu şeker + fosfat + "
            "organik baz**.",
            "Nükleotitin adı **bazından** gelir (adenin nükleotidi, timin nükleotidi...).",
            "**DNA**: Kalıtsal bilgiyi taşır, kendini eşleyebilir. Çift zincirli, "
            "sarmal. Şekeri **deoksiriboz**. Bazları: **A, T, G, C**.",
            "**RNA**: Protein sentezinde görev alır, kendini eşleyemez. Tek zincirli. "
            "Şekeri **riboz**. Bazları: **A, U, G, C** (timin yerine **urasil**).",
            "**Çeşitleri**: mRNA (şifreyi taşır), tRNA (aminoasit getirir), "
            "rRNA (ribozomun yapısına katılır).",
            "**Chargaff kuralı** (yalnızca DNA için): **A = T** ve **G = C**. "
            "Buradan **A + G = T + C** ve pürin toplamı = pirimidin toplamı çıkar.",
            "**Pürin** (çift halkalı): Adenin, Guanin. **Pirimidin** (tek halkalı): "
            "Timin, Sitozin, Urasil.",
            "A ile T arasında **2 hidrojen bağı**, G ile C arasında **3 hidrojen bağı** "
            "vardır. G-C oranı yüksek DNA daha **dayanıklıdır**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 7 — DNA ve RNA karşılaştırması",
         "ciz": S.karsilastirma(
             "DNA",
             ["**Çift** zincir, sarmal", "Şeker: **deoksiriboz**", "Baz: A, T, G, C",
              "Kendini **eşleyebilir**", "Çekirdek, mitokondri, kloroplast",
              "Kalıtsal bilgiyi saklar"],
             "RNA",
             ["**Tek** zincir", "Şeker: **riboz**", "Baz: A, **U**, G, C",
              "Kendini **eşleyemez**", "Çekirdek, sitoplazma, ribozom",
              "Protein sentezinde görev alır"],
             "Ortak",
             ["Monomeri nükleotit", "Fosfat grubu taşır",
              "A, G, C bazları ikisinde de var", "C, H, O, N, P içerir"])},
        {"tur": "taktik", "baslik": "Chargaff Sorusu Nasıl Çözülür", "govde":
            "DNA'da toplam nükleotit sayısı **N** ise:",
         "ogeler": [
             "A = T, G = C. Yani **A + T + G + C = N**.",
             "Adenin sayısı biliniyorsa timin de bilinir; kalan (N − 2A) sayı "
             "**G ve C'ye eşit paylaştırılır**.",
             "Hidrojen bağı toplamı = **2×(A) + 3×(G)**.",
             "Bu kural **RNA'da geçerli değildir** — RNA tek zincirlidir.",
         ]},

        {"tur": "altbolum", "baslik": "C. ATP (Adenozin Trifosfat)"},
        {"tur": "maddeler", "ogeler": [
            "Hücrenin **enerji para birimi**dir. Yapısı: **Adenin bazı + Riboz "
            "şekeri + 3 fosfat**.",
            "**Adenin + Riboz = Adenozin**. Adenozin + 1 fosfat = AMP, + 2 fosfat = "
            "ADP, + 3 fosfat = ATP.",
            "Son iki fosfat arasındaki bağlar **yüksek enerjili bağ**lardır. "
            "ATP → ADP + P dönüşümünde enerji **açığa çıkar**.",
            "ATP **depolanmaz**; ihtiyaç anında üretilir ve hemen harcanır. Depolanan "
            "şey **besindir** (glikojen, yağ).",
            "**Bütün canlılar** ATP üretir ve kullanır; ATP hücreler arasında "
            "**taşınmaz**, üretildiği hücrede harcanır.",
            "ATP üretimi: **oksijenli solunum**, **fermantasyon**, **fotosentezin "
            "ışık evresi**.",
        ]},
        {"tur": "tuzak", "baslik": "ATP Bir Besin Değildir", "govde":
            "ATP yiyecekten doğrudan alınmaz, depolanmaz ve hücreden hücreye "
            "taşınmaz. Her hücre **kendi ATP'sini kendisi üretir**. 'Bitkiler "
            "hayvanlara ATP verir' ifadesi **yanlıştır**; bitkiler **besin** verir, "
            "hayvan o besinden kendi ATP'sini üretir."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Enerji verenler: **karbonhidrat, lipit, protein**. Su, mineral ve "
            "vitamin enerji vermez.",
            "**N** proteini ayırır; **S** bazı proteinlerde; **P** ATP ve nükleik asitte.",
            "Enzim aktivasyon enerjisini düşürür, **denge noktasını değiştirmez**.",
            "Substrat artışı → hız artar, sonra **plato**. Enzim artışı → doğrusal artış.",
            "Düşük sıcaklık **yavaşlatır**, yüksek sıcaklık **denatüre eder**.",
            "A=T, G=C yalnızca **DNA**'da. RNA'da timin yerine **urasil**.",
            "n monomerden düz polimer → **n − 1** bağ, **n − 1** su.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 9, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu konunun soruları **ezberle değil, ayırt etmeyle** çözülür. Her "
            "sorunun altına yalnızca cevabı değil, hangi ölçüte bakarak karar "
            "verdiğini de yaz. Grafik sorularında eksenleri kâğıda kendin çiz.",
        "satir_sayisi": 2,
        "sorular": [
            "Bir maddenin inorganik mi organik mi olduğunu ayırt etmek için sorulacak tek soru nedir?",
            "Su, canlı için hayati olduğu hâlde neden enerji verici sayılmaz?",
            "Suyun öz ısısının yüksek olması homeostaziye nasıl katkı sağlar?",
            "Tohumda su oranının düşük olmasının metabolizma açısından anlamı nedir?",
            "Demir ve iyot eksikliğinde ortaya çıkan hastalıkları ve nedenlerini yazınız.",
            "Magnezyum eksikliğinde bitki yapraklarının sararmasının nedeni nedir?",
            "pH 3 olan bir çözelti, pH 5 olan bir çözeltiden kaç kat daha asidiktir?",
            "Kan pH'ının 7,4 civarında sabit tutulması hangi canlılık ölçütüne örnektir?",
            "150 aminoasitten oluşan düz zincirli bir proteinde kaç peptit bağı ve kaç su vardır?",
            "Yukarıdaki proteini tamamen aminoasitlerine ayırmak için kaç su molekülü gerekir?",
            "Dehidrasyon sentezi ile hidroliz arasındaki farkı su üzerinden açıklayınız.",
            "Monosakkaritlerin sindirilmeden kana geçmesinin nedeni nedir?",
            "Nişasta ve selüloz ikisi de glikozdan oluşur; farklarını yazınız.",
            "İnsan selülozu neden sindiremez, otçul hayvanlar nasıl sindirir?",
            "Glikojen hangi canlılarda, hangi organlarda depolanır?",
            "Riboz ve deoksiribozun hangi moleküllerin yapısına katıldığını yazınız.",
            "Aynı kütlede yağ, karbonhidrattan neden daha fazla enerji verir?",
            "Doymuş ve doymamış yağ asidinin yapısal farkı nedir, bu fark oda sıcaklığındaki hâlini nasıl etkiler?",
            "Fosfolipidin hücre zarındaki yerleşimini hidrofil-hidrofob ayrımıyla açıklayınız.",
            "Kolesterol bir lipittir. Hücre zarındaki görevi nedir?",
            "Eşit kütlede yağ ve karbonhidrat yakıldığında oksijen tüketimi neden farklıdır?",
            "Proteini karbonhidrat ve lipitten ayıran element hangisidir?",
            "Temel (esansiyel) aminoasit ne demektir, insanda kaç tanedir?",
            "Bir proteinin çeşidini belirleyen üç etkeni yazınız.",
            "Denatürasyon ile hidroliz arasındaki farkı yumurta örneğiyle açıklayınız.",
            "Denatüre olmuş bir enzimin işlevini kaybetmesinin yapısal nedeni nedir?",
            "Enzimin aktivasyon enerjisine etkisini bir cümleyle yazınız.",
            "Enzim tepkimenin denge noktasını değiştirir mi? Gerekçelendiriniz.",
            "Apoenzim, kofaktör ve koenzim kavramlarını birbirinden ayırınız.",
            "Vitaminlerin enzimlerle ilişkisini bir cümleyle kurunuz.",
            "Bir enzimin adı 'maltaz' ise substratı nedir? Adlandırma kuralını yazınız.",
            "Enzimin tepkimeden değişmeden çıkması, hücrede az bulunmasını nasıl açıklar?",
            "Substrat miktarı artırıldığında grafiğin plato yapmasının nedeni nedir?",
            "Enzim miktarı artırıldığında grafiğin doğrusal artmasının koşulu nedir?",
            "Buzdolabında saklanan besinin bozulmamasıyla, kaynatılan sütün enzimlerinin bozulması arasındaki farkı açıklayınız.",
            "Pepsin ve tripsinin optimum pH değerleri neden farklıdır?",
            "Yağda çözünen vitaminlerin fazlasının zehir etkisi yapabilmesinin nedeni nedir?",
            "Suda çözünen vitaminlerin her gün alınması gerekmesinin nedeni nedir?",
            "'Canlılar vitamin üretemez' ifadesinin istisnasını yazınız.",
            "Bir DNA'da 300 adenin varsa ve toplam nükleotit 1000 ise guanin sayısı kaçtır?",
            "Aynı DNA'daki toplam hidrojen bağı sayısını hesaplayınız.",
            "G-C oranı yüksek bir DNA'nın daha dayanıklı olmasının nedeni nedir?",
            "Chargaff kuralının RNA'da geçerli olmamasının nedeni nedir?",
            "ATP'nin yapısını üç parça hâlinde yazınız ve 'adenozin'in ne olduğunu belirtiniz.",
            "'Bitkiler hayvanlara ATP sağlar' ifadesindeki hata nedir?",
        ],
        "cevap_baslik": {"numara": 10, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Canlı bu maddeyi kendisi üretebilir mi?** Üretebiliyorsa organik, üretemiyorsa inorganiktir.",
            "Su, ATP üretiminde yakıt olarak kullanılmaz; bağlarında hücrenin kullanabileceği enerji yoktur. Enerji verenler karbonhidrat, lipit ve proteindir.",
            "Su çok ısı alsa bile sıcaklığı yavaş yükselir; bu, vücut sıcaklığındaki dalgalanmayı **azaltır** ve iç dengeyi korur.",
            "Su az olduğu için enzimler çalışamaz, **metabolizma yavaşlar**; tohum bu sayede uzun süre canlı kalabilir.",
            "Demir eksikliği → **kansızlık** (hemoglobin üretilemez). İyot eksikliği → **guatr** (tiroksin üretilemez).",
            "Magnezyum **klorofilin** yapısına katılır; klorofil üretilemeyince yaprak yeşil rengini kaybeder.",
            "**100 kat.** Her pH birimi 10 kat fark demektir; iki birim fark 10 × 10 = 100 kattır.",
            "**Homeostazi** (iç denge).",
            "**149 peptit bağı** ve **149 su**. Düz zincirde n − 1 kuralı geçerlidir.",
            "**149 su.** Sentezde açığa çıkan kadar su, hidrolizde geri harcanır.",
            "Dehidrasyon sentezinde bağ kurulur ve **su açığa çıkar**; hidrolizde bağ kırılır ve **su harcanır**.",
            "Monosakkaritler zaten **en küçük yapı taşıdır**; daha fazla parçalanmalarına gerek yoktur.",
            "Nişasta bitkide **depo**, selüloz bitkide **yapısal** (hücre duvarı) görev yapar. Glikozların bağlanma biçimi farklıdır.",
            "İnsanda **selülaz enzimi yoktur**. Otçullar da üretmez; sindirim sistemlerindeki **simbiyot bakteriler** parçalar.",
            "**Hayvanlarda ve mantarlarda**; hayvanda **karaciğer ve kas**ta depolanır.",
            "**Riboz → RNA**, **deoksiriboz → DNA**. Riboz ayrıca ATP'nin yapısında bulunur.",
            "Yağın yapısında **hidrojen daha bol, oksijen daha azdır**; parçalanınca daha çok yüksek enerjili bağ kırılır.",
            "Doymuşta karbonlar arasında **çift bağ yoktur**, oda sıcaklığında **katıdır**. Doymamışta **çift bağ vardır**, **sıvıdır**.",
            "Fosfat başı **suyu sever**, dışa ve içe (sulu ortamlara) bakar; yağ asidi kuyrukları **suyu sevmez**, ortada karşılıklı durur. Böylece **çift tabaka** oluşur.",
            "Zarın **akıcılığını düzenler**; sıcaklık değişimlerinde zarın çok katılaşmasını veya çok gevşemesini engeller.",
            "Yağ daha çok hidrojen taşıdığı için yükseltgenmesi **daha çok oksijen** gerektirir; sonuçta daha çok su ve daha çok ATP üretilir.",
            "**Azot (N).** Bazı proteinlerde ayrıca kükürt (S) bulunur.",
            "Canlının **kendi üretemediği**, besinle dışarıdan alması zorunlu aminoasittir. İnsanda **8** (çocukta 9) tanedir.",
            "Aminoasitlerin **çeşidi**, **sayısı** ve **diziliş sırası**.",
            "Yumurta pişince **denatüre olur**: üç boyutlu yapı bozulur ama peptit bağları kırılmaz. **Hidrolizde** peptit bağları kırılır, aminoasitler ayrılır.",
            "Enzimin **aktif bölgesinin** üç boyutlu biçimi bozulur; substrat artık kilide oturmaz.",
            "Enzim, tepkimenin başlaması için gereken **aktivasyon enerjisini düşürür**.",
            "**Değiştirmez.** Yalnızca dengeye **ulaşma süresini kısaltır**; ürün ve girenlerin son oranı aynı kalır.",
            "**Apoenzim** protein kısmı, **kofaktör** yardımcı kısım; kofaktör organik bir molekülse özel olarak **koenzim** denir.",
            "Vitaminlerin çoğu **koenzim** olarak görev yapar; enzimin çalışabilmesi için gereklidir.",
            "Substratı **maltoz**dur. Enzim, etki ettiği maddenin adına **-az** eki getirilerek adlandırılır.",
            "Enzim tepkimede tüketilmez; aynı molekül **defalarca** kullanılır, bu yüzden az miktarda bulunması yeterlidir.",
            "Tüm enzimlerin aktif bölgesi **dolmuştur (doygunluk)**; artık sınırlayıcı olan **enzim miktarıdır**.",
            "**Substratın sınırsız (bol)** olması gerekir; substrat kısıtlıysa enzim artışı bir yerden sonra hızı artırmaz.",
            "Soğukta enzimler **yavaşlar ama bozulmaz**, ısıtılınca yeniden çalışır. Kaynatmada protein yapısı **denatüre olur** ve geri dönmez.",
            "Çalıştıkları ortam farklıdır: pepsin **midede** (asidik, pH ~2), tripsin **ince bağırsakta** (bazik, pH ~8) görev yapar.",
            "Yağda çözünenler **karaciğerde depolanır**, idrarla atılmaz; birikince zehir etkisi gösterebilir.",
            "Suda çözünenler **depolanmaz**, fazlası **idrarla atılır**; bu yüzden düzenli alınmalıdır.",
            "İnsan deride güneş ışığıyla **D vitamini** üretir. Ayrıca bağırsak bakterileri **K vitamini** ve bazı B vitaminlerini üretir.",
            "A = T = 300 olduğundan A + T = 600. Kalan 1000 − 600 = 400 nükleotit G ve C'ye eşit paylaşılır → **G = 200**.",
            "A-T bağları: 300 × 2 = 600. G-C bağları: 200 × 3 = 600. **Toplam 1200 hidrojen bağı.**",
            "G ile C arasında **3 hidrojen bağı** vardır (A-T'de 2). Daha çok bağ, zincirin ayrılması için **daha çok enerji** gerektirir.",
            "RNA **tek zincirlidir**; karşılıklı baz eşleşmesi olmadığı için A=U, G=C eşitliği kurulmaz.",
            "**Adenin bazı + riboz şekeri + 3 fosfat.** Adenin ile ribozun birleşimine **adenozin** denir.",
            "Bitkiler ATP değil **besin (organik madde)** sağlar. Her hücre kendi ATP'sini kendisi üretir; ATP hücreler arası taşınmaz.",
        ],
    },
}
