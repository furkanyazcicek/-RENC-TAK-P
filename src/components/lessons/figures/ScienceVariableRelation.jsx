import { ArrowHeads, FigureSvg, region } from './primitives'

/**
 * LGS FEN — DEĞİŞKEN İLİŞKİSİ ŞEMASI
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * MEB 8. sınıf Fen programı, değişken ayrımını birden çok kazanımda
 * açıkça ister (örn. F.8.4.5.1'in açıklaması: "Bağımlı, bağımsız ve
 * kontrol edilen değişkenler örneklerle açıklanır."). Öğrenciler bu üç
 * adı ezberliyor ama ==aralarındaki ilişkiyi== göremiyor: hangisini ben
 * değiştiriyorum, hangisini ölçüyorum, hangisini sabit tutuyorum?
 *
 * Şema tam olarak bunu gösterir ve soldan sağa tek bir cümle okutur:
 *
 *     DEĞİŞTİRDİĞİM  →  DENEY DÜZENEĞİ  →  ÖLÇTÜĞÜM
 *                    SABİT TUTTUKLARIM
 *
 * Kontrol edilen değişkenler bilinçli olarak ALTTA ve tek bir şerit
 * hâlinde durur: onlar deneyin her yerinde aynıdır, bir akışın parçası
 * değildir. Bu yerleşim, "kontrol değişkeni de bir aşamadır" yanılgısını
 * görsel olarak kırar.
 *
 * VERİ ODAKLI: her Fen dersi kendi deneyini `data` ile geçirir; şema
 * yeniden yazılmaz. 23 LGS Fen dersinde aynı görsel dil kullanılır.
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   bagimsiz → duzenek → bagimli → kontrol
 */

const DEFAULT = {
  question: 'Araştırma sorusu',
  independent: { label: 'Bağımsız değişken', note: 'Benim değiştirdiğim' },
  setup: { label: 'Deney düzeneği', note: 'Ölçümün yapıldığı yer' },
  dependent: { label: 'Bağımlı değişken', note: 'Benim ölçtüğüm' },
  controlled: ['Sabit tutulan koşul'],
}

/** Uzun etiketleri kutuya sığdırır: sözcükleri satırlara böler. */
function wrap(text, maxChars) {
  const words = String(text ?? '').split(/\s+/).filter(Boolean)
  const lines = []
  let line = ''
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (candidate.length > maxChars && line) {
      lines.push(line)
      line = word
    } else {
      line = candidate
    }
  }
  if (line) lines.push(line)
  return lines
}

/** Bir kutunun metni için gereken yüksekliği hesaplar (yerleşim buna göre kurulur). */
const BOX_PAD_TOP = 54
const BOX_LINE = 20
const BOX_GAP = 10
const BOX_NOTE_LINE = 17
const BOX_PAD_BOTTOM = 16

function boxHeightFor(label, note) {
  const labelLines = wrap(label, 21).length
  const noteLines = wrap(note, 27).length
  return BOX_PAD_TOP + labelLines * BOX_LINE + BOX_GAP + noteLines * BOX_NOTE_LINE + BOX_PAD_BOTTOM
}

function Box({ x, y, w, h, tone, eyebrow, label, note, regionKey, activeRegion }) {
  // JSX'te `x="24"` yazıldığında değer DİZEDİR; `x + 16` toplama değil
  // birleştirme yapar ve metin "2416" gibi bir koordinata gider — kutu boş
  // görünür. Bu yüzden koordinatlar burada bir kez sayıya çevrilir.
  const bx = Number(x)
  const by = Number(y)
  const stroke =
    tone === 'brand' ? 'stroke-brand-400' : tone === 'aqua' ? 'stroke-aqua-400' : 'stroke-ink/25'
  const fill =
    tone === 'brand' ? 'fill-brand-50' : tone === 'aqua' ? 'fill-aqua-50' : 'fill-surface-sunken'
  const eyebrowClass =
    tone === 'brand' ? 'fill-brand-700' : tone === 'aqua' ? 'fill-aqua-700' : 'fill-ink/55'

  const labelLines = wrap(label, 21)
  const noteLines = wrap(note, 27)
  const labelTop = by + BOX_PAD_TOP
  const noteTop = labelTop + labelLines.length * BOX_LINE + BOX_GAP

  return (
    <g {...region(regionKey, activeRegion)}>
      <rect x={bx} y={by} width={Number(w)} height={Number(h)} rx="10" className={`${fill} ${stroke}`} strokeWidth="1.5" />
      <text x={bx + 16} y={by + 27} className={eyebrowClass} fontSize="11.5" fontWeight="700" letterSpacing="0.05em">
        {eyebrow}
      </text>
      {labelLines.map((line, index) => (
        <text key={line + index} x={bx + 16} y={labelTop + index * BOX_LINE} className="fill-ink" fontSize="15.5" fontWeight="700">
          {line}
        </text>
      ))}
      {noteLines.map((line, index) => (
        <text key={line + index} x={bx + 16} y={noteTop + index * BOX_NOTE_LINE} className="fill-ink/65" fontSize="13">
          {line}
        </text>
      ))}
    </g>
  )
}

