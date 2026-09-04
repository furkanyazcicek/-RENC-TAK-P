/**
 * DESTE — SEYAHAT VE ŞEHİR (İspanyolca)
 *
 * İspanyolca dünyada en çok konuşulan ikinci ana dildir; bu destedeki
 * kelimeler yirmiden fazla ülkede işe yarar. Bölgesel farklar
 * (billete / boleto) not olarak gösterildi.
 */

export const DESTE = {
  id: 'seyahat',
  dil: 'es',
  ad: 'Seyahat ve şehir',
  simge: '✈️',
  aciklama: 'İstasyonda, otelde ve sokakta ilk saatte lazım olanlar.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'es-sey-01', on: 'el billete', okunus: 'el biyete', tur: 'isim (eril)',
      arka: 'bilet',
      ornek: 'Compré el billete por internet.',
      ornekTr: 'Bileti internetten aldım.',
      not: 'İspanya kullanımıdır. Latin Amerika\'da "el boleto" ya da "el pasaje".',
    },
    {
      id: 'es-sey-02', on: 'la estación', okunus: 'la estasyon', tur: 'isim (dişil)',
      arka: 'istasyon, gar',
      ornek: 'La estación está a diez minutos a pie.',
      ornekTr: 'İstasyon yürüyerek on dakika.',
      not: 'Çoğulu "las estaciones" — aksan düşer. Aynı kelime "mevsim" de demektir.',
    },
    {
      id: 'es-sey-03', on: 'el andén', okunus: 'el anden', tur: 'isim (eril)',
      arka: 'peron',
      ornek: 'El tren sale del andén número tres.',
      ornekTr: 'Tren üç numaralı perondan kalkıyor.',
      not: 'Anonslarda sürekli duyulur. Çoğulu "los andenes" (aksan düşer).',
    },
    {
      id: 'es-sey-04', on: 'la maleta', okunus: 'la maleta', tur: 'isim (dişil)',
      arka: 'valiz, bavul',
      ornek: 'Mi maleta pesa demasiado.',
      ornekTr: 'Valizim çok fazla ağır.',
      not: 'Sırt çantası "la mochila". Valiz hazırlamak "hacer la maleta".',
    },
    {
      id: 'es-sey-05', on: 'perderse', kok: 'perd', okunus: 'perderse', tur: 'fiil (dönüşlü)',
      arka: 'kaybolmak',
      ornek: 'Perdona, me he perdido.',
      ornekTr: 'Affedersin, kayboldum.',
      not: 'Dönüşlüdür: me pierdo. Eşya kaybetmek ise dönüşsüz "perder"dir.',
    },
    {
      id: 'es-sey-06', on: 'todo recto', okunus: 'todo rekto', tur: 'kalıp',
      arka: 'dümdüz',
      ornek: 'Siga todo recto hasta el semáforo.',
      ornekTr: 'Işıklara kadar dümdüz devam edin.',
      not: 'Latin Amerika\'da "todo derecho" da denir. Yol tarifinin ilk kalıbı.',
    },
    {
      id: 'es-sey-07', on: 'el albergue', okunus: 'el alberge', tur: 'isim (eril)',
      arka: 'hostel, gençlik yurdu',
      ornek: 'Dormimos en un albergue muy barato.',
      ornekTr: 'Çok ucuz bir hostelde kaldık.',
      not: 'Camino de Santiago yürüyüşünün klasik konaklamasıdır.',
    },
    {
      id: 'es-sey-08', on: 'reservar', okunus: 'reserbar', tur: 'fiil',
      arka: 'rezervasyon yaptırmak',
      ornek: 'He reservado una habitación para dos noches.',
      ornekTr: 'İki gecelik bir oda ayırttım.',
      not: 'Oda "la habitación", gece "la noche".',
    },
    {
      id: 'es-sey-09', on: 'el retraso', okunus: 'el retraso', tur: 'isim (eril)',
      arka: 'rötar, gecikme',
      ornek: 'El vuelo tiene dos horas de retraso.',
      ornekTr: 'Uçuşun iki saat rötarı var.',
      not: 'Uçuş "el vuelo". Geç kalmak "llegar tarde".',
    },
    {
      id: 'es-sey-10', on: '¿Cómo se llega a…?', kok: 'llega', okunus: 'komo se yega a', tur: 'kalıp',
      arka: '… nasıl gidilir?',
      ornek: 'Perdone, ¿cómo se llega a la catedral?',
      ornekTr: 'Affedersiniz, katedrale nasıl gidilir?',
      not: 'Yol sormanın en doğal biçimi; "¿Dónde está…?" yalnız yeri söyler.',
    },
  ],
}

export default DESTE
