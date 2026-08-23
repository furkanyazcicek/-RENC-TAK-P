import { ListChecks } from 'lucide-react'
import { Badge, Card, EmptyState, Table, TBody, TD, TH, THead, TR } from './ui'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })
}

export default function TopicProgressTable({ stats }) {
  if (!stats || stats.length === 0) {
    return (
      <EmptyState
        icon={ListChecks}
        title="Konu bazlı gelişim için kayıt gerekiyor"
        description="Günlük çalışma kaydı eklediğinde her konunun doğru/yanlış dağılımı burada birikir."
        compact
      />
    )
  }

  return (
    <Card className="overflow-hidden">
      <Table className="min-w-[560px]">
        <THead>
          <TH>Ders</TH>
          <TH>Konu</TH>
          <TH align="center">Çalışma</TH>
          <TH align="center" className="text-success-700">
            D
          </TH>
          <TH align="center" className="text-danger-600">
            Y
          </TH>
          <TH align="center">Başarı</TH>
          <TH align="right">Son Çalışma</TH>
        </THead>
        <TBody>
          {stats.map((row) => (
            <TR key={row.key}>
              <TD className="text-ink/70">{row.subject}</TD>
              <TD className="font-semibold text-ink">{row.topic}</TD>
              <TD align="center" className="text-ink/60">
                {row.sessions}
              </TD>
              <TD align="center" className="font-semibold text-success-700">
                {row.correct}
              </TD>
              <TD align="center" className="font-semibold text-danger-600">
                {row.incorrect}
              </TD>
              <TD align="center">
                {row.accuracy != null ? (
                  <Badge
                    size="sm"
                    tone={
                      row.accuracy >= 75 ? 'success' : row.accuracy >= 50 ? 'warning' : 'danger'
                    }
                  >
                    %{row.accuracy}
                  </Badge>
                ) : (
                  <span className="text-ink/45">—</span>
                )}
              </TD>
              <TD align="right" className="whitespace-nowrap text-ink/60">
                {formatDate(row.lastDate)}
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </Card>
  )
}
