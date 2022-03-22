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
var QuantumOriginal = /** @class */ (function (_super) {
    __extends(QuantumOriginal, _super);
    function QuantumOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuantumOriginal.prototype.setDeveloperKey = function (key) { return cordova(this, "setDeveloperKey", {}, arguments); };
    QuantumOriginal.prototype.connect = function () { return cordova(this, "connect", { "sync": true }, arguments); };
    QuantumOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", { "sync": true }, arguments); };
    QuantumOriginal.prototype.connectionState = function (fn) { return cordova(this, "connectionState", { "sync": true }, arguments); };
    QuantumOriginal.prototype.barcodeData = function () { return cordova(this, "barcodeData", { "observable": true }, arguments); };
    QuantumOriginal.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
    QuantumOriginal.pluginName = "Quantum";
    QuantumOriginal.plugin = "cordova-plugin-quantumsdk";
    QuantumOriginal.pluginRef = "cordova.plugins.QuantumSDKCordova";
    QuantumOriginal.repo = "https://github.com/time-matters/QuantumSDK-Cordova.git";
    QuantumOriginal.platforms = ["iOS"];
    return QuantumOriginal;
}(AwesomeCordovaNativePlugin));
var Quantum = new QuantumOriginal();
export { Quantum };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUU3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsbUZBQXFCLENBQUE7SUFDckIsK0VBQW1CLENBQUE7SUFDbkIsNkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7O0lBZTRCLDJCQUEwQjs7OztJQUVyRCxpQ0FBZSxhQUFDLEdBQVc7SUFHM0IseUJBQU87SUFHUCw0QkFBVTtJQUdWLGlDQUFlLGFBQUMsRUFBWTtJQUc1Qiw2QkFBVztJQUtYLDJCQUFTLGFBQUMsUUFBa0I7Ozs7OztrQkExQzlCO0VBdUI2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFJbnN0YW5jZSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gQ09OTkVDVElPTl9TVEFURVMge1xuICBDT05OX0RJU0NPTk5FQ1RFRCA9IDAsXG4gIENPTk5fQ09OTkVDVElORyA9IDEsXG4gIENPTk5fQ09OTkVDVEVEID0gMlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVEYXRhIHtcbiAgYmFyY29kZTogc3RyaW5nXG4gIHR5cGU6IG51bWJlclxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1F1YW50dW0nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1xdWFudHVtc2RrJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlF1YW50dW1TREtDb3Jkb3ZhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lLW1hdHRlcnMvUXVhbnR1bVNESy1Db3Jkb3ZhLmdpdCcsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVhbnR1bSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBzZXREZXZlbG9wZXJLZXkoa2V5OiBzdHJpbmcpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjb25uZWN0KCk6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY29ubmVjdGlvblN0YXRlKGZuOiBGdW5jdGlvbik6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGJhcmNvZGVEYXRhKCk6IE9ic2VydmFibGU8QmFyY29kZURhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHBsYXlTb3VuZChiZWVwRGF0YTogbnVtYmVyW10pOiB2b2lkIHsgfVxufVxuIl19