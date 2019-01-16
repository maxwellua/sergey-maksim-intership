let arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
function getCommonArr(currentArr) {
    let newCurrentArr = [];
    for (let i = 0; i < currentArr.length; i++) {
        newCurrentArr = newCurrentArr.concat(currentArr[i])
    }
    return newCurrentArr
}
arr = getCommonArr(arr);
arr.sort((a,b) => {return a-b});
console.log(arr);
