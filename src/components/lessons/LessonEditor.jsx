import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowUp, ChevronDown, ChevronRight, Plus, Save, Sparkles, Trash2 } from 'lucide-react'
import { supabase } from '../../lib/supabaseClient'
import { useAuth } from '../../context/AuthContext'
import { regenerateLessonSection } from '../../lib/lessonAI'
import {
  BLOCK_FIELDS,
  BLOCK_LABELS,
  EDITABLE_BLOCK_TYPES,
  SECTION_KINDS,
  auditLessonDepth,
  contentHash,
  createEmptyBlock,
  createEmptyLessonDocument,
  createEmptySection,
  normalizeLessonDocument,
  validateLessonDocument,
} from '../../lib/lesson/schema'
import BlockField, { QuizOptionsField } from './editor/BlockFields'
import { Alert, Button, Field, Input, Select, Textarea } from '../ui'

const SECTION_KIND_LABEL = {
  opening: 'Açılış — problemi kur',
  build: 'Kavramı kur',
  deepen: 'Derinleş — mekanizma',
  practice: 'Uygula',
  close: 'Topla ve kapat',
}

/**
 * DERS EDİTÖRÜ
 * ==================================================================
 *
 * Öğretmen kod yazmaz, JSON görmez (§41). Bölüm ekler, blok ekler, sıralar,
 * metni düzenler, AI'ya bir cümleyle ne istediğini söyler.
 *
 * DERİNLİK DENETİMİ EDİTÖRÜN İÇİNDE
 * Yayınla düğmesinin yanında değil, çalışırken görünen bir panelde durur.
 * Sebebi şu: "içerik kıtlığı" yayın anında fark edilirse iş işten geçmiş
 * olur (§54). Yazarken görünürse öğretmen daha o an ekler.
 *
 * Denetim yayını ENGELLEMEZ. Uyarı verir, karar öğretmenindir — bazı
 * konular gerçekten kısa anlatılır ve yazılım bunu öğretmenden iyi bilemez.
 */
