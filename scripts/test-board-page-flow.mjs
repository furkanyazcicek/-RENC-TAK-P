/**
 * TAHTANIN DİKEY SAYFA AKIŞI VE TAHTA ODAK MODU TESTİ
 *
 *   npm run test:tahta-akisi
 *
 * Neden bu testler var:
 *
 *   1. ÇİZİM YANLIŞ SAYFAYA YAZILMAMALI. Belge akışında ekranda iki sayfa
 *      birden görünebiliyor. Kaydırma miktarı, sayfa boşluğu ve üstteki
 *      sayfaların yüksekliği koordinat hesabını bozarsa öğretmenin yazısı
 *      komşu sayfaya düşer — ve bu ancak derste fark edilir.
 *
 *   2. PDF SAYFALARININ ORANI KORUNMALI. Dikey akış "her sayfayı aynı
 *      dikey ölçüye çevirmek" DEĞİLDİR; her sayfa kendi yüksekliğiyle
 *      alt alta dizilir.
 *
 *   3. İVME GERÇEK OLMALI. `scroll-behavior: smooth` parmağın hızını
 *      taşımaz. Bırakıldıktan sonra hareketin sönümlenerek gerçekten
 *      durduğu burada ölçülür.
 *
 *   4. YATAY HAREKET SAYFAYI SAVURMAMALI. Normal ölçekte belge yatayda
 *      ortalanır; yalnız yakınlaştırılmış sayfada yatay konumlandırma açılır.
 *
 * Gerçek cihaz ve tarayıcı gerekmez: hesaplar saf fonksiyon olarak ayrıldı.
 */
import {
  DURMA_HIZI,
  EDGE_PAD,
  PAGE_GAP,
  boxForIndex,
  buildPageLayout,
  canPanHorizontally,
  clampView,
  createVelocityTracker,
  decayVelocity,
  dominantPage,
  easeOutCubic,
  glideDuration,
  glideFinished,
  pageAtDocY,
  scrollOffsetForPage,
  shouldGlide,
  visiblePages,
} from '../src/lib/liveLesson/board/pageFlow.js'
import {
  etkinAlan,
  KISA_EKRAN_ESIGI,
  MASAUSTU_ESIGI,
  odakDurumu,
  odakVarsayilani,
  telefonDuzeni,
} from '../src/lib/liveLesson/boardFocus.js'

