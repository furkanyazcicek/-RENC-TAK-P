import { politicalStates1526, simulationMarkers1526 } from './ottomanSimulation1526'

const state = (id, name, mapLabel, tone, labelAt, polygons, summary, relation, result, extra = {}) => ({
  id, type: 'state', name, mapLabel, tone, labelAt, polygons, summary, relation, result,
  importance: extra.importance || 'Dönemin siyasi aktörü', leaders: extra.leaders || [],
  relatedEvent: extra.relatedEvent || 'Dönemin siyasi dengesi', ...extra,
})

const states1453 = [
  state('ottoman', 'Osmanlı Devleti', 'OSMANLI DEVLETİ', 'ottoman', [27, 40.2], [
    [[18, 45], [20, 44.8], [22.5, 44], [25, 43.5], [29.5, 44.8], [29.5, 41], [27, 40], [24, 39], [21, 39.5], [19, 41.5]],
    [[26, 42], [30, 42.5], [34, 42], [38, 41.5], [41, 40], [41.5, 37], [38, 36], [34, 36], [30, 36.2], [27, 38]],
  ], 'Fatih Sultan Mehmet döneminde Balkanlar ile Anadolu arasında büyüyen devlet.', 'Bizans, Venedik ve Balkan güçleriyle çevrilidir.', 'İstanbul’un fethiyle siyasi merkez İstanbul’a taşındı.', { leaders: ['Fatih Sultan Mehmet'], relatedEvent: 'İstanbul’un Fethi', importance: 'Yükselen bölgesel güç' }),
  state('byzantium', 'Bizans İmparatorluğu', 'BİZANS', 'safavid', [29, 41.2], [[[28.45, 41.45], [29.45, 41.45], [29.45, 40.65], [28.45, 40.65]]], '1453’te İstanbul ve yakın çevresine sıkışmış tarihî imparatorluk.', 'Osmanlı kuşatmasının merkezindedir.', '29 Mayıs 1453’te sona erdi.', { leaders: ['XI. Konstantinos'], relatedEvent: 'İstanbul Kuşatması', importance: 'Fetih öncesi son Bizans toprağı' }),
  state('hungary', 'Macar Krallığı', 'MACAR KRALLIĞI', 'hungary', [20, 48], [[[14.4, 49.3], [19, 50], [23.8, 48.7], [25, 47], [24, 45.5], [20, 44.8], [16, 45.8], [14, 47]]], 'Tuna havzasının güçlü krallığı.', 'Osmanlı’nın Balkan ilerleyişinin kuzeyindeki temel güç.', 'Belgrad hattı uzun süre sınır savunmasının merkezi oldu.'),
  state('venice', 'Venedik Cumhuriyeti', 'VENEDİK', 'venice', [12, 45], [[[9.5, 46.8], [13.7, 46.8], [13.5, 44], [10, 44]], [[13, 45.5], [18, 42], [16, 40.8], [14, 43]], [[23, 36], [27, 36], [27, 34], [23, 34]]], 'Adriyatik ve Doğu Akdeniz’de etkili deniz gücü.', 'Boğazlar ve ticaret yolları için Osmanlı ile rekabet eder.', 'Fetih sonrasında Osmanlı–Venedik rekabeti yoğunlaştı.'),
  state('mamluk', 'Memlûk Sultanlığı', 'MEMLÛK SULTANLIĞI', 'habsburg', [35.5, 29], [[[34, 37], [42, 37], [42, 31], [39, 29], [36, 31], [33, 31], [32, 22], [28, 21], [28, 30], [31, 33]]], 'Mısır, Suriye ve Hicaz üzerinde hâkim büyük İslam devleti.', 'Doğu Akdeniz’de Osmanlı’nın güney komşusudur.', '1517’de Osmanlı egemenliğine girdi.'),
]

