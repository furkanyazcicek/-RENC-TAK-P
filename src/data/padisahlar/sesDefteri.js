/**
 * PADİŞAH SESLERİ DEFTERİ  (otomatik üretilir — elle düzenlemeyin)
 * ==================================================================
 *
 * `npm run padisah:ses` komutu her padişahın anlatımını BİR kez seslendirir,
 * mp3'ü `public/lesson-assets/narration/padisahlar/` altına yazar ve bu
 * defteri günceller.
 *
 * NEDEN PADİŞAH BAŞINA TEK DOSYA?
 * Anlatım altı yedi paragraftan oluşuyor ama tek bir belgesel parçasıdır.
 * Paragrafları ayrı ayrı seslendirip arka arkaya eklemek, cümleler arası
 * doğal geçişi bozar ve dinleyici "yapıştırılmış" hissi alır. Bu yüzden
 * metnin tamamı tek istekte okunur; paragraf araları anlatıcıya bırakılır.
 *
 * `version` alanı anlatım metninden hesaplanır. Bir padişahın metnini
 * düzeltirsen sürüm değişir, eski kayıt kendiliğinden devre dışı kalır ve
 * yalnızca o padişah yeniden üretilir — 36'sı için tekrar para ödenmez.
 *
 * `duration` gerçek ses uzunluğudur (saniye). Anlatım şeridi bölüm
 * sınırlarını bu gerçek süreye göre ölçekler; böylece ekrandaki vurgu
 * duyulan cümleyle aynı anda gelir.
 */

export const PADISAH_SES_KOKU = '/lesson-assets/narration/padisahlar'

export const PADISAH_SES_DEFTERI = {
  'abdulaziz': { file: 'abdulaziz.1wca6ji.m4a', version: '1wca6ji', duration: 137.3 },
  'abdulmecid': { file: 'abdulmecid.y3ldja.m4a', version: 'y3ldja', duration: 147 },
  'altinci-mehmed': { file: 'altinci-mehmed.setul5.m4a', version: 'setul5', duration: 135.5 },
  'besinci-mehmed': { file: 'besinci-mehmed.1siy15e.m4a', version: '1siy15e', duration: 145.6 },
  'besinci-murad': { file: 'besinci-murad.mrpiz0.m4a', version: 'mrpiz0', duration: 126.6 },
  'birinci-abdulhamid': { file: 'birinci-abdulhamid.1pnw103.m4a', version: '1pnw103', duration: 123.8 },
  'birinci-ahmed': { file: 'birinci-ahmed.1eao69k.m4a', version: '1eao69k', duration: 109.1 },
  'birinci-mahmud': { file: 'birinci-mahmud.y467y5.m4a', version: 'y467y5', duration: 127.3 },
  'birinci-murad': { file: 'birinci-murad.thvfl1.m4a', version: 'thvfl1', duration: 122.8 },
  'birinci-mustafa': { file: 'birinci-mustafa.m3xu48.m4a', version: 'm3xu48', duration: 105.4 },
  'celebi-mehmed': { file: 'celebi-mehmed.61ktky.m4a', version: '61ktky', duration: 146 },
  'dorduncu-mehmed': { file: 'dorduncu-mehmed.13ni6pn.m4a', version: '13ni6pn', duration: 129.6 },
  'dorduncu-murad': { file: 'dorduncu-murad.1op3fyg.m4a', version: '1op3fyg', duration: 135.4 },
  'dorduncu-mustafa': { file: 'dorduncu-mustafa.qbciym.m4a', version: 'qbciym', duration: 104.9 },
  'fatih-sultan-mehmed': { file: 'fatih-sultan-mehmed.jjp81n.m4a', version: 'jjp81n', duration: 144 },
  'genc-osman': { file: 'genc-osman.evxvdt.m4a', version: 'evxvdt', duration: 119.2 },
  'ikinci-abdulhamid': { file: 'ikinci-abdulhamid.l33yu8.m4a', version: 'l33yu8', duration: 139.1 },
  'ikinci-ahmed': { file: 'ikinci-ahmed.udimj.m4a', version: 'udimj', duration: 112.7 },
  'ikinci-bayezid': { file: 'ikinci-bayezid.1s7ejhb.m4a', version: '1s7ejhb', duration: 124.2 },
  'ikinci-mahmud': { file: 'ikinci-mahmud.1mgrjje.m4a', version: '1mgrjje', duration: 156.7 },
  'ikinci-murad': { file: 'ikinci-murad.1px9mpl.m4a', version: '1px9mpl', duration: 135.8 },
  'ikinci-mustafa': { file: 'ikinci-mustafa.1uz2pgo.m4a', version: '1uz2pgo', duration: 124.4 },
  'ikinci-selim': { file: 'ikinci-selim.1gmqjdl.m4a', version: '1gmqjdl', duration: 136.7 },
  'ikinci-suleyman': { file: 'ikinci-suleyman.8zj4h6.m4a', version: '8zj4h6', duration: 115 },
  'kanuni-sultan-suleyman': { file: 'kanuni-sultan-suleyman.11krkkr.m4a', version: '11krkkr', duration: 145.3 },
  'orhan-gazi': { file: 'orhan-gazi.1l46r73.m4a', version: '1l46r73', duration: 107.3 },
  'osman-gazi': { file: 'osman-gazi.1vjm0hv.m4a', version: '1vjm0hv', duration: 120.6 },
  'sultan-ibrahim': { file: 'sultan-ibrahim.n71agp.m4a', version: 'n71agp', duration: 125.9 },
  'ucuncu-ahmed': { file: 'ucuncu-ahmed.164e7m.m4a', version: '164e7m', duration: 145.3 },
  'ucuncu-mehmed': { file: 'ucuncu-mehmed.m2f7hd.m4a', version: 'm2f7hd', duration: 123.2 },
  'ucuncu-murad': { file: 'ucuncu-murad.ibjfvu.m4a', version: 'ibjfvu', duration: 120.8 },
  'ucuncu-mustafa': { file: 'ucuncu-mustafa.66w7av.m4a', version: '66w7av', duration: 119.9 },
  'ucuncu-osman': { file: 'ucuncu-osman.1ingql1.m4a', version: '1ingql1', duration: 106.1 },
  'ucuncu-selim': { file: 'ucuncu-selim.wjl4b9.m4a', version: 'wjl4b9', duration: 149.8 },
  'yavuz-sultan-selim': { file: 'yavuz-sultan-selim.1yz006o.m4a', version: '1yz006o', duration: 130.1 },
  'yildirim-bayezid': { file: 'yildirim-bayezid.1xg3rx.m4a', version: '1xg3rx', duration: 172.9 },
}

export default PADISAH_SES_DEFTERI
