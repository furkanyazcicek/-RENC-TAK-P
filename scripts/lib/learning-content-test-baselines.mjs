import assert from 'node:assert/strict'
// Yayın kodu ile korunan yerel içerik çalışması ayrı, sabit imzalardır.
// Buradaki test kabulü içerik sahibinin yayın onayı anlamına gelmez.
const BASELINES = new Map([
  ['3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9',4414],
  ['c816e78b0a6288fa66bd76281c91fa26dfe929624ee8bf29ebd10bde2005be2b',4485],
])
export function assertLearningContentTestBaseline(manifest) {
  assert.equal(BASELINES.get(manifest.manifest_checksum),manifest.entries.length,'bilinen içerik imzası ve kayıt sayısı birlikte eşleşmeli')
  return { count:BASELINES.get(manifest.manifest_checksum),checksum:[...BASELINES].find(([hash])=>hash===manifest.manifest_checksum)[0] }
}
