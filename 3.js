const arrThird = [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1];

function checkResult(currentArr) {
    let totalValues = 1;
    let maximumTotalValues = 0;
    let startArg;
    let endArg;
    let maximumStartArg;
    let maximumEndArg;
    let maximumValue;
    for (let value = 0; value < 2; value++) {
        for (let iteration = 0; iteration < arrThird.length; iteration++) {
            if ((currentArr[iteration] == value) && (currentArr[iteration + 1] == value) ) {
                totalValues++;
                if (startArg == undefined ) { startArg = iteration }
                endArg = iteration + 1;
                if (totalValues > maximumTotalValues) {
                    maximumTotalValues = totalValues;
                    maximumStartArg = startArg;
                    maximumEndArg = endArg;
                    maximumValue = value;
                }
            } else {
                totalValues = 1;
                startArg = undefined;
                endArg = undefined
            }
        }
    }
    console.log('Самое большое количество подряд идущих чисел = ' + maximumTotalValues + '\n Это число - ' + maximumValue + ' \n Начало ряда с ' + maximumStartArg + ' элемента \n Конец с ' + maximumEndArg + ' элемента')
}
checkResult(arrThird);