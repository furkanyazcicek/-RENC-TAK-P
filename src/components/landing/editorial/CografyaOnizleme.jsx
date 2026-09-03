import { useState } from 'react'
import { Layers3, RotateCcw } from 'lucide-react'
import { SceneOverlay, modelHesapla } from '../../cografya/bolgeler/YerSekilleriLaboratuvari'
import AtlasPreviewFrame, { OnizlemeKaydirici } from './AtlasPreviewFrame'

const ILK = { yagis: 58, egim: 62, akis: 64, kayac: 42, bitki: 38, zaman: 46 }
const KANITLAR = [
  { id: 'vadi', ad: 'Dar vadi', x: 39, y: 45, aciklama: 'Eğim ve akış gücü arttığında aşınım indeksi yükselir. Dağlık kesimdeki aşınma katmanını gözle.' },
  { id: 'menderes', ad: 'Menderes', x: 57, y: 55, aciklama: 'Dış kıyıda aşınım, iç kıyıda birikim. Aynı akarsu boyunca iki süreci birlikte oku.' },
  { id: 'delta', ad: 'Delta', x: 84, y: 78, aciklama: 'Akarsuyun taşıma gücü azaldığında malzeme birikir. Alt havzadaki birikim katmanını karşılaştır.' },
]
export default function CografyaOnizleme() {
  const [degerler, setDegerler] = useState(ILK)
  const [katman, setKatman] = useState(true)
  const [kanit, setKanit] = useState(KANITLAR[0])
  const [hata, setHata] = useState(false)
  const sonuc = modelHesapla(degerler)
  const katmanlar = { yukselti: false, akis: katman, asinim: katman, tasinim: katman, birikim: katman, bitki: katman, profil: false }
  return <AtlasPreviewFrame ders="Coğrafya" baslik="Bir havza. Birbirine bağlı süreçler." hedef="/cografya-atlasi?bolge=yerkure" sinif="atlas-sample--geography">
    <div className="atlas-terrain-tools"><span>YER ŞEKİLLERİ / HAVZA DENEYİ</span><button type="button" aria-pressed={katman} onClick={() => setKatman(!katman)}><Layers3 size={15} aria-hidden="true" />{katman ? 'Katmanları gizle' : 'Katmanları göster'}</button></div>
    <div className="atlas-terrain-study">
      <div className="atlas-terrain-observation">
        <div className="atlas-terrain-scene">
          <img src="/atlas-assets/cografya/imagegen/yer-sekilleri-havza-v2.jpg" alt="Uygulamanın kurgusal havza modeli: dağ, dar vadi, menderes ve delta" onError={() => setHata(true)} onLoad={() => setHata(false)} />
          <SceneOverlay values={degerler} model={sonuc} layers={katmanlar} profile={{ a: 18, b: 80 }} evidence={kanit} />
          {KANITLAR.map((k, i) => <button key={k.id} type="button" className="atlas-terrain-point" style={{ left: `${k.x}%`, top: `${k.y}%` }} aria-pressed={k.id === kanit.id} aria-label={`${k.ad} noktasını incele`} onClick={() => setKanit(k)}><span>{i + 1}</span></button>)}
          {hata && <div className="atlas-sample__image-error" role="alert">Havza görseli yüklenemedi. Kontroller ve ölçümler kullanılabilir.</div>}
        </div>
        <div className="atlas-terrain-legend" aria-label="Öğretim katmanları"><span>ŞEMATİK KATMANLAR</span>{katman ? <><span><i className="erosion" />Aşınım</span><span><i className="transport" />Taşınım</span><span><i className="deposition" />Birikim</span></> : <span>Gizli · yalnız havza görseli</span>}</div>
        <div className="atlas-terrain-stops" role="group" aria-label="Havzada incelenecek bölge">{KANITLAR.map((k, i) => <button key={k.id} type="button" aria-pressed={k.id === kanit.id} onClick={() => setKanit(k)}><span aria-hidden="true">0{i + 1}</span>{k.ad}</button>)}</div>
        <div className="atlas-terrain-caption" aria-live="polite"><strong>{kanit.ad}</strong><p>{kanit.aciklama}</p></div>
      </div>
      <div className="atlas-terrain-controls">
        <div className="atlas-terrain-controls__heading"><span className="atlas-sample__eyebrow">DENGEYİ DEĞİŞTİR</span><button type="button" aria-label="Havza deneyini sıfırla" title="Havza deneyini sıfırla" onClick={() => { setDegerler(ILK); setKatman(true); setKanit(KANITLAR[0]) }}><RotateCcw size={16} aria-hidden="true" /></button></div>
        <div className="atlas-terrain-ranges">
          {[['yagis', 'Yağış', 0], ['egim', 'Eğim', 5], ['bitki', 'Bitki örtüsü', 0]].map(([id, ad, alt]) => <OnizlemeKaydirici key={id} ad={ad} deger={degerler[id]} alt={alt} ust={id === 'egim' ? 95 : 100} birim="/100" degistir={(v) => setDegerler((eski) => ({ ...eski, [id]: v }))} />)}
        </div>
        <dl className="atlas-sample__measurements" aria-live="polite"><div><dt>Yüzey akışı</dt><dd>{sonuc.surfaceFlow}<small>/100</small></dd></div><div><dt>Aşınım</dt><dd>{sonuc.erosion}<small>/100</small></dd></div><div><dt>Birikim</dt><dd>{sonuc.deposition}<small>/100</small></dd></div></dl>
        <p className="atlas-sample__insight">Bitki örtüsünü artır; aynı yağışta yüzey akışı ve aşınımın nasıl değiştiğini gör.</p>
      </div>
    </div>
    <p className="atlas-sample__note atlas-sample__inset">Coğrafya atlasının havza görseli, katmanları ve hesaplama modeli. Görsel kurgusaldır; 0–100 değerleri göreli öğretim indeksidir, ölçülmüş arazi veya gerçek afet tahmini değildir.</p>
  </AtlasPreviewFrame>
}