export default function LessonEditor({ topicId, lesson, onSaved, onCancel }) {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [document, setDocument] = useState(createEmptyLessonDocument())
  const [goldStandard, setGoldStandard] = useState(false)
  const [learningMode, setLearningMode] = useState('interactive')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [aiCommand, setAiCommand] = useState({})
  const [generatingSection, setGeneratingSection] = useState(null)
  const [openSections, setOpenSections] = useState(() => new Set())

  useEffect(() => {
    setTitle(lesson?.title ?? '')
    setSubtitle(lesson?.subtitle ?? '')
    const next = normalizeLessonDocument(lesson?.document ?? createEmptyLessonDocument())
    setDocument(next)
    setGoldStandard(Boolean(lesson?.is_gold_standard))
    setLearningMode(lesson?.learning_mode === 'foundation' ? 'foundation' : 'interactive')
    setOpenSections(new Set(next.sections.slice(0, 1).map((section) => section.id)))
    setError(null)
  }, [lesson])

  const validation = useMemo(() => validateLessonDocument(document), [document])
  const audit = useMemo(() => auditLessonDepth(document), [document])

  /* ---------------- Belge güncellemeleri ---------------- */

  function patchDocument(patch) {
    setDocument((previous) => ({ ...previous, ...patch }))
  }

  function updateSection(index, patch) {
    setDocument((previous) => ({
      ...previous,
      sections: previous.sections.map((section, current) => (current === index ? { ...section, ...patch } : section)),
    }))
  }

  function updateBlock(sectionIndex, blockIndex, patch) {
    setDocument((previous) => ({
      ...previous,
      sections: previous.sections.map((section, currentSection) =>
        currentSection === sectionIndex
          ? {
              ...section,
              blocks: section.blocks.map((block, currentBlock) => (currentBlock === blockIndex ? { ...block, ...patch } : block)),
            }
          : section
      ),
    }))
  }

  function changeBlockType(sectionIndex, blockIndex, type) {
    // Tip değişince eski alanlar taşınmaz: `concept.term` ile `quiz.question`
    // aynı şey değildir ve karışık bir kalıntı bırakmak öğretmeni yanıltır.
    const fresh = createEmptyBlock(type)
    updateBlock(sectionIndex, blockIndex, { ...fresh, id: document.sections[sectionIndex].blocks[blockIndex].id })
  }

  function addBlock(sectionIndex, type = 'prose') {
    setDocument((previous) => ({
      ...previous,
      sections: previous.sections.map((section, index) =>
        index === sectionIndex ? { ...section, blocks: [...section.blocks, createEmptyBlock(type)] } : section
      ),
    }))
  }

  function removeBlock(sectionIndex, blockIndex) {
    setDocument((previous) => ({
      ...previous,
      sections: previous.sections.map((section, index) =>
        index === sectionIndex ? { ...section, blocks: section.blocks.filter((_, current) => current !== blockIndex) } : section
      ),
    }))
  }

  function moveBlock(sectionIndex, blockIndex, direction) {
    setDocument((previous) => ({
      ...previous,
      sections: previous.sections.map((section, index) => {
        if (index !== sectionIndex) return section
        const next = blockIndex + direction
        if (next < 0 || next >= section.blocks.length) return section
        const blocks = [...section.blocks]
        ;[blocks[blockIndex], blocks[next]] = [blocks[next], blocks[blockIndex]]
        return { ...section, blocks }
      }),
    }))
  }

  function moveSection(index, direction) {
    setDocument((previous) => {
      const next = index + direction
      if (next < 0 || next >= previous.sections.length) return previous
      const sections = [...previous.sections]
      ;[sections[index], sections[next]] = [sections[next], sections[index]]
      return { ...previous, sections }
    })
  }

  function toggleSection(id) {
    setOpenSections((previous) => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  /* ---------------- AI ---------------- */

  async function regenerateSection(sectionIndex) {
    const section = document.sections[sectionIndex]
    const instruction = aiCommand[section.id]?.trim()
    if (!lesson?.id) {
      setError('Önce taslağı kaydedin; sonra AI ile yalnızca seçili bölümü yenileyebilirsiniz.')
      return
    }
    if (!instruction) {
      setError('AI için bu bölüme yönelik kısa bir öğretmen komutu yazın.')
      return
    }
    setGeneratingSection(section.id)
    setError(null)
    try {
      const generated = await regenerateLessonSection({ lessonId: lesson.id, sectionId: section.id, instruction })
      updateSection(sectionIndex, generated)
      setAiCommand((previous) => ({ ...previous, [section.id]: '' }))
    } catch (generationError) {
      setError(generationError?.message ?? 'Bölüm yenilenemedi.')
    } finally {
      setGeneratingSection(null)
    }
  }

  /* ---------------- Kayıt ---------------- */

  async function save(status) {
    if (!title.trim()) {
      setError('Ders notuna bir başlık verin.')
      return
    }
    if (validation.errors.length) {
      setError(validation.errors[0])
      return
    }
    setSaving(true)
    setError(null)

    const now = new Date().toISOString()
    const cleanDocument = validation.document
    const nextRevision = (lesson?.current_revision ?? 0) + 1
    const payload = {
      topic_id: topicId,
      teacher_id: lesson?.teacher_id ?? user?.id ?? null,
      title: title.trim(),
      subtitle: subtitle.trim() || null,
      document: cleanDocument,
      status,
      is_gold_standard: goldStandard,
      learning_mode: learningMode,
      quality_scores: { depth: audit.score, words: audit.words, warnings: audit.warnings.length },
      content_hash: contentHash(cleanDocument),
      current_revision: nextRevision,
      published_at: status === 'published' ? now : (lesson?.published_at ?? null),
      updated_at: now,
    }

    try {
      let saved
      if (lesson?.id) {
        const { data, error: updateError } = await supabase.from('structured_lessons').update(payload).eq('id', lesson.id).select('*').single()
        if (updateError) throw updateError
        saved = data
      } else {
        const { data, error: insertError } = await supabase.from('structured_lessons').insert(payload).select('*').single()
        if (insertError) throw insertError
        saved = data
      }

      // Sürüm kaydı: AI yeniden üretimi veya elle düzenleme sonrası eski
      // içerik kaybolmaz, geri alınabilir (§43).
      const { error: revisionError } = await supabase.from('structured_lesson_revisions').insert({
        lesson_id: saved.id,
        revision: nextRevision,
        document: cleanDocument,
        change_note: lesson?.id ? 'Öğretmen düzenlemesi' : 'İlk sürüm',
        created_by: user?.id ?? null,
      })
      if (revisionError) throw revisionError

      onSaved?.(saved)
    } catch (saveError) {
      setError(saveError?.message ?? 'Ders notu kaydedilemedi.')
    } finally {
      setSaving(false)
    }
  }

  /* ---------------- Görünüm ---------------- */

  return (
    <div className="flex max-h-[74dvh] flex-col gap-5 overflow-y-auto pr-1">
      <DepthPanel audit={audit} />

      <Field label="Ders notu başlığı" required>
        {({ id }) => (
          <Input id={id} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Örn. Mitokondri: Hücrenin Enerji Santrali Nasıl Çalışır?" />
        )}
      </Field>

      <Field label="Öğretmenin vaadi" hint="Öğrencinin notu açmadan önce göreceği tek cümle.">
        {({ id }) => (
          <Textarea id={id} rows={2} value={subtitle} onChange={(event) => setSubtitle(event.target.value)} placeholder="Yapıyı ezberleme; her parçanın hangi işi yaptığını gör…" />
        )}
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Tahmini çalışma süresi (dk)">
          {({ id }) => (
            <Input
              id={id}
              type="number"
              min="1"
              max="180"
              value={document.estimated_minutes}
              onChange={(event) => patchDocument({ estimated_minutes: Number(event.target.value) || 15 })}
            />
          )}
        </Field>
        <Field label="Öğrenme aşaması" hint="Aynı konunun temel ve etkileşimli notları ayrı katmanlar olarak saklanır.">
          {({ id }) => (
            <Select id={id} value={learningMode} onChange={(event) => setLearningMode(event.target.value)} className="py-2 text-sm">
              <option value="foundation">1. Aşama — Temel öğrenme notu</option>
              <option value="interactive">2. Aşama — Etkileşimli pekiştirme notu</option>
            </Select>
          )}
        </Field>
      </div>

      <label className="flex items-center gap-2 text-sm font-semibold text-ink/75">
        <input
          type="checkbox"
          checked={goldStandard}
          onChange={(event) => setGoldStandard(event.target.checked)}
          className="h-4 w-4 rounded border-line text-brand-600"
        />
        Bu not gold standard referansıdır
      </label>

      <PrerequisiteEditor value={document.prerequisites} onChange={(prerequisites) => patchDocument({ prerequisites })} />
      <OutcomeEditor value={document.outcomes} onChange={(outcomes) => patchDocument({ outcomes })} />

      {/* ---------------- Bölümler ---------------- */}
      <div className="flex flex-col gap-3">
        {document.sections.map((section, sectionIndex) => {
          const open = openSections.has(section.id)
          return (
            <section key={section.id} className="rounded-card border border-line bg-surface-muted">
              <div className="flex items-center gap-2 p-3">
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className="focus-ring grid h-7 w-7 shrink-0 place-items-center rounded-lg text-ink/45 hover:bg-surface"
                  aria-label={open ? 'Bölümü kapat' : 'Bölümü aç'}
                >
                  {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
                <Input
                  value={section.title}
                  onChange={(event) => updateSection(sectionIndex, { title: event.target.value })}
                  aria-label={`${sectionIndex + 1}. bölüm başlığı`}
                  className="py-2 text-sm font-semibold"
                />
                <span className="hidden shrink-0 text-2xs text-ink/40 sm:inline">{section.blocks.length} blok</span>
                <Button variant="ghost" size="xs" icon={ArrowUp} aria-label="Bölümü yukarı taşı" disabled={sectionIndex === 0} onClick={() => moveSection(sectionIndex, -1)} />
                <Button variant="ghost" size="xs" icon={ArrowDown} aria-label="Bölümü aşağı taşı" disabled={sectionIndex === document.sections.length - 1} onClick={() => moveSection(sectionIndex, 1)} />
                <Button
                  variant="ghost"
                  size="xs"
                  icon={Trash2}
                  aria-label="Bölümü sil"
                  className="text-danger-600"
                  onClick={() => setDocument((previous) => ({ ...previous, sections: previous.sections.filter((_, index) => index !== sectionIndex) }))}
                />
              </div>

              {open && (
                <div className="border-t border-line p-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Bölümün rolü" hint="Öğretme akışındaki yeri.">
                      {({ id }) => (
                        <Select id={id} value={section.kind} onChange={(event) => updateSection(sectionIndex, { kind: event.target.value })} className="py-2 text-sm">
                          {SECTION_KINDS.map((kind) => (
                            <option key={kind} value={kind}>
                              {SECTION_KIND_LABEL[kind]}
                            </option>
                          ))}
                        </Select>
                      )}
                    </Field>
                    <Field label="Bölüm girişi" hint="Öğrenciye burada ne yapacağını söyleyen kısa cümle.">
                      {({ id }) => (
                        <Textarea id={id} rows={2} value={section.lead} onChange={(event) => updateSection(sectionIndex, { lead: event.target.value })} className="text-sm" />
                      )}
                    </Field>
                  </div>

                  <div className="mt-3 flex flex-col gap-3">
                    {section.blocks.map((block, blockIndex) => (
                      <BlockEditor
                        key={block.id}
                        block={block}
                        canMoveUp={blockIndex > 0}
                        canMoveDown={blockIndex < section.blocks.length - 1}
                        onChangeType={(type) => changeBlockType(sectionIndex, blockIndex, type)}
                        onChange={(patch) => updateBlock(sectionIndex, blockIndex, patch)}
                        onDelete={() => removeBlock(sectionIndex, blockIndex)}
                        onMove={(direction) => moveBlock(sectionIndex, blockIndex, direction)}
                      />
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 border-t border-line pt-3">
                    <Button variant="secondary" size="sm" icon={Plus} onClick={() => addBlock(sectionIndex)}>
                      Anlatım ekle
                    </Button>
                    <Button variant="ghost" size="sm" icon={Plus} onClick={() => addBlock(sectionIndex, 'figure')}>
                      Görsel
                    </Button>
                    <Button variant="ghost" size="sm" icon={Plus} onClick={() => addBlock(sectionIndex, 'teacher_note')}>
                      Hoca notu
                    </Button>
                    <Button variant="ghost" size="sm" icon={Plus} onClick={() => addBlock(sectionIndex, 'checkpoint')}>
                      Dur ve düşün
                    </Button>
                    <Button variant="ghost" size="sm" icon={Plus} onClick={() => addBlock(sectionIndex, 'audio_script')}>
                      Ses anlatımı
                    </Button>
                  </div>

                  <div className="mt-3 flex flex-col gap-2 border-t border-line pt-3 sm:flex-row">
                    <Input
                      value={aiCommand[section.id] ?? ''}
                      onChange={(event) => setAiCommand((previous) => ({ ...previous, [section.id]: event.target.value }))}
                      placeholder="AI'ya söyle: “Bu bölüm çok yüzeysel, mekanizmayı adım adım anlat.”"
                      className="py-2 text-sm"
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={Sparkles}
                      loading={generatingSection === section.id}
                      disabled={!lesson?.id}
                      onClick={() => regenerateSection(sectionIndex)}
                    >
                      Yenile
                    </Button>
                  </div>
                  {!lesson?.id && <p className="mt-1 text-2xs text-ink/45">AI ile bölüm yenileme, ilk taslak kaydedildikten sonra açılır.</p>}
                </div>
              )}
            </section>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        {SECTION_KINDS.map((kind) => (
          <Button
            key={kind}
            variant="ghost"
            size="sm"
            icon={Plus}
            onClick={() =>
              setDocument((previous) => {
                const section = createEmptySection(kind)
                setOpenSections((open) => new Set([...open, section.id]))
                return { ...previous, sections: [...previous.sections, section] }
              })
            }
          >
            {SECTION_KIND_LABEL[kind]}
          </Button>
        ))}
      </div>

      {error && <Alert tone="danger">{error}</Alert>}

      <div className="flex flex-col-reverse gap-2 border-t border-line pt-4 sm:flex-row sm:justify-end">
        <Button variant="ghost" onClick={onCancel}>
          Vazgeç
        </Button>
        <Button variant="secondary" loading={saving} icon={Save} onClick={() => save('draft')}>
          Taslak kaydet
        </Button>
        <Button loading={saving} icon={Sparkles} onClick={() => save('published')}>
          Yayınla
        </Button>
      </div>
    </div>
  )
}

/* ==================================================================
   Derinlik paneli
   ================================================================== */

function DepthPanel({ audit }) {
  const tone = audit.warnings.length === 0 ? 'success' : audit.warnings.length > 4 ? 'danger' : 'warning'

  return (
    <div
      className={`rounded-card border p-3 ${
        tone === 'success' ? 'border-success-100 bg-success-50' : tone === 'danger' ? 'border-danger-100 bg-danger-50' : 'border-warning-100 bg-warning-50'
      }`}
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs font-semibold text-ink/70">
        <span>{audit.words.toLocaleString('tr-TR')} kelime</span>
        <span>{audit.sections} bölüm</span>
        <span>Hazırlık puanı {audit.score}/100</span>
      </div>
      {audit.warnings.length > 0 ? (
        <ul className="mt-2 flex list-none flex-col gap-1 p-0 text-2xs leading-relaxed text-ink/70">
          {audit.warnings.slice(0, 5).map((warning, index) => (
            <li key={index}>· {warning}</li>
          ))}
          {audit.warnings.length > 5 && <li className="text-ink/45">…ve {audit.warnings.length - 5} uyarı daha</li>}
        </ul>
      ) : (
        <p className="mt-1.5 text-2xs text-ink/60">Derinlik denetiminden uyarısız geçti.</p>
      )}
    </div>
  )
}

/* ==================================================================
   Ön koşul ve kazanım
   ================================================================== */

function PrerequisiteEditor({ value, onChange }) {
  const items = Array.isArray(value) ? value : []
  return (
    <Field label="Ön koşul bilgiler" hint="Öğrenci bu dersi açmadan önce neyi bilmeli? Boş bırakırsanız denetim uyarır.">
      {() => (
        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={item.topic ?? ''}
                placeholder="Konu"
                onChange={(event) => onChange(items.map((row, current) => (current === index ? { ...row, topic: event.target.value } : row)))}
                className="w-1/3 py-2 text-sm"
              />
              <Input
                value={item.why ?? ''}
                placeholder="Neden gerekli?"
                onChange={(event) => onChange(items.map((row, current) => (current === index ? { ...row, why: event.target.value } : row)))}
                className="py-2 text-sm"
              />
              <Button variant="ghost" size="xs" icon={Trash2} aria-label="Ön koşulu sil" onClick={() => onChange(items.filter((_, current) => current !== index))} />
            </div>
          ))}
          <Button variant="ghost" size="sm" icon={Plus} className="w-fit" onClick={() => onChange([...items, { topic: '', why: '' }])}>
            Ön koşul ekle
          </Button>
        </div>
      )}
    </Field>
  )
}

function OutcomeEditor({ value, onChange }) {
  const items = Array.isArray(value) ? value : []
  return (
    <Field label="Ders bitince öğrenci ne yapabilecek?" hint="Somut yazın: “…açıklayabileceksin”, “…karıştırmadan yerleştirebileceksin”.">
      {() => (
        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={item}
                onChange={(event) => onChange(items.map((row, current) => (current === index ? event.target.value : row)))}
                className="py-2 text-sm"
              />
              <Button variant="ghost" size="xs" icon={Trash2} aria-label="Kazanımı sil" onClick={() => onChange(items.filter((_, current) => current !== index))} />
            </div>
          ))}
          <Button variant="ghost" size="sm" icon={Plus} className="w-fit" onClick={() => onChange([...items, ''])}>
            Kazanım ekle
          </Button>
        </div>
      )}
    </Field>
  )
}

/* ==================================================================
   Blok editörü — alanlar şemadan gelir
   ================================================================== */

function BlockEditor({ block, canMoveUp, canMoveDown, onChange, onChangeType, onDelete, onMove }) {
  const fields = BLOCK_FIELDS[block.type] ?? []

  return (
    <div className="rounded-xl border border-line bg-surface p-3">
      <div className="flex gap-2">
        <Select value={block.type} onChange={(event) => onChangeType(event.target.value)} aria-label="Blok türü" className="min-w-0 flex-1 py-2 text-sm">
          {EDITABLE_BLOCK_TYPES.map((type) => (
            <option key={type} value={type}>
              {BLOCK_LABELS[type]}
            </option>
          ))}
        </Select>
        <Button variant="ghost" size="xs" icon={ArrowUp} disabled={!canMoveUp} aria-label="Bloğu yukarı taşı" onClick={() => onMove(-1)} />
        <Button variant="ghost" size="xs" icon={ArrowDown} disabled={!canMoveDown} aria-label="Bloğu aşağı taşı" onClick={() => onMove(1)} />
        <Button variant="ghost" size="xs" icon={Trash2} aria-label="Bloğu sil" className="text-danger-600" onClick={onDelete} />
      </div>

      <div className="mt-3 flex flex-col gap-3">
        {fields.map((field) =>
          field.kind === 'options' ? (
            <div key={field.name}>
              <label className="text-xs font-semibold text-ink/60">{field.label}</label>
              <div className="mt-1.5">
                <QuizOptionsField block={block} onChange={onChange} />
              </div>
            </div>
          ) : (
            <BlockField key={field.name} field={field} value={block[field.name]} onChange={(next) => onChange({ [field.name]: next })} />
          )
        )}
      </div>
    </div>
  )
}
