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
    QuantumOriginal.prototype.connectionState = function (state) { return cordova(this, "connectionState", {}, arguments); };
    QuantumOriginal.prototype.barcodeData = function (barcode, type) { return cordova(this, "barcodeData", {}, arguments); };
    QuantumOriginal.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
    QuantumOriginal.prototype.getConnectedDeviceInfo = function (deviceType) { return cordova(this, "getConnectedDeviceInfo", {}, arguments); };
    QuantumOriginal.pluginName = "Quantum";
    QuantumOriginal.plugin = "cordova-plugin-quantum";
    QuantumOriginal.pluginRef = "cordova.plugins.quantum";
    QuantumOriginal.repo = "https://github.com/time-matters/cordova-plugin-quantum";
    QuantumOriginal.platforms = ["iOS"];
    return QuantumOriginal;
}(AwesomeCordovaNativePlugin));
var Quantum = new QuantumOriginal();
export { Quantum };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUc1RixNQUFNLENBQU4sSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLHVFQUFxQixDQUFBO0lBQ3JCLG1FQUFtQixDQUFBO0lBQ25CLGlFQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxXQUFXLEtBQVgsV0FBVyxRQUl0QjtBQUVELE1BQU0sQ0FBTixJQUFZLHNCQVdYO0FBWEQsV0FBWSxzQkFBc0I7SUFDaEMsMEZBQW9CLENBQUE7SUFDcEIsNkZBQXFCLENBQUE7SUFDckIsaUdBQXVCLENBQUE7SUFDdkIsK0ZBQXNCLENBQUE7SUFDdEIsaUdBQXVCLENBQUE7SUFDdkIseUdBQTJCLENBQUE7SUFDM0IsMkZBQW9CLENBQUE7SUFDcEIseUdBQTJCLENBQUE7SUFDM0IsaUdBQXVCLENBQUE7SUFDdkIsMkdBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQVhXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFXakM7O0lBVTRCLDJCQUEwQjs7OztJQUVyRCxpQ0FBZSxhQUFDLEdBQVc7SUFHM0IseUJBQU87SUFLUCw0QkFBVTtJQUtWLDRCQUFVO0lBS1YsaUNBQWUsYUFBQyxLQUFhO0lBSzdCLDZCQUFXLGFBQUMsT0FBZSxFQUFFLElBQVk7SUFLekMsMkJBQVMsYUFBQyxRQUFrQjtJQUs1Qix3Q0FBc0IsYUFBQyxVQUFvQjs7Ozs7O2tCQWpFN0M7RUE4QjZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gQ09OTl9TVEFURVMge1xuICBDT05OX0RJU0NPTk5FQ1RFRCA9IDAsXG4gIENPTk5fQ09OTkVDVElORyA9IDEsXG4gIENPTk5fQ09OTkVDVEVEID0gMlxufVxuXG5leHBvcnQgZW51bSBTVVBQT1JURURfREVWSUNFX1RZUEVTIHtcbiAgREVWSUNFX1RZUEVfQUxMID0gLTEsXG4gIERFVklDRV9UWVBFX0xJTkVBID0gMCxcbiAgREVWSUNFX1RZUEVfUFJJTlRFUiA9IDEsXG4gIERFVklDRV9UWVBFX1BJTlBBRCA9IDIsXG4gIERFVklDRV9UWVBFX0lTRVJJQUwgPSAzLFxuICBERVZJQ0VfVFlQRV9QUklOVEVSX1pQTCA9IDQsXG4gIERFVklDRV9UWVBFX0lIVUIgPSA1LFxuICBERVZJQ0VfVFlQRV9ISURfQkFSQ09ERSA9IDYsXG4gIERFVklDRV9UWVBFX1VTQl9NU1IgPSA3LFxuICBERVZJQ0VfVFlQRV9ISURfS0VZQk9BUkQgPSA4XG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUXVhbnR1bScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXF1YW50dW0nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMucXVhbnR1bScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdGltZS1tYXR0ZXJzL2NvcmRvdmEtcGx1Z2luLXF1YW50dW0nLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1YW50dW0gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgc2V0RGV2ZWxvcGVyS2V5KGtleTogc3RyaW5nKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSgpXG4gIGNvbm5lY3QoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHNka1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGNvbm5lY3Rpb25TdGF0ZShzdGF0ZTogbnVtYmVyKTogUHJvbWlzZTxDT05OX1NUQVRFUz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYmFyY29kZURhdGEoYmFyY29kZTogc3RyaW5nLCB0eXBlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGxheVNvdW5kKGJlZXBEYXRhOiBudW1iZXJbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDb25uZWN0ZWREZXZpY2VJbmZvKGRldmljZVR5cGU6IG51bWJlcltdKTogUHJvbWlzZTxTVVBQT1JURURfREVWSUNFX1RZUEVTPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=