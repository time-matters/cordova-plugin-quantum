'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');
require('rxjs');

exports.CONNECTION_STATES = void 0;
(function (CONNECTION_STATES) {
    CONNECTION_STATES[CONNECTION_STATES["CONN_DISCONNECTED"] = 0] = "CONN_DISCONNECTED";
    CONNECTION_STATES[CONNECTION_STATES["CONN_CONNECTING"] = 1] = "CONN_CONNECTING";
    CONNECTION_STATES[CONNECTION_STATES["CONN_CONNECTED"] = 2] = "CONN_CONNECTED";
})(exports.CONNECTION_STATES || (exports.CONNECTION_STATES = {}));
var Quantum = /** @class */ (function (_super) {
    tslib.__extends(Quantum, _super);
    function Quantum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quantum.prototype.setDeveloperKey = function (key) { return core.cordova(this, "setDeveloperKey", {}, arguments); };
    Quantum.prototype.connect = function () { return core.cordova(this, "connect", { "sync": true }, arguments); };
    Quantum.prototype.disconnect = function () { return core.cordova(this, "disconnect", { "sync": true }, arguments); };
    Quantum.prototype.connectionState = function (fn) { return core.cordova(this, "connectionState", {}, arguments); };
    Quantum.prototype.barcodeData = function () { return core.cordova(this, "barcodeData", { "observable": true }, arguments); };
    Quantum.prototype.playSound = function (beepData) { return core.cordova(this, "playSound", {}, arguments); };
    Quantum.pluginName = "Quantum";
    Quantum.plugin = "cordova-plugin-quantumsdk";
    Quantum.pluginRef = "Quantum";
    Quantum.repo = "https://github.com/time-matters/QuantumSDK-Cordova.git";
    Quantum.install = "ionic cordova plugin add cordova-plugin-quantumsdk";
    Quantum.platforms = ["iOS"];
    Quantum.decorators = [
        { type: core$1.Injectable }
    ];
    return Quantum;
}(core.AwesomeCordovaNativePlugin));

exports.Quantum = Quantum;
