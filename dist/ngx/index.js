import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
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
var Quantum = /** @class */ (function (_super) {
    __extends(Quantum, _super);
    function Quantum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quantum.prototype.setDeveloperKey = function (key) { return cordova(this, "setDeveloperKey", {}, arguments); };
    Quantum.prototype.connect = function () { return cordova(this, "connect", {}, arguments); };
    Quantum.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    Quantum.prototype.sdkVersion = function () { return cordova(this, "sdkVersion", {}, arguments); };
    Quantum.prototype.connectionState = function (state) { return cordova(this, "connectionState", {}, arguments); };
    Quantum.prototype.barcodeData = function (barcode, type) { return cordova(this, "barcodeData", {}, arguments); };
    Quantum.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
    Quantum.prototype.getConnectedDeviceInfo = function (deviceType) { return cordova(this, "getConnectedDeviceInfo", {}, arguments); };
    Quantum.pluginName = "Quantum";
    Quantum.plugin = "cordova-plugin-quantum";
    Quantum.pluginRef = "cordova.plugins.quantum";
    Quantum.repo = "https://github.com/time-matters/cordova-plugin-quantum";
    Quantum.platforms = ["iOS"];
    Quantum.decorators = [
        { type: Injectable }
    ];
    return Quantum;
}(AwesomeCordovaNativePlugin));
export { Quantum };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxNQUFNLENBQU4sSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLHVFQUFxQixDQUFBO0lBQ3JCLG1FQUFtQixDQUFBO0lBQ25CLGlFQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxXQUFXLEtBQVgsV0FBVyxRQUl0QjtBQUVELE1BQU0sQ0FBTixJQUFZLHNCQVdYO0FBWEQsV0FBWSxzQkFBc0I7SUFDaEMsMEZBQW9CLENBQUE7SUFDcEIsNkZBQXFCLENBQUE7SUFDckIsaUdBQXVCLENBQUE7SUFDdkIsK0ZBQXNCLENBQUE7SUFDdEIsaUdBQXVCLENBQUE7SUFDdkIseUdBQTJCLENBQUE7SUFDM0IsMkZBQW9CLENBQUE7SUFDcEIseUdBQTJCLENBQUE7SUFDM0IsaUdBQXVCLENBQUE7SUFDdkIsMkdBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQVhXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFXakM7O0lBVTRCLDJCQUEwQjs7OztJQUVyRCxpQ0FBZSxhQUFDLEdBQVc7SUFHM0IseUJBQU87SUFLUCw0QkFBVTtJQUtWLDRCQUFVO0lBS1YsaUNBQWUsYUFBQyxLQUFhO0lBSzdCLDZCQUFXLGFBQUMsT0FBZSxFQUFFLElBQVk7SUFLekMsMkJBQVMsYUFBQyxRQUFrQjtJQUs1Qix3Q0FBc0IsYUFBQyxVQUFvQjs7Ozs7OztnQkFwQzVDLFVBQVU7O2tCQTdCWDtFQThCNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBDT05OX1NUQVRFUyB7XG4gIENPTk5fRElTQ09OTkVDVEVEID0gMCxcbiAgQ09OTl9DT05ORUNUSU5HID0gMSxcbiAgQ09OTl9DT05ORUNURUQgPSAyXG59XG5cbmV4cG9ydCBlbnVtIFNVUFBPUlRFRF9ERVZJQ0VfVFlQRVMge1xuICBERVZJQ0VfVFlQRV9BTEwgPSAtMSxcbiAgREVWSUNFX1RZUEVfTElORUEgPSAwLFxuICBERVZJQ0VfVFlQRV9QUklOVEVSID0gMSxcbiAgREVWSUNFX1RZUEVfUElOUEFEID0gMixcbiAgREVWSUNFX1RZUEVfSVNFUklBTCA9IDMsXG4gIERFVklDRV9UWVBFX1BSSU5URVJfWlBMID0gNCxcbiAgREVWSUNFX1RZUEVfSUhVQiA9IDUsXG4gIERFVklDRV9UWVBFX0hJRF9CQVJDT0RFID0gNixcbiAgREVWSUNFX1RZUEVfVVNCX01TUiA9IDcsXG4gIERFVklDRV9UWVBFX0hJRF9LRVlCT0FSRCA9IDhcbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdRdWFudHVtJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXVhbnR1bScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5xdWFudHVtJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lLW1hdHRlcnMvY29yZG92YS1wbHVnaW4tcXVhbnR1bScsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVhbnR1bSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBzZXREZXZlbG9wZXJLZXkoa2V5OiBzdHJpbmcpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdGlvblN0YXRlKHN0YXRlOiBudW1iZXIpOiBQcm9taXNlPENPTk5fU1RBVEVTPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBiYXJjb2RlRGF0YShiYXJjb2RlOiBzdHJpbmcsIHR5cGU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBwbGF5U291bmQoYmVlcERhdGE6IG51bWJlcltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldENvbm5lY3RlZERldmljZUluZm8oZGV2aWNlVHlwZTogbnVtYmVyW10pOiBQcm9taXNlPFNVUFBPUlRFRF9ERVZJQ0VfVFlQRVM+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==