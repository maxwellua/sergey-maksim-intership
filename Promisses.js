function applyForVisa(documents, resolve, reject) {
    console.log('Обработка заявления...');
    setTimeout(function () {
    Math.random() > .5
        ? resolve({})
        : reject('В визе отказано из-за нехватки документов!')
    }, 1500)
}

applyForVisa({}, function (visa) {
    console.log('Виза получена!');
},
function (reason) {
    console.error('Виза не получена. ')
});