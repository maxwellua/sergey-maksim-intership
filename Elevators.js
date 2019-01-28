function getElevator(floor, leftElevator, rightElevator) {
    if (leftElevator == rightElevator) {
        return 'right'
    }
    if (floor === 0) {
        return rightElevator < leftElevator ? 'right' : 'left'
    }
    if (floor === 1) {
        if (leftElevator !== 1) {
            return rightElevator < leftElevator ? 'right' : 'left'
        }
    }
    if (floor === 2) {
        return rightElevator > leftElevator ? 'right' : 'left'
    }
}

console.log(getElevator(2, 0, 2))
