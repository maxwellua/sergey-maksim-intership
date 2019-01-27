function applyForVisa(documents) {
    console.log('Обработка заявления...');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .1
                ? resolve({})
                : reject('В визе отказано из-за нехватки документов!')
        }, 1500)
    });
    return promise;
}

function getVisa(visa) {
    console.info('Виза получена!');
    return visa
}

function bookHotel(visa) {
    console.log('Ваша виза - ' + visa);
    console.log('Бронируем отель!');
    return {}
}

function buyTickets(booking) {
    console.log('Ваша бронь - ' + booking);
    console.log('Покупаем билеты!')

}

applyForVisa({})
    .then(getVisa) //После этого создается новое обещание для bookHotel  // visa было передано из одного обещания в другое
    //не обязателен так как есть .catch /// reason => console.error(reason)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error)); //после .catch можно вызвать еще функцию, не зависящую от старого промиса

