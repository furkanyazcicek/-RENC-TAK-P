import test from 'node:test'
import assert from 'node:assert/strict'
import { newNotebook, uid, clone, validateNotebook, compactStroke, isUuid } from '../src/lib/defter/model.js'
import {
  newFolder, folderTree, flattenTree, liveFolders, descendantIds, canMoveFolder, deleteFolderRecords,
  mergeFolder, stableFolderId, planCategoryMigration, folderPath, validateFolder,
} from '../src/lib/defter/folders.js'
import { cloudDocument, withAssetPaths, assetPath, pendingUploads } from '../src/lib/defter/cloudAssets.js'
import { createNotebookRepository, CLOUD_RETRY_MS, AUDIO_STABLE_MS } from '../src/lib/defter/repository.js'
import { createFolderRepository } from '../src/lib/defter/folderRepository.js'
import { buildNotebookLayout, clampNotebookView, fitScale, NOTE_PAGE_GAP } from '../src/lib/defter/flow.js'

function store() {
  const rows = new Map()
  return { rows, async list() { return clone([...rows.values()]) }, async put(r, expected) {
    const old = rows.get(r.document.id)
    if (expected !== null && old && old.localVersion !== expected) throw Object.assign(new Error('Çakışma'), { code: 'LOCAL_CONFLICT' })
    rows.set(r.document.id, clone(r))
  } }
}
function folderStore() {
  const rows = new Map()
  return { rows, async list() { return clone([...rows.values()]) }, async putMany(list) { for (const r of list) rows.set(r.folder.id, clone(r)) } }
}
const clock = start => { let t = start; return { now: () => t, advance: ms => { t += ms } } }

/* ---------------- Klasör kuralları ---------------- */

test('Klasör ağacı iç içe kurulur; silinen üst klasörün altları da gizlenir', () => {
  const ders = newFolder({ name: '2025 ÖZEL DERS', order: 1 })
  const ayse = newFolder({ name: 'Ayşe Ders Notları', parentId: ders.id, order: 2, color: 'gri' })
  const mat = newFolder({ name: 'Matematik', parentId: ders.id, order: 1, color: 'turuncu' })
  const tip = newFolder({ name: 'Tıp Fakültesi', order: 2 })
  const tree = folderTree([ayse, tip, mat, ders])
  assert.deepEqual(tree.map(n => n.folder.name), ['2025 ÖZEL DERS', 'Tıp Fakültesi'])
  assert.deepEqual(tree[0].children.map(n => n.folder.name), ['Matematik', 'Ayşe Ders Notları'])
  assert.equal(flattenTree(tree).length, 4)
  assert.equal(folderPath([ders, ayse], ayse.id), '2025 ÖZEL DERS / Ayşe Ders Notları')
  const silinen = deleteFolderRecords([ders, ayse, mat, tip], ders.id)
  assert.equal(silinen.length, 3)
  assert.ok(silinen.every(f => f.deleted))
  assert.deepEqual(liveFolders([{ ...ders, deleted: true }, ayse, tip]).map(f => f.name), ['Tıp Fakültesi'])
})

test('Klasör kendi altına taşınamaz; derinlik sınırı korunur', () => {
  const a = newFolder({ name: 'A' }), b = newFolder({ name: 'B', parentId: a.id }), c = newFolder({ name: 'C', parentId: b.id })
  const d = newFolder({ name: 'D' })
  const all = [a, b, c, d]
  assert.deepEqual([...descendantIds(all, a.id)].sort(), [a.id, b.id, c.id].sort())
  assert.equal(canMoveFolder(all, a.id, c.id), false)
  assert.equal(canMoveFolder(all, d.id, b.id), true)
  assert.equal(canMoveFolder(all, d.id, c.id), false)
  assert.equal(canMoveFolder(all, a.id, d.id), false)
  assert.throws(() => validateFolder({ ...a, parentId: a.id }))
  assert.throws(() => validateFolder({ ...a, color: '#ff0000' }))
  assert.throws(() => validateFolder({ ...a, name: '   ' }))
})

test('Klasör birleştirmede son yazan kazanır; eşit zamanda yerel korunur', () => {
  const f = newFolder({ name: 'Fizik' })
  const local = { folder: { ...f, updatedAt: '2026-09-13T10:00:00.000Z' }, dirty: true }
  assert.equal(mergeFolder(local, { ...f, name: 'Eski', updatedAt: '2026-09-13T09:00:00.000Z' }), local)
  assert.equal(mergeFolder(local, { ...f, name: 'Aynı an', updatedAt: '2026-09-13T10:00:00.000Z' }), local)
  const newer = mergeFolder(local, { ...f, name: 'Tablette', updatedAt: '2026-09-13T11:00:00.000Z' })
  assert.equal(newer.folder.name, 'Tablette'); assert.equal(newer.dirty, false)
})

