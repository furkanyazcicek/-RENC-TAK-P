export default [
  {
    id: 'test-ogeler-10-kolay',
    title: 'Cümlenin Ögeleri 10 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (91-100)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-co-10-1',
        difficulty: 'easy',
        questionText: '"Akşam karanlığı çökünce herkes evine döndü." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'döndü' },
          { id: 'B', text: 'evine döndü' },
          { id: 'C', text: 'herkes' },
          { id: 'D', text: 'Akşam karanlığı çökünce' },
          { id: 'E', text: 'çökünce' }
        ],
        correctOptionId: 'A',
        explanation: 'Cümlenin yargısını bildiren ve cümleyi bitiren kelime "döndü" çekimli fiilidir. Yüklem "döndü" kelimesidir.'
      },
      {
        id: 'q-co-10-2',
        difficulty: 'easy',
        questionText: '"Yeni aldığım araba dün akşam bozuldu." cümlesinde özne görevinde bulunan söz öbeği hangisidir?',
        options: [
          { id: 'A', text: 'araba' },
          { id: 'B', text: 'Yeni aldığım' },
          { id: 'C', text: 'Yeni aldığım araba' },
          { id: 'D', text: 'dün akşam' },
          { id: 'E', text: 'bozuldu' }
        ],
        correctOptionId: 'C',
        explanation: 'bozuldu (yüklem). Bozulan ne? "Yeni aldığım araba" (özne). Sıfat tamlaması olduğu için bölünemez.'
      },
      {
        id: 'q-co-10-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz nesne vardır?',
        options: [
          { id: 'A', text: 'Annem akşam yemeği için ıspanak yapmış.' },
          { id: 'B', text: 'Sınavı kazandığını herkese duyurdu.' },
          { id: 'C', text: 'Bunu sana kim anlattı?' },
          { id: 'D', text: 'Dolaptaki eski kıyafetleri çıkardık.' },
          { id: 'E', text: 'Evimizin çatısını tamir ettirdik.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde: yapmış (yüklem). Ne yapmış? "ıspanak" (belirtisiz nesne). D ve E seçeneklerinde (kıyafetleri, çatısını) ismin -i (belirtme) hâlini aldıkları için belirtili nesnelerdir.'
      },
      {
        id: 'q-co-10-4',
        difficulty: 'easy',
        questionText: '"Sabah erkenden ormana mantar toplamaya gittiler." cümlesinde dolaylı tümleç (yer tamlayıcısı) olan kelime hangisidir?',
        options: [
          { id: 'A', text: 'Sabah' },
          { id: 'B', text: 'erkenden' },
          { id: 'C', text: 'ormana' },
          { id: 'D', text: 'mantar' },
          { id: 'E', text: 'toplamaya' }
        ],
        correctOptionId: 'C',
        explanation: 'gittiler (yüklem). Nereye gittiler? "ormana". İsmin yönelme hâl ekini (-e, -a) almış ve yer bildirmiştir.'
      },
      {
        id: 'q-co-10-5',
        difficulty: 'easy',
        questionText: '"Gözleri bozuk olduğu için kitabı çok yakından okuyordu." cümlesinde "niçin" sorusunun yanıtı (zarf tümleci) hangisidir?',
        options: [
          { id: 'A', text: 'Gözleri' },
          { id: 'B', text: 'Gözleri bozuk olduğu için' },
          { id: 'C', text: 'kitabı' },
          { id: 'D', text: 'çok yakından' },
          { id: 'E', text: 'okuyordu' }
        ],
        correctOptionId: 'B',
        explanation: 'okuyordu (yüklem). Niçin okuyordu? "Gözleri bozuk olduğu için" (neden bildiren zarf tümleci).'
      },
      {
        id: 'q-co-10-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gizli özne vardır?',
        options: [
          { id: 'A', text: 'Kuşlar gökyüzünde daireler çiziyordu.' },
          { id: 'B', text: 'Ali, yarın sabah İzmir\'e gidecek.' },
          { id: 'C', text: 'Söylenenleri hiç dikkatle dinlemiyorsun.' },
          { id: 'D', text: 'Bahçedeki güller mis gibi kokuyordu.' },
          { id: 'E', text: 'Kardeşim soruların hepsini çözmüş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "dinlemiyorsun"dur. Dinlemeyen kim? "Sen" (gizli özne). Diğer seçeneklerde özneler (Kuşlar, Ali, güller, Kardeşim) cümlede açıktır.'
      },
      {
        id: 'q-co-10-7',
        difficulty: 'easy',
        questionText: '"Nereyi" sorusu eyleme sorulduğunda hangi ögeyi buldurur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Belirtisiz Nesne' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Zarf Tümleci' }
        ],
        correctOptionId: 'D',
        explanation: '"Nereyi, Neyi, Kimi" gibi ismin belirtme hâli ekini (-i) almış sorular Belirtili Nesneyi buldurur.'
      },
      {
        id: 'q-co-10-8',
        difficulty: 'easy',
        questionText: '"Rüzgâr, sonbahar yapraklarını havaya uçurdu." cümlesinin öge dizilişi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Dolaylı Tümleç - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Belirtili Nesne - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Özne - Belirtisiz Nesne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'uçurdu (yüklem). Kim/Ne? Rüzgâr (özne). Neyi? sonbahar yapraklarını (belirtili nesne). Nereye? havaya (dolaylı tümleç).'
      },
      {
        id: 'q-co-10-9',
        difficulty: 'easy',
        questionText: '"Büyükannem, her akşam bize masal anlatırdı." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Zaman Zarfı' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'anlatırdı (Y). Büyükannem (Ö). her akşam (Zarf T.). bize (Dolaylı T.). masal (Belirtisiz Nesne). Cümlede ismin -i hâlini almış bir "Belirtili Nesne" yoktur.'
      },
      {
        id: 'q-co-10-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi sadece özne ve yüklemden oluşmuştur?',
        options: [
          { id: 'A', text: 'Dışarıda hafif bir yağmur çiseliyor.' },
          { id: 'B', text: 'Evin kedisi, minderin üzerinde uyuyordu.' },
          { id: 'C', text: 'En sevdiğim tatlı, sütlaçtır.' },
          { id: 'D', text: 'Ahmet yarın Ankara\'ya gidecekmiş.' },
          { id: 'E', text: 'Masadaki bardak ansızın yere düştü.' }
        ],
        correctOptionId: 'C',
        explanation: 'sütlaçtır (yüklem). Sütlaç olan ne? "En sevdiğim tatlı" (özne). Cümle sadece özne ve yüklemden oluşmaktadır.'
      }
    ]
  },
  {
    id: 'test-ogeler-10-orta',
    title: 'Cümlenin Ögeleri 10 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (101-110)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-co-10-11',
        difficulty: 'medium',
        questionText: '"Köyün delikanlıları, düğün hazırlıklarına sabahın erken saatlerinde başladılar." cümlesinde zarf tümleci hangisidir?',
        options: [
          { id: 'A', text: 'Köyün delikanlıları' },
          { id: 'B', text: 'düğün hazırlıklarına' },
          { id: 'C', text: 'sabahın erken saatlerinde' },
          { id: 'D', text: 'sabahın' },
          { id: 'E', text: 'başladılar' }
        ],
        correctOptionId: 'C',
        explanation: 'başladılar (yüklem). Ne zaman başladılar? "sabahın erken saatlerinde" (zaman bildiren zarf tümleci).'
      },
      {
        id: 'q-co-10-12',
        difficulty: 'medium',
        questionText: '"Nereye" sorusunun zarf tümlecini buldurduğu seçenek aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Birazdan okula gideceğiz.' },
          { id: 'B', text: 'Kutuları çatıya taşıdılar.' },
          { id: 'C', text: 'Sesi duyan adam aşağı koştu.' },
          { id: 'D', text: 'Lütfen içeriye giriniz.' },
          { id: 'E', text: 'Arabayı garaja park ettim.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yer-yön sözcükleri ismin hâl eklerini (-e, -de, -den) almadığında zarf tümleci olurlar. C seçeneğinde "aşağı" kelimesi eke sahip değildir ve zarf tümlecidir.'
      },
      {
        id: 'q-co-10-13',
        difficulty: 'medium',
        questionText: '"Teyzem, annemin kız kardeşi, yarın yurt dışından dönüyor." cümlesinde ara söz hangi ögenin açıklayıcısıdır?',
        options: [
          { id: 'A', text: 'Yüklemin' },
          { id: 'B', text: 'Öznenin' },
          { id: 'C', text: 'Nesnenin' },
          { id: 'D', text: 'Dolaylı Tümlecin' },
          { id: 'E', text: 'Zarf Tümlecinin' }
        ],
        correctOptionId: 'B',
        explanation: 'dönüyor (yüklem). Dönen kim? Teyzem (özne). "annemin kız kardeşi" ara sözü, kendinden önceki özneyi açıklamıştır.'
      },
      {
        id: 'q-co-10-14',
        difficulty: 'medium',
        questionText: '"Ne" kelimesi aşağıdaki cümlelerin hangisinde özneyi buldurmaya yöneliktir?',
        options: [
          { id: 'A', text: 'Çarşıdan gelirken ne aldın?' },
          { id: 'B', text: 'Tatilde ailenize ne anlattınız?' },
          { id: 'C', text: 'Bunca zaman ona ne taşıdın?' },
          { id: 'D', text: 'Pencerenin pervazından ne düştü?' },
          { id: 'E', text: 'Akşama misafirlere ne ikram edeceksin?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "düşme" eylemini yapan varlık (özne) sorulmaktadır. Diğerlerinde gizli özneler (sen, siz) olduğu için "ne" kelimesi nesneyi buldurur.'
      },
      {
        id: 'q-co-10-15',
        difficulty: 'medium',
        questionText: 'Fiil cümlelerinde vurgu yüklemden bir önceki ögededir.\n"Adam cebindeki cüzdanı dün telaşla yolda düşürmüş." cümlesinde vurgulanan öge hangisidir?',
        options: [
          { id: 'A', text: 'Belirtili Nesne' },
          { id: 'B', text: 'Zaman Zarfı' },
          { id: 'C', text: 'Durum Zarfı' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Özne' }
        ],
        correctOptionId: 'D',
        explanation: 'düşürmüş (yüklem). Nerede düşürmüş? "yolda" (dolaylı tümleç). Yüklemden hemen önce geldiği için vurgulanan öge dolaylı tümleçtir.'
      },
      {
        id: 'q-co-10-16',
        difficulty: 'medium',
        questionText: '"Bazen ufak bir söz, insanın içindeki fırtınaları dindirebilir." cümlesinde hangi ögeler bulunmaktadır?',
        options: [
          { id: 'A', text: 'Zarf Tümleci - Özne - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Belirtili Nesne - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Dolaylı Tümleç - Özne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'dindirebilir (yüklem). Dindirebilen ne? "ufak bir söz" (özne). Neyi dindirebilir? "insanın içindeki fırtınaları" (belirtili nesne). Ne zaman? "Bazen" (zarf tümleci).'
      },
      {
        id: 'q-co-10-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat grubu "Kiminle?" veya "Neyle?" sorusuna yanıt vererek edat tümleci olmuştur?',
        options: [
          { id: 'A', text: 'Sınavı geçmek için çok çalıştı.' },
          { id: 'B', text: 'Oraya ulaşmak için taksiye binmelisin.' },
          { id: 'C', text: 'Toplantıya okul müdürüyle katılacağız.' },
          { id: 'D', text: 'Yağmur yağdığından dolayı maç iptal oldu.' },
          { id: 'E', text: 'Yüzü gülene kadar ona fıkra anlattım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "okul müdürüyle" kelime grubu "kiminle" sorusuna cevap verir ve edat tümlecidir. B seçeneğinde "taksiye" (neye) DT\'dir. A ve D zarf tümlecidir.'
      },
      {
        id: 'q-co-10-18',
        difficulty: 'medium',
        questionText: '"Gökyüzündeki kara bulutlar şiddetli bir yağmurun habercisiydi." cümlesinde öge ayırımı nasıl olmalıdır?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Belirtili Nesne - Yüklem' },
          { id: 'C', text: 'Özne - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Belirtisiz Nesne - Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'şiddetli bir yağmurun habercisiydi (yüklem - isim tamlaması). Şiddetli bir yağmurun habercisi olan ne? Gökyüzündeki kara bulutlar (özne). Cümle sadece özne ve yüklemden oluşur.'
      },
      {
        id: 'q-co-10-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde öge dizilişi "Özne - Belirtili Nesne - Yüklem" şeklindedir?',
        options: [
          { id: 'A', text: 'Adam hızla sokağa girdi.' },
          { id: 'B', text: 'Kedi mutfaktaki eti yemiş.' },
          { id: 'C', text: 'Babam yarın bize gelecek.' },
          { id: 'D', text: 'Öğrenciler dersi çok sevdiler.' },
          { id: 'E', text: 'Çocuklar bahçede top oynuyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde: yemiş (yüklem). Yiyen kim/ne? Kedi (özne). Neyi yemiş? mutfaktaki eti (belirtili nesne). (D seçeneğinde "çok" kelimesi ZT\'dir. B en doğrusudur).'
      },
      {
        id: 'q-co-10-20',
        difficulty: 'medium',
        questionText: '"Geçmişin izlerini taşıyan bu antika saat, salonun en güzel köşesini süslüyor." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Yüklem' },
          { id: 'E', text: 'Tüm ögeler (Özne, Nesne, Yüklem) vardır, sadece Dolaylı Tümleç yoktur. (Soru: "hangi öge yoktur?")'
        ],
        correctOptionId: 'C',
        explanation: 'süslüyor (yüklem). Süslenen yer? (veya neyi süslüyor?) "salonun en güzel köşesini" (belirtili nesne). Süyleyen ne? "Geçmişin izlerini taşıyan bu antika saat" (özne). Dolaylı tümleç cümlede yer almaz.'
      }
    ]
  },
  {
    id: 'test-ogeler-10-zor',
    title: 'Cümlenin Ögeleri 10 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (111-120)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-co-10-21',
        difficulty: 'hard',
        questionText: '"Ruhunun derinliklerinde sakladığı en büyük korkusuyla nihayet yüzleşebilmişti." cümlesinde "Ruhunun derinliklerinde sakladığı en büyük korkusuyla" söz öbeği cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Dolaylı Tümleç' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Zarf Tümleci (veya Edat Tümleci)' },
          { id: 'D', text: 'Özne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'yüzleşebilmişti (yüklem). Neyle/Kiminle yüzleşebilmişti? "Ruhunun derinliklerinde sakladığı en büyük korkusuyla" (Edat tümleci veya Zarf tümleci). İsmin hâl eklerini değil, "ile" edatını aldığı için bu ögedir.'
      },
      {
        id: 'q-co-10-22',
        difficulty: 'hard',
        questionText: '"Uzun zamandır görüşemediği eski dostunu görünce, içini tarifsiz bir sevinç kapladı." cümlesinin ögeleri sırasıyla hangisidir?',
        options: [
          { id: 'A', text: 'Zarf Tümleci - Belirtili Nesne - Özne - Yüklem' },
          { id: 'B', text: 'Zarf Tümleci - Özne - Belirtili Nesne - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Zarf Tümleci - Özne - Yüklem' },
          { id: 'D', text: 'Özne - Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Dolaylı Tümleç - Özne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'kapladı (yüklem). Kaplayan ne? "tarifsiz bir sevinç" (özne). Neyi kapladı? "içini" (belirtili nesne). Ne zaman? "Uzun zamandır görüşemediği eski dostunu görünce" (zarf tümleci). Sıralama: Zarf Tümleci - Belirtili Nesne - Özne - Yüklem.'
      },
      {
        id: 'q-co-10-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "sözde özne" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yağmur yağınca herkes saçak altlarına koşuştu.' },
          { id: 'B', text: 'Babamın dünkü sözlerine çok alındım.' },
          { id: 'C', text: 'Sokaktaki başıboş köpekler barınağa götürüldü.' },
          { id: 'D', text: 'Adam, yıllar sonra memleketine dönmüştü.' },
          { id: 'E', text: 'Sabah erkenden kalkıp yola koyulduk.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "götürüldü" edilgen çatılı bir fiildir. Götürme eylemini yapan belli değildir, eylemden etkilenen "başıboş köpekler" sözde özne olmuştur. B\'deki "alındım" dönüşlü, diğerleri etken çatılıdır.'
      },
      {
        id: 'q-co-10-24',
        difficulty: 'hard',
        questionText: '"Göz alabildiğine uzanan bu kurak topraklar, köylülerin nesiller boyu dökülen alın terinin şahididir." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'şahididir' },
          { id: 'B', text: 'alın terinin şahididir' },
          { id: 'C', text: 'köylülerin nesiller boyu dökülen alın terinin şahididir' },
          { id: 'D', text: 'nesiller boyu dökülen alın terinin şahididir' },
          { id: 'E', text: 'dökülen alın terinin şahididir' }
        ],
        correctOptionId: 'C',
        explanation: '"köylülerin şahidi" (araya sıfatlar ve fiilimsiler girmiş bir belirtili isim tamlamasıdır). İsim tamlamaları parçalanamayacağı için cümlenin yüklemi "köylülerin nesiller boyu dökülen alın terinin şahididir" ifadesidir.'
      },
      {
        id: 'q-co-10-25',
        difficulty: 'hard',
        questionText: '"Genç yaşında elde ettiği bu büyük başarıyı, her zaman yanında olan ailesine borçludur." cümlesinde aşağıdaki ögelerden hangisi yoktur?',
        options: [
          { id: 'A', text: 'Gizli Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'borçludur (yüklem). O (gizli özne). Neyi borçludur? "Genç yaşında elde ettiği bu büyük başarıyı" (belirtili nesne). Kime? "her zaman yanında olan ailesine" (dolaylı tümleç). Cümlede zarf tümleci yoktur.'
      },
      {
        id: 'q-co-10-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "cümle dışı unsur" (CDU) bir ünlemden oluşmaktadır?',
        options: [
          { id: 'A', text: 'Eyvah, yine cüzdanımı evde unutmuşum!' },
          { id: 'B', text: 'Arkadaşlar, yarınki toplantıyı iptal ettik.' },
          { id: 'C', text: 'Oysaki her şey planladığımız gibi gidiyordu.' },
          { id: 'D', text: 'Ne var ki bu sözleri kimse dikkate almadı.' },
          { id: 'E', text: 'Onu, eski sınıf arkadaşımı, bugün yolda gördüm.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Eyvah" sözcüğü bir ünlemdir ve cümle dışı unsurdur. B\'de hitap, C ve D\'de bağlaç, E\'de ara söz vardır.'
      },
      {
        id: 'q-co-10-27',
        difficulty: 'hard',
        questionText: '"Sonbahar rüzgârlarının sararttığı yapraklar, yorgun argın kaldırımlara düşüyordu." cümlesinde "yorgun argın" ikilemesi hangi ögedir?',
        options: [
          { id: 'A', text: 'Belirtisiz Nesne' },
          { id: 'B', text: 'Özne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Belirtili Nesne' }
        ],
        correctOptionId: 'D',
        explanation: 'düşüyordu (yüklem). Nasıl düşüyordu? "yorgun argın" (durum zarfı / zarf tümleci).'
      },
      {
        id: 'q-co-10-28',
        difficulty: 'hard',
        questionText: '"İnsanlık tarihi boyunca cevabı bulunamayan sorular, filozofların zihnini sürekli meşgul etmiştir." cümlesinin öge dizilişi nedir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Özne - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Özne - Zarf Tümleci - Belirtisiz Nesne - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Özne - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'meşgul etmiştir (yüklem). Meşgul eden ne? İnsanlık tarihi boyunca cevabı bulunamayan sorular (özne). Neyi/Kimi meşgul etmiştir? filozofların zihnini (belirtili nesne). Ne kadar/Ne şekilde? sürekli (zarf tümleci). Sıralama: Özne - Belirtili Nesne - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-10-29',
        difficulty: 'hard',
        questionText: '"Kimi zaman sadece bir bakış, sayfalarca anlatılamayacak bir derdi tek seferde anlatıverir." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Zarf Tümleci' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Özne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'anlatıverir (yüklem). Ne zaman? Kimi zaman (zarf tümleci). Anlatan ne? sadece bir bakış (özne). Neyi? sayfalarca anlatılamayacak bir derdi (belirtili nesne). Nasıl? tek seferde (zarf tümleci/dolaylı tümleç... durun, "tek seferde" -de ekinden dolayı DT sayılabilir ancak nasıl sorusuna yanıt verir. Her halükarda "sayfalarca anlatılamayacak bir derdi" belirtili nesnedir. DT cümlede net bir yer bildirmiyor, ancak "tek seferde" zarf tümlecidir. Cevap: Dolaylı Tümleç yoktur).'
      },
      {
        id: 'q-co-10-30',
        difficulty: 'hard',
        questionText: '"Çocukluğunun geçtiği o eski toprakları, dedesinin yadigârı olan bu köyü, asla unutmadı." cümlesinde ara söz hangi ögenin açıklayıcısıdır?',
        options: [
          { id: 'A', text: 'Öznenin' },
          { id: 'B', text: 'Belirtili Nesnenin' },
          { id: 'C', text: 'Dolaylı Tümlecin' },
          { id: 'D', text: 'Yüklemin' },
          { id: 'E', text: 'Zarf Tümlecinin' }
        ],
        correctOptionId: 'B',
        explanation: 'unutmadı (yüklem). Kim? O (gizli özne). Neyi unutmadı? "Çocukluğunun geçtiği o eski toprakları" (belirtili nesne). "dedesinin yadigârı olan bu köyü" ara sözü, belirtili nesnenin açıklayıcısı olarak kullanılmıştır.'
      }
    ]
  }
];
