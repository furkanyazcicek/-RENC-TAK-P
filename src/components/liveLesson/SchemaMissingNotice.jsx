import { Database } from 'lucide-react'
import { EmptyState } from '../ui'

/**
 * Canlı ders tabloları veritabanında yoksa gösterilir.
 *
 * Neden ayrı bir ekran: göç (migration) dosyası hazır ama canlı
 * veritabanına UYGULANMADI — bu bilinçli bir karar, izin gerektiriyor.
 * O ana kadar sayfa çökmemeli ve kullanıcı ne yapması gerektiğini
 * Türkçe okumalı.
 */
export default function SchemaMissingNotice() {
  return (
    <EmptyState
      icon={Database}
      title="Canlı ders altyapısı henüz kurulmadı"
      description={
        'Bu özelliğin veritabanı kurulumu hazır ama henüz uygulanmadı. ' +
        'Uygulandığında bu ekran kendiliğinden çalışmaya başlar. ' +
        'Kurulum dosyası: supabase/migration_live_lessons.sql'
      }
    />
  )
}
