Function.prototype.myOwnBind = function(newThis) {
    if (typeof this !== "function") {
        throw new Error(this + "cannot be bound as it's not callable");
    }
    var boundTargetFunction = this;
    var boundArguments = Array.prototype.slice.call(arguments, 1);
    return function boundFunction() {
        var targetArguments = Array.prototype.slice.call(arguments);
        return boundTargetFunction.apply(
            newThis,
            boundArguments.concat(targetArguments)
        );
    };
};

Function.prototype.myOwnApply = function(someOtherThis, arr) {
    someOtherThis = someOtherThis || global;
    var uniqueID = "00" + Math.random();
    while (someOtherThis.hasOwnProperty(uniqueID)) {
        uniqueID = "00" + Math.random();
    }
    someOtherThis[uniqueID] = this;

    var args = [];
    var result = null;
    if (!arr) {
        result = someOtherThis[uniqueID]();
    } else {
        for (let i = 1, len = arr.length; i < len; i++) {
            args.push("arr[" + i + "]");
        }
        result = eval("someOtherThis[uniqueID](" + args + ")");
    }

    delete someOtherThis[uniqueID];
    return result;
};

Function.prototype.myOwnCall = function(someOtherThis) {
    someOtherThis = someOtherThis || global;
    var uniqueID = "00" + Math.random();
    while (someOtherThis.hasOwnProperty(uniqueID)) {
        uniqueID = "00" + Math.random();
    }
    someOtherThis[uniqueID] = this;
    const args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push("arguments[" + i + "]");
    }
    var result = eval("someOtherThis[uniqueID](" + args + ")");
    delete someOtherThis[uniqueID];
    return result;
};

if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {
                return fToBind.apply(this instanceof fNOP && oThis
                    ? this
                    : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    }
}

if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(target, firstSource) {
            'use strict';
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }

                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }

            return to;
        }
    });
}

if (typeof Object.create != 'function') {
    Object.create = (function() {
        function Temp() {}
        var hasOwn = Object.prototype.hasOwnProperty;

        return function (O) {
            if (typeof O != 'object') {
                throw TypeError('Object prototype may only be an Object or null');
            }
            Temp.prototype = O;
            var obj = new Temp();
            Temp.prototype = null;
            if (arguments.length > 1) {
                var Properties = Object(arguments[1]);
                for (var prop in Properties) {
                    if (hasOwn.call(Properties, prop)) {
                        obj[prop] = Properties[prop];
                    }
                }
            }

            return obj;
        };
    })();
}