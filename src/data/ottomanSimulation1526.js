/**
 * 1526 siyasi simülasyon demosu.
 * Koordinatlar [boylam, enlem] biçimindedir. Sınırlar öğretim prototipi için
 * sadeleştirilmiştir; doğrulanmış tarihî GIS verisi geldiğinde aynı şemadaki
 * `polygons` alanları değiştirilebilir.
 */

export const politicalStates1526 = [
  {
    id: 'ottoman', type: 'state', name: 'Osmanlı Devleti', mapLabel: 'OSMANLI DEVLETİ', tone: 'ottoman', labelAt: [33, 39], importance: 'Haritanın merkez aktörü',
    summary: 'Kanuni Sultan Süleyman döneminde Balkanlar, Anadolu, Suriye ve Mısır’ı birbirine bağlayan büyük imparatorluk.',
    relation: 'Batıda Macaristan ve Habsburglarla; doğuda Safevilerle stratejik rekabet içindedir.', leaders: ['Kanuni Sultan Süleyman', 'Pargalı İbrahim Paşa'], relatedEvent: '1526 Mohaç Meydan Muharebesi', result: 'Mohaç zaferiyle Orta Avrupa siyasetinin belirleyici gücü hâline geldi.',
    polygons: [
      [[14.2, 45.8], [16.1, 45.5], [17.8, 45.3], [19.2, 45.5], [20.7, 44.9], [22.4, 44.8], [23.8, 44.2], [25.5, 44.4], [27.1, 45.1], [29.6, 45.2], [30.2, 43.2], [29.4, 41.2], [27.5, 40.2], [25.1, 40.1], [23.6, 39], [21.8, 38.8], [20.2, 39.8], [19.1, 40.7], [18.5, 42.1], [17.1, 43.1], [15.7, 44.1]],
      [[25.7, 42.2], [28.3, 41.3], [31.2, 42.1], [34.2, 42.1], [36.6, 41.5], [39.2, 41.4], [41.8, 40.8], [44, 39.4], [43.3, 37.5], [41.2, 36.6], [38.2, 36], [35.2, 36.1], [32.7, 36.4], [30.2, 36.1], [28.1, 37.2], [26, 38.7]],
      [[34.7, 37], [38.4, 37.2], [41.8, 36.6], [43, 34.7], [42.3, 33.1], [40.4, 32.3], [38.4, 31.8], [36.2, 31.2], [34.2, 31.5], [32.9, 30.4], [32.5, 28], [33, 25], [32.2, 21.5], [29, 21.2], [27.2, 23], [28.8, 27.5], [29.5, 30.7], [31.8, 33.6]],
      [[-1.5, 37.2], [2.5, 37.4], [6.5, 37.5], [9.8, 37], [11.5, 35.2], [10.5, 32.5], [5.5, 31.8], [1.2, 32.5], [-1.5, 34]],
    ],
  },
  {
    id: 'hungary', type: 'state', name: 'Macar Krallığı', mapLabel: 'MACAR KRALLIĞI', tone: 'hungary', labelAt: [20.5, 48.2], importance: 'Osmanlı’nın Orta Avrupa’daki ana rakibi',
    summary: 'Tuna havzasında Osmanlı ilerleyişi ile Habsburg nüfuzu arasında kalan krallık.', relation: 'Belgrad’ın alınmasından sonra Osmanlı baskısı arttı; 1526’da iki ordu Mohaç’ta karşılaştı.', leaders: ['II. Lajos', 'Pál Tomori'], relatedEvent: 'Mohaç Meydan Muharebesi', result: 'Osmanlı zaferi; Macar siyasi düzeni çözüldü ve Habsburg rekabeti güçlendi.',
    polygons: [[[14.5, 49.2], [16.5, 50], [19.2, 49.8], [21.5, 49.5], [23.8, 48.7], [25, 47.4], [24.2, 45.7], [22.4, 44.8], [20.7, 44.9], [19.2, 45.5], [17.8, 45.3], [16, 45.8], [14.4, 47]]],
  },
  {
    id: 'habsburg', type: 'state', name: 'Avusturya Habsburgları', mapLabel: 'HABSBURG', tone: 'habsburg', labelAt: [11.3, 49.6], importance: 'Batıdaki yükselen hanedan gücü',
    summary: 'Avusturya merkezli Habsburg toprakları, Macar mirası ve Orta Avrupa hâkimiyeti için Osmanlı’nın başlıca rakibidir.', relation: 'Mohaç sonrasında Macar tahtı üzerindeki hak iddiası Osmanlı–Habsburg mücadelesini keskinleştirdi.', leaders: ['I. Ferdinand', 'V. Karl'], relatedEvent: 'Mohaç sonrası Macar taht mücadelesi', result: '1526’dan sonra Osmanlı’nın Avrupa siyasetindeki en kalıcı rakiplerinden biri oldu.',
    polygons: [[[7.2, 47.5], [8.3, 49], [10.3, 49.7], [12.2, 50.3], [14.5, 49.2], [14.4, 47], [13, 46.2], [12.2, 45.2], [10, 46], [8.4, 46.2]]],
  },
  {
    id: 'safavid', type: 'state', name: 'Safevi Devleti', mapLabel: 'SAFEVİ DEVLETİ', tone: 'safavid', labelAt: [51.5, 35.5], importance: 'Doğu cephesindeki büyük rakip',
    summary: 'İran merkezli Safevi Devleti, Doğu Anadolu, Irak ve ticaret yolları üzerinde Osmanlı ile rekabet eder.', relation: '1526’da açık bir büyük savaş yoktur; fakat doğu sınırı sürekli askerî ve siyasi baskı üretmektedir.', leaders: ['Şah Tahmasb'], relatedEvent: 'Osmanlı–Safevi sınır rekabeti', result: 'Doğu seferleri Kanuni döneminin ikinci büyük stratejik eksenini oluşturdu.',
    polygons: [[[43, 40.2], [46, 41.8], [49.5, 42.1], [52.5, 41], [55, 39.6], [59.5, 37.8], [60.5, 34], [58.5, 30], [55.5, 27.5], [51.5, 26], [48.2, 27.8], [45, 29.5], [43.2, 32.5], [42, 35.5], [41.5, 38]]],
  },
  {
    id: 'venice', type: 'state', name: 'Venedik Cumhuriyeti', mapLabel: 'VENEDİK', tone: 'venice', labelAt: [11.8, 45.5], importance: 'Akdeniz ticaret ve deniz gücü',
    summary: 'Adriyatik ve Doğu Akdeniz’de limanlar, adalar ve ticaret ağlarıyla etkili deniz cumhuriyeti.', relation: 'Osmanlı ile ticaret yaparken aynı anda deniz yolları ve adalar için rekabet eder.', leaders: ['Andrea Gritti'], relatedEvent: 'Doğu Akdeniz hâkimiyet mücadelesi', result: 'Venedik’in ada ve liman ağı Osmanlı deniz siyasetinin temel hedeflerinden biri oldu.',
    polygons: [
      [[9.6, 46.8], [12.8, 46.8], [13.8, 45.6], [13.2, 44.4], [11.2, 43.8], [9.2, 44.8]], [[13.2, 45.7], [14.7, 45], [16.2, 43.8], [17.8, 42.2], [16.4, 41.2], [15, 42.2], [14, 43.6]], [[23, 35.8], [26.8, 35.8], [26.3, 34.2], [23, 34.3]], [[31.8, 35.9], [35, 35.9], [34.4, 34.2], [31.8, 34.3]],
    ],
  },
  {
    id: 'poland', type: 'state', name: 'Polonya–Litvanya', mapLabel: 'POLONYA–LİTVANYA', tone: 'poland', labelAt: [29.5, 52.5], importance: 'Kuzeydeki bölgesel güç',
    summary: 'Karadeniz’in kuzeyi ve Orta Avrupa dengelerinde etkili geniş siyasi birlik.', relation: 'Osmanlı ile Kırım, Boğdan ve Lehistan hattı üzerinden temas hâlindedir.', leaders: ['I. Zygmunt'], relatedEvent: 'Kuzey Karadeniz diplomasi hattı', result: 'Doğrudan Mohaç’ın tarafı değildir; bölgesel dengenin önemli aktörüdür.', context: true,
    polygons: [[[19.2, 56.5], [26, 57], [33.5, 56.6], [39.5, 54.8], [38.4, 50], [35.2, 48], [31, 47], [25, 47.4], [23.8, 48.7], [21.5, 49.5], [19.5, 52.2]]],
  },
  {
    id: 'france', type: 'state', name: 'Fransa Krallığı', mapLabel: 'FRANSA', tone: 'france', labelAt: [2, 47], importance: 'Habsburg karşıtı Batı Avrupa gücü',
    summary: 'Habsburg kuşatmasına karşı Osmanlı ile diplomatik yakınlık geliştiren Batı Avrupa krallığı.', relation: 'Ortak düşman Habsburglar üzerinden Osmanlı diplomasisinde özel bir yere sahiptir.', leaders: ['I. François'], relatedEvent: 'Osmanlı–Fransa yakınlaşması', result: 'Avrupa güç dengesinde Osmanlı’nın dolaylı ortağı hâline geldi.', context: true,
    polygons: [[[-5.5, 50.5], [-2, 51.3], [2, 50.8], [5.5, 49.5], [7.5, 47.5], [7.2, 44], [4.8, 42.5], [1.5, 42.2], [-1.8, 43.2], [-4.5, 46.5]]],
  },
]

