export const E = Object.freeze({
  DENEY_TASARIM: 'deney-tasarim', KANIT_SINIFLA: 'kanit-sinifla', DENGE_DONGUSU: 'denge-dongusu',
  MOLEKUL_ESLE: 'molekul-esle', MOLEKUL_KUR: 'molekul-kur', AYIRAC_LAB: 'ayirac-lab', ENZIM_LAB: 'enzim-lab',
  HUCRE_MERCEK: 'hucre-mercek', ORGANEL_ROTA: 'organel-rota', YUZEY_HACIM: 'yuzey-hacim',
  ZAR_LAB: 'zar-lab', ZAR_DEGISKEN: 'zar-degisken', TONISITE_LAB: 'tonisite-lab', VEZIKUL_SIRALA: 'vezikul-sirala',
  TAKSON_MERCEK: 'takson-mercek', CANLILIK_AGACI: 'canlilik-agaci', DALLANMIS_ANAHTAR: 'dallanmis-anahtar', BIYO_VERI: 'biyo-veri',
  BOLUNME_ZAMAN: 'bolunme-zaman', KROMOZOM_KUR: 'kromozom-kur', DNA_GRAFIK: 'dna-grafik', BOLUNME_KARSILASTIR: 'bolunme-karsilastir',
  UREME_SINIFLA: 'ureme-sinifla', UREME_STRATEJI: 'ureme-strateji', YASAM_DONGU: 'yasam-dongu',
  PUNNETT_LAB: 'punnett-lab', KALITIM_KAVRAM: 'kalitim-kavram', KAN_GRUBU: 'kan-grubu', SOYAGACI: 'soyagaci',
  ORGANIZASYON_ESLE: 'organizasyon-esle', ILISKI_SENARYO: 'iliski-senaryo', BESIN_AGI: 'besin-agi', TROFIK_LAB: 'trofik-lab', POPULASYON_LAB: 'populasyon-lab', DONGU_TAMAMLA: 'dongu-tamamla',
  CEVRE_AGI: 'cevre-agi', ATIK_KARAR: 'atik-karar', AYAK_IZI: 'ayak-izi', YEREL_VERI: 'yerel-veri',
  ATP_MODEL: 'atp-model', FOTOSENTEZ_LAB: 'fotosentez-lab', KEMOFOTO_KARSILASTIR: 'kemofoto-karsilastir', GLIKOZ_YOLCULUK: 'glikoz-yolculuk', SOLUNUM_KARSILASTIR: 'solunum-karsilastir',
})

const k = (id, bolge, componentKey, engineKey, interactionType, davranisTesti) => ({ id, bolge, componentKey, engineKey, interactionType, davranisTesti })

