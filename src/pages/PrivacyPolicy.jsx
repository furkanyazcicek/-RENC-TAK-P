import { Link } from 'react-router-dom'
import { ArrowLeft, Mail } from 'lucide-react'
import { AuroraBackground, Logo } from '../components/ui'

/**
 * Gizlilik Politikası — HERKESE AÇIK sayfa (/gizlilik).
 *
 * Giriş gerektirmez ve gerektirmemeli: Google Play ile App Store, mağaza
 * kaydında erişilebilir bir gizlilik politikası URL'i ZORUNLU tutuyor ve
 * inceleme ekibi bu adrese giriş yapmadan bakıyor.
 *
 * İÇERİK KODA DAYANIR, ŞABLONA DEĞİL.
 * Aşağıdaki her madde uygulamanın gerçekten yaptığı bir şeyi anlatır;
 * tablolar ve üçüncü taraflar canlı şemadan çıkarılmıştır. Uygulamaya yeni
 * bir veri alanı veya dış servis eklendiğinde BURASI DA güncellenmelidir —
 * aksi halde mağazaya yanlış beyan verilmiş olur.
 */

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="section-title mb-3">{title}</h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-ink/75">{children}</div>
    </section>
  )
}

function DataRow({ what, why }) {
  return (
    <tr className="border-b border-line last:border-0">
      <td className="py-2.5 pr-4 align-top font-semibold text-ink">{what}</td>
      <td className="py-2.5 align-top text-ink/70">{why}</td>
    </tr>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground variant="page" />

      <header className="sticky top-0 z-sticky border-b border-line glass pt-safe-top">
        <div className="mx-auto flex h-header max-w-3xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="focus-ring flex min-w-0 items-center gap-2.5 rounded-lg">
            <Logo size="sm" markOnly />
            <span className="truncate font-display font-bold text-ink">Dr. Koç</span>
          </Link>
          <Link
            to="/"
            className="focus-ring flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-semibold text-ink/65 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
            Ana sayfa
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-10 animate-fade-in sm:px-6">
        <div>
          <h1 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Gizlilik Politikası
          </h1>
          <p className="mt-3 text-sm text-ink/60">
            Son güncelleme: 16 Ağustos 2026
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Dr. Koç, öğrencilerin çalışma düzenini takip ettiği; öğretmen ve velilerin bu ilerlemeyi
            izlediği bir koçluk platformudur. Bu sayfa, hangi bilgileri neden sakladığımızı ve
            bunlar üzerinde ne yapabileceğinizi anlatır. Teknik ayrıntıyı gizlemeye çalışmadık;
            bilmediğiniz bir şeyin toplanmadığından emin olmanızı istiyoruz.
          </p>
        </div>

        <Section id="sorumlu" title="Veri sorumlusu">
          <p>
            Platform, Furkan Talha Yazçiçek tarafından işletilmektedir. Verilerinizle ilgili her
            konuda doğrudan yazabilirsiniz:
          </p>
          <p>
            <a
              className="inline-flex items-center gap-2 font-semibold text-brand-700 underline underline-offset-4"
              href="mailto:furkan.yazcicek35@icloud.com"
            >
              <Mail className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              furkan.yazcicek35@icloud.com
            </a>
          </p>
        </Section>

        <Section id="veriler" title="Hangi bilgileri saklıyoruz">
          <p>
            Yalnızca platformun çalışması için gereken bilgileri saklıyoruz. Reklam kimliği, konum,
            rehber, kamera rulosu veya cihazınızdaki başka içerikler{' '}
            <span className="font-semibold text-ink">toplanmaz</span>.
          </p>
          <div className="overflow-x-auto rounded-card border border-line bg-surface">
            <table className="w-full min-w-[34rem] text-sm">
              <tbody>
                <DataRow
                  what="Hesap bilgileri"
                  why="Ad soyad, e-posta adresi ve rolünüz (öğrenci / öğretmen / veli). Şifreniz bize açık olarak ulaşmaz; kimlik doğrulama sağlayıcımız tarafından şifrelenmiş biçimde saklanır."
                />
                <DataRow
                  what="Sınav profili"
                  why="Sınıf, hedef sınav, sınav yılı ve tarihi. Geri sayım ve seviyeye uygun öneriler için kullanılır."
                />
                <DataRow
                  what="Çalışma kayıtları"
                  why="Tarih, ders/konu, süre, doğru–yanlış–boş sayıları ve kendi yazdığınız notlar."
                />
                <DataRow
                  what="Deneme sonuçları"
                  why="Branş ve genel denemelerin tarihi, türü, ders bazlı sonuçları ve süresi."
                />
                <DataRow
                  what="Ödevler"
                  why="Öğretmenin atadığı başlık, açıklama, teslim tarihi ve tamamlanma durumu."
                />
                <DataRow
                  what="Sorular ve görseller"
                  why="Öğretmene ilettiğiniz sorular, yüklediğiniz soru fotoğrafları, dijital kalemle yaptığınız çözüm çizimleri ve öğretmen yanıtları."
                />
                <DataRow
                  what="Mesajlar"
                  why="Öğrenci ile öğretmen arasındaki birebir yazışmalar ve varsa ekleri."
                />
                <DataRow
                  what="Ders notları"
                  why="Kütüphaneye yüklenen ders notu dosyaları."
                />
                <DataRow
                  what="AI Koç sohbetleri"
                  why="Yapay zekâ koçuyla yazışmalarınız, koçun sizin için tuttuğu hatırlatma notları ve oluşturduğu çalışma planı maddeleri."
                />
                <DataRow
                  what="Bildirim aboneliği"
                  why="Bildirim açtıysanız tarayıcınızın ürettiği abonelik adresi. Bu adres bildirimi cihazınıza ulaştırmak dışında kullanılmaz."
                />
                <DataRow
                  what="Veli bağlantıları"
                  why="Hangi velinin hangi öğrenciye bağlı olduğu ve bu bağlantı için üretilen geçici doğrulama kodları."
                />
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="veli" title="Velilerin erişimi">
          <p>
            Veli bir öğrencinin verilerini{' '}
            <span className="font-semibold text-ink">ancak öğrenci onay verirse</span> görebilir.
            Bağlantı öğrencinin kendi profilinden başlatılır: öğrenci tek kullanımlık bir doğrulama
            kodu üretir, veli bu kodu girer ve ortaya bir istek çıkar. Öğrenci bu isteği onaylamadan
            veli hiçbir kayda erişemez. Öğrenci dilediği zaman bağlantıyı kaldırabilir; kaldırdığı
            anda velinin erişimi biter.
          </p>
          <p>
            Veli onaylandığında dahi her şeyi görmez. Çalışma kayıtları, deneme sonuçları ve ödevler
            veliye açıktır; öğrencinin{' '}
            <span className="font-semibold text-ink">
              mesajları, öğretmenine sorduğu sorular ve AI Koç sohbetleri kapalıdır
            </span>
            .
          </p>
          <p>
            Bu kısıtlar yalnızca arayüzde değil, veritabanı düzeyinde satır bazlı güvenlik
            kurallarıyla uygulanır. Yani uygulamayı atlayarak doğrudan istek gönderen biri de
            başkasının verisine ulaşamaz.
          </p>
        </Section>

        <Section id="paylasim" title="Kimlerle paylaşıyoruz">
          <p>
            Verilerinizi satmıyoruz ve reklam amacıyla üçüncü taraflara aktarmıyoruz. Platformun
            çalışması için yalnızca aşağıdaki hizmet sağlayıcıları kullanıyoruz:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <span className="font-semibold text-ink">Supabase</span> — veritabanı, kimlik
              doğrulama ve dosya depolama. Kayıtlarınızın tutulduğu yer burasıdır.
            </li>
            <li>
              <span className="font-semibold text-ink">Vercel</span> — uygulamanın barındırıldığı
              altyapı.
            </li>
            <li>
              <span className="font-semibold text-ink">OpenAI</span> — yalnızca AI Koç özelliği
              için. Ayrıntısı aşağıda.
            </li>
            <li>
              <span className="font-semibold text-ink">Tarayıcı bildirim servisleri</span> — bildirim
              açtıysanız, bildirimi cihazınıza ulaştırmak için tarayıcınızın üreticisine ait push
              servisi (örneğin Google veya Apple) kullanılır.
            </li>
          </ul>
          <p>
            Bunların dışında, yasal bir zorunluluk olmadıkça hiçbir kurum veya kişiyle veri
            paylaşmayız.
          </p>
        </Section>

        <Section id="ai" title="AI Koç ve yapay zekâ">
          <p>
            AI Koç kullandığınızda, size anlamlı cevap verebilmesi için çalışma durumunuzun bir
            özeti OpenAI'ın sunucularına gönderilir. Bu özet; son haftalardaki çalışma süreniz,
            çözdüğünüz soru sayıları, deneme netleriniz ve varsa hedef sınavınız gibi bilgileri
            içerir.
          </p>
          <p>
            Tüm veritabanınız her mesajda gönderilmez. Gönderilen şey sınırlı ve özetlenmiş bir
            durum raporudur; koçun daha fazlasına ihtiyacı olursa ilgili kaydı ayrıca ister.
          </p>
          <p>
            Bu özelliği kullanmak zorunda değilsiniz. AI Koç sekmesini hiç açmazsanız verileriniz
            OpenAI'a gönderilmez.
          </p>
        </Section>

        <Section id="cocuklar" title="18 yaş altı kullanıcılar">
          <p>
            Platform sınava hazırlanan öğrenciler içindir ve kullanıcılarımızın önemli bir bölümü
            reşit değildir. 18 yaşından küçükseniz bu platformu velinizin bilgisi ve izniyle
            kullanmalısınız.
          </p>
          <p>
            Öğrencilerden yalnızca eğitim takibi için gereken bilgileri istiyoruz. Çocuklara yönelik
            profilleme yapmıyor, davranışsal reklam göstermiyoruz.
          </p>
          <p>
            Bir veli olarak çocuğunuza ait verilerin silinmesini istiyorsanız yukarıdaki e-posta
            adresinden bize yazmanız yeterlidir.
          </p>
        </Section>

        <Section id="saklama" title="Ne kadar süre saklıyoruz">
          <p>
            Hesabınız açık olduğu sürece kayıtlarınız saklanır — çalışma geçmişinin anlamı zaten
            zaman içindeki gelişimi göstermesidir. Hesabınızın silinmesini istediğinizde size ait
            tüm kayıtlar silinir.
          </p>
          <p>
            Veli bağlantısı için üretilen doğrulama kodları 24 saat sonra geçersiz olur ve tek
            kullanımlıktır.
          </p>
        </Section>

        <Section id="haklar" title="Haklarınız">
          <p>
            Kişisel verileriniz üzerinde şu haklara sahipsiniz: verilerinize erişmek, düzeltilmesini
            istemek, silinmesini istemek, işlenmesine itiraz etmek ve bir kopyasını talep etmek.
          </p>
          <p>
            Bazılarını uygulama içinden zaten yapabilirsiniz: adınızı ve sınav bilgilerinizi
            profilinizden değiştirebilir, çalışma kayıtlarınızı silebilir, veli bağlantısını
            kaldırabilir, bildirimleri kapatabilirsiniz. Geri kalanı için e-posta yazmanız yeterli;
            talebinizi en geç 30 gün içinde sonuçlandırırız.
          </p>
        </Section>

        <Section id="guvenlik" title="Güvenlik">
          <p>
            Bağlantılar şifrelenir (HTTPS). Veritabanında satır bazlı güvenlik kuralları uygulanır:
            her kullanıcı yalnızca kendi verisine, öğretmen öğrencilerinin verisine, veli ise
            yalnızca onaylanmış öğrencisinin izin verilen verilerine erişebilir. Bu kurallar
            uygulamanın kendisinde değil veritabanında tanımlıdır; arayüzü atlayan istekler için de
            geçerlidir.
          </p>
          <p>
            Yine de hiçbir sistem kusursuz değildir. Bir güvenlik açığı fark ederseniz lütfen
            yukarıdaki adresten bildirin.
          </p>
        </Section>

        <Section id="cerez" title="Çerezler ve yerel depolama">
          <p>
            Reklam veya takip çerezi kullanmıyoruz. Tarayıcınızda yalnızca iki şey tutulur: oturumu
            açık tutan kimlik doğrulama bilgisi ve kapattığınız bir bilgi kartının tekrar
            gösterilmemesi için basit bir tercih kaydı.
          </p>
        </Section>

        <Section id="degisiklik" title="Değişiklikler">
          <p>
            Bu politikayı güncellersek sayfanın başındaki tarihi değiştiririz. Topladığımız veriler
            veya paylaşım biçimimiz konusunda önemli bir değişiklik olursa uygulama üzerinden ayrıca
            bilgilendiririz.
          </p>
        </Section>

        <div className="rounded-card border border-line bg-surface-muted p-5">
          <p className="text-sm leading-relaxed text-ink/70">
            Sorunuz mu var? Doğrudan{' '}
            <a
              className="font-semibold text-brand-700 underline underline-offset-4"
              href="mailto:furkan.yazcicek35@icloud.com"
            >
              furkan.yazcicek35@icloud.com
            </a>{' '}
            adresine yazın.
          </p>
        </div>
      </main>
    </div>
  )
}
