import { enzimAdim, enzimBaslat } from './enzim.js'
import { zarAdim, zarBaslat } from './zar.js'
import { bolunmeAdim, bolunmeBaslat } from './bolunme.js'
import { besinAgiAdim, fotosentezAdim, fotosentezBaslat, homeostaziAdim, homeostaziBaslat, populasyonAdim, populasyonBaslat } from './sistemler.js'
import { punnett } from './modeller.js'

const stateMachine = (hedef, baslangic=0) => ({
  baslangic: () => ({ hedef, deger: baslangic, secimler: [], calisti: false, durum: 'hazır' }),
  gecis: (s, olay) => {
    if (olay.type === 'reset') return { hedef, deger: baslangic, secimler: [], calisti: false, durum: 'hazır' }
    if (olay.type === 'input') return { ...s, deger: olay.value ?? s.deger + 1, secimler: [...s.secimler, olay.value ?? s.deger + 1], durum: 'hazır' }
    if (olay.type === 'run') return { ...s, calisti: true, deger: s.deger + 1, durum: 'çalışıyor' }
    return s
  },
})

const yardimci = {
  'deney-tasarim':stateMachine('kontrol ve deney grubu',3),'kanit-sinifla':stateMachine('kanıt seti',0),'molekul-esle':stateMachine('yapı-işlev eşleri',0),'molekul-kur':stateMachine('monomer bağları',1),'ayirac':stateMachine('tüp renk zamanı',0),
  'hucre-mercek':stateMachine('organel katmanları',0),'organel-rota':stateMachine('salgı rotası',0),'yuzey-hacim':stateMachine('yüzey/hacim oranı',1),'zar-degisken':stateMachine('taşıma yolu',0),'tonisite':stateMachine('hücre hacmi',1),'vezikul':stateMachine('zar kıvrımı',0),
  'takson':stateMachine('filtrelenen canlılar',4),'domain-agaci':stateMachine('açılan ağaç düğümleri',0),'dallanmis-anahtar':stateMachine('kalan adaylar',4),'biyo-veri':stateMachine('bölge veri seti',0),'kromozom':stateMachine('değişen kromatit parçası',0),'dna-grafik':stateMachine('öğrenci grafik noktası',1),'bolunme-karsilastir':stateMachine('ploidy karşılaştırması',0),
  'ureme-sinifla':stateMachine('sınıflanan üreme örneği',0),'ureme-strateji':stateMachine('strateji uygunluğu',50),'yasam-dongu':stateMachine('yaşam döngüsü sırası',0),'kalitim-kavram':stateMachine('kavram bağlantısı',0),'kan-grubu':stateMachine('ABO-Rh fenotip kümesi',0),'soyagaci':stateMachine('model çelişkisi',0),
  'organizasyon':stateMachine('organizasyon düzeyi',0),'iliski':stateMachine('tür etkileşimi işareti',0),'trofik':stateMachine('enerji ve toksin basamağı',0),'madde-dongu':stateMachine('döngü bağlantısı',0),'cevre-agi':stateMachine('ötrofikasyon zinciri',0),'atik':stateMachine('atık rotası',0),'ayak-izi':stateMachine('göreli etki puanı',50),'yerel-veri':stateMachine('zaman serisi seçimi',0),'atp':stateMachine('ATP-iş eşleşmesi',0),'kemofoto':stateMachine('enerji kaynağı karşılaştırması',0),'glikoz-yolu':stateMachine('glikoz durağı',0),'solunum':stateMachine('ürün ve verim yolu',0),
}

export const MOTOR_KAYITLARI = Object.freeze({
  ...yardimci,
  enzim:{baslangic:()=>enzimBaslat(),gecis:(s,o)=>o.type==='reset'?enzimBaslat():o.type==='input'?enzimBaslat({...s,...o.patch}):o.type==='run'?enzimAdim(s,o.dt??1):s},
  zar:{baslangic:()=>zarBaslat(),gecis:(s,o)=>o.type==='reset'?zarBaslat():o.type==='input'?zarBaslat({...s,...o.patch}):o.type==='run'?zarAdim(s,o.dt??1):s},
  bolunme:{baslangic:()=>bolunmeBaslat('mitoz'),gecis:(s,o)=>o.type==='reset'?bolunmeBaslat(o.tur??s.tur):o.type==='input'?bolunmeBaslat(o.tur??'mitoz'):o.type==='run'?bolunmeAdim(s,o.yon??1):s},
  homeostazi:{baslangic:()=>homeostaziBaslat(),gecis:(s,o)=>o.type==='reset'?homeostaziBaslat():o.type==='input'?homeostaziBaslat(o.patch):o.type==='run'?homeostaziAdim(s,o.dt??1):s},
  fotosentez:{baslangic:()=>fotosentezBaslat(),gecis:(s,o)=>o.type==='reset'?fotosentezBaslat():o.type==='input'?fotosentezBaslat({...s,...o.patch}):o.type==='run'?fotosentezAdim(s,o.dt??1):s},
  populasyon:{baslangic:()=>populasyonBaslat(),gecis:(s,o)=>o.type==='reset'?populasyonBaslat():o.type==='input'?populasyonBaslat({...s,...o.patch}):o.type==='run'?populasyonAdim(s,o.dt??1):s},
  'besin-agi':{baslangic:()=>({etkiler:{tavşan:30},adim:0,durum:'hazır'}),gecis:(s,o)=>o.type==='reset'?{etkiler:{tavşan:30},adim:0,durum:'hazır'}:o.type==='input'?{etkiler:{[o.tur??'ot']:o.degisim??30},adim:0,durum:'hazır'}:o.type==='run'?{etkiler:besinAgiAdim(s.etkiler,s.adim+1),adim:s.adim+1,durum:'çalışıyor'}:s},
  punnett:{baslangic:()=>({a:'Aa',b:'Aa',sonuc:null,durum:'hazır'}),gecis:(s,o)=>o.type==='reset'?{a:'Aa',b:'Aa',sonuc:null,durum:'hazır'}:o.type==='input'?{...s,...o.patch,sonuc:null}:o.type==='run'?{...s,sonuc:punnett(s.a,s.b),durum:'çalışıyor'}:s},
})

export function motorBul(engineKey){const motor=MOTOR_KAYITLARI[engineKey];if(!motor)throw new Error(`Kayıtsız biyoloji motoru: ${engineKey}`);return motor}

