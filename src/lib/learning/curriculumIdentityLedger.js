/**
 * Faz 1 — sürümlenmiş müfredat kimliği kayıt defteri.
 *
 * Bu dosyadaki kimlikler etiketlerden TÜRETİLMEZ. Etiket değişikliklerinde
 * aynı kimlik korunur; yeni konu ekleri yeni ve hiç kullanılmamış bir sıra
 * numarası alır. Eski "SINAV|Ders|Konu" anahtarı yalnız yönlendirme anahtarıdır.
 * Dosya, 330 konu ve 33 ders kaydının ilk sürüm sabitlemesidir.
 */

export const CURRICULUM_IDENTITY_LEDGER_VERSION = 'curriculum-ledger@1'
export const CURRICULUM_ALIAS_SET_VERSION = 'curriculum-aliases@1'

const freezeLedger = (rows) => Object.freeze(rows.map((row) => Object.freeze(
  row.map((value) => (Array.isArray(value) ? Object.freeze([...value]) : value)),
)))

export const CURRICULUM_CONTEXT_LEDGER = freezeLedger([
  [
    "drkoc:curriculum:context:v1:lgs",
    "LGS",
    "LGS"
  ],
  [
    "drkoc:curriculum:context:v1:tyt",
    "TYT",
    "TYT"
  ],
  [
    "drkoc:curriculum:context:v1:ayt",
    "AYT",
    "AYT"
  ],
  [
    "drkoc:curriculum:context:v1:kpss",
    "KPSS",
    "KPSS"
  ]
])

export const CURRICULUM_SUBJECT_LEDGER = freezeLedger([
  [
    "drkoc:curriculum:subject:v1:s001",
    "LGS",
    "Matematik"
  ],
  [
    "drkoc:curriculum:subject:v1:s002",
    "LGS",
    "Geometri"
  ],
  [
    "drkoc:curriculum:subject:v1:s003",
    "LGS",
    "Türkçe"
  ],
  [
    "drkoc:curriculum:subject:v1:s004",
    "LGS",
    "Fen Bilimleri"
  ],
  [
    "drkoc:curriculum:subject:v1:s005",
    "LGS",
    "T.C. İnkılap Tarihi ve Atatürkçülük"
  ],
  [
    "drkoc:curriculum:subject:v1:s006",
    "LGS",
    "İngilizce"
  ],
  [
    "drkoc:curriculum:subject:v1:s007",
    "LGS",
    "Din Kültürü ve Ahlak Bilgisi"
  ],
  [
    "drkoc:curriculum:subject:v1:s008",
    "TYT",
    "Matematik"
  ],
  [
    "drkoc:curriculum:subject:v1:s009",
    "TYT",
    "Geometri"
  ],
  [
    "drkoc:curriculum:subject:v1:s010",
    "TYT",
    "Türkçe"
  ],
  [
    "drkoc:curriculum:subject:v1:s011",
    "TYT",
    "Fizik"
  ],
  [
    "drkoc:curriculum:subject:v1:s012",
    "TYT",
    "Kimya"
  ],
  [
    "drkoc:curriculum:subject:v1:s013",
    "TYT",
    "Biyoloji"
  ],
  [
    "drkoc:curriculum:subject:v1:s014",
    "TYT",
    "Tarih"
  ],
  [
    "drkoc:curriculum:subject:v1:s015",
    "TYT",
    "Coğrafya"
  ],
  [
    "drkoc:curriculum:subject:v1:s016",
    "TYT",
    "Felsefe"
  ],
  [
    "drkoc:curriculum:subject:v1:s017",
    "TYT",
    "Din Kültürü ve Ahlak Bilgisi"
  ],
  [
    "drkoc:curriculum:subject:v1:s018",
    "AYT",
    "Matematik"
  ],
  [
    "drkoc:curriculum:subject:v1:s019",
    "AYT",
    "Geometri"
  ],
  [
    "drkoc:curriculum:subject:v1:s020",
    "AYT",
    "Edebiyat"
  ],
  [
    "drkoc:curriculum:subject:v1:s021",
    "AYT",
    "Fizik"
  ],
  [
    "drkoc:curriculum:subject:v1:s022",
    "AYT",
    "Kimya"
  ],
  [
    "drkoc:curriculum:subject:v1:s023",
    "AYT",
    "Biyoloji"
  ],
  [
    "drkoc:curriculum:subject:v1:s024",
    "AYT",
    "Tarih"
  ],
  [
    "drkoc:curriculum:subject:v1:s025",
    "AYT",
    "Coğrafya"
  ],
  [
    "drkoc:curriculum:subject:v1:s026",
    "AYT",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)"
  ],
  [
    "drkoc:curriculum:subject:v1:s027",
    "AYT",
    "Din Kültürü ve Ahlak Bilgisi"
  ],
  [
    "drkoc:curriculum:subject:v1:s028",
    "KPSS",
    "Matematik"
  ],
  [
    "drkoc:curriculum:subject:v1:s029",
    "KPSS",
    "Geometri"
  ],
  [
    "drkoc:curriculum:subject:v1:s030",
    "KPSS",
    "Türkçe"
  ],
  [
    "drkoc:curriculum:subject:v1:s031",
    "KPSS",
    "Tarih"
  ],
  [
    "drkoc:curriculum:subject:v1:s032",
    "KPSS",
    "Coğrafya"
  ],
  [
    "drkoc:curriculum:subject:v1:s033",
    "KPSS",
    "Vatandaşlık"
  ]
])

