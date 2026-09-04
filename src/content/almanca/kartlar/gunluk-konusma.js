/**
 * DESTE — GÜNLÜK KONUŞMA (Almanca)
 *
 * Almanca ders kitapları resmî dili öğretir; sokakta konuşulan Almanca
 * daha kısadır ve kalıplarla ilerler. Bu deste o boşluğu kapatır.
 *
 * Her kartta KAYIT uyarısı var: bu kalıpların çoğu samimidir, resmî
 * ortamda ve "Sie" ile konuşurken kullanılmaz.
 */

export const DESTE = {
  id: 'gunluk-konusma',
  dil: 'de',
  ad: 'Günlük konuşma',
  simge: '💬',
  aciklama: 'Kitapların yazmadığı, Almanların sürekli söylediği kalıplar.',
  seviye: 'A2',
  kartlar: [
    {
      id: 'de-gun-01', on: 'Alles klar?', okunus: 'alıs klaar', tur: 'kalıp',
      arka: 'Her şey yolunda mı? / Tamam mı?',
      ornek: 'Hey, alles klar bei dir?',
      ornekTr: 'Selam, sende her şey yolunda mı?',
      not: 'Hem soru hem onaydır: "— Alles klar? — Alles klar."',
    },
    {
      id: 'de-gun-02', on: 'Was geht?', okunus: 'vas geet', tur: 'kalıp (argo)',
      arka: 'Naber?',
      ornek: 'Was geht, wie war dein Wochenende?',
      ornekTr: 'Naber, hafta sonun nasıldı?',
      not: 'Çok samimidir; yalnız yakın arkadaşa söylenir.',
    },
    {
      id: 'de-gun-03', on: 'Quatsch!', okunus: 'kvaç', tur: 'ünlem',
      arka: 'Saçmalık!',
      ornek: 'Quatsch, das stimmt überhaupt nicht!',
      ornekTr: 'Saçmalık, bu hiç doğru değil!',
      not: '"Unsinn" daha kibar, "Quatsch" daha günlük biçimdir.',
    },
    {
      id: 'de-gun-04', on: 'Genau', okunus: 'genau', tur: 'zarf',
      arka: 'Aynen, kesinlikle',
      ornek: 'Genau, das wollte ich auch sagen.',
      ornekTr: 'Aynen, ben de onu söyleyecektim.',
      not: 'Almanların en çok kullandığı onay kelimesi. Sohbette sürekli duyulur.',
    },
    {
      id: 'de-gun-05', on: 'Keine Ahnung', okunus: 'kaynı aanung', tur: 'kalıp',
      arka: 'Hiçbir fikrim yok',
      ornek: 'Keine Ahnung, frag lieber den Lehrer.',
      ornekTr: 'Hiçbir fikrim yok, en iyisi öğretmene sor.',
      not: '"Ich weiß nicht"ten daha doğal ve daha sık kullanılır.',
    },
    {
      id: 'de-gun-06', on: 'Ich habe keine Lust', okunus: 'ih haabı kaynı lust', tur: 'kalıp',
      arka: 'Canım istemiyor',
      ornek: 'Ich habe heute keine Lust auszugehen.',
      ornekTr: 'Bugün dışarı çıkmak istemiyorum.',
      not: 'Karşıtı "Ich habe Lust auf…" (canım … istiyor).',
    },
    {
      id: 'de-gun-07', on: 'Passt', okunus: 'past', tur: 'kalıp',
      arka: 'Uyar, olur',
      ornek: 'Um sechs? Passt!',
      ornekTr: 'Altıda mı? Olur!',
      not: '"passen" (uymak) fiilinden. Kısa onay için tek kelime yeter.',
    },
    {
      id: 'de-gun-08', on: 'echt', okunus: 'eht', tur: 'zarf',
      arka: 'gerçekten, cidden',
      ornek: 'Das war echt gut!',
      ornekTr: 'Bu cidden iyiydi!',
      not: '"wirklich" ile aynı anlamdadır ama konuşmada çok daha sık duyulur.',
    },
    {
      id: 'de-gun-09', on: 'Mach\'s gut', okunus: 'mahs guut', tur: 'kalıp',
      arka: 'Kendine iyi bak, görüşürüz',
      ornek: 'Ich muss los. Mach\'s gut!',
      ornekTr: 'Gitmem lazım. Kendine iyi bak!',
      not: 'Vedalaşmanın samimi biçimi. Cevabı "Du auch!"tur.',
    },
    {
      id: 'de-gun-10', on: 'Bis dann', okunus: 'bis dan', tur: 'kalıp',
      arka: 'Görüşürüz',
      ornek: 'Okay, bis dann!',
      ornekTr: 'Tamam, görüşürüz!',
      not: 'Ailesi: bis später (sonra), bis morgen (yarın), bis bald (yakında).',
    },
  ],
}

export default DESTE
