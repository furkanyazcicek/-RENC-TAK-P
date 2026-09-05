/**
 * DERS — A2 / Modül 1 / Ders 3
 * "Imparfait: geçmişte süren durum"
 *
 * Modülün asıl kavramı burada. Fransızca geçmişi ikiye ayırır: passé
 * composé OLAYI, imparfait DURUMU ve ALIŞKANLIĞI anlatır. Türkçe bu
 * ayrımı zorunlu kılmadığı için öğrenci her şeyi passé composé ile
 * kurar ve metin cansız kalır. Ders ayrımı bir soruya bağlar:
 * "Bu cümle bir olay mı anlatıyor, yoksa arka planı mı çiziyor?"
 */

export default {
  id: 'a2-m1-d3',
  surum: 1,
  dil: 'fr',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 3,
  baslik: 'Imparfait: geçmişte süren durum',
  altBaslik: 'Olay mı, arka plan mı?',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'okuma', 'yazma'],
  amac: 'Bu dersin sonunda imparfait çekimini kurabilecek ve olay ile arka planı ayırt edebileceksin.',
  kazanim: 'Imparfait çekimini üretir; passé composé ile imparfait arasında bağlama göre seçim yapar.',
  onKosullar: ['a2-m1-d2'],
  sure: 24,
  baglam: {
    durum: 'Çocukluğunda yaz tatillerini nasıl geçirdiğini anlatıyorsun.',
    neden: 'Anı anlatmak yalnız olayları sıralamak değildir; ortamı, havayı ve alışkanlıkları da çizmek gerekir. Bunu imparfait yapar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Imparfait nasıl kurulur?',
      metin:
        'Imparfait tek parçalıdır ve kurulumu kolaydır: "nous" çekiminin kökü alınır, ' +
        'üzerine imparfait ekleri gelir. Neredeyse hiç istisnası yoktur.',
      maddeler: [
        'nous parlons → parl- : je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient',
        'nous finissons → finiss- : je finissais, il finissait',
        'nous faisons → fais- : je faisais, nous faisions',
        'Tek istisna "être"dir: j’étais, tu étais, il était, nous étions, ils étaient',
        'Ekler her fiilde aynıdır: -ais, -ais, -ait, -ions, -iez, -aient',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Passé composé mi, imparfait mi?',
      metin:
        'Seçim tek soruyla yapılır: bu cümle BİR OLAY mı anlatıyor, yoksa ARKA PLANI mı çiziyor? ' +
        'Olay ise passé composé, arka plan ya da alışkanlık ise imparfait.',
      satirlar: [
        { sol: 'Olay (bir kez oldu, bitti)', sag: 'Hier, j’ai vu un accident. → passé composé' },
        { sol: 'Arka plan (ortam, hava, duygu)', sag: 'Il pleuvait et il faisait froid. → imparfait' },
        { sol: 'Alışkanlık (tekrar ederdi)', sag: 'Quand j’étais petit, j’allais à la mer chaque été. → imparfait' },
        { sol: 'İkisi bir arada', sag: 'Je regardais la télé quand le téléphone a sonné.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Mes étés d’enfance',
      metin:
        'Quand j’étais petit, nous allions toujours chez ma grand-mère au bord de la mer. ' +
        'La maison était vieille et il y avait un grand figuier dans le jardin. ' +
        'Le matin, je me levais tôt et je descendais à la plage avec mon cousin. ' +
        'L’eau était froide, mais nous nagions quand même pendant des heures.\n\n' +
        'Un jour, pendant que nous nagions, nous avons vu une tortue de mer. ' +
        'Elle est passée juste à côté de nous et elle a disparu sous l’eau. ' +
        'Ce jour-là, nous sommes rentrés très tard et ma grand-mère était inquiète.',
      sozluk: [
        { fr: 'le figuier', tr: 'incir ağacı' },
        { fr: 'nager', tr: 'yüzmek' },
        { fr: 'la tortue de mer', tr: 'deniz kaplumbağası' },
        { fr: 'inquiet / inquiète', tr: 'endişeli' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Ayrımı kuran kalıplar',
      kaliplar: [
        { fr: 'Quand j’étais petit, je …ais', kullanim: 'Çocukluk alışkanlığı', ornek: 'Quand j’étais petit, j’allais à la mer.' },
        { fr: 'Il faisait … / Il y avait …', kullanim: 'Ortam çizme', ornek: 'Il faisait froid et il y avait du vent.' },
        { fr: 'Pendant que je …ais, … a …', kullanim: 'Süren + kesen', ornek: 'Pendant que je lisais, il a téléphoné.' },
        { fr: 'Un jour, …', kullanim: 'Olaya geçiş', ornek: 'Un jour, nous avons vu une tortue.' },
        { fr: 'chaque été / tous les jours', kullanim: 'Tekrar işareti', ornek: 'Chaque été, nous allions chez ma grand-mère.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık iki hata',
      yanlis: '1) "Quand j’étais petit, je suis allé à la mer chaque été."  2) "Hier il pleuvait et j’ai resté à la maison."',
      dogru: '1) "Quand j’étais petit, j’allais à la mer chaque été."  2) "Hier il pleuvait et je suis resté à la maison."',
      neden:
        'Birincide tekrar eden bir alışkanlık passé composé ile kurulmuş; "chaque été" zaten tekrarı işaret eder, imparfait gerekir. ' +
        'İkincide yardımcı fiil hatası var: "rester" être alır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d3-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR.',
      soru: 'Metinde ne anlatılıyor?',
      secenekler: [
        { id: 'a', metin: 'Çocukluk yazlarının alışkanlıkları ve bir gün yaşanan olay' },
        { id: 'b', metin: 'Bir okul gezisi' },
        { id: 'c', metin: 'Deniz kaplumbağalarının yaşamı' },
      ],
      dogruId: 'a',
      aciklama: 'Metnin ilk bölümü imparfait ile alışkanlığı, ikinci bölümü passé composé ile tek bir olayı anlatıyor.',
    },
    {
      id: 'a2-m1-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru zamanı seç.',
      soru: 'Quand j’étais petit, je ____ au football tous les samedis.',
      secenekler: [
        { id: 'a', metin: 'jouais' },
        { id: 'b', metin: 'ai joué' },
        { id: 'c', metin: 'joue' },
      ],
      dogruId: 'a',
      aciklama: '"tous les samedis" tekrarı işaret eder; tekrar eden geçmiş alışkanlık imparfait ister.',
    },
    {
      id: 'a2-m1-d3-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Imparfait biçimlerini yaz.',
      parcalar: [
        'Il ', { bosluk: 0 }, ' froid et il ', { bosluk: 1 },
        ' du vent. Nous ', { bosluk: 2 }, ' à la maison.',
      ],
      cevaplar: [
        { kabul: ['faisait'], ipucu: 'faire' },
        { kabul: ['y avait'], ipucu: 'il y a' },
        { kabul: ['étions'], ipucu: 'être' },
      ],
      aciklama: 'Üçü de ortam çizen cümlelerdir; ortam daima imparfait ile verilir.',
    },
    {
      id: 'a2-m1-d3-a4',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Doğru ikiliyi seç.',
      soru: 'Je ____ la télé quand le téléphone ____ .',
      secenekler: [
        { id: 'a', metin: 'regardais … a sonné' },
        { id: 'b', metin: 'ai regardé … sonnait' },
        { id: 'c', metin: 'regardais … sonnait' },
      ],
      dogruId: 'a',
      aciklama: 'Süren eylem imparfait, kesen olay passé composé ile kurulur.',
    },
    {
      id: 'a2-m1-d3-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Quand j’étais petit, je suis allé à la mer chaque été.',
      hataliParca: 'je suis allé … chaque été',
      dogruParca: 'j’allais … chaque été',
      kabul: [
        "Quand j'étais petit j'allais à la mer chaque été",
        "Quand j'étais petit, j'allais à la mer chaque été",
      ],
      aciklama: '"chaque été" tekrarı gösterir; tekrar eden alışkanlık imparfait ister.',
    },
    {
      id: 'a2-m1-d3-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Küçükken her yaz büyükannende kaldığını söyle.',
      kabul: [
        "Quand j'étais petit je restais chez ma grand-mère chaque été",
        "Quand j'étais petite je restais chez ma grand-mère chaque été",
        "Quand j'étais petit, je restais chez ma grand-mère chaque été",
      ],
      ornekCevap: 'Quand j’étais petit, je restais chez ma grand-mère chaque été.',
    },
  ],

  ozet: [
    'Imparfait tek parçalıdır: "nous" kökü + -ais, -ais, -ait, -ions, -iez, -aient.',
    'Tek istisna "être"dir: j’étais, il était, nous étions.',
    'Passé composé olayı, imparfait arka planı ve alışkanlığı anlatır.',
    '"chaque été", "tous les jours", "souvent" gibi ifadeler imparfait ister.',
    'Süren eylem imparfait, onu kesen olay passé composé ile kurulur.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d3-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Il ____ beau et nous étions contents.',
      secenekler: [
        { id: 'a', metin: 'faisait' },
        { id: 'b', metin: 'a fait' },
        { id: 'c', metin: 'fait' },
      ],
      dogruId: 'a',
      aciklama: 'Hava durumu bir arka plandır; imparfait ile verilir.',
    },
    {
      id: 'a2-m1-d3-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'İki zamanı doğru yerleştir.',
      parcalar: ['Pendant que je ', { bosluk: 0 }, ', mon frère ', { bosluk: 1 }, ' à la maison.'],
      cevaplar: [
        { kabul: ['lisais', 'dormais', 'travaillais'], ipucu: 'süren eylem: imparfait' },
        { kabul: ['est rentré', 'est arrivé'], ipucu: 'kesen olay: passé composé' },
      ],
      aciklama: 'Süren eylem imparfait, kesen olay passé composé ile kurulur.',
    },
    {
      id: 'a2-m1-d3-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yağmur yağdığını ve senin evde kaldığını söyle.',
      kabul: [
        'Il pleuvait et je suis resté à la maison',
        'Il pleuvait et je suis restée à la maison',
      ],
      ornekCevap: 'Il pleuvait et je suis resté à la maison.',
    },
  ],

  kartlar: ['fr-il-y-a', 'fr-souvenir-isim', 'fr-affreux'],
  not: null,
  sonraki: 'a2-m1-d4',
  kaynak: { tur: 'ozgun', aciklama: 'Çocukluk metni DRKOÇ için özgün yazılmıştır.' },
}
