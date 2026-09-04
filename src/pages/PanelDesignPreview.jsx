import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Home,
  Library,
  MessageCircle,
  MoreHorizontal,
  Play,
  Search,
  Send,
  Sparkles,
  Target,
} from 'lucide-react'
import Logo from '../components/ui/Logo'
import '../styles/panel-tasarim-onizleme.css'

const VIEWS = [
  { id: 'analiz', label: 'Analiz', no: '01', Icon: BarChart3 },
  { id: 'mesajlar', label: 'Mesajlar', no: '02', Icon: MessageCircle },
  { id: 'plan', label: 'Günlük plan', no: '03', Icon: CalendarDays },
]

const NAV_ITEMS = [
  { label: 'Bugün', Icon: Home },
  { label: 'Ders Kütüphanesi', Icon: Library },
  { label: 'AI Koç', Icon: Sparkles },
  { label: 'Analiz', Icon: BarChart3, view: 'analiz' },
  { label: 'Günlük Plan', Icon: CalendarDays, view: 'plan' },
  { label: 'Mesajlar', Icon: MessageCircle, view: 'mesajlar' },
]

function PreviewShell({ view, eyebrow, title, subtitle, children }) {
  const navigate = useNavigate()

  return (
    <section className="panel-concept-shell" aria-label={`${title} tasarım örneği`}>
      <aside className="panel-concept-sidebar">
        <Logo tone="light" size="sm" />
        <span className="panel-concept-sidebar__label">ÇALIŞMA KİTABI</span>
        <nav aria-label="Örnek uygulama menüsü">
          {NAV_ITEMS.map(({ label, Icon, view: target }) => {
            const active = target === view
            return (
              <button
                key={label}
                type="button"
                className={active ? 'is-active' : undefined}
                onClick={() => target && navigate(`/panel-tasarim-onizleme/${target}`)}
                aria-current={active ? 'page' : undefined}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
                {active && <i aria-hidden="true" />}
              </button>
            )
          })}
        </nav>
        <div className="panel-concept-profile">
          <span>DK</span>
          <div><strong>Deniz Kaya</strong><small>TYT öğrencisi</small></div>
        </div>
      </aside>

      <div className="panel-concept-page">
        <header className="panel-concept-page__head">
          <div>
            <span>{eyebrow}</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <button type="button" aria-label="Sayfa seçenekleri"><MoreHorizontal /></button>
        </header>
        <main className="panel-concept-page__body">{children}</main>
        <footer className="panel-concept-page__foot">
          <span>DRKOÇ · KİŞİSEL ÖĞRENME DEFTERİ</span>
          <span>{VIEWS.findIndex((item) => item.id === view) + 12}</span>
        </footer>
      </div>
    </section>
  )
}

