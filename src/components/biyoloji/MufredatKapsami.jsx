import { CheckCircle2, Circle, ExternalLink } from 'lucide-react'
import {
  biyolojiKapsamdaMi,
  biyolojiKapsamEtiketi,
  KAPSAM_MANIFESTI,
} from '../../data/biyoloji/kapsam.js'

export default function MufredatKapsami({ kapsam, ilerleme, onSec }) {
  const uniteler = KAPSAM_MANIFESTI.filter((unite) => biyolojiKapsamdaMi(unite, kapsam))

  return (
    <div className="ba-bolge">
      <div className="ba-bolge-hero kapsam">
        <span className="ba-etiket">TYT + 2026 TYMM kapsam matrisi</span>
        <h1>Her başlık bir kanıt görevine bağlı.</h1>
        <p>
          Güncel TYT çekirdeği ile 2026 programındaki Yaşam, Organizasyon, Enerji ve
          Ekoloji temaları aynı öğrenme rotasında gösterilir. Bir sayfayı açmak değil;
          modeli kurup kontrol noktasını bitirmek tamamlanma sayılır.
        </p>
      </div>

      <div className="ba-mufredat">
        {uniteler.map((unite) => {
          const biten = unite.altBasliklar.filter((konu) => (
            ilerleme.tamamlananlar[konu.etkilesimId]
          )).length
          return (
            <section key={unite.id}>
              <header>
                <div>
                  <span className="ba-etiket">
                    {biyolojiKapsamEtiketi(unite)} · {unite.sinif}. sınıf · {unite.tema}
                  </span>
                  <h2>{unite.baslik}</h2>
                  <p>{unite.kazanim}</p>
                </div>
                <b>{biten}/{unite.altBasliklar.length}</b>
              </header>
              <div>
                {unite.altBasliklar.map((konu) => {
                  const tamam = Boolean(ilerleme.tamamlananlar[konu.etkilesimId])
                  return (
                    <button
                      key={konu.id}
                      type="button"
                      onClick={() => onSec({ bolge: unite.bolge, id: konu.etkilesimId })}
                    >
                      {tamam ? <CheckCircle2 aria-hidden="true" /> : <Circle aria-hidden="true" />}
                      <span>
                        <b>{konu.baslik}</b>
                        <small>{konu.kazanim}</small>
                      </span>
                      <em>{biyolojiKapsamEtiketi({ ...konu, uniteId: unite.id })}</em>
                      <ExternalLink aria-hidden="true" />
                    </button>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
