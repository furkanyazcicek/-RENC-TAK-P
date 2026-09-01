import { Navigate, Route, Routes } from 'react-router-dom'
import IngilizceAnasayfa from './ingilizce/IngilizceAnasayfa'
import Baslangic from './ingilizce/Baslangic'
import SeviyeTespit from './ingilizce/SeviyeTespit'
import Sonuc from './ingilizce/Sonuc'
import YolHaritasi from './ingilizce/YolHaritasi'
import Kutuphane from './ingilizce/Kutuphane'
import Ders from './ingilizce/Ders'
import Tekrar from './ingilizce/Tekrar'
import Telaffuz from './ingilizce/Telaffuz'
import Dusunme from './ingilizce/Dusunme'
import Gelisim from './ingilizce/Gelisim'
import Yazdir from './ingilizce/Yazdir'
import Kilavuz from './ingilizce/Kilavuz'

/**
 * İNGİLİZCE ÖĞRENME KÜTÜPHANESİ — bölüm kabuğu.
 *
 * NEDEN İÇ ROTALAR BURADA: bu bölümün on üç ekranı var. Hepsi App.jsx'e
 * tek tek yazılsaydı ana yönlendirme dosyası okunmaz hâle gelirdi. App.jsx
 * yalnızca `/ingilizce/*` yolunu bu dosyaya devreder ve bütün bölüm TEK
 * bir tembel paket olarak iner — İngilizce çalışmayan öğrenci bu kodu hiç
 * indirmez.
 *
 * Alt ekranlar ayrıca bölünmedi: hepsi aynı içerik havuzunu (kelimeler,
 * dersler, madde bankası) paylaşıyor, ayrı paketlere bölmek aynı veriyi
 * birden çok kez indirmeye yol açardı.
 *
 * ROTA HARİTASI
 *   /ingilizce                  ana sayfa (bugün ne yapmalıyım)
 *   /ingilizce/baslangic        ilk kullanım ve hedef belirleme
 *   /ingilizce/seviye-tespit    uyarlanabilir seviye sınavı
 *   /ingilizce/sonuc            sonuç ve eksik analizi
 *   /ingilizce/yol-haritasi     kişisel öğrenme yolu
 *   /ingilizce/kutuphane        CEFR seviyelerine göre ders kütüphanesi
 *   /ingilizce/ders/:dersId     ders oynatıcı
 *   /ingilizce/tekrar           kelime ve aralıklı tekrar
 *   /ingilizce/telaffuz         telaffuz laboratuvarı
 *   /ingilizce/dusunme          İngilizce düşünme antrenmanları
 *   /ingilizce/gelisim          gelişim ekranı
 *   /ingilizce/yazdir/:notId    yazdırılabilir not (PDF)
 *   /ingilizce/kilavuz          çalışma kılavuzu
 */
export default function Ingilizce() {
  return (
    <Routes>
      <Route index element={<IngilizceAnasayfa />} />
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
      <Route path="*" element={<Navigate to="/ingilizce" replace />} />
    </Routes>
  )
}
