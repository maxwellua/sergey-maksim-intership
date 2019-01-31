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
  return (password.length > 5) && (password == passwordConfirm);
};

const elements = {
  regForm: document.getElementById('regForm'),
  name: document.getElementById('name'),
  lastname: document.getElementById('lastname'),
  country: document.getElementById('country'),
  phone: document.getElementById('phone'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  passwordConfirm: document.getElementById('passwordConfirm'),
  checkbox: document.getElementById('cbLicense'),
  btnSubmit: document.getElementById('btnSubmit'),
};

Object.setPrototypeOf(elements, null);

const validator = {
  updateValidator() { 
    this.name = validateName(elements.name.value);
    this.lastname = validateName(elements.lastname.value);
    this.country = validateCountry(elements.country.value);
    this.phone = validatePhone(elements.phone.value);
    this.email = validateEmail(elements.email.value); 
    this.password = validatePassword(elements.password.value, elements.passwordConfirm.value);
    this.checkbox = elements.checkbox.checked;
  },
};

Object.setPrototypeOf(validator, null);
Object.defineProperty(validator, 'updateValidator', {enumerable: false});

function validateALL() {
  validator.updateValidator();
  elements.btnSubmit.disabled = 0;

  for (let prop in elements) {
    if (elements[prop].classList.contains('error')) {
      elements[prop].classList.remove('error');
    }
  }
     
  for (let prop in validator) {
    if (!validator[prop]) {
      elements[prop].classList.add('error');
      if (prop == 'password') {
        elements.passwordConfirm.classList.add('error');
      }
    
    elements.btnSubmit.disabled = 1;  
    }
  }
};

elements.regForm.addEventListener('blur', validateALL, true);
elements.checkbox.addEventListener('change', validateALL, true);