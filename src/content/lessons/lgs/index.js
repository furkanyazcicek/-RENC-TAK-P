/**
 * LGS DERS KÜTÜPHANESİ — TOPLAYICI
 *
 * LGS içerikleri TYT/AYT/KPSS içeriklerinden ayrı bir ağaçta tutulur
 * (`src/content/lessons/lgs/`). Sebebi iki tanedir:
 *
 *   1. Bağlam farkı: LGS 8. sınıf ve MEB merkezî sınavıdır; TYT içerikleri
 *      ÖSYM ve lise düzeyine göre yazılmıştır. Aynı dosyayı paylaşmak
 *      öğrenciye yanlış bağlam sunar.
 *   2. Program riski: 8. sınıf 2027-2028'de Türkiye Yüzyılı Maarif
 *      Modeli'ne geçecek. O geçiş geldiğinde yalnız bu ağaç yeniden
 *      eşlenir; TYT içerikleri hiç etkilenmez.
 */

import { LGS_TURKCE_DERSLERI } from './turkce/index.js'

export const LGS_LESSONS = [...LGS_TURKCE_DERSLERI]

export { LGS_TURKCE_DERSLERI }
