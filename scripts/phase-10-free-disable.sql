-- Acil durdurma: veri silmez; günlük takip ve kaynak kayıtları çalışmaya devam eder.
begin;
update learning_private.learning_feature_flags set enabled=false,mode='disabled',reason_code='PHASE10_FREE_COACH_STOPPED',updated_at=clock_timestamp()
where feature_key in('coach_analysis','coach_writes');
update learning_private.learning_student_feature_flags set enabled=false,mode='disabled',reason_code='PHASE10_FREE_COACH_STOPPED',updated_at=clock_timestamp()
where feature_key in('coach_analysis','coach_writes');
commit;
