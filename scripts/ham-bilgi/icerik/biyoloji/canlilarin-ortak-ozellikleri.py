"""TYT Biyoloji — Canlıların Ortak Özellikleri (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE, UYARI
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT BİYOLOJİ: CANLILARIN ORTAK ÖZELLİKLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Biyoloji",
    "baslik": "Canlıların Ortak Özellikleri",
    "alt_baslik": "Ham bilgi notu — canlılık ölçütleri, virüsler ve organizasyon "
                  "basamakları; ÖSYM tuzakları ve 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Biyoloji",
        "konu": "Canlıların Ortak Özellikleri",
        "kazanimlar": "9.1.1.1 — Canlıların ortak özelliklerini açıklar. "
                      "9.1.1.2 — Canlılarda organizasyonu örneklerle açıklar.",
        "kapsam": "13 canlılık ölçütü, her ölçütün istisnası, virüslerin yapısı ve "
                  "üreme yolları, organizasyon basamakları, 40 analiz sorusu",
        "nasil": "Önce bölümleri sırayla oku. Tuzak kutularını **iki kez** oku — "
                 "TYT'de puan buradan gider. Sonra fasikülü kapalı kitap çöz.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Etkileşimli not öğretir, bu not tekrar ettirir. Sınavdan önceki "
                    "son gece okunacak metin budur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Canlılığın Ölçütü Nedir?"},
        {"tur": "paragraf", "metin":
            "Biyolojide **tek bir özelliğe bakarak** bir varlığa canlı denmez. "
            "Bir kristal büyür, bir alev enerji harcar, bir robot uyarıya tepki verir; "
            "ama hiçbiri canlı değildir. Canlılık, aşağıdaki özelliklerin **hepsinin "
            "birden** bulunmasıdır. ÖSYM'nin bu konudaki soru mantığı da tam olarak "
            "budur: sana tek bir özellik verir, 'bu canlıdır' dedirtmeye çalışır."},
        {"tur": "ezber", "baslik": "13 Canlılık Ölçütü", "ogeler": [
            "Hücresel yapı · Beslenme · Solunum · Sindirim · Boşaltım · Metabolizma",
            "Homeostazi · Hareket · Uyarılara tepki · Büyüme ve gelişme",
            "Üreme · Adaptasyon (uyum) · Organizasyon",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Canlılık ölçütlerinin mantığı",
         "aciklama": "Tek bir halka canlılığı kanıtlamaz; ÖSYM sorularında hep **eksik "
                     "halka** aranır.",
         "ciz": S.akis(
             ["Hücre", "Metabolizma", "Homeostazi", "Üreme"],
             ["yapı birimi", "enerji ve madde", "kararlı iç ortam", "sürekliliği sağlar"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Ölçütlerin Tek Tek İncelenmesi"},

        {"tur": "altbolum", "baslik": "A. Hücresel Yapı"},
        {"tur": "tanim", "kavram": "Hücre",
         "aciklama": "Canlılığın **yapı ve işlev** bakımından en küçük birimidir. "
                     "Bir yapının canlı sayılabilmesi için en az bir hücreden oluşması "
                     "gerekir."},
        {"tur": "maddeler", "ogeler": [
            "**Tek hücreli** canlılar: bakteri, arke, amip, öglena, paramesyum, terliksi "
            "hayvan, maya mantarı. Tek hücre, bütün yaşamsal işleri kendi yapar.",
            "**Çok hücreli** canlılar: bitkiler, hayvanlar, şapkalı mantarlar. Hücreler "
            "**özelleşmiştir**; her hücre her işi yapmaz.",
            "**Koloni**: tek hücrelilerin bir arada yaşaması (volvoks). Koloni çok "
            "hücreli sayılmaz — hücreler arasında **iş bölümü tam değildir**.",
            "Virüsler hücresel yapıya sahip **değildir**; bu yüzden canlılık ölçütlerinin "
            "tamamını karşılamazlar.",
        ]},
        {"tur": "tuzak", "baslik": "Tek Hücreli ≠ Basit Canlı", "govde":
            "Tek hücreli olmak 'ilkel' demek değildir. Bir amip; beslenme, boşaltım, "
            "solunum, hareket ve üremenin tamamını **tek bir hücreyle** yapar. Çok "
            "hücrelide bu işleri farklı dokular paylaşır. ÖSYM bu ayrımı 'hangisi daha "
            "gelişmiştir' diye değil, **'hangisinde iş bölümü vardır'** diye sorar."},

        {"tur": "altbolum", "baslik": "B. Beslenme"},
        {"tur": "tanim", "kavram": "Beslenme",
         "aciklama": "Canlının, enerji ve yapı maddesi ihtiyacını karşılamak için "
                     "dışarıdan madde alması ya da kendi besinini üretmesidir."},
        {"tur": "maddeler", "ogeler": [
            "**Ototrof (üretici)**: Kendi besinini inorganik maddeden üretir. "
            "İkiye ayrılır → **Fotoototrof** (ışık enerjisi: bitki, alg, "
            "siyanobakteri) ve **Kemoototrof** (kimyasal enerji: nitrit-nitrat "
            "bakterileri, kükürt bakterileri).",
            "**Heterotrof (tüketici)**: Besinini dışarıdan hazır alır. Hayvanlar, "
            "mantarlar, çoğu bakteri.",
            "**Hem ototrof hem heterotrof (miksotrof)**: Öglena ve böcekçil bitkiler "
            "(sinekkapan). Öglena ışık varken fotosentez yapar, yokken hazır besin alır.",
            "**Saprofit (çürükçül)**: Ölü organik maddeyi hücre **dışında** sindirir, "
            "sonra emer. Şapkalı mantarlar, küf mantarları, çürükçül bakteriler.",
            "**Parazit**: Canlı bir konaktan beslenir. **Tam parazit** (ökse otu, "
            "tenya) hiçbir şey üretmez; **yarı parazit** (ökse otunun bazı türleri) "
            "fotosentez yapar ama su-mineral konaktan alır.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Beslenme tiplerinin ayrım ağacı",
         "aciklama": "Soru kökünde 'inorganikten organik üretir' geçiyorsa **ototrof**; "
                     "'hazır organik alır' geçiyorsa **heterotrof** düşün.",
         "ciz": S.agac("Beslenme", [
             ("Ototrof", ["Fotoototrof", "Kemoototrof"]),
             ("Heterotrof", ["Holozoik", "Saprofit", "Parazit"]),
         ])},
        {"tur": "dikkat", "baslik": "Kemosentez Sadece Bakterilerde Var", "govde":
            "Fotosentezi bitki, alg ve bazı bakteriler yapar. **Kemosentezi yalnızca "
            "bazı bakteri ve arkeler** yapar; hiçbir bitki, mantar veya hayvan "
            "kemosentez yapamaz. Bu ayrım ÖSYM'de doğrudan sorulur."},

        {"tur": "altbolum", "baslik": "C. Solunum"},
        {"tur": "tanim", "kavram": "Hücresel solunum",
         "aciklama": "Besindeki kimyasal bağ enerjisinin **ATP**'ye dönüştürülmesidir. "
                     "Bütün canlılar solunum yapar — bitkiler dâhil, gece gündüz "
                     "fark etmeksizin."},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Oksijenli Solunum", "Oksijensiz Solunum (Fermantasyon)"],
         "oranlar": [0.20, 0.40, 0.40],
         "satirlar": [
             ["Oksijen", "Gerekli", "Gerekmez"],
             ["Yer", "Sitoplazma + **mitokondri**", "Yalnızca **sitoplazma**"],
             ["ATP verimi", "Yüksek (glikoz başına ~30-32 ATP)", "Düşük (glikoz başına **2 ATP**)"],
             ["Son ürün", "CO_2 + H_2O", "Etil alkol + CO_2 **ya da** laktik asit"],
             ["Glikoz tam parçalanır mı", "Evet", "Hayır — ara ürün kalır"],
             ["Örnek", "İnsan, bitki, çoğu canlı", "Maya (alkol), laktik asit bakterisi, "
              "oksijensiz kalan kas hücresi"],
         ]},
        {"tur": "tuzak", "baslik": "Bitkiler Gece Solunum, Gündüz Fotosentez Yapmaz",
         "govde": "Çok yapılan hata budur. Bitki **her zaman** solunum yapar. Işık "
                  "varken **aynı anda** fotosentez de yapar. Gündüz fotosentez hızı "
                  "solunum hızından yüksek olduğu için bitki dışarıya net oksijen verir; "
                  "gece fotosentez durduğu için net CO_2 verir. Solunumun kendisi hiç "
                  "durmaz."},
        {"tur": "cikmis", "baslik": "Klasik soru kalıbı", "govde":
            "'Bir bitkinin ışıksız ortamda bir süre bekletilmesi hangi olayı durdurur?' "
            "→ Cevap **fotosentez**tir, solunum değil. Şıklarda 'solunum durur' varsa "
            "bu **çeldiricidir**."},

        {"tur": "altbolum", "baslik": "D. Sindirim"},
        {"tur": "maddeler", "ogeler": [
            "**Hücre içi sindirim**: Besin hücre içine alınır, **lizozom** enzimleriyle "
            "parçalanır. Amip, paramesyum, akyuvar, sünger.",
            "**Hücre dışı sindirim**: Enzim hücre dışına salgılanır, besin dışarıda "
            "parçalanıp emilir. Saprofit mantar ve bakteriler, böcekçil bitkiler.",
            "Çok hücreli hayvanlarda **her ikisi** birlikte görülür: sindirim kanalında "
            "hücre dışı, hücre içinde lizozomla hücre içi.",
            "Sindirimin kimyasal adı **hidroliz**tir: büyük molekül + su → küçük moleküller. "
            "Her hidroliz basamağında **bir su harcanır**.",
        ]},
        {"tur": "dikkat", "baslik": "Sindirim Bütün Canlılarda Yok", "govde":
            "Bitkiler kendi ürettikleri besini zaten monomer hâlinde kullanır; "
            "**bitkilerde sindirim sistemi yoktur**. Ama depoladıkları nişastayı "
            "kullanmak için hücre içinde hidroliz yaparlar. Yani 'sindirim' dar anlamda "
            "ortak özellik değildir; **hidroliz** ortaktır."},

        {"tur": "altbolum", "baslik": "E. Boşaltım"},
        {"tur": "maddeler", "ogeler": [
            "Metabolizma sonucu oluşan **zararlı/fazla** maddelerin dışarı atılmasıdır.",
            "**Tek hücrelilerde**: kontraktil koful (tatlı suda yaşayan paramesyumda "
            "fazla suyu atar), difüzyon.",
            "**Bitkilerde**: yaprak dökümü, terleme (stoma), damlama, öz suyunda depolama. "
            "Bitkide **boşaltım organı yoktur**.",
            "**İnsanda**: böbrek (üre), akciğer (CO_2 ve su buharı), deri (ter), "
            "karaciğer (amonyağı üreye çevirir).",
            "Azotlu boşaltım ürünü, canlının yaşadığı ortama göre değişir: "
            "**amonyak** (bol su gerektirir, balıklar), **üre** (memeliler), "
            "**ürik asit** (en az su, kuş ve sürüngenler).",
        ]},
        {"tur": "tuzak", "baslik": "Dışkı Boşaltım Ürünü Değildir", "govde":
            "Dışkı (feçes), **sindirilemeyen** besin artığıdır; hiç hücreye girmemiştir, "
            "metabolizma sonucu oluşmamıştır. Bu yüzden **boşaltım değil, atık "
            "uzaklaştırmadır**. Boşaltım ürünü hücrede üretilir: üre, CO_2, ürik asit."},

        {"tur": "altbolum", "baslik": "F. Metabolizma"},
        {"tur": "tanim", "kavram": "Metabolizma",
         "aciklama": "Hücrede gerçekleşen bütün kimyasal tepkimelerin toplamıdır. "
                     "İki kolu vardır."},
        {"tur": "gorsel", "baslik": "Şema 3 — Anabolizma ve katabolizma",
         "aciklama": "**Anabolizma = yapım**, enerji harcar. **Katabolizma = yıkım**, "
                     "enerji açığa çıkarır. Büyüyen bir canlıda anabolizma katabolizmadan "
                     "hızlıdır.",
         "ciz": S.karsilastirma(
             "Anabolizma (Yapım)",
             ["Küçük molekülden büyük molekül",
              "Enerji **harcanır** (ATP tüketilir)",
              "Dehidrasyon sentezi — su açığa çıkar",
              "Fotosentez, protein sentezi, DNA eşlenmesi"],
             "Katabolizma (Yıkım)",
             ["Büyük molekülden küçük molekül",
              "Enerji **açığa çıkar** (ATP üretilir)",
              "Hidroliz — su harcanır",
              "Solunum, sindirim"],
             "Ortak",
             ["İkisi de **enzimlerle** yürür",
              "İkisi de her canlı hücrede olur",
              "Toplamı = metabolizma"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Bazal metabolizma**: Canlının tam dinlenme hâlinde, yalnızca hayatta "
            "kalmak için harcadığı en düşük enerji.",
            "Anabolizma > Katabolizma → **büyüme**",
            "Anabolizma = Katabolizma → **denge (erişkin)**",
            "Anabolizma < Katabolizma → **zayıflama, yaşlılık, açlık**",
        ]},

        {"tur": "altbolum", "baslik": "G. Homeostazi (İç Denge)"},
        {"tur": "tanim", "kavram": "Homeostazi",
         "aciklama": "Dış ortam değişse bile canlının **iç ortamını kararlı tutması**dır. "
                     "Vücut sıcaklığı, kan şekeri, kan pH'ı, su-tuz dengesi bu sayede "
                     "sabit kalır."},
        {"tur": "maddeler", "ogeler": [
            "Terleme, titreme, kılların dikleşmesi → **sıcaklık** dengesi.",
            "İnsülin ve glukagon → **kan şekeri** dengesi.",
            "ADH (antidiüretik hormon) → **su** dengesi.",
            "Homeostazi **enerji harcayarak** sürdürülür; bu yüzden ölü bir canlıda "
            "homeostazi yoktur.",
        ]},
        {"tur": "taktik", "baslik": "Homeostazi Sorusunu Tanıma", "govde":
            "Soru kökünde şu ifadelerden biri geçiyorsa cevap homeostazidir:",
         "ogeler": [
             "'dış ortam değişmesine rağmen', 'sabit tutulması', 'kararlı iç ortam'",
             "'geri bildirim (feedback)', 'düzenleyici mekanizma'",
             "Şıklarda 'enerji harcanmaz' varsa **yanlıştır** — homeostazi ATP ister.",
         ]},

        {"tur": "altbolum", "baslik": "H. Hareket"},
        {"tur": "maddeler", "ogeler": [
            "**Yer değiştirme hareketi**: Hayvanlar (kas), tek hücrelilerde kamçı, "
            "sil, yalancı ayak (amip).",
            "**Durum değiştirme hareketi**: Bitkilerde görülür — kök toprağa, gövde "
            "ışığa yönelir. Bitki yerinden **kalkıp gitmez** ama hareket eder.",
            "**Tropizma**: Yönlü hareket (fototropizma = ışığa, geotropizma = yer "
            "çekimine, hidrotropizma = suya, kemotropizma = kimyasala).",
            "**Nasti**: Yönsüz hareket (küstüm otunun dokununca kapanması, "
            "çiçeklerin gece kapanması).",
        ]},
        {"tur": "tuzak", "baslik": "Bitkiler Hareket Etmez Denemez", "govde":
            "'Hareket bütün canlıların ortak özelliğidir' ifadesi **doğrudur**. "
            "Bitkiler yer değiştirmez ama durum değiştirir. ÖSYM 'hareket ortak "
            "özellik değildir' dedirtmeye çalışır — tuzağa düşme."},

        {"tur": "altbolum", "baslik": "I. Uyarılara Tepki (İrritabilite)"},
        {"tur": "maddeler", "ogeler": [
            "Canlı, iç ve dış ortamdaki değişimi **algılar** ve buna **uygun** bir "
            "tepki verir.",
            "Tek hücrelilerde tüm hücre algılar; çok hücrelilerde **sinir sistemi ve "
            "duyu organları** görev alır.",
            "Bitkilerde sinir sistemi yoktur; uyarı **hormonlarla** (oksin, etilen) "
            "iletilir; tepki bu yüzden **yavaştır**.",
        ]},

        {"tur": "altbolum", "baslik": "J. Büyüme ve Gelişme"},
        {"tur": "maddeler", "ogeler": [
            "**Büyüme**: Hücre sayısının ve/veya hacminin artmasıyla **boyutun** artması. "
            "Niceliksel bir değişimdir.",
            "**Gelişme**: Hücrelerin **özelleşmesi** (farklılaşma) ve işlev kazanmasıdır. "
            "Niteliksel bir değişimdir.",
            "Hayvanlarda büyüme **sınırlıdır** (belirli bir yaşta durur); bitkilerde "
            "**sınırsızdır** — meristem dokusu ömür boyu bölünür.",
        ]},
        {"tur": "tuzak", "baslik": "Kristal Büyümesi Canlı Büyümesi Değildir", "govde":
            "Bir tuz kristali dıştan madde eklenerek büyür; canlı **içten**, kendi "
            "hücreleriyle büyür. Sorularda 'kristaller de büyür, öyleyse canlıdır' "
            "mantığı çeldirici olarak kurulur."},

        {"tur": "altbolum", "baslik": "K. Üreme"},
        {"tur": "maddeler", "ogeler": [
            "**Eşeysiz üreme**: Tek ata, mitoz bölünme, **kalıtsal çeşitlilik yok**. "
            "Bölünerek (amip, bakteri), tomurcuklanma (hidra, bira mayası), "
            "sporla (mantar, eğrelti), vejetatif (çelik, soğan, yumru), "
            "rejenerasyon (deniz yıldızı), partenogenez (arı — döllenmemiş yumurtadan).",
            "**Eşeyli üreme**: İki ata, mayoz + döllenme, **kalıtsal çeşitlilik var**. "
            "Değişen çevre koşullarına uyum avantajı sağlar.",
            "Üreme, **birey için** hayati değildir; **tür için** zorunludur. Üremeyen "
            "bir birey ölmez, ama üremeyen bir tür yok olur.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 4 — Üreme tipleri ve sonuçları",
         "aciklama": "Eşeysiz üreme **hızlıdır**, eşeyli üreme **çeşitlilik** üretir. "
                     "Ortam kararlıysa eşeysiz, değişkense eşeyli üreme avantajlıdır.",
         "ciz": S.karsilastirma(
             "Eşeysiz Üreme",
             ["Tek ata yeterli", "Mitozla olur", "Yavrular ataya **özdeş**",
              "Hızlı ve enerji açısından ucuz", "Değişen ortamda dezavantajlı"],
             "Eşeyli Üreme",
             ["İki ata gerekir", "Mayoz + döllenme", "Yavrular **farklı**",
              "Yavaş ve enerji açısından pahalı", "Değişen ortamda avantajlı"],
             "Ortak",
             ["Türün sürekliliğini sağlar", "DNA aktarımı vardır",
              "Kalıtsal bilgi yavruya geçer"])},

        {"tur": "altbolum", "baslik": "L. Adaptasyon (Uyum)"},
        {"tur": "maddeler", "ogeler": [
            "Canlının, yaşadığı ortamda **hayatta kalma ve üreme** şansını artıran "
            "kalıtsal özelliklerdir.",
            "**Kalıtsaldır** — sonraki nesle aktarılır. Sonradan kazanılan, kalıtsal "
            "olmayan değişimler (güneşte yanmak, kas geliştirmek) adaptasyon değildir.",
            "**Birey değil, popülasyon** adapte olur. Bir birey ömrü boyunca 'adapte "
            "olmaya karar veremez'; uygun özelliği taşıyanlar daha çok ürer.",
            "Örnekler: kaktüsün yapraklarının dikene dönüşmesi, kutup ayısının kalın "
            "yağ tabakası, çölde yaşayan hayvanların ürik asitle boşaltım yapması.",
        ]},
        {"tur": "tuzak", "baslik": "Adaptasyon Bilinçli Bir Tercih Değildir", "govde":
            "'Deve, çölde yaşamak için hörgüç geliştirdi' cümlesi **yanlıştır**. "
            "Doğrusu: hörgüçlü bireyler çölde daha çok hayatta kaldı ve ürediği için "
            "bu özellik popülasyonda yaygınlaştı. ÖSYM amaç-yönelimli cümleleri "
            "çeldirici yapar."},

        {"tur": "altbolum", "baslik": "M. Organizasyon"},
        {"tur": "paragraf", "metin":
            "Canlıda hiçbir yapı rastgele durmaz; her basamak bir üsttekini kurar. "
            "**Hücre altı basamaklar canlı değildir** — organel tek başına yaşayamaz."},
        {"tur": "gorsel", "baslik": "Şema 5 — Organizasyon basamakları",
         "aciklama": "Canlılık **hücre** basamağında başlar. Atom, molekül ve organel "
                     "canlı değildir; ancak canlının yapısına katılır.",
         "ciz": S.piramit(
             ["Biyosfer", "Ekosistem", "Komünite", "Popülasyon", "Organizma"],
             ["Dünyadaki tüm ekosistemler",
              "Komünite + cansız çevre",
              "Aynı bölgedeki tüm popülasyonlar",
              "Aynı türden bireyler topluluğu",
              "Tek bir canlı birey"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Cansız basamaklar**: Atom → Molekül → Organel",
            "**Canlılığın başladığı basamak**: **Hücre**",
            "**Çok hücrelide devam**: Hücre → Doku → Organ → Sistem → Organizma",
            "**Ekolojik basamaklar**: Organizma → Popülasyon → Komünite → Ekosistem "
            "→ Biyosfer",
            "Tek hücreli bir canlıda **doku, organ ve sistem basamağı yoktur**; "
            "hücreden doğrudan organizmaya geçilir.",
        ]},
        {"tur": "cikmis", "baslik": "Basamak sorusu nasıl çözülür", "govde":
            "Soruda 'aynı türden bireyler' geçiyorsa **popülasyon**; 'farklı türler bir "
            "arada' geçiyorsa **komünite**; 'canlı + cansız birlikte' geçiyorsa "
            "**ekosistem** denir. Tek ayırt edici kelime yeterlidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Virüsler — Canlı mı, Cansız mı?"},
        {"tur": "paragraf", "metin":
            "Virüsler TYT'nin en sevdiği **istisna**dır. Ortak özellikler sorulduğunda "
            "şıklardaki virüs neredeyse her zaman doğru cevabın anahtarıdır."},
        {"tur": "tablo",
         "basliklar": ["Canlı Özellikleri", "Cansız Özellikleri"],
         "oranlar": [0.5, 0.5],
         "satirlar": [
             ["**Nükleik asit** taşır (DNA **veya** RNA)", "**Hücresel yapısı yoktur**"],
             ["Konak hücre içinde **çoğalır**", "Konak dışında **kristalleşir**"],
             ["**Kalıtsal madde** aktarır", "Metabolizması **yoktur** — ATP üretemez"],
             ["**Mutasyon** geçirir, çeşitlenir", "Enzim sistemi **yoktur**"],
             ["Konağa **özgüldür** (belirli hücreyi seçer)", "Kendi başına **üreyemez**"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "Yapısı: **protein kılıf (kapsit)** + içinde **tek çeşit nükleik asit**. "
            "Bir virüste **hem DNA hem RNA aynı anda bulunmaz**.",
            "**Zorunlu (obligat) hücre içi parazittir** — canlı bir hücre bulmadan "
            "hiçbir yaşamsal olayı gerçekleştiremez.",
            "**Bakteriyofaj**: Bakteri enfekte eden virüs. Kuyruk ve kuyruk iplikleriyle "
            "bakteriye tutunur, **yalnızca nükleik asidini** içeri gönderir.",
            "**Antibiyotik virüse etki etmez**; antibiyotik bakteri hücre duvarını ve "
            "enzimlerini hedefler, virüste ikisi de yoktur. Virüse karşı **aşı** ve "
            "antiviral ilaç kullanılır.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 6 — Bakteriyofajın çoğalma yolu",
         "aciklama": "Virüs kendi başına hiçbir basamağı yapamaz; **konağın** ribozomunu, "
                     "enzimini ve ATP'sini kullanır.",
         "ciz": S.akis(
             ["Tutunma", "Nükleik asit girişi", "Çoğalma", "Birleşme", "Konağın parçalanması"],
             ["kuyruk iplikleri", "kapsit dışarıda kalır", "konak ribozomu kullanılır",
              "yeni virüsler", "liziz"])},
        {"tur": "tuzak", "baslik": "Virüs 'Üremez', 'Çoğalır'", "govde":
            "Virüs için üreme değil **çoğalma** denir; çünkü üreme canlıya özgü bir "
            "olaydır ve virüs bunu kendi başına yapamaz. Sınavda 'virüsler ürer' "
            "ifadesi genellikle **yanlış** kabul edilir; 'konak içinde çoğalır' "
            "ifadesi doğrudur."},
        {"tur": "dikkat", "baslik": "Viroid ve Prion", "govde":
            "**Viroid**: Yalnızca RNA'dan oluşur, protein kılıfı bile yoktur; bitkilerde "
            "hastalık yapar. **Prion**: Yalnızca **proteinden** oluşan, nükleik asit "
            "taşımayan hastalık etkenidir (deli dana hastalığı). İkisi de virüsten daha "
            "basit yapılardır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Sık Karıştırılan Kavram Çiftleri"},
        {"tur": "tablo",
         "basliklar": ["Kavram", "Karıştırılan", "Ayırt Edici Ölçüt"],
         "oranlar": [0.24, 0.24, 0.52],
         "satirlar": [
             ["Büyüme", "Gelişme", "Büyüme **boyut**, gelişme **işlev** kazandırır."],
             ["Boşaltım", "Dışkılama", "Boşaltım ürünü **hücrede üretilir**; dışkı hiç "
              "hücreye girmemiştir."],
             ["Solunum", "Nefes alıp verme", "Solunum **hücrede** olur; nefes alıp verme "
              "gaz taşınmasıdır."],
             ["Adaptasyon", "Modifikasyon", "Adaptasyon **kalıtsaldır**; modifikasyon "
              "(güneşte yanmak) kalıtsal değildir."],
             ["Ototrof", "Heterotrof", "Ototrof **inorganikten organik üretir**."],
             ["Popülasyon", "Komünite", "Popülasyon **tek tür**, komünite **çok tür**."],
             ["Koloni", "Çok hücreli", "Kolonide **iş bölümü tam değildir**; hücreler "
              "ayrılırsa yaşamaya devam eder."],
         ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Canlılık **hücre** basamağında başlar; organel canlı değildir.",
            "Virüs: nükleik asit + protein kılıf; metabolizması yok, konak şart.",
            "Bitki **her zaman** solunum yapar, **ışık varken** ayrıca fotosentez yapar.",
            "Adaptasyon **popülasyonun** özelliğidir, bireyin tercihi değildir.",
            "Kemosentezi **yalnızca bazı bakteri ve arkeler** yapar.",
            "Fermantasyonda glikoz **tam parçalanmaz**, 2 ATP üretilir.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Sevgili öğrencim, aşağıdaki soruları ÖSYM'nin düşünme biçimine göre "
            "hazırladım. Boşluğa yalnızca cevabı değil, **o cevaba nasıl vardığını** "
            "da kısaca yaz. Cevap anahtarı bir sonraki bölümde; oraya bakmadan önce "
            "her soruyu bitir. Kalemin güçlü olsun!",
        "satir_sayisi": 2,
        "sorular": [
            "Bir kristalin büyümesi ile bir fidanın büyümesi arasındaki temel fark nedir?",
            "Virüslerin canlı sayılmasını engelleyen **en belirleyici** özellik hangisidir? Neden?",
            "Bir bakteride bulunup bir virüste bulunmayan üç yapı yazınız.",
            "Öglena hem ototrof hem heterotrof beslenebilir. Bu durum ona hangi avantajı sağlar?",
            "Kemoototrof bir bakteri ile fotoototrof bir bitkinin ortak yönü nedir?",
            "'Bitkiler gece solunum, gündüz fotosentez yapar' ifadesindeki hata nedir?",
            "Fermantasyon yapan bir hücrede glikozun tam parçalanmamasının ATP verimine etkisini açıklayınız.",
            "Tenya (şerit) tam parazittir. Bu canlıda sindirim sisteminin körelmiş olmasının nedeni nedir?",
            "Saprofit beslenmenin ekosistem açısından neden vazgeçilmez olduğunu yazınız.",
            "Dışkının boşaltım ürünü sayılmamasının gerekçesini bir cümleyle yazınız.",
            "Çölde yaşayan bir sürüngenin ürik asitle boşaltım yapması hangi canlılık ölçütüne örnektir?",
            "Anabolizma hızı katabolizma hızından yüksek olan bir canlı hangi dönemdedir?",
            "Bazal metabolizma hızı ile toplam enerji ihtiyacı arasındaki fark nedir?",
            "Terleme ile homeostazi arasındaki ilişkiyi kurunuz.",
            "Homeostazinin ATP gerektirmesi, ölü bir bedende neden iç dengenin bozulduğunu açıklar mı?",
            "Küstüm otunun dokununca yaprağını kapatması tropizma mıdır, nasti midir? Neden?",
            "Bitkilerde uyarıya tepkinin hayvanlara göre yavaş olmasının yapısal nedeni nedir?",
            "Bir amipte doku ve organ basamağının bulunmamasının nedeni nedir?",
            "Volvoks kolonisi neden çok hücreli bir canlı sayılmaz?",
            "Rejenerasyon ile eşeysiz üreme arasındaki ilişkiyi deniz yıldızı örneğiyle açıklayınız.",
            "Partenogenezin eşeyli mi eşeysiz mi üreme sayılacağını gerekçesiyle tartışınız.",
            "Ortamın hızla değiştiği bir bölgede eşeyli üreyen bir tür neden avantajlıdır?",
            "'Zürafanın boynu, yüksek yaprakları yemek için uzadı' cümlesindeki bilimsel hata nedir?",
            "Güneşte yanan bir insanın bu özelliğinin çocuğuna geçmemesinin nedeni nedir?",
            "Adaptasyonun birey değil popülasyon düzeyinde gerçekleştiğini bir örnekle açıklayınız.",
            "Organizasyon basamaklarında canlılığın hücreyle başlamasının gerekçesi nedir?",
            "Aynı ormandaki tüm karaçamlar hangi organizasyon basamağını oluşturur?",
            "Bir gölde yaşayan tüm canlılar + suyun sıcaklığı + dipteki mineraller hangi basamağı oluşturur?",
            "Antibiyotiğin grip virüsüne etki etmemesinin yapısal nedenini açıklayınız.",
            "Bakteriyofajın bakteriye yalnızca nükleik asidini göndermesi ne anlama gelir?",
            "Bir virüste hem DNA hem RNA bulunmamasının sonucu nedir?",
            "Prion ile virüs arasındaki temel yapı farkı nedir?",
            "Hücre içi ve hücre dışı sindirimi yapan birer canlı örneği vererek farkı yazınız.",
            "Hidroliz tepkimesinde suyun rolünü tek cümleyle açıklayınız.",
            "Bitkilerde boşaltım organı olmamasına rağmen boşaltımın nasıl gerçekleştiğini yazınız.",
            "Mitokondri taşımayan bir hücre oksijenli solunum yapabilir mi? Gerekçelendiriniz.",
            "Tek hücreli bir canlıda 'iş bölümü' kavramı nasıl karşılanır?",
            "Bir canlının yalnızca 'uyarıya tepki verme' özelliğine bakarak canlı ilan edilememesinin nedeni nedir?",
            "Fotosentez ve kemosentez arasındaki tek farkın enerji kaynağı olduğu söylenebilir mi?",
            "Ortak özellikler listesindeki hangi ölçüt **birey için** değil yalnızca **tür için** zorunludur?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Kristal **dıştan** madde eklenerek büyür; fidan **içten**, hücre bölünmesi ve hücre büyümesiyle büyür. Kristalde metabolizma yoktur.",
            "**Hücresel yapısının olmaması.** Metabolizması, enzim sistemi ve ATP üretimi bu yüzden yoktur; konak olmadan hiçbir yaşamsal olay gerçekleştiremez.",
            "Ribozom, hücre zarı, sitoplazma (ayrıca hücre duvarı ve enzim sistemi de yazılabilir).",
            "Işık varsa fotosentezle kendi besinini üretir, ışık yoksa hazır besin alır; **değişen ortamda hayatta kalma** şansı artar.",
            "İkisi de **inorganik maddeden organik besin üretir**; yani ikisi de ototroftur. Fark, kullandıkları enerji kaynağıdır.",
            "Bitki **her zaman** solunum yapar. Işık varken buna ek olarak fotosentez de yapar. Solunum gündüz durmaz.",
            "Glikoz ara ürüne kadar parçalandığı için bağ enerjisinin çoğu üründe kalır; bu yüzden yalnızca **2 ATP** üretilir.",
            "Konağın **sindirilmiş besinini** doğrudan emdiği için kendi sindirim sistemine ihtiyaç duymaz; kullanılmayan yapı körelmiştir.",
            "Saprofitler ölü organik maddeyi **inorganiğe** çevirerek madde döngüsünü tamamlar; olmasalarsa üreticiler mineral bulamaz.",
            "Dışkı **hiç hücreye girmemiş**, metabolizma sonucu oluşmamıştır; sindirilemeyen besin artığıdır.",
            "**Adaptasyon** (ve boşaltım). Ürik asit en az suyla atıldığı için su kaybını en aza indirir.",
            "**Büyüme dönemi** (gençlik, gelişme). Yapım yıkımdan hızlıdır.",
            "Bazal metabolizma yalnızca **tam dinlenmede** hayatta kalma enerjisidir; toplam ihtiyaç buna hareket, sindirim ve büyüme eklenerek bulunur.",
            "Vücut sıcaklığı yükselince ter buharlaşırken ısı alır ve sıcaklık **sabit tutulur**; bu bir homeostazi mekanizmasıdır.",
            "Evet. Homeostazi **enerji harcayarak** sürdürülür; ATP üretimi durunca düzenleme de durur ve iç ortam dış ortamla dengelenir.",
            "**Nasti**. Uyarının geldiği yön tepkinin yönünü belirlemez; yönsüz bir harekettir.",
            "Bitkilerde **sinir sistemi yoktur**; uyarı hormonlarla (oksin gibi) iletilir, hormon taşınması yavaştır.",
            "Amip **tek hücrelidir**; bütün yaşamsal işleri tek hücre yürütür, hücreler arası iş bölümü ve doku oluşmaz.",
            "Koloniyi oluşturan hücreler arasında **tam iş bölümü yoktur**; hücreler ayrıldığında tek başına yaşayabilir.",
            "Kopan kolun yeni birey oluşturması hâlinde rejenerasyon aynı zamanda **eşeysiz üreme** olur; yalnızca onarım olursa üreme sayılmaz.",
            "**Eşeysizdir**: döllenme olmaz, yavru tek atadan ve mitozla oluşur. (Mayozla oluşan yumurtadan gelişmesi onu eşeyli yapmaz.)",
            "Eşeyli üreme **kalıtsal çeşitlilik** üretir; değişen koşullara uygun birey bulunma olasılığı artar.",
            "Cümle **amaç yükleyen** bir anlatımdır. Doğrusu: boynu uzun bireyler daha çok besine ulaşıp daha çok üredi, özellik popülasyonda yaygınlaştı.",
            "Bu bir **modifikasyondur**; vücut hücrelerinde oluşur, **üreme hücrelerinin DNA'sını değiştirmez**, bu yüzden kalıtsal değildir.",
            "Antibiyotiğe dirençli bakterilerin hayatta kalıp çoğalması: birey değişmez, **popülasyonun gen havuzu** değişir.",
            "Hücre, **kendi başına** bütün yaşamsal olayları yürütebilen en küçük yapıdır; organel tek başına yaşayamaz.",
            "**Popülasyon** (aynı tür, aynı bölge).",
            "**Ekosistem** (canlı komünite + cansız çevre).",
            "Antibiyotik **hücre duvarı** ve **bakteri enzimlerini** hedefler; virüste ne hücre duvarı ne de enzim sistemi vardır.",
            "Virüsün kalıtsal bilgisi yeni virüsleri **konağın** ribozom, enzim ve ATP'siyle ürettirir; kapsit dışarıda kalır.",
            "Virüs **tek çeşit** kalıtsal madde taşır; bu yüzden DNA'lı ve RNA'lı virüsler diye ayrılırlar ve çoğalma yolları farklıdır.",
            "**Prion yalnızca proteindir**, nükleik asit taşımaz. Virüste ise nükleik asit + protein kılıf birlikte bulunur.",
            "Hücre içi: **amip** (besin kofulu + lizozom). Hücre dışı: **şapkalı mantar** (enzimi dışarı salgılar, sonra emer).",
            "Hidrolizde büyük molekülün bağı **bir su molekülü harcanarak** kırılır; su bağa katılır.",
            "**Yaprak dökümü, terleme (stoma), damlama** ve zararlı maddeyi kofulda depolama yoluyla.",
            "**Hayır.** Oksijenli solunumun Krebs ve ETS basamakları mitokondride geçer. (Prokaryotlarda bu işi zar kıvrımları görür — ökaryot hücre için cevap hayırdır.)",
            "Tek hücrede iş bölümü **organeller** arasındadır; her organel farklı bir görevi üstlenir.",
            "Çünkü canlılık **tek bir ölçütle** tanımlanmaz; bir robot da uyarıya tepki verir ama metabolizması ve üremesi yoktur.",
            "**Hayır**, tek fark enerji kaynağı değildir; fotosentez ışık enerjisini, kemosentez **inorganik maddelerin yükseltgenmesinden** çıkan kimyasal enerjiyi kullanır ve kemosentezde ışık soğurucu pigment bulunmaz.",
            "**Üreme.** Üremeyen bir birey yaşamını sürdürür; ama üremeyen bir tür yok olur.",
        ],
    },
}
