let print = console.log;

// Nanoseconds to :

function NanosecondToMicrosecond(n) {
  let m = n / 1000;
  return m;
}

function NanosecondToMillisecond(n) {
  let ml = n / 1e6;
  return ml;
}

function NanosecondToSecond(n) {
  let s = n / 1e9;
  return s;
}

function NanosecondToMinute(n) {
  let m = n / 6e10;
  return m;
}

function NanosecondToHour(s) {
  let h = s / 36e12;
  return h;
}

function NanosecondToDay(s) {
  let d = s / 864e13;
  return d;
}

function NanosecondToWeek(s) {
  let w = s / 6048e14;
  return w;
}

function NanosecondToMonth(s) {
  let m = s / 2628e15;
  return m;
}

function NanosecondToCalenderYear(s) {
  let c = s / 3154e16;
  return c;
}

function NanosecondToDecade(s) {
  let d = s / 3154e17;
  return d;
}

function NanosecondToCentury(s) {
  let d = s / 3154e18;
  return d;
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
