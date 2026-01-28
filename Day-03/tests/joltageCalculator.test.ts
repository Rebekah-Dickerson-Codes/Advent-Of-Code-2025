import {calculateJoltage, setBatteryState} from "../joltageCalculator";

describe("setBatteryState", () => {
    const numberList: number[] = [9,9,8,7,6,5,4,3];
    const expectedObject = {
        "batteryTotal": 99,
      };
  it("should handle numbers with same value if largest in sequence", () => {
    expect(setBatteryState(numberList)).toEqual(expectedObject);
  });
});

describe("setBatteryState", () => {
    const numberList: number[] = [3,3,3,3];
    const expectedObject = {
        "batteryTotal": 33
      };
  it("should handle when list has all same numbers", () => {
    expect(setBatteryState(numberList)).toEqual(expectedObject);
  });
});

describe("setBatteryState", () => {
    const numberList: number[] = [9,8,7,6,5,4,3];
    const expectedObject = {
        "batteryTotal": 98
      };
  it("should return two biggest numbers in list when in sequence", () => {
    expect(setBatteryState(numberList)).toEqual(expectedObject);
  });
});

describe("setBatteryState", () => {
    const numberList: number[] = [1,2,2,1,4,1,1,3,8,1];
    const expectedObject = {
        "batteryTotal": 81
      };
  it("should return largest numerical sequence possible from list", () => {
    expect(setBatteryState(numberList)).toEqual(expectedObject);
  });
});

describe("setBatteryState", () => {
    const numberList: number[] = [1,2,3,4,1,2,3,9];
    const expectedObject = {
        "batteryTotal": 49
      };
  it("if biggest number is at end of sequence, should find next biggest number to form sequence with", () => {
    expect(setBatteryState(numberList)).toEqual(expectedObject);
  });
});

describe("setBatteryState", () => {
    const numberList: number[] = [1,2,3,4,1,2,8,9];
    const expectedObject = {
        "batteryTotal": 89
      };
  it("if biggest number is at end of sequence, and next biggest is 2nd from end, should handle", () => {
    expect(setBatteryState(numberList)).toEqual(expectedObject);
  });
});

describe("calculateJoltage", () => {
    const numberList: string[] = [`912345678`, `1283654`, `77777771234`, `123481565`];
    const expectedObject = {
        "totalJoltage": 347,
      };
  it("should return total value of joltage", () => {
    expect(calculateJoltage(numberList)).toEqual(expectedObject);
  });
});
