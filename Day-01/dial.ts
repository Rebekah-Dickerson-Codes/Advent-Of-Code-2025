import {match} from "ts-pattern";

type DialResult = {
    position: number;
    zeroCounter: number;
}

enum Direction {
    L = "L",
    R = "R",
}

export function processDialTurns(inputs: string[]): DialResult{
    return inputs.reduce(
        (dial, input) => {
            const direction = input.charAt(0).toUpperCase() as Direction;
            const value = parseInt(input.substring(1), 10);

            const position = match(direction)
            .with(Direction.L, () => {
                const rawPosition = (dial.position - value) % 100;
                return rawPosition <  0 ? rawPosition + 100 : rawPosition; 
            })
            .with(Direction.R, () => {
                return (dial.position + value) % 100;
            })
            .exhaustive();

            return {
                position,
                zeroCounter: position === 0 ? dial.zeroCounter + 1 : dial.zeroCounter,
            }
        },
        {position: 50, zeroCounter: 0}
    )
}