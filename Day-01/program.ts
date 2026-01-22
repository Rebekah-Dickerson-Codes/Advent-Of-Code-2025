import {processDialTurns} from "./dial";
import * as fs from 'fs';

    const filePath: string = 'turns.txt';
    const content: string = fs.readFileSync(filePath, 'utf-8');
    const dialTurns: string[] = content.split(/\r?\n/);

    let elfWords = processDialTurns(dialTurns);

    console.log(`The elven password should be: ${elfWords.zeroCounter}`);

