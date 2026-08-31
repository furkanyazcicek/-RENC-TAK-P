import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Eye,
  EyeOff,
  FileText,
  Image as ImageIcon,
  Link2,
  Loader2,
  Map as MapIcon,
  MonitorPlay,
  Plus,
  Search,
  Trash2,
  TriangleAlert,
  Upload,
  X,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { Alert, Badge, Button, EmptyState, Field, Input, Tabs } from '../ui'
import { MATERIAL_KINDS } from '../../lib/liveLesson/status'
import {
  atlasMaterials,
  fetchLibraryNotes,
  fetchStudentMistakes,
  fetchStudentQuestions,
  uploadLessonFile,
} from '../../lib/liveLesson/materialSources'

/**
 * Materyal merkezi — canlı derste "şimdi şuna bakalım" anının aracı.
 *
 * İki iş yapar: derse eklenmiş materyalleri yönetmek ve yeni materyal
 * bulmak. Arama ve tür filtresi aynı satırda; sonuçlar KART DEĞİL, ince
 * satırlar — çekmece dar ve her sonucu karta koymak kaydırmayı üçe katlar.
 */

const SOURCES = [
  { value: 'question', label: 'Sorular', Icon: TriangleAlert },
  { value: 'exam_mistake', label: 'Yanlışlar', Icon: TriangleAlert },
  { value: 'library', label: 'Kütüphane', Icon: FileText },
  { value: 'atlas', label: 'Atlaslar', Icon: MapIcon },
]

function KindIcon({ kind, className }) {
  const Icon =
    kind === 'image' ? ImageIcon : kind === 'atlas' ? MapIcon : kind === 'link' ? Link2 : kind === 'pdf' ? FileText : MonitorPlay
  return <Icon className={className} strokeWidth={2} aria-hidden="true" />
}

