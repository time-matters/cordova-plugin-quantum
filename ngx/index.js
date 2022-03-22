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
    Quantum.prototype.connectionState = function (fn) { return cordova(this, "connectionState", {}, arguments); };
    Quantum.prototype.barcodeData = function () { return cordova(this, "barcodeData", { "observable": true }, arguments); };
    Quantum.prototype.playSound = function (beepData) { return cordova(this, "playSound", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcXVhbnR1bS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sdUNBQWdFLE1BQU0sK0JBQStCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsbUZBQXFCLENBQUE7SUFDckIsK0VBQW1CLENBQUE7SUFDbkIsNkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7O0lBZ0I0QiwyQkFBMEI7Ozs7SUFFckQsaUNBQWUsYUFBQyxHQUFXO0lBRzNCLHlCQUFPO0lBR1AsNEJBQVU7SUFHVixpQ0FBZSxhQUFDLEVBQU87SUFLdkIsNkJBQVc7SUFLWCwyQkFBUyxhQUFDLFFBQWtCOzs7Ozs7OztnQkF0QjdCLFVBQVU7O2tCQXZCWDtFQXdCNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhSW5zdGFuY2UsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIENPTk5FQ1RJT05fU1RBVEVTIHtcbiAgQ09OTl9ESVNDT05ORUNURUQgPSAwLFxuICBDT05OX0NPTk5FQ1RJTkcgPSAxLFxuICBDT05OX0NPTk5FQ1RFRCA9IDJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRGF0YSB7XG4gIGJhcmNvZGU6IHN0cmluZ1xuICB0eXBlOiBudW1iZXJcbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdRdWFudHVtJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXVhbnR1bXNkaycsXG4gIHBsdWdpblJlZjogJ1F1YW50dW0nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWUtbWF0dGVycy9RdWFudHVtU0RLLUNvcmRvdmEuZ2l0JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1xdWFudHVtc2RrJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWFudHVtIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIHNldERldmVsb3BlcktleShrZXk6IHN0cmluZyk6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbm5lY3QoKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGlzY29ubmVjdCgpOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdGlvblN0YXRlKGZuOiBhbnkpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBiYXJjb2RlRGF0YSgpOiBPYnNlcnZhYmxlPEJhcmNvZGVEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBwbGF5U291bmQoYmVlcERhdGE6IG51bWJlcltdKTogdm9pZCB7IH1cbn1cbiJdfQ==