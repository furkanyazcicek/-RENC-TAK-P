export default [
  {
    id: 'test-fiiller-12-kolay',
    title: 'Fiiller 12 (Kolay)',
    description: 'Fiiller ve Ek Fiil - Kolay (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-fl-12-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem 3. tekil şahıs (o) eki ile çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Bugünlerde kendini çok yoruyorsun.' },
          { id: 'B', text: 'Hızlıca merdivenlerden yukarı çıktı.' },
          { id: 'C', text: 'Lütfen, içeride biraz sessiz olunuz.' },
          { id: 'D', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'E', text: 'Sınavı kazandığımı duyunca çok sevindim.' }
        ],
        correctOptionId: 'B',
        explanation: '3. tekil şahıs zamiri "o"dur. "Çıktı" (o çıktı) eylemi 3. tekil şahısla çekimlenmiştir.'
      },
      {
        id: 'q-fl-12-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem, bilinen (görülen) geçmiş zaman kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Bütün işleri kendi başına bitirecek.' },
          { id: 'B', text: 'Sınav kağıtlarını dün gece masaya bıraktı.' },
          { id: 'C', text: 'Her zaman böyle nazik davranır.' },
          { id: 'D', text: 'Şu an balkonda kitap okuyor.' },
          { id: 'E', text: 'Söylenenlere göre çok çalışkanmış.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bilinen geçmiş zaman eki "-dı / -di"dir. "Bıraktı" eylemi bilinen geçmiş zaman kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-12-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili eylemlerden hangisi "durum" eylemidir?',
        options: [
          { id: 'A', text: 'Ağacın yaprakları sonbaharda iyice *sarardı*.' },
          { id: 'B', text: 'Oraya gidince bizi de mutlaka *ara*.' },
          { id: 'C', text: 'Sabahtan beri oturduğu yerde *uyuyakaldı*.' },
          { id: 'D', text: 'Eskimiş elbiseleri çöpe *attı*.' },
          { id: 'E', text: 'Soruları büyük bir dikkatle *okudu*.' }
        ],
        correctOptionId: 'C',
        explanation: 'Durum fiilleri nesne (neyi/kimi) almazlar. "Uyuyakaldı" eylemi nesne almadığı için durum fiilidir. Ara, attı, okudu iş; sarardı ise oluş fiilidir.'
      },
      {
        id: 'q-fl-12-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "oluş" eylemi kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Dolapta unutulan peynir iyice küflenmiş.' },
          { id: 'B', text: 'Bahçedeki domatesler nihayet kızardı.' },
          { id: 'C', text: 'Demir kapı yağmurdan dolayı paslanmış.' },
          { id: 'D', text: 'Çocuk yıllar içinde epeyce uzadı.' },
          { id: 'E', text: 'Odanın kapısını sessizce açtı.' }
        ],
        correctOptionId: 'E',
        explanation: 'Oluş eylemleri, zaman içinde öznenin kendi iradesi dışında geçirdiği değişimi anlatır (küflenmiş, kızardı, paslanmış, uzadı). "Açtı" ise iş eylemidir.'
      },
      {
        id: 'q-fl-12-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem gereklilik kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Yarın erkenden uyanmalıyım.' },
          { id: 'B', text: 'Hafta sonu birlikte pikniğe gidelim.' },
          { id: 'C', text: 'Lütfen kapıyı kapatıp içeri giriniz.' },
          { id: 'D', text: 'Keşke sen de o akşam bizimle gelseydin.' },
          { id: 'E', text: 'Yarın akşam bize yemeğe gelecek.' }
        ],
        correctOptionId: 'A',
        explanation: 'Gereklilik kipi eki "-malı / -meli"dir. "Uyanmalıyım" eylemi gereklilik kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-12-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde haber (bildirme) kiplerinden biriyle çekimlenmiş bir fiil vardır?',
        options: [
          { id: 'A', text: 'Lütfen, ayakkabılarınızı kapının önünde çıkarın.' },
          { id: 'B', text: 'Bu akşam biraz erken uyumalıyım.' },
          { id: 'C', text: 'O da senin gibi biraz daha çalışsa.' },
          { id: 'D', text: 'Bütün soruları zamanında çözecek.' },
          { id: 'E', text: 'Hafta sonu maça gidelim.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "çözecek" eylemi gelecek zaman kipiyle (haber kipi) çekimlenmiştir. Diğerleri dilek kipleridir (A emir, B gereklilik, C şart, E istek).'
      },
      {
        id: 'q-fl-12-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi yansıma kökten türemiş bir eylemdir?',
        options: [
          { id: 'A', text: 'Patlamak' },
          { id: 'B', text: 'Başlamak' },
          { id: 'C', text: 'Kanamak' },
          { id: 'D', text: 'Oynamak' },
          { id: 'E', text: 'Görmek' }
        ],
        correctOptionId: 'A',
        explanation: '"Patlamak" kelimesinin kökü doğadaki seslerin taklidi olan "pat" (yansıma) ismidir. İsimden fiil yapım eki (-la) almıştır.'
      },
      {
        id: 'q-fl-12-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabahları her zaman erken uyanır.' },
          { id: 'B', text: 'Odanın kapısını sessizce açtı.' },
          { id: 'C', text: 'Kitabını masanın üzerinde bıraktı.' },
          { id: 'D', text: 'Bugün hava gerçekten çok güzeldi.' },
          { id: 'E', text: 'Bize her zaman çok iyi davrandı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde isim soylu "güzel" kelimesi ek fiil (-di) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-12-9',
        difficulty: 'easy',
        questionText: '"Gül-" eyleminin geniş zaman 1. çoğul şahıs çekimi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Gülüyoruz' },
          { id: 'B', text: 'Güleriz' },
          { id: 'C', text: 'Gülmüşüz' },
          { id: 'D', text: 'Güleceğiz' },
          { id: 'E', text: 'Güler' }
        ],
        correctOptionId: 'B',
        explanation: 'Geniş zaman eki "-er", 1. çoğul şahıs eki "-iz"dir. "Gül-er-iz" doğru çekimdir.'
      },
      {
        id: 'q-fl-12-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilin olumsuzu kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Onun bu söylediklerine hiç şaşırmadım.' },
          { id: 'B', text: 'Bütün eşyaları kutulara yerleştirdik.' },
          { id: 'C', text: 'Yarın erkenden yola çıkmayacağız.' },
          { id: 'D', text: 'Bu soruyu çözmek için hiç uğraşmadı.' },
          { id: 'E', text: 'Bunu sana daha önce söylemedim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "yerleştirdik" eylemi olumludur. Diğerlerinde olumsuzluk eki (-ma/-me) vardır.'
      }
    ]
  },
  {
    id: 'test-fiiller-12-orta',
    title: 'Fiiller 12 (Orta)',
    description: 'Fiiller ve Ek Fiil - Orta (111-120)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-fl-12-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman (anlam) kayması, geniş zamanın geçmiş zaman yerine kullanılmasıyla oluşmuştur?',
        options: [
          { id: 'A', text: 'Fatih Sultan Mehmet, İstanbul\'u 1453\'te fetheder.' },
          { id: 'B', text: 'Her sabah uyanır uyanmaz bir bardak su içiyor.' },
          { id: 'C', text: 'Haftaya çarşamba günü ameliyat oluyorum.' },
          { id: 'D', text: 'Allah\'ım, sen bize her zaman doğru yolu göster.' },
          { id: 'E', text: 'Lütfen, artık bu konu hakkında konuşmayalım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde eylem 1453\'te (geçmişte) gerçekleşmesine rağmen, fiil geniş zaman (-er) kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-12-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde gelecek zamanın hikayesi ile çekimlenmiş bir fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınav sonuçları açıklandığında çok sevinmişti.' },
          { id: 'B', text: 'Yarın akşam bize yemeğe gelecekti.' },
          { id: 'C', text: 'Küçükken bu parkta akşama kadar oynardık.' },
          { id: 'D', text: 'O, daha önceden de bu mahalleye gelmişmiş.' },
          { id: 'E', text: 'Yarınki toplantı iptal edilecekmiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'Gelecek zaman kipi (-ecek) ile ek fiilin hikayesinin (-ti) birleşmesiyle "gelecekti" fiili (gelecek zamanın hikayesi) oluşmuştur.'
      },
      {
        id: 'q-fl-12-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sürerlik fiili kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ocağı açık unuttuğunu anlayınca eve koşuverdi.' },
          { id: 'B', text: 'O kadar yorgundu ki koltukta uyuyakaldı.' },
          { id: 'C', text: 'Siz önden gidedurun, biz yetişiriz.' },
          { id: 'D', text: 'Bu gelenek yıllardır böyle anlatılagelir.' },
          { id: 'E', text: 'Giden arabanın arkasından bakakaldı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Sürerlik fiili -edur, -ekal, -egel ekleriyle yapılır. A seçeneğindeki "koşuverdi" tezlik fiilidir.'
      },
      {
        id: 'q-fl-12-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiili cümleye "gücü yetme, başarabilme" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yarın öğleden sonra yağmur yağabilir.' },
          { id: 'B', text: 'Şimdi dışarı çıkıp arkadaşlarınla oynayabilirsin.' },
          { id: 'C', text: 'Belki o da bizimle sinemaya gelebilir.' },
          { id: 'D', text: 'Bu ağır masayı tek başıma taşıyabilirim.' },
          { id: 'E', text: 'Bugün toplantı biraz geç bitebilir.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "taşıyabilirim" ifadesi fiziksel olarak gücü yetme, başarabilme anlamındadır. A, C, E olasılık, B ise izin anlamı taşır.'
      },
      {
        id: 'q-fl-12-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "etmek" yardımcı eylemiyle kurulmuş birleşik fiilde ses türemesi olmuştur?',
        options: [
          { id: 'A', text: 'Zorluklar karşısında biraz sabretmelisin.' },
          { id: 'B', text: 'Sınavı kazanamadığını öğrenince adeta kahroldu.' },
          { id: 'C', text: 'Ona ne kadar kızsam da sonunda yine affettim.' },
          { id: 'D', text: 'Bütün tekliflerimizi hiç düşünmeden kabul etti.' },
          { id: 'E', text: 'Onu dünkü davette maalesef fark etmedim.' }
        ],
        correctOptionId: 'C',
        explanation: '"Affettim" kelimesi af ve etmek sözcüklerinden oluşur. Birleşme sırasında "f" sesi türemiştir (ünsüz türemesi).'
      },
      {
        id: 'q-fl-12-16',
        difficulty: 'medium',
        questionText: 'Ek fiilin geniş zaman 3. tekil şahıs eki (-dır / -dir) bazen olasılık veya kesinlik anlamı katar. Aşağıdakilerin hangisinde ek fiil cümleye kesinlik katmıştır?',
        options: [
          { id: 'A', text: 'Belki şu an o da bizi düşünüyordur.' },
          { id: 'B', text: 'Toplantı burada sona ermiştir, çıkabilirsiniz.' },
          { id: 'C', text: 'Yarın hava muhtemelen güneşli olacaktır.' },
          { id: 'D', text: 'Şimdiye kadar çoktan Ankara\'ya varmıştır.' },
          { id: 'E', text: 'Bu saatte sokaklar bomboş kalmıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "sona ermiştir" ifadesi resmi bir dille kesinlik bildirmektedir. Diğer seçeneklerde ihtimal (olasılık) anlamı vardır.'
      },
      {
        id: 'q-fl-12-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde anlamca kaynaşmış birleşik eylem (deyimleşmiş eylem) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Uzaklardan bir tren düdüğü duyuldu.' },
          { id: 'B', text: 'Gözlerimi ufuktan bir an bile ayıramadım.' },
          { id: 'C', text: 'Sonbahar rüzgarı ağaçların yapraklarını döküyor.' },
          { id: 'D', text: 'Bütün gün sokaklarda başıboş dolaştım.' },
          { id: 'E', text: 'Olanları duyunca öfkeden küplere bindi.' }
        ],
        correctOptionId: 'E',
        explanation: '"Küplere binmek" çok öfkelenmek anlamında bir deyimdir ve anlamca kaynaşmış birleşik eylemdir.'
      },
      {
        id: 'q-fl-12-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili eylemlerden hangisi yapısı bakımından birleşik bir eylemdir?',
        options: [
          { id: 'A', text: 'Eşyaları arabanın bagajına *yerleştirdi*.' },
          { id: 'B', text: 'Olanları duyunca o da benim gibi *kahroldu*.' },
          { id: 'C', text: 'Sonbaharda bütün ağaçların yaprakları *sarardı*.' },
          { id: 'D', text: 'Bütün bu zorlukların üstesinden tek başına *geldi*.' },
          { id: 'E', text: 'Çocuklar bahçede saatlerce *koşuşturdu*.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "kahroldu" (kahır + olmak) yardımcı eylemle kurulan birleşik eylemdir. A, C, E türemiş, D ise basit eylemdir.'
      },
      {
        id: 'q-fl-12-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil, isme gelerek onu yüklem yapma görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Onun en sevdiği ders tarihti.' },
          { id: 'B', text: 'Sınava çalışan tek kişi oydu.' },
          { id: 'C', text: 'Buranın manzarası gerçekten çok güzeldi.' },
          { id: 'D', text: 'Bütün bu sorunların kaynağı bu eski evmiş.' },
          { id: 'E', text: 'Bunu ona uygun bir dille söylemeliymiş.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde ek fiil (-miş) basit zamanlı eyleme (söyle-meli) gelerek onu birleşik zamanlı eylem yapmıştır. Diğerlerinde isimleri (tarih, o, güzel, ev) yüklem yapmıştır.'
      },
      {
        id: 'q-fl-12-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yaklaşma fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sen önden gidedur, ben hemen geliyorum.' },
          { id: 'B', text: 'Bunu ona söyleyiverdim gitti.' },
          { id: 'C', text: 'Bardağı elinden düşürünce kırılayazdı.' },
          { id: 'D', text: 'Bu ağır kutuyu tek başıma kaldıramam.' },
          { id: 'E', text: 'Bütün işleri hızlıca bitiriverdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yaklaşma fiili eyleme az kalsın anlamı katar ve "-e yazmak" ile yapılır. "Kırılayazdı" buna örnektir.'
      }
    ]
  },
  {
    id: 'test-fiiller-12-zor',
    title: 'Fiiller 12 (Zor)',
    description: 'Fiiller ve Ek Fiil - Zor (111-120)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-fl-12-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zaman (anlam) kayması" gelecek zamanın geniş zaman yerine kullanılmasıyla oluşmuştur?',
        options: [
          { id: 'A', text: 'Nasrettin Hoca bir gün göle maya çalar.' },
          { id: 'B', text: 'Her sabah uyanır uyanmaz bir bardak su içiyor.' },
          { id: 'C', text: 'İşte o, her gün aynı saatte bu yoldan geçecek.' },
          { id: 'D', text: 'Mustafa Kemal, 1919\'da Samsun\'a çıkıyor.' },
          { id: 'E', text: 'Allah\'ım, sen bize her zaman doğru yolu göster.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde eylem "her gün" gerçekleştiği için geniş zaman kullanılması gerekirken, gelecek zaman (-ecek) kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-12-22',
        difficulty: 'hard',
        questionText: 'Ek fiilin geniş zaman 3. tekil şahıs eki (-dır / -dir) bazen düşer. Aşağıdaki cümlelerin hangisinde ek fiil düştüğü halde cümlede "bildirme" anlamı devam etmektedir?',
        options: [
          { id: 'A', text: 'En büyük hayali iyi bir doktor olmaktı.' },
          { id: 'B', text: 'Benim için dünyadaki en değerli varlık sensin.' },
          { id: 'C', text: 'Dışarıda kuvvetli bir rüzgar, içeride büyük bir sessizlik var.' },
          { id: 'D', text: 'O günlerde bu kasabanın tek eczanesi burasıydı.' },
          { id: 'E', text: 'Onun bu söylediklerine sadece sessiz kaldım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde isim cümlesinin yüklemi "var" ismidir. Normalde "vardır" olması gerekirken geniş zaman 3. tekil şahıs ek fiili (-dır) düşmüştür ve cümledeki yargı/bildirme anlamı devam eder.'
      },
      {
        id: 'q-fl-12-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiilinin olumsuzu, eylemin yapılamayacağına dair geçmişte kalmış kesin bir imkansızlık bildirir biçimde çekimlenmiştir?',
        options: [
          { id: 'A', text: 'O ağır taşı yerinden ben bile kıpırdatamam.' },
          { id: 'B', text: 'Bunca derdi o gencecik yaşında tek başına çekemez.' },
          { id: 'C', text: 'Kapıyı defalarca zorlamasına rağmen açamadı.' },
          { id: 'D', text: 'Ne kadar yalvarsa da onu asla affetmeyecek.' },
          { id: 'E', text: 'Onu gördüğüm an ne yapacağımı bilemedim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde eylem yeterlik fiilinin geçmiş zaman olumsuzudur (aç-a-ma-dı). Kesin bir imkansızlığı geçmiş zamanda ifade eder.'
      },
      {
        id: 'q-fl-12-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem basit zamanlı hem birleşik zamanlı eylem bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yağmur yağıyordu, biz de eve doğru koştuk.' },
          { id: 'B', text: 'Ölmek kaderde var, bize ürküntü vermiyor' },
          { id: 'C', text: 'Biliyordum, bir gün mutlaka geri dönecektin.' },
          { id: 'D', text: 'Gökyüzünün başka rengi de varmış' },
          { id: 'E', text: 'Geç fark ettim taşın sert olduğunu / Su insanı boğar, ateş yakarmış' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "fark ettim" ve "boğar" basit zamanlı eylemler, "yakarmış" ise birleşik zamanlı eylemdir.'
      },
      {
        id: 'q-fl-12-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki eylemlerden hangisi yapıca türemiş değildir?',
        options: [
          { id: 'A', text: 'Haber gelince hemen yola *koyulduk*.' },
          { id: 'B', text: 'Bu ağır yükleri tek başına *taşıttı*.' },
          { id: 'C', text: 'Olayı duyan mahalleli sokağa *döküldü*.' },
          { id: 'D', text: 'Dün akşam onu parkta *gördüm*.' },
          { id: 'E', text: 'Beni aramadığı için ona çok *darılmıştım*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gördüm" fiili gör- kökünden yapım eki almadan (sadece -dü ve -m çekim ekleriyle) oluşmuş basit yapılı bir fiildir. Diğerleri koy-ul, taşı-t, dök-ül, dar-ıl şeklinde yapım eki almış türemiş fiillerdir.'
      },
      {
        id: 'q-fl-12-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde birleşik zamanlı eylem yoktur?',
        options: [
          { id: 'A', text: 'Geç fark ettim taşın sert olduğunu / Su insanı boğar, ateş yakarmış.' },
          { id: 'B', text: 'Her akşam güneş batarken içime bir hüzün çökerdi.' },
          { id: 'C', text: 'Biliyordum, bir gün mutlaka geri dönecektin.' },
          { id: 'D', text: 'Yüzümü güneşe çevirdim, içimi ısıtsın diye.' },
          { id: 'E', text: 'Eskiden buralarda çok güzel elmalar yetişirdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "çevirdim" ve "ısıtsın" eylemleri basit zamanlıdır. Diğer seçeneklerde yakarmış, çökerdi, dönecektin, yetişirdi kelimeleri birleşik zamanlıdır.'
      },
      {
        id: 'q-fl-12-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-miş" eki, ek fiil (ek eylem) göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'O zamanlar bu okulun en başarılı öğrencisiymiş.' },
          { id: 'B', text: 'Evin bahçesindeki ağaçlar çok yaşlıymış.' },
          { id: 'C', text: 'En sevdiği arkadaşı ona çok kırılmış.' },
          { id: 'D', text: 'Dünkü sınav soruları gerçekten çok zormuş.' },
          { id: 'E', text: 'Gelen misafirleri karşılayan kişi oymuş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-mış" eki "kırılmak" eylemine gelerek duyulan geçmiş zaman (haber) kipi görevinde kullanılmıştır, ek fiil değildir. Diğer seçeneklerde isimlere gelerek onları yüklem yapan ek fiildir.'
      },
      {
        id: 'q-fl-12-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ek eylem almış bir fiilimsi (eylemsi)dir?',
        options: [
          { id: 'A', text: 'Senin bu yaptığın düpedüz *haksızlıktır*.' },
          { id: 'B', text: 'Gelen misafirleri kapıda büyük bir nezaketle *karşıladı*.' },
          { id: 'C', text: 'Onun en büyük hayali dünyayı *gezmekti*.' },
          { id: 'D', text: 'Bütün gün sokaklarda dolaşmaktan iyice *yorulmuştu*.' },
          { id: 'E', text: 'O, bizim mahallenin en eski *esnafıydı*.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde isim-fiil olan "gezmek" sözcüğü ek fiilin hikayesini (-ti) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-12-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "olmak" eylemi yardımcı eylem görevinde değildir?',
        options: [
          { id: 'A', text: 'Bütün olanlardan sonra adeta kahroldu.' },
          { id: 'B', text: 'Evi temizlerken bana çok yardımcı oldu.' },
          { id: 'C', text: 'Sınavı kazanamayınca mahvoldu.' },
          { id: 'D', text: 'Dünkü davette herkes birbiriyle tanış oldu.' },
          { id: 'E', text: 'Meyveler bu yıl çok erken oldu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "oldu" kelimesi "olgunlaştı" anlamında asıl eylemdir. Diğer seçeneklerde isimle birleşerek yardımcı eylem görevi üstlenmiştir.'
      },
      {
        id: 'q-fl-12-30',
        difficulty: 'hard',
        questionText: 'Birleşik fiillerden "anlamca kaynaşmış" olanlar genellikle deyimleşmiş yapılardır. Aşağıdaki cümlelerin hangisinde deyimleşmiş birleşik fiil yoktur?',
        options: [
          { id: 'A', text: 'Olanları duyunca herkes küplere bindi.' },
          { id: 'B', text: 'Bu işin altından kalkamayacağını anlayınca ipe un serdi.' },
          { id: 'C', text: 'Son günlerde davranışlarıyla iyice göze battı.' },
          { id: 'D', text: 'O, yıllarca bu şirkette çalışıp dirsek çürüttü.' },
          { id: 'E', text: 'Bütün işleri tek başına sabahtan akşama kadar halletti.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "halletti" yardımcı eylemle kurulan birleşik fiildir. Diğerleri (küplere binmek, ipe un sermek, göze batmak, dirsek çürütmek) anlamca kaynaşmış (deyimleşmiş) birleşik fiillerdir.'
      }
    ]
  }
];
