export default function keystaticTablePlugin() {
  return {
    name: 'vite-plugin-keystatic-table',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('.md')) {
        let result = code;
        const tableRegex = /\{%\s*table\s*%\}([\s\S]*?)\{%\s*\/table\s*%\}/g;
        result = result.replace(tableRegex, (match, tableContent) => {
          // tableContent contains lists separated by ---
          const sections = tableContent.split('---').map(s => s.trim()).filter(Boolean);
          if (sections.length === 0) return match;
          
          let markdownTable = '';
          sections.forEach((section, index) => {
            // Extract items starting with - 
            const items = section.split('\n').map(line => line.trim()).filter(line => line.startsWith('-')).map(line => line.substring(1).trim());
            
            if (index === 0) {
              markdownTable += '| ' + items.join(' | ') + ' |\n';
              markdownTable += '| ' + items.map(() => '---').join(' | ') + ' |\n';
            } else {
              markdownTable += '| ' + items.join(' | ') + ' |\n';
            }
          });
          return markdownTable;
        });
        return result;
      }
    }
  };
}
