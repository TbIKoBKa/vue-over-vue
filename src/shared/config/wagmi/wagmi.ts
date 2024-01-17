import { http, createConfig } from '@wagmi/core';
import { mainnet, polygon, bsc } from '@wagmi/core/chains';
import { injected, walletConnect, coinbaseWallet } from '@wagmi/connectors';

import { ENV } from '@/shared/const/env';

export const wagmiConnectors = [
  injected({ target: 'metaMask' }),
  walletConnect({ projectId: ENV.WALLET_CONNECT_PROJECT_ID }),
  coinbaseWallet({ appName: 'Vue Over Vue' })
];

export const wagmiConfig = createConfig({
  chains: [mainnet, polygon, bsc],
  connectors: wagmiConnectors,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [bsc.id]: http()
  }
});
