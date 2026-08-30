-- DrKoç — TYT Din Kültürü konu ağacını 2026 MEB ortaöğretim
-- programındaki 20 üniteyle güvenli ve tekrar çalıştırılabilir biçimde tamamlar.
-- Var olan geniş/legacy başlıklar ve onlara bağlı notlar silinmez.

with subject as (
  select id
    from library_subjects
   where exam_type = 'TYT'
     and name = 'Din Kültürü ve Ahlak Bilgisi'
   limit 1
), topics(name, order_index) as (
  values
    ('Allah-İnsan İlişkisi', 1), (E'İslam\'da İnanç Esasları', 2),
    (E'İslam\'da İbadetler', 3), (E'İslam\'da Ahlak İlkeleri', 4),
    (E'Kur\'an\'a Göre Hz. Muhammed', 5), (E'İslam\'da Varlık ve Bilgi', 6),
    (E'Allah\'ı Tanımak', 7), (E'İslam\'ın Evrensel Mesajları', 8),
    ('Din, Çevre ve Teknoloji', 9),
    ('İslam Düşüncesinde İtikadi-Siyasi ve Fıkhi Yorumlar', 10),
    ('Kader, İrade ve Sorumluluk', 11), ('Din, Felsefe, Bilim ve Sanat', 12),
    ('İslam Medeniyeti ve Gönül Coğrafyamız', 13),
    ('İnançla İlgili Meseleler', 14), ('Yahudilik ve Hristiyanlık', 15),
    ('Kur’an-ı Kerim', 16), ('Din ve Aile', 17), ('Güncel Dinî Meseleler', 18),
    ('İslam Düşüncesinde Tasavvufi Yorumlar', 19), ('Hint ve Çin Dinleri', 20)
)
insert into library_topics (subject_id, name, order_index)
select subject.id, topics.name, topics.order_index
  from subject cross join topics
 where not exists (
   select 1
     from library_topics existing
    where existing.subject_id = subject.id
      and existing.name = topics.name
 );

with subject as (
  select id
    from library_subjects
   where exam_type = 'TYT'
     and name = 'Din Kültürü ve Ahlak Bilgisi'
   limit 1
), topics(name, order_index) as (
  values
    ('Allah-İnsan İlişkisi', 1), (E'İslam\'da İnanç Esasları', 2),
    (E'İslam\'da İbadetler', 3), (E'İslam\'da Ahlak İlkeleri', 4),
    (E'Kur\'an\'a Göre Hz. Muhammed', 5), (E'İslam\'da Varlık ve Bilgi', 6),
    (E'Allah\'ı Tanımak', 7), (E'İslam\'ın Evrensel Mesajları', 8),
    ('Din, Çevre ve Teknoloji', 9),
    ('İslam Düşüncesinde İtikadi-Siyasi ve Fıkhi Yorumlar', 10),
    ('Kader, İrade ve Sorumluluk', 11), ('Din, Felsefe, Bilim ve Sanat', 12),
    ('İslam Medeniyeti ve Gönül Coğrafyamız', 13),
    ('İnançla İlgili Meseleler', 14), ('Yahudilik ve Hristiyanlık', 15),
    ('Kur’an-ı Kerim', 16), ('Din ve Aile', 17), ('Güncel Dinî Meseleler', 18),
    ('İslam Düşüncesinde Tasavvufi Yorumlar', 19), ('Hint ve Çin Dinleri', 20)
)
update library_topics current
   set order_index = topics.order_index
  from subject, topics
 where current.subject_id = subject.id
   and current.name = topics.name;
