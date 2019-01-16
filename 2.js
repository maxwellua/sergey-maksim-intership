const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -40];

function getSameOfArr(currentArr) {
    for (let counter1 = 0; counter1 < currentArr.length - 1; counter1++){
        for (let counter2 = counter1 + 1; counter2 < currentArr.length; counter2++){
            if ( currentArr[counter1] === currentArr[counter2] ){
                return 'Есть!'
            }
        }
    }

    return 'Нет!'
}
console.log(getSameOfArr(arr));