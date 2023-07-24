export const optimism = {
  id: 10,
  name: 'optimism',
  network: 'optimism',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: 'https://mainnet.optimism.io',
    default: `https://opt-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`,
  },
  blockExplorers: {
    etherscan: { name: 'Optimism Mainnet Etherscan', url: 'https://optimistic.etherscan.io/' },
    default: { name: 'Optimism Mainnet Etherscan', url: 'https://optimistic.etherscan.io/' },
  },
}