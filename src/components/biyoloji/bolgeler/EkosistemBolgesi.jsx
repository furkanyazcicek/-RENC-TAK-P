import { E } from '../../../data/biyoloji/etkilesimler.js'
import BolgeBasligi from '../ortak/BolgeBasligi.jsx'
import { BesinAgiKurucu, PopulasyonSimulasyonu, TrofikPiramitLaboratuvari } from '../etkilesimler/EkosistemLaboratuvarlari.jsx'
import TamamlayiciIstasyonlar from '../etkilesimler/TamamlayiciIstasyonlar.jsx'
export default function EkosistemBolgesi(){return <div className="ba-bolge"><BolgeBasligi no="08" baslik="Ekosistem Ağı" aciklama="Türleri yerleştir, enerji oklarını çiz ve popülasyon etkilerini zamanda yay." renk="#4fd0c8" deney={10}/><BesinAgiKurucu/><PopulasyonSimulasyonu/><TrofikPiramitLaboratuvari/><TamamlayiciIstasyonlar bolge="ekosistem" haric={[E.BESIN_AGI,E.POPULASYON_LAB,E.TROFIK_LAB]}/></div>}
