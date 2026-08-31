import { useCallback, useEffect, useRef, useState } from 'react'
import {
  BookMarked,
  Eye,
  EyeOff,
  FileText,
  PenLine,
  Pin,
  PinOff,
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
  formatFileSize,
  MAX_UPLOAD_MB,
  uploadLessonFile,
} from '../../lib/liveLesson/materialSources'
import {
  addToTeacherLibrary,
  fetchTeacherLibrary,
  removeLibraryMaterial,
  touchLibraryMaterial,
  updateLibraryMaterial,
} from '../../lib/liveLesson/api'

/**
 * Materyal merkezi — canlı derste "şimdi şuna bakalım" anının aracı.
 *
 * İki iş yapar: derse eklenmiş materyalleri yönetmek ve yeni materyal
 * bulmak. Arama ve tür filtresi aynı satırda; sonuçlar KART DEĞİL, ince
 * satırlar — çekmece dar ve her sonucu karta koymak kaydırmayı üçe katlar.
 */

const SOURCES = [
  // Kitaplık BAŞTA: öğretmen dersi çoğunlukla kendi hazırladığı PDF
  // üzerinden anlatıyor, en sık buraya bakacak.
  { value: 'kitaplik', label: 'Kitaplığım', Icon: BookMarked },
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
  teacherId,
  studentId,
  materials,
  onAdd,
  onRemove,
  onToggleVisible,
  onOpen,
  onSendToBoard,
  onOpenOnBoard,
  busy,
}) {
  const [tab, setTab] = useState('added')
  const [source, setSource] = useState('kitaplik')
  const [library, setLibrary] = useState([])
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [linkUrl, setLinkUrl] = useState('')
  const [linkTitle, setLinkTitle] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadInfo, setUploadInfo] = useState(null)
  const fileRef = useRef(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      if (source === 'kitaplik') {
        const rows = await fetchTeacherLibrary({ search })
        setLibrary(rows)
        setResults(
          rows.map((m) => ({
            key: `kitaplik:${m.id}`,
            libraryId: m.id,
            kind: m.kind,
            title: m.title,
            subtitle: [m.subject, m.topic].filter(Boolean).join(' · ') || 'Kitaplığım',
            badge: m.meta?.pages ? `${m.meta.pages} sayfa` : null,
            url: m.url,
            pinned: m.pinned,
            imageUrl: m.kind === 'image' ? m.url : null,
          }))
        )
      } else if (source === 'question') setResults(await fetchStudentQuestions(studentId))
      else if (source === 'exam_mistake') setResults(await fetchStudentMistakes(studentId))
      else if (source === 'library') setResults(await fetchLibraryNotes({ search }))
      else setResults(atlasMaterials(search))
    } catch (err) {
      setError('Materyaller yüklenemedi. Bağlantınızı kontrol edip tekrar deneyin.')
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [source, studentId, search, teacherId])

  useEffect(() => {
    if (tab !== 'find') return undefined
    const timer = window.setTimeout(load, 250)
    return () => window.clearTimeout(timer)
  }, [tab, load])

  const filtered =
    source === 'library' || source === 'atlas' || source === 'kitaplik'
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
    if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
      setError(
        `Bu dosya ${formatFileSize(file.size)} — üst sınır ${MAX_UPLOAD_MB} MB. ` +
          'PDF’i sıkıştırıp (örneğin Önizleme > Dışa Aktar > Quartz filtresi) tekrar deneyin.'
      )
      return
    }
    setUploading(true)
    setUploadInfo({ name: file.name, size: formatFileSize(file.size) })
    setError(null)
    try {
      const url = await uploadLessonFile(sessionId, file)
      const isImage = /^image\//.test(file.type)
      const title = file.name.replace(/\.[^.]+$/, '')

      // Dosya HEM bu derse eklenir HEM de kalıcı kitaplığa kaydedilir.
      // Öğretmen aynı ders notunu her hafta yeniden yüklemesin diye.
      await onAdd({ kind: isImage ? 'image' : 'pdf', title, url, visible_to_student: true })
      if (teacherId) {
        try {
          await addToTeacherLibrary(teacherId, {
            kind: isImage ? 'image' : 'pdf',
            title,
            url,
            last_used_at: new Date().toISOString(),
          })
        } catch {
          // Kitaplığa yazılamazsa ders yine de devam etsin; dosya derste var.
        }
      }
      setTab('added')
    } catch (err) {
      // uploadLessonFile zaten Türkçe ve eyleme dönük mesaj üretiyor.
      setError(err?.message || 'Dosya yüklenemedi. Bağlantınızı kontrol edip tekrar deneyin.')
    } finally {
      setUploading(false)
      setUploadInfo(null)
    }
  }

  /** PDF/görseli tahtanın ZEMİNİ yapar — üstüne kalemle yazılır. */
  async function openOnBoard(item) {
    if (!item.url) {
      setError('Bu materyalin açılabilir bir dosyası yok.')
      return
    }
    if (item.libraryId) touchLibraryMaterial(item.libraryId)
    const result = await onOpenOnBoard?.(item)
    if (result && result.ok === false) {
      setError('Belge tahtaya açılamadı. Dosya bozuk olabilir ya da bağlantı koptu.')
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
                    {(m.kind === 'pdf' || m.kind === 'image') && m.url && onOpenOnBoard && (
                      <Button size="xs" icon={PenLine} onClick={() => openOnBoard(m)}>
                        Tahtada aç
                      </Button>
                    )}
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
                <li key={r.key} className="flex items-start gap-3 py-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink">{r.title}</p>
                    <p className="truncate text-xs text-ink/55">
                      {r.subtitle}
                      {r.badge ? ` · ${r.badge}` : ''}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      {/* ASIL EYLEM: belgeyi tahtaya açmak. Ders bunun
                          üzerinden anlatılıyor, "listeye ekle" ikincil. */}
                      {(r.kind === 'pdf' || r.kind === 'image') && r.url && onOpenOnBoard && (
                        <Button size="xs" icon={PenLine} disabled={busy} onClick={() => openOnBoard(r)}>
                          Tahtada aç
                        </Button>
                      )}
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
                        Derse ekle
                      </Button>
                      {r.libraryId && (
                        <>
                          <Button
                            size="xs"
                            variant="ghost"
                            icon={r.pinned ? PinOff : Pin}
                            onClick={async () => {
                              await updateLibraryMaterial(r.libraryId, { pinned: !r.pinned })
                              load()
                            }}
                          >
                            {r.pinned ? 'Sabiti kaldır' : 'Sabitle'}
                          </Button>
                          <Button
                            size="xs"
                            variant="ghost"
                            className="text-danger-600 hover:bg-danger-500/[0.08]"
                            onClick={async () => {
                              if (!window.confirm(`"${r.title}" kitaplığından silinsin mi? Geçmiş derslerdeki kopyası kalır.`)) return
                              await removeLibraryMaterial(r.libraryId)
                              load()
                            }}
                          >
                            Sil
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
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
            {uploading && uploadInfo ? (
              <p className="text-xs leading-relaxed text-ink/60">
                <strong className="text-ink/75">{uploadInfo.name}</strong> yükleniyor (
                {uploadInfo.size}). Büyük dosyalarda bu bir-iki dakika sürebilir; sayfayı kapatma.
              </p>
            ) : (
              <p className="text-xs text-ink/55">
                PDF veya görsel, en fazla {MAX_UPLOAD_MB} MB. Yüklediğin dosya kitaplığına da
                kaydedilir.
              </p>
            )}

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
