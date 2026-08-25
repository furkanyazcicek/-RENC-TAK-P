import { E } from '../../../data/biyoloji/etkilesimler.js'
import BolgeBasligi from '../ortak/BolgeBasligi.jsx'
import { KanGrubuCaprazlamasi, PunnettKurucu, SoyagaciDedektifi } from '../etkilesimler/KalitimLaboratuvarlari.jsx'
import TamamlayiciIstasyonlar from '../etkilesimler/TamamlayiciIstasyonlar.jsx'
export default function KalitimBolgesi(){return <div className="ba-bolge"><BolgeBasligi no="06" baslik="Kalıtım Dedektifi" aciklama="Gametleri yerleştir, olasılığı hesapla ve üç kuşaklık kanıt zinciri kur." renk="#f58caf" deney={4}/><PunnettKurucu/><SoyagaciDedektifi/><KanGrubuCaprazlamasi/><TamamlayiciIstasyonlar bolge="kalitim" haric={[E.PUNNETT_LAB,E.SOYAGACI,E.KAN_GRUBU]}/></div>}
