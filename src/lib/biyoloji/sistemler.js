const clamp = (n, a, b) => Math.min(b, Math.max(a, n))

export const homeostaziBaslat = ({ baslangic = 40, hedef = 37 } = {}) => ({ zaman:0, deger:baslangic, hedef, grafik:[{x:0,y:baslangic}], durum:'hazır' })
export function homeostaziAdim(s, dt = 1) {
  const deger = s.deger + (s.hedef - s.deger) * 0.28 * dt
  const zaman = s.zaman + dt
  return { ...s, deger, zaman, grafik:[...s.grafik,{x:zaman,y:deger}], durum:Math.abs(deger-s.hedef)<0.15?'dengeye ulaştı':'çalışıyor' }
}

export function fotosentezModeli({ isik=60, co2=60, sicaklik=25, su=60 }) {
  const sicaklikPuani = clamp(100 - Math.abs(sicaklik - 25) * 5, 0, 100)
  const faktorler = { Işık:isik, 'CO₂':co2, Sıcaklık:sicaklikPuani, Su:su }
  const [sinirlayici, puan] = Object.entries(faktorler).sort((a,b)=>a[1]-b[1])[0]
  return { hiz:clamp(puan,0,100), sinirlayici, faktorler }
}
export const fotosentezBaslat = (ayar={}) => ({ isik:65,co2:55,sicaklik:25,su:70,...ayar,zaman:0,oksijen:0,grafik:[{x:0,y:0}],durum:'hazır' })
export function fotosentezAdim(s, dt=1) { const m=fotosentezModeli(s); const zaman=s.zaman+dt; const oksijen=s.oksijen+m.hiz/18*dt; return {...s,zaman,oksijen,model:m,grafik:[...s.grafik,{x:zaman,y:oksijen}].slice(-31),durum:m.hiz<1?'koşul uygun değil':'çalışıyor'} }

export const populasyonBaslat = (ayar={}) => ({ n:25,kapasite:100,dogum:12,olum:5,goc:0,...ayar,zaman:0,grafik:[{x:0,y:ayar.n??25}],durum:'hazır' })
export function populasyonAdim(s, dt=1) { const r=(s.dogum-s.olum+s.goc)/100; const n=Math.max(0,s.n+r*s.n*(1-s.n/Math.max(1,s.kapasite))*dt); const zaman=s.zaman+dt; return {...s,n,zaman,grafik:[...s.grafik,{x:zaman,y:n}].slice(-41),durum:Math.abs(n-s.kapasite)<1?'dengeye ulaştı':'çalışıyor'} }

export const BESIN_BAGLARI = Object.freeze([['ot','tavşan'],['ot','çekirge'],['çekirge','kurbağa'],['kurbağa','yılan'],['tavşan','tilki'],['tavşan','kartal'],['yılan','kartal']])
export function besinOkuDogrula(kaynak,tuketici){ const dogru=BESIN_BAGLARI.some(([a,b])=>a===kaynak&&b===tuketici); const ters=BESIN_BAGLARI.some(([a,b])=>a===tuketici&&b===kaynak); return {dogru,mesaj:dogru?'Enerji/besin kaynağından tüketiciye doğru ok kuruldu.':ters?'Oku ters çevirmelisin: enerji yenenden yiyene aktarılır.':'Bu eğitim ağında doğrudan beslenme bağı yok.'} }
export function besinAgiAdim(etkiler, adim=1){ const katsayi={ot:{tavşan:-.5,çekirge:-.4},tavşan:{ot:-.35,tilki:.55,kartal:.3},çekirge:{ot:-.3,kurbağa:.5},kurbağa:{çekirge:-.35,yılan:.5},yılan:{kurbağa:-.3,kartal:.4},tilki:{tavşan:-.4},kartal:{tavşan:-.2,yılan:-.3}}; const yeni={...etkiler}; for(const [k,v] of Object.entries(etkiler)) for(const [h,c] of Object.entries(katsayi[k]??{})) yeni[h]=(yeni[h]??0)+v*c*(adim===1?1:.45); return Object.fromEntries(Object.entries(yeni).map(([k,v])=>[k,Math.round(clamp(v,-100,100))])) }

