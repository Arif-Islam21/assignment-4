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
        numbers.push(item);
      }
    }
    return numbers;
  }
}

function password(obj) {
  if (obj.birthYear.toString().length !== 4 || Object.keys(obj).length < 3) {
    return "invalid";
  } else {
    const firstName = obj.name;
    const birth = obj.birthYear;
    const site = obj.siteName;
    const firstUp = site[0].toUpperCase() + site.slice(1);
    const result = `${firstUp}#${firstName}@${birth}`;
    return result;
  }
}

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    const invalid = "invalid input";
    return invalid;
  } else {
    let pays = [];
    let totalEarning = 0;
    for (let payment of arr) {
      if (payment < 3000) {
        pays.push(payment);
      } else if (payment >= 3000) {
        const tax = payment * 0.2;
        const taxAfter = payment - tax;
        pays.push(taxAfter);
      }
    }
    for (const pay of pays) {
      totalEarning += pay;
    }
    const saving = totalEarning - livingCost;
    if (saving < 0) {
      return "earn more";
    } else {
      return saving;
    }
  }
}
