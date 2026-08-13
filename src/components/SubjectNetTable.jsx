import { Table as TableIcon } from 'lucide-react'
import { Badge, Card, EmptyState, Table, TBody, TD, TH, THead, TR } from './ui'

/**
 * SubjectNetTable — deneme türüne göre ders bazlı net özeti.
 *
 * Net başarı yüzdesi bir DURUM bildirir (iyi / orta / zayıf); bu yüzden
 * ham metin rengi yerine rozet giyer — renk körü kullanıcılar için de
 * yüzde değeri metinde okunur kalır.
 */
export default function SubjectNetTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <EmptyState
        icon={TableIcon}
        title="Henüz deneme sonucu yok"
        description="Bir deneme girdiğinde ders bazlı net tablosu burada oluşacak."
        compact
      />
    )
  }

  return (
    <Card className="overflow-hidden">
      <Table className="min-w-[480px]">
        <THead>
          <TH>Ders</TH>
          <TH align="center">Deneme Sayısı</TH>
          <TH align="center">Ortalama Net</TH>
          <TH align="center">Toplam Net</TH>
          <TH align="right">Net Başarı %</TH>
        </THead>
        <TBody>
          {data.map((row) => (
            <TR key={row.subject}>
              <TD className="font-semibold text-ink">{row.subject}</TD>
              <TD align="center" className="text-ink/60">
                {row.examCount}
              </TD>
              <TD align="center" className="font-bold text-brand-600">
                {row.avgNet}
              </TD>
              <TD align="center" className="text-ink/60">
                {row.totalNet}
              </TD>
              <TD align="right">
                <Badge
                  size="sm"
                  tone={row.success >= 75 ? 'success' : row.success >= 50 ? 'warning' : 'danger'}
                >
                  %{row.success}
                </Badge>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </Card>
  )
}
