// score comparison for two farms producing fruits per tree

// Farm one
const farmNorth = [40, 50, 40, 60, 39, 80];
const farmSouth = [60, 29, 39, 20, 39, 30];
const farmEast = [20, 38, 79, 40, 59, 59];
const farmWest = [84, 29, 39, 80, 09, 88];

// Farn two
const northFarm = [50, 60, 70, 80, 29, 80];
const southFarm = [50, 49, 69, 20, 79, 90];
const eastFarm = [20, 88, 89, 90, 99, 29];
const westFarm = [74, 89, 72, 30, 79, 98];

let print = console.log;

// sum of fruits per batch
function sumPerBatch(a, b, c, d) {
  const reducer = (acc, cur) => acc + cur;

  let north = a.reduce(reducer);
  let south = b.reduce(reducer);
  let east = c.reduce(reducer);
  let west = d.reduce(reducer);

  return new Array(north, south, east, west);
}

// Farm one
//[ 309, 217, 295, 329 ]

// Farm two
//[ 369, 357, 415, 442 ]

print(sumPerBatch(farmNorth, farmSouth, farmEast, farmWest));
print(sumPerBatch(northFarm, southFarm, eastFarm, westFarm));

const farmOne = sumPerBatch(farmNorth, farmSouth, farmEast, farmWest);
const farmTwo = sumPerBatch(northFarm, southFarm, eastFarm, westFarm);

// Score ranking comparing two farms

function compare(a, b) {
  const comparison = [0, 0];
  for (let i = 0; i <= a.length; i++) {
    if (a[i] > b[i]) {
      comparison[0] = +1;
    } else if (a[i] < b[i]) {
      comparison[1] = +1;
    } else {
      continue;
    }
  }
  return comparison;
}

// the rank shows that farmTwo scores higher the farmOne in total produce.

print(compare(farmOne, farmTwo));
