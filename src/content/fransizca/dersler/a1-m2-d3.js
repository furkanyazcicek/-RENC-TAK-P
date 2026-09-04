/**
 * DERS — A1 / Modül 2 / Ders 3
 * "avoir ile sahiplik ve aile"
 *
 * Türkçede sahiplik "var" kelimesiyle kurulur: "iki kardeşim var".
 * Öğrenci bunu doğrudan "il y a" ile çevirir ve cümle bozulur.
 * Fransızcada SAHİPLİK "avoir" fiilinin işidir; "il y a" ise bir yerde
 * bir şeyin bulunduğunu söyler. Bu ayrım dersin merkezindedir.
 */

export default {
  id: 'a1-m2-d3',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 3,
  baslik: 'avoir ile sahiplik ve aile',
  altBaslik: 'Türkçedeki "var" bazen avoir, bazen il y a olur',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda "avoir" fiilini altı kişide de çekebilecek, aileni tanıtabilecek ve sahiplik ile varlık bildirimini birbirinden ayırabileceksin.',
  kazanim: 'avoir fiilini çeker; sahiplik cümlesi kurar; "avoir" ile "il y a" arasındaki işlev farkını uygular.',
  onKosullar: ['a1-m2-d2'],
  sure: 14,
  baglam: {
    durum: 'Yeni bir arkadaşın ailen hakkında soru soruyor: kaç kardeşin var, anne baban ne iş yapıyor?',
    neden: 'Aile, her tanışmada geçen ilk konudur. Sahiplik cümlesi kuramayan öğrenci bu konuşmayı sürdüremez.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'avoir — ezberlenmesi zorunlu',
      basliklar: ['Kişi', 'Çekim', 'Örnek'],
      satirlar: [
        ['je', 'j’ai', 'J’ai un frère.'],
        ['tu', 'tu as', 'Tu as des sœurs ?'],
        ['il / elle / on', 'il a', 'Elle a deux enfants.'],
        ['nous', 'nous avons', 'Nous avons un chien.'],
        ['vous', 'vous avez', 'Vous avez des questions ?'],
        ['ils / elles', 'ils ont', 'Ils ont une grande maison.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Türkçedeki "var" ikiye ayrılır',
      metin:
        'Türkçede tek bir "var" kelimesi hem sahipliği hem varlığı anlatır. Fransızcada bu ikisi ayrı fiillerdir ve karıştırmak cümleyi bozar.',
      maddeler: [
        'SAHİPLİK (kimin?) → avoir : J’ai deux frères. ("İki kardeşim var.")',
        'VARLIK (nerede?) → il y a : Il y a deux chaises ici. ("Burada iki sandalye var.")',
        'Ayırt etme sorusu: cümlede bir SAHİP var mı? Varsa "avoir".',
        '"Il y a deux frères" demek → "burada iki kardeş bulunuyor" olur; kimin kardeşi olduğu kaybolur.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Il y a deux frères. (kardeşim var demek isterken)',
      dogru: 'J’ai deux frères.',
      neden:
        'Türkçede iki cümle de "var" ile kurulduğu için öğrenci ayrımı görmüyor. Fransızcada sahiplik "avoir" ile, varlık "il y a" ile kurulur.',
    },
    {
      tur: 'kalip',
      baslik: 'Aile kalıpları',
      kaliplar: [
        { fr: 'J’ai … frère(s) et … sœur(s).', kullanim: 'Kardeş sayısı', ornek: 'J’ai un frère et deux sœurs.' },
        { fr: 'Je suis fils / fille unique.', kullanim: 'Tek çocuk', ornek: 'Je n’ai pas de frère, je suis fille unique.' },
        { fr: 'Mon père est… / Ma mère est…', kullanim: 'Meslek', ornek: 'Mon père est ingénieur, ma mère est professeure.' },
        { fr: 'le … de …', kullanim: 'Sahiplik (ters sıra)', ornek: 'C’est le frère de mon ami.' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Sahiplik "de" ile ve TERS sırayla kurulur',
      metin:
        'Türkçede "Ali’nin babası" derken sahip önce gelir. Fransızcada sıra terstir: önce sahip olunan şey, sonra "de", en son sahip.',
      maddeler: [
        'Türkçe: Ali’nin babası → Fransızca: le père DE Ali',
        'Türkçe: arkadaşımın kitabı → Fransızca: le livre DE mon ami',
        '"de" + le → du, "de" + les → des (kaynaşma zorunlu)',
        'Örnek: la voiture DU professeur (de + le), les livres DES élèves (de + les)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Aile kelimeleri',
      basliklar: ['Fransızca', 'Türkçe', 'Cins'],
      satirlar: [
        ['le père · la mère', 'baba · anne', 'eril · dişil'],
        ['le frère · la sœur', 'erkek kardeş · kız kardeş', 'eril · dişil'],
        ['le fils · la fille', 'oğul · kız evlat', 'eril · dişil'],
        ['les parents', 'anne baba', 'çoğul'],
        ['le grand-père · la grand-mère', 'dede · nine', 'eril · dişil'],
        ['l’oncle · la tante', 'amca/dayı · hala/teyze', 'eril · dişil'],
        ['le cousin · la cousine', 'kuzen', 'eril · dişil'],
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Ailem',
      metin:
        'J’ai une petite famille. J’ai un frère et une sœur.\nMon frère a vingt ans et ma sœur a douze ans.\nMon père est ingénieur et ma mère est professeure de maths.\nNous avons aussi un chat. Il s’appelle Minou.',
      sozluk: [
        { fr: 'une petite famille', tr: 'küçük bir aile' },
        { fr: 'aussi', tr: 'ayrıca, de' },
        { fr: 'professeure de maths', tr: 'matematik öğretmeni (kadın)' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"avoir" fiilini doğru çek.',
      parcalar: ['J’', { bosluk: 0 }, ' un frère. Mes parents ', { bosluk: 1 }, ' une voiture. Nous ', { bosluk: 2 }, ' un chien.'],
      havuz: ['ai', 'ont', 'avons'],
      cevaplar: [
        { kabul: ['ai'], ipucu: 'je …' },
        { kabul: ['ont'], ipucu: 'ils …' },
        { kabul: ['avons'], ipucu: 'nous …' },
      ],
    },
    {
      id: 'a1-m2-d3-a2',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Il y a deux frères et une sœur.',
      hataliParca: 'Il y a',
      dogruParca: 'J’ai',
      kabul: ['J’ai deux frères et une sœur', "J'ai deux frères et une sœur", 'J’ai deux frères'],
      aciklama: 'Kardeşlerin SAHİBİ sensin; sahiplik "avoir" ile kurulur. "Il y a" olsaydı "burada iki kardeş bulunuyor" olurdu.',
      tuzaklar: [
        {
          kod: 'sahiplik-ilya',
          desen: /^il\s+y\s+a\s+(un|une|deux|trois|des)\s+(frère|soeur|sœur|frères|sœurs|enfant)/i,
          baslik: 'Sahiplik "il y a" ile kurulmuş',
          aciklama: 'Türkçede hem sahiplik hem varlık "var" ile anlatılır. Fransızcada sahiplik "avoir", varlık "il y a" ile kurulur.',
          dogru: 'J’ai deux frères.',
          mikro: { yonerge: '"Bir kız kardeşim var." cümlesini yaz.', kabul: ["J'ai une sœur", 'J’ai une sœur', "J'ai une soeur"] },
        },
      ],
    },
    {
      id: 'a1-m2-d3-a3',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Sınıfta yirmi öğrenci var." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Il y a vingt élèves dans la classe.' },
        { id: 'b', metin: 'La classe a vingt élèves.' },
        { id: 'c', metin: 'J’ai vingt élèves dans la classe.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Dil bilgisi doğru ama sınıfı "sahip" gibi gösterir; doğal değildir.',
        c: 'Öğrencilerin sahibi sen değilsin.',
      },
      aciklama: 'Burada sahip yok, yalnız bir yerde bulunma var → "il y a".',
    },
    {
      id: 'a1-m2-d3-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak sahiplik cümlesi kur.',
      parcalar: ['de mon ami', 'C’est', 'le frère'],
      dogruSira: [1, 2, 0],
      aciklama: 'Fransızcada sahiplik ters sırayla kurulur: sahip olunan şey → de → sahip.',
    },
    {
      id: 'a1-m2-d3-a5',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Aile üyesini Türkçesiyle eşleştir.',
      sol: [
        { id: 'a1', metin: 'le grand-père' },
        { id: 'a2', metin: 'la tante' },
        { id: 'a3', metin: 'le cousin' },
        { id: 'a4', metin: 'les parents' },
      ],
      sag: [
        { id: 'b1', metin: 'dede' },
        { id: 'b2', metin: 'hala / teyze' },
        { id: 'b3', metin: 'kuzen (erkek)' },
        { id: 'b4', metin: 'anne baba' },
      ],
      eslesme: { a1: 'b1', a2: 'b2', a3: 'b3', a4: 'b4' },
    },
    {
      id: 'a1-m2-d3-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana "Tu as des frères et sœurs ?" diye sordu. Bir erkek kardeşin var.',
      kabul: ["J'ai un frère", 'J’ai un frère', 'Oui, j’ai un frère', "Oui j'ai un frère"],
      ornekCevap: 'Oui, j’ai un frère.',
    },
    {
      id: 'a1-m2-d3-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce que font tes parents ?',
      kabul: ['Mon père est', 'Ma mère est', 'Mes parents sont', 'Mon père'],
      ornekCevap: 'Mon père est ingénieur et ma mère est professeure.',
      aciklama: 'Meslek söylerken artikel kullanılmaz: "est ingénieur", "est un ingénieur" değil.',
    },
  ],

  ozet: [
    'avoir çekimi: j’ai · tu as · il a · nous avons · vous avez · ils ont.',
    'Türkçedeki "var" ikiye ayrılır: sahiplik → avoir, varlık → il y a.',
    'Ayırt etme sorusu: cümlede bir SAHİP var mı?',
    'Sahiplik "de" ile ve ters sırayla kurulur: le père de Ali.',
    'de + le = du, de + les = des (kaynaşma zorunlu).',
    'Meslek bildirirken artikel kullanılmaz.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Mes parents ', { bosluk: 0 }, ' une maison à Bursa.'],
      cevaplar: [{ kabul: ['ont'], ipucu: 'ils …' }],
    },
    {
      id: 'a1-m2-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Bir kedimiz var." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Nous avons un chat.' },
        { id: 'b', metin: 'Il y a un chat.' },
        { id: 'c', metin: 'Nous sommes un chat.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Sahip belli; "il y a" sahibi göstermez.' },
    },
    {
      id: 'a1-m2-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Aileni tanıt: kaç kardeşin var ve annen ne iş yapıyor?',
      kabul: ["J'ai", 'J’ai', 'Ma mère est'],
      ornekCevap: 'J’ai un frère et une sœur. Ma mère est professeure.',
    },
  ],

  kartlar: ['fr-avoir', 'fr-famille', 'fr-pere', 'fr-mere', 'fr-frere', 'fr-soeur', 'fr-parents'],
  not: null,
  sonraki: 'a1-m2-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
