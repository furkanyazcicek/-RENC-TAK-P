import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  FileText,
  Languages,
  MessageCircle,
  Mic,
  MicOff,
  Paperclip,
  PenLine,
  Radio,
  Send,
  Video,
  VideoOff,
} from 'lucide-react'

const BOLUMLER = [
  {
    id: 'sorular',
    sira: '07',
    sekme: 'Sorunlu Sorular',
    ikon: CircleHelp,
    ustBaslik: 'SORUDAN ÇÖZÜME',
    baslik: 'Takıldığın soru, cevapsız kalmaz.',
    aciklama:
      'Çözemediğin soruyu fotoğrafıyla öğretmenine gönder; hangi aşamada olduğunu izle ve gelen çözümü sınav öncesi tekrar arşivinde sakla.',
    maddeler: [
      'Soru fotoğrafını ders ve konusuyla birlikte ilet.',
      'İnceleniyor, derste çözülecek ve çözüldü durumlarını izle.',
      'Öğretmenin açıklamasına ve çözüm görseline aynı yerde dön.',
    ],
    hedef: '/sorular',
    cta: 'Sorunlu Soruları aç',
  },
  {
    id: 'ingilizce',
    sira: '08',
    sekme: 'İngilizce',
    ikon: Languages,
    ustBaslik: 'KİŞİSEL DİL ROTASI',
    baslik: 'İngilizce, bugünün planına dönüşür.',
    aciklama:
      'Hedef ve seviye tespitinden sonra ders, kelime tekrarı, telaffuz ve İngilizce düşünme çalışmaları her gün yeniden sıralanır.',
    maddeler: [
      'CEFR seviyeni ve öğrenme hedefini birlikte kullan.',
      'Unutmadan önce gelen aralıklı tekrarlarla kelimeyi koru.',
      'Çeviri alışkanlığını kıran bağlam ve telaffuz alıştırmaları yap.',
    ],
    hedef: '/ingilizce',
    cta: 'İngilizce yolunu gör',
  },
  {
    id: 'mesajlar',
    sira: '09',
    sekme: 'Mesajlaşma',
    ikon: MessageCircle,
    ustBaslik: 'ÖĞRETMEN BAĞLANTISI',
    baslik: 'Ders biter; konuşma kaybolmaz.',
    aciklama:
      'Öğrenci ve öğretmen birebir yazışır. Sorular, dosyalar ve kısa yönlendirmeler günlere ayrılmış tek bir güvenli konuşmada kalır.',
    maddeler: [
      'Öğretmeninle anlık ve birebir iletişim kur.',
      'Görsel ve PDF eklerini konuşmanın bağlamında paylaş.',
      'Ders öncesi hazırlığı ve ders sonrası takibi aynı yerde sürdür.',
    ],
    hedef: '/mesajlar',
    cta: 'Mesajları aç',
  },
  {
    id: 'canli-ders',
    sira: '10',
    sekme: 'Canlı Ders',
    ikon: Video,
    ustBaslik: 'BİREBİR DERS STÜDYOSU',
    baslik: 'Tahta, görüntü ve materyal aynı derste.',
    aciklama:
      'Canlı ders yalnızca görüntülü görüşme değildir; ortak dijital tahta, ders materyalleri, mesajlar ve öğrenci bağlamı tek çalışma masasında buluşur.',
    maddeler: [
      'Öğretmen ve öğrenci aynı tahta üzerinde eş zamanlı çalışır.',
      'PDF, soru ve ders notunu doğrudan tahtaya taşı.',
      'Ders sonunda tahta çıktısını, özeti ve sonraki adımı sakla.',
    ],
    hedef: '/canli-dersler',
    cta: 'Canlı Dersleri gör',
  },
]

function PencereBasligi({ baslik, Icon }) {
  return (
    <div className="book-tour-windowbar">
      <span aria-hidden="true"><i /><i /><i /></span>
      <strong>{baslik}</strong>
      <Icon aria-hidden="true" />
    </div>
  )
}

