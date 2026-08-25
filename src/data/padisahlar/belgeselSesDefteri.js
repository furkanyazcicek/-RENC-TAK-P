/**
 * BELGESEL MODU SES DEFTERİ  (otomatik üretilir — elle düzenlemeyin)
 * ==================================================================
 *
 * Keşif modunun defterinden AYRIDIR (bkz. sesDefteri.js). Sebebi iki
 * modun iki ayrı anlatım biçimi olması:
 *
 *   Keşif modu    → padişah başına TEK kayıt. Öğrenci bilgiyi kendi
 *                   hızında incelerken anlatım fonda akar.
 *   Belgesel modu → PANEL başına ayrı kayıt. Ekrandaki sahne ile
 *                   duyulan cümle aynı anda değişir; panel, kaydı
 *                   bitince ilerler. Senkron bu şekilde kurulur —
 *                   tahminle değil, sesin kendi uzunluğuyla.
 *
 * Anahtar, panel kimliğidir: `osman-gazi-kapi`, `osman-gazi-gecis` gibi.
 *
 * `version` alanı anlatım metninden hesaplanır. Bir panelin metni
 * düzeltilirse sürüm değişir, eski kayıt kendiliğinden devre dışı
 * kalır ve yalnızca o panel yeniden üretilir.
 */

export const BELGESEL_SES_KOKU = '/lesson-assets/narration/belgesel'

export const BELGESEL_SES_DEFTERI = {
  'osman-gazi-gecis': { file: 'osman-gazi-gecis.r5jbco.mp3', version: 'r5jbco', duration: 18.4 },
  'osman-gazi-kapi': { file: 'osman-gazi-kapi.1n8mhzy.mp3', version: '1n8mhzy', duration: 17.3 },
  'osman-gazi-karakter': { file: 'osman-gazi-karakter.1bode59.mp3', version: '1bode59', duration: 24.5 },
  'osman-gazi-kunye': { file: 'osman-gazi-kunye.1ptom07.mp3', version: '1ptom07', duration: 20.6 },
  'osman-gazi-olay-bagimsizlik': { file: 'osman-gazi-olay-bagimsizlik.149nvwe.mp3', version: '149nvwe', duration: 20.8 },
  'osman-gazi-olay-koyunhisar': { file: 'osman-gazi-olay-koyunhisar.dsldfz.mp3', version: 'dsldfz', duration: 21.8 },
  'osman-gazi-osym': { file: 'osman-gazi-osym.2tw0ka.mp3', version: '2tw0ka', duration: 19.1 },
  'yildirim-bayezid-gecis': { file: 'yildirim-bayezid-gecis.19xxwxx.mp3', version: '19xxwxx', duration: 23.6 },
  'yildirim-bayezid-kapi': { file: 'yildirim-bayezid-kapi.vyhcn.mp3', version: 'vyhcn', duration: 16.1 },
  'yildirim-bayezid-karakter': { file: 'yildirim-bayezid-karakter.19ns7t4.mp3', version: '19ns7t4', duration: 25.4 },
  'yildirim-bayezid-kunye': { file: 'yildirim-bayezid-kunye.1vdllwc.mp3', version: '1vdllwc', duration: 27.3 },
  'yildirim-bayezid-olay-yildirim-bayezid-1': { file: 'yildirim-bayezid-olay-yildirim-bayezid-1.1079x3a.mp3', version: '1079x3a', duration: 28.9 },
  'yildirim-bayezid-osym': { file: 'yildirim-bayezid-osym.ccsuiz.mp3', version: 'ccsuiz', duration: 19.1 },
}

export default BELGESEL_SES_DEFTERI
