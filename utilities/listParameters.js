/**
 * replace an array with different values in a list

 * @params  {object} = value is data

 * function one replaceItems()
 * @params  {string} = map through data and replacing each alphabet with a that sums up to a sentence.
 * @return  {object} = return new array

 * function one ifValueIsTrue()
 * @params  {number} = js conditional
 * @return  {string} = returns truthy values if condition is equal to input
 */

let print = console.log;
const value = [
  { type: "A" },
  { type: "B" },
  { type: "C" },
  { type: "D" },
  { type: "E" },
  { type: "F" },
];

function replaceItems() {
  let mappedItems = value.map((item) =>
    item.type
      .replace("A", "Hello")
      .replace("B", "World")
      .replace("C", "This")
      .replace("D", "Is")
      .replace("E", "An")
      .replace("F", "Example")
  );
  return mappedItems;
}

function ifValueIsTrue() {
  if (value[0].type === "A") {
    a = "Hello";
  }
  if (value[1].type === "C") {
    c = " People";
  } else {
    c = " World";
  }
  return a + c;
}

print(replaceItems());
print(ifValueIsTrue());
