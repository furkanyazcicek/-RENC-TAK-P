/**
 * Fizik Atlası — Metin vurgusu
 * ==================================================================
 * İçerik dosyalarında **kalın** yazmak, JSX etiketi yazmaktan çok daha
 * okunaklıdır. Bu küçük dönüştürücü onu gerçek vurguya çevirir.
 *
 * Kendi dosyasında duruyor çünkü hem `ModulKabugu` hem `Ogrenme` bunu
 * kullanıyor; birinin diğerinden almasi döngüsel içe aktarma yaratırdı
 * (modül ilk yüklenirken tanımsız gelme riski).
 *
 * Güvenlik notu: HTML enjekte edilmez, React düğümü üretilir.
 */
export function vurguyuIsle(metin) {
  if (typeof metin !== 'string') return metin
  const parcalar = metin.split(/(\*\*[^*]+\*\*)/g)
  return parcalar.map((p, i) => (
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i} style={{ color: 'rgb(var(--fa-metin))', fontWeight: 650 }}>{p.slice(2, -2)}</strong>
      : <span key={i}>{p}</span>
  ))
}

export default vurguyuIsle
