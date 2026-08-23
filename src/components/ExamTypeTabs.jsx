import { SUBJECT_PRESETS } from '../lib/examHelpers'
import { Tabs } from './ui'

/**
 * Sınav türü seçici. Tasarım sistemindeki Tabs bileşenini kullanır,
 * böylece uygulamadaki diğer sekme şeritleriyle aynı görünür.
 */
export default function ExamTypeTabs({ value, onChange, counts = {} }) {
  const items = Object.keys(SUBJECT_PRESETS).map((type) => ({
    value: type,
    label: type,
    count: counts[type],
  }))

  return <Tabs items={items} value={value} onChange={onChange} />
}
