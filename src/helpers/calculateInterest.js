export const calculateInterest = (amount, period, maxTime) => {
  let months = [0, maxTime]
  let interest = [6,8]

  if (amount && period) {
    console.log(amount, period);
    if (amount >= 0 && amount < 50000) {
      interest = [6,8]
    } else if (amount >= 50000 && amount < 150000 ) {
      interest = [5,7]
    } else if (amount >= 150000 && amount < 500000) {
      interest = [4,6]
    }
  }

  let steps = months[1] - months[0]
  let a = (interest[1] - interest[0]) / steps;

  let b = interest[0] - (a * months[0])

  let calculatedInterest = a * period + b
  console.log(calculatedInterest);
  return calculatedInterest
}
