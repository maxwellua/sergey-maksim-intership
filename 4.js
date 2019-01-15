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