const states1699 = [
  state('ottoman', 'Osmanlı Devleti', 'OSMANLI DEVLETİ', 'ottoman', [32, 39], [
    [[15, 45], [18, 45.5], [21, 44.8], [24, 44], [27, 44.5], [29.5, 45], [30, 42], [28, 40], [24, 39], [20, 39.5], [17, 42]],
    [[25.5, 42], [30, 42], [35, 42], [40, 41], [43, 39], [42, 36], [37, 36], [32, 36], [27, 38]],
    [[34, 37], [42, 37], [44, 33], [40, 31], [36, 31], [33, 31], [32, 22], [28, 21], [28, 29], [31, 34]],
    [[-1.5, 37], [4, 37.5], [10, 37], [11, 33], [5, 31.5], [0, 32]],
  ], 'Karlofça öncesi uzun savaşların ardından Orta Avrupa’da geri çekilen fakat üç kıtadaki varlığını sürdüren imparatorluk.', 'Habsburglar kuzeybatıda genişlemiştir.', 'Karlofça Antlaşması önemli toprak kayıplarını resmileştirdi.', { leaders: ['II. Mustafa'], relatedEvent: 'Karlofça Antlaşması', importance: 'Gerileme eşiğindeki imparatorluk' }),
  state('habsburg', 'Avusturya Habsburgları', 'HABSBURG MONARŞİSİ', 'habsburg', [18, 48], [[[7, 51], [14, 52], [20, 51], [25, 49], [25, 45], [21, 44.8], [18, 45.5], [14, 46], [9, 46]]], 'Macaristan’ın büyük bölümünü Osmanlı’dan alan Orta Avrupa gücü.', '1699’da Osmanlı karşısında genişleyen başlıca aktördür.', 'Orta Avrupa’daki güç dengesi Habsburglar lehine değişti.'),
  state('poland', 'Polonya–Litvanya', 'POLONYA–LİTVANYA', 'poland', [30, 53], [[[20, 57], [36, 57], [40, 53], [37, 49], [31, 47], [25, 48], [21, 51]]], 'Kuzey ve Doğu Avrupa’daki geniş siyasi birlik.', 'Osmanlı ve Habsburg diplomasisinde önemli denge unsurudur.', 'Karlofça düzeninde yer alan güçlerden biridir.'),
  state('safavid', 'Safevi Devleti', 'SAFEVİ DEVLETİ', 'safavid', [51, 35], [[[43, 40], [50, 43], [58, 40], [61, 35], [58, 29], [52, 26], [46, 29], [42, 35]]], 'İran merkezli doğu komşusu.', 'Irak ve Kafkasya ekseninde Osmanlı ile rekabet eder.', 'Doğu sınırı ayrı bir stratejik cephe olmayı sürdürdü.'),
  state('venice', 'Venedik Cumhuriyeti', 'VENEDİK', 'venice', [12, 45], [[[9.5, 46.8], [13.7, 46.8], [13.5, 44], [10, 44]], [[14, 45], [18, 42], [16, 41], [14, 43]]], 'Adriyatik deniz gücü.', 'Osmanlı–Venedik savaşlarının tarafıdır.', 'Mora ve Dalmaçya hattında yeni dengeler oluştu.'),
]

const states1922 = [
  state('tbmm', 'TBMM Hükûmeti', 'TBMM HÜKÛMETİ', 'ottoman', [35, 39], [[[26, 42], [30, 42], [35, 42.5], [40, 41], [44.5, 39.5], [44, 36.5], [39, 36], [34, 36], [29, 36], [26, 38]]], 'Kurtuluş Savaşı’nı yürüten Ankara merkezli millî hükûmet.', '1922’de askerî ve siyasi üstünlüğü ele geçirdi.', 'Saltanat kaldırıldı; yeni devlet düzenine geçiş başladı.', { leaders: ['Mustafa Kemal Paşa'], relatedEvent: 'Büyük Taarruz ve Saltanatın kaldırılması', importance: 'Yeni siyasi düzenin merkezi' }),
  state('greece', 'Yunanistan', 'YUNANİSTAN', 'hungary', [22, 39], [[[19, 42], [22, 42], [25, 41], [26, 38], [24, 35], [21, 36], [19, 39]]], 'Balkanlar ve Ege’deki bölgesel devlet.', 'Türk Kurtuluş Savaşı’nın batı cephesindeki karşı taraftır.', '1922’de Anadolu’daki askerî varlığı sona erdi.'),
  state('italy', 'İtalya Krallığı', 'İTALYA', 'habsburg', [12, 43], [[[7, 47], [13, 47], [18, 44], [18, 37], [13, 37], [9, 41]]], 'Akdeniz’de etkin Avrupa devleti.', 'Anadolu ve Doğu Akdeniz paylaşım planlarında yer aldı.', 'Millî Mücadele sonucunda Anadolu’daki hedeflerinden çekildi.'),
  state('france', 'Fransa', 'FRANSA', 'france', [2, 47], [[[-5.5, 51], [7.5, 51], [8, 43], [3, 42], [-3, 43], [-5, 47]], [[34, 37], [42, 37], [42, 32], [36, 31], [34, 33]]], 'Avrupa ve Suriye mandası üzerinden bölgesel aktör.', '1921 Ankara Antlaşması sonrasında TBMM ile çatışmayı sonlandırdı.', 'Güney cephesindeki mücadele siyasi anlaşmayla kapandı.'),
  state('britain', 'Britanya Etki Alanı', 'BRİTANYA', 'venice', [40, 30], [[[37, 34], [47, 35], [50, 30], [45, 27], [40, 28]], [[27, 32], [36, 32], [34, 21], [28, 21]]], 'Irak, Filistin ve Mısır hattındaki belirleyici güç.', 'Lozan’a giden diplomatik dengenin başlıca dış aktörüdür.', 'Musul meselesi sonraki döneme kaldı.'),
]

