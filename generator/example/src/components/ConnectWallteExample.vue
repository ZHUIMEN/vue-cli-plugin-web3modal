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
import {USDT_API} from '../web3/abis'
import {USDT_ADDRESS} from '../web3/config'

const {
  onConnect,
  connected,
  web3,
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
    () => new web3.value.eth.Contract(USDT_API, USDT_ADDRESS),
  );
const balanceOf =  ()=>{
    return contract.value.methods
      .balanceOf(userAddress.value)
      .call()
      .then((res) => res);
  }
  // .....

</script>
