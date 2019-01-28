function Transport (type, weight) {
  this.type = type;
  this.weight = weight;

  this.move = function () {
    console.log('Moving fast!');
  };
}

function GroundTransport (type, weight, engineType) {
  Transport.apply(this, arguments);

  this.engineType = engineType;

  this.stop = function () {
    console.log('Slowing down!');
  };
}

function AirTransport (type, weight, passengersCapacity) {
  Transport.apply(this, arguments);

  let passengers = 0;

  this.onBoard = function (count) {
    if (!count) {
      console.log(`${passengers} on board`);
      return;
    };

    passengers += count;
  };

  this.move = function () {
    if (!passengers) {
      console.log(`${type} is empty! Take someone on board`);
      return;
    };

    console.log('Flying high!');
  };

  this.stop = function () {
    console.log('Landing!');
    passengers = 0;
  };
}
