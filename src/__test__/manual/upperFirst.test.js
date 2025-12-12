import { describe, test, expect } from '@jest/globals';
import upperFirst from '../../upperFirst.js';

describe('Manual Tests - upperFirst.js', () => {
  describe('Capitalization', () => {
    test('should capitalize first letter', () => {
      expect(upperFirst('hello')).toBe('Hello');
    });

    test('should handle already capitalized', () => {
      expect(upperFirst('Hello')).toBe('Hello');
    });

    test('should capitalize description', () => {
      expect(upperFirst('handcrafted cheese')).toBe('Handcrafted cheese');
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty string', () => {
      expect(upperFirst('')).toBe('');
    });

    test('should handle single character', () => {
      expect(upperFirst('a')).toBe('A');
    });

    test('should handle all caps', () => {
      const result = upperFirst('HELLO');
      expect(result[0]).toBe('H');
    });
  });

  describe('Producer Form Validation', () => {
    test('should validate description starts with capital', () => {
      const description = 'handcrafted cheese from local goats';
      const result = upperFirst(description);
      expect(result[0]).toBe('H');
      expect(result).toBe('Handcrafted cheese from local goats');
    });
  });
});