function SorunluSorularGorseli() {
  const [cozumAcik, setCozumAcik] = useState(true)

  return (
    <div className="book-tour-app book-tour-problems">
      <PencereBasligi baslik="Sorunlu Sorular · Matematik" Icon={CircleHelp} />
      <div className="book-tour-problems__status" aria-label="Sorunun ilerleme durumu">
        <span className="is-done"><i><Check /></i>Gönderildi</span>
        <span className="is-done"><i><Check /></i>İncelendi</span>
        <span className="is-current"><i>3</i>Çözüldü</span>
      </div>
      <div className="book-tour-problems__body">
        <article className="book-tour-problem-card">
          <div><span>TYT MATEMATİK · FONKSİYONLAR</span><small>Bugün, 14.12</small></div>
          <p>f(x) = 2x² − 4x + 1 parabolünün tepe noktası nedir?</p>
          <svg viewBox="0 0 280 150" role="img" aria-label="Tepe noktası işaretlenmiş parabol grafiği">
            <path className="axis" d="M18 116H267M58 12V139" />
            <path className="curve" d="M83 18C105 72 117 106 145 116C173 106 186 72 208 18" />
            <circle cx="145" cy="116" r="5" />
            <text x="154" y="108">?</text>
          </svg>
          <span className="book-tour-problem-card__note">“Formülü biliyorum ama işaretlerde karıştı.”</span>
        </article>

        <article className={`book-tour-solution ${cozumAcik ? 'is-open' : ''}`}>
          <header>
            <div className="book-tour-avatar">FK</div>
            <div><strong>Furkan Hoca</strong><span>Öğretmen çözümü · 14.28</span></div>
            <span><Check /> Yanıtlandı</span>
          </header>
          {cozumAcik ? (
            <div className="book-tour-solution__work" aria-live="polite">
              <p>Önce simetri eksenini bulalım:</p>
              <strong>x = −b / 2a = −(−4) / 4 = 1</strong>
              <p>x = 1 için f(1) = 2 − 4 + 1 = −1.</p>
              <mark>Tepe noktası: (1, −1)</mark>
              <small>İşaret kontrolü için −b bölümünü parantezle yaz.</small>
            </div>
          ) : (
            <div className="book-tour-solution__closed" aria-live="polite">
              <CircleHelp />
              <p>Öğretmen çözümü hazır. Soruyu yeniden denedikten sonra açabilirsin.</p>
            </div>
          )}
          <button type="button" className="focus-ring" onClick={() => setCozumAcik((deger) => !deger)} aria-expanded={cozumAcik}>
            {cozumAcik ? 'Önce soruyu yeniden gör' : 'Öğretmen çözümünü göster'}
            <ArrowRight aria-hidden="true" />
          </button>
        </article>
      </div>
    </div>
  )
}

function IngilizceGorseli() {
  const [yanit, setYanit] = useState(null)
  const dogru = yanit === 'went'

  return (
    <div className="book-tour-app book-tour-english">
      <PencereBasligi baslik="İngilizce · Kişisel çalışma yolu" Icon={Languages} />
      <div className="book-tour-english__hero">
        <div>
          <span>BUGÜN</span>
          <h4>Çalışma yolun hazır.</h4>
          <p>3 çalışma · yaklaşık 18 dakika</p>
        </div>
        <dl>
          <div><dt>Seviye</dt><dd>A2</dd></div>
          <div><dt>Seri</dt><dd>6 gün</dd></div>
        </dl>
      </div>
      <div className="book-tour-english__body">
        <ol className="book-tour-english__plan">
          <li className="is-active"><i><BookOpen /></i><div><strong>Past experiences</strong><span>Bağlam içinde geçmiş zaman · 8 dk</span></div><b>01</b></li>
          <li><i><Languages /></i><div><strong>Kelime tekrarı</strong><span>Unutmaya yaklaşan 8 kelime · 5 dk</span></div><b>02</b></li>
          <li><i><Mic /></i><div><strong>Telaffuz laboratuvarı</strong><span>/w/ ve /v/ ayrımı · 5 dk</span></div><b>03</b></li>
        </ol>
        <section className="book-tour-english__exercise" aria-labelledby="english-mini-title">
          <span>İNGİLİZCE DÜŞÜNME · KISA ALIŞTIRMA</span>
          <h4 id="english-mini-title">Last summer, I ___ to İzmir.</h4>
          <p>Türkçeye çevirmeden, tamamlanmış olayın zamanını düşün.</p>
          <div>
            {['go', 'went', 'have gone'].map((secenek) => (
              <button
                key={secenek}
                type="button"
                className="focus-ring"
                data-selected={yanit === secenek || undefined}
                data-correct={yanit && secenek === 'went' ? 'true' : undefined}
                onClick={() => setYanit(secenek)}
              >
                {secenek}
              </button>
            ))}
          </div>
          <div className={`book-tour-english__feedback ${yanit ? (dogru ? 'is-correct' : 'is-wrong') : ''}`} aria-live="polite">
            {yanit
              ? dogru
                ? 'Doğru — “last summer” bitmiş bir zamanı gösterir.'
                : 'Bir daha düşün: olay geçmişte başladı ve tamamlandı.'
              : 'Bir seçenek seç; açıklama anında burada görünsün.'}
          </div>
        </section>
      </div>
    </div>
  )
}

