const maximum = +prompt('Max');
const firstNumber = +prompt('First');
const secondNumber = +prompt('Second');
const method = +prompt('Введите номер метода ');
const counterForRecursion = maximum - 1;

let result = [firstNumber, secondNumber];
switch (method) {
    case 1:
        getFibGenerally();
        console.log(result);
        break;
    case 2:
        getFibRecursion(counterForRecursion);
        console.log(result);
        break;
}
function getFibGenerally() {
    for (let counter = 2; counter < maximum; counter++){
        result.push(result[counter-1] + result[counter-2])
    }

    return result;
}
function getFibRecursion(counterForRecursion) {
    return result[counterForRecursion] = counterForRecursion <= 1
        ? counterForRecursion
        : getFibRecursion(counterForRecursion - 1) + getFibRecursion(counterForRecursion - 2);
}

