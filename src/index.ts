import { Cordova, CordovaFunctionOverride, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum CONNECTION_STATES {
  CONN_DISCONNECTED = 0,
  CONN_CONNECTING = 1,
  CONN_CONNECTED = 2
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
  platforms: ['iOS'],
})
@Injectable()
export class Quantum extends AwesomeCordovaNativePlugin {
  @Cordova()
  setDeveloperKey(key: string): void { }

  @Cordova({ sync: true })
  connect(): void { }

  @Cordova({ sync: true })
  disconnect(): void { }

  @CordovaFunctionOverride()
  connectionState(): Observable<any> { return; }

  @Cordova({ observable: true })
  barcodeData(): Observable<BarcodeData> {
    return;
  }

  @Cordova()
  playSound(beepData: number[]): void { }
}
