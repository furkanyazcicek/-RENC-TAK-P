/**
 * DERS — A1 / Modül 3 / Ders 6
 * "Sıklık, günler ve bir günümü anlatan metin"
 *
 * Modülün kapanışı. İki küçük ama sınavda ölçülen konu verilir:
 *  1. GÜN ADLARI küçük harfle yazılır ve artikel alır. "los lunes" =
 *     "pazartesileri" demektir; artikel burada bir zaman kalıbıdır.
 *  2. SIKLIK ZARFLARININ YERİ. Türkçede zarf serbesttir; İspanyolcada
 *     fiilin çevresinde belirli yerlerde durur.
 *
 * Ders bir yazma göreviyle kapanır: bir günü baştan sona anlatan bağlantılı
 * metin. Modülün altı dersi burada birleşir.
 */

export default {
  id: 'a1-m3-d6',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 6,
  baslik: 'Sıklık, günler ve bir günümü anlatan metin',
  altBaslik: '"los lunes" neden çoğul, zarf nereye gider',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'kelime', 'dizim'],
  amac: 'Bu dersin sonunda gün adlarını doğru yazabilecek, sıklık zarflarını doğru yere koyabilecek ve bir gününü baştan sona anlatan bağlantılı bir metin yazabileceksin.',
  kazanim: 'Gün adlarını küçük harfle ve artikelle kullanır; sıklık zarflarını doğru yerleştirir; sıra bağlaçlarıyla bağlantılı bir metin üretir.',
  onKosullar: ['a1-m3-d5'],
  sure: 18,
  baglam: {
    durum: 'Sınıf blogunda "Mi día" başlıklı kısa bir yazı yazacaksın.',
    neden: 'Bir günü anlatmak, A1 yazma sınavlarının iki klasik görevinden biridir. Ayrıca modülün bütün fiil bilgisini tek metinde çalıştırır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Gün adları küçük harfle yazılır',
      metin:
        'Türkçede ve İngilizcede gün adları büyük harfle yazılır. İspanyolcada küçük harfle yazılır — aylar da öyle. Bu, yazma bölümünde sık düşülen bir tuzaktır.',
      maddeler: [
        'lunes, martes, miércoles, jueves, viernes, sábado, domingo',
        'Aylar da küçüktür: enero, febrero, marzo…',
        'Yalnız sábado ve domingo çoğulda -s alır: los sábados, los domingos',
        'Diğerleri zaten -s ile biter ve değişmez: los lunes, los martes',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Artikel zamanın anlamını değiştirir',
      metin:
        'Gün adının önündeki artikel, "hangi gün" bilgisini "ne sıklıkta" bilgisine çevirir. Bu küçük fark cümlenin anlamını tamamen değiştirir.',
      maddeler: [
        'el lunes → önümüzdeki pazartesi (bir kez)',
        'los lunes → pazartesileri (her hafta)',
        'Hoy es lunes. → Bugün pazartesi. (artikel YOK, çünkü tarih bildiriyor)',
        'Kural: "ne zaman" derken artikel var, "bugün hangi gün" derken yok.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Sıklık zarfları ve yerleri',
      basliklar: ['Zarf', 'Türkçe', 'Yeri'],
      satirlar: [
        ['siempre', 'her zaman', 'Fiilden önce: Siempre desayuno.'],
        ['normalmente', 'genellikle', 'Cümle başında: Normalmente estudio por la tarde.'],
        ['a veces', 'bazen', 'Cümle başında ya da sonda'],
        ['casi nunca', 'neredeyse hiç', 'Fiilden önce'],
        ['nunca', 'asla', 'Fiilden önce (no gerekmez)'],
        ['todos los días', 'her gün', 'Genelde cümle sonunda'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Los Lunes voy a la piscina. / Estudio siempre.',
      dogru: 'Los lunes voy a la piscina. / Siempre estudio.',
      neden:
        'İki ayrı hata: gün adı büyük yazılmış ve sıklık zarfı yanlış yere konmuş. "Estudio siempre" dilbilgisi olarak yanlış değildir ama vurguyu değiştirir; standart yer fiilden öncedir.',
    },
    {
      tur: 'kalip',
      baslik: 'Metni bağlayan kelimeler',
      kaliplar: [
        { es: 'primero', kullanim: 'önce, ilk olarak', ornek: 'Primero me ducho.' },
        { es: 'luego / después', kullanim: 'sonra', ornek: 'Luego desayuno.' },
        { es: 'entonces', kullanim: 'o zaman, ardından', ornek: 'Entonces salgo de casa.' },
        { es: 'finalmente', kullanim: 'sonunda', ornek: 'Finalmente me acuesto.' },
        { es: 'pero', kullanim: 'ama', ornek: 'Estudio mucho, pero los domingos descanso.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Liste mi, anlatı mı?',
      dogal: 'Me levanto a las siete. Luego me ducho y desayuno. Después salgo de casa.',
      yapay: 'Me levanto a las siete. Me ducho. Desayuno. Salgo de casa.',
      aciklama:
        'İkinci metinde bütün cümleler doğrudur ama metin bir liste gibi durur. Bağlaç eklemek A1 yazma sınavında doğrudan puandır: değerlendirme ölçütlerinde "bağlantılı metin" ayrı bir maddedir.',
    },
    {
      tur: 'okuma',
      baslik: 'Örnek metin: Mi día',
      metin:
        'Normalmente me despierto a las seis y media, pero me levanto a las siete. Primero me ducho y me visto. Luego desayuno con mi hermana: bebo té y como pan con queso.\n\nSalgo de casa a las siete y media y voy al colegio en autobús. Las clases empiezan a las ocho y terminan a las tres. Como en el colegio con mis amigos.\n\nPor la tarde hago los deberes y estudio español. A veces juego al fútbol con mis primos. Los sábados no estudio: voy al cine o me quedo en casa.\n\nFinalmente, me acuesto a las once. ¡Es un día largo!',
      sozluk: [
        { es: 'terminar', tr: 'bitmek' },
        { es: 'quedarse en casa', tr: 'evde kalmak' },
        { es: 'largo', tr: 'uzun' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Yazmadan önce günü üçe böl: MAÑANA, TARDE, NOCHE. Her bölüme iki cümle yaz ve aralarına bir bağlaç koy. Bu iskelet, metnin hem bağlantılı hem dengeli olmasını sağlar.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d6-a1',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Yazım hatasını bul ve düzelt.',
      cumle: 'Los Sábados voy al cine.',
      hataliParca: 'Sábados',
      dogruParca: 'sábados',
      kabul: ['sábados', 'sabados'],
      aciklama: 'Gün ve ay adları İspanyolcada küçük harfle yazılır.',
    },
    {
      id: 'a1-m3-d6-a2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Anlamı doğru veren cümleyi seç.',
      soru: '"Pazartesileri yüzmeye gidiyorum" nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Los lunes voy a la piscina.' },
        { id: 'b', metin: 'El lunes voy a la piscina.' },
        { id: 'c', metin: 'Lunes voy a la piscina.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bu "önümüzdeki pazartesi" demektir; bir kerelik.',
        c: 'Artikel eksik.',
      },
      aciklama: 'Çoğul artikel tekrarı anlatır: los lunes = her pazartesi.',
    },
    {
      id: 'a1-m3-d6-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['Siempre', 'desayuno', 'con', 'mi', 'familia'],
      dogruSira: [0, 1, 2, 3, 4],
      ipucu: 'Sıklık zarfı fiilden önce durur.',
      aciklama: 'Sıklık zarfının standart yeri fiilden öncedir; sona atılırsa vurgu değişir.',
    },
    {
      id: 'a1-m3-d6-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Bağlaçları yerleştir.',
      parcalar: ['Me levanto a las siete. ', { bosluk: 0 }, ' me ducho y desayuno. ', { bosluk: 1 }, ' salgo de casa.'],
      cevaplar: [
        { kabul: ['Luego', 'luego', 'Primero', 'Después', 'después'], ipucu: 'sıra bildiren bağlaç' },
        { kabul: ['Después', 'después', 'Luego', 'luego', 'Entonces', 'entonces'], ipucu: 'sonraki adım' },
      ],
      aciklama: 'Bağlaçlar metni listeden anlatıya çevirir ve yazma puanını doğrudan etkiler.',
    },
    {
      id: 'a1-m3-d6-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Bugünün salı olduğunu söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Hoy es martes.', dogal: true, neden: 'Doğru. Tarih bildirirken artikel kullanılmaz.' },
        { id: 'b', metin: 'Hoy es el martes.', dogal: false, neden: 'Tarih bildiriminde artikel gelmez.' },
        { id: 'c', metin: 'Hoy son los martes.', dogal: false, neden: 'Bu "her salı" anlamına gelir ve fiil de yanlış.' },
      ],
      aciklama: 'Kural: "hangi gün" → artikelsiz. "ne zaman / ne sıklıkta" → artikelli.',
    },
    {
      id: 'a1-m3-d6-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Bir gününü anlatan metin yaz. Aşamaları sırayla tamamla.',
      gorev: 'Sınıf blogu için "Mi día" başlıklı kısa bir yazı yaz.',
      ornekMetin: 'Normalmente me levanto a las siete. Primero me ducho y luego desayuno. Salgo de casa a las siete y media y voy al colegio en autobús. Las clases empiezan a las ocho. Por la tarde hago los deberes y a veces juego al fútbol. Los sábados no estudio. Finalmente me acuesto a las once.',
      kaliplar: ['Me levanto a las…', 'Primero…', 'Luego…', 'Por la tarde…', 'Los sábados…', 'Finalmente…'],
      asamalar: [
        'Sabahını anlat: kaçta kalkıyorsun, ne yapıyorsun (en az iki dönüşlü fiil).',
        'Okula/işe nasıl ve kaçta gittiğini yaz.',
        'Öğleden sonranı anlat ve bir sıklık zarfı kullan.',
        'Hafta sonunun farkını söyle ("los sábados…").',
        'Günü kapat: kaçta yatıyorsun. Bağlaçlarla cümleleri bağla.',
      ],
      olcut: [
        'En az sekiz cümle var mı?',
        'En az iki dönüşlü fiil doğru ekle kullanılmış mı?',
        'En az üç saat bilgisi "a las…" ile verilmiş mi?',
        'En az iki sıra bağlacı (primero/luego/después/finalmente) var mı?',
        'Gün adları küçük harfle yazılmış mı?',
      ],
      enAzKelime: 55,
      aranan: [
        { etiket: 'Dönüşlü fiil', desen: 'me levanto|me ducho|me acuesto|me despierto' },
        { etiket: 'Saat', desen: 'a las' },
        { etiket: 'Bağlaç', desen: 'primero|luego|después|finalmente|entonces' },
        { etiket: 'Sıklık', desen: 'siempre|normalmente|a veces|nunca|todos los días' },
      ],
      aciklama: 'Bu görev modülün bütün kazanımlarını birleştirir: üç fiil grubu, dönüşlüler, düzensizler, saat ve sıklık.',
    },
  ],

  ozet: [
    'Gün ve ay adları küçük harfle yazılır.',
    'el lunes = önümüzdeki pazartesi · los lunes = pazartesileri.',
    'Tarih bildirirken artikel kullanılmaz: Hoy es lunes.',
    'Sıklık zarfları genelde fiilden önce durur.',
    'nunca fiilden önce gelirse "no" gerekmez.',
    'primero, luego, después, finalmente metni bağlar ve puan getirir.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d6-s1',
      tur: 'coktan-secmeli',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Doğru yazımı seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'Los viernes voy al cine.' },
        { id: 'b', metin: 'Los Viernes voy al cine.' },
        { id: 'c', metin: 'Viernes voy al cine.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Gün adı küçük yazılır.', c: 'Artikel eksik.' },
    },
    {
      id: 'a1-m3-d6-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Sıklık zarfını doğru yere koy: (siempre)',
      parcalar: [{ bosluk: 0 }, ' desayuno en casa.'],
      cevaplar: [{ kabul: ['Siempre', 'siempre'], ipucu: 'Fiilden önce.' }],
    },
    {
      id: 'a1-m3-d6-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Hafta sonları ne yaptığını anlat.',
      kabul: ['Los sábados', 'Los domingos', 'los sábados', 'los fines de semana'],
      ornekCevap: 'Los sábados voy al cine. Los domingos estudio por la mañana.',
    },
  ],

  kartlar: ['es-siempre', 'es-nunca', 'es-a-veces', 'es-dia', 'es-fin-de-semana'],
  not: 'not-a1-m3-calisma',
  sonraki: 'a1-m4-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
