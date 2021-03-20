// time calculator

let print = console.log;

//seconds to :

function secondToNanosecond(s) {
  let n = s * 1e9;
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToMicrosecond(s) {
  let m = s * 1e6;
  return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToMillisecond(s) {
  let ml = s * 1000;
  return ml.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToMinute(s) {
  let m = s / 60;
  return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToHour(s) {
  let h = s / 3600;
  return h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToDay(s) {
  let d = s / 86400;
  return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToWeek(s) {
  let w = s / 604800;
  return w.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToMonth(s) {
  let m = s / 2628e6;
  return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToCalenderYear(s) {
  let c = s / 3154e7;
  return c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToDecade(s) {
  let d = s / 3154e8;
  return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function secondToCentury(s) {
  let d = s / 3154e9;
  return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
