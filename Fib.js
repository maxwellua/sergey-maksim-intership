
let maximum = +prompt('Max');
let firstNumber = +prompt('First');
let secondNumber = +prompt('Second');
let result = [ firstNumber , secondNumber ];
let method = +prompt('Введите номер метода ');
let counterForRecursion = maximum - 1 ;

switch ( method ) {
    case 1 :
        getFibGenerally();
        console.log(result);
        break;

    case 2 :
        getFibRecursion(counterForRecursion);
        console.log(result);
        break;
}


function getFibGenerally (){
    for (let counter = 2 ; counter < maximum ; counter++ ){
        result.push( result[counter-1] + result[counter-2] )
    }
    return result ;
}

function getFibRecursion(counterForRecursion) {
    return result[counterForRecursion] = counterForRecursion <= 1 ? counterForRecursion : getFibRecursion(counterForRecursion - 1) + getFibRecursion(counterForRecursion - 2);
}

