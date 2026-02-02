import { calculateRewardPoints } from "./rewards";

describe("calculateRewardPoints", () => {
  test("returns 0 for amounts <= 50", () => {
    expect(calculateRewardPoints(0)).toBe(0);
    expect(calculateRewardPoints(49)).toBe(0);
    expect(calculateRewardPoints(50)).toBe(0);
  });

  test("returns correct points for amounts between 50 and 100", () => {
    expect(calculateRewardPoints(51)).toBe(1); // 51 -> 1 point
    expect(calculateRewardPoints(75)).toBe(25); // 75 -> 25 points
    expect(calculateRewardPoints(100)).toBe(50); // 100 -> 50 points
  });

  test("returns correct points for amounts over 100", () => {
    expect(calculateRewardPoints(101)).toBe(52); // 50 + 2*1
    expect(calculateRewardPoints(120)).toBe(90); // 50 + 2*20
    expect(calculateRewardPoints(200)).toBe(250); // 50 + 2*100
  });

  test("floors decimal amounts (points per whole dollar)", () => {
    expect(calculateRewardPoints(120.99)).toBe(90); // floors to 120
    expect(calculateRewardPoints(99.99)).toBe(49); // floors to 99
    expect(calculateRewardPoints(50.99)).toBe(0); // floors to 50
  });

  test("handles negative values safely", () => {
    expect(calculateRewardPoints(-10)).toBe(0);
  });
});
