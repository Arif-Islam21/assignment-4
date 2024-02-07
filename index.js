function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    const invalid = "Invalid Number";
    return invalid;
  } else {
    const ticketPrice = 120;
    const lunchMoney = 50;
    const stuff = 8;
    const gateman = 500;
    const expenses = gateman + stuff * lunchMoney;
    const earning = ticketSale * ticketPrice;
    const saving = earning - expenses;
    return saving;
  }
}

function checkName(name) {
  const lower = name.toLowerCase();
  const last = lower.charAt(lower.length - 1);
  if (last === "f") {
    console.log("I have got it");
  }
  //   console.log(lowerName);
  //   for (let i = 0; i < name.length; i++) {
  //     console.log(name[i]);
  //   }
}
const goodname = checkName("Ariful");
console.log(goodname);
