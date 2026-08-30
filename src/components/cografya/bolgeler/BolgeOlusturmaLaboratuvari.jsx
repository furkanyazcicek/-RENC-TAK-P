import { useMemo, useState } from 'react'
import { Layers3, MousePointer2, ShieldCheck } from 'lucide-react'
import { Mekanizma, ModulKabugu, Secim } from '../ortak/index.js'

const OLCUTLER = {
  iklim: { ad: 'Yağış benzerliği', renk: [76, 161, 139] },
  nufus: { ad: 'Nüfus yoğunluğu', renk: [214, 146, 83] },
  erisim: { ad: 'Erişilebilirlik', renk: [102, 138, 207] },
}

const DEGERLER = {
  iklim: [22, 28, 35, 68, 76, 26, 31, 41, 72, 83, 35, 39, 48, 65, 79, 57, 61, 66, 52, 45, 74, 78, 71, 43, 32],
  nufus: [18, 22, 34, 48, 62, 24, 38, 57, 76, 82, 19, 45, 72, 88, 74, 12, 33, 64, 70, 51, 8, 20, 41, 46, 30],
  erisim: [12, 24, 38, 58, 71, 19, 36, 61, 79, 86, 17, 44, 73, 91, 78, 9, 29, 55, 68, 60, 6, 18, 37, 50, 42],
}

const HUCRELER = Array.from({ length: 25 }, (_, index) => ({
  id: index,
  satir: Math.floor(index / 5),
  sutun: index % 5,
  iklim: DEGERLER.iklim[index],
  nufus: DEGERLER.nufus[index],
  erisim: DEGERLER.erisim[index],
}))

function bilesenSayisi(secili) {
  const kalan = new Set(secili)
  let sayi = 0
  while (kalan.size) {
    sayi += 1
    const ilk = kalan.values().next().value
    const kuyruk = [ilk]
    kalan.delete(ilk)
    while (kuyruk.length) {
      const id = kuyruk.shift()
      const satir = Math.floor(id / 5)
      const sutun = id % 5
      ;[[satir - 1, sutun], [satir + 1, sutun], [satir, sutun - 1], [satir, sutun + 1]].forEach(([y, x]) => {
        const komsu = y * 5 + x
        if (y >= 0 && y < 5 && x >= 0 && x < 5 && kalan.has(komsu)) {
          kalan.delete(komsu)
          kuyruk.push(komsu)
        }
      })
    }
  }
  return sayi
}

