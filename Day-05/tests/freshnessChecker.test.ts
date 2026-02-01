import {getFreshIngredientCount, checkIsfresh} from "../freshnessChecker";

describe("getFreshIngredientCount", () => {
    const freshRanges: string[] = ['1-10', '15-20', '55-72'];
    const ingredients: string[] = ['7', '14', '18', '30', '60'];
    const expectedTotal = 3;
  it("should return count of ingredients within range list", () => {
    expect(getFreshIngredientCount(freshRanges, ingredients)).toEqual(expectedTotal);
  });
});


describe("getFreshIngredientCount", () => {
    const freshRanges: string[] = ['1-10', '15-20', '55-72'];
    const ingredients: string[] = ['11', '14', '29', '30', '100'];
    const expectedTotal = 0;
  it("should return 0 when no ingredients are within range", () => {
    expect(getFreshIngredientCount(freshRanges, ingredients)).toEqual(expectedTotal);
  });
});

describe("checkIsfresh", () => {
    const freshRanges: string[] = ['1-10', '15-20', '55-72'];
    const ingredient = 7;
  it("should return true when ingredientId is within one of the ranges", () => {
    expect(checkIsfresh(freshRanges, ingredient)).toEqual(true);
  });
});

describe("checkIsfresh", () => {
    const freshRanges: string[] = ['1-10', '15-20', '55-72'];
    const ingredient = 13;
  it("should return false when ingredientId is NOT within one of the ranges", () => {
    expect(checkIsfresh(freshRanges, ingredient)).toEqual(false);
  });
});