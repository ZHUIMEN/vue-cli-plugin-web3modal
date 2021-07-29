import WalletConnectProvider from '@walletconnect/web3-provider';
<%_ if (isAddTorus === 'ts') { _%>
import Torus from '@toruslabs/torus-embed';
<%_ } _%> 
<%_ if (isAddAuthereum === 'ts') { _%>
import Authereum from 'authereum';
<%_ } _%> 

<%_ if (isAddBitski === 'ts') { _%>
import { Bitski } from 'bitski';
<%_ } _%> 

<%_ if (isAddFortmatic === 'ts') { _%>
  import Fortmatic from 'fortmatic';
<%_ } _%> 
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
  <%_ if (isAddTorus === 'ts') { _%>
  torus: {
    package: Torus,
  },
  <%_ } _%> 
  <%_ if (isAddFortmatic === 'ts') { _%>
  fortmatic: {
    package: Fortmatic,
    options: {
      key: 'xxxxxxxxxx', // TODO key
    },
  },
  <%_ } _%> 
  <%_ if (isAddAuthereum === 'ts') { _%>
  authereum: {
    package: Authereum,
  },
  <%_ } _%>
  <%_ if (isAddBitski === 'ts') { _%>
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
