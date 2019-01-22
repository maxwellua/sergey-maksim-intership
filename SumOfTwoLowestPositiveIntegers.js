function sumTwoSmallestNumbers(numbers) {  
  let numbersCopy = numbers.slice();
  numbersCopy.sort( ( a, b ) => a - b );
  
  return numbersCopy[0] + numbersCopy[1];
};