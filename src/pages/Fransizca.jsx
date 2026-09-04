import { Navigate, Route, Routes } from 'react-router-dom'
import FransizcaAnasayfa from './fransizca/FransizcaAnasayfa'
import Baslangic from './fransizca/Baslangic'
import SeviyeTespit from './fransizca/SeviyeTespit'
import Sonuc from './fransizca/Sonuc'
import YolHaritasi from './fransizca/YolHaritasi'
import Kutuphane from './fransizca/Kutuphane'
import Ders from './fransizca/Ders'
import Tekrar from './fransizca/Tekrar'
import Kartlar from './fransizca/Kartlar'
import Telaffuz from './fransizca/Telaffuz'
import Dusunme from './fransizca/Dusunme'
import Gelisim from './fransizca/Gelisim'
import Yazdir from './fransizca/Yazdir'
import Kilavuz from './fransizca/Kilavuz'

/**
 * FRANSIZCA ÖĞRENME KÜTÜPHANESİ — bölüm kabuğu.
 *
 * NEDEN İÇ ROTALAR BURADA: bu bölümün on üç ekranı var. Hepsi App.jsx'e
 * tek tek yazılsaydı ana yönlendirme dosyası okunmaz hâle gelirdi. App.jsx
 * yalnızca `/fransizca/*` yolunu bu dosyaya devreder ve bütün bölüm TEK
 * bir tembel paket olarak iner — Fransızca çalışmayan öğrenci bu kodu hiç
 * indirmez.
 *
 * Alt ekranlar ayrıca bölünmedi: hepsi aynı içerik havuzunu (kelimeler,
 * dersler, madde bankası) paylaşıyor, ayrı paketlere bölmek aynı veriyi
 * birden çok kez indirmeye yol açardı.
 *
 * ROTA HARİTASI
 *   /fransizca                  ana sayfa (bugün ne yapmalıyım)
 *   /fransizca/baslangic        ilk kullanım ve hedef belirleme
 *   /fransizca/seviye-tespit    uyarlanabilir seviye sınavı
 *   /fransizca/sonuc            sonuç ve eksik analizi
 *   /fransizca/yol-haritasi     kişisel öğrenme yolu
 *   /fransizca/kutuphane        CEFR seviyelerine göre ders kütüphanesi
 *   /fransizca/ders/:dersId     ders oynatıcı
 *   /fransizca/tekrar           kelime ve aralıklı tekrar
 *   /fransizca/kartlar          ilgi alanına göre dil kartları
 *   /fransizca/telaffuz         telaffuz laboratuvarı
 *   /fransizca/dusunme          Fransızca düşünme antrenmanları
 *   /fransizca/gelisim          gelişim ekranı
 *   /fransizca/yazdir/:notId    yazdırılabilir not (PDF)
 *   /fransizca/kilavuz          çalışma kılavuzu
 */
export default function Fransizca() {
  return (
    <Routes>
      <Route index element={<FransizcaAnasayfa />} />
      <Route path="baslangic" element={<Baslangic />} />
      <Route path="seviye-tespit" element={<SeviyeTespit />} />
      <Route path="sonuc" element={<Sonuc />} />
      <Route path="yol-haritasi" element={<YolHaritasi />} />
      <Route path="kutuphane" element={<Kutuphane />} />
      <Route path="ders/:dersId" element={<Ders />} />
      <Route path="tekrar" element={<Tekrar />} />
      <Route path="kartlar" element={<Kartlar />} />
      <Route path="telaffuz" element={<Telaffuz />} />
      <Route path="dusunme" element={<Dusunme />} />
      <Route path="gelisim" element={<Gelisim />} />
      <Route path="yazdir/:notId" element={<Yazdir />} />
      <Route path="kilavuz" element={<Kilavuz />} />
      {/* Bilinmeyen alt adres bölümün ana sayfasına düşer; öğrenci
          uygulamanın tamamen dışına atılmaz. */}
      <Route path="*" element={<Navigate to="/fransizca" replace />} />
    </Routes>
  )
}
