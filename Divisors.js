function divisors(argument) {
    const arrDivisors = [];
    for (let iteration = 2; iteration < argument; iteration++) {
        if (!(argument % iteration)) {
            arrDivisors.push(iteration)
        }
    }

    return arrDivisors.length === 0
        ? `${argument} is prime`
        : arrDivisors;
}
console.log(divisors(12));