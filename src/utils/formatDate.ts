export const formatDate = (dateString: string): string => {
  const [day, month, year] = dateString.split('.').map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
};
