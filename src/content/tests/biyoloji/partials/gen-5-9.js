  ,
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Çeviri (Translasyon) ve Mekanizma',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Protein sentezinin (Translasyon) yapıldığı Ribozom organeli HANGİ İKİ ALT BİRİMDEN oluşur?',
        options: [
          { id: 'A', text: 'Sadece tek parçadır' },
          { id: 'B', text: 'Büyük ve Küçük Alt Birim (Sentez yokken ayrı gezerler, sentez sırasında birleşirler)' },
          { id: 'C', text: 'Zar ve çekirdekten' },
          { id: 'D', text: 'Üç parçadan' },
          { id: 'E', text: 'DNA ve RNA\'dan' }
        ],
        correctOptionId: 'B',
        explanation: 'Ribozom iki parçadır. mRNA küçük alt birime bağlanınca sentez başlar ve büyük alt birim üstlerine kapanır.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Ökaryot bir hücrede üretilen mRNA (Mesajcı RNA), çekirdekte sentezlendikten sonra NEREYE GİDER?',
        options: [
          { id: 'A', text: 'Mitokondriye' },
          { id: 'B', text: 'Çekirdek porlarından (deliklerinden) geçerek Sitoplazmadaki RİBOZOMA gider' },
          { id: 'C', text: 'Hücre zarına gider' },
          { id: 'D', text: 'DNA\'ya döner' },
          { id: 'E', text: 'Lizozoma gider' }
        ],
        correctOptionId: 'B',
        explanation: 'mRNA, kralın (DNA) fermanıdır. Çekirdekten çıkar ve fabrikanın (Ribozomun) okuması için sitoplazmaya geçer.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Ribozomun Büyük Alt Birimi üzerinde tRNA\'ların girip çıktığı BÖLGELER (Siteler) vardır. Okunacak tRNA nın girdiği, Aminoasitlerin eklendiği ve Boş tRNA nın çıktığı A-P-E bölgelerinin AÇILIMI (Basitçe işlevi) nedir?',
        options: [
          { id: 'A', text: 'Sadece P bölgesi vardır' },
          { id: 'B', text: 'A(Aminoasit girişi) - P(Peptit zinciri) - E(Exit/Çıkış)' },
          { id: 'C', text: 'Adenin, Prolin, Enzim' },
          { id: 'D', text: 'Alt, Peptit, Elastik' },
          { id: 'E', text: 'Ana, Pür, Ek' }
        ],
        correctOptionId: 'B',
        explanation: 'Yeni gelen aminoasit yüklü tRNA A(Aminoacyl) sitesinden girer, P(Peptidyl) sitesinde zincire eklenir, E(Exit) sitesinden boş olarak çıkar.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Peptit bağları HANGİ MOLEKÜLLER ARASINDA kurulur?',
        options: [
          { id: 'A', text: 'DNA ile RNA arasında' },
          { id: 'B', text: 'Şeker ile Fosfat arasında' },
          { id: 'C', text: 'Ribozomda yan yana gelen AMİNO ASİTLER arasında (Birinci amino asitin Karboksil grubu ile ikincinin Amino grubu arasında)' },
          { id: 'D', text: 'Yağ asitleri arasında' },
          { id: 'E', text: 'Kodon ile Antikodon arasında' }
        ],
        correctOptionId: 'C',
        explanation: 'Proteinlerin yapı taşı olan amino asitler Peptit bağı ile zincir (polipeptit) oluşturur.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Amino asitlerin birbirine peptit bağıyla bağlanmasını sağlayan (Katalizleyen) şey nedir?',
        options: [
          { id: 'A', text: 'Sadece su' },
          { id: 'B', text: 'DNA polimeraz' },
          { id: 'C', text: 'Ribozomun BÜYÜK ALT BİRİMİNDEKİ rRNA molekülü (Peptidil transferaz ribozim aktivitesi)' },
          { id: 'D', text: 'Kloroplast' },
          { id: 'E', text: 'Ligaz' }
        ],
        correctOptionId: 'C',
        explanation: 'Ribozomdaki rRNA sadece yapısal değil, aynı zamanda bağ kurucu enzim (ribozim) gibi çalışır.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Protein sentezinin BİTMESİ için ribozoma HANGİ KODONUN gelmesi gerekir?',
        options: [
          { id: 'A', text: 'AUG (Start)' },
          { id: 'B', text: 'UAA, UAG veya UGA (Stop kodonları)' },
          { id: 'C', text: 'CCC' },
          { id: 'D', text: 'GGG' },
          { id: 'E', text: 'AAA' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu üç stop kodonundan herhangi biri (A sitesine) gelirse çeviri durur.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Stop kodonu ribozoma geldiğinde neden tRNA (Amino asit) GELMEZ de sentez durur?',
        options: [
          { id: 'A', text: 'Enerji bittiği için' },
          { id: 'B', text: 'Stop kodonlarına uygun Antikodon (tRNA) YOOtur. Bunların yerine "Salıverici Faktör (Release Factor)" bağlanır ve sistemi dağıtır.' },
          { id: 'C', text: 'Ribozom yorulduğu için' },
          { id: 'D', text: 'Amino asit bittiği için' },
          { id: 'E', text: 'Su geldiği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Durdurucu kodonların fiziksel bir tRNA karşılığı yoktur. Salıverici protein gelir ve bitişi onaylar.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Sentezlenen Polipeptit (Protein zinciri) ribozomdan ÇIKTIKTAN SONRA doğrudan çalışabilir mi?',
        options: [
          { id: 'A', text: 'Evet, hemen çalışır' },
          { id: 'B', text: 'Hayır, düz bir zincir halindedir. Endoplazmik Retikulum veya Golgi gibi organellerde KATLANARAK (3 Boyutlu yapı kazanarak) İŞLEVSEL HALE GELMELİDİR.' },
          { id: 'C', text: 'Sadece parçalanır' },
          { id: 'D', text: 'Tekrar DNA\'ya döner' },
          { id: 'E', text: 'Çöpe gider' }
        ],
        correctOptionId: 'B',
        explanation: 'Düz iplik (Primer yapı) işe yaramaz. Proteinin aktif olabilmesi için bükülüp şekil alması (Sekonder/Tersiyer yapı) gerekir.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Hücrede BİR PROTEİNİN sentezi sırasında ŞİFREYİ VEREN DNA bölgesi (Gen) tamamen yok edilir mi?',
        options: [
          { id: 'A', text: 'Evet, kullanıldıktan sonra parçalanır' },
          { id: 'B', text: 'Hayır, DNA sadece şifreyi (mRNA olarak) verir, kalıp ZARAR GÖRMEZ ve tekrar tekrar kullanılabilir.' },
          { id: 'C', text: 'Protein DNA\'yı yer' },
          { id: 'D', text: 'Yarısı yok olur' },
          { id: 'E', text: 'Ribozom DNA\'yı ezer' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA kütüphanedeki referans kitabıdır. mRNA fotokopidir. Fotokopi okunur ve atılır, ama asıl kitap (DNA) asla harcanmaz.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Protein sentezinde KULLANILAN ve daha sonra hücrede PARÇALANIP geri dönüştürülen Molekül hangisidir?',
        options: [
          { id: 'A', text: 'DNA' },
          { id: 'B', text: 'Ribozom' },
          { id: 'C', text: 'mRNA (İşi bittiğinde enzimatik olarak parçalanır, nükleotitleri tekrar kullanılır)' },
          { id: 'D', text: 'Amino asitler (Proteine katılır, yok olmazlar)' },
          { id: 'E', text: 'tRNA' }
        ],
        correctOptionId: 'C',
        explanation: 'Kısa ömürlü ve en çok sentezlenip yıkılan molekül mRNA\'dır. (tRNA ve rRNA daha dayanıklıdır ve tekrar tekrar kullanılır).'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Aynı proteinden SÜREKLİ VE ÇOK SAYIDA (Örneğin tükürük bezi hücresinde Amilaz enzimi) üretilecekse, hücre SÜREKLİ YENİ mRNA mı üretir?',
        options: [
          { id: 'A', text: 'Evet, her defasında çekirdeğe gidip yeni şifre alır' },
          { id: 'B', text: 'Hayır, AYNI mRNA molekülü parçalanana kadar DEFALARCA Ribozomlar tarafından okunabilir.' },
          { id: 'C', text: 'Yeni DNA üretir' },
          { id: 'D', text: 'Proteinler kendi kendini kopyalar' },
          { id: 'E', text: 'Hücre bölünür' }
        ],
        correctOptionId: 'B',
        explanation: 'Ekonomi prensibi: Bir fotokopi (mRNA) okunduktan sonra yırtılmamışsa tekrar tekrar okunabilir.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Bütün proteinler metiyonin (AUG) amino asidi ile başlar. Ancak doğadaki olgun proteinlerin (örneğin insülinin) hepsi metiyonin ile başlamaz. Neden?',
        options: [
          { id: 'A', text: 'Metiyonin sonradan gaza dönüşür' },
          { id: 'B', text: 'Protein sentezlendikten sonra enzimlerle DÜZENLENİR (Kesilir) ve baştaki metiyonin genellikle KOPARILIP atılır.' },
          { id: 'C', text: 'Başlangıç kodonu yanlıştır' },
          { id: 'D', text: 'Sentez tersten başlar' },
          { id: 'E', text: 'Başka kodon metiyonin getirir' }
        ],
        correctOptionId: 'B',
        explanation: 'Post-translasyonel (Çeviri sonrası) modifikasyonlarla proteinler kesilip biçilir (aktifleşir).'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Protein sentezinde (Translasyonda) SU ÇIKIŞI (Dehidrasyon Sentezi) meydana gelir mi?',
        options: [
          { id: 'A', text: 'Hayır, su harcanır' },
          { id: 'B', text: 'Evet, her Peptit Bağı kurulduğunda 1 molekül SU (H₂O) açığa çıkar.' },
          { id: 'C', text: 'Su hiçbir zaman çıkmaz' },
          { id: 'D', text: 'Oksijen çıkar' },
          { id: 'E', text: 'Azot çıkar' }
        ],
        correctOptionId: 'B',
        explanation: 'Biyolojide polimer (uzun zincir) sentezlerinin tamamında (Protein, Karbonhidrat, Yağ vs) bağ sayısı kadar Su açığa çıkar (Dehidrasyon).'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Transkripsiyon (mRNA üretimi) sırasında DNA zincirlerinden hangisi ŞİFREYİ VERİR (Kalıp olur)?',
        options: [
          { id: 'A', text: 'Her iki zincir aynı anda' },
          { id: 'B', text: 'Anlamlı Zincir (Kalıp İplik)' },
          { id: 'C', text: 'Sadece Timinler' },
          { id: 'D', text: 'Guaninler' },
          { id: 'E', text: 'Şekerler' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA nın şifre veren ipliğine "Anlamlı İplik (Kalıp)", diğerine ise "Tamamlayıcı İplik" denir.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Eğer bir hücrede "Ribozom" organeli tamamen çalışmaz hale gelirse, hangi HAYATİ molekül üretilemez?',
        options: [
          { id: 'A', text: 'Glikoz' },
          { id: 'B', text: 'Yağ' },
          { id: 'C', text: 'Protein (ve dolayısıyla Enzimler)' },
          { id: 'D', text: 'Su' },
          { id: 'E', text: 'Mineral' }
        ],
        correctOptionId: 'C',
        explanation: 'Ribozom yoksa protein yok, enzim yok. Enzim yoksa yaşam biter. Tüm canlıların ribozom bulundurmak zorunda olmasının sebebi budur.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Santral Dogma ve Mutasyonlar',
    type: 'easy',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Hücre döngüsünde Replikasyon (DNA kopyalanması) HER ZAMAN OLUR MU (Örneğin sadece protein sentezleneceği zaman DNA eşlenir mi)?',
        options: [
          { id: 'A', text: 'Evet, her protein sentezinde DNA kopyalanır' },
          { id: 'B', text: 'Hayır. Replikasyon (DNA Eşlenmesi) SADECE HÜCRE BÖLÜNECEĞİ ZAMAN (İnterfazda) BİR KEZ yapılır. Protein sentezi için replikasyona gerek yoktur, Transkripsiyon yeterlidir.' },
          { id: 'C', text: 'Sadece gece olur' },
          { id: 'D', text: 'Hiç olmaz' },
          { id: 'E', text: 'Günde 10 kez olur' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok karıştırılan bir durum. DNA ancak hücre çoğalacaksa 2 katına çıkar. Rutin yaşamda (protein yaparken vb) sadece DNA üzerinden RNA okunur (Transkripsiyon).'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Hücrede meydana gelen bir MUTASYON (DNA hasarı), eğer Transkripsiyon (RNA yazılımı) veya Translasyon (Okunma) aşamasında olursa NESİLDEN NESİLE AKTARILIR MI?',
        options: [
          { id: 'A', text: 'Evet, kesinlikle aktarılır' },
          { id: 'B', text: 'Hayır. Kalıtsal olabilmesi için Mutasyonun doğrudan DNA ÜZERİNDE ve ÜREME HÜCRELERİNDE (Sperm/Yumurta vb) meydana gelmesi gerekir.' },
          { id: 'C', text: 'Bazen aktarılır' },
          { id: 'D', text: 'RNA ile aktarılır' },
          { id: 'E', text: 'Babaya geçer' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotokopideki (RNA) veya üründeki (Protein) hata sadece o anlık sorun yaratır (o protein bozuk çıkar). Ama ana kalıp (DNA) bozulursa hata kalıcı olur.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'DNA molekülü üzerinde, özel bir PROTEİNİN sentezinden sorumlu olan ANLAMLI ŞİFRE PARÇALARINA (Bölümlere) ne ad verilir?',
        options: [
          { id: 'A', text: 'Gen' },
          { id: 'B', text: 'Kromozom' },
          { id: 'C', text: 'Ribozom' },
          { id: 'D', text: 'Kodon' },
          { id: 'E', text: 'Nükleotit' }
        ],
        correctOptionId: 'A',
        explanation: 'Gen, kromozomlar üzerindeki anlamlı bilgi (karakter/protein şifresi) taşıyan nükleotit dizileridir. (Örn: Göz rengi geni).'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Eğer bir DNA molekülünde bulunan "A-T" bazı mutasyon sonucu kopar ve yerine "G-C" bazı gelirse (Nokta mutasyonu), bu durum KESİNLİKLE proteinin yapısını değiştirir mi?',
        options: [
          { id: 'A', text: 'Evet, kesinlikle değiştirir' },
          { id: 'B', text: 'Hayır, KESİN DEĞİLDİR. Eğer değişen yeni kodon (şifre) DA AYNI AMİNO ASİDİ şifreliyorsa (Genetik kodun dejenereliği) proteinin dizilimi HİÇ DEĞİŞMEZ (Sessiz Mutasyon).' },
          { id: 'C', text: 'Bütün hücreyi öldürür' },
          { id: 'D', text: 'Yeni organel oluşturur' },
          { id: 'E', text: 'Sadece rengi değiştirir' }
        ],
        correctOptionId: 'B',
        explanation: 'Aynı amino asidi birden çok şifre (kodon) kodlayabildiği için, bazı küçük harf değişiklikleri amino asit dizilimini (dolayısıyla proteini) bozmaz.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Orak Hücreli Anemi hastalığı nasıl bir mutasyon sonucu oluşur?',
        options: [
          { id: 'A', text: 'DNA\'nın tamamının silinmesi' },
          { id: 'B', text: 'DNA üzerindeki TEK BİR NÜKLEOTİDİN (Nokta mutasyonu) değişmesi sonucu, Hemoglobin proteinindeki tek bir amino asitin yanlış kodlanması ve proteinin yapısının bozulması' },
          { id: 'C', text: 'Glikozun zehirlenmesi' },
          { id: 'D', text: 'Kan hücrelerinin su içmesi' },
          { id: 'E', text: 'Kemiklerin kırılması' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek bir harf (baz) hatası, proteinin şeklini bozar ve kan hücresi orak şeklini alır. Bu nokta mutasyonuna en meşhur örnektir.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Çevresel faktörlerin (Radyasyon, X Işınları, Zehirli kimyasallar, Virüsler) etkisiyle DNA diziliminde (şifresinde) meydana gelen KALICI bozulmalara genel olarak ne denir?',
        options: [
          { id: 'A', text: 'Adaptasyon' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'Modifikasyon' },
          { id: 'D', text: 'Evrim' },
          { id: 'E', text: 'Seçilim' }
        ],
        correctOptionId: 'B',
        explanation: 'Mutasyon, genetik bilginin rastgele ve kalıcı olarak hasar görmesi/değişmesidir.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Sadece vucüt (soma) hücrelerinde (Örneğin deri hücrende, karaciğerinde) meydana gelen bir mutasyon KİMLERİ ETKİLER?',
        options: [
          { id: 'A', text: 'Tüm sülaleyi' },
          { id: 'B', text: 'Çocukları (Yeni nesli)' },
          { id: 'C', text: 'YALNIZCA o bireyin kendisini (Örn: Cilt kanseri olması). Üreme hücresi olmadığı için çocuklara GEÇMEZ.' },
          { id: 'D', text: 'Sadece yaşlıları' },
          { id: 'E', text: 'Hiç kimseyi' }
        ],
        correctOptionId: 'C',
        explanation: 'Somatik mutasyonlar kalıtsal değildir, sadece bireyi bağlar.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Retrovirüsler (Örneğin HIV/AIDS virüsü) genetik materyal olarak RNA taşırlar. Hücreye girdiklerinde kendi RNA\'larından Ters bir işlemle DNA üretirler (Revers Transkripsiyon). Bunu HANGİ ENZİMLE yaparlar?',
        options: [
          { id: 'A', text: 'DNA Ligaz' },
          { id: 'B', text: 'Ters Transkriptaz (Revers Transkriptaz)' },
          { id: 'C', text: 'Amilaz' },
          { id: 'D', text: 'Lipaz' },
          { id: 'E', text: 'Ribozom' }
        ],
        correctOptionId: 'B',
        explanation: 'Santral dogmanın tersine akabildiği tek istisna (RNA -> DNA) bazı virüslerdeki Ters Transkriptaz enzimidir.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Protein sentezinde kullanılan 20 ÇEŞİT amino asitin bir kısmı hücrede üretilebilirken, bir kısmı (Özellikle İnsanlar için 8 tanesi) DIŞARIDAN HAZIR ALINMAK ZORUNDADIR. Dışarıdan zorunlu alınan bu amino asitlere ne ad verilir?',
        options: [
          { id: 'A', text: 'Gereksiz amino asit' },
          { id: 'B', text: 'Temel (Esansiyel/Zorunlu) Amino Asitler' },
          { id: 'C', text: 'Yapay amino asit' },
          { id: 'D', text: 'Zehirli amino asit' },
          { id: 'E', text: 'Glikozlu asit' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsanlar 12 amino asidi kendisi üretebilir (dönüştürebilir), ama 8 tanesini mecburen besinlerle (Bitki/Hayvan yiyerek) dışarıdan alır. Bunlara esansiyel denir.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Ökaryotlarda (Örn: İnsan hücrelerinde), gen (DNA) bölgesinde Proteini KODLAYAN (Anlamlı/Aktif) parçalara ve Proteini KODLAMAYAN (Çıkarılıp atılan aradaki boş) parçalara ne ad verilir?',
        options: [
          { id: 'A', text: 'Start ve Stop' },
          { id: 'B', text: 'Ekzon (Kodlayan/İfade edilen) ve İntron (Kodlamayan/Çıkarılan)' },
          { id: 'C', text: 'Primer ve Sekonder' },
          { id: 'D', text: 'Zar ve Çekirdek' },
          { id: 'E', text: 'Hücre ve Doku' }
        ],
        correctOptionId: 'B',
        explanation: 'Ökaryot genleri kesintilidir. mRNA üretildikten sonra (Ön-mRNA) aradaki İntron bölgeleri kesilip atılır (RNA İşlenmesi/Splicing), geriye sadece Ekzonlar kalır.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Ribozom organeli hücrenin KENDİ HANGİ YAPILARINDA BULUNABİLİR (Ökaryot bir hücrede)?',
        options: [
          { id: 'A', text: 'Sadece çekirdekte' },
          { id: 'B', text: 'Sitoplazmada serbest, Granüllü Endoplazmik Retikulum zarı üzerinde, Çekirdek zarı dışında, Mitokondri ve Kloroplast içinde' },
          { id: 'C', text: 'Sadece hücre zarında' },
          { id: 'D', text: 'Sadece golgide' },
          { id: 'E', text: 'Lizozomun içinde' }
        ],
        correctOptionId: 'B',
        explanation: 'Ribozomlar çok yaygındır. Kendi proteinini üreten organellerin (Mitokondri/Kloroplast) kendi ribozomları vardır. Dışarıya salgılanacak proteinler Granüllü ER\'deki ribozomlarda üretilir.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Translasyon işlemi BAŞLARKEN ribozom alt birimleri ve mRNA birleşir. Sentez BİTTİĞİNDE ne olur?',
        options: [
          { id: 'A', text: 'Ribozom kalıcı olarak yapışık kalır' },
          { id: 'B', text: 'Ribozomun Büyük ve Küçük alt birimleri birbirinden AYRILIR (Dağılır), mRNA serbest kalır' },
          { id: 'C', text: 'Ribozom yok olur' },
          { id: 'D', text: 'Çekirdeğe girer' },
          { id: 'E', text: 'Suya dönüşür' }
        ],
        correctOptionId: 'B',
        explanation: 'Ribozom alt birimleri sadece sentez anında kenetlenir, bitince ayrılırlar.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Hücrede BİRDEN FAZLA ÇEŞİT Protein (Örn: Hem İnsülin hem Glukagon) AYNI ANDA üretilebilir mi?',
        options: [
          { id: 'A', text: 'Hayır, biri bitmeden diğeri başlamaz' },
          { id: 'B', text: 'Evet. DNA üzerindeki FARKLI GENLERDEN (farklı bölgelerden) aynı anda farklı mRNA\'lar yazılabilir ve sitoplazmada farklı ribozomlarda eş zamanlı okutulabilir.' },
          { id: 'C', text: 'Sadece gece' },
          { id: 'D', text: 'Sadece bölünürken' },
          { id: 'E', text: 'Sadece bakterilerde' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre çok işlemcili bir bilgisayar gibidir. Farklı genler aynı anda okunabilir.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Her hücre (Örneğin göz hücresi ile mide hücresi) BÜTÜN DNA şifresine sahip olmasına rağmen neden FARKLI PROTEİNLER (biri görme proteini diğeri sindirim enzimi) üretir?',
        options: [
          { id: 'A', text: 'Çünkü DNA\'ları farklıdır' },
          { id: 'B', text: 'Çünkü her hücrede DNA\'nın FARKLI BÖLGELERİ (Farklı Genleri) Aktiftir (Açık/Okunabilir durumdadır). Buna "Gen İfadesi Kontrolü" denir.' },
          { id: 'C', text: 'Kromozom sayıları farklıdır' },
          { id: 'D', text: 'Göz hücresinde ribozom yoktur' },
          { id: 'E', text: 'Kanla taşınırlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Tüm hücrelerdeki DNA dizilimi %100 aynıdır. Farklılık, hangi genin okunduğu (aktif olduğu) ile ilgilidir (Farklılaşma).'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Santral dogma olaylarından (Replikasyon, Transkripsiyon, Translasyon) hangisinde meydana gelen bir hata (Mutasyon) YENİ HÜCRELERE AKTARILIR (Eğer üreme hücresindeyse kalıtsal olur)?',
        options: [
          { id: 'A', text: 'Translasyon' },
          { id: 'B', text: 'Transkripsiyon' },
          { id: 'C', text: 'REPLİKASYON (DNA Kopyalanması)' },
          { id: 'D', text: 'RNA Sentezi' },
          { id: 'E', text: 'Protein katlanması' }
        ],
        correctOptionId: 'C',
        explanation: 'Sadece kopyalama makinesi (Replikasyon) hata yaparsa bu hata yavrulara geçer. Diğerleri (mRNA veya protein) günlük kullanımlıktır, geçerliliği o anlıktır.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Biyoteknoloji ve Gen Mühendisliği',
    type: 'easy',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Canlıların (veya genlerinin) istenilen özelliklerde, insanların ihtiyaçlarına yönelik olarak değiştirilmesi, geliştirilmesi veya yeni ürünler üretmesi için kullanılan BİLİM DALLARI bütününe ne ad verilir?',
        options: [
          { id: 'A', text: 'Biyoteknoloji' },
          { id: 'B', text: 'Jeoloji' },
          { id: 'C', text: 'Zooloji' },
          { id: 'D', text: 'Anatomi' },
          { id: 'E', text: 'Fizyoloji' }
        ],
        correctOptionId: 'A',
        explanation: 'Gen mühendisliği ve Biyoteknoloji, canlı materyali teknoloji ve sanayiye uyarlayan dallardır.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Gen mühendisliğinde farklı iki canlının (Örn: İnsan ile Bakteri) DNA parçalarının enzimler yardımıyla KESİLİP BİRLEŞTİRİLMESİYLE elde edilen "YENİ (Melez) DNA" molekülüne ne ad verilir?',
        options: [
          { id: 'A', text: 'Mutant DNA' },
          { id: 'B', text: 'Rekombinant DNA (rDNA)' },
          { id: 'C', text: 'Bozuk DNA' },
          { id: 'D', text: 'Polimer DNA' },
          { id: 'E', text: 'Organik DNA' }
        ],
        correctOptionId: 'B',
        explanation: 'Yeniden kombine edilmiş anlamında Rekombinant DNA denir.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Bir genin veya DNA parçasının (İnsülin geni gibi) kesilip çıkartılmasında (DNA\'yı belli bölgelerden kesmede) kullanılan "Moleküler Makas" enzimlerine ne ad verilir?',
        options: [
          { id: 'A', text: 'DNA Ligaz' },
          { id: 'B', text: 'Restriksiyon Endonükleaz (Kesici Enzimler)' },
          { id: 'C', text: 'Amilaz' },
          { id: 'D', text: 'Helikaz' },
          { id: 'E', text: 'Polimeraz' }
        ],
        correctOptionId: 'B',
        explanation: 'Bakterilerin virüslerden korunmak için ürettikleri bu enzimler, bilim insanları tarafından DNA\'yı istenilen şifreden kesmek için kullanılır.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Kesilen DNA parçalarını birleştirerek "Rekombinant DNA" haline getiren (Moleküler Yapıştırıcı) enzimin adı nedir?',
        options: [
          { id: 'A', text: 'DNA Ligaz' },
          { id: 'B', text: 'Restriksiyon enzimi' },
          { id: 'C', text: 'Helikaz' },
          { id: 'D', text: 'Pepsin' },
          { id: 'E', text: 'Polimeraz' }
        ],
        correctOptionId: 'A',
        explanation: 'Ligaz, Replikasyonda olduğu gibi burada da yapıştırıcı görevindedir.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Bakterilerde ana DNA dışında bulunan, genellikle Halka Şeklinde olan ve gen aktarımında "Vektör (Taşıyıcı / Kargo)" olarak kullanılan küçük DNA parçalarına ne ad verilir?',
        options: [
          { id: 'A', text: 'Plazmit' },
          { id: 'B', text: 'Kromozom' },
          { id: 'C', text: 'Ribozom' },
          { id: 'D', text: 'Golgi' },
          { id: 'E', text: 'Vakum' }
        ],
        correctOptionId: 'A',
        explanation: 'Plazmitler, bakteriden bakteriye kolayca geçebilen, direnç genleri taşıyan küçük DNA halkalarıdır. Gen mühendisliğinde aktarım aracı olarak kullanılırlar.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'İnsan İnsülin geninin bir bakteriye aktarılıp (Plazmit aracılığıyla), bakterinin hızlıca çoğalarak İNSAN İNSÜLİNİ ÜRETMESİ hangi biyoteknolojik yöntemin en bilinen örneğidir?',
        options: [
          { id: 'A', text: 'Geleneksel Islah' },
          { id: 'B', text: 'Rekombinant DNA Teknolojisi (Gen Klonlaması)' },
          { id: 'C', text: 'Yapay Döllenme' },
          { id: 'D', text: 'Tüp Bebek' },
          { id: 'E', text: 'Mutasyon ıslahı' }
        ],
        correctOptionId: 'B',
        explanation: 'Şeker hastalığı ilacı olan İnsülin, yıllardır bu gen transferi yöntemiyle bakterilere ürettirilmektedir.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Pek çok istenen özelliğe (Örn: Soğuğa dayanıklı, böceklere dirençli, raf ömrü uzun vb.) sahip olacak şekilde Genetik Yapısı Değiştirilmiş Canlılara genel olarak NE AD VERİLİR?',
        options: [
          { id: 'A', text: 'Mutant' },
          { id: 'B', text: 'GDO (Genetiği Değiştirilmiş Organizma) veya Transgenik Canlı' },
          { id: 'C', text: 'Doğal canlı' },
          { id: 'D', text: 'Saf ırk' },
          { id: 'E', text: 'Melez' }
        ],
        correctOptionId: 'B',
        explanation: 'Başka türden gen aktarılan (Transgenik) canlılara piyasada genel olarak GDO denir.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Bitkiler ve hayvanlar arasında, istenen özelliklere sahip bireylerin seçilip "SADECE ONLARIN ÇİFTLEŞTİRİLMESİNE" (Örn: Çok süt veren ineklerle, iri kaslı boğaların çiftleştirilmesi) ne ad verilir?',
        options: [
          { id: 'A', text: 'Yapay Seçilim (Geleneksel Islah)' },
          { id: 'B', text: 'Gen Klonlaması' },
          { id: 'C', text: 'Doğal Seçilim' },
          { id: 'D', text: 'Tüp bebek' },
          { id: 'E', text: 'GDO' }
        ],
        correctOptionId: 'A',
        explanation: 'İnsanların binlerce yıldır tarım ve hayvancılıkta yaptığı iyileştirme çalışmalarına Yapay Seçilim denir.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Bir genin veya DNA parçasının LABORATUVAR ORTAMINDA (Hücre dışında) çok kısa sürede (saatler içinde) "Milyonlarca kopyasının" (Fotokopisinin) üretildiği teknolojik CİHAZA (Yönteme) ne ad verilir?',
        options: [
          { id: 'A', text: 'Röntgen' },
          { id: 'B', text: 'PCR (Polimeraz Zincir Reaksiyonu)' },
          { id: 'C', text: 'Tomografi' },
          { id: 'D', text: 'Ultrason' },
          { id: 'E', text: 'Elektroşok' }
        ],
        correctOptionId: 'B',
        explanation: 'Olay yerinde bulunan tek bir damla kandaki DNA, PCR (Polymerase Chain Reaction) cihazı ile çoğaltılarak analiz edilebilir boyuta getirilir.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'PCR yönteminde (DNA çok yüksek sıcaklıklara 90-95°C ısıtılıp soğutulduğu için), İNSAN DNA Polimerazı kullanılamaz (Çünkü sıcaktan bozulur). Bunun yerine sıcak su kaynaklarında yaşayan Termofilik Arkelerden/Bakterilerden elde edilen HANGİ ENZİM kullanılır?',
        options: [
          { id: 'A', text: 'Amilaz' },
          { id: 'B', text: 'Taq Polimeraz (Isıya dayanıklı polimeraz)' },
          { id: 'C', text: 'Ligaz' },
          { id: 'D', text: 'Helikaz' },
          { id: 'E', text: 'Pepsin' }
        ],
        correctOptionId: 'B',
        explanation: 'Thermus aquaticus adlı sıcak su bakterisinden izole edilen Taq Polimeraz, PCR cihazının 95 derecelik ısınmalarına dayanabilir.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Tıp alanında genetik hastalıklara (Örn: SMA, Kistik fibrozis) neden olan BOZUK GENLERİN tespit edilip YERİNE SAĞLAM GENLERİN aktarılması (Virüsler aracılığıyla tedavi) yöntemine ne ad verilir?',
        options: [
          { id: 'A', text: 'Aşı tedavisi' },
          { id: 'B', text: 'Gen Terapisi (Gen Tedavisi)' },
          { id: 'C', text: 'Kemoterapi' },
          { id: 'D', text: 'Radyoterapi' },
          { id: 'E', text: 'Fizik tedavi' }
        ],
        correctOptionId: 'B',
        explanation: 'Hastalığın genetik kaynağına inilerek bozuk kodu düzeltme işlemidir.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Hücre veya embriyo henüz FARKLIlaşmamışken elde edilen, uygun şartlarda vücuttaki BÜTÜN DOKU VE ORGANLARA (Kas, kemik, sinir vb.) DÖNÜŞEBİLME (Bölünme) yeteneğine sahip olan özel hücrelere ne ad verilir?',
        options: [
          { id: 'A', text: 'Kırmızı Kan Hücresi' },
          { id: 'B', text: 'Kök Hücre' },
          { id: 'C', text: 'Sinir Hücresi' },
          { id: 'D', text: 'Kas Hücresi' },
          { id: 'E', text: 'Yağ Hücresi' }
        ],
        correctOptionId: 'B',
        explanation: 'Embriyonik Kök Hücreler vücuttaki her türlü tamirat için joker eleman gibidir (Göbek kordonu ve kemik iliğinde de kök hücre bulunur).'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Tarımsal biyoteknolojide bitkilere aktarılan "Bt Geni (Bacillus thuringiensis)" bitkiye HANGİ ÖZELLİĞİ KAZANDIRIR?',
        options: [
          { id: 'A', text: 'Suyu daha iyi tutmasını' },
          { id: 'B', text: 'Böceklere (Haşerelere) karşı kendi zehrini üreterek DİRENÇLİ OLMASINI (Tarımsal ilaç kullanımını azaltır)' },
          { id: 'C', text: 'Daha büyük meyve vermesini' },
          { id: 'D', text: 'Tatlı olmasını' },
          { id: 'E', text: 'Soğukta yaşamasını' }
        ],
        correctOptionId: 'B',
        explanation: 'GDO’lu mısır ve pamukların çoğu böcek direnci geni (Bt) taşır.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'DNA parçalarını ELEKTRİK AKIMI (Jel Elektroforezi) kullanarak büyüklüklerine ve ağırlıklarına göre "Bir JEL üzerinde YÜRÜTEREK (Sıralayarak)" bantlaşmalarını (çizgilerini) görme işlemine ne ad verilir?',
        options: [
          { id: 'A', text: 'Röntgen' },
          { id: 'B', text: 'Jel Elektroforezi (DNA Parmak İzi çıkarma yöntemlerinden biri)' },
          { id: 'C', text: 'Klonlama' },
          { id: 'D', text: 'Transkripsiyon' },
          { id: 'E', text: 'Aşılama' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA eksi (-) yüklüdür. Artı (+) kutba doğru jel içinde yürütülür, küçük parçalar hızlı yürür ve bantlar oluşur.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Biyoteknoloji uygulamalarının, insan sağlığına, çevreye ve diğer canlılara zarar vermeden ETİK (Ahlaki) KURALLAR ve GÜVENLİK çerçevesinde yapılması prensibine ne ad verilir?',
        options: [
          { id: 'A', text: 'Biyoetik ve Biyogüvenlik' },
          { id: 'B', text: 'Biyokimya' },
          { id: 'C', text: 'Biyofizik' },
          { id: 'D', text: 'Biyosfer' },
          { id: 'E', text: 'Biyokütle' }
        ],
        correctOptionId: 'A',
        explanation: 'Klonlanmış insan yapılmaması, zararlı patojen üretilmemesi gibi konular biyoetik ve biyogüvenlik kurullarıyla denetlenir.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'DNA Parmak İzi ve Klonlama',
    type: 'easy',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Suç mahallerinden (Kıl, kan, tükürük vb.) alınan DNA örneklerinin PCR ve Jel Elektroforezi ile analiz edilerek BİREYE ÖZGÜ BANT (Çizgi) diziliminin çıkartılması ve suçlu tespiti yapılmasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Parmak İzi Alma' },
          { id: 'B', text: 'DNA Parmak İzi (DNA Profili Çıkarma)' },
          { id: 'C', text: 'Klonlama' },
          { id: 'D', text: 'Aşı Yapma' },
          { id: 'E', text: 'Kan Grubu Tespiti' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsanların DNA dizilimindeki "Anlamsız tekrarlayan diziler (VNTR)" kişiye özgü barkod gibidir. Bu barkoda DNA Parmak İzi denir.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'DNA Parmak izi yöntemi SADECE suçlu teşhisinde mi kullanılır?',
        options: [
          { id: 'A', text: 'Evet' },
          { id: 'B', text: 'Hayır; Babalık/Analık testlerinde (Soy bağı tespiti), organ nakillerinde doku uyumunda, göç yollarının ve evrimsel akrabalıkların tespitinde de yaygın kullanılır.' },
          { id: 'C', text: 'Sadece bitkilerde kullanılır' },
          { id: 'D', text: 'Sadece hastalıklarda kullanılır' },
          { id: 'E', text: 'Sadece bakterilerde kullanılır' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA parmak izi, bireylerin ve türlerin "Kimin kime ne kadar benzediğini" anlamak için kullanılan temel moleküler araçtır.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Babalık testinde, çocuğun DNA Parmak İzi bantları KİMLERİN BANTLARIYLA %50 EŞLEŞMEK (Ortak olmak) zorundadır?',
        options: [
          { id: 'A', text: 'Sadece Anne ile' },
          { id: 'B', text: 'Sadece Baba ile' },
          { id: 'C', text: 'Yarısı Anne, yarısı GERÇEK BABA ile' },
          { id: 'D', text: 'Kardeşiyle %100' },
          { id: 'E', text: 'Hiçbiriyle eşleşmez' }
        ],
        correctOptionId: 'C',
        explanation: 'Çocuğun kromozomlarının yarısı anneden, yarısı babadan gelir. Dolayısıyla jeldeki çizgilerin yarısı anneye, kalan yarısı (mutasyon yoksa) babaya aittir.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Dünyanın İLK KLONLANAN MEMELİ CANLISI (Memeli Klonlama Deneyi - 1996) nedir ve adı nedir?',
        options: [
          { id: 'A', text: 'Koyun (Dolly)' },
          { id: 'B', text: 'İnek (Sarıkız)' },
          { id: 'C', text: 'Fare (Mickey)' },
          { id: 'D', text: 'Maymun (Çita)' },
          { id: 'E', text: 'Köpek (Laika)' }
        ],
        correctOptionId: 'A',
        explanation: 'Ian Wilmut tarafından İskoçya\'da kopyalanan Dolly, somatik hücreden (vücut hücresinden) klonlanan ilk memelidir.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Dolly\'nin Klonlanma (Somatik Hücre Çekirdeği Transferi) sürecinin AŞAMALARI nasıldır?',
        options: [
          { id: 'A', text: 'Koyun ikiye bölünerek yapılır' },
          { id: 'B', text: 'İki farklı sperm birleştirilir' },
          { id: 'C', text: 'A Koyununun Vücut hücresi (Meme hücresi) ÇEKİRDEĞİ ALINIR -> B Koyununun Çekirdeği çıkarılmış BOŞ YUMURTASINA EKLENİR -> Elektrikle birleştirilip Zigot gibi bölünmeye başlar -> C Koyununun (Taşıyıcı Anne) rahmine yerleştirilir.' },
          { id: 'D', text: 'Sadece A koyunu kendi kendine doğurur' },
          { id: 'E', text: 'Laboratuvarda yapay hücre yapılır' }
        ],
        correctOptionId: 'C',
        explanation: 'Bütün sır, vücut hücresindeki DNA (Çekirdek) alınarak, şifresi silinmiş (boşaltılmış) bir yumurta hücresine enjekte edilmesindedir.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Dolly klonlama deneyinde DOĞAN KUZU (Dolly) genetik (DNA) olarak KİMİN BİREBİR KOPYASIDIR (İkizidir)?',
        options: [
          { id: 'A', text: 'B Koyununun (Yumurtasını veren)' },
          { id: 'B', text: 'C Koyununun (Doğuran / Taşıyıcı Anne)' },
          { id: 'C', text: 'A Koyununun (Çekirdeğini / DNA\'sını veren koyunun)' },
          { id: 'D', text: 'Hepsinin karışımıdır' },
          { id: 'E', text: 'Hiçbirine benzemez' }
        ],
        correctOptionId: 'C',
        explanation: 'Genetik şifre (DNA) çekirdekten gelir. Kimin çekirdeği (geni) konduysa, Dolly onun genetik ikizidir.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Dolly\'nin Mitokondriyal DNA\'sı (Hücre organelleri) kimden gelmiştir?',
        options: [
          { id: 'A', text: 'A koyunundan (Çekirdek vericiden)' },
          { id: 'B', text: 'B koyunundan (Yumurtanın sitoplazması ve organelleri onda kaldığı için Mitokondriyal DNA ondan gelir)' },
          { id: 'C', text: 'C koyunundan (Taşıyıcı anne)' },
          { id: 'D', text: 'Babadan' },
          { id: 'E', text: 'Havadan' }
        ],
        correctOptionId: 'B',
        explanation: 'Dolly\'nin ana genetiği A\'dır ancak mitokondrisi yumurtanın (B koyununun) sitoplazmasından kalmıştır.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Biyoteknolojik "Polipolidi" yöntemi tarımda (Örn: Çilek, Karpuz) NE AMAÇLA uygulanır?',
        options: [
          { id: 'A', text: 'Bitkiyi küçültmek için' },
          { id: 'B', text: 'Kromozom sayısını suni olarak artırarak (3n, 4n gibi) DAHA BÜYÜK (İri), daha dayanıklı ve daha verimli Meyveler / Ürünler elde etmek için' },
          { id: 'C', text: 'Suyu azaltmak için' },
          { id: 'D', text: 'Renklerini siyah yapmak için' },
          { id: 'E', text: 'Köklerini uzatmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Polipolidi bitkilerde çok görülür ve genellikle meyvenin devasa (iri) olmasını sağlar (Örn: İri market çilekleri).'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Bilim insanları neden Tarımda genetik çeşitliliği KORUMAK için "Tohum Bankaları" (Örn: Svalbard Küresel Tohum Deposu) kurmuşlardır?',
        options: [
          { id: 'A', text: 'Tohumları uzaya göndermek için' },
          { id: 'B', text: 'Gelecekte olası bir salgın, iklim krizi veya çevre felaketinde, "Eski, Doğal ve Dayanıklı" gen kaynaklarını kaybetmemek (Biyoçeşitliliği korumak) için' },
          { id: 'C', text: 'Kuşlar yemesin diye' },
          { id: 'D', text: 'Süs olarak biriktirmek için' },
          { id: 'E', text: 'Çok yer kapladıkları için' }
        ],
        correctOptionId: 'B',
        explanation: 'Islahla veya GDO ile tek tip (monokültür) tarım yapıldığında bir hastalık tüm bitkileri silebilir. Tohum bankaları doğal gen sigortasıdır.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'CRISPR-Cas9 adı verilen yeni nesil biyoteknolojik araç ne işe yarar?',
        options: [
          { id: 'A', text: 'Sadece fotoğraf çeker' },
          { id: 'B', text: 'DNA üzerinde ÇOK HASSAS (Nokta atışı) kesim ve DÜZENLEME (Genetik Edit/Düzeltme) yapılmasını sağlayan devrim niteliğinde bir Gen Düzenleme Makasıdır' },
          { id: 'C', text: 'Hücreyi öldüren zehirdir' },
          { id: 'D', text: 'Kan grubunu değiştirir' },
          { id: 'E', text: 'Bitkileri sular' }
        ],
        correctOptionId: 'B',
        explanation: 'CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats), günümüzün en modern ve hassas gen düzenleme aracıdır.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Biyoremediasyon (Biyolojik İyileştirme) nedir?',
        options: [
          { id: 'A', text: 'Hastalık tedavisi' },
          { id: 'B', text: 'Çevre kirliliğini (Örn: Okyanusa dökülen petrolü, ağır metalleri) temizlemek için Mikroorganizmaların (Bakterilerin) ve Bitkilerin KULLANILMASI' },
          { id: 'C', text: 'Suyu kaynatma işlemi' },
          { id: 'D', text: 'Çöp yakma işlemi' },
          { id: 'E', text: 'Uzay araştırması' }
        ],
        correctOptionId: 'B',
        explanation: 'Biyo (Canlı) + Remedi (Tedavi/İyileştirme). Çevreyi canlıları kullanarak temizlemektir.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi Biyoteknolojinin POTANSİYEL RİSKLERİNDEN (Biyogüvenlik endişelerinden) BİRİDİR?',
        options: [
          { id: 'A', text: 'Daha çok ürün elde edilmesi' },
          { id: 'B', text: 'Vitaminli pirinç (Altın pirinç) üretilmesi' },
          { id: 'C', text: 'GDO\'lu bitkilerin polenleriyle doğadaki Yabani Türlere gen kaçışı olması, Süper Yabani Otların çıkması ve Doğal Dengeyi bozması' },
          { id: 'D', text: 'İnsülinin ucuza üretilmesi' },
          { id: 'E', text: 'Kirli suların temizlenmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Genetiği değiştirilmiş tarım bitkileri doğaya kaçarsa (rüzgarla, arılarla), doğal bitkilerle karışıp ekosistemi bozabilir.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'İnsan Genom Projesi (HGP) hangi amaçla yapılmış ve 2003 yılında tamamlanmıştır?',
        options: [
          { id: 'A', text: 'İnsanları klonlamak için' },
          { id: 'B', text: 'İnsan DNA\'sındaki (Genomundaki) TÜM NÜKLEOTİT DİZİLİMİNİN (Haritasının) çıkartılması ve genlerin yerinin/işlevinin belirlenmesi' },
          { id: 'C', text: 'Mars\'a insan yollamak için' },
          { id: 'D', text: 'Kan hücrelerini saymak için' },
          { id: 'E', text: 'Kemikleri güçlendirmek için' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsan Genom Projesi ile insanın genetik haritası çözülmüş, hastalıklara yatkınlık ve gen tedavileri için büyük bir kütüphane oluşturulmuştur.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'İnterferonlar, büyüme hormonları ve aşılar günümüzde genellikle hangi CANLILAR (Biyofabrikalar) KULLANILARAK seri üretilmektedir?',
        options: [
          { id: 'A', text: 'Sadece İnsan denekler' },
          { id: 'B', text: 'Sadece Fareler' },
          { id: 'C', text: 'Bakteriler ve Maya mantarları (Rekombinant DNA teknolojisi ile)' },
          { id: 'D', text: 'Kuşlar' },
          { id: 'E', text: 'Balıklar' }
        ],
        correctOptionId: 'C',
        explanation: 'Eskiden domuzlardan/ineklerden alınan veya kadavralardan çıkarılan hormonlar artık bakterilere ürettirilip saflaştırılmaktadır.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Hücre kültürü yöntemiyle laboratuvarda bitki veya hayvan DOKUSU ÜRETİLMESİNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Kök Hücre / Doku Kültürü' },
          { id: 'B', text: 'Fotosentez' },
          { id: 'C', text: 'Solunum' },
          { id: 'D', text: 'Elektroforez' },
          { id: 'E', text: 'Kromatografi' }
        ],
        correctOptionId: 'A',
        explanation: 'Bitkilerde yaprak veya kök parçasından (Doku kültürü/Totipotensi) tamamen yeni binlerce bitki fidesi elde edilebilir.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'DNA, RNA, Protein İlişkisi',
    type: 'easy',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Bir hücrede PROTEN SENTEZİ HIZLANDIĞINDA (Art arda translasyon yapıldığında), aşağıdaki olaylardan HANGİSİ KESİNLİKLE (Daima) ARTAR?',
        options: [
          { id: 'A', text: 'DNA Eşlenmesi (Replikasyon)' },
          { id: 'B', text: 'Oksijen tüketimi' },
          { id: 'C', text: 'ATP Harcanımı (Tüketimi) ve SU OLUŞUMU' },
          { id: 'D', text: 'Hücre bölünmesi' },
          { id: 'E', text: 'Fotosentez hızı' }
        ],
        correctOptionId: 'C',
        explanation: 'Dehidrasyon sentezi olduğu için su (H₂O) artar. Ayrıca protein sentezi çok yüksek enerji gerektiren (ATP harcanan) bir olaydır.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'DNA daki Anlamlı zincirin şifresi "TAC" ise, bu zincirden (Transkripsiyonla) Sentezlenen mRNA KODONU ne olur?',
        options: [
          { id: 'A', text: 'ATG' },
          { id: 'B', text: 'UAG' },
          { id: 'C', text: 'AUG (Çünkü Timin yerine Adenin, Adenin yerine Urasil, Sitozin yerine Guanin gelir)' },
          { id: 'D', text: 'GCA' },
          { id: 'E', text: 'TAC' }
        ],
        correctOptionId: 'C',
        explanation: 'T -> A, A -> U (RNA da timin yoktur), C -> G. (TAC -> AUG)'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'mRNA daki AUG kodonuna karşılık gelerek ribozoma giren tRNA nın ANTİKODONU (Şifresi) ne olmalıdır?',
        options: [
          { id: 'A', text: 'TAC' },
          { id: 'B', text: 'UAC (A nın karşısına U, U nun karşısına A, G nin karşısına C)' },
          { id: 'C', text: 'AUG' },
          { id: 'D', text: 'GCC' },
          { id: 'E', text: 'AAA' }
        ],
        correctOptionId: 'B',
        explanation: 'Kodon ile Antikodon birbirinin tamamlayıcısıdır (A=U, G=C eşleşmesi).'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'ŞİFRE DİZİLİMİ OLARAK incelendiğinde; DNA nın TAMAMLAYICI (Anlamlı Olmayan) ipliğindeki şifre dizilimi ile tRNA daki Antikodon dizilimi NEDEN BİRBİRİNE ÇOK BENZER?',
        options: [
          { id: 'A', text: 'Çünkü ikisi de proteindir' },
          { id: 'B', text: 'Çünkü her ikisi de ANLAMLI İPLİĞE VEYA mRNA\'ya tamamlayıcı olarak üretilmişlerdir. Sadece T yerine U yazılırsa, Tamamlayıcı iplik = Antikodon dizilimi olur.' },
          { id: 'C', text: 'Tesadüftür' },
          { id: 'D', text: 'İkisi de ribozoma girer' },
          { id: 'E', text: 'Riboz üretirler' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA anlamlı iplik (A) -> mRNA ondan sentezlenir (B) -> tRNA da mRNA\'ya bağlanır (A). Matematikte mantık şudur: A nın tersinin tersi = A (Kendisi)'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Bir proteindeki Amino Asit SAYISI biliniyorsa, bu amino asitleri şifreleyen mRNA daki KODON SAYISI (Stop kodonu dahil) nasıl bulunur?',
        options: [
          { id: 'A', text: 'Amino asit sayısı kadardır' },
          { id: 'B', text: 'Amino Asit Sayısı + 1 (Stop Kodonu) kadardır' },
          { id: 'C', text: 'Amino asit sayısının 3 katıdır' },
          { id: 'D', text: 'Yarısıdır' },
          { id: 'E', text: 'Karesidir' }
        ],
        correctOptionId: 'B',
        explanation: 'Örneğin 100 amino asitlik bir protein için 100 kodon okunur, bir de en sona "Stop" (durdurucu) kodonu gelir (Amino asit üretmez). Toplam 101 kodon vardır.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: '100 amino asitlik bir proteinin sentezlenmesinden sorumlu olan İLGİLİ GEN BÖLGESİNDE (DNA nın ÇİFT ZİNCİRİNDE) toplam EN AZ KAÇ NÜKLEOTİT bulunur?',
        options: [
          { id: 'A', text: '100' },
          { id: 'B', text: '300' },
          { id: 'C', text: '303' },
          { id: 'D', text: '606 (100 AA + 1 Stop = 101 Kodon -> Tek zincirde 303 Nükleotit -> Çift zincirde x2 = 606 Nükleotit)' },
          { id: 'E', text: '1000' }
        ],
        correctOptionId: 'D',
        explanation: 'Her 1 kodon = 3 nükleotittir. 101 kodon = 303 mRNA nükleotidi (tek iplik). DNA çift zincirli olduğu için x2 yapılır.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Translasyon işlemi sırasında amino asitler BİRBİRİNE HANGİ ORGANELE ve hangi sırayla EKLENİRLER?',
        options: [
          { id: 'A', text: 'Golgi aygıtında rastgele' },
          { id: 'B', text: 'Ribozomda, mRNA üzerindeki KODON SIRASINA (Genetik şifreye) GÖRE eklenirler' },
          { id: 'C', text: 'Çekirdekte boyutuna göre' },
          { id: 'D', text: 'Lizozomda renge göre' },
          { id: 'E', text: 'Mitokondride enerjiye göre' }
        ],
        correctOptionId: 'B',
        explanation: 'Ribozom okuyucudur, sırayı belirleyen (katalog) mRNA\'dır.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Protein sentezinde Enzimlerin HIZLANDIRICI etkisi vardır. Ancak "SENTEZLENEN PROTEİNİN KENDİSİ" bir enzimse, protein sentezinin BİZZAT KENDİSİ DE ENZİMATİK MİDİR?',
        options: [
          { id: 'A', text: 'Hayır, fizikseldir' },
          { id: 'B', text: 'Evet. İster hormon ister enzim üretilsin, Protein Sentezinin (Dehidrasyonun) kendisi tamamen ENZİMATİK (Ribozom ve sentetaz enzimleri) bir süreçtir.' },
          { id: 'C', text: 'Bazen enzimatiktir' },
          { id: 'D', text: 'Sadece dışarıda enzimatiktir' },
          { id: 'E', text: 'Isı ile olur' }
        ],
        correctOptionId: 'B',
        explanation: 'Canlılardaki anabolik (yapım) olaylarının tümü enzimatik tepkimelerdir.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Farklı canlı türlerinde (Örn: İnsan ve Bakteri) SENTEZLENEN PROTEİNLERİN (Örn: İnsülin) BİRBİRİNİN AYNISI OLMASI NEYİ KANITLAR?',
        options: [
          { id: 'A', text: 'Bakterinin insanı yediğini' },
          { id: 'B', text: 'Canlılardaki Genetik Kod (Şifre) sisteminin ve şifrelerin EVRENSEL OLDUĞUNU (Aynı kodonun tüm canlılarda aynı amino asidi getirdiğini)' },
          { id: 'C', text: 'DNA\'larının %100 aynı olduğunu' },
          { id: 'D', text: 'İnsanın bakteriden daha hızlı olduğunu' },
          { id: 'E', text: 'Proteinlerin işe yaramadığını' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer kod evrensel olmasaydı (insanda AUG metiyonin getirirken bakteride valin getirseydi), bakteriye insan geni ektiğimizde saçma sapan bir protein çıkardı. Evrensellik biyoteknolojinin temelidir.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Eğer bir hücrede Ribonükleotit (RNA yapıtaşları) YETERSİZ İSE, HANGİ SÜREÇLER DOĞRUDAN (Hemen) SEKTEYE UĞRAR?',
        options: [
          { id: 'A', text: 'Sadece DNA Eşlenmesi' },
          { id: 'B', text: 'Transkripsiyon (mRNA vb yapımı) ve Sentez Başlatılamadığı İçin Protein Sentezi' },
          { id: 'C', text: 'Oksijen tüketimi' },
          { id: 'D', text: 'Glikoz yapımı' },
          { id: 'E', text: 'Fotosentez' }
        ],
        correctOptionId: 'B',
        explanation: 'Ribonükleotit RNA\'nın tuğlalarıdır (A,U,G,C Ribozlu). Bunlar yoksa RNA (mRNA) yapılamaz, mRNA yoksa ribozoma şifre gitmez.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Bir peptit zinciri sentezlenirken GİRİŞ (A), YAPIŞMA (P) ve ÇIKIŞ (E) bölgelerindeki tRNA akışı ribozom içinde NASIL SAĞLANIR?',
        options: [
          { id: 'A', text: 'tRNA\'lar yerinde durur, ribozom parçalanır' },
          { id: 'B', text: 'Ribozom, mRNA üzerinde (5\' ucundan 3\' ucuna doğru) BİR KODON (3 Nükleotit) BOYUNCA KAYAR, böylece içerdeki tRNA\'lar bir yandaki bölgeye kaymış olur (Translokasyon)' },
          { id: 'C', text: 'Rüzgarla itilirler' },
          { id: 'D', text: 'Su ile yıkanırlar' },
          { id: 'E', text: 'Mıknatıs çeker' }
        ],
        correctOptionId: 'B',
        explanation: 'Ribozom tıpkı bir daktilo şeridi/barkod okuyucu gibi mRNA nın üzerinde 3\'er 3\'er kayarak ilerler.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'İki Kardeşin (Tek yumurta ikizi hariç) ürettikleri bazı proteinlerin (Örn: Göz rengi proteini) birbirinden FARKLI OLMASININ ASIL NEDENİ NEDİR?',
        options: [
          { id: 'A', text: 'Yedikleri yemekler' },
          { id: 'B', text: 'DNA dizilimlerinin (Şifrelerinin / Nükleotit sıralarının) birbirinden FARKLI (Kendilerine özgü) OLMASIDIR' },
          { id: 'C', text: 'Ribozomlarının farklı olması' },
          { id: 'D', text: 'Hücre sayılarının farklı olması' },
          { id: 'E', text: 'Kan gruplarının farklı olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Protein farklıysa, o proteini ürettiren şifre (Gen/DNA dizilimi) farklı demektir.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Aynı hücrenin içinde ÜRETİLEN İKİ FARKLI PROTEİNİN (Örn: Keratin ve Kolajen) FARKLI YAPIDA OLMASININ NEDENİ HANGİSİ OLAMAZ?',
        options: [
          { id: 'A', text: 'Kullanılan Amino asit ÇEŞİTLERİNİN farklı olması' },
          { id: 'B', text: 'Amino asitlerin SAYISININ farklı olması' },
          { id: 'C', text: 'Amino asitlerin DİZİLİŞ SIRASININ farklı olması' },
          { id: 'D', text: 'Aralarında kurulan Peptit Bağının ÇEŞİDİNİN Farklı Olması (Bağ çeşidi daima aynıdır)' },
          { id: 'E', text: 'Şifreyi veren gen bölgelerinin farklı olması' }
        ],
        correctOptionId: 'D',
        explanation: 'Peptit bağı amino asitleri bağlayan standart bağdır, çeşidi/kimyası değişmez. Proteini farklı kılan amino asitlerin sayısı, çeşidi ve diziliş (kombinasyon) sırasıdır.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'DNA replikasyonu ve Transkripsiyon olayları hücrenin HANGİ KISMINDA GERÇEKLEŞİR (Ökaryotlarda)?',
        options: [
          { id: 'A', text: 'Ribozomda' },
          { id: 'B', text: 'Sitoplazmada' },
          { id: 'C', text: 'ÇEKİRDEK İÇİNDE (Veya Mitokondri/Kloroplastta)' },
          { id: 'D', text: 'Golgi aygıtında' },
          { id: 'E', text: 'Hücre zarında' }
        ],
        correctOptionId: 'C',
        explanation: 'Ökaryotlarda DNA neredeyse oradadır. DNA çekirdekte bulunduğuna göre kopyalanması (replikasyon) ve okunması (transkripsiyon) çekirdekte olur. Sonra mRNA dışarı (sitoplazmaya) çıkar.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Aşağıdaki olaylardan hangisinde ÇEKİRDEKTEN SİTOPLAZMAYA DOĞRU MADDE GEÇİŞİ YAŞANIR?',
        options: [
          { id: 'A', text: 'Sadece su geçişi' },
          { id: 'B', text: 'Transkripsiyonla üretilen mRNA\'nın ribozoma gitmek için PORLARDAN (Çekirdek deliklerinden) ÇIKMASI' },
          { id: 'C', text: 'Amino asitlerin çekirdeğe girmesi' },
          { id: 'D', text: 'DNA\'nın sitoplazmaya çıkması (DNA asla çıkmaz)' },
          { id: 'E', text: 'Proteinin küçülmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA asil bir yöneticidir, asla ofisinden (çekirdekten) çıkmaz. Emri mRNA ile deliklerden sitoplazmaya yollar.'
      }
    ]
  }
