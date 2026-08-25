import { E, ETKILESIM_KAYDI } from './etkilesimler.js'

const alt = (id, baslik, etkilesimId, yanilgiIdleri = [], kapsam = 'tyt', onKosullar = []) => ({
  id, baslik, kapsam, sinif: kapsam === 'tymm' ? 10 : 9, tema: kapsam === 'tymm' ? 'Enerji' : 'TYT Biyoloji',
  kazanim: `${baslik} konusunda kanıta dayalı model kurar ve yeni bir duruma transfer eder.`,
  etkilesimId, yanilgiIdleri, transferGoreviId: `transfer-${id}`, onKosullar,
})

export const KAPSAM_MANIFESTI = [
  { id: 'bilim-canlilik', baslik: 'Biyoloji Bilimi ve Canlıların Ortak Özellikleri', bolge: 'yasam', kapsam: 'tyt', sinif: 9, tema: 'Yaşam', kazanim: 'Bilimsel süreç ve canlılık kanıtlarını kullanır.', onKosullar: [], altBasliklar: [
    alt('bilimsel-yontem', 'Bilimsel yöntem, değişkenler, kontrol grubu ve etik', E.DENEY_TASARIM, [], 'tyt'),
    alt('ortak-ozellikler', 'Canlıların ortak özellikleri ve virüs tartışması', E.KANIT_SINIFLA, ['virus-kesin']),
    alt('homeostazi', 'Homeostazi, metabolizma ve uyarılara tepki', E.DENGE_DONGUSU, []),
  ]},
  { id: 'bilesenler', baslik: 'Canlıların Temel Bileşenleri', bolge: 'molekul', kapsam: 'tyt', sinif: 9, tema: 'Organizasyon', kazanim: 'Molekül yapısı ve işlevini deneyle ilişkilendirir.', onKosullar: ['bilim-canlilik'], altBasliklar: [
    alt('molekul-eslestirme', 'İnorganik ve organik molekülleri yapı–işlevle eşleştirme', E.MOLEKUL_ESLE),
    alt('monomer-polimer', 'Monomer–polimer, dehidrasyon–hidroliz', E.MOLEKUL_KUR),
    alt('besin-ayirac', 'Besin ayıraçları sanal deneyi', E.AYIRAC_LAB),
    alt('enzim', 'Enzim modeli; sıcaklık, pH ve derişim grafikleri', E.ENZIM_LAB, ['enzim-tukenir', 'sicaklik-daima']),
  ]},
  { id: 'hucre', baslik: 'Hücre', bolge: 'hucre', kapsam: 'tyt', sinif: 9, tema: 'Organizasyon', kazanim: 'Hücre tiplerini ve organel iş birliğini modeller.', onKosullar: ['bilesenler'], altBasliklar: [
    alt('hucre-karsilastir', 'Prokaryot–ökaryot ve bitki–hayvan hücresi', E.HUCRE_MERCEK),
    alt('organel-akis', 'Organel atlası ve üretim/taşıma iş akışı', E.ORGANEL_ROTA),
    alt('yuzey-hacim', 'Hücre boyutu ve yüzey alanı/hacim oranı', E.YUZEY_HACIM, ['yuzey-hacim']),
  ]},
  { id: 'zar-gecis', baslik: 'Hücre Zarından Madde Geçişleri', bolge: 'hucre', kapsam: 'tyt', sinif: 9, tema: 'Organizasyon', kazanim: 'Zardan geçişi değişkenlere göre seçer.', onKosullar: ['hucre'], altBasliklar: [
    alt('zar-karar', 'Difüzyon, kolaylaştırılmış difüzyon, ozmoz ve aktif taşıma', E.ZAR_LAB, ['denge-hareket', 'ozmoz-cozunen', 'aktif-yon']),
    alt('zar-degisken', 'ATP, derişim farkı, molekül boyutu ve taşıyıcı', E.ZAR_DEGISKEN),
    alt('tonisite', 'Bitki/hayvan hücresinde hipotonik–izotonik–hipertonik ortam', E.TONISITE_LAB, ['ozmoz-cozunen']),
    alt('vezikul', 'Endositoz–ekzositoz süreç ve yük seçimi', E.VEZIKUL_SIRALA),
  ]},
  { id: 'siniflandirma', baslik: 'Canlıların Sınıflandırılması ve Biyoçeşitlilik', bolge: 'siniflandirma', kapsam: 'tyt', sinif: 9, tema: 'Yaşam', kazanim: 'Modern sınıflandırmayı kanıtla yorumlar.', onKosullar: ['bilim-canlilik'], altBasliklar: [
    alt('takson-mercek', 'Sınıflandırma basamaklarında benzerlik ve birey sayısı', E.TAKSON_MERCEK),
    alt('uc-domain', 'Üç domain ve ökaryot grupları canlılık ağacı', E.CANLILIK_AGACI),
    alt('anahtar', 'Bilinmeyen canlıyı dallanmış anahtarla sınıflandırma', E.DALLANMIS_ANAHTAR),
    alt('turkiye-biyo', 'Türkiye biyoçeşitliliği ve endemik tür verisi', E.BIYO_VERI),
  ]},
  { id: 'bolunmeler', baslik: 'Hücre Bölünmeleri', bolge: 'bolunme', kapsam: 'tyt', sinif: 10, tema: 'Organizasyon', kazanim: 'Mitoz ve mayozdaki nicel değişimleri modeller.', onKosullar: ['hucre'], altBasliklar: [
    alt('zaman-makinesi', 'Hücre döngüsü, mitoz ve mayoz zaman makinesi', E.BOLUNME_ZAMAN, ['mitoz-mutlak']),
    alt('kromozom-kur', 'Homolog, kardeş kromatit, crossing-over ve ayrılma', E.KROMOZOM_KUR, ['mayoz-amac']),
    alt('dna-grafik', 'DNA, kromozom/kromatit ve hücre sayısı grafikleri', E.DNA_GRAFIK, ['dna-kromozom']),
    alt('mitoz-mayoz', 'Mitoz–mayoz sonuç simülasyonu', E.BOLUNME_KARSILASTIR, ['mayoz-amac']),
  ]},
  { id: 'ureme', baslik: 'Üreme', bolge: 'bolunme', kapsam: 'tyt', sinif: 10, tema: 'Organizasyon', kazanim: 'Üreme biçimlerinin sonuçlarını karşılaştırır.', onKosullar: ['bolunmeler'], altBasliklar: [
    alt('ureme-sinifla', 'Eşeyli/eşeysiz üreme örneklerini mekanizmayla sınıflandırma', E.UREME_SINIFLA),
    alt('ureme-strateji', 'Çeşitlilik, hız, enerji maliyeti ve uyum karşılaştırması', E.UREME_STRATEJI),
    alt('yasam-dongu', 'Temel yaşam döngüsü sıralama', E.YASAM_DONGU),
  ]},
  { id: 'kalitim', baslik: 'Kalıtım', bolge: 'kalitim', kapsam: 'tyt', sinif: 10, tema: 'Organizasyon', kazanim: 'Kalıtım olasılıklarını ve soy kanıtını yorumlar.', onKosullar: ['bolunmeler'], altBasliklar: [
    alt('punnett', 'Gamet kurucu, Punnett karesi ve olasılık', E.PUNNETT_LAB),
    alt('kavram-agi', 'Genotip–fenotip, baskın–çekinik ve homozigot–heterozigot', E.KALITIM_KAVRAM, ['baskin-guclu', 'fenotip-kesin']),
    alt('kan-grubu', 'ABO ve Rh temel çaprazlamaları', E.KAN_GRUBU),
    alt('soyagaci', 'Otozomal ve X’e bağlı soy ağacı; kesin/olabilir/olamaz', E.SOYAGACI, ['cek-sicrama', 'fenotip-kesin']),
  ]},
  { id: 'ekoloji', baslik: 'Ekosistem Ekolojisi', bolge: 'ekosistem', kapsam: 'tyt', sinif: 10, tema: 'Ekoloji', kazanim: 'Ekosistemde doğrudan ve dolaylı etkileri modeller.', onKosullar: ['bilim-canlilik'], altBasliklar: [
    alt('organizasyon-nis', 'Organizasyon düzeyleri, habitat ve niş', E.ORGANIZASYON_ESLE),
    alt('iliskiler', 'Tür içi/türler arası etkileşim senaryoları', E.ILISKI_SENARYO),
    alt('besin-agi', 'Kurulabilir besin ağı ve dolaylı etkiler', E.BESIN_AGI, ['besin-oku']),
    alt('piramit-birikim', 'Enerji/biyokütle/birey piramitleri ve biyolojik birikim', E.TROFIK_LAB, ['trofik-enerji', 'birikim-yas', 'enerji-dongu']),
    alt('populasyon', 'Popülasyon, taşıma kapasitesi, çevre direnci ve süksesyon', E.POPULASYON_LAB),
    alt('madde-dongu', 'Su, karbon ve azot döngülerinde eksik bağlantılar', E.DONGU_TAMAMLA, ['enerji-dongu']),
  ]},
  { id: 'cevre', baslik: 'Güncel Çevre Sorunları ve Sürdürülebilirlik', bolge: 'ekosistem', kapsam: 'tyt', sinif: 10, tema: 'Ekoloji', kazanim: 'Çevresel kararları veriyle değerlendirir.', onKosullar: ['ekoloji'], altBasliklar: [
    alt('neden-sonuc', 'Habitat kaybı, kirlilik, iklim, ötrofikasyon ve biyoçeşitlilik ağı', E.CEVRE_AGI),
    alt('atik', 'Atık yönetimi karar alanı', E.ATIK_KARAR),
    alt('ayak-izi', 'Ekolojik ayak izi ve çözüm senaryoları', E.AYAK_IZI),
    alt('yerel-veri', 'Yerel çevre verisini grafik üzerinden yorumlama', E.YEREL_VERI),
  ]},
  { id: 'enerji', baslik: 'Enerji Dönüşümleri', bolge: 'enerji', kapsam: 'tymm', sinif: 10, tema: 'Enerji', kazanim: 'Enerji dönüşümlerini ortak bir madde–enerji modelinde birleştirir.', onKosullar: ['bilesenler', 'hucre'], altBasliklar: [
    alt('atp', 'ATP enerji aktarım modeli', E.ATP_MODEL, [], 'tymm'),
    alt('fotosentez', 'Fotosentez hızı ve sınırlayıcı faktör', E.FOTOSENTEZ_LAB, ['bitki-solunum'], 'tymm'),
    alt('kemosentez', 'Fotosentez–kemosentez karşılaştırması', E.KEMOFOTO_KARSILASTIR, [], 'tymm'),
    alt('glikoz-yolculuk', 'Sindirim–emilim–taşıma–solunum molekül yolculuğu', E.GLIKOZ_YOLCULUK, [], 'tymm'),
    alt('solunum-fermantasyon', 'Hücresel solunum ve fermantasyon koşul/ürün karşılaştırması', E.SOLUNUM_KARSILASTIR, ['bitki-solunum'], 'tymm'),
  ]},
]

export const ALT_BASLIKLAR = KAPSAM_MANIFESTI.flatMap((unite) => unite.altBasliklar.map((konu) => ({ ...konu, uniteId: unite.id, uniteBaslik: unite.baslik, bolge: unite.bolge })))
export const ETKILESIMLER = ETKILESIM_KAYDI

export const bolgeKonulari = (bolge) => ALT_BASLIKLAR.filter((konu) => konu.bolge === bolge)
