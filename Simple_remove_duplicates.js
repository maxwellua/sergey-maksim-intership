function solve(solveArray, arrayDuplicates) {
    let isTrue = false;

        for (let iterationDuplicates = 0; iterationDuplicates < arrayDuplicates.length; iterationDuplicates++) {
            for (let iterationBefore = solveArray.length; iterationBefore >= 0; iterationBefore--) {
                if (isTrue && (arrayDuplicates[iterationDuplicates] === solveArray[iterationBefore])) {
                    solveArray.splice(iterationBefore, 1)
                }
                if (arrayDuplicates[iterationDuplicates] === solveArray[iterationBefore]) {
                    isTrue = true;
                }
            }
            isTrue = false;
        }

        return solveArray
}

console.log(solve([3, 4, 4, 3, 6, 3], [4, 6, 3]));