import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Minus, MousePointerClick, Plus, RotateCcw } from 'lucide-react'
import { yansit } from '../../lib/kimya/geometri3b.js'
import { atomRengi, atomYaricapi } from '../../data/kimya/atomRenkleri.js'
import { ELEMENT_SOZLUGU } from '../../data/kimya/elementler.js'

/**
 * Etkileşimli molekül/örgü görüntüleyici.
 *
 * Gerçek 3B koordinatlar ekrana yansıtılır (dönme + hafif perspektif), yani
 * öğrenci modeli sürükleyerek döndürdüğünde gerçekten farklı bir açıdan bakar.
 * WebGL kullanılmaz: SVG her cihazda çalışır ve atomlar tıklanabilir kalır.
 */
export default function MolekulGorunumu({
  yapi,
  yukseklik = 300,
  ciftleriGoster = true,
  delokalize = false,
  dipoller = null,
  otomatikDon = true,
  onAtomSec = null,
  vurguluBaglar = null,
}) {
  const [donus, setDonus] = useState({ x: -12, y: 22 })
  const [yakinlik, setYakinlik] = useState(1)
  const [seciliAtom, setSeciliAtom] = useState(null)
  const [surukleniyor, setSurukleniyor] = useState(false)
  const kullaniciDokundu = useRef(false)
  const cerceve = useRef(0)
  const alanRef = useRef(null)
  const kapsayiciRef = useRef(null)

  /* Kullanıcı dokunana kadar yavaşça döner — model "canlı" hissettirir.

     Performans notu: her karede durum güncellemek telefonlarda gereksiz yere
     pil harcıyordu. Bu yüzden dönüş saniyede ~24 kareye kısıldı ve model
     ekranda görünmüyorsa (ya da sekme arka plandaysa) tamamen durur. */
  useEffect(() => {
    if (!otomatikDon) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return undefined

    const alan = kapsayiciRef.current
    let gorunur = true
    let gozlemci = null
    if (alan && 'IntersectionObserver' in window) {
      gozlemci = new IntersectionObserver(([giris]) => { gorunur = giris.isIntersecting }, { threshold: 0.05 })
      gozlemci.observe(alan)
    }

    const KARE_ARALIGI = 42 // ms → ~24 kare/sn
    let sonCizim = performance.now()
    const adim = (zaman) => {
      cerceve.current = requestAnimationFrame(adim)
      const fark = zaman - sonCizim
      if (fark < KARE_ARALIGI) return
      sonCizim = zaman
      if (kullaniciDokundu.current || !gorunur || document.hidden) return
      setDonus((d) => ({ ...d, y: (d.y + fark * 0.012) % 360 }))
    }
    cerceve.current = requestAnimationFrame(adim)
    return () => { cancelAnimationFrame(cerceve.current); gozlemci?.disconnect() }
  }, [otomatikDon])

  /* Modeli görüntü alanına sığdıracak ölçek.
     Atom yarıçapı da bu ölçeğe bağlıdır; böylece küçük moleküller büyük,
     büyük örgüler küçük çizilir ama küre/çubuk oranı hep aynı kalır. */
  const temelOlcek = useMemo(() => {
    if (!yapi?.atomlar?.length) return 40
    const enUzak = Math.max(...yapi.atomlar.map((a) => Math.hypot(...a.konum)), 0.42)
    // En dıştaki atomun yarıçapı da görüntü alanına sığmalı; yoksa küreler kırpılır.
    const enGenisYaricap = Math.max(...yapi.atomlar.map((a) => {
      const iyonCarpani = a.iyonYuku === '+' ? 0.62 : a.iyonYuku === '−' ? 1.2 : 1
      return atomYaricapi(a.sembol) * iyonCarpani
    }))
    return Math.min(110, 92 / (enUzak + enGenisYaricap * 0.5))
  }, [yapi])

  /** Bir atomun ekrandaki yarıçapı (küre-çubuk oranı 0,42). */
  const atomYaricapiPx = (atom, derinlikCarpani = 1) => {
    // İyonik örgüde katyon küçülür, anyon büyür — gerçek iyon yarıçaplarına yakın durur.
    const iyonCarpani = atom.iyonYuku === '+' ? 0.62 : atom.iyonYuku === '−' ? 1.2 : 1
    return atomYaricapi(atom.sembol) * temelOlcek * yakinlik * 0.42 * iyonCarpani * derinlikCarpani
  }

  const noktalar = useMemo(() => {
    if (!yapi?.atomlar?.length) return []
    return yapi.atomlar.map((atom) => ({
      ...atom,
      ...yansit(atom.konum, { donusY: donus.y, donusX: donus.x, olcek: temelOlcek * yakinlik }),
    }))
  }, [yapi, donus, yakinlik, temelOlcek])

  const noktaSozlugu = useMemo(() => Object.fromEntries(noktalar.map((n) => [n.id, n])), [noktalar])

  const kullanilanSemboller = useMemo(
    () => [...new Set((yapi?.atomlar ?? []).map((a) => a.sembol))],
    [yapi],
  )

  /* ————— Sürükleyerek döndürme ————— */
  const basla = useCallback((olay) => {
    kullaniciDokundu.current = true
    setSurukleniyor(true)
    olay.currentTarget.setPointerCapture?.(olay.pointerId)
    alanRef.current = { x: olay.clientX, y: olay.clientY }
  }, [])

  const hareket = useCallback((olay) => {
    if (!surukleniyor || !alanRef.current) return
    const dx = olay.clientX - alanRef.current.x
    const dy = olay.clientY - alanRef.current.y
    alanRef.current = { x: olay.clientX, y: olay.clientY }
    setDonus((d) => ({
      y: d.y + dx * 0.55,
      x: Math.max(-85, Math.min(85, d.x - dy * 0.5)),
    }))
  }, [surukleniyor])

  const bitir = useCallback(() => { setSurukleniyor(false); alanRef.current = null }, [])

  const tekerlek = useCallback((olay) => {
    if (!olay.ctrlKey && Math.abs(olay.deltaY) < 8) return
    olay.preventDefault()
    kullaniciDokundu.current = true
    setYakinlik((y) => Math.max(0.5, Math.min(2.4, y - olay.deltaY * 0.0016)))
  }, [])

  const sifirla = () => { setDonus({ x: -12, y: 22 }); setYakinlik(1); setSeciliAtom(null); kullaniciDokundu.current = false }

  if (!yapi?.atomlar?.length) return null

  const atomSecildi = (atom) => {
    kullaniciDokundu.current = true
    const yeni = seciliAtom === atom.id ? null : atom.id
    setSeciliAtom(yeni)
    onAtomSec?.(yeni == null ? null : atom)
  }

  /* Boyama sırası: uzaktakiler önce (z'ye göre) */
  const siraliAtomlar = [...noktalar].sort((a, b) => a.z - b.z)
  const secili = seciliAtom == null ? null : noktalar.find((n) => n.id === seciliAtom)
  const seciliElement = secili ? ELEMENT_SOZLUGU[secili.sembol] : null

  return (
    <div>
      <div
        ref={kapsayiciRef}
        className="ka-molekul-alan"
        style={{ height: yukseklik }}
        onPointerDown={basla}
        onPointerMove={hareket}
        onPointerUp={bitir}
        onPointerCancel={bitir}
        onWheel={tekerlek}
        role="img"
        aria-label="Etkileşimli molekül modeli — sürükleyerek döndürülebilir"
      >
        <svg viewBox="-110 -100 220 200" style={{ height: '100%' }}>
          <defs>
            {kullanilanSemboller.map((sembol) => {
              const renk = atomRengi(sembol)
              return (
                <radialGradient key={sembol} id={`ka-kure-${sembol}`} cx="35%" cy="30%" r="72%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.72" />
                  <stop offset="42%" stopColor={renk.dolgu} />
                  <stop offset="100%" stopColor={renk.kenar} />
                </radialGradient>
              )
            })}
          </defs>

          {/* Bağlar */}
          {yapi.baglar.map((bag, i) => {
            const a = noktaSozlugu[bag.a]
            const b = noktaSozlugu[bag.b]
            if (!a || !b) return null
            const iyonik = bag.tur === 'iyonik'
            const derinlik = (a.z + b.z) / 2
            const kalinlik = iyonik ? 1 : Math.max(2.2, temelOlcek * 0.075 * (1 + derinlik * 0.14))
            const vurgulu = vurguluBaglar === 'ici'
            const dx = b.x - a.x
            const dy = b.y - a.y
            const boy = Math.hypot(dx, dy) || 1
            const nx = (-dy / boy)
            const ny = (dx / boy)
            const derece = iyonik ? 1 : (bag.derece ?? 1)
            const aralik = Math.max(2, temelOlcek * 0.045)
            const kaymalar = derece === 2 ? [-aralik, aralik] : derece === 3 ? [-aralik * 1.5, 0, aralik * 1.5] : [0]
            return (
              <g key={i} opacity={iyonik ? 0.35 : 1}>
                {kaymalar.map((k, j) => (
                  <line
                    key={j}
                    x1={a.x + nx * k} y1={a.y + ny * k}
                    x2={b.x + nx * k} y2={b.y + ny * k}
                    stroke={vurgulu ? 'rgb(var(--ka-vurgu))' : 'currentColor'}
                    strokeOpacity={vurgulu ? 0.95 : 0.42}
                    strokeWidth={kalinlik}
                    strokeLinecap="round"
                    strokeDasharray={iyonik ? '3 4' : undefined}
                    className={vurgulu ? 'ka-nabiz' : undefined}
                  />
                ))}
                {/* Rezonans: delokalize π sistemi kesikli iç çizgiyle gösterilir */}
                {delokalize && !iyonik && (
                  <line
                    x1={a.x + nx * (aralik + 1)} y1={a.y + ny * (aralik + 1)}
                    x2={b.x + nx * (aralik + 1)} y2={b.y + ny * (aralik + 1)}
                    stroke="rgb(var(--ka-vurgu))" strokeWidth="1.6"
                    strokeDasharray="3 3" strokeOpacity="0.8" strokeLinecap="round"
                  />
                )}
              </g>
            )
          })}

          {/* Ortaklanmamış elektron çiftleri */}
          {ciftleriGoster && (yapi.ciftler ?? []).map((cift, i) => {
            const merkezAtom = yapi.atomlar.find((a) => a.id === cift.atomId)
            if (!merkezAtom) return null
            const uzaklik = atomYaricapi(merkezAtom.sembol) * 0.62 + 0.34
            const konum = [
              merkezAtom.konum[0] + cift.yon[0] * uzaklik,
              merkezAtom.konum[1] + cift.yon[1] * uzaklik,
              merkezAtom.konum[2] + cift.yon[2] * uzaklik,
            ]
            const p = yansit(konum, { donusY: donus.y, donusX: donus.x, olcek: temelOlcek * yakinlik })
            const m = noktaSozlugu[cift.atomId]
            const dx = p.x - m.x
            const dy = p.y - m.y
            const boy = Math.hypot(dx, dy) || 1
            return (
              <g key={`c${i}`} opacity={0.55 + p.z * 0.1}>
                <circle cx={p.x - (dy / boy) * 3} cy={p.y + (dx / boy) * 3} r="2.1" fill="rgb(var(--ka-vurgu))" />
                <circle cx={p.x + (dy / boy) * 3} cy={p.y - (dx / boy) * 3} r="2.1" fill="rgb(var(--ka-vurgu))" />
              </g>
            )
          })}

          {/* Bağ dipolleri */}
          {dipoller && yapi.baglar.map((bag, i) => {
            const a = noktaSozlugu[bag.a]
            const b = noktaSozlugu[bag.b]
            if (!a || !b) return null
            const enA = ELEMENT_SOZLUGU[a.sembol]?.elektronegatiflik
            const enB = ELEMENT_SOZLUGU[b.sembol]?.elektronegatiflik
            if (enA == null || enB == null || Math.abs(enA - enB) < 0.35) return null
            const [bas, son] = enA > enB ? [b, a] : [a, b]
            const dx = son.x - bas.x
            const dy = son.y - bas.y
            const boy = Math.hypot(dx, dy) || 1
            const ux = dx / boy
            const uy = dy / boy
            const x1 = bas.x + ux * boy * 0.22
            const y1 = bas.y + uy * boy * 0.22
            const x2 = bas.x + ux * boy * 0.8
            const y2 = bas.y + uy * boy * 0.8
            return (
              <g key={`d${i}`}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgb(var(--ka-turuncu))" strokeWidth="1.8" markerEnd="url(#ka-ok)" />
                <line x1={x1} y1={y1} x2={x1 + uy * 4} y2={y1 - ux * 4} stroke="rgb(var(--ka-turuncu))" strokeWidth="1.8" />
              </g>
            )
          })}
          <defs>
            <marker id="ka-ok" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 z" fill="rgb(var(--ka-turuncu))" />
            </marker>
          </defs>

          {/* Atomlar */}
          {siraliAtomlar.map((atom) => {
            const renk = atomRengi(atom.sembol)
            const r = atomYaricapiPx(atom, atom.olcekF)
            const secilenMi = seciliAtom === atom.id
            return (
              <g key={atom.id} className="ka-atom-daire" onClick={() => atomSecildi(atom)}>
                <circle
                  cx={atom.x} cy={atom.y} r={r}
                  fill={`url(#ka-kure-${atom.sembol})`}
                  stroke={secilenMi ? 'rgb(var(--ka-vurgu))' : renk.kenar}
                  strokeWidth={secilenMi ? 2.6 : 0.8}
                />
                <text
                  x={atom.x} y={atom.y}
                  textAnchor="middle" dominantBaseline="central"
                  fontSize={Math.max(7, r * 0.86)} fontWeight="700"
                  fill={renk.yazi} style={{ pointerEvents: 'none' }}
                >
                  {atom.sembol}
                </text>
                {atom.iyonYuku && (
                  <text
                    x={atom.x + r * 0.72} y={atom.y - r * 0.72}
                    textAnchor="middle" dominantBaseline="central"
                    fontSize={Math.max(6, r * 0.62)} fontWeight="700"
                    fill={renk.yazi} style={{ pointerEvents: 'none' }}
                  >
                    {atom.iyonYuku}
                  </text>
                )}
              </g>
            )
          })}
        </svg>

        <div className="ka-molekul-arac">
          <button type="button" onClick={() => { kullaniciDokundu.current = true; setYakinlik((y) => Math.min(2.4, y + 0.22)) }} aria-label="Yakınlaştır"><Plus size={15} /></button>
          <button type="button" onClick={() => { kullaniciDokundu.current = true; setYakinlik((y) => Math.max(0.5, y - 0.22)) }} aria-label="Uzaklaştır"><Minus size={15} /></button>
          <button type="button" onClick={sifirla} aria-label="Görünümü sıfırla"><RotateCcw size={14} /></button>
        </div>
        <span className="ka-molekul-ipucu">
          <MousePointerClick size={11} style={{ display: 'inline', verticalAlign: '-1px', marginRight: 4 }} />
          Sürükle: döndür · Tekerlek: yakınlaştır · Atoma tıkla
        </span>
      </div>

      {secili && seciliElement && (
        <div className="ka-atom-bilgi">
          <strong>{seciliElement.sembol} — {seciliElement.ad}</strong>{' '}
          <span className="ka-sessiz">
            Atom no {seciliElement.atomNo} · {seciliElement.degerlik} değerlik elektronu ·
            {seciliElement.elektronegatiflik != null
              ? ` elektronegatiflik ${String(seciliElement.elektronegatiflik).replace('.', ',')}`
              : ' elektronegatiflik tanımlı değil'}
          </span>
          <div style={{ marginTop: 4, fontSize: 13 }}>{seciliElement.bagEgilimi.aciklama}</div>
        </div>
      )}
    </div>
  )
}
