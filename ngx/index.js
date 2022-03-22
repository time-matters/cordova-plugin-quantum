import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export var CONNECTION_STATES;
(function (CONNECTION_STATES) {
    CONNECTION_STATES[CONNECTION_STATES["CONN_DISCONNECTED"] = 0] = "CONN_DISCONNECTED";
    CONNECTION_STATES[CONNECTION_STATES["CONN_CONNECTING"] = 1] = "CONN_CONNECTING";
    CONNECTION_STATES[CONNECTION_STATES["CONN_CONNECTED"] = 2] = "CONN_CONNECTED";
})(CONNECTION_STATES || (CONNECTION_STATES = {}));
export var SUPPORTED_DEVICE_TYPES;
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
})(SUPPORTED_DEVICE_TYPES || (SUPPORTED_DEVICE_TYPES = {}));
var Quantum = /** @class */ (function (_super) {
    __extends(Quantum, _super);
    function Quantum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quantum.prototype.setDeveloperKey = function (key) { return cordova(this, "setDeveloperKey", {}, arguments); };
    Quantum.prototype.connect = function () { return cordova(this, "connect", { "sync": true }, arguments); };
    Quantum.prototype.disconnect = function () { return cordova(this, "disconnect", { "sync": true }, arguments); };
    Quantum.prototype.sdkVersion = function () { return cordova(this, "sdkVersion", {}, arguments); };
    Quantum.prototype.connectionState = function () { return cordova(this, "connectionState", { "callbackOrder": "reverse", "observable": true }, arguments); };
    Quantum.prototype.barcodeData = function () { return cordova(this, "barcodeData", {}, arguments); };
    Quantum.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
    Quantum.prototype.getConnectedDeviceInfo = function () { return cordova(this, "getConnectedDeviceInfo", {}, arguments); };
    Quantum.prototype.setPassThroughSync = function (value) { return cordova(this, "setPassThroughSync", {}, arguments); };
    Quantum.prototype.getBatteryInfo = function () { return cordova(this, "getBatteryInfo", {}, arguments); };
    Quantum.pluginName = "Quantum";
    Quantum.plugin = "cordova-plugin-quantumsdk";
    Quantum.pluginRef = "Quantum";
    Quantum.repo = "https://github.com/time-matters/QuantumSDK-Cordova.git";
    Quantum.install = "ionic cordova plugin add cordova-plugin-quantumsdk";
    Quantum.platforms = ["iOS"];
    Quantum.decorators = [
        { type: Injectable }
    ];
    return Quantum;
}(AwesomeCordovaNativePlugin));
export { Quantum };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsbUZBQXFCLENBQUE7SUFDckIsK0VBQW1CLENBQUE7SUFDbkIsNkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFXWDtBQVhELFdBQVksc0JBQXNCO0lBQ2hDLDBGQUFvQixDQUFBO0lBQ3BCLDZGQUFxQixDQUFBO0lBQ3JCLGlHQUF1QixDQUFBO0lBQ3ZCLCtGQUFzQixDQUFBO0lBQ3RCLGlHQUF1QixDQUFBO0lBQ3ZCLHlHQUEyQixDQUFBO0lBQzNCLDJGQUFvQixDQUFBO0lBQ3BCLHlHQUEyQixDQUFBO0lBQzNCLGlHQUF1QixDQUFBO0lBQ3ZCLDJHQUE0QixDQUFBO0FBQzlCLENBQUMsRUFYVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBV2pDOztJQWdCNEIsMkJBQTBCOzs7O0lBRXJELGlDQUFlLGFBQUMsR0FBVztJQUczQix5QkFBTztJQUdQLDRCQUFVO0lBR1YsNEJBQVU7SUFLVixpQ0FBZTtJQUtmLDZCQUFXO0lBS1gsMkJBQVMsYUFBQyxRQUFrQjtJQUs1Qix3Q0FBc0I7SUFLdEIsb0NBQWtCLGFBQUMsS0FBYztJQUtqQyxnQ0FBYzs7Ozs7Ozs7Z0JBMUNmLFVBQVU7O2tCQXBDWDtFQXFDNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBDT05ORUNUSU9OX1NUQVRFUyB7XG4gIENPTk5fRElTQ09OTkVDVEVEID0gMCxcbiAgQ09OTl9DT05ORUNUSU5HID0gMSxcbiAgQ09OTl9DT05ORUNURUQgPSAyXG59XG5cbmV4cG9ydCBlbnVtIFNVUFBPUlRFRF9ERVZJQ0VfVFlQRVMge1xuICBERVZJQ0VfVFlQRV9BTEwgPSAtMSxcbiAgREVWSUNFX1RZUEVfTElORUEgPSAwLFxuICBERVZJQ0VfVFlQRV9QUklOVEVSID0gMSxcbiAgREVWSUNFX1RZUEVfUElOUEFEID0gMixcbiAgREVWSUNFX1RZUEVfSVNFUklBTCA9IDMsXG4gIERFVklDRV9UWVBFX1BSSU5URVJfWlBMID0gNCxcbiAgREVWSUNFX1RZUEVfSUhVQiA9IDUsXG4gIERFVklDRV9UWVBFX0hJRF9CQVJDT0RFID0gNixcbiAgREVWSUNFX1RZUEVfVVNCX01TUiA9IDcsXG4gIERFVklDRV9UWVBFX0hJRF9LRVlCT0FSRCA9IDhcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRGF0YSB7XG4gIGJhcmNvZGU6IHN0cmluZ1xuICB0eXBlOiBudW1iZXJcbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdRdWFudHVtJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXVhbnR1bXNkaycsXG4gIHBsdWdpblJlZjogJ1F1YW50dW0nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWUtbWF0dGVycy9RdWFudHVtU0RLLUNvcmRvdmEuZ2l0JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1xdWFudHVtc2RrJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWFudHVtIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIHNldERldmVsb3BlcktleShrZXk6IHN0cmluZyk6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGlzY29ubmVjdCgpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGNvbm5lY3Rpb25TdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYmFyY29kZURhdGEoKTogUHJvbWlzZTxCYXJjb2RlRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGxheVNvdW5kKGJlZXBEYXRhOiBudW1iZXJbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDb25uZWN0ZWREZXZpY2VJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZXRQYXNzVGhyb3VnaFN5bmModmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QmF0dGVyeUluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==