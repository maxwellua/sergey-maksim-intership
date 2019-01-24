const animal = {
  walks: true,
  sleeps: false, 
};

function Dog(name, owner) {
  this.name = name;
  this.owner = owner;
};

Dog.prototype = animal;

const tuzik = new Dog('Tuzik', 'Vasya');
const bobik = new Dog('Bobik', 'Petya');

Dog.prototype.whoesDog = function () {
  console.log(`${this.name} is a dog of ${this.owner}`);
};

tuzik.whoesDog();
bobik.whoesDog();
console.log(tuzik.sleeps);
console.log(bobik.walks);
