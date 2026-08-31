import { createClient } from '@supabase/supabase-js'

// ============================================================
// SUPABASE BAĞLANTI BİLGİLERİ
// ------------------------------------------------------------
// Windows'ta `.env` dosyası çoğu zaman farkında olmadan `.env.txt`
// olarak kaydedilir ve Vite bu dosyayı okuyamaz. Bu yüzden bilgiler
// doğrudan buraya gömüldü — harici bir `.env` dosyasına ihtiyaç yok.
//
// Yine de `.env` kullanmak isterseniz, aşağıdaki kod önce
// `import.meta.env` değerlerine bakar; onlar tanımlı değilse gömülü
// varsayılanlara düşer. Yani her iki yöntem de sorunsuz çalışır.
//
// NOT: Buradaki anahtar "publishable" (anon) anahtardır — Supabase
// tarafından tarayıcıya gönderilmek üzere tasarlanmıştır ve zaten
// build çıktısının içinde herkese görünür durumdadır. Verilerinizi
// koruyan şey bu anahtarın gizliliği değil, tablolarınızdaki RLS
// (Row Level Security) politikalarıdır. `service_role` anahtarını
// ise ASLA bu dosyaya veya frontend koduna koymayın.
// ============================================================

const FALLBACK_SUPABASE_URL = 'https://aazadigklxnvbtwrtszj.supabase.co'
const FALLBACK_SUPABASE_ANON_KEY = 'sb_publishable_Jo5hJ5JDfbdVgdgfKQutow_HhmFJ_Zq'

const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || FALLBACK_SUPABASE_URL
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || FALLBACK_SUPABASE_ANON_KEY

/**
 * ANLIK KANALIN SANİYELİK MESAJ HAKKI.
 *
 * Varsayılan sınır saniyede 10 mesaj. Canlı derste tahtaya hızlı
 * yazarken bu sınır kolayca aşılıyor; sınır aşılınca mesajlar düşüyor,
 * karşı taraf çizimin bir kısmını hiç görmüyor ve bağlantı "yeniden
 * bağlanılıyor" durumuna düşüyordu. Ders tahtası için 40 rahat bir
 * paydır; sohbet ve bildirimler bu sınırın çok altında kalır.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: { params: { eventsPerSecond: 40 } },
})
