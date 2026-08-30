const ETKILESIMLER = [
  ['sistem-katmanlari', 'sistemler', 'Dünya sistemleri ve geri etki', 'ortak', ['Atmosfer, hidrosfer, litosfer ve biyosfer', 'Doğal koşul–insan cevabı–geri etki', 'Teknoloji, ekonomi, kültür ve politika'], 'determinist'],
  ['bolge-olustur', 'sistemler', 'Kriter tabanlı bölge oluşturma', 'tymm', ['Şekilsel ve işlevsel bölge', 'Ölçüt, benzerlik ve süreklilik', 'Bölge sınırının değişkenliği'], 'determinist'],
  ['gunes-modeli', 'gezegen', 'Dünya–Güneş ve mevsim modeli', 'ortak', ['Eksen eğikliği ve yıllık hareket', 'Gece–gündüz süresi ve ışın açısı', 'Yarım kürelerde mevsim karşılaştırması'], 'yakinlik-mevsim'],
  ['koordinat-saati', 'konum', 'Koordinat ve yerel saat laboratuvarı', 'ortak', ['Enlem ve boylam', 'Yerel saat ve yön', 'Türkiye’nin matematik konumu'], 'boylam-iklim'],
  ['goreceli-konum', 'konum', 'Matematik ve göreceli konum kanıtı', 'ortak', ['Matematik–göreceli konum', 'Nokta, çizgi, alan ve yakınlık', 'Aynı enlemde yerel farklar'], 'ayni-enlem'],
  ['olcek-laboratuvari', 'harita-bilgisi', 'Ölçek ve genelleştirme laboratuvarı', 'ortak', ['Kesir ve çizgi ölçeği', 'Alan–ayrıntı–hata ilişkisi', 'Lejant, yön ve kaynak eleştirisi'], 'buyuk-olcek'],
  ['izohips-profili', 'harita-bilgisi', 'İzohips ve topografik profil', 'ortak', ['İzohips aralığı ve yükselti', 'Vadi, sırt, tepe ve eğim', 'A–B topografik profili', 'Projeksiyon bozulması'], 'izohips-yukseklik'],
  ['atmosfer-laboratuvari', 'iklim', 'Atmosfer, basınç ve nem laboratuvarı', 'ortak', ['Atmosfer katmanları', 'Sıcaklığı etkileyen faktörler', 'Basınç ve rüzgâr', 'Mutlak ve bağıl nem'], 'sicak-basinc'],
  ['iklim-grafigi', 'iklim', 'İklim grafiği ve yağış süreçleri', 'ortak', ['Konveksiyonel, orografik ve cephe yağışı', 'Sıcaklık–yağış grafiği', 'Hava durumu ve iklim'], 'bagil-nem'],
  ['levha-surecleri', 'yerkure', 'Levha sınırları ve kayaç döngüsü', 'ortak', ['Levha hareketleri, deprem ve volkanizma', 'Kayaç döngüsü', 'İç ve dış kuvvet ayrımı'], 'sekil-ad'],
  ['dis-kuvvetler', 'yerkure', 'Aşınım–taşınım–birikim', 'ortak', ['Akarsu, rüzgâr, buzul, dalga ve karst', 'Eğim, akım, kayaç ve iklim', 'Yer şekli–oluşum mekanizması'], 'sekil-ad'],
  ['havza-rejimi', 'yasam-kusaklari', 'Havza ve akarsu rejimi', 'ortak', ['Havza, su bölümü ve akarsu ağı', 'Akarsu rejimi ve akış yönü', 'Su kullanımı ve ekosistem geri etkisi'], 'akarsu-guney'],
  ['toprak-biyom', 'yasam-kusaklari', 'Toprak profili ve biyom kararı', 'ortak', ['Toprak horizonları ve oluşum etkenleri', 'İklim–toprak–bitki ilişkisi', 'Yağış rejimi, sıcaklık ve biyom'], 'akarsu-guney'],
  ['yogunluk-laboratuvari', 'nufus', 'Nüfus yoğunluğu ve dağılış', 'ortak', ['Aritmetik, fizyolojik ve tarımsal yoğunluk', 'Doğal ve beşerî dağılış etkenleri', 'Yoğunluk ve gelişmişlik ayrımı'], 'yogunluk-gelisme'],
  ['nufus-piramidi', 'nufus', 'Nüfus piramidi ve göç senaryosu', 'ortak', ['Yaş–cinsiyet yapısı ve piramit', 'Doğum, ölüm, göç ve bağımlılık', 'İtici–çekici etken ve iki mekândaki sonuç'], 'yogunluk-gelisme'],
  ['yer-secimi', 'yerlesme', 'Yerleşme kuruluş yeri kararı', 'ortak', ['Su, eğim, zemin, ulaşım ve işlev', 'Toplu, dağınık ve çizgisel doku', 'Sit ve situasyon'], 'kiyi-liman'],
  ['kent-agi', 'yerlesme', 'Kent işlevi ve etki alanı', 'ortak', ['Kent fonksiyonu ve ulaşım ağı', 'Hızlı kentleşme kararı', 'Fotoğraf ve haritadan sınırlı çıkarım'], 'kiyi-liman'],
  ['kurulus-yeri', 'ekonomi', 'Tarım ve sanayi kuruluş yeri', 'ortak', ['Ekonomik sektörler ve değer zinciri', 'Tarımda doğal ve beşerî etkenler', 'Sanayide hammadde, enerji, pazar ve ulaşım'], 'yenilenebilir-etkisiz'],
  ['ulasim-enerji', 'ekonomi', 'Ulaşım, liman, turizm ve enerji kararı', 'ortak', ['Ulaşım türü ve yük niteliği', 'Liman–hinterlant ve ticaret ağı', 'Turizm, enerji ve taşıma kapasitesi'], 'yenilenebilir-etkisiz'],
  ['risk-katmanlari', 'afet', 'Tehlike, maruziyet ve kırılganlık', 'tymm', ['Tehlike–maruziyet–kırılganlık–afet', 'Risk önceliği ve arazi kullanımı', 'Yerel–bölgesel geri etki'], 'tehlike-afet'],
  ['afet-dongusu', 'afet', 'Afet yönetimi ve sürdürülebilir karar', 'tymm', ['Zarar azaltma, hazırlık, müdahale ve iyileştirme', 'Sel, heyelan, deprem, yangın ve kuraklık', 'Su, enerji, atık ve ulaşım seçeneği'], 'tehlike-afet'],
]

