function Phone(phoneModel, phoneScreen, phoneOwner) {
    this._model  = phoneModel;
    this._screen = phoneScreen;
    this._owner = phoneOwner;

    this.broken  = function () {
        this._working = false
    };

    this.repaired = function () {
        this._working = true
    };

    this.buttonOnCenter  = function () {
        this._buttonOnCenter = true
    };

    this.buttonOnBottom = function () {
        this._buttonOnBottom = true
    };

    this.soundModule = function () {
        this._soundModule = 'Звуковой модуль'
    }
}

function MasterBorodin() {
    Phone.apply(this, arguments);
    let soundWorks = this.soundModule;
    this.place = 'Borodin House';

    this.buttonOnCenter = function () {
        console.log('Динамик внизу!!!!');
    };

    this.soundModule = function () {
        soundWorks.call(this);
        this._soundModuleActivity = true
    }
}

let meizux54 = new MasterBorodin('Meizu x 54', '1280x720', 'Мужик в чернном пальто');
meizux54.broken();
meizux54.buttonOnCenter();
meizux54.soundModule();
console.log(meizux54);
////////////////////////////////
function Machine(power) {
    this._enabled = false;
    var self = this;
    this.enable = function() {
        self._enabled = true;
    };
    this.disable = function() {
        self._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);
    var waterAmount = 0;
    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };
    var parentEnable = this.enable;
    this.enable = function() {
        parentEnable(); // теперь можно вызывать как угодно, this не важен
        this.run();
    };
    function onReady() {
        alert( 'Кофе готово!' );
    }
    this.run = function() {
        setTimeout(onReady, 1000);
    };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.enable();
////////////////////////////////
function Lada(name, created) {
    this.name = name;
    this.created = created;

}
Lada.prototype.isCar = function () {
    this.created = '100 летней давности';
    alert(this.name +' не является машиной!!!');
};
Lada.prototype.carUser =
    this.carUser = 'Недалекий человек';

function Priora(name) {
    this.name = name;
    Lada.apply(this, arguments);
}

Priora.prototype = Object.create(Lada.prototype);
Lada.prototype.constructor = Priora;
let lastochka = new Priora('Ласточка', 1879);
console.log(lastochka);
lastochka.isCar();
console.log(lastochka.carUser);
console.log(lastochka);
/////////////////////////////////////////
function Animal(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.stop = function() {
    this.speed = 0;
    alert(this.name + ' стоит');
};

Animal.prototype.run = function(speed) {
    this.speed += speed;
    alert(this.name + ' бежит, скорость ' + this.speed);
};

function Rabbit(name) {
    this.name = name;
    this.speed = 0;
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.jump = function() {
    this.speed++;
    alert(this.name + ' прыгает, скорость ' + this.speed);
};

let firstRabbit = new Rabbit('Кролик');
console.log(firstRabbit);
firstRabbit.stop();
console.log(firstRabbit);
console.log(firstRabbit);