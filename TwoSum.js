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

console.log(getFinalyArr(startArray, index));