export const CURRICULUM_TOPIC_LEDGER = freezeLedger([
  [
    "drkoc:curriculum:topic:v1:t0001",
    "LGS",
    "drkoc:curriculum:subject:v1:s001",
    "Matematik",
    "Çarpanlar ve Katlar",
    [
      "EBOB EKOK",
      "Asal Çarpanlar"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0002",
    "LGS",
    "drkoc:curriculum:subject:v1:s001",
    "Matematik",
    "Üslü İfadeler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0001"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0003",
    "LGS",
    "drkoc:curriculum:subject:v1:s001",
    "Matematik",
    "Kareköklü İfadeler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0002"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0004",
    "LGS",
    "drkoc:curriculum:subject:v1:s001",
    "Matematik",
    "Veri Analizi",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0005",
    "LGS",
    "drkoc:curriculum:subject:v1:s001",
    "Matematik",
    "Olasılık",
    [],
    [
      "drkoc:curriculum:topic:v1:t0004"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0006",
    "LGS",
    "drkoc:curriculum:subject:v1:s001",
    "Matematik",
    "Cebirsel İfadeler ve Özdeşlikler",
    [
      "Özdeşlikler",
      "Cebirsel İfadeler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0001",
      "drkoc:curriculum:topic:v1:t0002"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0007",
    "LGS",
    "drkoc:curriculum:subject:v1:s001",
    "Matematik",
    "Doğrusal Denklemler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0006"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0008",
    "LGS",
    "drkoc:curriculum:subject:v1:s001",
    "Matematik",
    "Eşitsizlikler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0007"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0009",
    "LGS",
    "drkoc:curriculum:subject:v1:s002",
    "Geometri",
    "Üçgenler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0003"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0010",
    "LGS",
    "drkoc:curriculum:subject:v1:s002",
    "Geometri",
    "Eşlik ve Benzerlik",
    [],
    [
      "drkoc:curriculum:topic:v1:t0009"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0011",
    "LGS",
    "drkoc:curriculum:subject:v1:s002",
    "Geometri",
    "Dönüşüm Geometrisi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0009"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0012",
    "LGS",
    "drkoc:curriculum:subject:v1:s002",
    "Geometri",
    "Geometrik Cisimler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0009",
      "drkoc:curriculum:topic:v1:t0010"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0013",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Sözcükte Anlam",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0014",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Cümlede Anlam",
    [],
    [
      "drkoc:curriculum:topic:v1:t0013"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0015",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Paragrafta Anlam",
    [
      "Paragraf"
    ],
    [
      "drkoc:curriculum:topic:v1:t0014"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0016",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Söz Sanatları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0013"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0017",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Fiilimsiler",
    [
      "Fiilimsi"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0018",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Cümlenin Öğeleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0017"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0019",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Fiilde Çatı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0018"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0020",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Yazım Kuralları",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0021",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Noktalama İşaretleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0020"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0022",
    "LGS",
    "drkoc:curriculum:subject:v1:s003",
    "Türkçe",
    "Metin Türleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0015"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0023",
    "LGS",
    "drkoc:curriculum:subject:v1:s004",
    "Fen Bilimleri",
    "Mevsimler ve İklim",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0024",
    "LGS",
    "drkoc:curriculum:subject:v1:s004",
    "Fen Bilimleri",
    "DNA ve Genetik Kod",
    [
      "DNA",
      "Genetik"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0025",
    "LGS",
    "drkoc:curriculum:subject:v1:s004",
    "Fen Bilimleri",
    "Basınç",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0026",
    "LGS",
    "drkoc:curriculum:subject:v1:s004",
    "Fen Bilimleri",
    "Madde ve Endüstri",
    [
      "Periyodik Sistem",
      "Asit Baz"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0027",
    "LGS",
    "drkoc:curriculum:subject:v1:s004",
    "Fen Bilimleri",
    "Basit Makineler",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0028",
    "LGS",
    "drkoc:curriculum:subject:v1:s004",
    "Fen Bilimleri",
    "Enerji Dönüşümleri ve Çevre Bilimi",
    [
      "Fotosentez",
      "Besin Zinciri"
    ],
    [
      "drkoc:curriculum:topic:v1:t0024"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0029",
    "LGS",
    "drkoc:curriculum:subject:v1:s004",
    "Fen Bilimleri",
    "Elektrik Yükleri ve Elektrik Enerjisi",
    [
      "Elektrik"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0030",
    "LGS",
    "drkoc:curriculum:subject:v1:s005",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Bir Kahraman Doğuyor",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0031",
    "LGS",
    "drkoc:curriculum:subject:v1:s005",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar",
    [
      "Milli Uyanış"
    ],
    [
      "drkoc:curriculum:topic:v1:t0030"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0032",
    "LGS",
    "drkoc:curriculum:subject:v1:s005",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Milli Bir Destan: Ya İstiklal Ya Ölüm",
    [
      "Milli Bir Destan",
      "Kurtuluş Savaşı"
    ],
    [
      "drkoc:curriculum:topic:v1:t0031"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0033",
    "LGS",
    "drkoc:curriculum:subject:v1:s005",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Atatürkçülük ve Çağdaşlaşan Türkiye",
    [
      "Atatürkçülük",
      "İnkılaplar"
    ],
    [
      "drkoc:curriculum:topic:v1:t0032"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0034",
    "LGS",
    "drkoc:curriculum:subject:v1:s005",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Demokratikleşme Çabaları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0033"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0035",
    "LGS",
    "drkoc:curriculum:subject:v1:s005",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Atatürk Dönemi Türk Dış Politikası",
    [
      "Dış Politika"
    ],
    [
      "drkoc:curriculum:topic:v1:t0033"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0036",
    "LGS",
    "drkoc:curriculum:subject:v1:s005",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Atatürk'ün Ölümü ve Sonrası",
    [],
    [
      "drkoc:curriculum:topic:v1:t0035"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0037",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "Friendship",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0038",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "Teen Life",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0039",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "In the Kitchen",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0040",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "On the Phone",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0041",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "The Internet",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0042",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "Adventures",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0043",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "Tourism",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0044",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "Chores",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0045",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "Science",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0046",
    "LGS",
    "drkoc:curriculum:subject:v1:s006",
    "İngilizce",
    "Natural Forces",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0047",
    "LGS",
    "drkoc:curriculum:subject:v1:s007",
    "Din Kültürü ve Ahlak Bilgisi",
    "Kader İnancı",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0048",
    "LGS",
    "drkoc:curriculum:subject:v1:s007",
    "Din Kültürü ve Ahlak Bilgisi",
    "Zekat ve Sadaka",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0049",
    "LGS",
    "drkoc:curriculum:subject:v1:s007",
    "Din Kültürü ve Ahlak Bilgisi",
    "Din ve Hayat",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0050",
    "LGS",
    "drkoc:curriculum:subject:v1:s007",
    "Din Kültürü ve Ahlak Bilgisi",
    "Hz. Muhammed'in Örnekliği",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0051",
    "LGS",
    "drkoc:curriculum:subject:v1:s007",
    "Din Kültürü ve Ahlak Bilgisi",
    "Kur'an-ı Kerim ve Özellikleri",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0052",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Temel Kavramlar",
    [
      "Sayılar",
      "Temel Kavram"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0053",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Sayı Basamakları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0052"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0054",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Bölme ve Bölünebilme",
    [
      "Bölünebilme"
    ],
    [
      "drkoc:curriculum:topic:v1:t0052",
      "drkoc:curriculum:topic:v1:t0053"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0055",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "OBEB - OKEK",
    [
      "OBEB OKEK",
      "EBOB EKOK",
      "EBOB - EKOK"
    ],
    [
      "drkoc:curriculum:topic:v1:t0054"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0056",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Rasyonel Sayılar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0052",
      "drkoc:curriculum:topic:v1:t0054"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0057",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Basit Eşitsizlikler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0052",
      "drkoc:curriculum:topic:v1:t0056"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0058",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Mutlak Değer",
    [],
    [
      "drkoc:curriculum:topic:v1:t0057"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0059",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Üslü Sayılar",
    [
      "Üslü"
    ],
    [
      "drkoc:curriculum:topic:v1:t0052",
      "drkoc:curriculum:topic:v1:t0056"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0060",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Köklü Sayılar",
    [
      "Köklü"
    ],
    [
      "drkoc:curriculum:topic:v1:t0059"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0061",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Çarpanlara Ayırma",
    [
      "Özdeşlikler",
      "Cebirsel İfadeler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0059",
      "drkoc:curriculum:topic:v1:t0060"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0062",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Oran - Orantı",
    [
      "Oran Orantı"
    ],
    [
      "drkoc:curriculum:topic:v1:t0056"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0063",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Denklem Çözme",
    [
      "Denklemler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0061",
      "drkoc:curriculum:topic:v1:t0062"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0064",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Problemler",
    [
      "Problem",
      "Sayı Problemleri",
      "Yaş Problemleri",
      "Hız Problemleri"
    ],
    [
      "drkoc:curriculum:topic:v1:t0063",
      "drkoc:curriculum:topic:v1:t0062"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0065",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Kümeler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0052"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0066",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Fonksiyonlar (Temel)",
    [
      "Fonksiyonlar",
      "Fonksiyon"
    ],
    [
      "drkoc:curriculum:topic:v1:t0065",
      "drkoc:curriculum:topic:v1:t0063"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0067",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "Permütasyon - Kombinasyon - Olasılık",
    [
      "Permütasyon",
      "Kombinasyon",
      "Olasılık",
      "Permütasyon Kombinasyon"
    ],
    [
      "drkoc:curriculum:topic:v1:t0065"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0068",
    "TYT",
    "drkoc:curriculum:subject:v1:s008",
    "Matematik",
    "İstatistik ve Veri Analizi",
    [
      "İstatistik"
    ],
    [
      "drkoc:curriculum:topic:v1:t0052"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0069",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Temel Kavramlar ve Doğruda Açılar",
    [
      "Doğruda Açılar"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0070",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Üçgende Açılar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0069"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0071",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Özel Üçgenler (Dik, İkizkenar, Eşkenar)",
    [
      "Özel Üçgenler",
      "Dik Üçgen",
      "Pisagor"
    ],
    [
      "drkoc:curriculum:topic:v1:t0070",
      "drkoc:curriculum:topic:v1:t0060"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0072",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Üçgende Alan",
    [],
    [
      "drkoc:curriculum:topic:v1:t0071"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0073",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Açıortay ve Kenarortay",
    [],
    [
      "drkoc:curriculum:topic:v1:t0070"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0074",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Eşlik ve Benzerlik",
    [],
    [
      "drkoc:curriculum:topic:v1:t0072",
      "drkoc:curriculum:topic:v1:t0073"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0075",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Çokgenler",
    [
      "Dörtgenler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0074"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0076",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Çember ve Daire",
    [
      "Çember"
    ],
    [
      "drkoc:curriculum:topic:v1:t0070",
      "drkoc:curriculum:topic:v1:t0075"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0077",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Katı Cisimler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0075",
      "drkoc:curriculum:topic:v1:t0076"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0078",
    "TYT",
    "drkoc:curriculum:subject:v1:s009",
    "Geometri",
    "Analitik Geometri (Nokta - Doğru)",
    [
      "Analitik Geometri",
      "Analitik"
    ],
    [
      "drkoc:curriculum:topic:v1:t0066"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0079",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Sözcükte Anlam",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0080",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Cümlede Anlam",
    [],
    [
      "drkoc:curriculum:topic:v1:t0079"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0081",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Paragrafta Anlam ve Yapı",
    [
      "Paragraf",
      "Paragrafta Anlam"
    ],
    [
      "drkoc:curriculum:topic:v1:t0080"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0082",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Paragrafta Düşünceyi Geliştirme Yolları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0081"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0083",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Sözcük Türleri",
    [
      "İsim",
      "Sıfat",
      "Zamir",
      "Zarf",
      "Edat",
      "Bağlaç",
      "Ünlem"
    ],
    [
      "drkoc:curriculum:topic:v1:t0079"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0084",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Fiiller",
    [
      "Fiilde Yapı",
      "Fiilde Çatı",
      "Ek Fiil"
    ],
    [
      "drkoc:curriculum:topic:v1:t0083"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0085",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Ses Bilgisi",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0086",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Yapı Bilgisi",
    [
      "Sözcükte Yapı"
    ],
    [
      "drkoc:curriculum:topic:v1:t0085"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0087",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Tamlamalar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0083",
      "drkoc:curriculum:topic:v1:t0086"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0088",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Fiilimsi",
    [
      "Fiilimsiler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0086",
      "drkoc:curriculum:topic:v1:t0084"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0089",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Cümlenin Öğeleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0088"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0090",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Cümle Türleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0089"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0091",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Anlatım Bozuklukları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0089"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0092",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Yazım Kuralları",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0093",
    "TYT",
    "drkoc:curriculum:subject:v1:s010",
    "Türkçe",
    "Noktalama İşaretleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0092"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0094",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Fizik Bilimine Giriş",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0095",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Madde ve Özellikleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0094"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0096",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Basınç",
    [],
    [
      "drkoc:curriculum:topic:v1:t0095"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0097",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Sıvıların Kaldırma Kuvveti",
    [
      "Kaldırma Kuvveti"
    ],
    [
      "drkoc:curriculum:topic:v1:t0096"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0098",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Isı, Sıcaklık ve Genleşme",
    [
      "Isı ve Sıcaklık"
    ],
    [
      "drkoc:curriculum:topic:v1:t0095"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0099",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Hareket ve Kuvvet",
    [
      "Hareket",
      "Kuvvet"
    ],
    [
      "drkoc:curriculum:topic:v1:t0094"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0100",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "İş, Güç ve Enerji",
    [
      "Enerji"
    ],
    [
      "drkoc:curriculum:topic:v1:t0099"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0101",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Elektrostatik",
    [],
    [
      "drkoc:curriculum:topic:v1:t0094"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0102",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Elektrik Devreleri",
    [
      "Elektrik"
    ],
    [
      "drkoc:curriculum:topic:v1:t0101"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0103",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Manyetizma",
    [],
    [
      "drkoc:curriculum:topic:v1:t0102"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0104",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Dalgalar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0099"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0105",
    "TYT",
    "drkoc:curriculum:subject:v1:s011",
    "Fizik",
    "Optik",
    [],
    [
      "drkoc:curriculum:topic:v1:t0104"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0106",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Kimya Bilimi",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0107",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Atom ve Periyodik Sistem",
    [
      "Atom",
      "Periyodik Sistem"
    ],
    [
      "drkoc:curriculum:topic:v1:t0106"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0108",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Kimyasal Türler Arası Etkileşimler",
    [
      "Kimyasal Türler",
      "Bağlar"
    ],
    [
      "drkoc:curriculum:topic:v1:t0107"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0109",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Maddenin Halleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0108"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0110",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Doğa ve Kimya",
    [],
    [
      "drkoc:curriculum:topic:v1:t0108"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0111",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Kimyanın Temel Kanunları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0107"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0112",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Mol Kavramı",
    [
      "Mol",
      "Mol Hesapları"
    ],
    [
      "drkoc:curriculum:topic:v1:t0111"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0113",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Karışımlar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0112",
      "drkoc:curriculum:topic:v1:t0109"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0114",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Asit, Baz ve Tuz",
    [
      "Asit Baz"
    ],
    [
      "drkoc:curriculum:topic:v1:t0113"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0115",
    "TYT",
    "drkoc:curriculum:subject:v1:s012",
    "Kimya",
    "Kimya Her Yerde",
    [],
    [
      "drkoc:curriculum:topic:v1:t0114"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0116",
    "TYT",
    "drkoc:curriculum:subject:v1:s013",
    "Biyoloji",
    "Canlıların Ortak Özellikleri",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0117",
    "TYT",
    "drkoc:curriculum:subject:v1:s013",
    "Biyoloji",
    "Canlıların Temel Bileşenleri",
    [
      "Temel Bileşenler",
      "Enzimler",
      "Organik Bileşikler",
      "ATP"
    ],
    [
      "drkoc:curriculum:topic:v1:t0116"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0118",
    "TYT",
    "drkoc:curriculum:subject:v1:s013",
    "Biyoloji",
    "Hücre",
    [
      "Organeller",
      "Hücre Zarı",
      "Madde Geçişleri",
      "Kloroplast"
    ],
    [
      "drkoc:curriculum:topic:v1:t0117"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0119",
    "TYT",
    "drkoc:curriculum:subject:v1:s013",
    "Biyoloji",
    "Canlıların Sınıflandırılması",
    [
      "Sınıflandırma",
      "Alemler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0118"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0120",
    "TYT",
    "drkoc:curriculum:subject:v1:s013",
    "Biyoloji",
    "Hücre Bölünmeleri",
    [
      "Mitoz",
      "Mayoz"
    ],
    [
      "drkoc:curriculum:topic:v1:t0118"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0121",
    "TYT",
    "drkoc:curriculum:subject:v1:s013",
    "Biyoloji",
    "Kalıtım",
    [
      "Genetik"
    ],
    [
      "drkoc:curriculum:topic:v1:t0120"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0122",
    "TYT",
    "drkoc:curriculum:subject:v1:s013",
    "Biyoloji",
    "Ekosistem Ekolojisi",
    [
      "Ekoloji"
    ],
    [
      "drkoc:curriculum:topic:v1:t0119"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0123",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "Tarih ve Zaman",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0124",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "İnsanlığın İlk Dönemleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0123"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0125",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "Ortaçağda Dünya",
    [],
    [
      "drkoc:curriculum:topic:v1:t0124"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0126",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "İlk ve Orta Çağlarda Türk Dünyası",
    [
      "İlk Türk Devletleri"
    ],
    [
      "drkoc:curriculum:topic:v1:t0124"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0127",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "İslam Medeniyeti ve Türkler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0126"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0128",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "Türk-İslam Devletleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0127"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0129",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "Beylikten Devlete Osmanlı",
    [
      "Osmanlı Kuruluş"
    ],
    [
      "drkoc:curriculum:topic:v1:t0128"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0130",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "Dünya Gücü Osmanlı",
    [
      "Osmanlı Yükselme"
    ],
    [
      "drkoc:curriculum:topic:v1:t0129"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0131",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "Arayış Yılları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0130"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0132",
    "TYT",
    "drkoc:curriculum:subject:v1:s014",
    "Tarih",
    "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0131"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0133",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Doğa ve İnsan",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0134",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Dünya'nın Şekli ve Hareketleri",
    [
      "Dünyanın Şekli ve Hareketleri"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0135",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Coğrafi Konum",
    [],
    [
      "drkoc:curriculum:topic:v1:t0134"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0136",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Harita Bilgisi",
    [
      "Haritalar"
    ],
    [
      "drkoc:curriculum:topic:v1:t0135"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0137",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Atmosfer ve İklim",
    [
      "İklim"
    ],
    [
      "drkoc:curriculum:topic:v1:t0135"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0138",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Yerin Şekillenmesi (İç ve Dış Kuvvetler)",
    [
      "İç Kuvvetler",
      "Dış Kuvvetler",
      "Yer Şekilleri"
    ],
    [
      "drkoc:curriculum:topic:v1:t0136"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0139",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Su, Toprak ve Bitkiler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0137",
      "drkoc:curriculum:topic:v1:t0138"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0140",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Nüfus",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0141",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Yerleşme",
    [],
    [
      "drkoc:curriculum:topic:v1:t0140"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0142",
    "TYT",
    "drkoc:curriculum:subject:v1:s015",
    "Coğrafya",
    "Ekonomik Faaliyetler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0141"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0143",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Felsefenin Konusu",
    [
      "Felsefeye Giriş"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0144",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Felsefi Düşüncenin Özellikleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0143"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0145",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Bilgi Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0143"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0146",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Varlık Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0145"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0147",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Ahlak Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0143"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0148",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Sanat Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0143"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0149",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Din Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0143"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0150",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Siyaset Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0143"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0151",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Bilim Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0145"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0152",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Felsefi Akımlar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0145",
      "drkoc:curriculum:topic:v1:t0146",
      "drkoc:curriculum:topic:v1:t0147"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0153",
    "TYT",
    "drkoc:curriculum:subject:v1:s016",
    "Felsefe",
    "Temel Filozof-Görüş İlişkileri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0152"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0154",
    "TYT",
    "drkoc:curriculum:subject:v1:s017",
    "Din Kültürü ve Ahlak Bilgisi",
    "Bilgi ve İnanç",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0155",
    "TYT",
    "drkoc:curriculum:subject:v1:s017",
    "Din Kültürü ve Ahlak Bilgisi",
    "İslam ve İbadet",
    [],
    [
      "drkoc:curriculum:topic:v1:t0154"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0156",
    "TYT",
    "drkoc:curriculum:subject:v1:s017",
    "Din Kültürü ve Ahlak Bilgisi",
    "Gençlik ve Değerler",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0157",
    "TYT",
    "drkoc:curriculum:subject:v1:s017",
    "Din Kültürü ve Ahlak Bilgisi",
    "Din ve Hayat",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0158",
    "TYT",
    "drkoc:curriculum:subject:v1:s017",
    "Din Kültürü ve Ahlak Bilgisi",
    "Ahlaki Tutum ve Davranışlar",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0159",
    "TYT",
    "drkoc:curriculum:subject:v1:s017",
    "Din Kültürü ve Ahlak Bilgisi",
    "Din, Kültür ve Sanat",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0160",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Fonksiyonlar (İleri)",
    [
      "Fonksiyonlar",
      "Fonksiyon"
    ],
    [
      "drkoc:curriculum:topic:v1:t0066"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0161",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Polinomlar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0061"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0162",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "İkinci Dereceden Denklemler",
    [
      "2. Dereceden Denklemler",
      "İkinci Derece Denklemler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0161"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0163",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Karmaşık Sayılar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0162"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0164",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Eşitsizlikler (İleri)",
    [
      "Eşitsizlikler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0162"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0165",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Parabol",
    [],
    [
      "drkoc:curriculum:topic:v1:t0162",
      "drkoc:curriculum:topic:v1:t0160"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0166",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Trigonometri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0160"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0167",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Logaritma",
    [],
    [
      "drkoc:curriculum:topic:v1:t0160",
      "drkoc:curriculum:topic:v1:t0059"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0168",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Diziler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0160"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0169",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Limit ve Süreklilik",
    [
      "Limit"
    ],
    [
      "drkoc:curriculum:topic:v1:t0160",
      "drkoc:curriculum:topic:v1:t0166",
      "drkoc:curriculum:topic:v1:t0167"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0170",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "Türev",
    [],
    [
      "drkoc:curriculum:topic:v1:t0169"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0171",
    "AYT",
    "drkoc:curriculum:subject:v1:s018",
    "Matematik",
    "İntegral",
    [],
    [
      "drkoc:curriculum:topic:v1:t0170"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0172",
    "AYT",
    "drkoc:curriculum:subject:v1:s019",
    "Geometri",
    "Üçgende Trigonometri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0072",
      "drkoc:curriculum:topic:v1:t0166"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0173",
    "AYT",
    "drkoc:curriculum:subject:v1:s019",
    "Geometri",
    "Çemberde Açı ve Uzunluk",
    [
      "Çemberde Açı"
    ],
    [
      "drkoc:curriculum:topic:v1:t0076"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0174",
    "AYT",
    "drkoc:curriculum:subject:v1:s019",
    "Geometri",
    "Analitik Geometri (Doğru - Çember)",
    [
      "Analitik Geometri"
    ],
    [
      "drkoc:curriculum:topic:v1:t0078",
      "drkoc:curriculum:topic:v1:t0173"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0175",
    "AYT",
    "drkoc:curriculum:subject:v1:s019",
    "Geometri",
    "Vektörler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0174"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0176",
    "AYT",
    "drkoc:curriculum:subject:v1:s019",
    "Geometri",
    "Uzay Geometri (Katı Cisimler İleri)",
    [
      "Uzay Geometri",
      "Katı Cisimler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0077"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0177",
    "AYT",
    "drkoc:curriculum:subject:v1:s019",
    "Geometri",
    "Dönüşümler",
    [
      "Dönüşüm Geometrisi"
    ],
    [
      "drkoc:curriculum:topic:v1:t0174"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0178",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Anlam Bilgisi",
    [
      "Sözcükte Anlam",
      "Cümlede Anlam"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0179",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Söz Sanatları",
    [
      "Edebi Sanatlar"
    ],
    [
      "drkoc:curriculum:topic:v1:t0178"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0180",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Şiir Bilgisi",
    [
      "Nazım Biçimleri"
    ],
    [
      "drkoc:curriculum:topic:v1:t0179"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0181",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Edebi Akımlar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0180"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0182",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "İslamiyet Öncesi Türk Edebiyatı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0180"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0183",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Halk Edebiyatı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0182"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0184",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Divan Edebiyatı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0182"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0185",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Tanzimat Edebiyatı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0184",
      "drkoc:curriculum:topic:v1:t0181"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0186",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Servet-i Fünun ve Fecr-i Ati",
    [
      "Servet-i Fünun"
    ],
    [
      "drkoc:curriculum:topic:v1:t0185"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0187",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Milli Edebiyat",
    [],
    [
      "drkoc:curriculum:topic:v1:t0186"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0188",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Cumhuriyet Dönemi Türk Edebiyatı",
    [
      "Cumhuriyet Dönemi"
    ],
    [
      "drkoc:curriculum:topic:v1:t0187"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0189",
    "AYT",
    "drkoc:curriculum:subject:v1:s020",
    "Edebiyat",
    "Dünya Edebiyatı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0181"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0190",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Vektörler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0099"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0191",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Bağıl Hareket",
    [],
    [
      "drkoc:curriculum:topic:v1:t0190"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0192",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Bir Boyutta Sabit İvmeli Hareket",
    [
      "Sabit İvmeli Hareket",
      "Kinematik"
    ],
    [
      "drkoc:curriculum:topic:v1:t0190"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0193",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Newton'un Hareket Yasaları",
    [
      "Newton Yasaları",
      "Dinamik"
    ],
    [
      "drkoc:curriculum:topic:v1:t0192"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0194",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Atışlar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0193",
      "drkoc:curriculum:topic:v1:t0191"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0195",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "İş, Güç ve Enerji",
    [
      "Enerji"
    ],
    [
      "drkoc:curriculum:topic:v1:t0193"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0196",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Çembersel Hareket",
    [],
    [
      "drkoc:curriculum:topic:v1:t0193"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0197",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Kütle Çekim ve Kepler Yasaları",
    [
      "Kepler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0196"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0198",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Basit Harmonik Hareket",
    [],
    [
      "drkoc:curriculum:topic:v1:t0196",
      "drkoc:curriculum:topic:v1:t0195"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0199",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Dalga Mekaniği",
    [],
    [
      "drkoc:curriculum:topic:v1:t0104",
      "drkoc:curriculum:topic:v1:t0198"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0200",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Elektrik Alan ve Potansiyel",
    [
      "Elektrik Alan"
    ],
    [
      "drkoc:curriculum:topic:v1:t0101",
      "drkoc:curriculum:topic:v1:t0190"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0201",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Manyetik Alan",
    [],
    [
      "drkoc:curriculum:topic:v1:t0200",
      "drkoc:curriculum:topic:v1:t0103"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0202",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "İndüksiyon",
    [],
    [
      "drkoc:curriculum:topic:v1:t0201"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0203",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Alternatif Akım",
    [],
    [
      "drkoc:curriculum:topic:v1:t0202"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0204",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Atom Fiziğine Giriş ve Radyoaktivite",
    [
      "Radyoaktivite",
      "Atom Fiziği"
    ],
    [
      "drkoc:curriculum:topic:v1:t0101"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0205",
    "AYT",
    "drkoc:curriculum:subject:v1:s021",
    "Fizik",
    "Modern Fizik",
    [],
    [
      "drkoc:curriculum:topic:v1:t0204"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0206",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Kimya Bilimi",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0207",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Atom ve Periyodik Sistem",
    [
      "Atom",
      "Periyodik Sistem"
    ],
    [
      "drkoc:curriculum:topic:v1:t0107"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0208",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Gazlar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0112"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0209",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Sıvı Çözeltiler ve Çözünürlük",
    [
      "Çözeltiler",
      "Çözünürlük"
    ],
    [
      "drkoc:curriculum:topic:v1:t0113",
      "drkoc:curriculum:topic:v1:t0112"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0210",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Kimyasal Tepkimelerde Enerji",
    [
      "Termokimya"
    ],
    [
      "drkoc:curriculum:topic:v1:t0112"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0211",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Kimyasal Tepkimelerde Hız",
    [
      "Tepkime Hızı"
    ],
    [
      "drkoc:curriculum:topic:v1:t0210"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0212",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Kimyasal Tepkimelerde Denge",
    [
      "Denge"
    ],
    [
      "drkoc:curriculum:topic:v1:t0211"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0213",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Asit-Baz Dengesi",
    [
      "Asit Baz Dengesi"
    ],
    [
      "drkoc:curriculum:topic:v1:t0212",
      "drkoc:curriculum:topic:v1:t0114"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0214",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Çözünürlük Dengesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0213"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0215",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Elektrokimya",
    [],
    [
      "drkoc:curriculum:topic:v1:t0210"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0216",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Karbon Kimyasına Giriş",
    [
      "Karbon Kimyası"
    ],
    [
      "drkoc:curriculum:topic:v1:t0108"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0217",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Organik Kimya",
    [],
    [
      "drkoc:curriculum:topic:v1:t0216"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0218",
    "AYT",
    "drkoc:curriculum:subject:v1:s022",
    "Kimya",
    "Enerji Kaynakları ve Bilimsel Gelişmeler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0217"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0219",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Sinir Sistemi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0118"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0220",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Endokrin Sistem ve Hormonlar",
    [
      "Hormonlar"
    ],
    [
      "drkoc:curriculum:topic:v1:t0219"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0221",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Duyu Organları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0219"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0222",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Destek ve Hareket Sistemi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0118"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0223",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Sindirim Sistemi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0117"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0224",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Dolaşım ve Bağışıklık Sistemi",
    [
      "Dolaşım Sistemi",
      "Bağışıklık"
    ],
    [
      "drkoc:curriculum:topic:v1:t0223"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0225",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Solunum Sistemi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0224"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0226",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Üriner Sistem",
    [
      "Boşaltım Sistemi"
    ],
    [
      "drkoc:curriculum:topic:v1:t0224"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0227",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Üreme Sistemi ve Embriyonik Gelişim",
    [
      "Üreme Sistemi"
    ],
    [
      "drkoc:curriculum:topic:v1:t0120",
      "drkoc:curriculum:topic:v1:t0220"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0228",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Genden Proteine",
    [
      "Protein Sentezi",
      "DNA"
    ],
    [
      "drkoc:curriculum:topic:v1:t0121",
      "drkoc:curriculum:topic:v1:t0117"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0229",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Komünite ve Popülasyon Ekolojisi",
    [
      "Popülasyon Ekolojisi",
      "Komünite"
    ],
    [
      "drkoc:curriculum:topic:v1:t0122"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0230",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)",
    [
      "Fotosentez",
      "Kemosentez",
      "Canlılarda Enerji Dönüşümleri",
      "Solunum"
    ],
    [
      "drkoc:curriculum:topic:v1:t0118",
      "drkoc:curriculum:topic:v1:t0117"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0231",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Bitki Biyolojisi",
    [
      "Bitkiler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0230"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0232",
    "AYT",
    "drkoc:curriculum:subject:v1:s023",
    "Biyoloji",
    "Canlılar ve Çevre",
    [],
    [
      "drkoc:curriculum:topic:v1:t0229"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0233",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "Türk-İslam Devletlerinde Toplum ve Ekonomi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0128"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0234",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "Türkiye Tarihi (11-13. Yüzyıl)",
    [],
    [
      "drkoc:curriculum:topic:v1:t0233"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0235",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "Beylikten Devlete Osmanlı Medeniyeti",
    [],
    [
      "drkoc:curriculum:topic:v1:t0234"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0236",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "Dünya Gücü Osmanlı Devleti",
    [],
    [
      "drkoc:curriculum:topic:v1:t0235"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0237",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti",
    [],
    [
      "drkoc:curriculum:topic:v1:t0236"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0238",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "Uluslararası İlişkilerde Denge Stratejisi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0237"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0239",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya",
    [],
    [
      "drkoc:curriculum:topic:v1:t0238"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0240",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "Milli Mücadele",
    [
      "Kurtuluş Savaşı"
    ],
    [
      "drkoc:curriculum:topic:v1:t0239"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0241",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "Atatürkçülük ve Türk İnkılabı",
    [
      "İnkılaplar",
      "Atatürkçülük"
    ],
    [
      "drkoc:curriculum:topic:v1:t0240"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0242",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "İki Savaş Arası Dönemde Türkiye ve Dünya",
    [],
    [
      "drkoc:curriculum:topic:v1:t0241"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0243",
    "AYT",
    "drkoc:curriculum:subject:v1:s024",
    "Tarih",
    "II. Dünya Savaşı Sonrası Dünya ve Türkiye",
    [
      "Soğuk Savaş"
    ],
    [
      "drkoc:curriculum:topic:v1:t0242"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0244",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Ekosistem",
    [],
    [
      "drkoc:curriculum:topic:v1:t0139"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0245",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Biyoçeşitlilik",
    [],
    [
      "drkoc:curriculum:topic:v1:t0244"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0246",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Nüfus Politikaları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0140"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0247",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Şehirler ve Etki Alanı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0141"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0248",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Türkiye Ekonomisi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0142"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0249",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Türkiye'de Tarım, Sanayi ve Ticaret",
    [
      "Türkiye Tarım",
      "Sanayi"
    ],
    [
      "drkoc:curriculum:topic:v1:t0248"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0250",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Bölgeler ve Ülkeler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0249"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0251",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Küresel Ortam: Bölgeler ve Ülkeler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0250"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0252",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Doğal Afetler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0138"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0253",
    "AYT",
    "drkoc:curriculum:subject:v1:s025",
    "Coğrafya",
    "Çevre ve Toplum",
    [],
    [
      "drkoc:curriculum:topic:v1:t0244"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0254",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Felsefeyle Tanışma",
    [
      "Felsefeye Giriş",
      "Felsefenin Konusu"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0255",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Bilgi Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0254"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0256",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Bilim Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0255"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0257",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Ahlak Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0254"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0258",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Din, Sanat ve Siyaset Felsefesi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0257"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0259",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Psikoloji Bilimini Tanıma",
    [
      "Psikolojiye Giriş"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0260",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Psikolojinin Temel Süreçleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0259"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0261",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Öğrenme, Bellek, Düşünme",
    [],
    [
      "drkoc:curriculum:topic:v1:t0260"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0262",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Ruh Sağlığının Temelleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0261"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0263",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Sosyolojiye Giriş",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0264",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Birey ve Toplum",
    [],
    [
      "drkoc:curriculum:topic:v1:t0263"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0265",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Toplumsal Yapı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0264"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0266",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Toplumsal Değişme ve Gelişme",
    [],
    [
      "drkoc:curriculum:topic:v1:t0265"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0267",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Mantığa Giriş",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0268",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Klasik Mantık",
    [],
    [
      "drkoc:curriculum:topic:v1:t0267"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0269",
    "AYT",
    "drkoc:curriculum:subject:v1:s026",
    "Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)",
    "Mantık ve Dil",
    [],
    [
      "drkoc:curriculum:topic:v1:t0267"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0270",
    "AYT",
    "drkoc:curriculum:subject:v1:s027",
    "Din Kültürü ve Ahlak Bilgisi",
    "İnanç",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0271",
    "AYT",
    "drkoc:curriculum:subject:v1:s027",
    "Din Kültürü ve Ahlak Bilgisi",
    "İbadet",
    [],
    [
      "drkoc:curriculum:topic:v1:t0270"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0272",
    "AYT",
    "drkoc:curriculum:subject:v1:s027",
    "Din Kültürü ve Ahlak Bilgisi",
    "Gençlik, Din ve Değerler",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0273",
    "AYT",
    "drkoc:curriculum:subject:v1:s027",
    "Din Kültürü ve Ahlak Bilgisi",
    "İslam Düşüncesinde Yorumlar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0270"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0274",
    "AYT",
    "drkoc:curriculum:subject:v1:s027",
    "Din Kültürü ve Ahlak Bilgisi",
    "Hint ve Çin Dinleri",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0275",
    "AYT",
    "drkoc:curriculum:subject:v1:s027",
    "Din Kültürü ve Ahlak Bilgisi",
    "Yahudilik ve Hristiyanlık",
    [],
    [
      "drkoc:curriculum:topic:v1:t0274"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0276",
    "AYT",
    "drkoc:curriculum:subject:v1:s027",
    "Din Kültürü ve Ahlak Bilgisi",
    "Güncel Dini Meseleler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0273"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0277",
    "AYT",
    "drkoc:curriculum:subject:v1:s027",
    "Din Kültürü ve Ahlak Bilgisi",
    "Hukuki ve Ahlaki Boyutuyla Aile",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0278",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Temel Kavramlar",
    [
      "Sayılar"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0279",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Sayı Basamakları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0278"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0280",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Bölme ve Bölünebilme",
    [
      "Bölünebilme"
    ],
    [
      "drkoc:curriculum:topic:v1:t0278",
      "drkoc:curriculum:topic:v1:t0279"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0281",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "OBEB - OKEK",
    [
      "OBEB OKEK",
      "EBOB EKOK"
    ],
    [
      "drkoc:curriculum:topic:v1:t0280"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0282",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Rasyonel Sayılar",
    [],
    [
      "drkoc:curriculum:topic:v1:t0278",
      "drkoc:curriculum:topic:v1:t0280"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0283",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Basit Eşitsizlikler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0282"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0284",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Mutlak Değer",
    [],
    [
      "drkoc:curriculum:topic:v1:t0283"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0285",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Üslü - Köklü Sayılar",
    [
      "Üslü Sayılar",
      "Köklü Sayılar",
      "Üslü Köklü Sayılar"
    ],
    [
      "drkoc:curriculum:topic:v1:t0282"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0286",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Çarpanlara Ayırma",
    [],
    [
      "drkoc:curriculum:topic:v1:t0285"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0287",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Oran - Orantı",
    [
      "Oran Orantı"
    ],
    [
      "drkoc:curriculum:topic:v1:t0282"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0288",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Problemler",
    [
      "Problem"
    ],
    [
      "drkoc:curriculum:topic:v1:t0286",
      "drkoc:curriculum:topic:v1:t0287"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0289",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Kümeler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0278"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0290",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "Permütasyon - Kombinasyon - Olasılık",
    [
      "Permütasyon",
      "Kombinasyon",
      "Olasılık"
    ],
    [
      "drkoc:curriculum:topic:v1:t0289"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0291",
    "KPSS",
    "drkoc:curriculum:subject:v1:s028",
    "Matematik",
    "İstatistik ve Grafik Yorumlama",
    [
      "İstatistik",
      "Grafik Yorumlama",
      "Tablo Grafik"
    ],
    [
      "drkoc:curriculum:topic:v1:t0278"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0292",
    "KPSS",
    "drkoc:curriculum:subject:v1:s029",
    "Geometri",
    "Temel Kavramlar",
    [
      "Doğruda Açılar"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0293",
    "KPSS",
    "drkoc:curriculum:subject:v1:s029",
    "Geometri",
    "Üçgenler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0292",
      "drkoc:curriculum:topic:v1:t0285"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0294",
    "KPSS",
    "drkoc:curriculum:subject:v1:s029",
    "Geometri",
    "Çokgenler",
    [
      "Dörtgenler"
    ],
    [
      "drkoc:curriculum:topic:v1:t0293"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0295",
    "KPSS",
    "drkoc:curriculum:subject:v1:s029",
    "Geometri",
    "Çember ve Daire",
    [
      "Çember"
    ],
    [
      "drkoc:curriculum:topic:v1:t0293"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0296",
    "KPSS",
    "drkoc:curriculum:subject:v1:s029",
    "Geometri",
    "Analitik Geometri (Temel)",
    [
      "Analitik Geometri"
    ],
    [
      "drkoc:curriculum:topic:v1:t0293"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0297",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Sözcükte Anlam",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0298",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Cümlede Anlam",
    [],
    [
      "drkoc:curriculum:topic:v1:t0297"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0299",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Paragraf",
    [
      "Paragrafta Anlam"
    ],
    [
      "drkoc:curriculum:topic:v1:t0298"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0300",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Ses Bilgisi",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0301",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Yapı Bilgisi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0300"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0302",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Cümlenin Öğeleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0301"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0303",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Anlatım Bozuklukları",
    [],
    [
      "drkoc:curriculum:topic:v1:t0302"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0304",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Yazım Kuralları",
    [],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0305",
    "KPSS",
    "drkoc:curriculum:subject:v1:s030",
    "Türkçe",
    "Noktalama İşaretleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0304"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0306",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "İlk ve Orta Çağlarda Türk Tarihi",
    [
      "İlk Türk Devletleri"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0307",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "İslamiyet ve Türkler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0306"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0308",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "Türkiye Selçuklu Devleti",
    [],
    [
      "drkoc:curriculum:topic:v1:t0307"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0309",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "Osmanlı Kuruluş ve Yükseliş Dönemi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0308"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0310",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "Osmanlı Duraklama ve Gerileme Dönemi",
    [],
    [
      "drkoc:curriculum:topic:v1:t0309"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0311",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "XX. Yüzyılda Osmanlı Devleti",
    [],
    [
      "drkoc:curriculum:topic:v1:t0310"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0312",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "Milli Mücadele Dönemi",
    [
      "Kurtuluş Savaşı",
      "Milli Mücadele"
    ],
    [
      "drkoc:curriculum:topic:v1:t0311"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0313",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "Atatürk İlke ve İnkılapları",
    [
      "İnkılaplar",
      "Atatürk İlkeleri"
    ],
    [
      "drkoc:curriculum:topic:v1:t0312"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0314",
    "KPSS",
    "drkoc:curriculum:subject:v1:s031",
    "Tarih",
    "Atatürk Sonrası Türkiye ve Dünya",
    [],
    [
      "drkoc:curriculum:topic:v1:t0313"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0315",
    "KPSS",
    "drkoc:curriculum:subject:v1:s032",
    "Coğrafya",
    "Türkiye'nin Yer Şekilleri",
    [
      "Yer Şekilleri"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0316",
    "KPSS",
    "drkoc:curriculum:subject:v1:s032",
    "Coğrafya",
    "İklim ve Bitki Örtüsü",
    [
      "İklim"
    ],
    [
      "drkoc:curriculum:topic:v1:t0315"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0317",
    "KPSS",
    "drkoc:curriculum:subject:v1:s032",
    "Coğrafya",
    "Nüfus ve Yerleşme",
    [],
    [
      "drkoc:curriculum:topic:v1:t0316"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0318",
    "KPSS",
    "drkoc:curriculum:subject:v1:s032",
    "Coğrafya",
    "Tarım, Hayvancılık ve Ormancılık",
    [
      "Tarım"
    ],
    [
      "drkoc:curriculum:topic:v1:t0316"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0319",
    "KPSS",
    "drkoc:curriculum:subject:v1:s032",
    "Coğrafya",
    "Sanayi, Ulaşım ve Ticaret",
    [
      "Sanayi"
    ],
    [
      "drkoc:curriculum:topic:v1:t0318"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0320",
    "KPSS",
    "drkoc:curriculum:subject:v1:s032",
    "Coğrafya",
    "Bölgeler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0319"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0321",
    "KPSS",
    "drkoc:curriculum:subject:v1:s032",
    "Coğrafya",
    "Türkiye'nin Jeopolitik Konumu",
    [
      "Jeopolitik"
    ],
    [
      "drkoc:curriculum:topic:v1:t0320"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0322",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "Hukukun Temel Kavramları",
    [
      "Hukuk"
    ],
    []
  ],
  [
    "drkoc:curriculum:topic:v1:t0323",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "Devlet Şekilleri ve Yönetim Biçimleri",
    [],
    [
      "drkoc:curriculum:topic:v1:t0322"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0324",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "Anayasa Hukukuna Giriş ve Türk Anayasa Tarihi",
    [
      "Anayasa Tarihi"
    ],
    [
      "drkoc:curriculum:topic:v1:t0323"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0325",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "Temel Hak ve Ödevler",
    [],
    [
      "drkoc:curriculum:topic:v1:t0324"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0326",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "Yasama",
    [],
    [
      "drkoc:curriculum:topic:v1:t0325"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0327",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)",
    [
      "Yürütme"
    ],
    [
      "drkoc:curriculum:topic:v1:t0326"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0328",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "Yargı",
    [],
    [
      "drkoc:curriculum:topic:v1:t0327"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0329",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "İdare Hukukuna Giriş ve Türk İdari Teşkilatı",
    [
      "İdare Hukuku"
    ],
    [
      "drkoc:curriculum:topic:v1:t0328"
    ]
  ],
  [
    "drkoc:curriculum:topic:v1:t0330",
    "KPSS",
    "drkoc:curriculum:subject:v1:s033",
    "Vatandaşlık",
    "Uluslararası Kuruluşlar",
    [],
    []
  ]
])
