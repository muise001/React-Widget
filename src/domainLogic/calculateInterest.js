import { roundUpToTwoDecimals } from "../helpers";

export const calculateInterest = (amount, period, maxTime) => {
  const months = [0, maxTime];
  let interest = [6, 8];

  if (amount && period) {
    if (amount >= 0 && amount < 50000) {
      interest = [6, 8];
    } else if (amount >= 50000 && amount < 150000) {
      interest = [5, 7];
    } else if (amount >= 150000 && amount <= 500000) {
      interest = [4, 6];
    }
  }

  const steps = months[1] - months[0];
  const a = (interest[1] - interest[0]) / steps;

  const b = interest[0] - a * months[0];

  const calculatedInterest = a * period + b;

  return roundUpToTwoDecimals(calculatedInterest);
};
