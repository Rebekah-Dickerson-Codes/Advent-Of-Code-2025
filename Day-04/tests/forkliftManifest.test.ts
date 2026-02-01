import {determineIfForkliftCanAccess, buildPaperGrid} from "../forkliftManifest";
const charToCheck = '@';

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


describe("buildPaperGrid", () => {
    const fullInput: string[] = ['.@@@.', '.@@@.', '.@@@.'];
    const expectedTotal = 5;
  it("should accurately return number of surrounding chars in adjascent spaces", () => {
    expect(buildPaperGrid(fullInput, 0, 2, charToCheck)).toEqual(expectedTotal);
  });
});

describe("buildPaperGrid", () => {
    const fullInput: string[] = ['.@@@.', '.@@@.', '.@@@.'];
    const expectedTotal = 8;
  it("should accurately return number of surrounding chars when targeted char is fully surrounded", () => {
    expect(buildPaperGrid(fullInput, 1, 2, charToCheck)).toEqual(expectedTotal);
  });
});

describe("buildPaperGrid", () => {
    const fullInput: string[] = ['.....', '.....', '.....'];
    const expectedTotal = 0;
  it("should accurately return number of surrounding chars in adjascent spaces when char does not exist", () => {
    expect(buildPaperGrid(fullInput, 2, 2, charToCheck)).toEqual(expectedTotal);
  });
});
