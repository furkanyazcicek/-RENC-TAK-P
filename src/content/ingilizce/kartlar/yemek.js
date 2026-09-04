/**
 * DESTE — YEMEK VE TATLAR (İngilizce)
 *
 * Kafede ve restoranda gerçekten kurulan cümleler. Ayrıca Türk
 * öğrencilerin en sık yaptığı iki hata bu destede hedef alındı:
 * "I am hungry" yerine "I have hunger" ve sayılamayan isimlerde
 * yanlış miktar ifadesi.
 */

export const DESTE = {
  id: 'yemek',
  dil: 'en',
  ad: 'Yemek ve tatlar',
  simge: '🍽️',
  aciklama: 'Kafede sipariş verirken ve yemek anlatırken kullanılan kalıplar.',
  seviye: 'A1–B1',
  kartlar: [
    {
      id: 'en-yem-01', on: 'be starving', okunus: 'bi starving', tur: 'kalıp',
      arka: 'çok acıkmış olmak',
      ornek: 'I skipped lunch, so I am starving.',
      ornekTr: 'Öğle yemeğini atladım, açlıktan ölüyorum.',
      not: '"I have hunger" YANLIŞTIR. Açlık "be" ile kurulur: I am hungry / starving.',
    },
    {
      id: 'en-yem-02', on: 'a slice of', okunus: 'ı slays ıv', tur: 'miktar ifadesi',
      arka: 'bir dilim',
      ornek: 'Can I have a slice of cake, please?',
      ornekTr: 'Bir dilim pasta alabilir miyim?',
      not: 'Sayılamayan isimler sayı almaz; araya miktar ifadesi girer.',
    },
    {
      id: 'en-yem-03', on: 'takeaway', okunus: 'teykıvey', tur: 'isim / sıfat',
      arka: 'paket (götürmek için)',
      ornek: 'We ordered a takeaway last night.',
      ornekTr: 'Dün gece paket söyledik.',
      not: 'Amerika\'da "takeout" denir. Restoranda yemek "eat in / dine in".',
    },
    {
      id: 'en-yem-04', on: 'the bill', okunus: 'dı bil', tur: 'isim',
      arka: 'hesap (restoranda)',
      ornek: 'Could we have the bill, please?',
      ornekTr: 'Hesabı alabilir miyiz?',
      not: 'Amerika\'da "the check". "the account" burada YANLIŞTIR.',
    },
    {
      id: 'en-yem-05', on: 'try', okunus: 'tray', tur: 'fiil',
      arka: 'tatmak, denemek',
      ornek: 'You should try the soup, it is amazing.',
      ornekTr: 'Çorbayı denemelisin, harika.',
      not: 'Yemek tatmak için "taste" değil çoğu zaman "try" kullanılır.',
    },
    {
      id: 'en-yem-06', on: 'be allergic to', okunus: 'bi ılörcik tu', tur: 'kalıp',
      arka: '-e alerjisi olmak',
      ornek: 'I am allergic to nuts.',
      ornekTr: 'Kuruyemişe alerjim var.',
      not: 'Edat "to"dur. Yurt dışında ilk gün lazım olabilecek cümle.',
    },
    {
      id: 'en-yem-07', on: 'eat out', okunus: 'iit aut', tur: 'öbek fiil',
      arka: 'dışarıda yemek yemek',
      ornek: 'We eat out once a week.',
      ornekTr: 'Haftada bir dışarıda yiyoruz.',
      not: 'Karşıtı "eat in" ya da "cook at home".',
    },
    {
      id: 'en-yem-08', on: 'leftovers', okunus: 'leftouvırz', tur: 'isim (çoğul)',
      arka: 'artan yemek',
      ornek: 'I had the leftovers for lunch.',
      ornekTr: 'Öğlen artan yemeği yedim.',
      not: '"left over" (artmak) fiilinden gelir; her zaman çoğuldur.',
    },
    {
      id: 'en-yem-09', on: 'craving', okunus: 'kreyving', tur: 'isim',
      arka: 'canının çok çekmesi',
      ornek: 'I have a craving for chocolate.',
      ornekTr: 'Canım çok çikolata çekiyor.',
      not: 'Fiil hâli: "I am craving chocolate."',
    },
    {
      id: 'en-yem-10', on: 'it tastes like', okunus: 'it teysts layk', tur: 'kalıp',
      arka: '… gibi tadı var',
      ornek: 'It tastes like something my grandmother makes.',
      ornekTr: 'Tadı anneannemin yaptığı bir şey gibi.',
      not: '"taste" duyu fiilidir ve "like" ile benzetme kurar.',
    },
  ],
}

export default DESTE
