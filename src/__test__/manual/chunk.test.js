import { describe, test, expect } from '@jest/globals';
import chunk from '../../chunk.js';

describe('Manual Tests - chunk.js', () => {
  describe('Basic Chunking', () => {
    test('should chunk array into groups of 2', () => {
      const result = chunk([1, 2, 3, 4, 5], 2);
      expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('should chunk array into groups of 3', () => {
      const result = chunk([1, 2, 3, 4, 5, 6], 3);
      expect(result).toEqual([[1, 2, 3], [4, 5, 6]]);
    });

    test('should chunk products for pagination', () => {
      const products = [
        { id: 1 }, { id: 2 }, { id: 3 },
        { id: 4 }, { id: 5 }
      ];
      const result = chunk(products, 2);
      expect(result).toHaveLength(3);
      expect(result[0]).toHaveLength(2);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      expect(chunk([], 2)).toEqual([]);
    });

    test('should handle size larger than array', () => {
      const result = chunk([1, 2], 5);
      expect(result).toEqual([[1, 2]]);
    });

    test('should handle size of 1', () => {
      const result = chunk([1, 2, 3], 1);
      expect(result).toEqual([[1], [2], [3]]);
    });

    test('should handle invalid size gracefully', () => {
      const result = chunk([1, 2, 3], 0);
      expect(Array.isArray(result)).toBe(true);
    });
  });
});