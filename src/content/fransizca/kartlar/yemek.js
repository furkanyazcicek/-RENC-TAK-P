/**
 * DESTE — YEMEK VE TATLAR (Fransızca)
 *
 * Fransız mutfağı kelimeleri dünyaya yayılmıştır; öğrenci bunların çoğunu
 * zaten biliyor ama YANLIŞ sesle biliyor (croissant, crêpe). Kartlarda
 * okunuş bilgisi bu yüzden ayrıca verildi.
 */

export const DESTE = {
  id: 'yemek',
  dil: 'fr',
  ad: 'Yemek ve tatlar',
  simge: '🥐',
  aciklama: 'Kafede, fırında ve sofrada geçen kelimeler; bildiğini sandıkların dâhil.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'fr-yem-01', on: 'le petit-déjeuner', okunus: 'lö pöti dejöne', tur: 'isim',
      arka: 'kahvaltı',
      ornek: "Je prends mon petit-déjeuner à sept heures.",
      ornekTr: 'Kahvaltımı yedide yapıyorum.',
      not: 'Kahvaltı yapmak "prendre le petit-déjeuner"dır; "faire" değil.',
    },
    {
      id: 'fr-yem-02', on: 'le croissant', okunus: 'lö kruasan', tur: 'isim',
      arka: 'kruvasan',
      ornek: "Un croissant et un café, s'il vous plaît.",
      ornekTr: 'Bir kruvasan ve bir kahve, lütfen.',
      not: 'Sondaki "t" okunmaz ve "oi" → "ua"dır: "kruasan".',
    },
    {
      id: 'fr-yem-03', on: 'la crêpe', okunus: 'la krep', tur: 'isim (dişil)',
      arka: 'krep',
      ornek: "On mange des crêpes tous les mardis.",
      ornekTr: 'Her salı krep yiyoruz.',
      not: 'Dişildir: UNE crêpe. Şapkalı "ê" açık okunur.',
    },
    {
      id: 'fr-yem-04', on: 'avoir faim', okunus: 'avuar fen', tur: 'kalıp',
      arka: 'acıkmak, aç olmak',
      ornek: "J'ai faim, on mange quelque chose ?",
      ornekTr: 'Acıktım, bir şeyler yiyelim mi?',
      not: '"Je suis faim" YANLIŞTIR. Açlık sahip olunan bir şeydir: J\'AI faim.',
    },
    {
      id: 'fr-yem-05', on: 'délicieux', okunus: 'delisyö', tur: 'sıfat',
      arka: 'çok lezzetli',
      ornek: "Ce gâteau est délicieux !",
      ornekTr: 'Bu pasta çok lezzetli!',
      not: 'Dişili "délicieuse". Günlük dilde "trop bon" da denir.',
    },
    {
      id: 'fr-yem-06', on: "l'addition", okunus: 'ladisyon', tur: 'isim (dişil)',
      arka: 'hesap (restoranda)',
      ornek: "L'addition, s'il vous plaît.",
      ornekTr: 'Hesap, lütfen.',
      not: 'Matematikteki "toplama" ile aynı kelimedir.',
    },
    {
      id: 'fr-yem-07', on: 'la boulangerie', okunus: 'la bulanjri', tur: 'isim (dişil)',
      arka: 'fırın, ekmekçi',
      ornek: "Je passe à la boulangerie avant l'école.",
      ornekTr: 'Okuldan önce fırına uğruyorum.',
      not: 'Pastane "la pâtisserie"dir; ikisi çoğu zaman aynı dükkândır.',
    },
    {
      id: 'fr-yem-08', on: 'goûter', okunus: 'gute', tur: 'fiil',
      arka: 'tatmak',
      ornek: "Tu veux goûter ma glace ?",
      ornekTr: 'Dondurmamı tatmak ister misin?',
      not: 'İsim hâli "le goûter" ikindi atıştırması demektir.',
    },
    {
      id: 'fr-yem-09', on: 'à emporter', okunus: 'a amporte', tur: 'kalıp',
      arka: 'paket, dışarı (götürmek için)',
      ornek: "Un sandwich à emporter, s'il vous plaît.",
      ornekTr: 'Bir sandviç paket, lütfen.',
      not: 'Karşıtı "sur place" (burada yemek).',
    },
    {
      id: 'fr-yem-10', on: 'avoir soif', okunus: 'avuar suaf', tur: 'kalıp',
      arka: 'susamak',
      ornek: "J'ai soif, je vais boire de l'eau.",
      ornekTr: 'Susadım, su içeceğim.',
      not: '"avoir faim" ile aynı mantık: susuzluk da sahip olunur.',
    },
  ],
}

export default DESTE
