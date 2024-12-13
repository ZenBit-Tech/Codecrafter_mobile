export const getInitials = (name: string = ''): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};

export const addPadding = (value: number, zeroesPadding: number): string => {
  return value.toString().padStart(zeroesPadding, '0');
};
