//Maksim's version
function twoSum(numbers, target) {
  const result = [];
  
  for (let i = 0; i < numbers.length; i++) {
    let secondElemIndex = numbers.indexOf(target - numbers[i], i + 1);
    
    if (secondElemIndex !== -1) {
      result.push(i, secondElemIndex);
      break;
    };
  };

  return result.sort((a, b) => a - b);
}

// Sergey's version
const startArray = [1, 2, 3, 5, 10, 7];
const index = 15;

function getFinalyArr(currentArray, index) {
    const arrayElements = [];
    for (let stepOne = 0; stepOne < currentArray.length - 1; stepOne++) {
        for (let stepTwo = stepOne + 1; stepTwo < currentArray.length; stepTwo++) {
            if (currentArray[stepOne] + currentArray[stepTwo] === index) {
                arrayElements.push(stepOne, stepTwo);

                return arrayElements;
            }
        }
    }
}
