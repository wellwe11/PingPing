import { describe, it, expect } from 'vitest';
import { validateURL } from '../validateURL.ts';

describe('validateURL booleans', () => {
  it('returns true with correct url', () => {
    const validHTTP = validateURL('http://example.come');
    const validHTTPS = validateURL('https://example.com');

    expect(validHTTP).toBe(true);
    expect(validHTTPS).toBe(true);
  });

  it('returns false if incorrect url', () => {
    const invalidHTTP = validateURL('htt://example.come');
    const noHTTP = validateURL('example.come');
    const invalidHTTPS = validateURL('httpss//example.com');

    expect(invalidHTTP).toBe(false);
    expect(noHTTP).toBe(false);
    expect(invalidHTTPS).toBe(false);
  });
});
