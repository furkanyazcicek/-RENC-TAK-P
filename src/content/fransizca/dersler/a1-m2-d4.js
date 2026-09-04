/**
 * DERS — A1 / Modül 2 / Ders 4
 * "İyelik sıfatları: mon, ma, mes"
 *
 * Bu ders Türk öğrencinin en çok şaşırdığı kurallardan birini verir:
 * iyelik sıfatı SAHİBİN cinsine değil, SAHİP OLUNAN ŞEYİN cinsine uyar.
 *
 * Türkçede "onun kardeşi" derken sahibin cinsiyeti hiç görünmez ve
 * öğrenci Fransızcada da görünmeyeceğini varsayar — ama tam tersine,
 * Fransızcada sahibin cinsiyeti hiç görünmez, nesnenin cinsiyeti görünür.
 * "Son frère" hem "onun (erkeğin) kardeşi" hem "onun (kadının) kardeşi"
 * demektir. Bu, öğrenciyi rahatlatan bir bilgidir ve açıkça söylenir.
 */

export default {
  id: 'a1-m2-d4',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 4,
  baslik: 'İyelik sıfatları: mon, ma, mes',
  altBaslik: 'Sahibin cinsi değil, SAHİP OLUNAN ŞEYİN cinsi belirler',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dizim'],
  amac: 'Bu dersin sonunda "benim, senin, onun" gibi iyelik sıfatlarını ismin cinsine ve sayısına göre doğru seçebileceksin.',
  kazanim: 'İyelik sıfatını ismin cinsine ve sayısına göre çeker; sesli harfle başlayan dişil isimlerde "mon" istisnasını uygular.',
  onKosullar: ['a1-m2-d3'],
  sure: 13,
  baglam: {
    durum: 'Ailenin fotoğrafını gösteriyorsun: "bu benim babam, bu benim kız kardeşim, bunlar da anne babam".',
    neden: 'İyelik sıfatı olmadan hiçbir aile ya da eşya anlatılamaz. Yanlış seçim her cümlede tekrar eder ve çok fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Kural tek cümle: ismin cinsine bak',
      metin:
        'Türkçede "onun kardeşi" derken sahibin kadın mı erkek mi olduğu görünmez. Fransızcada da görünmez! Görünen şey, SAHİP OLUNAN nesnenin cinsidir.',
      maddeler: [
        'mon frère → hem "benim (erkek) kardeşim" hem cinsiyetten bağımsız',
        'son frère → hem "onun (erkeğin)" hem "onun (kadının)" kardeşi',
        'Yani: sahibin cinsi ASLA sorulmaz.',
        'Sorulan tek şey: isim eril mi, dişil mi, çoğul mu?',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'İyelik sıfatları',
      basliklar: ['Sahip', 'Eril isim', 'Dişil isim', 'Çoğul isim'],
      satirlar: [
        ['ben', 'mon frère', 'ma sœur', 'mes parents'],
        ['sen', 'ton frère', 'ta sœur', 'tes parents'],
        ['o', 'son frère', 'sa sœur', 'ses parents'],
        ['biz', 'notre frère', 'notre sœur', 'nos parents'],
        ['siz', 'votre frère', 'votre sœur', 'vos parents'],
        ['onlar', 'leur frère', 'leur sœur', 'leurs parents'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Dikkat: biz, siz, onlar daha kolay',
      metin:
        'İlk üç kişide (ben, sen, o) eril ve dişil ayrı biçimdedir. Son üç kişide (biz, siz, onlar) cins ayrımı YOKTUR; yalnız tekil-çoğul ayrımı vardır.',
      maddeler: [
        'notre / votre / leur → tekil isim (cins fark etmez)',
        'nos / vos / leurs → çoğul isim',
        'Yani öğrenilecek asıl tablo ilk üç satırdır.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'İstisna: sesli harfle başlayan dişil isimler',
      yanlis: 'ma amie · ma école',
      dogru: 'mon amie · mon école',
      neden:
        'İki sesli harf yan yana gelince Fransızca telaffuzu zorlar. Bu yüzden dişil isim sesli harfle (ya da sessiz h ile) başlıyorsa "ma" yerine "mon" kullanılır. Kelime hâlâ DİŞİLDİR — yalnız iyelik sıfatı eril biçimde görünür.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Cinsiyet kaybolmadı, sadece gizlendi',
      dogal: 'mon amie est gentille (dişil sıfat: gentille)',
      yapay: 'mon amie est gentil (eril sıfat — yanlış)',
      aciklama:
        '"mon amie" gördüğünde kelimeyi eril sanma. Sıfat hâlâ dişil biçimde gelir. Bu, cinsiyetin sadece iyelik sıfatında gizlendiğini gösterir.',
    },
    {
      tur: 'kalip',
      baslik: 'Fotoğraf gösterirken',
      kaliplar: [
        { fr: 'Voici mon père.', kullanim: 'Tanıtma', ornek: 'Voici mon père, il est ingénieur.' },
        { fr: 'C’est ma sœur.', kullanim: 'Tanıtma (dişil)', ornek: 'C’est ma sœur, elle a douze ans.' },
        { fr: 'Ce sont mes parents.', kullanim: 'Çoğul tanıtma', ornek: 'Ce sont mes parents.' },
        { fr: 'Et toi ? Tu as des frères ?', kullanim: 'Topu geri atma', ornek: 'Et toi, tu as des frères et sœurs ?' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Fotoğraf albümü',
      metin:
        'Regarde, c’est une photo de ma famille.\nVoici mon père et ma mère. Ce sont mes parents.\nÀ côté, c’est ma sœur Elif et son amie Zeynep.\nEt là, c’est notre chien. Il s’appelle Karam.',
      sozluk: [
        { fr: 'à côté', tr: 'yanında' },
        { fr: 'et là', tr: 've işte orada' },
        { fr: 'une photo de', tr: '… fotoğrafı' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'İyelik sıfatını yaz (mon / ma / mes).',
      parcalar: [{ bosluk: 0 }, ' frère · ', { bosluk: 1 }, ' sœur · ', { bosluk: 2 }, ' parents'],
      havuz: ['mon', 'ma', 'mes'],
      cevaplar: [
        { kabul: ['mon'], ipucu: 'frère eril' },
        { kabul: ['ma'], ipucu: 'sœur dişil' },
        { kabul: ['mes'], ipucu: 'parents çoğul' },
      ],
    },
    {
      id: 'a1-m2-d4-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Elle parle avec sa frère.',
      hataliParca: 'sa frère',
      dogruParca: 'son frère',
      kabul: ['Elle parle avec son frère', 'son frère', 'son frere'],
      aciklama: 'Özne kadın olsa bile iyelik sıfatı İSMİN cinsine uyar; "frère" eril olduğu için "son".',
      tuzaklar: [
        {
          kod: 'iyelik-sahibe-uydurma',
          desen: /\b(sa)\s+(frère|frere|père|pere|fils|livre|stylo|sac|chien|chat)\b/i,
          baslik: 'İyelik sıfatı sahibe uydurulmuş',
          aciklama: 'Türkçede sahibin cinsiyeti hiç görünmez ve öğrenci Fransızcada onu göstermeye çalışır. Oysa Fransızcada da sahibin cinsi görünmez; iyelik sıfatı İSMİN cinsine uyar.',
          dogru: 'son frère (sahibi kadın da olsa erkek de olsa)',
          mikro: { yonerge: '"Onun (kadının) kitabı" ifadesini yaz.', kabul: ['son livre'] },
        },
      ],
    },
    {
      id: 'a1-m2-d4-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"benim (kız) arkadaşım" nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'mon amie' },
        { id: 'b', metin: 'ma amie' },
        { id: 'c', metin: 'm’amie' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'İki sesli yan yana gelemez; dişil olsa bile "mon" kullanılır.',
        c: 'İyelik sıfatlarında elizyon yapılmaz.',
      },
      aciklama: 'Kelime hâlâ dişildir: "mon amie est gentille" (dişil sıfat).',
    },
    {
      id: 'a1-m2-d4-a4',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'İyelik sıfatını doğru isimle eşleştir.',
      sol: [
        { id: 'i1', metin: 'notre' },
        { id: 'i2', metin: 'nos' },
        { id: 'i3', metin: 'leur' },
        { id: 'i4', metin: 'leurs' },
      ],
      sag: [
        { id: 'j1', metin: 'maison (bizim, tekil)' },
        { id: 'j2', metin: 'parents (bizim, çoğul)' },
        { id: 'j3', metin: 'voiture (onların, tekil)' },
        { id: 'j4', metin: 'enfants (onların, çoğul)' },
      ],
      eslesme: { i1: 'j1', i2: 'j2', i3: 'j3', i4: 'j4' },
      aciklama: 'Son üç kişide cins ayrımı yoktur; yalnız tekil-çoğul ayrımı vardır.',
    },
    {
      id: 'a1-m2-d4-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Doğru iyelik sıfatını yaz.',
      parcalar: ['Ali parle de ', { bosluk: 0 }, ' sœur et de ', { bosluk: 1 }, ' amie.'],
      cevaplar: [
        { kabul: ['sa'], ipucu: 'sœur dişil, sessizle başlıyor' },
        { kabul: ['son'], ipucu: 'amie dişil ama sesliyle başlıyor' },
      ],
      aciklama: 'Aynı cümlede iki dişil isim, iki farklı iyelik sıfatı: fark, kelimenin sesli harfle başlayıp başlamamasıdır.',
    },
    {
      id: 'a1-m2-d4-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Ailenin fotoğrafını gösteriyorsun ve anne babanı tanıtıyorsun.',
      kabul: ['Ce sont mes parents', 'Voici mes parents', 'C’est mon père et ma mère'],
      ornekCevap: 'Ce sont mes parents.',
    },
    {
      id: 'a1-m2-d4-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Où habitent tes parents ?',
      kabul: ['Mes parents habitent', 'Ils habitent', 'Mes parents habitent à'],
      ornekCevap: 'Mes parents habitent à Bursa.',
    },
  ],

  ozet: [
    'İyelik sıfatı SAHİBİN değil, SAHİP OLUNAN ŞEYİN cinsine uyar.',
    'mon / ma / mes · ton / ta / tes · son / sa / ses.',
    'notre / votre / leur → tekil · nos / vos / leurs → çoğul (cins fark etmez).',
    '"son frère" hem erkeğin hem kadının kardeşi olabilir; sahibin cinsi görünmez.',
    'Sesli harfle başlayan dişil isimlerde "ma" değil "mon" kullanılır: mon amie.',
    'Bu istisnada kelime hâlâ dişildir; sıfat dişil gelir: mon amie est gentille.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Elif parle avec ', { bosluk: 0 }, ' mère.'],
      cevaplar: [{ kabul: ['sa'], ipucu: 'mère dişil, sessizle başlıyor' }],
    },
    {
      id: 'a1-m2-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"onların çocukları" nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'leurs enfants' },
        { id: 'b', metin: 'leur enfants' },
        { id: 'c', metin: 'ses enfants' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Çoğul isimde "leurs" olur.',
        c: '"ses" tek bir sahibi gösterir (onun).',
      },
    },
    {
      id: 'a1-m2-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Kız kardeşini ve onun arkadaşını tanıt.',
      kabul: ['C’est ma sœur', "C'est ma soeur", 'Voici ma sœur', 'Ma sœur'],
      ornekCevap: 'C’est ma sœur Elif. Et voici son amie Zeynep.',
    },
  ],

  kartlar: ['fr-famille', 'fr-pere', 'fr-mere', 'fr-soeur', 'fr-ami'],
  not: null,
  sonraki: 'a1-m2-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
