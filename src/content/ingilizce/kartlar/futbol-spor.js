/**
 * DESTE — FUTBOL VE SPOR (İngilizce)
 *
 * İngilizcede öğrencinin zorlandığı yer kelime değil, EŞ DİZİMDİR:
 * "score a goal" mi "make a goal" mu? Bu destede kartların çoğu tek
 * kelime değil, birlikte kullanılan kelime çiftidir — çünkü sınavda ve
 * konuşmada ölçülen budur.
 */

export const DESTE = {
  id: 'futbol-spor',
  dil: 'en',
  ad: 'Futbol ve spor',
  simge: '⚽',
  aciklama: 'Maç anlatımında geçen kelimeler ve hangi fiille kullanıldıkları.',
  seviye: 'A2–B1',
  kartlar: [
    {
      id: 'en-fut-01', on: 'score a goal', okunus: 'skor ı goul', tur: 'eş dizim',
      arka: 'gol atmak',
      ornek: 'He scored a goal in the last minute.',
      ornekTr: 'Son dakikada gol attı.',
      not: '"make a goal" YANLIŞTIR. Doğru fiil "score"dur.',
    },
    {
      id: 'en-fut-02', on: 'the referee', okunus: 'dı referi', tur: 'isim',
      arka: 'hakem',
      ornek: 'The referee showed him a red card.',
      ornekTr: 'Hakem ona kırmızı kart gösterdi.',
      not: 'Kısaltması "ref"tir ve konuşmada çok kullanılır.',
    },
    {
      id: 'en-fut-03', on: 'draw', okunus: 'dro', tur: 'isim / fiil',
      arka: 'beraberlik; berabere kalmak',
      ornek: 'The match ended in a draw.',
      ornekTr: 'Maç beraberlikle bitti.',
      not: 'Aynı kelime "çizmek" anlamına da gelir; bağlam ayırır.',
    },
    {
      id: 'en-fut-04', on: 'beat', okunus: 'biit', tur: 'fiil (düzensiz)',
      arka: 'yenmek (rakibi)',
      ornek: 'We beat them three-nil last week.',
      ornekTr: 'Geçen hafta onları 3-0 yendik.',
      not: 'Rakibi yenersin ("beat them"), maçı kazanırsın ("win the match"). Karıştırma.',
    },
    {
      id: 'en-fut-05', on: 'win', okunus: 'vin', tur: 'fiil (düzensiz)',
      arka: 'kazanmak (maçı, kupayı)',
      ornek: 'They won the cup for the first time.',
      ornekTr: 'Kupayı ilk kez kazandılar.',
      not: 'Nesnesi maç ya da kupadır, rakip DEĞİLDİR: "win the match", "beat the team".',
    },
    {
      id: 'en-fut-06', on: 'the pitch', okunus: 'dı piç', tur: 'isim',
      arka: 'saha (futbol)',
      ornek: 'The players are coming onto the pitch.',
      ornekTr: 'Oyuncular sahaya çıkıyor.',
      not: 'İngiltere\'de "pitch", Amerika\'da "field" denir.',
    },
    {
      id: 'en-fut-07', on: 'support a team', okunus: 'sıport ı tiim', tur: 'eş dizim',
      arka: 'bir takımı tutmak',
      ornek: 'I have supported this team since I was six.',
      ornekTr: 'Altı yaşımdan beri bu takımı tutuyorum.',
      not: 'Taraftar "a supporter" ya da "a fan"dir.',
    },
    {
      id: 'en-fut-08', on: 'work out', okunus: 'vörk aut', tur: 'öbek fiil',
      arka: 'spor yapmak, çalışmak (vücut)',
      ornek: 'I work out three times a week.',
      ornekTr: 'Haftada üç kez spor yapıyorum.',
      not: 'Aynı öbek "sonuç vermek" anlamına da gelir: "It worked out well."',
    },
    {
      id: 'en-fut-09', on: 'be into something', okunus: 'bi intu samthing', tur: 'kalıp',
      arka: 'bir şeye meraklı olmak',
      ornek: 'I am really into basketball these days.',
      ornekTr: 'Bu aralar basketbola çok meraklıyım.',
      not: 'Günlük konuşmada "hobim" demenin en doğal yolu.',
    },
    {
      id: 'en-fut-10', on: 'get injured', okunus: 'get incırd', tur: 'kalıp',
      arka: 'sakatlanmak',
      ornek: 'Our best player got injured in training.',
      ornekTr: 'En iyi oyuncumuz antrenmanda sakatlandı.',
      not: 'Sakatlık "an injury"dir. "Get + sıfat" kalıbı "olmak" anlamı verir.',
    },
  ],
}

export default DESTE
