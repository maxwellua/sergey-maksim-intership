let arrayOfInputs = document.getElementsByClassName("formInput");
let array = [];

for (let iteration = 0; iteration < arrayOfInputs.length; iteration++) {
    array.push(arrayOfInputs[iteration].id);
}

function checkIdAndBind(id) {
    let fieldToChange = array.indexOf(id);
    switch (true) {
        case (fieldToChange < 3):
            checkNumbersAtField.call(arrayOfInputs[fieldToChange]);
            break;
        case (fieldToChange === 3):
            checkEmail.call(arrayOfInputs[fieldToChange]);
            break;

        default:
            console.log('def')
    }
}
function checkNumbersAtField() {
    const arry = this.value.split('').some((val) => !isNaN(val));
    console.log(arry);
    (arry || this.value.length === 0)
    ? this.style.borderColor = "red"
    : this.style.borderColor = "blue"

    //if (this.value.)
    // if (!isNaN(this.value.charAt(this.value.length - 1))) {
    //    // console.log(this.value.charAt(this.value.length - 1));
    //     this.style.borderColor = "red";
    // }
}

function checkEmail() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = arrayOfInputs[3].value;
    reg.test(address)
    ? arrayOfInputs[3].style.borderColor = "blue"
    : arrayOfInputs[3].style.borderColor = "red"

}