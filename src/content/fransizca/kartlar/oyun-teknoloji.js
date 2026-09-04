/**
 * DESTE — OYUN VE TEKNOLOJİ (Fransızca)
 *
 * Fransızca teknoloji sözlüğünde İngilizce kelimeler yaygındır ama resmî
 * karşılıkları da vardır (ordinateur, logiciel). Kartlarda ikisi de
 * gösterildi: öğrenci hangisini nerede duyacağını bilmeli.
 */

export const DESTE = {
  id: 'oyun-teknoloji',
  dil: 'fr',
  ad: 'Oyun ve teknoloji',
  simge: '🎮',
  aciklama: 'Oyun oynarken, telefonda ve internette karşına çıkan kelimeler.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'fr-oyn-01', on: 'le jeu vidéo', okunus: 'lö jö video', tur: 'isim',
      arka: 'video oyunu',
      ornek: "Mon jeu vidéo préféré sort la semaine prochaine.",
      ornekTr: 'En sevdiğim video oyunu haftaya çıkıyor.',
      not: 'Çoğulu düzensizdir: des jeux vidéo.',
    },
    {
      id: 'fr-oyn-02', on: "l'ordinateur", okunus: 'lordinatör', tur: 'isim',
      arka: 'bilgisayar',
      ornek: "Mon ordinateur est trop lent pour ce jeu.",
      ornekTr: 'Bilgisayarım bu oyun için çok yavaş.',
      not: 'Kısaltması "un ordi"dir ve günlük dilde çok kullanılır.',
    },
    {
      id: 'fr-oyn-03', on: "l'écran", okunus: 'lekran', tur: 'isim',
      arka: 'ekran',
      ornek: "Ne reste pas trop longtemps devant l'écran.",
      ornekTr: 'Ekranın karşısında çok uzun kalma.',
      not: 'Ekran görüntüsü "une capture d\'écran".',
    },
    {
      id: 'fr-oyn-04', on: 'le portable', okunus: 'lö portabl', tur: 'isim',
      arka: 'cep telefonu',
      ornek: "J'ai oublié mon portable à la maison.",
      ornekTr: 'Telefonumu evde unuttum.',
      not: '"le téléphone portable"ın kısası. Dizüstü bilgisayar da "un portable" olabilir.',
    },
    {
      id: 'fr-oyn-05', on: 'télécharger', okunus: 'teleşarje', tur: 'fiil',
      arka: 'indirmek (dosya)',
      ornek: "Je télécharge la mise à jour du jeu.",
      ornekTr: 'Oyunun güncellemesini indiriyorum.',
      not: 'Güncelleme "une mise à jour".',
    },
    {
      id: 'fr-oyn-06', on: 'la manette', okunus: 'la manet', tur: 'isim (dişil)',
      arka: 'oyun kolu, kumanda',
      ornek: "Passe-moi la manette, c'est mon tour.",
      ornekTr: 'Kumandayı bana ver, sıra bende.',
      not: 'Televizyon kumandası ise "la télécommande"dır.',
    },
    {
      id: 'fr-oyn-07', on: 'la partie', okunus: 'la parti', tur: 'isim (dişil)',
      arka: 'oyun turu, el',
      ornek: "On fait une dernière partie ?",
      ornekTr: 'Son bir tur oynayalım mı?',
      not: '"le jeu" oyunun kendisi, "la partie" oynanan turdur.',
    },
    {
      id: 'fr-oyn-08', on: 'perdre la connexion', okunus: 'perdr la koneksiyon', tur: 'kalıp',
      arka: 'bağlantıyı kaybetmek',
      ornek: "J'ai perdu la connexion en plein match.",
      ornekTr: 'Maçın ortasında bağlantım gitti.',
      not: 'Wi-Fi "le wifi" olarak aynen kullanılır.',
    },
    {
      id: 'fr-oyn-09', on: 'le niveau', okunus: 'lö nivo', tur: 'isim',
      arka: 'seviye, bölüm',
      ornek: "Je suis bloqué au niveau douze.",
      ornekTr: 'On ikinci bölümde takıldım.',
      not: 'Çoğulu "les niveaux". Dil seviyesi için de aynı kelime kullanılır.',
    },
    {
      id: 'fr-oyn-10', on: 'ça rame', okunus: 'sa ram', tur: 'kalıp (günlük)',
      arka: 'kasıyor, takılıyor (cihaz)',
      ornek: "Ça rame, je vais redémarrer le jeu.",
      ornekTr: 'Kasıyor, oyunu yeniden başlatacağım.',
      not: '"ramer" kürek çekmek demektir; zorlanmayı anlatır.',
    },
  ],
}

export default DESTE
