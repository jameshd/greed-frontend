import calculateScore from "../calculateScore";
describe("CalculateScore", () => {
  it("should not allow null values", () => {
    expect(() => calculateScore(null)).toThrowError();
  });

  it("should not allow empty arrays", () => {
    expect(() => calculateScore([])).toThrowError();
  });

  it("should not allow more than five numbers in a rolls", () => {
    expect(() => calculateScore([1, 2, 3, 4, 5, 6])).toThrowError();
  });

  it("should calculate a zero scoring roll", () => {
    expect(calculateScore([4, 4, 2, 2, 3])).toEqual(0);
  });

  it("should give 50 for one fives", () => {
    expect(calculateScore([5, 2, 3, 4, 2])).toEqual(50);
  });

  it("should give 100 for a single one", () => {
    expect(calculateScore([1, 2, 3, 4, 2])).toEqual(100);
  });

  it("should give 150 for a single one and five", () => {
    expect(calculateScore([1, 2, 3, 5, 2])).toEqual(150);
  });

  it("should give 1000 for a triple ones", () => {
    expect(calculateScore([1, 1, 1, 4, 2])).toEqual(1000);
  });

  it("should calculate all triples correctly", () => {
    expect(calculateScore([2, 2, 2, 4, 3])).toEqual(200);
    expect(calculateScore([2, 2, 3, 3, 3])).toEqual(300);
    expect(calculateScore([2, 2, 4, 4, 4])).toEqual(400);
    expect(calculateScore([2, 2, 5, 5, 5])).toEqual(500);
    expect(calculateScore([2, 2, 6, 6, 6])).toEqual(600);
  });

  it("should calculate bigger totals correctly", () => {
    expect(calculateScore([1, 1, 1, 5, 5])).toEqual(1100);
    expect(calculateScore([1, 1, 1, 1, 5])).toEqual(1150);
    expect(calculateScore([1, 1, 1, 1, 1])).toEqual(1200);
  });
});
