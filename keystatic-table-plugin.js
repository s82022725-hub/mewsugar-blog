export default function keystaticTablePlugin() {
  return {
    name: 'keystatic-table-plugin',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.mdoc') && !id.endsWith('.md')) return null;

      // Extract {% table %} blocks
      const tableRegex = /{% table %}([\s\S]*?){% \/table %}/g;
      
      let newCode = code.replace(tableRegex, (match, innerContent) => {
        // Split by row
        const rowRegex = /{% tableRow %}([\s\S]*?){% \/tableRow %}/g;
        let rows = [];
        let rowMatch;
        while ((rowMatch = rowRegex.exec(innerContent)) !== null) {
          const rowContent = rowMatch[1];
          // Split by cell
          const cellRegex = /{% tableCell.*?%}([\s\S]*?){% \/tableCell %}/g;
          let cells = [];
          let cellMatch;
          while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
            let text = cellMatch[1].trim();
            // Replace newlines inside cell with <br/> to keep valid markdown table format
            text = text.replace(/\n/g, '<br/>');
            cells.push(text);
          }
          rows.push(cells);
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
