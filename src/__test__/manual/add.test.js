import { describe, test, expect } from '@jest/globals';
import add from '../../add.js';

describe('Manual Tests - add.js', () => {
  describe('Basic Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(8.50, 12.50)).toBe(21.00);
    });

    test('should add zero', () => {
      expect(add(10, 0)).toBe(10);
    });

    test('should add negative number', () => {
      expect(add(20, -5)).toBe(15);
    });
  });

  describe('Floating Point Precision', () => {
    test('should handle decimal precision', () => {
      const result = add(0.1, 0.2);
      expect(result).toBeCloseTo(0.3, 10);
    });

    test('should add prices correctly', () => {
      const result = add(10.30, 20.30);
      expect(result).toBeCloseTo(30.60, 2);
    });
  });

  describe('Edge Cases', () => {
    test('should handle large numbers', () => {
      expect(add(999999, 1)).toBe(1000000);
    });

    test('should handle NaN', () => {
      expect(isNaN(add(NaN, 5))).toBe(true);
    });
  });
});