const arrayBefore = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
const arrayAfter = getCommonArray(arrayBefore);

function getCommonArray(currentArray) {
    let newCurrentArray = [];
    for (let i = 0; i < currentArray.length; i++) {
        newCurrentArray = newCurrentArray.concat(currentArray[i])
    }

    return newCurrentArray
}

arrayAfter.sort((a, b) => a - b);
console.log(arrayAfter);

