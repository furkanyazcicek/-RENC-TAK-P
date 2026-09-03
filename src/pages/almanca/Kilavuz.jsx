import { Link } from 'react-router-dom'
import {
  BrainCircuit, CalendarCheck, CircleHelp, Compass, LibraryBig, Mic, RefreshCw, Target,
} from 'lucide-react'
import { AppShell, Button } from '../../components/ui'

/**
 * Çalışma kılavuzu — "burayı nasıl kullanacağım?" sorusunun cevabı.
 *
 * Bir öğrenme sistemi, nasıl çalıştığını anlatmadan bırakılırsa öğrenci
 * kendi bildiği gibi kullanır ve genellikle en kolay şeyi yapar. Bu sayfa
 * hem bölümleri hem de ARKASINDAKİ MANTIĞI anlatır: neden tekrar yeni
 * kelimeden önce gelir, neden ders açmak tamamlamak sayılmaz, neden
 * bazı şeyleri ölçmediğimizi açıkça söylüyoruz.
 */
export default function Kilavuz() {
  return (
    <AppShell
      title="Çalışma kılavuzu"
      subtitle="Bu bölüm nasıl çalışır, nereden başlanır"
      width="narrow"
    >
      <section className="rounded-card bg-brand-500/[0.06] p-5 ring-1 ring-inset ring-brand-500/15 sm:p-6">
        <h1 className="font-display text-xl font-bold text-ink">Üç cümlede özet</h1>
        <ol className="mt-3 grid gap-2.5">
          {[
            'Hedefini söylersin, seviyeni ölçeriz, sana özel bir yol kurulur.',
            'Her gün ne yapacağını ana sayfa söyler — üç beş iş, sırayla.',
            'Öğrendiğin şey unutulmadan önce tekrar karşına çıkar.',
          ].map((m, i) => (
            <li key={m} className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-ink/80">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-2xs font-bold text-white">
                {i + 1}
              </span>
              {m}
            </li>
          ))}
        </ol>
      </section>

      <Bolum
        baslik="Nereden başlamalıyım?"
        maddeler={[
          'Hiç Almanca bilmiyorsan: "Başlayalım" → seviye tespiti → ilk ders. Alfabe dersinden başlanır.',
          'Okul Almancan varsa: seviye tespitine gir. Sonuç seni doğru yere koyacak; kolay gelirse hızlı geçersin.',
          'Anlıyor ama konuşamıyorsan: tespitten sonra "Almanca düşünme" antrenmanlarına ağırlık ver.',
          'Sınav için çalışıyorsan: başlangıç akışında amacını "Sınava hazırlanmak" seç; içerik ağırlığı değişir.',
        ]}
      />

      <Bolum
        baslik="Bir ders nasıl işler?"
        maddeler={[
          'ÖĞREN — konunun anlatımı, örnekler, kalıplar, telaffuz notları ve tuzaklar.',
          'ALIŞTIR — soru soru ilerlersin; her cevaptan sonra geri bildirim gelir.',
          'ÖZET — dersin maddeleri ve tekrar kartlarına eklenen kelimeler.',
          'MİNİ SINAV — dersin gerçekten oturup oturmadığını ölçer.',
          'SONUÇ — durumun belirlenir: tamamlandı, güçleniyor, ustalaşıldı ya da tekrar gerekli.',
        ]}
      />

      <Bolum
        baslik="Neden 'dersi açmak' yetmiyor?"
        metin="Bir dersi okuyup geçmek öğrenmek değildir. Bu yüzden durumun yalnızca çözdüğün alıştırmaların oranına göre belirlenir: %70'in altındaysa 'tekrar gerekli', %90 ve üzerindeyse iki kez üst üste 'ustalaşıldı'. Kötü bir sonuç seni kilitlemez — aynı dersi tekrar çalıştığında yeni performansına göre durumun yükselir."
      />

      <Bolum
        baslik="Neden yanlış cevapta uzun bir açıklama çıkıyor?"
        metin="Çünkü Türk öğrencilerin hatalarının çoğu bilgi eksikliği değil, aktarım hatasıdır: cümle önce Türkçe kurulur, sonra kelime kelime çevrilir. Sistem hatanı bu açıdan inceler; hatanın nereden geldiğini anlatır ve doğru kalıbı hemen bir kez daha kullanman için küçük bir alıştırma verir. O mikro alıştırmayı atlama — asıl öğrenme orada oluyor."
      />

      <Bolum
        baslik="Tekrar neden yeni kelimeden önce geliyor?"
        metin="Unutmak üzere olan bir kelimeyi kurtarmak, yeni bir kelime öğrenmekten daha değerlidir. Yeni kelime öğrenmeye devam edip eskiyi tekrar etmezsen, altı ay sonra elinde hiçbir şey kalmaz. Bu yüzden günlük görev listende tekrar her zaman en üstte durur."
      />

      <Bolum
        baslik="Bir kelimeyi 'biliyorum' ne demek?"
        metin="Bu sistemde bir kelime dört ayrı boyutta ölçülür: (1) görünce anlamını biliyor musun, (2) cümle içinde doğru anlamı seçebiliyor musun, (3) boşluğa doğru biçimde yazabiliyor musun, (4) kendi kurduğun cümlede kullanabiliyor musun. Dördü de sağlam olduğunda kelime 'ustalaşıldı' sayılır. Tanıyor olman, kullanabildiğin anlamına gelmez."
      />

      <Bolum
        baslik="Ölçmediğimiz şeyler"
        metin="Bazı şeyleri ölçemiyoruz ve bunu gizlemiyoruz. Konuşma tanıma altyapısı yok — telaffuzuna puan vermiyoruz, kendi kaydını dinleyip karşılaştırman için somut bir ölçüt listesi veriyoruz. Yazma görevlerinde de yalnız sayılabilen şeylere bakıyoruz: uzunluk, kullandığın yapılar, bağlaçlar ve çeviri izleri. İçerik kalitesine not vermiyoruz; onu kendi kontrol listenle değerlendiriyorsun."
      />

      <Bolum
        baslik="Ses çıkmıyorsa"
        metin="Dinleme ve telaffuz çalışmaları cihazının kendi Almanca sesini kullanır. Cihazında Almanca ses yoksa uygulama bunu açıkça söyler ve dinleme içeriklerini yazılı biçimde açar — çalışmayan bir oynatıcı göstermeyiz. Telefonda Ayarlar → Erişilebilirlik → Konuşma bölümünden Almanca ses indirebilirsin."
      />

      <Bolum
        baslik="Gün kaçırırsam ne olur?"
        metin="Hiçbir şey. Seri sayacı sıfırlanır, o kadar. Plan seni suçlamaz, sessizce yeniden düzenlenir: biriken tekrarlar öne alınır, yeni ders bir gün ötelenir. Kaçırılan günü telafi etmek için iki katı çalışman istenmez — bu, çalışmayı bırakmanın en yaygın sebebidir."
      />

      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Bölümler ne işe yarar?
        </h2>
        <div className="mt-3 grid gap-2.5">
          {[
            { Icon: Target, ad: 'Seviye tespiti', not: 'Nerede olduğunu ölçer. İstersen sonra tekrar girebilirsin.', to: '/almanca/seviye-tespit' },
            { Icon: CalendarCheck, ad: 'Yol haritam', not: 'Bugün, bu hafta, bu ay ne yapacağın ve seviyeyi ne zaman bitireceğin.', to: '/almanca/yol-haritasi' },
            { Icon: LibraryBig, ad: 'Ders kütüphanesi', not: 'Bütün seviyeler ve modüller. İstediğin dersi sıradan bağımsız açabilirsin.', to: '/almanca/kutuphane' },
            { Icon: RefreshCw, ad: 'Kelime ve tekrar', not: 'Aralıklı tekrar oturumu. Günde 5 dakika yeter.', to: '/almanca/tekrar' },
            { Icon: Mic, ad: 'Telaffuz laboratuvarı', not: 'Türkçede olmayan sesler, vurgu, ritim, gölge okuma ve kendi kaydın.', to: '/almanca/telaffuz' },
            { Icon: BrainCircuit, ad: 'Almanca düşünme', not: 'Çeviri alışkanlığını kıran antrenmanlar ve hata defterin.', to: '/almanca/dusunme' },
            { Icon: Compass, ad: 'Gelişimim', not: 'Beceri beceri durumun, ders durumların ve kelime kalıcılığın.', to: '/almanca/gelisim' },
          ].map(({ Icon, ad, not, to }) => (
            <Link
              key={to}
              to={to}
              className="focus-ring flex items-start gap-3.5 rounded-card border border-line bg-surface p-4 shadow-card transition hover:border-brand-500/25"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
                <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[0.98rem] font-semibold text-ink">{ad}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-ink/55">{not}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
        <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink">
          <CircleHelp className="h-4 w-4 text-ink/45" strokeWidth={2.2} aria-hidden="true" />
          Verilerim nerede duruyor?
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
          Almanca ilerlemen şu an yalnızca kullandığın tarayıcıda saklanıyor; başka bir cihaza
          geçtiğinde yanında gelmez. Gelişim ekranından yedek indirebilirsin. Bu bölüm buluta
          taşındığında ilerlemen aktarılacak.
        </p>
        <Button as={Link} to="/almanca/gelisim" variant="secondary" size="sm" className="mt-3">
          Gelişim ekranına git
        </Button>
      </section>

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <Button as={Link} to="/almanca" size="lg" className="justify-center">
          Anladım, başlayalım
        </Button>
      </div>
    </AppShell>
  )
}

function Bolum({ baslik, metin, maddeler }) {
  return (
    <section className="rounded-card border border-line bg-surface p-5 shadow-card">
      <h2 className="font-display text-base font-bold text-ink">{baslik}</h2>
      {metin && <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">{metin}</p>}
      {maddeler?.length > 0 && (
        <ul className="mt-2.5 grid gap-2">
          {maddeler.map((m) => (
            <li key={m} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink/75">
              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/45" aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
