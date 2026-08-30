export const BASLANGIC_YILI = 1453
export const VARSAYILAN_MOD = 'siyasi'
export const VARSAYILAN_KATMANLAR = Object.freeze(['siyasi', 'etiketler', 'yerlesimler', 'olaylar'])

/** URL'den gelen yılı atlasın desteklediği güvenli aralığa çeker. */
export function adresteVerilenYil(parametreler, enAz = 0, enCok = 1960) {
  const ham = Number(parametreler.get('yil'))
  if (!Number.isFinite(ham)) return BASLANGIC_YILI
  return Math.min(enCok, Math.max(enAz, Math.round(ham)))
}

/** MapLibre zaman filtresi: başlangıç dâhil, bitiş hariç. */
export function zamanSuzgeci(yil) {
  return ['all', ['<=', ['get', 'baslangic'], yil], ['>', ['get', 'bitis'], yil]]
}

/** Seçili yıl için kullanılan kaynak anlık görüntüsünü bulur. */
export function donemBul(meta, yil) {
  if (!meta?.donemler?.length) return null
  return meta.donemler.find((donem) => donem.yil <= yil && yil < donem.bitis)
    || meta.donemler[meta.donemler.length - 1]
}

/** Seçili yıl ile gerçekten sayısallaştırılmış kaynak yılı arasındaki fark. */
export function donemSapmasi(donem, yil) {
  if (!donem || !Number.isFinite(yil)) return 0
  return Math.max(0, yil - donem.yil)
}

/** Poligonlardan bağımsız, çakışma yönetimine uygun etiket noktaları üretir. */
export function etiketVerisiUret(donemVerisi) {
  return {
    type: 'FeatureCollection',
    features: (donemVerisi?.features || []).map((ozellik, sira) => ({
      type: 'Feature',
      id: sira,
      properties: {
        ad: ozellik.properties.ad,
        onem: ozellik.properties.onem,
        baslangic: ozellik.properties.baslangic,
        bitis: ozellik.properties.bitis,
      },
      geometry: {
        type: 'Point',
        coordinates: [ozellik.properties.etiketX, ozellik.properties.etiketY],
      },
    })),
  }
}

/** Sol listedeki müfredat odaklı devletleri seçer; geometriye dokunmaz. */
export function donemdekiDevletleriBul(veri, donem, asgariOnem = 2) {
  if (!veri || !donem) return []
  return veri.features
    .filter((ozellik) => (
      ozellik.properties.baslangic === donem.yil
      && ozellik.properties.onem >= asgariOnem
    ))
    .map((ozellik) => ozellik.properties)
    .sort((a, b) => b.onem - a.onem || a.ad.localeCompare(b.ad, 'tr'))
}

export function kesinlikMetni(kesinlik) {
  if (kesinlik == null) return 'Kaynakta belirtilmemiş'
  if (kesinlik <= 1) return 'Kaynakta daha güvenilir'
  if (kesinlik <= 2) return 'Yaklaşık — kaynaklar ayrışıyor'
  return 'Tahminî sınır'
}

/** v3 yayın manifestinde seçili yılı kapsayan kaynak paketini bulur. */
export function kaynakDonemiBul(manifest, yil) {
  const donemler = manifest?.periods || []
  return donemler.find((donem) => donem.validFrom <= yil && yil < donem.validTo)
    || donemler.at(-1)
    || null
}

/** Aynı yılı kapsayan dilimlerden en dar, dolayısıyla en özgül olanı seçer. */
export function detayDilimiBul(manifest, yil) {
  return (manifest?.detailSlices || [])
    .filter((dilim) => dilim.validFrom <= yil && yil < dilim.validTo)
    .sort((a, b) => (a.validTo - a.validFrom) - (b.validTo - b.validFrom))[0]
    || null
}

/**
 * Seçili yılın zamansal kanıt bağlamını üretir. Ara yıl geometrisi türetmez;
 * yalnız kullanılan en yakın anlık görüntüyü ve onu çevreleyen iki kaynağı
 * öğrenciye açıklamak için sınıflandırır.
 */
export function kaynakZamanBaglami(manifest, yil) {
  const donemler = manifest?.periods || []
  const donem = kaynakDonemiBul(manifest, yil)
  if (!donem) return null
  const kanitYili = Number(donem.evidenceYear ?? (donem.sourceYear === -1 ? 0 : donem.sourceYear))
  const sapma = yil - kanitYili
  const mutlakSapma = Math.abs(sapma)
  const onceki = [...donemler]
    .reverse()
    .find((kayit) => Number(kayit.evidenceYear ?? kayit.sourceYear) <= yil)
  const sonraki = donemler.find((kayit) => Number(kayit.evidenceYear ?? kayit.sourceYear) >= yil)
  const kesinlikSinifi = mutlakSapma === 0
    ? 'exact'
    : mutlakSapma <= 10
      ? 'near'
      : mutlakSapma <= 25
        ? 'approximate'
        : 'broad'
  return {
    donem,
    kanitYili,
    kaynakYili: donem.sourceYear,
    sapma,
    mutlakSapma,
    kesinlikSinifi,
    oncekiKanitYili: onceki?.evidenceYear ?? (onceki?.sourceYear === -1 ? 0 : onceki?.sourceYear) ?? null,
    sonrakiKanitYili: sonraki?.evidenceYear ?? (sonraki?.sourceYear === -1 ? 0 : sonraki?.sourceYear) ?? null,
  }
}

