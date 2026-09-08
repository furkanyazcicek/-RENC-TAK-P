-- ============================================================================
-- AI KOÇ FAZ 2 — GÜVENLİ VE YENİDEN ÜRETİLEBİLİR VERİ AĞI ÇEKİRDEĞİ
-- ============================================================================
-- Bu migration yalnız veri ağı çekirdeğini kurar. Mevcut ürün
-- kaynaklarını bağlamaz, kaynak verisini taramaz ve backfill çalıştırmaz.
--
-- Geri dönüş: ürün kaynakları bu fazda bu tablolara bağlı değildir;
-- migration uygulanmış olsa bile mevcut akışlar yeni çekirdek kullanılmadan
-- çalışır. Kanıt oluştuktan sonra tabloları düşürmek güvenli veya
-- otomatik bir rollback değildir; hesap silme ve saklama politikası ayrıdır.
--
-- Yeniden uygulama: bütün nesneler sabit adlı, policy'ler drop/create ve
-- fonksiyonlar create-or-replace'dir. Kaynak sözleşmesi satırları aşağıdaki
-- işaretli alana SOURCE_REGISTRY'den deterministik olarak üretilir.
-- ============================================================================

begin;

create schema if not exists learning_private;
revoke all on schema learning_private from public, anon, authenticated;
alter default privileges in schema learning_private revoke execute on functions from public;

-- --------------------------------------------------------------------------
-- Saf ve immutable JSON/text doğrulayıcıları. Bunlar CHECK constraint'lerinde
-- kullanıldığı için tablo okumaz, saat veya oturum durumuna bakmaz.
-- --------------------------------------------------------------------------

create or replace function learning_private.text_array_matches(
  p_values text[],
  p_pattern text
)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_value text;
begin
  if p_values is null or p_pattern is null then
    return false;
  end if;
  foreach v_value in array p_values loop
    if v_value is null or v_value !~ p_pattern then
      return false;
    end if;
  end loop;
  return true;
end;
$fn$;

create or replace function learning_private.jsonb_shape_is_safe(
  p_value jsonb,
  p_depth integer default 0
)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_type text;
  v_key text;
  v_item jsonb;
  v_count integer;
