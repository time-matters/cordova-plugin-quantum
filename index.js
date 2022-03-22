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
    QuantumOriginal.prototype.connectionState = function (fn) { return cordova(this, "connectionState", {}, arguments); };
    QuantumOriginal.prototype.barcodeData = function () { return cordova(this, "barcodeData", { "observable": true }, arguments); };
    QuantumOriginal.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUU3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsbUZBQXFCLENBQUE7SUFDckIsK0VBQW1CLENBQUE7SUFDbkIsNkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7O0lBZ0I0QiwyQkFBMEI7Ozs7SUFFckQsaUNBQWUsYUFBQyxHQUFXO0lBRzNCLHlCQUFPO0lBR1AsNEJBQVU7SUFHVixpQ0FBZSxhQUFDLEVBQU87SUFLdkIsNkJBQVc7SUFLWCwyQkFBUyxhQUFDLFFBQWtCOzs7Ozs7O2tCQTdDOUI7RUF3QjZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUluc3RhbmNlLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBDT05ORUNUSU9OX1NUQVRFUyB7XG4gIENPTk5fRElTQ09OTkVDVEVEID0gMCxcbiAgQ09OTl9DT05ORUNUSU5HID0gMSxcbiAgQ09OTl9DT05ORUNURUQgPSAyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZURhdGEge1xuICBiYXJjb2RlOiBzdHJpbmdcbiAgdHlwZTogbnVtYmVyXG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUXVhbnR1bScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXF1YW50dW1zZGsnLFxuICBwbHVnaW5SZWY6ICdRdWFudHVtJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lLW1hdHRlcnMvUXVhbnR1bVNESy1Db3Jkb3ZhLmdpdCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tcXVhbnR1bXNkaycsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVhbnR1bSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBzZXREZXZlbG9wZXJLZXkoa2V5OiBzdHJpbmcpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjb25uZWN0KCk6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSgpXG4gIGNvbm5lY3Rpb25TdGF0ZShmbjogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgYmFyY29kZURhdGEoKTogT2JzZXJ2YWJsZTxCYXJjb2RlRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGxheVNvdW5kKGJlZXBEYXRhOiBudW1iZXJbXSk6IHZvaWQgeyB9XG59XG4iXX0=