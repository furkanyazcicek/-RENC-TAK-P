/**
 * PADİŞAH PORTRESİ
 *
 * TELİF NOTU — okunmadan görsel eklenmemeli.
 * Padişah portrelerinin çoğu telifli müze/koleksiyon çekimleridir.
 * Bu yüzden sisteme rastgele internet görseli KONULMADI. Görsel
 * gelene kadar, dönemin görsel diline uygun sembolik bir pano
 * gösterilir ve bunun temsilî olduğu ekranda açıkça yazar.
 *
 * Gerçek görsel eklendiğinde tek yapılacak: veri dosyasında
 * `portrait: { kind: 'image', src: '/padisah/osman.webp', alt: '…' }`.
 * Bileşen değişmez.
 */
export default function Portre({ padisah, cikis = false }) {
  const portre = padisah.portrait ?? {}

  return (
    <figure className="pg-portre" data-cikis={cikis ? 'true' : undefined}>
      {portre.kind === 'image' && portre.src ? (
        <img src={portre.src} alt={portre.alt} loading="lazy" decoding="async" width="600" height="800" />
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
