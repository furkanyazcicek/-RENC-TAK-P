export const BOLUNME_Evreleri = {
  mitoz: [
    { ad:'G1', kromozom:2, kromatit:2, dna:2, ploidy:'2n', hucre:1, ayrilan:'yok', olay:'Hücre büyür; kromozomlar tek kromatitlidir.' },
    { ad:'S', kromozom:2, kromatit:4, dna:4, ploidy:'2n', hucre:1, ayrilan:'yok', olay:'DNA eşlenir; kromozom sayısı değişmez.' },
    { ad:'Profaz', kromozom:2, kromatit:4, dna:4, ploidy:'2n', hucre:1, ayrilan:'yok', olay:'Kromozomlar yoğunlaşır; iğ iplikleri kurulur.' },
    { ad:'Metafaz', kromozom:2, kromatit:4, dna:4, ploidy:'2n', hucre:1, ayrilan:'yok', olay:'Kromozomlar ekvator düzleminde tek sıra dizilir.' },
    { ad:'Anafaz', kromozom:4, kromatit:4, dna:4, ploidy:'2n', hucre:1, ayrilan:'kardeş kromatit', olay:'Sentromerler ayrılır; kardeş kromatitler kutuplara gider.' },
    { ad:'Telofaz / sitokinez', kromozom:2, kromatit:2, dna:2, ploidy:'2n', hucre:2, ayrilan:'tamamlandı', olay:'İki genetik olarak benzer diploit hücre oluşur.' },
  ],
  mayoz: [
    { ad:'G1', kromozom:2, kromatit:2, dna:2, ploidy:'2n', hucre:1, ayrilan:'yok', olay:'Diploit ana hücre.' },
    { ad:'S', kromozom:2, kromatit:4, dna:4, ploidy:'2n', hucre:1, ayrilan:'yok', olay:'DNA bir kez eşlenir.' },
    { ad:'Profaz I', kromozom:2, kromatit:4, dna:4, ploidy:'2n', hucre:1, ayrilan:'crossing-over', olay:'Homologlar sinapsis yapar; kardeş olmayan kromatitler parça değiştirir.' },
    { ad:'Metafaz I', kromozom:2, kromatit:4, dna:4, ploidy:'2n', hucre:1, ayrilan:'yok', olay:'Homolog çiftler ekvatora yan yana dizilir.' },
    { ad:'Anafaz I', kromozom:2, kromatit:4, dna:4, ploidy:'2n', hucre:1, ayrilan:'homolog', olay:'Homolog kromozomlar ayrılır; sentromer bölünmez.' },
    { ad:'Mayoz I sonu', kromozom:1, kromatit:2, dna:2, ploidy:'n', hucre:2, ayrilan:'homolog', olay:'İki haploit hücre; kromozomlar hâlâ iki kromatitlidir.' },
    { ad:'Metafaz II', kromozom:1, kromatit:2, dna:2, ploidy:'n', hucre:2, ayrilan:'yok', olay:'Kromozomlar her hücrede tek sıra dizilir.' },
    { ad:'Anafaz II', kromozom:2, kromatit:2, dna:2, ploidy:'n', hucre:2, ayrilan:'kardeş kromatit', olay:'Kardeş kromatitler ayrılır.' },
    { ad:'Mayoz II sonu', kromozom:1, kromatit:1, dna:1, ploidy:'n', hucre:4, ayrilan:'kardeş kromatit', olay:'Dört haploit ve genetik olarak çeşitli hücre oluşur.' },
  ],
}

export const bolunmeBaslat = (tur = 'mitoz') => ({ tur, adim: 0, ...BOLUNME_Evreleri[tur][0], durum: 'hazır' })
export function bolunmeAdim(durum, yon = 1) {
  const evreler = BOLUNME_Evreleri[durum.tur] ?? BOLUNME_Evreleri.mitoz
  const adim = Math.max(0, Math.min(evreler.length - 1, durum.adim + yon))
  return { ...durum, adim, ...evreler[adim], durum: adim === evreler.length - 1 ? 'dengeye ulaştı' : 'çalışıyor' }
}
export const bolunmeSifirla = (tur = 'mitoz') => bolunmeBaslat(tur)

export function dnaGrafikDogrula(tur, noktalar) {
  const beklenen = BOLUNME_Evreleri[tur].map((e) => e.dna)
  const ilkHata = beklenen.findIndex((y, i) => Math.abs((noktalar[i] ?? -9) - y) > 0.2)
  return { dogru: ilkHata === -1, ilkHata, mesaj: ilkHata === -1 ? 'DNA grafiği evrelerle uyumlu.' : `${BOLUNME_Evreleri[tur][ilkHata].ad} evresinde DNA ${beklenen[ilkHata]}C olmalı.` }
}

