/**
 * DERS — A1 / Modül 1 / Ders 4
 * "Ülke, milliyet ve dil — üçünü ayırmak"
 *
 * Türkçede tek bir kelime üç işi birden görür: "Türk" hem millet hem
 * sıfat, "Türkçe" hem dil hem sıfat olabilir. Fransızcada bu üçü ayrı
 * biçimlerdir ve YAZIM KURALI da farklıdır: ulus adı büyük, sıfat ve
 * dil adı küçük harfle yazılır.
 *
 * İKİNCİ KAYNAK — İNGİLİZCE: "I am Turkish" cümlesindeki büyük harf
 * alışkanlığı Fransızcaya taşınıyor. Bu hata Türkçeden değil,
 * İngilizceden gelir ve derste açıkça böyle söylenir.
 */

export default {
  id: 'a1-m1-d4',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 4,
  baslik: 'Ülke, milliyet ve dil',
  altBaslik: 'la Turquie · turc/turque · le turc — üçü ayrı şeydir',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'yazma'],
  amac: 'Bu dersin sonunda nereli olduğunu söyleyebilecek, milliyetini doğru biçimde (dişil/eril) verebilecek ve hangi dilleri konuştuğunu doğru yazımla anlatabileceksin.',
  kazanim: 'Ülke, milliyet ve dil biçimlerini ayırır; milliyet sıfatını cinse göre çeker; dil ve milliyet sıfatını küçük harfle yazar.',
  onKosullar: ['a1-m1-d2'],
  sure: 13,
  baglam: {
    durum: 'Bir dil kursunda tanışma turu. Herkes nereli olduğunu ve hangi dilleri bildiğini söylüyor.',
    neden: 'Bu üç bilgi her tanışmada sorulur. Yanlış biçim kullanmak "yabancı aksanı" gibi hemen fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Bir kelime değil, üç kelime',
      metin:
        'Türkçede "Türk" ve "Türkçe" kelimeleri her yerde aynı yazılır. Fransızcada ülke, o ülkenin insanı ve o ülkenin dili üç ayrı biçimdir ve yazım kuralları da farklıdır.',
      maddeler: [
        'ÜLKE: la Turquie (dişil), le Maroc (eril), la France, le Japon',
        'MİLLİYET (sıfat): turc / turque — KÜÇÜK harf: "Je suis turc."',
        'MİLLİYET (isim): un Turc / une Turque — BÜYÜK harf: "C’est un Turc."',
        'DİL: le turc, le français — her zaman KÜÇÜK harf ve eril',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Üçlü tablo',
      basliklar: ['Ülke', 'Milliyet (eril / dişil)', 'Dil'],
      satirlar: [
        ['la Turquie', 'turc / turque', 'le turc'],
        ['la France', 'français / française', 'le français'],
        ['l’Angleterre', 'anglais / anglaise', 'l’anglais'],
        ['l’Allemagne', 'allemand / allemande', 'l’allemand'],
        ['l’Espagne', 'espagnol / espagnole', 'l’espagnol'],
        ['le Maroc', 'marocain / marocaine', '(l’arabe)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Hangi edat: en mi, au mu, à mı?',
      metin:
        'Nerede olduğunu ya da nereye gittiğini söylerken edat ülkenin cinsine göre değişir. Bu, Türkçedeki tek "-e/-a" ekinin karşılığıdır ve üç ayrı biçime bölünür.',
      maddeler: [
        'DİŞİL ülke → en : en Turquie, en France, en Espagne',
        'ERİL ülke → au : au Maroc, au Japon, au Portugal',
        'ÇOĞUL ülke → aux : aux États-Unis, aux Pays-Bas',
        'ŞEHİR → à : à Istanbul, à Paris, à Lyon',
        'Nereden geliyorsun? → de/du/des : Je viens de Turquie. / Je viens du Maroc.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je parle Français. / Je suis Turc.',
      dogru: 'Je parle français. / Je suis turc.',
      neden:
        'Bu hata Türkçeden değil İNGİLİZCEDEN gelir: "French", "Turkish" büyük yazılır. Fransızcada dil adı ve milliyet SIFATI küçük harfle yazılır. Yalnız kişiyi gösteren isim büyük olur: "un Turc".',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Küçük harf mi, büyük harf mi?',
      dogal: 'Je suis turc. (sıfat — küçük) · C’est un Turc. (isim — büyük)',
      yapay: 'Je suis Turc. (sıfat büyük yazılmış)',
      aciklama:
        'Ayrım şu: "être" fiilinden sonra gelen milliyet SIFATTIR ve küçük yazılır. Önünde artikel varsa (un/une/le/la) İSİMDİR ve büyük yazılır.',
    },
    {
      tur: 'kalip',
      baslik: 'Nereli olduğunu söyleme',
      kaliplar: [
        { fr: 'Je viens de Turquie.', kullanim: 'Nereden geldiğini söylemek', ornek: '— Tu viens d’où ? — Je viens de Turquie.' },
        { fr: 'Je suis turc / turque.', kullanim: 'Milliyet', ornek: 'Je suis turque, de Bursa.' },
        { fr: 'J’habite à Istanbul.', kullanim: 'Nerede oturduğun', ornek: 'J’habite à Istanbul depuis dix ans.' },
        { fr: 'Je parle turc et un peu français.', kullanim: 'Diller', ornek: 'Je parle turc, anglais et un peu français.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Dil kursunda tanışma',
      metin:
        'Je m’appelle Elif. Je suis turque et je viens de Turquie.\nJ’habite à Izmir, mais maintenant je suis en France pour trois mois.\nJe parle turc, anglais et un peu français. Je voudrais bien parler français !',
      sozluk: [
        { fr: 'maintenant', tr: 'şimdi' },
        { fr: 'pour trois mois', tr: 'üç aylığına' },
        { fr: 'un peu', tr: 'biraz' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d4-a1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hangisi doğru yazılmış?',
      soru: 'Konuştuğun dilleri anlatıyorsun.',
      secenekler: [
        { id: 'a', metin: 'Je parle turc et anglais.' },
        { id: 'b', metin: 'Je parle Turc et Anglais.' },
        { id: 'c', metin: 'Je parle le Turc et le Anglais.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Dil adları Fransızcada küçük harfle yazılır; bu alışkanlık İngilizceden gelir.',
        c: 'Hem büyük harf hatası hem de "le Anglais" biçiminde elizyon eksikliği var.',
      },
      aciklama: '"parler" fiilinden sonra dil adı genellikle artikelsiz ve küçük harfle gelir.',
    },
    {
      id: 'a1-m1-d4-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru edatı yaz (en / au / aux / à).',
      parcalar: ['Je vais ', { bosluk: 0 }, ' France, puis ', { bosluk: 1 }, ' Maroc, et enfin ', { bosluk: 2 }, ' Paris.'],
      havuz: ['en', 'au', 'à'],
      cevaplar: [
        { kabul: ['en'], ipucu: 'dişil ülke' },
        { kabul: ['au'], ipucu: 'eril ülke' },
        { kabul: ['à', 'a'], ipucu: 'şehir' },
      ],
      aciklama: 'Ülkenin cinsi edatı belirler; şehirlerde her zaman "à" kullanılır.',
    },
    {
      id: 'a1-m1-d4-a3',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Ma mère est Turque et elle parle Turc.',
      hataliParca: 'Turque',
      dogruParca: 'turque',
      kabul: ['Ma mère est turque et elle parle turc', 'turque', 'Ma mère est turque'],
      aciklama: 'Burada iki kelime de sıfat/dil olarak kullanılmış; ikisi de küçük yazılır.',
      tuzaklar: [
        {
          kod: 'buyuk-harf-milliyet',
          desen: /est\s+(Turc|Turque|Français|Française|Anglais|Anglaise)\b/,
          baslik: 'Milliyet sıfatı büyük yazılmış',
          aciklama: 'İngilizcede "Turkish" büyük yazılır ve bu alışkanlık taşınıyor. Fransızcada "être" fiilinden sonra gelen milliyet sıfattır ve küçük yazılır.',
          dogru: 'Elle est turque.',
          mikro: { yonerge: '"O (kız) Fransız." cümlesini yaz.', kabul: ['Elle est française', 'Elle est francaise'] },
        },
      ],
    },
    {
      id: 'a1-m1-d4-a4',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Ülkeyi doğru edatla eşleştir.',
      sol: [
        { id: 'u1', metin: 'la France' },
        { id: 'u2', metin: 'le Japon' },
        { id: 'u3', metin: 'les États-Unis' },
        { id: 'u4', metin: 'Istanbul' },
      ],
      sag: [
        { id: 'e1', metin: 'en France' },
        { id: 'e2', metin: 'au Japon' },
        { id: 'e3', metin: 'aux États-Unis' },
        { id: 'e4', metin: 'à Istanbul' },
      ],
      eslesme: { u1: 'e1', u2: 'e2', u3: 'e3', u4: 'e4' },
    },
    {
      id: 'a1-m1-d4-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana "Tu viens d’où ?" diye sordu. Türkiyelisin.',
      kabul: ['Je viens de Turquie', 'Je suis turc', 'Je suis turque', 'Je viens de Turquie, de Istanbul'],
      ornekCevap: 'Je viens de Turquie.',
      aciklama: 'Ülke adı dişil olduğu için "de" kullanılır ve artikel düşer: "de Turquie" ("de la Turquie" değil).',
    },
    {
      id: 'a1-m1-d4-a6',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İkisi de dil bilgisi bakımından doğru. Hangisi doğal?',
      baglam: 'Milliyetini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Je suis turc.', dogal: true, neden: 'Milliyet bildirmenin standart yolu budur: être + sıfat, artikelsiz.' },
        { id: 'b', metin: 'Je suis un Turc.', dogal: false, neden: 'Dil bilgisi doğru ama kimlik vurgusu yapar; günlük tanışmada tuhaf durur.' },
        { id: 'c', metin: 'J’ai la nationalité turque.', dogal: false, neden: 'Doğru ama resmî belge dilidir; sohbette kullanılmaz.' },
      ],
      aciklama: 'Aynı bilgiyi vermenin üç yolu var ama bağlam hangisinin doğal olduğunu belirler.',
    },
    {
      id: 'a1-m1-d4-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Quelles langues est-ce que tu parles ?',
      kabul: ['Je parle turc', 'Je parle turc et anglais', 'Je parle turc, anglais et un peu français', 'Je parle'],
      ornekCevap: 'Je parle turc, anglais et un peu français.',
    },
  ],

  ozet: [
    'Ülke, milliyet ve dil Fransızcada üç ayrı biçimdir.',
    'Milliyet SIFATI ve dil adı küçük harfle yazılır: je suis turc, je parle turc.',
    'Kişiyi gösteren isim büyük yazılır: C’est un Turc.',
    'Dişil ülke → en, eril ülke → au, çoğul → aux, şehir → à.',
    'Nereden geldiğini söylerken: de Turquie / du Maroc / des États-Unis.',
    'Milliyet sıfatı dişilde -e alır: turc → turque, français → française.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Ma sœur est ', { bosluk: 0 }, ' .'],
      cevaplar: [{ kabul: ['turque', 'française', 'francaise'], ipucu: 'dişil milliyet sıfatı, küçük harf' }],
    },
    {
      id: 'a1-m1-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Cet été, je vais ____ Japon.',
      secenekler: [
        { id: 'a', metin: 'au' },
        { id: 'b', metin: 'en' },
        { id: 'c', metin: 'à' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"en" dişil ülkelerde kullanılır.', c: '"à" şehirlerde kullanılır.' },
    },
    {
      id: 'a1-m1-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Tek cümlede yaz.',
      durum: 'Türk olduğunu ve Türkçe ile İngilizce konuştuğunu söyle.',
      kabul: ['Je suis turc et je parle turc et anglais', 'Je suis turque et je parle turc et anglais', 'Je suis turc, je parle turc et anglais'],
      ornekCevap: 'Je suis turc et je parle turc et anglais.',
    },
  ],

  kartlar: ['fr-pays', 'fr-ville', 'fr-venir', 'fr-habiter', 'fr-parler'],
  not: null,
  sonraki: 'a1-m1-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
