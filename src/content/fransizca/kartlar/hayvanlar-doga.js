/**
 * DESTE — HAYVANLAR VE DOĞA (Fransızca)
 *
 * Görsel olarak en kolay hatırlanan deste. Ayrıca Fransızcada hayvan
 * adlarının çoğu deyimlerde geçer; kartlarda o deyimler de not olarak
 * verildi, çünkü kelimeyi tek başına bilmek yetmez.
 */

export const DESTE = {
  id: 'hayvanlar-doga',
  dil: 'fr',
  ad: 'Hayvanlar ve doğa',
  simge: '🌿',
  aciklama: 'Hayvanlar, hava ve doğa; birlikte kullanıldıkları deyimlerle.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'fr-hay-01', on: 'le chat', okunus: 'lö şa', tur: 'isim',
      arka: 'kedi',
      ornek: "Mon chat dort sur le canapé toute la journée.",
      ornekTr: 'Kedim bütün gün kanepede uyuyor.',
      not: 'Sondaki "t" okunmaz. Dişisi "la chatte".',
    },
    {
      id: 'fr-hay-02', on: 'le chien', okunus: 'lö şiyen', tur: 'isim',
      arka: 'köpek',
      ornek: "Je promène mon chien tous les matins.",
      ornekTr: 'Köpeğimi her sabah gezdiriyorum.',
      not: '"Il fait un temps de chien" = hava berbat.',
    },
    {
      id: 'fr-hay-03', on: "l'oiseau", okunus: 'luazo', tur: 'isim',
      arka: 'kuş',
      ornek: "Il y a un oiseau sur la fenêtre.",
      ornekTr: 'Pencerede bir kuş var.',
      not: 'Çoğulu düzensizdir: des oiseaux.',
    },
    {
      id: 'fr-hay-04', on: "l'arbre", okunus: 'larbr', tur: 'isim',
      arka: 'ağaç',
      ornek: "On a planté un arbre dans le jardin.",
      ornekTr: 'Bahçeye bir ağaç diktik.',
      not: 'Orman "la forêt", yaprak "la feuille".',
    },
    {
      id: 'fr-hay-05', on: 'la mer', okunus: 'la mer', tur: 'isim (dişil)',
      arka: 'deniz',
      ornek: "En été, on va à la mer avec ma famille.",
      ornekTr: 'Yazın ailemle denize gidiyoruz.',
      not: 'Sesteşi "la mère" (anne) ile karışır; ikisi aynı okunur.',
    },
    {
      id: 'fr-hay-06', on: 'la montagne', okunus: 'la montany', tur: 'isim (dişil)',
      arka: 'dağ',
      ornek: "L'hiver, on va à la montagne pour skier.",
      ornekTr: 'Kışın kayak için dağa gidiyoruz.',
      not: '"gn" harf grubu Türkçedeki "ny" gibi okunur.',
    },
    {
      id: 'fr-hay-07', on: 'il pleut', okunus: 'il plö', tur: 'kalıp',
      arka: 'yağmur yağıyor',
      ornek: "Prends ton parapluie, il pleut.",
      ornekTr: 'Şemsiyeni al, yağmur yağıyor.',
      not: 'Öznesi olmayan bir fiildir; her zaman "il" ile kullanılır.',
    },
    {
      id: 'fr-hay-08', on: 'le soleil', okunus: 'lö soley', tur: 'isim',
      arka: 'güneş',
      ornek: "Il y a du soleil aujourd'hui.",
      ornekTr: 'Bugün güneş var.',
      not: 'Hava için "il fait soleil" de denir.',
    },
    {
      id: 'fr-hay-09', on: 'la fleur', okunus: 'la flör', tur: 'isim (dişil)',
      arka: 'çiçek',
      ornek: "Elle m'a offert des fleurs pour mon anniversaire.",
      ornekTr: 'Doğum günümde bana çiçek verdi.',
      not: '"eu" harf grubu Türkçedeki "ö" sesidir.',
    },
    {
      id: 'fr-hay-10', on: 'avoir un chat dans la gorge', okunus: 'avuar en şa dan la gorj', tur: 'deyim',
      arka: 'boğazı gıcıklanmak, sesi kısılmak',
      ornek: "Excusez-moi, j'ai un chat dans la gorge.",
      ornekTr: 'Affedersiniz, boğazım gıcıklandı.',
      not: 'Kelime kelime "boğazımda kedi var" demektir. Fransızların en sevdiği deyimlerden.',
    },
  ],
}

export default DESTE
