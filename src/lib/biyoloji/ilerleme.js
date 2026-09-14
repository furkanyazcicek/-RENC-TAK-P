import { ALT_BASLIKLAR } from '../../data/biyoloji/kapsam.js'
import { describeContent } from '../learning/contentActivity/identity.js'

const ANAHTAR = 'drkoc-biyoloji-v1'
const ATLAS_SOURCE_CODE = 'biology_atlas'
const ATLAS_TASK_EVENT = 'drkoc-atlas-task-state'
const BIYOLOJI_GOREVLERI = new Map(ALT_BASLIKLAR.map((task) => [task.etkilesimId, task]))
export const BOS_ILERLEME = { surum: 1, tamamlananlar: {}, favoriler: [], hataDefteri: [], sonBolge: null, ustalik: {}, tekrarKuyrugu: [], tani: null }
export function ilerlemeOku() {
  if (typeof localStorage === 'undefined') return structuredClone(BOS_ILERLEME)
  try { const veri = JSON.parse(localStorage.getItem(ANAHTAR)); return veri?.surum === 1 ? { ...structuredClone(BOS_ILERLEME), ...veri } : structuredClone(BOS_ILERLEME) } catch { return structuredClone(BOS_ILERLEME) }
}
export function ilerlemeYaz(yama) {
  const yeni = { ...ilerlemeOku(), ...yama, surum: 1 }
  try { localStorage.setItem(ANAHTAR, JSON.stringify(yeni)) } catch { /* tarayıcı depolamayı kapatmış olabilir */ }
  return yeni
}
export const tamamlanabilirMi = (kanit = {}) => Boolean(kanit.gorev && kanit.kontrol)
export async function atlasGorevTanimla({ taskId, completed = true, predictionUsed = true }) {
  const task = BIYOLOJI_GOREVLERI.get(taskId)
  if (!task) return null
  const descriptor = await describeContent({
    sourceCode: ATLAS_SOURCE_CODE,
    contentKind: 'atlas_task',
    contentId: taskId,
    value: task,
    sourceOwner: 'src/data/biyoloji/kapsam.js',
  })
  return {
    content_id: taskId,
    content_revision: descriptor.content_revision,
    task_id: taskId,
    completed: Boolean(completed),
    prediction_used: Boolean(predictionUsed),
  }
}
export async function yerelAktarimAdayi({ describe = true } = {}) {
  const veri = ilerlemeOku()
  const ham = Object.entries(veri.tamamlananlar ?? {})
    .filter(([, state]) => state?.gorev && state?.kontrol)
    .map(([taskId, state]) => ({ taskId, predictionUsed: Boolean(state.tahmin) }))
  // Mevcut sunucu sözleşmesi tamamlanmış biyoloji görevinde bilinçli
  // tahmin adımını da ister. Eksik eski kayıt uydurulmaz.
  const gecerli = ham.filter((task) => task.predictionUsed && BIYOLOJI_GOREVLERI.has(task.taskId))
  const excludedCount = ham.length - gecerli.length
    + (veri.favoriler?.length ?? 0)
    + (veri.hataDefteri?.length ?? 0)
    + Object.keys(veri.ustalik ?? {}).length
    + (veri.tekrarKuyrugu?.length ?? 0)
    + (veri.tani ? 1 : 0)
  return {
    allowedCount: gecerli.length,
    excludedCount,
    tasks: describe
      ? (await Promise.all(gecerli.map((task) => atlasGorevTanimla(task)))).filter(Boolean)
      : [],
  }
}
export function etkilesimTamamla(id, bolge, kanit = {}) {
  if (!tamamlanabilirMi(kanit)) return ilerlemeOku()
  const eski = ilerlemeOku()
  const yeni = ilerlemeYaz({ tamamlananlar: { ...eski.tamamlananlar, [id]: { tahmin: Boolean(kanit.tahmin), gorev: true, kontrol: true, tarih: new Date().toISOString() } }, sonBolge: bolge })
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(ATLAS_TASK_EVENT, {
      detail: {
        sourceCode: ATLAS_SOURCE_CODE,
        taskId: id,
        region: bolge,
        completed: true,
        predictionUsed: Boolean(kanit.tahmin),
      },
    }))
  }
  return yeni
}
export function hataKaydet(soruId, secim) { const eski = ilerlemeOku(); return ilerlemeYaz({ hataDefteri: [...eski.hataDefteri.filter((h) => h.soruId !== soruId), { soruId, secim, tarih: new Date().toISOString() }] }) }
export function favoriDegistir(id) { const eski = ilerlemeOku(); const varMi = eski.favoriler.includes(id); return ilerlemeYaz({ favoriler: varMi ? eski.favoriler.filter((x) => x !== id) : [...eski.favoriler, id] }) }
export function ilerlemeyiSil(onay) { if (onay !== 'BIYOLOJI-SIL') return false; try { localStorage.removeItem(ANAHTAR); return true } catch { return false } }
