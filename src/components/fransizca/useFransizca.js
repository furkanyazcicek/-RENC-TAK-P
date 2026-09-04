import { useEffect, useState } from 'react'
import { ilerlemeOku } from '../../lib/fransizca/ilerleme'
import { sesDurumu } from '../../lib/fransizca/ses'

/**
 * useIlerleme — öğrencinin Fransızca ilerlemesini okur ve değiştiğinde
 * kendini tazeler.
 *
 * Ekranlar `localStorage`'a dokunmaz; ilerleme deposu bir olay yayar
 * (`fransizca-ilerleme`) ve bütün ekranlar aynı anda güncellenir. Bu
 * sayede ders bitince ana sayfadaki "bugünün görevleri" listesi de,
 * üst şeritteki seri sayacı da kendiliğinden doğru duruma geçer.
 */
export function useIlerleme() {
  const [ilerleme, setIlerleme] = useState(ilerlemeOku)

  useEffect(() => {
    const tazele = () => setIlerleme(ilerlemeOku())
    window.addEventListener('fransizca-ilerleme', tazele)
    // Başka bir sekmede çalışıldıysa bu sekme de haberdar olsun.
    window.addEventListener('storage', tazele)
    return () => {
      window.removeEventListener('fransizca-ilerleme', tazele)
      window.removeEventListener('storage', tazele)
    }
  }, [])

  return ilerleme
}

/**
 * useSes — cihazda Fransızca ses olup olmadığını bir kez sorar.
 *
 * `null` → henüz bilinmiyor (ekran ses düğmesi basmaz)
 * `{ hazir: true }` → ses var
 * `{ hazir: false, mesaj }` → ses yok; ekran bunu AÇIKÇA söyler ve
 *   dinleme içeriklerini yazılı biçimde sunar.
 */
export function useSes() {
  const [durum, setDurum] = useState(null)

  useEffect(() => {
    let iptal = false
    sesDurumu().then((d) => { if (!iptal) setDurum(d) })
    return () => { iptal = true }
  }, [])

  return durum
}
