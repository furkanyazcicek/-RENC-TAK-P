/**
 * DERS — A1 / Modül 4 / Ders 3
 * "Yol tarifi ve emir kipi"
 *
 * Yol tarifi A1 dinleme sınavlarının değişmez sorusudur. Öğrencinin
 * emir kipini bütün kişilerde öğrenmesine gerek yoktur; gerçek hayatta
 * duyacağı biçim USTED emri (siga, gire, tome) ve arkadaşça TÚ emridir
 * (sigue, gira, toma). Ders bu iki biçimle sınırlı tutuldu — kapsamı
 * dar tutmak, öğrencinin gerçekten kullanabilmesini sağlar.
 *
 * Türkçe izi: Türkçede emir kipi yalnız fiil köküdür ("git", "dön").
 * İspanyolcada tú emri üçüncü tekil biçimine benzer ve bu şaşırtır.
 */

export default {
  id: 'a1-m4-d3',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 3,
  baslik: 'Yol tarifi ve emir kipi',
  altBaslik: 'Siga, gire, tome — sokakta duyacağın üç kelime',
  odakBeceri: 'dinleme',
  beceriler: ['dinleme', 'gramer', 'kelime'],
  amac: 'Bu dersin sonunda bir yol tarifini anlayabilecek, kendin tarif verebilecek ve emir kipinin usted ile tú biçimlerini ayırt edebileceksin.',
  kazanim: 'Yol tarifi kalıplarını anlar ve üretir; düzenli fiillerin usted ve tú emir biçimlerini kurar.',
  onKosullar: ['a1-m4-d2'],
  sure: 15,
  baglam: {
    durum: 'Madrid\'de kaybolmuşsun. Bir görevliye yol soruyorsun ve verdiği tarifi izlemen gerekiyor.',
    neden: 'Tarif ANLAMAK, tarif VERMEKTEN önce gelir. Sokakta sana usted emriyle konuşulur; bu biçimi tanımazsan doğru soruyu sorsan bile cevabı anlayamazsın.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Sokakta yalnız üç fiil duyarsın',
      metin:
        'Yol tarifi sanıldığı kadar geniş değildir. Neredeyse bütün tarifler üç fiil ve birkaç kalıptan kurulur.',
      maddeler: [
        'seguir → siga (usted) / sigue (tú) — devam edin',
        'girar → gire / gira — dönün',
        'tomar → tome / toma — (bir sokağa) girin',
        'cruzar → cruce / cruza — karşıya geçin',
        'Bunların yanında "todo recto" (dümdüz) ve "hasta" (…e kadar) kalıpları gelir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Emir kipi — düzenli fiiller',
      basliklar: ['Mastar', 'tú emri', 'usted emri'],
      satirlar: [
        ['tomar (-ar)', 'toma', 'tome'],
        ['girar (-ar)', 'gira', 'gire'],
        ['cruzar (-ar)', 'cruza', 'cruce'],
        ['seguir (-ir)', 'sigue', 'siga'],
        ['subir (-ir)', 'sube', 'suba'],
        ['perdonar (-ar)', 'perdona', 'perdone'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Kural: ünlüler yer değiştirir',
      metin:
        'Emir kipinde -ar grubu "e" alır, -er ve -ir grupları "a" alır. Yani mastarın ünlüsü tersine döner. Bu tek cümle, düzenli fiillerin emir biçimlerinin tamamını verir.',
      maddeler: [
        '-ar fiiller → usted emri -e: tomar → tome, girar → gire',
        '-er / -ir fiiller → usted emri -a: comer → coma, subir → suba',
        'tú emri ise üçüncü tekil biçimin aynısıdır: toma, come, sube',
        'Yazım kuralı: cruzar → cruce (z, e önünde c olur)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Perdona, ¿dónde está el banco? (tanımadığın yaşlı birine)',
      dogru: 'Perdone, ¿dónde está el banco?',
      neden:
        'Yol sorarken hitap seçimi doğrudan nezaket meselesidir. Tanımadığın bir yetişkine "perdona" demek fazla samimi kaçar; doğru biçim "perdone"dir. Aynı ayrım "disculpa / disculpe" için de geçerlidir.',
    },
    {
      tur: 'kalip',
      baslik: 'Yol tarifi kalıpları',
      kaliplar: [
        { es: 'Siga todo recto.', kullanim: 'Dümdüz devam edin', ornek: 'Siga todo recto hasta la plaza.' },
        { es: 'Gire a la derecha / izquierda.', kullanim: 'Sağa / sola dönün', ornek: 'Gire a la derecha en el semáforo.' },
        { es: 'Tome la primera calle.', kullanim: 'İlk sokağa girin', ornek: 'Tome la segunda calle a la izquierda.' },
        { es: 'Está a … minutos.', kullanim: 'Mesafe', ornek: 'Está a diez minutos a pie.' },
        { es: '¿Está lejos de aquí?', kullanim: 'Uzaklık sorma', ornek: 'Perdone, ¿está lejos de aquí?' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Mesafe: "a" edatı düşmez',
      dogal: 'Está a cinco minutos. · Está a dos calles de aquí.',
      yapay: 'Está cinco minutos. · Es a cinco minutos.',
      aciklama:
        'Mesafe bildirirken hem "estar" hem "a" zorunludur. Türkçede "beş dakika" derken edat yoktur; bu yüzden en sık düşen kelime "a"dır.',
    },
    {
      tur: 'dinleme',
      baslik: 'Tam bir yol tarifi',
      metin: 'Perdone, ¿dónde está el museo? Siga todo recto hasta la plaza. Luego gire a la izquierda y tome la segunda calle a la derecha. El museo está enfrente del banco. Está a diez minutos a pie.',
      satirlar: [
        { kisi: 'Turist', es: 'Perdone, ¿dónde está el museo?' },
        { kisi: 'Görevli', es: 'Siga todo recto hasta la plaza.' },
        { kisi: 'Görevli', es: 'Luego gire a la izquierda y tome la segunda calle a la derecha.' },
        { kisi: 'Görevli', es: 'El museo está enfrente del banco. Está a diez minutos a pie.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Tarif dinlerken kelimeleri değil YÖNLERİ takip et. Zihninde bir harita çiz: düz → sol → ikinci sokak → sağ. İspanyolca tariflerin sırası her zaman aynıdır ve bu sıra sana yol gösterir.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d3-a1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru anlamı seç.',
      soru: '"Siga todo recto" ne demektir?',
      secenekler: [
        { id: 'a', metin: 'Dümdüz devam edin.' },
        { id: 'b', metin: 'Sağa dönün.' },
        { id: 'c', metin: 'Geri dönün.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'O "gire a la derecha"dır.', c: 'O "vuelva"dır.' },
      aciklama: '"todo recto" tek kalıptır ve "dümdüz" demektir; "recto" tek başına da kullanılabilir.',
    },
    {
      id: 'a1-m4-d3-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'usted emrini yaz.',
      parcalar: [{ bosluk: 0 }, ' (girar) a la derecha y ', { bosluk: 1 }, ' (tomar) la primera calle.'],
      cevaplar: [
        { kabul: ['Gire', 'gire'], ipucu: '-ar fiil → -e' },
        { kabul: ['tome'], ipucu: '-ar fiil → -e' },
      ],
      aciklama: 'Kural tek satır: -ar fiiller usted emrinde -e alır.',
    },
    {
      id: 'a1-m4-d3-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Mastarı usted emriyle eşleştir.',
      sol: [
        { id: 's1', metin: 'seguir' },
        { id: 's2', metin: 'cruzar' },
        { id: 's3', metin: 'subir' },
        { id: 's4', metin: 'perdonar' },
      ],
      sag: [
        { id: 'g1', metin: 'siga' },
        { id: 'g2', metin: 'cruce' },
        { id: 'g3', metin: 'suba' },
        { id: 'g4', metin: 'perdone' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: '"cruzar" yazım kuralı gereği "cruce" olur: z harfi e önünde c\'ye döner.',
    },
    {
      id: 'a1-m4-d3-a4',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'El museo está cinco minutos de aquí.',
      hataliParca: 'está cinco',
      dogruParca: 'está a cinco',
      kabul: ['está a cinco', 'a cinco minutos'],
      aciklama: 'Mesafe bildiriminde "a" edatı zorunludur: está A cinco minutos.',
    },
    {
      id: 'a1-m4-d3-a5',
      tur: 'siralama',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Tarifi doğru sıraya diz.',
      parcalar: ['Siga todo recto hasta la plaza.', 'Gire a la izquierda.', 'Tome la segunda calle a la derecha.', 'El museo está enfrente del banco.'],
      dogruSira: [0, 1, 2, 3],
      ipucu: 'Tarifler genelde uzaktan yakına doğru ilerler ve hedefle biter.',
      aciklama: 'İspanyolca tarifler her zaman aynı sırayı izler: önce ana yön, sonra dönüşler, en sonda hedefin konumu.',
    },
    {
      id: 'a1-m4-d3-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümlelik bir tarif yaz.',
      durum: 'Bir turist sana en yakın eczanenin yerini soruyor.',
      kabul: ['Siga', 'Gire', 'siga', 'gire', 'Tome'],
      ornekCevap: 'Siga todo recto y gire a la derecha. La farmacia está al lado del banco.',
      yaklasimNotu: 'Turist seni tanımıyor; usted emrini kullan.',
      aciklama: 'Tarif verirken önce hareketi, sonra hedefin konumunu söylemek en anlaşılır sıradır.',
    },
  ],

  ozet: [
    'Yol tarifinin omurgası üç fiildir: seguir, girar, tomar.',
    'usted emri: -ar fiiller -e, -er/-ir fiiller -a alır.',
    'tú emri üçüncü tekil biçimle aynıdır: toma, gira, sigue.',
    'Tanımadığın kişiye "perdone / disculpe" denir.',
    'Mesafede "a" edatı zorunludur: está a cinco minutos.',
    '"todo recto" = dümdüz.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'usted emrini yaz.',
      parcalar: [{ bosluk: 0 }, ' (seguir) todo recto.'],
      cevaplar: [{ kabul: ['Siga', 'siga'], ipucu: '-ir fiil → -a' }],
    },
    {
      id: 'a1-m4-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Tanımadığın yaşlı bir kadına yol soracaksın. Nasıl başlarsın?',
      secenekler: [
        { id: 'a', metin: 'Perdone, ¿dónde está…?' },
        { id: 'b', metin: 'Perdona, ¿dónde está…?' },
        { id: 'c', metin: 'Lo siento, ¿dónde está…?' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Bu tú biçimidir, fazla samimi.', c: '"lo siento" özür dilemek içindir.' },
    },
    {
      id: 'a1-m4-d3-s3',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Duyduğun tarife göre doğru yönü seç.',
      seslendir: 'Gire a la izquierda y siga todo recto.',
      secenekler: [
        { id: 'a', metin: 'Sola dön, sonra düz devam et.' },
        { id: 'b', metin: 'Sağa dön, sonra düz devam et.' },
        { id: 'c', metin: 'Düz git, sonra sola dön.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"izquierda" sol demektir.', c: 'Sıra ters.' },
    },
  ],

  kartlar: ['es-seguir', 'es-girar', 'es-a-la-derecha', 'es-a-la-izquierda', 'es-calle'],
  not: null,
  sonraki: 'a1-m4-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