function AnalyticsPreview() {
  const bars = [42, 61, 54, 76, 48, 83, 64, 88, 72, 92, 78, 96]

  return (
    <PreviewShell
      view="analiz"
      eyebrow="HAFTALIK İNCELEME · 26 AĞUSTOS — 1 EYLÜL"
      title="Çalışmanın izini gör."
      subtitle="Sayıları çoğaltmadan, bu hafta gerçekten değişen noktaları oku."
    >
      <div className="panel-analytics-summary">
        <div><span>ÇALIŞMA</span><strong>11s 41dk</strong><small>+3s 23dk</small></div>
        <div><span>ÇÖZÜLEN</span><strong>409</strong><small>+123 soru</small></div>
        <div><span>İSABET</span><strong>%83</strong><small>+8 puan</small></div>
        <p><Sparkles aria-hidden="true" /> En güçlü ilerleme problem çözme hızında.</p>
      </div>

      <div className="panel-analytics-grid">
        <article className="panel-paper-section panel-chart-section">
          <header><div><span>RİTİM</span><h2>Son 12 çalışma günü</h2></div><strong>İstikrarlı</strong></header>
          <div className="panel-chart" aria-label="Çalışma süresi sütun grafiği">
            <div className="panel-chart__bars">
              {bars.map((height, index) => (
                <i key={index} style={{ '--bar-height': `${height}%` }}><span>{index + 1}</span></i>
              ))}
            </div>
            <div className="panel-chart__rule panel-chart__rule--one" />
            <div className="panel-chart__rule panel-chart__rule--two" />
          </div>
          <footer><span>22 Ağu</span><span>1 Eyl</span></footer>
        </article>

        <aside className="panel-margin-note">
          <span>KENAR NOTU</span>
          <h2>Çarşamba günü kurduğun düzen haftanın geri kalanına taşınmış.</h2>
          <p>Bir sonraki adım daha uzun çalışmak değil; Matematik oturumunu aynı saatte başlatmak.</p>
          <button type="button">Ayrıntıyı incele <ArrowRight /></button>
        </aside>
      </div>

      <div className="panel-subject-line">
        <span>DERS DAĞILIMI</span>
        <div><i className="is-violet" style={{ width: '34%' }} /><i className="is-teal" style={{ width: '27%' }} /><i className="is-copper" style={{ width: '21%' }} /><i className="is-blue" style={{ width: '18%' }} /></div>
        <ul><li><i className="is-violet" />Matematik · %34</li><li><i className="is-teal" />Türkçe · %27</li><li><i className="is-copper" />Fizik · %21</li><li><i className="is-blue" />Diğer · %18</li></ul>
      </div>
    </PreviewShell>
  )
}

const CONTACTS = [
  { initials: 'FK', name: 'Furkan Hoca', note: 'Yeni çözüm gönderdi', time: '14.28', active: true },
  { initials: 'EA', name: 'Ece Hoca', note: 'Yarınki ders hakkında', time: 'Dün' },
  { initials: 'AK', name: 'Akademik Koç', note: 'Haftalık planın hazır', time: 'Pzt' },
]

function MessagesPreview() {
  return (
    <PreviewShell
      view="mesajlar"
      eyebrow="ÖĞRETMEN MASASI · 3 KONUŞMA"
      title="Notların burada devam ediyor."
      subtitle="Soru, çözüm ve öğretmen geri bildirimi tek bir çalışma sayfasında."
    >
      <div className="panel-messages-layout">
        <aside className="panel-contacts">
          <label><Search aria-hidden="true" /><input aria-label="Konuşmalarda ara" placeholder="Konuşmalarda ara" /></label>
          <div className="panel-contacts__list">
            {CONTACTS.map((contact) => (
              <button key={contact.name} type="button" className={contact.active ? 'is-active' : undefined}>
                <span>{contact.initials}</span>
                <div><strong>{contact.name}</strong><small>{contact.note}</small></div>
                <time>{contact.time}</time>
              </button>
            ))}
          </div>
          <p><i /> Öğretmenin çevrimiçi</p>
        </aside>

        <article className="panel-chat">
          <header>
            <div><span>FK</span><div><strong>Furkan Hoca</strong><small>Matematik öğretmeni</small></div></div>
            <button type="button">Ders notları <BookOpen /></button>
          </header>
          <div className="panel-chat__date"><span>BUGÜN</span></div>
          <div className="panel-chat__messages">
            <div className="is-teacher"><p>Tepe noktasını bulurken işaret neden değişiyor, birlikte bakalım.</p><time>14.24</time></div>
            <div className="is-student"><p>−b / 2a yazıyorum ama eksi işaretini bazen atlıyorum.</p><time>14.25</time></div>
            <div className="is-teacher panel-chat__formula"><span>ÇÖZÜM NOTU</span><strong>x = −(−4) / 2·2 = 1</strong><p>Önce <b>−b</b> bölümünü paranteze al. Böylece işlem görünür kalır.</p><time>14.28</time></div>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <input aria-label="Mesaj yaz" placeholder="Bir not yaz…" />
            <button type="submit" aria-label="Mesajı gönder"><Send /></button>
          </form>
        </article>
      </div>
    </PreviewShell>
  )
}

