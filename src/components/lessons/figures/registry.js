/**
 * ŞEMA KAYIT DEFTERİ — VERİ KATMANI
 * ==================================================================
 *
 * Buradaki bilgi React'ten bağımsızdır: hangi şemalar var, adları ne,
 * hangi bölgeleri vurgulanabilir, dar ekranda yatay kaydırma gerekiyor mu.
 *
 * NEDEN AYRI DOSYA?
 * Çizimlerin kendisi JSX. Node ile çalışan içerik denetim betiği
 * (`scripts/test-lesson-content.mjs`) JSX okuyamaz; ama bir dersin
 * "kayıtlı olmayan şema" isteyip istemediğini yayından ÖNCE bilmek
 * zorundayız. Meta veriyi ayırınca hem betik hem tarayıcı aynı listeyi
 * okuyor.
 *
 * İKİ TÜR ŞEMA VAR
 *
 *   1) SAF SVG — elle çizilmiş, tema uyumlu diyagramlar. Etiketleri
 *      küçülmesin diye `minWidth` verilir; dar ekranda kendi kabında
 *      yatay kayar (§40).
 *
 *   2) ETKİLEŞİMLİ ÇİZİM — hazırlanmış bir illüstrasyonun üzerine
 *      duyarlı bölge katmanı serer (`InteractiveIllustration`).
 *      `minWidth` VERİLMEZ: bileşen en/boy oranını kendisi korur ve her
 *      genişlikte doğru ölçeklenir. minWidth verilirse gereksiz yatay
 *      kaydırma çubuğu çıkar.
 *
 * `regions` SIRASI ÖNEMLİDİR — ders içeriğindeki `focus` maddeleri bu
 * sırayla eşleşir. Sıra bozulursa künyedeki 3. madde şemadaki 4. bölgeyi
 * vurgular ve kimse fark etmez.
 */

