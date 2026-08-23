-- TYT Türkçe konu ağacını mevcut kurulumlarda güvenle genişletir.
-- Tekrar çalıştırılabilir; var olan konu kimliklerine ve bağlı notlara dokunmaz.

do $$
declare
  turkce_subject_id uuid;
begin
  select id into turkce_subject_id
    from library_subjects
   where exam_type = 'TYT' and name = 'Türkçe'
   limit 1;

  if turkce_subject_id is null then
    raise exception 'TYT > Türkçe dersi bulunamadı; önce curriculum seed çalıştırılmalı.';
  end if;

  insert into library_topics (subject_id, name, order_index)
  select turkce_subject_id, v.name, v.ord
    from (values
      ('Sözcük Türleri', 5),
      ('Fiiller', 6),
      ('Tamlamalar', 13)
    ) as v(name, ord)
   where not exists (
     select 1 from library_topics t
      where t.subject_id = turkce_subject_id and t.name = v.name
   );

  update library_topics t
     set order_index = v.ord
    from (values
      ('Sözcükte Anlam', 1),
      ('Cümlede Anlam', 2),
      ('Paragrafta Anlam ve Yapı', 3),
      ('Paragrafta Düşünceyi Geliştirme Yolları', 4),
      ('Sözcük Türleri', 5),
      ('Fiiller', 6),
      ('Fiilimsi', 7),
      ('Cümlenin Öğeleri', 8),
      ('Cümle Türleri', 9),
      ('Anlatım Bozuklukları', 10),
      ('Ses Bilgisi', 11),
      ('Yapı Bilgisi', 12),
      ('Tamlamalar', 13),
      ('Yazım Kuralları', 14),
      ('Noktalama İşaretleri', 15)
    ) as v(name, ord)
   where t.subject_id = turkce_subject_id
     and t.name = v.name;
end $$;

