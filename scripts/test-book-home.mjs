import assert from 'node:assert/strict'
import { chapterAt, chapterProgress, coverTurn, leafTurn, pageCurve, projectPoint, PAGE_WIDTH } from '../src/components/landing/book/bookModel.js'

assert.equal(coverTurn(0), 0)
assert.equal(coverTurn(1), 1)
for (let index = 0; index < 5; index += 1) {
  assert.equal(chapterAt(chapterProgress(index)), index, `Bölüm ${index + 1} doğru seçilmeli`)
  assert.equal(leafTurn(0, index), 0)
  assert.equal(leafTurn(1, index), 1)
  let previous = 0
  for (let step = 0; step <= 100; step += 1) {
    const turn = leafTurn(step / 100, index)
    assert.ok(turn >= previous && turn <= 1, 'Sayfa açısı sürekliliği')
    previous = turn
    const curve = pageCurve(turn)
    assert.deepEqual(curve[0], { x: 0, z: 0 }, 'Sayfa cilde bağlı kalmalı')
    for (const { x, z } of curve) for (const y of [-240, 240]) {
      const screen = projectPoint(x, y, z)
      assert.ok(Number.isFinite(screen.x) && Number.isFinite(screen.y))
    }
  }
}
assert.ok(Math.abs(pageCurve(0).at(-1).x - PAGE_WIDTH) < 1e-8)
assert.ok(Math.abs(pageCurve(1).at(-1).x + PAGE_WIDTH) < 1e-8)
assert.ok(Array.from({ length: 5 }, (_, i) => leafTurn(0.58, i)).every((v) => v > 0 && v < 1), 'Beş yaprak aynı anda yelpaze oluşturmalı')
assert.equal(chapterAt(-1), 0)
assert.equal(chapterAt(2), 4)
console.log('Kitap ana sayfa: 5 bölüm, ileri/geri eşleşmesi, cilt bağlantısı, yelpaze ve 33.330 izdüşüm kontrolü geçti.')
