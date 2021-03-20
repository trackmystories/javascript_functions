let print = console.log;

// Nanoseconds to :

function NanosecondToMicrosecond(n) {
  let m = n / 1000;
  return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToMillisecond(n) {
  let ml = n / 1e6;
  return ml.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToSecond(n) {
  let s = n / 1e9;
  return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToMinute(n) {
  let m = n / 6e10;
  return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToHour(s) {
  let h = s / 36e12;
  return h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToDay(s) {
  let d = s / 864e13;
  return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToWeek(s) {
  let w = s / 6048e14;
  return w.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToMonth(s) {
  let m = s / 2628e15;
  return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToCalenderYear(s) {
  let c = s / 3154e16;
  return c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToDecade(s) {
  let d = s / 3154e17;
  return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NanosecondToCentury(s) {
  let d = s / 3154e18;
  return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Nanoseconds

print(NanosecondToMicrosecond(1));
print(NanosecondToMillisecond(1));
print(NanosecondToMinute(60));
print(NanosecondToHour(1));
print(NanosecondToDay(1));
print(NanosecondToWeek(1));
print(NanosecondToMonth(1));
print(NanosecondToCalenderYear(1));
print(NanosecondToDecade(1));
print(NanosecondToCentury(1));
