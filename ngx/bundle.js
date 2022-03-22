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
exports.SUPPORTED_DEVICE_TYPES = void 0;
(function (SUPPORTED_DEVICE_TYPES) {
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_ALL"] = -1] = "DEVICE_TYPE_ALL";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_LINEA"] = 0] = "DEVICE_TYPE_LINEA";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_PRINTER"] = 1] = "DEVICE_TYPE_PRINTER";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_PINPAD"] = 2] = "DEVICE_TYPE_PINPAD";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_ISERIAL"] = 3] = "DEVICE_TYPE_ISERIAL";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_PRINTER_ZPL"] = 4] = "DEVICE_TYPE_PRINTER_ZPL";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_IHUB"] = 5] = "DEVICE_TYPE_IHUB";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_HID_BARCODE"] = 6] = "DEVICE_TYPE_HID_BARCODE";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_USB_MSR"] = 7] = "DEVICE_TYPE_USB_MSR";
    SUPPORTED_DEVICE_TYPES[SUPPORTED_DEVICE_TYPES["DEVICE_TYPE_HID_KEYBOARD"] = 8] = "DEVICE_TYPE_HID_KEYBOARD";
})(exports.SUPPORTED_DEVICE_TYPES || (exports.SUPPORTED_DEVICE_TYPES = {}));
var Quantum = /** @class */ (function (_super) {
    tslib.__extends(Quantum, _super);
    function Quantum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quantum.prototype.setDeveloperKey = function (key) { return core.cordova(this, "setDeveloperKey", {}, arguments); };
    Quantum.prototype.connect = function () { return core.cordova(this, "connect", { "sync": true }, arguments); };
    Quantum.prototype.disconnect = function () { return core.cordova(this, "disconnect", { "sync": true }, arguments); };
    Quantum.prototype.sdkVersion = function () { return core.cordova(this, "sdkVersion", {}, arguments); };
    Quantum.prototype.connectionState = function () { return core.cordova(this, "connectionState", { "callbackOrder": "reverse", "observable": true }, arguments); };
    Quantum.prototype.barcodeData = function () { return core.cordova(this, "barcodeData", {}, arguments); };
    Quantum.prototype.playSound = function (beepData) { return core.cordova(this, "playSound", {}, arguments); };
    Quantum.prototype.getConnectedDeviceInfo = function () { return core.cordova(this, "getConnectedDeviceInfo", {}, arguments); };
    Quantum.prototype.getPassThroughSync = function () { return core.cordova(this, "getPassThroughSync", {}, arguments); };
    Quantum.prototype.setPassThroughSync = function (value) { return core.cordova(this, "setPassThroughSync", {}, arguments); };
    Quantum.prototype.getBatteryInfo = function () { return core.cordova(this, "getBatteryInfo", {}, arguments); };
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
