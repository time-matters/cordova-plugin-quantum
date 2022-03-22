import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare enum CONNECTION_STATES {
    CONN_DISCONNECTED = 0,
    CONN_CONNECTING = 1,
    CONN_CONNECTED = 2
}
export interface BarcodeData {
    barcode: string;
    type: number;
}
export declare class QuantumOriginal extends AwesomeCordovaNativePlugin {
    setDeveloperKey(key: string): void;
    connect(): void;
    disconnect(): void;
    connectionState(): Promise<any>;
    barcodeData(): Observable<BarcodeData>;
    playSound(beepData: number[]): void;
}

export declare const Quantum: QuantumOriginal;