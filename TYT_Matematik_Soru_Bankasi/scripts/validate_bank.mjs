import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const strict = process.argv.includes('--strict');
const errors = [];
const warnings = [];
const ids = new Set();
const allQuestions = [];
const answerCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function questionBlocks(text) {
  const matches = [...text.matchAll(/^## Soru (\d+)\s*$/gm)];
  return matches.map((match, index) => ({
    number: Number(match[1]),
    text: text.slice(match.index, matches[index + 1]?.index ?? text.length),
  }));
}

function normalizedStem(block) {
  return block
    .replace(/^## Soru \d+.*$/m, '')
    .replace(/`K\d{2}-T\d{2}-Q\d{2}`/g, '')
    .replace(/^[A-E]\).*$/gm, '')
    .replace(/\\/g, ' ')
    .replace(/\+/g, ' plus ')
    .replace(/-/g, ' minus ')
    .replace(/\^/g, ' power ')
    .replace(/=/g, ' equals ')
    .replace(/</g, ' less ')
    .replace(/>/g, ' greater ')
    .replace(/\*/g, ' times ')
    .replace(/\//g, ' divide ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .toLocaleLowerCase('tr-TR')
    .split(/\s+/)
    .filter((token) => token.length > 2 || /^\d+$/.test(token))
    .join(' ');
}

function exactStem(block) {
  return block
    .replace(/^## Soru \d+.*$/m, '')
    .replace(/`K\d{2}-T\d{2}-Q\d{2}`/g, '')
    .replace(/^[A-E]\).*$/gm, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLocaleLowerCase('tr-TR');
}

function jaccard(a, b) {
  const left = new Set(a.split(' ').filter(Boolean));
  const right = new Set(b.split(' ').filter(Boolean));
  const intersection = [...left].filter((token) => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  return union ? intersection / union : 0;
}

function parseAnswerKey(file, testNumber) {
  const row = read(file)
    .split('\n')
    .find((line) => new RegExp(`^\\|\\s*${testNumber}\\s*\\|`).test(line));
  if (!row) return null;
  const cells = row.split('|').slice(2, -1).map((cell) => cell.trim());
  return cells.length === 10 && cells.every((cell) => /^[A-E]$/.test(cell)) ? cells : null;
}

const topicDirs = fs.readdirSync(projectRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^\d{2}_/.test(entry.name) && entry.name !== '00_curriculum_and_research')
  .map((entry) => path.join(projectRoot, entry.name));

let testCount = 0;
let questionCount = 0;
let solutionCount = 0;

for (const topicDir of topicDirs) {
  const files = fs.readdirSync(topicDir);
  const questionFiles = files.filter((file) => /^test_\d{2}_questions\.md$/.test(file)).sort();
  const solutionFiles = files.filter((file) => /^test_\d{2}_solutions\.md$/.test(file)).sort();
  const answerKeyFile = path.join(topicDir, 'answer_keys.md');

  if (!fs.existsSync(path.join(topicDir, 'topic_analysis.md'))) {
    errors.push(`${path.basename(topicDir)}: topic_analysis.md eksik.`);
  }
  if (!fs.existsSync(answerKeyFile)) {
    errors.push(`${path.basename(topicDir)}: answer_keys.md eksik.`);
  }
  if (!fs.existsSync(path.join(topicDir, 'quality_report.md'))) {
    warnings.push(`${path.basename(topicDir)}: quality_report.md henüz yok.`);
  }
  if (strict && (questionFiles.length !== 50 || solutionFiles.length !== 50)) {
    errors.push(`${path.basename(topicDir)}: sıkı denetimde 50 soru ve 50 çözüm dosyası gerekir.`);
  }

  for (const questionFileName of questionFiles) {
    const testNumber = questionFileName.match(/test_(\d{2})_/)[1];
    const topicNumber = path.basename(topicDir).slice(0, 2);
    const solutionFileName = `test_${testNumber}_solutions.md`;
    const questionFile = path.join(topicDir, questionFileName);
    const solutionFile = path.join(topicDir, solutionFileName);
    const questions = questionBlocks(read(questionFile));

    testCount += 1;
    questionCount += questions.length;

    if (questions.length !== 10) {
      errors.push(`${questionFileName}: 10 yerine ${questions.length} soru var.`);
    }
    if (questions.map((question) => question.number).join(',') !== '1,2,3,4,5,6,7,8,9,10') {
      errors.push(`${questionFileName}: soru numaraları 1–10 sırasında değil.`);
    }
    if (!fs.existsSync(solutionFile)) {
      errors.push(`${questionFileName}: eşleşen çözüm dosyası eksik.`);
      continue;
    }

    const solutions = questionBlocks(read(solutionFile));
    solutionCount += solutions.length;
    if (solutions.length !== 10) {
      errors.push(`${solutionFileName}: 10 yerine ${solutions.length} çözüm var.`);
    }
    if (solutions.map((solution) => solution.number).join(',') !== '1,2,3,4,5,6,7,8,9,10') {
      errors.push(`${solutionFileName}: çözüm numaraları 1–10 sırasında değil.`);
    }

    const answerKey = fs.existsSync(answerKeyFile) ? parseAnswerKey(answerKeyFile, testNumber) : null;
    if (!answerKey) {
      errors.push(`${path.basename(topicDir)} Test ${testNumber}: cevap anahtarı satırı eksik veya geçersiz.`);
    } else {
      const perTestCounts = Object.fromEntries('ABCDE'.split('').map((choice) => [choice, answerKey.filter((item) => item === choice).length]));
      if (Object.values(perTestCounts).some((count) => count !== 2)) {
        warnings.push(`${path.basename(topicDir)} Test ${testNumber}: test içi cevap dağılımı 2’şer değil (${JSON.stringify(perTestCounts)}).`);
      }
    }

    questions.forEach((question, index) => {
      const optionLines = [...question.text.matchAll(/^([A-E])\)\s+/gm)].map((match) => match[1]);
      if (optionLines.join('') !== 'ABCDE') {
        errors.push(`${questionFileName} Soru ${question.number}: seçenekler A–E olarak tam ve tekil değil.`);
      }
      const optionTexts = [...question.text.matchAll(/^([A-E])\)\s+(.+)$/gm)]
        .map((match) => match[2].replace(/\s+/g, ' ').trim().toLocaleLowerCase('tr-TR'));
      if (new Set(optionTexts).size !== optionTexts.length) {
        errors.push(`${questionFileName} Soru ${question.number}: yinelenen seçenek metni var.`);
      }

      const id = question.text.match(/`(K\d{2}-T\d{2}-Q\d{2})`/)?.[1];
      if (!id) {
        errors.push(`${questionFileName} Soru ${question.number}: soru kimliği eksik.`);
      } else if (id !== `K${topicNumber}-T${testNumber}-Q${String(question.number).padStart(2, '0')}`) {
        errors.push(`${id}: klasör, test veya soru numarasıyla uyuşmayan kimlik.`);
      } else if (ids.has(id)) {
        errors.push(`${id}: yinelenen soru kimliği.`);
      } else {
        ids.add(id);
      }

      const visualRefs = [...question.text.matchAll(/(?:\.\/)?visuals\/([^\s)>'"]+)/g)].map((match) => match[1]);
      for (const ref of visualRefs) {
        if (!fs.existsSync(path.join(topicDir, 'visuals', ref))) {
          errors.push(`${questionFileName} Soru ${question.number}: visuals/${ref} bulunamadı.`);
        }
      }

      const stem = normalizedStem(question.text);
      allQuestions.push({
        id: id ?? `${questionFileName}-${question.number}`,
        stem,
        exact: exactStem(question.text),
      });

      const solution = solutions.find((item) => item.number === question.number);
      if (!solution) {
        errors.push(`${solutionFileName}: Soru ${question.number} çözümü bulunamadı.`);
        return;
      }
      for (const field of ['**Doğru cevap:**', '**Kazanım:**', '**Çözüm:**', '**Neden doğru?**']) {
        if (!solution.text.includes(field)) {
          errors.push(`${solutionFileName} Soru ${question.number}: ${field} alanı eksik.`);
        }
      }
      const solutionAnswer = solution.text.match(/\*\*Doğru cevap:\*\*\s*([A-E])/i)?.[1]?.toUpperCase();
      if (!solutionAnswer) {
        errors.push(`${solutionFileName} Soru ${question.number}: doğru cevap biçimi geçersiz.`);
      } else {
        answerCounts[solutionAnswer] += 1;
        if (answerKey && answerKey[index] !== solutionAnswer) {
          errors.push(`${path.basename(topicDir)} Test ${testNumber} Soru ${question.number}: çözüm (${solutionAnswer}) ile anahtar (${answerKey[index]}) uyuşmuyor.`);
        }
      }
    });
  }

  for (const solutionFileName of solutionFiles) {
    const testNumber = solutionFileName.match(/test_(\d{2})_/)[1];
    if (!files.includes(`test_${testNumber}_questions.md`)) {
      errors.push(`${solutionFileName}: eşleşen soru dosyası eksik.`);
    }
  }
}

for (let i = 0; i < allQuestions.length; i += 1) {
  for (let j = i + 1; j < allQuestions.length; j += 1) {
    if (allQuestions[i].exact === allQuestions[j].exact) {
      errors.push(`${allQuestions[i].id} ile ${allQuestions[j].id}: aynı normalize soru kökü.`);
      continue;
    }
    const score = jaccard(allQuestions[i].stem, allQuestions[j].stem);
    if (score >= 0.78) {
      warnings.push(`${allQuestions[i].id} ile ${allQuestions[j].id}: yüksek metinsel benzerlik (${score.toFixed(2)}).`);
    }
  }
}

const summary = {
  topicsStarted: topicDirs.length,
  tests: testCount,
  questions: questionCount,
  solutions: solutionCount,
  answerDistribution: answerCounts,
  errors: errors.length,
  warnings: warnings.length,
  strict,
};

console.log(JSON.stringify(summary, null, 2));
for (const warning of warnings) console.warn(`UYARI: ${warning}`);
for (const error of errors) console.error(`HATA: ${error}`);

if (errors.length) process.exitCode = 1;
