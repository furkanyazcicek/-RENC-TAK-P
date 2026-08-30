import BolgeBasligi from '../ortak/BolgeBasligi.jsx'
import { OlcutSecimliAnahtar, TaksonBasamagiMercegi, TurkiyeBiyocesitlilikHaritasi, UcDomainAgaci } from '../etkilesimler/SiniflandirmaLaboratuvarlari.jsx'
export default function SiniflandirmaBolgesi(){return <div className="ba-bolge"><BolgeBasligi no="04" baslik="Canlılık Ağacı" aciklama="Taksonları filtrele, ölçütünü seç ve ortak ata ağını kanıtla genişlet." renk="#8bdc76" deney={4}/><UcDomainAgaci/><TaksonBasamagiMercegi/><OlcutSecimliAnahtar/><TurkiyeBiyocesitlilikHaritasi/></div>}
