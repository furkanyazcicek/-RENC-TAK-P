/**
 * AI Soru Çözüm Merkezi — fonksiyon eğrilerini noktalara çevirir.
 *
 * NİYE VAR
 * --------
 * Model bir parabolü `x^2-4*x+3` gibi bir İFADE olarak veriyor. Tahtada
 * çizmek için bu ifadenin sayısal olarak örneklenmesi gerek.
 *
 * Örnekleme İSTEMCİDE DEĞİL BURADA yapılıyor. İki sebep:
 *
 *   1. GÜVENLİK. Model çıktısındaki bir ifadeyi tarayıcıda değerlendirmek,
 *      "AI'ın ürettiği bir şeyi kullanıcının cihazında çalıştırmak"tır.
 *      Ne kadar kısıtlanırsa kısıtlansın, o kapıyı hiç açmamak daha iyi.
 *      Sunucuda ise ifade zaten `verify.js`teki kilitli mathjs örneğinden
 *      geçiyor — aynı korumayı ikinci kez yazmıyoruz.
 *
 *   2. PAKET BOYUTU. mathjs ~700 KB. Öğrencinin telefonuna indirtmeye
 *      değmez (§44).
 *
 * Sonuç: istemciye yalnızca HAZIR KOORDİNATLAR gider ve tarayıcı hiçbir
 * ifade değerlendirmez.
 */

import { sampleFunction } from './verify.js'

/** Eğri başına örnek sayısı. 160, mobil ekranda gözle pürüzsüz görünüyor. */
const SAMPLES = 160

/**
 * Tahtadaki tüm `curves` alanlarını `polylines`a çevirir.
 *
 * Yerinde (in-place) DEĞİL: yeni bir tahta nesnesi döner. Kaynak nesne
 * `compileBoard` çıktısıdır ve başka yerde de kullanılıyor olabilir.
 */
export function plotCurves(board) {
  if (!board?.steps?.length) return board

  return {
    ...board,
    steps: board.steps.map((step) => ({
      ...step,
      actions: step.actions.map(plotAction),
    })),
  }
}

function plotAction(action) {
  if (action.type !== 'graph' && action.type !== 'shape') return action
  const figure = action.figure
  if (!figure?.curves?.length) return action

  const view = figure.view ?? { xmin: -10, xmax: 10, ymin: -10, ymax: 10 }
  const step = (view.xmax - view.xmin) / SAMPLES
  const xs = []
  for (let i = 0; i <= SAMPLES; i += 1) xs.push(view.xmin + i * step)

  // Görünüm penceresinin epeyce dışına taşan noktalar SVG'yi anlamsızca
  // büyütüyor (1/x'in asimptot yakınında y = 10⁶'ya fırlaması gibi).
  // Pencerenin iki katı bir bant yeterli: eğri kenardan çıkarken doğru
  // eğimle çıkar, ama sonsuza gitmez.
  const yLimit = view.ymin - (view.ymax - view.ymin)
  const yCeiling = view.ymax + (view.ymax - view.ymin)

  const extra = []

  for (const curve of figure.curves) {
    const sampled = sampleFunction(curve.expr, xs)
    if (sampled.length < 2) continue

    // Tanımsız noktalarda ve pencere dışına taşmalarda eğri KOPARILIR.
    // Koparmazsak 1/x'in iki kolu düz bir çizgiyle birleşir ve öğrenci
    // olmayan bir davranış görür.
    let current = []
    let previousX = null

    for (const point of sampled) {
      const inside = point.y >= yLimit && point.y <= yCeiling
      const contiguous = previousX === null || Math.abs(point.x - previousX) <= step * 1.5

      if (!inside || !contiguous) {
        if (current.length >= 2) extra.push(segment(current, curve.label))
        current = []
      }
      if (inside) current.push(point)
      previousX = point.x
    }
    if (current.length >= 2) extra.push(segment(current, curve.label))
  }

  if (!extra.length) return { ...action, figure: { ...figure, curves: [] } }

  return {
    ...action,
    figure: {
      ...figure,
      // Eğriler artık noktaya döndü; ham ifadeyi istemciye göndermeye
      // gerek yok (ve göndermemek gerekiyor).
      curves: [],
      polylines: [...(figure.polylines ?? []), ...extra],
    },
  }
}

function segment(points, label) {
  return {
    points,
    closed: false,
    style: 'duz',
    label: label ?? null,
    // Eğri, elle çizilmiş doğru parçalarından ayırt edilebilsin diye
    // işaretlenir; renderer eğriyi daha ince ve marka renginde çizer.
    curve: true,
  }
}