export default function MaterialPanel({
  sessionId,
  studentId,
  materials,
  onAdd,
  onRemove,
  onToggleVisible,
  onOpen,
  onSendToBoard,
  busy,
}) {
  const [tab, setTab] = useState('added')
  const [source, setSource] = useState('question')
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [linkUrl, setLinkUrl] = useState('')
  const [linkTitle, setLinkTitle] = useState('')
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      if (source === 'question') setResults(await fetchStudentQuestions(studentId))
      else if (source === 'exam_mistake') setResults(await fetchStudentMistakes(studentId))
      else if (source === 'library') setResults(await fetchLibraryNotes({ search }))
      else setResults(atlasMaterials(search))
    } catch (err) {
      setError('Materyaller yüklenemedi. Bağlantınızı kontrol edip tekrar deneyin.')
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [source, studentId, search])

  useEffect(() => {
    if (tab !== 'find') return undefined
    const timer = window.setTimeout(load, 250)
    return () => window.clearTimeout(timer)
  }, [tab, load])

  const filtered =
    source === 'library' || source === 'atlas'
      ? results
      : results.filter((r) => {
          const q = search.trim().toLocaleLowerCase('tr-TR')
          if (!q) return true
          return `${r.title} ${r.subtitle}`.toLocaleLowerCase('tr-TR').includes(q)
        })

  async function handleUpload(event) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (file.size > 12 * 1024 * 1024) {
      setError('Dosya 12 MB sınırını aşıyor. Daha küçük bir dosya seçin.')
      return
    }
    setUploading(true)
    setError(null)
    try {
      const url = await uploadLessonFile(sessionId, file)
      const isImage = /^image\//.test(file.type)
      await onAdd({
        kind: isImage ? 'image' : 'pdf',
        title: file.name.replace(/\.[^.]+$/, ''),
        url,
        visible_to_student: true,
      })
      setTab('added')
    } catch (err) {
      setError('Dosya yüklenemedi. Bağlantınızı kontrol edip tekrar deneyin.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Tabs
        items={[
          { value: 'added', label: 'Derste', count: materials.length },
          { value: 'find', label: 'Ekle' },
        ]}
        value={tab}
        onChange={setTab}
        variant="underline"
      />

      {error && (
        <Alert tone="warning" title="Materyal işlemi tamamlanamadı">
          {error}
        </Alert>
      )}

      {tab === 'added' ? (
        materials.length === 0 ? (
          <EmptyState
            compact
            icon={FileText}
            title="Derse henüz materyal eklenmedi"
            description="Öğrencinin bekleyen soruları, ders notları ve atlaslar 'Ekle' sekmesinden bir dokunuşla derse gelir."
            action={
              <Button size="sm" icon={Plus} onClick={() => setTab('find')}>
                Materyal Ekle
              </Button>
            }
          />
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {materials.map((m) => (
              <li key={m.id} className="flex items-start gap-3 py-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-btn bg-brand-500/10 text-brand-600">
                  <KindIcon kind={m.kind} className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{m.title}</p>
                  <p className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-ink/55">
                    <span>{MATERIAL_KINDS[m.kind]?.label ?? 'Materyal'}</span>
                    {m.visible_to_student ? (
                      <Badge tone="success" size="sm" icon={Eye}>
                        Öğrenciyle paylaşıldı
                      </Badge>
                    ) : (
                      <Badge tone="neutral" size="sm" icon={EyeOff}>
                        Yalnız sende
                      </Badge>
                    )}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <Button size="xs" variant="secondary" onClick={() => onOpen(m)}>
                      Aç
                    </Button>
                    {(m.kind === 'image' || m.meta?.imageUrl || m.url?.match(/\.(png|jpe?g|webp|gif)$/i)) && (
                      <Button size="xs" variant="ghost" onClick={() => onSendToBoard(m)}>
                        Tahtaya aktar
                      </Button>
                    )}
                    <Button
                      size="xs"
                      variant="ghost"
                      icon={m.visible_to_student ? EyeOff : Eye}
                      onClick={() => onToggleVisible(m)}
                    >
                      {m.visible_to_student ? 'Paylaşımı kaldır' : 'Öğrenciyle paylaş'}
                    </Button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(m)}
                  aria-label={`${m.title} materyalini kaldır`}
                  className="focus-ring mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-btn text-ink/45 transition-colors hover:bg-danger-500/[0.08] hover:text-danger-600"
                >
                  <Trash2 className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )
      ) : (
        <div className="flex flex-col gap-3">
          <Tabs
            items={SOURCES.map((s) => ({ value: s.value, label: s.label }))}
            value={source}
            onChange={setSource}
          />

          <Input
            icon={Search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Materyal ara"
            aria-label="Materyal ara"
          />

          {loading ? (
            <p className="flex items-center gap-2 py-6 text-sm text-ink/55">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Yükleniyor…
            </p>
          ) : filtered.length === 0 ? (
            <EmptyState
              compact
              icon={Search}
              title="Sonuç yok"
              description="Arama sözcüğünü değiştirin veya başka bir kaynak seçin."
            />
          ) : (
            <ul className="flex flex-col divide-y divide-line">
              {filtered.map((r) => (
                <li key={r.key} className="flex items-center gap-3 py-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink">{r.title}</p>
                    <p className="truncate text-xs text-ink/55">
                      {r.subtitle}
                      {r.badge ? ` · ${r.badge}` : ''}
                    </p>
                  </div>
                  <Button
                    size="xs"
                    variant="secondary"
                    icon={Plus}
                    disabled={busy}
                    onClick={() =>
                      onAdd({
                        kind: r.kind,
                        title: r.title,
                        ref_id: r.refId ?? null,
                        ref_slug: r.refSlug ?? null,
                        url: r.url ?? null,
                        meta: r.meta ?? (r.imageUrl ? { imageUrl: r.imageUrl } : {}),
                        visible_to_student: r.kind === 'question' || r.kind === 'atlas',
                      })
                    }
                  >
                    Ekle
                  </Button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-1 flex flex-col gap-3 rounded-card border border-line bg-surface-muted p-3.5">
            <p className="text-xs font-semibold text-ink/70">Kendi dosyanı veya bağlantını ekle</p>

            <input
              ref={fileRef}
              type="file"
              accept="image/*,application/pdf"
              className="sr-only"
              onChange={handleUpload}
            />
            <Button
              variant="secondary"
              size="sm"
              icon={Upload}
              loading={uploading}
              onClick={() => fileRef.current?.click()}
            >
              PDF veya görsel yükle
            </Button>

            <div className="flex flex-col gap-2">
              <Field label="Bağlantı adresi">
                {({ id }) => (
                  <Input
                    id={id}
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    placeholder="https://…"
                    inputMode="url"
                  />
                )}
              </Field>
              <Field label="Bağlantı adı">
                {({ id }) => (
                  <Input
                    id={id}
                    value={linkTitle}
                    onChange={(e) => setLinkTitle(e.target.value)}
                    placeholder="Örn. Konu anlatım videosu"
                  />
                )}
              </Field>
              <Button
                size="sm"
                variant="secondary"
                icon={Link2}
                disabled={!linkUrl.trim()}
                onClick={async () => {
                  await onAdd({
                    kind: 'link',
                    title: linkTitle.trim() || linkUrl.trim(),
                    url: linkUrl.trim(),
                    visible_to_student: true,
                  })
                  setLinkUrl('')
                  setLinkTitle('')
                  setTab('added')
                }}
              >
                Bağlantıyı ekle
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
