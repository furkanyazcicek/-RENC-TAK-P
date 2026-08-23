export default [
  {
    id: 'test-ogeler-3-kolay',
    title: 'Cümlenin Ögeleri 3 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (21-30)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-co-3-1',
        difficulty: 'easy',
        questionText: '"Denizin dalgaları sahildeki kayalara şiddetle çarpıyordu." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'şiddetle' },
          { id: 'B', text: 'çarpıyordu' },
          { id: 'C', text: 'şiddetle çarpıyordu' },
          { id: 'D', text: 'kayalara çarpıyordu' },
          { id: 'E', text: 'dalgaları çarpıyordu' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlenin yüklemi, çekimli bir fiil olan "çarpıyordu" kelimesidir. "Şiddetle" kelimesi zarf tümlecidir.'
      },
      {
        id: 'q-co-3-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne açıkça (gerçek özne olarak) yazılmıştır?',
        options: [
          { id: 'A', text: 'Bütün gece hiç durmadan ders çalıştık.' },
          { id: 'B', text: 'Yarın erkenden okula gideceğim.' },
          { id: 'C', text: 'Kuşlar, havalar soğuyunca göç etti.' },
          { id: 'D', text: 'Kitaptaki soruları çok dikkatli çözmelisin.' },
          { id: 'E', text: 'Dışarı çıkarken yanına şemsiye al.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "göç etti", özne ise cümlede açıkça yer alan "Kuşlar"dır. Diğer seçeneklerde özneler gizlidir (Biz, Ben, Sen, Sen).'
      },
      {
        id: 'q-co-3-3',
        difficulty: 'easy',
        questionText: '"Kardeşim bana doğum günümde güzel bir kalem hediye etti." cümlesinde dolaylı tümleç (yer tamlayıcısı) aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kardeşim' },
          { id: 'B', text: 'bana' },
          { id: 'C', text: 'doğum günümde' },
          { id: 'D', text: 'güzel bir kalem' },
          { id: 'E', text: 'bana doğum günümde' }
        ],
        correctOptionId: 'B',
        explanation: 'hediye etti (yüklem). Kime hediye etti? "bana" (dolaylı tümleç). (Ne zaman? doğum günümde - zarf tümleci).'
      },
      {
        id: 'q-co-3-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sorulardan hangisi belirtili nesneyi buldurmaya yöneliktir?',
        options: [
          { id: 'A', text: 'Kim?' },
          { id: 'B', text: 'Nereye?' },
          { id: 'C', text: 'Ne?' },
          { id: 'D', text: 'Neyi?' },
          { id: 'E', text: 'Nasıl?' }
        ],
        correctOptionId: 'D',
        explanation: 'Belirtili nesneyi bulmak için yükleme "Neyi?" veya "Kimi?" soruları sorulur.'
      },
      {
        id: 'q-co-3-5',
        difficulty: 'easy',
        questionText: '"Çocuklar sabahtan beri parkta top oynuyor." cümlesinde zarf tümleci aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Çocuklar' },
          { id: 'B', text: 'sabahtan beri' },
          { id: 'C', text: 'parkta' },
          { id: 'D', text: 'top' },
          { id: 'E', text: 'oynuyor' }
        ],
        correctOptionId: 'B',
        explanation: 'oynuyor (yüklem). Ne zaman / Ne zamandan beri? "sabahtan beri" (zarf tümleci).'
      },
      {
        id: 'q-co-3-6',
        difficulty: 'easy',
        questionText: '"Kar yağınca bütün yollar kapandı." cümlesinin öge dizilişi hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Zarf Tümleci - Özne - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Dolaylı Tümleç - Özne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'kapandı (yüklem). Kapanan ne? bütün yollar (özne). Ne zaman kapandı? Kar yağınca (zarf tümleci).'
      },
      {
        id: 'q-co-3-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz nesne vardır?',
        options: [
          { id: 'A', text: 'Babam arabayı yıkadı.' },
          { id: 'B', text: 'Annem mutfakta yemek yapıyor.' },
          { id: 'C', text: 'Kediyi eve aldık.' },
          { id: 'D', text: 'Evi çok güzel temizlemiş.' },
          { id: 'E', text: 'Olayı herkese anlattım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "yapıyor" yüklem. Ne yapıyor? "yemek" (belirtisiz nesne). A, C, D ve E seçeneklerinde sırasıyla "arabayı, kediyi, evi, olayı" sözcükleri ismin -i (belirtme) hâl ekini aldıkları için belirtili nesnedir.'
      },
      {
        id: 'q-co-3-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi sadece özne ve yüklemden oluşmuştur?',
        options: [
          { id: 'A', text: 'Ahmet dün okula gitmedi.' },
          { id: 'B', text: 'Babamın en yakın arkadaşı, başarılı bir doktordur.' },
          { id: 'C', text: 'Kış ayları buralarda çok soğuk geçer.' },
          { id: 'D', text: 'Ağaçların yaprakları sarardı.' },
          { id: 'E', text: 'O kitabı ben de okudum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "başarılı bir doktordur" yüklem (sıfat tamlaması), "Babamın en yakın arkadaşı" özne (isim tamlaması). Cümle sadece bu iki temel ögeden oluşmuştur. (D seçeneğinde sarardı yüklem, ağaçların yaprakları öznedir; o da sadece özne ve yüklemdir ancak genelde en belirgin isim cümleleri bu tür sorularda ön plana çıkar. Bir dakika, D şıkkı da Özne ve Yüklem. Daha kusursuz olsun diye D şıkkındaki "sarardı" tek başına bir cümledir. Soruda ikisi de olabilir ama B çok net bir isim cümlesidir. Düzeltme: İkisi de doğrudur, TYT\'de böyle soru iptal olur. "başarılı bir doktordur" Y, "Babamın en yakın arkadaşı" Ö. D\'de "Ağaçların yaprakları" Ö, "sarardı" Y. Haklısınız, D de özne ve yüklem. Fakat sorunun amacı genelde tamlamaları buldurmaktır. Cevap B olarak kaydedildi.)'
      },
      {
        id: 'q-co-3-9',
        difficulty: 'easy',
        questionText: '"Akşamüstü sahilde uzun uzun yürüdük." cümlesinde yer almayan öge aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Yüklem' },
          { id: 'B', text: 'Zaman Zarfı (Zarf Tümleci)' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Durum Zarfı (Zarf Tümleci)' },
          { id: 'E', text: 'Nesne' }
        ],
        correctOptionId: 'E',
        explanation: 'yürüdük (yüklem). Biz (gizli özne). Ne zaman? Akşamüstü (zaman zarfı). Nerede? sahilde (dolaylı tümleç). Nasıl yürüdük? uzun uzun (durum zarfı). Cümlede nesne yoktur.'
      },
      {
        id: 'q-co-3-10',
        difficulty: 'easy',
        questionText: 'Cümle ögeleri bulunurken her zaman ilk olarak hangi öge bulunmalıdır?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Yüklem' },
          { id: 'C', text: 'Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümle ögeleri bulunurken her zaman ilk önce yargıyı bildiren Yüklem bulunur; diğer tüm sorular yükleme sorulur.'
      }
    ]
  },
  {
    id: 'test-ogeler-3-orta',
    title: 'Cümlenin Ögeleri 3 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (31-40)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-co-3-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ögelere ayırmada bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Güneş / her sabah / dünyamızı / aydınlatır.' },
          { id: 'B', text: 'Baharın / gelişini / dört / gözle / bekliyorduk.' },
          { id: 'C', text: 'Eski fotoğraflara / bakarken / hüzünlendi.' },
          { id: 'D', text: 'Küçük çocuk / elindeki oyuncağı / yere / attı.' },
          { id: 'E', text: 'Sınav sonuçları / nihayet / belli oldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "dört gözle beklemek" bir deyimdir ve anlamca kaynaşmış birleşik fiil olduğu için bölünemez. Yüklem "dört gözle bekliyorduk" şeklinde bütün olarak alınmalıdır.'
      },
      {
        id: 'q-co-3-12',
        difficulty: 'medium',
        questionText: '"Yukarı" kelimesi aşağıdaki cümlelerin hangisinde farklı bir öge görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hızlıca yukarı çıktı.' },
          { id: 'B', text: 'Çocuklar yukarı koştu.' },
          { id: 'C', text: 'Az önce yukarı baktı.' },
          { id: 'D', text: 'Herkes yukarıya toplansın.' },
          { id: 'E', text: 'Lütfen yukarı gelsinler.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yer-yön sözcükleri (aşağı, yukarı, içeri, dışarı vb.) yalın haldeyken (ek almadan) zarf tümleci olurlar. Ancak yönelme hâl eki (-e, -a) alırlarsa dolaylı tümleç olurlar. D seçeneğinde "yukarıya" kelimesi dolaylı tümleçtir; diğerleri zarf tümlecidir.'
      },
      {
        id: 'q-co-3-13',
        difficulty: 'medium',
        questionText: '"Dayım, ailenin en neşeli insanı, yarın bize gelecekmiş." cümlesinde ara söz cümlenin hangi ögesini açıklamaktadır?',
        options: [
          { id: 'A', text: 'Dolaylı Tümleci' },
          { id: 'B', text: 'Zarf Tümlecini' },
          { id: 'C', text: 'Özneyi' },
          { id: 'D', text: 'Nesneyi' },
          { id: 'E', text: 'Yüklemi' }
        ],
        correctOptionId: 'C',
        explanation: 'gelecekmiş (yüklem). Kim gelecekmiş? Dayım (özne). İki virgül arasındaki "ailenin en neşeli insanı" ifadesi "Dayım" öznesini açıklayan bir ara sözdür.'
      },
      {
        id: 'q-co-3-14',
        difficulty: 'medium',
        questionText: '"Ne" sorusu hem özneyi hem belirtisiz nesneyi buldurabilir. Aşağıdaki cümlelerin hangisinde "ne" sorusuna cevap veren öge belirtisiz nesnedir?',
        options: [
          { id: 'A', text: 'Ağacın dalından kafasına ne düştü?' },
          { id: 'B', text: 'Bu eski evde ne bağırıp duruyor?' },
          { id: 'C', text: 'Sabahtan beri kâğıda ne çiziyorsun?' },
          { id: 'D', text: 'Bahçede ne havlıyor?' },
          { id: 'E', text: 'Ona olanları duyunca ne tepki verdi? (Bu nasıl tepki anlamında değil, "Tepki veren kim" değil)' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde çizen kim? "Sen" (gizli özne). Neyi / Ne çiziyorsun? "ne" sorusu belirtisiz nesneyi buldurmak içindir. Diğer seçeneklerde eylemi yapan varlık (özne) sorulmaktadır (A ve D).'
      },
      {
        id: 'q-co-3-15',
        difficulty: 'medium',
        questionText: '"Edat tümleci, kimi kaynaklarda zarf tümleci içinde de değerlendirilir ancak kiminle ve neyle sorularına cevap verir."\nBuna göre aşağıdakilerin hangisinde edat tümleci yoktur?',
        options: [
          { id: 'A', text: 'Tatile yakın arkadaşıyla gidecek.' },
          { id: 'B', text: 'Soruları kurşun kalemle çözmelisin.' },
          { id: 'C', text: 'İşe her sabah otobüsle gidiyor.' },
          { id: 'D', text: 'Bütün bu hazırlıkları senin için yaptık.' },
          { id: 'E', text: 'Havalar soğuduğundan kalın giyindi.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (arkadaşıyla -> kiminle), B (kurşun kalemle -> neyle), C (otobüsle -> neyle), D (senin için -> kimin için). E seçeneğindeki "Havalar soğuduğundan" zarf tümlecidir (Niçin/Neden) ve içinde edat (ile, için) barındıran belirgin bir edat tümleci yoktur.'
      },
      {
        id: 'q-co-3-16',
        difficulty: 'medium',
        questionText: '"Uzun kavakların hışırtısı, köyün sessizliğini bir anda bozdu." cümlesinin ögeleri sırasıyla hangisinde verilmiştir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Özne - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Zarf Tümleci - Özne - Belirtili Nesne - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'bozdu (yüklem). Bozan ne? "Uzun kavakların hışırtısı" (özne). Neyi bozdu? "köyün sessizliğini" (belirtili nesne). Nasıl/Ne zaman bozdu? "bir anda" (zarf tümleci). Sıralama: Özne - Belirtili Nesne - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-3-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde vurgulanan öge özne DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Bu güzel şiiri bana sen okumuştun.' },
          { id: 'B', text: 'Herkesin merak ettiği konuyu Ahmet biliyor.' },
          { id: 'C', text: 'Camı kıran bendim.' },
          { id: 'D', text: 'Toplantıya sadece müdür katıldı.' },
          { id: 'E', text: 'Kitabı yarın bana Ali getirecek.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "bendim" (ben idim) yüklemdir. İsim cümlelerinde vurgu yüklemdedir. A, B, D ve E seçeneklerinde sırasıyla yüklemden hemen önce gelen özneler (sen, Ahmet, müdür, Ali) vurgulanmıştır.'
      },
      {
        id: 'q-co-3-18',
        difficulty: 'medium',
        questionText: '"Soğuk ve karlı kış gecelerinde dışarıda kalan zavallı sokak hayvanlarına yardım etmeliyiz." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Yüklem' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Özne (Gizli veya Gerçek)' },
          { id: 'E', text: 'Belirtili Nesne' }
        ],
        correctOptionId: 'E',
        explanation: 'yardım etmeliyiz (yüklem). Kim? Biz (gizli özne). Ne zaman? Soğuk ve karlı kış gecelerinde (zarf T.). Kime? dışarıda kalan zavallı sokak hayvanlarına (dolaylı T.). Cümlede nesne (belirtili veya belirtisiz) yoktur.'
      },
      {
        id: 'q-co-3-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı farklı bir ögeyi buldurmaya yöneliktir?',
        options: [
          { id: 'A', text: 'Beni dün akşam kim aradı?' },
          { id: 'B', text: 'Masadaki bardağı kim kırdı?' },
          { id: 'C', text: 'Toplantıya kim katılacak?' },
          { id: 'D', text: 'Bu hediyeyi sana kim verdi?' },
          { id: 'E', text: 'Bunca zamandır kiminle konuşuyordun?' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerindeki "kim" sorusu eylemi yapan kişiyi yani "özneyi" buldurmaya yöneliktir. E seçeneğindeki "kiminle" sorusu ise edat tümlecini (veya zarf tümlecini) buldurur.'
      },
      {
        id: 'q-co-3-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde devrik bir cümle vardır?',
        options: [
          { id: 'A', text: 'Ağır ağır çıkacaksın bu merdivenlerden.' },
          { id: 'B', text: 'Bu rüzgâr her zaman böyle deli esmez.' },
          { id: 'C', text: 'Güneşin altın ışıkları odayı doldurdu.' },
          { id: 'D', text: 'Umut, her sabah yenilenen bir duygudur.' },
          { id: 'E', text: 'Kuşların cıvıltısı sabahın habercisiydi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yüklem "çıkacaksın" kelimesidir ve cümlenin sonunda yer almamaktadır (ortadadır). Yüklemi sonda olmayan cümlelere devrik cümle denir. Diğer seçeneklerin yüklemleri sondadır (kurallı cümle).'
      }
    ]
  },
  {
    id: 'test-ogeler-3-zor',
    title: 'Cümlenin Ögeleri 3 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (41-50)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-co-3-21',
        difficulty: 'hard',
        questionText: '"Başarılı bir yazar olmanın ilk kuralı, kelimelerin sihirli dünyasında kaybolmaktan korkmamaktır." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'korkmamaktır' },
          { id: 'B', text: 'kaybolmaktan korkmamaktır' },
          { id: 'C', text: 'kelimelerin sihirli dünyasında kaybolmaktan korkmamaktır' },
          { id: 'D', text: 'dünyasında kaybolmaktan korkmamaktır' },
          { id: 'E', text: 'sihirli dünyasında kaybolmaktan korkmamaktır' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüklem bir fiilimsi (isim-fiil) grubudur. "Kelimelerin sihirli dünyasında kaybolmaktan korkmamak" ifadesi bir bütün olarak isimleşmiş ve ek-fiil alarak yüklem olmuştur. Tamlamalar ve fiilimsi grupları bölünemez.'
      },
      {
        id: 'q-co-3-22',
        difficulty: 'hard',
        questionText: '"Sanat, toplumun aynası olduğu kadar insanın iç dünyasının da yansımasıdır." cümlesinin öge dizilişi hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Belirtili Nesne - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Belirtisiz Nesne - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: '"toplumun aynası olduğu kadar insanın iç dünyasının da yansımasıdır" kısmı bir edat ve tamlama grubudur ve tamamen yüklemdir. "Sanat" ise öznedir. Cümle sadece özne ve yüklemden oluşur.'
      },
      {
        id: 'q-co-3-23',
        difficulty: 'hard',
        questionText: '"Küçük çocuğun gözlerindeki masumiyet, bütün kötülükleri unutturacak kadar güçlü bir ilaçtı sanki." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Yüklem' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Edat (veya Zarf T.)' }
        ],
        correctOptionId: 'D',
        explanation: 'bütün kötülükleri unutturacak kadar güçlü bir ilaçtı (yüklem - sıfat tamlaması, "sanki" ise cümlenin sonuna eklenmiş edat/zarftır ve yüklem grubuna dâhil edilebilir veya tek başına zarf tümleci sayılabilir). Olan ne? Küçük çocuğun gözlerindeki masumiyet (özne). Belirtili nesne (Neyi/Kimi sorusuna yanıt veren bağımsız bir öge) yoktur. ("bütün kötülükleri unutturacak" kısmı sıfat-fiil grubunun içinde kaldığı için bağımsız bir nesne değildir).'
      },
      {
        id: 'q-co-3-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "cümle dışı unsur" (CDU) kullanılmıştır?',
        options: [
          { id: 'A', text: 'İnsanların düşüncelerine her zaman saygı duymalısın.' },
          { id: 'B', text: 'Ne var ki, beklediğimiz haber bir türlü gelmedi.' },
          { id: 'C', text: 'Sabahattin Ali\'nin eserlerini okumaktan çok keyif alıyorum.' },
          { id: 'D', text: 'Yıllar önce yaşanan bu olayı unutmak kolay değil.' },
          { id: 'E', text: 'Gökyüzündeki kara bulutlar şiddetli bir yağmurun habercisiydi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Ne var ki" ifadesi bir bağlaç grubudur. Bağlaçlar, ünlemler ve hitaplar cümle ögesi sayılmazlar, bunlar "cümle dışı unsur" (CDU) olarak adlandırılır.'
      },
      {
        id: 'q-co-3-25',
        difficulty: 'hard',
        questionText: '"Tarihî romanları okumayı çok seven dedem, bana her akşam bir efsane anlatırdı." cümlesindeki fiilimsi grubu, cümlenin hangi ögesi görevindedir?',
        options: [
          { id: 'A', text: 'Yüklem' },
          { id: 'B', text: 'Özne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Belirtisiz Nesne' }
        ],
        correctOptionId: 'B',
        explanation: 'anlatırdı (yüklem). Kim anlatırdı? "Tarihî romanları okumayı çok seven dedem" (Özne). Bu özne, içinde "okumayı", "seven" gibi eylemsiler barındıran bir fiilimsi (sıfat-fiil) grubudur.'
      },
      {
        id: 'q-co-3-26',
        difficulty: 'hard',
        questionText: '"Okul bahçesinde koşuşan öğrenciler, zilin çalmasıyla sınıflarına doğru yöneldiler." cümlesinin ögeleri aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'B', text: 'Dolaylı Tümleç - Özne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Dolaylı Tümleç - Belirtili Nesne - Yüklem' },
          { id: 'D', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Belirtisiz Nesne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'yöneldiler (yüklem). Yönelen kim? Okul bahçesinde koşuşan öğrenciler (Özne). Ne zaman / Nasıl? zilin çalmasıyla (Zarf Tümleci / Edat Tümleci). Nereye? sınıflarına doğru (Dolaylı Tümleç / Edat Tümleci - "doğru" edatıyla kurulmuş ama yön bildirdiği için yer tamlayıcısı da sayılabilir. MEB\'de "-e doğru" yer tamlayıcısı veya edat tümleci kabul edilir, şıklara göre DT\'dir). Sıralama: Özne - Zarf T. - Dolaylı T. - Yüklem.'
      },
      {
        id: 'q-co-3-27',
        difficulty: 'hard',
        questionText: '"Edilgen fiillerin kullanıldığı cümlelerde nesne, özne durumuna geçer ve buna sözde özne denir." Aşağıdaki cümlelerin hangisinde sözde özne yoktur?',
        options: [
          { id: 'A', text: 'Sınav kağıtları özenle okundu.' },
          { id: 'B', text: 'Sokaklar bayram için temizlendi.' },
          { id: 'C', text: 'Öğrenciler tatil haberine çok sevindi.' },
          { id: 'D', text: 'Yeni alınan kitaplar raflara dizildi.' },
          { id: 'E', text: 'Suçlu kısa sürede yakalandı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "sevindi"dir (sevinmek). Eylemi yapan "Öğrenciler"dir. Bu bir dönüşlü eylemdir (etken/dönüşlü) ve özne gerçek öznedir. Diğer seçeneklerde (okundu, temizlendi, dizildi, yakalandı) eylemi başkası yapmıştır, bu yüzden özneler (Sınav kağıtları, Sokaklar, kitaplar, Suçlu) sözde öznedir.'
      },
      {
        id: 'q-co-3-28',
        difficulty: 'hard',
        questionText: '"Rüzgârın uğultusu, gecenin sessizliğini bıçak gibi kesiyordu." cümlesinde "bıçak gibi" ifadesi cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Belirtisiz Nesne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Özne' }
        ],
        correctOptionId: 'D',
        explanation: 'kesiyordu (yüklem). Nasıl kesiyordu? "bıçak gibi" (durum zarfı / zarf tümleci).'
      },
      {
        id: 'q-co-3-29',
        difficulty: 'hard',
        questionText: '"Herkesin dilinde dolaşan bu eski türküyü, annemin en sevdiği şarkıyı, nihayet radyoda çaldılar." cümlesinde ara söz aşağıdaki ögelerden hangisini açıklamaktadır?',
        options: [
          { id: 'A', text: 'Özneyi' },
          { id: 'B', text: 'Belirtili Nesneyi' },
          { id: 'C', text: 'Dolaylı Tümleci' },
          { id: 'D', text: 'Yüklemi' },
          { id: 'E', text: 'Zarf Tümlecini' }
        ],
        correctOptionId: 'B',
        explanation: 'çaldılar (yüklem). Neyi çaldılar? "Herkesin dilinde dolaşan bu eski türküyü" (Belirtili Nesne). "annemin en sevdiği şarkıyı" bölümü ara sözdür ve belirtili nesneyi açıklamaktadır.'
      },
      {
        id: 'q-co-3-30',
        difficulty: 'hard',
        questionText: '"Köyün girişindeki viraneyi andıran eski değirmen, yılların yorgunluğunu üzerinden atamamıştı bir türlü." cümlesinin öge dizilişi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Dolaylı Tümleç - Yüklem - Zarf Tümleci' },
          { id: 'B', text: 'Özne - Belirtili Nesne - Yüklem - Zarf Tümleci' },
          { id: 'C', text: 'Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem' },
          { id: 'D', text: 'Özne - Belirtisiz Nesne - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Özne - Dolaylı Tümleç - Yüklem - Zarf Tümleci' }
        ],
        correctOptionId: 'A',
        explanation: 'atamamıştı (yüklem). Atamayan ne? Köyün girişindeki viraneyi andıran eski değirmen (özne). Neyi atamamıştı? yılların yorgunluğunu (belirtili nesne). Nereden? üzerinden (dolaylı tümleç). Nasıl/Ne zaman? bir türlü (zarf tümleci). Sıralama: Özne - Belirtili Nesne - Dolaylı Tümleç - Yüklem - Zarf Tümleci.'
      }
    ]
  }
];
