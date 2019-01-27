function applyForVisa(documents) {
    console.log('Обработка заявления...');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5
                ? resolve({})
                : reject('В визе отказано из-за нехватки документов!')
        }, 1500)
    });
    return promise;
}

function bookHotel(visa) {
    console.log('Ваша виза - ' + visa);
    console.log('Бронируем отель!')
}

function buyTickets() {
    console.log('Покупаем билеты!')
}

applyForVisa({})
    .then(visa => console.info('Виза получена!')) //После этого создается новое обещание для bookHotel
    //не обязателен так как есть .catch /// reason => console.error(reason)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error)); //после .catch можно вызвать еще функцию, не зависящую от старого промиса

