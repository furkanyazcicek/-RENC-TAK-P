export default [
  {
    id: 'test-ogeler-5-kolay',
    title: 'Cümlenin Ögeleri 5 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-co-5-1',
        difficulty: 'easy',
        questionText: '"Köyün girişindeki eski çeşme nihayet onarıldı." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Köyün' },
          { id: 'B', text: 'Köyün girişindeki' },
          { id: 'C', text: 'eski çeşme' },
          { id: 'D', text: 'Köyün girişindeki eski çeşme' },
          { id: 'E', text: 'nihayet' }
        ],
        correctOptionId: 'D',
        explanation: 'onarıldı (yüklem). Onarılan ne? "Köyün girişindeki eski çeşme" (sözde özne). Tamlamalar bölünmeyeceği için tamamı özne kabul edilir.'
      },
      {
        id: 'q-co-5-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yüklem yanlış gösterilmiştir?',
        options: [
          { id: 'A', text: 'Arkadaşımın babası uzun yıllar (öğretmenlik yaptı).' },
          { id: 'B', text: 'Çocuklar bahçede oyun (oynuyorlar).' },
          { id: 'C', text: 'O, mahallemizin en sevilen (insanıydı).' },
          { id: 'D', text: 'Bütün bu olanlardan sonra ona (hak verdim).' },
          { id: 'E', text: 'Sınavı kazandığını duyunca hepimiz (mutlu) olduk.' }
        ],
        correctOptionId: 'E',
        explanation: '"mutlu olmak" yardımcı eylemle kurulan birleşik fiildir ve bölünemez. Yüklem sadece "mutlu" değil, "mutlu olduk" şeklinde bütün alınmalıdır.'
      },
      {
        id: 'q-co-5-3',
        difficulty: 'easy',
        questionText: '"Masadaki kırmızı elmayı bana uzattı." cümlesinde belirtili nesne aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Masadaki' },
          { id: 'B', text: 'Masadaki kırmızı elmayı' },
          { id: 'C', text: 'bana' },
          { id: 'D', text: 'uzattı' },
          { id: 'E', text: 'kırmızı elmayı' }
        ],
        correctOptionId: 'B',
        explanation: 'uzattı (yüklem). Neyi uzattı? "Masadaki kırmızı elmayı" (belirtili nesne). (Kime? bana - dolaylı tümleç).'
      },
      {
        id: 'q-co-5-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sorulardan hangisi özneyi buldurmaya yönelik bir sorudur?',
        options: [
          { id: 'A', text: 'Neyi?' },
          { id: 'B', text: 'Nerede?' },
          { id: 'C', text: 'Kim?' },
          { id: 'D', text: 'Nasıl?' },
          { id: 'E', text: 'Niçin?' }
        ],
        correctOptionId: 'C',
        explanation: 'Özneyi bulmak için yükleme "Kim?" veya "Ne?" sorusu sorulur.'
      },
      {
        id: 'q-co-5-5',
        difficulty: 'easy',
        questionText: '"Sabahları yarım saat yürüyüş yaparım." cümlesinde zaman bildiren zarf tümleci hangisidir?',
        options: [
          { id: 'A', text: 'Sabahları' },
          { id: 'B', text: 'yarım saat' },
          { id: 'C', text: 'yürüyüş' },
          { id: 'D', text: 'yaparım' },
          { id: 'E', text: 'yarım' }
        ],
        correctOptionId: 'A',
        explanation: 'yaparım (yüklem). Ne zaman yaparım? "Sabahları" (zaman bildiren zarf tümleci).'
      },
      {
        id: 'q-co-5-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç (yer tamlayıcısı) yoktur?',
        options: [
          { id: 'A', text: 'Kitabı masaya bıraktım.' },
          { id: 'B', text: 'Okuldan çok yorgun döndüm.' },
          { id: 'C', text: 'Kalemim evde kalmış.' },
          { id: 'D', text: 'Sabaha kadar hiç uyumadım.' },
          { id: 'E', text: 'Ahmet\'e durumu anlattım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde: uyumadım (yüklem), Ben (gizli özne), Sabaha kadar (zarf tümleci), hiç (zarf tümleci). Dolaylı tümleç yoktur. A\'da masaya, B\'de okuldan, C\'de evde, E\'de Ahmet\'e dolaylı tümleçtir.'
      },
      {
        id: 'q-co-5-7',
        difficulty: 'easy',
        questionText: '"Babam akşamüstü eve yorgun geldi." cümlesinin öge dizilişi hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Zarf Tümleci - Belirtisiz Nesne - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'geldi (Yüklem). Kim geldi? Babam (Özne). Ne zaman? akşamüstü (Zarf Tümleci). Nereye? eve (Dolaylı Tümleç). Nasıl? yorgun (Zarf Tümleci). Sıralama: Özne - Zarf Tümleci - Dolaylı Tümleç - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi isim cümlesidir?',
        options: [
          { id: 'A', text: 'Kar yağınca hava yumuşadı.' },
          { id: 'B', text: 'Kuşlar neşeyle ötüşüyordu.' },
          { id: 'C', text: 'Bu aralar çok dalgınsın.' },
          { id: 'D', text: 'Kapıyı hızla kapattı.' },
          { id: 'E', text: 'Sınava çalışmayı unuttum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "dalgınsın" kelimesidir. "Dalgın" isim soylu bir sözcüktür ve ek-fiil alarak yüklem olmuştur.'
      },
      {
        id: 'q-co-5-9',
        difficulty: 'easy',
        questionText: '"Gürültüden korkan kuş pırr diye uçtu." cümlesindeki "pırr diye" ifadesi hangi ögedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Belirtisiz Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Belirtili Nesne' }
        ],
        correctOptionId: 'D',
        explanation: 'uçtu (yüklem). Nasıl uçtu? "pırr diye" (durum zarfı / zarf tümleci).'
      },
      {
        id: 'q-co-5-10',
        difficulty: 'easy',
        questionText: '"Hafta sonu kütüphanede yeni bir kitap okudum." cümlesinde hangi öge YER ALMAMAKTADIR?',
        options: [
          { id: 'A', text: 'Gizli Özne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Belirtisiz Nesne' },
          { id: 'E', text: 'Belirtili Nesne' }
        ],
        correctOptionId: 'E',
        explanation: 'okudum (yüklem). Ben (gizli özne). Ne zaman? Hafta sonu (zarf T.). Nerede? kütüphanede (dolaylı T.). Ne? yeni bir kitap (belirtisiz nesne). Belirtili nesne yoktur.'
      }
    ]
  },
  {
    id: 'test-ogeler-5-orta',
    title: 'Cümlenin Ögeleri 5 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (51-60)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-co-5-11',
        difficulty: 'medium',
        questionText: '"Karşı dağların dumanlı zirveleri, buralardan çok net görünüyor." cümlesinin ögeleri sırasıyla hangisinde verilmiştir?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Özne - Dolaylı Tümleç - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'görünüyor (yüklem). Görünen ne? Karşı dağların dumanlı zirveleri (özne). Nereden? buralardan (dolaylı tümleç - ayrılma hâl eki almış). Nasıl? çok net (zarf tümleci). Sıralama: Özne - Dolaylı T. - Zarf T. - Yüklem.'
      },
      {
        id: 'q-co-5-12',
        difficulty: 'medium',
        questionText: '"Nereye" sorusunun zarf tümlecini buldurduğu cümle aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Yağmur yağınca herkes içeriye kaçtı.' },
          { id: 'B', text: 'Sesi duyan adam hızla dışarı çıktı.' },
          { id: 'C', text: 'Hafta sonu İstanbul\'a gideceğiz.' },
          { id: 'D', text: 'Kitapları masanın üzerine bırak.' },
          { id: 'E', text: 'Arkadaşım az önce çatıya çıktı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "dışarı" sözcüğü yönelme hâl eki almadığı (yalın olduğu) için zarf tümlecidir. Diğer seçeneklerdeki (içeriye, İstanbul\'a, üzerine, çatıya) kelimeler -e/-a hâl eki aldıklarından dolaylı tümleçtir.'
      },
      {
        id: 'q-co-5-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ara söz nesnenin açıklayıcısı durumundadır?',
        options: [
          { id: 'A', text: 'Köyümüze, o şirin kasabaya, yıllar sonra tekrar gideceğiz.' },
          { id: 'B', text: 'Ahmet, sınıfın en çalışkanı, dün sınavdan tam puan almış.' },
          { id: 'C', text: 'Bu güzel şiiri, Orhan Veli\'nin en sevdiğim eserini, sana okuyacağım.' },
          { id: 'D', text: 'Yarın, en sevdiğim gün, sinemaya gideceğiz.' },
          { id: 'E', text: 'Okulumuz, o büyük bina, geçen yıl tadilattan geçti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde: okuyacağım (yüklem). Neyi? "Bu güzel şiiri" (belirtili nesne). "Orhan Veli\'nin en sevdiğim eserini" ara sözü, belirtili nesneyi açıklamıştır.'
      },
      {
        id: 'q-co-5-14',
        difficulty: 'medium',
        questionText: '"Kimi zaman eski anılar insanın gözünde canlanıverir." cümlesinde vurgulanan öge aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Dolaylı Tümleç' },
          { id: 'B', text: 'Özne' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Belirtisiz Nesne' }
        ],
        correctOptionId: 'A',
        explanation: 'canlanıverir (yüklem). Nerede canlanıverir? "insanın gözünde" (dolaylı tümleç). Yüklemden hemen önce gelen öge dolaylı tümleç olduğu için vurgulanan öge odur.'
      },
      {
        id: 'q-co-5-15',
        difficulty: 'medium',
        questionText: '"Ne" sorusunun cevap bulduğu kelimenin cümlenin "öznesi" olduğu seçenek hangisidir?',
        options: [
          { id: 'A', text: 'Dışarı çıkarken yanına ne aldın?' },
          { id: 'B', text: 'Pazardan gelirken bana ne getirdin?' },
          { id: 'C', text: 'Bunca zamandır bize ne anlatıyorsun?' },
          { id: 'D', text: 'Ağacın dalından yere ne düştü?' },
          { id: 'E', text: 'Doğum gününde arkadaşına ne hediye edeceksin?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde yere düşme eylemini yapan (özne) sorulmaktadır. Diğer seçeneklerde (aldın, getirdin, anlatıyorsun, hediye edeceksin) özneler (sen) bellidir, bu yüzden buralardaki "ne" sorusu belirtisiz nesneyi buldurur.'
      },
      {
        id: 'q-co-5-16',
        difficulty: 'medium',
        questionText: '"Masmavi deniz, gökyüzüyle birleştiği ufuk çizgisinde harika bir manzara sunuyordu." cümlesinde zarf tümleci var mıdır, varsa hangisidir?',
        options: [
          { id: 'A', text: 'Zarf tümleci yoktur.' },
          { id: 'B', text: 'gökyüzüyle' },
          { id: 'C', text: 'harika bir' },
          { id: 'D', text: 'ufuk çizgisinde' },
          { id: 'E', text: 'birleştiği' }
        ],
        correctOptionId: 'A',
        explanation: 'sunuyordu (Y). Sunan ne? Masmavi deniz (Ö). Nerede sunuyordu? gökyüzüyle birleştiği ufuk çizgisinde (DT). Ne sunuyordu? harika bir manzara (Belirtisiz Nesne). Cümlede zarf tümleci yoktur.'
      },
      {
        id: 'q-co-5-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat grubu "Niçin/Neden" sorusuna cevap vererek zarf tümleci olmuştur?',
        options: [
          { id: 'A', text: 'Okula gitmek için erkenden uyandı.' },
          { id: 'B', text: 'Oraya uçakla gideceklermiş.' },
          { id: 'C', text: 'Benim için bunun hiçbir önemi yok.' },
          { id: 'D', text: 'Senin kadar çalışkanını görmedim.' },
          { id: 'E', text: 'Kardeşiyle beraber ödevini yaptı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Okula gitmek için" edat grubu, eylemin (uyanmanın) amacını/nedenini bildirerek "Niçin uyandı?" sorusuna yanıt verir ve zarf tümleci olur.'
      },
      {
        id: 'q-co-5-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde öge dizilişi "Zarf Tümleci - Özne - Yüklem" şeklindedir?',
        options: [
          { id: 'A', text: 'Yarın sabah Ankara\'ya gideceğiz.' },
          { id: 'B', text: 'Dışarıda çok şiddetli bir rüzgâr esiyor.' },
          { id: 'C', text: 'Birazdan misafirler gelecek.' },
          { id: 'D', text: 'Sessizce odasına çekildi.' },
          { id: 'E', text: 'Bu araba çok hızlı gidiyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde: gelecek (Yüklem). Gelecek olan kim? misafirler (Özne). Ne zaman gelecek? Birazdan (Zarf Tümleci). Sıralama: Zarf Tümleci - Özne - Yüklem.'
      },
      {
        id: 'q-co-5-19',
        difficulty: 'medium',
        questionText: '"Eski evin paslı anahtarını ceketinin sağ cebinde buldu." cümlesinde hangi öge kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Gizli Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'buldu (Y). Kim? O (Gizli Ö). Neyi? Eski evin paslı anahtarını (Belirtili Nesne). Nerede? ceketinin sağ cebinde (Dolaylı Tümleç). Zarf tümleci cümlede yoktur.'
      },
      {
        id: 'q-co-5-20',
        difficulty: 'medium',
        questionText: '"Bizi her zaman güleryüzle karşılayan bu sevimli amca, aslında çok yalnız biriydi." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'bu sevimli amca' },
          { id: 'B', text: 'amca' },
          { id: 'C', text: 'Bizi her zaman güleryüzle karşılayan bu sevimli amca' },
          { id: 'D', text: 'çok yalnız biriydi' },
          { id: 'E', text: 'Bizi her zaman güleryüzle karşılayan' }
        ],
        correctOptionId: 'C',
        explanation: 'aslında çok yalnız biriydi (yüklem - veya çok yalnız biriydi). Çok yalnız biri olan kim? "Bizi her zaman güleryüzle karşılayan bu sevimli amca" (Özne). Tamlamalar bölünmez.'
      }
    ]
  },
  {
    id: 'test-ogeler-5-zor',
    title: 'Cümlenin Ögeleri 5 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (61-70)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-co-5-21',
        difficulty: 'hard',
        questionText: '"Gözlerini ufuk çizgisinden ayırmadan bir süre öylece durdu." cümlesinin ögeleri aşağıdakilerden hangisinde doğru sıralanmıştır?',
        options: [
          { id: 'A', text: 'Zarf Tümleci - Zarf Tümleci - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Belirtili Nesne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Zarf Tümleci - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'durdu (Yüklem). O (Gizli özne). Nasıl durdu? "Gözlerini ufuk çizgisinden ayırmadan" (Zarf tümleci). Ne kadar durdu? "bir süre" (Zarf tümleci). Nasıl/Ne şekilde durdu? "öylece" (Zarf tümleci). Cümlede yan yana üç adet zarf tümleci kullanılmıştır.'
      },
      {
        id: 'q-co-5-22',
        difficulty: 'hard',
        questionText: '"Sonsuzluk hissi veren bu derin mavi gökyüzü, şairlerin ilham kaynağıdır." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'ilham kaynağıdır' },
          { id: 'B', text: 'şairlerin ilham kaynağıdır' },
          { id: 'C', text: 'kaynağıdır' },
          { id: 'D', text: 'veren bu derin mavi gökyüzü, şairlerin ilham kaynağıdır' },
          { id: 'E', text: 'gökyüzü, şairlerin ilham kaynağıdır' }
        ],
        correctOptionId: 'B',
        explanation: '"şairlerin ilham kaynağı" bir belirtili isim tamlamasıdır ve bölünemez. Ek-fiil alarak cümlenin tamamı yüklem olmuştur.'
      },
      {
        id: 'q-co-5-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "cümle dışı unsur" (CDU) yoktur?',
        options: [
          { id: 'A', text: 'Eyvah, anahtarı içeride unuttum!' },
          { id: 'B', text: 'Arkadaşlar, lütfen sessiz olalım.' },
          { id: 'C', text: 'Görünen o ki, bu iş burada bitmeyecek.' },
          { id: 'D', text: 'Oysaki ben ona her zaman güvendim.' },
          { id: 'E', text: 'Rüzgârın sesi gecenin sessizliğini bozuyordu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde ünlem, hitap veya bağlaç yoktur, tüm sözcükler cümlenin bir ögesidir. A\'da "Eyvah", B\'de "Arkadaşlar", C\'de "Görünen o ki", D\'de "Oysaki" cümle dışı unsurlardır.'
      },
      {
        id: 'q-co-5-24',
        difficulty: 'hard',
        questionText: '"Çocukluğumun geçtiği bu şirin kasaba, şimdi beton yığınlarına teslim olmuş durumda." cümlesinin öge dizilişi nedir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'B', text: 'Özne - Zaman Zarfı - Yüklem' },
          { id: 'C', text: 'Dolaylı Tümleç - Özne - Yüklem' },
          { id: 'D', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Zaman Zarfı - Özne - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'teslim olmuş durumda(dır) (veya teslim olmuş durumdadır Yüklem). Teslim olmuş durumda olan ne? "Çocukluğumun geçtiği bu şirin kasaba" (Özne). Ne zaman? "şimdi" (Zarf Tümleci). Nereye/Neye? "beton yığınlarına" (Dolaylı Tümleç). Sıralama: Özne - Zarf T. - Dolaylı T. - Yüklem.'
      },
      {
        id: 'q-co-5-25',
        difficulty: 'hard',
        questionText: '"İnsanın kendini bulması, kalabalıklardan uzaklaşıp sessizliği dinlemesiyle mümkündür." cümlesinde hangi ögeler yer almaktadır?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Zarf Tümleci - Özne - Yüklem' },
          { id: 'E', text: 'Dolaylı Tümleç - Özne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'mümkündür (Yüklem). Mümkün olan ne? "İnsanın kendini bulması" (Özne). Nasıl / Neyle mümkündür? "kalabalıklardan uzaklaşıp sessizliği dinlemesiyle" (Edat/Zarf Tümleci). Sıralama: Özne - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-5-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne açıklayıcısıyla birlikte verilmiştir?',
        options: [
          { id: 'A', text: 'O güzelim yılları, gençliğimi, çok özlüyorum.' },
          { id: 'B', text: 'Ahmet Bey, mahallenin muhtarı, bize çok yardımcı oldu.' },
          { id: 'C', text: 'Buralara, çocukluğumun geçtiği topraklara, veda etmek zor.' },
          { id: 'D', text: 'Sabahları, günün o en sakin saatlerini, kitap okuyarak geçiririm.' },
          { id: 'E', text: 'Bugün onu, eski sınıf arkadaşımı, sokakta gördüm.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Ahmet Bey" cümlenin öznesidir ve "mahallenin muhtarı" ara sözü özneyi açıklamaktadır. A, D ve E\'de nesneyi, C\'de dolaylı tümleci açıklamaktadır.'
      },
      {
        id: 'q-co-5-27',
        difficulty: 'hard',
        questionText: '"Masum bir çocuğun gülüşü kadar temizdi onun kalbi." cümlesinin kurallı hâli ve ögeleri aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Yüklem - Özne' },
          { id: 'D', text: 'Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Belirtisiz Nesne - Özne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'Kurallı hâli: "Onun kalbi (özne) masum bir çocuğun gülüşü kadar (zarf tümleci/edat tümleci) temizdi (yüklem)." Cümle Özne, Zarf Tümleci ve Yüklemden oluşmaktadır.'
      },
      {
        id: 'q-co-5-28',
        difficulty: 'hard',
        questionText: '"Edilgen çatılı fiillerde başkası tarafından yapılma anlamı vardır." Aşağıdaki cümlelerin hangisinde sözde özne KULLANILMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Evraklar büyük bir titizlikle incelendi.' },
          { id: 'B', text: 'Odadaki eşyalar dışarı çıkarıldı.' },
          { id: 'C', text: 'Çocuk, annesinin sözlerinden çok alındı.' },
          { id: 'D', text: 'Yeni alınan kararlar herkese duyuruldu.' },
          { id: 'E', text: 'Bahçedeki ağaçlar budandı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "alındı" kelimesidir. Alınma eylemini bizzat "Çocuk" kendisi yapmıştır (Dönüşlü çatı). Gerçek özne vardır. Diğer seçeneklerde (incelendi, çıkarıldı, duyuruldu, budandı) işi yapan belli değildir, özneler sözde öznedir.'
      },
      {
        id: 'q-co-5-29',
        difficulty: 'hard',
        questionText: '"Sonsuzluk denizinde kaybolmuş bir gemi gibi çaresizce sağa sola savruluyordu." cümlesinde hangi öge yer almaz?',
        options: [
          { id: 'A', text: 'Gizli Özne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Yüklem' },
          { id: 'E', text: 'Belirtili Nesne' }
        ],
        correctOptionId: 'E',
        explanation: 'savruluyordu (yüklem). O (gizli özne). Nasıl savruluyordu? "Sonsuzluk denizinde kaybolmuş bir gemi gibi çaresizce" (zarf tümleci). Nereye? "sağa sola" (dolaylı tümleç). Belirtili nesne cümlede yoktur.'
      },
      {
        id: 'q-co-5-30',
        difficulty: 'hard',
        questionText: '"Bazen, sadece bir kelime, insanın hayatını baştan aşağı değiştirmeye yeter." cümlesinde altı çizili "Bazen" ve "baştan aşağı" sözcükleri cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Dolaylı Tümleç - Zarf Tümleci' },
          { id: 'B', text: 'Zarf Tümleci - Zarf Tümleci' },
          { id: 'C', text: 'Özne - Belirtili Nesne' },
          { id: 'D', text: 'Zarf Tümleci - Dolaylı Tümleç' },
          { id: 'E', text: 'Zaman Zarfı - Özne' }
        ],
        correctOptionId: 'B',
        explanation: 'yeter (yüklem). Yeten ne? sadece bir kelime (özne). Ne zaman yeter? Bazen (zarf tümleci). Neye yeter? insanın hayatını baştan aşağı değiştirmeye (dolaylı tümleç, kendi içinde "nasıl değiştirmeye -> baştan aşağı" zarf tümlecidir, ama eğer tek başına cümlenin zarf tümleci diye sorulursa genel yapıda ZT\'dir. Soru "bazen" ve "baştan aşağı" için doğrudan Zarf Tümleci cevabını bekler).'
      }
    ]
  }
];
