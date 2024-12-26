/* eslint-disable no-magic-numbers */
import { addPadding, getInitials, truncateString } from './stringUtils';

describe('getInitials', () => {
  it('should return empty string if the name is empty', () => {
    expect(getInitials('')).toBe('');
  });

  it('should return the first letter of a single word name', () => {
    expect(getInitials('John')).toBe('J');
  });

  it('should return initials for a multi-word name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('should return initials in uppercase', () => {
    expect(getInitials('john doe')).toBe('JD');
  });

  it('should handle names with multiple spaces between words', () => {
    expect(getInitials('  John    Doe  ')).toBe('JD');
  });
});

describe('addPadding', () => {
  it('should add leading zeros to a number', () => {
    expect(addPadding(5, 3)).toBe('005');
  });

  it('should not add padding if the number is already the correct length', () => {
    expect(addPadding(123, 3)).toBe('123');
  });

  it('should add the correct number of leading zeros', () => {
    expect(addPadding(5, 5)).toBe('00005');
  });
});

describe('truncateString', () => {
  it('should return the original string if its length is less than or equal to maxLength', () => {
    expect(truncateString('Short string', 15)).toBe('Short string');
  });

  it('should truncate the string and add an ellipsis if it exceeds maxLength', () => {
    expect(truncateString('This is a very long string', 10)).toBe(
      'This is a...'
    );
  });

  it('should not add ellipsis if the string is exactly maxLength', () => {
    expect(truncateString('Exact length', 12)).toBe('Exact length');
  });

  it('should handle empty strings correctly', () => {
    expect(truncateString('', 10)).toBe('');
  });
});
