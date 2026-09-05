/**
 * DERS — A2 / Modül 1 / Ders 4
 * "Okuma ve yazma: bir çocukluk anısı"
 *
 * Modülün kapanış dersi. Indefinido, imperfecto ve sıra belirteçleri tek
 * görevde birleşiyor. Öğrenci burada kural çalışmıyor; iki geçmiş zaman
 * arasındaki seçimi kendi anısını anlatırken yapıyor. A2'nin ölçütü
 * budur: çekim bilmek değil, doğru zamanı seçebilmek.
 */

export default {
  id: 'a2-m1-d4',
  surum: 1,
  dil: 'es',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 4,
  baslik: 'Okuma ve yazma: bir çocukluk anısı',
  altBaslik: 'Modülün kapanışı — iki geçmiş zaman tek metinde',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'dusunme'],
  amac: 'Bu dersin sonunda bir anını arka planıyla birlikte, iki geçmiş zamanı doğru seçerek anlatabileceksin.',
  kazanim: 'En az 80 kelimelik bir anlatı yazar; arka planı imperfecto, olayları indefinido ile kurar.',
  onKosullar: ['a2-m1-d3'],
  sure: 25,
  baglam: {
    durum: 'Sınıfça bir "anı defteri" hazırlıyorsunuz. Herkes unutamadığı bir günü yazıyor.',
    neden: 'Anı anlatmak A2 sınavlarının klasik görevidir ve iki geçmiş zamanın ayrımını en iyi bu görev ölçer.',
  },

  bloklar: [
    {
      tur: 'okuma',
      baslik: 'Un día que nunca olvidaré',
      metin:
        'Hace dos años mi familia y yo fuimos a Capadocia para unas vacaciones cortas. ' +
        'Salimos de casa muy temprano porque el viaje en coche duraba unas ocho horas. ' +
        'Cuando por fin llegamos, yo estaba cansado pero muy contento.\n\n' +
        'A la mañana siguiente nos levantamos a las cuatro. Todavía era de noche y hacía bastante frío. ' +
        'Primero, un autobús pequeño nos llevó a un campo grande. Luego los vimos: ' +
        'unos cincuenta globos en el suelo. Mientras los hombres preparaban los globos, ' +
        'mi hermano hacía fotos de todo.\n\n' +
        'Después subimos a la cesta y el globo subió despacio. ' +
        'De repente el sol apareció detrás de las montañas y todo el valle se puso naranja. ' +
        'Nadie habló durante un minuto.\n\n' +
        'Por fin, después de una hora, aterrizamos en un campo y el piloto nos dio un pequeño certificado. ' +
        'Todavía me acuerdo muy bien de aquella mañana, y el certificado sigue en mi pared.',
      sozluk: [
        { es: 'el globo', tr: 'balon' },
        { es: 'la cesta', tr: 'sepet' },
        { es: 'el valle', tr: 'vadi' },
        { es: 'aterrizar', tr: 'inmek (araç)' },
        { es: 'el certificado', tr: 'belge, sertifika' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İyi bir anının dört bölümü',
      metin:
        'Metni yeniden oku ve hangi cümlenin hangi zamanla kurulduğuna bak. Dört bölüm var:',
      maddeler: [
        '1. ZEMİN: ne zaman, nerede, kimlerle → indefinido ile başlar.',
        '2. ARKA PLAN: hava, ortam, duygu → imperfecto ("hacía frío", "yo estaba cansado").',
        '3. DORUK: asıl an → indefinido ve "de repente".',
        '4. KAPANIŞ: bugün ne hissediyorsun → "Todavía me acuerdo de …".',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Anı anlatmanın kalıpları',
      kaliplar: [
        { es: 'Hace dos años / El verano pasado …', kullanim: 'Zemin kurma', ornek: 'Hace dos años fuimos a Capadocia.' },
        { es: 'Hacía … / Había … / Era …', kullanim: 'Arka plan', ornek: 'Hacía frío y había mucho viento.' },
        { es: 'Mientras …aba, …', kullanim: 'Süren arka plan', ornek: 'Mientras los hombres preparaban los globos, esperábamos.' },
        { es: 'De repente …', kullanim: 'Doruk noktası', ornek: 'De repente el sol apareció.' },
        { es: 'Todavía me acuerdo de …', kullanim: 'Kapanış', ornek: 'Todavía me acuerdo de aquella mañana.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Anlatı yazarken en sık dört hata',
      yanlis: '1) "Dos años hace fuimos a Capadocia."  2) "Hizo frío y estuve cansado."  3) "Cuando era pequeño, jugué cada día."  4) "Ayer fuí al cine."',
      dogru: '1) "Hace dos años fuimos a Capadocia."  2) "Hacía frío y estaba cansado."  3) "Cuando era pequeño, jugaba cada día."  4) "Ayer fui al cine."',
      neden:
        'Birincisi Türkçedeki "iki yıl önce" sırasının aktarımıdır; İspanyolcada "hace" başa gelir. ' +
        'İkincisi arka planın indefinido ile kurulmasıdır; hava ve duygu daima imperfecto ister. ' +
        'Üçüncüsü tekrar eden alışkanlığın yanlış zamanla verilmesidir. ' +
        'Dördüncüsü düzensiz fiile vurgu işareti konmasıdır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d4-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR.',
      soru: 'Metinde asıl anlatılan an hangisi?',
      secenekler: [
        { id: 'a', metin: 'Balonla gün doğumunu izlemek' },
        { id: 'b', metin: 'Sekiz saatlik araba yolculuğu' },
        { id: 'c', metin: 'Otelde geçen bir akşam' },
      ],
      dogruId: 'a',
      aciklama: 'Doruk noktası "De repente el sol apareció" cümlesidir; yolculuk yalnız zemin kurar.',
    },
    {
      id: 'a2-m1-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'AYRINTI.',
      soru: 'Aile neden çok erken yola çıktı?',
      secenekler: [
        { id: 'a', metin: 'Yolculuk arabayla yaklaşık sekiz saat sürdüğü için' },
        { id: 'b', metin: 'Hava çok sıcak olduğu için' },
        { id: 'c', metin: 'Otele erken varmaları gerektiği için' },
      ],
      dogruId: 'a',
      aciklama: 'Sebep "porque" ile veriliyor ve süre imperfecto ile: "el viaje duraba unas ocho horas".',
    },
    {
      id: 'a2-m1-d4-a3',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metindeki olayları sıraya diz.',
      parcalar: [
        'Güneş dağların arkasından doğdu.',
        'Sabah dörtte kalktılar.',
        'Bir tarlaya indiler ve belge aldılar.',
        'Sepete binip havalandılar.',
      ],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Sırayı belirteçler veriyor: primero → después → de repente → por fin.',
    },
    {
      id: 'a2-m1-d4-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Doğru geçmiş zamanı seç ve boşlukları doldur.',
      parcalar: [
        'Aquella mañana ', { bosluk: 0 }, ' frío. Nosotros ', { bosluk: 1 },
        ' a la cesta y de repente el sol ', { bosluk: 2 }, '.',
      ],
      cevaplar: [
        { kabul: ['hacía'], ipucu: 'arka plan: imperfecto' },
        { kabul: ['subimos'], ipucu: 'olay: indefinido' },
        { kabul: ['apareció', 'salió'], ipucu: 'olay: indefinido' },
      ],
      aciklama: 'Hava arka plandır (imperfecto), hareket ve dönüm noktası olaydır (indefinido).',
    },
    {
      id: 'a2-m1-d4-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İki hatayı bul ve cümleyi düzelt.',
      cumle: 'Dos años hace fuí a Capadocia.',
      hataliParca: 'Dos años hace … fuí',
      dogruParca: 'Hace dos años … fui',
      kabul: [
        'Hace dos años fui a Capadocia',
      ],
      aciklama: 'İki hata: "hace" başa gelmeli ve düzensiz fiil vurgu işareti almamalı.',
    },
    {
      id: 'a2-m1-d4-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — modülün kapanış görevi. Aşama aşama ilerle.',
      gorev: 'Unutamadığın bir günü ya da bir çocukluk anını anlat. Arka planı imperfecto, olayları indefinido ile kur. En az 80 kelime.',
      ornekMetin:
        'El verano pasado mi primo y yo fuimos a la costa del mar Negro durante tres días. ' +
        'Cogimos el autobús de noche y llegamos por la mañana. Estaba nublado y el aire olía a lluvia.\n\n' +
        'El segundo día decidimos subir a un pueblo pequeño en las montañas. ' +
        'Primero seguimos una carretera estrecha durante una hora. Luego la carretera se terminó. ' +
        'Mientras caminábamos, bajó la niebla y no veíamos nada.\n\n' +
        'De repente oímos un perro y apareció un hombre mayor con una lámpara. ' +
        'Nos enseñó el camino. Por fin llegamos al pueblo y su mujer nos dio una sopa caliente. ' +
        'Todavía me acuerdo de aquella sopa y del ruido de la lluvia en el tejado.',
      kaliplar: [
        'Hace dos años / El verano pasado …',
        'Hacía … y había …',
        'Primero … Luego … Después …',
        'Mientras …ábamos, …',
        'De repente …',
        'Todavía me acuerdo de …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Bir anı anlatacaksın; arka plan imperfecto, olaylar indefinido.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki metinde hangi cümleler imperfecto? Hepsi ortam ya da süren durum mu anlatıyor?' },
        { ad: 'Fikir üret', aciklama: 'Not al: ne zaman, nerede, kiminle; hava nasıldı; hangi an seni şaşırttı.' },
        { ad: 'Taslak yaz', aciklama: 'Önce olayları sırala, sonra aralarına arka plan cümleleri ekle.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem iki geçmiş zaman arasındaki seçimini ve vurgu işaretlerini kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin. Bu metin A2\'nin ilk somut kanıtı.' },
      ],
      olcut: [
        'Arka plan cümlelerini imperfecto ile kurdum mu? (hava, ortam, duygu)',
        'Olayları indefinido ile kurdum mu?',
        'Düzenli fiillerde vurgu işaretini koydum, düzensizlerde koymadım mı?',
        'En az üç sıra belirteci var mı?',
        'Kapanışta bugünkü duygumu yazdım mı?',
        'En az 80 kelime yazdım mı?',
      ],
      enAzKelime: 80,
      aranan: [
        { etiket: 'geçmiş zaman ifadesi (hace / pasado)', desen: /\b(hace (dos|tres|un|una)|pasado|pasada|ayer)\b/i },
        { etiket: 'imperfecto (arka plan)', desen: /\b\w+(aba|abas|ábamos|aban|ía|ías|íamos|ían)\b/i },
        { etiket: 'indefinido (olay)', desen: /\b(fui|fue|fuimos|hice|hizo|tuve|estuve|\w+(é|ó|í|ió|aron|ieron))\b/i },
        { etiket: 'sıra belirteci', desen: /\b(primero|luego|después|por fin|finalmente|de repente)\b/i },
        { etiket: 'kapanış (me acuerdo / no olvidaré)', desen: /\b(acuerdo|olvidaré|recuerdo)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'hace-sirasi',
          desen: /\b(dos|tres|cuatro|cinco|diez)\s+(años?|meses|semanas?|días?)\s+hace\b/i,
          baslik: 'Zaman ifadesinin sırası ters',
          aciklama: 'Türkçede "iki yıl önce" derken "önce" sona gelir ve öğrenci bunu İspanyolcaya taşır. İspanyolcada "hace" BAŞA gelir.',
          dogru: 'Hace dos años fuimos a Capadocia.',
          mikro: { yonerge: '"Üç yıl önce İzmir\'e gittik." cümlesini yaz.', kabul: ['Hace tres años fuimos a Izmir'] },
        },
        {
          kod: 'arka-plan-indefinido',
          desen: /\bhizo (frío|calor|buen tiempo|mal tiempo)\b/i,
          baslik: 'Arka plan indefinido ile kurulmuş',
          aciklama: 'Hava, ortam ve duygu bir olay değil arka plandır; İspanyolcada bunlar imperfecto ile verilir.',
          dogru: 'Hacía frío.',
          mikro: { yonerge: '"Hava soğuktu ve yorgundum." cümlesini yaz.', kabul: ['Hacía frío y estaba cansado', 'Hacía frío y estaba cansada'] },
        },
      ],
    },
  ],

  ozet: [
    'İyi bir anı dört bölümden oluşur: zemin, arka plan, doruk, kapanış.',
    'Arka plan (hava, ortam, duygu) daima imperfecto ile kurulur.',
    'Olaylar indefinido ile verilir; doruk noktası "de repente" ile işaretlenir.',
    '"hace" zaman ifadesinin başına gelir: hace dos años.',
    'Bu metin A2 seviyesindeki ilk somut kanıtındır: çekim değil, seçim.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d4-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Balon turunun sonunda ne oldu?',
      secenekler: [
        { id: 'a', metin: 'Bir tarlaya indiler ve belge aldılar.' },
        { id: 'b', metin: 'Otele geri döndüler.' },
        { id: 'c', metin: 'Yağmur başladı.' },
      ],
      dogruId: 'a',
      aciklama: 'Son paragrafta geçiyor: "aterrizamos en un campo y el piloto nos dio un certificado".',
    },
    {
      id: 'a2-m1-d4-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Kapanış cümlesini tamamla.',
      parcalar: ['Todavía me ', { bosluk: 0 }, ' de aquella mañana.'],
      cevaplar: [
        { kabul: ['acuerdo'], ipucu: 'acordarse' },
      ],
      aciklama: 'Dönüşlü fiildir ve "de" edatı alır: me acuerdo de …',
    },
    {
      id: 'a2-m1-d4-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Hava soğuktu ve sen yorgundun; sonra güneş doğdu.',
      kabul: [
        'Hacía frío y yo estaba cansado luego salió el sol',
        'Hacía frío y estaba cansado y luego salió el sol',
        'Hacía frío y estaba cansada luego salió el sol',
      ],
      ornekCevap: 'Hacía frío y estaba cansado; luego salió el sol.',
    },
  ],

  kartlar: ['es-hace-dos-anos', 'es-viaje', 'es-emocionante', 'es-horrible', 'es-acordarse', 'es-por-fin'],
  not: null,
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'Anı metinleri DRKOÇ için özgün yazılmıştır.' },
}
