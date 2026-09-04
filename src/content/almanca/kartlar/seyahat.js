/**
 * DESTE — SEYAHAT VE ŞEHİR (Almanca)
 *
 * Almanya'da tren ve istasyon anonsları standarttır. Bu destedeki
 * kelimeler bir kez öğrenilirse her istasyonda aynen işe yarar.
 */

export const DESTE = {
  id: 'seyahat',
  dil: 'de',
  ad: 'Seyahat ve şehir',
  simge: '✈️',
  aciklama: 'İstasyonda, otelde ve sokakta ilk saatte lazım olanlar.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'de-sey-01', on: 'die Fahrkarte', okunus: 'di faarkartı', tur: 'isim (dişil)',
      arka: 'bilet (ulaşım)',
      ornek: 'Ich habe meine Fahrkarte online gekauft.',
      ornekTr: 'Biletimi internetten aldım.',
      not: 'Uçak bileti "das Ticket" ya da "das Flugticket"tir.',
    },
    {
      id: 'de-sey-02', on: 'der Bahnhof', okunus: 'der baanhoof', tur: 'isim (eril)',
      arka: 'tren garı',
      ornek: 'Der Bahnhof ist zehn Minuten zu Fuß entfernt.',
      ornekTr: 'Gar yürüyerek on dakika uzaklıkta.',
      not: 'Ana gar "der Hauptbahnhof"tur ve "Hbf" diye kısaltılır.',
    },
    {
      id: 'de-sey-03', on: 'das Gleis', okunus: 'das glays', tur: 'isim (nötr)',
      arka: 'peron',
      ornek: 'Der Zug fährt von Gleis drei ab.',
      ornekTr: 'Tren üç numaralı perondan kalkıyor.',
      not: 'Anonslarda en çok duyacağın kelime. Kalkmak "abfahren" (ayrılabilir).',
    },
    {
      id: 'de-sey-04', on: 'der Koffer', okunus: 'der kofır', tur: 'isim (eril)',
      arka: 'valiz, bavul',
      ornek: 'Mein Koffer ist viel zu schwer.',
      ornekTr: 'Valizim çok fazla ağır.',
      not: 'Sırt çantası "der Rucksack". "viel zu" = çok fazla.',
    },
    {
      id: 'de-sey-05', on: 'sich verlaufen', kok: 'verlauf', okunus: 'zih ferlaufın', tur: 'fiil (dönüşlü)',
      arka: 'yolunu kaybetmek',
      ornek: 'Entschuldigung, ich habe mich verlaufen.',
      ornekTr: 'Affedersiniz, kayboldum.',
      not: 'Yürürken kaybolmak içindir; eşya kaybetmek "verlieren"dır.',
    },
    {
      id: 'de-sey-06', on: 'geradeaus', okunus: 'geradeaus', tur: 'zarf',
      arka: 'dümdüz',
      ornek: 'Gehen Sie geradeaus bis zur Ampel.',
      ornekTr: 'Işıklara kadar dümdüz gidin.',
      not: 'Yol tarifinin üçlüsü: geradeaus, links (sol), rechts (sağ).',
    },
    {
      id: 'de-sey-07', on: 'die Jugendherberge', okunus: 'di yugendherbergı', tur: 'isim (dişil)',
      arka: 'gençlik yurdu, hostel',
      ornek: 'Wir schlafen in einer Jugendherberge.',
      ornekTr: 'Bir gençlik yurdunda kalıyoruz.',
      not: '"Jugend" (gençlik) + "Herberge" (konaklama). Öğrenci bütçesinin standardı.',
    },
    {
      id: 'de-sey-08', on: 'buchen', okunus: 'buuhın', tur: 'fiil',
      arka: 'rezervasyon yaptırmak',
      ornek: 'Ich habe ein Zimmer für zwei Nächte gebucht.',
      ornekTr: 'İki gecelik bir oda ayırttım.',
      not: 'Oda "das Zimmer", gece "die Nacht" (çoğulu "Nächte").',
    },
    {
      id: 'de-sey-09', on: 'umsteigen', kok: 'steig', okunus: 'umştaygın', tur: 'fiil (ayrılabilir)',
      arka: 'aktarma yapmak',
      ornek: 'In Köln steigen wir um.',
      ornekTr: 'Köln\'de aktarma yapıyoruz.',
      not: 'Ayrılabilir fiil: ön ek "um" cümlenin sonuna gider.',
    },
    {
      id: 'de-sey-10', on: 'Wie viel kostet das?', okunus: 'vii fiil kostıt das', tur: 'kalıp',
      arka: 'Bu ne kadar?',
      ornek: 'Entschuldigung, wie viel kostet das?',
      ornekTr: 'Affedersiniz, bu ne kadar?',
      not: '"Wie viel" ayrı yazılır. Fiyat sormanın standart biçimi.',
    },
  ],
}

export default DESTE
