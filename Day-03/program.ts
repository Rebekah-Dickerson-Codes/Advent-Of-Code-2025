import * as fs from 'fs';
import {calculateJoltage} from "./joltageCalculator";

    const filePath: string = 'input.txt';
    const content: string = fs.readFileSync(filePath, 'utf-8');
    const numList: string[] = content.split(/\r?\n/);

    const finalJoltage = calculateJoltage(numList);

    console.log(`final Joltage ${finalJoltage.totalJoltage}`);


