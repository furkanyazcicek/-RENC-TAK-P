/** Gerçek ücretsiz sohbet handler'ını sentetik hesapla yerelde görsel olarak sınar. */
import { createServer } from 'vite'
import { createFreeCoachChatHandler } from '../api/_lib/freeCoachChat.js'
import { createFreeCoachTestSession } from './lib/free-coach-test-session.mjs'

const session = createFreeCoachTestSession()
const handler = createFreeCoachChatHandler({ authenticate: session.authenticate, loadSnapshot: async () => session.snapshot })
async function previewApi(req, res, next) {
  if (!req.url.startsWith('/api/ai-coach/')) return next()
  res.status = (status) => { res.statusCode = status; return res }
  res.json = (body) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(body)); return res }
  if (req.url === '/api/ai-coach/chat') {
    let body = ''
    for await (const chunk of req) { body += chunk; if (body.length > 10000) return res.status(413).json({ error: { message: 'Mesaj çok uzun.' } }) }
    try { req.body = JSON.parse(body) } catch { req.body = null }
    return handler(req, res)
  }
  if (req.url === '/api/ai-coach/briefing') return res.json({ coaching: null })
  if (req.url.startsWith('/api/ai-coach/conversations')) return res.json({ conversations: session.tables.ai_conversations, messages: session.tables.ai_messages })
  return res.status(404).json({ error: { message: 'Bu işlem yerel testte kapalı.' } })
}
const server = await createServer({
  server: { host: '127.0.0.1', port: 5180, strictPort: true },
  plugins: [{ name: 'free-coach-synthetic-api', configureServer(server) { server.middlewares.use(previewApi) } }],
})
await server.listen()
console.log('Yerel sentetik Koç: http://127.0.0.1:5180/ai-koc?capture=reels&capture-state=free-engine')
