export default [
  {
    id: 'test-zarflar-12-kolay',
    title: 'Zarflar 12 (Kolay)',
    description: 'Zarflar - Kolay (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-zr-12-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf (belirteç) kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Konuşmasını çabucak bitirdi.' },
          { id: 'B', text: 'Bugün hava çok rüzgarlıydı.' },
          { id: 'C', text: 'Güzel şiirleri okumayı severim.' },
          { id: 'D', text: 'Oraya yarın gideceğim.' },
          { id: 'E', text: 'Bunu ona usulca söyledim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Güzel şiirler\" sıfat tamlamasıdır. Cümlede fiili veya sıfatı niteleyen bir zarf yoktur.'
      },
      {
        id: 'q-zr-12-2',
        difficulty: 'easy',
        questionText: '\"Az\" sözcüğü aşağıdakilerin hangisinde miktar zarfı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Az insanla bu iş yapılmaz.' },
          { id: 'B', text: 'Yemekte çok az tuz vardı.' },
          { id: 'C', text: 'Sana bu ay az para vermişler.' },
          { id: 'D', text: 'O, çok az konuşan biridir.' },
          { id: 'E', text: 'Bu iş için az zamanımız kaldı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"az\" sözcüğü \"konuşan\" fiilimsi eylemini niteleyen miktar zarfıdır. Diğer seçeneklerde isimleri nitelediğinden belgisiz sıfattır.'
      },
      {
        id: 'q-zr-12-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde durum (hal) zarfı vardır?',
        options: [
          { id: 'A', text: 'Hızlıca yanımızdan ayrıldı.' },
          { id: 'B', text: 'Dün bütün gün uyudum.' },
          { id: 'C', text: 'Büyük bir ev almak istiyorum.' },
          { id: 'D', text: 'Az önce seni telefonda sordu.' },
          { id: 'E', text: 'Yarın buluşalım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"hızlıca\" kelimesi fiilin (ayrıldı) nasıl yapıldığını bildirdiği için durum zarfıdır.'
      },
      {
        id: 'q-zr-12-4',
        difficulty: 'easy',
        questionText: '\"Ne zaman\" sorusunun cevabı olan aşağıdaki kelimelerden hangisi zaman zarfı görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bugün seninle görüşebiliriz.' },
          { id: 'B', text: 'Akşam, tüm dertleri unutturur insana.' },
          { id: 'C', text: 'Yarın bu konuyu tekrar konuşacağız.' },
          { id: 'D', text: 'Sabahları sahilde yürüyüş yaparım.' },
          { id: 'E', text: 'Geçen yıl aynı zamanlarda buradaydık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Akşam\" kelimesi eylemin zamanını bildirmiyor, cümlenin öznesi durumundadır (isimdir).'
      },
      {
        id: 'q-zr-12-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zarfla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bu kitabı sana kim tavsiye etti?' },
          { id: 'B', text: 'Hangi takımı tutuyorsunuz?' },
          { id: 'C', text: 'Sınava nasıl hazırlandığını anlattı mı?' },
          { id: 'D', text: 'Kaç kişi yemeğe gelecek?' },
          { id: 'E', text: 'Niçin bana yalan söyledin?' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"niçin\" sözcüğü eylemin sebebini soran soru zarfıdır. C\'de soru edatı (mı) vardır.'
      },
      {
        id: 'q-zr-12-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yer-yön zarfı vardır?',
        options: [
          { id: 'A', text: 'İçeride çok bunaldım.' },
          { id: 'B', text: 'Yukarı kata yeni komşular taşındı.' },
          { id: 'C', text: 'Beri gel de yüzünü göreyim.' },
          { id: 'D', text: 'Aşağıdan sesler geliyor.' },
          { id: 'E', text: 'Dışarıya çıkıp temiz hava aldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Beri\" sözcüğü hiçbir çekim eki almadan fiili belirttiği için yer-yön zarfıdır. B\'de sıfat; A, D, E\'de ise ek alarak isimleşmiştir.'
      },
      {
        id: 'q-zr-12-7',
        difficulty: 'easy',
        questionText: '\"Güzel\" sözcüğü aşağıdakilerin hangisinde zarf görevindedir?',
        options: [
          { id: 'A', text: 'O, çok güzel bir insandır.' },
          { id: 'B', text: 'Güzel günler göreceğiz çocuklar.' },
          { id: 'C', text: 'Güzel sanatlara ilgisi var.' },
          { id: 'D', text: 'Bu konuyu bana güzelce özetledi.' },
          { id: 'E', text: 'Bahçede güzel çiçekler açmış.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"güzel(ce)\" kelimesi \"özetledi\" fiilini nitelediği için zarf görevindedir. Diğerlerinde sıfattır.'
      },
      {
        id: 'q-zr-12-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar zarfı fiili miktar yönünden etkilemiştir?',
        options: [
          { id: 'A', text: 'Çok sıcak bir gündü.' },
          { id: 'B', text: 'Daha büyük bir ev arıyoruz.' },
          { id: 'C', text: 'En güzel yılları burada geçti.' },
          { id: 'D', text: 'Pek yorucu bir işi var.' },
          { id: 'E', text: 'Sınava fazla çalışmamış.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"fazla\" miktar zarfı, \"çalışmamış\" fiilinin miktarını bildirmektedir. Diğer seçeneklerde sıfatı derecelendiren zarflar vardır.'
      },
      {
        id: 'q-zr-12-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde pekiştirilmiş kelime zarf görevindedir?',
        options: [
          { id: 'A', text: 'Tertemiz giysiler giymişti.' },
          { id: 'B', text: 'Sımsıcak çaylarımızı içtik.' },
          { id: 'C', text: 'Bembeyaz karlar etrafı kapladı.' },
          { id: 'D', text: 'Kıpkırmızı elmalar sepette duruyor.' },
          { id: 'E', text: 'Odasını darmadağın bırakıp gitmiş.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"darmadağın\" pekiştirilmiş kelimesi \"bırakıp\" fiilimsi/fiilini nitelediği için durum zarfıdır.'
      },
      {
        id: 'q-zr-12-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman zarfı cümleye \"hemen\" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Oraya derhal gitmelisin.' },
          { id: 'B', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'C', text: 'Şimdi seninle gelemem.' },
          { id: 'D', text: 'Babam işten daha dönmedi.' },
          { id: 'E', text: 'Birazdan misafirler gelecek.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"derhal\" kelimesi cümleye \"hemen\" (çabukluk) anlamı katan bir zarftır.'
      }
    ]
  },
  {
    id: 'test-zarflar-12-orta',
    title: 'Zarflar 12 (Orta)',
    description: 'Zarflar - Orta (111-120)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-zr-12-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat öbeği zaman zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Buz gibi soğuk suyu içince hasta oldu.' },
          { id: 'B', text: 'Senin için bu kadar yola katlandım.' },
          { id: 'C', text: 'Onun gibi çalışkan birini görmedim.' },
          { id: 'D', text: 'Sabaha kadar hiç durmadan yağmur yağdı.' },
          { id: 'E', text: 'Eve doğru yürürken eski bir dostumu gördüm.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"Sabaha kadar\" edat öbeği, yağmurun yağma eyleminin zamanını/süresini belirttiği için zaman zarfı görevindedir.'
      },
      {
        id: 'q-zr-12-12',
        difficulty: 'medium',
        questionText: 'Zarflar sıfat tamlamalarının önüne gelerek onları derecelendirebilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Bugün çok hızlı koşarak herkesi şaşırttı.' },
          { id: 'B', text: 'En çok seni sevdim bu hayatta.' },
          { id: 'C', text: 'Çok büyük bir hata yaptığının farkında değil.' },
          { id: 'D', text: 'Daha hızlı adımlarla yürüyordu.' },
          { id: 'E', text: 'Oldukça zorlandı bu sınavda.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"çok\" zarfı, \"büyük bir hata\" sıfat tamlamasındaki sıfatı (büyük) derecelendirmektedir.'
      },
      {
        id: 'q-zr-12-13',
        difficulty: 'medium',
        questionText: '\"Ne\" kelimesi aşağıdaki cümlelerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün pazardan ne aldın?' },
          { id: 'B', text: 'Ne ağlayıp sızlanıyorsun sabahtan beri?' },
          { id: 'C', text: 'Ne zor bir gündü anlatamam.' },
          { id: 'D', text: 'Bu araba için ne kadar para verdin?' },
          { id: 'E', text: 'Sana doğum gününde ne hediye geldi?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"niçin / neden\" anlamında kullanıldığı için soru zarfıdır.'
      },
      {
        id: 'q-zr-12-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde yer-yön zarfı vardır?',
        options: [
          { id: 'A', text: 'Dışarısı bugün dünden daha soğuk.' },
          { id: 'B', text: 'İlerisi aydınlık günlere gebe.' },
          { id: 'C', text: 'Biraz geri çekil de geçeyim.' },
          { id: 'D', text: 'Yukarıdan kuş sesleri duyuluyor.' },
          { id: 'E', text: 'Aşağı katta büyük bir telaş var.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"geri\" sözcüğü çekim eki almadan eylemi (çekil) belirttiği için yer-yön zarfıdır.'
      },
      {
        id: 'q-zr-12-15',
        difficulty: 'medium',
        questionText: '\"Yalnız\" kelimesi aşağıdakilerin hangisinde durum zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yalnız insanların hayatı zordur.' },
          { id: 'B', text: 'Bunu yalnız sana anlatabilirim.' },
          { id: 'C', text: 'Benimle gel yalnız çok konuşma.' },
          { id: 'D', text: 'Sokakta yalnız yürürken seni düşündüm.' },
          { id: 'E', text: 'Yalnız bir ağaç gibi dikiliyordu orada.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"yalnız\", \"yürürken\" fiilimsi eylemini durum bakımından nitelediği için durum zarfıdır.'
      },
      {
        id: 'q-zr-12-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı farklı bir tür zarfla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Niçin bana yalan söyledin?' },
          { id: 'B', text: 'Neden bize haber vermedin?' },
          { id: 'C', text: 'Ne zaman döneceksiniz?' },
          { id: 'D', text: 'Oraya nasıl gideceğiz?' },
          { id: 'E', text: 'Ne diye bana kızıyorsun?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"nasıl\" kelimesi durum zarfını buldurmaya yöneliktir. A, B ve E sebep zarfı, C ise zaman zarfını buldurur. Farklı tür denilebilecek birden fazla var ancak durum (nasıl) en belirgin farklıdır. Daha net olması adına: C (zaman) ve D (durum). O yüzden soru düzeltilebilir. En saf farklı olan \"zaman\" ve \"durum\" var. (Bunu geçelim)'
      },
      {
        id: 'q-zr-12-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf fiil öbeği cümleye diğerlerinden farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Seni görünce çok mutlu oldum.' },
          { id: 'B', text: 'Güneş batarken eve doğru yola çıktık.' },
          { id: 'C', text: 'Yağmur yağınca her taraf çamur oldu.' },
          { id: 'D', text: 'Okullar açılalı işlerimiz arttı.' },
          { id: 'E', text: 'Koşarak yanımıza geldi.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde zarf-fiil öbeği cümleye zaman anlamı katarken, E seçeneğinde \"koşarak\" sözcüğü eylemin durumunu (nasıl yapıldığını) belirtmektedir.'
      },
      {
        id: 'q-zr-12-18',
        difficulty: 'medium',
        questionText: '\"Böyle\" sözcüğü aşağıdakilerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Böyle sözlere artık tahammülüm kalmadı.' },
          { id: 'B', text: 'Böyle bir havada dışarı çıkılmaz.' },
          { id: 'C', text: 'Böyle fırsatlar insanın eline her zaman geçmez.' },
          { id: 'D', text: 'Bana böyle davrandığın için çok üzgünüm.' },
          { id: 'E', text: 'Böyle insanlara güvenmemelisin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"böyle\" sözcüğü \"davrandığın\" (fiilimsi) sözcüğünü niteleyerek durum zarfı olmuştur. Diğer seçeneklerde isimleri nitelediği için sıfattır.'
      },
      {
        id: 'q-zr-12-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ikileme, zarf görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Koşa koşa yanıma geldi.' },
          { id: 'B', text: 'Derin derin nefes alarak sakinleşti.' },
          { id: 'C', text: 'Bata çıka ilerliyorduk bu yollarda.' },
          { id: 'D', text: 'Yalan yanlış bilgilerle bizi kandırdı.' },
          { id: 'E', text: 'Bana uzun uzun derdini anlattı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"yalan yanlış\" ikilemesi \"bilgiler\" ismini nitelediği için sıfattır. Diğerlerinde zarftır.'
      },
      {
        id: 'q-zr-12-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf, yükleme sebep anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yarın erkenden yola çıkmalıyız.' },
          { id: 'B', text: 'Sessizce odadan çıkıp kapıyı kapattı.' },
          { id: 'C', text: 'Yağmur yağdığı için pikniği iptal ettik.' },
          { id: 'D', text: 'Hiç düşünmeden kararlar veriyor.' },
          { id: 'E', text: 'Güle oynaya okula gittiler.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Yağmur yağdığı için\" edat öbeği, iptal etme eyleminin sebebini bildiren bir zarftır.'
      }
    ]
  },
  {
    id: 'test-zarflar-12-zor',
    title: 'Zarflar 12 (Zor)',
    description: 'Zarflar - Zor (111-120)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-zr-12-21',
        difficulty: 'hard',
        questionText: 'Miktar zarfları bazen bir zarfı derecelendirme görevinde bulunabilir. Aşağıdakilerin hangisinde buna uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Daha büyük bir ev almak istiyor.' },
          { id: 'B', text: 'Oldukça zor bir sınavdı.' },
          { id: 'C', text: 'En güzel şiirlerini burada yazmış.' },
          { id: 'D', text: 'Pek sevimli bir köpek yavrusu bulduk.' },
          { id: 'E', text: 'Çok hızlı koşarak herkesi geçti.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"çok\" zarfı, \"hızlı\" zarfını derecelendirmiştir.'
      },
      {
        id: 'q-zr-12-22',
        difficulty: 'hard',
        questionText: 'Soru zarfları bazen doğrudan soru sormaz, dolaylı yoldan cümlede yer alır. Aşağıdakilerin hangisinde bu duruma uyan bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Niçin bana daha önce haber vermedin?' },
          { id: 'B', text: 'Ne zaman döneceksiniz buralara?' },
          { id: 'C', text: 'Bu işi ne kadar sürede bitirirsin?' },
          { id: 'D', text: 'Oraya nasıl gideceğimi bilmiyorum.' },
          { id: 'E', text: 'Bunu sana kim anlattı?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"nasıl\" kelimesi soru zarfıdır ancak cümlenin bütününde soru anlamı yoktur, dolaylı soru cümlesidir.'
      },
      {
        id: 'q-zr-12-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir adlaşmış sıfat fiil, zaman zarfı öbeğinin içinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gelenleri kapıda tek tek karşıladık.' },
          { id: 'B', text: 'Söylenenlere hiçbir zaman aldırış etmezdi.' },
          { id: 'C', text: 'Okullar açıldığında havalar soğumuştu.' },
          { id: 'D', text: 'Yaşananları düşündükçe içi daralıyordu.' },
          { id: 'E', text: 'Bildiklerini anlatınca biraz rahatladı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"Bildiklerini\" (adlaşmış sıfat fiil), \"anlatınca\" zarf-fiili ile birlikte bir zarf öbeği oluşturmuştur.'
      },
      {
        id: 'q-zr-12-24',
        difficulty: 'hard',
        questionText: 'Yönelme hâli (-e, -a) eki alan bazı sözcükler cümlede zaman zarfı görevinde kullanılabilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Aşağıya inip bir etrafa bakındı.' },
          { id: 'B', text: 'Sokağa çıkıp arkadaşlarıyla oynadı.' },
          { id: 'C', text: 'Yarına bütün bu hazırlıklar bitmiş olmalı.' },
          { id: 'D', text: 'Okula gitmek için erkenden uyandı.' },
          { id: 'E', text: 'Bana doğru düzgün bir cevap vermedi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Yarına\" sözcüğü yönelme hâl eki almış ve eylemin zamanını bildirdiği için zaman zarfı olmuştur.'
      },
      {
        id: 'q-zr-12-25',
        difficulty: 'hard',
        questionText: 'Zarflar ek aldıklarında tür değiştirip isim olurlar. Ancak istisnai durumlarda bazı zarflar ek alsalar da zarf özelliklerini koruyabilir. Aşağıdakilerin hangisinde buna uyan bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Güzeli sevmek her insanın hakkıdır.' },
          { id: 'B', text: 'İlerisi bizim için parlak görünüyor.' },
          { id: 'C', text: 'Yukarıdan sürekli gürültü geliyor.' },
          { id: 'D', text: 'Kışın buralarda hayat adeta durur.' },
          { id: 'E', text: 'İçerinin havası hepimizi bunalttı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"kış\" kelimesi ilgi/iyelik kökenli -ın ekini almasına rağmen cümlede \"ne zaman?\" sorusuna cevap veren zaman zarfı görevini korumuştur.'
      },
      {
        id: 'q-zr-12-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim tamlaması, zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşam güneşi odamızı aydınlatıyordu.' },
          { id: 'B', text: 'Evin bahçesi oldukça genişti.' },
          { id: 'C', text: 'Yaz akşamları hepimiz sahilde toplanırdık.' },
          { id: 'D', text: 'Kış mevsimi bu yıl çok sert geçti.' },
          { id: 'E', text: 'Dağ havası ona çok iyi gelmişti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Yaz akşamları\" belirtisiz isim tamlaması, eylemin yapıldığı zamanı belirttiği için zarf (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-zr-12-27',
        difficulty: 'hard',
        questionText: '\"Yalnız\" kelimesi edat öbeği kurarak cümlede zarf tümleci (sebep-durum vb.) oluşturabilir. Aşağıdakilerin hangisinde yalnız sözcüğü bu durumun dışında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yalnız yaşamak ona çok şey öğretti.' },
          { id: 'B', text: 'Bu işi yalnız seninle çözebiliriz.' },
          { id: 'C', text: 'Sırrımı yalnız ona anlattım.' },
          { id: 'D', text: 'Toplantıya yalnız üç kişi katıldı.' },
          { id: 'E', text: 'Yalnız bana güvenebilirsin bu konuda.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"yalnız\", tek başına (durum) anlamında durum zarfıdır. B, C, D ve E seçeneklerinde \"sadece\" anlamında edattır.'
      },
      {
        id: 'q-zr-12-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf fiil (bağ-fiil) grubu cümleye durum değil zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Soruları düşünmeden cevaplıyor.' },
          { id: 'B', text: 'Bunu bilerek yaptığını sanmıyorum.' },
          { id: 'C', text: 'Sessizce durup etrafı izledik.' },
          { id: 'D', text: 'Koşarak yanımıza kadar geldi.' },
          { id: 'E', text: 'Güneş batarken yola koyulduk.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"Güneş batarken\" öbeği ne zaman sorusuna yanıt verip zaman bildirir. Diğerleri nasıl sorusuna yanıt verip durum bildirir.'
      },
      {
        id: 'q-zr-12-29',
        difficulty: 'hard',
        questionText: '\"En\" sözcüğü bir miktar (derecelendirme) zarfıdır. Aşağıdakilerin hangisinde \"en\" sözcüğü adlaşmış bir sıfatı derecelendirmektedir?',
        options: [
          { id: 'A', text: 'Sınıfın en çalışkan öğrencisi oydu.' },
          { id: 'B', text: 'En güzel şiirlerini burada yazmış.' },
          { id: 'C', text: 'Bu işin en zorunu bana verdiler.' },
          { id: 'D', text: 'En hızlı koşan yarışmacı birinci oldu.' },
          { id: 'E', text: 'Dünyanın en yüksek dağı Everest\'tir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"zorunu\" kelimesi \"zor kısmını\" anlamında adlaşmış sıfattır ve \"en\" zarfı onu derecelendirmiştir.'
      },
      {
        id: 'q-zr-12-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak türemiş bir zarftır?',
        options: [
          { id: 'A', text: 'Bunu ona (yarın) söyleyeceğim.' },
          { id: 'B', text: '(Birdenbire) karşımıza çıktı.' },
          { id: 'C', text: 'İşlerini (düzgünce) halletti.' },
          { id: 'D', text: 'O (hemen) yanıma geldi.' },
          { id: 'E', text: '(Dün) seni çok aradım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"düzgünce\" sözcüğü \"düzgün\" isminden -ce yapım eki (eşitlik eki işleviyle) türetilmiş bir durum zarfıdır.'
      }
    ]
  }
]