test('Eski üst/alt başlıklar iki cihazda da aynı klasör kimliğine dönüşür', () => {
  const owner = uid()
  const id1 = stableFolderId(owner, ['TYT', 'Fizik']), id2 = stableFolderId(owner, ['tyt', 'Fizik'])
  assert.equal(id1, id2); assert.ok(isUuid(id1))
  assert.notEqual(stableFolderId(owner, ['TYT']), id1)
  assert.notEqual(stableFolderId(uid(), ['TYT', 'Fizik']), id1)
  const a = { ...newNotebook('A'), category: 'TYT', subcategory: 'Fizik' }
  const b = { ...newNotebook('B'), category: 'TYT', subcategory: 'Fizik' }
  const c = { ...newNotebook('C'), category: 'TYT' }
  const filed = { ...newNotebook('D'), category: 'LGS', folderId: null }
  const plan = planCategoryMigration(owner, [a, b, c, filed, newNotebook('E')], [])
  assert.equal(plan.folders.length, 2)
  assert.equal(plan.docs.length, 3)
  assert.equal(plan.docs.find(d => d.title === 'A').folderId, id1)
  assert.equal(plan.docs.find(d => d.title === 'C').folderId, stableFolderId(owner, ['TYT']))
  plan.folders.forEach(validateFolder)
  plan.docs.forEach(validateNotebook)
  assert.equal(planCategoryMigration(owner, plan.docs, plan.folders).docs.length, 0)
})

/* ---------------- Not modeli ve bulut ekleri ---------------- */

test('Not klasör, favori ve yalnız bulut yolu olan ek taşıyabilir', () => {
  const owner = uid(), d = newNotebook('PDF notu'), image = uid()
  d.folderId = uid(); d.favorite = true
  d.assets = { [image]: { id: image, type: 'image', name: 'Sayfa 1', data: 'data:image/jpeg;base64,YQ==', width: 100, height: 140 } }
  d.pages[0].items = [{ id: uid(), kind: 'image', assetId: image, x: 0, y: 0, w: 1000, h: 1400, c: '#131329' }]
  validateNotebook(d)
  const path = assetPath(owner, d.assets[image])
  const cloud = cloudDocument(d, { [image]: path })
  assert.equal(cloud.assets[image].data, undefined)
  assert.equal(cloud.assets[image].path, path)
  assert.equal(cloud.assets[image].mime, 'image/jpeg')
  validateNotebook(cloud)
  assert.equal(d.assets[image].data.length > 0, true, 'Cihazdaki kopya verisini korur')
  assert.throws(() => validateNotebook({ ...d, folderId: 'klasor' }))
  assert.throws(() => validateNotebook({ ...cloud, assets: { [image]: { ...cloud.assets[image], path: '../baskasi/x.jpg' } } }))
})

test('Ses kaydı büyüdüğünde eski yol yeni veriye bağlanmaz', () => {
  const owner = uid(), id = uid()
  const small = { id, type: 'audio', name: 'Ders', data: 'data:audio/webm;codecs=opus;base64,YQ==' }
  const big = { ...small, data: 'data:audio/webm;codecs=opus;base64,YWJjZA==' }
  assert.notEqual(assetPath(owner, small), assetPath(owner, big))
  const sent = { assets: { [id]: small } }
  const current = { assets: { [id]: big } }
  assert.equal(withAssetPaths(current, sent, { [id]: assetPath(owner, small) }), current)
  const same = withAssetPaths(sent, sent, { [id]: 'x' })
  assert.equal(same.assets[id].path, 'x')
  assert.equal(pendingUploads({ assets: { [id]: { ...small, path: 'x' } } }).length, 0)
})

test('Kalem noktaları kısaltılır; çizgi biçimi değişmez', () => {
  const s = { id: uid(), kind: 'stroke', t: 'pen', c: '#131329', w: 3, p: [523.8421052631579, 100.12345678, 0.4567891] }
  compactStroke(s)
  assert.deepEqual(s.p, [523.84, 100.12, 0.457])
})

/* ---------------- Eşitleme dayanıklılığı ---------------- */

