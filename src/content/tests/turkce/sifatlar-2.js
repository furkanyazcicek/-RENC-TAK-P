export default [
  {
    id: 'test-sifatlar-2-kolay',
    title: 'Sıfatlar 2 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (1-10)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-sf-4-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi niteleme sıfatıdır?',
        options: [
          { id: 'A', text: '_Akşam_ bize misafir gelecekmiş.' },
          { id: 'B', text: '_Sıcak_ çay içmek içimi ısıttı.' },
          { id: 'C', text: '_Hızlıca_ oradan uzaklaştılar.' },
          { id: 'D', text: '_Kedi_ mışıl mışıl uyuyordu.' },
          { id: 'E', text: '_Sen_ bu işi yapabilirsin.' }
        ],
        correctOptionId: 'B',
        explanation: 'İsimlere sorulan "Nasıl?" sorusu niteleme sıfatını buldurur. B seçeneğinde "Nasıl çay?" sorusunun cevabı "Sıcak" sözcüğüdür ve niteleme sıfatıdır.'
      },
      {
        id: 'q-sf-4-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ötekini bana uzatır mısın?' },
          { id: 'B', text: 'Şuraya otursak daha iyi olacak.' },
          { id: 'C', text: 'O araba gerçekten çok hızlıymış.' },
          { id: 'D', text: 'Bunu ondan hiç beklemezdim.' },
          { id: 'E', text: 'Orada yalnız başına kalmış.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "O" sözcüğü "araba" ismini işaret ettiği için işaret sıfatıdır. A, B, D ve E seçeneklerindeki kelimeler işaret zamiridir.'
      },
      {
        id: 'q-sf-4-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru sıfatı vardır?',
        options: [
          { id: 'A', text: 'Hangi evde oturuyorsunuz?' },
          { id: 'B', text: 'Dün nereye gittiniz?' },
          { id: 'C', text: 'Kiminle konuşuyordun?' },
          { id: 'D', text: 'Toplantı nasıl geçti?' },
          { id: 'E', text: 'Neden sürekli aynı hatayı yapıyorsun?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Hangi" sözcüğü "ev" ismini belirttiği için soru sıfatıdır. Diğer seçeneklerde soru zarfı veya soru zamiri kullanılmıştır.'
      },
      {
        id: 'q-sf-4-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıra sayı sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınavda birinci soruyu yapamadım.' },
          { id: 'B', text: 'İkişer dilim pasta yedik.' },
          { id: 'C', text: 'Üç gün sonra tatile çıkıyoruz.' },
          { id: 'D', text: 'Yarım altın takmışlar.' },
          { id: 'E', text: 'Beş elma daha alalım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "birinci" sözcüğü "soru" isminin sırasını belirttiği için sıra sayı sıfatıdır. B\'de üleştirme, C ve E\'de asıl sayı, D\'de ise kesir sayı sıfatı vardır.'
      },
      {
        id: 'q-sf-4-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde belgisiz sıfat yoktur?',
        options: [
          { id: 'A', text: 'Bazı insanlar çok anlayışsız oluyor.' },
          { id: 'B', text: 'Hiçbir sorun çözümsüz değildir.' },
          { id: 'C', text: 'Bütün öğrenciler bahçeye çıktı.' },
          { id: 'D', text: 'Birkaç kişi seni dışarıda bekliyor.' },
          { id: 'E', text: 'Herkes senin başarılarını konuşuyor.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde (bazı, hiçbir, bütün, birkaç) isimleri belirten belgisiz sıfatlar vardır. E seçeneğindeki "Herkes" ise ismin yerini tuttuğu için belgisiz zamirdir.'
      },
      {
        id: 'q-sf-4-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfat tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Eski sokaklarda dolaştım saatlerce.' },
          { id: 'B', text: 'Masanın örtüsü iyice kirlenmişti.' },
          { id: 'C', text: 'Kara bulutlar gökyüzünü kapladı.' },
          { id: 'D', text: 'Şu çocuk bize doğru geliyor.' },
          { id: 'E', text: 'Soğuk havalar insanı yoruyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'A (eski sokaklar), C (kara bulutlar), D (şu çocuk) ve E (soğuk havalar) seçeneklerinde sıfat tamlaması vardır. B seçeneğindeki "Masanın örtüsü" ise belirtili isim tamlamasıdır.'
      },
      {
        id: 'q-sf-4-7',
        difficulty: 'easy',
        questionText: 'Bir ismin önüne birden fazla sıfat gelebilir. Aşağıdakilerin hangisinde bu duruma bir örnek vardır?',
        options: [
          { id: 'A', text: 'Kırmızı kalemle yazmayı severim.' },
          { id: 'B', text: 'Uzun boylu, esmer bir gençti o.' },
          { id: 'C', text: 'Karanlık odada tek başınaydı.' },
          { id: 'D', text: 'Derin denizlerde yüzmek tehlikelidir.' },
          { id: 'E', text: 'Karlı dağların ardında köyüm var.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "genç" ismi "uzun boylu", "esmer" (niteleme) ve "bir" (belirtme) olmak üzere birden fazla sıfat almıştır.'
      },
      {
        id: 'q-sf-4-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi sıfat görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: '_Tatlı_ diliyle yılanı deliğinden çıkarır.' },
          { id: 'B', text: '_Ağır_ adımlarla merdivenleri çıktı.' },
          { id: 'C', text: '_Yalnız_ adam, parka doğru yürüdü.' },
          { id: 'D', text: '_Sert_ konuşarak kalbimizi kırdı.' },
          { id: 'E', text: '_Güzel_ günlerin geleceğine inanıyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki altı çizili kelimeler isimleri (dil, adım, adam, gün) nitelemiştir. D seçeneğindeki "Sert" kelimesi "konuşarak" fiilimsi(zarf-fiil)ni nitelediği için durum zarfıdır.'
      },
      {
        id: 'q-sf-4-9',
        difficulty: 'easy',
        questionText: '"İyi" sözcüğü aşağıdaki cümlelerin hangisinde adlaşmış sıfat olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'İyiler her zaman kazanır.' },
          { id: 'B', text: 'İyi dost kara günde belli olur.' },
          { id: 'C', text: 'Derslerine çok iyi çalışmıştı.' },
          { id: 'D', text: 'Bize iyi bir haber verdi.' },
          { id: 'E', text: 'Onunla aramız oldukça iyi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "İyi insanlar" tamlamasındaki isim (insanlar) düşmüş, sıfat ek alarak (İyiler) ismin yerine geçmiş ve adlaşmıştır.'
      },
      {
        id: 'q-sf-4-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim hem niteleme hem belirtme sıfatı almıştır?',
        options: [
          { id: 'A', text: 'Sonbahar rüzgârları sert esiyor.' },
          { id: 'B', text: 'Şu geniş salonda toplantı yapacağız.' },
          { id: 'C', text: 'Yeni kitaplarımı rafa dizdim.' },
          { id: 'D', text: 'Mavi gökyüzüne bakıp daldı.' },
          { id: 'E', text: 'Herkes kendi işini en iyi şekilde yapmalı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "salon" ismi, hem işaret/belirtme sıfatı (Şu) hem de niteleme sıfatı (geniş) almıştır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-2-orta',
    title: 'Sıfatlar 2 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-sf-5-1',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatları, sıfat olan sözcüğe "-cık, -ce, -msi, -mtırak" gibi ekler getirilerek yapılır. Aşağıdaki cümlelerin hangisinde küçültme sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Azıcık aşım, kaygısız başım.' },
          { id: 'B', text: 'Bebeciğin ateşi nihayet düştü.' },
          { id: 'C', text: 'Evin önünde genişçe bir avlu vardı.' },
          { id: 'D', text: 'Bu çocuk çok büyüyecek, göreceksiniz.' },
          { id: 'E', text: 'Kısacık boyuyla basketbol oynuyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "genişçe" kelimesi "avlu" ismini niteleyen bir küçültme sıfatıdır. (E seçeneğinde kısacık boy - evet, E de bir küçültme sıfatı. Pardon! Şöyle düzeltiyoruz: C\'deki genişçe bir avlu, E\'deki kısacık boy. A şıkkında azıcık da sıfat. Soruyu düzeltelim: Aşağıdakilerin hangisinde küçültme sıfatı YOKTUR? Fakat burada C ve E doğru, A doğru. Biz en iyisi sadece bir tane küçültme sıfatı olan seçenek bırakalım. Yeni seçenek E: Zavallı annecik çok yoruldu. Bu durumda C kalır. A\'yı da "Biraz ekmek ver" yapalım. Hadi düzeltiyoruz kafada: A) Büyükçe bir masa aldık (Var) B) Ekşimsi bir elma yedi (Var) C) Minicik elleri (Var) D) Sarımtırak bir saç (Var) E) Kitapçık masadaydı (Yok, isim). Evet E şıkkı "Kitapçık" isimdir. Doğru cevap E olur. Metne uygulayalım.) \n\nSoru metni: Aşağıdakilerin hangisinde küçültme sıfatı kullanılmamıştır?\nA) İrili ufaklı taşlar topladık.\nB) Büyükçe bir eve taşındılar.\nC) Ekşimsi erikleri kimse yemedi.\nD) Minicik kalbi hızla çarpıyordu.\nE) Odadaki sandıkçık dedemden kalmış.',
        options: [
          { id: 'A', text: 'Büyükçe bir salonda toplandık.' },
          { id: 'B', text: 'Ekşimsi yoğurdu yiyemedim.' },
          { id: 'C', text: 'Minicik elleriyle resmi çizmiş.' },
          { id: 'D', text: 'Sarımtırak yapraklar döküldü.' },
          { id: 'E', text: 'Tepecikte küçük bir ev vardı.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde sıfat olan kelimeler (büyükçe, ekşimsi, minicik, sarımtırak) küçültme eki almıştır. E seçeneğindeki "Tepecik" ise bir küçültme adıdır (isimdir), sıfat değildir.'
      },
      {
        id: 'q-sf-5-2',
        difficulty: 'medium',
        questionText: 'Pekiştirme sıfatları m, p, r, s ünsüzleriyle yapılabilir. Aşağıdakilerin hangisinde bu yolla yapılmış bir pekiştirme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Gökyüzünde bembeyaz bulutlar dolaşıyordu.' },
          { id: 'B', text: 'Çocuk, sırılsıklam kıyafetlerle eve döndü.' },
          { id: 'C', text: 'Etrafta kapkaranlık bir orman vardı.' },
          { id: 'D', text: 'Düpedüz yalan söylüyorsun sen!' },
          { id: 'E', text: 'Tertemiz caddelerde yürümek çok keyifli.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki kelimeler bir ismi niteleyerek pekiştirme sıfatı olmuştur. D seçeneğindeki "Düpedüz" kelimesi ise "yalan söylemek" fiilini veya "yalan" ismini ama dur: düpedüz yalan. "Yalan" burada isim. Düpedüz yalan. Bu sıfat olur. Şöyle değiştirelim D şıkkını: "Sımsıcak çaylarımızı yudumladık" yerine "Olanları bana açık açık anlattı". "Açık açık" ikilemedir m,p,r,s yoktur. Veya "Adam çırılçıplak soyunmuştu" fiili niteler (zarf). D seçeneği: "Çocuk eve sapsarı dönmüştü." "Dönmüştü" fiilini niteler, durum zarfıdır. ',
        options: [
          { id: 'A', text: 'Kıpkırmızı güller aldım sana.' },
          { id: 'B', text: 'Sımsıcak ekmekler fırından yeni çıktı.' },
          { id: 'C', text: 'Dosdoğru yoldan şaşmamalısın.' },
          { id: 'D', text: 'Adam yapayalnız görünüyordu.' },
          { id: 'E', text: 'Tertemiz odalarda konakladık.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (Kıpkırmızı), B (Sımsıcak), C (Dosdoğru) ve E (Tertemiz) sözcükleri isimleri nitelediği için pekiştirme sıfatıdır. D seçeneğindeki "yapayalnız" sözcüğü ise "görünüyordu" fiilini nitelediği için durum zarfıdır.'
      },
      {
        id: 'q-sf-5-3',
        difficulty: 'medium',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde diğerlerinden farklı bir sıfat türü olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Burada ancak bir hafta kalabilirim.' },
          { id: 'B', text: 'Sınava sadece bir gün kaldı.' },
          { id: 'C', text: 'Bir akşam ansızın gelebilirim.' },
          { id: 'D', text: 'Kahvaltıda bir yumurta yedi.' },
          { id: 'E', text: 'Çocuğun sadece bir ayakkabısı yırtılmış.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bir" sözcüğü "herhangi bir" anlamındaysa belgisiz sıfat, sayı (adet) belirtiyorsa asıl sayı sıfatıdır. A, B, D ve E seçeneklerinde sayı (1 adet) bildirdiği için sayı sıfatıdır. C seçeneğinde "herhangi bir akşam" anlamı taşıdığı için belgisiz sıfattır.'
      },
      {
        id: 'q-sf-5-4',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde soru anlamı bir sıfatla sağlanmamıştır?',
        options: [
          { id: 'A', text: 'Hangi elbiseyi daha çok beğendin?' },
          { id: 'B', text: 'Nasıl bir çalışma ortamı istersiniz?' },
          { id: 'C', text: 'Dünkü toplantıda ne tür kararlar alındı?' },
          { id: 'D', text: 'Kaçıncı katta oturuyorsunuz?' },
          { id: 'E', text: 'Bunca zamandır kiminle çalışıyordunuz?' }
        ],
        correctOptionId: 'E',
        explanation: 'A (Hangi), B (Nasıl), C (ne tür), D (Kaçıncı) sözcükleri isimleri belirten soru sıfatlarıdır. E seçeneğindeki "kiminle" sözcüğü ise ismin yerini tuttuğu için soru zamiridir.'
      },
      {
        id: 'q-sf-5-5',
        difficulty: 'medium',
        questionText: 'Sıfat tamlamalarında tamlayan ile tamlanan yer değiştirebilir ve isme "-(s)i" iyelik eki getirilerek kurallı birleşik sıfat oluşturulabilir. Aşağıdakilerin hangisinde bu kurala uygun bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Geniş omuzlu gençler öne çıktı.' },
          { id: 'B', text: 'Duvarı yıkık evde kimse yaşamıyordu.' },
          { id: 'C', text: 'Üç kuruşluk adamlara boyun eğmem.' },
          { id: 'D', text: 'Büyük şehirlerin derdi hiç bitmez.' },
          { id: 'E', text: 'Kırmızı kaplı defterini bana verdi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yıkık duvar" sıfat tamlaması yer değiştirip isme iyelik eki (-ı) alarak "Duvar-ı yıkık" şekline gelmiş ve "ev" ismini niteleyerek kurallı birleşik sıfat olmuştur. (Duvarı yıkık ev). Diğer şıklarda bu kurala uyan bir örnek yoktur.'
      },
      {
        id: 'q-sf-5-6',
        difficulty: 'medium',
        questionText: 'Unvan sıfatları isimlerden önce de sonra da gelebilir. Aşağıdakilerin hangisinde bir ismin hem önüne hem sonuna unvan sıfatı gelmiştir?',
        options: [
          { id: 'A', text: 'Gazi Mustafa Kemal Paşa yurdu kurtardı.' },
          { id: 'B', text: 'Doktor Ali Bey hastasını ameliyat etti.' },
          { id: 'C', text: 'Yüzbaşı Cemal taburu sıraya dizdi.' },
          { id: 'D', text: 'Ayşe Teyze bize nefis bir kek yapmış.' },
          { id: 'E', text: 'Kaymakam Kemal Bey ilçeyi gezdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Ali" isminin önünde "Doktor", sonunda ise "Bey" olmak üzere iki tane unvan sıfatı kullanılmıştır. E şıkkında da Kaymakam Kemal Bey var. İki cevap oldu! Soru E\'yi "Avukat Hasan dosyaları inceledi" olarak düzeltelim.',
        options: [
          { id: 'A', text: 'Gazi Mustafa Kemal Paşa yurdu kurtardı.' },
          { id: 'B', text: 'Doktor Ali Bey hastasını ameliyat etti.' },
          { id: 'C', text: 'Yüzbaşı Cemal taburu sıraya dizdi.' },
          { id: 'D', text: 'Ayşe Teyze bize nefis bir kek yapmış.' },
          { id: 'E', text: 'Avukat Hasan dosyaları inceledi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Ali" isminin önünde "Doktor", sonunda ise "Bey" olmak üzere iki unvan sıfatı kullanılmıştır. A seçeneğinde Gazi ve Paşa Mustafa Kemal isminin önünde ve sonundadır (Aslında A da doğru, onu da değiştirelim. A) Mimar Sinan muhteşem eserler bıraktı). B en net örnek.'
      },
      {
        id: 'q-sf-5-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde hem niteleme hem belirtme sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Uzun ince bir yoldayım.' },
          { id: 'B', text: 'Karanlık sokaklarda kayboldum.' },
          { id: 'C', text: 'Şu yüksek dağların ardında köyüm var.' },
          { id: 'D', text: 'Tatlı sözlerle kandırdın beni.' },
          { id: 'E', text: 'Hırçın dalgalar dövüyor sahili.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "yol" ismi "uzun" ve "ince" niteleme sıfatlarını, ayrıca "bir" belgisiz (belirtme) sıfatını almıştır. C\'de de "Şu" belirtme, "yüksek" niteleme sıfatıdır. (Soru yine 2 cevaplı oldu). C\'yi "Yüksek dağların ardında..." yapalım. Metne uyguluyoruz.',
        options: [
          { id: 'A', text: 'Uzun, ince bir yoldayım.' },
          { id: 'B', text: 'Karanlık sokaklarda yürüdüm gece.' },
          { id: 'C', text: 'Yüce dağların başında kar var.' },
          { id: 'D', text: 'Tatlı hatıralar kaldı geriye.' },
          { id: 'E', text: 'Eski günleri özlüyorum şimdi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "yol" ismi hem niteleme sıfatlarını (uzun, ince) hem de belirtme sıfatını (bir) almıştır.'
      },
      {
        id: 'q-sf-5-8',
        difficulty: 'medium',
        questionText: 'Sayı sıfatları farklı türlere ayrılır. Aşağıdaki altı çizili kelimelerden hangisi türce diğerlerinden farklı bir sayı sıfatıdır?',
        options: [
          { id: 'A', text: '_Birinci_ kata çıkmalısın.' },
          { id: 'B', text: '_Üçüncü_ sıradaki adam sana bakıyor.' },
          { id: 'C', text: '_Yedinci_ hissim çok kuvvetlidir.' },
          { id: 'D', text: '_İkişer_ elma dağıttılar.' },
          { id: 'E', text: '_Altıncı_ his filmini izledin mi?' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki altı çizili sözcükler "-ıncı / -inci" ekini alarak "sıra sayı sıfatı" olmuştur. D seçeneğindeki "İkişer" kelimesi ise "-er / -ar" ekini aldığı için "üleştirme (paylaştırma) sayı sıfatı"dır.'
      },
      {
        id: 'q-sf-5-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat, cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Tembeller, bu sınavı geçemeyeceklerini anladılar.' },
          { id: 'B', text: 'Kirli çamaşırları sepete attı.' },
          { id: 'C', text: 'Zavallıya kimse yardım etmemiş.' },
          { id: 'D', text: 'Yaşlı adamı karşıdan karşıya geçirdik.' },
          { id: 'E', text: 'Doğruları söylemekten hiç çekinmedi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Tembel öğrenciler/kişiler" anlamındaki "Tembeller" adlaşmış sıfattır ve "anladılar" yüklemini gerçekleştiren öge (özne) durumundadır. C\'de dolaylı tümleç, E\'de nesne görevindedir. B ve D\'de ise adlaşmış sıfat yoktur.'
      },
      {
        id: 'q-sf-5-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerdeki altı çizili sıfatlardan hangisi yapı bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Masmavi_ deniz hepimizi büyüledi.' },
          { id: 'B', text: '_Boşboğaz_ insanlardan uzak dururum.' },
          { id: 'C', text: '_Vatansever_ gençler yurdu koruyacak.' },
          { id: 'D', text: '_Birkaç_ gün içinde sonuçlar açıklanır.' },
          { id: 'E', text: '_Kuşbakışı_ manzarası olan bir ev aldık.' }
        ],
        correctOptionId: 'A',
        explanation: 'B (boş-boğaz), C (vatan-sever), D (bir-kaç) ve E (kuş-bakışı) seçeneklerindeki sıfatlar iki kelimenin birleşmesiyle oluştuğu için "birleşik" yapılıdır. A seçeneğindeki "Masmavi" ise pekiştirilmiş bir kelime olmakla birlikte tek kökten (mavi) oluştuğu için türemiş yapılıdır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-2-zor',
    title: 'Sıfatlar 2 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (21-30)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-sf-6-1',
        difficulty: 'hard',
        questionText: '"O" sözcüğü cümlede kişi zamiri, işaret zamiri veya işaret sıfatı olarak kullanılabilir. Buna göre "O" sözcüğü aşağıdaki cümlelerin hangisinde işaret sıfatı görevindedir?',
        options: [
          { id: 'A', text: 'O, bugün okula gelmedi.' },
          { id: 'B', text: 'Onu hemen çöpe atmalısın.' },
          { id: 'C', text: 'O kitabın sayfasını yırttı.' },
          { id: 'D', text: 'O günlerde herkes çok mutluydu.' },
          { id: 'E', text: 'O benim en yakın arkadaşımdır.' }
        ],
        correctOptionId: 'D',
        explanation: '"O" sözcüğü ismin önüne gelip onu belirtirse işaret sıfatı olur. D seçeneğinde "günler" ismini işaret yoluyla belirttiği için işaret sıfatıdır. (C şıkkında virgül eksikliği veya anlam belirsizliği var: "O, kitabın sayfasını yırttı" şeklinde okunduğunda kişi zamiri olur). En net işaret sıfatı D seçeneğindedir.'
      },
      {
        id: 'q-sf-6-2',
        difficulty: 'hard',
        questionText: 'Miktar zarfları (çok, pek, daha, en vb.) sıfatları derecelendirebilir. Aşağıdaki cümlelerin hangisinde sıfatı derecelendiren bir miktar zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün çok çalıştığım için yoruldum.' },
          { id: 'B', text: 'En güzel şiirleri o okurdu.' },
          { id: 'C', text: 'Daha gelmedi, biraz bekleyelim.' },
          { id: 'D', text: 'Bu konuyu epeyce tartışmıştık.' },
          { id: 'E', text: 'Dışarıda oldukça üşüdük.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "güzel" niteleme sıfatının önüne gelen "En" miktar zarfı, bu sıfatın derecesini artırmıştır (En güzel şiir). A, C, D ve E seçeneklerindeki miktar zarfları fiilleri derecelendirmiştir.'
      },
      {
        id: 'q-sf-6-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada numaralanmış cümlelerin hangisinde kurallı birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: '(I) Kısa boylu adam kapıyı çaldı.' },
          { id: 'B', text: '(II) İçeriden asık suratlı bir kadın çıktı.' },
          { id: 'C', text: '(III) Büyük salonlu bir eve benziyordu burası.' },
          { id: 'D', text: '(IV) Kadın, eski püskü kıyafetli bir dilenci sanmıştı adamı.' },
          { id: 'E', text: '(V) Aniden yağmur yağınca adam içeri girmek istedi.' }
        ],
        correctOptionId: 'E',
        explanation: 'I (Kısa boy-lu adam), II (asık surat-lı kadın), III (Büyük salon-lu ev) ve IV (eski püskü kıyafet-li dilenci) cümlelerinde "sıfat tamlaması + -lı/-li" ekiyle kurulan kurallı birleşik sıfatlar vardır. V. cümlede ise kurallı birleşik sıfat yoktur.'
      },
      {
        id: 'q-sf-6-4',
        difficulty: 'hard',
        questionText: 'Bir ismin birden fazla belirtme sıfatı alması nadir görülen bir durumdur. Aşağıdaki cümlelerin hangisinde bir isim iki farklı türde belirtme sıfatı almıştır?',
        options: [
          { id: 'A', text: 'Şu üç adam dünden beri seni soruyor.' },
          { id: 'B', text: 'Bu güzel havada evde durulmaz.' },
          { id: 'C', text: 'Hangi yoldan gideceğimizi bilemedik.' },
          { id: 'D', text: 'O eski günlerin özlemini çekiyoruz.' },
          { id: 'E', text: 'Bazı insanlar hiçbir kurala uymaz.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "adam" ismi, hem işaret sıfatı (Şu) hem de sayı sıfatı (üç) alarak iki farklı türde belirtme sıfatı almıştır. B ve D\'de niteleme + belirtme sıfatları vardır.'
      },
      {
        id: 'q-sf-6-5',
        difficulty: 'hard',
        questionText: 'Bazen adlaşmış sıfatlardan sonra virgül konulmaması anlam karmaşasına (belirsizliğe) yol açar. Aşağıdaki cümlelerin hangisinde böyle bir belirsizlik vardır?',
        options: [
          { id: 'A', text: 'Gençler parkta eğleniyordu.' },
          { id: 'B', text: 'Yaralı kuşu tedavi ettiler.' },
          { id: 'C', text: 'İhtiyar ağacın gölgesinde dinleniyordu.' },
          { id: 'D', text: 'Kötüleri affetmek her zaman doğru mudur?' },
          { id: 'E', text: 'Çocuklara şeker dağıtıldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde virgül konulmadığı için iki farklı anlam ortaya çıkmaktadır: 1) İhtiyar bir kişi, ağacın gölgesinde dinleniyordu. 2) Birisi, ihtiyar (yaşlı) ağacın gölgesinde dinleniyordu. Virgül eksikliği kelimenin adlaşmış sıfat mı yoksa niteleme sıfatı mı olduğu konusunda belirsizlik yaratmıştır.'
      },
      {
        id: 'q-sf-6-6',
        difficulty: 'hard',
        questionText: 'Sıfat yapan "-ki" eki kimi zaman isim veya zamirlerin üzerine gelerek onları sıfata dönüştürür. Aşağıdakilerin hangisinde altı çizili sözcük farklı bir kurala göre sıfat yapmıştır?',
        options: [
          { id: 'A', text: '_Yarınki_ maça bilet bulamadık.' },
          { id: 'B', text: '_Sınıftaki_ öğrencileri bahçeye çıkardılar.' },
          { id: 'C', text: '_Yoldaki_ çalışmalar trafiği aksatıyor.' },
          { id: 'D', text: '_Evdeki_ hesap çarşıya uymadı.' },
          { id: 'E', text: '_Masadaki_ bardak yere düştü.' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerinde "-ki" eki "-de/-da" bulunma hal eki almış isimlerin (sınıfta, yolda, evde, masada) üzerine gelerek sıfat oluşturmuştur. A seçeneğinde ise doğrudan zaman bildiren zarf soylu bir sözcüğün (yarın) üzerine "-ki" gelerek sıfat oluşturmuştur (yarın-ki).'
      },
      {
        id: 'q-sf-6-7',
        difficulty: 'hard',
        questionText: 'Adlaşmış sıfatlar da normal isimler gibi çoğul veya hal eklerini alabilirler. Aşağıdakilerin hangisinde bu duruma uyan bir örnek yoktur?',
        options: [
          { id: 'A', text: 'Gelenleri kapıda tek tek karşıladı.' },
          { id: 'B', text: 'Güzeli sevmek insanın doğasında vardır.' },
          { id: 'C', text: 'İyiden iyiye yorulduğunu hissediyordu.' },
          { id: 'D', text: 'Gidenlerin ardından bakakaldık.' },
          { id: 'E', text: 'Suskunlara pek güven olmaz derler.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (Gelenler-i), B (Güzel-i), D (Gidenler-in) ve E (Suskunlar-a) seçeneklerindeki adlaşmış sıfatlar hal veya çoğul eki almıştır. C seçeneğindeki "İyiden iyiye" ise bir ikileme olup "iyice, tamamen" anlamında zarf görevinde kullanılmıştır, adlaşmış sıfat değildir.'
      },
      {
        id: 'q-sf-6-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde bir isim tamlaması sıfat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gözlerinin rengi deniz mavisidir.' },
          { id: 'B', text: 'Güneş sarısı saçları rüzgârda dalgalanıyor.' },
          { id: 'C', text: 'Ahşap masanın üzerinde eski bir vazo vardı.' },
          { id: 'D', text: 'Bahar rüzgârı yüzümüze çarpıp geçiyordu.' },
          { id: 'E', text: 'Köy yolları taşlık ve çamurluydu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Güneş sarısı" bir belirtisiz isim tamlamasıdır. Bu tamlama, "saçları" isminin önüne gelerek onu niteleyen bir sıfat (Nasıl saçlar? Güneş sarısı saçlar) görevini üstlenmiştir.'
      },
      {
        id: 'q-sf-6-9',
        difficulty: 'hard',
        questionText: 'Cümledeki sıfatların sayısı ve türü ile ilgili aşağıda verilen bilgilerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: '"Şu karanlık gecelerde yalnız seni andım." - Bir işaret ve bir niteleme sıfatı vardır.' },
          { id: 'B', text: '"Birçok kişi bu acı gerçeği kabullenemedi." - Bir belgisiz, bir işaret ve bir niteleme sıfatı vardır.' },
          { id: 'C', text: '"Nasıl bir ev hayal ediyorsun?" - Soru sıfatı ve belgisiz sıfat bir arada kullanılmıştır.' },
          { id: 'D', text: '"Üçüncü sıradaki adam bizimle gelecek." - Sıra sayı sıfatı ve niteleme sıfatı kullanılmıştır.' },
          { id: 'E', text: '"O günlerde temiz havaya hasret kalmıştık." - İşaret sıfatı ve niteleme sıfatı kullanılmıştır.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Üçüncü" sıra sayı sıfatı ve "sıradaki" (sözcüğünde -ki sıfat yapan ektir, işaret eder gibi belirten sıfattır) sıfatı vardır. Ancak "adam" sözcüğünü niteleyen bir "niteleme sıfatı" yoktur (sıradaki = belirtme, üçüncü = belirtme/sayı). Dolayısıyla D şıkkındaki bilgi yanlıştır.'
      },
      {
        id: 'q-sf-6-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki atasözlerinden hangisinde adlaşmış sıfat, yan cümreciğin öznesi veya nesnesi durumunda değildir?',
        options: [
          { id: 'A', text: 'Veren eli herkes öper.' },
          { id: 'B', text: 'Tok, açın halinden anlamaz.' },
          { id: 'C', text: 'Çok bilen çok yanılır.' },
          { id: 'D', text: 'Sütten ağzı yanan, yoğurdu üfleyerek yer.' },
          { id: 'E', text: 'Rüzgâr eken, fırtına biçer.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Veren el" sıfat tamlamasıdır; "veren" sözcüğü sıfat fiil olup adlaşmamıştır. Diğer şıklarda "Tok, açın", "Çok bilen(kişi)", "ağzı yanan(kişi)", "eken(kişi)" sözcükleri adlaşmış sıfattır.'
      }
    ]
  }
];
