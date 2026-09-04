import { Navigate, Route, Routes } from 'react-router-dom'
import IspanyolcaAnasayfa from './ispanyolca/IspanyolcaAnasayfa'
import Baslangic from './ispanyolca/Baslangic'
import SeviyeTespit from './ispanyolca/SeviyeTespit'
import Sonuc from './ispanyolca/Sonuc'
import YolHaritasi from './ispanyolca/YolHaritasi'
import Kutuphane from './ispanyolca/Kutuphane'
import Ders from './ispanyolca/Ders'
import Tekrar from './ispanyolca/Tekrar'
import Telaffuz from './ispanyolca/Telaffuz'
import Dusunme from './ispanyolca/Dusunme'
import Gelisim from './ispanyolca/Gelisim'
import Yazdir from './ispanyolca/Yazdir'
import Kilavuz from './ispanyolca/Kilavuz'

/**
 * İSPANYOLCA ÖĞRENME KÜTÜPHANESİ — bölüm kabuğu.
 *
 * NEDEN İÇ ROTALAR BURADA: bu bölümün on üç ekranı var. Hepsi App.jsx'e
 * tek tek yazılsaydı ana yönlendirme dosyası okunmaz hâle gelirdi. App.jsx
 * yalnızca `/ispanyolca/*` yolunu bu dosyaya devreder ve bütün bölüm TEK
 * bir tembel paket olarak iner — İspanyolca çalışmayan öğrenci bu kodu hiç
 * indirmez.
 *
 * Alt ekranlar ayrıca bölünmedi: hepsi aynı içerik havuzunu (kelimeler,
 * dersler, madde bankası) paylaşıyor, ayrı paketlere bölmek aynı veriyi
 * birden çok kez indirmeye yol açardı.
 *
 * ROTA HARİTASI
 *   /ispanyolca                  ana sayfa (bugün ne yapmalıyım)
 *   /ispanyolca/baslangic        ilk kullanım ve hedef belirleme
 *   /ispanyolca/seviye-tespit    uyarlanabilir seviye sınavı
 *   /ispanyolca/sonuc            sonuç ve eksik analizi
 *   /ispanyolca/yol-haritasi     kişisel öğrenme yolu
 *   /ispanyolca/kutuphane        CEFR seviyelerine göre ders kütüphanesi
 *   /ispanyolca/ders/:dersId     ders oynatıcı
 *   /ispanyolca/tekrar           kelime ve aralıklı tekrar
 *   /ispanyolca/telaffuz         telaffuz laboratuvarı
 *   /ispanyolca/dusunme          İspanyolca düşünme antrenmanları
 *   /ispanyolca/gelisim          gelişim ekranı
 *   /ispanyolca/yazdir/:notId    yazdırılabilir not (PDF)
 *   /ispanyolca/kilavuz          çalışma kılavuzu
 */
export default function Ispanyolca() {
  return (
    <Routes>
      <Route index element={<IspanyolcaAnasayfa />} />
      <Route path="baslangic" element={<Baslangic />} />
      <Route path="seviye-tespit" element={<SeviyeTespit />} />
      <Route path="sonuc" element={<Sonuc />} />
      <Route path="yol-haritasi" element={<YolHaritasi />} />
      <Route path="kutuphane" element={<Kutuphane />} />
      <Route path="ders/:dersId" element={<Ders />} />
      <Route path="tekrar" element={<Tekrar />} />
      <Route path="telaffuz" element={<Telaffuz />} />
      <Route path="dusunme" element={<Dusunme />} />
      <Route path="gelisim" element={<Gelisim />} />
      <Route path="yazdir/:notId" element={<Yazdir />} />
      <Route path="kilavuz" element={<Kilavuz />} />
      {/* Bilinmeyen alt adres bölümün ana sayfasına düşer; öğrenci
          uygulamanın tamamen dışına atılmaz. */}
      <Route path="*" element={<Navigate to="/ispanyolca" replace />} />
    </Routes>
  )
}
