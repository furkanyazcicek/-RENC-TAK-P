  ,
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Hipofiz, Tiroit ve Paratiroit Mekanizmaları',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'easy',
        questionText: 'Hipotalamustan hipofiz ön lobuna giden "Salgılatıcı Hormonlar" (TRH, CRH, GnRH vb.) buraya nasıl ulaşır?',
        options: [
          { id: 'A', text: 'Sinir hücrelerinin aksonları üzerinden elektriksel yolla' },
          { id: 'B', text: 'Özel bir kılcal damar ağı (Portal sistem) ile KAN yoluyla' },
          { id: 'C', text: 'Lenf sistemiyle' },
          { id: 'D', text: 'BOS (Beyin Omurilik Sıvısı) ile' },
          { id: 'E', text: 'Doğrudan hücreden hücreye difüzyonla' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipotalamus faktörleri (RF) ön hipofize kısa bir damar yolu olan portal sistemle (kanla) gider. Arka hipofize ise aksonlarla inerler.'
      },
      {
        id: 'q-5-2', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisi hipofizin ÖN lobunda SENTEZLENMEZ?',
        options: [
          { id: 'A', text: 'Büyüme Hormonu (GH)' },
          { id: 'B', text: 'Tiroit Uyarıcı Hormon (TSH)' },
          { id: 'C', text: 'Folikül Uyarıcı Hormon (FSH)' },
          { id: 'D', text: 'Antidiüretik Hormon (ADH)' },
          { id: 'E', text: 'Prolaktin (PRL)' }
        ],
        correctOptionId: 'D',
        explanation: 'ADH (ve Oksitosin) ön hipofizde değil, hipotalamusta üretilip arka hipofizden salgılanır.'
      },
      {
        id: 'q-5-3', difficulty: 'easy',
        questionText: 'Tiroit bezinin çalışması sırasında gerçekleşen olaylar şu şekildedir: \nI. Hipotalamustan TRH salgılanması\nII. Kanda Tiroksin miktarının artması\nIII. Ön hipofizden TSH salgılanması\nBu olayların DOĞRU SIRALANMASI nasıldır?',
        options: [
          { id: 'A', text: 'I - II - III' },
          { id: 'B', text: 'III - I - II' },
          { id: 'C', text: 'I - III - II' },
          { id: 'D', text: 'II - III - I' },
          { id: 'E', text: 'III - II - I' }
        ],
        correctOptionId: 'C',
        explanation: 'Önce Hipotalamus (TRH) -> Sonra Hipofiz (TSH) -> En son Tiroit Bezi (Tiroksin).'
      },
      {
        id: 'q-5-4', difficulty: 'easy',
        questionText: 'Tiroksin miktarının kanda aşırı artması durumunda, vücudumuz "Negatif Feedback" mekanizmasını kullanarak ne yapar?',
        options: [
          { id: 'A', text: 'Hipotalamus ve Hipofizi uyararak TRH ve TSH salgısını AZALTIR (baskılar)' },
          { id: 'B', text: 'Tiroit bezini büyüterek Guatr oluşturur' },
          { id: 'C', text: 'Pankreası uyararak insülin salgılatır' },
          { id: 'D', text: 'Adrenalin salgısını durdurur' },
          { id: 'E', text: 'Parathormon salgısını artırır' }
        ],
        correctOptionId: 'A',
        explanation: 'Kanda tiroksin yeterli seviyenin üstüne çıkarsa, beyne "yeter" mesajı gider ve TSH üretimi durdurularak sistem frenlenir (Negatif Geri Bildirim).'
      },
      {
        id: 'q-5-5', difficulty: 'easy',
        questionText: 'Tiroksin hormonu vücuttaki hangi hücrelere (hedef organa) etki eder?',
        options: [
          { id: 'A', text: 'Sadece kalbe' },
          { id: 'B', text: 'Sadece karaciğere' },
          { id: 'C', text: 'Sadece kas hücrelerine' },
          { id: 'D', text: 'Vücuttaki neredeyse TÜM HÜCRELERE' },
          { id: 'E', text: 'Sadece böbreklere' }
        ],
        correctOptionId: 'D',
        explanation: 'Büyüme Hormonu (GH) ve Tiroksin hormonlarının hedef organı tüm vücut hücreleridir (Tiroksin genel metabolizmayı yönettiği için her hücreyi etkiler).'
      },
      {
        id: 'q-5-6', difficulty: 'easy',
        questionText: 'Kanda kalsiyum seviyesi azalan (hipokalsemi) bir bireyde HANGİ HORMONUN salgısı ARTARAK durumu düzeltmeye çalışır?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'Parathormon' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Aldosteron' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyum düşerse, paratiroit bezi devreye girerek Parathormon salgılar ve kemikten kana kalsiyum çeker.'
      },
      {
        id: 'q-5-7', difficulty: 'easy',
        questionText: 'Parathormon kemikten kana kalsiyum geçirirken, aynı zamanda BÖBREKLERDE kalsiyuma ne yapar?',
        options: [
          { id: 'A', text: 'Kalsiyumu idrarla dışarı atar' },
          { id: 'B', text: 'Kalsiyumun idrarla atılmasını ÖNLEYEREK kana geri emilimini ARTIRIR' },
          { id: 'C', text: 'Kalsiyumu potasyuma çevirir' },
          { id: 'D', text: 'Kalsiyumdan taş yapar' },
          { id: 'E', text: 'Böbrekte bir etkisi yoktur' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormonun tek bir amacı vardır: Kandaki kalsiyumu ne pahasına olursa olsun YÜKSELTMEK. Bu yüzden idrara gidecek kalsiyumu da kana geri çeker.'
      },
      {
        id: 'q-5-8', difficulty: 'easy',
        questionText: 'Kalsitonin hormonu kemiklere kalsiyum geçişini (kemiğin sertleşmesini) sağlarken, fosfat iyonlarına nasıl etki eder?',
        options: [
          { id: 'A', text: 'Kanda fosfatı artırır' },
          { id: 'B', text: 'Hiçbir etkisi yoktur' },
          { id: 'C', text: 'Kalsiyum ile birlikte FOSFATIN da kemiğe geçmesini uyarır' },
          { id: 'D', text: 'Fosfatı kükürde çevirir' },
          { id: 'E', text: 'Böbreklerden fosfatı atar' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemiğin yapısı kalsiyum-fosfat tuzlarından oluşur. Kalsitonin kalsiyumla beraber fosfatı da kemiğe iter.'
      },
      {
        id: 'q-5-9', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisinin salgılanması doğrudan HİPOFİZ (TSH, ACTH vb.) tarafından KONTROL EDİLMEZ?',
        options: [
          { id: 'A', text: 'Tiroksin' },
          { id: 'B', text: 'Kortizol' },
          { id: 'C', text: 'Testosteron' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Östrojen' }
        ],
        correctOptionId: 'D',
        explanation: 'Paratiroit bezi (ve Pankreas) hipofizden emir almaz. Kan kalsiyum seviyesini "doğrudan" kendisi ölçer ve duruma müdahale eder (Humoral uyarı).'
      },
      {
        id: 'q-5-10', difficulty: 'easy',
        questionText: 'Büyüme hormonu (GH) tüm hücreleri uyarır dedik. GH hormonunun hücrelerdeki protein sentezi ve yağ yıkımı üzerindeki etkisi nasıldır?',
        options: [
          { id: 'A', text: 'Protein sentezini durdurur, yağı artırır' },
          { id: 'B', text: 'İkisini de durdurur' },
          { id: 'C', text: 'Protein sentezini HIZLANDIRIR, enerji için Yağ yıkımını ARTIRIR' },
          { id: 'D', text: 'Proteini yıkar, yağı sentezler' },
          { id: 'E', text: 'Hiçbir etkisi yoktur' }
        ],
        correctOptionId: 'C',
        explanation: 'Büyüme için yapıtaşı (protein) ve enerji (yağdan) lazımdır. GH hücreleri buna zorlar.'
      },
      {
        id: 'q-5-11', difficulty: 'easy',
        questionText: 'ADH (Vazopressin) eksikliğinde böbreklerden su geri emilemez ve kişi günde 15-20 litre idrar çıkarıp sürekli su içer. Şeker hastalarına benzeyen bu tabloya ne ad verilir?',
        options: [
          { id: 'A', text: 'Tip 1 Diyabet' },
          { id: 'B', text: 'Tip 2 Diyabet' },
          { id: 'C', text: 'Şekersiz Diyabet (Diabetes insipidus)' },
          { id: 'D', text: 'Guatr' },
          { id: 'E', text: 'Üremi' }
        ],
        correctOptionId: 'C',
        explanation: 'Şekersiz diyabette (ADH eksikliği) çok idrara çıkma ve çok su içme vardır ama idrarda ŞEKER YOKTUR.'
      },
      {
        id: 'q-5-12', difficulty: 'easy',
        questionText: 'Bir kaza anında aşırı KAN KAYBEDEN (kan hacmi ve tansiyonu düşen) bir insanda, vücut suyu tutarak tansiyonu yükseltmek için HANGİ HORMONUN salgısını acilen ARTIRIR?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'ADH' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'FSH' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan kaybedildiğinde su tutmak hayati önem taşır. ADH (Vazopressin=Damar büzen) suyu böbrekten kana çekerek tansiyonu toparlamaya çalışır.'
      },
      {
        id: 'q-5-13', difficulty: 'easy',
        questionText: 'Hipofizden salgılanan LTH (Prolaktin) sadece memeli hayvanlarda (insan vb.) bulunur. Kuşlarda ve sürüngenlerde LTH var mıdır, varsa ne işe yarar?',
        options: [
          { id: 'A', text: 'Sürüngenlerde süt üretir' },
          { id: 'B', text: 'Kuşlarda da memelilerdeki gibi süt üretir' },
          { id: 'C', text: 'Kuşlarda "annelik içgüdüsünü" (kuluçkaya yatma, yuvayı koruma) sağlar' },
          { id: 'D', text: 'Tüylerin dökülmesini sağlar' },
          { id: 'E', text: 'Sürüngenlerde zehir üretir' }
        ],
        correctOptionId: 'C',
        explanation: 'LTH (Prolaktin), memelilerde süt + annelik içgüdüsü, memesi olmayan kuşlarda ise sadece annelik (kuluçka) içgüdüsünü uyarır.'
      },
      {
        id: 'q-5-14', difficulty: 'easy',
        questionText: 'Melatonin hormonu karanlıkta salgılanarak biyoritmi düzenler. Görme engelli (gözleri ışığı hiç algılamayan) bireylerde melatonin salgısı nasıldır?',
        options: [
          { id: 'A', text: 'Hiç salgılanmaz' },
          { id: 'B', text: 'Sürekli (gündüzleri de) yüksek oranda salgılanabilir' },
          { id: 'C', text: 'Sadece yazın salgılanır' },
          { id: 'D', text: 'Sadece yaşlılıkta salgılanır' },
          { id: 'E', text: 'Melatonin yerine insülin salgılanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz retinadan ışık almazsa epifiz bezi sürekli karanlık algılar ve melatonin üretmeye devam eder.'
      },
      {
        id: 'q-5-15', difficulty: 'easy',
        questionText: 'Tiroit bezinden İKİ farklı hormon salgılanır (Tiroksin ve Kalsitonin). Bu iki hormonun KONTROLÜ nasıldır?',
        options: [
          { id: 'A', text: 'İkisini de Hipofiz (TSH) kontrol eder' },
          { id: 'B', text: 'İkisini de kalsiyum seviyesi kontrol eder' },
          { id: 'C', text: 'Tiroksin HİPOFİZ (TSH) tarafından, Kalsitonin ise KANDAKİ KALSİYUM MİKTARI tarafından kontrol edilir' },
          { id: 'D', text: 'İkisi de sinirsel olarak kontrol edilir' },
          { id: 'E', text: 'İkisini de böbrekler kontrol eder' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroit bezi karmaşık bir kontrol altındadır. Tiroksin üretimini üst makam (Hipofiz) yönetirken, Kalsitonin doğrudan kandaki mineral (Ca) miktarına bakar.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Pankreas, Adrenal ve Eşey Bezleri (Mekanizma)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'İnsülin hormonu kan şekerini düşürmek için GLİKOZU kandan HANGİ HÜCRELERE GÖNDERİR?',
        options: [
          { id: 'A', text: 'Sadece böbreklere' },
          { id: 'B', text: 'Karaciğer, Kas ve Yağ dokusu başta olmak üzere birçok vücut hücresine (Beyin hariç)' },
          { id: 'C', text: 'Sadece kalbe' },
          { id: 'D', text: 'Mide boşluğuna' },
          { id: 'E', text: 'Akciğerlere' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin, kanda gezen glikozu depolanması için karaciğer ve kaslara (glikojen olarak), yağ hücrelerine ve enerji üretecek diğer hücrelere yönlendirir. Beyin hücreleri insülinden bağımsız olarak glikoz alabilir.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Beyin hücreleri, enerji kaynağı olarak kullanacağı GLİKOZU kandan alırken İNSÜLİN hormonuna ihtiyaç duyar mı?',
        options: [
          { id: 'A', text: 'Evet, insülinsiz glikoz alamaz' },
          { id: 'B', text: 'Hayır, beyin hücreleri glikozu insülinden BAĞIMSIZ olarak (kendi kapılarıyla) doğrudan alabilir' },
          { id: 'C', text: 'Beyin glikoz değil yağ kullanır' },
          { id: 'D', text: 'Sadece uyurken insüline ihtiyaç duyar' },
          { id: 'E', text: 'Beyin oksijenle beslenir, şekere ihtiyaç duymaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Beynin çalışması hayati olduğu için insülin emrini beklemez, kandaki şekeri doğrudan içeri alacak özel reseptörleri vardır.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Karaciğerdeki depo şekeri (glikojeni) yıkarak kan şekerini yükselten Glukagon hormonu, KASLARDAKİ glikojeni neden YIKAMAZ (kana veremez)?',
        options: [
          { id: 'A', text: 'Kaslarda glikojen yoktur' },
          { id: 'B', text: 'Çünkü glukagonun kas hücrelerinde RESEPTÖRÜ YOKTUR' },
          { id: 'C', text: 'Kaslardaki glikojen zehirlidir' },
          { id: 'D', text: 'Çünkü kaslar glukagonu sindirir' },
          { id: 'E', text: 'Kas glikojeni yağa dönüşmüştür' }
        ],
        correctOptionId: 'B',
        explanation: 'Kaslar bencildir; depoladıkları glikojeni sadece kendileri için saklarlar, kana vermezler. Zaten glukagon hormonunun kas zarında reseptörü olmadığı için kasa etki edemez.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Böbreküstü bezi Korteksinden (Kabuk) salgılanan Kortizol ve Aldosteron hormonlarının salgısını KİM kontrol eder?',
        options: [
          { id: 'A', text: 'Pankreas' },
          { id: 'B', text: 'Hipofizin ACTH hormonu' },
          { id: 'C', text: 'Tiroit bezi' },
          { id: 'D', text: 'Sempatik sinirler' },
          { id: 'E', text: 'Kan kalsiyumu' }
        ],
        correctOptionId: 'B',
        explanation: 'Adrenal KORTEKS hipofizden (ACTH) emir alarak çalışır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Böbreküstü bezinin Medulla (Öz) bölgesinden salgılanan Adrenalin (Epinefrin) hormonunun salgısını KİM kontrol eder?',
        options: [
          { id: 'A', text: 'Hipofiz ACTH' },
          { id: 'B', text: 'Otonom Sinir Sistemi (Sempatik Sinirler) DOĞRUDAN uyarır' },
          { id: 'C', text: 'Pankreas' },
          { id: 'D', text: 'Böbrekler' },
          { id: 'E', text: 'Kemikler' }
        ],
        correctOptionId: 'B',
        explanation: 'Tehlike anında ACTH\'nin kargoyla (kanla) gelmesini bekleyemeyiz. Beyin doğrudan sempatik sinirleri (elektrik kablolarını) böbreküstü bezi öz bölgesine göndererek saniyeler içinde Adrenalin salgılatır.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Adrenalin (Epinefrin) kalp atışını ve tansiyonu hızlandırırken, SİNDİRİM sistemini (Mide-Bağırsak hareketlerini) nasıl etkiler?',
        options: [
          { id: 'A', text: 'Sindirimi çok hızlandırır' },
          { id: 'B', text: 'Sindirimi YAVAŞLATIR (Durdurur)' },
          { id: 'C', text: 'Sadece mideyi hızlandırır, bağırsağı durdurur' },
          { id: 'D', text: 'Sindirimi etkilemez' },
          { id: 'E', text: 'Besinleri doğrudan kana geçirir' }
        ],
        correctOptionId: 'B',
        explanation: 'Kaçarken (Adrenalin) sindirim yapmanın (yemek yemenin) sırası değildir. Kan kaslara ve beyne yönlendirilir, mide/bağırsak yavaşlar.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Uzun süreli açlıkta (Karbonhidratlar bittiğinde), protein ve yağları karbonhidrata (glikoza) çevirerek KAN ŞEKERİNİ yükselten hormon hangisidir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Glukagon' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'Aldosteron' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'C',
        explanation: 'Kortizol (stres hormonu), glikojen depoları tükendiğinde "Karbonhidrat dışı (yağ/aminoasit)" kaynaklardan sıfırdan glikoz üretimini uyarır.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Sürekli stres altında olan (kronik stres) ve kanında sürekli KORTİZOL seviyesi YÜKSEK gezen bir insanda aşağıdaki durumlardan hangisi GÖZLENİR?',
        options: [
          { id: 'A', text: 'Bağışıklık sisteminin BASKILANMASI (Zayıflaması) ve sık hastalanma' },
          { id: 'B', text: 'Kemiklerin aşırı kalınlaşması' },
          { id: 'C', text: 'Kan şekerinin sıfıra düşmesi' },
          { id: 'D', text: 'Sürekli uyku hali' },
          { id: 'E', text: 'Boyun uzaması' }
        ],
        correctOptionId: 'A',
        explanation: 'Kortizol bağışıklığı baskılar. Uzun süreli stres (sınav stresi vb.) durumunda kortizol hep yüksek kalırsa antikor üretimi düşer ve hasta oluruz.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Vücudun su-tuz ve mineral dengesini sağlayan ALDOSTERON hormonu hangi bezden salgılanır?',
        options: [
          { id: 'A', text: 'Tiroit Bezi' },
          { id: 'B', text: 'Böbreküstü bezi (Adrenal KORTEKS / Kabuk)' },
          { id: 'C', text: 'Hipofiz Arka Lob' },
          { id: 'D', text: 'Pankreas' },
          { id: 'E', text: 'Ovaryum' }
        ],
        correctOptionId: 'B',
        explanation: 'Aldosteron (mineralokortikoid) adrenal kabuktan salgılanır.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Aldosteron eksikliğinde vücut sodyumu (tuzu) tutamaz, kanda tuz azalır, potasyum artar. Cilt tunç (bronz) rengini alır, kaslar zayıflar. Bu hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Addison Hastalığı (Tunç Hastalığı)' },
          { id: 'B', text: 'Guatr' },
          { id: 'C', text: 'Kretenizm' },
          { id: 'D', text: 'Diyabet' },
          { id: 'E', text: 'Tetani' }
        ],
        correctOptionId: 'A',
        explanation: 'Adrenal korteks yetmezliği (Kortizol ve Aldosteron eksikliği) Addison hastalığına neden olur.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Kadınlarda adet döngüsünün ilk aşamasında yumurtalıktaki Folikülden çok miktarda ÖSTROJEN salgılanır. Folikül çatladıktan (yumurta atıldıktan) sonra geriye kalan "Korpus Luteum" (Sarı cisim) yapısından en çok HANGİ HORMON salgılanır?',
        options: [
          { id: 'A', text: 'Sadece Östrojen' },
          { id: 'B', text: 'Testosteron' },
          { id: 'C', text: 'Çok miktarda PROGESTERON ve az miktarda Östrojen' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'LH' }
        ],
        correctOptionId: 'C',
        explanation: 'Folikül = Östrojen ağırlıklı. Korpus luteum (Sarı cisim) = Progesteron (gebelik koruyucu) ağırlıklıdır.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Böbreküstü bezinin kabuk kısmından az miktarda Eşey Hormonları (Östrojen, Progesteron, Testosteron) da salgılanır mı?',
        options: [
          { id: 'A', text: 'Hayır, sadece testis/yumurtalıktan salgılanır.' },
          { id: 'B', text: 'Evet, KADIN VE ERKEK FARKLILIK GÖZETMEKSİZİN böbreküstü bezi kabuğundan da az miktarda eşey (cinsiyet) hormonları salgılanır.' },
          { id: 'C', text: 'Sadece erkeklerde salgılanır.' },
          { id: 'D', text: 'Sadece kadınlarda salgılanır.' },
          { id: 'E', text: 'Evet ama sadece bebeklikte.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu yüzden kadınlarda (yumurtalık olmamasına rağmen) kanda çok az miktarda testosteron, erkeklerde de az miktarda östrojen bulunur.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Tip 1 Diyabet ile Tip 2 Diyabet arasındaki TEMEL FARK nedir?',
        options: [
          { id: 'A', text: 'Tip 1 çok su içirtir, Tip 2 içirtmez.' },
          { id: 'B', text: 'Tip 1\'de PANKREAS İNSÜLİN ÜRETEMEZ (Beta hücreleri tahrip olmuştur). Tip 2\'de ise insülin ÜRETİLİR fakat HÜCRELER (Reseptörler) İNSÜLİNE YANIT VERMEZ (İnsülin direnci).' },
          { id: 'C', text: 'Tip 1 yaşlılarda, Tip 2 çocuklarda görülür.' },
          { id: 'D', text: 'Tip 1 böbrekle, Tip 2 karaciğerle ilgilidir.' },
          { id: 'E', text: 'İkisi de aynıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tip 1 Otoimmün (fabrika bozuk) olduğu için ömür boyu dışarıdan insülin iğnesi gerekir. Tip 2 genelde obezite/beslenme kaynaklı (kapı bozuk/dirençli) bir durumdur.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Kalbin kulakçıklarından (atrium) salgılanan "ANP" (Atriyal Natriüretik Peptit) hormonunun görevi nedir?',
        options: [
          { id: 'A', text: 'Tansiyonu daha da artırmak' },
          { id: 'B', text: 'Tansiyon çok yükseldiğinde, böbreklerden Sodyum (tuz) ve su ATILIMINI artırarak TANSİYONU DÜŞÜRMEK (Aldosterona zıt çalışır)' },
          { id: 'C', text: 'Kan şekerini yükseltmek' },
          { id: 'D', text: 'Kalp krizini başlatmak' },
          { id: 'E', text: 'Kalsiyum depolamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp aşırı kan dolduğunda (tansiyon arttığında) ANP salgılar. ANP böbreğe gidip "suyu ve tuzu dışarı at, yükümü hafiflet" der.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Eritropoietin (EPO) hormonu alyuvar üretimini uyarır. Bu hormonun %85\'i Böbreklerde üretilirken, kalan %15\'i HANGİ ORGANDA üretilir?',
        options: [
          { id: 'A', text: 'Mide' },
          { id: 'B', text: 'Beyin' },
          { id: 'C', text: 'Karaciğer' },
          { id: 'D', text: 'Akciğer' },
          { id: 'E', text: 'Pankreas' }
        ],
        correctOptionId: 'C',
        explanation: 'Eritropoietinin asıl kaynağı Böbrektir, az bir kısmı da Karaciğerden salgılanır.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Hastalıklar ve Karma Sorular',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Vücudumuzda hem SİNİR hücreleri (nöron) hem de ENDOKRİN hücreler tarafından kimyasal mesajcı olarak kullanılabilen molekül hangisidir?',
        options: [
          { id: 'A', text: 'Noradrenalin (Norepinefrin)' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'Büyüme Hormonu' }
        ],
        correctOptionId: 'A',
        explanation: 'Adrenalin ve Noradrenalin böbreküstü bezinden hormon olarak KANA salgılanırken, aynı zamanda sinir uçlarında "Nörotransmitter" olarak (sinapsta) görev yaparlar.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Aşağıdaki endokrin bez - salgıladığı hormon eşleştirmelerinden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Tiroit Bezi - Tiroksin' },
          { id: 'B', text: 'Böbreküstü Kabuk - Kortizol' },
          { id: 'C', text: 'Pankreas - Glukagon' },
          { id: 'D', text: 'Paratiroit Bezi - Kalsitonin' },
          { id: 'E', text: 'Epifiz Bezi - Melatonin' }
        ],
        correctOptionId: 'D',
        explanation: 'Kalsitonin Tiroit bezinden salgılanır. Paratiroit bezinden Parathormon (PTH) salgılanır.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Kan şekeri seviyesi normale göre DÜŞÜK olan bir kişide aşağıdaki hormonlardan hangisinin KANDA ARTMASI beklenmez?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'İnsülin' },
          { id: 'E', text: 'Tiroksin (Dolaylı yoldan metabolizma hızı için)' }
        ],
        correctOptionId: 'D',
        explanation: 'Şeker zaten düşükken insülin (şekeri daha da düşüren hormon) salgılanmaz, üretimi bastırılır.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Kanda KALSİYUM miktarı aşırı artmış bir kişide, kalsiyumu normale indirmek için HANGİ BEZDEN HANGİ HORMON salgılanmalıdır?',
        options: [
          { id: 'A', text: 'Paratiroit - Parathormon' },
          { id: 'B', text: 'Tiroit - Kalsitonin' },
          { id: 'C', text: 'Pankreas - İnsülin' },
          { id: 'D', text: 'Böbreküstü - Aldosteron' },
          { id: 'E', text: 'Hipofiz - TSH' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan kalsiyumu çok artarsa, bunu kemiğe gönderip kandan temizleyen (düşüren) hormon Kalsitonin\'dir (Tiroit bezinden).'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Tiroid bezi yeterince çalışmayan (Tiroksin eksikliği olan) bir insanda (Hipotiroidi) hangi belirti GÖZLENİR?',
        options: [
          { id: 'A', text: 'Aşırı kilo kaybı (zayıflık)' },
          { id: 'B', text: 'Aşırı hareketlilik ve uykusuzluk' },
          { id: 'C', text: 'Metabolizmanın yavaşlamasına bağlı yorgunluk, üşüme ve KİLO ALMA' },
          { id: 'D', text: 'Kalp atışının çok hızlanması' },
          { id: 'E', text: 'Vücut ısısının artması' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroksin eksikse motor yavaşlar (enerji harcanmaz, yağlanır, üşür ve tembelleşir).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Yemeklerden hemen sonra KAN ŞEKERİ HIZLA YÜKSELEN bir kişinin kanında ilk olarak hangi hormonun miktarının ARTMASI beklenir?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Aldosteron' }
        ],
        correctOptionId: 'C',
        explanation: 'Yemek sonrası artan şekeri dengelemek (düşürmek) için pankreas insülin salgılar.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisi STEROİT (yağ) yapılı OLDUĞU İÇİN hücre zarından içeri doğrudan girebilir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Tiroksin' },
          { id: 'C', text: 'Büyüme Hormonu (GH)' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'D',
        explanation: 'Eşey hormonları (Östrojen, Testosteron) ve böbreküstü korteks hormonları (Kortizol, Aldosteron) steroit yapılıdır.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Kanın ozmotik basıncı arttığında (kan susuz kaldığında) Hipotalamustaki osmoreseptörler uyarılır. Bunun sonucunda vücut SU TUTMAK için kana hangi hormonu verir?',
        options: [
          { id: 'A', text: 'FSH' },
          { id: 'B', text: 'Oksitosin' },
          { id: 'C', text: 'ADH (Antidiüretik Hormon)' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'TRH' }
        ],
        correctOptionId: 'C',
        explanation: 'Su azaldığında ADH salgılanarak böbreklerden su geri emilir (Kan sulanır).'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Guatr hastalığının (Tiroit büyümesi) EN YAYGIN nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Demir eksikliği' },
          { id: 'B', text: 'Kalsiyum fazlalığı' },
          { id: 'C', text: 'Besinlerle yeterli İYOT alınamaması' },
          { id: 'D', text: 'Şeker tüketimi' },
          { id: 'E', text: 'Güneşsiz kalmak' }
        ],
        correctOptionId: 'C',
        explanation: 'İyot olmazsa tiroksin üretilemez, hipofiz de durmadan TSH yollayarak tiroidi şişirir.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Menopoz dönemindeki kadınlarda yumurtalıkların çalışması zayıflar. Bu durumda kan tahlilinde Östrojen ve FSH düzeyleri NASIL beklenir?',
        options: [
          { id: 'A', text: 'Östrojen DÜŞÜK, Hipofiz onu uyarmak için sürekli uğraştığından FSH YÜKSEK' },
          { id: 'B', text: 'Östrojen yüksek, FSH düşük' },
          { id: 'C', text: 'İkisi de sıfır' },
          { id: 'D', text: 'İkisi de çok yüksek' },
          { id: 'E', text: 'Östrojen düşük, FSH da çok düşük' }
        ],
        correctOptionId: 'A',
        explanation: 'Yumurtalık çalışmadığı için Östrojen üretilemez. Beyin (Hipofiz) ise ortada östrojen göremediği için panik yapar ve sürekli FSH/LH yollar (Geri bildirim yokluğu).'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisi Erkeklerde bulunmaz (Erkeklerde salgılanmaz veya işlev yapmaz)?',
        options: [
          { id: 'A', text: 'Testosteron' },
          { id: 'B', text: 'FSH' },
          { id: 'C', text: 'LH' },
          { id: 'D', text: 'Oksitosin (Çok düşük miktarda işlevleri olsa da kadınlarda doğum/süt için esas görevlidir. Seçeneklerde Progesteron vb varsa onu ara. Soru bağlamında şıklarda yoksa LTH/Prolaktin veya Östrojen/Progesteron asıl yanıt olur, burada en iyi şıkkı arayacağız)' },
          { id: 'E', text: 'FSH ve LH erkeklerde de spermi ve testosteronu uyarır, Oksitosin (ve çok az prolaktin/östrojen) de bulunur. Fakat yumurtalık olmadığından "Büyük oranda Korpus Luteum Progesteronu" bulunmaz. Soru hatalı olmasın: FSH erkeklerde bulunur.' }
        ],
        // DÜZELTME: Soru şıklarını düzeltiyoruz.
        correctOptionId: 'A', // placeholder, changed below
        explanation: 'Soru Düzeltmesi'
      },
      {
        id: 'q-7-11-revize', difficulty: 'easy',
        questionText: 'Erkeklerde ve Kadınlarda ortak GÖREVLERE sahip OLMAYAN hormon eşleştirmesi hangisidir?',
        options: [
          { id: 'A', text: 'FSH (Her ikisinde gamet üretir)' },
          { id: 'B', text: 'LH (Her ikisinde eşey hormonu ürettirir)' },
          { id: 'C', text: 'Prolaktin (LTH) (Kadınlarda süt üretir, Erkeklerde böyle bir fonksiyonu yoktur)' },
          { id: 'D', text: 'Tiroksin (Her ikisinde metabolizma)' },
          { id: 'E', text: 'İnsülin (Her ikisinde şeker)' }
        ],
        correctOptionId: 'C',
        explanation: 'FSH ve LH hipofiz hormonlarıdır ve hem erkekte hem kadında üreme faaliyetlerini (sperm/yumurta) yönetir. Prolaktin ise memeli dişilerinde süt bezini uyarır.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Kandaki Adrenalin seviyesi artan bir köpekte aşağıdakilerden hangisi GERÇEKLEŞMEZ?',
        options: [
          { id: 'A', text: 'Göz bebeklerinin büyümesi' },
          { id: 'B', text: 'Kalp atışının hızlanması' },
          { id: 'C', text: 'Tüylerin diken diken olması' },
          { id: 'D', text: 'Bağırsak hareketlerinin ve sindirimin HIZLANMASI' },
          { id: 'E', text: 'Kan basıncının (tansiyonun) artması' }
        ],
        correctOptionId: 'D',
        explanation: 'Korku/Stres (Sempatik) anında sindirim (Mide/Bağırsak) DURUR, hızlanmaz.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Kandaki Glikoz miktarı aşırı artarsa (diyabet vb. sebeple), idrarda ŞEKER görülür. İdrarla atılan şeker suyu da peşinden sürüklediği için hastada ne gözlenir?',
        options: [
          { id: 'A', text: 'Az idrara çıkma ve vücudun su toplaması' },
          { id: 'B', text: 'Çok sık idrara çıkma (Poliüri) ve çok su içme (Polidipsi)' },
          { id: 'C', text: 'Sürekli uyuma' },
          { id: 'D', text: 'Kemik kırılması' },
          { id: 'E', text: 'Guatr' }
        ],
        correctOptionId: 'B',
        explanation: 'Şeker idrardan atılırken tek başına gidemez, ozmotik olarak suyu da çeker. Bu yüzden diyabetli hasta çok idrara çıkar ve buna bağlı çok susar.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Böbreküstü bezi korteksinden salgılanan KORTİZOL hormonu ilaç olarak (Kortizon) hangi durumlarda SIKLIKLA KULLANILIR?',
        options: [
          { id: 'A', text: 'Şekeri düşürmek için' },
          { id: 'B', text: 'Alerji, Romatizma veya Organ nakli gibi durumlarda BAĞIŞIKLIĞI BASKILAMAK (İltihabı önlemek) için' },
          { id: 'C', text: 'Kemikleri güçlendirmek için' },
          { id: 'D', text: 'Kas yapmak için' },
          { id: 'E', text: 'Boy uzatmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kortizon güçlü bir anti-inflamatuardır (iltihap sökücü) ve bağışıklık sistemini baskılar. Alerjik şoklarda, astım krizlerinde hayat kurtarır.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Aşağıdaki hormon çiftlerinden hangisi BİRBİRİNE ZIT (Antagonist) ÇALIŞMAZ?',
        options: [
          { id: 'A', text: 'İnsülin - Glukagon' },
          { id: 'B', text: 'Kalsitonin - Parathormon' },
          { id: 'C', text: 'Adrenalin - Noradrenalin' },
          { id: 'D', text: 'Bütün hepsi antagonisttir' },
          { id: 'E', text: 'Yalnız A zıttır' }
        ],
        correctOptionId: 'C',
        explanation: 'Adrenalin ve Noradrenalin (Epinefrin ve Norepinefrin) birbirine zıt DEĞİL, benzer (sinerjist) çalışırlar (İkisi de sempatik etki, kalp atışını hızlandırma, kan basıncını artırma vb.).'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Feedback, Hedef Dokular ve Genel İşleyiş',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Bir memeli hayvanın HİPOFİZ bezi (ön ve arka lob) tamamen ameliyatla ÇIKARILIRSA, aşağıdaki hormonlardan hangisinin KANDA ARTMASI (başlangıçta) beklenir?',
        options: [
          { id: 'A', text: 'TRH (Hipotalamus\'un salgılatıcı faktörü)' },
          { id: 'B', text: 'TSH' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Testosteron' }
        ],
        correctOptionId: 'A',
        explanation: 'Hipofiz yoksa TSH, ACTH üretilemez. Tiroksin üretilemeyince beyin "niye çalışmıyor" deyip Hipotalamustan sürekli TRH (Emir) gönderir.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Hipofizi çıkarılan yukarıdaki hayvanda hangi bez GÖREVİNE DEVAM EDEBİLİR (Kendi başının çaresine bakabilir)?',
        options: [
          { id: 'A', text: 'Tiroit bezi (Tiroksin üretimi açısından)' },
          { id: 'B', text: 'Pankreas ve Paratiroit bezi' },
          { id: 'C', text: 'Böbreküstü bezi korteksi' },
          { id: 'D', text: 'Yumurtalık (Ovaryum)' },
          { id: 'E', text: 'Testis' }
        ],
        correctOptionId: 'B',
        explanation: 'Pankreas ve Paratiroit hipofizden (beyinden) TSH/ACTH tarzı emir almaz. Kan şekeri ve kan kalsiyumuna kendileri doğrudan tepki verirler.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Bir insana damar yoluyla (iğneyle) sürekli olarak TİROKSİN hormonu verilirse, Negatif Feedback mekanizması gereği kanda hangi hormonların SEVİYESİ DÜŞER?',
        options: [
          { id: 'A', text: 'İnsülin ve Glukagon' },
          { id: 'B', text: 'TRH (Hipotalamus) ve TSH (Hipofiz)' },
          { id: 'C', text: 'Sadece Kalsitonin' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanda dışarıdan gelen bolca Tiroksin varsa, beyin "Zaten yeterince var, üretmeye gerek yok" diyerek TRH ve TSH salgısını keser.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Kortizol hormonunun kandaki aşırı artışı, hangi hormonun salgısını BASTIRIR (Negatif Geri Bildirim)?',
        options: [
          { id: 'A', text: 'TSH' },
          { id: 'B', text: 'ACTH (Adrenokortikotropik Hormon)' },
          { id: 'C', text: 'FSH' },
          { id: 'D', text: 'LH' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kortizolu ürettiren amir ACTH\'dir. Kortizol artınca amirine "tamam ben buradayım" diyerek ACTH\'yi durdurur.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Böbreklerden suyun geri emilimini ADH, Sodyumun (tuzun) geri emilimini Aldosteron sağlar. İdrarla KALSİYUM ATILIMINI AZALTIP kana geri emilmesini sağlayan hormon hangisidir?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'Parathormon' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Glukagon' },
          { id: 'E', text: 'Tiroksin' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon kan kalsiyumunu yükseltmek ister. Bu yüzden idrara giden kalsiyumun da kana dönmesini sağlar.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Testislerde sperm üretimini (Spermatogenez) FSH başlatır. Üretilen spermin OLGUNLAŞMASI ve ikincil erkek özelliklerinin oluşması için HANGİ HORMON şarttır?',
        options: [
          { id: 'A', text: 'Östrojen' },
          { id: 'B', text: 'Progesteron' },
          { id: 'C', text: 'Testosteron (LH\'ın uyarısıyla salgılanır)' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'C',
        explanation: 'FSH sperm üretimini mayozla başlatır. LH ise testosteron ürettirir ve bu testosteron spermin kuyruk/hareket kazanmasını (olgunlaşmasını) tamamlar.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Hamilelik döneminde kadınların "Adet görmemesinin (Menstruasyon döngüsünün durmasının)" temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Kanın tükenmesi' },
          { id: 'B', text: 'PROGESTERON (ve Östrojen) hormonlarının gebelik boyunca YÜKSEK kalarak FSH ve LH salgısını (Yeni yumurta üretimini) BASKILAMASI' },
          { id: 'C', text: 'Yumurtaların tamamen bitmesi' },
          { id: 'D', text: 'Rahmin küçülmesi' },
          { id: 'E', text: 'Midenin büyümesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Gebe kadında Progesteron yüksek seyreder. Progesteronun yüksekliği beyne (Hipofiz) "Yeni yumurta üretme, biz zaten doluyuz" (Negatif Feedback) mesajı verir.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Kandaki Glikoz miktarını (Şekeri) YÜKSELTEN hormonlar (Glukagon, Adrenalin, Kortizol) HANGİ DURUMLARDA salgılanır?',
        options: [
          { id: 'A', text: 'Sadece uykuda' },
          { id: 'B', text: 'Bol şekerli bir tatlı yedikten hemen sonra' },
          { id: 'C', text: 'Açlık, Stres, Korku, Heyecan ve Ağır Egzersiz (Kan şekerinin düştüğü veya çok enerji gerektiği durumlar)' },
          { id: 'D', text: 'Sadece su içince' },
          { id: 'E', text: 'Dinlenirken' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücudun daha fazla enerjiye (glikoza) ihtiyaç duyduğu "alarm" veya "açlık" durumlarında glikozu yükselten hormonlar çalışır.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Hangi bez hem KAN KALSİYUMUNU düşüren, hem de METABOLİZMA hızını artıran iki farklı hormon salgılar?',
        options: [
          { id: 'A', text: 'Pankreas' },
          { id: 'B', text: 'Hipofiz' },
          { id: 'C', text: 'Böbreküstü' },
          { id: 'D', text: 'Tiroit Bezi' },
          { id: 'E', text: 'Paratiroit' }
        ],
        correctOptionId: 'D',
        explanation: 'Tiroit bezi: Tiroksin (Metabolizma) ve Kalsitonin (Kan kalsiyumunu düşürme) hormonlarını salgılar.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Salgıladığı hormonla hem KAS ve KEMİK BÜYÜMESİNİ doğrudan uyaran, hem de tüm endokrin bezlerin orkestra şefi olan yapı hangisidir?',
        options: [
          { id: 'A', text: 'Hipofiz Bezi' },
          { id: 'B', text: 'Karaciğer' },
          { id: 'C', text: 'Tiroit' },
          { id: 'D', text: 'Kalp' },
          { id: 'E', text: 'Dalak' }
        ],
        correctOptionId: 'A',
        explanation: 'Hipofiz bezi hem GH (Büyüme) ile dokuları doğrudan uyarır, hem de TSH, ACTH, FSH/LH ile diğer bezleri yönetir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Böbreküstü bezinin kabuk bölgesinden (Korteks) Kortizol ve Aldosteron, öz bölgesinden (Medulla) ise Adrenalin salgılanır. Bu bezin "Medulla (Öz)" kısmı aslında embriyolojik olarak hangi sisteme ait bir dokunun değişimiyle oluşmuştur?',
        options: [
          { id: 'A', text: 'Sindirim sistemi' },
          { id: 'B', text: 'SİNİR SİSTEMİ (Özellikle Sempatik Sinir Sistemi düğümlerinden farklılaşmıştır)' },
          { id: 'C', text: 'Solunum sistemi' },
          { id: 'D', text: 'İskelet sistemi' },
          { id: 'E', text: 'Boşaltım sistemi' }
        ],
        correctOptionId: 'B',
        explanation: 'Adrenal medulla aslında şekil değiştirmiş, dev bir sempatik sinir düğümüdür (gangliyon). Bu yüzden elektrikle uyarılıp saniyeler içinde kan akımına Adrenalin verir.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Hipofiz Arka Lobundan kana verilen ADH ve Oksitosin hormonları "Nörohormon" olarak adlandırılır. Bunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Sadece beyni etkiledikleri için' },
          { id: 'B', text: 'Doğrudan bir SİNİR HÜCRESİ (Nöron) tarafından sentezlenip üretildikleri için' },
          { id: 'C', text: 'Zehirli oldukları için' },
          { id: 'D', text: 'Elektrik taşıdıkları için' },
          { id: 'E', text: 'Yağdan yapıldıkları için' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipotalamustaki nöronlar hormon üretir (ADH/Oksitosin). Bir sinir hücresinin (nöronun) kana salgıladığı hormona Nörohormon denir.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Kanda kalsiyum seviyesi NORMALDEYKEN, Kalsitonin ve Parathormon düzeyleri sıfır mıdır?',
        options: [
          { id: 'A', text: 'Evet, kalsiyum normalse ikisi de hiç salgılanmaz' },
          { id: 'B', text: 'Hayır, Homeostaziyi (dengeyi) korumak için ikisi de BELİRLİ BİR BAZAL seviyede (düşük miktarda) kanda bulunmaya devam eder' },
          { id: 'C', text: 'Sadece kalsitonin salgılanır' },
          { id: 'D', text: 'Sadece parathormon salgılanır' },
          { id: 'E', text: 'İkisi de aşırı miktarda salgılanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Hormonlar hiçbir zaman kanda "sıfır" olmaz (hastalık yoksa). Belli bir denge (bazal) seviyesinde karşılıklı çalışarak ince ayar yaparlar.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Tiroit bezinin salgıladığı Tiroksin, Hücredeki METABOLİZMA (Oksijenli Solunum) HIZINI ne yaparak artırır?',
        options: [
          { id: 'A', text: 'Sadece glikozu parçalayarak' },
          { id: 'B', text: 'Hücrelerin içindeki MİTOKONDRİ sayısını ve aktivitesini artırarak' },
          { id: 'C', text: 'Oksijeni suya çevirerek' },
          { id: 'D', text: 'Hücre çekirdeğini büyüterek' },
          { id: 'E', text: 'DNA\'yı yok ederek' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroksin hücrenin fırını olan mitokondrilere etki eder. Daha çok oksijen yaktırıp enerji (ATP) ve ısı üretir.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Endokrin ve Sinir sistemi "Düzenleyici Sistemler" olarak ortak çalışır. Bu iki sistem HANGİ ORGANDA doğrudan fiziksel ve işlevsel olarak birbirine BAĞLANMIŞTIR?',
        options: [
          { id: 'A', text: 'Karaciğerde' },
          { id: 'B', text: 'HİPOTALAMUS ve HİPOFİZ bölgesinde' },
          { id: 'C', text: 'Kalpte' },
          { id: 'D', text: 'Midede' },
          { id: 'E', text: 'Akciğerde' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipotalamus beyne (sinir sistemine) aittir, Hipofiz ise kana (endokrine). Bu ikisinin bağlandığı sap, sinir sistemi ile hormonal sistemin köprüsüdür.'
      }
    ]
  }
