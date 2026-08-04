const fs = require('fs');
const path = require('path');

const scratchDir = 'C:\\Users\\Vishal\\.gemini\\antigravity-ide\\brain\\a1efae38-dfc7-4501-9f3f-5604a8ab5f8d\\scratch';
const targetFile = 'e:\\Interview Notes\\Interview-Guide\\csharp-data.js';

const batches = [
  'csharp-batch1.json',
  'csharp-batch2.json',
  'csharp-batch3.json',
  'csharp-batch4.json'
];

let allQuestions = [];

for (const batch of batches) {
  const filePath = path.join(scratchDir, batch);
  const data = fs.readFileSync(filePath, 'utf8');
  const parsed = JSON.parse(data);
  allQuestions = allQuestions.concat(parsed);
}

const categories = [
  "1. C# Fundamentals",
  "2. OOP Concepts",
  "3. Classes, Objects & Members",
  "4. Strings & Memory",
  "5. Exception Handling",
  "6. Collections & Generics",
  "7. Delegates, Events & Lambda",
  "8. LINQ",
  "9. Advanced C#"
];

const jsContent = `const categories = ${JSON.stringify(categories, null, 2)};\n\nconst interviewQuestions = ${JSON.stringify(allQuestions, null, 2)};\n`;

fs.writeFileSync(targetFile, jsContent);
console.log('Successfully generated csharp-data.js with ' + allQuestions.length + ' questions.');
