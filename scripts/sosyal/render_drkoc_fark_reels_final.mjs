import { access, mkdir, rename } from 'node:fs/promises'
import { spawn } from 'node:child_process'

const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const FFMPEG = process.env.DRKOC_FFMPEG ?? '/tmp/drkoc-video-tools/node_modules/ffmpeg-static/ffmpeg'
const KAYNAK = `${KOK}/exports/drkoc-fark-reels`
const CIKTI_KLASORU = `${KOK}/exports/drkoc-fark-reels-final`
const EKRAN_KLASORU = `${CIKTI_KLASORU}/screens`
const SES = `${CIKTI_KLASORU}/DRKOC-Farkin-Ne-ElevenLabs-v3-dogal-hizli.wav`
const ALTYAZI = `${CIKTI_KLASORU}/DRKOC-Farkin-Ne.ass`
const LOGO = `${KOK}/exports/drkoc-uygulama-tanitim-kareler/08-logo.png`
const GECICI = `${CIKTI_KLASORU}/.DRKOC-Farkin-Ne-Final-gecici.mp4`
const CIKTI = `${CIKTI_KLASORU}/DRKOC-Farkin-Ne-Final.mp4`
const FONT = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'

const ACILIS = [
  `${KAYNAK}/seedance/01-herkes-calisiyor.mp4`,
  `${KAYNAK}/seedance/02-ayni-yontem.mp4`,
]

const ekran = (ad) => `${EKRAN_KLASORU}/${ad}.png`
const URUN_SEGMENTLERI = [
  [ekran('01-etkilesimli-atlas'), 2.08],
  [ekran('02-ders-kutuphanesi'), 1.81],
  [ekran('03-soru-bankalari'), 1.53],
  [ekran('04-ai-koc'), 1.25],
  [ekran('05-analiz'), 1.02],
  [ekran('06-ai-soru-coz'), 0.83],
  [ekran('01-etkilesimli-atlas'), 0.65],
  [ekran('02-ders-kutuphanesi'), 0.54],
  [ekran('03-soru-bankalari'), 0.43],
  [ekran('04-ai-koc'), 0.35],
  [ekran('05-analiz'), 0.28],
  [ekran('06-ai-soru-coz'), 0.22],
  [ekran('01-etkilesimli-atlas'), 0.28],
  [ekran('04-ai-koc'), 0.22],
  [ekran('05-analiz'), 0.19],
  [ekran('06-ai-soru-coz'), 0.19],
]

await mkdir(CIKTI_KLASORU, { recursive: true })
await Promise.all([
  access(FFMPEG),
  access(SES),
  access(ALTYAZI),
  access(LOGO),
  ...ACILIS.map((dosya) => access(dosya)),
  ...URUN_SEGMENTLERI.map(([dosya]) => access(dosya)),
])

const argumanlar = ['-y']
for (const dosya of ACILIS) argumanlar.push('-i', dosya)
for (const [dosya, sure] of URUN_SEGMENTLERI) {
  argumanlar.push('-loop', '1', '-framerate', '30', '-t', String(sure), '-i', dosya)
}
argumanlar.push('-loop', '1', '-framerate', '30', '-t', '2.62', '-i', LOGO)
argumanlar.push('-i', SES)
argumanlar.push('-f', 'lavfi', '-t', '28.35', '-i', 'sine=frequency=55:sample_rate=48000')
argumanlar.push('-f', 'lavfi', '-t', '28.35', '-i', 'sine=frequency=82.41:sample_rate=48000')
argumanlar.push('-f', 'lavfi', '-t', '28.35', '-i', 'anoisesrc=color=pink:amplitude=0.02:sample_rate=48000')
argumanlar.push('-f', 'lavfi', '-t', '0.24', '-i', 'sine=frequency=780:sample_rate=48000')

const logoIndex = 2 + URUN_SEGMENTLERI.length
const sesIndex = logoIndex + 1
const bed1Index = sesIndex + 1
const bed2Index = sesIndex + 2
const noiseIndex = sesIndex + 3
const clickIndex = sesIndex + 4

