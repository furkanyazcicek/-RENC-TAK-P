export default [
  {
    id: 'test-yazim-kurallari-2-kolay',
    title: 'Yazım Kuralları 2 (Kolay)',
    description: 'Yazım Kuralları - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-yk-2-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin kullanımıyla ilgili bir yazım yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Arkadaşım geçen yıl Boğaziçi Üniversitesinden mezun oldu.' },
          { id: 'B', text: 'Her yaz tatilini Karadeniz Bölgesi\'nde geçirmeyi severiz.' },
          { id: 'C', text: 'Bugün derste Türk dil kurumu\'nun yeni yayınlarını inceledik.' },
          { id: 'D', text: 'Dayım, Ramazan Bayramı\'nda bizi ziyarete gelecek.' },
          { id: 'E', text: 'Türkiye\'nin başkenti Ankara, İç Anadolu\'da yer alır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kurum, kuruluş ve kurul adlarının her kelimesi büyük harfle başlar. "Türk dil kurumu" değil "Türk Dil Kurumu" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-2-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki"nin yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Öyle güzel konuştu ki herkes onu hayranlıkla dinledi.' },
          { id: 'B', text: 'Akşam ki maç çok heyecanlı geçti.' },
          { id: 'C', text: 'Benim arabam bozuldu, seninkiyle gidelim.' },
          { id: 'D', text: 'Duydum ki buralardan ayrılacakmışsın.' },
          { id: 'E', text: 'Sokaktaki çocuklar neşe içinde oynuyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zaman bildiren sözcüklere eklenen "ki" yapım ekidir ve bitişik yazılır. "Akşamki" şeklinde bitişik yazılmalıydı.'
      },
      {
        id: 'q-yk-2-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de / da" bağlacının yazımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Sen de benimle aynı fikirde misin?' },
          { id: 'B', text: 'Dışarıda çok soğuk bir hava var.' },
          { id: 'C', text: 'Oraya kadar gitmişken teyzesinide ziyaret etmiş.' },
          { id: 'D', text: 'Bunu ona da söylemeliyiz.' },
          { id: 'E', text: 'Evde hiç yiyecek kalmamış.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bağlaç olan "de/da" ayrı yazılır. "Teyzesinide" sözcüğündeki "de" bağlaçtır ve "teyzesini de" şeklinde ayrı yazılmalıdır.'
      },
      {
        id: 'q-yk-2-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı doğrudur?',
        options: [
          { id: 'A', text: 'Hergün' },
          { id: 'B', text: 'Herkez' },
          { id: 'C', text: 'Hiç bir' },
          { id: 'D', text: 'Herhangi' },
          { id: 'E', text: 'Bir çok' }
        ],
        correctOptionId: 'D',
        explanation: '"Herhangi" bitişik yazılır, yazımı doğrudur. Diğerlerinin doğruları: her gün (ayrı), herkes (s ile), hiçbir (bitişik), birçok (bitişik) şeklindedir.'
      },
      {
        id: 'q-yk-2-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde tarihlerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Okulumuz 15 Eylül 2023 tarihinde açılacak.' },
          { id: 'B', text: 'Atatürk, 19 Mayıs 1919\'da Samsun\'a çıktı.' },
          { id: 'C', text: 'Sınav 12 haziran pazartesi günü yapılacak.' },
          { id: 'D', text: '29 Ekim 1923, Cumhuriyetin ilan edildiği gündür.' },
          { id: 'E', text: 'Kardeşim 2005\'te İstanbul\'da doğdu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Belirli bir tarihi (gün veya ay numarasıyla birlikte) bildiren ay ve gün adları büyük harfle başlar. "12 Haziran Pazartesi" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-2-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Dün akşam güzel bir sinema filmi izledik.' },
          { id: 'B', text: 'Bana süpriz yaparak doğum günümü kutladılar.' },
          { id: 'C', text: 'Olayın iç yüzünü öğrenince çok şaşırdı.' },
          { id: 'D', text: 'Kardeşim üniversite sınavına çok iyi hazırlandı.' },
          { id: 'E', text: 'Bu konuda yalnız kaldığını hissediyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Süpriz" kelimesinin doğru yazılışı "sürpriz" şeklinde, aradaki \'r\' harfi ile olmalıdır.'
      },
      {
        id: 'q-yk-2-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Sınava yüz yirmi beş öğrenci katıldı.' },
          { id: 'B', text: 'Binanın 5\'inci katında oturuyorlar.' },
          { id: 'C', text: 'Yarışmada 2. inci oldu.' },
          { id: 'D', text: 'Öğrenciler ikişer ikişer sıraya girdi.' },
          { id: 'E', text: 'Cebinde sadece on beş lira kalmıştı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sıra sayılarında nokta kullanılmışsa ayrıca kesme işareti ve ek kullanılmaz. Hem nokta hem "-inci" ekinin birlikte kullanılması (2. inci) yanlıştır. "2." veya "2\'nci" şeklinde yazılmalıdır.'
      },
      {
        id: 'q-yk-2-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi / mı" soru ekinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Sen de bizimle sinemaya gelecek misin?' },
          { id: 'B', text: 'Bunca zamandır beni hiç aramadınmı?' },
          { id: 'C', text: 'Güzel mi güzel bir elbise almış.' },
          { id: 'D', text: 'Bu kitabı daha önce okumuş muydun?' },
          { id: 'E', text: 'Yağmur yağdı mı herkes içeri kaçar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Soru eki olan "mi / mı / mu / mü" her zaman kendinden önceki kelimeden ayrı yazılır. "aramadınmı" değil, "aramadın mı" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-2-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Kirpik' },
          { id: 'B', text: 'Kiprik' },
          { id: 'C', text: 'Kibrit' },
          { id: 'D', text: 'Eşofman' },
          { id: 'E', text: 'Acente' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz kapaklarındaki kıllara verilen ad "kirpik"tir. "Kiprik" şeklinde yazımı yanlıştır (harf yer değiştirmesi / metatez hatası).'
      },
      {
        id: 'q-yk-2-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kısaltmaların yazımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'TDK\'nin yeni sözlüğünü satın aldım.' },
          { id: 'B', text: 'TRT\'nin bu belgeselini çok beğendim.' },
          { id: 'C', text: 'TBMM\'de yeni yasalar görüşülüyor.' },
          { id: 'D', text: 'THY\'nın yeni seferleri haftaya başlayacak.' },
          { id: 'E', text: 'MEB\'in yayınladığı örnek soruları çözdük.' }
        ],
        correctOptionId: 'D',
        explanation: 'Büyük harflerle yapılan kısaltmalara getirilen ekler, kısaltmanın okunuşuna (son harfin okunuşuna) göre getirilir. "THY\'nin" (Te-He-Ye\'nin) şeklinde olmalıdır, "THY\'nın" yanlıştır.'
      }
    ]
  },
  {
    id: 'test-yazim-kurallari-2-orta',
    title: 'Yazım Kuralları 2 (Orta)',
    description: 'Yazım Kuralları - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-yk-2-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik kelimelerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Bu sorunu nasıl çözeceğimizi bir türlü bulamadık.' },
          { id: 'B', text: 'Hasta olmamak için kendine çok iyi bakıyor.' },
          { id: 'C', text: 'Bu manzarayı seyrederken bütün dertlerimi unutuyorum.' },
          { id: 'D', text: 'Durumu ona arz ettim ancak bir sonuç alamadım.' },
          { id: 'E', text: 'Onun bu sözlerinden sonra orayı hemen terkettik.' }
        ],
        correctOptionId: 'E',
        explanation: 'Yardımcı eylemlerle (etmek, olmak, eylemek) kurulan birleşik fiillerde ses düşmesi veya ses türemesi yoksa ayrı yazılır. "Terk ettik" şeklinde ayrı yazılmalıdır.'
      },
      {
        id: 'q-yk-2-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Herkes <u>art arda</u> dizilip içeri girmeyi bekledi.' },
          { id: 'B', text: 'Bu işten vazgeçmek <u>gitgide</u> zorlaşıyordu.' },
          { id: 'C', text: 'Konferansta <u>peşpeşe</u> gelen sorular konuşmacıyı zorladı.' },
          { id: 'D', text: 'Bu eşyalar <u>baş başa</u> verip taşınabilir.' },
          { id: 'E', text: 'Bütün bu olaylar <u>peşi sıra</u> yaşandı.' }
        ],
        correctOptionId: 'C',
        explanation: 'İkilemeler ayrı yazılır. "Peş peşe" sözcüğü de bir ikilemedir ve ayrı yazılması gerekir (gitgide sözcüğü istisnadır ve bitişik yazılır).'
      },
      {
        id: 'q-yk-2-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Kardeşim bu yıl İngilizceyi çok iyi öğrendi.' },
          { id: 'B', text: 'Toplantıya Ahmet Bey ve Ayşe Hanım da katılacak.' },
          { id: 'C', text: 'Avukat Mehmet bey dün ofise gelmedi.' },
          { id: 'D', text: 'Türkiye\'nin Doğu Anadolu Bölgesi çok dağlıktır.' },
          { id: 'E', text: 'Erzurum\'da Palandöken Dağı\'na kar yağmış.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kişi adlarından önce ve sonra gelen saygı sözleri, unvanlar, lakaplar büyük harfle başlar. "Mehmet bey" değil "Mehmet Bey" olmalıdır.'
      },
      {
        id: 'q-yk-2-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Müzeyyen' },
          { id: 'B', text: 'İnsiyatif' },
          { id: 'C', text: 'Koleksiyon' },
          { id: 'D', text: 'Menü' },
          { id: 'E', text: 'Stajyer' }
        ],
        correctOptionId: 'B',
        explanation: 'Sözcüğün doğru yazımı "inisiyatif" şeklindedir, arada \'i\' harfi bulunur.'
      },
      {
        id: 'q-yk-2-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de/da" veya "ki" nin yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'B', text: 'Madem ki gelmeyecektin, neden haber vermedin?' },
          { id: 'C', text: 'Sen de bizimle bu projede yer almalısın.' },
          { id: 'D', text: 'Kitabımı okulda unuttuğum için ödevimi yapamadım.' },
          { id: 'E', text: 'Öyle yorgunum ki hemen uyuyabilirim.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalıplaşmış olarak bitişik yazılan "ki" bağlaçları (SOMBAHÇEMİ formülü: Sanki, Oysaki, Mademki, Belki, Halbuki, Çünkü, Meğerki, İllaki) bitişik yazılmalıdır. "Mademki" bitişik olmalıydı.'
      },
      {
        id: 'q-yk-2-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işaretinin (\') kullanımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'İstanbul\'a her gidişimde yeni yerler keşfediyorum.' },
          { id: 'B', text: 'TBMM\'nin açılış yıl dönümü coşkuyla kutlandı.' },
          { id: 'C', text: 'Türkçe\'nin zengin söz varlığı beni her zaman büyüler.' },
          { id: 'D', text: 'Atatürk, 1919\'da Samsun\'a ayak bastı.' },
          { id: 'E', text: 'Avrupa Birliği\'ne üye ülkeler yeni kararlar aldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen yapım ekleri (Türk-çe), çokluk eki ve bunlardan sonra gelen diğer ekler kesme işaretiyle ayrılmaz. "Türkçenin" şeklinde kesmesiz yazılmalıdır.'
      },
      {
        id: 'q-yk-2-17',
        difficulty: 'medium',
        questionText: 'Yön adlarının yazımıyla ilgili aşağıdaki cümlelerin hangisinde yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Türkiye\'nin Güneyi yaz aylarında çok sıcak olur.' },
          { id: 'B', text: 'Bu rüzgar genellikle kuzeybatıdan eser.' },
          { id: 'C', text: 'Kuzey Amerika\'da yeni tür canlılar keşfedildi.' },
          { id: 'D', text: 'Evin doğu cephesi güneş almıyor.' },
          { id: 'E', text: 'Uzak Doğu kültürü ilgimi çekiyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'Yön adları özel adın önüne gelirse büyük, özel adın arkasından veya tek başına gelirse küçük harfle başlar. "Türkiye\'nin güneyi" şeklinde küçük harfle yazılmalıydı.'
      },
      {
        id: 'q-yk-2-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki birleşik sözcüklerden hangisi yanlış yazılmıştır?',
        options: [
          { id: 'A', text: 'Gökyüzü' },
          { id: 'B', text: 'Yeryüzü' },
          { id: 'C', text: 'Gözyaşı' },
          { id: 'D', text: 'Hafta sonu' },
          { id: 'E', text: 'Kuzey batı' }
        ],
        correctOptionId: 'E',
        explanation: 'Ara yönleri belirten kelimeler daima bitişik yazılır. "Kuzeybatı" şeklinde bitişik yazılmalıdır.'
      },
      {
        id: 'q-yk-2-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" ekinin yazımında yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Bana doğruyu mu söylüyorsun, yalan mı?' },
          { id: 'B', text: 'Bahar geldimi her yer yemyeşil olur.' },
          { id: 'C', text: 'Dünkü derse sen de katılmış mıydın?' },
          { id: 'D', text: 'Çocuk şirin mi şirin bir kedi yavrusu bulmuş.' },
          { id: 'E', text: 'Sınavın ne zaman yapılacağını biliyor musun?' }
        ],
        correctOptionId: 'B',
        explanation: '"mi" eki, ister soru anlamı katsın ister zaman/koşul anlamı katsın daima ayrı yazılır. "Bahar geldi mi" şeklinde ayrı yazılmalıydı.'
      },
      {
        id: 'q-yk-2-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımıyla ilgili bir kural hatası vardır?',
        options: [
          { id: 'A', text: 'Kitabın yüz on beşinci sayfasında kaldım.' },
          { id: 'B', text: 'Bu iş için tam yüzellibin lira bütçe ayırdık.' },
          { id: 'C', text: 'Maçın 45. dakikasında gol oldu.' },
          { id: 'D', text: 'Babam 50 yaşına bastı.' },
          { id: 'E', text: 'Banka çekine on bin lirayı rakamla değil yazıyla yazdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sayılar harflerle yazıldığında, paralar ve ticari senetler, çekler dışında her kelime ayrı yazılır. "yüz elli bin" şeklinde ayrı yazılmalıydı (cümlede çek vb. bir belge üstünden bahsedilmiyor, normal bir metin içi yazımdır).'
      }
    ]
  },
  {
    id: 'test-yazim-kurallari-2-zor',
    title: 'Yazım Kuralları 2 (Zor)',
    description: 'Yazım Kuralları - Zor (11-20)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-yk-2-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik fiillerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Eşyalarını alıp bu şehirden tamamen kayboldu.' },
          { id: 'B', text: 'Bu güzel teklifi hiç düşünmeden reddetti.' },
          { id: 'C', text: 'Durumu amirine anında arzeyledi.' },
          { id: 'D', text: 'Sana bu konuda yardımcı olacağımı vaat ediyorum.' },
          { id: 'E', text: 'Sonunda gerçeği fark edip bizden özür diledi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Arz eylemek" sözcüğünde herhangi bir ses düşmesi veya türemesi olmadığı için ayrı yazılması gerekir: "arz eyledi".'
      },
      {
        id: 'q-yk-2-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Oğlu, yıllardır <u>çevrim içi</u> oyunlar oynuyor.' },
          { id: 'B', text: 'Projenin <u>alt yapı</u> çalışmaları nihayet tamamlandı.' },
          { id: 'C', text: 'Toplantıda yeni <u>iş birliği</u> fırsatları konuşuldu.' },
          { id: 'D', text: 'Marketten <u>kuru yemiş</u> alıp akşam misafirlerine ikram etti.' },
          { id: 'E', text: 'Mutfaktaki <u>buzdolabı</u> bozulunca tüm yiyecekler çöpe gitti.' }
        ],
        correctOptionId: 'B',
        explanation: '"Altyapı" kelimesi bitişik yazılır. "Alt yapı" şeklindeki ayrı yazım yanlıştır.'
      },
      {
        id: 'q-yk-2-23',
        difficulty: 'hard',
        questionText: 'Yer, millet ve kişi adlarıyla kurulan birleşik kelimelerde sadece özel adlar büyük harfle başlar. Aşağıdakilerin hangisinde bu kurala uyulmamıştır?',
        options: [
          { id: 'A', text: 'Misafirlere Hindistan cevizi ikram edildi.' },
          { id: 'B', text: 'Kahvaltıda Van kedisi gibi süt içiyordu.' },
          { id: 'C', text: 'Pazardan Antep Fıstığı almayı unutma.' },
          { id: 'D', text: 'Maraş dondurması yazın vazgeçilmezidir.' },
          { id: 'E', text: 'Bahçeye İngiliz anahtarı düşmüş.' }
        ],
        correctOptionId: 'C',
        explanation: '"Antep fıstığı" şeklinde fıstığın "f"si küçük yazılmalıdır. Kurala göre sadece özel ad (Antep) büyük yazılır.'
      },
      {
        id: 'q-yk-2-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı ile ilgili yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Görüyorum ki bu konuyu hiç anlamamışsın.' },
          { id: 'B', text: 'Yarın ki toplantı iptal edilmiş.' },
          { id: 'C', text: 'İllaki benim dediğim olacak, diye tutturdu.' },
          { id: 'D', text: 'Benim kitabım evde, seninki nerede?' },
          { id: 'E', text: 'Bizimki yine her zamanki gibi geç kaldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zaman bildiren sözcüklere gelen "-ki" yapım ekidir ve bitişik yazılır. "Yarınki" şeklinde bitişik olmalıydı.'
      },
      {
        id: 'q-yk-2-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?',
        options: [
          { id: 'A', text: 'Başbaşa verip bu karmaşadan çıkış yolu aradılar.' },
          { id: 'B', text: 'Hiç kimse bu süpriz karara bir anlam veremedi.' },
          { id: 'C', text: 'Hafta içi hergün düzenli olarak kütüphaneye gidiyor.' },
          { id: 'D', text: 'Birtakım insanlar bu kurala uymak istemiyor.' },
          { id: 'E', text: 'Sende bizimle gelirsen çok daha eğlenceli olur.' }
        ],
        correctOptionId: 'D',
        explanation: '"Birtakım" kelimesi "bazı" anlamındaysa bitişik yazılır. Burada da bazı anlamındadır ve doğru yazılmıştır. Diğerlerindeki hatalar: A\'da "baş başa" (ayrı), B\'de "sürpriz", C\'de "her gün" (ayrı), E\'de "sen de" (ayrı) olmalıdır.'
      },
      {
        id: 'q-yk-2-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde büyük harflerin kullanımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Dilekçesini <u>Kaymakamlığa</u> bizzat kendi verdi.' },
          { id: 'B', text: 'Toplantıda <u>Vali</u> Bey önemli açıklamalar yaptı.' },
          { id: 'C', text: 'Dün akşam <u>Boğaz\'dan</u> geçen gemileri izledik.' },
          { id: 'D', text: 'Bu yasa tasarısı yarın <u>Meclis\'te</u> görüşülecek.' },
          { id: 'E', text: 'Yarın <u>Uzakdoğu\'ya</u> gidecek bir uçağa binecek.' }
        ],
        correctOptionId: 'E',
        explanation: 'Coğrafi veya siyasi bir bölgeyi ifade eden Uzak Doğu, Orta Doğu gibi sözcükler ayrı yazılır. "Uzak Doğu\'ya" şeklinde olmalıdır.'
      },
      {
        id: 'q-yk-2-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımı ile ilgili bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Yüzüncü yıl etkinlikleri büyük bir coşkuyla kutlandı.' },
          { id: 'B', text: 'Sınıftaki öğrencileri üçer üçer gruplara ayırdı.' },
          { id: 'C', text: 'Oğlum bu yıl 6\'ncı sınıfa geçti.' },
          { id: 'D', text: 'İhaleye tam onbeş farklı şirket katıldı.' },
          { id: 'E', text: 'Saat 15.30\'da toplantı odasında buluşacağız.' }
        ],
        correctOptionId: 'D',
        explanation: 'Sayılar harflerle yazıldığında her kelime ayrı yazılır. "on beş" şeklinde ayrı yazılmalıydı.'
      },
      {
        id: 'q-yk-2-28',
        difficulty: 'hard',
        questionText: 'Tarihi olay, çağ ve dönem adları büyük harfle başlar. Buna göre aşağıdakilerin hangisinde yazım yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Cilalı Taş Devri\'nde insanlar yerleşik hayata geçmiştir.' },
          { id: 'B', text: 'Kurtuluş Savaşı\'mız destansı bir mücadelenin ürünüdür.' },
          { id: 'C', text: 'Milli Edebiyat dönemi, dilde sadeleşmenin başladığı bir evredir.' },
          { id: 'D', text: 'Avrupa, Orta Çağ\'da karanlık bir dönem yaşamıştır.' },
          { id: 'E', text: 'Tanzimat Dönemi, Türk edebiyatında Batı etkisinin görüldüğü ilk yıllardır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tarihi dönem adlarının tüm kelimeleri büyük harfle başlar. "Milli Edebiyat Dönemi" şeklinde D harfi büyük yazılmalıdır.'
      },
      {
        id: 'q-yk-2-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de/da" bağlacının yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'O kadar yorgunum ki ayakta duracak halim de kalmadı.' },
          { id: 'B', text: 'Okuduğu kitap da, izlediği film de çok etkileyiciydi.' },
          { id: 'C', text: 'Bunu yaparken hiçte zorlanmadığını söylüyor.' },
          { id: 'D', text: 'Senin de bizimle aynı fikirde olmana çok sevindim.' },
          { id: 'E', text: 'Evde de okulda da hep aynı sessizliği koruyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bağlaç olan "de/da" ayrı yazılır ve hiçbir zaman "te/ta" şekline dönüşmez. "hiç de" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-2-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı TDK kurallarına göre doğrudur?',
        options: [
          { id: 'A', text: 'Hıristiyan' },
          { id: 'B', text: 'Egzost' },
          { id: 'C', text: 'Lavobo' },
          { id: 'D', text: 'Motorsiklet' },
          { id: 'E', text: 'Tıraş' }
        ],
        correctOptionId: 'E',
        explanation: '"Tıraş" kelimesinde \'ı\' harfi bulunur ve yazımı doğrudur. Yanlışların doğruları: Hristiyan (ı harfi olmadan), Egzoz, Lavabo, Motosiklet (r harfi olmadan) şeklindedir.'
      }
    ]
  }
];
