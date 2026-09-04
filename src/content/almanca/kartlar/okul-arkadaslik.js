/**
 * DESTE — OKUL VE ARKADAŞLIK (Almanca)
 *
 * Almanya okul sistemi Türkiye'dekinden farklıdır ve kelimeler bu farkı
 * taşır (Gymnasium bir spor salonu değildir). Kartlarda bu tuzaklar
 * ayrıca not edildi.
 */

export const DESTE = {
  id: 'okul-arkadaslik',
  dil: 'de',
  ad: 'Okul ve arkadaşlık',
  simge: '🎒',
  aciklama: 'Sınıfta, teneffüste ve arkadaş sohbetinde geçen kelimeler.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'de-oku-01', on: 'das Gymnasium', okunus: 'das gümnaazyum', tur: 'isim (nötr)',
      arka: 'lise (akademik)',
      ornek: 'Ich gehe seit zwei Jahren aufs Gymnasium.',
      ornekTr: 'İki yıldır liseye gidiyorum.',
      not: 'DİKKAT: spor salonu DEĞİLDİR. Spor salonu "die Turnhalle"dir.',
    },
    {
      id: 'de-oku-02', on: 'die Klassenarbeit', okunus: 'di klasınarbayt', tur: 'isim (dişil)',
      arka: 'yazılı sınav',
      ornek: 'Morgen schreiben wir eine Klassenarbeit in Mathe.',
      ornekTr: 'Yarın matematik yazılısı yazıyoruz.',
      not: 'Sınav yazmak "eine Arbeit SCHREIBEN"dır; "machen" değil.',
    },
    {
      id: 'de-oku-03', on: 'die Hausaufgaben', okunus: 'di hausaufgaabın', tur: 'isim (çoğul)',
      arka: 'ödev',
      ornek: 'Ich mache meine Hausaufgaben nach dem Abendessen.',
      ornekTr: 'Ödevlerimi akşam yemeğinden sonra yapıyorum.',
      not: 'Her zaman çoğul kullanılır. "Haus" (ev) + "Aufgabe" (görev).',
    },
    {
      id: 'de-oku-04', on: 'die Pause', okunus: 'di pauzı', tur: 'isim (dişil)',
      arka: 'teneffüs, mola',
      ornek: 'Wir sehen uns in der Pause!',
      ornekTr: 'Teneffüste görüşürüz!',
      not: 'Ara vermek "eine Pause machen".',
    },
    {
      id: 'de-oku-05', on: 'der Freund', okunus: 'der froynd', tur: 'isim (eril)',
      arka: 'arkadaş; erkek sevgili',
      ornek: 'Ich treffe heute Abend meine Freunde.',
      ornekTr: 'Bu akşam arkadaşlarımla buluşuyorum.',
      not: 'DİKKAT: "mein Freund" çoğu zaman "sevgilim" demektir. Arkadaş için "ein Freund von mir" daha güvenlidir.',
    },
    {
      id: 'de-oku-06', on: 'lernen', okunus: 'lernın', tur: 'fiil',
      arka: 'öğrenmek; ders çalışmak',
      ornek: 'Ich lerne für die Prüfung am Freitag.',
      ornekTr: 'Cumadaki sınav için çalışıyorum.',
      not: 'Türkçedeki "ders çalışmak" için "studieren" KULLANILMAZ; o üniversitede okumaktır.',
    },
    {
      id: 'de-oku-07', on: 'die Note', okunus: 'di notı', tur: 'isim (dişil)',
      arka: 'not (puan)',
      ornek: 'Ich habe eine gute Note in Englisch bekommen.',
      ornekTr: 'İngilizceden iyi not aldım.',
      not: 'Almanya\'da notlar 1 (en iyi) ile 6 (en kötü) arasındadır — ters mantık.',
    },
    {
      id: 'de-oku-08', on: 'zu spät kommen', okunus: 'tsu şpeet komın', tur: 'kalıp',
      arka: 'geç kalmak',
      ornek: 'Entschuldigung, ich bin zu spät gekommen.',
      ornekTr: 'Kusura bakmayın, geç kaldım.',
      not: 'Almanya\'da dakiklik ciddiye alınır; bu cümle sık lazım olur.',
    },
    {
      id: 'de-oku-09', on: 'sich treffen', kok: 'treff', okunus: 'zih trefın', tur: 'fiil (dönüşlü)',
      arka: 'buluşmak',
      ornek: 'Wir treffen uns um vier vor der Schule.',
      ornekTr: 'Dörtte okulun önünde buluşuyoruz.',
      not: 'Karşılıklı dönüşlü: "wir treffen UNS" = birbirimizle buluşuyoruz.',
    },
    {
      id: 'de-oku-10', on: 'abhängen', kok: 'häng', okunus: 'aphengın', tur: 'fiil (günlük)',
      arka: 'takılmak, vakit geçirmek',
      ornek: 'Nach der Schule hängen wir im Park ab.',
      ornekTr: 'Okuldan sonra parkta takılıyoruz.',
      not: 'Gençlerin kullandığı ayrılabilir bir fiildir; ders kitabında geçmez.',
    },
  ],
}

export default DESTE
