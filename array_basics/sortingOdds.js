const arrA = [11, 3, 52, 6, 88, 3, 42];
const arrB = [53, 55, 14, 4, 5, 100, 3];

function sortOdds(arrayToSort) {
  const arrOdds = arrayToSort
                    .filter( item => item % 2 )
                    .sort( (a, b) => a - b );

  arrayToSort.forEach( (item, index, arr) => {
    if (item % 2) {
      arr[index] = arrOdds.shift();
    };
  });                  
};

sortOdds(arrA);
sortOdds(arrB);

console.log(arrA);
console.log(arrB);
