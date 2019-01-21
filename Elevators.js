function getElevator(floor, leftElevator, rightElevator) {
    if (leftElevator == rightElevator) {

        return 'right'
    }
    if (floor == 0) {

        return rightElevator < leftElevator
        ? 'right'
        : 'left'
    }
    if (floor == 1) {
        if (leftElevator != 1) {

            return 'right'
        } else {

            return 'left'
        }
    }
    if (floor == 2) {
       if (rightElevator > leftElevator) {

           return 'right'
       } else {

           return 'left'
       }
    }
}

console.log(getElevator(2, 0, 2))
