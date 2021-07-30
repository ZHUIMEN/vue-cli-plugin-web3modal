import WalletConnectProvider from '@walletconnect/web3-provider';
<%_ if (isAddTorus) { _%>
import Torus from '@toruslabs/torus-embed';
<%_ } _%> 
<%_ if (isAddAuthereum) { _%>
import Authereum from 'authereum';
<%_ } _%> 

<%_ if (isAddBitski) { _%>
import { Bitski } from 'bitski';
<%_ } _%> 

<%_ if (isAddFortmatic) { _%>
  import Fortmatic from 'fortmatic';
<%_ } _%> 
// eslint-disable-next-line global-require
const { USDT_ADDRESS } = process.env.NODE_ENV === 'production'
  ? require('./constants')
  : require('./constants.dev');
// 
const providerOptions = {
  //https://docs.walletconnect.org/
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'xxxxxxxxxx', // TODO infuraId
    },
  },
  <%_ if (isAddTorus) { _%>
    // https://github.com/torusresearch/torus-embed#readme
  torus: {
    package: Torus,
  },
  <%_ } _%> 
  <%_ if (isAddFortmatic) { _%>
    // https://docs.fortmatic.com/
  fortmatic: {
    package: Fortmatic,
    options: {
      key: 'xxxxxxxxxx', // TODO key
    },
  },
  <%_ } _%> 
  <%_ if (isAddAuthereum) { _%>
    // https://docs.authereum.com/integration
  authereum: {
    package: Authereum,
  },
  <%_ } _%>
  <%_ if (isAddBitski) { _%>
    //https://docs.bitski.com/
  bitski: {
    package: Bitski,
    options: {
      clientId: 'xxxxxxxxxx', // TODO
      callbackUrl: `${window.location.href}bitski-callback.html`,
    },
  },
  <%_ } _%>
};

export { USDT_ADDRESS, providerOptions };
