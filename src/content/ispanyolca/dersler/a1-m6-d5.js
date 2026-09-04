/**
 * DERS — A1 / Modül 6 / Ders 5
 * "Hafta sonumu anlatıyorum — A1 kapanışı"
 *
 * A1 seviyesinin son dersi. Yeni gramer yoktur; altı modülün tamamı tek
 * bir anlatı metninde birleşir.
 *
 * Ders bir HİKÂYE KURMA becerisi öğretir: geçmiş zamanlı bir metin sırf
 * fiil çekiminden ibaret değildir; zaman belirteçleri, sıra bağlaçları ve
 * bir değerlendirme cümlesi olmadan metin liste gibi durur. Bu iskelet
 * A2'de imperfecto eklendiğinde de aynen kullanılacak.
 *
 * Kapanışta öğrenciye A1'de ne kazandığı açıkça listelenir; bu, motivasyon
 * için değil, ÖLÇME için gereklidir: öğrenci neyi bildiğini bilmelidir.
 */

export default {
  id: 'a1-m6-d5',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 5,
  baslik: 'Hafta sonumu anlatıyorum — A1 kapanışı',
  altBaslik: 'Geçmiş zamanlı bir anlatı kur ve A1\'i tamamla',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'okuma', 'dusunme', 'gramer'],
  amac: 'Bu dersin sonunda geçmiş zamanlı, bağlantılı ve değerlendirmeli bir anlatı yazabilecek ve A1 seviyesindeki bütün yapıları bir arada kullanabileceksin.',
  kazanim: 'Geçmiş zamanlı bir anlatıyı zaman belirteçleri ve bağlaçlarla kurar; anlatıyı bir değerlendirme cümlesiyle kapatır.',
  onKosullar: ['a1-m6-d4'],
  sure: 18,
  baglam: {
    durum: 'Sınıf blogunda "Mi fin de semana" başlıklı bir yazı paylaşacaksın.',
    neden: 'Geçmişi anlatmak A1\'in son ve en kapsamlı becerisidir. Bu görev, seviyenin bütün kazanımlarını tek metinde ölçer.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Anlatının dört parçası',
      metin:
        'Geçmiş zamanlı bir metin yalnız çekilmiş fiillerden oluşmaz. İyi bir anlatının dört parçası vardır ve dördü de puanlanır.',
      maddeler: [
        '1. ZAMAN ÇERÇEVESİ → "El sábado pasado…", "El domingo…"',
        '2. OLAYLAR → geçmiş zamanlı fiiller, sırayla',
        '3. BAĞLAÇLAR → primero, luego, después, y, pero, porque',
        '4. DEĞERLENDİRME → "Lo pasé muy bien." / "Fue un fin de semana tranquilo."',
        'Dördüncü parça en çok atlanan ve en kolay puandır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'A1\'de öğrendiğin yapılar — kapanış listesi',
      basliklar: ['Modül', 'Ana yapı', 'Örnek'],
      satirlar: [
        ['M1', 'ser, özne düşmesi, sayılar, tener', 'Soy turco. Tengo quince años.'],
        ['M2', 'cinsiyet, artikel, iyelik, sıfat uyumu', 'Mi hermana es alta.'],
        ['M3', 'üç fiil grubu, dönüşlüler, saat', 'Me levanto a las siete.'],
        ['M4', 'estar, ser/estar ayrımı, yer edatları', 'El banco está al lado del museo.'],
        ['M5', 'gustar, muy/mucho, miktar, fiyat', 'Me gustan las frutas.'],
        ['M6', 'hobiler, geçmiş zaman, hava durumu', 'Ayer fui al cine.'],
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Örnek metin: Mi fin de semana',
      metin:
        'El sábado pasado me levanté tarde, a las diez. Primero desayuné con mi familia y luego estudié español dos horas.\n\nPor la tarde fui al centro con mis amigos. Hizo muy buen tiempo, así que caminamos mucho. Comimos una pizza en un restaurante pequeño; estuvo muy buena. Después fuimos al cine y vimos una película muy divertida.\n\nEl domingo no salí porque llovió todo el día. Me quedé en casa, leí un libro y escuché música. Por la noche hice los deberes.\n\nFue un fin de semana tranquilo, pero lo pasé muy bien.',
      sozluk: [
        { es: 'así que', tr: 'bu yüzden' },
        { es: 'caminar', tr: 'yürümek' },
        { es: 'quedarse en casa', tr: 'evde kalmak' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Değerlendirme cümlesi metni bitirir',
      dogal: '… Después fuimos al cine. Fue un fin de semana tranquilo, pero lo pasé muy bien.',
      yapay: '… Después fuimos al cine. El domingo estudié.',
      aciklama:
        'İkinci metin aniden biter ve okuyucuda "devamı var mı?" hissi bırakır. Bir değerlendirme cümlesi metni kapatır ve A1 yazma ölçütlerinde ayrı bir madde olarak puanlanır. Üç kalıp yeter: "Lo pasé muy bien.", "Fue muy divertido.", "Fue un día largo."',
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'El sábado voy al cine y como una pizza.',
      dogru: 'El sábado fui al cine y comí una pizza.',
      neden:
        'Zaman belirteci geçmişi gösterirken fiiller şimdiki zamanda kalmış. Bu, geçmiş anlatılarda en sık yapılan hatadır: öğrenci ilk cümlede zamanı doğru kurar, sonra farkında olmadan şimdiki zamana kayar. Yazdıktan sonra bütün fiilleri tek tek kontrol et.',
    },
    {
      tur: 'kalip',
      baslik: 'Anlatı kalıpları',
      kaliplar: [
        { es: 'El sábado pasado…', kullanim: 'Zaman çerçevesi', ornek: 'El sábado pasado me levanté tarde.' },
        { es: 'Primero… luego… después…', kullanim: 'Sıra', ornek: 'Primero desayuné, luego estudié.' },
        { es: 'así que…', kullanim: 'Sonuç', ornek: 'Hizo buen tiempo, así que salimos.' },
        { es: 'no… porque…', kullanim: 'Gerekçe', ornek: 'No salí porque llovió.' },
        { es: 'Lo pasé muy bien.', kullanim: 'Değerlendirme', ornek: 'Fue tranquilo, pero lo pasé muy bien.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Yazdıktan sonra metnini SONDAN BAŞA oku ve yalnız fiillere bak. Her fiil geçmiş zamanda mı? Bu tek kontrol, geçmiş anlatılarındaki hataların çoğunu yakalar.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d5-a1',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Zaman uyumsuzluğunu bul ve düzelt.',
      cumle: 'El sábado pasado voy al cine con mis amigos.',
      hataliParca: 'voy',
      dogruParca: 'fui',
      kabul: ['fui'],
      aciklama: '"El sábado pasado" geçmiş zamanı zorunlu kılar; fiil de geçmişe çekilmelidir.',
    },
    {
      id: 'a1-m6-d5-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Fiilleri geçmiş zamanda çek.',
      parcalar: ['El domingo ', { bosluk: 0 }, ' (yo/quedarse) en casa porque ', { bosluk: 1 }, ' (llover) todo el día.'],
      cevaplar: [
        { kabul: ['me quedé', 'me quede'], ipucu: 'dönüşlü fiil, birinci tekil' },
        { kabul: ['llovió', 'llovio'], ipucu: 'hava fiili, üçüncü tekil' },
      ],
      aciklama: 'Dönüşlü ek geçmiş zamanda da fiilden önce kalır: me quedé, te quedaste, se quedó.',
    },
    {
      id: 'a1-m6-d5-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Anlatıyı doğru sıraya diz.',
      parcalar: ['El sábado me levanté tarde.', 'Primero desayuné con mi familia.', 'Por la tarde fui al cine.', 'Fue un día muy divertido.'],
      dogruSira: [0, 1, 2, 3],
      ipucu: 'Değerlendirme cümlesi en sonda durur.',
      aciklama: 'Anlatı sırası: zaman çerçevesi → olaylar → değerlendirme. Bu iskelet A2\'de de aynen kullanılır.',
    },
    {
      id: 'a1-m6-d5-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Bağlaçları yerleştir.',
      parcalar: ['Hizo buen tiempo, ', { bosluk: 0 }, ' salimos. No fui al parque ', { bosluk: 1 }, ' llovió por la tarde.'],
      cevaplar: [
        { kabul: ['así que', 'asi que'], ipucu: 'sonuç bildirir' },
        { kabul: ['porque'], ipucu: 'sebep bildirir' },
      ],
      aciklama: '"así que" sonucu, "porque" sebebi verir. İkisi metni hem bağlar hem mantığını gösterir.',
    },
    {
      id: 'a1-m6-d5-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Metni hangisiyle kapatırsın? Gerekçeleri oku.',
      baglam: 'Hafta sonu anlatını bitiriyorsun.',
      secenekler: [
        { id: 'a', metin: 'Fue un fin de semana tranquilo, pero lo pasé muy bien.', dogal: true, neden: 'Doğru. Hem değerlendirme hem karşıtlık içeriyor; metni kapatıyor.' },
        { id: 'b', metin: 'El domingo estudié dos horas.', dogal: false, neden: 'Bu bir olay cümlesidir; metin aniden biter.' },
        { id: 'c', metin: 'Mi fin de semana es muy bueno.', dogal: false, neden: 'Zaman uyumsuz: geçmiş anlatı şimdiki zamanla kapatılmış.' },
      ],
      aciklama: 'Kapanış cümlesi kısa olabilir ama geçmiş zamanda olmalı ve bir yorum taşımalıdır.',
    },
    {
      id: 'a1-m6-d5-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Hafta sonunu anlatan bir metin yaz. Aşamaları sırayla tamamla.',
      gorev: 'Sınıf blogu için "Mi fin de semana" başlıklı bir yazı yaz.',
      ornekMetin: 'El sábado pasado me levanté tarde. Primero desayuné con mi familia y luego estudié español. Por la tarde fui al centro con mis amigos. Hizo buen tiempo, así que caminamos mucho. Comimos una pizza y después fuimos al cine. El domingo no salí porque llovió todo el día: leí un libro y escuché música. Fue un fin de semana tranquilo, pero lo pasé muy bien.',
      kaliplar: ['El sábado pasado…', 'Primero… luego…', 'Por la tarde…', 'así que…', 'porque…', 'Lo pasé muy bien.'],
      asamalar: [
        'Zaman çerçevesiyle başla ("El sábado pasado…").',
        'Cumartesi gününü anlat: en az üç geçmiş zamanlı fiil kullan.',
        'Havanın nasıl olduğunu ekle ve "así que" ile bir sonuç bağla.',
        'Pazar gününü anlat ve bir gerekçe ("porque") kullan.',
        'Metni bir değerlendirme cümlesiyle kapat.',
      ],
      olcut: [
        'En az sekiz cümle var mı?',
        'Bütün fiiller geçmiş zamanda mı?',
        'En az bir düzensiz geçmiş (fui / hice / estuve) kullanılmış mı?',
        'En az üç bağlaç var mı?',
        'Metin bir değerlendirme cümlesiyle kapanıyor mu?',
      ],
      enAzKelime: 60,
      aranan: [
        { etiket: 'Zaman çerçevesi', desen: 'pasado|ayer|anoche' },
        { etiket: 'Düzensiz geçmiş', desen: '\\bfui\\b|\\bfue\\b|hice|hizo|estuve|tuve' },
        { etiket: 'Bağlaç', desen: 'primero|luego|después|porque|así que|pero' },
        { etiket: 'Değerlendirme', desen: 'lo pasé|fue un|fue muy' },
      ],
      aciklama: 'Bu görev A1 seviyesinin kapanış ölçümüdür; altı modülün kazanımını tek metinde birleştirir.',
    },
  ],

  ozet: [
    'Anlatının dört parçası: zaman çerçevesi, olaylar, bağlaçlar, değerlendirme.',
    'Zaman belirteci geçmişse bütün fiiller geçmiş olmalıdır.',
    'Dönüşlü ek geçmişte de fiilden önce kalır: me quedé.',
    '"así que" sonuç, "porque" sebep bildirir.',
    'Metni bir değerlendirme cümlesiyle kapat: "Lo pasé muy bien."',
    'Yazdıktan sonra sondan başa okuyup yalnız fiilleri kontrol et.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d5-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili geçmiş zamanda çek.',
      parcalar: ['El domingo ', { bosluk: 0 }, ' (yo/leer) un libro.'],
      cevaplar: [{ kabul: ['leí', 'lei'], ipucu: 'birinci tekil' }],
    },
    {
      id: 'a1-m6-d5-s2',
      tur: 'coktan-secmeli',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Metni kapatmak için en uygun cümleyi seç.',
      soru: 'Hafta sonu anlatını bitiriyorsun.',
      secenekler: [
        { id: 'a', metin: 'Lo pasé muy bien.' },
        { id: 'b', metin: 'Lo paso muy bien.' },
        { id: 'c', metin: 'Voy a pasarlo bien.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Şimdiki zaman; anlatı geçmişte.', c: 'Gelecek plan bildirir.' },
    },
    {
      id: 'a1-m6-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Geçen cumartesi ne yaptığını anlat ve bir yorumla bitir.',
      kabul: ['El sábado', 'Fui', 'fui', 'Lo pasé'],
      ornekCevap: 'El sábado pasado fui al cine con mis amigos. Lo pasé muy bien.',
    },
  ],

  kartlar: ['es-ayer', 'es-fiesta', 'es-divertido', 'es-pasarlo-bien', 'es-fin-de-semana'],
  not: 'not-a1-m6-calisma',
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
