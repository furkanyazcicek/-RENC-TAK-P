import BolgeBasligi from '../ortak/BolgeBasligi.jsx'
import EnzimLaboratuvari from '../etkilesimler/EnzimLaboratuvari.jsx'
import { BesinAyiraciLaboratuvari, MonomerPolimerKurucu, YapiIslevEsleme } from '../etkilesimler/MolekulLaboratuvarlari.jsx'
export default function MolekulBolgesi(){return <div className="ba-bolge"><BolgeBasligi no="02" baslik="Molekül Mutfağı" aciklama="Molekülleri kur, ayıraçla kanıtla ve enzim çarpışmalarını zamanda izle." renk="#ffba5a" deney={4}/><EnzimLaboratuvari/><BesinAyiraciLaboratuvari/><MonomerPolimerKurucu/><YapiIslevEsleme/></div>}
