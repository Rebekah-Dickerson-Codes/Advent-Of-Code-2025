import * as fs from 'fs';
import {getFreshIngredientCount} from "./freshnessChecker";


const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const rows: string[] = content.trim().split(/\r?\n/);

const freshnessList: string[] = rows.filter(string => string.includes('-'));

const ingredientNum: string[] = rows.filter(string => !string.includes('-'));;

const freshIngredientCount = getFreshIngredientCount(freshnessList, ingredientNum);

console.log(`Total Fresh Ingredients: ${freshIngredientCount}`);