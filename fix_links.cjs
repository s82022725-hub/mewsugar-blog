const fs = require('fs');
const path = require('path');

const dir = 'src/content/blog';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/\*\*\[MewSugar 寵物血糖日記\]\*\*(?!\()/g, '**[MewSugar 寵物血糖日記](/app)**');
  content = content.replace(/\*\*MewSugar App\*\*(?!\()/g, '**[MewSugar App](/app)**');
  content = content.replace(/(?<!\[)MewSugar 寵物血糖日記 App(?!\()/g, '[MewSugar 寵物血糖日記 App](/app)');
  content = content.replace(/下載 MewSugar，/g, '下載 [MewSugar](/app)，');
  
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
