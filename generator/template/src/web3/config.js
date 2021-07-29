import WalletConnectProvider from '@walletconnect/web3-provider';
<% if (isAddTorus) { %>
import Torus from '@toruslabs/torus-embed';
<% } %> 
<% if (isAddAuthereum) { %>
import Authereum from 'authereum';
<% } %> 

<% if (isAddBitski) { %>
import { Bitski } from 'bitski';
<% } %> 

<% if (isAddFortmatic) { %>
  import Fortmatic from 'fortmatic';
<% } %> 
// eslint-disable-next-line global-require
const { USDT_ADDRESS } = process.env.NODE_ENV === 'production'
  ? require('./constants')
  : require('./constants.dev');

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'xxxxxxxxxx', // TODO infuraId
    },
  },
  <% if (isAddTorus) { %>
  torus: {
    package: Torus,
  },
  <% } %> 
  <% if (isAddFortmatic) { %>
  fortmatic: {
    package: Fortmatic,
    options: {
      key: 'xxxxxxxxxx', // TODO key
    },
  },
  <% } %> 
  <% if (isAddAuthereum) { %>
  authereum: {
    package: Authereum,
  },
  <% } %>
  <% if (isAddBitski) { %>
  bitski: {
    package: Bitski,
    options: {
      clientId: 'xxxxxxxxxx', // TODO
      callbackUrl: `${window.location.href}bitski-callback.html`,
    },
  },
  <% } %>
};

export { USDT_ADDRESS, providerOptions };
