import * as fs from 'fs';
import {determineIfForkliftCanAccess} from "./forkliftManifest";

    const filePath: string = 'input.txt';
    const content: string = fs.readFileSync(filePath, 'utf-8');
    const rows: string[] = content.trim().split(/\r?\n/);

    const value = determineIfForkliftCanAccess(rows);

    console.log(`Final Value of Towels that can be picked up using froklift: ${value}`);