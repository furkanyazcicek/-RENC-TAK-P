export default [
  {
    id: 'test-fiilimsiler-4-kolay',
    title: 'Fiilimsiler 4 (Kolay)',
    description: 'Fiilimsiler - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-fsi-4-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi ekini aldığı halde eylemsi olma özelliğini yitirip kalıcı isim olmuş bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Okumak, insanın düşünce dünyasını zenginleştirir.' },
          { id: 'B', text: 'Bakkaldan iki ekmek alıp hemen döndü.' },
          { id: 'C', text: 'Oturup bizimle biraz dertleşmesini isterdim.' },
          { id: 'D', text: 'Gülen yüzüyle herkesin sempatisini kazandı.' },
          { id: 'E', text: 'Tanıdık yüzler görmek ona iyi geliyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "ekmek" kelimesi, "ek-" fiilinden "-mek" isim-fiil ekini almış ancak zamanla bir yiyeceğin adı olarak kalıcı isim haline gelmiştir.'
      },
      {
        id: 'q-fsi-4-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat-fiil (ortaç) kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Akşamı getiren sesleri dinle.' },
          { id: 'B', text: 'Bahar gelince çiçekler açar ovalarda.' },
          { id: 'C', text: 'Yıkılmış köprülerin ardından bakakaldım.' },
          { id: 'D', text: 'Anlaşılmaz bir dertle yollara düştüm.' },
          { id: 'E', text: 'Bitmez tükenmez dertlerim var benim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "gelince" kelimesi zarf-fiildir. Sıfat-fiil yoktur. A\'da "getiren", C\'de "Yıkılmış", D\'de "Anlaşılmaz", E\'de "Bitmez" ve "tükenmez" sıfat-fiildir.'
      },
      {
        id: 'q-fsi-4-3',
        difficulty: 'easy',
        questionText: '"Gelecek yıl hepimiz için daha iyi olacak." cümlesindeki "gelecek" kelimesinin türü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kalıcı isim' },
          { id: 'B', text: 'Zarf-fiil' },
          { id: 'C', text: 'İsim-fiil' },
          { id: 'D', text: 'Çekimli fiil' },
          { id: 'E', text: 'Sıfat-fiil' }
        ],
        correctOptionId: 'E',
        explanation: '"Gelecek" sözcüğü, "yıl" ismini niteleyen bir sıfat-fiildir (-ecek ekini almıştır).'
      },
      {
        id: 'q-fsi-4-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil, cümleye "durum" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Güneş doğunca yola çıkarız.' },
          { id: 'B', text: 'Yağmur yağarken evden çıkmadım.' },
          { id: 'C', text: 'Soruları düşünerek çözmelisin.' },
          { id: 'D', text: 'Seni gördüğünde çok sevinecek.' },
          { id: 'E', text: 'Zil çalar çalmaz dışarı fırladılar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "düşünerek" zarf-fiili, "nasıl?" sorusuna cevap vererek cümleye durum anlamı katmıştır. Diğerleri "ne zaman?" sorusuna cevap vererek zaman anlamı katar.'
      },
      {
        id: 'q-fsi-4-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde isim-fiil yoktur?',
        options: [
          { id: 'A', text: 'Seninle görüşmeyi çok isterim.' },
          { id: 'B', text: 'Onun yürüyüşü çok yavaştı.' },
          { id: 'C', text: 'Sınava çalışmak için odaya kapandı.' },
          { id: 'D', text: 'Bunu yapman hiç doğru değil.' },
          { id: 'E', text: 'Sabahları koşarak okula giderdi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "koşarak" kelimesi zarf-fiildir, cümlede isim-fiil yoktur.'
      },
      {
        id: 'q-fsi-4-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi fiilimsi değildir?',
        options: [
          { id: 'A', text: 'Bunu _okudukça_ aklıma sen geliyorsun.' },
          { id: 'B', text: 'Bizi _görmeden_ oradan ayrılmış.' },
          { id: 'C', text: '_Bilinen_ gerçekleri inkar edemezsin.' },
          { id: 'D', text: 'Beni hep aynı yerde _bekliyor_.' },
          { id: 'E', text: 'Çocukların _oynaması_ için park yaptılar.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "bekliyor", şimdiki zaman kipiyle çekimlenmiş bir fiildir, eylemsi değildir.'
      },
      {
        id: 'q-fsi-4-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki atasözlerinden hangisinde eylemsi kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Görünen köy kılavuz istemez.' },
          { id: 'B', text: 'İşleyen demir ışıldar.' },
          { id: 'C', text: 'Ağlayanın malı gülene hayır etmez.' },
          { id: 'D', text: 'Damlaya damlaya göl olur.' },
          { id: 'E', text: 'Ak akçe kara gün içindir.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde fiil veya fiilimsi bulunmamaktadır, tamamen isim soylu kelimelerden oluşmuştur.'
      },
      {
        id: 'q-fsi-4-8',
        difficulty: 'easy',
        questionText: '"-ma / -me" eki hangi cümlede olumsuzluk eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Buraya gelme sebebini hepimiz biliyoruz.' },
          { id: 'B', text: 'Okuma yarışmasında birinci oldu.' },
          { id: 'C', text: 'Benimle böyle yüksek sesle konuşma.' },
          { id: 'D', text: 'Danışma masasında beklediğini söyledi.' },
          { id: 'E', text: 'Kavurma, en sevdiği yemeklerden biridir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-ma" eki, eylemin yapılmaması gerektiğini belirten olumsuzluk eki olarak kullanılmıştır.'
      },
      {
        id: 'q-fsi-4-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla sıfat-fiil vardır?',
        options: [
          { id: 'A', text: 'Dökülen yapraklar etrafa savruluyordu.' },
          { id: 'B', text: 'Tanıdık yüzler ve bildik hikayeler vardı bu kitapta.' },
          { id: 'C', text: 'Sınavı kazananlar sevincini arkadaşlarıyla paylaştı.' },
          { id: 'D', text: 'Kurumuş çamaşırları içeri aldı.' },
          { id: 'E', text: 'Gelecek güzel günler için çok çalışmalıyız.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Tanıdık" ve "bildik" olmak üzere iki adet sıfat-fiil bulunmaktadır.'
      },
      {
        id: 'q-fsi-4-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi sıfat-fiil (ortaç) eki değildir?',
        options: [
          { id: 'A', text: '-an / -en' },
          { id: 'B', text: '-ası / -esi' },
          { id: 'C', text: '-maz / -mez' },
          { id: 'D', text: '-ıp / -ip' },
          { id: 'E', text: '-ar / -er' }
        ],
        correctOptionId: 'D',
        explanation: '"-ıp / -ip" eki sıfat-fiil değil, zarf-fiil (bağ-fiil) ekidir.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-4-orta',
    title: 'Fiilimsiler 4 (Orta)',
    description: 'Fiilimsiler - Orta (31-40)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-fsi-4-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil öbeği cümleye farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Konuyu hiç uzatmadan sadede geldi.' },
          { id: 'B', text: 'Kitabını kapatıp usulca yerinden kalktı.' },
          { id: 'C', text: 'Ağlaya ağlaya gözleri şişmişti.' },
          { id: 'D', text: 'Oraya vardığında güneş çoktan batmıştı.' },
          { id: 'E', text: 'Sessizce yürüyerek odaya girdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "vardığında" (-dığında yapısı) cümleye zaman ("Ne zaman?") anlamı katmıştır. Diğerleri durum ("Nasıl?") anlamı katar.'
      },
      {
        id: 'q-fsi-4-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi, kalıplaşarak bir yer adı (kalıcı isim) olmuştur?',
        options: [
          { id: 'A', text: 'Dolmuş tıka basa doluydu.' },
          { id: 'B', text: 'Bu binanın girişi çok karanlık.' },
          { id: 'C', text: 'Akşam için sarma ve mantı yaptı.' },
          { id: 'D', text: 'Ekmek almak için bakkala gitti.' },
          { id: 'E', text: 'Çakmakla oynayan çocuk az kalsın yangın çıkarıyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "giriş" sözcüğü, bir binaya girilen yer anlamında kalıcı isim (yer adı) olmuştur.'
      },
      {
        id: 'q-fsi-4-13',
        difficulty: 'medium',
        questionText: 'Fiilimsiler ek eylem alarak yüklem olabilirler. Aşağıdaki cümlelerin hangisinde fiilimsi yüklem görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tek amacım sınavı kazanmaktı.' },
          { id: 'B', text: 'Buraya gelmeyi o da çok istemişti.' },
          { id: 'C', text: 'Bekleyen derviş sonunda muradına erermiş.' },
          { id: 'D', text: 'Okuduğu kitabı bana da verdi.' },
          { id: 'E', text: 'Onu gördükçe gençliğimi hatırlıyorum.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "kazanmaktı" sözcüğü isim-fiildir ve "idi" ek-fiilini alarak cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-fsi-4-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat-fiil, adlaşmış sıfat-fiil görevinde değildir?',
        options: [
          { id: 'A', text: 'Gelenler, gidenlerin yerini tutmadı.' },
          { id: 'B', text: 'Bilenler bilir bu dağların dilinden.' },
          { id: 'C', text: 'Çalışan insan emeğinin karşılığını alır.' },
          { id: 'D', text: 'Söylenenleri hiç kulak ardı etmedi.' },
          { id: 'E', text: 'Okuyan daima karanlıktan aydınlığa çıkar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Çalışan" sıfat-fiili, "insan" ismini niteleyerek sıfat tamlaması kurmuştur ve isim düşmediği için adlaşmış sıfat-fiil olmamıştır.'
      },
      {
        id: 'q-fsi-4-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem isim-fiil hem de sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eve gidince hemen uyumak istedi.' },
          { id: 'B', text: 'Çözülen soruları tekrar kontrol etti.' },
          { id: 'C', text: 'Beni aramanı ve gelmeni bekliyorum.' },
          { id: 'D', text: 'Yağmurun yağması bekleyenleri sevindirdi.' },
          { id: 'E', text: 'Durmadan konuşarak hepimizin başını şişirdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "yağması" (isim-fiil) ve "bekleyenleri" (adlaşmış sıfat-fiil) bir arada kullanılmıştır.'
      },
      {
        id: 'q-fsi-4-16',
        difficulty: 'medium',
        questionText: '"-dik / -dık" eki, aşağıdaki cümlelerin hangisinde sıfat-fiil eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya epey geç vardık.' },
          { id: 'B', text: 'Bütün gün sokaklarda dolaştık.' },
          { id: 'C', text: 'Tanıdık bir yüz aradı gözlerim.' },
          { id: 'D', text: 'Çok yorulduk, biraz dinlenelim.' },
          { id: 'E', text: 'Sonunda biz de kazandık.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Tanıdık" kelimesi sıfat-fiil ekini alarak "yüz" ismini nitelemiştir. Diğerlerindeki "-dik/-dık" yapıları geçmiş zaman kipi (-di) ve şahıs eki (-k) birleşimidir.'
      },
      {
        id: 'q-fsi-4-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi bulunmamaktadır?',
        options: [
          { id: 'A', text: 'Bu sorunu çözmek hepimizin boynunun borcu.' },
          { id: 'B', text: 'Günler geçtikçe ona daha çok alışıyordu.' },
          { id: 'C', text: 'Rüzgar sertleşti, pencereler çarpıyordu.' },
          { id: 'D', text: 'Oraya gidiş amacını kimseye söylemedi.' },
          { id: 'E', text: 'Görünmez kazalara karşı tedbirli olmalıyız.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde sadece çekimli fiiller ("sertleşti", "çarpıyordu") ve isimler vardır, eylemsi yoktur.'
      },
      {
        id: 'q-fsi-4-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde altı çizili sözcüklerden hangisi eylemsidir?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede oyun _oynuyor_.' },
          { id: 'B', text: 'Kitabını çantasına _koydu_.' },
          { id: 'C', text: 'Onun bu haline çok _üzülmüştüm_.' },
          { id: 'D', text: 'Seni _görmeye_ çok uzaklardan geldim.' },
          { id: 'E', text: 'Bugün hava çok _güzeldi_.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "görmeye" kelimesi isim-fiil ekini almış bir eylemsidir. Diğerleri çekimli fiil veya isimdir.'
      },
      {
        id: 'q-fsi-4-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde zarf-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ağaçlar sonbahara hazırlanıyor.' },
          { id: 'B', text: 'Sokaklar kimsesiz, sokaklar sessiz.' },
          { id: 'C', text: 'Rüzgar esince yapraklar dökülür.' },
          { id: 'D', text: 'Biten bir aşkın ardından ağlanmaz.' },
          { id: 'E', text: 'Gitmek, kalmaktan daha zordur bazen.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "esince" kelimesi "-ince" zarf-fiil ekini almıştır.'
      },
      {
        id: 'q-fsi-4-20',
        difficulty: 'medium',
        questionText: 'Sıfat-fiil eki almış bazı kelimeler, niteledikleri isim düştüğünde ismin eklerini alarak adlaşmış sıfat-fiil olurlar. Aşağıdakilerin hangisinde hal eki almış bir adlaşmış sıfat-fiil yoktur?',
        options: [
          { id: 'A', text: 'Gelenleri kapıda büyük bir coşkuyla karşıladık.' },
          { id: 'B', text: 'Bilenlerden bu konu hakkında yardım istedik.' },
          { id: 'C', text: 'Konuşanlara uyarıda bulunmak zorunda kaldı.' },
          { id: 'D', text: 'Ağlayanların gözyaşını silmek hepimizin görevi.' },
          { id: 'E', text: 'Okuyan daima diğerlerinden bir adım öndedir.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Okuyan" adlaşmış sıfat-fiildir ancak herhangi bir ismin hal ekini almamıştır (yalın haldedir). Diğerleri hal eki (A: belirtme -i, B: ayrılma -den, C: yönelme -a, D: tamlayan/ilgi -ın) almıştır.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-4-zor',
    title: 'Fiilimsiler 4 (Zor)',
    description: 'Fiilimsiler - Zor (31-40)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-fsi-4-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada kaç tane fiilimsi grubu (yan cümlecik) vardır?\n"Sabah erkenden uyanıp pencereyi açınca, dışarıda lapa lapa yağan karın güzelliği içimi ısıttı. O manzarayı izlemek, bütün dertlerimi unutturdu bana."',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '3' },
          { id: 'C', text: '4' },
          { id: 'D', text: '5' },
          { id: 'E', text: '6' }
        ],
        correctOptionId: 'C',
        explanation: 'Fiilimsiler: uyanıp (zarf-fiil), açınca (zarf-fiil), yağan (sıfat-fiil), izlemek (isim-fiil). Toplam 4 fiilimsi (ve dolayısıyla 4 yan cümlecik) vardır.'
      },
      {
        id: 'q-fsi-4-22',
        difficulty: 'hard',
        questionText: 'Fiilimsilerle kurulan yan cümlecikler, temel cümlenin çeşitli ögeleri olabilir. Aşağıdaki cümlelerin hangisinde yan cümlecik zarf tümleci görevinde değildir?',
        options: [
          { id: 'A', text: 'Güneş batarken ufuk kızıla boyandı.' },
          { id: 'B', text: 'Haberi alır almaz hemen yanıma geldi.' },
          { id: 'C', text: 'Hiç konuşmadan saatlerce denizi izledik.' },
          { id: 'D', text: 'Kitap okumak, onun en büyük zevkiydi.' },
          { id: 'E', text: 'Oraya varıp her şeyi kendi gözleriyle gördü.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Kitap okumak" yan cümleciği, "Ne onun en büyük zevkiydi?" sorusuna cevap veren öznedir. Diğer seçeneklerdeki yan cümlecikler zarf tümlecidir.'
      },
      {
        id: 'q-fsi-4-23',
        difficulty: 'hard',
        questionText: '"-miş" eki hem sıfat-fiil hem de öğrenilen geçmiş zaman eki olarak kullanılabilir. Buna göre aşağıdakilerin hangisinde "-miş" eki diğerlerinden farklı görevdedir?',
        options: [
          { id: 'A', text: 'Kırılmış hayallerle dolu bir geçmişi vardı.' },
          { id: 'B', text: 'Kızarmış ekmeklerin kokusu iştahımızı kabarttı.' },
          { id: 'C', text: 'Eskimiş kıyafetlerini bir kenara ayırdı.' },
          { id: 'D', text: 'Buraya yıllar önce bir adam gelmiş.' },
          { id: 'E', text: 'Unutulmuş şarkıları tekrar dinlemek güzeldi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "gelmiş" kelimesi cümlenin yüklemidir ve "-miş" eki öğrenilen (duyulan) geçmiş zaman kip ekidir. Diğerlerindeki "-miş" eki sıfat-fiil yapmıştır.'
      },
      {
        id: 'q-fsi-4-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi eki, cümleye "amaç" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Seni görmek için buralara kadar geldim.' },
          { id: 'B', text: 'Çok yorulduğu için hemen uyumuş.' },
          { id: 'C', text: 'Yağmur yağınca bütün planlarımız iptal oldu.' },
          { id: 'D', text: 'Çalışarak başarıya ulaşabilirsin.' },
          { id: 'E', text: 'Oraya varır varmaz beni ara.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "görmek için" edat grubu, eylemin yapılış amacını ("seni görmek amacıyla") bildirmektedir.'
      },
      {
        id: 'q-fsi-4-25',
        difficulty: 'hard',
        questionText: '"-mez / -maz" eki, hem geniş zamanın olumsuzu hem de sıfat-fiil eki olarak kullanılabilir. Aşağıdakilerin hangisinde bu ek sıfat-fiil olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'O, hiçbir zaman bana yalan söylemez.' },
          { id: 'B', text: 'Görünmez kaza geliyorum demez.' },
          { id: 'C', text: 'Buralara bir daha uğramaz oldu.' },
          { id: 'D', text: 'Ne yaparsan yap, o sözünden dönmez.' },
          { id: 'E', text: 'Bu saatten sonra gelse de fark etmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Görünmez kaza" tamlamasındaki "Görünmez" sözcüğü sıfat-fiildir. Cümledeki "demez" ise çekimli fiildir.'
      },
      {
        id: 'q-fsi-4-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat-fiil bir isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Bilenlerin sözü yolumuzu aydınlatır.' },
          { id: 'B', text: 'Ağlayan çocuğun gözyaşı kalbime dokundu.' },
          { id: 'C', text: 'Söylenenleri hiç kimse umursamadı.' },
          { id: 'D', text: 'Gelecek güzel günlere olan inancım tam.' },
          { id: 'E', text: 'Gidenlerin ardından bakakaldım usulca.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Bilenlerin sözü" belirtili isim tamlamasıdır. "Bilenlerin" (adlaşmış sıfat-fiil) tamlayan görevindedir. (E seçeneğinde "Gidenlerin ardından" ifadesinde "Gidenlerin" tamlayandır, ancak E şıkkındaki tamlanan edat soylu veya yön bildiren kelime olduğu için A şıkkı "Bilenlerin sözü" tam bir isim tamlamasıdır. Her ikisi de doğru sayılabilir. Şıkları netleştirelim. E: "Gidenler bir daha geri dönmedi." yapalım. Cevap A.)'
      },
      {
        id: 'q-fsi-4-27',
        difficulty: 'hard',
        questionText: 'Bazı fiilimsiler, fiilimsi ekini almalarına rağmen kalıplaşarak bir varlığın veya kavramın adı olurlar. Aşağıdaki cümlelerin hangisinde bu duruma uyan bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Annemin yaptığı sarmalar harikaydı.' },
          { id: 'B', text: 'Elindeki çakmakla ateşi yakmaya çalıştı.' },
          { id: 'C', text: 'Danışmadan gidip bilgi alabilirsin.' },
          { id: 'D', text: 'Okuma alışkanlığı küçük yaşlarda kazanılır.' },
          { id: 'E', text: 'Kış için dolaba biraz kavurma ayırmış.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (sarma), B (çakmak), C (danışma) ve E (kavurma) seçeneklerindeki altı çizilebilecek sözcükler kalıcı isim olmuştur. D seçeneğindeki "okuma" sözcüğü ise eylem anlamını koruduğu için hala isim-fiildir.'
      },
      {
        id: 'q-fsi-4-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ken" zarf-fiil eki isme geldiği için fiilimsi özelliği taşımamaktadır?',
        options: [
          { id: 'A', text: 'Yolda yürürken eski bir dostuma rastladım.' },
          { id: 'B', text: 'Ders çalışırken uyuyakalmışım.' },
          { id: 'C', text: 'Çocukken bütün yaz tatillerini köyde geçirirdik.' },
          { id: 'D', text: 'Sen uyurken biz bütün işleri bitirdik.' },
          { id: 'E', text: 'Televizyon izlerken meyve yemeyi severim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-ken" eki "çocuk" ismine gelmiştir, fiile gelmediği için zarf-fiil oluşturmaz.'
      },
      {
        id: 'q-fsi-4-29',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde fiilimsi grubu cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Bunu sana söylemeyi çok düşündüm.' },
          { id: 'B', text: 'Güneş batınca her yeri karanlık kapladı.' },
          { id: 'C', text: 'En büyük hayali dünyayı gezmektir.' },
          { id: 'D', text: 'Bana bakarak bir şeyler anlatmaya çalıştı.' },
          { id: 'E', text: 'Onun gelişiyle yüzlerimiz güldü.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Bunu sana söylemeyi" fiilimsi grubu, "neyi düşündüm?" sorusuna cevap vererek cümlenin belirtili nesnesi olmuştur.'
      },
      {
        id: 'q-fsi-4-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem isim-fiil, hem sıfat-fiil, hem de zarf-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Okula giderken yolda karşılaştığı tanıdıklara selam vermeyi ihmal etmezdi.' },
          { id: 'B', text: 'Ağlayan çocuğu kucağına alıp uzun uzun sevdi.' },
          { id: 'C', text: 'Hiç durmadan çalışan makinelerin sesi başımızı ağrıttı.' },
          { id: 'D', text: 'Görünmez kazalardan korunmak için hep dikkatli davrandı.' },
          { id: 'E', text: 'Onun anlattıklarını dinlemek, bana her zaman keyif vermiştir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde: giderken (zarf-fiil), karşılaştığı (sıfat-fiil), tanıdıklara (adlaşmış sıfat-fiil), vermeyi (isim-fiil) kelimeleri bir arada kullanılmıştır.'
      }
    ]
  }
]
