"""AYT Biyoloji — Komünite ve Popülasyon Ekolojisi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: KOMÜNİTE VE POPÜLASYON",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Komünite ve Popülasyon Ekolojisi",
    "alt_baslik": "Ham bilgi notu — komünite yapısı, süksesyon, popülasyon büyüme "
                  "grafikleri ve yaş piramitleri; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Komünite ve Popülasyon Ekolojisi",
        "kazanimlar": "11.4.1.1 — Komüniteyi oluşturan etkenleri açıklar. "
                      "11.4.1.2 — Komüniteler arası ilişkileri örneklerle açıklar. "
                      "11.4.1.3 — Süksesyonu açıklar. "
                      "11.4.2.1 — Popülasyon dinamiğini etkileyen etkenleri yorumlar.",
        "kapsam": "Komünite ve baskın tür, ekolojik niş, simbiyotik ilişkiler, rekabet, "
                  "avcılık, birincil ve ikincil süksesyon, popülasyon yoğunluğu, "
                  "büyüme grafikleri (J ve S), taşıma kapasitesi, yaş piramitleri, "
                  "45 analiz sorusu",
        "nasil": "Bu konu **grafik okuma** konusudur. J ve S eğrisini, yaş piramidinin "
                 "üç biçimini ve süksesyon aşamalarını **çizerek** öğren; sorular bu "
                 "üç görselin üzerinden gelir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **popülasyon büyüme "
                    "grafiği**, **yaş piramidi yorumu** ya da **simbiyotik ilişki "
                    "ayrımı** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Komünite"},
        {"tur": "tanim", "kavram": "Komünite (yaşam birliği)",
         "aciklama": "Belirli bir alanda yaşayan **farklı türlere ait popülasyonların "
                     "tümüdür**. Komünite + cansız çevre = **ekosistem**. Komünitede "
                     "**yalnızca canlılar** vardır."},
        {"tur": "maddeler", "ogeler": [
            "**Baskın tür**, komünitenin görünümünü ve yapısını belirleyen türdür; "
            "genellikle **birey sayısı ya da biyokütlesi en fazla** olandır. Kayın "
            "ormanında kayın ağacı baskın türdür.",
            "**Anahtar tür**, sayısı az olsa bile komünite dengesinde **kritik rol** "
            "oynayan türdür. Yok olursa komünite yapısı çöker.",
            "**Ekolojik niş**, bir türün komünitedeki **görevi ve yaşam biçimidir**: "
            "ne yediği, nerede barındığı, hangi türlerle ilişki kurduğu. **Habitat "
            "adres ise niş meslektir.**",
            "**İki tür aynı nişi paylaşamaz** (rekabetle dışlama ilkesi); biri diğerini "
            "ortamdan uzaklaştırır ya da nişler ayrışır.",
            "Komünitenin **tür çeşitliliği** ne kadar fazlaysa ekosistem **o kadar "
            "dayanıklıdır**; bir tür kaybolduğunda yerini başkası doldurabilir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Türler arası ilişkiler",
         "aciklama": "İlişkileri ayırt etmenin yolu, **her iki tarafın kâr–zarar "
                     "durumunu** yazmaktır. Sorularda örnek verilir, ilişkinin adı "
                     "istenir; tabloyu bu mantıkla ezberle.",
         "ciz": S.kartlar([
             ("Mutualizm (+/+)", "**ikisi de yararlanır**\nve zorunludur\nlikenler, baklagil–bakteri"),
             ("Kommensalizm (+/0)", "biri **yararlanır**\ndiğeri etkilenmez\nköpek balığı–yapışkan balık"),
             ("Parazitlik (+/−)", "biri **yararlanır**\ndiğeri **zarar görür**\ntenya, bit, ökse otu"),
             ("Avcılık (+/−)", "avcı **kazanır**\nav **ölür**\naslan–ceylan"),
             ("Rekabet (−/−)", "**ikisi de zarar** görür\naynı kaynağı isterler\naynı nişte iki tür"),
             ("Amensalizm (−/0)", "biri **zarar görür**\ndiğeri etkilenmez\npenisilin küfü–bakteri"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "Mutualizm ile Kommensalizm Karışır", "govde":
            "**Mutualizmde iki taraf da yararlanır ve bu ilişki genellikle zorunludur** "
            "(liken: mantar + alg; baklagil kökü + azot bakterisi). "
            "**Kommensalizmde bir taraf yararlanır, diğeri ne kâr ne zarar eder** "
            "(köpek balığına tutunan yapışkan balık). Soruda \"diğeri etkilenmez\" "
            "ifadesi geçiyorsa cevap **kommensalizmdir**."},
        {"tur": "gorsel", "baslik": "Şema 2 — Süksesyon (ekolojik başarım)",
         "aciklama": "Süksesyon, bir alandaki komünitenin **zaman içinde aşamalı olarak "
                     "değişmesidir**. Son aşamaya **klimaks** denir; klimaks komünite "
                     "kararlıdır ve tür çeşitliliği en yüksektir.",
         "ciz": S.akis(
             ["Çıplak kaya", "Liken ve yosun", "Otsu bitkiler", "Çalılar",
              "Ağaçlar", "Klimaks orman"],
             ["toprak **yok**", "**öncü tür**\ntoprak oluşturur", "ince toprak\ntabakası",
              "toprak\nkalınlaşır", "gölge ve nem\nartar", "**kararlı** ve\nçeşitli"])},
        {"tur": "tablo",
         "basliklar": ["Süksesyon türü", "Başlangıç koşulu", "Hız"],
         "satirlar": [
             ["**Birincil (primer)**", "**Toprağın hiç bulunmadığı** alanda başlar: "
              "çıplak kaya, lav akıntısı, kumul", "**Çok yavaş** — önce toprak oluşmalı"],
             ["**İkincil (sekonder)**", "**Toprağın var olduğu**, komünitenin bozulduğu "
              "alanda başlar: yangın sonrası orman, terk edilmiş tarla",
              "**Daha hızlı** — toprak ve tohum bankası hazırdır"],
         ],
         "oranlar": [0.22, 0.48, 0.30]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Popülasyon"},
        {"tur": "tanim", "kavram": "Popülasyon",
         "aciklama": "Belirli bir alanda yaşayan, **aynı türe ait** bireylerin "
                     "oluşturduğu topluluktur. Aralarında **gen alışverişi** olabilir; "
                     "bu, popülasyonu komüniteden ayıran temel özelliktir."},
        {"tur": "formul",
         "baslik": "Popülasyon büyüklüğündeki değişim",
         "ifade": "Değişim = (**Doğum** + **İçe göç**) − (**Ölüm** + **Dışa göç**)",
         "terimler": [
             ("Artıranlar", "**Doğum** ve **içe göç (immigrasyon)**"),
             ("Azaltanlar", "**Ölüm** ve **dışa göç (emigrasyon)**"),
             ("Popülasyon yoğunluğu", "Birim alan ya da hacimdeki **birey sayısı**"),
             ("Taşıma kapasitesi (K)", "Ortamın **sürdürülebilir biçimde** besleyebileceği "
                                       "en fazla birey sayısı"),
         ],
         "not": "Doğum ve ölüm oranı **eşitse** popülasyon büyüklüğü **değişmez**; bu, "
                "büyümenin durduğu anlamına gelir, popülasyonun yok olduğu anlamına "
                "gelmez."},
        {"tur": "gorsel", "baslik": "Şema 3 — İki büyüme modeli",
         "aciklama": "**J eğrisi** sınırsız kaynak varsayar; gerçek doğada uzun süre "
                     "görülmez. **S eğrisi** gerçekçidir: kaynaklar sınırlı olduğu için "
                     "büyüme **taşıma kapasitesinde (K)** durur. J eğrisinin sonunda "
                     "genellikle **ani çöküş** yaşanır.",
         "ciz": S.grafik_seti([
             ("J eğrisi — üstel büyüme", "Zaman", "Birey sayısı",
              [("", [(0.04, 0.04), (0.28, 0.10), (0.48, 0.22), (0.66, 0.44),
                     (0.80, 0.68), (0.92, 0.94)], S.TEHLIKE)],
              [(0.04, 0.72, "kaynaklar\n**sınırsız** sayılır")]),
             ("S eğrisi — lojistik büyüme", "Zaman", "Birey sayısı",
              [("", [(0.04, 0.04), (0.22, 0.12), (0.40, 0.36), (0.56, 0.62),
                     (0.72, 0.76), (0.92, 0.80)], S.BASARI),
               ("", [(0.02, 0.84), (0.96, 0.84)], S.MUREKKEP_SOLUK)],
              [(0.30, 0.92, "**K** = taşıma kapasitesi")]),
         ], ortak_not="Gerçek popülasyonlar S eğrisi izler; K çevresinde iniş çıkışlarla dalgalanır.")},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Yoğunluğa bağlı sınırlayıcı etkenler**: besin ve su yetersizliği, rekabet, "
            "avcılık, hastalık, atık birikimi. Popülasyon **kalabalıklaştıkça etkileri "
            "artar**.",
            "**Yoğunluğa bağlı olmayan etkenler**: kuraklık, sel, don, yangın, deprem. "
            "Bunlar popülasyonun kalabalık olup olmamasından **bağımsız** etki eder.",
            "**Biyotik potansiyel**, ideal koşullarda ulaşılabilecek en yüksek üreme "
            "hızıdır. **Çevre direnci** ise bunu sınırlayan etkenlerin toplamıdır.",
            "Popülasyon büyüklüğü **K çevresinde dalgalanır**; bazı yıllar üstüne çıkar, "
            "sonra kaynak azalınca altına düşer.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 4 — Üç yaş piramidi",
         "aciklama": "Yaş piramidi, popülasyonun **geleceğini** okumaya yarar. "
                     "**Tabanı geniş piramit büyüyeceğini**, **dikdörtgene benzeyen "
                     "piramit sabit kalacağını**, **tabanı dar piramit küçüleceğini** "
                     "gösterir.",
         "ciz": S.karsilastirma(
             "Tabanı GENİŞ",
             ["Genç birey sayısı **çok**",
              "**Doğum oranı yüksek**",
              "Popülasyon **büyüyecek**",
              "Gelişmekte olan ülkeler"],
             "DİKDÖRTGENE benzer",
             ["Yaş grupları **dengeli**",
              "Doğum ≈ ölüm",
              "Popülasyon **sabit kalacak**",
              "Gelişmiş ülkeler"],
             "Tabanı DAR",
             ["Genç birey sayısı **az**",
              "**Doğum oranı düşük**",
              "Popülasyon **küçülecek**",
              "Yaşlanan nüfuslar"])},
        {"tur": "cozum",
         "baslik": "Grafik Yorumu",
         "soru": "Bir adaya bırakılan geyik popülasyonu ilk yıllarda hızla artıyor, "
                 "birkaç yıl sonra **taşıma kapasitesinin üstüne çıkıyor**, ardından "
                 "**ani biçimde düşüyor**. Bu tabloyu açıklayınız.",
         "adimlar": [
             "Başlangıçta besin bol ve avcı yok; popülasyon **üstel (J) biçimde** artar.",
             "Birey sayısı taşıma kapasitesini aşınca **besin ve alan yetersiz kalır**.",
             "**Yoğunluğa bağlı etkenler** devreye girer: rekabet artar, hastalık "
             "yayılır, ölüm oranı yükselir.",
             "Sonuçta popülasyon **ani bir çöküş** yaşar ve taşıma kapasitesinin "
             "altına düşer. Ortam da bu süreçte zarar gördüğü için yeni taşıma "
             "kapasitesi **eskisinden düşük** olabilir.",
         ],
         "sonuc": "Bu, sınırsız büyümenin sürdürülemeyeceğini gösteren klasik bir "
                  "**aşırı otlatma ve çöküş** örneğidir."},
        {"tur": "dikkat", "baslik": "Avcı–Av Grafiği Nasıl Okunur?", "govde":
            "Av ve avcı popülasyonları birbirini izleyerek dalgalanır. **Önce av artar**, "
            "besin bollaştığı için **sonra avcı artar**; avcı çoğalınca **av azalır**, "
            "av azalınca **avcı da azalır**. Grafikte **avcının tepesi her zaman avın "
            "tepesinden sonra gelir** — soru genellikle bu gecikmeyi sorar."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Ekolojik Denge"},
        {"tur": "maddeler", "ogeler": [
            "Ekosistemde **enerji akışı tek yönlüdür**; madde ise **döngüseldir**. "
            "Bu yüzden güneş enerjisi sürekli girmek zorundadır.",
            "**Her beslenme basamağında enerjinin yaklaşık %10'u** bir üst basamağa "
            "aktarılır; gerisi ısı olarak kaybolur. Bu nedenle besin zincirleri "
            "genellikle **4–5 basamağı geçmez**.",
            "**Biyolojik birikim**: parçalanamayan zehirli maddeler (DDT, cıva) besin "
            "zincirinde yukarı çıktıkça **derişimi artar**. En çok zarar gören, "
            "zincirin **en üstündeki** canlıdır.",
            "**Tür çeşitliliğinin azalması** ekosistemin direncini düşürür; küçük bir "
            "bozulma zincirleme etki yaratabilir.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Popülasyon aynı tür**, **komünite farklı türlerdir**; komünite + cansız "
            "çevre = **ekosistem**.",
            "**Habitat adres, niş meslektir**; iki tür aynı nişi paylaşamaz.",
            "**Mutualizm (+/+)**, **kommensalizm (+/0)**, **parazitlik (+/−)**, "
            "**rekabet (−/−)**.",
            "**Birincil süksesyon toprağın olmadığı yerde** başlar ve **çok yavaştır**.",
            "**Klimaks komünite kararlıdır** ve tür çeşitliliği en yüksektir.",
            "Değişim = (doğum + içe göç) − (ölüm + dışa göç).",
            "**J eğrisi sınırsız kaynak**, **S eğrisi taşıma kapasitesi** varsayar.",
            "**Yoğunluğa bağlı etkenler kalabalıkla artar**; iklim olayları bağlı değildir.",
            "**Tabanı geniş piramit büyüyen** popülasyondur.",
            "**Avcının tepesi avın tepesinden sonra gelir.**",
            "Enerji **tek yönlü**, madde **döngüseldir**; basamaklar arası aktarım **%10**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde grafik yorumu ve ilişki adlandırma soruları ağırlıktadır. "
            "İlişki sorularında **her iki tarafın kâr–zarar durumunu** işaretlemeden "
            "cevap yazma; grafik sorularında ise **eksenleri okumadan** yoruma başlama.",
        "satir_sayisi": 2,
        "sorular": [
            "Popülasyon, komünite ve ekosistem kavramlarını kapsam bakımından sıralayınız.",
            "Komünitede yalnızca canlıların bulunmasının anlamını açıklayınız.",
            "Baskın tür kavramını tanımlayarak bir örnek veriniz.",
            "Anahtar tür ile baskın türü ayırt ediniz.",
            "Habitat ile ekolojik niş kavramlarını bir benzetmeyle ayırt ediniz.",
            "İki türün aynı nişi paylaşamamasının nedenini açıklayınız.",
            "Tür çeşitliliği ile ekosistemin dayanıklılığı arasındaki ilişkiyi açıklayınız.",
            "Mutualizmi tanımlayarak iki örnek veriniz.",
            "Kommensalizmi tanımlayarak bir örnek veriniz.",
            "Mutualizm ile kommensalizmi kâr-zarar tablosuyla ayırt ediniz.",
            "Parazitlik ile avcılığı sonuç bakımından karşılaştırınız.",
            "İç ve dış parazitliğe birer örnek veriniz.",
            "Rekabetin hangi durumlarda ortaya çıktığını ve iki tarafa etkisini yazınız.",
            "Amensalizmi bir örnekle açıklayınız.",
            "Likenlerin hangi ilişki türüne örnek olduğunu ve tarafların kazancını yazınız.",
            "Baklagil kökündeki azot bakterilerinin sağladığı karşılıklı yararı açıklayınız.",
            "Süksesyonu tanımlayarak klimaks kavramını açıklayınız.",
            "Birincil ve ikincil süksesyonu başlangıç koşulu ve hız bakımından karşılaştırınız.",
            "Birincil süksesyonda öncü türlerin görevini açıklayınız.",
            "Yangın sonrası ormanda hangi süksesyon türünün görüldüğünü gerekçesiyle yazınız.",
            "Süksesyon ilerledikçe tür çeşitliliği ve toprak kalınlığı nasıl değişir?",
            "Popülasyonu tanımlayarak komüniteden ayıran temel özelliği yazınız.",
            "Popülasyon büyüklüğünü artıran ve azaltan etkenleri yazınız.",
            "Popülasyon yoğunluğu kavramını tanımlayınız.",
            "Doğum ve ölüm oranı eşit olan bir popülasyonun durumunu yorumlayınız.",
            "Taşıma kapasitesini tanımlayınız.",
            "J eğrisi ile S eğrisini kaynak varsayımı bakımından karşılaştırınız.",
            "S eğrisinde büyümenin yavaşlayıp durmasının nedenini açıklayınız.",
            "J eğrisinin sonunda ani çöküş görülmesinin nedenini açıklayınız.",
            "Yoğunluğa bağlı sınırlayıcı etkenlere üç örnek veriniz.",
            "Yoğunluğa bağlı olmayan etkenlere üç örnek veriniz.",
            "Biyotik potansiyel ve çevre direnci kavramlarını açıklayınız.",
            "Bir adaya bırakılan geyik popülasyonunun önce artıp sonra çökmesini açıklayınız.",
            "Bu çöküşten sonra taşıma kapasitesinin düşebilmesinin nedenini yazınız.",
            "Üç yaş piramidi biçimini ve gösterdikleri eğilimi yazınız.",
            "Tabanı geniş bir yaş piramidinin ülkeye ilişkin ne söylediğini yorumlayınız.",
            "Tabanı dar bir yaş piramidinde ilerleyen yıllarda ne beklenir?",
            "Avcı-av grafiğinde tepe noktalarının sırasını ve nedenini açıklayınız.",
            "Avcı popülasyonu tamamen ortadan kaldırılırsa av popülasyonunda uzun vadede ne olur?",
            "Ekosistemde enerji akışının tek yönlü, madde akışının döngüsel olmasını açıklayınız.",
            "Beslenme basamakları arasında aktarılan enerji oranını ve nedenini yazınız.",
            "Besin zincirlerinin 4-5 basamağı geçmemesinin nedenini açıklayınız.",
            "Biyolojik birikimi tanımlayarak en çok hangi canlının etkilendiğini yazınız.",
            "DDT gibi maddelerin biyolojik birikime uğramasının nedenini açıklayınız.",
            "Ekolojik dengenin bozulmasının komünite üzerindeki zincirleme etkisini bir örnekle açıklayınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Popülasyon** (aynı tür bireyleri) < **komünite** (farklı türlerin popülasyonları) < **ekosistem** (komünite + cansız çevre).",
            "Komünite **yalnızca canlı** bileşenleri kapsar. Toprak, su, ışık ve sıcaklık gibi cansız etkenler komüniteye değil, **ekosisteme** dâhildir.",
            "Komünitenin **görünümünü ve yapısını belirleyen**, genellikle birey sayısı ya da biyokütlesi en fazla olan türdür. Kayın ormanında **kayın ağacı** baskın türdür.",
            "**Baskın tür** sayıca ya da kütlece fazladır. **Anahtar tür** sayıca az olabilir ama komünite dengesinde **kritik rol** oynar; yok olursa yapı çöker.",
            "**Habitat adres**tir (canlının yaşadığı yer), **niş meslek**tir (canlının komünitedeki görevi: ne yediği, nasıl beslendiği, hangi ilişkileri kurduğu).",
            "**Rekabetle dışlama ilkesi** gereği aynı kaynağı aynı biçimde kullanan iki tür sürekli rekabet eder. Sonunda biri ortamdan **uzaklaşır** ya da nişler **ayrışır**.",
            "Çeşitlilik arttıkça bir türün kaybı diğerleri tarafından **telafi edilebilir**. Bu yüzden çeşitliliği yüksek ekosistemler bozulmalara karşı **daha dayanıklıdır**.",
            "**İki tarafın da yararlandığı** ve genellikle **zorunlu** olan ilişkidir. Örnek: **liken** (mantar + alg), **baklagil kökü + azot bakterisi**.",
            "**Bir tarafın yararlandığı, diğerinin etkilenmediği** ilişkidir. Örnek: **köpek balığına tutunan yapışkan balık**.",
            "**Mutualizm (+/+)**: iki taraf da kazanır. **Kommensalizm (+/0)**: biri kazanır, diğeri ne kazanır ne kaybeder.",
            "**Parazitlik (+/−)**: konak **zarar görür ama genellikle hemen ölmez**; parazitin çıkarına konağın yaşamasıdır. **Avcılık (+/−)**: av **öldürülür ve yenir**.",
            "**İç parazit**: tenya, bağırsak solucanı. **Dış parazit**: bit, pire, kene, ökse otu.",
            "İki tür **aynı sınırlı kaynağı** (besin, alan, ışık, eş) istediğinde ortaya çıkar. **Her iki taraf da zarar görür (−/−)**; kaynak paylaşıldığı için ikisi de tam kazanamaz.",
            "**Biri zarar görür, diğeri etkilenmez (−/0)**. Örnek: **penisilin küfünün** salgıladığı madde çevredeki bakterileri öldürür; küf bundan bir kazanç sağlamaz.",
            "**Mutualizm**. **Alg fotosentezle besin üretir**, **mantar su ve mineral sağlayıp algi korur**. İkisi ayrı yaşayamadığı için ilişki zorunludur.",
            "Bakteri, havadaki **azotu bitkinin kullanabileceği forma** çevirir. Bitki de bakteriye **besin ve barınak** sağlar. İlişki **mutualizmdir**.",
            "Bir alandaki komünitenin **zaman içinde aşamalı olarak değişmesidir**. Süreç sonunda oluşan kararlı ve tür çeşitliliği en yüksek komüniteye **klimaks** denir.",
            "**Birincil**: toprağın **hiç olmadığı** yerde (çıplak kaya, lav) başlar, **çok yavaştır**. **İkincil**: toprağın **var olduğu** bozulmuş alanda (yangın yeri, terk edilmiş tarla) başlar, **daha hızlıdır**.",
            "**Liken ve yosun** gibi öncü türler kayayı **ayrıştırarak toprak oluşumunu** başlatır. Ölüp çürüdükçe organik madde birikir ve sonraki türlere zemin hazırlar.",
            "**İkincil süksesyon**. Yangın bitki örtüsünü yok etse de **toprak ve tohum bankası** kaldığı için süreç sıfırdan başlamaz.",
            "**Tür çeşitliliği artar** ve **toprak kalınlaşır**. Ayrıca biyokütle artar, ortam daha gölgeli ve nemli hâle gelir.",
            "Belirli bir alandaki **aynı türe ait bireylerin** topluluğudur. Komüniteden farkı, bireyler arasında **gen alışverişi (üreme)** olabilmesidir.",
            "**Artıran**: doğum ve **içe göç**. **Azaltan**: ölüm ve **dışa göç**.",
            "**Birim alan ya da hacimdeki birey sayısıdır**. Aynı birey sayısı farklı alanlarda farklı yoğunluk anlamına gelir.",
            "Popülasyon büyüklüğü **değişmez, dengededir**. Bu, popülasyonun yok olduğu değil, **büyümesinin durduğu** anlamına gelir.",
            "Ortamın kaynaklarıyla **sürdürülebilir biçimde** besleyebileceği **en fazla birey sayısıdır (K)**.",
            "**J eğrisi kaynakları sınırsız** varsayar ve üstel artış gösterir. **S eğrisi kaynakları sınırlı** kabul eder; büyüme taşıma kapasitesinde durur.",
            "Birey sayısı arttıkça **kaynaklar azalır**, rekabet ve hastalık artar. **Çevre direnci** yükseldiği için büyüme yavaşlar ve K'da durur.",
            "Üstel artışta popülasyon taşıma kapasitesini **hızla aşar**. Kaynaklar tükendiği için ölüm oranı aniden yükselir ve popülasyon **çöker**.",
            "**Besin ve su yetersizliği**, **rekabet**, **hastalık** (ayrıca avcılık ve atık birikimi). Bunların etkisi popülasyon kalabalıklaştıkça **artar**.",
            "**Kuraklık**, **sel**, **don** (ayrıca yangın, deprem). Bunlar popülasyonun kalabalık olup olmamasından **bağımsız** etki eder.",
            "**Biyotik potansiyel**: ideal koşullarda ulaşılabilecek **en yüksek üreme hızı**. **Çevre direnci**: bunu sınırlayan bütün etkenlerin toplamı.",
            "Başlangıçta besin bol ve avcı yoktur; popülasyon **üstel** artar. Taşıma kapasitesi aşılınca besin tükenir, rekabet ve hastalık artar; ölüm oranı yükselir ve popülasyon **çöker**.",
            "Aşırı otlatma **bitki örtüsünü ve toprağı zedeler**. Ortamın üretkenliği azaldığı için yeni taşıma kapasitesi **eskisinden düşük** olur.",
            "**Tabanı geniş**: genç birey çok, popülasyon **büyüyecek**. **Dikdörtgen**: yaş grupları dengeli, **sabit kalacak**. **Tabanı dar**: genç az, **küçülecek**.",
            "**Doğum oranı yüksektir** ve nüfus gençtir. İlerleyen yıllarda nüfusun **artacağı**; eğitim, iş ve barınma gereksiniminin büyüyeceği söylenebilir.",
            "Genç birey sayısı az olduğu için ileride üreyecek birey sayısı da az olur. Nüfus **azalır** ve **yaşlanır**; iş gücü sorunu ortaya çıkar.",
            "**Önce avın tepesi**, sonra **avcının tepesi** gelir. Av çoğalınca avcının besini bollaşır ve avcı **gecikmeli olarak** artar; avcı artınca av azalır, ardından avcı da azalır.",
            "Kısa vadede av popülasyonu **hızla artar**. Ancak besin kaynakları tükenir, hastalık ve rekabet artar; sonuçta popülasyon **çöker** ve ortam zarar görür.",
            "Enerji güneşten gelir, her basamakta **ısı olarak kaybolur** ve geri dönmez; bu yüzden **tek yönlüdür**. Madde ise ayrıştırıcılar sayesinde toprağa dönüp yeniden kullanılır; bu yüzden **döngüseldir**.",
            "Yaklaşık **%10**'u aktarılır. Geri kalanı **solunumda ısı olarak** harcanır, sindirilemeyen kısımlar atıkla kaybolur.",
            "Her basamakta enerjinin **%90'ı kaybolduğu** için üst basamaklarda canlıyı besleyecek enerji kalmaz. Bu yüzden zincirler kısa olur.",
            "Parçalanamayan zehirli maddelerin besin zincirinde yukarı çıktıkça **derişiminin artmasıdır**. En çok zarar gören, zincirin **en üstündeki** canlıdır.",
            "DDT **suda değil yağda çözünür** ve canlı tarafından **parçalanamaz**. Yağ dokusunda birikir; bir üst basamak çok sayıda birey yediği için derişim katlanarak artar.",
            "Örneğin bir avcı türün yok edilmesi av popülasyonunu patlatır; artan otçullar bitki örtüsünü tüketir, toprak erozyona uğrar ve ona bağlı türler de kaybolur. Tek bir tür bütün komüniteyi etkileyebilir.",
        ],
    },
}
