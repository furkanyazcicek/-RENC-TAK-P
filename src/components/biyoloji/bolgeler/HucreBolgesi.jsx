import { E } from '../../../data/biyoloji/etkilesimler.js'
import BolgeBasligi from '../ortak/BolgeBasligi.jsx'
import { HucreKarsilastirmaMercegi, OrganelIsAkisi, YuzeyHacimLaboratuvari } from '../etkilesimler/HucreLaboratuvarlari.jsx'
import ZarTasinimLaboratuvari, { TonisiteLaboratuvari } from '../etkilesimler/ZarTasinimLaboratuvari.jsx'
import TamamlayiciIstasyonlar from '../etkilesimler/TamamlayiciIstasyonlar.jsx'
export default function HucreBolgesi(){return <div className="ba-bolge"><BolgeBasligi no="03" baslik="Hücre Şehri" aciklama="Katmanları aç, organel iş akışını kur ve seçici zarın iki yanını yönet." renk="#54bdf2" deney={7}/><ZarTasinimLaboratuvari/><HucreKarsilastirmaMercegi/><OrganelIsAkisi/><YuzeyHacimLaboratuvari/><TonisiteLaboratuvari/><TamamlayiciIstasyonlar bolge="hucre" haric={[E.ZAR_LAB,E.HUCRE_MERCEK,E.ORGANEL_ROTA,E.YUZEY_HACIM,E.TONISITE_LAB]}/></div>}
