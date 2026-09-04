/**
 * DESTE — GÜNLÜK KONUŞMA (Fransızca)
 *
 * Ders kitaplarının öğretmediği ama Fransızların sürekli söylediği
 * kalıplar. Bunlar bilinmezse öğrenci gramerini bilse bile konuşulanı
 * anlamaz; bunlar bilinirse dili "yaşayan" hâliyle duymaya başlar.
 *
 * KAYIT UYARISI her kartta var: bu kalıpların çoğu SAMİMİDİR ve resmî
 * ortamda kullanılmaz. Öğrenci bunu bilmeden kullanırsa zor durumda kalır.
 */

export const DESTE = {
  id: 'gunluk-konusma',
  dil: 'fr',
  ad: 'Günlük konuşma',
  simge: '💬',
  aciklama: 'Kitapların yazmadığı, Fransızların sürekli söylediği kalıplar.',
  seviye: 'A2',
  kartlar: [
    {
      id: 'fr-gun-01', on: 'ça va ?', okunus: 'sa va', tur: 'kalıp',
      arka: 'nasılsın? / iyi misin?',
      ornek: "Salut ! Ça va ?",
      ornekTr: 'Selam! Nasılsın?',
      not: 'Hem soru hem cevaptır: "— Ça va ? — Ça va."',
    },
    {
      id: 'fr-gun-02', on: 'quoi de neuf', okunus: 'kua dö nöf', tur: 'kalıp',
      arka: 'ne var ne yok?',
      ornek: "Alors, quoi de neuf depuis la dernière fois ?",
      ornekTr: 'Ee, geçen seferden beri ne var ne yok?',
      not: 'Kelime kelime "yeni ne var" demektir.',
    },
    {
      id: 'fr-gun-03', on: "n'importe quoi", okunus: 'nemport kua', tur: 'kalıp',
      arka: 'saçmalık; her neyse',
      ornek: "Il raconte n'importe quoi.",
      ornekTr: 'Saçmalıyor.',
      not: 'Ton belirleyicidir: kızgın da olabilir şakacı da.',
    },
    {
      id: 'fr-gun-04', on: 'du coup', okunus: 'dü ku', tur: 'bağlaç (günlük)',
      arka: 'e haliyle, o yüzden',
      ornek: "Il pleuvait, du coup on est restés à la maison.",
      ornekTr: 'Yağmur yağıyordu, o yüzden evde kaldık.',
      not: 'Gençlerin en çok kullandığı bağlaç. Resmî yazıda kullanılmaz.',
    },
    {
      id: 'fr-gun-05', on: 'bref', okunus: 'bref', tur: 'kalıp',
      arka: 'kısacası, neyse',
      ornek: "Bref, on a raté le bus.",
      ornekTr: 'Kısacası, otobüsü kaçırdık.',
      not: 'Uzun bir hikâyeyi toparlarken kullanılır.',
    },
    {
      id: 'fr-gun-06', on: "j'ai la flemme", okunus: 'je la flem', tur: 'kalıp',
      arka: 'üşeniyorum, canım istemiyor',
      ornek: "J'ai la flemme de sortir ce soir.",
      ornekTr: 'Bu akşam çıkmaya üşeniyorum.',
      not: 'Çok yaygın ve tamamen samimidir; öğretmene söylenmez.',
    },
    {
      id: 'fr-gun-07', on: 'ça marche', okunus: 'sa marş', tur: 'kalıp',
      arka: 'tamam, olur; çalışıyor',
      ornek: "— On se voit à six heures ? — Ça marche !",
      ornekTr: '— Altıda buluşalım mı? — Olur!',
      not: 'Hem "anlaştık" hem "cihaz çalışıyor" anlamına gelir.',
    },
    {
      id: 'fr-gun-08', on: 'grave', okunus: 'grav', tur: 'zarf (argo)',
      arka: 'çok, kesinlikle',
      ornek: "— Ce film est nul. — Grave !",
      ornekTr: '— Bu film berbat. — Kesinlikle!',
      not: 'Sıfat olarak "ciddi, ağır" demektir; gençlerde onay ünlemidir.',
    },
    {
      id: 'fr-gun-09', on: 'ça me dit rien', okunus: 'sa mö di riyen', tur: 'kalıp',
      arka: 'canım istemiyor; hiç tanıdık gelmiyor',
      ornek: "Le cinéma ? Ça me dit rien ce soir.",
      ornekTr: 'Sinema mı? Bu akşam canım istemiyor.',
      not: 'İki anlamı da vardır; bağlam ayırır.',
    },
    {
      id: 'fr-gun-10', on: 'à plus', okunus: 'a plüs', tur: 'kalıp',
      arka: 'görüşürüz',
      ornek: "Je dois y aller, à plus !",
      ornekTr: 'Gitmem lazım, görüşürüz!',
      not: '"à plus tard"ın kısası. Yazışmada "A+" diye kısaltılır.',
    },
  ],
}

export default DESTE
