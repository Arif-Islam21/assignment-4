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
  if (typeof name !== "string") {
    return "invalid";
  } else {
    const lower = name.toLowerCase();
    const last = lower.charAt(lower.length - 1);
    if (
      last === "a" ||
      last === "y" ||
      last === "i" ||
      last === "e" ||
      last === "o" ||
      last === "u" ||
      last === "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}

function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    return "Invalid Array";
  } else {
    const numbers = [];
    for (const item of array) {
      if (Number.isNaN(item) === false && typeof item === "number") {
        //   console.log("found numbver", item);
        numbers.push(item);
      }
    }
    return numbers;
  }
}

const arr = { num: [1, 2, 3] };
const callArr = deleteInvalids(arr);
console.log(callArr);
