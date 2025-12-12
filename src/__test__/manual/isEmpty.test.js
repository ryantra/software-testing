import { describe, test, expect } from '@jest/globals';
import isEmpty from '../../isEmpty.js';

describe('Manual Tests - isEmpty.js', () => {
  describe('Empty Values', () => {
    test('should return true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });

    test('should return true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true);
    });
  });

  describe('Non-Empty Values', () => {
    test('should return false for non-empty string', () => {
      expect(isEmpty('hello')).toBe(false);
    });

    test('should return false for non-empty array', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return false for object with properties', () => {
      expect(isEmpty({ name: 'Product' })).toBe(false);
    });
  });

  describe('Form Validation', () => {
    test('should validate empty required field', () => {
      const productName = '';
      expect(isEmpty(productName)).toBe(true);
    });

    test('should validate filled required field', () => {
      const productName = 'Artisan Cheese';
      expect(isEmpty(productName)).toBe(false);
    });
  });
});