/**
 * DESTE — HAYVANLAR VE DOĞA (İngilizce)
 *
 * Kelimelerin kendisi kolay, deyimleri zordur. Bu destede her hayvan
 * kartında o hayvanın geçtiği deyim de not olarak verildi; sınav
 * metinlerinde ve dizilerde karşına deyim olarak çıkar.
 */

export const DESTE = {
  id: 'hayvanlar-doga',
  dil: 'en',
  ad: 'Hayvanlar ve doğa',
  simge: '🌿',
  aciklama: 'Hayvanlar, hava ve doğa; içinde geçtikleri deyimlerle.',
  seviye: 'A2–B1',
  kartlar: [
    {
      id: 'en-hay-01', on: 'pet', okunus: 'pet', tur: 'isim',
      arka: 'evcil hayvan',
      ornek: 'Do you have any pets at home?',
      ornekTr: 'Evde hiç evcil hayvanın var mı?',
      not: '"animal" genel, "pet" evde beslenendir.',
    },
    {
      id: 'en-hay-02', on: 'It is raining cats and dogs', okunus: 'its reyning kets end dogz', tur: 'deyim',
      arka: 'bardaktan boşanırcasına yağıyor',
      ornek: 'Take an umbrella, it is raining cats and dogs.',
      ornekTr: 'Şemsiye al, bardaktan boşanırcasına yağıyor.',
      not: 'Kelime kelime "kedi köpek yağıyor" demektir.',
    },
    {
      id: 'en-hay-03', on: 'the weather', okunus: 'dı vedır', tur: 'isim (sayılamayan)',
      arka: 'hava durumu',
      ornek: 'The weather is lovely today.',
      ornekTr: 'Bugün hava çok güzel.',
      not: 'SAYILAMAZ: "a weather" YANLIŞTIR. Sesteşi "whether" (… olup olmadığı).',
    },
    {
      id: 'en-hay-04', on: 'freezing', okunus: 'friizing', tur: 'sıfat',
      arka: 'dondurucu soğuk',
      ornek: 'It is freezing outside, wear a coat.',
      ornekTr: 'Dışarısı buz gibi, mont giy.',
      not: 'Karşıtı "boiling" (kavurucu sıcak). İkisi de abartma sıfatıdır.',
    },
    {
      id: 'en-hay-05', on: 'the countryside', okunus: 'dı kantrisayd', tur: 'isim',
      arka: 'kırsal, köy tarafı',
      ornek: 'My grandparents live in the countryside.',
      ornekTr: 'Büyükannemler kırsalda yaşıyor.',
      not: '"country" hem ülke hem kırsal demektir; artikel ayırır.',
    },
    {
      id: 'en-hay-06', on: 'a bird\'s-eye view', okunus: 'ı börds ay vyu', tur: 'deyim',
      arka: 'kuşbakışı',
      ornek: 'From the tower you get a bird\'s-eye view of the city.',
      ornekTr: 'Kuleden şehri kuşbakışı görüyorsun.',
      not: 'Türkçedeki "kuşbakışı" ile birebir aynı mantık.',
    },
    {
      id: 'en-hay-07', on: 'go for a walk', okunus: 'gou for ı vok', tur: 'eş dizim',
      arka: 'yürüyüşe çıkmak',
      ornek: 'Let us go for a walk by the sea.',
      ornekTr: 'Deniz kenarında yürüyüşe çıkalım.',
      not: '"make a walk" YANLIŞTIR. Aynı kalıp: go for a run / a swim / a drive.',
    },
    {
      id: 'en-hay-08', on: 'wildlife', okunus: 'vayldlayf', tur: 'isim (sayılamayan)',
      arka: 'yaban hayatı',
      ornek: 'This forest is full of wildlife.',
      ornekTr: 'Bu orman yaban hayatıyla dolu.',
      not: 'Belgesellerde ve okuma metinlerinde çok geçer.',
    },
    {
      id: 'en-hay-09', on: 'endangered', okunus: 'indeyncırd', tur: 'sıfat',
      arka: 'nesli tehlikede olan',
      ornek: 'Pandas are still an endangered species.',
      ornekTr: 'Pandaların nesli hâlâ tehlikede.',
      not: 'Tür "species"tir ve tekili de çoğulu da aynıdır.',
    },
    {
      id: 'en-hay-10', on: 'get some fresh air', okunus: 'get sam freş eır', tur: 'kalıp',
      arka: 'hava almak',
      ornek: 'I am going outside to get some fresh air.',
      ornekTr: 'Biraz hava almak için dışarı çıkıyorum.',
      not: 'Türkçedeki "hava almak" ile tam olarak aynı kullanım.',
    },
  ],
}

export default DESTE
