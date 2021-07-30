# vue-cli-plugin-web3modal
vue3-cli-plugin A single Web3 / Ethereum provider solution for all Wallets

## Introduction
vue-cli-plugin-web3modal It is based on [web3modal](https://web3modal.com/) for vuejs  help developers add support for multiple providers in their apps with a simple customizable configuration.


## Usage

1. Install vue-cli-plugin-web3modal NPM package

```bash
npm install --save-dev vue-cli-plugin-web3modal

# OR

yarn add vue-cli-plugin-web3modal --dev
```

2. vue add plugin
```bash
 vue invoke vue-cli-plugin-web3modal
```



## Using in vanilla vue
If you add Exanple's directory structure in the configuration:
```
src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── ConnectWallteExample.vue
│   │   └── HelloWorld.vue
│   ├── hooks
│   │   └── useWallte.js
│   ├── main.js
│   ├── registerServiceWorker.js
│   └── web3
│       ├── abis.js
│       ├── chains.js
│       ├── config.js
│       ├── constants.dev.js
│       ├── constants.js
│       └── tools.js
```

-  src/web3/config.js,
providerOptions Configuration can refer to https://github.com/Web3Modal/web3modal#custom-display
``` js
const providerOptions = {
  // Example with injected providers
  injected: {
    display: {
      logo: "data:image/gif;base64,INSERT_BASE64_STRING",
      name: "Injected",
      description: "Connect with the provider in your Browser"
    },
    package: null
  },
  // Example with WalletConnect provider
  walletconnect: {
    display: {
      logo: "data:image/gif;base64,INSERT_BASE64_STRING",
      name: "Mobile",
      description: "Scan qrcode with your mobile wallet"
    },
    package: WalletConnectProvider,
    options: {
      infuraId: "INFURA_ID" // required
    }
  }
};
```
- src/hooks/useWallte.js
Here will provide web3、userAddress、chainId、networkId、resetApp、assets、getAccountAssets Wait,
Please use ConnectWallteExample.vue 
``` js
<script setup>
import useWallet from "../hooks/useWallte";
const {
  onConnect,
  connected,
  web3
  userAddress,
  chainId,
  networkId,
  resetApp,
  assets,
  getAccountAssets,
} = useWallet();
const handleWalletConnect = async () => {
  await onConnect();
  if (connected) {
    console.log("afterConnectdWallet", connected);
  }
};
 const contract = computed(
    () => new web3.value.eth.Contract(xxxABI, XXXAddress),
  );
const balanceOf =  {
    return contract.value.methods
      .balanceOf(userAddress.value)
      .call()
      .then((res) => res);
  }
  // .....

</script>
```
