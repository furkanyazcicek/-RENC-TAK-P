/**
 * Canlı görüşme sağlayıcı SÖZLEŞMESİ.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN SAĞLAYICIDAN BAĞIMSIZ BİR KATMAN
 * ═══════════════════════════════════════════════════════════════════
 * Ham WebRTC'yi sıfırdan yazmak bu ürünün işi değil: NAT geçişi, TURN
 * sunucusu, yeniden bağlanma, cihaz uyumluluğu, ekran paylaşımı ve
 * bağlantı kalitesi ölçümü kendi başına bir ürün. Bunlar için olgun bir
 * sağlayıcı (LiveKit, Daily, 100ms, Twilio…) kullanılmalı.
 *
 * Sağlayıcı SEÇİMİ kullanıcıya aittir (ücretli servis kararı). O karar
 * verilene kadar arayüz beklemesin diye, bileşenler hiçbir SDK'yı
 * doğrudan tanımaz; yalnızca aşağıdaki sözleşmeyi bilir. Sağlayıcı
 * geldiğinde tek bir dosya eklenir, ekranların hiçbiri değişmez.
 *
 * ═══════════════════════════════════════════════════════════════════
 * SÖZLEŞME
 * ═══════════════════════════════════════════════════════════════════
 * Bir sağlayıcı fabrikası şu imzayı taşır:
 *
 *   createXProvider({ session, user, role, getAccessToken }) → provider
 *
 * `provider` şu yöntemleri sunar (hepsi Promise döndürebilir):
 *
 *   prepareRoom()            Odayı hazırlar, izinleri ister, cihazları okur.
 *   joinRoom()               Odaya katılır.
 *   leaveRoom()              Odadan çıkar ve TÜM medya akışlarını kapatır.
 *   toggleMicrophone(on?)    Mikrofonu açar/kapatır, yeni durumu döner.
 *   toggleCamera(on?)        Kamerayı açar/kapatır, yeni durumu döner.
 *   startScreenShare()       Ekran paylaşımını başlatır.
 *   stopScreenShare()        Ekran paylaşımını bitirir.
 *   switchCamera()           Ön/arka kamera arasında geçer (mobil).
 *   getDevices()             { cameras, microphones, speakers } döner.
 *   selectMicrophone(id)     Mikrofon değiştirir.
 *   selectCamera(id)         Kamera değiştirir.
 *   getConnectionState()     'idle'|'connecting'|'connected'|'reconnecting'|'failed'|'closed'
 *   getParticipants()        Katılımcı listesi.
 *   reconnect()              Bağlantıyı yeniden kurar (sayfayı yenilemeden).
 *   on(event, handler)       Aboneliği kaldıran fonksiyon döner.
 *   destroy()                Her şeyi temizler.
 *
 * Olaylar: 'local-stream' | 'screen-stream' | 'devices' | 'connection'
 *          | 'participants' | 'error' | 'permission'
 *
 * ═══════════════════════════════════════════════════════════════════
 * GÜVENLİK KURALI
 * ═══════════════════════════════════════════════════════════════════
 * Sağlayıcının GİZLİ ANAHTARI istemci paketine ASLA girmez. Oda erişim
 * belirteci sunucuda üretilir (`api/live-lesson/room-token.js`) ve
 * sağlayıcıya `getAccessToken()` ile verilir. `VITE_` önekli hiçbir
 * ortam değişkenine gizli anahtar konulamaz — Vite onları build çıktısına
 * gömer ve herkes görür.
 */

import { createLocalPreviewProvider } from './localPreview'
import { createLiveKitProvider } from './livekit'

/** Kayıtlı sağlayıcılar. Yeni sağlayıcı buraya bir satırla eklenir. */
const REGISTRY = {
  local_preview: createLocalPreviewProvider,
  livekit: createLiveKitProvider,
}

/**
 * LiveKit yapılandırıldı mı?
 *
 * `VITE_LIVEKIT_URL` GİZLİ DEĞİLDİR — yalnızca sunucunun adresidir,
 * tıpkı Supabase adresi gibi. Erişimi açan şey adres değil, sunucuda
 * üretilen kısa ömürlü belirteçtir. API anahtarı ve gizli anahtar
 * `VITE_` öneki OLMADAN saklanır ve tarayıcıya hiç inmez.
 *
 * Adres tanımlı değilse ürün "Yerel önizleme" moduna düşer: kamera,
 * mikrofon, tahta ve mesajlar çalışır, uzak görüntü aktarılmaz. Sahte
 * katılımcı veya sahte bağlantı durumu ÜRETİLMEZ.
 */
export const LIVEKIT_URL = import.meta.env?.VITE_LIVEKIT_URL || ''

export const REMOTE_MEDIA_AVAILABLE = Boolean(LIVEKIT_URL)

export const DEFAULT_PROVIDER = REMOTE_MEDIA_AVAILABLE ? 'livekit' : 'local_preview'

/**
 * Sağlayıcı seçimi ORTAM yapılandırmasından gelir, dersin kayıtlı
 * `provider` sütunundan değil. O sütun "bu ders hangi altyapıyla
 * yapıldı" kaydıdır; anahtar değildir. Aksi hâlde LiveKit bağlandıktan
 * sonra eski dersler yerel önizlemede takılı kalırdı.
 */
export function createProvider(name, options) {
  const factory = REGISTRY[name] ?? REGISTRY[DEFAULT_PROVIDER]
  return factory(options)
}

export function providerLabel(name) {
  if (name === 'local_preview') return 'Yerel önizleme'
  if (name === 'livekit') return 'LiveKit'
  return name
}

/** Bağlantı durumlarının Türkçe karşılığı — tek kaynak. */
export const CONNECTION_LABELS = {
  idle: 'Hazır değil',
  connecting: 'Bağlantı kuruluyor',
  connected: 'Bağlantı kuruldu',
  reconnecting: 'Yeniden bağlanılıyor',
  weak: 'Bağlantı zayıf',
  failed: 'Bağlantı kurulamadı',
  closed: 'Bağlantı kapandı',
}

export const CONNECTION_TONES = {
  idle: 'neutral',
  connecting: 'info',
  connected: 'success',
  reconnecting: 'warning',
  weak: 'warning',
  failed: 'danger',
  closed: 'neutral',
}
