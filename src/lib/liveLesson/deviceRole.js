/**
 * CİHAZ ROLÜ — aynı derse birden fazla cihazdan girme.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN AÇIKÇA SORULUYOR
 * ═══════════════════════════════════════════════════════════════════
 * Öğretmen tabletten kalemle anlatıyor, telefonunu/bilgisayarını da
 * kamera olarak kullanıyor. Bu iki cihazın işi TAMAMEN farklı:
 *
 *   Tablet   → mikrofon + hoparlör + tahta   (dersin kalbi)
 *   Kamera   → yalnız görüntü, sesi tamamen kapalı
 *
 * Önceden bunu tahmin etmeye çalışıyorduk ("sonra giren mikrofonunu
 * kapatsın"). Tahmin yetmez: kamera cihazının HOPARLÖRÜ de kapalı olmalı,
 * yoksa tabletin sesi kameranın hoparlöründen çıkıp tabletin mikrofonuna
 * geri girer ve yankı olur. Bu yüzden rol artık sorulur, tahmin edilmez.
 *
 * Seçim cihazda hatırlanır: tablet her derste yeniden sormaz.
 */

export const DEVICE_ROLES = {
  /** Tek cihazla ders: her şey açık. Varsayılan ve en sık durum. */
  SOLO: 'solo',
  /** Tablet: anlatım ve tahta. Mikrofon ve hoparlör açık, kamera kapalı. */
  BOARD: 'board',
  /** Telefon/bilgisayar: yalnızca kamera. Ses giriş ve çıkışı KAPALI. */
  CAMERA: 'camera',
}

export const DEVICE_ROLE_LIST = [
  {
    key: DEVICE_ROLES.SOLO,
    label: 'Tek cihazdan',
    short: 'Tek cihaz',
    description: 'Kamera, mikrofon ve tahta bu cihazda. Tek bilgisayarla ders anlatıyorsan bunu seç.',
    mic: true,
    camera: true,
    audioOut: true,
  },
  {
    key: DEVICE_ROLES.BOARD,
    label: 'Tablet — anlatım ve tahta',
    short: 'Tablet',
    description: 'Mikrofon ve hoparlör bu cihazda, kamera kapalı. Kalemle tahtaya yazacağın cihaz.',
    mic: true,
    camera: false,
    audioOut: true,
  },
  {
    key: DEVICE_ROLES.CAMERA,
    label: 'Telefon / bilgisayar — kamera',
    short: 'Kamera',
    description: 'Yalnızca görüntü verir. Sesi tamamen kapalıdır; yankı yapmaz.',
    mic: false,
    camera: true,
    audioOut: false,
  },
]

export function deviceRoleInfo(role) {
  return DEVICE_ROLE_LIST.find((r) => r.key === role) ?? DEVICE_ROLE_LIST[0]
}

const STORAGE_KEY = 'drk-canli-ders-cihaz-rolu'

/** Bu cihazın en son seçtiği rol. Tarayıcı engellese de çökmez. */
export function loadDeviceRole() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return DEVICE_ROLE_LIST.some((r) => r.key === value) ? value : DEVICE_ROLES.SOLO
  } catch {
    return DEVICE_ROLES.SOLO
  }
}

export function saveDeviceRole(role) {
  try {
    window.localStorage.setItem(STORAGE_KEY, role)
  } catch {
    /* gizli sekmede yazılamaz; oturum boyunca yine de çalışır */
  }
}