const filtreler = [
  `[0:v]trim=duration=6,setpts=PTS-STARTPTS,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,eq=contrast=1.02:saturation=1.02[acilis]`,
  `[1:v]trim=duration=7.86,setpts=PTS-STARTPTS,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,eq=contrast=1.02:saturation=1.02[tekrar]`,
]

URUN_SEGMENTLERI.forEach(([, sure], sira) => {
  const girdi = 2 + sira
  const kayma = sira < 6 ? Math.max(2, Math.round(10 / sure)) : 0
  filtreler.push(
    `[${girdi}:v]scale=1116:1984:flags=lanczos,` +
      `crop=1080:1920:x='18':y='32-${kayma}*t',` +
      `fps=30,trim=duration=${sure},setpts=PTS-STARTPTS,` +
      `eq=contrast=1.012:saturation=1.025[urun${sira}]`
  )
})

filtreler.push(
  `[${logoIndex}:v]scale=1080:1920:flags=lanczos,trim=duration=2.62,setpts=PTS-STARTPTS,` +
    `fade=t=in:st=0:d=0.22,` +
    `drawbox=x=125:y=1248:w=830:h=136:color=0x0b1023@0.97:t=fill,` +
    `drawtext=fontfile='${FONT}':text='ÖĞRENMEYİ GÖRÜNÜR KILAR.':fontcolor=white:fontsize=42:` +
    `x=(w-text_w)/2:y=1294:shadowcolor=black@0.55:shadowx=0:shadowy=3[outro]`
)

const videoParcalari = ['[acilis]', '[tekrar]']
for (let i = 0; i < URUN_SEGMENTLERI.length; i += 1) videoParcalari.push(`[urun${i}]`)
videoParcalari.push('[outro]')

filtreler.push(
  `${videoParcalari.join('')}concat=n=${videoParcalari.length}:v=1:a=0,` +
    `subtitles=filename='${ALTYAZI}',format=yuv420p[video]`,
  `[${sesIndex}:a]atrim=duration=28.35,asetpts=PTS-STARTPTS[anlatim]`,
  `[${bed1Index}:a]volume=0.020,lowpass=f=700,tremolo=f=2:d=0.55[b1]`,
  `[${bed2Index}:a]volume=0.012,lowpass=f=1000,tremolo=f=1.5:d=0.45[b2]`,
  `[${noiseIndex}:a]volume=0.07,highpass=f=160,lowpass=f=2200[bn]`,
  `[b1][b2][bn]amix=inputs=3:duration=longest:normalize=0,` +
    `afade=t=in:st=0:d=1.2,afade=t=out:st=26.55:d=1.8[bed]`,
  `[${clickIndex}:a]afade=t=out:st=0:d=0.22,volume=0.045,asplit=3[c1][c2][c3]`,
  `[c1]adelay=13860|13860[k1]`,
  `[c2]adelay=22380|22380[k2]`,
  `[c3]adelay=25730|25730[k3]`,
  `[anlatim][bed][k1][k2][k3]amix=inputs=5:duration=longest:normalize=0,` +
    `loudnorm=I=-14:TP=-1.3:LRA=7,aresample=48000,atrim=duration=28.35[ses]`
)

argumanlar.push(
  '-filter_complex', filtreler.join(';'),
  '-map', '[video]',
  '-map', '[ses]',
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  '-profile:v', 'high',
  '-level', '4.1',
  '-r', '30',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-ar', '48000',
  '-t', '28.35',
  '-movflags', '+faststart',
  GECICI,
)

const ffmpeg = spawn(FFMPEG, argumanlar, { stdio: ['ignore', 'inherit', 'pipe'] })
let hata = ''
ffmpeg.stderr.on('data', (parca) => {
  hata += parca.toString()
})
const kod = await new Promise((tamam) => ffmpeg.once('close', tamam))
if (kod !== 0) throw new Error(`Final Reels kurgusu hazırlanamadı:\n${hata.slice(-12000)}`)

await rename(GECICI, CIKTI)
console.log(`Hazır: ${CIKTI}`)
