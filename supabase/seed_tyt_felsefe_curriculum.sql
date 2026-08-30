-- Mevcut kurulumlarda TYT Felsefe konu ağacını genişletir.
with subject as (
  select id from library_subjects where exam_type = 'TYT' and name = 'Felsefe'
), desired(name, ord) as (values
  ('Felsefenin Konusu', 1), ('Felsefi Düşüncenin Özellikleri', 2),
  ('Bilgi Felsefesi', 3), ('Varlık Felsefesi', 4), ('Ahlak Felsefesi', 5),
  ('Sanat Felsefesi', 6), ('Din Felsefesi', 7), ('Siyaset Felsefesi', 8),
  ('Bilim Felsefesi', 9), ('Felsefi Akımlar', 10),
  ('Temel Filozof-Görüş İlişkileri', 11)
)
insert into library_topics (subject_id, name, order_index)
select subject.id, desired.name, desired.ord from subject cross join desired
where not exists (
  select 1 from library_topics topic
  where topic.subject_id = subject.id and topic.name = desired.name
);

with desired(name, ord) as (values
  ('Felsefenin Konusu', 1), ('Felsefi Düşüncenin Özellikleri', 2),
  ('Bilgi Felsefesi', 3), ('Varlık Felsefesi', 4), ('Ahlak Felsefesi', 5),
  ('Sanat Felsefesi', 6), ('Din Felsefesi', 7), ('Siyaset Felsefesi', 8),
  ('Bilim Felsefesi', 9), ('Felsefi Akımlar', 10),
  ('Temel Filozof-Görüş İlişkileri', 11)
)
update library_topics topic set order_index = desired.ord
from desired, library_subjects subject
where topic.subject_id = subject.id and subject.exam_type = 'TYT'
  and subject.name = 'Felsefe' and topic.name = desired.name;