const PLAN_ITEMS = [
  { time: '16.00', duration: '35 dk', title: 'Fonksiyonlar', note: '12 soru · Tepe noktası', state: 'done', color: 'violet' },
  { time: '16.45', duration: '25 dk', title: 'Paragraf', note: 'Ana düşünce · 10 soru', state: 'active', color: 'teal' },
  { time: '17.20', duration: '20 dk', title: 'Fizik tekrarı', note: 'Sabit ivmeli hareket', state: 'next', color: 'copper' },
]

function PlanPreview() {
  return (
    <PreviewShell
      view="plan"
      eyebrow="3 EYLÜL · ÇARŞAMBA"
      title="Bugünün çalışma sayfası."
      subtitle="Önündeki tek adıma odaklan; günün bütünü kendiliğinden ilerlesin."
    >
      <div className="panel-plan-progress">
        <div><span>BUGÜN</span><strong>1 / 3 tamamlandı</strong></div>
        <div><i /></div>
        <small>Toplam 1s 20dk · tahmini bitiş 17.40</small>
      </div>

      <div className="panel-plan-layout">
        <section className="panel-timeline" aria-label="Bugünün çalışma planı">
          {PLAN_ITEMS.map((item, index) => (
            <article key={item.time} className={`is-${item.state}`}>
              <time>{item.time}<small>{item.duration}</small></time>
              <i className={`is-${item.color}`}>{item.state === 'done' ? <Check /> : index + 1}</i>
              <div><span>{item.state === 'active' ? 'ŞİMDİ' : item.state === 'done' ? 'TAMAMLANDI' : 'SIRADA'}</span><h2>{item.title}</h2><p>{item.note}</p></div>
              {item.state === 'active' ? <button type="button">Devam et <Play /></button> : <ChevronRight aria-hidden="true" />}
            </article>
          ))}
        </section>

        <aside className="panel-plan-focus">
          <span>GÜNÜN ODAĞI</span>
          <Target aria-hidden="true" />
          <h2>Hızlanmadan önce ritmi koru.</h2>
          <p>Her paragrafta önce soru kökünü işaretle. Süreyi ancak ikinci turda kontrol et.</p>
          <dl><div><dt>Hedef</dt><dd>10 soru</dd></div><div><dt>Süre</dt><dd>25 dk</dd></div></dl>
          <button type="button"><Clock3 /> 25:00 odak sayacını başlat</button>
        </aside>
      </div>
    </PreviewShell>
  )
}

const PAGES = { analiz: AnalyticsPreview, mesajlar: MessagesPreview, plan: PlanPreview }

export default function PanelDesignPreview() {
  const { view } = useParams()
  const navigate = useNavigate()
  const activeView = PAGES[view] ? view : 'analiz'
  const ActivePage = useMemo(() => PAGES[activeView], [activeView])

  return (
    <div className="panel-concepts">
      <header className="panel-concepts__intro">
        <div>
          <span>TASARIM ÇALIŞMASI · ANA SAYFADAKİ KİTAPTAN TÜRETİLDİ</span>
          <h1>Aynı kitabın içindeki üç farklı sayfa.</h1>
          <p>Lacivert kumaş cilt, sıcak krem kâğıt, mor etkileşim ve ayrıntıda kalan mat altın.</p>
        </div>
        <nav aria-label="Tasarım örnekleri">
          {VIEWS.map(({ id, label, no, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => navigate(`/panel-tasarim-onizleme/${id}`)}
              aria-selected={activeView === id}
            >
              <span>{no}</span><Icon aria-hidden="true" />{label}
            </button>
          ))}
        </nav>
      </header>
      <ActivePage />
      <p className="panel-concepts__note">Bu ekranlar yalnız tasarım önizlemesidir; mevcut öğrenci verileri ve işlevleri değiştirilmedi.</p>
    </div>
  )
}
