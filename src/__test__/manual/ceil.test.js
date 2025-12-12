import { describe, test, expect } from '@jest/globals';
import ceil from '../../ceil.js';

describe('Manual Tests - ceil.js', () => {
  describe('Basic Rounding', () => {
    test('should round up positive decimal', () => {
      expect(ceil(4.2)).toBe(5);
    });

    test('should round up negative decimal', () => {
      expect(ceil(-4.2)).toBe(-4);
    });

    test('should return whole number unchanged', () => {
      expect(ceil(25)).toBe(25);
    });
  });

  describe('Price Rounding', () => {
    test('should round price to 2 decimals', () => {
      expect(ceil(12.346, 2)).toBe(12.35);
    });

    test('should round cart total', () => {
      expect(ceil(29.994, 2)).toBe(30.00);
    });

    test('should handle already rounded price', () => {
      expect(ceil(12.50, 2)).toBe(12.50);
    });
  });

  describe('Edge Cases', () => {
    test('should handle zero', () => {
      expect(ceil(0)).toBe(0);
    });

    test('should handle NaN', () => {
      expect(isNaN(ceil(NaN))).toBe(true);
    });
  });
});