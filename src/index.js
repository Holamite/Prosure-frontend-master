import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { extendTheme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { StopScreenMessageProvider } from './constants/stopScreenMessage';

// Wagmi & RainbowKit setup
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  WagmiProvider,
  createConfig,
  http,
  configureChains,
  createClient,
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import ethereumLogo from '../src/assets/ethereum 1.svg';
import BaseSepoliaLogo from '../src/assets/BaseSepolia.svg';

import { baseSepolia } from 'wagmi/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import '@coinbase/onchainkit/styles.css';
import { coinbaseWallet } from 'wagmi/connectors';

// custom chain
const prosureBaseSepoliaTestnet = {
  id: 84532,
  name: 'BaseSepolia',
  iconUrl: BaseSepoliaLogo,
  iconBackground: '#000',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'Eth',
  },
  rpcUrls: {
    default: 'https://base-sepolia-rpc.publicnode.com',
  },
  blockExplorers: {
    etherscan: {
      name: 'BaseSepolia',
      url: 'https://base-sepolia.blockscout.com/',
    },
    default: {
      name: 'BaseSepolia',
      url: 'https://base-sepolia.blockscout.com/',
    },
  },
  contracts: {},
  testnet: true,
};

const { provider, chains } = configureChains(
  [prosureBaseSepoliaTestnet],
  [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
);

const { connectors } = getDefaultWallets({
  appName: 'Prosure',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'Prosure',
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const colors = {
  white: '#FFFFFF',
  bg: '#FBFDFF',
  navbarBgColor: 'FFFFFF',
  ctaBg: '#3E7FDF',
  footerBgColor:
    'linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05)), #FFFBFE;',
};

const theme = extendTheme({
  components: {
    // Steps,
  },
  colors,
});
// const theme = extendTheme({ colors })

root.render(
  <StopScreenMessageProvider>
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider chains={chains} coolMode>
        <OnchainKitProvider
          apiKey={process.env.REACT_ONCHAINKIT_API_KEY}
          chain={baseSepolia}
        >
          <AnimatePresence initial={false} mode="wait">
            <ChakraProvider theme={theme}>
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <ColorModeScript />
                <App />
              </SkeletonTheme>
            </ChakraProvider>
          </AnimatePresence>
        </OnchainKitProvider>
      </RainbowKitProvider>
    </WagmiProvider>
  </StopScreenMessageProvider>
);
