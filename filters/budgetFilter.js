/**
 *  Simple budget Budget filter.
 * @params  {object} = data array of key value pairs price for price, fr for fruits
 * @params  {number} = input b for budget
 * @params  {number} = filter items if item to price is less than or equal to input
 * @return  {string} = return items within the specific price range
 */

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
