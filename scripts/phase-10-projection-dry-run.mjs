/** Faz 10: seçilmiş test hesaplarının yerel PostgreSQL kopyasında salt okunur provası. */
import pg from 'pg'
import { createPgLearningEvidenceRepository } from '../api/_lib/learning/repository.js'
import { runPilotProjectionCycle } from '../api/_lib/learning/pilotProjection.js'

const args = process.argv.slice(2)
const studentIds = []
let asOf = null
const connectionString = process.env.DRKOC_PHASE10_LOCAL_DATABASE_URL
const approvedStudentIds = process.env.DRKOC_PHASE10_APPROVED_TEST_IDS?.split(',').map((id) => id.trim())
let client
try {
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === '--student-id' && args[index + 1]) studentIds.push(args[++index])
    else if (args[index] === '--as-of' && args[index + 1]) asOf = args[++index]
    else throw new TypeError('pilot_projection_arguments_invalid')
  }
  if (!connectionString) throw new TypeError('local_database_url_required')
  const connection = new URL(connectionString)
  if (!['postgres:', 'postgresql:'].includes(connection.protocol)
      || !['localhost', '127.0.0.1', '[::1]'].includes(connection.hostname)) {
    throw new TypeError('local_database_target_required')
  }
  client = new pg.Client({ connectionString, ssl: false,
    connectionTimeoutMillis: 10000,
    options: '-c default_transaction_read_only=on -c statement_timeout=120000',
  })
  await client.connect()
  await client.query('begin read only')
  const target = (await client.query(`select host(inet_server_addr()) as server_address,
    current_setting('transaction_read_only') as read_only`)).rows[0]
  if (!['127.0.0.1', '::1'].includes(target?.server_address) || target.read_only !== 'on') {
    throw new TypeError('local_read_only_database_required')
  }
  const result = await runPilotProjectionCycle({
    repository: createPgLearningEvidenceRepository(client),
    studentIds, approvedStudentIds, asOf,
  })
  await client.query('commit')
  console.log(JSON.stringify(result, null, 2))
} catch (error) {
  await client?.query('rollback').catch(() => {})
  const safeCodes = new Set([
    'pilot_projection_arguments_invalid', 'local_database_url_required',
    'local_database_target_required', 'pilot_students_invalid',
    'local_read_only_database_required',
    'pilot_students_duplicate', 'approved_pilot_students_invalid',
    'approved_pilot_students_duplicate', 'pilot_projection_as_of_invalid',
    'PILOT_STUDENT_NOT_APPROVED', 'PILOT_PROJECTION_ROLLOUT_SCHEMA_MISSING',
    'PILOT_PROJECTION_FLAG_DISABLED', 'PILOT_PROJECTION_CANCELLED',
  ])
  const code = safeCodes.has(error.code) ? error.code
    : safeCodes.has(error.message) ? error.message : 'LOCAL_PROJECTION_PROBE_FAILED'
  console.error(`Yerel projeksiyon provası durdu: ${code}`)
  process.exitCode = 1
} finally {
  await client?.end().catch(() => {})
}
