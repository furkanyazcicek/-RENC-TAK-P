/**
 * DESTE — GÜNLÜK KONUŞMA (İngilizce)
 *
 * Ders kitabı İngilizcesi ile konuşulan İngilizce arasındaki fark bu
 * destededir. Öğrenci "How are you?" öğrenir ama karşısındaki "What have
 * you been up to?" der ve donar. Kartlar tam olarak o boşluğu hedefler.
 */

export const DESTE = {
  id: 'gunluk-konusma',
  dil: 'en',
  ad: 'Günlük konuşma',
  simge: '💬',
  aciklama: 'Kitapların yazmadığı, anadili konuşanların sürekli kullandığı kalıplar.',
  seviye: 'B1',
  kartlar: [
    {
      id: 'en-gun-01', on: 'What have you been up to?', okunus: 'vot hev yu bin ap tu', tur: 'kalıp',
      arka: 'Neler yapıyordun? Ne var ne yok?',
      ornek: 'Hey, long time no see! What have you been up to?',
      ornekTr: 'Selam, görüşmeyeli çok oldu! Ne var ne yok?',
      not: '"How are you"dan çok daha doğal bir açılış.',
    },
    {
      id: 'en-gun-02', on: 'never mind', okunus: 'nevır maynd', tur: 'kalıp',
      arka: 'boş ver, önemli değil',
      ornek: 'Never mind, I will do it myself.',
      ornekTr: 'Boş ver, ben kendim yaparım.',
      not: 'İki kelime yazılır. "Nevermind" yaygın bir yazım hatasıdır.',
    },
    {
      id: 'en-gun-03', on: 'no worries', okunus: 'nou vöriz', tur: 'kalıp',
      arka: 'sorun değil, önemli değil',
      ornek: 'You are late? No worries, we just started.',
      ornekTr: 'Geç mi kaldın? Sorun değil, daha yeni başladık.',
      not: 'Teşekküre cevap olarak da kullanılır: "Thanks!" — "No worries."',
    },
    {
      id: 'en-gun-04', on: 'I am not sure', okunus: 'ay em not şur', tur: 'kalıp',
      arka: 'emin değilim',
      ornek: 'I am not sure, let me check.',
      ornekTr: 'Emin değilim, bir bakayım.',
      not: 'Bilmediğini söylemenin en kibar yolu; "I do not know" biraz sert durur.',
    },
    {
      id: 'en-gun-05', on: 'kind of', okunus: 'kaynd ıv', tur: 'kalıp',
      arka: 'biraz, bir bakıma',
      ornek: 'I kind of like it, but not really.',
      ornekTr: 'Bir bakıma hoşuma gidiyor ama tam olarak değil.',
      not: 'Konuşmada "kinda" diye kısaltılır. Yazıda kısaltılmaz.',
    },
    {
      id: 'en-gun-06', on: 'to be honest', okunus: 'tu bi onıst', tur: 'kalıp',
      arka: 'açıkçası, dürüst olmak gerekirse',
      ornek: 'To be honest, I did not like the ending.',
      ornekTr: 'Açıkçası sonu hoşuma gitmedi.',
      not: 'Kısaltması "TBH" olarak yazışmalarda çok kullanılır.',
    },
    {
      id: 'en-gun-07', on: 'I feel like', okunus: 'ay fiil layk', tur: 'kalıp',
      arka: 'canım … istiyor',
      ornek: 'I feel like watching a film tonight.',
      ornekTr: 'Bu akşam canım film izlemek istiyor.',
      not: 'Ardından fiil gelirse -ing alır: feel like WATCHING.',
    },
    {
      id: 'en-gun-08', on: 'make sense', okunus: 'meyk sens', tur: 'eş dizim',
      arka: 'mantıklı olmak, anlaşılır olmak',
      ornek: 'That does not make sense to me.',
      ornekTr: 'Bu bana mantıklı gelmiyor.',
      not: '"do sense" ya da "have sense" YANLIŞTIR; fiil "make"tir.',
    },
    {
      id: 'en-gun-09', on: 'by the way', okunus: 'bay dı vey', tur: 'kalıp',
      arka: 'bu arada, aklıma gelmişken',
      ornek: 'By the way, did you finish the homework?',
      ornekTr: 'Bu arada, ödevi bitirdin mi?',
      not: 'Yazışmada "BTW" diye kısaltılır.',
    },
    {
      id: 'en-gun-10', on: 'fair enough', okunus: 'feır inaf', tur: 'kalıp',
      arka: 'haklısın, olur, kabul',
      ornek: 'You are tired? Fair enough, we can go home.',
      ornekTr: 'Yorgun musun? Haklısın, eve gidebiliriz.',
      not: 'Karşı tarafın gerekçesini kabul ettiğini gösterir.',
    },
  ],
}

export default DESTE
