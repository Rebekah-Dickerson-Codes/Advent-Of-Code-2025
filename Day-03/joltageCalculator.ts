type JoltageState = {
    totalJoltage: number;
}

type BatteryState = {
    batteryTotal: number;
}

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

export function setBatteryState(numberList: number[]): BatteryState{
    let biggestNumber = Math.max(...numberList);
    let biggestNumberString = biggestNumber.toString();
    let biggestNumIndex = numberList.indexOf(biggestNumber);

    //check to see if biggest number is last in list
    //if it is, find next biggest number in list and check sequence after it
    if (numberList.length - 1 === biggestNumIndex){
        const filteredNumberList = numberList.filter(
        (num => num !== biggestNumber));
        biggestNumber = Math.max(...filteredNumberList);
        biggestNumberString = biggestNumber.toString();
        biggestNumIndex = numberList.indexOf(biggestNumber);
    }

    //filter to only numbers AFTER index of largest number
    const numListWithMaxRemoved = numberList.filter(
        (_, index) => index > biggestNumIndex);

        console.log(numListWithMaxRemoved);

    const secondBiggestNumber = Math.max(...numListWithMaxRemoved);
    const secondBiggestNumberString = secondBiggestNumber.toString();
    const combinedBatteryJolts = biggestNumberString + secondBiggestNumberString;

    return {
        batteryTotal: parseInt(combinedBatteryJolts)
    } 

}