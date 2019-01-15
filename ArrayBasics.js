const arr = [1,2,3,4,5,6,7,8,9,-40];

///// 1 /////
const averageOfArr = arr.reduce((average , value) => { return average += value });

console.log( arr.filter((x) => { return x > averageOfArr }));

/////   /////

///// 2 /////
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
/////   /////



///// 3 /////
const arrThird = [1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1];
function f(currentArr) {
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

f(arrThird);

/////   /////

///// 4 /////
let arrFourthOne = [1,144646,144727,144629,144743,144730,];
let arrFourthTwo = [144727,144728,144625,144647,];
let arrFourthMin = [];
let arrFourthMax = [];
    arrFourthMax[0] = arrFourthOne.reduce( (maximum , current) => {
        if (maximum < current) { maximum = current }
        return maximum;
    } );
    arrFourthMax[1] = arrFourthTwo.reduce( (maximum , current) => {
        if (maximum < current) { maximum = current }
        return maximum;
    } );

    arrFourthMin[0] = arrFourthOne.reduce( (minimum , current) => {
        if (current < minimum) { minimum = current }
        return minimum;
    }, );
    arrFourthMin[1] = arrFourthTwo.reduce( (minimum , current) => {
        if (current < minimum) { minimum = current }
        return minimum;
    }, );



console.log(arrFourthMax);
console.log(arrFourthMin);
/////   /////
