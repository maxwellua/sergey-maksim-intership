let arr = [1, 2, 3, 5, 10, 7];
let index = 15;
function getFinalyArr(currentArr, index) {
    let finalyArr = [];
    for (let stepOne = 0; stepOne < currentArr.length - 1; stepOne++) {
        for (let stepTwo = stepOne + 1; stepTwo < currentArr.length; stepTwo++) {
            if (currentArr[stepOne] + currentArr[stepTwo] === index) {
                finalyArr.push(stepOne, stepTwo);
                return finalyArr;
            }
        }
    }
}
console.log(getFinalyArr(arr, index));