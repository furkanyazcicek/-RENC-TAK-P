/**
 * DESTE — OKUL VE ARKADAŞLIK (Fransızca)
 *
 * Öğrencinin kendi hayatının kelimeleri. Bu desteyi seçen öğrenci
 * öğrendiğini AYNI GÜN kullanabilir: sınıf, sınav, teneffüs, arkadaş.
 */

export const DESTE = {
  id: 'okul-arkadaslik',
  dil: 'fr',
  ad: 'Okul ve arkadaşlık',
  simge: '🎒',
  aciklama: 'Sınıfta, koridorda ve arkadaş sohbetinde geçen kelimeler.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'fr-oku-01', on: 'le lycée', okunus: 'lö lise', tur: 'isim',
      arka: 'lise',
      ornek: "Je suis au lycée depuis deux ans.",
      ornekTr: 'İki yıldır lisedeyim.',
      not: 'Ortaokul "le collège"dir; üniversite değil, dikkat.',
    },
    {
      id: 'fr-oku-02', on: "le contrôle", okunus: 'lö kontrol', tur: 'isim',
      arka: 'yazılı sınav',
      ornek: "On a un contrôle de maths demain.",
      ornekTr: 'Yarın matematik yazılımız var.',
      not: 'Büyük sınav "un examen", not ise "une note"tur.',
    },
    {
      id: 'fr-oku-03', on: 'les devoirs', okunus: 'le dövuar', tur: 'isim (çoğul)',
      arka: 'ödev',
      ornek: "Je fais mes devoirs après le dîner.",
      ornekTr: 'Ödevlerimi akşam yemeğinden sonra yapıyorum.',
      not: 'Her zaman çoğuldur. Tekil "le devoir" ise "görev" demektir.',
    },
    {
      id: 'fr-oku-04', on: 'la récré', okunus: 'la rekre', tur: 'isim (dişil)',
      arka: 'teneffüs',
      ornek: "On se voit à la récré !",
      ornekTr: 'Teneffüste görüşürüz!',
      not: '"la récréation"ın kısaltmasıdır; öğrenciler hep kısasını kullanır.',
    },
    {
      id: 'fr-oku-05', on: 'le copain', okunus: 'lö kopen', tur: 'isim',
      arka: 'arkadaş; erkek sevgili',
      ornek: "Je sors avec mes copains ce soir.",
      ornekTr: 'Bu akşam arkadaşlarımla çıkıyorum.',
      not: 'DİKKAT: "mon copain" çoğu zaman "sevgilim" demektir. Arkadaş için "un ami" daha güvenlidir.',
    },
    {
      id: 'fr-oku-06', on: 'réviser', okunus: 'revize', tur: 'fiil',
      arka: 'sınava çalışmak, tekrar etmek',
      ornek: "Je révise pour le contrôle de demain.",
      ornekTr: 'Yarınki yazılıya çalışıyorum.',
      not: '"étudier" genel öğrenim, "réviser" sınav öncesi tekrardır.',
    },
    {
      id: 'fr-oku-07', on: 'la salle de classe', okunus: 'la sal dö klas', tur: 'isim (dişil)',
      arka: 'sınıf (oda)',
      ornek: "La salle de classe est au deuxième étage.",
      ornekTr: 'Sınıf ikinci katta.',
      not: 'Sınıf topluluğu için "la classe" tek başına kullanılır.',
    },
    {
      id: 'fr-oku-08', on: 'être en retard', okunus: 'etr an rötar', tur: 'kalıp',
      arka: 'geç kalmak',
      ornek: "Désolé, je suis en retard.",
      ornekTr: 'Kusura bakma, geç kaldım.',
      not: 'Karşıtı "être en avance" (erken gelmek).',
    },
    {
      id: 'fr-oku-09', on: 'la note', okunus: 'la not', tur: 'isim (dişil)',
      arka: 'not (puan)',
      ornek: "J'ai eu une bonne note en anglais.",
      ornekTr: 'İngilizceden iyi not aldım.',
      not: 'Fransa\'da notlar 20 üzerindendir: "j\'ai eu 15 sur 20".',
    },
    {
      id: 'fr-oku-10', on: 'traîner', okunus: 'trene', tur: 'fiil (günlük)',
      arka: 'takılmak, vakit geçirmek',
      ornek: "On traîne au parc après les cours.",
      ornekTr: 'Dersten sonra parkta takılıyoruz.',
      not: 'Gençlerin sürekli kullandığı bir fiil; ders kitaplarında geçmez.',
    },
  ],
}

export default DESTE
