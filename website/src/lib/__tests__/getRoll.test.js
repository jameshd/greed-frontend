import getRoll from "../getRoll";

describe("Get Roll Tests", () => {
  let roll;
  beforeEach(() => {
    roll = getRoll();
  });
  it("should produce a list of 5 numbers", () => {
    expect(roll).toHaveLength(5);
  });

  it("should produce numbers between 1 and 6", () => {
    roll.forEach((item) => {
      expect(item).toBeLessThanOrEqual(6);
      expect(item).toBeGreaterThanOrEqual(1);
    });
  });
});