const marker = (id, type, title, subtitle, lng, lat, icon, summary, detail, extra = {}) => ({ id, type, title, subtitle, lng, lat, icon, summary, detail, ...extra })

const region = (id, name, polygon, labelAt, meta = {}) => ({ id, type: 'region', name, polygon, labelAt, ...meta })

const administrativeRegions = {
  1453: [
    region('rumeli-1453', 'Rumeli', [[18, 45], [23, 44.5], [26, 43.5], [25, 40], [21, 39.5], [19, 41]], [22, 42]),
    region('anatolia-1453', 'Anadolu', [[26, 42], [33, 42], [34, 36], [29, 36], [27, 38]], [30, 39]),
    region('karaman-1453', 'Karaman', [[32, 39], [38, 39], [39, 36], [34, 36]], [35.5, 37.5]),
    region('mora-1453', 'Mora', [[20, 39.5], [24, 39], [24, 36], [20, 36]], [22, 37.5]),
    region('macar-ovasi-1453', 'Macar Ovası', [[16, 49], [22, 49.5], [23.5, 46], [17, 45.5]], [19.5, 47.5]),
    region('memluk-suriye-1453', 'Suriye', [[34, 37], [42, 37], [41, 32], [35, 31]], [37.5, 34]),
    region('memluk-misir-1453', 'Mısır', [[28, 31], [35, 31], [34, 21], [28, 21]], [31, 27]),
  ],
  1526: [
    region('bosna-1526', 'Bosna Sancağı', [[14.8, 45.7], [18.8, 45.6], [19.2, 43], [16, 42.5]], [17.1, 44.2], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Saraybosna', 18.41, 43.86] }),
    region('semendire-1526', 'Semendire Sancağı', [[18.5, 45.5], [22.2, 45.2], [22.2, 43], [19, 43]], [20.5, 44.2], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Semendire', 20.93, 44.66] }),
    region('vidin-1526', 'Vidin Sancağı', [[21.5, 45], [24.2, 44.8], [24.3, 43.1], [22, 43]], [23, 44], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Vidin', 22.88, 43.99] }),
    region('silistre-1526', 'Silistre Sancağı', [[24, 45], [29.5, 45.2], [29.2, 42.8], [25, 42.5]], [27, 44], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Silistre', 27.27, 44.12] }),
    region('sofya-1526', 'Sofya Sancağı', [[21, 43.5], [24.5, 43.5], [24.5, 41.5], [21, 41.5]], [23, 42.5], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Sofya', 23.32, 42.7], featured: true }),
    region('uskup-1526', 'Üsküp Sancağı', [[19.5, 43], [22.2, 43], [22.4, 40.8], [20, 40.5]], [21.2, 41.8], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Üsküp', 21.43, 42] }),
    region('selanik-1526', 'Selanik Sancağı', [[22, 41.5], [25, 41.5], [24.5, 39], [21.5, 39]], [23.2, 40.2], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Selanik', 22.94, 40.64] }),
    region('mora-1526', 'Mora Sancağı', [[20, 39], [23.8, 39], [23.5, 36], [20, 36]], [22, 37.5], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Mistra', 22.43, 37.07] }),
    region('arnavut-1526', 'Arnavutluk Sancakları', [[18.5, 42.5], [21.2, 42.2], [21, 39], [19, 39.5]], [20, 41], { stateName: 'Osmanlı Devleti', adminType: 'Sancak grubu', seat: ['Avlonya', 19.49, 40.47] }),
    region('cirmen-1526', 'Çirmen Sancağı', [[24, 42.5], [29.5, 42.5], [29, 40], [25, 40]], [26.5, 41.2], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Edirne', 26.56, 41.68], featured: true }),
    region('hudavendigar-1526', 'Hüdavendigâr Sancağı', [[27.5, 41.5], [31, 41.5], [31, 39], [28, 39]], [29.5, 40.2], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Bursa', 29.06, 40.19], featured: true }),
    region('karesi-1526', 'Karesi Sancağı', [[26, 40.5], [28.5, 40.5], [28.5, 38.8], [26, 39]], [27.2, 39.8], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Balıkesir', 27.89, 39.65] }),
    region('saruhan-1526', 'Saruhan Sancağı', [[26, 39], [29, 39], [29, 37.5], [26.5, 37]], [27.8, 38.2], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Manisa', 27.43, 38.62] }),
    region('aydin-1526', 'Aydın Sancağı', [[26, 38], [29.5, 38], [29.5, 36.5], [27, 36]], [28, 37], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Aydın', 27.84, 37.85] }),
    region('kutahya-1526', 'Kütahya Sancağı', [[29, 40], [32.2, 40], [32.2, 38], [29, 38]], [30.5, 39], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Kütahya', 29.98, 39.42] }),
    region('bolu-1526', 'Bolu Sancağı', [[29.5, 42], [33, 42], [33, 40], [30, 40]], [31.2, 41], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Bolu', 31.61, 40.73] }),
    region('kastamonu-1526', 'Kastamonu Sancağı', [[32.5, 42.2], [36, 42], [36, 40], [33, 40]], [34.3, 41], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Kastamonu', 33.78, 41.39] }),
    region('ankara-1526', 'Ankara Sancağı', [[31.5, 40.5], [35, 40.5], [35, 38.5], [32, 38]], [33.2, 39.5], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Ankara', 32.86, 39.93] }),
    region('hamid-1526', 'Hamid ve Teke', [[29, 38.5], [32.5, 38.5], [32.5, 36], [29, 36]], [30.8, 37.2], { stateName: 'Osmanlı Devleti', adminType: 'Sancak grubu', seat: ['Isparta', 30.55, 37.76] }),
    region('konya-1526', 'Konya Sancağı', [[31.5, 39], [34.8, 39], [34.8, 36.5], [32, 36]], [33, 37.8], { stateName: 'Osmanlı Devleti', adminType: 'Karaman Eyaleti sancağı', seat: ['Konya', 32.49, 37.87], featured: true }),
    region('kayseri-1526', 'Kayseri Sancağı', [[34, 39.5], [37, 39.5], [37, 37], [34.5, 37]], [35.5, 38.3], { stateName: 'Osmanlı Devleti', adminType: 'Karaman Eyaleti sancağı', seat: ['Kayseri', 35.49, 38.72] }),
    region('icel-1526', 'İçel Sancağı', [[32, 37], [35.5, 37], [35.5, 35.5], [32.5, 35.5]], [33.7, 36.2], { stateName: 'Osmanlı Devleti', adminType: 'Karaman Eyaleti sancağı', seat: ['Silifke', 33.93, 36.38] }),
    region('maras-1526', 'Maraş Sancağı', [[35.5, 38.5], [39, 38.5], [39, 36], [36, 36]], [37.2, 37.2], { stateName: 'Osmanlı Devleti', adminType: 'Dulkadir Eyaleti sancağı', seat: ['Maraş', 36.93, 37.58] }),
    region('amasya-1526', 'Amasya Sancağı', [[34.5, 41.5], [37.5, 41.5], [37.5, 39.5], [34.5, 39.5]], [36, 40.5], { stateName: 'Osmanlı Devleti', adminType: 'Rum Eyaleti sancağı', seat: ['Amasya', 35.83, 40.65] }),
    region('sivas-1526', 'Sivas Sancağı', [[36.5, 41], [40, 41], [40, 38.5], [37, 38.5]], [38.3, 39.8], { stateName: 'Osmanlı Devleti', adminType: 'Rum Eyaleti sancağı', seat: ['Sivas', 37.02, 39.75] }),
    region('canik-1526', 'Canik Sancağı', [[35, 42.2], [39, 42], [39, 40.5], [35.5, 40.5]], [37, 41.4], { stateName: 'Osmanlı Devleti', adminType: 'Rum Eyaleti sancağı', seat: ['Samsun', 36.33, 41.29] }),
    region('diyarbekir-1526', 'Diyarbekir Eyaleti', [[38.5, 40.5], [43, 40], [42.5, 37], [39, 37]], [40.8, 38.8], { stateName: 'Osmanlı Devleti', adminType: 'Eyalet', seat: ['Amid', 40.23, 37.91], featured: true }),
    region('halep-1526', 'Halep Sancağı', [[35.5, 37], [39.5, 37], [39, 34.8], [35.5, 34.8]], [37.2, 36], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Halep', 37.16, 36.2], featured: true }),
    region('sam-1526', 'Şam Sancağı', [[35, 35], [39.5, 35], [39, 32], [35, 32]], [37, 33.6], { stateName: 'Osmanlı Devleti', adminType: 'Sancak', seat: ['Şam', 36.29, 33.51], featured: true }),
    region('safed-1526', 'Safed ve Gazze', [[34, 33], [36.5, 33], [36, 30.8], [34, 31]], [35.2, 32], { stateName: 'Osmanlı Devleti', adminType: 'Sancak grubu', seat: ['Gazze', 34.47, 31.5] }),
    region('asagi-misir-1526', 'Aşağı Mısır', [[28.5, 31.5], [34.5, 31.5], [33, 28.5], [29, 28.5]], [31.2, 30], { stateName: 'Osmanlı Devleti', adminType: 'Mısır Eyaleti', seat: ['Kahire', 31.24, 30.04], featured: true }),
    region('yukari-misir-1526', 'Yukarı Mısır', [[29, 29], [33.5, 29], [33.5, 22], [29, 22]], [31.2, 25.5], { stateName: 'Osmanlı Devleti', adminType: 'Mısır Eyaleti', seat: ['Asyut', 31.18, 27.18] }),
    region('hirvat-slavon-1526', 'Hırvatistan–Slavonya', [[14.2, 49], [18.5, 49], [18.5, 45.5], [15, 45.5]], [16.5, 47], { stateName: 'Macar Krallığı', adminType: 'Krallık bölgesi', seat: ['Zagreb', 15.98, 45.81] }),
    region('transdanubia-1526', 'Transdanubia Kontlukları', [[17.5, 49], [20.5, 49], [20.5, 45.5], [18, 45.5]], [19, 47.2], { stateName: 'Macar Krallığı', adminType: 'Kontluk grubu', seat: ['Budin', 19.04, 47.5], featured: true }),
    region('orta-macar-1526', 'Orta Macar Kontlukları', [[20, 49.5], [23, 49.5], [23, 46], [20, 45.5]], [21.5, 47.5], { stateName: 'Macar Krallığı', adminType: 'Kontluk grubu', seat: ['Peşte', 19.07, 47.5] }),
    region('yukari-macar-1526', 'Yukarı Macaristan', [[16, 50], [23.8, 50], [23, 48.5], [17, 48.5]], [20, 49.4], { stateName: 'Macar Krallığı', adminType: 'Kontluk grubu', seat: ['Kassa', 21.26, 48.72] }),
    region('erdel-1526', 'Erdel Voyvodalığı', [[22, 49], [25.5, 48.5], [25, 45.5], [22, 46]], [23.5, 47.2], { stateName: 'Macar Krallığı', adminType: 'Voyvodalık', seat: ['Kolozsvár', 23.59, 46.77] }),
    region('asagi-avusturya-1526', 'Aşağı Avusturya', [[13.5, 49.5], [16.5, 49], [16.5, 47], [14, 47]], [15.2, 48.2], { stateName: 'Avusturya Habsburgları', adminType: 'Arşidüklük', seat: ['Viyana', 16.37, 48.21], featured: true }),
    region('yukari-avusturya-1526', 'Yukarı Avusturya', [[11, 49.5], [14.2, 49.5], [14, 47], [11.5, 47]], [12.7, 48.3], { stateName: 'Avusturya Habsburgları', adminType: 'Arşidüklük', seat: ['Linz', 14.29, 48.31] }),
    region('styria-1526', 'Steiermark', [[13, 47.5], [16, 47.5], [15.5, 45.5], [13, 45.5]], [14.4, 46.5], { stateName: 'Avusturya Habsburgları', adminType: 'Düklük', seat: ['Graz', 15.44, 47.07] }),
    region('tirol-1526', 'Tirol', [[7.5, 48], [12, 48], [12, 45.5], [8, 46]], [10, 47], { stateName: 'Avusturya Habsburgları', adminType: 'Kontluk', seat: ['Innsbruck', 11.4, 47.27] }),
    region('azerbaycan-1526', 'Azerbaycan', [[43, 42], [50.5, 42], [50, 36], [44, 36]], [47, 39], { stateName: 'Safevi Devleti', adminType: 'Beylerbeylik', seat: ['Tebriz', 46.29, 38.08], featured: true }),
    region('sirvan-1526', 'Şirvan', [[47, 42.5], [53, 42], [53, 39], [49, 38.5]], [50.5, 40.5], { stateName: 'Safevi Devleti', adminType: 'Vilayet', seat: ['Şamahı', 48.64, 40.63] }),
    region('gilan-1526', 'Gilan–Mazenderan', [[49, 39], [55, 39], [55, 36], [50, 36]], [52, 37.5], { stateName: 'Safevi Devleti', adminType: 'Hazar vilayetleri', seat: ['Reşt', 49.59, 37.28] }),
    region('irak-acem-1526', 'Irak-ı Acem', [[44, 37], [51, 37], [51, 32], [44, 32]], [47.5, 34.5], { stateName: 'Safevi Devleti', adminType: 'Vilayet', seat: ['Kazvin', 50, 36.27] }),
    region('lorestan-1526', 'Luristan', [[43, 34], [48, 34], [48, 30], [44, 30]], [46, 32], { stateName: 'Safevi Devleti', adminType: 'Vilayet', seat: ['Hürremabad', 48.35, 33.49] }),
    region('fars-1526', 'Fars', [[48, 34], [55, 34], [55, 27], [49, 27]], [52, 30.5], { stateName: 'Safevi Devleti', adminType: 'Vilayet', seat: ['Şiraz', 52.58, 29.59], featured: true }),
    region('kerman-1526', 'Kirman', [[55, 34], [60, 34], [59, 27], [55, 27]], [57.5, 30.5], { stateName: 'Safevi Devleti', adminType: 'Vilayet', seat: ['Kirman', 57.08, 30.29] }),
    region('horasan-1526', 'Horasan', [[52, 42], [60.5, 39], [60, 33.5], [54, 34]], [56.5, 37.5], { stateName: 'Safevi Devleti', adminType: 'Vilayet', seat: ['Meşhed', 59.61, 36.3], featured: true }),
    region('veneto-1526', 'Terraferma', [[9.5, 46.8], [13.8, 46.8], [13.5, 44], [10, 44]], [12, 45.5], { stateName: 'Venedik Cumhuriyeti', adminType: 'Anakara toprağı', seat: ['Venedik', 12.32, 45.44], featured: true }),
    region('dalmacya-1526', 'Dalmaçya Kıyıları', [[13.5, 45.5], [18, 43], [17, 41], [14, 43]], [15.5, 43.5], { stateName: 'Venedik Cumhuriyeti', adminType: 'Stato da Mar', seat: ['Zara', 15.23, 44.12] }),
    region('girit-1526', 'Girit', [[23, 36], [27, 36], [27, 34], [23, 34]], [25, 35], { stateName: 'Venedik Cumhuriyeti', adminType: 'Stato da Mar', seat: ['Kandiye', 25.13, 35.34] }),
    region('kibris-1526', 'Kıbrıs', [[31.8, 36], [35, 36], [35, 34], [31.8, 34]], [33.4, 35], { stateName: 'Venedik Cumhuriyeti', adminType: 'Stato da Mar', seat: ['Lefkoşa', 33.36, 35.17] }),
  ],
  1699: [
    region('rumeli-1699', 'Rumeli', [[15, 45], [22, 45], [27, 44], [27, 40], [20, 39], [17, 42]], [21, 42]),
    region('bosna-1699', 'Bosna', [[15, 45], [20, 45.5], [20, 42], [16, 42]], [18, 44]),
    region('mora-1699', 'Mora', [[20, 40], [25, 40], [24, 36], [20, 36]], [22, 38]),
    region('anatolia-1699', 'Anadolu', [[26, 42], [34, 42], [34, 36], [28, 36]], [30.5, 39]),
    region('suriye-1699', 'Suriye', [[34, 37], [42, 37], [42, 32], [35, 31]], [37.5, 34]),
    region('misir-1699', 'Mısır', [[28, 31], [35, 31], [34, 21], [28, 21]], [31, 27]),
    region('kraliyet-macaristani-1699', 'Kraliyet Macaristanı', [[14, 50], [24, 50], [24, 45], [18, 45]], [20, 48]),
    region('safevi-irak-1699', 'Irak-ı Acem', [[43, 39], [51, 39], [50, 33], [44, 32]], [47, 36]),
  ],
  1922: [
    region('marmara-1922', 'Marmara', [[26, 42], [30.5, 42], [30.5, 39], [27, 39]], [29, 40.5]),
    region('bati-anadolu-1922', 'Batı Anadolu', [[27, 39], [32, 40], [32, 36], [27, 36]], [29.5, 38]),
    region('ankara-1922', 'Ankara', [[30.5, 41], [36, 42], [36, 37], [32, 36]], [34, 39]),
    region('karadeniz-1922', 'Karadeniz', [[34, 42.5], [41, 42], [41, 39], [36, 38.5]], [38, 41]),
    region('dogu-anadolu-1922', 'Doğu Anadolu', [[39, 41.5], [44.5, 39.5], [44, 36.5], [38, 36]], [41, 38.5]),
    region('ic-anadolu-1922', 'İç Anadolu', [[32, 39], [38, 39.5], [38, 36], [32, 36]], [35, 37.5]),
    region('yunanistan-1922', 'Yunanistan', [[19, 42], [25, 41], [25, 36], [20, 36]], [22, 39]),
  ],
}

const periodCities = {
  1453: [
    marker('edirne-1453', 'capital', 'Edirne', 'Osmanlı başkenti', 26.56, 41.68, '★', 'Fetih öncesindeki Osmanlı başkenti.', 'İstanbul seferinin yönetim ve lojistik merkezlerinden biri.'),
    marker('bursa-1453', 'strategic', 'Bursa', 'Anadolu merkezi', 29.06, 40.19, '●', 'Osmanlı’nın erken dönem merkezlerinden biri.', 'Anadolu’nun idarî ve ekonomik düğüm noktası.'),
    marker('sofia-1453', 'strategic', 'Sofya', 'Rumeli merkezi', 23.32, 42.7, '●', 'Rumeli sefer yollarının önemli şehri.', 'Balkan idaresi ve askerî yollar bakımından önemlidir.'),
  ],
  1526: [
    marker('edirne-1526', 'strategic', 'Edirne', 'Rumeli merkezi', 26.56, 41.68, '●', 'Balkan sefer yollarının ana kavşağı.', 'Osmanlı ordularının Avrupa yönündeki hareketlerinde önemli merkez.'),
    marker('sofia-1526', 'strategic', 'Sofya', 'Rumeli idare merkezi', 23.32, 42.7, '●', 'Rumeli beylerbeyliğinin önemli merkezlerinden biri.', 'Balkanlar ile Tuna hattını bağlayan idarî ve askerî şehir.'),
    marker('bursa-1526', 'strategic', 'Bursa', 'Anadolu şehri', 29.06, 40.19, '●', 'Ticaret ve üretim merkezi.', 'İpek ticareti ve erken Osmanlı mirasıyla öne çıkar.'),
    marker('konya-1526', 'strategic', 'Konya', 'Karaman merkezi', 32.49, 37.87, '●', 'İç Anadolu’nun önemli idarî merkezi.', 'Karaman eyaletinin siyasi ve ekonomik odağı.'),
    marker('aleppo-1526', 'strategic', 'Halep', 'Suriye ticaret merkezi', 37.16, 36.2, '●', 'Doğu Akdeniz ve kara ticaret yollarının merkezi.', 'Suriye ile Anadolu arasındaki ana ticaret düğümü.'),
    marker('damascus-1526', 'strategic', 'Şam', 'Suriye merkezi', 36.29, 33.51, '●', 'Şam eyaletinin ve hac yollarının merkezi.', 'Osmanlı güney siyasetinin başlıca şehirlerinden biri.'),
    marker('cairo-1526', 'capital', 'Kahire', 'Mısır merkezi', 31.24, 30.04, '◆', 'Mısır’ın büyük idarî ve ekonomik merkezi.', '1517 sonrasında Osmanlı idaresindeki Mısır eyaletinin merkezi.'),
  ],
  1699: [
    marker('sarajevo-1699', 'strategic', 'Saraybosna', 'Bosna merkezi', 18.41, 43.86, '●', 'Bosna eyaletinin önemli merkezi.', 'Osmanlı’nın batı sınırındaki idarî ve ticari düğüm.'),
    marker('belgrade-1699', 'strategic', 'Belgrad', 'Sınır kalesi', 20.45, 44.79, '●', 'Tuna ve Sava nehirlerinin kavşağı.', 'Osmanlı–Habsburg mücadelelerinin kilit şehri.'),
    marker('istanbul-1699', 'capital', 'İstanbul', 'Osmanlı başkenti', 28.98, 41.01, '★', 'İmparatorluğun yönetim merkezi.', 'Karlofça diplomasisinin karar merkezi.'),
    marker('cairo-1699', 'strategic', 'Kahire', 'Mısır merkezi', 31.24, 30.04, '◆', 'Mısır eyaletinin merkezi.', 'Doğu Akdeniz ekonomisinin başlıca şehirlerinden biri.'),
  ],
  1922: [
    marker('istanbul-1922', 'capital', 'İstanbul', 'Saltanat merkezi', 28.98, 41.01, '◆', 'İtilaf işgali altındaki eski imparatorluk başkenti.', '1922’de Ankara ile İstanbul arasında iki ayrı siyasi merkez görünümü vardır.'),
    marker('izmir-1922', 'strategic', 'İzmir', 'Batı cephesi', 27.14, 38.42, '●', 'Batı Anadolu’nun liman şehri.', '9 Eylül 1922’de Türk ordusunun şehre girmesi savaşın askerî sonucunu belirledi.'),
    marker('erzurum-1922', 'strategic', 'Erzurum', 'Doğu Anadolu', 41.27, 39.9, '●', 'Doğu Anadolu’nun askerî ve siyasi merkezi.', 'Millî Mücadele’nin kongre sürecinde belirleyici rol oynadı.'),
    marker('konya-1922', 'strategic', 'Konya', 'İç Anadolu', 32.49, 37.87, '●', 'İç Anadolu’nun büyük şehri.', 'Ankara merkezli millî idarenin hinterlandındadır.'),
  ],
}

const mergeRegionCities = (baseMarkers, regions) => {
  const existing = new Set(baseMarkers.map((item) => item.title.toLocaleLowerCase('tr')))
  const regionMarkers = regions.filter((item) => item.seat).map((item) => marker(
    `city-${item.id}`, 'city', item.seat[0], `${item.name} merkezi`, item.seat[1], item.seat[2], '•',
    `${item.seat[0]}, ${item.name} bölgesinin tarihsel merkezidir.`,
    `${item.adminType || 'İdari bölge'} sınırı atlas üzerinde öğretim amaçlı sadeleştirilmiştir.`,
    { regionId: item.id },
  )).filter((item) => !existing.has(item.title.toLocaleLowerCase('tr')))
  return [...baseMarkers, ...regionMarkers]
}

export const politicalPeriods = {
  1453: {
    year: 1453, title: 'Fetih Dünyası', ruler: 'Fatih Sultan Mehmet', actor: 'Osmanlı Devleti', states: states1453,
    regions: administrativeRegions[1453], markers: mergeRegionCities([marker('constantinople-1453', 'conquest', 'İstanbul’un Fethi', '29 Mayıs 1453', 28.9784, 41.0082, '♜', 'Osmanlı kuşatması Bizans başkentini hedef aldı.', 'Fetih, boğazların ve iki kıta arasındaki geçişin denetimini Osmanlı’ya kazandırdı.', { result: 'Osmanlı zaferi; Bizans İmparatorluğu sona erdi.', commanders: ['Fatih Sultan Mehmet', 'XI. Konstantinos'] }), ...periodCities[1453]], administrativeRegions[1453]),
  },
  1526: { year: 1526, title: 'Kanuni Devri', ruler: 'Kanuni Sultan Süleyman', actor: 'Osmanlı Devleti', states: politicalStates1526, regions: administrativeRegions[1526], markers: mergeRegionCities([...simulationMarkers1526, ...periodCities[1526]], administrativeRegions[1526]) },
  1699: {
    year: 1699, title: 'Karlofça Düzeni', ruler: 'II. Mustafa', actor: 'Osmanlı Devleti', states: states1699,
    regions: administrativeRegions[1699], markers: mergeRegionCities([marker('karlowitz-1699', 'strategic', 'Karlofça', '26 Ocak 1699', 19.94, 45.2, '◆', 'Uzun savaşları sona erdiren diplomatik merkez.', 'Antlaşma Osmanlı’nın Orta Avrupa’daki büyük toprak kayıplarını kabul ettiği dönüm noktasıdır.', { result: 'Habsburglar Macaristan ve Erdel’in büyük bölümünü aldı.' }), ...periodCities[1699]], administrativeRegions[1699]),
  },
  1922: {
    year: 1922, title: 'İmparatorluktan Cumhuriyete', ruler: 'Mustafa Kemal Paşa', actor: 'TBMM Hükûmeti', states: states1922,
    regions: administrativeRegions[1922], markers: mergeRegionCities([marker('ankara-1922', 'capital', 'Ankara', 'Millî Mücadele merkezi', 32.86, 39.93, '★', 'TBMM ve Millî Mücadele’nin karar merkezi.', '1922’de askerî zaferlerin ardından saltanat kaldırıldı ve yeni siyasi düzenin yolu açıldı.', { result: 'Ankara merkezli millî egemenlik güçlendi.' }), ...periodCities[1922]], administrativeRegions[1922]),
  },
}

export const availablePoliticalYears = Object.keys(politicalPeriods).map(Number)
