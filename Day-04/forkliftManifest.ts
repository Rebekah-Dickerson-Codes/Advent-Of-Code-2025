export function calculateJoltage(inputs: string[]) : JoltageState {
    return inputs.reduce(
        (joltage, input) => {
            const intArray = input.split("").reduce((num, char) => {
                num.push(parseInt(char));
                return num;
            }, [] as number[])

            const batteryState = setBatteryState(intArray);

            return {totalJoltage: joltage.totalJoltage + batteryState.batteryTotal}
        },
        {totalJoltage: 0}
    )
}