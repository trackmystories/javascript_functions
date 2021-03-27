/**
 * score comparison for two farms producing fruits per tree in different localities
 * @params  {object} = data include 8 sets of arrays farm one & farm two.
 * @params  {object} = sorted data = [A[0], A[1], A[2], A[3], A[4], A[5]]
 * @params  {object} = comparison between 2 farms each with 4 sets of arrays
 * @params  {object} = direction relative to the geographic cardinal directions
 * @params  {object} = input value object

 * @params  {object} = function one: sum all fruits per location
 * @params  {object} = return new Array in geographic cardinal directions
 * @params  {return} = print a unified array for each farm by cardinal directions

 * @params  {object} = create a score board for comparison display [0, 0]
 * @params  {object} = score 1 for the farm with the highest produce and 0 for the lowest.
 * @return  {object} = return score
 */

// Farm one
const farmNorth = [40, 50, 40, 60, 39, 80];
const farmSouth = [60, 29, 39, 20, 39, 30];
const farmEast = [20, 38, 79, 40, 59, 59];
const farmWest = [84, 29, 39, 80, 09, 88];

// Farm two
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

print(compare(farmOne, farmTwo)); // [ 0, 1 ]
