/**
 * DERS — A2 / Modül 1 / Ders 1
 * "Passé composé: avoir ile geçmiş"
 *
 * A2'nin ilk dersi. Fransızcada geçmiş İKİ PARÇALIDIR: yardımcı fiil
 * çekilir, asıl fiil participe passé biçimine girer. Türkçede geçmiş tek
 * ekle kurulduğu için öğrenci ya yardımcı fiili düşürür ya da fiili
 * mastar hâlinde bırakır. Ders bu iki hataya odaklanır.
 */

export default {
  id: 'a2-m1-d1',
  surum: 1,
  dil: 'fr',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 1,
  baslik: 'Passé composé: avoir ile geçmiş',
  altBaslik: 'İki parçalı geçmişin ilk yarısı',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'yazma', 'dusunme'],
  amac: 'Bu dersin sonunda avoir ile kurulan passé composé cümlelerini doğru kurabileceksin.',
  kazanim: 'Düzenli fiillerin participe passé biçimini üretir; avoir yardımcı fiilini doğru çeker ve olumsuzu kurar.',
  onKosullar: ['a1-m6-d5'],
  sure: 22,
  baglam: {
    durum: 'Hafta sonunu soran bir arkadaşına cevap veriyorsun.',
    neden: 'Fransızcada olan biteni anlatmanın tek yolu passé composé\'dir; konuşmada da yazıda da en sık kullanılan geçmiş zamandır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Geçmiş iki parçalıdır',
      metin:
        'Türkçede geçmiş tek ekle kurulur: "çalıştım". Fransızcada iki parça gerekir: ' +
        'yardımcı fiil (avoir) özneye göre çekilir, asıl fiil participe passé biçimine girer. ' +
        'İkisi birlikte tek bir zaman kurar.',
      maddeler: [
        'J’ai travaillé. → ai (yardımcı) + travaillé (participe passé)',
        '-er fiilleri → -é : travailler → travaillé, manger → mangé, regarder → regardé',
        '-ir fiilleri → -i : finir → fini, choisir → choisi',
        '-re fiilleri → -u : attendre → attendu, vendre → vendu',
        'Olumsuzda "ne … pas" yardımcı fiili sarar: "Je n’ai pas travaillé."',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'avoir çekimi ve participe passé',
      basliklar: ['Özne', 'avoir', 'Örnek'],
      satirlar: [
        ['je', 'ai', 'J’ai regardé un film.'],
        ['tu', 'as', 'Tu as fini tes devoirs.'],
        ['il / elle', 'a', 'Elle a mangé une pomme.'],
        ['nous', 'avons', 'Nous avons attendu le bus.'],
        ['vous', 'avez', 'Vous avez travaillé beaucoup.'],
        ['ils / elles', 'ont', 'Ils ont joué au football.'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Türkçe ile Fransızca sırası',
      metin:
        'Türkçede tek fiil vardır ve sondadır. Fransızcada iki parça arka arkaya gelir, ' +
        'olumsuzluk ise yardımcı fiili sarar. Öğrencinin en sık hatası olumsuzluğu yanlış yere koymaktır.',
      satirlar: [
        { sol: 'Türkçe: Dün çalıştım.', sag: 'Tek fiil.' },
        { sol: 'Fransızca: Hier, j’ai travaillé.', sag: 'Yardımcı + participe.' },
        { sol: 'Olumsuz: Je n’ai pas travaillé.', sag: '"ne … pas" yardımcıyı sarar.' },
        { sol: 'YANLIŞ: Je n’ai travaillé pas.', sag: '"pas" participe\'in arkasına atılmış.' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Bu derste kullanacağın kalıplar',
      kaliplar: [
        { fr: 'J’ai + participe passé', kullanim: 'Olumlu anlatım', ornek: 'J’ai fini mes devoirs.' },
        { fr: 'Hier, j’ai …', kullanim: 'Zaman ifadesiyle başlangıç', ornek: 'Hier, j’ai regardé un film.' },
        { fr: 'Je n’ai pas …', kullanim: 'Olumsuz', ornek: 'Je n’ai pas regardé la télé.' },
        { fr: 'Est-ce que tu as … ?', kullanim: 'Soru', ornek: 'Est-ce que tu as fini tes devoirs ?' },
        { fr: 'Qu’est-ce que tu as fait … ?', kullanim: 'Açık uçlu soru', ornek: 'Qu’est-ce que tu as fait le week-end ?' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Türk öğrencinin en sık üç hatası',
      yanlis: '1) "Hier je travaillé."  2) "Je n’ai travaillé pas."  3) "J’ai finir mes devoirs."',
      dogru: '1) "Hier j’ai travaillé."  2) "Je n’ai pas travaillé."  3) "J’ai fini mes devoirs."',
      neden:
        'Birincisinde yardımcı fiil düşmüş: Türkçede tek fiil olduğu için öğrenci ikinci parçayı gereksiz görür. ' +
        'İkincisinde olumsuzluk yanlış yere konmuş. ' +
        'Üçüncüsünde fiil mastar hâlinde bırakılmış; participe passé biçimi kurulmamış.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Hier, j’___ un film à la télé.',
      secenekler: [
        { id: 'a', metin: 'ai regardé' },
        { id: 'b', metin: 'ai regarder' },
        { id: 'c', metin: 'regardé' },
      ],
      dogruId: 'a',
      aciklama: 'Yardımcı fiil ve participe passé birlikte kurulur; fiil mastar hâlinde kalmaz.',
    },
    {
      id: 'a2-m1-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Olumsuz cümlenin doğru biçimini seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'Je n’ai pas fini mes devoirs.' },
        { id: 'b', metin: 'Je n’ai fini pas mes devoirs.' },
        { id: 'c', metin: 'Je ne fini pas mes devoirs.' },
      ],
      dogruId: 'a',
      aciklama: '"ne … pas" yardımcı fiili sarar; participe passé dışarıda kalır.',
    },
    {
      id: 'a2-m1-d1-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Participe passé biçimlerini yaz.',
      parcalar: [
        'Samedi, j’ai ', { bosluk: 0 }, ' ma chambre, puis j’ai ',
        { bosluk: 1 }, ' mes devoirs et le soir j’ai ', { bosluk: 2 }, ' au football.',
      ],
      cevaplar: [
        { kabul: ['rangé'], ipucu: 'ranger' },
        { kabul: ['fini'], ipucu: 'finir' },
        { kabul: ['joué'], ipucu: 'jouer' },
      ],
      aciklama: 'Üç fiil üç grubun desenini gösteriyor: -er → -é, -ir → -i.',
    },
    {
      id: 'a2-m1-d1-a4',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiili participe passé biçimiyle eşleştir.',
      sol: ['manger', 'finir', 'attendre', 'travailler'],
      sag: ['mangé', 'fini', 'attendu', 'travaillé'],
      eslesme: { manger: 'mangé', finir: 'fini', attendre: 'attendu', travailler: 'travaillé' },
      aciklama: 'Üç grup üç ek alır: -é, -i, -u.',
    },
    {
      id: 'a2-m1-d1-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve cümleyi düzelt.',
      cumle: 'Hier je travaillé beaucoup.',
      hataliParca: 'je travaillé',
      dogruParca: 'j’ai travaillé',
      kabul: [
        "Hier j'ai travaillé beaucoup",
        "Hier j'ai beaucoup travaillé",
      ],
      aciklama: 'Yardımcı fiil düşmüş; passé composé iki parçadan oluşur.',
    },
    {
      id: 'a2-m1-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşına hafta sonu ne yaptığını sor.',
      kabul: [
        "Qu'est-ce que tu as fait le week-end",
        "Qu'est-ce que tu as fait ce week-end",
      ],
      ornekCevap: 'Qu’est-ce que tu as fait ce week-end ?',
    },
    {
      id: 'a2-m1-d1-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — kısa ve odaklı.',
      gorev: 'Hafta sonunu anlatan beş cümle yaz. Hepsi passé composé olsun, en az bir olumsuz cümle kur. En az 40 kelime.',
      ornekMetin:
        'Le week-end dernier, je suis resté à la maison. Samedi matin, j’ai rangé ma chambre ' +
        'et j’ai aidé ma mère. L’après-midi, j’ai travaillé pour le contrôle de maths. ' +
        'Je n’ai pas regardé la télé parce que j’ai eu beaucoup de travail. ' +
        'Dimanche, j’ai joué au football avec mes amis.',
      kaliplar: [
        'Le week-end dernier, j’ai …',
        'Samedi matin, j’ai …',
        'Je n’ai pas … parce que …',
        'Le soir, j’ai …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Beş passé composé cümlesi, en az bir olumsuz.' },
        { ad: 'Fikir üret', aciklama: 'Hafta sonunda yaptığın üç işi ve yapmadığın bir şeyi not al.' },
        { ad: 'Taslak yaz', aciklama: 'Her cümlede önce yardımcı fiili seç, sonra participe passé biçimini kur.' },
        { ad: 'Kontrol et', aciklama: 'Olumsuz cümlende "pas" yardımcı fiilin hemen arkasında mı?' },
      ],
      olcut: [
        'Bütün cümlelerde yardımcı fiil var mı?',
        'Participe passé biçimlerini doğru kurdum mu? (-é, -i, -u)',
        'Olumsuz cümlede "ne … pas" yardımcı fiili sarıyor mu?',
        'En az 40 kelime yazdım mı?',
      ],
      enAzKelime: 40,
      aranan: [
        { etiket: 'avoir yardımcı fiili', desen: /\b(ai|as|a|avons|avez|ont)\b/i },
        { etiket: 'participe passé', desen: /\b\w+(é|i|u)\b/i },
        { etiket: 'olumsuzluk (ne … pas)', desen: /\bn['’]?\w*\s+pas\b|\bne\s+\w+\s+pas\b/i },
      ],
      tuzaklar: [
        {
          kod: 'yardimci-dusmus',
          desen: /\bje\s+(travaillé|regardé|mangé|fini|joué)\b/i,
          baslik: 'Yardımcı fiil düşmüş',
          aciklama: 'Türkçede geçmiş tek ekle kurulduğu için öğrenci ikinci parçayı gereksiz görür. Fransızcada passé composé daima iki parçalıdır.',
          dogru: "J'ai travaillé.",
          mikro: { yonerge: '"Dün çok çalıştım." cümlesini yaz.', kabul: ["Hier j'ai beaucoup travaillé", "J'ai beaucoup travaillé hier"] },
        },
      ],
    },
  ],

  ozet: [
    'Passé composé iki parçalıdır: yardımcı fiil (avoir) + participe passé.',
    'Ekler gruba göre değişir: -er → -é, -ir → -i, -re → -u.',
    'Olumsuzlukta "ne … pas" yardımcı fiili sarar, participe dışarıda kalır.',
    'Fiil mastar hâlinde bırakılmaz: "j’ai finir" değil "j’ai fini".',
    'Zaman ifadesi (hier, la semaine dernière) cümleyi geçmişe kilitler.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Nous ____ le bus pendant vingt minutes.',
      secenekler: [
        { id: 'a', metin: 'avons attendu' },
        { id: 'b', metin: 'avons attendre' },
        { id: 'c', metin: 'sommes attendu' },
      ],
      dogruId: 'a',
      aciklama: '-re fiilleri participe passé\'de -u alır ve avoir ile çekilir.',
    },
    {
      id: 'a2-m1-d1-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Soru cümlesini tamamla.',
      parcalar: ['Est-ce que tu ', { bosluk: 0 }, ' ', { bosluk: 1 }, ' tes devoirs ?'],
      cevaplar: [
        { kabul: ['as'], ipucu: 'avoir çekimi' },
        { kabul: ['fini'], ipucu: 'finir' },
      ],
      aciklama: 'Soruda da yapı değişmez: yardımcı fiil + participe passé.',
    },
    {
      id: 'a2-m1-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün ders çalıştığını ama televizyon izlemediğini söyle.',
      kabul: [
        "Hier j'ai travaillé mais je n'ai pas regardé la télé",
        "Hier j'ai étudié mais je n'ai pas regardé la télé",
        "J'ai travaillé hier mais je n'ai pas regardé la télé",
      ],
      ornekCevap: 'Hier j’ai travaillé, mais je n’ai pas regardé la télé.',
    },
  ],

  kartlar: ['fr-hier', 'fr-semaine-derniere', 'fr-puis'],
  not: null,
  sonraki: 'a2-m1-d2',
  kaynak: { tur: 'ozgun', aciklama: 'Örnek cümleler DRKOÇ için özgün yazılmıştır.' },
}
