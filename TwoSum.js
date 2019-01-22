function twoSum( numbers, target ) {
  let result = [];
  
  for (let i = 0; i < numbers.length; i++) {
    let secondElemIndex = numbers.indexOf(target - numbers[i], i + 1);
    if (secondElemIndex !== -1) {
      result.push(i, secondElemIndex);
      break;
    };
  };

  return result.sort( ( a, b ) => a - b );
}
