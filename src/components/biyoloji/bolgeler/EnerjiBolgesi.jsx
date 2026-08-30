import { E } from '../../../data/biyoloji/etkilesimler.js'
import BolgeBasligi from '../ortak/BolgeBasligi.jsx'
import { AtpIsEsleme, FotosentezLaboratuvari, GlikozYolculugu, SolunumFermantasyonIstasyonu } from '../etkilesimler/EnerjiLaboratuvarlari.jsx'
import TamamlayiciIstasyonlar from '../etkilesimler/TamamlayiciIstasyonlar.jsx'
export default function EnerjiBolgesi(){return <div className="ba-bolge"><BolgeBasligi no="07" kapsam="2026 TYMM · Enerji" baslik="Enerji İstasyonu" aciklama="Sınırlayıcı faktörü çalıştır, ATP’yi işe bağla ve tek glikozu hücreye kadar izle." renk="#ffd166" deney={5}/><FotosentezLaboratuvari/><AtpIsEsleme/><GlikozYolculugu/><SolunumFermantasyonIstasyonu/><TamamlayiciIstasyonlar bolge="enerji" haric={[E.FOTOSENTEZ_LAB,E.ATP_MODEL,E.GLIKOZ_YOLCULUK,E.SOLUNUM_KARSILASTIR]}/></div>}
