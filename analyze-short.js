const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'index.js' && f !== 'awsdevops-data.js' && f !== 'azuredevops-data.js'); // Skip the newly generated ones as they are very detailed

let totalQuestions = 0;
let shortQuestions = 0;

const results = [];

for (const file of files) {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Quick regex to extract the array, or we can just use a simple approach to extract the object.
  // Since they are js files exporting constants, we can try to require them, but we need babel.
  // Alternatively, just do a rough text parse or string match.
  // A better way: convert the export to JSON or run it inside a temporary script that requires it.
}
