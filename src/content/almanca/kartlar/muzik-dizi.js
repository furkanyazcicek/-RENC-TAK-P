/**
 * DESTE — MÜZİK, DİZİ VE FİLM (Almanca)
 *
 * Almanca dizi ve müzik kelimelerinin çoğu İngilizceden gelir ama
 * ARTİKEL alır ve Almanca çekilir. Öğrencinin şaşırdığı yer burasıdır:
 * kelimeyi tanır ama cümleye yerleştiremez.
 */

export const DESTE = {
  id: 'muzik-dizi',
  dil: 'de',
  ad: 'Müzik, dizi ve film',
  simge: '🎬',
  aciklama: 'Dizi, film ve müzik konuşurken gereken kelimeler.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'de-muz-01', on: 'das Lied', okunus: 'das liit', tur: 'isim (nötr)',
      arka: 'şarkı',
      ornek: 'Dieses Lied höre ich jeden Tag.',
      ornekTr: 'Bu şarkıyı her gün dinliyorum.',
      not: 'Çoğulu "die Lieder". "der Song" da kullanılır ama "Lied" daha Almancadır.',
    },
    {
      id: 'de-muz-02', on: 'die Serie', okunus: 'di zerye', tur: 'isim (dişil)',
      arka: 'dizi',
      ornek: 'Ich habe die ganze Serie an einem Wochenende gesehen.',
      ornekTr: 'Bütün diziyi bir hafta sonunda izledim.',
      not: 'Bölüm "die Folge", sezon "die Staffel".',
    },
    {
      id: 'de-muz-03', on: 'der Film', okunus: 'der film', tur: 'isim (eril)',
      arka: 'film',
      ornek: 'Der Film dauert zwei Stunden.',
      ornekTr: 'Film iki saat sürüyor.',
      not: 'İzlemek "sehen" ya da "anschauen". Süre "dauern" fiiliyle söylenir.',
    },
    {
      id: 'de-muz-04', on: 'der Untertitel', okunus: 'der untırtitıl', tur: 'isim (eril)',
      arka: 'altyazı',
      ornek: 'Ich schaue Filme mit deutschen Untertiteln.',
      ornekTr: 'Filmleri Almanca altyazıyla izliyorum.',
      not: '"unter" (alt) + "Titel" (başlık). Genelde çoğul kullanılır.',
    },
    {
      id: 'de-muz-05', on: 'die Handlung', okunus: 'di handlung', tur: 'isim (dişil)',
      arka: 'konu, olay örgüsü',
      ornek: 'Die Handlung wird in der zweiten Staffel kompliziert.',
      ornekTr: 'İkinci sezonda konu karmaşıklaşıyor.',
      not: '"handeln" (davranmak, konu almak) fiilinden gelir.',
    },
    {
      id: 'de-muz-06', on: 'die Stimme', okunus: 'di ştimı', tur: 'isim (dişil)',
      arka: 'ses (insan sesi)',
      ornek: 'Sie hat eine unglaubliche Stimme.',
      ornekTr: 'İnanılmaz bir sesi var.',
      not: 'Cihaz sesi "der Ton"dur. "die Stimme" yalnız insan ve hayvan sesidir.',
    },
    {
      id: 'de-muz-07', on: 'die Figur', okunus: 'di figuur', tur: 'isim (dişil)',
      arka: 'karakter (film/dizi)',
      ornek: 'Meine Lieblingsfigur stirbt am Ende.',
      ornekTr: 'En sevdiğim karakter sonda ölüyor.',
      not: '"Lieblings-" öneki "en sevdiğim" demektir ve her isme eklenebilir.',
    },
    {
      id: 'de-muz-08', on: 'anschauen', kok: 'schau', okunus: 'anşauın', tur: 'fiil (ayrılabilir)',
      arka: 'izlemek, seyretmek',
      ornek: 'Wir schauen heute Abend einen Film an.',
      ornekTr: 'Bu akşam bir film izliyoruz.',
      not: 'AYRILABİLİR fiildir: ön ek "an" cümlenin SONUNA gider.',
    },
    {
      id: 'de-muz-09', on: 'der Ohrwurm', okunus: 'der oorvurm', tur: 'isim (eril)',
      arka: 'akıldan çıkmayan şarkı',
      ornek: 'Dieses Lied ist ein richtiger Ohrwurm.',
      ornekTr: 'Bu şarkı tam bir akıl kurdu.',
      not: 'Kelime kelime "kulak kurdu" demektir. Almancanın en sevilen kelimelerinden.',
    },
    {
      id: 'de-muz-10', on: 'krass', okunus: 'kras', tur: 'sıfat (argo)',
      arka: 'inanılmaz, acayip',
      ornek: 'Das Konzert war echt krass!',
      ornekTr: 'Konser gerçekten acayipti!',
      not: 'Gençlerin en çok kullandığı kelime. Hem olumlu hem olumsuz olabilir.',
    },
  ],
}

export default DESTE
