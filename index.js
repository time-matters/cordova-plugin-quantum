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
    QuantumOriginal.prototype.connect = function () { return cordova(this, "connect", {}, arguments); };
    QuantumOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    QuantumOriginal.prototype.sdkVersion = function () { return cordova(this, "sdkVersion", {}, arguments); };
    QuantumOriginal.prototype.connectionState = function () { return cordova(this, "connectionState", {}, arguments); };
    QuantumOriginal.prototype.barcodeData = function () { return cordova(this, "barcodeData", {}, arguments); };
    QuantumOriginal.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
    QuantumOriginal.prototype.getConnectedDeviceInfo = function () { return cordova(this, "getConnectedDeviceInfo", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUc1RixNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLG1GQUFxQixDQUFBO0lBQ3JCLCtFQUFtQixDQUFBO0lBQ25CLDZFQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVksc0JBV1g7QUFYRCxXQUFZLHNCQUFzQjtJQUNoQywwRkFBb0IsQ0FBQTtJQUNwQiw2RkFBcUIsQ0FBQTtJQUNyQixpR0FBdUIsQ0FBQTtJQUN2QiwrRkFBc0IsQ0FBQTtJQUN0QixpR0FBdUIsQ0FBQTtJQUN2Qix5R0FBMkIsQ0FBQTtJQUMzQiwyRkFBb0IsQ0FBQTtJQUNwQix5R0FBMkIsQ0FBQTtJQUMzQixpR0FBdUIsQ0FBQTtJQUN2QiwyR0FBNEIsQ0FBQTtBQUM5QixDQUFDLEVBWFcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQVdqQzs7SUFnQjRCLDJCQUEwQjs7OztJQUVyRCxpQ0FBZSxhQUFDLEdBQVc7SUFHM0IseUJBQU87SUFHUCw0QkFBVTtJQUdWLDRCQUFVO0lBS1YsaUNBQWU7SUFLZiw2QkFBVztJQUtYLDJCQUFTLGFBQUMsUUFBa0I7SUFLNUIsd0NBQXNCO0lBS3RCLGdDQUFjOzs7Ozs7O2tCQXhFaEI7RUFvQzZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gQ09OTkVDVElPTl9TVEFURVMge1xuICBDT05OX0RJU0NPTk5FQ1RFRCA9IDAsXG4gIENPTk5fQ09OTkVDVElORyA9IDEsXG4gIENPTk5fQ09OTkVDVEVEID0gMlxufVxuXG5leHBvcnQgZW51bSBTVVBQT1JURURfREVWSUNFX1RZUEVTIHtcbiAgREVWSUNFX1RZUEVfQUxMID0gLTEsXG4gIERFVklDRV9UWVBFX0xJTkVBID0gMCxcbiAgREVWSUNFX1RZUEVfUFJJTlRFUiA9IDEsXG4gIERFVklDRV9UWVBFX1BJTlBBRCA9IDIsXG4gIERFVklDRV9UWVBFX0lTRVJJQUwgPSAzLFxuICBERVZJQ0VfVFlQRV9QUklOVEVSX1pQTCA9IDQsXG4gIERFVklDRV9UWVBFX0lIVUIgPSA1LFxuICBERVZJQ0VfVFlQRV9ISURfQkFSQ09ERSA9IDYsXG4gIERFVklDRV9UWVBFX1VTQl9NU1IgPSA3LFxuICBERVZJQ0VfVFlQRV9ISURfS0VZQk9BUkQgPSA4XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZURhdGEge1xuICBiYXJjb2RlOiBzdHJpbmdcbiAgdHlwZTogbnVtYmVyXG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUXVhbnR1bScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXF1YW50dW1zZGsnLFxuICBwbHVnaW5SZWY6ICdRdWFudHVtJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lLW1hdHRlcnMvUXVhbnR1bVNESy1Db3Jkb3ZhLmdpdCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tcXVhbnR1bXNkaycsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVhbnR1bSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBzZXREZXZlbG9wZXJLZXkoa2V5OiBzdHJpbmcpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdCgpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdGlvblN0YXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBiYXJjb2RlRGF0YSgpOiBQcm9taXNlPEJhcmNvZGVEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBwbGF5U291bmQoYmVlcERhdGE6IG51bWJlcltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldENvbm5lY3RlZERldmljZUluZm8oKTogUHJvbWlzZTxTVVBQT1JURURfREVWSUNFX1RZUEVTPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRCYXR0ZXJ5SW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19