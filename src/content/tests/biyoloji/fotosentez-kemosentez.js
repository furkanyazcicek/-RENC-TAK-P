export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Fotosentez Kavramı ve Kloroplastın Yapısı',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Canlıların ışık enerjisini kullanarak inorganik maddelerden (CO₂ ve H₂O) organik besin (glikoz vb.) üretmesi olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Solunum' },
          { id: 'B', text: 'Kemosentez' },
          { id: 'C', text: 'Fotosentez' },
          { id: 'D', text: 'Fermantasyon' },
          { id: 'E', text: 'Sindirim' }
        ],
        correctOptionId: 'C',
        explanation: 'Foto (Işık) + Sentez (Üretim). Işık enerjisi kullanılarak besin üretilmesidir.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Bitkilerde fotosentez olayının gerçekleştiği "yeşil renkli" organel hangisidir?',
        options: [
          { id: 'A', text: 'Mitokondri' },
          { id: 'B', text: 'Ribozom' },
          { id: 'C', text: 'Kloroplast' },
          { id: 'D', text: 'Lizozom' },
          { id: 'E', text: 'Golgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kloroplast, bitkilerde fotosentezin yapıldığı, klorofil pigmenti taşıyan organeldir.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Aşağıdaki canlı gruplarından hangisi fotosentez YAPAMAZ?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'Algler' },
          { id: 'C', text: 'Siyanobakteriler' },
          { id: 'D', text: 'Mantarlar' },
          { id: 'E', text: 'Öglena' }
        ],
        correctOptionId: 'D',
        explanation: 'Mantarlar heterotroftur (tüketicidir), klorofil taşımazlar ve fotosentez yapamazlar.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Fotosentez yapan bütün canlılarda MUTLAKA bulunması gereken yapı/molekül hangisidir?',
        options: [
          { id: 'A', text: 'Kloroplast organeli' },
          { id: 'B', text: 'Klorofil pigmenti' },
          { id: 'C', text: 'Hücre çeperi' },
          { id: 'D', text: 'Mitokondri' },
          { id: 'E', text: 'Çekirdek' }
        ],
        correctOptionId: 'B',
        explanation: 'Bakterilerde kloroplast organeli yoktur ama fotosentez yapabilmek için "Klorofil" pigmenti şarttır.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Kloroplastın içinde madeni para gibi üst üste dizilmiş zarsı keseciklere ne ad verilir?',
        options: [
          { id: 'A', text: 'Stroma' },
          { id: 'B', text: 'Matriks' },
          { id: 'C', text: 'Tilakoit (Granum)' },
          { id: 'D', text: 'Krista' },
          { id: 'E', text: 'Sitoplazma' }
        ],
        correctOptionId: 'C',
        explanation: 'Kloroplast içindeki üçüncü zar sistemi olan yassı keseciklere "Tilakoit", bunların üst üste dizilmiş haline "Granum" denir.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Kloroplast organelinin içini dolduran sıvı kısma ne ad verilir?',
        options: [
          { id: 'A', text: 'Stroma' },
          { id: 'B', text: 'Matriks' },
          { id: 'C', text: 'Sitoplazma' },
          { id: 'D', text: 'Lümen' },
          { id: 'E', text: 'Granum' }
        ],
        correctOptionId: 'A',
        explanation: 'Kloroplastın içindeki enzimli sıvıya Stroma, mitokondrinin içindeki sıvıya Matriks denir.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Fotosentezin "Işığa bağımlı" reaksiyonları (ışığın kullanıldığı evre) kloroplastın neresinde gerçekleşir?',
        options: [
          { id: 'A', text: 'Stromada' },
          { id: 'B', text: 'Tilakoit zarlarda (Granalarda)' },
          { id: 'C', text: 'Dış zarda' },
          { id: 'D', text: 'Çekirdekte' },
          { id: 'E', text: 'Matrikste' }
        ],
        correctOptionId: 'B',
        explanation: 'Işığı yakalayan klorofil pigmentleri Tilakoit zarlarda bulunur, bu yüzden ışık reaksiyonları burada olur.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Fotosentezin "Işıktan bağımsız" (Calvin döngüsü - besin üretilen) reaksiyonları kloroplastın neresinde gerçekleşir?',
        options: [
          { id: 'A', text: 'Granumda' },
          { id: 'B', text: 'Tilakoit zarda' },
          { id: 'C', text: 'Stromada (Sıvı kısımda)' },
          { id: 'D', text: 'Dış zarda' },
          { id: 'E', text: 'Lizozomda' }
        ],
        correctOptionId: 'C',
        explanation: 'Karbondioksitin besine dönüştürüldüğü enzimler Stroma sıvısında bulunur.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Bitkiler fotosentez için gerekli olan Karbondioksiti (CO₂) NEREDEN alırlar?',
        options: [
          { id: 'A', text: 'Topraktan kökleri ile' },
          { id: 'B', text: 'Güneş ışığından' },
          { id: 'C', text: 'Atmosferden (Havadan) yapraklarındaki stomalar ile' },
          { id: 'D', text: 'Topraktaki bakterilerden' },
          { id: 'E', text: 'Sudan' }
        ],
        correctOptionId: 'C',
        explanation: 'Karbon kaynağı olan CO₂ gazı yapraklardaki gözeneklerden (stomalar) havadan alınır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Bitkiler fotosentez için gerekli olan Suyu (H₂O) NEREDEN alırlar?',
        options: [
          { id: 'A', text: 'Topraktan kökleri ile' },
          { id: 'B', text: 'Havadan yaprakları ile' },
          { id: 'C', text: 'Güneşten' },
          { id: 'D', text: 'Hayvanlardan' },
          { id: 'E', text: 'Kendi içlerinde üretirler' }
        ],
        correctOptionId: 'A',
        explanation: 'Bitkiler suyu toprakta bulunan kök emici tüyleri ile alıp yapraklara taşırlar.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Fotosentezin genel (basit) denkleminde GİRENLER (Tepkimeye giren maddeler) nelerdir?',
        options: [
          { id: 'A', text: 'Glikoz ve Oksijen' },
          { id: 'B', text: 'Karbondioksit ve Su (Işık enerjisi ile)' },
          { id: 'C', text: 'ATP ve Su' },
          { id: 'D', text: 'Karbondioksit ve Glikoz' },
          { id: 'E', text: 'Glikoz ve Su' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentez denklemi: CO₂ + H₂O + Işık enerjisi -> Glikoz + O₂'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Fotosentezin genel denklemine göre ÜRÜNLER (Çıkan maddeler) nelerdir?',
        options: [
          { id: 'A', text: 'Karbondioksit ve Su' },
          { id: 'B', text: 'Glikoz (Besin) ve Oksijen' },
          { id: 'C', text: 'ATP ve Karbondioksit' },
          { id: 'D', text: 'Azot ve Su' },
          { id: 'E', text: 'Klorofil ve Işık' }
        ],
        correctOptionId: 'B',
        explanation: 'Besin sentezlenir (Glikoz vb.) ve yan ürün olarak Oksijen gazı havaya verilir.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir "Ototrof" (Üretici) canlıdır?',
        options: [
          { id: 'A', text: 'İnsan' },
          { id: 'B', text: 'Kedi' },
          { id: 'C', text: 'Şapkalı Mantar' },
          { id: 'D', text: 'Elma Ağacı' },
          { id: 'E', text: 'Bakteri yiyen amip' }
        ],
        correctOptionId: 'D',
        explanation: 'Bitkiler (Elma ağacı) kendi besinini güneş ışığıyla üreten ototrof canlılardır.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Fotosentez olayı doğadaki HANGİ GAZIN miktarını AZALTIR (Havayı temizler)?',
        options: [
          { id: 'A', text: 'Oksijen (O₂)' },
          { id: 'B', text: 'Azot (N₂)' },
          { id: 'C', text: 'Karbondioksit (CO₂)' },
          { id: 'D', text: 'Hidrojen' },
          { id: 'E', text: 'Helyum' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentez CO₂ gazını alıp besine dönüştürdüğü için havadaki CO₂ oranını düşürür.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Kloroplastın stromasında, kendi başına bölünebilmesini sağlayan HANGİ MOLEKÜL bulunur?',
        options: [
          { id: 'A', text: 'DNA' },
          { id: 'B', text: 'Glikoz' },
          { id: 'C', text: 'Oksijen' },
          { id: 'D', text: 'Yağ' },
          { id: 'E', text: 'Vitamin' }
        ],
        correctOptionId: 'A',
        explanation: 'Kloroplastların kendilerine ait DNA, RNA ve ribozomları vardır. İhtiyaç anında çekirdek kontrolünde çoğalabilirler.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Işık, Pigmentler ve Fotosistemler',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Bitkilerin yaprakları genelde NEDEN yeşil renklidir?',
        options: [
          { id: 'A', text: 'Suyu yansıttıkları için' },
          { id: 'B', text: 'Klorofil pigmentinin yeşil ışığı yansıtması veya geçirmesi (absorbe edememesi) nedeniyle' },
          { id: 'C', text: 'Oksijen ürettikleri için' },
          { id: 'D', text: 'Topraktan yeşil boya aldıkları için' },
          { id: 'E', text: 'CO₂ gazı yeşil olduğu için' }
        ],
        correctOptionId: 'B',
        explanation: 'Maddeler yansıttıkları ışığın renginde görünürler. Klorofil yeşil ışığı kullanamaz ve yansıtır.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Işığın pigmentler tarafından EMİLMESİ (tutulması) olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Yansıma (Refleksiyon)' },
          { id: 'B', text: 'Geçirme (Transmisyon)' },
          { id: 'C', text: 'Soğurma (Absorpsiyon)' },
          { id: 'D', text: 'Kırılma' },
          { id: 'E', text: 'Bölünme' }
        ],
        correctOptionId: 'C',
        explanation: 'Işığın tutulup enerjisinin alınmasına "absorpsiyon" (soğurma) denir.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Fotosentez olayı görünür ışık tayfındaki (kırmızıdan mora) renklerde gerçekleşir. Fotosentez hızı HANGİ RENKLİ ışıklarda en YÜKSEKTİR?',
        options: [
          { id: 'A', text: 'Yeşil ve Sarı' },
          { id: 'B', text: 'Mor-Mavi ve Kırmızı' },
          { id: 'C', text: 'Sadece Yeşil' },
          { id: 'D', text: 'Sadece Turuncu' },
          { id: 'E', text: 'Siyah' }
        ],
        correctOptionId: 'B',
        explanation: 'Klorofil en çok mor-mavi ışığı ve ardından kırmızı ışığı soğurur. Bu yüzden fotosentez buralarda en hızlıdır.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Fotosentez hızı hangi renk ışıkta en DÜŞÜKTÜR?',
        options: [
          { id: 'A', text: 'Kırmızı' },
          { id: 'B', text: 'Mor' },
          { id: 'C', text: 'Yeşil' },
          { id: 'D', text: 'Mavi' },
          { id: 'E', text: 'Beyaz' }
        ],
        correctOptionId: 'C',
        explanation: 'Yeşil ışık yansıtıldığı (soğurulamadığı) için fotosentez hızı en düşüktür.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Klorofil molekülü ışığı soğurduğunda (enerji yüklendiğinde) yapısından KOPARAK fırlayan şey nedir?',
        options: [
          { id: 'A', text: 'Proton' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'Karbondioksit' },
          { id: 'D', text: 'Elektron (e⁻)' },
          { id: 'E', text: 'Glikoz' }
        ],
        correctOptionId: 'D',
        explanation: 'Foton (ışık) klorofile çarptığında elektronu uyarır ve klorofilden bir "elektron" koparak sistemi başlatır.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Bitkilerde klorofil dışında ışığı soğurabilen turuncu (karoten), sarı (ksantofil) ve kırmızı (likopen) renkli "yardımcı pigmentlere" genel olarak ne denir?',
        options: [
          { id: 'A', text: 'Kloroplast' },
          { id: 'B', text: 'Kromoplast' },
          { id: 'C', text: 'Karotenoitler' },
          { id: 'D', text: 'Melanin' },
          { id: 'E', text: 'Antosiyanin' }
        ],
        correctOptionId: 'C',
        explanation: 'Karotenoitler yardımcı pigmentlerdir. Klorofilin soğuramadığı ışığı soğurup ona iletirler.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Yardımcı pigmentlerin (Karotenoitlerin) fotosentezdeki GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Suyu parçalamak' },
          { id: 'B', text: 'Doğrudan glikoz üretmek' },
          { id: 'C', text: 'Farklı dalga boylarındaki ışığı emerek klorofile aktarmak ve klorofili aşırı ışıktan korumak' },
          { id: 'D', text: 'Oksijeni yok etmek' },
          { id: 'E', text: 'Gece fotosentez yapmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Yardımcı pigmentler anten gibi çalışır, enerjiyi toplar ve ana merkeze (klorofile) iletir.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Tilakoit zarda klorofil, karotenoit ve proteinlerin bir araya gelerek oluşturduğu "ışık toplama ve reaksiyon" birimlerine ne ad verilir?',
        options: [
          { id: 'A', text: 'Fotosistem (FS)' },
          { id: 'B', text: 'Ribozom' },
          { id: 'C', text: 'Sentrozom' },
          { id: 'D', text: 'Kromozom' },
          { id: 'E', text: 'Lizozom' }
        ],
        correctOptionId: 'A',
        explanation: 'Fotosistemler (FS I ve FS II) tilakoit zardaki anten kompleksi ve tepkime merkezinden oluşan yapılardır.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Bir fotosistemin "Tepkime Merkezi"nde asıl reaksiyonu başlatan HANGİ PİGMENTTİR?',
        options: [
          { id: 'A', text: 'Karoten' },
          { id: 'B', text: 'Klorofil-a (Özel bir klorofil-a molekülü)' },
          { id: 'C', text: 'Ksantofil' },
          { id: 'D', text: 'Likopen' },
          { id: 'E', text: 'Antosiyanin' }
        ],
        correctOptionId: 'B',
        explanation: 'Anten kompleksindeki diğer pigmentler enerjiyi toplar, ama elektronu asıl fırlatan (işi yapan) merkezdeki klorofil-a dır.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Klorofilden elektron koptuktan sonra klorofil ne duruma geçer?',
        options: [
          { id: 'A', text: 'Elektronu azaldığı için "Yükseltgenmiş (Okside olmuş)" olur' },
          { id: 'B', text: 'İndirgenmiş olur' },
          { id: 'C', text: 'Parçalanır' },
          { id: 'D', text: 'Suya dönüşür' },
          { id: 'E', text: 'Büyür' }
        ],
        correctOptionId: 'A',
        explanation: 'Kimyada elektron VEREN madde "Yükseltgenir". Klorofil ışık çarpınca elektron verir ve yükseltgenir.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Klorofilden kopan elektronu İLK YAKALAYAN moleküle ne denir?',
        options: [
          { id: 'A', text: 'İlk elektron alıcı' },
          { id: 'B', text: 'Son elektron alıcı' },
          { id: 'C', text: 'Glikoz' },
          { id: 'D', text: 'Su' },
          { id: 'E', text: 'Oksijen' }
        ],
        correctOptionId: 'A',
        explanation: 'Tepkime merkezinde klorofilden kopan elektron, hemen karşısındaki "ilk elektron alıcıya" geçer.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Klorofilin yapısında hangi mineraller MUTLAKA bulunur?',
        options: [
          { id: 'A', text: 'Demir ve Bakır' },
          { id: 'B', text: 'Magnezyum (Mg) merkezde, Karbon, Hidrojen, Oksijen, Azot' },
          { id: 'C', text: 'Sadece Kalsiyum' },
          { id: 'D', text: 'Sodyum ve Potasyum' },
          { id: 'E', text: 'Fosfor' }
        ],
        correctOptionId: 'B',
        explanation: 'Klorofilin yapısında Magnezyum, C, H, O, N bulunur. (Demir, klorofil sentezi için enzim ko-faktörüdür ama yapıda bulunmaz).'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Yaprakları mor veya kırmızı olan bitkilerde (örn: kırmızı lahana) fotosentez YAPILABİLİR Mİ?',
        options: [
          { id: 'A', text: 'Hayır, yeşil olmadıkları için yapamazlar' },
          { id: 'B', text: 'Evet, klorofil taşırlar fakat diğer renkli pigmentlerin (antosiyanin vb.) miktarı klorofili örttüğü için dışarıdan kırmızı/mor görünürler, fotosentez yaparlar.' },
          { id: 'C', text: 'Sadece gece yaparlar' },
          { id: 'D', text: 'Köklerinde yaparlar' },
          { id: 'E', text: 'Kırmızı ışıkta yapamazlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Rengi yeşil olmasa bile, yaprakta altta klorofil vardır ve fotosentez yapabilirler.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Theodor Engelmann, ışığın farklı renklerinin fotosenteze etkisini göstermek için bir deney yapmıştır. Deneyde ne kullanmıştır?',
        options: [
          { id: 'A', text: 'Sadece fare' },
          { id: 'B', text: 'İplikli yeşil ALG ve Oksijen seven (aerob) BAKTERİLER' },
          { id: 'C', text: 'Mantar ve güneş' },
          { id: 'D', text: 'Böcek ve yaprak' },
          { id: 'E', text: 'Siyanobakteri' }
        ],
        correctOptionId: 'B',
        explanation: 'Engelmann iplikli alg üzerine prizmadan farklı renk ışıklar düşürmüş ve bakterilerin en çok Oksijen üretilen yerde (kırmızı ve mor-mavi) toplandığını görmüştür.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Elektromanyetik spektrumda (ışık tayfında) fotosentezin gerçekleştiği ışık aralığına ne denir?',
        options: [
          { id: 'A', text: 'Görünmez ışık' },
          { id: 'B', text: 'X ışınları' },
          { id: 'C', text: 'Görünür ışık (Yaklaşık 380 - 750 nm dalga boyu)' },
          { id: 'D', text: 'Radyo dalgaları' },
          { id: 'E', text: 'Mikrodalga' }
        ],
        correctOptionId: 'C',
        explanation: 'Klorofil sadece insan gözünün de gördüğü (görünür) ışık aralığındaki fotonları yakalayabilir.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Işığa Bağımlı Reaksiyonlar (Genel)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Işığa bağımlı reaksiyonların TEMEL AMACI (İkinci evre olan Calvin döngüsü için ne üretmek) nedir?',
        options: [
          { id: 'A', text: 'Sadece oksijen üretmek' },
          { id: 'B', text: 'CO₂ üretmek' },
          { id: 'C', text: 'Glikozu parçalamak' },
          { id: 'D', text: 'ATP ve NADPH üretmek' },
          { id: 'E', text: 'Yağ üretmek' }
        ],
        correctOptionId: 'D',
        explanation: 'Işık evresi, bir sonraki evrede besin yapılabilmesi için gereken enerjiyi (ATP) ve hidrojenleri (NADPH) üretir.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Işık enerjisi sayesinde SUYUN (H₂O) parçalanması olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Hidroliz' },
          { id: 'B', text: 'Fotoliz' },
          { id: 'C', text: 'Plazmoliz' },
          { id: 'D', text: 'Hemoliz' },
          { id: 'E', text: 'Mitoz' }
        ],
        correctOptionId: 'B',
        explanation: 'Foto (Işık) + liz (parçalanma). Tilakoit boşlukta su, ışık etkisiyle parçalanır.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Suyun (H₂O) fotolizi (parçalanması) sonucunda hangi maddeler açığa çıkar?',
        options: [
          { id: 'A', text: 'Karbondioksit ve Glikoz' },
          { id: 'B', text: 'Oksijen (O₂), Proton (H⁺) ve Elektron (e⁻)' },
          { id: 'C', text: 'Azot ve Su' },
          { id: 'D', text: 'Magnezyum' },
          { id: 'E', text: 'Karoten' }
        ],
        correctOptionId: 'B',
        explanation: 'Su molekülü 2 H⁺ (proton), 2 elektron ve 1/2 O₂ (oksijen) olacak şekilde parçalanır.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Fotosentez sonucu atmosfere verilen OKSİJENİN kaynağı nedir?',
        options: [
          { id: 'A', text: 'Karbondioksit' },
          { id: 'B', text: 'Glikoz' },
          { id: 'C', text: 'Su (H₂O)' },
          { id: 'D', text: 'Toprak' },
          { id: 'E', text: 'Klorofil' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotolizle parçalanan suyun oksijenleri birleşip O₂ gazı olarak atmosfere (veya solunuma) verilir.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Tilakoit zarda elektronların sırayla bir molekülden diğerine aktarıldığı sisteme ne ad verilir?',
        options: [
          { id: 'A', text: 'Sindirim sistemi' },
          { id: 'B', text: 'Elektron Taşıma Sistemi (ETS)' },
          { id: 'C', text: 'Kan dolaşımı' },
          { id: 'D', text: 'Boşaltım sistemi' },
          { id: 'E', text: 'Lenf sistemi' }
        ],
        correctOptionId: 'B',
        explanation: 'Klorofilden kopan yüksek enerjili elektronlar ETS elemanları üzerinden akarak enerjilerini bırakırlar.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Işık reaksiyonlarında HANGİ taşıyıcı koenzim elektron ve hidrojen alarak (indirgenerek) "NADPH" haline dönüşür?',
        options: [
          { id: 'A', text: 'NADP⁺' },
          { id: 'B', text: 'FAD' },
          { id: 'C', text: 'Asetil CoA' },
          { id: 'D', text: 'ATP' },
          { id: 'E', text: 'Glikoz' }
        ],
        correctOptionId: 'A',
        explanation: 'NADP⁺ molekülü elektron (e⁻) ve proton (H⁺) alarak NADPH\'a dönüşür (Fotosentezin hidrojen taşıyıcısıdır).'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Fotosentez sırasında ışık enerjisi kullanılarak ATP üretilmesi (fosforilasyon) olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Oksidatif fosforilasyon' },
          { id: 'B', text: 'Substrat düzeyinde fosforilasyon' },
          { id: 'C', text: 'Fotofosforilasyon' },
          { id: 'D', text: 'Defosforilasyon' },
          { id: 'E', text: 'Hidroliz' }
        ],
        correctOptionId: 'C',
        explanation: 'Foto (ışık) + fosforilasyon (ATP yapımı).'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Işık reaksiyonlarında Fotosistem II (FS II) klorofilinden elektron kopunca bir ELEKTRON AÇIĞI (boşluğu) oluşur. Bu açığı HANGİ MOLEKÜL kapatır?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Glikoz' },
          { id: 'C', text: 'Su (Suyun parçalanmasıyla çıkan elektronlar FS II\'ye verilir)' },
          { id: 'D', text: 'NADP' },
          { id: 'E', text: 'CO₂' }
        ],
        correctOptionId: 'C',
        explanation: 'FS II elektronunu ETS\'ye kaptırır. Kendi elektron açığını Suyun fotolizinden gelen elektronlarla kapatır.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Fotosistem I (FS I) klorofilinin elektron açığını KİM kapatır?',
        options: [
          { id: 'A', text: 'Su' },
          { id: 'B', text: 'CO₂' },
          { id: 'C', text: 'Fotosistem II\'den (FS II) kopup ETS üzerinden gelen elektronlar' },
          { id: 'D', text: 'Glukoz' },
          { id: 'E', text: 'ATP' }
        ],
        correctOptionId: 'C',
        explanation: 'Elektronların akış yönü: Su -> FS II -> ETS -> FS I -> NADP şeklindedir.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Tilakoit zardaki ETS elemanları, elektronlardan aldıkları enerjiyle HANGİ İYONLARI stromadan tilakoit boşluğa (lümene) pompalarlar?',
        options: [
          { id: 'A', text: 'Kalsiyum' },
          { id: 'B', text: 'Sodyum' },
          { id: 'C', text: 'Proton (H⁺)' },
          { id: 'D', text: 'Oksijen' },
          { id: 'E', text: 'Klor' }
        ],
        correctOptionId: 'C',
        explanation: 'Elektronların enerjisiyle H⁺ iyonları (protonlar) tilakoit boşluğa pompalanır ve orada birikir.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Tilakoit boşlukta biriken (sıkışan) protonlar (H⁺), stromaya geri dönerken HANGİ ENZİMİN içinden geçerler?',
        options: [
          { id: 'A', text: 'Amilaz' },
          { id: 'B', text: 'Lipaz' },
          { id: 'C', text: 'ATP Sentaz' },
          { id: 'D', text: 'DNA Polimeraz' },
          { id: 'E', text: 'Pepsin' }
        ],
        correctOptionId: 'C',
        explanation: 'Protonlar kendi konsantrasyon farklarıyla dışarı (stromaya) akarken ATP sentaz adlı türbin enzimi döndürürler.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Protonların (H⁺) ATP Sentaz içinden akmasıyla dönen türbin sayesinde NE ÜRETİLİR?',
        options: [
          { id: 'A', text: 'Su' },
          { id: 'B', text: 'Glikoz' },
          { id: 'C', text: 'Oksijen' },
          { id: 'D', text: 'ATP' },
          { id: 'E', text: 'Karbondioksit' }
        ],
        correctOptionId: 'D',
        explanation: 'Bu mekanizmaya Kemiozmotik Hipotez denir. Proton akışı ATP sentezini sağlar.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Kloroplastta ışık reaksiyonları sonucunda üretilen ATP, hücrede BAŞKA HANGİ OLAYLARDA (örn: protein sentezi, aktif taşıma) kullanılabilir mi?',
        options: [
          { id: 'A', text: 'Hayır, kloroplastın ürettiği ATP SADECE kloroplast içindeki Calvin (Işıktan bağımsız) döngüsünde besin üretmek için kullanılır.' },
          { id: 'B', text: 'Evet, kas kasılmasında kullanılır' },
          { id: 'C', text: 'Evet, sinir iletiminde kullanılır' },
          { id: 'D', text: 'Evet, hücre bölünmesinde kullanılır' },
          { id: 'E', text: 'Evet, her yerde kullanılır' }
        ],
        correctOptionId: 'A',
        explanation: 'Kloroplast bencil bir organeldir. Kendi ürettiği ATP\'yi dışarı (sitoplazmaya) vermez, sadece kendi içindeki besin yapımında harcar.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Işığa bağımlı reaksiyonlar için AŞAĞIDAKİLERDEN HANGİSİ GEREKLİ DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Işık' },
          { id: 'B', text: 'Klorofil' },
          { id: 'C', text: 'Su' },
          { id: 'D', text: 'Karbondioksit (CO₂)' },
          { id: 'E', text: 'ETS elemanları' }
        ],
        correctOptionId: 'D',
        explanation: 'Karbondioksit ışık evresinde DEĞİL, ışıktan bağımsız evrede (Calvin döngüsü) gereklidir.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi Işığa Bağımlı Evrenin ÜRÜNLERİNDEN (Çıktılarından) BİRİDİR?',
        options: [
          { id: 'A', text: 'Karbondioksit' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'Oksijen (O₂)' },
          { id: 'D', text: 'Glikoz' },
          { id: 'E', text: 'NADP⁺' }
        ],
        correctOptionId: 'C',
        explanation: 'Işık evresi sonucunda O₂ atmosfere verilir, ATP ve NADPH ise diğer evreye gönderilir.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Işıktan Bağımsız Reaksiyonlar (Genel)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Işıktan bağımsız reaksiyonlara (Karbon tutma evresine) onu keşfeden bilim insanının adıyla NE DENİR?',
        options: [
          { id: 'A', text: 'Krebs Döngüsü' },
          { id: 'B', text: 'Calvin Döngüsü' },
          { id: 'C', text: 'Cori Döngüsü' },
          { id: 'D', text: 'Azot Döngüsü' },
          { id: 'E', text: 'Su Döngüsü' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbondioksidin tutulup glikoz üretildiği reaksiyonlar dizisine Calvin (Kalvin) Döngüsü denir.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Calvin döngüsü kloroplastın neresinde gerçekleşir?',
        options: [
          { id: 'A', text: 'Tilakoit boşlukta' },
          { id: 'B', text: 'Granumda' },
          { id: 'C', text: 'Stromada (Sıvı bölgede)' },
          { id: 'D', text: 'Dış zarda' },
          { id: 'E', text: 'Mitokondride' }
        ],
        correctOptionId: 'C',
        explanation: 'Calvin döngüsünü gerçekleştiren enzimler Stroma sıvısında bulunur.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Işıktan bağımsız evrede (Calvin döngüsü) DIŞARIDAN alınan ve organik molekülün (besinin) iskeletini oluşturan GAZ hangisidir?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Azot' },
          { id: 'C', text: 'Karbondioksit (CO₂)' },
          { id: 'D', text: 'Hidrojen' },
          { id: 'E', text: 'Helyum' }
        ],
        correctOptionId: 'C',
        explanation: 'Glikozun (C₆H₁₂O₆) yapısındaki Karbon (C) ve Oksijen (O), alınan CO₂ gazından gelir.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Calvin döngüsünde CO₂ gazını yakalayarak döngüye girmesini sağlayan (CO₂\'yi ilk tutan) enzim hangisidir?',
        options: [
          { id: 'A', text: 'Amilaz' },
          { id: 'B', text: 'DNA Polimeraz' },
          { id: 'C', text: 'RuBisCO' },
          { id: 'D', text: 'Lipaz' },
          { id: 'E', text: 'Helikaz' }
        ],
        correctOptionId: 'C',
        explanation: 'RuBisCO (Ribüloz Bisfosfat Karboksilaz/Oksijenaz) dünyada en bol bulunan proteindir ve CO₂\'yi 5 Karbonlu RuBP bileşiğine bağlar.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Calvin döngüsünde CO₂\'nin bağlanması ve moleküllerin birbirine dönüşmesi (örneğin PGAL oluşumu) için enerji LAZIMDIR. Bu ENERJİ (ATP) nereden gelir?',
        options: [
          { id: 'A', text: 'Mitokondriden' },
          { id: 'B', text: 'Işığa bağımlı reaksiyonlardan (Tilakoitlerden)' },
          { id: 'C', text: 'Topraktan' },
          { id: 'D', text: 'Sitoplazmadan' },
          { id: 'E', text: 'Güneşten DOĞRUDAN' }
        ],
        correctOptionId: 'B',
        explanation: 'Calvin döngüsü ışığı doğrudan kullanmaz. Ancak ışık evresinde üretilen ATP ve NADPH\'ye muhtaçtır.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Calvin döngüsünde CO₂ gazı indirgenirken kullanılan HİDROJENLERİ (H) kim getirir?',
        options: [
          { id: 'A', text: 'ATP' },
          { id: 'B', text: 'FADH₂' },
          { id: 'C', text: 'NADPH (Işık evresinde Sudan aldığı hidrojenleri getirir)' },
          { id: 'D', text: 'Oksijen' },
          { id: 'E', text: 'Demir' }
        ],
        correctOptionId: 'C',
        explanation: 'Besin yapılabilmesi için hidrojen (elektron) lazımdır. Bunu taşıyan molekül NADPH\'tır.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'ATP ve NADPH harcandıktan sonra stromada oluşan ve Calvin döngüsünden çıkan 3 KARBONLU ilk kararlı organik ürün (besin iskeleti) nedir?',
        options: [
          { id: 'A', text: 'Nişasta' },
          { id: 'B', text: 'PGAL (Fosfogliseraldehit / G3P)' },
          { id: 'C', text: 'Glikojen' },
          { id: 'D', text: 'Amino asit' },
          { id: 'E', text: 'Protein' }
        ],
        correctOptionId: 'B',
        explanation: 'Calvin döngüsünden doğrudan glikoz çıkmaz, 3 Karbonlu PGAL (G3P) çıkar. Sonra bunlar glikoza vb. çevrilir.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Üretilen bu PGAL molekülü hücrede HANGİ AMAÇLA kullanılabilir?',
        options: [
          { id: 'A', text: 'Glikoz üretmek için' },
          { id: 'B', text: 'Amino asit, yağ asidi veya vitamin üretmek için' },
          { id: 'C', text: 'Döngünün devamı için RuBP (Ribüloz bisfosfat) molekülünü yeniden üretmek (yenilemek) için' },
          { id: 'D', text: 'HEPSİ (PGAL ana kavşaktır, tüm bunlara dönüşebilir)' },
          { id: 'E', text: 'Sadece glikoz üretir' }
        ],
        correctOptionId: 'D',
        explanation: 'PGAL (G3P) mucizevi bir moleküldür. Çoğu döngüyü sürdürmek için harcanırken, bir kısmı glikoz, yağ asidi veya amino asite dönüşmek için ayrılır.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Işıktan bağımsız (Calvin) reaksiyonları GECE (Karanlıkta) DE DEVAM EDER Mİ?',
        options: [
          { id: 'A', text: 'Evet, sabaha kadar eder' },
          { id: 'B', text: 'Hayır, ışık evresinden gelen ATP ve NADPH karanlıkta üretilemediği için Calvin döngüsü de kısa sürede DURUR' },
          { id: 'C', text: 'Sadece sıcak havalarda eder' },
          { id: 'D', text: 'Evet, ay ışığında eder' },
          { id: 'E', text: 'Hayır, çünkü CO₂ gece biter' }
        ],
        correctOptionId: 'B',
        explanation: 'Adı ışıktan bağımsız olsa da, ışık evresinin ürünlerine bağımlı olduğu için (doğada) karanlıkta durur.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Bir bitkinin fotosentezinde Glikoz ÜRETİLEBİLMESİ için en az KAÇ TANE Karbondioksit (CO₂) molekülünün Calvin döngüsüne girmesi gerekir?',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '6 (Glikoz C₆H₁₂O₆ olduğu için)' },
          { id: 'E', text: '12' }
        ],
        correctOptionId: 'D',
        explanation: 'Glikozda 6 adet karbon vardır, hepsi CO₂\'den gelmek zorundadır. Bu yüzden 6 tur (veya 6 CO₂ girişi) gerekir.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Işıktan bağımsız evrede ENZİMLER çok yoğun bir şekilde kullanıldığı için, bu evre AŞAĞIDAKİ etkenlerden HANGİSİNE karşı çok hassastır?',
        options: [
          { id: 'A', text: 'Rüzgar hızı' },
          { id: 'B', text: 'Yerçekimi' },
          { id: 'C', text: 'Sıcaklık (Optimum sıcaklık gereklidir)' },
          { id: 'D', text: 'Ses dalgaları' },
          { id: 'E', text: 'Karanlık' }
        ],
        correctOptionId: 'C',
        explanation: 'Enzimler protein yapılıdır ve yüksek sıcaklıklarda (örn 45-50°C) denatüre olup bozulurlar.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Işıktan bağımsız evrede ATP ve NADPH harcanıp GÖREVİNİ TAMAMLADIKTAN sonra, geriye kalan "ADP + P" ve "NADP⁺" nereye gider?',
        options: [
          { id: 'A', text: 'Yok olurlar' },
          { id: 'B', text: 'Atık olarak dışarı atılırlar' },
          { id: 'C', text: 'Işığa bağımlı evreye (Tilakoitlere) GERİ DÖNÜP tekrar ATP ve NADPH olarak yüklenirler' },
          { id: 'D', text: 'Mitokondriye giderler' },
          { id: 'E', text: 'Kökere gönderilirler' }
        ],
        correctOptionId: 'C',
        explanation: 'Kamyon (NADP⁺) boşaltıldıktan sonra tekrar yük almak için ışık evresine (Tilakoit zara) döner. Döngüsel bir ilişkidir.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Bitkiler fotosentezle ürettikleri FAZLA glikozları, gece kullanmak (veya depolamak) için kloroplastta HANGİ POLİMER molekülüne çevirirler?',
        options: [
          { id: 'A', text: 'Glikojen' },
          { id: 'B', text: 'Nişasta' },
          { id: 'C', text: 'Selüloz' },
          { id: 'D', text: 'Yağ' },
          { id: 'E', text: 'Protein' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler fazla şekeri "Nişasta" olarak depolar. (Kloroplastın içinde bile geçici nişasta tanecikleri oluşur).'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Amino asit ve organik baz (Adenin, Guanin vb.) üretilirken Karbon, Hidrojen ve Oksijene ek olarak hangi atoma ihtiyaç vardır?',
        options: [
          { id: 'A', text: 'Azot (N) (Topraktan nitrat tuzları olarak alınır)' },
          { id: 'B', text: 'Altın' },
          { id: 'C', text: 'Gümüş' },
          { id: 'D', text: 'Klor' },
          { id: 'E', text: 'Flor' }
        ],
        correctOptionId: 'A',
        explanation: 'PGAL -> Amino asit dönüşümünde Azot (N) eklenmek zorundadır.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Fotosentezin ÖZETİ olarak: Işık evresinden ..... ve ..... gelir, atmosferden ..... alınır ve Stroma\'da birleştirilerek Besin (PGAL) oluşturulur. Boşluklara ne gelmelidir?',
        options: [
          { id: 'A', text: 'Su, Oksijen / Azot' },
          { id: 'B', text: 'ATP, NADPH / Karbondioksit (CO₂)' },
          { id: 'C', text: 'Glikoz, Yağ / Oksijen' },
          { id: 'D', text: 'Işık, Su / Toprak' },
          { id: 'E', text: 'Magnezyum, Demir / CO₂' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık evresinden ATP ve NADPH gelir, atmosferden CO₂ girer ve Calvin döngüsünde besin sentezlenir.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Kemosentez Kavramı',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Işık enerjisi yerine, inorganik maddelerin oksitlenmesiyle açığa çıkan "Kimyasal Enerji" kullanılarak besin üretilmesine ne ad verilir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Kemosentez' },
          { id: 'C', text: 'Solunum' },
          { id: 'D', text: 'Hidroliz' },
          { id: 'E', text: 'Fermantasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemo (Kimyasal) + Sentez (Üretim). Güneş ışığı olmadan besin üretme yöntemidir.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Aşağıdaki canlı gruplarından hangisi Kemosentez YAPABİLİR?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'Hayvanlar' },
          { id: 'C', text: 'Mantarlar' },
          { id: 'D', text: 'Sadece bazı Bakteriler ve Arkeler (Prokaryotlar)' },
          { id: 'E', text: 'Algler' }
        ],
        correctOptionId: 'D',
        explanation: 'Kemosentezi SADECE bazı tek hücreli prokaryotlar (Bakteriler ve Arkeler) yapabilir. Hiçbir ökaryot kemosentez yapamaz.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Kemosentez olayı GÜNDÜZ mü yoksa GECE mi gerçekleşir?',
        options: [
          { id: 'A', text: 'Sadece Gündüz' },
          { id: 'B', text: 'Sadece Gece' },
          { id: 'C', text: 'Işığa bağımlı olmadığı için HEM GÜNDÜZ HEM GECE kesintisiz gerçekleşebilir' },
          { id: 'D', text: 'Sadece kışın' },
          { id: 'E', text: 'Sadece öğlen' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemosentetik canlılar ışık kullanmadıkları için güneşin doğmasına ihtiyaç duymazlar, 7/24 çalışabilirler.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Kemosentez yapan canlıların "KLOROFİL" pigmentine ihtiyaçları var mıdır?',
        options: [
          { id: 'A', text: 'Evet, çok vardır' },
          { id: 'B', text: 'Hayır, klorofil ışığı tutmak içindir; kemosentezde ışık kullanılmadığı için KLOROFİL YOKTUR' },
          { id: 'C', text: 'Sadece gündüzleri vardır' },
          { id: 'D', text: 'Zorunludur' },
          { id: 'E', text: 'Evet, kloroplastın içindedir' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık yoksa klorofile de ihtiyaç yoktur.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Kemosentez olayında inorganik moleküllerin (Amonyak, H₂S vb.) OKSİTLENMESİ (parçalanması) ile ne açığa çıkar?',
        options: [
          { id: 'A', text: 'Glikoz' },
          { id: 'B', text: 'Karbonhidrat' },
          { id: 'C', text: 'Kimyasal Enerji (ATP üretimi için kullanılır)' },
          { id: 'D', text: 'Protein' },
          { id: 'E', text: 'Güneş ışığı' }
        ],
        correctOptionId: 'C',
        explanation: 'İnorganik maddeler yakılarak (oksitlenerek) küçük bir kimyasal enerji elde edilir ve bu enerjiyle ATP üretilir.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Kemosentezde besin üretmek için KULLANILAN "Karbon Kaynağı" nedir?',
        options: [
          { id: 'A', text: 'Karbondioksit (CO₂) - Fotosentezdeki gibi' },
          { id: 'B', text: 'Amonyak' },
          { id: 'C', text: 'Şeker' },
          { id: 'D', text: 'Demir' },
          { id: 'E', text: 'Kükürt' }
        ],
        correctOptionId: 'A',
        explanation: 'Bütün ototroflar (fotosentetik ve kemosentetikler) besin iskeletini oluşturmak için Karbondioksit (CO₂) kullanırlar.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Kemosentez sırasında HANGİ inorganik maddeler OKSİTLENEBİLİR (enerji kaynağı olarak kullanılabilir)?',
        options: [
          { id: 'A', text: 'Sadece Su' },
          { id: 'B', text: 'Amonyak (NH₃), Hidrojen Sülfür (H₂S), Demir (Fe²⁺), Nitrit (NO₂⁻)' },
          { id: 'C', text: 'Glikoz' },
          { id: 'D', text: 'Protein' },
          { id: 'E', text: 'Sadece oksijen' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemosentetik bakteriler (Nitrit/Nitrat, Sülfür, Demir bakterileri) farklı inorganik maddeleri yakarak enerji elde edebilirler.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Doğadaki "Azot Döngüsü"nde (Amonyaktan Nitrat oluşumu sürecinde) SÜREKLİ GÖREV ALAN ve toprağı bitkiler için verimli hale getiren canlılar kimlerdir?',
        options: [
          { id: 'A', text: 'Mantarlar' },
          { id: 'B', text: 'Bitkiler' },
          { id: 'C', text: 'Kemosentetik Bakteriler (Nitrit ve Nitrat bakterileri)' },
          { id: 'D', text: 'Hayvanlar' },
          { id: 'E', text: 'Algler' }
        ],
        correctOptionId: 'C',
        explanation: 'Nitrifikasyon olayı kemosentetik bakteriler tarafından yapılır.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Hem Fotosentezde hem de Kemosentezde ORTAK OLARAK ÜRETİLEN molekül nedir?',
        options: [
          { id: 'A', text: 'Glikoz (Organik Besin)' },
          { id: 'B', text: 'Klorofil' },
          { id: 'C', text: 'Demir' },
          { id: 'D', text: 'Amonyak' },
          { id: 'E', text: 'Işık' }
        ],
        correctOptionId: 'A',
        explanation: 'Her ikisinin de amacı ototrof beslenmek (kendine Glikoz/Besin üretmek) tir.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Oksijensiz karanlık deniz diplerinde, volkanik bacaların etrafında yaşayan canlıların besin (enerji) kaynağı olan üreticiler HANGİLERİDİR?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'Algler' },
          { id: 'C', text: 'Kemosentetik Arkeler (Sülfür bakterileri/arkeleri vb.)' },
          { id: 'D', text: 'Balıklar' },
          { id: 'E', text: 'Mantarlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Işığın girmediği okyanus tabanlarında besin zinciri Kemosentez yapan prokaryotlarla başlar.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Kemosentetik bakteriler, inorganik maddeyi oksitlerken yan ürün olarak Oksijen (O₂) de üretebilirler. BU OKSİJENİ havaya verirler mi?',
        options: [
          { id: 'A', text: 'Evet, dünyanın oksijenini onlar üretir' },
          { id: 'B', text: 'Hayır, ürettikleri oksijeni KENDİ İÇLERİNDE başka inorganik maddeleri oksitlemek (yakmak) için tekrar KULLANIRLAR' },
          { id: 'C', text: 'Sadece gece verirler' },
          { id: 'D', text: 'Suda çözerler' },
          { id: 'E', text: 'Toprağa gömerler' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemosentetikler havaya (atmosfere) Oksijen gazı VERMEZLER. Oksijeni kendileri kullanırlar.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Kemosentez olayında Elektron Taşıma Sistemi (ETS) KULLANILIR MI?',
        options: [
          { id: 'A', text: 'Hayır, kemosentezde yoktur' },
          { id: 'B', text: 'Evet, inorganik maddeden kopan elektronlardan ATP üretmek için ETS GÖREV YAPAR' },
          { id: 'C', text: 'Sadece sıcakta görev yapar' },
          { id: 'D', text: 'Sadece gündüz yapar' },
          { id: 'E', text: 'ETS yapısı bitkilere özeldir' }
        ],
        correctOptionId: 'B',
        explanation: 'ATP üretiminin büyük kısmı kemosentezde de zardaki ETS (Elektron Taşıma Sistemi) üzerinden olur.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir "Kemoototrof"tur?',
        options: [
          { id: 'A', text: 'Çam ağacı (Fotoototrof)' },
          { id: 'B', text: 'İnsan (Heterotrof)' },
          { id: 'C', text: 'Nitrat Bakterisi (Kemoototrof)' },
          { id: 'D', text: 'Öglena (Fotoototrof)' },
          { id: 'E', text: 'Siyanobakteri (Fotoototrof)' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemosentez yapan canlılara Kemoototrof denir.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Fotosentez ve Kemosentezde ENERJİ KAYNAKLARI nasıldır?',
        options: [
          { id: 'A', text: 'İkisinde de Işıktır' },
          { id: 'B', text: 'İkisinde de Kimyasaldır' },
          { id: 'C', text: 'Fotosentezde Işık (Foton), Kemosentezde Kimyasal Enerji (İnorganik Oksidasyon)' },
          { id: 'D', text: 'Fotosentezde Kimyasal, Kemosentezde Işık' },
          { id: 'E', text: 'Kemosentezde enerji yoktur' }
        ],
        correctOptionId: 'C',
        explanation: 'İsimleri de zaten enerji kaynaklarından gelir.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Nitrifikasyon yapan (Kemosentetik) bakteriler inorganik maddeleri NEDEN oksitler (yakar)?',
        options: [
          { id: 'A', text: 'Zehirli oldukları için' },
          { id: 'B', text: 'ATP (Enerji) elde etmek için' },
          { id: 'C', text: 'Sıcaklığı artırmak için' },
          { id: 'D', text: 'Suyu yok etmek için' },
          { id: 'E', text: 'Renkli olmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Amaçları çevreyi temizlemek veya bitkilere azot hazırlamak değildir; tek dertleri inorganik maddeden kopardıkları elektronla hayatta kalmak için KENDİ ATP\'lerini üretmektir.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Fotosentez Denklemi ve Işık',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Bitkilerin ve Siyanobakterilerin fotosentez denkleminde "Hidrojen Kaynağı" olarak NE KULLANILIR?',
        options: [
          { id: 'A', text: 'Amonyak (NH₃)' },
          { id: 'B', text: 'Hidrojen Sülfür (H₂S)' },
          { id: 'C', text: 'Su (H₂O)' },
          { id: 'D', text: 'Glikoz' },
          { id: 'E', text: 'Oksijen' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkiler, siyanobakteriler ve algler elektron/hidrojen kaynağı olarak Su (H₂O) kullanır.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Bazı fotosentetik bakteriler (Mor sülfür bakterileri) su YERİNE hidrojen kaynağı olarak H₂S (Hidrojen Sülfür) kullanırlar. Bu canlılar atmosfere Oksijen (O₂) YERİNE hangi gazı verirler?',
        options: [
          { id: 'A', text: 'Karbondioksit (CO₂)' },
          { id: 'B', text: 'Azot (N₂)' },
          { id: 'C', text: 'Kükürt gazı (S₂) veya katı kükürt' },
          { id: 'D', text: 'Hidrojen (H₂)' },
          { id: 'E', text: 'Su Buharı' }
        ],
        correctOptionId: 'C',
        explanation: 'Su (H₂O) kullanılsaydı oksijen çıkardı. H₂S kullanıldığı için dışarı Kükürt (S) atılır.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Fotosentezde atmosfere verilen Oksijen gazının DOĞRUDAN kaynağı hangisidir (Van Niel hipotezi/Radyoaktif oksijen deneyleri)?',
        options: [
          { id: 'A', text: 'Karbondioksitteki Oksijen' },
          { id: 'B', text: 'Glikozdaki Oksijen' },
          { id: 'C', text: 'Sudaki (H₂O) Oksijen' },
          { id: 'D', text: 'Klorofildeki Oksijen' },
          { id: 'E', text: 'ATP\'deki Oksijen' }
        ],
        correctOptionId: 'C',
        explanation: 'CO₂\'nin oksijeni glikoza gider. Suyun oksijeni ise birleşip O₂ gazı olarak atmosfere (veya solunuma) gider.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Aşağıdaki ışık renklerinden hangisi, klorofil tarafından EN AZ soğurulduğu için bitki gelişimine (fotosenteze) en az katkıyı sağlar?',
        options: [
          { id: 'A', text: 'Mavi' },
          { id: 'B', text: 'Mor' },
          { id: 'C', text: 'Kırmızı' },
          { id: 'D', text: 'Yeşil' },
          { id: 'E', text: 'Turuncu' }
        ],
        correctOptionId: 'D',
        explanation: 'Yeşil ışık yansıtılır. Yansıtılan ışığın enerjisi fotosentezde kullanılamaz.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'İki bilim insanı (Engelmann deneyine benzer) kloroplast süspansiyonuna ışık tutuyorlar. A tüpüne kırmızı ışık, B tüpüne yeşil ışık veriliyor. Hangi tüpte daha fazla Oksijen (O₂) çıkışı olması beklenir?',
        options: [
          { id: 'A', text: 'A tüpü (Kırmızı ışık)' },
          { id: 'B', text: 'B tüpü (Yeşil ışık)' },
          { id: 'C', text: 'İkisi de aynı olur' },
          { id: 'D', text: 'İkisinde de O₂ çıkmaz' },
          { id: 'E', text: 'Yeşil ışıkta oksijen patlaması olur' }
        ],
        correctOptionId: 'A',
        explanation: 'Kırmızı ışık klorofil tarafından iyi soğurulur, fotosentez hızlı olur, bol oksijen çıkar.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Karotenoitler (Yardımcı pigmentler) aşırı şiddetli ışık geldiğinde NE YAPARLAR?',
        options: [
          { id: 'A', text: 'Hemen parçalanırlar' },
          { id: 'B', text: 'Işığın bir kısmını emip ısı olarak dağıtarak KLOROFİLİN ZARAR GÖRMESİNİ ENGELLERLER' },
          { id: 'C', text: 'Suyu patlatırlar' },
          { id: 'D', text: 'Köklerde depolanırlar' },
          { id: 'E', text: 'Glikoza dönüşürler' }
        ],
        correctOptionId: 'B',
        explanation: 'Karotenoitler güneş gözlüğü gibi davranıp fazla enerjiyi absorbe eder (fotokoruma) ve klorofilin yanmasını önler.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Fotosistem (FS) yapısı temelde HANGİ İKİ KISIMDAN oluşur?',
        options: [
          { id: 'A', text: 'Çekirdek ve Sitoplazma' },
          { id: 'B', text: 'Anten Kompleksi (Işığı toplayanlar) ve Tepkime Merkezi (Klorofil a ve İlk Alıcı)' },
          { id: 'C', text: 'Mitokondri ve Ribozom' },
          { id: 'D', text: 'Zar ve Çeper' },
          { id: 'E', text: 'DNA ve RNA' }
        ],
        correctOptionId: 'B',
        explanation: 'FS bir "çanak anten" gibidir. Kenarlardaki pigmentler (anten kompleksi) ışığı toplar ve ortadaki (tepkime merkezi) çubuğa aktarır.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Siyanobakterilerin fotosentez yapmak için KLOROPLAST organeline ihtiyacı yoktur. Peki fotosentez elemanları (Klorofil ve ETS) HÜCRENİN NERESİNDE bulunur?',
        options: [
          { id: 'A', text: 'Çekirdek içinde' },
          { id: 'B', text: 'Mitokondride' },
          { id: 'C', text: 'Hücre zarında (Zar kıvrımlarında) ve Sitoplazmada' },
          { id: 'D', text: 'Ribozomda' },
          { id: 'E', text: 'Hücre çeperinde' }
        ],
        correctOptionId: 'C',
        explanation: 'Prokaryot canlılarda zarlı organel (Kloroplast) yoktur, bu yüzden reaksiyonlar doğrudan hücre zarı uzantılarında ve sitoplazmada yürütülür.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Fotoliz reaksiyonu (Suyun ışıkla parçalanması) SADECE hangi Fotosistemin (FS) elektron eksiğini kapatmak için kullanılır?',
        options: [
          { id: 'A', text: 'Fotosistem I (FS I)' },
          { id: 'B', text: 'Fotosistem II (FS II)' },
          { id: 'C', text: 'Her ikisinin' },
          { id: 'D', text: 'Hiçbirinin' },
          { id: 'E', text: 'Ribozomun' }
        ],
        correctOptionId: 'B',
        explanation: 'FS II elektronunu kaptırır, onun yerine de sudan elektron alır. FS I ise kendi elektron açığını FS II\'den gelen elektronla kapatır.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Fotosentez denklemi (6 CO₂ + 12 H₂O -> C₆H₁₂O₆ + 6 O₂ + 6 H₂O) dikkate alındığında, Glikozun yapısındaki (C₆H₁₂O₆) HİDROJENLER (H) NEREDEN GELİR?',
        options: [
          { id: 'A', text: 'CO₂\'den' },
          { id: 'B', text: 'Klorofilden' },
          { id: 'C', text: 'H₂O (Su) molekülünden' },
          { id: 'D', text: 'Havadaki O₂\'den' },
          { id: 'E', text: 'Topraktan' }
        ],
        correctOptionId: 'C',
        explanation: 'Tepkimeye giren tek hidrojen kaynağı Su (veya H₂S)\'dur. Dolayısıyla glikozun hidrojeni mecburen sudan gelmektedir.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Bir fotosentez deneyinde bitkiye "Radyoaktif Karbon (C¹⁴) taşıyan CO₂" verilirse, bu işaretli karbon atomuna en son HANGİ MOLEKÜLÜN YAPISINDA rastlanır?',
        options: [
          { id: 'A', text: 'Su' },
          { id: 'B', text: 'Oksijen (O₂)' },
          { id: 'C', text: 'Klorofil' },
          { id: 'D', text: 'Glikoz (Besin)' },
          { id: 'E', text: 'ATP' }
        ],
        correctOptionId: 'D',
        explanation: 'CO₂\'nin tek amacı organik besinin (glikozun vb.) karbon iskeletini oluşturmaktır.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Işık enerjisi klorofile çarptığında elektron klorofilden kopar ve klorofil ..... olur. Elektronu alan "ilk alıcı" ise ..... olur. Boşluklara sırasıyla ne gelmelidir?',
        options: [
          { id: 'A', text: 'İndirgenir / Yükseltgenir' },
          { id: 'B', text: 'Yükseltgenir / İndirgenir' },
          { id: 'C', text: 'Bölünür / Çoğalır' },
          { id: 'D', text: 'Erir / Donar' },
          { id: 'E', text: 'Artar / Azalır' }
        ],
        correctOptionId: 'B',
        explanation: 'Elektronu veren (klorofil) yükseltgenir (oksidasyon). Elektronu alan (ilk alıcı) indirgenir (redüksiyon).'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Döngüsel fotofosforilasyon reaksiyonlarında SADECE FS I görev yapar. Bu durumda, suyun fotolizi OLMADIĞI İÇİN bu evrede NE ÜRETİLMEZ?',
        options: [
          { id: 'A', text: 'O₂ ve NADPH üretilmez' },
          { id: 'B', text: 'ATP üretilmez' },
          { id: 'C', text: 'Klorofil üretilmez' },
          { id: 'D', text: 'Işık üretilmez' },
          { id: 'E', text: 'Foton üretilmez' }
        ],
        correctOptionId: 'A',
        explanation: 'Döngüsel akışta sadece dönen elektrondan ATP elde edilir. Su parçalanmadığı için Oksijen çıkmaz, son alıcı NADP olmadığı için NADPH oluşmaz.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'NADP⁺ molekülünün elektron (e⁻) ve proton (H⁺) alarak NADPH haline geçmesi olayı, kloroplastın HANGİ BÖLGESİNDE gerçekleşir?',
        options: [
          { id: 'A', text: 'Dış zar' },
          { id: 'B', text: 'Mitokondri matriksi' },
          { id: 'C', text: 'Tilakoit Zarda (Stromaya bakan yüzeyinde)' },
          { id: 'D', text: 'Çekirdek' },
          { id: 'E', text: 'Hücre çeperi' }
        ],
        correctOptionId: 'C',
        explanation: 'Işık reaksiyonları tilakoit zardadır. NADP⁺ burada elektronları teslim alır.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Işık reaksiyonlarında Elektron Taşıma Sistemi (ETS) üzerinde elektronlar akarken SERBEST KALAN ENERJİ ne için kullanılır?',
        options: [
          { id: 'A', text: 'Suyu kaynatmak için' },
          { id: 'B', text: 'Hücreyi parçalamak için' },
          { id: 'C', text: 'Protonları (H⁺) stromadan tilakoit boşluğa (lümene) POMPALAMAK için (Böylece ATP sentazın dönebilmesi için fark oluşur)' },
          { id: 'D', text: 'Glikoz parçalamak için' },
          { id: 'E', text: 'Karbonu emmek için' }
        ],
        correctOptionId: 'C',
        explanation: 'ETS elemanları elektronların enerjisini, zardan karşı tarafa proton (H⁺) pompalamak (gradyan yaratmak) için harcar.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Fotosentez Evreleri Karşılaştırma',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi Işığa Bağımlı Reaksiyonların BİR ÖZELLİĞİ DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Tilakoit zarda gerçekleşir' },
          { id: 'B', text: 'Su (H₂O) harcanır ve O₂ üretilir' },
          { id: 'C', text: 'Karbondioksit (CO₂) kullanılır' },
          { id: 'D', text: 'ATP ve NADPH üretilir' },
          { id: 'E', text: 'Klorofil ışığı soğurur' }
        ],
        correctOptionId: 'C',
        explanation: 'CO₂ kullanımı Işıktan bağımsız evrededir.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi Işıktan Bağımsız Reaksiyonların (Calvin Döngüsü) BİR ÖZELLİĞİDİR?',
        options: [
          { id: 'A', text: 'Klorofilden elektron kopar' },
          { id: 'B', text: 'Suyun fotolizi gerçekleşir' },
          { id: 'C', text: 'Stroma sıvısında gerçekleşir ve CO₂ harcanır' },
          { id: 'D', text: 'ATP üretilir' },
          { id: 'E', text: 'O₂ gazı açığa çıkar' }
        ],
        correctOptionId: 'C',
        explanation: 'Calvin döngüsü stromada olur, CO₂ bağlanır, ATP/NADPH "tüketilir" (üretilmez) ve O₂ ile ilgisi yoktur.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Fotosentez evreleri arasında MADDE ALIŞVERİŞİ vardır. Işık evresinden -> Calvin döngüsüne DOĞRU NE TAŞINIR?',
        options: [
          { id: 'A', text: 'Su ve Oksijen' },
          { id: 'B', text: 'Glikoz ve CO₂' },
          { id: 'C', text: 'ATP ve NADPH' },
          { id: 'D', text: 'Klorofil' },
          { id: 'E', text: 'Enzim' }
        ],
        correctOptionId: 'C',
        explanation: 'Enerji (ATP) ve Elektron/Hidrojen (NADPH) taşıyıcıları ışık evresinden Calvin evresine geçer.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Calvin döngüsü görevini tamamladıktan sonra, Işık evresine GERİ DÖNEN (yeniden yüklenmek üzere) maddeler hangileridir?',
        options: [
          { id: 'A', text: 'Glikoz' },
          { id: 'B', text: 'O₂ ve CO₂' },
          { id: 'C', text: 'ADP, İnorganik Fosfat (P) ve NADP⁺' },
          { id: 'D', text: 'RuBisCO enzimi' },
          { id: 'E', text: 'PGAL' }
        ],
        correctOptionId: 'C',
        explanation: 'Enerjisi boşalan ADP ve hidrojenini bırakan NADP⁺ ışık evresine geri döner.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Işık enerjisinin "KİMYASAL BAĞ ENERJİSİNE" dönüştürülmesi DOĞRUDAN hangi molekülün SENTEZİ (Calvin döngüsü çıkışı) ile tamamlanmış olur?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Organik Besin (PGAL / Glikoz)' },
          { id: 'C', text: 'Su' },
          { id: 'D', text: 'Azot' },
          { id: 'E', text: 'Klorofil' }
        ],
        correctOptionId: 'B',
        explanation: 'ATP geçici bir enerjidir. Gerçek depolama, Karbondioksidin organik besine (C-C bağlarına) çevrilmesiyle tamamlanır.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Suyun fotoliziyle açığa çıkan "Elektronlar, Protonlar ve Oksijen" NEREYE GİDER?',
        options: [
          { id: 'A', text: 'Elektronlar FS II\'ye, Protonlar NADP⁺\'ye (ATP sentaz üzerinden), Oksijen Atmosfere gider' },
          { id: 'B', text: 'Hepsi glikoza gider' },
          { id: 'C', text: 'Hepsi havaya karışır' },
          { id: 'D', text: 'Protonlar toprağa gider' },
          { id: 'E', text: 'Oksijen FS I\'e gider' }
        ],
        correctOptionId: 'A',
        explanation: 'Fotolizin kaderi böyledir: Elektron FS II\'nin boşluğunu doldurur, H⁺ ATP üretiminden sonra NADPH\'a katılır, O₂ atılır.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Calvin döngüsünde 6 adet CO₂ kullanılarak 12 adet PGAL üretilir. Bu 12 PGAL\'nin KAÇ TANESİ doğrudan Organik Besin (Glikoz vb.) yapımı için DÖNGÜDEN ÇIKAR?',
        options: [
          { id: 'A', text: '12 tanesi birden' },
          { id: 'B', text: 'Hiçbiri' },
          { id: 'C', text: 'Sadece 2 tanesi çıkar (1 glikoz için), geri kalan 10 tanesi döngüyü sürdürmek (RuBP yenilemek) için içerde kalır' },
          { id: 'D', text: '6 tanesi' },
          { id: 'E', text: '9 tanesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Calvin döngüsü bir çarktır. Ürettiğinin çok küçük bir kısmını (2 PGAL = 1 Glikoz) kazanç olarak dışarı verir, çoğunu kendini çevirmek için harcar.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Işık evresindeki "Fotofosforilasyon" ile Mitokondrideki "Oksidatif Fosforilasyon" arasındaki EN BÜYÜK FARK (veya benzerlik) hangisidir?',
        options: [
          { id: 'A', text: 'İkisinde de ETS kullanılır ve ATP Sentaz vardır (Kemiozmotik hipotez geçerlidir)' },
          { id: 'B', text: 'Işık evresinde ATP Sentaz yoktur' },
          { id: 'C', text: 'Mitokondride ETS yoktur' },
          { id: 'D', text: 'Mitokondri ışıkla çalışır' },
          { id: 'E', text: 'Kloroplast Oksijen harcar' }
        ],
        correctOptionId: 'A',
        explanation: 'Enerjinin kaynağı farklıdır (Biri ışık, biri besin), ama ATP üretme MANTIĞI (H⁺ pompalamak ve ETS) tamamen AYNI işler.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Fotosentezin HIZINI belirleyen enzim (RuBisCO enzimi), hangi evrede AKTİFTİR?',
        options: [
          { id: 'A', text: 'Suyun parçalanmasında' },
          { id: 'B', text: 'Işıktan bağımsız reaksiyonlarda (Calvin Döngüsünde)' },
          { id: 'C', text: 'ETS üzerinde' },
          { id: 'D', text: 'Klorofilin uyarılmasında' },
          { id: 'E', text: 'ATP sentezinde' }
        ],
        correctOptionId: 'B',
        explanation: 'RuBisCO, CO₂ bağlayan enzimdir ve Calvin döngüsündedir.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Işığa bağımlı ve ışıktan bağımsız reaksiyonların MEYDANA GELDİĞİ YERLERİ sırasıyla kim eşleştirir?',
        options: [
          { id: 'A', text: 'Stroma - Tilakoit Zar' },
          { id: 'B', text: 'Tilakoit Zar - Stroma' },
          { id: 'C', text: 'Matriks - Krista' },
          { id: 'D', text: 'Çekirdek - Ribozom' },
          { id: 'E', text: 'Dış zar - Sitoplazma' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık -> Tilakoit Zar (Klorofiller oradadır). Calvin -> Stroma (Enzimler oradadır).'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Calvin döngüsü ışıktan bağımsız olsa da, bitki uzun süre karanlıkta bırakılırsa NEDEN fotosentez tamamen DURUR?',
        options: [
          { id: 'A', text: 'Yapraklar döküldüğü için' },
          { id: 'B', text: 'Karanlıkta ATP ve NADPH üretimi (Işık evresi) durur; bu moleküller bittiği an Calvin döngüsü de çalışamaz' },
          { id: 'C', text: 'CO₂ gazı karanlıkta bittiği için' },
          { id: 'D', text: 'Karanlık klorofili öldürdüğü için' },
          { id: 'E', text: 'Topraktan su gelmediği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Calvin döngüsü benzini (ATP/NADPH) bittiğinde duran bir motordur.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Fotosentezin sıcaklık artışından (örn 45-50°C) ÇOK HIZLI etkilenip durmasının SEBEBİ hangi evredir?',
        options: [
          { id: 'A', text: 'Işığa bağımlı evredeki klorofilin bozulması' },
          { id: 'B', text: 'Suyun buharlaşması' },
          { id: 'C', text: 'Işıktan bağımsız evrenin ENZİMATİK (RuBisCO vb.) olması ve enzimlerin yüksek ısıda (Denatürasyon) bozulması' },
          { id: 'D', text: 'ATP\'nin patlaması' },
          { id: 'E', text: 'Işığın geri yansıması' }
        ],
        correctOptionId: 'C',
        explanation: 'Işık reaksiyonları daha çok fizikseldir (elektron kopması). Ancak Calvin tamamen enzimlerle yürür, enzimler de sıcağa dayanamaz.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Aşağıdaki moleküllerden hangisi kloroplastta SENTEZLENMEZ?',
        options: [
          { id: 'A', text: 'Nişasta' },
          { id: 'B', text: 'PGAL' },
          { id: 'C', text: 'Glikoz' },
          { id: 'D', text: 'Amino asit' },
          { id: 'E', text: 'Magnezyum (Sadece topraktan alınır, üretilmez)' }
        ],
        correctOptionId: 'E',
        explanation: 'Mineraller canlılar tarafından sentezlenemez, dışarıdan hazır alınır. Diğer bütün organik besinleri bitki kloroplastında PGAL\'den üretebilir.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Bitki köklerindeki hücreler fotosentez YAPABİLİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, çok iyi yaparlar' },
          { id: 'B', text: 'Hayır, güneş ışığı almadıkları için kloroplast/klorofil bulundurmazlar (Leukoplast taşırlar)' },
          { id: 'C', text: 'Sadece gece yaparlar' },
          { id: 'D', text: 'Sadece sıcakta yaparlar' },
          { id: 'E', text: 'Kökler fotosentez ustasıdır' }
        ],
        correctOptionId: 'B',
        explanation: 'Kökler toprak altındadır, ışık görmezler ve kloroplastları yoktur. Besinlerini yapraklardan alırlar.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Fotosentezin evrelerini bir "FABRİKA" gibi düşünürsek; "Işık ve Suyun girip Elektrik (ATP/NADPH) ürettiği jeneratör" kısmı HANGİ evredir?',
        options: [
          { id: 'A', text: 'Calvin Döngüsü' },
          { id: 'B', text: 'Glikoliz' },
          { id: 'C', text: 'Krebs Döngüsü' },
          { id: 'D', text: 'Işığa Bağımlı Reaksiyonlar' },
          { id: 'E', text: 'Kemosentez' }
        ],
        correctOptionId: 'D',
        explanation: 'Işık evresi bir güç jeneratörüdür. Burada üretilen enerji asıl fabrika atölyesi olan Calvin döngüsüne gönderilir.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Çevresel Faktörlerin Etkisi 1',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Fotosentez hızını ETKİLEYEN FAKTÖRLER kuralına (Minimum Kuralı) göre; fotosentez hızını hangi faktör BELİRLER?',
        options: [
          { id: 'A', text: 'Miktarı EN FAZLA olan faktör' },
          { id: 'B', text: 'Miktarı EN AZ (Yetersiz) olan faktör sınırlandırıcıdır' },
          { id: 'C', text: 'Sadece sıcaklık' },
          { id: 'D', text: 'Sadece su' },
          { id: 'E', text: 'Ortalama miktar belirler' }
        ],
        correctOptionId: 'B',
        explanation: 'Minimum kuralı: İstersen güneşi tavan yap, eğer ortamda Karbondioksit azsa, fotosentez CO₂\'nin yettiği hızla (en düşük viteste) gider.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Işık Şiddeti arttıkça fotosentez hızı NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Sürekli ve sonsuza kadar artar' },
          { id: 'B', text: 'Önce artar, sonra başka bir faktör (örneğin CO₂) sınırlayıcı olacağı için SABİT KALIR (Plato çizer)' },
          { id: 'C', text: 'Hiç değişmez' },
          { id: 'D', text: 'Azalır' },
          { id: 'E', text: 'Dalgalanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık şiddeti artınca hız artar ama klorofillerin çalışma kapasitesi dolunca veya CO₂ yetmeyince hız sabitlenir.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Sıcaklık ile fotosentez hızı grafiği NASILDIR?',
        options: [
          { id: 'A', text: 'Sıcaklık arttıkça sürekli artar' },
          { id: 'B', text: 'Sürekli sabit kalır' },
          { id: 'C', text: 'Önce (optimum sıcaklığa kadar) ARTAR, sonra (enzimler bozulacağı için) hızla DÜŞER ve DURUR' },
          { id: 'D', text: 'Kışın en hızlıdır' },
          { id: 'E', text: 'Hiçbir etkisi yoktur' }
        ],
        correctOptionId: 'C',
        explanation: 'Enzimatik reaksiyon (Calvin döngüsü) olduğu için çan eğrisi (optimum noktası olan) bir grafik çizer.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Karbondioksit (CO₂) miktarının artması fotosentez hızını nasıl etkiler?',
        options: [
          { id: 'A', text: 'Sürekli azaltır' },
          { id: 'B', text: 'Belli bir seviyeye kadar ARTIRIR, sonra diğer faktörler sınırlayıcı olduğu için SABİTLENİR' },
          { id: 'C', text: 'Hiç etkilemez' },
          { id: 'D', text: 'CO₂ zehirli olduğu için bitkiyi öldürür' },
          { id: 'E', text: 'Sadece gece artırır' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık şiddetiyle aynı mantıkta. CO₂ bol olsa bile klorofil sayısı ve ışık miktarı sabitse, belli bir noktadan sonra hız artmaz.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Seralarda (Kapalı tarım alanlarında) bitki verimini artırmak için içeriye YAPAY OLARAK HANGİ GAZ PÜSKÜRTÜLEBİLİR (Veya soba yakılır)?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Azot' },
          { id: 'C', text: 'Karbondioksit (CO₂ Zenginleştirme)' },
          { id: 'D', text: 'Helyum' },
          { id: 'E', text: 'Metan' }
        ],
        correctOptionId: 'C',
        explanation: 'Sera içinde CO₂ miktarını (normal havadaki %0.03\'ten) %0.1 civarına çıkarmak, fotosentez hızını ve ürün verimini ciddi oranda artırır.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Su (H₂O) miktarının fotosenteze etkisi nasıldır?',
        options: [
          { id: 'A', text: 'Suyun fotosentezde hiçbir görevi yoktur' },
          { id: 'B', text: 'Ortamdaki su miktarı %15\'in altına düşerse enzimler ÇALIŞMAZ ve fotosentez DURUR. Su arttıkça belirli bir seviyeye kadar hız artar, sonra sabitlenir.' },
          { id: 'C', text: 'Su çok olursa bitki patlar' },
          { id: 'D', text: 'Su az olursa fotosentez daha hızlı olur' },
          { id: 'E', text: 'Sadece deniz bitkileri için geçerlidir' }
        ],
        correctOptionId: 'B',
        explanation: 'Enzimlerin çalışabilmesi için %15 su kuralı geçerlidir. Ayrıca su, ışık evresinde elektron kaynağıdır.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Bir bitkinin yapraklarındaki Kloroplast (Klorofil) Miktarı (Genetik bir faktör) çok fazlaysa, fotosentez hızı NASIL etkilenir?',
        options: [
          { id: 'A', text: 'Azalır' },
          { id: 'B', text: 'Kloroplast ve klorofil ne kadar fazlaysa, ışık tutma kapasitesi o kadar ARTAR, fotosentez potansiyeli YÜKSEK OLUR' },
          { id: 'C', text: 'Değişmez' },
          { id: 'D', text: 'Geceleri çok artar' },
          { id: 'E', text: 'Su ihtiyacını yok eder' }
        ],
        correctOptionId: 'B',
        explanation: 'Güneş paneli (Kloroplast) ne kadar çok ve genişse, üretilecek enerji (besin) o kadar fazla olur.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Yaprak yüzeyi ÇOK GENİŞ olan bir bitki ile DİKEN ŞEKLİNDE olan bir bitki (Kaktüs) karşılaştırılırsa, ışık alma ve fotosentez hızı nasıldır?',
        options: [
          { id: 'A', text: 'Diken yapraklılar daha hızlı yapar' },
          { id: 'B', text: 'Geniş yapraklılar DAHA ÇOK IŞIK alır ve stoma sayısı fazla olduğundan DAHA HIZLI fotosentez yaparlar' },
          { id: 'C', text: 'İkisi de eşittir' },
          { id: 'D', text: 'Geniş yaprak ışığı yansıtır' },
          { id: 'E', text: 'Kaktüs gündüz çok hızlı yapar' }
        ],
        correctOptionId: 'B',
        explanation: 'Yaprak ayasının geniş olması (muz, nilüfer vb) fotosentez yüzeyini maksimuma çıkarır.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Kurak ortam bitkilerinde (çöl vb.) yaprak yüzeyinde bulunan, suyu tutan "Kütikula" tabakası çok KALINDIR. Kütikula tabakasının ÇOK KALIN OLMASI fotosentez hızını nasıl etkiler?',
        options: [
          { id: 'A', text: 'Işığın geçişini biraz AZALTACAĞI ve gaz alışverişini zorlaştıracağı için fotosentezi YAVAŞLATIR' },
          { id: 'B', text: 'Fotosentezi çok hızlandırır' },
          { id: 'C', text: 'Klorofili artırır' },
          { id: 'D', text: 'Sıcaklığı artırır' },
          { id: 'E', text: 'Suyu kaynatır' }
        ],
        correctOptionId: 'A',
        explanation: 'Kütikula mumu suyu tutar ama aynı zamanda ışığın alt katmanlara geçişini de engelleyen bir bariyerdir.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Yapraklardaki gözeneklerin (Stoma) sayısı çok FAZLA ise, fotosentez bundan nasıl etkilenir?',
        options: [
          { id: 'A', text: 'Hiç etkilenmez' },
          { id: 'B', text: 'CO₂ girişini ve terlemeyi (su çekilmesini) kolaylaştıracağı için fotosentez HIZLANIR' },
          { id: 'C', text: 'Yavaşlar' },
          { id: 'D', text: 'Durdurur' },
          { id: 'E', text: 'Fotosentezi kemosenteze çevirir' }
        ],
        correctOptionId: 'B',
        explanation: 'Stomalar bitkinin ağzı burnu gibidir. Çok ağız, daha çok CO₂ ve daha çok hammadde demektir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Bitkinin topraktan yeterli DEMİR (Fe) ve MAGNEZYUM (Mg) alamaması durumunda, yaprakları sararır (Kloroz) ve fotosentez durur. Neden?',
        options: [
          { id: 'A', text: 'Çünkü demir ve magnezyum glikoza dönüşür' },
          { id: 'B', text: 'Magnezyum Klorofilin YAPI TAŞIDIR, Demir ise Klorofil üreten enzimin KOFAKTÖRÜDÜR (Yardımcısıdır). Bunlar yoksa KLOROFİL ÜRETİLEMEZ.' },
          { id: 'C', text: 'Kökler demiri sevmez' },
          { id: 'D', text: 'Suyu zehirler' },
          { id: 'E', text: 'Yaprak dökülür' }
        ],
        correctOptionId: 'B',
        explanation: 'Magnezyum ve demir eksikliğinde bitki klorofil yapamaz, yapraklar sararır (kloroz) ve fotosentez sekteye uğrar.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Gölge bitkileri (Örn: Eğrelti otu) ve Güneş bitkileri (Örn: Ayçiçeği) kıyaslandığında "Işık Şiddeti İhtiyacı" nasıldır?',
        options: [
          { id: 'A', text: 'İkisinin de aynıdır' },
          { id: 'B', text: 'Gölge bitkileri düşük ışıkta DAHİ fotosentez yapabilirken (doygunluğa çabuk ulaşır), Güneş bitkileri YÜKSEK IŞIK şiddetine ihtiyaç duyar' },
          { id: 'C', text: 'Güneş bitkisi karanlıkta yaşar' },
          { id: 'D', text: 'Gölge bitkisi suyu sevmez' },
          { id: 'E', text: 'Sadece güneş bitkisi fotosentez yapar' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler adaptasyonlarına göre ışık isteklerini (minimum ve optimum değerlerini) ayarlamışlardır.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Tarım arazisine azotlu ve fosforlu GÜBRE atılması fotosentez hızını nasıl etkiler?',
        options: [
          { id: 'A', text: 'Bitkiyi zehirler' },
          { id: 'B', text: 'Topraktaki eksik mineralleri (Minimum kuralı) tamamlayacağı için bitki gelişimini ve fotosentezi ARTIRIR' },
          { id: 'C', text: 'Hiçbir etkisi yoktur' },
          { id: 'D', text: 'Suyu yok eder' },
          { id: 'E', text: 'Fotosentezi durdurur' }
        ],
        correctOptionId: 'B',
        explanation: 'Gübre, bitkinin sentez yaparken (NADP, ATP, Klorofil, Enzim vb) ihtiyaç duyduğu inorganik maddeleri vererek sistemi hızlandırır.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Atmosferdeki OKSİJEN miktarının çok fazla artması (%21\'den yukarı çıkması) fotosentez hızını nasıl etkiler (RuBisCO enziminin özelliği)?',
        options: [
          { id: 'A', text: 'Hızlandırır' },
          { id: 'B', text: 'Hiç etkilemez' },
          { id: 'C', text: 'Oksijen, RuBisCO enzimi için CO₂ ile yarışa girer. Aşırı oksijen fotosentez hızını DÜŞÜRÜR (Buna Fotorespirasyon denir)' },
          { id: 'D', text: 'Bitki patlar' },
          { id: 'E', text: 'Yeni kloroplast üretir' }
        ],
        correctOptionId: 'C',
        explanation: 'RuBisCO biraz kafası karışık bir enzimdir. Ortamda Oksijen çoksa gidip ona bağlanır (Fotorespirasyon) ve bu da fotosentezin verimini düşürür.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Bir bitki gün boyu (Sabah 08:00 - Akşam 20:00) gözlemlendiğinde fotosentez hızı en yüksek HANGİ SAATLERDE olur?',
        options: [
          { id: 'A', text: 'Gece yarısı' },
          { id: 'B', text: 'Sabah gün doğarken' },
          { id: 'C', text: 'Öğle saatlerinde (Işık şiddetinin ve sıcaklığın optimum olduğu anlarda)' },
          { id: 'D', text: 'Akşam güneş batarken' },
          { id: 'E', text: 'Sabah ve Akşam eşit' }
        ],
        correctOptionId: 'C',
        explanation: 'Güneşin tam tepede, ışık şiddetinin en yüksek ve sıcaklığın 25-30 derece civarında olduğu öğle vakitlerinde hız zirve yapar (Eğer su kaybı/stoma kapanması olmuyorsa).'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Çevresel Faktörlerin Etkisi 2 (Deneyler)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Kapalı bir cam fanus içindeki yeşil bir saksı bitkisi, sürekli IŞIK altındayken bile bir süre sonra fotosentezi DURDURUR. Bunun en olası nedeni nedir?',
        options: [
          { id: 'A', text: 'Işığın tükenmesi' },
          { id: 'B', text: 'Fanus içindeki Karbondioksitin (CO₂) BİTMESİ' },
          { id: 'C', text: 'Toprağın taşlaşması' },
          { id: 'D', text: 'Oksijenin bitmesi' },
          { id: 'E', text: 'Klorofilin kaybolması' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapalı ortamda gaz alışverişi yoktur. Bitki fotosentez yaptıkça CO₂\'yi tüketir ve CO₂ bitince (minimum kuralı) fotosentez de durur.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Aynı kapalı cam fanus içine bu bitkinin yanına "Fare" veya "Yanan Mum" konulursa bitkinin fotosentez süresi UZAR. NEDEN?',
        options: [
          { id: 'A', text: 'Fare ve mum ortamı ısıttığı için' },
          { id: 'B', text: 'Fare solunum yaparak, mum ise yanarak havaya CO₂ VERDİĞİ İÇİN (Bitkinin besini olan CO₂ tükenmez)' },
          { id: 'C', text: 'Fare oksijen ürettiği için' },
          { id: 'D', text: 'Mum su buharı yaptığı için' },
          { id: 'E', text: 'Bitki fareyi yediği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Hayvanlar solunumla CO₂ verir, bitki bu CO₂\'yi alıp O₂ verir. Kapalı sistemde bu döngü birbirini uzun süre besler (Priestley deneyi mantığı).'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Kapalı cam fanus içine (ışıklı ortamda) bitkinin yanına "Kireç Suyu (veya KOH, Ba(OH)₂ gibi maddeler)" konulursa, kireç suyu BULANIR ve bitki kısa sürede ÖLÜR. NEDEN?',
        options: [
          { id: 'A', text: 'Kireç suyu oksijeni tuttuğu için' },
          { id: 'B', text: 'Kireç suyu ortamdaki Karbondioksiti (CO₂) TUTAR (Kendisine bağlar). CO₂ kalmadığı için bitki fotosentez yapamaz ve açlıktan ölür.' },
          { id: 'C', text: 'Kireç suyu ısı yaydığı için' },
          { id: 'D', text: 'Kireç suyu ışığı kestiği için' },
          { id: 'E', text: 'Kireç suyu bitkiyi erittiği için' }
        ],
        correctOptionId: 'B',
        explanation: 'KOH (Potasyum hidroksit), Kireç suyu, Ba(OH)₂ gibi maddeler kimyada "Karbondioksit Tutucu (absorban)" olarak bilinir. Ortamdaki CO₂\'yi çekerler.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Bir su bitkisi olan Elodea ters çevrilmiş bir cam huninin altında (suda) ışıklandırıldığında tüpün üstünde GAZ KABARCIKLARI birikir. Işık şiddeti ARTIRILDIĞINDA bu kabarcıkların ÇIKIŞ HIZI artar. Bu kabarcıklar HANGİ GAZA aittir?',
        options: [
          { id: 'A', text: 'Karbondioksit' },
          { id: 'B', text: 'Azot' },
          { id: 'C', text: 'Oksijen (O₂)' },
          { id: 'D', text: 'Hidrojen' },
          { id: 'E', text: 'Helyum' }
        ],
        correctOptionId: 'C',
        explanation: 'Su bitkilerinde fotosentez hızını çıkan gaz kabarcıklarından ölçebiliriz. Suyun fotoliziyle çıkan bu gaz Oksijendir.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Elodea deneyinde suyun içine biraz "Maden Suyu (Gazoz) veya NaHCO₃ (Sodyum bikarbonat)" eklendiğinde kabarcık çıkışı HIZLANIR. Maden suyunun buradaki ETKİSİ nedir?',
        options: [
          { id: 'A', text: 'Suyu soğutması' },
          { id: 'B', text: 'İçindeki şekerle beslemesi' },
          { id: 'C', text: 'Suya çözünmüş CO₂ (Karbondioksit) vererek fotosentezi hızlandırması' },
          { id: 'D', text: 'Oksijeni yok etmesi' },
          { id: 'E', text: 'Renk katması' }
        ],
        correctOptionId: 'C',
        explanation: 'Bikarbonat bileşikleri veya maden suyu (soda) suya CO₂ bırakır. Artan CO₂ fotosentezi hızlandırır.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Işık ve sıcaklığın optimum olduğu bir ortamda, ortamdaki Karbondioksit (CO₂) miktarı SÜREKLİ ARTIRILIRSA fotosentez hızı nasıl değişir?',
        options: [
          { id: 'A', text: 'Sürekli artar' },
          { id: 'B', text: 'Belli bir değere kadar artar, sonra klorofil miktarı vb. etkenler sınırlandırdığı için (Veya RuBisCO doygunluğa ulaştığı için) SABİT KALIR' },
          { id: 'C', text: 'Düşer' },
          { id: 'D', text: 'Dalgalanır' },
          { id: 'E', text: 'Durur' }
        ],
        correctOptionId: 'B',
        explanation: 'Minimum kuralı devreye girer. Ne kadar çok CO₂ verirsen ver, yakalayacak el (enzim/klorofil) sınırlıysa üretim sabitlenir.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Bitkilerde fotosentez hızı ile solunum hızı EŞİT olduğunda (Kompensasyon - Denge Noktası) dışarıdan gaz alışverişi DURUR. Bu denge noktasında bitki NASIL HAYATTA KALIR?',
        options: [
          { id: 'A', text: 'Dışarıdan oksijen alarak' },
          { id: 'B', text: 'Solunumda ürettiği CO₂\'yi fotosentezde, fotosentezde ürettiği O₂\'yi solunumda DOĞRUDAN (kendi içinde) kullanarak hayatta kalır' },
          { id: 'C', text: 'Fotosentezi durdurarak' },
          { id: 'D', text: 'Köklerinden beslenerek' },
          { id: 'E', text: 'Ölür' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapalı bir döngü oluşur (Geri dönüşüm). Dışarıdan gaz almaz, dışarıya gaz vermez.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Bitkinin yapraklarındaki yeşil (klorofilli) ve beyaz (klorofilsiz) kısımları içeren "Alacalı Yaprak (Koleus vb.)" deneylerinde, Işıkta bekletildikten sonra İYOT (Nişasta ayracı - mavi/mor yapar) damlatılır. Yaprağın hangi kısmı MAVİ-MOR renk alır?',
        options: [
          { id: 'A', text: 'Beyaz kısımlar' },
          { id: 'B', text: 'Sadece Yeşil kısımlar (Çünkü klorofilli kısımlar fotosentez yapıp nişasta üretmiştir)' },
          { id: 'C', text: 'Tüm yaprak' },
          { id: 'D', text: 'Sap kısmı' },
          { id: 'E', text: 'Hiçbir yeri boyanmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Beyaz kısımlarda klorofil olmadığı için fotosentez olmaz, nişasta üretilmez ve iyotla boyanmaz.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Karanlıkta bekletilen bir bitkinin yaprağına İYOT (Nişasta ayracı) damlatıldığında yaprakta renk değişimi OLMAZ. Neden?',
        options: [
          { id: 'A', text: 'İyot karanlıkta bozulduğu için' },
          { id: 'B', text: 'Karanlıkta fotosentez yapılamadığı ve var olan nişastalar solunumda tüketildiği (hidroliz edildiği) için yaprakta NİŞASTA KALMAMIŞTIR' },
          { id: 'C', text: 'Klorofil yok olduğu için' },
          { id: 'D', text: 'Yaprak terlediği için' },
          { id: 'E', text: 'İyot sadece güneşte çalıştığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Gece boyunca bitki fotosentez yapamaz ve depodaki şekeri harcar.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Eğer bir saksı bitkisinin yapraklarının yarısı ALÜMİNYUM FOLYO ile tamamen kapatılırsa ve birkaç gün güneşte bekletilirse folyolu kısımlarda NE OLMASI BEKLENİR?',
        options: [
          { id: 'A', text: 'Daha çok büyümesi' },
          { id: 'B', text: 'Daha yeşil olması' },
          { id: 'C', text: 'Işık alamadığı için fotosentez durur, besinsizlikten SARARIR ve kurur' },
          { id: 'D', text: 'Çiçek açması' },
          { id: 'E', text: 'Meyve vermesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Folyo ışığı keser. Işık yoksa fotosentez yok, bitki o bölgede aç kalır.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Atmosferdeki kirlilik ve Duman (İs/Toz) tabakasının bitki yapraklarının üzerini (stomaları) KAPLAMASI fotosentez hızını nasıl etkiler?',
        options: [
          { id: 'A', text: 'Stomaları tıkayıp CO₂ girişini ve ışık geçirgenliğini engelleyeceği için fotosentezi YAVAŞLATIR' },
          { id: 'B', text: 'Tozlar gübre gibi davranıp hızlandırır' },
          { id: 'C', text: 'Hiç etkilemez' },
          { id: 'D', text: 'Klorofili artırır' },
          { id: 'E', text: 'Sadece gece hızlandırır' }
        ],
        correctOptionId: 'A',
        explanation: 'Tozlar hem camı (ışığı) karartır hem de gözenekleri (stomaları) tıkayarak nefes almayı (CO₂ girişini) önler.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Topraktaki su miktarının azalması (Kuraklık) bitkide ilk olarak NEYE yol açar?',
        options: [
          { id: 'A', text: 'Köklerin büyümesine' },
          { id: 'B', text: 'Yaprakların daha yeşil olmasına' },
          { id: 'C', text: 'Su kaybını önlemek için STOMALARIN KAPANMASINA ve dolayısıyla fotosentezin DURMASINA (veya yavaşlamasına)' },
          { id: 'D', text: 'Meyve vermesine' },
          { id: 'E', text: 'Tohum çatlamasına' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitki susuz kalırsa canını kurtarmak için kapıları (stomaları) kapatır. Kapı kapanınca içeri CO₂ giremez, fotosentez açlıktan durur.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Bir araştırmacı, fotosentez hızını ölçmek için kuru ağırlık yöntemini kullanıyor. Bitkinin SADECE GÜNDÜZ KURU AĞIRLIĞININ ARTTIĞINI görüyor. Neden?',
        options: [
          { id: 'A', text: 'Gündüz su içtiği için' },
          { id: 'B', text: 'Gündüz fotosentezle ORGANİK MADDE (Glikoz vb.) üretilip biriktiği için (Gece ise solunumla tüketilir, kuru ağırlık azalır)' },
          { id: 'C', text: 'Topraktan mineral çektiği için' },
          { id: 'D', text: 'Oksijen ağır olduğu için' },
          { id: 'E', text: 'Güneş ışığı ağır olduğu için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kuru ağırlık (suyu çıkartılmış bitki), içerideki organik madde miktarıdır. Fotosentez bu maddeyi artırır.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Eğer bir bitki Kırmızı ve Mor ışığın yan yana olduğu, ancak SADECE 0°C Sıcaklıkta olan bir odaya konursa fotosentez hızı nasıl olur?',
        options: [
          { id: 'A', text: 'Işık çok iyi olduğu için en yüksek olur' },
          { id: 'B', text: 'Sıfıra yakın (DURMUŞ) olur; çünkü ışık ne kadar iyi olursa olsun enzimler 0 derecede ÇALIŞAMAZ' },
          { id: 'C', text: 'Sadece kırmızı ışıkta yapar' },
          { id: 'D', text: 'Normal devam eder' },
          { id: 'E', text: 'Isı üretip ortamı ısıtır' }
        ],
        correctOptionId: 'B',
        explanation: 'Minimum kuralı (Sıcaklık minimumda olduğu için diğerlerinin önemi kalmaz).'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Fotosentez yapabilen Kemosentetik bir canlı VAR MIDIR?',
        options: [
          { id: 'A', text: 'Evet, Euglena (Öglena) her ikisini de yapar' },
          { id: 'B', text: 'Hayır. Bir canlı ya ışıkla (Fotoototrof) ya da kimyasal yolla (Kemoototrof) besin üretir. İkisini birden yapan tek bir hücre (canlı türü) BİLİNMEMEKTEDİR.' },
          { id: 'C', text: 'Evet, Böcekçil bitkiler' },
          { id: 'D', text: 'Evet, Mantarlar' },
          { id: 'E', text: 'Evet, Algler' }
        ],
        correctOptionId: 'B',
        explanation: 'Canlıların enerji metabolizmaları genelde tek bir kalıp üzerine kuruludur.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Denklemler ve Hesaplamalar',
    type: 'easy',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Fotosentezde 1 molekül GLİKOZ (C₆H₁₂O₆) üretebilmek için Calvin döngüsüne TOPLAM KAÇ TANE Karbondioksit (CO₂) molekülü girmelidir?',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '6' },
          { id: 'E', text: '12' }
        ],
        correctOptionId: 'D',
        explanation: 'Glikozda 6 Karbon vardır (C₆). CO₂\'de ise 1 Karbon vardır. Bu yüzden 6 adet CO₂ girmesi şarttır.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Bir Calvin döngüsünde (1 molekül CO₂ bağlandığında) yaklaşık 3 ATP ve 2 NADPH harcanır. 1 molekül GLİKOZ üretmek için (6 CO₂ girdiği düşünülürse) TOPLAM KAÇ ATP ve NADPH harcanır?',
        options: [
          { id: 'A', text: '6 ATP, 6 NADPH' },
          { id: 'B', text: '12 ATP, 12 NADPH' },
          { id: 'C', text: '18 ATP ve 12 NADPH' },
          { id: 'D', text: '36 ATP, 24 NADPH' },
          { id: 'E', text: '3 ATP, 2 NADPH' }
        ],
        correctOptionId: 'C',
        explanation: '1 CO₂ için -> 3 ATP, 2 NADPH. 6 CO₂ için (6x3)=18 ATP, (6x2)=12 NADPH harcanır.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Bu 18 ATP ve 12 NADPH\'ın SENTEZLENMESİ nerede olmuştur?',
        options: [
          { id: 'A', text: 'Mitokondride' },
          { id: 'B', text: 'Stromada' },
          { id: 'C', text: 'Granada (Tilakoit zarda ışığa bağımlı reaksiyonlarda)' },
          { id: 'D', text: 'Sitoplazmada' },
          { id: 'E', text: 'Çekirdekte' }
        ],
        correctOptionId: 'C',
        explanation: 'Harcanan bu enerji ve hidrojenler, birinci evre olan Işık reaksiyonlarında üretilip Calvin\'e gönderilmiştir.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Glikoz (C₆H₁₂O₆) üretilirken Hidrojen (H) kaynağı olarak SU (H₂O) kullanıldığında katsayılar nasıldır (Basit denklem)?',
        options: [
          { id: 'A', text: '6 CO₂ + 6 H₂O -> C₆H₁₂O₆ + 6 O₂' },
          { id: 'B', text: 'CO₂ + H₂O -> Glikoz' },
          { id: 'C', text: '6 CO₂ + 12 H₂S -> C₆H₁₂O₆ + 12 S' },
          { id: 'D', text: '6 CO₂ + H₂O -> 6 Glikoz' },
          { id: 'E', text: '2 CO₂ + 2 H₂O -> O₂' }
        ],
        correctOptionId: 'A',
        explanation: 'Net denklemde 6 CO₂ ve 6 H₂O birleşerek 1 Glikoz ve 6 O₂ çıkarır. (Gerçekte 12 H₂O girer 6 H₂O çıkar).'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Eğer bir Mor Sülfür Bakterisi fotosentez yapıyorsa, 1 molekül Glikoz üretmesi durumunda DOĞAYA KAÇ MOLEKÜL (veya atom) KÜKÜRT (S) verebilir?',
        options: [
          { id: 'A', text: 'Hiç vermez' },
          { id: 'B', text: '1 tane' },
          { id: 'C', text: '6 tane' },
          { id: 'D', text: '12 tane (12 H₂S kullanıldığı için 12 S açığa çıkar)' },
          { id: 'E', text: '36 tane' }
        ],
        correctOptionId: 'D',
        explanation: 'Denklem: 6 CO₂ + 12 H₂S -> C₆H₁₂O₆ + 12 S + 6 H₂O (Bazı kaynaklarda net katsayı 6 H₂S -> 6 S olarak geçer, soru mantığı sabittir).'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Fotosentez denklemi Tersine çevrildiğinde (C₆H₁₂O₆ + 6 O₂ -> 6 CO₂ + 6 H₂O + Enerji) HANGİ BİYOLOJİK OLAYI ifade eder?',
        options: [
          { id: 'A', text: 'Kemosentez' },
          { id: 'B', text: 'Fermantasyon' },
          { id: 'C', text: 'Oksijenli Solunum' },
          { id: 'D', text: 'Sentez (Dehidrasyon)' },
          { id: 'E', text: 'Sindirim (Hidroliz)' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentez besin (glikoz) üretimiyken, Oksijenli Solunum o besinin parçalanıp CO₂ ve H₂O\'ya dönüştürülmesi olayıdır (Tam tersidir).'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Fotoliz olayında (Suyun parçalanması) 1 molekül su (H₂O) parçalandığında KAÇ TANE elektron (e⁻) ve proton (H⁺) serbest kalır?',
        options: [
          { id: 'A', text: '1 e⁻ ve 1 H⁺' },
          { id: 'B', text: '2 e⁻ ve 2 H⁺' },
          { id: 'C', text: '4 e⁻ ve 4 H⁺' },
          { id: 'D', text: '6 e⁻ ve 6 H⁺' },
          { id: 'E', text: 'Sadece oksijen çıkar' }
        ],
        correctOptionId: 'B',
        explanation: 'H₂O -> 2 H⁺ + 2 e⁻ + 1/2 O₂'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Eğer bir kloroplast 12 molekül Suyun (H₂O) FOTOLİZİNİ gerçekleştirirse, atmosfere (veya sisteme) NET olarak KAÇ MOLEKÜL OKSİJEN GAZI (O₂) verilir?',
        options: [
          { id: 'A', text: '12' },
          { id: 'B', text: '6' },
          { id: 'C', text: '24' },
          { id: 'D', text: '3' },
          { id: 'E', text: '1' }
        ],
        correctOptionId: 'B',
        explanation: '1 su (H₂O) yarım (1/2) O₂ verir. 12 H₂O -> 6 O₂ verir.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Bakteriyel Kemosentez genel denklemi şu şekildedir: İnorganik madde + O₂ -> Yeni inorganik + Enerji (ATP). Elde edilen bu ATP İLE ne yapılır?',
        options: [
          { id: 'A', text: 'Dışarı atılır' },
          { id: 'B', text: 'Hemen 2. aşamada: CO₂ + H₂O -> Organik besin (Glikoz) sentezinde KULLANILIR' },
          { id: 'C', text: 'Hareket etmek için kullanılır' },
          { id: 'D', text: 'Işık üretilir' },
          { id: 'E', text: 'Klorofile verilir' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemosentez 2 aşamalıdır: Önce inorganik madde yakılıp ATP elde edilir, sonra o ATP ile karbondioksit birleştirilip besin yapılır.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Aşağıdaki molekül çiftlerinden HANGİLERİ Calvin döngüsünde (Işıktan bağımsız evrede) birbiriyle BİRLEŞİR (Reaksiyona girer)?',
        options: [
          { id: 'A', text: 'Su ve Oksijen' },
          { id: 'B', text: 'Karbondioksit (CO₂) ve RuBP (Ribüloz Bisfosfat)' },
          { id: 'C', text: 'Glikoz ve ATP' },
          { id: 'D', text: 'Klorofil ve Işık' },
          { id: 'E', text: 'NADP ve Elektron' }
        ],
        correctOptionId: 'B',
        explanation: 'Calvin döngüsünün ilk basamağı (Fiksasyon), CO₂ gazının 5 Karbonlu olan RuBP molekülüne (RuBisCO enzimi ile) eklenmesidir.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Calvin döngüsünde 3 Karbonlu (3C) olan PGAL (G3P) molekülünden Glikoz (6C) üretmek için en az KAÇ TANE PGAL\'in birleşmesi gerekir (Teorik olarak)?',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2 (3C + 3C = 6C)' },
          { id: 'C', text: '3' },
          { id: 'D', text: '6' },
          { id: 'E', text: '12' }
        ],
        correctOptionId: 'B',
        explanation: 'PGAL (Fosfogliseraldehit) 3 karbonludur. 2 tanesi hücre içinde birleşerek 6 karbonlu fruktoz veya glikoza dönüşür.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Kemosentetik bakteriler (Örn: Nitrit bakterisi Amonyağı oksitlerken) dışarıdan HANGİ GAZA mutlak ihtiyaç duyarlar (İnorganik maddeyi OKSİTLEMEK için)?',
        options: [
          { id: 'A', text: 'Karbondioksit' },
          { id: 'B', text: 'Azot' },
          { id: 'C', text: 'Oksijen (O₂)' },
          { id: 'D', text: 'Hidrojen' },
          { id: 'E', text: 'Metan' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksitlemek = Yakmak = Oksijen kullanmak demektir. Bu yüzden kemosentetik canlıların tümü (metanojenler hariç) genelde AEROB (Oksijenli ortamda yaşayan) canlılardır.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Siyanobakteri ve Yeşil bitkiler fotoototroftur, İKİSİNİN DE ORTAK OLARAK DOĞAYA VERDİĞİ (Çıkardığı) GAZ hangisidir?',
        options: [
          { id: 'A', text: 'Karbondioksit' },
          { id: 'B', text: 'Azot' },
          { id: 'C', text: 'Oksijen (O₂) (Çünkü ikisi de Hidrojen kaynağı olarak H₂O kullanır)' },
          { id: 'D', text: 'H₂S' },
          { id: 'E', text: 'Metan' }
        ],
        correctOptionId: 'C',
        explanation: 'Su (H₂O) kullanan tüm fotosentetikler havaya (veya suya) Oksijen gazı verirler.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'NADP⁺ molekülü elektron ve proton alarak NADPH\'a dönüşür. Bu tepkime HANGİ ENZİM yardımıyla katalizlenir?',
        options: [
          { id: 'A', text: 'RuBisCO' },
          { id: 'B', text: 'NADP+ Redüktaz (İndirgeyici enzim)' },
          { id: 'C', text: 'Amilaz' },
          { id: 'D', text: 'Pepsin' },
          { id: 'E', text: 'ATP Sentaz' }
        ],
        correctOptionId: 'B',
        explanation: 'ETS\'nin en sonunda bulunan NADP Redüktaz enzimi, gelen elektronu NADP⁺\'ye ekleyerek (indirgeyerek) onu NADPH yapar.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Bir saksı bitkisinin YAPRAĞINDA üretilen Glikoz molekülleri, KÖK hücrelerine kadar HANGİ TAŞIMA SİSTEMİ ile iletilir?',
        options: [
          { id: 'A', text: 'Ksilem (Odun boruları)' },
          { id: 'B', text: 'Floem (Soymuk boruları) aracılığıyla Organik Besin olarak taşınır' },
          { id: 'C', text: 'Sinirlerle' },
          { id: 'D', text: 'Kan damarlarıyla' },
          { id: 'E', text: 'Hava akımıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkilerde su Ksilem ile aşağıdan yukarı, besin (glikoz/sakaroz) ise Floem ile yukarıdan aşağı (veya ihtiyaca göre tersi) taşınır.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'İleri Kavramlar ve Karşılaştırmalar',
    type: 'medium',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Fotosistem II\'nin (FS II) Merkezindeki Klorofil-a molekülünün (P680), suyu parçalayabilmesinin (Fotolizi tetiklemesinin) TEMEL NEDENİ nedir?',
        options: [
          { id: 'A', text: 'Çünkü FS II su ile beslenir' },
          { id: 'B', text: 'Işık vurup elektron fırlattığında P680 çok güçlü bir "Oksitleyici (Elektron çekici/Yükseltgeyici)" haline gelir ve elektron açlığını gidermek için Suyu ZORLA PARÇALAYARAK (Fotoliz) elektronlarını çalar' },
          { id: 'C', text: 'Çünkü FS II karanlıkta çalışır' },
          { id: 'D', text: 'Su FS II\'yi eritir' },
          { id: 'E', text: 'Enzimler suyu keser' }
        ],
        correctOptionId: 'B',
        explanation: 'Elektronunu kaptıran (P680⁺) molekülü, doğadaki en güçlü elektron hırsızlarından biridir, suyu bile parçalayabilir.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Kemiozmotik Hipotezde, Protonların (H⁺) Tilakoit lümen (iç boşluk) içinde BİRİKMESİ ve dışarıya oranla ASİDİK (pH düşük) bir ortam yaratması GEREKLİDİR. H⁺ iyonlarını lümene taşıyan ASIL GÜÇ nedir?',
        options: [
          { id: 'A', text: 'Difüzyon (Kendiliğinden akar)' },
          { id: 'B', text: 'Suyun kaldırma kuvveti' },
          { id: 'C', text: 'ETS elemanlarının üzerinden akan ELEKTRONLARIN enerjisi kullanılarak Aktif Taşıma benzeri bir pompalama yapılması' },
          { id: 'D', text: 'Karbondioksitin itmesi' },
          { id: 'E', text: 'Klorofilin çekmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Elektronlar şelaleden akan su gibi enerji kaybederek düşer. ETS enzim complexleri bu düşen enerjiyi yakalayıp H⁺\'leri zorla içeri (lümene) pompalar.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Döngüsel Olmayan (Doğrusal) Elektron Akışında (Z-Şeması) elektronların YOLCULUĞU sırasıyla nereden nereye doğrudur?',
        options: [
          { id: 'A', text: 'H₂O → FS II → ETS → FS I → ETS → NADP⁺' },
          { id: 'B', text: 'FS I → FS II → Su' },
          { id: 'C', text: 'NADP⁺ → FS I → H₂O' },
          { id: 'D', text: 'CO₂ → Glikoz' },
          { id: 'E', text: 'Glikoz → Su' }
        ],
        correctOptionId: 'A',
        explanation: 'Standart akış Z şemasıdır. Sudan çıkan elektron FS II\'ye, oradan zincirle FS I\'e, oradan da NADP\'ye gidip kalıcı olarak bağlanır.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Eğer bir bitki hücresine, Kloroplastın Tilakoit zarlarını DELEN (Zarın H⁺ geçirgenliğini artıran ve H⁺ lerin birikmeden stromaya kaçmasına neden olan) bir ZEHİR (örn: DNP) verilirse ne olur?',
        options: [
          { id: 'A', text: 'Fotosentez hızlanır' },
          { id: 'B', text: 'Daha çok ATP üretilir' },
          { id: 'C', text: 'Tilakoit boşlukta H⁺ birikemeyeceği (Gradiyent bozulacağı) için ATP SENTAZ DÖNEMEZ ve ATP ÜRETİMİ (Fotofosforilasyon) DURUR' },
          { id: 'D', text: 'Su üretilir' },
          { id: 'E', text: 'Bitki çiçek açar' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemiozmotik sistemde "zarın sızdırmazlığı" şarttır. Zar delinirse protonlar barajdan (ATP sentazdan) geçmek yerine deliklerden sızar, türbin dönemez, ATP yapılamaz.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Calvin döngüsü enzimlerinden olan RuBisCO, hem Karboksilaz (CO₂ bağlayan) hem de Oksijenaz (O₂ bağlayan) özelliğe sahiptir. Sıcaklık ÇOK ARTTIĞINDA veya Stomalar kapandığında yaprak içinde CO₂ azalır, O₂ artar. Bu durumda RuBisCO ne yapar?',
        options: [
          { id: 'A', text: 'Glikoz üretmeye devam eder' },
          { id: 'B', text: 'RuBP molekülüne Oksijen bağlar (Fotorespirasyon) ve bu süreç bitki için ATP ve CO₂ KAYBINA (Verim düşüklüğüne) neden olur' },
          { id: 'C', text: 'Klorofili yıkar' },
          { id: 'D', text: 'Suyu parçalar' },
          { id: 'E', text: 'Protein sentezler' }
        ],
        correctOptionId: 'B',
        explanation: 'RuBisCO\'nun bu hatası (Oksijene bağlanması) bitkiye boş yere enerji kaybettirir. Buna fotorespirasyon (ışık solunumu) denir, bitki istemez.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'C4 Bitkileri (Mısır, Şeker Kamışı vb.) sıcak iklimlere nasıl adapte olmuşlardır?',
        options: [
          { id: 'A', text: 'Fotosentez yapmayarak' },
          { id: 'B', text: 'Fotorespirasyonu (Oksijen kaybını) ENGELEMEK İÇİN CO₂\'yi yaprağın dış hücrelerinde farklı bir enzimle yakalayıp içeri (Demet kını hücrelerine) pompalayarak RuBisCO\'yu hep CO₂ doygunluğunda tutarlar' },
          { id: 'C', text: 'Gece su içerek' },
          { id: 'D', text: 'Kloroplastlarını atarak' },
          { id: 'E', text: 'Sadece oksijen üreterek' }
        ],
        correctOptionId: 'B',
        explanation: 'C4 ve CAM bitkileri sıcakta su kaybetmemek için stomaları kısar. İçerideki düşük CO₂\'yi çok verimli yakalayan (PEP Karboksilaz) özel sistemleri vardır.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'CAM Bitkileri (Kaktüs, Çöl bitkileri) su kaybını en aza indirmek için HANGİ STRATEJİYİ uygular?',
        options: [
          { id: 'A', text: 'Gündüzleri yapraklarını dökerler' },
          { id: 'B', text: 'Stomalarını GÜNDÜZ KAPALI tutarlar. GECE STOMALARI AÇIP CO₂\'yi alıp organik asit (Malik asit vb.) olarak depolarlar. Gündüz ışık çıkınca (stoma kapalıyken) asidi bozup içeride fotosentez yaparlar' },
          { id: 'C', text: 'Geceleri kemosentez yaparlar' },
          { id: 'D', text: 'Suyu köklerinden değil havadan alırlar' },
          { id: 'E', text: 'Fotosentez yapmazlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Çölde gündüz stoma açarsan kurur ölürsün. O yüzden gece serinken gaz alışverişi (fiksasyon) yapıp depolarlar, gündüz de ışıkla sentezi bitirirler.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Fotosentez yapan bir alg (Öglena vb.) karanlıkta oksijensiz ortamda (örneğin derin bir kaba) bırakılırsa ne olur?',
        options: [
          { id: 'A', text: 'Kemosenteze başlar' },
          { id: 'B', text: 'Fotosentez yapamaz, Oksijenli solunum da yapamaz. Fermantasyon yeteneği yeterli gelmezse enerji üretemediği için ÖLÜR.' },
          { id: 'C', text: 'Mitoz geçirip kurtulur' },
          { id: 'D', text: 'Sporla ürer' },
          { id: 'E', text: 'Kendi kendine ışık üretir' }
        ],
        correctOptionId: 'B',
        explanation: 'Öglena ışık varsa fotoototrof (fotosentetik), yoksa heterotroftur. Karanlıkta solunuma geçer ama oksijen de yoksa (ve fermantasyonla idare edemezse) hayatta kalamaz.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Kemosentetik bir bakterinin (Örn: Nitrit bakterisi) hücresinde AŞAĞIDAKİLERDEN HANGİSİ KESİNLİKLE BULUNMAZ?',
        options: [
          { id: 'A', text: 'Hücre zarı' },
          { id: 'B', text: 'Ribozom' },
          { id: 'C', text: 'DNA ve RNA' },
          { id: 'D', text: 'Klorofil (veya Kloroplast)' },
          { id: 'E', text: 'Sitoplazma' }
        ],
        correctOptionId: 'D',
        explanation: 'Kemosentezde ışık kullanılmadığı için ışığı tutan klorofil molekülü de bulunmaz. (Bakteri olduğu için zaten kloroplastı olamaz).'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Kemosentezde kullanılan enerji (inorganik molekülün oksitlenmesi) HANGİ AMAÇLA ATP\'ye çevrilir?',
        options: [
          { id: 'A', text: 'Bakterinin yüzmesi için' },
          { id: 'B', text: 'Sadece bölünme için' },
          { id: 'C', text: 'CO₂ gazını indirgeyerek (Fiksasyon) KARBONHİDRAT (Organik Besin) ÜRETMEK için' },
          { id: 'D', text: 'Hücreyi ısıtmak için' },
          { id: 'E', text: 'Atık atmak için' }
        ],
        correctOptionId: 'C',
        explanation: 'Elde edilen ATP ve H⁺ (elektronlar) Calvin döngüsü benzeri (bazılarında Krebs ters çevrilir vb) bir döngüde Karbonu glikoza bağlamak için harcanır.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Kemosentetik Sülfür Bakterileri (Enerji için H₂S kullananlar) ile Fotosentetik Mor Sülfür Bakterileri (Elektron/Hidrojen için H₂S kullananlar) aynı mıdır?',
        options: [
          { id: 'A', text: 'Evet, aynıdır' },
          { id: 'B', text: 'Hayır. Kemosentetik olanlar H₂S\'yi "Enerji (ATP)" elde etmek için YAKAR (Oksitler). Fotosentetik olanlar ise ışıkla elde ettiği ATP\'nin yanına besin üretmek için H₂S\'den sadece "Hidrojen (Elektron)" ÇEKER.' },
          { id: 'C', text: 'Kemosentetik olan mantardır' },
          { id: 'D', text: 'Fotosentetik olan bitkidir' },
          { id: 'E', text: 'İkisi de parazittir' }
        ],
        correctOptionId: 'B',
        explanation: 'Madde aynı olsa da (H₂S), Kemosentetik canlı onu YAKIT (Benzin) olarak kullanır; Fotosentetik canlı onu YAPI TAŞI (Hidrojen kaynağı) olarak kullanır (çünkü benzini ışıktan alır).'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Bir su molekülündeki "Ağır Oksijen (O¹⁸)" atomu kullanılarak (İşaretli H₂O¹⁸) bitkiye veriliyor. Bitki fotosentez yaptıktan sonra bu Ağır Oksijen (O¹⁸) nerede aranmalıdır?',
        options: [
          { id: 'A', text: 'Sentezlenen Glikozun içinde' },
          { id: 'B', text: 'Bitkinin yapraklarındaki proteinlerde' },
          { id: 'C', text: 'Bitkinin ürettiği ve atmosfere saldığı OKSİJEN GAZININ (O₂¹⁸) yapısında' },
          { id: 'D', text: 'Topraktaki nitratta' },
          { id: 'E', text: 'Köklerdeki nişastada' }
        ],
        correctOptionId: 'C',
        explanation: 'O¹⁸ sudan geldiyse, fotolizle açığa çıkar ve doğrudan gaz olarak atmosfere uçar.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Bu kez bitkiye "Ağır Oksijen (O¹⁸)" taşıyan KARBONDİOKSİT (CO₂¹⁸) gazı veriliyor. Bu O¹⁸ atomları fotosentez sonunda HANGİ MOLEKÜLLERDE bulunur?',
        options: [
          { id: 'A', text: 'Sadece atmosfere giden O₂ gazında' },
          { id: 'B', text: 'YALNIZCA üretilen Glikozun (Organik besinin) içinde ve döngüden çıkan Suyun içinde' },
          { id: 'C', text: 'Klorofilin merkezinde' },
          { id: 'D', text: 'Işıkta' },
          { id: 'E', text: 'Sadece toprağa atılır' }
        ],
        correctOptionId: 'B',
        explanation: 'CO₂\'nin oksijenleri Calvin döngüsünde Glikoza dahil olur, bir kısmı da döngü tepkimelerinden (su açığa çıkar) suya geçer. Ancak KESİNLİKLE gaz olan O₂\'ye GİTMEZ.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Bitkilerde fotosentez yapan hücrelerde Glikoliz ve Oksijenli Solunum reaksiyonları (Mitokondri) gündüzleri DURUR MU?',
        options: [
          { id: 'A', text: 'Evet, gündüz durur gece çalışır' },
          { id: 'B', text: 'Hayır, canlılık devam ettiği için (kloroplast dışındaki sitoplazma ve organeller için enerji gerektiğinden) HÜCRESEL SOLUNUM 7/24 kesintisiz devam eder' },
          { id: 'C', text: 'Sadece köklerde durur' },
          { id: 'D', text: 'Gündüz fotosenteze dönüşür' },
          { id: 'E', text: 'Yazın tamamen durur' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentez yapılması solunumu durdurmaz. Gündüz bitki hem fotosentez hem solunum yapar (ama fotosentez hızı çok yüksek olduğu için dışarı net Oksijen verir).'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Azot bağlayıcı bakteriler (Örn: Rhizobium) baklagillerin kökünde yaşayarak havadaki serbest azotu toprağa bağlar. Bu bakterilerin KEMOSENTEZ (Nitrifikasyon) yapan bakterilerle (Nitrit/Nitrat bakterileri) aynı işi yaptığı SÖYLENEBİLİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, aynı canlılardır' },
          { id: 'B', text: 'Hayır. Azot bağlayıcılar havadaki N₂\'yi bitkiye verir (Mutualizm). Kemosentetikler ise toprakta birikmiş amonyağı/nitriti YAKARAK ATP üretir (Beslenir)' },
          { id: 'C', text: 'Evet, ikisi de oksijensiz yaşar' },
          { id: 'D', text: 'Hayır, kemosentetikler bitkileri yer' },
          { id: 'E', text: 'Sadece isimleri farklıdır' }
        ],
        correctOptionId: 'B',
        explanation: 'Rhizobium azotu bağlar ama bundan ATP elde edip kemosentez yapmaz (Besinini bitkiden alır-Heterotroftur). Nitrosomonas vb kemosentetikler ise kemoototroftur, amonyağı yakar.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Grafikler ve Senaryo Soruları',
    type: 'medium',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Bir saksı bitkisinde, günün belirli bir saatinde alınan CO₂ miktarı, ortama verilen CO₂ miktarına (solunuma) EŞİT olmuştur (Kompensasyon noktası). Bu durumda dış ortamdan O₂ alınır mı?',
        options: [
          { id: 'A', text: 'Evet, dışarıdan O₂ almalıdır' },
          { id: 'B', text: 'Hayır, fotosentezde üretilen O₂ miktarı TAM OLARAK hücrenin solunum (mitokondri) ihtiyacını karşıladığı için, bitki dış ortamla (atmosferle) net gaz alışverişi YAPMAZ' },
          { id: 'C', text: 'Bitki boğulur' },
          { id: 'D', text: 'CO₂ fazlasını atar' },
          { id: 'E', text: 'Sadece su atar' }
        ],
        correctOptionId: 'B',
        explanation: 'Denge (kompensasyon) noktasında dışarıdan giren/çıkan gaz yoktur (Net gaz akışı sıfırdır), üretim ve tüketim kendi içindedir.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Bir serada bitkilerin üzerine GÜNDÜZ VAKTİ Işık şiddeti (Lambalarla) artırılıyor. Ancak fotosentez hızında artış GÖRÜLMÜYOR. "Minimum kuralına" göre, bu durumun sebebi aşağıdakilerden hangisi OLABİLİR?',
        options: [
          { id: 'A', text: 'Işık çok zayıftır' },
          { id: 'B', text: 'Seradaki CO₂ miktarı, Su miktarı veya Sıcaklık yetersiz olduğu için (Bunlardan biri sınırlayıcı olmuştur)' },
          { id: 'C', text: 'Bitkinin yaprakları çok fazladır' },
          { id: 'D', text: 'Klorofili çok fazladır' },
          { id: 'E', text: 'Gübre çok gelmiştir' }
        ],
        correctOptionId: 'B',
        explanation: 'Hız artmıyorsa (plato), ışık dışındaki başka bir hammadde darboğaz (minimumda) yaratıyor demektir.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Engelmann deneyinde, yeşil ipliksi bir algin üzerine kırmızı, mavi ve yeşil ışıklar düşürüldüğünde oksijen seven bakteriler (aerob) en çok kırmızı ve mavi ışığın düştüğü yerlerde toplanır. Bakterilerin bu bölgelere GİTMESİNİN TEMEL SEBEBİ (Taksis) nedir?',
        options: [
          { id: 'A', text: 'Mavi ve Kırmızı ışığı sevmeleri' },
          { id: 'B', text: 'Bakterilerin klorofil taşıyıp kırmızıda fotosentez yapmaları' },
          { id: 'C', text: 'Algin bu bölgelerinde fotosentezin HIZLI olması nedeniyle bolca OKSİJEN ÜRETİLMESİ ve bakterilerin de yaşamak (solunum) için OKSİJENE GİTMESİ' },
          { id: 'D', text: 'Yeşil ışıkta bakterilerin ölmesi' },
          { id: 'E', text: 'Bu bölgelerin soğuk olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteriler (Aeroblar) ışığı değil, oksijeni ararlar. Oksijen çok çıkan yer kırmızı-mavi aydınlanan yerlerdir.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Fotosistem (FS) I ve FS II\'nin klorofilleri sırasıyla P700 ve P680 olarak isimlendirilir. Bu isimlendirme NEYİ İFADE EDER?',
        options: [
          { id: 'A', text: 'Moleküldeki Karbon sayılarını' },
          { id: 'B', text: 'Ağırlıklarını' },
          { id: 'C', text: 'Keşfedilme tarihlerini' },
          { id: 'D', text: 'Maksimum soğurma (absorpsiyon) yaptıkları ışığın DALGA BOYUNU (Nanometre cinsinden)' },
          { id: 'E', text: 'Ürettikleri ATP sayısını' }
        ],
        correctOptionId: 'D',
        explanation: 'P700 klorofili 700 nanometre, P680 klorofili 680 nanometre dalga boylu kırmızı ışıkta pik yapar.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Tilakoit lümende (iç boşlukta) H⁺ konsantrasyonu aşırı YÜKSELİRSE, lümenin pH değeri (Asitliği) NASIL değişir?',
        options: [
          { id: 'A', text: 'pH yükselir (Bazikleşir)' },
          { id: 'B', text: 'pH DÜŞER (Daha ASİDİK hale gelir)' },
          { id: 'C', text: 'pH nötr kalır' },
          { id: 'D', text: 'pH sıfır olur' },
          { id: 'E', text: 'Değişmez' }
        ],
        correctOptionId: 'B',
        explanation: 'Proton (H⁺) asitliği artırır. Çok H⁺ demek, pH\'ın düşük (asidik) olması demektir. Stroma ise daha baziktir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Eğer bir kloroplastın stromasına dışarıdan (yapay olarak) YÜKSEK MİKTARDA (Yüksek H⁺) ASİTLİK verilirse ve stromanın pH\'ı Tilakoit boşluktan DAHA ASİDİK (Daha düşük pH) hale gelirse (Normalin TERSİ), ATP sentezi olabilir mi?',
        options: [
          { id: 'A', text: 'Evet, çok hızlı olur' },
          { id: 'B', text: 'Hayır. ATP Sentazın dönmesi için H⁺ iyonlarının Lümenden Stromaya (İçeriden Dışarıya) akması gerekir. Yön tersine dönerse veya gradiyent bozulursa motor ÇALIŞMAZ (ATP üretilemez)' },
          { id: 'C', text: 'Sadece gece olur' },
          { id: 'D', text: 'ATP iki katına çıkar' },
          { id: 'E', text: 'Kloroplast patlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemiozmotik akışın yönü içeriden (lümenden) -> dışarıya (stromaya) doğrudur. H⁺ lerin bu yönde barajdan dökülmesi gerekir.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Bir saksı bitkisinin 10 gün boyunca YAPRAĞINDAKİ KURU AĞIRLIK değişimi grafiğinde, kuru ağırlığın Gündüzleri ARTTIĞI, Geceleri AZALDIĞI görülmektedir. Buna göre GÜNDÜZ yaşanan artışın temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Bitkinin çok su içmesi (Su kuru ağırlığı etkilemez)' },
          { id: 'B', text: 'Fotosentez hızı > Solunum hızı olduğu için üretilen ve BİRİKEN Organik Besinin (Karbon hidratların vb.) yaprakta KÜTLE (Kuru ağırlık) oluşturması' },
          { id: 'C', text: 'Oksijenin ağır olması' },
          { id: 'D', text: 'Güneş ışığının ağırlık yapması' },
          { id: 'E', text: 'Topraktaki taşların emilmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Suyu uçurulmuş ağırlığa (Kuru ağırlık = Biyokütle = Organik madde) denir. Fotosentez organik molekül ürettiği için ağırlığı artırır.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Fotosentez sırasında HANGİ olay EN SON (Diğerlerinden SONRA) gerçekleşir?',
        options: [
          { id: 'A', text: 'Klorofilin ışık soğurması (Uyarılması)' },
          { id: 'B', text: 'Suyun fotolizi' },
          { id: 'C', text: 'ATP Sentezi (Fotofosforilasyon)' },
          { id: 'D', text: 'NADP+\'nin indirgenmesi' },
          { id: 'E', text: 'PGAL (Fosfogliseraldehit) oluşumu (Calvin döngüsü)' }
        ],
        correctOptionId: 'E',
        explanation: 'PGAL (Besin iskeleti) oluşumu Işıktan Bağımsız reaksiyonların (İkinci evrenin) sonunda olur. Diğerleri birinci (ışıklı) evrededir.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Karbon fiksasyonunda (Calvin döngüsü) görevli "RuBisCO" enziminin etkinliği GÜNDÜZ çok yüksektir (ışık altında aktive olur). Gece ise pasifleşir. Bunun BİYOLOJİK AVANTAJI nedir?',
        options: [
          { id: 'A', text: 'Enzimin gece uyuması' },
          { id: 'B', text: 'Karanlıkta Işık evresinden ATP ve NADPH gelmeyeceği için, RuBisCO\'nun boş yere çalışıp eldeki RuBP moleküllerini israf etmesini (Karbon kısır döngüsünü) ÖNLEMEK' },
          { id: 'C', text: 'Gece Oksijen üretmek' },
          { id: 'D', text: 'Glikozu parçalamak' },
          { id: 'E', text: 'Su tutmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre çok ekonomiktir. Benzin (ATP) yokken motoru (Calvin enzimi) çalıştırmak enerjiyi ve ara ürünleri boşa harcamaktır. Bu yüzden enzim sadece ışık varken (ATP gelirken) aktifleşir.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Bir su bitkisi cam boruda fotosentez yaparken, çıkan oksijen miktarını (kabarcık sayısını) ÖLÇEBİLMEK (veya artırmak) İÇİN hangisi YANLIŞ BİR UYGULAMADIR?',
        options: [
          { id: 'A', text: 'Işık şiddetini artırmak' },
          { id: 'B', text: 'Suya NaHCO₃ (Karbonat) eklemek' },
          { id: 'C', text: 'Işık rengini Yeşil yapmak' },
          { id: 'D', text: 'Sıcaklığı 25-30 derece civarına çekmek' },
          { id: 'E', text: 'Suya gazoz (CO₂) eklemek' }
        ],
        correctOptionId: 'C',
        explanation: 'Yeşil ışık yansıtıldığı için fotosentezi yavaşlatır (veya en aza indirir), dolayısıyla kabarcık (oksijen) sayısı çok azalır.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Ağacın en üst dallarındaki (güneşi doğrudan gören) yapraklar ile ağacın alt kısımlarındaki (gölgede kalan) yapraklar karşılaştırıldığında, güneş gören yapraklarda HANGİSİ DAHA FAZLADIR?',
        options: [
          { id: 'A', text: 'Genişlik (Ayası çok geniştir)' },
          { id: 'B', text: 'Kloroplast (Klorofil) yoğunluğu ve yaprak kalınlığı' },
          { id: 'C', text: 'Terleme eksikliği' },
          { id: 'D', text: 'Boşluk (Sünger) dokusu' },
          { id: 'E', text: 'Oksijensiz solunum' }
        ],
        correctOptionId: 'B',
        explanation: 'Güneş (ışık) gören yapraklar dar ama kalın olur, kloroplast/palizat parankiması çok yoğundur (güneş panellerini artırır). Gölge yaprakları ise ışığı yakalayabilmek için geniş ve incedir.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Stomaların KAPANMASI durumunda (Örn: Çok sıcak öğle vakti), bitkide AŞAĞIDAKİLERDEN HANGİSİ GERÇEKLEŞMEZ?',
        options: [
          { id: 'A', text: 'Terleme (su kaybı) azalır' },
          { id: 'B', text: 'Atmosferden CO₂ alımı durur' },
          { id: 'C', text: 'Yaprak içindeki O₂ dışarı atılamaz (içeride birikir)' },
          { id: 'D', text: 'Fotosentez hızı artarak devam eder' },
          { id: 'E', text: 'Fotorespirasyon riski artar' }
        ],
        correctOptionId: 'D',
        explanation: 'Stoma kapandığında içeride CO₂ biter. CO₂ bittiği an Calvin döngüsü, dolayısıyla fotosentez durma noktasına (veya çok düşük hıza) geriler.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Fotosentez yapan bir bakteri (Örn: Siyanobakteri) ile Fotosentez yapan bir yaprak (Bitki) hücresi ARASINDA HANGİ YAPI KESİNLİKLE ORTAKTIR?',
        options: [
          { id: 'A', text: 'Kloroplast organeli' },
          { id: 'B', text: 'Çekirdek' },
          { id: 'C', text: 'Ribozom organeli ve Klorofil molekülü' },
          { id: 'D', text: 'Mitokondri' },
          { id: 'E', text: 'Lizozom' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteride zarlı organel (kloroplast, mitokondri vb) olmaz. Ancak fotosentez yapıyorsa Klorofil MADDESİ ve her canlıda olan Ribozom ORTAKTIR.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Bitkilerin Işıktan bağımsız (Calvin) reaksiyonlarında HANGİ MOLEKÜL ENZİM OLARAK DEĞİL, BİR "HAMMADDE / ALICI" OLARAK görev yapar?',
        options: [
          { id: 'A', text: 'RuBisCO' },
          { id: 'B', text: 'RuBP (Ribüloz Bisfosfat)' },
          { id: 'C', text: 'ATP Sentaz' },
          { id: 'D', text: 'Helikaz' },
          { id: 'E', text: 'Pepsin' }
        ],
        correctOptionId: 'B',
        explanation: 'RuBP (5 karbonlu şeker) enzimin (RuBisCO\'nun) substratıdır (üzerine işlem yapılan moleküldür). CO₂ ona bağlanır.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Kemiozmotik Hipoteze göre, Tilakoit içindeki sıvı (Lümen) ile dışındaki sıvı (Stroma) arasındaki pH farkı (Proton derişimi farkı) DENGENİRSE (İki taraf eşitlenirse) NE OLUR?',
        options: [
          { id: 'A', text: 'ATP sentezi devam eder' },
          { id: 'B', text: 'ATP Sentaz enziminden proton AKIŞI OLMAYACAĞI için ATP ÜRETİMİ DURUR' },
          { id: 'C', text: 'Klorofil patlar' },
          { id: 'D', text: 'Su buharlaşır' },
          { id: 'E', text: 'Glikoz üretimi hızlanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Motoru (ATP sentaz) çeviren güç H⁺ gradiyentidir (baraj farkı). İki tarafın yüksekliği (pH) eşitlenirse akış olmaz, motor durur.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Fotosentez ve Kemosentez Genel Değerlendirme',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Işık reaksiyonlarında üretilen OKSİJENİN (O₂) oluşum mekanizması hangisinde DOĞRU verilmiştir?',
        options: [
          { id: 'A', text: 'Karbondioksitin (CO₂) stromada parçalanmasıyla oluşur' },
          { id: 'B', text: 'Suyun (H₂O) tilakoit boşlukta, ışık enerjisi ve enzimler (Fotoliz) yardımıyla parçalanması sonucu oksijen atomlarının birleşmesiyle oluşur' },
          { id: 'C', text: 'Klorofilin yanmasıyla oluşur' },
          { id: 'D', text: 'Glikozun parçalanmasıyla oluşur' },
          { id: 'E', text: 'NADP+\'nin indirgenmesiyle oluşur' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksijen, kloroplastın tilakoit lümeninde gerçekleşen H₂O\'nun fotolizi (suyun parçalanması) ile yan ürün olarak ortaya çıkar.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Döngüsel (Cyclic) ve Döngüsel Olmayan (Non-cyclic/Doğrusal) Elektron Akışının temel farkı nedir?',
        options: [
          { id: 'A', text: 'Döngüselde sadece FS I görev yapar, su harcanmaz, NADPH oluşmaz, SADECE ATP ÜRETİLİR. Döngüsel olmayanda ise FS I ve FS II görev yapar; su harcanır, O₂, ATP ve NADPH üretilir.' },
          { id: 'B', text: 'Döngüsel akış karanlıkta olur, diğeri aydınlıkta olur.' },
          { id: 'C', text: 'Döngüselde sadece Oksijen üretilir, diğerinde ATP üretilir.' },
          { id: 'D', text: 'Döngüselde klorofil yoktur, diğerinde vardır.' },
          { id: 'E', text: 'İkisi de tamamen aynıdır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Calvin döngüsü ATP\'yi çok, NADPH\'yi az harcar. Bitki eksik kalan ATP\'yi tamamlamak için zaman zaman (su kullanmadan) sadece FS I\'i kendi içinde döndürerek (Döngüsel) ekstra ATP üretir.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Kloroplastın stromasında PGAL (G3P) oluştuktan sonra, SİTOPLAZMAYA geçen PGAL\'ler kullanılarak bitkinin HANGİ TEMEL TAŞIMA VE DEPO KARBONHİDRATI sentezlenir?',
        options: [
          { id: 'A', text: 'Glikojen' },
          { id: 'B', text: 'Sakaroz (Taşıma için) ve Nişasta (Depo için)' },
          { id: 'C', text: 'Laktoz' },
          { id: 'D', text: 'Sadece Maltoz' },
          { id: 'E', text: 'Kitin' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler şekerleri suda çözünen Sakaroz olarak taşır (Floemde), fazlasını suda çözünmeyen Nişasta olarak (Lökoplastta/Kloroplastta) depolar.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Kemosentetik Nitrat bakterileri amonyağı oksitlerken yan ürün olarak ATP elde eder. Elde ettiği ATP\'yi HANGİ AMAÇLA harcamaz?',
        options: [
          { id: 'A', text: 'Karbondioksidi indirgemek (Glikoz üretmek) için kullanır' },
          { id: 'B', text: 'Besin iskeleti yapmak için kullanır' },
          { id: 'C', text: 'Hücre içi endositoz yapmak için kullanır' },
          { id: 'D', text: 'Sentez reaksiyonları (Anabolizma) için kullanır' },
          { id: 'E', text: 'Çoğalmak için kullanır' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteriler prokoryot oldukları için endositoz veya ekzositoz YAPAMAZLAR. Diğer tüm yaşamsal faaliyetlerde (en çok da glikoz üretiminde) ATP kullanırlar.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Seralara "İslik Isıtıcılar" veya "Çürüyen Saman/Gübre" konulmasının bitki gelişimine SAĞLADIĞI FAYDA (Sıcaklık dışında) temelde nedir?',
        options: [
          { id: 'A', text: 'Oksijen miktarını artırmak' },
          { id: 'B', text: 'Yanma veya çürüme sonucu ortama verilen CO₂\'nin (Karbondioksitin) SERADAKİ CO₂ YOĞUNLUĞUNU ARTIRARAK fotosentezi hızlandırması' },
          { id: 'C', text: 'Klorofili koyulaştırmak' },
          { id: 'D', text: 'Toprağı kurutmak' },
          { id: 'E', text: 'Güneş ışığı üretmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Mantarlar/Bakteriler çürütürken solunumla havaya CO₂ verir. Soba yandığında havaya CO₂ çıkar. Bu gazlar bitki için hammaddedir.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Bitkide "Oksijen" nerede ÜRETİLİR ve nerede TÜKETİLİR?',
        options: [
          { id: 'A', text: 'Stromada üretilir, Sitoplazmada tüketilir' },
          { id: 'B', text: 'Tilakoit boşlukta (Fotolizle) ÜRETİLİR, Mitokondri matriksinde/ETS\'sinde (Solunumda) TÜKETİLİR' },
          { id: 'C', text: 'Çekirdekte üretilir, Zarda tüketilir' },
          { id: 'D', text: 'Sitoplazmada üretilir, Kloroplastta tüketilir' },
          { id: 'E', text: 'Köklerde üretilir, Yaprakta tüketilir' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksijen, kloroplastın tilakoit zar sisteminde su parçalanınca çıkar. Solunumda ise Mitokondride hidrojenlerle birleşip su oluştururken tüketilir.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Işık ve Suyun (H₂O) yeterli olduğu bir ortamda, ortamdaki Karbondioksiti (CO₂) tamamen UZAKLAŞTIRILAN bir bitkide HANGİ OLAY hemen (İlk olarak) DURUR?',
        options: [
          { id: 'A', text: 'Klorofilin uyarılması' },
          { id: 'B', text: 'Suyun fotolizi' },
          { id: 'C', text: 'Calvin Döngüsü (Karbondioksit fiksasyonu)' },
          { id: 'D', text: 'ATP sentazın dönmesi' },
          { id: 'E', text: 'Işığın soğurulması' }
        ],
        correctOptionId: 'C',
        explanation: 'CO₂ doğrudan Calvin döngüsünde (Işıktan bağımsız evrede) kullanıldığı için, yokluğunda ilk duracak olan (hammadde eksikliğinden) Calvin döngüsüdür. (Diğerleri dolaylı yoldan sonra durur).'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Bir su bitkisine (Elodea) ağır oksijen taşıyan CO₂¹⁸ verilmiştir. Bir süre sonra bu bitkiyle beslenen (Onu yiyen) Oksijenli solunum yapan bir Hayvanın HÜCRELERİNDE bu Ağır Oksijene (O¹⁸) NEREDE rastlanır?',
        options: [
          { id: 'A', text: 'Hayvanın idrarındaki suda' },
          { id: 'B', text: 'Hayvanın solunum sonucu dışarı verdiği KARBONDİOKSİT (CO₂¹⁸) gazında' },
          { id: 'C', text: 'Hayvanın kemiğinde' },
          { id: 'D', text: 'Hayvanın saçında' },
          { id: 'E', text: 'Hayvanın terinde' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitki CO₂\'nin oksijenini glikoza katar. Hayvan glikozu yer ve mitokondrisinde parçalar (solunum). Glikoz parçalanırken içindeki Karbon ve Oksijen, solunum yan ürünü olan CO₂ olarak havaya verilir.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Fotosentez (Kloroplast) ile Oksijenli Solunum (Mitokondri) arasındaki MADDE DÖNGÜSÜ için aşağıdakilerden hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'İkisi de dışarıdan Glikoz alır' },
          { id: 'B', text: 'Kloroplastın ÜRETTİĞİ O₂ ve Glikozu, Mitokondri KULLANIR; Mitokondrinin ÜRETTİĞİ CO₂ ve Suyu, Kloroplast KULLANIR (Mükemmel Geri Dönüşüm)' },
          { id: 'C', text: 'İkisi de dışarıya O₂ atar' },
          { id: 'D', text: 'Kloroplast ATP\'sini Mitokondriye verir' },
          { id: 'E', text: 'İkisi de aynı enzimleri kullanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitki hücresinde organeller arası döngü vardır. Biri yapar diğeri yıkar.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Nitrit (NO₂⁻) ve Nitrat (NO₃⁻) Bakterilerinin Kemosentez tepkimelerinde HANGİ MADDEYİ OKSİTLEDİĞİ (Yaktığı) sırasıyla HANGİ ŞIKTA doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Nitrit bakterisi Su yakar, Nitrat bakterisi Şeker yakar' },
          { id: 'B', text: 'Nitrit bakterisi Amonyağı (NH₃) yakarak Nitrit (NO₂⁻) yapar. Nitrat bakterisi ise Nitriti (NO₂⁻) yakarak Nitrat (NO₃⁻) yapar.' },
          { id: 'C', text: 'İkisi de glikoz yakar' },
          { id: 'D', text: 'İkisi de sadece karbon yakar' },
          { id: 'E', text: 'Oksijen yakarlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Azot döngüsündeki ardışık işbirliği böyledir. Biri NH₃\'ü Nitrite çevirir (ve enerjisini alır), diğeri Nitriti Nitrata çevirir (ve enerjisini alır).'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek seviye yorum, entegrasyon ve bilimsel analiz',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'DCPIP adı verilen mavi renkli bir ayraç (boya), Kloroplast süspansiyonuna eklendiğinde, kloroplast IŞIK ALDIĞI SÜRECE boyanın rengi AÇILIP ŞEFFAFLAŞMAKTADIR. Karanlıkta ise renk mavi kalmaktadır. Bu deney IŞIK EVRESİNDE NEYİN VARLIĞINI kanıtlar (Hill Reaksiyonu)?',
        options: [
          { id: 'A', text: 'Kloroplastın ışıkta ısındığını' },
          { id: 'B', text: 'Işık vurunca kloroplastın su ürettiğini' },
          { id: 'C', text: 'Işık reaksiyonlarında Sudan kopan "Elektron (e⁻) ve Protonların (H⁺)" DCPIP tarafından yakalandığını (DCPIP\'nin indirgenerek renksizleştiğini, yani ortamda sürekli bir ELEKTRON AKIŞI olduğunu)' },
          { id: 'D', text: 'Boyanın ışıkta yandığını' },
          { id: 'E', text: 'Glikozun mavi olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'Hill deneyinde, ortama yapay bir elektron alıcı (DCPIP) konur. DCPIP elektron (ve hidrojen) aldığında rengini kaybeder. Bu durum, suyun parçalanıp elektron fırlattığını (fotoliz) kesin olarak ispatlar.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Calvin döngüsüne 3 molekül CO₂ girdiğinde 1 molekül PGAL (Net Kazanç) ortaya çıkar. Peki döngüde kullanılan RuBP (Ribüloz Bisfosfat) enzimler aracılığıyla "TÜKETİLİP BİTER Mİ", yoksa akıbeti ne olur?',
        options: [
          { id: 'A', text: 'Tüketilip yok olur, yerine yenisi dışarıdan alınır' },
          { id: 'B', text: 'Karbonhidrat yapısına katılır' },
          { id: 'C', text: 'RuBP sadece aracılık eder, tepkimenin sonunda kalan PGAL\'ler KULLANILARAK (ATP harcanıp) RuBP molekülleri YENİDEN ÜRETİLİR (Döngü kapatılır)' },
          { id: 'D', text: 'Suya dönüşür' },
          { id: 'E', text: 'Amino aside dönüşür' }
        ],
        correctOptionId: 'C',
        explanation: 'Döngünün adı üstünde (cycle), başladığı maddeye geri dönmek zorundadır. Aksi halde sistem bir defa çalışır ve dururdu.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Bir su bitkisi ile yapılan deneyde; 1. aşamada bitki 25°C sıcaklıkta düşük ışıkta tutuluyor ve hız "A" olarak ölçülüyor. 2. aşamada sıcaklık 35°C yapılıyor ama hız YİNE "A" olarak kalıyor. Bu durumun ÇELİŞKİSİZ (Minimum Kuralına uygun) açıklaması nedir?',
        options: [
          { id: 'A', text: 'Sıcaklığın bitkiye etki etmemesi' },
          { id: 'B', text: 'Işık şiddeti "SINIRLAYICI FAKTÖR" konumundadır. Işık yetersizken sıcaklığı (veya CO₂ yi) ne kadar artırırsan artır, hız artmaz.' },
          { id: 'C', text: 'Bitkinin o an ölmüş olması' },
          { id: 'D', text: 'Klorofilin buharlaşması' },
          { id: 'E', text: 'Enzimlerin anında denatüre olması (35 derecede enzim bozulmaz)' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık zayıfsa, fotofosforilasyonla (ATP/NADPH) yeterli ürün gelmez. Calvin döngüsü sıcaklıktan dolayı hızlı çalışmak istese bile elinde hammadde olmadığı için hızı artıramaz.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Bazı "Ot İlaçları (Herbisitler)", Tilakoit zardaki Elektron Taşıma Sistemi\'nde (ETS) bulunan taşıyıcı proteinlerin BİRBİRİNE ELEKTRON VERMESİNİ ELLER (Bloke eder). Bu ilacın uygulandığı bitkide sırasıyla HANGİ OLAYLAR zincirleme durur?',
        options: [
          { id: 'A', text: 'Önce oksijen artar, sonra glikoz artar' },
          { id: 'B', text: 'Önce NADP⁺ indirgenemez, sonra Calvin döngüsü durur, sonra bitki açlıktan ölür' },
          { id: 'C', text: 'Sadece gece fotosentezi durur' },
          { id: 'D', text: 'Solunum hızlanır' },
          { id: 'E', text: 'Kökler erir' }
        ],
        correctOptionId: 'B',
        explanation: 'Elektron akışı kesilirse, ATP yapılamaz (gradiyent bozulur) ve NADPH üretilemez. Enerjisiz kalan Calvin döngüsü durur, besin üretemeyen bitki ölür.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Bilim insanı, Kloroplastları karanlık bir ortamda hazırladığı "Düşük pH\'lı (Asidik) ve Bol ADP+P" bulunan bir sıvıya batırmıştır. Kloroplastın Tilakoit boşluğuna ASİT dolar. Daha sonra bu kloroplastı aniden Yüksek pH\'lı (Bazik/Nötr) bir sıvıya taşımıştır. IŞIK VERİLMEDİĞİ HALDE bu kloroplastta ATP SENTEZLENDİĞİ görülmüştür. Bu "Jagendorf Deneyi" NEYİ İSPATLAR?',
        options: [
          { id: 'A', text: 'ATP sentazın ışıkla çalıştığını' },
          { id: 'B', text: 'Kloroplastın karanlığı sevdiğini' },
          { id: 'C', text: 'ATP Sentezinin doğrudan IŞIĞA DEĞİL, zarlar arası "Proton (H⁺) Konsantrasyon Farkına (pH farkına)" bağlı olduğunu (Kemiozmotik Hipotezi)' },
          { id: 'D', text: 'Enzimlerin asitte bozulduğunu' },
          { id: 'E', text: 'Mitokondrinin kloroplasta dönüştüğünü' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer bir şekilde (yapay yolla bile) içerisi asidik, dışarısı bazik yapılırsa H⁺ ler dışarı akmak ister, akarken de türbini döndürüp ATP üretir. Bu deney Mitchell\'in Kemiozmotik teorisinin kesin kanıtıdır.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Derin okyanus çukurlarında ışık sıfırdır, sıcaklık 100°C\'nin üzerinde olabilir, zehirli H₂S gazı fışkırır. Burada yaşayan kemosentetik Arkeler hangi ADAPTASYONA (Özelliğe) SADECE kendileri sahiptir (Bitkilerden farklı olarak)?',
        options: [
          { id: 'A', text: 'Klorofilleri çok siyah renklidir' },
          { id: 'B', text: 'Organik besin (Glikoz) üretirken GÜNEŞ IŞIĞINA DEĞİL, volkanik kimyasallara muhtaçtırlar ve enzimleri EXTREM SICAKLARA dayanıklıdır (Ekstremofil)' },
          { id: 'C', text: 'Kökleri çok uzundur' },
          { id: 'D', text: 'Solunum yapmazlar' },
          { id: 'E', text: 'CO₂ kullanmazlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemosentetik arkeler ekstremofildir (Aşırı şartları seven). Enzimleri yüksek ısıda bozulmaz ve enerjilerini jeotermal kimyasallardan (H₂S, Metan vb) alırlar.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Fotoototrof Siyanobakteri ile Kemosentetik Nitrat Bakterisi aynı kapalı kaba konulup IŞIKSIZ (karanlık) bir ortama bırakılırsa hangisi HAYATTA KALIR?',
        options: [
          { id: 'A', text: 'Siyanobakteri' },
          { id: 'B', text: 'İkisi de ölür' },
          { id: 'C', text: 'Kemosentetik bakteri hayatta kalır ve çalışmaya devam eder (Enerjisini inorganik oksitlemeden aldığı için ışığa ihtiyacı yoktur), Siyanobakteri ise açlıktan ölür' },
          { id: 'D', text: 'İkisi de hayatta kalır' },
          { id: 'E', text: 'Siyanobakteri diğerini yer' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentetik canlı karanlıkta besin üretemez, kemosentetik canlı ise 7/24 besin üretebilir.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Fotosentezin Işık Evresi elemanları (FS I ve FS II) neden Tilakoit ZARIN İÇİNE sıkıca gömülü (Bütünleşik) olmak ZORUNDADIR? Neden stromada (sıvıda) serbestçe yüzerek bu işi yapamazlar?',
        options: [
          { id: 'A', text: 'Suda eridikleri için' },
          { id: 'B', text: 'Ağır oldukları için dibe çökerler' },
          { id: 'C', text: 'Elektron Taşıma Sistemi (ETS) enzimlerinin birbirine elektron aktarabilmesi için FİZİKSEL OLARAK yan yana dizilmiş olmaları ve "İki farklı ortam (Lümen ve Stroma) arasına BARAJ kurup Proton Pompalamaları" gerektiği için ZARA ihtiyaçları vardır' },
          { id: 'D', text: 'Sadece zarda oksijen olduğu için' },
          { id: 'E', text: 'Zar yeşil olduğu için' }
        ],
        correctOptionId: 'C',
        explanation: 'Su akışından elektrik üretecek bir hidroelektrik santrali, ancak iki su kütlesi arasına (baraj/zar) beton örülerek çalışır. Baraj yoksa (zar yoksa) H⁺ birikemez, türbin (ATP Sentaz) dönemez.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Bitkiler Kloroplastta ürettikleri ATP\'yi NİÇİN Mitokondriye veya sitoplazmadaki reaksiyonlara (örneğin protein sentezi) VERMEZLER?',
        options: [
          { id: 'A', text: 'ATP çok büyük olduğu için kloroplast zarından DIŞARI ÇIKAMAZ. Ayrıca kloroplastın ürettiği ATP ancak Calvin döngüsündeki CO₂ fiksasyonunu karşılamaya YETER.' },
          { id: 'B', text: 'Çünkü kloroplastın ATP\'si zehirlidir' },
          { id: 'C', text: 'Mitokondri kabul etmez' },
          { id: 'D', text: 'Sadece gece üretildiği için' },
          { id: 'E', text: 'Proteinler ışıkla sentezlendiği için' }
        ],
        correctOptionId: 'A',
        explanation: 'Kloroplast zarları ATP\'ye geçirgen değildir. Enerji kloroplastın içinde hapis kalır ve sadece organik besin (PGAL) sentezinde harcanır.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Bir su bitkisine OKSİJENİ İŞARETLENMİŞ KARBONDİOKSİT (CO₂¹⁸) ve HİDROJENİ İŞARETLENMİŞ SU (³H₂O) aynı anda verilmiştir. Fotosentez bitiminde Sentezlenen GLİKOZUN (C₆H₁₂O₆) moleküllerindeki oksijen ve hidrojen HANGİ KAYNAKTAN gelmiş olur?',
        options: [
          { id: 'A', text: 'Hidrojen Karbondioksitten, Oksijen Sudan' },
          { id: 'B', text: 'İkisi de sudan' },
          { id: 'C', text: 'Oksijen (O¹⁸) Karbondioksitten (CO₂), Hidrojen (³H) ise Sudan gelmiştir' },
          { id: 'D', text: 'İkisi de karbondioksitten' },
          { id: 'E', text: 'Havadan' }
        ],
        correctOptionId: 'C',
        explanation: 'Glikozun Karbonu ve Oksijeni => CO₂ den gelir. Hidrojeni => H₂O dan (veya H₂S den) gelir. Bu yüzden glikozda hem ağır Oksijen hem de işaretli Hidrojen bir arada bulunur.'
      }
    ]
  }
]
