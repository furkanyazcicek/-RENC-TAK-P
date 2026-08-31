import { useState } from 'react'
import {
  BookOpen,
  Camera,
  LogOut,
  MessageCircle,
  Mic,
  MicOff,
  MonitorUp,
  MoreHorizontal,
  NotebookPen,
  PhoneOff,
  PenLine,
  Settings,
  User,
  VideoOff,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { Button, Drawer } from '../ui'

/**
 * Canlı ders kontrol şeridi.
 *
 * HİYERARŞİ
 * ---------
 * Sol/orta: derse katılmayı sürdüren kontroller (mikrofon, kamera, ekran).
 * Sağ: bağlam açan paneller (materyal, öğrenci, mesaj, not).
 * En sağ: ayrılma. "Dersten ayrıl" ile "Dersi herkes için bitir" AYRI iki
 * eylemdir ve ikincisi onay ister — yanlış dokunuşla öğrencinin dersi
 * kapanmasın.
 *
 * TELEFONDA ŞERİT KAYDIRILMAZ
 * ---------------------------
 * Bütün düğmeleri dar ekranda yan yana dizmek şeridi yatay kaydırılabilir
 * yapıyordu ve "Ayrıl" ekranın dışında kalıyordu — dersten çıkmak için
 * kaydırmak gerekiyordu. Bunun yerine telefonda yalnızca mikrofon, kamera,
 * "Daha fazla" ve çıkış görünür; kalanlar alttan açılan sayfada.
 *
 * Durumlar yalnız renkle anlatılmaz: kapalı mikrofon hem üstü çizili simge,
 * hem kırmızı zemin, hem de erişilebilir adında "kapalı" taşır.
 */

function ControlButton({ active, danger, label, Icon, onClick, badge, disabled, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={active !== undefined ? active : undefined}
      title={label}
      className={cn(
        'focus-ring relative grid h-11 w-11 shrink-0 place-items-center rounded-btn transition-colors duration-150',
        'disabled:cursor-not-allowed disabled:opacity-40',
        danger
          ? 'bg-danger-500 text-white hover:bg-danger-600'
          : active
            ? 'bg-white/[0.14] text-white'
            : 'text-white/70 hover:bg-white/[0.1] hover:text-white',
        className
      )}
    >
      <Icon className="h-[19px] w-[19px]" strokeWidth={2} aria-hidden="true" />
      {badge > 0 && (
        <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent-500 px-1 text-[10px] font-bold text-white">
          {badge > 9 ? '9+' : badge}
        </span>
      )}
    </button>
  )
}

/** Alttan açılan "daha fazla" sayfasındaki satır. */
function SheetRow({ label, description, Icon, onClick, badge }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring flex w-full items-center gap-3 rounded-btn px-3 py-3 text-left transition-colors hover:bg-ink/[0.04]"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-brand-500/10 text-brand-600">
        <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-ink">{label}</span>
        {description && <span className="block text-xs text-ink/55">{description}</span>}
      </span>
      {badge > 0 && (
        <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent-500 px-1.5 text-2xs font-bold text-white">
          {badge > 9 ? '9+' : badge}
        </span>
      )}
    </button>
  )
}

