import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  adresteVerilenYil,
  aramaSonuclari,
  atlasDurumunuCoz,
  atlasDurumunuYaz,
  atlasVarliklariniBirleştir,
  detayDilimiBul,
  donemBul,
  donemdekiDevletleriBul,
  donemSapmasi,
  etiketVerisiUret,
  kesinlikMetni,
  kaynakDonemiBul,
  kaynakZamanBaglami,
  varlikMerkezi,
  varlikTuruMetni,
  zamanSuzgeci,
} from '../src/lib/tarihAtlasi/veriModeli.js'

const veri = JSON.parse(await readFile(resolve('src/data/tarihAtlasi/donemler.json'), 'utf8'))
const donem1453 = donemBul(veri.meta, 1453)

assert.equal(adresteVerilenYil(new URLSearchParams('yil=1453')), 1453)
assert.equal(adresteVerilenYil(new URLSearchParams('yil=-5')), 0)
assert.equal(adresteVerilenYil(new URLSearchParams('yil=99999')), 1960)
assert.equal(donem1453.yil, 1400)
assert.equal(donemSapmasi(donem1453, 1453), 53)
assert.deepEqual(zamanSuzgeci(1453), ['all', ['<=', ['get', 'baslangic'], 1453], ['>', ['get', 'bitis'], 1453]])
assert.ok(donemdekiDevletleriBul(veri, donem1453).every((devlet) => devlet.onem >= 2))
assert.equal(etiketVerisiUret(veri).features.length, veri.features.length)
assert.equal(kesinlikMetni(1), 'Kaynakta daha güvenilir')
assert.equal(kesinlikMetni(3), 'Tahminî sınır')

const manifest = JSON.parse(await readFile(resolve('public/atlas/v3/manifest.json'), 'utf8'))
const detay1600 = JSON.parse(await readFile(resolve('public/atlas/v3/details/1600.json'), 'utf8'))
const siyasi1600 = JSON.parse(await readFile(resolve('public/atlas/v3/political/1600.json'), 'utf8'))
const siyasi0 = JSON.parse(await readFile(resolve('public/atlas/v3/political/0.json'), 'utf8'))
const detay1071 = JSON.parse(await readFile(resolve('public/atlas/v3/details/malazgirt-1071.json'), 'utf8'))
const detay1923 = JSON.parse(await readFile(resolve('public/atlas/v3/details/cumhuriyet-1923.json'), 'utf8'))

assert.equal(manifest.supportedYears.from, 0)
assert.equal(manifest.decadeStops.length, 197)
assert.equal(manifest.decadeStops[0].year, 0)
assert.equal(manifest.decadeStops.at(-1).year, 1960)
assert.equal(manifest.decadeStops.find((durak) => durak.year === 1770).evidenceYear, 1783)
assert.ok(manifest.sources.every((kaynak) => kaynak.creatorOrInstitution && kaynak.license?.status))
assert.ok(manifest.detailSlices.some((dilim) => dilim.id === 'malazgirt-1071' && dilim.validFrom === 1071))
assert.ok(manifest.detailSlices.some((dilim) => dilim.id === 'cumhuriyet-1923' && dilim.validTo === 1924))
assert.equal(detayDilimiBul(manifest, 1699).id, 'karlofca-1699')
assert.equal(detayDilimiBul(manifest, 1600).id, '1600')
assert.equal(kaynakDonemiBul(manifest, 0).sourceYear, -1)
assert.ok(siyasi0.features.some((ozellik) => ozellik.properties.ad === 'Asya Hun Devleti (Hiung-nu)'))
assert.equal(kaynakDonemiBul(manifest, 1282).sourceYear, 1279)
assert.equal(kaynakDonemiBul(manifest, 1453).sourceYear, 1492)
assert.equal(kaynakDonemiBul(manifest, 1526).sourceYear, 1530)
assert.equal(kaynakDonemiBul(manifest, 1683).sourceYear, 1700)
assert.equal(kaynakDonemiBul(manifest, 1774).sourceYear, 1783)
assert.equal(kaynakDonemiBul(manifest, 1923).sourceYear, 1920)
assert.equal(kaynakDonemiBul(manifest, 1960).sourceYear, 1960)
assert.deepEqual(
  kaynakZamanBaglami(manifest, 1774),
  {
    donem: kaynakDonemiBul(manifest, 1774),
    kanitYili: 1783,
    kaynakYili: 1783,
    sapma: -9,
    mutlakSapma: 9,
    kesinlikSinifi: 'near',
    oncekiKanitYili: 1715,
    sonrakiKanitYili: 1783,
  },
)

const urlDurumu = {
  yil: 1600,
  mod: 'olaylar',
  seciliId: 'event:hacova-1596',
  katmanlar: new Set(['siyasi', 'olaylar', 'rotalar']),
  kamera: { lng: 20.688, lat: 47.825, zoom: 6.25 },
}
const yazilan = atlasDurumunuYaz(urlDurumu)
const cozulmus = atlasDurumunuCoz(yazilan, manifest.supportedYears)
assert.equal(cozulmus.yil, urlDurumu.yil)
assert.equal(cozulmus.mod, urlDurumu.mod)
assert.equal(cozulmus.seciliId, urlDurumu.seciliId)
assert.deepEqual([...cozulmus.katmanlar].sort(), [...urlDurumu.katmanlar].sort())
assert.deepEqual(cozulmus.kamera, urlDurumu.kamera)

const varliklar = atlasVarliklariniBirleştir(siyasi1600, detay1600, 1600)
const hacova = aramaSonuclari(varliklar, 'Haçova')[0]
const rumeli = aramaSonuclari(varliklar, 'Rumeli')[0]
assert.equal(hacova.id, 'event:hacova-1596')
assert.equal(hacova.properties.parentPolityId, 'polity:osmanli-devleti')
assert.equal(varlikTuruMetni(hacova), 'Olay')
assert.equal(rumeli.id, 'admin:rumeli')
assert.equal(varlikTuruMetni(rumeli), 'İdarî bölge')
assert.deepEqual(varlikMerkezi(hacova), [20.688055555556, 47.825277777778])
assert.equal(detay1071.events.features[0].properties.eventDate.from, '1071-08-26')
assert.equal(detay1071.events.features[0].properties.boundaryCertainty, 'not-applicable-point')
assert.equal(detay1923.events.features[0].properties.eventDate.from, '1923-10-29')
assert.match(detay1923.meta.scopeNote, /1930 genel kaynak poligonu 1923 sınır kanıtı/)

console.log('Tarih atlası model testleri geçti.')
