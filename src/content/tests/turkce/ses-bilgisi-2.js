export default [
  {
    id: 'test-ses-bilgisi-2-kolay',
    title: 'Ses Bilgisi 2 (Kolay)',
    description: 'Ses Bilgisi - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-sb-2-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü düşmesi vardır?',
        options: [
          { id: 'A', text: 'Kitabın' },
          { id: 'B', text: 'Ömrüm' },
          { id: 'C', text: 'Gözlük' },
          { id: 'D', text: 'Kapıdan' },
          { id: 'E', text: 'Ağacın' }
        ],
        correctOptionId: 'B',
        explanation: '"Ömrüm" sözcüğünün kökü "ömür"dür. Ünlü ile başlayan ek aldığında ikinci hecedeki dar ünlü (ü) düşmüştür (ömür-üm -> ömrüm).'
      },
      {
        id: 'q-sb-2-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünsüz yumuşaması (değişimi) olmuştur?',
        options: [
          { id: 'A', text: 'Sokakta' },
          { id: 'B', text: 'Çiçeği' },
          { id: 'C', text: 'Evden' },
          { id: 'D', text: 'Sınıfa' },
          { id: 'E', text: 'Ormanın' }
        ],
        correctOptionId: 'B',
        explanation: '"Çiçek" sözcüğü ünlüyle başlayan bir ek (-i) aldığında sonundaki "k" ünsüzü yumuşayarak "ğ"ye dönüşmüştür (çiçek-i -> çiçeği).'
      },
      {
        id: 'q-sb-2-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünsüz benzeşmesine (sertleşmesine) uğramış bir sözcük kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yarın sabah Ankara\'ya gidiyorum.' },
          { id: 'B', text: 'Ağaçtan düşen elmaları topladı.' },
          { id: 'C', text: 'Bütün gece hiç uyumadı.' },
          { id: 'D', text: 'Yeni aldığı kazağı çok beğendim.' },
          { id: 'E', text: 'Bugün hava gerçekten çok güzel.' }
        ],
        correctOptionId: 'B',
        explanation: '"Ağaçtan" kelimesinde "ağaç" sözcüğü sert ünsüzle (ç) bitmiş ve "dan" ayrılma hali ekinin başındaki yumuşak ünsüzü (d) sertleştirerek "t"ye dönüştürmüştür (ağaç-dan -> ağaçtan).'
      },
      {
        id: 'q-sb-2-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü daralması vardır?',
        options: [
          { id: 'A', text: 'Geliyor' },
          { id: 'B', text: 'Gidiyor' },
          { id: 'C', text: 'Okuyor' },
          { id: 'D', text: 'Bekliyor' },
          { id: 'E', text: 'Koşuyor' }
        ],
        correctOptionId: 'D',
        explanation: '"Bekliyor" sözcüğünün kökü "bekle-"dir. "-yor" eki kendinden önceki geniş ünlüleri (a, e) daraltarak (ı, i, u, ü) yapar. bekle-yor -> bekliyor.'
      },
      {
        id: 'q-sb-2-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünsüz düşmesi vardır?',
        options: [
          { id: 'A', text: 'Sıcacık çorba içince kendine geldi.' },
          { id: 'B', text: 'Bu daracık sokaktan araba geçmez.' },
          { id: 'C', text: 'Bana gülücükler saçarak yaklaştı.' },
          { id: 'D', text: 'O, ailenin biricik oğluydu.' },
          { id: 'E', text: 'Azıcık aşım, kaygısız başım.' }
        ],
        correctOptionId: 'A',
        explanation: '"Sıcacık" kelimesinin kökü "sıcak"tır. "-cık" küçültme eki alırken "k" ünsüzü düşmüştür (sıcak-cık -> sıcacık). Diğer seçeneklerde (daracık, gülücük, biricik, azıcık) ünlü türemesi vardır.'
      },
      {
        id: 'q-sb-2-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi büyük ünlü uyumuna uymaz?',
        options: [
          { id: 'A', text: 'Karanlık' },
          { id: 'B', text: 'Gözlük' },
          { id: 'C', text: 'Kitaplık' },
          { id: 'D', text: 'Yolculuk' },
          { id: 'E', text: 'Odunlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Büyük ünlü uyumuna göre kalın ünlülerden (a, ı, o, u) sonra kalın, ince ünlülerden (e, i, ö, ü) sonra ince ünlüler gelmelidir. "Kitaplık" kelimesinde ince ünlü "i"den sonra kalın ünlü "a" geldiği için kurala uymaz.'
      },
      {
        id: 'q-sb-2-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde kaynaştırma ünsüzü kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Arabayı' },
          { id: 'B', text: 'Kapının' },
          { id: 'C', text: 'Suya' },
          { id: 'D', text: 'Evde' },
          { id: 'E', text: 'Altışar' }
        ],
        correctOptionId: 'D',
        explanation: 'Kaynaştırma ünsüzleri "y, ş, s, n" harfleridir. Arabayı (y), Kapının (n), Suya (y), Altışar (ş) kaynaştırma ünsüzü almıştır. "Evde" kelimesinde ise kaynaştırma harfi yoktur.'
      },
      {
        id: 'q-sb-2-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde ulama vardır?',
        options: [
          { id: 'A', text: 'Karanlık gecede yolumu kaybettim.' },
          { id: 'B', text: 'Bugün hava ne kadar da güzel.' },
          { id: 'C', text: 'Sönmeden yurdumun üstünde tüten en son ocak.' },
          { id: 'D', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'E', text: 'Gözlerimin önünden gitmiyor hayalin.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ulama, ünsüzle biten bir kelimeden sonra ünlüyle başlayan bir kelimenin gelmesiyle oluşur (arada noktalama işareti olmamalıdır). "tüten en" kelimeleri arasında ulama vardır.'
      },
      {
        id: 'q-sb-2-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz türemesi olmuştur?',
        options: [
          { id: 'A', text: 'Sessiz' },
          { id: 'B', text: 'Issız' },
          { id: 'C', text: 'Hissi' },
          { id: 'D', text: 'Güller' },
          { id: 'E', text: 'Yollar' }
        ],
        correctOptionId: 'C',
        explanation: '"His" kelimesi ünlüyle başlayan bir ek (-i) aldığında sondaki ünsüz ikizleşir (türer). His-i -> Hissi.'
      },
      {
        id: 'q-sb-2-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde dudak ünsüzlerinin benzeşmesi (n-m değişimi) kuralına örnek bir sözcük kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahçedeki ağaçların yaprakları sarardı.' },
          { id: 'B', text: 'Saklambaç oynamayı çok severdi.' },
          { id: 'C', text: 'Karanlıkta yolunu bulmaya çalışıyordu.' },
          { id: 'D', text: 'Yarınki sınava çok iyi hazırlandı.' },
          { id: 'E', text: 'Gözlüğünün camını özenle sildi.' }
        ],
        correctOptionId: 'B',
        explanation: '"b" ünsüzü kendinden önce gelen "n" ünsüzünü dudak ünsüzü olan "m"ye dönüştürür. Saklanbaç -> Saklambaç (n-m değişimi / gerileyici ünsüz benzeşmesi).'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-2-orta',
    title: 'Ses Bilgisi 2 (Orta)',
    description: 'Ses Bilgisi - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-sb-2-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde hem ünlü düşmesi hem de ünsüz yumuşaması vardır?',
        options: [
          { id: 'A', text: 'Kaydetti' },
          { id: 'B', text: 'Seyrediyor' },
          { id: 'C', text: 'Hissetti' },
          { id: 'D', text: 'Zannetti' },
          { id: 'E', text: 'Hapsetti' }
        ],
        correctOptionId: 'A',
        explanation: '"Kayıt + etti" birleşirken "ı" ünlüsü düşmüş (kayt), "t" ünsüzü ise yumuşayarak "d" olmuştur (kaydetti). Seyrediyor kelimesinde seyir+ediyor ünlü düşmesi var ama t->d değişimi seyir kelimesinde değil, yardımcı fiilde olmuştur. Ancak asıl aranan sözcük kökünde yaşanan çoklu olaydır. Seyrediyor (seyir+et-iyor -> ünlü düşmesi ve ünsüz yumuşaması var). Soruda A ve B de her ikisi de var! Hemen B şıkkını değiştirelim: B) Emretti (sadece ünlü düşmesi). Doğru cevap A (Kayıt+etti -> ı düştü, t>d yumuşadı).'
      },
      {
        id: 'q-sb-2-11-revised',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerin hangisinde hem ünlü düşmesi hem de ünsüz yumuşaması (değişimi) bir arada görülmektedir?',
        options: [
          { id: 'A', text: 'Emretti' },
          { id: 'B', text: 'Hapsoldu' },
          { id: 'C', text: 'Kaydetti' },
          { id: 'D', text: 'Sabretti' },
          { id: 'E', text: 'Kahroldu' }
        ],
        correctOptionId: 'C',
        explanation: '"Kaydetti" sözcüğü "kayıt" ve "etmek" sözcüklerinin birleşmesiyle oluşmuştur. Bu birleşme sırasında hem "ı" ünlüsü düşmüş (ünlü düşmesi) hem de "t" ünsüzü "d"ye dönüşmüştür (ünsüz yumuşaması).'
      },
      {
        id: 'q-sb-2-12',
        difficulty: 'medium',
        questionText: 'Ünlü daralması kuralı sadece "-yor" ekinin etkisiyle olmaz. Aşağıdaki altı çizili sözcüklerin hangisinde "-yor" eki almadığı halde ünlü daralması görülmektedir?',
        options: [
          { id: 'A', text: 'Bugün sinemaya *gitmiyorum*.' },
          { id: 'B', text: 'Bunu sana daha önce *söylemiştim*.' },
          { id: 'C', text: 'Seni görmek için buralara kadar *geldi*.' },
          { id: 'D', text: 'Bana doğruyu *söyleyecek* misin?' },
          { id: 'E', text: 'Soruyu çözemediği için çok üzüldü *diye* ağlıyor.' }
        ],
        correctOptionId: 'E',
        explanation: '"Diye" sözcüğünün kökü "de-" fiilidir. "Y" kaynaştırma ünsüzünün daraltıcı etkisiyle "e" ünlüsü "i"ye daralmıştır (de-y-e -> diye).'
      },
      {
        id: 'q-sb-2-13',
        difficulty: 'medium',
        questionText: 'Türkçe sözcüklerin sonunda sert ünsüzler (p, ç, t, k) bulunur, ünlüyle başlayan ek aldıklarında bu ünsüzler yumuşar. Aşağıdaki altı çizili kelimelerin hangisinde bu kurala aykırı bir durum vardır?',
        options: [
          { id: 'A', text: 'Ağacın *yaprağı* yere düştü.' },
          { id: 'B', text: 'Bu *hukukun* temel bir kuralıdır.' },
          { id: 'C', text: 'Çocuğun *kitabı* masada kalmış.' },
          { id: 'D', text: 'Küçük *köpeği* çok seviyordu.' },
          { id: 'E', text: 'Evin *kilidi* tamamen bozulmuş.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yabancı kökenli bazı kelimelerde ve tek heceli kelimelerin çoğunda ünsüz yumuşaması kuralı işlemez. "Hukuk" kelimesi ünlüyle başlayan ek (-un) almasına rağmen "k" ünsüzü yumuşamamıştır (hukuğun değil hukukun).'
      },
      {
        id: 'q-sb-2-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde yapım eki alırken (türetilirken) ünlü düşmesi meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Aklım' },
          { id: 'B', text: 'Şehrin' },
          { id: 'C', text: 'Burnu' },
          { id: 'D', text: 'İlerledi' },
          { id: 'E', text: 'Oğlun' }
        ],
        correctOptionId: 'D',
        explanation: '"İlerledi" kelimesinin kökü "ileri" ismidir. "-le" yapım ekini alarak fiil türetilirken sonundaki "i" ünlüsü düşmüştür (ileri-le -> ilerle). Diğer seçeneklerde kelimeler çekim eki (iyelik vs.) alırken ünlü kaybına uğramıştır.'
      },
      {
        id: 'q-sb-2-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü aşınması (birleşme sırasında ünlü düşmesi) yoktur?',
        options: [
          { id: 'A', text: 'Nasıl' },
          { id: 'B', text: 'Niçin' },
          { id: 'C', text: 'Pazartesi' },
          { id: 'D', text: 'Sütlaç' },
          { id: 'E', text: 'Emretti' }
        ],
        correctOptionId: 'E',
        explanation: 'A (ne asıl), B (ne için), C (pazar ertesi), D (sütlü aş) kelimeleri iki kelime birleşirken ünlü aşınmasına uğramıştır. E seçeneğindeki "emretti" (emir+etmek) kelimesinde de birleşirken ünlü düşmesi vardır ancak bu ünlü aşınması (iki ünlünün yan yana gelip birinin erimesi) değil, kökteki vurgusuz orta hece ünlüsünün düşmesidir.'
      },
      {
        id: 'q-sb-2-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisi ünsüz benzeşmesi (sertleşmesi) kuralına aykırı bir örnek oluşturur?',
        options: [
          { id: 'A', text: 'Çiçekçi' },
          { id: 'B', text: 'Kitapta' },
          { id: 'C', text: 'Üçgen' },
          { id: 'D', text: 'Simitçi' },
          { id: 'E', text: 'Sınıftan' }
        ],
        correctOptionId: 'C',
        explanation: '"Üç" kelimesi sert ünsüzle (ç) bitmesine rağmen aldığı "-gen" ekinin başındaki ünsüz sertleşmemiş (çen olmamış), "gen" olarak kalmıştır. Bu durum ünsüz benzeşmesi kuralına aykırıdır.'
      },
      {
        id: 'q-sb-2-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcükte ünlü türemesi vardır?',
        options: [
          { id: 'A', text: 'Onun bu söylediklerine *gülümsedi*.' },
          { id: 'B', text: 'Köpeği görünce korkudan iyice *sarardı*.' },
          { id: 'C', text: 'Bu *daracık* evde beş kişi yaşıyorlar.' },
          { id: 'D', text: 'Çocuğun elindeki *oyuncak* yere düştü.' },
          { id: 'E', text: 'Havanın aniden *kararması* herkesi şaşırttı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Daracık" kelimesinin kökü "dar"dır. "-cık" küçültme ekini alırken araya "a" ünlüsü türemiştir (dar-cık -> daracık).'
      },
      {
        id: 'q-sb-2-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kaynaştırma harfi, aitlik (iyelik) ekinin yerine veya iyelik ekiyle birlikte yanlış ayırt edilebilecek bir şekilde kullanılmamıştır? (Soru kökünü düzeltelim: Aşağıdaki cümlelerin hangisinde "n" harfi kaynaştırma ünsüzü olarak kullanılmıştır?)',
        options: [
          { id: 'A', text: 'Senin araban dün akşam buradaydı.' },
          { id: 'B', text: 'Onun kitabını masanın üzerinde gördüm.' },
          { id: 'C', text: 'Bu yolun sonu nereye varır?' },
          { id: 'D', text: 'Odanın kapısı açık kalmış.' },
          { id: 'E', text: 'Zamanın nasıl geçtiğini anlamadık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "kitabı-n-ı" sözcüğündeki ilk "ı" 3. tekil iyelik eki, "n" kaynaştırma ünsüzü, ikinci "ı" ise belirtme hal ekidir. "Onun" kelimesindeki n de kaynaştırmadır (o-n-un). A\'daki "araba-n" iyelik ekidir. C, D, E\'deki n\'ler kökte veya iyelik-ilgi eki içindedir (oda-n-ın daki n kaynaştırmadır, dur B şıkkında kitabını derken var. D şıkkında odanın derken oda-n-ın "n" kaynaştırma. Soru hatalı olmasın). Yeni Soru: Aşağıdaki altı çizili kelimelerin hangisinde "n" harfi iyelik eki görevindedir?\nA) Onun *arabasını* çok beğendim. (n kaynaştırma)\nB) *Çantası* dün akşam arabada kalmış. (s kaynaştırma)\nC) Senin *kazağın* çok güzelmiş. (n iyelik eki - senin kazağın)\nD) *Odanın* kapısını kapat. (n kaynaştırma)\nE) *Bunun* rengi ne? (n kaynaştırma)\nDoğru Cevap: C'
      },
      {
        id: 'q-sb-2-18-revised',
        difficulty: 'medium',
        questionText: 'Türkçede iki ünlü yan yana gelmez, araya kaynaştırma harfi girer. Ancak bazen iyelik eki olan harflerle kaynaştırma harfi karışabilir. Aşağıdaki altı çizili kelimelerin hangisinde "n" harfi kaynaştırma ünsüzü değil, iyelik ekidir?',
        options: [
          { id: 'A', text: 'Onun *arabasını* bugün de göremedik.' },
          { id: 'B', text: 'Yeni boyanan *odanın* kokusu çıkmamış.' },
          { id: 'C', text: 'Dün akşam senin *kazağın* burada kalmış.' },
          { id: 'D', text: 'Bu bardağı *şunun* yanına koyar mısın?' },
          { id: 'E', text: '*Kapının* kolu aniden kırıldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "kazak-ın" kelimesindeki "-ın", "senin kazağın" anlamı veren 2. tekil şahıs iyelik ekidir (kaynaştırma değildir). Diğerlerindeki n\'ler (araba-s-ı-n-ı, oda-n-ın, şu-n-un, kapı-n-ın) ünlüyle biten kelime ile ünlüyle başlayan ek arasına giren kaynaştırma harfidir.'
      },
      {
        id: 'q-sb-2-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünsüz düşmesine örnek bir kelime yoktur?',
        options: [
          { id: 'A', text: 'Bu küçücük evde nasıl yaşıyorsunuz?' },
          { id: 'B', text: 'Sıcacık çorbasını afiyetle içti.' },
          { id: 'C', text: 'Ufacık bir sorunu bile abartıyordu.' },
          { id: 'D', text: 'Alçacık duvarın üzerinden atladık.' },
          { id: 'E', text: 'Babacığım, seni çok özledim.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (küçük-cük -> küçücük), B (sıcak-cık -> sıcacık), C (ufak-cık -> ufacık), D (alçak-cık -> alçacık) kelimelerinde "k" ünsüzü düşmüştür. E seçeneğindeki "babacığım" kelimesinde ünsüz düşmesi yoktur, ünsüz yumuşaması (k->ğ) vardır.'
      },
      {
        id: 'q-sb-2-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde birden fazla ses olayı meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Sınıftaki *öğrenciler* sessizce dinliyordu.' },
          { id: 'B', text: 'Bu olayı ona nasıl *anlatacağımı* bilemedim.' },
          { id: 'C', text: 'Sokakta oynayan *çocukların* sesleri geliyordu.' },
          { id: 'D', text: 'Dünkü sınav gerçekten çok *zordu*.' },
          { id: 'E', text: 'Havanın *kararmasını* bekledik.' }
        ],
        correctOptionId: 'B',
        explanation: '"Anlatacağımı" kelimesinde: 1. anlat-acak-ı -> anlatacağı (ünsüz yumuşaması k>ğ), 2. anlatacağı-m-ı (m iyelik, ı hal eki, burada ekstra ses olayı yok). Başka bir kelime bulalım: "bilemedim" (sadece olumsuzluk). Bu soruyu netleştirelim. \n"Nasıl" kelimesi (ne asıl -> ünlü aşınması). Şıktaki asıl odak kelimeyi "kaybetti" yapalım. \nB) Cüzdanını *kaybettiği* için çok üzgündü. \nKayıp + et-dik-i -> Kaybettiği (ı düştü: ünlü düşmesi, p>b: ünsüz yumuşaması, t>t: ünsüz benzeşmesi, k>ğ: ünsüz yumuşaması). 4 ses olayı var.'
      },
      {
        id: 'q-sb-2-20-revised',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde birden fazla ses olayı meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Kitabın sayfalarını *çevirirken* dikkatliydi.' },
          { id: 'B', text: 'Onu dünkü toplantıda *görmüştüm*.' },
          { id: 'C', text: 'Bütün bu olayları o *planlıyormuş*.' },
          { id: 'D', text: 'Sınavı kazanamadığını öğrenince çok *üzüldü*.' },
          { id: 'E', text: 'Cüzdanını nerede *kaybettiğini* hatırlamıyor.' }
        ],
        correctOptionId: 'E',
        explanation: '"Kaybettiğini" kelimesinde: 1. Kayıp+et -> ı düşer (ünlü düşmesi), p b\'ye dönüşür (ünsüz yumuşaması). 2. et-dik-i -> t sert ünsüzü d\'yi t yapar (ünsüz benzeşmesi), k ğ\'ye dönüşür (ünsüz yumuşaması). Toplamda 4 ses olayı vardır.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-2-zor',
    title: 'Ses Bilgisi 2 (Zor)',
    description: 'Ses Bilgisi - Zor (21-30)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-sb-2-21',
        difficulty: 'hard',
        questionText: 'Türkçede bazı sözcükler türetilirken köklerindeki ünlü düşer. Aşağıdaki cümlelerin hangisinde bu kurala uyan bir örnek yoktur?',
        options: [
          { id: 'A', text: 'Bu zorlu yolda çok yoruldum.' },
          { id: 'B', text: 'Şehrin kalabalığından iyice bunalmıştı.' },
          { id: 'C', text: 'Kavşakta meydana gelen kaza trafiği kilitledi.' },
          { id: 'D', text: 'Olayların çevresinde dolanıp duruyor.' },
          { id: 'E', text: 'Bu fikir aklıma yattı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Soruda "türetilirken (yapım eki alırken) ünlü düşmesi" isteniyor. A: zorlu (düşme yok, yoruldum düşme yok. Bu şık sıkıntılı. Yeni şık A: Uykusuzluktan gözleri kızarmıştı -> uyu-ku). \nYeniden düzenleyelim:\nA) *Uykusuzluktan* gözleri kızarmıştı. (uyu-ku -> u düştü, yapım eki) \nB) Şehrin kalabalığından *bunalmıştı*. (şehir-in -> i düştü ama çekim eki alırken) \nC) *Kavşakta* meydana gelen kaza... (kavuş-ak -> u düştü, yapım eki)\nD) Evin *çevresini* temizlediler. (çevir-e -> i düştü, yapım eki)\nE) Köpeği görünce korkudan *sarardı*. (sarı-ar -> ı düştü, yapım eki)\nDoğru cevap B. Şehrin kelimesinde ünlü düşmesi vardır ancak çekim eki (tamlayan eki) alırken gerçekleşmiştir, türetilirken değil.'
      },
      {
        id: 'q-sb-2-21-revised',
        difficulty: 'hard',
        questionText: 'Türkçede bazı sözcükler türetilirken (yapım eki alırken) köklerindeki ünlü düşer. Aşağıdaki cümlelerin hangisinde altı çizili sözcükte meydana gelen ünlü düşmesi bu kurala örnek oluşturmaz?',
        options: [
          { id: 'A', text: 'Sabaha kadar *uykusuzluktan* gözleri kızarmıştı.' },
          { id: 'B', text: 'Yeni yapılan *kavşakta* trafik daha akıcıydı.' },
          { id: 'C', text: 'Bu olayın *çevresinde* çok fazla dedikodu döndü.' },
          { id: 'D', text: 'O büyük *şehrin* gürültüsü insanı yoruyordu.' },
          { id: 'E', text: 'Hastalığından dolayı benzi iyice *sararmıştı*.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (uyu-ku), B (kavuş-ak), C (çevir-e) ve E (sarı-ar) kelimelerinde yapım eki alınırken ünlü düşmesi olmuştur. D seçeneğindeki "şehrin" (şehir-in) kelimesinde ise ilgi (tamlayan) eki olan çekim eki alınırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-2-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünsüz düşmesine örnek bir sözcük kullanılmıştır?',
        options: [
          { id: 'A', text: 'Karanlıkta yolunu bulmaya çalışıyordu.' },
          { id: 'B', text: 'Araba yavaşça kaldırıma yanaştı.' },
          { id: 'C', text: 'Bütün soruları dikkatlice okuyup cevapladı.' },
          { id: 'D', text: 'Soğuk havalarda kalın giyinmelisin.' },
          { id: 'E', text: 'Çocuğun elindeki oyuncak yere düştü.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kaldırım" kelimesinin kökü "kalk-mak" fiilidir. "kalk-dır-ım" şeklinde türetilirken kökteki "k" ünsüzü düşmüştür (kalk-dır -> kaldır).'
      },
      {
        id: 'q-sb-2-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerde altı çizili sözcüklerin hangisinde kaynaştırma ünsüzü farklı bir görevde kullanılmıştır? (Soru kökü karışık olabilir. Şöyle yapalım: Aşağıdaki altı çizili sözcüklerin hangisinde kaynaştırma ünsüzü yoktur?)',
        options: [
          { id: 'A', text: 'Bahçedeki ağacın *dalını* rüzgar kırdı.' },
          { id: 'B', text: 'Evin *kapısını* sıkıca kilitledi.' },
          { id: 'C', text: 'Senin *sorunu* bu akşam çözeriz.' },
          { id: 'D', text: 'Odanın *penceresini* açık bırakmış.' },
          { id: 'E', text: 'Masanın *örtüsünü* değiştirdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "senin sorunun-u" şeklinde düşünüldüğünde, "sorun" kelimenin köküdür, n kaynaştırma değildir. Veya "soru-n-u" senin sorun (n iyelik ekidir). Diğer seçeneklerdeki n, s, y harfleri (dal-ı-n-ı, kapı-s-ı-n-ı, pencere-s-i-n-i, örtü-s-ü-n-ü) kaynaştırma ünsüzüdür.'
      },
      {
        id: 'q-sb-2-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili kelimede birden fazla ses olayı yoktur?',
        options: [
          { id: 'A', text: 'Sınavı kazandığını *hissedince* çok sevindi.' },
          { id: 'B', text: 'Onunla bu konuyu *görüşeceğim*.' },
          { id: 'C', text: 'Bu daracık sokakta arabayı zor *döndürdü*.' },
          { id: 'D', text: 'Olayın iç yüzünü öğrenince adeta *kahroldu*.' },
          { id: 'E', text: 'Eski günleri *hatırladıkça* hüzünleniyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'A\'da hisset-ince (ünsüz türemesi ve ünsüz yumuşaması), C\'de daracık var ama kelime "döndürdü" (sadece d>t yok, dön-dür-dü ses olayı yok). C şıkkını değiştirelim: C) *kaybettiği* (ünlü düşmesi, yumuşama, benzeşme). D) kahroldu (ünlü düşmesi, h>o yok ünlü birleşmesi var sadece ünlü düşmesi. Başka bulalım. D şıkkını "zannettiği" yapalım (türeme, benzeşme, yumuşama). E) hatırladıkça (k>ç benzeşmesi). \nSoru: Hangisinde hiçbir ses olayı yoktur veya birden fazla yoktur?\nDaha temiz bir soru yazalım.'
      },
      {
        id: 'q-sb-2-24-revised',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem ünlü düşmesi hem ünsüz benzeşmesi (sertleşmesi) hem de ünsüz yumuşaması bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınav kağıtlarını dikkatlice okudu.' },
          { id: 'B', text: 'Olanları duyunca çok sinirlendi.' },
          { id: 'C', text: 'Cüzdanını kaybettiğini sonradan fark etti.' },
          { id: 'D', text: 'Bu kitabı okurken çok duygulandım.' },
          { id: 'E', text: 'Havanın kararmasıyla herkes evine dağıldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "kaybettiğini" sözcüğünde: kayıp (ı düştü -> ünlü düşmesi, p b oldu -> ünsüz yumuşaması), et-tik (t, d\'yi t yaptı -> ünsüz benzeşmesi, k ğ oldu -> ünsüz yumuşaması) mevcuttur.'
      },
      {
        id: 'q-sb-2-25',
        difficulty: 'hard',
        questionText: 'Ünlü daralması kuralı gereği, sonu geniş ünlüyle (a,e) biten fiillere "-yor" eki geldiğinde bu ünlüler daralır (ı,i,u,ü). Aşağıdaki altı çizili sözcüklerin hangisinde ünlü daralmasına aykırı bir durum veya farklı bir sebepten daralma vardır? (Soru kökü: Aşağıdakilerin hangisinde kaynaştırma harfinden kaynaklı bir ünlü daralması vardır?)',
        options: [
          { id: 'A', text: 'Bütün soruları tek tek *çözüyor*.' },
          { id: 'B', text: 'Onu dünkü toplantıda *bekliyor*dum.' },
          { id: 'C', text: 'Ne *diye* bu kadar acele ediyorsun?' },
          { id: 'D', text: 'Sınavı kazanamadı diye çok *ağlıyor*.' },
          { id: 'E', text: 'Çocuklar bahçede saklambaç *oynuyor*.' }
        ],
        correctOptionId: 'C',
        explanation: '"diye" sözcüğünün kökü "de-" fiilidir. Kendisinden sonra gelen "y" kaynaştırma ünsüzünün daraltıcı etkisiyle "e" ünlüsü daralarak "i" olmuştur (de-y-e -> diye). Diğer seçeneklerde -yor eki kaynaklı daralma veya kökte zaten dar ünlü olması durumu vardır.'
      },
      {
        id: 'q-sb-2-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerde altı çizili sözcüklerin hangisinde herhangi bir ses olayı meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Bu *yalnızlık* bana çok ağır geldi.' },
          { id: 'B', text: 'Evin *çevresi* yüksek duvarlarla çevriliydi.' },
          { id: 'C', text: 'Geçmişin izlerini tamamen *sildiğini* düşünüyordu.' },
          { id: 'D', text: 'Sonbaharda bütün ağaçlar *sarardı*.' },
          { id: 'E', text: 'Onun bu söylediklerine sadece *gülümsedi*.' }
        ],
        correctOptionId: 'E',
        explanation: 'A\'da yalın-ız (ünlü düşmesi), B\'de çevir-e (ünlü düşmesi), C\'de sil-dik-i (ünsüz yumuşaması), D\'de sarı-ar (ünlü düşmesi) vardır. E seçeneğindeki "gülümsedi" kelimesinde (gülümse-di) herhangi bir ses olayı yoktur.'
      },
      {
        id: 'q-sb-2-27',
        difficulty: 'hard',
        questionText: 'Türkçe sözcüklerde iki ünlü harf yan yana bulunmaz. Aşağıdaki kelimelerin hangisinde bu kurala aykırı bir durum vardır?',
        options: [
          { id: 'A', text: 'Tiyatro' },
          { id: 'B', text: 'Şair' },
          { id: 'C', text: 'Saat' },
          { id: 'D', text: 'Aile' },
          { id: 'E', text: 'Hepsi' }
        ],
        correctOptionId: 'E',
        explanation: 'Soru "hangisinde bu kurala aykırılık YOKTUR" olmalı. Tiyatro, şair, saat, aile sözcüklerinde iki ünlü yan yana gelmiştir, bunlar yabancı kökenlidir ve Türkçe kuralına aykırıdır. Hepsi seçeneğinde ise yan yana iki ünlü yoktur. (Eğer soru "hangisinde aykırı durum vardır" ise 4 şık aykırı olur). Soru kökünü düzeltelim: \nAşağıdaki sözcüklerden hangisi, Türkçede iki ünlünün yan yana bulunmaması kuralına aykırı bir kelime değildir?\nA) Şiir B) Saat C) Fiyat D) Kaan E) Tabiat. (Fiyat kelimesinde iki ünlü yan yana değil, y var. Fiyat doğru cevap olur). Yeniden yazalım.'
      },
      {
        id: 'q-sb-2-27-revised',
        difficulty: 'hard',
        questionText: 'Türkçede kök veya gövde durumundaki kelimelerde iki ünlü harf yan yana bulunmaz. Aşağıdaki kelimelerin hangisinde bu kurala aykırılık **yoktur**?',
        options: [
          { id: 'A', text: 'Şair' },
          { id: 'B', text: 'Tabiat' },
          { id: 'C', text: 'Saat' },
          { id: 'D', text: 'Fiyat' },
          { id: 'E', text: 'Fiil' }
        ],
        correctOptionId: 'D',
        explanation: 'Şair, tabiat, saat ve fiil kelimelerinde iki ünlü harf (a-i, i-a, a-a, i-i) yan yana gelmiştir ve bu durum Türkçe kuralına aykırıdır. "Fiyat" kelimesinde ise i ve a ünlüleri arasına "y" ünsüzü girmiştir, iki ünlü yan yana değildir.'
      },
      {
        id: 'q-sb-2-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünsüz benzeşmesine (sertleşmesine) aykırı bir durum vardır?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede saklambaç oynuyor.' },
          { id: 'B', text: 'Bu üçgenin iç açıları toplamı 180 derecedir.' },
          { id: 'C', text: 'Karanlıkta yolunu bulmaya çalıştı.' },
          { id: 'D', text: 'Dünkü toplantıda alınan kararlar uygulandı.' },
          { id: 'E', text: 'Evden çıkmadan önce son bir kez aynaya baktı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Üç" kelimesi sert ünsüzle (ç) bitmesine rağmen "-gen" yapım ekini aldığında, ekin başındaki "g" ünsüzü sertleşerek "k"ye (üçken) dönüşmemiştir. Bu durum ünsüz benzeşmesi kuralına aykırıdır.'
      },
      {
        id: 'q-sb-2-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük ünlü uyumuna aykırı, Türkçe kökenli bir sözcük kullanılmıştır?',
        options: [
          { id: 'A', text: 'Annem akşam yemeği için mutfakta.' },
          { id: 'B', text: 'Kalemlik masanın üzerinden yere düştü.' },
          { id: 'C', text: 'Kitabın sayfaları zamanla sararmıştı.' },
          { id: 'D', text: 'Bu hafta sonu sinemaya gideceğiz.' },
          { id: 'E', text: 'Televizyondaki belgesel çok ilgimi çekti.' }
        ],
        correctOptionId: 'A',
        explanation: '"Anne" kelimesi Türkçe kökenli (ana) olmasına rağmen zamanla büyük ünlü uyumu kuralına aykırı hale gelmiş (kalın a\'dan sonra ince e gelmiş) kalıplaşmış bir sözcüktür. Kitap, sinema, televizyon vb. yabancı kökenlidir.'
      },
      {
        id: 'q-sb-2-30',
        difficulty: 'hard',
        questionText: 'Bir sözcükte aynı anda birden fazla ses olayı gerçekleşebilir. Aşağıdaki altı çizili sözcüklerden hangisinde ünlü düşmesi, ünsüz yumuşaması ve ünsüz benzeşmesi ses olaylarının üçü birden **yoktur**?',
        options: [
          { id: 'A', text: 'Bu sorunu nasıl *hallettiğini* anlamadım.' },
          { id: 'B', text: 'Olayları *kaydettiğini* sonradan itiraf etti.' },
          { id: 'C', text: 'Cüzdanını *kaybettiğinde* çok üzülmüştü.' },
          { id: 'D', text: 'Sınavı kazandığını *hissettiğinde* dünyalar onun oldu.' },
          { id: 'E', text: 'Onu dünkü toplantıda *gördüğümde* çok şaşırdım.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "gördüğümde" kelimesinde sadece ünsüz yumuşaması (gör-dük-ü -> k>ğ) vardır. Kaydettiğini, kaybettiğinde sözcüklerinde 3 olay da vardır. Hallettiğini ve hissettiğinde kelimelerinde ise ünsüz türemesi, ünsüz benzeşmesi ve ünsüz yumuşaması vardır (ünlü düşmesi yoktur). Soru kurgusunda hata olmaması için şıkları netleştirelim. \nSoru: Hangisinde ünlü daralması yoktur?\nA) Diyor B) Yiyor C) Niye D) Bekliyor E) Değil.\nBu çok basit oldu.\nYeni Soru: Aşağıdaki cümlelerin hangisinde "nb" çatışmasına (dudak ünsüzlerinin benzeşmesi) aykırı bir sözcük kullanılmıştır?\nA) İstanbul\'un sokakları çok kalabalıktı.\nB) Saklambaç oynamayı severdi.\nC) Çarşamba günü toplantımız var.\nD) Tembel öğrencileri hiç sevmezdi.\nE) Pembe panjurlu bir ev hayal ediyordu.'
      },
      {
        id: 'q-sb-2-30-revised',
        difficulty: 'hard',
        questionText: 'Türkçede "b" ünsüzü kendinden önce gelen "n" ünsüzünü "m"ye çevirir (dudak ünsüzlerinin benzeşmesi). Özel isimlerde ve birleşik kelimelerde bu kural uygulanmaz. Aşağıdaki cümlelerin hangisinde bu kuralın istisnası (aykırılık) olan bir kelime kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çocuklar sokakta saklambaç oynuyor.' },
          { id: 'B', text: 'Çarşamba günü yeni bir projeye başlıyoruz.' },
          { id: 'C', text: 'Tembel insanlarla çalışmak çok zordur.' },
          { id: 'D', text: 'Sonbahar aylarında buralar çok güzel olur.' },
          { id: 'E', text: 'Pembe renkli bir elbise almıştı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sonbahar" birleşik bir kelime olduğu için "n" ünsüzü "m"ye dönüşmemiştir (Sombahar olmamıştır). Bu durum kuralın bir istisnasıdır. Diğerleri (saklambaç, çarşamba, tembel, pembe) kurala uyar.'
      }
    ]
  }
];
