// currencyFormatter

let log = console.log;

function addComma(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

log(addComma(1000.1));
log(addComma(10000.2));
log(addComma(100000.3));
log(addComma(1000000.4));
log(addComma(10000000.5));
log(addComma(100000000.6));
log(addComma(1000000000.7));
log(addComma(10000000000.8));
log(addComma(100000000000.9));

function addDollar(number) {
  return "$" + number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "$1,");
}

log(addDollar(1000.1));
log(addDollar(10000.2));
log(addDollar(100000.3));
log(addDollar(1000000.4));
log(addDollar(10000000.5));
log(addDollar(100000000.6));
log(addDollar(1000000000.7));
log(addDollar(10000000000.8));
log(addDollar(100000000000.9));

function addEuroWithDot(number) {
  return "€" + number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "$1.");
}

log(addEuroWithDot(1000.1));
log(addEuroWithDot(10000.2));
log(addEuroWithDot(100000.3));
log(addEuroWithDot(1000000.4));
log(addEuroWithDot(10000000.5));
log(addEuroWithDot(100000000.6));
log(addEuroWithDot(1000000000.7));
log(addEuroWithDot(10000000000.8));
log(addEuroWithDot(100000000000.9));

function addSterling(number) {
  return "£" + number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "$1,");
}

log(addSterling(1000.1));
log(addSterling(10000.2));
log(addSterling(100000.3));
log(addSterling(1000000.4));
log(addSterling(10000000.5));
log(addSterling(100000000.6));
log(addSterling(1000000000.7));
log(addSterling(10000000000.8));
log(addSterling(100000000000.9));
