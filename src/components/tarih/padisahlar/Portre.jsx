/**
 * PADİŞAH PORTRESİ
 *
 * Görseller eğitim amacıyla üretilmiş temsilî illüstrasyonlardır;
 * çağdaş portre veya tarihî belge gibi sunulmaz. Görsel yüklenemezse
 * sembolik monogram pano otomatik olarak görünür kalır.
 */
export default function Portre({ padisah, cikis = false }) {
  const portre = padisah.portrait ?? {}

  return (
    <figure className="pg-portre" data-cikis={cikis ? 'true' : undefined}>
      {portre.kind === 'image' && portre.src ? (
        <>
          <div className="pg-portre-monogram pg-portre-yedek" aria-hidden="true">
            <span className="pg-portre-tugra">{portre.tugra ?? padisah.order}</span>
            <span className="pg-portre-ad">{portre.isim ?? padisah.name}</span>
          </div>
          <img
            src={portre.src}
            alt={portre.alt}
            loading="eager"
            decoding="async"
            width="720"
            height="960"
            onError={(olay) => { olay.currentTarget.hidden = true }}
          />
          <figcaption className="pg-portre-etiket">Temsilî illüstrasyon</figcaption>
        </>
      ) : (
        <div className="pg-portre-monogram">
          <span className="pg-portre-tugra" aria-hidden="true">{portre.tugra ?? '☾'}</span>
          <span className="pg-portre-ad">{portre.isim ?? padisah.name}</span>
          <span className="pg-portre-not">
            Temsilî pano. Bu dönemin çağdaş portresi bulunmadığından
            telifli bir görsel kullanılmadı.
          </span>
          <span className="sr-only">{portre.alt}</span>
        </div>
      )}
    </figure>
  )
}
