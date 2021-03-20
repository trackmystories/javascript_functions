// fuel economy per liter

let print = console.log;
const divisible2FuelEconomy = 2352;
const litrePer100KM = 100;

// kilometer Per Liter to Miles Per Gallon

function kPL2MPG(kpl) {
  let mpg = kpl * divisible2FuelEconomy;
  return mpg;
}

// kilometer Per Liter to Miles Per Gallon (Imperial)
//  divisible2FuelEconomy + 473 = 2,825;

function kPL2MPGI(kpl) {
  let divisibleImperial = divisible2FuelEconomy + 473;
  let mpgi = kpl * divisibleImperial;
  return mpgi;
}

// kilometer Per Liter to liter per 100 kilometer

function kPL2L100(kpl) {
  let l100 = litrePer100KM;
  let kmbyL = l100 / kpl;
  return kmbyL;
}

print(kPL2MPG(20));
print(kPL2MPGI(20));
print(kPL2L100(20));
