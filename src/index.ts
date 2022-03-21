import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

export enum CONN_STATES {
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

@Plugin({
  pluginName: 'Quantum',
  plugin: 'cordova-plugin-quantum',
  pluginRef: 'cordova.plugins.quantum',
  repo: 'https://github.com/time-matters/cordova-plugin-quantum',
  platforms: ['iOS'],
})
@Injectable()
export class Quantum extends AwesomeCordovaNativePlugin {
  @Cordova()
  setDeveloperKey(key: string): Promise<any> {
    return;
  }

  @Cordova()
  connect(): Promise<any> {
    return;
  }

  @Cordova()
  disconnect(): Promise<string> {
    return;
  }

  @Cordova()
  sdkVersion(): Promise<string> {
    return;
  }

  @Cordova()
  connectionState(state: number): Promise<CONN_STATES> {
    return;
  }

  @Cordova()
  barcodeData(barcode: string, type: number): Promise<string> {
    return;
  }

  @Cordova()
  playSound(beepData: number[]): Promise<any> {
    return;
  }

  @Cordova()
  getConnectedDeviceInfo(deviceType: number[]): Promise<SUPPORTED_DEVICE_TYPES> {
    return;
  }
}
