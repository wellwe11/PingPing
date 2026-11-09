import { describe, expect, it } from 'vitest';
import { validateURL } from '../validateURL.ts';

describe('validateURL types', () => {
  it('correct type as value and returns boolean', () => {
    const stringInput = validateURL('https://example.com');

    expect(stringInput).toBeTypeOf('boolean');
  });
});
