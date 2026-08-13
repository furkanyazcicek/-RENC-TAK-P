import { CalendarDays } from 'lucide-react'
import { splitSubjectTopic } from '../lib/topicHelpers'
import { Button, Card, CardHeader, EmptyState, Table, TBody, TD, TH, THead, TR } from './ui'

export default function DailyLogsList({ logs, title, allowTeacherEdit, onEditClick }) {
  const heading = title || 'Çalışma Geçmişi'

  if (!logs || logs.length === 0) {
    return (
      <EmptyState
        icon={CalendarDays}
        title={heading}
        description="Henüz çalışma kaydı bulunmuyor. Günlük Çalışma Takibi'nden ilk kaydı ekleyebilirsin."
        compact
      />
    )
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader title={heading} description={`${logs.length} kayıt`} icon={CalendarDays} />
      <Table>
        <THead>
          <TH>Tarih</TH>
          <TH>Ders / Konu</TH>
          <TH align="right">Süre</TH>
          <TH align="right">D / Y / B</TH>
          {allowTeacherEdit && (
            <TH align="right" className="sr-only">
              İşlem
            </TH>
          )}
        </THead>
        <TBody>
          {logs.map((log) => {
            const { subject, topic } = splitSubjectTopic(log.topic)
            return (
              <TR key={log.id} className="hover:bg-surface-muted">
                <TD className="whitespace-nowrap font-medium text-ink">
                  {new Date(log.study_date).toLocaleDateString('tr-TR', {
                    day: '2-digit',
                    month: 'short',
                  })}
                </TD>
                <TD>
                  <span className="font-semibold text-ink">{subject}</span>
                  {topic && <span className="block text-xs text-ink/60">{topic}</span>}
                </TD>
                <TD align="right" className="whitespace-nowrap font-semibold text-ink">
                  {log.duration_minutes || 0}
                  <span className="text-ink/55 font-normal"> dk</span>
                </TD>
                <TD align="right" className="whitespace-nowrap">
                  <span className="font-semibold text-success-600">{log.correct || 0}</span>
                  <span className="text-ink/45 mx-1">/</span>
                  <span className="font-semibold text-danger-600">{log.incorrect || 0}</span>
                  <span className="text-ink/45 mx-1">/</span>
                  <span className="text-ink/55">{log.empty || 0}</span>
                </TD>
                {allowTeacherEdit && (
                  <TD align="right">
                    <Button variant="subtle" size="xs" onClick={() => onEditClick?.(log)}>
                      Düzenle
                    </Button>
                  </TD>
                )}
              </TR>
            )
          })}
        </TBody>
      </Table>
    </Card>
  )
}
