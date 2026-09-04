/**
 * DESTE — GÜNLÜK KONUŞMA (İspanyolca)
 *
 * İspanyolca konuşulurken hızlıdır ve kalıplarla ilerler. Öğrenci
 * gramerini bilse bile bu kalıpları bilmezse konuşmayı takip edemez.
 *
 * BÖLGESEL FARK her kartta not edildi: İspanya ile Latin Amerika günlük
 * dilde en çok burada ayrışır.
 */

export const DESTE = {
  id: 'gunluk-konusma',
  dil: 'es',
  ad: 'Günlük konuşma',
  simge: '💬',
  aciklama: 'Kitapların yazmadığı, her gün duyacağın kalıplar.',
  seviye: 'A2',
  kartlar: [
    {
      id: 'es-gun-01', on: '¿Qué tal?', kok: 'tal', okunus: 'ke tal', tur: 'kalıp',
      arka: 'Nasılsın? Naber?',
      ornek: '¡Hola! ¿Qué tal todo?',
      ornekTr: 'Selam! Her şey nasıl?',
      not: '"¿Cómo estás?"tan daha kısa ve daha günlüktür.',
    },
    {
      id: 'es-gun-02', on: 'vale', okunus: 'bale', tur: 'ünlem',
      arka: 'tamam, olur',
      ornek: '— ¿Nos vemos a las seis? — ¡Vale!',
      ornekTr: '— Altıda buluşalım mı? — Tamam!',
      not: 'İSPANYA\'ya özgüdür ve çok sık duyulur. Latin Amerika\'da "bueno" ya da "dale".',
    },
    {
      id: 'es-gun-03', on: 'o sea', okunus: 'o sea', tur: 'kalıp',
      arka: 'yani',
      ornek: 'No puedo ir, o sea, tengo mucho trabajo.',
      ornekTr: 'Gelemem, yani çok işim var.',
      not: 'Konuşmada cümleyi toparlamak için sürekli kullanılır.',
    },
    {
      id: 'es-gun-04', on: 'no pasa nada', kok: 'pasa', okunus: 'no pasa nada', tur: 'kalıp',
      arka: 'sorun değil, önemli değil',
      ornek: '— Perdona, llego tarde. — No pasa nada.',
      ornekTr: '— Kusura bakma, geç kaldım. — Sorun değil.',
      not: 'Çift olumsuzluk burada da doğrudur: "no … nada".',
    },
    {
      id: 'es-gun-05', on: 'ni idea', okunus: 'ni idea', tur: 'kalıp',
      arka: 'hiçbir fikrim yok',
      ornek: '— ¿Dónde está el profesor? — Ni idea.',
      ornekTr: '— Öğretmen nerede? — Hiçbir fikrim yok.',
      not: '"No tengo ni idea"nın kısaltılmış hâlidir.',
    },
    {
      id: 'es-gun-06', on: 'me da igual', kok: 'igual', okunus: 'me da igual', tur: 'kalıp',
      arka: 'benim için fark etmez',
      ornek: '— ¿Pizza o pasta? — Me da igual.',
      ornekTr: '— Pizza mı makarna mı? — Fark etmez.',
      not: '"gustar" gibi ters kurulur: bana eşit geliyor.',
    },
    {
      id: 'es-gun-07', on: 'qué rollo', okunus: 'ke royo', tur: 'kalıp (argo)',
      arka: 'ne sıkıcı, ne saçma',
      ornek: '¡Qué rollo, otra vez examen!',
      ornekTr: 'Ne sıkıcı, yine sınav!',
      not: '"el rollo" rulo demektir; günlük dilde sıkıcı durum anlamına gelir.',
    },
    {
      id: 'es-gun-08', on: 'venga', okunus: 'benga', tur: 'ünlem',
      arka: 'hadi, yapma ya',
      ornek: '¡Venga, vamos que llegamos tarde!',
      ornekTr: 'Hadi, gidelim geç kalıyoruz!',
      not: 'Hem teşvik hem itiraz olabilir; ton belirler. İspanya\'ya özgüdür.',
    },
    {
      id: 'es-gun-09', on: 'la verdad es que', kok: 'verdad', okunus: 'la berdad es ke', tur: 'kalıp',
      arka: 'açıkçası, doğrusu',
      ornek: 'La verdad es que no me gustó el final.',
      ornekTr: 'Açıkçası sonu hoşuma gitmedi.',
      not: 'Fikir belirtirken cümleyi yumuşatır.',
    },
    {
      id: 'es-gun-10', on: 'hasta luego', kok: 'luego', okunus: 'asta luego', tur: 'kalıp',
      arka: 'görüşürüz',
      ornek: 'Me tengo que ir. ¡Hasta luego!',
      ornekTr: 'Gitmem lazım. Görüşürüz!',
      not: 'Ailesi: hasta mañana (yarın), hasta pronto (yakında), hasta ahora (birazdan).',
    },
  ],
}

export default DESTE
