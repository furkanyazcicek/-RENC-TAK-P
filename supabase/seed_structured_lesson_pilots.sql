-- ============================================================
-- DrKoç pilot structured lessons
-- Ön koşul: migration_library.sql, ilgili curriculum seed'leri ve
-- migration_structured_lessons.sql uygulanmış olmalı.
--
-- Aynı başlıklı pilot ders varsa ikinci kez eklemez.
-- ============================================================

-- AYT Fizik müfredatında elektromanyetizma, Elektrik Alan/Potansiyel,
-- Manyetik Alan ve İndüksiyon başlıklarının birleşik öğretim akışıdır.
insert into library_topics (subject_id, name, order_index)
select s.id, 'Elektromanyetizma', 11
from library_subjects s
where s.exam_type = 'AYT' and s.name = 'Fizik'
  and not exists (
    select 1 from library_topics t where t.subject_id = s.id and t.name = 'Elektromanyetizma'
  );

with pilot_lessons as (
  select
    t.id as topic_id,
    'Trigonometri: Birim Çember, İşaretler ve Hızlı Okuma'::text as title,
    'Tempolu ilerle; işaret, bölge ve özel açı üçlüsünü her soruda sırayla kontrol et.'::text as subtitle,
    jsonb_build_object(
      'version', 1, 'estimated_minutes', 18,
      'sections', jsonb_build_array(
        jsonb_build_object('id', 'trig-baslangic', 'title', 'Birim çemberin fikri', 'blocks', jsonb_build_array(
          jsonb_build_object('id', 'trig-concept', 'type', 'concept', 'title', 'Trigonometri bir koordinat okuma işidir', 'body', 'Birim çemberde açıya karşılık gelen noktanın x koordinatı cos, y koordinatı sin değeridir. Ezberden önce bu resmi zihninde kur.'),
          jsonb_build_object('id', 'trig-why', 'type', 'why', 'title', 'Neden birim çember?', 'body', 'Yarıçap 1 olduğunda hipotenüs 1 olur. Bu yüzden koordinatlar doğrudan trigonometrik oranlara dönüşür.'),
          jsonb_build_object('id', 'trig-circle', 'type', 'visual', 'visual_kind', 'unit-circle', 'title', 'Birim çemberi soru gibi oku', 'caption', 'Açının ucundaki nokta (cos θ, sin θ) koordinatıdır. Yatay ve dikey izdüşümü ayrı okuyunca işaret tuzağı görünür.', 'visual_audio_script', 'Açının ucundaki noktayı bul. Yatay izdüşüm kosinüs, dikey izdüşüm sinüs demektir. Bölgeyi görmeden özel açı ezberine geçme.'),
          jsonb_build_object('id', 'trig-tip', 'type', 'exam_tip', 'title', 'Sınav temposu', 'body', 'Her soruda önce açının bölgesini bul, sonra işareti belirle, en son özel açı değerini yerleştir.')
        )),
        jsonb_build_object('id', 'trig-isaret', 'title', 'İşaret tuzağını kapat', 'blocks', jsonb_build_array(
          jsonb_build_object('id', 'trig-table', 'type', 'table', 'title', 'Bölgelere göre işaret', 'rows', jsonb_build_array(jsonb_build_array('Bölge', 'sin', 'cos', 'tan'), jsonb_build_array('I', '+', '+', '+'), jsonb_build_array('II', '+', '-', '-'), jsonb_build_array('III', '-', '-', '+'), jsonb_build_array('IV', '-', '+', '-'))),
          jsonb_build_object('id', 'trig-trap', 'type', 'trap', 'title', 'Referans açıya bakıp işareti unutma', 'body', '30°, 45° veya 60° değerini doğru bulup yanlış bölgenin işaretini kullanmak en yaygın hatadır.'),
          jsonb_build_object('id', 'trig-memory', 'type', 'memory', 'title', 'Kısa hafıza kancası', 'body', 'İkinci bölgede yalnız sinüs pozitif; dördüncü bölgede yalnız kosinüs pozitif kalır.')
        )),
        jsonb_build_object('id', 'trig-check', 'title', 'Hızlı kontrol', 'blocks', jsonb_build_array(
          jsonb_build_object('id', 'trig-process', 'type', 'process', 'title', 'Her trigonometrik soruda 3 durak', 'steps', jsonb_build_array(
            jsonb_build_object('title', 'Bölgeyi bul', 'body', 'Açıyı koordinat düzlemine yerleştir; pozitif ve negatif eksenleri gör.'),
            jsonb_build_object('title', 'İşareti sabitle', 'body', 'sin, cos ve tan için o bölgedeki işaret tablosunu uygula.'),
            jsonb_build_object('title', 'Değeri yerleştir', 'body', 'Son adımda referans açı veya özel açı değerini kullan.')
          )),
          jsonb_build_object('id', 'trig-quiz', 'type', 'quiz', 'question', '150° için sinüsün işareti nedir?', 'options', jsonb_build_array('Pozitif', 'Negatif', 'Sıfır', 'Belirsiz'), 'answer_index', 0, 'explanation', '150° ikinci bölgededir. İkinci bölgede sinüs pozitif, kosinüs ve tanjant negatiftir.'),
          jsonb_build_object('id', 'trig-summary', 'type', 'summary', 'title', 'Bu bölümün özeti', 'body', 'Birim çember → bölge → işaret → özel açı sırası, trigonometri sorularında hem hata oranını hem işlem süresini düşürür.')
        ))
      )
    ) as document
  from library_topics t
  join library_subjects s on s.id = t.subject_id
  where s.exam_type = 'AYT' and s.name = 'Matematik' and t.name = 'Trigonometri'

  union all

  select
    t.id as topic_id,
    'Elektromanyetizma: Alan, Kuvvet ve İndüksiyon Bağlantısı'::text as title,
    'Alanları tek tek ezberleme; yük, hareket ve değişim ilişkisini kurarak soru çöz.'::text as subtitle,
    jsonb_build_object(
      'version', 1, 'estimated_minutes', 20,
      'sections', jsonb_build_array(
        jsonb_build_object('id', 'em-baslangic', 'title', 'Önce alanı düşün', 'blocks', jsonb_build_array(
          jsonb_build_object('id', 'em-concept', 'type', 'concept', 'title', 'Elektrik ve manyetik alan', 'body', 'Elektrik alanı yük oluşturur. Manyetik alan ise hareket eden yükler ve akım taşıyan iletkenler üzerinde etkisini gösterir.'),
          jsonb_build_object('id', 'em-connection', 'type', 'connection', 'title', 'Büyük bağlantı', 'body', 'Yük duruyorsa elektrik alan; yük hareket ediyorsa manyetik kuvvet ihtimali doğar. Alan değişiyorsa indüksiyon düşün.'),
          jsonb_build_object('id', 'em-visual', 'type', 'visual', 'visual_kind', 'electromagnetism', 'title', 'Soru okuma şeması', 'caption', 'Soruda önce yükün hareketini, sonra alanın yönünü, en son kuvvet yönünü işaretle.', 'visual_audio_script', 'Önce hareket eden yükü bul. Şimdi manyetik alanın yönünü ayrı bir okla göster. Sağ el kuralını uygularken iki oku birbirine karıştırma; sonuç kuvvetin yönüdür.')
        )),
        jsonb_build_object('id', 'em-kuvvet', 'title', 'Kuvvet yönünü güvenle bul', 'blocks', jsonb_build_array(
          jsonb_build_object('id', 'em-formula', 'type', 'formula', 'title', 'Manyetik kuvvet', 'body', 'Büyüklükte sinüs açıyı unutma; yön için sağ el kuralını kullan.', 'formula', 'F = q · v · B · sin(θ)'),
          jsonb_build_object('id', 'em-process', 'type', 'process', 'title', 'Sağ el kuralını 3 hamlede uygula', 'steps', jsonb_build_array(
            jsonb_build_object('title', 'Hızı göster', 'body', 'Pozitif yükün hareket yönünü v oku ile sabitle.'),
            jsonb_build_object('title', 'Alanı göster', 'body', 'B alanının sayfaya giriş-çıkış yönünü sembolleştir.'),
            jsonb_build_object('title', 'Kuvveti çevir', 'body', 'v × B yönünü bul; negatif yükte son oku tersine çevir.')
          )),
          jsonb_build_object('id', 'em-trap', 'type', 'trap', 'title', 'Negatif yük ters çevirir', 'body', 'Sağ el kuralı önce pozitif yük için yön verir. Yük negatifse bulduğun yönün tersini al.'),
          jsonb_build_object('id', 'em-exam', 'type', 'exam_tip', 'title', 'Sınavda üç adım', 'body', '1) Hareket var mı? 2) Alan yönü ne? 3) Yükün işareti ne? Bu sıra karmaşık çizimli sorularda hız kazandırır.')
        )),
        jsonb_build_object('id', 'em-check', 'title', 'Hızlı kontrol', 'blocks', jsonb_build_array(
          jsonb_build_object('id', 'em-quiz', 'type', 'quiz', 'question', 'Manyetik alan içinde hızı manyetik alana paralel olan yüklü parçacığa manyetik kuvvet ne olur?', 'options', jsonb_build_array('Maksimum olur', 'Sıfır olur', 'Yükün işaretine göre artar', 'Sabit hızla azalır'), 'answer_index', 1, 'explanation', 'v ve B paralelse θ = 0° olur. sin 0° = 0 olduğu için manyetik kuvvet sıfırdır.'),
          jsonb_build_object('id', 'em-summary', 'type', 'summary', 'title', 'Bu bölümün özeti', 'body', 'Elektromanyetizma sorusunu alan ezberiyle değil; yükün durumu, hareket yönü, alan yönü ve değişim olup olmadığıyla çöz.')
        ))
      )
    ) as document
  from library_topics t
  join library_subjects s on s.id = t.subject_id
  where s.exam_type = 'AYT' and s.name = 'Fizik' and t.name = 'Elektromanyetizma'
)
insert into structured_lessons (topic_id, title, subtitle, document, status, is_gold_standard, content_hash, current_revision, published_at)
select topic_id, title, subtitle, document, 'published', true, 'seed-pilot-v1', 1, now()
from pilot_lessons p
where not exists (
  select 1 from structured_lessons l where l.topic_id = p.topic_id and l.title = p.title
);

insert into structured_lesson_revisions (lesson_id, revision, document, change_note)
select l.id, 1, l.document, 'Pilot gold standard ilk sürüm'
from structured_lessons l
where l.content_hash = 'seed-pilot-v1'
  and not exists (
    select 1 from structured_lesson_revisions r where r.lesson_id = l.id and r.revision = 1
  );
