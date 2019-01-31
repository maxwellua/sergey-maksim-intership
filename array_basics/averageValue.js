const arrayOfInt = [1, 3, 4, 5, 3, 2, 1];

function averageValue(arr) {
  return arr.reduce((sum, item) => sum += item, 0)/arr.length;
};

console.log(arrayOfInt.filter((item) => item > averageValue(arrayOfInt)));
