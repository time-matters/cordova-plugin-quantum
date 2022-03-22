import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

export enum CONNECTION_STATES {
  CONN_DISCONNECTED = 0,
  CONN_CONNECTING = 1,
  CONN_CONNECTED = 2
}

export enum SUPPORTED_DEVICE_TYPES {
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
  barcode: string
  type: number
}

@Plugin({
  pluginName: 'Quantum',
  plugin: 'cordova-plugin-quantumsdk',
  pluginRef: 'Quantum',
  repo: 'https://github.com/time-matters/QuantumSDK-Cordova.git',
  install: 'ionic cordova plugin add cordova-plugin-quantumsdk',
  platforms: ['iOS'],
})
@Injectable()
export class Quantum extends AwesomeCordovaNativePlugin {
  @Cordova()
  setDeveloperKey(key: string): void { }

  @Cordova()
  connect(): void { }

  @Cordova()
  disconnect(): void { }

  @Cordova()
  sdkVersion(): Promise<string> {
    return;
  }

  @Cordova()
  connectionState(): Promise<any> {
    return;
  }

  @Cordova()
  barcodeData(): Promise<BarcodeData> {
    return;
  }

  @Cordova()
  playSound(beepData: number[]): Promise<any> {
    return;
  }

  @Cordova()
  getConnectedDeviceInfo(): Promise<SUPPORTED_DEVICE_TYPES> {
    return;
  }

  @Cordova()
  getBatteryInfo(): Promise<any> {
    return;
  }
}
