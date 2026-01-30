import * as fs from 'fs';

    const filePath: string = 'input.txt';
    const content: string = fs.readFileSync(filePath, 'utf-8');
    const cleanedData = content.replace(/\r/g, '');
    const rows = content.split('\n');

    const grid: string[][] = [];
    for (let i = 0; i < rows.length; i += 3) {
    grid.push(rows.slice(i, i + 3));
    }

    console.log(grid);