interface DialResult{
    endPosition: number,
    zeroCounter: number
}

export function processDialTurns(inputs: string[]): DialResult{
    //start position is first in list
    let currentPosition = parseInt(inputs[0].slice(1));

    let zeroCounter = 0;

    for(const input of inputs){
        const direction = input.charAt(0).toUpperCase(); 
        const value = parseInt(input.substring(1), 10);

        if (isNaN(value)){
            throw new Error(`Invalid input, should be in format L12`);
        }

        if(direction === `L`){
            //subtract and wrap
            currentPosition = (currentPosition - value) %100;
            if(currentPosition < 0){
                currentPosition += 100;
            }
        }
        else if (direction === `R`){
            //add and wrap
            currentPosition = (currentPosition + value) %100;
        }
        else{
            throw new Error(`invalid direction, only inputs should be L or R`)
        }

        if (currentPosition === 0){
        zeroCounter++;
        }
    }

    console.log(`solutions should be ${zeroCounter}`);
    return {
        endPosition: currentPosition,
        zeroCounter
    }

    //do this work??
}