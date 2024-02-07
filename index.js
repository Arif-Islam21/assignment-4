function calculateMoney(ticketSale) {
  const ticketPrice = 120;
  const lunchMoney = 50;
  const stuff = 8;
  const gateman = 500;
  const expenses = gateman + stuff * lunchMoney;
  const earning = ticketSale * ticketPrice;
  const saving = earning - expenses;
  return saving;
}
const result = calculateMoney(93);
console.log(result);
