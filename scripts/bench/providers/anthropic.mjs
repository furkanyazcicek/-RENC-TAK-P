/**
 * Anthropic adaptörü — Messages API. OPSİYONELDİR.
 *
 * `config.mjs` içinde varsayılan olarak `enabled: false`. Kullanıcı talebi:
 * üçüncü sağlayıcı ancak altyapıyı karmaşıklaştırmıyorsa eklensin. Bu dosya
 * ~90 satır ve diğerleriyle aynı sözleşmede olduğu için koşucuda hiçbir
 * özel durum gerektirmiyor — açmak için config'te `enabled: true` yeter.
 *
 * STRUCTURED OUTPUT FARKI
 * -----------------------
 * Anthropic'te `response_format` yok. Şemayı garanti altına almanın yolu
 * bir aracı ZORUNLU kılmak: modele tek bir `submit_solution` aracı verilir
 * ve `tool_choice` ile o aracı çağırması zorlanır. Aracın `input_schema`'sı
 * bizim şemamızdır, dolayısıyla çıktı şemaya uyar.
 *
 * Bu da bir taşıma çevirisidir, görev değişikliği değil.
 */

import { httpJson, classifyError, emptyUsage } from './index.mjs'

const BASE = process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com/v1'
const VERSION = process.env.ANTHROPIC_VERSION || '2023-06-01'

export async function solveAnthropic(request) {
  const { model, systemPrompt, userPrompt, image, schema, temperature, maxOutputTokens, signal, timeoutMs } = request

  const content = []
  if (image) {
    // Anthropic görüntüyü metinden ÖNCE ister — sıra ters olursa model
    // bazen görüntüye hiç bakmadan cevap veriyor.
    content.push({
      type: 'image',
      source: { type: 'base64', media_type: image.mimeType, data: image.base64 },
    })
  }
  content.push({ type: 'text', text: userPrompt })

  const body = {
    model: model.id,
    max_tokens: maxOutputTokens,
    system: systemPrompt,
    messages: [{ role: 'user', content }],
    tools: [
      {
        name: 'submit_solution',
        description: 'Çözümü yapılandırılmış biçimde gönder. Başka bir çıktı üretme.',
        input_schema: schema,
      },
    ],
    tool_choice: { type: 'tool', name: 'submit_solution' },
  }

  if (temperature !== null && temperature !== undefined) body.temperature = temperature

  const response = await httpJson(`${BASE}/messages`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': model.apiKey,
      'anthropic-version': VERSION,
    },
    body,
    signal,
    timeoutMs,
  })

  if (!response.ok) {
    return {
      ok: false,
      parsed: null,
      rawText: '',
      usage: emptyUsage(),
      httpStatus: response.status,
      error: {
        kind: classifyError(response.status, response.body),
        message: response.body,
        status: response.status,
      },
    }
  }

  const toolUse = (response.json.content ?? []).find((b) => b.type === 'tool_use')
  const parsed = toolUse?.input ?? null

  const u = response.json.usage ?? {}

  return {
    ok: true,
    parsed,
    // Ham metin yok (araç çıktısı geldi); karşılaştırılabilirlik için
    // JSON'a geri çeviriyoruz.
    rawText: parsed ? JSON.stringify(parsed) : '',
    schemaRecovered: false,
    truncated: response.json.stop_reason === 'max_tokens',
    usage: {
      input: u.input_tokens ?? 0,
      // Anthropic düşünme token'larını çıktıya dahil eder, ayrı vermez.
      output: u.output_tokens ?? 0,
      reasoning: 0,
      cachedInput: u.cache_read_input_tokens ?? 0,
    },
    httpStatus: response.status,
    error: null,
  }
}
