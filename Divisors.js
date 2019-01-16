function divisors(argument) {
    let arr = [];
    for (let iteration = 2; iteration < argument; iteration++ ){
        if (argument % iteration === 0 ) {
            arr.push(iteration)}
    }
    if (arr.length === 0) {return `${argument} is prime`}
    return arr;
}
console.log(divisors(12));