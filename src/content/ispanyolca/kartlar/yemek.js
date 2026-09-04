/**
 * DESTE — YEMEK VE TATLAR (İspanyolca)
 *
 * İspanyol mutfağı kelimeleri Türkçeye de geçmiştir (paella, tapas) ama
 * yanlış sesle. Kartlarda okunuş ayrıca verildi. Ayrıca yemek yorumunun
 * "estar" ile yapıldığı her fırsatta hatırlatıldı.
 */

export const DESTE = {
  id: 'yemek',
  dil: 'es',
  ad: 'Yemek ve tatlar',
  simge: '🥘',
  aciklama: 'Barda, restoranda ve sofrada geçen kelimeler.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'es-yem-01', on: 'el desayuno', okunus: 'el desayuno', tur: 'isim (eril)',
      arka: 'kahvaltı',
      ornek: 'El desayuno más importante es el del domingo.',
      ornekTr: 'En önemli kahvaltı pazar kahvaltısıdır.',
      not: 'Fiili "desayunar"dır ve tek kelimedir.',
    },
    {
      id: 'es-yem-02', on: 'las tapas', okunus: 'las tapas', tur: 'isim (çoğul)',
      arka: 'küçük atıştırmalıklar',
      ornek: 'Vamos a tomar unas tapas antes de cenar.',
      ornekTr: 'Akşam yemeğinden önce biraz tapas yiyelim.',
      not: 'İspanya kültürünün merkezinde; "ir de tapas" bir sosyal etkinliktir.',
    },
    {
      id: 'es-yem-03', on: 'la paella', okunus: 'la paeya', tur: 'isim (dişil)',
      arka: 'paella (pirinçli yemek)',
      ornek: 'La paella está buenísima.',
      ornekTr: 'Paella çok lezzetli olmuş.',
      not: '"ll" → "y" okunur: "paeya". Yemek yorumu "estar" ile yapılır.',
    },
    {
      id: 'es-yem-04', on: 'tener hambre', kok: 'hambre', okunus: 'tener ambre', tur: 'kalıp',
      arka: 'acıkmak, aç olmak',
      ornek: 'Tengo hambre, ¿comemos algo?',
      ornekTr: 'Acıktım, bir şeyler yiyelim mi?',
      not: '"Soy hambre" ya da "Estoy hambre" YANLIŞTIR. Açlık "tener" ile kurulur.',
    },
    {
      id: 'es-yem-05', on: 'estar buenísimo', kok: 'buenísimo', okunus: 'estar buenisimo', tur: 'kalıp',
      arka: 'çok lezzetli olmak',
      ornek: 'Este pastel está buenísimo.',
      ornekTr: 'Bu pasta çok lezzetli.',
      not: '-ísimo eki "çok" anlamı katar ve İspanyolcada çok kullanılır.',
    },
    {
      id: 'es-yem-06', on: 'la cuenta', okunus: 'la kuenta', tur: 'isim (dişil)',
      arka: 'hesap (restoranda)',
      ornek: 'La cuenta, por favor.',
      ornekTr: 'Hesap, lütfen.',
      not: 'En kibar biçim budur; "Quiero la cuenta" biraz sert durur.',
    },
    {
      id: 'es-yem-07', on: 'probar', okunus: 'probar', tur: 'fiil (kök değişimli)',
      arka: 'tatmak, denemek',
      ornek: '¿Quieres probar mi helado?',
      ornekTr: 'Dondurmamı tatmak ister misin?',
      not: 'Kök değişir: pruebo, pruebas… Dondurma "el helado".',
    },
    {
      id: 'es-yem-08', on: 'para llevar', okunus: 'para yebar', tur: 'kalıp',
      arka: 'paket, götürmek için',
      ornek: 'Un café para llevar, por favor.',
      ornekTr: 'Bir kahve paket, lütfen.',
      not: 'Karşıtı "para tomar aquí" (burada içmek için).',
    },
    {
      id: 'es-yem-09', on: 'tener sed', kok: 'sed', okunus: 'tener sed', tur: 'kalıp',
      arka: 'susamak',
      ornek: 'Tengo sed, voy a beber agua.',
      ornekTr: 'Susadım, su içeceğim.',
      not: '"tener hambre" ile aynı mantık: susuzluğa da sahip olunur.',
    },
    {
      id: 'es-yem-10', on: '¡Que aproveche!', kok: 'aproveche', okunus: 'ke aproveçe', tur: 'kalıp',
      arka: 'Afiyet olsun!',
      ornek: 'Aquí tienes tu plato. ¡Que aproveche!',
      ornekTr: 'Buyur tabağın. Afiyet olsun!',
      not: 'Latin Amerika\'da "¡Buen provecho!" daha yaygındır.',
    },
  ],
}

export default DESTE
