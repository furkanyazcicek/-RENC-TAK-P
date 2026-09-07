"""TYT Matematik — Sayı Basamakları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: SAYI BASAMAKLARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Sayı Basamakları",
    "alt_baslik": "Ham bilgi notu — basamak ve sayı değeri, çözümleme, rakam "
                  "koşulları ve taban aritmetiği; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Sayı Basamakları",
        "kazanimlar": "Bir sayıyı basamaklarına ayırır ve çözümler; rakamlarla "
                      "ilgili koşullu problemleri çözer; sayının rakamları "
                      "üzerinde işlem yapar.",
        "kapsam": "Rakam ve sayı kavramı, basamak değeri, sayı değeri, çözümleme, "
                  "rakamları toplamı, en büyük-en küçük sayı, rakamların yer "
                  "değiştirmesi, 45 alıştırma",
        "nasil": "Bu konu **çözümleme** üzerine kuruludur. İki basamaklı sayıyı "
                 "**10a + b** diye yazmayı refleks hâline getir; soruların "
                 "çoğu bu tek adımla denkleme dönüşür.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de basamak sorusu genellikle **rakamların yer değiştirmesi** "
                    "üzerine kurulur; o bölümü atlamadan çalış.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Rakam, Sayı ve Basamak"},
        {"tur": "maddeler", "ogeler": [
            "**Rakam**: Sayıları yazmaya yarayan **sembollerdir**. Onluk sistemde "
            "**10 rakam** vardır: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.",
            "**Sayı**: Rakamların bir araya gelmesiyle oluşan **çokluk "
            "belirtendir**. 25 bir sayıdır; 2 ve 5 rakamdır.",
            "**Bir sayının en soldaki rakamı (ilk basamağı) SIFIR OLAMAZ.** "
            "Üç basamaklı bir sayı 0 ile başlayamaz.",
            "**Basamak değeri**: Rakamın bulunduğu basamağın değeridir "
            "(birler, onlar, yüzler...).",
            "**Sayı değeri (rakam değeri)**: Rakamın **kendisidir**; nerede "
            "olursa olsun değişmez.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — 4275 sayısının çözümlenmesi",
         "aciklama": "**Basamak değeri = rakam × basamağın ağırlığı.** "
                     "**Sayı değeri = rakamın kendisi.** İkisi karıştırılmamalıdır.",
         "ciz": S.kartlar([
             ("4 — Binler", "sayı değeri: **4**\nbasamak değeri: **4000**"),
             ("2 — Yüzler", "sayı değeri: **2**\nbasamak değeri: **200**"),
             ("7 — Onlar", "sayı değeri: **7**\nbasamak değeri: **70**"),
             ("5 — Birler", "sayı değeri: **5**\nbasamak değeri: **5**"),
             ("Sayı değerleri toplamı", "4 + 2 + 7 + 5 = **18**"),
             ("Basamak değerleri toplamı", "4000+200+70+5 = **4275**"),
         ], sutun=3)},
        {"tur": "dikkat", "baslik": "Basamak Değerleri Toplamı = Sayının Kendisi",
         "govde": "Bir sayının **basamak değerleri toplamı her zaman sayının "
                  "kendisine eşittir**. Bu, hesabını kontrol etmenin en hızlı "
                  "yoludur. **Sayı değerleri toplamı** ise 'rakamları toplamı' "
                  "diye de anılır ve sayıdan çok küçüktür."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Çözümleme"},
        {"tur": "formul",
         "baslik": "Sayıların çözümlenmiş biçimi",
         "ifade": "İki basamaklı:  ab = 10a + b\n"
                  "Üç basamaklı:   abc = 100a + 10b + c\n"
                  "Dört basamaklı: abcd = 1000a + 100b + 10c + d",
         "terimler": [
             ("a", "**Yüzler / ilk basamak** rakamı — sıfır olamaz"),
             ("Üst çizgi", "Rakamların yan yana yazıldığını gösterir; "
                           "**çarpım değildir**"),
         ],
         "not": "**ab ile a·b farklıdır.** 'ab' iki basamaklı bir sayıdır "
                "(örneğin 35); 'a·b' ise iki rakamın çarpımıdır (3·5 = 15). "
                "Sorularda bu ayrım kritik önemdedir."},
        {"tur": "cozum",
         "baslik": "Çözümlemeyle Denklem Kurma",
         "soru": "İki basamaklı **ab** sayısının rakamları toplamı **11**'dir. "
                 "Rakamları yer değiştirdiğinde sayı **27 artmaktadır**. "
                 "Bu sayı kaçtır?",
         "adimlar": [
             "Sayıyı çözümle: **ab = 10a + b**. Yer değiştirmiş hâli: "
             "**ba = 10b + a**.",
             "Birinci koşul: a + b = **11**.",
             "İkinci koşul: (10b + a) − (10a + b) = 27 → **9b − 9a = 27** → "
             "**b − a = 3**.",
             "İki denklemi topla: (a + b) + (b − a) = 11 + 3 → **2b = 14** → "
             "**b = 7**.",
             "a = 11 − 7 = **4**. Sayı: **47**. (Kontrol: 74 − 47 = 27)",
         ],
         "sonuc": "Sayı 47'dir."},
        {"tur": "taktik", "baslik": "Yer Değiştirme Sorularının Kısayolu", "govde":
            "Rakamların yer değiştirmesi sorularında iki hazır sonuç işini "
            "çok kısaltır:",
         "ogeler": [
             "**İki basamaklı sayıda**: (yeni sayı) − (eski sayı) = **9 × "
             "(b − a)**. Yani fark **her zaman 9'un katıdır**.",
             "**Üç basamaklı sayıda**, yalnızca **birler ve yüzler** yer "
             "değiştirirse fark = **99 × (c − a)**; fark **99'un katıdır**.",
             "Soruda 'fark 27' deniyorsa 27 ÷ 9 = 3 → rakamlar arasındaki "
             "fark **3**'tür. Denklem kurmadan bu bilgiye ulaşırsın.",
         ]},
        {"tur": "cozum",
         "baslik": "Üç Basamaklı Sayıda Çözümleme",
         "soru": "**abc** üç basamaklı bir sayıdır. **a + b + c = 15** ve "
                 "**abc − cba = 396** ise **a − c** kaçtır?",
         "adimlar": [
             "Çözümle: abc = 100a + 10b + c, cba = 100c + 10b + a.",
             "Farkı al: (100a + 10b + c) − (100c + 10b + a) = **99a − 99c**.",
             "99(a − c) = 396.",
             "a − c = 396 / 99.",
         ],
         "sonuc": "a − c = 4'tür."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "En Büyük ve En Küçük Sayı"},
        {"tur": "gorsel", "baslik": "Şema 2 — En büyük ve en küçük sayı nasıl kurulur?",
         "aciklama": "Kural basittir: **büyük sayı istiyorsan büyük rakamı sola, "
                     "küçük sayı istiyorsan küçük rakamı sola** yazarsın. Tek "
                     "istisna, **en soldaki basamağın 0 olamaması**dır — bu, en "
                     "çok atlanan ayrıntıdır.",
         "ciz": S.karsilastirma(
             "EN BÜYÜK sayı",
             ["Rakamları **büyükten küçüğe** diz",
              "En büyük rakam **en sola**",
              "Rakamlar farklı olmalıysa **tekrar etme**",
              "Örnek (4 basamaklı): **9876**"],
             "EN KÜÇÜK sayı",
             ["Rakamları **küçükten büyüğe** diz",
              "**İlk basamak 0 olamaz**",
              "0 varsa **ikinci** basamağa konur",
              "Örnek (4 basamaklı): **1023**"],
             "Sık sorulan ek koşullar",
             ["\"Rakamları farklı\" → tekrar yok",
              "\"Çift sayı\" → son basamak çift",
              "\"3'e bölünen\" → rakam toplamı 3'ün katı"])},
        {"tur": "maddeler", "ogeler": [
            "**En büyük sayıyı** oluşturmak için rakamlar **soldan sağa "
            "büyükten küçüğe** dizilir.",
            "**En küçük sayıyı** oluşturmak için rakamlar **küçükten büyüğe** "
            "dizilir; ama **ilk basamağa sıfır konulamaz**. Sıfır varsa "
            "**ikinci sıraya** yazılır.",
            "**Rakamları farklı** en büyük üç basamaklı sayı: **987**. "
            "**Rakamları farklı** en küçük üç basamaklı sayı: **102**.",
            "**En büyük üç basamaklı sayı 999**, **en küçük üç basamaklı sayı "
            "100**'dür (rakamlar farklı olmak zorunda değilse).",
        ]},
        {"tur": "cozum",
         "baslik": "En Büyük ve En Küçük Fark",
         "soru": "Rakamları **birbirinden farklı** üç basamaklı en büyük sayı "
                 "ile en küçük sayının **farkı** kaçtır?",
         "adimlar": [
             "En büyük: rakamlar büyükten küçüğe → **987**.",
             "En küçük: küçükten büyüğe ama başa sıfır konulamaz → "
             "**102** (1, 0, 2 sırasıyla).",
             "Fark: 987 − 102.",
         ],
         "sonuc": "Fark 885'tir."},
        {"tur": "tuzak", "baslik": "En Küçük Sayıda Sıfır Tuzağı", "govde":
            "Rakamları farklı en küçük üç basamaklı sayıyı **012** diye yazmak "
            "**yanlıştır**; bu iki basamaklı 12 sayısıdır. Sıfır **ilk basamağa "
            "gelemez**, bu yüzden doğru cevap **102**'dir. Bu tuzak neredeyse "
            "her yıl kurulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Rakamlarla İlgili Sayma"},
        {"tur": "maddeler", "ogeler": [
            "**Rakamları tekrarlı olabilen** n basamaklı sayı sayısı: "
            "ilk basamak **9** seçenek (sıfır hariç), diğerleri **10**'ar "
            "seçenektir.",
            "Üç basamaklı sayı sayısı: 9 × 10 × 10 = **900**.",
            "**Rakamları farklı** üç basamaklı sayı sayısı: 9 × 9 × 8 = **648**. "
            "(İlk basamak sıfır olamaz: 9 seçenek. İkinci basamak sıfır olabilir "
            "ama ilkiyle aynı olamaz: 9. Üçüncü: kalan 8.)",
            "**Çift rakamla biten** sayı sayısı hesaplanırken **son basamak "
            "önce seçilir**; çünkü en kısıtlı basamak odur.",
        ]},
        {"tur": "taktik", "baslik": "Sayma Sorularında Sıra", "govde":
            "Basamak sayma sorularında hangi basamaktan başlayacağın önemlidir:",
         "ogeler": [
             "**En kısıtlı basamaktan başla.** Koşul son basamaktaysa (çift "
             "bitmeli, 5'e bölünmeli) **önce onu seç**.",
             "Sonra **ilk basamağı** seç (sıfır olamaz kuralı burada devreye girer).",
             "Kalan basamakları en son doldur.",
             "Seçenek sayılarını **çarparak** sonuca ulaş.",
         ]},
        {"tur": "cozum",
         "baslik": "Koşullu Sayma",
         "soru": "Rakamları **birbirinden farklı**, **çift** olan üç basamaklı "
                 "kaç sayı vardır?",
         "adimlar": [
             "Sayı çift olacağı için **son basamak** 0, 2, 4, 6, 8'den biri "
             "olmalı. Ama sıfır özel durum yaratır; **iki hâlde** incelenir.",
             "**Durum 1 — son basamak 0**: 1 seçenek. İlk basamak: kalan 9 "
             "rakamdan biri → 9. Orta basamak: kalan 8 → 8. Toplam: "
             "1 × 9 × 8 = **72**.",
             "**Durum 2 — son basamak 2, 4, 6, 8**: 4 seçenek. İlk basamak "
             "sıfır ve son rakam olamaz → 8. Orta basamak: kalan 8 → 8. "
             "Toplam: 4 × 8 × 8 = **256**.",
             "Genel toplam: 72 + 256.",
         ],
         "sonuc": "328 sayı vardır."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Ardışık Rakam ve Özel Durumlar"},
        {"tur": "maddeler", "ogeler": [
            "**Rakamları toplamı** ile ilgili sorularda sayının **9 ile "
            "bölümünden kalan**, rakamları toplamının 9 ile bölümünden kalana "
            "**eşittir**. Bu, kontrol için çok kullanışlıdır.",
            "Bir sayı ile **rakamları toplamının farkı her zaman 9'un katıdır**.",
            "**Palindrom sayı**: Soldan da sağdan da aynı okunan sayıdır "
            "(121, 3443, 78987).",
            "Üç basamaklı palindromlar **aba** biçimindedir ve **101a + 10b** "
            "olarak çözümlenir. Sayısı: a için 9, b için 10 → **90 tane**.",
        ]},
        {"tur": "cozum",
         "baslik": "Sayı ile Rakamları Toplamı Farkı",
         "soru": "İki basamaklı bir sayı ile **rakamları toplamının farkı** "
                 "her zaman neye bölünür?",
         "adimlar": [
             "Sayı: **10a + b**. Rakamları toplamı: **a + b**.",
             "Fark: (10a + b) − (a + b) = **9a**.",
             "9a ifadesi her zaman **9'un katıdır**.",
         ],
         "sonuc": "Fark her zaman 9'a tam bölünür."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**İlk basamak sıfır olamaz.**",
            "**Basamak değerleri toplamı = sayının kendisi.**",
            "**ab = 10a + b**, **abc = 100a + 10b + c**.",
            "İki basamaklıda yer değiştirme farkı = **9 × (rakam farkı)**.",
            "Üç basamaklıda (birler-yüzler) fark = **99 × (rakam farkı)**.",
            "Rakamları farklı en büyük üç basamaklı: **987**, en küçük: **102**.",
            "Üç basamaklı sayı sayısı **900**, rakamları farklı olan **648**.",
            "Sayı − rakamları toplamı = **9'un katı**.",
            "Sayma sorularında **en kısıtlı basamaktan başla**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Her soruda önce **sayıyı çözümle** (10a + b biçiminde yaz), sonra "
            "koşulları denkleme çevir. Sonucu bulduğunda **sayıyı yerine koyup "
            "kontrol et** — bu alışkanlık sınavda çok hata önler.",
        "satir_sayisi": 3,
        "sorular": [
            "Rakam ile sayı arasındaki farkı yazınız.",
            "Onluk sayma sisteminde kaç rakam vardır?",
            "Bir sayının ilk basamağı hangi rakam olamaz?",
            "Basamak değeri ile sayı değeri arasındaki farkı açıklayınız.",
            "4275 sayısında 2'nin basamak değeri kaçtır?",
            "Aynı sayıda 7'nin sayı değeri kaçtır?",
            "4275 sayısının sayı değerleri toplamı kaçtır?",
            "4275 sayısının basamak değerleri toplamı kaçtır?",
            "Basamak değerleri toplamı neden sayının kendisine eşittir?",
            "İki basamaklı ab sayısının çözümlenmiş biçimini yazınız.",
            "Üç basamaklı abc sayısının çözümlenmiş biçimini yazınız.",
            "ab ile a·b arasındaki farkı bir örnekle açıklayınız.",
            "İki basamaklı bir sayının rakamları yer değiştirirse fark neye bölünür?",
            "Üç basamaklı sayıda birler ve yüzler yer değiştirirse fark neye bölünür?",
            "Rakamları toplamı 11 olan iki basamaklı sayı, rakamları yer değiştirince 27 artıyorsa sayı kaçtır?",
            "Rakamları toplamı 9 olan iki basamaklı sayı, yer değiştirince 45 artıyorsa sayı kaçtır?",
            "abc − cba = 396 ise a − c kaçtır?",
            "abc − cba = 198 ise a − c kaçtır?",
            "Rakamları farklı en büyük üç basamaklı sayı kaçtır?",
            "Rakamları farklı en küçük üç basamaklı sayı kaçtır?",
            "Yukarıdaki iki sayının farkı kaçtır?",
            "En büyük üç basamaklı sayı ile en küçük üç basamaklı sayının farkı kaçtır?",
            "Rakamları farklı en küçük üç basamaklı sayıyı 012 yazmak neden yanlıştır?",
            "Rakamları farklı en büyük dört basamaklı sayı kaçtır?",
            "Rakamları farklı en küçük dört basamaklı sayı kaçtır?",
            "Üç basamaklı kaç doğal sayı vardır?",
            "Dört basamaklı kaç doğal sayı vardır?",
            "Rakamları birbirinden farklı kaç üç basamaklı sayı vardır?",
            "Rakamları farklı, çift olan kaç üç basamaklı sayı vardır?",
            "5 ile biten kaç üç basamaklı sayı vardır?",
            "Sayma sorularında hangi basamaktan başlanmalıdır? Neden?",
            "Üç basamaklı palindrom sayı kaç tanedir?",
            "aba biçimindeki bir sayının çözümlenmiş hâlini yazınız.",
            "Palindrom sayıya iki örnek veriniz.",
            "Bir sayı ile rakamları toplamının farkı neye bölünür? Gösteriniz.",
            "Bir sayının 9'a bölümünden kalan ile rakamları toplamının 9'a bölümünden kalanı arasındaki ilişki nedir?",
            "İki basamaklı bir sayının rakamları toplamı 12, rakamları farkı 4 ise sayı kaçtır?",
            "İki basamaklı bir sayının onlar basamağı birler basamağının 2 katıdır. Rakamları toplamı 12 ise sayı kaçtır?",
            "Üç basamaklı bir sayının yüzler basamağı 5, birler basamağı 3 ise ve rakamları toplamı 12 ise sayı kaçtır?",
            "1'den 100'e kadar olan sayılarda 7 rakamı kaç kez kullanılır?",
            "1'den 99'a kadar olan sayıları yazmak için kaç rakam kullanılır?",
            "İki basamaklı sayıların toplamı kaçtır?",
            "Rakamları toplamı 5 olan kaç iki basamaklı sayı vardır?",
            "Rakamları çarpımı 12 olan kaç iki basamaklı sayı vardır?",
            "Bir sayının basamak değerleri toplamı ile sayı değerleri toplamı ne zaman eşit olur?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**Rakam** sayıları yazmaya yarayan semboldür (0-9). **Sayı** rakamların bir araya gelmesiyle oluşan çokluk belirtendir.",
            "**10 rakam** (0, 1, 2, ..., 9).",
            "**Sıfır (0).**",
            "**Basamak değeri** rakamın bulunduğu basamağa göre kazandığı değerdir. **Sayı değeri** rakamın kendisidir, yeri değişse de değişmez.",
            "**200.**",
            "**7.**",
            "4 + 2 + 7 + 5 = **18**.",
            "4000 + 200 + 70 + 5 = **4275**.",
            "Çözümleme, sayıyı basamak değerlerinin **toplamı olarak yazmaktır**; dolayısıyla toplam sayının kendisini verir.",
            "**ab = 10a + b.**",
            "**abc = 100a + 10b + c.**",
            "**ab** iki basamaklı bir sayıdır (a=3, b=5 için **35**). **a·b** iki rakamın çarpımıdır (3·5 = **15**).",
            "**9'a** bölünür; fark 9 × (rakamlar farkı) kadardır.",
            "**99'a** bölünür; fark 99 × (rakamlar farkı) kadardır.",
            "a + b = 11, b − a = 3 → b = 7, a = 4 → sayı **47**.",
            "a + b = 9, 9(b − a) = 45 → b − a = 5 → b = 7, a = 2 → sayı **27**.",
            "99(a − c) = 396 → a − c = **4**.",
            "99(a − c) = 198 → a − c = **2**.",
            "**987.**",
            "**102.**",
            "987 − 102 = **885**.",
            "999 − 100 = **899**.",
            "Sıfır **ilk basamağa gelemez**; 012 aslında iki basamaklı **12** sayısıdır.",
            "**9876.**",
            "**1023.**",
            "9 × 10 × 10 = **900**.",
            "9 × 10 × 10 × 10 = **9000**.",
            "9 × 9 × 8 = **648**.",
            "Son basamak 0 ise: 1 × 9 × 8 = 72. Son basamak 2,4,6,8 ise: 4 × 8 × 8 = 256. Toplam **328**.",
            "Son basamak 5 (1 seçenek), ilk basamak 9, orta basamak 10 → 9 × 10 × 1 = **90**.",
            "**En kısıtlı basamaktan.** Koşul hangi basamaktaysa (son basamak çift olmalı gibi) önce o seçilir; böylece sonraki seçenekler doğru sayılır.",
            "aba biçimindedir: a için 9 (sıfır olamaz), b için 10 seçenek → **90 tane**.",
            "**101a + 10b.**",
            "**121** ve **3443** (78987 de yazılabilir).",
            "Sayı 10a + b, rakamları toplamı a + b. Fark = (10a + b) − (a + b) = **9a** → her zaman **9'a** bölünür.",
            "**Kalanları eşittir.** Bu yüzden 9'a bölünebilme rakamlar toplamına bakılarak anlaşılır.",
            "a + b = 12, a − b = 4 → a = 8, b = 4 → sayı **84**. (Rakamları yer değiştirmiş hâli 48 de koşulu sağlar; soruda onlar basamağı büyük istenirse 84.)",
            "a = 2b ve a + b = 12 → 3b = 12 → b = 4, a = 8 → sayı **84**.",
            "5 + b + 3 = 12 → b = 4 → sayı **543**.",
            "Birler basamağında 10 kez (7, 17, ..., 97), onlar basamağında 10 kez (70-79) → toplam **20 kez**.",
            "1-9 arası 9 sayı × 1 rakam = 9. 10-99 arası 90 sayı × 2 rakam = 180. Toplam **189 rakam**.",
            "10'dan 99'a kadar 90 terim; toplam = 90 × (10 + 99)/2 = 90 × 54,5 = **4905**.",
            "14, 23, 32, 41, 50 → **5 tane** (05 sayılmaz, ilk basamak sıfır olamaz).",
            "26, 34, 43, 62 → **4 tane** (2×6, 3×4, 4×3, 6×2).",
            "**Yalnızca tek basamaklı sayılarda** eşit olur; çünkü o durumda basamak değeri rakamın kendisidir.",
        ],
    },
}
