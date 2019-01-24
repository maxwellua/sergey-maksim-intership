function sumTwoSmallestNumbers(numbers) {  
  const numbersCopy = numbers.slice();
  numbersCopy.sort((a, b) => a - b);
  
  return numbersCopy[0] + numbersCopy[1];
};