// Budget filter.

let print = console.log;

const data = [
  { price: 4, fr: "bananas" },
  { price: 8, fr: "oranges" },
  { price: 6, fr: "grapes" },
  { price: 4, fr: "apples" },
  { price: 5, fr: "mangos" },
];

function filterByPriceLessThan(b) {
  const filteredData = data.filter((item) => {
    let c = item.price <= b;
    return c;
  });
  return filteredData;
}

print(filterByPriceLessThan(5));
