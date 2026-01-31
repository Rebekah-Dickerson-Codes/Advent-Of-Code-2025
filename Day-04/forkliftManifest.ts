export function determineIfForkliftCanAccess(inputs: string[]): number {
    const paperChar = '@';
    const totalRows = inputs.length;
    console.log(`totalRows: ${totalRows}`);
    let totalAccessiblePaper = 0;
    for (let i = 0; i < totalRows; i++ ){
        const allOccurrencesInRow = findAllOccurrences(inputs[i], paperChar);
        let totalPaperInGrid = 0;

        allOccurrencesInRow.forEach((index: number) => {
            //console.log(`checking ${index} instance in row ${i}`);
            totalPaperInGrid = BuildPaperGrid(inputs, i, index);
            //console.log(`total paper in grid: ${totalPaperInGrid}`);
            if(totalPaperInGrid < 4){
                totalAccessiblePaper = totalAccessiblePaper + 1;
            }
        });
    }
    console.log(totalAccessiblePaper);
    return totalAccessiblePaper;
}

//this is wild need to simplify somehow
function BuildPaperGrid(fullInput: string[], checkedRowIndex: number, indexInStringToCheck: number): number{
    const rowAbove = fullInput[checkedRowIndex - 1];
    const rowBelow = fullInput[checkedRowIndex + 1];
    const currentRow = fullInput[checkedRowIndex];
    let totalForGrid = 0;

    if(rowAbove === undefined){
        //just check currentRow and row below
        totalForGrid = currentRow[indexInStringToCheck -1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = currentRow[indexInStringToCheck +1] === '@' ? totalForGrid + 1 : totalForGrid + 0;

        totalForGrid = rowBelow[indexInStringToCheck -1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = rowBelow[indexInStringToCheck +1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = rowBelow[indexInStringToCheck] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        //console.log(`No row Above: ${totalForGrid}`)
        return totalForGrid;
    }
    if(rowBelow === undefined){
        //just check currentRow and row above
        totalForGrid = currentRow[indexInStringToCheck -1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = currentRow[indexInStringToCheck +1] === '@' ? totalForGrid + 1 : totalForGrid + 0;

        totalForGrid = rowAbove[indexInStringToCheck -1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = rowAbove[indexInStringToCheck +1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = rowAbove[indexInStringToCheck] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        //console.log(`No row Below: ${totalForGrid}`)
        return totalForGrid;
    }

        totalForGrid = currentRow[indexInStringToCheck -1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = currentRow[indexInStringToCheck +1] === '@' ? totalForGrid + 1 : totalForGrid + 0;

        totalForGrid = rowAbove[indexInStringToCheck -1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = rowAbove[indexInStringToCheck +1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = rowAbove[indexInStringToCheck] === '@' ? totalForGrid + 1 : totalForGrid + 0;

        totalForGrid = rowBelow[indexInStringToCheck -1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = rowBelow[indexInStringToCheck +1] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        totalForGrid = rowBelow[indexInStringToCheck] === '@' ? totalForGrid + 1 : totalForGrid + 0;
        //console.log(`All Row Check: ${totalForGrid}`)

    return totalForGrid;
}

function findAllOccurrences(str: string, searchValue: string): number[] {
  const indices: number[] = [];
  let i: number = -1;
  
  while ((i = str.indexOf(searchValue, i + 1)) !== -1) {
    indices.push(i);
  }
  
  return indices;
}