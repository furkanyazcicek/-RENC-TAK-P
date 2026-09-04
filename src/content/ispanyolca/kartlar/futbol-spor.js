/**
 * DESTE — FUTBOL VE SPOR (İspanyolca)
 *
 * İspanyolca futbol dili dünyada en çok duyulan futbol dilidir; öğrenci
 * bu kelimelerin çoğunu maç anlatımlarından zaten duymuştur. Kartlar bu
 * tanıdıklığı kullanır ve üstüne doğru artikeli ekler.
 */

export const DESTE = {
  id: 'futbol-spor',
  dil: 'es',
  ad: 'Futbol ve spor',
  simge: '⚽',
  aciklama: 'Maç anlatımında ve tribünde geçen kelimeler — artikelleriyle.',
  seviye: 'A1–A2',
  kartlar: [
    {
      id: 'es-fut-01', on: 'el gol', okunus: 'el gol', tur: 'isim (eril)',
      arka: 'gol',
      ornek: 'Marcó un gol en el último minuto.',
      ornekTr: 'Son dakikada bir gol attı.',
      not: 'Gol atmak "marcar un gol"dur. Çoğulu "los goles".',
    },
    {
      id: 'es-fut-02', on: 'el partido', okunus: 'el partido', tur: 'isim (eril)',
      arka: 'maç',
      ornek: 'El partido empieza a las nueve.',
      ornekTr: 'Maç dokuzda başlıyor.',
      not: 'Aynı kelime siyasi "parti" anlamına da gelir; bağlam ayırır.',
    },
    {
      id: 'es-fut-03', on: 'el equipo', okunus: 'el ekipo', tur: 'isim (eril)',
      arka: 'takım',
      ornek: 'Mi equipo favorito ganó ayer.',
      ornekTr: 'En sevdiğim takım dün kazandı.',
      not: 'Türkçedeki "ekip" kelimesiyle aynı kökten. Erildir.',
    },
    {
      id: 'es-fut-04', on: 'ganar', okunus: 'ganar', tur: 'fiil',
      arka: 'kazanmak',
      ornek: 'Vamos a ganar este partido.',
      ornekTr: 'Bu maçı kazanacağız.',
      not: 'Hem maç hem para kazanmak için kullanılır.',
    },
    {
      id: 'es-fut-05', on: 'perder', okunus: 'perder', tur: 'fiil (kök değişimli)',
      arka: 'kaybetmek',
      ornek: 'Perdieron dos a cero.',
      ornekTr: 'İki sıfır kaybettiler.',
      not: 'Kök değişir: pierdo, pierdes… Skor "a" ile: dos a cero.',
    },
    {
      id: 'es-fut-06', on: 'el entrenador', okunus: 'el entrenador', tur: 'isim (eril)',
      arka: 'teknik direktör',
      ornek: 'El entrenador cambió a tres jugadores.',
      ornekTr: 'Teknik direktör üç oyuncu değiştirdi.',
      not: 'Dişili "la entrenadora". Antrenman "el entrenamiento".',
    },
    {
      id: 'es-fut-07', on: 'el jugador', okunus: 'el hugador', tur: 'isim (eril)',
      arka: 'oyuncu',
      ornek: 'Es el mejor jugador del mundo.',
      ornekTr: 'Dünyanın en iyi oyuncusu.',
      not: '"jugar" (oynamak) fiilinden. Baştaki "j" gırtlaktan okunur.',
    },
    {
      id: 'es-fut-08', on: 'la afición', okunus: 'la afisyon', tur: 'isim (dişil)',
      arka: 'taraftar topluluğu',
      ornek: 'La afición llenó el estadio.',
      ornekTr: 'Taraftarlar stadyumu doldurdu.',
      not: 'Tek bir taraftar "el aficionado / la aficionada"dır.',
    },
    {
      id: 'es-fut-09', on: 'entrenar', okunus: 'entrenar', tur: 'fiil',
      arka: 'antrenman yapmak',
      ornek: 'Entreno tres veces por semana.',
      ornekTr: 'Haftada üç kez antrenman yapıyorum.',
      not: 'Sıklık "veces por semana" ile söylenir.',
    },
    {
      id: 'es-fut-10', on: 'lesionarse', kok: 'lesion', okunus: 'lesyonarse', tur: 'fiil (dönüşlü)',
      arka: 'sakatlanmak',
      ornek: 'Se lesionó en el entrenamiento.',
      ornekTr: 'Antrenmanda sakatlandı.',
      not: 'Dönüşlüdür: me lesiono, te lesionas… Sakatlık "la lesión".',
    },
  ],
}

export default DESTE
