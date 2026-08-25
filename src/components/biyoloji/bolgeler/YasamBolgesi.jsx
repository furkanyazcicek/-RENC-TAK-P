import BolgeBasligi from '../ortak/BolgeBasligi.jsx'
import { BilimselArastirmaLaboratuvari, CanlilikKanitiDedektifi, HomeostaziDongusu } from '../etkilesimler/YasamLaboratuvarlari.jsx'
export default function YasamBolgesi(){return <div className="ba-bolge"><BolgeBasligi no="01" baslik="Yaşamın Şifreleri" aciklama="İddiayı kanıta, değişkeni ölçüme ve dengeyi geri bildirime bağla." renk="#61d7b0" deney={3}/><BilimselArastirmaLaboratuvari/><CanlilikKanitiDedektifi/><HomeostaziDongusu/></div>}
