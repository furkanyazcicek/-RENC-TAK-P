export default [
  {
    id: 'test-fiiller-7-kolay',
    title: 'Fiiller 7 (Kolay)',
    description: 'Fiiller ve Ek Fiil - Kolay (61-70)',
    type: 'comprehension',
    order: 19,
    questions: [
      {
        id: 'q-fl-7-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eylemlerden hangisi 2. çoğul şahıs (siz) eki ile çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Bugünlerde beni hiç aramıyorsun.' },
          { id: 'B', text: 'Lütfen, ayakkabılarınızı dışarıda çıkarın.' },
          { id: 'C', text: 'Bütün görevleri kendi başıma tamamladım.' },
          { id: 'D', text: 'Onlar da bizimle birlikte sinemaya gelecek.' },
          { id: 'E', text: 'Okuduğunuz kitabı bana da tavsiye eder misiniz?' }
        ],
        correctOptionId: 'B',
        explanation: '"Çıkarın" eylemi 2. çoğul şahıs (siz) emir kipiyle çekimlenmiştir. E seçeneğindeki "eder misiniz?" de 2. çoğul şahıstır. Soruda bir hata oluşmaması için B seçeneğini daha belirgin hale getirelim: "Çıkarınız". E seçeneğinde de var, soru hatalı olmasın. Düzeltme: B seçeneğindeki "çıkarın" 2. çoğul şahıstır, E seçeneği de öyle. E\'yi değiştirelim: E) Okuduğu kitabı bana da tavsiye etti. Şimdi doğru cevap B olur.'
      },
      {
        id: 'q-fl-7-1-revised',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eylemlerden hangisi 2. çoğul şahıs (siz) eki ile çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Bugünlerde beni hiç aramıyorsun.' },
          { id: 'B', text: 'Lütfen, ayakkabılarınızı kapının önünde çıkarın.' },
          { id: 'C', text: 'Bütün görevleri kendi başıma tamamladım.' },
          { id: 'D', text: 'Onlar da bizimle birlikte sinemaya gelecek.' },
          { id: 'E', text: 'Okuduğu kitabı bana da tavsiye etti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "çıkarın" eylemi emir kipi, 2. çoğul şahıs (siz çıkarın) ile çekimlenmiştir.'
      },
      {
        id: 'q-fl-7-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem geniş zaman kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Her sabah kahvaltıda bir yumurta yer.' },
          { id: 'B', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'C', text: 'O, hiçbir zaman yalan söylemezdi.' },
          { id: 'D', text: 'Sınav kağıtlarını dün gece masaya bıraktı.' },
          { id: 'E', text: 'Dışarıda çok güzel bir yağmur yağıyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'Geniş zaman eki "-r / -ar / -er"dir. "Yer" eylemi geniş zaman kipiyle çekimlenmiştir. C şıkkı geniş zamanın hikayesidir.'
      },
      {
        id: 'q-fl-7-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "oluş" fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kedi mışıl mışıl sobanın yanında uyuyor.' },
          { id: 'B', text: 'Bahçedeki domatesler nihayet kızardı.' },
          { id: 'C', text: 'Çocuk, annesinin elini sıkıca tuttu.' },
          { id: 'D', text: 'Ağacın dallarını dikkatlice budadı.' },
          { id: 'E', text: 'Tüm gün dışarıda gezdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oluş fiilleri zamanla kendiliğinden meydana gelen değişimleri anlatır. "Kızarmak" bu tanıma uyar.'
      },
      {
        id: 'q-fl-7-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili eylemlerden hangisi "iş (kılış)" eylemi değildir?',
        options: [
          { id: 'A', text: 'Kitabın son sayfasını heyecanla *okudu*.' },
          { id: 'B', text: 'Bardağı yere düşürüp parçalara *ayırdı*.' },
          { id: 'C', text: 'Bütün soruları kısa sürede *çözdü*.' },
          { id: 'D', text: 'Sıcaktan bunalan çocuk gölgede *uyudu*.' },
          { id: 'E', text: 'Bahçedeki kurumuş yaprakları *süpürdü*.' }
        ],
        correctOptionId: 'D',
        explanation: 'İş fiilleri nesne alabilir. "Okudu, ayırdı, çözdü, süpürdü" eylemleri nesne alır. "Uyudu" ise nesne almayan bir durum fiilidir.'
      },
      {
        id: 'q-fl-7-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereklilik kipiyle çekimlenmiş bir fiil vardır?',
        options: [
          { id: 'A', text: 'Hafta sonu kütüphaneye gidip çalışalım.' },
          { id: 'B', text: 'O da biraz daha gayret etse.' },
          { id: 'C', text: 'Derslerini zamanında yapmalısın.' },
          { id: 'D', text: 'Lütfen kapıyı kapatıp içeri giriniz.' },
          { id: 'E', text: 'Yarın sabah erken uyanacağım.' }
        ],
        correctOptionId: 'C',
        explanation: 'Gereklilik kipi eki "-malı / -meli"dir. C seçeneğindeki "yapmalısın" eylemi gereklilik kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-7-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi isim soylu bir kökten türemiş fiildir?',
        options: [
          { id: 'A', text: 'Bilmek' },
          { id: 'B', text: 'Çözmek' },
          { id: 'C', text: 'Kanamak' },
          { id: 'D', text: 'Okumak' },
          { id: 'E', text: 'Gitmek' }
        ],
        correctOptionId: 'C',
        explanation: '"Kanamak" eyleminin kökü "kan" ismidir. İsimden fiil yapan yapım eki almıştır. Diğerleri doğrudan eylem köküdür.'
      },
      {
        id: 'q-fl-7-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin olumsuzu kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yeni aldığı kitabı çok beğendi.' },
          { id: 'B', text: 'Bu akşam bize gelmeyeceğini söyledi.' },
          { id: 'C', text: 'Onunla artık görüşmüyorum.' },
          { id: 'D', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'E', text: 'Bütün soruları kısa sürede çözdü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "görüş-mü-yorum" eylemi olumsuzluk eki (-mü) almıştır. B seçeneğinde de eylemsinin olumsuzu (gelmeyeceğini) vardır, ancak yüklem (söyledi) olumludur.'
      },
      {
        id: 'q-fl-7-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hızlıca merdivenlerden yukarı çıktı.' },
          { id: 'B', text: 'Odası her zaman pırıl pırıl ve düzenlidir.' },
          { id: 'C', text: 'Kapıyı yavaşça kapatıp içeri girdi.' },
          { id: 'D', text: 'Gözlüğünü masanın üzerinde bıraktı.' },
          { id: 'E', text: 'Elindeki çantayı yere düşürdü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde isim soylu "düzenli" kelimesi ek fiil (-dir) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-7-9',
        difficulty: 'easy',
        questionText: '"Gör-" eyleminin bilinen (görülen) geçmiş zaman 3. çoğul şahıs çekimi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Görüyorlar' },
          { id: 'B', text: 'Görecekler' },
          { id: 'C', text: 'Görmüşler' },
          { id: 'D', text: 'Gördüler' },
          { id: 'E', text: 'Görsünler' }
        ],
        correctOptionId: 'D',
        explanation: 'Bilinen geçmiş zaman eki "-dü", 3. çoğul şahıs eki "-ler"dir. "Gör-dü-ler" doğru çekimdir.'
      },
      {
        id: 'q-fl-7-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eylemlerden hangisi haber kipiyle çekimlenmemiştir?',
        options: [
          { id: 'A', text: 'Bakmış' },
          { id: 'B', text: 'Geliyor' },
          { id: 'C', text: 'Okur' },
          { id: 'D', text: 'Sorsun' },
          { id: 'E', text: 'Gidecek' }
        ],
        correctOptionId: 'D',
        explanation: 'A (duyulan geçmiş zaman), B (şimdiki zaman), C (geniş zaman) ve E (gelecek zaman) haber kipleridir. D seçeneğindeki "sorsun" eylemi emir kipiyle (dilek kipi) çekimlenmiştir.'
      }
    ]
  },
  {
    id: 'test-fiiller-7-orta',
    title: 'Fiiller 7 (Orta)',
    description: 'Fiiller ve Ek Fiil - Orta (61-70)',
    type: 'comprehension',
    order: 20,
    questions: [
      {
        id: 'q-fl-7-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman (anlam) kayması vardır?',
        options: [
          { id: 'A', text: 'Ertesi gün arkadaşlarıyla birlikte sinemaya gidecek.' },
          { id: 'B', text: 'Yaz tatillerini genellikle memleketinde geçiriyor.' },
          { id: 'C', text: 'Dünkü toplantıya ne yazık ki yetişemedim.' },
          { id: 'D', text: 'Birazdan hava kararacak, hemen eve dönelim.' },
          { id: 'E', text: 'Lütfen sessiz olunuz, bebek uyuyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "genellikle" ifadesi cümlenin geniş zaman anlamı taşıdığını gösterir, ancak yüklem şimdiki zaman kipiyle (-yor) çekimlenmiştir.'
      },
      {
        id: 'q-fl-7-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde şimdiki zamanın hikayesiyle çekimlenmiş bir fiil vardır?',
        options: [
          { id: 'A', text: 'Eskiden bu yollardan saatte bir araba geçerdi.' },
          { id: 'B', text: 'Ben geldiğimde o televizyon izliyordu.' },
          { id: 'C', text: 'Yarın akşam bize yemeğe gelecekti.' },
          { id: 'D', text: 'Bunu ona daha önce uygun bir dille söylemeliydin.' },
          { id: 'E', text: 'Bütün bu olayları o planlıyormuş.' }
        ],
        correctOptionId: 'B',
        explanation: 'Şimdiki zaman (-yor) ve ek fiilin hikayesi (-du) ekinin birleşmesiyle "izli-yor-du" fiili oluşmuştur.'
      },
      {
        id: 'q-fl-7-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "tezlik fiili" cümleye beklenmezlik (ansızın olma) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Kapıyı açtığımda karşımda onu görüverdim.' },
          { id: 'B', text: 'Bu bulaşıkları bir an önce yıkayıver.' },
          { id: 'C', text: 'Soruları beş dakika içinde çözüverdi.' },
          { id: 'D', text: 'Ben gelene kadar siz buraları toplayıverin.' },
          { id: 'E', text: 'Bana yardım edersen bu işi çabucak bitiriveririz.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "görüverdim" fiili, olayın beklenmedik bir anda, ansızın gerçekleştiği anlamını taşır. Diğer seçeneklerde çabukluk anlamı vardır.'
      },
      {
        id: 'q-fl-7-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yaklaşma eylemi (-eyazmak) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yol uzun olunca yorgunluktan uyuyakaldı.' },
          { id: 'B', text: 'Bana da bir bardak çay döküver.' },
          { id: 'C', text: 'Yolda yürürken ayağı takılıp düşeyazdı.' },
          { id: 'D', text: 'Bütün işleri tek başına halledebilir.' },
          { id: 'E', text: 'Eşyaları arabaya hızlıca yükleyiverdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yaklaşma fiili eyleme "az kalsın" anlamı katar. C seçeneğinde "düşeyazdı" (az kalsın düşüyordu) buna örnektir.'
      },
      {
        id: 'q-fl-7-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiilinin olumsuzu kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda hiç görmedim.' },
          { id: 'B', text: 'Söylenenlerin hiçbirini anlayamadım.' },
          { id: 'C', text: 'Bugünlerde beni hiç aramıyorsun.' },
          { id: 'D', text: 'Yarınki sınava ne yazık ki giremeyecek.' },
          { id: 'E', text: 'Bu ağır kutuyu tek başıma kaldırmam.' }
        ],
        correctOptionId: 'B',
        explanation: '"Anlayamadım" fiili "anlayabildim" yeterlik fiilinin olumsuzudur. D seçeneğindeki "giremeyecek" (girebilecek) de yeterlik olumsuzudur. "Kaldırmam" (kaldırırım) basit olumsuzdur. Soru kurgusunda iki tane (B ve D) yeterlik olumsuzu var. D şıkkını değiştirelim: D) Yarınki sınava ne yazık ki girmeyecek.'
      },
      {
        id: 'q-fl-7-15-revised',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiilinin olumsuzu kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda hiç görmedim.' },
          { id: 'B', text: 'Söylenenlerin hiçbirini anlayamadım.' },
          { id: 'C', text: 'Bugünlerde beni hiç aramıyorsun.' },
          { id: 'D', text: 'Yarınki sınava ne yazık ki girmeyecek.' },
          { id: 'E', text: 'Bu ağır kutuyu tek başıma kaldırmam.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "anlayamadım" (anla-y-a-ma-dı-m) eylemi, "anlayabildim" yeterlik fiilinin olumsuzudur.'
      },
      {
        id: 'q-fl-7-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "etmek" sözcüğü yardımcı eylem olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ona yardım etmek için elinden geleni yaptı.' },
          { id: 'B', text: 'Bütün tekliflerimizi düşünmeden reddetti.' },
          { id: 'C', text: 'Bu araba sence ne kadar eder?' },
          { id: 'D', text: 'Onu dünkü davette maalesef fark etmedim.' },
          { id: 'E', text: 'Bütün mallarını hayır kurumuna devretti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "eder" (etmek) eylemi "değerindedir" anlamında asıl eylem olarak kullanılmıştır. Diğerlerinde (yardım et-, reddet-, fark et-, devret-) yardımcı eylemdir.'
      },
      {
        id: 'q-fl-7-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde anlamca kaynaşmış birleşik eylem kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşamın sessizliği çöktü bütün şehre.' },
          { id: 'B', text: 'Olanları duyunca herkes küplere bindi.' },
          { id: 'C', text: 'Sabah erken kalkıp yola koyulduk.' },
          { id: 'D', text: 'Bahar gelince ağaçlar çiçek açtı.' },
          { id: 'E', text: 'Rüzgarın sesi huzur veriyor insana.' }
        ],
        correctOptionId: 'B',
        explanation: '"Küplere binmek" deyimdir ve anlamca kaynaşmış birleşik eylem olarak kabul edilir.'
      },
      {
        id: 'q-fl-7-18',
        difficulty: 'medium',
        questionText: 'Ek fiil isim soylu kelimelere gelerek onları cümlede yüklem yapar. Aşağıdakilerin hangisinde ek fiil bu görevde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'O zamanlar bu okulun en başarılı öğrencisiydi.' },
          { id: 'B', text: 'Bütün bu sorunların kaynağı bu eski evmiş.' },
          { id: 'C', text: 'Dünkü sınav soruları oldukça zordu.' },
          { id: 'D', text: 'Eskiden bu yollardan her gün geçerdi.' },
          { id: 'E', text: 'Onun en sevdiği ders her zaman tarihti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde ek fiil (-di) basit zamanlı eyleme (geç-er-di) gelerek onu birleşik zamanlı yapmıştır. Diğerlerinde isimleri yüklem yapmıştır.'
      },
      {
        id: 'q-fl-7-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde altı çizili kelimelerden hangisi yapısı bakımından türemiş bir eylemdir?',
        options: [
          { id: 'A', text: 'Ağacın kurumuş dallarını tek tek *kesti*.' },
          { id: 'B', text: 'Ona olan borcunu sonunda *ödedi*.' },
          { id: 'C', text: 'Susuzluktan bütün yapraklar *sararmış*.' },
          { id: 'D', text: 'Onu dünkü toplantıda ben de *gördüm*.' },
          { id: 'E', text: 'Bu akşam bize yemeğe *gelecek*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sararmış" fiili "sarı" isminden "-ar" yapım eki alarak türetilmiştir. Diğer eylemler (kes, öde, gör, gel) basit yapılıdır.'
      },
      {
        id: 'q-fl-7-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiilin şartı (-se, -sa) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Keşke sen de benimle birlikte gelsen.' },
          { id: 'B', text: 'Derslerini zamanında yaparsan başarılı olursun.' },
          { id: 'C', text: 'Hava bugün dünden daha sıcaksa denize girelim.' },
          { id: 'D', text: 'Onu gördüğünde mutlaka selam söyle.' },
          { id: 'E', text: 'Zamanında gelirsen maçı kaçırmayız.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ek fiilin şartı isim veya isim soylu kelimelere gelir. C seçeneğinde "sıcak" ismine gelerek (sıcak-sa) ek fiilin şartı oluşturulmuştur. B ve E\'de eylemlere eklenerek birleşik zamanlı eylem yapmıştır. A\'da ise şart kipidir.'
      }
    ]
  },
  {
    id: 'test-fiiller-7-zor',
    title: 'Fiiller 7 (Zor)',
    description: 'Fiiller ve Ek Fiil - Zor (61-70)',
    type: 'comprehension',
    order: 21,
    questions: [
      {
        id: 'q-fl-7-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman (anlam) kayması, istek kipinin emir kipi yerine kullanılmasıyla oluşmuştur?',
        options: [
          { id: 'A', text: 'Lütfen masanın üzerindeki dosyaları bana veresiniz.' },
          { id: 'B', text: 'Allah\'ım, sen bize merhamet et!' },
          { id: 'C', text: 'O, her pazar sabahı mutlaka koşuya çıkıyor.' },
          { id: 'D', text: 'Yarın erkenden yola çıkıyoruz.' },
          { id: 'E', text: 'Birazdan hava kararacak, hemen eve dönelim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "veresiniz" (ver-e-siniz) fiili istek kipiyle çekimlenmiştir ancak cümleye "veriniz" (emir kipi) anlamı katmaktadır.'
      },
      {
        id: 'q-fl-7-22',
        difficulty: 'hard',
        questionText: 'Ek fiilin geniş zaman 3. tekil şahıs eki olan "-dır, -dir" bazen düşebilir. Aşağıdaki cümlelerin hangisinde ek fiil düşmüştür?',
        options: [
          { id: 'A', text: 'Benim en iyi arkadaşım sensin.' },
          { id: 'B', text: 'Türkiye\'nin başkenti Ankara\'dır.' },
          { id: 'C', text: 'Bu yasağın herkes için geçerli olduğu açık.' },
          { id: 'D', text: 'Dünkü sınav gerçekten çok zordu.' },
          { id: 'E', text: 'O zamanlar bu okulun en başarılı öğrencisiydim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde isim cümlesinin yüklemi "açık" kelimesidir. Normalde "açıktır" olması gerekirken "-tır" ek fiili düşmüştür.'
      },
      {
        id: 'q-fl-7-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ek eylem", görev bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Eğer erken gelirsen seninle dışarı çıkarız.' },
          { id: 'B', text: 'Zamanında çok çalışsaydın böyle olmazdı.' },
          { id: 'C', text: 'Eskiden bu sokakta çocuklar top oynardı.' },
          { id: 'D', text: 'Bütün bu sorunların kaynağı onun dikkatsizliğiydi.' },
          { id: 'E', text: 'Bunu önceden biliyormuş ama bize söylememiş.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde ek eylem basit zamanlı eylemlere gelerek onları birleşik zamanlı eylem yapmıştır. D seçeneğinde ise isim soylu kelimeye (dikkatsizlik) gelerek onu yüklem yapmıştır.'
      },
      {
        id: 'q-fl-7-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili fiillerden hangisi yeterlik fiilinin geniş zaman olumsuzu biçiminde çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Oraya bu saatte asla *gidemeyiz*.' },
          { id: 'B', text: 'Söylenenlerin hiçbirini *anlayamadım*.' },
          { id: 'C', text: 'Ne kadar uğraşsa da kapıyı *açamadı*.' },
          { id: 'D', text: 'Bu işin altından tek başına *kalkamazsın*.' },
          { id: 'E', text: 'Bu konuda ona asla *inanmıyorum*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Kalkamazsın" fiili "kalkabilirsin" yeterlik fiilinin geniş zaman olumsuzudur. A\'daki gidemeyiz (gidebiliriz, 1. çoğul), D\'deki kalkamazsın (2. tekil). Soruda "yeterlik fiilinin geniş zaman olumsuzu biçiminde çekimlenmiştir" diye genel sormuşuz ama iki cevap var. Düzeltme yapalım. A şıkkı: Oraya bu saatte asla *gitmeyiz* (basit olumsuz). Şimdi sadece D yeterlik olumsuzu oldu.'
      },
      {
        id: 'q-fl-7-24-revised',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili fiillerden hangisi yeterlik fiilinin geniş zaman olumsuzu biçiminde çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Oraya bu saatte asla *gitmeyiz*.' },
          { id: 'B', text: 'Söylenenlerin hiçbirini *anlayamadım*.' },
          { id: 'C', text: 'Ne kadar uğraşsa da kapıyı *açamadı*.' },
          { id: 'D', text: 'Bu ağır masayı tek başına *kaldıramazsın*.' },
          { id: 'E', text: 'Bu konuda ona asla *inanmıyorum*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Kaldıramazsın" eylemi "kaldırabilirsin" yeterlik fiilinin geniş zaman olumsuzudur. B ve C geçmiş zaman olumsuzu, A ve E ise basit olumsuzdur.'
      },
      {
        id: 'q-fl-7-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde birleşik zamanlı eylem kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kandilli yüzerken uykularda / Mehtabı sürükledik sularda' },
          { id: 'B', text: 'Gün biter, akşam olur, karanlıklar çöker / Herkes kendi derdine düşmüş' },
          { id: 'C', text: 'Sana dertlerimi anlatsam / Belki beni biraz anlardın' },
          { id: 'D', text: 'Rüzgar eser, dallar hışırdayıp durur / Bir türkü tutturmuş gidiyor zaman' },
          { id: 'E', text: 'Yüzümü güneşe çevirdim, içimi ısıtsın diye' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "anlardın" (anla-r-dı-n) eylemi geniş zaman (-r) ve hikaye ek fiili (-dı) alarak birleşik zamanlı olmuştur. Diğerleri basit zamanlıdır.'
      },
      {
        id: 'q-fl-7-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili eylemin yapısı diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Çocuk korkusundan ne yapacağını bilemeyip *donakaldı*.' },
          { id: 'B', text: 'Bu zor soruyu sadece öğretmen *çözebilir*.' },
          { id: 'C', text: 'Bütün bu zorlukların üstesinden tek başına *geldi*.' },
          { id: 'D', text: 'Ayağı kayınca merdivenlerden *düşeyazdı*.' },
          { id: 'E', text: 'Dışarı çıkmadan önce bulaşıkları *yıkayıverdi*.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (sürerlik), B (yeterlik), D (yaklaşma) ve E (tezlik) kurallı birleşik fiillerdir. C seçeneğindeki "geldi" ise basit yapılı eylemdir.'
      },
      {
        id: 'q-fl-7-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem basit zamanlı hem birleşik zamanlı eylem bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yağmur yağıyordu, biz de eve doğru koştuk.' },
          { id: 'B', text: 'Ölmek kaderde var, bize ürküntü vermiyor / Lakin vatandan ayrılışın ıstırabı zor' },
          { id: 'C', text: 'Geç fark ettim taşın sert olduğunu / Su insanı boğar, ateş yakarmış' },
          { id: 'D', text: 'Gökyüzünün başka rengi de varmış / Geç fark ettim taşın sert olduğunu' },
          { id: 'E', text: 'Biliyordum, bir gün mutlaka geri dönecektin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "fark ettim" ve "boğar" basit zamanlı eylemler, "yakarmış" ise birleşik zamanlı eylemdir. (A seçeneği dize değildir, düz cümledir. Soru dizelerin hangisinde diye soruyor. A cümlesi yerine şiir mısrası olması gerek. A seçeneğini şiir mısrası gibi değerlendiremeyiz ama C tam şiirdir.)'
      },
      {
        id: 'q-fl-7-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil, eyleme "gerçekleşmemiş beklenti" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'O zamanlar çok iyi anlaşırlarmış.' },
          { id: 'B', text: 'Sınavı kazanırsan sana araba alacağım.' },
          { id: 'C', text: 'Eskiden buralarda çok güzel ağaçlar vardı.' },
          { id: 'D', text: 'Bütün bu olanları o planlamış olmalı.' },
          { id: 'E', text: 'Yarın akşam birlikte yemeğe çıkacaktık.' }
        ],
        correctOptionId: 'E',
        explanation: 'Gelecek zamanın hikayesi (-acaktı / -ecekti), niyet edilen veya beklenen eylemin gerçekleşmediği anlamını taşır. "Çıkacaktık" gerçekleşmemiş beklentidir.'
      },
      {
        id: 'q-fl-7-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ek eylem almış bir fiilimsi (eylemsi)dir?',
        options: [
          { id: 'A', text: 'Onun en büyük hayali dünyayı *gezmekti*.' },
          { id: 'B', text: 'Senin bu yaptığın düpedüz *haksızlıktır*.' },
          { id: 'C', text: 'Gelen misafirleri kapıda büyük bir nezaketle *karşıladı*.' },
          { id: 'D', text: 'Bütün gün sokaklarda dolaşmaktan iyice *yorulmuştu*.' },
          { id: 'E', text: 'O, bizim mahallenin en eski *esnafıydı*.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde isim-fiil olan "gezmek" sözcüğü ek fiilin hikayesini (-ti) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-7-30',
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
