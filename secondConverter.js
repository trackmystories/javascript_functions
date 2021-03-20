// time calculator

let print = console.log;

//seconds to :

function secondToNanosecond(s) {
  let n = s * 1e9;
  return n;
}

function secondToMicrosecond(s) {
  let m = s * 1e6;
  return m;
}

function secondToMillisecond(s) {
  let ml = s * 1000;
  return ml;
}

function secondToMinute(s) {
  let m = s / 60;
  return m;
}

function secondToHour(s) {
  let h = s / 3600;
  return h;
}

function secondToDay(s) {
  let d = s / 86400;
  return d;
}

function secondToWeek(s) {
  let w = s / 604800;
  return w;
}

function secondToMonth(s) {
  let m = s / 2628e6;
  return m;
}

function secondToCalenderYear(s) {
  let c = s / 3154e7;
  return c;
}

function secondToDecade(s) {
  let d = s / 3154e8;
  return d;
}

function secondToCentury(s) {
  let d = s / 3154e9;
  return d;
}

// seconds
print(secondToNanosecond(1));
print(secondToMicrosecond(1));
print(secondToMillisecond(1));
print(secondToMinute(60));
print(secondToHour(1));
print(secondToDay(1));
print(secondToWeek(1));
print(secondToMonth(1));
print(secondToCalenderYear(1));
print(secondToDecade(1));
print(secondToCentury(1));
