import { formatUnits } from 'viem';

export const formatBalance = (value?: bigint, decimals?: number, symbol?: string) => {
  if (!value || !decimals || !symbol) return '0';

  return `${formatUnits(value, decimals)} ${symbol}`;
};