test('Bulut sınırını aşan tek not diğer notların eşitlenmesini durdurmaz', async () => {
  const local = store(), saved = []
  const remote = { list: async () => [], save: async r => { saved.push(r.document.title); return { revision: 1 } } }
  const issues = []
  const repo = createNotebookRepository({ local, remote, onCloudIssues: m => issues.push(m) })
  const big = newNotebook('Büyük')
  big.pages[0].items = Array.from({ length: 1200 }, () => ({ id: uid(), kind: 'text', x: 10, y: 10, w: 800, size: 24, c: '#131329', text: 'a'.repeat(4000) }))
  const small = newNotebook('Küçük')
  await repo.save(big); await repo.save(small)
  const statuses = []
  const repo2 = createNotebookRepository({ local, remote, onStatus: s => statuses.push(s), onCloudIssues: m => issues.push(m) })
  await repo2.load(); await repo2.sync()
  assert.deepEqual(saved, ['Küçük'])
  assert.equal(issues.at(-1).get(big.id), 'too-large')
  assert.equal(statuses.at(-1), 'local')
  assert.equal(local.rows.get(small.id).syncedVersion, 1)
})

test('Tablo henüz yoksa hata gösterilmez; notlar cihazda kalır ve sonra yeniden denenir', async () => {
  const local = store(), c = clock(1000)
  let lists = 0
  const remote = { list: async () => { lists++; throw Object.assign(new Error('yok'), { code: 'CLOUD_UNAVAILABLE' }) }, save: async () => assert.fail('gönderilmemeli') }
  const statuses = []
  const repo = createNotebookRepository({ local, remote, onStatus: s => statuses.push(s), now: c.now })
  await repo.save(newNotebook('Cihazda'))
  await repo.sync(); await repo.sync()
  assert.equal(lists, 1)
  assert.equal(statuses.at(-1), 'local')
  c.advance(CLOUD_RETRY_MS + 1)
  await repo.sync()
  assert.equal(lists, 2)
})

test('Ekler önce yüklenir; bulut belgesinde veri yok, cihazda veri + yol var', async () => {
  const local = store(), uploaded = [], sentDocs = []
  const owner = uid()
  const remote = {
    list: async () => [],
    uploadAsset: async a => { uploaded.push(a.id); return assetPath(owner, a) },
    save: async r => { sentDocs.push(r.document); return { revision: 1 } },
  }
  const c = clock(0)
  const repo = createNotebookRepository({ local, remote, now: c.now })
  const d = newNotebook('Ekli'), image = uid(), audio = uid()
  d.assets = {
    [image]: { id: image, type: 'image', name: 'Soru', data: 'data:image/jpeg;base64,YQ==', width: 10, height: 10 },
    [audio]: { id: audio, type: 'audio', name: 'Ders', data: 'data:audio/webm;base64,YQ==' },
  }
  d.pages[0].items = [{ id: uid(), kind: 'image', assetId: image, x: 0, y: 0, w: 10, h: 10, c: '#131329' }]
  d.recordings = [{ id: uid(), assetId: audio, title: 'Ders', duration: 1, cues: [] }]
  await repo.save(d)
  await repo.sync()
  assert.equal(sentDocs.length, 0, 'Ses kaydı sabitlenmeden gönderilmez')
  c.advance(AUDIO_STABLE_MS)
  await repo.sync()
  assert.deepEqual(uploaded.sort(), [image, audio].sort())
  assert.equal(sentDocs.length, 1)
  assert.ok(Object.values(sentDocs[0].assets).every(a => a.data === undefined && a.path))
  const row = local.rows.get(d.id)
  assert.ok(Object.values(row.document.assets).every(a => a.data && a.path))
  assert.equal(row.syncedVersion, row.localVersion)
})

test('Sunucudan yalnız revizyonu değişen notun içeriği indirilir', async () => {
  const local = store(), fetched = []
  const a = newNotebook('Değişmedi'), b = newNotebook('Tablette yazıldı')
  await local.put({ document: a, localVersion: 1, syncedVersion: 1, baseRevision: 2, requestId: uid() }, null)
  const remote = {
    list: async () => [{ id: a.id, revision: 2 }, { id: b.id, revision: 1 }],
    get: async id => { fetched.push(id); return id === b.id ? { document: b, revision: 1 } : null },
    save: async () => assert.fail('gönderilecek değişiklik yok'),
  }
  const repo = createNotebookRepository({ local, remote })
  await repo.load(); await repo.sync()
  assert.deepEqual(fetched, [b.id])
  assert.equal(local.rows.get(b.id).document.title, 'Tablette yazıldı')
})

