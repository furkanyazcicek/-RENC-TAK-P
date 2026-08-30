import { access, mkdir, rename } from 'node:fs/promises'
import { spawn } from 'node:child_process'

const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const FFMPEG = process.env.DRKOC_FFMPEG ?? '/tmp/drkoc-video-tools/node_modules/ffmpeg-static/ffmpeg'
const SES = process.env.DRKOC_REELS_SES
const SESSIZ = process.env.DRKOC_SESSIZ === '1'
const SES_PARCA_KLASORU = `${KOK}/exports/drkoc-fark-reels/voices`
const CIKTI_KLASORU = `${KOK}/exports/drkoc-fark-reels`
const GECICI = `${CIKTI_KLASORU}/.DRKOC-Farkin-Ne-gecici.mp4`
const CIKTI = SESSIZ
  ? `${CIKTI_KLASORU}/DRKOC-Farkin-Ne-Sessiz-Taslak.mp4`
  : `${CIKTI_KLASORU}/DRKOC-Farkin-Ne-Reels.mp4`

const GIRDILER = [
  `${CIKTI_KLASORU}/seedance/01-herkes-calisiyor.mp4`,
  `${CIKTI_KLASORU}/seedance/02-ayni-yontem.mp4`,
  `${CIKTI_KLASORU}/seedance/03-drkoc-urun.mp4`,
  `${CIKTI_KLASORU}/screenshots-v3/01-etkilesimli-atlas.png`,
  `${CIKTI_KLASORU}/screenshots-v3/02-ders-kutuphanesi.png`,
  `${CIKTI_KLASORU}/screenshots-v3/03-soru-bankalari.png`,
  `${CIKTI_KLASORU}/screenshots-v3/04-ai-soru-coz.png`,
  `${CIKTI_KLASORU}/screenshots-v3/05-analiz.png`,
  `${CIKTI_KLASORU}/screenshots-v3/06-ai-koc.png`,
  `${KOK}/exports/drkoc-uygulama-tanitim-kareler/08-logo.png`,
]

const SES_PARÇALARI = Array.from({ length: 6 }, (_, i) =>
  `${SES_PARCA_KLASORU}/voice${String(i + 1).padStart(2, '0')}.wav`)

await access(FFMPEG)
await Promise.all(GIRDILER.map((dosya) => access(dosya)))
if (SES) await access(SES)
if (!SES && !SESSIZ) await Promise.all(SES_PARÇALARI.map((dosya) => access(dosya)))
await mkdir(CIKTI_KLASORU, { recursive: true })

const FONT = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
const anaYazi = (metin, baslangic, bitis, y, boyut = 64) =>
  `drawtext=fontfile='${FONT}':text='${metin}':fontcolor=white:fontsize=${boyut}:x=(w-text_w)/2:y=${y}:` +
  `shadowcolor=black@0.7:shadowx=0:shadowy=5:enable='between(t,${baslangic},${bitis})'`

const URUN_YAKINLASTIRMA = [1.08, 1.16, 1.16, 1.22, 1.10, 1.28]

const urunFiltreleri = URUN_YAKINLASTIRMA.map((yakinlastirma, sira) => {
  const girdi = sira + 3
  const genislik = Math.round((1080 * yakinlastirma) / 2) * 2
  const yukseklik = Math.round((1920 * yakinlastirma) / 2) * 2
  const baslangicY = Math.round((yukseklik - 1920) * 0.04)
  return `[${girdi}:v]trim=duration=1,setpts=PTS-STARTPTS,fps=25,` +
    `scale=${genislik}:${yukseklik}:flags=lanczos,` +
    `crop=1080:1920:x='(iw-ow)/2':y='${baslangicY}+12*n/24',` +
    `setsar=1,eq=contrast=1.01:saturation=1.02[urun${sira}]`
})

