import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'index.js' && !f.includes('aws') && !f.includes('azure') && !f.includes('cpp'));

async function analyze() {
  const results = [];
  
  for (const file of files) {
    const filePath = `file:///${path.join(dataDir, file).replace(/\\/g, '/')}`;
    try {
      const module = await import(filePath);
      const questions = module.interviewQuestions;
      
      if (!questions) continue;
      
      let shortExplanations = 0;
      let shortSummaries = 0;
      
      for (const q of questions) {
        if (!q.explanation || q.explanation.length < 300) shortExplanations++;
        if (!q.summary || q.summary.length < 100) shortSummaries++;
      }
      
      results.push({
        file,
        total: questions.length,
        shortExplanations,
        shortSummaries
      });
    } catch (e) {
      console.error(`Error processing ${file}: ${e.message}`);
    }
  }
  
  console.log("Analysis Results:");
  console.table(results);
}

analyze();
