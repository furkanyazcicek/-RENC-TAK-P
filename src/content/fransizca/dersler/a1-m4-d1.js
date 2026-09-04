/**
 * DERS — A1 / Modül 4 / Ders 1
 * "Yer edatları: à, en, au, aux"
 *
 * Türkçede yer bildirmek TEK bir ekle yapılır: "okulda", "Fransa'da",
 * "Paris'te". Fransızcada bu iş için ayrı kelimeler vardır ve seçim
 * ismin TÜRÜNE ve CİNSİNE bağlıdır. Bu, Türk öğrencinin en çok tahminle
 * doldurduğu ve en çok yanıldığı alandır.
 *
 * DERSİN KURGUSU: kural ezberletmeden önce SORU AĞACI verilir —
 * "şehir mi ülke mi? ülkeyse eril mi dişil mi?" Öğrenci böylece
 * her seferinde aynı iki soruyu sorarak doğru edata ulaşır.
 */

export default {
  id: 'a1-m4-d1',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 1,
  baslik: 'Yer edatları: à, en, au, aux',
  altBaslik: 'Türkçedeki tek ek, Fransızcada dört ayrı kelimedir',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda hangi şehirde, hangi ülkede olduğunu ve nereye gittiğini doğru edatla söyleyebileceksin.',
  kazanim: 'Şehir ve ülke adlarında doğru edatı seçer; ülkenin cinsine göre en/au/aux ayrımını yapar; "de/du/des" ile köken bildirir.',
  onKosullar: ['a1-m3-d6'],
  sure: 15,
  baglam: {
    durum: 'Bir dil kampında herkes nereden geldiğini ve yaz tatilinde nereye gideceğini anlatıyor.',
    neden: 'Yer bildirmeden ne köken ne plan anlatılabilir. Yanlış edat, cümlenin en görünür hatasıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Önce iki soru sor',
      metin:
        'Doğru edatı bulmak için her seferinde aynı iki soruyu sor. Ezber değil, karar ağacı kullan.',
      maddeler: [
        '1. SORU: Şehir mi, ülke mi?',
        '   Şehirse → her zaman "à": à Istanbul, à Paris, à Lyon.',
        '2. SORU: Ülkeyse dişil mi, eril mi, çoğul mu?',
        '   Dişil → en (en France, en Turquie)',
        '   Eril → au (au Maroc, au Japon)',
        '   Çoğul → aux (aux États-Unis, aux Pays-Bas)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Nerede / Nereye',
      basliklar: ['Yer türü', 'Edat', 'Örnek'],
      satirlar: [
        ['Şehir', 'à', 'J’habite à Izmir. / Je vais à Paris.'],
        ['Dişil ülke', 'en', 'Je suis en France. / Je vais en Turquie.'],
        ['Eril ülke', 'au', 'Il habite au Maroc. / Je vais au Japon.'],
        ['Çoğul ülke', 'aux', 'Elle va aux États-Unis.'],
        ['Sesliyle başlayan ülke', 'en', 'en Iran, en Italie (cinsi ne olursa olsun)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Ülkenin cinsini nasıl anlarsın?',
      metin:
        'Ülke adlarının çoğu -e ile biter ve DİŞİLDİR. Bu, işini büyük ölçüde kolaylaştıran bir kuraldır.',
      maddeler: [
        '-e ile bitenler dişildir: la France, la Turquie, la Belgique, la Suisse, l’Italie',
        'Diğerleri erildir: le Maroc, le Japon, le Portugal, le Canada, le Brésil',
        'İSTİSNA: le Mexique (-e ile biter ama erildir)',
        'Çoğul olanlar: les États-Unis, les Pays-Bas',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je vais à France. / Je vais en Paris.',
      dogru: 'Je vais en France. / Je vais à Paris.',
      neden:
        'Türkçede ikisi de "-e/-a" ekiyle kurulduğu için ("Fransa’ya", "Paris’e") öğrenci aynı kelimeyi kullanıyor. Fransızcada şehir ile ülke ayrı edat alır.',
    },
    {
      tur: 'anlatim',
      baslik: 'Nereden geliyorsun? — de / du / des',
      metin:
        'Köken bildirirken de aynı mantık çalışır ama edat "de" ailesindendir.',
      maddeler: [
        'Şehir → de : Je viens d’Izmir. / Je viens de Paris.',
        'Dişil ülke → de (artikelsiz) : Je viens de Turquie, de France.',
        'Eril ülke → du : Je viens du Maroc, du Japon.',
        'Çoğul ülke → des : Je viens des États-Unis.',
        'Sesliyle başlayan şehirde elizyon: d’Ankara, d’Istanbul.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Yer bildirme kalıpları',
      kaliplar: [
        { fr: 'J’habite à…', kullanim: 'Yaşadığın şehir', ornek: 'J’habite à Izmir.' },
        { fr: 'Je suis en / au…', kullanim: 'Bulunduğun ülke', ornek: 'Je suis en France pour trois mois.' },
        { fr: 'Je vais à / en / au…', kullanim: 'Gideceğin yer', ornek: 'Cet été, je vais en Italie.' },
        { fr: 'Je viens de / du / des…', kullanim: 'Köken', ornek: 'Je viens de Turquie.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Dil kampında',
      metin:
        'Je m’appelle Elif. Je viens de Turquie et j’habite à Izmir.\nCette année, je suis en France pour étudier le français.\nMon ami Karim vient du Maroc. Il habite à Casablanca.\nCet été, nous allons aux Pays-Bas ensemble.',
      sozluk: [
        { fr: 'cette année', tr: 'bu yıl' },
        { fr: 'ensemble', tr: 'birlikte' },
        { fr: 'pour étudier', tr: 'okumak için' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru edatı yaz (à / en / au / aux).',
      parcalar: ['Je vais ', { bosluk: 0 }, ' Paris, puis ', { bosluk: 1 }, ' Italie et enfin ', { bosluk: 2 }, ' Japon.'],
      havuz: ['à', 'en', 'au'],
      cevaplar: [
        { kabul: ['à', 'a'], ipucu: 'şehir' },
        { kabul: ['en'], ipucu: 'dişil ülke' },
        { kabul: ['au'], ipucu: 'eril ülke' },
      ],
      aciklama: 'Her seferinde iki soru: şehir mi ülke mi? Ülkeyse hangi cins?',
    },
    {
      id: 'a1-m4-d1-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je vais à France cet été.',
      hataliParca: 'à France',
      dogruParca: 'en France',
      kabul: ['Je vais en France cet été', 'en France', 'Je vais en France'],
      aciklama: 'France dişil bir ülkedir; dişil ülkelerde "en" kullanılır.',
      tuzaklar: [
        {
          kod: 'ulke-sehir-edat',
          desen: /(?:^|\s)(à|a)\s+(France|Turquie|Italie|Espagne|Allemagne|Belgique|Suisse)\b/i,
          baslik: 'Ülkede şehir edatı kullanılmış',
          aciklama: 'Türkçede "Paris’e" ve "Fransa’ya" aynı ekle kurulur. Fransızcada şehir "à", dişil ülke "en" alır.',
          dogru: 'Je vais en France.',
          mikro: { yonerge: '"Türkiye’ye gidiyorum." cümlesini yaz.', kabul: ['Je vais en Turquie'] },
        },
      ],
    },
    {
      id: 'a1-m4-d1-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Ülkeyi doğru biçimle eşleştir.',
      sol: [
        { id: 'u1', metin: 'la France' },
        { id: 'u2', metin: 'le Maroc' },
        { id: 'u3', metin: 'les États-Unis' },
        { id: 'u4', metin: 'Istanbul' },
      ],
      sag: [
        { id: 'e1', metin: 'en France' },
        { id: 'e2', metin: 'au Maroc' },
        { id: 'e3', metin: 'aux États-Unis' },
        { id: 'e4', metin: 'à Istanbul' },
      ],
      eslesme: { u1: 'e1', u2: 'e2', u3: 'e3', u4: 'e4' },
    },
    {
      id: 'a1-m4-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Fas’tan geldiğini söylüyorsun (le Maroc).',
      secenekler: [
        { id: 'a', metin: 'Je viens du Maroc.' },
        { id: 'b', metin: 'Je viens de Maroc.' },
        { id: 'c', metin: 'Je viens au Maroc.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Eril ülkede "de + le" kaynaşır ve "du" olur.',
        c: '"au" gitmeyi anlatır, gelmeyi değil.',
      },
      aciklama: 'Köken bildirirken: şehir → de, dişil ülke → de, eril ülke → du, çoğul → des.',
    },
    {
      id: 'a1-m4-d1-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Köken bildiren edatı yaz (de / d’ / du / des).',
      parcalar: ['Je viens ', { bosluk: 0 }, ' Turquie, mon ami vient ', { bosluk: 1 }, ' Japon et Sarah vient ', { bosluk: 2 }, ' États-Unis.'],
      cevaplar: [
        { kabul: ['de'], ipucu: 'dişil ülke' },
        { kabul: ['du'], ipucu: 'eril ülke' },
        { kabul: ['des'], ipucu: 'çoğul ülke' },
      ],
    },
    {
      id: 'a1-m4-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Nerede oturduğunu ve nereli olduğunu tek cümlede söyle.',
      kabul: ['J’habite à', "J'habite à", 'Je viens de'],
      ornekCevap: 'J’habite à Izmir et je viens de Turquie.',
    },
    {
      id: 'a1-m4-d1-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Où est-ce que tu vas cet été ?',
      kabul: ['Je vais', 'Cet été je vais', 'Je reste'],
      ornekCevap: 'Cet été, je vais en Espagne avec ma famille.',
      aciklama: 'Cevapta da aynı edat kuralları geçerlidir; ülkenin cinsini kontrol et.',
    },
  ],

  ozet: [
    'Şehir → à : à Paris, à Izmir.',
    'Dişil ülke → en : en France, en Turquie.',
    'Eril ülke → au : au Maroc, au Japon.',
    'Çoğul ülke → aux : aux États-Unis.',
    'Ülke adlarının çoğu -e ile biter ve dişildir (istisna: le Mexique).',
    'Köken: de (şehir/dişil ülke) · du (eril) · des (çoğul).',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Edatı yaz.',
      parcalar: ['Ma sœur habite ', { bosluk: 0 }, ' Lyon.'],
      cevaplar: [{ kabul: ['à', 'a'], ipucu: 'şehir' }],
    },
    {
      id: 'a1-m4-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Cet hiver, je vais ____ Suisse.',
      secenekler: [
        { id: 'a', metin: 'en' },
        { id: 'b', metin: 'au' },
        { id: 'c', metin: 'à' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"au" eril ülkelerde kullanılır; Suisse dişildir.' },
    },
    {
      id: 'a1-m4-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Türkiye’den geldiğini söyle.',
      kabul: ['Je viens de Turquie', 'Je suis turc', 'Je suis turque'],
      ornekCevap: 'Je viens de Turquie.',
    },
  ],

  kartlar: ['fr-pays', 'fr-ville', 'fr-venir', 'fr-habiter', 'fr-aller'],
  not: null,
  sonraki: 'a1-m4-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
