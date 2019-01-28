let arrayToCheck = [1, 2, 3, 4, 5];
let i = 0;
function showElements() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(arrayToCheck[i++]), 2000)
    });

    return promise
}

function showIt(element) {
    console.log(element);
    return showElements()
}

showElements()
            .then(showIt)
            .then(showIt)
            .then(showIt)
            .then(showIt)
            .then(showIt);