export default function CallControls({
  role,
  micOn,
  camOn,
  screenOn,
  onToggleMic,
  onToggleCam,
  onToggleScreen,
  onOpenDevices,
  onOpenMaterials,
  onOpenContext,
  onOpenChat,
  onOpenNote,
  onBackToBoard,
  showBackToBoard,
  unreadChat = 0,
  onLeave,
  onEnd,
  className,
}) {
  const [moreOpen, setMoreOpen] = useState(false)
  const call = (fn) => () => {
    setMoreOpen(false)
    fn?.()
  }

  return (
    <>
      <div
        className={cn(
          'flex items-center gap-1.5 rounded-panel bg-ink/[0.92] px-2 py-2 shadow-overlay',
          className
        )}
      >
        <ControlButton
          active={micOn}
          danger={!micOn}
          label={micOn ? 'Mikrofonu kapat' : 'Mikrofon kapalı — açmak için dokunun'}
          Icon={micOn ? Mic : MicOff}
          onClick={onToggleMic}
        />
        <ControlButton
          active={camOn}
          danger={!camOn}
          label={camOn ? 'Kamerayı kapat' : 'Kamera kapalı — açmak için dokunun'}
          Icon={camOn ? Camera : VideoOff}
          onClick={onToggleCam}
        />

        {/* Telefonda tek düğme, masaüstünde açık liste */}
        <ControlButton
          label="Daha fazla ders aracı"
          Icon={MoreHorizontal}
          onClick={() => setMoreOpen(true)}
          badge={unreadChat}
          className="md:hidden"
        />

        <div className="hidden items-center gap-1.5 md:flex">
          <ControlButton
            active={screenOn}
            label={screenOn ? 'Ekran paylaşımını durdur' : 'Ekranını paylaş'}
            Icon={MonitorUp}
            onClick={onToggleScreen}
          />
          <ControlButton label="Kamera ve mikrofon ayarları" Icon={Settings} onClick={onOpenDevices} />

          <span className="mx-1 h-7 w-px shrink-0 bg-white/15" aria-hidden="true" />

          {showBackToBoard && <ControlButton label="Tahtaya dön" Icon={PenLine} onClick={onBackToBoard} />}
          <ControlButton label="Materyaller" Icon={BookOpen} onClick={onOpenMaterials} />
          {role === 'teacher' && <ControlButton label="Öğrenci bağlamı" Icon={User} onClick={onOpenContext} />}
          <ControlButton
            label="Ders içi mesajlar"
            Icon={MessageCircle}
            onClick={onOpenChat}
            badge={unreadChat}
          />
          {role === 'teacher' && (
            <ControlButton label="Ders özeti notu" Icon={NotebookPen} onClick={onOpenNote} />
          )}
        </div>

        <span className="ml-auto" />

        {/* Dar ekranda metin gizleniyor; erişilebilir ad `aria-label` ile
            KORUNUR — yoksa ekran okuyucu için adsız iki düğme kalırdı. */}
        <Button
          variant="ghost"
          size="sm"
          icon={LogOut}
          onClick={onLeave}
          aria-label="Dersten ayrıl"
          title="Dersten ayrıl"
          className="shrink-0 text-white/75 hover:bg-white/10 hover:text-white"
        >
          <span className="hidden sm:inline">Ayrıl</span>
        </Button>
        {role === 'teacher' && (
          <Button
            variant="danger"
            size="sm"
            icon={PhoneOff}
            onClick={onEnd}
            aria-label="Dersi herkes için bitir"
            title="Dersi herkes için bitir"
            className="shrink-0"
          >
            <span className="hidden sm:inline">Dersi Bitir</span>
          </Button>
        )}
      </div>

      <Drawer
        open={moreOpen}
        onClose={() => setMoreOpen(false)}
        title="Ders araçları"
        width="sm"
        className="md:hidden"
      >
        <div className="flex flex-col gap-1">
          {showBackToBoard && (
            <SheetRow
              label="Tahtaya dön"
              description="Merkez alanı tahtaya çevir"
              Icon={PenLine}
              onClick={call(onBackToBoard)}
            />
          )}
          <SheetRow
            label="Materyaller"
            description="Soru, ders notu ve kaynaklar"
            Icon={BookOpen}
            onClick={call(onOpenMaterials)}
          />
          <SheetRow
            label="Ders mesajları"
            description="Yazışma"
            Icon={MessageCircle}
            onClick={call(onOpenChat)}
            badge={unreadChat}
          />
          {role === 'teacher' && (
            <SheetRow
              label="Öğrenci bağlamı"
              description="Denemeler, zayıf konular, ödevler"
              Icon={User}
              onClick={call(onOpenContext)}
            />
          )}
          {role === 'teacher' && (
            <SheetRow
              label="Ders özeti notun"
              description="Yalnızca sen görürsün"
              Icon={NotebookPen}
              onClick={call(onOpenNote)}
            />
          )}
          <SheetRow
            label={screenOn ? 'Ekran paylaşımını durdur' : 'Ekranını paylaş'}
            description="Telefon tarayıcılarının çoğu desteklemez"
            Icon={MonitorUp}
            onClick={call(onToggleScreen)}
          />
          <SheetRow
            label="Kamera ve mikrofon"
            description="Cihaz seçimi ve test"
            Icon={Settings}
            onClick={call(onOpenDevices)}
          />
        </div>
      </Drawer>
    </>
  )
}
