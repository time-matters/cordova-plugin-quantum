var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
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
var QuantumOriginal = /** @class */ (function (_super) {
    __extends(QuantumOriginal, _super);
    function QuantumOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuantumOriginal.prototype.setDeveloperKey = function (key) { return cordova(this, "setDeveloperKey", {}, arguments); };
    QuantumOriginal.prototype.connect = function () { return cordova(this, "connect", { "sync": true }, arguments); };
    QuantumOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", { "sync": true }, arguments); };
    QuantumOriginal.prototype.sdkVersion = function () { return cordova(this, "sdkVersion", {}, arguments); };
    QuantumOriginal.prototype.connectionState = function () { return cordova(this, "connectionState", { "callbackOrder": "reverse", "observable": true }, arguments); };
    QuantumOriginal.prototype.barcodeData = function () { return cordova(this, "barcodeData", {}, arguments); };
    QuantumOriginal.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
    QuantumOriginal.prototype.getConnectedDeviceInfo = function () { return cordova(this, "getConnectedDeviceInfo", {}, arguments); };
    QuantumOriginal.prototype.getPassThroughSync = function () { return cordova(this, "getPassThroughSync", {}, arguments); };
    QuantumOriginal.prototype.setPassThroughSync = function (value) { return cordova(this, "setPassThroughSync", {}, arguments); };
    QuantumOriginal.prototype.getBatteryInfo = function () { return cordova(this, "getBatteryInfo", {}, arguments); };
    QuantumOriginal.pluginName = "Quantum";
    QuantumOriginal.plugin = "cordova-plugin-quantumsdk";
    QuantumOriginal.pluginRef = "Quantum";
    QuantumOriginal.repo = "https://github.com/time-matters/QuantumSDK-Cordova.git";
    QuantumOriginal.install = "ionic cordova plugin add cordova-plugin-quantumsdk";
    QuantumOriginal.platforms = ["iOS"];
    return QuantumOriginal;
}(AwesomeCordovaNativePlugin));
var Quantum = new QuantumOriginal();
export { Quantum };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsbUZBQXFCLENBQUE7SUFDckIsK0VBQW1CLENBQUE7SUFDbkIsNkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFXWDtBQVhELFdBQVksc0JBQXNCO0lBQ2hDLDBGQUFvQixDQUFBO0lBQ3BCLDZGQUFxQixDQUFBO0lBQ3JCLGlHQUF1QixDQUFBO0lBQ3ZCLCtGQUFzQixDQUFBO0lBQ3RCLGlHQUF1QixDQUFBO0lBQ3ZCLHlHQUEyQixDQUFBO0lBQzNCLDJGQUFvQixDQUFBO0lBQ3BCLHlHQUEyQixDQUFBO0lBQzNCLGlHQUF1QixDQUFBO0lBQ3ZCLDJHQUE0QixDQUFBO0FBQzlCLENBQUMsRUFYVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBV2pDOztJQWdCNEIsMkJBQTBCOzs7O0lBRXJELGlDQUFlLGFBQUMsR0FBVztJQUczQix5QkFBTztJQUdQLDRCQUFVO0lBR1YsNEJBQVU7SUFLVixpQ0FBZTtJQUtmLDZCQUFXO0lBS1gsMkJBQVMsYUFBQyxRQUFrQjtJQUs1Qix3Q0FBc0I7SUFLdEIsb0NBQWtCO0lBS2xCLG9DQUFrQixhQUFDLEtBQWM7SUFLakMsZ0NBQWM7Ozs7Ozs7a0JBbkZoQjtFQXFDNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBDT05ORUNUSU9OX1NUQVRFUyB7XG4gIENPTk5fRElTQ09OTkVDVEVEID0gMCxcbiAgQ09OTl9DT05ORUNUSU5HID0gMSxcbiAgQ09OTl9DT05ORUNURUQgPSAyXG59XG5cbmV4cG9ydCBlbnVtIFNVUFBPUlRFRF9ERVZJQ0VfVFlQRVMge1xuICBERVZJQ0VfVFlQRV9BTEwgPSAtMSxcbiAgREVWSUNFX1RZUEVfTElORUEgPSAwLFxuICBERVZJQ0VfVFlQRV9QUklOVEVSID0gMSxcbiAgREVWSUNFX1RZUEVfUElOUEFEID0gMixcbiAgREVWSUNFX1RZUEVfSVNFUklBTCA9IDMsXG4gIERFVklDRV9UWVBFX1BSSU5URVJfWlBMID0gNCxcbiAgREVWSUNFX1RZUEVfSUhVQiA9IDUsXG4gIERFVklDRV9UWVBFX0hJRF9CQVJDT0RFID0gNixcbiAgREVWSUNFX1RZUEVfVVNCX01TUiA9IDcsXG4gIERFVklDRV9UWVBFX0hJRF9LRVlCT0FSRCA9IDhcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRGF0YSB7XG4gIGJhcmNvZGU6IHN0cmluZ1xuICB0eXBlOiBudW1iZXJcbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdRdWFudHVtJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXVhbnR1bXNkaycsXG4gIHBsdWdpblJlZjogJ1F1YW50dW0nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWUtbWF0dGVycy9RdWFudHVtU0RLLUNvcmRvdmEuZ2l0JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1xdWFudHVtc2RrJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWFudHVtIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIHNldERldmVsb3BlcktleShrZXk6IHN0cmluZyk6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGlzY29ubmVjdCgpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGNvbm5lY3Rpb25TdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYmFyY29kZURhdGEoKTogUHJvbWlzZTxCYXJjb2RlRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGxheVNvdW5kKGJlZXBEYXRhOiBudW1iZXJbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDb25uZWN0ZWREZXZpY2VJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRQYXNzVGhyb3VnaFN5bmMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHNldFBhc3NUaHJvdWdoU3luYyh2YWx1ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRCYXR0ZXJ5SW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19