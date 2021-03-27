/**
 *  temperature calculator
 * @params  {number} = input c for celsius & f for fahreheit
 * @params  {number} = formula celcius to fahreheit (0°C × 9/5) + 32 = 32°F
 * @params  {number} = formula fahreheit to celcius (0°F − 32) × 5/9 = -17.78°C
 * @params  {number} = formula fahreheit to kelvin (0°F − 32) × 5/9 + 273.15 = 255.372K
 * @params  {number} = formula celcius to kelvin 0°C + 273.15 = 273.15K
 * @return  {string} = print a string formated using regex
 */

let print = console.log;

function celsiusToFahreheit(f) {
  let c = (f * 9) / 5;
  let c2f = c + 32;
  return c2f.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function fahreheitToCelsius(c) {
  let f = c - 32;
  let f2c = (f * 5) / 9;
  return f2c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function fahreheitToKelvin(f) {
  let k = f - 32;
  let k2 = (k * 5) / 9;
  let f2k = k2 + 273.15;
  return f2k.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function celsiusToKelvin(c) {
  let k = c + 273.15;
  return k.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

print(celsiusToFahreheit(10));

print(fahreheitToCelsius(50));

print(fahreheitToKelvin(50));

print(celsiusToKelvin(30));