export const neutralLand1526 = [
  [[-12, 57], [61, 57], [61, 25], [54, 24], [48, 27], [44, 31], [37, 34], [32, 37], [27, 39], [21, 42], [14, 43], [7, 42], [1, 41], [-10, 36], [-12, 45]],
  [[-14, 37], [35, 37], [42, 31], [50, 12], [38, 6], [20, 8], [3, 4], [-10, 14]],
  [[34, 31], [50, 30], [58, 22], [52, 15], [42, 16], [34, 23]],
]

export const rivers1526 = [
  { name: 'Tuna', points: [[9, 48], [13, 48.2], [16, 48], [19, 47.3], [22, 46], [25, 45], [28, 44], [29, 42.5]] },
  { name: 'Nil', points: [[31, 31], [31.2, 27], [31, 23], [30.4, 19]] },
  { name: 'Dicle', points: [[39, 38], [42, 35], [44, 32], [47, 30]] },
]

// Siyasi alanların içinde görünen ince idari/provins çizgileri. Bunlar sınır
// değildir; strateji oyunu hissi ve bölgesel okunabilirlik için stil katmanıdır.
export const provinceLines1526 = [
  [[16, 45.8], [18.6, 44.6], [21.2, 44.4], [23.2, 45.5]],
  [[18.5, 47.2], [19.1, 45.8], [18.6, 44.6]],
  [[21.6, 49], [21.2, 47.5], [21.2, 44.4]],
  [[11.5, 50.9], [11.9, 48.8], [10.5, 46.1]],
  [[9.8, 48.8], [14.5, 48.8], [15.6, 47.7]],
  [[27, 45.6], [27.5, 42.3], [27, 39.4]],
  [[31, 42.5], [34.8, 40.9], [38.5, 40.5], [42, 39]],
  [[30.2, 38], [34.5, 36.2], [38.2, 36]],
  [[35.8, 36.1], [36.3, 32], [34.4, 29.2]],
  [[41.5, 35.5], [39.5, 32], [39.5, 29.2]],
  [[28.8, 31.5], [33, 31.8], [37, 31]],
  [[31.7, 27.7], [36.2, 27.8], [39.5, 29.2]],
  [[46, 40.5], [48.4, 36.8], [46.5, 32.5]],
  [[52, 42.2], [51.2, 37], [52, 32], [55, 29.5]],
  [[56.5, 40.8], [55.2, 36], [58, 32]],
  [[24, 54.6], [28, 51.5], [31, 47.2]],
  [[31.8, 55.2], [31.5, 51], [36.7, 49.5]],
  [[-2, 50.8], [1, 47], [0, 43]],
  [[3.5, 50.8], [3.2, 46], [6, 43]],
]

