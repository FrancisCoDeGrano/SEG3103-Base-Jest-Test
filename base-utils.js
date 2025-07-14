// base-utils.js
export function validateAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }
  
  export function weiToEth(wei) {
    return parseFloat(wei) / Math.pow(10, 18);
  }
  
  export function formatChainId(chainId) {
    return chainId === 8453 ? 'Base Mainnet' : 'Unknown';
  }
  
  export function calculateGasPrice(baseFee, priorityFee) {
    return baseFee + priorityFee;
  }