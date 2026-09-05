import assert from 'node:assert/strict'
import { chapterAt, chapterProgress, coverTurn, leafTurn, pageCurve, projectPoint, PAGE_WIDTH } from '../src/components/landing/book/bookModel.js'

assert.equal(coverTurn(0), 0)
assert.equal(coverTurn(1), 1)
for (let index = 0; index < 5; index += 1) {
  const progress = chapterProgress(index)
  assert.equal(chapterAt(progress), index, `Bölüm ${index + 1} doğru seçilmeli`)
  for (let leafIndex = 0; leafIndex < 5; leafIndex += 1) {
    assert.equal(
      leafTurn(progress, leafIndex),
      leafIndex < index ? 1 : 0,
      `Bölüm ${index + 1} durağında sayfalar tamamen açık olmalı`,
    )
  }
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
for (let step = 0; step <= 100; step += 1) {
  const movingLeaves = Array.from({ length: 5 }, (_, i) => leafTurn(step / 100, i)).filter((value) => value > 0 && value < 1)
  assert.ok(movingLeaves.length <= 1, 'Bir anda yalnızca hedefe giden yaprak dönmeli')
}
assert.equal(chapterAt(-1), 0)
assert.equal(chapterAt(2), 4)
console.log('Kitap ana sayfa: 5 tam açık bölüm durağı, ileri/geri eşleşmesi, cilt bağlantısı ve 33.330 izdüşüm kontrolü geçti.')
