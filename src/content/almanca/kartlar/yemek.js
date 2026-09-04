/**
 * DESTE — YEMEK VE TATLAR (Almanca)
 *
 * Almanya'da yaşayan ya da gidecek olan bir öğrencinin ilk haftasında
 * lazım olacak kelimeler. "Türkçedeki döner Almancada da döner" gibi
 * kolaylıklar da not olarak gösterildi.
 */

export const DESTE = {
  id: 'yemek',
  dil: 'de',
  ad: 'Yemek ve tatlar',
  simge: '🥨',
  aciklama: 'Fırında, markette ve sofrada geçen kelimeler.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'de-yem-01', on: 'das Frühstück', okunus: 'das früştük', tur: 'isim (nötr)',
      arka: 'kahvaltı',
      ornek: 'Ich mache jeden Morgen ein großes Frühstück.',
      ornekTr: 'Her sabah büyük bir kahvaltı hazırlıyorum.',
      not: 'Kahvaltı yapmak "frühstücken" tek fiiliyle de söylenir.',
    },
    {
      id: 'de-yem-02', on: 'das Brot', okunus: 'das broot', tur: 'isim (nötr)',
      arka: 'ekmek',
      ornek: 'Ich kaufe jeden Tag frisches Brot.',
      ornekTr: 'Her gün taze ekmek alıyorum.',
      not: 'Almanya\'da yüzlerce ekmek çeşidi vardır; "die Bäckerei" fırındır.',
    },
    {
      id: 'de-yem-03', on: 'Hunger haben', okunus: 'hungır haabın', tur: 'kalıp',
      arka: 'acıkmak, aç olmak',
      ornek: 'Ich habe Hunger, essen wir etwas?',
      ornekTr: 'Acıktım, bir şeyler yiyelim mi?',
      not: '"Ich bin hungrig" de doğrudur ama "Hunger haben" daha yaygındır.',
    },
    {
      id: 'de-yem-04', on: 'lecker', okunus: 'lekır', tur: 'sıfat',
      arka: 'lezzetli',
      ornek: 'Der Kuchen ist wirklich lecker!',
      ornekTr: 'Pasta gerçekten lezzetli!',
      not: 'Tek başına ünlem olarak da kullanılır: "Lecker!"',
    },
    {
      id: 'de-yem-05', on: 'die Rechnung', okunus: 'di rehnung', tur: 'isim (dişil)',
      arka: 'hesap (restoranda)',
      ornek: 'Die Rechnung, bitte!',
      ornekTr: 'Hesap, lütfen!',
      not: '"rechnen" (hesaplamak) fiilinden gelir.',
    },
    {
      id: 'de-yem-06', on: 'bestellen', okunus: 'beştelın', tur: 'fiil',
      arka: 'sipariş vermek',
      ornek: 'Was möchtest du bestellen?',
      ornekTr: 'Ne sipariş etmek istersin?',
      not: 'Kibar istek "Ich möchte…" ile kurulur; "Ich will" sert durur.',
    },
    {
      id: 'de-yem-07', on: 'probieren', okunus: 'probiirın', tur: 'fiil',
      arka: 'tatmak, denemek',
      ornek: 'Möchtest du mein Eis probieren?',
      ornekTr: 'Dondurmamı tatmak ister misin?',
      not: 'Dondurma "das Eis"tır ve aynı zamanda "buz" demektir.',
    },
    {
      id: 'de-yem-08', on: 'zum Mitnehmen', okunus: 'tsum mitneemın', tur: 'kalıp',
      arka: 'paket, götürmek için',
      ornek: 'Einen Kaffee zum Mitnehmen, bitte.',
      ornekTr: 'Bir kahve paket, lütfen.',
      not: 'Karşıtı "zum Hier-Essen" (burada yemek için).',
    },
    {
      id: 'de-yem-09', on: 'Durst haben', okunus: 'durst haabın', tur: 'kalıp',
      arka: 'susamak',
      ornek: 'Ich habe Durst, ich trinke ein Wasser.',
      ornekTr: 'Susadım, bir su içeceğim.',
      not: '"Hunger haben" ile aynı mantık: susuzluğa da sahip olunur.',
    },
    {
      id: 'de-yem-10', on: 'Guten Appetit', okunus: 'gutın apetiit', tur: 'kalıp',
      arka: 'afiyet olsun',
      ornek: 'Guten Appetit, lass es dir schmecken!',
      ornekTr: 'Afiyet olsun, yemeğin tadını çıkar!',
      not: 'Sofraya oturulduğunda söylenmesi neredeyse zorunludur.',
    },
  ],
}

export default DESTE
