const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -40];
const averageOfArr = arr.reduce((average , value) => average += value );
const arrFiltered = arr.filter((x) => x > averageOfArr);

console.log(arrFiltered);