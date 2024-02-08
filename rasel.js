function monthlySavings(allPayments, livingCost) {
  if (!allPayments) {
    return "there is no peyment";
  } else if (!livingCost) {
    return "there is no living cost";
  } else if (Array.isArray(allPayments) === false) {
    return "please return an array";
  } else if (livingCost < 0) {
    return "negative value not accepted";
  }
  let totalMoney = 0;
  const moneyArray = [];
  for (let i = 0; i < allPayments.length; i++) {
    if (allPayments[i] < 0) {
      return "negative value not accepted as payment";
    } else if (
      typeof allPayments[i] !== "number" ||
      isNaN(allPayments[i]) === true
    ) {
      return "invalid number";
    } else if (allPayments[i] < 3000) {
      moneyArray.push(allPayments[i]);
    } else if (allPayments[i] >= 3000) {
      let tax = (allPayments[i] * 20) / 100;
      const taxSubtract = allPayments[i] - tax;
      moneyArray.push(taxSubtract);
    }
  }
  for (let i = 0; i < moneyArray.length; i++) {
    totalMoney += moneyArray[i];
  }
  console.log(totalMoney);
}
const payment = [1000, 1500, 3000];
const cost = 2500;
const calling = monthlySavings(payment, cost);
console.log(calling);
