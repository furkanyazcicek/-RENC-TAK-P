/**
 * DESTE — OKUL VE ARKADAŞLIK (İspanyolca)
 *
 * Öğrencinin kendi hayatı. İspanyolcada arkadaşlık dili sıcaktır ve
 * küçültme ekleri (-ito) çok kullanılır; kartlarda bu da gösterildi.
 */

export const DESTE = {
  id: 'okul-arkadaslik',
  dil: 'es',
  ad: 'Okul ve arkadaşlık',
  simge: '🎒',
  aciklama: 'Sınıfta, teneffüste ve arkadaş sohbetinde geçen kelimeler.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'es-oku-01', on: 'el instituto', okunus: 'el instituto', tur: 'isim (eril)',
      arka: 'lise',
      ornek: 'Estudio en un instituto público.',
      ornekTr: 'Devlet lisesinde okuyorum.',
      not: 'İspanya\'da lise "el instituto"dur; Latin Amerika\'da "la secundaria".',
    },
    {
      id: 'es-oku-02', on: 'el examen', okunus: 'el eksamen', tur: 'isim (eril)',
      arka: 'sınav',
      ornek: 'Mañana tengo un examen de matemáticas.',
      ornekTr: 'Yarın matematik sınavım var.',
      not: 'Çoğulu "los exámenes" — çoğulda AKSAN EKLENİR, düşmez.',
    },
    {
      id: 'es-oku-03', on: 'los deberes', okunus: 'los deberes', tur: 'isim (çoğul)',
      arka: 'ödev',
      ornek: 'Hago los deberes después de cenar.',
      ornekTr: 'Ödevlerimi akşam yemeğinden sonra yapıyorum.',
      not: 'Her zaman çoğuldur. Latin Amerika\'da "la tarea" (tekil) denir.',
    },
    {
      id: 'es-oku-04', on: 'el recreo', okunus: 'el rekreo', tur: 'isim (eril)',
      arka: 'teneffüs',
      ornek: '¡Nos vemos en el recreo!',
      ornekTr: 'Teneffüste görüşürüz!',
      not: '"Nos vemos" = görüşürüz; karşılıklı dönüşlü bir kalıptır.',
    },
    {
      id: 'es-oku-05', on: 'aprobar', okunus: 'aprobar', tur: 'fiil (kök değişimli)',
      arka: 'geçmek (sınavdan)',
      ornek: 'He aprobado el examen de inglés.',
      ornekTr: 'İngilizce sınavını geçtim.',
      not: 'Kök değişir: apruebo. Kalmak "suspender"dır.',
    },
    {
      id: 'es-oku-06', on: 'estudiar', okunus: 'estudyar', tur: 'fiil',
      arka: 'ders çalışmak; okumak (öğrenim)',
      ornek: 'Estudio para el examen todas las tardes.',
      ornekTr: 'Her öğleden sonra sınava çalışıyorum.',
      not: 'Metin okumak "leer"dir; ikisi Türkçede "okumak" olduğu için karışır.',
    },
    {
      id: 'es-oku-07', on: 'el compañero', okunus: 'el kompanyero', tur: 'isim (eril)',
      arka: 'sınıf arkadaşı',
      ornek: 'Mis compañeros de clase son muy simpáticos.',
      ornekTr: 'Sınıf arkadaşlarım çok cana yakın.',
      not: '"ñ" harfi "ny" okunur. Yakın arkadaş ise "el amigo"dur.',
    },
    {
      id: 'es-oku-08', on: 'llegar tarde', kok: 'llegar', okunus: 'yegar tarde', tur: 'kalıp',
      arka: 'geç kalmak',
      ornek: 'Perdona, he llegado tarde otra vez.',
      ornekTr: 'Kusura bakma, yine geç kaldım.',
      not: 'Erken gelmek "llegar temprano". "ll" → "y" okunur.',
    },
    {
      id: 'es-oku-09', on: 'quedar con alguien', kok: 'quedar', okunus: 'kedar kon algien', tur: 'kalıp',
      arka: 'biriyle buluşmak için sözleşmek',
      ornek: 'He quedado con Ana a las seis.',
      ornekTr: 'Ana ile altıda sözleştim.',
      not: 'İspanya\'da sosyal hayatın en sık fiili. Dönüşlüsü "quedarse" ise KALMAK demektir.',
    },
    {
      id: 'es-oku-10', on: 'el tío', okunus: 'el tio', tur: 'isim (argo)',
      arka: 'adam, kanka (hitap)',
      ornek: '¡Tío, no me lo puedo creer!',
      ornekTr: 'Kanka, buna inanamıyorum!',
      not: 'Asıl anlamı "amca/dayı"dır ama İspanya\'da gençler arasında hitap olarak kullanılır.',
    },
  ],
}

export default DESTE
