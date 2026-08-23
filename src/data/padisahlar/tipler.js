/**
 * OSMANLI PADİŞAHLARI GEÇİŞ GÖSTERİSİ — VERİ SÖZLEŞMESİ
 * ==================================================================
 *
 * Bu dosya modülün TEK veri sözleşmesidir. Arayüz hiçbir padişahı
 * tanımaz; yalnızca burada tarif edilen kaydı okur. 36 padişahın
 * tamamı, tek satır arayüz kodu yazılmadan, yalnızca bu şekle uyan
 * birer dosya eklenerek sisteme girer.
 *
 * ALAN ADLARI NEDEN İNGİLİZCE?
 * Şema, ürün sahibinin yazdığı `interface Sultan` taslağıyla birebir
 * aynı tutuldu; ileride içerik girecek herkesin elindeki sözleşme bu.
 * Arayüzde görünen HER metin ve bütün bileşen/dosya adları Türkçedir.
 *
 * YENİ PADİŞAH EKLEME
 *   1. `src/data/padisahlar/<slug>.js` dosyasını bu şemaya göre yaz.
 *   2. `src/data/padisahlar/index.js` içindeki listeye ekle.
 *   3. Dönem haritası gerekiyorsa `donemHaritalari.js` içine alanını yaz.
 *   4. `node scripts/padisah-veri-dogrula.mjs` ile doğrula.
 */

/**
 * @typedef {Object} Kaynak
 * @property {string} label  Kaynağın kısa adı (ör. "MEB Tarih 10")
 * @property {string} [note] Neden bu kaynağa dayanıldığı
 */

/**
 * Tarihsel belirsizlik birinci sınıf vatandaştır.
 * `value` ekranda görünen değerdir; `disputed` doğruysa arayüz yanına
 * "kaynaklara göre değişir" işaretini kendisi koyar.
 * @typedef {Object} TarihDegeri
 * @property {number} year        Sıralama ve zaman çizelgesi için sayısal yıl
 * @property {string} value       Ekranda görünen metin (ör. "1324/1326")
 * @property {boolean} [disputed] Kaynaklar ayrışıyor mu
 * @property {string} [note]      Ayrışmanın kısa açıklaması
 */

/**
 * @typedef {'normal'|'major'|'transition'} OlayTuru
 * normal      → dönemin akışındaki olay
 * major       → kendi sahnesini hak eden dönüm noktası (1453, Çaldıran…)
 * transition  → iki padişah/dönem arasındaki kırılma (1402 → Fetret)
 */

/**
 * @typedef {Object} Olay
 * @property {string} id
 * @property {string} title
 * @property {TarihDegeri} date
 * @property {OlayTuru} [eventType]      Varsayılan: 'normal'
 * @property {string} summary            Bir cümlelik özet
 * @property {string} [detail]           Açıldığında görünen anlatım
 * @property {string[]} [sides]          Taraflar
 * @property {string} [cause]            Nedeni
 * @property {string} [result]           Sonucu
 * @property {string} [significance]     Osmanlı tarihi açısından önemi
 * @property {string} [osym]             ÖSYM açısından ayırt edici bilgi
 * @property {string[]} [figures]        İlgili kişi kimlikleri
 * @property {AtlasBaglantisi} [atlas]   "Haritada İncele" hedefi
 * @property {string} [mapFocus]         Dönem haritasında vurgulanacak şehir kimliği
 */

/**
 * Savaş, fetih ve antlaşma aynı `Olay` şeklini paylaşır; yalnızca
 * hangi sekmede toplandıkları farklıdır. Böylece detay sahnesi tek
 * bileşendir ve yeni tür eklemek yeni bileşen gerektirmez.
 * @typedef {Olay & { articles?: string[], parties?: string[] }} Antlasma
 * `articles` → antlaşmanın önemli maddeleri
 */

/**
 * @typedef {Object} Fetih
 * @property {string} id
 * @property {string} title
 * @property {TarihDegeri} date
 * @property {string} [from]       Kimden alındığı
 * @property {string} summary
 * @property {string} [effect]     Sonraki gelişmelere etkisi
 * @property {string} [osym]
 * @property {string} [mapFocus]
 */

/**
 * @typedef {Object} Yenilik
 * @property {string} id
 * @property {string} title
 * @property {TarihDegeri} [date]
 * @property {'kurum'|'ordu'|'hukuk'|'maliye'|'yonetim'|'ilim'} field
 * @property {string} summary
 * @property {string} [why]        Hangi ihtiyaca cevap verdi
 * @property {string} [osym]
 */

/**
 * @typedef {Object} Kisi
 * @property {string} id
 * @property {string} name
 * @property {string} role          "Vezir", "Bizans İmparatoru"…
 * @property {'osmanli'|'rakip'|'ilim'|'muttefik'} side
 * @property {string} summary       Olay örgüsündeki yeri — biyografi değil
 */

