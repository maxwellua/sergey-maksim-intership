const car = {
  speedStep: 20,
};

const carProto = {
  faster() {
    this.speed += this.speedStep;
  },
  slower() {
    this.speed -= this.speedStep; 
  },
};

Object.setPrototypeOf(car, carProto);

const lanozGTR = {
  engine: 3600,
  year: 2050,
  owner: 'SomeOneCrazy',
  speed: 0,
};

Object.setPrototypeOf(lanozGTR, car);

lanozGTR.faster();
lanozGTR.faster();
lanozGTR.faster();
console.log(lanozGTR.speed);
