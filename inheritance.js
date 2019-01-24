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