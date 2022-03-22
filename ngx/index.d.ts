import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare enum CONNECTION_STATES {
    CONN_DISCONNECTED = 0,
    CONN_CONNECTING = 1,
    CONN_CONNECTED = 2
}
export declare enum SUPPORTED_DEVICE_TYPES {
    DEVICE_TYPE_ALL = -1,
    DEVICE_TYPE_LINEA = 0,
    DEVICE_TYPE_PRINTER = 1,
    DEVICE_TYPE_PINPAD = 2,
    DEVICE_TYPE_ISERIAL = 3,
    DEVICE_TYPE_PRINTER_ZPL = 4,
    DEVICE_TYPE_IHUB = 5,
    DEVICE_TYPE_HID_BARCODE = 6,
    DEVICE_TYPE_USB_MSR = 7,
    DEVICE_TYPE_HID_KEYBOARD = 8
}
export interface BarcodeData {
    barcode: string;
    type: number;
}
export declare class Quantum extends AwesomeCordovaNativePlugin {
    setDeveloperKey(key: string): void;
    connect(): void;
    disconnect(): void;
    sdkVersion(): Promise<string>;
    connectionState(): Observable<any>;
    barcodeData(): Promise<BarcodeData>;
    playSound(beepData: number[]): Promise<any>;
    getConnectedDeviceInfo(): Promise<any>;
    getPassThroughSync(): Promise<any>;
    setPassThroughSync(value: boolean): Promise<any>;
    getBatteryInfo(): Promise<any>;
}
