import { useEffect, useRef } from 'react'
import { saltanatSuresi } from '../../../data/padisahlar/kronoloji'

/**
 * OSMANLI ZAMAN ÇİZELGESİ
 *
 * Hükümdarlık süresi burada YALNIZCA yazıyla değil, GENİŞLİKLE de
 * anlatılır: bir öğenin eni saltanat yılıyla orantılıdır. Böylece
 * "Osman Gazi 25 yıl, Kanuni 46 yıl" bilgisi okunmadan görülür.
 *
 * İçeriği henüz hazırlanmamış padişahlar soluk ve tıklanamaz durur;
 * bu bilinçlidir — silsilenin devam ettiği görünmeli, ama boş bir
 * ekrana götüren düğme olmamalı.
 */
export default function ZamanCizelgesi({ kayitlar, aktifId, onSec, baslik = 'Osmanlı silsilesi' }) {
  const rayRef = useRef(null)
  const aktifRef = useRef(null)

  // Aktif padişah her zaman görünür olmalı; çizelge kendisi kayar.
  useEffect(() => {
    const oge = aktifRef.current
    const ray = rayRef.current
    if (!oge || !ray) return
    const hareket = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    const hedef = oge.offsetLeft - ray.clientWidth / 2 + oge.clientWidth / 2
    ray.scrollTo({ left: Math.max(0, hedef), behavior: hareket })
  }, [aktifId])

  const enUzun = Math.max(...kayitlar.map(saltanatSuresi))

  return (
    <nav className="pg-cizelge" aria-label="Padişah zaman çizelgesi">
      <div className="pg-cizelge-ust">
        <span>{baslik}</span>
        <div className="pg-cizelge-araclar">
          <span>Kutu genişliği = hükümdarlık süresi</span>
          <select
            value={aktifId}
            aria-label="Padişah seç"
            onChange={(olay) => onSec?.(olay.target.value)}
          >
            {kayitlar.filter((kayit) => kayit.hazir).map((kayit) => (
              <option key={kayit.id} value={kayit.id}>
                {kayit.order}. {kayit.ad} · {kayit.basMetin ?? kayit.bas}–{kayit.bitMetin ?? kayit.bit}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="pg-cizelge-ray" ref={rayRef}>
        {kayitlar.map((kayit) => {
          const sure = saltanatSuresi(kayit)
          const aktif = kayit.id === aktifId
          const secilebilir = Boolean(kayit.hazir)
          return (
            <button
              key={kayit.id}
              ref={aktif ? aktifRef : null}
              type="button"
              className="pg-cizelge-oge"
              style={{ '--pg-agirlik': Math.max(1, Math.round((sure / enUzun) * 10)) }}
              data-hazir={secilebilir ? 'true' : 'false'}
              data-tur={kayit.tur}
              aria-current={aktif ? 'true' : undefined}
              disabled={!secilebilir}
              onClick={() => secilebilir && onSec?.(kayit.id)}
              title={
                secilebilir
                  ? `${kayit.ad} · ${kayit.basMetin ?? kayit.bas}–${kayit.bitMetin ?? kayit.bit} (${sure} yıl)`
                  : `${kayit.ad} · içeriği hazırlanıyor`
              }
            >
              <span className="pg-cizelge-yil">{kayit.basMetin ?? kayit.bas}</span>
              <span className="pg-cizelge-ad">{kayit.ad}</span>
              <span className="pg-cizelge-sure">
                {kayit.tur === 'kesinti' ? `${sure} yıl · padişahsız` : `${sure} yıl`}
                {!secilebilir && ' · yakında'}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