export function varlikGecerliMi(ozellik, yil) {
  const oz = ozellik?.properties || ozellik || {}
  const baslangic = Number(oz.validFrom)
  const bitis = Number(oz.validTo)
  return Number.isFinite(baslangic) && Number.isFinite(bitis)
    ? baslangic <= yil && yil < bitis
    : true
}

export function detayKapsamiVarMi(donem, tur) {
  const deger = donem?.coverage?.[tur]
  return typeof deger === 'string' && deger.startsWith('ready-')
}

export function atlasDurumunuCoz(parametreler, sinirlar = { from: 0, to: 1960 }) {
  const yil = adresteVerilenYil(parametreler, sinirlar.from, sinirlar.to)
  const mod = parametreler.get('mod') || VARSAYILAN_MOD
  const seciliId = parametreler.get('secim') || null
  const katmanlar = new Set(
    (parametreler.get('katman') || VARSAYILAN_KATMANLAR.join(','))
      .split(',')
      .filter(Boolean),
  )
  const lng = Number(parametreler.get('lng'))
  const lat = Number(parametreler.get('lat'))
  const zoom = Number(parametreler.get('z'))
  const kamera = [lng, lat, zoom].every(Number.isFinite)
    ? { lng: Math.max(-180, Math.min(180, lng)), lat: Math.max(-85, Math.min(85, lat)), zoom: Math.max(1, Math.min(12, zoom)) }
    : null
  return { yil, mod, seciliId, katmanlar, kamera }
}

/** Paylaşılabilir URL'yi kararlı ve kısa tutar. */
export function atlasDurumunuYaz({ yil, mod, seciliId, katmanlar, kamera }) {
  const parametreler = new URLSearchParams()
  parametreler.set('yil', String(yil))
  if (mod && mod !== VARSAYILAN_MOD) parametreler.set('mod', mod)
  if (seciliId) parametreler.set('secim', seciliId)
  const katmanListesi = [...(katmanlar || [])].sort()
  if (katmanListesi.join(',') !== [...VARSAYILAN_KATMANLAR].sort().join(',')) {
    parametreler.set('katman', katmanListesi.join(','))
  }
  if (kamera) {
    parametreler.set('lng', Number(kamera.lng).toFixed(3))
    parametreler.set('lat', Number(kamera.lat).toFixed(3))
    parametreler.set('z', Number(kamera.zoom).toFixed(2))
  }
  return parametreler
}

function ozellikleriAl(koleksiyon, yil) {
  return (koleksiyon?.features || []).filter((ozellik) => varlikGecerliMi(ozellik, yil))
}

export function atlasVarliklariniBirleştir(siyasi, detay, yil) {
  return [
    ...ozellikleriAl(siyasi, yil),
    ...ozellikleriAl(detay?.administrativeRegions, yil),
    ...ozellikleriAl(detay?.settlements, yil),
    ...ozellikleriAl(detay?.events, yil),
    ...ozellikleriAl(detay?.routes, yil),
  ]
}

export function aramaSonuclari(varliklar, sorgu, sinir = 20) {
  const metin = String(sorgu || '').trim().toLocaleLowerCase('tr')
  if (metin.length < 2) return []
  return varliklar
    .map((ozellik) => {
      const oz = ozellik.properties || {}
      const ad = String(oz.ad || oz.nameTr || '')
      const kaynakAd = String(oz.adKaynak || oz.sourceName || '')
      const hedef = `${ad} ${kaynakAd}`.toLocaleLowerCase('tr')
      const baslangic = hedef.startsWith(metin) ? 0 : hedef.includes(metin) ? 1 : 9
      return { ozellik, ad, baslangic, onem: Number(oz.onem ?? oz.importance ?? 0) }
    })
    .filter((sonuc) => sonuc.baslangic < 9)
    .sort((a, b) => a.baslangic - b.baslangic || b.onem - a.onem || a.ad.localeCompare(b.ad, 'tr'))
    .slice(0, sinir)
    .map((sonuc) => sonuc.ozellik)
}

export function varlikMerkezi(ozellik) {
  const geometri = ozellik?.geometry
  const oz = ozellik?.properties || {}
  if (geometri?.type === 'Point') return geometri.coordinates
  if (geometri?.type === 'LineString' && geometri.coordinates.length) {
    return geometri.coordinates[Math.floor(geometri.coordinates.length / 2)]
  }
  if (Number.isFinite(oz.etiketX) && Number.isFinite(oz.etiketY)) return [oz.etiketX, oz.etiketY]
  return null
}

export function varlikTuruMetni(ozellik) {
  const tur = ozellik?.properties?.tur || ozellik?.properties?.type
  return ({
    polity: 'Devlet / siyasi yapı',
    'administrative-region': 'İdarî bölge',
    settlement: 'Yerleşim',
    event: 'Olay',
    route: 'Rota',
  })[tur] || 'Harita nesnesi'
}
