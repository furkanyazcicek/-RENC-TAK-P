/**
 * Fizik Atlası — İkon kaydı
 * ==================================================================
 * `import * as Ikonlar from 'lucide-react'` yazmak kolaydır ama paketleyici
 * bunu ağaç budayamaz: 1500'den fazla ikonun tamamı pakete girer ve
 * Fizik Atlası'nın indirme boyutu birkaç yüz kilobayt şişer. Öğrencinin
 * çoğu telefondan girdiği için bu kabul edilemez.
 *
 * Bu yüzden yalnızca gerçekten kullanılan ikonlar tek tek içe aktarılır
 * ve buradan koduyla çözülür.
 */

import {
  AudioWaveform, Award, Boxes, CircuitBoard, Circle, Compass, Footprints,
  Gauge, Lightbulb, LineChart, Magnet, MoveUpRight, Rocket, Ruler, Search,
  Sparkles, Target, Thermometer, Waves, Wrench, Zap,
} from 'lucide-react'

const KAYIT = {
  AudioWaveform, Award, Boxes, CircuitBoard, Circle, Compass, Footprints,
  Gauge, Lightbulb, LineChart, Magnet, MoveUpRight, Rocket, Ruler, Search,
  Sparkles, Target, Thermometer, Waves, Wrench, Zap,
}

/** Kod ile ikon bileşeni döndürür; bulunamazsa nötr bir daire verir. */
export function ikonBul(kod) {
  return KAYIT[kod] ?? Circle
}

export default KAYIT
