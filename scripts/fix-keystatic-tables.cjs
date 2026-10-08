const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const tableRegex = /{% table %}([\s\S]*?){% \/table %}/g;
            let changed = false;
            let newContent = content.replace(tableRegex, (match, innerContent) => {
                changed = true;
                const rawRows = innerContent.split(/^---$/m);
                let rows = [];
                for (const rawRow of rawRows) {
                    const cells = [];
                    const lines = rawRow.split('\n');
                    let currentCell = null;
                    for (let line of lines) {
                        if (line.trim() === '') continue;
                        if (line.startsWith('- ') || line === '-') {
                            if (currentCell !== null) cells.push(currentCell.replace(/\n/g, '<br/>'));
                            currentCell = line.startsWith('- ') ? line.substring(2).trim() : '';
                        } else if (currentCell !== null) {
                            currentCell += ' ' + line.trim();
                        }
                    }
                    if (currentCell !== null) cells.push(currentCell.replace(/\n/g, '<br/>'));
                    if (cells.length > 0) rows.push(cells);
                }
                if (rows.length === 0) return match;
                const numCols = Math.max(...rows.map(r => r.length));
                let markdownTable = '\n';
                const headerCells = rows[0].map(c => c || ' ');
                while (headerCells.length < numCols) headerCells.push(' ');
                markdownTable += '| ' + headerCells.join(' | ') + ' |\n';
                markdownTable += '|' + Array(numCols).fill('---').join('|') + '|\n';
                for (let i = 1; i < rows.length; i++) {
                    const bodyCells = rows[i].map(c => c || ' ');
                    while (bodyCells.length < numCols) bodyCells.push(' ');
                    markdownTable += '| ' + bodyCells.join(' | ') + ' |\n';
                }
                return markdownTable + '\n';
            });
            if (changed) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Fixed tables in ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(process.cwd(), 'src/content/blog'));
