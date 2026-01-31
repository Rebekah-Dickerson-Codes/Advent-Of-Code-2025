import {determineIfForkliftCanAccess} from "../forkliftManifest";

describe("determineIfForkliftCanAccess", () => {
    const layoutList: string[] = ['..@..', '@.@..', '...@@'];
    const expectedTotal = 5;
  it("should accurately return ALL towels n grid as available for pickup", () => {
    expect(determineIfForkliftCanAccess(layoutList)).toEqual(expectedTotal);
  });
});

describe("determineIfForkliftCanAccess", () => {
    const layoutList: string[] = ['.@@@.', '.@@@.', '.@@@.'];
    const expectedTotal = 4;
  it("should accurately return ONLY towels in grid available for pickup", () => {
    expect(determineIfForkliftCanAccess(layoutList)).toEqual(expectedTotal);
  });
});

describe("determineIfForkliftCanAccess", () => {
    const layoutList: string[] = ['.....', '.....', '.....'];
    const expectedTotal = 0;
  it("should accurately return NO towels in grid available for pickup", () => {
    expect(determineIfForkliftCanAccess(layoutList)).toEqual(expectedTotal);
  });
});
