import { validateAddress, weiToEth, formatChainId, calculateGasPrice } from './base-utils.js';

describe('Base Utility Functions', () => {
  describe('validateAddress', () => {
    test('should validate correct Ethereum address', () => {
      expect(validateAddress('0x4200000000000000000000000000000000000006')).toBe(true);
    });

    test('should reject invalid address', () => {
      expect(validateAddress('invalid-address')).toBe(false);
    });

    test('should reject address without 0x prefix', () => {
      expect(validateAddress('4200000000000000000000000000000000000006')).toBe(false);
    });
  });

  describe('weiToEth', () => {
    test('should convert wei to ETH correctly', () => {
      expect(weiToEth('1000000000000000000')).toBe(1);
    });

    test('should handle zero wei', () => {
      expect(weiToEth('0')).toBe(0);
    });
  });

  describe('formatChainId', () => {
    test('should format Base chain ID correctly', () => {
      expect(formatChainId(8453)).toBe('Base Mainnet');
    });

    test('should handle unknown chain ID', () => {
      expect(formatChainId(1)).toBe('Unknown');
    });
  });

  describe('calculateGasPrice', () => {
    test('should calculate gas price correctly', () => {
      expect(calculateGasPrice(20, 5)).toBe(25);
    });
  });
});