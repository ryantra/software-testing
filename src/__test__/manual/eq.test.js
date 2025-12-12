import { describe, test, expect } from '@jest/globals';
import eq from '../../eq.js';

describe('Manual Tests - eq.js', () => {
  describe('Primitive Equality', () => {
    test('should compare identical numbers', () => {
      expect(eq(5, 5)).toBe(true);
    });

    test('should compare different numbers', () => {
      expect(eq(5, 10)).toBe(false);
    });

    test('should compare strings', () => {
      expect(eq('hello', 'hello')).toBe(true);
      expect(eq('hello', 'world')).toBe(false);
    });
  });

  describe('Type Coercion', () => {
    test('should handle string vs number', () => {
      const result = eq('5', 5);
      expect(typeof result).toBe('boolean');
    });
  });

  describe('Null and Undefined', () => {
    test('should compare null values', () => {
      expect(eq(null, null)).toBe(true);
    });

    test('should compare undefined values', () => {
      expect(eq(undefined, undefined)).toBe(true);
    });

    test('should compare null vs undefined', () => {
      const result = eq(null, undefined);
      expect(typeof result).toBe('boolean');
    });
  });

  describe('Special Cases', () => {
    test('should handle NaN comparison', () => {
      const result = eq(NaN, NaN);
      expect(typeof result).toBe('boolean');
    });

    test('should compare same object reference', () => {
      const obj = { name: 'Test' };
      expect(eq(obj, obj)).toBe(true);
    });

    test('should compare different object instances', () => {
      const result = eq({ name: 'Test' }, { name: 'Test' });
      expect(typeof result).toBe('boolean');
    });
  });

  describe('Validation Use Case', () => {
    test('should validate category selection', () => {
      const selectedCategory = 'vegetables';
      const productCategory = 'vegetables';
      expect(eq(selectedCategory, productCategory)).toBe(true);
    });

    test('should detect price mismatch', () => {
      expect(eq(10.50, 10.51)).toBe(false);
    });
  });
});
