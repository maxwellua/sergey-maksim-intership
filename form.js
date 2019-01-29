let arrayOfInputs = document.getElementsByClassName("formInput");
let arrayOfId = [];
let allFieldsRight = false;

for (let iteration = 0; iteration < arrayOfInputs.length; iteration++) {
    arrayOfId.push(arrayOfInputs[iteration].id);
}

function checkIdAndCall(id) {
    let fieldToChange = arrayOfId.indexOf(id);
    switch (true) {
        case (fieldToChange < 3):
            checkNumbersAtField.call(arrayOfInputs[fieldToChange]);
            checkButton();
            break;

        case (fieldToChange === 3):
            checkEmail.call(arrayOfInputs[fieldToChange]);
            checkButton();
            break;

        case (fieldToChange === 4):
            checkTel.call(arrayOfInputs[fieldToChange]);
            checkButton();
            break;

        case (fieldToChange === 5):
            checkPass.call(arrayOfInputs[fieldToChange]);
            checkButton();
            break;

        case (fieldToChange === 6):
            checkSecondPass.call(arrayOfInputs[fieldToChange]);
            checkButton();
            break;

        default:
            checkCheckbox.call(arrayOfInputs[fieldToChange]);
            checkButton()
    }
}

function getColorForField(result) {
    this.style.borderColor = `${result}`;
}

function checkNumbersAtField() {
    let reg = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

    !reg.test(this.value)
    ? getColorForField.call(this, "red")
    : getColorForField.call(this, "blue")
}

function checkEmail() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    !reg.test(this.value)
    ? getColorForField.call(this, "red")
    : getColorForField.call(this, "blue")
}

function checkTel() {
    let reg = /^\+?[0-9]{8,15}$/;

    !reg.test(this.value)
    ? getColorForField.call(this, "red")
    : getColorForField.call(this, "blue")
}

function checkPass() {
    this.value.length <= 5
    ? getColorForField.call(this, "red")
    : getColorForField.call(this, "blue");
    if (this.value.length > 5 && !(this.value === arrayOfInputs[6].value) && !(arrayOfInputs[6].value.length === 0)) {
        getColorForField.call(arrayOfInputs[6], "red")
    } else if (arrayOfInputs[6].value.length === 0) {
        getColorForField.call(arrayOfInputs[6], "rgb(238, 238, 238)")
    } else {
        getColorForField.call(arrayOfInputs[6], "blue")
    }
}

function checkSecondPass() {
    this.value !== arrayOfInputs[5].value
    ? getColorForField.call(this, "red")
    : getColorForField.call(this, "blue")
}

function checkCheckbox() {
    this.checked
    ? this.checked = true
    : this.checked = false;
}

function checkButton() {
    for (let iteration = 0; iteration < arrayOfInputs.length - 1; iteration++) {
        if (arrayOfInputs[iteration].style.borderColor !== "blue") {
            document.getElementById('registration').setAttribute('disabled', 'disabled');
            document.getElementById('registration').style.background = 'white';

            return allFieldsRight = false;
        }
    }
    allFieldsRight = true;
    if (allFieldsRight && arrayOfInputs[7].checked) {
        document.getElementById('registration').removeAttribute('disabled');
        document.getElementById('registration').style.background = 'linear-gradient(to left bottom, bisque, grey)';
        console.log('done');
    } else {
        document.getElementById('registration').setAttribute('disabled', 'disabled');
        document.getElementById('registration').style.background = 'white';
    }
}