export const terrainFeatures1526 = [
  { kind: 'mountains', name: 'Alpler', points: [[6.5, 46.2], [9, 46], [11.5, 46.4], [14, 46.5], [16.5, 47]] },
  { kind: 'mountains', name: 'Karpatlar', points: [[19, 49], [22, 48.2], [24.5, 47], [25.5, 45.5]] },
  { kind: 'mountains', name: 'Balkanlar', points: [[19, 43], [22, 42.7], [25, 42.5], [28, 42.8]] },
  { kind: 'mountains', name: 'Toroslar', points: [[29, 37], [33, 37.2], [37, 37], [40, 37.2]] },
  { kind: 'mountains', name: 'Zagroslar', points: [[43.5, 38], [46, 35.5], [48, 33], [50, 30]] },
]

export const seaLabels1526 = [
  { label: 'AKDENİZ', at: [20, 34.2], rotation: -0.03 },
  { label: 'KARADENİZ', at: [35, 44.1], rotation: 0.02 },
  { label: 'ADRiYATİK', at: [15.2, 41.5], rotation: -1.02 },
  { label: 'KIZILDENİZ', at: [38.2, 24.5], rotation: -1.08 },
]

export const simulationMarkers1526 = [
  { id: 'istanbul-capital', type: 'capital', title: 'İstanbul', subtitle: 'Osmanlı başkenti', lng: 28.9784, lat: 41.0082, icon: '★', labelOffset: [18, -12], summary: 'Osmanlı yönetiminin, diplomasisinin ve deniz yollarının merkezi.', detail: '1453’ten sonra başkent; Balkanlar, Anadolu ve Akdeniz arasındaki ana karar merkezi.' },
  { id: 'budin-capital', type: 'capital', title: 'Budin', subtitle: 'Macar Krallığı merkezi', lng: 19.0402, lat: 47.4979, icon: '◆', labelOffset: [17, -14], summary: 'Macar siyasi düzeninin merkezlerinden biri.', detail: 'Mohaç’tan sonra taht mücadelesinin ve Osmanlı–Habsburg rekabetinin odağı hâline geldi.' },
  { id: 'mohac-battle', type: 'battle', title: 'Mohaç', panelTitle: 'Mohaç Meydan Muharebesi', subtitle: '29 Ağustos 1526', lng: 18.683, lat: 45.995, icon: '⚔', labelOffset: [22, 17], summary: 'Osmanlı Devleti ile Macar Krallığı arasındaki belirleyici meydan savaşı.', detail: 'Kanuni Sultan Süleyman komutasındaki Osmanlı ordusu kesin zafer kazandı.', historicalImportance: 'Macar siyasi düzeni çözüldü ve Orta Avrupa’daki güç dengeleri değişti.', sides: ['Osmanlı Devleti', 'Macar Krallığı'], commanders: ['Kanuni Sultan Süleyman', 'II. Lajos'], result: 'Osmanlı zaferi.' },
  { id: 'vienna-siege', type: 'siege', title: 'Viyana', subtitle: 'Yaklaşan hedef · 1529', lng: 16.3738, lat: 48.2082, icon: '⚔', labelOffset: [-16, -13], summary: 'Habsburgların Orta Avrupa’daki stratejik merkezi.', detail: '1526 haritasında yaklaşan Osmanlı–Habsburg mücadelesinin yönünü gösterir.' },
  { id: 'rhodes-conquest', type: 'conquest', title: 'Rodos', subtitle: 'Fetih noktası · 1522', lng: 28.2176, lat: 36.434, icon: '♜', labelOffset: [16, 14], summary: 'Doğu Akdeniz deniz yolları için kritik ada.', detail: '1522’de Osmanlı yönetimine geçti; Akdeniz güvenliği güçlendi.' },
  { id: 'belgrade-strategic', type: 'strategic', title: 'Belgrad', subtitle: 'Stratejik geçit', lng: 20.4489, lat: 44.7866, icon: '●', labelOffset: [15, 13], summary: 'Orta Avrupa seferlerinin ana geçiş kapısı.', detail: '1521’de alınması Mohaç seferinin önünü açtı.' },
  { id: 'tabriz-strategic', type: 'strategic', title: 'Tebriz', subtitle: 'Safevi merkezi', lng: 46.2919, lat: 38.08, icon: '◆', labelOffset: [15, 0], summary: 'Safevi Devleti’nin önemli siyasi ve ticari merkezi.', detail: 'Osmanlı doğu siyasetinde sefer yollarının ve rekabetin ana düğümlerinden biri.' },
  { id: 'venice-capital', type: 'capital', title: 'Venedik', subtitle: 'Deniz cumhuriyeti', lng: 12.3155, lat: 45.4408, icon: '◆', labelOffset: [-16, 13], summary: 'Adriyatik ticaret ağının merkezi.', detail: 'Osmanlı ile hem ticaret yapan hem de adalar ve limanlar için rekabet eden deniz gücü.' },
]
