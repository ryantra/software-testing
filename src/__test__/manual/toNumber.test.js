import { describe, test, expect } from '@jest/globals';
import toNumber from '../../toNumber.js';

describe('Manual Tests - toNumber.js', () => {
  describe('String Conversion', () => {
    test('should convert decimal price string', () => {
      expect(toNumber('12.50')).toBe(12.50);
    });

    test('should convert integer string', () => {
      expect(toNumber('25')).toBe(25);
    });

    test('should trim whitespace', () => {
      expect(toNumber('  12.50  ')).toBe(12.50);
    });

    test('should convert negative', () => {
      expect(toNumber('-10.50')).toBe(-10.50);
    });
  });

  describe('Edge Cases', () => {
    test('should handle zero', () => {
      expect(toNumber('0')).toBe(0);
    });

    test('should return NaN for non-numeric string', () => {
      expect(isNaN(toNumber('abc'))).toBe(true);
    });

    test('should handle null', () => {
      const result = toNumber(null);
      expect(result === 0 || isNaN(result)).toBe(true);
    });

    test('should handle undefined', () => {
      expect(isNaN(toNumber(undefined))).toBe(true);
    });

    test('should handle empty string', () => {
      const result = toNumber('');
      expect(result === 0 || isNaN(result)).toBe(true);
    });
  });

  describe('Number Input', () => {
    test('should return number unchanged', () => {
      expect(toNumber(12.50)).toBe(12.50);
    });
  });
});