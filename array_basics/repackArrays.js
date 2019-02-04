const arrA = [11, 3, 52, 6, 88, 3, 42];
const arrB = [53, 55, 14, 4, 5, 100, 3];

const sortInt = (a, b) => a - b;

function repackArray(arrSmaller, arrBigger) {
  arrSmaller.sort(sortInt);
  arrBigger.sort(sortInt);
  
  while (arrSmaller[arrSmaller.length - 1] > arrBigger[0]) {
    arrBigger.push(arrSmaller.pop());
    arrSmaller.push(arrBigger.shift());
    
    arrSmaller.sort(sortInt);
    arrBigger.sort(sortInt);
  };
};

repackArray(arrA, arrB);

console.log(arrA, arrB);
