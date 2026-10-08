export default function keystaticTablePlugin() {
  return {
    name: 'keystatic-table-plugin',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) return null;

      // Extract {% table %} blocks
      const tableRegex = /{% table %}([\s\S]*?){% \/table %}/g;
      
      let newCode = code.replace(tableRegex, (match, innerContent) => {
        const rawRows = innerContent.split(/^---$/m);
        let rows = [];
        
        for (const rawRow of rawRows) {
            const cells = [];
            const lines = rawRow.split('\n');
            let currentCell = null;
            for (let line of lines) {
                if (line.trim() === '') continue;
                
                if (line.startsWith('- ') || line === '-') {
                    if (currentCell !== null) {
                        cells.push(currentCell.replace(/\n/g, '<br/>'));
                    }
                    currentCell = line.startsWith('- ') ? line.substring(2).trim() : '';
                } else if (currentCell !== null) {
                    currentCell += ' ' + line.trim();
                }
            }
            if (currentCell !== null) {
                cells.push(currentCell.replace(/\n/g, '<br/>'));
            }
            if (cells.length > 0) {
                rows.push(cells);
            }
        }

        if (rows.length === 0) return match;

        // Ensure all rows have same number of columns
        const numCols = Math.max(...rows.map(r => r.length));
        
        let markdownTable = '\n';
        
        // Header
        const headerCells = rows[0].map(c => c || ' ');
        while (headerCells.length < numCols) headerCells.push(' ');
        markdownTable += '| ' + headerCells.join(' | ') + ' |\n';
        
        // Divider
        markdownTable += '|' + Array(numCols).fill('---').join('|') + '|\n';
        
        // Body
        for (let i = 1; i < rows.length; i++) {
          const bodyCells = rows[i].map(c => c || ' ');
          while (bodyCells.length < numCols) bodyCells.push(' ');
          markdownTable += '| ' + bodyCells.join(' | ') + ' |\n';
        }
        
        return markdownTable + '\n';
      });

      return {
        code: newCode,
        map: null
      };
    }
  };
}
