const car = {
  speedStep: 20,
  faster() {
    this.speed += this.speedStep;
  },
  slower() {
    this.speed -= this.speedStep; 
  },
};

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