/**
 * Nitel dönem nitelikleri. Uydurma puan YOKTUR.
 * `level` yalnızca üç kademedir ve her kademe `evidence` ile
 * gerekçelendirilir; gerekçesi olmayan nitelik ekrana çıkmaz.
 * @typedef {Object} Nitelik
 * @property {'askeri'|'devletlesme'|'diplomasi'|'hukuk'|'ilim'|'denizcilik'|'ekonomi'} field
 * @property {'baslangic'|'belirgin'|'belirleyici'} level
 * @property {string} label      Öğrenciye görünen ad
 * @property {string} evidence   Bu değerlendirmenin dayandığı somut gelişme
 */

/**
 * Dönem haritası durumu — şematiktir, ölçekli siyasi sınır iddiası taşımaz.
 * @typedef {Object} HaritaDurumu
 * @property {string} id             `donemHaritalari.js` içindeki anahtar
 * @property {string} caption        Haritanın altındaki tek cümlelik okuma
 * @property {string[]} [highlight]  Öne çıkarılacak şehir kimlikleri
 */

/**
 * Atlas entegrasyon arayüzü. Bugün atlas yalnızca yıla gidebiliyor;
 * `eventId`/`focus` atlas geliştikçe kullanılacak, bugün sessizce
 * yok sayılır. Bozuk bağlantı üretilmez (bkz. src/lib/padisahAtlas.js).
 * @typedef {Object} AtlasBaglantisi
 * @property {number} year
 * @property {string} [eventId]
 * @property {string} [focus]
 * @property {string} [label]
 */

/**
 * Seslendirme metni ekrandaki kısa bilgiden AYRIDIR. Ekran metni
 * okunmak, bu metin duyulmak için yazılır.
 * @typedef {Object} AnlatimBolumu
 * @property {string} id
 * @property {'intro'|'reign'|'event'|'transition'} kind
 * @property {string} [targetId]      Hangi sahne/olay ile eşleşiyor
 * @property {string} text            Seslendirilecek metin
 * @property {number} [seconds]       Ses gelene kadar kullanılan tahmini süre
 */

/**
 * @typedef {Object} Gecis
 * @property {'devir'|'kesinti'|'bolunme'|'birlesme'|'fetih'} transitionType
 * @property {string} year            Ekranda görünen yıl metni
 * @property {string} headline        "Taht Orhan Gazi'ye Geçiyor"
 * @property {string} [body]          Geçişin tarihsel açıklaması
 * @property {string} [specialSequence] Özel sahne kimliği (fetret, 1453…)
 */

/**
 * @typedef {Object} Padisah
 * @property {string} id
 * @property {number} order              Kaçıncı padişah
 * @property {string} name
 * @property {string} [epithet]
 * @property {TarihDegeri} reignStart
 * @property {TarihDegeri} reignEnd
 * @property {string} [birth]
 * @property {string} [death]
 * @property {string} [father]
 * @property {string} [mother]
 * @property {string} [predecessor]
 * @property {string} [successor]
 * @property {string} dynastyPeriod      "Kuruluş Dönemi" gibi
 * @property {string} openingHeadline    Açılış sahnesindeki başlık
 * @property {string} summary
 * @property {string[]} capitals
 * @property {Olay[]} keyEvents
 * @property {Olay[]} battles
 * @property {Fetih[]} conquests
 * @property {Antlasma[]} [treaties]
 * @property {Yenilik[]} [reforms]
 * @property {Kisi[]} [importantFigures]
 * @property {Nitelik[]} traits
 * @property {string[]} osymHighlights
 * @property {HaritaDurumu} mapState
 * @property {Gecis} [transitionOut]     Kendinden sonrakine geçiş sahnesi
 * @property {AnlatimBolumu[]} narration
 * @property {{ kind: 'monogram'|'image', src?: string, alt: string, tugra?: string }} portrait
 * @property {Kaynak[]} sources
 */

/** Ekranda görünen nitelik kademeleri — üç kademe, uydurma puan yok. */
export const NITELIK_KADEMELERI = {
  baslangic: { label: 'Başlangıç hâlinde', oran: 0.34 },
  belirgin: { label: 'Belirgin', oran: 0.67 },
  belirleyici: { label: 'Dönemin belirleyici ekseni', oran: 1 },
}

/** Nitelik alanlarının Türkçe adları — ekranda bu görünür. */
export const NITELIK_ALANLARI = {
  askeri: 'Askerî genişleme',
  devletlesme: 'Devletleşme',
  diplomasi: 'Diplomasi',
  hukuk: 'Hukuk ve yönetim',
  ilim: 'Bilim ve kültür',
  denizcilik: 'Denizcilik',
  ekonomi: 'Ekonomik yapılanma',
}

/** Kişi taraflarının rozet tonları. */
export const TARAF_TONLARI = {
  osmanli: 'altin',
  rakip: 'bordo',
  ilim: 'mavi',
  muttefik: 'yesil',
}

/** Kısa tarih kaydı üretici — çağrı yerlerini okunur tutar. */
export function tarih(year, value = String(year), ek = {}) {
  return { year, value, ...ek }
}

/** Kaynaklar arasında ayrışan tarih. Belirsizlik gizlenmez, işaretlenir. */
export function tartismaliTarih(year, value, note) {
  return { year, value, disputed: true, note }
}
