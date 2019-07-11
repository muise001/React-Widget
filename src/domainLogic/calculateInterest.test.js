import { calculateInterest } from "./index";

test("if loan = 500.000, time = maxTime, interest should be 6", () => {
  expect(calculateInterest(500000, 60, 60)).toBe(6);
});

test("if loan = 300.000, time = half of maxTime, interest should be 5", () => {
  expect(calculateInterest(300000, 30, 60)).toBe(5);
});

test("if loan = 125.000, time = half of maxTime, interest should be 6", () => {
  expect(calculateInterest(125000, 18, 36)).toBe(6);
});

test("if loan = 25.000, time = half of maxTime, interest should be 6", () => {
  expect(calculateInterest(25000, 18, 36)).toBe(7);
});

test("if loan = 5.000, time = maxTime, interest should be 8", () => {
  expect(calculateInterest(5000, 36, 36)).toBe(8);
});