function MesajlasmaGorseli() {
  const [gonderildi, setGonderildi] = useState(false)

  return (
    <div className="book-tour-app book-tour-messages">
      <PencereBasligi baslik="Mesajlar · Öğretmeninle birebir" Icon={MessageCircle} />
      <div className="book-tour-messages__body">
        <aside aria-label="Mesaj kişileri">
          <span>ÖĞRETMENLER · 2</span>
          <button type="button" className="is-active focus-ring"><i>FK</i><span><strong>Furkan Hoca</strong><small>2 dk önce</small></span><b>1</b></button>
          <button type="button" className="focus-ring"><i>EA</i><span><strong>Ece Öğretmen</strong><small>Dün</small></span></button>
        </aside>
        <section className="book-tour-chat" aria-label="Furkan Hoca ile örnek konuşma">
          <header><i>FK</i><div><strong>Furkan Hoca</strong><span><b /> Çevrimiçi</span></div></header>
          <div className="book-tour-chat__messages">
            <span>BUGÜN</span>
            <p className="is-mine">Hocam, parabol sorusundaki işaret hatamı buldum.</p>
            <div className="book-tour-chat__attachment"><FileText /><div><strong>cozum-denemem.pdf</strong><span>1,2 MB · PDF</span></div></div>
            <p>Harika. Özellikle <strong>−b / 2a</strong> kısmını parantezle yazman hatayı önler. Akşamki mini çalışmana benzer iki soru ekledim.</p>
            {gonderildi && <p className="is-mine is-new">Teşekkür ederim, tekrar deneyeceğim.</p>}
          </div>
          <footer>
            <button type="button" aria-label="Dosya ekle" className="focus-ring"><Paperclip /></button>
            <span>{gonderildi ? 'Mesaj gönderildi' : 'Teşekkür ederim, tekrar deneyeceğim.'}</span>
            <button type="button" aria-label="Örnek mesajı gönder" disabled={gonderildi} onClick={() => setGonderildi(true)} className="focus-ring"><Send /></button>
          </footer>
          <span className="sr-only" aria-live="polite">{gonderildi ? 'Örnek mesaj gönderildi.' : ''}</span>
        </section>
      </div>
    </div>
  )
}

function CanliDersGorseli() {
  const [mikrofonAcik, setMikrofonAcik] = useState(true)
  const [kameraAcik, setKameraAcik] = useState(true)

  return (
    <div className="book-tour-live">
      <header>
        <div><span><Radio /> CANLI</span><strong>Parabolün geometrisi</strong><small>Furkan Hoca · Matematik</small></div>
        <div><Clock3 /> 24:18 <span><i /> Bağlı</span></div>
      </header>
      <main>
        <section className="book-tour-live__board" aria-label="Canlı ders ortak tahta örneği">
          <div><PenLine /> ORTAK TAHTA <span>Kaydedildi <Check /></span></div>
          <svg viewBox="0 0 520 280" role="img" aria-label="Parabol ve tepe noktası anlatımı">
            <defs><pattern id="book-tour-grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" /></pattern></defs>
            <rect width="520" height="280" fill="url(#book-tour-grid)" />
            <path className="axis" d="M24 226H495M110 22V260" />
            <path className="curve" d="M164 40C191 128 216 205 283 226C350 205 375 128 402 40" />
            <circle cx="283" cy="226" r="6" />
            <path className="note-line" d="M291 217l63-51" />
            <text className="formula" x="143" y="65">f(x) = 2x² − 4x + 1</text>
            <text className="note" x="360" y="158">tepe (1, −1)</text>
          </svg>
        </section>
        <aside aria-label="Canlı ders katılımcıları">
          <span>KATILIMCILAR · 2</span>
          <div className="book-tour-live__person is-teacher"><i>FK</i><strong>Furkan Hoca</strong><small>anlatıyor</small><b><Mic /></b></div>
          <div className="book-tour-live__person"><i>AY</i><strong>Ayşe</strong><small>derste</small><b>{mikrofonAcik ? <Mic /> : <MicOff />}</b></div>
          <p><FileText /> <span><strong>Parabol-notu.pdf</strong><small>Tahtaya açıldı</small></span><Check /></p>
        </aside>
      </main>
      <footer>
        <button type="button" className="focus-ring" aria-pressed={mikrofonAcik} onClick={() => setMikrofonAcik((deger) => !deger)}>
          {mikrofonAcik ? <Mic /> : <MicOff />}<span>{mikrofonAcik ? 'Mikrofon açık' : 'Mikrofon kapalı'}</span>
        </button>
        <button type="button" className="focus-ring" aria-pressed={kameraAcik} onClick={() => setKameraAcik((deger) => !deger)}>
          {kameraAcik ? <Video /> : <VideoOff />}<span>{kameraAcik ? 'Kamera açık' : 'Kamera kapalı'}</span>
        </button>
        <button type="button" className="focus-ring"><BookOpen /><span>Materyaller</span></button>
        <button type="button" className="focus-ring"><MessageCircle /><span>Mesajlar</span><b>2</b></button>
      </footer>
    </div>
  )
}

