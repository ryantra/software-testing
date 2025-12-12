import { describe, test, expect } from '@jest/globals';
import compact from '../../compact.js';

describe('Manual Tests - compact.js', () => {
  describe('Falsy Value Removal', () => {
    test('should remove all falsy values', () => {
      const array = [0, 1, false, 2, '', 3, null, undefined, NaN];
      const result = compact(array);
      expect(result).toEqual([1, 2, 3]);
    });

    test('should handle array with only falsy values', () => {
      const array = [false, null, 0, '', undefined, NaN];
      const result = compact(array);
      expect(result).toEqual([]);
    });

    test('should handle array with no falsy values', () => {
      const array = [1, 2, 3, 'hello'];
      const result = compact(array);
      expect(result).toEqual([1, 2, 3, 'hello']);
    });
  });

  describe('Product Filtering', () => {
    test('should remove null products from search results', () => {
      const products = [
        { name: 'A', price: 10 },
        null,
        { name: 'B', price: 20 },
        undefined
      ];
      const result = compact(products);
      expect(result).toHaveLength(2);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      expect(compact([])).toEqual([]);
    });

    test('should keep objects', () => {
      const result = compact([{}, { name: 'A' }]);
      expect(result).toHaveLength(2);
    });
  });
});