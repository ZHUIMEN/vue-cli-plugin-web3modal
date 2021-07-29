<template>
  <div>
    <button @click="handleWalletConnect">WalletConnect</button>
    <button @click="resetApp">resetApp</button>
    <button @click="getAccountAssets">getBalance</button>

    <p>
      Address:
      {{ userAddress }}
    </p>
    <p>balance:{{ assets }}</p>
    <p>networkId: {{ networkId }}</p>
    <p>chainId: {{ chainId }}</p>
  </div>
</template>
<script setup>
import useWallet from "../hooks/useWallte";

const {
  onConnect,
  connected,
  // web3,
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
</script>
