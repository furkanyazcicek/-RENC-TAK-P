export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Hormonların Genel Özellikleri ve Taşıma',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Vücudumuzda hormon üreterek kana salgılayan, genellikle kanalsız yapıdaki bezlere ne ad verilir?',
        options: [
          { id: 'A', text: 'Endokrin bez (İç salgı bezi)' },
          { id: 'B', text: 'Ekzokrin bez (Dış salgı bezi)' },
          { id: 'C', text: 'Tükürük bezi' },
          { id: 'D', text: 'Ter bezi' },
          { id: 'E', text: 'Gözyaşı bezi' }
        ],
        correctOptionId: 'A',
        explanation: 'Hormonları üreten ve ürününü doğrudan kana veren bezlere endokrin (iç salgı) bezleri denir.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Hormonların vücuttaki taşınma yolu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sinir hücrelerinin aksonları üzerinden' },
          { id: 'B', text: 'Özel taşıyıcı kanallar (kanalcıklar) aracılığıyla' },
          { id: 'C', text: 'Sadece kas hücrelerinden geçerek' },
          { id: 'D', text: 'Kan dolaşımı aracılığıyla' },
          { id: 'E', text: 'Sindirim sistemi organlarıyla' }
        ],
        correctOptionId: 'D',
        explanation: 'Hormonlar kana verilir ve kan dolaşımı ile vücudun dört bir yanına taşınır.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Kanda dolaşan bir hormonun vücuttaki tüm hücrelere değil, SADECE belirli hücrelere etki edebilmesinin nedeni nedir?',
        options: [
          { id: 'A', text: 'Hormonun büyüklüğü' },
          { id: 'B', text: 'Hedef hücrelerde o hormonu tanıyan özel "reseptörlerin" bulunması' },
          { id: 'C', text: 'Hormonun rengi' },
          { id: 'D', text: 'Kalbin hormonu sadece o bölgeye pompalaması' },
          { id: 'E', text: 'Hormonun sinir sistemiyle gitmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir hormonun etki gösterebilmesi için hedef hücrede ona uygun "reseptör" (alıcı) proteinlerin bulunması gerekir.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi kimyasal yapısına göre hormon gruplarından biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Peptit/Protein yapılı hormonlar' },
          { id: 'B', text: 'Steroit yapılı hormonlar' },
          { id: 'C', text: 'Amino asit türevi hormonlar' },
          { id: 'D', text: 'Karbonhidrat (Glikoz) yapılı hormonlar' },
          { id: 'E', text: 'Tirozin kökenli hormonlar' }
        ],
        correctOptionId: 'D',
        explanation: 'Hormonlar protein, steroit (yağ) veya amino asit kökenlidir. Doğrudan saf karbonhidrat yapılı (şekerden oluşan) bir hormon yoktur.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Büyük moleküllü protein/peptit yapılı hormonlar hücre zarından geçemezler. Bu nedenle bu hormonların reseptörleri (alıcıları) hedef hücrenin neresinde bulunur?',
        options: [
          { id: 'A', text: 'Çekirdeğin içinde' },
          { id: 'B', text: 'Sitoplazmanın ortasında' },
          { id: 'C', text: 'Mitokondrinin içinde' },
          { id: 'D', text: 'Hücre zarının (plazma zarının) dış yüzeyinde' },
          { id: 'E', text: 'Lizozomun içinde' }
        ],
        correctOptionId: 'D',
        explanation: 'Protein yapılı hormonlar büyük ve suda çözünen yapıda oldukları için hücre zarından geçemezler; reseptörleri hücre zarının dış yüzeyinde yer alır.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Yağda çözünebilen ve bu sayede hücre zarından kolayca geçerek hedef hücrenin içine (sitoplazma veya çekirdeğe) girebilen hormon türü hangisidir?',
        options: [
          { id: 'A', text: 'Peptit yapılı hormonlar' },
          { id: 'B', text: 'Steroit yapılı hormonlar' },
          { id: 'C', text: 'Glikoz' },
          { id: 'D', text: 'Kalsiyum iyonu' },
          { id: 'E', text: 'B vitamini' }
        ],
        correctOptionId: 'B',
        explanation: 'Steroit hormonlar yağda çözündükleri için fosfolipit tabakalı hücre zarından rahatça geçerler ve reseptörleri hücre içindedir.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Endokrin ve sinir sistemi vücudumuzun iki ana düzenleyicisidir. İkisinin hızı karşılaştırıldığında hangisi DAHA YAVAŞ, fakat etkisi DAHA UZUN SÜRELİDİR?',
        options: [
          { id: 'A', text: 'Sinir sistemi daha yavaş, daha uzun sürelidir.' },
          { id: 'B', text: 'Endokrin (Hormonal) sistem daha yavaş, etkisi daha uzun sürelidir.' },
          { id: 'C', text: 'İkisinin hızı ve süresi tamamen aynıdır.' },
          { id: 'D', text: 'Endokrin sistem daha hızlı, daha kısa sürelidir.' },
          { id: 'E', text: 'İkisi de etki ettikten saniyeler sonra kaybolur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sinir sistemi anlık ve çok hızlıdır; endokrin sistem ise hormonun kana karışması ve dağılması zaman aldığı için daha yavaştır ama etkisi uzun sürer.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Bir hormonun etki süresi bittiğinde, o hormona kanda ne olur?',
        options: [
          { id: 'A', text: 'Sonsuza kadar kanda dolaşır.' },
          { id: 'B', text: 'Karaciğer ve böbrekler tarafından parçalanır / idrarla dışarı atılır.' },
          { id: 'C', text: 'Kaslara gidip enerjiye dönüşür.' },
          { id: 'D', text: 'Beyinde kalıcı bir anı olarak depolanır.' },
          { id: 'E', text: 'Kan hücrelerine dönüşür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Görevini tamamlayan veya kanda fazlalaşan hormonlar karaciğerde parçalanır veya böbrekler aracılığıyla atılarak kandan temizlenir.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Vücudun iç dengesinin (sıcaklık, şeker oranı, su oranı vb.) kararlı bir şekilde sabit tutulması durumuna ne ad verilir?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Adaptasyon' },
          { id: 'C', text: 'Homeostazi (İç denge)' },
          { id: 'D', text: 'Simbiyoz' },
          { id: 'E', text: 'Difüzyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücudun iç ortamının fizyolojik sınırlar içinde sabit ve kararlı tutulması olayına homeostazi denir.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Bir değişkenin (örneğin kan şekeri) yükselmesi sonucu artan bir hormonun, bu değişkeni TEKRAR ESKİ (normal) SEVİYESİNE döndürmesine ekolojide ve fizyolojide ne ad verilir?',
        options: [
          { id: 'A', text: 'Pozitif geri bildirim' },
          { id: 'B', text: 'Negatif geri bildirim (Negative feedback)' },
          { id: 'C', text: 'Pasif taşıma' },
          { id: 'D', text: 'Hücre bölünmesi' },
          { id: 'E', text: 'Aktif taşıma' }
        ],
        correctOptionId: 'B',
        explanation: 'Sorunu (sapmayı) TERSİNE ÇEVİREREK normal aralığa döndüren mekanizmalara negatif geri bildirim denir. Çoğu hormon bu yolla çalışır.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Hangi hücreler hormonları ÜRETMEZ?',
        options: [
          { id: 'A', text: 'Ölü ve metabolik faaliyeti durmuş hücreler (Örn: Tırnak)' },
          { id: 'B', text: 'Pankreas hücreleri' },
          { id: 'C', text: 'Tiroit hücreleri' },
          { id: 'D', text: 'Hipofiz hücreleri' },
          { id: 'E', text: 'Hipotalamus sinir hücreleri' }
        ],
        correctOptionId: 'A',
        explanation: 'Hormon üretimi canlılık faaliyeti ve metabolik bir sentez (ATP harcanımı) gerektirir. Ölü dokular hormon üretemez.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Bütün hormonlar hedef hücrelerinde sadece ÇEKİRDEĞİN (DNA\'nın) çalışmasını mı değiştirir?',
        options: [
          { id: 'A', text: 'Evet, bütün hormonlar mutlaka DNA\'yı etkiler.' },
          { id: 'B', text: 'Hayır; bazıları zar reseptörüne bağlanıp hızlıca sitoplazmadaki enzimleri açıp kapatarak çalışır.' },
          { id: 'C', text: 'Evet, hepsi çekirdekte yeni gen yazar.' },
          { id: 'D', text: 'Hayır, bazıları hiçbir hücreyi etkilemeden kanda kaybolur.' },
          { id: 'E', text: 'Evet, bütün hormonlar genetik şifreyi bozar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Steroit hormonlar çoğunlukla gen ifadesini etkilerken (DNA), protein/peptit hormonlar hücre zarında kalıp ikinci habercilerle sitoplazmadaki enzimleri hızla çalıştırabilir.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Bir kişinin kanında çok fazla hormon ölçülmesine rağmen (örneğin obezitede çok yüksek insülin), hücreler bu hormona YANIT VERMİYORSA sorun aşağıdakilerden hangisi olabilir?',
        options: [
          { id: 'A', text: 'Hormonun rengi bozulmuştur.' },
          { id: 'B', text: 'Hücredeki reseptörler (alıcılar) duyarlılığını kaybetmiş (Direnç gelişmiş) olabilir.' },
          { id: 'C', text: 'Hormon çok küçüktür.' },
          { id: 'D', text: 'Kalp kanı yavaş pompalamıştır.' },
          { id: 'E', text: 'Kişi çok fazla su içmiştir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanda hormon olsa bile reseptör çalışmıyorsa veya duyarsızlaşmışsa (insülin direnci gibi) hücre tepki veremez.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Başka bir endokrin bezi uyararak onun hormon üretmesini sağlayan yönlendirici hormonlara (Örneğin TSH\'nin tiroiti uyarması gibi) genel olarak ne ad verilir?',
        options: [
          { id: 'A', text: 'Tropik (Yönlendirici) hormon' },
          { id: 'B', text: 'Steroit hormon' },
          { id: 'C', text: 'Sindirici hormon' },
          { id: 'D', text: 'Saprofit hormon' },
          { id: 'E', text: 'Ototrof hormon' }
        ],
        correctOptionId: 'A',
        explanation: 'Hipofizden salgılanıp diğer bezleri (tiroit, böbreküstü bezi gibi) uyaran hormonlara tropik hormonlar denir.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Hormon kelimesinin tanımı yapıldığında aşağıdakilerden hangisi EN DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Kasılmayı sağlayan ipliksi proteinlerdir.' },
          { id: 'B', text: 'Sindirim kanalında besinleri parçalayan asitlerdir.' },
          { id: 'C', text: 'Sadece beyin tarafından üretilen sıvılardır.' },
          { id: 'D', text: 'Çok düşük miktarlarda bile kanla taşınıp hedef hücrelerin işlevini değiştiren kimyasal habercilerdir.' },
          { id: 'E', text: 'Gözümüzün rengini belirleyen boyalardır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Hormonlar, kana salgılanan, az miktarda olsa bile (çok düşük derişimde) güçlü etkileri olan kimyasal sinyallerdir.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Hipotalamus ve Hipofiz Bezleri',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Beynimizde yer alan, sinir sistemi ile hormon (endokrin) sistemi arasındaki BÜYÜK BAĞLANTIYI (orkestra şefi gibi) kuran merkez neresidir?',
        options: [
          { id: 'A', text: 'Omurilik soğanı' },
          { id: 'B', text: 'Beyincik' },
          { id: 'C', text: 'Hipotalamus' },
          { id: 'D', text: 'Tiroit' },
          { id: 'E', text: 'Omurilik' }
        ],
        correctOptionId: 'C',
        explanation: 'Hipotalamus hem bir sinir merkezidir hem de altındaki hipofiz bezini yöneterek hormonal kontrolü sağlar.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Hipotalamusun hemen altında bir sapla bağlı bulunan, birçok hormonu (Büyüme hormonu, TSH vb.) salgılayan bezin adı nedir?',
        options: [
          { id: 'A', text: 'Tiroit bezi' },
          { id: 'B', text: 'Pankreas' },
          { id: 'C', text: 'Hipofiz bezi' },
          { id: 'D', text: 'Karaciğer' },
          { id: 'E', text: 'Mide' }
        ],
        correctOptionId: 'C',
        explanation: 'Hipofiz bezi, hipotalamusun altında yer alan fasulye büyüklüğünde ama etkisi devasa bir bezdir.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Hipofiz bezinden salgılanarak kemik, kas ve organlara etki edip büyümeyi uyaran (Somatotropin) hormon hangisidir?',
        options: [
          { id: 'A', text: 'Büyüme Hormonu (GH - Growth Hormone)' },
          { id: 'B', text: 'Tiroksin' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'Aldosteron' }
        ],
        correctOptionId: 'A',
        explanation: 'Büyüme hormonu (GH), özellikle iskelet ve kas sisteminde hücre çoğalmasını ve büyümeyi destekler.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Büyüme hormonunun (GH) ÇOCUKLUK çağında gereğinden AZ salgılanması durumunda hangi durum ortaya çıkar?',
        options: [
          { id: 'A', text: 'Devlik (Jigantizm)' },
          { id: 'B', text: 'Akromegali' },
          { id: 'C', text: 'Cücelik (Dwarfizm)' },
          { id: 'D', text: 'Guatr' },
          { id: 'E', text: 'Şeker Hastalığı' }
        ],
        correctOptionId: 'C',
        explanation: 'Büyüme hormonu gelişme çağında eksik olursa, kemikler yeterince uzayamaz ve orantılı büyüme geriliği (cücelik) olur.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Hipofiz bezi ön ve arka olarak iki loba ayrılır. Aşağıdakilerden hangisi Ön Hipofiz hormonlarından BİRİDİR?',
        options: [
          { id: 'A', text: 'Tiroit Uyarıcı Hormon (TSH)' },
          { id: 'B', text: 'Mide asidi' },
          { id: 'C', text: 'Safra' },
          { id: 'D', text: 'Oksijen' },
          { id: 'E', text: 'Karbondioksit' }
        ],
        correctOptionId: 'A',
        explanation: 'TSH (Tiroit Uyarıcı Hormon) ön hipofizden salgılanıp tiroit bezini uyarır.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Tiroit Uyarıcı Hormon\'un (TSH) vücuttaki hedef (gideceği) organı neresidir?',
        options: [
          { id: 'A', text: 'Kalp' },
          { id: 'B', text: 'Böbrekler' },
          { id: 'C', text: 'Tiroit bezi' },
          { id: 'D', text: 'Mide' },
          { id: 'E', text: 'Akciğer' }
        ],
        correctOptionId: 'C',
        explanation: 'TSH (Thyroid Stimulating Hormone), doğrudan boynumuzdaki tiroit bezini uyararak onun hormon (Tiroksin) üretmesini sağlar.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'ACTH (Adrenokortikotropik Hormon), hipofizden salgılandıktan sonra HANGİ organı uyarır?',
        options: [
          { id: 'A', text: 'Böbreküstü bezinin korteks (kabuk) bölümünü' },
          { id: 'B', text: 'Gözleri' },
          { id: 'C', text: 'Kulakları' },
          { id: 'D', text: 'Pankreası' },
          { id: 'E', text: 'Karaciğeri' }
        ],
        correctOptionId: 'A',
        explanation: 'ACTH, böbreküstü bezlerinin dış kısmı olan korteksi uyararak kortizol gibi hormonların salgılanmasını sağlar.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Üreme hücrelerinin (sperm ve yumurta) oluşumunu ve gelişimini uyaran hipofiz hormonları (FSH ve LH) genel olarak hangi bezlere etki eder?',
        options: [
          { id: 'A', text: 'Eşey bezlerine (Testis ve Yumurtalıklara)' },
          { id: 'B', text: 'Tiroit bezine' },
          { id: 'C', text: 'Tükürük bezlerine' },
          { id: 'D', text: 'Kalbe' },
          { id: 'E', text: 'Akciğerlere' }
        ],
        correctOptionId: 'A',
        explanation: 'FSH (Folikül Uyarıcı Hormon) ve LH (Lüteinleştirici Hormon) üreme bezlerinde (gonadlarda) gamet ve hormon üretimini kontrol eder.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Kadınlarda hamilelik sonrası SÜT BEZLERİNİ uyararak "süt üretimini" sağlayan (annelik içgüdüsüyle de ilgisi olan) ön hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'Prolaktin (PRL / LTH)' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'TSH' },
          { id: 'D', text: 'İnsülin' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'A',
        explanation: 'Prolaktin, süt bezlerini geliştirir ve sütün üretilmesini sağlar.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'ARKA hipofizden kana verilen, kanın su dengesini (osmotik basıncını) ayarlayan, böbreklerden SUYUN geri emilmesini sağlayan hormon hangisidir?',
        options: [
          { id: 'A', text: 'Oksitosin' },
          { id: 'B', text: 'Antidiüretik Hormon (ADH / Vazopressin)' },
          { id: 'C', text: 'TSH' },
          { id: 'D', text: 'Büyüme Hormonu' },
          { id: 'E', text: 'Kalsitonin' }
        ],
        correctOptionId: 'B',
        explanation: 'ADH (Antidiüretik Hormon), böbreklerde idrarla atılacak suyu kana geri emdirerek (idrarı azaltarak) vücudun su dengesini korur.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'ARKA hipofizden kana verilen OKSİTOSİN hormonunun kadınlardaki GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Boyun uzamasını sağlar' },
          { id: 'B', text: 'Kan şekerini yükseltir' },
          { id: 'C', text: 'Doğum sırasında rahim (uterus) kasılmalarını ve sonrasında memedeki sütün Dışarı Salınmasını (fışkırmasını) sağlar' },
          { id: 'D', text: 'Vücudun su tutmasını sağlar' },
          { id: 'E', text: 'Tiroit bezini çalıştırır' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksitosin hem rahim kaslarını kasarak doğumu kolaylaştırır, hem de emzirme sırasında sütün kanallardan dışarı akmasını (salınımını) sağlar.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Arka hipofiz hormonları olan ADH ve Oksitosin, aslında hipofizin BİZZAT KENDİSİ tarafından mı üretilir, yoksa başka bir yerde üretilip orada mı depolanır?',
        options: [
          { id: 'A', text: 'Hipofizin kendisi üretir.' },
          { id: 'B', text: 'Hipotalamus üretir, arka hipofize gönderir, arka hipofiz sadece depolar ve kana verir.' },
          { id: 'C', text: 'Kalp üretir, beyne yollar.' },
          { id: 'D', text: 'Tiroit üretip hipofize verir.' },
          { id: 'E', text: 'Mide üretip arka hipofize gönderir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Arka hipofiz sadece bir "depo" gibi çalışır. ADH ve Oksitosin, üstündeki merkez olan Hipotalamustaki sinir hücreleri tarafından üretilir.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Eğer vücutta ADH (Antidiüretik Hormon) hiç üretilmezse ne gibi bir sorun yaşanır?',
        options: [
          { id: 'A', text: 'Kişi çok terler ve kilo alır.' },
          { id: 'B', text: 'Böbrekler suyu tutamaz, kişi ÇOK FAZLA VE SEYRELTİK idrara çıkar (Şekersiz diyabet hastalığı).' },
          { id: 'C', text: 'Kişi hiç idrara çıkmaz, su zehirlenmesi yaşar.' },
          { id: 'D', text: 'Kemikler kırılır.' },
          { id: 'E', text: 'Gözler kör olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'ADH eksikliğinde böbrek suyu geri ememez. Günde litrelerce seyreltik idrar atılır ve sürekli su içme ihtiyacı doğar (Diabetes insipidus / Şekersiz diyabet).'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Hipotalamusun ön hipofizi denetlemek için gönderdiği "Salgılatıcı" hormonlara kısaca ne denir?',
        options: [
          { id: 'A', text: 'RH (Releasing Factor / Salgılatıcı Hormon)' },
          { id: 'B', text: 'ATP' },
          { id: 'C', text: 'DNA' },
          { id: 'D', text: 'Enzim' },
          { id: 'E', text: 'Yağ' }
        ],
        correctOptionId: 'A',
        explanation: 'Hipotalamus ön hipofizi RH\'ler (TRH, CRH, GnRH vb.) göndererek uyarır.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Yetişkinlik döneminde (büyüme kıkırdakları kapandıktan sonra) Büyüme Hormonu (GH) aşırı salgılanırsa el, ayak ve yüzde orantısız kemik büyümesi görülür. Bu hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Cücelik' },
          { id: 'B', text: 'Tetani' },
          { id: 'C', text: 'Akromegali' },
          { id: 'D', text: 'Şeker Hastalığı' },
          { id: 'E', text: 'Kansızlık' }
        ],
        correctOptionId: 'C',
        explanation: 'Büyüme çağında fazla GH devlik yapar, ancak erişkinlikte (kıkırdaklar kemikleştikten sonra) aşırı GH salgısı el, ayak, çene gibi uç kısımların irileştiği Akromegaliye neden olur.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Tiroit ve Paratiroit Bezleri',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Boynumuzda gırtlağın önünde, soluk borusunun iki yanında yer alan kelebek şeklindeki endokrin bezin adı nedir?',
        options: [
          { id: 'A', text: 'Hipofiz bezi' },
          { id: 'B', text: 'Pankreas' },
          { id: 'C', text: 'Tiroit bezi' },
          { id: 'D', text: 'Böbreküstü bezi' },
          { id: 'E', text: 'Yumurtalık' }
        ],
        correctOptionId: 'C',
        explanation: 'Boyun bölgesinde, soluk borusuna yapışık şekilde bulunan bez Tiroit bezidir.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Tiroit bezinin ürettiği ve vücudun METABOLİZMA HIZINI (enerji kullanımını, ısı üretimini) ayarlayan temel hormon hangisidir?',
        options: [
          { id: 'A', text: 'Tiroksin (T3/T4)' },
          { id: 'B', text: 'Büyüme Hormonu' },
          { id: 'C', text: 'Oksitosin' },
          { id: 'D', text: 'Prolaktin' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'A',
        explanation: 'Tiroksin hormonu, hücrelerin oksijen ve enerji kullanım hızını belirler, metabolizmayı ayarlar.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Tiroksin hormonunun yapısına katılan ve besinlerle yeterince alınmadığında tiroit bezinin şişmesine (Guatr) neden olan MİNERAL hangisidir?',
        options: [
          { id: 'A', text: 'Demir (Fe)' },
          { id: 'B', text: 'İyot (I)' },
          { id: 'C', text: 'Kalsiyum (Ca)' },
          { id: 'D', text: 'Magnezyum (Mg)' },
          { id: 'E', text: 'Fosfor (P)' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroksinin yapısında iyot atomları bulunur. İyot alınmazsa tiroit hormonu üretemez, hipofizden gelen sürekli TSH uyarısıyla bez durmadan büyür (Basit Guatr).'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Eğer bir kişide Tiroksin hormonu çok FAZLA salgılanırsa (Hipertiroidi), aşağıdakilerden hangisinin görülmesi BEKLENİR?',
        options: [
          { id: 'A', text: 'Kişinin çok üşümesi' },
          { id: 'B', text: 'Çok fazla kilo alması (şişmanlama)' },
          { id: 'C', text: 'Metabolizmanın yavaşlaması' },
          { id: 'D', text: 'Kalp atışının hızlanması, aşırı terleme ve kilo kaybı' },
          { id: 'E', text: 'Sürekli uyku hali' }
        ],
        correctOptionId: 'D',
        explanation: 'Tiroksin fazla olursa metabolizma bir arabanın motoru gibi yüksek devirde çalışır; kalp hızlı atar, ısı üretimi artar (terler) ve enerji hızlı tüketildiği için kilo verir.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Çocukluk döneminde tiroksin hormonunun YETERSİZ salgılanması, fiziksel büyüme geriliği ve Zeka Geriliğine yol açar. Bu hastalığa ne ad verilir?',
        options: [
          { id: 'A', text: 'Kretenizm (Ahmaklık)' },
          { id: 'B', text: 'Diyabet' },
          { id: 'C', text: 'Akromegali' },
          { id: 'D', text: 'Astım' },
          { id: 'E', text: 'Siroz' }
        ],
        correctOptionId: 'A',
        explanation: 'Tiroksin sadece metabolizmayı değil, sinir sisteminin gelişimini de etkiler. Çocuklarda eksikliği zeka geriliği ve cüceliğe (Kretenizm) neden olur.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Tiroit bezinin "Tiroksin" dışında ürettiği, Kandaki Kalsiyum fazlalığını KEMİKLERE geçirerek Kalsiyum seviyesini düşüren hormonun adı nedir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Aldosteron' },
          { id: 'C', text: 'Kalsitonin' },
          { id: 'D', text: 'TSH' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalsitonin (Ca depolatan hormon), kanda artan kalsiyumu (Ca+2) kemiklere gönderir, böylece kandaki seviyeyi normale (aşağıya) çeker.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Tiroit bezinin arka yüzeyinde, 4 adet küçük mercimek tanesi gibi duran ve kandaki kalsiyumu YÜKSELTMEYE çalışan bezin adı nedir?',
        options: [
          { id: 'A', text: 'Hipofiz' },
          { id: 'B', text: 'Paratiroit Bezi' },
          { id: 'C', text: 'Epifiz Bezi' },
          { id: 'D', text: 'Pankreas' },
          { id: 'E', text: 'Timus' }
        ],
        correctOptionId: 'B',
        explanation: 'Paratiroit bezleri, tiroide gömülü halde bulunur ve Parathormon üreterek düşük kan kalsiyumunu yükseltmeye çalışır.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Paratiroit bezinden salgılanan Parathormon\'un (PTH) görevi nedir?',
        options: [
          { id: 'A', text: 'Kandaki şekeri düşürmek' },
          { id: 'B', text: 'Kandaki kalsiyum düştüğünde, kemiklerden kana kalsiyum GEÇİŞİNİ sağlayarak kan kalsiyumunu YÜKSELTMEK' },
          { id: 'C', text: 'Kandaki kalsiyumu kemiklere depolamak' },
          { id: 'D', text: 'Kalp atışını yavaşlatmak' },
          { id: 'E', text: 'Metabolizmayı hızlandırmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon (PTH), Kalsitonin\'in zıttı (antagonisti) olarak çalışır. Kan kalsiyumu azaldığında kemikleri hafifçe yıkarak kana Ca+2 takviyesi yapar.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Kalsitonin ve Parathormon birlikte vücutta HANGİ mineralin miktarını dengede tutar (Homeostazi)?',
        options: [
          { id: 'A', text: 'Demir (Fe)' },
          { id: 'B', text: 'Sodyum (Na)' },
          { id: 'C', text: 'Kalsiyum (Ca)' },
          { id: 'D', text: 'Oksijen (O2)' },
          { id: 'E', text: 'Potasyum (K)' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalsitonin kanda yüksek olan kalsiyumu düşürür, Parathormon ise düşük kalsiyumu yükseltir. Birlikte Kalsiyum dengesini sağlarlar.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Parathormon (PTH) eksikliğinde kanda kalsiyum oranı çok düşer. Kalsiyum kasların normal çalışması için şarttır. Bu eksiklikte kaslarda sürekli ağrılı KASILMALAR meydana gelir. Bu hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Guatr' },
          { id: 'B', text: 'Diyabet' },
          { id: 'C', text: 'Tetani' },
          { id: 'D', text: 'Anemi' },
          { id: 'E', text: 'Tansiyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalsiyum düşüklüğünde sinirler aşırı uyarılır ve kaslarda kasılıp kalma, şiddetli kramp (Tetani) hali görülür.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Sağlıklı bir insanda kanda kalsiyum seviyesi NORMALİN ÜSTÜNE çıkarsa, hangi hormonun salgısı artarak durumu düzeltmeye çalışır?',
        options: [
          { id: 'A', text: 'Parathormon' },
          { id: 'B', text: 'Kalsitonin' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Büyüme hormonu' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüksek kalsiyumu aşağıya çekmek (kemiklere atmak) için Tiroit bezinden "Kalsitonin" salgılanır.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Parathormon kemiklerden kana kalsiyum geçirmenin YANI SIRA başka hangi organlardan kana kalsiyum geri emilimini (kazanımını) artırır?',
        options: [
          { id: 'A', text: 'Böbrekler ve bağırsaklar' },
          { id: 'B', text: 'Akciğer ve kalp' },
          { id: 'C', text: 'Gözler ve kulaklar' },
          { id: 'D', text: 'Sadece saç telleri' },
          { id: 'E', text: 'Mide asidi' }
        ],
        correctOptionId: 'A',
        explanation: 'PTH, idrarla kalsiyum atılmasını önlemek için böbreklerden; besinlerdeki kalsiyumu daha iyi emmek için D vitamini yardımıyla bağırsaklardan Ca alımını artırır.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Birbirine tamamen ZIT ETKİ gösteren (Örn: biri şekeri yükseltirken diğeri düşüren, biri kalsiyumu yükseltirken diğeri düşüren) hormonlara genel olarak ne ad verilir?',
        options: [
          { id: 'A', text: 'Antagonist (Zıt çalışan) hormonlar' },
          { id: 'B', text: 'Sinerjist (Beraber çalışan) hormonlar' },
          { id: 'C', text: 'Tropik hormonlar' },
          { id: 'D', text: 'Pasif hormonlar' },
          { id: 'E', text: 'Aynı hormonlar' }
        ],
        correctOptionId: 'A',
        explanation: 'Kalsitonin ve Parathormon (veya İnsülin ve Glukagon) birbirinin zıttı işler yaptıkları için Antagonist hormonlardır.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Hipofiz bezi TSH (Tiroit Uyarıcı Hormon) salgılayarak Tiroit bezini uyarır, Tiroksin hormonu üretilir. Kandaki Tiroksin seviyesi YETERLİ düzeye ulaştığında, hipofize "Artık yeter, daha fazla TSH yollama" demesine ne denir?',
        options: [
          { id: 'A', text: 'Pozitif geri bildirim' },
          { id: 'B', text: 'Negatif geri bildirim (Baskılama)' },
          { id: 'C', text: 'Sentez reaksiyonu' },
          { id: 'D', text: 'Hidroliz' },
          { id: 'E', text: 'Oksijenli solunum' }
        ],
        correctOptionId: 'B',
        explanation: 'Üretilen son ürünün (Tiroksin), kendisini ürettiren sisteme (Hipofiz) dur emri vermesi Negatif Geri Bildirim\'dir. Bu sayede hormonlar aşırı artmaz.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Bir doktor hastasının boyun bölgesine dokunduğunda (muayene ettiğinde) aşırı şişlik fark ediyor. Hastanın diyetinde uzun süredir İyot olmadığı tespit ediliyor. Bu hastalığın en bilinen genel adı nedir?',
        options: [
          { id: 'A', text: 'Astım' },
          { id: 'B', text: 'Diyabet' },
          { id: 'C', text: 'Basit Guatr' },
          { id: 'D', text: 'Raşitizm' },
          { id: 'E', text: 'Lösemi' }
        ],
        correctOptionId: 'C',
        explanation: 'İyot eksikliğine bağlı olarak tiroit bezinin aşırı çalışıp büyümesine Basit Guatr denir.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Pankreas, Böbreküstü ve Karma Bezler',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Hem sindirim enzimi üreterek kanalla bağırsağa döken (ekzokrin) hem de hormon üreterek kana veren (endokrin) yapıya sahip KARMA BEZ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Tiroit' },
          { id: 'B', text: 'Hipofiz' },
          { id: 'C', text: 'Pankreas' },
          { id: 'D', text: 'Gözyaşı bezi' },
          { id: 'E', text: 'Tükürük bezi' }
        ],
        correctOptionId: 'C',
        explanation: 'Pankreas, sindirim için enzim, kan şekeri için hormon ürettiğinden karma (miks) bir bezdir.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Pankreasın kana salgıladığı ve YÜKSEK kan şekerini (glikozu) hücrelere geçirerek NORMAL SEVİYEYE DÜŞÜREN hormon hangisidir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Glukagon' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'Kortizol' }
        ],
        correctOptionId: 'A',
        explanation: 'Yemek yedikten sonra artan kan şekerini hücrelere (kas ve karaciğere) sokarak kandan "indiren" hormon İnsülin\'dir.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Uzun süre aç kaldığımızda kan şekerimiz düşer. Pankreasın salgılayarak karaciğerdeki depoları çözüp KAN ŞEKERİNİ YÜKSELTEN hormonu hangisidir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Glukagon' },
          { id: 'C', text: 'Kalsitonin' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Testosteron' }
        ],
        correctOptionId: 'B',
        explanation: 'Glukagon (glikozu kanda çoğaltan), açlık durumunda karaciğere "kana şeker ver" mesajı yollar.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Vücudumuzda İnsülin yeterli üretilmezse veya hücreler insüline tepki vermezse kanda şeker sürekli yüksek kalır ve idrarla atılır. Bu hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Guatr' },
          { id: 'B', text: 'Cücelik' },
          { id: 'C', text: 'Tetani' },
          { id: 'D', text: 'Diabetes Mellitus (Şeker Hastalığı)' },
          { id: 'E', text: 'Kretenizm' }
        ],
        correctOptionId: 'D',
        explanation: 'İnsülin eksikliği veya insülin direncine bağlı kan şekeri yüksekliğine Şeker Hastalığı (Diabetes Mellitus) denir.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Böbreklerin hemen üstünde yer alan (ama böbrekle doğrudan işlevi olmayan), dışta "Korteks", içte "Öz" bölgesi bulunan endokrin bez hangisidir?',
        options: [
          { id: 'A', text: 'Tiroit' },
          { id: 'B', text: 'Pankreas' },
          { id: 'C', text: 'Böbreküstü Bezi (Adrenal Bez)' },
          { id: 'D', text: 'Hipofiz' },
          { id: 'E', text: 'Timus' }
        ],
        correctOptionId: 'C',
        explanation: 'Böbreklerin üst kısmında şapka gibi duran, stres ve tuz dengesinde görevli bezlere böbreküstü (adrenal) bez denir.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Böbreküstü bezinin İÇ (Öz/Medulla) bölgesinden, KORKU, HEYECAN, STRES (köpekten kaçmak gibi) anında kana aniden salgılanan hormon hangisidir?',
        options: [
          { id: 'A', text: 'Adrenalin (Epinefrin)' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Aldosteron' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'FSH' }
        ],
        correctOptionId: 'A',
        explanation: 'Adrenalin, acil durum hormonudur. Kalbi hızlandırır, kan şekerini artırır, savaş ya da kaç tepkisini hazırlar.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Adrenalin salgılandığında vücutta aşağıdakilerden hangisi OLMAZ?',
        options: [
          { id: 'A', text: 'Kalp atışı hızlanır' },
          { id: 'B', text: 'Göz bebekleri büyür' },
          { id: 'C', text: 'Solunum hızlanır (Bronşlar genişler)' },
          { id: 'D', text: 'Sindirim sistemi (Mide-Bağırsak) ÇOK HIZLI çalışmaya başlar' },
          { id: 'E', text: 'Kan şekeri yükselir' }
        ],
        correctOptionId: 'D',
        explanation: 'Stres ve tehlike anında vücut enerjisini kalbe ve kaslara yönlendirir; sindirim gibi acil olmayan işlemleri YAVAŞLATIR.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Böbreküstü bezinin DIŞ (Korteks/Kabuk) bölgesinden salgılanan, Kanda Sodyum (Tuz) ve Su tutulumunu sağlarken, Potasyumun atılmasını sağlayan hormon hangisidir?',
        options: [
          { id: 'A', text: 'Adrenalin' },
          { id: 'B', text: 'Aldosteron' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'İnsülin' },
          { id: 'E', text: 'Tiroksin' }
        ],
        correctOptionId: 'B',
        explanation: 'Aldosteron mineral dengesini sağlar. Böbreklere "tuzu (Sodyum) ve suyu tut, potasyumu at" der, böylece kan basıncını yükseltir.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Yine Böbreküstü bezinin Korteksinden salgılanan; uzun süreli stres durumlarında (hastalık, açlık vb.) kan şekerini YÜKSELTEN ve bağışıklığı bastıran "Stres Hormonu" hangisidir?',
        options: [
          { id: 'A', text: 'Kortizol' },
          { id: 'B', text: 'Glukagon' },
          { id: 'C', text: 'Aldosteron' },
          { id: 'D', text: 'Oksitosin' },
          { id: 'E', text: 'Kalsitonin' }
        ],
        correctOptionId: 'A',
        explanation: 'Kortizol, uzun süreli streste protein ve yağları glikoza çevirerek kana şeker sağlar. Ayrıca ilaç olarak alerjilerde (bağışıklığı baskılamak için) kullanılır.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Sadece erkeklerde (testislerde) salgılanarak spermlerin olgunlaşmasını sağlayan ve sakal çıkması, ses kalınlaşması gibi erkeklik özelliklerini ortaya çıkaran eşey hormonu hangisidir?',
        options: [
          { id: 'A', text: 'Testosteron' },
          { id: 'B', text: 'Östrojen' },
          { id: 'C', text: 'Progesteron' },
          { id: 'D', text: 'Tiroksin' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'A',
        explanation: 'Testosteron, erkek eşey hormonudur (androjen).'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Sadece kadınlarda (yumurtalıklarda) salgılanarak rahim duvarını kalınlaştıran, ses inceliği gibi kadınsı özellikleri oluşturan temel eşey hormonları hangileridir?',
        options: [
          { id: 'A', text: 'Sadece Testosteron' },
          { id: 'B', text: 'Östrojen ve Progesteron' },
          { id: 'C', text: 'Kortizol ve Aldosteron' },
          { id: 'D', text: 'İnsülin ve Glukagon' },
          { id: 'E', text: 'Adrenalin ve Noradrenalin' }
        ],
        correctOptionId: 'B',
        explanation: 'Östrojen ve Progesteron, kadınlarda adet döngüsünü, gebeliğe hazırlığı ve ikincil eşey karakterlerini yöneten hormonlardır.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Beynimizde yer alan Epifiz (Pineal) bezinden SADECE KARANLIKTA salgılanan ve uyku-uyanıklık (biyolojik saat) ritmimizi düzenleyen hormon hangisidir?',
        options: [
          { id: 'A', text: 'Melatonin' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'Büyüme Hormonu' }
        ],
        correctOptionId: 'A',
        explanation: 'Melatonin gece uyurken (karanlıkta) en yüksek seviyede salgılanır ve vücudun sirkadiyen (günlük) ritmini ayarlar.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Göğüs kemiğinin arkasında bulunan, çocuklukta büyük olup yaşlandıkça küçülen, T-Lenfosit adı verilen bağışıklık hücrelerinin olgunlaşmasını sağlayan endokrin bez hangisidir?',
        options: [
          { id: 'A', text: 'Timus bezi' },
          { id: 'B', text: 'Tiroit bezi' },
          { id: 'C', text: 'Pankreas' },
          { id: 'D', text: 'Testis' },
          { id: 'E', text: 'Epifiz' }
        ],
        correctOptionId: 'A',
        explanation: 'Timus bezi özellikle bağışıklık (T hücreleri) sisteminin okulu gibidir, erken yaşlarda çok aktiftir.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Mide ve ince bağırsak aslında SİNDİRİM organlarıdır ama kana salgıladıkları Gastrin, Sekretin gibi maddelerle kendi çalışmalarını kontrol ederler. Bu durum onların da bir nevi ne olduğunu gösterir?',
        options: [
          { id: 'A', text: 'Kemik olduklarını' },
          { id: 'B', text: 'Solunum organı olduklarını' },
          { id: 'C', text: 'Endokrin (Hormon üreten) organ özelliği de taşıdıklarını' },
          { id: 'D', text: 'Sadece dış salgı yaptıklarını' },
          { id: 'E', text: 'Görme organı olduklarını' }
        ],
        correctOptionId: 'C',
        explanation: 'Mide ve bağırsak gibi organlar klasik birer bez olmasalar da lokal hormonlar üreterek çalışmaya katılırlar (Karma bez gibi).'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Özetle, kan şekerini DÜŞÜREN tek ana hormon İnsülin iken; kan şekerini YÜKSELTEN hormonlar arasında Glukagon, Adrenalin ve hangisi sayılabilir?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'Kortizol' },
          { id: 'C', text: 'Aldosteron' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'B',
        explanation: 'Glukagon (açlıkta), Adrenalin (ani streste), Kortizol (uzun süreli streste) kan şekerini artıran hormonlardır.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Hormonların Etki Mekanizmaları ve Geri Bildirim (Pekiştirme)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Bir hormonun kanda bulunmasına rağmen belirli bir dokuda (örneğin kasta) hiçbir değişiklik yapmamasının temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Kasın enerji harcamaması' },
          { id: 'B', text: 'Kas hücresinin zarında veya içinde o hormonu tanıyan "reseptörün" bulunmaması' },
          { id: 'C', text: 'Hormonun kasa gitmeyi reddetmesi' },
          { id: 'D', text: 'Kanın kaslara ulaşamaması' },
          { id: 'E', text: 'Hormonun kasılma yeteneğinin olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Hormonlar kanla her yere gider ancak sadece uygun reseptörü olan hücreler onlara yanıt verir. (Kilit-Anahtar uyumu)'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'İç salgı (endokrin) bezlerinden kana salgılanan hormon miktarı genel olarak nasıldır?',
        options: [
          { id: 'A', text: 'Her zaman kanın yarısını oluşturacak kadar fazladır' },
          { id: 'B', text: 'Litrelerce üretilirler' },
          { id: 'C', text: 'Çok çok az miktarda (eser miktarda) salgılanırlar fakat etkileri çok güçlüdür' },
          { id: 'D', text: 'Sadece yaşlandığımızda salgılanırlar' },
          { id: 'E', text: 'Gözle görülebilir katı parçalar halindedirler' }
        ],
        correctOptionId: 'C',
        explanation: 'Hormonlar kanda inanılmaz derecede düşük derişimlerde bulunsalar da hedef hücredeki "ikinci haberci" sistemleri sayesinde mesajları büyütülür ve devasa etkiler yaratır.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir "Geri Bildirim (Feedback)" mekanizmasıdır?',
        options: [
          { id: 'A', text: 'Midenin yiyecekleri ezmesi' },
          { id: 'B', text: 'Kalbin kan pompalaması' },
          { id: 'C', text: 'Kanda tiroit hormonu YÜKSELDİĞİNDE, beynin bunu algılayıp tiroit uyarıcı hormonu (TSH) KESMESİ' },
          { id: 'D', text: 'Kemiklerin uzaması' },
          { id: 'E', text: 'Kanın pıhtılaşması' }
        ],
        correctOptionId: 'C',
        explanation: 'Üretilen maddenin seviyesinin, kendini ürettiren sisteme "dur" veya "devam et" mesajı göndermesine geri bildirim denir.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Testosteron ve Östrojen gibi eşey hormonları kolesterol (yağ) türevidir. Buna göre bu hormonlar hakkında hangisi KESİN söylenebilir?',
        options: [
          { id: 'A', text: 'Peptit yapılıdırlar' },
          { id: 'B', text: 'Suda çok iyi çözünürler' },
          { id: 'C', text: 'Steroit yapılıdırlar ve hücre zarından doğrudan geçebilirler' },
          { id: 'D', text: 'Sadece bebeklerde bulunurlar' },
          { id: 'E', text: 'Reseptörleri hücre dışındadır' }
        ],
        correctOptionId: 'C',
        explanation: 'Kolesterol türevi yağ yapılı hormonlara steroit denir ve yağlı hücre zarından kolayca içeri girerler.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Hipotalamusun salgıladığı RF (Salgılatıcı Faktör) hormonları doğrudan HANGİ organa etki ederek oradan yeni hormonların salgılanmasını başlatır?',
        options: [
          { id: 'A', text: 'Tiroit bezine' },
          { id: 'B', text: 'Mideye' },
          { id: 'C', text: 'Hipofiz bezine' },
          { id: 'D', text: 'Böbreklere' },
          { id: 'E', text: 'Kalbe' }
        ],
        correctOptionId: 'C',
        explanation: 'Hipotalamusun komutları doğrudan hemen altındaki hipofize gider, hipofiz de diğer bezlere emir yollar.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Bir insanın vücudunda su miktarı azaldığında (çok terlediğinde) hipotalamus uyarılır. Sonrasında su kaybını önlemek için HANGİ hormon devreye girer?',
        options: [
          { id: 'A', text: 'Büyüme Hormonu (GH)' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'Oksitosin' },
          { id: 'D', text: 'Antidiüretik Hormon (ADH)' },
          { id: 'E', text: 'İnsülin' }
        ],
        correctOptionId: 'D',
        explanation: 'Susuz kalındığında ADH artar, böbreklerden idrara gidecek su zorla kana geri emilir.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'TSH (Tiroit Uyarıcı Hormon) HANGİ bezden üretilip, HANGİ bezi uyarır?',
        options: [
          { id: 'A', text: 'Tiroitten üretilir, Hipofizi uyarır' },
          { id: 'B', text: 'Mideden üretilir, Kalbi uyarır' },
          { id: 'C', text: 'Hipotalamustan üretilir, Pankreası uyarır' },
          { id: 'D', text: 'Hipofizden üretilir, Tiroit bezini uyarır' },
          { id: 'E', text: 'Böbrekten üretilir, Böbreküstü bezini uyarır' }
        ],
        correctOptionId: 'D',
        explanation: 'TSH\'nin tam adı Tiroit Stimüle Edici (Uyarıcı) Hormondur. Hipofiz tarafından üretilir, hedefi tiroittir.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Oksitosin ve ADH (Vazopressin) hormonlarının ÖZEL durumu nedir?',
        options: [
          { id: 'A', text: 'İkisi de kan şekerini düşürür.' },
          { id: 'B', text: 'İkisi de sadece erkeklerde bulunur.' },
          { id: 'C', text: 'Hipofizde ÜRETİLMEZLER, hipotalamusta üretilip arka hipofizde depolanırlar.' },
          { id: 'D', text: 'Sindirim enzimidirler.' },
          { id: 'E', text: 'Kemikleri eritirler.' }
        ],
        correctOptionId: 'C',
        explanation: 'Arka hipofiz kendi hormonunu üretemez. Hipotalamusun ürettiği Oksitosin ve ADH\'yi depo eder.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Hangi iki hormon Kalsiyum dengesi için zıt (antagonist) çalışır?',
        options: [
          { id: 'A', text: 'İnsülin - Glukagon' },
          { id: 'B', text: 'Kalsitonin - Parathormon' },
          { id: 'C', text: 'Adrenalin - Kortizol' },
          { id: 'D', text: 'FSH - LH' },
          { id: 'E', text: 'ADH - Oksitosin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsitonin kalsiyumu kemiğe geçirip düşürür, Parathormon kemikten kana geçirip yükseltir.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Hangi iki hormon Şeker (Glikoz) dengesi için zıt (antagonist) çalışır?',
        options: [
          { id: 'A', text: 'Kalsitonin - Parathormon' },
          { id: 'B', text: 'TSH - ACTH' },
          { id: 'C', text: 'İnsülin - Glukagon' },
          { id: 'D', text: 'Aldosteron - Kortizol' },
          { id: 'E', text: 'Östrojen - Progesteron' }
        ],
        correctOptionId: 'C',
        explanation: 'İnsülin kan şekerini düşürür, Glukagon kan şekerini yükseltir.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'ACTH (Adrenokortikotropik hormon) hangi organın HANGİ bölümünü uyarır?',
        options: [
          { id: 'A', text: 'Böbreğin iç kısmını' },
          { id: 'B', text: 'Böbreküstü bezinin kabuk (korteks) kısmını' },
          { id: 'C', text: 'Tiroit bezini' },
          { id: 'D', text: 'Pankreası' },
          { id: 'E', text: 'Kalbi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kortikotropik kelimesindeki "Kortiko" korteksi temsil eder. ACTH, böbreküstü bezinin korteksini uyararak kortizol gibi hormonların çıkmasını sağlar.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Vücudumuzdaki hormonların BÜYÜK bir çoğunluğu kimyasal olarak ne yapılıdır?',
        options: [
          { id: 'A', text: 'Glikoz (Şeker) yapılıdır' },
          { id: 'B', text: 'Peptit / Protein yapılıdır' },
          { id: 'C', text: 'Su yapılıdır' },
          { id: 'D', text: 'DNA yapılıdır' },
          { id: 'E', text: 'Sadece demir atomundan oluşur' }
        ],
        correctOptionId: 'B',
        explanation: 'Hormonların çoğu (İnsülin, Glukagon, Hipofiz hormonları vb.) protein/peptit yapılıdır ve genetik şifreye göre ribozomlarda sentezlenirler.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Eğer bir hücre protein yapılı bir hormon (Örneğin İnsülin) üretiyorsa, bu hücrenin içinde HANGİ organelin çok aktif çalışması beklenir?',
        options: [
          { id: 'A', text: 'Sadece Koful' },
          { id: 'B', text: 'Ribozom ve Golgi Aygıtı (Salgı paketleme)' },
          { id: 'C', text: 'Sentrozom' },
          { id: 'D', text: 'Lizozom' },
          { id: 'E', text: 'Siller' }
        ],
        correctOptionId: 'B',
        explanation: 'Protein sentezi ribozomda yapılır, bu proteinin hormona (salgıya) dönüşüp paketlenmesi Golgi aygıtında gerçekleşir.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Pankreastan insülin salgılandığında kan şekeri düşer. Şeker normale (düşük seviyeye) geldiğinde insülin salgısı AZALIR. Buna ne ad verilir?',
        options: [
          { id: 'A', text: 'Negatif Feedback (Geri Bildirim)' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'Mayoz bölünme' },
          { id: 'D', text: 'Fagositoz' },
          { id: 'E', text: 'Sentez' }
        ],
        correctOptionId: 'A',
        explanation: 'Sonuçların (şekerin düşmesinin), süreci başlatan asıl salgıyı (insülini) yavaşlatması negatif geri bildirimdir.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Böbreküstü bezinin "Öz (Medulla)" bölgesi hormonları olan Adrenalin ve Noradrenalin, hipofizden gelen hormonlarla DEĞİL, doğrudan HANGİ SİSTEMİN uyarısıyla salgılanır?',
        options: [
          { id: 'A', text: 'Sadece kas sistemi' },
          { id: 'B', text: 'Sempatik Sinir Sistemi (Otonom sinirler)' },
          { id: 'C', text: 'Lenf sistemi' },
          { id: 'D', text: 'Solunum sistemi' },
          { id: 'E', text: 'Sindirim sistemi' }
        ],
        correctOptionId: 'B',
        explanation: 'Tehlike anında zaman kaybedilmez. Adrenal öz bölgesi hipofizi beklemez, doğrudan sempatik sinirlerle saniyeler içinde aniden uyarılır.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Hipotalamus-Hipofiz-Tiroit Ekseni Yorumlama',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Hipotalamustan TRH salgılanır -> Ön Hipofizden TSH salgılanır -> Tiroit bezinden Tiroksin salgılanır. Buna göre Tiroksin hormonu vücutta yeterli seviyeye ulaştığında TSH ve TRH miktarında nasıl bir değişim beklenir?',
        options: [
          { id: 'A', text: 'İkisi de artmaya devam eder' },
          { id: 'B', text: 'Negatif geri bildirimle TSH ve TRH salgısı AZALIR (Baskılanır)' },
          { id: 'C', text: 'Sadece TSH artar, TRH azalır' },
          { id: 'D', text: 'Hiçbir değişiklik olmaz' },
          { id: 'E', text: 'Tiroit bezi yok olur' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanımızda tiroksin normalin üstüne çıkarsa, hipotalamus ve hipofiz bunu algılayıp "yeterli ürettik" diyerek üretim sinyalini (TRH ve TSH) keserler.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Bir hastanın kan testinde "Tiroksin seviyesi ÇOK DÜŞÜK, TSH seviyesi ise ÇOK YÜKSEK" çıkmıştır. Bu durumun en mantıklı açıklaması nedir?',
        options: [
          { id: 'A', text: 'Hipofiz bezi hiç çalışmamaktadır.' },
          { id: 'B', text: 'Tiroit bezi hastalanmış veya iyot bulamadığı için hormon üretememektedir. Beyin ise onu zorlamak için sürekli TSH pompalamaktadır.' },
          { id: 'C', text: 'Hasta çok fazla tiroit ilacı yutmuştur.' },
          { id: 'D', text: 'Pankreas iflas etmiştir.' },
          { id: 'E', text: 'Büyüme hormonu çok artmıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer üretim yoksa (Tiroksin düşük), beyin sürekli uyarı yollar (TSH yüksek). Bu, sorunun bizzat Tiroit bezinde (birincil) olduğunu gösterir.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Büyüme hormonu (GH) hedef organ olarak sadece kemikleri mi uyarır?',
        options: [
          { id: 'A', text: 'Evet, sadece uzun kemikleri uyarır.' },
          { id: 'B', text: 'Hayır, hem kemikleri, hem kasları, hem kıkırdakları hem de karaciğeri uyararak bütün vücudun büyüme ve protein sentezini destekler.' },
          { id: 'C', text: 'Sadece beyni uyarır.' },
          { id: 'D', text: 'Sadece kalp kasını uyarır.' },
          { id: 'E', text: 'Sadece üreme hücrelerini uyarır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyüme hormonu neredeyse tüm hücrelerde anabolik (yapım) faaliyetlerini artırır; hedefi tüm vücuttur (özellikle kas ve iskelet).'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Böbreklerden suyun geri emilimini sağlayan ADH hormonunun DİĞER adı "Vazopressin"dir (Damar Daraltıcı). Bu durum ADH\'nin şiddetli kanamalarda veya su kaybında kan basıncı üzerinde nasıl bir etki yapabileceğini gösterir?',
        options: [
          { id: 'A', text: 'Kan basıncını daha da düşürür' },
          { id: 'B', text: 'Kan damarlarını daraltarak ve suyu tutarak Kan Basıncını YÜKSELTİR' },
          { id: 'C', text: 'Kalbi durdurur' },
          { id: 'D', text: 'Kan şekerini yükseltir' },
          { id: 'E', text: 'Kemikleri zayıflatır' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyük su kaybı veya kanamalarda ADH çok yüksek miktarda salgılanır, damarları büzer (vazo-press) ve suyu koruyarak düşen tansiyonu kurtarmaya çalışır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Kadınlarda FSH (Folikül Uyarıcı Hormon) yumurtalıktaki folikülü uyarır ve yumurta gelişimini başlatır. FSH etkisiyle folikülden ÖSTROJEN salgılanır. Artan östrojen hipofize negatif geri bildirim yaparsa hangi hormonun salgısı DÜŞER?',
        options: [
          { id: 'A', text: 'Oksitosin' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'FSH' },
          { id: 'D', text: 'Tiroksin' },
          { id: 'E', text: 'Kortizol' }
        ],
        correctOptionId: 'C',
        explanation: 'Östrojen kimin uyarısıyla üretildi? FSH. O zaman artan östrojen dönüp onu ürettiren FSH\'yi baskılar (Negatif Feedback).'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Bir memeli hayvana dışarıdan sürekli olarak yüksek dozda Tiroksin hormonu iğneyle verilirse, hayvanın kendi ürettiği TSH miktarında nasıl bir değişim gözlenir?',
        options: [
          { id: 'A', text: 'Sürekli artar' },
          { id: 'B', text: 'TSH salgısı DÜŞER (Baskılanır)' },
          { id: 'C', text: 'Değişmez' },
          { id: 'D', text: 'Sıfıra inmez ama sürekli dalgalanır' },
          { id: 'E', text: 'Hemen devleşir' }
        ],
        correctOptionId: 'B',
        explanation: 'Dışarıdan (ilaçla) verilen hormon da kanda yüksek seviyeye ulaşır. Beyin bunu algılar ve "içeride yeterince var, üretmeye gerek yok" diyerek TSH\'yi keser.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Gelişme döneminde (çocuklukta) İyot eksikliği yaşayan bir çocukta HANGİ iki sorunun BİRLİKTE görülme olasılığı çok yüksektir?',
        options: [
          { id: 'A', text: 'Devlik ve Şeker hastalığı' },
          { id: 'B', text: 'Sık idrara çıkma ve susama' },
          { id: 'C', text: 'Zeka geriliği (Kretenizm) ve Boyun bölgesinde şişlik (Guatr)' },
          { id: 'D', text: 'Kemik erimesi ve Kas ağrıları' },
          { id: 'E', text: 'Ses kalınlaşması ve sakal çıkması' }
        ],
        correctOptionId: 'C',
        explanation: 'İyot olmazsa Tiroksin yapılamaz. Çocuğun beyni gelişemez (zeka geriliği) ve hipofiz TSH yollayarak tiroiti sürekli büyütür (guatr).'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Tiroidin Kalsitonin hormonu kalsiyumu kemiğe geçirir. Eğer bir kişide Kalsitonin normalden ÇOK FAZLA salgılanırsa KAN KALSİYUM düzeyi nasıl etkilenir?',
        options: [
          { id: 'A', text: 'Kan kalsiyumu artar' },
          { id: 'B', text: 'Kan kalsiyumu tehlikeli boyutlarda DÜŞEBİLİR' },
          { id: 'C', text: 'Hiçbir değişiklik olmaz' },
          { id: 'D', text: 'Kan şekeri düşer' },
          { id: 'E', text: 'Sodyum yükselir' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsitonin kandaki kalsiyumu kemiklere süpürür. Eğer durmadan aşırı çalışırsa kanda kalsiyum kalmaz (Hipokalsemi).'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Parathormon kemiklerdeki kalsiyumu kana geçirir. Menopoz sonrası kadınlarda (veya yaşlılarda) Parathormon\'un Kalsitonin\'e göre DAHA BASKIN çalışması HANGİ hastalığa zemin hazırlar?',
        options: [
          { id: 'A', text: 'Kemik Erimesi (Osteoporoz)' },
          { id: 'B', text: 'Şeker hastalığı' },
          { id: 'C', text: 'Guatr' },
          { id: 'D', text: 'Devlik' },
          { id: 'E', text: 'Cücelik' }
        ],
        correctOptionId: 'A',
        explanation: 'Kalsiyum sürekli kemikten çekilip kana verilirse kemiğin içi boşalır, zayıflar ve kolay kırılır hale gelir (Osteoporoz).'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Kış aylarında dışarıda çok üşüdüğümüzde vücut sıcaklığımızı artırmak için Hipotalamus-Hipofiz-Tiroit ekseni nasıl bir tepki verir?',
        options: [
          { id: 'A', text: 'Salgıları durdurarak uykuyu getirir' },
          { id: 'B', text: 'TRH artar -> TSH artar -> Tiroksin artar ve Metabolizma hızlanarak Isı üretilir' },
          { id: 'C', text: 'Sadece insülin artar' },
          { id: 'D', text: 'Sadece terleme artar' },
          { id: 'E', text: 'Kaslar erimeye başlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Soğukta vücudun ısı üretmesi gerekir. Bunun en iyi yolu, hücrelerin çalışma hızını (metabolizmayı) tiroksin ile artırmaktır.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Hipofiz bezi ameliyatla ALINAN (çıkarılan) bir farede aşağıdaki olaylardan hangisi BEKLENMEZ?',
        options: [
          { id: 'A', text: 'Tiroit bezinin küçülmesi ve tiroksinin azalması' },
          { id: 'B', text: 'Adrenal korteksin küçülmesi (ACTH yokluğunda)' },
          { id: 'C', text: 'Kan şekerinin her yemekten sonra İNSÜLİNLE düzgünce DÜŞÜRÜLMESİ' },
          { id: 'D', text: 'Üreme hücrelerinin (FSH/LH yokluğunda) gelişememesi' },
          { id: 'E', text: 'Büyümenin durması (GH yokluğunda)' }
        ],
        correctOptionId: 'C',
        explanation: 'Pankreasın insülin salgılaması KAN ŞEKERİNE bağlıdır, hipofizden bağımsızdır. Yani hipofiz olmasa da pankreas şekeri algılayıp insülin üretebilir. Diğerleri ise hipofizin emrindedir (Tiroit, Adrenal korteks, Eşey bezleri, Kemikler).'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Bir hastada sürekli uyku hali, kilo alma, üşüme ve halsizlik belirtileri var. Kan testinde T3/T4 hormonları DÜŞÜK bulunuyor. Bu tablo neyin göstergesidir?',
        options: [
          { id: 'A', text: 'Hipertiroidi (Zehirli Guatr)' },
          { id: 'B', text: 'Hipotiroidi (Tiroit Yetersizliği)' },
          { id: 'C', text: 'Tip-1 Diyabet' },
          { id: 'D', text: 'Akromegali' },
          { id: 'E', text: 'Tetani' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroit hormonunun az olmasına Hipotiroidi denir ve motor rölantide çalışır gibi metabolizma yavaşlar.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Büyüme çağındaki bir çocukta, kemiklerdeki uzamanın (büyüme kıkırdaklarının) kapanmadan SÜREKLİ GH (Büyüme Hormonu) salgılanması sonucu görülen boyun 2 metreyi aştığı durum nedir?',
        options: [
          { id: 'A', text: 'Devlik (Jigantizm)' },
          { id: 'B', text: 'Cücelik' },
          { id: 'C', text: 'Akromegali' },
          { id: 'D', text: 'Kemik erimesi' },
          { id: 'E', text: 'Mikrosefali' }
        ],
        correctOptionId: 'A',
        explanation: 'Kıkırdaklar kemikleşmeden (ergenlik bitmeden) önce çok fazla GH devliğe sebep olur.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Tiroit bezinin C hücrelerinden salgılanan "Kalsitonin", böbreklerde kalsiyum emilimini nasıl etkiler?',
        options: [
          { id: 'A', text: 'Kalsiyumun böbreklerden idrarla atılmasını HIZLANDIRIR (Kana geri emilimi azaltır)' },
          { id: 'B', text: 'Kalsiyumun hepsini kana çeker' },
          { id: 'C', text: 'Böbreği yok eder' },
          { id: 'D', text: 'Böbrekte kalsiyum taşına dönüştürür' },
          { id: 'E', text: 'Sadece su emilimini artırır' }
        ],
        correctOptionId: 'A',
        explanation: 'Kalsitoninin amacı kandaki fazla kalsiyumdan KURTULMAKTIR. Bu yüzden bir kısmını kemiğe iter, fazlasını da böbrekten idrarla dışarı attırır.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Hipofizin ARKA lobu neden gerçek bir endokrin BEZ olarak kabul edilmez?',
        options: [
          { id: 'A', text: 'Sadece sinir hücrelerinden oluştuğu ve kendi hormonunu (ADH, Oksitosin) SENTEZLEMEDİĞİ için' },
          { id: 'B', text: 'Çok küçük olduğu için' },
          { id: 'C', text: 'Kafatasında bulunmadığı için' },
          { id: 'D', text: 'Sadece kadınlarda olduğu için' },
          { id: 'E', text: 'Kan damarı içermediği için' }
        ],
        correctOptionId: 'A',
        explanation: 'Arka hipofiz epitel dokudan değil, hipotalamustan inen sinir aksonlarından oluşur. Hormon üretmez, sadece hipotalamusun ürettiklerini depolar.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Kan Şekeri ve Kalsiyum Homeostazisi Yorumlama',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Karbonhidrat ağırlıklı büyük bir yemek yedikten 1 saat sonra kanınızdaki glikoz seviyesi yükselir. Bu durumu normale çevirmek için hangi organ, hangi hormonu salgılar?',
        options: [
          { id: 'A', text: 'Karaciğer - Glukagon' },
          { id: 'B', text: 'Pankreas - İnsülin' },
          { id: 'C', text: 'Tiroit - Tiroksin' },
          { id: 'D', text: 'Böbreküstü bezi - Kortizol' },
          { id: 'E', text: 'Hipofiz - TSH' }
        ],
        correctOptionId: 'B',
        explanation: 'Tokluk anında yükselen şekeri düşürmek için Pankreas (Beta hücreleri) İnsülin salgılar.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'İnsülin hormonu KAS ve YAĞ hücrelerine bağlandığında hücre içinde nasıl bir tepkiye yol açar?',
        options: [
          { id: 'A', text: 'Hücre içindeki glikozu kana atar' },
          { id: 'B', text: 'Hücre zarındaki glikoz kanallarını açarak, kandaki şekerin HÜCRE İÇİNE girmesini sağlar' },
          { id: 'C', text: 'Hücreyi öldürür' },
          { id: 'D', text: 'Sadece protein sentezini durdurur' },
          { id: 'E', text: 'Su çıkışını sağlar' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin kapıyı açan bir anahtardır; şekerin hücreye girmesini sağlayarak kandaki miktarı (şekeri) düşürür.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Ramazan ayında uzun süre oruç tuttuğunuzda veya saatlerce aç kaldığınızda kan şekeriniz düşer. Bu sırada beynin şekersiz kalmaması için pankreasın "Alfa" hücreleri hangi hormonu salgılar?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Kalsitonin' },
          { id: 'C', text: 'Glukagon' },
          { id: 'D', text: 'Aldosteron' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'C',
        explanation: 'Açlık durumunda kan şekerini yükseltmek için Glukagon salgılanır.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Glukagon hormonu, kan şekerini yükseltmek için EN ÇOK hangi organı uyarır ve oradaki Glikojen depolarını parçalatır?',
        options: [
          { id: 'A', text: 'Kalp' },
          { id: 'B', text: 'Karaciğer' },
          { id: 'C', text: 'Akciğer' },
          { id: 'D', text: 'Beyin' },
          { id: 'E', text: 'Dalak' }
        ],
        correctOptionId: 'B',
        explanation: 'Karaciğer vücudun glikoz deposudur. Glukagon karaciğeri uyararak depo glikojeni glikoza çevirtip kana verdirtir.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Tip-1 Diyabet (Şeker hastalığı) ile Tip-2 Diyabet arasındaki TEMEL fark nedir?',
        options: [
          { id: 'A', text: 'İkisi de aynıdır, sadece isimleri farklıdır.' },
          { id: 'B', text: 'Tip-1\'de pankreas İnsülin ÜRETEMEZ. Tip-2\'de ise insülin vardır ama hücreler (reseptörler) insüline TEPKİ VERMEZ (Direnç).' },
          { id: 'C', text: 'Tip-1 yaşlılarda, Tip-2 sadece bebeklerde olur.' },
          { id: 'D', text: 'Tip-1 şekeri düşürür, Tip-2 şekeri yükseltir.' },
          { id: 'E', text: 'Tip-1 sadece erkeklerde, Tip-2 kadınlarda görülür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tip-1 mutlak insülin eksikliğidir (bağışıklık pankreası vurur). Tip-2 ise aşırı kilo/kötü beslenme sonucu hücrelerin insüline sağırlaşmasıdır (İnsülin Direnci).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Şeker hastalarında kan glikozu idrara sızar. İdrardaki glikozun ozmotik basıncı (suyu çekme gücü) yüksek olduğu için bu hastalarda HANGİ BELİRTİLER ortaya çıkar?',
        options: [
          { id: 'A', text: 'Hiç idrara çıkamama ve su içmeme' },
          { id: 'B', text: 'Çok sık idrara çıkma (Poliüri) ve Çok su içme (Polidipsi)' },
          { id: 'C', text: 'Terlemenin tamamen durması' },
          { id: 'D', text: 'Sürekli üşüme' },
          { id: 'E', text: 'Göz bebeklerinin küçülmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Glikoz idrara geçerken yanında bol miktarda suyu da çeker. Vücut su kaybettiği için kişi sürekli susar ve çok su içer.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Sağlıklı bir insanda İdrarda glikoza rastlanmamasının nedeni nedir?',
        options: [
          { id: 'A', text: 'Böbreklere hiç glikoz gitmemesi' },
          { id: 'B', text: 'İnsülin sayesinde kan şekerinin normal sınırlarda kalması ve süzülen glikozun böbreklerden KANA GERİ EMİLMESİ' },
          { id: 'C', text: 'Glikozun midede sindirilmesi' },
          { id: 'D', text: 'Böbreğin şekeri yakıt olarak harcaması' },
          { id: 'E', text: 'Glukagonun şekeri gizlemesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Normalde kanda şeker belirli bir sınırın altındadır ve böbrekler süzen glikozun %100\'ünü geri emer. Diyabette şeker eşik değeri aşar, emilemeyen kısmı idrara taşar.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Vücudumuz kalsiyuma neden ihtiyaç duyar? (Kalsiyumun görevleri nelerdir?)',
        options: [
          { id: 'A', text: 'Sadece saç tellerini uzatmak için' },
          { id: 'B', text: 'Kasların kasılması, Sinirsel iletim, Kemik gelişimi ve Kanın pıhtılaşması için' },
          { id: 'C', text: 'Sadece idrar üretmek için' },
          { id: 'D', text: 'Gözyaşı üretmek için' },
          { id: 'E', text: 'Sesi inceltmek için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyum sadece kemik için değil; kalbin atması, iskelet kaslarının kasılması, sinir hücresi uçlarından nörotransmitter salınımı ve pıhtılaşma şelalesi için hayati önemdedir.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Kanda Kalsiyum düştüğünde Parathormon sadece kemiğe değil, Bağırsaklara da etki eder. Bağırsaklardan kalsiyum emilimini HANGİ VİTAMİNİ aktifleştirerek sağlar?',
        options: [
          { id: 'A', text: 'C Vitamini' },
          { id: 'B', text: 'A Vitamini' },
          { id: 'C', text: 'D Vitamini' },
          { id: 'D', text: 'B12 Vitamini' },
          { id: 'E', text: 'K Vitamini' }
        ],
        correctOptionId: 'C',
        explanation: 'Parathormon, böbrekte D vitaminini aktif forma çevirir; aktif D vitamini de bağırsaklardan kalsiyum emilimini artırır.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Paratiroit bezi TÜMÜYLE çıkarılan (veya hasar gören) bir hastada ne gibi bir sorun ortaya çıkması KESİNDİR?',
        options: [
          { id: 'A', text: 'Kandaki kalsiyum yükselir ve böbrek taşı oluşur' },
          { id: 'B', text: 'Kandaki kalsiyum ÇOK DÜŞER, kaslarda ağrılı kramplar (Tetani) ve ölüm riski oluşur' },
          { id: 'C', text: 'Kan şekeri sıfırlanır' },
          { id: 'D', text: 'Kişi çok hızlı uzar' },
          { id: 'E', text: 'Hiçbir sorun yaşanmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'PTH (Parathormon) olmazsa kalsiyum yükseltilemez. Kandaki Ca+2 dibe vurunca kaslar kilitlenir.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi Kan Şekerini YÜKSELTEN hormonlardan biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'İnsülin' },
          { id: 'E', text: 'Büyüme Hormonu (Dolaylı olarak glikoz kullanımını kısıtlayarak)' }
        ],
        correctOptionId: 'D',
        explanation: 'İnsülin kandaki glikozu hücreye soktuğu için kan şekerini DÜŞÜREN tek ana hormondur.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Bir birey çok tatlı bir yaş pasta yediğinde, sırasıyla Pankreasın HANGİ hücreleri uyarılır ve HANGİ hormonu salgılar?',
        options: [
          { id: 'A', text: 'Alfa hücreleri -> Glukagon' },
          { id: 'B', text: 'Beta hücreleri -> İnsülin' },
          { id: 'C', text: 'Delta hücreleri -> Adrenalin' },
          { id: 'D', text: 'Gama hücreleri -> Tiroksin' },
          { id: 'E', text: 'Folikül hücreleri -> TSH' }
        ],
        correctOptionId: 'B',
        explanation: 'Şeker yüksekliği Pankreas adacıklarındaki Beta (β) hücrelerini uyarır, insülin kana verilir.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Pankreas, İnsülin ve Glukagon salgısını NEYE GÖRE belirler?',
        options: [
          { id: 'A', text: 'Hipofizden gelen emirlere göre' },
          { id: 'B', text: 'Kandaki Glikoz (Şeker) yoğunluğuna göre (Doğrudan algılar)' },
          { id: 'C', text: 'Sempatik sinirlerin emrine göre' },
          { id: 'D', text: 'Oksijen miktarına göre' },
          { id: 'E', text: 'Mide asidine göre' }
        ],
        correctOptionId: 'B',
        explanation: 'Pankreas, glikoz seviyesi için hipofizden (TSH veya ACTH gibi) emir beklemez; doğrudan kandaki şekeri kendi ölçer (Ototrof gibi değil, sensör gibi).'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Böbrek taşlarının (Kalsiyum taşları) oluşma nedenlerinden biri HANGİ hormonun gereğinden FAZLA çalışması olabilir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Parathormon (Sürekli kemikten kana kalsiyum yollayarak böbrekleri kalsiyuma boğması)' },
          { id: 'C', text: 'Adrenalin' },
          { id: 'D', text: 'Oksitosin' },
          { id: 'E', text: 'Aldosteron' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon çok artarsa (Hiperparatiroidizm), kemikler erir, kan kalsiyumdan geçerilmez hale gelir ve bu kalsiyumlar böbrekte çökelerek taş oluşturur.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'İnsülin sadece kas ve karaciğeri değil YAĞ DOKUSUNU (Adipoz doku) da etkiler. İnsülin, yağ dokusunda HANGİ olayı tetikler?',
        options: [
          { id: 'A', text: 'Yağların hızla yakılmasını' },
          { id: 'B', text: 'Glikozun yağ hücrelerine girip YAĞ (Trigliserit) olarak DEPOLANMASINI' },
          { id: 'C', text: 'Yağ hücrelerinin patlamasını' },
          { id: 'D', text: 'Yağların proteine dönüşmesini' },
          { id: 'E', text: 'Yağların kemiğe dönüşmesini' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin bir "depolama (anabolik)" hormonudur. İhtiyaç fazlası şekeri yağ hücrelerine sokar ve yağa çevirerek kilo almamıza (depo yapmamıza) aracılık eder.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Stres, Böbreküstü Bezleri ve Diğer Bezler',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Karanlık bir sokakta aniden karşınıza yırtıcı bir köpek çıktığında kalbinizin fırlayacak gibi atması, nefesinizin hızlanması ve göz bebeklerinizin büyümesi HANGİ hormon sayesinde gerçekleşir?',
        options: [
          { id: 'A', text: 'Aldosteron' },
          { id: 'B', text: 'Kortizol' },
          { id: 'C', text: 'Adrenalin (Epinefrin)' },
          { id: 'D', text: 'İnsülin' },
          { id: 'E', text: 'Kalsitonin' }
        ],
        correctOptionId: 'C',
        explanation: 'Böbreküstü bezinin öz (medulla) bölgesinden salgılanan Adrenalin, Akut (Ani) Stres yanıtını ("Savaş ya da Kaç") başlatır.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Böbreküstü bezi korteksinden (kabuğundan) salgılanan Aldosteron hormonu eksik olursa (Addison Hastalığı) vücutta nasıl bir mineral dengesizliği görülür?',
        options: [
          { id: 'A', text: 'Kanda kalsiyum çok artar.' },
          { id: 'B', text: 'Kanda Sodyum (Tuz) ve Su DÜŞER, Potasyum ARTAR. (Kan basıncı düşer, cilt tunç rengini alır)' },
          { id: 'C', text: 'Vücutta hiç demir kalmaz.' },
          { id: 'D', text: 'Sodyum çok yükselir, tansiyon fırlar.' },
          { id: 'E', text: 'Glikoz idrara karışır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aldosteron tuzu ve suyu tutar, potasyumu atar. Eksikliğinde tuz ve su idrarla kaçar (tansiyon düşer), potasyum kanda zehirli boyuta ulaşır.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Uzun süreli açlıkta veya ağır stres dönemlerinde (örneğin günlerce süren bir hastalık veya sınav haftası) KORTİZOL hormonu ne yapar?',
        options: [
          { id: 'A', text: 'Sadece kalbi hızlandırır.' },
          { id: 'B', text: 'Protein ve yağları parçalayarak GLİKOZA çevirir, kan şekerini artırır ve enerjiyi garantiye alır.' },
          { id: 'C', text: 'Vücudu uyutur.' },
          { id: 'D', text: 'Kemikleri eritir.' },
          { id: 'E', text: 'Tuzu böbrekten atar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kortizol "uzun süreli stres / açlık" hormonudur. Karbonhidrat dışı kaynakları (protein, yağ) şekere çevirerek beynin glikozsuz kalmasını önler.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Kortizol ilaçları (Kortizon) doktorlar tarafından alerji, romatizma veya organ nakli hastalarına NEDEN verilir?',
        options: [
          { id: 'A', text: 'Kasları güçlendirmek için' },
          { id: 'B', text: 'Bağışıklık Sistemini BASKILAMAK (yangıyı/iltihabı durdurmak) için' },
          { id: 'C', text: 'Tansiyonu düşürmek için' },
          { id: 'D', text: 'Boy uzatmak için' },
          { id: 'E', text: 'Saç çıkarmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kortizol yüksek miktarda bağışıklık hücrelerinin çalışmasını durdurur. Bu yüzden aşırı reaksiyonları (alerji) veya nakledilen organın reddini önlemede kullanılır.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Adrenal Korteks (Kabuk) bölümü hormonlarını (Kortizol, Aldosteron) üretmek için BEYİNDEN (Hipofizden) hangi hormonun emrini bekler?',
        options: [
          { id: 'A', text: 'TSH' },
          { id: 'B', text: 'FSH' },
          { id: 'C', text: 'ACTH (Adrenokortikotropik Hormon)' },
          { id: 'D', text: 'GH' },
          { id: 'E', text: 'Prolaktin' }
        ],
        correctOptionId: 'C',
        explanation: 'Korteks bölümü ACTH kontrolündedir. (Öz bölümü ise doğrudan sempatik sinirle uyarılır, ACTH beklemez).'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Epifiz bezinden salgılanan Melatonin hormonunun salgı miktarı gün içinde nasıl değişir?',
        options: [
          { id: 'A', text: 'Öğlen güneş tepedeyken en yüksek seviyededir.' },
          { id: 'B', text: 'Karanlıkta (gece) ARTAR, ışıkta (gündüz) AZALIR.' },
          { id: 'C', text: 'Yemek yedikten hemen sonra artar.' },
          { id: 'D', text: 'Sadece korku anında artar.' },
          { id: 'E', text: '7/24 aynı seviyede kalır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Melatonin ışığa duyarlıdır. Gözden gelen ışık sinyalleri melatonini baskılar. Gece karanlıkta salgılanıp uykuyu düzenler.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Klasik endokrin bez olmadığı halde (Mide, Bağırsak, Kalp, Böbrek gibi) HANGİ organ Kan Basıncı (Tansiyon) çok YÜKSELDİĞİNDE kana "ANP" (Atriyal Natriüretik Peptit) hormonu salgılayarak böbrekten tuz atılımını sağlar ve tansiyonu düşürür?',
        options: [
          { id: 'A', text: 'Karaciğer' },
          { id: 'B', text: 'Akciğer' },
          { id: 'C', text: 'Kalp (Kulakçıklar)' },
          { id: 'D', text: 'Dalak' },
          { id: 'E', text: 'Göz' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalbin kulakçıkları (atriyumlar) aşırı kanla gerildiğinde "ANP" hormonu salgılar, böbreğe tuzu (ve suyu) atmasını söyleyerek kan hacmini ve tansiyonu düşürür.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Yine böbreklerden salgılanan (ve az bir kısmı karaciğerden salgılanan) "Eritropoietin (EPO)" hormonu ne işe yarar?',
        options: [
          { id: 'A', text: 'Mide asidini artırır.' },
          { id: 'B', text: 'Kemik iliğini uyararak Alyuvar (Kırmızı Kan Hücresi) üretimini hızlandırır.' },
          { id: 'C', text: 'Kan şekerini düşürür.' },
          { id: 'D', text: 'Kemikleri eritir.' },
          { id: 'E', text: 'Saç rengini belirler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Deniz seviyesinden yükseklere çıkıldığında oksijen azalır. Böbrek bunu algılayıp EPO hormonu salgılar, kemik iliği daha çok alyuvar üretir.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Böbrek yetmezliği olan hastalarda böbrek iyi çalışmadığı için hangi durumun (hormon eksikliğine bağlı olarak) görülmesi çok olasıdır?',
        options: [
          { id: 'A', text: 'Kansızlık (Anemi) - Eritropoietin üretilemediği için' },
          { id: 'B', text: 'Şeker Hastalığı' },
          { id: 'C', text: 'Devlik' },
          { id: 'D', text: 'Guatr' },
          { id: 'E', text: 'Akromegali' }
        ],
        correctOptionId: 'A',
        explanation: 'Eritropoietin (EPO) böbrekte üretilir. Böbrek bozulursa kemik iliğine kan yap emri gitmez, hasta anemi olur.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Erkeklerde testislerden salgılanan Testosteron hormonunun salgılanması, HİPOFİZDEN gelen hangi hormonun uyarısıyla gerçekleşir?',
        options: [
          { id: 'A', text: 'TSH' },
          { id: 'B', text: 'ACTH' },
          { id: 'C', text: 'LH (Lüteinleştirici Hormon)' },
          { id: 'D', text: 'Prolaktin' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'C',
        explanation: 'LH, testislerdeki Leydig hücrelerini uyararak Testosteron salgılanmasını sağlar.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Aşağıdaki hormon çiftlerinden hangisi BİRBİRİNİN ETKİSİNİ GÜÇLENDİREN (Sinerjist) veya AYNI YÖNDE etki eden hormonlara örnektir?',
        options: [
          { id: 'A', text: 'İnsülin - Glukagon' },
          { id: 'B', text: 'Parathormon - Kalsitonin' },
          { id: 'C', text: 'Adrenalin - Glukagon (İkisi de kan şekerini yükseltir)' },
          { id: 'D', text: 'Aldosteron - ANP' },
          { id: 'E', text: 'Melatonin - Adrenalin' }
        ],
        correctOptionId: 'C',
        explanation: 'Adrenalin ve Glukagon birbirinin zıttı değil, aynı amaca (kan şekerini artırmaya) farklı yollardan hizmet eden sinerjist etki gösterebilirler.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Korku filmi izlerken kalbinizin atışını hızlandıran Adrenalin hormonu BİTTİĞİNDE (film bittiğinde), nabzınızın normale dönmesi neden biraz ZAMAN ALIR?',
        options: [
          { id: 'A', text: 'Sinirler kalbe yapıştığı için' },
          { id: 'B', text: 'Hormonların kanda parçalanması ve böbreklerden atılması belli bir zaman gerektirdiği için (Hormon etkisi uzun sürer)' },
          { id: 'C', text: 'Gözler açık kaldığı için' },
          { id: 'D', text: 'Adrenalin kemiklere saklandığı için' },
          { id: 'E', text: 'Kan pıhtılaştığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Endokrin sistem kanla çalıştığı için hormonun etkisinin başlaması da, kandan temizlenip bitmesi de sinir sistemine göre daha yavaş ve kademelidir.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Bir insanın böbreküstü bezinin kabuk (korteks) kısmı zarar görürse aşağıdakilerden hangisi doğrudan ETKİLENMEZ?',
        options: [
          { id: 'A', text: 'Su ve tuz dengesi (Aldosteron)' },
          { id: 'B', text: 'Glikoz metabolizması ve stres direnci (Kortizol)' },
          { id: 'C', text: 'Cinsiyet hormonlarının (Eşey hormonları) küçük bir kısmı' },
          { id: 'D', text: 'Kan kalsiyumunun düşürülmesi (Kalsitonin)' },
          { id: 'E', text: 'Böbrekte sodyum emilimi' }
        ],
        correctOptionId: 'D',
        explanation: 'Kalsitonin Tiroit bezinden salgılanır, böbreküstü beziyle ilgisi yoktur.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Mideden salgılanıp yine MİDEYİ (Kendi kendini) uyararak mide öz suyu salgılattıran lokal hormon hangisidir?',
        options: [
          { id: 'A', text: 'Sekretin' },
          { id: 'B', text: 'Kolesistokinin (CCK)' },
          { id: 'C', text: 'Gastrin' },
          { id: 'D', text: 'Eritropoietin' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'C',
        explanation: 'Gastrin mideden kana verilir, kanla dolanıp tekrar mideye gelerek mide bezlerini (asit üretmek için) çalıştırır.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Yağ dokusunun sadece bir depo olmadığı, kana "LEPTİN" adı verilen bir hormon salgılayarak beyni (hipotalamusu) ne konuda uyardığı bilinmektedir?',
        options: [
          { id: 'A', text: 'Çok üşüme ve titreme' },
          { id: 'B', text: 'Enerji depolarının dolduğunu ve İŞTAHIN (yeme isteğinin) BASKILANMASI gerektiğini' },
          { id: 'C', text: 'Sürekli su içme isteği' },
          { id: 'D', text: 'Uyku getirme' },
          { id: 'E', text: 'Kalbi hızlandırma' }
        ],
        correctOptionId: 'B',
        explanation: 'Leptin "tokluk" hormonudur. Yağ depoları dolunca beyne sinyal yollayarak yemek yemeği durdurmamızı söyler.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Hipofiz ve Hedef Organ Eşleştirmeleri',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Hipofizin ön lobundan salgılanan ACTH (Adrenokortikotropik Hormon), böbreküstü bezinin kabuk bölgesini uyarır. ACTH salgısı aniden artan bir kişide KANDA hangi hormonun artması KESİN olarak beklenir?',
        options: [
          { id: 'A', text: 'Adrenalin' },
          { id: 'B', text: 'Kortizol' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'B',
        explanation: 'ACTH adrenal korteksi (kabuğu) uyarır. Oradan en çok üretilen stres hormonu Kortizol (ve Aldosteron) kana verilir. Adrenalin öz bölgesindendir, ACTH ile artmaz.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'FSH (Folikül Uyarıcı Hormon) sadece kadınlarda mı etkilidir?',
        options: [
          { id: 'A', text: 'Evet, sadece yumurta üretimi yapar.' },
          { id: 'B', text: 'Hayır, erkeklerde de Testisleri uyararak SPERM üretimini (Spermatogenez) başlatır.' },
          { id: 'C', text: 'Hayır, erkeklerde kalp atışını hızlandırır.' },
          { id: 'D', text: 'Evet, sadece kadınlarda süt üretir.' },
          { id: 'E', text: 'Hayır, erkeklerde sakal çıkarır.' }
        ],
        correctOptionId: 'B',
        explanation: 'FSH ve LH üreme (eşey) hormonlarıdır; hem kadında (yumurtalık) hem erkekte (testis) gamet üretimini kontrol eder.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Kadınlarda "Yumurtlama" (Ovulasyon) olayını, yani olgunlaşan yumurtanın folikülden çıkmasını sağlayan hormon HANGİSİDİR?',
        options: [
          { id: 'A', text: 'FSH' },
          { id: 'B', text: 'LH (Lüteinleştirici Hormon)' },
          { id: 'C', text: 'TSH' },
          { id: 'D', text: 'LTH (Prolaktin)' },
          { id: 'E', text: 'ADH' }
        ],
        correctOptionId: 'B',
        explanation: 'FSH yumurtayı büyütür, LH (Lüteinleştirici Hormon) o folikülü yırtarak yumurtayı dışarı fırlattırır (Ovulasyon).'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Bir annede doğum sonrası yeterli SÜT ÜRETİMİ (sentezi) olmuyorsa, ön hipofizin HANGİ hormonunda eksiklik olduğu düşünülür?',
        options: [
          { id: 'A', text: 'Oksitosin' },
          { id: 'B', text: 'Prolaktin (LTH)' },
          { id: 'C', text: 'FSH' },
          { id: 'D', text: 'ACTH' },
          { id: 'E', text: 'TSH' }
        ],
        correctOptionId: 'B',
        explanation: 'Sütü ÜRETEN hormon Prolaktin\'dir. (Sütü dışarı fışkırtan ise Oksitosin\'dir).'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Oksitosin hormonu doğumdan sonra neden çok önemlidir?',
        options: [
          { id: 'A', text: 'Annede kemikleri sertleştirir' },
          { id: 'B', text: 'Rahim kaslarını KASARAK kanamayı durdurmaya ve rahmin eski boyutuna dönmesine yardımcı olur' },
          { id: 'C', text: 'Saçları uzatır' },
          { id: 'D', text: 'Görme duyusunu artırır' },
          { id: 'E', text: 'Kan şekerini düşürür' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksitosin güçlü bir düz kas kasıcıdır. Doğumda bebeği itmeyi sağladığı gibi, doğumdan sonra da rahmin toparlanmasını hızlandırır.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'ADH (Antidiüretik Hormon) eksikliğinde görülen "Şekersiz Diyabet" hastalığına NEDEN "Diyabet (Şeker hastalığı)" adı verilmiştir?',
        options: [
          { id: 'A', text: 'Kanda şeker çok arttığı için' },
          { id: 'B', text: 'İdrarda şeker bulunduğu için' },
          { id: 'C', text: 'Tıpkı gerçek şeker hastaları gibi "Çok İdrara Çıkma" ve "Çok Su İçme" belirtileri görüldüğü için' },
          { id: 'D', text: 'İnsülin eksikliği ile aynı olduğu için' },
          { id: 'E', text: 'Sadece yaşlılarda görüldüğü için' }
        ],
        correctOptionId: 'C',
        explanation: 'Her iki hastalıkta da (Tip-1/2 Diyabet ve Şekersiz Diyabet) kişi litrelere idrara çıkar ve çok susar. Belirtiler aynı olduğundan eskiler "Şekersiz Diyabet" (Diabetes insipidus) demiştir.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Böbreklerden SADECE suyun geri emilimini sağlayan hormon ile SODYUMUN (tuzun) geri emilimini sağlayan hormonlar sırasıyla hangileridir?',
        options: [
          { id: 'A', text: 'İnsülin ve Glukagon' },
          { id: 'B', text: 'ADH ve Aldosteron' },
          { id: 'C', text: 'Kalsitonin ve Parathormon' },
          { id: 'D', text: 'TSH ve ACTH' },
          { id: 'E', text: 'Adrenalin ve Kortizol' }
        ],
        correctOptionId: 'B',
        explanation: 'Su kanalından suyu çeken ADH; Sodyum pompasını çalıştırıp tuzu (ve beraberinde suyu) çeken Aldosteron\'dur.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Tiroit bezinin çok büyük oranda uyarılması ve Tiroksin miktarının aşırı artması sonucu "Gözlerin yuvalarından dışarı fırlamış gibi büyümesi (Ekzoftalmi)" HANGİ hastalığın tipik belirtisidir?',
        options: [
          { id: 'A', text: 'Zehirli Guatr (Graves / Hipertiroidi)' },
          { id: 'B', text: 'Kretenizm' },
          { id: 'C', text: 'Diyabet' },
          { id: 'D', text: 'Tetani' },
          { id: 'E', text: 'Cücelik' }
        ],
        correctOptionId: 'A',
        explanation: 'Hipertiroidi vakalarında göz arkasında yağ dokusu birikir ve gözler dışarı fırlar.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Hipofizin MSH (Melanosit Uyarıcı Hormon) adı verilen hormonu deride ne işe yarar?',
        options: [
          { id: 'A', text: 'Kıl köklerini uzatır' },
          { id: 'B', text: 'Melanin pigmenti sentezini uyararak Deriye Rengini (Esmerliği) verir' },
          { id: 'C', text: 'Terlemeyi sağlar' },
          { id: 'D', text: 'Yağ bezlerini tıkar' },
          { id: 'E', text: 'Derideki yaraları iyileştirir' }
        ],
        correctOptionId: 'B',
        explanation: 'MSH, derideki melanosit hücrelerini uyarır ve melanin boyası ürettirerek cildi koyulaştırır (Özellikle güneşte).'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Hipofizin hormonlarından HANGİSİ, diğerleri gibi başka bir "Endokrin Bezi" uyarmaz da, doğrudan "TÜM VÜCUT HÜCRELERİNİ" (Örn: Kemik ve Kasları) hedefler?',
        options: [
          { id: 'A', text: 'TSH' },
          { id: 'B', text: 'ACTH' },
          { id: 'C', text: 'FSH' },
          { id: 'D', text: 'GH (Büyüme Hormonu)' },
          { id: 'E', text: 'LH' }
        ],
        correctOptionId: 'D',
        explanation: 'TSH tiroite, ACTH adrenale, FSH/LH eşey bezine gider. Büyüme hormonu ise doğrudan tüm dokulara etki ederek hücre bölünmesini uyarır.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Menstrual (Adet) döngünün ortasında LH hormonunun kanda aniden çok yüksek bir seviyeye ulaşması (LH piki) hangi olaya ZEMİN HAZIRLAR?',
        options: [
          { id: 'A', text: 'Adet kanamasına' },
          { id: 'B', text: 'Yumurtlamaya (Ovulasyon)' },
          { id: 'C', text: 'Kemik erimesine' },
          { id: 'D', text: 'Süt fışkırmasına' },
          { id: 'E', text: 'Rahmin incelmesine' }
        ],
        correctOptionId: 'B',
        explanation: 'LH hormonu 14. günde tavan yapar (pik) ve bu basınçla yumurta çatlar (ovulasyon).'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Testosteron ve Östrojen gibi hormonlar İKİNCİL eşey özelliklerini de sağlar. Erkekte sesin kalınlaşması, kadında kalça kemiğinin genişlemesi gibi özelliklere "İkincil" denmesinin sebebi nedir?',
        options: [
          { id: 'A', text: 'İki tane hormonla oldukları için' },
          { id: 'B', text: 'Üreme hücresi (Gamet) üretimiyle DOĞRUDAN ilgili olmayan, sadece cinsiyete ait "Dış Görünüş" (Fiziksel) farkları olduğu için' },
          { id: 'C', text: 'Hayatta kalmak için zorunlu olmadıkları için' },
          { id: 'D', text: 'İki yılda bir oldukları için' },
          { id: 'E', text: 'İkincil kalitede oldukları için' }
        ],
        correctOptionId: 'B',
        explanation: 'Birincil eşey özellik, doğrudan üreme organları (testis, yumurtalık) ve gamettir. Sakal, ses kalınlığı, göğüs büyümesi gibi özellikler cinsel dimorfizm yaratan ikincil fiziksel farklardır.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Salgılatıcı hormonları (RH) ile HİPOFİZİ kontrol eden Hipotalamus, hipofizin hormon salgılamasını yavaşlatmak veya durdurmak istediğinde ne yapar?',
        options: [
          { id: 'A', text: 'Hipofizi parçalar' },
          { id: 'B', text: 'İnhibitör (Durdurucu / Baskılayıcı) hormonlar salgılar' },
          { id: 'C', text: 'Kan akışını keser' },
          { id: 'D', text: 'Mide asidini artırır' },
          { id: 'E', text: 'Göz bebeklerini büyütür' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipotalamus Releasing (Salgılatıcı) hormonların yanında Inhibiting (Durdurucu - Örn: Somatostatin) faktörler de salgılayarak hipofizin fişini çekebilir.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi HİPOTALAMUS tarafından üretilip ARKA hipofizden kana verilen hormonlardan biridir?',
        options: [
          { id: 'A', text: 'Tiroksin' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Antidiüretik Hormon (ADH)' },
          { id: 'D', text: 'Testosteron' },
          { id: 'E', text: 'Kalsitonin' }
        ],
        correctOptionId: 'C',
        explanation: 'Arka hipofiz hormonları ADH (Vazopressin) ve Oksitosin\'dir.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Böbreküstü bezinin kabuk ve öz bölgesinin BİRBİRİNDEN FARKLI iki ayrı bez gibi çalışmasının temel GÖSTERGESİ nedir?',
        options: [
          { id: 'A', text: 'İkisinin de aynı hormonu üretmesi' },
          { id: 'B', text: 'Kabuk bölümünün ACTH (hormon) ile, Öz bölümünün ise Sempatik Sinirlerle (sinir sistemi) uyarılması' },
          { id: 'C', text: 'İkisinin de tiroit bezine yapışık olması' },
          { id: 'D', text: 'Sadece erkeklerde bulunmaları' },
          { id: 'E', text: 'Kan şekeriyle hiç ilgilerinin olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Korteks (Kabuk) hipofizin emrindedir ve hormonlarla uzun süreli çalışır. Öz (Medulla) ise sinir sisteminin emrindedir ve saniyeler içinde çalışır.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Tiroit ve Paratiroit Hastalıkları / Yorumlama',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Tiroksin hormonu normalden az salgılandığında (Hipotiroidi) metabolizma yavaşlar. Yetişkin bir insanda ortaya çıkan hipotiroidinin İLERİ derecedeki haline, deride su tutulması ve aşırı kilo alımıyla karakterize HANGİ hastalık denir?',
        options: [
          { id: 'A', text: 'Miksödem' },
          { id: 'B', text: 'Akromegali' },
          { id: 'C', text: 'Tetani' },
          { id: 'D', text: 'Cücelik' },
          { id: 'E', text: 'Diyabet' }
        ],
        correctOptionId: 'A',
        explanation: 'Yetişkinlerde tiroksin azlığının kronik ve ağır haline Miksödem denir. Vücut şişer, metabolizma durma noktasına gelir, saç dökülür ve uyuşukluk başlar.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Basit Guatr (Tiroit bezinin büyümesi) NEDEN oluşur?',
        options: [
          { id: 'A', text: 'Pankreas çok çalıştığı için' },
          { id: 'B', text: 'Vücuda alınan İyot EKSİK olduğu için Tiroit bezinin hormon üretememesi ve hipofizin (TSH ile) sürekli onu zorlayarak büyütmesi sonucu' },
          { id: 'C', text: 'Çok fazla şeker yenildiği için' },
          { id: 'D', text: 'Kemikler kırıldığı için' },
          { id: 'E', text: 'Kalp hızlı attığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'İyot yok -> Tiroksin yok -> Beyne giden Negatif Feedback YOK -> Beyin sürekli TSH yollar -> Tiroit yorulur ve hücre sayısını artırarak büyür (Guatr).'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Zehirli Guatr (Graves Hastalığı / Hipertiroidi) olan bir kişide aşağıdaki belirtilerden hangisi GÖRÜLMEZ?',
        options: [
          { id: 'A', text: 'Metabolizma çok hızlıdır' },
          { id: 'B', text: 'Kişi çok yesede hızla kilo kaybeder (zayıflar)' },
          { id: 'C', text: 'Kalp çarpıntısı ve sinirlilik vardır' },
          { id: 'D', text: 'Sürekli üşüme hali ve uyku isteği (uyuşukluk) görülür' },
          { id: 'E', text: 'Ellerde titreme ve terleme görülür' }
        ],
        correctOptionId: 'D',
        explanation: 'Zehirli Guatr motorun yüksek devirde yanmasıdır. Kişi üşümez, tam tersi aşırı terler ve sıcağa dayanamaz. Uyuşukluk ise hipotiroidi belirtisidir.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Kalsiyum kanda DÜŞTÜĞÜNDE Parathormon\'un kemikleri hafifçe eritip (yıkarak) kalsiyumu kana çekmesi normaldir. Eğer Paratiroit bezi KANSER olursa ve DURMADAN Parathormon salgılarsa kemiklere ne olur?',
        options: [
          { id: 'A', text: 'Kemikler çelik gibi sertleşir' },
          { id: 'B', text: 'Kemiklerde hiç kalsiyum kalmaz, kolayca kırılabilen (zayıf ve delikli) hale gelir' },
          { id: 'C', text: 'Kemikler uzar ve devlik olur' },
          { id: 'D', text: 'Hiçbir değişiklik olmaz' },
          { id: 'E', text: 'Kemikler yağa dönüşür' }
        ],
        correctOptionId: 'B',
        explanation: 'Aşırı Parathormon kalsiyumu sürekli kana çalacağı için kemiğin içi boşalır (Osteoporoz / Kemik erimesi).'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Böbrekte üretilen D vitamini aktiftir. Güneş ışığıyla deride sentezlenen D vitamini kana geçince, Parathormon etkisiyle BÖBREKLERDE aktif D vitaminine dönüşür. Aktif D vitamini ne işe yarar?',
        options: [
          { id: 'A', text: 'Gözün daha iyi görmesini sağlar' },
          { id: 'B', text: 'Bağırsaklardan KALSİYUM emilimini artırır' },
          { id: 'C', text: 'Sindirimi durdurur' },
          { id: 'D', text: 'Kan şekerini yükseltir' },
          { id: 'E', text: 'Saç uzamasını sağlar' }
        ],
        correctOptionId: 'B',
        explanation: 'D vitamini eksikliğinde süt içseniz de kalsiyum bağırsaktan kana geçemez. Parathormon D vitaminini aktifleştirerek kalsiyum kazanımını sağlar.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Paratiroit bezinin çok AZ çalışması (Hipoparatiroidizm) durumunda kandaki kalsiyum çok düşer. Kalsiyum düşünce kas hücreleri aşırı uyarılır ve kramplar girer. Bu hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Tetani' },
          { id: 'B', text: 'Miksödem' },
          { id: 'C', text: 'Addison' },
          { id: 'D', text: 'Cücelik' },
          { id: 'E', text: 'Guatr' }
        ],
        correctOptionId: 'A',
        explanation: 'Kalsiyum eksikliğinde kasların kilitlenip spazm geçirmesi (örneğin ebe eli duruşu) Tetani hastalığıdır.'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Tiroit ve Paratiroit bezi YAN YANA bulunur. Boyun ameliyatı (örneğin Guatr ameliyatı) olan bir hastada YANLIŞLIKLA Paratiroit bezleri de alınırsa ameliyattan sonra en acil sorun ne olur?',
        options: [
          { id: 'A', text: 'Kan şekeri düşer' },
          { id: 'B', text: 'Kanda kalsiyum hızla düşer ve kas kasılmaları (Tetani) başlar' },
          { id: 'C', text: 'Boyu çok uzar' },
          { id: 'D', text: 'Şişmanlar' },
          { id: 'E', text: 'Gözleri kör olur' }
        ],
        correctOptionId: 'B',
        explanation: 'Paratiroit bezleri tiroidin içine gömülüdür. Tiroit ameliyatlarında kazara bunlar da alınırsa hasta aniden kalsiyum krizine (Tetani) girer.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Tiroit bezinin C (Açık hücreler) hücrelerinden Kalsitonin salgılanır, folikül hücrelerinden ise Tiroksin. C hücreleri HANGİ DURUMDA kalsitonin salgısını artırır?',
        options: [
          { id: 'A', text: 'Kan kalsiyumu DÜŞTÜĞÜNDE' },
          { id: 'B', text: 'Kan kalsiyumu NORMALİN ÜSTÜNE ÇIKTIĞINDA' },
          { id: 'C', text: 'Kan şekeri düştüğünde' },
          { id: 'D', text: 'Uyurken' },
          { id: 'E', text: 'Korktuğunda' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsitonin kalsiyumu düşüren hormondur. Demek ki kanda kalsiyum normalin üstüne çıktığında (örneğin çok peynir yendiğinde) devreye girmelidir.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Kalsitonin kalsiyumu böbreklerde nasıl etkiler?',
        options: [
          { id: 'A', text: 'Böbrekten geri emilimi durdurarak (azaltarak) idrarla kalsiyum atılmasını SAĞLAR' },
          { id: 'B', text: 'Böbrekleri tamamen tıkar' },
          { id: 'C', text: 'Kalsiyumu zorla böbrekten kana sokar' },
          { id: 'D', text: 'Hiç etkilemez' },
          { id: 'E', text: 'Böbreği büyütür' }
        ],
        correctOptionId: 'A',
        explanation: 'Kalsitonin fazla kalsiyumdan kurtulmak için böbreklere "emme, at gitsin" der.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Kanda Kalsiyum minerali dışında FOSFOR (Fosfat) mineralinin de dengesini Parathormon ayarlar. Parathormon kalsiyumu kana emerken Fosforu ne yapar?',
        options: [
          { id: 'A', text: 'Fosforu da kalsiyum gibi kana emer' },
          { id: 'B', text: 'Böbreklerden fosforun atılmasını (idrarla çıkmasını) HIZLANDIRIR' },
          { id: 'C', text: 'Fosforu oksijene çevirir' },
          { id: 'D', text: 'Fosforu beyne yollar' },
          { id: 'E', text: 'Fosfor üretir' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon kan kalsiyumunu artırırken kan fosfatını düşürür (böbrekten attırır).'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Soğuk bir ortama giren insanın Hipotalamus-Hipofiz ekseni aktifleşir ve TSH artar. Bu durum Vücut Sıcaklığını NASIL yükseltir?',
        options: [
          { id: 'A', text: 'Kalbi durdurarak' },
          { id: 'B', text: 'Tiroit bezinden Tiroksin salgılatıp, hücrelerde oksijenli solunumu (metabolizmayı) HIZLANDIRARAK (Isı üreterek)' },
          { id: 'C', text: 'Sadece terleyerek' },
          { id: 'D', text: 'Mide asidini artırarak' },
          { id: 'E', text: 'Kemiği eriterek' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücresel solunum (ATP üretimi) sırasında açığa ISI çıkar. Tiroksin bu solunum hızını artırarak vücut ısısını (kalorifer gibi) yükseltir.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Hem Kalsitonin hem de Parathormon kanda Kalsiyumu DENGELEMEK için görev yapar. Bu iki hormonun çalışmasını kim denetler?',
        options: [
          { id: 'A', text: 'İkisi de Hipofizden gelen emirlere bakar' },
          { id: 'B', text: 'Hipotalamus kontrol eder' },
          { id: 'C', text: 'Doğrudan KANDAKİ KALSİYUM miktarına göre (kalsiyumu sensör gibi algılayarak) kendileri çalışır' },
          { id: 'D', text: 'Mide asidi kontrol eder' },
          { id: 'E', text: 'Böbrek kontrol eder' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroksinin salgılanması hipofizin emrindedir (TSH). Ancak Kalsitonin ve Parathormon hipofizi dinlemez; onlar doğrudan kandaki Kalsiyum seviyesini ölçerek bağımsız çalışırlar.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Tiroidin Tiroksin hormonu AMİNO ASİT yapılı (tirozin kökenli) olmasına rağmen, HÜCRE ZARINDAN kolayca geçebilen nadir hormonlardandır (Steroit gibi davranır). Bunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Su olması' },
          { id: 'B', text: 'Yağda çözünen (Lipofilik) bir yapıya ve iyot atomlarına sahip olması' },
          { id: 'C', text: 'Çok büyük olması' },
          { id: 'D', text: 'Şeker olması' },
          { id: 'E', text: 'Gözle görülmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Normalde amino asit ve protein kökenliler zardan geçemez (Adrenalin, İnsülin gibi). Ancak Tiroksin iyotlu yapısıyla yağda çözünür ve hücre zarından içeri girerek reseptörünü içerde bulur.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'İyot eksikliğinde tiroksin üretilemez dedik. Peki iyot yeterli olsa bile Hipofiz bezi TSH salgılayamazsa ne olur?',
        options: [
          { id: 'A', text: 'Tiroksin yine üretilemez (İkincil Hipotiroidi)' },
          { id: 'B', text: 'Tiroit bezi TSH olmadan da kendi kendine tiroksin üretir' },
          { id: 'C', text: 'Kan şekeri düşer' },
          { id: 'D', text: 'Boy uzar' },
          { id: 'E', text: 'Kaslar erir' }
        ],
        correctOptionId: 'A',
        explanation: 'Tiroit bezinin fabrikasının çalışması için TSH bir şalterdir. Şalter inikse (TSH yoksa), içeride malzeme (iyot) olsa bile hormon üretilemez.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Tiroksin hormonu eksikliğinde zihinsel gerilik görülmesinin TEMEL nedeni nedir?',
        options: [
          { id: 'A', text: 'Kemiklerin uzamaması' },
          { id: 'B', text: 'Gözün iyi görmemesi' },
          { id: 'C', text: 'Özellikle embriyo ve bebeklik döneminde SİNİR SİSTEMİNİN (beyin) gelişimi ve miyelin kılıf oluşumu için Tiroksine ihtiyaç duyulması' },
          { id: 'D', text: 'Midenin iyi sindirim yapamaması' },
          { id: 'E', text: 'Sadece kalbin yavaş atması' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroksin beynin nöron gelişimi ve ağ kurması (sinaps oluşumu) için bebeklikte kritik bir hormondur.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Kan Şekeri Grafikleri ve Homeostazi',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Sağlıklı bir insanda KAN ŞEKERİ normalin üstüne çıktığında (Örn: tatlı yendiğinde) grafikte ilk olarak HANGİ hücrelerin faaliyeti artar?',
        options: [
          { id: 'A', text: 'Pankreas ALFA hücreleri (Glukagon üretmek için)' },
          { id: 'B', text: 'Pankreas BETA hücreleri (İnsülin üretmek için)' },
          { id: 'C', text: 'Karaciğer hücreleri (Glikojen yıkmak için)' },
          { id: 'D', text: 'Böbrek hücreleri (Şekeri atmak için)' },
          { id: 'E', text: 'Mide hücreleri (Sindirimi durdurmak için)' }
        ],
        correctOptionId: 'B',
        explanation: 'Şeker artışını pankreastaki Beta (β) hücreleri algılar ve insülin sentezini başlatır.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Bir grafikte Kan Şekeri aniden ÇOK YÜKSEK bir pik yapmış ve ardından yavaşça normale inmiştir. Normale inme sürecinde KANDA hangi hormonun grafiği ŞEKERLE BİRLİKTE önce artmış, sonra azalmıştır?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Tiroksin' }
        ],
        correctOptionId: 'C',
        explanation: 'Şeker artınca insülin de artar (şekeri düşürmek için). Şeker düşmeye başladıkça (normale indikçe) insülinin görevi biter ve o da azalır (Negatif Feedback).'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Kas hücrelerine giren glikoz, insülin sayesinde "Glikojen" olarak depolanır. Peki kan şekeri DÜŞTÜĞÜNDE (açlıkta), kaslardaki glikojen parçalanıp kana şeker olarak VERİLEBİLİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, kas glikojeni doğrudan kana verilir.' },
          { id: 'B', text: 'Hayır, kas hücreleri glikojeni yıktığında oluşan glikozu SADECE KENDİ ENERJİSİ için harcar (Kaslardan kana glikoz geçemez).' },
          { id: 'C', text: 'Evet, beyne glikoz gönderir.' },
          { id: 'D', text: 'Hayır, kaslar sadece yağ depolar.' },
          { id: 'E', text: 'Evet, kaslar glikojeni böbreğe yollar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan şekerini yükseltmek için kana glikoz veren organ Karaciğerdir. Kaslar cimridir, glikozu Fosfatlayarak hapseder ve kana geri vermez, kendi kasılması için harcar.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Tip-1 Diyabetik (İnsülin üretemeyen) bir çocukta, yemekten sonra Kan Şekeri grafiği NASIL BİR SEYİR izler?',
        options: [
          { id: 'A', text: 'Hemen normale döner' },
          { id: 'B', text: 'Şeker çok yükselir ve dışarıdan insülin (iğne/pompa) verilmedikçe UZUN SÜRE yüksek kalmaya devam eder' },
          { id: 'C', text: 'Sürekli düşerek sıfıra iner' },
          { id: 'D', text: 'Karaciğer insülin üreterek sorunu çözer' },
          { id: 'E', text: 'Kan şekeri hiç yükselmez' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin üretimi olmadığı için kandaki glikoz hücreye giremez. Kapılar kilitli kalır ve kandaki şeker saatlerce yüksek seyreder.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Şeker hastalığında hücreler (Örn: kas ve beyin hücreleri hariç) kanda bol glikoz olmasına rağmen içeri ALAMADIKLARI için AÇLIK çekerler. Hücreler enerji bulmak için Glikoz YERİNE neyi yakmaya (parçalamaya) başlar?',
        options: [
          { id: 'A', text: 'Sadece vitaminleri' },
          { id: 'B', text: 'Kemikleri' },
          { id: 'C', text: 'Depolanmış Yağları ve Proteinleri parçalayarak enerji üretmeye çalışırlar (Bu da aşırı zayıflamaya ve kanda aseton kokusuna yol açar)' },
          { id: 'D', text: 'Mide asidini' },
          { id: 'E', text: 'Suyu' }
        ],
        correctOptionId: 'C',
        explanation: 'Diyabet hastaları çok yemek yese de hücreler glikozu alamadığı için yağları ve kasları eritmeye başlar. Bu yüzden tedavi edilmeyen diyabette kilo kaybı ve halsizlik görülür.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Hipoglisemi (Kan Şekerinin aniden tehlikeli derecede düşmesi) durumu, diyabetik bir hastada HANGİ nedenle ortaya çıkabilir?',
        options: [
          { id: 'A', text: 'Çok fazla tatlı yediği için' },
          { id: 'B', text: 'Yanlışlıkla İNSÜLİN İĞNESİNİ GEREĞİNDEN FAZLA (yüksek doz) vurduğu için kandaki bütün şekerin hızla hücrelere hücum etmesi sonucu' },
          { id: 'C', text: 'Hiç insülin vurmadığı için' },
          { id: 'D', text: 'Çok su içtiği için' },
          { id: 'E', text: 'Glukagon aldığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Fazla insülin kanda hiç şeker bırakmaz. Beyin glikozsuz kalır ve hasta aniden bayılabilir (İnsülin Koması / Hipoglisemi).'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Uzun süreli (günlerce süren) bir açlıkta kan şekerini korumak için Karaciğer glikojenleri tükenir. Bu aşamada HANGİ HORMON devreye girerek yağlardan ve proteinlerden KARACİĞERDE YENİ GLİKOZ ÜRETİMİNİ sağlar?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Oksitosin' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'Kalsitonin' }
        ],
        correctOptionId: 'C',
        explanation: 'Kortizol glukoneogenez (yeni glikoz sentezi) yaparak, yağ ve proteinleri karbonhidrata (glikoza) çevirtir.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Aşağıdaki hormonlardan hangisi kana verildiğinde Karaciğerdeki glikojen miktarının AZALDIĞI (Glikojenin yıkılıp kana verildiği) gözlenir?',
        options: [
          { id: 'A', text: 'Sadece İnsülin' },
          { id: 'B', text: 'Glukagon ve Adrenalin' },
          { id: 'C', text: 'Kalsitonin ve Parathormon' },
          { id: 'D', text: 'TSH' },
          { id: 'E', text: 'Aldosteron' }
        ],
        correctOptionId: 'B',
        explanation: 'Glukagon açlıkta, Adrenalin heyecan/korkuda kan şekerini acilen yükseltmek için karaciğere "Glikojeni parçala kana ver" emri yollar.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Tip 2 Diyabet hastalarının çoğunda Pankreas insülin üretir, hatta kanda İNSÜLİN NORMALDEN YÜKSEK BİLE OLABİLİR. Fakat şeker düşmez. Neden?',
        options: [
          { id: 'A', text: 'İnsülinin yapısı kemiğe dönüştüğü için' },
          { id: 'B', text: 'Hedef hücrelerin (Kas/Yağ) zarındaki İnsülin Reseptörlerinin bozulması veya duyarsızlaşması (İnsülin Direnci) nedeniyle hücrelerin kapıyı açmaması' },
          { id: 'C', text: 'Pankreasın insülini idrara dökmesi' },
          { id: 'D', text: 'Midenin insülini sindirmesi' },
          { id: 'E', text: 'İnsülinin sadece beyne gitmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Tip-2 diyabet bir reseptör/hücre içi sinyal sağırlığıdır. Kanda insülin vardır ama hücre onu duymaz (İnsülin Direnci).'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Adrenalin aniden arttığında (Örn: Korku), iskelet kaslarında glikojen yıkımı hızlanır. Ancak kaslar bu glikozu kana vermez (Kendi kullanır). Peki Adrenalinin kan şekerini YÜKSELTEN etkisi NEREDEN gelir?',
        options: [
          { id: 'A', text: 'Adrenalin böbreklerde şeker üretir' },
          { id: 'B', text: 'Adrenalin KARACİĞERDEKİ glikojeni de yıktırır ve Karaciğer bu glikozu kana verir' },
          { id: 'C', text: 'Adrenalin kan hücrelerini şekere çevirir' },
          { id: 'D', text: 'Adrenalin midedeki tüm şekeri kana pompalar' },
          { id: 'E', text: 'Adrenalin insülini yok eder' }
        ],
        correctOptionId: 'B',
        explanation: 'Adrenalin hem kasa "kendi yakıtını hazırla" der, hem de karaciğere "kana da glikoz bas" diyerek kan şekerini yükseltir.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Pankreas Adacıkları (Langerhans adacıkları) tahrip olan bir farede aşağıdakilerden hangisi GÖZLENMEZ?',
        options: [
          { id: 'A', text: 'İdrarda glikoz çıkması' },
          { id: 'B', text: 'Kan şekerinin yükselmesi' },
          { id: 'C', text: 'Hücrelerin yağları yakmaya başlaması' },
          { id: 'D', text: 'Kan kalsiyumunun tamamen sıfırlanması' },
          { id: 'E', text: 'Glukagon eksikliği' }
        ],
        correctOptionId: 'D',
        explanation: 'Pankreas kan şekeri ile ilgilidir. Kalsiyum dengesi Tiroit (Kalsitonin) ve Paratiroit (PTH) ile ilgilidir. Pankreasın kalsiyumla doğrudan işi yoktur.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Grafikte İnsülin seviyesi artarken, KANDAKİ Glikoz miktarı ve HÜCRE İÇİNDEKİ Glikoz miktarı sırasıyla NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Kandaki artar, Hücre içindeki artar' },
          { id: 'B', text: 'Kandaki azalır, Hücre içindeki ARTAR' },
          { id: 'C', text: 'İkisi de azalır' },
          { id: 'D', text: 'Kandaki azalır, Hücre içindeki değişmez' },
          { id: 'E', text: 'İkisi de sıfırlanır' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin şekeri kandan hücreye taşır. Dolayısıyla kan şekeri düşerken (kandan eksilirken), hücrenin içindeki şeker (yakıt/depo) artar.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Pankreasta Beta hücrelerinin yanındaki ALFA hücreleri hasar görse (Glukagon üretemese) kişi EN ÇOK HANGİ DURUMDA kriz yaşar?',
        options: [
          { id: 'A', text: 'Yemek yerken (Tokken)' },
          { id: 'B', text: 'Su içerken' },
          { id: 'C', text: 'Uyurken veya Uzun Süre Aç Kaldığında (Şekeri düştüğünde)' },
          { id: 'D', text: 'Spor yaptıktan sonra kasları dinlenirken' },
          { id: 'E', text: 'Güneşlenirken' }
        ],
        correctOptionId: 'C',
        explanation: 'Glukagon şekeri düşmekten (hipoglisemi) koruyan hormondur. Eksikse hasta açlığa dayanamaz, şekeri dibe vurur.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'İnsülinin sadece glikoz üzerinde değil PROTEİN metabolizması üzerinde de etkisi vardır. İnsülin hücrelerin amino asit alımını ve protein sentezini (yapımını) nasıl etkiler?',
        options: [
          { id: 'A', text: 'Proteinleri parçalar' },
          { id: 'B', text: 'Protein yapımını durdurur' },
          { id: 'C', text: 'Protein Sentezini ARTIRIR (Anabolik bir hormondur)' },
          { id: 'D', text: 'Amino asitleri zehire çevirir' },
          { id: 'E', text: 'Hiçbir etkisi yoktur' }
        ],
        correctOptionId: 'C',
        explanation: 'İnsülin genel bir "Yapım, büyüme ve depolama" (Anabolik) hormonudur. Bu yüzden büyüme hormonu ile sinerjist çalışarak protein sentezini destekler.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Beyin (Sinir) hücrelerinin İnsülin reseptörüne (kapısına) İHTİYACI VAR MIDIR? (Yani şekeri almak için insülin beklerler mi?)',
        options: [
          { id: 'A', text: 'Evet, beyin insülin olmadan hiç çalışamaz' },
          { id: 'B', text: 'Hayır. Beyin hücreleri glikozu İNSÜLİNDEN BAĞIMSIZ olarak, doğrudan özel taşıyıcılarla zardan içeri alabilirler.' },
          { id: 'C', text: 'Sadece sabahları ihtiyaç duyarlar' },
          { id: 'D', text: 'Evet, glukagona da ihtiyaç duyarlar' },
          { id: 'E', text: 'Beyin zaten şeker kullanmaz, yağ kullanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Beynin enerji kaynağı (normal şartlarda) SADECE glikozdur ve beyin o kadar önemlidir ki şekeri almak için insülin izni beklemez. Glikozu doğrudan çeker.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Böbreküstü Bezi, Eşey Bezleri ve Homeostazi Çapraz Yorum',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Böbreküstü bezinin kabuk (korteks) bölümü çıkarılmış (alınmış) bir deney hayvanında hangisi gözlenir?',
        options: [
          { id: 'A', text: 'Hiçbir şey olmaz, öz bölgesi görevleri devralır' },
          { id: 'B', text: 'Tuz ve su kaybı (Aldosteron yokluğu) ile Kan Şekerinin streste yükselememesi (Kortizol yokluğu) sonucu HAYATİ TEHLİKE oluşur' },
          { id: 'C', text: 'Adrenalin salgılanamaz' },
          { id: 'D', text: 'Kemikleri anında erir' },
          { id: 'E', text: 'Sürekli uyur' }
        ],
        correctOptionId: 'B',
        explanation: 'Korteks hayati bir bölgedir (Kortizol ve Aldosteron). Korteks alınırsa canlı tuz, su ve şeker krizinden kısa sürede ölür.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Bir kişinin kanında Aldosteron miktarı anormal derecede ARTARSA (Hiperaldosteronizm), vücudundaki K ve Na (Potasyum ve Sodyum) iyonları nasıl değişir?',
        options: [
          { id: 'A', text: 'İkisi de düşer' },
          { id: 'B', text: 'Kanda SODYUM ve SU çok ARTAR (Tansiyon fırlar), POTASYUM aşırı atıldığı için çok DÜŞER (Kas zayıflığı)' },
          { id: 'C', text: 'Kanda Potasyum artar, Sodyum düşer' },
          { id: 'D', text: 'Sadece Kalsiyum etkilenir' },
          { id: 'E', text: 'Böbrekler erir' }
        ],
        correctOptionId: 'B',
        explanation: 'Aldosteron tuzu (Na) ve suyu kanda tutar, Potasyumu (K) ise idrarla attırır. Fazla aldosteron ödem, yüksek tansiyon ve potasyum kaybı (kas güçsüzlüğü) yapar.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Aşırı stres altında sürekli KORTİZOL salgılayan (Örn: Sınav stresi, ekonomik sıkıntılar, kronik hastalık) bir kişide neden SIK SIK HASTALANMA (enfeksiyon) görülür?',
        options: [
          { id: 'A', text: 'Kortizol mikropları beslediği için' },
          { id: 'B', text: 'Kortizol uzun süreli yüksek kaldığında BAĞIŞIKLIK SİSTEMİNİ BASKILADIĞI (Akyuvar sayısını azalttığı) için' },
          { id: 'C', text: 'Kortizol kanama yaptığı için' },
          { id: 'D', text: 'Kortizol ateşi düşürdüğü için' },
          { id: 'E', text: 'Kalp hızlı attığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kortizol iltihabı ve bağışıklığı durduran bir hormondur. Vücut stresteyken "şimdi mikropla savaşacak enerji yok, hayatta kalmaya odaklan" mantığıyla bağışıklığı kısar, bu da kişiyi hastalıklara açık hale getirir.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'ACTH hormonu hangi bezden salgılanıp böbreküstü bezini uyarır? VE ACTH salgısı "Hangi hormona" bağlı olarak negatif geri bildirimle (Feedback) kesilir?',
        options: [
          { id: 'A', text: 'Pankreastan salgılanır, İnsülinle kesilir' },
          { id: 'B', text: 'Tiroitten salgılanır, Tiroksinle kesilir' },
          { id: 'C', text: 'Ön Hipofizden salgılanır, Kandaki KORTİZOL seviyesi yükselince kesilir' },
          { id: 'D', text: 'Hipotalamustan salgılanır, Aldosteronla kesilir' },
          { id: 'E', text: 'Böbrekten salgılanır, Adrenalinle kesilir' }
        ],
        correctOptionId: 'C',
        explanation: 'Hipofiz-ACTH-Adrenal Korteks ekseni. Üretilen Kortizol kan seviyesi artınca, dönüp hipofizi uyarır ve ACTH\'yi durdurur.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Erkeklerde testislerden salgılanan Testosteron\'un SPERM üretimi dışındaki İKİNCİL (sekonder) eşey karakterlerine etkisi hangisidir?',
        options: [
          { id: 'A', text: 'Süt bezlerinin büyümesi' },
          { id: 'B', text: 'Kas kütlesinin artması, sesin kalınlaşması, sakal çıkması' },
          { id: 'C', text: 'Kalça kemiğinin genişlemesi' },
          { id: 'D', text: 'Kan şekerinin düşmesi' },
          { id: 'E', text: 'Yumurtlamanın engellenmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Testosteron anabolik (protein yapıcı) ve androjenik (erkeksi) bir hormondur. İskelet kası kütlesini artırır, ses tellerini kalınlaştırır.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Kadınlarda Ovaryumdan (Yumurtalıktan) salgılanan Östrojen ve Progesteron, RAHİM DUVARINDA (Endometriyum) hangi değişikliği yapar?',
        options: [
          { id: 'A', text: 'Rahmi eriterek yok eder' },
          { id: 'B', text: 'Olası bir gebelik (Embriyonun tutunması) için rahim iç duvarını kalınlaştırır ve kan damarlarıyla zenginleştirir (Süngerimsi yapar)' },
          { id: 'C', text: 'Rahim kaslarını doğum için kasılmaya zorlar' },
          { id: 'D', text: 'Rahim duvarını kemikleştirir' },
          { id: 'E', text: 'Hiçbir değişiklik yapmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Östrojen hücre bölünmesini uyararak kalınlaştırır, Progesteron ise damar/salgı miktarını artırarak rahmi bebek için pofuduk bir yatağa çevirir.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Böbreküstü bezi korteksinden erkek ve dişilerde az miktarda EŞEY HORMONLARI (Androjenler / Testosteron benzeri) salgılanır. Bu durum kadınlarda neye sebep olabilir?',
        options: [
          { id: 'A', text: 'Kadınların sakalının hiç çıkmamasına' },
          { id: 'B', text: 'Korteks aşırı çalışırsa (Adrenal tümör vb.) kadınlarda ses kalınlaşması, aşırı kıllanma (virilizasyon) görülmesine' },
          { id: 'C', text: 'Kadınların hamile kalmasının imkansızlaşmasına' },
          { id: 'D', text: 'Süt üretiminin durmasına' },
          { id: 'E', text: 'Sadece sivilce yapmasına' }
        ],
        correctOptionId: 'B',
        explanation: 'Korteksten kadınlarda da az miktarda androjen salgılanır (koltuk altı vs kıllanması için). Eğer tümör vb. nedeniyle bu bölge çok çalışırsa kadınlarda erkek tipi özellikler (ses kalınlaşması, sakal) başlar.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Hipofizin hormonlarından hangisi doğrudan bir Endokrin BEZİ hedef ALMAZ?',
        options: [
          { id: 'A', text: 'TSH (Tiroiti alır)' },
          { id: 'B', text: 'ACTH (Adrenali alır)' },
          { id: 'C', text: 'FSH (Eşey bezini alır)' },
          { id: 'D', text: 'Prolaktin (LTH) (Meme bezlerini uyarır, meme bezi endokrin değil ekzokrin bir bezdir)' },
          { id: 'E', text: 'LH (Eşey bezini alır)' }
        ],
        correctOptionId: 'D',
        explanation: 'Süt bezleri ter ve tükürük bezleri gibi Dış Salgı (Ekzokrin) bezidir. Prolaktin gidip bu ekzokrin bezi uyarır. (GH ve MSH da doğrudan endokrin bez uyarmaz).'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Bir insanın kanına Adrenalin verildiğinde, Karaciğerde hücre içi GLİKOJEN miktarı ve KANDAKİ Glikoz miktarı nasıl değişir?',
        options: [
          { id: 'A', text: 'Karaciğerde Glikojen ARTAR, Kandaki Glikoz ARTAR' },
          { id: 'B', text: 'Karaciğerde Glikojen AZALIR, Kandaki Glikoz ARTAR' },
          { id: 'C', text: 'İkisi de azalır' },
          { id: 'D', text: 'Karaciğerde Glikojen AZALIR, Kandaki Glikoz AZALIR' },
          { id: 'E', text: 'Karaciğerde Glikojen DEĞİŞMEZ, Kandaki Glikoz AZALIR' }
        ],
        correctOptionId: 'B',
        explanation: 'Adrenalin glikojeni yıktırır (Glikojen azalır) ve oluşan glikozu kana döktürür (Kan şekeri artar).'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Ön hipofizden salgılanan hormonların üretimini kontrol eden "RF" (Salgılatıcı Faktörler) nerede sentezlenir ve hipofize nasıl ulaşır?',
        options: [
          { id: 'A', text: 'Böbrekte üretilir kanla gelir' },
          { id: 'B', text: 'Tiroitte üretilir lenfle gelir' },
          { id: 'C', text: 'Hipotalamusta üretilir ve kısa KILCAL KAN DAMARLARI (Hipofizer Portal Sistem) yoluyla doğrudan ön hipofize gelir' },
          { id: 'D', text: 'Midede üretilir sinirle gelir' },
          { id: 'E', text: 'Omurilikte üretilir omurilik sıvısıyla gelir' }
        ],
        correctOptionId: 'C',
        explanation: 'Hipotalamus ve ön hipofiz arasında özel bir damar köprüsü (portal damar) vardır. RF\'ler vücuda dağılmadan direkt bu damarla ön hipofize inip emri verir.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Aldosteronun hedef organı "Böbrek Kanalları"dır (Nefronlar). Böbreklerden Sodyum (Na) geri emilirken, "SU" neden ve nasıl sodyumla beraber emilir?',
        options: [
          { id: 'A', text: 'Su sodyumu iter' },
          { id: 'B', text: 'Sodyum kana geçince kanın Ozmotik Basıncı (su çekme isteği) artar. Su da pasif (ozmos) olarak sodyumun arkasından kana geçer.' },
          { id: 'C', text: 'Aldosteron doğrudan suya bağlanır' },
          { id: 'D', text: 'Mide asidi suyu pompalar' },
          { id: 'E', text: 'Su sodyumun içine saklanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Tuz suyu çeker kuralı! Aldosteron aktif taşımayla tuzu (Sodyumu) kana alınca, kanın yoğunluğu artar ve su da ozmosla (kendiliğinden) kana doğru akar.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Tiroit bezinin çok çalışması (Hipertiroidi) durumunda hücrelerin oksijen tüketimi grafiğinde nasıl bir değişim gözlenir?',
        options: [
          { id: 'A', text: 'Oksijen tüketimi sabit kalır' },
          { id: 'B', text: 'Oksijen tüketimi AZALIR' },
          { id: 'C', text: 'Oksijen tüketimi ARTAR (Çünkü metabolizma ve solunum hızlanmıştır)' },
          { id: 'D', text: 'Hücreler oksijen yerine karbondioksit kullanır' },
          { id: 'E', text: 'Oksijen tüketimi sadece gece artar' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroksin metabolizmayı ateşe verir. Mitokondriler daha çok ATP üretmek için kandan daha çok Oksijen (O2) ve Besin çeker.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Endokrin sistemin (hormonların) görevleri arasında aşağıdakilerden hangisi YER ALMAZ?',
        options: [
          { id: 'A', text: 'Büyüme ve gelişmeyi sağlamak' },
          { id: 'B', text: 'Üremeyi ve cinsiyet özelliklerini kontrol etmek' },
          { id: 'C', text: 'Homeostaziyi (İç dengeyi) korumak' },
          { id: 'D', text: 'Kasın kasılmasını sağlayan motor sinir impulsunu (elektriğini) doğrudan üretmek' },
          { id: 'E', text: 'Hücresel metabolizmayı ve enerji kullanımını düzenlemek' }
        ],
        correctOptionId: 'D',
        explanation: 'Hormonlar metabolik birer habercidir, elektriksel impuls üretemezler. İmpulsu sinir hücreleri (nöronlar) üretir.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Hipotalamusun ürettiği Oksitosin hormonu HANGİ YOLDAN (nasıl) arka hipofize ulaşır?',
        options: [
          { id: 'A', text: 'Kan damarları (Portal damar) ile' },
          { id: 'B', text: 'Hipotalamustaki nöronların UZUN AKSONLARI boyunca, akson içi taşımayla arka hipofize inerek' },
          { id: 'C', text: 'Lenf sıvısı ile' },
          { id: 'D', text: 'BOS (Beyin Omurilik Sıvısı) içinde yüzerek' },
          { id: 'E', text: 'Kas kasılmasıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Arka hipofiz zaten hipotalamus sinirlerinin uzantısıdır (akson uçlarıdır). Hormonlar gövdede (hipotalamusta) üretilir, akson (kablo) boyunca aşağı inip depo edilir.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Pankreastan sentezlenen insülin, protein (peptit) yapılıdır. Bu yüzden İnsülin hapları (ağızdan hap olarak) yutulmaz, İĞNE yoluyla kana enjekte edilir. Bunun EN TEMEL sebebi nedir?',
        options: [
          { id: 'A', text: 'Hapın çok acı olması' },
          { id: 'B', text: 'Protein yapılı insülinin midede sindirim enzimlerince (Pepsin vb.) PARÇALANARAK işlevini kaybetmesi (Amino asitlere dönüşmesi)' },
          { id: 'C', text: 'Hapın kana çok hızlı geçmesi' },
          { id: 'D', text: 'İnsülinin sadece deride çalışması' },
          { id: 'E', text: 'İğnenin daha ucuz olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Protein (et, süt, yumurta vb) midede sindirilir. İnsülin de proteindir, hap olarak yutarsan onu da sindirirsin ve kana hormon olarak değil basit amino asit olarak geçer, işe yaramaz.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Endokrin Sistem Genel Tekrar',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Hipofizin ön lobundan salgılanan TSH, FSH, ACTH, LH hormonlarının ortak özelliği (Hedefleri açısından) nedir?',
        options: [
          { id: 'A', text: 'Sadece kalbi etkilemeleri' },
          { id: 'B', text: 'Tüm vücut hücrelerine etki etmeleri' },
          { id: 'C', text: 'Başka bir ENDOKRİN BEZİ (Tiroit, Eşey, Adrenal vb.) uyararak, oradan YENİ BİR HORMON salgılanmasını sağlamaları' },
          { id: 'D', text: 'Sadece kan şekerini düşürmeleri' },
          { id: 'E', text: 'Sadece yaşlılarda salgılanmaları' }
        ],
        correctOptionId: 'C',
        explanation: 'Bu hormonlara tropik (uyarıcı) hormonlar denir. Görevleri başka bir endokrin fabrikasını (bezi) çalıştırarak oradan esas hormonun üretimini sağlamaktır.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Böbreküstü bezinin "Kabuk (Korteks)" hormonları (Kortizol, Aldosteron, Eşey hormonları) ile "Öz (Medulla)" hormonları (Adrenalin, Noradrenalin) KİMYASAL YAPI olarak nasıldır?',
        options: [
          { id: 'A', text: 'Tümü sadece protein yapılıdır' },
          { id: 'B', text: 'Kabuk hormonları STEROİT (yağ), Öz hormonları AMİNO ASİT (Tirozin kökenli) yapılıdır' },
          { id: 'C', text: 'Tümü karbonhidrat yapılıdır' },
          { id: 'D', text: 'Kabuk protein, Öz steroit yapılıdır' },
          { id: 'E', text: 'Tümü nükleik asit yapılıdır' }
        ],
        correctOptionId: 'B',
        explanation: 'Korteks hormonları kolesterolden sentezlenen steroitlerdir (zardan geçerler). Öz bölgesi hormonları ise küçük amino asit türevleridir (katekolaminler).'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Bir insanın kanda TSH düzeyi normalden ÇOK YÜKSEK, Tiroksin düzeyi ise NORMALDEN DÜŞÜK seyrediyorsa, doktor aşağıdakilerden hangisini teşhis eder?',
        options: [
          { id: 'A', text: 'Zehirli Guatr' },
          { id: 'B', text: 'Basit Guatr (Tiroit Yetersizliği / Hipotiroidi)' },
          { id: 'C', text: 'Şeker Hastalığı' },
          { id: 'D', text: 'Akromegali' },
          { id: 'E', text: 'Tetani' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroksin üretilemiyorsa (düşükse), beyin bunu algılayıp "daha çok üret" diye TSH yollar. TSH\'ın yüksek, Tiroksinin düşük olması tiroit bezinin hastalıklı (çalışamıyor) olduğunu gösterir.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Kan kalsiyumu düştüğünde Parathormon\'un devreye girmesi ve kalsiyumu yükseltmesi olayında, Paratiroit bezi HANGİ TÜR bir uyarı ile çalışır?',
        options: [
          { id: 'A', text: 'Hipofizden gelen hormonla (Hormonal)' },
          { id: 'B', text: 'Sempatik sinirlerle (Sinirsel)' },
          { id: 'C', text: 'Doğrudan kandaki madde miktarıyla (Humoral / Kimyasal madde konsantrasyonu)' },
          { id: 'D', text: 'Mide asidiyle' },
          { id: 'E', text: 'Işıkla' }
        ],
        correctOptionId: 'C',
        explanation: 'Paratiroit ve Pankreas, hipofizden emir almazlar. Kanda gezen maddenin (kalsiyum veya şeker) miktarını bizzat ölçerek "Humoral" yolla uyarılırlar.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Adrenalin ve Tiroksin hormonlarının metabolizma üzerindeki ORTAK ETKİSİ nedir?',
        options: [
          { id: 'A', text: 'İkisi de uykuyu getirir' },
          { id: 'B', text: 'İkisi de kan şekerini düşürür' },
          { id: 'C', text: 'İkisi de Metabolizmayı (Oksijen tüketimini ve hücre çalışma hızını) HIZLANDIRIR' },
          { id: 'D', text: 'İkisi de kemik eritir' },
          { id: 'E', text: 'İkisi de su tutar' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroksin sürekli olarak bazal metabolizmayı belirler ve yüksekse hızlandırır. Adrenalin ise korku anında geçici ama çok güçlü bir şekilde metabolizmayı ve enerji üretimini hızlandırır.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Testosteron ve İnsülin hormonlarının Hücre Reseptörleri (Kapıları) hücrenin NERESİNDE bulunur?',
        options: [
          { id: 'A', text: 'İkisi de hücre zarının dış yüzeyindedir' },
          { id: 'B', text: 'Testosteron steroit olduğu için HÜCRE İÇİNDE (Sitoplazmada), İnsülin protein yapılı olduğu için HÜCRE ZARININ YÜZEYİNDE bulunur' },
          { id: 'C', text: 'İkisi de çekirdeğin içindedir' },
          { id: 'D', text: 'İnsülin içeride, testosteron dışarıdadır' },
          { id: 'E', text: 'Hormonların reseptörü yoktur' }
        ],
        correctOptionId: 'B',
        explanation: 'Steroitler (Yağlar) yağdan oluşan hücre zarını eritip içeri girebilir (Reseptörleri içeridedir). Proteinler (İnsülin) ise zardan geçemez, zardaki reseptöre dışarıdan bağlanır.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi Kandaki Glikoz miktarını artırırken, BÖBREKTEN su emilimini (tansiyonu) etkilemez?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'Aldosteron' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'ADH' }
        ],
        correctOptionId: 'A',
        explanation: 'Glukagon sadece karaciğeri uyararak şekeri artırır, böbrekle veya tansiyonla işi yoktur (Adrenalin ve Kortizol stres anında dolaylı olarak kalp ve damarları da etkiler).'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Karbonhidratça zengin bir yemekten sonra kan şekeri yükseldiğinde pankreas Beta hücreleri İNSÜLİN salgılar. İnsülinin kanda artması PANKREASTAKİ Alfa hücrelerini (Glukagon salgısını) NASIL etkiler?',
        options: [
          { id: 'A', text: 'Glukagon da aynı anda artar' },
          { id: 'B', text: 'İnsülin, alfa hücrelerini baskılayarak (inhibe ederek) Glukagon salgısını AZALTIR' },
          { id: 'C', text: 'Glukagonu tiroksine çevirir' },
          { id: 'D', text: 'Hiçbir etkisi olmaz' },
          { id: 'E', text: 'Alfa hücrelerini öldürür' }
        ],
        correctOptionId: 'B',
        explanation: 'Zıt çalışan (antagonist) hormonlarda biri sahneye çıkarken diğerinin baskılanması gerekir. İnsülin artarken, glukagon üretimi tamamen bastırılır.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Kışın karda mahsur kalmış ve uzun süre açlık çekmiş bir kişide HANGİ HORMONDAN dolayı kan şekeri proteinlerin yıkılmasıyla sabit tutulmaya çalışılır?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'Aldosteron' },
          { id: 'E', text: 'İnsülin' }
        ],
        correctOptionId: 'C',
        explanation: 'Uzun süreli (günlerce) açlık ve streste Karaciğer glikojeni çoktan biter. Geriye kalan yağ ve kas proteinlerini şekere çevirten Kortizoldür.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Hangi hastalıklarda hastanın "Çok sık ve bol idrara çıkması, ağız kuruluğu ve çok su içmesi" ORTAK olarak gözlenir?',
        options: [
          { id: 'A', text: 'Sadece Zehirli Guatr' },
          { id: 'B', text: 'Tip-1 Diyabet, Tip-2 Diyabet ve Şekersiz Diyabet (ADH eksikliği)' },
          { id: 'C', text: 'Akromegali ve Cücelik' },
          { id: 'D', text: 'Sadece Tetani' },
          { id: 'E', text: 'Sadece Addison Hastalığı' }
        ],
        correctOptionId: 'B',
        explanation: 'Tip 1 ve 2 diyabette glikoz idrarla atılırken suyu çeker (Çok idrar). Şekersiz diyabette (ADH yokluğu) su böbrekten emilemez ve direkt idrara gider (Çok idrar).'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek yorum ve sentez gerektiren sorular',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Tiroit bezinden salgılanan Kalsitonin hormonu kemiklere kalsiyum geçişini sağlar. Ancak klinikte Kalsitonin bezi tamamen alınan hastalarda bile, kan kalsiyumunun tehlikeli seviyelere (ölümcül) YÜKSELMEDİĞİ görülmüştür. Bu durumun EN İYİ açıklaması nedir?',
        options: [
          { id: 'A', text: 'Kalsiyum kandan buharlaşarak kaybolur.' },
          { id: 'B', text: 'Parathormon eksikliği çok kritiktir (tetani) ama fazla kalsiyum zaten böbreklerden idrarla atılabildiği için Kalsitonin eksikliği tek başına hayati tehlike yaratmaz.' },
          { id: 'C', text: 'Pankreas kalsitonin üretmeye başlar.' },
          { id: 'D', text: 'Kalsiyum kemikte değil kalpte birikir.' },
          { id: 'E', text: 'Kalsitonin kalsiyumla hiç ilgili değildir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyumun düşmesi (PTH eksikliği) kalbi ve kasları hemen durdurabilir (Tetani). Ancak kalsiyumun yükselmesi (Kalsitonin eksikliği) o kadar acil bir durum yaratmaz çünkü böbrekler sağlam oldukça fazla kalsiyum idrarla süzülüp atılabilir.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Hipofizin ön lobunu besleyen damarlar (portal sistem) kopartılıp kesilen (hipotalamus ile bağı kesilen) bir laboratuvar faresinde, ZAMANLA hangi endokrin bezlerin KÜÇÜLMESİ (atrofi) beklenir?',
        options: [
          { id: 'A', text: 'Pankreas ve Paratiroit' },
          { id: 'B', text: 'Tiroit Bezi, Adrenal Korteks ve Testis/Yumurtalıklar' },
          { id: 'C', text: 'Sadece Mide ve Bağırsaklar' },
          { id: 'D', text: 'Adrenal Medulla (Öz) ve Pankreas' },
          { id: 'E', text: 'Epifiz bezi' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipofizin portal damarı kesilirse, hipofiz RH uyarılarını alamaz ve TSH, ACTH, FSH/LH üretemez. Bu hormonlar olmayınca hedefleri olan Tiroit, Adrenal Korteks ve Eşey bezleri çalışmayıp zamanla küçülür.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Bir sporcu doping amacıyla dışarıdan yüksek dozda (iğneyle) Sentetik Testosteron almaktadır. Aylar sonra bu sporcuda Testislerin KÜÇÜLDÜĞÜ (atrofi) ve sperm üretiminin DURDUĞU saptanır. Bunun mekanizması nedir?',
        options: [
          { id: 'A', text: 'Testosteron zehirlidir, doğrudan hücreleri öldürür.' },
          { id: 'B', text: 'Dışarıdan alınan yüksek Testosteron, Hipotalamus ve Hipofize NEGATİF FEEDBACK yaparak FSH ve LH salgısını tamamen durdurmuştur. LH/FSH olmayınca testisler çalışmayı bırakmış ve küçülmüştür.' },
          { id: 'C', text: 'Testosteron kaslara gidip oradan geri dönememiştir.' },
          { id: 'D', text: 'Pankreas iflas ettiği için olmuştur.' },
          { id: 'E', text: 'Aldosteron eksikliğindendir.' }
        ],
        correctOptionId: 'B',
        explanation: 'İlaç olarak alınan testosteron kana karışınca beyin (Hipofiz) "Vücutta zaten çok fazla hormon var" sanarak FSH ve LH üretimini keser. Kendi fabrikasını (testisleri) kapatır.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Korku anında Adrenalin, uzun süreli açlıkta ise Glukagon ve Kortizol kan şekerini YÜKSELTİR. Kan Şekerini yükselten bu 3 hormonun KARACİĞER üzerindeki mekanizmaları NASILDIR?',
        options: [
          { id: 'A', text: 'Üçü de glikojeni yıkar.' },
          { id: 'B', text: 'Adrenalin ve Glukagon Karaciğerdeki GLİKOJENİ YIKARAK; Kortizol ise yağ/proteinlerden YENİ GLİKOZ ÜRETEREK şekeri yükseltir.' },
          { id: 'C', text: 'Üçü de kaslardaki glikojeni yıkar.' },
          { id: 'D', text: 'Üçü de kandan şeker çeker.' },
          { id: 'E', text: 'Adrenalin şeker üretir, Kortizol glikojen yıkar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Glukagon ve Adrenalin hazırdaki depoyu (glikojen) patlatır. Kortizol ise depo bitince farklı malzemeden (aminoasit/yağ) sıfırdan şeker (glukoneogenez) üretir.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Hipofizin arka lobundan kana salınan ADH hormonu (Vazopressin), böbrekteki nefron kanallarının (toplama kanalı) suya karşı olan geçirgenliğini (Aquaporin kanallarını) artırır. Eğer ADH salgısı aniden ÇOK ARTARSA kanda ve idrarda nasıl bir değişim gözlenir?',
        options: [
          { id: 'A', text: 'Kanın ozmotik basıncı artar, idrar çok sulu olur.' },
          { id: 'B', text: 'Kan sulanır (Hacmi artar, Tansiyon yükselir), İdrar ise SUYU ÇEKİLDİĞİ için çok KOYU (Hipertonik/Derişik) ve az miktarda olur.' },
          { id: 'C', text: 'Kan kurur, idrar artar.' },
          { id: 'D', text: 'Kan şekeri sıfıra iner.' },
          { id: 'E', text: 'İdrarla kalsiyum atılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'ADH suyu idrardan kurtarıp kana hapseder. Bu yüzden kan sulanır (hacim ve tansiyon artar), idrar ise susuz kalıp koyulaşır.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Bir insanın Pankreasındaki Langerhans adacıkları zarar gördüğünde Tip-1 Diyabet gelişir. Diyabet hastalarında kan pH\'ı neden ASİDİĞE kayar (Düşer / Ketoasidoz)?',
        options: [
          { id: 'A', text: 'İnsülin bazik olduğu için' },
          { id: 'B', text: 'Hücreler glikoz kullanamayınca YAĞLARI yakmaya başlar. Yağların yıkımı sonucu oluşan yağ asitleri ve KETON CİSİMCİKLERİ kana karışarak kanı asidik yapar.' },
          { id: 'C', text: 'Mide asidi kana karıştığı için' },
          { id: 'D', text: 'Çok su içtikleri için' },
          { id: 'E', text: 'Glikoz asidik bir madde olduğu için' }
        ],
        correctOptionId: 'B',
        explanation: 'Glikozsuz kalan hücre yağ yıkar. Yağ asitleri ve atık ürünleri olan ketonlar kanda birikince kan pH\'ı ölümcül şekilde düşer (Ketoasidoz koması).'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Sağlıklı bir insanda İnsülin enjekte edildikten sonra (Kanda insülin çok arttığında), kandaki ve idrardaki değişimlerle ilgili hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Kan şekeri hızla hücrelere girer ve kandaki seviyesi düşer.' },
          { id: 'B', text: 'Karaciğerde glikojen sentezi hızlanır.' },
          { id: 'C', text: 'İdrarda yüksek miktarda glikoz (şeker) görülmeye başlar.' },
          { id: 'D', text: 'Kişide şiddetli bir açlık ve terleme (Hipoglisemi belirtisi) hissedilir.' },
          { id: 'E', text: 'Beyin dışındaki hücreler kandaki glikozu alır.' }
        ],
        correctOptionId: 'C',
        explanation: 'İnsülin şekeri kandan çekip hücreye saklar. İdrara şeker ÇIKMASI için kan şekerinin çok YÜKSEK olması (eşik değeri aşması) gerekir. İnsülin varken idrarda şeker olmaz.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Steroit yapılı (yağ) bir hormon olan Kortizol ile Protein yapılı (peptit) bir hormon olan İnsülin\'in ETKİ ETME MEKANİZMALARI karşılaştırıldığında hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'İkisi de zardan geçip çekirdeğe girer.' },
          { id: 'B', text: 'Kortizol hücre zarından içeri girip SİTOPLAZMA/ÇEKİRDEKTEKİ reseptöre bağlanarak doğrudan GEN (DNA) bölgesini aktifler; İnsülin ise zardaki reseptöre dışarıdan bağlanıp İKİNCİ HABERCİ (cAMP vb.) sistemiyle içeride enzimleri çalıştırır.' },
          { id: 'C', text: 'İkisi de zardan geçemez.' },
          { id: 'D', text: 'İnsülin DNA\'yı bozar, Kortizol enzimleri yakar.' },
          { id: 'E', text: 'İkisi de difüzyonla içeri girer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Steroitler (Kortizol, Östrojen, Testosteron) lipit yapısıyla hücreden kolayca geçer ve direkt gen ifadesini değiştirir. Peptitler (İnsülin, Adrenalin) ise kapıda kalarak zile basar (ikinci haberci yollar).'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Bir fareye uzun süre Aldosteron (Tuz tutucu) hormonu yüksek dozda verildiğinde, kanda Sodyum artar, Potasyum ise aşırı atıldığı için düşer (Hipokalemi). Bu durum HANGİ SİSTEMİN çalışmasını doğrudan ve en ciddi şekilde bozar?',
        options: [
          { id: 'A', text: 'Görme duyusunu' },
          { id: 'B', text: 'Sindirimi' },
          { id: 'C', text: 'Sinirsel İletimi ve Kas Kasılmasını (Özellikle Kalp Kası - Aritmi ve Durma Riski)' },
          { id: 'D', text: 'Saç uzamasını' },
          { id: 'E', text: 'Kemik büyümesini' }
        ],
        correctOptionId: 'C',
        explanation: 'Sodyum/Potasyum (Na/K) pompası sinirlerin impuls iletmesi ve kasların (özellikle kalbin) düzenli kasılması için şarttır. Potasyum dibe vurursa kalp ritmi bozulur (aritmi) ve durabilir.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Aşağıdaki hormon çiftlerinden hangisi AYNI YÖNDE etki eden (Sinerjist) hormonlardır?',
        options: [
          { id: 'A', text: 'Kalsitonin – Parathormon' },
          { id: 'B', text: 'İnsülin – Glukagon' },
          { id: 'C', text: 'Adrenalin – Noradrenalin' },
          { id: 'D', text: 'FSH – İnhibin' },
          { id: 'E', text: 'Aldosteron – ANP' }
        ],
        correctOptionId: 'C',
        explanation: 'Adrenalin ve Noradrenalin böbreküstü bezi öz bölgesinden beraber salgılanır, sempatik sistemi destekleyerek kalbi, tansiyonu ve kan şekerini ortaklaşa yükseltirler.'
      }
    ]
  }
]
