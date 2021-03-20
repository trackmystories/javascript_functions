// replace an array with different values in a list

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
