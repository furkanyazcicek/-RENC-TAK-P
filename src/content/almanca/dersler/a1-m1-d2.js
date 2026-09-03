/**
 * DERS — A1 / Modül 1 / Ders 2
 * "sein fiili, kişi zamirleri ve FİİL İKİNCİ kuralı"
 *
 * Bu ders Almancanın BELKEMİĞİDİR. İki şey öğretilir:
 *  1) "sein" (olmak) fiilinin çekimi — Türkçede karşılığı EK olduğu için
 *     öğrenci fiili tamamen unutur ("Ich Schüler" yazar),
 *  2) çekimli fiilin cümlede İKİNCİ sırada durması — Türkçede yüklem
 *     sonda olduğu için bu kural en çok tekrar gerektiren kuraldır.
 *
 * Sıra bilinçli: kural ne kadar erken verilirse, o kadar çok tekrarla
 * pekişir. Bu yüzden fiil ikinci kuralı sonraya bırakılmadı.
 */

export default {
  id: 'a1-m1-d2',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 2,
  baslik: 'sein fiili, kişi zamirleri ve fiil ikinci kuralı',
  altBaslik: 'Almancanın en önemli fiili ve en önemli cümle kuralı',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda "sein" fiilini bütün kişilerde çekebilecek, kendini ve başkasını tanıtabilecek ve çekimli fiili cümlenin ikinci sırasında tutabileceksin.',
  kazanim: 'sein fiilini altı kişide doğru çeker; kişi zamirlerini yerinde kullanır; ana cümlede çekimli fiili ikinci sıraya yerleştirir.',
  onKosullar: ['a1-m1-d1'],
  sure: 15,
  baglam: {
    durum: 'Yeni sınıfta kendini tanıtıyorsun ve yanındakini de tanıtman gerekiyor.',
    neden: '"Ben öğrenciyim" cümlesini kuramadan hiçbir konuşma başlamaz. Almancada bu cümlenin bir FİİLİ vardır ve o fiilin yeri sabittir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede ek, Almancada fiil',
      metin:
        'Türkçede "öğrenciyim" derken ayrı bir fiil yoktur; "-im" eki her şeyi halleder. Almancada bu ek yoktur; onun yerine "sein" fiili gelir ve kişiye göre tamamen değişir.',
      maddeler: [
        'Öğrenciyim → Ich BIN Schüler.',
        'Öğrencisin → Du BIST Schüler.',
        'Öğrenci → Er IST Schüler.',
        'Fiili atlarsan cümle yarım kalır ve anlaşılmaz: "Ich Schüler" ✗',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'sein — Almancanın en düzensiz, en gerekli fiili',
      basliklar: ['Kişi', 'Çekim', 'Örnek', 'Türkçe'],
      satirlar: [
        ['ich (ben)', 'bin', 'Ich bin Ali.', 'Ben Ali\'yim.'],
        ['du (sen)', 'bist', 'Du bist nett.', 'Sen kibarsın.'],
        ['er / sie / es (o)', 'ist', 'Sie ist Lehrerin.', 'O öğretmen.'],
        ['wir (biz)', 'sind', 'Wir sind Freunde.', 'Biz arkadaşız.'],
        ['ihr (siz — çoğul samimi)', 'seid', 'Ihr seid spät.', 'Siz geç kaldınız.'],
        ['sie / Sie (onlar / siz — resmî)', 'sind', 'Sie sind Herr Koch.', 'Siz Bay Koch\'sunuz.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Üç ayrı "sie" — panik yapma, kural basit',
      metin:
        'Almancada "sie" üç ayrı şey olabilir. Ayırt etmenin yolu FİİLE ve BÜYÜK HARFE bakmaktır.',
      maddeler: [
        'sie ist → "o (kadın)" — fiil tekil.',
        'sie sind → "onlar" — fiil çoğul.',
        'Sie sind → "siz (resmî)" — BÜYÜK harf, fiil çoğul.',
        'Yani cümleyi anlamak için önce fiile, sonra yazıma bak.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'FİİL İKİNCİ — Almancanın altın kuralı',
      metin:
        'Almanca ana cümlede çekimli fiil HER ZAMAN ikinci sıradadır. "İkinci kelime" değil, "ikinci ÖĞE" — birinci öğe birden fazla kelimeden oluşabilir.',
      maddeler: [
        'Ich bin heute müde. → 1: Ich, 2: bin ✓',
        'Heute bin ich müde. → 1: Heute, 2: bin ✓ (özne fiilin arkasına geçti)',
        'Am Montag bin ich müde. → 1: Am Montag (tek öğe), 2: bin ✓',
        'Heute ich bin müde. ✗ — fiil üçüncü sıraya düştü.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Türkçe düşünmenin en görünür izi',
      yanlis: 'Heute ich gehe zur Schule.',
      dogru: 'Heute gehe ich zur Schule.',
      neden:
        'Türkçede "Bugün ben okula gidiyorum" da "Ben bugün okula gidiyorum" da doğrudur; ekler görevi gösterdiği için sıra serbesttir. Almancada sıra bilgi taşır: fiil ikinci sırayı terk edemez.',
    },
    {
      tur: 'ornek',
      baslik: 'Aynı cümle, farklı başlangıç — fiil hep ikinci',
      satirlar: [
        { de: 'Ich bin heute in der Schule.', tr: 'Bugün okuldayım.', not: '1: Ich · 2: bin' },
        { de: 'Heute bin ich in der Schule.', tr: 'Bugün okuldayım. (bugün vurgulu)', not: '1: Heute · 2: bin' },
        { de: 'In der Schule bin ich heute.', tr: 'Bugün okuldayım. (okul vurgulu)', not: '1: In der Schule · 2: bin' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Kendini ve başkasını tanıtma',
      kaliplar: [
        { de: 'Ich bin …', kullanim: 'İsim ya da meslek ver', ornek: 'Ich bin Deniz. Ich bin Schüler.' },
        { de: 'Das ist …', kullanim: 'Başkasını tanıtırken', ornek: 'Das ist Maya. Sie ist neu.' },
        { de: 'Er/Sie ist …', kullanim: 'Üçüncü kişiyi anlatırken', ornek: 'Er ist mein Freund.' },
        { de: 'Wir sind …', kullanim: 'Grup olarak', ornek: 'Wir sind aus der Türkei.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Meslekte artikel yok',
      yanlis: 'Ich bin ein Schüler.',
      dogru: 'Ich bin Schüler.',
      neden:
        'Almancada meslek, uyruk ve rol söylenirken artikel KULLANILMAZ. "ein" eklemek İngilizceden gelen bir alışkanlıktır ("I am a student").',
    },
    {
      tur: 'dinleme',
      baslik: 'Tanışma sahnesi',
      metin:
        'Hallo, ich bin Lena. Ich bin fünfzehn Jahre alt. Das ist Tom. Er ist mein Bruder. Wir sind aus Berlin. Und du? Wer bist du?',
      satirlar: [
        { kisi: 'Lena', de: 'Hallo, ich bin Lena.' },
        { kisi: 'Lena', de: 'Ich bin fünfzehn Jahre alt.' },
        { kisi: 'Lena', de: 'Das ist Tom. Er ist mein Bruder.' },
        { kisi: 'Lena', de: 'Wir sind aus Berlin. Und du? Wer bist du?' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"sein" fiilini doğru biçimde yaz.',
      parcalar: [
        'Ich ', { bosluk: 0 }, ' Schüler. Du ', { bosluk: 1 }, ' Lehrer. Er ',
        { bosluk: 2 }, ' mein Bruder. Wir ', { bosluk: 3 }, ' Freunde.',
      ],
      cevaplar: [
        { kabul: ['bin'], ipucu: 'ich' },
        { kabul: ['bist'], ipucu: 'du' },
        { kabul: ['ist'], ipucu: 'er' },
        { kabul: ['sind'], ipucu: 'wir' },
      ],
      aciklama: 'Bu altı biçim ezberlenir; Almancada başka hiçbir fiil bu kadar düzensiz değildir.',
    },
    {
      id: 'a1-m1-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Bugün yorgunum." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Heute bin ich müde.' },
        { id: 'b', metin: 'Heute ich bin müde.' },
        { id: 'c', metin: 'Ich heute bin müde.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Fiil üçüncü sıraya düştü. Türkçenin sırası olduğu gibi taşınmış.',
        c: 'Özne ile fiil arasına zaman ifadesi girmiş; fiil yine ikinci sırada değil.',
      },
      aciklama: 'Cümle zaman ifadesiyle başlarsa özne fiilin ARKASINA geçer. Fiil ikinci sırayı asla terk etmez.',
      tuzaklar: [
        {
          kod: 'fiil-ucuncu',
          desen: /heute\s+ich\s+\w+/i,
          baslik: 'Fiil ikinci sırada değil',
          aciklama: 'Türkçede sıra serbesttir çünkü ekler görevi gösterir. Almancada fiilin yeri sabittir.',
          dogru: 'Heute bin ich müde.',
          mikro: { yonerge: '"Bugün okula gidiyorum." cümlesini "Heute" ile başlat.', kabul: ['Heute gehe ich zur Schule', 'Heute gehe ich in die Schule'] },
        },
      ],
    },
    {
      id: 'a1-m1-d2-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz (fiil ikinci!).',
      parcalar: ['ich', 'Heute', 'in der Schule', 'bin'],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Heute (1) · bin (2) · ich (3) · in der Schule (4).',
    },
    {
      id: 'a1-m1-d2-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümlede bir hata var. Doğrusunu yaz.',
      cumle: 'Ich Schüler in der neunten Klasse.',
      hataliParca: 'Ich Schüler',
      dogruParca: 'Ich bin Schüler',
      kabul: ['Ich bin Schüler in der neunten Klasse', 'Ich bin Schüler', 'Ich bin Schuelerin der neunten Klasse'],
      aciklama: 'Türkçede "öğrenciyim" tek kelimedir; Almancada mutlaka bir fiil olmalıdır.',
      tuzaklar: [
        {
          kod: 'sein-yok',
          desen: /^ich\s+(schüler|schueler|lehrer|müde|muede|krank)/i,
          baslik: '"sein" fiili eksik',
          aciklama: 'Türkçede durum eki fiilin yerini tutar; Almancada tutmaz.',
          dogru: 'Ich bin Schüler.',
          mikro: { yonerge: '"Yorgunum." cümlesini yaz.', kabul: ['Ich bin müde', 'Ich bin muede'] },
        },
      ],
    },
    {
      id: 'a1-m1-d2-a5',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Kişi zamirini doğru çekimle eşleştir.',
      sol: [
        { id: 'z1', metin: 'ich' },
        { id: 'z2', metin: 'du' },
        { id: 'z3', metin: 'er / sie / es' },
        { id: 'z4', metin: 'ihr' },
        { id: 'z5', metin: 'wir / sie / Sie' },
      ],
      sag: [
        { id: 'c1', metin: 'bin' },
        { id: 'c2', metin: 'bist' },
        { id: 'c3', metin: 'ist' },
        { id: 'c4', metin: 'seid' },
        { id: 'c5', metin: 'sind' },
      ],
      eslesme: { z1: 'c1', z2: 'c2', z3: 'c3', z4: 'c4', z5: 'c5' },
    },
    {
      id: 'a1-m1-d2-a6',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Bu cümlede "Sie" ne anlama geliyor?',
      soru: 'Sie sind Herr Bauer, nicht wahr?',
      secenekler: [
        { id: 'a', metin: 'Siz (resmî hitap)' },
        { id: 'b', metin: 'Onlar' },
        { id: 'c', metin: 'O (kadın)' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"Onlar" da "sind" alır ama küçük harfle yazılır ve burada tek bir kişiye (Herr Bauer) hitap ediliyor.',
        c: '"O (kadın)" için fiil "ist" olurdu.',
      },
      aciklama: 'Büyük harf + çoğul fiil + tek kişiye hitap = resmî "Sie".',
    },
    {
      id: 'a1-m1-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yanındaki arkadaşını sınıfa tanıtıyorsun. Adı Maya ve o senin arkadaşın.',
      kabul: [
        'Das ist Maya', 'Das ist Maya. Sie ist meine Freundin',
        'Das ist meine Freundin Maya', 'Sie ist Maya',
      ],
      ornekCevap: 'Das ist Maya. Sie ist meine Freundin.',
      aciklama: 'Birini tanıtırken "Er/Sie ist…" değil, önce "Das ist…" denir. Sonraki cümlede zamire geçilir.',
    },
    {
      id: 'a1-m1-d2-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Cümleyi adım adım büyüt. Fiili her seferinde ikinci sırada tut.',
      adimlar: [
        { yonerge: '"Öğrenciyim." cümlesini yaz.', kabul: ['Ich bin Schüler', 'Ich bin Schülerin', 'Ich bin Schueler'] },
        { yonerge: '"on beş yaşındayım" bilgisini ayrı bir cümle olarak ekle.', kabul: ['Ich bin 15 Jahre alt', 'Ich bin fünfzehn Jahre alt', 'Ich bin fuenfzehn Jahre alt'] },
        { yonerge: 'Şimdi "Bugün okuldayım." cümlesini "Heute" ile başlat.', kabul: ['Heute bin ich in der Schule', 'Heute bin ich in der Schule.'] },
      ],
      aciklama: 'Üçüncü adımda özne fiilin arkasına geçti — kural her cümlede aynı işler.',
    },
  ],

  ozet: [
    'Türkçedeki "-im" ekinin Almancadaki karşılığı bir FİİLDİR: sein.',
    'bin · bist · ist · sind · seid · sind — bu altı biçim ezberlenir.',
    'Ana cümlede çekimli fiil HER ZAMAN ikinci öğedir.',
    'Cümle zaman ya da yer ifadesiyle başlarsa özne fiilin arkasına geçer.',
    'Meslek ve uyruk söylenirken artikel kullanılmaz: Ich bin Schüler.',
    '"sie/Sie" üçe ayrılır: fiile ve büyük harfe bak.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları doldur.',
      parcalar: ['Ihr ', { bosluk: 0 }, ' spät. Sie ', { bosluk: 1 }, ' meine Lehrerin.'],
      cevaplar: [
        { kabul: ['seid'], ipucu: 'ihr' },
        { kabul: ['ist'], ipucu: 'tek kişi, kadın' },
      ],
    },
    {
      id: 'a1-m1-d2-s2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['aus Berlin', 'Wir', 'sind'],
      dogruSira: [1, 2, 0],
    },
    {
      id: 'a1-m1-d2-s3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Morgen ich bin in der Schule.',
      hataliParca: 'ich bin',
      dogruParca: 'bin ich',
      kabul: ['Morgen bin ich in der Schule', 'bin ich'],
      aciklama: 'Cümle zaman ifadesiyle başlıyor; fiil hemen arkasından gelmeli.',
    },
  ],

  kartlar: ['de-schueler', 'de-lehrer', 'de-name', 'de-heissen', 'de-jahr'],
  not: 'not-a1-m1-d2',
  sonraki: 'a1-m1-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