begin
  if p_value is null or p_depth > 2 then
    return false;
  end if;

  v_type := pg_catalog.jsonb_typeof(p_value);
  if v_type in ('null', 'boolean', 'number') then
    return true;
  end if;
  if v_type = 'string' then
    return pg_catalog.char_length(p_value #>> '{}') <= 256;
  end if;
  if v_type = 'array' then
    if pg_catalog.jsonb_array_length(p_value) > 12 then
      return false;
    end if;
    for v_item in select value from pg_catalog.jsonb_array_elements(p_value) loop
      if not learning_private.jsonb_shape_is_safe(v_item, p_depth + 1) then
        return false;
      end if;
    end loop;
    return true;
  end if;
  if v_type = 'object' then
    select pg_catalog.count(*)::integer
      into v_count
      from pg_catalog.jsonb_object_keys(p_value);
    if v_count > 12 then
      return false;
    end if;
    for v_key, v_item in select key, value from pg_catalog.jsonb_each(p_value) loop
      if pg_catalog.char_length(v_key) > 64
         or not learning_private.jsonb_shape_is_safe(v_item, p_depth + 1) then
        return false;
      end if;
    end loop;
    return true;
  end if;
  return false;
end;
$fn$;

create or replace function learning_private.jsonb_key_count(p_value jsonb)
returns integer
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_type text;
  v_item jsonb;
  v_total integer := 0;
begin
  if p_value is null then
    return 0;
  end if;
  v_type := pg_catalog.jsonb_typeof(p_value);
  if v_type = 'object' then
    select pg_catalog.count(*)::integer
      into v_total
      from pg_catalog.jsonb_object_keys(p_value);
    for v_item in select value from pg_catalog.jsonb_each(p_value) loop
      v_total := v_total + learning_private.jsonb_key_count(v_item);
    end loop;
  elsif v_type = 'array' then
    for v_item in select value from pg_catalog.jsonb_array_elements(p_value) loop
      v_total := v_total + learning_private.jsonb_key_count(v_item);
    end loop;
  end if;
  return v_total;
end;
$fn$;

create or replace function learning_private.metadata_keys_are_safe(p_value jsonb)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_type text;
  v_key text;
  v_item jsonb;
begin
  if p_value is null then
    return false;
  end if;
  v_type := pg_catalog.jsonb_typeof(p_value);
  if v_type = 'object' then
    for v_key, v_item in select key, value from pg_catalog.jsonb_each(p_value) loop
      if v_key ~* '(^raw[_-]|question[_-](text|body|prompt|content)$|^(prompt|answer|solution|message)[_-](text|body|content)$|notebook[_-](text|body|content|data)$|transcript|audio[_-](blob|url|content|data)$|video[_-](blob|url|content|data)$|image[_-](blob|url|content|data|base64)$|photo[_-](blob|url|content|data|base64)$|private[_-]?note|teacher[_-]?reply([_-](text|body|content))?$|access[_-]?token|refresh[_-]?token|secret|password|(^|[_-])(script|command|executable|javascript|html)([_-]|$))' then
        return false;
      end if;
      if not learning_private.metadata_keys_are_safe(v_item) then
        return false;
      end if;
    end loop;
  elsif v_type = 'array' then
    for v_item in select value from pg_catalog.jsonb_array_elements(p_value) loop
      if not learning_private.metadata_keys_are_safe(v_item) then
        return false;
      end if;
    end loop;
  end if;
  return true;
end;
$fn$;

create or replace function learning_private.metadata_is_safe(p_value jsonb)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
begin
  if p_value is null or pg_catalog.jsonb_typeof(p_value) <> 'object' then
    return false;
  end if;
  if pg_catalog.octet_length(p_value::text) > 2048 then
    return false;
  end if;
  if not learning_private.jsonb_shape_is_safe(p_value, 0) then
    return false;
  end if;
  if learning_private.jsonb_key_count(p_value) > 12 then
    return false;
  end if;
  return learning_private.metadata_keys_are_safe(p_value);
end;
$fn$;

create or replace function learning_private.jsonb_keys_allowed(
  p_value jsonb,
  p_allowed text[]
)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_key text;
begin
  if p_value is null or pg_catalog.jsonb_typeof(p_value) <> 'object' then
    return false;
  end if;
  for v_key in select key from pg_catalog.jsonb_object_keys(p_value) as keys(key) loop
    if not (v_key = any(coalesce(p_allowed, array[]::text[]))) then
      return false;
    end if;
  end loop;
  return true;
end;
$fn$;

create or replace function learning_private.relations_are_valid(p_value jsonb)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_key text;
  v_item jsonb;
  v_text text;
begin
  if p_value is null or pg_catalog.jsonb_typeof(p_value) <> 'object'
     or pg_catalog.octet_length(p_value::text) > 2048 then
    return false;
  end if;
  for v_key, v_item in select key, value from pg_catalog.jsonb_each(p_value) loop
    if not (v_key = any(array[
      'session_id', 'attempt_id', 'content_id', 'question_id',
      'lesson_id', 'homework_id', 'exam_id', 'plan_id'
    ]::text[])) or pg_catalog.jsonb_typeof(v_item) <> 'string' then
      return false;
    end if;
    v_text := v_item #>> '{}';
    if v_text !~ '^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$' then
      return false;
    end if;
  end loop;
  return true;
end;
$fn$;

create or replace function learning_private.measurement_is_valid(
  p_value jsonb,
  p_evidence_class text
)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_key text;
  v_number numeric;
  v_correct numeric := 0;
  v_incorrect numeric := 0;
  v_blank numeric := 0;
  v_denominator numeric;
  v_expected numeric;
  v_source text;
  v_exam text;
  v_divisor numeric;
begin
  if p_value is null or pg_catalog.jsonb_typeof(p_value) <> 'object'
     or pg_catalog.octet_length(p_value::text) > 4096 then
    return false;
  end if;

  foreach v_key in array array[
    'correct_count', 'incorrect_count', 'blank_count', 'marked_count', 'total_count'
  ]::text[] loop
    if p_value ? v_key then
      if pg_catalog.jsonb_typeof(p_value -> v_key) <> 'number' then
        return false;
      end if;
      v_number := (p_value ->> v_key)::numeric;
      if v_number < 0 or v_number <> pg_catalog.trunc(v_number) then
        return false;
      end if;
    end if;
  end loop;

  v_correct := coalesce((p_value ->> 'correct_count')::numeric, 0);
  v_incorrect := coalesce((p_value ->> 'incorrect_count')::numeric, 0);
  v_blank := coalesce((p_value ->> 'blank_count')::numeric, 0);
  if (p_value ? 'correct_count') or (p_value ? 'incorrect_count') or (p_value ? 'blank_count') then
    if p_value ? 'marked_count'
       and (p_value ->> 'marked_count')::numeric <> v_correct + v_incorrect then
      return false;
    end if;
    if p_value ? 'total_count'
       and (p_value ->> 'total_count')::numeric <> v_correct + v_incorrect + v_blank then
      return false;
    end if;
  end if;

  if p_value ? 'accuracy' then
    if pg_catalog.jsonb_typeof(p_value -> 'accuracy') <> 'number' then
      return false;
    end if;
    v_number := (p_value ->> 'accuracy')::numeric;
    if v_number < 0 or v_number > 1 then
      return false;
    end if;
    if p_value ->> 'accuracy_denominator' = 'marked' then
      v_denominator := (p_value ->> 'marked_count')::numeric;
      if p_value ->> 'accuracy_formula' <> 'correct_count / marked_count'
         or p_value ->> 'accuracy_formula_version' <> 'accuracy-marked-v1' then
        return false;
      end if;
    elsif p_value ->> 'accuracy_denominator' = 'total' then
      v_denominator := (p_value ->> 'total_count')::numeric;
      if p_value ->> 'accuracy_formula' <> 'correct_count / total_count'
         or p_value ->> 'accuracy_formula_version' <> 'accuracy-total-v1' then
        return false;
      end if;
    else
      return false;
    end if;
    if v_denominator is null or v_denominator <= 0 then
      return false;
    end if;
    v_expected := v_correct / v_denominator;
    if pg_catalog.abs(v_number - v_expected) > 0.000001 then
      return false;
    end if;
  end if;

  if p_value ? 'net_score' then
    if pg_catalog.jsonb_typeof(p_value -> 'net_score') <> 'number' then
      return false;
    end if;
    if not (p_value ? 'correct_count')
       or not (p_value ? 'incorrect_count') then
      return false;
    end if;
    v_exam := pg_catalog.upper(coalesce(p_value ->> 'net_exam_type', ''));
    if not (v_exam = any(array['LGS', 'TYT', 'AYT', 'KPSS']::text[])) then
      return false;
    end if;
    v_divisor := case when v_exam = 'LGS' then 3 else 4 end;
    if p_value ->> 'net_formula' <> 'correct_count - incorrect_count / ' || v_divisor::integer::text
       or p_value ->> 'net_formula_version' <> (case when v_exam = 'LGS' then 'net-lgs-v1' else 'net-standard-v1' end)
       or pg_catalog.abs((p_value ->> 'net_score')::numeric - (v_correct - v_incorrect / v_divisor)) > 0.000001 then
      return false;
    end if;
  end if;

  if p_value ? 'duration_minutes' then
    if pg_catalog.jsonb_typeof(p_value -> 'duration_minutes') <> 'number' then
      return false;
    end if;
    v_number := (p_value ->> 'duration_minutes')::numeric;
    if v_number < 0 or v_number > 1440 then
      return false;
    end if;
  end if;
  if p_value ? 'difficulty' then
    if pg_catalog.jsonb_typeof(p_value -> 'difficulty') <> 'number' then
      return false;
    end if;
    v_number := (p_value ->> 'difficulty')::numeric;
    if v_number < 1 or v_number > 5 then
      return false;
    end if;
  end if;
  if p_value ? 'help_used' and pg_catalog.jsonb_typeof(p_value -> 'help_used') <> 'boolean' then
    return false;
  end if;
  if p_value ? 'student_correct' and pg_catalog.jsonb_typeof(p_value -> 'student_correct') <> 'boolean' then
    return false;
  end if;
  if p_value ? 'completion_status'
     and not ((p_value ->> 'completion_status') = any(array['not_started', 'in_progress', 'completed', 'skipped']::text[])) then
    return false;
  end if;

  foreach v_key in array array[
    'accuracy', 'net', 'duration', 'difficulty', 'help', 'student_correct', 'completion'
  ]::text[] loop
    if (v_key = 'net' and p_value ? 'net_score')
       or (v_key <> 'net' and p_value ? case
         when v_key = 'duration' then 'duration_minutes'
         when v_key = 'help' then 'help_used'
         else v_key
       end) then
      v_source := p_value ->> (v_key || '_source');
      if not (v_source = any(array[
        'source_record', 'server_computed', 'system_measured', 'teacher_entered',
        'student_reported', 'model_inferred', 'client_interaction',
        'active_measurement', 'approximate', 'default_estimate', 'unknown'
      ]::text[])) then
        return false;
      end if;
      if p_evidence_class = 'direct_measurement'
         and not (v_source = any(array[
           'source_record', 'server_computed', 'system_measured',
           'teacher_entered', 'client_interaction', 'active_measurement'
         ]::text[])) then
        return false;
      end if;
    end if;
  end loop;

  if p_value ? 'duration_minutes'
     and not ((p_value ->> 'duration_source') = any(array[
       'active_measurement', 'approximate', 'default_estimate', 'student_reported'
     ]::text[])) then
    return false;
  end if;
  if p_value ? 'student_correct'
     and not ((p_value ->> 'student_correct_source') = any(array[
       'system_measured', 'student_reported', 'teacher_entered', 'model_inferred'
     ]::text[])) then
    return false;
  end if;
  return true;
end;
$fn$;

create or replace function learning_private.diagnostic_measurement_totals_are_valid(
  p_value jsonb
)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_key text;
  v_item jsonb;
  v_number numeric;
begin
  if p_value is null
     or pg_catalog.jsonb_typeof(p_value) <> 'object'
     or pg_catalog.octet_length(p_value::text) > 1024 then
    return false;
  end if;

  for v_key, v_item in
    select item.key, item.value from pg_catalog.jsonb_each(p_value) as item
  loop
    if not (v_key = any(array[
      'correct_count', 'incorrect_count', 'blank_count',
      'total_count', 'marked_count', 'duration_minutes'
    ]::text[]))
       or pg_catalog.jsonb_typeof(v_item) <> 'number' then
      return false;
    end if;
    v_number := (v_item #>> '{}')::numeric;
    if v_number < 0 then
      return false;
    end if;
  end loop;
  return true;
exception when numeric_value_out_of_range then
  return false;
end;
$fn$;

create or replace function learning_private.direct_measurement_has_result(p_value jsonb)
returns boolean
language sql
immutable
set search_path = ''
as $fn$
  select
    (p_value ? 'student_correct' and pg_catalog.jsonb_typeof(p_value -> 'student_correct') = 'boolean')
    or (p_value ? 'total_count' and pg_catalog.jsonb_typeof(p_value -> 'total_count') = 'number'
        and (p_value ->> 'total_count')::numeric > 0)
    or (p_value ? 'marked_count' and pg_catalog.jsonb_typeof(p_value -> 'marked_count') = 'number'
        and (p_value ->> 'marked_count')::numeric > 0);
$fn$;

create or replace function learning_private.derivation_is_valid(p_value jsonb)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_item jsonb;
begin
  if p_value is null or pg_catalog.jsonb_typeof(p_value) <> 'object'
     or pg_catalog.octet_length(p_value::text) > 4096
     or pg_catalog.jsonb_typeof(p_value -> 'input_record_ids') <> 'array'
     or pg_catalog.jsonb_array_length(p_value -> 'input_record_ids') < 1
     or pg_catalog.jsonb_array_length(p_value -> 'input_record_ids') > 256
     or pg_catalog.jsonb_typeof(p_value -> 'method') <> 'string'
     or pg_catalog.char_length(p_value ->> 'method') > 64
     or (p_value ->> 'method') !~ '^[a-z][a-z0-9._-]{1,63}$'
     or pg_catalog.jsonb_typeof(p_value -> 'version') <> 'string'
     or pg_catalog.char_length(p_value ->> 'version') > 64
     or (p_value ->> 'version') !~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$' then
    return false;
  end if;
  for v_item in select value from pg_catalog.jsonb_array_elements(p_value -> 'input_record_ids') loop
    if pg_catalog.jsonb_typeof(v_item) <> 'string'
       or (v_item #>> '{}') !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
      return false;
    end if;
  end loop;
  return true;
end;
$fn$;

create or replace function learning_private.source_locator_is_valid(
  p_locator text,
  p_source_code text
)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_prefix text := 'drkoc-ref:v1:' || p_source_code || ':';
  v_token text;
begin
  if p_locator is null then
    return true;
  end if;
  if pg_catalog.strpos(p_locator, '://') > 0
     or pg_catalog.left(p_locator, pg_catalog.char_length(v_prefix)) <> v_prefix then
    return false;
  end if;
  v_token := pg_catalog.substr(p_locator, pg_catalog.char_length(v_prefix) + 1);
  return pg_catalog.char_length(v_token) between 8 and 128
    and v_token ~ '^[A-Za-z0-9_-]+$'
    and v_token !~* '[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}';
end;
$fn$;

create or replace function learning_private.safe_timestamptz(p_value text)
returns timestamptz
language plpgsql
stable
set search_path = ''
as $fn$
begin
  if p_value is null
     or p_value !~ '^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$' then
    return null;
  end if;
  return p_value::timestamptz;
exception when others then
  return null;
end;
$fn$;

create or replace function learning_private.safe_date(p_value text)
returns date
language plpgsql
immutable
set search_path = ''
as $fn$
begin
  if p_value is null or p_value !~ '^\d{4}-\d{2}-\d{2}$' then
    return null;
  end if;
  return p_value::date;
exception when others then
  return null;
end;
$fn$;

-- JavaScript encodeURIComponent ile aynı güvenli ASCII kümesini kullanır.
create or replace function learning_private.uri_component(p_value text)
returns text
language plpgsql
immutable
strict
set search_path = ''
as $fn$
declare
  v_bytes bytea := pg_catalog.convert_to(p_value, 'UTF8');
  v_result text := '';
  v_index integer;
  v_byte integer;
begin
  if pg_catalog.length(v_bytes) = 0 then
    return '';
  end if;
  for v_index in 0..pg_catalog.length(v_bytes) - 1 loop
    v_byte := pg_catalog.get_byte(v_bytes, v_index);
    if (v_byte between 48 and 57)
       or (v_byte between 65 and 90)
       or (v_byte between 97 and 122)
       or v_byte = any(array[33, 39, 40, 41, 42, 45, 46, 95, 126]::integer[]) then
      v_result := v_result || pg_catalog.chr(v_byte);
    else
      v_result := v_result || '%' || pg_catalog.upper(pg_catalog.lpad(pg_catalog.to_hex(v_byte), 2, '0'));
    end if;
  end loop;
  return v_result;
end;
$fn$;

-- --------------------------------------------------------------------------
-- Sürümlü kaynak sözleşmesi izdüşümü.
-- --------------------------------------------------------------------------

create table if not exists public.learning_source_contracts (
  registry_version text not null,
  source_code text not null,
  matrix_id text not null,
  classification text not null,
  ingest_allowed boolean not null,
  contract_version text not null,
  data_class text not null,
  module_owner text not null,
  authority text not null,
  source_record_key text not null,
  record_kinds text[] not null default array[]::text[],
  semantic_event_types text[] not null default array[]::text[],
  evidence_class_by_event jsonb not null default '{}'::jsonb,
  default_evidence_class text not null,
  allowed_measurements text[] not null default array[]::text[],
  allowed_metadata text[] not null default array[]::text[],
  identity_scope text not null,
  adapter_name text,
  adapter_version text,
  resolver_name text,
  resolver_version text,
  trust_authority text not null,
  actor_student_relation text not null,
  mutation_semantics text not null,
  source_locator_policy text not null default 'opaque_only',
  retention_class text not null,
  decision_status text not null,
  seeded_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_source_contracts_pk primary key (registry_version, source_code),
  constraint learning_source_contracts_matrix_uq unique (registry_version, matrix_id),
  constraint learning_source_contracts_registry_check
    check (registry_version ~ '^[a-z][a-z0-9-]{1,63}@[0-9]+$'),
  constraint learning_source_contracts_source_check
    check (source_code ~ '^[a-z0-9][a-z0-9._-]{1,63}$'),
  constraint learning_source_contracts_matrix_check
    check (matrix_id ~ '^M(0[1-9]|[12][0-9]|3[0-8])$'),
  constraint learning_source_contracts_class_check
    check (classification in ('emitter', 'conditional_emitter', 'catalog', 'derived_readonly', 'excluded')),
  constraint learning_source_contracts_ingest_check check (
    ingest_allowed = (classification in ('emitter', 'conditional_emitter'))
  ),
  constraint learning_source_contracts_record_kinds_check
    check (
      record_kinds <@ array['event', 'snapshot', 'correction', 'tombstone', 'derived']::text[]
      and pg_catalog.array_position(record_kinds, null) is null
    ),
  constraint learning_source_contracts_events_check
    check (
      pg_catalog.array_position(semantic_event_types, null) is null
      and learning_private.text_array_matches(semantic_event_types, '^[a-z][a-z0-9_]{1,63}$')
    ),
  constraint learning_source_contracts_event_classes_check
    check (
      pg_catalog.jsonb_typeof(evidence_class_by_event) = 'object'
      and pg_catalog.octet_length(evidence_class_by_event::text) <= 4096
    ),
  constraint learning_source_contracts_default_class_check
    check (default_evidence_class in (
      'direct_measurement', 'student_self_report', 'teacher_feedback', 'exposure',
      'system_observation', 'model_inference', 'derived_result', 'operational_only'
    )),
  constraint learning_source_contracts_allowlists_check
    check (
      pg_catalog.array_position(allowed_measurements, null) is null
      and pg_catalog.array_position(allowed_metadata, null) is null
      and learning_private.text_array_matches(allowed_measurements, '^[a-z][a-z0-9_]{1,63}$')
      and learning_private.text_array_matches(allowed_metadata, '^[a-z][a-z0-9_]{1,63}$')
    ),
  constraint learning_source_contracts_locator_check
    check (source_locator_policy = 'opaque_only')
);

comment on table public.learning_source_contracts is
  'SOURCE_REGISTRY sürümlerinin immutable SQL izdüşümü; normal ürün rolleri yazamaz.';

-- SOURCE_CONTRACT_ROWS_BEGIN
insert into "public"."learning_source_contracts" ("registry_version", "source_code", "matrix_id", "classification", "contract_version", "data_class", "module_owner", "authority", "source_record_key", "record_kinds", "semantic_event_types", "evidence_class_by_event", "default_evidence_class", "allowed_measurements", "allowed_metadata", "identity_scope", "adapter_name", "adapter_version", "resolver_name", "resolver_version", "trust_authority", "actor_student_relation", "mutation_semantics", "source_locator_policy", "retention_class", "decision_status", "ingest_allowed")
values
  ('learning-source-registry@1', 'home_summary', 'M01', 'derived_readonly', 'learning-evidence@1', 'derived_view', 'student_summary', 'derived_engine', 'none', ARRAY['derived']::text[], ARRAY[]::text[], '{}'::jsonb, 'derived_result', ARRAY[]::text[], ARRAY[]::text[], 'curriculum', null, null, null, null, 'server_only', 'authenticated_student', 'read_only', 'opaque_only', 'recomputable_or_ephemeral', 'decided_not_connected', false),
  ('learning-source-registry@1', 'analytics_view', 'M02', 'derived_readonly', 'learning-evidence@1', 'derived_view', 'analytics', 'derived_engine', 'none', ARRAY['derived']::text[], ARRAY[]::text[], '{}'::jsonb, 'derived_result', ARRAY[]::text[], ARRAY[]::text[], 'curriculum', null, null, null, null, 'server_only', 'authenticated_student', 'read_only', 'opaque_only', 'recomputable_or_ephemeral', 'decided_not_connected', false),
  ('learning-source-registry@1', 'daily_logs', 'M03', 'emitter', 'learning-evidence@1', 'learning_evidence', 'daily_tracking', 'student_or_teacher_correction', 'daily_logs.id', ARRAY['event', 'correction', 'tombstone']::text[], ARRAY['study_session_reported', 'question_counts_reported']::text[], '{"question_counts_reported":"student_self_report","study_session_reported":"student_self_report"}'::jsonb, 'student_self_report', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes']::text[], ARRAY['note_present', 'entry_origin']::text[], 'curriculum', 'adaptDailyLog', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'self_or_authorized_teacher', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'mock_exam_subjects', 'M04', 'emitter', 'learning-evidence@1', 'learning_evidence', 'mock_exams', 'student', 'mock_exams.id + mock_exam_subjects.id', ARRAY['event', 'correction', 'tombstone']::text[], ARRAY['mock_exam_subject_result_reported']::text[], '{"mock_exam_subject_result_reported":"student_self_report"}'::jsonb, 'student_self_report', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'net_score', 'duration_minutes']::text[], ARRAY['exam_name', 'exam_scope']::text[], 'curriculum', 'adaptMockExamSubject', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'branch_exams', 'M05', 'emitter', 'learning-evidence@1', 'learning_evidence', 'branch_exams', 'student_or_teacher', 'exams.id', ARRAY['event', 'correction', 'tombstone']::text[], ARRAY['branch_exam_result_reported']::text[], '{"branch_exam_result_reported":"student_self_report"}'::jsonb, 'student_self_report', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'net_score', 'duration_minutes']::text[], ARRAY['exam_name', 'legacy_score_present']::text[], 'curriculum', 'adaptBranchExam', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'self_or_authorized_teacher', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'homeworks', 'M06', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'homeworks', 'teacher_and_student', 'homeworks.id', ARRAY['event', 'snapshot', 'correction', 'tombstone']::text[], ARRAY['homework_assigned', 'homework_status_reported']::text[], '{"homework_assigned":"system_observation","homework_status_reported":"student_self_report"}'::jsonb, 'student_self_report', ARRAY['completion_status']::text[], ARRAY['due_date_present', 'lesson_session_present']::text[], 'curriculum', 'adaptHomework', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'self_or_authorized_teacher', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'questions_teacher_feedback', 'M07', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'questions', 'student_and_teacher', 'questions.id', ARRAY['event', 'snapshot', 'correction']::text[], ARRAY['question_submitted', 'teacher_feedback_shared']::text[], '{"question_submitted":"exposure","teacher_feedback_shared":"teacher_feedback"}'::jsonb, 'teacher_feedback', ARRAY['help_used', 'student_correct']::text[], ARRAY['status', 'reply_present', 'image_present']::text[], 'curriculum', 'adaptTeacherQuestionFeedback', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'self_or_authorized_teacher', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'ai_coach_chat', 'M08', 'derived_readonly', 'learning-evidence@1', 'derived_view', 'ai_coach', 'model_and_server_tools', 'ai_messages.id', ARRAY['derived']::text[], ARRAY[]::text[], '{}'::jsonb, 'model_inference', ARRAY[]::text[], ARRAY[]::text[], 'curriculum', null, null, null, null, 'server_only', 'authenticated_student', 'read_only', 'opaque_only', 'recomputable_or_ephemeral', 'decided_not_connected', false),
  ('learning-source-registry@1', 'ai_coach_actions', 'M09', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'ai_coach_actions', 'student_confirmed_server_action', 'ai_study_tasks.id or ai_student_memory(student_id,key)', ARRAY['event', 'snapshot', 'correction']::text[], ARRAY['study_task_status_changed', 'study_session_confirmed', 'preference_updated']::text[], '{"preference_updated":"operational_only","study_session_confirmed":"student_self_report","study_task_status_changed":"student_self_report"}'::jsonb, 'student_self_report', ARRAY['completion_status', 'duration_minutes']::text[], ARRAY['plan_group_present', 'memory_key']::text[], 'curriculum', 'adaptCoachAction', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'mixed_by_semantic_type', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'daily_briefing', 'M10', 'derived_readonly', 'learning-evidence@1', 'derived_view', 'ai_coach_briefing', 'deterministic_server_engine', 'none', ARRAY['derived']::text[], ARRAY[]::text[], '{}'::jsonb, 'derived_result', ARRAY[]::text[], ARRAY[]::text[], 'curriculum', null, null, null, null, 'server_only', 'authenticated_student', 'read_only', 'opaque_only', 'recomputable_or_ephemeral', 'decided_not_connected', false),
  ('learning-source-registry@1', 'ai_solution_sessions', 'M11', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'ai_solve', 'student_and_model_service', 'ai_solution_sessions.id + ai_solution_events.id', ARRAY['event', 'snapshot', 'correction']::text[], ARRAY['solution_requested', 'help_requested', 'answer_checked', 'feedback_reported']::text[], '{"answer_checked":"model_inference","feedback_reported":"student_self_report","help_requested":"system_observation","solution_requested":"exposure"}'::jsonb, 'system_observation', ARRAY['help_used', 'student_correct']::text[], ARRAY['event_type', 'topic_matched', 'review_state']::text[], 'curriculum', 'adaptAiSolveEvent', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'ai_solution_review', 'M12', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'ai_solve_history', 'student', 'ai_solution_sessions.id', ARRAY['snapshot', 'correction']::text[], ARRAY['review_state_reported']::text[], '{"review_state_reported":"student_self_report"}'::jsonb, 'student_self_report', ARRAY['completion_status']::text[], ARRAY['review_state', 'storage_scope']::text[], 'curriculum', 'adaptAiSolveReview', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'library_gateway', 'M13', 'catalog', 'learning-evidence@1', 'content_catalog', 'library', 'content_owner', 'content route', ARRAY[]::text[], ARRAY[]::text[], '{}'::jsonb, 'operational_only', ARRAY[]::text[], ARRAY[]::text[], 'curriculum', null, null, 'catalog_identity_only', 'topic-resolver@1', 'server_only', 'authenticated_student', 'read_only', 'opaque_only', 'content_lifecycle', 'decided_not_connected', false),
  ('learning-source-registry@1', 'library_catalog', 'M14', 'catalog', 'learning-evidence@1', 'content_catalog', 'library_content', 'teacher_or_repository', 'library_topics.id or bundled slug', ARRAY[]::text[], ARRAY[]::text[], '{}'::jsonb, 'operational_only', ARRAY[]::text[], ARRAY[]::text[], 'curriculum', null, null, 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'content_versioned', 'opaque_only', 'content_lifecycle', 'decided_not_connected', false),
  ('learning-source-registry@1', 'structured_lesson_activity', 'M15', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'structured_lessons', 'student_runtime', 'lesson_activity_events.id', ARRAY['event', 'correction', 'tombstone']::text[], ARRAY['lesson_opened', 'quiz_answered', 'osym_simulation_answered', 'lesson_completed', 'audio_started', 'audio_completed', 'visual_audio_clicked']::text[], '{"audio_completed":"exposure","audio_started":"exposure","lesson_completed":"system_observation","lesson_opened":"exposure","osym_simulation_answered":"direct_measurement","quiz_answered":"direct_measurement","visual_audio_clicked":"exposure"}'::jsonb, 'system_observation', ARRAY['student_correct', 'completion_status', 'duration_minutes']::text[], ARRAY['lesson_kind', 'block_id', 'section_id', 'event_type']::text[], 'curriculum', 'adaptStructuredLessonEvent', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'bundled_lesson_activity', 'M16', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'bundled_lessons', 'student_runtime', 'bundled lesson slug + content revision + block id', ARRAY['event', 'correction', 'tombstone']::text[], ARRAY['lesson_opened', 'quiz_answered', 'lesson_completed']::text[], '{"lesson_completed":"system_observation","lesson_opened":"exposure","quiz_answered":"direct_measurement"}'::jsonb, 'system_observation', ARRAY['student_correct', 'completion_status', 'duration_minutes']::text[], ARRAY['lesson_slug', 'content_revision', 'block_id', 'section_id']::text[], 'curriculum', 'adaptBundledLessonEvent', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'library_note_exposure', 'M17', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'library_notes', 'student_runtime', 'library_notes.id or bundled path', ARRAY['event']::text[], ARRAY['note_opened']::text[], '{"note_opened":"exposure"}'::jsonb, 'exposure', ARRAY[]::text[], ARRAY['content_kind', 'content_revision']::text[], 'curriculum', 'adaptContentExposure', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'lesson_personalization', 'M18', 'derived_readonly', 'learning-evidence@1', 'derived_view', 'lesson_personalization', 'deterministic_rule_engine', 'lesson_personalizations.id', ARRAY['derived']::text[], ARRAY[]::text[], '{}'::jsonb, 'derived_result', ARRAY[]::text[], ARRAY[]::text[], 'curriculum', null, null, null, null, 'server_only', 'authenticated_student', 'cache_only', 'opaque_only', 'recomputable_or_ephemeral', 'decided_not_connected', false),
  ('learning-source-registry@1', 'db_question_test', 'M19', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'question_library', 'student_runtime', 'question_set id + attempt id + question id', ARRAY['event', 'snapshot', 'correction', 'tombstone']::text[], ARRAY['question_answered', 'test_completed']::text[], '{"question_answered":"direct_measurement","test_completed":"direct_measurement"}'::jsonb, 'direct_measurement', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'student_correct', 'duration_minutes']::text[], ARRAY['question_set_id', 'content_revision', 'attempt_scope']::text[], 'curriculum', 'adaptQuestionTestResult', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'bundled_question_test', 'M20', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'bundled_question_library', 'student_runtime', 'set id + content revision + local attempt id + question id', ARRAY['event', 'snapshot', 'correction', 'tombstone']::text[], ARRAY['question_answered', 'test_completed']::text[], '{"question_answered":"direct_measurement","test_completed":"direct_measurement"}'::jsonb, 'direct_measurement', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'student_correct', 'duration_minutes']::text[], ARRAY['question_set_id', 'content_revision', 'attempt_scope']::text[], 'curriculum', 'adaptQuestionTestResult', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'physics_atlas', 'M21', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'physics_atlas', 'device_local_student_runtime', 'region/experiment/task code + local revision', ARRAY['snapshot', 'correction', 'tombstone']::text[], ARRAY['atlas_task_state', 'concept_check_state']::text[], '{"atlas_task_state":"system_observation","concept_check_state":"system_observation"}'::jsonb, 'system_observation', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'completion_status']::text[], ARRAY['atlas', 'region_code', 'task_code', 'storage_version', 'timed']::text[], 'atlas', 'adaptAtlasSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_after_account_binding', 'authenticated_student', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'biology_atlas', 'M22', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'biology_atlas', 'device_local_student_runtime', 'interaction/question code + local revision', ARRAY['snapshot', 'correction', 'tombstone']::text[], ARRAY['atlas_task_state', 'concept_check_state']::text[], '{"atlas_task_state":"system_observation","concept_check_state":"system_observation"}'::jsonb, 'system_observation', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'completion_status']::text[], ARRAY['atlas', 'region_code', 'task_code', 'storage_version', 'timed']::text[], 'atlas', 'adaptAtlasSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_after_account_binding', 'authenticated_student', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'geography_atlas', 'M23', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'geography_atlas', 'device_local_student_runtime', 'task/question id + local revision', ARRAY['event', 'snapshot', 'correction', 'tombstone']::text[], ARRAY['atlas_task_state', 'concept_check_state', 'timed_test_completed']::text[], '{"atlas_task_state":"system_observation","concept_check_state":"system_observation","timed_test_completed":"direct_measurement"}'::jsonb, 'system_observation', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes', 'completion_status']::text[], ARRAY['atlas', 'region_code', 'task_code', 'storage_version', 'timed']::text[], 'atlas', 'adaptAtlasSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_after_account_binding', 'authenticated_student', 'mixed_by_semantic_type', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'chemistry_atlas', 'M24', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'chemistry_atlas', 'student_runtime', 'content revision + question position + local attempt id', ARRAY['event', 'snapshot']::text[], ARRAY['concept_check_answered', 'mini_test_completed']::text[], '{"concept_check_answered":"direct_measurement","mini_test_completed":"direct_measurement"}'::jsonb, 'direct_measurement', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'student_correct']::text[], ARRAY['atlas', 'region_code', 'task_code', 'storage_version', 'timed']::text[], 'atlas', 'adaptAtlasSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'history_atlas_navigation', 'M25', 'excluded', 'learning-evidence@1', 'excluded_content', 'history_atlas', 'content_runtime', 'none', ARRAY[]::text[], ARRAY[]::text[], '{}'::jsonb, 'operational_only', ARRAY[]::text[], ARRAY[]::text[], 'non_learning', null, null, null, null, 'server_only', 'authenticated_student', 'excluded', 'opaque_only', 'not_copied_to_learning_evidence', 'decided_not_connected', false),
  ('learning-source-registry@1', 'geometry_pilot', 'M26', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'geometry_pilot', 'student_runtime', 'content revision + local attempt id + question id', ARRAY['event', 'snapshot']::text[], ARRAY['question_answered', 'test_completed']::text[], '{"question_answered":"direct_measurement","test_completed":"direct_measurement"}'::jsonb, 'direct_measurement', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'student_correct']::text[], ARRAY['content_revision', 'attempt_scope']::text[], 'curriculum', 'adaptQuestionTestResult', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'ingilizce_learning', 'M27', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'ingilizce_module', 'device_local_student_runtime', 'lesson/word/exercise id + local revision', ARRAY['event', 'snapshot', 'correction', 'tombstone']::text[], ARRAY['placement_snapshot', 'lesson_result_snapshot', 'review_result_snapshot', 'skill_snapshot', 'self_report_snapshot']::text[], '{"lesson_result_snapshot":"system_observation","placement_snapshot":"system_observation","review_result_snapshot":"system_observation","self_report_snapshot":"student_self_report","skill_snapshot":"system_observation"}'::jsonb, 'system_observation', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes', 'completion_status']::text[], ARRAY['language', 'cefr_level', 'lesson_id', 'skill', 'storage_version', 'snapshot_section']::text[], 'language', 'adaptLanguageSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_after_account_binding', 'authenticated_student', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'almanca_learning', 'M28', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'almanca_module', 'device_local_student_runtime', 'lesson/word/exercise id + local revision', ARRAY['event', 'snapshot', 'correction', 'tombstone']::text[], ARRAY['placement_snapshot', 'lesson_result_snapshot', 'review_result_snapshot', 'skill_snapshot', 'self_report_snapshot']::text[], '{"lesson_result_snapshot":"system_observation","placement_snapshot":"system_observation","review_result_snapshot":"system_observation","self_report_snapshot":"student_self_report","skill_snapshot":"system_observation"}'::jsonb, 'system_observation', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes', 'completion_status']::text[], ARRAY['language', 'cefr_level', 'lesson_id', 'skill', 'storage_version', 'snapshot_section']::text[], 'language', 'adaptLanguageSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_after_account_binding', 'authenticated_student', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'fransizca_learning', 'M29', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'fransizca_module', 'device_local_student_runtime', 'lesson/word/exercise id + local revision', ARRAY['event', 'snapshot', 'correction', 'tombstone']::text[], ARRAY['placement_snapshot', 'lesson_result_snapshot', 'review_result_snapshot', 'skill_snapshot', 'self_report_snapshot']::text[], '{"lesson_result_snapshot":"system_observation","placement_snapshot":"system_observation","review_result_snapshot":"system_observation","self_report_snapshot":"student_self_report","skill_snapshot":"system_observation"}'::jsonb, 'system_observation', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes', 'completion_status']::text[], ARRAY['language', 'cefr_level', 'lesson_id', 'skill', 'storage_version', 'snapshot_section']::text[], 'language', 'adaptLanguageSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_after_account_binding', 'authenticated_student', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'ispanyolca_learning', 'M30', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'ispanyolca_module', 'device_local_student_runtime', 'lesson/word/exercise id + local revision', ARRAY['event', 'snapshot', 'correction', 'tombstone']::text[], ARRAY['placement_snapshot', 'lesson_result_snapshot', 'review_result_snapshot', 'skill_snapshot', 'self_report_snapshot']::text[], '{"lesson_result_snapshot":"system_observation","placement_snapshot":"system_observation","review_result_snapshot":"system_observation","self_report_snapshot":"student_self_report","skill_snapshot":"system_observation"}'::jsonb, 'system_observation', ARRAY['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes', 'completion_status']::text[], ARRAY['language', 'cefr_level', 'lesson_id', 'skill', 'storage_version', 'snapshot_section']::text[], 'language', 'adaptLanguageSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_after_account_binding', 'authenticated_student', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'live_lesson_attendance', 'M31', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'live_lessons', 'lesson_membership_server', 'lesson_session + participant', ARRAY['event', 'snapshot', 'correction']::text[], ARRAY['lesson_attendance_state']::text[], '{"lesson_attendance_state":"exposure"}'::jsonb, 'exposure', ARRAY['duration_minutes']::text[], ARRAY['session_id', 'attendance_state']::text[], 'curriculum', 'adaptLiveLessonAttendance', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'append_only', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'live_lesson_raw_stream', 'M32', 'excluded', 'learning-evidence@1', 'excluded_content', 'live_lesson_studio', 'lesson_members', 'none', ARRAY[]::text[], ARRAY[]::text[], '{}'::jsonb, 'operational_only', ARRAY[]::text[], ARRAY[]::text[], 'non_learning', null, null, null, null, 'server_only', 'authenticated_student', 'excluded', 'opaque_only', 'not_copied_to_learning_evidence', 'decided_not_connected', false),
  ('learning-source-registry@1', 'live_lesson_shared_summary', 'M33', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'live_lesson_summary', 'authorized_teacher_and_student', 'lesson_summaries.lesson_session_id', ARRAY['snapshot', 'correction', 'tombstone']::text[], ARRAY['teacher_summary_shared', 'student_feedback_reported']::text[], '{"student_feedback_reported":"student_self_report","teacher_summary_shared":"teacher_feedback"}'::jsonb, 'teacher_feedback', ARRAY['completion_status']::text[], ARRAY['session_id', 'shared_with_student', 'feedback_kind']::text[], 'curriculum', 'adaptSharedLessonSummary', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authorized_teacher_or_self', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'notebook_content', 'M34', 'excluded', 'learning-evidence@1', 'excluded_content', 'notebook', 'owner', 'none', ARRAY[]::text[], ARRAY[]::text[], '{}'::jsonb, 'operational_only', ARRAY[]::text[], ARRAY[]::text[], 'non_learning', null, null, null, null, 'server_only', 'authenticated_student', 'excluded', 'opaque_only', 'not_copied_to_learning_evidence', 'decided_not_connected', false),
  ('learning-source-registry@1', 'private_messages', 'M35', 'excluded', 'learning-evidence@1', 'excluded_content', 'messages', 'conversation_parties', 'none', ARRAY[]::text[], ARRAY[]::text[], '{}'::jsonb, 'operational_only', ARRAY[]::text[], ARRAY[]::text[], 'non_learning', null, null, null, null, 'server_only', 'authenticated_student', 'excluded', 'opaque_only', 'not_copied_to_learning_evidence', 'decided_not_connected', false),
  ('learning-source-registry@1', 'student_profile', 'M36', 'conditional_emitter', 'learning-evidence@1', 'conditional_learning_evidence', 'identity_profile', 'authenticated_account', 'profiles.id', ARRAY['snapshot', 'correction']::text[], ARRAY['education_goal_snapshot']::text[], '{"education_goal_snapshot":"student_self_report"}'::jsonb, 'student_self_report', ARRAY[]::text[], ARRAY['target_exam', 'grade_level', 'exam_date_precision']::text[], 'context_only', 'adaptProfileSnapshot', 'learning-source-adapters@1', 'topic-resolver@1', 'topic-resolver@1', 'server_only', 'authenticated_student', 'snapshot_with_audit_event', 'opaque_only', 'academic_policy_pending', 'decided_not_connected', true),
  ('learning-source-registry@1', 'public_demo_routes', 'M37', 'excluded', 'learning-evidence@1', 'excluded_content', 'public_and_preview', 'product_content', 'none', ARRAY[]::text[], ARRAY[]::text[], '{}'::jsonb, 'operational_only', ARRAY[]::text[], ARRAY[]::text[], 'non_learning', null, null, null, null, 'server_only', 'authenticated_student', 'excluded', 'opaque_only', 'not_copied_to_learning_evidence', 'decided_not_connected', false),
  ('learning-source-registry@1', 'teacher_parent_support_routes', 'M38', 'excluded', 'learning-evidence@1', 'excluded_content', 'teacher_parent_surfaces', 'authorized_adult', 'none', ARRAY[]::text[], ARRAY[]::text[], '{}'::jsonb, 'operational_only', ARRAY[]::text[], ARRAY[]::text[], 'non_learning', null, null, null, null, 'server_only', 'authenticated_student', 'excluded', 'opaque_only', 'not_copied_to_learning_evidence', 'decided_not_connected', false)
on conflict ("registry_version", "source_code") do nothing;
-- SOURCE_CONTRACT_ROWS_END

-- --------------------------------------------------------------------------
-- Backfill run kayıtları. Burada ham kaynak satırı veya serbest hata yoktur.
-- --------------------------------------------------------------------------

create table if not exists public.learning_evidence_backfill_runs (
  run_id uuid primary key default pg_catalog.gen_random_uuid(),
  source_registry_version text not null,
  source_code text not null,
  contract_version text not null,
  source_adapter_version text not null,
  topic_resolver_version text not null,
  mode text not null,
  status text not null default 'pending',
  scope_kind text not null default 'all',
  student_id uuid references public.profiles(id) on delete cascade,
  scope_token text,
  cursor_token text,
  batch_size integer not null default 100,
  scanned_count bigint not null default 0,
  adapted_count bigint not null default 0,
  would_insert_count bigint not null default 0,
  inserted_count bigint not null default 0,
  duplicate_count bigint not null default 0,
  conflict_count bigint not null default 0,
  quarantine_count bigint not null default 0,
  error_count bigint not null default 0,
  restart_count integer not null default 0,
  started_at timestamptz,
  finished_at timestamptz,
  cancelled_at timestamptz,
  last_error_code text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_backfill_source_fk foreign key (source_registry_version, source_code)
    references public.learning_source_contracts(registry_version, source_code),
  constraint learning_backfill_mode_check check (mode in ('dry_run', 'apply')),
  constraint learning_backfill_status_check check (status in (
    'pending', 'running', 'paused', 'cancelled', 'completed', 'failed'
  )),
  constraint learning_backfill_scope_check check (
    scope_kind in ('all', 'single_student', 'opaque_partition')
    and (scope_kind <> 'single_student' or student_id is not null)
    and (scope_kind <> 'opaque_partition' or scope_token is not null)
    and (scope_token is null or (
      pg_catalog.char_length(scope_token) between 1 and 256
      and scope_token ~ '^[A-Za-z0-9._:-]+$'
    ))
  ),
  constraint learning_backfill_cursor_check check (
    cursor_token is null or (
      pg_catalog.char_length(cursor_token) between 1 and 512
      and cursor_token ~ '^[A-Za-z0-9._:-]+$'
    )
  ),
  constraint learning_backfill_batch_check check (batch_size between 1 and 1000),
  constraint learning_backfill_counts_check check (
    scanned_count >= 0 and adapted_count >= 0 and would_insert_count >= 0
    and inserted_count >= 0 and duplicate_count >= 0 and conflict_count >= 0
    and quarantine_count >= 0 and error_count >= 0
    and restart_count between 0 and 1000000
  ),
  constraint learning_backfill_error_check check (
    last_error_code is null or last_error_code ~ '^[a-z][a-z0-9_]{1,63}$'
  ),
  constraint learning_backfill_time_check check (
    (finished_at is null or started_at is not null)
    and (cancelled_at is null or status = 'cancelled')
  )
);

create index if not exists learning_backfill_status_cursor_idx
  on public.learning_evidence_backfill_runs (
    status, source_code, updated_at, cursor_token
  );

-- --------------------------------------------------------------------------
-- Append-only ortak kanıt defteri.
-- --------------------------------------------------------------------------

create table if not exists public.learning_evidence_records (
  record_id uuid primary key default pg_catalog.gen_random_uuid(),
  ingestion_sequence bigint generated always as identity,
  contract_version text not null,
  schema_version text not null,
  source_registry_version text not null,
  record_kind text not null,
  student_id uuid not null references public.profiles(id) on delete cascade,
  actor_id uuid references auth.users(id) on delete set null,
  actor_role text not null,
  actor_student_relation text not null,
  source_code text not null,
  source_record_id text not null,
  source_revision text not null,
  source_locator text,
  semantic_event_type text not null,
  activity_type text not null,
  client_action_id uuid,
  occurred_at timestamptz,
  occurred_on date,
  occurred_at_precision text not null,
  as_of timestamptz,
  recorded_at timestamptz not null default pg_catalog.clock_timestamp(),
  education_context_id text,
  subject_id text,
  topic_id text,
  objective_id text,
  identity_resolution jsonb,
  curriculum_identity_version text,
  curriculum_ledger_version text,
  curriculum_aliases_version text,
  evidence_class text not null,
  evidence_strength text not null,
  trust_level text not null,
  provenance text not null,
  source_availability text not null,
  measurement jsonb not null default '{}'::jsonb,
  relations jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  source_adapter_version text not null,
  topic_resolver_version text not null,
  dedupe_key text not null,
  semantic_fingerprint text not null,
  target_record_id uuid,
  correction_reason text,
  tombstone_reason text,
  derivation jsonb,
  retention_class text not null,
  record_origin text not null default 'live',
  backfill_run_id uuid references public.learning_evidence_backfill_runs(run_id) on delete set null,
  constraint learning_evidence_ingestion_sequence_uq unique (ingestion_sequence),
  constraint learning_evidence_record_student_uq unique (record_id, student_id),
  constraint learning_evidence_source_fk foreign key (source_registry_version, source_code)
    references public.learning_source_contracts(registry_version, source_code),
  constraint learning_evidence_target_student_fk foreign key (target_record_id, student_id)
    references public.learning_evidence_records(record_id, student_id),
  constraint learning_evidence_contract_check
    check (contract_version = 'learning-evidence@1' and schema_version = '1.0'),
  constraint learning_evidence_kind_check
    check (record_kind in ('event', 'snapshot', 'correction', 'tombstone', 'derived')),
  constraint learning_evidence_actor_check check (
    actor_role in ('student', 'teacher', 'parent', 'system', 'model', 'admin')
    and actor_student_relation ~ '^[a-z][a-z0-9_]{1,63}$'
  ),
  constraint learning_evidence_source_fields_check check (
    source_code ~ '^[a-z0-9][a-z0-9._-]{1,63}$'
    and pg_catalog.char_length(source_record_id) between 1 and 256
    and source_record_id !~ '[[:cntrl:]]'
    and pg_catalog.char_length(source_revision) between 1 and 128
    and source_revision !~ '[[:cntrl:]]'
    and semantic_event_type ~ '^[a-z][a-z0-9_]{1,63}$'
    and activity_type = semantic_event_type
  ),
  constraint learning_evidence_locator_check
    check (learning_private.source_locator_is_valid(source_locator, source_code)),
  constraint learning_evidence_time_check check (
    (occurred_at_precision = 'exact' and occurred_at is not null and occurred_on is null)
    or (occurred_at_precision = 'day' and occurred_at is null and occurred_on is not null)
    or (occurred_at_precision = 'unknown' and occurred_at is null and occurred_on is null)
  ),
  constraint learning_evidence_future_time_check check (
    (occurred_at is null or occurred_at <= recorded_at + interval '5 minutes')
    and (as_of is null or as_of <= recorded_at + interval '5 minutes')
  ),
  constraint learning_evidence_snapshot_check check (
    record_kind <> 'snapshot' or as_of is not null
  ),
  constraint learning_evidence_identity_check check (
    objective_id is null
    and (education_context_id is null or education_context_id ~ '^drkoc:curriculum:context:v[0-9]+:')
    and (subject_id is null or subject_id ~ '^drkoc:curriculum:subject:v[0-9]+:')
    and (topic_id is null or topic_id ~ '^drkoc:(curriculum:topic|language|atlas):[^[:space:]]+$')
    and (identity_resolution is null or (
      pg_catalog.jsonb_typeof(identity_resolution) = 'object'
      and pg_catalog.octet_length(identity_resolution::text) <= 4096
    ))
  ),
  constraint learning_evidence_class_check check (evidence_class in (
    'direct_measurement', 'student_self_report', 'teacher_feedback', 'exposure',
    'system_observation', 'model_inference', 'derived_result', 'operational_only'
  )),
  constraint learning_evidence_strength_check check (
    evidence_strength in ('low', 'medium', 'high')
    and not (evidence_strength = 'high' and trust_level = 'untrusted_client')
  ),
  constraint learning_evidence_trust_check check (
    trust_level in ('untrusted_client', 'account_bound', 'authoritative_source')
  ),
  constraint learning_evidence_provenance_check check (provenance in (
    'client_draft_server_bound', 'authoritative_source', 'backfill_snapshot', 'derived_projection'
  )),
  constraint learning_evidence_availability_check check (source_availability = 'available'),
  constraint learning_evidence_measurement_check
    check (learning_private.measurement_is_valid(measurement, evidence_class)),
  constraint learning_evidence_direct_measurement_check check (
    evidence_class <> 'direct_measurement'
    or record_kind = 'tombstone'
    or learning_private.direct_measurement_has_result(measurement)
  ),
  constraint learning_evidence_relations_check
    check (learning_private.relations_are_valid(relations)),
  constraint learning_evidence_metadata_check
    check (learning_private.metadata_is_safe(metadata)),
  constraint learning_evidence_fingerprint_check
    check (semantic_fingerprint ~ '^[0-9a-f]{64}$'),
  constraint learning_evidence_dedupe_check
    check (pg_catalog.char_length(dedupe_key) between 1 and 2048),
  constraint learning_evidence_kind_target_check check (
    (record_kind in ('event', 'snapshot') and target_record_id is null
      and correction_reason is null and tombstone_reason is null and derivation is null)
    or (record_kind = 'correction' and target_record_id is not null
      and correction_reason in ('source_edited', 'identity_remapped', 'measurement_corrected', 'backfill_corrected')
      and tombstone_reason is null and derivation is null)
    or (record_kind = 'tombstone' and target_record_id is not null
      and tombstone_reason in (
        'source_deleted', 'duplicate', 'student_requested', 'account_deleted',
        'retention_expired', 'source_invalidated', 'privacy_withdrawal'
      ) and correction_reason is null and derivation is null)
    or (record_kind = 'derived' and target_record_id is null
      and correction_reason is null and tombstone_reason is null
      and learning_private.derivation_is_valid(derivation))
  ),
  constraint learning_evidence_origin_check check (
    record_origin in ('live', 'backfill', 'synthetic', 'projection')
    and ((record_origin = 'backfill' and backfill_run_id is not null)
      or (record_origin <> 'backfill' and backfill_run_id is null))
  )
);

comment on table public.learning_evidence_records is
  'Append-only ortak kanıt defteri. UPDATE/DELETE normal rollere kapalı; düzeltme ve silme yeni kayıttır.';
comment on column public.learning_evidence_records.ingestion_sequence is
  'Tekdüze artan alım cursor''u; sequence boşlukları olabilir ve commit sırası varsayılamaz.';

create unique index if not exists learning_evidence_client_idempotency_uq
  on public.learning_evidence_records (student_id, source_code, client_action_id)
  where client_action_id is not null;

create unique index if not exists learning_evidence_source_idempotency_uq
  on public.learning_evidence_records (
    student_id, source_code, source_record_id, source_revision, semantic_event_type
  ) where client_action_id is null;

create index if not exists learning_evidence_student_cursor_idx
  on public.learning_evidence_records (student_id, ingestion_sequence desc);
create index if not exists learning_evidence_student_time_idx
  on public.learning_evidence_records (student_id, recorded_at desc, record_id desc);
create index if not exists learning_evidence_student_topic_time_idx
  on public.learning_evidence_records (student_id, topic_id, recorded_at desc)
  where topic_id is not null;
create index if not exists learning_evidence_student_subject_time_idx
  on public.learning_evidence_records (student_id, subject_id, recorded_at desc)
  where subject_id is not null;
create index if not exists learning_evidence_student_source_time_idx
  on public.learning_evidence_records (student_id, source_code, recorded_at desc);
create index if not exists learning_evidence_source_record_idx
  on public.learning_evidence_records (
    student_id, source_code, source_record_id, source_revision, semantic_event_type
  );
create index if not exists learning_evidence_target_idx
  on public.learning_evidence_records (target_record_id)
  where target_record_id is not null;

-- --------------------------------------------------------------------------
-- Karantina: yalnız güvenli kimlik/opaque referans ve makine neden kodu.
-- Ham istek gövdesi veya öğrenci içeriği burada tutulmaz.
-- --------------------------------------------------------------------------

create table if not exists public.learning_evidence_quarantine (
  quarantine_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_registry_version text not null,
  source_code text not null,
  source_record_id text not null,
  source_revision text not null,
  semantic_event_type text not null,
  source_locator text,
  dedupe_key text not null,
  semantic_fingerprint text not null,
  identity_status text not null,
  reason_code text not null,
  status text not null default 'pending',
  first_seen_at timestamptz not null default pg_catalog.clock_timestamp(),
  last_seen_at timestamptz not null default pg_catalog.clock_timestamp(),
  resolved_at timestamptz,
  resolution_record_id uuid references public.learning_evidence_records(record_id) on delete set null,
  backfill_run_id uuid references public.learning_evidence_backfill_runs(run_id) on delete set null,
  record_origin text not null,
  constraint learning_quarantine_source_fk foreign key (source_registry_version, source_code)
    references public.learning_source_contracts(registry_version, source_code),
  constraint learning_quarantine_dedupe_uq unique (student_id, dedupe_key, reason_code),
  constraint learning_quarantine_identity_check
    check (identity_status in ('ambiguous', 'unmatched')),
  constraint learning_quarantine_reason_check
    check (reason_code ~ '^[A-Z][A-Z0-9_]{2,63}$'),
  constraint learning_quarantine_status_check
    check (status in ('pending', 'reprocessing', 'resolved', 'discarded')),
  constraint learning_quarantine_fingerprint_check
    check (semantic_fingerprint ~ '^[0-9a-f]{64}$'),
  constraint learning_quarantine_locator_check
    check (learning_private.source_locator_is_valid(source_locator, source_code)),
  constraint learning_quarantine_resolution_check check (
    (status = 'resolved' and resolved_at is not null and resolution_record_id is not null)
    or (status <> 'resolved' and resolution_record_id is null)
  ),
  constraint learning_quarantine_origin_check check (
    record_origin in ('live', 'backfill', 'synthetic')
  )
);

create index if not exists learning_quarantine_status_reason_idx
  on public.learning_evidence_quarantine (status, reason_code, first_seen_at);
create index if not exists learning_quarantine_student_source_idx
  on public.learning_evidence_quarantine (student_id, source_code, first_seen_at desc);

-- Kimlik çözülemeyen fakat yapısal olarak güvenli zarf için dar iç yazma yolu.
-- Ham istek, metadata, ölçüm veya öğrenci metni kabul etmez.
create or replace function learning_private.quarantine_evidence(p_entry jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_allowed_keys constant text[] := array[
    'student_id', 'source_registry_version', 'source_code',
    'source_record_id', 'source_revision', 'semantic_event_type',
    'source_locator', 'dedupe_key', 'semantic_fingerprint',
    'identity_status', 'reason_codes', 'record_origin', 'backfill_run_id'
  ]::text[];
  v_student uuid;
  v_backfill_run_id uuid;
  v_contract public.learning_source_contracts%rowtype;
  v_reason text;
  v_quarantine_id uuid;
  v_created_count integer := 0;
  v_expected_dedupe text;
begin
  if p_entry is null or pg_catalog.jsonb_typeof(p_entry) <> 'object'
     or exists (
       select 1 from pg_catalog.jsonb_object_keys(p_entry) as supplied(key)
        where not (supplied.key = any(v_allowed_keys))
     ) then
    return pg_catalog.jsonb_build_object(
      'status', 'validation_rejected', 'code', 'quarantine_envelope_invalid'
    );
  end if;
  if coalesce(p_entry ->> 'student_id', '')
       !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
     or coalesce(p_entry ->> 'semantic_fingerprint', '') !~ '^[0-9a-f]{64}$'
     or coalesce(p_entry ->> 'identity_status', '') <> all(array['ambiguous', 'unmatched']::text[])
     or coalesce(p_entry ->> 'record_origin', '') <> all(array['live', 'backfill', 'synthetic']::text[])
     or pg_catalog.jsonb_typeof(p_entry -> 'reason_codes') <> 'array'
     or pg_catalog.jsonb_array_length(p_entry -> 'reason_codes') not between 1 and 8 then
    return pg_catalog.jsonb_build_object(
      'status', 'validation_rejected', 'code', 'quarantine_envelope_invalid'
    );
  end if;
  v_student := (p_entry ->> 'student_id')::uuid;
  if not exists (
    select 1 from public.profiles as profile
     where profile.id = v_student and profile.role = 'student'
  ) then
    return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'student_not_found');
  end if;
  select contract.* into v_contract
    from public.learning_source_contracts as contract
   where contract.registry_version = p_entry ->> 'source_registry_version'
     and contract.source_code = p_entry ->> 'source_code';
  if not found or not v_contract.ingest_allowed then
    return pg_catalog.jsonb_build_object('status', 'source_not_allowed', 'code', 'source_not_emitter');
  end if;
  if coalesce(p_entry ->> 'source_record_id', '') = ''
     or pg_catalog.char_length(p_entry ->> 'source_record_id') > 256
     or (p_entry ->> 'source_record_id') ~ '[[:cntrl:]]'
     or coalesce(p_entry ->> 'source_revision', '') = ''
     or pg_catalog.char_length(p_entry ->> 'source_revision') > 128
     or (p_entry ->> 'source_revision') ~ '[[:cntrl:]]'
     or not ((p_entry ->> 'semantic_event_type') = any(v_contract.semantic_event_types))
     or not learning_private.source_locator_is_valid(
       p_entry ->> 'source_locator', p_entry ->> 'source_code'
     ) then
    return pg_catalog.jsonb_build_object(
      'status', 'validation_rejected', 'code', 'quarantine_source_invalid'
    );
  end if;
  v_expected_dedupe := 'source:'
    || learning_private.uri_component(v_student::text) || ':'
    || learning_private.uri_component(p_entry ->> 'source_code') || ':'
    || learning_private.uri_component(p_entry ->> 'source_record_id') || ':'
    || learning_private.uri_component(p_entry ->> 'source_revision') || ':'
    || learning_private.uri_component(p_entry ->> 'semantic_event_type');
  if p_entry ->> 'dedupe_key' is distinct from v_expected_dedupe then
    return pg_catalog.jsonb_build_object(
      'status', 'validation_rejected', 'code', 'quarantine_dedupe_invalid'
    );
  end if;
  if p_entry ->> 'record_origin' = 'backfill' then
    if coalesce(p_entry ->> 'backfill_run_id', '')
         !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
      return pg_catalog.jsonb_build_object(
        'status', 'validation_rejected', 'code', 'backfill_context_invalid'
      );
    end if;
    v_backfill_run_id := (p_entry ->> 'backfill_run_id')::uuid;
    if not exists (
      select 1 from public.learning_evidence_backfill_runs as run
       where run.run_id = v_backfill_run_id
         and run.mode = 'apply'
         and run.status = 'running'
         and run.source_registry_version = p_entry ->> 'source_registry_version'
         and run.source_code = p_entry ->> 'source_code'
         and (run.student_id is null or run.student_id = v_student)
    ) then
      return pg_catalog.jsonb_build_object(
        'status', 'dependency_unavailable', 'code', 'backfill_run_not_writable'
      );
    end if;
  elsif p_entry ->> 'backfill_run_id' is not null then
    return pg_catalog.jsonb_build_object(
      'status', 'validation_rejected', 'code', 'backfill_context_invalid'
    );
  end if;

  if exists (
    select 1
      from pg_catalog.jsonb_array_elements_text(p_entry -> 'reason_codes') as reason(value)
     where reason.value !~ '^[A-Z][A-Z0-9_]{2,63}$'
  ) then
    return pg_catalog.jsonb_build_object(
      'status', 'validation_rejected', 'code', 'quarantine_reason_invalid'
    );
  end if;

  -- Aynı doğal anahtarın farklı semantik içerikle yeniden kullanımı, neden
  -- satırlarından herhangi biri yazılmadan önce atomik olarak çatışır.
  select quarantine.quarantine_id
    into v_quarantine_id
    from public.learning_evidence_quarantine as quarantine
   where quarantine.student_id = v_student
     and quarantine.dedupe_key = v_expected_dedupe
     and quarantine.reason_code in (
       select reason.value
         from pg_catalog.jsonb_array_elements_text(p_entry -> 'reason_codes') as reason(value)
     )
     and quarantine.semantic_fingerprint
       is distinct from pg_catalog.lower(p_entry ->> 'semantic_fingerprint')
   order by quarantine.reason_code
   limit 1;
  if v_quarantine_id is not null then
    return pg_catalog.jsonb_build_object(
      'status', 'idempotency_conflict', 'created', false,
      'quarantine_id', v_quarantine_id
    );
  end if;
  v_quarantine_id := null;

  for v_reason in
    select distinct reason.value
      from pg_catalog.jsonb_array_elements_text(p_entry -> 'reason_codes') as reason(value)
     order by reason.value
  loop
    insert into public.learning_evidence_quarantine (
      student_id, source_registry_version, source_code, source_record_id,
      source_revision, semantic_event_type, source_locator, dedupe_key,
      semantic_fingerprint, identity_status, reason_code, backfill_run_id,
      record_origin
    ) values (
      v_student, p_entry ->> 'source_registry_version',
      p_entry ->> 'source_code', p_entry ->> 'source_record_id',
      p_entry ->> 'source_revision', p_entry ->> 'semantic_event_type',
      p_entry ->> 'source_locator', v_expected_dedupe,
      p_entry ->> 'semantic_fingerprint', p_entry ->> 'identity_status',
      v_reason, v_backfill_run_id, p_entry ->> 'record_origin'
    )
    on conflict (student_id, dedupe_key, reason_code) do nothing
    returning quarantine_id into v_quarantine_id;
    if v_quarantine_id is not null then
      v_created_count := v_created_count + 1;
    end if;
  end loop;

  if v_quarantine_id is null then
    select quarantine.quarantine_id
      into v_quarantine_id
      from public.learning_evidence_quarantine as quarantine
     where quarantine.student_id = v_student
       and quarantine.dedupe_key = v_expected_dedupe
     order by quarantine.reason_code
     limit 1;
  end if;
  return pg_catalog.jsonb_build_object(
    'status', 'identity_quarantined',
    'created', v_created_count > 0,
    'quarantine_id', v_quarantine_id,
    'reason_count', pg_catalog.jsonb_array_length(p_entry -> 'reason_codes')
  );
end;
$fn$;

-- --------------------------------------------------------------------------
-- Sürümlü projection nesilleri, cursor, diagnostic satırlar ve işleme
-- durumu. Diagnostic projection ustalık/puan üretmez.
-- --------------------------------------------------------------------------

create table if not exists public.learning_projection_generations (
  generation_id uuid primary key default pg_catalog.gen_random_uuid(),
  projection_name text not null,
  projection_version text not null,
  student_id uuid references public.profiles(id) on delete cascade,
  source_registry_version text not null,
  source_code text,
  source_adapter_version text,
  status text not null default 'building',
  start_ingestion_sequence bigint not null default 0,
  end_ingestion_sequence bigint,
  row_count bigint not null default 0,
  checksum text,
  started_at timestamptz not null default pg_catalog.clock_timestamp(),
  completed_at timestamptz,
  activated_at timestamptz,
  last_error_code text,
  constraint learning_projection_generation_source_fk
    foreign key (source_registry_version, source_code)
    references public.learning_source_contracts(registry_version, source_code),
  constraint learning_projection_generation_source_version_check check (
    (source_code is null and source_adapter_version is null)
    or (source_code is not null and source_adapter_version is not null)
  ),
  constraint learning_projection_generation_name_check check (
    projection_name ~ '^[a-z][a-z0-9._-]{1,63}$'
    and projection_version ~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$'
  ),
  constraint learning_projection_generation_status_check check (
    status in ('building', 'active', 'failed', 'superseded')
  ),
  constraint learning_projection_generation_counts_check check (
    start_ingestion_sequence >= 0
    and (end_ingestion_sequence is null or end_ingestion_sequence >= start_ingestion_sequence)
    and row_count >= 0
  ),
  constraint learning_projection_generation_checksum_check check (
    checksum is null or checksum ~ '^[0-9a-f]{64}$'
  ),
  constraint learning_projection_generation_error_check check (
    last_error_code is null or last_error_code ~ '^[a-z][a-z0-9_]{1,63}$'
  )
);

create unique index if not exists learning_projection_active_generation_uq
  on public.learning_projection_generations (
    projection_name,
    projection_version,
    coalesce(student_id, '00000000-0000-0000-0000-000000000000'::uuid),
    coalesce(source_code, '')
  ) where status = 'active';
create index if not exists learning_projection_generation_status_idx
  on public.learning_projection_generations (projection_name, projection_version, status, started_at desc);

create table if not exists public.learning_projection_cursors (
  cursor_id uuid primary key default pg_catalog.gen_random_uuid(),
  projection_name text not null,
  projection_version text not null,
  student_id uuid references public.profiles(id) on delete cascade,
  source_code text,
  generation_id uuid references public.learning_projection_generations(generation_id) on delete set null,
  last_ingestion_sequence bigint not null default 0,
  claimed_by uuid,
  claim_expires_at timestamptz,
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_projection_cursor_name_check check (
    projection_name ~ '^[a-z][a-z0-9._-]{1,63}$'
    and projection_version ~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$'
  ),
  constraint learning_projection_cursor_seq_check check (last_ingestion_sequence >= 0),
  constraint learning_projection_cursor_claim_check check (
    (claimed_by is null and claim_expires_at is null)
    or (claimed_by is not null and claim_expires_at is not null)
  )
);

create unique index if not exists learning_projection_cursor_scope_uq
  on public.learning_projection_cursors (
    projection_name,
    projection_version,
    coalesce(student_id, '00000000-0000-0000-0000-000000000000'::uuid),
    coalesce(source_code, '')
  );
create index if not exists learning_projection_cursor_claim_idx
  on public.learning_projection_cursors (
    projection_name, projection_version, claim_expires_at, last_ingestion_sequence
  );

create table if not exists public.learning_diagnostic_projection_rows (
  row_id uuid primary key default pg_catalog.gen_random_uuid(),
  generation_id uuid not null references public.learning_projection_generations(generation_id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_code text not null,
  education_context_id text,
  subject_id text,
  topic_id text,
  evidence_class text not null,
  active_record_count bigint not null default 0,
  measured_record_count bigint not null default 0,
  measurement_totals jsonb not null default '{}'::jsonb,
  max_ingestion_sequence bigint not null default 0,
  checksum text not null,
  is_active boolean not null default false,
  consumer_visible boolean not null default false,
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_diagnostic_class_check check (evidence_class in (
    'direct_measurement', 'student_self_report', 'teacher_feedback', 'exposure',
    'system_observation', 'model_inference', 'derived_result', 'operational_only'
  )),
  constraint learning_diagnostic_counts_check check (
    active_record_count >= 0 and measured_record_count >= 0
    and measured_record_count <= active_record_count and max_ingestion_sequence >= 0
  ),
  constraint learning_diagnostic_measurement_totals_check check (
    learning_private.diagnostic_measurement_totals_are_valid(measurement_totals)
  ),
  constraint learning_diagnostic_checksum_check check (checksum ~ '^[0-9a-f]{64}$'),
  constraint learning_diagnostic_visibility_check check (
    not consumer_visible or is_active
  )
);

create unique index if not exists learning_diagnostic_scope_uq
  on public.learning_diagnostic_projection_rows (
    generation_id, student_id, source_code,
    coalesce(education_context_id, ''),
    coalesce(subject_id, ''),
    coalesce(topic_id, ''),
    evidence_class
  );
create index if not exists learning_diagnostic_student_topic_idx
  on public.learning_diagnostic_projection_rows (student_id, topic_id, source_code)
  where topic_id is not null and consumer_visible;

create table if not exists public.learning_evidence_processing (
  cursor_id uuid not null references public.learning_projection_cursors(cursor_id) on delete cascade,
  projection_name text not null,
  projection_version text not null,
  record_id uuid not null references public.learning_evidence_records(record_id) on delete cascade,
  ingestion_sequence bigint not null,
  generation_id uuid references public.learning_projection_generations(generation_id) on delete cascade,
  status text not null default 'pending',
  retry_count integer not null default 0,
  next_retry_at timestamptz,
  claimed_by uuid,
  claim_expires_at timestamptz,
  last_error_code text,
  processed_at timestamptz,
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_processing_pk primary key (cursor_id, record_id),
  constraint learning_processing_name_check check (
    projection_name ~ '^[a-z][a-z0-9._-]{1,63}$'
    and projection_version ~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$'
  ),
  constraint learning_processing_status_check check (
    status in ('pending', 'processing', 'retry', 'succeeded', 'quarantined')
  ),
  constraint learning_processing_retry_check check (retry_count between 0 and 100),
  constraint learning_processing_error_check check (
    last_error_code is null or last_error_code ~ '^[a-z][a-z0-9_]{1,63}$'
  ),
  constraint learning_processing_claim_check check (
    (claimed_by is null and claim_expires_at is null)
    or (claimed_by is not null and claim_expires_at is not null)
  )
);

create index if not exists learning_processing_claim_idx
  on public.learning_evidence_processing (
    projection_name, projection_version, status, next_retry_at, ingestion_sequence
  ) where status in ('pending', 'retry', 'processing');

-- --------------------------------------------------------------------------
-- Kaynak sağlığı: empty, unavailable ve degraded birbirine indirgenmez.
-- --------------------------------------------------------------------------

create table if not exists public.learning_source_health (
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_registry_version text not null,
  source_code text not null,
  capability_version text not null,
  status text not null,
  record_count bigint,
  checked_at timestamptz not null default pg_catalog.clock_timestamp(),
  last_success_at timestamptz,
  stale_after timestamptz,
  last_error_code text,
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_source_health_pk primary key (
    student_id, source_registry_version, source_code, capability_version
  ),
  constraint learning_source_health_source_fk foreign key (source_registry_version, source_code)
    references public.learning_source_contracts(registry_version, source_code),
  constraint learning_source_health_status_check check (
    status in ('available', 'empty', 'unavailable', 'degraded')
  ),
  constraint learning_source_health_count_check check (
    (status = 'empty' and record_count = 0)
    or (status = 'available' and record_count is not null and record_count >= 0)
    or (status = 'unavailable' and record_count is null)
    or (status = 'degraded' and record_count is not null and record_count >= 0)
  ),
  constraint learning_source_health_error_check check (
    (status in ('unavailable', 'degraded')
      and last_error_code is not null
      and last_error_code ~ '^[a-z][a-z0-9_]{1,63}$')
    or (status in ('available', 'empty') and last_error_code is null)
  ),
  constraint learning_source_health_capability_check check (
    capability_version ~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$'
  )
);

create index if not exists learning_source_health_status_idx
  on public.learning_source_health (status, checked_at, source_code);
create index if not exists learning_source_health_student_idx
  on public.learning_source_health (student_id, updated_at desc);

-- --------------------------------------------------------------------------
-- Özel, kaynak-sarmalayıcılarının kullanacağı atomik alım fonksiyonu.
-- Bu fonksiyona authenticated/anon execute verilmez. Kaynak sahipliği gelecek
-- fazdaki source-specific wrapper tarafından doğrulandıktan sonra çağrılır.
-- --------------------------------------------------------------------------

create or replace function learning_private.ingest_evidence(
  p_record jsonb,
  p_semantic_fingerprint text,
  p_origin text default 'live',
  p_backfill_run_id uuid default null
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_allowed_keys constant text[] := array[
    'contract_version', 'schema_version', 'source_registry_version',
    'record_kind', 'student_id', 'actor_id', 'actor_role',
    'actor_student_relation', 'source_code', 'source_record_id',
    'source_revision', 'source_locator', 'semantic_event_type', 'activity_type',
    'client_action_id', 'occurred_at', 'occurred_on', 'occurred_at_precision',
    'as_of', 'education_context_id', 'subject_id', 'topic_id', 'objective_id',
    'identity_resolution', 'curriculum_identity_version',
    'curriculum_ledger_version', 'curriculum_aliases_version',
    'evidence_class', 'evidence_strength', 'trust_level', 'provenance',
    'source_availability', 'measurement', 'relations', 'metadata',
    'source_adapter_version', 'topic_resolver_version', 'target_record_id',
    'correction_reason', 'tombstone_reason', 'derivation'
  ]::text[];
  v_measurement_companions constant text[] := array[
    'accuracy_denominator', 'accuracy_formula', 'accuracy_formula_version', 'accuracy_source',
    'net_formula', 'net_formula_version', 'net_exam_type', 'net_source',
    'duration_source', 'difficulty_source', 'help_source',
    'student_correct_source', 'completion_source'
  ]::text[];
  v_contract public.learning_source_contracts%rowtype;
  v_target public.learning_evidence_records%rowtype;
  v_run public.learning_evidence_backfill_runs%rowtype;
  v_student uuid;
  v_actor uuid;
  v_client_action uuid;
  v_target_id uuid;
  v_record_id uuid := pg_catalog.gen_random_uuid();
  v_inserted_id uuid;
  v_existing public.learning_evidence_records%rowtype;
  v_quarantine_id uuid;
  v_inserted_sequence bigint;
  v_existing_fingerprint text;
  v_recorded_at timestamptz := pg_catalog.clock_timestamp();
  v_occurred_at timestamptz;
  v_occurred_on date;
  v_as_of timestamptz;
  v_kind text;
  v_source_code text;
  v_source_record_id text;
  v_source_revision text;
  v_event text;
  v_registry_version text;
  v_expected_class text;
  v_identity_status text;
  v_quarantine_reason text;
  v_dedupe_key text;
  v_measurement jsonb := '{}'::jsonb;
  v_relations jsonb := '{}'::jsonb;
  v_metadata jsonb := '{}'::jsonb;
  v_cycle boolean := false;
  v_input_count integer;
  v_owned_input_count integer;
begin
  if p_record is null or pg_catalog.jsonb_typeof(p_record) <> 'object' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'record_not_object');
  end if;
  if exists (
    select 1
      from pg_catalog.jsonb_object_keys(p_record) as supplied(key)
     where not (supplied.key = any(v_allowed_keys))
  ) then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'unsupported_field');
  end if;
  if p_semantic_fingerprint is null or p_semantic_fingerprint !~* '^[0-9a-f]{64}$' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'invalid_fingerprint');
  end if;
  if not (p_origin = any(array['live', 'backfill', 'synthetic', 'projection']::text[])) then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'invalid_origin');
  end if;
  if (p_origin = 'backfill' and p_backfill_run_id is null)
     or (p_origin <> 'backfill' and p_backfill_run_id is not null) then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'backfill_context_invalid');
  end if;

  if coalesce(p_record ->> 'contract_version', '') <> 'learning-evidence@1'
     or coalesce(p_record ->> 'schema_version', '') <> '1.0' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'contract_version_invalid');
  end if;

  if coalesce(p_record ->> 'student_id', '') !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
     or coalesce(p_record ->> 'actor_id', '') !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'identity_invalid');
  end if;
  v_student := (p_record ->> 'student_id')::uuid;
  v_actor := (p_record ->> 'actor_id')::uuid;
  if not exists (
    select 1 from public.profiles as profile
     where profile.id = v_student and profile.role = 'student'
  ) then
    return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'student_not_found');
  end if;
  if not exists (select 1 from auth.users as account where account.id = v_actor) then
    return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'actor_not_found');
  end if;
  if p_record ->> 'actor_role' = 'student' and v_actor <> v_student then
    return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'student_actor_mismatch');
  end if;
  if p_record ->> 'actor_role' = 'parent' then
    return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'parent_actor_not_allowed');
  end if;
  if p_record ->> 'actor_role' = 'student'
     and p_record ->> 'actor_student_relation'
       <> all(array['self', 'authenticated_student']::text[]) then
    return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'student_relation_invalid');
  end if;
  if p_record ->> 'actor_role' = 'teacher'
     and p_record ->> 'actor_student_relation' <> 'authorized_teacher' then
    return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'teacher_relation_invalid');
  end if;

  v_registry_version := p_record ->> 'source_registry_version';
  v_source_code := p_record ->> 'source_code';
  v_source_record_id := p_record ->> 'source_record_id';
  v_source_revision := p_record ->> 'source_revision';
  v_kind := p_record ->> 'record_kind';
  v_event := p_record ->> 'semantic_event_type';

  if v_registry_version is null or v_source_code is null
     or v_source_record_id is null or v_source_revision is null
     or v_kind is null or v_event is null then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'required_field_missing');
  end if;
  select contract.* into v_contract
    from public.learning_source_contracts as contract
   where contract.registry_version = v_registry_version
     and contract.source_code = v_source_code;
  if not found then
    return pg_catalog.jsonb_build_object('status', 'source_not_allowed', 'code', 'source_unknown');
  end if;
  if p_record ->> 'contract_version' <> v_contract.contract_version then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'source_contract_mismatch');
  end if;
  if not v_contract.ingest_allowed
     or v_contract.classification in ('catalog', 'excluded', 'derived_readonly') then
    return pg_catalog.jsonb_build_object('status', 'source_not_allowed', 'code', 'source_not_emitter');
  end if;
  if v_kind = 'derived' or p_origin = 'projection' then
    return pg_catalog.jsonb_build_object('status', 'source_not_allowed', 'code', 'derived_kind_not_allowed');
  end if;
  if not (v_kind = any(v_contract.record_kinds)) then
    return pg_catalog.jsonb_build_object('status', 'source_not_allowed', 'code', 'record_kind_not_allowed');
  end if;
  if pg_catalog.cardinality(v_contract.semantic_event_types) > 0
     and not (v_event = any(v_contract.semantic_event_types)) then
    return pg_catalog.jsonb_build_object('status', 'source_not_allowed', 'code', 'event_not_allowed');
  end if;

  v_expected_class := coalesce(
    v_contract.evidence_class_by_event ->> v_event,
    v_contract.default_evidence_class
  );
  if p_record ->> 'evidence_class' is distinct from v_expected_class then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'evidence_class_mismatch');
  end if;
  if v_contract.adapter_version is not null
     and p_record ->> 'source_adapter_version' is distinct from v_contract.adapter_version then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'adapter_version_mismatch');
  end if;
  if v_contract.resolver_version is not null
     and p_record ->> 'topic_resolver_version' is distinct from v_contract.resolver_version then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'resolver_version_mismatch');
  end if;
  if coalesce(p_record ->> 'source_adapter_version', '') = ''
     or coalesce(p_record ->> 'topic_resolver_version', '') = '' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'persistence_version_missing');
  end if;

  if coalesce(p_record ->> 'activity_type', '') <> v_event
     or coalesce(p_record ->> 'actor_role', '')
       <> all(array['student', 'teacher', 'system', 'model', 'admin']::text[])
     or coalesce(p_record ->> 'actor_student_relation', '')
       !~ '^[a-z][a-z0-9_]{1,63}$'
     or coalesce(p_record ->> 'evidence_strength', '')
       <> all(array['low', 'medium', 'high']::text[])
     or coalesce(p_record ->> 'trust_level', '')
       <> all(array['untrusted_client', 'account_bound', 'authoritative_source']::text[])
     or coalesce(p_record ->> 'provenance', '')
       <> all(array['client_draft_server_bound', 'authoritative_source', 'backfill_snapshot', 'derived_projection']::text[])
     or p_record ->> 'source_availability' is distinct from 'available' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'trusted_field_invalid');
  end if;
  if p_record ->> 'evidence_strength' = 'high'
     and p_record ->> 'trust_level' = 'untrusted_client' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'trust_strength_invalid');
  end if;

  if pg_catalog.char_length(v_source_record_id) not between 1 and 256
     or v_source_record_id ~ '[[:cntrl:]]'
     or pg_catalog.char_length(v_source_revision) not between 1 and 128
     or v_source_revision ~ '[[:cntrl:]]'
     or v_event !~ '^[a-z][a-z0-9_]{1,63}$'
     or not learning_private.source_locator_is_valid(p_record ->> 'source_locator', v_source_code) then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'source_field_invalid');
  end if;

  if p_record ? 'client_action_id' and p_record -> 'client_action_id' <> 'null'::jsonb then
    if (p_record ->> 'client_action_id') !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'client_action_invalid');
    end if;
    v_client_action := (p_record ->> 'client_action_id')::uuid;
  else
    if v_source_record_id ~ '^\d{4}-\d{2}-\d{2}T'
       or v_source_record_id ~* '^[a-f0-9]{32,128}$' then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'source_dedupe_invalid');
    end if;
  end if;

  v_measurement := coalesce(p_record -> 'measurement', '{}'::jsonb);
  v_relations := coalesce(p_record -> 'relations', '{}'::jsonb);
  v_metadata := coalesce(p_record -> 'metadata', '{}'::jsonb);
  if not learning_private.measurement_is_valid(v_measurement, v_expected_class)
     or not learning_private.jsonb_keys_allowed(
       v_measurement,
       v_contract.allowed_measurements || v_measurement_companions
     ) then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'measurement_invalid');
  end if;
  if not learning_private.relations_are_valid(v_relations) then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'relations_invalid');
  end if;
  if not learning_private.metadata_is_safe(v_metadata)
     or not learning_private.jsonb_keys_allowed(v_metadata, v_contract.allowed_metadata) then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'metadata_invalid');
  end if;
  if v_expected_class = 'direct_measurement' and v_kind <> 'tombstone'
     and not learning_private.direct_measurement_has_result(v_measurement) then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'direct_measurement_missing');
  end if;

  if p_record ->> 'occurred_at_precision' = 'exact' then
    v_occurred_at := learning_private.safe_timestamptz(p_record ->> 'occurred_at');
    if v_occurred_at is null or p_record ->> 'occurred_on' is not null then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'event_time_invalid');
    end if;
  elsif p_record ->> 'occurred_at_precision' = 'day' then
    v_occurred_on := learning_private.safe_date(p_record ->> 'occurred_on');
    if v_occurred_on is null or p_record ->> 'occurred_at' is not null then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'event_time_invalid');
    end if;
  elsif p_record ->> 'occurred_at_precision' = 'unknown' then
    if p_record ->> 'occurred_at' is not null or p_record ->> 'occurred_on' is not null then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'event_time_invalid');
    end if;
  else
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'event_time_invalid');
  end if;
  if v_occurred_at is not null and v_occurred_at > v_recorded_at + interval '5 minutes' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'event_time_future');
  end if;
  if v_occurred_on is not null
     and v_occurred_on > ((v_recorded_at + interval '5 minutes') at time zone 'Europe/Istanbul')::date then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'event_day_future');
  end if;
  if p_record ->> 'as_of' is not null then
    v_as_of := learning_private.safe_timestamptz(p_record ->> 'as_of');
    if v_as_of is null or v_as_of > v_recorded_at + interval '5 minutes' then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'snapshot_time_invalid');
    end if;
  end if;
  if v_kind = 'snapshot' and v_as_of is null then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'snapshot_as_of_required');
  end if;

  if p_record ->> 'objective_id' is not null then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'objective_unverified');
  end if;
  if p_record ->> 'education_context_id' is not null
     and (p_record ->> 'education_context_id') !~ '^drkoc:curriculum:context:v[0-9]+:' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'context_identity_invalid');
  end if;
  if p_record ->> 'subject_id' is not null
     and (p_record ->> 'subject_id') !~ '^drkoc:curriculum:subject:v[0-9]+:' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'subject_identity_invalid');
  end if;
  if p_record ->> 'topic_id' is not null
     and (p_record ->> 'topic_id') !~ '^drkoc:(curriculum:topic|language|atlas):[^[:space:]]+$' then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'topic_identity_invalid');
  end if;
  if p_record -> 'identity_resolution' is not null
     and p_record -> 'identity_resolution' <> 'null'::jsonb then
    if pg_catalog.jsonb_typeof(p_record -> 'identity_resolution') <> 'object'
       or pg_catalog.octet_length((p_record -> 'identity_resolution')::text) > 4096 then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'identity_resolution_invalid');
    end if;
    v_identity_status := p_record #>> '{identity_resolution,status}';
    if p_record #>> '{identity_resolution,educationContextId}' is not null
       and p_record ->> 'education_context_id'
         is distinct from p_record #>> '{identity_resolution,educationContextId}' then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'identity_context_mismatch');
    end if;
    if p_record #>> '{identity_resolution,subjectId}' is not null
       and p_record ->> 'subject_id'
         is distinct from p_record #>> '{identity_resolution,subjectId}' then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'identity_subject_mismatch');
    end if;
    if v_identity_status not in ('ambiguous', 'unmatched')
       and p_record #>> '{identity_resolution,canonicalId}' is not null
       and p_record ->> 'topic_id'
         is distinct from p_record #>> '{identity_resolution,canonicalId}' then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'identity_topic_mismatch');
    end if;
  elsif p_record ->> 'education_context_id' is not null
     or p_record ->> 'subject_id' is not null
     or p_record ->> 'topic_id' is not null then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'identity_resolution_required');
  end if;

  if v_client_action is not null then
    v_dedupe_key := 'client:'
      || learning_private.uri_component(v_student::text) || ':'
      || learning_private.uri_component(v_source_code) || ':'
      || learning_private.uri_component(v_client_action::text);
  else
    v_dedupe_key := 'source:'
      || learning_private.uri_component(v_student::text) || ':'
      || learning_private.uri_component(v_source_code) || ':'
      || learning_private.uri_component(v_source_record_id) || ':'
      || learning_private.uri_component(v_source_revision) || ':'
      || learning_private.uri_component(v_event);
  end if;

  if p_origin = 'backfill' then
    select run.* into v_run
      from public.learning_evidence_backfill_runs as run
     where run.run_id = p_backfill_run_id
     for share;
    if not found or v_run.mode <> 'apply' or v_run.status <> 'running'
       or v_run.source_registry_version <> v_registry_version
       or v_run.source_code <> v_source_code
       or (v_run.student_id is not null and v_run.student_id <> v_student) then
      return pg_catalog.jsonb_build_object('status', 'dependency_unavailable', 'code', 'backfill_run_not_writable');
    end if;
  end if;

  if v_kind in ('correction', 'tombstone') then
    if coalesce(p_record ->> 'target_record_id', '')
         !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'target_invalid');
    end if;
    v_target_id := (p_record ->> 'target_record_id')::uuid;
    if v_target_id = v_record_id then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'target_self');
    end if;
    select target.* into v_target
      from public.learning_evidence_records as target
     where target.record_id = v_target_id
     for share;
    if not found then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'target_not_found');
    end if;
    if v_target.student_id <> v_student then
      return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'target_student_mismatch');
    end if;
    if v_target.source_code <> v_source_code
       or v_target.source_record_id <> v_source_record_id
       or v_target.semantic_event_type <> v_event
       or v_target.record_kind = 'tombstone' then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'target_family_mismatch');
    end if;
    if v_kind = 'correction'
       and not ((p_record ->> 'correction_reason') = any(array[
         'source_edited', 'identity_remapped', 'measurement_corrected', 'backfill_corrected'
       ]::text[])) then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'correction_reason_invalid');
    end if;
    if v_kind = 'tombstone'
       and not ((p_record ->> 'tombstone_reason') = any(array[
         'source_deleted', 'duplicate', 'student_requested', 'account_deleted',
         'retention_expired', 'source_invalidated', 'privacy_withdrawal'
       ]::text[])) then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'tombstone_reason_invalid');
    end if;
    with recursive target_chain(record_id, target_record_id, path, cycle) as (
      select chain.record_id, chain.target_record_id, array[chain.record_id], false
        from public.learning_evidence_records as chain
       where chain.record_id = v_target_id
      union all
      select parent.record_id, parent.target_record_id,
             target_chain.path || parent.record_id,
             parent.record_id = any(target_chain.path)
        from public.learning_evidence_records as parent
        join target_chain on parent.record_id = target_chain.target_record_id
       where not target_chain.cycle
    )
    select coalesce(pg_catalog.bool_or(target_chain.cycle), false)
      into v_cycle
      from target_chain;
    if v_cycle then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'target_cycle');
    end if;
  elsif p_record ->> 'target_record_id' is not null
     or p_record ->> 'correction_reason' is not null
     or p_record ->> 'tombstone_reason' is not null then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'target_not_allowed');
  end if;

  if v_kind = 'derived' then
    if not learning_private.derivation_is_valid(p_record -> 'derivation') then
      return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'derivation_invalid');
    end if;
    select pg_catalog.jsonb_array_length(p_record #> '{derivation,input_record_ids}')
      into v_input_count;
    select pg_catalog.count(*)::integer
      into v_owned_input_count
      from public.learning_evidence_records as input_record
     where input_record.student_id = v_student
       and input_record.record_id in (
         select (item.value #>> '{}')::uuid
           from pg_catalog.jsonb_array_elements(
             p_record #> '{derivation,input_record_ids}'
           ) as item(value)
       );
    if v_owned_input_count <> v_input_count then
      return pg_catalog.jsonb_build_object('status', 'unauthorized', 'code', 'derivation_input_not_owned');
    end if;
  elsif p_record -> 'derivation' is not null
     and p_record -> 'derivation' <> 'null'::jsonb then
    return pg_catalog.jsonb_build_object('status', 'validation_rejected', 'code', 'derivation_not_allowed');
  end if;

  if v_identity_status in ('ambiguous', 'unmatched')
     or (v_metadata ? 'topic_matched' and v_metadata ->> 'topic_matched' = 'false') then
    v_identity_status := case
      when v_identity_status = 'ambiguous' then 'ambiguous'
      else 'unmatched'
    end;
    v_quarantine_reason := case
      when v_identity_status = 'ambiguous' then 'AMBIGUOUS_TOPIC_IDENTITY'
      when v_metadata ? 'topic_matched' and v_metadata ->> 'topic_matched' = 'false' then 'TOPIC_MATCH_REJECTED'
      else 'TOPIC_NOT_FOUND'
    end;
    insert into public.learning_evidence_quarantine (
      student_id, source_registry_version, source_code, source_record_id,
      source_revision, semantic_event_type, source_locator, dedupe_key,
      semantic_fingerprint, identity_status, reason_code, backfill_run_id,
      record_origin
    ) values (
      v_student, v_registry_version, v_source_code, v_source_record_id,
      v_source_revision, v_event, p_record ->> 'source_locator', v_dedupe_key,
      pg_catalog.lower(p_semantic_fingerprint), v_identity_status,
      v_quarantine_reason, p_backfill_run_id, p_origin
    )
    on conflict (student_id, dedupe_key, reason_code) do nothing
    returning quarantine_id into v_quarantine_id;

    if v_quarantine_id is null then
      select quarantine.quarantine_id, quarantine.semantic_fingerprint
        into v_quarantine_id, v_existing_fingerprint
        from public.learning_evidence_quarantine as quarantine
       where quarantine.student_id = v_student
         and quarantine.dedupe_key = v_dedupe_key
         and quarantine.reason_code = v_quarantine_reason;
      if v_existing_fingerprint is distinct from pg_catalog.lower(p_semantic_fingerprint) then
        return pg_catalog.jsonb_build_object(
          'status', 'idempotency_conflict', 'created', false,
          'quarantine_id', v_quarantine_id
        );
      end if;
    end if;
    return pg_catalog.jsonb_build_object(
      'status', 'identity_quarantined', 'created', v_existing_fingerprint is null,
      'quarantine_id', v_quarantine_id, 'reason_code', v_quarantine_reason
    );
  end if;

  insert into public.learning_evidence_records (
    record_id, contract_version, schema_version, source_registry_version,
    record_kind, student_id, actor_id, actor_role, actor_student_relation,
    source_code, source_record_id, source_revision, source_locator,
    semantic_event_type, activity_type, client_action_id, occurred_at,
    occurred_on, occurred_at_precision, as_of, recorded_at,
    education_context_id, subject_id, topic_id, objective_id,
    identity_resolution, curriculum_identity_version, curriculum_ledger_version,
    curriculum_aliases_version, evidence_class, evidence_strength, trust_level,
    provenance, source_availability, measurement, relations, metadata,
    source_adapter_version, topic_resolver_version, dedupe_key,
    semantic_fingerprint, target_record_id, correction_reason,
    tombstone_reason, derivation, retention_class, record_origin,
    backfill_run_id
  ) values (
    v_record_id, 'learning-evidence@1', '1.0', v_registry_version,
    v_kind, v_student, v_actor, p_record ->> 'actor_role',
    p_record ->> 'actor_student_relation', v_source_code, v_source_record_id,
    v_source_revision, p_record ->> 'source_locator', v_event, v_event,
    v_client_action, v_occurred_at, v_occurred_on,
    p_record ->> 'occurred_at_precision', v_as_of, v_recorded_at,
    p_record ->> 'education_context_id', p_record ->> 'subject_id',
    p_record ->> 'topic_id', null, p_record -> 'identity_resolution',
    p_record ->> 'curriculum_identity_version',
    p_record ->> 'curriculum_ledger_version',
    p_record ->> 'curriculum_aliases_version', v_expected_class,
    p_record ->> 'evidence_strength', p_record ->> 'trust_level',
    p_record ->> 'provenance', 'available', v_measurement, v_relations,
    v_metadata, p_record ->> 'source_adapter_version',
    p_record ->> 'topic_resolver_version', v_dedupe_key,
    pg_catalog.lower(p_semantic_fingerprint), v_target_id,
    p_record ->> 'correction_reason', p_record ->> 'tombstone_reason',
    p_record -> 'derivation', v_contract.retention_class, p_origin,
    p_backfill_run_id
  )
  on conflict do nothing
  returning record_id, ingestion_sequence
    into v_inserted_id, v_inserted_sequence;

  if v_inserted_id is not null then
    return pg_catalog.jsonb_build_object(
      'status', 'created', 'created', true,
      'record_id', v_inserted_id,
      'ingestion_sequence', v_inserted_sequence
    );
  end if;

  if v_client_action is not null then
    select existing.*
      into v_existing
      from public.learning_evidence_records as existing
     where existing.student_id = v_student
       and existing.source_code = v_source_code
       and existing.client_action_id = v_client_action;
  else
    select existing.*
      into v_existing
      from public.learning_evidence_records as existing
     where existing.student_id = v_student
       and existing.source_code = v_source_code
       and existing.source_record_id = v_source_record_id
       and existing.source_revision = v_source_revision
       and existing.semantic_event_type = v_event
       and existing.client_action_id is null;
  end if;

  if not found then
    return pg_catalog.jsonb_build_object('status', 'internal_failure', 'code', 'conflict_row_missing');
  end if;
  -- Fingerprint hızlı karşılaştırmadır; hash tek güvenlik dayanağı değildir.
  -- Aynı doğal anahtarın bütün kalıcı semantik alanları da birebir eşleşmelidir.
  if v_existing.semantic_fingerprint is distinct from pg_catalog.lower(p_semantic_fingerprint)
     or v_existing.contract_version is distinct from 'learning-evidence@1'
     or v_existing.schema_version is distinct from '1.0'
     or v_existing.source_registry_version is distinct from v_registry_version
     or v_existing.record_kind is distinct from v_kind
     or v_existing.student_id is distinct from v_student
     or v_existing.actor_id is distinct from v_actor
     or v_existing.actor_role is distinct from p_record ->> 'actor_role'
     or v_existing.actor_student_relation is distinct from p_record ->> 'actor_student_relation'
     or v_existing.source_code is distinct from v_source_code
     or v_existing.source_record_id is distinct from v_source_record_id
     or v_existing.source_revision is distinct from v_source_revision
     or v_existing.source_locator is distinct from p_record ->> 'source_locator'
     or v_existing.semantic_event_type is distinct from v_event
     or v_existing.activity_type is distinct from v_event
     or v_existing.client_action_id is distinct from v_client_action
     or v_existing.occurred_at is distinct from v_occurred_at
     or v_existing.occurred_on is distinct from v_occurred_on
     or v_existing.occurred_at_precision is distinct from p_record ->> 'occurred_at_precision'
     or v_existing.as_of is distinct from v_as_of
     or v_existing.education_context_id is distinct from p_record ->> 'education_context_id'
     or v_existing.subject_id is distinct from p_record ->> 'subject_id'
     or v_existing.topic_id is distinct from p_record ->> 'topic_id'
     or v_existing.objective_id is not null
     or v_existing.identity_resolution is distinct from p_record -> 'identity_resolution'
     or v_existing.curriculum_identity_version is distinct from p_record ->> 'curriculum_identity_version'
     or v_existing.curriculum_ledger_version is distinct from p_record ->> 'curriculum_ledger_version'
     or v_existing.curriculum_aliases_version is distinct from p_record ->> 'curriculum_aliases_version'
     or v_existing.evidence_class is distinct from v_expected_class
     or v_existing.evidence_strength is distinct from p_record ->> 'evidence_strength'
     or v_existing.trust_level is distinct from p_record ->> 'trust_level'
     or v_existing.provenance is distinct from p_record ->> 'provenance'
     or v_existing.source_availability is distinct from 'available'
     or v_existing.measurement is distinct from v_measurement
     or v_existing.relations is distinct from v_relations
     or v_existing.metadata is distinct from v_metadata
     or v_existing.source_adapter_version is distinct from p_record ->> 'source_adapter_version'
     or v_existing.topic_resolver_version is distinct from p_record ->> 'topic_resolver_version'
     or v_existing.target_record_id is distinct from v_target_id
     or v_existing.correction_reason is distinct from p_record ->> 'correction_reason'
     or v_existing.tombstone_reason is distinct from p_record ->> 'tombstone_reason'
     or v_existing.derivation is distinct from p_record -> 'derivation'
     or v_existing.retention_class is distinct from v_contract.retention_class then
    return pg_catalog.jsonb_build_object(
      'status', 'idempotency_conflict', 'created', false,
      'record_id', v_existing.record_id
    );
  end if;
  return pg_catalog.jsonb_build_object(
    'status', 'duplicate', 'created', false, 'record_id', v_existing.record_id
  );
end;
$fn$;

comment on function learning_private.ingest_evidence(jsonb, text, text, uuid) is
  'Yalnız sahiplik doğrulayan kaynak-özel SECURITY DEFINER sarmalayıcıları için atomik iç alım; normal rollere açık değildir.';

-- --------------------------------------------------------------------------
-- Etkin kanıt görünümü. Faz 1 projectEvidenceHistory ile aynı toplam
-- sırayı kullanır: kalıcı kayıtta ingestion_sequence; eski/saf fixture'da
-- recorded_at ve record_id geriye uyumlu fallback'tir. Snapshot ailesinde
-- correction zinciri aynı aileyi devralır; tombstone kendisi etkin olmaz.
-- --------------------------------------------------------------------------

create or replace view public.learning_evidence_effective
with (security_invoker = true, security_barrier = true)
as
with recursive snapshot_lineage (
  record_id, family_student_id, family_source_code, family_source_record_id,
  family_semantic_event_type, path
) as (
  select record.record_id, record.student_id, record.source_code,
         record.source_record_id, record.semantic_event_type,
         array[record.record_id]::uuid[]
    from public.learning_evidence_records as record
   where record.record_kind = 'snapshot'
  union all
  select correction.record_id, lineage.family_student_id,
         lineage.family_source_code, lineage.family_source_record_id,
         lineage.family_semantic_event_type,
         lineage.path || correction.record_id
    from public.learning_evidence_records as correction
    join snapshot_lineage as lineage
      on correction.target_record_id = lineage.record_id
   where correction.record_kind = 'correction'
     and not (correction.record_id = any(lineage.path))
),
snapshot_ranked as (
  select lineage.record_id,
         pg_catalog.row_number() over (
           partition by lineage.family_student_id, lineage.family_source_code,
                        lineage.family_source_record_id,
                        lineage.family_semantic_event_type
           order by record.ingestion_sequence desc
         ) as snapshot_rank
    from snapshot_lineage as lineage
    join public.learning_evidence_records as record
      on record.record_id = lineage.record_id
),
targeted as (
  select modifier.target_record_id
    from public.learning_evidence_records as modifier
   where modifier.record_kind in ('correction', 'tombstone')
     and modifier.target_record_id is not null
),
active_ids as (
  select ranked.record_id
    from snapshot_ranked as ranked
   where ranked.snapshot_rank = 1
     and not exists (
       select 1 from targeted where targeted.target_record_id = ranked.record_id
     )
  union
  select record.record_id
    from public.learning_evidence_records as record
   where record.record_kind <> 'tombstone'
     and not exists (
       select 1 from snapshot_lineage as lineage
        where lineage.record_id = record.record_id
     )
     and not exists (
       select 1 from targeted where targeted.target_record_id = record.record_id
     )
)
select record.*
  from public.learning_evidence_records as record
  join active_ids on active_ids.record_id = record.record_id;

comment on view public.learning_evidence_effective is
  'RLS kullanan etkin kanıt görünümü; snapshot/correction/tombstone semantiğini uygular.';

-- --------------------------------------------------------------------------
-- RLS ve yetkiler. FORCE, testlerin tablo sahibi davranışını yanlış pozitif
-- saymasını engeller. SECURITY DEFINER fonksiyonların sahibi migration rolüdür.
-- --------------------------------------------------------------------------

alter table public.learning_source_contracts enable row level security;
alter table public.learning_source_contracts force row level security;
alter table public.learning_evidence_backfill_runs enable row level security;
alter table public.learning_evidence_backfill_runs force row level security;
alter table public.learning_evidence_records enable row level security;
alter table public.learning_evidence_records force row level security;
alter table public.learning_evidence_quarantine enable row level security;
alter table public.learning_evidence_quarantine force row level security;
alter table public.learning_projection_generations enable row level security;
alter table public.learning_projection_generations force row level security;
alter table public.learning_projection_cursors enable row level security;
alter table public.learning_projection_cursors force row level security;
alter table public.learning_diagnostic_projection_rows enable row level security;
alter table public.learning_diagnostic_projection_rows force row level security;
alter table public.learning_evidence_processing enable row level security;
alter table public.learning_evidence_processing force row level security;
alter table public.learning_source_health enable row level security;
alter table public.learning_source_health force row level security;

drop policy if exists learning_evidence_student_read on public.learning_evidence_records;
create policy learning_evidence_student_read
  on public.learning_evidence_records
  for select
  to authenticated
  using (student_id = (select auth.uid()));

drop policy if exists learning_diagnostic_student_read on public.learning_diagnostic_projection_rows;
create policy learning_diagnostic_student_read
  on public.learning_diagnostic_projection_rows
  for select
  to authenticated
  using (student_id = (select auth.uid()) and consumer_visible);

drop policy if exists learning_source_health_student_read on public.learning_source_health;
create policy learning_source_health_student_read
  on public.learning_source_health
  for select
  to authenticated
  using (student_id = (select auth.uid()));

revoke all on table
  public.learning_source_contracts,
  public.learning_evidence_backfill_runs,
  public.learning_evidence_records,
  public.learning_evidence_quarantine,
  public.learning_projection_generations,
  public.learning_projection_cursors,
  public.learning_diagnostic_projection_rows,
  public.learning_evidence_processing,
  public.learning_source_health,
  public.learning_evidence_effective
from public, anon, authenticated;

grant select on table public.learning_evidence_records to authenticated;
grant select on table public.learning_evidence_effective to authenticated;
grant select on table public.learning_diagnostic_projection_rows to authenticated;
grant select on table public.learning_source_health to authenticated;

revoke all on sequence public.learning_evidence_records_ingestion_sequence_seq
  from public, anon, authenticated;

revoke all on function learning_private.text_array_matches(text[], text)
  from public, anon, authenticated;
revoke all on function learning_private.jsonb_shape_is_safe(jsonb, integer)
  from public, anon, authenticated;
revoke all on function learning_private.jsonb_key_count(jsonb)
  from public, anon, authenticated;
revoke all on function learning_private.metadata_keys_are_safe(jsonb)
  from public, anon, authenticated;
revoke all on function learning_private.metadata_is_safe(jsonb)
  from public, anon, authenticated;
revoke all on function learning_private.jsonb_keys_allowed(jsonb, text[])
  from public, anon, authenticated;
revoke all on function learning_private.relations_are_valid(jsonb)
  from public, anon, authenticated;
revoke all on function learning_private.measurement_is_valid(jsonb, text)
  from public, anon, authenticated;
revoke all on function learning_private.direct_measurement_has_result(jsonb)
  from public, anon, authenticated;
revoke all on function learning_private.derivation_is_valid(jsonb)
  from public, anon, authenticated;
revoke all on function learning_private.source_locator_is_valid(text, text)
  from public, anon, authenticated;
revoke all on function learning_private.safe_timestamptz(text)
  from public, anon, authenticated;
revoke all on function learning_private.safe_date(text)
  from public, anon, authenticated;
revoke all on function learning_private.uri_component(text)
  from public, anon, authenticated;
revoke all on function learning_private.quarantine_evidence(jsonb)
  from public, anon, authenticated;
revoke all on function learning_private.ingest_evidence(jsonb, text, text, uuid)
  from public, anon, authenticated;

commit;