export const FIGURE_META = {
  /* ---------- Biyoloji · temel kavramlar (saf SVG) ---------- */
  'organizasyon-duzeyleri': {
    label: 'Biyolojik organizasyon düzeyleri',
    minWidth: 620,
    markers: 'numbered',
    regions: ['yapi-taslari', 'hucre', 'birey', 'ekolojik'],
  },
  'metabolizma-atp': {
    label: 'Metabolizma ve ATP döngüsü',
    minWidth: 560,
    markers: 'numbered',
    regions: ['katabolizma', 'atp', 'anabolizma'],
  },
  'homeostazi-dongusu': {
    label: 'Homeostazi — negatif geri bildirim',
    minWidth: 620,
    markers: 'numbered',
    regions: ['uyari', 'reseptor', 'kontrol', 'efektor', 'sonuc', 'geri-bildirim'],
  },
  'beslenme-stratejileri': {
    label: 'Ototrof ve heterotrof beslenme yolları',
    minWidth: 620,
    markers: 'numbered',
    regions: ['ototrof', 'heterotrof', 'ortak'],
  },
  'virus-canlilik': {
    label: 'Virüslerin canlılık ölçütleri',
    minWidth: 620,
    markers: 'numbered',
    regions: ['genetik', 'cogalma', 'hucresel', 'metabolizma'],
  },

  /* ---------- Biyoloji · temel bileşenler (etkileşimli çizim) ---------- */
  'su-polarlik': {
    label: 'Suyun kutupluluğu ve hidrojen bağı',
    markers: 'numbered',
    regions: ['polarlik', 'hidrojen-bagi'],
  },
  'ph-skalasi': {
    label: 'pH skalası',
    markers: 'numbered',
    regions: ['asit', 'notr', 'baz'],
  },
  'sentez-hidroliz': {
    label: 'Dehidrasyon sentezi ve hidroliz',
    markers: 'numbered',
    regions: ['dehidrasyon', 'hidroliz'],
  },
  'fosfolipit-cift-tabaka': {
    label: 'Fosfolipit ve çift tabaka',
    markers: 'numbered',
    regions: ['bas', 'kuyruk', 'cift-tabaka'],
  },

  'amino-asit-peptit': {
    label: 'Amino asit ve peptit bağı',
    markers: 'numbered',
    regions: ['iskelet', 'r-grubu', 'peptit-bagi'],
  },
  'protein-yapi-duzeyleri': {
    label: 'Protein yapı düzeyleri',
    markers: 'numbered',
    regions: ['birincil', 'ikincil', 'ucuncul', 'dorduncul'],
  },
  'aktivasyon-enerjisi': {
    label: 'Aktivasyon enerjisi ve enzimin etkisi',
    markers: 'numbered',
    regions: ['enzimsiz', 'enzimli', 'enerji-farki'],
  },
  'enzim-hiz-grafikleri': {
    label: 'Enzim hızını etkileyen faktörler',
    markers: 'numbered',
    regions: ['sicaklik', 'ph', 'substrat'],
  },

  'nukleotit-yapi': {
    label: 'Nükleotit yapısı ve baz eşleşmesi',
    markers: 'numbered',
    regions: ['fosfat', 'seker', 'baz', 'eslesme'],
  },
  'vitamin-cozunurluk': {
    label: 'Suda ve yağda çözünen vitaminler',
    markers: 'numbered',
    regions: ['suda-cozunen', 'yagda-cozunen'],
  },
  'dna-rna-karsilastirma': {
    label: 'DNA ve RNA karşılaştırması',
    markers: 'numbered',
    regions: ['dna', 'rna', 'ribozom'],
  },
  'atp-yapisi': {
    label: 'ATP yapısı ve ATP–ADP dönüşümü',
    markers: 'numbered',
    regions: ['adenin', 'riboz', 'fosfatlar', 'yuksek-enerjili-bag'],
  },

  /* ---------- Biyoloji · hücre zarı ve taşıma ---------- */
  'hucre-zari-model': {
    label: 'Akıcı mozaik zar modeli',
    markers: 'numbered',
    regions: ['fosfolipit', 'kanal-proteini', 'tasiyici-protein', 'kolesterol', 'glikoprotein'],
  },
  'zar-gecirgenlik-yollari': {
    label: 'Seçici geçirgenlik — beş farklı yol',
    markers: 'numbered',
    regions: ['kutupsuz', 'su', 'glikoz', 'iyon', 'makromolekul'],
  },
  'pasif-tasima': {
    label: 'Basit ve kolaylaştırılmış difüzyon',
    markers: 'numbered',
    regions: ['basit-difuzyon', 'kolaylastirilmis', 'atp-yok'],
  },
  'difuzyon-hiz-grafigi': {
    label: 'Difüzyon hızı — derişim grafiği',
    markers: 'numbered',
    regions: ['basit', 'kolaylastirilmis', 'doygunluk'],
  },

  'osmoz-mekanizma': {
    label: 'Osmozun mekanizması',
    minWidth: 640,
    markers: 'numbered',
    regions: ['zar', 'su-hareketi', 'seviye-farki'],
  },
  'hucre-osmoz-tepkileri': {
    label: 'Hücrelerin osmotik ortamlara tepkisi',
    minWidth: 660,
    markers: 'numbered',
    regions: ['hipotonik', 'izotonik', 'hipertonik'],
  },

  'aktif-tasima-pompa': {
    label: 'Sodyum–potasyum pompası',
    minWidth: 660,
    markers: 'numbered',
    regions: ['gradyan-karsiti', 'pompa', 'atp'],
  },
  'toplu-tasima': {
    label: 'Endositoz ve ekzositoz',
    minWidth: 680,
    markers: 'numbered',
    regions: ['endositoz', 'ekzositoz', 'atp'],
  },

  'organel-zar-gruplari': {
    label: 'Organellerin zar sayısına göre grupları',
    markers: 'numbered',
    regions: ['zarsiz', 'tek-zarli', 'cift-zarli'],
  },
  'salgi-yolu': {
    label: 'Salgı yolu — ribozomdan hücre dışına',
    markers: 'numbered',
    regions: ['ribozom', 'er', 'golgi', 'ekzositoz'],
  },
  'hucre-bakim-sistemi': {
    label: 'Hücre içi bakım sistemi',
    markers: 'numbered',
    regions: ['lizozom', 'koful', 'peroksizom'],
  },

  'cekirdek-yapisi': {
    label: 'Çekirdeğin yapısı',
    markers: 'numbered',
    regions: ['cekirdek-zari', 'por', 'cekirdekcik', 'kromatin', 'kromozom'],
  },
  'kromatin-paketlenme': {
    label: 'DNA’dan kromozoma paketlenme',
    markers: 'numbered',
    regions: ['nukleozom', 'kromatin', 'kromozom'],
  },
  'hucre-tipleri': {
    label: 'Prokaryot, hayvan ve bitki hücresi',
    markers: 'numbered',
    regions: ['prokaryot', 'hayvan', 'bitki'],
  },

  /* ---------- Biyoloji · kalıtım (etkileşimli çizim) ---------- */
  'kalitim-kavram-haritasi': {
    label: 'Kromozomdan fenotipe kalıtım kavramları',
    markers: 'numbered',
    regions: ['lokus', 'alel', 'genotip', 'fenotip'],
  },
  'mendel-caprazlama': {
    label: 'Mendel çaprazlaması ve olasılık',
    markers: 'numbered',
    regions: ['gamet', 'punnett', 'test-caprazlama', 'bagimsiz'],
  },
  'kan-grubu-kalitimi': {
    label: 'ABO ve Rh kan grubu kalıtımı',
    markers: 'numbered',
    regions: ['coklu-alel', 'abo-fenotip', 'uygunluk', 'rh'],
  },
  'soyagaci-x-bagli': {
    label: 'Soy ağacı ve X’e bağlı kalıtım',
    markers: 'numbered',
    regions: ['semboller', 'otozomal-cekik', 'x-bagli', 'tasiyici'],
  },

  /* ---------- Biyoloji · ekosistem ekolojisi ---------- */
  'ekosistem-anatomisi': {
    label: 'Ekosistemin anatomisi ve ekolojik düzeyler',
    markers: 'numbered',
    regions: ['hiyerarsi', 'abiyotik', 'habitat-nis', 'sistem'],
  },
  'ekosistem-enerji-akisi': {
    label: 'Besin ağı ve trofik enerji akışı',
    markers: 'numbered',
    regions: ['uretici', 'besin-agi', 'piramit', 'ayristirici'],
  },
  'ekosistem-madde-donguleri': {
    label: 'Su, karbon ve azot döngüleri',
    markers: 'numbered',
    regions: ['su', 'karbon', 'azot', 'madde-enerji'],
  },
  'ekosistem-populasyon-dengesi': {
    label: 'Popülasyon büyümesi ve ekolojik denge',
    markers: 'numbered',
    regions: ['buyume', 'kapasite', 'faktorler', 'suksesyon'],
  },

  /* ---------- AYT Biyoloji · sinir sistemi ---------- */
  'sinir-noron-glia': {
    label: 'Nöronun yapısı ve glia desteği',
    markers: 'numbered',
    regions: ['dendrit-soma', 'akson', 'miyelin', 'glia'],
  },
  'sinir-aksiyon-potansiyeli': {
    label: 'Dinlenim ve aksiyon potansiyeli',
    markers: 'numbered',
    regions: ['dinlenim', 'depolarizasyon', 'repolarizasyon', 'iletim'],
  },
  'sinir-kimyasal-sinaps': {
    label: 'Kimyasal sinaps ve postsinaptik bütünleşme',
    markers: 'numbered',
    regions: ['kalsiyum', 'reseptor', 'sonlandirma', 'toplanma'],
  },
  'sinir-merkezi-sistem': {
    label: 'Merkezi sinir sisteminin bölümleri',
    markers: 'numbered',
    regions: ['korteks', 'ara-beyin', 'beyin-sapi', 'omurilik'],
  },
  'sinir-cevresel-refleks': {
    label: 'Çevresel sinir sistemi ve refleks',
    markers: 'numbered',
    regions: ['refleks', 'somatik-otonom', 'sempatik-parasempatik', 'bilinc'],
  },

  /* ---------- AYT Biyoloji · endokrin sistem ---------- */
  'endokrin-harita': {
    label: 'İnsan endokrin bezleri ve hedefleri',
    markers: 'numbered',
    regions: ['hipofiz', 'tiroit', 'adrenal', 'pankreas'],
  },
  'hormon-iletisimi': {
    label: 'Hormon üretimi, hedef seçiciliği ve geri bildirim',
    markers: 'numbered',
    regions: ['salgi', 'hedef', 'geri-bildirim', 'karsilastirma'],
  },
  'hipotalamus-hipofiz': {
    label: 'Hipotalamus ve hipofiz eksenleri',
    markers: 'numbered',
    regions: ['tiroit-ekseni', 'adrenal-ekseni', 'buyume', 'arka-hipofiz'],
  },
  'endokrin-homeostazi': {
    label: 'Endokrin homeostazi devreleri',
    markers: 'numbered',
    regions: ['glikoz', 'kalsiyum', 'su-sodyum', 'stres'],
  },
  'endokrin-vakalar': {
    label: 'Endokrin geri bildirim ve klinik yorum vakaları',
    markers: 'numbered',
    regions: ['tiroit-klinik', 'adrenal-zon', 'istah', 'vaka'],
  },
  'duyu-kodlama': {
    label: 'Uyarandan algıya duyu kodlaması',
    markers: 'numbered',
    regions: ['uyari', 'transduksiyon', 'kodlama', 'algi'],
  },
  'goz-optigi': {
    label: 'Göz anatomisi ve optik yol',
    markers: 'numbered',
    regions: ['tabakalar', 'kornea', 'iris-mercek', 'retina'],
  },
  'retina-gorme': {
    label: 'Retina, uyum ve görme kusurları',
    markers: 'numbered',
    regions: ['uyum', 'cubuk-koni', 'gorme-yolu', 'kusurlar'],
  },
  'kulak-isitme-denge': {
    label: 'Kulakta işitme ve denge mekanizmaları',
    markers: 'numbered',
    regions: ['iletim', 'korti', 'ses-kodlama', 'denge'],
  },
  'kimyasal-deri-duyulari': {
    label: 'Koku, tat, deri ve ağrı duyuları',
    markers: 'numbered',
    regions: ['koku', 'tat', 'deri', 'agri'],
  },

  /* ---------- AYT Biyoloji · destek ve hareket sistemi ---------- */
  'hareket-butunlugu': {
    label: 'İskelet ve kasların hareket bütünlüğü',
    markers: 'numbered',
    regions: ['eksen', 'koruma-depo', 'kaldirac', 'antagonist'],
  },
  'kemik-doku': {
    label: 'Kemik dokunun yapısı ve yenilenmesi',
    markers: 'numbered',
    regions: ['uzun-kemik', 'kompakt-sunger', 'osteon', 'yenilenme'],
  },
  'kikirdak-eklem': {
    label: 'Kıkırdak ve eklem çeşitleri',
    markers: 'numbered',
    regions: ['kikirdak', 'eklem-tipleri', 'sinovyal', 'yaralanma'],
  },
  'iskelet-kasi-yapi': {
    label: 'İskelet kasının yapısal organizasyonu',
    markers: 'numbered',
    regions: ['kas-tipleri', 'hiyerarsi', 'sarkomer', 'motor-birim'],
  },
  'kas-kasilma': {
    label: 'İskelet kasında kasılma mekanizması',
    markers: 'numbered',
    regions: ['uyari-ca', 'troponin', 'capraz-kopru', 'bantlar'],
  },

  /* ---------- AYT Biyoloji · sindirim sistemi ---------- */
  'sindirim-kanali': {
    label: 'Ağızdan bağırsağa sindirim kanalı',
    markers: 'numbered',
    regions: ['agiz-yutma', 'peristaltizm', 'mide', 'bagirsak'],
  },
  'mide-mekanizmasi': {
    label: 'Midenin hareket, salgı ve korunma mekanizmaları',
    markers: 'numbered',
    regions: ['kas', 'salgilar', 'pepsin', 'koruma'],
  },
  'yardimci-organlar': {
    label: 'Karaciğer, safra ve pankreasın sindirime katkısı',
    markers: 'numbered',
    regions: ['safra', 'bikarbonat', 'emulsiyon', 'zimojen'],
  },
  'besin-sindirim-haritasi': {
    label: 'Makromoleküllerin sindirim rotaları',
    markers: 'numbered',
    regions: ['karbonhidrat', 'protein', 'yag', 'nukleik'],
  },
  'bagirsak-emilim': {
    label: 'İnce bağırsakta emilim ve dolaşıma katılma',
    markers: 'numbered',
    regions: ['yuzey', 'glikoz-amino', 'yag', 'portal-lenf'],
  },

  /* ---------- AYT Biyoloji · dolaşım ve bağışıklık ---------- */
  'kalp-dolasim-haritasi': {
    label: 'Kalbin yapısı ve kan dolaşımının rotası',
    markers: 'numbered',
    regions: ['odacik-kapak', 'kucuk-buyuk', 'koroner', 'tam-tur'],
  },
  'kalp-dongusu': {
    label: 'Kalbin ileti sistemi ve kalp döngüsü',
    markers: 'numbered',
    regions: ['ileti', 'evreler', 'basinc-kapak', 'debi'],
  },
  'damar-mikrodolasim': {
    label: 'Damarlar, kılcal değişim ve ödem',
    markers: 'numbered',
    regions: ['damar-tipleri', 'basinc-hiz', 'kilcal', 'odem'],
  },
  'kan-lenf-sistemi': {
    label: 'Kan bileşenleri, pıhtılaşma ve lenf',
    markers: 'numbered',
    regions: ['kan-bilesen', 'pihti', 'lenf', 'kan-grubu'],
  },
  'bagisiklik-yaniti': {
    label: 'Doğal ve kazanılmış bağışıklık yanıtı',
    markers: 'numbered',
    regions: ['dogal', 'antijen-sunum', 'humoral', 'hucresel-hafiza'],
  },

  /* ---------- AYT Biyoloji · solunum sistemi ---------- */
  'solunum-yolu-anatomisi': {
    label: 'Solunum yolu anatomisi ve koruyucu mekanizmalar',
    markers: 'numbered',
    regions: ['burun', 'girtlak', 'mukosiliyer', 'brons-plevra'],
  },
  'ventilasyon-mekanizmasi': {
    label: 'Akciğer ventilasyonunun basınç ve hacim mekaniği',
    markers: 'numbered',
    regions: ['inspirasyon', 'ekspirasyon', 'plevra', 'hacimler'],
  },
  'alveol-gaz-degisimi': {
    label: 'Alveol-kılcal gaz değişimi',
    markers: 'numbered',
    regions: ['zar', 'parsiyel', 'surfaktan', 'v-q'],
  },
  'gaz-tasima': {
    label: 'Oksijen ve karbondioksitin kanda taşınması',
    markers: 'numbered',
    regions: ['hb-o2', 'bohr', 'co2', 'co'],
  },
  'solunum-kontrolu': {
    label: 'Solunum ritmi, kimyasal kontrol ve hastalıklar',
    markers: 'numbered',
    regions: ['ritim', 'kemoreseptor', 'egzersiz', 'hastalik'],
  },

  /* ---------- AYT Biyoloji · üriner sistem ---------- */
  'uriner-sistem-anatomisi': {
    label: 'Üriner sistem anatomisi ve renal dolaşım',
    markers: 'numbered',
    regions: ['bobrek-kesiti', 'idrar-yolu', 'renal-kan', 'diger-organlar'],
  },
  'nefron-yapi-haritasi': {
    label: 'Nefronun bölümleri ve segment görevleri',
    markers: 'numbered',
    regions: ['renal-cisimcik', 'proksimal', 'henle', 'distal-toplama'],
  },
  'glomeruler-suzulme': {
    label: 'Glomerüler süzülme ve GFR kontrolü',
    markers: 'numbered',
    regions: ['bariyer', 'basinc', 'sivi', 'gfr'],
  },
  'nefron-tup-isleme': {
    label: 'Nefronda geri emilim, karşı akım ve salgılama',
    markers: 'numbered',
    regions: ['geri-emilim', 'karsi-akim', 'salgilama', 'esik'],
  },
  'bobrek-homeostazi': {
    label: 'Böbrekte hormonal ve sistemik homeostazi',
    markers: 'numbered',
    regions: ['adh', 'raas', 'endokrin-ph', 'klinik'],
  },

  /* ---------- AYT Biyoloji · üreme sistemi ve embriyonik gelişim ---------- */
  'ureme-anatomi-haritasi': {
    label: 'Erkek ve dişi üreme sistemi anatomisi',
    markers: 'numbered',
    regions: ['testis', 'erkek-kanal', 'ovaryum-tup', 'uterus'],
  },
  'gametogenez-karsilastirma': {
    label: 'Spermatogenez, oogenez ve gamet yapısı',
    markers: 'numbered',
    regions: ['spermatogenez', 'oogenez', 'gamet-yapisi', 'erkek-hormon'],
  },
  'menstrual-dongu-hormonlari': {
    label: 'Ovaryum ve uterus döngüsünün hormonal kontrolü',
    markers: 'numbered',
    regions: ['folikul-fsh', 'lh-piki', 'korpus-luteum', 'menstruasyon'],
  },
  'dollenme-implantasyon': {
    label: 'Döllenmeden blastosist implantasyonuna',
    markers: 'numbered',
    regions: ['akrozom', 'kortikal', 'pronukleus', 'implantasyon'],
  },
  'embriyonik-gelisim-plasenta': {
    label: 'Gastrulasyon, organogenez ve plasenta',
    markers: 'numbered',
    regions: ['gastrulasyon', 'organogenez', 'plasenta', 'gebelik-dogum'],
  },

  /* ---------- AYT Biyoloji · genden proteine ---------- */
  'kalitsal-madde-kaniti': {
    label: 'Kalıtsal maddenin kanıtı ve DNA organizasyonu',
    markers: 'numbered',
    regions: ['griffith-avery', 'hershey-chase', 'dna-yapi', 'gen-organizasyon'],
  },
  'dna-replikasyon-mekanizmasi': {
    label: 'Yarı korunumlu DNA replikasyonu',
    markers: 'numbered',
    regions: ['yarikorunumlu', 'catal-enzimler', 'kesintili-kesintisiz', 'orijin-onarim'],
  },
  'rna-transkripsiyon': {
    label: 'RNA çeşitleri, transkripsiyon ve RNA işlenmesi',
    markers: 'numbered',
    regions: ['rna-cesitleri', 'transkripsiyon', 'rna-isleme', 'prokaryot-okaryot'],
  },
  'genetik-kod-translasyon': {
    label: 'Genetik kod ve translasyon mekanizması',
    markers: 'numbered',
    regions: ['kodon-antikodon', 'baslatma', 'uzama', 'sonlanma-polizom'],
  },
  'biyoteknoloji-araclari': {
    label: 'Moleküler biyoteknoloji araçları',
    markers: 'numbered',
    regions: ['rekombinant-dna', 'pcr-jel', 'gen-duzenleme', 'klon-kokhucre-etik'],
  },

  /* ---------- AYT Biyoloji · komünite ve popülasyon ekolojisi ---------- */
  'ayt-komunite-yapisi': {
    label: 'Komünite yapısı ve ekolojik roller',
    markers: 'numbered',
    regions: ['cesitlilik-gosterge', 'baskin-kilit-tasi', 'ekoton-kenar', 'komunite-ag'],
  },
  'ayt-rekabet-nis': {
    label: 'Rekabet, niş ve kaynak paylaşımı',
    markers: 'numbered',
    regions: ['tur-ici-rekabet', 'gause-dislanma', 'kaynak-paylasimi', 'karakter-kaymasi'],
  },
  'ayt-turler-arasi-iliskiler': {
    label: 'Türler arası ekolojik ilişkiler',
    markers: 'numbered',
    regions: ['av-avci-savunma', 'mutualizm', 'kommensal-amensal', 'parazitizm'],
  },
  'ayt-suksesyon-bozunum': {
    label: 'Süksesyon ve bozunum dinamikleri',
    markers: 'numbered',
    regions: ['birincil-suksesyon', 'ikincil-suksesyon', 'bozunum-mozaigi', 'dinamik-klimaks'],
  },
  'ayt-populasyon-dinamikleri': {
    label: 'Popülasyon dinamikleri ve demografi',
    markers: 'numbered',
    regions: ['buyukluk-dagilim', 'hayatta-kalma', 'j-s-kapasite', 'yas-piramitleri'],
  },

  /* ---------- AYT Biyoloji · fotosentez ve kemosentez ---------- */
  'ayt-kloroplast-pigment': {
    label: 'Kloroplast, pigmentler ve fotosentez kanıtları',
    markers: 'numbered',
    regions: ['kloroplast-yapi', 'pigment-spektrum', 'engelman-deneyi', 'atom-kaynagi'],
  },
  'ayt-isik-reaksiyonlari': {
    label: 'Işığa bağlı tepkimeler ve fotofosforilasyon',
    markers: 'numbered',
    regions: ['fotosistem-ii-fotoliz', 'ets-proton', 'fotosistem-i-nadph', 'dongusel-dongusel-olmayan'],
  },
  'ayt-calvin-dongusu': {
    label: 'Calvin döngüsü ve organik ürünler',
    markers: 'numbered',
    regions: ['karbon-fiksasyonu', 'indirgenme-pgal', 'rubp-yenilenme', 'urun-yollari'],
  },
  'ayt-fotosentez-hiz': {
    label: 'Fotosentez hızını etkileyen faktörler',
    markers: 'numbered',
    regions: ['isik-siddeti', 'co2-minimum', 'sicaklik-enzim', 'stoma-klorofil'],
  },
  'ayt-kemosentez': {
    label: 'Kemosentez mekanizması ve ekolojik rolleri',
    markers: 'numbered',
    regions: ['inorganik-oksidasyon', 'nitrifikasyon', 'cevre-endustri', 'foto-kemo-karsilastirma'],
  },

  /* ---------- AYT Biyoloji · bitki biyolojisi ---------- */
  'ayt-bitki-dokulari': {
    label: 'Bitkisel dokular ve büyüme',
    markers: 'numbered',
    regions: ['meristem-buyume', 'parankima-cesitleri', 'destek-doku', 'ortu-iletim'],
  },
  'ayt-bitki-organlari': {
    label: 'Kök, gövde ve yaprak anatomisi',
    markers: 'numbered',
    regions: ['kok-bolgeleri', 'kok-kesiti', 'govde-buyume', 'yaprak-kesiti'],
  },
  'ayt-bitki-tasima': {
    label: 'Bitkilerde su, mineral ve organik madde taşınması',
    markers: 'numbered',
    regions: ['kok-alim', 'ksilem-cekimi', 'stoma-kontrol', 'floem-basinc-akis'],
  },
  'ayt-bitki-hormonlari': {
    label: 'Bitki hormonları, hareket ve fotoperiyodizm',
    markers: 'numbered',
    regions: ['oksin-tropizma', 'giberellin-sitokinin', 'aba-etilen', 'nasti-fotoperiyot'],
  },
  'ayt-bitki-ureme': {
    label: 'Çiçekli bitkilerde üreme ve gelişme',
    markers: 'numbered',
    regions: ['cicek-anatomi', 'sporogenez-gametofit', 'tozlasma-cift-dollenme', 'tohum-meyve-cimlenme'],
  },

  /* ---------- AYT Biyoloji · canlılar ve çevre ---------- */
  'ayt-varyasyon': {
    label: 'Genetik ve çevresel varyasyon',
    markers: 'numbered',
    regions: ['mayoz-kombinasyon', 'germ-soma', 'cevre-fenotip', 'surekli-kesikli'],
  },
  'ayt-mutasyon': {
    label: 'Mutasyon türleri ve sonuçları',
    markers: 'numbered',
    regions: ['gen-mutasyonu', 'kromozom-mutasyonu', 'baglama-gore-etki', 'mutajen-onarim'],
  },
  'ayt-dogal-secilim': {
    label: 'Doğal seçilimin mekanizması',
    markers: 'numbered',
    regions: ['onceden-varyasyon', 'cevre-filtresi', 'nesiller-frekans', 'uyum-basarisi'],
  },
  'ayt-adaptasyon': {
    label: 'Adaptasyon ve aklimasyon',
    markers: 'numbered',
    regions: ['yapisal-adaptasyon', 'fizyolojik-adaptasyon', 'davranissal-adaptasyon', 'adaptasyon-aklimasyon'],
  },
  'ayt-yapay-secilim-direnc': {
    label: 'Yapay seçilim ve direnç evrimi',
    markers: 'numbered',
    regions: ['tarim-yapay-secilim', 'hayvan-yapay-secilim', 'antibiyotik-direnci', 'pestisit-yonetimi'],
  },

  'siniflandirma-birimleri': {
    label: 'Sınıflandırma birimleri',
    minWidth: 660,
    markers: 'numbered',
    regions: ['azalan', 'artan', 'ornek'],
  },
  'alem-karar-agaci': {
    label: 'Âlem belirleme karar ağacı',
    minWidth: 700,
    markers: 'numbered',
    regions: ['prokaryot', 'hayvan', 'bitki', 'mantar', 'protista'],
  },

  'hucre-dongusu': {
    label: 'Hücre döngüsü',
    minWidth: 660,
    markers: 'numbered',
    regions: ['g1', 's', 'g2', 'm'],
  },
  'mitoz-evreleri': {
    label: 'Mitozun dört evresi',
    minWidth: 700,
    markers: 'numbered',
    regions: ['profaz', 'metafaz', 'anafaz', 'telofaz'],
  },

  /* ---------- Biyoloji · hücre ve enerji (etkileşimli çizim) ---------- */
  'mitokondri-yapi': {
    label: 'Mitokondrinin yapısı',
    markers: 'numbered',
    regions: ['dis-zar', 'zarlar-arasi', 'ic-zar', 'krista', 'matriks', 'mtdna'],
  },
  'solunum-haritasi': {
    label: 'Hücresel solunum yer haritası',
    markers: 'numbered',
    regions: ['glikoliz', 'krebs', 'ets'],
  },
  kemiozmoz: {
    label: 'Kemiozmoz ve ATP sentaz',
    markers: 'numbered',
    regions: ['gradyan', 'ets', 'oksijen', 'atp-sentaz'],
  },
  endosimbiyoz: {
    label: 'Endosimbiyoz — bakteriden organele',
    markers: 'numbered',
    regions: ['yutulma', 'ortak-yasam', 'organel'],
  },
  'karbon-izleme': {
    label: 'İşaretli karbonun izlediği yol',
    markers: 'numbered',
    regions: ['glikoz', 'piruvat', 'karbondioksit', 'su'],
  },
  'atp-bilancosu': {
    label: 'ATP bilançosu',
    minWidth: 420,
    regions: [],
  },

  /* ---------- Matematik ---------- */
  'birim-cember': {
    label: 'Birim çember',
    minWidth: 480,
    regions: ['sin', 'cos'],
  },

  /* ---------- Fizik ---------- */
  'manyetik-kuvvet': {
    label: 'Manyetik kuvvetin yönü',
    minWidth: 480,
    regions: ['v', 'B', 'F'],
  },
}

/** v1 pilot derslerdeki eski adlar — veriye dokunmadan çalışsınlar. */
export const FIGURE_ALIASES = {
  'unit-circle': 'birim-cember',
  electromagnetism: 'manyetik-kuvvet',
}

export function canonicalFigureKind(kind) {
  return FIGURE_ALIASES[kind] ?? kind
}

export function resolveFigureMeta(kind) {
  return FIGURE_META[canonicalFigureKind(kind)] ?? null
}

/** İçerik denetim betiği bunu kullanır — React yüklemeden çalışır. */
export function resolveFigure(kind) {
  return resolveFigureMeta(kind)
}

/** Öğretmen editöründe şema seçtirmek için. */
export function figureOptions() {
  return Object.entries(FIGURE_META).map(([kind, meta]) => ({ kind, label: meta.label }))
}