const GORSELLER = {
  sorular: SorunluSorularGorseli,
  ingilizce: IngilizceGorseli,
  mesajlar: MesajlasmaGorseli,
  'canli-ders': CanliDersGorseli,
}

export default function BookProductTour() {
  const [aktifId, setAktifId] = useState(BOLUMLER[0].id)
  const sekmeler = useRef([])
  const aktifIndex = Math.max(0, BOLUMLER.findIndex((bolum) => bolum.id === aktifId))
  const aktifBolum = BOLUMLER[aktifIndex]
  const AktifGorsel = GORSELLER[aktifBolum.id]

  function sec(index, odakla = false) {
    const guvenliIndex = (index + BOLUMLER.length) % BOLUMLER.length
    setAktifId(BOLUMLER[guvenliIndex].id)
    if (odakla) sekmeler.current[guvenliIndex]?.focus()
  }

  function klavyeSec(event, index) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    if (event.key === 'Home') sec(0, true)
    else if (event.key === 'End') sec(BOLUMLER.length - 1, true)
    else sec(index + (event.key === 'ArrowRight' ? 1 : -1), true)
  }

  return (
    <section id="nasil-calisir" className="book-product-tour" aria-labelledby="urun-rehberi-baslik">
      <div className="book-product-tour__heading">
        <div>
          <span>DESTEK REHBERİ · 07—10</span>
          <h2 id="urun-rehberi-baslik">İçerikten fazlası:<br />yanında çalışan bir sistem.</h2>
        </div>
        <p>
          Öğrenme, bir sayfayı okumakla bitmez. Takıldığın sorudan öğretmeninle
          kurduğun bağa, günlük dil çalışmandan canlı derse kadar devam eder.
        </p>
      </div>

      <div className="book-product-tour__book">
        <nav className="book-product-tour__tabs" role="tablist" aria-label="Destek özellikleri">
          {BOLUMLER.map((bolum, index) => {
            const Icon = bolum.ikon
            const secili = bolum.id === aktifId
            return (
              <button
                key={bolum.id}
                ref={(element) => { sekmeler.current[index] = element }}
                id={`urun-sekmesi-${bolum.id}`}
                type="button"
                role="tab"
                aria-selected={secili}
                aria-controls="urun-rehberi-paneli"
                tabIndex={secili ? 0 : -1}
                onClick={() => sec(index)}
                onKeyDown={(event) => klavyeSec(event, index)}
                className="focus-ring"
              >
                <span>{bolum.sira}</span>
                <Icon aria-hidden="true" />
                {bolum.sekme}
              </button>
            )
          })}
        </nav>

        <article
          id="urun-rehberi-paneli"
          role="tabpanel"
          aria-labelledby={`urun-sekmesi-${aktifBolum.id}`}
          className="book-product-tour__spread"
          key={aktifBolum.id}
        >
          <div className="book-product-tour__copy">
            <div className="book-product-tour__running-head">
              <span>DRKOÇ / ÖĞRENME DESTEĞİ</span>
              <span>{aktifBolum.sira}</span>
            </div>
            <div className="book-product-tour__copy-inner">
              <span>{aktifBolum.ustBaslik}</span>
              <h3>{aktifBolum.baslik}</h3>
              <p>{aktifBolum.aciklama}</p>
              <ul>
                {aktifBolum.maddeler.map((madde) => (
                  <li key={madde}><Check aria-hidden="true" />{madde}</li>
                ))}
              </ul>
              <Link to={aktifBolum.hedef} className="book-product-tour__link focus-ring">
                {aktifBolum.cta}<ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="book-product-tour__visual">
            <div className="book-product-tour__running-head">
              <span>UYGULAMA İÇİ ÖNİZLEME</span>
              <span>ÖRNEK VERİ</span>
            </div>
            <div className="book-product-tour__visual-inner"><AktifGorsel /></div>
          </div>

          <div className="book-product-tour__spine" aria-hidden="true" />
        </article>

        <div className="book-product-tour__controls">
          <span><strong>0{aktifIndex + 1}</strong> / 04</span>
          <div>
            <button type="button" onClick={() => sec(aktifIndex - 1)} aria-label="Önceki destek sayfası" className="focus-ring">
              <ChevronLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => sec(aktifIndex + 1)} aria-label="Sonraki destek sayfası" className="focus-ring">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
