/**
 * DESTE — SEYAHAT VE ŞEHİR (Fransızca)
 *
 * Bir gün Fransa'ya gitse ilk saatinde ihtiyaç duyacağı kelimeler:
 * havaalanı, bilet, yol sorma, otel. Kartlar "turist ne der" değil,
 * "turist ne DUYAR" mantığıyla da seçildi.
 */

export const DESTE = {
  id: 'seyahat',
  dil: 'fr',
  ad: 'Seyahat ve şehir',
  simge: '✈️',
  aciklama: 'Havaalanında, istasyonda ve sokakta ilk saatte lazım olanlar.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'fr-sey-01', on: 'le billet', okunus: 'lö biye', tur: 'isim',
      arka: 'bilet',
      ornek: "J'ai acheté mon billet en ligne.",
      ornekTr: 'Biletimi internetten aldım.',
      not: '"ll" burada "y" okunur. Kâğıt para da "un billet"dir.',
    },
    {
      id: 'fr-sey-02', on: 'la gare', okunus: 'la gar', tur: 'isim (dişil)',
      arka: 'tren garı',
      ornek: "La gare est à dix minutes à pied.",
      ornekTr: 'Gar yürüyerek on dakika.',
      not: 'Otogar "la gare routière", havaalanı "l\'aéroport".',
    },
    {
      id: 'fr-sey-03', on: 'le quai', okunus: 'lö ke', tur: 'isim',
      arka: 'peron',
      ornek: "Le train part du quai numéro trois.",
      ornekTr: 'Tren üç numaralı perondan kalkıyor.',
      not: 'Anonslarda en çok duyacağın kelimelerden biri.',
    },
    {
      id: 'fr-sey-04', on: 'la valise', okunus: 'la valiz', tur: 'isim (dişil)',
      arka: 'valiz, bavul',
      ornek: "Ma valise est trop lourde.",
      ornekTr: 'Valizim çok ağır.',
      not: 'Sırt çantası "un sac à dos".',
    },
    {
      id: 'fr-sey-05', on: 'perdu', okunus: 'perdü', tur: 'sıfat',
      arka: 'kaybolmuş',
      ornek: "Excusez-moi, je suis perdu.",
      ornekTr: 'Affedersiniz, kayboldum.',
      not: 'Dişil biçimi "perdue". Yol sorarken en işe yarayan cümledir.',
    },
    {
      id: 'fr-sey-06', on: 'tout droit', okunus: 'tu drua', tur: 'kalıp',
      arka: 'dümdüz',
      ornek: "Allez tout droit jusqu'au feu.",
      ornekTr: 'Işığa kadar dümdüz gidin.',
      not: 'Dikkat: "droite" (sağ) ile karışır. "tout droit" = dümdüz.',
    },
    {
      id: 'fr-sey-07', on: "l'auberge de jeunesse", okunus: 'loberj dö jönes', tur: 'isim (dişil)',
      arka: 'gençlik yurdu, hostel',
      ornek: "On dort dans une auberge de jeunesse.",
      ornekTr: 'Bir gençlik yurdunda kalıyoruz.',
      not: 'Öğrenci bütçesiyle seyahatin standart konaklaması.',
    },
    {
      id: 'fr-sey-08', on: 'réserver', okunus: 'rezerve', tur: 'fiil',
      arka: 'rezervasyon yaptırmak',
      ornek: "J'ai réservé une chambre pour deux nuits.",
      ornekTr: 'İki gecelik bir oda ayırttım.',
      not: 'Oda "une chambre", gece "une nuit".',
    },
    {
      id: 'fr-sey-09', on: 'la carte', okunus: 'la kart', tur: 'isim (dişil)',
      arka: 'harita; menü; kart',
      ornek: "Tu as une carte de la ville ?",
      ornekTr: 'Şehir haritan var mı?',
      not: 'Üç anlamı da çok kullanılır: harita, restoran menüsü ve banka kartı.',
    },
    {
      id: 'fr-sey-10', on: 'ça coûte combien', okunus: 'sa kut kombiyen', tur: 'kalıp',
      arka: 'ne kadar tutuyor?',
      ornek: "Ça coûte combien, le ticket de métro ?",
      ornekTr: 'Metro bileti ne kadar tutuyor?',
      not: 'Daha kısası "C\'est combien ?"dir ve günlük dilde daha sık duyulur.',
    },
  ],
}

export default DESTE
