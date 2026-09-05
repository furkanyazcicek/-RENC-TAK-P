/**
 * DERS — A2 / Modül 1 / Ders 3
 * "Olayları sıraya dizmek: first, then, after that, finally"
 *
 * A2'de asıl beceri fiil çekimi değil ANLATI KURMAKTIR. Öğrenci geçmiş
 * biçimleri bilse bile cümleleri arka arkaya dizince metin dağılır.
 * Bu ders sıralama belirteçlerini ve "when / while" ayrımını öğretir:
 * biri kesip geçen olayı, diğeri süren arka planı işaretler.
 */

export default {
  id: 'a2-m1-d3',
  surum: 1,
  dil: 'en',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 3,
  baslik: 'Olayları sıraya dizmek',
  altBaslik: 'first, then, after that, finally — ve "when" ile "while" ayrımı',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'okuma', 'dizim'],
  amac: 'Bu dersin sonunda birbirini izleyen olayları sıra belirteçleriyle bağlayarak kısa bir anlatı kurabileceksin.',
  kazanim: 'Sıra belirteçleriyle olayları bağlar; "when" ve "while" arasındaki farkı doğru uygular.',
  onKosullar: ['a2-m1-d2'],
  sure: 20,
  baglam: {
    durum: 'Başından geçen küçük bir aksiliği arkadaşına anlatıyorsun.',
    neden: 'Anlatı, bir dili gerçekten kullanmanın ilk işaretidir: cümle kurmak değil, cümleleri birbirine bağlamak gerekir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Anlatının iskeleti',
      metin:
        'Türkçede sıra çoğunlukla ulaçlarla kurulur: "kalkıp gittim", "yemek yiyince çıktım". ' +
        'İngilizcede ise sıra ayrı kelimelerle ve cümle başında işaretlenir. Bu kelimeler metnin iskeletidir; ' +
        'okuyucu onlara bakarak olayın nerede olduğunu anlar.',
      maddeler: [
        'First, … → başlangıç',
        'Then, … / After that, … → sonraki adım',
        'A few minutes later, … → zaman atlaması',
        'Suddenly, … → beklenmedik dönüm noktası',
        'Finally, … / In the end, … → kapanış',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"when" ve "while": kesen olay, süren olay',
      metin:
        'İkisi de "-dığında" diye çevrilir ama işleri farklıdır. Fark, olayın SÜRÜP SÜRMEDİĞİNDEDİR.',
      satirlar: [
        { sol: 'while + süren olay', sag: 'While I was walking home, it started to rain.' },
        { sol: 'when + kesen, kısa olay', sag: 'When the bus arrived, we got on.' },
        { sol: 'İkisi bir arada', sag: 'While I was waiting, my friend called me.' },
        { sol: 'YANLIŞ: While the bus arrived…', sag: 'Otobüsün gelmesi anlıktır, süren bir eylem değildir.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'A small accident',
      metin:
        'Last Tuesday I had a very bad morning. First, I woke up late because my phone did not ring. ' +
        'Then I got dressed in five minutes and ran to the bus stop. ' +
        'While I was running, I dropped my bag and all my books fell on the ground. ' +
        'After that, I picked everything up and waited for the next bus. ' +
        'Suddenly it started to rain, and of course I did not have an umbrella. ' +
        'Finally I arrived at school twenty minutes late, and the teacher was not happy at all. ' +
        'But when I told her the whole story, she laughed and let me in.',
      sozluk: [
        { en: 'ring', tr: 'çalmak (zil, telefon)' },
        { en: 'drop', tr: 'düşürmek' },
        { en: 'pick up', tr: 'yerden almak' },
        { en: 'let someone in', tr: 'birini içeri almak' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Anlatı kalıpları',
      kaliplar: [
        { en: 'First, I …', kullanim: 'Başlangıç', ornek: 'First, I woke up late.' },
        { en: 'Then / After that, I …', kullanim: 'Sonraki adım', ornek: 'After that, I ran to the bus stop.' },
        { en: 'While I was …, …', kullanim: 'Süren arka plan', ornek: 'While I was running, I dropped my bag.' },
        { en: 'When …, …', kullanim: 'Kesen olay', ornek: 'When the bus arrived, we got on.' },
        { en: 'Finally / In the end, …', kullanim: 'Kapanış', ornek: 'Finally I arrived at school late.' },
      ],
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
        { id: 'a', metin: 'Aksiliklerle dolu bir sabah' },
        { id: 'b', metin: 'Bir okul gezisi' },
        { id: 'c', metin: 'Yeni bir otobüs hattı' },
      ],
      dogruId: 'a',
      aciklama: 'Metnin ilk cümlesi konuyu veriyor: "I had a very bad morning." Gerisi bu cümlenin ayrıntısıdır.',
    },
    {
      id: 'a2-m1-d3-a2',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Olayları metne göre sıraya diz.',
      parcalar: [
        'Yağmur başladı.',
        'Geç uyandı.',
        'Okula yirmi dakika geç vardı.',
        'Koşarken çantasını düşürdü.',
      ],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Sırayı belirleyen kelimeler: First → While I was running → Suddenly → Finally.',
    },
    {
      id: 'a2-m1-d3-a3',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru bağlacı seç.',
      soru: '____ I was waiting at the bus stop, I called my friend.',
      secenekler: [
        { id: 'a', metin: 'While' },
        { id: 'b', metin: 'When' },
        { id: 'c', metin: 'Finally' },
      ],
      dogruId: 'a',
      aciklama: 'Beklemek süren bir eylemdir; süren olay "while" ile işaretlenir.',
    },
    {
      id: 'a2-m1-d3-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Sıra belirteçleriyle boşlukları doldur.',
      parcalar: [
        { bosluk: 0 }, ' I finished my homework. ', { bosluk: 1 },
        ' I watched a film. ', { bosluk: 2 }, ' I went to bed at eleven.',
      ],
      cevaplar: [
        { kabul: ['First', 'first'], ipucu: 'başlangıç' },
        { kabul: ['Then', 'then', 'After that', 'after that'], ipucu: 'sonraki adım' },
        { kabul: ['Finally', 'finally', 'In the end', 'in the end'], ipucu: 'kapanış' },
      ],
      aciklama: 'Üç belirteç metnin iskeletidir: başlangıç, ara adım ve kapanış. Okuyucu nerede olduğunu bunlardan anlar.',
    },
    {
      id: 'a2-m1-d3-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'While the teacher came into the class, we were talking.',
      hataliParca: 'While the teacher came',
      dogruParca: 'When the teacher came',
      kabul: [
        'When the teacher came into the class we were talking',
        'When the teacher came into the class, we were talking',
      ],
      aciklama: 'Öğretmenin girmesi anlık bir olaydır: "when". Süren olay konuşmaktır.',
    },
    {
      id: 'a2-m1-d3-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — anlatı kur.',
      gorev: 'Başından geçen küçük bir aksiliği anlat. En az dört sıra belirteci ve bir "while" cümlesi kullan. En az 60 kelime.',
      ornekMetin:
        'Last Friday I had a difficult evening. First, I lost my keys somewhere in the house. ' +
        'Then I looked in every room but I did not find them. ' +
        'While I was looking under the sofa, my brother came home and opened the door. ' +
        'After that, we searched together for ten minutes. ' +
        'Finally we found the keys in my jacket, and we both laughed.',
      kaliplar: [
        'First, I …',
        'Then / After that, …',
        'While I was …, …',
        'Suddenly, …',
        'Finally, …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Küçük bir aksilik anlatacaksın: dört sıra belirteci ve bir "while" cümlesi.' },
        { ad: 'Olay iskeletini kur', aciklama: 'Üç adım not al: ne oldu, ne yaptın, nasıl bitti.' },
        { ad: 'Taslak yaz', aciklama: 'Her adımı bir sıra belirteciyle başlat.' },
        { ad: 'Kontrol et', aciklama: '"while" cümlende süren bir eylem var mı? Fiiller geçmişte mi?' },
      ],
      olcut: [
        'En az dört sıra belirteci kullandım mı?',
        'Bir "while" cümlesi kurdum mu ve orada süren bir eylem var mı?',
        'Bütün fiilleri geçmiş zamanda yazdım mı?',
        'En az 60 kelime yazdım mı?',
      ],
      enAzKelime: 60,
      aranan: [
        { etiket: 'sıra belirteci (first / then / after that / finally)', desen: /\b(first|then|after that|finally|in the end)\b/i },
        { etiket: 'while cümlesi', desen: /\bwhile\b/i },
        { etiket: 'geçmiş zaman', desen: /\b(was|were|did|went|had|\w+ed)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'while-anlik-olay',
          desen: /\bwhile\s+(the\s+)?\w+\s+(arrived|came|started|finished|opened)\b/i,
          baslik: '"while" anlık bir olayla kullanılmış',
          aciklama: '"While" süren eylemi işaretler. Gelmek, başlamak, bitmek gibi anlık olaylarda "when" kullanılır.',
          dogru: 'When the bus arrived, we got on.',
          mikro: { yonerge: '"Otobüs geldiğinde bindik." cümlesini yaz.', kabul: ['When the bus arrived we got on', 'When the bus came we got on'] },
        },
      ],
    },
  ],

  ozet: [
    'Anlatının iskeletini sıra belirteçleri kurar: First, Then, After that, Finally.',
    '"Suddenly" dönüm noktasını işaretler ve okuyucunun dikkatini toplar.',
    '"While" süren olayı, "when" kesen kısa olayı gösterir.',
    'Türkçedeki ulaçlar ("gidince", "yaparken") İngilizcede ayrı bağlaçlara dönüşür.',
    'İyi anlatı doğru fiilden değil, doğru bağlantıdan doğar.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d3-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru bağlacı seç.',
      soru: '____ I was cooking, the phone rang.',
      secenekler: [
        { id: 'a', metin: 'While' },
        { id: 'b', metin: 'When' },
        { id: 'c', metin: 'After that' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a2-m1-d3-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Kapanış cümlesini tamamla.',
      parcalar: [{ bosluk: 0 }, ' we found the keys in my jacket.'],
      cevaplar: [
        { kabul: ['Finally', 'finally', 'In the end', 'in the end'], ipucu: 'kapanış belirteci' },
      ],
    },
    {
      id: 'a2-m1-d3-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Eve yürürken yağmurun başladığını söyle.',
      kabul: [
        'While I was walking home it started to rain',
        'While I was walking home, it started to rain',
        'While I was walking home it began to rain',
      ],
      ornekCevap: 'While I was walking home, it started to rain.',
    },
  ],

  kartlar: ['k-then', 'k-finally', 'k-suddenly', 'k-happen'],
  not: null,
  sonraki: 'a2-m1-d4',
  kaynak: { tur: 'ozgun', aciklama: 'Anlatı metni DRKOÇ için özgün yazılmıştır.' },
}