export default function ScienceVariableRelation({ data, activeRegion }) {
  const model = { ...DEFAULT, ...(data ?? {}) }
  const independent = { ...DEFAULT.independent, ...(model.independent ?? {}) }
  const setup = { ...DEFAULT.setup, ...(model.setup ?? {}) }
  const dependent = { ...DEFAULT.dependent, ...(model.dependent ?? {}) }
  const controlled = Array.isArray(model.controlled) && model.controlled.length
    ? model.controlled.slice(0, 4)
    : DEFAULT.controlled

  const questionLines = wrap(model.question, 92)

  /* ---------- UYARLANIR YERLEŞİM ----------
     Her ders kendi metnini geçirir; metin uzadığında kutu yüksekliği,
     kontrol şeridinin yeri ve viewBox birlikte büyür. Sabit yükseklik
     verseydik uzun etiketler kutunun dışına taşardı. */
  const boxTop = 60 + questionLines.length * 19
  const boxHeight = Math.max(
    128,
    boxHeightFor(independent.label, independent.note),
    boxHeightFor(setup.label, setup.note),
    boxHeightFor(dependent.label, dependent.note)
  )
  const boxMid = boxTop + boxHeight / 2
  const bandTop = boxTop + boxHeight + 30
  const bandRows = Math.ceil(controlled.length / 2)
  const bandHeight = 44 + bandRows * 24 + 30
  const viewHeight = bandTop + bandHeight + 22

  return (
    <FigureSvg
      viewBox={`0 0 760 ${viewHeight}`}
      title="Değişken ilişkisi şeması"
      desc={`Araştırma sorusu: ${model.question}. Bağımsız değişken: ${independent.label}. Deney düzeneği: ${setup.label}. Bağımlı değişken: ${dependent.label}. Sabit tutulanlar: ${controlled.join(', ')}.`}
    >
      <ArrowHeads prefix="lgsfen" />

      {/* Araştırma sorusu — şemanın çatısı */}
      <text x="24" y="24" className="fill-ink/50" fontSize="12" fontWeight="700" letterSpacing="0.08em">
        ARAŞTIRMA SORUSU
      </text>
      {questionLines.map((line, index) => (
        <text key={line + index} x="24" y={46 + index * 19} className="fill-ink/80" fontSize="14.5" fontStyle="italic">
          {line}
        </text>
      ))}

      {/* Üç kutu: değiştirdiğim → düzenek → ölçtüğüm */}
      <Box
        x={24} y={boxTop} w={212} h={boxHeight}
        tone="brand" regionKey="bagimsiz" activeRegion={activeRegion}
        eyebrow="BAĞIMSIZ — DEĞİŞTİRDİĞİM"
        label={independent.label}
        note={independent.note}
      />
      <Box
        x={274} y={boxTop} w={212} h={boxHeight}
        tone="muted" regionKey="duzenek" activeRegion={activeRegion}
        eyebrow="DENEY DÜZENEĞİ"
        label={setup.label}
        note={setup.note}
      />
      <Box
        x={524} y={boxTop} w={212} h={boxHeight}
        tone="aqua" regionKey="bagimli" activeRegion={activeRegion}
        eyebrow="BAĞIMLI — ÖLÇTÜĞÜM"
        label={dependent.label}
        note={dependent.note}
      />

      {/* Akış okları */}
      <line x1="240" y1={boxMid} x2="268" y2={boxMid} className="stroke-ink/45" strokeWidth="2" markerEnd="url(#lgsfen-arrow)" />
      <line x1="490" y1={boxMid} x2="518" y2={boxMid} className="stroke-ink/45" strokeWidth="2" markerEnd="url(#lgsfen-arrow)" />

      {/* Sabit tutulanlar — akışın parçası değil, altta tek şerit */}
      <g {...region('kontrol', activeRegion)}>
        <rect x="24" y={bandTop} width="712" height={bandHeight} rx="10" className="fill-surface-sunken stroke-ink/20" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x="40" y={bandTop + 24} className="fill-ink/55" fontSize="12" fontWeight="700" letterSpacing="0.06em">
          KONTROL EDİLEN — SABİT TUTTUKLARIM
        </text>
        {controlled.map((item, index) => {
          const column = index % 2
          const row = Math.floor(index / 2)
          const x = 40 + column * 356
          const y = bandTop + 50 + row * 24
          return (
            <g key={`${item}-${index}`}>
              <circle cx={x + 5} cy={y - 5} r="3.5" className="fill-ink/35" />
              <text x={x + 18} y={y} className="fill-ink/75" fontSize="13.5">
                {wrap(item, 44)[0]}
              </text>
            </g>
          )
        })}
        <text x="40" y={bandTop + bandHeight - 12} className="fill-ink/45" fontSize="12" fontStyle="italic">
          Bunlar deneyin her ayağında aynıdır; değişirlerse sonucun sebebini bilemeyiz.
        </text>
      </g>

      {/* Kontrol şeridini akıştan ayıran ince bağ */}
      <line x1="380" y1={boxTop + boxHeight + 4} x2="380" y2={bandTop - 4} className="stroke-ink/25" strokeWidth="1.5" strokeDasharray="3 3" />
    </FigureSvg>
  )
}
