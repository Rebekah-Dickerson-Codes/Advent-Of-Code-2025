export function determineIfForkliftCanAccess(inputs: string[]): number {
    const paperChar = '@';
    let totalAccessiblePaper = inputs.reduce((total, row, rowIndex) => {
        const allOccurrencesInRow = findAllOccurrences(row, paperChar);
        const rowCount = allOccurrencesInRow.reduce((totalPaperInGrid, occIndx) => 
            totalPaperInGrid + (buildPaperGrid(inputs, rowIndex, occIndx, paperChar) < 4 ? 1 : 0)
        ,0);
        return total + rowCount;
        },0);

        console.log(totalAccessiblePaper);
        return totalAccessiblePaper;
    }

export function buildPaperGrid(fullInput: string[], checkedRowIndex: number, indexInStringToCheck: number, charToCheck: string): number{

    const offsets = [-1, 0 ,1];
    return offsets.reduce((sum, rowOffset) => {
        const row = fullInput[checkedRowIndex + rowOffset];
        if(!row){
            return sum; // skip if row above or below does not exist
        }
        return sum + offsets.reduce((rowSum, colOffset) => {
            if(colOffset === 0 && rowOffset ===0){
                return rowSum; // skip center
            }
            const c = indexInStringToCheck + colOffset;
                if(c < 0 || c >= row.length){
                    return rowSum;
                }
                return rowSum + (row[c] === charToCheck ? 1 : 0);
            },0);
        },0);
    }

function findAllOccurrences(str: string, searchValue: string): number[] {
  const indices: number[] = [];
  let i: number = -1;
  
  while ((i = str.indexOf(searchValue, i + 1)) !== -1) {
    indices.push(i);
  }
  
  return indices;
}