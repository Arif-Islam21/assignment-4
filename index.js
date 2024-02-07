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

function password(obj) {
  if (obj.birthYear.toString().length !== 4) {
    return "undifined";
  } else {
    const firstName = obj.name;
    const birth = obj.birthYear;
    const site = obj.siteName;
    const firstUp = site[0].toUpperCase() + site.slice(1);
    const result = `${firstUp}#${firstName}@${birth}`;
    return result;
  }
}

const user = { name: "maisha", birthYear: 2002 };
// const user = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
const result = password(user);
console.log(result);
