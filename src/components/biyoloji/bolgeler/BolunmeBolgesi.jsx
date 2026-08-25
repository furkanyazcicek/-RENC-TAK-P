import { E } from '../../../data/biyoloji/etkilesimler.js'
import BolgeBasligi from '../ortak/BolgeBasligi.jsx'
import BolunmeZamanMakinesi, { DnaGrafikKurucu } from '../etkilesimler/BolunmeZamanMakinesi.jsx'
import TamamlayiciIstasyonlar from '../etkilesimler/TamamlayiciIstasyonlar.jsx'
export default function BolunmeBolgesi(){return <div className="ba-bolge"><BolgeBasligi no="05" baslik="Bölünme Saati" aciklama="Kromozomları zamanda ilerlet, ayrılan yapıyı izle ve DNA grafiğini kendin kur." renk="#bb8eea" deney={7}/><BolunmeZamanMakinesi/><DnaGrafikKurucu/><TamamlayiciIstasyonlar bolge="bolunme" haric={[E.BOLUNME_ZAMAN,E.DNA_GRAFIK]}/></div>}