test('Yazarken not her eşitlemede gönderilmez; yazma durunca ya da en geç 30 saniyede gider', async () => {
  const local = store(), c = clock(0), sent = []
  const remote = { list: async () => [], save: async r => { sent.push(r.document.title); return { revision: sent.length } } }
  const statuses = []
  const repo = createNotebookRepository({ local, remote, now: c.now, pushIdleMs: 4000, pushMaxWaitMs: 30000, onStatus: s => statuses.push(s) })
  const d = newNotebook('İlk çizgi')
  await repo.save(d)
  c.advance(1000); await repo.sync()
  assert.equal(sent.length, 0)
  assert.equal(statuses.at(-1), 'local')
  c.advance(4000); await repo.sync()
  assert.deepEqual(sent, ['İlk çizgi'])
  // Durmadan yazan öğrenci: gönderimden sonraki ilk değişiklikten 30 saniye sonra yine de gönderilir.
  for (let i = 1; i <= 30; i++) { c.advance(1000); await repo.save({ ...d, title: `Yazı ${i}` }); await repo.sync() }
  assert.equal(sent.length, 1)
  c.advance(1000); await repo.save({ ...d, title: 'Yazı 31' }); await repo.sync()
  assert.equal(sent.length, 2)
  // Sekmeden çıkış beklemeden gönderir.
  await repo.save({ ...d, title: 'Çıkarken' }); await repo.sync({ force: true })
  assert.equal(sent.at(-1), 'Çıkarken')
})

/* ---------------- Klasör deposu ---------------- */

test('Klasör değişikliği gönderilir, temizlenir; uzaktaki yeni klasör gelir', async () => {
  const local = folderStore(), server = new Map()
  const remote = {
    saveFolders: async list => { for (const f of list) server.set(f.id, clone(f)) },
    listFolders: async () => [...server.values()],
  }
  const seen = []
  const repo = createFolderRepository({ local, remote, onChange: list => seen.push(list) })
  await repo.load()
  const f = newFolder({ name: 'Soru Bankaları', color: 'mavi' })
  await repo.save([f])
  assert.equal(local.rows.get(f.id).dirty, true)
  const tablet = { ...newFolder({ name: 'Tabletten' }), updatedAt: new Date(Date.now() + 5000).toISOString() }
  server.set(tablet.id, tablet)
  await repo.sync()
  assert.equal(server.get(f.id).name, 'Soru Bankaları')
  assert.equal(local.rows.get(f.id).dirty, false)
  assert.equal(local.rows.get(tablet.id).folder.name, 'Tabletten')
  assert.deepEqual(seen.at(-1).map(x => x.name).sort(), ['Soru Bankaları', 'Tabletten'])
})

test('Gönderim sırasında yeniden adlandırılan klasör kirli kalır', async () => {
  const local = folderStore()
  let release
  const remote = {
    saveFolders: () => new Promise(r => { release = r }),
    listFolders: async () => [],
  }
  const repo = createFolderRepository({ local, remote })
  const f = newFolder({ name: 'İlk ad' })
  await repo.save([f])
  const syncing = repo.sync()
  await new Promise(r => setTimeout(r, 0))
  await repo.save([{ ...f, name: 'Yeni ad', updatedAt: new Date(Date.parse(f.updatedAt) + 1000).toISOString() }])
  release(); await syncing
  assert.equal(local.rows.get(f.id).folder.name, 'Yeni ad')
  assert.equal(local.rows.get(f.id).dirty, true)
})

/* ---------------- Dikey akış ---------------- */

test('Dikey akış: sayfalar alt alta, üst ve alt pay korunur, dar belge ortalanır', () => {
  const layout = buildNotebookLayout(3)
  assert.equal(layout.boxes[2].y, 2 * (1414 + NOTE_PAGE_GAP))
  assert.equal(layout.height, 3 * 1414 + 2 * NOTE_PAGE_GAP)
  const rect = { width: 820, height: 1000 }
  const scale = fitScale(rect)
  assert.ok(scale > 0.7 && scale < 0.8)
  const top = clampNotebookView(layout, rect, { scale, tx: 999, ty: 500 }, { top: 110, bottom: 140 })
  assert.equal(top.ty, 110)
  assert.equal(Math.round(top.tx), Math.round((820 - 1000 * scale) / 2))
  const bottom = clampNotebookView(layout, rect, { scale, tx: 0, ty: -1e9 }, { top: 110, bottom: 140 })
  assert.equal(Math.round(bottom.ty), Math.round(1000 - layout.height * scale - 140))
  const short = clampNotebookView(buildNotebookLayout(1), { width: 820, height: 3000 }, { scale, tx: 0, ty: -400 }, { top: 110 })
  assert.equal(short.ty, 110)
})
