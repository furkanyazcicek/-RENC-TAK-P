/**
 * LGS TÜRKÇE DERS LİSTESİ
 *
 * Sıra bu dizide DEĞİL, her dersin `placement.topic` + `order` alanında
 * belirlenir. Buradaki liste yalnız "hangi dersler var" sorusunu cevaplar.
 *
 * Yeni ders eklerken:
 *   1. `src/content/lessons/lgs/turkce/<slug>.js` dosyasını yaz.
 *   2. Aşağıya ekle.
 *   3. `npm run test:lgs` ile doğrula.
 *   4. Kazanım matrisindeki durumu güncelle.
 */

import baglamdaSozcukAnlami from './baglamda-sozcuk-anlami.js'
import deyimAtasozuOzdeyis from './deyim-atasozu-ozdeyis.js'
import cumledeAnlamIliskileri from './cumlede-anlam-iliskileri.js'
import oznelNesnelBakisAcisi from './oznel-nesnel-bakis-acisi.js'
import konuAnaFikirBaslik from './konu-ana-fikir-baslik.js'
import paragrafYapisiVeAkisi from './paragraf-yapisi-ve-akisi.js'
import anlatimBicimleri from './anlatim-bicimleri.js'
import dusunceyiGelistirmeYollari from './dusunceyi-gelistirme-yollari.js'
import metinlerArasiKarsilastirma from './metinler-arasi-karsilastirma.js'

export const LGS_TURKCE_DERSLERI = [
  baglamdaSozcukAnlami,
  deyimAtasozuOzdeyis,
  cumledeAnlamIliskileri,
  oznelNesnelBakisAcisi,
  konuAnaFikirBaslik,
  paragrafYapisiVeAkisi,
  anlatimBicimleri,
  dusunceyiGelistirmeYollari,
  metinlerArasiKarsilastirma,
]