export default function BolgeOlusturmaLaboratuvari() {
  const [olcut, setOlcut] = useState('iklim')
  const [secili, setSecili] = useState([2, 6, 7, 11, 12])

  const ozet = useMemo(() => {
    if (!secili.length) return { ortalama: 0, tutarlilik: 0, bilesen: 0, cevre: 0 }
    const degerler = secili.map((id) => HUCRELER[id][olcut])
    const ortalama = degerler.reduce((toplam, deger) => toplam + deger, 0) / degerler.length
    const sapma = degerler.reduce((toplam, deger) => toplam + Math.abs(deger - ortalama), 0) / degerler.length
    const secim = new Set(secili)
    const cevre = secili.reduce((toplam, id) => {
      const y = Math.floor(id / 5)
      const x = id % 5
      return toplam + [[y - 1, x], [y + 1, x], [y, x - 1], [y, x + 1]]
        .filter(([sy, sx]) => sy < 0 || sy >= 5 || sx < 0 || sx >= 5 || !secim.has(sy * 5 + sx)).length
    }, 0)
    return {
      ortalama: Math.round(ortalama),
      tutarlilik: Math.max(0, Math.round(100 - sapma * 2.4)),
      bilesen: bilesenSayisi(secili),
      cevre,
    }
  }, [olcut, secili])

  const sec = (id, kanitla) => {
    setSecili((eski) => eski.includes(id) ? eski.filter((kayit) => kayit !== id) : [...eski, id])
    kanitla()
  }

  return (
    <ModulKabugu
      id="bolge-olustur"
      bolge="sistemler"
      baslik="Kriter değişince bölge değişir"
      aciklama="Şematik hücreleri bir ölçüte göre grupla; sınırın veride hazır bulunmadığını, seçilen kritere göre üretildiğini test et."
      yanilgiId="determinist"
      tahmin={{ soru: 'İklim bölgesi ile ulaşım bölgesinin sınırları zorunlu olarak çakışır mı?', secenekler: ['Evet, bütün bölgeler aynıdır', 'Hayır, seçilen ölçüt sınırı değiştirir'] }}
      kontrol={{ soru: 'Seçimin iki kopuk parçaya ayrılması hangi kanıtı zayıflatır?', secenekler: ['Bölgenin mekânsal sürekliliğini', 'Hücrelerin veri değerini', 'Haritanın kuzey yönünü'], cevap: 0, aciklama: 'Aynı ölçüte benzeyen alanlar seçilse de kopukluk, kurulan bölgenin sürekliliğini zayıflatabilir.' }}
      transfer={{ soru: 'Bir hastanenin günlük hizmet bölgesi için en uygun ana ölçüt hangisidir?', secenekler: ['Yağış benzerliği', 'Ulaşım süresi ve hasta akışı', 'Yalnız mutlak konum'], cevap: 1, aciklama: 'İşlevsel bölgeler benzer özellikten çok hareket, erişim ve bağlantıyla kurulur.' }}
    >
      {({ kanitla }) => (
        <div className="ca-bolge-lab">
          <div className="ca-bolge-lab-kontrol">
            <span><Layers3 aria-hidden="true" /> Bölge kurma ölçütü</span>
            <Secim
              etiket="Karşılaştırılan veri"
              deger={olcut}
              secenekler={Object.entries(OLCUTLER).map(([value, veri]) => ({ value, label: veri.ad }))}
              onChange={(deger) => { setOlcut(deger); kanitla() }}
            />
            <div className="ca-bolge-lab-metrik">
              <span><strong>{secili.length}</strong> hücre</span>
              <span><strong>{ozet.ortalama}</strong> ortalama</span>
              <span><strong>%{ozet.tutarlilik}</strong> benzerlik</span>
              <span><strong>{ozet.bilesen}</strong> parça</span>
            </div>
            <Mekanizma tur={ozet.bilesen === 1 && secili.length >= 3 ? 'olumlu' : 'uyari'}>
              {ozet.bilesen === 1 && secili.length >= 3
                ? `Seçim tek parça; ${OLCUTLER[olcut].ad.toLocaleLowerCase('tr-TR')} açısından tutarlılık %${ozet.tutarlilik}.`
                : 'En az üç komşu hücre seçerek mekânsal olarak süreklilik gösteren bir bölge kur.'}
            </Mekanizma>
          </div>

          <figure className="ca-bolge-lab-harita">
            <figcaption>
              <span><MousePointer2 aria-hidden="true" /> Hücrelere dokunarak sınırı kur</span>
              <em>Şematik öğretim modeli · gerçek coğrafi sınır değildir</em>
            </figcaption>
            <div className="ca-bolge-hucreler" role="group" aria-label={`${OLCUTLER[olcut].ad} hücre haritası`}>
              {HUCRELER.map((hucre) => {
                const etkin = secili.includes(hucre.id)
                const [r, g, b] = OLCUTLER[olcut].renk
                return (
                  <button
                    type="button"
                    key={hucre.id}
                    aria-pressed={etkin}
                    aria-label={`${hucre.satir + 1}. satır ${hucre.sutun + 1}. sütun, değer ${hucre[olcut]}`}
                    style={{ '--hucre-renk': `rgba(${r},${g},${b},${0.14 + hucre[olcut] / 125})` }}
                    onClick={() => sec(hucre.id, kanitla)}
                  >
                    <span>{hucre[olcut]}</span>
                  </button>
                )
              })}
            </div>
            <div className="ca-bolge-lab-lejant">
              <span>Düşük</span><i /><span>Yüksek</span>
              <strong><ShieldCheck aria-hidden="true" /> Çevre: {ozet.cevre} birim</strong>
            </div>
          </figure>
        </div>
      )}
    </ModulKabugu>
  )
}
