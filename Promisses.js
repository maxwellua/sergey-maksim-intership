function applyForVisa(documents, resolve, reject) {
    console.log('Обработка заявления...');
    setTimeout(function () {
    let visa = {};
    resolve(visa);
    }, 1500)
}

applyForVisa({}, function (visa) {
    console.log('Виза получена!');
},
function (reason) {
    console.error('Виза не получена. ')
}    );