export const ETKILESIM_REGISTRY = Object.fromEntries(ETKILESIMLER.map(([id, bolge, baslik, kapsam, altBasliklar, yanilgi]) => [id, {
  id,
  baslik,
  bolge,
  kapsam,
  altBasliklar,
  kazanim: `${baslik} alanında mekânsal kanıtı yorumlar ve neden–sonuç kurar.`,
  motorId: id,
  yanilgiIdleri: [yanilgi],
  transferGoreviId: `${id}-transfer`,
  geriBildirim: 'Seçimin sonucu, kullanılan kanıt ve atlanmaması gereken değişkenle birlikte açıklanır.',
  kaynakIdleri: ['drkoc-mufredat', 'meb-2026', 'sematik-model'],
}]))

export const KAPSAM = Object.values(ETKILESIM_REGISTRY).flatMap((etkilesim) => etkilesim.altBasliklar.map((baslik, index) => ({
  id: `${etkilesim.id}-${index + 1}`,
  baslik,
  konu: etkilesim.baslik,
  bolge: etkilesim.bolge,
  kapsam: etkilesim.kapsam,
  sinif: etkilesim.kapsam === 'tymm' ? '9–10' : 'TYT',
  tema: etkilesim.kapsam === 'tymm' ? '2026 TYMM' : 'TYT sınav çekirdeği',
  kazanim: etkilesim.kazanim,
  etkilesimId: etkilesim.id,
  motorId: etkilesim.motorId,
  yanilgiIdleri: etkilesim.yanilgiIdleri,
  transferGoreviId: etkilesim.transferGoreviId,
  onKosullar: [],
  kaynakIdleri: etkilesim.kaynakIdleri,
})))

export const bolgeEtkilesimleri = (bolge) => Object.values(ETKILESIM_REGISTRY).filter((etkilesim) => etkilesim.bolge === bolge)
export const bolgeKonulari = (bolge) => KAPSAM.filter((konu) => konu.bolge === bolge)
