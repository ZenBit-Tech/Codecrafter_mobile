import { ID_PREFIX_LENGTH } from '@/constants/numbers';

export const createIdString = (id: string): string => {
  const baseId = '000000';
  const formattedValue = id.slice(0, ID_PREFIX_LENGTH);

  return `${baseId.slice(0, ID_PREFIX_LENGTH)}${formattedValue}`;
};
