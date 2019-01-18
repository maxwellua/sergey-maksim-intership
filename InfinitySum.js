function sum(a) {
    let currentSum = a;
    function nextStep(b) {
        currentSum += b;

        return nextStep;
    }

    nextStep.toString = function() {
        return currentSum;
    };

    return nextStep;
}
console.log(sum(1)(2)(3)()