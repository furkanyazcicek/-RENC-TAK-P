/**
 * Ücretsiz Koç: mevcut öğrenci kayıtlarından salt okunur, deterministik rehber.
 * Model çağrısı, yeni tablo veya kalıcı öğrenci yazısı yoktur.
 */

function finiteNonNegative(value) {
  const number = Number(value)
  return Number.isFinite(number) && number >= 0 ? number : 0
}

function focusFor(facts) {
  const today = facts.plan?.today ?? []
  if (today.length) {
    return {
      kind: 'plan',
      title: 'Bugünkü planınla başla',
      reason: `Bugün için kayıtlı ${today.length} çalışma adımın var.`,
      evidence: 'Kaynak: kendi çalışma planın',
      nextCheck: 'Çalışmanı günlük takibe kaydettiğinde yeni kayıtlarınla yeniden gözden geçir.',
      items: today.slice(0, 5).map((item) => ({
        subject: item.subject,
        topic: item.topic,
        minutes: finiteNonNegative(item.minutes),
      })),
      action: { label: 'Günlük kaydı aç', path: '/gunluk-takip' },
    }
  }

  const overdue = finiteNonNegative(facts.homeworks?.overdue)
  if (overdue > 0) {
    return {
      kind: 'homework',
      title: 'Önce gecikmiş ödevini gözden geçir',
      reason: `${overdue} ödevin teslim tarihi geçmiş görünüyor.`,
      evidence: 'Kaynak: ödev kayıtların ve teslim tarihleri',
      nextCheck: 'Ödevi teslim ettiğinde durumunun güncellendiğini kontrol et.',
      action: { label: 'Ödevlerimi aç', path: '/odevler' },
    }
  }

  const weak = facts.weakTopics?.[0]
  if (weak?.subject && weak?.topic && finiteNonNegative(weak.attempted) >= 10) {
    return {
      kind: 'practice',
      title: `${weak.topic} konusuna kısa bir dönüş yap`,
      reason: `Günlük çalışma kayıtlarında ${weak.subject} · ${weak.topic} için ${weak.attempted} soruda %${weak.accuracy} isabet bildirdin.`,
      evidence: 'Kaynak: son 30 gündeki kendi günlük çalışma kayıtların; bu bir ustalık ölçümü değildir',
      nextCheck: 'Yeni bir soru sonucu kaydettiğinde aynı konudaki değişime tekrar bak.',
      action: { label: 'Soru kütüphanesini aç', path: '/kutuphane/sorular' },
    }
  }

  if (!facts.study?.logCount && !facts.exams?.totalMock) {
    return {
      kind: 'start',
      title: 'İlk çalışma kaydını ekle',
      reason: 'Sana özel bir çalışma yönü çıkaracak yeterli kayıt henüz yok.',
      evidence: 'Kaynak: günlük çalışma ve genel deneme kayıtların',
      nextCheck: 'İlk kaydından sonra bu sayfayı yeniden aç; olmayan başarıyı tahmin etmeyeceğim.',
      action: { label: 'Çalışma kaydı ekle', path: '/gunluk-takip' },
    }
  }

  return {
    kind: 'review',
    title: 'Son kayıtlarını gözden geçir',
    reason: 'Bugün için kayıtlı plan, gecikmiş ödev veya yeterli örnekli bir konu sinyali görünmüyor.',
    evidence: 'Kaynak: mevcut plan, ödev ve günlük çalışma kayıtların',
    nextCheck: 'Yeni bir çalışma veya deneme sonucu geldiğinde öneri yeniden hesaplanır.',
    action: { label: 'Analizimi aç', path: '/analiz' },
  }
}

export function buildFreeCoachGuide(facts) {
  if (facts?.degraded) {
    return { status: 'unavailable', reason: 'Kayıtların bir kısmına erişilemediği için kişisel çıkarım gösterilmiyor.' }
  }

  const latest = facts.exams?.recent?.[0] ?? null
  return {
    version: 'free-coach-guide@1',
    status: 'available',
    firstName: facts.profile?.firstName ?? '',
    today: focusFor(facts),
    week: {
      thisWeekMinutes: finiteNonNegative(facts.study?.thisWeekMinutes),
      previousWeekMinutes: finiteNonNegative(facts.study?.prevWeekMinutes),
      thisWeekSolved: finiteNonNegative(facts.study?.thisWeekSolved),
      source: 'Günlük çalışma kayıtların; süre ve soru sayısı tek başına başarı değildir.',
    },
    topics: (facts.weakTopics ?? []).filter((topic) => (
      topic?.subject && topic?.topic && finiteNonNegative(topic.attempted) >= 10
    )).slice(0, 3).map((topic) => ({
      subject: topic.subject,
      topic: topic.topic,
      attempted: finiteNonNegative(topic.attempted),
      accuracy: finiteNonNegative(topic.accuracy),
      source: 'Son 30 gündeki günlük çalışma kayıtların; öz bildirimdir.',
    })),
    latestExam: latest ? {
      name: latest.name || latest.type || 'Son genel deneme',
      type: latest.type,
      date: latest.date,
      totalNet: latest.totalNet,
      subjects: latest.subjects?.slice(0, 8).map((subject) => ({
        subject: subject.subject,
        net: subject.net,
      })) ?? [],
      source: 'Kaydedilmiş son genel deneme; farklı sınav türleri karşılaştırılmaz.',
    } : null,
    homework: {
      pending: finiteNonNegative(facts.homeworks?.pending),
      overdue: finiteNonNegative(facts.homeworks?.overdue),
    },
    scope: 'Bu sürüm günlük çalışma, genel deneme, ödev ve mevcut plan kayıtlarını kullanır. Ders, soru kütüphanesi ve dil ilerlemesinin birleşik analizi henüz açık değildir.',
  }
}
