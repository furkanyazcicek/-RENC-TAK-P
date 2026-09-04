import { useEffect, useState } from 'react'
import { ilerlemeOku } from '../../lib/ispanyolca/ilerleme'
import { sesDurumu } from '../../lib/ispanyolca/ses'

/**
 * useIlerleme — öğrencinin İspanyolca ilerlemesini okur ve değiştiğinde
 * kendini tazeler.
 *
 * Ekranlar `localStorage`'a dokunmaz; ilerleme deposu bir olay yayar
 * (`ispanyolca-ilerleme`) ve bütün ekranlar aynı anda güncellenir. Bu
 * sayede ders bitince ana sayfadaki "bugünün görevleri" listesi de,
 * üst şeritteki seri sayacı da kendiliğinden doğru duruma geçer.
 */
export function useIlerleme() {
  const [ilerleme, setIlerleme] = useState(ilerlemeOku)

  useEffect(() => {
    const tazele = () => setIlerleme(ilerlemeOku())
    window.addEventListener('ispanyolca-ilerleme', tazele)
    // Başka bir sekmede çalışıldıysa bu sekme de haberdar olsun.
    window.addEventListener('storage', tazele)
    return () => {
      window.removeEventListener('ispanyolca-ilerleme', tazele)
      window.removeEventListener('storage', tazele)
    }
  }, [])

  return ilerleme
}

/**
 * useSes — cihazda İspanyolca ses olup olmadığını bir kez sorar.
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
