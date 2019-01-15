const arrThird = [1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1];
function doIt(currentArr) {
    let totalAmountOfSameValues = 1;
    let maximumTotalAmountOfSameValues = 0;
    let startArg = null;
    let endArg = null;
    let maximumStartArg = null;
    let maximumEndArg = null;
    let maximumValue = null;

    for (let value = 0; value < 2; value++) {
        for (let iteration = 0; iteration < arrThird.length; iteration++) {
            if ((currentArr[iteration] == value) && (currentArr[iteration + 1] == value) ) {

                totalAmountOfSameValues++;
                if (startArg == null ) { startArg = iteration }
                endArg = iteration+1;

                if (totalAmountOfSameValues > maximumTotalAmountOfSameValues) {
                    maximumTotalAmountOfSameValues = totalAmountOfSameValues;
                    maximumStartArg = startArg;
                    maximumEndArg = endArg;
                    maximumValue = value;
                }
            }
            else {
                totalAmountOfSameValues = 1;
                startArg = null;
                endArg = null
            }
        }}

    console.log('Самое большое количество подряд идущих чисел = ' + maximumTotalAmountOfSameValues + '\n Это число - ' + maximumValue + ' \n Начало ряда с ' + maximumStartArg + ' элемента \n Конец с ' + maximumEndArg + ' элемента')
}

doIt(arrThird);
