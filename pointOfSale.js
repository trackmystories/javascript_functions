// point of sale concept for clothing store that sells t shirts.

let print = console.log;

const date = new Date().toISOString().split("T")[0];
const inventory = [
  {
    product: "TShirt",
    price: 20,
    id: 1,
    color: "blue",
    size: "L",
    offer: null,
    inStock: 2,
  },
  {
    product: "TShirt",
    price: 30,
    id: 2,
    color: "green",
    size: "S",
    offer: null,
    inStock: 1,
  },
  {
    product: "TShirt",
    price: 15,
    id: 3,
    color: "white",
    size: "XXL",
    offer: "2%",
    inStock: 0,
  },
  {
    product: "TShirt",
    price: 20,
    id: 4,
    color: "black",
    size: "M",
    discount: "4%",
    inStock: 4,
  },
  {
    product: "TShirt",
    price: 20,
    id: 5,
    color: "blue",
    size: "M",
    discount: "4%",
    inStock: 4,
  },
  {
    product: "TShirt",
    price: 35,
    id: 6,
    color: "pink",
    size: "XL",
    discount: "2%",
    inStock: 3,
  },
];

// map all inventory
function allInventory() {
  let entire = inventory.map((item) => item);
  return entire;
}

// map all inStock
function inStockInventory() {
  let allInStock = inventory.filter((item) => {
    let i = item.inStock > 0;
    return i;
  });
  return allInStock;
}

// filter a specific item in the inventory
function findSize(s) {
  let product = inventory.filter((item) => {
    let i = item.size == s;
    return i;
  });
  return findSize;
}

print(inStockInventory());
print(allInventory());
print(findSize("M"));
