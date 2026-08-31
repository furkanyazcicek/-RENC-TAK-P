/**
 * DRKOÇ — DİL SEVİYELERİ (CEFR)
 * ==================================================================
 *
 * Öğrenciye "A2 seviyesindesin" demek tek başına bir şey öğretmez. Bu dosya
 * her seviyenin ne kazandırdığını düz Türkçeyle anlatır: seviyenin sonunda
 * öğrenci neyi anlayabilir, nerede konuşabilir, hangi metni okuyabilir, ne
 * yazabilir, kaç kelimeyi etkin kullanır ve bir üst seviyeye geçmek için
 * neyi gösterebilmesi gerekir.
 *
 * Seviye kodu (A1, B2…) arayüzde ikincil bir etikettir; birincil bilgi
 * "neler yapabiliyorsun" cümleleridir.
 *
 * Kelime hedefleri, Avrupa Dil Portfolyosu ve yaygın sınav kılavuzlarında
 * kullanılan aktif kelime aralıklarıdır; kesin sayı değil, büyüklük
 * mertebesidir ve arayüzde de böyle sunulur.
 */

/** Sıralı seviye kodları — her yerde bu sıra kullanılır. */
export const SEVIYE_SIRASI = ['Pre-A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']

/**
 * Beceri anahtarları. Hem seviye tespitinde hem ilerleme ekranında hem de
 * yol haritasında aynı anahtarlar kullanılır; başka bir yerde tekrar
 * tanımlanmaz.
 */
export const BECERILER = {
  kelime: { ad: 'Kelime bilgisi', kisa: 'Kelime' },
  gramer: { ad: 'Dil bilgisi', kisa: 'Dil bilgisi' },
  dizim: { ad: 'Cümle kurma', kisa: 'Cümle kurma' },
  okuma: { ad: 'Okuduğunu anlama', kisa: 'Okuma' },
  dinleme: { ad: 'Dinlediğini anlama', kisa: 'Dinleme' },
  yazma: { ad: 'Yazılı anlatım', kisa: 'Yazma' },
  telaffuz: { ad: 'Telaffuz ve sesletim', kisa: 'Telaffuz' },
  dusunme: { ad: 'İngilizce düşünme', kisa: 'İngilizce düşünme' },
}

export const BECERI_ANAHTARLARI = Object.keys(BECERILER)

