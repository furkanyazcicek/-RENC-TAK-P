import { Navigate, Route, Routes } from 'react-router-dom'
import AlmancaAnasayfa from './almanca/AlmancaAnasayfa'
import Baslangic from './almanca/Baslangic'
import SeviyeTespit from './almanca/SeviyeTespit'
import Sonuc from './almanca/Sonuc'
import YolHaritasi from './almanca/YolHaritasi'
import Kutuphane from './almanca/Kutuphane'
import Ders from './almanca/Ders'
import Tekrar from './almanca/Tekrar'
import Telaffuz from './almanca/Telaffuz'
import Dusunme from './almanca/Dusunme'
import Gelisim from './almanca/Gelisim'
import Yazdir from './almanca/Yazdir'
import Kilavuz from './almanca/Kilavuz'

/**
 * ALMANCA ÖĞRENME KÜTÜPHANESİ — bölüm kabuğu.
 *
 * NEDEN İÇ ROTALAR BURADA: bu bölümün on üç ekranı var. Hepsi App.jsx'e
 * tek tek yazılsaydı ana yönlendirme dosyası okunmaz hâle gelirdi. App.jsx
 * yalnızca `/almanca/*` yolunu bu dosyaya devreder ve bütün bölüm TEK
 * bir tembel paket olarak iner — Almanca çalışmayan öğrenci bu kodu hiç
 * indirmez.
 *
 * Alt ekranlar ayrıca bölünmedi: hepsi aynı içerik havuzunu (kelimeler,
 * dersler, madde bankası) paylaşıyor, ayrı paketlere bölmek aynı veriyi
 * birden çok kez indirmeye yol açardı.
 *
 * ROTA HARİTASI
 *   /almanca                  ana sayfa (bugün ne yapmalıyım)
 *   /almanca/baslangic        ilk kullanım ve hedef belirleme
 *   /almanca/seviye-tespit    uyarlanabilir seviye sınavı
 *   /almanca/sonuc            sonuç ve eksik analizi
 *   /almanca/yol-haritasi     kişisel öğrenme yolu
 *   /almanca/kutuphane        CEFR seviyelerine göre ders kütüphanesi
 *   /almanca/ders/:dersId     ders oynatıcı
 *   /almanca/tekrar           kelime ve aralıklı tekrar
 *   /almanca/telaffuz         telaffuz laboratuvarı
 *   /almanca/dusunme          Almanca düşünme antrenmanları
 *   /almanca/gelisim          gelişim ekranı
 *   /almanca/yazdir/:notId    yazdırılabilir not (PDF)
 *   /almanca/kilavuz          çalışma kılavuzu
 */
export default function Almanca() {
  return (
    <Routes>
      <Route index element={<AlmancaAnasayfa />} />
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
      <Route path="*" element={<Navigate to="/almanca" replace />} />
    </Routes>
  )
}
