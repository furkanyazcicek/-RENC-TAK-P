import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Award,
  FlaskConical,
  ListChecks,
  Plus,
  Target,
  TrendingUp,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { buildSubjectPerformance } from '../lib/examHelpers'
import { buildExamInsights, examStats, formatNumber, mockExamRows } from '../lib/insights'
import MockExamTrendChart from '../components/MockExamTrendChart'
import MockExamForm from '../components/MockExamForm'
import AddExamForm from '../components/AddExamForm'
import BranchExamList from '../components/BranchExamList'
import { AppShell, Button, Modal, Tabs } from '../components/ui'
import {
  DashboardHero,
  ExamAccordion,
  InsightBar,
  MetricTile,
  Panel,
  SubjectBars,
} from '../components/dashboard'

const EXAM_TYPE_ALL = 'Tümü'

export default function MockExams() {
  const { user } = useAuth()
  const [exams, setExams] = useState([]) // genel denemeler (LGS/TYT/AYT/KPSS)
  const [branchExams, setBranchExams] = useState([]) // branş denemeleri
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  const [mockModalOpen, setMockModalOpen] = useState(false)
  const [branchModalOpen, setBranchModalOpen] = useState(false)
  const [typeFilter, setTypeFilter] = useState(EXAM_TYPE_ALL)
  const [listTab, setListTab] = useState('general')

  const load = useCallback(async () => {
    if (!user) return
    const [mockRes, examsRes, profileRes] = await Promise.all([
      supabase
        .from('mock_exams')
        .select('*, mock_exam_subjects(*)')
        .eq('student_id', user.id)
        .order('exam_date', { ascending: false }),
      supabase
        .from('exams')
        .select('*')
        .eq('student_id', user.id)
        .order('exam_date', { ascending: false }),
      supabase.from('profiles').select('full_name').eq('id', user.id).maybeSingle(),
    ])
    setExams(mockRes.data ?? [])
    setBranchExams(examsRes.data ?? [])
    setProfile(profileRes.data ?? null)
    setLoading(false)
  }, [user])

  useEffect(() => {
    load()
  }, [load])

  /* --- Türetilen veriler --- */

  const examTypes = useMemo(() => {
    const set = new Set(exams.map((e) => e.exam_type).filter(Boolean))
    return Array.from(set).sort()
  }, [exams])

  const typeCounts = useMemo(() => {
    const counts = {}
    exams.forEach((e) => {
      counts[e.exam_type] = (counts[e.exam_type] || 0) + 1
    })
    return counts
  }, [exams])

  // Grafik ve ders dağılımı seçili sınav türüne göre daralır; metrikler ve
  // içgörüler ise her zaman tüm denemeler üzerinden hesaplanır — sekme
  // değiştirmek "genel durumum ne" cevabını değiştirmemeli.
  const filteredExams = useMemo(
    () => (typeFilter === EXAM_TYPE_ALL ? exams : exams.filter((e) => e.exam_type === typeFilter)),
    [exams, typeFilter]
  )

  const stats = useMemo(() => examStats(exams), [exams])
  const insights = useMemo(() => buildExamInsights(exams, branchExams), [exams, branchExams])
  const rows = useMemo(() => mockExamRows(filteredExams), [filteredExams])

  const subjectPerformance = useMemo(() => {
    const perf = buildSubjectPerformance(filteredExams)
    return perf.map((p) => ({
      subject: p.subject,
      pct: p.success,
      solved: p.examCount,
      avgNet: p.avgNet,
    }))
  }, [filteredExams])

  const deltaBadge =
    stats.delta == null || stats.delta === 0
      ? null
      : {
          value: `${formatNumber(Math.abs(stats.delta))} net`,
          direction: stats.delta > 0 ? 'up' : 'down',
        }

  async function handleDeleteExam(id) {
    const { error } = await supabase.from('mock_exams').delete().eq('id', id)
    if (!error) load()
  }

  const firstName = profile?.full_name?.split(' ')[0]

  return (
    <AppShell
      title="Denemeler"
      subtitle="Genel ve branş denemelerinin net dökümü"
      loading={loading}
      loadingLabel="Denemelerin yükleniyor…"
      showPageIntro={false}
      headerAction={
        <Button size="sm" icon={Plus} onClick={() => setMockModalOpen(true)}>
          <span className="hidden sm:inline">Deneme Ekle</span>
          <span className="sm:hidden">Ekle</span>
        </Button>
      }
    >
      <DashboardHero
        asPageHeader
        eyebrow="Denemeler"
        title={firstName ? `${firstName}, deneme tablon` : 'Deneme tablon'}
        subtitle={
          stats.count
            ? `${stats.count} genel deneme, ${branchExams.length} branş denemesi kayıtlı`
            : 'İlk deneme sonucunu girdiğinde gelişim çizgin burada oluşmaya başlar'
        }
        badge={stats.lastExam?.exam_type ? { label: stats.lastExam.exam_type, tone: 'amber' } : null}
        highlights={
          stats.count
            ? [
                { label: 'Son net', value: formatNumber(stats.lastNet) },
                { label: 'Ortalama', value: formatNumber(stats.avgNet) },
                { label: 'En iyi', value: formatNumber(stats.bestNet) },
              ]
            : []
        }
      />

      <InsightBar insights={insights} title="Denemelerinde öne çıkanlar" />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricTile
          label="Son Deneme"
          value={stats.lastNet != null ? formatNumber(stats.lastNet) : '—'}
          hint="net"
          icon={TrendingUp}
          tone="brand"
          delta={deltaBadge}
          trend={stats.series}
        />
        <MetricTile
          label="Ortalama Net"
          value={stats.avgNet != null ? formatNumber(stats.avgNet) : '—'}
          hint={stats.count ? `${stats.count} deneme boyunca` : 'henüz deneme yok'}
          icon={Target}
          tone="info"
        />
        <MetricTile
          label="En İyi Net"
          value={stats.bestNet != null ? formatNumber(stats.bestNet) : '—'}
          hint="şimdiye kadarki zirven"
          icon={Award}
          tone="accent"
        />
        <MetricTile
          label="Toplam Deneme"
          value={stats.count + branchExams.length}
          hint={`${stats.count} genel · ${branchExams.length} branş`}
          icon={ListChecks}
          tone="purple"
        />
      </div>

      <Panel
        title="Net Gelişimi"
        description={
          typeFilter === EXAM_TYPE_ALL
            ? 'Tüm denemelerin toplam neti, tarih sırasıyla'
            : `${typeFilter} denemelerinin toplam neti, tarih sırasıyla`
        }
        icon={TrendingUp}
        action={
          examTypes.length > 1 ? (
            <Tabs
              items={[
                { value: EXAM_TYPE_ALL, label: 'Tümü', count: exams.length },
                ...examTypes.map((t) => ({ value: t, label: t, count: typeCounts[t] })),
              ]}
              value={typeFilter}
              onChange={setTypeFilter}
            />
          ) : null
        }
        footnote="Kesikli gri çizgi, seçili denemelerin ortalama netidir. Net = doğru − yanlış/4 (LGS'de yanlış/3)."
      >
        <MockExamTrendChart exams={filteredExams} />
      </Panel>

      {subjectPerformance.length > 0 && (
        <Panel
          title="Ders Bazlı Ortalama Net"
          description="Her dersin ortalama neti, o derste sorulan ortalama soru sayısına oranlanarak karşılaştırılabilir hâle getirildi"
          icon={Target}
          footnote="Yüzde, doğru/yanlış sayımı değil net oranıdır: ortalama net ÷ ortalama soru sayısı."
        >
          <SubjectBars data={subjectPerformance} showAccuracy={false} unit="deneme" />
        </Panel>
      )}

      <Panel
        title="Deneme Kayıtları"
        description="Bir satıra dokun, o denemenin ders bazlı net dökümü açılsın"
        icon={ListChecks}
        padding={false}
        action={
          <Tabs
            items={[
              { value: 'general', label: 'Genel', count: rows.length },
              { value: 'branch', label: 'Branş', count: branchExams.length },
            ]}
            value={listTab}
            onChange={setListTab}
          />
        }
      >
        <div className="px-5 pb-5">
          {listTab === 'general' ? (
            <ExamAccordion
              rows={rows}
              onDelete={handleDeleteExam}
              emptyTitle={
                typeFilter === EXAM_TYPE_ALL
                  ? 'Henüz deneme sonucu yok'
                  : `${typeFilter} türünde deneme yok`
              }
              emptyDescription="Deneme sonucunu girdiğinde net gelişimi, ders dökümü ve karşılaştırmalar otomatik oluşur."
              emptyAction={
                <Button icon={Plus} onClick={() => setMockModalOpen(true)}>
                  Deneme Ekle
                </Button>
              }
            />
          ) : (
            <BranchExamList
              exams={branchExams}
              onChanged={load}
              emptyAction={
                <Button icon={Plus} onClick={() => setBranchModalOpen(true)}>
                  Branş Denemesi Ekle
                </Button>
              }
            />
          )}
        </div>

        {listTab === 'branch' && branchExams.length > 0 && (
          <div className="px-5 pb-5">
            <Button
              variant="secondary"
              size="sm"
              icon={FlaskConical}
              onClick={() => setBranchModalOpen(true)}
            >
              Branş Denemesi Ekle
            </Button>
          </div>
        )}
      </Panel>

      <Modal
        open={mockModalOpen}
        onClose={() => setMockModalOpen(false)}
        title="Yeni Deneme Sonucu"
        description="Ders satırlarını doldurdukça toplam net aşağıda güncellenir."
        maxWidth="max-w-2xl"
      >
        <MockExamForm
          onSubmitted={() => {
            load()
            setMockModalOpen(false)
          }}
        />
      </Modal>

      <Modal
        open={branchModalOpen}
        onClose={() => setBranchModalOpen(false)}
        title="Branş Denemesi Ekle"
        description="Tek bir dersten çözdüğün denemeyi kaydet."
        maxWidth="max-w-2xl"
      >
        <AddExamForm
          bare
          onAdded={() => {
            load()
            setBranchModalOpen(false)
          }}
        />
      </Modal>
    </AppShell>
  )
}
