/**
 * DRKOÇ BİYOLOJİ — KADEMELİ KAVRAMA SİSTEMİ ŞEMASI
 * ==================================================================
 *
 * Test yapısını ve soruların içeriğini doğrular.
 */

const LIMITS = {
  short: 400,
  text: 2000,
  explanation: 8000,
};

const DIFFICULTIES = ['very_easy', 'easy', 'medium', 'hard'];

export function validateComprehensionTestSystem(doc) {
  const errors = [];
  const warnings = [];

  if (!doc || typeof doc !== 'object') {
    return { errors: ['Geçersiz doküman nesnesi.'], warnings: [] };
  }

  if (!doc.topicSlug || typeof doc.topicSlug !== 'string') {
    errors.push('topicSlug (string) eksik.');
  }

  if (doc.totalQuestions !== 200) {
    errors.push(`totalQuestions tam olarak 200 olmalı (Gelen: ${doc.totalQuestions}).`);
  }

  if (!Array.isArray(doc.tests)) {
    errors.push('tests bir dizi olmalıdır.');
    return { errors, warnings };
  }

  let totalQ = 0;
  const difficultyCounts = {
    very_easy: 0,
    easy: 0,
    medium: 0,
    hard: 0,
  };

  const questionIds = new Set();
  const testIds = new Set();

  doc.tests.forEach((test, tIndex) => {
    if (!test.id) errors.push(`Test [${tIndex}] id eksik.`);
    else {
      if (testIds.has(test.id)) errors.push(`Test id '${test.id}' tekrar ediyor.`);
      testIds.add(test.id);
    }

    if (!test.title) errors.push(`Test '${test.id}' title eksik.`);
    if (!Array.isArray(test.questions)) {
      errors.push(`Test '${test.id}' questions dizisi olmalı.`);
      return;
    }

    test.questions.forEach((q, qIndex) => {
      totalQ++;

      if (!q.id) errors.push(`Test '${test.id}', Soru [${qIndex}] id eksik.`);
      else {
        if (questionIds.has(q.id)) errors.push(`Soru id '${q.id}' tekrar ediyor.`);
        questionIds.add(q.id);
      }

      if (!DIFFICULTIES.includes(q.difficulty)) {
        errors.push(`Soru '${q.id}' geçersiz difficulty: '${q.difficulty}'.`);
      } else {
        difficultyCounts[q.difficulty]++;
      }

      if (!q.questionText || typeof q.questionText !== 'string') {
        errors.push(`Soru '${q.id}' questionText eksik veya hatalı.`);
      }

      if (!Array.isArray(q.options) || q.options.length < 2) {
        errors.push(`Soru '${q.id}' en az iki seçenek (options) içermelidir.`);
      } else {
        const optIds = new Set();
        let hasCorrectOption = false;
        q.options.forEach((opt) => {
          if (!opt.id || !opt.text) errors.push(`Soru '${q.id}' seçeneği id veya text eksik.`);
          if (optIds.has(opt.id)) errors.push(`Soru '${q.id}' tekrar eden seçenek id: '${opt.id}'.`);
          optIds.add(opt.id);
          if (opt.id === q.correctOptionId) hasCorrectOption = true;
        });

        if (!hasCorrectOption) {
          errors.push(`Soru '${q.id}' correctOptionId, seçeneklerden biriyle eşleşmiyor ('${q.correctOptionId}').`);
        }
      }

      if (!q.explanation) {
        warnings.push(`Soru '${q.id}' açıklama (explanation) içermiyor.`);
      }
    });
  });

  if (totalQ !== 200) {
    errors.push(`Toplam soru sayısı 200 olmalıdır. Bulunan: ${totalQ}`);
  }

  if (difficultyCounts.very_easy !== 75) errors.push(`Çok Kolay soru sayısı 75 olmalı (Bulunan: ${difficultyCounts.very_easy}).`);
  if (difficultyCounts.easy !== 75) errors.push(`Kolay soru sayısı 75 olmalı (Bulunan: ${difficultyCounts.easy}).`);
  if (difficultyCounts.medium !== 40) errors.push(`Orta soru sayısı 40 olmalı (Bulunan: ${difficultyCounts.medium}).`);
  if (difficultyCounts.hard !== 10) errors.push(`Zor soru sayısı 10 olmalı (Bulunan: ${difficultyCounts.hard}).`);

  return { errors, warnings, difficultyCounts, totalQ };
}
