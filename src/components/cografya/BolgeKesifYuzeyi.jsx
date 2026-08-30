import { Image, Map } from 'lucide-react'
import { useEffect, useState } from 'react'
import BolgeSahnesi from './BolgeSahnesi.jsx'
import KonuHaritaYuzeyi from './KonuHaritaYuzeyi.jsx'

export default function BolgeKesifYuzeyi({ bolgeKod, onEtkilesimSec }) {
  const ilkGorunum = bolgeKod === 'afet' ? 'arazi' : 'harita'
  const [gorunum, setGorunum] = useState(ilkGorunum)

  useEffect(() => setGorunum(bolgeKod === 'afet' ? 'arazi' : 'harita'), [bolgeKod])

  return (
    <div className="ca-kesif-yuzeyi">
      <div className="ca-gorunum-cubugu">
        <div>
          <small>Kanıt yüzeyi</small>
          <strong>{gorunum === 'harita' ? 'Harita merkezli keşif' : 'Arazi fotoğrafından kanıt'}</strong>
        </div>
        <div role="group" aria-label="Kanıt yüzeyi görünümü">
          <button type="button" aria-pressed={gorunum === 'harita'} onClick={() => setGorunum('harita')}>
            <Map aria-hidden="true" /> 2B harita
          </button>
          <button type="button" aria-pressed={gorunum === 'arazi'} onClick={() => setGorunum('arazi')}>
            <Image aria-hidden="true" /> Arazi kanıtı
          </button>
        </div>
      </div>

      {gorunum === 'harita' ? (
        <KonuHaritaYuzeyi bolgeKod={bolgeKod} onEtkilesimSec={onEtkilesimSec} />
      ) : (
        <BolgeSahnesi bolgeKod={bolgeKod} />
      )}
    </div>
  )
}