// Bu kayıt, manifestten türetilmez. UI, arama, ilerleme ve testler aynı kimlikleri buradan alır.
export const ETKILESIM_KAYITLARI = [
  k(E.DENEY_TASARIM,'yasam','BilimselArastirmaLaboratuvari','deney-tasarim','deney-tasarimi','kontrol grubu kurulunca veri ve güvenilirlik değişir'),
  k(E.KANIT_SINIFLA,'yasam','CanlilikKanitiDedektifi','kanit-sinifla','kanit-siniflama','virüs kararı seçilen kanıt setine göre değişir'),
  k(E.DENGE_DONGUSU,'yasam','HomeostaziDongusu','homeostazi','zaman-simulasyonu','bozulan değer hedef aralığa geri döner'),
  k(E.MOLEKUL_ESLE,'molekul','YapiIslevEsleme','molekul-esle','eslestirme','lipit ve mineral görevleri ayrı kanıtlarla eşleşir'),
  k(E.MOLEKUL_KUR,'molekul','MonomerPolimerKurucu','molekul-kur','parcacik-kurucu','bağ kurulunca su çıkar, hidrolizde su kullanılır'),
  k(E.AYIRAC_LAB,'molekul','BesinAyiraciLaboratuvari','ayirac','zaman-simulasyonu','pozitif ve negatif kontrol tüpleri zamanla farklı renklenir'),
  k(E.ENZIM_LAB,'molekul','EnzimLaboratuvari','enzim','parcacik-simulasyonu','37 ve 60 derecede ürün eğrileri farklıdır'),
  k(E.HUCRE_MERCEK,'hucre','HucreKarsilastirmaMercegi','hucre-mercek','katmanli-svg','hücre tipi katmanları ve organel açıklamaları değişir'),
  k(E.ORGANEL_ROTA,'hucre','OrganelIsAkisi','organel-rota','sirala-canlandir','yanlış organel rotası gerekçeyle reddedilir'),
  k(E.YUZEY_HACIM,'hucre','YuzeyHacimLaboratuvari','yuzey-hacim','hesap-gorsellestir','tek büyük ve çok küçük hücrenin oranı ayrışır'),
  k(E.ZAR_LAB,'hucre','ZarTasinimLaboratuvari','zar','parcacik-simulasyonu','ATP ve kanal koşulları net akışı değiştirir'),
  k(E.ZAR_DEGISKEN,'hucre','ZarDegiskenDedektifi','zar-degisken','neden-sonuc','molekül boyutu ve taşıyıcı seçimi mekanizmayı değiştirir'),
  k(E.TONISITE_LAB,'hucre','TonisiteLaboratuvari','tonisite','sekil-simulasyonu','bitki ve hayvan hücresi aynı ortamda farklı biçimlenir'),
  k(E.VEZIKUL_SIRALA,'hucre','VezikulTasinimSahnesi','vezikul','sekil-simulasyonu','büyük yükte zar şekli ve vezikül yönü değişir'),
  k(E.TAKSON_MERCEK,'siniflandirma','TaksonBasamagiMercegi','takson','filtreleme','basamak daraldıkça birey kümesi gerçekten filtrelenir'),
  k(E.CANLILIK_AGACI,'siniflandirma','UcDomainAgaci','domain-agaci','genisleyen-svg-agac','düğüm açıldığında ortak ata ve ayırt edici özellik görünür'),
  k(E.DALLANMIS_ANAHTAR,'siniflandirma','OlcutSecimliAnahtar','dallanmis-anahtar','karar-agaci','öğrencinin seçtiği ölçüt sonraki adayları değiştirir'),
  k(E.BIYO_VERI,'siniflandirma','TurkiyeBiyocesitlilikHaritasi','biyo-veri','harita-veri','bölge seçimi endemik tür verisini ve grafiği değiştirir'),
  k(E.BOLUNME_ZAMAN,'bolunme','BolunmeZamanMakinesi','bolunme','zaman-simulasyonu','oynat evreyi ilerletir, duraklat durdurur, reset G1 yapar'),
  k(E.KROMOZOM_KUR,'bolunme','KromozomKurucu','kromozom','parca-degisimi','crossing-over kardeş olmayan kromatit parçalarını değiştirir'),
  k(E.DNA_GRAFIK,'bolunme','DnaGrafikKurucu','dna-grafik','grafik-kurucu','sürüklenen yanlış nokta evreye özel geri bildirim üretir'),
  k(E.BOLUNME_KARSILASTIR,'bolunme','BolunmeSonucKarsilastirmasi','bolunme-karsilastir','karsilastirma','mitoz ve mayoz hücre/ploidy sonuçları ayrışır'),
  k(E.UREME_SINIFLA,'bolunme','UremeOrnekSiniflayici','ureme-sinifla','surukle-sinifla','tomurcuklanma ve spor örnekleri mekanizmaya göre ayrılır'),
  k(E.UREME_STRATEJI,'bolunme','UremeStratejiSimulasyonu','ureme-strateji','senaryo-simulasyonu','çevre değişimi ve enerji maliyeti strateji sonucunu değiştirir'),
  k(E.YASAM_DONGU,'bolunme','YasamDongusuKurucu','yasam-dongu','sirala','döllenme ve gelişim sırası öğrenci kurulmadan ilerlemez'),
  k(E.PUNNETT_LAB,'kalitim','PunnettKurucu','punnett','tablo-kurucu','öğrenci hücreleri yerleştirmeden oran hesaplanmaz'),
  k(E.KALITIM_KAVRAM,'kalitim','KalitimKavramAgi','kalitim-kavram','kavram-agi','genotip değişimi fenotip kanıtını farklılaştırır'),
  k(E.KAN_GRUBU,'kalitim','KanGrubuCaprazlamasi','kan-grubu','olasilik-modeli','ABO ve Rh sonuçları ayrı hesaplanır'),
  k(E.SOYAGACI,'kalitim','SoyagaciDedektifi','soyagaci','kanit-zinciri','seçilen kalıtım modeli ilk çelişkili bireyi değiştirir'),
  k(E.ORGANIZASYON_ESLE,'ekosistem','OrganizasyonNisEsleme','organizasyon','eslestirme','habitat ve niş örnekleri organizasyon düzeyine bağlanır'),
  k(E.ILISKI_SENARYO,'ekosistem','TurEtkilesimiSenaryosu','iliski','senaryo-karari','iki türün kazanç/kayıp durumu ilişki türünü değiştirir'),
  k(E.BESIN_AGI,'ekosistem','BesinAgiKurucu','besin-agi','ag-kurucu','yanlış ok yönü reddedilir, etkiler zamanla yayılır'),
  k(E.TROFIK_LAB,'ekosistem','TrofikPiramitLaboratuvari','trofik','veri-karsilastirma','enerji azalırken kalıcı toksin üst basamakta büyür'),
  k(E.POPULASYON_LAB,'ekosistem','PopulasyonSimulasyonu','populasyon','zaman-simulasyonu','zaman ilerleyince nüfus kapasiteye yaklaşır'),
  k(E.DONGU_TAMAMLA,'ekosistem','MaddeDongusuKurucu','madde-dongu','ag-tamamlama','eksik süreç etiketi karbon ve azot akışını değiştirir'),
  k(E.CEVRE_AGI,'ekosistem','CevreNedenSonucAgi','cevre-agi','neden-sonuc-agi','ötrofikasyon zinciri oksijen ve çeşitliliğe yayılır'),
  k(E.ATIK_KARAR,'ekosistem','AtikYonetimiIstasyonu','atik','karar-simulasyonu','atık türü ve kirlenme geri kazanım rotasını değiştirir'),
  k(E.AYAK_IZI,'ekosistem','EkolojikAyakIziKarsilastirmasi','ayak-izi','senaryo-karsilastirma','ulaşım ve enerji senaryosu toplam etkiyi değiştirir'),
  k(E.YEREL_VERI,'ekosistem','YerelCevreVeriLaboratuvari','yerel-veri','grafik-yorumlama','seçilen dönem eğilim ve çıkarımı değiştirir'),
  k(E.ATP_MODEL,'enerji','AtpIsEsleme','atp','eslestirme','ATP dönüşümü aktif taşıma, kasılma ve senteze bağlanır'),
  k(E.FOTOSENTEZ_LAB,'enerji','FotosentezLaboratuvari','fotosentez','zaman-simulasyonu','sınırlayıcı faktör O2 eğrisinin eğimini değiştirir'),
  k(E.KEMOFOTO_KARSILASTIR,'enerji','KemoFotoKarsilastirma','kemofoto','karsilastirma','ışık yokluğu fotosentez ve kemosentezi farklı etkiler'),
  k(E.GLIKOZ_YOLCULUK,'enerji','GlikozYolculugu','glikoz-yolu','sirala-canlandir','öğrenci doğru sırayı kurmadan glikoz ilerlemez'),
  k(E.SOLUNUM_KARSILASTIR,'enerji','SolunumFermantasyonIstasyonu','solunum','yol-ayrimi','oksijen ve canlı türü ürün/yer/verimi değiştirir'),
]

export const ETKILESIM_KAYDI = Object.freeze(Object.fromEntries(ETKILESIM_KAYITLARI.map((x) => [x.id, x])))

export function etkilesimKaydi(id) {
  const kayit = ETKILESIM_KAYDI[id]
  if (!kayit && import.meta.env?.DEV) throw new Error(`Kayıtsız biyoloji etkileşimi: ${id}`)
  return kayit ?? null
}
