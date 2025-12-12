import { describe, test, expect } from '@jest/globals';
import filter from '../../filter.js';

describe('Manual Tests - filter.js', () => {
  describe('Happy Path', () => {
    test('should filter products by price range', () => {
      const products = [
        { id: 1, name: 'Tomatoes', price: 8.50 },
        { id: 2, name: 'Cheese', price: 12.50 },
        { id: 3, name: 'Bread', price: 6.00 }
      ];
      const result = filter(products, p => p.price >= 5 && p.price <= 10);
      expect(result).toHaveLength(2);
    });

    test('should filter by category', () => {
      const products = [
        { name: 'A', category: 'vegetables' },
        { name: 'B', category: 'dairy' },
        { name: 'C', category: 'vegetables' }
      ];
      const result = filter(products, p => p.category === 'vegetables');
      expect(result).toHaveLength(2);
    });
  });

  describe('Edge Cases', () => {
    test('should return empty array when input is empty', () => {
      const result = filter([], item => item.price > 10);
      expect(result).toEqual([]);
    });

    test('should return empty array when no matches', () => {
      const products = [{ price: 5 }, { price: 8 }];
      const result = filter(products, p => p.price > 100);
      expect(result).toEqual([]);
    });

    test('should handle null values in array', () => {
      const products = [{ price: 10 }, null, { price: 20 }];
      const result = filter(products, p => p && p.price > 5);
      expect(result).toHaveLength(2);
    });
  });

  describe('Functional Programming', () => {
    test('should not mutate original array', () => {
      const original = [{ id: 1 }, { id: 2 }];
      const copy = [...original];
      filter(original, p => p.id > 1);
      expect(original).toEqual(copy);
    });
  });
});