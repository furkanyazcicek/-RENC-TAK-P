/** Aynı UI sürümünün mevcut görsel kanıtını doğrular; tarayıcı çalıştırmaz. */
import assert from 'node:assert/strict'
import {readFileSync,readdirSync,statSync} from 'node:fs'
import {join} from 'node:path'
const proof=JSON.parse(readFileSync('docs/ai-koc/kanitlar/faz-8/gorsel-dogrulama.json','utf8'))
assert.equal(proof.status,'passed');assert.equal(proof.totals.passed,12);assert.equal(proof.cases.length,12)
const captured=Date.parse(proof.generated_at)
const files=['src/pages/AICoach.jsx','src/lib/aiCoach.js','src/index.css','tailwind.config.js',
 ...readdirSync('src/components/ai').filter(f=>/\.jsx$/.test(f)).map(f=>join('src/components/ai',f)),
 ...readdirSync('src/lib/learning/coachingLoop').filter(f=>/\.js$/.test(f)).map(f=>join('src/lib/learning/coachingLoop',f))]
for(const file of files)assert.ok(statSync(file).mtimeMs<=captured,`visual_evidence_stale:${file}`)
for(const item of proof.cases){assert.equal(item.status,'passed');assert.equal(item.horizontal_overflow_px,0);assert.ok(statSync(item.screenshot).size>10000)}
console.log('Aynı UI sürümünün 12/12 görsel durum kanıtı geçerli; tarayıcı yeniden çalıştırılmadı.')
