import * as fs from 'fs';
import {checkRepeatedSequences} from "./productRangeValidator";

    const filePath: string = 'smallDataSetTestRange.txt';
    const content: string = fs.readFileSync(filePath, 'utf-8');
    //parse this to int and then process 
    const rangeList: string[] = content.split(",");

    console.log(`content looka like dis ${content}`);

    const InvalidInputFinalSum = checkRepeatedSequences(rangeList);

    //maybe add some tests with the small Data Range to see if this actually works later