import { useEffect, useRef, useState } from 'react'
import { Pause, Play, RotateCcw, StepForward } from 'lucide-react'
import Arac from '../../fizik/ortak/Arac'
import { useSimulasyonZamani } from '../../fizik/ortak/zaman'
import { hiz, konum } from '../../../lib/fizik/hareket'
import AtlasPreviewFrame, { OnizlemeKaydirici } from './AtlasPreviewFrame'

const bitis = 6
const sayi = (x) => x.toLocaleString('tr-TR', { maximumFractionDigits: 1, minimumFractionDigits: 1 })

export default function FizikOnizleme() {
  const [ivme, setIvme] = useState(2)
  const [ilkHiz, setIlkHiz] = useState(8)
  const [darEkran, setDarEkran] = useState(() => window.matchMedia('(max-width: 600px)').matches)
  const sim = useSimulasyonZamani({ bitis })
  const kok = useRef(null)
  const t = sim.zaman
  const x = konum(0, ilkHiz, ivme, t)
  const v = hiz(ilkHiz, ivme, t)
  const genislik = darEkran ? 420 : 760
  const px = (metre) => 42 + metre / 140 * (genislik - 84)

  useEffect(() => {
    const medya = window.matchMedia('(max-width: 600px)')
    const guncelle = () => setDarEkran(medya.matches)
    medya.addEventListener('change', guncelle)
    return () => medya.removeEventListener('change', guncelle)
  }, [])

  useEffect(() => {
    const gozlemci = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) sim.duraklat() })
    if (kok.current) gozlemci.observe(kok.current)
    const gorunurluk = () => { if (document.hidden) sim.duraklat() }
    document.addEventListener('visibilitychange', gorunurluk)
    return () => { gozlemci.disconnect(); document.removeEventListener('visibilitychange', gorunurluk) }
  }, [sim.duraklat])

  const degistir = (set, deger) => { sim.sifirla(); set(deger) }
  return <AtlasPreviewFrame ders="Fizik" baslik="İvmeyi değiştir. Hareketi gör." hedef="/fizik-atlasi?bolge=kuvvet-hareket" sinif="atlas-sample--physics">
    <div ref={kok} className="atlas-car-scene">
      <div className="atlas-car-scene__top"><span>SABİT İVMELİ HAREKET</span><strong>{sayi(t)} <small>/ 6 sn</small></strong></div>
      <svg viewBox={`0 0 ${genislik} 240`} role="img" aria-label={`${sayi(t)} saniyede araç ${sayi(x)} metrede; hızı ${sayi(v)} metre bölü saniye.`}>
        <path d="M0 163 H760 V202 H0 Z" className="atlas-road" />
        <path d="M0 183 H760" className="atlas-road-line" />
        {(darEkran ? [0, 40, 80, 120] : [0, 20, 40, 60, 80, 100, 120, 140]).map((metre) => <g key={metre}><path d={`M${px(metre)} 204 v8`} className="atlas-road-tick" /><text x={px(metre)} y="228" textAnchor="middle">{metre} m</text></g>)}
        {Array.from({ length: Math.floor(t) + 1 }, (_, sn) => <g key={sn} opacity=".3"><circle cx={px(konum(0, ilkHiz, ivme, sn))} cy="177" r="4" /><path d={`M${px(konum(0, ilkHiz, ivme, sn))} 156 v13`} className="atlas-road-tick" /></g>)}
        <g transform={`translate(${px(x)} 137) scale(.62)`}><Arac /></g>
        <g className="atlas-speed-arrow" transform={`translate(${px(x)} 85)`}><path d={`M0 0 H${22 + v * 1.3} l-7 -5 m7 5 l-7 5`} /><text x="0" y="-12">v = {sayi(v)} m/sn</text></g>
        <text x="28" y="32" className="atlas-car-equation">x = v₀t + ½at²</text>
        <text x="28" y="53">Noktalar: birer saniye arayla konum</text>
      </svg>
    </div>
    <div className="atlas-car-controls">
      <div className="atlas-sample__playback">
        <button className="atlas-sample__play" type="button" onClick={sim.calisiyor ? sim.duraklat : sim.oynat}>{sim.calisiyor ? <Pause size={16} /> : <Play size={16} />}{sim.calisiyor ? 'Duraklat' : t >= bitis ? 'Yeniden oynat' : 'Hareketi başlat'}</button>
        <button type="button" onClick={() => sim.adimla(1)} disabled={t >= bitis} aria-label="Bir saniye ilerlet"><StepForward size={18} /></button>
        <button type="button" onClick={sim.sifirla} disabled={t === 0 && !sim.calisiyor} aria-label="Hareketi sıfırla"><RotateCcw size={17} /></button>
        <span role="status">{sim.calisiyor ? 'Oynatılıyor' : t === 0 ? 'Hazır' : t >= bitis ? 'Tamamlandı' : 'Duraklatıldı'}</span>
      </div>
      <OnizlemeKaydirici ad="Zaman" deger={t} alt={0} ust={6} adim={.1} birim="sn" degistir={(deger) => { sim.duraklat(); sim.setZaman(deger) }} />
      <div className="atlas-sample__control-row">
        <OnizlemeKaydirici ad="İlk hız" deger={ilkHiz} alt={0} ust={10} birim="m/sn" degistir={(deger) => degistir(setIlkHiz, deger)} />
        <OnizlemeKaydirici ad="İvme" deger={ivme} alt={0} ust={4} adim={.5} birim="m/sn²" degistir={(deger) => degistir(setIvme, deger)} />
      </div>
      <dl className="atlas-sample__measurements"><div><dt>Konum</dt><dd>{sayi(x)} <small>m</small></dd></div><div><dt>Anlık hız</dt><dd>{sayi(v)} <small>m/sn</small></dd></div><div><dt>İvme</dt><dd>{sayi(ivme)} <small>m/sn²</small></dd></div></dl>
      <p className="atlas-sample__insight">{ivme === 0 ? 'İvme sıfır: hız değişmez, eşit zaman aralıklarında eşit yollar alınır.' : `Hız her saniye ${sayi(ivme)} m/sn artar. Birer saniyelik konum işaretlerinin arası giderek açılır.`}</p>
      <p className="atlas-sample__note">Atlasın hareket modeli · Düz yol, sabit ivme, başlangıç konumu 0 m. Araç çizimi ölçekli değildir; otomatik oynatma yoktur.</p>
    </div>
  </AtlasPreviewFrame>
}
