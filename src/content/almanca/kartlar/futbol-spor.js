/**
 * DESTE — FUTBOL VE SPOR (Almanca)
 *
 * Almancada her isim ARTİKELİYLE öğrenilir; kartların ön yüzünde artikel
 * bu yüzden her zaman var. Artikelsiz öğrenilen bir Almanca isim, o ismi
 * kullanan hiçbir cümlede doğru kurulamaz.
 */

export const DESTE = {
  id: 'futbol-spor',
  dil: 'de',
  ad: 'Futbol ve spor',
  simge: '⚽',
  aciklama: 'Maç anlatımında ve spor haberlerinde geçen kelimeler — artikelleriyle.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'de-fut-01', on: 'das Tor', okunus: 'das tor', tur: 'isim (nötr)',
      arka: 'gol; kale',
      ornek: 'Er hat in der letzten Minute ein Tor geschossen.',
      ornekTr: 'Son dakikada bir gol attı.',
      not: 'Gol atmak "ein Tor schießen"dir. Aynı kelime "kapı" anlamına da gelir.',
    },
    {
      id: 'de-fut-02', on: 'das Spiel', okunus: 'das şpiil', tur: 'isim (nötr)',
      arka: 'maç; oyun',
      ornek: 'Das Spiel beginnt um acht Uhr.',
      ornekTr: 'Maç saat sekizde başlıyor.',
      not: 'Hem maç hem oyun demektir; "spielen" (oynamak) fiilinden gelir.',
    },
    {
      id: 'de-fut-03', on: 'die Mannschaft', okunus: 'di manşaft', tur: 'isim (dişil)',
      arka: 'takım',
      ornek: 'Meine Mannschaft hat gestern gewonnen.',
      ornekTr: 'Takımım dün kazandı.',
      not: 'Milli takım "die Nationalmannschaft". Uzun kelimelerden korkma, birleşiktir.',
    },
    {
      id: 'de-fut-04', on: 'gewinnen', okunus: 'gevinın', tur: 'fiil (düzensiz)',
      arka: 'kazanmak',
      ornek: 'Wir werden dieses Spiel gewinnen.',
      ornekTr: 'Bu maçı kazanacağız.',
      not: 'Geçmiş hâli "gewonnen"dır. Karşıtı "verlieren".',
    },
    {
      id: 'de-fut-05', on: 'verlieren', kok: 'verl', okunus: 'ferliirın', tur: 'fiil (düzensiz)',
      arka: 'kaybetmek',
      ornek: 'Sie haben zwei zu null verloren.',
      ornekTr: 'İki sıfır kaybettiler.',
      not: 'Skor "zu" ile söylenir: zwei zu null (2-0).',
    },
    {
      id: 'de-fut-06', on: 'der Trainer', okunus: 'der trenır', tur: 'isim (eril)',
      arka: 'teknik direktör, antrenör',
      ornek: 'Der Trainer hat drei Spieler ausgewechselt.',
      ornekTr: 'Teknik direktör üç oyuncu değiştirdi.',
      not: 'Dişili "die Trainerin". Meslek adlarının çoğu "-in" ile dişilleşir.',
    },
    {
      id: 'de-fut-07', on: 'der Spieler', okunus: 'der şpiilır', tur: 'isim (eril)',
      arka: 'oyuncu',
      ornek: 'Er ist der beste Spieler der Welt.',
      ornekTr: 'O dünyanın en iyi oyuncusu.',
      not: 'Çoğulu değişmez: die Spieler. "-er" ile biten eril isimlerde sık görülür.',
    },
    {
      id: 'de-fut-08', on: 'trainieren', okunus: 'trenirın', tur: 'fiil',
      arka: 'antrenman yapmak',
      ornek: 'Ich trainiere dreimal pro Woche.',
      ornekTr: 'Haftada üç kez antrenman yapıyorum.',
      not: 'Sıklık "pro Woche" ile söylenir: haftada …',
    },
    {
      id: 'de-fut-09', on: 'der Fan', okunus: 'der fen', tur: 'isim (eril)',
      arka: 'taraftar',
      ornek: 'Ich bin seit meiner Kindheit Fan von diesem Verein.',
      ornekTr: 'Çocukluğumdan beri bu kulübün taraftarıyım.',
      not: 'Kulüp "der Verein". "Fan von + Dativ" kalıbıyla kullanılır.',
    },
    {
      id: 'de-fut-10', on: 'sich verletzen', okunus: 'zih ferletsın', tur: 'fiil (dönüşlü)',
      arka: 'sakatlanmak',
      ornek: 'Er hat sich im Training verletzt.',
      ornekTr: 'Antrenmanda sakatlandı.',
      not: 'Dönüşlü fiildir: ich verletze MICH. Sakatlık "die Verletzung".',
    },
  ],
}

export default DESTE
