type InvalidRangeState = {
    invalidInputSum: number;
}

export function checkRepeatedSequences(inputs: string[]): InvalidRangeState{

    return inputs.reduce(
        (rangeInput, input) => {
            const [intStart, intEnd] = input.split("-").map(Number);
            //get list of all numbers in range
            console.log(`StartNum: ${intStart}`);
            console.log(`EndNum: ${intEnd}`);
            const numbersInRange: number[] = [];
            for (let i = intStart; i <= intEnd; i++){
                numbersInRange.push(i);
            }

            const sumForRange = numbersInRange.reduce((sum, num) => {
                return checkHasRepeatingPattern(num) ? sum + num : sum;
            },0);
            
            return { invalidInputSum: rangeInput.invalidInputSum + sumForRange}
        },
        {invalidInputSum: 0 }
    )}

export function checkHasRepeatingPattern(numberInRange: number):boolean {
    //is there an easier way to do this?
    //surely there is
    const stringNumberInRange = numberInRange.toString();
    const numLength = stringNumberInRange.length;
    if (numLength %2 !== 0) return false;
    const halfNum = numLength /2;
    const firstHalfOfNum = stringNumberInRange.substring(0, halfNum);
    const secondHalfOfNum = stringNumberInRange.substring(halfNum);

    return firstHalfOfNum === secondHalfOfNum;
}