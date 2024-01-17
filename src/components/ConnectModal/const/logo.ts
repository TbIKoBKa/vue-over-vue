import type { Component } from 'vue';
import { Metamask, Coinbase, WalletConnect } from '@/shared/ui/icons';

export const logoById: Record<string, Component> = {
  metaMask: Metamask,
  walletConnect: WalletConnect,
  coinbaseWalletSDK: Coinbase
};
