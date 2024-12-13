import { PAGE_NUMBER_MAP } from '@/constants/pageNumbers';

export const getPageFromUrl = (): number => {
  const currentPath = window.location.pathname;

  return PAGE_NUMBER_MAP[currentPath] || 1;
};