const filtre = [
  `[0:v]trim=duration=6,setpts=PTS-STARTPTS,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=25,` +
    `drawbox=x=70:y=1450:w=940:h=170:color=0x07101f@0.72:t=fill:enable='between(t,0,3)',` +
    `${anaYazi('HERKES ÇALIŞIYOR.', 0, 3, 1500, 66)},` +
    `drawbox=x=70:y=1450:w=940:h=190:color=0x07101f@0.78:t=fill:enable='between(t,3,6)',` +
    `${anaYazi('SENİN FARKIN NE?', 3, 6, 1505, 68)}[acilis]`,

  `[1:v]trim=duration=8,setpts=PTS-STARTPTS,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=25,` +
    `drawbox=x=60:y=1450:w=960:h=240:color=0x07101f@0.74:t=fill:enable='between(t,0,4)',` +
    `${anaYazi('AYNI NOTLAR.  AYNI VİDEOLAR.', 0, 4, 1490, 52)},` +
    `${anaYazi('AYNI EZBER.', 0, 4, 1570, 58)},` +
    `drawbox=x=50:y=1390:w=980:h=310:color=0x050914@0.82:t=fill:enable='between(t,4,8)',` +
    `${anaYazi('AYNI YÖNTEMLE', 4, 8, 1460, 58)},` +
    `${anaYazi('FARKLI SONUÇ MU?', 4, 8, 1540, 66)}[tekrar]`,

  ...urunFiltreleri,
  `[urun0][urun1][urun2][urun3][urun4][urun5]concat=n=6:v=1:a=0,fps=25,format=yuv420p[urun]`,

  `[9:v]scale=1080:1920,zoompan=z='min(zoom+0.00022,1.028)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=125:s=1080x1920:fps=25,` +
    `drawbox=x=150:y=1150:w=780:h=260:color=0x0b1025@0.96:t=fill,` +
    `drawtext=fontfile='${FONT}':text='DRKOÇ':fontcolor=white:fontsize=82:x=(w-text_w)/2:y=1190:` +
    `shadowcolor=black@0.6:shadowx=0:shadowy=3,` +
    `drawtext=fontfile='${FONT}':text='ÖĞRENMEYİ GÖRÜNÜR KILAR.':fontcolor=0x69d9e8:fontsize=41:x=(w-text_w)/2:y=1310:` +
    `shadowcolor=black@0.6:shadowx=0:shadowy=3[outro]`,

  `[acilis][tekrar][urun][outro]concat=n=4:v=1:a=0,format=yuv420p[video]`,
  ...(!SES && !SESSIZ
    ? [
        `[10:a][11:a][12:a][13:a][14:a][15:a]amix=inputs=6:duration=longest:dropout_transition=0,` +
          `highpass=f=75,lowpass=f=14000,loudnorm=I=-14:TP=-1.5:LRA=7,` +
          `volume=-1.6dB,aresample=48000,atrim=duration=25[ses]`,
      ]
    : []),
].join(';')

const argumanlar = ['-y']
for (let i = 0; i < 3; i += 1) argumanlar.push('-i', GIRDILER[i])
for (let i = 3; i < GIRDILER.length; i += 1) argumanlar.push('-loop', '1', '-t', '6', '-i', GIRDILER[i])
if (SES) argumanlar.push('-i', SES)
else if (!SESSIZ) for (const parca of SES_PARÇALARI) argumanlar.push('-i', parca)

argumanlar.push(
  '-filter_complex', filtre,
  '-map', '[video]',
  ...(SESSIZ
    ? ['-an']
    : SES
    ? ['-map', `${GIRDILER.length}:a`, '-c:a', 'aac', '-b:a', '192k', '-shortest']
    : ['-map', '[ses]', '-c:a', 'aac', '-b:a', '192k']),
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  '-profile:v', 'high',
  '-level', '4.1',
  '-r', '25',
  '-t', '25',
  '-movflags', '+faststart',
  GECICI,
)

const ffmpeg = spawn(FFMPEG, argumanlar, { stdio: ['ignore', 'inherit', 'pipe'] })
let hata = ''
ffmpeg.stderr.on('data', (parca) => { hata += parca.toString() })
const kod = await new Promise((tamam) => ffmpeg.once('close', tamam))
if (kod !== 0) throw new Error(`Video kurgusu hazırlanamadı:\n${hata.slice(-8000)}`)

await rename(GECICI, CIKTI)
console.log(`Hazır: ${CIKTI}`)
