import { ID_PREFIX_LENGTH } from '@/constants/numbers';

/**
 * Creates a formatted ID string by combining a base prefix and a truncated version of the provided ID.
 *
 * This function ensures the output ID always has a fixed-length prefix (determined by `ID_PREFIX_LENGTH`),
 * followed by the first `ID_PREFIX_LENGTH` characters of the input `id`.
 *
 * Example:
 * - Input: '123456789', ID_PREFIX_LENGTH: 3
 * - Output: '000123'
 *
 * @param id - The input ID string to format.
 * @returns A formatted ID string.
 */
export const createIdString = (id: string): string => {
  const baseId = '000000';
  const formattedValue = id.slice(0, ID_PREFIX_LENGTH);

  return `${baseId.slice(0, ID_PREFIX_LENGTH)}${formattedValue}`;
};
