let arrayOfInputs = document.getElementsByClassName("formInput");
let allFieldsRight = false;

function getColorForField(result) {
    result
        ? this.style.borderColor = "red"
        : this.style.borderColor = "blue";
    checkButton();
}

function checkNumbersAtField() {
    const reg = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
    getColorForField.call(this, !reg.test(this.value));
}

function checkEmail() {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    getColorForField.call(this, !reg.test(this.value));
}

function checkTel() {
    const reg = /^\+?[0-9]{8,15}$/;
    getColorForField.call(this, !reg.test(this.value));
}

function checkPass() {
    getColorForField.call(this, this.value.length <= 5);
    if (!arrayOfInputs[6].value.length) {
        arrayOfInputs[6].style.borderColor = "rgb(238, 238, 238)";
    } else if (this.value.length > 5 && !(this.value === arrayOfInputs[6].value) && !!arrayOfInputs[6].value.length ) {
        arrayOfInputs[6].style.borderColor = "red";
    } else {
        arrayOfInputs[6].style.borderColor = "blue"
    }
}

function checkSecondPass() {
    console.log(this.value !== arrayOfInputs[5].value);
    getColorForField.call(this, this.value !== arrayOfInputs[5].value);
    if (!this.value.length) arrayOfInputs[6].style.borderColor = "rgb(238, 238, 238)";
}

function checkCheckbox() {
    this.checked
    ? this.checked = true
    : this.checked = false;
    checkButton();
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