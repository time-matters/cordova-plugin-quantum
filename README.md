# Ionic wrapper plugin for QuantumSDK

This wrapper is intended as a implementation of the Cordova QuantumSDK plugin for scanning Barcodes with dedicated hardware into the Ionic framework.

## Build

- clone https://github.com/danielsogl/awesome-cordova-plugins
- symlink the `src` folder to `ionic-native/src/@awesome-cordova-plugins/plugins`
- change into the `ionic-native` folder
- run `npn i`
- install gulp `npm i gulp`
- build via `npm run build`
- copy the compiled plugin from `ionic-native/dist/@awesome-cordova-plugins/plugins/quantum` to `my-app/node_modules/@ionic-native/`
- in your project install `npm add @awesome-cordova-plugins/core`
