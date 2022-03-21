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
export var CONN_STATES;
(function (CONN_STATES) {
    CONN_STATES[CONN_STATES["CONN_DISCONNECTED"] = 0] = "CONN_DISCONNECTED";
    CONN_STATES[CONN_STATES["CONN_CONNECTING"] = 1] = "CONN_CONNECTING";
    CONN_STATES[CONN_STATES["CONN_CONNECTED"] = 2] = "CONN_CONNECTED";
})(CONN_STATES || (CONN_STATES = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUc1RixNQUFNLENBQU4sSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLHVFQUFxQixDQUFBO0lBQ3JCLG1FQUFtQixDQUFBO0lBQ25CLGlFQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxXQUFXLEtBQVgsV0FBVyxRQUl0QjtBQUVELE1BQU0sQ0FBTixJQUFZLHNCQVdYO0FBWEQsV0FBWSxzQkFBc0I7SUFDaEMsMEZBQW9CLENBQUE7SUFDcEIsNkZBQXFCLENBQUE7SUFDckIsaUdBQXVCLENBQUE7SUFDdkIsK0ZBQXNCLENBQUE7SUFDdEIsaUdBQXVCLENBQUE7SUFDdkIseUdBQTJCLENBQUE7SUFDM0IsMkZBQW9CLENBQUE7SUFDcEIseUdBQTJCLENBQUE7SUFDM0IsaUdBQXVCLENBQUE7SUFDdkIsMkdBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQVhXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFXakM7O0lBZ0I0QiwyQkFBMEI7Ozs7SUFFckQsaUNBQWUsYUFBQyxHQUFXO0lBRzNCLHlCQUFPO0lBR1AsNEJBQVU7SUFHViw0QkFBVTtJQUtWLGlDQUFlO0lBS2YsNkJBQVc7SUFLWCwyQkFBUyxhQUFDLFFBQWtCO0lBSzVCLHdDQUFzQjtJQUt0QixnQ0FBYzs7Ozs7OztrQkF4RWhCO0VBb0M2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIENPTk5fU1RBVEVTIHtcbiAgQ09OTl9ESVNDT05ORUNURUQgPSAwLFxuICBDT05OX0NPTk5FQ1RJTkcgPSAxLFxuICBDT05OX0NPTk5FQ1RFRCA9IDJcbn1cblxuZXhwb3J0IGVudW0gU1VQUE9SVEVEX0RFVklDRV9UWVBFUyB7XG4gIERFVklDRV9UWVBFX0FMTCA9IC0xLFxuICBERVZJQ0VfVFlQRV9MSU5FQSA9IDAsXG4gIERFVklDRV9UWVBFX1BSSU5URVIgPSAxLFxuICBERVZJQ0VfVFlQRV9QSU5QQUQgPSAyLFxuICBERVZJQ0VfVFlQRV9JU0VSSUFMID0gMyxcbiAgREVWSUNFX1RZUEVfUFJJTlRFUl9aUEwgPSA0LFxuICBERVZJQ0VfVFlQRV9JSFVCID0gNSxcbiAgREVWSUNFX1RZUEVfSElEX0JBUkNPREUgPSA2LFxuICBERVZJQ0VfVFlQRV9VU0JfTVNSID0gNyxcbiAgREVWSUNFX1RZUEVfSElEX0tFWUJPQVJEID0gOFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVEYXRhIHtcbiAgYmFyY29kZTogc3RyaW5nXG4gIHR5cGU6IG51bWJlclxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1F1YW50dW0nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1xdWFudHVtc2RrJyxcbiAgcGx1Z2luUmVmOiAnUXVhbnR1bScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdGltZS1tYXR0ZXJzL1F1YW50dW1TREstQ29yZG92YS5naXQnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXF1YW50dW1zZGsnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1YW50dW0gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgc2V0RGV2ZWxvcGVyS2V5KGtleTogc3RyaW5nKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSgpXG4gIGNvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSgpXG4gIHNka1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGNvbm5lY3Rpb25TdGF0ZSgpOiBQcm9taXNlPENPTk5fU1RBVEVTPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBiYXJjb2RlRGF0YSgpOiBQcm9taXNlPEJhcmNvZGVEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBwbGF5U291bmQoYmVlcERhdGE6IG51bWJlcltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldENvbm5lY3RlZERldmljZUluZm8oKTogUHJvbWlzZTxTVVBQT1JURURfREVWSUNFX1RZUEVTPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRCYXR0ZXJ5SW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19