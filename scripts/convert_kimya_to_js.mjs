import fs from 'fs';
import path from 'path';

const bankDir = path.join(process.cwd(), 'TYT_Kimya_Soru_Bankasi');
const outputDir = path.join(process.cwd(), 'src/content/tests/kimya');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const folders = fs.readdirSync(bankDir).filter(f => f.match(/^\d{2}_/));
const allTests = {};

for (const folder of folders) {
  const sourceDir = path.join(bankDir, folder);
  const slug = folder.replace(/^\d{2}_/, '').replace(/_/g, '-');
  
  const files = fs.readdirSync(sourceDir).filter(f => f.match(/^test_\d{2}_questions\.md$/));
  if (files.length === 0) continue;
  
  const topicTests = [];
  
  for (const f of files) {
    const testNum = f.match(/^test_(\d{2})_questions\.md$/)[1];
    const qFile = path.join(sourceDir, f);
    const sFile = path.join(sourceDir, `test_${testNum}_solutions.md`);
    if (!fs.existsSync(sFile)) continue;
    
    const qText = fs.readFileSync(qFile, 'utf8');
    const sText = fs.readFileSync(sFile, 'utf8');
    
    let titleMatch = qText.match(/# (Test \d+) - (.*?) - (.*)/);
    if (!titleMatch) {
      // try subagent format <Test 01 - Kolay - Simyadan Kimyaya Geçiş>
      titleMatch = qText.match(/<(Test \d+) - (.*?) - (.*?)>/);
    }
    if (!titleMatch) {
      // try simple match if still failing
      titleMatch = qText.match(/(Test \d+).*?(Kolay|Orta|Zor).*?(.*)/i);
    }
    if (!titleMatch) {
      console.log(`Skipping ${f} due to title format`);
      continue;
    }
    
    const testTitle = titleMatch[1];
    const difficulty = titleMatch[2].trim().toLowerCase();
    const description = titleMatch[3].replace(/>$/, '').trim();
    
    const diffMap = { 'kolay': 'easy', 'orta': 'medium', 'zor': 'hard' };
    const diffEng = diffMap[difficulty] || 'medium';

    const testObj = {
      id: `${slug}-test-${testNum}`,
      title: `${testTitle} (${difficulty})`,
      description: description,
      type: 'comprehension',
      order: parseInt(testNum, 10),
      questions: []
    };

    const qBlocks = qText.split('## Soru').slice(1);
    const sBlocks = sText.split('## Soru').slice(1);
    
    for (let i = 0; i < qBlocks.length; i++) {
      const qBlock = qBlocks[i];
      const sBlock = sBlocks[i] || '';
      
      const idMatch = qBlock.match(/\(ID:\s*(.*?)\)/);
      if (!idMatch) continue;
      
      const qId = idMatch[1];
      const lines = qBlock.split('\n').filter(l => l.trim().length > 0);
      lines.shift();
      
      const options = [];
      let questionText = '';
      
      for (const line of lines) {
        const optMatch = line.match(/^([A-E])\)\s+(.*)/);
        if (optMatch) {
          options.push({
            id: optMatch[1],
            text: optMatch[2]
          });
        } else {
          questionText += line + '\n';
        }
      }
      
      const correctMatch = sBlock.match(/\*\*(?:Doğru Seçenek|Doğru Cevap):\*\*\s*([A-E])/);
      const correctAnswer = correctMatch ? correctMatch[1] : 'A';
      
      const solutionMatch = sBlock.match(/\*\*Çözüm:\*\*\s*([\s\S]*)/);
      const solutionText = solutionMatch ? solutionMatch[1].trim() : 'Çözüm belirtilmemiş.';
      
      testObj.questions.push({
        id: qId,
        question: questionText.trim(),
        options: options,
        correctAnswer: correctAnswer,
        difficulty: diffEng,
        solution: solutionText
      });
    }
    
    if (testObj.questions.length > 0) {
      topicTests.push(testObj);
    }
  }
  
  if (topicTests.length > 0) {
    allTests[slug] = topicTests;
    
    const fileContent = `export default ${JSON.stringify(topicTests, null, 2)};\n`;
    fs.writeFileSync(path.join(outputDir, `${slug}.js`), fileContent);
    console.log(`${slug}.js generated with ${topicTests.length} tests.`);
  }
}

let indexContent = '';
for (const slug of Object.keys(allTests)) {
  const varName = slug.replace(/-([a-z])/g, g => g[1].toUpperCase());
  indexContent += `import ${varName} from './${slug}.js';\n`;
}
indexContent += `\nexport const kimyaTests = {\n`;
for (const slug of Object.keys(allTests)) {
  const varName = slug.replace(/-([a-z])/g, g => g[1].toUpperCase());
  indexContent += `  '${slug}': ${varName},\n`;
}
indexContent += `};\n`;

fs.writeFileSync(path.join(outputDir, 'index.js'), indexContent);
console.log('Kimya tests exported successfully.');
