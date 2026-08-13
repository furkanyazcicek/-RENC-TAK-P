import { useNavigate } from 'react-router-dom'
import { ChevronRight, Users } from 'lucide-react'
import { formatDuration } from '../lib/topicHelpers'
import { Avatar, Badge, Card, EmptyState, Table, TBody, TD, TH, THead, TR } from './ui'

/**
 * Öğrenci listesi. Öğretmenin en çok ihtiyaç duyduğu bilgi "kim yavaşladı"
 * olduğu için son 7 gün / önceki 7 gün karşılaştırmasından çıkan eğilim
 * durumu da satırda gösterilir (bkz. TeacherDashboard'daki `trend` hesabı).
 */
const TREND_LABELS = {
  up: { label: 'Yükselişte', tone: 'success' },
  steady: { label: 'Sabit', tone: 'neutral' },
  down: { label: 'Yavaşladı', tone: 'warning' },
  idle: { label: 'Bu hafta yok', tone: 'danger' },
  none: { label: 'Kayıt yok', tone: 'neutral' },
}

export default function StudentList({ students }) {
  const navigate = useNavigate()

  if (!students || students.length === 0) {
    return (
      <EmptyState
        icon={Users}
        title="Kayıtlı öğrenci bulunamadı"
        description="Öğrencilerin kayıt olduğunda listeleri burada otomatik olarak görünecek."
        compact
      />
    )
  }

  return (
    <Card className="overflow-hidden">
      <Table>
        <THead>
          <TH>Öğrenci</TH>
          <TH className="hidden sm:table-cell">Toplam Çalışma</TH>
          <TH className="hidden md:table-cell">Çözülen Soru</TH>
          <TH align="right">Durum</TH>
        </THead>
        <TBody>
          {students.map((s) => {
            const durationLabel = formatDuration(s.totalMinutes)
            const trend = TREND_LABELS[s.trend] ?? null

            return (
              <TR key={s.id} onClick={() => navigate(`/ogretmen/ogrenci/${s.id}`)} className="group">
                <TD>
                  <div className="flex items-center gap-3">
                    <Avatar name={s.full_name} size="sm" />
                    <div className="min-w-0">
                      <span className="block font-semibold text-ink truncate">{s.full_name}</span>
                      {/* Dar ekranda süre bilgisi ismin altına iner */}
                      <span className="sm:hidden block text-xs text-ink/55">
                        {durationLabel ?? 'Veri yok'}
                      </span>
                    </div>
                  </div>
                </TD>

                <TD className="hidden sm:table-cell">
                  {durationLabel ? (
                    <span className="font-semibold text-brand-600">{durationLabel}</span>
                  ) : (
                    <span className="text-ink/45">Veri yok</span>
                  )}
                </TD>

                <TD className="hidden md:table-cell">
                  {s.totalSolved != null ? (
                    <span className="font-semibold">{s.totalSolved.toLocaleString('tr-TR')}</span>
                  ) : (
                    <span className="text-ink/45">—</span>
                  )}
                </TD>

                <TD align="right">
                  <span className="inline-flex items-center gap-2">
                    {trend && (
                      <Badge tone={trend.tone} size="sm" dot>
                        {trend.label}
                      </Badge>
                    )}
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-ink/45 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                </TD>
              </TR>
            )
          })}
        </TBody>
      </Table>
    </Card>
  )
}
