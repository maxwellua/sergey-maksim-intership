const arr = [1,2,3,4,5,6,7,8,9,-40];

function getSameOfArr(currentArr) {
    for (let iFirst = 0; iFirst < currentArr.length - 1; iFirst++){
        for (let iSecond = iFirst + 1; iSecond < currentArr.length; iSecond++){
            if ( currentArr[iFirst] === currentArr[iSecond] ){
                return 'Есть!'
            }
        }
    }
    return 'Нет!'
}
console.log(getSameOfArr(arr));