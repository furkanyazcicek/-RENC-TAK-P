import fs from 'fs';
import path from 'path';

const turkceDir = path.join(process.cwd(), 'src/content/tests/turkce');
const files = fs.readdirSync(turkceDir).filter(f => f.endsWith('.js') && f !== 'index.js');

const topics = {
  'noktalama-isaretleri': [],
  'isimler': [],
  'sifatlar': [],
  'zarflar': [],
  'zamirler': [],
  'edat-baglac-unlem': [],
  'cumlenin-ogeleri': [],
  'anlatim-bozukluklari': [],
  'sozcukte-anlam': [],
  'paragrafta-anlam': [],
  'ses-bilgisi': [],
  'yazim-kurallari': [],
  'cumlede-anlam': [],
  'fiiller': [],
  'fiilimsiler': [],
  'sozcuk-yapisi': [],
  'cumle-turleri': [],
  'dusunceyi-gelistirme': []
};

// Map files to topics based on prefix
files.forEach(f => {
  for (const topic of Object.keys(topics)) {
    if (f.startsWith(topic)) {
      topics[topic].push(f);
      break;
    }
  }
});

let indexContent = '';
let exportObject = 'export const turkceTests = {\n';

for (const [topic, topicFiles] of Object.entries(topics)) {
  if (topicFiles.length === 0) continue;
  
  topicFiles.sort((a, b) => {
    // Extract numbers if any for sorting
    const numA = parseInt(a.match(/\d+/)?.[0] || '0');
    const numB = parseInt(b.match(/\d+/)?.[0] || '0');
    return numA - numB;
  });

  const importNames = [];
  topicFiles.forEach((file, index) => {
    const importName = `${topic.replace(/-/g, '_')}_${index}`;
    indexContent += `import ${importName} from './${file}';\n`;
    importNames.push(importName);
  });
  
  // For single files that don't export arrays, ensure they are in an array, or if they export an array, spread them
  exportObject += `  '${topic}': [\n    ...[${importNames.join(', ')}].flat()\n  ],\n`;
}

exportObject += '};\n';
fs.writeFileSync(path.join(turkceDir, 'index.js'), indexContent + '\n' + exportObject);
console.log('index.js created');
