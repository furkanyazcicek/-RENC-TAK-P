/**
 * DESTE — HAYVANLAR VE DOĞA (Almanca)
 *
 * Görsel olarak en kolay hatırlanan deste, ama Almancada her isim
 * artikeliyle gelir. Bu destede artikeller bilinçli olarak karışık
 * dağıtıldı: öğrenci "hayvanlar hep eril" gibi yanlış bir kural
 * çıkarmasın.
 */

export const DESTE = {
  id: 'hayvanlar-doga',
  dil: 'de',
  ad: 'Hayvanlar ve doğa',
  simge: '🌿',
  aciklama: 'Hayvanlar, hava ve doğa; her isim artikeliyle.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'de-hay-01', on: 'die Katze', okunus: 'di katsı', tur: 'isim (dişil)',
      arka: 'kedi',
      ornek: 'Meine Katze schläft den ganzen Tag auf dem Sofa.',
      ornekTr: 'Kedim bütün gün kanepede uyuyor.',
      not: 'DİŞİLDİR. Erkek kedi "der Kater"dır.',
    },
    {
      id: 'de-hay-02', on: 'der Hund', okunus: 'der hund', tur: 'isim (eril)',
      arka: 'köpek',
      ornek: 'Ich gehe jeden Morgen mit meinem Hund spazieren.',
      ornekTr: 'Her sabah köpeğimle yürüyüşe çıkıyorum.',
      not: 'Yürüyüşe çıkmak "spazieren gehen"dır.',
    },
    {
      id: 'de-hay-03', on: 'der Vogel', okunus: 'der foogıl', tur: 'isim (eril)',
      arka: 'kuş',
      ornek: 'Ein Vogel sitzt auf dem Fenster.',
      ornekTr: 'Pencerede bir kuş oturuyor.',
      not: 'Çoğulu "die Vögel" — sesli harf değişir (Umlaut).',
    },
    {
      id: 'de-hay-04', on: 'der Baum', okunus: 'der baum', tur: 'isim (eril)',
      arka: 'ağaç',
      ornek: 'Wir haben einen Baum im Garten gepflanzt.',
      ornekTr: 'Bahçeye bir ağaç diktik.',
      not: 'Çoğulu "die Bäume". Orman "der Wald".',
    },
    {
      id: 'de-hay-05', on: 'das Meer', okunus: 'das meer', tur: 'isim (nötr)',
      arka: 'deniz',
      ornek: 'Im Sommer fahren wir ans Meer.',
      ornekTr: 'Yazın denize gidiyoruz.',
      not: '"die See" de deniz demektir; "der See" ise GÖLDÜR. Artikel anlamı değiştirir.',
    },
    {
      id: 'de-hay-06', on: 'der Berg', okunus: 'der berg', tur: 'isim (eril)',
      arka: 'dağ',
      ornek: 'Im Winter fahren wir in die Berge zum Skifahren.',
      ornekTr: 'Kışın kayak için dağlara gidiyoruz.',
      not: 'Dağlara gitmek çoğul kullanılır: "in die Berge".',
    },
    {
      id: 'de-hay-07', on: 'Es regnet', okunus: 'es regnıt', tur: 'kalıp',
      arka: 'Yağmur yağıyor',
      ornek: 'Nimm einen Schirm mit, es regnet.',
      ornekTr: 'Şemsiye al, yağmur yağıyor.',
      not: 'Öznesi olmayan fiillerdendir; her zaman "es" ile kullanılır.',
    },
    {
      id: 'de-hay-08', on: 'die Sonne', okunus: 'di zonı', tur: 'isim (dişil)',
      arka: 'güneş',
      ornek: 'Heute scheint die Sonne.',
      ornekTr: 'Bugün güneş var.',
      not: 'DİŞİLDİR — ay ise ERİLDİR (der Mond). Türkçede böyle bir ayrım yok.',
    },
    {
      id: 'de-hay-09', on: 'die Blume', okunus: 'di bluumı', tur: 'isim (dişil)',
      arka: 'çiçek',
      ornek: 'Sie hat mir zum Geburtstag Blumen geschenkt.',
      ornekTr: 'Doğum günümde bana çiçek hediye etti.',
      not: 'Hediye etmek "schenken". Doğum günü "der Geburtstag".',
    },
    {
      id: 'de-hay-10', on: 'Schwein haben', okunus: 'şvayn haabın', tur: 'deyim',
      arka: 'şansı yaver gitmek',
      ornek: 'Da hast du aber Schwein gehabt!',
      ornekTr: 'Şansın varmış!',
      not: 'Kelime kelime "domuza sahip olmak" demektir. Almancanın en bilinen deyimlerinden.',
    },
  ],
}

export default DESTE