export const SEVIYELER = {
  'Pre-A1': {
    kod: 'Pre-A1',
    ad: 'Sıfırdan başlangıç',
    ozet: 'Harfleri, sesleri ve ilk kalıpları tanıyorsun. İngilizceyle ilk teması burada kuruyorsun.',
    renk: 'aqua',
    kelimeHedefi: { alt: 0, ust: 300, metin: 'yaklaşık 250–300 kelime ve hazır kalıp' },
    anlayabilir: [
      'Çok yavaş ve net söylenen selamlaşma, isim ve sayı ifadelerini anlarsın.',
      'Sınıfta ya da uygulamada geçen "Listen", "Repeat", "Open your book" gibi yönergeleri tanırsın.',
    ],
    konusabilir: [
      'Adını, yaşını ve nereli olduğunu söylersin.',
      'Selamlaşır, teşekkür eder, veda edersin.',
      'Bilmediğinde "Sorry?" ya da "I don\'t understand" diyerek kendini kurtarırsın.',
    ],
    okuyabilir: [
      'Tabela, isim etiketi, sayı ve çok kısa tanışma cümlelerini okursun.',
    ],
    yazabilir: [
      'Kendini tanıtan 3–4 kısa cümle yazarsın: "My name is… I am… I am from…"',
    ],
    gecisKosulu: [
      'Kendini yardımsız tanıtabilmek',
      '0–100 arası sayıları duyunca tanıyabilmek',
      'İngilizce alfabeyle adını harf harf söyleyebilmek',
      'Basit "be" cümlelerinde özneyi düşürmemek',
    ],
  },

  A1: {
    kod: 'A1',
    ad: 'Temel kullanıcı — ilk adımlar',
    ozet: 'Günlük hayatta en sık geçen kalıpları anlar ve çok basit cümlelerle kendini ifade edersin.',
    renk: 'brand',
    kelimeHedefi: { alt: 500, ust: 900, metin: 'yaklaşık 500–900 kelime' },
    anlayabilir: [
      'Yavaş ve net konuşulduğunda kendinle, ailenle ve yakın çevrenle ilgili tanıdık kelimeleri anlarsın.',
      'Kısa ve basit yönergeleri, fiyatları ve saatleri takip edersin.',
    ],
    konusabilir: [
      'Kendini ve tanıdıklarını tanıtır, nerede oturduğunu ve kimi tanıdığını anlatırsın.',
      'Karşındaki yavaş konuşur ve yardım ederse basit bir sohbeti sürdürürsün.',
      'Alışverişte fiyat sorar, yemek siparişi verirsin.',
    ],
    okuyabilir: [
      'Tanıdık isimler, kelimeler ve çok basit cümleler içeren ilan, menü ve tarifleri anlarsın.',
      'Kısa kartpostal ve mesajları okursun.',
    ],
    yazabilir: [
      'Kısa ve basit bir kartpostal veya mesaj yazarsın.',
      'Otel formu gibi belgelere kişisel bilgilerini yazarsın.',
    ],
    gecisKosulu: [
      'Present Simple ile günlük rutinini anlatabilmek',
      'do/does ile soru ve olumsuz cümle kurabilmek',
      'a/an/the kullanımında temel ayrımı yapabilmek',
      'Tanıdık konuda 5–6 cümlelik bağlantılı bir metin yazabilmek',
    ],
  },

  A2: {
    kod: 'A2',
    ad: 'Temel kullanıcı — günlük iletişim',
    ozet: 'Tanıdık konularda anlaşır, kısa hikâyeler anlatır ve geçmişten söz edersin.',
    renk: 'brand',
    kelimeHedefi: { alt: 1000, ust: 1800, metin: 'yaklaşık 1000–1800 kelime' },
    anlayabilir: [
      'Kendini, aileni, alışverişi, işini ve yakın çevreni ilgilendiren sık kullanılan kalıpları anlarsın.',
      'Kısa, net ve basit duyuru ve mesajlarda ana noktayı yakalarsın.',
    ],
    konusabilir: [
      'Tanıdık konularda basit ve doğrudan bilgi alışverişi yaparsın.',
      'Ailenden, çevrenden, eğitiminden ve şimdiki ya da eski işinden basit ifadelerle söz edersin.',
      'Geçmişte yaptığın bir şeyi kısa cümlelerle anlatırsın.',
    ],
    okuyabilir: [
      'Kısa ve basit metinleri okursun; ilan, menü, tarife ve programlarda aradığın bilgiyi bulursun.',
      'Kısa kişisel mektupları anlarsın.',
    ],
    yazabilir: [
      'Kısa notlar ve mesajlar yazarsın.',
      'Teşekkür etme gibi bir amaçla çok basit kişisel bir mektup yazarsın.',
    ],
    gecisKosulu: [
      'Past Simple ile düzenli ve sık kullanılan düzensiz fiilleri doğru çekebilmek',
      'Geleceğe dair plan ve tahmini ayırt edebilmek (going to / will)',
      'Karşılaştırma yapılarını kurabilmek',
      'Bir olayı sırayla anlatan 8–10 cümlelik paragraf yazabilmek',
    ],
  },

  B1: {
    kod: 'B1',
    ad: 'Bağımsız kullanıcı — eşiği geçme',
    ozet: 'Tanıdık konularda kendi başına ilerlersin; fikrini gerekçesiyle söylersin.',
    renk: 'info',
    kelimeHedefi: { alt: 2000, ust: 3200, metin: 'yaklaşık 2000–3200 kelime' },
    anlayabilir: [
      'İş, okul ve boş zamanla ilgili tanıdık konularda net ve standart konuşmanın ana noktalarını anlarsın.',
      'Konu tanıdıksa radyo, podcast ve televizyon programlarının çoğunu takip edersin.',
    ],
    konusabilir: [
      'Dilin konuşulduğu bir ülkede seyahat ederken karşılaşabileceğin durumların çoğunun altından kalkarsın.',
      'İlgi alanlarınla ilgili konularda hazırlıksız konuşmaya katılırsın.',
      'Bir düşünceni ya da planını kısaca gerekçelendirirsin.',
    ],
    okuyabilir: [
      'Günlük dilde yazılmış metinleri anlarsın.',
      'Kişisel mektuplarda olayların ve duyguların anlatımını takip edersin.',
    ],
    yazabilir: [
      'Tanıdık konularda bağlantılı ve düzenli bir metin yazarsın.',
      'Deneyimlerini ve izlenimlerini anlatan kişisel mektup yazarsın.',
    ],
    gecisKosulu: [
      'Present Perfect ile Past Simple arasındaki farkı bağlamda kullanabilmek',
      'Koşul cümlelerinin ilk iki tipini kurabilmek',
      'Bir görüşü gerekçe ve örnekle destekleyen paragraf yazabilmek',
      'Cümleleri bağlaçlarla birleştirip ard arda kısa cümle dizmekten kurtulmak',
    ],
  },

  B2: {
    kod: 'B2',
    ad: 'Bağımsız kullanıcı — akıcılık',
    ozet: 'Soyut konuları da takip eder, tartışmaya girer ve düşünceni İngilizce kurarsın.',
    renk: 'info',
    kelimeHedefi: { alt: 3500, ust: 5000, metin: 'yaklaşık 3500–5000 kelime' },
    anlayabilir: [
      'Somut ve soyut konulardaki karmaşık metinlerin ana fikrini anlarsın.',
      'Uzmanlık alanındaki teknik tartışmaları takip edersin.',
      'Uzun konuşmaları ve çoğu haber programını zorlanmadan izlersin.',
    ],
    konusabilir: [
      'Anadili İngilizce olan biriyle iki taraf da zorlanmadan akıcı bir sohbet kurarsın.',
      'Geniş bir konu yelpazesinde net ve ayrıntılı konuşursun.',
      'Güncel bir konuda görüşünü seçeneklerin artı ve eksilerini vererek savunursun.',
    ],
    okuyabilir: [
      'Yazarın tutum ve bakış açısını taşıyan güncel makaleleri ve raporları okursun.',
      'Çağdaş edebî düzyazıyı anlarsın.',
    ],
    yazabilir: [
      'Geniş bir konu yelpazesinde net ve ayrıntılı metin yazarsın.',
      'Bir konuda bilgi aktaran ya da belirli bir görüşün lehine/aleyhine gerekçe sunan deneme veya rapor yazarsın.',
    ],
    gecisKosulu: [
      'Edilgen yapıyı ve dolaylı anlatımı doğal biçimde kullanabilmek',
      'Kelimeyi doğru eşdizimiyle (collocation) seçebilmek',
      'Türkçeden çeviri izleri belirgin biçimde azalmış olmak',
      'Yazdığı metni kendi kendine gözden geçirip iyileştirebilmek',
    ],
  },

  C1: {
    kod: 'C1',
    ad: 'Yetkin kullanıcı — akademik ve mesleki',
    ozet: 'Dili akademik ve mesleki hayatta esnek ve etkili kullanırsın.',
    renk: 'accent',
    kelimeHedefi: { alt: 5000, ust: 8000, metin: 'yaklaşık 5000–8000 kelime' },
    anlayabilir: [
      'Uzun ve zorlayıcı metinlerde örtük anlamı da kavrarsın.',
      'Açıkça yapılandırılmamış uzun konuşmaları takip edersin.',
    ],
    konusabilir: [
      'Kelime aramadan akıcı ve doğal konuşursun.',
      'Dili toplumsal, akademik ve mesleki amaçlarla esnek biçimde kullanırsın.',
      'Karmaşık konularda ayrıntılı, düzenli ve bağlantılı konuşma üretirsin.',
    ],
    okuyabilir: [
      'Uzun ve karmaşık edebî ve bilgilendirici metinleri, üslup farklarını görerek okursun.',
      'Alanın dışındaki uzmanlık makalelerini ve teknik yönergeleri anlarsın.',
    ],
    yazabilir: [
      'Karmaşık konularda net, iyi yapılandırılmış ve ayrıntılı metin yazarsın.',
      'Okuyucuya uygun üslubu seçersin.',
    ],
    gecisKosulu: [
      'Üslup ve kayıt (resmî/gündelik) farkını bilinçli yönetebilmek',
      'Deyim ve kalıpları doğru bağlamda kullanabilmek',
      'Akademik bir metni özetleyip eleştirebilmek',
      'İngilizce düşünüp düzenleme yapabilmek — önce Türkçe kurup çevirmemek',
    ],
  },

  C2: {
    kod: 'C2',
    ad: 'Yetkin kullanıcı — ustalık',
    ozet: 'Duyduğun ve okuduğun her şeyi kolayca anlar, ince anlam farklarını üretirsin.',
    renk: 'accent',
    kelimeHedefi: { alt: 8000, ust: 16000, metin: '8000 kelimenin üzerinde etkin dağarcık' },
    anlayabilir: [
      'Duyduğun ve okuduğun hemen her şeyi zorlanmadan anlarsın.',
      'Hızlı konuşulan ve aksanlı konuşmaya kısa sürede alışırsın.',
    ],
    konusabilir: [
      'Çok akıcı ve kesin konuşur, karmaşık durumlarda bile ince anlam farklarını verirsin.',
      'Farklı kaynaklardan gelen bilgiyi tutarlı bir sunuma dönüştürürsün.',
    ],
    okuyabilir: [
      'Soyut, yapı bakımından karmaşık ve edebî metinler dâhil her yazılı metni okursun.',
    ],
    yazabilir: [
      'Net, akıcı ve duruma uygun üslupta metin yazarsın.',
      'Okuyucunun önemli noktaları fark etmesini sağlayan etkili bir mantıksal yapı kurarsın.',
    ],
    gecisKosulu: [
      'Bu, ölçeğin en üst basamağıdır; buradan sonrası kullanım genişliği ve alan uzmanlığıdır.',
    ],
  },
}

