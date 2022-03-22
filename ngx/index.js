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
    Quantum.prototype.connectionState = function () { return cordova(this, "connectionState", { "observable": true }, arguments); };
    Quantum.prototype.barcodeData = function () { return cordova(this, "barcodeData", {}, arguments); };
    Quantum.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
    Quantum.prototype.getConnectedDeviceInfo = function () { return cordova(this, "getConnectedDeviceInfo", {}, arguments); };
    Quantum.prototype.getPassThroughSync = function () { return cordova(this, "getPassThroughSync", {}, arguments); };
    Quantum.prototype.setPassThroughSync = function (value) { return cordova(this, "setPassThroughSync", {}, arguments); };
    Quantum.prototype.getBatteryInfo = function () { return cordova(this, "getBatteryInfo", { "observable": true }, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsbUZBQXFCLENBQUE7SUFDckIsK0VBQW1CLENBQUE7SUFDbkIsNkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFXWDtBQVhELFdBQVksc0JBQXNCO0lBQ2hDLDBGQUFvQixDQUFBO0lBQ3BCLDZGQUFxQixDQUFBO0lBQ3JCLGlHQUF1QixDQUFBO0lBQ3ZCLCtGQUFzQixDQUFBO0lBQ3RCLGlHQUF1QixDQUFBO0lBQ3ZCLHlHQUEyQixDQUFBO0lBQzNCLDJGQUFvQixDQUFBO0lBQ3BCLHlHQUEyQixDQUFBO0lBQzNCLGlHQUF1QixDQUFBO0lBQ3ZCLDJHQUE0QixDQUFBO0FBQzlCLENBQUMsRUFYVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBV2pDOztJQWdCNEIsMkJBQTBCOzs7O0lBRXJELGlDQUFlLGFBQUMsR0FBVztJQUczQix5QkFBTztJQUdQLDRCQUFVO0lBR1YsNEJBQVU7SUFLVixpQ0FBZTtJQUtmLDZCQUFXO0lBS1gsMkJBQVMsYUFBQyxRQUFrQjtJQUs1Qix3Q0FBc0I7SUFLdEIsb0NBQWtCO0lBS2xCLG9DQUFrQixhQUFDLEtBQWM7SUFLakMsZ0NBQWM7Ozs7Ozs7O2dCQS9DZixVQUFVOztrQkFwQ1g7RUFxQzZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gQ09OTkVDVElPTl9TVEFURVMge1xuICBDT05OX0RJU0NPTk5FQ1RFRCA9IDAsXG4gIENPTk5fQ09OTkVDVElORyA9IDEsXG4gIENPTk5fQ09OTkVDVEVEID0gMlxufVxuXG5leHBvcnQgZW51bSBTVVBQT1JURURfREVWSUNFX1RZUEVTIHtcbiAgREVWSUNFX1RZUEVfQUxMID0gLTEsXG4gIERFVklDRV9UWVBFX0xJTkVBID0gMCxcbiAgREVWSUNFX1RZUEVfUFJJTlRFUiA9IDEsXG4gIERFVklDRV9UWVBFX1BJTlBBRCA9IDIsXG4gIERFVklDRV9UWVBFX0lTRVJJQUwgPSAzLFxuICBERVZJQ0VfVFlQRV9QUklOVEVSX1pQTCA9IDQsXG4gIERFVklDRV9UWVBFX0lIVUIgPSA1LFxuICBERVZJQ0VfVFlQRV9ISURfQkFSQ09ERSA9IDYsXG4gIERFVklDRV9UWVBFX1VTQl9NU1IgPSA3LFxuICBERVZJQ0VfVFlQRV9ISURfS0VZQk9BUkQgPSA4XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZURhdGEge1xuICBiYXJjb2RlOiBzdHJpbmdcbiAgdHlwZTogbnVtYmVyXG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUXVhbnR1bScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXF1YW50dW1zZGsnLFxuICBwbHVnaW5SZWY6ICdRdWFudHVtJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lLW1hdHRlcnMvUXVhbnR1bVNESy1Db3Jkb3ZhLmdpdCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tcXVhbnR1bXNkaycsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVhbnR1bSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBzZXREZXZlbG9wZXJLZXkoa2V5OiBzdHJpbmcpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjb25uZWN0KCk6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSgpXG4gIHNka1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgY29ubmVjdGlvblN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBiYXJjb2RlRGF0YSgpOiBQcm9taXNlPEJhcmNvZGVEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBwbGF5U291bmQoYmVlcERhdGE6IG51bWJlcltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldENvbm5lY3RlZERldmljZUluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldFBhc3NUaHJvdWdoU3luYygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UGFzc1Rocm91Z2hTeW5jKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgZ2V0QmF0dGVyeUluZm8oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==