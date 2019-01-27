function applyForVisa(documents, resolve, reject) {
    console.log('Обработка заявления...');
    setTimeout(function () {
    Math.random() > .5
        ? resolve({})
        : reject('В визе отказано из-за нехватки документов!')
    }, 1500)
}

function bookHotel() {

}

function buyTickets() {

}

applyForVisa({}, function (visa) {
    console.log('Виза получена!');
    bookHotel(visa, function (reservation) {
        buyTickets(reservation, function () {
            
        })
    },
        function (error) {

        })
},
function (reason) {
    console.error('Виза не получена. ');
});
