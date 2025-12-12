import { describe, test, expect } from '@jest/globals';
import get from '../../get.js';

describe('Manual Tests - get.js', () => {
  describe('Property Access', () => {
    test('should get simple property', () => {
      const obj = { name: 'Product', price: 8.50 };
      expect(get(obj, 'price')).toBe(8.50);
    });

    test('should get nested property', () => {
      const product = {
        producer: { name: 'Farm Co', location: 'Local' }
      };
      expect(get(product, 'producer.name')).toBe('Farm Co');
    });

    test('should return default for missing property', () => {
      const obj = { name: 'Product' };
      expect(get(obj, 'price', 0)).toBe(0);
    });

    test('should return undefined when no default', () => {
      const obj = { name: 'Product' };
      expect(get(obj, 'price')).toBeUndefined();
    });
  });

  describe('Null Safety', () => {
    test('should handle null object', () => {
      expect(get(null, 'property', 'default')).toBe('default');
    });

    test('should handle undefined object', () => {
      expect(get(undefined, 'property', 'default')).toBe('default');
    });

    test('should safely access missing nested property', () => {
      const obj = { name: 'Product' };
      expect(get(obj, 'producer.location', 'Unknown')).toBe('Unknown');
    });
  });
});