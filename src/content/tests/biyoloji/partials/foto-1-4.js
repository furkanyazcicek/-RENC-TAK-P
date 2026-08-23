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
  }
]
