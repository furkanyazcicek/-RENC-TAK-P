/**
 * DESTE — MÜZİK, DİZİ VE FİLM (Fransızca)
 *
 * Öğrencinin zaten tükettiği içerikten gelen kelimeler. Bir dizi altyazısında
 * ya da şarkı sözünde karşısına çıkan kelime, ders kitabındaki kelimeden
 * daha kolay yerleşir.
 */

export const DESTE = {
  id: 'muzik-dizi',
  dil: 'fr',
  ad: 'Müzik, dizi ve film',
  simge: '🎬',
  aciklama: 'Şarkı sözlerinde, altyazılarda ve dizi konuşmalarında duyacakların.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'fr-muz-01', on: 'la chanson', okunus: 'la şanson', tur: 'isim',
      arka: 'şarkı',
      ornek: "Cette chanson est dans ma tête depuis ce matin.",
      ornekTr: 'Bu şarkı sabahtan beri aklımda.',
      not: 'Şarkıcı "le chanteur / la chanteuse", söylemek "chanter".',
    },
    {
      id: 'fr-muz-02', on: 'les paroles', okunus: 'le parol', tur: 'isim (çoğul)',
      arka: 'şarkı sözleri',
      ornek: "Je ne comprends pas les paroles de cette chanson.",
      ornekTr: 'Bu şarkının sözlerini anlamıyorum.',
      not: 'Tekili "une parole" = söz. Şarkı sözü için HER ZAMAN çoğul kullanılır.',
    },
    {
      id: 'fr-muz-03', on: 'la série', okunus: 'la seri', tur: 'isim',
      arka: 'dizi',
      ornek: "J'ai regardé toute la série en un week-end.",
      ornekTr: 'Bütün diziyi bir hafta sonunda izledim.',
      not: 'Bölüm "un épisode", sezon "une saison".',
    },
    {
      id: 'fr-muz-04', on: 'le film', okunus: 'lö film', tur: 'isim',
      arka: 'film',
      ornek: "Le film dure deux heures.",
      ornekTr: 'Film iki saat sürüyor.',
      not: 'İzlemek "regarder"dır. Sinemada izlemek: "voir un film".',
    },
    {
      id: 'fr-muz-05', on: 'les sous-titres', okunus: 'le su-titr', tur: 'isim (çoğul)',
      arka: 'altyazı',
      ornek: "Je regarde avec les sous-titres en français.",
      ornekTr: 'Fransızca altyazıyla izliyorum.',
      not: '"sous" (alt) + "titre" (başlık). Dil öğrenirken en işe yarayan ayar.',
    },
    {
      id: 'fr-muz-06', on: "l'histoire", okunus: 'listuar', tur: 'isim (dişil)',
      arka: 'hikâye; tarih',
      ornek: "L'histoire de ce film est vraiment bizarre.",
      ornekTr: 'Bu filmin hikâyesi gerçekten tuhaf.',
      not: 'Aynı kelime hem "hikâye" hem "tarih" demektir; bağlam ayırır.',
    },
    {
      id: 'fr-muz-07', on: 'écouter', okunus: 'ekute', tur: 'fiil',
      arka: 'dinlemek',
      ornek: "J'écoute de la musique française pour apprendre.",
      ornekTr: 'Öğrenmek için Fransızca müzik dinliyorum.',
      not: '"entendre" duymak, "écouter" bilerek dinlemektir.',
    },
    {
      id: 'fr-muz-08', on: 'la voix', okunus: 'la vua', tur: 'isim (dişil)',
      arka: 'ses (insan sesi)',
      ornek: "Elle a une voix incroyable.",
      ornekTr: 'İnanılmaz bir sesi var.',
      not: 'Sondaki "x" okunmaz. Cihaz sesi için "le son" kullanılır.',
    },
    {
      id: 'fr-muz-09', on: 'le personnage', okunus: 'lö personaj', tur: 'isim',
      arka: 'karakter (film/dizi)',
      ornek: "Mon personnage préféré meurt à la fin.",
      ornekTr: 'En sevdiğim karakter sonda ölüyor.',
      not: 'Kişilik anlamındaki karakter ise "le caractère"dır. İkisi karışır.',
    },
    {
      id: 'fr-muz-10', on: 'ça déchire', okunus: 'sa deşir', tur: 'kalıp (günlük)',
      arka: 'harika, çok iyi (argo)',
      ornek: "Leur nouvel album, ça déchire !",
      ornekTr: 'Yeni albümleri harika!',
      not: 'Gençler arasında çok yaygın. Resmî ortamda kullanılmaz.',
    },
  ],
}

export default DESTE
