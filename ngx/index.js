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
var Quantum = /** @class */ (function (_super) {
    __extends(Quantum, _super);
    function Quantum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quantum.prototype.setDeveloperKey = function (key) { return cordova(this, "setDeveloperKey", {}, arguments); };
    Quantum.prototype.connect = function () { return cordova(this, "connect", { "sync": true }, arguments); };
    Quantum.prototype.disconnect = function () { return cordova(this, "disconnect", { "sync": true }, arguments); };
    Quantum.prototype.connectionState = function (fn) { return cordova(this, "connectionState", { "sync": true }, arguments); };
    Quantum.prototype.barcodeData = function () { return cordova(this, "barcodeData", { "observable": true }, arguments); };
    Quantum.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
    Quantum.pluginName = "Quantum";
    Quantum.plugin = "cordova-plugin-quantumsdk";
    Quantum.pluginRef = "cordova.plugins.QuantumSDKCordova";
    Quantum.repo = "https://github.com/time-matters/QuantumSDK-Cordova.git";
    Quantum.platforms = ["iOS"];
    Quantum.decorators = [
        { type: Injectable }
    ];
    return Quantum;
}(AwesomeCordovaNativePlugin));
export { Quantum };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sdUNBQWdFLE1BQU0sK0JBQStCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsbUZBQXFCLENBQUE7SUFDckIsK0VBQW1CLENBQUE7SUFDbkIsNkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7O0lBZTRCLDJCQUEwQjs7OztJQUVyRCxpQ0FBZSxhQUFDLEdBQVc7SUFHM0IseUJBQU87SUFHUCw0QkFBVTtJQUdWLGlDQUFlLGFBQUMsRUFBWTtJQUc1Qiw2QkFBVztJQUtYLDJCQUFTLGFBQUMsUUFBa0I7Ozs7Ozs7Z0JBcEI3QixVQUFVOztrQkF0Qlg7RUF1QjZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUluc3RhbmNlLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBDT05ORUNUSU9OX1NUQVRFUyB7XG4gIENPTk5fRElTQ09OTkVDVEVEID0gMCxcbiAgQ09OTl9DT05ORUNUSU5HID0gMSxcbiAgQ09OTl9DT05ORUNURUQgPSAyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZURhdGEge1xuICBiYXJjb2RlOiBzdHJpbmdcbiAgdHlwZTogbnVtYmVyXG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUXVhbnR1bScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXF1YW50dW1zZGsnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuUXVhbnR1bVNES0NvcmRvdmEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWUtbWF0dGVycy9RdWFudHVtU0RLLUNvcmRvdmEuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWFudHVtIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIHNldERldmVsb3BlcktleShrZXk6IHN0cmluZyk6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGlzY29ubmVjdCgpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjb25uZWN0aW9uU3RhdGUoZm46IEZ1bmN0aW9uKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgYmFyY29kZURhdGEoKTogT2JzZXJ2YWJsZTxCYXJjb2RlRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGxheVNvdW5kKGJlZXBEYXRhOiBudW1iZXJbXSk6IHZvaWQgeyB9XG59XG4iXX0=