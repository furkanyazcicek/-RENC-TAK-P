/**
 * DESTE — SEYAHAT VE ŞEHİR (İngilizce)
 *
 * Havaalanı ve otel İngilizcesi standarttır: aynı cümleler dünyanın her
 * yerinde duyulur. Bu destedeki kalıplar bir kez öğrenilirse ömür boyu
 * aynen işe yarar.
 */

export const DESTE = {
  id: 'seyahat',
  dil: 'en',
  ad: 'Seyahat ve şehir',
  simge: '✈️',
  aciklama: 'Havaalanında, otelde ve sokakta duyacağın standart kalıplar.',
  seviye: 'A2–B1',
  kartlar: [
    {
      id: 'en-sey-01', on: 'check in', okunus: 'çek in', tur: 'öbek fiil',
      arka: 'giriş işlemi yaptırmak',
      ornek: 'We need to check in two hours before the flight.',
      ornekTr: 'Uçuştan iki saat önce giriş yaptırmamız gerek.',
      not: 'Fiil ayrı, isim tireli: "the check-in desk".',
    },
    {
      id: 'en-sey-02', on: 'boarding pass', okunus: 'bording pes', tur: 'isim',
      arka: 'biniş kartı',
      ornek: 'Please have your boarding pass ready.',
      ornekTr: 'Lütfen biniş kartınızı hazır bulundurun.',
      not: 'Anonslarda en sık duyulan ifadelerden biri.',
    },
    {
      id: 'en-sey-03', on: 'luggage', okunus: 'lagic', tur: 'isim (sayılamayan)',
      arka: 'bagaj',
      ornek: 'I lost my luggage at the airport.',
      ornekTr: 'Bagajımı havaalanında kaybettim.',
      not: 'SAYILAMAZ: "a luggage" ve "luggages" YANLIŞTIR. "a piece of luggage" denir.',
    },
    {
      id: 'en-sey-04', on: 'get lost', okunus: 'get lost', tur: 'kalıp',
      arka: 'kaybolmak',
      ornek: 'We got lost on the way to the museum.',
      ornekTr: 'Müzeye giderken kaybolduk.',
      not: '"Get + sıfat" kalıbı: get tired, get ready, get lost.',
    },
    {
      id: 'en-sey-05', on: 'straight ahead', okunus: 'streyt ıhed', tur: 'kalıp',
      arka: 'dümdüz ileri',
      ornek: 'Go straight ahead and turn left at the lights.',
      ornekTr: 'Dümdüz git, ışıklardan sola dön.',
      not: 'Yol tarifinin üç kalıbı: straight ahead, turn left, turn right.',
    },
    {
      id: 'en-sey-06', on: 'How do I get to…?', okunus: 'hau du ay get tu', tur: 'kalıp',
      arka: '… nasıl giderim?',
      ornek: 'Excuse me, how do I get to the train station?',
      ornekTr: 'Affedersiniz, tren garına nasıl giderim?',
      not: 'Yol sormanın en doğal biçimi. "Where is…" daha kısadır ama tarif getirmez.',
    },
    {
      id: 'en-sey-07', on: 'book', okunus: 'buk', tur: 'fiil',
      arka: 'rezervasyon yaptırmak',
      ornek: 'I booked a room for three nights.',
      ornekTr: 'Üç gecelik oda ayırttım.',
      not: 'Aynı kelime "kitap" demektir; burada fiildir.',
    },
    {
      id: 'en-sey-08', on: 'delayed', okunus: 'dileyd', tur: 'sıfat',
      arka: 'rötarlı, gecikmiş',
      ornek: 'Our flight is delayed by two hours.',
      ornekTr: 'Uçuşumuz iki saat rötarlı.',
      not: 'İptal ise "cancelled". Havaalanı ekranlarında ikisi de yazar.',
    },
    {
      id: 'en-sey-09', on: 'sightseeing', okunus: 'saytsiing', tur: 'isim',
      arka: 'gezip görme, turistik gezi',
      ornek: 'We spent the whole day sightseeing.',
      ornekTr: 'Bütün günü gezerek geçirdik.',
      not: 'Kalıp hâli: "go sightseeing".',
    },
    {
      id: 'en-sey-10', on: 'jet lag', okunus: 'cet leg', tur: 'isim',
      arka: 'saat farkı yorgunluğu',
      ornek: 'I still have jet lag from the flight.',
      ornekTr: 'Uçuştan kalan saat farkı yorgunluğum hâlâ sürüyor.',
      not: 'Türkçede tam karşılığı yoktur; olduğu gibi kullanılır.',
    },
  ],
}

export default DESTE
