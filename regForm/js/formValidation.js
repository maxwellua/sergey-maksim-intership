function validateName(name) {
  const pattern = /[a-zа-яё]+[\sa-zа-яё]*/i;
  
  return !!~name.search(pattern);
};

function validateCountry(country) {
  const countryList = [
    'Украина',
    'Россия',
    'Белорусия'
  ];

  return countryList.includes(country);
};

function validateEmail(email) {
  const pattern = /[a-z0-9]*@[a-z0-9]*\.\w{2,4}/i;
  
  return !!~email.search(pattern)
};

function validatePhone(phone) {
  const pattern = /\+?\d+\(\d+\)\d{3}-?\d{2}-?\d{2}/;
  
  return !!~phone.search(pattern);
};

function validatePassword(password, passwordConfirm) {
  return password.length > 5 && password === passwordConfirm;
};

const regFormElements = {
  regForm: document.getElementById('regForm'),
  name: document.getElementById('name'),
  lastname: document.getElementById('lastname'),
  country: document.getElementById('country'),
  phone: document.getElementById('phone'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  passwordConfirm: document.getElementById('passwordConfirm'),
  checkbox: document.getElementById('cbLicense'),
  buttonSubmit: document.getElementById('btnSubmit'),
};

Object.setPrototypeOf(regFormElements, null);

const validator = {
  updateValidator() { 
    this.name = validateName(regFormElements.name.value);
    this.lastname = validateName(regFormElements.lastname.value);
    this.country = validateCountry(regFormElements.country.value);
    this.phone = validatePhone(regFormElements.phone.value);
    this.email = validateEmail(regFormElements.email.value); 
    this.password = validatePassword(regFormElements.password.value, regFormElements.passwordConfirm.value);
    this.checkbox = regFormElements.checkbox.checked;
  },
};

Object.setPrototypeOf(validator, null);
Object.defineProperty(validator, 'updateValidator', {enumerable: false});

function validateALL() {
  validator.updateValidator();
  regFormElements.buttonSubmit.disabled = false;

  for (let prop in regFormElements) {
    if (regFormElements[prop].classList.contains('error')) {
      regFormElements[prop].classList.remove('error');
    }
  }
     
  for (let prop in validator) {
    if (!validator[prop]) {
      regFormElements[prop].classList.add('error');
      if (prop === 'password') {
        regFormElements.passwordConfirm.classList.add('error');
      };
    
    regFormElements.buttonSubmit.disabled = true;  
    };
  };
};

regFormElements.regForm.addEventListener('blur', validateALL, true);
regFormElements.checkbox.addEventListener('change', validateALL, true);