let pass = 0
let fail = 0
function check(name, cond, extra = '') {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}`)
  } else {
    fail++
    console.log(`  ✗ ${name}${extra ? ` — ${extra}` : ''}`)
  }
}

const GENISLIK = 1600
const BOS = (i) => ({ index: i, background: { kind: 'blank' }, items: [] })
const olcuBos = () => ({ w: GENISLIK, h: 1000 })

/** Gerçek `pageSize` davranışı: genişlik sabit, yükseklik PDF oranından. */
function olcu(page) {
  const bg = page?.background
  if (bg?.kind === 'pdf' && bg.aspect > 0) return { w: GENISLIK, h: Math.round(GENISLIK / bg.aspect) }
  return olcuBos()
}

console.log('\n=== 1) BEŞ BOŞ SAYFA ALT ALTA DİZİLİR ===')
{
  const pages = [0, 1, 2, 3, 4].map(BOS)
  const layout = buildPageLayout(pages, olcu)
  check('beş kutu üretildi', layout.boxes.length === 5)
  check('ilk sayfa en üstte', layout.boxes[0].y === 0)
  check(
    'sayfalar arasında boşluk var',
    layout.boxes[1].y === 1000 + PAGE_GAP,
    `beklenen ${1000 + PAGE_GAP}, gelen ${layout.boxes[1].y}`
  )
  check(
    'belge yüksekliği son boşluğu saymaz',
    layout.height === 5 * 1000 + 4 * PAGE_GAP,
    `gelen ${layout.height}`
  )
  check('genişlik sabit', layout.width === GENISLIK)
}

console.log('\n=== 2) PDF SAYFALARININ ORANI BOZULMAZ ===')
{
  // A4 dikey (0.707) ve yatay slayt (1.777) aynı belgede.
  const pages = [
    { index: 0, background: { kind: 'pdf', url: 'a', page: 1, aspect: 0.707 }, items: [] },
    { index: 1, background: { kind: 'pdf', url: 'a', page: 2, aspect: 1.777 }, items: [] },
    BOS(2),
  ]
  const layout = buildPageLayout(pages, olcu)
  check('dikey sayfa uzun kalır', layout.boxes[0].h === Math.round(GENISLIK / 0.707))
  check('yatay sayfa kısa kalır', layout.boxes[1].h === Math.round(GENISLIK / 1.777))
  check('iki sayfa aynı yüksekliğe ZORLANMADI', layout.boxes[0].h !== layout.boxes[1].h)
  check(
    'ikinci sayfa birincinin altından başlar',
    layout.boxes[1].y === layout.boxes[0].h + PAGE_GAP
  )
  check('boş sayfa da akışa katılır', layout.boxes[2].h === 1000)
}

console.log('\n=== 3) ÇİZİM DOĞRU SAYFAYA YAZILIR ===')
{
  const pages = [0, 1, 2, 3, 4].map(BOS)
  const layout = buildPageLayout(pages, olcu)

  // Ekran → belge → sayfa dönüşümünün aynısı (LessonBoard.toBoard).
  const rect = { left: 0, top: 0, width: 1000, height: 600 }
  const sayfaNoktasi = (view, clientX, clientY) => {
    const docX = (clientX - rect.left - view.tx) / view.scale
    const docY = (clientY - rect.top - view.ty) / view.scale
    const box = pageAtDocY(layout, docY)
    return { page: box.index, x: docX, y: docY - box.y }
  }

  const scale = 0.6
  // 4. sayfanın (index 3) üstü ekranın üstünde olacak şekilde kaydır.
  const ty = scrollOffsetForPage(layout, 3, scale)
  const view = { scale, tx: 0, ty }
  const p = sayfaNoktasi(view, 300, EDGE_PAD + 120)
  check('kaydırılmış belgede doğru sayfa bulunur', p.page === 3, `gelen ${p.page}`)
  check('sayfa içi y sıfırdan başlar', Math.round(p.y) === Math.round(120 / scale), `gelen ${p.y}`)

  // Aynı EKRAN noktası, farklı kaydırma konumunda BAŞKA sayfaya düşer;
  // ama sayfa içi koordinat aynı kalır. Kaydırma hesabı bozmuyor demektir.
  const view2 = { scale, tx: 0, ty: scrollOffsetForPage(layout, 1, scale) }
  const p2 = sayfaNoktasi(view2, 300, EDGE_PAD + 120)
  check('başka sayfaya kaydırınca sayfa değişir', p2.page === 1)
  check('sayfa içi koordinat değişmez', Math.round(p2.y) === Math.round(p.y))
  check('yatay koordinat kaydırmadan etkilenmez', Math.round(p2.x) === Math.round(p.x))

  // Sayfa ARASINDAKİ boşluk: çizim en yakın sayfaya bağlanır, kaybolmaz.
  const bosluktaY = layout.boxes[0].h + PAGE_GAP / 4
  const bosluk = pageAtDocY(layout, bosluktaY)
  check('sayfa arasındaki nokta ilk sayfaya bağlanır', bosluk.index === 0)
  const bosluktaY2 = layout.boxes[0].h + PAGE_GAP * 0.8
  check('boşluğun alt yarısı sonraki sayfaya bağlanır', pageAtDocY(layout, bosluktaY2).index === 1)
  check('belgenin çok altı son sayfaya bağlanır', pageAtDocY(layout, 999999).index === 4)
  check('belgenin üstü ilk sayfaya bağlanır', pageAtDocY(layout, -500).index === 0)
}

console.log('\n=== 4) ETKİN SAYFA = EKRANDA EN ÇOK GÖRÜNEN SAYFA ===')
{
  const pages = [0, 1, 2].map(BOS)
  const layout = buildPageLayout(pages, olcu)
  const rect = { left: 0, top: 0, width: 1000, height: 600 }
  const scale = 0.5 // sayfa ekranda 500 px

  // 1. sayfanın tamamı görünüyor
  check('başta 1. sayfa etkin', dominantPage(layout, { scale, tx: 0, ty: 0 }, rect).index === 0)

  // 2. sayfanın üstüne kaydır
  const ty2 = scrollOffsetForPage(layout, 1, scale)
  check('2. sayfaya kayınca o etkin olur', dominantPage(layout, { scale, tx: 0, ty: ty2 }, rect).index === 1)

  // Tam sınırda: 1. sayfadan 100 px, 2. sayfadan çok daha fazlası görünüyor
  const sinir = -(layout.boxes[1].y * scale) + 100
  check('çoğunluk hangi sayfadaysa o etkin', dominantPage(layout, { scale, tx: 0, ty: sinir }, rect).index === 1)

  // Görünür sayfa kırpması: 40 sayfalık belgede hepsi çizilmemeli
  const uzun = buildPageLayout(Array.from({ length: 40 }, (_, i) => BOS(i)), olcu)
  const gorunen = visiblePages(uzun, { scale, tx: 0, ty: 0 }, rect)
  check('yalnız görünür sayfalar çizilir', gorunen.length > 0 && gorunen.length < 8, `gelen ${gorunen.length}`)
  check('görünürler baştan başlar', gorunen[0].index === 0)
}

console.log('\n=== 5) SINIRLAR: YATAY SAVRULMA YOK ===')
{
  const pages = [0, 1].map(BOS)
  const layout = buildPageLayout(pages, olcu)
  const rect = { left: 0, top: 0, width: 1000, height: 600 }
  const scale = (rect.width - EDGE_PAD * 2) / GENISLIK // genişliğe sığdır

  check('normal ölçekte yatay kaydırma kapalı', canPanHorizontally(layout, rect, scale) === false)
  const yana = clampView(layout, rect, { scale, tx: 400, ty: 0 }, {})
  check('yatay itiş yok sayılır (ortalanır)', Math.abs(yana.tx - (rect.width - GENISLIK * scale) / 2) < 0.01)

  const yakin = scale * 3
  check('yakınlaştırınca yatay kaydırma açılır', canPanHorizontally(layout, rect, yakin) === true)
  const yanaYakin = clampView(layout, rect, { scale: yakin, tx: -200, ty: 0 }, {})
  check('yakınlaştırılmış sayfada yatay konumlandırma korunur', Math.round(yanaYakin.tx) === -200)

  const cokAsagi = clampView(layout, rect, { scale, tx: 0, ty: -999999 }, {})
  const enAlt = rect.height - layout.height * scale - EDGE_PAD
  check('belgenin altından öteye geçilemez', Math.round(cokAsagi.ty) === Math.round(enAlt), `gelen ${cokAsagi.ty}`)
  const cokYukari = clampView(layout, rect, { scale, tx: 0, ty: 999999 }, {})
  check('belgenin üstünden öteye geçilemez', Math.round(cokYukari.ty) === EDGE_PAD)

  // Tek kısa sayfa ekrana sığıyorsa üstten hizalanır (defter gibi).
  const tek = buildPageLayout([BOS(0)], () => ({ w: GENISLIK, h: 200 }))
  const kisa = clampView(tek, rect, { scale: 0.5, tx: 0, ty: 50 }, {})
  check('ekrana sığan belge üstten hizalanır', kisa.ty === EDGE_PAD)
}

console.log('\n=== 6) SAYFAYA KAYDIRMA ===')
{
  const pages = [0, 1, 2].map(BOS)
  const layout = buildPageLayout(pages, olcu)
  const scale = 0.5
  check('ilk sayfa için kaydırma payı kadar', scrollOffsetForPage(layout, 0, scale) === EDGE_PAD)
  check(
    '3. sayfanın üstü ekranın üstüne gelir',
    scrollOffsetForPage(layout, 2, scale) === EDGE_PAD - layout.boxes[2].y * scale
  )
  check('olmayan sayfa istenirse çökmez', scrollOffsetForPage(layout, 99, scale) === EDGE_PAD)
  check('kutu kimlikle bulunur', boxForIndex(layout, 1).index === 1)
}

console.log('\n=== 7) İVME: BIRAKINCA SÜRER VE GERÇEKTEN DURUR ===')
{
  const izleyici = createVelocityTracker()
  // Parmak 120 ms'de 300 px yukarı kaydı → 2.5 px/ms
  let t = 1000
  let y = 500
  izleyici.sample(t, 0, y)
  for (let i = 0; i < 12; i++) {
    t += 10
    y -= 25
    izleyici.sample(t, 0, y)
  }
  const { vy } = izleyici.velocity()
  check('hız ölçüldü', vy < -1, `gelen ${vy}`)
  check('ivme başlatmaya değer', shouldGlide(vy) === true)

  // Sönümleme: 16.7 ms'de bir sabit oranda azalır ve MESAFE sınırlıdır.
  let hiz = vy
  let mesafe = 0
  let kare = 0
  while (!glideFinished(hiz) && kare < 2000) {
    mesafe += hiz * 16.6667
    hiz = decayVelocity(hiz, 16.6667)
    kare++
  }
  check('ivme sonlu sayıda karede durur', kare < 200, `gelen ${kare} kare`)
  check('ivme gerçek bir mesafe kat eder', Math.abs(mesafe) > 200, `gelen ${Math.abs(mesafe)}`)
  check('ivme sonsuza gitmez', Math.abs(mesafe) < 4000, `gelen ${Math.abs(mesafe)}`)
  check('durma hızının altına iner', Math.abs(hiz) < DURMA_HIZI)

  // Kare atlansa da sonuç aynı: sönümleme geçen SÜREYE bağlı.
  const KARE = 1000 / 60
  const tekAdim = decayVelocity(1, KARE * 2)
  const ikiAdim = decayVelocity(decayVelocity(1, KARE), KARE)
  check(
    'sönümleme kare sayısına değil süreye bağlı',
    Math.abs(tekAdim - ikiAdim) < 1e-9,
    `tek ${tekAdim}, iki ${ikiAdim}`
  )

  // Yavaş sürükleme ivme başlatmaz: parmak durduğu yerde kalsın.
  const yavas = createVelocityTracker()
  yavas.sample(0, 0, 0)
  yavas.sample(100, 0, -3)
  check('yavaş harekette ivme yok', shouldGlide(yavas.velocity().vy) === false)

  // Bozuk zaman damgası ekranı fırlatmasın.
  const bozuk = createVelocityTracker()
  bozuk.sample(0, 0, 0)
  bozuk.sample(0, 0, -900)
  check('aynı zaman damgasında hız sıfır', bozuk.velocity().vy === 0)
}

console.log('\n=== 8) PROGRAMATİK GEÇİŞ ===')
{
  check('sıfır mesafede geçiş yok', glideDuration(0) === 0)
  check('kısa geçiş kısa sürer', glideDuration(200) < 300)
  check('uzun geçiş de yarım saniyeyi aşmaz', glideDuration(9000) <= 520)
  check('eğri başta hızlı', easeOutCubic(0.25) > 0.25)
  check('eğri sonda oturur', Math.abs(easeOutCubic(1) - 1) < 1e-9)
  check('eğri sınır dışını kırpar', easeOutCubic(-5) === 0 && easeOutCubic(5) === 1)
}

console.log('\n=== 9) TAHTA ODAK MODU VARSAYILANI ===')
{
  check('1024×768 yatay tablette varsayılan AÇIK', odakVarsayilani(1024, 768) === true)
  check('768 dikey tablette varsayılan AÇIK', odakVarsayilani(768, 1024) === true)
  check('1180 tablette varsayılan AÇIK', odakVarsayilani(1180, 820) === true)
  check('1280×900 bilgisayarda varsayılan AÇIK', odakVarsayilani(MASAUSTU_ESIGI, 900) === true)
  check('1440×900 masaüstünde varsayılan KAPALI', odakVarsayilani(1440, 900) === false)
  check('1440×720 kısa masaüstünde varsayılan AÇIK', odakVarsayilani(1440, KISA_EKRAN_ESIGI - 80) === true)
  check('büyük yazı 1440 px alanı etkin olarak daraltır', Math.round(etkinAlan(1440, 20)) === 1152)
  check('1440 masaüstü büyük yazıyla odak görünümünü açar', odakVarsayilani(1440, 900, 20) === true)
  check('1920 geniş ekran büyük yazıyla normal kalır', odakVarsayilani(1920, 1080, 20) === false)

  check('375 telefon sayılır', telefonDuzeni(375) === true)
  check('768 telefon sayılmaz', telefonDuzeni(768) === false)

  check('telefonda odak modu hiç açılmaz', odakDurumu(375, true) === false)
  check('kullanıcı kapattıysa tablette de kapalı', odakDurumu(1024, false) === false)
  check('kullanıcı açtıysa masaüstünde de açık', odakDurumu(1440, true) === true)
  check('tercih yoksa ekran ölçüsü karar verir', odakDurumu(1024, null) === true)
  check('tercih yoksa geniş masaüstü kapalı kalır', odakDurumu(1440, null, 900, 16) === false)
}

console.log(`\n${fail === 0 ? '✅' : '❌'}  ${pass} geçti, ${fail} kaldı\n`)
process.exit(fail === 0 ? 0 : 1)
