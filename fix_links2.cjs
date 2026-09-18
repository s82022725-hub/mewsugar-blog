const fs = require('fs');
const path = require('path');

const dir = 'src/content/blog';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/\*\*MewSugar 寵物血糖日記\*\*(?!\()/g, '**[MewSugar 寵物血糖日記](/app)**');
  content = content.replace(/\*\*MewSugar App\*\*(?!\()/g, '**[MewSugar App](/app)**');
  content = content.replace(/MewSugar App(?!\s*\]|\s*\()/g, '[MewSugar App](/app)');
  content = content.replace(/MewSugar 寵物血糖日記(?!\s*\]|\s*\()/g, '[MewSugar 寵物血糖日記](/app)');
  
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
