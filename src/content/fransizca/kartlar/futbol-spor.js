/**
 * DESTE — FUTBOL VE SPOR (Fransızca)
 *
 * Desteler MÜFREDATTAN bağımsızdır: burada seviye değil İLGİ belirleyici.
 * Futbol izleyen bir öğrenci "le but" kelimesini A1'de de öğrenebilir,
 * çünkü onu zaten duyuyor ve merak ediyor. Örnek cümleler gerçek maç
 * anlatımı diliyle yazıldı; ders kitabı cümlesi değil.
 */

export const DESTE = {
  id: 'futbol-spor',
  dil: 'fr',
  ad: 'Futbol ve spor',
  simge: '⚽',
  aciklama: 'Maç anlatımında, tribünde ve spor haberlerinde en çok geçen kelimeler.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'fr-fut-01', on: 'le but', okunus: 'lö bü', tur: 'isim',
      arka: 'gol; kale',
      ornek: 'Mbappé a marqué un but à la 90e minute.',
      ornekTr: 'Mbappé 90. dakikada gol attı.',
      not: 'Gol atmak "marquer un but"tur. Aynı kelime "amaç, hedef" anlamına da gelir.',
    },
    {
      id: 'fr-fut-02', on: 'le match', okunus: 'lö maç', tur: 'isim',
      arka: 'maç',
      ornek: 'Le match commence à vingt heures.',
      ornekTr: 'Maç saat sekizde başlıyor.',
      not: 'İngilizceden geçmiştir ama Fransızcada erildir: LE match.',
    },
    {
      id: 'fr-fut-03', on: "l'équipe", okunus: 'lekip', tur: 'isim (dişil)',
      arka: 'takım',
      ornek: "Mon équipe préférée a gagné hier soir.",
      ornekTr: 'En sevdiğim takım dün akşam kazandı.',
      not: 'Dişildir: UNE équipe. Türkçedeki "ekip" kelimesi buradan gelir.',
    },
    {
      id: 'fr-fut-04', on: 'gagner', okunus: 'ganye', tur: 'fiil',
      arka: 'kazanmak',
      ornek: "On va gagner ce match, j'en suis sûr.",
      ornekTr: 'Bu maçı kazanacağız, eminim.',
      not: 'Karşıtı "perdre" (kaybetmek). Para kazanmak için de aynı fiil kullanılır.',
    },
    {
      id: 'fr-fut-05', on: 'perdre', okunus: 'perdr', tur: 'fiil',
      arka: 'kaybetmek',
      ornek: "Ils ont perdu deux à zéro.",
      ornekTr: 'İki sıfır kaybettiler.',
      not: 'Skor "à" ile söylenir: deux à zéro (2-0).',
    },
    {
      id: 'fr-fut-06', on: "l'entraîneur", okunus: 'lantrenör', tur: 'isim',
      arka: 'teknik direktör, antrenör',
      ornek: "L'entraîneur a changé trois joueurs.",
      ornekTr: 'Teknik direktör üç oyuncu değiştirdi.',
      not: 'Dişili "l\'entraîneuse"dur. Antrenman ise "l\'entraînement".',
    },
    {
      id: 'fr-fut-07', on: 'le joueur', okunus: 'lö juvör', tur: 'isim',
      arka: 'oyuncu',
      ornek: "C'est le meilleur joueur du monde.",
      ornekTr: 'Dünyanın en iyi oyuncusu.',
      not: 'Dişili "la joueuse". "jouer" (oynamak) fiilinden gelir.',
    },
    {
      id: 'fr-fut-08', on: 'le terrain', okunus: 'lö teren', tur: 'isim',
      arka: 'saha',
      ornek: "Les joueurs entrent sur le terrain.",
      ornekTr: 'Oyuncular sahaya çıkıyor.',
      not: 'Sahaya çıkmak "entrer SUR le terrain"dır; "dans" değil.',
    },
    {
      id: 'fr-fut-09', on: 'supporter', okunus: 'süporte', tur: 'fiil',
      arka: 'tutmak (bir takımı desteklemek)',
      ornek: "Je supporte le PSG depuis que je suis petit.",
      ornekTr: 'Küçüklüğümden beri PSG tutuyorum.',
      not: 'Taraftar "un supporter"dır. Dikkat: bu fiil "katlanmak" anlamına da gelir.',
    },
    {
      id: 'fr-fut-10', on: "s'entraîner", okunus: 'santrene', tur: 'fiil (dönüşlü)',
      arka: 'antrenman yapmak',
      ornek: "Je m'entraîne trois fois par semaine.",
      ornekTr: 'Haftada üç kez antrenman yapıyorum.',
      not: 'Dönüşlü fiildir: je m\'entraîne, tu t\'entraînes…',
    },
  ],
}

export default DESTE
