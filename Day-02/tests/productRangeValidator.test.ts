import { checkRepeatedSequences, checkHasRepeatingPattern } from "../productRangeValidator";

describe("checkRepeatedSequences", () => {
      const rangeList: string[] = [`1000-1150`,`2000-2150`];
      const expectedObject = {
        "invalidInputSum": 6262
      };
  it("should return the accurate sum when provided string list", () => {
    expect(checkRepeatedSequences(rangeList)).toEqual(expectedObject);
  });
});

describe("checkHasRepeatingPattern", () => {
  it("should return true when passed a number with a repeating pattern", () => {
    expect(checkHasRepeatingPattern(1212)).toBe(true);
  });
});

describe("checkHasRepeatingPattern", () => {
  it("should return false when passed a number that does not have a repeating pattern", () => {
    expect(checkHasRepeatingPattern(12345)).toBe(false);
  });
});