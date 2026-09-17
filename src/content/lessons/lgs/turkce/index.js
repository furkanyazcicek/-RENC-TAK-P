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

export const LGS_TURKCE_DERSLERI = [baglamdaSozcukAnlami]
