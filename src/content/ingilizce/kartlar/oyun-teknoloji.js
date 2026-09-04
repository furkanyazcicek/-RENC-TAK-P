/**
 * DESTE — OYUN VE TEKNOLOJİ (İngilizce)
 *
 * Bu alanda Türkçeye geçmiş çok kelime var ve öğrenci onları bildiğini
 * sanıyor. Kartlar bilinçli olarak "bildiğini sandığın ama yanlış
 * kullandığın" kelimelerden seçildi.
 */

export const DESTE = {
  id: 'oyun-teknoloji',
  dil: 'en',
  ad: 'Oyun ve teknoloji',
  simge: '🎮',
  aciklama: 'Oyunda ve telefonda geçen kelimeler; yanlış bildiklerin dâhil.',
  seviye: 'A2–B1',
  kartlar: [
    {
      id: 'en-oyn-01', on: 'log in', okunus: 'log in', tur: 'öbek fiil',
      arka: 'giriş yapmak',
      ornek: 'I cannot log in to my account.',
      ornekTr: 'Hesabıma giriş yapamıyorum.',
      not: 'Fiil ayrı ("log in"), isim bitişik ("a login"). Sınavda ölçülür.',
    },
    {
      id: 'en-oyn-02', on: 'download', okunus: 'daunloud', tur: 'fiil',
      arka: 'indirmek',
      ornek: 'The update is still downloading.',
      ornekTr: 'Güncelleme hâlâ iniyor.',
      not: 'Karşıtı "upload" (yüklemek). Türkçede ikisi de "yükleme" sanılır.',
    },
    {
      id: 'en-oyn-03', on: 'the screen', okunus: 'dı skriin', tur: 'isim',
      arka: 'ekran',
      ornek: 'My screen cracked when I dropped the phone.',
      ornekTr: 'Telefonu düşürünce ekranım çatladı.',
      not: 'Ekran görüntüsü "a screenshot".',
    },
    {
      id: 'en-oyn-04', on: 'run out of battery', okunus: 'ran aut ıv betıri', tur: 'kalıp',
      arka: 'şarjı bitmek',
      ornek: 'My phone ran out of battery during the match.',
      ornekTr: 'Maç sırasında telefonumun şarjı bitti.',
      not: '"run out of" kalıbı her tükenen şey için kullanılır: time, money, milk.',
    },
    {
      id: 'en-oyn-05', on: 'lag', okunus: 'leg', tur: 'isim / fiil',
      arka: 'gecikme; takılmak',
      ornek: 'The game lags whenever I join a server.',
      ornekTr: 'Bir sunucuya girdiğimde oyun takılıyor.',
      not: 'Oyuncular arasında evrensel bir kelime; Türkçeye de girdi.',
    },
    {
      id: 'en-oyn-06', on: 'give up', okunus: 'giv ap', tur: 'öbek fiil',
      arka: 'pes etmek, vazgeçmek',
      ornek: 'Do not give up, you are almost there.',
      ornekTr: 'Pes etme, neredeyse bitiyor.',
      not: 'Bir şeyden vazgeçmek: "give up ON something".',
    },
    {
      id: 'en-oyn-07', on: 'figure out', okunus: 'figır aut', tur: 'öbek fiil',
      arka: 'çözmek, anlamak',
      ornek: 'It took me an hour to figure out the puzzle.',
      ornekTr: 'Bulmacayı çözmem bir saat sürdü.',
      not: '"understand" bilmeyi, "figure out" uğraşıp bulmayı anlatır.',
    },
    {
      id: 'en-oyn-08', on: 'set up', okunus: 'set ap', tur: 'öbek fiil',
      arka: 'kurmak, ayarlamak',
      ornek: 'I need to set up my new controller.',
      ornekTr: 'Yeni kolumu kurmam gerek.',
      not: 'İsim hâli bitişiktir: "the setup".',
    },
    {
      id: 'en-oyn-09', on: 'take a break', okunus: 'teyk ı breyk', tur: 'eş dizim',
      arka: 'ara vermek',
      ornek: 'Let us take a break, my eyes hurt.',
      ornekTr: 'Bir ara verelim, gözlerim ağrıyor.',
      not: '"do a break" ya da "make a break" YANLIŞTIR; fiil "take"tir.',
    },
    {
      id: 'en-oyn-10', on: 'be worth it', okunus: 'bi vörth it', tur: 'kalıp',
      arka: 'değmek, buna değer',
      ornek: 'The game is expensive but it is worth it.',
      ornekTr: 'Oyun pahalı ama buna değer.',
      not: '"worth" bir sıfattır ve "to" almaz: "worth it", "worth to it" değil.',
    },
  ],
}

export default DESTE
