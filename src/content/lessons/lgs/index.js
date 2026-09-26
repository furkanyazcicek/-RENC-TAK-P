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
import { LGS_FEN_DERSLERI } from './fen/index.js'
import { LGS_INKILAP_DERSLERI } from './inkilap/index.js'
import { LGS_MATEMATIK_DERSLERI } from './matematik/index.js'

export const LGS_LESSONS = [...LGS_TURKCE_DERSLERI, ...LGS_FEN_DERSLERI, ...LGS_INKILAP_DERSLERI, ...LGS_MATEMATIK_DERSLERI]

export { LGS_TURKCE_DERSLERI, LGS_FEN_DERSLERI, LGS_INKILAP_DERSLERI, LGS_MATEMATIK_DERSLERI }