/** Seviye nesnesini koddan getirir; bilinmeyen kod için `null` döner. */
export function seviyeBul(kod) {
  return SEVIYELER[kod] ?? null
}

/** Bir seviyenin sırasal indeksi (Pre-A1 = 0). Bilinmiyorsa -1. */
export function seviyeIndeksi(kod) {
  return SEVIYE_SIRASI.indexOf(kod)
}

/** Bir üst seviye kodu; en üstteyse aynı kodu döner. */
export function birUstSeviye(kod) {
  const i = seviyeIndeksi(kod)
  if (i < 0) return SEVIYE_SIRASI[0]
  return SEVIYE_SIRASI[Math.min(i + 1, SEVIYE_SIRASI.length - 1)]
}

/** Bir alt seviye kodu; en alttaysa aynı kodu döner. */
export function birAltSeviye(kod) {
  const i = seviyeIndeksi(kod)
  if (i <= 0) return SEVIYE_SIRASI[0]
  return SEVIYE_SIRASI[i - 1]
}

/**
 * `a` seviyesi `b` seviyesinden düşük mü? Sıralama karşılaştırmalarında
 * indeks aritmetiğini tekrarlamamak için.
 */
export function seviyeDahaDusuk(a, b) {
  return seviyeIndeksi(a) < seviyeIndeksi(b)
}
