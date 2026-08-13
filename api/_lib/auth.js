/**
 * AI Koç — kimlik doğrulama ve yetki katmanı.
 *
 * TEMEL GÜVENLİK KARARI
 * ---------------------
 * İstemciden gelen `student_id` gibi hiçbir kimlik bilgisine GÜVENİLMEZ.
 * Öğrencinin kim olduğu YALNIZCA `Authorization: Bearer <jwt>` başlığındaki
 * Supabase erişim jetonu doğrulanarak belirlenir.
 *
 * Ayrıca sunucu, veritabanına `service_role` ile değil ÖĞRENCİNİN KENDİ
 * JWT'siyle bağlanır. Bu ikili koruma sağlar:
 *   1. Kod seviyesinde: her sorgu `.eq('student_id', user.id)` ile sınırlanır.
 *   2. Veritabanı seviyesinde: RLS politikaları aynı sınırı bağımsız uygular.
 * Birinci katmanda bir hata yapılsa bile ikincisi başka bir öğrencinin
 * verisinin dönmesini engeller.
 */

import { createClient } from '@supabase/supabase-js'
import { config } from './config.js'

/** İstek başlığından ham JWT'yi çıkarır. */
function readBearerToken(req) {
  const header = req.headers?.authorization || req.headers?.Authorization || ''
  if (typeof header !== 'string') return null
  const match = header.match(/^Bearer\s+(.+)$/i)
  return match ? match[1].trim() : null
}

/**
 * İsteği doğrular ve öğrenciye özel bir Supabase istemcisi döner.
 *
 * Dönüş: { ok: true, user, profile, supabase } | { ok: false, status, code }
 *
 * Hata durumunda teknik ayrıntı DÖNMEZ — çağıran taraf `code` değerini
 * kullanıcı dostu bir mesaja çevirir (bkz. `errors.js`).
 */
export async function authenticate(req) {
  const token = readBearerToken(req)
  if (!token) {
    return { ok: false, status: 401, code: 'unauthenticated' }
  }

  // Sorguların öğrencinin kendi yetkisiyle çalışması için JWT'yi
  // istemcinin varsayılan başlıklarına gömüyoruz.
  const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })

  // Jetonun gerçekten geçerli olduğunu Supabase'e doğrulatıyoruz; süresi
  // dolmuş veya kurcalanmış bir jeton burada elenir.
  const { data, error } = await supabase.auth.getUser(token)
  if (error || !data?.user) {
    return { ok: false, status: 401, code: 'unauthenticated' }
  }

  const user = data.user

  // Rol kontrolü: AI Koç ilk sürümde yalnızca ÖĞRENCİ deneyimidir.
  // (Öğretmen/veli erişimi ileride eklenecekse burası tek değişiklik noktası.)
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id, full_name, role, created_at')
    .eq('id', user.id)
    .single()

  if (profileError || !profile) {
    return { ok: false, status: 403, code: 'profile_missing' }
  }

  if (profile.role !== 'student') {
    return { ok: false, status: 403, code: 'student_only' }
  }

  return { ok: true, user, profile, supabase }
}
