import { execFileSync } from 'node:child_process'
import { existsSync, lstatSync, readFileSync, realpathSync } from 'node:fs'
import { resolve } from 'node:path'

const YETKILI_KLASOR = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const YETKILI_UZAK = 'https://github.com/furkanyazcicek/-RENC-TAK-P.git'

const ESKI_SURUM_DOSYALARI = [
  'LandingPage.jsx',
  'sekme-onizleme.html',
  'vercel.json.txt',
  'src/pages/LandingPageLegacy.jsx',
  'src/pages/LandingPageProduct.jsx',
  'src/pages/KitapGecisOnizleme.jsx',
  'src/pages/PanelDesignPreview.jsx',
  'src/styles/kitap-gecis-onizleme.css',
  'src/styles/panel-tasarim-onizleme.css',
]

function dur(mesaj) {
  console.error(`Yayın kapısı durduruldu: ${mesaj}`)
  process.exit(1)
}

function git(...args) {
  try {
    return execFileSync('git', args, { cwd: YETKILI_KLASOR, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
  } catch (error) {
    dur(error.stderr?.trim() || `git ${args.join(' ')} komutu çalışmadı.`)
  }
}

const calismaKlasoru = realpathSync(process.cwd()).normalize('NFC')
if (calismaKlasoru !== YETKILI_KLASOR.normalize('NFC')) {
  dur(`yalnızca ${YETKILI_KLASOR} içinden yayın hazırlanabilir.`)
}

const gitYolu = resolve(YETKILI_KLASOR, '.git')
if (!existsSync(gitYolu)) dur('.git klasörü yok.')
const gitBilgisi = lstatSync(gitYolu)
if (gitBilgisi.isSymbolicLink() || !gitBilgisi.isDirectory()) {
  dur('.git başka bir klasöre bağlı; masaüstü kopyası bağımsız olmalı.')
}

if (existsSync(resolve(YETKILI_KLASOR, '.vercel'))) {
  dur('doğrudan Vercel yayınını engelleyen kural bozulmuş; masaüstünde .vercel bağlantısı bulunmamalı.')
}

const eskiKalanlar = ESKI_SURUM_DOSYALARI.filter((yol) => existsSync(resolve(YETKILI_KLASOR, yol)))
if (eskiKalanlar.length) dur(`eski sürüm dosyaları geri gelmiş: ${eskiKalanlar.join(', ')}`)

const anaSayfaGecidi = readFileSync(resolve(YETKILI_KLASOR, 'src/pages/LandingPage.jsx'), 'utf8')
if (/VITE_LANDING_VERSION|LandingPageLegacy|LandingPageProduct/.test(anaSayfaGecidi)) {
  dur('ana sayfada eski sürüm seçicisi bulundu.')
}

if (git('branch', '--show-current') !== 'main') dur('yayın yalnızca main dalından hazırlanabilir.')
if (git('remote', 'get-url', 'origin') !== YETKILI_UZAK) dur('origin, DRKOÇ GitHub deposunu göstermiyor.')
if (git('status', '--porcelain')) dur('kaydedilmemiş dosya değişiklikleri var; önce tek bir kayıtta topla.')

git('fetch', '--quiet', 'origin', 'main')
const [uzakIleride, yerelIleride] = git('rev-list', '--left-right', '--count', 'origin/main...HEAD')
  .split(/\s+/)
  .map(Number)
if (uzakIleride > 0) dur('yerel main, GitHub main dalının gerisinde veya ondan ayrılmış.')

console.log(`Yayın kaynağı doğrulandı: masaüstü/main, GitHub→Vercel tek akış, yerelde ${yerelIleride} yeni kayıt.`)
